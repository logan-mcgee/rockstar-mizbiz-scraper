try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e0eaa5ad-3890-4f49-abc2-00d03ca9c886", e._sentryDebugIdIdentifier = "sentry-dbid-e0eaa5ad-3890-4f49-abc2-00d03ca9c886")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [6043, 7122], {
    47279(e, t, o) {
      o.d(t, {
        A: () => i,
        C: () => n
      });
      var r = o(40415),
        s = o(50573);
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
        i = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = a.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === o && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), i = a[n >= 0 ? n : 0], d = a.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, s.A)((0, r.A)({}, d, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    83320(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => R.X,
        DataLayerProvider: () => xe,
        InMemoryCache: () => C.D,
        PAGE_THEMES: () => De.d,
        Platform: () => oe.OD,
        Platforms: () => oe.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ie.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => M.ec,
        ScrollProvider: () => be.N2,
        coreScApiFetch: () => s.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => oe.wC,
        downloadFile: () => oe.PE,
        findPlatform: () => oe.rB,
        generateTpaLink: () => oe.tC,
        getAccentColor: () => d,
        getBase: () => c.A,
        getCdnPrefix: () => oe.yh,
        getConfigForDomain: () => l.A,
        getCookieValueByName: () => oe.Ap,
        getGen8Consoles: () => oe.Xs,
        getGen9Consoles: () => oe.kx,
        getLanguageLabel: () => oe.rJ,
        getUriForGraphEnv: () => u,
        gql: () => ge.J1,
        gtmInit: () => Pe,
        importAll: () => oe.pT,
        isGen9Platform: () => oe.lV,
        makeVar: () => A.UT,
        mutateWebSettings: () => Le,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => h,
        scrollToElement: () => oe.PA,
        setContextItem: () => m.A,
        setCookieValue: () => oe.My,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => Se.t,
        track: () => de,
        useApolloClient: () => $,
        useBase: () => pe.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => ke,
        useGetTpaLinkGenerator: () => pe.gd,
        useHasReduceMotionPreference: () => pe.vx,
        useHasSaveDataPreference: () => pe.sb,
        useLazyQuery: () => ve._,
        useLocale: () => pe.Ym,
        useMutateState: () => x,
        useMutation: () => we.n,
        useNewswirePost: () => pe.CA,
        usePreloadImg: () => pe.OG,
        usePrevious: () => pe.ZC,
        useQuery: () => Q,
        useQueryParams: () => pe.sq,
        useReactiveVar: () => v.q,
        useRelativeTime: () => pe.Vq,
        useRockstarEventDispatcher: () => pe.OH,
        useRockstarEventSubscriber: () => pe.zP,
        useRockstarToken: () => M.e9,
        useRockstarTokenPing: () => M.Es,
        useRockstarTokenReactive: () => M.bD,
        useRockstarWebSettings: () => je,
        useScApi: () => pe.Cb,
        useScAuthLinks: () => pe.N6,
        useScroll: () => be.Ll,
        useScrollTracking: () => pe.GA,
        useScrollVisibility: () => pe.JE,
        useState: () => y,
        useWindowResize: () => Ie.G4,
        webSettingsReactive: () => qe,
        withAutoRouteTracking: () => Ae,
        withGtmTracking: () => ce,
        withMediaBasedProps: () => ue,
        withReactiveState: () => T,
        withRockstarGraph: () => H,
        withTranslations: () => fe
      });
      var r = {};
      o.r(r), o.d(r, {
        default: () => i
      });
      var s = o(10959),
        n = o(57978);
      const a = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  n.u.refresh()
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
      var c = o(17473),
        l = o(39991);
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
      const h = e => {
        const t = (0, g.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var m = o(81038),
        f = o(94662),
        p = o(39793),
        b = o(93082),
        v = o(37927);
      const w = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        y = () => (0, b.useContext)(w),
        k = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, b.useContext)(k),
        S = ({
          children: e,
          state: t
        }) => {
          (0, v.q)(t);
          const o = (0, b.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, p.jsx)(w.Provider, {
            value: t(),
            children: (0, p.jsx)(k.Provider, {
              value: o,
              children: e
            })
          })
        },
        T = (e, {
          state: t
        }) => function(o) {
          return (0, p.jsx)(S, {
            state: t,
            children: (0, p.jsx)(e, {
              ...o
            })
          })
        };
      var A = o(79922),
        P = o(42909),
        C = o(13996),
        E = o(94920),
        R = o(48989),
        M = o(95753),
        q = o(99164);
      var L = o(70945);
      const j = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var I = o(98548),
        D = o(39647),
        O = o.n(D);
      var _ = o(70735),
        F = o(5942);
      const U = (0, _.e)({
        sha256: F.sc
      });
      var B = o(87324),
        G = o(26065);
      const z = document.documentElement.lang,
        N = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: z,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: s,
              error: n,
              ...a
            } = (0, B.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (r && o.setTitleDataPath) {
              const e = (0, G.A)(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [s]), (0, b.useEffect)(() => {
            if (o.autoSetError && n) throw new Error(n.message)
          }, [n]), {
            loading: s,
            error: n,
            data: r,
            ...a
          }
        },
        V = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        $ = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            r = {
              ...e,
              uri: o
            },
            [s] = (0, b.useState)(new C.D({
              typePolicies: t
            })),
            {
              formatMessage: n
            } = (0, P.useIntl)(),
            a = U.concat((({
              formatMessage: e
            }) => (0, L.S)(t => {
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
              formatMessage: n
            }).concat((({
              token: e
            }) => (0, q.o)((t, {
              headers: o
            }) => {
              const r = e?.() ?? null;
              return r ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${r}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, I.$)({
              ...e,
              fetch: O()
            }))(r))));
          return new E.R({
            cache: s,
            link: a
          })
        },
        J = (0, b.createContext)(N),
        Q = (e, t) => (0, b.useContext)(J)(e, t),
        W = (0, P.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const r = $({
            graphOptions: t,
            typePolicies: o
          });
          return (0, p.jsx)(M.ec, {
            token: t?.token,
            children: (0, p.jsx)(R.X, {
              client: r,
              children: (0, p.jsx)(J.Provider, {
                value: N,
                children: e
              })
            })
          })
        }, V),
        H = (e, {
          env: t = "prod"
        }) => {
          const o = (0, A.UT)("");
          return function(r) {
            return (0, p.jsx)(W, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, p.jsx)(e, {
                ...r
              })
            })
          }
        },
        X = (0, A.UT)({}),
        K = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, v.q)(X),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(K, "true") : document.documentElement.removeAttribute(K)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => X(e))({
              ...t,
              [e]: o
            })
          }
        },
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
      var te = o(22636),
        oe = o(25847),
        re = o(81471),
        se = o.n(re);
      const ne = (0, o(47279).A)(),
        ae = ne?.id,
        ie = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        de = e => {
          const t = {
            ...e,
            environment: ae,
            display_type: ie
          };
          se().dataLayer({
            dataLayer: t
          })
        },
        ce = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            de(e)
          }
        }))(e, t);
      var le = o(79098);
      const ue = (e, t = 250) => o => ((e, t, o) => {
        const [r, s] = (0, b.useState)(t), n = e => {
          let t = e;
          const o = t?.items;
          if (o?.length) {
            const e = o.map(e => n(e));
            t = {
              ...t,
              items: e
            }
          }
          const r = t?.mediaQueryList;
          return r?.length ? (r.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
            t = {
              ...t,
              ...e
            }
          }), t) : t
        };
        return (0, b.useEffect)(() => {
          const e = (0, le.A)(() => {
            s(n(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, p.jsx)(e, {
          ...r
        })
      })(e, o, t);
      var ge = o(8670),
        he = o(12879);
      const me = ge.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        fe = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, he.A)(),
              {
                data: o
              } = Q(me, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return r ? (0, p.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, o, t);
      var pe = o(85997),
        be = o(17714),
        ve = o(52746),
        we = o(54812);
      const ye = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        ke = () => (0, b.useContext)(ye),
        xe = ({
          children: e,
          ...t
        }) => {
          const o = ke() ?? {},
            r = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(ye.Provider, {
            value: r,
            children: e
          })
        };
      var Se = o(93022),
        Te = o(36416);
      const Ae = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Te.useLocation)();
          return (0, b.useEffect)(() => {
            de({
              event: "trackPageview"
            })
          }, [o]), (0, p.jsx)(e, {
            ...t
          })
        })(e, t),
        Pe = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          se().initialize(t)
        };
      var Ce = o(43568),
        Ee = o(77678);
      const Re = "rockstar-games-web";
      let Me;
      try {
        const e = Ce.A.get(Re) ?? "";
        Me = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Me = {}
      }
      const qe = (0, A.UT)(Me),
        Le = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...qe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ce.A.set(Re, JSON.stringify(o), {
            expires: 30,
            domain: (0, Ee.F)(),
            path: "/"
          }), qe(o), o
        },
        je = () => ({
          webSettings: (0, v.q)(qe),
          webSettingsReactive: qe,
          mutateWebSettings: Le
        });
      var Ie = o(25633),
        De = o(87605)
    }
  }
]);