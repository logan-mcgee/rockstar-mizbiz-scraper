! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2c745d4d-be3d-4f85-9ac8-e7a8fc66ad94", e._sentryDebugIdIdentifier = "sentry-dbid-2c745d4d-be3d-4f85-9ac8-e7a8fc66ad94")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5216], {
    90098: e => {
      var t, r, s = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
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
          r = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
          r = n
        }
      }();
      var o, l = [],
        d = !1,
        c = -1;

      function p() {
        d && o && (d = !1, o.length ? l = o.concat(l) : c = -1, l.length && u())
      }

      function u() {
        if (!d) {
          var e = a(p);
          d = !0;
          for (var t = l.length; t;) {
            for (o = l, l = []; ++c < t;) o && o[c].run();
            c = -1, t = l.length
          }
          o = null, d = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === n || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function h() {}
      s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || d || a(u)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = h, s.addListener = h, s.once = h, s.off = h, s.removeListener = h, s.removeAllListeners = h, s.emit = h, s.prependListener = h, s.prependOnceListener = h, s.listeners = function(e) {
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
    89269: (e, t, r) => {
      "use strict";
      var s = r(17254);

      function i() {}

      function n() {}
      n.resetWarningCache = i, e.exports = function() {
        function e(e, t, r, i, n, a) {
          if (a !== s) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: n,
          resetWarningCache: i
        };
        return r.PropTypes = r, r
      }
    },
    37977: (e, t, r) => {
      e.exports = r(89269)()
    },
    17254: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    26516: (e, t, r) => {
      "use strict";
      var s = r(71403),
        i = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, r) {
        var s, n = {},
          d = null,
          c = null;
        for (s in void 0 !== r && (d = "" + r), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, s) && !l.hasOwnProperty(s) && (n[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === n[s] && (n[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = d, t.jsxs = d
    },
    46632: (e, t, r) => {
      "use strict";
      e.exports = r(26516)
    },
    93004: (e, t, r) => {
      "use strict";

      function s(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : s(t[r]) && s(e[r]) && Object.keys(t[r]).length > 0 && i(e[r], t[r])
        }))
      }
      r.d(t, {
        a: () => l,
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
        return i(e, n), e
      }
      const o = {
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

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, o), e
      }
    },
    40825: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => b,
        c: () => h,
        d: () => a,
        e: () => u,
        f: () => T,
        g: () => w,
        i: () => o,
        j: () => S,
        k: () => l,
        m: () => y,
        n: () => n,
        o: () => g,
        p: () => v,
        q: () => m,
        r: () => p,
        s: () => c,
        t: () => f,
        u: () => d,
        v: () => i
      });
      var s = r(93004);

      function i(e) {
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

      function o(e, t) {
        void 0 === t && (t = "x");
        const r = (0, s.a)();
        let i, n, a;
        const o = function(e) {
          const t = (0, s.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new r.WebKitCSSMatrix("none" === n ? "" : n)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (n = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
          const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, s = r.length; t < s; t += 1) {
              const s = r[t],
                n = Object.getOwnPropertyDescriptor(i, s);
              void 0 !== n && n.enumerable && (l(e[s]) && l(i[s]) ? i[s].__swiper__ ? e[s] = i[s] : d(e[s], i[s]) : !l(e[s]) && l(i[s]) ? (e[s] = {}, i[s].__swiper__ ? e[s] = i[s] : d(e[s], i[s])) : e[s] = i[s])
            }
          }
        }
        var r;
        return e
      }

      function c(e, t, r) {
        e.style.setProperty(t, r)
      }

      function p(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: i
        } = e;
        const n = (0, s.a)(),
          a = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > a ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              s = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + s * (r - a);
            if (p(c, r) && (c = r), t.wrapperEl.scrollTo({
                [i]: c
              }), p(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
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

      function h(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function m(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const s = e.previousElementSibling;
          t ? s.matches(t) && r.push(s) : r.push(s), e = s
        }
        return r
      }

      function v(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const s = e.nextElementSibling;
          t ? s.matches(t) && r.push(s) : r.push(s), e = s
        }
        return r
      }

      function g(e, t) {
        return (0, s.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function w(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function b(e, t) {
        const r = [];
        let s = e.parentElement;
        for (; s;) t ? s.matches(t) && r.push(s) : r.push(s), s = s.parentElement;
        return r
      }

      function S(e, t) {
        t && e.addEventListener("transitionend", (function r(s) {
          s.target === e && (t.call(e, s), e.removeEventListener("transitionend", r))
        }))
      }

      function T(e, t, r) {
        const i = (0, s.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function y(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    81902: (e, t, r) => {
      "use strict";
      r.d(t, {
        RC: () => K,
        qr: () => Z
      });
      var s = r(71403),
        i = r(93004),
        n = r(40825);
      let a, o, l;

      function d() {
        return a || (a = function() {
          const e = (0, i.a)(),
            t = (0, i.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = d(),
            s = (0, i.a)(),
            n = s.navigator.platform,
            a = t || s.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = s.screen.width,
            c = s.screen.height,
            p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === n;
          let v = "MacIntel" === n;
          return !u && v && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), v = !1), p && !m && (o.os = "android", o.android = !0), (u || h || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }
      var p = {
        on(e, t, r) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof t) return s;
          const i = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][i](t)
          })), s
        },
        once(e, t, r) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof t) return s;

          function i() {
            s.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
            t.apply(s, n)
          }
          return i.__emitterProxy = t, s.on(e, i, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const s = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[s](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((s, i) => {
              (s === t || s.__emitterProxy && s.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, s;
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], r = n.slice(1, n.length), s = e) : (t = n[0].events, r = n[0].data, s = n[0].context || e), r.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(s, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(s, r)
            }))
          })), e
        }
      };
      const u = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        h = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = i,
              n = [r - t];
            return n.push(...Array.from({
              length: t
            }).map(((e, t) => r + s + t))), void e.slides.forEach(((t, r) => {
              n.includes(t.column) && f(e, r)
            }))
          }
          const n = i + s - 1;
          if (e.params.rewind || e.params.loop)
            for (let s = i - t; s <= n + t; s += 1) {
              const t = (s % r + r) % r;
              (t < i || t > n) && f(e, t)
            } else
              for (let s = Math.max(i - t, 0); s <= Math.min(n + t, r - 1); s += 1) s !== i && (s > n || s < i) && f(e, s)
        };
      var m = {
        updateSize: function() {
          const e = this;
          let t, r;
          const s = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, n.o)(s, "padding-left") || 0, 10) - parseInt((0, n.o)(s, "padding-right") || 0, 10), r = r - parseInt((0, n.o)(s, "padding-top") || 0, 10) - parseInt((0, n.o)(s, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: s,
              slidesEl: i,
              size: a,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && r.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, n.e)(i, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const h = [],
            m = [];
          let v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
          let g = r.slidesOffsetAfter;
          "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let S = r.spaceBetween,
            T = -v,
            y = 0,
            E = 0;
          if (void 0 === a) return;
          "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * a : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, p.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, n.s)(s, "--swiper-centered-offset-before", ""), (0, n.s)(s, "--swiper-centered-offset-after", ""));
          const x = r.grid && r.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const P = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let s = 0; s < u; s += 1) {
            let i;
            if (C = 0, p[s] && (i = p[s]), x && e.grid.updateSlide(s, i, p), !p[s] || "none" !== (0, n.o)(i, "display")) {
              if ("auto" === r.slidesPerView) {
                P && (p[s].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(i),
                  o = i.style.transform,
                  l = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? (0, n.f)(i, "width", !0) : (0, n.f)(i, "height", !0);
                else {
                  const e = t(a, "width"),
                    r = t(a, "padding-left"),
                    s = t(a, "padding-right"),
                    n = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + n + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = i;
                    C = e + r + s + n + o + (a - t)
                  }
                }
                o && (i.style.transform = o), l && (i.style.webkitTransform = l), r.roundLengths && (C = Math.floor(C))
              } else C = (a - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), p[s] && (p[s].style[e.getDirectionLabel("width")] = `${C}px`);
              p[s] && (p[s].swiperSlideSize = C), m.push(C), r.centeredSlides ? (T = T + C / 2 + y / 2 + S, 0 === y && 0 !== s && (T = T - a / 2 - S), 0 === s && (T = T - a / 2 - S), Math.abs(T) < .001 && (T = 0), r.roundLengths && (T = Math.floor(T)), E % r.slidesPerGroup == 0 && f.push(T), h.push(T)) : (r.roundLengths && (T = Math.floor(T)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && f.push(T), h.push(T), T = T + C + S), e.virtualSize += C + S, y = C, E += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + g, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (s.style.width = `${e.virtualSize+S}px`), r.setWrapperSize && (s.style[e.getDirectionLabel("width")] = `${e.virtualSize+S}px`), x && e.grid.updateWrapperSize(C, f), !r.centeredSlides) {
            const t = [];
            for (let s = 0; s < f.length; s += 1) {
              let i = f[s];
              r.roundLengths && (i = Math.floor(i)), f[s] <= e.virtualSize - a && t.push(i)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && r.loop) {
            const t = m[0] + S;
            if (r.slidesPerGroup > 1) {
              const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                i = t * r.slidesPerGroup;
              for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i)
            }
            for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== S) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter(((e, t) => !(r.cssMode && !r.loop) || t !== p.length - 1)).forEach((e => {
              e.style[t] = `${S}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (S || 0)
            })), e -= S;
            const t = e - a;
            f = f.map((e => e <= 0 ? -v : e > t ? t + g : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (m.forEach((t => {
                e += t + (S || 0)
              })), e -= S, e < a) {
              const t = (a - e) / 2;
              f.forEach(((e, r) => {
                f[r] = e - t
              })), h.forEach(((e, r) => {
                h[r] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: h,
              slidesSizesGrid: m
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, n.s)(s, "--swiper-centered-offset-before", -f[0] + "px"), (0, n.s)(s, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (u !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              s = e.el.classList.contains(t);
            u <= r.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            s = t.virtual && t.params.virtual.enabled;
          let i, n = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !s) break;
                r.push(a(e))
              } else r.push(a(t.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const e = r[i].offsetHeight;
              n = e > n ? e : n
            }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: s,
              rtlTranslate: i,
              snapGrid: n
            } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          i && (a = e), s.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < s.length; e += 1) {
            const l = s[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= s[0].swiperSlideOffset);
            const c = (a + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = (a - n[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = -(a - d),
              f = u + t.slidesSizesGrid[e],
              h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
            (u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), s[e].classList.add(r.slideVisibleClass)), h && s[e].classList.add(r.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: n,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = n,
            d = a;
          if (0 === s) i = 0, n = !0, a = !0;
          else {
            i = (e - t.minTranslate()) / s;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            n = r || i <= 0, a = o || i >= 1, r && (i = 0), o && (i = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              s = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[r],
              n = t.slidesGrid[s],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= i ? (l - i) / a : (l + a - n) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: o,
            isBeginning: n,
            isEnd: a
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: s,
              activeIndex: i
            } = e,
            a = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, n.e)(s, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, p;
          if (t.forEach((e => {
              e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), a)
            if (r.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${i}"]`);
          else o ? (d = t.filter((e => e.column === i))[0], p = t.filter((e => e.column === i + 1))[0], c = t.filter((e => e.column === i - 1))[0]) : d = t[i];
          d && (d.classList.add(r.slideActiveClass), o ? (p && p.classList.add(r.slideNextClass), c && c.classList.add(r.slidePrevClass)) : (p = (0, n.p)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && !p && (p = t[0]), p && p.classList.add(r.slideNextClass), c = (0, n.q)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(r.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: s,
              params: i,
              activeIndex: n,
              realIndex: a,
              snapIndex: o
            } = t;
          let l, d = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, s = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : s >= t[e] && s < t[e + 1] && (i = e + 1) : s >= t[e] && (i = e);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), s.indexOf(r) >= 0) l = s.indexOf(r);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= s.length && (l = s.length - 1), d === n && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && i.grid && i.grid.rows > 1;
          let u;
          if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
          else if (p) {
            const e = t.slides.filter((e => e.column === d))[0];
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(r / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), t.initialized && h(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            s = r.params;
          let i = e.closest(`.${s.slideClass}, swiper-slide`);
          !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (i = e)
          }));
          let n, a = !1;
          if (i)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === i) {
                a = !0, n = e;
                break
              } if (!i || !a) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = n, s.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function v(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: s,
          step: i
        } = e;
        const {
          activeIndex: n,
          previousIndex: a
        } = t;
        let o = s;
        if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${i}`), r && n !== a) {
          if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var g = {
          slideTo: function(e, t, r, s, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: p,
              activeIndex: u,
              rtlTranslate: f,
              wrapperEl: h,
              enabled: m
            } = a;
            if (a.animating && l.preventInteractionOnTransition || !m && !s && !i || a.destroyed) return !1;
            const v = Math.min(a.params.slidesPerGroupSkip, o);
            let g = v + Math.floor((o - v) / a.params.slidesPerGroup);
            g >= d.length && (g = d.length - 1);
            const w = -d[g];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  r = Math.floor(100 * c[e]),
                  s = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < s - (s - r) / 2 ? o = e : t >= r && t < s && (o = e + 1) : t >= r && (o = e)
              }
            if (a.initialized && o !== u) {
              if (!a.allowSlideNext && (f ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (u || 0) !== o) return !1
            }
            let b;
            if (o !== (p || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = o > u ? "next" : o < u ? "prev" : "reset", f && -w === a.translate || !f && w === a.translate) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(r, b), a.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const e = a.isHorizontal(),
                r = f ? w : -w;
              if (0 === t) {
                const t = a.virtual && a.params.virtual.enabled;
                t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  h[e ? "scrollLeft" : "scrollTop"] = r
                }))) : h[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                  a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                }))
              } else {
                if (!a.support.smoothScroll) return (0, n.r)({
                  swiper: a,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                h.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(r, b), 0 === t ? a.transitionEnd(r, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, b))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            const n = i.grid && i.params.grid && i.params.grid.rows > 1;
            let a = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * i.params.grid.rows;
                  e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = i.getSlideIndexByData(a);
                const t = n ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let s = i.params.slidesPerView;
                "auto" === s ? s = i.slidesPerViewDynamic() : (s = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && s % 2 == 0 && (s += 1));
                let o = t - e < s;
                if (r && (o = o || e < Math.ceil(s / 2)), o) {
                  const s = r ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: s,
                    slideTo: !0,
                    activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === s ? i.realIndex : void 0
                  })
                }
                if (n) {
                  const e = a * i.params.grid.rows;
                  a = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else a = i.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              i.slideTo(a, t, r, s)
            })), i
          },
          slideNext: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              {
                enabled: i,
                params: n,
                animating: a
              } = s;
            if (!i || s.destroyed) return s;
            let o = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            const l = s.activeIndex < n.slidesPerGroupSkip ? 1 : o,
              d = s.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (s.loopFix({
                  direction: "next"
                }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                s.slideTo(s.activeIndex + l, e, t, r)
              })), !0
            }
            return n.rewind && s.isEnd ? s.slideTo(0, e, t, r) : s.slideTo(s.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              {
                params: i,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = s;
            if (!l || s.destroyed) return s;
            const c = s.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              s.loopFix({
                direction: "prev"
              }), s._clientLeft = s.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(o ? s.translate : -s.translate),
              f = n.map((e => p(e)));
            let h = n[f.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
              let e;
              n.forEach(((t, r) => {
                u >= t && (e = r)
              })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = a.indexOf(h), m < 0 && (m = s.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && s.isBeginning) {
              const i = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
              return s.slideTo(i, e, t, r)
            }
            return i.loop && 0 === s.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              s.slideTo(m, e, t, r)
            })), !0) : s.slideTo(m, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this;
            if (!s.destroyed) return s.slideTo(s.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            const i = this;
            if (i.destroyed) return;
            let n = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, n),
              o = a + Math.floor((n - a) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * s && (n += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * s && (n -= i.params.slidesPerGroup)
            }
            return n = Math.max(n, 0), n = Math.min(n, i.slidesGrid.length - 1), i.slideTo(n, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, a = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a) : a > e.slides.length - s ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        w = {
          loopCreate: function(e) {
            const t = this,
              {
                params: r,
                slidesEl: s
              } = t;
            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
            const i = () => {
                (0, n.e)(s, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              a = t.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (a ? r.grid.rows : 1),
              l = t.slides.length % o != 0,
              d = a && t.slides.length % r.grid.rows != 0,
              c = e => {
                for (let s = 0; s < e; s += 1) {
                  const e = t.isElement ? (0, n.c)("swiper-slide", [r.slideBlankClass]) : (0, n.c)("div", [r.slideClass, r.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            l ? (r.loopAddBlankSlides ? (c(o - t.slides.length % o), t.recalcSlides(), t.updateSlides()) : (0, n.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : d ? (r.loopAddBlankSlides ? (c(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, n.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), t.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: s,
              setTranslate: i,
              activeSlideIndex: a,
              byController: o,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: p,
              allowSlideNext: u,
              slidesEl: f,
              params: h
            } = d, {
              centeredSlides: m
            } = h;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && h.virtual.enabled) return r && (h.centeredSlides || 0 !== d.snapIndex ? h.centeredSlides && d.snapIndex < h.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
            let v = h.slidesPerView;
            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(h.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
            const g = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
            let w = g;
            w % g != 0 && (w += g - w % g), w += h.loopAdditionalSlides, d.loopedSlides = w;
            const b = d.grid && h.grid && h.grid.rows > 1;
            c.length < v + w ? (0, n.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === h.grid.fill && (0, n.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              T = [];
            let y = d.activeIndex;
            void 0 === a ? a = d.getSlideIndex(c.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : y = a;
            const E = "next" === s || !s,
              x = "prev" === s || !s;
            let C = 0,
              P = 0;
            const M = b ? Math.ceil(c.length / h.grid.rows) : c.length,
              _ = (b ? c[a].column : a) + (m && void 0 === i ? -v / 2 + .5 : 0);
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
                b ? c.forEach(((e, r) => {
                  e.column === t && T.push(r)
                })) : T.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                d.__preventObserver__ = !1
              })), x && S.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), E && T.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), d.recalcSlides(), "auto" === h.slidesPerView ? d.updateSlides() : b && (S.length > 0 && x || T.length > 0 && E) && d.slides.forEach(((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              })), h.watchSlidesProgress && d.updateSlidesOffset(), r)
              if (S.length > 0 && x) {
                if (void 0 === t) {
                  const e = d.slidesGrid[y],
                    t = d.slidesGrid[y + C] - e;
                  l ? d.setTranslate(d.translate - t) : (d.slideTo(y + C, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = b ? S.length / h.grid.rows : S.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (T.length > 0 && E)
              if (void 0 === t) {
                const e = d.slidesGrid[y],
                  t = d.slidesGrid[y - P] - e;
                l ? d.setTranslate(d.translate - t) : (d.slideTo(y - P, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? T.length / h.grid.rows : T.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: s,
                setTranslate: i,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && r
                })
              })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === h.slidesPerView && r
              })
            }
            d.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const s = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              s[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), s.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function b(e, t, r) {
        const s = (0, i.a)(),
          {
            params: n
          } = e,
          a = n.edgeSwipeDetection,
          o = n.edgeSwipeThreshold;
        return !a || !(r <= o || r >= s.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function S(e) {
        const t = this,
          r = (0, i.g)();
        let s = e;
        s.originalEvent && (s = s.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === s.type) {
          if (null !== a.pointerId && a.pointerId !== s.pointerId) return;
          a.pointerId = s.pointerId
        } else "touchstart" === s.type && 1 === s.targetTouches.length && (a.touchId = s.targetTouches[0].identifier);
        if ("touchstart" === s.type) return void b(t, s, s.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === s.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = s.target;
        if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in s && 3 === s.which) return;
        if ("button" in s && s.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!o.noSwipingClass && "" !== o.noSwipingClass,
          u = s.composedPath ? s.composedPath() : s.path;
        p && s.target && s.target.shadowRoot && u && (c = u[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          h = !(!s.target || !s.target.shadowRoot);
        if (o.noSwiping && (h ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, i.g)() || r === (0, i.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const s = r.closest(e);
                return s || r.getRootNode ? s || t(r.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = s.pageX, l.currentY = s.pageY;
        const m = l.currentX,
          v = l.currentY;
        if (!b(t, s, m)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = m, l.startY = v, a.touchStartTime = (0, n.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
        let g = !0;
        c.matches(a.focusableElements) && (g = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), r.activeElement && r.activeElement.matches(a.focusableElements) && r.activeElement !== c && r.activeElement.blur();
        const w = g && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !w || c.isContentEditable || s.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", s)
      }

      function T(e) {
        const t = (0, i.g)(),
          r = this,
          s = r.touchEventsData,
          {
            params: a,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = r;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== s.touchId) return;
          if (p.pointerId !== s.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].filter((e => e.identifier === s.touchId))[0], !c || c.identifier !== s.touchId) return
        } else c = p;
        if (!s.isTouched) return void(s.startMoving && s.isScrolling && r.emit("touchMoveOpposite", p));
        const u = c.pageX,
          f = c.pageY;
        if (p.preventedByNestedSwiper) return o.startX = u, void(o.startY = f);
        if (!r.allowTouchMove) return p.target.matches(s.focusableElements) || (r.allowClick = !1), void(s.isTouched && (Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), s.touchStartTime = (0, n.d)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (r.isVertical()) {
            if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
          } else if (u < o.startX && r.translate <= r.maxTranslate() || u > o.startX && r.translate >= r.minTranslate()) return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(s.focusableElements)) return s.isMoved = !0, void(r.allowClick = !1);
        s.allowTouchCallbacks && r.emit("touchMove", p), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = f;
        const h = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(h ** 2 + m ** 2) < r.params.threshold) return;
        if (void 0 === s.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? s.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, s.isScrolling = r.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (s.isScrolling && r.emit("touchMoveOpposite", p), void 0 === s.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
        if (!s.startMoving) return;
        r.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let v = r.isHorizontal() ? h : m,
          g = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), o.diff = v, v *= a.touchRatio, l && (v = -v, g = -g);
        const w = r.touchesDirection;
        r.swipeDirection = v > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const b = r.params.loop && !a.cssMode,
          S = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!s.isMoved) {
          if (b && S && r.loopFix({
              direction: r.swipeDirection
            }), s.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(e)
          }
          s.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), s.isMoved && s.allowThresholdMove && w !== r.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: s.currentTranslate
        }), s.loopSwapReset = !0, void(s.startTranslate = s.currentTranslate);
        r.emit("sliderMove", p), s.isMoved = !0, s.currentTranslate = v + s.startTranslate;
        let T = !0,
          y = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (y = 0), v > 0 ? (b && S && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), s.currentTranslate > r.minTranslate() && (T = !1, a.resistance && (s.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + s.startTranslate + v) ** y))) : v < 0 && (b && S && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === a.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), s.currentTranslate < r.maxTranslate() && (T = !1, a.resistance && (s.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - s.startTranslate - v) ** y))), T && (p.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), r.allowSlidePrev || r.allowSlideNext || (s.currentTranslate = s.startTranslate), a.threshold > 0) {
          if (!(Math.abs(v) > a.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove) return s.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, s.currentTranslate = s.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(s.currentTranslate), r.setTranslate(s.currentTranslate))
      }

      function y(e) {
        const t = this,
          r = t.touchEventsData;
        let s, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (s = [...i.changedTouches].filter((e => e.identifier === r.touchId))[0], !s || s.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          s = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        a.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, n.d)(),
          u = p - r.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), u < 300 && p - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = (0, n.d)(), (0, n.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let f;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = a.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const h = f >= -t.maxTranslate() && !t.params.loop;
        let m = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (h || f >= d[e] && f < d[e + t]) && (m = e, v = d[e + t] - d[e]) : (h || f >= d[e]) && (m = e, v = d[d.length - 1] - d[d.length - 2])
        }
        let g = null,
          w = null;
        a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const b = (f - d[m]) / v,
          S = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (u > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(m + S) : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(m))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + S), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : m)) : i.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m)
        }
      }

      function E() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: s,
          allowSlidePrev: i,
          snapGrid: n
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = s, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function x(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function C() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: s
          } = e;
        if (!s) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
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
          const r = (0, i.g)(),
            {
              params: s,
              el: n,
              wrapperEl: a,
              device: o
            } = e,
            l = !!s.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), n[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), n[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (s.preventClicks || s.preventClicksPropagation) && n[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0) : e[c]("observerUpdate", E, !0), n[d]("load", e.onLoad, {
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

      function I(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const s = Object.keys(r)[0],
            i = r[s];
          "object" == typeof i && null !== i ? (!0 === e[s] && (e[s] = {
            enabled: !0
          }), "navigation" === s && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), s in e && "enabled" in i ? ("object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
            enabled: !1
          }), (0, n.u)(t, r)) : (0, n.u)(t, r)) : (0, n.u)(t, r)
        }
      }
      const L = {
          eventsEmitter: p,
          update: m,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: s,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return r ? -s : s;
              if (t.cssMode) return s;
              let a = (0, n.i)(i, e);
              return a += this.cssOverflowAdjustment(), r && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: s,
                  params: i,
                  wrapperEl: n,
                  progress: a
                } = r;
              let o, l = 0,
                d = 0;
              r.isHorizontal() ? l = s ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? n[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, s, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === s && (s = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: l
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let p;
              if (p = s && e > d ? d : s && e < c ? c : e, a.updateProgress(p), o.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!a.support.smoothScroll) return (0, n.r)({
                    swiper: a,
                    targetPosition: -p,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(p), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: s
                } = r;
              s.cssMode || (s.autoHeight && r.updateAutoHeight(), v({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: s
                } = r;
              r.animating = !1, s.cssMode || (r.setTransition(0), v({
                swiper: r,
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
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
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
              e.onTouchStart = S.bind(e), e.onTouchMove = T.bind(e), e.onTouchEnd = y.bind(e), e.onDocumentTouchStart = M.bind(e), t.cssMode && (e.onScroll = C.bind(e)), e.onClick = x.bind(e), e.onLoad = P.bind(e), _(e, "on")
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
                  initialized: r,
                  params: s,
                  el: i
                } = e,
                a = s.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const l = (o in a ? a[o] : void 0) || e.originalParams,
                d = k(e, s),
                c = k(e, l),
                p = s.enabled;
              d && !c ? (i.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (i.classList.add(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && i.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === l[t]) return;
                const r = s[t] && s[t].enabled,
                  i = l[t] && l[t].enabled;
                r && !i && e[t].disable(), !r && i && e[t].enable()
              }));
              const u = l.direction && l.direction !== s.direction,
                f = s.loop && (l.slidesPerView !== s.slidesPerView || u),
                h = s.loop;
              u && r && e.changeDirection(), (0, n.u)(e.params, l);
              const m = e.params.enabled,
                v = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), r && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && v ? (e.loopCreate(t), e.updateSlides()) : h && !v && e.loopDestroy()), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let s = !1;
              const n = (0, i.a)(),
                a = "window" === t ? n.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
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
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: i,
                  value: a
                } = o[e];
                "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = i) : a <= r.clientWidth && (s = i)
              }
              return s || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: s
                } = r;
              if (s) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: s,
                  el: i,
                  device: n
                } = e,
                a = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((s => {
                      e[s] && r.push(t + s)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: s
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: n.android
                }, {
                  ios: n.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...a), i.classList.add(...t), e.emitContainerClasses()
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
          for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
          1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = (0, n.u)({}, t), e && !t.el && (t.el = e);
          const o = (0, i.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach((r => {
              const s = (0, n.u)({}, t, {
                el: r
              });
              e.push(new z(s))
            })), e
          }
          const p = this;
          p.__swiper__ = !0, p.support = d(), p.device = c({
            userAgent: t.userAgent
          }), p.browser = (l || (l = function() {
            const e = (0, i.a)(),
              t = c();
            let r = !1;

            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (s()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                r = e < 16 || 16 === e && s < 2
              }
            }
            const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              a = s();
            return {
              isSafari: r || a,
              needPerspectiveFix: r,
              need3dFix: a || n && t.ios,
              isWebView: n
            }
          }()), l), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
          const u = {};
          p.modules.forEach((e => {
            e({
              params: t,
              swiper: p,
              extendParams: I(t, u),
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
            params: r
          } = this, s = (0, n.e)(t, `.${r.slideClass}, swiper-slide`), i = (0, n.g)(s[0]);
          return (0, n.g)(e) - i
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
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = r.minTranslate(),
            i = (r.maxTranslate() - s) * e + s;
          r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
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
          e.slides.forEach((r => {
            const s = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: s
            }), e.emit("_slideClass", r, s)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: s,
            slidesGrid: i,
            slidesSizesGrid: n,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = s[o] ? Math.ceil(s[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < s.length; r += 1) s[r] && !e && (t += Math.ceil(s[r].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) s[r] && !e && (t += s[r].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < s.length; e += 1)(t ? i[e] + n[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && u(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) s(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || s()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            s = r.params.direction;
          return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${s}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(s()) : (0, n.e)(r, s())[0];
          return !i && t.params.createElements && (i = (0, n.c)("div", t.params.wrapperClass), r.append(i), (0, n.e)(r, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: i,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, n.o)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, n.o)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, n.o)(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? u(t, e) : e.addEventListener("load", (e => {
              u(t, e.target)
            }))
          })), h(t), t.initialized = !0, h(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: s,
              el: i,
              wrapperEl: a,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), s.loop && r.loopDestroy(), t && (r.removeClasses(), i.removeAttribute("style"), a.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el.swiper = null, (0, n.v)(r)), r.destroyed = !0), null
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
      Object.keys(L).forEach((e => {
        Object.keys(L[e]).forEach((t => {
          z.prototype[t] = L[e][t]
        }))
      })), z.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: s
        } = e;
        const n = (0, i.a)();
        let a = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && s("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
            o = n.requestAnimationFrame((() => {
              const {
                width: r,
                height: s
              } = t;
              let i = r,
                n = s;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: s,
                  target: a
                } = e;
                a && a !== t.el || (i = s ? s.width : (r[0] || r).inlineSize, n = s ? s.height : (r[0] || r).blockSize)
              })), i === r && n === s || l()
            }))
          })), a.observe(t.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", d))
        })), r("destroy", (() => {
          o && n.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: s,
          emit: a
        } = e;
        const o = [],
          l = (0, i.a)(),
          d = function(e, r) {
            void 0 === r && (r = {});
            const s = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const r = function() {
                a("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            s.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(s)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), s("init", (() => {
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
        })), s("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const D = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function G(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function N(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : G(t[r]) && G(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : N(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function V(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function R(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function j(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function B(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function F(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function $() {
        return $ = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
          }
          return e
        }, $.apply(this, arguments)
      }

      function H(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function W(e) {
        const t = [];
        return s.Children.toArray(e).forEach((e => {
          H(e) ? t.push(e) : e.props && e.props.children && W(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function q(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return s.Children.toArray(e).forEach((e => {
          if (H(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const s = W(e.props.children);
            s.length > 0 ? s.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function Y(e, t) {
        return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
      }
      const X = (0, s.createContext)(null),
        U = (0, s.createContext)(null),
        K = (0, s.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, s.useState)("swiper"), [u, f] = (0, s.useState)(null), [h, m] = (0, s.useState)(!1), v = (0, s.useRef)(!1), g = (0, s.useRef)(null), w = (0, s.useRef)(null), b = (0, s.useRef)(null), S = (0, s.useRef)(null), T = (0, s.useRef)(null), y = (0, s.useRef)(null), E = (0, s.useRef)(null), x = (0, s.useRef)(null), {
            params: C,
            passedParams: P,
            rest: M,
            events: _
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              s = {},
              i = {};
            N(r, O), r._emitClasses = !0, r.init = !1;
            const n = {},
              a = D.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? G(e[o]) ? (r[o] = {}, i[o] = {}, N(r[o], e[o]), N(i[o], e[o])) : (r[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? s[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: i,
              rest: n,
              events: s
            }
          }(l), {
            slides: k,
            slots: I
          } = q(a), L = () => {
            m(!h)
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
              N(w.current.params.virtual, e), N(w.current.originalParams.virtual, e)
            }
          };
          return g.current || A(), w.current && w.current.on("_beforeBreakpoint", L), (0, s.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", L)
          })), (0, s.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), Y((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && A(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: s,
                  prevEl: i,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                V(t) && s && i && (o.params.navigation.nextEl = s, o.originalParams.navigation.nextEl = s, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), R(t) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), j(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(r)
              }({
                el: g.current,
                nextEl: T.current,
                prevEl: y.current,
                paginationEl: E.current,
                scrollbarEl: x.current,
                swiper: w.current
              }, C), o && !w.current.destroyed && o(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), Y((() => {
            !d && _ && w.current && Object.keys(_).forEach((e => {
              w.current.on(e, _[e])
            }));
            const e = function(e, t, r, s, i) {
              const n = [];
              if (!t) return n;
              const a = e => {
                n.indexOf(e) < 0 && n.push(e)
              };
              if (r && s) {
                const e = s.map(i),
                  t = r.map(i);
                e.join("") !== t.join("") && a("children"), s.length !== r.length && a("children")
              }
              return D.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (G(e[r]) && G(t[r])) {
                    const s = Object.keys(e[r]),
                      i = Object.keys(t[r]);
                    s.length !== i.length ? a(r) : (s.forEach((s => {
                      e[r][s] !== t[r][s] && a(r)
                    })), i.forEach((s => {
                      e[r][s] !== t[r][s] && a(r)
                    })))
                  } else e[r] !== t[r] && a(r)
              })), n
            }(P, b.current, k, S.current, (e => e.key));
            return b.current = P, S.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: s,
                changedParams: i,
                nextEl: n,
                prevEl: a,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: f,
                  virtual: h,
                  thumbs: m
                } = t;
              let v, g, w, b, S, T, y, E;
              i.includes("thumbs") && s.thumbs && s.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), i.includes("controller") && s.controller && s.controller.control && c.controller && !c.controller.control && (g = !0), i.includes("pagination") && s.pagination && (s.pagination.el || l) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), i.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && s.navigation && (s.navigation.prevEl || a) && (s.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !s.loop ? T = !0 : !c.loop && s.loop ? y = !0 : E = !0), d.forEach((e => {
                if (G(c[e]) && G(s[e])) Object.assign(c[e], s[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in s[e]) || s[e].enabled || x(e);
                else {
                  const t = s[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = s[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && r && h && c.virtual.enabled ? (h.slides = r, h.update(!0)) : i.includes("virtual") && h && c.virtual.enabled && (r && (h.slides = r), h.update(!0)), i.includes("children") && r && c.loop && (E = !0), v && m.init() && m.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), p.init(), p.render(), p.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = t.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), i.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev), i.includes("direction") && t.changeDirection(s.direction, !1), (T || E) && t.loopDestroy(), (y || E) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: k,
              passedParams: P,
              changedParams: e,
              nextEl: T.current,
              prevEl: y.current,
              scrollbarEl: x.current,
              paginationEl: E.current
            }), () => {
              _ && w.current && Object.keys(_).forEach((e => {
                w.current.off(e, _[e])
              }))
            }
          })), Y((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), s.createElement(i, $({
            ref: g,
            className: B(`${c}${r?` ${r}`:""}`)
          }, M), s.createElement(U.Provider, {
            value: w.current
          }, I["container-start"], s.createElement(n, {
            className: F(C.wrapperClass)
          }, I["wrapper-start"], C.virtual ? function(e, t, r) {
            if (!r) return null;
            const i = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              n = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: a,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[i(e)]);
            return c.map(((t, r) => s.cloneElement(t, {
              swiper: e,
              style: n,
              key: `slide-${r}`
            })))
          }(w.current, k, u) : k.map(((e, t) => s.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), I["wrapper-end"]), V(C) && s.createElement(s.Fragment, null, s.createElement("div", {
            ref: y,
            className: "swiper-button-prev"
          }), s.createElement("div", {
            ref: T,
            className: "swiper-button-next"
          })), j(C) && s.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), R(C) && s.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), I["container-end"]))
        }));
      K.displayName = "Swiper";
      const Z = (0, s.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: i,
          className: n = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, s.useRef)(null),
          [f, h] = (0, s.useState)("swiper-slide"),
          [m, v] = (0, s.useState)(!1);

        function g(e, t, r) {
          t === u.current && h(r)
        }
        Y((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && h("swiper-slide")
          }
        })), Y((() => {
          a && u.current && !a.destroyed && h(a.getSlideClasses(u.current))
        }), [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(w) : i;
        return s.createElement(r, $({
          ref: u,
          className: B(`${f}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), o && s.createElement(X.Provider, {
          value: w
        }, s.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && s.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && s.createElement(X.Provider, {
          value: w
        }, b(), l && !m && s.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Z.displayName = "SwiperSlide"
    }
  }
]);