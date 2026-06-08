try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "65d73955-e83a-4e06-9671-d23512c38f20", e._sentryDebugIdIdentifier = "sentry-dbid-65d73955-e83a-4e06-9671-d23512c38f20")
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
  [6730], {
    47279(e, t, o) {
      o.d(t, {
        A: () => l,
        C: () => i
      });
      var n = o(54028),
        a = o.n(n),
        r = o(15963),
        s = o.n(r);
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
          }, !0)) >= 0), r = d[n >= 0 ? n : 0], i = d.find(e => e.id === r.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(a()({}, i, {
            currentSite: e
          }, r), "fallbackEnvironment")
        }
    },
    46730(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => v.ApolloClient,
        ApolloProvider: () => v.ApolloProvider,
        DataLayerProvider: () => Me,
        InMemoryCache: () => v.InMemoryCache,
        Platform: () => Z,
        Platforms: () => ee,
        ReactiveStateProvider: () => C,
        ResizeProvider: () => Ne.uU,
        RockstarGraphProvider: () => N,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => Te.N2,
        coreScApiFetch: () => a.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => K,
        downloadFile: () => ue,
        findPlatform: () => oe,
        generateTpaLink: () => ie.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => ce,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => re,
        getGen8Consoles: () => ge,
        getGen9Consoles: () => pe,
        getLanguageLabel: () => me,
        getUriForGraphEnv: () => u,
        gql: () => v.gql,
        gtmInit: () => qe,
        importAll: () => de,
        isGen9Platform: () => he,
        makeVar: () => v.makeVar,
        mutateWebSettings: () => Ue,
        newswirePost: () => H,
        oneTrustInit: () => X,
        safeStyles: () => h,
        scrollToElement: () => J,
        setContextItem: () => m.A,
        setCookieValue: () => se,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => W,
        toScLocaleString: () => je.t,
        track: () => ye,
        useApolloClient: () => F,
        useBase: () => Ee.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => Re,
        useGetTpaLinkGenerator: () => Ee.gd,
        useHasReduceMotionPreference: () => Ee.vx,
        useHasSaveDataPreference: () => Ee.sb,
        useLazyQuery: () => v.useLazyQuery,
        useLocale: () => Ee.Ym,
        useMutateState: () => S,
        useMutation: () => v.useMutation,
        useNewswirePost: () => Ee.CA,
        usePreloadImg: () => Ee.OG,
        usePrevious: () => Ee.ZC,
        useQuery: () => B,
        useQueryParams: () => Ee.sq,
        useReactiveVar: () => v.useReactiveVar,
        useRelativeTime: () => Ee.Vq,
        useRockstarEventDispatcher: () => Ee.OH,
        useRockstarEventSubscriber: () => Ee.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => Be,
        useScApi: () => Ee.Cb,
        useScAuthLinks: () => Ee.N6,
        useScroll: () => Te.Ll,
        useScrollTracking: () => Ee.GA,
        useScrollVisibility: () => Ee.JE,
        useState: () => y,
        useWindowResize: () => Ne.G4,
        webSettingsReactive: () => Fe,
        withAutoRouteTracking: () => Oe,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => Se,
        withReactiveState: () => P,
        withRockstarGraph: () => G,
        withTranslations: () => Ae
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var a = o(10959),
        r = o(57978);
      const s = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  r.u.refresh()
                })
              })
            },
            cleanup: () => {
              cancelAnimationFrame(e)
            }
          }
        },
        i = (...e) => e.filter(Boolean).join(" "),
        d = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var l = o(17473),
        c = o(39991);
      const u = e => {
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
      var g = o(2631),
        p = o.n(g);
      const h = e => {
        const t = p().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var m = o(81038),
        f = o(94662),
        w = o(39793),
        b = o(93082),
        v = o(3710);
      const x = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        y = () => (0, b.useContext)(x),
        k = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        S = () => (0, b.useContext)(k),
        C = ({
          children: e,
          state: t
        }) => {
          (0, v.useReactiveVar)(t);
          const o = (0, b.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, w.jsx)(x.Provider, {
            value: t(),
            children: (0, w.jsx)(k.Provider, {
              value: o,
              children: e
            })
          })
        },
        P = (e, {
          state: t
        }) => function(o) {
          return (0, w.jsx)(C, {
            state: t,
            children: (0, w.jsx)(e, {
              ...o
            })
          })
        };
      var A = o(42909),
        E = o(95753),
        T = o(99164);
      var L = o(70945);
      const R = (0, A.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var M = o(39647),
        j = o.n(M);
      var I = o(70735),
        O = o(5942);
      const q = (0, I.e)({
          sha256: O.sc
        }),
        D = document.documentElement.lang,
        _ = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: D,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: a,
              error: r,
              ...s
            } = (0, v.useQuery)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = p().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, b.useEffect)(() => {
            if (o.autoSetError && r) throw new Error(r.message)
          }, [r]), {
            loading: a,
            error: r,
            data: n,
            ...s
          }
        },
        z = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        F = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, b.useState)(new v.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: r
            } = (0, A.useIntl)(),
            s = q.concat((({
              formatMessage: e
            }) => (0, L.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = R[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(o)
                  }
                }
                return t
              }))
            }))({
              formatMessage: r
            }).concat((({
              token: e
            }) => (0, T.o)((t, {
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
            }).concat((e => (0, v.createHttpLink)({
              ...e,
              fetch: j()
            }))(n))));
          return new v.ApolloClient({
            cache: a,
            link: s
          })
        },
        U = (0, b.createContext)(_),
        B = (e, t) => (0, b.useContext)(U)(e, t),
        N = (0, A.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = F({
            graphOptions: t,
            typePolicies: o
          });
          return (0, w.jsx)(E.ec, {
            token: t?.token,
            children: (0, w.jsx)(v.ApolloProvider, {
              client: n,
              children: (0, w.jsx)(U.Provider, {
                value: _,
                children: e
              })
            })
          })
        }, z),
        G = (e, {
          env: t = "prod"
        }) => {
          const o = (0, v.makeVar)("");
          return function(n) {
            return (0, w.jsx)(N, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, w.jsx)(e, {
                ...n
              })
            })
          }
        },
        V = (0, v.makeVar)({}),
        $ = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, v.useReactiveVar)(V),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute($, "true") : document.documentElement.removeAttribute($)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => V(e))({
              ...t,
              [e]: o
            })
          }
        },
        W = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        X = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var H = o(22636);
      const J = ({
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
        K = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (J({
            element: o
          }), Y(o))
        },
        Y = e => {
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
      class Z {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, a = null, r = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = a, this.alias = r
        }
      }
      const ee = Object.freeze({
          pc: new Z("pc", "PC Legacy", 8, "sc"),
          ps: new Z("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Z("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Z("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Z("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Z("xbox", "Xbox", 4, "xbl"),
          xbox360: new Z("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Z("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Z("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Z("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Z("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Z("applestore", "App Store", 102, "applestore"),
          googleplay: new Z("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Z("app_store", "App Store", 102, "applestore"),
          googlePlay: new Z("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Z("pcalt", "PC Enhanced", 22, "sc")
        }),
        te = Object.freeze(Object.values(ee));

      function oe(e) {
        if (!e) return;
        if (e instanceof Z) return e;
        const t = e.toString().toLowerCase();
        return te.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ne = o(23058);
      const ae = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        re = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        se = (e, t) => {
          e && void 0 !== t && (0, ne.canStoreCookie)(e) && re(e) !== t && (document.cookie = `${e}=${t}; domain=${ae()}; path=/;`)
        };
      var ie = o(32118);
      const de = e => e.keys().forEach(e),
        le = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ce = (e = !0) => le.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        ue = e => {
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
        ge = () => [ee.xbox360.name, ee.xboxone.name, ee.ps3.name, ee.ps4.name, ee.pc.name],
        pe = () => [ee.xboxsx.name, ee.ps5.name, ee.pcalt.name],
        he = e => pe().includes(e),
        me = e => {
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
      var fe = o(81471),
        we = o.n(fe);
      const be = (0, o(47279).A)(),
        ve = be?.id,
        xe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ye = e => {
          const t = {
            ...e,
            environment: ve,
            display_type: xe
          };
          we().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, w.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ye(e)
          }
        }))(e, t),
        Se = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, b.useState)(t), r = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => r(e));
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
          return (0, b.useEffect)(() => {
            const e = p().debounce(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, w.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Ce = o(12879);
      const Pe = v.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ae = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ce.A)(),
              {
                data: o
              } = B(Pe, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, w.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Ee = o(85997),
        Te = o(17714);
      const Le = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        Re = () => (0, b.useContext)(Le),
        Me = ({
          children: e,
          ...t
        }) => {
          const o = Re() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, w.jsx)(Le.Provider, {
            value: n,
            children: e
          })
        };
      var je = o(93022),
        Ie = o(36416);
      const Oe = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ie.useLocation)();
          return (0, b.useEffect)(() => {
            ye({
              event: "trackPageview"
            })
          }, [o]), (0, w.jsx)(e, {
            ...t
          })
        })(e, t),
        qe = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          we().initialize(t)
        };
      var De = o(43568);
      const _e = "rockstar-games-web";
      let ze;
      try {
        const e = De.A.get(_e) ?? "";
        ze = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        ze = {}
      }
      const Fe = (0, v.makeVar)(ze),
        Ue = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Fe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], De.A.set(_e, JSON.stringify(o), {
            expires: 30,
            domain: ae(),
            path: "/"
          }), Fe(o), o
        },
        Be = () => ({
          webSettings: (0, v.useReactiveVar)(Fe),
          webSettingsReactive: Fe,
          mutateWebSettings: Ue
        });
      var Ne = o(25633)
    }
  }
]);