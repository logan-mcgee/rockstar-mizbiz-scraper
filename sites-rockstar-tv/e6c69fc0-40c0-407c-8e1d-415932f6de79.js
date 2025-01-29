! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6c69fc0-40c0-407c-8e1d-415932f6de79", e._sentryDebugIdIdentifier = "sentry-dbid-e6c69fc0-40c0-407c-8e1d-415932f6de79")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [839], {
    839: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => $.R,
        ApolloProvider: () => Je.X,
        DataLayerProvider: () => ht,
        GraphOperationsProvider: () => Ae,
        InMemoryCache: () => B.D,
        Platform: () => Xe.OD,
        Platforms: () => Xe.lv,
        ReactiveStateProvider: () => j,
        ResizeProvider: () => be,
        RockstarGraphProvider: () => Fe,
        RockstarTokenProvider: () => K,
        ScrollProvider: () => me,
        classList: () => Xe.pP,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Xe.wC,
        downloadFile: () => Xe.PE,
        findPlatform: () => Xe.rB,
        getAccentColor: () => k,
        getBase: () => y,
        getCdnPrefix: () => Xe.yh,
        getCookieValueByName: () => Xe.Ap,
        getGen8Consoles: () => Xe.Xs,
        getGen9Consoles: () => Xe.kx,
        getLanguageLabel: () => Xe.rJ,
        getScConfigForOrigin: () => h,
        getUriForGraphEnv: () => b,
        gql: () => Ye.J1,
        gtmInit: () => st,
        importAll: () => Xe.pT,
        isGen9Platform: () => Xe.lV,
        lsSettingsReactive: () => ct,
        makeVar: () => U.UT,
        mutateLSSettings: () => lt,
        newswirePost: () => r,
        oneTrustInit: () => Ve,
        safeStyles: () => x,
        scrollToElement: () => Xe.PA,
        setContextItem: () => E,
        setCookieValue: () => Xe.My,
        setMakeVarItem: () => C,
        supportedBrowsers: () => We,
        toScLocaleString: () => w,
        track: () => rt,
        useApolloClient: () => He,
        useBase: () => F,
        useBodyScrollable: () => Qe,
        useDataLayer: () => gt,
        useHasReduceMotionPreference: () => Se,
        useHasSaveDataPreference: () => Ee,
        useLocale: () => N,
        useMutateState: () => A,
        useMutation: () => Oe,
        useNewswirePost: () => de,
        usePreloadImg: () => G,
        usePrevious: () => W,
        useQuery: () => je,
        useQueryParams: () => V,
        useReactiveVar: () => q.q,
        useRockstarEventDispatcher: () => se,
        useRockstarEventSubscriber: () => ae,
        useRockstarToken: () => ee,
        useRockstarTokenPing: () => te,
        useRockstarTokenReactive: () => Z,
        useRockstarWebLSSettings: () => dt,
        useScApi: () => ne,
        useScroll: () => we,
        useScrollTracking: () => Pe,
        useState: () => _,
        useWindowResize: () => xe,
        withAutoRouteTracking: () => ot,
        withGtmTracking: () => wt,
        withMediaBasedProps: () => mt,
        withReactiveState: () => O,
        withRockstarGraph: () => ze,
        withTranslations: () => ft
      });
      var r = {};
      n.r(r), n.d(r, {
        Consumer: () => ce,
        Provider: () => le,
        useNewswirePost: () => de
      });
      var o = n(1328),
        s = n(1032),
        a = n.n(s),
        i = n(1999),
        c = n.n(i);
      const l = window?.env?.sc,
        d = window?.env?.marketing,
        u = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: r,
            graphEnv: o,
            scHost: s,
            hostname: a,
            cdnBase: i,
            key: c,
            marketingAuthTLD: u
          } = e;
          const g = l?.apiHost ?? t,
            h = l?.authHost ?? n,
            w = l?.cdnBase ?? i,
            m = l?.clientId ?? r,
            p = d?.marketingAuthTLD ?? u,
            f = l?.scHost ?? s,
            v = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${g}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? o,
            host: f,
            hostname: a,
            cdnBase: w,
            key: c,
            clientId: m,
            authHost: h,
            login: `https://${h}.rockstargames.com/connect/authorize/${m}`,
            silentCheck: `https://${h}.rockstargames.com/connect/cors/check/${m}`,
            signup: `https://${h}.rockstargames.com/create/?cid=${m}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`
          }
        },
        g = [u({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), u({
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
        h = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = g.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return g.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || g[0]
        },
        w = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: m
        } = h(),
        p = w(document.documentElement.lang),
        f = {},
        v = async function(e) {
          let {
            fetchOptions: t = {},
            finalFetchOptions: n = {},
            query: r = null,
            pingBearer: s,
            requireBearerToken: i = !0,
            useCache: l = !0
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            const {
              bearerToken: d = null
            } = await (s?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...p && {
                "X-lang": p
              }
            };
            let g = `${m}/${e}`;
            if (null === r || c().isEmpty(r) || (g += `?${new URLSearchParams(r)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const h = {
                headers: u
              },
              w = a().all([h, t, n]),
              v = JSON.stringify({
                ...w,
                url: g
              }),
              k = await (0, o.sc)(v);
            if (l) {
              if (f[k]?.response) return f[k].response;
              if (f[k]?.loading) return {
                error: null,
                result: null
              };
              f[k] = {
                loading: !0
              }
            }
            const y = await fetch(g, w),
              b = await y.json();
            return l && (f[k] = {
              response: b,
              loading: !1
            }), b
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, k = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", y = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, b = e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
          let t = "";
          switch (e) {
            case "prod":
              t = "graph";
              break;
            case "prod-int":
              t = "graph-int";
              break;
            default:
              t = `${e}-graph`
          }
          return `https://${t}.rockstargames.com?origin=${document.location.origin}`
        }, x = e => {
          const t = c().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        }, S = () => window.reactContextFactory = window?.reactContextFactory ?? {}, E = e => {
          let {
            context: t,
            key: n
          } = e;
          return S()?.[n] || (S()[n] = t), S()[n]
        }, P = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, C = e => {
          let {
            key: t,
            value: n,
            domain: r = "default"
          } = e;
          return P()?.[r] || (P()[r] = {}), P()?.[r]?.[t] || (P()[r][t] = n), P()[r][t]
        };
      var T = n(2229),
        L = n(8096);
      const M = E({
          context: (0, T.createContext)({}),
          key: "graphContextGet"
        }),
        _ = () => (0, T.useContext)(M),
        R = E({
          context: (0, T.createContext)({}),
          key: "graphContextSet"
        }),
        A = () => (0, T.useContext)(R),
        j = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, q.q)(n);
          const r = (0, T.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, L.jsx)(M.Provider, {
            value: n(),
            children: (0, L.jsx)(R.Provider, {
              value: r,
              children: t
            })
          })
        },
        O = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, L.jsx)(j, {
              state: n,
              children: (0, L.jsx)(e, {
                ...t
              })
            })
          }
        };
      var U = n(3562),
        B = n(5164),
        $ = n(5220),
        D = n(5053),
        I = n(4474);
      const H = y(),
        F = () => H;
      var q = n(175);
      const z = (0, U.UT)(document.documentElement.lang),
        N = () => (0, q.q)(z),
        G = e => {
          const [t, n] = (0, T.useState)(null), [r, o] = (0, T.useState)(null), [s, a] = (0, T.useState)({});
          return (0, T.useLayoutEffect)((() => {
            let t = new Image,
              r = !1;
            return t.addEventListener("load", (() => {
              a({
                width: t.width,
                height: t.height
              }), t = null, r || n(!0)
            })), t.addEventListener("error", (() => {
              t = null, r || (n(!1), o(!0))
            })), t.src = e, () => {
              r = !0, null !== t && (t.src = "")
            }
          }), [e]), [t, s]
        };
      var Q = n(9623);
      const V = () => {
          const {
            search: e
          } = (0, Q.useLocation)();
          return new URLSearchParams(e)
        },
        W = e => {
          const t = (0, T.useRef)();
          return (0, T.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var X = n(5966);
      const J = {
          token: (0, U.UT)(null),
          tokenPingExpires: (0, U.UT)(100)
        },
        Y = E({
          context: (0, T.createContext)(J),
          key: "utilsTokenProvider"
        }),
        K = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: o
          } = e;
          return (0, L.jsx)(Y.Provider, {
            value: {
              token: n,
              tokenPing: r,
              tokenPingExpires: o
            },
            children: t
          })
        },
        Z = () => {
          const {
            token: e,
            tokenPingExpires: t
          } = (0, T.useContext)(Y);
          return [e, t]
        },
        ee = () => {
          const [e] = Z();
          return (0, q.q)(e)
        },
        te = () => {
          const [e, t] = Z();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: r
            } = (0, X.getScConfigForOrigin)();
            try {
              const e = n?.() ?? 0,
                o = t?.() ?? null,
                s = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === o) return {
                bearerToken: o
              };
              if (s && o) return {
                bearerToken: o
              };
              const a = await fetch(r, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await a.json(),
                {
                  tokenExpiresTime: c = null
                } = i;
              return null !== c && n?.(c), t(i.bearerToken ?? null), i
            } catch (e) {
              return t(!1), !1
            }
          })({
            token: e,
            tokenPingExpires: t
          })
        },
        ne = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: r = {},
            query: o = null
          } = t;
          const s = te(),
            [a, i] = (0, T.useState)(null),
            [c, l] = (0, T.useState)(!1),
            [d, u] = (0, T.useState)(null),
            g = (0, T.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: a = {}
                } = t;
                u(null), i(null), l(!0);
                const c = await v(n ?? e, {
                  pingBearer: s,
                  fetchOptions: r,
                  finalFetchOptions: a,
                  query: o
                });
                return c?.status || u(JSON.stringify(c?.error)), i(c), l(!1), c
              } catch (e) {
                u(String(e)), l(!1)
              }
              return null
            }), [e, r, o]);
          return (0, T.useEffect)((() => {
            null === a && null === d && !c && n && g()
          }), [n, a, d, c, g]), {
            data: a,
            error: d,
            loading: c,
            fetch: g
          }
        },
        re = "__RS_CUSTOM_EVENTS__",
        oe = e => `rsCustomEvent:${e}`;
      window[re] || (window[re] = {});
      const se = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = oe(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[re][n] || (window[re][n] = {
              eventQueue: [],
              subscribers: []
            }), window[re][n].eventQueue.push(r), window[re][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, T.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        ae = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, T.useEffect)((() => {
            const n = oe(e);
            return window[re][n] || (window[re][n] = {
              eventQueue: [],
              subscribers: []
            }), window[re][n].subscribers.push(t), window[re][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[re][n].subscribers = window[re][n].subscribers.filter((e => e !== t)), 0 === window[re][n].subscribers.length && delete window[re][n]
            }
          }), [e, t]), (0, T.useMemo)((() => ({})), [])
        },
        ie = E({
          context: (0, T.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: ce
        } = ie,
        le = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, L.jsx)(ie.Provider, {
            value: t,
            children: n
          })
        },
        de = () => (0, T.useContext)(ie),
        ue = C({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, U.UT)(!1)
        }),
        ge = e => ue(e),
        he = E({
          context: (0, T.createContext)(null),
          key: "scrollContext"
        }),
        we = () => (0, T.useContext)(he),
        me = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, T.useState)(window.pageYOffset), [o, s] = (0, T.useState)(null), [a, i] = (0, T.useState)(!1), c = (0, q.q)(ue);
          let l;
          const d = () => {
            i(!0), clearTimeout(l), l = setTimeout((() => {
              i(!1)
            }), 2e3)
          };
          return (0, T.useEffect)((() => {
            let e;
            const t = () => {
              if (c) return void s(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), a || s(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [a, c]), (0, T.useMemo)((() => (0, L.jsx)(he.Provider, {
            value: {
              freezeUserShouldSeeMore: c,
              pageYOffset: n,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: ge,
              userShouldSeeMore: o
            },
            children: t
          })), [c, n, d, o])
        },
        pe = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        fe = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = pe;
          return Object.keys(pe).map((t => {
            const {
              min: r,
              max: o
            } = pe[t], s = e >= r && e <= o, a = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: r,
              max: o
            }
          })), {
            isMobile: e < pe.sm.min,
            isTablet: e < pe.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ve = E({
          context: (0, T.createContext)(fe()),
          key: "resizeContext"
        }),
        {
          Consumer: ke
        } = ve,
        ye = (0, U.UT)(fe()),
        be = e => {
          let {
            children: t
          } = e;
          const n = (0, q.q)(ye);
          return (0, T.useEffect)((() => {
            const e = () => {
              ye(fe())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, L.jsx)(ve.Provider, {
            value: n,
            children: t
          })
        },
        xe = () => (0, T.useContext)(ve),
        Se = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        Ee = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)((() => {
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
      n(2859), n(4943);
      const Pe = e => {
          const [t, n] = (0, T.useState)(!1), r = (0, T.useRef)(null);
          return (0, T.useEffect)((() => {
            const o = () => {
              if (t || !r.current) return;
              const s = r.current,
                {
                  height: a
                } = s.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", o))
            };
            return window.addEventListener("scroll", o, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", o)
            }
          }), [t, e]), {
            ref: r,
            scrollTracked: t
          }
        },
        Ce = (e, t) => {
          const n = N(),
            r = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: n,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: s,
              error: a,
              ...i
            } = (0, I.IT)(e, r);
          return (0, T.useEffect)((() => {
            if (o && r.setTitleDataPath) {
              const e = c().get(o, r.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [o]), (0, T.useEffect)((() => (r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            r.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, T.useEffect)((() => {
            if (r.autoSetError && a) throw new Error(String(a))
          }), [a]), {
            loading: s,
            error: a,
            data: o,
            ...i
          }
        },
        Te = (0, T.createContext)((() => ({
          data: null
        }))),
        Le = new Promise((e => {
          e()
        })),
        Me = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new B.D)
        },
        _e = [() => Le, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new $.R(Me))
        }],
        Re = (0, T.createContext)((() => _e)),
        Ae = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, L.jsx)(Re.Provider, {
            value: D.n,
            children: (0, L.jsx)(Te.Provider, {
              value: Ce,
              children: t
            })
          })
        }),
        je = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, T.useContext)(Te)(e, t)),
        Oe = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, T.useContext)(Re)(e));
      var Ue = n(6532);
      var Be = n(5879),
        $e = n(49),
        De = n.n($e);
      const Ie = (0, n(1863).e)({
          sha256: o.sc
        }),
        He = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const r = t?.env ? b(t?.env) : t?.uri,
            o = {
              ...t,
              uri: r
            },
            [s] = (0, T.useState)(new B.D({
              typePolicies: n
            })),
            a = Ie.concat((e => {
              let {
                token: t
              } = e;
              return (0, Ue.o)(((e, n) => {
                let {
                  headers: r
                } = n;
                const o = t?.() ?? null;
                return o ? {
                  headers: {
                    ...r,
                    authorization: `Bearer ${o}`
                  }
                } : null
              }))
            })({
              token: t?.token
            }).concat((e => (0, Be.$)({
              ...e,
              fetch: De()
            }))(o)));
          return new $.R({
            cache: s,
            link: a
          })
        },
        Fe = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const o = He({
            graphOptions: n,
            typePolicies: r
          });
          return (0, L.jsx)(K, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, L.jsx)(Je.X, {
              client: o,
              children: (0, L.jsx)(Ae, {
                children: t
              })
            })
          })
        },
        qe = {
          RockstarGames_Users_Model_Entity_User_o: {
            fields: {
              logged_in: {
                read(e, t) {
                  let {
                    readField: n
                  } = t;
                  return Number.isInteger(n("id"))
                }
              },
              agegate_pass: {
                read(e, t) {
                  let {
                    readField: n
                  } = t;
                  const r = void 0 !== n("isAMinor") && !n("isAMinor"),
                    o = ct()?.agegatePass;
                  return r ?? o
                }
              }
            }
          }
        },
        ze = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const r = (0, U.UT)(null),
            o = (0, U.UT)(null);
          return function(t) {
            return (0, L.jsx)(Fe, {
              typePolicies: qe,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: r,
                tokenPingExpires: o
              },
              children: (0, L.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ne = (0, U.UT)({}),
        Ge = "data-disallow-body-scroll",
        Qe = e => {
          const t = (0, q.q)(Ne),
            n = Object.values(t).some((e => !!e));
          return (0, T.useEffect)((() => {
            n ? document.documentElement.setAttribute(Ge, "true") : document.documentElement.removeAttribute(Ge)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Ne(e))({
              ...t,
              [e]: n
            })
          }
        },
        Ve = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        },
        We = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var Xe = n(1207),
        Je = n(1477),
        Ye = n(8037),
        Ke = n(4875),
        Ze = n.n(Ke);
      const et = (0, n(5138).A)(),
        tt = et?.id,
        nt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        rt = e => {
          const t = {
            ...e,
            environment: tt,
            display_type: nt
          };
          Ze().dataLayer({
            dataLayer: t
          })
        },
        ot = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Q.useLocation)();
          return (0, T.useEffect)((() => {
            rt({
              event: "trackPageview"
            })
          }), [n]), (0, L.jsx)(e, {
            ...t
          })
        })(e, t),
        st = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Ze().initialize(n)
        },
        at = "rockstar-games-web";
      let it;
      try {
        const e = window.localStorage.getItem(at);
        it = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        it = {}
      }
      const ct = (0, U.UT)(it),
        lt = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const r = {
            ...ct() ?? {}
          };
          return r[t] = n, null === n && delete r[t], window.localStorage.setItem(at, JSON.stringify(r)), ct(r), r
        },
        dt = () => ({
          lsSettings: (0, q.q)(ct),
          settingsReactive: ct,
          mutateLSSettings: lt
        }),
        ut = E({
          context: (0, T.createContext)({}),
          key: "gtmDatalayer"
        }),
        gt = () => (0, T.useContext)(ut),
        ht = e => {
          let {
            children: t,
            ...n
          } = e;
          const r = gt() ?? {},
            o = (0, T.useMemo)((() => ({
              ...r,
              ...n
            })), [r, n]);
          return (0, L.jsx)(ut.Provider, {
            value: o,
            children: t
          })
        },
        wt = e => t => ((e, t) => (0, L.jsx)(e, {
          ...t,
          gtmTrack: e => {
            rt(e)
          }
        }))(e, t),
        mt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [r, o] = (0, T.useState)(t), s = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => s(e)));
                t = {
                  ...t,
                  items: e
                }
              }
              const r = t?.mediaQueryList;
              return r?.length ? (r.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
                t = {
                  ...t,
                  ...e
                }
              })), t) : t
            };
            return (0, T.useEffect)((() => {
              const e = c().debounce((() => {
                o(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, L.jsx)(e, {
              ...r
            })
          })(e, n, t)
        },
        pt = Ye.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ft = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const r = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const {
                data: t
              } = je(pt, {
                variables: {
                  config: e,
                  locale: "en_us"
                }
              });
              return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return r ? (0, L.jsx)(e, {
              ...t,
              t: r
            }) : null
          })(e, n, t)
        }
    }
  }
]);