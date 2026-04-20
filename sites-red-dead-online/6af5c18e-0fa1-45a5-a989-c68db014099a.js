try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6af5c18e-0fa1-45a5-a989-c68db014099a", e._sentryDebugIdIdentifier = "sentry-dbid-6af5c18e-0fa1-45a5-a989-c68db014099a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [9308], {
    79308: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => C.R,
        ApolloProvider: () => E.X,
        DataLayerProvider: () => Me,
        InMemoryCache: () => P.D,
        Platform: () => Y,
        Platforms: () => Z,
        ReactiveStateProvider: () => x,
        ResizeProvider: () => Ve.uU,
        RockstarGraphProvider: () => N,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => Te.N2,
        coreScApiFetch: () => o.A,
        cx: () => a,
        detectIfWeShouldAnchorSomewhere: () => J,
        downloadFile: () => ue,
        findPlatform: () => te,
        generateTpaLink: () => ie,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ce,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => ae,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => ge,
        getLanguageLabel: () => me,
        getUriForGraphEnv: () => d,
        gql: () => Pe.J1,
        gtmInit: () => Be,
        importAll: () => de,
        isGen9Platform: () => he,
        makeVar: () => S.UT,
        mutateWebSettings: () => Fe,
        newswirePost: () => Q,
        oneTrustInit: () => X,
        safeStyles: () => u,
        scrollToElement: () => H,
        setContextItem: () => p.A,
        setCookieValue: () => re,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => W,
        toScLocaleString: () => _e.t,
        track: () => xe,
        useApolloClient: () => B,
        useBase: () => Le.RK,
        useBodyScrollable: () => V,
        useDataLayer: () => Oe,
        useHasReduceMotionPreference: () => Le.vx,
        useHasSaveDataPreference: () => Le.sb,
        useLazyQuery: () => Re._,
        useLocale: () => Le.Ym,
        useMutateState: () => v,
        useMutation: () => je.n,
        useNewswirePost: () => Le.CA,
        usePreloadImg: () => Le.OG,
        usePrevious: () => Le.ZC,
        useQuery: () => G,
        useQueryParams: () => Le.sq,
        useReactiveVar: () => f.q,
        useRelativeTime: () => Le.Vq,
        useRockstarEventDispatcher: () => Le.OH,
        useRockstarEventSubscriber: () => Le.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => qe,
        useScApi: () => Le.Cb,
        useScAuthLinks: () => Le.N6,
        useScroll: () => Te.Ll,
        useScrollTracking: () => Le.GA,
        useScrollVisibility: () => Le.JE,
        useState: () => b,
        useWindowResize: () => Ve.G4,
        webSettingsReactive: () => $e,
        withAutoRouteTracking: () => De,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => Se,
        withReactiveState: () => k,
        withRockstarGraph: () => $,
        withTranslations: () => Ae
      });
      var o = n(60099);
      const a = (...e) => e.filter(Boolean).join(" "),
        r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(60309),
        i = n(45547);
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
      var l = n(15076),
        c = n.n(l);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = n(9482),
        g = n(52690),
        h = n(42295),
        m = n(71127),
        f = n(93452);
      const w = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, m.useContext)(w),
        y = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, m.useContext)(y),
        x = ({
          children: e,
          state: t
        }) => {
          (0, f.q)(t);
          const n = (0, m.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, h.jsx)(w.Provider, {
            value: t(),
            children: (0, h.jsx)(y.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, h.jsx)(x, {
            state: t,
            children: (0, h.jsx)(e, {
              ...n
            })
          })
        };
      var S = n(21823),
        P = n(19757),
        C = n(75102),
        E = n(88718),
        A = n(20772),
        L = n(6347);
      var T = n(83605),
        R = n(61162),
        j = n.n(R);
      var I = n(62944),
        O = n(42887);
      const M = (0, I.e)({
        sha256: O.sc
      });
      var _ = n(46277);
      const U = document.documentElement.lang,
        D = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: U,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: a,
              error: r,
              ...s
            } = (0, _.IT)(e, n);
          return (0, m.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
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
        B = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? d(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [a] = (0, m.useState)(new P.D({
              typePolicies: t
            })),
            r = M.concat((({
              token: e
            }) => (0, L.o)((t, {
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
            }).concat((e => (0, T.$)({
              ...e,
              fetch: j()
            }))(o)));
          return new C.R({
            cache: a,
            link: r
          })
        },
        z = (0, m.createContext)(D),
        N = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = B({
            graphOptions: t,
            typePolicies: n
          });
          return (0, h.jsx)(A.ec, {
            token: t?.token,
            children: (0, h.jsx)(E.X, {
              client: o,
              children: (0, h.jsx)(z.Provider, {
                value: D,
                children: e
              })
            })
          })
        },
        G = (e, t) => (0, m.useContext)(z)(e, t),
        $ = (e, {
          env: t = "prod"
        }) => {
          const n = (0, S.UT)("");
          return function(o) {
            return (0, h.jsx)(N, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, h.jsx)(e, {
                ...o
              })
            })
          }
        },
        F = (0, S.UT)({}),
        q = "data-disallow-body-scroll",
        V = e => {
          const t = (0, f.q)(F),
            n = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            n ? document.documentElement.setAttribute(q, "true") : document.documentElement.removeAttribute(q)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => F(e))({
              ...t,
              [e]: n
            })
          }
        },
        X = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var Q = n(89656);
      const W = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        H = ({
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
        J = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (H({
            element: n
          }), K(n))
        },
        K = e => {
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
      class Y {
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
      const Z = Object.freeze({
          pc: new Y("pc", "PC Legacy", 8, "sc"),
          ps: new Y("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Y("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Y("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Y("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Y("xbox", "Xbox", 4, "xbl"),
          xbox360: new Y("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Y("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Y("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Y("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Y("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Y("applestore", "App Store", 102, "applestore"),
          googleplay: new Y("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Y("app_store", "App Store", 102, "applestore"),
          googlePlay: new Y("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Y("pcalt", "PC Enhanced", 22, "sc")
        }),
        ee = Object.freeze(Object.values(Z));

      function te(e) {
        if (!e) return;
        if (e instanceof Y) return e;
        const t = e.toString().toLowerCase();
        return ee.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ne = n(6306);
      const oe = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ae = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            a = o?.substring(n.length, o.length);
          return a
        },
        re = (e, t) => {
          e && void 0 !== t && (0, ne.canStoreCookie)(e) && ae(e) !== t && (document.cookie = `${e}=${t}; domain=${oe()}; path=/;`)
        };
      var se = n(56990);
      const ie = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, se.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, i.A)(), s = await n(), d = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return d.searchParams.append("cid", r), d.searchParams.append("lang", o), d.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && d.searchParams.append("accessToken", s.bearerToken), d
      }, de = e => e.keys().forEach(e), le = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ce = (e = !0) => le.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, ue = e => {
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
      }, pe = () => [Z.xbox360.name, Z.xboxone.name, Z.ps3.name, Z.ps4.name, Z.pc.name], ge = () => [Z.xboxsx.name, Z.ps5.name, Z.pcalt.name], he = e => ge().includes(e), me = e => {
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
      var fe = n(89864),
        we = n.n(fe);
      const be = (0, n(79867).A)(),
        ye = be?.id,
        ve = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        xe = e => {
          const t = {
            ...e,
            environment: ye,
            display_type: ve
          };
          we().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            xe(e)
          }
        }))(e, t),
        Se = (e, t = 250) => n => ((e, t, n) => {
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
            const e = c().debounce(() => {
              a(r(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Pe = n(40445),
        Ce = n(26675);
      const Ee = Pe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ae = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, Ce.A)(),
              {
                data: n
              } = G(Ee, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, h.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var Le = n(65085),
        Te = n(95342),
        Re = n(66591),
        je = n(80701);
      const Ie = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Oe = () => (0, m.useContext)(Ie),
        Me = ({
          children: e,
          ...t
        }) => {
          const n = Oe() ?? {},
            o = (0, m.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, h.jsx)(Ie.Provider, {
            value: o,
            children: e
          })
        };
      var _e = n(17954),
        Ue = n(10181);
      const De = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ue.useLocation)();
          return (0, m.useEffect)(() => {
            xe({
              event: "trackPageview"
            })
          }, [n]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        Be = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          we().initialize(t)
        };
      var ze = n(37980);
      const Ne = "rockstar-games-web";
      let Ge;
      try {
        const e = ze.A.get(Ne) ?? "";
        Ge = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ge = {}
      }
      const $e = (0, S.UT)(Ge),
        Fe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...$e() ?? {}
          };
          return n[e] = t, null === t && delete n[e], ze.A.set(Ne, JSON.stringify(n), {
            expires: 30,
            domain: oe(),
            path: "/"
          }), $e(n), n
        },
        qe = () => ({
          webSettings: (0, f.q)($e),
          webSettingsReactive: $e,
          mutateWebSettings: Fe
        });
      var Ve = n(50437)
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = d.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), r = d[o >= 0 ? o : 0], i = d.find(e => e.id === r.fallbackEnvironment);
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