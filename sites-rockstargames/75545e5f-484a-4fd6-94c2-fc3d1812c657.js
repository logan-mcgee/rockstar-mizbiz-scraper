try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "75545e5f-484a-4fd6-94c2-fc3d1812c657", e._sentryDebugIdIdentifier = "sentry-dbid-75545e5f-484a-4fd6-94c2-fc3d1812c657")
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
  [1177, 2960, 6730], {
    94931(e, t, o) {
      var n = o(93082),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var n, a = {},
          c = null,
          d = null;
        for (n in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    47279(e, t, o) {
      o.d(t, {
        A: () => c,
        C: () => i
      });
      var n = o(54028),
        r = o.n(n),
        a = o(15963),
        s = o.n(a);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
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
        c = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = l.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), a = l[n >= 0 ? n : 0], i = l.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(r()({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    46730(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => w.ApolloClient,
        ApolloProvider: () => w.ApolloProvider,
        DataLayerProvider: () => Re,
        InMemoryCache: () => w.InMemoryCache,
        Platform: () => Z,
        Platforms: () => ee,
        ReactiveStateProvider: () => P,
        ResizeProvider: () => Be.uU,
        RockstarGraphProvider: () => B,
        RockstarTokenProvider: () => O.ec,
        ScrollProvider: () => Ae.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => Y,
        downloadFile: () => ue,
        findPlatform: () => oe,
        generateTpaLink: () => ie.t,
        getAccentColor: () => l,
        getBase: () => c.A,
        getCdnPrefix: () => de,
        getConfigForDomain: () => d.A,
        getCookieValueByName: () => ae,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => ge,
        getUriForGraphEnv: () => u,
        gql: () => w.gql,
        gtmInit: () => Me,
        importAll: () => le,
        isGen9Platform: () => he,
        makeVar: () => w.makeVar,
        mutateWebSettings: () => Ue,
        newswirePost: () => X,
        oneTrustInit: () => H,
        safeStyles: () => h,
        scrollToElement: () => J,
        setContextItem: () => g.A,
        setCookieValue: () => se,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => W,
        toScLocaleString: () => _e.t,
        track: () => xe,
        useApolloClient: () => N,
        useBase: () => Oe.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => je,
        useGetTpaLinkGenerator: () => Oe.gd,
        useHasReduceMotionPreference: () => Oe.vx,
        useHasSaveDataPreference: () => Oe.sb,
        useLazyQuery: () => w.useLazyQuery,
        useLocale: () => Oe.Ym,
        useMutateState: () => S,
        useMutation: () => w.useMutation,
        useNewswirePost: () => Oe.CA,
        usePreloadImg: () => Oe.OG,
        usePrevious: () => Oe.ZC,
        useQuery: () => z,
        useQueryParams: () => Oe.sq,
        useReactiveVar: () => w.useReactiveVar,
        useRelativeTime: () => Oe.Vq,
        useRockstarEventDispatcher: () => Oe.OH,
        useRockstarEventSubscriber: () => Oe.zP,
        useRockstarToken: () => O.e9,
        useRockstarTokenPing: () => O.Es,
        useRockstarTokenReactive: () => O.bD,
        useRockstarWebSettings: () => ze,
        useScApi: () => Oe.Cb,
        useScAuthLinks: () => Oe.N6,
        useScroll: () => Ae.Ll,
        useScrollTracking: () => Oe.GA,
        useScrollVisibility: () => Oe.JE,
        useState: () => x,
        useWindowResize: () => Be.G4,
        webSettingsReactive: () => Ne,
        withAutoRouteTracking: () => Ie,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => Se,
        withReactiveState: () => C,
        withRockstarGraph: () => G,
        withTranslations: () => Ee
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var r = o(10959),
        a = o(57978);
      const s = () => {
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
        l = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var c = o(17473),
        d = o(39991);
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
      var p = o(2631),
        f = o.n(p);
      const h = e => {
        const t = f().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var g = o(81038),
        m = o(94662),
        y = o(39793),
        b = o(93082),
        w = o(3710);
      const v = (0, g.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, b.useContext)(v),
        k = (0, g.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        S = () => (0, b.useContext)(k),
        P = ({
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
          return (0, y.jsx)(v.Provider, {
            value: t(),
            children: (0, y.jsx)(k.Provider, {
              value: o,
              children: e
            })
          })
        },
        C = (e, {
          state: t
        }) => function(o) {
          return (0, y.jsx)(P, {
            state: t,
            children: (0, y.jsx)(e, {
              ...o
            })
          })
        };
      var E = o(42909),
        O = o(95753),
        A = o(99164);
      var T = o(70945);
      const j = (0, E.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var R = o(39647),
        _ = o.n(R);
      var L = o(70735),
        I = o(5942);
      const M = (0, L.e)({
          sha256: I.sc
        }),
        D = document.documentElement.lang,
        q = (e, t) => {
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
              loading: r,
              error: a,
              ...s
            } = (0, w.useQuery)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = f().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, b.useEffect)(() => {
            if (o.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: r,
            error: a,
            data: n,
            ...s
          }
        },
        F = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        N = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, b.useState)(new w.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, E.useIntl)(),
            s = M.concat((({
              formatMessage: e
            }) => (0, T.S)(t => {
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
            }) => (0, A.o)((t, {
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
              fetch: _()
            }))(n))));
          return new w.ApolloClient({
            cache: r,
            link: s
          })
        },
        U = (0, b.createContext)(q),
        z = (e, t) => (0, b.useContext)(U)(e, t),
        B = (0, E.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = N({
            graphOptions: t,
            typePolicies: o
          });
          return (0, y.jsx)(O.ec, {
            token: t?.token,
            children: (0, y.jsx)(w.ApolloProvider, {
              client: n,
              children: (0, y.jsx)(U.Provider, {
                value: q,
                children: e
              })
            })
          })
        }, F),
        G = (e, {
          env: t = "prod"
        }) => {
          const o = (0, w.makeVar)("");
          return function(n) {
            return (0, y.jsx)(B, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, y.jsx)(e, {
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
        Y = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (J({
            element: o
          }), K(o))
        },
        K = e => {
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
        constructor(e, t, o, n, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = a
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
      const re = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ae = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        se = (e, t) => {
          e && void 0 !== t && (0, ne.canStoreCookie)(e) && ae(e) !== t && (document.cookie = `${e}=${t}; domain=${re()}; path=/;`)
        };
      var ie = o(32118);
      const le = e => e.keys().forEach(e),
        ce = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        de = (e = !0) => ce.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
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
        pe = () => [ee.xbox360.name, ee.xboxone.name, ee.ps3.name, ee.ps4.name, ee.pc.name],
        fe = () => [ee.xboxsx.name, ee.ps5.name, ee.pcalt.name],
        he = e => fe().includes(e),
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
      var me = o(81471),
        ye = o.n(me);
      const be = (0, o(47279).A)(),
        we = be?.id,
        ve = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        xe = e => {
          const t = {
            ...e,
            environment: we,
            display_type: ve
          };
          ye().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, y.jsx)(e, {
          ...t,
          gtmTrack: e => {
            xe(e)
          }
        }))(e, t),
        Se = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, b.useState)(t), a = e => {
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
            const e = f().debounce(() => {
              r(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, y.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Pe = o(12879);
      const Ce = w.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ee = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Pe.A)(),
              {
                data: o
              } = z(Ce, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, y.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Oe = o(85997),
        Ae = o(17714);
      const Te = (0, g.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        je = () => (0, b.useContext)(Te),
        Re = ({
          children: e,
          ...t
        }) => {
          const o = je() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, y.jsx)(Te.Provider, {
            value: n,
            children: e
          })
        };
      var _e = o(93022),
        Le = o(36416);
      const Ie = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Le.useLocation)();
          return (0, b.useEffect)(() => {
            xe({
              event: "trackPageview"
            })
          }, [o]), (0, y.jsx)(e, {
            ...t
          })
        })(e, t),
        Me = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ye().initialize(t)
        };
      var De = o(43568);
      const qe = "rockstar-games-web";
      let Fe;
      try {
        const e = De.A.get(qe) ?? "";
        Fe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Fe = {}
      }
      const Ne = (0, w.makeVar)(Fe),
        Ue = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ne() ?? {}
          };
          return o[e] = t, null === t && delete o[e], De.A.set(qe, JSON.stringify(o), {
            expires: 30,
            domain: re(),
            path: "/"
          }), Ne(o), o
        },
        ze = () => ({
          webSettings: (0, w.useReactiveVar)(Ne),
          webSettingsReactive: Ne,
          mutateWebSettings: Ue
        });
      var Be = o(25633)
    },
    51177(e, t, o) {
      o.d(t, {
        C6: () => r,
        Cl: () => a,
        Tt: () => s,
        YH: () => l,
        fX: () => u,
        gz: () => d,
        sH: () => i
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }, n(e, t)
      };

      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, o = 1, n = arguments.length; o < n; o++)
            for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, a.apply(this, arguments)
      };

      function s(e, t) {
        var o = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
        }
        return o
      }

      function i(e, t, o, n) {
        return new(o || (o = Promise))(function(r, a) {
          function s(e) {
            try {
              l(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              l(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
              e(t)
            })).then(s, i)
          }
          l((n = n.apply(e, t || [])).next())
        })
      }

      function l(e, t) {
        var o, n, r, a = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1]
            },
            trys: [],
            ops: []
          },
          s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return s.next = i(0), s.throw = i(1), s.return = i(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
          return this
        }), s;

        function i(i) {
          return function(l) {
            return function(i) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; s && (s = 0, i[0] && (a = 0)), a;) try {
                if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                      a.label = i[1];
                      break
                    }
                    if (6 === i[0] && a.label < r[1]) {
                      a.label = r[1], r = i;
                      break
                    }
                    if (r && a.label < r[2]) {
                      a.label = r[2], a.ops.push(i);
                      break
                    }
                    r[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                i = [6, e], n = 0
              } finally {
                o = r = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, l])
          }
        }
      }

      function c(e, t) {
        var o = "function" == typeof Symbol && e[Symbol.iterator];
        if (!o) return e;
        var n, r, a = o.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) s.push(n.value)
        } catch (e) {
          r = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (o = a.return) && o.call(a)
          } finally {
            if (r) throw r.error
          }
        }
        return s
      }

      function d() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
        return e
      }

      function u(e, t, o) {
        if (o || 2 === arguments.length)
          for (var n, r = 0, a = t.length; r < a; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);