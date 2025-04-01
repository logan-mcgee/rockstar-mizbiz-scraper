! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6cc299b7-06fc-468a-95bb-7429215217a2", e._sentryDebugIdIdentifier = "sentry-dbid-6cc299b7-06fc-468a-95bb-7429215217a2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [6682], {
    30062: (e, t, n) => {
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
        s = n.n(r),
        a = n(17868),
        i = n.n(a),
        c = n(82014),
        l = n(39151);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, m = async function(e) {
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
            bearerToken: m = null
          } = await (a?.()) ?? {}, w = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let p = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (p += `?${new URLSearchParams(r)}`), !m && c) return null;
          m && (w.Authorization = `Bearer ${m}`);
          const g = {
              headers: w
            },
            f = s().all([g, t, n]),
            v = JSON.stringify({
              ...f,
              url: p
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
          const k = await fetch(p, f),
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
        s = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: s,
            cms: a,
            graphEnv: i,
            scHost: c,
            hostname: l,
            cdnBase: d,
            key: u,
            marketingAuthTLD: h
          } = e;
          const m = o?.apiHost ?? t,
            w = o?.authHost ?? n,
            p = o?.cdnBase ?? d,
            g = o?.clientId ?? s,
            f = r?.marketingAuthTLD ?? h,
            v = o?.scHost ?? c,
            b = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? i,
            host: v,
            hostname: l,
            cdnBase: p,
            key: u,
            clientId: g,
            cms: `https://${a}.rockstargames.com/graphql`,
            authHost: w,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${w}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
          }
        },
        a = [s({
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
        }), s({
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
        vx: () => S,
        sb: () => C,
        Ym: () => a.A,
        CA: () => b.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => l,
        OH: () => f,
        zP: () => v,
        Cb: () => m,
        N6: () => y,
        Br: () => x,
        GA: () => E
      });
      const o = (0, n(46710).A)(),
        r = () => o;
      var s = n(62229),
        a = n(96232);
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
      var u = n(6682),
        h = n(43522);
      const m = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const a = (0, u.Es)(),
          [i, c] = (0, s.useState)(null),
          [l, d] = (0, s.useState)(!1),
          [m, w] = (0, s.useState)(null),
          p = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: s = {}
              } = t;
              w(null), c(null), d(!0);
              const i = await (0, h.A)(n ?? e, {
                pingBearer: a,
                fetchOptions: o,
                finalFetchOptions: s,
                query: r
              });
              return i?.status || w(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              w(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, s.useEffect)((() => {
          null === i && null === m && !l && n && p()
        }), [n, i, m, l, p]), {
          data: i,
          error: m,
          loading: l,
          fetch: p
        }
      };
      var w = n(82014);
      const p = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[p] || (window[p] = {});
      const f = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
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
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = g(e);
            return window[p][n] || (window[p][n] = {
              eventQueue: [],
              subscribers: []
            }), window[p][n].subscribers.push(t), window[p][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[p][n].subscribers = window[p][n].subscribers.filter((e => e !== t)), 0 === window[p][n].subscribers.length && delete window[p][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var b = n(2833),
        k = (n(20025), n(39151));
      const x = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, w.A)(), r = (0, a.A)(), s = (0, k.t)(r), i = (0, u.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(s), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(i), new URL(c, `https://${n}.rockstargames.com/`)
        },
        y = e => {
          const {
            signup: t,
            login: n
          } = (0, w.A)(), o = (0, a.A)(), r = (0, k.t)(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        };
      n(42582);
      const S = () => {
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
        C = () => {
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
      n(73002), n(12158);
      const E = e => {
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
    96232: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      var o = n(28567),
        r = n(95236);
      const s = (0, o.UT)(document.documentElement.lang),
        a = () => (0, r.q)(s)
    },
    17560: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => ie.R,
        ApolloProvider: () => ce.X,
        DataLayerProvider: () => Te,
        GraphOperationsProvider: () => y._y,
        InMemoryCache: () => de.D,
        Platform: () => q,
        Platforms: () => G,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => Re.uU,
        RockstarGraphProvider: () => I,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => $e.N2,
        classList: () => W,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => z,
        downloadFile: () => ne,
        findPlatform: () => V,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => te,
        getConfigForDomain: () => a.A,
        getCookieValueByName: () => J,
        getGen8Consoles: () => oe,
        getGen9Consoles: () => re,
        getLanguageLabel: () => ae,
        getUriForGraphEnv: () => i,
        gql: () => le.J1,
        gtmInit: () => ke,
        importAll: () => Z,
        isGen9Platform: () => se,
        makeVar: () => x.UT,
        mutateWebSettings: () => Ee,
        newswirePost: () => D,
        oneTrustInit: () => B,
        safeStyles: () => d,
        scrollToElement: () => F,
        setContextItem: () => u.A,
        setCookieValue: () => K,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => H,
        toScLocaleString: () => ue.t,
        track: () => fe,
        useApolloClient: () => U,
        useBase: () => Oe.RK,
        useBodyScrollable: () => $,
        useDataLayer: () => Le,
        useHasReduceMotionPreference: () => Oe.vx,
        useHasSaveDataPreference: () => Oe.sb,
        useLocale: () => Oe.Ym,
        useMutateState: () => v,
        useMutation: () => y.n_,
        useNewswirePost: () => Oe.CA,
        usePreloadImg: () => Oe.OG,
        usePrevious: () => Oe.ZC,
        useQuery: () => y.IT,
        useQueryParams: () => Oe.sq,
        useReactiveVar: () => j.q,
        useRockstarEventDispatcher: () => Oe.OH,
        useRockstarEventSubscriber: () => Oe.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => Ae,
        useScApi: () => Oe.Cb,
        useScAuthLinks: () => Oe.N6,
        useScAuthTpaLink: () => Oe.Br,
        useScroll: () => $e.Ll,
        useScrollTracking: () => Oe.GA,
        useState: () => g,
        useWindowResize: () => Re.G4,
        webSettingsReactive: () => Ce,
        withAutoRouteTracking: () => be,
        withGtmTracking: () => Ue,
        withMediaBasedProps: () => Ie,
        withReactiveState: () => k,
        withRockstarGraph: () => _,
        withTranslations: () => Me
      });
      var o = n(43522);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(46710),
        a = n(82014);
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
      var c = n(17868),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(4827),
        h = n(52399),
        m = n(62229),
        w = n(73855);
      const p = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        g = () => (0, m.useContext)(p),
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
          (0, j.q)(n);
          const o = (0, m.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, w.jsx)(p.Provider, {
            value: n(),
            children: (0, w.jsx)(f.Provider, {
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
            return (0, w.jsx)(b, {
              state: n,
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        };
      var x = n(28567),
        y = n(69205),
        S = n(6682),
        C = n(70611);
      var E = n(12740),
        A = n(17538),
        P = n.n(A);
      var L = n(63912),
        T = n(82543);
      const R = (0, L.e)({
          sha256: T.sc
        }),
        U = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [s] = (0, m.useState)(new de.D({
              typePolicies: n
            })),
            a = R.concat((e => {
              let {
                token: t
              } = e;
              return (0, C.o)(((e, n) => {
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
            }).concat((e => (0, E.$)({
              ...e,
              fetch: P()
            }))(r)));
          return new ie.R({
            cache: s,
            link: a
          })
        },
        I = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = U({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, w.jsx)(S.ec, {
            token: n?.token,
            children: (0, w.jsx)(ce.X, {
              client: r,
              children: (0, w.jsx)(y._y, {
                children: t
              })
            })
          })
        },
        _ = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, x.UT)("");
          return function(t) {
            return (0, w.jsx)(I, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        };
      var j = n(95236);
      const M = (0, x.UT)({}),
        O = "data-disallow-body-scroll",
        $ = e => {
          const t = (0, j.q)(M),
            n = Object.values(t).some((e => !!e));
          return (0, m.useEffect)((() => {
            n ? document.documentElement.setAttribute(O, "true") : document.documentElement.removeAttribute(O)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => M(e))({
              ...t,
              [e]: n
            })
          }
        },
        B = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        };
      var D = n(2833);
      const H = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        F = e => {
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
        z = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (F({
            element: n
          }), N(n))
        },
        N = e => {
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
      class q {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const G = Object.freeze({
          pc: new q("pc", "PC", 8),
          ps: new q("ps", "PlayStation", 3),
          ps3: new q("ps3", "PlayStation 3", 2),
          ps4: new q("ps4", "PlayStation 4", 11),
          ps5: new q("ps5", "PlayStation 5", 20),
          xbox: new q("xbox", "Xbox", 4),
          xbox360: new q("xbox360", "Xbox 360", 1),
          xboxone: new q("xboxone", "Xbox One", 12),
          xboxsx: new q("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new q("switch", "Nintendo Switch™", 18),
          nintendoswitch: new q("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new q("applestore", "App Store", 102),
          googleplay: new q("googleplay", "Google Play", 1023),
          appStore: new q("app_store", "App Store", 102),
          googlePlay: new q("ggle_play", "Google Play", 1023),
          pcalt: new q("pcalt", "PC Enhanced", 22)
        }),
        X = Object.freeze(Object.values(G));

      function V(e) {
        if (!e) return;
        if (e instanceof q) return e;
        const t = e.toString().toLowerCase();
        return X.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const W = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var Q = n(31674),
        Y = n(41793);
      const J = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        K = (e, t) => {
          e && void 0 !== t && (0, Q.canStoreCookie)(e) && J(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,Y.F)()}; path=/;`)
        },
        Z = e => e.keys().forEach(e),
        ee = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        te = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return ee.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        ne = e => {
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
        oe = () => [G.xbox360.name, G.xboxone.name, G.ps3.name, G.ps4.name, G.pc.name],
        re = () => [G.xboxsx.name, G.ps5.name, G.pcalt.name],
        se = e => re().includes(e),
        ae = e => {
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
      var ie = n(23481),
        ce = n(23302),
        le = n(93273),
        de = n(34864),
        ue = n(39151),
        he = n(92160),
        me = n.n(he);
      const we = (0, n(30062).A)(),
        pe = we?.id,
        ge = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        fe = e => {
          const t = {
            ...e,
            environment: pe,
            display_type: ge
          };
          me().dataLayer({
            dataLayer: t
          })
        };
      var ve = n(9623);
      const be = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, ve.useLocation)();
          return (0, m.useEffect)((() => {
            fe({
              event: "trackPageview"
            })
          }), [n]), (0, w.jsx)(e, {
            ...t
          })
        })(e, t),
        ke = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          me().initialize(n)
        };
      var xe = n(37307);
      const ye = "rockstar-games-web";
      let Se;
      try {
        const e = xe.A.get(ye) ?? "";
        Se = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Se = {}
      }
      const Ce = (0, x.UT)(Se),
        Ee = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ce() ?? {}
          };
          return o[t] = n, null === n && delete o[t], xe.A.set(ye, JSON.stringify(o), {
            expires: 30,
            domain: (0, Y.F)(),
            path: "/"
          }), Ce(o), o
        },
        Ae = () => ({
          webSettings: (0, j.q)(Ce),
          webSettingsReactive: Ce,
          mutateWebSettings: Ee
        }),
        Pe = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Le = () => (0, m.useContext)(Pe),
        Te = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = Le() ?? {},
            r = (0, m.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, w.jsx)(Pe.Provider, {
            value: r,
            children: t
          })
        };
      var Re = n(42582);
      const Ue = e => t => ((e, t) => (0, w.jsx)(e, {
          ...t,
          gtmTrack: e => {
            fe(e)
          }
        }))(e, t),
        Ie = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, m.useState)(t), s = e => {
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
            return (0, m.useEffect)((() => {
              const e = l().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, w.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var _e = n(96232);
      const je = le.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Me = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, _e.A)(),
                {
                  data: n
                } = (0, y.IT)(je, {
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
      var Oe = n(40296),
        $e = n(20025)
    },
    69205: (e, t, n) => {
      n.d(t, {
        _y: () => b,
        _l: () => i._,
        n_: () => x,
        IT: () => k
      });
      var o = n(62229),
        r = n(34864),
        s = n(23481),
        a = n(11285),
        i = n(27094),
        c = n(80254),
        l = n(17868),
        d = n.n(l),
        u = n(40296);
      const h = (e, t) => {
        const n = (0, u.Ym)(),
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
            data: s,
            loading: a,
            error: i,
            ...l
          } = (0, c.IT)(e, r);
        return (0, o.useEffect)((() => {
          if (s && r.setTitleDataPath) {
            const e = d().get(s, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, o.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: a
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [a]), (0, o.useEffect)((() => {
          if (r.autoSetError && i) throw new Error(String(i))
        }), [i]), {
          loading: a,
          error: i,
          data: s,
          ...l
        }
      };
      var m = n(73855);
      const w = (0, o.createContext)((() => ({
          data: null
        }))),
        p = new Promise((e => {
          e()
        })),
        g = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        f = [() => p, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(g))
        }],
        v = (0, o.createContext)((() => f)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, m.jsx)(v.Provider, {
            value: a.n,
            children: (0, m.jsx)(w.Provider, {
              value: h,
              children: t
            })
          })
        }),
        k = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, o.useContext)(w)(e, t)),
        x = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, o.useContext)(v)(e))
    },
    6682: (e, t, n) => {
      n.d(t, {
        ec: () => h,
        e9: () => w,
        Es: () => p,
        bD: () => m
      });
      var o = n(62229),
        r = n(28567),
        s = n(4827),
        a = n(37240),
        i = n(82014);
      var c = n(17560),
        l = n(73855);
      const d = {
          token: (0, r.UT)("")
        },
        u = (0, s.A)({
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
        w = () => {
          const [e] = m();
          return (0, c.useReactiveVar)(e)
        },
        p = () => {
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
                } = (0, a.s)(e) ?? {};
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
        s = n(73855);
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
    42582: (e, t, n) => {
      n.d(t, {
        G4: () => w,
        uU: () => m
      });
      var o = n(62229),
        r = n(28567),
        s = n(95236),
        a = n(4827),
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
        m = e => {
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
        w = () => (0, o.useContext)(d)
    },
    20025: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => m
      });
      var o = n(62229),
        r = n(28567),
        s = n(95236),
        a = n(4827),
        i = n(52399),
        c = n(73855);
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
        m = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [h, m] = (0, o.useState)(!1), w = (0, s.q)(l);
          let p;
          const g = () => {
            m(!0), clearTimeout(p), p = setTimeout((() => {
              m(!1)
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
              pauseUserShouldSeeMore: g,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: t
          })), [w, n, g, a])
        }
    }
  }
]);