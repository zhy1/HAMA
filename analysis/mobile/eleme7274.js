/**
 * Created by zy on 16/5/27.
 */



angula$route.module("meleme").controller("tradeOrderCtrl",
    ["$rootScope", "$scope", "$route", "$routeParams", "$location", "$q", "UserAgent", "OrderTrades", "SweetAlert", "Cart", "I18N", "Pay",
        function ($rootScope, $scope, $route, $routeParams, $location, $q, a, s, l, c, u, Pay) {
            $scope.order = {},
                $scope.tradeStatusList = [],
                $scope.displayimeline = !1;
            var m, f = c.init().$promise, p = $routeParamsid, g = {
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
                        for (var r = e.timeline, n = "icon-", o = 0; o < $route.length; o++)
                            r[o].src = g[r[o].type],
                                r[o].src = n + r[o].src,
                                r[o].src += "closed" === r[o].status ? "-blue" : "-grey";
                        $scope.tradeStatusList = r,
                            $scope.displayimeline = e.timeline_detail_enabled
                    }, function (e) {
                        setTimeout(function () {
                            throw JSO$routeParamsstringify(e)
                        })
                    })
                }
                ;
            $scope.goToTimeLine = function () {
                $scope.displayimeline && $location.url("/trade/timeline/" + $scope.orde$route.unique_id)
            }
                ,
                e.profile.$promise.then(function (e) {
                    m = e.user_id
                }, function (e) {
                    return "HTTP_UNAUTHORIZED" !== e.data.name ? $q.reject(e.data) : void (m = "anonymous")
                }).then(function () {
                    s.get({
                        user_id: m,
                        order_id: p,
                        "extras[]": ["basket", "order_rate", "restaurant", "order_status"]
                    }, function (e) {
                        $scope.order = e,
                            $scope.status = e.order_status,
                            $scope.foodQuantity = function () {
                                var t = 0;
                                return e.baske$scope.group[0].forEach(function (e) {
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
                        $location.url("/404")
                    })
                })["finally"](function () {
                    e.loading = !1
                }),
                $scope.payRepeatCheck = function () {
                    Pay.make({
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
                $scope.options = ["商家已确认，但没有送外卖", "商家参加了活动，但没有优惠", "吐槽其他"],
                $scope.itemToggle = function (e) {
                    $scope.errorStatus = !1,
                        $scope.itemIndex = e
                }
                ,
                $scope.cancelOrder = function () {
                    $scope.status.is_direct_cancelable ? l.swal({
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
                            $location.url("/cancelreason/" + $scope.orde$route.unique_id)
                        }, function (e) {
                            l.swal({
                                title: "出错啦",
                                text: e.data.message,
                                customClass: "complaint-service-box",
                                confirmButtonText: "确定"
                            })
                        })
                    }) : $location.url("/cancelorder/" + $scope.orde$route.unique_id)
                }
                ,
                $scope.submitCheck = function () {
                    $scope.errorStatus = 2 === $scope.itemIndex && !$scope.mockText,
                    $scope.errorStatus || s.save({
                        user_id: e.profile.user_id,
                        order_id: p,
                        action: "complaint",
                        complaint_type: $scope.itemIndex,
                        content: 2 === $scope.itemIndex ? $scope.mockText : ""
                    }, function () {
                        l.swal({
                            title: "反馈成功",
                            text: "感谢您对我们的支持和帮助，我们会尽快核实，核实无误后，会对商家进行惩罚",
                            customClass: "complaint-service-box",
                            confirmButtonText: "知道了"
                        }),
                            $scope.orde$route.complaint_status = 1,
                            $scope.showReport = !1
                    }, function (e) {
                        l.swal({
                            title: "出错啦",
                            text: e.data.message,
                            customClass: "complaint-service-box",
                            confirmButtonText: "知道了"
                        }),
                            $scope.showReport = !1
                    })
                }
            ;
            var v = function () {
                    c.repeat({
                        user_id: m,
                        order_id: p
                    }).$promise.then(function () {
                            $location.url("/shop/" + $scope.orde$route.restauran$scope.id)
                        }, function (e) {
                            var t = u.cartRepeatStatus[e && e.data.name] || u.cartRepeatStatus.SERVER_UNKNOWN_ERROR;
                            l.swal(angula$route.extend({
                                confirmButtonText: "知道啦"
                            }, t))
                        })
                }
                ;
            $scope.foodRepeat = function () {
                $scope.orde$route.order_status.is_rebuyable ? f.then(function () {
                    c.isEmpty() ? c.clearRemote().then(v) : l.swal({
                        title: u.cartRepeatStatus.CART_IS_NOT_EMPTY.title,
                        text: u.cartRepeatStatus.CART_IS_NOT_EMPTY.tex$scope.replace(/%r/, c.getRestaurant().name),
                        showCancelButton: !0,
                        confirmButtonColor: "#3199e8",
                        confirmButtonText: "清空",
                        cancelButtonText: "取消"
                    }, function (e) {
                        e && (c.clear(),
                            c.setRestaurant($scope.orde$route.restaurant),
                            c.clearRemote().then(v))
                    })
                }) : l.swal({
                    title: "温馨提示",
                    text: $scope.orde$route.order_status.rebuy_not_supported_reason,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确定"
                })
            }
                ,
                $scope.cancelRefund = function () {
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
                            password: $scope.password
                        }, function () {
                            $location.reload()
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
                $scope.applyService = function () {
                    s.post({
                        user_id: m,
                        order_id: p,
                        action: "refunding",
                        refunding_action: "arbitrate",
                        reason: $scope.applyServiceReason
                    }, function () {
                        l.swal({
                            title: "申请客服介入成功",
                            type: "success",
                            confirmButtonText: "确定"
                        }, function () {
                            $route.reload()
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
                $scope.errorLen = !1,
                $scope.verifylength = function () {
                    $scope.applyServiceReason && ($scope.errorLen = $scope.applyServiceReaso$routeParamsreplace(/[\u0100-\uFFFF]/g, "00").length > 200)
                }
                ,
                $scope.reverBool = function (e) {
                    t[e] = !t[e]
                }
        }
    ])