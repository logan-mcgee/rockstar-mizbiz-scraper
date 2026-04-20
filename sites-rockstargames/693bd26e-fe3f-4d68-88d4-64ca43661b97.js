try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "693bd26e-fe3f-4d68-88d4-64ca43661b97", e._sentryDebugIdIdentifier = "sentry-dbid-693bd26e-fe3f-4d68-88d4-64ca43661b97")
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
  [6927], {
    79308: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => f.ApolloClient,
        ApolloProvider: () => f.ApolloProvider,
        DataLayerProvider: () => Ce,
        InMemoryCache: () => f.InMemoryCache,
        Platform: () => q,
        Platforms: () => H,
        ReactiveStateProvider: () => k,
        ResizeProvider: () => Ue.uU,
        RockstarGraphProvider: () => O,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => xe.N2,
        coreScApiFetch: () => o.A,
        cx: () => a,
        detectIfWeShouldAnchorSomewhere: () => $,
        downloadFile: () => re,
        findPlatform: () => X,
        generateTpaLink: () => te,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ae,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => Y,
        getGen8Consoles: () => se,
        getGen9Consoles: () => ie,
        getLanguageLabel: () => de,
        getUriForGraphEnv: () => l,
        gql: () => f.gql,
        gtmInit: () => Re,
        importAll: () => ne,
        isGen9Platform: () => le,
        makeVar: () => f.makeVar,
        mutateWebSettings: () => Oe,
        newswirePost: () => V,
        oneTrustInit: () => N,
        safeStyles: () => u,
        scrollToElement: () => F,
        setContextItem: () => p.A,
        setCookieValue: () => Z,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => G,
        toScLocaleString: () => Ae.t,
        track: () => he,
        useApolloClient: () => I,
        useBase: () => ke.RK,
        useBodyScrollable: () => z,
        useDataLayer: () => Pe,
        useHasReduceMotionPreference: () => ke.vx,
        useHasSaveDataPreference: () => ke.sb,
        useLazyQuery: () => f.useLazyQuery,
        useLocale: () => ke.Ym,
        useMutateState: () => v,
        useMutation: () => f.useMutation,
        useNewswirePost: () => ke.CA,
        usePreloadImg: () => ke.OG,
        usePrevious: () => ke.ZC,
        useQuery: () => D,
        useQueryParams: () => ke.sq,
        useReactiveVar: () => f.useReactiveVar,
        useRelativeTime: () => ke.Vq,
        useRockstarEventDispatcher: () => ke.OH,
        useRockstarEventSubscriber: () => ke.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => De,
        useScApi: () => ke.Cb,
        useScAuthLinks: () => ke.N6,
        useScroll: () => xe.Ll,
        useScrollTracking: () => ke.GA,
        useScrollVisibility: () => ke.JE,
        useState: () => b,
        useWindowResize: () => Ue.G4,
        webSettingsReactive: () => Me,
        withAutoRouteTracking: () => Le,
        withGtmTracking: () => fe,
        withMediaBasedProps: () => we,
        withReactiveState: () => x,
        withRockstarGraph: () => U,
        withTranslations: () => ve
      });
      var o = n(60099);
      const a = (...e) => e.filter(Boolean).join(" "),
        r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(60309),
        i = n(45547);
      const l = e => {
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
      var d = n(15076),
        c = n.n(d);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = n(9482),
        g = n(52690),
        m = n(42295),
        h = n(71127),
        f = n(32467);
      const w = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, h.useContext)(w),
        y = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, h.useContext)(y),
        k = ({
          children: e,
          state: t
        }) => {
          (0, f.useReactiveVar)(t);
          const n = (0, h.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, m.jsx)(w.Provider, {
            value: t(),
            children: (0, m.jsx)(y.Provider, {
              value: n,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(n) {
          return (0, m.jsx)(k, {
            state: t,
            children: (0, m.jsx)(e, {
              ...n
            })
          })
        };
      var S = n(20772),
        P = n(6347);
      var C = n(61162),
        A = n.n(C);
      var E = n(62944),
        L = n(42887);
      const R = (0, E.e)({
          sha256: L.sc
        }),
        j = document.documentElement.lang,
        T = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: j,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: a,
              error: r,
              ...s
            } = (0, f.useQuery)(e, n);
          return (0, h.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, h.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, h.useEffect)(() => {
            if (n.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: o,
            ...s
          }
        },
        I = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? l(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [a] = (0, h.useState)(new f.InMemoryCache({
              typePolicies: t
            })),
            r = R.concat((({
              token: e
            }) => (0, P.o)((t, {
              headers: n
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${o}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, f.createHttpLink)({
              ...e,
              fetch: A()
            }))(o)));
          return new f.ApolloClient({
            cache: a,
            link: r
          })
        },
        M = (0, h.createContext)(T),
        O = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = I({
            graphOptions: t,
            typePolicies: n
          });
          return (0, m.jsx)(S.ec, {
            token: t?.token,
            children: (0, m.jsx)(f.ApolloProvider, {
              client: o,
              children: (0, m.jsx)(M.Provider, {
                value: T,
                children: e
              })
            })
          })
        },
        D = (e, t) => (0, h.useContext)(M)(e, t),
        U = (e, {
          env: t = "prod"
        }) => {
          const n = (0, f.makeVar)("");
          return function(o) {
            return (0, m.jsx)(O, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, m.jsx)(e, {
                ...o
              })
            })
          }
        },
        _ = (0, f.makeVar)({}),
        B = "data-disallow-body-scroll",
        z = e => {
          const t = (0, f.useReactiveVar)(_),
            n = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            n ? document.documentElement.setAttribute(B, "true") : document.documentElement.removeAttribute(B)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => _(e))({
              ...t,
              [e]: n
            })
          }
        },
        N = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var V = n(89656);
      const G = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        F = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            n = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        $ = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (F({
            element: n
          }), Q(n))
        },
        Q = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class q {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, a = null, r = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = a, this.alias = r
        }
      }
      const H = Object.freeze({
          pc: new q("pc", "PC Legacy", 8, "sc"),
          ps: new q("ps", "PlayStation", 3, "np", "ps"),
          ps3: new q("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new q("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new q("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new q("xbox", "Xbox", 4, "xbl"),
          xbox360: new q("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new q("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new q("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new q("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new q("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new q("applestore", "App Store", 102, "applestore"),
          googleplay: new q("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new q("app_store", "App Store", 102, "applestore"),
          googlePlay: new q("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new q("pcalt", "PC Enhanced", 22, "sc")
        }),
        W = Object.freeze(Object.values(H));

      function X(e) {
        if (!e) return;
        if (e instanceof q) return e;
        const t = e.toString().toLowerCase();
        return W.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var J = n(6306);
      const K = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Y = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            a = o?.substring(n.length, o.length);
          return a
        },
        Z = (e, t) => {
          e && void 0 !== t && (0, J.canStoreCookie)(e) && Y(e) !== t && (document.cookie = `${e}=${t}; domain=${K()}; path=/;`)
        };
      var ee = n(56990);
      const te = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, ee.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, i.A)(), s = await n(), l = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return l.searchParams.append("cid", r), l.searchParams.append("lang", o), l.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && l.searchParams.append("accessToken", s.bearerToken), l
      }, ne = e => e.keys().forEach(e), oe = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ae = (e = !0) => oe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, re = e => {
        e.preventDefault();
        const t = e.currentTarget.href,
          n = (e => {
            const t = new URL(e).pathname.split("/"),
              n = t[t.length - 1];
            return decodeURIComponent(n)
          })(t);
        fetch(t, {
          method: "GET",
          headers: {}
        }).then(e => e.arrayBuffer()).then(e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            o = document.createElement("a");
          o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }).catch(e => {
          console.log(e)
        })
      }, se = () => [H.xbox360.name, H.xboxone.name, H.ps3.name, H.ps4.name, H.pc.name], ie = () => [H.xboxsx.name, H.ps5.name, H.pcalt.name], le = e => ie().includes(e), de = e => {
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
      var ce = n(89864),
        ue = n.n(ce);
      const pe = (0, n(79867).A)(),
        ge = pe?.id,
        me = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        he = e => {
          const t = {
            ...e,
            environment: ge,
            display_type: me
          };
          ue().dataLayer({
            dataLayer: t
          })
        },
        fe = e => t => ((e, t) => (0, m.jsx)(e, {
          ...t,
          gtmTrack: e => {
            he(e)
          }
        }))(e, t),
        we = (e, t = 250) => n => ((e, t, n) => {
          const [o, a] = (0, h.useState)(t), r = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => r(e));
              t = {
                ...t,
                items: e
              }
            }
            const o = t?.mediaQueryList;
            return o?.length ? (o.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
              t = {
                ...t,
                ...e
              }
            }), t) : t
          };
          return (0, h.useEffect)(() => {
            const e = c().debounce(() => {
              a(r(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, m.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var be = n(26675);
      const ye = f.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ve = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, be.A)(),
              {
                data: n
              } = D(ye, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, m.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var ke = n(65085),
        xe = n(95342);
      const Se = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        Pe = () => (0, h.useContext)(Se),
        Ce = ({
          children: e,
          ...t
        }) => {
          const n = Pe() ?? {},
            o = (0, h.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, m.jsx)(Se.Provider, {
            value: o,
            children: e
          })
        };
      var Ae = n(17954),
        Ee = n(10181);
      const Le = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ee.useLocation)();
          return (0, h.useEffect)(() => {
            he({
              event: "trackPageview"
            })
          }, [n]), (0, m.jsx)(e, {
            ...t
          })
        })(e, t),
        Re = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ue().initialize(t)
        };
      var je = n(37980);
      const Te = "rockstar-games-web";
      let Ie;
      try {
        const e = je.A.get(Te) ?? "";
        Ie = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ie = {}
      }
      const Me = (0, f.makeVar)(Ie),
        Oe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Me() ?? {}
          };
          return n[e] = t, null === t && delete n[e], je.A.set(Te, JSON.stringify(n), {
            expires: 30,
            domain: K(),
            path: "/"
          }), Me(n), n
        },
        De = () => ({
          webSettings: (0, f.useReactiveVar)(Me),
          webSettingsReactive: Me,
          mutateWebSettings: Oe
        });
      var Ue = n(50437)
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => d,
        C: () => i
      });
      var o = n(56265),
        a = n.n(o),
        r = n(41972),
        s = n.n(r);
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
        d = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = l.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), r = l[o >= 0 ? o : 0], i = l.find(e => e.id === r.fallbackEnvironment);
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