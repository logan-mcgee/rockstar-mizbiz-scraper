try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "222b0105-3f00-405c-b500-e6ff1fddb28f", e._sentryDebugIdIdentifier = "sentry-dbid-222b0105-3f00-405c-b500-e6ff1fddb28f")
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
  [597], {
    7279(e, t, o) {
      o.d(t, {
        A: () => i,
        C: () => a
      });
      var n = o(8861),
        s = o(573);
      const a = {
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
        i = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = r.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), i = r[a >= 0 ? a : 0], d = r.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, s.A)((0, n.A)({}, d, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    597(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => L.X,
        DataLayerProvider: () => Ne,
        InMemoryCache: () => T.D,
        PAGE_THEMES: () => pe,
        Platform: () => ae,
        Platforms: () => re,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ze.uU,
        RockstarGraphProvider: () => J,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => _e.N2,
        coreScApiFetch: () => s.A,
        createDeferredScrollTriggerRefresh: () => r,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => ne,
        downloadFile: () => we,
        findPlatform: () => de,
        generateTpaLink: () => he.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => be,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ue,
        getGen8Consoles: () => ve,
        getGen9Consoles: () => xe,
        getLanguageLabel: () => ke,
        getUriForGraphEnv: () => u,
        gql: () => Me.J1,
        gtmInit: () => Xe,
        importAll: () => me,
        isGen9Platform: () => ye,
        makeVar: () => C.UT,
        mutateWebSettings: () => Ke,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => p,
        scrollToElement: () => oe,
        setContextItem: () => h.A,
        setCookieValue: () => ge,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => Ge.t,
        track: () => Ee,
        useApolloClient: () => V,
        useBase: () => De.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => ze,
        useGetTpaLinkGenerator: () => De.gd,
        useHasReduceMotionPreference: () => De.vx,
        useHasSaveDataPreference: () => De.sb,
        useLazyQuery: () => Ue._,
        useLocale: () => De.Ym,
        useMutateState: () => k,
        useMutation: () => Be.n,
        useNewswirePost: () => De.CA,
        usePreloadImg: () => De.OG,
        usePrevious: () => De.ZC,
        useQuery: () => W,
        useQueryParams: () => De.sq,
        useReactiveVar: () => w.q,
        useRelativeTime: () => De.Vq,
        useRockstarEventDispatcher: () => De.OH,
        useRockstarEventSubscriber: () => De.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Ye,
        useScApi: () => De.Cb,
        useScAuthLinks: () => De.N6,
        useScroll: () => _e.Ll,
        useScrollTracking: () => De.GA,
        useScrollVisibility: () => De.JE,
        useState: () => x,
        useWindowResize: () => Ze.G4,
        webSettingsReactive: () => He,
        withAutoRouteTracking: () => Ve,
        withGtmTracking: () => Le,
        withMediaBasedProps: () => je,
        withReactiveState: () => P,
        withRockstarGraph: () => Q,
        withTranslations: () => qe
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
      var g = o(628);
      const p = e => {
        const t = (0, g.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(1038),
        m = o(4662),
        f = o(9793),
        b = o(3082),
        w = o(7927);
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
          (0, w.q)(t);
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
        P = (e, {
          state: t
        }) => function(o) {
          return (0, f.jsx)(S, {
            state: t,
            children: (0, f.jsx)(e, {
              ...o
            })
          })
        };
      var C = o(9922),
        A = o(2909),
        T = o(3996),
        E = o(4395),
        L = o(8989),
        R = o(5753),
        j = o(9164);
      var M = o(945);
      const I = (0, A.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var O = o(8548),
        q = o(9647),
        D = o.n(q);
      var _ = o(735),
        U = o(5942);
      const B = (0, _.e)({
        sha256: U.sc
      });
      var F = o(7324),
        z = o(6065);
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
            } = (0, F.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = (0, z.A)(n, o.setTitleDataPath) ?? null;
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
            [s] = (0, b.useState)(new T.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, A.useIntl)(),
            r = B.concat((({
              formatMessage: e
            }) => (0, M.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = I[t?.code ?? ""];
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
            }) => (0, j.o)((t, {
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
            }).concat((e => (0, O.$)({
              ...e,
              fetch: D()
            }))(n))));
          return new E.R({
            cache: s,
            link: r
          })
        },
        X = (0, b.createContext)(G),
        W = (e, t) => (0, b.useContext)(X)(e, t),
        J = (0, A.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(R.ec, {
            token: t?.token,
            children: (0, f.jsx)(L.X, {
              client: n,
              children: (0, f.jsx)(X.Provider, {
                value: G,
                children: e
              })
            })
          })
        }, $),
        Q = (e, {
          env: t = "prod"
        }) => {
          const o = (0, C.UT)("");
          return function(n) {
            return (0, f.jsx)(J, {
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
        H = (0, C.UT)({}),
        K = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, w.q)(H),
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
        },
        pe = {
          BL: "bl"
        };
      Object.values(pe), pe.BL;
      var he = o(2118);
      const me = e => e.keys().forEach(e),
        fe = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        be = (e = !0) => fe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
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
        ve = () => [re.xbox360.name, re.xboxone.name, re.ps3.name, re.ps4.name, re.pc.name],
        xe = () => [re.xboxsx.name, re.ps5.name, re.pcalt.name],
        ye = e => xe().includes(e),
        ke = e => {
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
      var Se = o(1471),
        Pe = o.n(Se);
      const Ce = (0, o(7279).A)(),
        Ae = Ce?.id,
        Te = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ee = e => {
          const t = {
            ...e,
            environment: Ae,
            display_type: Te
          };
          Pe().dataLayer({
            dataLayer: t
          })
        },
        Le = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ee(e)
          }
        }))(e, t);
      var Re = o(9098);
      const je = (e, t = 250) => o => ((e, t, o) => {
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
          const e = (0, Re.A)(() => {
            s(a(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, f.jsx)(e, {
          ...n
        })
      })(e, o, t);
      var Me = o(3066),
        Ie = o(2879);
      const Oe = Me.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        qe = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ie.A)(),
              {
                data: o
              } = W(Oe, {
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
      var De = o(5997),
        _e = o(7714),
        Ue = o(2746),
        Be = o(4812);
      const Fe = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        ze = () => (0, b.useContext)(Fe),
        Ne = ({
          children: e,
          ...t
        }) => {
          const o = ze() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Fe.Provider, {
            value: n,
            children: e
          })
        };
      var Ge = o(3022),
        $e = o(6416);
      const Ve = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, $e.useLocation)();
          return (0, b.useEffect)(() => {
            Ee({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        Xe = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Pe().initialize(t)
        };
      var We = o(3568);
      const Je = "rockstar-games-web";
      let Qe;
      try {
        const e = We.A.get(Je) ?? "";
        Qe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Qe = {}
      }
      const He = (0, C.UT)(Qe),
        Ke = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...He() ?? {}
          };
          return o[e] = t, null === t && delete o[e], We.A.set(Je, JSON.stringify(o), {
            expires: 30,
            domain: ce(),
            path: "/"
          }), He(o), o
        },
        Ye = () => ({
          webSettings: (0, w.q)(He),
          webSettingsReactive: He,
          mutateWebSettings: Ke
        });
      var Ze = o(5633)
    }
  }
]);