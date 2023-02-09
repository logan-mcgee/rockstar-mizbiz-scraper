/*! For license information please see e8073e1cadcabfbcf1a7.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [666], {
    1700: e => {
      var t, n, i = e.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function r() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
          t = s
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
          n = r
        }
      }();
      var a, l = [],
        c = !1,
        d = -1;

      function u() {
        c && a && (c = !1, a.length ? l = a.concat(l) : d = -1, l.length && p())
      }

      function p() {
        if (!c) {
          var e = o(u);
          c = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++d < t;) a && a[d].run();
            d = -1, t = l.length
          }
          a = null, c = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function f() {}
      i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || c || o(p)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
        return []
      }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    3930: (e, t, n) => {
      "use strict";
      n.d(t, {
        K: () => i,
        k: () => s
      });
      var i = function() {},
        s = function() {}
    },
    5670: (e, t, n) => {
      "use strict";
      var i = n(822),
        s = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var i, l = {},
          c = null,
          d = null;
        for (i in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) r.call(t, i) && !a.hasOwnProperty(i) && (l[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === l[i] && (l[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: l,
          _owner: o.current
        }
      }
      t.jsx = l, t.jsxs = l
    },
    5668: (e, t, n) => {
      "use strict";
      e.exports = n(5670)
    },
    9681: (e, t, n) => {
      "use strict";
      n.d(t, {
        S1: () => s
      });
      var i = n(822);
      const s = function(e, t) {
        let {
          threshold: n = 0,
          root: s = null,
          rootMargin: r = "0%",
          freezeOnceVisible: o = !1
        } = t;
        const [a, l] = (0, i.useState)(), c = (null == a ? void 0 : a.isIntersecting) && o, d = e => {
          let [t] = e;
          l(t)
        };
        return (0, i.useEffect)((() => {
          const t = null == e ? void 0 : e.current;
          if (!window.IntersectionObserver || c || !t) return;
          const i = new IntersectionObserver(d, {
            threshold: n,
            root: s,
            rootMargin: r
          });
          return i.observe(t), () => i.disconnect()
        }), [null == e ? void 0 : e.current, JSON.stringify(n), s, r, c]), a
      };
      "undefined" != typeof window ? i.useLayoutEffect : i.useEffect
    },
    1720: (e, t, n) => {
      "use strict";
      n.d(t, {
        tq: () => w,
        o5: () => S
      });
      var i = n(822),
        s = n(599);

      function r(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function o(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : o(e[n], t[n]) : e[n] = t[n]
        }))
      }

      function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && void 0 === e.pagination.el
      }

      function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar && void 0 === e.scrollbar.el
      }

      function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          n = [];
        return t.forEach((e => {
          n.indexOf(e) < 0 && n.push(e)
        })), n.join(" ")
      }
      const u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
        p = (e, t) => {
          let n = t.slidesPerView;
          if (t.breakpoints) {
            const e = s.ZP.prototype.getBreakpoint(t.breakpoints),
              i = e in t.breakpoints ? t.breakpoints[e] : void 0;
            i && i.slidesPerView && (n = i.slidesPerView)
          }
          let i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
          return i += t.loopAdditionalSlides, i > e.length && t.loopedSlidesLimit && (i = e.length), i
        };

      function h(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function f(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          h(e) ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function m(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (h(e)) t.push(e);
          else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = f(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : n["container-end"].push(e)
          } else n["container-end"].push(e)
        })), {
          slides: t,
          slots: n
        }
      }

      function g(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const v = (0, i.createContext)(null),
        y = (0, i.createContext)(null);

      function x() {
        return x = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }, x.apply(this, arguments)
      }
      const w = (0, i.forwardRef)((function(e, t) {
        let {
          className: n,
          tag: h = "div",
          wrapperTag: f = "div",
          children: v,
          onSwiper: w,
          ...b
        } = void 0 === e ? {} : e, S = !1;
        const [C, T] = (0, i.useState)("swiper"), [E, P] = (0, i.useState)(null), [M, A] = (0, i.useState)(!1), k = (0, i.useRef)(!1), L = (0, i.useRef)(null), O = (0, i.useRef)(null), V = (0, i.useRef)(null), $ = (0, i.useRef)(null), D = (0, i.useRef)(null), B = (0, i.useRef)(null), I = (0, i.useRef)(null), R = (0, i.useRef)(null), {
          params: j,
          passedParams: z,
          rest: _,
          events: F
        } = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = {
              on: {}
            },
            i = {},
            a = {};
          o(n, s.ZP.defaults), o(n, s.ZP.extendedDefaults), n._emitClasses = !0, n.init = !1;
          const l = {},
            c = u.map((e => e.replace(/_/, ""))),
            d = Object.assign({}, e);
          return Object.keys(d).forEach((s => {
            void 0 !== e[s] && (c.indexOf(s) >= 0 ? r(e[s]) ? (n[s] = {}, a[s] = {}, o(n[s], e[s]), o(a[s], e[s])) : (n[s] = e[s], a[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" == typeof e[s] ? t ? i[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : l[s] = e[s])
          })), ["navigation", "pagination", "scrollbar"].forEach((e => {
            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
          })), {
            params: n,
            passedParams: a,
            rest: l,
            events: i
          }
        }(b), {
          slides: N,
          slots: G
        } = m(v), H = () => {
          A(!M)
        };
        Object.assign(j.on, {
          _containerClasses(e, t) {
            T(t)
          }
        });
        const W = () => {
          if (Object.assign(j.on, F), S = !0, O.current = new s.ZP(j), O.current.loopCreate = () => {}, O.current.loopDestroy = () => {}, j.loop && (O.current.loopedSlides = p(N, j)), O.current.virtual && O.current.params.virtual.enabled) {
            O.current.virtual.slides = N;
            const e = {
              cache: !1,
              slides: N,
              renderExternal: P,
              renderExternalUpdate: !1
            };
            o(O.current.params.virtual, e), o(O.current.originalParams.virtual, e)
          }
        };
        return L.current || W(), O.current && O.current.on("_beforeBreakpoint", H), (0, i.useEffect)((() => () => {
          O.current && O.current.off("_beforeBreakpoint", H)
        })), (0, i.useEffect)((() => {
          !k.current && O.current && (O.current.emitSlidesClasses(), k.current = !0)
        })), g((() => {
          if (t && (t.current = L.current), L.current) return O.current.destroyed && W(),
            function(e, t) {
              let {
                el: n,
                nextEl: i,
                prevEl: s,
                paginationEl: r,
                scrollbarEl: o,
                swiper: d
              } = e;
              a(t) && i && s && (d.params.navigation.nextEl = i, d.originalParams.navigation.nextEl = i, d.params.navigation.prevEl = s, d.originalParams.navigation.prevEl = s), l(t) && r && (d.params.pagination.el = r, d.originalParams.pagination.el = r), c(t) && o && (d.params.scrollbar.el = o, d.originalParams.scrollbar.el = o), d.init(n)
            }({
              el: L.current,
              nextEl: D.current,
              prevEl: B.current,
              paginationEl: I.current,
              scrollbarEl: R.current,
              swiper: O.current
            }, j), w && w(O.current), () => {
              O.current && !O.current.destroyed && O.current.destroy(!0, !1)
            }
        }), []), g((() => {
          !S && F && O.current && Object.keys(F).forEach((e => {
            O.current.on(e, F[e])
          }));
          const e = function(e, t, n, i, s) {
            const o = [];
            if (!t) return o;
            const a = e => {
              o.indexOf(e) < 0 && o.push(e)
            };
            if (n && i) {
              const e = i.map(s),
                t = n.map(s);
              e.join("") !== t.join("") && a("children"), i.length !== n.length && a("children")
            }
            return u.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
              if (n in e && n in t)
                if (r(e[n]) && r(t[n])) {
                  const i = Object.keys(e[n]),
                    s = Object.keys(t[n]);
                  i.length !== s.length ? a(n) : (i.forEach((i => {
                    e[n][i] !== t[n][i] && a(n)
                  })), s.forEach((i => {
                    e[n][i] !== t[n][i] && a(n)
                  })))
                } else e[n] !== t[n] && a(n)
            })), o
          }(z, V.current, N, $.current, (e => e.key));
          return V.current = z, $.current = N, e.length && O.current && !O.current.destroyed && function(e) {
            let {
              swiper: t,
              slides: n,
              passedParams: i,
              changedParams: s,
              nextEl: a,
              prevEl: l,
              scrollbarEl: c,
              paginationEl: d
            } = e;
            const u = s.filter((e => "children" !== e && "direction" !== e)),
              {
                params: p,
                pagination: h,
                navigation: f,
                scrollbar: m,
                virtual: g,
                thumbs: v
              } = t;
            let y, x, w, b, S;
            s.includes("thumbs") && i.thumbs && i.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (y = !0), s.includes("controller") && i.controller && i.controller.control && p.controller && !p.controller.control && (x = !0), s.includes("pagination") && i.pagination && (i.pagination.el || d) && (p.pagination || !1 === p.pagination) && h && !h.el && (w = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || c) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (b = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || a) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (S = !0), u.forEach((e => {
              if (r(p[e]) && r(i[e])) o(p[e], i[e]);
              else {
                const s = i[e];
                !0 !== s && !1 !== s || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = i[e] : !1 === s && t[n = e] && (t[n].destroy(), "navigation" === n ? (p[n].prevEl = void 0, p[n].nextEl = void 0, t[n].prevEl = void 0, t[n].nextEl = void 0) : (p[n].el = void 0, t[n].el = void 0))
              }
              var n
            })), u.includes("controller") && !x && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), s.includes("children") && n && g && p.virtual.enabled ? (g.slides = n, g.update(!0)) : s.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), y && v.init() && v.update(!0), x && (t.controller.control = p.controller.control), w && (d && (p.pagination.el = d), h.init(), h.render(), h.update()), b && (c && (p.scrollbar.el = c), m.init(), m.updateSize(), m.setTranslate()), S && (a && (p.navigation.nextEl = a), l && (p.navigation.prevEl = l), f.init(), f.update()), s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && t.changeDirection(i.direction, !1), t.update()
          }({
            swiper: O.current,
            slides: N,
            passedParams: z,
            changedParams: e,
            nextEl: D.current,
            prevEl: B.current,
            scrollbarEl: R.current,
            paginationEl: I.current
          }), () => {
            F && O.current && Object.keys(F).forEach((e => {
              O.current.off(e, F[e])
            }))
          }
        })), g((() => {
          var e;
          !(e = O.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }), [E]), i.createElement(h, x({
          ref: L,
          className: d(`${C}${n?` ${n}`:""}`)
        }, _), i.createElement(y.Provider, {
          value: O.current
        }, G["container-start"], i.createElement(f, {
          className: "swiper-wrapper"
        }, G["wrapper-start"], j.virtual ? function(e, t, n) {
          if (!n) return null;
          const s = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
          } : {
            top: `${n.offset}px`
          };
          return t.filter(((e, t) => t >= n.from && t <= n.to)).map((t => i.cloneElement(t, {
            swiper: e,
            style: s
          })))
        }(O.current, N, E) : !j.loop || O.current && O.current.destroyed ? N.map((e => i.cloneElement(e, {
          swiper: O.current
        }))) : function(e, t, n) {
          const s = t.map(((t, n) => i.cloneElement(t, {
            swiper: e,
            "data-swiper-slide-index": n
          })));

          function r(e, t, s) {
            return i.cloneElement(e, {
              key: `${e.key}-duplicate-${t}-${s}`,
              className: `${e.props.className||""} ${n.slideDuplicateClass}`
            })
          }
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - s.length % n.slidesPerGroup;
            if (e !== n.slidesPerGroup)
              for (let t = 0; t < e; t += 1) {
                const e = i.createElement("div", {
                  className: `${n.slideClass} ${n.slideBlankClass}`
                });
                s.push(e)
              }
          }
          "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = s.length);
          const o = p(s, n),
            a = [],
            l = [];
          for (let e = 0; e < o; e += 1) {
            const t = e - Math.floor(e / s.length) * s.length;
            l.push(r(s[t], e, "append")), a.unshift(r(s[s.length - t - 1], e, "prepend"))
          }
          return e && (e.loopedSlides = o), [...a, ...s, ...l]
        }(O.current, N, j), G["wrapper-end"]), a(j) && i.createElement(i.Fragment, null, i.createElement("div", {
          ref: B,
          className: "swiper-button-prev"
        }), i.createElement("div", {
          ref: D,
          className: "swiper-button-next"
        })), c(j) && i.createElement("div", {
          ref: R,
          className: "swiper-scrollbar"
        }), l(j) && i.createElement("div", {
          ref: I,
          className: "swiper-pagination"
        }), G["container-end"]))
      }));

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }, b.apply(this, arguments)
      }
      w.displayName = "Swiper";
      const S = (0, i.forwardRef)((function(e, t) {
        let {
          tag: n = "div",
          children: s,
          className: r = "",
          swiper: o,
          zoom: a,
          virtualIndex: l,
          ...c
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [p, h] = (0, i.useState)("swiper-slide");

        function f(e, t, n) {
          t === u.current && h(n)
        }
        g((() => {
          if (t && (t.current = u.current), u.current && o) {
            if (!o.destroyed) return o.on("_slideClass", f), () => {
              o && o.off("_slideClass", f)
            };
            "swiper-slide" !== p && h("swiper-slide")
          }
        })), g((() => {
          o && u.current && !o.destroyed && h(o.getSlideClasses(u.current))
        }), [o]);
        const m = {
            isActive: p.indexOf("swiper-slide-active") >= 0 || p.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
            isPrev: p.indexOf("swiper-slide-prev") >= 0 || p.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext: p.indexOf("swiper-slide-next") >= 0 || p.indexOf("swiper-slide-duplicate-next") >= 0
          },
          y = () => "function" == typeof s ? s(m) : s;
        return i.createElement(n, b({
          ref: u,
          className: d(`${p}${r?` ${r}`:""}`),
          "data-swiper-slide-index": l
        }, c), i.createElement(v.Provider, {
          value: m
        }, a ? i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof a ? a : void 0
        }, y()) : y()))
      }));
      S.displayName = "SwiperSlide"
    },
    599: (e, t, n) => {
      "use strict";

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : i(t[n]) && i(e[n]) && Object.keys(t[n]).length > 0 && s(e[n], t[n])
        }))
      }
      n.d(t, {
        tl: () => oe,
        ZP: () => se
      });
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function o() {
        const e = "undefined" != typeof document ? document : {};
        return s(e, r), e
      }
      const a = {
        document: r,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return s(e, a), e
      }

      function c(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : c(t[n]) && c(e[n]) && Object.keys(t[n]).length > 0 && d(e[n], t[n])
        }))
      }
      const u = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function p() {
        const e = "undefined" != typeof document ? document : {};
        return d(e, u), e
      }
      const h = {
        document: u,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function f() {
        const e = "undefined" != typeof window ? window : {};
        return d(e, h), e
      }
      class m extends Array {
        constructor(e) {
          "number" == typeof e ? super(e) : (super(...e || []), function(e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e
              }
            })
          }(this))
        }
      }

      function g() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        const t = [];
        return e.forEach((e => {
          Array.isArray(e) ? t.push(...g(e)) : t.push(e)
        })), t
      }

      function v(e, t) {
        return Array.prototype.filter.call(e, t)
      }

      function y(e, t) {
        const n = f(),
          i = p();
        let s = [];
        if (!t && e instanceof m) return e;
        if (!e) return new m(s);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1) s.push(t.childNodes[e])
          } else s = function(e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n
          }(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) s.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof m) return e;
          s = e
        }
        return new m(function(e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
        }(s))
      }
      y.fn = m.prototype;
      const x = "resize scroll".split(" ");

      function w(e) {
        return function() {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          if (void 0 === n[0]) {
            for (let t = 0; t < this.length; t += 1) x.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : y(this[t]).trigger(e));
            return this
          }
          return this.on(e, ...n)
        }
      }
      w("click"), w("blur"), w("focus"), w("focusin"), w("focusout"), w("keyup"), w("keydown"), w("keypress"), w("submit"), w("change"), w("mousedown"), w("mousemove"), w("mouseup"), w("mouseenter"), w("mouseleave"), w("mouseout"), w("mouseover"), w("touchstart"), w("touchend"), w("touchmove"), w("resize"), w("scroll");
      const b = {
        addClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = g(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.add(...i)
          })), this
        },
        removeClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = g(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.remove(...i)
          })), this
        },
        hasClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = g(t.map((e => e.split(" "))));
          return v(this, (e => i.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = g(t.map((e => e.split(" "))));
          this.forEach((e => {
            i.forEach((t => {
              e.classList.toggle(t)
            }))
          }))
        },
        attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
          return this
        },
        removeAttr: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this
        },
        transform: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this
        },
        transition: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
          return this
        },
        on: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          let [i, s, r, o] = t;

          function a(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if (n.indexOf(e) < 0 && n.unshift(e), y(t).is(s)) r.apply(t, n);
            else {
              const e = y(t).parents();
              for (let t = 0; t < e.length; t += 1) y(e[t]).is(s) && r.apply(e[t], n)
            }
          }

          function l(e) {
            const t = e && e.target && e.target.dom7EventData || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
          }
          "function" == typeof t[1] && ([i, r, o] = t, s = void 0), o || (o = !1);
          const c = i.split(" ");
          let d;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (s)
              for (d = 0; d < c.length; d += 1) {
                const e = c[d];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                  listener: r,
                  proxyListener: a
                }), t.addEventListener(e, a, o)
              } else
                for (d = 0; d < c.length; d += 1) {
                  const e = c[d];
                  t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                    listener: r,
                    proxyListener: l
                  }), t.addEventListener(e, l, o)
                }
          }
          return this
        },
        off: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          let [i, s, r, o] = t;
          "function" == typeof t[1] && ([i, r, o] = t, s = void 0), o || (o = !1);
          const a = i.split(" ");
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            for (let e = 0; e < this.length; e += 1) {
              const n = this[e];
              let i;
              if (!s && n.dom7Listeners ? i = n.dom7Listeners[t] : s && n.dom7LiveListeners && (i = n.dom7LiveListeners[t]), i && i.length)
                for (let e = i.length - 1; e >= 0; e -= 1) {
                  const s = i[e];
                  r && s.listener === r || r && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === r ? (n.removeEventListener(t, s.proxyListener, o), i.splice(e, 1)) : r || (n.removeEventListener(t, s.proxyListener, o), i.splice(e, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const e = f();
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          const s = n[0].split(" "),
            r = n[1];
          for (let t = 0; t < s.length; t += 1) {
            const i = s[t];
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t];
              if (e.CustomEvent) {
                const t = new e.CustomEvent(i, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0
                });
                s.dom7EventData = n.filter(((e, t) => t > 0)), s.dispatchEvent(t), s.dom7EventData = [], delete s.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function n(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", n))
          })), this
        },
        outerWidth: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
          }
          return null
        },
        styles: function() {
          const e = f();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const e = f(),
              t = p(),
              n = this[0],
              i = n.getBoundingClientRect(),
              s = t.body,
              r = n.clientTop || s.clientTop || 0,
              o = n.clientLeft || s.clientLeft || 0,
              a = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return {
              top: i.top + a - r,
              left: i.left + l - o
            }
          }
          return null
        },
        css: function(e, t) {
          const n = f();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this
            }
            if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
          }
          return this
        },
        each: function(e) {
          return e ? (this.forEach(((t, n) => {
            e.apply(t, [t, n])
          })), this) : this
        },
        html: function(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this
        },
        text: function(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this
        },
        is: function(e) {
          const t = f(),
            n = p(),
            i = this[0];
          let s, r;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (s = y(e), r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0;
            return !1
          }
          if (e === n) return i === n;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof m) {
            for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0;
            return !1
          }
          return !1
        },
        index: function() {
          let e, t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
            return e
          }
        },
        eq: function(e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return y([]);
          if (e < 0) {
            const n = t + e;
            return y(n < 0 ? [] : [this[n]])
          }
          return y([this[e]])
        },
        append: function() {
          let e;
          const t = p();
          for (let n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (let n = 0; n < this.length; n += 1)
              if ("string" == typeof e) {
                const i = t.createElement("div");
                for (i.innerHTML = e; i.firstChild;) this[n].appendChild(i.firstChild)
              } else if (e instanceof m)
              for (let t = 0; t < e.length; t += 1) this[n].appendChild(e[t]);
            else this[n].appendChild(e)
          }
          return this
        },
        prepend: function(e) {
          const t = p();
          let n, i;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const s = t.createElement("div");
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[n].insertBefore(s.childNodes[i], this[n].childNodes[0])
            } else if (e instanceof m)
            for (i = 0; i < e.length; i += 1) this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
          return this
        },
        next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(e) ? y([this[0].nextElementSibling]) : y([]) : this[0].nextElementSibling ? y([this[0].nextElementSibling]) : y([]) : y([])
        },
        nextAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return y([]);
          for (; n.nextElementSibling;) {
            const i = n.nextElementSibling;
            e ? y(i).is(e) && t.push(i) : t.push(i), n = i
          }
          return y(t)
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e ? t.previousElementSibling && y(t.previousElementSibling).is(e) ? y([t.previousElementSibling]) : y([]) : t.previousElementSibling ? y([t.previousElementSibling]) : y([])
          }
          return y([])
        },
        prevAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return y([]);
          for (; n.previousElementSibling;) {
            const i = n.previousElementSibling;
            e ? y(i).is(e) && t.push(i) : t.push(i), n = i
          }
          return y(t)
        },
        parent: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? y(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
          return y(t)
        },
        parents: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i;) e ? y(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
          }
          return y(t)
        },
        closest: function(e) {
          let t = this;
          return void 0 === e ? y([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e])
          }
          return y(t)
        },
        children: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children;
            for (let n = 0; n < i.length; n += 1) e && !y(i[n]).is(e) || t.push(i[n])
          }
          return y(t)
        },
        filter: function(e) {
          return y(v(this, e))
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        }
      };
      Object.keys(b).forEach((e => {
        Object.defineProperty(y.fn, e, {
          value: b[e],
          writable: !0
        })
      }));
      const S = y;

      function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return setTimeout(e, t)
      }

      function T() {
        return Date.now()
      }

      function E(e) {
        const t = l();
        let n;
        return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
      }

      function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
        const n = l();
        let i, s, r;
        const o = E(e);
        return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
      }

      function M(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function A(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
      }

      function k() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && !A(i)) {
            const n = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, s = n.length; t < s; t += 1) {
              const s = n[t],
                r = Object.getOwnPropertyDescriptor(i, s);
              void 0 !== r && r.enumerable && (M(e[s]) && M(i[s]) ? i[s].__swiper__ ? e[s] = i[s] : k(e[s], i[s]) : !M(e[s]) && M(i[s]) ? (e[s] = {}, i[s].__swiper__ ? e[s] = i[s] : k(e[s], i[s])) : e[s] = i[s])
            }
          }
        }
        return e
      }

      function L(e, t, n) {
        e.style.setProperty(t, n)
      }

      function O(e) {
        let {
          swiper: t,
          targetPosition: n,
          side: i
        } = e;
        const s = l(),
          r = -t.translate;
        let o, a = null;
        const c = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const d = n > r ? "next" : "prev",
          u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
          p = () => {
            o = (new Date).getTime(), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / c, 1), 0),
              l = .5 - Math.cos(e * Math.PI) / 2;
            let d = r + l * (n - r);
            if (u(d, n) && (d = n), t.wrapperEl.scrollTo({
                [i]: d
              }), u(d, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: d
              })
            })), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(p)
          };
        p()
      }
      let V, $, D;

      function B() {
        return V || (V = function() {
          const e = l(),
            t = o();
          return {
            smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
            passiveListener: function() {
              let t = !1;
              try {
                const n = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0
                  }
                });
                e.addEventListener("testPassiveListener", null, n)
              } catch (e) {}
              return t
            }(),
            gestures: "ongesturestart" in e
          }
        }()), V
      }

      function I() {
        let {
          userAgent: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = B(),
          n = l(),
          i = n.navigator.platform,
          s = e || n.navigator.userAgent,
          r = {
            ios: !1,
            android: !1
          },
          o = n.screen.width,
          a = n.screen.height,
          c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
        let d = s.match(/(iPad).*OS\s([\d_]+)/);
        const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
          p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          h = "Win32" === i;
        let f = "MacIntel" === i;
        const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
        return !d && f && t.touch && m.indexOf(`${o}x${a}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), f = !1), c && !h && (r.os = "android", r.android = !0), (d || p || u) && (r.os = "ios", r.ios = !0), r
      }
      const R = {
          on(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const s = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
            })), i
          },
          once(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;

            function s() {
              i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
              for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
              t.apply(i, r)
            }
            return s.__emitterProxy = t, i.on(e, s, n)
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
          },
          off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
              void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((i, s) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(s, 1)
              }))
            })), n) : n
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, i;
            for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
            return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], n = r.slice(1, r.length), i = e) : (t = r[0].events, n = r[0].data, i = r[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                e.apply(i, [t, ...n])
              })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                e.apply(i, n)
              }))
            })), e
          }
        },
        j = {
          updateSize: function() {
            const e = this;
            let t, n;
            const i = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n
            }))
          },
          updateSlides: function() {
            const e = this;

            function t(t) {
              return e.isHorizontal() ? t : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
              } [t]
            }

            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0)
            }
            const i = e.params,
              {
                $wrapperEl: s,
                size: r,
                rtlTranslate: o,
                wrongRTL: a
              } = e,
              l = e.virtual && i.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              d = s.children(`.${e.params.slideClass}`),
              u = l ? e.virtual.slides.length : d.length;
            let p = [];
            const h = [],
              f = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
            let g = i.slidesOffsetAfter;
            "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              y = e.slidesGrid.length;
            let x = i.spaceBetween,
              w = -m,
              b = 0,
              S = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, o ? d.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : d.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), i.centeredSlides && i.cssMode && (L(e.wrapperEl, "--swiper-centered-offset-before", ""), L(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const C = i.grid && i.grid.rows > 1 && e.grid;
            let T;
            C && e.grid.initSlides(u);
            const E = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
            for (let s = 0; s < u; s += 1) {
              T = 0;
              const o = d.eq(s);
              if (C && e.grid.updateSlide(s, o, u, t), "none" !== o.css("display")) {
                if ("auto" === i.slidesPerView) {
                  E && (d[s].style[t("width")] = "");
                  const r = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), i.roundLengths) T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = n(r, "width"),
                      t = n(r, "padding-left"),
                      i = n(r, "padding-right"),
                      s = n(r, "margin-left"),
                      a = n(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) T = e + s + a;
                    else {
                      const {
                        clientWidth: n,
                        offsetWidth: r
                      } = o[0];
                      T = e + t + i + s + a + (r - n)
                    }
                  }
                  a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), i.roundLengths && (T = Math.floor(T))
                } else T = (r - (i.slidesPerView - 1) * x) / i.slidesPerView, i.roundLengths && (T = Math.floor(T)), d[s] && (d[s].style[t("width")] = `${T}px`);
                d[s] && (d[s].swiperSlideSize = T), f.push(T), i.centeredSlides ? (w = w + T / 2 + b / 2 + x, 0 === b && 0 !== s && (w = w - r / 2 - x), 0 === s && (w = w - r / 2 - x), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), S % i.slidesPerGroup == 0 && p.push(w), h.push(w)) : (i.roundLengths && (w = Math.floor(w)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup == 0 && p.push(w), h.push(w), w = w + T + x), e.virtualSize += T + x, b = T, S += 1
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, o && a && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
                width: `${e.virtualSize+i.spaceBetween}px`
              }), i.setWrapperSize && s.css({
                [t("width")]: `${e.virtualSize+i.spaceBetween}px`
              }), C && e.grid.updateWrapperSize(T, p, t), !i.centeredSlides) {
              const t = [];
              for (let n = 0; n < p.length; n += 1) {
                let s = p[n];
                i.roundLengths && (s = Math.floor(s)), p[n] <= e.virtualSize - r && t.push(s)
              }
              p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
            }
            if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              d.filter(((e, t) => !i.cssMode || t !== d.length - 1)).css({
                [n]: `${x}px`
              })
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0)
              })), e -= i.spaceBetween;
              const t = e - r;
              p = p.map((e => e < 0 ? -m : e > t ? t + g : e))
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (f.forEach((t => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0)
                })), e -= i.spaceBetween, e < r) {
                const t = (r - e) / 2;
                p.forEach(((e, n) => {
                  p[n] = e - t
                })), h.forEach(((e, n) => {
                  h[n] = e + t
                }))
              }
            }
            if (Object.assign(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: f
              }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
              L(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), L(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
            }
            if (u !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
              const t = `${i.containerModifierClass}backface-hidden`,
                n = e.$el.hasClass(t);
              u <= i.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
            }
          },
          updateAutoHeight: function(e) {
            const t = this,
              n = [],
              i = t.virtual && t.params.virtual.enabled;
            let s, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const o = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)(t.visibleSlides || S([])).each((e => {
                n.push(e)
              }));
              else
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                  const e = t.activeIndex + s;
                  if (e > t.slides.length && !i) break;
                  n.push(o(e))
                } else n.push(o(t.activeIndex));
            for (s = 0; s < n.length; s += 1)
              if (void 0 !== n[s]) {
                const e = n[s].offsetHeight;
                r = e > r ? e : r
              }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
          },
          updateSlidesOffset: function() {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
          },
          updateSlidesProgress: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0;
            const t = this,
              n = t.params,
              {
                slides: i,
                rtlTranslate: s,
                snapGrid: r
              } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            s && (o = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < i.length; e += 1) {
              const a = i[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
              const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                d = (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                u = -(o - l),
                p = u + t.slidesSizesGrid[e];
              (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(n.slideVisibleClass)), a.progress = s ? -c : c, a.originalProgress = s ? -d : d
            }
            t.visibleSlides = S(t.visibleSlides)
          },
          updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = t && t.translate && t.translate * n || 0
            }
            const n = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let {
              progress: s,
              isBeginning: r,
              isEnd: o
            } = t;
            const a = r,
              l = o;
            0 === i ? (s = 0, r = !0, o = !0) : (s = (e - t.minTranslate()) / i, r = s <= 0, o = s >= 1), Object.assign(t, {
              progress: s,
              isBeginning: r,
              isEnd: o
            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", s)
          },
          updateSlidesClasses: function() {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: i,
                activeIndex: s,
                realIndex: r
              } = e,
              o = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
            let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
            let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
          },
          updateActiveIndex: function(e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: s,
                params: r,
                activeIndex: o,
                realIndex: a,
                snapIndex: l
              } = t;
            let c, d = e;
            if (void 0 === d) {
              for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? d = e : n >= i[e] && n < i[e + 1] && (d = e + 1) : n >= i[e] && (d = e);
              r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            if (s.indexOf(n) >= 0) c = s.indexOf(n);
            else {
              const e = Math.min(r.slidesPerGroupSkip, d);
              c = e + Math.floor((d - e) / r.slidesPerGroup)
            }
            if (c >= s.length && (c = s.length - 1), d === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
            const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            Object.assign(t, {
              snapIndex: c,
              realIndex: u,
              previousIndex: o,
              activeIndex: d
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
          },
          updateClickedSlide: function(e) {
            const t = this,
              n = t.params,
              i = S(e).closest(`.${n.slideClass}`)[0];
            let s, r = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  r = !0, s = e;
                  break
                } if (!i || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(S(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
          }
        };

      function z(e) {
        let {
          swiper: t,
          runCallbacks: n,
          direction: i,
          step: s
        } = e;
        const {
          activeIndex: r,
          previousIndex: o
        } = t;
        let a = i;
        if (a || (a = r > o ? "next" : r < o ? "prev" : "reset"), t.emit(`transition${s}`), n && r !== o) {
          if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
          t.emit(`slideChangeTransition${s}`), "next" === a ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
        }
      }
      const _ = {
        slideTo: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f
          } = r;
          if (r.animating && a.preventInteractionOnTransition || !f && !i && !s) return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, o);
          let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (a.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1] ? t >= n && t < i - (i - n) / 2 ? o = e : t >= n && t < i && (o = e + 1) : t >= n && (o = e)
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== o) return !1
          }
          let y;
          if (o !== (d || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(v), y = o > u ? "next" : o < u ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(v), "reset" !== y && (r.transitionStart(n, y), r.transitionEnd(n, y)), !1;
          if (a.cssMode) {
            const e = r.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
              }))
            } else {
              if (!r.support.smoothScroll) return O({
                swiper: r,
                targetPosition: n,
                side: e ? "left" : "top"
              }), !0;
              h.scrollTo({
                [e ? "left" : "top"]: n,
                behavior: "smooth"
              })
            }
            return !0
          }
          return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, y), 0 === t ? r.transitionEnd(n, y) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, y))
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const s = this;
          let r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i)
        },
        slideNext: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const i = this,
            {
              animating: s,
              enabled: r,
              params: o
            } = i;
          if (!r) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (s && o.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
          }
          return o.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
        },
        slidePrev: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const i = this,
            {
              params: s,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c
            } = i;
          if (!c) return i;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
          }
          const d = l ? i.translate : -i.translate;

          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const p = u(d),
            h = o.map((e => u(e)));
          let f = o[h.indexOf(p) - 1];
          if (void 0 === f && s.cssMode) {
            let e;
            o.forEach(((t, n) => {
              p >= t && (e = n)
            })), void 0 !== e && (f = o[e > 0 ? e - 1 : e])
          }
          let m = 0;
          if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), s.rewind && i.isBeginning) {
            const s = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
            return i.slideTo(s, e, t, n)
          }
          return i.slideTo(m, e, t, n)
        },
        slideReset: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const i = this;
          return i.slideTo(i.activeIndex, e, t, n)
        },
        slideToClosest: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          const s = this;
          let r = s.activeIndex;
          const o = Math.min(s.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / s.params.slidesPerGroup),
            l = s.rtlTranslate ? s.translate : -s.translate;
          if (l >= s.snapGrid[a]) {
            const e = s.snapGrid[a];
            l - e > (s.snapGrid[a + 1] - e) * i && (r += s.params.slidesPerGroup)
          } else {
            const e = s.snapGrid[a - 1];
            l - e <= (s.snapGrid[a] - e) * i && (r -= s.params.slidesPerGroup)
          }
          return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, n)
        },
        slideToClickedSlide: function() {
          const e = this,
            {
              params: t,
              $wrapperEl: n
            } = e,
            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let s, r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            s = parseInt(S(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), C((() => {
              e.slideTo(r)
            }))) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), C((() => {
              e.slideTo(r)
            }))) : e.slideTo(r)
          } else e.slideTo(r)
        }
      };

      function F(e) {
        const t = this,
          n = o(),
          i = l(),
          s = t.touchEventsData,
          {
            params: r,
            touches: a,
            enabled: c
          } = t;
        if (!c) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let u = S(d.target);
        if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length) return;
        if (s.isTouchEvent = "touchstart" === d.type, !s.isTouchEvent && "which" in d && 3 === d.which) return;
        if (!s.isTouchEvent && "button" in d && d.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const p = !!r.noSwipingClass && "" !== r.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        p && d.target && d.target.shadowRoot && h && (u = S(h[0]));
        const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          m = !(!d.target || !d.target.shadowRoot);
        if (r.noSwiping && (m ? function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;

            function n(t) {
              if (!t || t === o() || t === l()) return null;
              t.assignedSlot && (t = t.assignedSlot);
              const i = t.closest(e);
              return i || t.getRootNode ? i || n(t.getRootNode().host) : null
            }
            return n(t)
          }(f, u[0]) : u.closest(f)[0])) return void(t.allowClick = !0);
        if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
        a.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, a.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
        const g = a.currentX,
          v = a.currentY,
          y = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          x = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (y && (g <= x || g >= i.innerWidth - x)) {
          if ("prevent" !== y) return;
          e.preventDefault()
        }
        if (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), a.startX = g, a.startY = v, s.touchStartTime = T(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
          let e = !0;
          u.is(s.focusableElements) && (e = !1, "SELECT" === u[0].nodeName && (s.isTouched = !1)), n.activeElement && S(n.activeElement).is(s.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
          const i = e && t.allowTouchMove && r.touchStartPreventDefault;
          !r.touchStartForcePreventDefault && !i || u[0].isContentEditable || d.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
      }

      function N(e) {
        const t = o(),
          n = this,
          i = n.touchEventsData,
          {
            params: s,
            touches: r,
            rtlTranslate: a,
            enabled: l
          } = n;
        if (!l) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
          u = "touchmove" === c.type ? d.pageX : c.pageX,
          p = "touchmove" === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return r.startX = u, void(r.startY = p);
        if (!n.allowTouchMove) return S(c.target).is(i.focusableElements) || (n.allowClick = !1), void(i.isTouched && (Object.assign(r, {
          startX: u,
          startY: p,
          currentX: u,
          currentY: p
        }), i.touchStartTime = T()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (n.isVertical()) {
            if (p < r.startY && n.translate <= n.maxTranslate() || p > r.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (u < r.startX && n.translate <= n.maxTranslate() || u > r.startX && n.translate >= n.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && S(c.target).is(i.focusableElements)) return i.isMoved = !0, void(n.allowClick = !1);
        if (i.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        r.currentX = u, r.currentY = p;
        const h = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (n.params.threshold && Math.sqrt(h ** 2 + f ** 2) < n.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = n.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && n.emit("touchMoveOpposite", c), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        n.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation(), i.isMoved || (s.loop && !s.cssMode && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), i.isMoved = !0;
        let m = n.isHorizontal() ? h : f;
        r.diff = m, m *= s.touchRatio, a && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
        let g = !0,
          v = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (v = 0), m > 0 && i.currentTranslate > n.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + m) ** v)) : m < 0 && i.currentTranslate < n.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - m) ** v)), g && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
          if (!(Math.abs(m) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
      }

      function G(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a
          } = t;
        if (!a) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = T(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || l.composedPath && l.composedPath();
          t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = T(), C((() => {
            t.destroyed || (t.allowClick = !0)
          })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let u;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
        if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: u
        });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t] ? u >= o[e] && u < o[e + t] && (p = e, h = o[e + t] - o[e]) : u >= o[e] && (p = e, h = o[o.length - 1] - o[o.length - 2])
        }
        let f = null,
          m = null;
        i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
        const g = (u - o[p]) / h,
          v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : p + v) : t.slideTo(p)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(p + v) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p)) : l.target === t.navigation.nextEl ? t.slideTo(p + v) : t.slideTo(p)
        }
      }

      function H() {
        const e = this,
          {
            params: t,
            el: n
          } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: s,
          snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }

      function W(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function U() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: n,
            enabled: i
          } = e;
        if (!i) return;
        let s;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }
      let Y = !1;

      function q() {}
      const X = (e, t) => {
          const n = o(),
            {
              params: i,
              touchEvents: s,
              el: r,
              wrapperEl: a,
              device: l,
              support: c
            } = e,
            d = !!i.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
          if (c.touch) {
            const t = !("touchstart" !== s.start || !c.passiveListener || !i.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r[u](s.start, e.onTouchStart, t), r[u](s.move, e.onTouchMove, c.passiveListener ? {
              passive: !1,
              capture: d
            } : d), r[u](s.end, e.onTouchEnd, t), s.cancel && r[u](s.cancel, e.onTouchEnd, t)
          } else r[u](s.start, e.onTouchStart, !1), n[u](s.move, e.onTouchMove, d), n[u](s.end, e.onTouchEnd, !1);
          (i.preventClicks || i.preventClicksPropagation) && r[u]("click", e.onClick, !0), i.cssMode && a[u]("scroll", e.onScroll), i.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e[p]("observerUpdate", H, !0)
        },
        Z = {
          attachEvents: function() {
            const e = this,
              t = o(),
              {
                params: n,
                support: i
              } = e;
            e.onTouchStart = F.bind(e), e.onTouchMove = N.bind(e), e.onTouchEnd = G.bind(e), n.cssMode && (e.onScroll = U.bind(e)), e.onClick = W.bind(e), i.touch && !Y && (t.addEventListener("touchstart", q), Y = !0), X(e, "on")
          },
          detachEvents: function() {
            X(this, "off")
          }
        },
        K = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        J = {
          addClasses: function() {
            const e = this,
              {
                classNames: t,
                params: n,
                rtl: i,
                $el: s,
                device: r,
                support: o
              } = e,
              a = function(e, t) {
                const n = [];
                return e.forEach((e => {
                  "object" == typeof e ? Object.keys(e).forEach((i => {
                    e[i] && n.push(t + i)
                  })) : "string" == typeof e && n.push(t + e)
                })), n
              }(["initialized", n.direction, {
                "pointer-events": !o.touch
              }, {
                "free-mode": e.params.freeMode && n.freeMode.enabled
              }, {
                autoheight: n.autoHeight
              }, {
                rtl: i
              }, {
                grid: n.grid && n.grid.rows > 1
              }, {
                "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
              }, {
                android: r.android
              }, {
                ios: r.ios
              }, {
                "css-mode": n.cssMode
              }, {
                centered: n.cssMode && n.centeredSlides
              }, {
                "watch-progress": n.watchSlidesProgress
              }], n.containerModifierClass);
            t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses()
          },
          removeClasses: function() {
            const {
              $el: e,
              classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
          }
        },
        Q = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: .85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopedSlidesLimit: !0,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
        };

      function ee(e, t) {
        return function() {
          let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const i = Object.keys(n)[0],
            s = n[i];
          "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
            auto: !0
          }), i in e && "enabled" in s ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), k(t, n)) : k(t, n)) : k(t, n)
        }
      }
      const te = {
          eventsEmitter: R,
          update: j,
          translate: {
            getTranslate: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y";
              const t = this,
                {
                  params: n,
                  rtlTranslate: i,
                  translate: s,
                  $wrapperEl: r
                } = t;
              if (n.virtualTranslate) return i ? -s : s;
              if (n.cssMode) return s;
              let o = P(r[0], e);
              return i && (o = -o), o || 0
            },
            setTranslate: function(e, t) {
              const n = this,
                {
                  rtlTranslate: i,
                  params: s,
                  $wrapperEl: r,
                  wrapperEl: o,
                  progress: a
                } = n;
              let l, c = 0,
                d = 0;
              n.isHorizontal() ? c = i ? -e : e : d = e, s.roundLengths && (c = Math.floor(c), d = Math.floor(d)), s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : s.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
              const u = n.maxTranslate() - n.minTranslate();
              l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                s = arguments.length > 4 ? arguments[4] : void 0;
              const r = this,
                {
                  params: o,
                  wrapperEl: a
                } = r;
              if (r.animating && o.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                c = r.maxTranslate();
              let d;
              if (d = i && e > l ? l : i && e < c ? c : e, r.updateProgress(d), o.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                  if (!r.support.smoothScroll) return O({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top"
                  }), !0;
                  a.scrollTo({
                    [e ? "left" : "top"]: -d,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (r.setTransition(0), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
              }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
            },
            transitionStart: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const n = this,
                {
                  params: i
                } = n;
              i.cssMode || (i.autoHeight && n.updateAutoHeight(), z({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const n = this,
                {
                  params: i
                } = n;
              n.animating = !1, i.cssMode || (n.setTransition(0), z({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: _,
          loop: {
            loopCreate: function() {
              const e = this,
                t = o(),
                {
                  params: n,
                  $wrapperEl: i
                } = e,
                s = i.children().length > 0 ? S(i.children()[0].parentNode) : i;
              s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
              let r = s.children(`.${n.slideClass}`);
              if (n.loopFillGroupWithBlank) {
                const e = n.slidesPerGroup - r.length % n.slidesPerGroup;
                if (e !== n.slidesPerGroup) {
                  for (let i = 0; i < e; i += 1) {
                    const e = S(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                    s.append(e)
                  }
                  r = s.children(`.${n.slideClass}`)
                }
              }
              "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
              const a = [],
                l = [];
              r.each(((e, t) => {
                S(e).attr("data-swiper-slide-index", t)
              }));
              for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / r.length) * r.length;
                l.push(r.eq(e)[0]), a.unshift(r.eq(r.length - e - 1)[0])
              }
              for (let e = 0; e < l.length; e += 1) s.append(S(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
              for (let e = a.length - 1; e >= 0; e -= 1) s.prepend(S(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: n,
                loopedSlides: i,
                allowSlidePrev: s,
                allowSlideNext: r,
                snapGrid: o,
                rtlTranslate: a
              } = e;
              let l;
              e.allowSlidePrev = !0, e.allowSlideNext = !0;
              const c = -o[t] - e.getTranslate();
              t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)), e.allowSlidePrev = s, e.allowSlideNext = r, e.emit("loopFix")
            },
            loopDestroy: function() {
              const {
                $wrapperEl: e,
                params: t,
                slides: n
              } = this;
              e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
            }
          },
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
              const e = this;
              e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
          },
          events: Z,
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: i = 0,
                  params: s,
                  $el: r
                } = e,
                o = s.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const l = (a in o ? o[a] : void 0) || e.originalParams,
                c = K(e, s),
                d = K(e, l),
                u = s.enabled;
              c && !d ? (r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (r.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && r.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                const n = s[t] && s[t].enabled,
                  i = l[t] && l[t].enabled;
                n && !i && e[t].disable(), !n && i && e[t].enable()
              }));
              const p = l.direction && l.direction !== s.direction,
                h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
              p && n && e.changeDirection(), k(e.params, l);
              const f = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), h && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                n = arguments.length > 2 ? arguments[2] : void 0;
              if (!e || "container" === t && !n) return;
              let i = !1;
              const s = l(),
                r = "window" === t ? s.innerHeight : n.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: r * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: r,
                  value: a
                } = o[e];
                "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = r) : a <= n.clientWidth && (i = r)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: n
                } = e,
                {
                  slidesOffsetBefore: i
                } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: J,
          images: {
            loadImage: function(e, t, n, i, s, r) {
              const o = l();
              let a;

              function c() {
                r && r()
              }
              S(e).parent("picture")[0] || e.complete && s ? c() : t ? (a = new o.Image, a.onload = c, a.onerror = c, i && (a.sizes = i), n && (a.srcset = n), t && (a.src = t)) : c()
            },
            preloadImages: function() {
              const e = this;

              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
              }
            }
          }
        },
        ne = {};
      class ie {
        constructor() {
          let e, t;
          for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
          if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = k({}, t), e && !t.el && (t.el = e), t.el && S(t.el).length > 1) {
            const e = [];
            return S(t.el).each((n => {
              const i = k({}, t, {
                el: n
              });
              e.push(new ie(i))
            })), e
          }
          const r = this;
          r.__swiper__ = !0, r.support = B(), r.device = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return $ || ($ = I(e)), $
          }({
            userAgent: t.userAgent
          }), r.browser = (D || (D = function() {
            const e = l();
            return {
              isSafari: function() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
          }()), D), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
          const o = {};
          r.modules.forEach((e => {
            e({
              swiper: r,
              extendParams: ee(t, o),
              on: r.on.bind(r),
              once: r.once.bind(r),
              off: r.off.bind(r),
              emit: r.emit.bind(r)
            })
          }));
          const a = k({}, Q, o);
          return r.params = k({}, a, ne, t), r.originalParams = k({}, r.params), r.passedParams = k({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
            r.on(e, r.params.on[e])
          })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = S, Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: S(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: function() {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3]
              }, r.touchEventsDesktop = {
                start: t[0],
                move: t[1],
                end: t[2]
              }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: T(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            s = (n.maxTranslate() - i) * e + i;
          n.translateTo(s, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n => {
            const i = e.getSlideClasses(n);
            t.push({
              slideEl: n,
              classNames: i
            }), e.emit("_slideClass", n, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            params: n,
            slides: i,
            slidesGrid: s,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e, t = i[a].swiperSlideSize;
            for (let n = a + 1; n < i.length; n += 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0))
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1)(t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
          else
            for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < o && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: n
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let s;
          n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            i = n.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), n.emit("changeDirection"), t && n.update()), n
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = S(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let s = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = S(e.shadowRoot.querySelector(i()));
              return t.children = e => n.children(e), t
            }
            return n.children ? n.children(i()) : S(n).children(i())
          })();
          if (0 === s.length && t.params.createElements) {
            const e = o().createElement("div");
            s = S(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
              s.append(e)
            }))
          }
          return Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display")
          }), !0
        }
        init(e) {
          const t = this;
          return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            {
              params: i,
              $el: s,
              $wrapperEl: r,
              slides: o
            } = n;
          return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
            n.off(e)
          })), !1 !== e && (n.$el[0].swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
          k(ne, e)
        }
        static get extendedDefaults() {
          return ne
        }
        static get defaults() {
          return Q
        }
        static installModule(e) {
          ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
          const t = ie.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => ie.installModule(e))), ie) : (ie.installModule(e), ie)
        }
      }
      Object.keys(te).forEach((e => {
        Object.keys(te[e]).forEach((t => {
          ie.prototype[t] = te[e][t]
        }))
      })), ie.use([function(e) {
        let {
          swiper: t,
          on: n,
          emit: i
        } = e;
        const s = l();
        let r = null,
          o = null;
        const a = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          c = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        n("init", (() => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
            o = s.requestAnimationFrame((() => {
              const {
                width: n,
                height: i
              } = t;
              let s = n,
                r = i;
              e.forEach((e => {
                let {
                  contentBoxSize: n,
                  contentRect: i,
                  target: o
                } = e;
                o && o !== t.el || (s = i ? i.width : (n[0] || n).inlineSize, r = i ? i.height : (n[0] || n).blockSize)
              })), s === n && r === i || a()
            }))
          })), r.observe(t.el)) : (s.addEventListener("resize", a), s.addEventListener("orientationchange", c))
        })), n("destroy", (() => {
          o && s.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", c)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: n,
          on: i,
          emit: s
        } = e;
        const r = [],
          o = l(),
          a = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = o.MutationObserver || o.WebkitMutationObserver,
              i = new n((e => {
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const t = function() {
                  s("observerUpdate", e[0])
                };
                o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
              }));
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }), r.push(i)
          };
        n({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = t.$el.parents();
              for (let t = 0; t < e.length; t += 1) a(e[t])
            }
            a(t.$el[0], {
              childList: t.params.observeSlideChildren
            }), a(t.$wrapperEl[0], {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          r.forEach((e => {
            e.disconnect()
          })), r.splice(0, r.length)
        }))
      }]);
      const se = ie;

      function re() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function oe(e) {
        let {
          swiper: t,
          extendParams: n,
          on: i,
          emit: s
        } = e;
        const r = "swiper-pagination";
        let a;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
          }
        }), t.pagination = {
          el: null,
          $el: null,
          bullets: []
        };
        let l = 0;

        function c() {
          return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function d(e, n) {
          const {
            bulletActiveClass: i
          } = t.params.pagination;
          e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
        }

        function u() {
          const e = t.rtl,
            n = t.params.pagination;
          if (c()) return;
          const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            r = t.pagination.$el;
          let o;
          const u = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (o = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), o > i - 1 - 2 * t.loopedSlides && (o -= i - 2 * t.loopedSlides), o > u - 1 && (o -= u), o < 0 && "bullets" !== t.params.paginationType && (o = u + o)) : o = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const i = t.pagination.bullets;
            let s, c, u;
            if (n.dynamicBullets && (a = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", a * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += o - (t.previousIndex - t.loopedSlides || 0), l > n.dynamicMainBullets - 1 ? l = n.dynamicMainBullets - 1 : l < 0 && (l = 0)), s = Math.max(o - l, 0), c = s + (Math.min(i.length, n.dynamicMainBullets) - 1), u = (c + s) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), r.length > 1) i.each((e => {
              const t = S(e),
                i = t.index();
              i === o && t.addClass(n.bulletActiveClass), n.dynamicBullets && (i >= s && i <= c && t.addClass(`${n.bulletActiveClass}-main`), i === s && d(t, "prev"), i === c && d(t, "next"))
            }));
            else {
              const e = i.eq(o),
                r = e.index();
              if (e.addClass(n.bulletActiveClass), n.dynamicBullets) {
                const e = i.eq(s),
                  o = i.eq(c);
                for (let e = s; e <= c; e += 1) i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= i.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                  } else d(e, "prev"), d(o, "next");
                else d(e, "prev"), d(o, "next")
              }
            }
            if (n.dynamicBullets) {
              const s = Math.min(i.length, n.dynamicMainBullets + 4),
                r = (a * s - a) / 2 - u * a,
                o = e ? "right" : "left";
              i.css(t.isHorizontal() ? o : "top", `${r}px`)
            }
          }
          if ("fraction" === n.type && (r.find(re(n.currentClass)).text(n.formatFractionCurrent(o + 1)), r.find(re(n.totalClass)).text(n.formatFractionTotal(u))), "progressbar" === n.type) {
            let e;
            e = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
            const i = (o + 1) / u;
            let s = 1,
              a = 1;
            "horizontal" === e ? s = i : a = i, r.find(re(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${a})`).transition(t.params.speed)
          }
          "custom" === n.type && n.renderCustom ? (r.html(n.renderCustom(t, o + 1, u)), s("paginationRender", r[0])) : s("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }

        function p() {
          const e = t.params.pagination;
          if (c()) return;
          const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            i = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let s = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && s > n && (s = n);
            for (let n = 0; n < s; n += 1) e.renderBullet ? r += e.renderBullet.call(t, n, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
            i.html(r), t.pagination.bullets = i.find(re(e.bulletClass))
          }
          "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, i.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, i.html(r)), "custom" !== e.type && s("paginationRender", t.pagination.$el[0])
        }

        function h() {
          t.params.pagination = function(e, t, n, i) {
            const s = o();
            return e.params.createElements && Object.keys(i).forEach((r => {
              if (!n[r] && !0 === n.auto) {
                let o = e.$el.children(`.${i[r]}`)[0];
                o || (o = s.createElement("div"), o.className = i[r], e.$el.append(o)), n[r] = o, t[r] = o
              }
            })), n
          }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let n = S(e.el);
          0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && n.length > 1 && (n = t.$el.find(e.el), n.length > 1 && (n = n.filter((e => S(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && n.addClass(e.clickableClass), n.addClass(e.modifierClass + e.type), n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass), e.clickable && n.on("click", re(e.bulletClass), (function(e) {
            e.preventDefault();
            let n = S(this).index() * t.params.slidesPerGroup;
            t.params.loop && (n += t.loopedSlides), t.slideTo(n)
          })), Object.assign(t.pagination, {
            $el: n,
            el: n[0]
          }), t.enabled || n.addClass(e.lockClass))
        }

        function f() {
          const e = t.params.pagination;
          if (c()) return;
          const n = t.pagination.$el;
          n.removeClass(e.hiddenClass), n.removeClass(e.modifierClass + e.type), n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && n.off("click", re(e.bulletClass))
        }
        i("init", (() => {
          !1 === t.params.pagination.enabled ? m() : (h(), p(), u())
        })), i("activeIndexChange", (() => {
          (t.params.loop || void 0 === t.snapIndex) && u()
        })), i("snapIndexChange", (() => {
          t.params.loop || u()
        })), i("slidesLengthChange", (() => {
          t.params.loop && (p(), u())
        })), i("snapGridLengthChange", (() => {
          t.params.loop || (p(), u())
        })), i("destroy", (() => {
          f()
        })), i("enable disable", (() => {
          const {
            $el: e
          } = t.pagination;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), i("lock unlock", (() => {
          u()
        })), i("click", ((e, n) => {
          const i = n.target,
            {
              $el: r
            } = t.pagination;
          if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !S(i).hasClass(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
          }
        }));
        const m = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), f()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), p(), u()
          },
          disable: m,
          render: p,
          update: u,
          init: h,
          destroy: f
        })
      }
    },
    6014: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => i
      });
      const i = (0, n(822).createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    7367: (e, t, n) => {
      "use strict";
      n.d(t, {
        w: () => i
      });
      const i = {
        delta: 0,
        timestamp: 0
      }
    },
    4991: (e, t, n) => {
      "use strict";
      n.d(t, {
        qY: () => h,
        iW: () => f,
        Z_: () => p
      });
      const i = 1 / 60 * 1e3,
        s = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        r = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout((() => e(s())), i);
      var o = n(7367);
      let a = !0,
        l = !1,
        c = !1;
      const d = ["read", "update", "preRender", "render", "postRender"],
        u = d.reduce(((e, t) => (e[t] = function(e) {
          let t = [],
            n = [],
            i = 0,
            s = !1,
            r = !1;
          const o = new WeakSet,
            a = {
              schedule: (e, r = !1, a = !1) => {
                const l = a && s,
                  c = l ? t : n;
                return r && o.add(e), -1 === c.indexOf(e) && (c.push(e), l && s && (i = t.length)), e
              },
              cancel: e => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1), o.delete(e)
              },
              process: l => {
                if (s) r = !0;
                else {
                  if (s = !0, [t, n] = [n, t], n.length = 0, i = t.length, i)
                    for (let n = 0; n < i; n++) {
                      const i = t[n];
                      i(l), o.has(i) && (a.schedule(i), e())
                    }
                  s = !1, r && (r = !1, a.process(l))
                }
              }
            };
          return a
        }((() => l = !0)), e)), {}),
        p = d.reduce(((e, t) => {
          const n = u[t];
          return e[t] = (e, t = !1, i = !1) => (l || v(), n.schedule(e, t, i)), e
        }), {}),
        h = d.reduce(((e, t) => (e[t] = u[t].cancel, e)), {}),
        f = d.reduce(((e, t) => (e[t] = () => u[t].process(o.w), e)), {}),
        m = e => u[e].process(o.w),
        g = e => {
          l = !1, o.w.delta = a ? i : Math.max(Math.min(e - o.w.timestamp, 40), 1), o.w.timestamp = e, c = !0, d.forEach(m), c = !1, l && (a = !1, r(g))
        },
        v = () => {
          l = !0, a = !0, c || r(g)
        }
    },
    3205: (e, t, n) => {
      "use strict";
      n.d(t, {
        E: () => Qs
      });
      var i = n(822),
        s = n(6014);
      const r = (0, i.createContext)({}),
        o = (0, i.createContext)(null);
      var a = n(8868);
      const l = (0, i.createContext)({
        strict: !1
      });

      function c(e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function d(e) {
        return "string" == typeof e || Array.isArray(e)
      }

      function u(e) {
        return "object" == typeof e && "function" == typeof e.start
      }
      const p = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function h(e) {
        return u(e.animate) || p.some((t => d(e[t])))
      }

      function f(e) {
        return Boolean(h(e) || e.variants)
      }

      function m(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      const g = e => ({
          isEnabled: t => e.some((e => !!t[e]))
        }),
        v = {
          measureLayout: g(["layout", "layoutId", "drag"]),
          animation: g(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: g(["exit"]),
          drag: g(["drag", "dragControls"]),
          focus: g(["whileFocus"]),
          hover: g(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: g(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: g(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: g(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
      var y = n(1741),
        x = n(6681);
      const w = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let b = 1;
      const S = (0, i.createContext)({});
      class C extends i.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: e,
            props: t
          } = this.props;
          return e && e.setProps(t), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      const T = (0, i.createContext)({}),
        E = Symbol.for("motionComponentSymbol");

      function P({
        preloadedFeatures: e,
        createVisualElement: t,
        projectionNodeConstructor: n,
        useRender: u,
        useVisualState: p,
        Component: f
      }) {
        e && function(e) {
          for (const t in e) "projectionNodeConstructor" === t ? v.projectionNodeConstructor = e[t] : v[t].Component = e[t]
        }(e);
        const g = (0, i.forwardRef)((function(g, S) {
          const E = {
              ...(0, i.useContext)(s._),
              ...g,
              layoutId: M(g)
            },
            {
              isStatic: P
            } = E;
          let A = null;
          const k = function(e) {
              const {
                initial: t,
                animate: n
              } = function(e, t) {
                if (h(e)) {
                  const {
                    initial: t,
                    animate: n
                  } = e;
                  return {
                    initial: !1 === t || d(t) ? t : void 0,
                    animate: d(n) ? n : void 0
                  }
                }
                return !1 !== e.inherit ? t : {}
              }(e, (0, i.useContext)(r));
              return (0, i.useMemo)((() => ({
                initial: t,
                animate: n
              })), [m(t), m(n)])
            }(g),
            L = P ? void 0 : (0, x.h)((() => {
              if (w.hasEverUpdated) return b++
            })),
            O = p(g, P);
          if (!P && y.j) {
            k.visualElement = function(e, t, n, c) {
              const d = (0, i.useContext)(r).visualElement,
                u = (0, i.useContext)(l),
                p = (0, i.useContext)(o),
                h = (0, i.useContext)(s._).reducedMotion,
                f = (0, i.useRef)();
              c = c || u.renderer, !f.current && c && (f.current = c(e, {
                visualState: t,
                parent: d,
                props: n,
                presenceId: p ? p.id : void 0,
                blockInitialAnimation: !!p && !1 === p.initial,
                reducedMotionConfig: h
              }));
              const m = f.current;
              return (0, a.L)((() => {
                m && m.render()
              })), (0, a.L)((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), (0, a.L)((() => () => m && m.notify("Unmount")), []), m
            }(f, O, E, t);
            const c = (0, i.useContext)(l).strict,
              d = (0, i.useContext)(T);
            k.visualElement && (A = k.visualElement.loadFeatures(E, c, e, L, n || v.projectionNodeConstructor, d))
          }
          return i.createElement(C, {
            visualElement: k.visualElement,
            props: E
          }, A, i.createElement(r.Provider, {
            value: k
          }, u(f, g, L, function(e, t, n) {
            return (0, i.useCallback)((i => {
              i && e.mount && e.mount(i), t && (i ? t.mount(i) : t.unmount()), n && ("function" == typeof n ? n(i) : c(n) && (n.current = i))
            }), [t])
          }(O, k.visualElement, S), O, P, k.visualElement)))
        }));
        return g[E] = f, g
      }

      function M({
        layoutId: e
      }) {
        const t = (0, i.useContext)(S).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function A(e) {
        function t(t, n = {}) {
          return P(e(t, n))
        }
        if ("undefined" == typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, {
          get: (e, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
        })
      }
      const k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function L(e) {
        return "string" == typeof e && !e.includes("-") && !!(k.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      const O = {},
        V = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        $ = new Set(V);

      function D(e, {
        layout: t,
        layoutId: n
      }) {
        return $.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!O[e] || "opacity" === e)
      }
      const B = e => !!(null == e ? void 0 : e.getVelocity),
        I = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        R = (e, t) => V.indexOf(e) - V.indexOf(t);

      function j(e) {
        return e.startsWith("--")
      }
      const z = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
      var _ = n(1649),
        F = n(6190);
      const N = {
          ..._.Rx,
          transform: Math.round
        },
        G = {
          borderWidth: F.px,
          borderTopWidth: F.px,
          borderRightWidth: F.px,
          borderBottomWidth: F.px,
          borderLeftWidth: F.px,
          borderRadius: F.px,
          radius: F.px,
          borderTopLeftRadius: F.px,
          borderTopRightRadius: F.px,
          borderBottomRightRadius: F.px,
          borderBottomLeftRadius: F.px,
          width: F.px,
          maxWidth: F.px,
          height: F.px,
          maxHeight: F.px,
          size: F.px,
          top: F.px,
          right: F.px,
          bottom: F.px,
          left: F.px,
          padding: F.px,
          paddingTop: F.px,
          paddingRight: F.px,
          paddingBottom: F.px,
          paddingLeft: F.px,
          margin: F.px,
          marginTop: F.px,
          marginRight: F.px,
          marginBottom: F.px,
          marginLeft: F.px,
          rotate: F.RW,
          rotateX: F.RW,
          rotateY: F.RW,
          rotateZ: F.RW,
          scale: _.bA,
          scaleX: _.bA,
          scaleY: _.bA,
          scaleZ: _.bA,
          skew: F.RW,
          skewX: F.RW,
          skewY: F.RW,
          distance: F.px,
          translateX: F.px,
          translateY: F.px,
          translateZ: F.px,
          x: F.px,
          y: F.px,
          z: F.px,
          perspective: F.px,
          transformPerspective: F.px,
          opacity: _.Fq,
          originX: F.$C,
          originY: F.$C,
          originZ: F.px,
          zIndex: N,
          fillOpacity: _.Fq,
          strokeOpacity: _.Fq,
          numOctaves: N
        };

      function H(e, t, n, i) {
        const {
          style: s,
          vars: r,
          transform: o,
          transformKeys: a,
          transformOrigin: l
        } = e;
        a.length = 0;
        let c = !1,
          d = !1,
          u = !0;
        for (const e in t) {
          const n = t[e];
          if (j(e)) {
            r[e] = n;
            continue
          }
          const i = G[e],
            p = z(n, i);
          if ($.has(e)) {
            if (c = !0, o[e] = p, a.push(e), !u) continue;
            n !== (i.default || 0) && (u = !1)
          } else e.startsWith("origin") ? (d = !0, l[e] = p) : s[e] = p
        }
        if (t.transform || (c || i ? s.transform = function({
            transform: e,
            transformKeys: t
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: i = !0
          }, s, r) {
            let o = "";
            t.sort(R);
            for (const n of t) o += `${I[n]||n}(${e[n]}) `;
            return n && !e.z && (o += "translateZ(0)"), o = o.trim(), r ? o = r(e, s ? "" : o) : i && s && (o = "none"), o
          }(e, n, u, i) : s.transform && (s.transform = "none")), d) {
          const {
            originX: e = "50%",
            originY: t = "50%",
            originZ: n = 0
          } = l;
          s.transformOrigin = `${e} ${t} ${n}`
        }
      }

      function W(e, t, n) {
        for (const i in t) B(t[i]) || D(i, n) || (e[i] = t[i])
      }

      function U(e, t, n) {
        const s = {},
          r = function(e, t, n) {
            const s = {};
            return W(s, e.style || {}, e), Object.assign(s, function({
              transformTemplate: e
            }, t, n) {
              return (0, i.useMemo)((() => {
                const i = {
                  style: {},
                  transform: {},
                  transformKeys: [],
                  transformOrigin: {},
                  vars: {}
                };
                return H(i, t, {
                  enableHardwareAcceleration: !n
                }, e), Object.assign({}, i.vars, i.style)
              }), [t])
            }(e, t, n)), e.transformValues ? e.transformValues(s) : s
          }(e, t, n);
        return e.drag && !1 !== e.dragListener && (s.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), s.style = r, s
      }
      const Y = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function q(e) {
        return Y.has(e)
      }
      let X = e => !q(e);
      try {
        (Z = require("@emotion/is-prop-valid").default) && (X = e => e.startsWith("on") ? !q(e) : Z(e))
      } catch (e) {}
      var Z;

      function K(e, t, n) {
        return "string" == typeof e ? e : F.px.transform(t + n * e)
      }
      const J = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Q = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function ee(e, {
        attrX: t,
        attrY: n,
        originX: i,
        originY: s,
        pathLength: r,
        pathSpacing: o = 1,
        pathOffset: a = 0,
        ...l
      }, c, d, u) {
        if (H(e, l, c, u), d) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: p,
          style: h,
          dimensions: f
        } = e;
        p.transform && (f && (h.transform = p.transform), delete p.transform), f && (void 0 !== i || void 0 !== s || h.transform) && (h.transformOrigin = function(e, t, n) {
          return `${K(t,e.x,e.width)} ${K(n,e.y,e.height)}`
        }(f, void 0 !== i ? i : .5, void 0 !== s ? s : .5)), void 0 !== t && (p.x = t), void 0 !== n && (p.y = n), void 0 !== r && function(e, t, n = 1, i = 0, s = !0) {
          e.pathLength = 1;
          const r = s ? J : Q;
          e[r.offset] = F.px.transform(-i);
          const o = F.px.transform(t),
            a = F.px.transform(n);
          e[r.array] = `${o} ${a}`
        }(p, r, o, a, !1)
      }
      const te = e => "string" == typeof e && "svg" === e.toLowerCase();

      function ne(e, t, n, s) {
        const r = (0, i.useMemo)((() => {
          const n = {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
            attrs: {}
          };
          return ee(n, t, {
            enableHardwareAcceleration: !1
          }, te(s), e.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [t]);
        if (e.style) {
          const t = {};
          W(t, e.style, e), r.style = {
            ...t,
            ...r.style
          }
        }
        return r
      }

      function ie(e = !1) {
        return (t, n, s, r, {
          latestValues: o
        }, a) => {
          const l = (L(t) ? ne : U)(n, o, a, t),
            c = function(e, t, n) {
              const i = {};
              for (const s in e)(X(s) || !0 === n && q(s) || !t && !q(s) || e.draggable && s.startsWith("onDrag")) && (i[s] = e[s]);
              return i
            }(n, "string" == typeof t, e),
            d = {
              ...c,
              ...l,
              ref: r
            };
          return s && (d["data-projection-id"] = s), (0, i.createElement)(t, d)
        }
      }
      const se = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function re(e, {
        style: t,
        vars: n
      }, i, s) {
        Object.assign(e.style, t, s && s.getProjectionStyles(i));
        for (const t in n) e.style.setProperty(t, n[t])
      }
      const oe = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function ae(e, t, n, i) {
        re(e, t, void 0, i);
        for (const n in t.attrs) e.setAttribute(oe.has(n) ? n : se(n), t.attrs[n])
      }

      function le(e) {
        const {
          style: t
        } = e, n = {};
        for (const i in t)(B(t[i]) || D(i, e)) && (n[i] = t[i]);
        return n
      }

      function ce(e) {
        const t = le(e);
        for (const n in e) B(e[n]) && (t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]);
        return t
      }

      function de(e, t, n, i = {}, s = {}) {
        return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, i, s)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, i, s)), t
      }
      const ue = e => Array.isArray(e);

      function pe(e) {
        const t = B(e) ? e.get() : e;
        return n = t, Boolean(n && "object" == typeof n && n.mix && n.toValue) ? t.toValue() : t;
        var n
      }
      const he = e => (t, n) => {
        const s = (0, i.useContext)(r),
          a = (0, i.useContext)(o),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: n
          }, i, s, r) {
            const o = {
              latestValues: fe(i, s, r, e),
              renderState: t()
            };
            return n && (o.mount = e => n(i, e, o)), o
          }(e, t, s, a);
        return n ? l() : (0, x.h)(l)
      };

      function fe(e, t, n, i) {
        const s = {},
          r = i(e);
        for (const e in r) s[e] = pe(r[e]);
        let {
          initial: o,
          animate: a
        } = e;
        const l = h(e),
          c = f(e);
        t && c && !l && !1 !== e.inherit && (void 0 === o && (o = t.initial), void 0 === a && (a = t.animate));
        let d = !!n && !1 === n.initial;
        d = d || !1 === o;
        const p = d ? a : o;
        return p && "boolean" != typeof p && !u(p) && (Array.isArray(p) ? p : [p]).forEach((t => {
          const n = de(e, t);
          if (!n) return;
          const {
            transitionEnd: i,
            transition: r,
            ...o
          } = n;
          for (const e in o) {
            let t = o[e];
            Array.isArray(t) && (t = t[d ? t.length - 1 : 0]), null !== t && (s[e] = t)
          }
          for (const e in i) s[e] = i[e]
        })), s
      }
      const me = {
          useVisualState: he({
            scrapeMotionValuesFromProps: ce,
            createRenderState: () => ({
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
              attrs: {}
            }),
            onMount: (e, t, {
              renderState: n,
              latestValues: i
            }) => {
              try {
                n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
              } catch (e) {
                n.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }
              ee(n, i, {
                enableHardwareAcceleration: !1
              }, te(t.tagName), e.transformTemplate), ae(t, n)
            }
          })
        },
        ge = {
          useVisualState: he({
            scrapeMotionValuesFromProps: le,
            createRenderState: () => ({
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {}
            })
          })
        };
      var ve;

      function ye(e, t, n, i = {
        passive: !0
      }) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n)
      }

      function xe(e, t, n, s) {
        (0, i.useEffect)((() => {
          const i = e.current;
          if (n && i) return ye(i, t, n, s)
        }), [e, t, n, s])
      }

      function we(e) {
        return "undefined" != typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
      }

      function be(e) {
        return !!e.touches
      }! function(e) {
        e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
      }(ve || (ve = {}));
      const Se = {
        pageX: 0,
        pageY: 0
      };

      function Ce(e, t = "page") {
        const n = e.touches[0] || e.changedTouches[0] || Se;
        return {
          x: n[t + "X"],
          y: n[t + "Y"]
        }
      }

      function Te(e, t = "page") {
        return {
          x: e[t + "X"],
          y: e[t + "Y"]
        }
      }

      function Ee(e, t = "page") {
        return {
          point: be(e) ? Ce(e, t) : Te(e, t)
        }
      }
      const Pe = (e, t = !1) => {
          const n = t => e(t, Ee(t));
          return t ? (i = n, e => {
            const t = e instanceof MouseEvent;
            (!t || t && 0 === e.button) && i(e)
          }) : n;
          var i
        },
        Me = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        Ae = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function ke(e) {
        return y.j && null === window.onpointerdown ? e : y.j && null === window.ontouchstart ? Ae[e] : y.j && null === window.onmousedown ? Me[e] : e
      }

      function Le(e, t, n, i) {
        return ye(e, ke(t), Pe(n, "pointerdown" === t), i)
      }

      function Oe(e, t, n, i) {
        return xe(e, ke(t), n && Pe(n, "pointerdown" === t), i)
      }

      function Ve(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const $e = Ve("dragHorizontal"),
        De = Ve("dragVertical");

      function Be(e) {
        let t = !1;
        if ("y" === e) t = De();
        else if ("x" === e) t = $e();
        else {
          const e = $e(),
            n = De();
          e && n ? t = () => {
            e(), n()
          } : (e && e(), n && n())
        }
        return t
      }

      function Ie() {
        const e = Be(!0);
        return !e || (e(), !1)
      }

      function Re(e, t, n) {
        return (i, s) => {
          we(i) && !Ie() && (e.animationState && e.animationState.setActive(ve.Hover, t), n && n(i, s))
        }
      }
      const je = (e, t) => !!t && (e === t || je(e, t.parentElement));

      function ze(e) {
        return (0, i.useEffect)((() => () => e()), [])
      }
      var _e = n(3624),
        Fe = n(1700);
      const Ne = (void 0 === Fe || Fe.env, "production");
      var Ge = n(6034);
      const He = new WeakMap,
        We = new WeakMap,
        Ue = e => {
          const t = He.get(e.target);
          t && t(e)
        },
        Ye = e => {
          e.forEach(Ue)
        };
      const qe = {
        some: 0,
        all: 1
      };

      function Xe(e, t, n, {
        root: s,
        margin: r,
        amount: o = "some",
        once: a
      }) {
        (0, i.useEffect)((() => {
          if (!e || !n.current) return;
          const i = {
            root: null == s ? void 0 : s.current,
            rootMargin: r,
            threshold: "number" == typeof o ? o : qe[o]
          };
          return function(e, t, n) {
            const i = function({
              root: e,
              ...t
            }) {
              const n = e || document;
              We.has(n) || We.set(n, {});
              const i = We.get(n),
                s = JSON.stringify(t);
              return i[s] || (i[s] = new IntersectionObserver(Ye, {
                root: e,
                ...t
              })), i[s]
            }(t);
            return He.set(e, n), i.observe(e), () => {
              He.delete(e), i.unobserve(e)
            }
          }(n.current, i, (e => {
            const {
              isIntersecting: i
            } = e;
            if (t.isInView === i) return;
            if (t.isInView = i, a && !i && t.hasEnteredView) return;
            i && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(ve.InView, i);
            const s = n.getProps(),
              r = i ? s.onViewportEnter : s.onViewportLeave;
            r && r(e)
          }))
        }), [e, s, r, o])
      }

      function Ze(e, t, n, {
        fallback: s = !0
      }) {
        (0, i.useEffect)((() => {
          e && s && ("production" !== Ne && (0, Ge.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
            t.hasEnteredView = !0;
            const {
              onViewportEnter: e
            } = n.getProps();
            e && e(null), n.animationState && n.animationState.setActive(ve.InView, !0)
          })))
        }), [e])
      }
      const Ke = e => t => (e(t), null),
        Je = {
          inView: Ke((function({
            visualElement: e,
            whileInView: t,
            onViewportEnter: n,
            onViewportLeave: s,
            viewport: r = {}
          }) {
            const o = (0, i.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(t || n || s);
            r.once && o.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? Ze : Xe)(a, o.current, e, r)
          })),
          tap: Ke((function({
            onTap: e,
            onTapStart: t,
            onTapCancel: n,
            whileTap: s,
            visualElement: r
          }) {
            const o = e || t || n || s,
              a = (0, i.useRef)(!1),
              l = (0, i.useRef)(null),
              c = {
                passive: !(t || e || n || f)
              };

            function d() {
              l.current && l.current(), l.current = null
            }

            function u() {
              return d(), a.current = !1, r.animationState && r.animationState.setActive(ve.Tap, !1), !Ie()
            }

            function p(t, i) {
              u() && (je(r.current, t.target) ? e && e(t, i) : n && n(t, i))
            }

            function h(e, t) {
              u() && n && n(e, t)
            }

            function f(e, n) {
              d(), a.current || (a.current = !0, l.current = (0, _e.z)(Le(window, "pointerup", p, c), Le(window, "pointercancel", h, c)), r.animationState && r.animationState.setActive(ve.Tap, !0), t && t(e, n))
            }
            Oe(r, "pointerdown", o ? f : void 0, c), ze(d)
          })),
          focus: Ke((function({
            whileFocus: e,
            visualElement: t
          }) {
            const {
              animationState: n
            } = t;
            xe(t, "focus", e ? () => {
              n && n.setActive(ve.Focus, !0)
            } : void 0), xe(t, "blur", e ? () => {
              n && n.setActive(ve.Focus, !1)
            } : void 0)
          })),
          hover: Ke((function({
            onHoverStart: e,
            onHoverEnd: t,
            whileHover: n,
            visualElement: i
          }) {
            Oe(i, "pointerenter", e || n ? Re(i, !0, e) : void 0, {
              passive: !e
            }), Oe(i, "pointerleave", t || n ? Re(i, !1, t) : void 0, {
              passive: !t
            })
          }))
        };

      function Qe() {
        const e = (0, i.useContext)(o);
        if (null === e) return [!0, null];
        const {
          isPresent: t,
          onExitComplete: n,
          register: s
        } = e, r = (0, i.useId)();
        return (0, i.useEffect)((() => s(r)), []), !t && n ? [!1, () => n && n(r)] : [!0]
      }

      function et(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let i = 0; i < n; i++)
          if (t[i] !== e[i]) return !1;
        return !0
      }
      var tt = n(3234),
        nt = n(1550),
        it = n(6430);
      const st = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function rt(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [i] = n.match(it.KP) || [];
        if (!i) return e;
        const s = n.replace(i, "");
        let r = st.has(t) ? 1 : 0;
        return i !== n && (r *= 100), t + "(" + r + s + ")"
      }
      const ot = /([a-z-]*)\(.*?\)/g,
        at = {
          ...nt.P,
          getAnimatableNone: e => {
            const t = e.match(ot);
            return t ? t.map(rt).join(" ") : e
          }
        };
      var lt = n(5385);
      const ct = {
          ...G,
          color: lt.$,
          backgroundColor: lt.$,
          outlineColor: lt.$,
          fill: lt.$,
          stroke: lt.$,
          borderColor: lt.$,
          borderTopColor: lt.$,
          borderRightColor: lt.$,
          borderBottomColor: lt.$,
          borderLeftColor: lt.$,
          filter: at,
          WebkitFilter: at
        },
        dt = e => ct[e];

      function ut(e, t) {
        var n;
        let i = dt(e);
        return i !== at && (i = nt.P), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, t)
      }
      const pt = e => t => t.test(e),
        ht = [_.Rx, F.px, F.aQ, F.RW, F.vw, F.vh, {
          test: e => "auto" === e,
          parse: e => e
        }],
        ft = e => ht.find(pt(e)),
        mt = [...ht, lt.$, nt.P],
        gt = e => mt.find(pt(e));

      function vt(e, t, n) {
        const i = e.getProps();
        return de(i, t, void 0 !== n ? n : i.custom, function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.get())), t
        }(e), function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t
        }(e))
      }

      function yt(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, (0, tt.B)(n))
      }

      function xt(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function wt(e) {
        return Boolean(B(e) && e.add)
      }
      var bt = n(4991);

      function St(e, t) {
        const {
          MotionAppearAnimations: n
        } = window, i = ((e, t) => `${e}: ${t}`)(e, $.has(t) ? "transform" : t), s = n && n.get(i);
        return s ? (bt.Z_.render((() => {
          try {
            s.cancel(), n.delete(i)
          } catch (e) {}
        })), s.currentTime || 0) : 0
      }
      const Ct = "data-" + se("framerAppearId");
      var Tt = n(3930);
      const Et = e => 1e3 * e,
        Pt = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Mt = e => t => 1 - e(1 - t),
        At = e => e * e,
        kt = Mt(At),
        Lt = Pt(At);
      var Ot = n(5367);
      const Vt = e => e,
        $t = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function Dt(e, t, n, i) {
        if (e === t && n === i) return Vt;
        return s => 0 === s || 1 === s ? s : $t(function(e, t, n, i, s) {
          let r, o, a = 0;
          do {
            o = t + (n - t) / 2, r = $t(o, i, s) - e, r > 0 ? n = o : t = o
          } while (Math.abs(r) > 1e-7 && ++a < 12);
          return o
        }(s, 0, 1, e, n), t, i)
      }
      const Bt = e => 1 - Math.sin(Math.acos(e)),
        It = Mt(Bt),
        Rt = Pt(It),
        jt = Dt(.33, 1.53, .69, .99),
        zt = Mt(jt),
        _t = Pt(zt),
        Ft = {
          linear: Vt,
          easeIn: At,
          easeInOut: Lt,
          easeOut: kt,
          circIn: Bt,
          circInOut: Rt,
          circOut: It,
          backIn: zt,
          backInOut: _t,
          backOut: jt,
          anticipate: e => (e *= 2) < 1 ? .5 * zt(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        Nt = e => {
          if (Array.isArray(e)) {
            (0, Tt.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, n, i, s] = e;
            return Dt(t, n, i, s)
          }
          return "string" == typeof e ? ((0, Tt.k)(void 0 !== Ft[e], `Invalid easing type '${e}'`), Ft[e]) : e
        };

      function Gt({
        keyframes: e,
        ease: t = Lt,
        times: n,
        duration: i = 300
      }) {
        e = [...e];
        const s = Gt[0],
          r = (e => Array.isArray(e) && "number" != typeof e[0])(t) ? t.map(Nt) : Nt(t),
          o = {
            done: !1,
            value: s
          },
          a = function(e, t) {
            return e.map((e => e * t))
          }(n && n.length === Gt.length ? n : function(e) {
            const t = e.length;
            return e.map(((e, n) => 0 !== n ? n / (t - 1) : 0))
          }(e), i);

        function l() {
          return (0, Ot.s)(a, e, {
            ease: Array.isArray(r) ? r : (t = e, n = r, t.map((() => n || Lt)).splice(0, t.length - 1))
          });
          var t, n
        }
        let c = l();
        return {
          next: e => (o.value = c(e), o.done = e >= i, o),
          flipTarget: () => {
            e.reverse(), c = l()
          }
        }
      }
      var Ht = n(4169);

      function Wt(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      var Ut = n(3038);
      const Yt = ["duration", "bounce"],
        qt = ["stiffness", "damping", "mass"];

      function Xt(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function Zt({
        keyframes: e,
        restSpeed: t = 2,
        restDelta: n = .01,
        ...i
      }) {
        let s = e[0],
          r = e[e.length - 1];
        const o = {
            done: !1,
            value: s
          },
          {
            stiffness: a,
            damping: l,
            mass: c,
            velocity: d,
            duration: u,
            isResolvedFromDuration: p
          } = function(e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!Xt(e, qt) && Xt(e, Yt)) {
              const n = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: n = 0,
                mass: i = 1
              }) {
                let s, r;
                (0, Tt.K)(e <= 1e4, "Spring duration must be 10 seconds or less");
                let o = 1 - t;
                o = (0, Ht.u)(.05, 1, o), e = (0, Ht.u)(.01, 10, e / 1e3), o < 1 ? (s = t => {
                  const i = t * o,
                    s = i * e;
                  return .001 - (i - n) / Wt(t, o) * Math.exp(-s)
                }, r = t => {
                  const i = t * o * e,
                    r = i * n + n,
                    a = Math.pow(o, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-i),
                    c = Wt(Math.pow(t, 2), o);
                  return (.001 - s(t) > 0 ? -1 : 1) * ((r - a) * l) / c
                }) : (s = t => Math.exp(-t * e) * ((t - n) * e + 1) - .001, r = t => Math.exp(-t * e) * (e * e * (n - t)));
                const a = function(e, t, n) {
                  let i = n;
                  for (let n = 1; n < 12; n++) i -= e(i) / t(i);
                  return i
                }(s, r, 5 / e);
                if (e *= 1e3, isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: e
                }; {
                  const t = Math.pow(a, 2) * i;
                  return {
                    stiffness: t,
                    damping: 2 * o * Math.sqrt(i * t),
                    duration: e
                  }
                }
              }(e);
              t = {
                ...t,
                ...n,
                velocity: 0,
                mass: 1
              }, t.isResolvedFromDuration = !0
            }
            return t
          }(i);
        let h = Kt,
          f = d ? -d / 1e3 : 0;
        const m = l / (2 * Math.sqrt(a * c));

        function g() {
          const e = r - s,
            t = Math.sqrt(a / c) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(r - s) / 100, .4)), m < 1) {
            const n = Wt(t, m);
            h = i => {
              const s = Math.exp(-m * t * i);
              return r - s * ((f + m * t * e) / n * Math.sin(n * i) + e * Math.cos(n * i))
            }
          } else if (1 === m) h = n => r - Math.exp(-t * n) * (e + (f + t * e) * n);
          else {
            const n = t * Math.sqrt(m * m - 1);
            h = i => {
              const s = Math.exp(-m * t * i),
                o = Math.min(n * i, 300);
              return r - s * ((f + m * t * e) * Math.sinh(o) + n * e * Math.cosh(o)) / n
            }
          }
        }
        return g(), {
          next: e => {
            const i = h(e);
            if (p) o.done = e >= u;
            else {
              let s = f;
              if (0 !== e)
                if (m < 1) {
                  const t = Math.max(0, e - 5);
                  s = (0, Ut.R)(i - h(t), e - t)
                } else s = 0;
              const a = Math.abs(s) <= t,
                l = Math.abs(r - i) <= n;
              o.done = a && l
            }
            return o.value = o.done ? r : i, o
          },
          flipTarget: () => {
            f = -f, [s, r] = [r, s], g()
          }
        }
      }
      Zt.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
      const Kt = e => 0,
        Jt = {
          decay: function({
            keyframes: e = [0],
            velocity: t = 0,
            power: n = .8,
            timeConstant: i = 350,
            restDelta: s = .5,
            modifyTarget: r
          }) {
            const o = e[0],
              a = {
                done: !1,
                value: o
              };
            let l = n * t;
            const c = o + l,
              d = void 0 === r ? c : r(c);
            return d !== c && (l = d - o), {
              next: e => {
                const t = -l * Math.exp(-e / i);
                return a.done = !(t > s || t < -s), a.value = a.done ? d : d + t, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: Gt,
          tween: Gt,
          spring: Zt
        };

      function Qt(e, t, n = 0) {
        return e - t - n
      }
      const en = e => {
        const t = ({
          delta: t
        }) => e(t);
        return {
          start: () => bt.Z_.update(t, !0),
          stop: () => bt.qY.update(t)
        }
      };

      function tn({
        duration: e,
        driver: t = en,
        elapsed: n = 0,
        repeat: i = 0,
        repeatType: s = "loop",
        repeatDelay: r = 0,
        keyframes: o,
        autoplay: a = !0,
        onPlay: l,
        onStop: c,
        onComplete: d,
        onRepeat: u,
        onUpdate: p,
        type: h = "keyframes",
        ...f
      }) {
        var m, g;
        let v, y, x, w = 0,
          b = e,
          S = !1,
          C = !0;
        const T = Jt[o.length > 2 ? "keyframes" : h],
          E = o[0],
          P = o[o.length - 1];
        (null === (g = (m = T).needsInterpolation) || void 0 === g ? void 0 : g.call(m, E, P)) && (x = (0, Ot.s)([0, 100], [E, P], {
          clamp: !1
        }), o = [0, 100]);
        const M = T({
          ...f,
          duration: e,
          keyframes: o
        });
        return a && (l && l(), v = t((function(e) {
          if (C || (e = -e), n += e, !S) {
            const e = M.next(Math.max(0, n));
            y = e.value, x && (y = x(y)), S = C ? e.done : n <= 0
          }
          p && p(y), S && (0 === w && (b = void 0 !== b ? b : n), w < i ? function(e, t, n, i) {
            return i ? e >= t + n : e <= -n
          }(n, b, r, C) && (w++, "reverse" === s ? (C = w % 2 == 0, n = function(e, t = 0, n = 0, i = !0) {
            return i ? Qt(t + -e, t, n) : t - (e - t) + n
          }(n, b, r, C)) : (n = Qt(n, b, r), "mirror" === s && M.flipTarget()), S = !1, u && u()) : (v.stop(), d && d()))
        })), v.start()), {
          stop: () => {
            c && c(), v.stop()
          },
          sample: e => M.next(Math.max(0, e))
        }
      }
      const nn = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
        sn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nn([0, .65, .55, 1]),
          circOut: nn([.55, 0, 1, .45]),
          backIn: nn([.31, .01, .66, -.59]),
          backOut: nn([.33, 1.53, .69, .99])
        };

      function rn(e) {
        if (e) return Array.isArray(e) ? nn(e) : sn[e]
      }

      function on(e, t) {
        const n = performance.now(),
          i = ({
            timestamp: s
          }) => {
            const r = s - n;
            r >= t && (bt.qY.read(i), e(r - t))
          };
        return bt.Z_.read(i, !0), () => bt.qY.read(i)
      }

      function an({
        keyframes: e,
        elapsed: t,
        onUpdate: n,
        onComplete: i
      }) {
        const s = () => (n && n(e[e.length - 1]), i && i(), () => {});
        return t ? on(s, -t) : s()
      }
      var ln = n(7367);
      const cn = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        dn = e => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        un = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        pn = {
          type: "keyframes",
          duration: .8
        },
        hn = {
          x: cn,
          y: cn,
          z: cn,
          rotate: cn,
          rotateX: cn,
          rotateY: cn,
          rotateZ: cn,
          scaleX: dn,
          scaleY: dn,
          scale: dn,
          opacity: un,
          backgroundColor: un,
          color: un,
          default: dn
        },
        fn = (e, {
          keyframes: t
        }) => t.length > 2 ? pn : (hn[e] || hn.default)(t[1]),
        mn = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !nt.P.test(t) || t.startsWith("url(")));

      function gn(e) {
        return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
      }

      function vn(e) {
        return "number" == typeof e ? 0 : ut("", e)
      }

      function yn(e, t) {
        return e[t] || e.default || e
      }
      const xn = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        wn = {},
        bn = {};
      for (const e in xn) bn[e] = () => (void 0 === wn[e] && (wn[e] = xn[e]()), wn[e]);
      const Sn = new Set(["opacity"]),
        Cn = (e, t, n, i = {}) => s => {
          const r = yn(i, e) || {},
            o = r.delay || i.delay || 0;
          let {
            elapsed: a = 0
          } = i;
          a -= Et(o);
          const l = function(e, t, n, i) {
              const s = mn(t, n);
              let r = void 0 !== i.from ? i.from : e.get();
              return "none" === r && s && "string" == typeof n ? r = ut(t, n) : gn(r) && "string" == typeof n ? r = vn(n) : !Array.isArray(n) && gn(n) && "string" == typeof r && (n = vn(r)), Array.isArray(n) ? (null === n[0] && (n[0] = r), n) : [r, n]
            }(t, e, n, r),
            c = l[0],
            d = l[l.length - 1],
            u = mn(e, c),
            p = mn(e, d);
          (0, Tt.K)(u === p, `You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);
          let h = {
            keyframes: l,
            velocity: t.getVelocity(),
            ...r,
            elapsed: a,
            onUpdate: e => {
              t.set(e), r.onUpdate && r.onUpdate(e)
            },
            onComplete: () => {
              s(), r.onComplete && r.onComplete()
            }
          };
          if (!u || !p || !1 === r.type) return an(h);
          if ("inertia" === r.type) {
            const e = function({
              keyframes: e,
              velocity: t = 0,
              min: n,
              max: i,
              power: s = .8,
              timeConstant: r = 750,
              bounceStiffness: o = 500,
              bounceDamping: a = 10,
              restDelta: l = 1,
              modifyTarget: c,
              driver: d,
              onUpdate: u,
              onComplete: p,
              onStop: h
            }) {
              const f = e[0];
              let m;

              function g(e) {
                return void 0 !== n && e < n || void 0 !== i && e > i
              }

              function v(e) {
                return void 0 === n ? i : void 0 === i || Math.abs(n - e) < Math.abs(i - e) ? n : i
              }

              function y(e) {
                null == m || m.stop(), m = tn({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...e,
                  driver: d,
                  onUpdate: t => {
                    var n;
                    null == u || u(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                  },
                  onComplete: p,
                  onStop: h
                })
              }

              function x(e) {
                y({
                  type: "spring",
                  stiffness: o,
                  damping: a,
                  restDelta: l,
                  ...e
                })
              }
              if (g(f)) x({
                velocity: t,
                keyframes: [f, v(f)]
              });
              else {
                let e = s * t + f;
                void 0 !== c && (e = c(e));
                const i = v(e),
                  o = i === n ? -1 : 1;
                let a, d;
                const u = e => {
                  a = d, d = e, t = (0, Ut.R)(e - a, ln.w.delta), (1 === o && e > i || -1 === o && e < i) && x({
                    keyframes: [e, i],
                    velocity: t
                  })
                };
                y({
                  type: "decay",
                  keyframes: [f, 0],
                  velocity: t,
                  timeConstant: r,
                  power: s,
                  restDelta: l,
                  modifyTarget: c,
                  onUpdate: g(e) ? u : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(h);
            return () => e.stop()
          }(function({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: i,
            staggerDirection: s,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            ...c
          }) {
            return !!Object.keys(c).length
          })(r) || (h = {
            ...h,
            ...fn(e, h)
          }), h.duration && (h.duration = Et(h.duration)), h.repeatDelay && (h.repeatDelay = Et(h.repeatDelay));
          const f = t.owner,
            m = f && f.current;
          if (bn.waapi() && Sn.has(e) && !h.repeatDelay && "mirror" !== h.repeatType && 0 !== h.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate) return function(e, t, {
            onUpdate: n,
            onComplete: i,
            ...s
          }) {
            let {
              keyframes: r,
              duration: o = .3,
              elapsed: a = 0,
              ease: l
            } = s;
            if ("spring" === s.type || !(!(c = s.ease) || Array.isArray(c) || "string" == typeof c && sn[c])) {
              const e = tn(s);
              let t = {
                done: !1,
                value: r[0]
              };
              const n = [];
              let i = 0;
              for (; !t.done;) t = e.sample(i), n.push(t.value), i += 10;
              r = n, o = i - 10, l = "linear"
            }
            var c;
            const d = function(e, t, n, {
              delay: i = 0,
              duration: s,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l
            } = {}) {
              return e.animate({
                [t]: n,
                offset: l
              }, {
                delay: i,
                duration: s,
                easing: rn(a),
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal"
              })
            }(e.owner.current, t, r, {
              ...s,
              delay: -a,
              duration: o,
              ease: l
            });
            return d.onfinish = () => {
              e.set(r[r.length - 1]), i && i()
            }, () => {
              const {
                currentTime: t
              } = d;
              if (t) {
                const n = tn(s);
                e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
              }
              bt.Z_.update((() => d.cancel()))
            }
          }(t, e, h); {
            const e = tn(h);
            return () => e.stop()
          }
        };

      function Tn(e, t, n = {}) {
        var i;
        const s = vt(e, t, n.custom);
        let {
          transition: r = e.getDefaultTransition() || {}
        } = s || {};
        n.transitionOverride && (r = n.transitionOverride);
        const o = s ? () => En(e, s, n) : () => Promise.resolve(),
          a = (null === (i = e.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
            const {
              delayChildren: s = 0,
              staggerChildren: o,
              staggerDirection: a
            } = r;
            return function(e, t, n = 0, i = 0, s = 1, r) {
              const o = [],
                a = (e.variantChildren.size - 1) * i,
                l = 1 === s ? (e = 0) => e * i : (e = 0) => a - e * i;
              return Array.from(e.variantChildren).sort(Pn).forEach(((e, i) => {
                o.push(Tn(e, t, {
                  ...r,
                  delay: n + l(i)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(o)
            }(e, t, s + i, o, a, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = r;
        if (l) {
          const [e, t] = "beforeChildren" === l ? [o, a] : [a, o];
          return e().then(t)
        }
        return Promise.all([o(), a(n.delay)])
      }

      function En(e, t, {
        delay: n = 0,
        transitionOverride: i,
        type: s
      } = {}) {
        var r;
        let {
          transition: o = e.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e.makeTargetAnimatable(t);
        const c = e.getValue("willChange");
        i && (o = i);
        const d = [],
          u = s && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[s]);
        for (const t in l) {
          const i = e.getValue(t),
            s = l[t];
          if (!i || void 0 === s || u && Mn(u, t)) continue;
          let r = {
            delay: n,
            elapsed: 0,
            ...o
          };
          if (e.shouldReduceMotion && $.has(t) && (r = {
              ...r,
              type: !1,
              delay: 0
            }), !i.hasAnimated) {
            const n = e.getProps()[Ct];
            n && (r.elapsed = St(n, t))
          }
          let a = i.start(Cn(t, i, s, r));
          wt(c) && (c.add(t), a = a.then((() => c.remove(t)))), d.push(a)
        }
        return Promise.all(d).then((() => {
          a && function(e, t) {
            const n = vt(e, t);
            let {
              transitionEnd: i = {},
              transition: s = {},
              ...r
            } = n ? e.makeTargetAnimatable(n, !1) : {};
            r = {
              ...r,
              ...i
            };
            for (const t in r) yt(e, t, (o = r[t], ue(o) ? o[o.length - 1] || 0 : o));
            var o
          }(e, a)
        }))
      }

      function Pn(e, t) {
        return e.sortNodePosition(t)
      }

      function Mn({
        protectedKeys: e,
        needsAnimating: t
      }, n) {
        const i = e.hasOwnProperty(n) && !0 !== t[n];
        return t[n] = !1, i
      }
      const An = [ve.Animate, ve.InView, ve.Focus, ve.Hover, ve.Tap, ve.Drag, ve.Exit],
        kn = [...An].reverse(),
        Ln = An.length;

      function On(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: n
          }) => function(e, t, n = {}) {
            let i;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const s = t.map((t => Tn(e, t, n)));
              i = Promise.all(s)
            } else if ("string" == typeof t) i = Tn(e, t, n);
            else {
              const s = "function" == typeof t ? vt(e, t, n.custom) : t;
              i = En(e, s, n)
            }
            return i.then((() => e.notify("AnimationComplete", t)))
          }(e, t, n))))
        }(e);
        const n = {
          [ve.Animate]: Vn(!0),
          [ve.InView]: Vn(),
          [ve.Hover]: Vn(),
          [ve.Tap]: Vn(),
          [ve.Drag]: Vn(),
          [ve.Focus]: Vn(),
          [ve.Exit]: Vn()
        };
        let i = !0;
        const s = (t, n) => {
          const i = vt(e, n);
          if (i) {
            const {
              transition: e,
              transitionEnd: n,
              ...s
            } = i;
            t = {
              ...t,
              ...s,
              ...n
            }
          }
          return t
        };

        function r(r, o) {
          const a = e.getProps(),
            l = e.getVariantContext(!0) || {},
            c = [],
            p = new Set;
          let h = {},
            f = 1 / 0;
          for (let t = 0; t < Ln; t++) {
            const v = kn[t],
              y = n[v],
              x = void 0 !== a[v] ? a[v] : l[v],
              w = d(x),
              b = v === o ? y.isActive : null;
            !1 === b && (f = t);
            let S = x === l[v] && x !== a[v] && w;
            if (S && i && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                ...h
              }, !y.isActive && null === b || !x && !y.prevProp || u(x) || "boolean" == typeof x) continue;
            const C = (m = y.prevProp, "string" == typeof(g = x) ? g !== m : !!Array.isArray(g) && !et(g, m));
            let T = C || v === o && y.isActive && !S && w || t > f && w;
            const E = Array.isArray(x) ? x : [x];
            let P = E.reduce(s, {});
            !1 === b && (P = {});
            const {
              prevResolvedValues: M = {}
            } = y, A = {
              ...M,
              ...P
            }, k = e => {
              T = !0, p.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in A) {
              const t = P[e],
                n = M[e];
              h.hasOwnProperty(e) || (t !== n ? ue(t) && ue(n) ? !et(t, n) || C ? k(e) : y.protectedKeys[e] = !0 : void 0 !== t ? k(e) : p.add(e) : void 0 !== t && p.has(e) ? k(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = x, y.prevResolvedValues = P, y.isActive && (h = {
              ...h,
              ...P
            }), i && e.blockInitialAnimation && (T = !1), T && !S && c.push(...E.map((e => ({
              animation: e,
              options: {
                type: v,
                ...r
              }
            }))))
          }
          var m, g;
          if (p.size) {
            const t = {};
            p.forEach((n => {
              const i = e.getBaseTarget(n);
              void 0 !== i && (t[n] = i)
            })), c.push({
              animation: t
            })
          }
          let v = Boolean(c.length);
          return i && !1 === a.initial && !e.manuallyAnimateOnMount && (v = !1), i = !1, v ? t(c) : Promise.resolve()
        }
        return {
          animateChanges: r,
          setActive: function(t, i, s) {
            var o;
            if (n[t].isActive === i) return Promise.resolve();
            null === (o = e.variantChildren) || void 0 === o || o.forEach((e => {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, i)
            })), n[t].isActive = i;
            const a = r(s, t);
            for (const e in n) n[e].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(n) {
            t = n(e)
          },
          getState: () => n
        }
      }

      function Vn(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const $n = {
          animation: Ke((({
            visualElement: e,
            animate: t
          }) => {
            e.animationState || (e.animationState = On(e)), u(t) && (0, i.useEffect)((() => t.subscribe(e)), [t])
          })),
          exit: Ke((e => {
            const {
              custom: t,
              visualElement: n
            } = e, [s, r] = Qe(), a = (0, i.useContext)(o);
            (0, i.useEffect)((() => {
              n.isPresent = s;
              const e = n.animationState && n.animationState.setActive(ve.Exit, !s, {
                custom: a && a.custom || t
              });
              e && !s && e.then(r)
            }), [s])
          }))
        },
        Dn = (e, t) => Math.abs(e - t);
      class Bn {
        constructor(e, t, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = jn(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n = function(e, t) {
                  const n = Dn(e.x, t.x),
                    i = Dn(e.y, t.y);
                  return Math.sqrt(n ** 2 + i ** 2)
                }(e.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!t && !n) return;
              const {
                point: i
              } = e, {
                timestamp: s
              } = ln.w;
              this.history.push({
                ...i,
                timestamp: s
              });
              const {
                onStart: r,
                onMove: o
              } = this.handlers;
              t || (r && r(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = In(t, this.transformPagePoint), we(e) && 0 === e.buttons ? this.handlePointerUp(e, t) : bt.Z_.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i
              } = this.handlers, s = jn(In(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, s), i && i(e, s)
            }, be(e) && e.touches.length > 1) return;
          this.handlers = t, this.transformPagePoint = n;
          const i = In(Ee(e), this.transformPagePoint),
            {
              point: s
            } = i,
            {
              timestamp: r
            } = ln.w;
          this.history = [{
            ...s,
            timestamp: r
          }];
          const {
            onSessionStart: o
          } = t;
          o && o(e, jn(i, this.history)), this.removeListeners = (0, _e.z)(Le(window, "pointermove", this.handlePointerMove), Le(window, "pointerup", this.handlePointerUp), Le(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), bt.qY.update(this.updatePoint)
        }
      }

      function In(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function Rn(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function jn({
        point: e
      }, t) {
        return {
          point: e,
          delta: Rn(e, _n(t)),
          offset: Rn(e, zn(t)),
          velocity: Fn(t, .1)
        }
      }

      function zn(e) {
        return e[0]
      }

      function _n(e) {
        return e[e.length - 1]
      }

      function Fn(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let n = e.length - 1,
          i = null;
        const s = _n(e);
        for (; n >= 0 && (i = e[n], !(s.timestamp - i.timestamp > Et(t)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        const r = (s.timestamp - i.timestamp) / 1e3;
        if (0 === r) return {
          x: 0,
          y: 0
        };
        const o = {
          x: (s.x - i.x) / r,
          y: (s.y - i.y) / r
        };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
      }
      var Nn = n(3967),
        Gn = n(22);

      function Hn(e) {
        return e.max - e.min
      }

      function Wn(e, t = 0, n = .01) {
        return Math.abs(e - t) <= n
      }

      function Un(e, t, n, i = .5) {
        e.origin = i, e.originPoint = (0, Gn.C)(t.min, t.max, e.origin), e.scale = Hn(n) / Hn(t), (Wn(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, Gn.C)(n.min, n.max, e.origin) - e.originPoint, (Wn(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function Yn(e, t, n, i) {
        Un(e.x, t.x, n.x, null == i ? void 0 : i.originX), Un(e.y, t.y, n.y, null == i ? void 0 : i.originY)
      }

      function qn(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + Hn(t)
      }

      function Xn(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + Hn(t)
      }

      function Zn(e, t, n) {
        Xn(e.x, t.x, n.x), Xn(e.y, t.y, n.y)
      }

      function Kn(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function Jn(e, t) {
        let n = t.min - e.min,
          i = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }
      const Qn = .35;

      function ei(e, t, n) {
        return {
          min: ti(e, t),
          max: ti(e, n)
        }
      }

      function ti(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }

      function ni(e) {
        return [e("x"), e("y")]
      }

      function ii({
        top: e,
        left: t,
        right: n,
        bottom: i
      }) {
        return {
          x: {
            min: t,
            max: n
          },
          y: {
            min: e,
            max: i
          }
        }
      }

      function si(e) {
        return void 0 === e || 1 === e
      }

      function ri({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !si(e) || !si(t) || !si(n)
      }

      function oi(e) {
        return ri(e) || ai(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function ai(e) {
        return li(e.x) || li(e.y)
      }

      function li(e) {
        return e && "0%" !== e
      }

      function ci(e, t, n) {
        return n + t * (e - n)
      }

      function di(e, t, n, i, s) {
        return void 0 !== s && (e = ci(e, s, i)), ci(e, n, i) + t
      }

      function ui(e, t = 0, n = 1, i, s) {
        e.min = di(e.min, t, n, i, s), e.max = di(e.max, t, n, i, s)
      }

      function pi(e, {
        x: t,
        y: n
      }) {
        ui(e.x, t.translate, t.scale, t.originPoint), ui(e.y, n.translate, n.scale, n.originPoint)
      }

      function hi(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function fi(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function mi(e, t, [n, i, s]) {
        const r = void 0 !== t[s] ? t[s] : .5,
          o = (0, Gn.C)(e.min, e.max, r);
        ui(e, t[n], t[i], o, t.scale)
      }
      const gi = ["x", "scaleX", "originX"],
        vi = ["y", "scaleY", "originY"];

      function yi(e, t) {
        mi(e.x, t, gi), mi(e.y, t, vi)
      }

      function xi(e, t) {
        return ii(function(e, t) {
          if (!t) return e;
          const n = t({
              x: e.left,
              y: e.top
            }),
            i = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: i.y,
            right: i.x
          }
        }(e.getBoundingClientRect(), t))
      }
      const wi = new WeakMap;
      class bi {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
            x: {
              min: 0,
              max: 0
            },
            y: {
              min: 0,
              max: 0
            }
          }, this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new Bn(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(Ee(e, "page").point)
            },
            onStart: (e, t) => {
              var n;
              const {
                drag: i,
                dragPropagation: s,
                onDragStart: r
              } = this.getProps();
              (!i || s || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Be(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ni((e => {
                var t, n;
                let i = this.getAxisMotionValue(e).get() || 0;
                if (F.aQ.test(i)) {
                  const s = null === (n = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                  s && (i = Hn(s) * (parseFloat(i) / 100))
                }
                this.originPoint[e] = i
              })), null == r || r(e, t), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(ve.Drag, !0))
            },
            onMove: (e, t) => {
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: s,
                onDrag: r
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: o
              } = t;
              if (i && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
                let n = null;
                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
              }(o), void(null !== this.currentDirection && (null == s || s(this.currentDirection)));
              this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), null == r || r(e, t)
            },
            onSessionEnd: (e, t) => this.stop(e, t)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(e, t) {
          const n = this.isDragging;
          if (this.cancel(), !n) return;
          const {
            velocity: i
          } = t;
          this.startAnimation(i);
          const {
            onDragEnd: s
          } = this.getProps();
          null == s || s(e, t)
        }
        cancel() {
          var e, t;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(ve.Drag, !1)
        }
        updateAxis(e, t, n) {
          const {
            drag: i
          } = this.getProps();
          if (!n || !Si(e, i, this.currentDirection)) return;
          const s = this.getAxisMotionValue(e);
          let r = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (r = function(e, {
            min: t,
            max: n
          }, i) {
            return void 0 !== t && e < t ? e = i ? (0, Gn.C)(t, e, i.min) : Math.max(e, t) : void 0 !== n && e > n && (e = i ? (0, Gn.C)(n, e, i.max) : Math.min(e, n)), e
          }(r, this.constraints[e], this.elastic[e])), s.set(r)
        }
        resolveConstraints() {
          const {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, i = this.constraints;
          e && c(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !n) && function(e, {
            top: t,
            left: n,
            bottom: i,
            right: s
          }) {
            return {
              x: Kn(e.x, n, s),
              y: Kn(e.y, t, i)
            }
          }(n.layoutBox, e), this.elastic = function(e = Qn) {
            return !1 === e ? e = 0 : !0 === e && (e = Qn), {
              x: ei(e, "left", "right"),
              y: ei(e, "top", "bottom")
            }
          }(t), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ni((e => {
            this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
              const n = {};
              return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
            }(n.layoutBox[e], this.constraints[e]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: e,
            onMeasureDragConstraints: t
          } = this.getProps();
          if (!e || !c(e)) return !1;
          const n = e.current;
          (0, Tt.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const s = function(e, t, n) {
            const i = xi(e, n),
              {
                scroll: s
              } = t;
            return s && (fi(i.x, s.offset.x), fi(i.y, s.offset.y)), i
          }(n, i.root, this.visualElement.getTransformPagePoint());
          let r = function(e, t) {
            return {
              x: Jn(e.x, t.x),
              y: Jn(e.y, t.y)
            }
          }(i.layout.layoutBox, s);
          if (t) {
            const e = t(function({
              x: e,
              y: t
            }) {
              return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
              }
            }(r));
            this.hasMutatedConstraints = !!e, e && (r = ii(e))
          }
          return r
        }
        startAnimation(e) {
          const {
            drag: t,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: r,
            onDragTransitionEnd: o
          } = this.getProps(), a = this.constraints || {}, l = ni((o => {
            if (!Si(o, t, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[o]) || {};
            r && (l = {
              min: 0,
              max: 0
            });
            const c = i ? 200 : 1e6,
              d = i ? 40 : 1e7,
              u = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: c,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l
              };
            return this.startAxisValueAnimation(o, u)
          }));
          return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return n.start(Cn(e, n, 0, t))
        }
        stopAnimation() {
          ni((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          var t;
          const n = "_drag" + e.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
        }
        snapToCursor(e) {
          ni((t => {
            const {
              drag: n
            } = this.getProps();
            if (!Si(t, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, s = this.getAxisMotionValue(t);
            if (i && i.layout) {
              const {
                min: n,
                max: r
              } = i.layout.layoutBox[t];
              s.set(e[t] - (0, Gn.C)(n, r, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var e;
          if (!this.visualElement.current) return;
          const {
            drag: t,
            dragConstraints: n
          } = this.getProps(), {
            projection: i
          } = this.visualElement;
          if (!c(n) || !i || !this.constraints) return;
          this.stopAnimation();
          const s = {
            x: 0,
            y: 0
          };
          ni((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const n = t.get();
              s[e] = function(e, t) {
                let n = .5;
                const i = Hn(e),
                  s = Hn(t);
                return s > i ? n = (0, Nn.Y)(t.min, t.max - i, e.min) : i > s && (n = (0, Nn.Y)(e.min, e.max - s, t.min)), (0, Ht.u)(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: r
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = r ? r({}, "") : "none", null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout(), this.resolveConstraints(), ni((e => {
            if (!Si(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: i,
                max: r
              } = this.constraints[e];
            n.set((0, Gn.C)(i, r, s[e]))
          }))
        }
        addListeners() {
          var e;
          if (!this.visualElement.current) return;
          wi.set(this.visualElement, this);
          const t = Le(this.visualElement.current, "pointerdown", (e => {
              const {
                drag: t,
                dragListener: n = !0
              } = this.getProps();
              t && n && this.start(e)
            })),
            n = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              c(e) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", n);
          i && !i.layout && (null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout()), n();
          const r = ye(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = i.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (ni((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            r(), t(), s(), null == o || o()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: s = !1,
              dragElastic: r = Qn,
              dragMomentum: o = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o
          }
        }
      }

      function Si(e, t, n) {
        return !(!0 !== t && t !== e || null !== n && n !== e)
      }
      const Ci = {
        pan: Ke((function({
          onPan: e,
          onPanStart: t,
          onPanEnd: n,
          onPanSessionStart: r,
          visualElement: o
        }) {
          const a = e || t || n || r,
            l = (0, i.useRef)(null),
            {
              transformPagePoint: c
            } = (0, i.useContext)(s._),
            d = {
              onSessionStart: r,
              onStart: t,
              onMove: e,
              onEnd: (e, t) => {
                l.current = null, n && n(e, t)
              }
            };
          (0, i.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(d)
          })), Oe(o, "pointerdown", a && function(e) {
            l.current = new Bn(e, d, {
              transformPagePoint: c
            })
          }), ze((() => l.current && l.current.end()))
        })),
        drag: Ke((function(e) {
          const {
            dragControls: t,
            visualElement: n
          } = e, s = (0, x.h)((() => new bi(n)));
          (0, i.useEffect)((() => t && t.subscribe(s)), [s, t]), (0, i.useEffect)((() => s.addListeners()), [s])
        }))
      };

      function Ti(e) {
        return "string" == typeof e && e.startsWith("var(--")
      }
      const Ei = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Pi(e, t, n = 1) {
        (0, Tt.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [i, s] = function(e) {
          const t = Ei.exec(e);
          if (!t) return [, ];
          const [, n, i] = t;
          return [n, i]
        }(e);
        if (!i) return;
        const r = window.getComputedStyle(t).getPropertyValue(i);
        return r ? r.trim() : Ti(s) ? Pi(s, t, n + 1) : s
      }
      const Mi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Ai = e => Mi.has(e),
        ki = (e, t) => {
          e.set(t, !1), e.set(t)
        },
        Li = e => e === _.Rx || e === F.px;
      var Oi;
      ! function(e) {
        e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
      }(Oi || (Oi = {}));
      const Vi = (e, t) => parseFloat(e.split(", ")[t]),
        $i = (e, t) => (n, {
          transform: i
        }) => {
          if ("none" === i || !i) return 0;
          const s = i.match(/^matrix3d\((.+)\)$/);
          if (s) return Vi(s[1], t); {
            const t = i.match(/^matrix\((.+)\)$/);
            return t ? Vi(t[1], e) : 0
          }
        },
        Di = new Set(["x", "y", "z"]),
        Bi = V.filter((e => !Di.has(e))),
        Ii = {
          width: ({
            x: e
          }, {
            paddingLeft: t = "0",
            paddingRight: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({
            y: e
          }, {
            paddingTop: t = "0",
            paddingBottom: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, {
            top: t
          }) => parseFloat(t),
          left: (e, {
            left: t
          }) => parseFloat(t),
          bottom: ({
            y: e
          }, {
            top: t
          }) => parseFloat(t) + (e.max - e.min),
          right: ({
            x: e
          }, {
            left: t
          }) => parseFloat(t) + (e.max - e.min),
          x: $i(4, 13),
          y: $i(5, 14)
        };

      function Ri(e, t, n, i) {
        return (e => Object.keys(e).some(Ai))(t) ? ((e, t, n = {}, i = {}) => {
          t = {
            ...t
          }, i = {
            ...i
          };
          const s = Object.keys(t).filter(Ai);
          let r = [],
            o = !1;
          const a = [];
          if (s.forEach((s => {
              const l = e.getValue(s);
              if (!e.hasValue(s)) return;
              let c = n[s],
                d = ft(c);
              const u = t[s];
              let p;
              if (ue(u)) {
                const e = u.length,
                  t = null === u[0] ? 1 : 0;
                c = u[t], d = ft(c);
                for (let n = t; n < e; n++) p ? (0, Tt.k)(ft(u[n]) === p, "All keyframes must be of the same type") : (p = ft(u[n]), (0, Tt.k)(p === d || Li(d) && Li(p), "Keyframes must be of the same dimension as the current value"))
              } else p = ft(u);
              if (d !== p)
                if (Li(d) && Li(p)) {
                  const e = l.get();
                  "string" == typeof e && l.set(parseFloat(e)), "string" == typeof u ? t[s] = parseFloat(u) : Array.isArray(u) && p === F.px && (t[s] = u.map(parseFloat))
                } else(null == d ? void 0 : d.transform) && (null == p ? void 0 : p.transform) && (0 === c || 0 === u) ? 0 === c ? l.set(p.transform(c)) : t[s] = d.transform(u) : (o || (r = function(e) {
                  const t = [];
                  return Bi.forEach((n => {
                    const i = e.getValue(n);
                    void 0 !== i && (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), o = !0), a.push(s), i[s] = void 0 !== i[s] ? i[s] : t[s], ki(l, u))
            })), a.length) {
            const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              s = ((e, t, n) => {
                const i = t.measureViewportBox(),
                  s = t.current,
                  r = getComputedStyle(s),
                  {
                    display: o
                  } = r,
                  a = {};
                "none" === o && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
                  a[e] = Ii[e](i, r)
                })), t.render();
                const l = t.measureViewportBox();
                return n.forEach((n => {
                  const i = t.getValue(n);
                  ki(i, a[n]), e[n] = Ii[n](l, r)
                })), e
              })(t, e, a);
            return r.length && r.forEach((([t, n]) => {
              e.getValue(t).set(n)
            })), e.render(), y.j && null !== n && window.scrollTo({
              top: n
            }), {
              target: s,
              transitionEnd: i
            }
          }
          return {
            target: t,
            transitionEnd: i
          }
        })(e, t, n, i) : {
          target: t,
          transitionEnd: i
        }
      }
      const ji = {
          current: null
        },
        zi = {
          current: !1
        };
      var _i = n(1560);
      const Fi = Object.keys(v),
        Ni = Fi.length,
        Gi = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Hi {
        constructor({
          parent: e,
          props: t,
          reducedMotionConfig: n,
          visualState: i
        }, s = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => bt.Z_.render(this.render, !1, !0);
          const {
            latestValues: r,
            renderState: o
          } = i;
          this.latestValues = r, this.baseTarget = {
            ...r
          }, this.initialValues = t.initial ? {
            ...r
          } : {}, this.renderState = o, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = h(t), this.isVariantNode = f(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(t);
          for (const e in l) {
            const t = l[e];
            void 0 !== r[e] && B(t) && (t.set(r[e], !1), wt(a) && a.add(e))
          }
        }
        scrapeMotionValuesFromProps(e) {
          return {}
        }
        mount(e) {
          var t;
          this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), zi.current || function() {
            if (zi.current = !0, y.j)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => ji.current = e.matches;
                e.addListener(t), t()
              } else ji.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ji.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var e, t, n;
          null === (e = this.projection) || void 0 === e || e.unmount(), bt.qY.update(this.notifyUpdate), bt.qY.render(this.render), this.valueSubscriptions.forEach((e => e())), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const n = $.has(e),
            i = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && bt.Z_.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            s = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, (() => {
            i(), s()
          }))
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        loadFeatures(e, t, n, s, r, o) {
          const a = [];
          "production" !== Ne && n && t && (0, Tt.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let t = 0; t < Ni; t++) {
            const n = Fi[t],
              {
                isEnabled: s,
                Component: r
              } = v[n];
            s(e) && r && a.push((0, i.createElement)(r, {
              key: n,
              ...e,
              visualElement: this
            }))
          }
          if (!this.projection && r) {
            this.projection = new r(s, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: t,
              layout: n,
              drag: i,
              dragConstraints: a,
              layoutScroll: l
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: Boolean(i) || a && c(a),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: o,
              layoutScroll: l
            })
          }
          return a
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
            x: {
              min: 0,
              max: 0
            },
            y: {
              min: 0,
              max: 0
            }
          }
        }
        getStaticValue(e) {
          return this.latestValues[e]
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t)
        }
        setProps(e) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = e;
          for (let t = 0; t < Gi.length; t++) {
            const n = Gi[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = e["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = function(e, t, n) {
            const {
              willChange: i
            } = t;
            for (const s in t) {
              const r = t[s],
                o = n[s];
              if (B(r)) e.addValue(s, r), wt(i) && i.add(s);
              else if (B(o)) e.addValue(s, (0, tt.B)(r, {
                owner: e
              })), wt(i) && i.remove(s);
              else if (o !== r)
                if (e.hasValue(s)) {
                  const t = e.getValue(s);
                  !t.hasAnimated && t.set(r)
                } else {
                  const t = e.getStaticValue(s);
                  e.addValue(s, (0, tt.B)(void 0 !== t ? t : r))
                }
            }
            for (const i in n) void 0 === t[i] && e.removeValue(i);
            return t
          }(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          var t;
          return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var e;
          return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
        }
        getVariantContext(e = !1) {
          var t, n;
          if (e) return null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext();
          if (!this.isControllingVariants) {
            const e = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
            return void 0 !== this.props.initial && (e.initial = this.props.initial), e
          }
          const i = {};
          for (let e = 0; e < Ui; e++) {
            const t = Wi[e],
              n = this.props[t];
            (d(n) || !1 === n) && (i[t] = n)
          }
          return i
        }
        addVariantChild(e) {
          var t;
          const n = this.getClosestVariantNode();
          if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e), () => n.variantChildren.delete(e)
        }
        addValue(e, t) {
          this.hasValue(e) && this.removeValue(e), this.values.set(e, t), this.latestValues[e] = t.get(), this.bindToMotionValue(e, t)
        }
        removeValue(e) {
          var t;
          this.values.delete(e), null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return void 0 === n && void 0 !== t && (n = (0, tt.B)(t, {
            owner: this
          }), this.addValue(e, n)), n
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t
        }
        getBaseTarget(e) {
          var t;
          const {
            initial: n
          } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (t = de(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
          if (n && void 0 !== i) return i;
          const s = this.getBaseTargetFromProps(this.props, e);
          return void 0 === s || B(s) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : s
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new _i.L), this.events[e].add(t)
        }
        notify(e, ...t) {
          var n;
          null === (n = this.events[e]) || void 0 === n || n.notify(...t)
        }
      }
      const Wi = ["initial", ...An],
        Ui = Wi.length;
      class Yi extends Hi {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
          var n;
          return null === (n = e.style) || void 0 === n ? void 0 : n[t]
        }
        removeValueFromRenderState(e, {
          vars: t,
          style: n
        }) {
          delete t[e], delete n[e]
        }
        makeTargetAnimatableFromInstance({
          transition: e,
          transitionEnd: t,
          ...n
        }, {
          transformValues: i
        }, s) {
          let r = function(e, t, n) {
            var i;
            const s = {};
            for (const r in e) {
              const e = xt(r, t);
              s[r] = void 0 !== e ? e : null === (i = n.getValue(r)) || void 0 === i ? void 0 : i.get()
            }
            return s
          }(n, e || {}, this);
          if (i && (t && (t = i(t)), n && (n = i(n)), r && (r = i(r))), s) {
            ! function(e, t, n) {
              var i, s;
              const r = Object.keys(t).filter((t => !e.hasValue(t))),
                o = r.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  const o = r[a],
                    l = t[o];
                  let c = null;
                  Array.isArray(l) && (c = l[0]), null === c && (c = null !== (s = null !== (i = n[o]) && void 0 !== i ? i : e.readValue(o)) && void 0 !== s ? s : t[o]), null != c && ("string" == typeof c && (/^\-?\d*\.?\d+$/.test(c) || /^0[^.\s]+$/.test(c)) ? c = parseFloat(c) : !gt(c) && nt.P.test(l) && (c = ut(o, l)), e.addValue(o, (0, tt.B)(c, {
                    owner: e
                  })), void 0 === n[o] && (n[o] = c), null !== c && e.setBaseTarget(o, c))
                }
            }(this, n, r);
            const e = ((e, t, n, i) => {
              const s = function(e, {
                ...t
              }, n) {
                const i = e.current;
                if (!(i instanceof Element)) return {
                  target: t,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), e.values.forEach((e => {
                  const t = e.get();
                  if (!Ti(t)) return;
                  const n = Pi(t, i);
                  n && e.set(n)
                }));
                for (const e in t) {
                  const s = t[e];
                  if (!Ti(s)) continue;
                  const r = Pi(s, i);
                  r && (t[e] = r, n && void 0 === n[e] && (n[e] = s))
                }
                return {
                  target: t,
                  transitionEnd: n
                }
              }(e, t, i);
              return Ri(e, t = s.target, n, i = s.transitionEnd)
            })(this, n, r, t);
            t = e.transitionEnd, n = e.target
          }
          return {
            transition: e,
            transitionEnd: t,
            ...n
          }
        }
      }
      class qi extends Yi {
        readValueFromInstance(e, t) {
          if ($.has(t)) {
            const e = dt(t);
            return e && e.default || 0
          } {
            const i = (n = e, window.getComputedStyle(n)),
              s = (j(t) ? i.getPropertyValue(t) : i[t]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var n
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return xi(e, t)
        }
        build(e, t, n, i) {
          H(e, t, n, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e) {
          return le(e)
        }
        renderInstance(e, t, n, i) {
          re(e, t, n, i)
        }
      }
      class Xi extends Yi {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          var n;
          return $.has(t) ? (null === (n = dt(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = oe.has(t) ? t : se(t), e.getAttribute(t))
        }
        measureInstanceViewportBox() {
          return {
            x: {
              min: 0,
              max: 0
            },
            y: {
              min: 0,
              max: 0
            }
          }
        }
        scrapeMotionValuesFromProps(e) {
          return ce(e)
        }
        build(e, t, n, i) {
          ee(e, t, n, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(e, t, n, i) {
          ae(e, t, 0, i)
        }
        mount(e) {
          this.isSVGTag = te(e.tagName), super.mount(e)
        }
      }
      const Zi = (e, t) => L(e) ? new Xi(t, {
        enableHardwareAcceleration: !1
      }) : new qi(t, {
        enableHardwareAcceleration: !0
      });

      function Ki(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const Ji = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!F.px.test(e)) return e;
              e = parseFloat(e)
            }
            return `${Ki(e,t.target.x)}% ${Ki(e,t.target.y)}%`
          }
        },
        Qi = "_$css",
        es = {
          correct: (e, {
            treeScale: t,
            projectionDelta: n
          }) => {
            const i = e,
              s = e.includes("var("),
              r = [];
            s && (e = e.replace(Ei, (e => (r.push(e), Qi))));
            const o = nt.P.parse(e);
            if (o.length > 5) return i;
            const a = nt.P.createTransformer(e),
              l = "number" != typeof o[0] ? 1 : 0,
              c = n.x.scale * t.x,
              d = n.y.scale * t.y;
            o[0 + l] /= c, o[1 + l] /= d;
            const u = (0, Gn.C)(c, d, .5);
            "number" == typeof o[2 + l] && (o[2 + l] /= u), "number" == typeof o[3 + l] && (o[3 + l] /= u);
            let p = a(o);
            if (s) {
              let e = 0;
              p = p.replace(Qi, (() => {
                const t = r[e];
                return e++, t
              }))
            }
            return p
          }
        };
      class ts extends i.Component {
        componentDidMount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: s
          } = e;
          var r;
          r = ns, Object.assign(O, r), s && (t.group && t.group.add(s), n && n.register && i && n.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
          })), w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: n,
            drag: i,
            isPresent: s
          } = this.props, r = n.projection;
          return r ? (r.isPresent = s, i || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? r.promote() : r.relegate() || bt.Z_.postRender((() => {
            var e;
            (null === (e = r.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: e
          } = this.props.visualElement;
          e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n
          } = this.props, {
            projection: i
          } = e;
          i && (i.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
        }
        safeToRemove() {
          const {
            safeToRemove: e
          } = this.props;
          null == e || e()
        }
        render() {
          return null
        }
      }
      const ns = {
          borderRadius: {
            ...Ji,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: Ji,
          borderTopRightRadius: Ji,
          borderBottomLeftRadius: Ji,
          borderBottomRightRadius: Ji,
          boxShadow: es
        },
        is = {
          measureLayout: function(e) {
            const [t, n] = Qe(), s = (0, i.useContext)(S);
            return i.createElement(ts, {
              ...e,
              layoutGroup: s,
              switchLayoutGroup: (0, i.useContext)(T),
              isPresent: t,
              safeToRemove: n
            })
          }
        },
        ss = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rs = ss.length,
        os = e => "string" == typeof e ? parseFloat(e) : e,
        as = e => "number" == typeof e || F.px.test(e);

      function ls(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const cs = us(0, .5, It),
        ds = us(.5, .95, Vt);

      function us(e, t, n) {
        return i => i < e ? 0 : i > t ? 1 : n((0, Nn.Y)(e, t, i))
      }

      function ps(e, t) {
        e.min = t.min, e.max = t.max
      }

      function hs(e, t) {
        ps(e.x, t.x), ps(e.y, t.y)
      }

      function fs(e, t, n, i, s) {
        return e = ci(e -= t, 1 / n, i), void 0 !== s && (e = ci(e, 1 / s, i)), e
      }

      function ms(e, t, [n, i, s], r, o) {
        ! function(e, t = 0, n = 1, i = .5, s, r = e, o = e) {
          if (F.aQ.test(t) && (t = parseFloat(t), t = (0, Gn.C)(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
          let a = (0, Gn.C)(r.min, r.max, i);
          e === r && (a -= t), e.min = fs(e.min, t, n, a, s), e.max = fs(e.max, t, n, a, s)
        }(e, t[n], t[i], t[s], t.scale, r, o)
      }
      const gs = ["x", "scaleX", "originX"],
        vs = ["y", "scaleY", "originY"];

      function ys(e, t, n, i) {
        ms(e.x, t, gs, null == n ? void 0 : n.x, null == i ? void 0 : i.x), ms(e.y, t, vs, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
      }

      function xs(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function ws(e) {
        return xs(e.x) && xs(e.y)
      }

      function bs(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }

      function Ss(e) {
        return Hn(e.x) / Hn(e.y)
      }
      var Cs = n(10);
      class Ts {
        constructor() {
          this.members = []
        }
        add(e) {
          (0, Cs.y4)(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if ((0, Cs.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const e = this.members[this.members.length - 1];
            e && this.promote(e)
          }
        }
        relegate(e) {
          const t = this.members.findIndex((t => e === t));
          if (0 === t) return !1;
          let n;
          for (let e = t; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent) {
              n = t;
              break
            }
          }
          return !!n && (this.promote(n), !0)
        }
        promote(e, t) {
          var n;
          const i = this.lead;
          if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, t && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
            const {
              crossfade: s
            } = e.options;
            !1 === s && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e => {
            var t, n, i, s, r;
            null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (r = null === (i = e.resumingFrom) || void 0 === i ? void 0 : (s = i.options).onExitComplete) || void 0 === r || r.call(s)
          }))
        }
        scheduleRender() {
          this.members.forEach((e => {
            e.instance && e.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function Es(e, t, n) {
        let i = "";
        const s = e.x.translate / t.x,
          r = e.y.translate / t.y;
        if ((s || r) && (i = `translate3d(${s}px, ${r}px, 0) `), 1 === t.x && 1 === t.y || (i += `scale(${1/t.x}, ${1/t.y}) `), n) {
          const {
            rotate: e,
            rotateX: t,
            rotateY: s
          } = n;
          e && (i += `rotate(${e}deg) `), t && (i += `rotateX(${t}deg) `), s && (i += `rotateY(${s}deg) `)
        }
        const o = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return 1 === o && 1 === a || (i += `scale(${o}, ${a})`), i || "none"
      }
      const Ps = (e, t) => e.depth - t.depth;
      class Ms {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          (0, Cs.y4)(this.children, e), this.isDirty = !0
        }
        remove(e) {
          (0, Cs.cl)(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Ps), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const As = ["", "X", "Y", "Z"];
      let ks = 0;

      function Ls({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: s
      }) {
        return class {
          constructor(e, n = {}, i = (null == t ? void 0 : t())) {
            this.id = ks++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach($s), this.nodes.forEach(js), this.nodes.forEach(zs)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ms)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new _i.L), this.eventHandlers.get(e).add(t)
          }
          notifyListeners(e, ...t) {
            const n = this.eventHandlers.get(e);
            null == n || n.notify(...t)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          registerPotentialNode(e, t) {
            this.potentialNodes.set(e, t)
          }
          mount(t, n = !1) {
            var i;
            if (this.instance) return;
            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
            const {
              layoutId: s,
              layout: r,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(t), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (r || s) && (this.isLayoutDirty = !0), e) {
              let n;
              const i = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = on(i, 250), w.hasAnimatedSinceResize && (w.hasAnimatedSinceResize = !1, this.nodes.forEach(Rs))
              }))
            }
            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && o && (s || r) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: i
            }) => {
              var s, r, a, l, c;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const d = null !== (r = null !== (s = this.options.transition) && void 0 !== s ? s : o.getDefaultTransition()) && void 0 !== r ? r : Ws,
                {
                  onLayoutAnimationStart: u,
                  onLayoutAnimationComplete: p
                } = o.getProps(),
                h = !this.targetLayout || !bs(this.targetLayout, i) || n,
                f = !t && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || t && (h || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, f);
                const t = {
                  ...yn(d, "layout"),
                  onPlay: u,
                  onComplete: p
                };
                o.shouldReduceMotion && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || 0 !== this.animationProgress || Rs(this), this.isLead() && (null === (c = (l = this.options).onExitComplete) || void 0 === c || c.call(l));
              this.targetLayout = i
            }))
          }
          unmount() {
            var e, t;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, bt.qY.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var e;
            return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var e;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(_s), this.animationId++)
          }
          willUpdate(e = !0) {
            var t, n, i;
            if (this.root.isUpdateBlocked()) return void(null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              const t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot")
            }
            const {
              layoutId: s,
              layout: r
            } = this.options;
            if (void 0 === s && !r) return;
            const o = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == o ? void 0 : o(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Bs);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Us), this.potentialNodes.clear()), this.nodes.forEach(Is), this.nodes.forEach(Os), this.nodes.forEach(Vs), this.clearAllSnapshots(), bt.iW.update(), bt.iW.preRender(), bt.iW.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(Ds), this.sharedNodes.forEach(Fs)
          }
          scheduleUpdateProjection() {
            bt.Z_.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            bt.Z_.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var e;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == t ? void 0 : t.layoutBox)
          }
          updateScroll(e = "measure") {
            let t = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: i(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var e;
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !ws(this.projectionDelta),
              i = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
              r = null == i ? void 0 : i(this.latestValues, ""),
              o = r !== this.prevTransformTemplateValue;
            t && (n || oi(this.latestValues) || o) && (s(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var i;
            return e && (n = this.removeTransform(n)), Ys((i = n).x), Ys(i.y), {
              animationId: this.root.animationId,
              measuredBox: t,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            const t = e.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (fi(t.x, n.offset.x), fi(t.y, n.offset.y)), t
          }
          removeElementScroll(e) {
            const t = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            hs(t, e);
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: s,
                  options: r
                } = i;
              if (i !== this.root && s && r.layoutScroll) {
                if (s.isRoot) {
                  hs(t, e);
                  const {
                    scroll: n
                  } = this.root;
                  n && (fi(t.x, -n.offset.x), fi(t.y, -n.offset.y))
                }
                fi(t.x, s.offset.x), fi(t.y, s.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const n = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            hs(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const i = this.path[e];
              !t && i.options.layoutScroll && i.scroll && i !== i.root && yi(n, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), oi(i.latestValues) && yi(n, i.latestValues)
            }
            return oi(this.latestValues) && yi(n, this.latestValues), n
          }
          removeTransform(e) {
            var t;
            const n = {
              x: {
                min: 0,
                max: 0
              },
              y: {
                min: 0,
                max: 0
              }
            };
            hs(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const i = this.path[e];
              if (!i.instance) continue;
              if (!oi(i.latestValues)) continue;
              ri(i.latestValues) && i.updateSnapshot();
              const s = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              };
              hs(s, i.measurePageBox()), ys(n, i.latestValues, null === (t = i.snapshot) || void 0 === t ? void 0 : t.layoutBox, s)
            }
            return oi(this.latestValues) && ys(n, this.latestValues), n
          }
          setTargetDelta(e) {
            this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var e;
            const t = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: n,
              layoutId: i
            } = this.options;
            if (this.layout && (n || i)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout ? (this.relativeParent = e, this.relativeTarget = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                }, this.relativeTargetOrigin = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                }, Zn(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), hs(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var s, r, o;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                }, this.targetWithTransforms = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                }), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (s = this.target, r = this.relativeTarget, o = this.relativeParent.target, qn(s.x, r.x, o.x), qn(s.y, r.y, o.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : hs(this.target, this.layout.layoutBox), pi(this.target, this.targetDelta)) : hs(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const e = this.getClosestProjectingParent();
                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                }, this.relativeTargetOrigin = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                }, Zn(this.relativeTargetOrigin, this.target, e.target), hs(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !ri(this.parent.latestValues) && !ai(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var e;
            const {
              isProjectionDirty: t,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const i = this.getLead(),
              s = Boolean(this.resumingFrom) || this !== i;
            let r = !0;
            if (t && (r = !1), s && n && (r = !1), r) return;
            const {
              layout: o,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !o && !a) return;
            hs(this.layoutCorrected, this.layout.layoutBox),
              function(e, t, n, i = !1) {
                var s, r;
                const o = n.length;
                if (!o) return;
                let a, l;
                t.x = t.y = 1;
                for (let c = 0; c < o; c++) a = n[c], l = a.projectionDelta, "contents" !== (null === (r = null === (s = a.instance) || void 0 === s ? void 0 : s.style) || void 0 === r ? void 0 : r.display) && (i && a.options.layoutScroll && a.scroll && a !== a.root && yi(e, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (t.x *= l.x.scale, t.y *= l.y.scale, pi(e, l)), i && oi(a.latestValues) && yi(e, a.latestValues));
                t.x = hi(t.x), t.y = hi(t.y)
              }(this.layoutCorrected, this.treeScale, this.path, s);
            const {
              target: l
            } = i;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = {
              x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
              },
              y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
              }
            }, this.projectionDeltaWithTransform = {
              x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
              },
              y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
              }
            });
            const c = this.treeScale.x,
              d = this.treeScale.y,
              u = this.projectionTransform;
            Yn(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Es(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === c && this.treeScale.y === d || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            var t, n, i;
            null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, t = !1) {
            var n, i;
            const s = this.snapshot,
              r = (null == s ? void 0 : s.latestValues) || {},
              o = {
                ...this.latestValues
              },
              a = {
                x: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
                },
                y: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
                }
              };
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
            const l = {
                x: {
                  min: 0,
                  max: 0
                },
                y: {
                  min: 0,
                  max: 0
                }
              },
              c = (null == s ? void 0 : s.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              d = ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0) <= 1,
              u = Boolean(c && !d && !0 === this.options.crossfade && !this.path.some(Hs));
            this.animationProgress = 0, this.mixTargetDelta = t => {
              var n;
              const i = t / 1e3;
              var s, p, h, f;
              Ns(a.x, e.x, i), Ns(a.y, e.y, i), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (Zn(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), s = this.relativeTarget, p = this.relativeTargetOrigin, h = l, f = i, Gs(s.x, p.x, h.x, f), Gs(s.y, p.y, h.y, f)), c && (this.animationValues = o, function(e, t, n, i, s, r) {
                s ? (e.opacity = (0, Gn.C)(0, void 0 !== n.opacity ? n.opacity : 1, cs(i)), e.opacityExit = (0, Gn.C)(void 0 !== t.opacity ? t.opacity : 1, 0, ds(i))) : r && (e.opacity = (0, Gn.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                for (let s = 0; s < rs; s++) {
                  const r = `border${ss[s]}Radius`;
                  let o = ls(t, r),
                    a = ls(n, r);
                  void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || as(o) === as(a) ? (e[r] = Math.max((0, Gn.C)(os(o), os(a), i), 0), (F.aQ.test(a) || F.aQ.test(o)) && (e[r] += "%")) : e[r] = a)
                }(t.rotate || n.rotate) && (e.rotate = (0, Gn.C)(t.rotate || 0, n.rotate || 0, i))
              }(o, r, this.latestValues, i, u, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
            }, this.mixTargetDelta(0)
          }
          startAnimation(e) {
            var t, n;
            this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (bt.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = bt.Z_.update((() => {
              w.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n = {}) {
                const i = B(e) ? e : (0, tt.B)(e);
                return i.start(Cn("", i, t, n)), {
                  stop: () => i.stop(),
                  isAnimating: () => i.isAnimating()
                }
              }(0, 1e3, {
                ...e,
                onUpdate: t => {
                  var n;
                  this.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                },
                onComplete: () => {
                  var t;
                  null === (t = e.onComplete) || void 0 === t || t.call(e), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var e;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var e;
            this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const e = this.getLead();
            let {
              targetWithTransforms: t,
              target: n,
              layout: i,
              latestValues: s
            } = e;
            if (t && n && i) {
              if (this !== e && this.layout && i && qs(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                };
                const t = Hn(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                const i = Hn(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + i
              }
              hs(t, n), yi(t, s), Yn(this.projectionDeltaWithTransform, this.layoutCorrected, t, s)
            }
          }
          registerSharedNode(e, t) {
            var n, i, s;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Ts), this.sharedNodes.get(e).add(t), t.promote({
              transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (s = null === (i = t.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === s ? void 0 : s.call(i, t)
            })
          }
          isLead() {
            const e = this.getStack();
            return !e || e.lead === this
          }
          getLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
          }
          getPrevLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n
          } = {}) {
            const i = this.getStack();
            i && i.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
              transition: t
            })
          }
          relegate() {
            const e = this.getStack();
            return !!e && e.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1;
            const {
              latestValues: n
            } = e;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
            const i = {};
            for (let t = 0; t < As.length; t++) {
              const s = "rotate" + As[t];
              n[s] && (i[s] = n[s], e.setStaticValue(s, 0))
            }
            null == e || e.render();
            for (const t in i) e.setStaticValue(t, i[t]);
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var t, n, i;
            const s = {};
            if (!this.instance || this.isSVG) return s;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            s.visibility = "";
            const r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = pe(e.pointerEvents) || "", s.transform = r ? r(this.latestValues, "") : "none", s;
            const o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = pe(e.pointerEvents) || ""), this.hasProjected && !oi(this.latestValues) && (t.transform = r ? r({}, "") : "none", this.hasProjected = !1), t
            }
            const a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(), s.transform = Es(this.projectionDeltaWithTransform, this.treeScale, a), r && (s.transform = r(a, s.transform));
            const {
              x: l,
              y: c
            } = this.projectionDelta;
            s.transformOrigin = `${100*l.origin}% ${100*c.origin}% 0`, o.animationValues ? s.opacity = o === this ? null !== (i = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : s.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const e in O) {
              if (void 0 === a[e]) continue;
              const {
                correct: t,
                applyTo: n
              } = O[e], i = t(a[e], o);
              if (n) {
                const e = n.length;
                for (let t = 0; t < e; t++) s[n[t]] = i
              } else s[e] = i
            }
            return this.options.layoutId && (s.pointerEvents = o === this ? pe(e.pointerEvents) || "" : "none"), s
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(Bs), this.root.sharedNodes.clear()
          }
        }
      }

      function Os(e) {
        e.updateLayout()
      }

      function Vs(e) {
        var t, n, i;
        const s = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: n
          } = e.layout, {
            animationType: i
          } = e.options, r = s.source !== e.layout.source;
          "size" === i ? ni((e => {
            const n = r ? s.measuredBox[e] : s.layoutBox[e],
              i = Hn(n);
            n.min = t[e].min, n.max = n.min + i
          })) : qs(i, s.layoutBox, t) && ni((e => {
            const n = r ? s.measuredBox[e] : s.layoutBox[e],
              i = Hn(t[e]);
            n.max = n.min + i
          }));
          const o = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            }
          };
          Yn(o, t, s.layoutBox);
          const a = {
            x: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            },
            y: {
              translate: 0,
              scale: 1,
              origin: 0,
              originPoint: 0
            }
          };
          r ? Yn(a, e.applyTransform(n, !0), s.measuredBox) : Yn(a, t, s.layoutBox);
          const l = !ws(o);
          let c = !1;
          if (!e.resumeFrom) {
            const n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: e,
                layout: i
              } = n;
              if (e && i) {
                const n = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                };
                Zn(n, s.layoutBox, e.layoutBox);
                const r = {
                  x: {
                    min: 0,
                    max: 0
                  },
                  y: {
                    min: 0,
                    max: 0
                  }
                };
                Zn(r, t, i.layoutBox), bs(n, r) || (c = !0)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: s,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c
          })
        } else e.isLead() && (null === (i = (n = e.options).onExitComplete) || void 0 === i || i.call(n));
        e.options.transition = void 0
      }

      function $s(e) {
        e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
      }

      function Ds(e) {
        e.clearSnapshot()
      }

      function Bs(e) {
        e.clearMeasurements()
      }

      function Is(e) {
        const {
          visualElement: t
        } = e.options;
        (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function Rs(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
      }

      function js(e) {
        e.resolveTargetDelta()
      }

      function zs(e) {
        e.calcProjection()
      }

      function _s(e) {
        e.resetRotation()
      }

      function Fs(e) {
        e.removeLeadSnapshot()
      }

      function Ns(e, t, n) {
        e.translate = (0, Gn.C)(t.translate, 0, n), e.scale = (0, Gn.C)(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function Gs(e, t, n, i) {
        e.min = (0, Gn.C)(t.min, n.min, i), e.max = (0, Gn.C)(t.max, n.max, i)
      }

      function Hs(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const Ws = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function Us(e, t) {
        let n = e.root;
        for (let t = e.path.length - 1; t >= 0; t--)
          if (Boolean(e.path[t].instance)) {
            n = e.path[t];
            break
          } const i = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
        i && e.mount(i, !0)
      }

      function Ys(e) {
        e.min = Math.round(e.min), e.max = Math.round(e.max)
      }

      function qs(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !Wn(Ss(t), Ss(n), .2)
      }
      const Xs = Ls({
          attachResizeListener: (e, t) => ye(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        Zs = {
          current: void 0
        },
        Ks = Ls({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!Zs.current) {
              const e = new Xs(0, {});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), Zs.current = e
            }
            return Zs.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        Js = {
          ...$n,
          ...Je,
          ...Ci,
          ...is
        },
        Qs = A(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, n, i, s) {
          return {
            ...L(e) ? me : ge,
            preloadedFeatures: n,
            useRender: ie(t),
            createVisualElement: i,
            projectionNodeConstructor: s,
            Component: e
          }
        }(e, t, Js, Zi, Ks)))
    },
    10: (e, t, n) => {
      "use strict";

      function i(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function s(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      n.d(t, {
        cl: () => s,
        y4: () => i
      })
    },
    4169: (e, t, n) => {
      "use strict";
      n.d(t, {
        u: () => i
      });
      const i = (e, t, n) => Math.min(Math.max(n, e), t)
    },
    5367: (e, t, n) => {
      "use strict";
      n.d(t, {
        s: () => C
      });
      var i = n(3930),
        s = n(5385),
        r = n(4169),
        o = n(22);

      function a(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      var l = n(6382),
        c = n(819),
        d = n(3184);
      const u = (e, t, n) => {
          const i = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - i) + i))
        },
        p = [l.$, c.m, d.J];

      function h(e) {
        const t = (n = e, p.find((e => e.test(n))));
        var n;
        (0, i.k)(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let s = t.parse(e);
        return t === d.J && (s = function({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: i
        }) {
          e /= 360, n /= 100;
          let s = 0,
            r = 0,
            o = 0;
          if (t /= 100) {
            const i = n < .5 ? n * (1 + t) : n + t - n * t,
              l = 2 * n - i;
            s = a(l, i, e + 1 / 3), r = a(l, i, e), o = a(l, i, e - 1 / 3)
          } else s = r = o = n;
          return {
            red: Math.round(255 * s),
            green: Math.round(255 * r),
            blue: Math.round(255 * o),
            alpha: i
          }
        }(s)), s
      }
      const f = (e, t) => {
        const n = h(e),
          i = h(t),
          s = {
            ...n
          };
        return e => (s.red = u(n.red, i.red, e), s.green = u(n.green, i.green, e), s.blue = u(n.blue, i.blue, e), s.alpha = (0, o.C)(n.alpha, i.alpha, e), c.m.transform(s))
      };
      var m = n(3624),
        g = n(1550);

      function v(e, t) {
        return "number" == typeof e ? n => (0, o.C)(e, t, n) : s.$.test(e) ? f(e, t) : w(e, t)
      }
      const y = (e, t) => {
          const n = [...e],
            i = n.length,
            s = e.map(((e, n) => v(e, t[n])));
          return e => {
            for (let t = 0; t < i; t++) n[t] = s[t](e);
            return n
          }
        },
        x = (e, t) => {
          const n = {
              ...e,
              ...t
            },
            i = {};
          for (const s in n) void 0 !== e[s] && void 0 !== t[s] && (i[s] = v(e[s], t[s]));
          return e => {
            for (const t in i) n[t] = i[t](e);
            return n
          }
        },
        w = (e, t) => {
          const n = g.P.createTransformer(t),
            s = (0, g.V)(e),
            r = (0, g.V)(t);
          return s.numColors === r.numColors && s.numNumbers >= r.numNumbers ? (0, m.z)(y(s.values, r.values), n) : ((0, i.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
        };
      var b = n(3967);
      const S = (e, t) => n => (0, o.C)(e, t, n);

      function C(e, t, {
        clamp: n = !0,
        ease: o,
        mixer: a
      } = {}) {
        const l = e.length;
        (0, i.k)(l === t.length, "Both input and output ranges must be the same length"), (0, i.k)(!o || !Array.isArray(o) || o.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const c = function(e, t, n) {
            const i = [],
              r = n || ("number" == typeof(o = e[0]) ? S : "string" == typeof o ? s.$.test(o) ? f : w : Array.isArray(o) ? y : "object" == typeof o ? x : S);
            var o;
            const a = e.length - 1;
            for (let n = 0; n < a; n++) {
              let s = r(e[n], e[n + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[n] : t;
                s = (0, m.z)(e, s)
              }
              i.push(s)
            }
            return i
          }(t, o, a),
          d = c.length,
          u = t => {
            let n = 0;
            if (d > 1)
              for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            const i = (0, b.Y)(e[n], e[n + 1], t);
            return c[n](i)
          };
        return n ? t => u((0, r.u)(e[0], e[l - 1], t)) : u
      }
    },
    1741: (e, t, n) => {
      "use strict";
      n.d(t, {
        j: () => i
      });
      const i = "undefined" != typeof document
    },
    22: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => i
      });
      const i = (e, t, n) => -n * e + n * t + e
    },
    3624: (e, t, n) => {
      "use strict";
      n.d(t, {
        z: () => s
      });
      const i = (e, t) => n => t(e(n)),
        s = (...e) => e.reduce(i)
    },
    3967: (e, t, n) => {
      "use strict";
      n.d(t, {
        Y: () => i
      });
      const i = (e, t, n) => {
        const i = t - e;
        return 0 === i ? 1 : (n - e) / i
      }
    },
    1560: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => s
      });
      var i = n(10);
      class s {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return (0, i.y4)(this.subscriptions, e), () => (0, i.cl)(this.subscriptions, e)
        }
        notify(e, t, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](e, t, n);
            else
              for (let s = 0; s < i; s++) {
                const i = this.subscriptions[s];
                i && i(e, t, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
    },
    6681: (e, t, n) => {
      "use strict";
      n.d(t, {
        h: () => s
      });
      var i = n(822);

      function s(e) {
        const t = (0, i.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
    },
    8868: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => s
      });
      var i = n(822);
      const s = n(1741).j ? i.useLayoutEffect : i.useEffect
    },
    3038: (e, t, n) => {
      "use strict";

      function i(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      n.d(t, {
        R: () => i
      })
    },
    6034: (e, t, n) => {
      "use strict";
      n.d(t, {
        O: () => s
      });
      const i = new Set;

      function s(e, t, n) {
        e || i.has(t) || (console.warn(t), n && console.warn(n), i.add(t))
      }
    },
    3234: (e, t, n) => {
      "use strict";
      n.d(t, {
        B: () => l
      });
      var i = n(7367),
        s = n(4991),
        r = n(1560),
        o = n(3038);
      class a {
        constructor(e, t = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: n,
              timestamp: r
            } = i.w;
            this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, s.Z_.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => s.Z_.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: e
          }) => {
            e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = t.owner
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new r.L), this.events[e].add(t)
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear()
        }
        attach(e) {
          this.passiveEffect = e
        }
        set(e, t = !0) {
          t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, n) {
          this.set(t), this.prev = e, this.timeDelta = n
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, o.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(e) {
          return this.stop(), new Promise((t => {
            this.hasAnimated = !0, this.stopAnimation = e(t), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function l(e, t) {
        return new a(e, t)
      }
    },
    6116: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => H
      });
      var i = n(6034);

      function s(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (i = Object.getOwnPropertySymbols(e); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]])
        }
        return n
      }
      Object.create, Object.create;
      const r = new WeakMap;
      let o;

      function a(e) {
        let {
          target: t,
          contentRect: n,
          borderBoxSize: i
        } = e;
        var s;
        null === (s = r.get(t)) || void 0 === s || s.forEach((e => {
          e({
            target: t,
            contentSize: n,
            get size() {
              return function(e, t) {
                if (t) {
                  const {
                    inlineSize: e,
                    blockSize: n
                  } = t[0];
                  return {
                    width: e,
                    height: n
                  }
                }
                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                  width: e.offsetWidth,
                  height: e.offsetHeight
                }
              }(t, i)
            }
          })
        }))
      }

      function l(e) {
        e.forEach(a)
      }
      const c = new Set;
      let d;
      const u = e => "function" == typeof e;

      function p(e, t) {
        return u(e) ? (n = e, c.add(n), d || (d = () => {
          const e = {
              width: window.innerWidth,
              height: window.innerHeight
            },
            t = {
              target: window,
              size: e,
              contentSize: e
            };
          c.forEach((e => e(t)))
        }, window.addEventListener("resize", d)), () => {
          c.delete(n), !c.size && d && (d = void 0)
        }) : function(e, t) {
          o || "undefined" != typeof ResizeObserver && (o = new ResizeObserver(l));
          const n = function(e, t) {
            return "string" == typeof e ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
          }(e);
          return n.forEach((e => {
            let n = r.get(e);
            n || (n = new Set, r.set(e, n)), n.add(t), null == o || o.observe(e)
          })), () => {
            n.forEach((e => {
              const n = r.get(e);
              null == n || n.delete(t), (null == n ? void 0 : n.size) || null == o || o.unobserve(e)
            }))
          }
        }(e, t);
        var n
      }
      const h = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e),
        f = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function m(e, t, n, i) {
        const s = n[t],
          {
            length: r,
            position: o
          } = f[t],
          a = s.current,
          l = n.time;
        s.current = e["scroll" + o], s.scrollLength = e["scroll" + r] - e["client" + r], s.offset.length = 0, s.offset[0] = 0, s.offset[1] = s.scrollLength, s.progress = h(0, s.scrollLength, s.current);
        const c = i - l;
        var d, u;
        s.velocity = c > 50 ? 0 : (d = s.current - a, (u = c) ? d * (1e3 / u) : 0)
      }

      function g(e, t, n) {
        m(e, "x", t, n), m(e, "y", t, n), t.time = n
      }
      const v = e => e,
        y = (e, t, n) => -n * e + n * t + e;

      function x(e, t) {
        const n = e[e.length - 1];
        for (let i = 1; i <= t; i++) {
          const s = h(0, t, i);
          e.push(y(n, 1, s))
        }
      }

      function w(e) {
        const t = [0];
        return x(t, e - 1), t
      }
      const b = e => "number" == typeof e;

      function S(e, t) {
        return (e => Array.isArray(e) && !b(e[0]))(e) ? e[((e, t, n) => {
          const i = t - 0;
          return ((n - 0) % i + i) % i + 0
        })(0, e.length, t)] : e
      }
      const C = (e, t, n) => Math.min(Math.max(n, e), t),
        T = {
          Enter: [
            [0, 1],
            [1, 1]
          ],
          Exit: [
            [0, 0],
            [1, 0]
          ],
          Any: [
            [1, 0],
            [0, 1]
          ],
          All: [
            [0, 0],
            [1, 1]
          ]
        },
        E = e => "string" == typeof e,
        P = {
          start: 0,
          center: .5,
          end: 1
        };

      function M(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = 0;
        if (void 0 !== P[e] && (e = P[e]), E(e)) {
          const t = parseFloat(e);
          e.endsWith("px") ? i = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? i = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? i = t / 100 * document.documentElement.clientHeight : e = t
        }
        return b(e) && (i = t * e), n + i
      }
      const A = [0, 0];

      function k(e, t, n, i) {
        let s = Array.isArray(e) ? e : A,
          r = 0,
          o = 0;
        return b(e) ? s = [e, e] : E(e) && (s = (e = e.trim()).includes(" ") ? e.split(" ") : [e, P[e] ? e : "0"]), r = M(s[0], n, i), o = M(s[1], t), r - o
      }
      const L = {
        x: 0,
        y: 0
      };

      function O(e, t, n) {
        let {
          offset: i = T.All
        } = n;
        const {
          target: s = e,
          axis: r = "y"
        } = n, o = "y" === r ? "height" : "width", a = s !== e ? function(e, t) {
          let n = {
              x: 0,
              y: 0
            },
            i = e;
          for (; i && i !== t;)
            if (i instanceof HTMLElement) n.x += i.offsetLeft, n.y += i.offsetTop, i = i.offsetParent;
            else if (i instanceof SVGGraphicsElement && "getBBox" in i) {
            const {
              top: e,
              left: t
            } = i.getBBox();
            for (n.x += t, n.y += e; i && "svg" !== i.tagName;) i = i.parentNode
          }
          return n
        }(s, e) : L, l = s === e ? {
          width: e.scrollWidth,
          height: e.scrollHeight
        } : {
          width: s.clientWidth,
          height: s.clientHeight
        }, c = {
          width: e.clientWidth,
          height: e.clientHeight
        };
        t[r].offset.length = 0;
        let d = !t[r].interpolate;
        const u = i.length;
        for (let e = 0; e < u; e++) {
          const n = k(i[e], c[o], l[o], a[r]);
          d || n === t[r].interpolatorOffsets[e] || (d = !0), t[r].offset[e] = n
        }
        d && (t[r].interpolate = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w(e.length),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
          const i = e.length,
            s = i - t.length;
          return s > 0 && x(t, s), s => {
            let r = 0;
            for (; r < i - 2 && !(s < t[r + 1]); r++);
            let o = C(0, 1, h(t[r], t[r + 1], s));
            return o = S(n, r)(o), y(e[r], e[r + 1], o)
          }
        }(w(u), t[r].offset), t[r].interpolatorOffsets = [...t[r].offset]), t[r].progress = t[r].interpolate(t[r].current)
      }

      function V(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
          let i = t;
          for (; i && i != e;) n.x.targetOffset += i.offsetLeft, n.y.targetOffset += i.offsetTop, i = i.offsetParent
        }
        n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
      }

      function $(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const s = i.axis || "y";
        return {
          measure: () => V(e, i.target, n),
          update: t => {
            g(e, n, t), (i.offset || i.target) && O(e, n, i)
          },
          notify: u(t) ? () => t(n) : D(t, n[s])
        }
      }

      function D(e, t) {
        return e.pause(), e.forEachNative(((e, t) => {
          let {
            easing: n
          } = t;
          var i, s;
          if (e.updateDuration) n || (e.easing = v), e.updateDuration(1);
          else {
            const t = {
              duration: 1e3
            };
            n || (t.easing = "linear"), null === (s = null === (i = e.effect) || void 0 === i ? void 0 : i.updateTiming) || void 0 === s || s.call(i, t)
          }
        })), () => {
          e.currentTime = t.progress
        }
      }
      const B = new WeakMap,
        I = new WeakMap,
        R = new WeakMap,
        j = e => e === document.documentElement ? window : e;
      var z = n(3234),
        _ = n(6681),
        F = n(822),
        N = n(8868);
      const G = () => ({
        scrollX: (0, z.B)(0),
        scrollY: (0, z.B)(0),
        scrollXProgress: (0, z.B)(0),
        scrollYProgress: (0, z.B)(0)
      });

      function H() {
        return (0, i.O)(!1, "useViewportScroll is deprecated. Convert to useScroll()."),
          function({
            container: e,
            target: t,
            layoutEffect: n = !0,
            ...i
          } = {}) {
            const r = (0, _.h)(G);
            return (n ? N.L : F.useEffect)((() => function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              var {
                container: n = document.documentElement
              } = t, i = s(t, ["container"]);
              let r = R.get(n);
              r || (r = new Set, R.set(n, r));
              const o = $(n, e, {
                time: 0,
                x: {
                  current: 0,
                  offset: [],
                  progress: 0,
                  scrollLength: 0,
                  targetOffset: 0,
                  targetLength: 0,
                  containerLength: 0,
                  velocity: 0
                },
                y: {
                  current: 0,
                  offset: [],
                  progress: 0,
                  scrollLength: 0,
                  targetOffset: 0,
                  targetLength: 0,
                  containerLength: 0,
                  velocity: 0
                }
              }, i);
              if (r.add(o), !B.has(n)) {
                const e = () => {
                  const e = performance.now();
                  for (const e of r) e.measure();
                  for (const t of r) t.update(e);
                  for (const e of r) e.notify()
                };
                B.set(n, e);
                const t = j(n);
                window.addEventListener("resize", e, {
                  passive: !0
                }), n !== document.documentElement && I.set(n, p(n, e)), t.addEventListener("scroll", e, {
                  passive: !0
                })
              }
              const a = B.get(n),
                l = requestAnimationFrame(a);
              return () => {
                var t;
                "function" != typeof e && e.stop(), cancelAnimationFrame(l);
                const i = R.get(n);
                if (!i) return;
                if (i.delete(o), i.size) return;
                const s = B.get(n);
                B.delete(n), s && (j(n).removeEventListener("scroll", s), null === (t = I.get(n)) || void 0 === t || t(), window.removeEventListener("resize", s))
              }
            }((({
              x: e,
              y: t
            }) => {
              r.scrollX.set(e.current), r.scrollXProgress.set(e.progress), r.scrollY.set(t.current), r.scrollYProgress.set(t.progress)
            }), {
              ...i,
              container: (null == e ? void 0 : e.current) || void 0,
              target: (null == t ? void 0 : t.current) || void 0
            })), []), r
          }()
      }
    },
    6382: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => s
      });
      var i = n(819);
      const s = {
        test: (0, n(8834).i)("#"),
        parse: function(e) {
          let t = "",
            n = "",
            i = "",
            s = "";
          return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), i = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), i = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, i += i, s += s), {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1
          }
        },
        transform: i.m.transform
      }
    },
    3184: (e, t, n) => {
      "use strict";
      n.d(t, {
        J: () => a
      });
      var i = n(1649),
        s = n(6190),
        r = n(6430),
        o = n(8834);
      const a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: o = 1
        }) => "hsla(" + Math.round(e) + ", " + s.aQ.transform((0, r.Nw)(t)) + ", " + s.aQ.transform((0, r.Nw)(n)) + ", " + (0, r.Nw)(i.Fq.transform(o)) + ")"
      }
    },
    5385: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => a
      });
      var i = n(6430),
        s = n(6382),
        r = n(3184),
        o = n(819);
      const a = {
        test: e => o.m.test(e) || s.$.test(e) || r.J.test(e),
        parse: e => o.m.test(e) ? o.m.parse(e) : r.J.test(e) ? r.J.parse(e) : s.$.parse(e),
        transform: e => (0, i.HD)(e) ? e : e.hasOwnProperty("red") ? o.m.transform(e) : r.J.transform(e)
      }
    },
    819: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => l
      });
      var i = n(4169),
        s = n(1649),
        r = n(6430),
        o = n(8834);
      const a = {
          ...s.Rx,
          transform: e => Math.round((e => (0, i.u)(0, 255, e))(e))
        },
        l = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + a.transform(e) + ", " + a.transform(t) + ", " + a.transform(n) + ", " + (0, r.Nw)(s.Fq.transform(i)) + ")"
        }
    },
    8834: (e, t, n) => {
      "use strict";
      n.d(t, {
        d: () => r,
        i: () => s
      });
      var i = n(6430);
      const s = (e, t) => n => Boolean((0, i.HD)(n) && i.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
        r = (e, t, n) => s => {
          if (!(0, i.HD)(s)) return s;
          const [r, o, a, l] = s.match(i.KP);
          return {
            [e]: parseFloat(r),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    1550: (e, t, n) => {
      "use strict";
      n.d(t, {
        P: () => p,
        V: () => l
      });
      var i = n(5385),
        s = n(1649),
        r = n(6430);
      const o = "${c}",
        a = "${n}";

      function l(e) {
        "number" == typeof e && (e = `${e}`);
        const t = [];
        let n = 0,
          l = 0;
        const c = e.match(r.dA);
        c && (n = c.length, e = e.replace(r.dA, o), t.push(...c.map(i.$.parse)));
        const d = e.match(r.KP);
        return d && (l = d.length, e = e.replace(r.KP, a), t.push(...d.map(s.Rx.parse))), {
          values: t,
          numColors: n,
          numNumbers: l,
          tokenised: e
        }
      }

      function c(e) {
        return l(e).values
      }

      function d(e) {
        const {
          values: t,
          numColors: n,
          tokenised: s
        } = l(e), c = t.length;
        return e => {
          let t = s;
          for (let s = 0; s < c; s++) t = t.replace(s < n ? o : a, s < n ? i.$.transform(e[s]) : (0, r.Nw)(e[s]));
          return t
        }
      }
      const u = e => "number" == typeof e ? 0 : e,
        p = {
          test: function(e) {
            var t, n;
            return isNaN(e) && (0, r.HD)(e) && ((null === (t = e.match(r.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(r.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: c,
          createTransformer: d,
          getAnimatableNone: function(e) {
            const t = c(e);
            return d(e)(t.map(u))
          }
        }
    },
    1649: (e, t, n) => {
      "use strict";
      n.d(t, {
        Fq: () => r,
        Rx: () => s,
        bA: () => o
      });
      var i = n(4169);
      const s = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        r = {
          ...s,
          transform: e => (0, i.u)(0, 1, e)
        },
        o = {
          ...s,
          default: 1
        }
    },
    6190: (e, t, n) => {
      "use strict";
      n.d(t, {
        $C: () => d,
        RW: () => r,
        aQ: () => o,
        px: () => a,
        vh: () => l,
        vw: () => c
      });
      var i = n(6430);
      const s = e => ({
          test: t => (0, i.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        r = s("deg"),
        o = s("%"),
        a = s("px"),
        l = s("vh"),
        c = s("vw"),
        d = {
          ...o,
          parse: e => o.parse(e) / 100,
          transform: e => o.transform(100 * e)
        }
    },
    6430: (e, t, n) => {
      "use strict";
      n.d(t, {
        HD: () => a,
        KP: () => s,
        Nw: () => i,
        dA: () => r,
        mj: () => o
      });
      const i = e => Math.round(1e5 * e) / 1e5,
        s = /(-)?([\d]*\.?[\d])+/g,
        r = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function a(e) {
        return "string" == typeof e
      }
    },
    64: (e, t, n) => {
      "use strict";
      n.d(t, {
        H: () => u
      });
      var i = n(5367),
        s = n(822),
        r = n(3234),
        o = n(6014),
        a = n(6681),
        l = n(8868),
        c = n(4991);

      function d(e, t) {
        const n = function(e) {
            const t = (0, a.h)((() => (0, r.B)(e))),
              {
                isStatic: n
              } = (0, s.useContext)(o._);
            if (n) {
              const [, n] = (0, s.useState)(e);
              (0, s.useEffect)((() => t.on("change", n)), [])
            }
            return t
          }(t()),
          i = () => n.set(t());
        return i(),
          function(e, t, n) {
            (0, l.L)((() => {
              const n = e.map((e => e.on("change", t)));
              return () => {
                n.forEach((e => e())), c.qY.update(i)
              }
            }))
          }(e, (() => c.Z_.update(i, !1, !0))), n
      }

      function u(e, t, n, s) {
        const r = "function" == typeof t ? t : function(...e) {
          const t = !Array.isArray(e[0]),
            n = t ? 0 : -1,
            s = e[0 + n],
            r = e[1 + n],
            o = e[2 + n],
            a = e[3 + n],
            l = (0, i.s)(r, o, {
              mixer: (c = o[0], (e => "object" == typeof e && e.mix)(c) ? c.mix : void 0),
              ...a
            });
          var c;
          return t ? l(s) : l
        }(t, n, s);
        return Array.isArray(e) ? p(e, r) : p([e], (([e]) => r(e)))
      }

      function p(e, t) {
        const n = (0, a.h)((() => []));
        return d(e, (() => {
          n.length = 0;
          const i = e.length;
          for (let t = 0; t < i; t++) n[t] = e[t].get();
          return t(n)
        }))
      }
    }
  }
]);