try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "591ffdc5-7097-43fa-949c-a85e07c24b0c", e._sentryDebugIdIdentifier = "sentry-dbid-591ffdc5-7097-43fa-949c-a85e07c24b0c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [8711], {
    8711: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => B.R,
        ApolloProvider: () => wt.X,
        DataLayerProvider: () => $t,
        GraphOperationsProvider: () => $e,
        InMemoryCache: () => O.D,
        Platform: () => Ze,
        Platforms: () => et,
        ReactiveStateProvider: () => A,
        ResizeProvider: () => Se,
        RockstarGraphProvider: () => qe,
        RockstarTokenProvider: () => K,
        ScrollProvider: () => me,
        classList: () => ot,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Ye,
        downloadFile: () => ut,
        findPlatform: () => nt,
        getAccentColor: () => b,
        getBase: () => k,
        getCdnPrefix: () => dt,
        getConfigForDomain: () => p,
        getCookieValueByName: () => st,
        getGen8Consoles: () => ht,
        getGen9Consoles: () => pt,
        getLanguageLabel: () => mt,
        getUriForGraphEnv: () => x,
        gql: () => ft.J1,
        gtmInit: () => Ct,
        importAll: () => ct,
        isGen9Platform: () => gt,
        makeVar: () => I.UT,
        mutateWebSettings: () => Ut,
        newswirePost: () => o,
        oneTrustInit: () => Qe,
        safeStyles: () => y,
        scrollToElement: () => Je,
        setContextItem: () => E,
        setCookieValue: () => it,
        setMakeVarItem: () => P,
        supportedBrowsers: () => Ve,
        toScLocaleString: () => g,
        track: () => St,
        useApolloClient: () => ze,
        useBase: () => H,
        useBodyScrollable: () => We,
        useDataLayer: () => At,
        useHasReduceMotionPreference: () => Ce,
        useHasSaveDataPreference: () => Pe,
        useLocale: () => N,
        useMutateState: () => j,
        useMutation: () => Oe,
        useNewswirePost: () => de,
        usePreloadImg: () => G,
        usePrevious: () => Q,
        useQuery: () => Ie,
        useQueryParams: () => W,
        useReactiveVar: () => z.q,
        useRockstarEventDispatcher: () => ae,
        useRockstarEventSubscriber: () => se,
        useRockstarToken: () => ee,
        useRockstarTokenPing: () => te,
        useRockstarTokenReactive: () => Z,
        useRockstarWebSettings: () => Mt,
        useScApi: () => ne,
        useScAuthLinks: () => fe,
        useScAuthTpaLink: () => we,
        useScroll: () => ge,
        useScrollTracking: () => Le,
        useState: () => U,
        useWindowResize: () => Ee,
        webSettingsReactive: () => Rt,
        withAutoRouteTracking: () => Et,
        withGtmTracking: () => It,
        withMediaBasedProps: () => Ot,
        withReactiveState: () => $,
        withRockstarGraph: () => Ne,
        withTranslations: () => _t
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => ce,
        Provider: () => le,
        useNewswirePost: () => de
      });
      var r = n(3876),
        a = n(562),
        s = n.n(a),
        i = n(9489),
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
          const p = l?.apiHost ?? t,
            g = l?.authHost ?? n,
            m = l?.cdnBase ?? c,
            w = l?.clientId ?? o,
            f = d?.marketingAuthTLD ?? h,
            v = l?.scHost ?? s,
            b = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? a,
            host: v,
            hostname: i,
            cdnBase: m,
            key: u,
            clientId: w,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: g,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
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
        g = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: m
        } = p(),
        w = g(document.documentElement.lang),
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
            let h = `${m}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const p = {
                headers: u
              },
              g = s().all([p, t, n]),
              v = JSON.stringify({
                ...g,
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
            const k = await fetch(h, g),
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
        }, C = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, P = e => {
          let {
            key: t,
            value: n,
            domain: o = "default"
          } = e;
          return C()?.[o] || (C()[o] = {}), C()?.[o]?.[t] || (C()[o][t] = n), C()[o][t]
        };
      var L = n(2229),
        T = n(954);
      const R = E({
          context: (0, L.createContext)({}),
          key: "graphContextGet"
        }),
        U = () => (0, L.useContext)(R),
        M = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        j = () => (0, L.useContext)(M),
        A = e => {
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
            children: (0, T.jsx)(M.Provider, {
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
            return (0, T.jsx)(A, {
              state: n,
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        };
      var I = n(5110),
        O = n(1712),
        B = n(6140),
        _ = n(5714),
        D = n(1335);
      const F = k(),
        H = () => F;
      var z = n(4099);
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
        };
      var V = n(9445);
      const J = {
          token: (0, I.UT)("")
        },
        Y = E({
          context: (0, L.createContext)(J),
          key: "utilsTokenProvider"
        }),
        K = e => {
          let {
            children: t,
            token: n
          } = e;
          return (0, T.jsx)(Y.Provider, {
            value: {
              token: n
            },
            children: t
          })
        },
        Z = () => {
          const {
            token: e
          } = (0, L.useContext)(Y);
          return [e]
        },
        ee = () => {
          const [e] = Z();
          return (0, z.q)(e)
        },
        te = () => {
          const [e] = Z();
          return () => (async e => {
            let {
              token: t
            } = e;
            const {
              pingBearer: n
            } = p();
            try {
              const e = t?.() ?? "";
              if (e) {
                const {
                  exp: t = 0
                } = (0, V.s)(e) ?? {};
                if (t - (new Date).getTime() / 1e3 > 0 && e) return {
                  bearerToken: e
                }
              }
              const o = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                r = await o.json();
              return t(r.bearerToken ?? ""), r
            } catch (e) {
              return t(""), !1
            }
          })({
            token: e
          })
        },
        ne = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: o = {},
            query: r = null
          } = t;
          const a = te(),
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
        oe = "__RS_CUSTOM_EVENTS__",
        re = e => `rsCustomEvent:${e}`;
      window[oe] || (window[oe] = {});
      const ae = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = re(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[oe][n] || (window[oe][n] = {
              eventQueue: [],
              subscribers: []
            }), window[oe][n].eventQueue.push(o), window[oe][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, L.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        se = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, L.useEffect)((() => {
            const n = re(e);
            return window[oe][n] || (window[oe][n] = {
              eventQueue: [],
              subscribers: []
            }), window[oe][n].subscribers.push(t), window[oe][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[oe][n].subscribers = window[oe][n].subscribers.filter((e => e !== t)), 0 === window[oe][n].subscribers.length && delete window[oe][n]
            }
          }), [e, t]), (0, L.useMemo)((() => ({})), [])
        },
        ie = E({
          context: (0, L.createContext)(null),
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
          return (0, T.jsx)(ie.Provider, {
            value: t,
            children: n
          })
        },
        de = () => (0, L.useContext)(ie),
        ue = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, I.UT)(!1)
        }),
        he = e => ue(e),
        pe = E({
          context: (0, L.createContext)(null),
          key: "scrollContext"
        }),
        ge = () => (0, L.useContext)(pe),
        me = e => {
          let {
            children: t
          } = e;
          const [n, o] = (0, L.useState)(window.pageYOffset), [r, a] = (0, L.useState)(null), [s, i] = (0, L.useState)(!1), c = (0, z.q)(ue);
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
          }), [s, c]), (0, L.useMemo)((() => (0, T.jsx)(pe.Provider, {
            value: {
              freezeUserShouldSeeMore: c,
              pageYOffset: n,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: he,
              userShouldSeeMore: r
            },
            children: t
          })), [c, n, d, r])
        },
        we = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = p(), r = N(), a = g(r), s = ee();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(a), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(s), new URL(i, `https://${n}.rockstargames.com/`)
        },
        fe = e => {
          const {
            signup: t,
            login: n
          } = p(), o = N(), r = g(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        },
        ve = {
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
        be = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = ve;
          return Object.keys(ve).map((t => {
            const {
              min: o,
              max: r
            } = ve[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < ve.sm.min,
            isTablet: e < ve.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ke = E({
          context: (0, L.createContext)(be()),
          key: "resizeContext"
        }),
        {
          Consumer: xe
        } = ke,
        ye = (0, I.UT)(be()),
        Se = e => {
          let {
            children: t
          } = e;
          const n = (0, z.q)(ye);
          return (0, L.useEffect)((() => {
            const e = () => {
              ye(be())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, T.jsx)(ke.Provider, {
            value: n,
            children: t
          })
        },
        Ee = () => (0, L.useContext)(ke),
        Ce = () => {
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
        Pe = () => {
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
      n(7185), n(9421);
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
        Te = (e, t) => {
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
        Re = (0, L.createContext)((() => ({
          data: null
        }))),
        Ue = new Promise((e => {
          e()
        })),
        Me = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new O.D)
        },
        je = [() => Ue, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new B.R(Me))
        }],
        Ae = (0, L.createContext)((() => je)),
        $e = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, T.jsx)(Ae.Provider, {
            value: _.n,
            children: (0, T.jsx)(Re.Provider, {
              value: Te,
              children: t
            })
          })
        }),
        Ie = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Re)(e, t)),
        Oe = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)(Ae)(e));
      var Be = n(2896);
      var _e = n(4735),
        De = n(5403),
        Fe = n.n(De);
      const He = (0, n(7083).e)({
          sha256: r.sc
        }),
        ze = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? x(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, L.useState)(new O.D({
              typePolicies: n
            })),
            s = He.concat((e => {
              let {
                token: t
              } = e;
              return (0, Be.o)(((e, n) => {
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
            }).concat((e => (0, _e.$)({
              ...e,
              fetch: Fe()
            }))(r)));
          return new B.R({
            cache: a,
            link: s
          })
        },
        qe = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = ze({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, T.jsx)(K, {
            token: n?.token,
            children: (0, T.jsx)(wt.X, {
              client: r,
              children: (0, T.jsx)($e, {
                children: t
              })
            })
          })
        },
        Ne = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, I.UT)("");
          return function(t) {
            return (0, T.jsx)(qe, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ge = (0, I.UT)({}),
        Xe = "data-disallow-body-scroll",
        We = e => {
          const t = (0, z.q)(Ge),
            n = Object.values(t).some((e => !!e));
          return (0, L.useEffect)((() => {
            n ? document.documentElement.setAttribute(Xe, "true") : document.documentElement.removeAttribute(Xe)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Ge(e))({
              ...t,
              [e]: n
            })
          }
        },
        Qe = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        },
        Ve = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Je = e => {
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
        Ye = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Je({
            element: n
          }), Ke(n))
        },
        Ke = e => {
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
      class Ze {
        constructor(e, t, n, o) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = a
        }
      }
      const et = Object.freeze({
          pc: new Ze("pc", "PC Legacy", 8, "sc"),
          ps: new Ze("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Ze("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Ze("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Ze("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Ze("xbox", "Xbox", 4, "xbl"),
          xbox360: new Ze("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Ze("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Ze("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Ze("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Ze("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Ze("applestore", "App Store", 102, "applestore"),
          googleplay: new Ze("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Ze("app_store", "App Store", 102, "applestore"),
          googlePlay: new Ze("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Ze("pcalt", "PC Enhanced", 22, "sc")
        }),
        tt = Object.freeze(Object.values(et));

      function nt(e) {
        if (!e) return;
        if (e instanceof Ze) return e;
        const t = e.toString().toLowerCase();
        return tt.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const ot = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var rt = n(3521),
        at = n(2562);
      const st = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        it = (e, t) => {
          e && void 0 !== t && (0, rt.canStoreCookie)(e) && st(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,at.F)()}; path=/;`)
        },
        ct = e => e.keys().forEach(e),
        lt = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        dt = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return lt.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        ut = e => {
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
        ht = () => [et.xbox360.name, et.xboxone.name, et.ps3.name, et.ps4.name, et.pc.name],
        pt = () => [et.xboxsx.name, et.ps5.name, et.pcalt.name],
        gt = e => pt().includes(e),
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
      var wt = n(9561),
        ft = n(7006),
        vt = n(9065),
        bt = n.n(vt);
      const kt = (0, n(2779).A)(),
        xt = kt?.id,
        yt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        St = e => {
          const t = {
            ...e,
            environment: xt,
            display_type: yt
          };
          bt().dataLayer({
            dataLayer: t
          })
        },
        Et = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, X.useLocation)();
          return (0, L.useEffect)((() => {
            St({
              event: "trackPageview"
            })
          }), [n]), (0, T.jsx)(e, {
            ...t
          })
        })(e, t),
        Ct = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          bt().initialize(n)
        };
      var Pt = n(7307);
      const Lt = "rockstar-games-web";
      let Tt;
      try {
        const e = Pt.A.get(Lt) ?? "";
        Tt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Tt = {}
      }
      const Rt = (0, I.UT)(Tt),
        Ut = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Rt() ?? {}
          };
          return o[t] = n, null === n && delete o[t], Pt.A.set(Lt, JSON.stringify(o), {
            expires: 30,
            domain: (0, at.F)(),
            path: "/"
          }), Rt(o), o
        },
        Mt = () => ({
          webSettings: (0, z.q)(Rt),
          webSettingsReactive: Rt,
          mutateWebSettings: Ut
        }),
        jt = E({
          context: (0, L.createContext)({}),
          key: "gtmDatalayer"
        }),
        At = () => (0, L.useContext)(jt),
        $t = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = At() ?? {},
            r = (0, L.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, T.jsx)(jt.Provider, {
            value: r,
            children: t
          })
        },
        It = e => t => ((e, t) => (0, T.jsx)(e, {
          ...t,
          gtmTrack: e => {
            St(e)
          }
        }))(e, t),
        Ot = function(e) {
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
        Bt = ft.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        _t = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = N(),
                {
                  data: n
                } = Ie(Bt, {
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