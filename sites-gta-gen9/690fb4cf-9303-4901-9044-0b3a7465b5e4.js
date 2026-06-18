try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "690fb4cf-9303-4901-9044-0b3a7465b5e4", e._sentryDebugIdIdentifier = "sentry-dbid-690fb4cf-9303-4901-9044-0b3a7465b5e4")
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
  [2174, 3320, 9793], {
    94931(e, t, o) {
      var r = o(93082),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var r, s = {},
          c = null,
          l = null;
        for (r in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !d.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: s,
          _owner: i.current
        }
      }
      t.Fragment = s, t.jsx = c, t.jsxs = c
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
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
        ApolloClient: () => A.R,
        ApolloProvider: () => _.X,
        DataLayerProvider: () => ye,
        InMemoryCache: () => E.D,
        PAGE_THEMES: () => Le.d,
        Platform: () => te.OD,
        Platforms: () => te.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Oe.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => me.N2,
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
        mutateWebSettings: () => Re,
        newswirePost: () => ee,
        oneTrustInit: () => Z,
        safeStyles: () => f,
        scrollToElement: () => te.PA,
        setContextItem: () => h.A,
        setCookieValue: () => te.My,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => ke.t,
        track: () => ie,
        useApolloClient: () => $,
        useBase: () => he.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => be,
        useGetTpaLinkGenerator: () => he.gd,
        useHasReduceMotionPreference: () => he.vx,
        useHasSaveDataPreference: () => he.sb,
        useLazyQuery: () => pe._,
        useLocale: () => he.Ym,
        useMutateState: () => x,
        useMutation: () => ve.n,
        useNewswirePost: () => he.CA,
        usePreloadImg: () => he.OG,
        usePrevious: () => he.ZC,
        useQuery: () => J,
        useQueryParams: () => he.sq,
        useReactiveVar: () => w.q,
        useRelativeTime: () => he.Vq,
        useRockstarEventDispatcher: () => he.OH,
        useRockstarEventSubscriber: () => he.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Me,
        useScApi: () => he.Cb,
        useScAuthLinks: () => he.N6,
        useScroll: () => me.Ll,
        useScrollTracking: () => he.GA,
        useScrollVisibility: () => he.JE,
        useState: () => y,
        useWindowResize: () => Oe.G4,
        webSettingsReactive: () => _e,
        withAutoRouteTracking: () => Se,
        withGtmTracking: () => de,
        withMediaBasedProps: () => ce,
        withReactiveState: () => T,
        withRockstarGraph: () => Q,
        withTranslations: () => fe
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
      const f = e => {
        const t = (0, g.clone)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(81038),
        m = o(94662),
        p = o(39793),
        v = o(93082),
        w = o(37927);
      const b = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "graphContextGet"
        }),
        y = () => (0, v.useContext)(b),
        k = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, v.useContext)(k),
        S = ({
          children: e,
          state: t
        }) => {
          (0, w.q)(t);
          const o = (0, v.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, p.jsx)(b.Provider, {
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
      var P = o(79922),
        C = o(42909),
        E = o(13996),
        A = o(94920),
        _ = o(48989),
        R = o(95753),
        M = o(99164);
      var O = o(70945);
      const L = (0, C.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var j = o(98548),
        I = o(39647),
        q = o.n(I);
      var D = o(70735),
        F = o(5942);
      const U = (0, D.e)({
        sha256: F.sc
      });
      var B = o(87324);
      const G = document.documentElement.lang,
        N = (e, t) => {
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
          return (0, v.useEffect)(() => {
            if (r && o.setTitleDataPath) {
              const e = (0, g.get)(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, v.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [n]), (0, v.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: n,
            error: s,
            data: r,
            ...a
          }
        },
        z = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        $ = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            r = {
              ...e,
              uri: o
            },
            [n] = (0, v.useState)(new E.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, C.useIntl)(),
            a = U.concat((({
              formatMessage: e
            }) => (0, O.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = L[t?.code ?? ""];
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
            }) => (0, M.o)((t, {
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
              fetch: q()
            }))(r))));
          return new A.R({
            cache: n,
            link: a
          })
        },
        V = (0, v.createContext)(N),
        J = (e, t) => (0, v.useContext)(V)(e, t),
        W = (0, C.withIntl)(({
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
            children: (0, p.jsx)(_.X, {
              client: r,
              children: (0, p.jsx)(V.Provider, {
                value: N,
                children: e
              })
            })
          })
        }, z),
        Q = (e, {
          env: t = "prod"
        }) => {
          const o = (0, P.UT)("");
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
        H = (0, P.UT)({}),
        X = "data-disallow-body-scroll",
        K = e => {
          const t = (0, w.q)(H),
            o = Object.values(t).some(e => !!e);
          return (0, v.useEffect)(() => {
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
          const [r, n] = (0, v.useState)(t), s = e => {
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
        fe = (e, t = "default") => o => ((e, t, o) => {
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
      var he = o(85997),
        me = o(17714),
        pe = o(52746),
        ve = o(54812);
      const we = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "gtmDatalayer"
        }),
        be = () => (0, v.useContext)(we),
        ye = ({
          children: e,
          ...t
        }) => {
          const o = be() ?? {},
            r = (0, v.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(we.Provider, {
            value: r,
            children: e
          })
        };
      var ke = o(93022),
        xe = o(36416);
      const Se = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, xe.useLocation)();
          return (0, v.useEffect)(() => {
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
      const Ee = "rockstar-games-web";
      let Ae;
      try {
        const e = Pe.A.get(Ee) ?? "";
        Ae = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ae = {}
      }
      const _e = (0, P.UT)(Ae),
        Re = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ..._e() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Pe.A.set(Ee, JSON.stringify(o), {
            expires: 30,
            domain: (0, Ce.F)(),
            path: "/"
          }), _e(o), o
        },
        Me = () => ({
          webSettings: (0, w.q)(_e),
          webSettingsReactive: _e,
          mutateWebSettings: Re
        });
      var Oe = o(25633),
        Le = o(87605)
    }
  }
]);