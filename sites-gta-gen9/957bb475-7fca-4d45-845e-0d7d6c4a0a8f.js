try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "957bb475-7fca-4d45-845e-0d7d6c4a0a8f", e._sentryDebugIdIdentifier = "sentry-dbid-957bb475-7fca-4d45-845e-0d7d6c4a0a8f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6043, 7122], {
    47279(e, t, o) {
      o.d(t, {
        A: () => a,
        C: () => n
      });
      var r = o(40283);
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
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
        a = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = s.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === o && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), a = s[n >= 0 ? n : 0], i = s.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, r.omit)((0, r.merge)({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    83320(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => R.X,
        DataLayerProvider: () => ke,
        InMemoryCache: () => A.D,
        PAGE_THEMES: () => je.d,
        Platform: () => te.OD,
        Platforms: () => te.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Le.uU,
        RockstarGraphProvider: () => Q,
        RockstarTokenProvider: () => M.ec,
        ScrollProvider: () => fe.N2,
        coreScApiFetch: () => n.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => te.wC,
        downloadFile: () => te.PE,
        findPlatform: () => te.rB,
        generateTpaLink: () => te.tC,
        getAccentColor: () => d,
        getBase: () => c.A,
        getCdnPrefix: () => te.yh,
        getConfigForDomain: () => l.A,
        getCookieValueByName: () => te.Ap,
        getGen8Consoles: () => te.Xs,
        getGen9Consoles: () => te.kx,
        getLanguageLabel: () => te.rJ,
        getUriForGraphEnv: () => u,
        gql: () => le.J1,
        gtmInit: () => Te,
        importAll: () => te.pT,
        isGen9Platform: () => te.lV,
        makeVar: () => P.UT,
        mutateWebSettings: () => Me,
        newswirePost: () => ee,
        oneTrustInit: () => Z,
        safeStyles: () => h,
        scrollToElement: () => te.PA,
        setContextItem: () => m.A,
        setCookieValue: () => te.My,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => ye.t,
        track: () => ie,
        useApolloClient: () => V,
        useBase: () => me.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => we,
        useGetTpaLinkGenerator: () => me.gd,
        useHasReduceMotionPreference: () => me.vx,
        useHasSaveDataPreference: () => me.sb,
        useLazyQuery: () => pe._,
        useLocale: () => me.Ym,
        useMutateState: () => x,
        useMutation: () => be.n,
        useNewswirePost: () => me.CA,
        usePreloadImg: () => me.OG,
        usePrevious: () => me.ZC,
        useQuery: () => J,
        useQueryParams: () => me.sq,
        useReactiveVar: () => v.q,
        useRelativeTime: () => me.Vq,
        useRockstarEventDispatcher: () => me.OH,
        useRockstarEventSubscriber: () => me.zP,
        useRockstarToken: () => M.e9,
        useRockstarTokenPing: () => M.Es,
        useRockstarTokenReactive: () => M.bD,
        useRockstarWebSettings: () => qe,
        useScApi: () => me.Cb,
        useScAuthLinks: () => me.N6,
        useScroll: () => fe.Ll,
        useScrollTracking: () => me.GA,
        useScrollVisibility: () => me.JE,
        useState: () => k,
        useWindowResize: () => Le.G4,
        webSettingsReactive: () => Re,
        withAutoRouteTracking: () => Se,
        withGtmTracking: () => de,
        withMediaBasedProps: () => ce,
        withReactiveState: () => T,
        withRockstarGraph: () => W,
        withTranslations: () => he
      });
      var r = {};
      o.r(r), o.d(r, {
        default: () => i
      });
      var n = o(10959),
        s = o(57978);
      const a = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  s.u.refresh()
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
      var g = o(40283);
      const h = e => {
        const t = (0, g.clone)(e);
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
        k = () => (0, b.useContext)(w),
        y = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, b.useContext)(y),
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
            children: (0, p.jsx)(y.Provider, {
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
      var P = o(79922),
        C = o(42909),
        A = o(13996),
        E = o(94920),
        R = o(48989),
        M = o(95753),
        q = o(99164);
      var L = o(70945);
      const j = (0, C.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var I = o(98548),
        D = o(39647),
        _ = o.n(D);
      var O = o(70735),
        F = o(5942);
      const U = (0, O.e)({
        sha256: F.sc
      });
      var B = o(87324);
      const G = document.documentElement.lang,
        z = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: G,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: n,
              error: s,
              ...a
            } = (0, B.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (r && o.setTitleDataPath) {
              const e = (0, g.get)(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [n]), (0, b.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: n,
            error: s,
            data: r,
            ...a
          }
        },
        N = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        V = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            r = {
              ...e,
              uri: o
            },
            [n] = (0, b.useState)(new A.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, C.useIntl)(),
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
              formatMessage: s
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
              fetch: _()
            }))(r))));
          return new E.R({
            cache: n,
            link: a
          })
        },
        $ = (0, b.createContext)(z),
        J = (e, t) => (0, b.useContext)($)(e, t),
        Q = (0, C.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const r = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, p.jsx)(M.ec, {
            token: t?.token,
            children: (0, p.jsx)(R.X, {
              client: r,
              children: (0, p.jsx)($.Provider, {
                value: z,
                children: e
              })
            })
          })
        }, N),
        W = (e, {
          env: t = "prod"
        }) => {
          const o = (0, P.UT)("");
          return function(r) {
            return (0, p.jsx)(Q, {
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
        H = (0, P.UT)({}),
        X = "data-disallow-body-scroll",
        K = e => {
          const t = (0, v.q)(H),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(X, "true") : document.documentElement.removeAttribute(X)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => H(e))({
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
      var ee = o(22636),
        te = o(25847),
        oe = o(81471),
        re = o.n(oe);
      const ne = (0, o(47279).A)(),
        se = ne?.id,
        ae = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ie = e => {
          const t = {
            ...e,
            environment: se,
            display_type: ae
          };
          re().dataLayer({
            dataLayer: t
          })
        },
        de = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ie(e)
          }
        }))(e, t),
        ce = (e, t = 250) => o => ((e, t, o) => {
          const [r, n] = (0, b.useState)(t), s = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => s(e));
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
            const e = (0, g.debounce)(() => {
              n(s(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, p.jsx)(e, {
            ...r
          })
        })(e, o, t);
      var le = o(8670),
        ue = o(12879);
      const ge = le.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        he = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, ue.A)(),
              {
                data: o
              } = J(ge, {
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
      var me = o(85997),
        fe = o(17714),
        pe = o(52746),
        be = o(54812);
      const ve = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        we = () => (0, b.useContext)(ve),
        ke = ({
          children: e,
          ...t
        }) => {
          const o = we() ?? {},
            r = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(ve.Provider, {
            value: r,
            children: e
          })
        };
      var ye = o(93022),
        xe = o(36416);
      const Se = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, xe.useLocation)();
          return (0, b.useEffect)(() => {
            ie({
              event: "trackPageview"
            })
          }, [o]), (0, p.jsx)(e, {
            ...t
          })
        })(e, t),
        Te = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          re().initialize(t)
        };
      var Pe = o(43568),
        Ce = o(77678);
      const Ae = "rockstar-games-web";
      let Ee;
      try {
        const e = Pe.A.get(Ae) ?? "";
        Ee = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ee = {}
      }
      const Re = (0, P.UT)(Ee),
        Me = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Re() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Pe.A.set(Ae, JSON.stringify(o), {
            expires: 30,
            domain: (0, Ce.F)(),
            path: "/"
          }), Re(o), o
        },
        qe = () => ({
          webSettings: (0, v.q)(Re),
          webSettingsReactive: Re,
          mutateWebSettings: Me
        });
      var Le = o(25633),
        je = o(87605)
    }
  }
]);