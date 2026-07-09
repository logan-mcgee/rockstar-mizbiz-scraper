try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "70d5202c-c1b1-45ca-acbf-3e88ae979c4d", e._sentryDebugIdIdentifier = "sentry-dbid-70d5202c-c1b1-45ca-acbf-3e88ae979c4d")
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
  [5509, 7890], {
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
    55509(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => A.R,
        ApolloProvider: () => _.X,
        DataLayerProvider: () => ke,
        InMemoryCache: () => E.D,
        PAGE_THEMES: () => je.d,
        Platform: () => oe.OD,
        Platforms: () => oe.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Le.uU,
        RockstarGraphProvider: () => W,
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
        getBase: () => l.A,
        getCdnPrefix: () => oe.yh,
        getConfigForDomain: () => c.A,
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
        mutateWebSettings: () => Me,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => f,
        scrollToElement: () => oe.PA,
        setContextItem: () => m.A,
        setCookieValue: () => oe.My,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => xe.t,
        track: () => de,
        useApolloClient: () => $,
        useBase: () => he.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => ye,
        useGetTpaLinkGenerator: () => he.gd,
        useHasReduceMotionPreference: () => he.vx,
        useHasSaveDataPreference: () => he.sb,
        useLazyQuery: () => we._,
        useLocale: () => he.Ym,
        useMutateState: () => x,
        useMutation: () => be.n,
        useNewswirePost: () => he.CA,
        usePreloadImg: () => he.OG,
        usePrevious: () => he.ZC,
        useQuery: () => J,
        useQueryParams: () => he.sq,
        useReactiveVar: () => b.q,
        useRelativeTime: () => he.Vq,
        useRockstarEventDispatcher: () => he.OH,
        useRockstarEventSubscriber: () => he.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Oe,
        useScApi: () => he.Cb,
        useScAuthLinks: () => he.N6,
        useScroll: () => pe.Ll,
        useScrollTracking: () => he.GA,
        useScrollVisibility: () => he.JE,
        useState: () => y,
        useWindowResize: () => Le.G4,
        webSettingsReactive: () => Re,
        withAutoRouteTracking: () => Te,
        withGtmTracking: () => le,
        withMediaBasedProps: () => ce,
        withReactiveState: () => T,
        withRockstarGraph: () => Q,
        withTranslations: () => me
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
      var g = o(40283);
      const f = e => {
        const t = (0, g.clone)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var m = o(81038),
        h = o(94662),
        p = o(39793),
        w = o(93082),
        b = o(37927);
      const v = (0, m.A)({
          context: (0, w.createContext)({}),
          key: "graphContextGet"
        }),
        y = () => (0, w.useContext)(v),
        k = (0, m.A)({
          context: (0, w.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, w.useContext)(k),
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
        A = o(74395),
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
        D = o.n(I);
      var q = o(70735),
        F = o(5942);
      const U = (0, q.e)({
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
            [n] = (0, w.useState)(new E.D({
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
              fetch: D()
            }))(r))));
          return new A.R({
            cache: n,
            link: a
          })
        },
        V = (0, w.createContext)(N),
        J = (e, t) => (0, w.useContext)(V)(e, t),
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
      var te = o(22636),
        oe = o(25847),
        re = o(81471),
        ne = o.n(re);
      const se = (0, o(47279).A)(),
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
        le = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            de(e)
          }
        }))(e, t),
        ce = (e, t = 250) => o => ((e, t, o) => {
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
      var ue = o(23066),
        ge = o(12879);
      const fe = ue.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        me = (e, t = "default") => o => ((e, t, o) => {
          const r = ((e = "default") => {
            const t = (0, ge.A)(),
              {
                data: o
              } = J(fe, {
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
        pe = o(17714),
        we = o(52746),
        be = o(54812);
      const ve = (0, m.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        ye = () => (0, w.useContext)(ve),
        ke = ({
          children: e,
          ...t
        }) => {
          const o = ye() ?? {},
            r = (0, w.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, p.jsx)(ve.Provider, {
            value: r,
            children: e
          })
        };
      var xe = o(93022),
        Se = o(36416);
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
      var Ce = o(43568),
        Ee = o(77678);
      const Ae = "rockstar-games-web";
      let _e;
      try {
        const e = Ce.A.get(Ae) ?? "";
        _e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        _e = {}
      }
      const Re = (0, P.UT)(_e),
        Me = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Re() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ce.A.set(Ae, JSON.stringify(o), {
            expires: 30,
            domain: (0, Ee.F)(),
            path: "/"
          }), Re(o), o
        },
        Oe = () => ({
          webSettings: (0, b.q)(Re),
          webSettingsReactive: Re,
          mutateWebSettings: Me
        });
      var Le = o(25633),
        je = o(87605)
    }
  }
]);