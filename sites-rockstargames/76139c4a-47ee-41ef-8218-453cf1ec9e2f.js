try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "76139c4a-47ee-41ef-8218-453cf1ec9e2f", e._sentryDebugIdIdentifier = "sentry-dbid-76139c4a-47ee-41ef-8218-453cf1ec9e2f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [637], {
    79867(e, t, o) {
      o.d(t, {
        A: () => l,
        C: () => i
      });
      var n = o(56265),
        a = o.n(n),
        s = o(41972),
        r = o.n(s);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        d = [{
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
        l = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = d.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), s = d[n >= 0 ? n : 0], i = d.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), r()(a()({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    60637(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => f.ApolloClient,
        ApolloProvider: () => f.ApolloProvider,
        DataLayerProvider: () => Te,
        InMemoryCache: () => f.InMemoryCache,
        Platform: () => J,
        Platforms: () => K,
        ReactiveStateProvider: () => y,
        ResizeProvider: () => Ue.uU,
        RockstarGraphProvider: () => U,
        RockstarTokenProvider: () => C.ec,
        ScrollProvider: () => Pe.N2,
        coreScApiFetch: () => n.A,
        cx: () => a,
        detectIfWeShouldAnchorSomewhere: () => X,
        downloadFile: () => de,
        findPlatform: () => Z,
        generateTpaLink: () => ae.t,
        getAccentColor: () => s,
        getBase: () => r.A,
        getCdnPrefix: () => ie,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => oe,
        getGen8Consoles: () => le,
        getGen9Consoles: () => ce,
        getLanguageLabel: () => ge,
        getUriForGraphEnv: () => d,
        gql: () => f.gql,
        gtmInit: () => je,
        importAll: () => se,
        isGen9Platform: () => ue,
        makeVar: () => f.makeVar,
        mutateWebSettings: () => _e,
        newswirePost: () => $,
        oneTrustInit: () => F,
        safeStyles: () => u,
        scrollToElement: () => W,
        setContextItem: () => g.A,
        setCookieValue: () => ne,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => Q,
        toScLocaleString: () => Le.t,
        track: () => be,
        useApolloClient: () => D,
        useBase: () => Ce.RK,
        useBodyScrollable: () => V,
        useDataLayer: () => Ae,
        useGetTpaLinkGenerator: () => Ce.gd,
        useHasReduceMotionPreference: () => Ce.vx,
        useHasSaveDataPreference: () => Ce.sb,
        useLazyQuery: () => f.useLazyQuery,
        useLocale: () => Ce.Ym,
        useMutateState: () => x,
        useMutation: () => f.useMutation,
        useNewswirePost: () => Ce.CA,
        usePreloadImg: () => Ce.OG,
        usePrevious: () => Ce.ZC,
        useQuery: () => z,
        useQueryParams: () => Ce.sq,
        useReactiveVar: () => f.useReactiveVar,
        useRelativeTime: () => Ce.Vq,
        useRockstarEventDispatcher: () => Ce.OH,
        useRockstarEventSubscriber: () => Ce.zP,
        useRockstarToken: () => C.e9,
        useRockstarTokenPing: () => C.Es,
        useRockstarTokenReactive: () => C.bD,
        useRockstarWebSettings: () => ze,
        useScApi: () => Ce.Cb,
        useScAuthLinks: () => Ce.N6,
        useScroll: () => Pe.Ll,
        useScrollTracking: () => Ce.GA,
        useScrollVisibility: () => Ce.JE,
        useState: () => b,
        useWindowResize: () => Ue.G4,
        webSettingsReactive: () => De,
        withAutoRouteTracking: () => Me,
        withGtmTracking: () => ve,
        withMediaBasedProps: () => xe,
        withReactiveState: () => k,
        withRockstarGraph: () => B,
        withTranslations: () => Se
      });
      var n = o(60099);
      const a = (...e) => e.filter(Boolean).join(" "),
        s = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = o(60309),
        i = o(45547);
      const d = e => {
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
      var l = o(15076),
        c = o.n(l);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var g = o(9482),
        p = o(52690),
        h = o(42295),
        m = o(71127),
        f = o(32467);
      const w = (0, g.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, m.useContext)(w),
        v = (0, g.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, m.useContext)(v),
        y = ({
          children: e,
          state: t
        }) => {
          (0, f.useReactiveVar)(t);
          const o = (0, m.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, h.jsx)(w.Provider, {
            value: t(),
            children: (0, h.jsx)(v.Provider, {
              value: o,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(o) {
          return (0, h.jsx)(y, {
            state: t,
            children: (0, h.jsx)(e, {
              ...o
            })
          })
        };
      var S = o(42909),
        C = o(20772),
        P = o(6347);
      var E = o(19526);
      const A = (0, S.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var T = o(61162),
        L = o.n(T);
      var R = o(62944),
        M = o(42887);
      const j = (0, R.e)({
          sha256: M.sc
        }),
        I = document.documentElement.lang,
        O = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: I,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: a,
              error: s,
              ...r
            } = (0, f.useQuery)(e, o);
          return (0, m.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = c().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, m.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, m.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: a,
            error: s,
            data: n,
            ...r
          }
        },
        q = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        D = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? d(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, m.useState)(new f.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, S.useIntl)(),
            r = j.concat((({
              formatMessage: e
            }) => (0, E.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = A[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(o)
                  }
                }
                return t
              }))
            }))({
              formatMessage: s
            }).concat((({
              token: e
            }) => (0, P.o)((t, {
              headers: o
            }) => {
              const n = e?.() ?? null;
              return n ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${n}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, f.createHttpLink)({
              ...e,
              fetch: L()
            }))(n))));
          return new f.ApolloClient({
            cache: a,
            link: r
          })
        },
        _ = (0, m.createContext)(O),
        z = (e, t) => (0, m.useContext)(_)(e, t),
        U = (0, S.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = D({
            graphOptions: t,
            typePolicies: o
          });
          return (0, h.jsx)(C.ec, {
            token: t?.token,
            children: (0, h.jsx)(f.ApolloProvider, {
              client: n,
              children: (0, h.jsx)(_.Provider, {
                value: O,
                children: e
              })
            })
          })
        }, q),
        B = (e, {
          env: t = "prod"
        }) => {
          const o = (0, f.makeVar)("");
          return function(n) {
            return (0, h.jsx)(U, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, h.jsx)(e, {
                ...n
              })
            })
          }
        },
        N = (0, f.makeVar)({}),
        G = "data-disallow-body-scroll",
        V = e => {
          const t = (0, f.useReactiveVar)(N),
            o = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            o ? document.documentElement.setAttribute(G, "true") : document.documentElement.removeAttribute(G)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => N(e))({
              ...t,
              [e]: o
            })
          }
        },
        F = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var $ = o(89656);
      const Q = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        W = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            o = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        X = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (W({
            element: o
          }), H(o))
        },
        H = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const o = e?.querySelectorAll(t.join(", "));
            if (o?.length) {
              const e = [...o].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class J {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, a = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = a, this.alias = s
        }
      }
      const K = Object.freeze({
          pc: new J("pc", "PC Legacy", 8, "sc"),
          ps: new J("ps", "PlayStation", 3, "np", "ps"),
          ps3: new J("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new J("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new J("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new J("xbox", "Xbox", 4, "xbl"),
          xbox360: new J("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new J("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new J("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new J("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new J("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new J("applestore", "App Store", 102, "applestore"),
          googleplay: new J("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new J("app_store", "App Store", 102, "applestore"),
          googlePlay: new J("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new J("pcalt", "PC Enhanced", 22, "sc")
        }),
        Y = Object.freeze(Object.values(K));

      function Z(e) {
        if (!e) return;
        if (e instanceof J) return e;
        const t = e.toString().toLowerCase();
        return Y.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ee = o(6306);
      const te = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        oe = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        ne = (e, t) => {
          e && void 0 !== t && (0, ee.canStoreCookie)(e) && oe(e) !== t && (document.cookie = `${e}=${t}; domain=${te()}; path=/;`)
        };
      var ae = o(68466);
      const se = e => e.keys().forEach(e),
        re = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ie = (e = !0) => re.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        de = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            o = (e => {
              const t = new URL(e).pathname.split("/"),
                o = t[t.length - 1];
              return decodeURIComponent(o)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              n = document.createElement("a");
            n.href = t, n.setAttribute("download", o), document.body.appendChild(n), n.click(), document.body.removeChild(n)
          }).catch(e => {
            console.log(e)
          })
        },
        le = () => [K.xbox360.name, K.xboxone.name, K.ps3.name, K.ps4.name, K.pc.name],
        ce = () => [K.xboxsx.name, K.ps5.name, K.pcalt.name],
        ue = e => ce().includes(e),
        ge = e => {
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
      var pe = o(89864),
        he = o.n(pe);
      const me = (0, o(79867).A)(),
        fe = me?.id,
        we = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        be = e => {
          const t = {
            ...e,
            environment: fe,
            display_type: we
          };
          he().dataLayer({
            dataLayer: t
          })
        },
        ve = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            be(e)
          }
        }))(e, t),
        xe = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, m.useState)(t), s = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => s(e));
              t = {
                ...t,
                items: e
              }
            }
            const n = t?.mediaQueryList;
            return n?.length ? (n.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
              t = {
                ...t,
                ...e
              }
            }), t) : t
          };
          return (0, m.useEffect)(() => {
            const e = c().debounce(() => {
              a(s(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var ye = o(26675);
      const ke = f.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Se = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, ye.A)(),
              {
                data: o
              } = z(ke, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, h.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Ce = o(57301),
        Pe = o(95342);
      const Ee = (0, g.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ae = () => (0, m.useContext)(Ee),
        Te = ({
          children: e,
          ...t
        }) => {
          const o = Ae() ?? {},
            n = (0, m.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, h.jsx)(Ee.Provider, {
            value: n,
            children: e
          })
        };
      var Le = o(17954),
        Re = o(10181);
      const Me = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Re.useLocation)();
          return (0, m.useEffect)(() => {
            be({
              event: "trackPageview"
            })
          }, [o]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        je = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          he().initialize(t)
        };
      var Ie = o(37980);
      const Oe = "rockstar-games-web";
      let qe;
      try {
        const e = Ie.A.get(Oe) ?? "";
        qe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        qe = {}
      }
      const De = (0, f.makeVar)(qe),
        _e = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...De() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ie.A.set(Oe, JSON.stringify(o), {
            expires: 30,
            domain: te(),
            path: "/"
          }), De(o), o
        },
        ze = () => ({
          webSettings: (0, f.useReactiveVar)(De),
          webSettingsReactive: De,
          mutateWebSettings: _e
        });
      var Ue = o(50437)
    }
  }
]);