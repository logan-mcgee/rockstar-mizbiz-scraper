try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "398c7397-cee0-430a-a2e3-04c2a06aa162", e._sentryDebugIdIdentifier = "sentry-dbid-398c7397-cee0-430a-a2e3-04c2a06aa162")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [402], {
    6402(e, t, n) {
      n.r(t), n.d(t, {
        ApolloClient: () => H.R,
        ApolloProvider: () => N.X,
        DataLayerProvider: () => _t,
        InMemoryCache: () => F.D,
        PAGE_THEMES: () => $e,
        Platform: () => Le,
        Platforms: () => Me,
        ReactiveStateProvider: () => I,
        ResizeProvider: () => Lt,
        RockstarGraphProvider: () => ge,
        RockstarTokenProvider: () => W,
        ScrollProvider: () => kt,
        coreScApiFetch: () => v,
        createDeferredScrollTriggerRefresh: () => x,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => Te,
        downloadFile: () => De,
        findPlatform: () => Ae,
        generateTpaLink: () => Oe,
        getAccentColor: () => y,
        getBase: () => S,
        getCdnPrefix: () => _e,
        getConfigForDomain: () => m,
        getCookieValueByName: () => je,
        getGen8Consoles: () => Fe,
        getGen9Consoles: () => He,
        getLanguageLabel: () => Ge,
        getUriForGraphEnv: () => E,
        gql: () => tt.J1,
        gtmInit: () => Ft,
        importAll: () => Ie,
        isGen9Platform: () => Ne,
        makeVar: () => _.UT,
        mutateWebSettings: () => Xt,
        newswirePost: () => o,
        oneTrustInit: () => xe,
        safeStyles: () => T,
        scrollToElement: () => Ce,
        setContextItem: () => L,
        setCookieValue: () => Be,
        setMakeVarItem: () => R,
        supportedBrowsers: () => be,
        toScLocaleString: () => g,
        track: () => Ye,
        useApolloClient: () => ue,
        useBase: () => it,
        useBodyScrollable: () => ve,
        useDataLayer: () => zt,
        useGetTpaLinkGenerator: () => Bt,
        useHasReduceMotionPreference: () => Rt,
        useHasSaveDataPreference: () => At,
        useLazyQuery: () => $t._,
        useLocale: () => rt,
        useMutateState: () => O,
        useMutation: () => Ot.n,
        useNewswirePost: () => Ee,
        usePreloadImg: () => ct,
        usePrevious: () => ut,
        useQuery: () => me,
        useQueryParams: () => lt,
        useReactiveVar: () => U.q,
        useRelativeTime: () => jt,
        useRockstarEventDispatcher: () => pt,
        useRockstarEventSubscriber: () => wt,
        useRockstarToken: () => Y,
        useRockstarTokenPing: () => K,
        useRockstarTokenReactive: () => J,
        useRockstarWebSettings: () => Qt,
        useScApi: () => ht,
        useScAuthLinks: () => yt,
        useScroll: () => xt,
        useScrollTracking: () => qt,
        useScrollVisibility: () => Ut,
        useState: () => B,
        useWindowResize: () => Mt,
        webSettingsReactive: () => Gt,
        withAutoRouteTracking: () => Dt,
        withGtmTracking: () => Ke,
        withMediaBasedProps: () => et,
        withReactiveState: () => z,
        withRockstarGraph: () => pe,
        withTranslations: () => st
      });
      var r = {};
      n.r(r), n.d(r, {
        default: () => k
      });
      var o = {};
      n.r(o), n.d(o, {
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
          cms: r,
          graphEnv: o,
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
            graphEnv: d?.graphEnv ?? o,
            host: v,
            hostname: i,
            cdnBase: p,
            key: u,
            clientId: w,
            cms: `https://${r}.rockstargames.com/graphql`,
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
          query: r = null,
          pingBearer: o,
          requireBearerToken: a = !0,
          useCache: d = !0
        } = {}) => {
          try {
            const {
              bearerToken: l = null
            } = await (o?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...w && {
                "X-lang": w
              }
            };
            let h = `${p}/${e}`;
            if (null === r || (0, c.A)(r) || (h += `?${new URLSearchParams(r)}`), !l && a) return null;
            l && (u.Authorization = `Bearer ${l}`);
            const m = {
                headers: u
              },
              g = i().all([m, t, n]),
              v = JSON.stringify({
                ...g,
                url: h
              }),
              b = await (0, s.sc)(v);
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
            const x = await fetch(h, g);
            if (!x.ok) throw new Error(`ScApi fetch error for ${e} with status code ${x.status}`);
            const k = await x.json();
            return d && (f[b] = {
              response: k,
              loading: !1
            }), k
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        };
      var b = n(7978);
      const x = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  b.u.refresh()
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
        M = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        R = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (M()?.[n] || (M()[n] = {}), M()?.[n]?.[e] || (M()[n][e] = t), M()[n][e]);
      var A = n(9793),
        q = n(3082),
        U = n(7927);
      const j = L({
          context: (0, q.createContext)({}),
          key: "graphContextGet"
        }),
        B = () => (0, q.useContext)(j),
        $ = L({
          context: (0, q.createContext)({}),
          key: "graphContextSet"
        }),
        O = () => (0, q.useContext)($),
        I = ({
          children: e,
          state: t
        }) => {
          (0, U.q)(t);
          const n = (0, q.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, A.jsx)(j.Provider, {
            value: t(),
            children: (0, A.jsx)($.Provider, {
              value: n,
              children: e
            })
          })
        },
        z = (e, {
          state: t
        }) => function(n) {
          return (0, A.jsx)(I, {
            state: t,
            children: (0, A.jsx)(e, {
              ...n
            })
          })
        };
      var _ = n(9922),
        D = n(5174),
        F = n(3996),
        H = n(4395),
        N = n(8989),
        G = n(3568),
        X = n(4242);
      const Q = {
          token: (0, _.UT)("")
        },
        V = L({
          context: (0, q.createContext)(Q),
          key: "utilsTokenProvider"
        }),
        W = ({
          children: e,
          token: t
        }) => (0, A.jsx)(V.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        J = () => {
          const {
            token: e
          } = (0, q.useContext)(V);
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
            } = m(), r = e => {
              try {
                const {
                  exp: t = 0
                } = (0, X.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const o = r(G.A.get(t)) || r(e?.());
              if (o) return e(o), {
                bearerToken: o
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
        re = n(9647),
        oe = n.n(re);
      const se = (0, n(735).e)({
        sha256: s.sc
      });
      var ae = n(7324),
        ie = n(6065);
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
              data: r,
              loading: o,
              error: s,
              ...a
            } = (0, ae.IT)(e, n);
          return (0, q.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = (0, ie.A)(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, q.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: o
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [o]), (0, q.useEffect)(() => {
            if (n.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: o,
            error: s,
            data: r,
            ...a
          }
        },
        le = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        ue = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? E(e?.env) : e?.uri,
            r = {
              ...e,
              uri: n
            },
            [o] = (0, q.useState)(new F.D({
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
              const r = e?.() ?? null;
              return r ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${r}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, ne.$)({
              ...e,
              fetch: oe()
            }))(r))));
          return new H.R({
            cache: o,
            link: a
          })
        },
        he = (0, q.createContext)(de),
        me = (e, t) => (0, q.useContext)(he)(e, t),
        ge = (0, D.QY)(({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const r = ue({
            graphOptions: t,
            typePolicies: n
          });
          return (0, A.jsx)(W, {
            token: t?.token,
            children: (0, A.jsx)(N.X, {
              client: r,
              children: (0, A.jsx)(he.Provider, {
                value: de,
                children: e
              })
            })
          })
        }, le),
        pe = (e, {
          env: t = "prod"
        }) => {
          const n = (0, _.UT)("");
          return function(r) {
            return (0, A.jsx)(ge, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, A.jsx)(e, {
                ...r
              })
            })
          }
        },
        we = (0, _.UT)({}),
        fe = "data-disallow-body-scroll",
        ve = e => {
          const t = (0, U.q)(we),
            n = Object.values(t).some(e => !!e);
          return (0, q.useEffect)(() => {
            n ? document.documentElement.setAttribute(fe, "true") : document.documentElement.removeAttribute(fe)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => we(e))({
              ...t,
              [e]: n
            })
          }
        },
        be = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
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
          context: (0, q.createContext)(null),
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
        Ee = () => (0, q.useContext)(ke),
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
        constructor(e, t, n, r, o = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = r, this.aliasOnlineService = o, this.alias = s
        }
      }
      const Me = Object.freeze({
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
        Re = Object.freeze(Object.values(Me));

      function Ae(e) {
        if (!e) return;
        if (e instanceof Le) return e;
        const t = e.toString().toLowerCase();
        return Re.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var qe = n(3058);
      const Ue = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        je = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            r = t.find(e => e.startsWith(n)),
            o = r?.substring(n.length, r.length);
          return o
        },
        Be = (e, t) => {
          e && void 0 !== t && (0, qe.canStoreCookie)(e) && je(e) !== t && (document.cookie = `${e}=${t}; domain=${Ue()}; path=/;`)
        },
        $e = {
          BL: "bl"
        };
      Object.values($e), $e.BL;
      const Oe = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: r
        }] = (0, D.JK)(), {
          authHost: o,
          clientId: s
        } = m(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
        return i.searchParams.append("cid", s), i.searchParams.append("lang", r), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
      }, Ie = e => e.keys().forEach(e), ze = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], _e = (e = !0) => ze.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, De = e => {
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
            r = document.createElement("a");
          r.href = t, r.setAttribute("download", n), document.body.appendChild(r), r.click(), document.body.removeChild(r)
        }).catch(e => {
          console.log(e)
        })
      }, Fe = () => [Me.xbox360.name, Me.xboxone.name, Me.ps3.name, Me.ps4.name, Me.pc.name], He = () => [Me.xboxsx.name, Me.ps5.name, Me.pcalt.name], Ne = e => He().includes(e), Ge = e => {
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
      var Xe = n(1471),
        Qe = n.n(Xe);
      const Ve = (0, n(7279).A)(),
        We = Ve?.id,
        Je = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ye = e => {
          const t = {
            ...e,
            environment: We,
            display_type: Je
          };
          Qe().dataLayer({
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
        const [r, o] = (0, q.useState)(t), s = e => {
          let t = e;
          const n = t?.items;
          if (n?.length) {
            const e = n.map(e => s(e));
            t = {
              ...t,
              items: e
            }
          }
          const r = t?.mediaQueryList;
          return r?.length ? (r.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
            t = {
              ...t,
              ...e
            }
          }), t) : t
        };
        return (0, q.useEffect)(() => {
          const e = (0, Ze.A)(() => {
            o(s(t))
          }, n);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, A.jsx)(e, {
          ...r
        })
      })(e, n, t);
      var tt = n(3066);
      const nt = (0, _.UT)(document.documentElement.lang),
        rt = () => (0, U.q)(nt),
        ot = tt.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        st = (e, t = "default") => n => ((e, t, n) => {
          const r = ((e = "default") => {
            const t = rt(),
              {
                data: n
              } = me(ot, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return r ? (0, A.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, n, t),
        at = S(),
        it = () => at,
        ct = e => {
          const [t, n] = (0, q.useState)(null), [r, o] = (0, q.useState)(null), [s, a] = (0, q.useState)({});
          return (0, q.useLayoutEffect)(() => {
            let t = new Image,
              r = !1;
            return t.addEventListener("load", () => {
              a({
                width: t.width,
                height: t.height
              }), t = null, r || n(!0)
            }), t.addEventListener("error", () => {
              t = null, r || (n(!1), o(!0))
            }), t.src = e, () => {
              r = !0, null !== t && (t.src = "")
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
          const t = (0, q.useRef)();
          return (0, q.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        ht = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: r = null,
          requireBearerToken: o = !0,
          useCache: s = !0
        }) => {
          const a = K(),
            [i, c] = (0, q.useState)(null),
            [d, l] = (0, q.useState)(!1),
            [u, h] = (0, q.useState)(null),
            [m, g] = (0, q.useState)(!1),
            p = (0, q.useCallback)(async (t = {}, i = null) => {
              try {
                const {
                  fetchOptions: d = {}
                } = t;
                h(null), c(null), l(!0);
                const u = await v(i ?? e, {
                  pingBearer: a,
                  fetchOptions: n,
                  finalFetchOptions: d,
                  query: r,
                  requireBearerToken: o,
                  useCache: s
                });
                return u?.status || h(JSON.stringify(u?.error)), c(u), l(!1), u
              } catch (e) {
                h(String(e)), l(!1)
              } finally {
                g(!0)
              }
              return null
            }, [e, n, r]);
          return (0, q.useEffect)(() => {
            null === i && null === u && !d && t && p()
          }, [t, i, u, d, p]), {
            data: i,
            error: u,
            loading: d,
            fetch: p,
            resolved: m
          }
        },
        mt = "__RS_CUSTOM_EVENTS__",
        gt = e => `rsCustomEvent:${e}`;
      window[mt] || (window[mt] = {});
      const pt = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = gt(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[mt][n] || (window[mt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[mt][n].eventQueue.push(r), window[mt][n].subscribers.forEach(e => {
              e(r.detail)
            })
          };
          return (0, q.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        wt = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, q.useEffect)(() => {
            const n = gt(e);
            return window[mt][n] || (window[mt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[mt][n].subscribers.push(t), window[mt][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[mt][n].subscribers = window[mt][n].subscribers.filter(e => e !== t), 0 === window[mt][n].subscribers.length && delete window[mt][n]
            }
          }, [e, t]), (0, q.useMemo)(() => ({}), [])
        },
        ft = R({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, _.UT)(!1)
        }),
        vt = e => ft(e),
        bt = L({
          context: (0, q.createContext)(null),
          key: "scrollContext"
        }),
        xt = () => (0, q.useContext)(bt),
        kt = ({
          children: e
        }) => {
          const [t, n] = (0, q.useState)(window.pageYOffset), [r, o] = (0, q.useState)(null), [s, a] = (0, q.useState)(!1), i = (0, U.q)(ft);
          let c;
          const d = () => {
            a(!0), clearTimeout(c), c = setTimeout(() => {
              a(!1)
            }, 2e3)
          };
          return (0, q.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void o(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), s || o(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [s, i]), (0, q.useMemo)(() => (0, A.jsx)(bt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: vt,
              userShouldSeeMore: r
            },
            children: e
          }), [i, t, d, r])
        },
        yt = e => {
          const {
            signup: t,
            login: n
          } = m(), r = rt(), o = g(r);
          let s = "";
          return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
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
              min: r,
              max: o
            } = St[t], s = e >= r && e <= o, a = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: r,
              max: o
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
          context: (0, q.createContext)(Et()),
          key: "resizeContext"
        }),
        {
          Consumer: Tt
        } = Ct,
        Pt = (0, _.UT)(Et()),
        Lt = ({
          children: e
        }) => {
          const t = (0, U.q)(Pt);
          return (0, q.useEffect)(() => {
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
        Mt = () => (0, q.useContext)(Ct),
        Rt = () => {
          const [e, t] = (0, q.useState)();
          return (0, q.useEffect)(() => {
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
          const [e, t] = (0, q.useState)(!1);
          return (0, q.useEffect)(() => {
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
      const qt = e => {
          const [t, n] = (0, q.useState)(!1), r = (0, q.useRef)(null);
          return (0, q.useEffect)(() => {
            const o = () => {
              if (t || !r.current) return;
              const s = r.current,
                {
                  height: a
                } = s.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", o))
            };
            return window.addEventListener("scroll", o, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", o)
            }
          }, [t, e]), {
            ref: r,
            scrollTracked: t
          }
        },
        Ut = (e = 0) => {
          const t = (0, q.useRef)(null),
            [n, r] = (0, q.useState)(!1),
            o = () => {
              const n = t.current;
              if (!n) return;
              const o = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(o.bottom, s) - Math.max(o.top, 0)) / o.height;
              r(a > e)
            };
          return (0, q.useEffect)(() => {
            o();
            const e = () => requestAnimationFrame(o);
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
                r = Math.round((n - Date.now()) / 1e3),
                o = Math.abs(r),
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
                }].find(e => o < e.nextCutoff) || {
                  unit: "year",
                  divisor: 31536e3
                },
                i = Math.round(r / a);
              return e(i, s, {
                numeric: "always"
              })
            }
          }
        },
        Bt = () => {
          const e = K();
          return async ({
            service: t,
            returnUrl: n
          }) => await Oe({
            service: t,
            returnUrl: n,
            pingBearer: e
          })
        };
      var $t = n(2746),
        Ot = n(4812);
      const It = L({
          context: (0, q.createContext)({}),
          key: "gtmDatalayer"
        }),
        zt = () => (0, q.useContext)(It),
        _t = ({
          children: e,
          ...t
        }) => {
          const n = zt() ?? {},
            r = (0, q.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, A.jsx)(It.Provider, {
            value: r,
            children: e
          })
        },
        Dt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, dt.useLocation)();
          return (0, q.useEffect)(() => {
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
          Qe().initialize(t)
        },
        Ht = "rockstar-games-web";
      let Nt;
      try {
        const e = G.A.get(Ht) ?? "";
        Nt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Nt = {}
      }
      const Gt = (0, _.UT)(Nt),
        Xt = ({
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
        Qt = () => ({
          webSettings: (0, U.q)(Gt),
          webSettingsReactive: Gt,
          mutateWebSettings: Xt
        })
    }
  }
]);