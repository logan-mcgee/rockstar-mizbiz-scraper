try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "81f9d200-5f6d-4913-b10e-bcce32343b1b", e._sentryDebugIdIdentifier = "sentry-dbid-81f9d200-5f6d-4913-b10e-bcce32343b1b")
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
  [2054, 7989], {
    24834(e, t, o) {
      var r = o(40415),
        s = o(50573);
      const n = [{
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
      }];
      o.d(t, ["A", 0, () => {
        let e;
        const {
          location: t
        } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = n.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === o && (e = {
          site: t,
          subDomain: r
        }, !0)) >= 0), i = n[a >= 0 ? a : 0], d = n.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, s.A)((0, r.A)({}, d, {
          currentSite: e
        }, i), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    },
    19096(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => M.X,
        DataLayerProvider: () => Se,
        InMemoryCache: () => C.D,
        PAGE_THEMES: () => Oe.d,
        Platform: () => re.OD,
        Platforms: () => re.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ie.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => ve.N2,
        coreScApiFetch: () => s.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => re.wC,
        downloadFile: () => re.PE,
        findPlatform: () => re.rB,
        generateTpaLink: () => re.tC,
        getAccentColor: () => d,
        getBase: () => c.A,
        getCdnPrefix: () => re.yh,
        getConfigForDomain: () => l.A,
        getCookieValueByName: () => re.Ap,
        getGen8Consoles: () => re.Xs,
        getGen9Consoles: () => re.kx,
        getLanguageLabel: () => re.rJ,
        getUriForGraphEnv: () => u,
        gql: () => he.J1,
        gtmInit: () => Ce,
        importAll: () => re.pT,
        isEmptyMarkup: () => Z,
        isGen9Platform: () => re.lV,
        makeVar: () => A.UT,
        mutateWebSettings: () => je,
        newswirePost: () => oe,
        oneTrustInit: () => te,
        safeStyles: () => h,
        scrollToElement: () => re.PA,
        setContextItem: () => m.A,
        setCookieValue: () => re.My,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => Te.t,
        track: () => ce,
        useApolloClient: () => $,
        useBase: () => be.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => xe,
        useGetTpaLinkGenerator: () => be.gd,
        useHasReduceMotionPreference: () => be.vx,
        useHasSaveDataPreference: () => be.sb,
        useLazyQuery: () => we._,
        useLocale: () => be.Ym,
        useMutateState: () => x,
        useMutation: () => ye.n,
        useNewswirePost: () => be.CA,
        usePreloadImg: () => be.OG,
        usePrevious: () => be.ZC,
        useQuery: () => Q,
        useQueryParams: () => be.sq,
        useReactiveVar: () => v.q,
        useRelativeTime: () => be.Vq,
        useRockstarEventDispatcher: () => be.OH,
        useRockstarEventSubscriber: () => be.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => De,
        useScApi: () => be.Cb,
        useScAuthLinks: () => be.N6,
        useScroll: () => ve.Ll,
        useScrollTracking: () => be.GA,
        useScrollVisibility: () => be.JE,
        useState: () => y,
        useWindowResize: () => Ie.G4,
        webSettingsReactive: () => Le,
        withAutoRouteTracking: () => Pe,
        withGtmTracking: () => le,
        withMediaBasedProps: () => ge,
        withReactiveState: () => T,
        withRockstarGraph: () => H,
        withTranslations: () => pe
      });
      var r = {};
      o.r(r), o.d(r, {
        default: () => i
      });
      var s = o(52974),
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
      var c = o(12658),
        l = o(91146);
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
      var m = o(17727),
        f = o(45075),
        p = o(39793),
        b = o(93082),
        v = o(18849);
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
      var A = o(91540),
        P = o(42909),
        C = o(57822),
        E = o(37470),
        M = o(77387),
        R = o(61295),
        q = o(26390);
      var L = o(28479);
      const j = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var D = o(70246),
        I = o(39647),
        O = o.n(I);
      var _ = o(41265),
        F = o(5942);
      const U = (0, _.e)({
        sha256: F.sc
      });
      var B = o(65434),
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
            }).concat((e => (0, D.$)({
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
          return (0, p.jsx)(R.ec, {
            token: t?.token,
            children: (0, p.jsx)(M.X, {
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
        Z = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        ee = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        te = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var oe = o(11701),
        re = o(32454),
        se = o(81471),
        ne = o.n(se);
      const ae = (0, o(24834).A)(),
        ie = ae?.id,
        de = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ce = e => {
          const t = {
            ...e,
            environment: ie,
            display_type: de
          };
          ne().dataLayer({
            dataLayer: t
          })
        },
        le = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ce(e)
          }
        }))(e, t);
      var ue = o(79098);
      const ge = (e, t = 250) => o => ((e, t, o) => {
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
          const e = (0, ue.A)(() => {
            s(n(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, p.jsx)(e, {
          ...r
        })
      })(e, o, t);
      var he = o(58060),
        me = o(75764);
      const fe = he.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        pe = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, me.A)(),
              {
                data: o
              } = Q(fe, {
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
      var be = o(56596),
        ve = o(12509),
        we = o(58460),
        ye = o(71374);
      const ke = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        xe = () => (0, b.useContext)(ke),
        Se = ({
          children: e,
          ...t
        }) => {
          const o = xe() ?? {},
            r = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(ke.Provider, {
            value: r,
            children: e
          })
        };
      var Te = o(3339),
        Ae = o(99225);
      const Pe = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ae.useLocation)();
          return (0, b.useEffect)(() => {
            ce({
              event: "trackPageview"
            })
          }, [o]), (0, p.jsx)(e, {
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
          ne().initialize(t)
        };
      var Ee = o(62885),
        Me = o(31613);
      const Re = "rockstar-games-web";
      let qe;
      try {
        const e = Ee.A.get(Re) ?? "";
        qe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        qe = {}
      }
      const Le = (0, A.UT)(qe),
        je = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Le() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ee.A.set(Re, JSON.stringify(o), {
            expires: 30,
            domain: (0, Me.F)(),
            path: "/"
          }), Le(o), o
        },
        De = () => ({
          webSettings: (0, v.q)(Le),
          webSettingsReactive: Le,
          mutateWebSettings: je
        });
      var Ie = o(53634),
        Oe = o(36244)
    }
  }
]);