! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1f0e05bf-1fb7-479c-b2da-27a1ea923a98", e._sentryDebugIdIdentifier = "sentry-dbid-1f0e05bf-1fb7-479c-b2da-27a1ea923a98")
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
  [3026], {
    3026: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => O.R,
        ApolloProvider: () => pt.X,
        DataLayerProvider: () => jt,
        GraphOperationsProvider: () => je,
        InMemoryCache: () => _.D,
        Platform: () => Ke,
        Platforms: () => Ze,
        ReactiveStateProvider: () => j,
        ResizeProvider: () => ye,
        RockstarGraphProvider: () => ze,
        RockstarTokenProvider: () => Y,
        ScrollProvider: () => me,
        classList: () => nt,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Je,
        downloadFile: () => dt,
        findPlatform: () => tt,
        getAccentColor: () => k,
        getBase: () => b,
        getCdnPrefix: () => lt,
        getConfigForDomain: () => g,
        getCookieValueByName: () => at,
        getGen8Consoles: () => ut,
        getGen9Consoles: () => ht,
        getLanguageLabel: () => mt,
        getUriForGraphEnv: () => x,
        gql: () => wt.J1,
        gtmInit: () => Et,
        importAll: () => it,
        isGen9Platform: () => gt,
        makeVar: () => I.UT,
        mutateWebSettings: () => Rt,
        newswirePost: () => o,
        oneTrustInit: () => We,
        safeStyles: () => y,
        scrollToElement: () => Ve,
        setContextItem: () => E,
        setCookieValue: () => st,
        setMakeVarItem: () => P,
        supportedBrowsers: () => Qe,
        toScLocaleString: () => m,
        track: () => yt,
        useApolloClient: () => He,
        useBase: () => H,
        useBodyScrollable: () => Xe,
        useDataLayer: () => Mt,
        useHasReduceMotionPreference: () => Ee,
        useHasSaveDataPreference: () => Ce,
        useLocale: () => N,
        useMutateState: () => M,
        useMutation: () => Ie,
        useNewswirePost: () => le,
        usePreloadImg: () => G,
        usePrevious: () => Q,
        useQuery: () => $e,
        useQueryParams: () => W,
        useReactiveVar: () => z.q,
        useRockstarEventDispatcher: () => re,
        useRockstarEventSubscriber: () => ae,
        useRockstarToken: () => Z,
        useRockstarTokenPing: () => ee,
        useRockstarTokenReactive: () => K,
        useRockstarWebSettings: () => Ut,
        useScApi: () => te,
        useScAuthLinks: () => we,
        useScAuthTpaLink: () => pe,
        useScroll: () => ge,
        useScrollTracking: () => Pe,
        useState: () => U,
        useWindowResize: () => Se,
        webSettingsReactive: () => Tt,
        withAutoRouteTracking: () => St,
        withGtmTracking: () => $t,
        withMediaBasedProps: () => It,
        withReactiveState: () => $,
        withRockstarGraph: () => qe,
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
            cms: r,
            graphEnv: a,
            scHost: s,
            hostname: i,
            cdnBase: c,
            key: u,
            marketingAuthTLD: h
          } = e;
          const g = l?.apiHost ?? t,
            m = l?.authHost ?? n,
            p = l?.cdnBase ?? c,
            w = l?.clientId ?? o,
            f = d?.marketingAuthTLD ?? h,
            v = l?.scHost ?? s,
            k = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${g}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? a,
            host: v,
            hostname: i,
            cdnBase: p,
            key: u,
            clientId: w,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${k}`
          }
        },
        h = [u({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
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
          cms: "cms-prod.ros",
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
              k = await (0, r.sc)(v);
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
            const b = await fetch(h, m),
              x = await b.json();
            return l && (f[k] = {
              response: x,
              loading: !1
            }), x
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, k = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", b = () => {
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
        }, C = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, P = e => {
          let {
            key: t,
            value: n,
            domain: o = "default"
          } = e;
          return C()?.[o] || (C()[o] = {}), C()?.[o]?.[t] || (C()[o][t] = n), C()[o][t]
        };
      var L = n(2229),
        T = n(1029);
      const R = E({
          context: (0, L.createContext)({}),
          key: "graphContextGet"
        }),
        U = () => (0, L.useContext)(R),
        A = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        M = () => (0, L.useContext)(A),
        j = e => {
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
            children: (0, T.jsx)(A.Provider, {
              value: o,
              children: t
            })
          })
        },
        $ = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, T.jsx)(j, {
              state: n,
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        };
      var I = n(2753),
        _ = n(7711),
        O = n(9937),
        B = n(7897),
        D = n(9030);
      const F = b(),
        H = () => F;
      var z = n(9094);
      const q = (0, I.UT)(document.documentElement.lang),
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
          token: (0, I.UT)(""),
          tokenPingExpires: (0, I.UT)(100)
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
        de = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, I.UT)(!1)
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
        pe = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = g(), r = N(), a = m(r), s = Z();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(a), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(s), new URL(i, `https://${n}.rockstargames.com/`)
        },
        we = e => {
          const {
            signup: t,
            login: n
          } = g(), o = N(), r = m(o);
          let a = "";
          return a += "?lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}${a}`,
            signInUrl: `${n}${a}`
          }
        },
        fe = {
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
        ve = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = fe;
          return Object.keys(fe).map((t => {
            const {
              min: o,
              max: r
            } = fe[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < fe.sm.min,
            isTablet: e < fe.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ke = E({
          context: (0, L.createContext)(ve()),
          key: "resizeContext"
        }),
        {
          Consumer: be
        } = ke,
        xe = (0, I.UT)(ve()),
        ye = e => {
          let {
            children: t
          } = e;
          const n = (0, z.q)(xe);
          return (0, L.useEffect)((() => {
            const e = () => {
              xe(ve())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, T.jsx)(ke.Provider, {
            value: n,
            children: t
          })
        },
        Se = () => (0, L.useContext)(ke),
        Ee = () => {
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
        Ce = () => {
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
      const Pe = e => {
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
        Le = (e, t) => {
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
        Te = (0, L.createContext)((() => ({
          data: null
        }))),
        Re = new Promise((e => {
          e()
        })),
        Ue = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new _.D)
        },
        Ae = [() => Re, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new O.R(Ue))
        }],
        Me = (0, L.createContext)((() => Ae)),
        je = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, T.jsx)(Me.Provider, {
            value: B.n,
            children: (0, T.jsx)(Te.Provider, {
              value: Le,
              children: t
            })
          })
        }),
        $e = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Te)(e, t)),
        Ie = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)(Me)(e));
      var _e = n(5197);
      var Oe = n(3556),
        Be = n(2600),
        De = n.n(Be);
      const Fe = (0, n(6162).e)({
          sha256: r.sc
        }),
        He = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? x(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, L.useState)(new _.D({
              typePolicies: n
            })),
            s = Fe.concat((e => {
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
              fetch: De()
            }))(r)));
          return new O.R({
            cache: a,
            link: s
          })
        },
        ze = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = He({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, T.jsx)(Y, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, T.jsx)(pt.X, {
              client: r,
              children: (0, T.jsx)(je, {
                children: t
              })
            })
          })
        },
        qe = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, I.UT)(null),
            r = (0, I.UT)(null);
          return function(t) {
            return (0, T.jsx)(ze, {
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
        Ne = (0, I.UT)({}),
        Ge = "data-disallow-body-scroll",
        Xe = e => {
          const t = (0, z.q)(Ne),
            n = Object.values(t).some((e => !!e));
          return (0, L.useEffect)((() => {
            n ? document.documentElement.setAttribute(Ge, "true") : document.documentElement.removeAttribute(Ge)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Ne(e))({
              ...t,
              [e]: n
            })
          }
        },
        We = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        },
        Qe = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Ve = e => {
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
        Je = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Ve({
            element: n
          }), Ye(n))
        },
        Ye = e => {
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
      class Ke {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const Ze = Object.freeze({
          pc: new Ke("pc", "PC", 8),
          ps: new Ke("ps", "PlayStation", 3),
          ps3: new Ke("ps3", "PlayStation 3", 2),
          ps4: new Ke("ps4", "PlayStation 4", 11),
          ps5: new Ke("ps5", "PlayStation 5", 20),
          xbox: new Ke("xbox", "Xbox", 4),
          xbox360: new Ke("xbox360", "Xbox 360", 1),
          xboxone: new Ke("xboxone", "Xbox One", 12),
          xboxsx: new Ke("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new Ke("switch", "Nintendo Switch™", 18),
          nintendoswitch: new Ke("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new Ke("applestore", "App Store", 102),
          googleplay: new Ke("googleplay", "Google Play", 1023),
          appStore: new Ke("app_store", "App Store", 102),
          googlePlay: new Ke("ggle_play", "Google Play", 1023),
          pcalt: new Ke("pcalt", "PC Enhanced", 22)
        }),
        et = Object.freeze(Object.values(Ze));

      function tt(e) {
        if (!e) return;
        if (e instanceof Ke) return e;
        const t = e.toString().toLowerCase();
        return et.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const nt = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var ot = n(9040),
        rt = n(7415);
      const at = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        st = (e, t) => {
          e && void 0 !== t && (0, ot.canStoreCookie)(e) && at(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,rt.F)()}; path=/;`)
        },
        it = e => e.keys().forEach(e),
        ct = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        lt = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return ct.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        dt = e => {
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
        ut = () => [Ze.xbox360.name, Ze.xboxone.name, Ze.ps3.name, Ze.ps4.name, Ze.pc.name],
        ht = () => [Ze.xboxsx.name, Ze.ps5.name, Ze.pcalt.name],
        gt = e => ht().includes(e),
        mt = e => {
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
      var pt = n(1140),
        wt = n(6854),
        ft = n(4842),
        vt = n.n(ft);
      const kt = (0, n(6400).A)(),
        bt = kt?.id,
        xt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        yt = e => {
          const t = {
            ...e,
            environment: bt,
            display_type: xt
          };
          vt().dataLayer({
            dataLayer: t
          })
        },
        St = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, X.useLocation)();
          return (0, L.useEffect)((() => {
            yt({
              event: "trackPageview"
            })
          }), [n]), (0, T.jsx)(e, {
            ...t
          })
        })(e, t),
        Et = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          vt().initialize(n)
        };
      var Ct = n(2217);
      const Pt = "rockstar-games-web";
      let Lt;
      try {
        const e = Ct.A.get(Pt) ?? "";
        Lt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Lt = {}
      }
      const Tt = (0, I.UT)(Lt),
        Rt = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Tt() ?? {}
          };
          return o[t] = n, null === n && delete o[t], Ct.A.set(Pt, JSON.stringify(o), {
            expires: 30,
            domain: (0, rt.F)(),
            path: "/"
          }), Tt(o), o
        },
        Ut = () => ({
          webSettings: (0, z.q)(Tt),
          webSettingsReactive: Tt,
          mutateWebSettings: Rt
        }),
        At = E({
          context: (0, L.createContext)({}),
          key: "gtmDatalayer"
        }),
        Mt = () => (0, L.useContext)(At),
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
          return (0, T.jsx)(At.Provider, {
            value: r,
            children: t
          })
        },
        $t = e => t => ((e, t) => (0, T.jsx)(e, {
          ...t,
          gtmTrack: e => {
            yt(e)
          }
        }))(e, t),
        It = function(e) {
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
        _t = wt.J1`
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
                } = $e(_t, {
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