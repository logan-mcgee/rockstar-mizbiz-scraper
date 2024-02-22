/*! For license information please see ac4ef95d1086de893455ded365b81fba.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e82546f1-0279-4ecc-9e05-0e7f24bc2772", e._sentryDebugIdIdentifier = "sentry-dbid-e82546f1-0279-4ecc-9e05-0e7f24bc2772")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-carousel",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [256], {
    996: (e, t, s) => {
      var i = s(200),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
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
        for (i in void 0 !== s && (d = "" + s), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) n.call(t, i) && !l.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: o,
          _owner: a.current
        }
      }
      t.jsx = o, t.jsxs = o
    },
    480: (e, t, s) => {
      e.exports = s(996)
    },
    548: (e, t, s) => {
      s.d(t, {
        _2: () => r
      }), s(68);
      var i = s(848);

      function r(e) {
        let {
          swiper: t,
          extendParams: s,
          on: r,
          emit: n
        } = e;

        function a(e) {
          let s;
          return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
        }

        function l(e, s) {
          const r = t.params.navigation;
          (e = (0, i.m)(e)).forEach((e => {
            e && (e.classList[s ? "add" : "remove"](...r.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass))
          }))
        }

        function o() {
          const {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          if (t.params.loop) return l(s, !1), void l(e, !1);
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
          if (t.params.navigation = function(e, t, s, r) {
              return e.params.createElements && Object.keys(r).forEach((n => {
                if (!s[n] && !0 === s.auto) {
                  let a = (0, i.e)(e.el, `.${r[n]}`)[0];
                  a || (a = (0, i.c)("div", r[n]), a.className = r[n], e.el.append(a)), s[n] = a, t[n] = a
                }
              })), s
            }(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let s = a(e.nextEl),
            r = a(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: s,
            prevEl: r
          }), s = (0, i.m)(s), r = (0, i.m)(r);
          const n = (s, i) => {
            s && s.addEventListener("click", "next" === i ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
          };
          s.forEach((e => n(e, "next"))), r.forEach((e => n(e, "prev")))
        }

        function u() {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = (0, i.m)(e), s = (0, i.m)(s);
          const r = (e, s) => {
            e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => r(e, "next"))), s.forEach((e => r(e, "prev")))
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
          prevEl: null
        }, r("init", (() => {
          !1 === t.params.navigation.enabled ? f() : (p(), o())
        })), r("toEdge fromEdge lock unlock", (() => {
          o()
        })), r("destroy", (() => {
          u()
        })), r("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = (0, i.m)(e), s = (0, i.m)(s), t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), r("click", ((e, s) => {
          let {
            nextEl: r,
            prevEl: a
          } = t.navigation;
          r = (0, i.m)(r), a = (0, i.m)(a);
          const l = s.target;
          if (t.params.navigation.hideOnClick && !a.includes(l) && !r.includes(l)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
            let e;
            r.length ? e = r[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), n(!0 === e ? "navigationShow" : "navigationHide"), [...r, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const f = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o()
          },
          disable: f,
          update: o,
          init: p,
          destroy: u
        })
      }
    },
    68: (e, t, s) => {
      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function r(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s])
        }))
      }
      s.d(t, {
        a: () => o,
        g: () => a
      });
      const n = {
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
        return r(e, n), e
      }
      const l = {
        document: n,
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
        return r(e, l), e
      }
    },
    848: (e, t, s) => {
      s.d(t, {
        a: () => b,
        c: () => m,
        d: () => a,
        e: () => u,
        f: () => S,
        g: () => w,
        i: () => l,
        m: () => E,
        n: () => n,
        o: () => g,
        p: () => v,
        q: () => h,
        r: () => p,
        s: () => c,
        t: () => f,
        u: () => d,
        v: () => r
      });
      var i = s(68);

      function r(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function a() {
        return Date.now()
      }

      function l(e, t) {
        void 0 === t && (t = "x");
        const s = (0, i.a)();
        let r, n, a;
        const l = function(e) {
          const t = (0, i.a)();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = a.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), n || 0
      }

      function o(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n && n.enumerable && (o(e[i]) && o(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : d(e[i], r[i]) : !o(e[i]) && o(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : d(e[i], r[i])) : e[i] = r[i])
            }
          }
        }
        var s;
        return e
      }

      function c(e, t, s) {
        e.style.setProperty(t, s)
      }

      function p(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: r
        } = e;
        const n = (0, i.a)(),
          a = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > a ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0),
              i = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + i * (s - a);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [r]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: c
              })
            })), void n.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = n.requestAnimationFrame(u)
          };
        u()
      }

      function u(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function f(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function m(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), s
      }

      function h(e, t) {
        const s = [];
        for (; e.previousElementSibling;) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && s.push(i) : s.push(i), e = i
        }
        return s
      }

      function v(e, t) {
        const s = [];
        for (; e.nextElementSibling;) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && s.push(i) : s.push(i), e = i
        }
        return s
      }

      function g(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function w(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function b(e, t) {
        const s = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
        return s
      }

      function S(e, t, s) {
        const r = (0, i.a)();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    111: (e, t, s) => {
      s.d(t, {
        wx: () => K,
        Ky: () => Z
      });
      var i = s(200),
        r = s(68),
        n = s(848);
      let a, l, o;

      function d() {
        return a || (a = function() {
          const e = (0, r.a)(),
            t = (0, r.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), l || (l = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const s = d(),
            i = (0, r.a)(),
            n = i.navigator.platform,
            a = t || i.navigator.userAgent,
            l = {
              ios: !1,
              android: !1
            },
            o = i.screen.width,
            c = i.screen.height,
            p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === n;
          let v = "MacIntel" === n;
          return !u && v && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), v = !1), p && !h && (l.os = "android", l.android = !0), (u || m || f) && (l.os = "ios", l.ios = !0), l
        }(e)), l
      }
      var p = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const r = s ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
          })), i
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
            t.apply(i, n)
          }
          return r.__emitterProxy = t, i.on(e, r, s)
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
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
            }))
          })), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(i, [t, ...s])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(i, s)
            }))
          })), e
        }
      };
      const u = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        m = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = r,
              n = [s - t];
            return n.push(...Array.from({
              length: t
            }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
              n.includes(t.column) && f(e, s)
            }))
          }
          const n = r + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = r - t; i <= n + t; i += 1) {
              const t = (i % s + s) % s;
              (t < r || t > n) && f(e, t)
            } else
              for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && f(e, i)
        };
      var h = {
        updateSize: function() {
          const e = this;
          let t, s;
          const i = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, n.o)(i, "padding-left") || 0, 10) - parseInt((0, n.o)(i, "padding-right") || 0, 10), s = s - parseInt((0, n.o)(i, "padding-top") || 0, 10) - parseInt((0, n.o)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, s) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
          }
          const s = e.params,
            {
              wrapperEl: i,
              slidesEl: r,
              size: a,
              rtlTranslate: l,
              wrongRTL: o
            } = e,
            d = e.virtual && s.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, n.e)(r, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const m = [],
            h = [];
          let v = s.slidesOffsetBefore;
          "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
          let g = s.slidesOffsetAfter;
          "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let S = s.spaceBetween,
            E = -v,
            T = 0,
            y = 0;
          if (void 0 === a) return;
          "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * a : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, p.forEach((e => {
            l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), s.centeredSlides && s.cssMode && ((0, n.s)(i, "--swiper-centered-offset-before", ""), (0, n.s)(i, "--swiper-centered-offset-after", ""));
          const x = s.grid && s.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const P = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < u; i += 1) {
            let r;
            if (C = 0, p[i] && (r = p[i]), x && e.grid.updateSlide(i, r, p), !p[i] || "none" !== (0, n.o)(r, "display")) {
              if ("auto" === s.slidesPerView) {
                P && (p[i].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(r),
                  l = r.style.transform,
                  o = r.style.webkitTransform;
                if (l && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), s.roundLengths) C = e.isHorizontal() ? (0, n.f)(r, "width", !0) : (0, n.f)(r, "height", !0);
                else {
                  const e = t(a, "width"),
                    s = t(a, "padding-left"),
                    i = t(a, "padding-right"),
                    n = t(a, "margin-left"),
                    l = t(a, "margin-right"),
                    o = a.getPropertyValue("box-sizing");
                  if (o && "border-box" === o) C = e + n + l;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = r;
                    C = e + s + i + n + l + (a - t)
                  }
                }
                l && (r.style.transform = l), o && (r.style.webkitTransform = o), s.roundLengths && (C = Math.floor(C))
              } else C = (a - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (C = Math.floor(C)), p[i] && (p[i].style[e.getDirectionLabel("width")] = `${C}px`);
              p[i] && (p[i].swiperSlideSize = C), h.push(C), s.centeredSlides ? (E = E + C / 2 + T / 2 + S, 0 === T && 0 !== i && (E = E - a / 2 - S), 0 === i && (E = E - a / 2 - S), Math.abs(E) < .001 && (E = 0), s.roundLengths && (E = Math.floor(E)), y % s.slidesPerGroup == 0 && f.push(E), m.push(E)) : (s.roundLengths && (E = Math.floor(E)), (y - Math.min(e.params.slidesPerGroupSkip, y)) % e.params.slidesPerGroup == 0 && f.push(E), m.push(E), E = E + C + S), e.virtualSize += C + S, T = C, y += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + g, l && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize+S}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+S}px`), x && e.grid.updateWrapperSize(C, f), !s.centeredSlides) {
            const t = [];
            for (let i = 0; i < f.length; i += 1) {
              let r = f[i];
              s.roundLengths && (r = Math.floor(r)), f[i] <= e.virtualSize - a && t.push(r)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && s.loop) {
            const t = h[0] + S;
            if (s.slidesPerGroup > 1) {
              const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                r = t * s.slidesPerGroup;
              for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r)
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== S) {
            const t = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter(((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e => {
              e.style[t] = `${S}px`
            }))
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t => {
              e += t + (S || 0)
            })), e -= S;
            const t = e - a;
            f = f.map((e => e <= 0 ? -v : e > t ? t + g : e))
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (h.forEach((t => {
                e += t + (S || 0)
              })), e -= S, e < a) {
              const t = (a - e) / 2;
              f.forEach(((e, s) => {
                f[s] = e - t
              })), m.forEach(((e, s) => {
                m[s] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: h
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
            (0, n.s)(i, "--swiper-centered-offset-before", -f[0] + "px"), (0, n.s)(i, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (u !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            u <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let r, n = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              s.push(e)
            }));
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                s.push(a(e))
              } else s.push(a(t.activeIndex));
          for (r = 0; r < s.length; r += 1)
            if (void 0 !== s[r]) {
              const e = s[r].offsetHeight;
              n = e > n ? e : n
            }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            s = t.params,
            {
              slides: i,
              rtlTranslate: r,
              snapGrid: n
            } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          r && (a = e), i.forEach((e => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let l = s.spaceBetween;
          "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
          for (let e = 0; e < i.length; e += 1) {
            const o = i[e];
            let d = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
              p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
              u = -(a - d),
              f = u + t.slidesSizesGrid[e],
              m = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
            (u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), i[e].classList.add(s.slideVisibleClass)), m && i[e].classList.add(s.slideFullyVisibleClass), o.progress = r ? -c : c, o.originalProgress = r ? -p : p
          }
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
            progress: r,
            isBeginning: n,
            isEnd: a,
            progressLoop: l
          } = t;
          const o = n,
            d = a;
          if (0 === i) r = 0, n = !0, a = !0;
          else {
            r = (e - t.minTranslate()) / i;
            const s = Math.abs(e - t.minTranslate()) < 1,
              l = Math.abs(e - t.maxTranslate()) < 1;
            n = s || r <= 0, a = l || r >= 1, s && (r = 0), l && (r = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              r = t.slidesGrid[s],
              n = t.slidesGrid[i],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              o = Math.abs(e);
            l = o >= r ? (o - r) / a : (o + a - n) / a, l > 1 && (l -= 1)
          }
          Object.assign(t, {
            progress: r,
            progressLoop: l,
            isBeginning: n,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: s,
              slidesEl: i,
              activeIndex: r
            } = e,
            a = e.virtual && s.virtual.enabled,
            l = e.grid && s.grid && s.grid.rows > 1,
            o = e => (0, n.e)(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, p;
          if (t.forEach((e => {
              e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            })), a)
            if (s.loop) {
              let t = r - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = o(`[data-swiper-slide-index="${t}"]`)
            } else d = o(`[data-swiper-slide-index="${r}"]`);
          else l ? (d = t.filter((e => e.column === r))[0], p = t.filter((e => e.column === r + 1))[0], c = t.filter((e => e.column === r - 1))[0]) : d = t[r];
          d && (d.classList.add(s.slideActiveClass), l ? (p && p.classList.add(s.slideNextClass), c && c.classList.add(s.slidePrevClass)) : (p = (0, n.p)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p && (p = t[0]), p && p.classList.add(s.slideNextClass), c = (0, n.q)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: r,
              activeIndex: n,
              realIndex: a,
              snapIndex: l
            } = t;
          let o, d = e;
          const c = e => {
            let s = e - t.virtual.slidesBefore;
            return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: s
              } = e, i = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
              return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
            }(t)), i.indexOf(s) >= 0) o = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            o = e + Math.floor((d - e) / r.slidesPerGroup)
          }
          if (o >= i.length && (o = i.length - 1), d === n && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && r.grid && r.grid.rows > 1;
          let u;
          if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
          else if (p) {
            const e = t.slides.filter((e => e.column === d))[0];
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: o,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), t.initialized && m(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            i = s.params;
          let r = e.closest(`.${i.slideClass}, swiper-slide`);
          !r && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e)
          }));
          let n, a = !1;
          if (r)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === r) {
                a = !0, n = e;
                break
              } if (!r || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
          s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
      };

      function v(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: i,
          step: r
        } = e;
        const {
          activeIndex: n,
          previousIndex: a
        } = t;
        let l = i;
        if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
          if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`), "next" === l ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
        }
      }
      var g = {
          slideTo: function(e, t, s, i, r) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let l = e;
            l < 0 && (l = 0);
            const {
              params: o,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: p,
              activeIndex: u,
              rtlTranslate: f,
              wrapperEl: m,
              enabled: h
            } = a;
            if (a.animating && o.preventInteractionOnTransition || !h && !i && !r || a.destroyed) return !1;
            const v = Math.min(a.params.slidesPerGroupSkip, l);
            let g = v + Math.floor((l - v) / a.params.slidesPerGroup);
            g >= d.length && (g = d.length - 1);
            const w = -d[g];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  s = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= s && t < i - (i - s) / 2 ? l = e : t >= s && t < i && (l = e + 1) : t >= s && (l = e)
              }
            if (a.initialized && l !== u) {
              if (!a.allowSlideNext && (f ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (u || 0) !== l) return !1
            }
            let b;
            if (l !== (p || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = l > u ? "next" : l < u ? "prev" : "reset", f && -w === a.translate || !f && w === a.translate) return a.updateActiveIndex(l), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)), !1;
            if (o.cssMode) {
              const e = a.isHorizontal(),
                s = f ? w : -w;
              if (0 === t) {
                const t = a.virtual && a.params.virtual.enabled;
                t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  m[e ? "scrollLeft" : "scrollTop"] = s
                }))) : m[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                  a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                }))
              } else {
                if (!a.support.smoothScroll) return (0, n.r)({
                  swiper: a,
                  targetPosition: s,
                  side: e ? "left" : "top"
                }), !0;
                m.scrollTo({
                  [e ? "left" : "top"]: s,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(l), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, b), 0 === t ? a.transitionEnd(s, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, b))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, s, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            if (r.destroyed) return;
            const n = r.grid && r.params.grid && r.params.grid.rows > 1;
            let a = e;
            if (r.params.loop)
              if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * r.params.grid.rows;
                  e = r.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = r.getSlideIndexByData(a);
                const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                  {
                    centeredSlides: s
                  } = r.params;
                let i = r.params.slidesPerView;
                "auto" === i ? i = r.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && i % 2 == 0 && (i += 1));
                let l = t - e < i;
                if (s && (l = l || e < Math.ceil(i / 2)), l) {
                  const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                  r.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? r.realIndex : void 0
                  })
                }
                if (n) {
                  const e = a * r.params.grid.rows;
                  a = r.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else a = r.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              r.slideTo(a, t, s, i)
            })), r
          },
          slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                enabled: r,
                params: n,
                animating: a
              } = i;
            if (!r || i.destroyed) return i;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
              d = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                i.slideTo(i.activeIndex + o, e, t, s)
              })), !0
            }
            return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
          },
          slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                params: r,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: o,
                animating: d
              } = i;
            if (!o || i.destroyed) return i;
            const c = i.virtual && r.virtual.enabled;
            if (r.loop) {
              if (d && !c && r.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? i.translate : -i.translate),
              f = n.map((e => p(e)));
            let m = n[f.indexOf(u) - 1];
            if (void 0 === m && r.cssMode) {
              let e;
              n.forEach(((t, s) => {
                u >= t && (e = s)
              })), void 0 !== e && (m = n[e > 0 ? e - 1 : e])
            }
            let h = 0;
            if (void 0 !== m && (h = a.indexOf(m), h < 0 && (h = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && i.isBeginning) {
              const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(r, e, t, s)
            }
            return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
              i.slideTo(h, e, t, s)
            })), !0) : i.slideTo(h, e, t, s)
          },
          slideReset: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this;
            if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, s)
          },
          slideToClosest: function(e, t, s, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
            const r = this;
            if (r.destroyed) return;
            let n = r.activeIndex;
            const a = Math.min(r.params.slidesPerGroupSkip, n),
              l = a + Math.floor((n - a) / r.params.slidesPerGroup),
              o = r.rtlTranslate ? r.translate : -r.translate;
            if (o >= r.snapGrid[l]) {
              const e = r.snapGrid[l];
              o - e > (r.snapGrid[l + 1] - e) * i && (n += r.params.slidesPerGroup)
            } else {
              const e = r.snapGrid[l - 1];
              o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup)
            }
            return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: s
            } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let r, a = e.clickedIndex;
            const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        w = {
          loopCreate: function(e) {
            const t = this,
              {
                params: s,
                slidesEl: i
              } = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled) return;
            const r = () => {
                (0, n.e)(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              a = t.grid && s.grid && s.grid.rows > 1,
              l = s.slidesPerGroup * (a ? s.grid.rows : 1),
              o = t.slides.length % l != 0,
              d = a && t.slides.length % s.grid.rows != 0,
              c = e => {
                for (let i = 0; i < e; i += 1) {
                  const e = t.isElement ? (0, n.c)("swiper-slide", [s.slideBlankClass]) : (0, n.c)("div", [s.slideClass, s.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            o ? (s.loopAddBlankSlides ? (c(l - t.slides.length % l), t.recalcSlides(), t.updateSlides()) : (0, n.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : d ? (s.loopAddBlankSlides ? (c(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, n.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : r(), t.loopFix({
              slideRealIndex: e,
              direction: s.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: i,
              setTranslate: r,
              activeSlideIndex: a,
              byController: l,
              byMousewheel: o
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: p,
              allowSlideNext: u,
              slidesEl: f,
              params: m
            } = d, {
              centeredSlides: h
            } = m;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
            let v = m.slidesPerView;
            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(m.slidesPerView, 10)), h && v % 2 == 0 && (v += 1));
            const g = m.slidesPerGroupAuto ? v : m.slidesPerGroup;
            let w = g;
            w % g != 0 && (w += g - w % g), w += m.loopAdditionalSlides, d.loopedSlides = w;
            const b = d.grid && m.grid && m.grid.rows > 1;
            c.length < v + w ? (0, n.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && (0, n.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              E = [];
            let T = d.activeIndex;
            void 0 === a ? a = d.getSlideIndex(c.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : T = a;
            const y = "next" === i || !i,
              x = "prev" === i || !i;
            let C = 0,
              P = 0;
            const M = b ? Math.ceil(c.length / m.grid.rows) : c.length,
              _ = (b ? c[a].column : a) + (h && void 0 === r ? -v / 2 + .5 : 0);
            if (_ < w) {
              C = Math.max(w - _, g);
              for (let e = 0; e < w - _; e += 1) {
                const t = e - Math.floor(e / M) * M;
                if (b) {
                  const e = M - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && S.push(t)
                } else S.push(M - t - 1)
              }
            } else if (_ + v > M - w) {
              P = Math.max(_ - (M - 2 * w), g);
              for (let e = 0; e < P; e += 1) {
                const t = e - Math.floor(e / M) * M;
                b ? c.forEach(((e, s) => {
                  e.column === t && E.push(s)
                })) : E.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                d.__preventObserver__ = !1
              })), x && S.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), y && E.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), d.recalcSlides(), "auto" === m.slidesPerView ? d.updateSlides() : b && (S.length > 0 && x || E.length > 0 && y) && d.slides.forEach(((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              })), m.watchSlidesProgress && d.updateSlidesOffset(), s)
              if (S.length > 0 && x) {
                if (void 0 === t) {
                  const e = d.slidesGrid[T],
                    t = d.slidesGrid[T + C] - e;
                  o ? d.setTranslate(d.translate - t) : (d.slideTo(T + C, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (r) {
                  const e = b ? S.length / m.grid.rows : S.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (E.length > 0 && y)
              if (void 0 === t) {
                const e = d.slidesGrid[T],
                  t = d.slidesGrid[T - P] - e;
                o ? d.setTranslate(d.translate - t) : (d.slideTo(T - P, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? E.length / m.grid.rows : E.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: r,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === m.slidesPerView && s
                })
              })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === m.slidesPerView && s
              })
            }
            d.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: s
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              i[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), i.forEach((e => {
              s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function b(e, t, s) {
        const i = (0, r.a)(),
          {
            params: n
          } = e,
          a = n.edgeSwipeDetection,
          l = n.edgeSwipeThreshold;
        return !a || !(s <= l || s >= i.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
      }

      function S(e) {
        const t = this,
          s = (0, r.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
          a.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void b(t, i, i.targetTouches[0].pageX);
        const {
          params: l,
          touches: o,
          enabled: d
        } = t;
        if (!d) return;
        if (!l.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!l.noSwipingClass && "" !== l.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        p && i.target && i.target.shadowRoot && u && (c = u[0]);
        const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
          m = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === (0, r.g)() || s === (0, r.a)()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
        o.currentX = i.pageX, o.currentY = i.pageY;
        const h = o.currentX,
          v = o.currentY;
        if (!b(t, i, h)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = h, o.startY = v, a.touchStartTime = (0, n.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
        let g = !0;
        c.matches(a.focusableElements) && (g = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && s.activeElement.blur();
        const w = g && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !w || c.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
      }

      function E(e) {
        const t = (0, r.g)(),
          s = this,
          i = s.touchEventsData,
          {
            params: a,
            touches: l,
            rtlTranslate: o,
            enabled: d
          } = s;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== i.touchId) return;
          if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX,
          f = c.pageY;
        if (p.preventedByNestedSwiper) return l.startX = u, void(l.startY = f);
        if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(l, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), i.touchStartTime = (0, n.d)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (s.isVertical()) {
            if (f < l.startY && s.translate <= s.maxTranslate() || f > l.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (u < l.startX && s.translate <= s.maxTranslate() || u > l.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = u, l.currentY = f;
        const m = l.currentX - l.startX,
          h = l.currentY - l.startY;
        if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? i.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let v = s.isHorizontal() ? m : h,
          g = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
        a.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), g = Math.abs(g) * (o ? 1 : -1)), l.diff = v, v *= a.touchRatio, o && (v = -v, g = -g);
        const w = s.touchesDirection;
        s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
        const b = s.params.loop && !a.cssMode,
          S = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
          if (b && S && s.loopFix({
              direction: s.swipeDirection
            }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            s.wrapperEl.dispatchEvent(e)
          }
          i.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(l, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
        let E = !0,
          T = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (T = 0), v > 0 ? (b && S && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > s.minTranslate() && (E = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** T))) : v < 0 && (b && S && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), i.currentTranslate < s.maxTranslate() && (E = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** T))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
          if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, i.currentTranslate = i.startTranslate, void(l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
      }

      function T(e) {
        const t = this,
          s = t.touchEventsData;
        let i, r = e;
        if (r.originalEvent && (r = r.originalEvent), "touchend" === r.type || "touchcancel" === r.type) {
          if (i = [...r.changedTouches].filter((e => e.identifier === s.touchId))[0], !i || i.identifier !== s.touchId) return
        } else {
          if (null !== s.touchId) return;
          if (r.pointerId !== s.pointerId) return;
          i = r
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && (!["pointercancel", "contextmenu"].includes(r.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        s.pointerId = null, s.touchId = null;
        const {
          params: a,
          touches: l,
          rtlTranslate: o,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === r.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, n.d)(),
          u = p - s.touchStartTime;
        if (t.allowClick) {
          const e = r.path || r.composedPath && r.composedPath();
          t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
        }
        if (s.lastClickTime = (0, n.d)(), (0, n.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === l.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let f;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = a.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const m = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (m || f >= d[e] && f < d[e + t]) && (h = e, v = d[e + t] - d[e]) : (m || f >= d[e]) && (h = e, v = d[d.length - 1] - d[d.length - 2])
        }
        let g = null,
          w = null;
        a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const b = (f - d[h]) / v,
          S = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (u > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : h + S) : t.slideTo(h)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(h + S) : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(h))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || r.target !== t.navigation.nextEl && r.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + S), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h)) : r.target === t.navigation.nextEl ? t.slideTo(h + S) : t.slideTo(h)
        }
      }

      function y() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: r,
          snapGrid: n
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function x(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function C() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
          } = e;
        if (!i) return;
        let r;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function P(e) {
        const t = this;
        u(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function M() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const _ = (e, t) => {
          const s = (0, r.g)(),
            {
              params: i,
              el: n,
              wrapperEl: a,
              device: l
            } = e,
            o = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
          }), n[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), n[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
          }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
          }), s[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (i.preventClicks || i.preventClicksPropagation) && n[d]("click", e.onClick, !0), i.cssMode && a[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", y, !0) : e[c]("observerUpdate", y, !0), n[d]("load", e.onLoad, {
            capture: !0
          })
        },
        k = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var O = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
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
        threshold: 5,
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
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
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
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function L(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            r = s[i];
          "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), (0, n.u)(t, s)) : (0, n.u)(t, s)) : (0, n.u)(t, s)
        }
      }
      const I = {
          eventsEmitter: p,
          update: h,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: s,
                translate: i,
                wrapperEl: r
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let a = (0, n.i)(r, e);
              return a += this.cssOverflowAdjustment(), s && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: n,
                  progress: a
                } = s;
              let l, o = 0,
                d = 0;
              s.isHorizontal() ? o = i ? -e : e : d = e, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : r.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
              const c = s.maxTranslate() - s.minTranslate();
              l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, i, r) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
              const a = this,
                {
                  params: l,
                  wrapperEl: o
                } = a;
              if (a.animating && l.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let p;
              if (p = i && e > d ? d : i && e < c ? c : e, a.updateProgress(p), l.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!a.support.smoothScroll) return (0, n.r)({
                    swiper: a,
                    targetPosition: -p,
                    side: e ? "left" : "top"
                  }), !0;
                  o.scrollTo({
                    [e ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, s && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: i
                } = s;
              i.cssMode || (i.autoHeight && s.updateAutoHeight(), v({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: i
                } = s;
              s.animating = !1, i.cssMode || (s.setTransition(0), v({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: w,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = S.bind(e), e.onTouchMove = E.bind(e), e.onTouchEnd = T.bind(e), e.onDocumentTouchStart = M.bind(e), t.cssMode && (e.onScroll = C.bind(e)), e.onClick = x.bind(e), e.onLoad = P.bind(e), _(e, "on")
            },
            detachEvents: function() {
              _(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: s,
                  params: i,
                  el: r
                } = e,
                a = i.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              const o = (l in a ? a[l] : void 0) || e.originalParams,
                d = k(e, i),
                c = k(e, o),
                p = i.enabled;
              d && !c ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === o[t]) return;
                const s = i[t] && i[t].enabled,
                  r = o[t] && o[t].enabled;
                s && !r && e[t].disable(), !s && r && e[t].enable()
              }));
              const u = o.direction && o.direction !== i.direction,
                f = i.loop && (o.slidesPerView !== i.slidesPerView || u),
                m = i.loop;
              u && s && e.changeDirection(), (0, n.u)(e.params, o);
              const h = e.params.enabled,
                v = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), s && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && v ? (e.loopCreate(t), e.updateSlides()) : m && !v && e.loopDestroy()), e.emit("breakpoint", o)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let i = !1;
              const n = (0, r.a)(),
                a = "window" === t ? n.innerHeight : s.clientHeight,
                l = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < l.length; e += 1) {
                const {
                  point: r,
                  value: a
                } = l[e];
                "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r) : a <= s.clientWidth && (i = r)
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
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: s,
                  rtl: i,
                  el: r,
                  device: n
                } = e,
                a = function(e, t) {
                  const s = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((i => {
                      e[i] && s.push(t + i)
                    })) : "string" == typeof e && s.push(t + e)
                  })), s
                }(["initialized", s.direction, {
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
                  android: n.android
                }, {
                  ios: n.ios
                }, {
                  "css-mode": s.cssMode
                }, {
                  centered: s.cssMode && s.centeredSlides
                }, {
                  "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
              t.push(...a), r.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        A = {};
      class z {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, n.u)({}, t), e && !t.el && (t.el = e);
          const l = (0, r.g)();
          if (t.el && "string" == typeof t.el && l.querySelectorAll(t.el).length > 1) {
            const e = [];
            return l.querySelectorAll(t.el).forEach((s => {
              const i = (0, n.u)({}, t, {
                el: s
              });
              e.push(new z(i))
            })), e
          }
          const p = this;
          p.__swiper__ = !0, p.support = d(), p.device = c({
            userAgent: t.userAgent
          }), p.browser = (o || (o = function() {
            const e = (0, r.a)(),
              t = c();
            let s = !1;

            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                s = e < 16 || 16 === e && i < 2
              }
            }
            const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              a = i();
            return {
              isSafari: s || a,
              needPerspectiveFix: s,
              need3dFix: a || n && t.ios,
              isWebView: n
            }
          }()), o), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
          const u = {};
          p.modules.forEach((e => {
            e({
              params: t,
              swiper: p,
              extendParams: L(t, u),
              on: p.on.bind(p),
              once: p.once.bind(p),
              off: p.off.bind(p),
              emit: p.emit.bind(p)
            })
          }));
          const f = (0, n.u)({}, O, u);
          return p.params = (0, n.u)({}, f, A, t), p.originalParams = (0, n.u)({}, p.params), p.passedParams = (0, n.u)({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach((e => {
            p.on(e, p.params.on[e])
          })), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
            enabled: p.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === p.params.direction,
            isVertical: () => "vertical" === p.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: p.params.allowSlideNext,
            allowSlidePrev: p.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: p.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: p.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), p.emit("_swiper"), p.params.init && p.init(), p
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: s
          } = this, i = (0, n.e)(t, `.${s.slideClass}, swiper-slide`), r = (0, n.g)(i[0]);
          return (0, n.g)(e) - r
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, n.e)(e, `.${t.slideClass}, swiper-slide`)
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
            r = (s.maxTranslate() - i) * e + i;
          s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
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
          e.slides.forEach((s => {
            const i = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: i
            }), e.emit("_slideClass", s, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: n,
            size: a,
            activeIndex: l
          } = this;
          let o = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
            for (let s = l + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), o += 1, t > a && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = l + 1; e < i.length; e += 1)(t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a) && (o += 1);
          else
            for (let e = l - 1; e >= 0; e -= 1) r[l] - r[e] < a && (o += 1);
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
          let r;
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && u(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
              const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              r = e.slideTo(t.length - 1, 0, !1, !0)
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i()
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
          s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : (0, n.e)(s, i())[0];
          return !r && t.params.createElements && (r = (0, n.c)("div", t.params.wrapperClass), s.append(r), (0, n.e)(s, `.${t.params.slideClass}`).forEach((e => {
            r.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, n.o)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, n.o)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, n.o)(r, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
            e.complete ? u(t, e) : e.addEventListener("load", (e => {
              u(t, e.target)
            }))
          })), m(t), t.initialized = !0, m(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: i,
              el: r,
              wrapperEl: a,
              slides: l
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach((e => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el.swiper = null, (0, n.v)(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, n.u)(A, e)
        }
        static get extendedDefaults() {
          return A
        }
        static get defaults() {
          return O
        }
        static installModule(e) {
          z.prototype.__modules__ || (z.prototype.__modules__ = []);
          const t = z.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => z.installModule(e))), z) : (z.installModule(e), z)
        }
      }
      Object.keys(I).forEach((e => {
        Object.keys(I[e]).forEach((t => {
          z.prototype[t] = I[e][t]
        }))
      })), z.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: i
        } = e;
        const n = (0, r.a)();
        let a = null,
          l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
            l = n.requestAnimationFrame((() => {
              const {
                width: s,
                height: i
              } = t;
              let r = s,
                n = i;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: i,
                  target: a
                } = e;
                a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize)
              })), r === s && n === i || o()
            }))
          })), a.observe(t.el)) : (n.addEventListener("resize", o), n.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
          l && n.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: a
        } = e;
        const l = [],
          o = (0, r.a)(),
          d = function(e, s) {
            void 0 === s && (s = {});
            const i = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const s = function() {
                a("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
            }));
            i.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData
            }), l.push(i)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, n.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          l.forEach((e => {
            e.disconnect()
          })), l.splice(0, l.length)
        }))
      }]);
      const N = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function D(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function G(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : D(t[s]) && D(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : G(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function V(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function B(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function j(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function R(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function F(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function $() {
        return $ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
          }
          return e
        }, $.apply(this, arguments)
      }

      function H(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function W(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          H(e) ? t.push(e) : e.props && e.props.children && W(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function q(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (H(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = W(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function Y(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const X = (0, i.createContext)(null),
        U = (0, i.createContext)(null),
        K = (0, i.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: r = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: l,
            ...o
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, i.useState)("swiper"), [u, f] = (0, i.useState)(null), [m, h] = (0, i.useState)(!1), v = (0, i.useRef)(!1), g = (0, i.useRef)(null), w = (0, i.useRef)(null), b = (0, i.useRef)(null), S = (0, i.useRef)(null), E = (0, i.useRef)(null), T = (0, i.useRef)(null), y = (0, i.useRef)(null), x = (0, i.useRef)(null), {
            params: C,
            passedParams: P,
            rest: M,
            events: _
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              i = {},
              r = {};
            G(s, O), s._emitClasses = !0, s.init = !1;
            const n = {},
              a = N.map((e => e.replace(/_/, ""))),
              l = Object.assign({}, e);
            return Object.keys(l).forEach((l => {
              void 0 !== e[l] && (a.indexOf(l) >= 0 ? D(e[l]) ? (s[l] = {}, r[l] = {}, G(s[l], e[l]), G(r[l], e[l])) : (s[l] = e[l], r[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l] ? t ? i[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : s.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n[l] = e[l])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            })), {
              params: s,
              passedParams: r,
              rest: n,
              events: i
            }
          }(o), {
            slides: k,
            slots: L
          } = q(a), I = () => {
            h(!m)
          };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const A = () => {
            Object.assign(C.on, _), d = !0;
            const e = {
              ...C
            };
            if (delete e.wrapperClass, w.current = new z(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              G(w.current.params.virtual, e), G(w.current.originalParams.virtual, e)
            }
          };
          return g.current || A(), w.current && w.current.on("_beforeBreakpoint", I), (0, i.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", I)
          })), (0, i.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), Y((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && A(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: i,
                  prevEl: r,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: l
                } = e;
                V(t) && i && r && (l.params.navigation.nextEl = i, l.originalParams.navigation.nextEl = i, l.params.navigation.prevEl = r, l.originalParams.navigation.prevEl = r), B(t) && n && (l.params.pagination.el = n, l.originalParams.pagination.el = n), j(t) && a && (l.params.scrollbar.el = a, l.originalParams.scrollbar.el = a), l.init(s)
              }({
                el: g.current,
                nextEl: E.current,
                prevEl: T.current,
                paginationEl: y.current,
                scrollbarEl: x.current,
                swiper: w.current
              }, C), l && !w.current.destroyed && l(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), Y((() => {
            !d && _ && w.current && Object.keys(_).forEach((e => {
              w.current.on(e, _[e])
            }));
            const e = function(e, t, s, i, r) {
              const n = [];
              if (!t) return n;
              const a = e => {
                n.indexOf(e) < 0 && n.push(e)
              };
              if (s && i) {
                const e = i.map(r),
                  t = s.map(r);
                e.join("") !== t.join("") && a("children"), i.length !== s.length && a("children")
              }
              return N.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (D(e[s]) && D(t[s])) {
                    const i = Object.keys(e[s]),
                      r = Object.keys(t[s]);
                    i.length !== r.length ? a(s) : (i.forEach((i => {
                      e[s][i] !== t[s][i] && a(s)
                    })), r.forEach((i => {
                      e[s][i] !== t[s][i] && a(s)
                    })))
                  } else e[s] !== t[s] && a(s)
              })), n
            }(P, b.current, k, S.current, (e => e.key));
            return b.current = P, S.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: i,
                changedParams: r,
                nextEl: n,
                prevEl: a,
                scrollbarEl: l,
                paginationEl: o
              } = e;
              const d = r.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: f,
                  virtual: m,
                  thumbs: h
                } = t;
              let v, g, w, b, S, E, T, y;
              r.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), r.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (g = !0), r.includes("pagination") && i.pagination && (i.pagination.el || o) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              r.includes("loop") && t.isElement && (c.loop && !i.loop ? E = !0 : !c.loop && i.loop ? T = !0 : y = !0), d.forEach((e => {
                if (D(c[e]) && D(i[e])) Object.assign(c[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || x(e);
                else {
                  const t = i[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = i[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), r.includes("children") && s && m && c.virtual.enabled ? (m.slides = s, m.update(!0)) : r.includes("virtual") && m && c.virtual.enabled && (s && (m.slides = s), m.update(!0)), r.includes("children") && s && c.loop && (y = !0), v && h.init() && h.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (c.pagination.el = o), p.init(), p.render(), p.update()), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (c.scrollbar.el = l), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = t.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), r.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && t.changeDirection(i.direction, !1), (E || y) && t.loopDestroy(), (T || y) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: k,
              passedParams: P,
              changedParams: e,
              nextEl: E.current,
              prevEl: T.current,
              scrollbarEl: x.current,
              paginationEl: y.current
            }), () => {
              _ && w.current && Object.keys(_).forEach((e => {
                w.current.off(e, _[e])
              }))
            }
          })), Y((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), i.createElement(r, $({
            ref: g,
            className: R(`${c}${s?` ${s}`:""}`)
          }, M), i.createElement(U.Provider, {
            value: w.current
          }, L["container-start"], i.createElement(n, {
            className: F(C.wrapperClass)
          }, L["wrapper-start"], C.virtual ? function(e, t, s) {
            if (!s) return null;
            const r = e => {
                let s = e;
                return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
              },
              n = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
              } : {
                top: `${s.offset}px`
              },
              {
                from: a,
                to: l
              } = s,
              o = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = o; e < d; e += 1) e >= a && e <= l && c.push(t[r(e)]);
            return c.map(((t, s) => i.cloneElement(t, {
              swiper: e,
              style: n,
              key: `slide-${s}`
            })))
          }(w.current, k, u) : k.map(((e, t) => i.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), L["wrapper-end"]), V(C) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: T,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: E,
            className: "swiper-button-next"
          })), j(C) && i.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), B(C) && i.createElement("div", {
            ref: y,
            className: "swiper-pagination"
          }), L["container-end"]))
        }));
      K.displayName = "Swiper";
      const Z = (0, i.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: r,
          className: n = "",
          swiper: a,
          zoom: l,
          lazy: o,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [f, m] = (0, i.useState)("swiper-slide"),
          [h, v] = (0, i.useState)(!1);

        function g(e, t, s) {
          t === u.current && m(s)
        }
        Y((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && m("swiper-slide")
          }
        })), Y((() => {
          a && u.current && !a.destroyed && m(a.getSlideClasses(u.current))
        }), [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof r ? r(w) : r;
        return i.createElement(s, $({
          ref: u,
          className: R(`${f}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), l && i.createElement(X.Provider, {
          value: w
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof l ? l : void 0
        }, b(), o && !h && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !l && i.createElement(X.Provider, {
          value: w
        }, b(), o && !h && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Z.displayName = "SwiperSlide"
    }
  }
]);
//# sourceMappingURL=ac4ef95d1086de893455ded365b81fba.js.map