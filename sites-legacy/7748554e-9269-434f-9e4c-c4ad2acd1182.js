try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7748554e-9269-434f-9e4c-c4ad2acd1182", e._sentryDebugIdIdentifier = "sentry-dbid-7748554e-9269-434f-9e4c-c4ad2acd1182")
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
  [5509, 9793], {
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

      function l(e, t, o) {
        var r, s = {},
          l = null,
          c = null;
        for (r in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !d.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: s,
          _owner: i.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    47279(e, t, o) {
      o.d(t, {
        A: () => i,
        C: () => s
      });
      var r = o(40415),
        n = o(50573);
      const s = {
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
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = a.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === o && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), i = a[s >= 0 ? s : 0], d = a.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, n.A)((0, r.A)({}, d, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    55509(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => R.X,
        DataLayerProvider: () => Se,
        InMemoryCache: () => C.D,
        PAGE_THEMES: () => De.d,
        Platform: () => re.OD,
        Platforms: () => re.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ie.uU,
        RockstarGraphProvider: () => Q,
        RockstarTokenProvider: () => _.ec,
        ScrollProvider: () => we.N2,
        coreScApiFetch: () => n.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => re.wC,
        downloadFile: () => re.PE,
        findPlatform: () => re.rB,
        generateTpaLink: () => re.tC,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => re.yh,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => re.Ap,
        getGen8Consoles: () => re.Xs,
        getGen9Consoles: () => re.kx,
        getLanguageLabel: () => re.rJ,
        getUriForGraphEnv: () => u,
        gql: () => fe.J1,
        gtmInit: () => Ce,
        importAll: () => re.pT,
        isEmptyMarkup: () => Z,
        isGen9Platform: () => re.lV,
        makeVar: () => P.UT,
        mutateWebSettings: () => Le,
        newswirePost: () => oe,
        oneTrustInit: () => te,
        safeStyles: () => f,
        scrollToElement: () => re.PA,
        setContextItem: () => h.A,
        setCookieValue: () => re.My,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => Te.t,
        track: () => le,
        useApolloClient: () => V,
        useBase: () => ve.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => xe,
        useGetTpaLinkGenerator: () => ve.gd,
        useHasReduceMotionPreference: () => ve.vx,
        useHasSaveDataPreference: () => ve.sb,
        useLazyQuery: () => be._,
        useLocale: () => ve.Ym,
        useMutateState: () => x,
        useMutation: () => ye.n,
        useNewswirePost: () => ve.CA,
        usePreloadImg: () => ve.OG,
        usePrevious: () => ve.ZC,
        useQuery: () => W,
        useQueryParams: () => ve.sq,
        useReactiveVar: () => w.q,
        useRelativeTime: () => ve.Vq,
        useRockstarEventDispatcher: () => ve.OH,
        useRockstarEventSubscriber: () => ve.zP,
        useRockstarToken: () => _.e9,
        useRockstarTokenPing: () => _.Es,
        useRockstarTokenReactive: () => _.bD,
        useRockstarWebSettings: () => je,
        useScApi: () => ve.Cb,
        useScAuthLinks: () => ve.N6,
        useScroll: () => we.Ll,
        useScrollTracking: () => ve.GA,
        useScrollVisibility: () => ve.JE,
        useState: () => y,
        useWindowResize: () => Ie.G4,
        webSettingsReactive: () => Oe,
        withAutoRouteTracking: () => Ae,
        withGtmTracking: () => ce,
        withMediaBasedProps: () => ge,
        withReactiveState: () => T,
        withRockstarGraph: () => H,
        withTranslations: () => pe
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
      var l = o(17473),
        c = o(39991);
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
      const f = e => {
        const t = (0, g.A)(e);
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
        A = o(42909),
        C = o(13996),
        E = o(94920),
        R = o(48989),
        _ = o(95753),
        M = o(99164);
      var O = o(70945);
      const L = (0, A.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var j = o(98548),
        I = o(39647),
        D = o.n(I);
      var q = o(70735),
        F = o(5942);
      const U = (0, q.e)({
        sha256: F.sc
      });
      var B = o(87324),
        G = o(26065);
      const N = document.documentElement.lang,
        z = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: N,
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
              const e = (0, G.A)(r, o.setTitleDataPath) ?? null;
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
        $ = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        V = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            r = {
              ...e,
              uri: o
            },
            [n] = (0, v.useState)(new C.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, A.useIntl)(),
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
              fetch: D()
            }))(r))));
          return new E.R({
            cache: n,
            link: a
          })
        },
        J = (0, v.createContext)(z),
        W = (e, t) => (0, v.useContext)(J)(e, t),
        Q = (0, A.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const r = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, p.jsx)(_.ec, {
            token: t?.token,
            children: (0, p.jsx)(R.X, {
              client: r,
              children: (0, p.jsx)(J.Provider, {
                value: z,
                children: e
              })
            })
          })
        }, $),
        H = (e, {
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
        X = (0, P.UT)({}),
        K = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, w.q)(X),
            o = Object.values(t).some(e => !!e);
          return (0, v.useEffect)(() => {
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
      var oe = o(22636),
        re = o(25847),
        ne = o(81471),
        se = o.n(ne);
      const ae = (0, o(47279).A)(),
        ie = ae?.id,
        de = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        le = e => {
          const t = {
            ...e,
            environment: ie,
            display_type: de
          };
          se().dataLayer({
            dataLayer: t
          })
        },
        ce = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            le(e)
          }
        }))(e, t);
      var ue = o(79098);
      const ge = (e, t = 250) => o => ((e, t, o) => {
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
          const e = (0, ue.A)(() => {
            n(s(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, p.jsx)(e, {
          ...r
        })
      })(e, o, t);
      var fe = o(8670),
        he = o(12879);
      const me = fe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        pe = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, he.A)(),
              {
                data: o
              } = W(me, {
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
      var ve = o(85997),
        we = o(17714),
        be = o(52746),
        ye = o(54812);
      const ke = (0, h.A)({
          context: (0, v.createContext)({}),
          key: "gtmDatalayer"
        }),
        xe = () => (0, v.useContext)(ke),
        Se = ({
          children: e,
          ...t
        }) => {
          const o = xe() ?? {},
            r = (0, v.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(ke.Provider, {
            value: r,
            children: e
          })
        };
      var Te = o(93022),
        Pe = o(36416);
      const Ae = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Pe.useLocation)();
          return (0, v.useEffect)(() => {
            le({
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
          se().initialize(t)
        };
      var Ee = o(43568),
        Re = o(77678);
      const _e = "rockstar-games-web";
      let Me;
      try {
        const e = Ee.A.get(_e) ?? "";
        Me = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Me = {}
      }
      const Oe = (0, P.UT)(Me),
        Le = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Oe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ee.A.set(_e, JSON.stringify(o), {
            expires: 30,
            domain: (0, Re.F)(),
            path: "/"
          }), Oe(o), o
        },
        je = () => ({
          webSettings: (0, w.q)(Oe),
          webSettingsReactive: Oe,
          mutateWebSettings: Le
        });
      var Ie = o(25633),
        De = o(87605)
    }
  }
]);