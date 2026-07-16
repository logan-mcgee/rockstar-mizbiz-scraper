try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b541240b-d19e-4647-ac76-75370169f45d", e._sentryDebugIdIdentifier = "sentry-dbid-b541240b-d19e-4647-ac76-75370169f45d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [9802], {
    24834(e, t, o) {
      var n = o(68861),
        r = o(50573);
      const s = [{
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
      }];
      o.d(t, ["A", 0, () => {
        let e;
        const {
          location: t
        } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = s.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
          site: t,
          subDomain: n
        }, !0)) >= 0), i = s[a >= 0 ? a : 0], d = s.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, r.A)((0, n.A)({}, d, {
          currentSite: e
        }, i), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    },
    9802(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => T.R,
        ApolloProvider: () => L.X,
        DataLayerProvider: () => Ge,
        InMemoryCache: () => E.D,
        PAGE_THEMES: () => he,
        Platform: () => ae,
        Platforms: () => ie,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => et.uU,
        RockstarGraphProvider: () => J,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => Ue.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => re,
        downloadFile: () => ve,
        findPlatform: () => le,
        generateTpaLink: () => me.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => be,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ge,
        getGen8Consoles: () => xe,
        getGen9Consoles: () => ye,
        getLanguageLabel: () => Se,
        getUriForGraphEnv: () => u,
        gql: () => Ie.J1,
        gtmInit: () => We,
        importAll: () => fe,
        isEmptyMarkup: () => Z,
        isGen9Platform: () => ke,
        makeVar: () => C.UT,
        mutateWebSettings: () => Ye,
        newswirePost: () => oe,
        oneTrustInit: () => te,
        safeStyles: () => p,
        scrollToElement: () => ne,
        setContextItem: () => h.A,
        setCookieValue: () => pe,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => $e.t,
        track: () => Le,
        useApolloClient: () => V,
        useBase: () => _e.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => Ne,
        useGetTpaLinkGenerator: () => _e.gd,
        useHasReduceMotionPreference: () => _e.vx,
        useHasSaveDataPreference: () => _e.sb,
        useLazyQuery: () => Be._,
        useLocale: () => _e.Ym,
        useMutateState: () => k,
        useMutation: () => Fe.n,
        useNewswirePost: () => _e.CA,
        usePreloadImg: () => _e.OG,
        usePrevious: () => _e.ZC,
        useQuery: () => W,
        useQueryParams: () => _e.sq,
        useReactiveVar: () => b.q,
        useRelativeTime: () => _e.Vq,
        useRockstarEventDispatcher: () => _e.OH,
        useRockstarEventSubscriber: () => _e.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Ze,
        useScApi: () => _e.Cb,
        useScAuthLinks: () => _e.N6,
        useScroll: () => Ue.Ll,
        useScrollTracking: () => _e.GA,
        useScrollVisibility: () => _e.JE,
        useState: () => x,
        useWindowResize: () => et.G4,
        webSettingsReactive: () => Ke,
        withAutoRouteTracking: () => Xe,
        withGtmTracking: () => Re,
        withMediaBasedProps: () => je,
        withReactiveState: () => P,
        withRockstarGraph: () => Q,
        withTranslations: () => De
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var r = o(52974),
        s = o(57978);
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
      var l = o(12658),
        c = o(91146);
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
      var h = o(17727),
        m = o(45075),
        f = o(39793),
        w = o(4637),
        b = o(18849);
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
      var C = o(91540),
        A = o(42909),
        E = o(57822),
        T = o(32590),
        L = o(77387),
        R = o(61295),
        M = o(26390);
      var j = o(28479);
      const I = (0, A.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var O = o(70246),
        q = o(39647),
        D = o.n(q);
      var _ = o(41265),
        U = o(5942);
      const B = (0, _.e)({
        sha256: U.sc
      });
      var F = o(65434),
        z = o(26065);
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
              loading: r,
              error: s,
              ...a
            } = (0, F.IT)(e, o);
          return (0, w.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = (0, z.A)(n, o.setTitleDataPath) ?? null;
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
            [r] = (0, w.useState)(new E.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, A.useIntl)(),
            a = B.concat((({
              formatMessage: e
            }) => (0, j.S)(t => {
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
            }).concat((e => (0, O.$)({
              ...e,
              fetch: D()
            }))(n))));
          return new T.R({
            cache: r,
            link: a
          })
        },
        X = (0, w.createContext)(G),
        W = (e, t) => (0, w.useContext)(X)(e, t),
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
          const t = (0, b.q)(H),
            o = Object.values(t).some(e => !!e);
          return (0, w.useEffect)(() => {
            o ? document.documentElement.setAttribute(K, "true") : document.documentElement.removeAttribute(K)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => H(e))({
              ...t,
              [e]: o
            })
          }
        },
        Z = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        ee = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        te = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var oe = o(11701);
      const ne = ({
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
        re = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (ne({
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
        constructor(e, t, o, n, r = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = s
        }
      }
      const ie = Object.freeze({
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
        de = Object.freeze(Object.values(ie));

      function le(e) {
        if (!e) return;
        if (e instanceof ae) return e;
        const t = e.toString().toLowerCase();
        return de.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ce = o(23058);
      const ue = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ge = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        pe = (e, t) => {
          e && void 0 !== t && (0, ce.canStoreCookie)(e) && ge(e) !== t && (document.cookie = `${e}=${t}; domain=${ue()}; path=/;`)
        },
        he = {
          BL: "bl"
        };
      Object.values(he), he.BL;
      var me = o(49345);
      const fe = e => e.keys().forEach(e),
        we = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        be = (e = !0) => we.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        ve = e => {
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
        xe = () => [ie.xbox360.name, ie.xboxone.name, ie.ps3.name, ie.ps4.name, ie.pc.name],
        ye = () => [ie.xboxsx.name, ie.ps5.name, ie.pcalt.name],
        ke = e => ye().includes(e),
        Se = e => {
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
      var Pe = o(81471),
        Ce = o.n(Pe);
      const Ae = (0, o(24834).A)(),
        Ee = Ae?.id,
        Te = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Le = e => {
          const t = {
            ...e,
            environment: Ee,
            display_type: Te
          };
          Ce().dataLayer({
            dataLayer: t
          })
        },
        Re = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Le(e)
          }
        }))(e, t);
      var Me = o(79098);
      const je = (e, t = 250) => o => ((e, t, o) => {
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
          const e = (0, Me.A)(() => {
            r(s(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, f.jsx)(e, {
          ...n
        })
      })(e, o, t);
      var Ie = o(53967),
        Oe = o(75764);
      const qe = Ie.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        De = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Oe.A)(),
              {
                data: o
              } = W(qe, {
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
      var _e = o(56596),
        Ue = o(12509),
        Be = o(58460),
        Fe = o(71374);
      const ze = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ne = () => (0, w.useContext)(ze),
        Ge = ({
          children: e,
          ...t
        }) => {
          const o = Ne() ?? {},
            n = (0, w.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(ze.Provider, {
            value: n,
            children: e
          })
        };
      var $e = o(3339),
        Ve = o(942);
      const Xe = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ve.useLocation)();
          return (0, w.useEffect)(() => {
            Le({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        We = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Ce().initialize(t)
        };
      var Je = o(62885);
      const Qe = "rockstar-games-web";
      let He;
      try {
        const e = Je.A.get(Qe) ?? "";
        He = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        He = {}
      }
      const Ke = (0, C.UT)(He),
        Ye = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ke() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Je.A.set(Qe, JSON.stringify(o), {
            expires: 30,
            domain: ue(),
            path: "/"
          }), Ke(o), o
        },
        Ze = () => ({
          webSettings: (0, b.q)(Ke),
          webSettingsReactive: Ke,
          mutateWebSettings: Ye
        });
      var et = o(53634)
    }
  }
]);