try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c24de22e-6a6d-41d7-910e-ed6dc804e2b1", e._sentryDebugIdIdentifier = "sentry-dbid-c24de22e-6a6d-41d7-910e-ed6dc804e2b1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [8881], {
    8881: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => _.R,
        ApolloProvider: () => D.X,
        DataLayerProvider: () => Mt,
        GraphOperationsProvider: () => Ie,
        InMemoryCache: () => B.D,
        Platform: () => et,
        Platforms: () => tt,
        ReactiveStateProvider: () => $,
        ResizeProvider: () => Ee,
        RockstarGraphProvider: () => Ne,
        RockstarTokenProvider: () => Z,
        ScrollProvider: () => we,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Ke,
        downloadFile: () => pt,
        findPlatform: () => ot,
        generateTpaLink: () => lt,
        getAccentColor: () => b,
        getBase: () => k,
        getCdnPrefix: () => ht,
        getConfigForDomain: () => p,
        getCookieValueByName: () => st,
        getGen8Consoles: () => mt,
        getGen9Consoles: () => gt,
        getLanguageLabel: () => ft,
        getUriForGraphEnv: () => y,
        gql: () => Pt.J1,
        gtmInit: () => At,
        importAll: () => dt,
        isGen9Platform: () => wt,
        makeVar: () => O.UT,
        mutateWebSettings: () => _t,
        newswirePost: () => o,
        oneTrustInit: () => Ve,
        safeStyles: () => x,
        scrollToElement: () => Ye,
        setContextItem: () => E,
        setCookieValue: () => it,
        setMakeVarItem: () => P,
        supportedBrowsers: () => Je,
        toScLocaleString: () => m,
        track: () => St,
        useApolloClient: () => qe,
        useBase: () => q,
        useBodyScrollable: () => Qe,
        useDataLayer: () => Ut,
        useHasReduceMotionPreference: () => Pe,
        useHasSaveDataPreference: () => Te,
        useLocale: () => G,
        useMutateState: () => A,
        useMutation: () => Be,
        useNewswirePost: () => ue,
        usePreloadImg: () => X,
        usePrevious: () => V,
        useQuery: () => Oe,
        useQueryParams: () => Q,
        useReactiveVar: () => R.q,
        useRockstarEventDispatcher: () => se,
        useRockstarEventSubscriber: () => ie,
        useRockstarToken: () => te,
        useRockstarTokenPing: () => ne,
        useRockstarTokenReactive: () => ee,
        useRockstarWebSettings: () => Dt,
        useScApi: () => oe,
        useScAuthLinks: () => ve,
        useScAuthTpaLink: () => fe,
        useScroll: () => ge,
        useScrollTracking: () => Le,
        useState: () => M,
        useWindowResize: () => Ce,
        webSettingsReactive: () => Bt,
        withAutoRouteTracking: () => jt,
        withGtmTracking: () => Et,
        withMediaBasedProps: () => Ct,
        withReactiveState: () => I,
        withRockstarGraph: () => Ge,
        withTranslations: () => Lt
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => le,
        Provider: () => de,
        useNewswirePost: () => ue
      });
      var r = n(2887),
        a = n(9465),
        s = n.n(a),
        i = n(5076),
        c = n.n(i);
      const l = window?.env?.sc,
        d = window?.env?.marketing,
        u = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
          graphEnv: r,
          scHost: a,
          hostname: s,
          cdnBase: i,
          key: c,
          marketingAuthTLD: u
        }) => {
          const h = l?.apiHost ?? e,
            p = l?.authHost ?? t,
            m = l?.cdnBase ?? i,
            g = l?.clientId ?? n,
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
            clientId: g,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: p,
            scBase: `https://${f}.rockstargames.com/`,
            login: `https://${p}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${p}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${p}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/${v}`
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
        p = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = h.find((({
              key: t
            }) => t === e)) ?? null;
            if (t) return t
          }
          return h.find((({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname))) || h[0]
        },
        m = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: g
        } = p(),
        w = m(document.documentElement.lang),
        f = {},
        v = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: a,
          requireBearerToken: i = !0,
          useCache: l = !0
        } = {}) => {
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
            let h = `${g}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const p = {
                headers: u
              },
              m = s().all([p, t, n]),
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
              y = await k.json();
            return l && (f[b] = {
              response: y,
              loading: !1
            }), y
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", k = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, y = e => {
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
        }, S = () => window.reactContextFactory = window?.reactContextFactory ?? {}, E = ({
          context: e,
          key: t
        }) => (S()?.[t] || (S()[t] = e), S()[t]), C = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, P = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (C()?.[n] || (C()[n] = {}), C()?.[n]?.[e] || (C()[n][e] = t), C()[n][e]);
      var T = n(2295),
        L = n(2229),
        R = n(3452);
      const U = E({
          context: (0, L.createContext)({}),
          key: "graphContextGet"
        }),
        M = () => (0, L.useContext)(U),
        j = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        A = () => (0, L.useContext)(j),
        $ = ({
          children: e,
          state: t
        }) => {
          (0, R.q)(t);
          const n = (0, L.useCallback)((e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }), [t]);
          return (0, T.jsx)(U.Provider, {
            value: t(),
            children: (0, T.jsx)(j.Provider, {
              value: n,
              children: e
            })
          })
        },
        I = (e, {
          state: t
        }) => function(n) {
          return (0, T.jsx)($, {
            state: t,
            children: (0, T.jsx)(e, {
              ...n
            })
          })
        };
      var O = n(1823),
        B = n(9757),
        _ = n(5102),
        D = n(8718),
        H = n(3585),
        z = n(6277);
      const F = k(),
        q = () => F,
        N = (0, O.UT)(document.documentElement.lang),
        G = () => (0, R.q)(N),
        X = e => {
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
      var W = n(9623);
      const Q = () => {
          const {
            search: e
          } = (0, W.useLocation)();
          return new URLSearchParams(e)
        },
        V = e => {
          const t = (0, L.useRef)();
          return (0, L.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var J = n(8128);
      const Y = {
          token: (0, O.UT)("")
        },
        K = E({
          context: (0, L.createContext)(Y),
          key: "utilsTokenProvider"
        }),
        Z = ({
          children: e,
          token: t
        }) => (0, T.jsx)(K.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        ee = () => {
          const {
            token: e
          } = (0, L.useContext)(K);
          return [e]
        },
        te = () => {
          const [e] = ee();
          return (0, R.q)(e)
        },
        ne = () => {
          const [e] = ee();
          return () => (async ({
            token: e
          }) => {
            const {
              pingBearer: t
            } = p();
            try {
              const n = e?.() ?? "";
              if (n) {
                const {
                  exp: e = 0
                } = (0, J.s)(n) ?? {};
                if (e - (new Date).getTime() / 1e3 > 0 && n) return {
                  bearerToken: n
                }
              }
              const o = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                r = await o.json();
              return e(r.bearerToken ?? ""), r
            } catch (t) {
              return e(""), !1
            }
          })({
            token: e
          })
        },
        oe = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: o = null
        }) => {
          const r = ne(),
            [a, s] = (0, L.useState)(null),
            [i, c] = (0, L.useState)(!1),
            [l, d] = (0, L.useState)(null),
            u = (0, L.useCallback)((async (t = {}, a = null) => {
              try {
                const {
                  fetchOptions: i = {}
                } = t;
                d(null), s(null), c(!0);
                const l = await v(a ?? e, {
                  pingBearer: r,
                  fetchOptions: n,
                  finalFetchOptions: i,
                  query: o
                });
                return l?.status || d(JSON.stringify(l?.error)), s(l), c(!1), l
              } catch (e) {
                d(String(e)), c(!1)
              }
              return null
            }), [e, n, o]);
          return (0, L.useEffect)((() => {
            null === a && null === l && !i && t && u()
          }), [t, a, l, i, u]), {
            data: a,
            error: l,
            loading: i,
            fetch: u
          }
        },
        re = "__RS_CUSTOM_EVENTS__",
        ae = e => `rsCustomEvent:${e}`;
      window[re] || (window[re] = {});
      const se = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = ae(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[re][n] || (window[re][n] = {
              eventQueue: [],
              subscribers: []
            }), window[re][n].eventQueue.push(o), window[re][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, L.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        ie = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, L.useEffect)((() => {
            const n = ae(e);
            return window[re][n] || (window[re][n] = {
              eventQueue: [],
              subscribers: []
            }), window[re][n].subscribers.push(t), window[re][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[re][n].subscribers = window[re][n].subscribers.filter((e => e !== t)), 0 === window[re][n].subscribers.length && delete window[re][n]
            }
          }), [e, t]), (0, L.useMemo)((() => ({})), [])
        },
        ce = E({
          context: (0, L.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: le
        } = ce,
        de = ({
          article: e,
          children: t
        }) => (0, T.jsx)(ce.Provider, {
          value: e,
          children: t
        }),
        ue = () => (0, L.useContext)(ce),
        he = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, O.UT)(!1)
        }),
        pe = e => he(e),
        me = E({
          context: (0, L.createContext)(null),
          key: "scrollContext"
        }),
        ge = () => (0, L.useContext)(me),
        we = ({
          children: e
        }) => {
          const [t, n] = (0, L.useState)(window.pageYOffset), [o, r] = (0, L.useState)(null), [a, s] = (0, L.useState)(!1), i = (0, R.q)(he);
          let c;
          const l = () => {
            s(!0), clearTimeout(c), c = setTimeout((() => {
              s(!1)
            }), 2e3)
          };
          return (0, L.useEffect)((() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), a || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [a, i]), (0, L.useMemo)((() => (0, T.jsx)(me.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: l,
              setFreezeUserShouldSeeMore: pe,
              userShouldSeeMore: o
            },
            children: e
          })), [i, t, l, o])
        },
        fe = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = p(), r = G(), a = m(r), s = te();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(a), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(s), new URL(i, `https://${n}.rockstargames.com/`)
        },
        ve = e => {
          const {
            signup: t,
            login: n
          } = p(), o = G(), r = m(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        },
        be = {
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
        ke = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = be;
          return Object.keys(be).map((t => {
            const {
              min: o,
              max: r
            } = be[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < be.sm.min,
            isTablet: e < be.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ye = E({
          context: (0, L.createContext)(ke()),
          key: "resizeContext"
        }),
        {
          Consumer: xe
        } = ye,
        Se = (0, O.UT)(ke()),
        Ee = ({
          children: e
        }) => {
          const t = (0, R.q)(Se);
          return (0, L.useEffect)((() => {
            const e = () => {
              Se(ke())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, T.jsx)(ye.Provider, {
            value: t,
            children: e
          })
        },
        Ce = () => (0, L.useContext)(ye),
        Pe = () => {
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
        Te = () => {
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
      n(5906), n(1878);
      const Le = e => {
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
        Re = (e, t) => {
          const n = G(),
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
            } = (0, z.IT)(e, o);
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
        Ue = (0, L.createContext)((() => ({
          data: null
        }))),
        Me = new Promise((e => {
          e()
        })),
        je = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new B.D)
        },
        Ae = [() => Me, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new _.R(je))
        }],
        $e = (0, L.createContext)((() => Ae)),
        Ie = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, T.jsx)($e.Provider, {
          value: H.n,
          children: (0, T.jsx)(Ue.Provider, {
            value: Re,
            children: e
          })
        })),
        Oe = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Ue)(e, t)),
        Be = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)($e)(e));
      var _e = n(6347);
      var De = n(3605),
        He = n(1162),
        ze = n.n(He);
      const Fe = (0, n(2944).e)({
          sha256: r.sc
        }),
        qe = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? y(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, L.useState)(new B.D({
              typePolicies: t
            })),
            a = Fe.concat((({
              token: e
            }) => (0, _e.o)(((t, {
              headers: n
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${o}`
                }
              } : null
            })))({
              token: e?.token
            }).concat((e => (0, De.$)({
              ...e,
              fetch: ze()
            }))(o)));
          return new _.R({
            cache: r,
            link: a
          })
        },
        Ne = ({
          children: e,
          graphOptions: t,
          typePolicies: n
        }) => {
          const o = qe({
            graphOptions: t,
            typePolicies: n ?? {}
          });
          return (0, T.jsx)(Z, {
            token: t?.token,
            children: (0, T.jsx)(D.X, {
              client: o,
              children: (0, T.jsx)(Ie, {
                children: e
              })
            })
          })
        },
        Ge = (e, {
          env: t = "prod"
        }) => {
          const n = (0, O.UT)("");
          return function(o) {
            return (0, T.jsx)(Ne, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, T.jsx)(e, {
                ...o
              })
            })
          }
        },
        Xe = (0, O.UT)({}),
        We = "data-disallow-body-scroll",
        Qe = e => {
          const t = (0, R.q)(Xe),
            n = Object.values(t).some((e => !!e));
          return (0, L.useEffect)((() => {
            n ? document.documentElement.setAttribute(We, "true") : document.documentElement.removeAttribute(We)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Xe(e))({
              ...t,
              [e]: n
            })
          }
        },
        Ve = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        Je = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Ye = ({
          element: e
        }) => {
          const t = setInterval((() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            n = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        Ke = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Ye({
            element: n
          }), Ze(n))
        },
        Ze = e => {
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
      class et {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = a
        }
      }
      const tt = Object.freeze({
          pc: new et("pc", "PC Legacy", 8, "sc"),
          ps: new et("ps", "PlayStation", 3, "np", "ps"),
          ps3: new et("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new et("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new et("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new et("xbox", "Xbox", 4, "xbl"),
          xbox360: new et("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new et("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new et("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new et("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new et("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new et("applestore", "App Store", 102, "applestore"),
          googleplay: new et("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new et("app_store", "App Store", 102, "applestore"),
          googlePlay: new et("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new et("pcalt", "PC Enhanced", 22, "sc")
        }),
        nt = Object.freeze(Object.values(tt));

      function ot(e) {
        if (!e) return;
        if (e instanceof et) return e;
        const t = e.toString().toLowerCase();
        return nt.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var rt = n(6306);
      const at = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        st = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        it = (e, t) => {
          e && void 0 !== t && (0, rt.canStoreCookie)(e) && st(e) !== t && (document.cookie = `${e}=${t}; domain=${at()}; path=/;`)
        };
      var ct = n(8613);
      const lt = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, ct.JK)(), {
          authHost: r,
          clientId: a
        } = p(), s = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return i.searchParams.append("cid", a), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && i.searchParams.append("accessToken", s.bearerToken), i
      }, dt = e => e.keys().forEach(e), ut = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ht = (e = !0) => ut.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null, pt = e => {
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
      }, mt = () => [tt.xbox360.name, tt.xboxone.name, tt.ps3.name, tt.ps4.name, tt.pc.name], gt = () => [tt.xboxsx.name, tt.ps5.name, tt.pcalt.name], wt = e => gt().includes(e), ft = e => {
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
      var vt = n(9864),
        bt = n.n(vt);
      const kt = (0, n(9867).A)(),
        yt = kt?.id,
        xt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        St = e => {
          const t = {
            ...e,
            environment: yt,
            display_type: xt
          };
          bt().dataLayer({
            dataLayer: t
          })
        },
        Et = e => t => ((e, t) => (0, T.jsx)(e, {
          ...t,
          gtmTrack: e => {
            St(e)
          }
        }))(e, t),
        Ct = (e, t = 250) => n => ((e, t, n) => {
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
        })(e, n, t);
      var Pt = n(445);
      const Tt = Pt.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Lt = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = G(),
              {
                data: n
              } = Oe(Tt, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
          })(n);
          return o ? (0, T.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t),
        Rt = E({
          context: (0, L.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ut = () => (0, L.useContext)(Rt),
        Mt = ({
          children: e,
          ...t
        }) => {
          const n = Ut() ?? {},
            o = (0, L.useMemo)((() => ({
              ...n,
              ...t
            })), [n, t]);
          return (0, T.jsx)(Rt.Provider, {
            value: o,
            children: e
          })
        },
        jt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, W.useLocation)();
          return (0, L.useEffect)((() => {
            St({
              event: "trackPageview"
            })
          }), [n]), (0, T.jsx)(e, {
            ...t
          })
        })(e, t),
        At = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          bt().initialize(t)
        };
      var $t = n(7980);
      const It = "rockstar-games-web";
      let Ot;
      try {
        const e = $t.A.get(It) ?? "";
        Ot = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ot = {}
      }
      const Bt = (0, O.UT)(Ot),
        _t = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Bt() ?? {}
          };
          return n[e] = t, null === t && delete n[e], $t.A.set(It, JSON.stringify(n), {
            expires: 30,
            domain: at(),
            path: "/"
          }), Bt(n), n
        },
        Dt = () => ({
          webSettings: (0, R.q)(Bt),
          webSettingsReactive: Bt,
          mutateWebSettings: _t
        })
    }
  }
]);