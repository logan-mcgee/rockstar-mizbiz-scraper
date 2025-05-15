! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a45fa4da-186d-45ca-8766-2174c1237c97", e._sentryDebugIdIdentifier = "sentry-dbid-a45fa4da-186d-45ca-8766-2174c1237c97")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [2810], {
    429: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        useBoolean: () => i,
        useClickAnyWhere: () => a,
        useCopyToClipboard: () => c,
        useCountdown: () => f,
        useCounter: () => l,
        useDarkMode: () => m,
        useDebounce: () => k,
        useDebounceCallback: () => E,
        useDebounceValue: () => C,
        useDocumentTitle: () => M,
        useEffectOnce: () => z,
        useElementSize: () => R,
        useEventCallback: () => v,
        useEventListener: () => s,
        useFetch: () => T,
        useHover: () => I,
        useImageOnLoad: () => O,
        useIntersectionObserver: () => L,
        useInterval: () => d,
        useIsClient: () => W,
        useIsFirstRender: () => _,
        useIsMounted: () => x,
        useIsomorphicLayoutEffect: () => u,
        useLocalStorage: () => h,
        useLockedBody: () => D,
        useMap: () => V,
        useMediaQuery: () => w,
        useOnClickOutside: () => N,
        useReadLocalStorage: () => $,
        useResizeObserver: () => j,
        useScreen: () => J,
        useScript: () => P,
        useScrollLock: () => q,
        useSessionStorage: () => Q,
        useSsr: () => Y,
        useStep: () => X,
        useTernaryDarkMode: () => te,
        useTimeout: () => ne,
        useToggle: () => re,
        useUnmount: () => S,
        useUpdateEffect: () => oe,
        useWindowSize: () => ue
      });
      var r = n(2229),
        o = n(843);

      function i(e) {
        const [t, n] = (0, r.useState)(!!e), o = (0, r.useCallback)((() => {
          n(!0)
        }), []), i = (0, r.useCallback)((() => {
          n(!1)
        }), []), u = (0, r.useCallback)((() => {
          n((e => !e))
        }), []);
        return {
          value: t,
          setValue: n,
          setTrue: o,
          setFalse: i,
          toggle: u
        }
      }
      var u = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

      function s(e, t, n, o) {
        const i = (0, r.useRef)(t);
        u((() => {
          i.current = t
        }), [t]), (0, r.useEffect)((() => {
          const t = (null == n ? void 0 : n.current) ?? window;
          if (!t || !t.addEventListener) return;
          const r = e => {
            i.current(e)
          };
          return t.addEventListener(e, r, o), () => {
            t.removeEventListener(e, r, o)
          }
        }), [e, n, o])
      }

      function a(e) {
        s("click", (t => {
          e(t)
        }))
      }

      function c() {
        const [e, t] = (0, r.useState)(null);
        return [e, (0, r.useCallback)((async e => {
          if (!(null == navigator ? void 0 : navigator.clipboard)) return console.warn("Clipboard not supported"), !1;
          try {
            return await navigator.clipboard.writeText(e), t(e), !0
          } catch (e) {
            return console.warn("Copy failed", e), t(null), !1
          }
        }), [])]
      }

      function l(e) {
        const [t, n] = (0, r.useState)(e ?? 0);
        return {
          count: t,
          increment: () => {
            n((e => e + 1))
          },
          decrement: () => {
            n((e => e - 1))
          },
          reset: () => {
            n(e ?? 0)
          },
          setCount: n
        }
      }

      function d(e, t) {
        const n = (0, r.useRef)(e);
        u((() => {
          n.current = e
        }), [e]), (0, r.useEffect)((() => {
          if (null === t) return;
          const e = setInterval((() => {
            n.current()
          }), t);
          return () => {
            clearInterval(e)
          }
        }), [t])
      }

      function f(e) {
        let t, n, o, u, s = !1;
        "seconds" in e ? (console.warn("[useCountdown:DEPRECATED] new interface is already available (see https://usehooks-ts.com/react-hook/use-countdown), the old version will retire on usehooks-ts@3."), s = !0, t = e.seconds, n = e.interval, o = e.isIncrement) : ({
          countStart: t,
          intervalMs: n,
          isIncrement: o,
          countStop: u
        } = e), n = n ?? 1e3, o = o ?? !1, u = u ?? 0;
        const {
          count: a,
          increment: c,
          decrement: f,
          reset: v
        } = l(t), {
          value: y,
          setTrue: h,
          setFalse: g
        } = i(!1), w = () => {
          g(), v()
        };
        return d((0, r.useCallback)((() => {
          a !== u ? o ? c() : f() : g()
        }), [a, u, f, c, o, g]), y ? n : null), s ? [a, {
          start: h,
          stop: g,
          reset: w
        }] : [a, {
          startCountdown: h,
          stopCountdown: g,
          resetCountdown: w
        }]
      }

      function v(e) {
        const t = (0, r.useRef)((() => {
          throw new Error("Cannot call an event handler while rendering.")
        }));
        return u((() => {
          t.current = e
        }), [e]), (0, r.useCallback)(((...e) => t.current(...e)), [t])
      }
      var y = "undefined" == typeof window;

      function h(e, t, n = {}) {
        const {
          initializeWithValue: o = !0
        } = n, i = (0, r.useCallback)((e => n.serializer ? n.serializer(e) : JSON.stringify(e)), [n]), u = (0, r.useCallback)((e => {
          if (n.deserializer) return n.deserializer(e);
          if ("undefined" === e) return;
          const r = t instanceof Function ? t() : t;
          let o;
          try {
            o = JSON.parse(e)
          } catch (e) {
            return console.error("Error parsing JSON:", e), r
          }
          return o
        }), [n, t]), a = (0, r.useCallback)((() => {
          const n = t instanceof Function ? t() : t;
          if (y) return n;
          try {
            const t = window.localStorage.getItem(e);
            return t ? u(t) : n
          } catch (t) {
            return console.warn(`Error reading localStorage key “${e}”:`, t), n
          }
        }), [t, e, u]), [c, l] = (0, r.useState)((() => o ? a() : t instanceof Function ? t() : t)), d = v((t => {
          y && console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);
          try {
            const n = t instanceof Function ? t(a()) : t;
            window.localStorage.setItem(e, i(n)), l(n), window.dispatchEvent(new StorageEvent("local-storage", {
              key: e
            }))
          } catch (t) {
            console.warn(`Error setting localStorage key “${e}”:`, t)
          }
        }));
        (0, r.useEffect)((() => {
          l(a())
        }), [e]);
        const f = (0, r.useCallback)((t => {
          (null == t ? void 0 : t.key) && t.key !== e || l(a())
        }), [e, a]);
        return s("storage", f), s("local-storage", f), [c, d]
      }
      var g = "undefined" == typeof window;

      function w(e, t) {
        const n = "boolean" == typeof t ? t : (null == t ? void 0 : t.defaultValue) ?? !1,
          o = "boolean" == typeof t ? void 0 : (null == t ? void 0 : t.initializeWithValue) ?? void 0,
          i = e => g ? n : window.matchMedia(e).matches,
          [s, a] = (0, r.useState)((() => o ? i(e) : n));

        function c() {
          a(i(e))
        }
        return u((() => {
          const t = window.matchMedia(e);
          return c(), t.addListener ? t.addListener(c) : t.addEventListener("change", c), () => {
            t.removeListener ? t.removeListener(c) : t.removeEventListener("change", c)
          }
        }), [e]), s
      }
      var b = "(prefers-color-scheme: dark)",
        p = "usehooks-ts-dark-mode";

      function m(e, t = p) {
        (0, r.useRef)(0).current++;
        const n = "boolean" == typeof e ? e : null == e ? void 0 : e.defaultValue,
          o = "boolean" == typeof e ? t ?? p : (null == e ? void 0 : e.localStorageKey) ?? p,
          i = "boolean" == typeof e ? void 0 : (null == e ? void 0 : e.initializeWithValue) ?? void 0,
          s = w(b, {
            initializeWithValue: i,
            defaultValue: n
          }),
          [a, c] = h(o, n ?? s ?? !1, {
            initializeWithValue: i
          });
        return u((() => {
          s !== a && c(s)
        }), [s]), {
          isDarkMode: a,
          toggle: () => {
            c((e => !e))
          },
          enable: () => {
            c(!0)
          },
          disable: () => {
            c(!1)
          },
          set: e => {
            c(e)
          }
        }
      }

      function k(e, t) {
        const [n, o] = (0, r.useState)(e);
        return (0, r.useEffect)((() => {
          const n = setTimeout((() => {
            o(e)
          }), t ?? 500);
          return () => {
            clearTimeout(n)
          }
        }), [e, t]), n
      }

      function S(e) {
        const t = (0, r.useRef)(e);
        t.current = e, (0, r.useEffect)((() => () => {
          t.current()
        }), [])
      }

      function E(e, t = 500, n) {
        const i = (0, r.useRef)();
        S((() => {
          i.current && i.current.cancel()
        }));
        const u = (0, r.useMemo)((() => {
          const r = o(e, t, n),
            u = (...e) => r(...e);
          return u.cancel = () => {
            r.cancel()
          }, u.isPending = () => !!i.current, u.flush = () => r.flush(), u
        }), [e, t, n]);
        return (0, r.useEffect)((() => {
          i.current = o(e, t, n)
        }), [e, t, n]), u
      }

      function C(e, t, n) {
        const o = (null == n ? void 0 : n.equalityFn) ?? ((e, t) => e === t),
          i = e instanceof Function ? e() : e,
          [u, s] = (0, r.useState)(i),
          a = (0, r.useRef)(i),
          c = E(s, t, n);
        return o(a.current, i) || (c(i), a.current = i), [u, c]
      }

      function M(e, t = {}) {
        const {
          preserveTitleOnUnmount: n = !0
        } = t, o = (0, r.useRef)(null);
        u((() => {
          o.current = window.document.title
        }), []), u((() => {
          window.document.title = e
        }), [e]), S((() => {
          !n && o.current && (window.document.title = o.current)
        }))
      }

      function z(e) {
        (0, r.useEffect)(e, [])
      }

      function R(e = {}) {
        const {
          initializeWithValue: t = !0
        } = e, [n, o] = (0, r.useState)(null), i = (0, r.useCallback)((() => ({
          width: (null == n ? void 0 : n.offsetWidth) ?? void 0,
          height: (null == n ? void 0 : n.offsetHeight) ?? void 0
        })), [null == n ? void 0 : n.offsetHeight, null == n ? void 0 : n.offsetWidth]), [a, c] = (0, r.useState)((() => t ? i() : {
          width: void 0,
          height: void 0
        })), l = (0, r.useCallback)((() => {
          c(i())
        }), [null == n ? void 0 : n.offsetHeight, null == n ? void 0 : n.offsetWidth]);
        s("resize", l), u((() => {
          l()
        }), [null == n ? void 0 : n.offsetHeight, null == n ? void 0 : n.offsetWidth]);
        const d = [o, a];
        return d.ref = d[0], d.width = a.width, d.height = a.height, d
      }

      function T(e, t) {
        const n = (0, r.useRef)({}),
          o = (0, r.useRef)(!1),
          i = {
            error: void 0,
            data: void 0
          },
          [u, s] = (0, r.useReducer)(((e, t) => {
            switch (t.type) {
              case "loading":
                return {
                  ...i
                };
              case "fetched":
                return {
                  ...i, data: t.payload
                };
              case "error":
                return {
                  ...i, error: t.payload
                };
              default:
                return e
            }
          }), i);
        return (0, r.useEffect)((() => {
          if (e) return o.current = !1, (async () => {
            s({
              type: "loading"
            });
            const r = n.current[e];
            if (r) s({
              type: "fetched",
              payload: r
            });
            else try {
              const r = await fetch(e, t);
              if (!r.ok) throw new Error(r.statusText);
              const i = await r.json();
              if (n.current[e] = i, o.current) return;
              s({
                type: "fetched",
                payload: i
              })
            } catch (e) {
              if (o.current) return;
              s({
                type: "error",
                payload: e
              })
            }
          })(), () => {
            o.current = !0
          }
        }), [e]), u
      }

      function I(e) {
        const [t, n] = (0, r.useState)(!1);
        return s("mouseenter", (() => {
          n(!0)
        }), e), s("mouseleave", (() => {
          n(!1)
        }), e), t
      }

      function O() {
        const [e, t] = (0, r.useState)(!1);
        return {
          handleImageOnLoad: () => {
            t(!0)
          },
          css: {
            thumbnail: {
              visibility: e ? "hidden" : "visible",
              filter: "blur(8px)",
              transition: "visibility 0ms ease-out 500ms"
            },
            fullSize: {
              opacity: e ? 1 : 0,
              transition: "opacity 500ms ease-in 0ms"
            }
          }
        }
      }

      function L(e, t) {
        var n;
        const o = "current" in e,
          i = o ? t : e,
          {
            threshold: u = 0,
            root: s = null,
            rootMargin: a = "0%",
            freezeOnceVisible: c = !1,
            initialIsIntersecting: l = !1
          } = i ?? {},
          [d, f] = (0, r.useState)(null),
          v = o ? e.current : d,
          [y, h] = (0, r.useState)((() => ({
            isIntersecting: l,
            entry: void 0
          }))),
          g = (0, r.useRef)();
        g.current = null == i ? void 0 : i.onChange;
        const w = (null == (n = y.entry) ? void 0 : n.isIntersecting) && c;
        (0, r.useEffect)((() => {
          if (!v) return;
          if (!("IntersectionObserver" in window)) return;
          if (w) return;
          let e;
          const t = new IntersectionObserver((n => {
            const r = Array.isArray(t.thresholds) ? t.thresholds : [t.thresholds];
            n.forEach((t => {
              const n = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
              h({
                isIntersecting: n,
                entry: t
              }), g.current && g.current(n, t), n && c && e && (e(), e = void 0)
            }))
          }), {
            threshold: u,
            root: s,
            rootMargin: a
          });
          return t.observe(v), () => {
            t.disconnect()
          }
        }), [v, JSON.stringify(u), s, a, w, c]);
        const b = (0, r.useRef)(null);
        if ((0, r.useEffect)((() => {
            var e;
            v || !(null == (e = y.entry) ? void 0 : e.target) || c || w || b.current === y.entry.target || (b.current = y.entry.target, h({
              isIntersecting: l,
              entry: void 0
            }))
          }), [v, y.entry, c, w, l]), o) return y.entry;
        const p = [f, !!y.isIntersecting, y.entry];
        return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p
      }

      function W() {
        const [e, t] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          t(!0)
        }), []), e
      }

      function _() {
        const e = (0, r.useRef)(!0);
        return e.current ? (e.current = !1, !0) : e.current
      }

      function x() {
        const e = (0, r.useRef)(!1);
        return (0, r.useEffect)((() => (e.current = !0, () => {
          e.current = !1
        })), []), (0, r.useCallback)((() => e.current), [])
      }

      function D(e = !1, t = "___gatsby") {
        const [n, o] = (0, r.useState)(e);
        return u((() => {
          if (!n) return;
          const e = document.body.style.overflow,
            r = document.body.style.paddingRight;
          document.body.style.overflow = "hidden";
          const o = document.getElementById(t),
            i = o ? o.offsetWidth - o.scrollWidth : 0;
          return i && (document.body.style.paddingRight = `${i}px`), () => {
            document.body.style.overflow = e, i && (document.body.style.paddingRight = r)
          }
        }), [n]), (0, r.useEffect)((() => {
          n !== e && o(e)
        }), [e]), [n, o]
      }

      function V(e = new Map) {
        const [t, n] = (0, r.useState)(new Map(e));
        return [t, {
          set: (0, r.useCallback)(((e, t) => {
            n((n => {
              const r = new Map(n);
              return r.set(e, t), r
            }))
          }), []),
          setAll: (0, r.useCallback)((e => {
            n((() => new Map(e)))
          }), []),
          remove: (0, r.useCallback)((e => {
            n((t => {
              const n = new Map(t);
              return n.delete(e), n
            }))
          }), []),
          reset: (0, r.useCallback)((() => {
            n((() => new Map))
          }), [])
        }]
      }

      function N(e, t, n = "mousedown") {
        s(n, (n => {
          const r = n.target;
          r && r.isConnected && (Array.isArray(e) ? e.every((e => e.current && !e.current.contains(r))) : e.current && !e.current.contains(r)) && t(n)
        }))
      }
      var F = "undefined" == typeof window;

      function $(e, t = {}) {
        let {
          initializeWithValue: n = !0
        } = t;
        F && (n = !1);
        const o = (0, r.useCallback)((e => {
            if (t.deserializer) return t.deserializer(e);
            if ("undefined" === e) return;
            let n;
            try {
              n = JSON.parse(e)
            } catch (e) {
              return console.error("Error parsing JSON:", e), null
            }
            return n
          }), [t]),
          i = (0, r.useCallback)((() => {
            if (F) return null;
            try {
              const t = window.localStorage.getItem(e);
              return t ? o(t) : null
            } catch (t) {
              return console.warn(`Error reading localStorage key “${e}”:`, t), null
            }
          }), [e, o]),
          [u, a] = (0, r.useState)((() => {
            if (n) return i()
          }));
        (0, r.useEffect)((() => {
          a(i())
        }), [e]);
        const c = (0, r.useCallback)((t => {
          (null == t ? void 0 : t.key) && t.key !== e || a(i())
        }), [e, i]);
        return s("storage", c), s("local-storage", c), u
      }
      var A = {
        width: void 0,
        height: void 0
      };

      function j(e) {
        const {
          ref: t,
          box: n = "content-box"
        } = e, [{
          width: o,
          height: i
        }, u] = (0, r.useState)(A), s = x(), a = (0, r.useRef)({
          ...A
        }), c = (0, r.useRef)(void 0);
        return c.current = null == e ? void 0 : e.onResize, (0, r.useEffect)((() => {
          if (!(null == t ? void 0 : t.current)) return;
          if ("undefined" == typeof window || !("ResizeObserver" in window)) return;
          const e = new ResizeObserver((([e]) => {
            const t = "border-box" === n ? "borderBoxSize" : "device-pixel-content-box" === n ? "devicePixelContentBoxSize" : "contentBoxSize",
              r = G(e, t, "inlineSize"),
              o = G(e, t, "blockSize");
            if (a.current.width !== r || a.current.height !== o) {
              const e = {
                width: r,
                height: o
              };
              a.current.width = r, a.current.height = o, (null == c ? void 0 : c.current) ? c.current(e) : s() && u(e)
            }
          }));
          return e.observe(t.current, {
            box: n
          }), () => {
            e.disconnect()
          }
        }), [n, t, s]), {
          width: o,
          height: i
        }
      }

      function G(e, t, n) {
        return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : "contentBoxSize" === t ? e.contentRect["inlineSize" === n ? "width" : "height"] : void 0
      }
      var H = "undefined" == typeof window;

      function J(e = {}) {
        let {
          initializeWithValue: t = !0
        } = e;
        H && (t = !1);
        const n = () => {
            if (!H) return window.screen
          },
          [o, i] = (0, r.useState)((() => {
            if (t) return n()
          })),
          a = E(i, null == e ? void 0 : e.debounceDelay);

        function c() {
          const t = n(),
            r = (null == e ? void 0 : e.debounceDelay) ? a : i;
          if (t) {
            const {
              width: e,
              height: n,
              availHeight: o,
              availWidth: i,
              colorDepth: u,
              orientation: s,
              pixelDepth: a
            } = t;
            r({
              width: e,
              height: n,
              availHeight: o,
              availWidth: i,
              colorDepth: u,
              orientation: s,
              pixelDepth: a
            })
          }
        }
        return s("resize", c), u((() => {
          c()
        }), []), o
      }
      var B = new Map;

      function P(e, t) {
        const [n, o] = (0, r.useState)((() => !e || (null == t ? void 0 : t.shouldPreventLoad) ? "idle" : "undefined" == typeof window ? "loading" : B.get(e) ?? "loading"));
        return (0, r.useEffect)((() => {
          if (!e || (null == t ? void 0 : t.shouldPreventLoad)) return;
          const n = B.get(e);
          if ("ready" === n || "error" === n) return void o(n);
          const r = function(e) {
            const t = document.querySelector(`script[src="${e}"]`),
              n = null == t ? void 0 : t.getAttribute("data-status");
            return {
              node: t,
              status: n
            }
          }(e);
          let i = r.node;
          if (i) o(r.status ?? n ?? "loading");
          else {
            i = document.createElement("script"), i.src = e, i.async = !0, (null == t ? void 0 : t.id) && (i.id = t.id), i.setAttribute("data-status", "loading"), document.body.appendChild(i);
            const n = e => {
              const t = "load" === e.type ? "ready" : "error";
              null == i || i.setAttribute("data-status", t)
            };
            i.addEventListener("load", n), i.addEventListener("error", n)
          }
          const u = t => {
            const n = "load" === t.type ? "ready" : "error";
            o(n), B.set(e, n)
          };
          return i.addEventListener("load", u), i.addEventListener("error", u), () => {
            i && (i.removeEventListener("load", u), i.removeEventListener("error", u)), i && (null == t ? void 0 : t.removeOnUnmount) && (i.remove(), B.delete(e))
          }
        }), [e, null == t ? void 0 : t.shouldPreventLoad, null == t ? void 0 : t.removeOnUnmount, null == t ? void 0 : t.id]), n
      }
      var U = "undefined" == typeof window;

      function q(e = {}) {
        const {
          autoLock: t = !0,
          lockTarget: n,
          widthReflow: o = !0
        } = e, [i, s] = (0, r.useState)(!1), a = (0, r.useRef)(null), c = (0, r.useRef)(null), l = () => {
          if (a.current) {
            const {
              overflow: e,
              paddingRight: t
            } = a.current.style;
            if (c.current = {
                overflow: e,
                paddingRight: t
              }, o) {
              const e = a.current === document.body ? window.innerWidth : a.current.offsetWidth,
                t = parseInt(window.getComputedStyle(a.current).paddingRight, 10) || 0,
                n = e - a.current.scrollWidth;
              a.current.style.paddingRight = `${n+t}px`
            }
            a.current.style.overflow = "hidden", s(!0)
          }
        }, d = () => {
          a.current && c.current && (a.current.style.overflow = c.current.overflow, o && (a.current.style.paddingRight = c.current.paddingRight)), s(!1)
        };
        return u((() => {
          if (!U) return n && (a.current = "string" == typeof n ? document.querySelector(n) : n), a.current || (a.current = document.body), t && l(), () => {
            d()
          }
        }), [t, n, o]), {
          isLocked: i,
          lock: l,
          unlock: d
        }
      }
      var K = "undefined" == typeof window;

      function Q(e, t, n = {}) {
        const {
          initializeWithValue: o = !0
        } = n, i = (0, r.useCallback)((e => n.serializer ? n.serializer(e) : JSON.stringify(e)), [n]), u = (0, r.useCallback)((e => {
          if (n.deserializer) return n.deserializer(e);
          if ("undefined" === e) return;
          const r = t instanceof Function ? t() : t;
          let o;
          try {
            o = JSON.parse(e)
          } catch (e) {
            return console.error("Error parsing JSON:", e), r
          }
          return o
        }), [n, t]), a = (0, r.useCallback)((() => {
          const n = t instanceof Function ? t() : t;
          if (K) return n;
          try {
            const t = window.sessionStorage.getItem(e);
            return t ? u(t) : n
          } catch (t) {
            return console.warn(`Error reading sessionStorage key “${e}”:`, t), n
          }
        }), [t, e, u]), [c, l] = (0, r.useState)((() => o ? a() : t instanceof Function ? t() : t)), d = v((t => {
          K && console.warn(`Tried setting sessionStorage key “${e}” even though environment is not a client`);
          try {
            const n = t instanceof Function ? t(a()) : t;
            window.sessionStorage.setItem(e, i(n)), l(n), window.dispatchEvent(new StorageEvent("session-storage", {
              key: e
            }))
          } catch (t) {
            console.warn(`Error setting sessionStorage key “${e}”:`, t)
          }
        }));
        (0, r.useEffect)((() => {
          l(a())
        }), [e]);
        const f = (0, r.useCallback)((t => {
          (null == t ? void 0 : t.key) && t.key !== e || l(a())
        }), [e, a]);
        return s("storage", f), s("session-storage", f), [c, d]
      }

      function Y() {
        var e;
        const t = "undefined" != typeof window && !!(null == (e = null == window ? void 0 : window.document) ? void 0 : e.documentElement);
        return {
          isBrowser: t,
          isServer: !t
        }
      }

      function X(e) {
        const [t, n] = (0, r.useState)(1), o = t + 1 <= e, i = t - 1 > 0, u = (0, r.useCallback)((r => {
          const o = r instanceof Function ? r(t) : r;
          if (!(o >= 1 && o <= e)) throw new Error("Step not valid");
          n(o)
        }), [e, t]), s = (0, r.useCallback)((() => {
          o && n((e => e + 1))
        }), [o]), a = (0, r.useCallback)((() => {
          i && n((e => e - 1))
        }), [i]), c = (0, r.useCallback)((() => {
          n(1)
        }), []);
        return [t, {
          goToNextStep: s,
          goToPrevStep: a,
          canGoToNextStep: o,
          canGoToPrevStep: i,
          setStep: u,
          reset: c
        }]
      }
      var Z = "(prefers-color-scheme: dark)",
        ee = "usehooks-ts-ternary-dark-mode";

      function te(e) {
        const t = "string" == typeof e ? "system" : (null == e ? void 0 : e.defaultValue) ?? "system",
          n = "string" == typeof e ? e : (null == e ? void 0 : e.localStorageKey) ?? ee,
          r = "string" == typeof e ? void 0 : (null == e ? void 0 : e.initializeWithValue) ?? void 0,
          o = w(Z, {
            initializeWithValue: r
          }),
          [i, u] = h(n, t, {
            initializeWithValue: r
          });
        return {
          isDarkMode: "dark" === i || "system" === i && o,
          ternaryDarkMode: i,
          setTernaryDarkMode: u,
          toggleTernaryDarkMode: () => {
            const e = ["light", "system", "dark"];
            u((t => {
              const n = (e.indexOf(t) + 1) % e.length;
              return e[n]
            }))
          }
        }
      }

      function ne(e, t) {
        const n = (0, r.useRef)(e);
        u((() => {
          n.current = e
        }), [e]), (0, r.useEffect)((() => {
          if (!t && 0 !== t) return;
          const e = setTimeout((() => {
            n.current()
          }), t);
          return () => {
            clearTimeout(e)
          }
        }), [t])
      }

      function re(e) {
        const [t, n] = (0, r.useState)(!!e);
        return [t, (0, r.useCallback)((() => {
          n((e => !e))
        }), []), n]
      }

      function oe(e, t) {
        const n = _();
        (0, r.useEffect)((() => {
          if (!n) return e()
        }), t)
      }
      var ie = "undefined" == typeof window;

      function ue(e = {}) {
        let {
          initializeWithValue: t = !0
        } = e;
        ie && (t = !1);
        const [n, o] = (0, r.useState)((() => t ? {
          width: window.innerWidth,
          height: window.innerHeight
        } : {
          width: void 0,
          height: void 0
        })), i = E(o, null == e ? void 0 : e.debounceDelay);

        function a() {
          ((null == e ? void 0 : e.debounceDelay) ? i : o)({
            width: window.innerWidth,
            height: window.innerHeight
          })
        }
        return s("resize", a), u((() => {
          a()
        }), []), n
      }
    },
    843: (e, t, n) => {
      var r = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        s = parseInt,
        a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        c = "object" == typeof self && self && self.Object === Object && self,
        l = a || c || Function("return this")(),
        d = Object.prototype.toString,
        f = Math.max,
        v = Math.min,
        y = function() {
          return l.Date.now()
        };

      function h(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
      }

      function g(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
              return !!e && "object" == typeof e
            }(e) && "[object Symbol]" == d.call(e)
          }(e)) return NaN;
        if (h(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = h(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var n = i.test(e);
        return n || u.test(e) ? s(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
      }
      e.exports = function(e, t, n) {
        var r, o, i, u, s, a, c = 0,
          l = !1,
          d = !1,
          w = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var n = r,
            i = o;
          return r = o = void 0, c = t, u = e.apply(i, n)
        }

        function p(e) {
          var n = e - a;
          return void 0 === a || n >= t || n < 0 || d && e - c >= i
        }

        function m() {
          var e = y();
          if (p(e)) return k(e);
          s = setTimeout(m, function(e) {
            var n = t - (e - a);
            return d ? v(n, i - (e - c)) : n
          }(e))
        }

        function k(e) {
          return s = void 0, w && r ? b(e) : (r = o = void 0, u)
        }

        function S() {
          var e = y(),
            n = p(e);
          if (r = arguments, o = this, a = e, n) {
            if (void 0 === s) return function(e) {
              return c = e, s = setTimeout(m, t), l ? b(e) : u
            }(a);
            if (d) return s = setTimeout(m, t), b(a)
          }
          return void 0 === s && (s = setTimeout(m, t)), u
        }
        return t = g(t) || 0, h(n) && (l = !!n.leading, i = (d = "maxWait" in n) ? f(g(n.maxWait) || 0, t) : i, w = "trailing" in n ? !!n.trailing : w), S.cancel = function() {
          void 0 !== s && clearTimeout(s), c = 0, r = a = o = s = void 0
        }, S.flush = function() {
          return void 0 === s ? u : k(y())
        }, S
      }
    }
  }
]);