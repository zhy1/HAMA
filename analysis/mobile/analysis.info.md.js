//1532
angular.module("meleme").run(["$rootScope", function (e) {
    var t = document.domain.replace(/^(.+?\.)??(?=(test\.|alpha\.|beta\.)?[^.]+\.\w+$)/, "")
        , r = location.protocol;
    e.ROOTHOST = t,
        e.MOBILEORIGIN = r + "//" + location.hostname,
        e.SALEHOST = "sales." + t,

        e.RESTBASE = "/restapi",

        e.PAYMENTBASE = "//p." + t,
        e.ACCOUNTBASE = "//account." + t,
        e.STATICBASE = "//static11.elemecdn.com",
    ~t.indexOf("test") && (e.STATICBASE = ""),
        e.MAINBASE = "//v5." + t,
        void function () {
            var r = ["//fuss10.elemecdn.com", "//fuss2." + t]
                , n = 0;
            void function o() {
                var t = r[n++];
                if (t) {
                    var i = new Image;
                    i.onerror = function () {
                        e.$apply(o)
                    }
                        ,
                        i.src = e.FUSSBASE = t
                }
            }()
        }()
}
])


//1908

factory("Pay", ["$resource", "$rootScope", function (e, t) {
    var r = {};
    return r.make = function (r) {
        var n = r.orderId
            , o = r.userId;
        return e(t.RESTBASE + "/v2/users/:userId/orders/:orderId/payments/msite", {
            userId: "@userId",
            orderId: "@orderId"
        }).get({
            orderId: n,
            userId: o
        }).$promise.then(function (e) {
                var t = e.pay_url;
                return location.href = decodeURIComponent(t)
            })
    }, r
}])


angular.module("meleme").controller("tradeOrderCtrl", ["$rootScope", "$scope", "$route", "$routeParams", "$location", "$q", "UserAgent", "OrderTrades", "SweetAlert", "Cart", "I18N", "Pay", function (e, t, r, n, o, i, a, s, l, c, u, d) {
    t.order = {},
        t.tradeStatusList = [],
        t.displayimeline = !1;
    var m, f = c.init().$promise, p = n.id, g = {
        failed_pay: "order-timeline-fail-pay",
        cancel_order: "order-timeline-cancel-order",
        order: "order-timeline-order",
        payment: "order-timeline-payment",
        restaurant: "order-timeline-restaurant",
        distribution: "order-timeline-distribution",
        arrive: "order-timeline-arrive",
        customer_service: "order-timeline-customer-service",
        completion_order: "order-timeline-completion-order"
    };
    e.loading = !0;
    var h = function (e) {
            s.get(e, function (e) {
                for (var r = e.timeline, n = "icon-", o = 0; o < r.length; o++)
                    r[o].src = g[r[o].type],
                        r[o].src = n + r[o].src,
                        r[o].src += "closed" === r[o].status ? "-blue" : "-grey";
                t.tradeStatusList = r,
                    t.displayimeline = e.timeline_detail_enabled
            }, function (e) {
                setTimeout(function () {
                    throw JSON.stringify(e)
                })
            })
        }
        ;
    t.goToTimeLine = function () {
        t.displayimeline && o.url("/trade/timeline/" + t.order.unique_id)
    }
        ,
        e.profile.$promise.then(function (e) {
            m = e.user_id
        }, function (e) {
            return "HTTP_UNAUTHORIZED" !== e.data.name ? i.reject(e.data) : void (m = "anonymous")
        }).then(function () {
            s.get({
                user_id: m,
                order_id: p,
                "extras[]": ["basket", "order_rate", "restaurant", "order_status"]
            }, function (e) {
                t.order = e,
                    t.status = e.order_status,
                    t.foodQuantity = function () {
                        var t = 0;
                        return e.basket.group[0].forEach(function (e) {
                            t += e.quantity
                        }),
                            t
                    }
                    ,
                    h({
                        user_id: m,
                        order_id: p,
                        action: "status"
                    })
            }, function () {
                o.url("/404")
            })
        })["finally"](function () {
            e.loading = !1
        }),
        t.payRepeatCheck = function () {
            d.make({
                orderId: p,
                userId: e.profile.user_id
            })["catch"](function (e) {
                swal({
                    title: "出错啦",
                    text: e.data.message || "服务端未知错误",
                    confirmButtonText: "返回"
                })
            })
        }
        ,
        t.options = ["商家已确认，但没有送外卖", "商家参加了活动，但没有优惠", "吐槽其他"],
        t.itemToggle = function (e) {
            t.errorStatus = !1,
                t.itemIndex = e
        }
        ,
        t.cancelOrder = function () {
            t.status.is_direct_cancelable ? l.swal({
                title: "是否取消订单",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "取消订单",
                cancelButtonText: "再等等"
            }, function (e) {
                e && s.post({
                    user_id: m,
                    order_id: p,
                    action: "cancel"
                }, function () {
                    o.url("/cancelreason/" + t.order.unique_id)
                }, function (e) {
                    l.swal({
                        title: "出错啦",
                        text: e.data.message,
                        customClass: "complaint-service-box",
                        confirmButtonText: "确定"
                    })
                })
            }) : o.url("/cancelorder/" + t.order.unique_id)
        }
        ,
        t.submitCheck = function () {
            t.errorStatus = 2 === t.itemIndex && !t.mockText,
            t.errorStatus || s.save({
                user_id: e.profile.user_id,
                order_id: p,
                action: "complaint",
                complaint_type: t.itemIndex,
                content: 2 === t.itemIndex ? t.mockText : ""
            }, function () {
                l.swal({
                    title: "反馈成功",
                    text: "感谢您对我们的支持和帮助，我们会尽快核实，核实无误后，会对商家进行惩罚",
                    customClass: "complaint-service-box",
                    confirmButtonText: "知道了"
                }),
                    t.order.complaint_status = 1,
                    t.showReport = !1
            }, function (e) {
                l.swal({
                    title: "出错啦",
                    text: e.data.message,
                    customClass: "complaint-service-box",
                    confirmButtonText: "知道了"
                }),
                    t.showReport = !1
            })
        }
    ;
    var v = function () {
            c.repeat({
                user_id: m,
                order_id: p
            }).$promise.then(function () {
                    o.url("/shop/" + t.order.restaurant.id)
                }, function (e) {
                    var t = u.cartRepeatStatus[e && e.data.name] || u.cartRepeatStatus.SERVER_UNKNOWN_ERROR;
                    l.swal(angular.extend({
                        confirmButtonText: "知道啦"
                    }, t))
                })
        }
        ;
    t.foodRepeat = function () {
        t.order.order_status.is_rebuyable ? f.then(function () {
            c.isEmpty() ? c.clearRemote().then(v) : l.swal({
                title: u.cartRepeatStatus.CART_IS_NOT_EMPTY.title,
                text: u.cartRepeatStatus.CART_IS_NOT_EMPTY.text.replace(/%r/, c.getRestaurant().name),
                showCancelButton: !0,
                confirmButtonColor: "#3199e8",
                confirmButtonText: "清空",
                cancelButtonText: "取消"
            }, function (e) {
                e && (c.clear(),
                    c.setRestaurant(t.order.restaurant),
                    c.clearRemote().then(v))
            })
        }) : l.swal({
            title: "温馨提示",
            text: t.order.order_status.rebuy_not_supported_reason,
            customClass: "complaint-service-box",
            confirmButtonText: "确定"
        })
    }
        ,
        t.cancelRefund = function () {
            l.swal({
                title: "取消退单",
                text: "取消退单后无法再次申请退单，确定要取消退单吗？",
                customClass: "complaint-service-box",
                confirmButtonText: "确定取消退单",
                showCancelButton: !0,
                cancelButtonText: "再等等"
            }, function (e) {
                e && s.post({
                    user_id: m,
                    order_id: p,
                    action: "refunding",
                    refunding_action: "cancel",
                    password: t.password
                }, function () {
                    o.reload()
                }, function (e) {
                    l.swal({
                        title: "出错啦",
                        text: e.data.message,
                        customClass: "complaint-service-box",
                        confirmButtonText: "确定"
                    })
                })
            })
        }
        ,
        t.applyService = function () {
            s.post({
                user_id: m,
                order_id: p,
                action: "refunding",
                refunding_action: "arbitrate",
                reason: t.applyServiceReason
            }, function () {
                l.swal({
                    title: "申请客服介入成功",
                    type: "success",
                    confirmButtonText: "确定"
                }, function () {
                    r.reload()
                })
            }, function (e) {
                l.swal({
                    title: "出错啦",
                    text: e.data.message,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确定"
                })
            })
        }
        ,
        t.errorLen = !1,
        t.verifylength = function () {
            t.applyServiceReason && (t.errorLen = t.applyServiceReason.replace(/[\u0100-\uFFFF]/g, "00").length > 200)
        }
        ,
        t.reverBool = function (e) {
            t[e] = !t[e]
        }
}
])