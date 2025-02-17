! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8583e9a4-74c0-4137-b9da-234fc6fa75a4", e._sentryDebugIdIdentifier = "sentry-dbid-8583e9a4-74c0-4137-b9da-234fc6fa75a4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [4204], {
    7415: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    5168: (e, t, n) => {
      n.d(t, {
        A: () => g
      });
      var o = n(6621),
        r = n(4751),
        a = n.n(r),
        s = n(4282),
        i = n.n(s),
        c = n(1012),
        l = n(7453);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, g = async function(e) {
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
            bearerToken: g = null
          } = await (s?.()) ?? {}, w = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let m = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (m += `?${new URLSearchParams(r)}`), !g && c) return null;
          g && (w.Authorization = `Bearer ${g}`);
          const p = {
              headers: w
            },
            f = a().all([p, t, n]),
            v = JSON.stringify({
              ...f,
              url: m
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
          const x = await fetch(m, f),
            k = await x.json();
          return l && (h[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    3976: (e, t, n) => {
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
    1012: (e, t, n) => {
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
            graphEnv: s,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const h = o?.apiHost ?? t,
            g = o?.authHost ?? n,
            w = o?.cdnBase ?? l,
            m = o?.clientId ?? a,
            p = r?.marketingAuthTLD ?? u,
            f = o?.scHost ?? i,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? s,
            host: f,
            hostname: c,
            cdnBase: w,
            key: d,
            clientId: m,
            authHost: g,
            login: `https://${g}.rockstargames.com/connect/authorize/${m}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${m}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${m}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`
          }
        },
        s = [a({
          key: "prod",
          clientId: "rsg",
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
    7277: (e, t, n) => {
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
    7273: (e, t, n) => {
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
    7453: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    7696: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        bn: () => E,
        vx: () => b,
        sb: () => x,
        Ym: () => s.A,
        CA: () => v.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => l,
        OH: () => p,
        zP: () => f,
        Cb: () => g,
        GA: () => S
      });
      const o = (0, n(3976).A)(),
        r = () => o;
      var a = n(2229),
        s = n(842);
      const i = e => {
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
      var c = n(9623);
      const l = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, a.useRef)();
          return (0, a.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var u = n(4204),
        h = n(5168);
      const g = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const s = (0, u.Es)(),
          [i, c] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [g, w] = (0, a.useState)(null),
          m = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: a = {}
              } = t;
              w(null), c(null), d(!0);
              const i = await (0, h.A)(n ?? e, {
                pingBearer: s,
                fetchOptions: o,
                finalFetchOptions: a,
                query: r
              });
              return i?.status || w(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              w(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, a.useEffect)((() => {
          null === i && null === g && !l && n && m()
        }), [n, i, g, l, m]), {
          data: i,
          error: g,
          loading: l,
          fetch: m
        }
      };
      n(1012);
      const w = "__RS_CUSTOM_EVENTS__",
        m = e => `rsCustomEvent:${e}`;
      window[w] || (window[w] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = m(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].eventQueue.push(o), window[w][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        f = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = m(e);
            return window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].subscribers.push(t), window[w][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[w][n].subscribers = window[w][n].subscribers.filter((e => e !== t)), 0 === window[w][n].subscribers.length && delete window[w][n]
            }
          }), [e, t]), (0, a.useMemo)((() => ({})), [])
        };
      var v = n(7987);
      n(7059), n(28);
      const b = () => {
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
        x = () => {
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
      var k = n(7599),
        y = n(1544);
      const E = () => {
          const [e, t] = (0, a.useState)(!1), {
            deviceMemory: n
          } = (0, k.XB)(), {
            effectiveConnectionType: o
          } = (0, k.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, k.xV)(), {
            saveData: s
          } = (0, k.zp)(), i = b(), c = () => {
            const a = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (y.n8 || y.lT || y.w || y.UX) return !1;
              const t = "Safari" === y.C0,
                a = "Firefox" === y.C0,
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
        S = e => {
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
    842: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var o = n(2753),
        r = n(9094);
      const a = (0, o.UT)(document.documentElement.lang),
        s = () => (0, r.q)(a)
    },
    4602: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => xe.X,
        DataLayerProvider: () => Fe,
        GraphOperationsProvider: () => O,
        InMemoryCache: () => y.D,
        Platform: () => oe,
        Platforms: () => re,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => ze.uU,
        RockstarGraphProvider: () => G,
        RockstarTokenProvider: () => _.ec,
        ScrollProvider: () => Ve.N2,
        classList: () => ie,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => te,
        downloadFile: () => me,
        findPlatform: () => se,
        getAccentColor: () => r,
        getBase: () => a.A,
        getCdnPrefix: () => we,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => be,
        getUriForGraphEnv: () => i,
        gql: () => ke.J1,
        gtmInit: () => Me,
        importAll: () => he,
        isGen9Platform: () => ve,
        makeVar: () => k.UT,
        mutateWebSettings: () => _e,
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
        useApolloClient: () => N,
        useBase: () => C.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => Ie,
        useHasReduceMotionPreference: () => C.vx,
        useHasSaveDataPreference: () => C.sb,
        useLocale: () => C.Ym,
        useMutateState: () => v,
        useMutation: () => B,
        useNewswirePost: () => C.CA,
        usePreloadImg: () => C.OG,
        usePrevious: () => C.ZC,
        useQuery: () => U,
        useQueryParams: () => C.sq,
        useReactiveVar: () => V.q,
        useRockstarEventDispatcher: () => C.OH,
        useRockstarEventSubscriber: () => C.zP,
        useRockstarToken: () => _.e9,
        useRockstarTokenPing: () => _.Es,
        useRockstarTokenReactive: () => _.bD,
        useRockstarWebSettings: () => De,
        useScApi: () => C.Cb,
        useScroll: () => Ve.Ll,
        useScrollTracking: () => C.GA,
        useState: () => p,
        useWindowResize: () => ze.G4,
        webSettingsReactive: () => Be,
        withAutoRouteTracking: () => Re,
        withGtmTracking: () => He,
        withMediaBasedProps: () => qe,
        withReactiveState: () => x,
        withRockstarGraph: () => X,
        withTranslations: () => Xe
      });
      var o = n(5168);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = n(3976),
        s = n(1012);
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
      var c = n(4282),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(7277),
        h = n(7273),
        g = n(2229),
        w = n(1029);
      const m = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextGet"
        }),
        p = () => (0, g.useContext)(m),
        f = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, g.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, V.q)(n);
          const o = (0, g.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, w.jsx)(m.Provider, {
            value: n(),
            children: (0, w.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        x = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, w.jsx)(b, {
              state: n,
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        };
      var k = n(2753),
        y = n(7711),
        E = n(9937),
        S = n(7897),
        P = n(9030),
        C = n(7696);
      const A = (e, t) => {
          const n = (0, C.Ym)(),
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
            } = (0, P.IT)(e, o);
          return (0, g.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, g.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [a]), (0, g.useEffect)((() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        L = (0, g.createContext)((() => ({
          data: null
        }))),
        T = new Promise((e => {
          e()
        })),
        R = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new y.D)
        },
        M = [() => T, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new E.R(R))
        }],
        j = (0, g.createContext)((() => M)),
        O = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, w.jsx)(j.Provider, {
            value: S.n,
            children: (0, w.jsx)(L.Provider, {
              value: A,
              children: t
            })
          })
        }),
        U = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, g.useContext)(L)(e, t)),
        B = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, g.useContext)(j)(e));
      var _ = n(4204),
        D = n(5197);
      var $ = n(3556),
        I = n(2600),
        F = n.n(I);
      var z = n(6162),
        H = n(6621);
      const q = (0, z.e)({
          sha256: H.sc
        }),
        N = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, g.useState)(new y.D({
              typePolicies: n
            })),
            s = q.concat((e => {
              let {
                token: t
              } = e;
              return (0, D.o)(((e, n) => {
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
            }).concat((e => (0, $.$)({
              ...e,
              fetch: F()
            }))(r)));
          return new E.R({
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
          const r = N({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, w.jsx)(_.ec, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, w.jsx)(xe.X, {
              client: r,
              children: (0, w.jsx)(O, {
                children: t
              })
            })
          })
        },
        X = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, k.UT)(null),
            r = (0, k.UT)(null);
          return function(t) {
            return (0, w.jsx)(G, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPingExpires: r
              },
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        };
      var V = n(9094);
      const W = (0, k.UT)({}),
        Q = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, V.q)(W),
            n = Object.values(t).some((e => !!e));
          return (0, g.useEffect)((() => {
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
      var K = n(7987);
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
          googlePlay: new oe("ggle_play", "Google Play", 1023)
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
      var ce = n(9040),
        le = n(7415);
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
        ge = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        we = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return ge.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        me = e => {
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
        fe = () => [re.xboxsx.name, re.ps5.name],
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
      var xe = n(1140),
        ke = n(6854),
        ye = n(7453),
        Ee = n(4842),
        Se = n.n(Ee);
      const Pe = (0, n(6400).A)(),
        Ce = Pe?.id,
        Ae = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Le = e => {
          const t = {
            ...e,
            environment: Ce,
            display_type: Ae
          };
          Se().dataLayer({
            dataLayer: t
          })
        };
      var Te = n(9623);
      const Re = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Te.useLocation)();
          return (0, g.useEffect)((() => {
            Le({
              event: "trackPageview"
            })
          }), [n]), (0, w.jsx)(e, {
            ...t
          })
        })(e, t),
        Me = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Se().initialize(n)
        };
      var je = n(2217);
      const Oe = "rockstar-games-web";
      let Ue;
      try {
        const e = je.A.get(Oe) ?? "";
        Ue = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ue = {}
      }
      const Be = (0, k.UT)(Ue),
        _e = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Be() ?? {}
          };
          return o[t] = n, null === n && delete o[t], je.A.set(Oe, JSON.stringify(o), {
            expires: 30,
            domain: (0, le.F)(),
            path: "/"
          }), Be(o), o
        },
        De = () => ({
          webSettings: (0, V.q)(Be),
          webSettingsReactive: Be,
          mutateWebSettings: _e
        }),
        $e = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ie = () => (0, g.useContext)($e),
        Fe = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = Ie() ?? {},
            r = (0, g.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, w.jsx)($e.Provider, {
            value: r,
            children: t
          })
        };
      var ze = n(28);
      const He = e => t => ((e, t) => (0, w.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Le(e)
          }
        }))(e, t),
        qe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, g.useState)(t), a = e => {
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
            return (0, g.useEffect)((() => {
              const e = l().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, w.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var Ne = n(842);
      const Ge = ke.J1`
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
              const t = (0, Ne.A)(),
                {
                  data: n
                } = U(Ge, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, w.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var Ve = n(7059)
    },
    4204: (e, t, n) => {
      n.d(t, {
        ec: () => u,
        e9: () => g,
        Es: () => w,
        bD: () => h
      });
      var o = n(2229),
        r = n(2753),
        a = n(7277),
        s = n(1012);
      var i = n(4602),
        c = n(1029);
      const l = {
          token: (0, r.UT)(""),
          tokenPingExpires: (0, r.UT)(100)
        },
        d = (0, a.A)({
          context: (0, o.createContext)(l),
          key: "utilsTokenProvider"
        }),
        u = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, c.jsx)(d.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: r
            },
            children: t
          })
        },
        h = () => {
          const {
            token: e,
            tokenPingExpires: t
          } = (0, o.useContext)(d);
          return [e, t]
        },
        g = () => {
          const [e] = h();
          return (0, i.useReactiveVar)(e)
        },
        w = () => {
          const [e, t] = h();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: o
            } = (0, s.A)();
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
        }
    },
    7987: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(2229),
        r = n(7277),
        a = n(1029);
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
    28: (e, t, n) => {
      n.d(t, {
        G4: () => w,
        uU: () => g
      });
      var o = n(2229),
        r = n(2753),
        a = n(9094),
        s = n(7277),
        i = n(1029);
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
        g = e => {
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
        w = () => (0, o.useContext)(d)
    },
    7059: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => g
      });
      var o = n(2229),
        r = n(2753),
        a = n(9094),
        s = n(7277),
        i = n(7273),
        c = n(1029);
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
        g = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [s, i] = (0, o.useState)(null), [h, g] = (0, o.useState)(!1), w = (0, a.q)(l);
          let m;
          const p = () => {
            g(!0), clearTimeout(m), m = setTimeout((() => {
              g(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (w) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, w]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: w,
              pageYOffset: n,
              pauseUserShouldSeeMore: p,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: s
            },
            children: t
          })), [w, n, p, s])
        }
    }
  }
]);