try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d31c9382-4860-4e7f-9fba-f9b23f3d091b", e._sentryDebugIdIdentifier = "sentry-dbid-d31c9382-4860-4e7f-9fba-f9b23f3d091b")
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
  [2295, 2853, 5234], {
    42295: (e, t, o) => {
      e.exports = o(69245)
    },
    42853: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => h.ApolloClient,
        ApolloProvider: () => h.ApolloProvider,
        DataLayerProvider: () => Pe,
        InMemoryCache: () => h.InMemoryCache,
        Platform: () => Q,
        Platforms: () => W,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => Me.uU,
        RockstarGraphProvider: () => I,
        RockstarTokenProvider: () => x.ec,
        ScrollProvider: () => ke.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => $,
        downloadFile: () => ae,
        findPlatform: () => q,
        generateTpaLink: () => ee,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => ne,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => J,
        getGen8Consoles: () => re,
        getGen9Consoles: () => se,
        getLanguageLabel: () => le,
        getUriForGraphEnv: () => i,
        gql: () => h.gql,
        gtmInit: () => Le,
        importAll: () => te,
        isGen9Platform: () => ie,
        makeVar: () => h.makeVar,
        mutateWebSettings: () => Ie,
        newswirePost: () => z,
        oneTrustInit: () => B,
        safeStyles: () => d,
        scrollToElement: () => V,
        setContextItem: () => u.A,
        setCookieValue: () => K,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => F,
        toScLocaleString: () => Ce.t,
        track: () => me,
        useApolloClient: () => O,
        useBase: () => ve.RK,
        useBodyScrollable: () => N,
        useDataLayer: () => Se,
        useHasReduceMotionPreference: () => ve.vx,
        useHasSaveDataPreference: () => ve.sb,
        useLazyQuery: () => h.useLazyQuery,
        useLocale: () => ve.Ym,
        useMutateState: () => y,
        useMutation: () => h.useMutation,
        useNewswirePost: () => ve.CA,
        usePreloadImg: () => ve.OG,
        usePrevious: () => ve.ZC,
        useQuery: () => T,
        useQueryParams: () => ve.sq,
        useReactiveVar: () => h.useReactiveVar,
        useRockstarEventDispatcher: () => ve.OH,
        useRockstarEventSubscriber: () => ve.zP,
        useRockstarToken: () => x.e9,
        useRockstarTokenPing: () => x.Es,
        useRockstarTokenReactive: () => x.bD,
        useRockstarWebSettings: () => Te,
        useScApi: () => ve.Cb,
        useScAuthLinks: () => ve.N6,
        useScroll: () => ke.Ll,
        useScrollTracking: () => ve.GA,
        useScrollVisibility: () => ve.JE,
        useState: () => w,
        useWindowResize: () => Me.G4,
        webSettingsReactive: () => je,
        withAutoRouteTracking: () => Ae,
        withGtmTracking: () => he,
        withMediaBasedProps: () => fe,
        withReactiveState: () => k,
        withRockstarGraph: () => M,
        withTranslations: () => ye
      });
      var n = o(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = o(60309),
        s = o(45547);
      const i = e => {
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
      const d = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        g = o(42295),
        m = o(71127),
        h = o(32467);
      const f = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, m.useContext)(f),
        b = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, m.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, h.useReactiveVar)(t);
          const o = (0, m.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, g.jsx)(f.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: o,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(o) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...o
            })
          })
        };
      var x = o(20772),
        S = o(6347);
      var P = o(61162),
        C = o.n(P);
      var E = o(62944),
        A = o(42887);
      const L = (0, E.e)({
          sha256: A.sc
        }),
        R = document.documentElement.lang,
        _ = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: R,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: a,
              error: r,
              ...s
            } = (0, h.useQuery)(e, o);
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
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, m.useEffect)(() => {
            if (o.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: n,
            ...s
          }
        },
        O = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? i(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, m.useState)(new h.InMemoryCache({
              typePolicies: t
            })),
            r = L.concat((({
              token: e
            }) => (0, S.o)((t, {
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
            }).concat((e => (0, h.createHttpLink)({
              ...e,
              fetch: C()
            }))(n)));
          return new h.ApolloClient({
            cache: a,
            link: r
          })
        },
        j = (0, m.createContext)(_),
        I = ({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = O({
            graphOptions: t,
            typePolicies: o
          });
          return (0, g.jsx)(x.ec, {
            token: t?.token,
            children: (0, g.jsx)(h.ApolloProvider, {
              client: n,
              children: (0, g.jsx)(j.Provider, {
                value: _,
                children: e
              })
            })
          })
        },
        T = (e, t) => (0, m.useContext)(j)(e, t),
        M = (e, {
          env: t = "prod"
        }) => {
          const o = (0, h.makeVar)("");
          return function(n) {
            return (0, g.jsx)(I, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, g.jsx)(e, {
                ...n
              })
            })
          }
        },
        D = (0, h.makeVar)({}),
        U = "data-disallow-body-scroll",
        N = e => {
          const t = (0, h.useReactiveVar)(D),
            o = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            o ? document.documentElement.setAttribute(U, "true") : document.documentElement.removeAttribute(U)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => D(e))({
              ...t,
              [e]: o
            })
          }
        },
        B = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var z = o(89656);
      const F = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        V = ({
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
        $ = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (V({
            element: o
          }), G(o))
        },
        G = e => {
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
      class Q {
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
      const W = Object.freeze({
          pc: new Q("pc", "PC Legacy", 8, "sc"),
          ps: new Q("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Q("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Q("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Q("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Q("xbox", "Xbox", 4, "xbl"),
          xbox360: new Q("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Q("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Q("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Q("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Q("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Q("applestore", "App Store", 102, "applestore"),
          googleplay: new Q("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Q("app_store", "App Store", 102, "applestore"),
          googlePlay: new Q("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Q("pcalt", "PC Enhanced", 22, "sc")
        }),
        H = Object.freeze(Object.values(W));

      function q(e) {
        if (!e) return;
        if (e instanceof Q) return e;
        const t = e.toString().toLowerCase();
        return H.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var X = o(6306);
      const Y = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        J = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        K = (e, t) => {
          e && void 0 !== t && (0, X.canStoreCookie)(e) && J(e) !== t && (document.cookie = `${e}=${t}; domain=${Y()}; path=/;`)
        };
      var Z = o(56990);
      const ee = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, Z.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await o(), l = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return l.searchParams.append("cid", r), l.searchParams.append("lang", n), l.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && l.searchParams.append("accessToken", i.bearerToken), l
      }, te = e => e.keys().forEach(e), oe = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ne = (e = !0) => oe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, ae = e => {
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
      }, re = () => [W.xbox360.name, W.xboxone.name, W.ps3.name, W.ps4.name, W.pc.name], se = () => [W.xboxsx.name, W.ps5.name, W.pcalt.name], ie = e => se().includes(e), le = e => {
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
      var ce = o(89864),
        de = o.n(ce);
      const ue = (0, o(79867).A)(),
        pe = ue?.id,
        ge = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        me = e => {
          const t = {
            ...e,
            environment: pe,
            display_type: ge
          };
          de().dataLayer({
            dataLayer: t
          })
        },
        he = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            me(e)
          }
        }))(e, t),
        fe = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, m.useState)(t), r = e => {
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
          return (0, m.useEffect)(() => {
            const e = c().debounce(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, g.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var we = o(26675);
      const be = h.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ye = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, we.A)(),
              {
                data: o
              } = T(be, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, g.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var ve = o(56088),
        ke = o(95342);
      const xe = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Se = () => (0, m.useContext)(xe),
        Pe = ({
          children: e,
          ...t
        }) => {
          const o = Se() ?? {},
            n = (0, m.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, g.jsx)(xe.Provider, {
            value: n,
            children: e
          })
        };
      var Ce = o(17954),
        Ee = o(10181);
      const Ae = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ee.useLocation)();
          return (0, m.useEffect)(() => {
            me({
              event: "trackPageview"
            })
          }, [o]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        Le = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          de().initialize(t)
        };
      var Re = o(37980);
      const _e = "rockstar-games-web";
      let Oe;
      try {
        const e = Re.A.get(_e) ?? "";
        Oe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Oe = {}
      }
      const je = (0, h.makeVar)(Oe),
        Ie = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...je() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Re.A.set(_e, JSON.stringify(o), {
            expires: 30,
            domain: Y(),
            path: "/"
          }), je(o), o
        },
        Te = () => ({
          webSettings: (0, h.useReactiveVar)(je),
          webSettingsReactive: je,
          mutateWebSettings: Ie
        });
      var Me = o(50437)
    },
    69245: (e, t, o) => {
      var n = o(71127),
        a = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var n, r = {},
          c = null,
          d = null;
        for (n in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: i.current
        }
      }
      t.Fragment = r, t.jsx = c, t.jsxs = c
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => c,
        C: () => i
      });
      var n = o(56265),
        a = o.n(n),
        r = o(41972),
        s = o.n(r);
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
          }, !0)) >= 0), r = l[n >= 0 ? n : 0], i = l.find(e => e.id === r.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(a()({}, i, {
            currentSite: e
          }, r), "fallbackEnvironment")
        }
    }
  }
]);