! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "191ab9d6-7111-4956-96dd-51b6137fc586", e._sentryDebugIdIdentifier = "sentry-dbid-191ab9d6-7111-4956-96dd-51b6137fc586")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6682], {
    41793: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    43522: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var o = n(82543),
        r = n(7393),
        a = n.n(r),
        s = n(16188),
        i = n.n(s),
        c = n(82014),
        l = n(39151);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, m = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: s,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: m = null
          } = await (s?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let w = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (w += `?${new URLSearchParams(r)}`), !m && c) return null;
          m && (g.Authorization = `Bearer ${m}`);
          const p = {
              headers: g
            },
            f = a().all([p, t, n]),
            v = JSON.stringify({
              ...f,
              url: w
            }),
            b = await (0, o.sc)(v);
          if (l) {
            if (h[b]?.response) return h[b].response;
            if (h[b]?.loading) return {
              error: null,
              result: null
            };
            h[b] = {
              loading: !0
            }
          }
          const k = await fetch(w, f),
            x = await k.json();
          return l && (h[b] = {
            response: x,
            loading: !1
          }), x
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    46710: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const o = () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }
    },
    82014: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        a = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: a,
            cms: s,
            graphEnv: i,
            scHost: c,
            hostname: l,
            cdnBase: d,
            key: u,
            marketingAuthTLD: h
          } = e;
          const m = o?.apiHost ?? t,
            g = o?.authHost ?? n,
            w = o?.cdnBase ?? d,
            p = o?.clientId ?? a,
            f = r?.marketingAuthTLD ?? h,
            v = o?.scHost ?? c,
            b = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? i,
            host: v,
            hostname: l,
            cdnBase: w,
            key: u,
            clientId: p,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: g,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
          }
        },
        s = [a({
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
        }), a({
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
        i = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = s.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return s.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || s[0]
        }
    },
    4827: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        r = e => {
          let {
            context: t,
            key: n
          } = e;
          return o()?.[n] || (o()[n] = t), o()[n]
        }
    },
    52399: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        r = e => {
          let {
            key: t,
            value: n,
            domain: r = "default"
          } = e;
          return o()?.[r] || (o()[r] = {}), o()?.[r]?.[t] || (o()[r][t] = n), o()[r][t]
        }
    },
    39151: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    40296: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        bn: () => L,
        ri: () => s,
        vx: () => E,
        sb: () => C,
        Ym: () => i.A,
        CA: () => k.useNewswirePost,
        OG: () => c,
        ZC: () => u,
        sq: () => d,
        OH: () => v,
        zP: () => b,
        Cb: () => g,
        N6: () => S,
        Br: () => y,
        GA: () => R
      });
      const o = (0, n(46710).A)(),
        r = () => o;
      var a = n(62229);
      const s = (e, t) => {
        const [n, o] = (0, a.useState)(0);
        return (0, a.useEffect)((() => {
          if (e.current) {
            const {
              current: n
            } = e, r = n.getBoundingClientRect(), {
              width: a
            } = r;
            let s = a;
            if (!0 === t) {
              const e = window.getComputedStyle(n);
              s += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
            }
            o(s)
          }
        }), [e]), n
      };
      var i = n(96232);
      const c = e => {
        const [t, n] = (0, a.useState)(null), [o, r] = (0, a.useState)(null), [s, i] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
          let t = new Image,
            o = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, o || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, o || (n(!1), r(!0))
          })), t.src = e, () => {
            o = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, s]
      };
      var l = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, l.useLocation)();
          return new URLSearchParams(e)
        },
        u = e => {
          const t = (0, a.useRef)();
          return (0, a.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var h = n(6682),
        m = n(43522);
      const g = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const s = (0, h.Es)(),
          [i, c] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [u, g] = (0, a.useState)(null),
          w = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: a = {}
              } = t;
              g(null), c(null), d(!0);
              const i = await (0, m.A)(n ?? e, {
                pingBearer: s,
                fetchOptions: o,
                finalFetchOptions: a,
                query: r
              });
              return i?.status || g(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              g(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, a.useEffect)((() => {
          null === i && null === u && !l && n && w()
        }), [n, i, u, l, w]), {
          data: i,
          error: u,
          loading: l,
          fetch: w
        }
      };
      var w = n(82014);
      const p = "__RS_CUSTOM_EVENTS__",
        f = e => `rsCustomEvent:${e}`;
      window[p] || (window[p] = {});
      const v = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = f(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[p][n] || (window[p][n] = {
              eventQueue: [],
              subscribers: []
            }), window[p][n].eventQueue.push(o), window[p][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        b = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = f(e);
            return window[p][n] || (window[p][n] = {
              eventQueue: [],
              subscribers: []
            }), window[p][n].subscribers.push(t), window[p][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[p][n].subscribers = window[p][n].subscribers.filter((e => e !== t)), 0 === window[p][n].subscribers.length && delete window[p][n]
            }
          }), [e, t]), (0, a.useMemo)((() => ({})), [])
        };
      var k = n(2833),
        x = (n(20025), n(39151));
      const y = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, w.A)(), r = (0, i.A)(), a = (0, x.t)(r), s = (0, h.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(a), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(s), new URL(c, `https://${n}.rockstargames.com/`)
        },
        S = e => {
          const {
            signup: t,
            login: n
          } = (0, w.A)(), o = (0, i.A)(), r = (0, x.t)(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        };
      n(42582);
      const E = () => {
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
        C = () => {
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
      var A = n(73002),
        P = n(12158);
      const L = () => {
          const [e, t] = (0, a.useState)(!1), {
            deviceMemory: n
          } = (0, A.XB)(), {
            effectiveConnectionType: o
          } = (0, A.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, A.xV)(), {
            saveData: s
          } = (0, A.zp)(), i = E(), c = () => {
            const a = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (P.n8 || P.lT || P.w || P.UX) return !1;
              const t = "Safari" === P.C0,
                a = "Firefox" === P.C0,
                c = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                l = r && r >= 4,
                d = n && n >= 4;
              return !(e(!s) || e(c) || e(l) || !t && !a && e(d))
            })();
            a !== e && t(a)
          };
          return (0, a.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, o, e, r, s, i]), e
        },
        R = e => {
          const [t, n] = (0, a.useState)(!1), o = (0, a.useRef)(null);
          return (0, a.useEffect)((() => {
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
        }
    },
    96232: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var o = n(28567),
        r = n(95236);
      const a = (0, o.UT)(document.documentElement.lang),
        s = () => (0, r.q)(a)
    },
    48267: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => S.R,
        ApolloProvider: () => ke.X,
        DataLayerProvider: () => Fe,
        GraphOperationsProvider: () => j,
        InMemoryCache: () => y.D,
        Platform: () => oe,
        Platforms: () => re,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => He.uU,
        RockstarGraphProvider: () => G,
        RockstarTokenProvider: () => $.ec,
        ScrollProvider: () => Ve.N2,
        classList: () => ie,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => te,
        downloadFile: () => we,
        findPlatform: () => se,
        getAccentColor: () => r,
        getBase: () => a.A,
        getCdnPrefix: () => ge,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => be,
        getUriForGraphEnv: () => i,
        gql: () => xe.J1,
        gtmInit: () => Ue,
        importAll: () => he,
        isGen9Platform: () => ve,
        makeVar: () => x.UT,
        mutateWebSettings: () => $e,
        newswirePost: () => K,
        oneTrustInit: () => J,
        safeStyles: () => d,
        scrollToElement: () => ee,
        setContextItem: () => u.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => ye.t,
        track: () => Le,
        useApolloClient: () => q,
        useBase: () => A.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => De,
        useHasReduceMotionPreference: () => A.vx,
        useHasSaveDataPreference: () => A.sb,
        useLocale: () => A.Ym,
        useMutateState: () => v,
        useMutation: () => O,
        useNewswirePost: () => A.CA,
        usePreloadImg: () => A.OG,
        usePrevious: () => A.ZC,
        useQuery: () => I,
        useQueryParams: () => A.sq,
        useReactiveVar: () => V.q,
        useRockstarEventDispatcher: () => A.OH,
        useRockstarEventSubscriber: () => A.zP,
        useRockstarToken: () => $.e9,
        useRockstarTokenPing: () => $.Es,
        useRockstarTokenReactive: () => $.bD,
        useRockstarWebSettings: () => Be,
        useScApi: () => A.Cb,
        useScAuthLinks: () => A.N6,
        useScAuthTpaLink: () => A.Br,
        useScroll: () => Ve.Ll,
        useScrollTracking: () => A.GA,
        useState: () => p,
        useWindowResize: () => He.G4,
        webSettingsReactive: () => Oe,
        withAutoRouteTracking: () => Te,
        withGtmTracking: () => ze,
        withMediaBasedProps: () => Ne,
        withReactiveState: () => k,
        withRockstarGraph: () => X,
        withTranslations: () => Xe
      });
      var o = n(43522);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = n(46710),
        s = n(82014);
      const i = e => {
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
      };
      var c = n(16188),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(4827),
        h = n(52399),
        m = n(62229),
        g = n(73855);
      const w = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        p = () => (0, m.useContext)(w),
        f = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, m.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, V.q)(n);
          const o = (0, m.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, g.jsx)(w.Provider, {
            value: n(),
            children: (0, g.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        k = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, g.jsx)(b, {
              state: n,
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        };
      var x = n(28567),
        y = n(34864),
        S = n(23481),
        E = n(31023),
        C = n(80254),
        A = n(40296);
      const P = (e, t) => {
          const n = (0, A.Ym)(),
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
            } = (0, C.IT)(e, o);
          return (0, m.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, m.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [a]), (0, m.useEffect)((() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        L = (0, m.createContext)((() => ({
          data: null
        }))),
        R = new Promise((e => {
          e()
        })),
        T = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new y.D)
        },
        U = [() => R, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new S.R(T))
        }],
        M = (0, m.createContext)((() => U)),
        j = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(M.Provider, {
            value: E.n,
            children: (0, g.jsx)(L.Provider, {
              value: P,
              children: t
            })
          })
        }),
        I = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, m.useContext)(L)(e, t)),
        O = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, m.useContext)(M)(e));
      var $ = n(6682),
        B = n(70611);
      var _ = n(12740),
        D = n(17538),
        F = n.n(D);
      var H = n(63912),
        z = n(82543);
      const N = (0, H.e)({
          sha256: z.sc
        }),
        q = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, m.useState)(new y.D({
              typePolicies: n
            })),
            s = N.concat((e => {
              let {
                token: t
              } = e;
              return (0, B.o)(((e, n) => {
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
            }).concat((e => (0, _.$)({
              ...e,
              fetch: F()
            }))(r)));
          return new S.R({
            cache: a,
            link: s
          })
        },
        G = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = q({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)($.ec, {
            token: n?.token,
            children: (0, g.jsx)(ke.X, {
              client: r,
              children: (0, g.jsx)(j, {
                children: t
              })
            })
          })
        },
        X = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, x.UT)("");
          return function(t) {
            return (0, g.jsx)(G, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        };
      var V = n(95236);
      const W = (0, x.UT)({}),
        Q = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, V.q)(W),
            n = Object.values(t).some((e => !!e));
          return (0, m.useEffect)((() => {
            n ? document.documentElement.setAttribute(Q, "true") : document.documentElement.removeAttribute(Q)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => W(e))({
              ...t,
              [e]: n
            })
          }
        },
        J = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        };
      var K = n(2833);
      const Z = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        ee = e => {
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
        te = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (ee({
            element: n
          }), ne(n))
        },
        ne = e => {
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
      class oe {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const re = Object.freeze({
          pc: new oe("pc", "PC", 8),
          ps: new oe("ps", "PlayStation", 3),
          ps3: new oe("ps3", "PlayStation 3", 2),
          ps4: new oe("ps4", "PlayStation 4", 11),
          ps5: new oe("ps5", "PlayStation 5", 20),
          xbox: new oe("xbox", "Xbox", 4),
          xbox360: new oe("xbox360", "Xbox 360", 1),
          xboxone: new oe("xboxone", "Xbox One", 12),
          xboxsx: new oe("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new oe("switch", "Nintendo Switch™", 18),
          nintendoswitch: new oe("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new oe("applestore", "App Store", 102),
          googleplay: new oe("googleplay", "Google Play", 1023),
          appStore: new oe("app_store", "App Store", 102),
          googlePlay: new oe("ggle_play", "Google Play", 1023),
          pcalt: new oe("pcalt", "PC Enhanced", 22)
        }),
        ae = Object.freeze(Object.values(re));

      function se(e) {
        if (!e) return;
        if (e instanceof oe) return e;
        const t = e.toString().toLowerCase();
        return ae.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const ie = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var ce = n(31674),
        le = n(41793);
      const de = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        ue = (e, t) => {
          e && void 0 !== t && (0, ce.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,le.F)()}; path=/;`)
        },
        he = e => e.keys().forEach(e),
        me = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ge = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return me.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        we = e => {
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
        pe = () => [re.xbox360.name, re.xboxone.name, re.ps3.name, re.ps4.name, re.pc.name],
        fe = () => [re.xboxsx.name, re.ps5.name, re.pcalt.name],
        ve = e => fe().includes(e),
        be = e => {
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
      var ke = n(23302),
        xe = n(93273),
        ye = n(39151),
        Se = n(92160),
        Ee = n.n(Se);
      const Ce = (0, n(30062).A)(),
        Ae = Ce?.id,
        Pe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Le = e => {
          const t = {
            ...e,
            environment: Ae,
            display_type: Pe
          };
          Ee().dataLayer({
            dataLayer: t
          })
        };
      var Re = n(9623);
      const Te = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Re.useLocation)();
          return (0, m.useEffect)((() => {
            Le({
              event: "trackPageview"
            })
          }), [n]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        Ue = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Ee().initialize(n)
        };
      var Me = n(37307);
      const je = "rockstar-games-web";
      let Ie;
      try {
        const e = Me.A.get(je) ?? "";
        Ie = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ie = {}
      }
      const Oe = (0, x.UT)(Ie),
        $e = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Oe() ?? {}
          };
          return o[t] = n, null === n && delete o[t], Me.A.set(je, JSON.stringify(o), {
            expires: 30,
            domain: (0, le.F)(),
            path: "/"
          }), Oe(o), o
        },
        Be = () => ({
          webSettings: (0, V.q)(Oe),
          webSettingsReactive: Oe,
          mutateWebSettings: $e
        }),
        _e = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        De = () => (0, m.useContext)(_e),
        Fe = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = De() ?? {},
            r = (0, m.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, g.jsx)(_e.Provider, {
            value: r,
            children: t
          })
        };
      var He = n(42582);
      const ze = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Le(e)
          }
        }))(e, t),
        Ne = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, m.useState)(t), a = e => {
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
            return (0, m.useEffect)((() => {
              const e = l().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, g.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var qe = n(96232);
      const Ge = xe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Xe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, qe.A)(),
                {
                  data: n
                } = I(Ge, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, g.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var Ve = n(20025)
    },
    6682: (e, t, n) => {
      n.d(t, {
        ec: () => h,
        e9: () => g,
        Es: () => w,
        bD: () => m
      });
      var o = n(62229),
        r = n(28567),
        a = n(4827),
        s = n(37240),
        i = n(82014);
      var c = n(48267),
        l = n(73855);
      const d = {
          token: (0, r.UT)("")
        },
        u = (0, a.A)({
          context: (0, o.createContext)(d),
          key: "utilsTokenProvider"
        }),
        h = e => {
          let {
            children: t,
            token: n
          } = e;
          return (0, l.jsx)(u.Provider, {
            value: {
              token: n
            },
            children: t
          })
        },
        m = () => {
          const {
            token: e
          } = (0, o.useContext)(u);
          return [e]
        },
        g = () => {
          const [e] = m();
          return (0, c.useReactiveVar)(e)
        },
        w = () => {
          const [e] = m();
          return () => (async e => {
            let {
              token: t
            } = e;
            const {
              pingBearer: n
            } = (0, i.A)();
            try {
              const e = t?.() ?? "";
              if (e) {
                const {
                  exp: t = 0
                } = (0, s.s)(e) ?? {};
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
        }
    },
    2833: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(62229),
        r = n(4827),
        a = n(73855);
      const s = (0, r.A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: i
        } = s,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, a.jsx)(s.Provider, {
            value: t,
            children: n
          })
        },
        l = () => (0, o.useContext)(s)
    },
    42582: (e, t, n) => {
      n.d(t, {
        G4: () => g,
        uU: () => m
      });
      var o = n(62229),
        r = n(28567),
        a = n(95236),
        s = n(4827),
        i = n(73855);
      const c = {
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
        l = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = c;
          return Object.keys(c).map((t => {
            const {
              min: o,
              max: r
            } = c[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < c.sm.min,
            isTablet: e < c.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        d = (0, s.A)({
          context: (0, o.createContext)(l()),
          key: "resizeContext"
        }),
        {
          Consumer: u
        } = d,
        h = (0, r.UT)(l()),
        m = e => {
          let {
            children: t
          } = e;
          const n = (0, a.q)(h);
          return (0, o.useEffect)((() => {
            const e = () => {
              h(l())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.jsx)(d.Provider, {
            value: n,
            children: t
          })
        },
        g = () => (0, o.useContext)(d)
    },
    20025: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => m
      });
      var o = n(62229),
        r = n(28567),
        a = n(95236),
        s = n(4827),
        i = n(52399),
        c = n(73855);
      const l = (0, i.A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, r.UT)(!1)
        }),
        d = e => l(e),
        u = (0, s.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        h = () => (0, o.useContext)(u),
        m = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [s, i] = (0, o.useState)(null), [h, m] = (0, o.useState)(!1), g = (0, a.q)(l);
          let w;
          const p = () => {
            m(!0), clearTimeout(w), w = setTimeout((() => {
              m(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (g) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, g]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: g,
              pageYOffset: n,
              pauseUserShouldSeeMore: p,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: s
            },
            children: t
          })), [g, n, p, s])
        }
    }
  }
]);