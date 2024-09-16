! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f8210a7-6e6d-44bf-934e-3a0d5ac0fa0e", e._sentryDebugIdIdentifier = "sentry-dbid-9f8210a7-6e6d-44bf-934e-3a0d5ac0fa0e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [324], {
    6516: (e, t, n) => {
      var r = n(1403),
        s = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var r, i = {},
          u = null,
          l = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: u,
          ref: l,
          props: i,
          _owner: a.current
        }
      }
    },
    6632: (e, t, n) => {
      e.exports = n(6516)
    },
    156: (e, t, n) => {
      n.d(t, {
        A: () => w
      });
      var r = n(4686),
        s = n(6540),
        o = n.n(s),
        a = n(4252),
        c = n.n(a),
        i = n(6088),
        u = n(5577);
      const {
        apiHost: l
      } = (0, i.A)(), d = (0, u.t)(document.documentElement.lang), f = {}, w = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: s = null,
          pingBearer: a,
          requireBearerToken: i = !0,
          useCache: u = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: w = null
          } = await (a?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let g = `${l}/${e}`;
          if (null === s || c().isEmpty(s) || (g += `?${new URLSearchParams(s)}`), !w && i) return null;
          w && (h.Authorization = `Bearer ${w}`);
          const v = {
              headers: h
            },
            m = o().all([v, t, n]),
            p = JSON.stringify({
              ...m,
              url: g
            }),
            b = await (0, r.sha256)(p);
          if (u) {
            if (f[b]?.response) return f[b].response;
            if (f[b]?.loading) return {
              error: null,
              result: null
            };
            f[b] = {
              loading: !0
            }
          }
          const E = await fetch(g, m),
            y = await E.json();
          return u && (f[b] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    6088: (e, t, n) => {
      n.d(t, {
        A: () => c
      });
      const r = window?.env?.sc,
        s = window?.env?.marketing,
        o = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: a,
            scHost: c,
            hostname: i,
            cdnBase: u,
            key: l,
            marketingAuthTLD: d
          } = e;
          const f = r?.apiHost ?? t,
            w = r?.authHost ?? n,
            h = r?.cdnBase ?? u,
            g = r?.clientId ?? o,
            v = s?.marketingAuthTLD ?? d,
            m = r?.scHost ?? c;
          return {
            apiHost: `https://${f}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: m,
            hostname: i,
            cdnBase: h,
            key: l,
            clientId: g,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${v}/auth/gateway.json`,
            logout: `https://${v}/auth/sc-auth-logout`,
            pingBearer: `https://${v}/auth/ping-bearer.json`
          }
        },
        a = [o({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), o({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        c = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return a.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || a[0]
        }
    },
    5577: (e, t, n) => {
      n.d(t, {
        t: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    3324: (e, t, n) => {
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => y.U4,
        useBrowserCapabilityDetection: () => O,
        useGetPlatformLoginUrl: () => g,
        useHasReduceMotionPreference: () => S,
        useHasSaveDataPreference: () => k,
        useLocale: () => o,
        useNewswirePost: () => E.useNewswirePost,
        usePreloadImg: () => c,
        usePrevious: () => l,
        useQueryParams: () => u,
        useRockstarEventDispatcher: () => p,
        useRockstarEventSubscriber: () => b,
        useRockstarLocalState: () => d,
        useScApi: () => w,
        useScroll: () => y.Ll
      });
      var r = n(8407),
        s = n(136);
      const o = () => (0, r.useReactiveVar)(s.locale);
      var a = n(1403);
      const c = e => {
        const [t, n] = (0, a.useState)(null), [r, s] = (0, a.useState)(null), [o, c] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            c({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), s(!0))
          })), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, o]
      };
      var i = n(9779);
      const u = () => {
          const {
            search: e
          } = (0, i.useLocation)();
          return new URLSearchParams(e)
        },
        l = e => {
          const t = (0, a.useRef)();
          return (0, a.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        },
        d = () => {
          const e = (0, r.useState)(),
            t = (0, r.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: r
              } = e;
              t({
                navOpen: null !== n ? n : !r
              })
            },
            clearError: () => {
              t({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              t({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: n,
                  filter: r
                }
              })
            },
            setLoading: e => {
              t({
                loading: e
              })
            },
            setHeaderHidden: e => {
              t({
                headerHidden: e
              })
            },
            setNavHidden: e => {
              t({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              t({
                normalLogo: e
              })
            },
            setSearch: e => {
              t({
                search: e
              })
            },
            setTitle: e => {
              const n = "Rockstar Games";
              let r = e;
              e.endsWith(n) || (r = `${e} - ${n}`), document.title = r, t({
                title: r
              })
            },
            setError: function() {
              let {
                code: e,
                message: n
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              t({
                error: {
                  code: e,
                  message: n
                }
              })
            },
            setStandalone: e => {
              t({
                standalone: e
              })
            },
            setCustomFooter: e => {
              t({
                customFooter: e
              })
            },
            updateGameData: n => {
              let {
                base: r = null,
                navOpen: s = !1
              } = n;
              const o = {
                ...e.gameData
              };
              null !== r && (o.base = r.replace(/\/$/, "")), null !== s && (o.navOpen = s), t({
                gameData: o
              })
            }
          }
        };
      var f = n(156);
      const w = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: s = {},
          query: o = null
        } = t;
        const c = (0, r.useRockstarTokenPing)(),
          [i, u] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [w, h] = (0, a.useState)(null),
          g = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: r = {}
              } = t;
              h(null), u(null), d(!0);
              const a = await (0, f.A)(n ?? e, {
                pingBearer: c,
                fetchOptions: s,
                finalFetchOptions: r,
                query: o
              });
              return a?.status || h(JSON.stringify(a?.error)), u(a), d(!1), a
            } catch (e) {
              h(String(e)), d(!1)
            }
            return null
          }), [e, s, o]);
        return (0, a.useEffect)((() => {
          null === i && null === w && !l && n && g()
        }), [n, i, w, l, g]), {
          data: i,
          error: w,
          loading: l,
          fetch: g
        }
      };
      var h = n(2756);
      const g = (e, t, n) => {
          const {
            authHost: s,
            clientId: o
          } = (0, h.getScConfigForOrigin)(), a = (0, r.useRockstarToken)();
          return `https://${s}.rockstargames.com/tpa/${e}/link/?cid=${o}&lang=${t}&returnUrl=${encodeURIComponent(n)}&accessToken=${a}`
        },
        v = "__RS_CUSTOM_EVENTS__",
        m = e => `rsCustomEvent:${e}`;
      window[v] || (window[v] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = m(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[v][n] || (window[v][n] = {
              eventQueue: [],
              subscribers: []
            }), window[v][n].eventQueue.push(r), window[v][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        b = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = m(e);
            return window[v][n] || (window[v][n] = {
              eventQueue: [],
              subscribers: []
            }), window[v][n].subscribers.push(t), window[v][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[v][n].subscribers = window[v][n].subscribers.filter((e => e !== t)), 0 === window[v][n].subscribers.length && delete window[v][n]
            }
          }), [e, t]), (0, a.useMemo)((() => ({})), [])
        };
      var E = n(359),
        y = n(295);
      const S = () => {
          const [e, t] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        k = () => {
          const [e, t] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
            if ("connection" in navigator && "saveData" in navigator.connection) {
              const e = navigator?.connection;
              t(e.saveData);
              const n = () => {
                t(e.saveData)
              };
              return e.addEventListener("change", n), () => {
                e.removeEventListener("change", n)
              }
            }
          }), []), e
        };
      var _ = n(9928),
        L = n(4999);
      const O = () => {
        const [e, t] = (0, a.useState)(!1), {
          deviceMemory: n
        } = (0, _.useMemoryStatus)(), {
          effectiveConnectionType: r
        } = (0, _.useNetworkStatus)(), {
          numberOfLogicalProcessors: s
        } = (0, _.useHardwareConcurrency)(), {
          saveData: o
        } = (0, _.useSaveData)(), c = S(), i = () => {
          const a = (() => {
            const e = e => !1 === e;
            if (c) return !1;
            if (L.isLegacyEdge || L.isIE || L.isWearable || L.isSmartTV) return !1;
            const t = "Safari" === L.browserName,
              a = "Firefox" === L.browserName,
              i = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
              u = s && s >= 4,
              l = n && n >= 4;
            return !(e(!o) || e(i) || e(u) || !t && !a && e(l))
          })();
          a !== e && t(a)
        };
        return (0, a.useEffect)((() => (i(), window.addEventListener("online", i), window.addEventListener("offline", i), window.addEventListener("devicememory", i), () => {
          window.removeEventListener("online", i), window.removeEventListener("offline", i), window.removeEventListener("devicememory", i)
        })), [n, r, e, s, o, c]), e
      }
    },
    359: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => i
      });
      var r = n(1403),
        s = n(6632);
      const o = (0, r.createContext)(),
        {
          Consumer: a
        } = o,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, s.jsx)(o.Provider, {
            value: t,
            children: n
          })
        },
        i = () => (0, r.useContext)(o)
    },
    295: (e, t, n) => {
      n.d(t, {
        Ll: () => u,
        N2: () => l,
        U4: () => c
      });
      var r = n(8407),
        s = n(1403),
        o = n(6632);
      const a = (0, r.makeVar)(!1),
        c = e => a(e),
        i = (0, s.createContext)(null),
        u = () => (0, s.useContext)(i),
        l = e => {
          let {
            children: t
          } = e;
          const [n, u] = (0, s.useState)(window.pageYOffset), [l, d] = (0, s.useState)(null), [f, w] = (0, s.useState)(!1), h = (0, r.useReactiveVar)(a);
          let g;
          const v = () => {
            w(!0), clearTimeout(g), g = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (h) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              u(t), f || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [f, h]), (0, s.useMemo)((() => (0, o.jsx)(i.Provider, {
            value: {
              freezeUserShouldSeeMore: h,
              pageYOffset: n,
              pauseUserShouldSeeMore: v,
              setFreezeUserShouldSeeMore: c,
              userShouldSeeMore: l
            },
            children: t
          })), [h, n, v, l])
        }
    }
  }
]);