try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e0394ac3-05de-4bda-8e04-4719fa195b39", e._sentryDebugIdIdentifier = "sentry-dbid-e0394ac3-05de-4bda-8e04-4719fa195b39")
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
  [597, 978], {
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
    60597(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => A.R,
        ApolloProvider: () => _.X,
        DataLayerProvider: () => Fe,
        InMemoryCache: () => T.D,
        PAGE_THEMES: () => pe,
        Platform: () => re,
        Platforms: () => ae,
        ReactiveStateProvider: () => k,
        ResizeProvider: () => Ke.uU,
        RockstarGraphProvider: () => X,
        RockstarTokenProvider: () => L.ec,
        ScrollProvider: () => Me.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => oe,
        downloadFile: () => be,
        findPlatform: () => ie,
        generateTpaLink: () => ge.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => fe,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ce,
        getGen8Consoles: () => we,
        getGen9Consoles: () => ve,
        getLanguageLabel: () => ye,
        getUriForGraphEnv: () => u,
        gql: () => Le.J1,
        gtmInit: () => $e,
        importAll: () => he,
        isGen9Platform: () => xe,
        makeVar: () => C.UT,
        mutateWebSettings: () => Qe,
        newswirePost: () => ee,
        oneTrustInit: () => Z,
        safeStyles: () => g,
        scrollToElement: () => te,
        setContextItem: () => h.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => Ne.t,
        track: () => Te,
        useApolloClient: () => $,
        useBase: () => Ie.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => Be,
        useGetTpaLinkGenerator: () => Ie.gd,
        useHasReduceMotionPreference: () => Ie.vx,
        useHasSaveDataPreference: () => Ie.sb,
        useLazyQuery: () => De._,
        useLocale: () => Ie.Ym,
        useMutateState: () => S,
        useMutation: () => qe.n,
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
        useRockstarWebSettings: () => He,
        useScApi: () => Ie.Cb,
        useScAuthLinks: () => Ie.N6,
        useScroll: () => Me.Ll,
        useScrollTracking: () => Ie.GA,
        useScrollVisibility: () => Ie.JE,
        useState: () => x,
        useWindowResize: () => Ke.G4,
        webSettingsReactive: () => Je,
        withAutoRouteTracking: () => Ge,
        withGtmTracking: () => Ae,
        withMediaBasedProps: () => _e,
        withReactiveState: () => P,
        withRockstarGraph: () => J,
        withTranslations: () => je
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
      var h = o(81038),
        m = o(94662),
        f = o(39793),
        b = o(93082),
        w = o(37927);
      const v = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, b.useContext)(v),
        y = (0, h.A)({
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
      var I = o(98548),
        M = o(39647),
        D = o.n(M);
      var q = o(70735),
        U = o(5942);
      const B = (0, q.e)({
        sha256: U.sc
      });
      var F = o(87324);
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
            } = (0, F.IT)(e, o);
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
            s = B.concat((({
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
            }).concat((e => (0, I.$)({
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
      var ee = o(22636);
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
        constructor(e, t, o, n, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = a
        }
      }
      const ae = Object.freeze({
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
        se = Object.freeze(Object.values(ae));

      function ie(e) {
        if (!e) return;
        if (e instanceof re) return e;
        const t = e.toString().toLowerCase();
        return se.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var de = o(23058);
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
        pe = {
          BL: "bl"
        };
      Object.values(pe), pe.BL;
      var ge = o(32118);
      const he = e => e.keys().forEach(e),
        me = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        fe = (e = !0) => me.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        be = e => {
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
        we = () => [ae.xbox360.name, ae.xboxone.name, ae.ps3.name, ae.ps4.name, ae.pc.name],
        ve = () => [ae.xboxsx.name, ae.ps5.name, ae.pcalt.name],
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
      var Se = o(81471),
        ke = o.n(Se);
      const Pe = (0, o(47279).A)(),
        Ce = Pe?.id,
        Ee = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Te = e => {
          const t = {
            ...e,
            environment: Ce,
            display_type: Ee
          };
          ke().dataLayer({
            dataLayer: t
          })
        },
        Ae = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Te(e)
          }
        }))(e, t),
        _e = (e, t = 250) => o => ((e, t, o) => {
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
      var Le = o(23066),
        Re = o(12879);
      const Oe = Le.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        je = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Re.A)(),
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
      var Ie = o(85997),
        Me = o(17714),
        De = o(52746),
        qe = o(54812);
      const Ue = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        Be = () => (0, b.useContext)(Ue),
        Fe = ({
          children: e,
          ...t
        }) => {
          const o = Be() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Ue.Provider, {
            value: n,
            children: e
          })
        };
      var Ne = o(93022),
        ze = o(36416);
      const Ge = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, ze.useLocation)();
          return (0, b.useEffect)(() => {
            Te({
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
          ke().initialize(t)
        };
      var Ve = o(43568);
      const We = "rockstar-games-web";
      let Xe;
      try {
        const e = Ve.A.get(We) ?? "";
        Xe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Xe = {}
      }
      const Je = (0, C.UT)(Xe),
        Qe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Je() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ve.A.set(We, JSON.stringify(o), {
            expires: 30,
            domain: le(),
            path: "/"
          }), Je(o), o
        },
        He = () => ({
          webSettings: (0, w.q)(Je),
          webSettingsReactive: Je,
          mutateWebSettings: Qe
        });
      var Ke = o(25633)
    }
  }
]);