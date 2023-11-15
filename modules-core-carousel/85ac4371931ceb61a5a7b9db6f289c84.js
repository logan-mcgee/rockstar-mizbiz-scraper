/*! For license information please see 85ac4371931ceb61a5a7b9db6f289c84.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [761], {
    32: (e, t, s) => {
      var i = s(927),
        n = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, t, s) {
        var i, o = {},
          d = null,
          c = null;
        for (i in void 0 !== s && (d = "" + s), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) r.call(t, i) && !l.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: c,
          props: o,
          _owner: a.current
        }
      }
      t.jsx = o, t.jsxs = o
    },
    705: (e, t, s) => {
      e.exports = s(32)
    },
    965: (e, t, s) => {
      s.d(t, {
        tq: () => S,
        o5: () => T
      });
      var i = s(927),
        n = s(118);

      function r(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function a(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : a(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && void 0 === e.pagination.el
      }

      function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar && void 0 === e.scrollbar.el
      }

      function c() {
        const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ").map((e => e.trim())).filter((e => !!e)),
          t = [];
        return e.forEach((e => {
          t.indexOf(e) < 0 && t.push(e)
        })), t.join(" ")
      }
      const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
        u = (e, t) => {
          let s = t.slidesPerView;
          if (t.breakpoints) {
            const e = n.ZP.prototype.getBreakpoint(t.breakpoints),
              i = e in t.breakpoints ? t.breakpoints[e] : void 0;
            i && i.slidesPerView && (s = i.slidesPerView)
          }
          let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
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

      function g(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (h(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = f(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function m(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const v = (0, i.createContext)(null),
        w = (0, i.createContext)(null);

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
          }
          return e
        }, b.apply(this, arguments)
      }
      const S = (0, i.forwardRef)((function(e, t) {
        let {
          className: s,
          tag: h = "div",
          wrapperTag: f = "div",
          children: v,
          onSwiper: S,
          ...E
        } = void 0 === e ? {} : e, T = !1;
        const [C, y] = (0, i.useState)("swiper"), [x, P] = (0, i.useState)(null), [k, M] = (0, i.useState)(!1), O = (0, i.useRef)(!1), L = (0, i.useRef)(null), _ = (0, i.useRef)(null), $ = (0, i.useRef)(null), A = (0, i.useRef)(null), z = (0, i.useRef)(null), I = (0, i.useRef)(null), N = (0, i.useRef)(null), D = (0, i.useRef)(null), {
          params: G,
          passedParams: B,
          rest: j,
          events: R
        } = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const s = {
              on: {}
            },
            i = {},
            l = {};
          a(s, n.ZP.defaults), a(s, n.ZP.extendedDefaults), s._emitClasses = !0, s.init = !1;
          const o = {},
            d = p.map((e => e.replace(/_/, ""))),
            c = Object.assign({}, e);
          return Object.keys(c).forEach((n => {
            void 0 !== e[n] && (d.indexOf(n) >= 0 ? r(e[n]) ? (s[n] = {}, l[n] = {}, a(s[n], e[n]), a(l[n], e[n])) : (s[n] = e[n], l[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? i[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : s.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : o[n] = e[n])
          })), ["navigation", "pagination", "scrollbar"].forEach((e => {
            !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
          })), {
            params: s,
            passedParams: l,
            rest: o,
            events: i
          }
        }(E), {
          slides: H,
          slots: V
        } = g(v), F = () => {
          M(!k)
        };
        Object.assign(G.on, {
          _containerClasses(e, t) {
            y(t)
          }
        });
        const W = () => {
          if (Object.assign(G.on, R), T = !0, _.current = new n.ZP(G), _.current.loopCreate = () => {}, _.current.loopDestroy = () => {}, G.loop && (_.current.loopedSlides = u(H, G)), _.current.virtual && _.current.params.virtual.enabled) {
            _.current.virtual.slides = H;
            const e = {
              cache: !1,
              slides: H,
              renderExternal: P,
              renderExternalUpdate: !1
            };
            a(_.current.params.virtual, e), a(_.current.originalParams.virtual, e)
          }
        };
        return L.current || W(), _.current && _.current.on("_beforeBreakpoint", F), (0, i.useEffect)((() => () => {
          _.current && _.current.off("_beforeBreakpoint", F)
        })), (0, i.useEffect)((() => {
          !O.current && _.current && (_.current.emitSlidesClasses(), O.current = !0)
        })), m((() => {
          if (t && (t.current = L.current), L.current) return _.current.destroyed && W(),
            function(e, t) {
              let {
                el: s,
                nextEl: i,
                prevEl: n,
                paginationEl: r,
                scrollbarEl: a,
                swiper: c
              } = e;
              l(t) && i && n && (c.params.navigation.nextEl = i, c.originalParams.navigation.nextEl = i, c.params.navigation.prevEl = n, c.originalParams.navigation.prevEl = n), o(t) && r && (c.params.pagination.el = r, c.originalParams.pagination.el = r), d(t) && a && (c.params.scrollbar.el = a, c.originalParams.scrollbar.el = a), c.init(s)
            }({
              el: L.current,
              nextEl: z.current,
              prevEl: I.current,
              paginationEl: N.current,
              scrollbarEl: D.current,
              swiper: _.current
            }, G), S && S(_.current), () => {
              _.current && !_.current.destroyed && _.current.destroy(!0, !1)
            }
        }), []), m((() => {
          !T && R && _.current && Object.keys(R).forEach((e => {
            _.current.on(e, R[e])
          }));
          const e = function(e, t, s, i, n) {
            const a = [];
            if (!t) return a;
            const l = e => {
              a.indexOf(e) < 0 && a.push(e)
            };
            if (s && i) {
              const e = i.map(n),
                t = s.map(n);
              e.join("") !== t.join("") && l("children"), i.length !== s.length && l("children")
            }
            return p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
              if (s in e && s in t)
                if (r(e[s]) && r(t[s])) {
                  const i = Object.keys(e[s]),
                    n = Object.keys(t[s]);
                  i.length !== n.length ? l(s) : (i.forEach((i => {
                    e[s][i] !== t[s][i] && l(s)
                  })), n.forEach((i => {
                    e[s][i] !== t[s][i] && l(s)
                  })))
                } else e[s] !== t[s] && l(s)
            })), a
          }(B, $.current, H, A.current, (e => e.key));
          return $.current = B, A.current = H, e.length && _.current && !_.current.destroyed && function(e) {
            let {
              swiper: t,
              slides: s,
              passedParams: i,
              changedParams: n,
              nextEl: l,
              prevEl: o,
              scrollbarEl: d,
              paginationEl: c
            } = e;
            const p = n.filter((e => "children" !== e && "direction" !== e)),
              {
                params: u,
                pagination: h,
                navigation: f,
                scrollbar: g,
                virtual: m,
                thumbs: v
              } = t;
            let w, b, S, E, T;
            n.includes("thumbs") && i.thumbs && i.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (w = !0), n.includes("controller") && i.controller && i.controller.control && u.controller && !u.controller.control && (b = !0), n.includes("pagination") && i.pagination && (i.pagination.el || c) && (u.pagination || !1 === u.pagination) && h && !h.el && (S = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || d) && (u.scrollbar || !1 === u.scrollbar) && g && !g.el && (E = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || o) && (i.navigation.nextEl || l) && (u.navigation || !1 === u.navigation) && f && !f.prevEl && !f.nextEl && (T = !0), p.forEach((e => {
              if (r(u[e]) && r(i[e])) a(u[e], i[e]);
              else {
                const n = i[e];
                !0 !== n && !1 !== n || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = i[e] : !1 === n && t[s = e] && (t[s].destroy(), "navigation" === s ? (u[s].prevEl = void 0, u[s].nextEl = void 0, t[s].prevEl = void 0, t[s].nextEl = void 0) : (u[s].el = void 0, t[s].el = void 0))
              }
              var s
            })), p.includes("controller") && !b && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), n.includes("children") && s && m && u.virtual.enabled ? (m.slides = s, m.update(!0)) : n.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), w && v.init() && v.update(!0), b && (t.controller.control = u.controller.control), S && (c && (u.pagination.el = c), h.init(), h.render(), h.update()), E && (d && (u.scrollbar.el = d), g.init(), g.updateSize(), g.setTranslate()), T && (l && (u.navigation.nextEl = l), o && (u.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && t.changeDirection(i.direction, !1), t.update()
          }({
            swiper: _.current,
            slides: H,
            passedParams: B,
            changedParams: e,
            nextEl: z.current,
            prevEl: I.current,
            scrollbarEl: D.current,
            paginationEl: N.current
          }), () => {
            R && _.current && Object.keys(R).forEach((e => {
              _.current.off(e, R[e])
            }))
          }
        })), m((() => {
          var e;
          !(e = _.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }), [x]), i.createElement(h, b({
          ref: L,
          className: c(`${C}${s?` ${s}`:""}`)
        }, j), i.createElement(w.Provider, {
          value: _.current
        }, V["container-start"], i.createElement(f, {
          className: "swiper-wrapper"
        }, V["wrapper-start"], G.virtual ? function(e, t, s) {
          if (!s) return null;
          const n = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
          } : {
            top: `${s.offset}px`
          };
          return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => i.cloneElement(t, {
            swiper: e,
            style: n
          })))
        }(_.current, H, x) : !G.loop || _.current && _.current.destroyed ? H.map((e => i.cloneElement(e, {
          swiper: _.current
        }))) : function(e, t, s) {
          const n = t.map(((t, s) => i.cloneElement(t, {
            swiper: e,
            "data-swiper-slide-index": s
          })));

          function r(e, t, n) {
            return i.cloneElement(e, {
              key: `${e.key}-duplicate-${t}-${n}`,
              className: `${e.props.className||""} ${s.slideDuplicateClass}`
            })
          }
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
            if (e !== s.slidesPerGroup)
              for (let t = 0; t < e; t += 1) {
                const e = i.createElement("div", {
                  className: `${s.slideClass} ${s.slideBlankClass}`
                });
                n.push(e)
              }
          }
          "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length);
          const a = u(n, s),
            l = [],
            o = [];
          for (let e = 0; e < a; e += 1) {
            const t = e - Math.floor(e / n.length) * n.length;
            o.push(r(n[t], e, "append")), l.unshift(r(n[n.length - t - 1], e, "prepend"))
          }
          return e && (e.loopedSlides = a), [...l, ...n, ...o]
        }(_.current, H, G), V["wrapper-end"]), l(G) && i.createElement(i.Fragment, null, i.createElement("div", {
          ref: I,
          className: "swiper-button-prev"
        }), i.createElement("div", {
          ref: z,
          className: "swiper-button-next"
        })), d(G) && i.createElement("div", {
          ref: D,
          className: "swiper-scrollbar"
        }), o(G) && i.createElement("div", {
          ref: N,
          className: "swiper-pagination"
        }), V["container-end"]))
      }));

      function E() {
        return E = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
          }
          return e
        }, E.apply(this, arguments)
      }
      S.displayName = "Swiper";
      const T = (0, i.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: n,
          className: r = "",
          swiper: a,
          zoom: l,
          virtualIndex: o,
          ...d
        } = void 0 === e ? {} : e;
        const p = (0, i.useRef)(null),
          [u, h] = (0, i.useState)("swiper-slide");

        function f(e, t, s) {
          t === p.current && h(s)
        }
        m((() => {
          if (t && (t.current = p.current), p.current && a) {
            if (!a.destroyed) return a.on("_slideClass", f), () => {
              a && a.off("_slideClass", f)
            };
            "swiper-slide" !== u && h("swiper-slide")
          }
        })), m((() => {
          a && p.current && !a.destroyed && h(a.getSlideClasses(p.current))
        }), [a]);
        const g = {
            isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: u.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
            isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
          },
          w = () => "function" == typeof n ? n(g) : n;
        return i.createElement(s, E({
          ref: p,
          className: c(`${u}${r?` ${r}`:""}`),
          "data-swiper-slide-index": o
        }, d), i.createElement(v.Provider, {
          value: g
        }, l ? i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof l ? l : void 0
        }, w()) : w()))
      }));
      T.displayName = "SwiperSlide"
    },
    118: (e, t, s) => {
      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
        }))
      }
      s.d(t, {
        W_: () => U,
        ZP: () => X
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

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, r), e
      }
      const l = {
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

      function o() {
        const e = "undefined" != typeof window ? window : {};
        return n(e, l), e
      }
      class d extends Array {
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

      function c() {
        const e = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t => {
          Array.isArray(t) ? e.push(...c(t)) : e.push(t)
        })), e
      }

      function p(e, t) {
        return Array.prototype.filter.call(e, t)
      }

      function u(e, t) {
        const s = o(),
          i = a();
        let n = [];
        if (!t && e instanceof d) return e;
        if (!e) return new d(n);
        if ("string" == typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = s;
            for (let e = 0; e < t.childNodes.length; e += 1) n.push(t.childNodes[e])
          } else n = function(e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s
          }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof d) return e;
          n = e
        }
        return new d(function(e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
          return t
        }(n))
      }
      u.fn = d.prototype;
      const h = "resize scroll".split(" ");

      function f(e) {
        return function() {
          for (var t = arguments.length, s = new Array(t), i = 0; i < t; i++) s[i] = arguments[i];
          if (void 0 === s[0]) {
            for (let t = 0; t < this.length; t += 1) h.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
            return this
          }
          return this.on(e, ...s)
        }
      }
      f("click"), f("blur"), f("focus"), f("focusin"), f("focusout"), f("keyup"), f("keydown"), f("keypress"), f("submit"), f("change"), f("mousedown"), f("mousemove"), f("mouseup"), f("mouseenter"), f("mouseleave"), f("mouseout"), f("mouseover"), f("touchstart"), f("touchend"), f("touchmove"), f("resize"), f("scroll");
      const g = {
        addClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          const i = c(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.add(...i)
          })), this
        },
        removeClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          const i = c(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.remove(...i)
          })), this
        },
        hasClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          const i = c(t.map((e => e.split(" "))));
          return p(this, (e => i.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          const i = c(t.map((e => e.split(" "))));
          this.forEach((e => {
            i.forEach((t => {
              e.classList.toggle(t)
            }))
          }))
        },
        attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else
              for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
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
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          let [i, n, r, a] = t;

          function l(e) {
            const t = e.target;
            if (!t) return;
            const s = e.target.dom7EventData || [];
            if (s.indexOf(e) < 0 && s.unshift(e), u(t).is(n)) r.apply(t, s);
            else {
              const e = u(t).parents();
              for (let t = 0; t < e.length; t += 1) u(e[t]).is(n) && r.apply(e[t], s)
            }
          }

          function o(e) {
            const t = e && e.target && e.target.dom7EventData || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
          }
          "function" == typeof t[1] && ([i, r, a] = t, n = void 0), a || (a = !1);
          const d = i.split(" ");
          let c;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (c = 0; c < d.length; c += 1) {
                const e = d[c];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                  listener: r,
                  proxyListener: l
                }), t.addEventListener(e, l, a)
              } else
                for (c = 0; c < d.length; c += 1) {
                  const e = d[c];
                  t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                    listener: r,
                    proxyListener: o
                  }), t.addEventListener(e, o, a)
                }
          }
          return this
        },
        off: function() {
          for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          let [i, n, r, a] = t;
          "function" == typeof t[1] && ([i, r, a] = t, n = void 0), a || (a = !1);
          const l = i.split(" ");
          for (let e = 0; e < l.length; e += 1) {
            const t = l[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let i;
              if (!n && s.dom7Listeners ? i = s.dom7Listeners[t] : n && s.dom7LiveListeners && (i = s.dom7LiveListeners[t]), i && i.length)
                for (let e = i.length - 1; e >= 0; e -= 1) {
                  const n = i[e];
                  r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (s.removeEventListener(t, n.proxyListener, a), i.splice(e, 1)) : r || (s.removeEventListener(t, n.proxyListener, a), i.splice(e, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const e = o();
          for (var t = arguments.length, s = new Array(t), i = 0; i < t; i++) s[i] = arguments[i];
          const n = s[0].split(" "),
            r = s[1];
          for (let t = 0; t < n.length; t += 1) {
            const i = n[t];
            for (let t = 0; t < this.length; t += 1) {
              const n = this[t];
              if (e.CustomEvent) {
                const t = new e.CustomEvent(i, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0
                });
                n.dom7EventData = s.filter(((e, t) => t > 0)), n.dispatchEvent(t), n.dom7EventData = [], delete n.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s))
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
          const e = o();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const e = o(),
              t = a(),
              s = this[0],
              i = s.getBoundingClientRect(),
              n = t.body,
              r = s.clientTop || n.clientTop || 0,
              l = s.clientLeft || n.clientLeft || 0,
              d = s === e ? e.scrollY : s.scrollTop,
              c = s === e ? e.scrollX : s.scrollLeft;
            return {
              top: i.top + d - r,
              left: i.left + c - l
            }
          }
          return null
        },
        css: function(e, t) {
          const s = o();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this
            }
            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
          }
          return this
        },
        each: function(e) {
          return e ? (this.forEach(((t, s) => {
            e.apply(t, [t, s])
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
          const t = o(),
            s = a(),
            i = this[0];
          let n, r;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (n = u(e), r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1
          }
          if (e === s) return i === s;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof d) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
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
          if (e > t - 1) return u([]);
          if (e < 0) {
            const s = t + e;
            return u(s < 0 ? [] : [this[s]])
          }
          return u([this[e]])
        },
        append: function() {
          let e;
          const t = a();
          for (let s = 0; s < arguments.length; s += 1) {
            e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            for (let s = 0; s < this.length; s += 1)
              if ("string" == typeof e) {
                const i = t.createElement("div");
                for (i.innerHTML = e; i.firstChild;) this[s].appendChild(i.firstChild)
              } else if (e instanceof d)
              for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
            else this[s].appendChild(e)
          }
          return this
        },
        prepend: function(e) {
          const t = a();
          let s, i;
          for (s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(n.childNodes[i], this[s].childNodes[0])
            } else if (e instanceof d)
            for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
          return this
        },
        next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([])
        },
        nextAll: function(e) {
          const t = [];
          let s = this[0];
          if (!s) return u([]);
          for (; s.nextElementSibling;) {
            const i = s.nextElementSibling;
            e ? u(i).is(e) && t.push(i) : t.push(i), s = i
          }
          return u(t)
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([]) : t.previousElementSibling ? u([t.previousElementSibling]) : u([])
          }
          return u([])
        },
        prevAll: function(e) {
          const t = [];
          let s = this[0];
          if (!s) return u([]);
          for (; s.previousElementSibling;) {
            const i = s.previousElementSibling;
            e ? u(i).is(e) && t.push(i) : t.push(i), s = i
          }
          return u(t)
        },
        parent: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
          return u(t)
        },
        parents: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i;) e ? u(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
          }
          return u(t)
        },
        closest: function(e) {
          let t = this;
          return void 0 === e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e])
          }
          return u(t)
        },
        children: function(e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].children;
            for (let s = 0; s < i.length; s += 1) e && !u(i[s]).is(e) || t.push(i[s])
          }
          return u(t)
        },
        filter: function(e) {
          return u(p(this, e))
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        }
      };
      Object.keys(g).forEach((e => {
        Object.defineProperty(u.fn, e, {
          value: g[e],
          writable: !0
        })
      }));
      const m = u;

      function v(e) {
        return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }

      function w() {
        return Date.now()
      }

      function b(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function S() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != n && (s = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                r = Object.getOwnPropertyDescriptor(n, i);
              void 0 !== r && r.enumerable && (b(e[i]) && b(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : S(e[i], n[i]) : !b(e[i]) && b(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : S(e[i], n[i])) : e[i] = n[i])
            }
          }
        }
        var s;
        return e
      }

      function E(e, t, s) {
        e.style.setProperty(t, s)
      }

      function T(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: i
        } = e;
        const n = o(),
          r = -t.translate;
        let a, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > r ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            a = (new Date).getTime(), null === l && (l = a);
            const e = Math.max(Math.min((a - l) / d, 1), 0),
              o = .5 - Math.cos(e * Math.PI) / 2;
            let c = r + o * (s - r);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [i]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
              })
            })), void n.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = n.requestAnimationFrame(u)
          };
        u()
      }
      let C, y, x;

      function P() {
        return C || (C = function() {
          const e = o(),
            t = a();
          return {
            smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
            passiveListener: function() {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0
                  }
                });
                e.addEventListener("testPassiveListener", null, s)
              } catch (e) {}
              return t
            }(),
            gestures: "ongesturestart" in e
          }
        }()), C
      }
      const k = {
          on(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const n = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
            })), i
          },
          once(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;

            function n() {
              i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
              for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
              t.apply(i, r)
            }
            return n.__emitterProxy = t, i.on(e, n, s)
          },
          onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const i = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
          },
          off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
              void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, n) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(n, 1)
              }))
            })), s) : s
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, i;
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), i = e) : (t = r[0].events, s = r[0].data, i = r[0].context || e), s.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                e.apply(i, [t, ...s])
              })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                e.apply(i, s)
              }))
            })), e
          }
        },
        M = {
          updateSize: function() {
            const e = this;
            let t, s;
            const i = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s
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

            function s(e, s) {
              return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const i = e.params,
              {
                $wrapperEl: n,
                size: r,
                rtlTranslate: a,
                wrongRTL: l
              } = e,
              o = e.virtual && i.virtual.enabled,
              d = o ? e.virtual.slides.length : e.slides.length,
              c = n.children(`.${e.params.slideClass}`),
              p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [],
              f = [];
            let g = i.slidesOffsetBefore;
            "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
            let m = i.slidesOffsetAfter;
            "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              w = e.slidesGrid.length;
            let b = i.spaceBetween,
              S = -g,
              T = 0,
              C = 0;
            if (void 0 === r) return;
            "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * r), e.virtualSize = -b, a ? c.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : c.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), i.centeredSlides && i.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const y = i.grid && i.grid.rows > 1 && e.grid;
            let x;
            y && e.grid.initSlides(p);
            const P = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
            for (let n = 0; n < p; n += 1) {
              x = 0;
              const a = c.eq(n);
              if (y && e.grid.updateSlide(n, a, p, t), "none" !== a.css("display")) {
                if ("auto" === i.slidesPerView) {
                  P && (c[n].style[t("width")] = "");
                  const r = getComputedStyle(a[0]),
                    l = a[0].style.transform,
                    o = a[0].style.webkitTransform;
                  if (l && (a[0].style.transform = "none"), o && (a[0].style.webkitTransform = "none"), i.roundLengths) x = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                  else {
                    const e = s(r, "width"),
                      t = s(r, "padding-left"),
                      i = s(r, "padding-right"),
                      n = s(r, "margin-left"),
                      l = s(r, "margin-right"),
                      o = r.getPropertyValue("box-sizing");
                    if (o && "border-box" === o) x = e + n + l;
                    else {
                      const {
                        clientWidth: s,
                        offsetWidth: r
                      } = a[0];
                      x = e + t + i + n + l + (r - s)
                    }
                  }
                  l && (a[0].style.transform = l), o && (a[0].style.webkitTransform = o), i.roundLengths && (x = Math.floor(x))
                } else x = (r - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (x = Math.floor(x)), c[n] && (c[n].style[t("width")] = `${x}px`);
                c[n] && (c[n].swiperSlideSize = x), f.push(x), i.centeredSlides ? (S = S + x / 2 + T / 2 + b, 0 === T && 0 !== n && (S = S - r / 2 - b), 0 === n && (S = S - r / 2 - b), Math.abs(S) < .001 && (S = 0), i.roundLengths && (S = Math.floor(S)), C % i.slidesPerGroup == 0 && u.push(S), h.push(S)) : (i.roundLengths && (S = Math.floor(S)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(S), h.push(S), S = S + x + b), e.virtualSize += x + b, T = x, C += 1
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + m, a && l && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
                width: `${e.virtualSize+i.spaceBetween}px`
              }), i.setWrapperSize && n.css({
                [t("width")]: `${e.virtualSize+i.spaceBetween}px`
              }), y && e.grid.updateWrapperSize(x, u, t), !i.centeredSlides) {
              const t = [];
              for (let s = 0; s < u.length; s += 1) {
                let n = u[s];
                i.roundLengths && (n = Math.floor(n)), u[s] <= e.virtualSize - r && t.push(n)
              }
              u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
              const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
              c.filter(((e, t) => !i.cssMode || t !== c.length - 1)).css({
                [s]: `${b}px`
              })
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0)
              })), e -= i.spaceBetween;
              const t = e - r;
              u = u.map((e => e < 0 ? -g : e > t ? t + m : e))
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (f.forEach((t => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0)
                })), e -= i.spaceBetween, e < r) {
                const t = (r - e) / 2;
                u.forEach(((e, s) => {
                  u[s] = e - t
                })), h.forEach(((e, s) => {
                  h[s] = e + t
                }))
              }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: f
              }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
              E(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
              const t = -e.snapGrid[0],
                s = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(o || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
              const t = `${i.containerModifierClass}backface-hidden`,
                s = e.$el.hasClass(t);
              p <= i.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
          },
          updateAutoHeight: function(e) {
            const t = this,
              s = [],
              i = t.virtual && t.params.virtual.enabled;
            let n, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const a = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)(t.visibleSlides || m([])).each((e => {
                s.push(e)
              }));
              else
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                  const e = t.activeIndex + n;
                  if (e > t.slides.length && !i) break;
                  s.push(a(e))
                } else s.push(a(t.activeIndex));
            for (n = 0; n < s.length; n += 1)
              if (void 0 !== s[n]) {
                const e = s[n].offsetHeight;
                r = e > r ? e : r
              }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
          },
          updateSlidesOffset: function() {
            const e = this,
              t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
          },
          updateSlidesProgress: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0;
            const t = this,
              s = t.params,
              {
                slides: i,
                rtlTranslate: n,
                snapGrid: r
              } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            n && (a = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < i.length; e += 1) {
              const l = i[e];
              let o = l.swiperSlideOffset;
              s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
              const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                c = (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                p = -(a - o),
                u = p + t.slidesSizesGrid[e];
              (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(s.slideVisibleClass)), l.progress = n ? -d : d, l.originalProgress = n ? -c : c
            }
            t.visibleSlides = m(t.visibleSlides)
          },
          updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
              const s = t.rtlTranslate ? -1 : 1;
              e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let {
              progress: n,
              isBeginning: r,
              isEnd: a
            } = t;
            const l = r,
              o = a;
            0 === i ? (n = 0, r = !0, a = !0) : (n = (e - t.minTranslate()) / i, r = n <= 0, a = n >= 1), Object.assign(t, {
              progress: n,
              isBeginning: r,
              isEnd: a
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), a && !o && t.emit("reachEnd toEdge"), (l && !r || o && !a) && t.emit("fromEdge"), t.emit("progress", n)
          },
          updateSlidesClasses: function() {
            const e = this,
              {
                slides: t,
                params: s,
                $wrapperEl: i,
                activeIndex: n,
                realIndex: r
              } = e,
              a = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
          },
          updateActiveIndex: function(e) {
            const t = this,
              s = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: n,
                params: r,
                activeIndex: a,
                realIndex: l,
                snapIndex: o
              } = t;
            let d, c = e;
            if (void 0 === c) {
              for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (n.indexOf(s) >= 0) d = n.indexOf(s);
            else {
              const e = Math.min(r.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= n.length && (d = n.length - 1), c === a) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
              snapIndex: d,
              realIndex: p,
              previousIndex: a,
              activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
          },
          updateClickedSlide: function(e) {
            const t = this,
              s = t.params,
              i = m(e).closest(`.${s.slideClass}`)[0];
            let n, r = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  r = !0, n = e;
                  break
                } if (!i || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
          }
        };

      function O(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: i,
          step: n
        } = e;
        const {
          activeIndex: r,
          previousIndex: a
        } = t;
        let l = i;
        if (l || (l = r > a ? "next" : r < a ? "prev" : "reset"), t.emit(`transition${n}`), s && r !== a) {
          if ("reset" === l) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`), "next" === l ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
        }
      }
      const L = {
        slideTo: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            n = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const r = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: l,
            snapGrid: o,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: p,
            rtlTranslate: u,
            wrapperEl: h,
            enabled: f
          } = r;
          if (r.animating && l.preventInteractionOnTransition || !f && !i && !n) return !1;
          const g = Math.min(r.params.slidesPerGroupSkip, a);
          let m = g + Math.floor((a - g) / r.params.slidesPerGroup);
          m >= o.length && (m = o.length - 1);
          const v = -o[m];
          if (l.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * v),
                s = Math.floor(100 * d[e]),
                i = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e)
            }
          if (r.initialized && a !== p) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== a) return !1
          }
          let w;
          if (a !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), w = a > p ? "next" : a < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(a), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
          if (l.cssMode) {
            const e = r.isHorizontal(),
              s = u ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
              }))
            } else {
              if (!r.support.smoothScroll) return T({
                swiper: r,
                targetPosition: s,
                side: e ? "left" : "top"
              }), !0;
              h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
              })
            }
            return !0
          }
          return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, w), 0 === t ? r.transitionEnd(s, w) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w))
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i)
        },
        slideNext: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            s = arguments.length > 2 ? arguments[2] : void 0;
          const i = this,
            {
              animating: n,
              enabled: r,
              params: a
            } = i;
          if (!r) return i;
          let l = a.slidesPerGroup;
          "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : l;
          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
          }
          return a.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
        },
        slidePrev: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            s = arguments.length > 2 ? arguments[2] : void 0;
          const i = this,
            {
              params: n,
              animating: r,
              snapGrid: a,
              slidesGrid: l,
              rtlTranslate: o,
              enabled: d
            } = i;
          if (!d) return i;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
          }

          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const p = c(o ? i.translate : -i.translate),
            u = a.map((e => c(e)));
          let h = a[u.indexOf(p) - 1];
          if (void 0 === h && n.cssMode) {
            let e;
            a.forEach(((t, s) => {
              p >= t && (e = s)
            })), void 0 !== e && (h = a[e > 0 ? e - 1 : e])
          }
          let f = 0;
          if (void 0 !== h && (f = l.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), n.rewind && i.isBeginning) {
            const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
            return i.slideTo(n, e, t, s)
          }
          return i.slideTo(f, e, t, s)
        },
        slideReset: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            s = arguments.length > 2 ? arguments[2] : void 0;
          return this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            s = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          const n = this;
          let r = n.activeIndex;
          const a = Math.min(n.params.slidesPerGroupSkip, r),
            l = a + Math.floor((r - a) / n.params.slidesPerGroup),
            o = n.rtlTranslate ? n.translate : -n.translate;
          if (o >= n.snapGrid[l]) {
            const e = n.snapGrid[l];
            o - e > (n.snapGrid[l + 1] - e) * i && (r += n.params.slidesPerGroup)
          } else {
            const e = n.snapGrid[l - 1];
            o - e <= (n.snapGrid[l] - e) * i && (r -= n.params.slidesPerGroup)
          }
          return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
          const e = this,
            {
              params: t,
              $wrapperEl: s
            } = e,
            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let n, r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            n = parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
              e.slideTo(r)
            }))) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
              e.slideTo(r)
            }))) : e.slideTo(r)
          } else e.slideTo(r)
        }
      };

      function _(e) {
        const t = this,
          s = a(),
          i = o(),
          n = t.touchEventsData,
          {
            params: r,
            touches: l,
            enabled: d
          } = t;
        if (!d) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let p = m(c.target);
        if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === c.type, !n.isTouchEvent && "which" in c && 3 === c.which) return;
        if (!n.isTouchEvent && "button" in c && c.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const u = !!r.noSwipingClass && "" !== r.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        u && c.target && c.target.shadowRoot && h && (p = m(h[0]));
        const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          g = !(!c.target || !c.target.shadowRoot);
        if (r.noSwiping && (g ? function(e) {
            return function t(s) {
              if (!s || s === a() || s === o()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)
          }(f, p[0]) : p.closest(f)[0])) return void(t.allowClick = !0);
        if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
        l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
        const v = l.currentX,
          b = l.currentY,
          S = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          E = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (S && (v <= E || v >= i.innerWidth - E)) {
          if ("prevent" !== S) return;
          e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), l.startX = v, l.startY = b, n.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
          let e = !0;
          p.is(n.focusableElements) && (e = !1, "SELECT" === p[0].nodeName && (n.isTouched = !1)), s.activeElement && m(s.activeElement).is(n.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();
          const i = e && t.allowTouchMove && r.touchStartPreventDefault;
          !r.touchStartForcePreventDefault && !i || p[0].isContentEditable || c.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
      }

      function $(e) {
        const t = a(),
          s = this,
          i = s.touchEventsData,
          {
            params: n,
            touches: r,
            rtlTranslate: l,
            enabled: o
          } = s;
        if (!o) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
        if (i.isTouchEvent && "touchmove" !== d.type) return;
        const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
          p = "touchmove" === d.type ? c.pageX : d.pageX,
          u = "touchmove" === d.type ? c.pageY : d.pageY;
        if (d.preventedByNestedSwiper) return r.startX = p, void(r.startY = u);
        if (!s.allowTouchMove) return m(d.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(r, {
          startX: p,
          startY: u,
          currentX: p,
          currentY: u
        }), i.touchStartTime = w()));
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (s.isVertical()) {
            if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (p < r.startX && s.translate <= s.maxTranslate() || p > r.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && d.target === t.activeElement && m(d.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
        r.currentX = p, r.currentY = u;
        const h = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation(), i.isMoved || (n.loop && !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), i.isMoved = !0;
        let g = s.isHorizontal() ? h : f;
        r.diff = g, g *= n.touchRatio, l && (g = -g), s.swipeDirection = g > 0 ? "prev" : "next", i.currentTranslate = g + i.startTranslate;
        let v = !0,
          b = n.resistanceRatio;
        if (n.touchReleaseOnEdges && (b = 0), g > 0 && i.currentTranslate > s.minTranslate() ? (v = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** b)) : g < 0 && i.currentTranslate < s.maxTranslate() && (v = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** b)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), n.threshold > 0) {
          if (!(Math.abs(g) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
      }

      function A(e) {
        const t = this,
          s = t.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: l
          } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = w(),
          c = d - s.touchStartTime;
        if (t.allowClick) {
          const e = o.path || o.composedPath && o.composedPath();
          t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = w(), v((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let p;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
        if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: p
        });
        let u = 0,
          h = t.slidesSizesGrid[0];
        for (let e = 0; e < a.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== a[e + t] ? p >= a[e] && p < a[e + t] && (u = e, h = a[e + t] - a[e]) : p >= a[e] && (u = e, h = a[a.length - 1] - a[a.length - 2])
        }
        let f = null,
          g = null;
        i.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
        const m = (p - a[u]) / h,
          b = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (m >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : u + b) : t.slideTo(u)), "prev" === t.swipeDirection && (m > 1 - i.longSwipesRatio ? t.slideTo(u + b) : null !== g && m < 0 && Math.abs(m) > i.longSwipesRatio ? t.slideTo(g) : t.slideTo(u))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || o.target !== t.navigation.nextEl && o.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + b), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : u)) : o.target === t.navigation.nextEl ? t.slideTo(u + b) : t.slideTo(u)
        }
      }

      function z() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: n,
          snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }

      function I(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function N() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
          } = e;
        if (!i) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }
      let D = !1;

      function G() {}
      const B = (e, t) => {
          const s = a(),
            {
              params: i,
              touchEvents: n,
              el: r,
              wrapperEl: l,
              device: o,
              support: d
            } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
          if (d.touch) {
            const t = !("touchstart" !== n.start || !d.passiveListener || !i.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r[p](n.start, e.onTouchStart, t), r[p](n.move, e.onTouchMove, d.passiveListener ? {
              passive: !1,
              capture: c
            } : c), r[p](n.end, e.onTouchEnd, t), n.cancel && r[p](n.cancel, e.onTouchEnd, t)
          } else r[p](n.start, e.onTouchStart, !1), s[p](n.move, e.onTouchMove, c), s[p](n.end, e.onTouchEnd, !1);
          (i.preventClicks || i.preventClicksPropagation) && r[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[u]("observerUpdate", z, !0)
        },
        j = {
          attachEvents: function() {
            const e = this,
              t = a(),
              {
                params: s,
                support: i
              } = e;
            e.onTouchStart = _.bind(e), e.onTouchMove = $.bind(e), e.onTouchEnd = A.bind(e), s.cssMode && (e.onScroll = N.bind(e)), e.onClick = I.bind(e), i.touch && !D && (t.addEventListener("touchstart", G), D = !0), B(e, "on")
          },
          detachEvents: function() {
            B(this, "off")
          }
        },
        R = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        H = {
          addClasses: function() {
            const e = this,
              {
                classNames: t,
                params: s,
                rtl: i,
                $el: n,
                device: r,
                support: a
              } = e,
              l = function(e, t) {
                const s = [];
                return e.forEach((e => {
                  "object" == typeof e ? Object.keys(e).forEach((i => {
                    e[i] && s.push(t + i)
                  })) : "string" == typeof e && s.push(t + e)
                })), s
              }(["initialized", s.direction, {
                "pointer-events": !a.touch
              }, {
                "free-mode": e.params.freeMode && s.freeMode.enabled
              }, {
                autoheight: s.autoHeight
              }, {
                rtl: i
              }, {
                grid: s.grid && s.grid.rows > 1
              }, {
                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
              }, {
                android: r.android
              }, {
                ios: r.ios
              }, {
                "css-mode": s.cssMode
              }, {
                centered: s.cssMode && s.centeredSlides
              }, {
                "watch-progress": s.watchSlidesProgress
              }], s.containerModifierClass);
            t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses()
          },
          removeClasses: function() {
            const {
              $el: e,
              classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
          }
        },
        V = {
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

      function F(e, t) {
        return function() {
          let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const i = Object.keys(s)[0],
            n = s[i];
          "object" == typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
            auto: !0
          }), i in e && "enabled" in n ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), S(t, s)) : S(t, s)) : S(t, s)
        }
      }
      const W = {
          eventsEmitter: k,
          update: M,
          translate: {
            getTranslate: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y";
              const {
                params: t,
                rtlTranslate: s,
                translate: i,
                $wrapperEl: n
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
                const s = o();
                let i, n, r;
                const a = function(e) {
                  const t = o();
                  let s;
                  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (n = a.transform || a.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
              }(n[0], e);
              return s && (r = -r), r || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: i,
                  params: n,
                  $wrapperEl: r,
                  wrapperEl: a,
                  progress: l
                } = s;
              let o, d = 0,
                c = 0;
              s.isHorizontal() ? d = i ? -e : e : c = e, n.roundLengths && (d = Math.floor(d), c = Math.floor(c)), n.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : n.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
              const p = s.maxTranslate() - s.minTranslate();
              o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
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
                s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                n = arguments.length > 4 ? arguments[4] : void 0;
              const r = this,
                {
                  params: a,
                  wrapperEl: l
                } = r;
              if (r.animating && a.preventInteractionOnTransition) return !1;
              const o = r.minTranslate(),
                d = r.maxTranslate();
              let c;
              if (c = i && e > o ? o : i && e < d ? d : e, r.updateProgress(c), a.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!r.support.smoothScroll) return T({
                    swiper: r,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
              }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
            },
            transitionStart: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const s = this,
                {
                  params: i
                } = s;
              i.cssMode || (i.autoHeight && s.updateAutoHeight(), O({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const s = this,
                {
                  params: i
                } = s;
              s.animating = !1, i.cssMode || (s.setTransition(0), O({
                swiper: s,
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
                t = a(),
                {
                  params: s,
                  $wrapperEl: i
                } = e,
                n = i.children().length > 0 ? m(i.children()[0].parentNode) : i;
              n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
              let r = n.children(`.${s.slideClass}`);
              if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - r.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                  for (let i = 0; i < e; i += 1) {
                    const e = m(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                    n.append(e)
                  }
                  r = n.children(`.${s.slideClass}`)
                }
              }
              "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
              const l = [],
                o = [];
              r.each(((e, t) => {
                m(e).attr("data-swiper-slide-index", t)
              }));
              for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / r.length) * r.length;
                o.push(r.eq(e)[0]), l.unshift(r.eq(r.length - e - 1)[0])
              }
              for (let e = 0; e < o.length; e += 1) n.append(m(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
              for (let e = l.length - 1; e >= 0; e -= 1) n.prepend(m(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
            },
            loopFix: function() {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: s,
                loopedSlides: i,
                allowSlidePrev: n,
                allowSlideNext: r,
                snapGrid: a,
                rtlTranslate: l
              } = e;
              let o;
              e.allowSlidePrev = !0, e.allowSlideNext = !0;
              const d = -a[t] - e.getTranslate();
              t < i ? (o = s.length - 3 * i + t, o += i, e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)) : t >= s.length - i && (o = -s.length + t + i, o += i, e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
            },
            loopDestroy: function() {
              const {
                $wrapperEl: e,
                params: t,
                slides: s
              } = this;
              e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
            }
          },
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
              const e = this;
              e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
          },
          events: j,
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  activeIndex: t,
                  initialized: s,
                  loopedSlides: i = 0,
                  params: n,
                  $el: r
                } = e,
                a = n.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              const o = (l in a ? a[l] : void 0) || e.originalParams,
                d = R(e, n),
                c = R(e, o),
                p = n.enabled;
              d && !c ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${n.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === n.grid.fill) && r.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                const s = n[t] && n[t].enabled,
                  i = o[t] && o[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable()
              }));
              const u = o.direction && o.direction !== n.direction,
                h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
              u && s && e.changeDirection(), S(e.params, o);
              const f = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), p && !f ? e.disable() : !p && f && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
            },
            getBreakpoint: function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                s = arguments.length > 2 ? arguments[2] : void 0;
              if (!e || "container" === t && !s) return;
              let i = !1;
              const n = o(),
                r = "window" === t ? n.innerHeight : s.clientHeight,
                a = Object.keys(e).map((e => {
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
              a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < a.length; e += 1) {
                const {
                  point: r,
                  value: l
                } = a[e];
                "window" === t ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = r) : l <= s.clientWidth && (i = r)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: s
                } = e,
                {
                  slidesOffsetBefore: i
                } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: H,
          images: {
            loadImage: function(e, t, s, i, n, r) {
              const a = o();
              let l;

              function d() {
                r && r()
              }
              m(e).parent("picture")[0] || e.complete && n ? d() : t ? (l = new a.Image, l.onload = d, l.onerror = d, i && (l.sizes = i), s && (l.srcset = s), t && (l.src = t)) : d()
            },
            preloadImages: function() {
              const e = this;

              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const i = e.imagesToLoad[s];
                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
              }
            }
          }
        },
        q = {};
      class Y {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
          if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = S({}, t), e && !t.el && (t.el = e), t.el && m(t.el).length > 1) {
            const e = [];
            return m(t.el).each((s => {
              const i = S({}, t, {
                el: s
              });
              e.push(new Y(i))
            })), e
          }
          const r = this;
          r.__swiper__ = !0, r.support = P(), r.device = function() {
            return y || (y = function() {
              let {
                userAgent: e
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const t = P(),
                s = o(),
                i = s.navigator.platform,
                n = e || s.navigator.userAgent,
                r = {
                  ios: !1,
                  android: !1
                },
                a = s.screen.width,
                l = s.screen.height,
                d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = n.match(/(iPad).*OS\s([\d_]+)/);
              const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
              let f = "MacIntel" === i;
              return !c && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), f = !1), d && !h && (r.os = "android", r.android = !0), (c || u || p) && (r.os = "ios", r.ios = !0), r
            }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})), y
          }({
            userAgent: t.userAgent
          }), r.browser = (x || (x = function() {
            const e = o();
            return {
              isSafari: function() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
          }()), x), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
          const a = {};
          r.modules.forEach((e => {
            e({
              swiper: r,
              extendParams: F(t, a),
              on: r.on.bind(r),
              once: r.once.bind(r),
              off: r.off.bind(r),
              emit: r.emit.bind(r)
            })
          }));
          const l = S({}, V, a);
          return r.params = S({}, l, q, t), r.originalParams = S({}, r.params), r.passedParams = S({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
            r.on(e, r.params.on[e])
          })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = m, Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: m(),
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
              lastClickTime: w(),
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
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            n = (s.maxTranslate() - i) * e + i;
          s.translateTo(n, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
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
          e.slides.each((s => {
            const i = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: i
            }), e.emit("_slideClass", s, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            params: s,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: a,
            activeIndex: l
          } = this;
          let o = 1;
          if (s.centeredSlides) {
            let e, t = i[l].swiperSlideSize;
            for (let s = l + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = l + 1; e < i.length; e += 1)(t ? n[e] + r[e] - n[l] < a : n[e] - n[l] < a) && (o += 1);
          else
            for (let e = l - 1; e >= 0; e -= 1) n[l] - n[e] < a && (o += 1);
          return o
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let n;
          s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const s = this,
            i = s.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const s = m(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = m(e.shadowRoot.querySelector(i()));
              return t.children = e => s.children(e), t
            }
            return s.children ? s.children(i()) : m(s).children(i())
          })();
          if (0 === n.length && t.params.createElements) {
            const e = a().createElement("div");
            n = m(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
              n.append(e)
            }))
          }
          return Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display")
          }), !0
        }
        init(e) {
          const t = this;
          return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const s = this,
            {
              params: i,
              $el: n,
              $wrapperEl: r,
              slides: a
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.$el[0].swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          S(q, e)
        }
        static get extendedDefaults() {
          return q
        }
        static get defaults() {
          return V
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
          on: s,
          emit: i
        } = e;
        const n = o();
        let r = null,
          a = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
            a = n.requestAnimationFrame((() => {
              const {
                width: s,
                height: i
              } = t;
              let n = s,
                r = i;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: i,
                  target: a
                } = e;
                a && a !== t.el || (n = i ? i.width : (s[0] || s).inlineSize, r = i ? i.height : (s[0] || s).blockSize)
              })), n === s && r === i || l()
            }))
          })), r.observe(t.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
          a && n.cancelAnimationFrame(a), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: n
        } = e;
        const r = [],
          a = o(),
          l = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const s = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
              if (1 === e.length) return void n("observerUpdate", e[0]);
              const t = function() {
                n("observerUpdate", e[0])
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
            }));
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }), r.push(s)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = t.$el.parents();
              for (let t = 0; t < e.length; t += 1) l(e[t])
            }
            l(t.$el[0], {
              childList: t.params.observeSlideChildren
            }), l(t.$wrapperEl[0], {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          r.forEach((e => {
            e.disconnect()
          })), r.splice(0, r.length)
        }))
      }]);
      const X = Y;

      function U(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: n
        } = e;

        function r(e) {
          let s;
          return e && (s = m(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function l(e, s) {
          const i = t.params.navigation;
          e && e.length > 0 && (e[s ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](i.lockClass))
        }

        function o() {
          if (t.params.loop) return;
          const {
            $nextEl: e,
            $prevEl: s
          } = t.navigation;
          l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
        }

        function d(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"))
        }

        function c(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"))
        }

        function p() {
          const e = t.params.navigation;
          if (t.params.navigation = function(e, t, s, i) {
              const n = a();
              return e.params.createElements && Object.keys(i).forEach((r => {
                if (!s[r] && !0 === s.auto) {
                  let a = e.$el.children(`.${i[r]}`)[0];
                  a || (a = n.createElement("div"), a.className = i[r], e.$el.append(a)), s[r] = a, t[r] = a
                }
              })), s
            }(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          const s = r(e.nextEl),
            i = r(e.prevEl);
          s && s.length > 0 && s.on("click", c), i && i.length > 0 && i.on("click", d), Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0]
          }), t.enabled || (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass))
        }

        function u() {
          const {
            $nextEl: e,
            $prevEl: s
          } = t.navigation;
          e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", d), s.removeClass(t.params.navigation.disabledClass))
        }
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null
        }, i("init", (() => {
          !1 === t.params.navigation.enabled ? h() : (p(), o())
        })), i("toEdge fromEdge lock unlock", (() => {
          o()
        })), i("destroy", (() => {
          u()
        })), i("enable disable", (() => {
          const {
            $nextEl: e,
            $prevEl: s
          } = t.navigation;
          e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), i("click", ((e, s) => {
          const {
            $nextEl: i,
            $prevEl: r
          } = t.navigation, a = s.target;
          if (t.params.navigation.hideOnClick && !m(a).is(r) && !m(a).is(i)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
            let e;
            i ? e = i.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), n(!0 === e ? "navigationShow" : "navigationHide"), i && i.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
          }
        }));
        const h = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), o()
          },
          disable: h,
          update: o,
          init: p,
          destroy: u
        })
      }
    }
  }
]);