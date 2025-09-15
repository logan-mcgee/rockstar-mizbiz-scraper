try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ac8b0624-8e79-4e39-a162-d818f2e42780", e._sentryDebugIdIdentifier = "sentry-dbid-ac8b0624-8e79-4e39-a162-d818f2e42780")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [7282], {
    3019: (e, t, n) => {
      var o = {
        "./de": [2666, 6879],
        "./en": [9390, 2243],
        "./es": [8697, 278],
        "./fr": [7185, 9022],
        "./it": [1872, 2365],
        "./ja": [3476, 9377],
        "./ko": [1239, 9028],
        "./pl": [1645, 1242],
        "./pt": [3669, 7970],
        "./ru": [1520, 7453],
        "./zh": [3907, 8880]
      };

      function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          r = t[0];
        return n.e(t[1]).then((() => n.t(r, 23)))
      }
      r.keys = () => Object.keys(o), r.id = 3019, e.exports = r
    },
    3514: (e, t, n) => {
      var o = {
        "./de": [1367, 4710],
        "./en": [579, 3486],
        "./es": [7304, 4011],
        "./fr": [2436, 4851],
        "./it": [665, 9936],
        "./ja": [9729, 2156],
        "./ko": [5414, 3885],
        "./pl": [4156, 6891],
        "./pt": [772, 3475],
        "./ru": [8501, 4528],
        "./zh": [8282, 4861]
      };

      function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          r = t[0];
        return n.e(t[1]).then((() => n.t(r, 23)))
      }
      r.keys = () => Object.keys(o), r.id = 3514, e.exports = r
    },
    4375: (e, t, n) => {
      var o = {
        "./de": [1464, 5639],
        "./en": [3872, 6267],
        "./es": [6507, 5742],
        "./fr": [31, 2678],
        "./it": [6625, 6997],
        "./ja": [3142, 6361],
        "./ko": [2189, 7452],
        "./pl": [6283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [4333, 5832]
      };

      function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          r = t[0];
        return n.e(t[1]).then((() => n.t(r, 23)))
      }
      r.keys = () => Object.keys(o), r.id = 4375, e.exports = r
    },
    4819: (e, t, n) => {
      var o = {
        "./de": [7894, 5259],
        "./en": [1658, 4799],
        "./es": [8637, 3370],
        "./fr": [3157, 7010],
        "./it": [9060, 4913],
        "./ja": [6688, 6285],
        "./ko": [4907, 6664],
        "./pl": [8097, 1054],
        "./pt": [8953, 662],
        "./ru": [7924, 5233],
        "./zh": [6975, 4700]
      };

      function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          r = t[0];
        return n.e(t[1]).then((() => n.t(r, 23)))
      }
      r.keys = () => Object.keys(o), r.id = 4819, e.exports = r
    },
    5267: (e, t, n) => {
      var o = {
        "./de": [406, 299],
        "./en": [874, 5663],
        "./es": [4013, 5530],
        "./fr": [4965, 2466],
        "./it": [8596, 7073],
        "./ja": [4656, 4621],
        "./ko": [5451, 824],
        "./pl": [6273, 2398],
        "./pt": [6585, 9126],
        "./ru": [7284, 3697],
        "./zh": [1615, 1868]
      };

      function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          r = t[0];
        return n.e(t[1]).then((() => n.t(r, 23)))
      }
      r.keys = () => Object.keys(o), r.id = 5267, e.exports = r
    },
    8525: (e, t, n) => {
      var o = {
        "./de": [5149, 9990],
        "./en": [8517, 1822],
        "./es": [3877, 2347],
        "./fr": [6170, 131],
        "./it": [5583, 8272],
        "./ja": [5571, 7436],
        "./ko": [8284, 2221],
        "./pl": [9682, 2171],
        "./pt": [2762, 8755],
        "./ru": [1007, 2864],
        "./zh": [8548, 3197]
      };

      function r(e) {
        if (!n.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          r = t[0];
        return n.e(t[1]).then((() => n.t(r, 23)))
      }
      r.keys = () => Object.keys(o), r.id = 8525, e.exports = r
    },
    8613: (e, t, n) => {
      "use strict";
      n.d(t, {
        JK: () => l
      }), n(2295), n(2229);
      var o = n(9867);
      const r = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const n = window.location.hostname.split("."),
            o = n.slice(n.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${o}; path=/;`
        },
        s = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        a = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        i = a[0],
        c = a,
        l = () => {
          const {
            location: e
          } = window, t = (0, o.A)(), n = (e => {
            const t = c.map((e => e.subdomaincom)),
              n = e.pathname.substring(1).split("/"),
              o = "detect-locals" === n[0] ? 1 : 0;
            return -1 !== t.indexOf(n[o]) ? n[o] : null
          })(e), a = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), l = i;
          let d = l;
          const u = `rockstarweb_lang.${t.cookieIdentifier}`,
            p = s(u);
          d = t.currentSite?.site === o.C.www ? c.find((e => e.subdomaincom === a)) || c.find((e => e.subdomaincom === n)) || l : c.find((e => e.iso === p)) || l;
          const [m, h] = ((e, t, n = !1) => {
            const o = s(e);
            return o && !n || r(e, t), [o, (a = e, e => {
              r(a, e)
            })];
            var a
          })(u, d.iso);
          return [d, h]
        };
      n(5422)
    },
    8881: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ApolloClient: () => A.R,
        ApolloProvider: () => B.X,
        DataLayerProvider: () => jt,
        GraphOperationsProvider: () => De,
        InMemoryCache: () => _.D,
        Platform: () => et,
        Platforms: () => tt,
        ReactiveStateProvider: () => $,
        ResizeProvider: () => Ee,
        RockstarGraphProvider: () => qe,
        RockstarTokenProvider: () => Z,
        ScrollProvider: () => ge,
        coreScApiFetch: () => b,
        detectIfWeShouldAnchorSomewhere: () => Ke,
        downloadFile: () => mt,
        findPlatform: () => ot,
        generateTpaLink: () => lt,
        getAccentColor: () => v,
        getBase: () => k,
        getCdnPrefix: () => pt,
        getConfigForDomain: () => m,
        getCookieValueByName: () => at,
        getGen8Consoles: () => ht,
        getGen9Consoles: () => wt,
        getLanguageLabel: () => ft,
        getUriForGraphEnv: () => y,
        gql: () => Pt.J1,
        gtmInit: () => Mt,
        importAll: () => dt,
        isGen9Platform: () => gt,
        makeVar: () => I.UT,
        mutateWebSettings: () => At,
        newswirePost: () => o,
        oneTrustInit: () => Ve,
        safeStyles: () => x,
        scrollToElement: () => Ye,
        setContextItem: () => E,
        setCookieValue: () => it,
        setMakeVarItem: () => P,
        supportedBrowsers: () => Je,
        toScLocaleString: () => h,
        track: () => St,
        useApolloClient: () => He,
        useBase: () => H,
        useBodyScrollable: () => Qe,
        useDataLayer: () => Ut,
        useHasReduceMotionPreference: () => Pe,
        useHasSaveDataPreference: () => Te,
        useLocale: () => W,
        useMutateState: () => M,
        useMutation: () => _e,
        useNewswirePost: () => ue,
        usePreloadImg: () => G,
        usePrevious: () => V,
        useQuery: () => Ie,
        useQueryParams: () => Q,
        useReactiveVar: () => O.q,
        useRockstarEventDispatcher: () => ae,
        useRockstarEventSubscriber: () => ie,
        useRockstarToken: () => te,
        useRockstarTokenPing: () => ne,
        useRockstarTokenReactive: () => ee,
        useRockstarWebSettings: () => Bt,
        useScApi: () => oe,
        useScAuthLinks: () => be,
        useScAuthTpaLink: () => fe,
        useScroll: () => we,
        useScrollTracking: () => Le,
        useState: () => j,
        useWindowResize: () => Ce,
        webSettingsReactive: () => _t,
        withAutoRouteTracking: () => Rt,
        withGtmTracking: () => Et,
        withMediaBasedProps: () => Ct,
        withReactiveState: () => D,
        withRockstarGraph: () => We,
        withTranslations: () => Lt
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => le,
        Provider: () => de,
        useNewswirePost: () => ue
      });
      var r = n(2887),
        s = n(9465),
        a = n.n(s),
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
          scHost: s,
          hostname: a,
          cdnBase: i,
          key: c,
          marketingAuthTLD: u
        }) => {
          const p = l?.apiHost ?? e,
            m = l?.authHost ?? t,
            h = l?.cdnBase ?? i,
            w = l?.clientId ?? n,
            g = d?.marketingAuthTLD ?? u,
            f = l?.scHost ?? s,
            b = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? r,
            host: f,
            hostname: a,
            cdnBase: h,
            key: c,
            clientId: w,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${f}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/${b}`
          }
        },
        p = [u({
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
        m = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = p.find((({
              key: t
            }) => t === e)) ?? null;
            if (t) return t
          }
          return p.find((({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname))) || p[0]
        },
        h = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: w
        } = m(),
        g = h(document.documentElement.lang),
        f = {},
        b = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: s,
          requireBearerToken: i = !0,
          useCache: l = !0
        } = {}) => {
          try {
            const {
              bearerToken: d = null
            } = await (s?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...g && {
                "X-lang": g
              }
            };
            let p = `${w}/${e}`;
            if (null === o || c().isEmpty(o) || (p += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const m = {
                headers: u
              },
              h = a().all([m, t, n]),
              b = JSON.stringify({
                ...h,
                url: p
              }),
              v = await (0, r.sc)(b);
            if (l) {
              if (f[v]?.response) return f[v].response;
              if (f[v]?.loading) return {
                error: null,
                result: null
              };
              f[v] = {
                loading: !0
              }
            }
            const k = await fetch(p, h),
              y = await k.json();
            return l && (f[v] = {
              response: y,
              loading: !1
            }), y
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, v = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", k = () => {
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
        O = n(3452);
      const U = E({
          context: (0, L.createContext)({}),
          key: "graphContextGet"
        }),
        j = () => (0, L.useContext)(U),
        R = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        M = () => (0, L.useContext)(R),
        $ = ({
          children: e,
          state: t
        }) => {
          (0, O.q)(t);
          const n = (0, L.useCallback)((e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }), [t]);
          return (0, T.jsx)(U.Provider, {
            value: t(),
            children: (0, T.jsx)(R.Provider, {
              value: n,
              children: e
            })
          })
        },
        D = (e, {
          state: t
        }) => function(n) {
          return (0, T.jsx)($, {
            state: t,
            children: (0, T.jsx)(e, {
              ...n
            })
          })
        };
      var I = n(1823),
        _ = n(9757),
        A = n(5102),
        B = n(8718),
        z = n(3585),
        N = n(6277);
      const F = k(),
        H = () => F,
        q = (0, I.UT)(document.documentElement.lang),
        W = () => (0, O.q)(q),
        G = e => {
          const [t, n] = (0, L.useState)(null), [o, r] = (0, L.useState)(null), [s, a] = (0, L.useState)({});
          return (0, L.useLayoutEffect)((() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", (() => {
              a({
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
      var X = n(9623);
      const Q = () => {
          const {
            search: e
          } = (0, X.useLocation)();
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
          token: (0, I.UT)("")
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
          return (0, O.q)(e)
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
            [s, a] = (0, L.useState)(null),
            [i, c] = (0, L.useState)(!1),
            [l, d] = (0, L.useState)(null),
            u = (0, L.useCallback)((async (t = {}, s = null) => {
              try {
                const {
                  fetchOptions: i = {}
                } = t;
                d(null), a(null), c(!0);
                const l = await b(s ?? e, {
                  pingBearer: r,
                  fetchOptions: n,
                  finalFetchOptions: i,
                  query: o
                });
                return l?.status || d(JSON.stringify(l?.error)), a(l), c(!1), l
              } catch (e) {
                d(String(e)), c(!1)
              }
              return null
            }), [e, n, o]);
          return (0, L.useEffect)((() => {
            null === s && null === l && !i && t && u()
          }), [t, s, l, i, u]), {
            data: s,
            error: l,
            loading: i,
            fetch: u
          }
        },
        re = "__RS_CUSTOM_EVENTS__",
        se = e => `rsCustomEvent:${e}`;
      window[re] || (window[re] = {});
      const ae = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = se(e),
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
            const n = se(e);
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
        pe = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, I.UT)(!1)
        }),
        me = e => pe(e),
        he = E({
          context: (0, L.createContext)(null),
          key: "scrollContext"
        }),
        we = () => (0, L.useContext)(he),
        ge = ({
          children: e
        }) => {
          const [t, n] = (0, L.useState)(window.pageYOffset), [o, r] = (0, L.useState)(null), [s, a] = (0, L.useState)(!1), i = (0, O.q)(pe);
          let c;
          const l = () => {
            a(!0), clearTimeout(c), c = setTimeout((() => {
              a(!1)
            }), 2e3)
          };
          return (0, L.useEffect)((() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), s || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [s, i]), (0, L.useMemo)((() => (0, T.jsx)(he.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: l,
              setFreezeUserShouldSeeMore: me,
              userShouldSeeMore: o
            },
            children: e
          })), [i, t, l, o])
        },
        fe = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = m(), r = W(), s = h(r), a = te();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(s), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(a), new URL(i, `https://${n}.rockstargames.com/`)
        },
        be = e => {
          const {
            signup: t,
            login: n
          } = m(), o = W(), r = h(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
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
        ke = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = ve;
          return Object.keys(ve).map((t => {
            const {
              min: o,
              max: r
            } = ve[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
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
        ye = E({
          context: (0, L.createContext)(ke()),
          key: "resizeContext"
        }),
        {
          Consumer: xe
        } = ye,
        Se = (0, I.UT)(ke()),
        Ee = ({
          children: e
        }) => {
          const t = (0, O.q)(Se);
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
        },
        Oe = (e, t) => {
          const n = W(),
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
            } = (0, N.IT)(e, o);
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
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, L.useEffect)((() => {
            if (o.autoSetError && a) throw new Error(String(a))
          }), [a]), {
            loading: s,
            error: a,
            data: r,
            ...i
          }
        },
        Ue = (0, L.createContext)((() => ({
          data: null
        }))),
        je = new Promise((e => {
          e()
        })),
        Re = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new _.D)
        },
        Me = [() => je, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new A.R(Re))
        }],
        $e = (0, L.createContext)((() => Me)),
        De = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, T.jsx)($e.Provider, {
          value: z.n,
          children: (0, T.jsx)(Ue.Provider, {
            value: Oe,
            children: e
          })
        })),
        Ie = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Ue)(e, t)),
        _e = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)($e)(e));
      var Ae = n(6347);
      var Be = n(3605),
        ze = n(1162),
        Ne = n.n(ze);
      const Fe = (0, n(2944).e)({
          sha256: r.sc
        }),
        He = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? y(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, L.useState)(new _.D({
              typePolicies: t
            })),
            s = Fe.concat((({
              token: e
            }) => (0, Ae.o)(((t, {
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
            }).concat((e => (0, Be.$)({
              ...e,
              fetch: Ne()
            }))(o)));
          return new A.R({
            cache: r,
            link: s
          })
        },
        qe = ({
          children: e,
          graphOptions: t,
          typePolicies: n
        }) => {
          const o = He({
            graphOptions: t,
            typePolicies: n ?? {}
          });
          return (0, T.jsx)(Z, {
            token: t?.token,
            children: (0, T.jsx)(B.X, {
              client: o,
              children: (0, T.jsx)(De, {
                children: e
              })
            })
          })
        },
        We = (e, {
          env: t = "prod"
        }) => {
          const n = (0, I.UT)("");
          return function(o) {
            return (0, T.jsx)(qe, {
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
        Ge = (0, I.UT)({}),
        Xe = "data-disallow-body-scroll",
        Qe = e => {
          const t = (0, O.q)(Ge),
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
        constructor(e, t, n, o, r = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = s
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
      const st = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        at = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        it = (e, t) => {
          e && void 0 !== t && (0, rt.canStoreCookie)(e) && at(e) !== t && (document.cookie = `${e}=${t}; domain=${st()}; path=/;`)
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
          clientId: s
        } = m(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return i.searchParams.append("cid", s), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
      }, dt = e => e.keys().forEach(e), ut = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], pt = (e = !0) => ut.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null, mt = e => {
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
      }, ht = () => [tt.xbox360.name, tt.xboxone.name, tt.ps3.name, tt.ps4.name, tt.pc.name], wt = () => [tt.xboxsx.name, tt.ps5.name, tt.pcalt.name], gt = e => wt().includes(e), ft = e => {
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
      var bt = n(9864),
        vt = n.n(bt);
      const kt = (0, n(9867).A)(),
        yt = kt?.id,
        xt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        St = e => {
          const t = {
            ...e,
            environment: yt,
            display_type: xt
          };
          vt().dataLayer({
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
          const [o, r] = (0, L.useState)(t), s = e => {
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
          return (0, L.useEffect)((() => {
            const e = c().debounce((() => {
              r(s(t))
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
            const t = W(),
              {
                data: n
              } = Ie(Tt, {
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
        Ot = E({
          context: (0, L.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ut = () => (0, L.useContext)(Ot),
        jt = ({
          children: e,
          ...t
        }) => {
          const n = Ut() ?? {},
            o = (0, L.useMemo)((() => ({
              ...n,
              ...t
            })), [n, t]);
          return (0, T.jsx)(Ot.Provider, {
            value: o,
            children: e
          })
        },
        Rt = e => t => ((e, t) => {
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
        Mt = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          vt().initialize(t)
        };
      var $t = n(7980);
      const Dt = "rockstar-games-web";
      let It;
      try {
        const e = $t.A.get(Dt) ?? "";
        It = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        It = {}
      }
      const _t = (0, I.UT)(It),
        At = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ..._t() ?? {}
          };
          return n[e] = t, null === t && delete n[e], $t.A.set(Dt, JSON.stringify(n), {
            expires: 30,
            domain: st(),
            path: "/"
          }), _t(n), n
        },
        Bt = () => ({
          webSettings: (0, O.q)(_t),
          webSettingsReactive: _t,
          mutateWebSettings: At
        })
    },
    9867: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => s,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        r = [{
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
        s = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0))) >= 0)), s = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    }
  }
]);