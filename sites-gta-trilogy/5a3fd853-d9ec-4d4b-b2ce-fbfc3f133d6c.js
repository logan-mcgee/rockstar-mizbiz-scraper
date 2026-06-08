try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a3fd853-d9ec-4d4b-b2ce-fbfc3f133d6c", e._sentryDebugIdIdentifier = "sentry-dbid-5a3fd853-d9ec-4d4b-b2ce-fbfc3f133d6c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [730], {
    7279(e, t, o) {
      o.d(t, {
        A: () => l,
        C: () => i
      });
      var n = o(4028),
        s = o.n(n),
        a = o(5963),
        r = o.n(a);
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
          }, !0)) >= 0), a = d[n >= 0 ? n : 0], i = d.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), r()(s()({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    6730(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => L.R,
        ApolloProvider: () => R.X,
        DataLayerProvider: () => ze,
        InMemoryCache: () => A.D,
        Platform: () => ae,
        Platforms: () => re,
        ReactiveStateProvider: () => C,
        ResizeProvider: () => Ke.uU,
        RockstarGraphProvider: () => J,
        RockstarTokenProvider: () => j.ec,
        ScrollProvider: () => qe.N2,
        coreScApiFetch: () => s.A,
        createDeferredScrollTriggerRefresh: () => r,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => ne,
        downloadFile: () => we,
        findPlatform: () => de,
        generateTpaLink: () => pe.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => fe,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ue,
        getGen8Consoles: () => be,
        getGen9Consoles: () => ve,
        getLanguageLabel: () => ye,
        getUriForGraphEnv: () => u,
        gql: () => Re.J1,
        gtmInit: () => $e,
        importAll: () => he,
        isGen9Platform: () => xe,
        makeVar: () => T.UT,
        mutateWebSettings: () => Qe,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => h,
        scrollToElement: () => oe,
        setContextItem: () => m.A,
        setCookieValue: () => ge,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => Be.t,
        track: () => Ee,
        useApolloClient: () => V,
        useBase: () => Oe.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => Fe,
        useGetTpaLinkGenerator: () => Oe.gd,
        useHasReduceMotionPreference: () => Oe.vx,
        useHasSaveDataPreference: () => Oe.sb,
        useLazyQuery: () => De._,
        useLocale: () => Oe.Ym,
        useMutateState: () => S,
        useMutation: () => Ue.n,
        useNewswirePost: () => Oe.CA,
        usePreloadImg: () => Oe.OG,
        usePrevious: () => Oe.ZC,
        useQuery: () => W,
        useQueryParams: () => Oe.sq,
        useReactiveVar: () => v.q,
        useRelativeTime: () => Oe.Vq,
        useRockstarEventDispatcher: () => Oe.OH,
        useRockstarEventSubscriber: () => Oe.zP,
        useRockstarToken: () => j.e9,
        useRockstarTokenPing: () => j.Es,
        useRockstarTokenReactive: () => j.bD,
        useRockstarWebSettings: () => He,
        useScApi: () => Oe.Cb,
        useScAuthLinks: () => Oe.N6,
        useScroll: () => qe.Ll,
        useScrollTracking: () => Oe.GA,
        useScrollVisibility: () => Oe.JE,
        useState: () => y,
        useWindowResize: () => Ke.G4,
        webSettingsReactive: () => Je,
        withAutoRouteTracking: () => Ge,
        withGtmTracking: () => Ae,
        withMediaBasedProps: () => Le,
        withReactiveState: () => P,
        withRockstarGraph: () => Q,
        withTranslations: () => Ie
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var s = o(959),
        a = o(7978);
      const r = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  a.u.refresh()
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
      var l = o(7473),
        c = o(9991);
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
      var m = o(1038),
        f = o(4662),
        w = o(9793),
        b = o(3082),
        v = o(7927);
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
          (0, v.q)(t);
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
      var T = o(9922),
        E = o(2909),
        A = o(3996),
        L = o(4395),
        R = o(8989),
        j = o(5753),
        M = o(9164);
      var I = o(945);
      const O = (0, E.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var q = o(8548),
        D = o(9647),
        U = o.n(D);
      var _ = o(735),
        F = o(5942);
      const z = (0, _.e)({
        sha256: F.sc
      });
      var B = o(7324);
      const N = document.documentElement.lang,
        G = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: N,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: s,
              error: a,
              ...r
            } = (0, B.IT)(e, o);
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
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [s]), (0, b.useEffect)(() => {
            if (o.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: s,
            error: a,
            data: n,
            ...r
          }
        },
        $ = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        V = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [s] = (0, b.useState)(new A.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, E.useIntl)(),
            r = z.concat((({
              formatMessage: e
            }) => (0, I.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = O[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(o)
                  }
                }
                return t
              }))
            }))({
              formatMessage: a
            }).concat((({
              token: e
            }) => (0, M.o)((t, {
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
            }).concat((e => (0, q.$)({
              ...e,
              fetch: U()
            }))(n))));
          return new L.R({
            cache: s,
            link: r
          })
        },
        X = (0, b.createContext)(G),
        W = (e, t) => (0, b.useContext)(X)(e, t),
        J = (0, E.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, w.jsx)(j.ec, {
            token: t?.token,
            children: (0, w.jsx)(R.X, {
              client: n,
              children: (0, w.jsx)(X.Provider, {
                value: G,
                children: e
              })
            })
          })
        }, $),
        Q = (e, {
          env: t = "prod"
        }) => {
          const o = (0, T.UT)("");
          return function(n) {
            return (0, w.jsx)(J, {
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
        H = (0, T.UT)({}),
        K = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, v.q)(H),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(K, "true") : document.documentElement.removeAttribute(K)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => H(e))({
              ...t,
              [e]: o
            })
          }
        },
        Z = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        ee = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var te = o(2636);
      const oe = ({
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
        ne = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (oe({
            element: o
          }), se(o))
        },
        se = e => {
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
      class ae {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, s = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = s, this.alias = a
        }
      }
      const re = Object.freeze({
          pc: new ae("pc", "PC Legacy", 8, "sc"),
          ps: new ae("ps", "PlayStation", 3, "np", "ps"),
          ps3: new ae("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new ae("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new ae("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new ae("xbox", "Xbox", 4, "xbl"),
          xbox360: new ae("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new ae("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new ae("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new ae("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new ae("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new ae("applestore", "App Store", 102, "applestore"),
          googleplay: new ae("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new ae("app_store", "App Store", 102, "applestore"),
          googlePlay: new ae("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new ae("pcalt", "PC Enhanced", 22, "sc")
        }),
        ie = Object.freeze(Object.values(re));

      function de(e) {
        if (!e) return;
        if (e instanceof ae) return e;
        const t = e.toString().toLowerCase();
        return ie.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var le = o(3058);
      const ce = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ue = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            s = n?.substring(o.length, n.length);
          return s
        },
        ge = (e, t) => {
          e && void 0 !== t && (0, le.canStoreCookie)(e) && ue(e) !== t && (document.cookie = `${e}=${t}; domain=${ce()}; path=/;`)
        };
      var pe = o(2118);
      const he = e => e.keys().forEach(e),
        me = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        fe = (e = !0) => me.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        we = e => {
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
        be = () => [re.xbox360.name, re.xboxone.name, re.ps3.name, re.ps4.name, re.pc.name],
        ve = () => [re.xboxsx.name, re.ps5.name, re.pcalt.name],
        xe = e => ve().includes(e),
        ye = e => {
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
      var ke = o(3852),
        Se = o.n(ke);
      const Ce = (0, o(7279).A)(),
        Pe = Ce?.id,
        Te = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ee = e => {
          const t = {
            ...e,
            environment: Pe,
            display_type: Te
          };
          Se().dataLayer({
            dataLayer: t
          })
        },
        Ae = e => t => ((e, t) => (0, w.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ee(e)
          }
        }))(e, t),
        Le = (e, t = 250) => o => ((e, t, o) => {
          const [n, s] = (0, b.useState)(t), a = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => a(e));
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
              s(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, w.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Re = o(3066),
        je = o(2879);
      const Me = Re.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ie = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, je.A)(),
              {
                data: o
              } = W(Me, {
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
      var Oe = o(5997),
        qe = o(7714),
        De = o(2746),
        Ue = o(4812);
      const _e = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        Fe = () => (0, b.useContext)(_e),
        ze = ({
          children: e,
          ...t
        }) => {
          const o = Fe() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, w.jsx)(_e.Provider, {
            value: n,
            children: e
          })
        };
      var Be = o(3022),
        Ne = o(6416);
      const Ge = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ne.useLocation)();
          return (0, b.useEffect)(() => {
            Ee({
              event: "trackPageview"
            })
          }, [o]), (0, w.jsx)(e, {
            ...t
          })
        })(e, t),
        $e = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Se().initialize(t)
        };
      var Ve = o(3568);
      const Xe = "rockstar-games-web";
      let We;
      try {
        const e = Ve.A.get(Xe) ?? "";
        We = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        We = {}
      }
      const Je = (0, T.UT)(We),
        Qe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Je() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ve.A.set(Xe, JSON.stringify(o), {
            expires: 30,
            domain: ce(),
            path: "/"
          }), Je(o), o
        },
        He = () => ({
          webSettings: (0, v.q)(Je),
          webSettingsReactive: Je,
          mutateWebSettings: Qe
        });
      var Ke = o(5633)
    }
  }
]);