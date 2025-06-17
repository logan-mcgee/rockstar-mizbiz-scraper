! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3d7a8c9-8cac-47a7-a9eb-1efcd5eaae25", e._sentryDebugIdIdentifier = "sentry-dbid-b3d7a8c9-8cac-47a7-a9eb-1efcd5eaae25")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [4309], {
    15820: (e, t, n) => {
      n.d(t, {
        A: () => w
      });
      var o = n(7862),
        r = n(98398),
        a = n.n(r),
        s = n(4981),
        i = n.n(s),
        c = n(56720),
        l = n(71945);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, w = async function(e) {
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
            bearerToken: w = null
          } = await (s?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let p = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (p += `?${new URLSearchParams(r)}`), !w && c) return null;
          w && (m.Authorization = `Bearer ${w}`);
          const g = {
              headers: m
            },
            f = a().all([g, t, n]),
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
          const y = await fetch(p, f),
            k = await y.json();
          return l && (h[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    16855: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(62229),
        r = n(57985),
        a = n(25854);
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
    38212: (e, t, n) => {
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
    40148: (e, t, n) => {
      n.d(t, {
        A: () => a,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), a = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    41510: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var o = n(49196),
        r = n(99449);
      const a = (0, o.UT)(document.documentElement.lang),
        s = () => (0, r.q)(a)
    },
    55247: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => H.R,
        ApolloProvider: () => z.X,
        DataLayerProvider: () => ue,
        GraphOperationsProvider: () => x._y,
        InMemoryCache: () => q.D,
        Platform: () => G.OD,
        Platforms: () => G.lv,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => he.uU,
        RockstarGraphProvider: () => U,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => be.N2,
        classList: () => G.pP,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => G.wC,
        downloadFile: () => G.PE,
        findPlatform: () => G.rB,
        getAccentColor: () => r,
        getBase: () => a.A,
        getCdnPrefix: () => G.yh,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => G.Ap,
        getGen8Consoles: () => G.Xs,
        getGen9Consoles: () => G.kx,
        getLanguageLabel: () => G.rJ,
        getUriForGraphEnv: () => i,
        gql: () => N.J1,
        gtmInit: () => te,
        importAll: () => G.pT,
        isGen9Platform: () => G.lV,
        makeVar: () => k.UT,
        mutateWebSettings: () => ie,
        newswirePost: () => D,
        oneTrustInit: () => B,
        safeStyles: () => d,
        scrollToElement: () => G.PA,
        setContextItem: () => u.A,
        setCookieValue: () => G.My,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => F,
        toScLocaleString: () => X.t,
        track: () => K,
        useApolloClient: () => R,
        useBase: () => ve.RK,
        useBodyScrollable: () => $,
        useDataLayer: () => de,
        useHasReduceMotionPreference: () => ve.vx,
        useHasSaveDataPreference: () => ve.sb,
        useLocale: () => ve.Ym,
        useMutateState: () => v,
        useMutation: () => x.n_,
        useNewswirePost: () => ve.CA,
        usePreloadImg: () => ve.OG,
        usePrevious: () => ve.ZC,
        useQuery: () => x.IT,
        useQueryParams: () => ve.sq,
        useReactiveVar: () => j.q,
        useRockstarEventDispatcher: () => ve.OH,
        useRockstarEventSubscriber: () => ve.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => ce,
        useScApi: () => ve.Cb,
        useScAuthLinks: () => ve.N6,
        useScAuthTpaLink: () => ve.Br,
        useScroll: () => be.Ll,
        useScrollTracking: () => ve.GA,
        useState: () => g,
        useWindowResize: () => he.G4,
        webSettingsReactive: () => se,
        withAutoRouteTracking: () => ee,
        withGtmTracking: () => we,
        withMediaBasedProps: () => me,
        withReactiveState: () => y,
        withRockstarGraph: () => _,
        withTranslations: () => fe
      });
      var o = n(15820);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = n(38212),
        s = n(56720);
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
      var c = n(4981),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(57985),
        h = n(66205),
        w = n(62229),
        m = n(25854);
      const p = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "graphContextGet"
        }),
        g = () => (0, w.useContext)(p),
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
          (0, j.q)(n);
          const o = (0, w.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, m.jsx)(p.Provider, {
            value: n(),
            children: (0, m.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        y = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, m.jsx)(b, {
              state: n,
              children: (0, m.jsx)(e, {
                ...t
              })
            })
          }
        };
      var k = n(49196),
        x = n(81588),
        S = n(86497),
        E = n(54270);
      var C = n(27142),
        A = n(18247),
        P = n.n(A);
      var L = n(9849),
        T = n(7862);
      const M = (0, L.e)({
          sha256: T.sc
        }),
        R = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, w.useState)(new q.D({
              typePolicies: n
            })),
            s = M.concat((e => {
              let {
                token: t
              } = e;
              return (0, E.o)(((e, n) => {
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
            }).concat((e => (0, C.$)({
              ...e,
              fetch: P()
            }))(r)));
          return new H.R({
            cache: a,
            link: s
          })
        },
        U = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = R({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, m.jsx)(S.ec, {
            token: n?.token,
            children: (0, m.jsx)(z.X, {
              client: r,
              children: (0, m.jsx)(x._y, {
                children: t
              })
            })
          })
        },
        _ = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, k.UT)("");
          return function(t) {
            return (0, m.jsx)(U, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, m.jsx)(e, {
                ...t
              })
            })
          }
        };
      var j = n(99449);
      const I = (0, k.UT)({}),
        O = "data-disallow-body-scroll",
        $ = e => {
          const t = (0, j.q)(I),
            n = Object.values(t).some((e => !!e));
          return (0, w.useEffect)((() => {
            n ? document.documentElement.setAttribute(O, "true") : document.documentElement.removeAttribute(O)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => I(e))({
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
      var D = n(16855);
      const F = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var G = n(86237),
        H = n(41727),
        z = n(83843),
        N = n(2453),
        q = n(92810),
        X = n(71945),
        V = n(96389),
        W = n.n(V);
      const Q = (0, n(40148).A)(),
        Y = Q?.id,
        J = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        K = e => {
          const t = {
            ...e,
            environment: Y,
            display_type: J
          };
          W().dataLayer({
            dataLayer: t
          })
        };
      var Z = n(9623);
      const ee = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Z.useLocation)();
          return (0, w.useEffect)((() => {
            K({
              event: "trackPageview"
            })
          }), [n]), (0, m.jsx)(e, {
            ...t
          })
        })(e, t),
        te = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          W().initialize(n)
        };
      var ne = n(84388),
        oe = n(87171);
      const re = "rockstar-games-web";
      let ae;
      try {
        const e = ne.A.get(re) ?? "";
        ae = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        ae = {}
      }
      const se = (0, k.UT)(ae),
        ie = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...se() ?? {}
          };
          return o[t] = n, null === n && delete o[t], ne.A.set(re, JSON.stringify(o), {
            expires: 30,
            domain: (0, oe.F)(),
            path: "/"
          }), se(o), o
        },
        ce = () => ({
          webSettings: (0, j.q)(se),
          webSettingsReactive: se,
          mutateWebSettings: ie
        }),
        le = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        de = () => (0, w.useContext)(le),
        ue = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = de() ?? {},
            r = (0, w.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, m.jsx)(le.Provider, {
            value: r,
            children: t
          })
        };
      var he = n(75544);
      const we = e => t => ((e, t) => (0, m.jsx)(e, {
          ...t,
          gtmTrack: e => {
            K(e)
          }
        }))(e, t),
        me = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, w.useState)(t), a = e => {
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
            return (0, w.useEffect)((() => {
              const e = l().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, m.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var pe = n(41510);
      const ge = N.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        fe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, pe.A)(),
                {
                  data: n
                } = (0, x.IT)(ge, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, m.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var ve = n(98397),
        be = n(89591)
    },
    56720: (e, t, n) => {
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
          const w = o?.apiHost ?? t,
            m = o?.authHost ?? n,
            p = o?.cdnBase ?? d,
            g = o?.clientId ?? a,
            f = r?.marketingAuthTLD ?? h,
            v = o?.scHost ?? c,
            b = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? i,
            host: v,
            hostname: l,
            cdnBase: p,
            key: u,
            clientId: g,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${g}`,
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
    57985: (e, t, n) => {
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
    66205: (e, t, n) => {
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
    71945: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    75544: (e, t, n) => {
      n.d(t, {
        G4: () => m,
        uU: () => w
      });
      var o = n(62229),
        r = n(49196),
        a = n(99449),
        s = n(57985),
        i = n(25854);
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
        w = e => {
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
        m = () => (0, o.useContext)(d)
    },
    81588: (e, t, n) => {
      n.d(t, {
        _y: () => b,
        _l: () => i._,
        n_: () => k,
        IT: () => y
      });
      var o = n(62229),
        r = n(92810),
        a = n(41727),
        s = n(96646),
        i = n(60799),
        c = n(21515),
        l = n(4981),
        d = n.n(l),
        u = n(98397);
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
            data: a,
            loading: s,
            error: i,
            ...l
          } = (0, c.IT)(e, r);
        return (0, o.useEffect)((() => {
          if (a && r.setTitleDataPath) {
            const e = d().get(a, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [a]), (0, o.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: s
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [s]), (0, o.useEffect)((() => {
          if (r.autoSetError && i) throw new Error(String(i))
        }), [i]), {
          loading: s,
          error: i,
          data: a,
          ...l
        }
      };
      var w = n(25854);
      const m = (0, o.createContext)((() => ({
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
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new a.R(g))
        }],
        v = (0, o.createContext)((() => f)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, w.jsx)(v.Provider, {
            value: s.n,
            children: (0, w.jsx)(m.Provider, {
              value: h,
              children: t
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, o.useContext)(m)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, o.useContext)(v)(e))
    },
    86237: (e, t, n) => {
      n.d(t, {
        OD: () => s,
        lv: () => i,
        pP: () => d,
        wC: () => r,
        PE: () => b,
        rB: () => l,
        yh: () => v,
        Ap: () => w,
        Xs: () => y,
        kx: () => k,
        rJ: () => S,
        pT: () => p,
        lV: () => x,
        PA: () => o,
        My: () => m,
        _e: () => g
      }), n(4981);
      const o = e => {
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
        r = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (o({
            element: n
          }), a(n))
        },
        a = e => {
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
      class s {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const i = Object.freeze({
          pc: new s("pc", "PC", 8),
          ps: new s("ps", "PlayStation", 3),
          ps3: new s("ps3", "PlayStation 3", 2),
          ps4: new s("ps4", "PlayStation 4", 11),
          ps5: new s("ps5", "PlayStation 5", 20),
          xbox: new s("xbox", "Xbox", 4),
          xbox360: new s("xbox360", "Xbox 360", 1),
          xboxone: new s("xboxone", "Xbox One", 12),
          xboxsx: new s("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new s("switch", "Nintendo Switch™", 18),
          nintendoswitch: new s("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new s("applestore", "App Store", 102),
          googleplay: new s("googleplay", "Google Play", 1023),
          appStore: new s("app_store", "App Store", 102),
          googlePlay: new s("ggle_play", "Google Play", 1023),
          pcalt: new s("pcalt", "PC Enhanced", 22)
        }),
        c = Object.freeze(Object.values(i));

      function l(e) {
        if (!e) return;
        if (e instanceof s) return e;
        const t = e.toString().toLowerCase();
        return c.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const d = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var u = n(25125),
        h = n(87171);
      const w = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        m = (e, t) => {
          e && void 0 !== t && (0, u.canStoreCookie)(e) && w(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,h.F)()}; path=/;`)
        };
      n(25854);
      const p = e => e.keys().forEach(e),
        g = e => e.replace(/(<([^>]+)>)/gi, ""),
        f = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        v = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return f.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        b = e => {
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
        y = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        k = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        x = e => k().includes(e),
        S = e => {
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
        }
    },
    86497: (e, t, n) => {
      n.d(t, {
        ec: () => h,
        e9: () => m,
        Es: () => p,
        bD: () => w
      });
      var o = n(62229),
        r = n(49196),
        a = n(57985),
        s = n(4895),
        i = n(56720);
      var c = n(55247),
        l = n(25854);
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
        w = () => {
          const {
            token: e
          } = (0, o.useContext)(u);
          return [e]
        },
        m = () => {
          const [e] = w();
          return (0, c.useReactiveVar)(e)
        },
        p = () => {
          const [e] = w();
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
    87171: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    89591: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => w
      });
      var o = n(62229),
        r = n(49196),
        a = n(99449),
        s = n(57985),
        i = n(66205),
        c = n(25854);
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
        w = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [s, i] = (0, o.useState)(null), [h, w] = (0, o.useState)(!1), m = (0, a.q)(l);
          let p;
          const g = () => {
            w(!0), clearTimeout(p), p = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, m]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: n,
              pauseUserShouldSeeMore: g,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: s
            },
            children: t
          })), [m, n, g, s])
        }
    },
    98397: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        bn: () => P,
        vx: () => S,
        sb: () => E,
        Ym: () => s.A,
        CA: () => b.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => l,
        OH: () => f,
        zP: () => v,
        Cb: () => w,
        N6: () => x,
        Br: () => k,
        GA: () => L
      });
      const o = (0, n(38212).A)(),
        r = () => o;
      var a = n(62229),
        s = n(41510);
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
      var u = n(86497),
        h = n(15820);
      const w = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const s = (0, u.Es)(),
          [i, c] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [w, m] = (0, a.useState)(null),
          p = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: a = {}
              } = t;
              m(null), c(null), d(!0);
              const i = await (0, h.A)(n ?? e, {
                pingBearer: s,
                fetchOptions: o,
                finalFetchOptions: a,
                query: r
              });
              return i?.status || m(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              m(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, a.useEffect)((() => {
          null === i && null === w && !l && n && p()
        }), [n, i, w, l, p]), {
          data: i,
          error: w,
          loading: l,
          fetch: p
        }
      };
      var m = n(56720);
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
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = g(e);
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
      var b = n(16855),
        y = (n(89591), n(71945));
      const k = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, m.A)(), r = (0, s.A)(), a = (0, y.t)(r), i = (0, u.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(a), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(i), new URL(c, `https://${n}.rockstargames.com/`)
        },
        x = e => {
          const {
            signup: t,
            login: n
          } = (0, m.A)(), o = (0, s.A)(), r = (0, y.t)(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        };
      n(75544);
      const S = () => {
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
        E = () => {
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
      var C = n(88933),
        A = n(1345);
      const P = () => {
          const [e, t] = (0, a.useState)(!1), {
            deviceMemory: n
          } = (0, C.XB)(), {
            effectiveConnectionType: o
          } = (0, C.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, C.xV)(), {
            saveData: s
          } = (0, C.zp)(), i = S(), c = () => {
            const a = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (A.n8 || A.lT || A.w || A.UX) return !1;
              const t = "Safari" === A.C0,
                a = "Firefox" === A.C0,
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
        L = e => {
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
    }
  }
]);