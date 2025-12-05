try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f0cad465-c26a-4687-88f2-6e54c15d23b3", e._sentryDebugIdIdentifier = "sentry-dbid-f0cad465-c26a-4687-88f2-6e54c15d23b3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [5802], {
    5802: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => _.R,
        ApolloProvider: () => q.X,
        DataLayerProvider: () => jt,
        GraphOperationsProvider: () => Oe,
        InMemoryCache: () => I.D,
        Platform: () => et,
        Platforms: () => tt,
        ReactiveStateProvider: () => $,
        ResizeProvider: () => Se,
        RockstarGraphProvider: () => Ne,
        RockstarTokenProvider: () => Z,
        ScrollProvider: () => we,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Ke,
        downloadFile: () => mt,
        findPlatform: () => ot,
        generateTpaLink: () => lt,
        getAccentColor: () => b,
        getBase: () => y,
        getCdnPrefix: () => ht,
        getConfigForDomain: () => m,
        getCookieValueByName: () => st,
        getGen8Consoles: () => pt,
        getGen9Consoles: () => gt,
        getLanguageLabel: () => ft,
        getUriForGraphEnv: () => k,
        gql: () => Pt.J1,
        gtmInit: () => At,
        importAll: () => dt,
        isGen9Platform: () => wt,
        makeVar: () => B.UT,
        mutateWebSettings: () => _t,
        newswirePost: () => o,
        oneTrustInit: () => Qe,
        safeStyles: () => x,
        scrollToElement: () => Ye,
        setContextItem: () => E,
        setCookieValue: () => it,
        setMakeVarItem: () => P,
        supportedBrowsers: () => Je,
        toScLocaleString: () => p,
        track: () => St,
        useApolloClient: () => Fe,
        useBase: () => F,
        useBodyScrollable: () => We,
        useDataLayer: () => Rt,
        useHasReduceMotionPreference: () => Ce,
        useHasSaveDataPreference: () => Pe,
        useLocale: () => G,
        useMutateState: () => A,
        useMutation: () => Ie,
        useNewswirePost: () => ue,
        usePreloadImg: () => V,
        usePrevious: () => Q,
        useQuery: () => Be,
        useQueryParams: () => W,
        useReactiveVar: () => M.q,
        useRockstarEventDispatcher: () => se,
        useRockstarEventSubscriber: () => ie,
        useRockstarToken: () => te,
        useRockstarTokenPing: () => ne,
        useRockstarTokenReactive: () => ee,
        useRockstarWebSettings: () => qt,
        useScApi: () => oe,
        useScAuthLinks: () => fe,
        useScroll: () => ge,
        useScrollTracking: () => Le,
        useScrollVisibility: () => Te,
        useState: () => j,
        useWindowResize: () => Ee,
        webSettingsReactive: () => It,
        withAutoRouteTracking: () => Ut,
        withGtmTracking: () => Et,
        withMediaBasedProps: () => Ct,
        withReactiveState: () => O,
        withRockstarGraph: () => Ge,
        withTranslations: () => Tt
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
          queryManifest: a,
          scHost: s,
          hostname: i,
          cdnBase: c,
          key: u,
          marketingAuthTLD: h
        }) => {
          const m = l?.apiHost ?? e,
            p = l?.authHost ?? t,
            g = l?.cdnBase ?? c,
            w = l?.clientId ?? n,
            f = d?.marketingAuthTLD ?? h,
            v = l?.scHost ?? s,
            b = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? r,
            host: v,
            hostname: i,
            cdnBase: g,
            key: u,
            clientId: w,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: p,
            queryManifest: a,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${p}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${p}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${p}.rockstargames.com/create/?cid=${w}`,
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
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
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
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        m = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = h.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return h.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || h[0]
        },
        p = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: g
        } = m(),
        w = p(document.documentElement.lang),
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
            const m = {
                headers: u
              },
              p = s().all([m, t, n]),
              v = JSON.stringify({
                ...p,
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
            const y = await fetch(h, p),
              k = await y.json();
            return l && (f[b] = {
              response: k,
              loading: !1
            }), k
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", y = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, k = e => {
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
      var L = n(2295),
        T = n(2229),
        M = n(3452);
      const R = E({
          context: (0, T.createContext)({}),
          key: "graphContextGet"
        }),
        j = () => (0, T.useContext)(R),
        U = E({
          context: (0, T.createContext)({}),
          key: "graphContextSet"
        }),
        A = () => (0, T.useContext)(U),
        $ = ({
          children: e,
          state: t
        }) => {
          (0, M.q)(t);
          const n = (0, T.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, L.jsx)(R.Provider, {
            value: t(),
            children: (0, L.jsx)(U.Provider, {
              value: n,
              children: e
            })
          })
        },
        O = (e, {
          state: t
        }) => function(n) {
          return (0, L.jsx)($, {
            state: t,
            children: (0, L.jsx)(e, {
              ...n
            })
          })
        };
      var B = n(1823),
        I = n(9757),
        _ = n(5102),
        q = n(8718),
        D = n(3585),
        z = n(6277);
      const H = y(),
        F = () => H,
        N = (0, B.UT)(document.documentElement.lang),
        G = () => (0, M.q)(N),
        V = e => {
          const [t, n] = (0, T.useState)(null), [o, r] = (0, T.useState)(null), [a, s] = (0, T.useState)({});
          return (0, T.useLayoutEffect)(() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", () => {
              s({
                width: t.width,
                height: t.height
              }), t = null, o || n(!0)
            }), t.addEventListener("error", () => {
              t = null, o || (n(!1), r(!0))
            }), t.src = e, () => {
              o = !0, null !== t && (t.src = "")
            }
          }, [e]), [t, a]
        };
      var X = n(9623);
      const W = () => {
          const {
            search: e
          } = (0, X.useLocation)();
          return new URLSearchParams(e)
        },
        Q = e => {
          const t = (0, T.useRef)();
          return (0, T.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        };
      var J = n(8128);
      const Y = {
          token: (0, B.UT)("")
        },
        K = E({
          context: (0, T.createContext)(Y),
          key: "utilsTokenProvider"
        }),
        Z = ({
          children: e,
          token: t
        }) => (0, L.jsx)(K.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        ee = () => {
          const {
            token: e
          } = (0, T.useContext)(K);
          return [e]
        },
        te = () => {
          const [e] = ee();
          return (0, M.q)(e)
        },
        ne = () => {
          const [e] = ee();
          return () => (async ({
            token: e
          }) => {
            const {
              pingBearer: t
            } = m();
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
            } catch {
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
            [a, s] = (0, T.useState)(null),
            [i, c] = (0, T.useState)(!1),
            [l, d] = (0, T.useState)(null),
            u = (0, T.useCallback)(async (t = {}, a = null) => {
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
            }, [e, n, o]);
          return (0, T.useEffect)(() => {
            null === a && null === l && !i && t && u()
          }, [t, a, l, i, u]), {
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
            }), window[re][n].eventQueue.push(o), window[re][n].subscribers.forEach(e => {
              e(o.detail)
            })
          };
          return (0, T.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        ie = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, T.useEffect)(() => {
            const n = ae(e);
            return window[re][n] || (window[re][n] = {
              eventQueue: [],
              subscribers: []
            }), window[re][n].subscribers.push(t), window[re][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[re][n].subscribers = window[re][n].subscribers.filter(e => e !== t), 0 === window[re][n].subscribers.length && delete window[re][n]
            }
          }, [e, t]), (0, T.useMemo)(() => ({}), [])
        },
        ce = E({
          context: (0, T.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: le
        } = ce,
        de = ({
          article: e,
          children: t
        }) => (0, L.jsx)(ce.Provider, {
          value: e,
          children: t
        }),
        ue = () => (0, T.useContext)(ce),
        he = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, B.UT)(!1)
        }),
        me = e => he(e),
        pe = E({
          context: (0, T.createContext)(null),
          key: "scrollContext"
        }),
        ge = () => (0, T.useContext)(pe),
        we = ({
          children: e
        }) => {
          const [t, n] = (0, T.useState)(window.pageYOffset), [o, r] = (0, T.useState)(null), [a, s] = (0, T.useState)(!1), i = (0, M.q)(he);
          let c;
          const l = () => {
            s(!0), clearTimeout(c), c = setTimeout(() => {
              s(!1)
            }, 2e3)
          };
          return (0, T.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), a || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [a, i]), (0, T.useMemo)(() => (0, L.jsx)(pe.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: l,
              setFreezeUserShouldSeeMore: me,
              userShouldSeeMore: o
            },
            children: e
          }), [i, t, l, o])
        },
        fe = e => {
          const {
            signup: t,
            login: n
          } = m(), o = G(), r = p(o);
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
          return Object.keys(ve).map(t => {
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
          }), {
            isMobile: e < ve.sm.min,
            isTablet: e < ve.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ye = E({
          context: (0, T.createContext)(be()),
          key: "resizeContext"
        }),
        {
          Consumer: ke
        } = ye,
        xe = (0, B.UT)(be()),
        Se = ({
          children: e
        }) => {
          const t = (0, M.q)(xe);
          return (0, T.useEffect)(() => {
            const e = () => {
              xe(be())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, L.jsx)(ye.Provider, {
            value: t,
            children: e
          })
        },
        Ee = () => (0, T.useContext)(ye),
        Ce = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        Pe = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)(() => {
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
          }, []), e
        };
      n(5906), n(1878);
      const Le = e => {
          const [t, n] = (0, T.useState)(!1), o = (0, T.useRef)(null);
          return (0, T.useEffect)(() => {
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
          }, [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        Te = (e = 0) => {
          const t = (0, T.useRef)(null),
            [n, o] = (0, T.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                a = window.innerHeight || document.documentElement.clientHeight,
                s = (Math.min(r.bottom, a) - Math.max(r.top, 0)) / r.height;
              o(s > e)
            };
          return (0, T.useEffect)(() => {
            r();
            const e = () => requestAnimationFrame(r);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), window.addEventListener("resize", e), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
            }
          }, [e]), {
            ref: t,
            inView: n
          }
        },
        Me = (e, t) => {
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
          return (0, T.useEffect)(() => {
            if (r && o.setTitleDataPath) {
              const e = c().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, T.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, T.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }, [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        Re = (0, T.createContext)(() => ({
          data: null
        })),
        je = new Promise(e => {
          e()
        }),
        Ue = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new I.D)
        },
        Ae = [() => je, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new _.R(Ue))
        }],
        $e = (0, T.createContext)(() => Ae),
        Oe = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, L.jsx)($e.Provider, {
          value: D.n,
          children: (0, L.jsx)(Re.Provider, {
            value: Me,
            children: e
          })
        })),
        Be = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, T.useContext)(Re)(e, t)),
        Ie = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, T.useContext)($e)(e));
      var _e = n(6347);
      var qe = n(3605),
        De = n(1162),
        ze = n.n(De);
      const He = (0, n(2944).e)({
          sha256: r.sc
        }),
        Fe = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? k(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, T.useState)(new I.D({
              typePolicies: t
            })),
            a = He.concat((({
              token: e
            }) => (0, _e.o)((t, {
              headers: n
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${o}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, qe.$)({
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
          const o = Fe({
            graphOptions: t,
            typePolicies: n ?? {}
          });
          return (0, L.jsx)(Z, {
            token: t?.token,
            children: (0, L.jsx)(q.X, {
              client: o,
              children: (0, L.jsx)(Oe, {
                children: e
              })
            })
          })
        },
        Ge = (e, {
          env: t = "prod"
        }) => {
          const n = (0, B.UT)("");
          return function(o) {
            return (0, L.jsx)(Ne, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, L.jsx)(e, {
                ...o
              })
            })
          }
        },
        Ve = (0, B.UT)({}),
        Xe = "data-disallow-body-scroll",
        We = e => {
          const t = (0, M.q)(Ve),
            n = Object.values(t).some(e => !!e);
          return (0, T.useEffect)(() => {
            n ? document.documentElement.setAttribute(Xe, "true") : document.documentElement.removeAttribute(Xe)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Ve(e))({
              ...t,
              [e]: n
            })
          }
        },
        Qe = ({
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
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
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
              const e = [...n].find(e => !e?.hasAttribute("disabled"));
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
        return nt.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var rt = n(6306);
      const at = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        st = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
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
        } = m(), s = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return i.searchParams.append("cid", a), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && i.searchParams.append("accessToken", s.bearerToken), i
      }, dt = e => e.keys().forEach(e), ut = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ht = (e = !0) => ut.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, mt = e => {
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
        }).then(e => e.arrayBuffer()).then(e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            o = document.createElement("a");
          o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }).catch(e => {
          console.log(e)
        })
      }, pt = () => [tt.xbox360.name, tt.xboxone.name, tt.ps3.name, tt.ps4.name, tt.pc.name], gt = () => [tt.xboxsx.name, tt.ps5.name, tt.pcalt.name], wt = e => gt().includes(e), ft = e => {
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
      const yt = (0, n(9867).A)(),
        kt = yt?.id,
        xt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        St = e => {
          const t = {
            ...e,
            environment: kt,
            display_type: xt
          };
          bt().dataLayer({
            dataLayer: t
          })
        },
        Et = e => t => ((e, t) => (0, L.jsx)(e, {
          ...t,
          gtmTrack: e => {
            St(e)
          }
        }))(e, t),
        Ct = (e, t = 250) => n => ((e, t, n) => {
          const [o, r] = (0, T.useState)(t), a = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => a(e));
              t = {
                ...t,
                items: e
              }
            }
            const o = t?.mediaQueryList;
            return o?.length ? (o.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
              t = {
                ...t,
                ...e
              }
            }), t) : t
          };
          return (0, T.useEffect)(() => {
            const e = c().debounce(() => {
              r(a(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, L.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Pt = n(445);
      const Lt = Pt.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Tt = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = G(),
              {
                data: n
              } = Be(Lt, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, L.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t),
        Mt = E({
          context: (0, T.createContext)({}),
          key: "gtmDatalayer"
        }),
        Rt = () => (0, T.useContext)(Mt),
        jt = ({
          children: e,
          ...t
        }) => {
          const n = Rt() ?? {},
            o = (0, T.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, L.jsx)(Mt.Provider, {
            value: o,
            children: e
          })
        },
        Ut = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, X.useLocation)();
          return (0, T.useEffect)(() => {
            St({
              event: "trackPageview"
            })
          }, [n]), (0, L.jsx)(e, {
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
      const Ot = "rockstar-games-web";
      let Bt;
      try {
        const e = $t.A.get(Ot) ?? "";
        Bt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Bt = {}
      }
      const It = (0, B.UT)(Bt),
        _t = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...It() ?? {}
          };
          return n[e] = t, null === t && delete n[e], $t.A.set(Ot, JSON.stringify(n), {
            expires: 30,
            domain: at(),
            path: "/"
          }), It(n), n
        },
        qt = () => ({
          webSettings: (0, M.q)(It),
          webSettingsReactive: It,
          mutateWebSettings: _t
        })
    }
  }
]);