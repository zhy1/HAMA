!function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.hybridAPI = n()
}(this, function() {
    "use strict";
    var e = window.navigator.userAgent
        , n = void 0;
    if (/rajax|eleme/i.test(e)) {
        var t = e.match(/Eleme\/([0-9]+)\.([0-9]+)/i);
        n = 100 * Number(t[1]) + Number(t[2])
    }
    var i = 509 > n
        , o = function(e) {
            try {
                return JSON.parse(e) || {}
            } catch (n) {
                return !1
            }
        }
        , r = function(e) {
            return Object.keys(e).map(function(n) {
                return encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
            }).join("&")
        }
        , a = function(e) {
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++)
                t[o - 1] = arguments[o];
            var r = window.WebViewJavascriptBridge
                , a = i ? "WebViewJavascriptBridgeInjectFinishedReady" : "WebViewJavascriptBridgeReady"
                , d = function() {
                    r = window.WebViewJavascriptBridge;
                    try {
                        r.init()
                    } catch (n) {}
                    setTimeout(function() {
                        try {
                            if (window.EJsBridge && window.EJsBridge[e])
                                window.EJsBridge[e].apply(window.EJsBridge, t);
                            else if (window.JsBridge && window.JsBridge[e])
                                window.JsBridge[e].apply(window.JsBridge, t);
                            else if (r) {
                                var n;
                                (n = r).callHandler.apply(n, [e].concat(t))
                            }
                        } catch (i) {}
                    }, 0)
                }
                ;
            window.EJsBridge || window.JsBridge || r ? d() : document.addEventListener(a, d)
        }
        , d = {
            getGlobalGeohash: function(e) {
                var n = i ? [""] : [];
                n.push(function(n) {
                    e(o(n) || n)
                }),
                    a.apply(void 0, ["getGlobalGeohash"].concat(n))
            },
            share: function(e) {
                if (i) {
                    var n = ["0", "1", "2"]
                        , t = n.map(function(n) {
                            return "eleme://share?" + r({
                                    type: n,
                                    title: e.title,
                                    text: "2" === n ? e.weibo || e.text : e.text,
                                    url: e.url,
                                    image_url: e.image_url
                                })
                        });
                    a("showShareButton", {
                        weixin_session: t[0],
                        weixin_timeline: t[1],
                        weibo: t[2]
                    })
                } else
                    document.head.insertAdjacentHTML("afterbegin", '<meta name="eleme-share">\n        <meta name="eleme-share:title" content="' + e.title + '">\n        <meta name="eleme-share:description" content="' + e.text + '">\n        <meta name="eleme-share:image" content="' + e.image_url + '">')
            },
            selectHongbao: function(e) {
                a(i ? "selectedHongbao" : "selectHongbao", e, i ? function() {}
                    : null )
            }
        };
    return d
});
