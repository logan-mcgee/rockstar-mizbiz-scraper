! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8217cc38-ff75-4469-9805-b1fd767a3d55", e._sentryDebugIdIdentifier = "sentry-dbid-8217cc38-ff75-4469-9805-b1fd767a3d55")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [4204], {
    6400: (e, t, n) => {
      n.d(t, {
        A: () => s,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
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
        A: () => w
      });
      var o = n(6621),
        r = n(4751),
        s = n.n(r),
        a = n(6188),
        i = n.n(a),
        c = n(1012),
        l = n(7453);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, w = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: a,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: w = null
          } = await (a?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let m = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (m += `?${new URLSearchParams(r)}`), !w && c) return null;
          w && (g.Authorization = `Bearer ${w}`);
          const p = {
              headers: g
            },
            f = s().all([p, t, n]),
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
        s = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: s,
            graphEnv: a,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const h = o?.apiHost ?? t,
            w = o?.authHost ?? n,
            g = o?.cdnBase ?? l,
            m = o?.clientId ?? s,
            p = r?.marketingAuthTLD ?? u,
            f = o?.scHost ?? i,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: f,
            hostname: c,
            cdnBase: g,
            key: d,
            clientId: m,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${m}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${m}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${m}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`
          }
        },
        a = [s({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), s({
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
    5315: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        vx: () => b,
        sb: () => x,
        Ym: () => a.A,
        CA: () => v.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => l,
        OH: () => p,
        zP: () => f,
        Cb: () => w,
        GA: () => k
      });
      const o = (0, n(3976).A)(),
        r = () => o;
      var s = n(2229),
        a = n(842);
      const i = e => {
        const [t, n] = (0, s.useState)(null), [o, r] = (0, s.useState)(null), [a, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
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
        }), [e]), [t, a]
      };
      var c = n(9623);
      const l = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var u = n(4204),
        h = n(5168);
      const w = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const a = (0, u.Es)(),
          [i, c] = (0, s.useState)(null),
          [l, d] = (0, s.useState)(!1),
          [w, g] = (0, s.useState)(null),
          m = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: s = {}
              } = t;
              g(null), c(null), d(!0);
              const i = await (0, h.A)(n ?? e, {
                pingBearer: a,
                fetchOptions: o,
                finalFetchOptions: s,
                query: r
              });
              return i?.status || g(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              g(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, s.useEffect)((() => {
          null === i && null === w && !l && n && m()
        }), [n, i, w, l, m]), {
          data: i,
          error: w,
          loading: l,
          fetch: m
        }
      };
      n(1012);
      const g = "__RS_CUSTOM_EVENTS__",
        m = e => `rsCustomEvent:${e}`;
      window[g] || (window[g] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = m(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].eventQueue.push(o), window[g][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        f = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = m(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter((e => e !== t)), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var v = n(7987);
      n(7059), n(28);
      const b = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
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
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
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
      const k = e => {
        const [t, n] = (0, s.useState)(!1), o = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          const r = () => {
            if (t || !o.current) return;
            const s = o.current,
              {
                height: a
              } = s.getBoundingClientRect(),
              i = window.innerHeight;
            window.scrollY + i >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", r))
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
        A: () => a
      });
      var o = n(2753),
        r = n(9094);
      const s = (0, o.UT)(document.documentElement.lang),
        a = () => (0, r.q)(s)
    },
    4602: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => S.R,
        ApolloProvider: () => xe.X,
        DataLayerProvider: () => Fe,
        GraphOperationsProvider: () => O,
        InMemoryCache: () => y.D,
        Platform: () => oe,
        Platforms: () => re,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => He.uU,
        RockstarGraphProvider: () => G,
        RockstarTokenProvider: () => I.ec,
        ScrollProvider: () => Ve.N2,
        classList: () => ie,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => te,
        downloadFile: () => me,
        findPlatform: () => ae,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ge,
        getConfigForDomain: () => a.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => be,
        getUriForGraphEnv: () => i,
        gql: () => ke.J1,
        gtmInit: () => je,
        importAll: () => he,
        isGen9Platform: () => ve,
        makeVar: () => k.UT,
        mutateWebSettings: () => Ie,
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
        useBase: () => P.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => $e,
        useHasReduceMotionPreference: () => P.vx,
        useHasSaveDataPreference: () => P.sb,
        useLocale: () => P.Ym,
        useMutateState: () => v,
        useMutation: () => D,
        useNewswirePost: () => P.CA,
        usePreloadImg: () => P.OG,
        usePrevious: () => P.ZC,
        useQuery: () => U,
        useQueryParams: () => P.sq,
        useReactiveVar: () => V.q,
        useRockstarEventDispatcher: () => P.OH,
        useRockstarEventSubscriber: () => P.zP,
        useRockstarToken: () => I.e9,
        useRockstarTokenPing: () => I.Es,
        useRockstarTokenReactive: () => I.bD,
        useRockstarWebSettings: () => _e,
        useScApi: () => P.Cb,
        useScroll: () => Ve.Ll,
        useScrollTracking: () => P.GA,
        useState: () => p,
        useWindowResize: () => He.G4,
        webSettingsReactive: () => De,
        withAutoRouteTracking: () => Re,
        withGtmTracking: () => ze,
        withMediaBasedProps: () => qe,
        withReactiveState: () => x,
        withRockstarGraph: () => X,
        withTranslations: () => Xe
      });
      var o = n(5168);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(3976),
        a = n(1012);
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
      var c = n(6188),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(7277),
        h = n(7273),
        w = n(2229),
        g = n(1029);
      const m = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "graphContextGet"
        }),
        p = () => (0, w.useContext)(m),
        f = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, w.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, V.q)(n);
          const o = (0, w.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, g.jsx)(m.Provider, {
            value: n(),
            children: (0, g.jsx)(f.Provider, {
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
            return (0, g.jsx)(b, {
              state: n,
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        };
      var k = n(2753),
        y = n(7711),
        S = n(9937),
        E = n(7897),
        C = n(9030),
        P = n(5315);
      const A = (e, t) => {
          const n = (0, P.Ym)(),
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
              loading: s,
              error: a,
              ...i
            } = (0, C.IT)(e, o);
          return (0, w.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, w.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, w.useEffect)((() => {
            if (o.autoSetError && a) throw new Error(String(a))
          }), [a]), {
            loading: s,
            error: a,
            data: r,
            ...i
          }
        },
        L = (0, w.createContext)((() => ({
          data: null
        }))),
        T = new Promise((e => {
          e()
        })),
        R = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new y.D)
        },
        j = [() => T, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new S.R(R))
        }],
        M = (0, w.createContext)((() => j)),
        O = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(M.Provider, {
            value: E.n,
            children: (0, g.jsx)(L.Provider, {
              value: A,
              children: t
            })
          })
        }),
        U = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, w.useContext)(L)(e, t)),
        D = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, w.useContext)(M)(e));
      var I = n(4204),
        _ = n(5197);
      var B = n(3556),
        $ = n(2600),
        F = n.n($);
      var H = n(6162),
        z = n(6621);
      const q = (0, H.e)({
          sha256: z.sc
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
            [s] = (0, w.useState)(new y.D({
              typePolicies: n
            })),
            a = q.concat((e => {
              let {
                token: t
              } = e;
              return (0, _.o)(((e, n) => {
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
            }).concat((e => (0, B.$)({
              ...e,
              fetch: F()
            }))(r)));
          return new S.R({
            cache: s,
            link: a
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
          return (0, g.jsx)(I.ec, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, g.jsx)(xe.X, {
              client: r,
              children: (0, g.jsx)(O, {
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
            return (0, g.jsx)(G, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPingExpires: r
              },
              children: (0, g.jsx)(e, {
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
          return (0, w.useEffect)((() => {
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
        se = Object.freeze(Object.values(re));

      function ae(e) {
        if (!e) return;
        if (e instanceof oe) return e;
        const t = e.toString().toLowerCase();
        return se.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
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
        we = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ge = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return we.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
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
        Se = n(4842),
        Ee = n.n(Se);
      const Ce = (0, n(6400).A)(),
        Pe = Ce?.id,
        Ae = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Le = e => {
          const t = {
            ...e,
            environment: Pe,
            display_type: Ae
          };
          Ee().dataLayer({
            dataLayer: t
          })
        };
      var Te = n(9623);
      const Re = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Te.useLocation)();
          return (0, w.useEffect)((() => {
            Le({
              event: "trackPageview"
            })
          }), [n]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        je = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Ee().initialize(n)
        };
      var Me = n(2217);
      const Oe = "rockstar-games-web";
      let Ue;
      try {
        const e = Me.A.get(Oe) ?? "";
        Ue = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ue = {}
      }
      const De = (0, k.UT)(Ue),
        Ie = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...De() ?? {}
          };
          return o[t] = n, null === n && delete o[t], Me.A.set(Oe, JSON.stringify(o), {
            expires: 30,
            domain: (0, le.F)(),
            path: "/"
          }), De(o), o
        },
        _e = () => ({
          webSettings: (0, V.q)(De),
          webSettingsReactive: De,
          mutateWebSettings: Ie
        }),
        Be = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        $e = () => (0, w.useContext)(Be),
        Fe = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = $e() ?? {},
            r = (0, w.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, g.jsx)(Be.Provider, {
            value: r,
            children: t
          })
        };
      var He = n(28);
      const ze = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Le(e)
          }
        }))(e, t),
        qe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, w.useState)(t), s = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => s(e)));
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
            return (0, w.useEffect)((() => {
              const e = l().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, g.jsx)(e, {
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
            return o ? (0, g.jsx)(e, {
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
        e9: () => w,
        Es: () => g,
        bD: () => h
      });
      var o = n(2229),
        r = n(2753),
        s = n(7277),
        a = n(1012);
      var i = n(4602),
        c = n(1029);
      const l = {
          token: (0, r.UT)(""),
          tokenPingExpires: (0, r.UT)(100)
        },
        d = (0, s.A)({
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
        w = () => {
          const [e] = h();
          return (0, i.useReactiveVar)(e)
        },
        g = () => {
          const [e, t] = h();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: o
            } = (0, a.A)();
            try {
              const e = n?.() ?? 0,
                r = t?.() ?? null,
                s = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === r) return {
                bearerToken: r
              };
              if (s && r) return {
                bearerToken: r
              };
              const a = await fetch(o, {
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
        s = n(1029);
      const a = (0, r.A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: i
        } = a,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, s.jsx)(a.Provider, {
            value: t,
            children: n
          })
        },
        l = () => (0, o.useContext)(a)
    },
    28: (e, t, n) => {
      n.d(t, {
        G4: () => g,
        uU: () => w
      });
      var o = n(2229),
        r = n(2753),
        s = n(9094),
        a = n(7277),
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
            } = c[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
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
        d = (0, a.A)({
          context: (0, o.createContext)(l()),
          key: "resizeContext"
        }),
        {
          Consumer: u
        } = d,
        h = (0, r.UT)(l()),
        w = e => {
          let {
            children: t
          } = e;
          const n = (0, s.q)(h);
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
    7059: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => w
      });
      var o = n(2229),
        r = n(2753),
        s = n(9094),
        a = n(7277),
        i = n(7273),
        c = n(1029);
      const l = (0, i.A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, r.UT)(!1)
        }),
        d = e => l(e),
        u = (0, a.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        h = () => (0, o.useContext)(u),
        w = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [h, w] = (0, o.useState)(!1), g = (0, s.q)(l);
          let m;
          const p = () => {
            w(!0), clearTimeout(m), m = setTimeout((() => {
              w(!1)
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
              userShouldSeeMore: a
            },
            children: t
          })), [g, n, p, a])
        }
    }
  }
]);