try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6434f98-6496-4157-a5e4-f8eeda59516d", e._sentryDebugIdIdentifier = "sentry-dbid-e6434f98-6496-4157-a5e4-f8eeda59516d")
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
  [9096], {
    24834(e, t, o) {
      var r = o(57202),
        a = o(50573);
      const s = [{
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
        } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = s.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === o && (e = {
          site: t,
          subDomain: r
        }, !0)) >= 0), i = s[n >= 0 ? n : 0], d = s.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, a.A)((0, r.A)({}, d, {
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
        ApolloClient: () => w.ApolloClient,
        ApolloProvider: () => w.ApolloProvider,
        DataLayerProvider: () => he,
        InMemoryCache: () => w.InMemoryCache,
        PAGE_THEMES: () => Te.d,
        Platform: () => X.OD,
        Platforms: () => X.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Pe.uU,
        RockstarGraphProvider: () => z,
        RockstarTokenProvider: () => P.ec,
        ScrollProvider: () => ue.N2,
        coreScApiFetch: () => a.A,
        createDeferredScrollTriggerRefresh: () => n,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => X.wC,
        downloadFile: () => X.PE,
        findPlatform: () => X.rB,
        generateTpaLink: () => X.tC,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => X.yh,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => X.Ap,
        getGen8Consoles: () => X.Xs,
        getGen9Consoles: () => X.kx,
        getLanguageLabel: () => X.rJ,
        getUriForGraphEnv: () => u,
        gql: () => w.gql,
        gtmInit: () => we,
        importAll: () => X.pT,
        isEmptyMarkup: () => H,
        isGen9Platform: () => X.lV,
        makeVar: () => w.makeVar,
        mutateWebSettings: () => Ae,
        newswirePost: () => K,
        oneTrustInit: () => J,
        safeStyles: () => m,
        scrollToElement: () => X.PA,
        setContextItem: () => h.A,
        setCookieValue: () => X.My,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => W,
        toScLocaleString: () => pe.t,
        track: () => re,
        useApolloClient: () => V,
        useBase: () => ce.RK,
        useBodyScrollable: () => $,
        useDataLayer: () => me,
        useGetTpaLinkGenerator: () => ce.gd,
        useHasReduceMotionPreference: () => ce.vx,
        useHasSaveDataPreference: () => ce.sb,
        useLazyQuery: () => w.useLazyQuery,
        useLocale: () => ce.Ym,
        useMutateState: () => x,
        useMutation: () => w.useMutation,
        useNewswirePost: () => ce.CA,
        usePreloadImg: () => ce.OG,
        usePrevious: () => ce.ZC,
        useQuery: () => G,
        useQueryParams: () => ce.sq,
        useReactiveVar: () => w.useReactiveVar,
        useRelativeTime: () => ce.Vq,
        useRockstarEventDispatcher: () => ce.OH,
        useRockstarEventSubscriber: () => ce.zP,
        useRockstarToken: () => P.e9,
        useRockstarTokenPing: () => P.Es,
        useRockstarTokenReactive: () => P.bD,
        useRockstarWebSettings: () => Ce,
        useScApi: () => ce.Cb,
        useScAuthLinks: () => ce.N6,
        useScroll: () => ue.Ll,
        useScrollTracking: () => ce.GA,
        useScrollVisibility: () => ce.JE,
        useState: () => k,
        useWindowResize: () => Pe.G4,
        webSettingsReactive: () => Se,
        withAutoRouteTracking: () => ve,
        withGtmTracking: () => ae,
        withMediaBasedProps: () => ne,
        withReactiveState: () => A,
        withRockstarGraph: () => U,
        withTranslations: () => le
      });
      var r = {};
      o.r(r), o.d(r, {
        default: () => i
      });
      var a = o(52974),
        s = o(57978);
      const n = () => {
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
      var l = o(12658),
        c = o(91146);
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
      const m = e => {
        const t = (0, g.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(17727),
        p = o(45075),
        f = o(39793),
        v = o(93082),
        w = o(89340);
      const b = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "graphContextGet"
        }),
        k = () => (0, v.useContext)(b),
        y = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, v.useContext)(y),
        S = ({
          children: e,
          state: t
        }) => {
          (0, w.useReactiveVar)(t);
          const o = (0, v.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, f.jsx)(b.Provider, {
            value: t(),
            children: (0, f.jsx)(y.Provider, {
              value: o,
              children: e
            })
          })
        },
        A = (e, {
          state: t
        }) => function(o) {
          return (0, f.jsx)(S, {
            state: t,
            children: (0, f.jsx)(e, {
              ...o
            })
          })
        };
      var C = o(42909),
        P = o(61295),
        T = o(26390);
      var E = o(28479);
      const M = (0, C.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var R = o(39647),
        L = o.n(R);
      var I = o(41265),
        j = o(5942);
      const q = (0, I.e)({
        sha256: j.sc
      });
      var D = o(26065);
      const O = document.documentElement.lang,
        _ = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: O,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: a,
              error: s,
              ...n
            } = (0, w.useQuery)(e, o);
          return (0, v.useEffect)(() => {
            if (r && o.setTitleDataPath) {
              const e = (0, D.A)(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, v.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, v.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: a,
            error: s,
            data: r,
            ...n
          }
        },
        F = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        V = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            r = {
              ...e,
              uri: o
            },
            [a] = (0, v.useState)(new w.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, C.useIntl)(),
            n = q.concat((({
              formatMessage: e
            }) => (0, E.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = M[t?.code ?? ""];
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
            }) => (0, T.o)((t, {
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
            }).concat((e => (0, w.createHttpLink)({
              ...e,
              fetch: L()
            }))(r))));
          return new w.ApolloClient({
            cache: a,
            link: n
          })
        },
        B = (0, v.createContext)(_),
        G = (e, t) => (0, v.useContext)(B)(e, t),
        z = (0, C.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const r = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(P.ec, {
            token: t?.token,
            children: (0, f.jsx)(w.ApolloProvider, {
              client: r,
              children: (0, f.jsx)(B.Provider, {
                value: _,
                children: e
              })
            })
          })
        }, F),
        U = (e, {
          env: t = "prod"
        }) => {
          const o = (0, w.makeVar)("");
          return function(r) {
            return (0, f.jsx)(z, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, f.jsx)(e, {
                ...r
              })
            })
          }
        },
        N = (0, w.makeVar)({}),
        Q = "data-disallow-body-scroll",
        $ = e => {
          const t = (0, w.useReactiveVar)(N),
            o = Object.values(t).some(e => !!e);
          return (0, v.useEffect)(() => {
            o ? document.documentElement.setAttribute(Q, "true") : document.documentElement.removeAttribute(Q)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => N(e))({
              ...t,
              [e]: o
            })
          }
        },
        H = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        W = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        J = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var K = o(11701),
        X = o(32454),
        Y = o(3852),
        Z = o.n(Y);
      const ee = (0, o(24834).A)(),
        te = ee?.id,
        oe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        re = e => {
          const t = {
            ...e,
            environment: te,
            display_type: oe
          };
          Z().dataLayer({
            dataLayer: t
          })
        },
        ae = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            re(e)
          }
        }))(e, t);
      var se = o(34708);
      const ne = (e, t = 250) => o => ((e, t, o) => {
        const [r, a] = (0, v.useState)(t), s = e => {
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
        return (0, v.useEffect)(() => {
          const e = (0, se.A)(() => {
            a(s(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, f.jsx)(e, {
          ...r
        })
      })(e, o, t);
      var ie = o(75764);
      const de = w.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        le = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, ie.A)(),
              {
                data: o
              } = G(de, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return r ? (0, f.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, o, t);
      var ce = o(56596),
        ue = o(12509);
      const ge = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "gtmDatalayer"
        }),
        me = () => (0, v.useContext)(ge),
        he = ({
          children: e,
          ...t
        }) => {
          const o = me() ?? {},
            r = (0, v.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(ge.Provider, {
            value: r,
            children: e
          })
        };
      var pe = o(3339),
        fe = o(99225);
      const ve = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, fe.useLocation)();
          return (0, v.useEffect)(() => {
            re({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        we = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Z().initialize(t)
        };
      var be = o(62885),
        ke = o(31613);
      const ye = "rockstar-games-web";
      let xe;
      try {
        const e = be.A.get(ye) ?? "";
        xe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        xe = {}
      }
      const Se = (0, w.makeVar)(xe),
        Ae = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Se() ?? {}
          };
          return o[e] = t, null === t && delete o[e], be.A.set(ye, JSON.stringify(o), {
            expires: 30,
            domain: (0, ke.F)(),
            path: "/"
          }), Se(o), o
        },
        Ce = () => ({
          webSettings: (0, w.useReactiveVar)(Se),
          webSettingsReactive: Se,
          mutateWebSettings: Ae
        });
      var Pe = o(53634),
        Te = o(36244)
    }
  }
]);