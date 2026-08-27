try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b6535b8e-7739-47be-95cb-9bbc4b797597", e._sentryDebugIdIdentifier = "sentry-dbid-b6535b8e-7739-47be-95cb-9bbc4b797597")
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
  [606, 1177, 4668, 4809, 9793], {
    94931(e, t, r) {
      var o = r(93082),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var o, a = {},
          l = null,
          u = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, o) && !c.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    39793(e, t, r) {
      e.exports = r(94931)
    },
    68196(e, t, r) {
      var o = r(57202),
        n = r(50573);
      const a = [{
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
      r.d(t, ["A", 0, () => {
        let e;
        const {
          location: t
        } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), i = a.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
          site: t,
          subDomain: o
        }, !0)) >= 0), s = a[i >= 0 ? i : 0], c = a.find(e => e.id === s.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, o.A)({}, c, {
          currentSite: e
        }, s), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    },
    40606(e, t, r) {
      r.r(t), r.d(t, {
        ApolloClient: () => v.ApolloClient,
        ApolloProvider: () => v.ApolloProvider,
        DataLayerProvider: () => ye,
        InMemoryCache: () => v.InMemoryCache,
        PAGE_THEMES: () => je.d,
        Platform: () => Y.OD,
        Platforms: () => Y.lv,
        ReactiveStateProvider: () => P,
        ResizeProvider: () => Ee.uU,
        RockstarGraphProvider: () => z,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => de.N2,
        coreScApiFetch: () => n.A,
        createDeferredScrollTriggerRefresh: () => i,
        cx: () => o,
        detectIfWeShouldAnchorSomewhere: () => Y.wC,
        downloadFile: () => Y.PE,
        findPlatform: () => Y.rB,
        generateTpaLink: () => Y.tC,
        getAccentColor: () => c,
        getBase: () => l.A,
        getCdnPrefix: () => Y.yh,
        getConfigForDomain: () => u.A,
        getCookieValueByName: () => Y.Ap,
        getGen8Consoles: () => Y.Xs,
        getGen9Consoles: () => Y.kx,
        getLanguageLabel: () => Y.rJ,
        getPublicTag: () => Oe,
        getUriForGraphEnv: () => d,
        gql: () => v.gql,
        gtmInit: () => ve,
        importAll: () => Y.pT,
        isEmptyMarkup: () => W,
        isGen9Platform: () => Y.lV,
        makeVar: () => v.makeVar,
        mutateWebSettings: () => xe,
        newswirePost: () => K,
        oneTrustInit: () => J,
        safeStyles: () => p,
        scrollToElement: () => Y.PA,
        setContextItem: () => y.A,
        setCookieValue: () => Y.My,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => H,
        toScLocaleString: () => he.t,
        track: () => oe,
        useApolloClient: () => G,
        useBase: () => ue.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => pe,
        useGetTpaLinkGenerator: () => ue.gd,
        useHasReduceMotionPreference: () => ue.vx,
        useHasSaveDataPreference: () => ue.sb,
        useLazyQuery: () => v.useLazyQuery,
        useLocale: () => ue.Ym,
        useMutateState: () => S,
        useMutation: () => v.useMutation,
        useNewswirePost: () => ue.CA,
        usePreloadImg: () => ue.OG,
        usePrevious: () => ue.ZC,
        useQuery: () => V,
        useQueryParams: () => ue.sq,
        useReactiveVar: () => v.useReactiveVar,
        useRelativeTime: () => ue.Vq,
        useRockstarEventDispatcher: () => ue.OH,
        useRockstarEventSubscriber: () => ue.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => ke,
        useScApi: () => ue.Cb,
        useScAuthLinks: () => ue.N6,
        useScroll: () => de.Ll,
        useScrollTracking: () => ue.GA,
        useScrollVisibility: () => ue.JE,
        useState: () => _,
        useWindowResize: () => Ee.G4,
        webSettingsReactive: () => Pe,
        withAutoRouteTracking: () => me,
        withGtmTracking: () => ne,
        withMediaBasedProps: () => ie,
        withReactiveState: () => x,
        withRockstarGraph: () => N,
        withTranslations: () => le
      });
      var o = {};
      r.r(o), r.d(o, {
        default: () => s
      });
      var n = r(99644),
        a = r(57978);
      const i = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  a.u.refresh()
                })
              })
            },
            cleanup: () => {
              cancelAnimationFrame(e)
            }
          }
        },
        s = (...e) => e.filter(Boolean).join(" "),
        c = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var l = r(82644),
        u = r(52960);
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
      var f = r(50628);
      const p = e => {
        const t = (0, f.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var y = r(51505),
        h = r(22925),
        g = r(39793),
        m = r(93082),
        v = r(94935);
      const b = (0, y.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        _ = () => (0, m.useContext)(b),
        w = (0, y.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        S = () => (0, m.useContext)(w),
        P = ({
          children: e,
          state: t
        }) => {
          (0, v.useReactiveVar)(t);
          const r = (0, m.useCallback)(e => {
            const r = {
              ...t(),
              ...e
            };
            t(r)
          }, [t]);
          return (0, g.jsx)(b.Provider, {
            value: t(),
            children: (0, g.jsx)(w.Provider, {
              value: r,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(r) {
          return (0, g.jsx)(P, {
            state: t,
            children: (0, g.jsx)(e, {
              ...r
            })
          })
        };
      var k = r(42909),
        E = r(87172),
        O = r(99041);
      var j = r(15384);
      const T = (0, k.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var A = r(39647),
        C = r.n(A);
      var R = r(14174),
        I = r(5942);
      const M = (0, R.e)({
        sha256: I.sc
      });
      var D = r(26065);
      const L = document.documentElement.lang,
        F = (e, t) => {
          const r = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: L,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: n,
              error: a,
              ...i
            } = (0, v.useQuery)(e, r);
          return (0, m.useEffect)(() => {
            if (o && r.setTitleDataPath) {
              const e = (0, D.A)(o, r.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, m.useEffect)(() => (r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            r.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [n]), (0, m.useEffect)(() => {
            if (r.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: n,
            error: a,
            data: o,
            ...i
          }
        },
        q = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        G = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const r = e?.env ? d(e?.env) : e?.uri,
            o = {
              ...e,
              uri: r
            },
            [n] = (0, m.useState)(new v.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, k.useIntl)(),
            i = M.concat((({
              formatMessage: e
            }) => (0, j.S)(t => {
              const {
                response: r
              } = t;
              r?.errors && (r.errors = r?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const r = T[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(r)
                  }
                }
                return t
              }))
            }))({
              formatMessage: a
            }).concat((({
              token: e
            }) => (0, O.o)((t, {
              headers: r
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...r,
                  authorization: `Bearer ${o}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, v.createHttpLink)({
              ...e,
              fetch: C()
            }))(o))));
          return new v.ApolloClient({
            cache: n,
            link: i
          })
        },
        B = (0, m.createContext)(F),
        V = (e, t) => (0, m.useContext)(B)(e, t),
        z = (0, k.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: r = {}
        }) => {
          const o = G({
            graphOptions: t,
            typePolicies: r
          });
          return (0, g.jsx)(E.ec, {
            token: t?.token,
            children: (0, g.jsx)(v.ApolloProvider, {
              client: o,
              children: (0, g.jsx)(B.Provider, {
                value: F,
                children: e
              })
            })
          })
        }, q),
        N = (e, {
          env: t = "prod"
        }) => {
          const r = (0, v.makeVar)("");
          return function(o) {
            return (0, g.jsx)(z, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: r
              },
              children: (0, g.jsx)(e, {
                ...o
              })
            })
          }
        },
        U = (0, v.makeVar)({}),
        $ = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, v.useReactiveVar)(U),
            r = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            r ? document.documentElement.setAttribute($, "true") : document.documentElement.removeAttribute($)
          }, [r]), {
            bodyShouldLock: r,
            setBodyIsLocked: r => (e => U(e))({
              ...t,
              [e]: r
            })
          }
        },
        W = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        H = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        J = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const r = document.createElement("script");
            r.onload = () => t(), r.onerror = () => t(), r.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", r.setAttribute("data-domain-script", e), r.setAttribute("data-document-language", "true"), document.head.appendChild(r)
          } else t()
        };
      var K = r(83495),
        Y = r(29192),
        X = r(81471),
        Z = r.n(X);
      const ee = (0, r(68196).A)(),
        te = ee?.id,
        re = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        oe = e => {
          const t = {
            ...e,
            environment: te,
            display_type: re
          };
          Z().dataLayer({
            dataLayer: t
          })
        },
        ne = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            oe(e)
          }
        }))(e, t);
      var ae = r(34708);
      const ie = (e, t = 250) => r => ((e, t, r) => {
        const [o, n] = (0, m.useState)(t), a = e => {
          let t = e;
          const r = t?.items;
          if (r?.length) {
            const e = r.map(e => a(e));
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
          const e = (0, ae.A)(() => {
            n(a(t))
          }, r);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, g.jsx)(e, {
          ...o
        })
      })(e, r, t);
      var se = r(32214);
      const ce = v.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        le = (e, t = "default") => r => ((e, t, r) => {
          const o = ((e = "default") => {
            const t = (0, se.A)(),
              {
                data: r
              } = V(ce, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return r ? e => r?.translations.find(t => t.key === e)?.value ?? e : null
          })(r);
          return o ? (0, g.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, r, t);
      var ue = r(92272),
        de = r(88359);
      const fe = (0, y.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        pe = () => (0, m.useContext)(fe),
        ye = ({
          children: e,
          ...t
        }) => {
          const r = pe() ?? {},
            o = (0, m.useMemo)(() => ({
              ...r,
              ...t
            }), [r, t]);
          return (0, g.jsx)(fe.Provider, {
            value: o,
            children: e
          })
        };
      var he = r(94105),
        ge = r(99225);
      const me = e => t => ((e, t) => {
          const {
            pathname: r
          } = (0, ge.useLocation)();
          return (0, m.useEffect)(() => {
            oe({
              event: "trackPageview"
            })
          }, [r]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        ve = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Z().initialize(t)
        };
      var be = r(62885),
        _e = r(43091);
      const we = "rockstar-games-web";
      let Se;
      try {
        const e = be.A.get(we) ?? "";
        Se = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Se = {}
      }
      const Pe = (0, v.makeVar)(Se),
        xe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const r = {
            ...Pe() ?? {}
          };
          return r[e] = t, null === t && delete r[e], be.A.set(we, JSON.stringify(r), {
            expires: 30,
            domain: (0, _e.F)(),
            path: "/"
          }), Pe(r), r
        },
        ke = () => ({
          webSettings: (0, v.useReactiveVar)(Pe),
          webSettingsReactive: Pe,
          mutateWebSettings: xe
        });
      var Ee = r(20968);
      const Oe = e => 666 === e ? "vi" : e;
      var je = r(78242)
    },
    51177(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => D,
        __assign: () => a,
        __asyncDelegator: () => k,
        __asyncGenerator: () => x,
        __asyncValues: () => E,
        __await: () => P,
        __awaiter: () => y,
        __classPrivateFieldGet: () => R,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => I,
        __createBinding: () => g,
        __decorate: () => s,
        __disposeResources: () => F,
        __esDecorate: () => l,
        __exportStar: () => m,
        __extends: () => n,
        __generator: () => h,
        __importDefault: () => C,
        __importStar: () => A,
        __makeTemplateObject: () => O,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => d,
        __read: () => b,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => q,
        __runInitializers: () => u,
        __setFunctionName: () => f,
        __spread: () => _,
        __spreadArray: () => S,
        __spreadArrays: () => w,
        __values: () => v
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function s(e, t, r, o) {
        var n, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o);
        else
          for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function l(e, t, r, o, n, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = o.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? o.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
          var y = {};
          for (var h in o) y[h] = "access" === h ? {} : o[h];
          for (var h in o.access) y.access[h] = o.access[h];
          y.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var g = (0, r[p])("accessor" === c ? {
            get: d.get,
            set: d.set
          } : d[l], y);
          if ("accessor" === c) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g) throw new TypeError("Object expected");
            (s = i(g.get)) && (d.get = s), (s = i(g.set)) && (d.set = s), (s = i(g.init)) && n.unshift(s)
          } else(s = i(g)) && ("field" === c ? n.unshift(s) : d[l] = s)
        }
        u && Object.defineProperty(u, o.name, d), f = !0
      }

      function u(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, r, o) {
        return new(r || (r = Promise))(function(n, a) {
          function i(e) {
            try {
              c(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            try {
              c(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, s)
          }
          c((o = o.apply(e, t || [])).next())
        })
      }

      function h(e, t) {
        var r, o, n, a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return a.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = s[1], s = [0];
                    continue;
                  case 7:
                    s = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      a.label = s[1];
                      break
                    }
                    if (6 === s[0] && a.label < n[1]) {
                      a.label = n[1], n = s;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(s);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                s = t.call(e, a)
              } catch (e) {
                s = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var g = Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r);
        var n = Object.getOwnPropertyDescriptor(t, r);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, o, n)
      } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
      };

      function m(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || g(t, e, r)
      }

      function v(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          o = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && o >= e.length && (e = void 0), {
              value: e && e[o++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function b(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, n, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = a.next()).done;) i.push(o.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a)
          } finally {
            if (n) throw n.error
          }
        }
        return i
      }

      function _() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var o = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, n++) o[n] = a[i];
        return o
      }

      function S(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function P(e) {
        return this instanceof P ? (this.v = e, this) : new P(e)
      }

      function x(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, l)
          }
        }), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function i(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise(function(r, o) {
              a.push([e, t, r, o]) > 1 || s(e, t)
            })
          }, t && (o[e] = t(o[e])))
        }

        function s(e, t) {
          try {
            (r = n[e](t)).value instanceof P ? Promise.resolve(r.value.v).then(c, l) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function c(e) {
          s("next", e)
        }

        function l(e) {
          s("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
      }

      function k(e) {
        var t, r;
        return t = {}, o("next"), o("throw", function(e) {
          throw e
        }), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: P(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = v(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function o(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(o, n) {
              ! function(e, t, r, o) {
                Promise.resolve(o).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(o, n, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function O(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var j = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, T(e)
        };

      function A(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = T(e), o = 0; o < r.length; o++) "default" !== r[o] && g(t, e, r[o]);
        return j(t, e), t
      }

      function C(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function R(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function I(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function D(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var o, n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            o = t[Symbol.asyncDispose]
          }
          if (void 0 === o) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            o = t[Symbol.dispose], r && (n = o)
          }
          if ("function" != typeof o) throw new TypeError("Object not disposable.");
          n && (o = function() {
            try {
              n.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: o,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var L = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function F(e) {
        function t(t) {
          e.error = e.hasError ? new L(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, o = 0;
        return function n() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === o) return o = 0, e.stack.push(r), Promise.resolve().then(n);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return o |= 2, Promise.resolve(a).then(n, function(e) {
                return t(e), n()
              })
            } else o |= 1
          } catch (e) {
            t(e)
          }
          if (1 === o) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function q(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const G = {
        __extends: n,
        __assign: a,
        __rest: i,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: y,
        __generator: h,
        __createBinding: g,
        __exportStar: m,
        __values: v,
        __read: b,
        __spread: _,
        __spreadArrays: w,
        __spreadArray: S,
        __await: P,
        __asyncGenerator: x,
        __asyncDelegator: k,
        __asyncValues: E,
        __makeTemplateObject: O,
        __importStar: A,
        __importDefault: C,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: I,
        __classPrivateFieldIn: M,
        __addDisposableResource: D,
        __disposeResources: F,
        __rewriteRelativeImportExtension: q
      };
      r.d(t, ["default", 0, G])
    }
  }
]);