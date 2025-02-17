! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aeb2d556-3fa7-4fe6-8f7a-658c3f451cb7", e._sentryDebugIdIdentifier = "sentry-dbid-aeb2d556-3fa7-4fe6-8f7a-658c3f451cb7")
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
  [1830], {
    9449: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => $.R,
        ApolloProvider: () => gt.X,
        DataLayerProvider: () => jt,
        GraphOperationsProvider: () => je,
        InMemoryCache: () => B.D,
        Platform: () => Je,
        Platforms: () => Ye,
        ReactiveStateProvider: () => U,
        ResizeProvider: () => ke,
        RockstarGraphProvider: () => Fe,
        RockstarTokenProvider: () => Y,
        ScrollProvider: () => me,
        classList: () => et,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Qe,
        downloadFile: () => ct,
        findPlatform: () => Ze,
        getAccentColor: () => b,
        getBase: () => k,
        getCdnPrefix: () => it,
        getConfigForDomain: () => g,
        getCookieValueByName: () => ot,
        getGen8Consoles: () => lt,
        getGen9Consoles: () => dt,
        getLanguageLabel: () => ht,
        getUriForGraphEnv: () => x,
        gql: () => mt.J1,
        gtmInit: () => yt,
        importAll: () => at,
        isGen9Platform: () => ut,
        makeVar: () => O.UT,
        mutateWebSettings: () => Lt,
        newswirePost: () => o,
        oneTrustInit: () => Ge,
        safeStyles: () => y,
        scrollToElement: () => We,
        setContextItem: () => E,
        setCookieValue: () => rt,
        setMakeVarItem: () => C,
        supportedBrowsers: () => Xe,
        toScLocaleString: () => m,
        track: () => kt,
        useApolloClient: () => De,
        useBase: () => H,
        useBodyScrollable: () => Ne,
        useDataLayer: () => Mt,
        useHasReduceMotionPreference: () => ye,
        useHasSaveDataPreference: () => Se,
        useLocale: () => N,
        useMutateState: () => A,
        useMutation: () => Ue,
        useNewswirePost: () => le,
        usePreloadImg: () => G,
        usePrevious: () => Q,
        useQuery: () => Ae,
        useQueryParams: () => W,
        useReactiveVar: () => z.q,
        useRockstarEventDispatcher: () => re,
        useRockstarEventSubscriber: () => ae,
        useRockstarToken: () => Z,
        useRockstarTokenPing: () => ee,
        useRockstarTokenReactive: () => K,
        useRockstarWebSettings: () => Tt,
        useScApi: () => te,
        useScroll: () => ge,
        useScrollTracking: () => Ee,
        useState: () => M,
        useWindowResize: () => xe,
        webSettingsReactive: () => Ct,
        withAutoRouteTracking: () => xt,
        withGtmTracking: () => At,
        withMediaBasedProps: () => Ut,
        withReactiveState: () => _,
        withRockstarGraph: () => He,
        withTranslations: () => Ot
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => ie,
        Provider: () => ce,
        useNewswirePost: () => le
      });
      var r = n(6621),
        a = n(4751),
        s = n.n(a),
        i = n(4282),
        c = n.n(i);
      const l = window?.env?.sc,
        d = window?.env?.marketing,
        u = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: r,
            scHost: a,
            hostname: s,
            cdnBase: i,
            key: c,
            marketingAuthTLD: u
          } = e;
          const h = l?.apiHost ?? t,
            g = l?.authHost ?? n,
            m = l?.cdnBase ?? i,
            p = l?.clientId ?? o,
            w = d?.marketingAuthTLD ?? u,
            f = l?.scHost ?? a,
            v = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? r,
            host: f,
            hostname: s,
            cdnBase: m,
            key: c,
            clientId: p,
            authHost: g,
            login: `https://${g}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/${v}`
          }
        },
        h = [u({
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
        g = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = h.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return h.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || h[0]
        },
        m = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: p
        } = g(),
        w = m(document.documentElement.lang),
        f = {},
        v = async function(e) {
          let {
            fetchOptions: t = {},
            finalFetchOptions: n = {},
            query: o = null,
            pingBearer: a,
            requireBearerToken: i = !0,
            useCache: l = !0
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            const {
              bearerToken: d = null
            } = await (a?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...w && {
                "X-lang": w
              }
            };
            let h = `${p}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const g = {
                headers: u
              },
              m = s().all([g, t, n]),
              v = JSON.stringify({
                ...m,
                url: h
              }),
              b = await (0, r.sc)(v);
            if (l) {
              if (f[b]?.response) return f[b].response;
              if (f[b]?.loading) return {
                error: null,
                result: null
              };
              f[b] = {
                loading: !0
              }
            }
            const k = await fetch(h, m),
              x = await k.json();
            return l && (f[b] = {
              response: x,
              loading: !1
            }), x
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", k = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, x = e => {
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
        }, y = e => {
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
            domain: o = "default"
          } = e;
          return P()?.[o] || (P()[o] = {}), P()?.[o]?.[t] || (P()[o][t] = n), P()[o][t]
        };
      var L = n(2229),
        T = n(1029);
      const R = E({
          context: (0, L.createContext)({}),
          key: "graphContextGet"
        }),
        M = () => (0, L.useContext)(R),
        j = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        A = () => (0, L.useContext)(j),
        U = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, z.q)(n);
          const o = (0, L.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, T.jsx)(R.Provider, {
            value: n(),
            children: (0, T.jsx)(j.Provider, {
              value: o,
              children: t
            })
          })
        },
        _ = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, T.jsx)(U, {
              state: n,
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        };
      var O = n(2753),
        B = n(7711),
        $ = n(9937),
        I = n(7897),
        D = n(9030);
      const F = k(),
        H = () => F;
      var z = n(9094);
      const q = (0, O.UT)(document.documentElement.lang),
        N = () => (0, z.q)(q),
        G = e => {
          const [t, n] = (0, L.useState)(null), [o, r] = (0, L.useState)(null), [a, s] = (0, L.useState)({});
          return (0, L.useLayoutEffect)((() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", (() => {
              s({
                width: t.width,
                height: t.height
              }), t = null, o || n(!0)
            })), t.addEventListener("error", (() => {
              t = null, o || (n(!1), r(!0))
            })), t.src = e, () => {
              o = !0, null !== t && (t.src = "")
            }
          }), [e]), [t, a]
        };
      var X = n(9623);
      const W = () => {
          const {
            search: e
          } = (0, X.useLocation)();
          return new URLSearchParams(e)
        },
        Q = e => {
          const t = (0, L.useRef)();
          return (0, L.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        },
        V = {
          token: (0, O.UT)(""),
          tokenPingExpires: (0, O.UT)(100)
        },
        J = E({
          context: (0, L.createContext)(V),
          key: "utilsTokenProvider"
        }),
        Y = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, T.jsx)(J.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: r
            },
            children: t
          })
        },
        K = () => {
          const {
            token: e,
            tokenPingExpires: t
          } = (0, L.useContext)(J);
          return [e, t]
        },
        Z = () => {
          const [e] = K();
          return (0, z.q)(e)
        },
        ee = () => {
          const [e, t] = K();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: o
            } = g();
            try {
              const e = n?.() ?? 0,
                r = t?.() ?? null,
                a = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === r) return {
                bearerToken: r
              };
              if (a && r) return {
                bearerToken: r
              };
              const s = await fetch(o, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await s.json(),
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
        te = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: o = {},
            query: r = null
          } = t;
          const a = ee(),
            [s, i] = (0, L.useState)(null),
            [c, l] = (0, L.useState)(!1),
            [d, u] = (0, L.useState)(null),
            h = (0, L.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: s = {}
                } = t;
                u(null), i(null), l(!0);
                const c = await v(n ?? e, {
                  pingBearer: a,
                  fetchOptions: o,
                  finalFetchOptions: s,
                  query: r
                });
                return c?.status || u(JSON.stringify(c?.error)), i(c), l(!1), c
              } catch (e) {
                u(String(e)), l(!1)
              }
              return null
            }), [e, o, r]);
          return (0, L.useEffect)((() => {
            null === s && null === d && !c && n && h()
          }), [n, s, d, c, h]), {
            data: s,
            error: d,
            loading: c,
            fetch: h
          }
        },
        ne = "__RS_CUSTOM_EVENTS__",
        oe = e => `rsCustomEvent:${e}`;
      window[ne] || (window[ne] = {});
      const re = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = oe(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[ne][n] || (window[ne][n] = {
              eventQueue: [],
              subscribers: []
            }), window[ne][n].eventQueue.push(o), window[ne][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, L.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        ae = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, L.useEffect)((() => {
            const n = oe(e);
            return window[ne][n] || (window[ne][n] = {
              eventQueue: [],
              subscribers: []
            }), window[ne][n].subscribers.push(t), window[ne][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[ne][n].subscribers = window[ne][n].subscribers.filter((e => e !== t)), 0 === window[ne][n].subscribers.length && delete window[ne][n]
            }
          }), [e, t]), (0, L.useMemo)((() => ({})), [])
        },
        se = E({
          context: (0, L.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: ie
        } = se,
        ce = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, T.jsx)(se.Provider, {
            value: t,
            children: n
          })
        },
        le = () => (0, L.useContext)(se),
        de = C({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, O.UT)(!1)
        }),
        ue = e => de(e),
        he = E({
          context: (0, L.createContext)(null),
          key: "scrollContext"
        }),
        ge = () => (0, L.useContext)(he),
        me = e => {
          let {
            children: t
          } = e;
          const [n, o] = (0, L.useState)(window.pageYOffset), [r, a] = (0, L.useState)(null), [s, i] = (0, L.useState)(!1), c = (0, z.q)(de);
          let l;
          const d = () => {
            i(!0), clearTimeout(l), l = setTimeout((() => {
              i(!1)
            }), 2e3)
          };
          return (0, L.useEffect)((() => {
            let e;
            const t = () => {
              if (c) return void a(!1);
              const t = Math.max(0, window.pageYOffset);
              o(t), s || a(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [s, c]), (0, L.useMemo)((() => (0, T.jsx)(he.Provider, {
            value: {
              freezeUserShouldSeeMore: c,
              pageYOffset: n,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: ue,
              userShouldSeeMore: r
            },
            children: t
          })), [c, n, d, r])
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
        we = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = pe;
          return Object.keys(pe).map((t => {
            const {
              min: o,
              max: r
            } = pe[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < pe.sm.min,
            isTablet: e < pe.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        fe = E({
          context: (0, L.createContext)(we()),
          key: "resizeContext"
        }),
        {
          Consumer: ve
        } = fe,
        be = (0, O.UT)(we()),
        ke = e => {
          let {
            children: t
          } = e;
          const n = (0, z.q)(be);
          return (0, L.useEffect)((() => {
            const e = () => {
              be(we())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, T.jsx)(fe.Provider, {
            value: n,
            children: t
          })
        },
        xe = () => (0, L.useContext)(fe),
        ye = () => {
          const [e, t] = (0, L.useState)(!1);
          return (0, L.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        Se = () => {
          const [e, t] = (0, L.useState)(!1);
          return (0, L.useEffect)((() => {
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
      n(9980), n(1544);
      const Ee = e => {
          const [t, n] = (0, L.useState)(!1), o = (0, L.useRef)(null);
          return (0, L.useEffect)((() => {
            const r = () => {
              if (t || !o.current) return;
              const a = o.current,
                {
                  height: s
                } = a.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= a.offsetTop + s * e && (n(!0), window.removeEventListener("scroll", r))
            };
            return window.addEventListener("scroll", r, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", r)
            }
          }), [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        Pe = (e, t) => {
          const n = N(),
            o = {
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
              data: r,
              loading: a,
              error: s,
              ...i
            } = (0, D.IT)(e, o);
          return (0, L.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = c().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, L.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [a]), (0, L.useEffect)((() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        Ce = (0, L.createContext)((() => ({
          data: null
        }))),
        Le = new Promise((e => {
          e()
        })),
        Te = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new B.D)
        },
        Re = [() => Le, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new $.R(Te))
        }],
        Me = (0, L.createContext)((() => Re)),
        je = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, T.jsx)(Me.Provider, {
            value: I.n,
            children: (0, T.jsx)(Ce.Provider, {
              value: Pe,
              children: t
            })
          })
        }),
        Ae = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Ce)(e, t)),
        Ue = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)(Me)(e));
      var _e = n(5197);
      var Oe = n(3556),
        Be = n(2600),
        $e = n.n(Be);
      const Ie = (0, n(6162).e)({
          sha256: r.sc
        }),
        De = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? x(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, L.useState)(new B.D({
              typePolicies: n
            })),
            s = Ie.concat((e => {
              let {
                token: t
              } = e;
              return (0, _e.o)(((e, n) => {
                let {
                  headers: o
                } = n;
                const r = t?.() ?? null;
                return r ? {
                  headers: {
                    ...o,
                    authorization: `Bearer ${r}`
                  }
                } : null
              }))
            })({
              token: t?.token
            }).concat((e => (0, Oe.$)({
              ...e,
              fetch: $e()
            }))(r)));
          return new $.R({
            cache: a,
            link: s
          })
        },
        Fe = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = De({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, T.jsx)(Y, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, T.jsx)(gt.X, {
              client: r,
              children: (0, T.jsx)(je, {
                children: t
              })
            })
          })
        },
        He = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, O.UT)(null),
            r = (0, O.UT)(null);
          return function(t) {
            return (0, T.jsx)(Fe, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPingExpires: r
              },
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        },
        ze = (0, O.UT)({}),
        qe = "data-disallow-body-scroll",
        Ne = e => {
          const t = (0, z.q)(ze),
            n = Object.values(t).some((e => !!e));
          return (0, L.useEffect)((() => {
            n ? document.documentElement.setAttribute(qe, "true") : document.documentElement.removeAttribute(qe)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => ze(e))({
              ...t,
              [e]: n
            })
          }
        },
        Ge = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        },
        Xe = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        We = e => {
          let {
            element: t
          } = e;
          const n = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            o = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        Qe = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (We({
            element: n
          }), Ve(n))
        },
        Ve = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class Je {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const Ye = Object.freeze({
          pc: new Je("pc", "PC", 8),
          ps: new Je("ps", "PlayStation", 3),
          ps3: new Je("ps3", "PlayStation 3", 2),
          ps4: new Je("ps4", "PlayStation 4", 11),
          ps5: new Je("ps5", "PlayStation 5", 20),
          xbox: new Je("xbox", "Xbox", 4),
          xbox360: new Je("xbox360", "Xbox 360", 1),
          xboxone: new Je("xboxone", "Xbox One", 12),
          xboxsx: new Je("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new Je("switch", "Nintendo Switch™", 18),
          nintendoswitch: new Je("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new Je("applestore", "App Store", 102),
          googleplay: new Je("googleplay", "Google Play", 1023),
          appStore: new Je("app_store", "App Store", 102),
          googlePlay: new Je("ggle_play", "Google Play", 1023)
        }),
        Ke = Object.freeze(Object.values(Ye));

      function Ze(e) {
        if (!e) return;
        if (e instanceof Je) return e;
        const t = e.toString().toLowerCase();
        return Ke.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const et = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var tt = n(9040),
        nt = n(7415);
      const ot = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        rt = (e, t) => {
          e && void 0 !== t && (0, tt.canStoreCookie)(e) && ot(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,nt.F)()}; path=/;`)
        },
        at = e => e.keys().forEach(e),
        st = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        it = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return st.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        ct = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            n = (e => {
              const t = new URL(e).pathname.split("/"),
                n = t[t.length - 1];
              return decodeURIComponent(n)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              o = document.createElement("a");
            o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
          })).catch((e => {
            console.log(e)
          }))
        },
        lt = () => [Ye.xbox360.name, Ye.xboxone.name, Ye.ps3.name, Ye.ps4.name, Ye.pc.name],
        dt = () => [Ye.xboxsx.name, Ye.ps5.name],
        ut = e => dt().includes(e),
        ht = e => {
          const t = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return t.has(e) ? t.get(e) : e
        };
      var gt = n(1140),
        mt = n(6854),
        pt = n(4842),
        wt = n.n(pt);
      const ft = (0, n(6400).A)(),
        vt = ft?.id,
        bt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        kt = e => {
          const t = {
            ...e,
            environment: vt,
            display_type: bt
          };
          wt().dataLayer({
            dataLayer: t
          })
        },
        xt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, X.useLocation)();
          return (0, L.useEffect)((() => {
            kt({
              event: "trackPageview"
            })
          }), [n]), (0, T.jsx)(e, {
            ...t
          })
        })(e, t),
        yt = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          wt().initialize(n)
        };
      var St = n(2217);
      const Et = "rockstar-games-web";
      let Pt;
      try {
        const e = St.A.get(Et) ?? "";
        Pt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Pt = {}
      }
      const Ct = (0, O.UT)(Pt),
        Lt = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ct() ?? {}
          };
          return o[t] = n, null === n && delete o[t], St.A.set(Et, JSON.stringify(o), {
            expires: 30,
            domain: (0, nt.F)(),
            path: "/"
          }), Ct(o), o
        },
        Tt = () => ({
          webSettings: (0, z.q)(Ct),
          webSettingsReactive: Ct,
          mutateWebSettings: Lt
        }),
        Rt = E({
          context: (0, L.createContext)({}),
          key: "gtmDatalayer"
        }),
        Mt = () => (0, L.useContext)(Rt),
        jt = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = Mt() ?? {},
            r = (0, L.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, T.jsx)(Rt.Provider, {
            value: r,
            children: t
          })
        },
        At = e => t => ((e, t) => (0, T.jsx)(e, {
          ...t,
          gtmTrack: e => {
            kt(e)
          }
        }))(e, t),
        Ut = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, L.useState)(t), a = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => a(e)));
                t = {
                  ...t,
                  items: e
                }
              }
              const o = t?.mediaQueryList;
              return o?.length ? (o.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
                t = {
                  ...t,
                  ...e
                }
              })), t) : t
            };
            return (0, L.useEffect)((() => {
              const e = c().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, T.jsx)(e, {
              ...o
            })
          })(e, n, t)
        },
        _t = mt.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ot = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = N(),
                {
                  data: n
                } = Ae(_t, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, T.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        }
    }
  }
]);