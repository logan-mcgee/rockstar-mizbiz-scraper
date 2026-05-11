try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a0684b70-696f-44f7-96f6-d3fa4121a5f5", e._sentryDebugIdIdentifier = "sentry-dbid-a0684b70-696f-44f7-96f6-d3fa4121a5f5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [637], {
    79867(e, t, o) {
      o.d(t, {
        A: () => l,
        C: () => i
      });
      var n = o(56265),
        s = o.n(n),
        a = o(41972),
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
    60637(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => T.R,
        ApolloProvider: () => E.X,
        DataLayerProvider: () => De,
        InMemoryCache: () => P.D,
        Platform: () => oe,
        Platforms: () => ne,
        ReactiveStateProvider: () => y,
        ResizeProvider: () => Je.uU,
        RockstarGraphProvider: () => V,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => Me.N2,
        coreScApiFetch: () => n.A,
        cx: () => s,
        detectIfWeShouldAnchorSomewhere: () => ee,
        downloadFile: () => he,
        findPlatform: () => ae,
        generateTpaLink: () => ce.t,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => pe,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => me,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => we,
        getUriForGraphEnv: () => d,
        gql: () => Ee.J1,
        gtmInit: () => Ne,
        importAll: () => ue,
        isGen9Platform: () => be,
        makeVar: () => S.UT,
        mutateWebSettings: () => Xe,
        newswirePost: () => K,
        oneTrustInit: () => H,
        safeStyles: () => u,
        scrollToElement: () => Z,
        setContextItem: () => g.A,
        setCookieValue: () => le,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => Ue.t,
        track: () => Ce,
        useApolloClient: () => G,
        useBase: () => je.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => qe,
        useGetTpaLinkGenerator: () => je.gd,
        useHasReduceMotionPreference: () => je.vx,
        useHasSaveDataPreference: () => je.sb,
        useLazyQuery: () => Ie._,
        useLocale: () => je.Ym,
        useMutateState: () => x,
        useMutation: () => Oe.n,
        useNewswirePost: () => je.CA,
        usePreloadImg: () => je.OG,
        usePrevious: () => je.ZC,
        useQuery: () => $,
        useQueryParams: () => je.sq,
        useReactiveVar: () => f.q,
        useRelativeTime: () => je.Vq,
        useRockstarEventDispatcher: () => je.OH,
        useRockstarEventSubscriber: () => je.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => We,
        useScApi: () => je.Cb,
        useScAuthLinks: () => je.N6,
        useScroll: () => Me.Ll,
        useScrollTracking: () => je.GA,
        useScrollVisibility: () => je.JE,
        useState: () => w,
        useWindowResize: () => Je.G4,
        webSettingsReactive: () => Ve,
        withAutoRouteTracking: () => Be,
        withGtmTracking: () => Pe,
        withMediaBasedProps: () => Te,
        withReactiveState: () => k,
        withRockstarGraph: () => X,
        withTranslations: () => Re
      });
      var n = o(60099);
      const s = (...e) => e.filter(Boolean).join(" "),
        a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
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
        f = o(93452);
      const b = (0, g.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, m.useContext)(b),
        v = (0, g.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, m.useContext)(v),
        y = ({
          children: e,
          state: t
        }) => {
          (0, f.q)(t);
          const o = (0, m.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, h.jsx)(b.Provider, {
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
      var S = o(21823),
        C = o(42909),
        P = o(19757),
        T = o(75102),
        E = o(88718),
        A = o(20772),
        L = o(6347);
      var R = o(19526);
      const j = (0, C.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var M = o(83605),
        I = o(61162),
        O = o.n(I);
      var _ = o(62944),
        q = o(42887);
      const D = (0, _.e)({
        sha256: q.sc
      });
      var U = o(46277);
      const z = document.documentElement.lang,
        B = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: z,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: s,
              error: a,
              ...r
            } = (0, U.IT)(e, o);
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
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [s]), (0, m.useEffect)(() => {
            if (o.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: s,
            error: a,
            data: n,
            ...r
          }
        },
        N = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        G = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? d(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [s] = (0, m.useState)(new P.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, C.useIntl)(),
            r = D.concat((({
              formatMessage: e
            }) => (0, R.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = j[t?.code ?? ""];
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
            }) => (0, L.o)((t, {
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
            }).concat((e => (0, M.$)({
              ...e,
              fetch: O()
            }))(n))));
          return new T.R({
            cache: s,
            link: r
          })
        },
        F = (0, m.createContext)(B),
        $ = (e, t) => (0, m.useContext)(F)(e, t),
        V = (0, C.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = G({
            graphOptions: t,
            typePolicies: o
          });
          return (0, h.jsx)(A.ec, {
            token: t?.token,
            children: (0, h.jsx)(E.X, {
              client: n,
              children: (0, h.jsx)(F.Provider, {
                value: B,
                children: e
              })
            })
          })
        }, N),
        X = (e, {
          env: t = "prod"
        }) => {
          const o = (0, S.UT)("");
          return function(n) {
            return (0, h.jsx)(V, {
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
        W = (0, S.UT)({}),
        J = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, f.q)(W),
            o = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            o ? document.documentElement.setAttribute(J, "true") : document.documentElement.removeAttribute(J)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => W(e))({
              ...t,
              [e]: o
            })
          }
        },
        H = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var K = o(89656);
      const Y = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Z = ({
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
        ee = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (Z({
            element: o
          }), te(o))
        },
        te = e => {
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
      class oe {
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
      const ne = Object.freeze({
          pc: new oe("pc", "PC Legacy", 8, "sc"),
          ps: new oe("ps", "PlayStation", 3, "np", "ps"),
          ps3: new oe("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new oe("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new oe("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new oe("xbox", "Xbox", 4, "xbl"),
          xbox360: new oe("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new oe("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new oe("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new oe("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new oe("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new oe("applestore", "App Store", 102, "applestore"),
          googleplay: new oe("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new oe("app_store", "App Store", 102, "applestore"),
          googlePlay: new oe("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new oe("pcalt", "PC Enhanced", 22, "sc")
        }),
        se = Object.freeze(Object.values(ne));

      function ae(e) {
        if (!e) return;
        if (e instanceof oe) return e;
        const t = e.toString().toLowerCase();
        return se.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var re = o(6306);
      const ie = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        de = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            s = n?.substring(o.length, n.length);
          return s
        },
        le = (e, t) => {
          e && void 0 !== t && (0, re.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${ie()}; path=/;`)
        };
      var ce = o(68466);
      const ue = e => e.keys().forEach(e),
        ge = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        pe = (e = !0) => ge.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        he = e => {
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
        me = () => [ne.xbox360.name, ne.xboxone.name, ne.ps3.name, ne.ps4.name, ne.pc.name],
        fe = () => [ne.xboxsx.name, ne.ps5.name, ne.pcalt.name],
        be = e => fe().includes(e),
        we = e => {
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
      var ve = o(89864),
        xe = o.n(ve);
      const ye = (0, o(79867).A)(),
        ke = ye?.id,
        Se = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ce = e => {
          const t = {
            ...e,
            environment: ke,
            display_type: Se
          };
          xe().dataLayer({
            dataLayer: t
          })
        },
        Pe = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ce(e)
          }
        }))(e, t),
        Te = (e, t = 250) => o => ((e, t, o) => {
          const [n, s] = (0, m.useState)(t), a = e => {
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
          return (0, m.useEffect)(() => {
            const e = c().debounce(() => {
              s(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Ee = o(40445),
        Ae = o(26675);
      const Le = Ee.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Re = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ae.A)(),
              {
                data: o
              } = $(Le, {
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
      var je = o(57301),
        Me = o(95342),
        Ie = o(66591),
        Oe = o(80701);
      const _e = (0, g.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        qe = () => (0, m.useContext)(_e),
        De = ({
          children: e,
          ...t
        }) => {
          const o = qe() ?? {},
            n = (0, m.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, h.jsx)(_e.Provider, {
            value: n,
            children: e
          })
        };
      var Ue = o(17954),
        ze = o(10181);
      const Be = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, ze.useLocation)();
          return (0, m.useEffect)(() => {
            Ce({
              event: "trackPageview"
            })
          }, [o]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        Ne = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          xe().initialize(t)
        };
      var Ge = o(37980);
      const Fe = "rockstar-games-web";
      let $e;
      try {
        const e = Ge.A.get(Fe) ?? "";
        $e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $e = {}
      }
      const Ve = (0, S.UT)($e),
        Xe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ve() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ge.A.set(Fe, JSON.stringify(o), {
            expires: 30,
            domain: ie(),
            path: "/"
          }), Ve(o), o
        },
        We = () => ({
          webSettings: (0, f.q)(Ve),
          webSettingsReactive: Ve,
          mutateWebSettings: Xe
        });
      var Je = o(50437)
    }
  }
]);