try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2c90ff06-96ae-4865-9299-dd6220d373f0", e._sentryDebugIdIdentifier = "sentry-dbid-2c90ff06-96ae-4865-9299-dd6220d373f0")
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
  [1177, 4809, 7190, 8870, 9096], {
    94931(e, t, r) {
      var o = r(93082),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var o, a = {},
          c = null,
          l = null;
        for (o in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, o) && !d.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    39793(e, t, r) {
      e.exports = r(94931)
    },
    24834(e, t, r) {
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
        } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = a.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
          site: t,
          subDomain: o
        }, !0)) >= 0), i = a[s >= 0 ? s : 0], d = a.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, o.A)({}, d, {
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
    19096(e, t, r) {
      r.r(t), r.d(t, {
        ApolloClient: () => v.ApolloClient,
        ApolloProvider: () => v.ApolloProvider,
        DataLayerProvider: () => ge,
        InMemoryCache: () => v.InMemoryCache,
        PAGE_THEMES: () => Te.d,
        Platform: () => K.OD,
        Platforms: () => K.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ce.uU,
        RockstarGraphProvider: () => U,
        RockstarTokenProvider: () => C.ec,
        ScrollProvider: () => ue.N2,
        coreScApiFetch: () => n.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => o,
        detectIfWeShouldAnchorSomewhere: () => K.wC,
        downloadFile: () => K.PE,
        findPlatform: () => K.rB,
        generateTpaLink: () => K.tC,
        getAccentColor: () => d,
        getBase: () => c.A,
        getCdnPrefix: () => K.yh,
        getConfigForDomain: () => l.A,
        getCookieValueByName: () => K.Ap,
        getGen8Consoles: () => K.Xs,
        getGen9Consoles: () => K.kx,
        getLanguageLabel: () => K.rJ,
        getUriForGraphEnv: () => u,
        gql: () => v.gql,
        gtmInit: () => ve,
        importAll: () => K.pT,
        isEmptyMarkup: () => Q,
        isGen9Platform: () => K.lV,
        makeVar: () => v.makeVar,
        mutateWebSettings: () => Pe,
        newswirePost: () => Y,
        oneTrustInit: () => J,
        safeStyles: () => p,
        scrollToElement: () => K.PA,
        setContextItem: () => g.A,
        setCookieValue: () => K.My,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => W,
        toScLocaleString: () => he.t,
        track: () => oe,
        useApolloClient: () => B,
        useBase: () => le.RK,
        useBodyScrollable: () => H,
        useDataLayer: () => pe,
        useGetTpaLinkGenerator: () => le.gd,
        useHasReduceMotionPreference: () => le.vx,
        useHasSaveDataPreference: () => le.sb,
        useLazyQuery: () => v.useLazyQuery,
        useLocale: () => le.Ym,
        useMutateState: () => x,
        useMutation: () => v.useMutation,
        useNewswirePost: () => le.CA,
        usePreloadImg: () => le.OG,
        usePrevious: () => le.ZC,
        useQuery: () => G,
        useQueryParams: () => le.sq,
        useReactiveVar: () => v.useReactiveVar,
        useRelativeTime: () => le.Vq,
        useRockstarEventDispatcher: () => le.OH,
        useRockstarEventSubscriber: () => le.zP,
        useRockstarToken: () => C.e9,
        useRockstarTokenPing: () => C.Es,
        useRockstarTokenReactive: () => C.bD,
        useRockstarWebSettings: () => Ae,
        useScApi: () => le.Cb,
        useScAuthLinks: () => le.N6,
        useScroll: () => ue.Ll,
        useScrollTracking: () => le.GA,
        useScrollVisibility: () => le.JE,
        useState: () => w,
        useWindowResize: () => Ce.G4,
        webSettingsReactive: () => Se,
        withAutoRouteTracking: () => ye,
        withGtmTracking: () => ne,
        withMediaBasedProps: () => se,
        withReactiveState: () => P,
        withRockstarGraph: () => z,
        withTranslations: () => ce
      });
      var o = {};
      r.r(o), r.d(o, {
        default: () => i
      });
      var n = r(52974),
        a = r(57978);
      const s = () => {
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
        i = (...e) => e.filter(Boolean).join(" "),
        d = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var c = r(12658),
        l = r(91146);
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
      var f = r(50628);
      const p = e => {
        const t = (0, f.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var g = r(17727),
        h = r(45075),
        m = r(39793),
        y = r(93082),
        v = r(89340);
      const b = (0, g.A)({
          context: (0, y.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, y.useContext)(b),
        k = (0, g.A)({
          context: (0, y.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, y.useContext)(k),
        S = ({
          children: e,
          state: t
        }) => {
          (0, v.useReactiveVar)(t);
          const r = (0, y.useCallback)(e => {
            const r = {
              ...t(),
              ...e
            };
            t(r)
          }, [t]);
          return (0, m.jsx)(b.Provider, {
            value: t(),
            children: (0, m.jsx)(k.Provider, {
              value: r,
              children: e
            })
          })
        },
        P = (e, {
          state: t
        }) => function(r) {
          return (0, m.jsx)(S, {
            state: t,
            children: (0, m.jsx)(e, {
              ...r
            })
          })
        };
      var A = r(42909),
        C = r(61295),
        T = r(26390);
      var E = r(28479);
      const O = (0, A.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var _ = r(39647),
        j = r.n(_);
      var R = r(41265),
        M = r(5942);
      const I = (0, R.e)({
        sha256: M.sc
      });
      var L = r(26065);
      const D = document.documentElement.lang,
        q = (e, t) => {
          const r = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: D,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: n,
              error: a,
              ...s
            } = (0, v.useQuery)(e, r);
          return (0, y.useEffect)(() => {
            if (o && r.setTitleDataPath) {
              const e = (0, L.A)(o, r.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, y.useEffect)(() => (r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: n
          }), () => {
            r.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [n]), (0, y.useEffect)(() => {
            if (r.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: n,
            error: a,
            data: o,
            ...s
          }
        },
        F = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        B = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const r = e?.env ? u(e?.env) : e?.uri,
            o = {
              ...e,
              uri: r
            },
            [n] = (0, y.useState)(new v.InMemoryCache({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, A.useIntl)(),
            s = I.concat((({
              formatMessage: e
            }) => (0, E.S)(t => {
              const {
                response: r
              } = t;
              r?.errors && (r.errors = r?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const r = O[t?.code ?? ""];
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
            }) => (0, T.o)((t, {
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
              fetch: j()
            }))(o))));
          return new v.ApolloClient({
            cache: n,
            link: s
          })
        },
        V = (0, y.createContext)(q),
        G = (e, t) => (0, y.useContext)(V)(e, t),
        U = (0, A.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: r = {}
        }) => {
          const o = B({
            graphOptions: t,
            typePolicies: r
          });
          return (0, m.jsx)(C.ec, {
            token: t?.token,
            children: (0, m.jsx)(v.ApolloProvider, {
              client: o,
              children: (0, m.jsx)(V.Provider, {
                value: q,
                children: e
              })
            })
          })
        }, F),
        z = (e, {
          env: t = "prod"
        }) => {
          const r = (0, v.makeVar)("");
          return function(o) {
            return (0, m.jsx)(U, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: r
              },
              children: (0, m.jsx)(e, {
                ...o
              })
            })
          }
        },
        N = (0, v.makeVar)({}),
        $ = "data-disallow-body-scroll",
        H = e => {
          const t = (0, v.useReactiveVar)(N),
            r = Object.values(t).some(e => !!e);
          return (0, y.useEffect)(() => {
            r ? document.documentElement.setAttribute($, "true") : document.documentElement.removeAttribute($)
          }, [r]), {
            bodyShouldLock: r,
            setBodyIsLocked: r => (e => N(e))({
              ...t,
              [e]: r
            })
          }
        },
        Q = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        W = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        J = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const r = document.createElement("script");
            r.onload = () => t(), r.onerror = () => t(), r.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", r.setAttribute("data-domain-script", e), r.setAttribute("data-document-language", "true"), document.head.appendChild(r)
          } else t()
        };
      var Y = r(11701),
        K = r(32454),
        X = r(3852),
        Z = r.n(X);
      const ee = (0, r(24834).A)(),
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
        ne = e => t => ((e, t) => (0, m.jsx)(e, {
          ...t,
          gtmTrack: e => {
            oe(e)
          }
        }))(e, t);
      var ae = r(34708);
      const se = (e, t = 250) => r => ((e, t, r) => {
        const [o, n] = (0, y.useState)(t), a = e => {
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
        return (0, y.useEffect)(() => {
          const e = (0, ae.A)(() => {
            n(a(t))
          }, r);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, m.jsx)(e, {
          ...o
        })
      })(e, r, t);
      var ie = r(75764);
      const de = v.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ce = (e, t = "default") => r => ((e, t, r) => {
          const o = ((e = "default") => {
            const t = (0, ie.A)(),
              {
                data: r
              } = G(de, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return r ? e => r?.translations.find(t => t.key === e)?.value ?? e : null
          })(r);
          return o ? (0, m.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, r, t);
      var le = r(56596),
        ue = r(12509);
      const fe = (0, g.A)({
          context: (0, y.createContext)({}),
          key: "gtmDatalayer"
        }),
        pe = () => (0, y.useContext)(fe),
        ge = ({
          children: e,
          ...t
        }) => {
          const r = pe() ?? {},
            o = (0, y.useMemo)(() => ({
              ...r,
              ...t
            }), [r, t]);
          return (0, m.jsx)(fe.Provider, {
            value: o,
            children: e
          })
        };
      var he = r(3339),
        me = r(99225);
      const ye = e => t => ((e, t) => {
          const {
            pathname: r
          } = (0, me.useLocation)();
          return (0, y.useEffect)(() => {
            oe({
              event: "trackPageview"
            })
          }, [r]), (0, m.jsx)(e, {
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
        we = r(31613);
      const ke = "rockstar-games-web";
      let xe;
      try {
        const e = be.A.get(ke) ?? "";
        xe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        xe = {}
      }
      const Se = (0, v.makeVar)(xe),
        Pe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const r = {
            ...Se() ?? {}
          };
          return r[e] = t, null === t && delete r[e], be.A.set(ke, JSON.stringify(r), {
            expires: 30,
            domain: (0, we.F)(),
            path: "/"
          }), Se(r), r
        },
        Ae = () => ({
          webSettings: (0, v.useReactiveVar)(Se),
          webSettingsReactive: Se,
          mutateWebSettings: Pe
        });
      var Ce = r(53634),
        Te = r(36244)
    },
    51177(e, t, r) {
      r.d(t, {
        C6: () => n,
        Cl: () => a,
        Tt: () => s,
        YH: () => d,
        fX: () => u,
        gz: () => l,
        sH: () => i
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

      function s(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function i(e, t, r, o) {
        return new(r || (r = Promise))(function(n, a) {
          function s(e) {
            try {
              d(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              d(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function d(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(s, i)
          }
          d((o = o.apply(e, t || [])).next())
        })
      }

      function d(e, t) {
        var r, o, n, a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return s.next = i(0), s.throw = i(1), s.return = i(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
          return this
        }), s;

        function i(i) {
          return function(d) {
            return function(i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s && (s = 0, i[0] && (a = 0)), a;) try {
                if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                  case 0:
                  case 1:
                    n = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                      a.label = i[1];
                      break
                    }
                    if (6 === i[0] && a.label < n[1]) {
                      a.label = n[1], n = i;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(i);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                i = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, d])
          }
        }
      }

      function c(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, n, a = r.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = a.next()).done;) s.push(o.value)
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
        return s
      }

      function l() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
        return e
      }

      function u(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }
      Object.create, Object.create
    }
  }
]);