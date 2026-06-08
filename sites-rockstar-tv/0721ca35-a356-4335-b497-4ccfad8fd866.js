try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0721ca35-a356-4335-b497-4ccfad8fd866", e._sentryDebugIdIdentifier = "sentry-dbid-0721ca35-a356-4335-b497-4ccfad8fd866")
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
  [240], {
    7240(e, t, n) {
      n.r(t), n.d(t, {
        ApolloClient: () => H.R,
        ApolloProvider: () => N.X,
        DataLayerProvider: () => Ot,
        InMemoryCache: () => F.D,
        Platform: () => Pe,
        Platforms: () => Le,
        ReactiveStateProvider: () => I,
        ResizeProvider: () => Ct,
        RockstarGraphProvider: () => me,
        RockstarTokenProvider: () => W,
        ScrollProvider: () => vt,
        coreScApiFetch: () => x,
        createDeferredScrollTriggerRefresh: () => k,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => Ce,
        downloadFile: () => ze,
        findPlatform: () => Re,
        generateTpaLink: () => Be,
        getAccentColor: () => S,
        getBase: () => E,
        getCdnPrefix: () => Ie,
        getConfigForDomain: () => g,
        getCookieValueByName: () => Ue,
        getGen8Consoles: () => De,
        getGen9Consoles: () => _e,
        getLanguageLabel: () => He,
        getUriForGraphEnv: () => C,
        gql: () => Ke.J1,
        gtmInit: () => zt,
        importAll: () => $e,
        isGen9Platform: () => Fe,
        makeVar: () => D.UT,
        mutateWebSettings: () => Ht,
        newswirePost: () => o,
        oneTrustInit: () => xe,
        safeStyles: () => T,
        scrollToElement: () => Ee,
        setContextItem: () => L,
        setCookieValue: () => je,
        setMakeVarItem: () => R,
        supportedBrowsers: () => ve,
        toScLocaleString: () => p,
        track: () => We,
        useApolloClient: () => le,
        useBase: () => ot,
        useBodyScrollable: () => fe,
        useDataLayer: () => $t,
        useGetTpaLinkGenerator: () => At,
        useHasReduceMotionPreference: () => Pt,
        useHasSaveDataPreference: () => Lt,
        useLazyQuery: () => Ut._,
        useLocale: () => et,
        useMutateState: () => O,
        useMutation: () => jt.n,
        useNewswirePost: () => Se,
        usePreloadImg: () => st,
        usePrevious: () => ct,
        useQuery: () => he,
        useQueryParams: () => it,
        useReactiveVar: () => U.q,
        useRelativeTime: () => qt,
        useRockstarEventDispatcher: () => ht,
        useRockstarEventSubscriber: () => mt,
        useRockstarToken: () => Y,
        useRockstarTokenPing: () => K,
        useRockstarTokenReactive: () => J,
        useRockstarWebSettings: () => Nt,
        useScApi: () => dt,
        useScAuthLinks: () => xt,
        useScroll: () => ft,
        useScrollTracking: () => Mt,
        useScrollVisibility: () => Rt,
        useState: () => B,
        useWindowResize: () => Tt,
        webSettingsReactive: () => Ft,
        withAutoRouteTracking: () => It,
        withGtmTracking: () => Je,
        withMediaBasedProps: () => Ye,
        withReactiveState: () => z,
        withRockstarGraph: () => ge,
        withTranslations: () => nt
      });
      var r = {};
      n.r(r), n.d(r, {
        default: () => y
      });
      var o = {};
      n.r(o), n.d(o, {
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
        h = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: r,
          graphEnv: o,
          queryManifest: s,
          scHost: a,
          hostname: i,
          cdnBase: c,
          key: d,
          marketingAuthTLD: h
        }) => {
          const m = l?.apiHost ?? e,
            g = l?.authHost ?? t,
            p = l?.cdnBase ?? c,
            w = l?.clientId ?? n,
            f = u?.marketingAuthTLD ?? h,
            v = l?.scHost ?? a,
            x = u?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? o,
            host: v,
            hostname: i,
            cdnBase: p,
            key: d,
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
            pingBearer: `https://${f}/${x}`,
            authCookieName: "BearerToken"
          }
        },
        m = [h({
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
        }), h({
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
        g = () => {
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
        p = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: w
        } = g(),
        f = p(document.documentElement.lang),
        v = {},
        x = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: o,
          requireBearerToken: a = !0,
          useCache: c = !0
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
            let h = `${w}/${e}`;
            if (null === r || d().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !l && a) return null;
            l && (u.Authorization = `Bearer ${l}`);
            const m = {
                headers: u
              },
              g = i().all([m, t, n]),
              p = JSON.stringify({
                ...g,
                url: h
              }),
              x = await (0, s.sc)(p);
            if (c) {
              if (v[x]?.response) return v[x].response;
              if (v[x]?.loading) return {
                error: null,
                result: null
              };
              v[x] = {
                loading: !0
              }
            }
            const b = await fetch(h, g),
              k = await b.json();
            return c && (v[x] = {
              response: k,
              loading: !1
            }), k
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        };
      var b = n(7978);
      const k = () => {
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
        M = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        R = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (M()?.[n] || (M()[n] = {}), M()?.[n]?.[e] || (M()[n][e] = t), M()[n][e]);
      var q = n(9793),
        A = n(3082),
        U = n(7927);
      const j = L({
          context: (0, A.createContext)({}),
          key: "graphContextGet"
        }),
        B = () => (0, A.useContext)(j),
        $ = L({
          context: (0, A.createContext)({}),
          key: "graphContextSet"
        }),
        O = () => (0, A.useContext)($),
        I = ({
          children: e,
          state: t
        }) => {
          (0, U.q)(t);
          const n = (0, A.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, q.jsx)(j.Provider, {
            value: t(),
            children: (0, q.jsx)($.Provider, {
              value: n,
              children: e
            })
          })
        },
        z = (e, {
          state: t
        }) => function(n) {
          return (0, q.jsx)(I, {
            state: t,
            children: (0, q.jsx)(e, {
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
          context: (0, A.createContext)(Q),
          key: "utilsTokenProvider"
        }),
        W = ({
          children: e,
          token: t
        }) => (0, q.jsx)(V.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        J = () => {
          const {
            token: e
          } = (0, A.useContext)(V);
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
            } = g(), r = e => {
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
              data: r,
              loading: o,
              error: s,
              ...a
            } = (0, ae.IT)(e, n);
          return (0, A.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = d().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, A.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: o
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [o]), (0, A.useEffect)(() => {
            if (n.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: o,
            error: s,
            data: r,
            ...a
          }
        },
        de = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        le = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? C(e?.env) : e?.uri,
            r = {
              ...e,
              uri: n
            },
            [o] = (0, A.useState)(new F.D({
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
        ue = (0, A.createContext)(ce),
        he = (e, t) => (0, A.useContext)(ue)(e, t),
        me = (0, _.QY)(({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const r = le({
            graphOptions: t,
            typePolicies: n
          });
          return (0, q.jsx)(W, {
            token: t?.token,
            children: (0, q.jsx)(N.X, {
              client: r,
              children: (0, q.jsx)(ue.Provider, {
                value: ce,
                children: e
              })
            })
          })
        }, de),
        ge = (e, {
          env: t = "prod"
        }) => {
          const n = (0, D.UT)("");
          return function(r) {
            return (0, q.jsx)(me, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, q.jsx)(e, {
                ...r
              })
            })
          }
        },
        pe = (0, D.UT)({}),
        we = "data-disallow-body-scroll",
        fe = e => {
          const t = (0, U.q)(pe),
            n = Object.values(t).some(e => !!e);
          return (0, A.useEffect)(() => {
            n ? document.documentElement.setAttribute(we, "true") : document.documentElement.removeAttribute(we)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => pe(e))({
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
        be = L({
          context: (0, A.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: ke
        } = be,
        ye = ({
          article: e,
          children: t
        }) => (0, q.jsx)(be.Provider, {
          value: e,
          children: t
        }),
        Se = () => (0, A.useContext)(be),
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
        constructor(e, t, n, r, o = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = r, this.aliasOnlineService = o, this.alias = s
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
        Me = Object.freeze(Object.values(Le));

      function Re(e) {
        if (!e) return;
        if (e instanceof Pe) return e;
        const t = e.toString().toLowerCase();
        return Me.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var qe = n(3058);
      const Ae = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Ue = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            r = t.find(e => e.startsWith(n)),
            o = r?.substring(n.length, r.length);
          return o
        },
        je = (e, t) => {
          e && void 0 !== t && (0, qe.canStoreCookie)(e) && Ue(e) !== t && (document.cookie = `${e}=${t}; domain=${Ae()}; path=/;`)
        },
        Be = async ({
          service: e,
          returnUrl: t,
          pingBearer: n
        }) => {
          const [{
            iso: r
          }] = (0, _.JK)(), {
            authHost: o,
            clientId: s
          } = g(), a = await n(), i = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
          return i.searchParams.append("cid", s), i.searchParams.append("lang", r), i.searchParams.append("returnUrl", t ?? window.location.pathname), a && "boolean" != typeof a && "string" == typeof a.bearerToken && i.searchParams.append("accessToken", a.bearerToken), i
        }, $e = e => e.keys().forEach(e), Oe = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }], Ie = (e = !0) => Oe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, ze = e => {
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
        }, De = () => [Le.xbox360.name, Le.xboxone.name, Le.ps3.name, Le.ps4.name, Le.pc.name], _e = () => [Le.xboxsx.name, Le.ps5.name, Le.pcalt.name], Fe = e => _e().includes(e), He = e => {
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
        Ge = n.n(Ne);
      const Xe = (0, n(7279).A)(),
        Qe = Xe?.id,
        Ve = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        We = e => {
          const t = {
            ...e,
            environment: Qe,
            display_type: Ve
          };
          Ge().dataLayer({
            dataLayer: t
          })
        },
        Je = e => t => ((e, t) => (0, q.jsx)(e, {
          ...t,
          gtmTrack: e => {
            We(e)
          }
        }))(e, t),
        Ye = (e, t = 250) => n => ((e, t, n) => {
          const [r, o] = (0, A.useState)(t), s = e => {
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
          return (0, A.useEffect)(() => {
            const e = d().debounce(() => {
              o(s(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, q.jsx)(e, {
            ...r
          })
        })(e, n, t);
      var Ke = n(3066);
      const Ze = (0, D.UT)(document.documentElement.lang),
        et = () => (0, U.q)(Ze),
        tt = Ke.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        nt = (e, t = "default") => n => ((e, t, n) => {
          const r = ((e = "default") => {
            const t = et(),
              {
                data: n
              } = he(tt, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return r ? (0, q.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, n, t),
        rt = E(),
        ot = () => rt,
        st = e => {
          const [t, n] = (0, A.useState)(null), [r, o] = (0, A.useState)(null), [s, a] = (0, A.useState)({});
          return (0, A.useLayoutEffect)(() => {
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
      var at = n(6416);
      const it = () => {
          const {
            search: e
          } = (0, at.useLocation)();
          return new URLSearchParams(e)
        },
        ct = e => {
          const t = (0, A.useRef)();
          return (0, A.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        dt = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: r = null,
          requireBearerToken: o = !0,
          useCache: s = !0
        }) => {
          const a = K(),
            [i, c] = (0, A.useState)(null),
            [d, l] = (0, A.useState)(!1),
            [u, h] = (0, A.useState)(null),
            [m, g] = (0, A.useState)(!1),
            p = (0, A.useCallback)(async (t = {}, i = null) => {
              try {
                const {
                  fetchOptions: d = {}
                } = t;
                h(null), c(null), l(!0);
                const u = await x(i ?? e, {
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
          return (0, A.useEffect)(() => {
            null === i && null === u && !d && t && p()
          }, [t, i, u, d, p]), {
            data: i,
            error: u,
            loading: d,
            fetch: p,
            resolved: m
          }
        },
        lt = "__RS_CUSTOM_EVENTS__",
        ut = e => `rsCustomEvent:${e}`;
      window[lt] || (window[lt] = {});
      const ht = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = ut(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[lt][n] || (window[lt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[lt][n].eventQueue.push(r), window[lt][n].subscribers.forEach(e => {
              e(r.detail)
            })
          };
          return (0, A.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        mt = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, A.useEffect)(() => {
            const n = ut(e);
            return window[lt][n] || (window[lt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[lt][n].subscribers.push(t), window[lt][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[lt][n].subscribers = window[lt][n].subscribers.filter(e => e !== t), 0 === window[lt][n].subscribers.length && delete window[lt][n]
            }
          }, [e, t]), (0, A.useMemo)(() => ({}), [])
        },
        gt = R({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, D.UT)(!1)
        }),
        pt = e => gt(e),
        wt = L({
          context: (0, A.createContext)(null),
          key: "scrollContext"
        }),
        ft = () => (0, A.useContext)(wt),
        vt = ({
          children: e
        }) => {
          const [t, n] = (0, A.useState)(window.pageYOffset), [r, o] = (0, A.useState)(null), [s, a] = (0, A.useState)(!1), i = (0, U.q)(gt);
          let c;
          const d = () => {
            a(!0), clearTimeout(c), c = setTimeout(() => {
              a(!1)
            }, 2e3)
          };
          return (0, A.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void o(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), s || o(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [s, i]), (0, A.useMemo)(() => (0, q.jsx)(wt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: pt,
              userShouldSeeMore: r
            },
            children: e
          }), [i, t, d, r])
        },
        xt = e => {
          const {
            signup: t,
            login: n
          } = g(), r = et(), o = p(r);
          let s = "";
          return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        },
        bt = {
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
            n = bt;
          return Object.keys(bt).map(t => {
            const {
              min: r,
              max: o
            } = bt[t], s = e >= r && e <= o, a = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: r,
              max: o
            }
          }), {
            isMobile: e < bt.sm.min,
            isTablet: e < bt.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        yt = L({
          context: (0, A.createContext)(kt()),
          key: "resizeContext"
        }),
        {
          Consumer: St
        } = yt,
        Et = (0, D.UT)(kt()),
        Ct = ({
          children: e
        }) => {
          const t = (0, U.q)(Et);
          return (0, A.useEffect)(() => {
            const e = () => {
              Et(kt())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, q.jsx)(yt.Provider, {
            value: t,
            children: e
          })
        },
        Tt = () => (0, A.useContext)(yt),
        Pt = () => {
          const [e, t] = (0, A.useState)();
          return (0, A.useEffect)(() => {
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
          const [e, t] = (0, A.useState)(!1);
          return (0, A.useEffect)(() => {
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
      const Mt = e => {
          const [t, n] = (0, A.useState)(!1), r = (0, A.useRef)(null);
          return (0, A.useEffect)(() => {
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
        Rt = (e = 0) => {
          const t = (0, A.useRef)(null),
            [n, r] = (0, A.useState)(!1),
            o = () => {
              const n = t.current;
              if (!n) return;
              const o = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(o.bottom, s) - Math.max(o.top, 0)) / o.height;
              r(a > e)
            };
          return (0, A.useEffect)(() => {
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
        qt = () => {
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
        At = () => {
          const e = K();
          return async ({
            service: t,
            returnUrl: n
          }) => await Be({
            service: t,
            returnUrl: n,
            pingBearer: e
          })
        };
      var Ut = n(2746),
        jt = n(4812);
      const Bt = L({
          context: (0, A.createContext)({}),
          key: "gtmDatalayer"
        }),
        $t = () => (0, A.useContext)(Bt),
        Ot = ({
          children: e,
          ...t
        }) => {
          const n = $t() ?? {},
            r = (0, A.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, q.jsx)(Bt.Provider, {
            value: r,
            children: e
          })
        },
        It = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, at.useLocation)();
          return (0, A.useEffect)(() => {
            We({
              event: "trackPageview"
            })
          }, [n]), (0, q.jsx)(e, {
            ...t
          })
        })(e, t),
        zt = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Ge().initialize(t)
        },
        Dt = "rockstar-games-web";
      let _t;
      try {
        const e = G.A.get(Dt) ?? "";
        _t = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        _t = {}
      }
      const Ft = (0, D.UT)(_t),
        Ht = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Ft() ?? {}
          };
          return n[e] = t, null === t && delete n[e], G.A.set(Dt, JSON.stringify(n), {
            expires: 30,
            domain: Ae(),
            path: "/"
          }), Ft(n), n
        },
        Nt = () => ({
          webSettings: (0, U.q)(Ft),
          webSettingsReactive: Ft,
          mutateWebSettings: Ht
        })
    }
  }
]);