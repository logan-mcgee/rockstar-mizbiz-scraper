! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5d7f8350-40d3-47c1-888f-0900f590ec82", e._sentryDebugIdIdentifier = "sentry-dbid-5d7f8350-40d3-47c1-888f-0900f590ec82")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [42], {
    4042: (e, t, n) => {
      n.r(t), n.d(t, {
        useBoolean: () => r,
        useClickAnyWhere: () => s,
        useCopyToClipboard: () => u,
        useCountdown: () => i,
        useCounter: () => c,
        useDarkMode: () => a,
        useDebounce: () => l,
        useDocumentTitle: () => d,
        useEffectOnce: () => f,
        useElementSize: () => g,
        useEventCallback: () => w,
        useEventListener: () => v,
        useFetch: () => y,
        useHover: () => h,
        useImageOnLoad: () => p,
        useIntersectionObserver: () => b,
        useInterval: () => m,
        useIsClient: () => k,
        useIsFirstRender: () => S,
        useIsMounted: () => E,
        useIsomorphicLayoutEffect: () => C,
        useLocalStorage: () => M,
        useLockedBody: () => L,
        useMap: () => I,
        useMediaQuery: () => _,
        useOnClickOutside: () => T,
        useReadLocalStorage: () => O,
        useScreen: () => R,
        useScript: () => x,
        useSessionStorage: () => N,
        useSsr: () => $,
        useStep: () => P,
        useTernaryDarkMode: () => W,
        useTimeout: () => z,
        useToggle: () => A,
        useUpdateEffect: () => F,
        useWindowSize: () => j
      });
      var o = n(1403);
      const r = function(e) {
          const [t, n] = (0, o.useState)(!!e), r = (0, o.useCallback)((() => n(!0)), []), s = (0, o.useCallback)((() => n(!1)), []), u = (0, o.useCallback)((() => n((e => !e))), []);
          return {
            value: t,
            setValue: n,
            setTrue: r,
            setFalse: s,
            toggle: u
          }
        },
        s = function(e) {
          v("click", (t => {
            e(t)
          }))
        };
      const u = function() {
          const [e, t] = (0, o.useState)(null);
          return [e, e => {
            return n = this, o = void 0, s = function*() {
              if (!(null === navigator || void 0 === navigator ? void 0 : navigator.clipboard)) return console.warn("Clipboard not supported"), !1;
              try {
                return yield navigator.clipboard.writeText(e), t(e), !0
              } catch (e) {
                return console.warn("Copy failed", e), t(null), !1
              }
            }, new((r = void 0) || (r = Promise))((function(e, t) {
              function u(e) {
                try {
                  c(s.next(e))
                } catch (e) {
                  t(e)
                }
              }

              function i(e) {
                try {
                  c(s.throw(e))
                } catch (e) {
                  t(e)
                }
              }

              function c(t) {
                var n;
                t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function(e) {
                  e(n)
                }))).then(u, i)
              }
              c((s = s.apply(n, o || [])).next())
            }));
            var n, o, r, s
          }]
        },
        i = function(e) {
          let t, n, s, u, i = !1;
          "seconds" in e ? (console.warn("[useCountdown:DEPRECATED] new interface is already available (see https://usehooks-ts.com/react-hook/use-countdown), the old version will retire on usehooks-ts@3."), i = !0, t = e.seconds, n = e.interval, s = e.isIncrement) : ({
            countStart: t,
            intervalMs: n,
            isIncrement: s,
            countStop: u
          } = e), n = null != n ? n : 1e3, s = null != s && s, u = null != u ? u : 0;
          const {
            count: a,
            increment: l,
            decrement: d,
            reset: f
          } = c(t), {
            value: g,
            setTrue: w,
            setFalse: v
          } = r(!1), y = () => {
            v(), f()
          }, h = (0, o.useCallback)((() => {
            a !== u ? s ? l() : d() : v()
          }), [a, u, d, l, s, v]);
          return m(h, g ? n : null), i ? [a, {
            start: w,
            stop: v,
            reset: y
          }] : [a, {
            startCountdown: w,
            stopCountdown: v,
            resetCountdown: y
          }]
        },
        c = function(e) {
          const [t, n] = (0, o.useState)(e || 0);
          return {
            count: t,
            increment: () => n((e => e + 1)),
            decrement: () => n((e => e - 1)),
            reset: () => n(e || 0),
            setCount: n
          }
        },
        a = function(e) {
          var t;
          const n = _("(prefers-color-scheme: dark)"),
            [o, r] = M("usehooks-ts-dark-mode", null !== (t = null != e ? e : n) && void 0 !== t && t);
          return F((() => {
            r(n)
          }), [n]), {
            isDarkMode: o,
            toggle: () => r((e => !e)),
            enable: () => r(!0),
            disable: () => r(!1)
          }
        },
        l = function(e, t) {
          const [n, r] = (0, o.useState)(e);
          return (0, o.useEffect)((() => {
            const n = setTimeout((() => r(e)), t || 500);
            return () => {
              clearTimeout(n)
            }
          }), [e, t]), n
        },
        d = function(e) {
          C((() => {
            window.document.title = e
          }), [e])
        },
        f = function(e) {
          (0, o.useEffect)(e, [])
        },
        g = function() {
          const [e, t] = (0, o.useState)(null), [n, r] = (0, o.useState)({
            width: 0,
            height: 0
          }), s = (0, o.useCallback)((() => {
            r({
              width: (null == e ? void 0 : e.offsetWidth) || 0,
              height: (null == e ? void 0 : e.offsetHeight) || 0
            })
          }), [null == e ? void 0 : e.offsetHeight, null == e ? void 0 : e.offsetWidth]);
          return v("resize", s), C((() => {
            s()
          }), [null == e ? void 0 : e.offsetHeight, null == e ? void 0 : e.offsetWidth]), [t, n]
        };

      function w(e) {
        const t = (0, o.useRef)((() => {
          throw new Error("Cannot call an event handler while rendering.")
        }));
        return C((() => {
          t.current = e
        }), [e]), (0, o.useCallback)((function() {
          return t.current(...arguments)
        }), [t])
      }
      const v = function(e, t, n, r) {
        const s = (0, o.useRef)(t);
        C((() => {
          s.current = t
        }), [t]), (0, o.useEffect)((() => {
          var t;
          const o = null !== (t = null == n ? void 0 : n.current) && void 0 !== t ? t : window;
          if (!o || !o.addEventListener) return;
          const u = e => s.current(e);
          return o.addEventListener(e, u, r), () => {
            o.removeEventListener(e, u, r)
          }
        }), [e, n, r])
      };
      const y = function(e, t) {
          const n = (0, o.useRef)({}),
            r = (0, o.useRef)(!1),
            s = {
              error: void 0,
              data: void 0
            },
            [u, i] = (0, o.useReducer)(((e, t) => {
              switch (t.type) {
                case "loading":
                  return Object.assign({}, s);
                case "fetched":
                  return Object.assign(Object.assign({}, s), {
                    data: t.payload
                  });
                case "error":
                  return Object.assign(Object.assign({}, s), {
                    error: t.payload
                  });
                default:
                  return e
              }
            }), s);
          return (0, o.useEffect)((() => {
            if (e) return r.current = !1, (() => {
              var o, s, u, c;
              o = this, s = void 0, c = function*() {
                if (i({
                    type: "loading"
                  }), n.current[e]) i({
                  type: "fetched",
                  payload: n.current[e]
                });
                else try {
                  const o = yield fetch(e, t);
                  if (!o.ok) throw new Error(o.statusText);
                  const s = yield o.json();
                  if (n.current[e] = s, r.current) return;
                  i({
                    type: "fetched",
                    payload: s
                  })
                } catch (e) {
                  if (r.current) return;
                  i({
                    type: "error",
                    payload: e
                  })
                }
              }, new((u = void 0) || (u = Promise))((function(e, t) {
                function n(e) {
                  try {
                    i(c.next(e))
                  } catch (e) {
                    t(e)
                  }
                }

                function r(e) {
                  try {
                    i(c.throw(e))
                  } catch (e) {
                    t(e)
                  }
                }

                function i(t) {
                  var o;
                  t.done ? e(t.value) : (o = t.value, o instanceof u ? o : new u((function(e) {
                    e(o)
                  }))).then(n, r)
                }
                i((c = c.apply(o, s || [])).next())
              }))
            })(), () => {
              r.current = !0
            }
          }), [e]), u
        },
        h = function(e) {
          const [t, n] = (0, o.useState)(!1);
          return v("mouseenter", (() => n(!0)), e), v("mouseleave", (() => n(!1)), e), t
        },
        p = function() {
          const [e, t] = (0, o.useState)(!1);
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
        },
        b = function(e, t) {
          let {
            threshold: n = 0,
            root: r = null,
            rootMargin: s = "0%",
            freezeOnceVisible: u = !1
          } = t;
          const [i, c] = (0, o.useState)(), a = (null == i ? void 0 : i.isIntersecting) && u, l = e => {
            let [t] = e;
            c(t)
          };
          return (0, o.useEffect)((() => {
            const t = null == e ? void 0 : e.current;
            if (!window.IntersectionObserver || a || !t) return;
            const o = new IntersectionObserver(l, {
              threshold: n,
              root: r,
              rootMargin: s
            });
            return o.observe(t), () => o.disconnect()
          }), [null == e ? void 0 : e.current, JSON.stringify(n), r, s, a]), i
        },
        m = function(e, t) {
          const n = (0, o.useRef)(e);
          C((() => {
            n.current = e
          }), [e]), (0, o.useEffect)((() => {
            if (!t && 0 !== t) return;
            const e = setInterval((() => n.current()), t);
            return () => clearInterval(e)
          }), [t])
        },
        k = function() {
          const [e, t] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            t(!0)
          }), []), e
        },
        S = function() {
          const e = (0, o.useRef)(!0);
          return e.current ? (e.current = !1, !0) : e.current
        },
        E = function() {
          const e = (0, o.useRef)(!1);
          return (0, o.useEffect)((() => (e.current = !0, () => {
            e.current = !1
          })), []), (0, o.useCallback)((() => e.current), [])
        },
        C = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        M = function(e, t) {
          const n = (0, o.useCallback)((() => {
              if ("undefined" == typeof window) return t;
              try {
                const n = window.localStorage.getItem(e);
                return n ? function(e) {
                  try {
                    return "undefined" === e ? void 0 : JSON.parse(null != e ? e : "")
                  } catch (t) {
                    return void console.log("parsing error on", {
                      value: e
                    })
                  }
                }(n) : t
              } catch (n) {
                return console.warn(`Error reading localStorage key “${e}”:`, n), t
              }
            }), [t, e]),
            [r, s] = (0, o.useState)(n),
            u = w((t => {
              "undefined" == typeof window && console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);
              try {
                const n = t instanceof Function ? t(r) : t;
                window.localStorage.setItem(e, JSON.stringify(n)), s(n), window.dispatchEvent(new Event("local-storage"))
              } catch (t) {
                console.warn(`Error setting localStorage key “${e}”:`, t)
              }
            }));
          (0, o.useEffect)((() => {
            s(n())
          }), []);
          const i = (0, o.useCallback)((t => {
            (null == t ? void 0 : t.key) && t.key !== e || s(n())
          }), [e, n]);
          return v("storage", i), v("local-storage", i), [r, u]
        },
        L = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "___gatsby";
          const [n, r] = (0, o.useState)(e);
          return C((() => {
            if (!n) return;
            const e = document.body.style.overflow,
              o = document.body.style.paddingRight;
            document.body.style.overflow = "hidden";
            const r = document.getElementById(t),
              s = r ? r.offsetWidth - r.scrollWidth : 0;
            return s && (document.body.style.paddingRight = `${s}px`), () => {
              document.body.style.overflow = e, s && (document.body.style.paddingRight = o)
            }
          }), [n]), (0, o.useEffect)((() => {
            n !== e && r(e)
          }), [e]), [n, r]
        },
        I = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
          const [t, n] = (0, o.useState)(new Map(e));
          return [t, {
            set: (0, o.useCallback)(((e, t) => {
              n((n => {
                const o = new Map(n);
                return o.set(e, t), o
              }))
            }), []),
            setAll: (0, o.useCallback)((e => {
              n((() => new Map(e)))
            }), []),
            remove: (0, o.useCallback)((e => {
              n((t => {
                const n = new Map(t);
                return n.delete(e), n
              }))
            }), []),
            reset: (0, o.useCallback)((() => {
              n((() => new Map))
            }), [])
          }]
        },
        _ = function(e) {
          const t = e => "undefined" != typeof window && window.matchMedia(e).matches,
            [n, r] = (0, o.useState)(t(e));

          function s() {
            r(t(e))
          }
          return (0, o.useEffect)((() => {
            const t = window.matchMedia(e);
            return s(), t.addListener ? t.addListener(s) : t.addEventListener("change", s), () => {
              t.removeListener ? t.removeListener(s) : t.removeEventListener("change", s)
            }
          }), [e]), n
        },
        T = function(e, t) {
          v(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "mousedown", (n => {
            const o = null == e ? void 0 : e.current;
            o && !o.contains(n.target) && t(n)
          }))
        },
        O = function(e) {
          const t = (0, o.useCallback)((() => {
              if ("undefined" == typeof window) return null;
              try {
                const t = window.localStorage.getItem(e);
                return t ? JSON.parse(t) : null
              } catch (t) {
                return console.warn(`Error reading localStorage key “${e}”:`, t), null
              }
            }), [e]),
            [n, r] = (0, o.useState)(t);
          (0, o.useEffect)((() => {
            r(t())
          }), []);
          const s = (0, o.useCallback)((n => {
            (null == n ? void 0 : n.key) && n.key !== e || r(t())
          }), [e, t]);
          return v("storage", s), v("local-storage", s), n
        },
        R = function() {
          const e = () => {
              if ("undefined" != typeof window && window.screen) return window.screen
            },
            [t, n] = (0, o.useState)(e());

          function r() {
            n(e())
          }
          return v("resize", r), C((() => {
            r()
          }), []), t
        },
        D = {},
        x = function(e, t) {
          const [n, r] = (0, o.useState)((() => {
            var n;
            return !e || (null == t ? void 0 : t.shouldPreventLoad) ? "idle" : "undefined" == typeof window ? "loading" : null !== (n = D[e]) && void 0 !== n ? n : "loading"
          }));
          return (0, o.useEffect)((() => {
            var n, o;
            if (!e || (null == t ? void 0 : t.shouldPreventLoad)) return;
            const s = D[e];
            if ("ready" === s || "error" === s) return void r(s);
            const u = function(e) {
              const t = document.querySelector(`script[src="${e}"]`),
                n = null == t ? void 0 : t.getAttribute("data-status");
              return {
                node: t,
                status: n
              }
            }(e);
            let i = u.node;
            if (i) r(null !== (o = null !== (n = u.status) && void 0 !== n ? n : s) && void 0 !== o ? o : "loading");
            else {
              i = document.createElement("script"), i.src = e, i.async = !0, i.setAttribute("data-status", "loading"), document.body.appendChild(i);
              const t = e => {
                const t = "load" === e.type ? "ready" : "error";
                null == i || i.setAttribute("data-status", t)
              };
              i.addEventListener("load", t), i.addEventListener("error", t)
            }
            const c = t => {
              const n = "load" === t.type ? "ready" : "error";
              r(n), D[e] = n
            };
            return i.addEventListener("load", c), i.addEventListener("error", c), () => {
              i && (i.removeEventListener("load", c), i.removeEventListener("error", c)), i && (null == t ? void 0 : t.removeOnUnmount) && i.remove()
            }
          }), [e, null == t ? void 0 : t.shouldPreventLoad, null == t ? void 0 : t.removeOnUnmount]), n
        },
        N = function(e, t) {
          const n = (0, o.useCallback)((() => {
              if ("undefined" == typeof window) return t;
              try {
                const n = window.sessionStorage.getItem(e);
                return n ? function(e) {
                  try {
                    return "undefined" === e ? void 0 : JSON.parse(null != e ? e : "")
                  } catch (t) {
                    return void console.log("parsing error on", {
                      value: e
                    })
                  }
                }(n) : t
              } catch (n) {
                return console.warn(`Error reading sessionStorage key “${e}”:`, n), t
              }
            }), [t, e]),
            [r, s] = (0, o.useState)(n),
            u = w((t => {
              "undefined" == typeof window && console.warn(`Tried setting sessionStorage key “${e}” even though environment is not a client`);
              try {
                const n = t instanceof Function ? t(r) : t;
                window.sessionStorage.setItem(e, JSON.stringify(n)), s(n), window.dispatchEvent(new Event("session-storage"))
              } catch (t) {
                console.warn(`Error setting sessionStorage key “${e}”:`, t)
              }
            }));
          (0, o.useEffect)((() => {
            s(n())
          }), []);
          const i = (0, o.useCallback)((t => {
            (null == t ? void 0 : t.key) && t.key !== e || s(n())
          }), [e, n]);
          return v("storage", i), v("session-storage", i), [r, u]
        },
        $ = function() {
          const e = "undefined" != typeof window && window.document && window.document.documentElement;
          return {
            isBrowser: e,
            isServer: !e
          }
        },
        P = function(e) {
          const [t, n] = (0, o.useState)(1), r = (0, o.useMemo)((() => t + 1 <= e), [t, e]), s = (0, o.useMemo)((() => t - 1 >= 1), [t]), u = (0, o.useCallback)((o => {
            const r = o instanceof Function ? o(t) : o;
            if (!(r >= 1 && r <= e)) throw new Error("Step not valid");
            n(r)
          }), [e, t]), i = (0, o.useCallback)((() => {
            r && n((e => e + 1))
          }), [r]), c = (0, o.useCallback)((() => {
            s && n((e => e - 1))
          }), [s]), a = (0, o.useCallback)((() => {
            n(1)
          }), []);
          return [t, {
            goToNextStep: i,
            goToPrevStep: c,
            canGoToNextStep: r,
            canGoToPrevStep: s,
            setStep: u,
            reset: a
          }]
        },
        W = function() {
          const e = _("(prefers-color-scheme: dark)"),
            [t, n] = M("usehooks-ts-ternary-dark-mode", "system"),
            [r, s] = (0, o.useState)(e);
          return F((() => {
            "system" === t && s(e)
          }), [e]), (0, o.useEffect)((() => {
            switch (t) {
              case "light":
                s(!1);
                break;
              case "system":
                s(e);
                break;
              case "dark":
                s(!0)
            }
          }), [t, e]), {
            isDarkMode: r,
            ternaryDarkMode: t,
            setTernaryDarkMode: n,
            toggleTernaryDarkMode: function() {
              const e = {
                light: "system",
                system: "dark",
                dark: "light"
              };
              n((t => e[t]))
            }
          }
        },
        z = function(e, t) {
          const n = (0, o.useRef)(e);
          C((() => {
            n.current = e
          }), [e]), (0, o.useEffect)((() => {
            if (!t && 0 !== t) return;
            const e = setTimeout((() => n.current()), t);
            return () => clearTimeout(e)
          }), [t])
        },
        A = function(e) {
          const [t, n] = (0, o.useState)(!!e);
          return [t, (0, o.useCallback)((() => n((e => !e))), []), n]
        },
        F = function(e, t) {
          const n = S();
          (0, o.useEffect)((() => {
            if (!n) return e()
          }), t)
        },
        j = function() {
          const [e, t] = (0, o.useState)({
            width: 0,
            height: 0
          }), n = () => {
            t({
              width: window.innerWidth,
              height: window.innerHeight
            })
          };
          return v("resize", n), C((() => {
            n()
          }), []), e
        }
    }
  }
]);