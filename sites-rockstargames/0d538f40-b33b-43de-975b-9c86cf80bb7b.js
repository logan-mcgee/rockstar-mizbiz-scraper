try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0d538f40-b33b-43de-975b-9c86cf80bb7b", e._sentryDebugIdIdentifier = "sentry-dbid-0d538f40-b33b-43de-975b-9c86cf80bb7b")
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
  [8045], {
    70426: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => m.ApolloClient,
        ApolloProvider: () => m.ApolloProvider,
        DataLayerProvider: () => ke,
        GraphOperationsProvider: () => x._y,
        InMemoryCache: () => m.InMemoryCache,
        Platform: () => z,
        Platforms: () => F,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => je.uU,
        RockstarGraphProvider: () => T,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => be.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => G,
        downloadFile: () => te,
        findPlatform: () => q,
        generateTpaLink: () => J,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => ee,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => W,
        getGen8Consoles: () => oe,
        getGen9Consoles: () => ne,
        getLanguageLabel: () => re,
        getUriForGraphEnv: () => i,
        gql: () => m.gql,
        gtmInit: () => Ce,
        importAll: () => K,
        isGen9Platform: () => ae,
        makeVar: () => m.makeVar,
        mutateWebSettings: () => Ie,
        newswirePost: () => U,
        oneTrustInit: () => D,
        safeStyles: () => d,
        scrollToElement: () => N,
        setContextItem: () => u.A,
        setCookieValue: () => X,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => B,
        toScLocaleString: () => xe.t,
        track: () => ue,
        useApolloClient: () => I,
        useBase: () => fe.RK,
        useBodyScrollable: () => _,
        useDataLayer: () => ve,
        useHasReduceMotionPreference: () => fe.vx,
        useHasSaveDataPreference: () => fe.sb,
        useLocale: () => fe.Ym,
        useMutateState: () => y,
        useMutation: () => x.n_,
        useNewswirePost: () => fe.CA,
        usePreloadImg: () => fe.OG,
        usePrevious: () => fe.ZC,
        useQuery: () => x.IT,
        useQueryParams: () => fe.sq,
        useReactiveVar: () => m.useReactiveVar,
        useRockstarEventDispatcher: () => fe.OH,
        useRockstarEventSubscriber: () => fe.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => Te,
        useScApi: () => fe.Cb,
        useScAuthLinks: () => fe.N6,
        useScroll: () => be.Ll,
        useScrollTracking: () => fe.GA,
        useScrollVisibility: () => fe.JE,
        useState: () => f,
        useWindowResize: () => je.G4,
        webSettingsReactive: () => Re,
        withAutoRouteTracking: () => Pe,
        withGtmTracking: () => pe,
        withMediaBasedProps: () => ge,
        withReactiveState: () => k,
        withRockstarGraph: () => j,
        withTranslations: () => we
      });
      var n = o(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = o(60309),
        s = o(45547);
      const i = e => {
        if (/^https{0,1}:\/\//.test(e)) return e;
        let t = "";
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
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        g = o(42295),
        h = o(62229),
        m = o(89311);
      const w = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        f = () => (0, h.useContext)(w),
        b = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, h.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, m.useReactiveVar)(t);
          const o = (0, h.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, g.jsx)(w.Provider, {
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
      var x = o(96566),
        S = o(20772),
        P = o(6347);
      var C = o(61162),
        A = o.n(C);
      var E = o(62944),
        L = o(42887);
      const R = (0, E.e)({
          sha256: L.sc
        }),
        I = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? i(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, h.useState)(new m.InMemoryCache({
              typePolicies: t
            })),
            r = R.concat((({
              token: e
            }) => (0, P.o)((t, {
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
            }).concat((e => (0, m.createHttpLink)({
              ...e,
              fetch: A()
            }))(n)));
          return new m.ApolloClient({
            cache: a,
            link: r
          })
        },
        T = ({
          children: e,
          graphOptions: t,
          typePolicies: o
        }) => {
          const n = I({
            graphOptions: t,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)(S.ec, {
            token: t?.token,
            children: (0, g.jsx)(m.ApolloProvider, {
              client: n,
              children: (0, g.jsx)(x._y, {
                children: e
              })
            })
          })
        },
        j = (e, {
          env: t = "prod"
        }) => {
          const o = (0, m.makeVar)("");
          return function(n) {
            return (0, g.jsx)(T, {
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
        M = (0, m.makeVar)({}),
        O = "data-disallow-body-scroll",
        _ = e => {
          const t = (0, m.useReactiveVar)(M),
            o = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            o ? document.documentElement.setAttribute(O, "true") : document.documentElement.removeAttribute(O)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => M(e))({
              ...t,
              [e]: o
            })
          }
        },
        D = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var U = o(89656);
      const B = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        N = ({
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
        G = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (N({
            element: o
          }), V(o))
        },
        V = e => {
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
      class z {
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
      const F = Object.freeze({
          pc: new z("pc", "PC Legacy", 8, "sc"),
          ps: new z("ps", "PlayStation", 3, "np", "ps"),
          ps3: new z("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new z("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new z("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new z("xbox", "Xbox", 4, "xbl"),
          xbox360: new z("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new z("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new z("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new z("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new z("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new z("applestore", "App Store", 102, "applestore"),
          googleplay: new z("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new z("app_store", "App Store", 102, "applestore"),
          googlePlay: new z("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new z("pcalt", "PC Enhanced", 22, "sc")
        }),
        $ = Object.freeze(Object.values(F));

      function q(e) {
        if (!e) return;
        if (e instanceof z) return e;
        const t = e.toString().toLowerCase();
        return $.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var Q = o(6306);
      const H = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        W = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        X = (e, t) => {
          e && void 0 !== t && (0, Q.canStoreCookie)(e) && W(e) !== t && (document.cookie = `${e}=${t}; domain=${H()}; path=/;`)
        };
      var Y = o(81788);
      const J = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, Y.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await o(), l = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return l.searchParams.append("cid", r), l.searchParams.append("lang", n), l.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && l.searchParams.append("accessToken", i.bearerToken), l
      }, K = e => e.keys().forEach(e), Z = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ee = (e = !0) => Z.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, te = e => {
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
      }, oe = () => [F.xbox360.name, F.xboxone.name, F.ps3.name, F.ps4.name, F.pc.name], ne = () => [F.xboxsx.name, F.ps5.name, F.pcalt.name], ae = e => ne().includes(e), re = e => {
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
      var se = o(89864),
        ie = o.n(se);
      const le = (0, o(79867).A)(),
        ce = le?.id,
        de = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ue = e => {
          const t = {
            ...e,
            environment: ce,
            display_type: de
          };
          ie().dataLayer({
            dataLayer: t
          })
        },
        pe = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ue(e)
          }
        }))(e, t),
        ge = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, h.useState)(t), r = e => {
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
          return (0, h.useEffect)(() => {
            const e = c().debounce(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, g.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var he = o(26675);
      const me = m.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        we = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, he.A)(),
              {
                data: o
              } = (0, x.IT)(me, {
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
      var fe = o(56088),
        be = o(95342);
      const ye = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        ve = () => (0, h.useContext)(ye),
        ke = ({
          children: e,
          ...t
        }) => {
          const o = ve() ?? {},
            n = (0, h.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, g.jsx)(ye.Provider, {
            value: n,
            children: e
          })
        };
      var xe = o(17954),
        Se = o(9623);
      const Pe = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Se.useLocation)();
          return (0, h.useEffect)(() => {
            ue({
              event: "trackPageview"
            })
          }, [o]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        Ce = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ie().initialize(t)
        };
      var Ae = o(37980);
      const Ee = "rockstar-games-web";
      let Le;
      try {
        const e = Ae.A.get(Ee) ?? "";
        Le = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Le = {}
      }
      const Re = (0, m.makeVar)(Le),
        Ie = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Re() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ae.A.set(Ee, JSON.stringify(o), {
            expires: 30,
            domain: H(),
            path: "/"
          }), Re(o), o
        },
        Te = () => ({
          webSettings: (0, m.useReactiveVar)(Re),
          webSettingsReactive: Re,
          mutateWebSettings: Ie
        });
      var je = o(50437)
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => r,
        C: () => n
      });
      const n = {
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
        r = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = a.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), r = a[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    96566: (e, t, o) => {
      o.d(t, {
        _y: () => m,
        _l: () => r.useLazyQuery,
        n_: () => f,
        IT: () => w
      });
      var n = o(42295),
        a = o(62229),
        r = o(89311),
        s = o(15076),
        i = o.n(s),
        l = o(56088);
      const c = (e, t) => {
          const o = (0, l.Ym)(),
            n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: o,
                ...t?.variables
              }
            },
            {
              data: s,
              loading: c,
              error: d,
              ...u
            } = (0, r.useQuery)(e, n);
          return (0, a.useEffect)(() => {
            if (s && n.setTitleDataPath) {
              const e = i().get(s, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [s]), (0, a.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: c
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [c]), (0, a.useEffect)(() => {
            if (n.autoSetError && d) throw new Error(String(d))
          }, [d]), {
            loading: c,
            error: d,
            data: s,
            ...u
          }
        },
        d = (0, a.createContext)(() => ({
          data: null
        })),
        u = new Promise(e => {
          e()
        }),
        p = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.InMemoryCache)
        },
        g = [() => u, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new r.ApolloClient(p))
        }],
        h = (0, a.createContext)(() => g),
        m = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, n.jsx)(h.Provider, {
          value: r.useMutation,
          children: (0, n.jsx)(d.Provider, {
            value: c,
            children: e
          })
        })),
        w = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(d)(e, t)),
        f = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(h)(e))
    }
  }
]);