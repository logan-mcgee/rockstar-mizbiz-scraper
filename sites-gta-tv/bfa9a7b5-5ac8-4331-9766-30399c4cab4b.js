try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bfa9a7b5-5ac8-4331-9766-30399c4cab4b", e._sentryDebugIdIdentifier = "sentry-dbid-bfa9a7b5-5ac8-4331-9766-30399c4cab4b")
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
  [8035], {
    58035(e, t, n) {
      n.r(t), n.d(t, {
        ApolloClient: () => _.R,
        ApolloProvider: () => D.X,
        DataLayerProvider: () => At,
        InMemoryCache: () => z.D,
        Platform: () => Ee,
        Platforms: () => Ce,
        ReactiveStateProvider: () => B,
        ResizeProvider: () => kt,
        RockstarGraphProvider: () => le,
        RockstarTokenProvider: () => X,
        ScrollProvider: () => pt,
        coreScApiFetch: () => v,
        cx: () => b,
        detectIfWeShouldAnchorSomewhere: () => ke,
        downloadFile: () => $e,
        findPlatform: () => Pe,
        generateTpaLink: () => je,
        getAccentColor: () => x,
        getBase: () => y,
        getCdnPrefix: () => Be,
        getConfigForDomain: () => m,
        getCookieValueByName: () => Re,
        getGen8Consoles: () => Oe,
        getGen9Consoles: () => Ie,
        getLanguageLabel: () => _e,
        getUriForGraphEnv: () => k,
        gql: () => We.J1,
        gtmInit: () => $t,
        importAll: () => qe,
        isGen9Platform: () => ze,
        makeVar: () => O.UT,
        mutateWebSettings: () => _t,
        newswirePost: () => o,
        oneTrustInit: () => pe,
        safeStyles: () => S,
        scrollToElement: () => ye,
        setContextItem: () => C,
        setCookieValue: () => Ue,
        setMakeVarItem: () => P,
        supportedBrowsers: () => xe,
        toScLocaleString: () => g,
        track: () => Xe,
        useApolloClient: () => ie,
        useBase: () => tt,
        useBodyScrollable: () => ge,
        useDataLayer: () => qt,
        useGetTpaLinkGenerator: () => Mt,
        useHasReduceMotionPreference: () => Et,
        useHasSaveDataPreference: () => Ct,
        useLazyQuery: () => Rt._,
        useLocale: () => Ye,
        useMutateState: () => A,
        useMutation: () => Ut.n,
        useNewswirePost: () => be,
        usePreloadImg: () => nt,
        usePrevious: () => st,
        useQuery: () => de,
        useQueryParams: () => rt,
        useReactiveVar: () => R.q,
        useRelativeTime: () => Lt,
        useRockstarEventDispatcher: () => dt,
        useRockstarEventSubscriber: () => lt,
        useRockstarToken: () => V,
        useRockstarTokenPing: () => W,
        useRockstarTokenReactive: () => Q,
        useRockstarWebSettings: () => Dt,
        useScApi: () => at,
        useScAuthLinks: () => wt,
        useScroll: () => gt,
        useScrollTracking: () => Tt,
        useScrollVisibility: () => Pt,
        useState: () => j,
        useWindowResize: () => St,
        webSettingsReactive: () => zt,
        withAutoRouteTracking: () => Bt,
        withGtmTracking: () => Qe,
        withMediaBasedProps: () => Ve,
        withReactiveState: () => $,
        withRockstarGraph: () => ue,
        withTranslations: () => Ze
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => fe,
        Provider: () => ve,
        useNewswirePost: () => be
      });
      var r = n(42887),
        s = n(79465),
        a = n.n(s),
        i = n(15076),
        c = n.n(i);
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
          marketingAuthTLD: h
        }) => {
          const m = d?.apiHost ?? e,
            g = d?.authHost ?? t,
            p = d?.cdnBase ?? c,
            w = d?.clientId ?? n,
            f = l?.marketingAuthTLD ?? h,
            v = d?.scHost ?? a,
            b = l?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: d?.graphEnv ?? r,
            host: v,
            hostname: i,
            cdnBase: p,
            key: u,
            clientId: w,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: g,
            queryManifest: s,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`,
            authCookieName: "BearerToken"
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
        g = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: p
        } = m(),
        w = g(document.documentElement.lang),
        f = {},
        v = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: s,
          requireBearerToken: i = !0,
          useCache: d = !0
        } = {}) => {
          try {
            const {
              bearerToken: l = null
            } = await (s?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...w && {
                "X-lang": w
              }
            };
            let h = `${p}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !l && i) return null;
            l && (u.Authorization = `Bearer ${l}`);
            const m = {
                headers: u
              },
              g = a().all([m, t, n]),
              v = JSON.stringify({
                ...g,
                url: h
              }),
              b = await (0, r.sc)(v);
            if (d) {
              if (f[b]?.response) return f[b].response;
              if (f[b]?.loading) return {
                error: null,
                result: null
              };
              f[b] = {
                loading: !0
              }
            }
            const x = await fetch(h, g),
              y = await x.json();
            return d && (f[b] = {
              response: y,
              loading: !1
            }), y
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = (...e) => e.filter(Boolean).join(" "), x = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", y = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, k = e => {
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
        }, S = e => {
          const t = c().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        }, E = () => window.reactContextFactory = window?.reactContextFactory ?? {}, C = ({
          context: e,
          key: t
        }) => (E()?.[t] || (E()[t] = e), E()[t]), T = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, P = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (T()?.[n] || (T()[n] = {}), T()?.[n]?.[e] || (T()[n][e] = t), T()[n][e]);
      var L = n(42295),
        M = n(71127),
        R = n(93452);
      const U = C({
          context: (0, M.createContext)({}),
          key: "graphContextGet"
        }),
        j = () => (0, M.useContext)(U),
        q = C({
          context: (0, M.createContext)({}),
          key: "graphContextSet"
        }),
        A = () => (0, M.useContext)(q),
        B = ({
          children: e,
          state: t
        }) => {
          (0, R.q)(t);
          const n = (0, M.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, L.jsx)(U.Provider, {
            value: t(),
            children: (0, L.jsx)(q.Provider, {
              value: n,
              children: e
            })
          })
        },
        $ = (e, {
          state: t
        }) => function(n) {
          return (0, L.jsx)(B, {
            state: t,
            children: (0, L.jsx)(e, {
              ...n
            })
          })
        };
      var O = n(21823),
        I = n(88613),
        z = n(19757),
        _ = n(75102),
        D = n(88718),
        H = n(37980),
        F = n(58128);
      const N = {
          token: (0, O.UT)("")
        },
        G = C({
          context: (0, M.createContext)(N),
          key: "utilsTokenProvider"
        }),
        X = ({
          children: e,
          token: t
        }) => (0, L.jsx)(G.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        Q = () => {
          const {
            token: e
          } = (0, M.useContext)(G);
          return [e]
        },
        V = () => {
          const [e] = Q();
          return (0, R.q)(e)
        },
        W = () => {
          const [e] = Q();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = m(), o = e => {
              try {
                const {
                  exp: t = 0
                } = (0, F.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const r = o(H.A.get(t)) || o(e?.());
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
      var J = n(6347);
      var Y = n(19526);
      const K = (0, I.YK)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var Z = n(83605),
        ee = n(61162),
        te = n.n(ee);
      const ne = (0, n(62944).e)({
        sha256: r.sc
      });
      var oe = n(46277);
      const re = document.documentElement.lang,
        se = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: re,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: r,
              error: s,
              ...a
            } = (0, oe.IT)(e, n);
          return (0, M.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, M.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, M.useEffect)(() => {
            if (n.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: r,
            error: s,
            data: o,
            ...a
          }
        },
        ae = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        ie = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? k(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, M.useState)(new z.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, I.tz)(),
            a = ne.concat((({
              formatMessage: e
            }) => (0, Y.S)(t => {
              const {
                response: n
              } = t;
              n?.errors && (n.errors = n?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const n = K[t?.code ?? ""];
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
            }) => (0, J.o)((t, {
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
            }).concat((e => (0, Z.$)({
              ...e,
              fetch: te()
            }))(o))));
          return new _.R({
            cache: r,
            link: a
          })
        },
        ce = (0, M.createContext)(se),
        de = (e, t) => (0, M.useContext)(ce)(e, t),
        le = (0, I.QY)(({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = ie({
            graphOptions: t,
            typePolicies: n
          });
          return (0, L.jsx)(X, {
            token: t?.token,
            children: (0, L.jsx)(D.X, {
              client: o,
              children: (0, L.jsx)(ce.Provider, {
                value: se,
                children: e
              })
            })
          })
        }, ae),
        ue = (e, {
          env: t = "prod"
        }) => {
          const n = (0, O.UT)("");
          return function(o) {
            return (0, L.jsx)(le, {
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
        he = (0, O.UT)({}),
        me = "data-disallow-body-scroll",
        ge = e => {
          const t = (0, R.q)(he),
            n = Object.values(t).some(e => !!e);
          return (0, M.useEffect)(() => {
            n ? document.documentElement.setAttribute(me, "true") : document.documentElement.removeAttribute(me)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => he(e))({
              ...t,
              [e]: n
            })
          }
        },
        pe = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        we = C({
          context: (0, M.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: fe
        } = we,
        ve = ({
          article: e,
          children: t
        }) => (0, L.jsx)(we.Provider, {
          value: e,
          children: t
        }),
        be = () => (0, M.useContext)(we),
        xe = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        ye = ({
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
        ke = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (ye({
            element: n
          }), Se(n))
        },
        Se = e => {
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
      class Ee {
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
      const Ce = Object.freeze({
          pc: new Ee("pc", "PC Legacy", 8, "sc"),
          ps: new Ee("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Ee("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Ee("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Ee("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Ee("xbox", "Xbox", 4, "xbl"),
          xbox360: new Ee("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Ee("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Ee("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Ee("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Ee("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Ee("applestore", "App Store", 102, "applestore"),
          googleplay: new Ee("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Ee("app_store", "App Store", 102, "applestore"),
          googlePlay: new Ee("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Ee("pcalt", "PC Enhanced", 22, "sc")
        }),
        Te = Object.freeze(Object.values(Ce));

      function Pe(e) {
        if (!e) return;
        if (e instanceof Ee) return e;
        const t = e.toString().toLowerCase();
        return Te.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var Le = n(6306);
      const Me = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Re = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            r = o?.substring(n.length, o.length);
          return r
        },
        Ue = (e, t) => {
          e && void 0 !== t && (0, Le.canStoreCookie)(e) && Re(e) !== t && (document.cookie = `${e}=${t}; domain=${Me()}; path=/;`)
        },
        je = async ({
          service: e,
          returnUrl: t,
          pingBearer: n
        }) => {
          const [{
            iso: o
          }] = (0, I.JK)(), {
            authHost: r,
            clientId: s
          } = m(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
          return i.searchParams.append("cid", s), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
        }, qe = e => e.keys().forEach(e), Ae = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }], Be = (e = !0) => Ae.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, $e = e => {
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
        }, Oe = () => [Ce.xbox360.name, Ce.xboxone.name, Ce.ps3.name, Ce.ps4.name, Ce.pc.name], Ie = () => [Ce.xboxsx.name, Ce.ps5.name, Ce.pcalt.name], ze = e => Ie().includes(e), _e = e => {
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
      var De = n(89864),
        He = n.n(De);
      const Fe = (0, n(79867).A)(),
        Ne = Fe?.id,
        Ge = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Xe = e => {
          const t = {
            ...e,
            environment: Ne,
            display_type: Ge
          };
          He().dataLayer({
            dataLayer: t
          })
        },
        Qe = e => t => ((e, t) => (0, L.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Xe(e)
          }
        }))(e, t),
        Ve = (e, t = 250) => n => ((e, t, n) => {
          const [o, r] = (0, M.useState)(t), s = e => {
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
          return (0, M.useEffect)(() => {
            const e = c().debounce(() => {
              r(s(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, L.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var We = n(40445);
      const Je = (0, O.UT)(document.documentElement.lang),
        Ye = () => (0, R.q)(Je),
        Ke = We.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ze = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = Ye(),
              {
                data: n
              } = de(Ke, {
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
        et = y(),
        tt = () => et,
        nt = e => {
          const [t, n] = (0, M.useState)(null), [o, r] = (0, M.useState)(null), [s, a] = (0, M.useState)({});
          return (0, M.useLayoutEffect)(() => {
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
      var ot = n(10181);
      const rt = () => {
          const {
            search: e
          } = (0, ot.useLocation)();
          return new URLSearchParams(e)
        },
        st = e => {
          const t = (0, M.useRef)();
          return (0, M.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        at = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: o = null,
          requireBearerToken: r = !0,
          useCache: s = !0
        }) => {
          const a = W(),
            [i, c] = (0, M.useState)(null),
            [d, l] = (0, M.useState)(!1),
            [u, h] = (0, M.useState)(null),
            [m, g] = (0, M.useState)(!1),
            p = (0, M.useCallback)(async (t = {}, i = null) => {
              try {
                const {
                  fetchOptions: d = {}
                } = t;
                h(null), c(null), l(!0);
                const u = await v(i ?? e, {
                  pingBearer: a,
                  fetchOptions: n,
                  finalFetchOptions: d,
                  query: o,
                  requireBearerToken: r,
                  useCache: s
                });
                return u?.status || h(JSON.stringify(u?.error)), c(u), l(!1), u
              } catch (e) {
                h(String(e)), l(!1)
              } finally {
                g(!0)
              }
              return null
            }, [e, n, o]);
          return (0, M.useEffect)(() => {
            null === i && null === u && !d && t && p()
          }, [t, i, u, d, p]), {
            data: i,
            error: u,
            loading: d,
            fetch: p,
            resolved: m
          }
        },
        it = "__RS_CUSTOM_EVENTS__",
        ct = e => `rsCustomEvent:${e}`;
      window[it] || (window[it] = {});
      const dt = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = ct(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[it][n] || (window[it][n] = {
              eventQueue: [],
              subscribers: []
            }), window[it][n].eventQueue.push(o), window[it][n].subscribers.forEach(e => {
              e(o.detail)
            })
          };
          return (0, M.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        lt = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, M.useEffect)(() => {
            const n = ct(e);
            return window[it][n] || (window[it][n] = {
              eventQueue: [],
              subscribers: []
            }), window[it][n].subscribers.push(t), window[it][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[it][n].subscribers = window[it][n].subscribers.filter(e => e !== t), 0 === window[it][n].subscribers.length && delete window[it][n]
            }
          }, [e, t]), (0, M.useMemo)(() => ({}), [])
        },
        ut = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, O.UT)(!1)
        }),
        ht = e => ut(e),
        mt = C({
          context: (0, M.createContext)(null),
          key: "scrollContext"
        }),
        gt = () => (0, M.useContext)(mt),
        pt = ({
          children: e
        }) => {
          const [t, n] = (0, M.useState)(window.pageYOffset), [o, r] = (0, M.useState)(null), [s, a] = (0, M.useState)(!1), i = (0, R.q)(ut);
          let c;
          const d = () => {
            a(!0), clearTimeout(c), c = setTimeout(() => {
              a(!1)
            }, 2e3)
          };
          return (0, M.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), s || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [s, i]), (0, M.useMemo)(() => (0, L.jsx)(mt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: ht,
              userShouldSeeMore: o
            },
            children: e
          }), [i, t, d, o])
        },
        wt = e => {
          const {
            signup: t,
            login: n
          } = m(), o = Ye(), r = g(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        },
        ft = {
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
        vt = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = ft;
          return Object.keys(ft).map(t => {
            const {
              min: o,
              max: r
            } = ft[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          }), {
            isMobile: e < ft.sm.min,
            isTablet: e < ft.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        bt = C({
          context: (0, M.createContext)(vt()),
          key: "resizeContext"
        }),
        {
          Consumer: xt
        } = bt,
        yt = (0, O.UT)(vt()),
        kt = ({
          children: e
        }) => {
          const t = (0, R.q)(yt);
          return (0, M.useEffect)(() => {
            const e = () => {
              yt(vt())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, L.jsx)(bt.Provider, {
            value: t,
            children: e
          })
        },
        St = () => (0, M.useContext)(bt),
        Et = () => {
          const [e, t] = (0, M.useState)();
          return (0, M.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        Ct = () => {
          const [e, t] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
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
      n(81878), navigator, navigator, navigator, navigator;
      const Tt = e => {
          const [t, n] = (0, M.useState)(!1), o = (0, M.useRef)(null);
          return (0, M.useEffect)(() => {
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
        Pt = (e = 0) => {
          const t = (0, M.useRef)(null),
            [n, o] = (0, M.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(r.bottom, s) - Math.max(r.top, 0)) / r.height;
              o(a > e)
            };
          return (0, M.useEffect)(() => {
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
        Lt = () => {
          const {
            formatRelativeTime: e
          } = (0, I.tz)();
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
        Mt = () => {
          const e = W();
          return async ({
            service: t,
            returnUrl: n
          }) => await je({
            service: t,
            returnUrl: n,
            pingBearer: e
          })
        };
      var Rt = n(66591),
        Ut = n(80701);
      const jt = C({
          context: (0, M.createContext)({}),
          key: "gtmDatalayer"
        }),
        qt = () => (0, M.useContext)(jt),
        At = ({
          children: e,
          ...t
        }) => {
          const n = qt() ?? {},
            o = (0, M.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, L.jsx)(jt.Provider, {
            value: o,
            children: e
          })
        },
        Bt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, ot.useLocation)();
          return (0, M.useEffect)(() => {
            Xe({
              event: "trackPageview"
            })
          }, [n]), (0, L.jsx)(e, {
            ...t
          })
        })(e, t),
        $t = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          He().initialize(t)
        },
        Ot = "rockstar-games-web";
      let It;
      try {
        const e = H.A.get(Ot) ?? "";
        It = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        It = {}
      }
      const zt = (0, O.UT)(It),
        _t = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...zt() ?? {}
          };
          return n[e] = t, null === t && delete n[e], H.A.set(Ot, JSON.stringify(n), {
            expires: 30,
            domain: Me(),
            path: "/"
          }), zt(n), n
        },
        Dt = () => ({
          webSettings: (0, R.q)(zt),
          webSettingsReactive: zt,
          mutateWebSettings: _t
        })
    }
  }
]);