try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "af51cd1c-fcf7-4331-bf2e-1a9cfec354cc", e._sentryDebugIdIdentifier = "sentry-dbid-af51cd1c-fcf7-4331-bf2e-1a9cfec354cc")
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
  [5234], {
    42853: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => h.ApolloClient,
        ApolloProvider: () => h.ApolloProvider,
        DataLayerProvider: () => Pe,
        InMemoryCache: () => h.InMemoryCache,
        Platform: () => Q,
        Platforms: () => H,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => De.uU,
        RockstarGraphProvider: () => M,
        RockstarTokenProvider: () => x.ec,
        ScrollProvider: () => ke.N2,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => F,
        downloadFile: () => ae,
        findPlatform: () => q,
        generateTpaLink: () => ee,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => oe,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => K,
        getGen8Consoles: () => re,
        getGen9Consoles: () => se,
        getLanguageLabel: () => ce,
        getUriForGraphEnv: () => i,
        gql: () => h.gql,
        gtmInit: () => Le,
        importAll: () => te,
        isGen9Platform: () => ie,
        makeVar: () => h.makeVar,
        mutateWebSettings: () => Me,
        newswirePost: () => N,
        oneTrustInit: () => B,
        safeStyles: () => d,
        scrollToElement: () => G,
        setContextItem: () => u.A,
        setCookieValue: () => Y,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => V,
        toScLocaleString: () => Ce.t,
        track: () => me,
        useApolloClient: () => I,
        useBase: () => ve.RK,
        useBodyScrollable: () => z,
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
        useQuery: () => O,
        useQueryParams: () => ve.sq,
        useReactiveVar: () => h.useReactiveVar,
        useRockstarEventDispatcher: () => ve.OH,
        useRockstarEventSubscriber: () => ve.zP,
        useRockstarToken: () => x.e9,
        useRockstarTokenPing: () => x.Es,
        useRockstarTokenReactive: () => x.bD,
        useRockstarWebSettings: () => Oe,
        useScApi: () => ve.Cb,
        useScAuthLinks: () => ve.N6,
        useScroll: () => ke.Ll,
        useScrollTracking: () => ve.GA,
        useScrollVisibility: () => ve.JE,
        useState: () => w,
        useWindowResize: () => De.G4,
        webSettingsReactive: () => Te,
        withAutoRouteTracking: () => Ee,
        withGtmTracking: () => he,
        withMediaBasedProps: () => fe,
        withReactiveState: () => k,
        withRockstarGraph: () => D,
        withTranslations: () => ye
      });
      var o = n(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = n(60309),
        s = n(45547);
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
      var c = n(15076),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(9482),
        p = n(52690),
        g = n(42295),
        m = n(71127),
        h = n(32467);
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
          const n = (0, m.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, g.jsx)(f.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...n
            })
          })
        };
      var x = n(20772),
        S = n(6347);
      var P = n(61162),
        C = n.n(P);
      var A = n(62944),
        E = n(42887);
      const L = (0, A.e)({
          sha256: E.sc
        }),
        R = document.documentElement.lang,
        j = (e, t) => {
          const n = {
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
              data: o,
              loading: a,
              error: r,
              ...s
            } = (0, h.useQuery)(e, n);
          return (0, m.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = l().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, m.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, m.useEffect)(() => {
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
          const n = e?.env ? i(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [a] = (0, m.useState)(new h.InMemoryCache({
              typePolicies: t
            })),
            r = L.concat((({
              token: e
            }) => (0, S.o)((t, {
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
            }).concat((e => (0, h.createHttpLink)({
              ...e,
              fetch: C()
            }))(o)));
          return new h.ApolloClient({
            cache: a,
            link: r
          })
        },
        T = (0, m.createContext)(j),
        M = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = I({
            graphOptions: t,
            typePolicies: n
          });
          return (0, g.jsx)(x.ec, {
            token: t?.token,
            children: (0, g.jsx)(h.ApolloProvider, {
              client: o,
              children: (0, g.jsx)(T.Provider, {
                value: j,
                children: e
              })
            })
          })
        },
        O = (e, t) => (0, m.useContext)(T)(e, t),
        D = (e, {
          env: t = "prod"
        }) => {
          const n = (0, h.makeVar)("");
          return function(o) {
            return (0, g.jsx)(M, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, g.jsx)(e, {
                ...o
              })
            })
          }
        },
        U = (0, h.makeVar)({}),
        _ = "data-disallow-body-scroll",
        z = e => {
          const t = (0, h.useReactiveVar)(U),
            n = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            n ? document.documentElement.setAttribute(_, "true") : document.documentElement.removeAttribute(_)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => U(e))({
              ...t,
              [e]: n
            })
          }
        },
        B = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var N = n(89656);
      const V = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        G = ({
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
        F = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (G({
            element: n
          }), $(n))
        },
        $ = e => {
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
      class Q {
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
        W = Object.freeze(Object.values(H));

      function q(e) {
        if (!e) return;
        if (e instanceof Q) return e;
        const t = e.toString().toLowerCase();
        return W.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var X = n(6306);
      const J = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        K = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            a = o?.substring(n.length, o.length);
          return a
        },
        Y = (e, t) => {
          e && void 0 !== t && (0, X.canStoreCookie)(e) && K(e) !== t && (document.cookie = `${e}=${t}; domain=${J()}; path=/;`)
        };
      var Z = n(56990);
      const ee = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, Z.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await n(), c = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return c.searchParams.append("cid", r), c.searchParams.append("lang", o), c.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && c.searchParams.append("accessToken", i.bearerToken), c
      }, te = e => e.keys().forEach(e), ne = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], oe = (e = !0) => ne.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, ae = e => {
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
      }, re = () => [H.xbox360.name, H.xboxone.name, H.ps3.name, H.ps4.name, H.pc.name], se = () => [H.xboxsx.name, H.ps5.name, H.pcalt.name], ie = e => se().includes(e), ce = e => {
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
      var le = n(89864),
        de = n.n(le);
      const ue = (0, n(79867).A)(),
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
        fe = (e, t = 250) => n => ((e, t, n) => {
          const [o, a] = (0, m.useState)(t), r = e => {
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
          return (0, m.useEffect)(() => {
            const e = l().debounce(() => {
              a(r(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, g.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var we = n(26675);
      const be = h.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ye = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, we.A)(),
              {
                data: n
              } = O(be, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, g.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var ve = n(56088),
        ke = n(95342);
      const xe = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Se = () => (0, m.useContext)(xe),
        Pe = ({
          children: e,
          ...t
        }) => {
          const n = Se() ?? {},
            o = (0, m.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, g.jsx)(xe.Provider, {
            value: o,
            children: e
          })
        };
      var Ce = n(17954),
        Ae = n(10181);
      const Ee = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ae.useLocation)();
          return (0, m.useEffect)(() => {
            me({
              event: "trackPageview"
            })
          }, [n]), (0, g.jsx)(e, {
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
      var Re = n(37980);
      const je = "rockstar-games-web";
      let Ie;
      try {
        const e = Re.A.get(je) ?? "";
        Ie = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ie = {}
      }
      const Te = (0, h.makeVar)(Ie),
        Me = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Te() ?? {}
          };
          return n[e] = t, null === t && delete n[e], Re.A.set(je, JSON.stringify(n), {
            expires: 30,
            domain: J(),
            path: "/"
          }), Te(n), n
        },
        Oe = () => ({
          webSettings: (0, h.useReactiveVar)(Te),
          webSettingsReactive: Te,
          mutateWebSettings: Me
        });
      var De = n(50437)
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => l,
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
        c = [{
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = c.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), r = c[o >= 0 ? o : 0], i = c.find(e => e.id === r.fallbackEnvironment);
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