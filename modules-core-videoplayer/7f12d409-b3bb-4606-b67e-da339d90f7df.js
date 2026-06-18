try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7f12d409-b3bb-4606-b67e-da339d90f7df", e._sentryDebugIdIdentifier = "sentry-dbid-7f12d409-b3bb-4606-b67e-da339d90f7df")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [122, 654], {
    7279(e, t, o) {
      o.d(t, {
        A: () => a,
        C: () => r
      });
      var n = o(283);
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
        a = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), a = s[r >= 0 ? r : 0], i = s.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, n.omit)((0, n.merge)({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    597(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => A.R,
        ApolloProvider: () => L.X,
        DataLayerProvider: () => Fe,
        InMemoryCache: () => E.D,
        PAGE_THEMES: () => ge,
        Platform: () => re,
        Platforms: () => se,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ke.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => qe.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => oe,
        downloadFile: () => we,
        findPlatform: () => ie,
        generateTpaLink: () => pe.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => fe,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ce,
        getGen8Consoles: () => be,
        getGen9Consoles: () => ve,
        getLanguageLabel: () => ye,
        getUriForGraphEnv: () => u,
        gql: () => Re.J1,
        gtmInit: () => $e,
        importAll: () => he,
        isGen9Platform: () => xe,
        makeVar: () => C.UT,
        mutateWebSettings: () => Qe,
        newswirePost: () => ee,
        oneTrustInit: () => Z,
        safeStyles: () => p,
        scrollToElement: () => te,
        setContextItem: () => h.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => ze.t,
        track: () => Ee,
        useApolloClient: () => $,
        useBase: () => Oe.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => Be,
        useGetTpaLinkGenerator: () => Oe.gd,
        useHasReduceMotionPreference: () => Oe.vx,
        useHasSaveDataPreference: () => Oe.sb,
        useLazyQuery: () => De._,
        useLocale: () => Oe.Ym,
        useMutateState: () => k,
        useMutation: () => _e.n,
        useNewswirePost: () => Oe.CA,
        usePreloadImg: () => Oe.OG,
        usePrevious: () => Oe.ZC,
        useQuery: () => X,
        useQueryParams: () => Oe.sq,
        useReactiveVar: () => b.q,
        useRelativeTime: () => Oe.Vq,
        useRockstarEventDispatcher: () => Oe.OH,
        useRockstarEventSubscriber: () => Oe.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => He,
        useScApi: () => Oe.Cb,
        useScAuthLinks: () => Oe.N6,
        useScroll: () => qe.Ll,
        useScrollTracking: () => Oe.GA,
        useScrollVisibility: () => Oe.JE,
        useState: () => x,
        useWindowResize: () => Ke.G4,
        webSettingsReactive: () => Je,
        withAutoRouteTracking: () => Ge,
        withGtmTracking: () => Ae,
        withMediaBasedProps: () => Le,
        withReactiveState: () => P,
        withRockstarGraph: () => J,
        withTranslations: () => Ie
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var r = o(959),
        s = o(7978);
      const a = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  s.u.refresh()
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
      var g = o(283);
      const p = e => {
        const t = (0, g.clone)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(8657),
        m = o(4662),
        f = o(9793),
        w = o(3082),
        b = o(7927);
      const v = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, w.useContext)(v),
        y = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "graphContextSet"
        }),
        k = () => (0, w.useContext)(y),
        S = ({
          children: e,
          state: t
        }) => {
          (0, b.q)(t);
          const o = (0, w.useCallback)(e => {
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
        T = o(2909),
        E = o(3996),
        A = o(4920),
        L = o(8989),
        R = o(5753),
        j = o(9164);
      var M = o(945);
      const I = (0, T.defineMessages)({
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
      var F = o(7324);
      const z = document.documentElement.lang,
        N = (e, t) => {
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
              loading: r,
              error: s,
              ...a
            } = (0, F.IT)(e, o);
          return (0, w.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = (0, g.get)(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, w.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, w.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: r,
            error: s,
            data: n,
            ...a
          }
        },
        G = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        $ = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, w.useState)(new E.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, T.useIntl)(),
            a = B.concat((({
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
              formatMessage: s
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
          return new A.R({
            cache: r,
            link: a
          })
        },
        V = (0, w.createContext)(N),
        X = (e, t) => (0, w.useContext)(V)(e, t),
        W = (0, T.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = $({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(R.ec, {
            token: t?.token,
            children: (0, f.jsx)(L.X, {
              client: n,
              children: (0, f.jsx)(V.Provider, {
                value: N,
                children: e
              })
            })
          })
        }, G),
        J = (e, {
          env: t = "prod"
        }) => {
          const o = (0, C.UT)("");
          return function(n) {
            return (0, f.jsx)(W, {
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
        Q = (0, C.UT)({}),
        H = "data-disallow-body-scroll",
        K = e => {
          const t = (0, b.q)(Q),
            o = Object.values(t).some(e => !!e);
          return (0, w.useEffect)(() => {
            o ? document.documentElement.setAttribute(H, "true") : document.documentElement.removeAttribute(H)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => Q(e))({
              ...t,
              [e]: o
            })
          }
        },
        Y = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Z = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var ee = o(2636);
      const te = ({
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
        oe = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (te({
            element: o
          }), ne(o))
        },
        ne = e => {
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
      class re {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, r = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = s
        }
      }
      const se = Object.freeze({
          pc: new re("pc", "PC Legacy", 8, "sc"),
          ps: new re("ps", "PlayStation", 3, "np", "ps"),
          ps3: new re("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new re("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new re("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new re("xbox", "Xbox", 4, "xbl"),
          xbox360: new re("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new re("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new re("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new re("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new re("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new re("applestore", "App Store", 102, "applestore"),
          googleplay: new re("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new re("app_store", "App Store", 102, "applestore"),
          googlePlay: new re("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new re("pcalt", "PC Enhanced", 22, "sc")
        }),
        ae = Object.freeze(Object.values(se));

      function ie(e) {
        if (!e) return;
        if (e instanceof re) return e;
        const t = e.toString().toLowerCase();
        return ae.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var de = o(3058);
      const le = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ce = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        ue = (e, t) => {
          e && void 0 !== t && (0, de.canStoreCookie)(e) && ce(e) !== t && (document.cookie = `${e}=${t}; domain=${le()}; path=/;`)
        },
        ge = {
          BL: "bl"
        };
      Object.values(ge), ge.BL;
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
        be = () => [se.xbox360.name, se.xboxone.name, se.ps3.name, se.ps4.name, se.pc.name],
        ve = () => [se.xboxsx.name, se.ps5.name, se.pcalt.name],
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
      const Pe = (0, o(7279).A)(),
        Ce = Pe?.id,
        Te = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ee = e => {
          const t = {
            ...e,
            environment: Ce,
            display_type: Te
          };
          Se().dataLayer({
            dataLayer: t
          })
        },
        Ae = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ee(e)
          }
        }))(e, t),
        Le = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, w.useState)(t), s = e => {
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
          return (0, w.useEffect)(() => {
            const e = (0, g.debounce)(() => {
              r(s(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, f.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Re = o(8670),
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
              } = X(Me, {
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
      var Oe = o(5997),
        qe = o(7714),
        De = o(2746),
        _e = o(4812);
      const Ue = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        Be = () => (0, w.useContext)(Ue),
        Fe = ({
          children: e,
          ...t
        }) => {
          const o = Be() ?? {},
            n = (0, w.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Ue.Provider, {
            value: n,
            children: e
          })
        };
      var ze = o(3022),
        Ne = o(6416);
      const Ge = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ne.useLocation)();
          return (0, w.useEffect)(() => {
            Ee({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
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
      const Je = (0, C.UT)(We),
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
            domain: le(),
            path: "/"
          }), Je(o), o
        },
        He = () => ({
          webSettings: (0, b.q)(Je),
          webSettingsReactive: Je,
          mutateWebSettings: Qe
        });
      var Ke = o(5633)
    }
  }
]);