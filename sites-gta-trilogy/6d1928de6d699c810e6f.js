/*! For license information please see 6d1928de6d699c810e6f.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [424], {
    4964: (e, t, n) => {
      "use strict";
      n.d(t, {
        S1: () => i
      });
      var s = n(4932);
      const i = function(e, t) {
        let {
          threshold: n = 0,
          root: i = null,
          rootMargin: r = "0%",
          freezeOnceVisible: o = !1
        } = t;
        const [a, l] = (0, s.useState)(), c = (null == a ? void 0 : a.isIntersecting) && o, d = e => {
          let [t] = e;
          l(t)
        };
        return (0, s.useEffect)((() => {
          const t = null == e ? void 0 : e.current;
          if (!window.IntersectionObserver || c || !t) return;
          const s = new IntersectionObserver(d, {
            threshold: n,
            root: i,
            rootMargin: r
          });
          return s.observe(t), () => s.disconnect()
        }), [null == e ? void 0 : e.current, JSON.stringify(n), i, r, c]), a
      };
      "undefined" != typeof window ? s.useLayoutEffect : s.useEffect
    },
    92: (e, t, n) => {
      "use strict";
      n.d(t, {
        K: () => s,
        k: () => i
      });
      var s = function() {},
        i = function() {}
    },
    1865: e => {
      var t, n, s = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function r() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
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
                return n(e)
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
      s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || c || o(p)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = f, s.addListener = f, s.once = f, s.off = f, s.removeListener = f, s.removeAllListeners = f, s.emit = f, s.prependListener = f, s.prependOnceListener = f, s.listeners = function(e) {
        return []
      }, s.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, s.cwd = function() {
        return "/"
      }, s.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, s.umask = function() {
        return 0
      }
    },
    3970: (e, t, n) => {
      "use strict";
      var s = n(4932),
        i = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var s, l = {},
          c = null,
          d = null;
        for (s in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) r.call(t, s) && !a.hasOwnProperty(s) && (l[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === l[s] && (l[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: d,
          props: l,
          _owner: o.current
        }
      }
      t.jsx = l, t.jsxs = l
    },
    6160: (e, t, n) => {
      "use strict";
      e.exports = n(3970)
    },
    822: (e, t, n) => {
      "use strict";
      n.d(t, {
        tq: () => x,
        o5: () => S
      });
      var s = n(4932),
        i = n(7131);

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
        const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ").map((e => e.trim())).filter((e => !!e)),
          t = [];
        return e.forEach((e => {
          t.indexOf(e) < 0 && t.push(e)
        })), t.join(" ")
      }
      const u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
        p = (e, t) => {
          let n = t.slidesPerView;
          if (t.breakpoints) {
            const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
              s = e in t.breakpoints ? t.breakpoints[e] : void 0;
            s && s.slidesPerView && (n = s.slidesPerView)
          }
          let s = Math.ceil(parseFloat(t.loopedSlides || n, 10));
          return s += t.loopAdditionalSlides, s > e.length && t.loopedSlidesLimit && (s = e.length), s
        };

      function h(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function f(e) {
        const t = [];
        return s.Children.toArray(e).forEach((e => {
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
        return s.Children.toArray(e).forEach((e => {
          if (h(e)) t.push(e);
          else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const s = f(e.props.children);
            s.length > 0 ? s.forEach((e => t.push(e))) : n["container-end"].push(e)
          } else n["container-end"].push(e)
        })), {
          slides: t,
          slots: n
        }
      }

      function g(e, t) {
        return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
      }
      const v = (0, s.createContext)(null),
        y = (0, s.createContext)(null);

      function w() {
        return w = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
          }
          return e
        }, w.apply(this, arguments)
      }
      const x = (0, s.forwardRef)((function(e, t) {
        let {
          className: n,
          tag: h = "div",
          wrapperTag: f = "div",
          children: v,
          onSwiper: x,
          ...b
        } = void 0 === e ? {} : e, S = !1;
        const [C, T] = (0, s.useState)("swiper"), [E, P] = (0, s.useState)(null), [M, A] = (0, s.useState)(!1), k = (0, s.useRef)(!1), L = (0, s.useRef)(null), O = (0, s.useRef)(null), V = (0, s.useRef)(null), $ = (0, s.useRef)(null), D = (0, s.useRef)(null), B = (0, s.useRef)(null), I = (0, s.useRef)(null), R = (0, s.useRef)(null), {
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
            s = {},
            a = {};
          o(n, i.ZP.defaults), o(n, i.ZP.extendedDefaults), n._emitClasses = !0, n.init = !1;
          const l = {},
            c = u.map((e => e.replace(/_/, ""))),
            d = Object.assign({}, e);
          return Object.keys(d).forEach((i => {
            void 0 !== e[i] && (c.indexOf(i) >= 0 ? r(e[i]) ? (n[i] = {}, a[i] = {}, o(n[i], e[i]), o(a[i], e[i])) : (n[i] = e[i], a[i] = e[i]) : 0 === i.search(/on[A-Z]/) && "function" == typeof e[i] ? t ? s[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : n.on[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : l[i] = e[i])
          })), ["navigation", "pagination", "scrollbar"].forEach((e => {
            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
          })), {
            params: n,
            passedParams: a,
            rest: l,
            events: s
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
          if (Object.assign(j.on, F), S = !0, O.current = new i.ZP(j), O.current.loopCreate = () => {}, O.current.loopDestroy = () => {}, j.loop && (O.current.loopedSlides = p(N, j)), O.current.virtual && O.current.params.virtual.enabled) {
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
        return L.current || W(), O.current && O.current.on("_beforeBreakpoint", H), (0, s.useEffect)((() => () => {
          O.current && O.current.off("_beforeBreakpoint", H)
        })), (0, s.useEffect)((() => {
          !k.current && O.current && (O.current.emitSlidesClasses(), k.current = !0)
        })), g((() => {
          if (t && (t.current = L.current), L.current) return O.current.destroyed && W(),
            function(e, t) {
              let {
                el: n,
                nextEl: s,
                prevEl: i,
                paginationEl: r,
                scrollbarEl: o,
                swiper: d
              } = e;
              a(t) && s && i && (d.params.navigation.nextEl = s, d.originalParams.navigation.nextEl = s, d.params.navigation.prevEl = i, d.originalParams.navigation.prevEl = i), l(t) && r && (d.params.pagination.el = r, d.originalParams.pagination.el = r), c(t) && o && (d.params.scrollbar.el = o, d.originalParams.scrollbar.el = o), d.init(n)
            }({
              el: L.current,
              nextEl: D.current,
              prevEl: B.current,
              paginationEl: I.current,
              scrollbarEl: R.current,
              swiper: O.current
            }, j), x && x(O.current), () => {
              O.current && !O.current.destroyed && O.current.destroy(!0, !1)
            }
        }), []), g((() => {
          !S && F && O.current && Object.keys(F).forEach((e => {
            O.current.on(e, F[e])
          }));
          const e = function(e, t, n, s, i) {
            const o = [];
            if (!t) return o;
            const a = e => {
              o.indexOf(e) < 0 && o.push(e)
            };
            if (n && s) {
              const e = s.map(i),
                t = n.map(i);
              e.join("") !== t.join("") && a("children"), s.length !== n.length && a("children")
            }
            return u.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
              if (n in e && n in t)
                if (r(e[n]) && r(t[n])) {
                  const s = Object.keys(e[n]),
                    i = Object.keys(t[n]);
                  s.length !== i.length ? a(n) : (s.forEach((s => {
                    e[n][s] !== t[n][s] && a(n)
                  })), i.forEach((s => {
                    e[n][s] !== t[n][s] && a(n)
                  })))
                } else e[n] !== t[n] && a(n)
            })), o
          }(z, V.current, N, $.current, (e => e.key));
          return V.current = z, $.current = N, e.length && O.current && !O.current.destroyed && function(e) {
            let {
              swiper: t,
              slides: n,
              passedParams: s,
              changedParams: i,
              nextEl: a,
              prevEl: l,
              scrollbarEl: c,
              paginationEl: d
            } = e;
            const u = i.filter((e => "children" !== e && "direction" !== e)),
              {
                params: p,
                pagination: h,
                navigation: f,
                scrollbar: m,
                virtual: g,
                thumbs: v
              } = t;
            let y, w, x, b, S;
            i.includes("thumbs") && s.thumbs && s.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (y = !0), i.includes("controller") && s.controller && s.controller.control && p.controller && !p.controller.control && (w = !0), i.includes("pagination") && s.pagination && (s.pagination.el || d) && (p.pagination || !1 === p.pagination) && h && !h.el && (x = !0), i.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || c) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (b = !0), i.includes("navigation") && s.navigation && (s.navigation.prevEl || l) && (s.navigation.nextEl || a) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (S = !0), u.forEach((e => {
              if (r(p[e]) && r(s[e])) o(p[e], s[e]);
              else {
                const i = s[e];
                !0 !== i && !1 !== i || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = s[e] : !1 === i && t[n = e] && (t[n].destroy(), "navigation" === n ? (p[n].prevEl = void 0, p[n].nextEl = void 0, t[n].prevEl = void 0, t[n].nextEl = void 0) : (p[n].el = void 0, t[n].el = void 0))
              }
              var n
            })), u.includes("controller") && !w && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), i.includes("children") && n && g && p.virtual.enabled ? (g.slides = n, g.update(!0)) : i.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), y && v.init() && v.update(!0), w && (t.controller.control = p.controller.control), x && (d && (p.pagination.el = d), h.init(), h.render(), h.update()), b && (c && (p.scrollbar.el = c), m.init(), m.updateSize(), m.setTranslate()), S && (a && (p.navigation.nextEl = a), l && (p.navigation.prevEl = l), f.init(), f.update()), i.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev), i.includes("direction") && t.changeDirection(s.direction, !1), t.update()
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
        }), [E]), s.createElement(h, w({
          ref: L,
          className: d(`${C}${n?` ${n}`:""}`)
        }, _), s.createElement(y.Provider, {
          value: O.current
        }, G["container-start"], s.createElement(f, {
          className: "swiper-wrapper"
        }, G["wrapper-start"], j.virtual ? function(e, t, n) {
          if (!n) return null;
          const i = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
          } : {
            top: `${n.offset}px`
          };
          return t.filter(((e, t) => t >= n.from && t <= n.to)).map((t => s.cloneElement(t, {
            swiper: e,
            style: i
          })))
        }(O.current, N, E) : !j.loop || O.current && O.current.destroyed ? N.map((e => s.cloneElement(e, {
          swiper: O.current
        }))) : function(e, t, n) {
          const i = t.map(((t, n) => s.cloneElement(t, {
            swiper: e,
            "data-swiper-slide-index": n
          })));

          function r(e, t, i) {
            return s.cloneElement(e, {
              key: `${e.key}-duplicate-${t}-${i}`,
              className: `${e.props.className||""} ${n.slideDuplicateClass}`
            })
          }
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - i.length % n.slidesPerGroup;
            if (e !== n.slidesPerGroup)
              for (let t = 0; t < e; t += 1) {
                const e = s.createElement("div", {
                  className: `${n.slideClass} ${n.slideBlankClass}`
                });
                i.push(e)
              }
          }
          "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length);
          const o = p(i, n),
            a = [],
            l = [];
          for (let e = 0; e < o; e += 1) {
            const t = e - Math.floor(e / i.length) * i.length;
            l.push(r(i[t], e, "append")), a.unshift(r(i[i.length - t - 1], e, "prepend"))
          }
          return e && (e.loopedSlides = o), [...a, ...i, ...l]
        }(O.current, N, j), G["wrapper-end"]), a(j) && s.createElement(s.Fragment, null, s.createElement("div", {
          ref: B,
          className: "swiper-button-prev"
        }), s.createElement("div", {
          ref: D,
          className: "swiper-button-next"
        })), c(j) && s.createElement("div", {
          ref: R,
          className: "swiper-scrollbar"
        }), l(j) && s.createElement("div", {
          ref: I,
          className: "swiper-pagination"
        }), G["container-end"]))
      }));

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
          }
          return e
        }, b.apply(this, arguments)
      }
      x.displayName = "Swiper";
      const S = (0, s.forwardRef)((function(e, t) {
        let {
          tag: n = "div",
          children: i,
          className: r = "",
          swiper: o,
          zoom: a,
          virtualIndex: l,
          ...c
        } = void 0 === e ? {} : e;
        const u = (0, s.useRef)(null),
          [p, h] = (0, s.useState)("swiper-slide");

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
          y = () => "function" == typeof i ? i(m) : i;
        return s.createElement(n, b({
          ref: u,
          className: d(`${p}${r?` ${r}`:""}`),
          "data-swiper-slide-index": l
        }, c), s.createElement(v.Provider, {
          value: m
        }, a ? s.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof a ? a : void 0
        }, y()) : y()))
      }));
      S.displayName = "SwiperSlide"
    },
    7131: (e, t, n) => {
      "use strict";

      function s(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0 && i(e[n], t[n])
        }))
      }
      n.d(t, {
        tl: () => Z,
        ZP: () => q
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
        return i(e, r), e
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
        return i(e, a), e
      }
      class c extends Array {
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

      function d() {
        const e = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t => {
          Array.isArray(t) ? e.push(...d(t)) : e.push(t)
        })), e
      }

      function u(e, t) {
        return Array.prototype.filter.call(e, t)
      }

      function p(e, t) {
        const n = l(),
          s = o();
        let i = [];
        if (!t && e instanceof c) return e;
        if (!e) return new c(i);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
            const t = s.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
          } else i = function(e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) n.push(s[e]);
            return n
          }(e.trim(), t || s)
        } else if (e.nodeType || e === n || e === s) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof c) return e;
          i = e
        }
        return new c(function(e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
        }(i))
      }
      p.fn = c.prototype;
      const h = "resize scroll".split(" ");

      function f(e) {
        return function() {
          for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
          if (void 0 === n[0]) {
            for (let t = 0; t < this.length; t += 1) h.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
            return this
          }
          return this.on(e, ...n)
        }
      }
      f("click"), f("blur"), f("focus"), f("focusin"), f("focusout"), f("keyup"), f("keydown"), f("keypress"), f("submit"), f("change"), f("mousedown"), f("mousemove"), f("mouseup"), f("mouseenter"), f("mouseleave"), f("mouseout"), f("mouseover"), f("touchstart"), f("touchend"), f("touchmove"), f("resize"), f("scroll");
      const m = {
        addClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const s = d(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.add(...s)
          })), this
        },
        removeClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const s = d(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.remove(...s)
          })), this
        },
        hasClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const s = d(t.map((e => e.split(" "))));
          return u(this, (e => s.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const s = d(t.map((e => e.split(" "))));
          this.forEach((e => {
            s.forEach((t => {
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
          let [s, i, r, o] = t;

          function a(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if (n.indexOf(e) < 0 && n.unshift(e), p(t).is(i)) r.apply(t, n);
            else {
              const e = p(t).parents();
              for (let t = 0; t < e.length; t += 1) p(e[t]).is(i) && r.apply(e[t], n)
            }
          }

          function l(e) {
            const t = e && e.target && e.target.dom7EventData || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
          }
          "function" == typeof t[1] && ([s, r, o] = t, i = void 0), o || (o = !1);
          const c = s.split(" ");
          let d;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
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
          let [s, i, r, o] = t;
          "function" == typeof t[1] && ([s, r, o] = t, i = void 0), o || (o = !1);
          const a = s.split(" ");
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            for (let e = 0; e < this.length; e += 1) {
              const n = this[e];
              let s;
              if (!i && n.dom7Listeners ? s = n.dom7Listeners[t] : i && n.dom7LiveListeners && (s = n.dom7LiveListeners[t]), s && s.length)
                for (let e = s.length - 1; e >= 0; e -= 1) {
                  const i = s[e];
                  r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (n.removeEventListener(t, i.proxyListener, o), s.splice(e, 1)) : r || (n.removeEventListener(t, i.proxyListener, o), s.splice(e, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const e = l();
          for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
          const i = n[0].split(" "),
            r = n[1];
          for (let t = 0; t < i.length; t += 1) {
            const s = i[t];
            for (let t = 0; t < this.length; t += 1) {
              const i = this[t];
              if (e.CustomEvent) {
                const t = new e.CustomEvent(s, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0
                });
                i.dom7EventData = n.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function n(s) {
            s.target === this && (e.call(this, s), t.off("transitionend", n))
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
          const e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const e = l(),
              t = o(),
              n = this[0],
              s = n.getBoundingClientRect(),
              i = t.body,
              r = n.clientTop || i.clientTop || 0,
              a = n.clientLeft || i.clientLeft || 0,
              c = n === e ? e.scrollY : n.scrollTop,
              d = n === e ? e.scrollX : n.scrollLeft;
            return {
              top: s.top + c - r,
              left: s.left + d - a
            }
          }
          return null
        },
        css: function(e, t) {
          const n = l();
          let s;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (s = 0; s < this.length; s += 1)
                for (const t in e) this[s].style[t] = e[t];
              return this
            }
            if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
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
          const t = l(),
            n = o(),
            s = this[0];
          let i, r;
          if (!s || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (i = p(e), r = 0; r < i.length; r += 1)
              if (i[r] === s) return !0;
            return !1
          }
          if (e === n) return s === n;
          if (e === t) return s === t;
          if (e.nodeType || e instanceof c) {
            for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
              if (i[r] === s) return !0;
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
          if (e > t - 1) return p([]);
          if (e < 0) {
            const n = t + e;
            return p(n < 0 ? [] : [this[n]])
          }
          return p([this[e]])
        },
        append: function() {
          let e;
          const t = o();
          for (let n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (let n = 0; n < this.length; n += 1)
              if ("string" == typeof e) {
                const s = t.createElement("div");
                for (s.innerHTML = e; s.firstChild;) this[n].appendChild(s.firstChild)
              } else if (e instanceof c)
              for (let t = 0; t < e.length; t += 1) this[n].appendChild(e[t]);
            else this[n].appendChild(e)
          }
          return this
        },
        prepend: function(e) {
          const t = o();
          let n, s;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const i = t.createElement("div");
              for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[n].insertBefore(i.childNodes[s], this[n].childNodes[0])
            } else if (e instanceof c)
            for (s = 0; s < e.length; s += 1) this[n].insertBefore(e[s], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
          return this
        },
        next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e) ? p([this[0].nextElementSibling]) : p([]) : this[0].nextElementSibling ? p([this[0].nextElementSibling]) : p([]) : p([])
        },
        nextAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return p([]);
          for (; n.nextElementSibling;) {
            const s = n.nextElementSibling;
            e ? p(s).is(e) && t.push(s) : t.push(s), n = s
          }
          return p(t)
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e ? t.previousElementSibling && p(t.previousElementSibling).is(e) ? p([t.previousElementSibling]) : p([]) : t.previousElementSibling ? p([t.previousElementSibling]) : p([])
          }
          return p([])
        },
        prevAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return p([]);
          for (; n.previousElementSibling;) {
            const s = n.previousElementSibling;
            e ? p(s).is(e) && t.push(s) : t.push(s), n = s
          }
          return p(t)
        },
        parent: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? p(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
          return p(t)
        },
        parents: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let s = this[n].parentNode;
            for (; s;) e ? p(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
          }
          return p(t)
        },
        closest: function(e) {
          let t = this;
          return void 0 === e ? p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const s = this[n].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e])
          }
          return p(t)
        },
        children: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const s = this[n].children;
            for (let n = 0; n < s.length; n += 1) e && !p(s[n]).is(e) || t.push(s[n])
          }
          return p(t)
        },
        filter: function(e) {
          return p(u(this, e))
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        }
      };
      Object.keys(m).forEach((e => {
        Object.defineProperty(p.fn, e, {
          value: m[e],
          writable: !0
        })
      }));
      const g = p;

      function v(e) {
        return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }

      function y() {
        return Date.now()
      }

      function w(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function x() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
          const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != i && (n = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
            const n = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, s = n.length; t < s; t += 1) {
              const s = n[t],
                r = Object.getOwnPropertyDescriptor(i, s);
              void 0 !== r && r.enumerable && (w(e[s]) && w(i[s]) ? i[s].__swiper__ ? e[s] = i[s] : x(e[s], i[s]) : !w(e[s]) && w(i[s]) ? (e[s] = {}, i[s].__swiper__ ? e[s] = i[s] : x(e[s], i[s])) : e[s] = i[s])
            }
          }
        }
        var n;
        return e
      }

      function b(e, t, n) {
        e.style.setProperty(t, n)
      }

      function S(e) {
        let {
          swiper: t,
          targetPosition: n,
          side: s
        } = e;
        const i = l(),
          r = -t.translate;
        let o, a = null;
        const c = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const d = n > r ? "next" : "prev",
          u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
          p = () => {
            o = (new Date).getTime(), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / c, 1), 0),
              l = .5 - Math.cos(e * Math.PI) / 2;
            let d = r + l * (n - r);
            if (u(d, n) && (d = n), t.wrapperEl.scrollTo({
                [s]: d
              }), u(d, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [s]: d
              })
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(p)
          };
        p()
      }
      let C, T, E;

      function P() {
        return C || (C = function() {
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
        }()), C
      }
      const M = {
          on(e, t, n) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof t) return s;
            const i = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][i](t)
            })), s
          },
          once(e, t, n) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof t) return s;

            function i() {
              s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
              for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
              t.apply(s, r)
            }
            return i.__emitterProxy = t, s.on(e, i, n)
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const s = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
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
              void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((s, i) => {
                (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
              }))
            })), n) : n
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, s;
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
            return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], n = r.slice(1, r.length), s = e) : (t = r[0].events, n = r[0].data, s = r[0].context || e), n.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                e.apply(s, [t, ...n])
              })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                e.apply(s, n)
              }))
            })), e
          }
        },
        A = {
          updateSize: function() {
            const e = this;
            let t, n;
            const s = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), n = n - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
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
            const s = e.params,
              {
                $wrapperEl: i,
                size: r,
                rtlTranslate: o,
                wrongRTL: a
              } = e,
              l = e.virtual && s.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              d = i.children(`.${e.params.slideClass}`),
              u = l ? e.virtual.slides.length : d.length;
            let p = [];
            const h = [],
              f = [];
            let m = s.slidesOffsetBefore;
            "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
            let g = s.slidesOffsetAfter;
            "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              y = e.slidesGrid.length;
            let w = s.spaceBetween,
              x = -m,
              S = 0,
              C = 0;
            if (void 0 === r) return;
            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, o ? d.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : d.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), s.centeredSlides && s.cssMode && (b(e.wrapperEl, "--swiper-centered-offset-before", ""), b(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = s.grid && s.grid.rows > 1 && e.grid;
            let E;
            T && e.grid.initSlides(u);
            const P = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < u; i += 1) {
              E = 0;
              const o = d.eq(i);
              if (T && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display")) {
                if ("auto" === s.slidesPerView) {
                  P && (d[i].style[t("width")] = "");
                  const r = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = n(r, "width"),
                      t = n(r, "padding-left"),
                      s = n(r, "padding-right"),
                      i = n(r, "margin-left"),
                      a = n(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) E = e + i + a;
                    else {
                      const {
                        clientWidth: n,
                        offsetWidth: r
                      } = o[0];
                      E = e + t + s + i + a + (r - n)
                    }
                  }
                  a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), s.roundLengths && (E = Math.floor(E))
                } else E = (r - (s.slidesPerView - 1) * w) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), d[i] && (d[i].style[t("width")] = `${E}px`);
                d[i] && (d[i].swiperSlideSize = E), f.push(E), s.centeredSlides ? (x = x + E / 2 + S / 2 + w, 0 === S && 0 !== i && (x = x - r / 2 - w), 0 === i && (x = x - r / 2 - w), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), C % s.slidesPerGroup == 0 && p.push(x), h.push(x)) : (s.roundLengths && (x = Math.floor(x)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && p.push(x), h.push(x), x = x + E + w), e.virtualSize += E + w, S = E, C += 1
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, o && a && ("slide" === s.effect || "coverflow" === s.effect) && i.css({
                width: `${e.virtualSize+s.spaceBetween}px`
              }), s.setWrapperSize && i.css({
                [t("width")]: `${e.virtualSize+s.spaceBetween}px`
              }), T && e.grid.updateWrapperSize(E, p, t), !s.centeredSlides) {
              const t = [];
              for (let n = 0; n < p.length; n += 1) {
                let i = p[n];
                s.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - r && t.push(i)
              }
              p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
            }
            if (0 === p.length && (p = [0]), 0 !== s.spaceBetween) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              d.filter(((e, t) => !s.cssMode || t !== d.length - 1)).css({
                [n]: `${w}px`
              })
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0)
              })), e -= s.spaceBetween;
              const t = e - r;
              p = p.map((e => e < 0 ? -m : e > t ? t + g : e))
            }
            if (s.centerInsufficientSlides) {
              let e = 0;
              if (f.forEach((t => {
                  e += t + (s.spaceBetween ? s.spaceBetween : 0)
                })), e -= s.spaceBetween, e < r) {
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
              }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
              b(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), b(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
            }
            if (u !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
              const t = `${s.containerModifierClass}backface-hidden`,
                n = e.$el.hasClass(t);
              u <= s.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
            }
          },
          updateAutoHeight: function(e) {
            const t = this,
              n = [],
              s = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const o = e => s ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                n.push(e)
              }));
              else
                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                  const e = t.activeIndex + i;
                  if (e > t.slides.length && !s) break;
                  n.push(o(e))
                } else n.push(o(t.activeIndex));
            for (i = 0; i < n.length; i += 1)
              if (void 0 !== n[i]) {
                const e = n[i].offsetHeight;
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
                slides: s,
                rtlTranslate: i,
                snapGrid: r
              } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            i && (o = e), s.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < s.length; e += 1) {
              const a = s[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
              const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                d = (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                u = -(o - l),
                p = u + t.slidesSizesGrid[e];
              (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(n.slideVisibleClass)), a.progress = i ? -c : c, a.originalProgress = i ? -d : d
            }
            t.visibleSlides = g(t.visibleSlides)
          },
          updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = t && t.translate && t.translate * n || 0
            }
            const n = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let {
              progress: i,
              isBeginning: r,
              isEnd: o
            } = t;
            const a = r,
              l = o;
            0 === s ? (i = 0, r = !0, o = !0) : (i = (e - t.minTranslate()) / s, r = i <= 0, o = i >= 1), Object.assign(t, {
              progress: i,
              isBeginning: r,
              isEnd: o
            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", i)
          },
          updateSlidesClasses: function() {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: s,
                activeIndex: i,
                realIndex: r
              } = e,
              o = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
            let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
            let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
          },
          updateActiveIndex: function(e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: s,
                snapGrid: i,
                params: r,
                activeIndex: o,
                realIndex: a,
                snapIndex: l
              } = t;
            let c, d = e;
            if (void 0 === d) {
              for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : n >= s[e] && n < s[e + 1] && (d = e + 1) : n >= s[e] && (d = e);
              r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            if (i.indexOf(n) >= 0) c = i.indexOf(n);
            else {
              const e = Math.min(r.slidesPerGroupSkip, d);
              c = e + Math.floor((d - e) / r.slidesPerGroup)
            }
            if (c >= i.length && (c = i.length - 1), d === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
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
              s = g(e).closest(`.${n.slideClass}`)[0];
            let i, r = !1;
            if (s)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === s) {
                  r = !0, i = e;
                  break
                } if (!s || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
          }
        };

      function k(e) {
        let {
          swiper: t,
          runCallbacks: n,
          direction: s,
          step: i
        } = e;
        const {
          activeIndex: r,
          previousIndex: o
        } = t;
        let a = s;
        if (a || (a = r > o ? "next" : r < o ? "prev" : "reset"), t.emit(`transition${i}`), n && r !== o) {
          if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === a ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      const L = {
        slideTo: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
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
          if (r.animating && a.preventInteractionOnTransition || !f && !s && !i) return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, o);
          let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (a.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                s = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1] ? t >= n && t < s - (s - n) / 2 ? o = e : t >= n && t < s && (o = e + 1) : t >= n && (o = e)
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
              if (!r.support.smoothScroll) return S({
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
          return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(n, y), 0 === t ? r.transitionEnd(n, y) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, y))
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const i = this;
          let r = e;
          return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s)
        },
        slideNext: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const s = this,
            {
              animating: i,
              enabled: r,
              params: o
            } = s;
          if (!r) return s;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (i && o.loopPreventsSlide) return !1;
            s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
          }
          return o.rewind && s.isEnd ? s.slideTo(0, e, t, n) : s.slideTo(s.activeIndex + l, e, t, n)
        },
        slidePrev: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const s = this,
            {
              params: i,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c
            } = s;
          if (!c) return s;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
          }

          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const u = d(l ? s.translate : -s.translate),
            p = o.map((e => d(e)));
          let h = o[p.indexOf(u) - 1];
          if (void 0 === h && i.cssMode) {
            let e;
            o.forEach(((t, n) => {
              u >= t && (e = n)
            })), void 0 !== e && (h = o[e > 0 ? e - 1 : e])
          }
          let f = 0;
          if (void 0 !== h && (f = a.indexOf(h), f < 0 && (f = s.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - s.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && s.isBeginning) {
            const i = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
            return s.slideTo(i, e, t, n)
          }
          return s.slideTo(f, e, t, n)
        },
        slideReset: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          const i = this;
          let r = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * s && (r += i.params.slidesPerGroup)
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * s && (r -= i.params.slidesPerGroup)
          }
          return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, n)
        },
        slideToClickedSlide: function() {
          const e = this,
            {
              params: t,
              $wrapperEl: n
            } = e,
            s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let i, r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            i = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
              e.slideTo(r)
            }))) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
              e.slideTo(r)
            }))) : e.slideTo(r)
          } else e.slideTo(r)
        }
      };

      function O(e) {
        const t = this,
          n = o(),
          s = l(),
          i = t.touchEventsData,
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
        let u = g(d.target);
        if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length) return;
        if (i.isTouchEvent = "touchstart" === d.type, !i.isTouchEvent && "which" in d && 3 === d.which) return;
        if (!i.isTouchEvent && "button" in d && d.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const p = !!r.noSwipingClass && "" !== r.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        p && d.target && d.target.shadowRoot && h && (u = g(h[0]));
        const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          m = !(!d.target || !d.target.shadowRoot);
        if (r.noSwiping && (m ? function(e) {
            return function t(n) {
              if (!n || n === o() || n === l()) return null;
              n.assignedSlot && (n = n.assignedSlot);
              const s = n.closest(e);
              return s || n.getRootNode ? s || t(n.getRootNode().host) : null
            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)
          }(f, u[0]) : u.closest(f)[0])) return void(t.allowClick = !0);
        if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
        a.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, a.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
        const v = a.currentX,
          w = a.currentY,
          x = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (x && (v <= b || v >= s.innerWidth - b)) {
          if ("prevent" !== x) return;
          e.preventDefault()
        }
        if (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), a.startX = v, a.startY = w, i.touchStartTime = y(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== d.type) {
          let e = !0;
          u.is(i.focusableElements) && (e = !1, "SELECT" === u[0].nodeName && (i.isTouched = !1)), n.activeElement && g(n.activeElement).is(i.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
          const s = e && t.allowTouchMove && r.touchStartPreventDefault;
          !r.touchStartForcePreventDefault && !s || u[0].isContentEditable || d.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
      }

      function V(e) {
        const t = o(),
          n = this,
          s = n.touchEventsData,
          {
            params: i,
            touches: r,
            rtlTranslate: a,
            enabled: l
          } = n;
        if (!l) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", c));
        if (s.isTouchEvent && "touchmove" !== c.type) return;
        const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
          u = "touchmove" === c.type ? d.pageX : c.pageX,
          p = "touchmove" === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return r.startX = u, void(r.startY = p);
        if (!n.allowTouchMove) return g(c.target).is(s.focusableElements) || (n.allowClick = !1), void(s.isTouched && (Object.assign(r, {
          startX: u,
          startY: p,
          currentX: u,
          currentY: p
        }), s.touchStartTime = y()));
        if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (n.isVertical()) {
            if (p < r.startY && n.translate <= n.maxTranslate() || p > r.startY && n.translate >= n.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
          } else if (u < r.startX && n.translate <= n.maxTranslate() || u > r.startX && n.translate >= n.minTranslate()) return;
        if (s.isTouchEvent && t.activeElement && c.target === t.activeElement && g(c.target).is(s.focusableElements)) return s.isMoved = !0, void(n.allowClick = !1);
        if (s.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        r.currentX = u, r.currentY = p;
        const h = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (n.params.threshold && Math.sqrt(h ** 2 + f ** 2) < n.params.threshold) return;
        if (void 0 === s.isScrolling) {
          let e;
          n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (s.isScrolling && n.emit("touchMoveOpposite", c), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
        if (!s.startMoving) return;
        n.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation(), s.isMoved || (i.loop && !i.cssMode && n.loopFix(), s.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), s.isMoved = !0;
        let m = n.isHorizontal() ? h : f;
        r.diff = m, m *= i.touchRatio, a && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
        let v = !0,
          w = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (w = 0), m > 0 && s.currentTranslate > n.minTranslate() ? (v = !1, i.resistance && (s.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + m) ** w)) : m < 0 && s.currentTranslate < n.maxTranslate() && (v = !1, i.resistance && (s.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - m) ** w)), v && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), n.allowSlidePrev || n.allowSlideNext || (s.currentTranslate = s.startTranslate), i.threshold > 0) {
          if (!(Math.abs(m) > i.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(s.currentTranslate), n.setTranslate(s.currentTranslate))
      }

      function $(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: s,
            touches: i,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a
          } = t;
        if (!a) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && s.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        s.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = y(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || l.composedPath && l.composedPath();
          t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = y(), v((() => {
            t.destroyed || (t.allowClick = !0)
          })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let u;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = s.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, s.cssMode) return;
        if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: u
        });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[e + t] ? u >= o[e] && u < o[e + t] && (p = e, h = o[e + t] - o[e]) : u >= o[e] && (p = e, h = o[o.length - 1] - o[o.length - 2])
        }
        let f = null,
          m = null;
        s.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
        const g = (u - o[p]) / h,
          w = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (g >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? f : p + w) : t.slideTo(p)), "prev" === t.swipeDirection && (g > 1 - s.longSwipesRatio ? t.slideTo(p + w) : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + w), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p)) : l.target === t.navigation.nextEl ? t.slideTo(p + w) : t.slideTo(p)
        }
      }

      function D() {
        const e = this,
          {
            params: t,
            el: n
          } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: s,
          allowSlidePrev: i,
          snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }

      function B(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function I() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: n,
            enabled: s
          } = e;
        if (!s) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }
      let R = !1;

      function j() {}
      const z = (e, t) => {
          const n = o(),
            {
              params: s,
              touchEvents: i,
              el: r,
              wrapperEl: a,
              device: l,
              support: c
            } = e,
            d = !!s.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
          if (c.touch) {
            const t = !("touchstart" !== i.start || !c.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r[u](i.start, e.onTouchStart, t), r[u](i.move, e.onTouchMove, c.passiveListener ? {
              passive: !1,
              capture: d
            } : d), r[u](i.end, e.onTouchEnd, t), i.cancel && r[u](i.cancel, e.onTouchEnd, t)
          } else r[u](i.start, e.onTouchStart, !1), n[u](i.move, e.onTouchMove, d), n[u](i.end, e.onTouchEnd, !1);
          (s.preventClicks || s.preventClicksPropagation) && r[u]("click", e.onClick, !0), s.cssMode && a[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D, !0) : e[p]("observerUpdate", D, !0)
        },
        _ = {
          attachEvents: function() {
            const e = this,
              t = o(),
              {
                params: n,
                support: s
              } = e;
            e.onTouchStart = O.bind(e), e.onTouchMove = V.bind(e), e.onTouchEnd = $.bind(e), n.cssMode && (e.onScroll = I.bind(e)), e.onClick = B.bind(e), s.touch && !R && (t.addEventListener("touchstart", j), R = !0), z(e, "on")
          },
          detachEvents: function() {
            z(this, "off")
          }
        },
        F = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        N = {
          addClasses: function() {
            const e = this,
              {
                classNames: t,
                params: n,
                rtl: s,
                $el: i,
                device: r,
                support: o
              } = e,
              a = function(e, t) {
                const n = [];
                return e.forEach((e => {
                  "object" == typeof e ? Object.keys(e).forEach((s => {
                    e[s] && n.push(t + s)
                  })) : "string" == typeof e && n.push(t + e)
                })), n
              }(["initialized", n.direction, {
                "pointer-events": !o.touch
              }, {
                "free-mode": e.params.freeMode && n.freeMode.enabled
              }, {
                autoheight: n.autoHeight
              }, {
                rtl: s
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
            t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses()
          },
          removeClasses: function() {
            const {
              $el: e,
              classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
          }
        },
        G = {
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

      function H(e, t) {
        return function() {
          let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const s = Object.keys(n)[0],
            i = n[s];
          "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
            auto: !0
          }), s in e && "enabled" in i ? (!0 === e[s] && (e[s] = {
            enabled: !0
          }), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
            enabled: !1
          }), x(t, n)) : x(t, n)) : x(t, n)
        }
      }
      const W = {
          eventsEmitter: M,
          update: A,
          translate: {
            getTranslate: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y";
              const {
                params: t,
                rtlTranslate: n,
                translate: s,
                $wrapperEl: i
              } = this;
              if (t.virtualTranslate) return n ? -s : s;
              if (t.cssMode) return s;
              let r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
                const n = l();
                let s, i, r;
                const o = function(e) {
                  const t = l();
                  let n;
                  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                }(e);
                return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = n.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
              }(i[0], e);
              return n && (r = -r), r || 0
            },
            setTranslate: function(e, t) {
              const n = this,
                {
                  rtlTranslate: s,
                  params: i,
                  $wrapperEl: r,
                  wrapperEl: o,
                  progress: a
                } = n;
              let l, c = 0,
                d = 0;
              n.isHorizontal() ? c = s ? -e : e : d = e, i.roundLengths && (c = Math.floor(c), d = Math.floor(d)), i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : i.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
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
                s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                i = arguments.length > 4 ? arguments[4] : void 0;
              const r = this,
                {
                  params: o,
                  wrapperEl: a
                } = r;
              if (r.animating && o.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                c = r.maxTranslate();
              let d;
              if (d = s && e > l ? l : s && e < c ? c : e, r.updateProgress(d), o.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                  if (!r.support.smoothScroll) return S({
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
              return 0 === t ? (r.setTransition(0), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
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
                  params: s
                } = n;
              s.cssMode || (s.autoHeight && n.updateAutoHeight(), k({
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
                  params: s
                } = n;
              n.animating = !1, s.cssMode || (n.setTransition(0), k({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: L,
          loop: {
            loopCreate: function() {
              const e = this,
                t = o(),
                {
                  params: n,
                  $wrapperEl: s
                } = e,
                i = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
              i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
              let r = i.children(`.${n.slideClass}`);
              if (n.loopFillGroupWithBlank) {
                const e = n.slidesPerGroup - r.length % n.slidesPerGroup;
                if (e !== n.slidesPerGroup) {
                  for (let s = 0; s < e; s += 1) {
                    const e = g(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                    i.append(e)
                  }
                  r = i.children(`.${n.slideClass}`)
                }
              }
              "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
              const a = [],
                l = [];
              r.each(((e, t) => {
                g(e).attr("data-swiper-slide-index", t)
              }));
              for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / r.length) * r.length;
                l.push(r.eq(e)[0]), a.unshift(r.eq(r.length - e - 1)[0])
              }
              for (let e = 0; e < l.length; e += 1) i.append(g(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
              for (let e = a.length - 1; e >= 0; e -= 1) i.prepend(g(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: n,
                loopedSlides: s,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: o,
                rtlTranslate: a
              } = e;
              let l;
              e.allowSlidePrev = !0, e.allowSlideNext = !0;
              const c = -o[t] - e.getTranslate();
              t < s ? (l = n.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - s && (l = -n.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)), e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
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
          events: _,
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: s = 0,
                  params: i,
                  $el: r
                } = e,
                o = i.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const l = (a in o ? o[a] : void 0) || e.originalParams,
                c = F(e, i),
                d = F(e, l),
                u = i.enabled;
              c && !d ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (r.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                const n = i[t] && i[t].enabled,
                  s = l[t] && l[t].enabled;
                n && !s && e[t].disable(), !n && s && e[t].enable()
              }));
              const p = l.direction && l.direction !== i.direction,
                h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
              p && n && e.changeDirection(), x(e.params, l);
              const f = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), h && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                n = arguments.length > 2 ? arguments[2] : void 0;
              if (!e || "container" === t && !n) return;
              let s = !1;
              const i = l(),
                r = "window" === t ? i.innerHeight : n.clientHeight,
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
                "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (s = r) : a <= n.clientWidth && (s = r)
              }
              return s || "max"
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
                  slidesOffsetBefore: s
                } = n;
              if (s) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > n
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: N,
          images: {
            loadImage: function(e, t, n, s, i, r) {
              const o = l();
              let a;

              function c() {
                r && r()
              }
              g(e).parent("picture")[0] || e.complete && i ? c() : t ? (a = new o.Image, a.onload = c, a.onerror = c, s && (a.sizes = s), n && (a.srcset = n), t && (a.src = t)) : c()
            },
            preloadImages: function() {
              const e = this;

              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const s = e.imagesToLoad[n];
                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
              }
            }
          }
        },
        U = {};
      class Y {
        constructor() {
          let e, t;
          for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
          if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = x({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
            const e = [];
            return g(t.el).each((n => {
              const s = x({}, t, {
                el: n
              });
              e.push(new Y(s))
            })), e
          }
          const r = this;
          r.__swiper__ = !0, r.support = P(), r.device = function() {
            return T || (T = function() {
              let {
                userAgent: e
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const t = P(),
                n = l(),
                s = n.navigator.platform,
                i = e || n.navigator.userAgent,
                r = {
                  ios: !1,
                  android: !1
                },
                o = n.screen.width,
                a = n.screen.height,
                c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = i.match(/(iPad).*OS\s([\d_]+)/);
              const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === s;
              let f = "MacIntel" === s;
              return !d && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${a}`) >= 0 && (d = i.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), f = !1), c && !h && (r.os = "android", r.android = !0), (d || p || u) && (r.os = "ios", r.ios = !0), r
            }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})), T
          }({
            userAgent: t.userAgent
          }), r.browser = (E || (E = function() {
            const e = l();
            return {
              isSafari: function() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
          }()), E), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
          const o = {};
          r.modules.forEach((e => {
            e({
              swiper: r,
              extendParams: H(t, o),
              on: r.on.bind(r),
              once: r.once.bind(r),
              off: r.off.bind(r),
              emit: r.emit.bind(r)
            })
          }));
          const a = x({}, G, o);
          return r.params = x({}, a, U, t), r.originalParams = x({}, r.params), r.passedParams = x({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
            r.on(e, r.params.on[e])
          })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = g, Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: g(),
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
              lastClickTime: y(),
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
          const s = n.minTranslate(),
            i = (n.maxTranslate() - s) * e + s;
          n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
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
            const s = e.getSlideClasses(n);
            t.push({
              slideEl: n,
              classNames: s
            }), e.emit("_slideClass", n, s)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            params: n,
            slides: s,
            slidesGrid: i,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e, t = s[a].swiperSlideSize;
            for (let n = a + 1; n < s.length; n += 1) s[n] && !e && (t += s[n].swiperSlideSize, l += 1, t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1) s[n] && !e && (t += s[n].swiperSlideSize, l += 1, t > o && (e = !0))
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1)(t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          else
            for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: n
          } = e;

          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || s()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            s = n.params.direction;
          return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${s}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
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
          const n = g(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = g(e.shadowRoot.querySelector(s()));
              return t.children = e => n.children(e), t
            }
            return n.children ? n.children(s()) : g(n).children(s())
          })();
          if (0 === i.length && t.params.createElements) {
            const e = o().createElement("div");
            i = g(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
              i.append(e)
            }))
          }
          return Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display")
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
              params: s,
              $el: i,
              $wrapperEl: r,
              slides: o
            } = n;
          return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), s.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
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
          x(U, e)
        }
        static get extendedDefaults() {
          return U
        }
        static get defaults() {
          return G
        }
        static installModule(e) {
          Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
          const t = Y.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => Y.installModule(e))), Y) : (Y.installModule(e), Y)
        }
      }
      Object.keys(W).forEach((e => {
        Object.keys(W[e]).forEach((t => {
          Y.prototype[t] = W[e][t]
        }))
      })), Y.use([function(e) {
        let {
          swiper: t,
          on: n,
          emit: s
        } = e;
        const i = l();
        let r = null,
          o = null;
        const a = () => {
            t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
          },
          c = () => {
            t && !t.destroyed && t.initialized && s("orientationchange")
          };
        n("init", (() => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
            o = i.requestAnimationFrame((() => {
              const {
                width: n,
                height: s
              } = t;
              let i = n,
                r = s;
              e.forEach((e => {
                let {
                  contentBoxSize: n,
                  contentRect: s,
                  target: o
                } = e;
                o && o !== t.el || (i = s ? s.width : (n[0] || n).inlineSize, r = s ? s.height : (n[0] || n).blockSize)
              })), i === n && r === s || a()
            }))
          })), r.observe(t.el)) : (i.addEventListener("resize", a), i.addEventListener("orientationchange", c))
        })), n("destroy", (() => {
          o && i.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", c)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: n,
          on: s,
          emit: i
        } = e;
        const r = [],
          o = l(),
          a = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const t = function() {
                i("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
            }));
            n.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }), r.push(n)
          };
        n({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), s("init", (() => {
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
        })), s("destroy", (() => {
          r.forEach((e => {
            e.disconnect()
          })), r.splice(0, r.length)
        }))
      }]);
      const q = Y;

      function X() {
        return `.${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function Z(e) {
        let {
          swiper: t,
          extendParams: n,
          on: s,
          emit: i
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
            bulletActiveClass: s
          } = t.params.pagination;
          e[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`)
        }

        function u() {
          const e = t.rtl,
            n = t.params.pagination;
          if (c()) return;
          const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            r = t.pagination.$el;
          let o;
          const u = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (o = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), o > s - 1 - 2 * t.loopedSlides && (o -= s - 2 * t.loopedSlides), o > u - 1 && (o -= u), o < 0 && "bullets" !== t.params.paginationType && (o = u + o)) : o = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const s = t.pagination.bullets;
            let i, c, u;
            if (n.dynamicBullets && (a = s.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", a * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += o - (t.previousIndex - t.loopedSlides || 0), l > n.dynamicMainBullets - 1 ? l = n.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(o - l, 0), c = i + (Math.min(s.length, n.dynamicMainBullets) - 1), u = (c + i) / 2), s.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), r.length > 1) s.each((e => {
              const t = g(e),
                s = t.index();
              s === o && t.addClass(n.bulletActiveClass), n.dynamicBullets && (s >= i && s <= c && t.addClass(`${n.bulletActiveClass}-main`), s === i && d(t, "prev"), s === c && d(t, "next"))
            }));
            else {
              const e = s.eq(o),
                r = e.index();
              if (e.addClass(n.bulletActiveClass), n.dynamicBullets) {
                const e = s.eq(i),
                  o = s.eq(c);
                for (let e = i; e <= c; e += 1) s.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= s.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1) s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                    s.eq(s.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                  } else d(e, "prev"), d(o, "next");
                else d(e, "prev"), d(o, "next")
              }
            }
            if (n.dynamicBullets) {
              const i = Math.min(s.length, n.dynamicMainBullets + 4),
                r = (a * i - a) / 2 - u * a,
                o = e ? "right" : "left";
              s.css(t.isHorizontal() ? o : "top", `${r}px`)
            }
          }
          if ("fraction" === n.type && (r.find(X(n.currentClass)).text(n.formatFractionCurrent(o + 1)), r.find(X(n.totalClass)).text(n.formatFractionTotal(u))), "progressbar" === n.type) {
            let e;
            e = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
            const s = (o + 1) / u;
            let i = 1,
              a = 1;
            "horizontal" === e ? i = s : a = s, r.find(X(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`).transition(t.params.speed)
          }
          "custom" === n.type && n.renderCustom ? (r.html(n.renderCustom(t, o + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }

        function p() {
          const e = t.params.pagination;
          if (c()) return;
          const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            s = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let i = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > n && (i = n);
            for (let n = 0; n < i; n += 1) e.renderBullet ? r += e.renderBullet.call(t, n, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
            s.html(r), t.pagination.bullets = s.find(X(e.bulletClass))
          }
          "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, s.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, s.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
          t.params.pagination = function(e, t, n, s) {
            const i = o();
            return e.params.createElements && Object.keys(s).forEach((r => {
              if (!n[r] && !0 === n.auto) {
                let o = e.$el.children(`.${s[r]}`)[0];
                o || (o = i.createElement("div"), o.className = s[r], e.$el.append(o)), n[r] = o, t[r] = o
              }
            })), n
          }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let n = g(e.el);
          0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && n.length > 1 && (n = t.$el.find(e.el), n.length > 1 && (n = n.filter((e => g(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && n.addClass(e.clickableClass), n.addClass(e.modifierClass + e.type), n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass), e.clickable && n.on("click", X(e.bulletClass), (function(e) {
            e.preventDefault();
            let n = g(this).index() * t.params.slidesPerGroup;
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
          n.removeClass(e.hiddenClass), n.removeClass(e.modifierClass + e.type), n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && n.off("click", X(e.bulletClass))
        }
        s("init", (() => {
          !1 === t.params.pagination.enabled ? m() : (h(), p(), u())
        })), s("activeIndexChange", (() => {
          (t.params.loop || void 0 === t.snapIndex) && u()
        })), s("snapIndexChange", (() => {
          t.params.loop || u()
        })), s("slidesLengthChange", (() => {
          t.params.loop && (p(), u())
        })), s("snapGridLengthChange", (() => {
          t.params.loop || (p(), u())
        })), s("destroy", (() => {
          f()
        })), s("enable disable", (() => {
          const {
            $el: e
          } = t.pagination;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), s("lock unlock", (() => {
          u()
        })), s("click", ((e, n) => {
          const s = n.target,
            {
              $el: r
            } = t.pagination;
          if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !g(s).hasClass(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
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
    9200: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => s
      });
      const s = (0, n(4932).createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    6609: (e, t, n) => {
      "use strict";
      n.d(t, {
        frameData: () => s
      });
      const s = {
        delta: 0,
        timestamp: 0
      }
    },
    7109: (e, t, n) => {
      "use strict";
      n.d(t, {
        qY: () => h,
        iW: () => f,
        Z_: () => p
      });
      const s = 1 / 60 * 1e3,
        i = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        r = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout((() => e(i())), s);
      var o = n(6609);
      let a = !0,
        l = !1,
        c = !1;
      const d = ["read", "update", "preRender", "render", "postRender"],
        u = d.reduce(((e, t) => (e[t] = function(e) {
          let t = [],
            n = [],
            s = 0,
            i = !1,
            r = !1;
          const o = new WeakSet,
            a = {
              schedule: (e, r = !1, a = !1) => {
                const l = a && i,
                  c = l ? t : n;
                return r && o.add(e), -1 === c.indexOf(e) && (c.push(e), l && i && (s = t.length)), e
              },
              cancel: e => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1), o.delete(e)
              },
              process: l => {
                if (i) r = !0;
                else {
                  if (i = !0, [t, n] = [n, t], n.length = 0, s = t.length, s)
                    for (let n = 0; n < s; n++) {
                      const s = t[n];
                      s(l), o.has(s) && (a.schedule(s), e())
                    }
                  i = !1, r && (r = !1, a.process(l))
                }
              }
            };
          return a
        }((() => l = !0)), e)), {}),
        p = d.reduce(((e, t) => {
          const n = u[t];
          return e[t] = (e, t = !1, s = !1) => (l || v(), n.schedule(e, t, s)), e
        }), {}),
        h = d.reduce(((e, t) => (e[t] = u[t].cancel, e)), {}),
        f = d.reduce(((e, t) => (e[t] = () => u[t].process(o.frameData), e)), {}),
        m = e => u[e].process(o.frameData),
        g = e => {
          l = !1, o.frameData.delta = a ? s : Math.max(Math.min(e - o.frameData.timestamp, 40), 1), o.frameData.timestamp = e, c = !0, d.forEach(m), c = !1, l && (a = !1, r(g))
        },
        v = () => {
          l = !0, a = !0, c || r(g)
        }
    },
    8360: (e, t, n) => {
      "use strict";
      n.d(t, {
        E: () => mr
      });
      var s = n(4932),
        i = n(9200);
      const r = (0, s.createContext)({}),
        o = (0, s.createContext)(null);
      var a = n(9666);
      const l = (0, s.createContext)({
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
      var y = n(9208),
        w = n(4682);
      const x = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let b = 1;
      const S = (0, s.createContext)({});
      class C extends s.Component {
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
      const T = (0, s.createContext)({}),
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
        const g = (0, s.forwardRef)((function(g, S) {
          const E = {
              ...(0, s.useContext)(i._),
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
              }(e, (0, s.useContext)(r));
              return (0, s.useMemo)((() => ({
                initial: t,
                animate: n
              })), [m(t), m(n)])
            }(g),
            L = P ? void 0 : (0, w.h)((() => {
              if (x.hasEverUpdated) return b++
            })),
            O = p(g, P);
          if (!P && y.j) {
            k.visualElement = function(e, t, n, c) {
              const d = (0, s.useContext)(r).visualElement,
                u = (0, s.useContext)(l),
                p = (0, s.useContext)(o),
                h = (0, s.useContext)(i._).reducedMotion,
                f = (0, s.useRef)();
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
            const c = (0, s.useContext)(l).strict,
              d = (0, s.useContext)(T);
            k.visualElement && (A = k.visualElement.loadFeatures(E, c, e, L, n || v.projectionNodeConstructor, d))
          }
          return s.createElement(C, {
            visualElement: k.visualElement,
            props: E
          }, A, s.createElement(r.Provider, {
            value: k
          }, u(f, g, L, function(e, t, n) {
            return (0, s.useCallback)((s => {
              s && e.mount && e.mount(s), t && (s ? t.mount(s) : t.unmount()), n && ("function" == typeof n ? n(s) : c(n) && (n.current = s))
            }), [t])
          }(O, k.visualElement, S), O, P, k.visualElement)))
        }));
        return g[E] = f, g
      }

      function M({
        layoutId: e
      }) {
        const t = (0, s.useContext)(S).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function A(e) {
        function t(t, n = {}) {
          return P(e(t, n))
        }
        if ("undefined" == typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, {
          get: (e, s) => (n.has(s) || n.set(s, t(s)), n.get(s))
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
      var _ = n(3038),
        F = n(6800);
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

      function H(e, t, n, s) {
        const {
          style: i,
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
          const s = G[e],
            p = z(n, s);
          if ($.has(e)) {
            if (c = !0, o[e] = p, a.push(e), !u) continue;
            n !== (s.default || 0) && (u = !1)
          } else e.startsWith("origin") ? (d = !0, l[e] = p) : i[e] = p
        }
        if (t.transform || (c || s ? i.transform = function({
            transform: e,
            transformKeys: t
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: s = !0
          }, i, r) {
            let o = "";
            t.sort(R);
            for (const n of t) o += `${I[n]||n}(${e[n]}) `;
            return n && !e.z && (o += "translateZ(0)"), o = o.trim(), r ? o = r(e, i ? "" : o) : s && i && (o = "none"), o
          }(e, n, u, s) : i.transform && (i.transform = "none")), d) {
          const {
            originX: e = "50%",
            originY: t = "50%",
            originZ: n = 0
          } = l;
          i.transformOrigin = `${e} ${t} ${n}`
        }
      }
      const W = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function U(e, t, n) {
        for (const s in t) B(t[s]) || D(s, n) || (e[s] = t[s])
      }

      function Y(e, t, n) {
        const i = {},
          r = function(e, t, n) {
            const i = {};
            return U(i, e.style || {}, e), Object.assign(i, function({
              transformTemplate: e
            }, t, n) {
              return (0, s.useMemo)((() => {
                const s = W();
                return H(s, t, {
                  enableHardwareAcceleration: !n
                }, e), Object.assign({}, s.vars, s.style)
              }), [t])
            }(e, t, n)), e.transformValues ? e.transformValues(i) : i
          }(e, t, n);
        return e.drag && !1 !== e.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), i.style = r, i
      }
      const q = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function X(e) {
        return q.has(e)
      }
      let Z = e => !X(e);
      try {
        (K = require("@emotion/is-prop-valid").default) && (Z = e => e.startsWith("on") ? !X(e) : K(e))
      } catch (e) {}
      var K;

      function J(e, t, n) {
        return "string" == typeof e ? e : F.px.transform(t + n * e)
      }
      const Q = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        ee = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function te(e, {
        attrX: t,
        attrY: n,
        originX: s,
        originY: i,
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
        p.transform && (f && (h.transform = p.transform), delete p.transform), f && (void 0 !== s || void 0 !== i || h.transform) && (h.transformOrigin = function(e, t, n) {
          return `${J(t,e.x,e.width)} ${J(n,e.y,e.height)}`
        }(f, void 0 !== s ? s : .5, void 0 !== i ? i : .5)), void 0 !== t && (p.x = t), void 0 !== n && (p.y = n), void 0 !== r && function(e, t, n = 1, s = 0, i = !0) {
          e.pathLength = 1;
          const r = i ? Q : ee;
          e[r.offset] = F.px.transform(-s);
          const o = F.px.transform(t),
            a = F.px.transform(n);
          e[r.array] = `${o} ${a}`
        }(p, r, o, a, !1)
      }
      const ne = () => ({
          ...W(),
          attrs: {}
        }),
        se = e => "string" == typeof e && "svg" === e.toLowerCase();

      function ie(e, t, n, i) {
        const r = (0, s.useMemo)((() => {
          const n = ne();
          return te(n, t, {
            enableHardwareAcceleration: !1
          }, se(i), e.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [t]);
        if (e.style) {
          const t = {};
          U(t, e.style, e), r.style = {
            ...t,
            ...r.style
          }
        }
        return r
      }

      function re(e = !1) {
        return (t, n, i, r, {
          latestValues: o
        }, a) => {
          const l = (L(t) ? ie : Y)(n, o, a, t),
            c = function(e, t, n) {
              const s = {};
              for (const i in e)(Z(i) || !0 === n && X(i) || !t && !X(i) || e.draggable && i.startsWith("onDrag")) && (s[i] = e[i]);
              return s
            }(n, "string" == typeof t, e),
            d = {
              ...c,
              ...l,
              ref: r
            };
          return i && (d["data-projection-id"] = i), (0, s.createElement)(t, d)
        }
      }
      const oe = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function ae(e, {
        style: t,
        vars: n
      }, s, i) {
        Object.assign(e.style, t, i && i.getProjectionStyles(s));
        for (const t in n) e.style.setProperty(t, n[t])
      }
      const le = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function ce(e, t, n, s) {
        ae(e, t, void 0, s);
        for (const n in t.attrs) e.setAttribute(le.has(n) ? n : oe(n), t.attrs[n])
      }

      function de(e) {
        const {
          style: t
        } = e, n = {};
        for (const s in t)(B(t[s]) || D(s, e)) && (n[s] = t[s]);
        return n
      }

      function ue(e) {
        const t = de(e);
        for (const n in e) B(e[n]) && (t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]);
        return t
      }

      function pe(e, t, n, s = {}, i = {}) {
        return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, s, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, s, i)), t
      }
      const he = e => Array.isArray(e),
        fe = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        me = e => he(e) ? e[e.length - 1] || 0 : e;

      function ge(e) {
        const t = B(e) ? e.get() : e;
        return fe(t) ? t.toValue() : t
      }
      const ve = e => (t, n) => {
        const i = (0, s.useContext)(r),
          a = (0, s.useContext)(o),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: n
          }, s, i, r) {
            const o = {
              latestValues: ye(s, i, r, e),
              renderState: t()
            };
            return n && (o.mount = e => n(s, e, o)), o
          }(e, t, i, a);
        return n ? l() : (0, w.h)(l)
      };

      function ye(e, t, n, s) {
        const i = {},
          r = s(e);
        for (const e in r) i[e] = ge(r[e]);
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
          const n = pe(e, t);
          if (!n) return;
          const {
            transitionEnd: s,
            transition: r,
            ...o
          } = n;
          for (const e in o) {
            let t = o[e];
            Array.isArray(t) && (t = t[d ? t.length - 1 : 0]), null !== t && (i[e] = t)
          }
          for (const e in s) i[e] = s[e]
        })), i
      }
      const we = {
          useVisualState: ve({
            scrapeMotionValuesFromProps: ue,
            createRenderState: ne,
            onMount: (e, t, {
              renderState: n,
              latestValues: s
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
              te(n, s, {
                enableHardwareAcceleration: !1
              }, se(t.tagName), e.transformTemplate), ce(t, n)
            }
          })
        },
        xe = {
          useVisualState: ve({
            scrapeMotionValuesFromProps: de,
            createRenderState: W
          })
        };
      var be;

      function Se(e, t, n, s = {
        passive: !0
      }) {
        return e.addEventListener(t, n, s), () => e.removeEventListener(t, n)
      }

      function Ce(e, t, n, i) {
        (0, s.useEffect)((() => {
          const s = e.current;
          if (n && s) return Se(s, t, n, i)
        }), [e, t, n, i])
      }

      function Te(e) {
        return "undefined" != typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
      }

      function Ee(e) {
        return !!e.touches
      }! function(e) {
        e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
      }(be || (be = {}));
      const Pe = {
        pageX: 0,
        pageY: 0
      };

      function Me(e, t = "page") {
        const n = e.touches[0] || e.changedTouches[0] || Pe;
        return {
          x: n[t + "X"],
          y: n[t + "Y"]
        }
      }

      function Ae(e, t = "page") {
        return {
          x: e[t + "X"],
          y: e[t + "Y"]
        }
      }

      function ke(e, t = "page") {
        return {
          point: Ee(e) ? Me(e, t) : Ae(e, t)
        }
      }
      const Le = (e, t = !1) => {
          const n = t => e(t, ke(t));
          return t ? (s = n, e => {
            const t = e instanceof MouseEvent;
            (!t || t && 0 === e.button) && s(e)
          }) : n;
          var s
        },
        Oe = () => y.j && null === window.onpointerdown,
        Ve = () => y.j && null === window.ontouchstart,
        $e = () => y.j && null === window.onmousedown,
        De = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        Be = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function Ie(e) {
        return Oe() ? e : Ve() ? Be[e] : $e() ? De[e] : e
      }

      function Re(e, t, n, s) {
        return Se(e, Ie(t), Le(n, "pointerdown" === t), s)
      }

      function je(e, t, n, s) {
        return Ce(e, Ie(t), n && Le(n, "pointerdown" === t), s)
      }

      function ze(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const _e = ze("dragHorizontal"),
        Fe = ze("dragVertical");

      function Ne(e) {
        let t = !1;
        if ("y" === e) t = Fe();
        else if ("x" === e) t = _e();
        else {
          const e = _e(),
            n = Fe();
          e && n ? t = () => {
            e(), n()
          } : (e && e(), n && n())
        }
        return t
      }

      function Ge() {
        const e = Ne(!0);
        return !e || (e(), !1)
      }

      function He(e, t, n) {
        return (s, i) => {
          Te(s) && !Ge() && (e.animationState && e.animationState.setActive(be.Hover, t), n && n(s, i))
        }
      }
      const We = (e, t) => !!t && (e === t || We(e, t.parentElement));

      function Ue(e) {
        return (0, s.useEffect)((() => () => e()), [])
      }
      var Ye = n(4138),
        qe = n(1865);
      const Xe = (void 0 === qe || qe.env, "production");
      var Ze = n(7213);
      const Ke = new WeakMap,
        Je = new WeakMap,
        Qe = e => {
          const t = Ke.get(e.target);
          t && t(e)
        },
        et = e => {
          e.forEach(Qe)
        };
      const tt = {
        some: 0,
        all: 1
      };

      function nt(e, t, n, {
        root: i,
        margin: r,
        amount: o = "some",
        once: a
      }) {
        (0, s.useEffect)((() => {
          if (!e || !n.current) return;
          const s = {
            root: null == i ? void 0 : i.current,
            rootMargin: r,
            threshold: "number" == typeof o ? o : tt[o]
          };
          return function(e, t, n) {
            const s = function({
              root: e,
              ...t
            }) {
              const n = e || document;
              Je.has(n) || Je.set(n, {});
              const s = Je.get(n),
                i = JSON.stringify(t);
              return s[i] || (s[i] = new IntersectionObserver(et, {
                root: e,
                ...t
              })), s[i]
            }(t);
            return Ke.set(e, n), s.observe(e), () => {
              Ke.delete(e), s.unobserve(e)
            }
          }(n.current, s, (e => {
            const {
              isIntersecting: s
            } = e;
            if (t.isInView === s) return;
            if (t.isInView = s, a && !s && t.hasEnteredView) return;
            s && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(be.InView, s);
            const i = n.getProps(),
              r = s ? i.onViewportEnter : i.onViewportLeave;
            r && r(e)
          }))
        }), [e, i, r, o])
      }

      function st(e, t, n, {
        fallback: i = !0
      }) {
        (0, s.useEffect)((() => {
          e && i && ("production" !== Xe && (0, Ze.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
            t.hasEnteredView = !0;
            const {
              onViewportEnter: e
            } = n.getProps();
            e && e(null), n.animationState && n.animationState.setActive(be.InView, !0)
          })))
        }), [e])
      }
      const it = e => t => (e(t), null),
        rt = {
          inView: it((function({
            visualElement: e,
            whileInView: t,
            onViewportEnter: n,
            onViewportLeave: i,
            viewport: r = {}
          }) {
            const o = (0, s.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(t || n || i);
            r.once && o.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? st : nt)(a, o.current, e, r)
          })),
          tap: it((function({
            onTap: e,
            onTapStart: t,
            onTapCancel: n,
            whileTap: i,
            visualElement: r
          }) {
            const o = e || t || n || i,
              a = (0, s.useRef)(!1),
              l = (0, s.useRef)(null),
              c = {
                passive: !(t || e || n || f)
              };

            function d() {
              l.current && l.current(), l.current = null
            }

            function u() {
              return d(), a.current = !1, r.animationState && r.animationState.setActive(be.Tap, !1), !Ge()
            }

            function p(t, s) {
              u() && (We(r.current, t.target) ? e && e(t, s) : n && n(t, s))
            }

            function h(e, t) {
              u() && n && n(e, t)
            }

            function f(e, n) {
              d(), a.current || (a.current = !0, l.current = (0, Ye.z)(Re(window, "pointerup", p, c), Re(window, "pointercancel", h, c)), r.animationState && r.animationState.setActive(be.Tap, !0), t && t(e, n))
            }
            je(r, "pointerdown", o ? f : void 0, c), Ue(d)
          })),
          focus: it((function({
            whileFocus: e,
            visualElement: t
          }) {
            const {
              animationState: n
            } = t;
            Ce(t, "focus", e ? () => {
              n && n.setActive(be.Focus, !0)
            } : void 0), Ce(t, "blur", e ? () => {
              n && n.setActive(be.Focus, !1)
            } : void 0)
          })),
          hover: it((function({
            onHoverStart: e,
            onHoverEnd: t,
            whileHover: n,
            visualElement: s
          }) {
            je(s, "pointerenter", e || n ? He(s, !0, e) : void 0, {
              passive: !e
            }), je(s, "pointerleave", t || n ? He(s, !1, t) : void 0, {
              passive: !t
            })
          }))
        };

      function ot() {
        const e = (0, s.useContext)(o);
        if (null === e) return [!0, null];
        const {
          isPresent: t,
          onExitComplete: n,
          register: i
        } = e, r = (0, s.useId)();
        return (0, s.useEffect)((() => i(r)), []), !t && n ? [!1, () => n && n(r)] : [!0]
      }

      function at(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let s = 0; s < n; s++)
          if (t[s] !== e[s]) return !1;
        return !0
      }
      var lt = n(4570),
        ct = n(7886),
        dt = n(2780);
      const ut = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function pt(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [s] = n.match(dt.KP) || [];
        if (!s) return e;
        const i = n.replace(s, "");
        let r = ut.has(t) ? 1 : 0;
        return s !== n && (r *= 100), t + "(" + r + i + ")"
      }
      const ht = /([a-z-]*)\(.*?\)/g,
        ft = {
          ...ct.P,
          getAnimatableNone: e => {
            const t = e.match(ht);
            return t ? t.map(pt).join(" ") : e
          }
        };
      var mt = n(5768);
      const gt = {
          ...G,
          color: mt.$,
          backgroundColor: mt.$,
          outlineColor: mt.$,
          fill: mt.$,
          stroke: mt.$,
          borderColor: mt.$,
          borderTopColor: mt.$,
          borderRightColor: mt.$,
          borderBottomColor: mt.$,
          borderLeftColor: mt.$,
          filter: ft,
          WebkitFilter: ft
        },
        vt = e => gt[e];

      function yt(e, t) {
        var n;
        let s = vt(e);
        return s !== ft && (s = ct.P), null === (n = s.getAnimatableNone) || void 0 === n ? void 0 : n.call(s, t)
      }
      const wt = e => t => t.test(e),
        xt = [_.Rx, F.px, F.aQ, F.RW, F.vw, F.vh, {
          test: e => "auto" === e,
          parse: e => e
        }],
        bt = e => xt.find(wt(e)),
        St = [...xt, mt.$, ct.P],
        Ct = e => St.find(wt(e));

      function Tt(e, t, n) {
        const s = e.getProps();
        return pe(s, t, void 0 !== n ? n : s.custom, function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.get())), t
        }(e), function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t
        }(e))
      }

      function Et(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, (0, lt.B)(n))
      }

      function Pt(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function Mt(e) {
        return Boolean(B(e) && e.add)
      }
      var At = n(7109);
      const kt = (e, t) => `${e}: ${t}`;

      function Lt(e, t) {
        const {
          MotionAppearAnimations: n
        } = window, s = kt(e, $.has(t) ? "transform" : t), i = n && n.get(s);
        return i ? (At.Z_.render((() => {
          try {
            i.cancel(), n.delete(s)
          } catch (e) {}
        })), i.currentTime || 0) : 0
      }
      const Ot = "data-" + oe("framerAppearId");
      var Vt = n(92);
      const $t = e => 1e3 * e,
        Dt = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        Bt = e => t => 1 - e(1 - t),
        It = e => e * e,
        Rt = Bt(It),
        jt = Dt(It);
      var zt = n(5086);
      const _t = e => e,
        Ft = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function Nt(e, t, n, s) {
        if (e === t && n === s) return _t;
        return i => 0 === i || 1 === i ? i : Ft(function(e, t, n, s, i) {
          let r, o, a = 0;
          do {
            o = t + (n - t) / 2, r = Ft(o, s, i) - e, r > 0 ? n = o : t = o
          } while (Math.abs(r) > 1e-7 && ++a < 12);
          return o
        }(i, 0, 1, e, n), t, s)
      }
      const Gt = e => 1 - Math.sin(Math.acos(e)),
        Ht = Bt(Gt),
        Wt = Dt(Ht),
        Ut = Nt(.33, 1.53, .69, .99),
        Yt = Bt(Ut),
        qt = Dt(Yt),
        Xt = {
          linear: _t,
          easeIn: It,
          easeInOut: jt,
          easeOut: Rt,
          circIn: Gt,
          circInOut: Wt,
          circOut: Ht,
          backIn: Yt,
          backInOut: qt,
          backOut: Ut,
          anticipate: e => (e *= 2) < 1 ? .5 * Yt(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        Zt = e => {
          if (Array.isArray(e)) {
            (0, Vt.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, n, s, i] = e;
            return Nt(t, n, s, i)
          }
          return "string" == typeof e ? ((0, Vt.k)(void 0 !== Xt[e], `Invalid easing type '${e}'`), Xt[e]) : e
        };

      function Kt({
        keyframes: e,
        ease: t = jt,
        times: n,
        duration: s = 300
      }) {
        e = [...e];
        const i = Kt[0],
          r = (e => Array.isArray(e) && "number" != typeof e[0])(t) ? t.map(Zt) : Zt(t),
          o = {
            done: !1,
            value: i
          },
          a = function(e, t) {
            return e.map((e => e * t))
          }(n && n.length === Kt.length ? n : function(e) {
            const t = e.length;
            return e.map(((e, n) => 0 !== n ? n / (t - 1) : 0))
          }(e), s);

        function l() {
          return (0, zt.s)(a, e, {
            ease: Array.isArray(r) ? r : (t = e, n = r, t.map((() => n || jt)).splice(0, t.length - 1))
          });
          var t, n
        }
        let c = l();
        return {
          next: e => (o.value = c(e), o.done = e >= s, o),
          flipTarget: () => {
            e.reverse(), c = l()
          }
        }
      }
      var Jt = n(1958);
      const Qt = .001,
        en = .01,
        tn = 10,
        nn = .05,
        sn = 1;
      const rn = 12;

      function on(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      var an = n(4811);
      const ln = ["duration", "bounce"],
        cn = ["stiffness", "damping", "mass"];

      function dn(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function un({
        keyframes: e,
        restSpeed: t = 2,
        restDelta: n = .01,
        ...s
      }) {
        let i = e[0],
          r = e[e.length - 1];
        const o = {
            done: !1,
            value: i
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
            if (!dn(e, cn) && dn(e, ln)) {
              const n = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: n = 0,
                mass: s = 1
              }) {
                let i, r;
                (0, Vt.K)(e <= 1e3 * tn, "Spring duration must be 10 seconds or less");
                let o = 1 - t;
                o = (0, Jt.u)(nn, sn, o), e = (0, Jt.u)(en, tn, e / 1e3), o < 1 ? (i = t => {
                  const s = t * o,
                    i = s * e,
                    r = s - n,
                    a = on(t, o),
                    l = Math.exp(-i);
                  return Qt - r / a * l
                }, r = t => {
                  const s = t * o * e,
                    r = s * n + n,
                    a = Math.pow(o, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-s),
                    c = on(Math.pow(t, 2), o);
                  return (-i(t) + Qt > 0 ? -1 : 1) * ((r - a) * l) / c
                }) : (i = t => Math.exp(-t * e) * ((t - n) * e + 1) - Qt, r = t => Math.exp(-t * e) * (e * e * (n - t)));
                const a = function(e, t, n) {
                  let s = n;
                  for (let n = 1; n < rn; n++) s -= e(s) / t(s);
                  return s
                }(i, r, 5 / e);
                if (e *= 1e3, isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: e
                }; {
                  const t = Math.pow(a, 2) * s;
                  return {
                    stiffness: t,
                    damping: 2 * o * Math.sqrt(s * t),
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
          }(s);
        let h = pn,
          f = d ? -d / 1e3 : 0;
        const m = l / (2 * Math.sqrt(a * c));

        function g() {
          const e = r - i,
            t = Math.sqrt(a / c) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(r - i) / 100, .4)), m < 1) {
            const n = on(t, m);
            h = s => {
              const i = Math.exp(-m * t * s);
              return r - i * ((f + m * t * e) / n * Math.sin(n * s) + e * Math.cos(n * s))
            }
          } else if (1 === m) h = n => r - Math.exp(-t * n) * (e + (f + t * e) * n);
          else {
            const n = t * Math.sqrt(m * m - 1);
            h = s => {
              const i = Math.exp(-m * t * s),
                o = Math.min(n * s, 300);
              return r - i * ((f + m * t * e) * Math.sinh(o) + n * e * Math.cosh(o)) / n
            }
          }
        }
        return g(), {
          next: e => {
            const s = h(e);
            if (p) o.done = e >= u;
            else {
              let i = f;
              if (0 !== e)
                if (m < 1) {
                  const t = Math.max(0, e - 5);
                  i = (0, an.R)(s - h(t), e - t)
                } else i = 0;
              const a = Math.abs(i) <= t,
                l = Math.abs(r - s) <= n;
              o.done = a && l
            }
            return o.value = o.done ? r : s, o
          },
          flipTarget: () => {
            f = -f, [i, r] = [r, i], g()
          }
        }
      }
      un.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
      const pn = e => 0,
        hn = {
          decay: function({
            keyframes: e = [0],
            velocity: t = 0,
            power: n = .8,
            timeConstant: s = 350,
            restDelta: i = .5,
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
                const t = -l * Math.exp(-e / s);
                return a.done = !(t > i || t < -i), a.value = a.done ? d : d + t, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: Kt,
          tween: Kt,
          spring: un
        };

      function fn(e, t, n = 0) {
        return e - t - n
      }
      const mn = e => {
        const t = ({
          delta: t
        }) => e(t);
        return {
          start: () => At.Z_.update(t, !0),
          stop: () => At.qY.update(t)
        }
      };

      function gn({
        duration: e,
        driver: t = mn,
        elapsed: n = 0,
        repeat: s = 0,
        repeatType: i = "loop",
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
        let v, y, w, x = 0,
          b = e,
          S = !1,
          C = !0;
        const T = hn[o.length > 2 ? "keyframes" : h],
          E = o[0],
          P = o[o.length - 1];
        (null === (g = (m = T).needsInterpolation) || void 0 === g ? void 0 : g.call(m, E, P)) && (w = (0, zt.s)([0, 100], [E, P], {
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
            y = e.value, w && (y = w(y)), S = C ? e.done : n <= 0
          }
          p && p(y), S && (0 === x && (b = void 0 !== b ? b : n), x < s ? function(e, t, n, s) {
            return s ? e >= t + n : e <= -n
          }(n, b, r, C) && (x++, "reverse" === i ? (C = x % 2 == 0, n = function(e, t = 0, n = 0, s = !0) {
            return s ? fn(t + -e, t, n) : t - (e - t) + n
          }(n, b, r, C)) : (n = fn(n, b, r), "mirror" === i && M.flipTarget()), S = !1, u && u()) : (v.stop(), d && d()))
        })), v.start()), {
          stop: () => {
            c && c(), v.stop()
          },
          sample: e => M.next(Math.max(0, e))
        }
      }
      const vn = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`,
        yn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: vn([0, .65, .55, 1]),
          circOut: vn([.55, 0, 1, .45]),
          backIn: vn([.31, .01, .66, -.59]),
          backOut: vn([.33, 1.53, .69, .99])
        };

      function wn(e) {
        if (e) return Array.isArray(e) ? vn(e) : yn[e]
      }

      function xn(e, t) {
        const n = performance.now(),
          s = ({
            timestamp: i
          }) => {
            const r = i - n;
            r >= t && (At.qY.read(s), e(r - t))
          };
        return At.Z_.read(s, !0), () => At.qY.read(s)
      }

      function bn({
        keyframes: e,
        elapsed: t,
        onUpdate: n,
        onComplete: s
      }) {
        const i = () => (n && n(e[e.length - 1]), s && s(), () => {});
        return t ? xn(i, -t) : i()
      }
      var Sn = n(6609);
      const Cn = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Tn = e => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        En = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Pn = {
          type: "keyframes",
          duration: .8
        },
        Mn = {
          x: Cn,
          y: Cn,
          z: Cn,
          rotate: Cn,
          rotateX: Cn,
          rotateY: Cn,
          rotateZ: Cn,
          scaleX: Tn,
          scaleY: Tn,
          scale: Tn,
          opacity: En,
          backgroundColor: En,
          color: En,
          default: Tn
        },
        An = (e, {
          keyframes: t
        }) => t.length > 2 ? Pn : (Mn[e] || Mn.default)(t[1]),
        kn = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !ct.P.test(t) || t.startsWith("url(")));

      function Ln(e) {
        return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
      }

      function On(e) {
        return "number" == typeof e ? 0 : yt("", e)
      }

      function Vn(e, t) {
        return e[t] || e.default || e
      }
      const $n = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        Dn = {},
        Bn = {};
      for (const e in $n) Bn[e] = () => (void 0 === Dn[e] && (Dn[e] = $n[e]()), Dn[e]);
      const In = new Set(["opacity"]),
        Rn = (e, t, n, s = {}) => i => {
          const r = Vn(s, e) || {},
            o = r.delay || s.delay || 0;
          let {
            elapsed: a = 0
          } = s;
          a -= $t(o);
          const l = function(e, t, n, s) {
              const i = kn(t, n);
              let r = void 0 !== s.from ? s.from : e.get();
              return "none" === r && i && "string" == typeof n ? r = yt(t, n) : Ln(r) && "string" == typeof n ? r = On(n) : !Array.isArray(n) && Ln(n) && "string" == typeof r && (n = On(r)), Array.isArray(n) ? (null === n[0] && (n[0] = r), n) : [r, n]
            }(t, e, n, r),
            c = l[0],
            d = l[l.length - 1],
            u = kn(e, c),
            p = kn(e, d);
          (0, Vt.K)(u === p, `You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);
          let h = {
            keyframes: l,
            velocity: t.getVelocity(),
            ...r,
            elapsed: a,
            onUpdate: e => {
              t.set(e), r.onUpdate && r.onUpdate(e)
            },
            onComplete: () => {
              i(), r.onComplete && r.onComplete()
            }
          };
          if (!u || !p || !1 === r.type) return bn(h);
          if ("inertia" === r.type) {
            const e = function({
              keyframes: e,
              velocity: t = 0,
              min: n,
              max: s,
              power: i = .8,
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
                return void 0 !== n && e < n || void 0 !== s && e > s
              }

              function v(e) {
                return void 0 === n ? s : void 0 === s || Math.abs(n - e) < Math.abs(s - e) ? n : s
              }

              function y(e) {
                null == m || m.stop(), m = gn({
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

              function w(e) {
                y({
                  type: "spring",
                  stiffness: o,
                  damping: a,
                  restDelta: l,
                  ...e
                })
              }
              if (g(f)) w({
                velocity: t,
                keyframes: [f, v(f)]
              });
              else {
                let e = i * t + f;
                void 0 !== c && (e = c(e));
                const s = v(e),
                  o = s === n ? -1 : 1;
                let a, d;
                const u = e => {
                  a = d, d = e, t = (0, an.R)(e - a, Sn.frameData.delta), (1 === o && e > s || -1 === o && e < s) && w({
                    keyframes: [e, s],
                    velocity: t
                  })
                };
                y({
                  type: "decay",
                  keyframes: [f, 0],
                  velocity: t,
                  timeConstant: r,
                  power: i,
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
            staggerChildren: s,
            staggerDirection: i,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            ...c
          }) {
            return !!Object.keys(c).length
          })(r) || (h = {
            ...h,
            ...An(e, h)
          }), h.duration && (h.duration = $t(h.duration)), h.repeatDelay && (h.repeatDelay = $t(h.repeatDelay));
          const f = t.owner,
            m = f && f.current;
          if (Bn.waapi() && In.has(e) && !h.repeatDelay && "mirror" !== h.repeatType && 0 !== h.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate) return function(e, t, {
            onUpdate: n,
            onComplete: s,
            ...i
          }) {
            let {
              keyframes: r,
              duration: o = .3,
              elapsed: a = 0,
              ease: l
            } = i;
            if ("spring" === i.type || !(!(c = i.ease) || Array.isArray(c) || "string" == typeof c && yn[c])) {
              const e = gn(i);
              let t = {
                done: !1,
                value: r[0]
              };
              const n = [];
              let s = 0;
              for (; !t.done;) t = e.sample(s), n.push(t.value), s += 10;
              r = n, o = s - 10, l = "linear"
            }
            var c;
            const d = function(e, t, n, {
              delay: s = 0,
              duration: i,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l
            } = {}) {
              return e.animate({
                [t]: n,
                offset: l
              }, {
                delay: s,
                duration: i,
                easing: wn(a),
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal"
              })
            }(e.owner.current, t, r, {
              ...i,
              delay: -a,
              duration: o,
              ease: l
            });
            return d.onfinish = () => {
              e.set(r[r.length - 1]), s && s()
            }, () => {
              const {
                currentTime: t
              } = d;
              if (t) {
                const n = gn(i);
                e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
              }
              At.Z_.update((() => d.cancel()))
            }
          }(t, e, h); {
            const e = gn(h);
            return () => e.stop()
          }
        };

      function jn(e, t, n = {}) {
        var s;
        const i = Tt(e, t, n.custom);
        let {
          transition: r = e.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (r = n.transitionOverride);
        const o = i ? () => zn(e, i, n) : () => Promise.resolve(),
          a = (null === (s = e.variantChildren) || void 0 === s ? void 0 : s.size) ? (s = 0) => {
            const {
              delayChildren: i = 0,
              staggerChildren: o,
              staggerDirection: a
            } = r;
            return function(e, t, n = 0, s = 0, i = 1, r) {
              const o = [],
                a = (e.variantChildren.size - 1) * s,
                l = 1 === i ? (e = 0) => e * s : (e = 0) => a - e * s;
              return Array.from(e.variantChildren).sort(_n).forEach(((e, s) => {
                o.push(jn(e, t, {
                  ...r,
                  delay: n + l(s)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(o)
            }(e, t, i + s, o, a, n)
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

      function zn(e, t, {
        delay: n = 0,
        transitionOverride: s,
        type: i
      } = {}) {
        var r;
        let {
          transition: o = e.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e.makeTargetAnimatable(t);
        const c = e.getValue("willChange");
        s && (o = s);
        const d = [],
          u = i && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[i]);
        for (const t in l) {
          const s = e.getValue(t),
            i = l[t];
          if (!s || void 0 === i || u && Fn(u, t)) continue;
          let r = {
            delay: n,
            elapsed: 0,
            ...o
          };
          if (e.shouldReduceMotion && $.has(t) && (r = {
              ...r,
              type: !1,
              delay: 0
            }), !s.hasAnimated) {
            const n = e.getProps()[Ot];
            n && (r.elapsed = Lt(n, t))
          }
          let a = s.start(Rn(t, s, i, r));
          Mt(c) && (c.add(t), a = a.then((() => c.remove(t)))), d.push(a)
        }
        return Promise.all(d).then((() => {
          a && function(e, t) {
            const n = Tt(e, t);
            let {
              transitionEnd: s = {},
              transition: i = {},
              ...r
            } = n ? e.makeTargetAnimatable(n, !1) : {};
            r = {
              ...r,
              ...s
            };
            for (const t in r) Et(e, t, me(r[t]))
          }(e, a)
        }))
      }

      function _n(e, t) {
        return e.sortNodePosition(t)
      }

      function Fn({
        protectedKeys: e,
        needsAnimating: t
      }, n) {
        const s = e.hasOwnProperty(n) && !0 !== t[n];
        return t[n] = !1, s
      }
      const Nn = [be.Animate, be.InView, be.Focus, be.Hover, be.Tap, be.Drag, be.Exit],
        Gn = [...Nn].reverse(),
        Hn = Nn.length;

      function Wn(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: n
          }) => function(e, t, n = {}) {
            let s;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const i = t.map((t => jn(e, t, n)));
              s = Promise.all(i)
            } else if ("string" == typeof t) s = jn(e, t, n);
            else {
              const i = "function" == typeof t ? Tt(e, t, n.custom) : t;
              s = zn(e, i, n)
            }
            return s.then((() => e.notify("AnimationComplete", t)))
          }(e, t, n))))
        }(e);
        const n = {
          [be.Animate]: Un(!0),
          [be.InView]: Un(),
          [be.Hover]: Un(),
          [be.Tap]: Un(),
          [be.Drag]: Un(),
          [be.Focus]: Un(),
          [be.Exit]: Un()
        };
        let s = !0;
        const i = (t, n) => {
          const s = Tt(e, n);
          if (s) {
            const {
              transition: e,
              transitionEnd: n,
              ...i
            } = s;
            t = {
              ...t,
              ...i,
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
          for (let t = 0; t < Hn; t++) {
            const v = Gn[t],
              y = n[v],
              w = void 0 !== a[v] ? a[v] : l[v],
              x = d(w),
              b = v === o ? y.isActive : null;
            !1 === b && (f = t);
            let S = w === l[v] && w !== a[v] && x;
            if (S && s && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                ...h
              }, !y.isActive && null === b || !w && !y.prevProp || u(w) || "boolean" == typeof w) continue;
            const C = (m = y.prevProp, "string" == typeof(g = w) ? g !== m : !!Array.isArray(g) && !at(g, m));
            let T = C || v === o && y.isActive && !S && x || t > f && x;
            const E = Array.isArray(w) ? w : [w];
            let P = E.reduce(i, {});
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
              h.hasOwnProperty(e) || (t !== n ? he(t) && he(n) ? !at(t, n) || C ? k(e) : y.protectedKeys[e] = !0 : void 0 !== t ? k(e) : p.add(e) : void 0 !== t && p.has(e) ? k(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = w, y.prevResolvedValues = P, y.isActive && (h = {
              ...h,
              ...P
            }), s && e.blockInitialAnimation && (T = !1), T && !S && c.push(...E.map((e => ({
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
              const s = e.getBaseTarget(n);
              void 0 !== s && (t[n] = s)
            })), c.push({
              animation: t
            })
          }
          let v = Boolean(c.length);
          return s && !1 === a.initial && !e.manuallyAnimateOnMount && (v = !1), s = !1, v ? t(c) : Promise.resolve()
        }
        return {
          animateChanges: r,
          setActive: function(t, s, i) {
            var o;
            if (n[t].isActive === s) return Promise.resolve();
            null === (o = e.variantChildren) || void 0 === o || o.forEach((e => {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, s)
            })), n[t].isActive = s;
            const a = r(i, t);
            for (const e in n) n[e].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(n) {
            t = n(e)
          },
          getState: () => n
        }
      }

      function Un(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const Yn = {
          animation: it((({
            visualElement: e,
            animate: t
          }) => {
            e.animationState || (e.animationState = Wn(e)), u(t) && (0, s.useEffect)((() => t.subscribe(e)), [t])
          })),
          exit: it((e => {
            const {
              custom: t,
              visualElement: n
            } = e, [i, r] = ot(), a = (0, s.useContext)(o);
            (0, s.useEffect)((() => {
              n.isPresent = i;
              const e = n.animationState && n.animationState.setActive(be.Exit, !i, {
                custom: a && a.custom || t
              });
              e && !i && e.then(r)
            }), [i])
          }))
        },
        qn = (e, t) => Math.abs(e - t);
      class Xn {
        constructor(e, t, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Jn(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n = function(e, t) {
                  const n = qn(e.x, t.x),
                    s = qn(e.y, t.y);
                  return Math.sqrt(n ** 2 + s ** 2)
                }(e.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!t && !n) return;
              const {
                point: s
              } = e, {
                timestamp: i
              } = Sn.frameData;
              this.history.push({
                ...s,
                timestamp: i
              });
              const {
                onStart: r,
                onMove: o
              } = this.handlers;
              t || (r && r(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = Zn(t, this.transformPagePoint), Te(e) && 0 === e.buttons ? this.handlePointerUp(e, t) : At.Z_.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: s
              } = this.handlers, i = Jn(Zn(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, i), s && s(e, i)
            }, Ee(e) && e.touches.length > 1) return;
          this.handlers = t, this.transformPagePoint = n;
          const s = Zn(ke(e), this.transformPagePoint),
            {
              point: i
            } = s,
            {
              timestamp: r
            } = Sn.frameData;
          this.history = [{
            ...i,
            timestamp: r
          }];
          const {
            onSessionStart: o
          } = t;
          o && o(e, Jn(s, this.history)), this.removeListeners = (0, Ye.z)(Re(window, "pointermove", this.handlePointerMove), Re(window, "pointerup", this.handlePointerUp), Re(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), At.qY.update(this.updatePoint)
        }
      }

      function Zn(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function Kn(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function Jn({
        point: e
      }, t) {
        return {
          point: e,
          delta: Kn(e, es(t)),
          offset: Kn(e, Qn(t)),
          velocity: ts(t, .1)
        }
      }

      function Qn(e) {
        return e[0]
      }

      function es(e) {
        return e[e.length - 1]
      }

      function ts(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let n = e.length - 1,
          s = null;
        const i = es(e);
        for (; n >= 0 && (s = e[n], !(i.timestamp - s.timestamp > $t(t)));) n--;
        if (!s) return {
          x: 0,
          y: 0
        };
        const r = (i.timestamp - s.timestamp) / 1e3;
        if (0 === r) return {
          x: 0,
          y: 0
        };
        const o = {
          x: (i.x - s.x) / r,
          y: (i.y - s.y) / r
        };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
      }
      var ns = n(9686),
        ss = n(3133);

      function is(e) {
        return e.max - e.min
      }

      function rs(e, t = 0, n = .01) {
        return Math.abs(e - t) <= n
      }

      function os(e, t, n, s = .5) {
        e.origin = s, e.originPoint = (0, ss.C)(t.min, t.max, e.origin), e.scale = is(n) / is(t), (rs(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, ss.C)(n.min, n.max, e.origin) - e.originPoint, (rs(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function as(e, t, n, s) {
        os(e.x, t.x, n.x, null == s ? void 0 : s.originX), os(e.y, t.y, n.y, null == s ? void 0 : s.originY)
      }

      function ls(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + is(t)
      }

      function cs(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + is(t)
      }

      function ds(e, t, n) {
        cs(e.x, t.x, n.x), cs(e.y, t.y, n.y)
      }

      function us(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function ps(e, t) {
        let n = t.min - e.min,
          s = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), {
          min: n,
          max: s
        }
      }
      const hs = .35;

      function fs(e, t, n) {
        return {
          min: ms(e, t),
          max: ms(e, n)
        }
      }

      function ms(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      const gs = () => ({
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
        }),
        vs = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function ys(e) {
        return [e("x"), e("y")]
      }

      function ws({
        top: e,
        left: t,
        right: n,
        bottom: s
      }) {
        return {
          x: {
            min: t,
            max: n
          },
          y: {
            min: e,
            max: s
          }
        }
      }

      function xs(e) {
        return void 0 === e || 1 === e
      }

      function bs({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !xs(e) || !xs(t) || !xs(n)
      }

      function Ss(e) {
        return bs(e) || Cs(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function Cs(e) {
        return Ts(e.x) || Ts(e.y)
      }

      function Ts(e) {
        return e && "0%" !== e
      }

      function Es(e, t, n) {
        return n + t * (e - n)
      }

      function Ps(e, t, n, s, i) {
        return void 0 !== i && (e = Es(e, i, s)), Es(e, n, s) + t
      }

      function Ms(e, t = 0, n = 1, s, i) {
        e.min = Ps(e.min, t, n, s, i), e.max = Ps(e.max, t, n, s, i)
      }

      function As(e, {
        x: t,
        y: n
      }) {
        Ms(e.x, t.translate, t.scale, t.originPoint), Ms(e.y, n.translate, n.scale, n.originPoint)
      }

      function ks(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function Ls(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function Os(e, t, [n, s, i]) {
        const r = void 0 !== t[i] ? t[i] : .5,
          o = (0, ss.C)(e.min, e.max, r);
        Ms(e, t[n], t[s], o, t.scale)
      }
      const Vs = ["x", "scaleX", "originX"],
        $s = ["y", "scaleY", "originY"];

      function Ds(e, t) {
        Os(e.x, t, Vs), Os(e.y, t, $s)
      }

      function Bs(e, t) {
        return ws(function(e, t) {
          if (!t) return e;
          const n = t({
              x: e.left,
              y: e.top
            }),
            s = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: s.y,
            right: s.x
          }
        }(e.getBoundingClientRect(), t))
      }
      const Is = new WeakMap;
      class Rs {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = vs(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new Xn(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(ke(e, "page").point)
            },
            onStart: (e, t) => {
              var n;
              const {
                drag: s,
                dragPropagation: i,
                onDragStart: r
              } = this.getProps();
              (!s || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ne(s), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ys((e => {
                var t, n;
                let s = this.getAxisMotionValue(e).get() || 0;
                if (F.aQ.test(s)) {
                  const i = null === (n = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                  i && (s = is(i) * (parseFloat(s) / 100))
                }
                this.originPoint[e] = s
              })), null == r || r(e, t), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(be.Drag, !0))
            },
            onMove: (e, t) => {
              const {
                dragPropagation: n,
                dragDirectionLock: s,
                onDirectionLock: i,
                onDrag: r
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: o
              } = t;
              if (s && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
                let n = null;
                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
              }(o), void(null !== this.currentDirection && (null == i || i(this.currentDirection)));
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
            velocity: s
          } = t;
          this.startAnimation(s);
          const {
            onDragEnd: i
          } = this.getProps();
          null == i || i(e, t)
        }
        cancel() {
          var e, t;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(be.Drag, !1)
        }
        updateAxis(e, t, n) {
          const {
            drag: s
          } = this.getProps();
          if (!n || !js(e, s, this.currentDirection)) return;
          const i = this.getAxisMotionValue(e);
          let r = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (r = function(e, {
            min: t,
            max: n
          }, s) {
            return void 0 !== t && e < t ? e = s ? (0, ss.C)(t, e, s.min) : Math.max(e, t) : void 0 !== n && e > n && (e = s ? (0, ss.C)(n, e, s.max) : Math.min(e, n)), e
          }(r, this.constraints[e], this.elastic[e])), i.set(r)
        }
        resolveConstraints() {
          const {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, s = this.constraints;
          e && c(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !n) && function(e, {
            top: t,
            left: n,
            bottom: s,
            right: i
          }) {
            return {
              x: us(e.x, n, i),
              y: us(e.y, t, s)
            }
          }(n.layoutBox, e), this.elastic = function(e = hs) {
            return !1 === e ? e = 0 : !0 === e && (e = hs), {
              x: fs(e, "left", "right"),
              y: fs(e, "top", "bottom")
            }
          }(t), s !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ys((e => {
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
          (0, Vt.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: s
          } = this.visualElement;
          if (!s || !s.layout) return !1;
          const i = function(e, t, n) {
            const s = Bs(e, n),
              {
                scroll: i
              } = t;
            return i && (Ls(s.x, i.offset.x), Ls(s.y, i.offset.y)), s
          }(n, s.root, this.visualElement.getTransformPagePoint());
          let r = function(e, t) {
            return {
              x: ps(e.x, t.x),
              y: ps(e.y, t.y)
            }
          }(s.layout.layoutBox, i);
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
            this.hasMutatedConstraints = !!e, e && (r = ws(e))
          }
          return r
        }
        startAnimation(e) {
          const {
            drag: t,
            dragMomentum: n,
            dragElastic: s,
            dragTransition: i,
            dragSnapToOrigin: r,
            onDragTransitionEnd: o
          } = this.getProps(), a = this.constraints || {}, l = ys((o => {
            if (!js(o, t, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[o]) || {};
            r && (l = {
              min: 0,
              max: 0
            });
            const c = s ? 200 : 1e6,
              d = s ? 40 : 1e7,
              u = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: c,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(o, u)
          }));
          return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return n.start(Rn(e, n, 0, t))
        }
        stopAnimation() {
          ys((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          var t;
          const n = "_drag" + e.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
        }
        snapToCursor(e) {
          ys((t => {
            const {
              drag: n
            } = this.getProps();
            if (!js(t, n, this.currentDirection)) return;
            const {
              projection: s
            } = this.visualElement, i = this.getAxisMotionValue(t);
            if (s && s.layout) {
              const {
                min: n,
                max: r
              } = s.layout.layoutBox[t];
              i.set(e[t] - (0, ss.C)(n, r, .5))
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
            projection: s
          } = this.visualElement;
          if (!c(n) || !s || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          ys((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const n = t.get();
              i[e] = function(e, t) {
                let n = .5;
                const s = is(e),
                  i = is(t);
                return i > s ? n = (0, ns.Y)(t.min, t.max - s, e.min) : s > i && (n = (0, ns.Y)(e.min, e.max - i, t.min)), (0, Jt.u)(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: r
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = r ? r({}, "") : "none", null === (e = s.root) || void 0 === e || e.updateScroll(), s.updateLayout(), this.resolveConstraints(), ys((e => {
            if (!js(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: s,
                max: r
              } = this.constraints[e];
            n.set((0, ss.C)(s, r, i[e]))
          }))
        }
        addListeners() {
          var e;
          if (!this.visualElement.current) return;
          Is.set(this.visualElement, this);
          const t = Re(this.visualElement.current, "pointerdown", (e => {
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
              projection: s
            } = this.visualElement,
            i = s.addEventListener("measure", n);
          s && !s.layout && (null === (e = s.root) || void 0 === e || e.updateScroll(), s.updateLayout()), n();
          const r = Se(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = s.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (ys((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            r(), t(), i(), null == o || o()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: s = !1,
              dragConstraints: i = !1,
              dragElastic: r = hs,
              dragMomentum: o = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: r,
            dragMomentum: o
          }
        }
      }

      function js(e, t, n) {
        return !(!0 !== t && t !== e || null !== n && n !== e)
      }
      const zs = {
        pan: it((function({
          onPan: e,
          onPanStart: t,
          onPanEnd: n,
          onPanSessionStart: r,
          visualElement: o
        }) {
          const a = e || t || n || r,
            l = (0, s.useRef)(null),
            {
              transformPagePoint: c
            } = (0, s.useContext)(i._),
            d = {
              onSessionStart: r,
              onStart: t,
              onMove: e,
              onEnd: (e, t) => {
                l.current = null, n && n(e, t)
              }
            };
          (0, s.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(d)
          })), je(o, "pointerdown", a && function(e) {
            l.current = new Xn(e, d, {
              transformPagePoint: c
            })
          }), Ue((() => l.current && l.current.end()))
        })),
        drag: it((function(e) {
          const {
            dragControls: t,
            visualElement: n
          } = e, i = (0, w.h)((() => new Rs(n)));
          (0, s.useEffect)((() => t && t.subscribe(i)), [i, t]), (0, s.useEffect)((() => i.addListeners()), [i])
        }))
      };

      function _s(e) {
        return "string" == typeof e && e.startsWith("var(--")
      }
      const Fs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Ns(e, t, n = 1) {
        (0, Vt.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [s, i] = function(e) {
          const t = Fs.exec(e);
          if (!t) return [, ];
          const [, n, s] = t;
          return [n, s]
        }(e);
        if (!s) return;
        const r = window.getComputedStyle(t).getPropertyValue(s);
        return r ? r.trim() : _s(i) ? Ns(i, t, n + 1) : i
      }
      const Gs = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Hs = e => Gs.has(e),
        Ws = (e, t) => {
          e.set(t, !1), e.set(t)
        },
        Us = e => e === _.Rx || e === F.px;
      var Ys;
      ! function(e) {
        e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
      }(Ys || (Ys = {}));
      const qs = (e, t) => parseFloat(e.split(", ")[t]),
        Xs = (e, t) => (n, {
          transform: s
        }) => {
          if ("none" === s || !s) return 0;
          const i = s.match(/^matrix3d\((.+)\)$/);
          if (i) return qs(i[1], t); {
            const t = s.match(/^matrix\((.+)\)$/);
            return t ? qs(t[1], e) : 0
          }
        },
        Zs = new Set(["x", "y", "z"]),
        Ks = V.filter((e => !Zs.has(e))),
        Js = {
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
          x: Xs(4, 13),
          y: Xs(5, 14)
        };

      function Qs(e, t, n, s) {
        return (e => Object.keys(e).some(Hs))(t) ? ((e, t, n = {}, s = {}) => {
          t = {
            ...t
          }, s = {
            ...s
          };
          const i = Object.keys(t).filter(Hs);
          let r = [],
            o = !1;
          const a = [];
          if (i.forEach((i => {
              const l = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = n[i],
                d = bt(c);
              const u = t[i];
              let p;
              if (he(u)) {
                const e = u.length,
                  t = null === u[0] ? 1 : 0;
                c = u[t], d = bt(c);
                for (let n = t; n < e; n++) p ? (0, Vt.k)(bt(u[n]) === p, "All keyframes must be of the same type") : (p = bt(u[n]), (0, Vt.k)(p === d || Us(d) && Us(p), "Keyframes must be of the same dimension as the current value"))
              } else p = bt(u);
              if (d !== p)
                if (Us(d) && Us(p)) {
                  const e = l.get();
                  "string" == typeof e && l.set(parseFloat(e)), "string" == typeof u ? t[i] = parseFloat(u) : Array.isArray(u) && p === F.px && (t[i] = u.map(parseFloat))
                } else(null == d ? void 0 : d.transform) && (null == p ? void 0 : p.transform) && (0 === c || 0 === u) ? 0 === c ? l.set(p.transform(c)) : t[i] = d.transform(u) : (o || (r = function(e) {
                  const t = [];
                  return Ks.forEach((n => {
                    const s = e.getValue(n);
                    void 0 !== s && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), o = !0), a.push(i), s[i] = void 0 !== s[i] ? s[i] : t[i], Ws(l, u))
            })), a.length) {
            const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((e, t, n) => {
                const s = t.measureViewportBox(),
                  i = t.current,
                  r = getComputedStyle(i),
                  {
                    display: o
                  } = r,
                  a = {};
                "none" === o && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
                  a[e] = Js[e](s, r)
                })), t.render();
                const l = t.measureViewportBox();
                return n.forEach((n => {
                  const s = t.getValue(n);
                  Ws(s, a[n]), e[n] = Js[n](l, r)
                })), e
              })(t, e, a);
            return r.length && r.forEach((([t, n]) => {
              e.getValue(t).set(n)
            })), e.render(), y.j && null !== n && window.scrollTo({
              top: n
            }), {
              target: i,
              transitionEnd: s
            }
          }
          return {
            target: t,
            transitionEnd: s
          }
        })(e, t, n, s) : {
          target: t,
          transitionEnd: s
        }
      }
      const ei = {
          current: null
        },
        ti = {
          current: !1
        };
      var ni = n(9548);
      const si = Object.keys(v),
        ii = si.length,
        ri = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class oi {
        constructor({
          parent: e,
          props: t,
          reducedMotionConfig: n,
          visualState: s
        }, i = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => At.Z_.render(this.render, !1, !0);
          const {
            latestValues: r,
            renderState: o
          } = s;
          this.latestValues = r, this.baseTarget = {
            ...r
          }, this.initialValues = t.initial ? {
            ...r
          } : {}, this.renderState = o, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = h(t), this.isVariantNode = f(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(t);
          for (const e in l) {
            const t = l[e];
            void 0 !== r[e] && B(t) && (t.set(r[e], !1), Mt(a) && a.add(e))
          }
        }
        scrapeMotionValuesFromProps(e) {
          return {}
        }
        mount(e) {
          var t;
          this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), ti.current || function() {
            if (ti.current = !0, y.j)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => ei.current = e.matches;
                e.addListener(t), t()
              } else ei.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ei.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var e, t, n;
          null === (e = this.projection) || void 0 === e || e.unmount(), At.qY.update(this.notifyUpdate), At.qY.render(this.render), this.valueSubscriptions.forEach((e => e())), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const n = $.has(e),
            s = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && At.Z_.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, (() => {
            s(), i()
          }))
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        loadFeatures(e, t, n, i, r, o) {
          const a = [];
          "production" !== Xe && n && t && (0, Vt.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let t = 0; t < ii; t++) {
            const n = si[t],
              {
                isEnabled: i,
                Component: r
              } = v[n];
            i(e) && r && a.push((0, s.createElement)(r, {
              key: n,
              ...e,
              visualElement: this
            }))
          }
          if (!this.projection && r) {
            this.projection = new r(i, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: t,
              layout: n,
              drag: s,
              dragConstraints: a,
              layoutScroll: l
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: Boolean(s) || a && c(a),
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : vs()
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
          for (let t = 0; t < ri.length; t++) {
            const n = ri[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const s = e["on" + n];
            s && (this.propEventSubscriptions[n] = this.on(n, s))
          }
          this.prevMotionValues = function(e, t, n) {
            const {
              willChange: s
            } = t;
            for (const i in t) {
              const r = t[i],
                o = n[i];
              if (B(r)) e.addValue(i, r), Mt(s) && s.add(i);
              else if (B(o)) e.addValue(i, (0, lt.B)(r, {
                owner: e
              })), Mt(s) && s.remove(i);
              else if (o !== r)
                if (e.hasValue(i)) {
                  const t = e.getValue(i);
                  !t.hasAnimated && t.set(r)
                } else {
                  const t = e.getStaticValue(i);
                  e.addValue(i, (0, lt.B)(void 0 !== t ? t : r))
                }
            }
            for (const s in n) void 0 === t[s] && e.removeValue(s);
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
          const s = {};
          for (let e = 0; e < li; e++) {
            const t = ai[e],
              n = this.props[t];
            (d(n) || !1 === n) && (s[t] = n)
          }
          return s
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
          return void 0 === n && void 0 !== t && (n = (0, lt.B)(t, {
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
          } = this.props, s = "string" == typeof n || "object" == typeof n ? null === (t = pe(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
          if (n && void 0 !== s) return s;
          const i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || B(i) ? void 0 !== this.initialValues[e] && void 0 === s ? void 0 : this.baseTarget[e] : i
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new ni.L), this.events[e].add(t)
        }
        notify(e, ...t) {
          var n;
          null === (n = this.events[e]) || void 0 === n || n.notify(...t)
        }
      }
      const ai = ["initial", ...Nn],
        li = ai.length;
      class ci extends oi {
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
          transformValues: s
        }, i) {
          let r = function(e, t, n) {
            var s;
            const i = {};
            for (const r in e) {
              const e = Pt(r, t);
              i[r] = void 0 !== e ? e : null === (s = n.getValue(r)) || void 0 === s ? void 0 : s.get()
            }
            return i
          }(n, e || {}, this);
          if (s && (t && (t = s(t)), n && (n = s(n)), r && (r = s(r))), i) {
            ! function(e, t, n) {
              var s, i;
              const r = Object.keys(t).filter((t => !e.hasValue(t))),
                o = r.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  const o = r[a],
                    l = t[o];
                  let c = null;
                  Array.isArray(l) && (c = l[0]), null === c && (c = null !== (i = null !== (s = n[o]) && void 0 !== s ? s : e.readValue(o)) && void 0 !== i ? i : t[o]), null != c && ("string" == typeof c && (/^\-?\d*\.?\d+$/.test(c) || /^0[^.\s]+$/.test(c)) ? c = parseFloat(c) : !Ct(c) && ct.P.test(l) && (c = yt(o, l)), e.addValue(o, (0, lt.B)(c, {
                    owner: e
                  })), void 0 === n[o] && (n[o] = c), null !== c && e.setBaseTarget(o, c))
                }
            }(this, n, r);
            const e = ((e, t, n, s) => {
              const i = function(e, {
                ...t
              }, n) {
                const s = e.current;
                if (!(s instanceof Element)) return {
                  target: t,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), e.values.forEach((e => {
                  const t = e.get();
                  if (!_s(t)) return;
                  const n = Ns(t, s);
                  n && e.set(n)
                }));
                for (const e in t) {
                  const i = t[e];
                  if (!_s(i)) continue;
                  const r = Ns(i, s);
                  r && (t[e] = r, n && void 0 === n[e] && (n[e] = i))
                }
                return {
                  target: t,
                  transitionEnd: n
                }
              }(e, t, s);
              return Qs(e, t = i.target, n, s = i.transitionEnd)
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
      class di extends ci {
        readValueFromInstance(e, t) {
          if ($.has(t)) {
            const e = vt(t);
            return e && e.default || 0
          } {
            const s = (n = e, window.getComputedStyle(n)),
              i = (j(t) ? s.getPropertyValue(t) : s[t]) || 0;
            return "string" == typeof i ? i.trim() : i
          }
          var n
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return Bs(e, t)
        }
        build(e, t, n, s) {
          H(e, t, n, s.transformTemplate)
        }
        scrapeMotionValuesFromProps(e) {
          return de(e)
        }
        renderInstance(e, t, n, s) {
          ae(e, t, n, s)
        }
      }
      class ui extends ci {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          var n;
          return $.has(t) ? (null === (n = vt(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = le.has(t) ? t : oe(t), e.getAttribute(t))
        }
        measureInstanceViewportBox() {
          return vs()
        }
        scrapeMotionValuesFromProps(e) {
          return ue(e)
        }
        build(e, t, n, s) {
          te(e, t, n, this.isSVGTag, s.transformTemplate)
        }
        renderInstance(e, t, n, s) {
          ce(e, t, 0, s)
        }
        mount(e) {
          this.isSVGTag = se(e.tagName), super.mount(e)
        }
      }
      const pi = (e, t) => L(e) ? new ui(t, {
        enableHardwareAcceleration: !1
      }) : new di(t, {
        enableHardwareAcceleration: !0
      });

      function hi(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const fi = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!F.px.test(e)) return e;
              e = parseFloat(e)
            }
            return `${hi(e,t.target.x)}% ${hi(e,t.target.y)}%`
          }
        },
        mi = "_$css",
        gi = {
          correct: (e, {
            treeScale: t,
            projectionDelta: n
          }) => {
            const s = e,
              i = e.includes("var("),
              r = [];
            i && (e = e.replace(Fs, (e => (r.push(e), mi))));
            const o = ct.P.parse(e);
            if (o.length > 5) return s;
            const a = ct.P.createTransformer(e),
              l = "number" != typeof o[0] ? 1 : 0,
              c = n.x.scale * t.x,
              d = n.y.scale * t.y;
            o[0 + l] /= c, o[1 + l] /= d;
            const u = (0, ss.C)(c, d, .5);
            "number" == typeof o[2 + l] && (o[2 + l] /= u), "number" == typeof o[3 + l] && (o[3 + l] /= u);
            let p = a(o);
            if (i) {
              let e = 0;
              p = p.replace(mi, (() => {
                const t = r[e];
                return e++, t
              }))
            }
            return p
          }
        };
      class vi extends s.Component {
        componentDidMount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: s
          } = this.props, {
            projection: i
          } = e;
          var r;
          r = yi, Object.assign(O, r), i && (t.group && t.group.add(i), n && n.register && s && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), x.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: n,
            drag: s,
            isPresent: i
          } = this.props, r = n.projection;
          return r ? (r.isPresent = i, s || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? r.promote() : r.relegate() || At.Z_.postRender((() => {
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
            projection: s
          } = e;
          s && (s.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(s), (null == n ? void 0 : n.deregister) && n.deregister(s))
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
      const yi = {
          borderRadius: {
            ...fi,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: fi,
          borderTopRightRadius: fi,
          borderBottomLeftRadius: fi,
          borderBottomRightRadius: fi,
          boxShadow: gi
        },
        wi = {
          measureLayout: function(e) {
            const [t, n] = ot(), i = (0, s.useContext)(S);
            return s.createElement(vi, {
              ...e,
              layoutGroup: i,
              switchLayoutGroup: (0, s.useContext)(T),
              isPresent: t,
              safeToRemove: n
            })
          }
        },
        xi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        bi = xi.length,
        Si = e => "string" == typeof e ? parseFloat(e) : e,
        Ci = e => "number" == typeof e || F.px.test(e);

      function Ti(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const Ei = Mi(0, .5, Ht),
        Pi = Mi(.5, .95, _t);

      function Mi(e, t, n) {
        return s => s < e ? 0 : s > t ? 1 : n((0, ns.Y)(e, t, s))
      }

      function Ai(e, t) {
        e.min = t.min, e.max = t.max
      }

      function ki(e, t) {
        Ai(e.x, t.x), Ai(e.y, t.y)
      }

      function Li(e, t, n, s, i) {
        return e = Es(e -= t, 1 / n, s), void 0 !== i && (e = Es(e, 1 / i, s)), e
      }

      function Oi(e, t, [n, s, i], r, o) {
        ! function(e, t = 0, n = 1, s = .5, i, r = e, o = e) {
          if (F.aQ.test(t) && (t = parseFloat(t), t = (0, ss.C)(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
          let a = (0, ss.C)(r.min, r.max, s);
          e === r && (a -= t), e.min = Li(e.min, t, n, a, i), e.max = Li(e.max, t, n, a, i)
        }(e, t[n], t[s], t[i], t.scale, r, o)
      }
      const Vi = ["x", "scaleX", "originX"],
        $i = ["y", "scaleY", "originY"];

      function Di(e, t, n, s) {
        Oi(e.x, t, Vi, null == n ? void 0 : n.x, null == s ? void 0 : s.x), Oi(e.y, t, $i, null == n ? void 0 : n.y, null == s ? void 0 : s.y)
      }

      function Bi(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function Ii(e) {
        return Bi(e.x) && Bi(e.y)
      }

      function Ri(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }

      function ji(e) {
        return is(e.x) / is(e.y)
      }
      var zi = n(121);
      class _i {
        constructor() {
          this.members = []
        }
        add(e) {
          (0, zi.y4)(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if ((0, zi.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
          const s = this.lead;
          if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, t && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
            const {
              crossfade: i
            } = e.options;
            !1 === i && s.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e => {
            var t, n, s, i, r;
            null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (r = null === (s = e.resumingFrom) || void 0 === s ? void 0 : (i = s.options).onExitComplete) || void 0 === r || r.call(i)
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

      function Fi(e, t, n) {
        let s = "";
        const i = e.x.translate / t.x,
          r = e.y.translate / t.y;
        if ((i || r) && (s = `translate3d(${i}px, ${r}px, 0) `), 1 === t.x && 1 === t.y || (s += `scale(${1/t.x}, ${1/t.y}) `), n) {
          const {
            rotate: e,
            rotateX: t,
            rotateY: i
          } = n;
          e && (s += `rotate(${e}deg) `), t && (s += `rotateX(${t}deg) `), i && (s += `rotateY(${i}deg) `)
        }
        const o = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return 1 === o && 1 === a || (s += `scale(${o}, ${a})`), s || "none"
      }
      const Ni = (e, t) => e.depth - t.depth;
      class Gi {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          (0, zi.y4)(this.children, e), this.isDirty = !0
        }
        remove(e) {
          (0, zi.cl)(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(Ni), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const Hi = ["", "X", "Y", "Z"];
      let Wi = 0;

      function Ui({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: s,
        resetTransform: i
      }) {
        return class {
          constructor(e, n = {}, s = (null == t ? void 0 : t())) {
            this.id = Wi++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(Xi), this.nodes.forEach(er), this.nodes.forEach(tr)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Gi)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ni.L), this.eventHandlers.get(e).add(t)
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
            var s;
            if (this.instance) return;
            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
            const {
              layoutId: i,
              layout: r,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(t), this.root.nodes.add(this), null === (s = this.parent) || void 0 === s || s.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (r || i) && (this.isLayoutDirty = !0), e) {
              let n;
              const s = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = xn(s, 250), x.hasAnimatedSinceResize && (x.hasAnimatedSinceResize = !1, this.nodes.forEach(Qi))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || r) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: s
            }) => {
              var i, r, a, l, c;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const d = null !== (r = null !== (i = this.options.transition) && void 0 !== i ? i : o.getDefaultTransition()) && void 0 !== r ? r : ar,
                {
                  onLayoutAnimationStart: u,
                  onLayoutAnimationComplete: p
                } = o.getProps(),
                h = !this.targetLayout || !Ri(this.targetLayout, s) || n,
                f = !t && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || t && (h || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, f);
                const t = {
                  ...Vn(d, "layout"),
                  onPlay: u,
                  onComplete: p
                };
                o.shouldReduceMotion && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || 0 !== this.animationProgress || Qi(this), this.isLead() && (null === (c = (l = this.options).onExitComplete) || void 0 === c || c.call(l));
              this.targetLayout = s
            }))
          }
          unmount() {
            var e, t;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, At.qY.preRender(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(nr), this.animationId++)
          }
          willUpdate(e = !0) {
            var t, n, s;
            if (this.root.isUpdateBlocked()) return void(null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              const t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot")
            }
            const {
              layoutId: i,
              layout: r
            } = this.options;
            if (void 0 === i && !r) return;
            const o = null === (s = this.options.visualElement) || void 0 === s ? void 0 : s.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == o ? void 0 : o(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Ki);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(lr), this.potentialNodes.clear()), this.nodes.forEach(Ji), this.nodes.forEach(Yi), this.nodes.forEach(qi), this.clearAllSnapshots(), At.iW.update(), At.iW.preRender(), At.iW.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(Zi), this.sharedNodes.forEach(sr)
          }
          scheduleUpdateProjection() {
            At.Z_.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            At.Z_.postRender((() => {
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
            this.layout = this.measure(!1), this.layoutCorrected = vs(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == t ? void 0 : t.layoutBox)
          }
          updateScroll(e = "measure") {
            let t = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: s(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var e;
            if (!i) return;
            const t = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !Ii(this.projectionDelta),
              s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
              r = null == s ? void 0 : s(this.latestValues, ""),
              o = r !== this.prevTransformTemplateValue;
            t && (n || Ss(this.latestValues) || o) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var s;
            return e && (n = this.removeTransform(n)), cr((s = n).x), cr(s.y), {
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
            if (!e) return vs();
            const t = e.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (Ls(t.x, n.offset.x), Ls(t.y, n.offset.y)), t
          }
          removeElementScroll(e) {
            const t = vs();
            ki(t, e);
            for (let n = 0; n < this.path.length; n++) {
              const s = this.path[n],
                {
                  scroll: i,
                  options: r
                } = s;
              if (s !== this.root && i && r.layoutScroll) {
                if (i.isRoot) {
                  ki(t, e);
                  const {
                    scroll: n
                  } = this.root;
                  n && (Ls(t.x, -n.offset.x), Ls(t.y, -n.offset.y))
                }
                Ls(t.x, i.offset.x), Ls(t.y, i.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const n = vs();
            ki(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const s = this.path[e];
              !t && s.options.layoutScroll && s.scroll && s !== s.root && Ds(n, {
                x: -s.scroll.offset.x,
                y: -s.scroll.offset.y
              }), Ss(s.latestValues) && Ds(n, s.latestValues)
            }
            return Ss(this.latestValues) && Ds(n, this.latestValues), n
          }
          removeTransform(e) {
            var t;
            const n = vs();
            ki(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const s = this.path[e];
              if (!s.instance) continue;
              if (!Ss(s.latestValues)) continue;
              bs(s.latestValues) && s.updateSnapshot();
              const i = vs();
              ki(i, s.measurePageBox()), Di(n, s.latestValues, null === (t = s.snapshot) || void 0 === t ? void 0 : t.layoutBox, i)
            }
            return Ss(this.latestValues) && Di(n, this.latestValues), n
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
              layoutId: s
            } = this.options;
            if (this.layout && (n || s)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout ? (this.relativeParent = e, this.relativeTarget = vs(), this.relativeTargetOrigin = vs(), ds(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), ki(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var i, r, o;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = vs(), this.targetWithTransforms = vs()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (i = this.target, r = this.relativeTarget, o = this.relativeParent.target, ls(i.x, r.x, o.x), ls(i.y, r.y, o.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : ki(this.target, this.layout.layoutBox), As(this.target, this.targetDelta)) : ki(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const e = this.getClosestProjectingParent();
                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = vs(), this.relativeTargetOrigin = vs(), ds(this.relativeTargetOrigin, this.target, e.target), ki(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !bs(this.parent.latestValues) && !Cs(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var e;
            const {
              isProjectionDirty: t,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const s = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== s;
            let r = !0;
            if (t && (r = !1), i && n && (r = !1), r) return;
            const {
              layout: o,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !o && !a) return;
            ki(this.layoutCorrected, this.layout.layoutBox),
              function(e, t, n, s = !1) {
                var i, r;
                const o = n.length;
                if (!o) return;
                let a, l;
                t.x = t.y = 1;
                for (let c = 0; c < o; c++) a = n[c], l = a.projectionDelta, "contents" !== (null === (r = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === r ? void 0 : r.display) && (s && a.options.layoutScroll && a.scroll && a !== a.root && Ds(e, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (t.x *= l.x.scale, t.y *= l.y.scale, As(e, l)), s && Ss(a.latestValues) && Ds(e, a.latestValues));
                t.x = ks(t.x), t.y = ks(t.y)
              }(this.layoutCorrected, this.treeScale, this.path, i);
            const {
              target: l
            } = s;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = gs(), this.projectionDeltaWithTransform = gs());
            const c = this.treeScale.x,
              d = this.treeScale.y,
              u = this.projectionTransform;
            as(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Fi(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === c && this.treeScale.y === d || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            var t, n, s;
            null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (s = this.getStack()) || void 0 === s || s.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, t = !1) {
            var n, s;
            const i = this.snapshot,
              r = (null == i ? void 0 : i.latestValues) || {},
              o = {
                ...this.latestValues
              },
              a = gs();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
            const l = vs(),
              c = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              d = ((null === (s = this.getStack()) || void 0 === s ? void 0 : s.members.length) || 0) <= 1,
              u = Boolean(c && !d && !0 === this.options.crossfade && !this.path.some(or));
            this.animationProgress = 0, this.mixTargetDelta = t => {
              var n;
              const s = t / 1e3;
              var i, p, h, f;
              ir(a.x, e.x, s), ir(a.y, e.y, s), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (ds(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, p = this.relativeTargetOrigin, h = l, f = s, rr(i.x, p.x, h.x, f), rr(i.y, p.y, h.y, f)), c && (this.animationValues = o, function(e, t, n, s, i, r) {
                i ? (e.opacity = (0, ss.C)(0, void 0 !== n.opacity ? n.opacity : 1, Ei(s)), e.opacityExit = (0, ss.C)(void 0 !== t.opacity ? t.opacity : 1, 0, Pi(s))) : r && (e.opacity = (0, ss.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, s));
                for (let i = 0; i < bi; i++) {
                  const r = `border${xi[i]}Radius`;
                  let o = Ti(t, r),
                    a = Ti(n, r);
                  void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || Ci(o) === Ci(a) ? (e[r] = Math.max((0, ss.C)(Si(o), Si(a), s), 0), (F.aQ.test(a) || F.aQ.test(o)) && (e[r] += "%")) : e[r] = a)
                }(t.rotate || n.rotate) && (e.rotate = (0, ss.C)(t.rotate || 0, n.rotate || 0, s))
              }(o, r, this.latestValues, s, u, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
            }, this.mixTargetDelta(0)
          }
          startAnimation(e) {
            var t, n;
            this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (At.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = At.Z_.update((() => {
              x.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n = {}) {
                const s = B(e) ? e : (0, lt.B)(e);
                return s.start(Rn("", s, t, n)), {
                  stop: () => s.stop(),
                  isAnimating: () => s.isAnimating()
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
              layout: s,
              latestValues: i
            } = e;
            if (t && n && s) {
              if (this !== e && this.layout && s && dr(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                n = this.target || vs();
                const t = is(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                const s = is(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + s
              }
              ki(t, n), Ds(t, i), as(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
          }
          registerSharedNode(e, t) {
            var n, s, i;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new _i), this.sharedNodes.get(e).add(t), t.promote({
              transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (i = null === (s = t.options.initialPromotionConfig) || void 0 === s ? void 0 : s.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(s, t)
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
            const s = this.getStack();
            s && s.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
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
            const s = {};
            for (let t = 0; t < Hi.length; t++) {
              const i = "rotate" + Hi[t];
              n[i] && (s[i] = n[i], e.setStaticValue(i, 0))
            }
            null == e || e.render();
            for (const t in s) e.setStaticValue(t, s[t]);
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var t, n, s;
            const i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            i.visibility = "";
            const r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = ge(e.pointerEvents) || "", i.transform = r ? r(this.latestValues, "") : "none", i;
            const o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = ge(e.pointerEvents) || ""), this.hasProjected && !Ss(this.latestValues) && (t.transform = r ? r({}, "") : "none", this.hasProjected = !1), t
            }
            const a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(), i.transform = Fi(this.projectionDeltaWithTransform, this.treeScale, a), r && (i.transform = r(a, i.transform));
            const {
              x: l,
              y: c
            } = this.projectionDelta;
            i.transformOrigin = `${100*l.origin}% ${100*c.origin}% 0`, o.animationValues ? i.opacity = o === this ? null !== (s = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== s ? s : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const e in O) {
              if (void 0 === a[e]) continue;
              const {
                correct: t,
                applyTo: n
              } = O[e], s = t(a[e], o);
              if (n) {
                const e = n.length;
                for (let t = 0; t < e; t++) i[n[t]] = s
              } else i[e] = s
            }
            return this.options.layoutId && (i.pointerEvents = o === this ? ge(e.pointerEvents) || "" : "none"), i
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(Ki), this.root.sharedNodes.clear()
          }
        }
      }

      function Yi(e) {
        e.updateLayout()
      }

      function qi(e) {
        var t, n, s;
        const i = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: n
          } = e.layout, {
            animationType: s
          } = e.options, r = i.source !== e.layout.source;
          "size" === s ? ys((e => {
            const n = r ? i.measuredBox[e] : i.layoutBox[e],
              s = is(n);
            n.min = t[e].min, n.max = n.min + s
          })) : dr(s, i.layoutBox, t) && ys((e => {
            const n = r ? i.measuredBox[e] : i.layoutBox[e],
              s = is(t[e]);
            n.max = n.min + s
          }));
          const o = gs();
          as(o, t, i.layoutBox);
          const a = gs();
          r ? as(a, e.applyTransform(n, !0), i.measuredBox) : as(a, t, i.layoutBox);
          const l = !Ii(o);
          let c = !1;
          if (!e.resumeFrom) {
            const n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: e,
                layout: s
              } = n;
              if (e && s) {
                const n = vs();
                ds(n, i.layoutBox, e.layoutBox);
                const r = vs();
                ds(r, t, s.layoutBox), Ri(n, r) || (c = !0)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c
          })
        } else e.isLead() && (null === (s = (n = e.options).onExitComplete) || void 0 === s || s.call(n));
        e.options.transition = void 0
      }

      function Xi(e) {
        e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
      }

      function Zi(e) {
        e.clearSnapshot()
      }

      function Ki(e) {
        e.clearMeasurements()
      }

      function Ji(e) {
        const {
          visualElement: t
        } = e.options;
        (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function Qi(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
      }

      function er(e) {
        e.resolveTargetDelta()
      }

      function tr(e) {
        e.calcProjection()
      }

      function nr(e) {
        e.resetRotation()
      }

      function sr(e) {
        e.removeLeadSnapshot()
      }

      function ir(e, t, n) {
        e.translate = (0, ss.C)(t.translate, 0, n), e.scale = (0, ss.C)(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function rr(e, t, n, s) {
        e.min = (0, ss.C)(t.min, n.min, s), e.max = (0, ss.C)(t.max, n.max, s)
      }

      function or(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const ar = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function lr(e, t) {
        let n = e.root;
        for (let t = e.path.length - 1; t >= 0; t--)
          if (Boolean(e.path[t].instance)) {
            n = e.path[t];
            break
          } const s = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
        s && e.mount(s, !0)
      }

      function cr(e) {
        e.min = Math.round(e.min), e.max = Math.round(e.max)
      }

      function dr(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !rs(ji(t), ji(n), .2)
      }
      const ur = Ui({
          attachResizeListener: (e, t) => Se(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        pr = {
          current: void 0
        },
        hr = Ui({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!pr.current) {
              const e = new ur(0, {});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), pr.current = e
            }
            return pr.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        fr = {
          ...Yn,
          ...rt,
          ...zs,
          ...wi
        },
        mr = A(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, n, s, i) {
          return {
            ...L(e) ? we : xe,
            preloadedFeatures: n,
            useRender: re(t),
            createVisualElement: s,
            projectionNodeConstructor: i,
            Component: e
          }
        }(e, t, fr, pi, hr)))
    },
    121: (e, t, n) => {
      "use strict";

      function s(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function i(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      n.d(t, {
        cl: () => i,
        y4: () => s
      })
    },
    1958: (e, t, n) => {
      "use strict";
      n.d(t, {
        u: () => s
      });
      const s = (e, t, n) => Math.min(Math.max(n, e), t)
    },
    5086: (e, t, n) => {
      "use strict";
      n.d(t, {
        s: () => C
      });
      var s = n(92),
        i = n(5768),
        r = n(1958),
        o = n(3133);

      function a(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      var l = n(7190),
        c = n(9374),
        d = n(6327);
      const u = (e, t, n) => {
          const s = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - s) + s))
        },
        p = [l.$, c.m, d.J];

      function h(e) {
        const t = (n = e, p.find((e => e.test(n))));
        var n;
        (0, s.k)(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let i = t.parse(e);
        return t === d.J && (i = function({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: s
        }) {
          e /= 360, n /= 100;
          let i = 0,
            r = 0,
            o = 0;
          if (t /= 100) {
            const s = n < .5 ? n * (1 + t) : n + t - n * t,
              l = 2 * n - s;
            i = a(l, s, e + 1 / 3), r = a(l, s, e), o = a(l, s, e - 1 / 3)
          } else i = r = o = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * r),
            blue: Math.round(255 * o),
            alpha: s
          }
        }(i)), i
      }
      const f = (e, t) => {
        const n = h(e),
          s = h(t),
          i = {
            ...n
          };
        return e => (i.red = u(n.red, s.red, e), i.green = u(n.green, s.green, e), i.blue = u(n.blue, s.blue, e), i.alpha = (0, o.C)(n.alpha, s.alpha, e), c.m.transform(i))
      };
      var m = n(4138),
        g = n(7886);

      function v(e, t) {
        return "number" == typeof e ? n => (0, o.C)(e, t, n) : i.$.test(e) ? f(e, t) : x(e, t)
      }
      const y = (e, t) => {
          const n = [...e],
            s = n.length,
            i = e.map(((e, n) => v(e, t[n])));
          return e => {
            for (let t = 0; t < s; t++) n[t] = i[t](e);
            return n
          }
        },
        w = (e, t) => {
          const n = {
              ...e,
              ...t
            },
            s = {};
          for (const i in n) void 0 !== e[i] && void 0 !== t[i] && (s[i] = v(e[i], t[i]));
          return e => {
            for (const t in s) n[t] = s[t](e);
            return n
          }
        },
        x = (e, t) => {
          const n = g.P.createTransformer(t),
            i = (0, g.V)(e),
            r = (0, g.V)(t);
          return i.numColors === r.numColors && i.numNumbers >= r.numNumbers ? (0, m.z)(y(i.values, r.values), n) : ((0, s.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
        };
      var b = n(9686);
      const S = (e, t) => n => (0, o.C)(e, t, n);

      function C(e, t, {
        clamp: n = !0,
        ease: o,
        mixer: a
      } = {}) {
        const l = e.length;
        (0, s.k)(l === t.length, "Both input and output ranges must be the same length"), (0, s.k)(!o || !Array.isArray(o) || o.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const c = function(e, t, n) {
            const s = [],
              r = n || ("number" == typeof(o = e[0]) ? S : "string" == typeof o ? i.$.test(o) ? f : x : Array.isArray(o) ? y : "object" == typeof o ? w : S);
            var o;
            const a = e.length - 1;
            for (let n = 0; n < a; n++) {
              let i = r(e[n], e[n + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[n] : t;
                i = (0, m.z)(e, i)
              }
              s.push(i)
            }
            return s
          }(t, o, a),
          d = c.length,
          u = t => {
            let n = 0;
            if (d > 1)
              for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            const s = (0, b.Y)(e[n], e[n + 1], t);
            return c[n](s)
          };
        return n ? t => u((0, r.u)(e[0], e[l - 1], t)) : u
      }
    },
    9208: (e, t, n) => {
      "use strict";
      n.d(t, {
        j: () => s
      });
      const s = "undefined" != typeof document
    },
    3133: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => s
      });
      const s = (e, t, n) => -n * e + n * t + e
    },
    4138: (e, t, n) => {
      "use strict";
      n.d(t, {
        z: () => i
      });
      const s = (e, t) => n => t(e(n)),
        i = (...e) => e.reduce(s)
    },
    9686: (e, t, n) => {
      "use strict";
      n.d(t, {
        Y: () => s
      });
      const s = (e, t, n) => {
        const s = t - e;
        return 0 === s ? 1 : (n - e) / s
      }
    },
    9548: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => i
      });
      var s = n(121);
      class i {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return (0, s.y4)(this.subscriptions, e), () => (0, s.cl)(this.subscriptions, e)
        }
        notify(e, t, n) {
          const s = this.subscriptions.length;
          if (s)
            if (1 === s) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < s; i++) {
                const s = this.subscriptions[i];
                s && s(e, t, n)
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
    4682: (e, t, n) => {
      "use strict";
      n.d(t, {
        h: () => i
      });
      var s = n(4932);

      function i(e) {
        const t = (0, s.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
    },
    9666: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => i
      });
      var s = n(4932);
      const i = n(9208).j ? s.useLayoutEffect : s.useEffect
    },
    4811: (e, t, n) => {
      "use strict";

      function s(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      n.d(t, {
        R: () => s
      })
    },
    7213: (e, t, n) => {
      "use strict";
      n.d(t, {
        O: () => i
      });
      const s = new Set;

      function i(e, t, n) {
        e || s.has(t) || (console.warn(t), n && console.warn(n), s.add(t))
      }
    },
    4570: (e, t, n) => {
      "use strict";
      n.d(t, {
        B: () => l
      });
      var s = n(6609),
        i = n(7109),
        r = n(9548),
        o = n(4811);
      class a {
        constructor(e, t = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: n,
              timestamp: r
            } = s.frameData;
            this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, i.Z_.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => i.Z_.postRender(this.velocityCheck), this.velocityCheck = ({
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
    9078: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => N
      });
      var s = n(7213);
      Object.create, Object.create;
      const i = new WeakMap;
      let r;

      function o(e) {
        let {
          target: t,
          contentRect: n,
          borderBoxSize: s
        } = e;
        var r;
        null === (r = i.get(t)) || void 0 === r || r.forEach((e => {
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
              }(t, s)
            }
          })
        }))
      }

      function a(e) {
        e.forEach(o)
      }
      const l = new Set;
      let c;
      const d = e => "function" == typeof e,
        u = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e),
        p = 50,
        h = () => ({
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
        }),
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

      function m(e, t, n, s) {
        const i = n[t],
          {
            length: r,
            position: o
          } = f[t],
          a = i.current,
          l = n.time;
        i.current = e["scroll" + o], i.scrollLength = e["scroll" + r] - e["client" + r], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = u(0, i.scrollLength, i.current);
        const c = s - l;
        var d, h;
        i.velocity = c > p ? 0 : (d = i.current - a, (h = c) ? d * (1e3 / h) : 0)
      }
      const g = e => e,
        v = (e, t, n) => -n * e + n * t + e;

      function y(e, t) {
        const n = e[e.length - 1];
        for (let s = 1; s <= t; s++) {
          const i = u(0, t, s);
          e.push(v(n, 1, i))
        }
      }

      function w(e) {
        const t = [0];
        return y(t, e - 1), t
      }
      const x = e => "number" == typeof e,
        b = e => Array.isArray(e) && !x(e[0]),
        S = (e, t, n) => {
          const s = t - e;
          return ((n - e) % s + s) % s + e
        },
        C = (e, t, n) => Math.min(Math.max(n, e), t);
      const T = {
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
          s = 0;
        if (void 0 !== P[e] && (e = P[e]), E(e)) {
          const t = parseFloat(e);
          e.endsWith("px") ? s = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? s = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? s = t / 100 * document.documentElement.clientHeight : e = t
        }
        return x(e) && (s = t * e), n + s
      }
      const A = [0, 0];

      function k(e, t, n, s) {
        let i = Array.isArray(e) ? e : A,
          r = 0,
          o = 0;
        return x(e) ? i = [e, e] : E(e) && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, P[e] ? e : "0"]), r = M(i[0], n, s), o = M(i[1], t), r - o
      }
      const L = {
        x: 0,
        y: 0
      };

      function O(e, t, n) {
        let {
          offset: s = T.All
        } = n;
        const {
          target: i = e,
          axis: r = "y"
        } = n, o = "y" === r ? "height" : "width", a = i !== e ? function(e, t) {
          let n = {
              x: 0,
              y: 0
            },
            s = e;
          for (; s && s !== t;)
            if (s instanceof HTMLElement) n.x += s.offsetLeft, n.y += s.offsetTop, s = s.offsetParent;
            else if (s instanceof SVGGraphicsElement && "getBBox" in s) {
            const {
              top: e,
              left: t
            } = s.getBBox();
            for (n.x += t, n.y += e; s && "svg" !== s.tagName;) s = s.parentNode
          }
          return n
        }(i, e) : L, l = i === e ? {
          width: e.scrollWidth,
          height: e.scrollHeight
        } : {
          width: i.clientWidth,
          height: i.clientHeight
        }, c = {
          width: e.clientWidth,
          height: e.clientHeight
        };
        t[r].offset.length = 0;
        let d = !t[r].interpolate;
        const p = s.length;
        for (let e = 0; e < p; e++) {
          const n = k(s[e], c[o], l[o], a[r]);
          d || n === t[r].interpolatorOffsets[e] || (d = !0), t[r].offset[e] = n
        }
        d && (t[r].interpolate = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w(e.length),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
          const s = e.length,
            i = s - t.length;
          return i > 0 && y(t, i), i => {
            let r = 0;
            for (; r < s - 2 && !(i < t[r + 1]); r++);
            let o = C(0, 1, u(t[r], t[r + 1], i));
            const a = function(e, t) {
              return b(e) ? e[S(0, e.length, t)] : e
            }(n, r);
            return o = a(o), v(e[r], e[r + 1], o)
          }
        }(w(p), t[r].offset), t[r].interpolatorOffsets = [...t[r].offset]), t[r].progress = t[r].interpolate(t[r].current)
      }
      const V = new WeakMap,
        $ = new WeakMap,
        D = new WeakMap,
        B = e => e === document.documentElement ? window : e;

      function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = t, s = function(e, t) {
          var n = {};
          for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]])
          }
          return n
        }(t, ["container"]);
        let o = D.get(n);
        o || (o = new Set, D.set(n, o));
        const u = h(),
          p = function(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            const i = s.axis || "y";
            return {
              measure: () => function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                  n = arguments.length > 2 ? arguments[2] : void 0;
                if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
                  let s = t;
                  for (; s && s != e;) n.x.targetOffset += s.offsetLeft, n.y.targetOffset += s.offsetTop, s = s.offsetParent
                }
                n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
              }(e, s.target, n),
              update: t => {
                ! function(e, t, n) {
                  m(e, "x", t, n), m(e, "y", t, n), t.time = n
                }(e, n, t), (s.offset || s.target) && O(e, n, s)
              },
              notify: d(t) ? () => t(n) : (r = t, o = n[i], r.pause(), r.forEachNative(((e, t) => {
                let {
                  easing: n
                } = t;
                var s, i;
                if (e.updateDuration) n || (e.easing = g), e.updateDuration(1);
                else {
                  const t = {
                    duration: 1e3
                  };
                  n || (t.easing = "linear"), null === (i = null === (s = e.effect) || void 0 === s ? void 0 : s.updateTiming) || void 0 === i || i.call(s, t)
                }
              })), () => {
                r.currentTime = o.progress
              })
            };
            var r, o
          }(n, e, u, s);
        if (o.add(p), !V.has(n)) {
          const e = () => {
            const e = performance.now();
            for (const e of o) e.measure();
            for (const t of o) t.update(e);
            for (const e of o) e.notify()
          };
          V.set(n, e);
          const t = B(n);
          window.addEventListener("resize", e, {
            passive: !0
          }), n !== document.documentElement && $.set(n, (y = e, d(v = n) ? (f = v, l.add(f), c || (c = () => {
            const e = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              t = {
                target: window,
                size: e,
                contentSize: e
              };
            l.forEach((e => e(t)))
          }, window.addEventListener("resize", c)), () => {
            l.delete(f), !l.size && c && (c = void 0)
          }) : function(e, t) {
            r || "undefined" != typeof ResizeObserver && (r = new ResizeObserver(a));
            const n = function(e, t) {
              return "string" == typeof e ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
            }(e);
            return n.forEach((e => {
              let n = i.get(e);
              n || (n = new Set, i.set(e, n)), n.add(t), null == r || r.observe(e)
            })), () => {
              n.forEach((e => {
                const n = i.get(e);
                null == n || n.delete(t), (null == n ? void 0 : n.size) || null == r || r.unobserve(e)
              }))
            }
          }(v, y))), t.addEventListener("scroll", e, {
            passive: !0
          })
        }
        var f, v, y;
        const w = V.get(n),
          x = requestAnimationFrame(w);
        return () => {
          var t;
          "function" != typeof e && e.stop(), cancelAnimationFrame(x);
          const s = D.get(n);
          if (!s) return;
          if (s.delete(p), s.size) return;
          const i = V.get(n);
          V.delete(n), i && (B(n).removeEventListener("scroll", i), null === (t = $.get(n)) || void 0 === t || t(), window.removeEventListener("resize", i))
        }
      }
      var R = n(4570),
        j = n(4682),
        z = n(4932),
        _ = n(9666);
      const F = () => ({
        scrollX: (0, R.B)(0),
        scrollY: (0, R.B)(0),
        scrollXProgress: (0, R.B)(0),
        scrollYProgress: (0, R.B)(0)
      });

      function N() {
        return (0, s.O)(!1, "useViewportScroll is deprecated. Convert to useScroll()."),
          function({
            container: e,
            target: t,
            layoutEffect: n = !0,
            ...s
          } = {}) {
            const i = (0, j.h)(F);
            return (n ? _.L : z.useEffect)((() => I((({
              x: e,
              y: t
            }) => {
              i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(t.current), i.scrollYProgress.set(t.progress)
            }), {
              ...s,
              container: (null == e ? void 0 : e.current) || void 0,
              target: (null == t ? void 0 : t.current) || void 0
            })), []), i
          }()
      }
    },
    7190: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => i
      });
      var s = n(9374);
      const i = {
        test: (0, n(5467).i)("#"),
        parse: function(e) {
          let t = "",
            n = "",
            s = "",
            i = "";
          return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(s, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1
          }
        },
        transform: s.m.transform
      }
    },
    6327: (e, t, n) => {
      "use strict";
      n.d(t, {
        J: () => a
      });
      var s = n(3038),
        i = n(6800),
        r = n(2780),
        o = n(5467);
      const a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: o = 1
        }) => "hsla(" + Math.round(e) + ", " + i.aQ.transform((0, r.Nw)(t)) + ", " + i.aQ.transform((0, r.Nw)(n)) + ", " + (0, r.Nw)(s.Fq.transform(o)) + ")"
      }
    },
    5768: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => a
      });
      var s = n(2780),
        i = n(7190),
        r = n(6327),
        o = n(9374);
      const a = {
        test: e => o.m.test(e) || i.$.test(e) || r.J.test(e),
        parse: e => o.m.test(e) ? o.m.parse(e) : r.J.test(e) ? r.J.parse(e) : i.$.parse(e),
        transform: e => (0, s.HD)(e) ? e : e.hasOwnProperty("red") ? o.m.transform(e) : r.J.transform(e)
      }
    },
    9374: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => l
      });
      var s = n(1958),
        i = n(3038),
        r = n(2780),
        o = n(5467);
      const a = {
          ...i.Rx,
          transform: e => Math.round((e => (0, s.u)(0, 255, e))(e))
        },
        l = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: s = 1
          }) => "rgba(" + a.transform(e) + ", " + a.transform(t) + ", " + a.transform(n) + ", " + (0, r.Nw)(i.Fq.transform(s)) + ")"
        }
    },
    5467: (e, t, n) => {
      "use strict";
      n.d(t, {
        d: () => r,
        i: () => i
      });
      var s = n(2780);
      const i = (e, t) => n => Boolean((0, s.HD)(n) && s.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
        r = (e, t, n) => i => {
          if (!(0, s.HD)(i)) return i;
          const [r, o, a, l] = i.match(s.KP);
          return {
            [e]: parseFloat(r),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    7886: (e, t, n) => {
      "use strict";
      n.d(t, {
        P: () => p,
        V: () => l
      });
      var s = n(5768),
        i = n(3038),
        r = n(2780);
      const o = "${c}",
        a = "${n}";

      function l(e) {
        "number" == typeof e && (e = `${e}`);
        const t = [];
        let n = 0,
          l = 0;
        const c = e.match(r.dA);
        c && (n = c.length, e = e.replace(r.dA, o), t.push(...c.map(s.$.parse)));
        const d = e.match(r.KP);
        return d && (l = d.length, e = e.replace(r.KP, a), t.push(...d.map(i.Rx.parse))), {
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
          tokenised: i
        } = l(e), c = t.length;
        return e => {
          let t = i;
          for (let i = 0; i < c; i++) t = t.replace(i < n ? o : a, i < n ? s.$.transform(e[i]) : (0, r.Nw)(e[i]));
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
    3038: (e, t, n) => {
      "use strict";
      n.d(t, {
        Fq: () => r,
        Rx: () => i,
        bA: () => o
      });
      var s = n(1958);
      const i = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        r = {
          ...i,
          transform: e => (0, s.u)(0, 1, e)
        },
        o = {
          ...i,
          default: 1
        }
    },
    6800: (e, t, n) => {
      "use strict";
      n.d(t, {
        $C: () => d,
        RW: () => r,
        aQ: () => o,
        px: () => a,
        vh: () => l,
        vw: () => c
      });
      var s = n(2780);
      const i = e => ({
          test: t => (0, s.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        r = i("deg"),
        o = i("%"),
        a = i("px"),
        l = i("vh"),
        c = i("vw"),
        d = {
          ...o,
          parse: e => o.parse(e) / 100,
          transform: e => o.transform(100 * e)
        }
    },
    2780: (e, t, n) => {
      "use strict";
      n.d(t, {
        HD: () => a,
        KP: () => i,
        Nw: () => s,
        dA: () => r,
        mj: () => o
      });
      const s = e => Math.round(1e5 * e) / 1e5,
        i = /(-)?([\d]*\.?[\d])+/g,
        r = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function a(e) {
        return "string" == typeof e
      }
    },
    7424: (e, t, n) => {
      "use strict";
      n.d(t, {
        H: () => p
      });
      var s = n(5086);
      const i = e => (e => "object" == typeof e && e.mix)(e) ? e.mix : void 0;
      var r = n(4932),
        o = n(4570),
        a = n(9200),
        l = n(4682),
        c = n(9666),
        d = n(7109);

      function u(e, t) {
        const n = function(e) {
            const t = (0, l.h)((() => (0, o.B)(e))),
              {
                isStatic: n
              } = (0, r.useContext)(a._);
            if (n) {
              const [, n] = (0, r.useState)(e);
              (0, r.useEffect)((() => t.on("change", n)), [])
            }
            return t
          }(t()),
          s = () => n.set(t());
        return s(),
          function(e, t, n) {
            (0, c.L)((() => {
              const n = e.map((e => e.on("change", t)));
              return () => {
                n.forEach((e => e())), d.qY.update(s)
              }
            }))
          }(e, (() => d.Z_.update(s, !1, !0))), n
      }

      function p(e, t, n, r) {
        const o = "function" == typeof t ? t : function(...e) {
          const t = !Array.isArray(e[0]),
            n = t ? 0 : -1,
            r = e[0 + n],
            o = e[1 + n],
            a = e[2 + n],
            l = e[3 + n],
            c = (0, s.s)(o, a, {
              mixer: i(a[0]),
              ...l
            });
          return t ? c(r) : c
        }(t, n, r);
        return Array.isArray(e) ? h(e, o) : h([e], (([e]) => o(e)))
      }

      function h(e, t) {
        const n = (0, l.h)((() => []));
        return u(e, (() => {
          n.length = 0;
          const s = e.length;
          for (let t = 0; t < s; t++) n[t] = e[t].get();
          return t(n)
        }))
      }
    }
  }
]);