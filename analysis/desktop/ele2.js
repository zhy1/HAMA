/**
 * Created by zy on 16/5/27.
 */
"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj
};
~function (w, $) {
    if (!document.addEventListener)return "IE8 sucks";
    void function () {
        var setTimeoutCustom = w.setTimeout;
        w.setTimeout = function (callback, timeout) {
            var args = [].slice.call(arguments, 2);
            return setTimeoutCustom(function () {
                asynchronousErrorCatch(callback, args)
            }, timeout)
        };
        var setIntervalCustom = w.setInterval;
        w.setInterval = function (callback, interval) {
            var args = [].slice.call(arguments, 2);
            return setIntervalCustom(function () {
                asynchronousErrorCatch(callback, args)
            }, interval)
        }
    }();
    var TRACKER = "https://perf.ele.me/_.gif?";
    var ERROR = {
        id: function id(ev) {
            return 'You need a "project/id", like perf-' + ev + '="project/id"'
        }, data: "`perf-data` show be a json string"
    };
    var errorCache = {};
    errorHandler();
    var isLoad = 0;
    if (w.performance) {
        w.addEventListener("beforeunload", savePerf);
        w.addEventListener("load", savePerf)
    }
    w.perf = {send: send, stat: caculatePerf};
    w.addEventListener("load", initCustomPerfEvent);
    function send(message) {
        if (!message.id) {
            if (w.PERF_DEBUG)throw new Error(ERROR.id("click"));
            console.log(ERROR.id(click))
        }
        var img = new Image;
        img.src = TRACKER + obj2Query(message) + ("&time=" + Date.now());
        if (typeof w.PERF_DEBUG === "function")w.PERF_DEBUG(message);
        return perf
    }

    function errorHandler() {
        w.addEventListener("error", function (e) {
            var key = e.filename + e.lineno + e.colno + w.location.href;
            if (errorCache[key])return;
            errorCache[key] = true;
            send({id: w.location.href, line: e.lineno + ":" + e.colno, file: e.filename, error: e.message})
        })
    }

    function eventHandler(e) {
        var ev = e.type;
        var raw = {};
        var message = {id: this.getAttribute("perf-" + ev), event: ev};
        if (!message.id) {
            if (w.PERF_DEBUG)throw new Error(ERROR.id(ev));
            return console.log(ERROR.id(ev))
        }
        if (this.getAttribute("perf-route"))message.route = this.getAttribute("perf-route");
        var err = null;
        if (this.getAttribute("perf-data")) {
            raw = this.getAttribute("perf-data");
            try {
                raw = JSON.parse(raw)
            } catch (e) {
                err = 1;
                if (w.PERF_DEBUG)throw new Error(ERROR.data);
                console.log(err)
            }
        }
        if (!err)send(asign(raw, message))
    }

    function type(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1)
    }

    function caculatePerf() {
        var table = [["lookup", ["requestStart", "navigationStart"]], ["waiting", ["responseStart", "requestStart"]], ["receiving", ["responseEnd", "responseStart"]], ["parsing", ["domComplete", "domLoading"]], ["contentLoaded", ["domContentLoadedEventStart", "navigationStart"]], ["pageLoaded", ["loadEventStart", "navigationStart"]]];
        var detail = {};
        table.forEach(function (item) {
            return detail[item[0]] = time.apply(w.performance, item[1])
        });
        return detail;
        function time(end, start) {
            return this.timing[end] - this.timing[start]
        }
    }

    function savePerf() {
        if (isLoad)return;
        isLoad = 1;
        send({id: w.location.href, perf: caculatePerf()})
    }

    function obj2Query(obj) {
        var str = "";
        var _loop = function _loop() {
            if (!obj.hasOwnProperty(p))return "continue";
            var encodedP = encodeURIComponent(p);
            if (type(obj[p]) === "Array") {
                str += obj[p].map(function (item) {
                    return encodedP + "[]=" + encodeURIComponent(item)
                }).join("&");
                str += "&"
            } else if (type(obj[p]) === "Object") {
                var cur = obj[p];
                for (k in cur) {
                    str += cur[k] ? encodedP + "[" + k + "]=" + encodeURIComponent(cur[k]) + "&" : ""
                }
            } else {
                str += encodedP + "=" + encodeURIComponent(obj[p]) + "&"
            }
        };
        for (var p in obj) {
            var k;
            var _ret = _loop();
            if (_ret === "continue")continue
        }
        return str.slice(0, -1)
    }

    function asign(dist, src) {
        for (var p in src) {
            dist[p] = src[p]
        }
        return dist
    }

    function asynchronousErrorCatch(callback, args) {
        try {
            if (typeof callback !== "function")callback = new Function(callback);
            callback.apply(null, args)
        } catch (error) {
            var error2Send = generateError(error, callback);
            var key = JSON.stringify(error2Send);
            if (errorCache[key])return;
            errorCache[key] = true;
            send(error2Send)
        }
    }

    function generateError(error, callback) {
        var ret = {};
        if (typeof error === "string") {
            ret = {line: "0:0", file: callback.toString(), error: error}
        } else if ((typeof error === "undefined" ? "undefined" : _typeof(error)) === "object") {
            if (error.sourceURL) {
                ret = {line: error.line + ":" + error.column, file: error.sourceURL, error: error.message}
            } else if (error.stack) {
                var stackDetail = error.stack.split("\n");
                var errorName = error.toString();
                var regexpCheckErrorStack = /(https?:\/\/.*?):(\d*):(\d*)/;
                var errorDetail = void 0;
                for (var i = 0, len = stackDetail.length; i < len; ++i) {
                    var statckItem = stackDetail[i];
                    if (regexpCheckErrorStack.test(statckItem)) {
                        errorDetail = regexpCheckErrorStack.exec(statckItem);
                        break
                    }
                }
                if (errorDetail && errorDetail.length > 3) {
                    ret = {line: errorDetail[2] + ":" + errorDetail[3], file: errorDetail[1], error: errorName}
                } else {
                    ret = {line: "0:0", file: stackDetail.toString(), error: errorName}
                }
            }
        }
        ret.id = window.location.href;
        return ret
    }

    function initCustomPerfEvent() {
        ["click", "contextmenu", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseup", "keydown", "keypress", "keyup", "abort", "beforeunload", "error", "hashchange", "load", "pageshow", "pagehide", "resize", "scroll", "unload", "blur", "change", "focus", "focusin", "focusout", "input", "invalid", "reset", "search", "select", "submit", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "copy", "cut", "paste", "afterprint", "beforeprint", "abort", "canplay", "canplaythrough", "durationchange", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "animationend", "animationiteration", "animationstart", "transitionend"].forEach(function (ev) {
            var els = $("[perf-" + ev + "]");
            if (!els.length)return;
            [].slice.call(els).forEach(function (el) {
                return el.addEventListener(ev, eventHandler)
            })
        })
    }
}(window, function (selector, parent) {
    parent = document || parent;
    return parent.querySelectorAll(selector)
});