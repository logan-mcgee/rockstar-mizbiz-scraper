! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "30dca65c-611c-48ed-abf6-c93c2b428e63", e._sentryDebugIdIdentifier = "sentry-dbid-30dca65c-611c-48ed-abf6-c93c2b428e63")
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
  [240], {
    576: (e, t, n) => {
      var r = n(664),
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
        var r, u = {},
          i = null,
          l = null;
        for (r in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, r) && !c.hasOwnProperty(r) && (u[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === u[r] && (u[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: l,
          props: u,
          _owner: a.current
        }
      }
    },
    240: (e, t, n) => {
      e.exports = n(576)
    },
    775: (e, t, n) => {
      n.d(t, {
        c: () => f
      });
      var r = n(456),
        s = n(128),
        o = n.n(s),
        a = n(660),
        c = n.n(a),
        u = n(916),
        i = n(280);
      const {
        apiHost: l
      } = (0, u.c)(), d = (0, i._)(document.documentElement.lang), h = {}, f = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: s = null,
          pingBearer: a,
          requireBearerToken: u = !0,
          useCache: i = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: f = null
          } = await (a?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let w = `${l}/${e}`;
          if (null === s || c().isEmpty(s) || (w += `?${new URLSearchParams(s)}`), !f && u) return null;
          f && (g.Authorization = `Bearer ${f}`);
          const p = {
              headers: g
            },
            m = o().all([p, t, n]),
            v = JSON.stringify({
              ...m,
              url: w
            }),
            b = await (0, r.sha256)(v);
          if (i) {
            if (h[b]?.response) return h[b].response;
            if (h[b]?.loading) return {
              error: null,
              result: null
            };
            h[b] = {
              loading: !0
            }
          }
          const k = await fetch(w, m),
            y = await k.json();
          return i && (h[b] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    916: (e, t, n) => {
      n.d(t, {
        c: () => c
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
            hostname: u,
            cdnBase: i,
            key: l,
            marketingAuthTLD: d
          } = e;
          const h = r?.apiHost ?? t,
            f = r?.authHost ?? n,
            g = r?.cdnBase ?? i,
            w = r?.clientId ?? o,
            p = s?.marketingAuthTLD ?? d,
            m = r?.scHost ?? c;
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: m,
            hostname: u,
            cdnBase: g,
            key: l,
            clientId: w,
            authHost: f,
            login: `https://${f}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/auth/ping-bearer.json`
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
    280: (e, t, n) => {
      n.d(t, {
        _: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    860: (e, t, n) => {
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => S.C0,
        useGetPlatformLoginUrl: () => w,
        useHasReduceMotionPreference: () => m,
        useHasSaveDataPreference: () => p,
        useLocale: () => o,
        useNewswirePost: () => E.useNewswirePost,
        usePreloadImg: () => c,
        usePrevious: () => l,
        useQueryParams: () => i,
        useRockstarEventDispatcher: () => k,
        useRockstarEventSubscriber: () => y,
        useRockstarLocalState: () => d,
        useScApi: () => f,
        useScroll: () => S.QZ
      });
      var r = n(52),
        s = n(680);
      const o = () => (0, r.useReactiveVar)(s.locale);
      var a = n(664);
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
      var u = n(13);
      const i = () => {
          const {
            search: e
          } = (0, u.useLocation)();
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
      var h = n(775);
      const f = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: s = {},
          query: o = null
        } = t;
        const c = (0, r.useRockstarTokenPing)(),
          [u, i] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [f, g] = (0, a.useState)(null),
          w = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: r = {}
              } = t;
              g(null), i(null), d(!0);
              const a = await (0, h.c)(n ?? e, {
                pingBearer: c,
                fetchOptions: s,
                finalFetchOptions: r,
                query: o
              });
              return a?.status || g(JSON.stringify(a?.error)), i(a), d(!1), a
            } catch (e) {
              g(String(e)), d(!1)
            }
            return null
          }), [e, s, o]);
        return (0, a.useEffect)((() => {
          null === u && null === f && !l && n && w()
        }), [n, u, f, l, w]), {
          data: u,
          error: f,
          loading: l,
          fetch: w
        }
      };
      var g = n(792);
      const w = (e, t, n) => {
          const {
            authHost: s,
            clientId: o
          } = (0, g.getScConfigForOrigin)(), a = (0, r.useRockstarToken)();
          return `https://${s}.rockstargames.com/tpa/${e}/link/?cid=${o}&lang=${t}&returnUrl=${encodeURIComponent(n)}&accessToken=${a}`
        },
        p = () => {
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
        },
        m = () => {
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
        v = "__RS_CUSTOM_EVENTS__",
        b = e => `rsCustomEvent:${e}`;
      window[v] || (window[v] = {});
      const k = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = b(e),
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
        y = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = b(e);
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
      var E = n(640),
        S = n(172)
    },
    640: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => u
      });
      var r = n(664),
        s = n(240);
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
        u = () => (0, r.useContext)(o)
    },
    172: (e, t, n) => {
      n.d(t, {
        C0: () => c,
        Iq: () => l,
        QZ: () => i
      });
      var r = n(52),
        s = n(664),
        o = n(240);
      const a = (0, r.makeVar)(!1),
        c = e => a(e),
        u = (0, s.createContext)(null),
        i = () => (0, s.useContext)(u),
        l = e => {
          let {
            children: t
          } = e;
          const [n, i] = (0, s.useState)(window.pageYOffset), [l, d] = (0, s.useState)(null), [h, f] = (0, s.useState)(!1), g = (0, r.useReactiveVar)(a);
          let w;
          const p = () => {
            f(!0), clearTimeout(w), w = setTimeout((() => {
              f(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (g) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              i(t), h || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, g]), (0, s.useMemo)((() => (0, o.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: g,
              pageYOffset: n,
              pauseUserShouldSeeMore: p,
              setFreezeUserShouldSeeMore: c,
              userShouldSeeMore: l
            },
            children: t
          })), [g, n, p, l])
        }
    }
  }
]);