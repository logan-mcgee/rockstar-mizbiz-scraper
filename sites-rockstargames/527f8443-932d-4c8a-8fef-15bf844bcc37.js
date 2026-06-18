try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "527f8443-932d-4c8a-8fef-15bf844bcc37", e._sentryDebugIdIdentifier = "sentry-dbid-527f8443-932d-4c8a-8fef-15bf844bcc37")
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
  [597], {
    47279(e, t, o) {
      o.d(t, {
        A: () => i,
        C: () => r
      });
      var n = o(57202),
        a = o(50573);
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
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
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), i = s[r >= 0 ? r : 0], d = s.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, a.A)((0, n.A)({}, d, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    60597(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => w.ApolloClient,
        ApolloProvider: () => w.ApolloProvider,
        DataLayerProvider: () => Ie,
        InMemoryCache: () => w.InMemoryCache,
        PAGE_THEMES: () => ie,
        Platform: () => Z,
        Platforms: () => ee,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ve.uU,
        RockstarGraphProvider: () => N,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => Re.N2,
        coreScApiFetch: () => a.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => K,
        downloadFile: () => ge,
        findPlatform: () => oe,
        generateTpaLink: () => de.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => ue,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => re,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => he,
        getLanguageLabel: () => fe,
        getUriForGraphEnv: () => u,
        gql: () => w.gql,
        gtmInit: () => _e,
        importAll: () => le,
        isGen9Platform: () => me,
        makeVar: () => w.makeVar,
        mutateWebSettings: () => Ne,
        newswirePost: () => X,
        oneTrustInit: () => H,
        safeStyles: () => p,
        scrollToElement: () => J,
        setContextItem: () => h.A,
        setCookieValue: () => se,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => W,
        toScLocaleString: () => Oe.t,
        track: () => ke,
        useApolloClient: () => z,
        useBase: () => Le.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => je,
        useGetTpaLinkGenerator: () => Le.gd,
        useHasReduceMotionPreference: () => Le.vx,
        useHasSaveDataPreference: () => Le.sb,
        useLazyQuery: () => w.useLazyQuery,
        useLocale: () => Le.Ym,
        useMutateState: () => k,
        useMutation: () => w.useMutation,
        useNewswirePost: () => Le.CA,
        usePreloadImg: () => Le.OG,
        usePrevious: () => Le.ZC,
        useQuery: () => U,
        useQueryParams: () => Le.sq,
        useReactiveVar: () => w.useReactiveVar,
        useRelativeTime: () => Le.Vq,
        useRockstarEventDispatcher: () => Le.OH,
        useRockstarEventSubscriber: () => Le.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => Ge,
        useScApi: () => Le.Cb,
        useScAuthLinks: () => Le.N6,
        useScroll: () => Re.Ll,
        useScrollTracking: () => Le.GA,
        useScrollVisibility: () => Le.JE,
        useState: () => x,
        useWindowResize: () => Ve.G4,
        webSettingsReactive: () => Ue,
        withAutoRouteTracking: () => De,
        withGtmTracking: () => Se,
        withMediaBasedProps: () => Pe,
        withReactiveState: () => C,
        withRockstarGraph: () => G,
        withTranslations: () => Te
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
      var g = o(50628);
      const p = e => {
        const t = (0, g.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(81038),
        m = o(94662),
        f = o(39793),
        b = o(93082),
        w = o(3710);
      const v = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, b.useContext)(v),
        y = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        k = () => (0, b.useContext)(y),
        S = ({
          children: e,
          state: t
        }) => {
          (0, w.useReactiveVar)(t);
          const o = (0, b.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, f.jsx)(v.Provider, {
            value: t(),
            children: (0, f.jsx)(y.Provider, {
              value: o,
              children: e
            })
          })
        },
        C = (e, {
          state: t
        }) => function(o) {
          return (0, f.jsx)(S, {
            state: t,
            children: (0, f.jsx)(e, {
              ...o
            })
          })
        };
      var P = o(42909),
        A = o(95753),
        E = o(99164);
      var T = o(70945);
      const L = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var R = o(39647),
        M = o.n(R);
      var j = o(70735),
        I = o(5942);
      const O = (0, j.e)({
        sha256: I.sc
      });
      var q = o(26065);
      const D = document.documentElement.lang,
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
            } = (0, w.useQuery)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = (0, q.A)(n, o.setTitleDataPath) ?? null;
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
        B = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        z = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, b.useState)(new w.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: r
            } = (0, P.useIntl)(),
            s = O.concat((({
              formatMessage: e
            }) => (0, T.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = L[t?.code ?? ""];
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
            }) => (0, E.o)((t, {
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
            }).concat((e => (0, w.createHttpLink)({
              ...e,
              fetch: M()
            }))(n))));
          return new w.ApolloClient({
            cache: a,
            link: s
          })
        },
        F = (0, b.createContext)(_),
        U = (e, t) => (0, b.useContext)(F)(e, t),
        N = (0, P.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = z({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(A.ec, {
            token: t?.token,
            children: (0, f.jsx)(w.ApolloProvider, {
              client: n,
              children: (0, f.jsx)(F.Provider, {
                value: _,
                children: e
              })
            })
          })
        }, B),
        G = (e, {
          env: t = "prod"
        }) => {
          const o = (0, w.makeVar)("");
          return function(n) {
            return (0, f.jsx)(N, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, f.jsx)(e, {
                ...n
              })
            })
          }
        },
        V = (0, w.makeVar)({}),
        $ = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, w.useReactiveVar)(V),
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
        H = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var X = o(22636);
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
        },
        ie = {
          BL: "bl"
        };
      Object.values(ie), ie.BL;
      var de = o(32118);
      const le = e => e.keys().forEach(e),
        ce = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ue = (e = !0) => ce.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        ge = e => {
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
        pe = () => [ee.xbox360.name, ee.xboxone.name, ee.ps3.name, ee.ps4.name, ee.pc.name],
        he = () => [ee.xboxsx.name, ee.ps5.name, ee.pcalt.name],
        me = e => he().includes(e),
        fe = e => {
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
      var be = o(81471),
        we = o.n(be);
      const ve = (0, o(47279).A)(),
        xe = ve?.id,
        ye = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ke = e => {
          const t = {
            ...e,
            environment: xe,
            display_type: ye
          };
          we().dataLayer({
            dataLayer: t
          })
        },
        Se = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ke(e)
          }
        }))(e, t);
      var Ce = o(34708);
      const Pe = (e, t = 250) => o => ((e, t, o) => {
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
          const e = (0, Ce.A)(() => {
            a(r(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, f.jsx)(e, {
          ...n
        })
      })(e, o, t);
      var Ae = o(12879);
      const Ee = w.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Te = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ae.A)(),
              {
                data: o
              } = U(Ee, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, f.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Le = o(85997),
        Re = o(17714);
      const Me = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        je = () => (0, b.useContext)(Me),
        Ie = ({
          children: e,
          ...t
        }) => {
          const o = je() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Me.Provider, {
            value: n,
            children: e
          })
        };
      var Oe = o(93022),
        qe = o(36416);
      const De = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, qe.useLocation)();
          return (0, b.useEffect)(() => {
            ke({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        _e = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          we().initialize(t)
        };
      var Be = o(43568);
      const ze = "rockstar-games-web";
      let Fe;
      try {
        const e = Be.A.get(ze) ?? "";
        Fe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Fe = {}
      }
      const Ue = (0, w.makeVar)(Fe),
        Ne = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ue() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Be.A.set(ze, JSON.stringify(o), {
            expires: 30,
            domain: ae(),
            path: "/"
          }), Ue(o), o
        },
        Ge = () => ({
          webSettings: (0, w.useReactiveVar)(Ue),
          webSettingsReactive: Ue,
          mutateWebSettings: Ne
        });
      var Ve = o(25633)
    }
  }
]);