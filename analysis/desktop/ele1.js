/**
 * Created by zy on 16/5/27.
 */
webpackJsonp([3], [function (t, e, a) {
    "use strict";
    a(1), a(11);
    var n = a(32), i = a(196)([["/place/:geohash", a(255)], ["/premium/:geohash", a(275)], ["/place/:geohash/search/:keyword", a(279)], ["/activity", a(283)], ["/activity/:id", a(283)], ["/shop/:id", a(287)], ["/shop/:id/:action", a(287)], ["/cart/checkout", a(363)], ["/order/:orderId/pay", a(397)], ["/order/:orderId/success/offline", a(403)], ["/order/:orderId/success/online", a(403)]]);
    n.config(i).config(["$routeProvider", function (t) {
        t.when("/", {redirectTo: "/place"}), t.when("/:page", {
            template: "<div></div>",
            controller: ["$rootScope", "$location", "$routeParams", function (t, e, a) {
                var n = ["place", "premium"], i = a.page, r = localStorage.getItem("GEOHASH");
                if (-1 !== n.indexOf(i)) {
                    if (r)return e.url(a.page + "/" + r);
                    location.href = "/home"
                }
            }]
        })
    }])
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, a) {
    t.exports = a.p + "media/img/default-avatar.38e40d.png"
}, , , , , , , , , , , , , , , , , function (t, e, a) {
    "use strict";
    var n = a(256);
    a(259);
    var i = ["$scope", "$routeParams", "$rootScope", "RestaurantStream", "Zero", function (t, e, a, n, i) {
        a.geohash = t.geohash = e.geohash, t.searchRestaurants = [], t.searchFoods = [];
        var r = function () {
            localStorage.removeItem("GEOHASH"), location.href = "/home"
        };
        if (/[\Wailo_]|^$/.test(a.geohash || ""))return r();
        localStorage.setItem("GEOHASH", t.geohash), t.rstStream = n({geohash: t.geohash});
        var s = a.$watch("place", function (e) {
            e.$promise.then(function () {
                var n = e.name;
                n && (a.SEO.title = n + "附近美食_外卖商家_" + e.adInfo + "-饿了么网上订餐", a.SEO.keywords = n + "美食，" + n + "商家，" + n + "外卖", a.SEO["mobile-agent"] = "format=html5; url=http://m.ele.me/place/" + e.geohash, t.rstStream.$promise.then(function () {
                    var e = t.rstStream.restaurants.slice(0, 5).map(function (t) {
                        return t.name
                    });
                    a.SEO.description = n + "附近的商家美食有" + e.join("、") + "等，更多美食外卖，尽在饿了么。"
                }), s())
            })
        });
        t.activityClick = function (t) {
            var e = t.currentTarget;
            if (!e)for (e = t.target; "HTML" !== e.nodeName && "A" !== e.nodeName;)e = e.parentNode;
            e && "#" === e.getAttribute("href") && t.preventDefault()
        }, i.content.query({geohash: a.geohash, consumer: 3}).$promise.then(function (e) {
            t.activities = e.map(function (t) {
                switch (t.type) {
                    case 1:
                        t.href = t.link;
                        break;
                    case 2:
                        t.href = "/activity/" + t.template_id
                }
                return t
            })
        })["catch"](function (t) {
            return Error(t)
        })
    }];
    angular.module("eleme.page").factory("RestaurantStream", a(261)).factory("Search", a(262)).factory("RstPopOver", a(263).RstPopOver).directive("rstPopover", a(263).rstPopover).directive("excavator", a(267)).directive("autocomplete", a(271).autocomplete).directive("searchInput", a(271).searchInput), t.exports = {
        templateUrl: n,
        controller: i
    }
}, function (t, e, a) {
    var n = "/entry/main/place/place.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(n, '<div class="container clearfix"><div location></div><div search-input></div></div><div class="place-ad container" role=banner ng-if=activities><div carousel class=activity-carousel><div slide ng-repeat="activity in activities"><a rel=nofollow ng-href={{activity.href}} target=_blank ng-click=activityClick($event) ubt-visit=693 ubt-click=694 ng-attr-ubt-data-url={{activity.href}}><img ng-src="{{activity.image_path | imgOptimize}}" alt={{activity.name}}></a></div></div></div><div class="place-tab clearfix container"><div class=place-fetchtakeout show-fetch-takeout-dialog><img src=' + a(257) + ' alt="谁去拿外卖"></div></div><div ng-show=!recentBoughtOnly class=container><excavator></excavator><div class=place-tips ng-if=place.premiumCount ubt-visit=385><span ng-if=place.premiumCount>想吃好点的，看看附近 <var>{{place.premiumCount}} 家</var> 品牌商家吧，<a href=/premium ubt-click=388>立即查看</a></span></div><div class="place-rstbox clearfix"><rst-view data="filteredRestaurants = (rstStream.restaurants | filter: rstStream.filter | filter: otherFilter | orderBy: [ \'-is_opening\', rstStream.orderBy || \'index\' ])"></rst-view><div ng-show="rstStream.status === \'LOADING\'" loading content=正在载入更多商家... type=normal></div><div class=place-rstbox-nodata ng-show="rstStream.status === \'COMPLETE\' && !filteredRestaurants.length"><img class=nodata width=100 src=' + a(258) + " alt=找不到商家><div class=typo-small>附近没有找到符合条件的商家，换个筛选条件试试吧</div></div></div></div>")
    }]), t.exports = n
}, function (t, e, a) {
    t.exports = a.p + "media/img/takeout.f58d1e.png"
}, function (t, e, a) {
    t.exports = a.p + "media/img/icon-restaurant.b3a359.png"
}, function (t, e) {
}, , function (t, e) {
    "use strict";
    var a = ["Zero", "$rootScope", "$q", "RestaurantWrapper", function (t, e, a, n) {
        return function (e) {
            var i = a.defer(), r = [], s = {
                $promise: i.promise,
                status: "LOADING",
                restaurants: r,
                sign: e.sign
            }, o = function () {
                var a = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0], o = arguments.length <= 1 || void 0 === arguments[1] ? 24 : arguments[1];
                return t.restaurant.query(angular.extend({
                    type: "geohash",
                    limit: o,
                    offset: a,
                    version: "v4",
                    "extras[]": ["food_activity", "restaurant_activity", "statistics"]
                }, e), function (t) {
                    n(t), angular.forEach(t, function (t) {
                        return t.index = r.push(t)
                    });
                    var a = {list: t, sign: e.sign};
                    i.notify(a), t.length < o && (s.status = "COMPLETE", i.resolve(s), angular.$(window).off("scroll", d))
                }, function (t) {
                    s.status = "ERROR", i.reject(t)
                })
            };
            o();
            var c = 2, l = {1: !0}, u = document.querySelector(".place-rstbox"), d = function () {
                document.documentElement.clientHeight - u.getBoundingClientRect().bottom >= 0 && ("LOADING" !== s.status || l[c] || (l[c] = !0, o(24 * (c - 1)).$promise.then(function () {
                    return c++
                })))
            };
            return angular.$(window).on("scroll", d), s
        }
    }];
    t.exports = a
}, function (t, e) {
    "use strict";
    var a = ["Zero", "$q", "RestaurantWrapper", function (t, e, a) {
        return function (n, i, r) {
            var s = e.defer();
            r = r || {};
            var o = r.limit, c = {type: "search", geohash: n, keyword: i, version: "v4"}, l = {
                type: "search",
                geohash: n,
                keyword: i
            };
            void 0 !== o && (c.limit = o, l.limit = o), r.activities ? (c["extras[]"] = ["food_activity", "restaurant_activity", "certification", "statistics"], l["extras[]"] = ["restaurant", "food_activity"]) : l["extras[]"] = ["restaurant"], r.hasOutside && (c.has_outside = 1);
            var u = t.restaurant.query(c), d = t.food.query(l);
            return e.all([u.$promise, d.$promise]).then(function (t) {
                return a(t[0]), s.resolve(t), t
            }), s.$promise = s.promise, s
        }
    }];
    t.exports = a
}, function (t, e, a) {
    "use strict";
    var n = a(264);
    a(265);
    var i = ["$http", "$templateCache", "templateParser", "templateBuilder", "Popover", function (t, e, a, i, r) {
        var s, o, c = "placeleft placeright alignbottom", l = t.get(n, {cache: e});
        return l.then(function (t) {
            s = t.data, o || (o = a.parse(s))
        }), r.extend({
            defaults: {
                attachToBody: !0,
                showDelay: 300,
                animation: !1,
                placement: "right",
                alignment: "start"
            }, render: function () {
                var t = document.createElement("div");
                return t.className = "rstpopover", this.dom = t, t
            }, afterLocate: function (t) {
                var e = t.placement, a = t.alignment, n = angular.$(this.dom);
                n.removeClass(c).addClass("place" + e), "end" === a && n.addClass("alignbottom")
            }, willShow: function () {
                var t = this.get("target");
                return t && t.parentNode
            }, refresh: function () {
                var t = this.dom;
                this.rstChanged && (t.innerHTML = i.build(o, {restaurant: this.rst}), this.rstChanged = !1);
                var e = this.get("target");
                e && (t.style.width = e.clientWidth + "px")
            }, setRst: function (t) {
                var e = this.rst;
                e !== t && (this.rstChanged = !0), this.rst = t
            }, reset: function () {
                this.options.target = null, this.showTimer = null, this.visible = !1
            }
        })
    }], r = ["RstPopOver", function (t) {
        return {
            restrict: "A", link: function (e, a) {
                var n = new t({target: a[0]});
                n.setRst(e.restaurant), e.$on("$destroy", function () {
                    n.destroy()
                })
            }
        }
    }];
    t.exports = {rstPopover: r, RstPopOver: i}
}, function (t, e) {
    var a = "/entry/main/place/_block/rst-popover/rst-popover.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=rstpopover-arrow></div><div class=rstpopover-title>{{restaurant.name}}</div><div class=rstpopover-flavors>{{restaurant.flavors}}</div><ul class=rstpopover-activities><li ng-repeat="activity in restaurant.activities"><i ng-bind=activity.icon_name ng-style=activity.style></i>{{activity.description || activity.name}} <span ng-bind="activity.tips !== undefined ? \'(手机客户端专享)\' : \'\'"></span></li></ul><ul class=rstpopover-delivery><li><span class="color-stress plrtiny">{{restaurant.minimum_order_amount}}</span>元起送</li><li ng-if=restaurant.is_free_delivery>免费配送</li><li ng-if=!restaurant.is_free_delivery>配送费<span class="color-stress plrtiny">{{restaurant.delivery_fee}}</span>元</li><li ng-if=restaurant.order_lead_time_text>平均<span class="color-stress plrtiny">{{restaurant.order_lead_time_text}}</span>分钟送达</li></ul><div class=rstpopover-notice>{{restaurant.promotion_info}}</div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    a(268);
    var n = a(270), i = ["Zero", "RestaurantStream", function (t, e) {
        return {
            restrict: "E", replace: !0, templateUrl: n, link: function (a, n, i) {
                var r = {geohash: a.geohash};
                "true" === i.preminum && (r.is_premium = 1), t.rstCategory.query(r, function (t) {
                    return a.rstCategories = t
                }), a.rstStream = a.pumStream || a.rstStream, a.clickedCategory = a.pumStream ? -10001 : -1e4;
                var s, o = function () {
                    a.rstStream.restaurants = [], a.rstStream.status = "LOADING";
                    var t = a.clickedCategory, n = a.clickedActivity, r = {geohash: a.geohash};
                    isNaN(n) || (r["activity_types[]"] = n), isNaN(t) || (r.restaurant_category_id = t), -10001 === t && (r.is_premium = 1, delete r.restaurant_category_id), s = (new Date).getTime(), r.sign = s, "true" === i.preminum && (r.is_premium = 1), e(r).$promise.then(function (t) {
                        t.sign === s && (a.rstStream.status = "COMPLETE")
                    }, null, function (t) {
                        t.sign === s && (a.rstStream.restaurants = a.rstStream.restaurants.concat(t.list))
                    })
                };
                a.option = {}, a.changeOrder = function (t) {
                    switch (a.rstStream.orderBy = t, t) {
                        case"distance":
                            a.otherOrder = "距离最近";
                            break;
                        case"order_lead_time":
                            a.otherOrder = "配送速度";
                            break;
                        case"minimum_order_amount":
                            a.otherOrder = "起送金额";
                            break;
                        default:
                            a.otherOrder = ""
                    }
                }, a.changeCategory = function (t) {
                    a.clickedCategory !== t.id && (a.clickedCategory = t.id, t.sub_categories && t.sub_categories.length ? (a.subCategories = t.sub_categories, a.activeCategory = t.id) : t.id < 0 && (a.subCategories = null, a.activeCategory = null), o())
                };
                var c = [];
                a.rstStream.filter = function (t) {
                    if (c[t.index] = !1, a.option.mimOrder && t.minimum_order_amount > a.option.mimOrder)return !1;
                    if (a.option.freeDeliver && 0 !== t.delivery_fee)return !1;
                    if (a.option.cash && !t.is_time_ensure)return !1;
                    if (a.option.receipt && !t.is_support_invoice)return !1;
                    if (a.option.payOnline && !t.is_online_payment)return !1;
                    if (a.option.eps) {
                        if (!t.delivery_mode)return !1;
                        if (1 !== t.delivery_mode.id)return !1
                    }
                    return a.option["new"] && !t.is_new ? !1 : (c[t.index] = !0, !0)
                }
            }
        }
    }];
    t.exports = i
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/place/_block/excavator/excavator.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, "<div class=\"excavator container\"><div class=excavator-filter ng-if=rstCategories.length><span class=excavator-filter-name>商家分类:</span> <a class=excavator-filter-item href=javascript: ng-repeat=\"category in rstCategories\" ng-class=\"{'focus': clickedCategory === category.id && (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 && !pumStream}\" ng-bind=category.name ng-click=changeCategory(category) ubt-click=380></a><div ng-show=subCategories class=excavator-filter-subbox><a class=excavator-filter-item href=javascript: ng-repeat=\"subitem in subCategories\" ng-class=\"{'focus': clickedCategory === subitem.id}\" ng-bind=subitem.name ng-click=changeCategory(subitem)></a></div></div><div class=\"excavator-bgbar clearfix\" sticky sticky-body-class=excavator-sticky><div search-input></div><div class=excavator-sort><a href=JavaScript: class=\"excavator-sort-item focus\" ng-class=\"{'focus': !rstStream.orderBy}\" ng-click=changeOrder() ubt-click=382>默认排序</a> <a href=JavaScript: class=excavator-sort-item ng-class=\"{'focus': rstStream.orderBy === '-recent_order_num'}\" ng-click=\"changeOrder('-recent_order_num')\" ubt-click=382>销量高</a> <a href=JavaScript: class=excavator-sort-item ng-class=\"{'focus': rstStream.orderBy === '-rating'}\" ng-click=\"changeOrder('-rating')\" ubt-click=382>评价好</a><div class=excavator-sort-item ng-class=\"{'focus': otherOrder}\"><a href=JavaScript: ng-class=\"{'focus': otherOrder}\"><span ng-bind=\"otherOrder || '其他排序'\"></span> <i class=icon-arrow-down></i><i class=icon-arrow-up></i></a><div class=excavator-sort-dropdown><a href=JavaScript: ng-class=\"{'focus': rstStream.orderBy === 'distance'}\" ng-show=\"orderWay !== 'distance'\" ng-click=\"changeOrder('distance')\" ubt-click=382>距离最近</a> <a href=JavaScript: ng-class=\"{'focus': rstStream.orderBy === 'order_lead_time'}\" ng-show=\"orderWay !== 'order_lead_time'\" ng-click=\"changeOrder('order_lead_time')\" ubt-click=382>配送速度</a> <a href=JavaScript: ng-class=\"{'focus': rstStream.orderBy === 'minimum_order_amount'}\" ng-show=\"orderWay !== 'minimum_order_amount'\" ng-click=\"changeOrder('minimum_order_amount')\" ubt-click=382>起送金额</a></div></div><div class=excavator-sort-item><a href=JavaScript: ng-class=\"{'focus': option.mimOrder}\"><span ng-class=\"{'focus': option.mimOrder}\" ng-bind=\"option.mimOrder ? '起送价格: ' + option.mimOrder + ' 元' : '起送价格: 不限'\"></span> <i class=icon-arrow-down></i><i class=icon-arrow-up></i></a><div class=\"excavator-sort-dropdown wide\"><a href=JavaScript: ng-class=\"{'focus': !option.mimOrder}\" ng-click=\"option.mimOrder = ''\" ubt-click=383>不限</a> <a href=JavaScript: ng-repeat=\"i in [15, 20, 30, 40]\" ng-class=\"{'focus': option.mimOrder === i}\" ng-click=\"option.mimOrder = i\" ubt-click=383>{{i}}元以下</a></div></div></div><div class=excavator-option><label class=excavator-option-item><input ng-model=option.new type=checkbox ubt-click=382>新开商家</label><label class=excavator-option-item><input ng-model=option.freeDeliver type=checkbox ubt-click=384>免配送费</label><label class=excavator-option-item><input ng-model=option.eps type=checkbox>蜂鸟专送</label><label class=excavator-option-item><input ng-model=option.receipt type=checkbox ubt-click=384>可开发票</label><label class=excavator-option-item><input ng-model=option.payOnline type=checkbox ubt-click=384>在线支付</label></div></div></div>")
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    var n = a(272);
    a(273);
    var i = ["Search", "$rootScope", "$location", function (t, e, a) {
        return {
            restrict: "A", link: function (n, i) {
                var r = i.parent().find(".searchbox"), s = i.parent().find(".place-search-btn");
                if (0 !== r.length) {
                    var o, c = function () {
                        return (n.searchRestaurants || []).length + (n.searchFoods || []).length
                    }, l = function () {
                        var t = c();
                        t > 0 && r.css("display", "block")
                    }, u = function (t) {
                        t > 0 ? setTimeout(function () {
                            r.css("display", "")
                        }, t) : r.css("display", "")
                    }, d = function () {
                        var t = c();
                        t > 0 ? l() : u()
                    }, p = e.searchText, h = null, m = 300;
                    i.on("focus", function () {
                        void 0 === p && (p = i.val()), l()
                    }), i.on("blur", function () {
                        u(300)
                    }), s.on("click", function () {
                        p && (a.path(encodeURI("/place/" + e.geohash + "/search/" + p)), n.$apply())
                    });
                    var f = function (t) {
                        var e = r.find("li");
                        e.removeClass("active");
                        var a = c();
                        "next" === t ? null === h ? h = 0 : (h++, h >= a && (h = 0)) : "prev" === t && (null === h ? h = a - 1 : (h--, 0 > h && (h = a - 1))), angular.$(e[h]).addClass("active")
                    };
                    i.bind("keyup", function (a) {
                        var c = a.which || a.keyCode;
                        if (40 === c)return void f("next");
                        if (38 === c)return void f("prev");
                        if (13 === c) {
                            var l = r.find("li.active a");
                            return void(l.length > 0 ? l[0].click() : s[0].click())
                        }
                        if (27 === c)return u(), void i[0].blur();
                        var g = i.val();
                        if (g) {
                            if (p === g)return;
                            o && (clearTimeout(o), o = null), o = setTimeout(function () {
                                t(e.geohash, g, {limit: 10}).$promise.then(function (t) {
                                    return g = i.val(), "" !== g && (n.searchRestaurants = t[0], n.searchFoods = t[1]), h = null, d(), t
                                }), o = null
                            }, m)
                        } else o && (clearTimeout(o), o = null), n.searchRestaurants = [], n.searchFoods = [], d();
                        p = g, e.searchText = g
                    })
                }
            }
        }
    }], r = function () {
        return {restrict: "EA", replace: !0, templateUrl: n}
    };
    t.exports = {autocomplete: i, searchInput: r}
}, function (t, e) {
    var a = "/entry/main/place/_block/search-input/search-input.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=place-search role=search><a class="place-search-btn icon-search" ubt-click=403 ng-attr-ubt-data-keyword={{searchText}} title=搜索商家或美食></a><label for=globalsearch>搜索商家或美食</label><input id=globalsearch class=place-search-input ng-model=searchText autocomplete placeholder=搜索商家,美食...><div class=searchbox><div class="searchbox-list searchbox-rstlist" ng-show="searchRestaurants && searchRestaurants.length > 0" ng-class="{ \'show-separator\': searchFoods && searchFoods.length > 0 }"><ul><li ng-repeat="restaurant in searchRestaurants | orderBy: [ \'-is_opening\', \'order_lead_time\' ] | limitTo: 5"><a ng-href=shop/{{restaurant.id}} ubt-click=404><span class=time ng-if=restaurant.order_lead_time_text>{{restaurant.order_lead_time_text}}分钟</span> <span class=name>{{restaurant.name}}</span></a></li></ul></div><div class="searchbox-list searchbox-foodlist" ng-show="searchFoods && searchFoods.length > 0"><ul><li ng-repeat="food in searchFoods  | limitTo: 5"><span class=price>&yen; {{food.price}}</span> <span class=food-wrapper><a ng-href=shop/{{food.restaurant.id}}#food/{{food.id}} class=name ubt-click=404>{{food.name}}</a> <a ng-href=shop/{{food.restaurant.id}} class=restaurant ubt-click=404>{{food.restaurant.name}}</a></span></li></ul></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(276);
    a(277), t.exports = {
        templateUrl: n,
        controller: ["$scope", "$routeParams", "$rootScope", "RestaurantStream", function (t, e, a, n) {
            return a.geohash = t.geohash = e.geohash, /[\Wailo_]|^$/.test(a.geohash || "") ? (localStorage.removeItem("GEOHASH"), void(location.href = "/home")) : (localStorage.setItem("GEOHASH", t.geohash), void(t.pumStream = n({
                is_premium: 1,
                geohash: t.geohash
            })))
        }]
    }
}, function (t, e, a) {
    var n = "/entry/main/place/premium/premium.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(n, '<div class="container clearfix"><div search-input></div><div location><i class=icon-arrow-right></i>品牌商家</div></div><div class="place-tab clearfix container premium"><span class=premium-title>品牌商家</span> <span class=premium-desc>吃的更安心, 服务更贴心</span></div><excavator preminum=true></excavator><div class="place-rstbox premium-rstbox container clearfix"><rst-view data="filteredRestaurants = (pumStream.restaurants | filter: rstStream.filter | filter: otherFilter | orderBy: [ \'-is_opening\', pumStream.orderBy || \'index\' ])"></rst-view><div loading type=normal ng-if="pumStream.status === \'LOADING\'"></div><div class=place-rstbox-nodata ng-if="pumStream.status === \'COMPLETE\' && !filteredRestaurants.length"><img class=nodata width=100 src=' + a(258) + " alt=找不到商家><div class=typo-small>附近没有符合您的筛选的品牌馆商家，换个筛选条件试试吧</div></div></div>")
    }]), t.exports = n
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(280);
    a(281);
    var i = ["$scope", "$rootScope", "$routeParams", "Search", "RestaurantWrapper", "Zero", "UBT", "LocalCart", function (t, e, a, n, i, r, s, o) {
        var c = a.geohash, l = a.keyword;
        e.searchText = l, t.keyword = l, t.geohash = c, t.status = "LOADING", t.resultFilter = "", t.outsideRstsVisible = !1, t.hideOutsideRsts = function () {
            t.outsideRstsVisible = !1
        }, t.setCart = function (t, e) {
            var a = new o(t);
            a.setEntity(e)
        }, n(c, l, {activities: !0, limit: 300, hasOutside: 1}).$promise.then(function (e) {
            var a = e[0];
            i(a);
            for (var n = 0, s = a.length; s > n; n++) {
                var o = a[n];
                if (!o.in_delivery_area) {
                    t.outsideRst = o, a.splice(n, 1);
                    break
                }
            }
            t.outsideRst && r.restaurant.query({
                type: "search",
                geohash: c,
                keyword: l,
                version: "v4",
                "extras[]": ["food_activity", "restaurant_activity", "certification", "statistics"],
                in_delivery_area: 0
            }).$promise.then(function (e) {
                i(e), t.outsideRsts = e
            }), t.restaurants = a, t.foods = e[1], t.mixedRsts = a.slice();
            var u = e[1], d = {}, p = [], h = [], m = a.map(function (t) {
                return t.id
            });
            u.forEach(function (e) {
                if (0 !== e.is_valid) {
                    var a = e.restaurant, n = e.ratings;
                    e.rating_count = n[1] + n[2] + n[3] + n[4] + n[5], d[a.id] ? a = d[a.id] : (d[a.id] = a, h.push(a.id), p.push(a), -1 === m.indexOf(a.id) && t.mixedRsts.push(a), a.foods = [], a.limitTo = 3), a.foods.push(e)
                }
            }), i(p), t.rstGroups = p, t.status = "COMPLETE", h.length && r.restaurant.query({
                type: "ids",
                is_premium: 0,
                "extras[]": ["food_activity", "restaurant_activity", "statistics"],
                version: "v4",
                "ids[]": h
            }, function (t) {
                i(t), p.forEach(function (e, a) {
                    e.activities = t[a].activities, e.statistics = t[a].statistics
                })
            })
        }), t.rstUbtClick = function (t, e) {
            for (var a = t.target; a && "A" !== a.tagName;)a = a.parentNode;
            s.send("EVENT", {id: e, params: {restaurant_id: a.getAttribute("data-rst-id")}})
        }
    }];
    t.exports = {templateUrl: n, controller: i}
}, function (t, e, a) {
    var n = "/entry/main/place/search/search.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(n, '<div class="container clearfix"><div class=search-location location><i class=icon-arrow-right></i>搜索结果</div><div search-input></div></div><div ng-if="outsideRstsVisible && outsideRsts.length" class=container><div class=search-filterbar>超出配送范围的商家 <button ng-click=hideOutsideRsts() class="btn-primary btn-sm">返回</button></div><div class=search-rstbox><rst-view data="outsideRsts | orderBy: [ \'-is_opening\' ] | limitTo: 48" ng-click="rstUbtClick($event, 514)"></rst-view></div></div><div ng-show=!outsideRstsVisible class=container><div class=search-filterbar>搜索<span class=color-stress>「{{keyword}}」</span>的结果<div class=search-filterbar-filterbtns ng-show="rstGroups.length && restaurants.length"><span ng-click="resultFilter = \'\'" ng-class="{ \'active\': resultFilter === \'\' }" ubt-click=507 ubt-data-choose_type=全部>全部</span> <span ng-click="resultFilter = \'restaurant\'" ng-class="{ \'active\': resultFilter === \'restaurant\' }" ubt-click=507 ubt-data-choose_type=商家>商家</span> <span ng-click="resultFilter = \'food\'" ng-class="{ \'active\': resultFilter === \'food\' }" ubt-click=507 ubt-data-choose_type=美食>美食</span></div></div><div class=search-loading ng-if="status === \'LOADING\'"><img src=' + a(119) + " alt=正在加载></div><div class=search-nodata ng-if=\"status === 'COMPLETE' && !restaurants.length && !rstGroups.length\" ubt-visit=506 ng-attr-ubt-data-keyword={{keyword}}><img class=nodata width=100 src=" + a(258) + ' alt=找不到商家><div class=typo-small>附近没有符合您的关键字的商家和美食，换个关键字试试吧</div></div><div class=search-rstbox ng-show="restaurants.length && resultFilter != \'food\'" ng-click="rstUbtClick($event, 509)"><rst-view data="(resultFilter === \'restaurant\' ? mixedRsts : restaurants) | orderBy: [ \'-is_opening\' ]"></rst-view></div><div class=search-outsidetip ng-show="outsideRst.name && resultFilter != \'food\'" ng-class="{ standalone: restaurants.length === 0}">另有<b>{{outsideRst.name}}</b>等 <span class=color-stress>{{outsideRsts.length}}</span> 家与 <span class=color-stress>「{{keyword}}」</span>相关的商家不在配送范围内 <a href=javascript: ng-click="outsideRstsVisible = true" ubt-click=513>立即查看</a></div><table ng-repeat="rst in rstGroups | orderBy: [ \'-is_opening\', \'status\' ] track by rst.id" class="typo-table search-foodtable" ng-show="resultFilter != \'restaurant\'"><tr><th colspan=4><div ng-if="rst.status === 5" class="search-rststatus search-rststatus-bookonly" ng-bind="\'可预订，\' + rst.next_time + \'后送餐\'"></div><div ng-if=!rst.is_opening class="search-rststatus search-rststatus-relaxing" ng-bind="rst.status === 2 ? \'商家繁忙,不接受新单\' : \'商家休息,暂不接单\'"></div><h4 class=typo-h5><a ng-href="{{\'/shop/\' + rst.id}}">{{rst.name}}</a><div class=rstblock-activity><i ng-repeat="activity in rst.activities" ng-bind=activity.icon_name ng-style="activity.icon_color ? {background: (\'#\' + activity.icon_color)} : \'\'"></i></div></h4><span rate-star rating=rst.statistics.star_level></span> <small class=search-sales>月售<span>{{rst.month_sales}}</span></small> <small class=first><span>{{rst.minimum_order_amount}}</span>元起送</small> <small ng-if=rst.is_free_delivery>免费配送</small> <small ng-if=!rst.is_free_delivery>配送费<span>{{rst.delivery_fee}}</span>元</small> <small ng-if=rst.order_lead_time_text>平均<span class=highlight>{{rst.order_lead_time_text}}</span>分钟送达</small><tr ng-repeat="food in rst.foods | limitTo: rst.limitTo track by $index"><td><a ng-if=rst.is_opening ng-href=/shop/{{food.restaurant.id}}#{{food.id}} ubt-click=510 ubt-data-restaurant_id={{food.restaurant.id}} ubt-data-dish_id={{food.id}}><span>{{food.name}}<br><small>{{food.description}}</small></span></a> <span ng-if=!rst.is_opening>{{food.name}}<br><small>{{food.description}}</small></span><td class=search-col2><a ng-if=rst.is_opening ng-href=/shop/{{food.restaurant.id}}#{{food.id}}>&yen; {{food.price}}</a> <span ng-if=!rst.is_opening>&yen; {{food.price}}</span><td class=search-col3><small ng-if=!rst.is_opening ng-bind="rst.status === 2 ? \'商家繁忙\' : \'商家休息\'"></small> <a class="btn btn-sm" ng-class="{ \'bookonly\': rst.status === 5 }" ng-if=rst.is_opening ng-href=/shop/{{food.restaurant.id}}#{{food.id}} ng-click="setCart(food.restaurant.id, food.id)" ng-bind="rst.status === 1 ? \'去购买\' : \'可预订\'" ubt-click=511 ubt-data-restaurant_id={{food.restaurant.id}} ubt-data-dish_id={{food.id}}></a><td class=search-col4><span rate-star rating=food.rating></span> <span class=search-food-ratingcount ng-if="food.rating_count > 0">({{food.rating_count}})</span><div>月售{{food.month_sales}}份</div><tr ng-if="rst.limitTo === 3 && rst.foods.length > 3" class=search-foodtable-expandrow><td colspan=4>本商家还有<strong class=highlight>{{rst.foods.length - 3}}</strong>份相关美食， <a class=search-foodtable-showmore ng-click="rst.limitTo = rst.foods.length" href=JavaScript: ubt-click=512 ubt-data-restaurant_id={{rst.id}}>显示全部相关美食<i class=icon-arrow-down></i></a></table></div>')
    }]), t.exports = n
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(284);
    a(285);
    var i = ["$scope", "$routeParams", "Zero", "notifyServerError", function (t, e, a, n) {
        var i = e.id;
        i && a.template.get({id: i}).$promise.then(function (e) {
            return t.activity = e
        })["catch"](function (t) {
            return n(t)
        }), t.geohash && a.content.query({geohash: t.geohash, consumer: 3}, function (e) {
            t.activities = e, e.forEach(function (t) {
                t.href = 2 === t.type ? "/activity/" + t.template_id : t.link, t.target = 2 === t.type ? "" : "_blank"
            })
        })
    }];
    t.exports = {templateUrl: n, controller: i}
}, function (t, e) {
    var a = "/entry/main/activity/activity.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class="container clearfix"><div location ng-if=geohash><i class=icon-arrow-right></i>{{activity.title}}</div></div><div class=container><div class=activity><div class=activity-banner ng-if=activity.header_image_url><img ng-src="{{activity.header_image_url | imgOptimize}}" alt={{activitie.title}}></div><div class="activity-content typo"><div ng-bind-html="activity.content | toTrusted"></div></div><div class=activity-list><h1>活动列表</h1><ul><li ng-repeat="act in activities" ng-class="{active: act.id === activity.id}"><a ng-href={{act.href}} target={{act.target}}>{{act.title}}</a></li></ul></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(288);
    a(289);
    var i = a(31);
    angular.module("eleme.page").factory("localCartView", a(291)).factory("CartButtonView", a(292).CartButtonView).factory("CartVirtualButtonView", a(292).CartVirtualButtonView).directive("shopCart", a(293)).directive("shopCartbutton", a(298)).directive("shopCartHelper", a(302)).directive("shopCarthelperbutton", a(306)).directive("shopGroupswitcher", a(310)).directive("shopSpecmenu", a(314)).directive("shopGuide", a(319)).directive("shopNav", a(324)).directive("shopMenu", a(328)).directive("shopMenuItem", a(332)).directive("shopIteminfo", a(334)).directive("commentItem", a(338)).directive("itemRatingList", a(342)).directive("shopRate", a(346)).directive("shopBulletin", a(350)).directive("shopInfo", a(355)).directive("sideTools", a(359));
    var r = {}, s = ["$rootScope", "$scope", "$routeParams", "$location", "$q", "PlaceStorage", "Zero", "notifyServerError", "setFootPrint", function (t, e, a, n, s, o, c, l, u) {
        t.layoutState = {type: "shop", hideSidebar: !0}, e.$on("$destroy", function () {
            return t.layoutState = {}
        });
        var d = a.id;
        e.shopAction = a.action || "menu", r.id !== d && (r.id = d, r.promise = c.restaurant.get({
            version: "v4",
            id: d,
            geohash: e.geohash,
            "extras[]": ["food_activity", "certification", "license", "identification", "statistics", "album", "flavor"]
        }).$promise);
        var p = function () {
            return c.restaurant.get({version: "v3", nameForUrl: d, geohash: e.geohash}).$promise.then(function (t) {
                n.url("/shop/" + t.id)
            })
        };
        e.shopCache = r, r.promise.then(function (n) {
            if (656683 === n.id) {
                var r = {
                    name: "叮当快药",
                    address: "上海市普陀区大渡河路718号",
                    description: "如需咨询用药信息，请拔打药师电话：400－631－3888",
                    image_path: "http://fuss10.elemecdn.com/1/8a/5026ac398ff30789eb16081e799acjpeg.jpeg",
                    license: {business_license_image: "http://fuss10.elemecdn.com/8/3d/2a234e5103a60607fbad591fed055jpeg.jpeg"}
                };
                angular.extend(n, r)
            }
            if (u(n.id), n.tab = a.action || "index", n.filter = "default", n.displayType = "grid", e.shop = n, e.SEO.title = n.name + "外卖_" + n.name + "菜单|电话_" + n.name + "网上订餐 - " + n.address, e.SEO.keywords = n.name + "外卖，" + n.name + "菜单，" + n.name + "电话", e.SEO["mobile-agent"] = "format=html5;url=http://m.ele.me/" + n.name_for_url, !localStorage.getItem("GEOHASH")) {
                var s = i.encode(n.latitude, n.longitude);
                try {
                    localStorage.setItem("GEOHASH", s)
                } catch (c) {
                }
                t.place = o(s)
            }
        })["catch"](function (t) {
            return 404 === t.status ? p() : void 0
        })
    }];
    t.exports = {templateUrl: n, controller: s}
}, function (t, e) {
    var a = "/entry/main/shop/shop.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div shop-guide data=shop isdisabled=shop.disabled></div><div shop-nav data=shop filter-data=shop.filter display-type=shop.displayType shop-action=shopAction></div><div class="shopmain clearfix container"><div ng-if="shopAction === \'menu\'" shop-menu shop-cache=shopCache filter-data=shop.filter display-type=shop.displayType class=shopmenu perf-click=desktop/201></div><div ng-if="shopAction === \'rate\'" shop-rate class=shoprate perf-click=desktop/202></div><div ng-if="shopAction === \'info\'" shop-info data=shop class=shopinfo perf-click=desktop/203></div><div shop-bulletin data=shop></div></div><div side-tools></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e) {
    "use strict";
    function a(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    function n(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    var i = function () {
        function t(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, a, n) {
            return a && t(e.prototype, a), n && t(e, n), e
        }
    }();
    t.exports = ["LocalCart", "$timeout", "$q", "$document", "$rootScope", function (t, e, r, s, o) {
        var c = function () {
            function s() {
                n(this, s), this.currentGroupIndex = 0, this.$expanded = !1, this.vm = {}
            }

            return i(s, [{
                key: "init", value: function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0], a = arguments.length <= 1 || void 0 === arguments[1] ? -1 : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2], i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3], r = arguments.length <= 4 || void 0 === arguments[4] ? [] : arguments[4], s = this, c = arguments.length <= 5 || void 0 === arguments[5] ? {} : arguments[5], l = arguments.length <= 6 || void 0 === arguments[6] ? 0 : arguments[6];
                    return this.$localCart = new t(e), this.$restaurantStatus = a, this.$minimumAmount = n, this.$menuMap = i, this.$menuArray = r, this.$el = c, this.$basket = c.find("#shopbasket"), this.$helper = c.find("#shophelper"), this.cartHelper = {group: []}, this.$deliveryFee = l, this.currentGroupIndex = 0, this.$expanded = !1, this.vm = this.updateVM(), o.$$postDigest(function () {
                        return s.toggleCart(44)
                    }), this
                }
            }, {
                key: "filterEntities", value: function (t) {
                    return this.vm.groups.map(function (e) {
                        return e.filter(function (e) {
                            return e.id === t
                        })
                    }).reduce(function (t, e) {
                        return t.push(e[0] || {}), t
                    }, [])
                }
            }, {
                key: "updateVM", value: function () {
                    var t, e = this, n = [], i = this.$localCart.groups.map(function (t, a) {
                        return t.entities.reduce(function (t, i) {
                            var r, s = e.$menuMap[i.id];
                            if (!s)return t;
                            for (var o = 1; o <= i.quantity; o++)n.push(s);
                            var c = [i.id, i.quantity, a, s.name, s.original_price || s.price], l = (r = e.$localCart).setEntity.apply(r, c);
                            return t.concat([l.entity])
                        }, [])
                    }), r = [];
                    this.$deliveryFee && r.push({name: "配送费", fee: this.$deliveryFee});
                    var s = n.reduce(function (t, e) {
                        return t + (e.packing_fee || 0)
                    }, 0);
                    s && r.push({name: "餐盒费", fee: s});
                    var o = (t = []).concat.apply(t, a(i)), c = o.reduce(function (t, e) {
                        return t + e.quantity
                    }, 0), l = o.reduce(function (t, e) {
                        return t + e.quantity * e.price
                    }, 0).toFixed(2), u = 1 * (this.$minimumAmount - l).toFixed(2), d = this.setCheckoutButton(this.$restaurantStatus, !c, u);
                    if (this.cartHelper.show = 20 > u && l < this.$minimumAmount && u < .3 * this.$minimumAmount, this.cartHelper.show && !this.cartHelper.group.length) {
                        var p, h = (p = []).concat.apply(p, a(this.$menuArray.map(function (t) {
                            return t.specfoods
                        }))).filter(function (t) {
                            return t.stock > 0
                        }), m = h.filter(function (t) {
                            return t.price >= u && t.price <= u + 5;
                        }).sort(function (t, e) {
                            return t.price - e.price
                        }), f = h.filter(function (t) {
                            return t.price < u || t.price > u + 5
                        }).sort(function (t, e) {
                            return t.price - e.price
                        });
                        this.cartHelper.group = m.concat(f)
                    }
                    return {groups: i, quantity: c, total: l, button: d, cartHelper: this.cartHelper, extras: r}
                }
            }, {
                key: "setCheckoutButton", value: function (t, e, a) {
                    return this.$localCart.getOrderState(e, a, t)
                }
            }, {
                key: "checkout", value: function () {
                    return this.$localCart.toCheckPage()
                }
            }, {
                key: "setEntity", value: function (t, e) {
                    angular.isNumber(e) || (e = 1);
                    var a = this.$localCart.setEntity(t.id || t.food_id, e, this.currentGroupIndex, t.name, t.price);
                    if (a.action)return this.viewDispatcher(a)
                }
            }, {
                key: "updateFromInput", value: function (t, e) {
                    if (e) {
                        var a = Math.abs(parseInt(e, 10)) || 1;
                        return a > 65535 ? (e = 1, this.setEntity(t, 1)) : this.setEntity(t, a)
                    }
                }
            }, {
                key: "addEntity", value: function (t) {
                    return this.setEntity(t, +t.quantity + 1)
                }
            }, {
                key: "subEntity", value: function (t) {
                    return this.setEntity(t, +t.quantity - 1)
                }
            }, {
                key: "viewDispatcher", value: function (t) {
                    var a = this, n = t.entity, i = t.action;
                    return r.all().then(function () {
                        switch (i) {
                            case"ENTITY_ADD":
                                return r.all().then(function () {
                                    return a.vm = a.updateVM(), a.$expanded ? void 0 : (a.$basket.css({height: "auto"}), a.toggleCart())
                                });
                            case"ENTITY_CREATE":
                                return a.addAnimate().then(function () {
                                    return a.vm = a.updateVM(), a.$expanded = !1, e(function () {
                                        a.$basket.css({height: "auto"});
                                        var t = a.$basket.prop("offsetHeight");
                                        a.$basket.css({height: "99999px"}), a.toggleCart(t)
                                    }, 0)
                                });
                            case"ENTITY_SUB":
                                if (a.vm = a.updateVM(), a.$expanded)return;
                                return a.toggleCart();
                            case"ENTITY_DESTROY":
                                return a.destroyAnimate(n.id).then(function () {
                                    a.vm = a.updateVM()
                                });
                            default:
                                a.vm = a.updateVM()
                        }
                    }).then(function () {
                        o.$broadcast("cart:updateEntity", {entity: n, action: i})
                    })
                }
            }, {
                key: "addAnimate", value: function () {
                    return this.$basket.css({height: "99999px"}), r.all()
                }
            }, {
                key: "destroyAnimate", value: function () {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0], a = this.$el.find('[entityid="' + e + '"]'), n = a.prop("offsetHeight"), i = this.$basket.prop("offsetHeight"), r = i - n;
                    return this.$basket.css({height: i + "px"}), a.remove(), this.$expanded = !1, this.toggleCart(r).then(function () {
                        t.$basket.css({height: "auto"})
                    })
                }
            }, {
                key: "toggleCart", value: function (t, e) {
                    var a = this, n = r.defer(), i = angular.extend({
                        duration: 250, complete: function () {
                            a.$expanded = !a.$expanded, a.$basket.css({height: "auto"}), n.resolve()
                        }
                    }, e);
                    if (this.$expanded)this.$basket.animate({top: "0px"}, i), this.$helper.removeClass("open"); else {
                        var s = t || this.$basket.prop("offsetHeight");
                        this.$basket.animate({top: "-" + s + "px"}, i)
                    }
                    return n.promise
                }
            }, {
                key: "changeGroup", value: function (t) {
                    var a = this;
                    return this.vm = this.updateVM(), this.$expanded = !1, this.currentGroupIndex = t, this.$basket.css({height: "99999px"}), e(function () {
                        a.$basket.css({height: "auto"});
                        var t = a.$basket.prop("offsetHeight");
                        a.$basket.css({height: "99999px"}), a.toggleCart(t)
                    }, 0)
                }
            }, {
                key: "createGroup", value: function () {
                    var t = this.$localCart.groups.length;
                    this.$localCart.createGroup(t), this.changeGroup(t)
                }
            }, {
                key: "clearGroup", value: function (t) {
                    var e = this, a = this.$localCart.clearGroup(t), n = a.group, i = a.action, r = this.$basket[0].querySelectorAll("[entityid]"), s = this.$basket.prop("offsetHeight"), c = [].slice.call(r).reduce(function (t, e) {
                        return t + angular.$(e).prop("offsetHeight")
                    }, 0), l = s - c;
                    return this.$basket.css({height: s + "px"}), this.$expanded = !1, this.toggleCart(l).then(function () {
                        e.vm = e.updateVM(), o.$broadcast("cart:clearGroup", {group: n, action: i})
                    })
                }
            }, {
                key: "removeGroup", value: function (t) {
                    var e = this;
                    return this.clearGroup(t).then(function () {
                        return e.$localCart.removeGroup(t), 0 === t || 0 === e.currentGroupIndex ? e.changeGroup(0) : e.currentGroupIndex >= t ? e.changeGroup(t - 1) : e.changeGroup(e.currentGroupIndex)
                    })
                }
            }]), s
        }();
        return new c
    }]
}, function (t, e) {
    "use strict";
    function a(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    function n(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    var r = function (t, e, a) {
        for (var n = !0; n;) {
            var i = t, r = e, s = a;
            o = l = c = void 0, n = !1, null === i && (i = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(i, r);
            if (void 0 !== o) {
                if ("value"in o)return o.value;
                var c = o.get;
                if (void 0 === c)return;
                return c.call(s)
            }
            var l = Object.getPrototypeOf(i);
            if (null === l)return;
            t = l, e = r, a = s, n = !0
        }
    }, s = function () {
        function t(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, a, n) {
            return a && t(e.prototype, a), n && t(e, n), e
        }
    }(), o = ["$rootScope", "$q", function (t, e) {
        return function () {
            function a() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = this, s = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2], o = arguments.length <= 3 || void 0 === arguments[3] ? {
                    name: "",
                    original_price: 0,
                    price: 0
                } : arguments[3];
                i(this, a), this.$id = e, this.$name = o.name, this.$price = o.original_price || o.price, this.$specfoods_id = s, this.$localCartView = n, this.$entities = [], this.quantity = 0, this.$update(), this.$bindUpdateEvent(), t.$on("cart:clearGroup", function () {
                    r.$update()
                })
            }

            return s(a, [{
                key: "$bindUpdateEvent", value: function () {
                    var e = this;
                    t.$on("cart:updateEntity", function (t, a) {
                        var n = a.entity;
                        n.id === e.$id && e.$update()
                    })
                }
            }, {
                key: "$update", value: function () {
                    this.$entities = this.$localCartView.filterEntities(this.$id), this.quantity = this.$count(this.$entities)
                }
            }, {
                key: "$count", value: function (t) {
                    return t.reduce(function (t, e) {
                        return t + (0 | e.quantity)
                    }, 0)
                }
            }, {
                key: "$getEntity", value: function () {
                    var t = this.$entities[this.$localCartView.currentGroupIndex] || {};
                    return t.id ? t : {id: this.$id, quantity: 0, name: this.$name, price: this.$price}
                }
            }, {
                key: "animate", value: function (t) {
                    if (!t)return e.all();
                    var a = t.getBoundingClientRect(), n = this.$localCartView.$el.find(".shop-cartfooter")[0].getBoundingClientRect(), i = .5, r = 500, s = this.$localCartView.$el.find(".shop-flyitem").clone();
                    return angular.$("body").append(s), s.css({top: a.top + "px", left: a.left + "px"}), function () {
                        var t = e.defer();
                        return s.animate({left: n.left + "px"}, r, "linear"), s.animate({top: a.top - a.top / 4 + "px"}, r * i, "easeOutCubic", function () {
                            return t.resolve()
                        }), t.promise
                    }().then(function () {
                        var t = e.defer();
                        return s.animate({top: n.top + "px"}, r * (1 - i), "easeInCubic", function () {
                            return t.resolve()
                        }), t.promise
                    }).then(function () {
                        return s.remove()
                    })
                }
            }, {
                key: "add", value: function () {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    return this.animate(e.target).then(function () {
                        return t.$localCartView.addEntity(t.$getEntity())
                    })
                }
            }, {
                key: "sub", value: function () {
                    return this.$localCartView.subEntity(this.$getEntity())
                }
            }, {
                key: "update", value: function (t) {
                    return this.$localCartView.updateFromInput(this.$getEntity(), t)
                }
            }]), a
        }()
    }], c = ["$rootScope", "CartButtonView", function (t, e) {
        return function (e) {
            function o() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0], e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                i(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).call(this, -1, a, t), angular.extend(this, e)
            }

            return n(o, e), s(o, [{
                key: "$update", value: function () {
                    var t, e = this;
                    this.$specGroups = this.$specfoods_id.map(function (t) {
                        return e.$localCartView.filterEntities(t)
                    }), this.quantity = this.$count((t = []).concat.apply(t, a(this.$specGroups)))
                }
            }, {
                key: "$bindUpdateEvent", value: function () {
                    var e = this;
                    t.$on("cart:updateEntity", function (t, a) {
                        var n = a.entity, i = e.$specfoods_id.some(function (t) {
                            return n.id === t
                        });
                        i && e.$update()
                    })
                }
            }, {
                key: "$getEntity", value: function () {
                    var t = this, e = this.$specGroups.filter(function (e) {
                        return e.some(function (e) {
                            return e.id === t.$id
                        })
                    })[0];
                    return angular.isArray(e) ? e[this.$localCartView.currentGroupIndex] : {
                        id: this.$id,
                        quantity: 0,
                        name: this.$menuFood.name,
                        price: this.$menuFood.original_price || this.$menuFood.price
                    }
                }
            }, {
                key: "add", value: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return this.$id = t, this.$menuFood = e, r(Object.getPrototypeOf(o.prototype), "add", this).call(this)
                }
            }]), o
        }(e)
    }];
    t.exports = {CartButtonView: o, CartVirtualButtonView: c}
}, function (t, e, a) {
    "use strict";
    a(294);
    var n = a(297);
    t.exports = ["$rootScope", "$q", "$timeout", "localCartView", function (t, e, a, i) {
        return {
            templateUrl: n, scope: {cartLink: "="}, link: function (t, e) {
                t.cartLink.then(function (a) {
                    var n = a.restaurantId, r = a.restaurantStatus, s = a.minimumAmount, o = a.menuMap, c = a.menuArray, l = a.deliveryFee;
                    t.shopCart = i.init(n, r, s, o, c, e, l)
                }), t.checkout = function (e) {
                    t.shopCart.vm.button.name = "SUBMITTING", t.shopCart.vm.button.disabled = !0, t.shopCart.vm.button.text = "结算中...", e.stopPropagation(), i.checkout()
                }, t.showCartHelper = function () {
                    angular.$("#shophelper").addClass("open")
                }
            }
        }
    }]
}, function (t, e) {
}, , , function (t, e) {
    var a = "/entry/main/shop/_block/shop-cart/shop-cart.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shop-cart><div class=shop-cartbasket id=shopbasket><div shop-groupswitcher cart=shopCart></div><div class=shop-cartbasket-empty ng-if=!shopCart.vm.groups[shopCart.currentGroupIndex].length><div class=icon-cart></div><p>购物车是空的，赶紧选购吧</p></div><div ng-repeat="item in shopCart.vm.groups[shopCart.currentGroupIndex]" class=shop-cartbasket-tablerow entityid={{item.id}}><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"><button ng-click="shopCart.subEntity(item, $event)">-</button><input ng-model=item.quantity ng-blur="shopCart.updateFromInput(item, item.quantity)"><button ng-click="shopCart.addEntity(item, $event)">+</button></div><div class="cell itemtotal" ng-bind="\'&yen;\' + ((item.price * item.quantity).toFixed(2) | number)"></div></div></div><div class=shop-cartfooter ng-click=shopCart.toggleCart()><span class="icon-cart shop-carticon"><span class=shop-cartpieces ng-bind=shopCart.vm.quantity ng-if="shopCart.vm.quantity > 0"></span></span><p class="shop-cartfooter-text price" ng-if="shopCart.vm.quantity > 0" ng-bind="shopCart.vm.total | number"></p><div class="shop-cartfooter-text extras" ng-if="shopCart.vm.extras.length && !shopCart.vm.button.disabled"><p ng-repeat="extra in shopCart.vm.extras">{{extra.name}}&yen;{{extra.fee}}</p></div><button class=shop-cartfooter-checkout ng-class="{disabled: shopCart.vm.button.name !== \'CAN_ORDER\'}" ng-disabled=shopCart.vm.button.disabled ng-bind=shopCart.vm.button.text ng-click=checkout($event)></button></div><div class=shop-carthelper-opener ng-class="{show: shopCart.cartHelper.show}" ng-click=showCartHelper()></div><div id=shophelper shop-cart-helper group=shopCart.cartHelper.group cart=shopCart></div><div class=shop-flyitem></div></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    var n = Function.prototype.bind;
    a(299);
    var i = a(301), r = {}, s = [], o = function (t) {
        return s.filter(function (e) {
            return t.some(function (t) {
                return e[0] === t
            })
        })[0]
    };
    t.exports = ["localCartView", "CartButtonView", "CartVirtualButtonView", function (t, e, a) {
        return {
            templateUrl: i, scope: {menuFood: "=food", buttonText: "@"}, controller: ["$scope", function (i) {
                i.text = i.buttonText || "加入购物车", i.$watch("menuFood", function (c) {
                    if (c) {
                        var l = angular.extend({id: c.food_id}, c);
                        if (l.hasSpec) {
                            if (i.cartSpec = o(l.specfoods_id), !i.cartSpec) {
                                var u = [l.specfoods_id, l, t];
                                i.cartSpec = new (n.apply(a, [null].concat(u))), s.push(i.cartSpec)
                            }
                        } else i.cartItem = r[l.id], i.cartItem || (i.cartItem = new e(l.id, t, [], l), r[l.id] = i.cartItem)
                    }
                })
            }]
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/shop/_block/shop-cartbutton/shop-cartbutton.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div ng-if=!menuFood.hasSpec><button class=shop-cartbutton ng-if="!cartItem.quantity && menuFood.stock" ng-click=cartItem.add($event)>{{text}}</button> <span class="shop-cartbutton disabled" ng-if=!menuFood.stock>已售完</span><div class=shop-cartctrl ng-if="cartItem.quantity > 0 || cartItem.quantity === \'\'"><button class="ctrl minus" ng-click=cartItem.sub($event)>-</button><input class="ctrl quantity" ng-model=cartItem.quantity ng-change=cartItem.update(cartItem.quantity)><button class="ctrl plus" ng-click=cartItem.add($event)>+</button></div></div><div ng-if=menuFood.hasSpec><button class=shop-cartbutton ng-if=!cartSpec.quantity shop-specmenu food=cartSpec>选规格</button><div class=shop-cartctrl ng-if=cartSpec.quantity><button class="ctrl minus" tooltip=多规格商品只能去购物车删除哦 tooltip-trigger=focus>-</button><input class="ctrl quantity" ng-model=cartSpec.quantity readonly><button class="ctrl plus" shop-specmenu food=cartSpec>+</button></div></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    var n = a(303);
    a(304), t.exports = function () {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: n,
            scope: {group: "=", shopCart: "=cart"},
            link: function (t, e) {
                t.closeCartHelper = function () {
                    e.removeClass("open")
                }
            }
        }
    }
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-carthelper/shop-carthelper.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shop-carthelper><div class="shopcarhelper-title clearfix"><span>凑一凑</span> <em>轻松凑满起送价</em> <a href=javascript: ng-click=closeCartHelper()>[ 关闭 ]</a></div><div class="shopcarthelper-container ui-scrollbar-light"><div ng-repeat="item in group track by $index" class=shop-cartbasket-tablerow entityid={{item.id}}><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemtotal" ng-bind="\'&yen;\' + item.price"></div><div class=cell><div shop-carthelperbutton food=item></div></div></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    a(307);
    var n = a(309), i = {};
    t.exports = ["localCartView", "CartButtonView", function (t, e) {
        return {
            templateUrl: n, scope: {food: "="}, controller: ["$scope", function (a) {
                var n = angular.extend({id: a.food.food_id}, a.food);
                n.hasSpec || (a.cartItem = i[n.id], a.cartItem || (a.cartItem = new e(n.id, t, [], n), i[n.id] = a.cartItem))
            }]
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/shop/_block/shop-carthelperbutton/shop-carthelperbutton.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, "<div ng-if=!menuFood.hasSpec><button class=shop-carthelperbutton ng-click=cartItem.add($event)>添加</button></div>")
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    a(311);
    var n = a(313);
    t.exports = ["localCartView", function (t) {
        return {
            templateUrl: n, scope: {shopCart: "=cart"}, controller: ["$scope", function (e) {
                e.addGroup = function () {
                    t.createGroup()
                }, e.removeGroup = function (e, a) {
                    a.stopPropagation(), t.removeGroup(e)
                }, e.switchGroup = function (e) {
                    t.changeGroup(e)
                };
                var a = "NO_GUIDE_GROUP";
                e.closeGuide = function () {
                    e.showGuide = !1, localStorage.setItem(a, !0)
                }, localStorage.getItem(a) || (e.showGuide = !0)
            }]
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/shop/_block/shop-groupswitcher/shop-groupswitcher.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<ul class=shop-grouptab ng-if="shopCart.vm.groups.length > 1"><li ng-repeat="group in shopCart.vm.groups" ng-click=switchGroup($index) ng-class="{ light: $index === shopCart.currentGroupIndex }"><span ng-bind="$index + 1" ng-if="shopCart.vm.groups.length >= 4"></span> <span ng-bind="$index + 1 + \'号购物车\'" ng-if="shopCart.vm.groups.length < 4"></span> <a href=javascript: class=icon-close ng-click="removeGroup($index, $event)"></a></li><li class=plus ng-click=addGroup() ng-if="shopCart.vm.groups.length < 6" tooltip=添加购物车>+</li></ul><div class=shop-grouphead ng-class="{ single: shopCart.vm.groups.length === 1 }"><a href=javascript: class=icon-cart-add ng-if="shopCart.vm.groups.length === 1" ng-click=addGroup() tooltip=添加购物车></a><div class=shop-groupguidetip ng-if="showGuide && shopCart.vm.groups.length === 1">可以添加多个购物车，便于商家分类打包哦 <a class=icon-close ng-click=closeGuide()></a></div><div class=shop-grouphead-row><span ng-if="shopCart.vm.groups.length > 1" ng-bind="shopCart.currentGroupIndex + 1 + \'号\'"></span>购物车 <a href=javascript: ng-click=shopCart.clearGroup(shopCart.currentGroupIndex)>[清空]</a></div></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    a(315);
    var n = a(317), i = a(318);
    t.exports = ["$q", "$http", "$templateCache", "$compile", "Popover", function (t, e, a, r, s) {
        var o = function (t, i) {
            return e.get(n, {cache: a}).then(function (e) {
                var a = s.extend({
                    defaults: {
                        modal: !0,
                        animation: !1,
                        placement: "right",
                        adjustLeft: 14,
                        adjustTop: 19,
                        attachToBody: !0,
                        trigger: "click",
                        target: i
                    }, render: function () {
                        return r(e.data)(t)[0]
                    }
                });
                return new a
            })
        };
        return {
            scope: {virtualFood: "=food"}, link: function (t, e) {
                return o(t, e[0]).then(function (a) {
                    e.on("click", function (e) {
                        e.stopPropagation(), a.show(), t.closeModal = function () {
                            return a.hide()
                        }, t.specsData = t.virtualFood.specifications;
                        var n = i.toSpecFilter(t.virtualFood.specfoods), r = function (t) {
                            var e = n(t);
                            return e ? {
                                food: e,
                                info: e.specs.map(function (t) {
                                    return t.value
                                }).join(" + "),
                                submitDisabled: e.stock <= 0,
                                submitText: e.stock > 0 ? "选好了，加入购物车" : "暂时缺货"
                            } : {
                                food: e,
                                info: "此规格未提供，请重新选择",
                                submitDisabled: !0,
                                submitText: "无法加入购物车",
                                hideReason: "NO_SPEC"
                            }
                        };
                        t.specs = t.specsData.reduce(function (t, e) {
                            return t[e.name] = e.values[0], t
                        }, {}), t.current = r(t.specs), t.$apply(), t.chooseSpec = function (e, a) {
                            t.specs[e] = a, t.current = r(t.specs)
                        }, t.addSpecfood = function (e, a) {
                            t.virtualFood.add(e.food_id, a), t.closeModal()
                        }
                    })
                })
            }
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/shop/_block/shop-specmenu/shop-specmenu.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shop-specmenu><div class=shop-specmenu-specs><dl ng-repeat="spec in specsData"><dt ng-bind=spec.name><dd ng-repeat="value in spec.values" ng-bind=value ng-click="chooseSpec(spec.name, value)" ng-class="{current: value === specs[spec.name]}"></dl></div><div class=shop-specmenu-infogroup ng-if=!current.hideReason><p>已选：<span ng-bind=current.info></span> <span class=shop-specmenu-stockleft ng-if="current.food.stock < 30 && current.food.stock > 0">仅剩 <span ng-bind=current.food.stock></span> 份</span></p><p class=shop-specmenu-price><span class=yen>&yen;</span><span ng-bind="current.food.price | number:2"></span> <del class=shop-specmenu-originprice ng-if=current.food.original_price ng-bind="&yen;\' + (current.food.original_price | number:2)"></del></p></div><div class=shop-specmenu-infogroup ng-if=current.hideReason ng-bind=current.info></div><div class="shop-specmenu-infogroup buttons"><button class=btn-primary ng-disabled=current.submitDisabled ng-bind=current.submitText ng-click="addSpecfood(current.food, $event)"></button> <a class=shop-specmenu-cancel href=javascript: ng-click=closeModal()>不要了</a></div><div class=shop-specmenu-arrow></div></div>')
    }]), t.exports = a
}, function (t, e) {
    "use strict";
    function a(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    function n(t) {
        var e = function (t) {
            return angular.extend(t, t.specfoods[0])
        }, n = function (t) {
            return t.specs.reduce(function (t, e) {
                return t[e.name] = e.value, t
            }, {})
        }, i = function (t) {
            return angular.extend(t, {
                hasSpec: !0, specfoods_id: t.specfoods.map(function (t) {
                    return t.food_id
                }), price: Math.min.apply(Math, a(t.specfoods.map(function (t) {
                    return t.price
                }))), specsMaps: t.specfoods.map(function (t) {
                    return n(t)
                })
            })
        };
        return t.map(function (t) {
            return angular.extend(t, {
                foods: t.foods.map(function (t) {
                    return t.specfoods.length > 1 ? i(t) : e(t)
                })
            })
        })
    }

    function i(t) {
        var e, n = t.map(function (t) {
            return t.foods
        });
        return (e = []).concat.apply(e, a(n))
    }

    function r(t) {
        return i(t).reduce(function (t, e) {
            return e.hasSpec ? e.specfoods.forEach(function (e) {
                t[e.food_id] = e
            }) : t[e.food_id] = e, t
        }, {})
    }

    function s(t) {
        return function (e) {
            return t.filter(function (t) {
                return t.specs.some(function (t) {
                    return e[t.name] === t.value
                })
            })[0]
        }
    }

    t.exports = {toNormal: n, flatMenu: i, getMenuMap: r, toSpecFilter: s}
}, function (t, e, a) {
    "use strict";
    var n = a(320);
    a(321);
    var i = a(142), r = ["$rootScope", "Zero", function (t, e) {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: n,
            scope: {shop: "=data", isdisabled: "="},
            link: function (a) {
                var n = a.$watch("shop", function (r) {
                    if ("undefined" != typeof r) {
                        a.imgUrl = a.shop.image_path ? a.shop.image_path : i, a.shop.tip = {
                            2: {
                                text: "当前过于繁忙",
                                bgColor: "#ff7667"
                            },
                            3: {text: "暂时只能通过手机订购", bgColor: "#c0c0c0"},
                            4: {text: "商家休息", bgColor: "#c0c0c0"},
                            5: {text: "预订中，" + r.next_business_time + "后开始送餐", bgColor: "#54ce75"},
                            6: {text: "只能通过手机订购", bgColor: "#c0c0c0"},
                            8: {text: "商家休息", bgColor: "#c0c0c0"},
                            9: {text: "即将休息", bgColor: "#ff7667"}
                        }[r.status], r.in_delivery_area && (a.shop.tip = {
                            text: "超出配送范围",
                            bgColor: "#c0c0c0"
                        }), -1 !== [1, 5, 9].indexOf(r.status) && r.in_delivery_area || (a.isdisabled = !0);
                        var s = function (a) {
                            return e.favor[a]({userId: t.user.user_id, filter: "restaurants", filterId: r.id}).$promise
                        }, o = localStorage.getItem("GEOHASH");
                        o && e.shopRatingScore.get({
                            restaurant_id: r.id,
                            latitude: Geohash.decode(o)[0],
                            longitude: Geohash.decode(o)[1]
                        }).$promise.then(function (t) {
                            a.shopRatingScore = t
                        }), s("get").then(function () {
                            return a.isFavorShop = !0
                        })["catch"](function () {
                            return a.isFavorShop = !1
                        }), a.favor = function () {
                            return t.user.user_id ? void(a.isFavorShop ? s("delete").then(function () {
                                return a.isFavorShop = !1
                            }) : s("post").then(function () {
                                return a.isFavorShop = !0
                            })) : void(location.href = t.ACCOUNTBASE + "/login?redirect_url=" + location.href)
                        }, n()
                    }
                })
            }
        }
    }];
    angular.module("eleme.page").filter("openhour", function () {
        return function (t) {
            return t ? t.map(function (t) {
                return t.replace("/", "-")
            }).join(" / ") : void 0
        }
    }).filter("compareRating", function () {
        return function (t) {
            if ("undefined" != typeof t) {
                var e;
                return t > 0 && (e = "高于周边商家"), 0 === t && (e = "与周边商家持平"), 0 > t && (e = "低于周边商家"), {
                    text: e,
                    number: (100 * Math.abs(t)).toFixed(1) + "%"
                }
            }
        }
    }), t.exports = r
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-guide/shop-guide.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shopguide><div class=container ng-show=shop itemscope itemtype=http://schema.org/Restaurant><div class=shopguide-info><meta itemprop=url content={{$root.ROOTBASE}}/shop/{{shop.id}}><img ng-src="{{imgUrl + \'|95x95\' | imgOptimize}}" alt={{shop.name}} itemprop=image><div class=shopguide-info-wrapper><div><h1 title={{shop.name}} ng-class="{hastip: shop.tip}" itemprop=name>{{shop.name}}</h1><span ng-if=shop.tip ng-style="{\'background-color\': shop.tip.bgColor}" class=shopguide-tip>{{shop.tip.text}}</span></div><p class=shopguide-info-rate><span rate-star rating=shop.rating></span> (<a ng-href=/shop/{{shop.id}}/rate>{{shop.rating_count}}</a>) <span>月售{{shop.recent_order_num}}单</span></p><p><span ng-repeat="flavor in shop.flavor" class=shopguide-tag itemprop=servesCuisine>{{flavor.name}}</span></p></div><div class=shopguide-info-extra><ul><li class="shopguide-extra-item shopguide-extra-compete" ng-if=shopRatingScore><div itemscope itemprop=aggregateRating itemtype=http://schema.org/AggregateRating><h2 class=color-stress itemprop=ratingValue>{{shopRatingScore.star_level.toFixed(1)}}</h2><meta itemprop=bestRating content=5><meta itemprop=reviewCount content={{shop.rating_count}}><p>综合评价<br><span class=color-mute>{{(shopRatingScore.compare_rating | compareRating).text}}</span> <span class=color-stress ng-if=shopRatingScore.compare_rating>{{(shopRatingScore.compare_rating | compareRating).number}}</span></p></div><div><p>服务态度<span rate-star rating=shopRatingScore.service_score></span> <span class=color-stress>{{shopRatingScore.service_score.toFixed(1)}}分</span></p><p>菜品评价<span rate-star rating=shopRatingScore.food_score></span> <span class=color-stress>{{shopRatingScore.food_score.toFixed(1)}}分</span></p></div></li><li class=shopguide-extra-item ng-if=shop.description itemprop=description>{{shop.description}}</li><li class="shopguide-extra-item address"><p itemscope itemprop=streetAddress itemtype=http://schema.org/PostalAddress><span class=label>商家地址：</span> <span>{{shop.address}}</span><meta itemprop=telephone content={{shop.phone}}></p><p><span class=label>营业时间：</span> <span itemprop=openingHours>{{shop.opening_hours | openhour}}</span></p></li><li class=shopguide-extra-item><p class=shopguide-extra-delivery>由<span>{{shop.delivery_mode.description || shop.name}}</span>提供配送服务</p><a ng-href=/shop/{{shop.id}}/info class="btn-primary btn-lg btn-block">查看商家详情</a></li></ul></div></div><div class=shopguide-server><span ng-hide="shop.id == 656683"><em>起送价</em> <em class=shopguide-server-value>{{shop.minimum_order_amount}}元</em></span> <span ng-hide="shop.id == 656683"><em>配送费</em> <em class=shopguide-server-value>{{shop.delivery_fee}}元</em> <em class=shopguide-server-delivery ng-if=shop.delivery_mode.description>{{shop.delivery_mode.text}}</em></span> <span ng-hide="shop.id == 656683"><em>平均送达速度</em> <em class=shopguide-server-value>{{shop.order_lead_time}}分钟</em></span></div><a class=shopguide-favor href=javascript: ng-click=favor()><i ng-if=isFavorShop class=icon-unfavorite></i> <i ng-if=!isFavorShop class=icon-favorite></i> <span ng-if=isFavorShop>取消收藏</span> <span ng-if=!isFavorShop>收藏</span></a></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , , function (t, e, a) {
    "use strict";
    var n = a(325);
    a(326);
    var i = ["$location", function (t) {
        return {
            restrict: "A",
            templateUrl: n,
            scope: {filterData: "=", shop: "=data", displayType: "=", shopAction: "="},
            link: function (e) {
                var a = "-price";
                e.filter = function (t) {
                    "-price" === t && (a = "price" === a ? "-price" : "price", t = a), e.filterData = t
                }, e.changeDisplayType = function (t) {
                    return e.displayType = t
                }, e.search = function () {
                    return t.search("text", encodeURI(e.searchText))
                }
            }
        }
    }];
    t.exports = i
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-nav/shop-nav.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shopnav><div class="container clearfix"><div class=shopnav-left><a class=shopnav-tab href=/shop/{{shop.id}} ng-class="{active: shop.tab === \'index\'}">所有商品</a> <a class=shopnav-tab href=/shop/{{shop.id}}/rate ng-class="{active: shop.tab === \'rate\'}">评价</a> <a class=shopnav-tab href=/shop/{{shop.id}}/info ng-class="{active: shop.tab === \'info\'}">商家详情</a> <span class=shopnav-filter ng-if="shopAction === \'menu\'"><a href=javascript: ng-click="filter(\'default\')" ng-class="{active: filterData === \'default\'}">默认排序</a> <a href=javascript: ng-click="filter(\'-rating\')" ng-class="{active: filterData === \'-rating\'}">评分 <i class=icon-uniE02D></i></a> <a href=javascript: ng-click="filter(\'-month_sales\')" ng-class="{active: filterData === \'-month_sales\'}">销量 <i class=icon-uniE02D></i></a> <a href=javascript: ng-click="filter(\'-price\')" ng-class="{active: filterData === \'-price\' || filterData === \'price\'}">价格 <i class=icon-uniE02D ng-hide="filterData === \'price\'"></i> <i class=icon-uniE02C ng-show="filterData === \'price\'"></i></a> <span><a class="shopnav-filter-display icon-grid" href=javascript: title=以网格形式显示菜单 ng-click="changeDisplayType(\'grid\')" ng-class="{active: displayType === \'grid\'}"></a> <a class="shopnav-filter-display icon-list" href=javascript: title=以列表形式显示菜单 ng-click="changeDisplayType(\'list\')" ng-class="{active: displayType === \'list\'}"></a></span></span></div><div class=shopnav-search><form class=place-search role=search ng-submit=search()><button class="place-search-btn icon-search" ubt-click=403 ng-attr-ubt-data-keyword={{searchText}} title=搜索商家或美食></button><label for=globalsearch>搜索商家或美食</label><input id=globalsearch class=place-search-input ng-model=searchText autocomplete placeholder=搜索商家,美食...></form></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(329);
    a(330);
    var i = a(142), r = a(318), s = {}, o = ["$rootScope", "$location", "Dialog", "Zero", "notifyServerError", function (t, e, a, o, c) {
        return {
            restrict: "A",
            templateUrl: n,
            replace: !0,
            scope: {shopCache: "=", filterData: "=", displayType: "="},
            controller: ["$scope", function (n) {
                n.loading = !0, n.itemInfo = {}, n.$on("MENUITEM::SHOWINFO", function (t, e) {
                    t.stopPropagation(), n.itemInfo = e, a.show("ITEMINFO")
                }), s.promise = n.shopCache.promise.then(function (t) {
                    return s.id !== t.id ? (s.id = t.id, o.shoppingRst.query({restaurant_id: t.id}).$promise.then(function (e) {
                        return e[0] && "好评榜" === e[0].name && (e[0].id = 1), e[1] && "热销榜" === e[1].name && (e[1].id = 2), e = e.filter(function (t) {
                            return 1 !== t.id && 2 !== t.id
                        }), s.res = r.toNormal(e), {shop: t, res: s.res}
                    })) : {shop: t, res: s.res}
                }), s.promise.then(function (a) {
                    var i = a.shop, s = a.res;
                    n.loading = !1;
                    var o = [];
                    s.forEach(function (t) {
                        o.length < 5 && (o = o.concat(t.foods.slice(0, 5 - o.length).map(function (t) {
                            return t.name
                        })))
                    }), t.SEO.description = i.name + "位于" + i.address + "，主要美食有" + o.join("、") + "等，了解更多美食外卖，上饿了么网上订餐", n.categorys = s;
                    var c, l = r.flatMenu(n.categorys), u = decodeURI(e.search().text);
                    "undefined" !== u && (c = l.filter(function (t) {
                        return -1 !== t.name.indexOf(u)
                    }), n.searchEnv = {text: u}), n.foods = c || l, window.setTimeout(g, 0)
                })["catch"](function (t) {
                    n.loading = !1, c(t)
                }), n.cartLink = s.promise.then(function (t) {
                    var e = t.shop, a = t.res;
                    return {
                        restaurantId: e.id,
                        restaurantStatus: e.status,
                        deliveryFee: e.delivery_fee,
                        minimumAmount: e.minimum_order_amount,
                        menuMap: r.getMenuMap(a),
                        menuArray: r.flatMenu(a)
                    }
                });
                var l, u = {}, d = function () {
                    return document.documentElement.scrollTop || document.body.scrollTop
                }, p = angular.$(".shopmenu-main"), h = function () {
                    return u.dom.style.maxHeight = DomUtil.theElementViewHeight(p[0]) + "px"
                }, m = DomUtil.throttle(function () {
                    var t = l.filter(function (t) {
                        return d() >= t.top - u.height
                    }).pop();
                    "undefined" != typeof t && (n.currentCategory !== t.category && (n.currentCategory = t.category, n.$apply()), y && h())
                }, 100), f = function () {
                    if ("default" === n.filterData) {
                        var t = [].slice.call(angular.$(".shopmenu-title")), e = n.categorys;
                        l = t.map(function (t, a) {
                            return {category: e[a], top: t.offsetTop}
                        })
                    }
                };
                n.shopNavSticky = function (t) {
                    t || p.css({"margin-top": 0}), t && (y ? (h(), u.height = 0, p.css({"margin-top": 0})) : (u.height = u.dom.offsetHeight, p.css({"margin-top": u.dom.offsetHeight + "px"})), "default" === n.filterData && f())
                };
                var g = function () {
                    f(), u.dom = angular.$(".shopmenu-nav")[0], u.height = u.dom.offsetHeight, u.top = u.dom.offsetTop, angular.$(window).on("scroll", m);
                    var t = e.hash();
                    t && window.setTimeout(function () {
                        window.scrollTo(0, document.getElementById(t).offsetTop - u.height)
                    }, 1e3)
                }, v = 1500, y = !1;
                y = (window.innerWidth || document.documentElement.clientWidth) >= v, angular.$(window).on("resize", DomUtil.throttle(function () {
                    f(), y = (window.innerWidth || document.documentElement.clientWidth) >= v, y && h()
                })), n.scrollToCategory = function (t) {
                    "default" !== n.filterData && (n.filterData = "default", angular.$(window).on("scroll", m));
                    var e = n.categorys.indexOf(t);
                    angular.$("body").animate({scrollTop: [d(), l[e].top - u.height]}, 300), angular.$("html").animate({scrollTop: [d(), l[e].top - u.height]}, 300)
                }, n.$watch("filterData", function (t, e) {
                    "undefined" != typeof e && (n.filterText = {
                        "-rating": "评分从高到低排序",
                        "-month_sales": "销量从高到低排序",
                        "-price": "价格从高到低排序",
                        price: "价格从低到高排序"
                    }[t], "default" !== t ? angular.$(window).off("scroll", m) : angular.$(window).on("scroll", m))
                }), n.$watch("displayType", function (t, e) {
                    "undefined" != typeof e && f()
                }), n.defaultImg = i
            }]
        }
    }];
    t.exports = o
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-menu/shop-menu.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div><div loading ng-show=loading></div><div ng-show="!loading && !searchEnv" class=shopmenu-nav sticky sticky-class=sticky sticky-body-class=shopmenu-nav-sticky sticky-fn=shopNavSticky><a href=javascript: ng-repeat="category in categorys" ng-click=scrollToCategory(category) ng-class="{active: currentCategory.id === category.id}">{{category.name}}</a></div><div ng-show=!loading class=shopmenu-main ng-class="{grid: displayType === \'grid\', list: displayType === \'list\'}"><div ng-if="filterData === \'default\' && !searchEnv"><div class="shopmenu-list clearfix" ng-repeat="category in categorys"><h3 class=shopmenu-title>{{category.name}} <span class=shopmenu-des>{{category.description}}</span></h3><div ng-repeat="food in category.foods" shop-menu-item food=food shop=shopCache></div></div></div><div ng-if="filterData !== \'default\' || searchEnv" class="shopmenu-list clearfix"><h3 class=shopmenu-title ng-if=!searchEnv>{{filterText}}</h3><h3 class=shopmenu-title ng-if=searchEnv>搜索<em class=color-stress>「{{searchEnv.text}}」</em>的结果</h3><div nodatatip ng-if="searchEnv && !foods.length" content=没有搜索结果，换个条件试试吧></div><dd shop-menu-item food=food shop=shopCache ng-repeat="food in foods | orderBy:filterData"></div><div shop-cart cart-link=cartLink ng-hide="shopCache.id == 656683"></div><div dialog=ITEMINFO><div shop-iteminfo item-info=itemInfo></div></div></div></div>');
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(333);
    t.exports = function () {
        return {
            strict: "A", templateUrl: n, replace: !0, scope: {food: "=", shop: "="}, link: function (t) {
                t.showInfo = function (e) {
                    t.$emit("MENUITEM::SHOWINFO", e)
                }
            }
        }
    }
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-menu-item/shop-menu-item.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shopmenu-food ng-class="{noimg: !food.image_path}" id={{food.food_id}}><span class=col-1 ng-if=food.image_path><a href=javascript: ng-click=showInfo(food)><img ng-src="{{food.image_path + \'|100x100\' | imgOptimize}}" alt={{food.name}}的图片></a></span><div class="col-2 shopmenu-food-main"><h3 class="shopmenu-food-name ui-ellipsis">{{food.name}}</h3><p class="color-mute ui-ellipsis" tooltip={{food.description}}>{{food.description}}</p><p><span rate-star rating=food.rating></span> <span class=color-mute>({{food.rating_count}})</span> <span class=color-mute>月售{{food.month_sales}}份</span></p></div><span class="col-3 shopmenu-food-price color-stress">{{food.original_price || food.price}}<small>{{food.hasSpec && \'起\'}}</small></span> <span class=col-4><div shop-cartbutton food=food ng-hide="shop.id == \'656683\'"></div></span></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    a(335);
    var i = a(337);
    t.exports = function () {
        return {
            templateUrl: i, scope: {itemInfo: "="}, controller: ["$q", "$scope", "Zero", function (t, e, a) {
                e.ratePageContext = {data: []};
                var i = function (t, a) {
                    e.ratingCount = a.length, e.ratePageContext.data = a, e.imagesPath = t.map(function (t) {
                        return t.image_path
                    })
                }, r = function () {
                    e.ratingCount = 0, e.ratePageContext.data = [], e.ratePageContext.currentPage = 1, e.imagesPath = [], e.currentImage = 0, e.showImageOffset = 0
                };
                e.focusImage = function (t) {
                    e.currentImage = t
                }, e.showImageNext = function (t) {
                    var a = e.showImageOffset + t;
                    a > e.imagesPath.length - 1 || 0 > a || (e.showImageOffset = a)
                }, e.$watch("itemInfo", function (e) {
                    if (e && e.name) {
                        r();
                        var s = [];
                        e.specfoods_id ? s = s.concat(e.specfoods_id) : s.push(e.food_id), t.all([a.shoppingFood.query({"food_ids[]": s}).$promise, a.ugcFoodRating.query({
                            offset: 0,
                            limit: 999,
                            has_text: 1,
                            "food_ids[]": s
                        }).$promise]).then(function (t) {
                            return i.apply(void 0, n(t))
                        })["catch"](function () {
                        })
                    }
                })
            }]
        }
    }
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/shop/_block/shop-iteminfo/shop-iteminfo.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shop-iteminfo><div class=iteminfo-imagegroup><img class=mainimage ng-src="{{imagesPath[currentImage] + \'|360x360\' | imgOptimize}}" alt={{itemInfo.name}}的图片><div ng-show="imagesPath.length > 1"><a href=javascript: ng-click=showImageNext(-4) class="imagegroup-ctrl icon-profile-left-arrow"></a><ul class=imagelist><li ng-repeat="imagePath in imagesPath track by $index" ng-show="$index >= showImageOffset"><a href=javascript: ng-click=focusImage($index) ng-class="{ focus: currentImage === $index }"><img ng-src="{{imagePath + \'|60x60\' | imgOptimize}}" alt={{itemInfo.name}}的顾客上传图片></a></li></ul><a href=javascript: ng-click=showImageNext(4) class="imagegroup-ctrl icon-profile-right-arrow"></a></div></div><section class=iteminfo-info><h5 ng-bind=itemInfo.name></h5><p ng-show=!!itemInfo.description class=description ng-bind=itemInfo.description></p><div class=iteminfo-cartitem><div class=iteminfo-price><span class=price><span class=yen>&yen;</span> <span class=price ng-bind="itemInfo.price + (itemInfo.specfoods_id.length > 1 ? \'起\' : \'\')"></span></span> <del ng-if=itemInfo.original_price>&yen;<span ng-bind=itemInfo.original_price></span></del></div><div ng-if=itemInfo.name shop-cartbutton food=itemInfo button-text=立即购买 ng-hide="shop.id == \'656683\'"></div></div><div class=iteminfo-rate><h6 ng-if=ratingCount>商品评价（<span ng-bind=ratingCount></span>）</h6><ul class=rategroup><li ng-repeat="item in ratePageContext.pageData"><div><span rate-star rating=item.rating></span> <span ng-bind="item.rated_at | date: \'yyyy-MM-dd\'"></span><div class=rateuser><span ng-bind=item.asterisk_username></span><img ng-src="{{item.avatar + \'|25x25\' | imgOptimize}}"></div></div><p class=ratetext ng-bind=item.rating_text></p></li></ul><div pagination pagination-context=ratePageContext pagination-pagesize=3></div></div></section></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    var n = a(339);
    a(340);
    var i = a(238), r = function () {
        return {
            restrict: "A", replace: !0, templateUrl: n, controller: ["$scope", function (t) {
                var e = t.comment;
                t.avatarImgUrl = e.avatar ? e.avatar : i, t.foodImgUrl = e.item_rating_list.filter(function (t) {
                    return t.image_hash
                }), t.isFoodComment = 2 === e.rating_type, t.rateConfig = {style: "star"}, t.rate = {value: e.rating_star || 0}
            }]
        }
    };
    t.exports = r
}, function (t, e) {
    var a = "/entry/main/shop/_block/comment-item/comment-item.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<li class=commentitem><span class=commentitem-avatar><img ng-src="{{avatarImgUrl + \'|60x60\' | imgOptimize}}" alt={{comment.username}}></span><div class=commentitem-content><h4 class=commentitem-username>{{comment.username}}</h4><div class=commentitem-main><span class=commentitem-stars config=rateConfig value=rate isreadonly=true rate></span> <span class=commentitem-time class=color-mute ng-bind=comment.time_spent_desc></span><p class=commentitem-text ng-if=comment.rating_text>{{comment.rating_text}}</p></div><div item-rating-list data=food class=shoprate-itemrating ng-if=comment.item_rating_list ng-repeat="food in comment.item_rating_list"></div><span class=commentitem-date>{{comment.rated_at | date:\'yyyy-MM-dd hh:mm:ss\'}}</span><div class=commentitem-reply ng-if=comment.reply_text><h6>商家回复：</h6>{{comment.reply_text}}</div><img ng-if="foodImgUrl.length > 0" ng-repeat="item in foodImgUrl" ng-src="{{item.image_hash + \'|60x60\' | imgOptimize}}" alt={{item.rate_name}} class=commentitem-foodimage></div></li>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(343);
    a(344), t.exports = function () {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: n,
            scope: {data: "="},
            controller: ["$scope", "$location", function (t, e) {
                t.ratingValue = {value: t.data.rating_star}, t.linkToFood = function (t) {
                    return e.url(location.pathname.replace("/rate", "") + "#" + t)
                }
            }]
        }
    }
}, function (t, e) {
    var a = "/entry/main/shop/_block/item-rating-list/item-rating-list.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, "<div class=shoprate-itemratinglist><span class=shoprate-itemratinglist-name>{{data.rate_name}}</span> <span class=commentitem-stars config=rateConfig value=ratingValue isreadonly=true rate></span> <a href=javascript: ng-click=linkToFood(data.food_id)>查看商品</a><p class=shoprate-itemratinglist-text ng-if=data.rating_text>{{data.rating_text}}</p><div class=commentitem-reply ng-if=data.reply_text><h6>商家回复：</h6>{{data.reply_text}}</div></div>")
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(347);
    a(348);
    var i = {
        promise: {},
        page: {}
    }, r = ["$rootScope", "$routeParams", "Zero", "notifyServerError", function (t, e, a, r) {
        return {
            templateUrl: n, restrict: "A", link: function (t) {
                var n = e.id;
                t.loading = !0, t.ratingStorage = {}, t.filter = {};
                var s = 10, o = function () {
                    t.loading = !0;
                    var e = t.filter.type, i = t.ratingStorage[e];
                    a.ugc.query({
                        action: "ratings",
                        id: n,
                        record_type: e,
                        offset: (i.page - 1) * s,
                        limit: s
                    }).$promise.then(function (e) {
                        t.loading = !1, e.length || angular.$(window).off("scroll", l), i.data = i.data.concat(e), i.page++
                    })["catch"](function (t) {
                        return r(t)
                    })
                };
                i.typePromise || (i.typePromise = a.ugc.query({
                    id: n,
                    action: "rating_categories"
                }).$promise), i.typePromise.then(function (e) {
                    t.ratingTypeList = e, t.filter.type = e[0].record_type, e.forEach(function (e) {
                        return t.ratingStorage[e.record_type] = {page: 1, data: []}
                    }), o()
                })["catch"](function (t) {
                    return r(t)
                }), t.select = function (e) {
                    e !== t.filter.type && (t.filter.type = e, t.ratingStorage[e].data.length || o())
                };
                var c = document.getElementById("ratinglist"), l = function () {
                    var e = c.getBoundingClientRect().bottom - (window.innerHeight || document.documentElement.clientHeight), a = t.ratingStorage[t.filter.type];
                    a && 0 > e && !a["page" + a.page] && (a["page" + a.page] = !0, o())
                };
                angular.$(window).on("scroll", l)
            }
        }
    }];
    t.exports = r
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-rate/shop-rate.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=commentbox><div class=commentfilter><a class=commentfilter-item ng-repeat="item in ratingTypeList" ng-class="{active: filter.type === item.record_type}" ng-click=select(item.record_type)>{{item.name}}({{item.amount}})</a></div><ul id=ratinglist class=commentlist><li comment-item ng-repeat="comment in ratingStorage[filter.type].data"></li></ul><div loading ng-show=loading></div><div nodatatip ng-if="!loading && !ratingStorage[filter.type].data.length"></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(351);
    a(352);
    var i = ["$rootScope", "Zero", "MessageBox", "notifyServerError", "Dialog", function (t, e, a, i, r) {
        return {
            restrict: "A", templateUrl: n, scope: {shop: "=data"}, replace: !0, link: function (n) {
                var s = n.$watch("shop", function (o) {
                    void 0 !== o && (o.identification && (n.identificateResult = {
                        1: "良好",
                        2: "一般",
                        3: "较差"
                    }[o.identification.identificate_result]), s(), n.testLogin = function () {
                        return t.user.user_id ? void r.show("complaintDialog") : void(location.href = t.ACCOUNTBASE + "/login?redirect_url=" + location.href)
                    }, n.complaintObj = {}, n.complaint = function () {
                        e.shopComplaint.post({
                            userId: t.user.user_id,
                            rstId: o.id,
                            complaint_type: 100,
                            content: n.complaintObj.text
                        }).$promise.then(function () {
                            r.close("complaintDialog"), a("投诉成功", "感谢您的投诉", "success")
                        })["catch"](function (t) {
                            return i(t)
                        })
                    })
                })
            }
        }
    }];
    t.exports = i
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-bulletin/shop-bulletin.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=shopmain-right><div class=shopbulletin><div class=shopbulletin-section><h3 class=shopbulletin-section-title>商家公告</h3><p class=shopbulletin-content>{{shop.promotion_info}}</p><ul class=shopbulletin-supports><li ng-repeat="support in shop.supports"><span ng-style="{\'background-color\': \'#\' + support.icon_color}">{{support.icon_name}}</span> {{support.description}}</li></ul><a href=javascript: class=shopcomplaint ng-click=testLogin()>举报商家</a></div><div dialog=complaintDialog><h5 class=complaint-title>举报商家</h5><form ng-submit=complaint()><label class=complaint-field><textarea class=shopcomplaint-textarea ng-model=complaintObj.text rows=6 cols=40></textarea></label><div class=complaint-field><button type=submit class=btn-primary>提交</button></div></form></div><div class=shopbulletin-section ng-if=shop.identification><h3 class=shopbulletin-section-title>食品安全等级公示</h3><div class=shopbulletin-foodsecurity-result><h4>监督检查结果:<span>{{identificateResult}}</span></h4><span class="shopbulletin-foodsecurity-image result{{shop.identification.identificate_result}}"></span></div><div class=shopbulletin-foodsecurity-date><h4>检查日期<p class=shopbulletin-foodsecurity-year>{{shop.identification.identificate_date | date:"yyyy"}}年</p><p class=shopbulletin-foodsecurity-day>{{shop.identification.identificate_date | date:"MM/dd"}}</p></h4></div><p class=shopbulletin-foodsecurity-agency>{{shop.identification.identificate_agency}}</p></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , , function (t, e, a) {
    "use strict";
    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    var i = a(356);
    a(357);
    var r = function () {
        return {
            restrict: "A", templateUrl: i, replace: !0, scope: {shop: "=data"}, link: function (t) {
                var e = t.$watch("shop", function (a) {
                    if ("undefined" != typeof a) {
                        t.showPromise = -1 !== [1, 2, 15].indexOf(a.city_id), a.flavor && (t.flavorCategory = a.flavor.map(function (t) {
                            return t.name
                        }).join("、")), t.businessImage = a.license.business_license_image, t.cateringImage = a.license.catering_service_license_image;
                        var i = [];
                        if (a.album) {
                            var r;
                            i = a.album.map(function (t) {
                                return t.photos.map(function (e) {
                                    return {name: t.name, image: e.image_hash}
                                })
                            }), i = (r = []).concat.apply(r, n(i))
                        }
                        t.cateringImage && i.unshift({
                            name: "商家许可证",
                            image: t.cateringImage
                        }), t.businessImage && i.unshift({name: "商家营业执照", image: t.businessImage}), t.albumMap = i, e()
                    }
                })
            }
        }
    };
    t.exports = r
}, function (t, e) {
    var a = "/entry/main/shop/_block/shop-info/shop-info.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div><h3>商家基本资料</h3><div class=shopinfo-content><p ng-if=shop.description><span class=shopinfo-label>商家简介：</span><span>{{shop.description}}</span></p><p ng-if=shop.address><span class=shopinfo-label>商家地址：</span><span>{{shop.address}}</span></p><p ng-if=shop.opening_hours><span class=shopinfo-label>营业时间：</span><span>{{shop.opening_hours | openhour}}</span></p><p ng-if=shop.flavorCategory><span class=shopinfo-label>菜系分类：</span><span>{{flavorCategory}}</span></p><p ng-if="businessImage && showPromise"><span class=shopinfo-label>营业执照：</span> <span>该商家已通过营业执照认证</span></p><p ng-if="cateringImage && showPromise"><span class=shopinfo-label>营业许可证：</span> <span>该商家已通过服务许可认证</span></p></div><h3 ng-if=shop.identification>商家认证资质</h3><div class="shopinfo-content shopinfo-identification" ng-if=shop.identification><table class=typo-table><caption>工商登记信息</caption><tbody><tr><td>企业名称<td>{{shop.identification.company_name}}<tr><td>工商执照注册号<td>{{shop.identification.registered_number}}<tr><td>注册资本<td>{{shop.identification.registered_principal}}<tr><td>注册地址<td>{{shop.identification.registered_address}}<tr><td>经营期限<td>{{shop.identification.operation_period | date:\'yyyy-MM-dd\'}}<tr><td>属地监管所<td>{{shop.identification.identificate_agency}}<tr><td>法定代表人<td>{{shop.identification.legal_person}}<tr><td>经营范围<td>{{shop.identification.business_scope}}</table><table class=typo-table><caption>餐饮服务许可证</caption><tbody><tr><td>许可范围<td>{{shop.identification.licenses_scope}}<tr><td>许可证有效期<td>{{shop.identification.licenses_date | date:\'yyyy-MM-dd\'}}<tr><td>许可证号<td>{{shop.identification.licenses_number}}</table></div><h3 ng-if=albumMap>商家图片</h3><div class=shopinfo-content ng-if=albumMap><div class="shopinfo-image-content clearfix"><span class=shopinfo-image ng-repeat="album in albumMap"><a ng-href="{{album.image | imgOptimize}}" target=_blank><img ng-src="{{album.image + \'|210x150\' | imgOptimize}}" alt={{album.name}}> <span>{{album.name}}</span></a></span></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(360);
    a(361), t.exports = function () {
        return {
            restrict: "A", replace: !0, templateUrl: n, link: function (t) {
                t.backToTop = function () {
                    angular.$(0 === document.body.scrollTop ? document.documentElement : document.body).animate({scrollTop: [e(), 0]}, 300)
                };
                var e = function () {
                    return Math.max(document.documentElement.scrollTop || 0, window.scrollY || 0)
                }
            }
        }
    }
}, function (t, e, a) {
    var n = "/entry/main/shop/_block/side-tools/side-tools.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(n, '<div class=sidetools><a href=http://kaidian.ele.me class="sidetools-item icon-visit-history" target=_blank title=我要开店 tooltip=我要开店 tooltip-placement=left></a><div class="sidetools-item icon-qrcode"><img class=sidetools-qrcode src=' + a(112) + ' alt=扫描二维码免费下载手机App></div><a href=JavaScript: class="sidetools-item icon-service" title=在线客服 tooltip=在线客服 tooltip-placement=left online-service target=_blank></a> <a href=JavaScript: class="sidetools-item icon-arrow-up" title=回到顶部 tooltip=回到顶部 tooltip-placement=left ng-click=backToTop()></a></div>')
    }]), t.exports = n
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    var i = a(364);
    a(365), angular.module("eleme.page").factory("checkoutMobileVerify", a(369)).factory("checkoutSetPassword", a(373)).factory("checkoutService", a(377)).factory("checkoutCartView", a(378)).directive("checkoutCart", a(379)).directive("checkoutCartgarnish", a(385)).directive("checkoutGuide", a(389)).directive("checkoutAddress", a(393)).directive("quicksubmitTrigger", function () {
        return {
            scope: {submitVisable: "="}, link: function (t, e) {
                var a = e[0], n = function () {
                    return document.documentElement.scrollTop || document.body.scrollTop
                }, i = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }, r = function () {
                    var t = i(), e = n();
                    return e + t > a.offsetTop
                }, s = function () {
                    var e = r();
                    t.submitVisable !== e && (t.submitVisable = e, t.$apply())
                };
                t.submitVisable = r(), document.addEventListener("scroll", s), window.addEventListener("resize", s), t.$on("$destroy", function () {
                    document.removeEventListener("scroll", s), window.removeEventListener("resize", s)
                })
            }
        }
    }), t.exports = {
        templateUrl: i,
        controller: ["$q", "$rootScope", "$scope", "$location", "Zero", "notifyServerError", "MessageBox", "Address", "checkoutService", "LocalCart", "checkoutCartView", function (t, e, a, i, r, s, o, c, l, u, d) {
            localStorage.getItem("GEOHASH") || (location.href = e.MAINBASE + "/?force"), e.layoutState = {
                type: "checkout",
                hideSidebar: !0
            }, a.checkout = {submitVisable: !0}, a.$on("$destroy", function () {
                return e.layoutState = {}
            }), a.guide = {step: 2, text: "订单信息"};
            var p = function (t, a) {
                angular.extend(e.layoutState, {rstUrl: t || "", rstName: a || ""})
            }, h = function (e) {
                return e.checkout().then(function (e) {
                    e.cart.sig = e.sig;
                    var i = e.cart, r = e.current_address;
                    if (!i.group.length)return t.reject("EMPTY_CART");
                    a.checkoutData = e, a.cart = i;
                    var s = -1;
                    if (a.payList = e.payments.map(function (t) {
                            return 1 === t.select_state && (s = a.payId = t.id), angular.extend({
                                1: {
                                    id: 1,
                                    type: "online",
                                    title: "在线支付",
                                    tip: "支持微信、支付宝、QQ钱包及大部分银行卡",
                                    disabledText: "该商家仅支持货到付款"
                                },
                                0: {id: 0, type: "offline", title: "货到付款", tip: "送货上门后再付款", disabledText: "该商家仅支持在线支付"}
                            }[t.id], {disabled: -1 === t.select_state})
                        }), a.hongbaoCount = e.hongbao_info.valid_hongbao_count, e.deliver_times.length) {
                        a.showDeliverTime = !0;
                        var o = [];
                        5 === a.checkoutData.cart.restaurant_status ? o.push({
                            text: "请选择送达时间",
                            value: -1,
                            disabled: !0,
                            select: !0
                        }) : o.push({
                            text: "立即送达",
                            value: "",
                            select: !0
                        }), a.bookTimes = e.deliver_times.reduce(function (t, e) {
                            var a = e.time_description, i = e.time;
                            return [].concat(n(t), [{text: a, value: i}])
                        }, o)
                    } else a.showDeliverTime = !1;
                    return a.invoice = e.invoice.is_available, {
                        checkoutData: e,
                        cartData: i,
                        paymethod_id: s,
                        current_address: r
                    }
                })
            }, m = function (t) {
                return r.restaurant.get({
                    version: "v4",
                    id: t,
                    "fields[]": ["name", "only_use_poi", "delivery_mode"]
                }).$promise.then(function (e) {
                    var n = e.name, i = e.only_use_poi, r = e.delivery_mode;
                    return p(t, n), a.delivery = {1: "蜂鸟专送", 2: n, 3: "商家"}[(r || {id: 2}).id], {
                        name: n,
                        only_use_poi: i,
                        delivery_mode: r
                    }
                })
            }, f = function () {
                return a.user.$promise.then(function (t) {
                    return r.invoice.query({userId: t.user_id}).$promise
                }).then(function (t) {
                    return a.invoices = t, t
                })["catch"](function () {
                })
            }, g = function (t) {
                a.checkoutData.invoice = t
            };
            a.loading = !0, a.nofood = !0, a.cartView = d, a.orderButton = d.orderButton, a.nofoodWatcher = d.nofood, a.$watch("nofoodWatcher.nofood", function (t) {
                t && (a.nofood = !0)
            });
            var v = new u, y = l.checker;
            m(v.restaurant_id).then(function (e) {
                try {
                    if (!v.cartMap[v.restaurant_id][0].entities.length)return t.reject("EMPTY_CART")
                } catch (a) {
                }
                return e
            }).then(function (e) {
                return t.all({rstInfo: e, invoiceInfo: f(), checkoutDatas: h(v)})
            }).then(function (t) {
                var n = t.checkoutDatas, i = t.rstInfo, r = n.cartData, s = n.paymethod_id, o = n.current_address;
                a.isBaishengRst = i.only_use_poi, a.address = o, a.loading = !1, a.nofood = !1, y.init({
                    userId: e.user.user_id || "anonymous",
                    invoiceAvailable: g
                }, r, o, s, i)
            })["catch"](function (t) {
                switch (a.loading = !1, t) {
                    case"EMPTY_CART":
                        a.nofood = !0;
                        break;
                    default:
                        s(t)
                }
            }), a.selectPay = function (t, e) {
                t !== a.payId && (e || y.updatePaymethod(t).then(function () {
                    return a.payId = t
                }))
            }, a.updateDeliverTime = function (t) {
                t || (t = {}), y.updateOrderParams({deliver_time: t.value})
            }, a.invoiceRef = {}, a.toggleInvoice = function (t) {
                a.user.user_id && a.checkoutData.invoice.is_available && a.invoices.length && (a.showInvoice = "mouseover" === t.type)
            }, a.selectInvoice = function (t) {
                a.showInvoice = !1, a.invoiceRef.invoiceValue = t.name, y.updateOrderParams({invoice: t.name})
            }, a.updateInvoice = function (t) {
                y.updateOrderParams({invoice: t})
            }, a.deleteInvoice = function (t, e) {
                t.stopPropagation(), r.invoice["delete"]({
                    userId: a.user.user_id,
                    invoiceId: e.id
                }).$promise.then(function () {
                    angular.element(t.target).parent().remove(), a.showInvoice = !1
                })
            }, a.updateDescription = function (t) {
                y.updateOrderParams({description: t})
            };
            var b = function (e) {
                var a = t.defer();
                return e.is_mobile_valid ? (a.resolve(0), a.promise) : (o({
                    title: "你的手机没有绑定，是否绑定手机？",
                    showCancelButton: !0,
                    type: "warning"
                }, function (t) {
                    "confirm" === t ? a.resolve(1) : a.resolve(0)
                }), a.promise)
            };
            a.orderSubmit = function () {
                a.orderButton.text = "下单中...", a.orderButton.disabled = !0, t.all().then(function () {
                    return y.checkOrderParams()
                }).then(function () {
                    return a.user.user_id && b(a.user)
                }).then(function (t) {
                    return {params: y.updateOrderParams({bind_mobile: t}), mobile: y.addressData.phone || !1}
                }).then(function (t) {
                    var e = t.params, a = t.mobile;
                    return l.cartOrder(e, a)
                }).then(function () {
                    a.user.fetch(), v.clearCart()
                })["catch"](function (t) {
                    a.orderButton.text = "确认下单", a.orderButton.disabled = !1, "NO_ADDRESS" === t && o("下单出错", "请添加您的收货地址", "warning"), "ADDRESS_UNVALID" === t && o("下单出错", "系统无法识别您的地址，请修改地址", "warning"), "ADDRESS_IS_TOO_FAR" === t && o({
                        title: "所选地址超出商家配送范围",
                        message: "你选择的地址超出<b>" + y.rstInfo.name + "</b>的配送范围",
                        type: "warning",
                        confirmButtonText: "换个商家下单",
                        showCancelButton: !0,
                        cancelButtonText: "重新选择地址"
                    }, function (t) {
                        "confirm" === t && (i.url("/place/" + y.addressData.st_geohash), a.$apply()), "cancel" === t && window.scroll(0, 0)
                    }), "NOT_SELECT_TIME" === t && o("下单出错", "请选择送达时间", "warning")
                })
            }
        }]
    }
}, function (t, e, a) {
    var n = "/entry/main/checkout/checkout.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(n, '<div checkout-guide guide=guide></div><div class="container clearfix"><div ng-if=loading loading content=正在查询购物车...></div><div ng-if="!loading && nofood" nodatatip content="你的购物车是空的，去<a href=\'/place\'>下单</a>吧"></div><div ng-if="!loading && !nofood" class=checkout-cart checkout-cart=cart></div><div ng-if="!loading && !nofood" class=checkout-content><div class=checkout-select checkout-address address-list=addressList address=address isbaisheng=isBaishengRst></div><div class=checkout-select><h2 class=checkout-title>付款方式<span class="color-tip checkout-pay-tip">推荐使用在线支付，不用找零，优惠更多</span></h2><ul class=clearfix><li class=checkout-pay ng-repeat="pay in payList" ng-click="selectPay(pay.id, pay.disabled)" ng-class="{active: payId === pay.id, disabled: pay.disabled}" tooltip="{{pay.disabled ? pay.disabledText : \'\'}}"><p ng-bind=pay.title></p><p class=color-mute ng-bind=pay.tip></p></li></ul></div><div class=checkout-select><h2 class=checkout-title>选择优惠</h2><p class=checkout-info><span class=checkout-infolabel>使用红包</span> <span class=color-mute>无可用红包<em class=color-stress ng-if=checkout.hongbaoCount>（你有<em ng-bind=checkout.hongbaoCount></em>个手机端专用红包，下载app立即使用）</em></span></p><p class=checkout-info><span class=checkout-infolabel>使用优惠券</span> <span class=color-mute>网站不支持<em class=color-stress>（仅手机客户端可用）</em></span></p></div><div class=checkout-select><h2 class=checkout-title>其他信息</h2><div class=checkout-info><span class=checkout-infolabel>配送方式</span> <span>本订单由<a ng-bind="\' [\' + delivery + \'] \'"></a>提供配送</span></div><div class=checkout-info ng-show=showDeliverTime><span class=checkout-infolabel>送达时间</span><div formselect data=bookTimes choosed=time selectfn=updateDeliverTime></div></div><div class=checkout-info><span class=checkout-infolabel>发票信息</span> <span class=checkout-invoice ng-mouseenter=toggleInvoice($event) ng-mouseleave=toggleInvoice($event)><input class=checkout-input placeholder={{checkoutData.invoice.status_text}} ng-disabled=!checkoutData.invoice.is_available ng-model=invoiceRef.invoiceValue ng-change=updateInvoice(invoiceRef.invoiceValue)><ul class=checkout-invoice-list ng-show=showInvoice><li ng-repeat="item in invoices" ng-click=selectInvoice(item)>{{item.name}} <i class=checkout-invoice-delete ng-click="deleteInvoice($event, item)">x</i></li></ul></span></div><div class=checkout-info><span class=checkout-infolabel>订单备注</span> <span><input class=checkout-input ng-model=note ng-change=updateDescription(note)></span></div></div><div><button quicksubmit-trigger submit-visable=checkout.submitVisable class="btn-stress btn-lg" ng-disabled=orderButton.disabled ng-bind=orderButton.text ng-click=orderSubmit()>确认下单</button><div class=checkout-dapp><p class=checkout-dapp-tip>扫码下载APP<br>APP下单立享优惠</p><i class="icon-qrcode checkout-dapp-qrcode"></i> <i class="icon-uniE029 checkout-dapp-arrow"></i> <img src=' + a(112) + ' alt="扫一扫下载饿了么手机 App"></div></div></div></div><div class=checkout-quicksubmit ng-hide="checkout.submitVisable || nofood"><div class=container><span class=quick-text>应付金额 <span class=yen>&yen;</span><span class=total ng-bind=cartView.vm.total></span></span> <button class="btn-stress btn-lg" ng-disabled=orderButton.disabled ng-bind=orderButton.text ng-click=orderSubmit()>确认下单</button></div></div>')
    }]), t.exports = n
}, function (t, e) {
}, , , , function (t, e, a) {
    "use strict";
    a(370);
    var n = a(372);
    t.exports = ["$q", "$rootScope", "$http", "$templateCache", "$compile", "Popup", "FormModel", function (t, e, a, i, r, s, o) {
        var c = e.$new(), l = function (t) {
            return s.extend({
                defaults: {modal: !0, animation: !1, target: "center", updatePositionOnResize: !0},
                render: function () {
                    return r(t)(c)[0]
                }
            })
        };
        return function (e) {
            return a.get(n, {cache: i}).then(function (a) {
                var n = t.defer(), i = l(a.data), r = new i, s = e.response, u = {
                    mobile_sms: "sms",
                    mobile_sms_review: "sms",
                    mobile_voice_first: "audio",
                    mobile_voice_review: "audio",
                    mobile_login: "sms",
                    mobile_register: "audio"
                }, d = u[s.validation_type];
                switch (s.validation_type) {
                    case"mobile_register":
                        c.topTip = "为了保证你的资金安全，我们需要验证你的手机", c.bottomTip = "验证成功后，将自动为你创建饿了么账户并完成下单";
                        break;
                    case"mobile_login":
                        c.topTip = "你的手机号已注册过饿了么账户，为了保证你的资金安全，我们需要验证你的手机", c.bottomTip = "验证成功后，将自动登录你的饿了么账户并完成下单";
                        break;
                    default:
                        c.topTip = "为了保证你的资金安全，我们需要验证你的手机", c.bottomTip = "验证成功后，将完成下单"
                }
                return r.show(), c.closeModal = function () {
                    r.hide(), n.reject("USER_CANCEL")
                }, c.link = {
                    origin: {labelName: "你的手机号", content: e.mobile},
                    verify: {
                        type: "mobile",
                        startCount: d,
                        startVerify: "audio" === d,
                        link: o({
                            $validators: {
                                validate_code: [{
                                    type: "required",
                                    hintMessage: "验证码是必填项",
                                    errorMessage: "请输入手机验证码",
                                    method: "blur"
                                }]
                            },
                            mobile: e.mobile,
                            api: e.params.api,
                            apiParams: e.params.apiParams,
                            version: e.version,
                            scene: e.scene,
                            autoSend: e.autoSend,
                            apiExtra: function (t) {
                                return "audio" === t.type ? angular.extend(t, {type: "voice"}) : t
                            }
                        })
                    },
                    submitText: "下一步",
                    submit: function () {
                        var t = c.link.verify.link;
                        t.$validate() && (r.hide(), n.resolve({
                            validation_code: t.validate_code,
                            validation_token: t.validate_token || s.validation_token
                        }))
                    }
                }, n.promise
            })
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/checkout/_block/checkout-verifymobile/checkout-verifymobile.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=checkoutverify-modal><a href=javascript: class="modalclose icon-close" ng-click=closeModal()></a><h5>手机验证</h5><p class=formtip-top ng-bind=topTip></p><div security-verify-form link=link></div><p class=formtip-bottom ng-bind=bottomTip></p></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    a(374);
    var n = a(376);
    t.exports = ["$q", "$rootScope", "$http", "$templateCache", "$compile", "Popup", "FormModel", "Zero", "notifyServerError", function (t, e, a, i, r, s, o, c, l) {
        var u = e.$new(), d = function (t) {
            return s.extend({
                defaults: {modal: !0, animation: !1, target: "center", updatePositionOnResize: !0},
                render: function () {
                    return r(t)(u)[0]
                }
            })
        };
        return function (e, r) {
            return a.get(n, {cache: i}).then(function (e) {
                var a = t.defer(), n = d(e.data), i = new n;
                return i.show(), u.mobile = r, u.formLink = o({
                    $validators: {
                        new_password: {
                            type: "length",
                            min: 6,
                            max: 20,
                            errorMessage: "密码需要是字母或数字，最小6位，最大20位",
                            method: "blur"
                        }
                    }
                }), u.closeModal = function () {
                    i.hide(), a.resolve("USER_CANCEL")
                }, u.submit = function () {
                    return u.formLink.$validate() ? c.profile.put({
                        action: "password",
                        type: "user_id",
                        new_password: u.formLink.new_password
                    }).$promise.then(function () {
                        i.hide(), a.resolve("SUCCESS")
                    })["catch"](function (t) {
                        return t.data && l(t, "设置密码失败")
                    }) : void 0
                }, a.promise
            })
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/checkout/_block/checkout-setpassword/checkout-setpassword.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class="checkoutverify-modal checkoutpassword-modal"><a href=javascript: class="modalclose icon-close" ng-click=closeModal()></a><h5>注册并下单</h5><p class=formtip-top>你已经成功注册饿了么，之后可使用你验证过的手机号码登录饿了么</p><form class=security-service ng-submit=submit() novalidate><div ng-if=!firstSet form-field label=手机号码 class=field-default><span class="field-default-value default-mobile" ng-bind=mobile></span></div><div form-field label=登录密码 model=formLink property=new_password><input type=password name=new_password ng-model=formLink.new_password></div><div form-field class=form-group><button type=submit class="btn-primary btn-lg">设置密码并完成下单</button></div><div class=passwordmodal-cancelset><a href=javascript: ng-click=closeModal()>稍后设置密码，先下单</a></div></form></div>')
    }]), t.exports = a
}, function (t, e) {
    "use strict";
    function a(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    var n = function () {
        function t(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, a, n) {
            return a && t(e.prototype, a), n && t(e, n), e
        }
    }();
    t.exports = ["$q", "$location", "Zero", "checkoutMobileVerify", "checkoutSetPassword", "MessageBox", "notifyServerError", "Loading", function (t, e, i, r, s, o, c, l) {
        var u = function g(e) {
            return r(e).then(function (t) {
                return i.cartOrder.post(angular.extend({}, e.params, t)).$promise
            }).then(function (t) {
                return angular.extend(t, {validation_type: e.response.validation_type})
            })["catch"](function (a) {
                if (a.data && ("INVALID_VALIDATE_CODE" === a.data.name || "INVALID_VERIFY_CODE" === a.data.name)) {
                    var n = function () {
                        var a = t.defer();
                        return o({title: "验证码错误", message: "请重新填写验证码", type: "error"}, function () {
                            return a.resolve(g(e))
                        }), {v: a.promise}
                    }();
                    if ("object" == typeof n)return n.v
                }
                return t.reject(a)
            })
        }, d = function (t, e) {
            return s(t.user_id, e).then(function () {
                return t
            })
        }, p = function (a, n) {
            return t.all().then(function () {
                return i.cartOrder.post(a).$promise
            }).then(function (t) {
                return t.need_validation ? (angular.extend(a, {
                    api: i.cart.post,
                    apiParams: {action: "verify_code", cartId: a.cartId, sig: a.sig}
                }), u({params: a, response: t, mobile: n})) : t
            }).then(function (t) {
                return "mobile_register" === t.validation_type ? d(t, n) : t
            }).then(function (t) {
                return e.url("/order/" + t.unique_id + "/" + (a.paymethod_id ? "pay" : "success/offline"))
            })["catch"](function (e) {
                return "FINISHED" !== e && e.data ? (c(e, "下单出错"), t.reject("CATCHED")) : t.reject(e)
            })
        }, h = function (e) {
            return i.food.query({
                restaurant_id: e.restaurant_id,
                type: "restaurant_garnish"
            }).$promise.then(function (a) {
                if (!a.length)return t.reject("EMPTY");
                var n = e.$getFlatList();
                return a.map(function (t) {
                    return angular.extend({quantity: e.getCountById(t.id, n)}, t)
                })
            })["catch"](function (e) {
                return "EMPTY" === e ? (o("此餐厅没有配菜", "", "warning"), t.reject("CATCHED")) : void 0
            })
        }, m = function (t, e) {
            return !t.st_geohash || 1 === t.poi_type && e ? (t.needupgrade = !0, !0) : !1
        }, f = function () {
            function e() {
                a(this, e)
            }

            return n(e, [{
                key: "init", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], n = arguments.length <= 3 || void 0 === arguments[3] ? -1 : arguments[3], i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4];
                    this.orderParamsData = angular.extend({
                        userId: "anonymous",
                        cartId: e.id,
                        come_from: "web",
                        sig: e.sig,
                        paymethod_id: n,
                        description: "",
                        deliver_time: "",
                        invoice: "",
                        bind_mobile: ""
                    }, t), this.cartData = e, this.addressData = a || {}, this.paymethod_id = n, this.rstInfo = i, this.invoiceAvailable = t.invoiceAvailable
                }
            }, {
                key: "updateOrderParams", value: function (t) {
                    return angular.extend(this.orderParamsData, t)
                }
            }, {
                key: "updateCart", value: function (t) {
                    return this.post({entities: t})
                }
            }, {
                key: "updateAddress", value: function (t) {
                    var e = this;
                    return this.post({address_id: t}).then(function () {
                        e.updateOrderParams({address_id: t})
                    })
                }
            }, {
                key: "updatePaymethod", value: function (t) {
                    return this.post({paymethod_id: t})
                }
            }, {
                key: "post", value: function (e) {
                    var a = this, n = (new l).init("加载中...");
                    return n.show(), i.cart.post(angular.extend({
                        action: "checkout",
                        come_from: "web",
                        geohash: localStorage.getItem("GEOHASH"),
                        cartId: this.cartData.cartId,
                        sig: this.cartData.sig,
                        address_id: e.address_id || this.orderParamsData.address_id,
                        entities: e.entities || this.cartData.group,
                        paymethod_id: e.paymethod_id || this.paymethod_id
                    }, e)).$promise.then(function (t) {
                            var e = t.cart, i = t.sig, r = t.current_address, s = t.payments, o = t.invoice;
                            return n.hide(), a.cartData = e, a.addressData = r, a.paymethod_id = s.filter(function (t) {
                                return 1 === t.select_state
                            })[0].id, a.invoiceAvailable(o), a.updateOrderParams({
                                cartId: e.id,
                                sig: i,
                                paymethod_id: a.paymethod_id
                            }), {cartData: e, current_address: r}
                        })["catch"](function (e) {
                        return c(e), n.hide(), t.reject({name: "SYSTEM_ERROR"})
                    })
                }
            }, {
                key: "checkOrderParams", value: function () {
                    var e = this.addressData || {};
                    return e.id ? e.st_geohash ? this.rstInfo.only_use_poi && 1 === e.poi_type ? t.reject("ADDRESS_UNVALID") : this.cartData.is_address_too_far ? t.reject("ADDRESS_IS_TOO_FAR") : -1 === this.orderParamsData.deliver_time ? t.reject("NOT_SELECT_TIME") : this.orderParamsData : t.reject("ADDRESS_UNVALID") : t.reject("NO_ADDRESS")
                }
            }]), e
        }();
        return {cartOrder: p, getGarnishList: h, isAddressUnvalid: m, checker: new f}
    }]
}, function (t, e) {
    "use strict";
    function a(t) {
        if (Array.isArray(t)) {
            for (var e = 0, a = Array(t.length); e < t.length; e++)a[e] = t[e];
            return a
        }
        return Array.from(t)
    }

    function n(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    var i = function () {
        function t(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, a, n) {
            return a && t(e.prototype, a), n && t(e, n), e
        }
    }();
    t.exports = function () {
        return new (function () {
            function t() {
                n(this, t), this.orderButton = {}, this.nofood = {}
            }

            return i(t, [{
                key: "init", value: function (t, e, a) {
                    return this.vm = this.$sort(t), this.pieces = this.$count(t), this.$localCart = e, this.$checker = a, this.updateOrderButton(t), this
                }
            }, {
                key: "$sort", value: function (t) {
                    return t.group = t.group.map(function (t) {
                        return t.sort(function (t, e) {
                            return e.id - t.id
                        })
                    }), t
                }
            }, {
                key: "$count", value: function (t) {
                    var e;
                    return (e = []).concat.apply(e, a(t.group)).reduce(function (t, e) {
                        return t + e.quantity
                    }, 0)
                }
            }, {
                key: "add", value: function (t) {
                    return this.updateVM(t, t.quantity + 1)
                }
            }, {
                key: "sub", value: function (t) {
                    return this.updateVM(t, t.quantity - 1)
                }
            }, {
                key: "update", value: function (t) {
                    return t.quantity ? this.updateVM(t, t.quantity) : void 0
                }
            }, {
                key: "blur", value: function (t) {
                    return t.quantity = 1, this.updateVM(t, t.quantity)
                }
            }, {
                key: "updateOrderButton", value: function (t) {
                    var e, n = (e = []).concat.apply(e, a(t.group)).reduce(function (t, e) {
                        return t + e.quantity * e.price
                    }, 0), i = (t.restaurant_minimum_order_amount - n).toFixed(2), r = this.$localCart.getOrderState(!this.pieces, i, t.restaurant_status), s = r.name, o = r.text, c = r.disabled;
                    "CAN_ORDER" === s && (o = "确认下单"), angular.extend(this.orderButton, {text: o, disabled: c})
                }
            }, {
                key: "updateVM", value: function (t, e) {
                    var a = this;
                    if (!this.disabledState) {
                        var n = parseInt(e, 10);
                        return t.quantity = isNaN(n) ? 1 : n, this.disabledState = !0, this.orderButton.disabled = !0, this.vm.group = this.vm.group.map(function (t) {
                            return t.filter(function (t) {
                                return t.quantity > 0
                            })
                        }).filter(function (t) {
                            return t.length > 0
                        }), this.vm.group.length ? this.$checker.updateCart(this.vm.group).then(function (t) {
                            var e = t.cartData;
                            a.$localCart.updateFromCartData(e), a.disabledState = !1, a.vm = a.$sort(e), a.pieces = a.$count(e), a.updateOrderButton(e)
                        })["catch"](function () {
                            a.disabledState = !1
                        }) : (this.$localCart.clearCart(), angular.extend(this.nofood, {nofood: !0}))
                    }
                }
            }]), t
        }())
    }
}, function (t, e, a) {
    "use strict";
    a(380);
    var n = a(384);
    t.exports = ["LocalCart", "checkoutCartView", "checkoutService", function (t, e, a) {
        return {
            templateUrl: n, scope: {cartData: "=checkoutCart"}, controller: ["$scope", function (n) {
                var i = new t, r = a.checker;
                n.cart = e.init(n.cartData, i, r)
            }]
        }
    }]
}, function (t, e) {
}, , , , function (t, e) {
    var a = "/entry/main/checkout/_block/checkout-cart/checkout-cart.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=checkoutcart-container><div class=checkoutcart-title><h2>订单详情</h2><a ng-href=/shop/{{$root.layoutState.rstUrl}}>&lt; 返回商家修改</a></div><div class="checkoutcart-tablerow tablehead"><div class="cell itemname">商品</div><div class="cell itemquantity">份数</div><div class="cell itemtotal">小计（元）</div></div><dl ng-if=basket.length ng-repeat="basket in cart.vm.group" class=checkoutcart-group><dt ng-bind="$index + 1 + \'号购物车\'" class=checkoutcart-grouptitle><dd ng-repeat="item in basket"><div class=checkoutcart-tablerow><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"><button ng-click=cart.sub(item)>-</button><input ng-model=item.quantity ng-change=cart.update(item) ng-blur=cart.blur(item)><button ng-click=cart.add(item)>+</button></div><div class="cell itemtotal" ng-bind="\'&yen;\' + (item.price * item.quantity | number:2)"></div></div></dl><ul ng-if="cart.vm.extra || cart.vm.records"><li ng-repeat="item in cart.vm.extra" class="checkoutcart-tablerow extra"><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"></div><div class="cell itemtotal" ng-class="{minus: item.price < 0}" ng-bind="\'&yen;\' + (item.price | number:2)"></div></li><li ng-repeat="item in cart.vm.records"><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"></div><div class="cell itemtotal" ng-class="{minus: item.amount < 0}" ng-bind="\'&yen;\' + (item.amount | number:2)"></div></li></ul><div class="checkoutcart-total color-stress">&yen;<span class=num ng-bind="cart.vm.total | number: 2"></span></div><div class=checkoutcart-totalextra>共 <span ng-bind=cart.pieces></span> 份商品<span ng-if=cart.vm.benefit>，已优惠 <span ng-bind=""></span> 元<span></span></span></div></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    a(386);
    var n = a(388);
    t.exports = ["$q", "$rootScope", "$http", "$templateCache", "$compile", "Popup", "checkoutService", "notifyServerError", function (t, e, a, i, r, s, o, c) {
        var l = function (t) {
            return a.get(n, {cache: i}).then(function (e) {
                var a = s.extend({
                    defaults: {modal: !0, animation: !1, target: "center", updatePositionOnResize: !0},
                    render: function () {
                        return r(e.data)(t)[0]
                    }
                });
                return new a
            })
        };
        return {
            scope: {cart: "="}, link: function (t, e) {
                return l(t).then(function (a) {
                    var n = {}, i = void 0;
                    e.on("click", function () {
                        a.dom = null, a.show(), i = angular.element(a.dom.querySelector("#cartmini")), o.getGarnishList(t.cart).then(function (e) {
                            return t.garnishList = e
                        })["catch"](function (t) {
                            return "CATCHED" === t && a.hide()
                        })
                    }), t.showCartMini = function (t, e) {
                        var a = e.target.parentNode;
                        n = t, i.css({display: "block"}), a.appendChild(i[0])
                    }, t.hideCartMini = function () {
                        return i.css({display: "none"})
                    }, t.addGarnishTo = function (e) {
                        t.hideCartMini(), o.addGarnish(n, e).then(function () {
                            return n.quantity++
                        })["catch"](function (t) {
                            return c(t, "配菜添加失败！")
                        })
                    }, t.closeModal = function () {
                        t.hideCartMini(), a.hide()
                    }
                })
            }
        }
    }]
}, function (t, e) {
}, , function (t, e) {
    var a = "/entry/main/checkout/_block/checkout-cartgarnish/checkout-cartgarnish.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=checkoutgarnish-modal><a class="icon-close modalclose" href=javascript: ng-click=closeModal()></a><h4>添加配菜</h4><div class=checkoutgarnish-listbox><ul><li class=checkoutgarnish-row ng-repeat="garnish in garnishList"><span class="cell name" ng-bind=garnish.name></span> <span class="cell price"><span class="cellitem yen">&yen;</span><span class="cellitem num" ng-bind=garnish.price></span> <span ng-if=garnish.quantity><span class="cellitem x">x</span><span ng-bind=garnish.quantity></span></span></span> <span class="cell action"><button class="cellitem button" type=button ng-click="showCartMini(garnish, $event)">添加到</button></span></li></ul><div class=checkoutgarnish-cart id=cartmini><dl class=checkoutgarnish-cartgroup ng-repeat="basket in cart.group"><dt ng-bind="$index + 1 + \'号购物车\'"><dd class="cell itemname" ng-repeat="item in basket" ng-bind=item.name title={{item.name}} ng-click=addGarnishTo(item)></dl><div class="checkoutgarnish-arrow icon-profile-right-arrow"></div></div></div><button class="modalconfirm btn-lg" type=button ng-click=closeModal()>选好了</button></div>')
    }]), t.exports = a
}, function (t, e, a) {
    "use strict";
    var n = a(390);
    a(391);
    var i = function () {
        return {
            restrict: "A", replace: !0, templateUrl: n, scope: {guide: "="}, link: function (t) {
                t.a = 1
            }
        }
    };
    t.exports = i
}, function (t, e) {
    var a = "/entry/main/checkout/_block/checkout-guide/checkout-guide.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div class=checkoutguide><div class=container><a class="checkoutguide-logo icon-logo" href="/"></a> <span class=checkoutguide-text ng-bind=guide.text></span><div class="checkoutguide-content step{{guide.step}}" ng-if=guide.step><span class=checkoutguide-item ng-class="{active: guide.step >= 1}">选择商品</span> <span class=checkoutguide-item ng-class="{active: guide.step >= 2}">确认订单信息</span> <span class=checkoutguide-item ng-class="{active: guide.step >= 3}">成功提交订单</span><p class=checkoutguide-line><span class="line line1"></span> <span class="line line2"></span> <span class="line line3"></span> <span class="line line4"></span></p></div></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(394);
    a(395);
    var i = ["$rootScope", "Address", "MessageBox", "checkoutService", function (t, e, a, i) {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: n,
            scope: {addressList: "=", address: "=", isbaisheng: "="},
            controller: ["$scope", function (n) {
                var r = i.checker, s = i.isAddressUnvalid;
                n.$$postDigest(function () {
                    e.init({userId: t.user.user_id, geohash: t.geohash, poiOnly: !0}), e.get().then(function (t) {
                        n.addressList = t, n.address ? r.updateOrderParams({address_id: n.address.id}) : n.noInitAddress = !0
                    })
                }), n.selectAddress = function (t, e) {
                    s(e, n.isbaisheng) || "click" !== t.type || n.address && n.address.id === e.id || (n.address = e, r.updateAddress(n.address.id))
                }, n.addAddress = function () {
                    e.add(function (t) {
                        n.address = t, r.updateAddress(n.address.id), n.addressList.unshift(t)
                    })
                }, n.removeAddress = function (t, i) {
                    t.stopPropagation(), a({title: "确定删除送货地址？", type: "warning", showCancelButton: !0}, function (t) {
                        "confirm" === t && e.remove(i).then(function () {
                            n.addressList.splice(n.addressList.indexOf(i), 1), n.address.id === i.id && (n.address = n.addressList[0], n.address ? r.updateAddress(n.address.id) : r.updateAddress(null))
                        })
                    })
                }, n.editAddress = function (t, a) {
                    t.stopPropagation(), e.edit(a, function (t) {
                        a.st_geohash = t.st_geohash, n.address = angular.extend(a, t), r.updateAddress(n.address.id)
                    })
                }
            }]
        }
    }];
    t.exports = i
}, function (t, e) {
    var a = "/entry/main/checkout/_block/checkout-address/checkout-address.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div><h2>收货地址 <a ng-show=addressList.length class=checkout-addaddress href=javascript: ng-click=addAddress()>添加新地址</a></h2><a class=checkout-noaddress ng-if=!addressList.length href=javascript: ng-click=addAddress()>+ 添加新地址</a><ul ng-hide=!addressList.length class=checkout-address-list ng-class="{showmore: showMoreAddress, showfirst: noInitAddress}"><li class=checkout-address ng-repeat="item in addressList" ng-click="selectAddress($event, item)" ng-class="{active: address.id === item.id}" ng-mouseenter="selectAddress($event, item)"><i class="checkout-address-icon icon-location-line"></i><div class=checkout-address-info><p ng-bind="item.name + [\' \', \' 先生 \', \' 女士 \'][item.sex] + item.phone"></p><p class=color-weak ng-bind="item.address + item.address_detail"></p></div><div class=checkout-address-edit><a href=javascript: ng-click="editAddress($event, item)">修改</a> <a href=javascript: ng-click="removeAddress($event, item)">×</a></div><p ng-if=!item.st_geohash ng-show=item.needupgrade class=checkout-address-needupgrade>为了提供更好的配送服务，需要你完善地址信息 <button class="btn-stress btn-sm" ng-click="editAddress($event, item)">升级地址</button></p><p ng-if="item.st_geohash && item.poi_type === 1 && isbaisheng" ng-show=item.needupgrade class=checkout-address-needupgrade>商家未能识别你的位置信息，你需要为商家提供准确的送货位置 <button class="btn-stress btn-sm" ng-click="editAddress($event, item)">升级地址</button></p></li><a class=checout-showmoreaddress href=javascript: ng-click="showMoreAddress = true" ng-show="!showMoreAddress && addressList.length > 1">显示更多地址<i class=icon-arrow-down></i></a> <a class=checout-showmoreaddress href=javascript: ng-click="showMoreAddress = false" ng-show="showMoreAddress && addressList.length > 1">收起<i class=icon-arrow-up></i></a></ul></div>')
    }]), t.exports = a
}, function (t, e) {
}, , function (t, e, a) {
    "use strict";
    var n = a(398);
    a(399);
    var i = ["$rootScope", "$scope", "$routeParams", "$location", "$filter", "$interval", "$q", "$http", "checkoutMobileVerify", "Zero", "notifyServerError", "FormModel", "Dialog", "MessageBox", function (t, e, a, n, i, r, s, o, c, l, u, d, p, h) {
        t.layoutState = {type: "checkout", hideSidebar: !0}, e.$on("$destroy", function () {
            return t.layoutState = {}
        }), e.guide = {text: "收银台"}, e.forgetUrl = t.ACCOUNTBASE + ("/forget?redirect_url=" + encodeURIComponent(location.href));
        var m = a.orderId, f = function (t) {
            var a = t[0];
            if (e.address = {
                    name: a.consignee,
                    phone: a.phone,
                    address: a.address
                }, -5 !== a.status_code && -3 !== a.status_code)return void(location.href = "/profile/order/id/" + m);
            void function () {
                var t = Date.parse(a.pay_expired_time), n = function o() {
                    var o = t - (new Date).getTime();
                    0 >= o && (r.cancel(s), location.href = "/profile/order/id/" + m), e.timeDown = i("date")(o, "mm:ss")
                };
                n();
                var s = r(n, 1e3)
            }();
            var n = t[1];
            e.payWay = n.web_online_paymethods.filter(function (t) {
                return t.is_selected
            })[0], e.payInfo = n, n.balance_paid_amount && (e.payInfo.balance_pay = n.balance_paid_amount > n.total ? n.total : n.balance_paid_amount)
        };
        e.user.$promise.then(function () {
            return s.all([l.order.get({
                userId: e.user.user_id,
                filter: m
            }).$promise, l.order.get({
                userId: e.user.user_id,
                filter: m,
                action: "payments",
                "extras[]": ["web_online_paymethods"],
                hongbao_action: 0
            }).$promise])
        }).then(function (t) {
            return f(t)
        })["catch"](function (t) {
            switch (t.data.name) {
                case"HTTP_NOT_FOUND":
                    n.url("/404");
                    break;
                case"HTTP_UNAUTHORIZED":
                    location.href = e.ACCOUNTBASE + ("/login?redirect_url=" + encodeURIComponent(location.href));
                    break;
                default:
                    u(t, "出错了")
            }
        }), e.selectPayWay = function (t) {
            return e.payWay = t
        }, e.pay = {};
        var g, v = function () {
            h({
                title: "请在打开的页面上完成付款",
                message: "付款完成前请不要关闭此窗口",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "已完成付款",
                cancelButtonText: "付款遇到问题",
                buttons: [{action: "reset", content: '<a class="payreset-btn" href="javascript:">返回选择其他支付方式 &gt;</a>'}]
            }, function (t) {
                "confirm" === t && (n.url("/order/" + m + "/success/online"), e.$apply()), "cancel" === t && window.open("/support/question/payment")
            })
        }, y = function () {
            return l.payRecord.get({userId: e.user.user_id, payId: e.payId}).$promise
        };
        e.$on("$destroy", function () {
            return r.cancel(g)
        });
        var b = function (t) {
            return r.cancel(g), e.payId = t.web.payrecord_id, t.is_completed ? n.url("/order/" + m + "/success/online") : void("tenpay" === e.payWay.icon_name ? (e.pay.wechatQrcode = {
                content: t.web.pay_url,
                width: 260,
                height: 260
            }, p.show("wechatPayDialog"), g = r(function () {
                y().then(function (t) {
                    2 === t.pay_status && (n.url("/order/" + m + "/success/online"), r.cancel(g))
                })
            }, 1e3)) : (window.open(t.web.pay_url), v()))
        }, _ = function (t) {
            var a = s.defer(), n = {
                come_from: "web",
                pay_company_id: e.payWay.company,
                pay_bank: e.payWay.bank,
                password: e.pay.password
            };
            t && (n.validation_token = t.validation_token, n.validation_code = t.validation_code);
            var i = new XMLHttpRequest, r = e.user.user_id;
            return i.open("post", "restapi/v1/users/" + r + "/orders/" + m + "/payments", !1), i.onreadystatechange = function () {
                if (4 === i.readyState && 200 === i.status)a.resolve({data: JSON.parse(i.responseText)}); else {
                    var t = JSON.parse(i.responseText);
                    "USER_AUTH_FAIL" === t.name && (t.message = "请输入正确的登录密码"), a.reject({data: t})
                }
            }, i.send(JSON.stringify(n)), a.promise
        };
        e.payment = function () {
            if (!e.payInfo.need_password || e.pay.password) {
                e.payInfo.paying = !0;
                var t = {
                    mobile: e.user.mobile,
                    params: {},
                    autoSend: !0,
                    version: "v2",
                    scene: "payment_limit",
                    response: {validation_type: "mobile_sms"}
                };
                s.all().then(function () {
                    return e.payInfo.payment_limit_need_validate && c(t)
                }).then(function (t) {
                    return _(t)
                }).then(function (t) {
                    e.payInfo.paying = !1, b(t.data)
                })["catch"](function (t) {
                    e.payInfo.paying = !1, u(t, "支付失败")
                })
            }
        }
    }];
    t.exports = {templateUrl: n, controller: i}
}, function (t, e) {
    var a = "/entry/main/checkout/pay/pay.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(a, '<div checkout-guide guide=guide></div><div class="pay-header container"><i class="icon-circle-check pay-header-icon"></i><div class=pay-header-info><h2>您的订单已提交成功！付款咯~</h2><span class=color-weak>送货至： <em ng-bind=address.name></em> <em ng-bind="address.phone | mobileMask"></em> <em class=pay-header-address ng-bind=address.address></em></span></div><span class=pay-header-money>应付总额：<em class="color-stress ui-arial">&yen;{{payInfo.total}}</em></span></div><form class="pay-main container" ng-submit=payment()><h2 class=pay-main-title>请选择以下支付方式 <span class="color-mute pay-timetip">剩余支付时间<em class=color-stress>{{timeDown}}</em>，逾期订单将自动取消</span></h2><div class=pay-type ng-if=payInfo.balance_pay><h3 class=pay-main-subtitle>余额支付<em class=color-mute>（使用饿了么账户余额支付）</em></h3><p class=ui-block-stress>饿了么可用余额<span class="pay-balance ui-arial" ng-bind="\'&yen;\' + (payInfo.balance | number:float)"></span> <span class="color-stress pay-balance-useup ui-arial">-&yen;{{payInfo.balance_pay}}</span></p></div><div class=pay-type ng-if=payInfo.online_payment_amount><h3 class=pay-main-subtitle>剩余<span class="color-stress ui-arial" ng-bind="\'&yen;\' + payInfo.online_payment_amount"></span>支付 <em>（请选择剩余金额的支付方式）</em></h3><ul class="pay-way clearfix" ng-click=selectPayWay><li class={{way.icon_name}} ng-repeat="way in payInfo.web_online_paymethods" ng-click=selectPayWay(way) ng-class="{active: payWay.name === way.name}" title=使用{{way.name}}支付></li></ul></div><div ng-if=payInfo.need_password><p>为保障饿了么账户资金安全，请验证登录密码才可以使用余额哦</p><div class=pay-password><span>登录密码</span> <input type=password ng-model=pay.password> <a ng-href={{forgetUrl}}>忘记密码？</a></div></div><button class="btn-stress btn-lg" ng-disabled="payInfo.paying || (payInfo.need_password && !pay.password)">确认支付</button></form><div dialog=wechatPayDialog class=wechatpay-dialog><h3 class=wechatpay-dialog-title>使用微信支付<span class=color-stress ui-arial>&yen;{{payInfo.online_payment_amount}}</span></h3><div content2qrcode config=pay.wechatQrcode class=wechat-qrcode></div><div class=wechatpay-dialog-tip><i class=icon-scan></i><p>请使用微信扫一扫<br>扫描二维码完成支付</p></div></div><div dialog=mobileVerify><div security-verify-form link=link></div></div>')
    }]), t.exports = a
}, function (t, e) {
}, , , , function (t, e, a) {
    "use strict";
    var n = a(404);
    a(405);
    var i = ["$rootScope", "$scope", "$routeParams", "$location", "$sce", "Zero", "notifyServerError", function (t, e, a, n, i, r, s) {
        t.layoutState = {type: "checkout", hideSidebar: !0}, e.$on("$destroy", function () {
            return t.layoutState = {}
        }), e.guide = {step: 3, text: "完成订单"}, e.loading = !0;
        var o = a.orderId, c = function (t) {
            var a = {};
            a.name = t.consignee, a.phone = t.phone, a.address = t.address, e.address = a, e.order = t, e.loading = !1, t.is_book ? e.leadTime = t.deliver_time : e.leadTime = (new Date).getTime() + 6e4 * t.restaurant.order_lead_time, t.is_online_paid && -1 !== [-5, -4, -3].indexOf(t.status_code) && (location.href = "profile/order/id/" + o)
        };
        e.user.$promise.then(function () {
            return r.order.get({userId: e.user.user_id, filter: o, "extras[]": ["restaurant"]}).$promise
        }).then(function (t) {
            return c(t)
        })["catch"](function (t) {
            switch (t.data.name) {
                case"HTTP_NOT_FOUND":
                    n.url("/404");
                    break;
                case"HTTP_UNAUTHORIZED":
                    location.href = e.ACCOUNTBASE + ("/login?redirect_url=" + encodeURIComponent(location.href));
                    break;
                default:
                    s(t, "出错了")
            }
        })
    }];
    t.exports = {templateUrl: n, controller: i}
}, function (t, e, a) {
    var n = "/entry/main/checkout/success/success.html";
    window.angular.module("ng").run(["$templateCache", function (t) {
        t.put(n, '<div checkout-guide guide=guide></div><div loading ng-if=loading></div><div class="ordersuccess pay-header container" ng-show=!loading><i class="icon-circle-check pay-header-icon"></i><div class=pay-header-info><h2 ng-if=order.is_online_paid>订单已成功提交并付款，请耐心等待你的外卖</h2><h2 ng-if=!order.is_online_paid>订单已成功提交，请耐心等待你的外卖</h2><span class=color-weak>送货至： <em ng-bind=address.name></em> <em ng-bind="address.phone | mobileMask"></em> <em class=pay-header-address ng-bind=address.address></em></span><div class=ordersuccess-tip><p>享受完美食后评价订单还能获得积分哦~ 查看<a href=/profile/points hardjump>我的积分</a></p><p>预测送餐时间为<em class=color-stress ng-bind="leadTime | date:\'HH:mm\'"></em>，请保持手机畅通</p></div><div class=ordersuccess-action><a class="btn-primary btn-lg" hardjump ng-href=/profile/order/id/{{order.unique_id}}>订单详情</a> <a class=inherit hardjump href=/profile/order>我的订单</a></div></div><div class=ordersuccess-aside><img src=' + a(112) + " alt=下载饿了么APP><p class=color-mute>使用手机APP下单，优惠更多</p></div></div>")
    }]), t.exports = n
}, function (t, e) {
}]);