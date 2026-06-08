try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f5e4e0e7-5e2f-48eb-a6d9-25647c794c94", e._sentryDebugIdIdentifier = "sentry-dbid-f5e4e0e7-5e2f-48eb-a6d9-25647c794c94")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [240], {
    5174(e, t, n) {
      n.d(t, {
        YK: () => o.YK,
        JK: () => h,
        tz: () => r.A,
        QY: () => g
      });
      var o = n(7338),
        r = n(4775),
        s = n(9793),
        a = n(3082),
        i = n(6285),
        c = n(7279);
      const d = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const n = window.location.hostname.split("."),
            o = n.slice(n.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${o}; path=/;`
        },
        l = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            r = o?.substring(n.length, o.length);
          return r
        },
        u = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en",
          posix: "en_us"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de",
          posix: "de_de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es",
          posix: "es_es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419",
          posix: "es_mx"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr",
          posix: "fr_fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it",
          posix: "it_it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja",
          posix: "ja_jp"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko",
          posix: "ko_kr"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl",
          posix: "pl_pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR",
          posix: "pt_br"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru",
          posix: "ru_ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant",
          posix: "zh_tw"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN",
          posix: "zh_hans"
        }],
        m = u[0],
        p = u,
        h = () => {
          const {
            location: e
          } = window, t = (0, c.A)(), n = (e => {
            const t = p.map(e => e.subdomaincom),
              n = e.pathname.substring(1).split("/"),
              o = "detect-locals" === n[0] ? 1 : 0;
            return -1 !== t.indexOf(n[o]) ? n[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), r = m;
          let s;
          const a = `rockstarweb_lang.${t.cookieIdentifier}`,
            i = l(a);
          s = t.currentSite?.site === c.C.www ? p.find(e => e.subdomaincom === o) || p.find(e => e.subdomaincom === n) || r : p.find(e => e.iso === i) || r;
          const [, u] = ((e, t, n = !1) => {
            const o = l(e);
            return o && !n || d(e, t), [o, (r = e, e => {
              d(r, e)
            })];
            var r
          })(a, s.iso);
          return [s, u]
        };

      function g(e, t, n, o) {
        return r => {
          const c = (0, a.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const n = t ?? h()[0].iso ?? "en-US",
                  o = function(e, t) {
                    return e[t] ?? {}
                  }(e, n);
                var r;
                return {
                  rsLocale: n,
                  locale: n,
                  messages: (r = o, {
                    ...r
                  })
                }
              }(e, t)
            }(t, n)
          }, [n]);
          return (0, s.jsx)(i.A, {
            locale: c?.locale || "en-US",
            messages: {
              ...c?.messages
            },
            onError: o,
            children: c && (0, s.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }
    },
    7279(e, t, n) {
      n.d(t, {
        A: () => d,
        C: () => i
      });
      var o = n(4028),
        r = n.n(o),
        s = n(5963),
        a = n.n(s);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        c = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        d = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = c.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), s = c[o >= 0 ? o : 0], i = c.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), a()(r()({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    7240(e, t, n) {
      n.r(t), n.d(t, {
        ApolloClient: () => H.R,
        ApolloProvider: () => N.X,
        DataLayerProvider: () => zt,
        InMemoryCache: () => F.D,
        Platform: () => Pe,
        Platforms: () => Le,
        ReactiveStateProvider: () => B,
        ResizeProvider: () => Ct,
        RockstarGraphProvider: () => pe,
        RockstarTokenProvider: () => V,
        ScrollProvider: () => bt,
        coreScApiFetch: () => v,
        createDeferredScrollTriggerRefresh: () => k,
        cx: () => o,
        detectIfWeShouldAnchorSomewhere: () => Ce,
        downloadFile: () => Ie,
        findPlatform: () => Me,
        generateTpaLink: () => _e,
        getAccentColor: () => S,
        getBase: () => E,
        getCdnPrefix: () => Be,
        getConfigForDomain: () => h,
        getCookieValueByName: () => Ae,
        getGen8Consoles: () => Oe,
        getGen9Consoles: () => De,
        getLanguageLabel: () => He,
        getUriForGraphEnv: () => C,
        gql: () => Ke.J1,
        gtmInit: () => It,
        importAll: () => qe,
        isGen9Platform: () => Fe,
        makeVar: () => O.UT,
        mutateWebSettings: () => Ht,
        newswirePost: () => r,
        oneTrustInit: () => ve,
        safeStyles: () => T,
        scrollToElement: () => Ee,
        setContextItem: () => L,
        setCookieValue: () => $e,
        setMakeVarItem: () => M,
        supportedBrowsers: () => be,
        toScLocaleString: () => g,
        track: () => Ve,
        useApolloClient: () => le,
        useBase: () => rt,
        useBodyScrollable: () => fe,
        useDataLayer: () => qt,
        useGetTpaLinkGenerator: () => Ut,
        useHasReduceMotionPreference: () => Pt,
        useHasSaveDataPreference: () => Lt,
        useLazyQuery: () => At._,
        useLocale: () => et,
        useMutateState: () => z,
        useMutation: () => $t.n,
        useNewswirePost: () => Se,
        usePreloadImg: () => st,
        usePrevious: () => ct,
        useQuery: () => me,
        useQueryParams: () => it,
        useReactiveVar: () => A.q,
        useRelativeTime: () => jt,
        useRockstarEventDispatcher: () => mt,
        useRockstarEventSubscriber: () => pt,
        useRockstarToken: () => Y,
        useRockstarTokenPing: () => K,
        useRockstarTokenReactive: () => J,
        useRockstarWebSettings: () => Nt,
        useScApi: () => dt,
        useScAuthLinks: () => vt,
        useScroll: () => ft,
        useScrollTracking: () => Rt,
        useScrollVisibility: () => Mt,
        useState: () => _,
        useWindowResize: () => Tt,
        webSettingsReactive: () => Ft,
        withAutoRouteTracking: () => Bt,
        withGtmTracking: () => Je,
        withMediaBasedProps: () => Ye,
        withReactiveState: () => I,
        withRockstarGraph: () => he,
        withTranslations: () => nt
      });
      var o = {};
      n.r(o), n.d(o, {
        default: () => y
      });
      var r = {};
      n.r(r), n.d(r, {
        Consumer: () => ke,
        Provider: () => ye,
        useNewswirePost: () => Se
      });
      var s = n(5942),
        a = n(6597),
        i = n.n(a),
        c = n(2631),
        d = n.n(c);
      const l = window?.env?.sc,
        u = window?.env?.marketing,
        m = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
          graphEnv: r,
          queryManifest: s,
          scHost: a,
          hostname: i,
          cdnBase: c,
          key: d,
          marketingAuthTLD: m
        }) => {
          const p = l?.apiHost ?? e,
            h = l?.authHost ?? t,
            g = l?.cdnBase ?? c,
            w = l?.clientId ?? n,
            f = u?.marketingAuthTLD ?? m,
            b = l?.scHost ?? a,
            v = u?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? r,
            host: b,
            hostname: i,
            cdnBase: g,
            key: d,
            clientId: w,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: h,
            queryManifest: s,
            scBase: `https://${b}.rockstargames.com/`,
            login: `https://${h}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${h}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${h}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${v}`,
            authCookieName: "BearerToken"
          }
        },
        p = [m({
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
        }), m({
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
        h = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = p.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return p.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || p[0]
        },
        g = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: w
        } = h(),
        f = g(document.documentElement.lang),
        b = {},
        v = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: r,
          requireBearerToken: a = !0,
          useCache: c = !0
        } = {}) => {
          try {
            const {
              bearerToken: l = null
            } = await (r?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...f && {
                "X-lang": f
              }
            };
            let m = `${w}/${e}`;
            if (null === o || d().isEmpty(o) || (m += `?${new URLSearchParams(o)}`), !l && a) return null;
            l && (u.Authorization = `Bearer ${l}`);
            const p = {
                headers: u
              },
              h = i().all([p, t, n]),
              g = JSON.stringify({
                ...h,
                url: m
              }),
              v = await (0, s.sc)(g);
            if (c) {
              if (b[v]?.response) return b[v].response;
              if (b[v]?.loading) return {
                error: null,
                result: null
              };
              b[v] = {
                loading: !0
              }
            }
            const x = await fetch(m, h),
              k = await x.json();
            return c && (b[v] = {
              response: k,
              loading: !1
            }), k
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        };
      var x = n(7978);
      const k = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  x.u.refresh()
                })
              })
            },
            cleanup: () => {
              cancelAnimationFrame(e)
            }
          }
        },
        y = (...e) => e.filter(Boolean).join(" "),
        S = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17",
        E = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        },
        C = e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
          let t;
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
        },
        T = e => {
          const t = d().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        },
        P = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        L = ({
          context: e,
          key: t
        }) => (P()?.[t] || (P()[t] = e), P()[t]),
        R = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        M = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (R()?.[n] || (R()[n] = {}), R()?.[n]?.[e] || (R()[n][e] = t), R()[n][e]);
      var j = n(9793),
        U = n(3082),
        A = n(7927);
      const $ = L({
          context: (0, U.createContext)({}),
          key: "graphContextGet"
        }),
        _ = () => (0, U.useContext)($),
        q = L({
          context: (0, U.createContext)({}),
          key: "graphContextSet"
        }),
        z = () => (0, U.useContext)(q),
        B = ({
          children: e,
          state: t
        }) => {
          (0, A.q)(t);
          const n = (0, U.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, j.jsx)($.Provider, {
            value: t(),
            children: (0, j.jsx)(q.Provider, {
              value: n,
              children: e
            })
          })
        },
        I = (e, {
          state: t
        }) => function(n) {
          return (0, j.jsx)(B, {
            state: t,
            children: (0, j.jsx)(e, {
              ...n
            })
          })
        };
      var O = n(9922),
        D = n(5174),
        F = n(3996),
        H = n(4395),
        N = n(8989),
        W = n(3568),
        G = n(4242);
      const X = {
          token: (0, O.UT)("")
        },
        Q = L({
          context: (0, U.createContext)(X),
          key: "utilsTokenProvider"
        }),
        V = ({
          children: e,
          token: t
        }) => (0, j.jsx)(Q.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        J = () => {
          const {
            token: e
          } = (0, U.useContext)(Q);
          return [e]
        },
        Y = () => {
          const [e] = J();
          return (0, A.q)(e)
        },
        K = () => {
          const [e] = J();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = h(), o = e => {
              try {
                const {
                  exp: t = 0
                } = (0, G.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const r = o(W.A.get(t)) || o(e?.());
              if (r) return e(r), {
                bearerToken: r
              };
              const s = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                a = await s.json();
              return e(a.bearerToken ?? ""), a
            } catch {
              return e(""), !1
            }
          })({
            token: e
          })
        };
      var Z = n(9164);
      var ee = n(945);
      const te = (0, D.YK)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var ne = n(8548),
        oe = n(9647),
        re = n.n(oe);
      const se = (0, n(735).e)({
        sha256: s.sc
      });
      var ae = n(7324);
      const ie = document.documentElement.lang,
        ce = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: ie,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: r,
              error: s,
              ...a
            } = (0, ae.IT)(e, n);
          return (0, U.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = d().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, U.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, U.useEffect)(() => {
            if (n.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: r,
            error: s,
            data: o,
            ...a
          }
        },
        de = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        le = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? C(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, U.useState)(new F.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, D.tz)(),
            a = se.concat((({
              formatMessage: e
            }) => (0, ee.S)(t => {
              const {
                response: n
              } = t;
              n?.errors && (n.errors = n?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const n = te[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(n)
                  }
                }
                return t
              }))
            }))({
              formatMessage: s
            }).concat((({
              token: e
            }) => (0, Z.o)((t, {
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
            }).concat((e => (0, ne.$)({
              ...e,
              fetch: re()
            }))(o))));
          return new H.R({
            cache: r,
            link: a
          })
        },
        ue = (0, U.createContext)(ce),
        me = (e, t) => (0, U.useContext)(ue)(e, t),
        pe = (0, D.QY)(({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = le({
            graphOptions: t,
            typePolicies: n
          });
          return (0, j.jsx)(V, {
            token: t?.token,
            children: (0, j.jsx)(N.X, {
              client: o,
              children: (0, j.jsx)(ue.Provider, {
                value: ce,
                children: e
              })
            })
          })
        }, de),
        he = (e, {
          env: t = "prod"
        }) => {
          const n = (0, O.UT)("");
          return function(o) {
            return (0, j.jsx)(pe, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, j.jsx)(e, {
                ...o
              })
            })
          }
        },
        ge = (0, O.UT)({}),
        we = "data-disallow-body-scroll",
        fe = e => {
          const t = (0, A.q)(ge),
            n = Object.values(t).some(e => !!e);
          return (0, U.useEffect)(() => {
            n ? document.documentElement.setAttribute(we, "true") : document.documentElement.removeAttribute(we)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => ge(e))({
              ...t,
              [e]: n
            })
          }
        },
        be = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        ve = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        xe = L({
          context: (0, U.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: ke
        } = xe,
        ye = ({
          article: e,
          children: t
        }) => (0, j.jsx)(xe.Provider, {
          value: e,
          children: t
        }),
        Se = () => (0, U.useContext)(xe),
        Ee = ({
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
        Ce = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Ee({
            element: n
          }), Te(n))
        },
        Te = e => {
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
      class Pe {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, r = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = s
        }
      }
      const Le = Object.freeze({
          pc: new Pe("pc", "PC Legacy", 8, "sc"),
          ps: new Pe("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Pe("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Pe("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Pe("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Pe("xbox", "Xbox", 4, "xbl"),
          xbox360: new Pe("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Pe("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Pe("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Pe("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Pe("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Pe("applestore", "App Store", 102, "applestore"),
          googleplay: new Pe("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Pe("app_store", "App Store", 102, "applestore"),
          googlePlay: new Pe("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Pe("pcalt", "PC Enhanced", 22, "sc")
        }),
        Re = Object.freeze(Object.values(Le));

      function Me(e) {
        if (!e) return;
        if (e instanceof Pe) return e;
        const t = e.toString().toLowerCase();
        return Re.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var je = n(3058);
      const Ue = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Ae = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            r = o?.substring(n.length, o.length);
          return r
        },
        $e = (e, t) => {
          e && void 0 !== t && (0, je.canStoreCookie)(e) && Ae(e) !== t && (document.cookie = `${e}=${t}; domain=${Ue()}; path=/;`)
        },
        _e = async ({
          service: e,
          returnUrl: t,
          pingBearer: n
        }) => {
          const [{
            iso: o
          }] = (0, D.JK)(), {
            authHost: r,
            clientId: s
          } = h(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
          return i.searchParams.append("cid", s), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
        }, qe = e => e.keys().forEach(e), ze = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }], Be = (e = !0) => ze.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, Ie = e => {
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
        }, Oe = () => [Le.xbox360.name, Le.xboxone.name, Le.ps3.name, Le.ps4.name, Le.pc.name], De = () => [Le.xboxsx.name, Le.ps5.name, Le.pcalt.name], Fe = e => De().includes(e), He = e => {
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
      var Ne = n(3852),
        We = n.n(Ne);
      const Ge = (0, n(7279).A)(),
        Xe = Ge?.id,
        Qe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ve = e => {
          const t = {
            ...e,
            environment: Xe,
            display_type: Qe
          };
          We().dataLayer({
            dataLayer: t
          })
        },
        Je = e => t => ((e, t) => (0, j.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ve(e)
          }
        }))(e, t),
        Ye = (e, t = 250) => n => ((e, t, n) => {
          const [o, r] = (0, U.useState)(t), s = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => s(e));
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
          return (0, U.useEffect)(() => {
            const e = d().debounce(() => {
              r(s(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, j.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Ke = n(3066);
      const Ze = (0, O.UT)(document.documentElement.lang),
        et = () => (0, A.q)(Ze),
        tt = Ke.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        nt = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = et(),
              {
                data: n
              } = me(tt, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, j.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t),
        ot = E(),
        rt = () => ot,
        st = e => {
          const [t, n] = (0, U.useState)(null), [o, r] = (0, U.useState)(null), [s, a] = (0, U.useState)({});
          return (0, U.useLayoutEffect)(() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", () => {
              a({
                width: t.width,
                height: t.height
              }), t = null, o || n(!0)
            }), t.addEventListener("error", () => {
              t = null, o || (n(!1), r(!0))
            }), t.src = e, () => {
              o = !0, null !== t && (t.src = "")
            }
          }, [e]), [t, s]
        };
      var at = n(6416);
      const it = () => {
          const {
            search: e
          } = (0, at.useLocation)();
          return new URLSearchParams(e)
        },
        ct = e => {
          const t = (0, U.useRef)();
          return (0, U.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        dt = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: o = null,
          requireBearerToken: r = !0,
          useCache: s = !0
        }) => {
          const a = K(),
            [i, c] = (0, U.useState)(null),
            [d, l] = (0, U.useState)(!1),
            [u, m] = (0, U.useState)(null),
            [p, h] = (0, U.useState)(!1),
            g = (0, U.useCallback)(async (t = {}, i = null) => {
              try {
                const {
                  fetchOptions: d = {}
                } = t;
                m(null), c(null), l(!0);
                const u = await v(i ?? e, {
                  pingBearer: a,
                  fetchOptions: n,
                  finalFetchOptions: d,
                  query: o,
                  requireBearerToken: r,
                  useCache: s
                });
                return u?.status || m(JSON.stringify(u?.error)), c(u), l(!1), u
              } catch (e) {
                m(String(e)), l(!1)
              } finally {
                h(!0)
              }
              return null
            }, [e, n, o]);
          return (0, U.useEffect)(() => {
            null === i && null === u && !d && t && g()
          }, [t, i, u, d, g]), {
            data: i,
            error: u,
            loading: d,
            fetch: g,
            resolved: p
          }
        },
        lt = "__RS_CUSTOM_EVENTS__",
        ut = e => `rsCustomEvent:${e}`;
      window[lt] || (window[lt] = {});
      const mt = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = ut(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[lt][n] || (window[lt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[lt][n].eventQueue.push(o), window[lt][n].subscribers.forEach(e => {
              e(o.detail)
            })
          };
          return (0, U.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        pt = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, U.useEffect)(() => {
            const n = ut(e);
            return window[lt][n] || (window[lt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[lt][n].subscribers.push(t), window[lt][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[lt][n].subscribers = window[lt][n].subscribers.filter(e => e !== t), 0 === window[lt][n].subscribers.length && delete window[lt][n]
            }
          }, [e, t]), (0, U.useMemo)(() => ({}), [])
        },
        ht = M({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, O.UT)(!1)
        }),
        gt = e => ht(e),
        wt = L({
          context: (0, U.createContext)(null),
          key: "scrollContext"
        }),
        ft = () => (0, U.useContext)(wt),
        bt = ({
          children: e
        }) => {
          const [t, n] = (0, U.useState)(window.pageYOffset), [o, r] = (0, U.useState)(null), [s, a] = (0, U.useState)(!1), i = (0, A.q)(ht);
          let c;
          const d = () => {
            a(!0), clearTimeout(c), c = setTimeout(() => {
              a(!1)
            }, 2e3)
          };
          return (0, U.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), s || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [s, i]), (0, U.useMemo)(() => (0, j.jsx)(wt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: gt,
              userShouldSeeMore: o
            },
            children: e
          }), [i, t, d, o])
        },
        vt = e => {
          const {
            signup: t,
            login: n
          } = h(), o = et(), r = g(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        },
        xt = {
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
        kt = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = xt;
          return Object.keys(xt).map(t => {
            const {
              min: o,
              max: r
            } = xt[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          }), {
            isMobile: e < xt.sm.min,
            isTablet: e < xt.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        yt = L({
          context: (0, U.createContext)(kt()),
          key: "resizeContext"
        }),
        {
          Consumer: St
        } = yt,
        Et = (0, O.UT)(kt()),
        Ct = ({
          children: e
        }) => {
          const t = (0, A.q)(Et);
          return (0, U.useEffect)(() => {
            const e = () => {
              Et(kt())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, j.jsx)(yt.Provider, {
            value: t,
            children: e
          })
        },
        Tt = () => (0, U.useContext)(yt),
        Pt = () => {
          const [e, t] = (0, U.useState)();
          return (0, U.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        Lt = () => {
          const [e, t] = (0, U.useState)(!1);
          return (0, U.useEffect)(() => {
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
      n(6988), navigator, navigator, navigator, navigator;
      const Rt = e => {
          const [t, n] = (0, U.useState)(!1), o = (0, U.useRef)(null);
          return (0, U.useEffect)(() => {
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
          }, [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        Mt = (e = 0) => {
          const t = (0, U.useRef)(null),
            [n, o] = (0, U.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(r.bottom, s) - Math.max(r.top, 0)) / r.height;
              o(a > e)
            };
          return (0, U.useEffect)(() => {
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
        jt = () => {
          const {
            formatRelativeTime: e
          } = (0, D.tz)();
          return {
            formatRelativeRoundedTime: t => {
              const n = "number" == typeof t ? t : t.getTime(),
                o = Math.round((n - Date.now()) / 1e3),
                r = Math.abs(o),
                {
                  unit: s,
                  divisor: a
                } = [{
                  unit: "second",
                  divisor: 1,
                  nextCutoff: 60
                }, {
                  unit: "minute",
                  divisor: 60,
                  nextCutoff: 3600
                }, {
                  unit: "hour",
                  divisor: 3600,
                  nextCutoff: 86400
                }, {
                  unit: "day",
                  divisor: 86400,
                  nextCutoff: 604800
                }, {
                  unit: "week",
                  divisor: 604800,
                  nextCutoff: 2592e3
                }, {
                  unit: "month",
                  divisor: 2592e3,
                  nextCutoff: 31536e3
                }].find(e => r < e.nextCutoff) || {
                  unit: "year",
                  divisor: 31536e3
                },
                i = Math.round(o / a);
              return e(i, s, {
                numeric: "always"
              })
            }
          }
        },
        Ut = () => {
          const e = K();
          return async ({
            service: t,
            returnUrl: n
          }) => await _e({
            service: t,
            returnUrl: n,
            pingBearer: e
          })
        };
      var At = n(2746),
        $t = n(4812);
      const _t = L({
          context: (0, U.createContext)({}),
          key: "gtmDatalayer"
        }),
        qt = () => (0, U.useContext)(_t),
        zt = ({
          children: e,
          ...t
        }) => {
          const n = qt() ?? {},
            o = (0, U.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, j.jsx)(_t.Provider, {
            value: o,
            children: e
          })
        },
        Bt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, at.useLocation)();
          return (0, U.useEffect)(() => {
            Ve({
              event: "trackPageview"
            })
          }, [n]), (0, j.jsx)(e, {
            ...t
          })
        })(e, t),
        It = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          We().initialize(t)
        },
        Ot = "rockstar-games-web";
      let Dt;
      try {
        const e = W.A.get(Ot) ?? "";
        Dt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Dt = {}
      }
      const Ft = (0, O.UT)(Dt),
        Ht = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Ft() ?? {}
          };
          return n[e] = t, null === t && delete n[e], W.A.set(Ot, JSON.stringify(n), {
            expires: 30,
            domain: Ue(),
            path: "/"
          }), Ft(n), n
        },
        Nt = () => ({
          webSettings: (0, A.q)(Ft),
          webSettingsReactive: Ft,
          mutateWebSettings: Ht
        })
    }
  }
]);