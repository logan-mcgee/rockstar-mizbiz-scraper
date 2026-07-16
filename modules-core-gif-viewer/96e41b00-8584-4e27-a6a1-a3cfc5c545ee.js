try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "96e41b00-8584-4e27-a6a1-a3cfc5c545ee", e._sentryDebugIdIdentifier = "sentry-dbid-96e41b00-8584-4e27-a6a1-a3cfc5c545ee")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [96, 715], {
    94931(e, t, o) {
      var s = o(93082),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, o) {
        var s, d = {},
          l = null,
          c = null;
        for (s in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) n.call(t, s) && !a.hasOwnProperty(s) && (d[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === d[s] && (d[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: c,
          props: d,
          _owner: i.current
        }
      }
      t.jsx = d, t.jsxs = d
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    84320(e, t, o) {
      o.d(t, {
        YK: () => s.YK,
        JK: () => g,
        tz: () => r.A,
        QY: () => f
      });
      var s = o(14376),
        r = o(68925),
        n = o(39793),
        i = o(93082),
        a = o(30212),
        d = o(24834);
      const l = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const o = window.location.hostname.split("."),
            s = o.slice(o.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${s}; path=/;`
        },
        c = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            s = t.find(e => e.startsWith(o)),
            r = s?.substring(o.length, s.length);
          return r
        },
        u = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en",
          posix: "en_us"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de",
          posix: "de_de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es",
          posix: "es_es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419",
          posix: "es_mx"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr",
          posix: "fr_fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it",
          posix: "it_it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja",
          posix: "ja_jp"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko",
          posix: "ko_kr"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl",
          posix: "pl_pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR",
          posix: "pt_br"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru",
          posix: "ru_ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant",
          posix: "zh_tw"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN",
          posix: "zh_hans"
        }],
        p = u[0],
        m = u,
        g = () => {
          const {
            location: e
          } = window, t = (0, d.A)(), o = (e => {
            const t = m.map(e => e.subdomaincom),
              o = e.pathname.substring(1).split("/"),
              s = "detect-locals" === o[0] ? 1 : 0;
            return -1 !== t.indexOf(o[s]) ? o[s] : null
          })(e), s = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), r = p;
          let n;
          const i = `rockstarweb_lang.${t.cookieIdentifier}`,
            a = c(i);
          n = t.currentSite?.site === d.C.www ? m.find(e => e.subdomaincom === s) || m.find(e => e.subdomaincom === o) || r : m.find(e => e.iso === a) || r;
          const [, u] = ((e, t, o = !1) => {
            const s = c(e);
            return s && !o || l(e, t), [s, (r = e, e => {
              l(r, e)
            })];
            var r
          })(i, n.iso);
          return [n, u]
        };

      function f(e, t, o, s) {
        return r => {
          const d = (0, i.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const o = t ?? g()[0].iso ?? "en-US",
                  s = function(e, t) {
                    return e[t] ?? {}
                  }(e, o);
                var r;
                return {
                  rsLocale: o,
                  locale: o,
                  messages: (r = s, {
                    ...r
                  })
                }
              }(e, t)
            }(t, o)
          }, [o]);
          return (0, n.jsx)(a.A, {
            locale: d?.locale || "en-US",
            messages: {
              ...d?.messages
            },
            onError: s,
            children: d && (0, n.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }
    },
    24834(e, t, o) {
      var s = o(40415),
        r = o(50573);
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
        } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), i = n.findIndex(t => Object.entries(t.sites).findIndex(([t, s]) => s === o && (e = {
          site: t,
          subDomain: s
        }, !0)) >= 0), a = n[i >= 0 ? i : 0], d = n.find(e => e.id === a.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, r.A)((0, s.A)({}, d, {
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
        ApolloProvider: () => _.X,
        DataLayerProvider: () => Se,
        InMemoryCache: () => C.D,
        PAGE_THEMES: () => Ie.d,
        Platform: () => se.OD,
        Platforms: () => se.lv,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => De.uU,
        RockstarGraphProvider: () => Q,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => we.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => i,
        cx: () => s,
        detectIfWeShouldAnchorSomewhere: () => se.wC,
        downloadFile: () => se.PE,
        findPlatform: () => se.rB,
        generateTpaLink: () => se.tC,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => se.yh,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => se.Ap,
        getGen8Consoles: () => se.Xs,
        getGen9Consoles: () => se.kx,
        getLanguageLabel: () => se.rJ,
        getUriForGraphEnv: () => u,
        gql: () => me.J1,
        gtmInit: () => Ce,
        importAll: () => se.pT,
        isEmptyMarkup: () => Z,
        isGen9Platform: () => se.lV,
        makeVar: () => T.UT,
        mutateWebSettings: () => Le,
        newswirePost: () => oe,
        oneTrustInit: () => te,
        safeStyles: () => m,
        scrollToElement: () => se.PA,
        setContextItem: () => g.A,
        setCookieValue: () => se.My,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => Pe.t,
        track: () => le,
        useApolloClient: () => W,
        useBase: () => be.RK,
        useBodyScrollable: () => X,
        useDataLayer: () => ye,
        useGetTpaLinkGenerator: () => be.gd,
        useHasReduceMotionPreference: () => be.vx,
        useHasSaveDataPreference: () => be.sb,
        useLazyQuery: () => ve._,
        useLocale: () => be.Ym,
        useMutateState: () => y,
        useMutation: () => xe.n,
        useNewswirePost: () => be.CA,
        usePreloadImg: () => be.OG,
        usePrevious: () => be.ZC,
        useQuery: () => K,
        useQueryParams: () => be.sq,
        useReactiveVar: () => w.q,
        useRelativeTime: () => be.Vq,
        useRockstarEventDispatcher: () => be.OH,
        useRockstarEventSubscriber: () => be.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Oe,
        useScApi: () => be.Cb,
        useScAuthLinks: () => be.N6,
        useScroll: () => we.Ll,
        useScrollTracking: () => be.GA,
        useScrollVisibility: () => be.JE,
        useState: () => x,
        useWindowResize: () => De.G4,
        webSettingsReactive: () => Me,
        withAutoRouteTracking: () => Ae,
        withGtmTracking: () => ce,
        withMediaBasedProps: () => pe,
        withReactiveState: () => P,
        withRockstarGraph: () => V,
        withTranslations: () => he
      });
      var s = {};
      o.r(s), o.d(s, {
        default: () => a
      });
      var r = o(52974),
        n = o(57978);
      const i = () => {
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
        a = (...e) => e.filter(Boolean).join(" "),
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
      var p = o(50628);
      const m = e => {
        const t = (0, p.A)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var g = o(17727),
        f = o(45075),
        h = o(39793),
        b = o(93082),
        w = o(18849);
      const v = (0, g.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, b.useContext)(v),
        k = (0, g.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, b.useContext)(k),
        S = ({
          children: e,
          state: t
        }) => {
          (0, w.q)(t);
          const o = (0, b.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, h.jsx)(v.Provider, {
            value: t(),
            children: (0, h.jsx)(k.Provider, {
              value: o,
              children: e
            })
          })
        },
        P = (e, {
          state: t
        }) => function(o) {
          return (0, h.jsx)(S, {
            state: t,
            children: (0, h.jsx)(e, {
              ...o
            })
          })
        };
      var T = o(91540),
        A = o(84320),
        C = o(57822),
        E = o(32590),
        _ = o(77387),
        R = o(61295),
        j = o(26390);
      var M = o(28479);
      const L = (0, A.YK)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var O = o(70246),
        D = o(39647),
        I = o.n(D);
      var q = o(41265),
        z = o(5942);
      const U = (0, q.e)({
        sha256: z.sc
      });
      var F = o(65434),
        B = o(26065);
      const $ = document.documentElement.lang,
        N = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: $,
                ...t?.variables
              }
            },
            {
              data: s,
              loading: r,
              error: n,
              ...i
            } = (0, F.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (s && o.setTitleDataPath) {
              const e = (0, B.A)(s, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [s]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, b.useEffect)(() => {
            if (o.autoSetError && n) throw new Error(n.message)
          }, [n]), {
            loading: r,
            error: n,
            data: s,
            ...i
          }
        },
        G = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        W = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            s = {
              ...e,
              uri: o
            },
            [r] = (0, b.useState)(new C.D({
              typePolicies: t
            })),
            {
              formatMessage: n
            } = (0, A.tz)(),
            i = U.concat((({
              formatMessage: e
            }) => (0, M.S)(t => {
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
              formatMessage: n
            }).concat((({
              token: e
            }) => (0, j.o)((t, {
              headers: o
            }) => {
              const s = e?.() ?? null;
              return s ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${s}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, O.$)({
              ...e,
              fetch: I()
            }))(s))));
          return new E.R({
            cache: r,
            link: i
          })
        },
        J = (0, b.createContext)(N),
        K = (e, t) => (0, b.useContext)(J)(e, t),
        Q = (0, A.QY)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const s = W({
            graphOptions: t,
            typePolicies: o
          });
          return (0, h.jsx)(R.ec, {
            token: t?.token,
            children: (0, h.jsx)(_.X, {
              client: s,
              children: (0, h.jsx)(J.Provider, {
                value: N,
                children: e
              })
            })
          })
        }, G),
        V = (e, {
          env: t = "prod"
        }) => {
          const o = (0, T.UT)("");
          return function(s) {
            return (0, h.jsx)(Q, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, h.jsx)(e, {
                ...s
              })
            })
          }
        },
        Y = (0, T.UT)({}),
        H = "data-disallow-body-scroll",
        X = e => {
          const t = (0, w.q)(Y),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(H, "true") : document.documentElement.removeAttribute(H)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => Y(e))({
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
        se = o(32454),
        re = o(81471),
        ne = o.n(re);
      const ie = (0, o(24834).A)(),
        ae = ie?.id,
        de = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        le = e => {
          const t = {
            ...e,
            environment: ae,
            display_type: de
          };
          ne().dataLayer({
            dataLayer: t
          })
        },
        ce = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            le(e)
          }
        }))(e, t);
      var ue = o(79098);
      const pe = (e, t = 250) => o => ((e, t, o) => {
        const [s, r] = (0, b.useState)(t), n = e => {
          let t = e;
          const o = t?.items;
          if (o?.length) {
            const e = o.map(e => n(e));
            t = {
              ...t,
              items: e
            }
          }
          const s = t?.mediaQueryList;
          return s?.length ? (s.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
            t = {
              ...t,
              ...e
            }
          }), t) : t
        };
        return (0, b.useEffect)(() => {
          const e = (0, ue.A)(() => {
            r(n(t))
          }, o);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }), (0, h.jsx)(e, {
          ...s
        })
      })(e, o, t);
      var me = o(53967),
        ge = o(75764);
      const fe = me.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        he = (e, t = "default") => o => ((e, t, o) => {
          const s = ((e = "default") => {
            const t = (0, ge.A)(),
              {
                data: o
              } = K(fe, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return s ? (0, h.jsx)(e, {
            ...t,
            t: s
          }) : null
        })(e, o, t);
      var be = o(56596),
        we = o(12509),
        ve = o(58460),
        xe = o(71374);
      const ke = (0, g.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        ye = () => (0, b.useContext)(ke),
        Se = ({
          children: e,
          ...t
        }) => {
          const o = ye() ?? {},
            s = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, h.jsx)(ke.Provider, {
            value: s,
            children: e
          })
        };
      var Pe = o(3339),
        Te = o(99225);
      const Ae = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Te.useLocation)();
          return (0, b.useEffect)(() => {
            le({
              event: "trackPageview"
            })
          }, [o]), (0, h.jsx)(e, {
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
        _e = o(31613);
      const Re = "rockstar-games-web";
      let je;
      try {
        const e = Ee.A.get(Re) ?? "";
        je = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        je = {}
      }
      const Me = (0, T.UT)(je),
        Le = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Me() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ee.A.set(Re, JSON.stringify(o), {
            expires: 30,
            domain: (0, _e.F)(),
            path: "/"
          }), Me(o), o
        },
        Oe = () => ({
          webSettings: (0, w.q)(Me),
          webSettingsReactive: Me,
          mutateWebSettings: Le
        });
      var De = o(53634),
        Ie = o(36244)
    }
  }
]);