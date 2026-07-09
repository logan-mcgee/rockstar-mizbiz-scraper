try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "236008d6-1130-4467-9bc5-e589dfa7a38f", e._sentryDebugIdIdentifier = "sentry-dbid-236008d6-1130-4467-9bc5-e589dfa7a38f")
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
  [584], {
    4584(e, t, n) {
      n.r(t), n.d(t, {
        ApolloClient: () => H.R,
        ApolloProvider: () => N.X,
        DataLayerProvider: () => _t,
        InMemoryCache: () => F.D,
        PAGE_THEMES: () => Oe,
        Platform: () => Me,
        Platforms: () => Re,
        ReactiveStateProvider: () => I,
        ResizeProvider: () => Mt,
        RockstarGraphProvider: () => ge,
        RockstarTokenProvider: () => W,
        ScrollProvider: () => yt,
        coreScApiFetch: () => v,
        createDeferredScrollTriggerRefresh: () => x,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => Pe,
        downloadFile: () => Fe,
        findPlatform: () => qe,
        generateTpaLink: () => Ie,
        getAccentColor: () => y,
        getBase: () => S,
        getCdnPrefix: () => _e,
        getConfigForDomain: () => m,
        getCookieValueByName: () => Be,
        getGen8Consoles: () => He,
        getGen9Consoles: () => Ne,
        getLanguageLabel: () => Xe,
        getUriForGraphEnv: () => E,
        gql: () => nt.J1,
        gtmInit: () => Ht,
        importAll: () => ze,
        isEmptyMarkup: () => be,
        isGen9Platform: () => Ge,
        makeVar: () => D.UT,
        mutateWebSettings: () => Qt,
        newswirePost: () => o,
        oneTrustInit: () => ke,
        safeStyles: () => T,
        scrollToElement: () => Te,
        setContextItem: () => L,
        setCookieValue: () => $e,
        setMakeVarItem: () => R,
        supportedBrowsers: () => xe,
        toScLocaleString: () => g,
        track: () => Ke,
        useApolloClient: () => ue,
        useBase: () => ct,
        useBodyScrollable: () => ve,
        useDataLayer: () => Dt,
        useGetTpaLinkGenerator: () => $t,
        useHasReduceMotionPreference: () => At,
        useHasSaveDataPreference: () => qt,
        useLazyQuery: () => Ot._,
        useLocale: () => ot,
        useMutateState: () => O,
        useMutation: () => It.n,
        useNewswirePost: () => Ce,
        usePreloadImg: () => dt,
        usePrevious: () => ht,
        useQuery: () => me,
        useQueryParams: () => ut,
        useReactiveVar: () => U.q,
        useRelativeTime: () => Bt,
        useRockstarEventDispatcher: () => ft,
        useRockstarEventSubscriber: () => wt,
        useRockstarToken: () => Y,
        useRockstarTokenPing: () => K,
        useRockstarTokenReactive: () => J,
        useRockstarWebSettings: () => Vt,
        useScApi: () => mt,
        useScAuthLinks: () => St,
        useScroll: () => kt,
        useScrollTracking: () => Ut,
        useScrollVisibility: () => jt,
        useState: () => B,
        useWindowResize: () => Rt,
        webSettingsReactive: () => Xt,
        withAutoRouteTracking: () => Ft,
        withGtmTracking: () => Ze,
        withMediaBasedProps: () => tt,
        withReactiveState: () => z,
        withRockstarGraph: () => pe,
        withTranslations: () => at
      });
      var r = {};
      n.r(r), n.d(r, {
        default: () => k
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => Se,
        Provider: () => Ee,
        useNewswirePost: () => Ce
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
            f = d?.clientId ?? n,
            w = l?.marketingAuthTLD ?? h,
            v = d?.scHost ?? a,
            b = l?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: d?.graphEnv ?? o,
            host: v,
            hostname: i,
            cdnBase: p,
            key: u,
            clientId: f,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: g,
            queryManifest: s,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${f}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/${b}`,
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
        f = g(document.documentElement.lang),
        w = {},
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
              ...f && {
                "X-lang": f
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
              if (w[b]?.response) return w[b].response;
              if (w[b]?.loading) return {
                error: null,
                result: null
              };
              w[b] = {
                loading: !0
              }
            }
            const x = await fetch(h, g);
            if (!x.ok) throw new Error(`ScApi fetch error for ${e} with status code ${x.status}`);
            const k = await x.json();
            return d && (w[b] = {
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
      var D = n(9922),
        _ = n(5174),
        F = n(3996),
        H = n(4395),
        N = n(8989),
        G = n(3568),
        X = n(4242);
      const Q = {
          token: (0, D.UT)("")
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
      const te = (0, _.YK)({
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
            } = (0, _.tz)(),
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
        ge = (0, _.QY)(({
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
          const n = (0, D.UT)("");
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
        fe = (0, D.UT)({}),
        we = "data-disallow-body-scroll",
        ve = e => {
          const t = (0, U.q)(fe),
            n = Object.values(t).some(e => !!e);
          return (0, q.useEffect)(() => {
            n ? document.documentElement.setAttribute(we, "true") : document.documentElement.removeAttribute(we)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => fe(e))({
              ...t,
              [e]: n
            })
          }
        },
        be = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        xe = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        ke = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        ye = L({
          context: (0, q.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: Se
        } = ye,
        Ee = ({
          article: e,
          children: t
        }) => (0, A.jsx)(ye.Provider, {
          value: e,
          children: t
        }),
        Ce = () => (0, q.useContext)(ye),
        Te = ({
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
        Pe = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Te({
            element: n
          }), Le(n))
        },
        Le = e => {
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
      class Me {
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
      const Re = Object.freeze({
          pc: new Me("pc", "PC Legacy", 8, "sc"),
          ps: new Me("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Me("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Me("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Me("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Me("xbox", "Xbox", 4, "xbl"),
          xbox360: new Me("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Me("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Me("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Me("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Me("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Me("applestore", "App Store", 102, "applestore"),
          googleplay: new Me("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Me("app_store", "App Store", 102, "applestore"),
          googlePlay: new Me("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Me("pcalt", "PC Enhanced", 22, "sc")
        }),
        Ae = Object.freeze(Object.values(Re));

      function qe(e) {
        if (!e) return;
        if (e instanceof Me) return e;
        const t = e.toString().toLowerCase();
        return Ae.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var Ue = n(3058);
      const je = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Be = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            r = t.find(e => e.startsWith(n)),
            o = r?.substring(n.length, r.length);
          return o
        },
        $e = (e, t) => {
          e && void 0 !== t && (0, Ue.canStoreCookie)(e) && Be(e) !== t && (document.cookie = `${e}=${t}; domain=${je()}; path=/;`)
        },
        Oe = {
          BL: "bl"
        };
      Object.values(Oe), Oe.BL;
      const Ie = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: r
        }] = (0, _.JK)(), {
          authHost: o,
          clientId: s
        } = m(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
        return i.searchParams.append("cid", s), i.searchParams.append("lang", r), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
      }, ze = e => e.keys().forEach(e), De = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], _e = (e = !0) => De.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, Fe = e => {
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
      }, He = () => [Re.xbox360.name, Re.xboxone.name, Re.ps3.name, Re.ps4.name, Re.pc.name], Ne = () => [Re.xboxsx.name, Re.ps5.name, Re.pcalt.name], Ge = e => Ne().includes(e), Xe = e => {
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
      var Qe = n(1471),
        Ve = n.n(Qe);
      const We = (0, n(7279).A)(),
        Je = We?.id,
        Ye = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ke = e => {
          const t = {
            ...e,
            environment: Je,
            display_type: Ye
          };
          Ve().dataLayer({
            dataLayer: t
          })
        },
        Ze = e => t => ((e, t) => (0, A.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ke(e)
          }
        }))(e, t);
      var et = n(9098);
      const tt = (e, t = 250) => n => ((e, t, n) => {
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
          const e = (0, et.A)(() => {
            o(s(t))
          }, n);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, A.jsx)(e, {
          ...r
        })
      })(e, n, t);
      var nt = n(3066);
      const rt = (0, D.UT)(document.documentElement.lang),
        ot = () => (0, U.q)(rt),
        st = nt.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        at = (e, t = "default") => n => ((e, t, n) => {
          const r = ((e = "default") => {
            const t = ot(),
              {
                data: n
              } = me(st, {
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
        it = S(),
        ct = () => it,
        dt = e => {
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
      var lt = n(6416);
      const ut = () => {
          const {
            search: e
          } = (0, lt.useLocation)();
          return new URLSearchParams(e)
        },
        ht = e => {
          const t = (0, q.useRef)();
          return (0, q.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        mt = (e, {
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
        gt = "__RS_CUSTOM_EVENTS__",
        pt = e => `rsCustomEvent:${e}`;
      window[gt] || (window[gt] = {});
      const ft = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = pt(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[gt][n] || (window[gt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[gt][n].eventQueue.push(r), window[gt][n].subscribers.forEach(e => {
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
            const n = pt(e);
            return window[gt][n] || (window[gt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[gt][n].subscribers.push(t), window[gt][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[gt][n].subscribers = window[gt][n].subscribers.filter(e => e !== t), 0 === window[gt][n].subscribers.length && delete window[gt][n]
            }
          }, [e, t]), (0, q.useMemo)(() => ({}), [])
        },
        vt = R({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, D.UT)(!1)
        }),
        bt = e => vt(e),
        xt = L({
          context: (0, q.createContext)(null),
          key: "scrollContext"
        }),
        kt = () => (0, q.useContext)(xt),
        yt = ({
          children: e
        }) => {
          const [t, n] = (0, q.useState)(window.pageYOffset), [r, o] = (0, q.useState)(null), [s, a] = (0, q.useState)(!1), i = (0, U.q)(vt);
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
          }, [s, i]), (0, q.useMemo)(() => (0, A.jsx)(xt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: bt,
              userShouldSeeMore: r
            },
            children: e
          }), [i, t, d, r])
        },
        St = e => {
          const {
            signup: t,
            login: n
          } = m(), r = ot(), o = g(r);
          let s = "";
          return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        },
        Et = {
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
        Ct = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = Et;
          return Object.keys(Et).map(t => {
            const {
              min: r,
              max: o
            } = Et[t], s = e >= r && e <= o, a = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: r,
              max: o
            }
          }), {
            isMobile: e < Et.sm.min,
            isTablet: e < Et.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        Tt = L({
          context: (0, q.createContext)(Ct()),
          key: "resizeContext"
        }),
        {
          Consumer: Pt
        } = Tt,
        Lt = (0, D.UT)(Ct()),
        Mt = ({
          children: e
        }) => {
          const t = (0, U.q)(Lt);
          return (0, q.useEffect)(() => {
            const e = () => {
              Lt(Ct())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, A.jsx)(Tt.Provider, {
            value: t,
            children: e
          })
        },
        Rt = () => (0, q.useContext)(Tt),
        At = () => {
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
        qt = () => {
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
      const Ut = e => {
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
        jt = (e = 0) => {
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
        Bt = () => {
          const {
            formatRelativeTime: e
          } = (0, _.tz)();
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
        $t = () => {
          const e = K();
          return async ({
            service: t,
            returnUrl: n
          }) => await Ie({
            service: t,
            returnUrl: n,
            pingBearer: e
          })
        };
      var Ot = n(2746),
        It = n(4812);
      const zt = L({
          context: (0, q.createContext)({}),
          key: "gtmDatalayer"
        }),
        Dt = () => (0, q.useContext)(zt),
        _t = ({
          children: e,
          ...t
        }) => {
          const n = Dt() ?? {},
            r = (0, q.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, A.jsx)(zt.Provider, {
            value: r,
            children: e
          })
        },
        Ft = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, lt.useLocation)();
          return (0, q.useEffect)(() => {
            Ke({
              event: "trackPageview"
            })
          }, [n]), (0, A.jsx)(e, {
            ...t
          })
        })(e, t),
        Ht = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Ve().initialize(t)
        },
        Nt = "rockstar-games-web";
      let Gt;
      try {
        const e = G.A.get(Nt) ?? "";
        Gt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Gt = {}
      }
      const Xt = (0, D.UT)(Gt),
        Qt = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Xt() ?? {}
          };
          return n[e] = t, null === t && delete n[e], G.A.set(Nt, JSON.stringify(n), {
            expires: 30,
            domain: je(),
            path: "/"
          }), Xt(n), n
        },
        Vt = () => ({
          webSettings: (0, U.q)(Xt),
          webSettingsReactive: Xt,
          mutateWebSettings: Qt
        })
    }
  }
]);