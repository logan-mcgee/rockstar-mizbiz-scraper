try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eedf27a9-2875-4bdd-a15a-7e287b694ce9", e._sentryDebugIdIdentifier = "sentry-dbid-eedf27a9-2875-4bdd-a15a-7e287b694ce9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [559, 940], {
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
        A: () => s,
        C: () => r
      });
      var n = o(40283);
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        a = [{
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
        s = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = a.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), s = a[r >= 0 ? r : 0], i = a.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, n.omit)((0, n.merge)({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    18940(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => A.R,
        ApolloProvider: () => _.X,
        DataLayerProvider: () => Ne,
        InMemoryCache: () => T.D,
        PAGE_THEMES: () => ge,
        Platform: () => ae,
        Platforms: () => se,
        ReactiveStateProvider: () => k,
        ResizeProvider: () => Ye.uU,
        RockstarGraphProvider: () => X,
        RockstarTokenProvider: () => L.ec,
        ScrollProvider: () => De.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => ne,
        downloadFile: () => we,
        findPlatform: () => de,
        generateTpaLink: () => me.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => be,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ue,
        getGen8Consoles: () => ve,
        getGen9Consoles: () => xe,
        getLanguageLabel: () => Se,
        getUriForGraphEnv: () => u,
        gql: () => Re.J1,
        gtmInit: () => Ve,
        importAll: () => he,
        isEmptyMarkup: () => Y,
        isGen9Platform: () => ye,
        makeVar: () => C.UT,
        mutateWebSettings: () => He,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => g,
        scrollToElement: () => oe,
        setContextItem: () => m.A,
        setCookieValue: () => pe,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => ze.t,
        track: () => Ae,
        useApolloClient: () => $,
        useBase: () => Ie.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => Be,
        useGetTpaLinkGenerator: () => Ie.gd,
        useHasReduceMotionPreference: () => Ie.vx,
        useHasSaveDataPreference: () => Ie.sb,
        useLazyQuery: () => qe._,
        useLocale: () => Ie.Ym,
        useMutateState: () => S,
        useMutation: () => Ue.n,
        useNewswirePost: () => Ie.CA,
        usePreloadImg: () => Ie.OG,
        usePrevious: () => Ie.ZC,
        useQuery: () => W,
        useQueryParams: () => Ie.sq,
        useReactiveVar: () => w.q,
        useRelativeTime: () => Ie.Vq,
        useRockstarEventDispatcher: () => Ie.OH,
        useRockstarEventSubscriber: () => Ie.zP,
        useRockstarToken: () => L.e9,
        useRockstarTokenPing: () => L.Es,
        useRockstarTokenReactive: () => L.bD,
        useRockstarWebSettings: () => Ke,
        useScApi: () => Ie.Cb,
        useScAuthLinks: () => Ie.N6,
        useScroll: () => De.Ll,
        useScrollTracking: () => Ie.GA,
        useScrollVisibility: () => Ie.JE,
        useState: () => x,
        useWindowResize: () => Ye.G4,
        webSettingsReactive: () => Qe,
        withAutoRouteTracking: () => $e,
        withGtmTracking: () => _e,
        withMediaBasedProps: () => Le,
        withReactiveState: () => P,
        withRockstarGraph: () => J,
        withTranslations: () => Me
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
      var p = o(40283);
      const g = e => {
        const t = (0, p.clone)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var m = o(81038),
        h = o(94662),
        f = o(39793),
        b = o(93082),
        w = o(37927);
      const v = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, b.useContext)(v),
        y = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        S = () => (0, b.useContext)(y),
        k = ({
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
          return (0, f.jsx)(k, {
            state: t,
            children: (0, f.jsx)(e, {
              ...o
            })
          })
        };
      var C = o(79922),
        E = o(42909),
        T = o(13996),
        A = o(74395),
        _ = o(48989),
        L = o(95753),
        R = o(99164);
      var O = o(70945);
      const j = (0, E.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var M = o(98548),
        I = o(39647),
        D = o.n(I);
      var q = o(70735),
        U = o(5942);
      const F = (0, q.e)({
        sha256: U.sc
      });
      var B = o(87324);
      const N = document.documentElement.lang,
        z = (e, t) => {
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
            } = (0, B.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = (0, p.get)(n, o.setTitleDataPath) ?? null;
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
            [r] = (0, b.useState)(new T.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, E.useIntl)(),
            s = F.concat((({
              formatMessage: e
            }) => (0, O.S)(t => {
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
            }).concat((e => (0, M.$)({
              ...e,
              fetch: D()
            }))(n))));
          return new A.R({
            cache: r,
            link: s
          })
        },
        V = (0, b.createContext)(z),
        W = (e, t) => (0, b.useContext)(V)(e, t),
        X = (0, E.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = $({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(L.ec, {
            token: t?.token,
            children: (0, f.jsx)(_.X, {
              client: n,
              children: (0, f.jsx)(V.Provider, {
                value: z,
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
            return (0, f.jsx)(X, {
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
          const t = (0, w.q)(Q),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(H, "true") : document.documentElement.removeAttribute(H)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => Q(e))({
              ...t,
              [e]: o
            })
          }
        },
        Y = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
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
      var te = o(22636);
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
          }), re(o))
        },
        re = e => {
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
        constructor(e, t, o, n, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = a
        }
      }
      const se = Object.freeze({
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
        ie = Object.freeze(Object.values(se));

      function de(e) {
        if (!e) return;
        if (e instanceof ae) return e;
        const t = e.toString().toLowerCase();
        return ie.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var le = o(23058);
      const ce = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ue = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        pe = (e, t) => {
          e && void 0 !== t && (0, le.canStoreCookie)(e) && ue(e) !== t && (document.cookie = `${e}=${t}; domain=${ce()}; path=/;`)
        },
        ge = {
          BL: "bl"
        };
      Object.values(ge), ge.BL;
      var me = o(32118);
      const he = e => e.keys().forEach(e),
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
        ve = () => [se.xbox360.name, se.xboxone.name, se.ps3.name, se.ps4.name, se.pc.name],
        xe = () => [se.xboxsx.name, se.ps5.name, se.pcalt.name],
        ye = e => xe().includes(e),
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
      var ke = o(81471),
        Pe = o.n(ke);
      const Ce = (0, o(47279).A)(),
        Ee = Ce?.id,
        Te = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ae = e => {
          const t = {
            ...e,
            environment: Ee,
            display_type: Te
          };
          Pe().dataLayer({
            dataLayer: t
          })
        },
        _e = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ae(e)
          }
        }))(e, t),
        Le = (e, t = 250) => o => ((e, t, o) => {
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
            const e = (0, p.debounce)(() => {
              r(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, f.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Re = o(23066),
        Oe = o(12879);
      const je = Re.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Me = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Oe.A)(),
              {
                data: o
              } = W(je, {
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
      var Ie = o(85997),
        De = o(17714),
        qe = o(52746),
        Ue = o(54812);
      const Fe = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        Be = () => (0, b.useContext)(Fe),
        Ne = ({
          children: e,
          ...t
        }) => {
          const o = Be() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Fe.Provider, {
            value: n,
            children: e
          })
        };
      var ze = o(93022),
        Ge = o(36416);
      const $e = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ge.useLocation)();
          return (0, b.useEffect)(() => {
            Ae({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        Ve = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Pe().initialize(t)
        };
      var We = o(43568);
      const Xe = "rockstar-games-web";
      let Je;
      try {
        const e = We.A.get(Xe) ?? "";
        Je = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Je = {}
      }
      const Qe = (0, C.UT)(Je),
        He = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Qe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], We.A.set(Xe, JSON.stringify(o), {
            expires: 30,
            domain: ce(),
            path: "/"
          }), Qe(o), o
        },
        Ke = () => ({
          webSettings: (0, w.q)(Qe),
          webSettingsReactive: Qe,
          mutateWebSettings: He
        });
      var Ye = o(25633)
    }
  }
]);