try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "61f2018d-2215-4853-bd12-550a453ca724", e._sentryDebugIdIdentifier = "sentry-dbid-61f2018d-2215-4853-bd12-550a453ca724")
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
  [6048], {
    94931(e, t, o) {
      var n = o(93082),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var n, a = {},
          l = null,
          c = null;
        for (n in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) s.call(t, n) && !d.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: c,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    47279(e, t, o) {
      o.d(t, {
        A: () => l,
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
          }), s()(r()({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    36048(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => T.X,
        DataLayerProvider: () => Ue,
        InMemoryCache: () => C.D,
        Platform: () => oe,
        Platforms: () => ne,
        ReactiveStateProvider: () => y,
        ResizeProvider: () => Je.uU,
        RockstarGraphProvider: () => V,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => Oe.N2,
        coreScApiFetch: () => n.A,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => ee,
        downloadFile: () => he,
        findPlatform: () => ae,
        generateTpaLink: () => ce.t,
        getAccentColor: () => a,
        getBase: () => s.A,
        getCdnPrefix: () => ge,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => me,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => be,
        getUriForGraphEnv: () => d,
        gql: () => Te.J1,
        gtmInit: () => ze,
        importAll: () => ue,
        isGen9Platform: () => we,
        makeVar: () => S.UT,
        mutateWebSettings: () => We,
        newswirePost: () => K,
        oneTrustInit: () => H,
        safeStyles: () => u,
        scrollToElement: () => Z,
        setContextItem: () => p.A,
        setCookieValue: () => le,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => qe.t,
        track: () => Pe,
        useApolloClient: () => F,
        useBase: () => _e.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => De,
        useGetTpaLinkGenerator: () => _e.gd,
        useHasReduceMotionPreference: () => _e.vx,
        useHasSaveDataPreference: () => _e.sb,
        useLazyQuery: () => je._,
        useLocale: () => _e.Ym,
        useMutateState: () => x,
        useMutation: () => Ie.n,
        useNewswirePost: () => _e.CA,
        usePreloadImg: () => _e.OG,
        usePrevious: () => _e.ZC,
        useQuery: () => $,
        useQueryParams: () => _e.sq,
        useReactiveVar: () => f.q,
        useRelativeTime: () => _e.Vq,
        useRockstarEventDispatcher: () => _e.OH,
        useRockstarEventSubscriber: () => _e.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => Xe,
        useScApi: () => _e.Cb,
        useScAuthLinks: () => _e.N6,
        useScroll: () => Oe.Ll,
        useScrollTracking: () => _e.GA,
        useScrollVisibility: () => _e.JE,
        useState: () => b,
        useWindowResize: () => Je.G4,
        webSettingsReactive: () => Ve,
        withAutoRouteTracking: () => Be,
        withGtmTracking: () => Ce,
        withMediaBasedProps: () => Ee,
        withReactiveState: () => k,
        withRockstarGraph: () => W,
        withTranslations: () => Le
      });
      var n = o(10959);
      const r = (...e) => e.filter(Boolean).join(" "),
        a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = o(17473),
        i = o(39991);
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
      var l = o(69646),
        c = o.n(l);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = o(58657),
        g = o(94662),
        h = o(39793),
        m = o(93082),
        f = o(37927);
      const w = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, m.useContext)(w),
        v = (0, p.A)({
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
      var S = o(79922),
        P = o(42909),
        C = o(13996),
        E = o(94920),
        T = o(48989),
        A = o(95753),
        R = o(99164);
      var L = o(70945);
      const _ = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var O = o(98548),
        j = o(39647),
        I = o.n(j);
      var M = o(70735),
        D = o(5942);
      const U = (0, M.e)({
        sha256: D.sc
      });
      var q = o(87324);
      const N = document.documentElement.lang,
        B = (e, t) => {
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
              error: a,
              ...s
            } = (0, q.IT)(e, o);
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
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, m.useEffect)(() => {
            if (o.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: r,
            error: a,
            data: n,
            ...s
          }
        },
        z = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        F = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? d(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, m.useState)(new C.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, P.useIntl)(),
            s = U.concat((({
              formatMessage: e
            }) => (0, L.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = _[t?.code ?? ""];
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
            }) => (0, R.o)((t, {
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
              fetch: I()
            }))(n))));
          return new E.R({
            cache: r,
            link: s
          })
        },
        G = (0, m.createContext)(B),
        $ = (e, t) => (0, m.useContext)(G)(e, t),
        V = (0, P.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = F({
            graphOptions: t,
            typePolicies: o
          });
          return (0, h.jsx)(A.ec, {
            token: t?.token,
            children: (0, h.jsx)(T.X, {
              client: n,
              children: (0, h.jsx)(G.Provider, {
                value: B,
                children: e
              })
            })
          })
        }, z),
        W = (e, {
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
        X = (0, S.UT)({}),
        J = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, f.q)(X),
            o = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            o ? document.documentElement.setAttribute(J, "true") : document.documentElement.removeAttribute(J)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => X(e))({
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
      var K = o(22636);
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
        constructor(e, t, o, n, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = a
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
        re = Object.freeze(Object.values(ne));

      function ae(e) {
        if (!e) return;
        if (e instanceof oe) return e;
        const t = e.toString().toLowerCase();
        return re.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var se = o(23058);
      const ie = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        de = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        le = (e, t) => {
          e && void 0 !== t && (0, se.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${ie()}; path=/;`)
        };
      var ce = o(32118);
      const ue = e => e.keys().forEach(e),
        pe = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ge = (e = !0) => pe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
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
        we = e => fe().includes(e),
        be = e => {
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
      var ve = o(81471),
        xe = o.n(ve);
      const ye = (0, o(47279).A)(),
        ke = ye?.id,
        Se = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Pe = e => {
          const t = {
            ...e,
            environment: ke,
            display_type: Se
          };
          xe().dataLayer({
            dataLayer: t
          })
        },
        Ce = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Pe(e)
          }
        }))(e, t),
        Ee = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, m.useState)(t), a = e => {
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
              r(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Te = o(8670),
        Ae = o(12879);
      const Re = Te.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Le = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ae.A)(),
              {
                data: o
              } = $(Re, {
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
      var _e = o(85997),
        Oe = o(17714),
        je = o(52746),
        Ie = o(54812);
      const Me = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        De = () => (0, m.useContext)(Me),
        Ue = ({
          children: e,
          ...t
        }) => {
          const o = De() ?? {},
            n = (0, m.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, h.jsx)(Me.Provider, {
            value: n,
            children: e
          })
        };
      var qe = o(93022),
        Ne = o(36416);
      const Be = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ne.useLocation)();
          return (0, m.useEffect)(() => {
            Pe({
              event: "trackPageview"
            })
          }, [o]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        ze = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          xe().initialize(t)
        };
      var Fe = o(43568);
      const Ge = "rockstar-games-web";
      let $e;
      try {
        const e = Fe.A.get(Ge) ?? "";
        $e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $e = {}
      }
      const Ve = (0, S.UT)($e),
        We = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ve() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Fe.A.set(Ge, JSON.stringify(o), {
            expires: 30,
            domain: ie(),
            path: "/"
          }), Ve(o), o
        },
        Xe = () => ({
          webSettings: (0, f.q)(Ve),
          webSettingsReactive: Ve,
          mutateWebSettings: We
        });
      var Je = o(25633)
    }
  }
]);