try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "31a0fd7e-7cd4-4ecc-ad3b-f923c899226f", e._sentryDebugIdIdentifier = "sentry-dbid-31a0fd7e-7cd4-4ecc-ad3b-f923c899226f")
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
  [402], {
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
        A: () => i,
        C: () => s
      });
      var o = n(8861),
        r = n(573);
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        a = [{
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
        i = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = a.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), i = a[s >= 0 ? s : 0], c = a.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, r.A)((0, o.A)({}, c, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    6402(e, t, n) {
      n.r(t), n.d(t, {
        ApolloClient: () => H.R,
        ApolloProvider: () => N.X,
        DataLayerProvider: () => Ot,
        InMemoryCache: () => F.D,
        PAGE_THEMES: () => qe,
        Platform: () => Le,
        Platforms: () => Re,
        ReactiveStateProvider: () => B,
        ResizeProvider: () => Lt,
        RockstarGraphProvider: () => he,
        RockstarTokenProvider: () => V,
        ScrollProvider: () => kt,
        coreScApiFetch: () => b,
        createDeferredScrollTriggerRefresh: () => x,
        cx: () => o,
        detectIfWeShouldAnchorSomewhere: () => Te,
        downloadFile: () => De,
        findPlatform: () => Ae,
        generateTpaLink: () => ze,
        getAccentColor: () => y,
        getBase: () => S,
        getCdnPrefix: () => Oe,
        getConfigForDomain: () => p,
        getCookieValueByName: () => $e,
        getGen8Consoles: () => Fe,
        getGen9Consoles: () => He,
        getLanguageLabel: () => Ge,
        getUriForGraphEnv: () => E,
        gql: () => tt.J1,
        gtmInit: () => Ft,
        importAll: () => Be,
        isGen9Platform: () => Ne,
        makeVar: () => O.UT,
        mutateWebSettings: () => Wt,
        newswirePost: () => r,
        oneTrustInit: () => xe,
        safeStyles: () => T,
        scrollToElement: () => Ce,
        setContextItem: () => L,
        setCookieValue: () => _e,
        setMakeVarItem: () => M,
        supportedBrowsers: () => ve,
        toScLocaleString: () => h,
        track: () => Ye,
        useApolloClient: () => ue,
        useBase: () => it,
        useBodyScrollable: () => be,
        useDataLayer: () => It,
        useGetTpaLinkGenerator: () => _t,
        useHasReduceMotionPreference: () => Mt,
        useHasSaveDataPreference: () => At,
        useLazyQuery: () => qt._,
        useLocale: () => ot,
        useMutateState: () => z,
        useMutation: () => zt.n,
        useNewswirePost: () => Ee,
        usePreloadImg: () => ct,
        usePrevious: () => ut,
        useQuery: () => pe,
        useQueryParams: () => lt,
        useReactiveVar: () => U.q,
        useRelativeTime: () => $t,
        useRockstarEventDispatcher: () => gt,
        useRockstarEventSubscriber: () => wt,
        useRockstarToken: () => Y,
        useRockstarTokenPing: () => K,
        useRockstarTokenReactive: () => J,
        useRockstarWebSettings: () => Xt,
        useScApi: () => mt,
        useScAuthLinks: () => yt,
        useScroll: () => xt,
        useScrollTracking: () => jt,
        useScrollVisibility: () => Ut,
        useState: () => _,
        useWindowResize: () => Rt,
        webSettingsReactive: () => Gt,
        withAutoRouteTracking: () => Dt,
        withGtmTracking: () => Ke,
        withMediaBasedProps: () => et,
        withReactiveState: () => I,
        withRockstarGraph: () => ge,
        withTranslations: () => st
      });
      var o = {};
      n.r(o), n.d(o, {
        default: () => k
      });
      var r = {};
      n.r(r), n.d(r, {
        Consumer: () => ye,
        Provider: () => Se,
        useNewswirePost: () => Ee
      });
      var s = n(5942),
        a = n(6597),
        i = n.n(a),
        c = n(2088);
      const d = window?.env?.sc,
        l = window?.env?.marketing,
        u = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
          graphEnv: r,
          queryManifest: s,
          scHost: a,
          hostname: i,
          cdnBase: c,
          key: u,
          marketingAuthTLD: m
        }) => {
          const p = d?.apiHost ?? e,
            h = d?.authHost ?? t,
            g = d?.cdnBase ?? c,
            w = d?.clientId ?? n,
            f = l?.marketingAuthTLD ?? m,
            b = d?.scHost ?? a,
            v = l?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: d?.graphEnv ?? r,
            host: b,
            hostname: i,
            cdnBase: g,
            key: u,
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
        m = [u({
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
        p = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = m.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return m.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || m[0]
        },
        h = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: g
        } = p(),
        w = h(document.documentElement.lang),
        f = {},
        b = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: r,
          requireBearerToken: a = !0,
          useCache: d = !0
        } = {}) => {
          try {
            const {
              bearerToken: l = null
            } = await (r?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...w && {
                "X-lang": w
              }
            };
            let m = `${g}/${e}`;
            if (null === o || (0, c.A)(o) || (m += `?${new URLSearchParams(o)}`), !l && a) return null;
            l && (u.Authorization = `Bearer ${l}`);
            const p = {
                headers: u
              },
              h = i().all([p, t, n]),
              b = JSON.stringify({
                ...h,
                url: m
              }),
              v = await (0, s.sc)(b);
            if (d) {
              if (f[v]?.response) return f[v].response;
              if (f[v]?.loading) return {
                error: null,
                result: null
              };
              f[v] = {
                loading: !0
              }
            }
            const x = await fetch(m, h);
            if (!x.ok) throw new Error(`ScApi fetch error for ${e} with status code ${x.status}`);
            const k = await x.json();
            return d && (f[v] = {
              response: k,
              loading: !1
            }), k
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        };
      var v = n(7978);
      const x = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  v.u.refresh()
                })
              })
            },
            cleanup: () => {
              cancelAnimationFrame(e)
            }
          }
        },
        k = (...e) => e.filter(Boolean).join(" "),
        y = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17",
        S = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        },
        E = e => {
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
        };
      var C = n(628);
      const T = e => {
          const t = (0, C.A)(e);
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
      var A = n(9793),
        j = n(3082),
        U = n(7927);
      const $ = L({
          context: (0, j.createContext)({}),
          key: "graphContextGet"
        }),
        _ = () => (0, j.useContext)($),
        q = L({
          context: (0, j.createContext)({}),
          key: "graphContextSet"
        }),
        z = () => (0, j.useContext)(q),
        B = ({
          children: e,
          state: t
        }) => {
          (0, U.q)(t);
          const n = (0, j.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, A.jsx)($.Provider, {
            value: t(),
            children: (0, A.jsx)(q.Provider, {
              value: n,
              children: e
            })
          })
        },
        I = (e, {
          state: t
        }) => function(n) {
          return (0, A.jsx)(B, {
            state: t,
            children: (0, A.jsx)(e, {
              ...n
            })
          })
        };
      var O = n(9922),
        D = n(5174),
        F = n(3996),
        H = n(4395),
        N = n(8989),
        G = n(3568),
        W = n(4242);
      const X = {
          token: (0, O.UT)("")
        },
        Q = L({
          context: (0, j.createContext)(X),
          key: "utilsTokenProvider"
        }),
        V = ({
          children: e,
          token: t
        }) => (0, A.jsx)(Q.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        J = () => {
          const {
            token: e
          } = (0, j.useContext)(Q);
          return [e]
        },
        Y = () => {
          const [e] = J();
          return (0, U.q)(e)
        },
        K = () => {
          const [e] = J();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = p(), o = e => {
              try {
                const {
                  exp: t = 0
                } = (0, W.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const r = o(G.A.get(t)) || o(e?.());
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
      var ae = n(7324),
        ie = n(8446);
      const ce = document.documentElement.lang,
        de = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: ce,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: r,
              error: s,
              ...a
            } = (0, ae.IT)(e, n);
          return (0, j.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = (0, ie.A)(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, j.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, j.useEffect)(() => {
            if (n.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: r,
            error: s,
            data: o,
            ...a
          }
        },
        le = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        ue = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? E(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, j.useState)(new F.D({
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
        me = (0, j.createContext)(de),
        pe = (e, t) => (0, j.useContext)(me)(e, t),
        he = (0, D.QY)(({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = ue({
            graphOptions: t,
            typePolicies: n
          });
          return (0, A.jsx)(V, {
            token: t?.token,
            children: (0, A.jsx)(N.X, {
              client: o,
              children: (0, A.jsx)(me.Provider, {
                value: de,
                children: e
              })
            })
          })
        }, le),
        ge = (e, {
          env: t = "prod"
        }) => {
          const n = (0, O.UT)("");
          return function(o) {
            return (0, A.jsx)(he, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, A.jsx)(e, {
                ...o
              })
            })
          }
        },
        we = (0, O.UT)({}),
        fe = "data-disallow-body-scroll",
        be = e => {
          const t = (0, U.q)(we),
            n = Object.values(t).some(e => !!e);
          return (0, j.useEffect)(() => {
            n ? document.documentElement.setAttribute(fe, "true") : document.documentElement.removeAttribute(fe)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => we(e))({
              ...t,
              [e]: n
            })
          }
        },
        ve = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        xe = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        ke = L({
          context: (0, j.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: ye
        } = ke,
        Se = ({
          article: e,
          children: t
        }) => (0, A.jsx)(ke.Provider, {
          value: e,
          children: t
        }),
        Ee = () => (0, j.useContext)(ke),
        Ce = ({
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
        Te = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Ce({
            element: n
          }), Pe(n))
        },
        Pe = e => {
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
      class Le {
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
      const Re = Object.freeze({
          pc: new Le("pc", "PC Legacy", 8, "sc"),
          ps: new Le("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Le("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Le("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Le("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Le("xbox", "Xbox", 4, "xbl"),
          xbox360: new Le("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Le("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Le("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Le("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Le("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Le("applestore", "App Store", 102, "applestore"),
          googleplay: new Le("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Le("app_store", "App Store", 102, "applestore"),
          googlePlay: new Le("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Le("pcalt", "PC Enhanced", 22, "sc")
        }),
        Me = Object.freeze(Object.values(Re));

      function Ae(e) {
        if (!e) return;
        if (e instanceof Le) return e;
        const t = e.toString().toLowerCase();
        return Me.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var je = n(3058);
      const Ue = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        $e = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            r = o?.substring(n.length, o.length);
          return r
        },
        _e = (e, t) => {
          e && void 0 !== t && (0, je.canStoreCookie)(e) && $e(e) !== t && (document.cookie = `${e}=${t}; domain=${Ue()}; path=/;`)
        },
        qe = {
          BL: "bl"
        };
      Object.values(qe), qe.BL;
      const ze = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, D.JK)(), {
          authHost: r,
          clientId: s
        } = p(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return i.searchParams.append("cid", s), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
      }, Be = e => e.keys().forEach(e), Ie = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], Oe = (e = !0) => Ie.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, De = e => {
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
      }, Fe = () => [Re.xbox360.name, Re.xboxone.name, Re.ps3.name, Re.ps4.name, Re.pc.name], He = () => [Re.xboxsx.name, Re.ps5.name, Re.pcalt.name], Ne = e => He().includes(e), Ge = e => {
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
      var We = n(1471),
        Xe = n.n(We);
      const Qe = (0, n(7279).A)(),
        Ve = Qe?.id,
        Je = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ye = e => {
          const t = {
            ...e,
            environment: Ve,
            display_type: Je
          };
          Xe().dataLayer({
            dataLayer: t
          })
        },
        Ke = e => t => ((e, t) => (0, A.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ye(e)
          }
        }))(e, t);
      var Ze = n(9098);
      const et = (e, t = 250) => n => ((e, t, n) => {
        const [o, r] = (0, j.useState)(t), s = e => {
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
        return (0, j.useEffect)(() => {
          const e = (0, Ze.A)(() => {
            r(s(t))
          }, n);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, A.jsx)(e, {
          ...o
        })
      })(e, n, t);
      var tt = n(3066);
      const nt = (0, O.UT)(document.documentElement.lang),
        ot = () => (0, U.q)(nt),
        rt = tt.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        st = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = ot(),
              {
                data: n
              } = pe(rt, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, A.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t),
        at = S(),
        it = () => at,
        ct = e => {
          const [t, n] = (0, j.useState)(null), [o, r] = (0, j.useState)(null), [s, a] = (0, j.useState)({});
          return (0, j.useLayoutEffect)(() => {
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
      var dt = n(6416);
      const lt = () => {
          const {
            search: e
          } = (0, dt.useLocation)();
          return new URLSearchParams(e)
        },
        ut = e => {
          const t = (0, j.useRef)();
          return (0, j.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        mt = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: o = null,
          requireBearerToken: r = !0,
          useCache: s = !0
        }) => {
          const a = K(),
            [i, c] = (0, j.useState)(null),
            [d, l] = (0, j.useState)(!1),
            [u, m] = (0, j.useState)(null),
            [p, h] = (0, j.useState)(!1),
            g = (0, j.useCallback)(async (t = {}, i = null) => {
              try {
                const {
                  fetchOptions: d = {}
                } = t;
                m(null), c(null), l(!0);
                const u = await b(i ?? e, {
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
          return (0, j.useEffect)(() => {
            null === i && null === u && !d && t && g()
          }, [t, i, u, d, g]), {
            data: i,
            error: u,
            loading: d,
            fetch: g,
            resolved: p
          }
        },
        pt = "__RS_CUSTOM_EVENTS__",
        ht = e => `rsCustomEvent:${e}`;
      window[pt] || (window[pt] = {});
      const gt = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = ht(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[pt][n] || (window[pt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[pt][n].eventQueue.push(o), window[pt][n].subscribers.forEach(e => {
              e(o.detail)
            })
          };
          return (0, j.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        wt = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, j.useEffect)(() => {
            const n = ht(e);
            return window[pt][n] || (window[pt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[pt][n].subscribers.push(t), window[pt][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[pt][n].subscribers = window[pt][n].subscribers.filter(e => e !== t), 0 === window[pt][n].subscribers.length && delete window[pt][n]
            }
          }, [e, t]), (0, j.useMemo)(() => ({}), [])
        },
        ft = M({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, O.UT)(!1)
        }),
        bt = e => ft(e),
        vt = L({
          context: (0, j.createContext)(null),
          key: "scrollContext"
        }),
        xt = () => (0, j.useContext)(vt),
        kt = ({
          children: e
        }) => {
          const [t, n] = (0, j.useState)(window.pageYOffset), [o, r] = (0, j.useState)(null), [s, a] = (0, j.useState)(!1), i = (0, U.q)(ft);
          let c;
          const d = () => {
            a(!0), clearTimeout(c), c = setTimeout(() => {
              a(!1)
            }, 2e3)
          };
          return (0, j.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), s || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [s, i]), (0, j.useMemo)(() => (0, A.jsx)(vt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: bt,
              userShouldSeeMore: o
            },
            children: e
          }), [i, t, d, o])
        },
        yt = e => {
          const {
            signup: t,
            login: n
          } = p(), o = ot(), r = h(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        },
        St = {
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
        Et = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = St;
          return Object.keys(St).map(t => {
            const {
              min: o,
              max: r
            } = St[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          }), {
            isMobile: e < St.sm.min,
            isTablet: e < St.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        Ct = L({
          context: (0, j.createContext)(Et()),
          key: "resizeContext"
        }),
        {
          Consumer: Tt
        } = Ct,
        Pt = (0, O.UT)(Et()),
        Lt = ({
          children: e
        }) => {
          const t = (0, U.q)(Pt);
          return (0, j.useEffect)(() => {
            const e = () => {
              Pt(Et())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, A.jsx)(Ct.Provider, {
            value: t,
            children: e
          })
        },
        Rt = () => (0, j.useContext)(Ct),
        Mt = () => {
          const [e, t] = (0, j.useState)();
          return (0, j.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        At = () => {
          const [e, t] = (0, j.useState)(!1);
          return (0, j.useEffect)(() => {
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
      const jt = e => {
          const [t, n] = (0, j.useState)(!1), o = (0, j.useRef)(null);
          return (0, j.useEffect)(() => {
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
        Ut = (e = 0) => {
          const t = (0, j.useRef)(null),
            [n, o] = (0, j.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(r.bottom, s) - Math.max(r.top, 0)) / r.height;
              o(a > e)
            };
          return (0, j.useEffect)(() => {
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
        $t = () => {
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
        _t = () => {
          const e = K();
          return async ({
            service: t,
            returnUrl: n
          }) => await ze({
            service: t,
            returnUrl: n,
            pingBearer: e
          })
        };
      var qt = n(2746),
        zt = n(4812);
      const Bt = L({
          context: (0, j.createContext)({}),
          key: "gtmDatalayer"
        }),
        It = () => (0, j.useContext)(Bt),
        Ot = ({
          children: e,
          ...t
        }) => {
          const n = It() ?? {},
            o = (0, j.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, A.jsx)(Bt.Provider, {
            value: o,
            children: e
          })
        },
        Dt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, dt.useLocation)();
          return (0, j.useEffect)(() => {
            Ye({
              event: "trackPageview"
            })
          }, [n]), (0, A.jsx)(e, {
            ...t
          })
        })(e, t),
        Ft = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Xe().initialize(t)
        },
        Ht = "rockstar-games-web";
      let Nt;
      try {
        const e = G.A.get(Ht) ?? "";
        Nt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Nt = {}
      }
      const Gt = (0, O.UT)(Nt),
        Wt = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Gt() ?? {}
          };
          return n[e] = t, null === t && delete n[e], G.A.set(Ht, JSON.stringify(n), {
            expires: 30,
            domain: Ue(),
            path: "/"
          }), Gt(n), n
        },
        Xt = () => ({
          webSettings: (0, U.q)(Gt),
          webSettingsReactive: Gt,
          mutateWebSettings: Wt
        })
    }
  }
]);