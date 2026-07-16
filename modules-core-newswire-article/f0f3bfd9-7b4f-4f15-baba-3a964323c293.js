try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f0f3bfd9-7b4f-4f15-baba-3a964323c293", e._sentryDebugIdIdentifier = "sentry-dbid-f0f3bfd9-7b4f-4f15-baba-3a964323c293")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9096], {
    24834(e, t, o) {
      var r = o(40283);
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
        } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = n.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === o && (e = {
          site: t,
          subDomain: r
        }, !0)) >= 0), a = n[s >= 0 ? s : 0], i = n.find(e => e.id === a.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, r.omit)((0, r.merge)({}, i, {
          currentSite: e
        }, a), "fallbackEnvironment")
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
        DataLayerProvider: () => ye,
        InMemoryCache: () => A.D,
        PAGE_THEMES: () => je.d,
        Platform: () => oe.OD,
        Platforms: () => oe.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => _e.uU,
        RockstarGraphProvider: () => Q,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => pe.N2,
        coreScApiFetch: () => n.A,
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
        gql: () => ue.J1,
        gtmInit: () => Pe,
        importAll: () => oe.pT,
        isEmptyMarkup: () => Y,
        isGen9Platform: () => oe.lV,
        makeVar: () => P.UT,
        mutateWebSettings: () => qe,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => m,
        scrollToElement: () => oe.PA,
        setContextItem: () => h.A,
        setCookieValue: () => oe.My,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => xe.t,
        track: () => de,
        useApolloClient: () => V,
        useBase: () => fe.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => ke,
        useGetTpaLinkGenerator: () => fe.gd,
        useHasReduceMotionPreference: () => fe.vx,
        useHasSaveDataPreference: () => fe.sb,
        useLazyQuery: () => we._,
        useLocale: () => fe.Ym,
        useMutateState: () => x,
        useMutation: () => be.n,
        useNewswirePost: () => fe.CA,
        usePreloadImg: () => fe.OG,
        usePrevious: () => fe.ZC,
        useQuery: () => J,
        useQueryParams: () => fe.sq,
        useReactiveVar: () => b.q,
        useRelativeTime: () => fe.Vq,
        useRockstarEventDispatcher: () => fe.OH,
        useRockstarEventSubscriber: () => fe.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Le,
        useScApi: () => fe.Cb,
        useScAuthLinks: () => fe.N6,
        useScroll: () => pe.Ll,
        useScrollTracking: () => fe.GA,
        useScrollVisibility: () => fe.JE,
        useState: () => k,
        useWindowResize: () => _e.G4,
        webSettingsReactive: () => Re,
        withAutoRouteTracking: () => Te,
        withGtmTracking: () => ce,
        withMediaBasedProps: () => le,
        withReactiveState: () => T,
        withRockstarGraph: () => W,
        withTranslations: () => he
      });
      var r = {};
      o.r(r), o.d(r, {
        default: () => i
      });
      var n = o(52974),
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
      var g = o(40283);
      const m = e => {
        const t = (0, g.clone)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(17727),
        f = o(45075),
        p = o(39793),
        w = o(93082),
        b = o(18849);
      const v = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "graphContextGet"
        }),
        k = () => (0, w.useContext)(v),
        y = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, w.useContext)(y),
        S = ({
          children: e,
          state: t
        }) => {
          (0, b.q)(t);
          const o = (0, w.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, p.jsx)(v.Provider, {
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
      var P = o(91540),
        C = o(42909),
        A = o(57822),
        E = o(32590),
        M = o(77387),
        R = o(61295),
        q = o(26390);
      var L = o(28479);
      const _ = (0, C.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var j = o(70246),
        D = o(39647),
        I = o.n(D);
      var O = o(41265),
        F = o(5942);
      const U = (0, O.e)({
        sha256: F.sc
      });
      var B = o(65434);
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
          return (0, w.useEffect)(() => {
            if (r && o.setTitleDataPath) {
              const e = (0, g.get)(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, w.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [n]), (0, w.useEffect)(() => {
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
            [n] = (0, w.useState)(new A.D({
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
                  const o = _[t?.code ?? ""];
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
            }).concat((e => (0, j.$)({
              ...e,
              fetch: I()
            }))(r))));
          return new E.R({
            cache: n,
            link: a
          })
        },
        $ = (0, w.createContext)(z),
        J = (e, t) => (0, w.useContext)($)(e, t),
        Q = (0, C.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const r = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, p.jsx)(R.ec, {
            token: t?.token,
            children: (0, p.jsx)(M.X, {
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
          const t = (0, b.q)(H),
            o = Object.values(t).some(e => !!e);
          return (0, w.useEffect)(() => {
            o ? document.documentElement.setAttribute(X, "true") : document.documentElement.removeAttribute(X)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => H(e))({
              ...t,
              [e]: o
            })
          }
        },
        Y = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
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
      var te = o(11701),
        oe = o(32454),
        re = o(3852),
        ne = o.n(re);
      const se = (0, o(24834).A)(),
        ae = se?.id,
        ie = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        de = e => {
          const t = {
            ...e,
            environment: ae,
            display_type: ie
          };
          ne().dataLayer({
            dataLayer: t
          })
        },
        ce = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            de(e)
          }
        }))(e, t),
        le = (e, t = 250) => o => ((e, t, o) => {
          const [r, n] = (0, w.useState)(t), s = e => {
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
          return (0, w.useEffect)(() => {
            const e = (0, g.debounce)(() => {
              n(s(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, p.jsx)(e, {
            ...r
          })
        })(e, o, t);
      var ue = o(53967),
        ge = o(75764);
      const me = ue.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        he = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, ge.A)(),
              {
                data: o
              } = J(me, {
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
      var fe = o(56596),
        pe = o(12509),
        we = o(58460),
        be = o(71374);
      const ve = (0, h.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        ke = () => (0, w.useContext)(ve),
        ye = ({
          children: e,
          ...t
        }) => {
          const o = ke() ?? {},
            r = (0, w.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(ve.Provider, {
            value: r,
            children: e
          })
        };
      var xe = o(3339),
        Se = o(99225);
      const Te = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Se.useLocation)();
          return (0, w.useEffect)(() => {
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
          ne().initialize(t)
        };
      var Ce = o(62885),
        Ae = o(31613);
      const Ee = "rockstar-games-web";
      let Me;
      try {
        const e = Ce.A.get(Ee) ?? "";
        Me = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Me = {}
      }
      const Re = (0, P.UT)(Me),
        qe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Re() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ce.A.set(Ee, JSON.stringify(o), {
            expires: 30,
            domain: (0, Ae.F)(),
            path: "/"
          }), Re(o), o
        },
        Le = () => ({
          webSettings: (0, b.q)(Re),
          webSettingsReactive: Re,
          mutateWebSettings: qe
        });
      var _e = o(53634),
        je = o(36244)
    }
  }
]);