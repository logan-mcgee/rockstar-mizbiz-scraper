try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d391f994-d4b8-4bf8-9159-94feb1296930", e._sentryDebugIdIdentifier = "sentry-dbid-d391f994-d4b8-4bf8-9159-94feb1296930")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [940], {
    7279(e, t, o) {
      o.d(t, {
        A: () => s,
        C: () => a
      });
      var n = o(283);
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        r = [{
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
        s = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = r.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), s = r[a >= 0 ? a : 0], i = r.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, n.omit)((0, n.merge)({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    8940(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => A.R,
        ApolloProvider: () => L.X,
        DataLayerProvider: () => ze,
        InMemoryCache: () => T.D,
        PAGE_THEMES: () => pe,
        Platform: () => re,
        Platforms: () => se,
        ReactiveStateProvider: () => S,
        ResizeProvider: () => Ye.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => R.ec,
        ScrollProvider: () => De.N2,
        coreScApiFetch: () => a.A,
        createDeferredScrollTriggerRefresh: () => s,
        cx: () => n,
        detectIfWeShouldAnchorSomewhere: () => ne,
        downloadFile: () => we,
        findPlatform: () => de,
        generateTpaLink: () => he.t,
        getAccentColor: () => d,
        getBase: () => l.A,
        getCdnPrefix: () => be,
        getConfigForDomain: () => c.A,
        getCookieValueByName: () => ue,
        getGen8Consoles: () => ve,
        getGen9Consoles: () => xe,
        getLanguageLabel: () => ke,
        getUriForGraphEnv: () => u,
        gql: () => Me.J1,
        gtmInit: () => Ve,
        importAll: () => me,
        isEmptyMarkup: () => Y,
        isGen9Platform: () => ye,
        makeVar: () => C.UT,
        mutateWebSettings: () => He,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => p,
        scrollToElement: () => oe,
        setContextItem: () => h.A,
        setCookieValue: () => ge,
        setMakeVarItem: () => m.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => Ne.t,
        track: () => Ae,
        useApolloClient: () => $,
        useBase: () => qe.RK,
        useBodyScrollable: () => K,
        useDataLayer: () => Fe,
        useGetTpaLinkGenerator: () => qe.gd,
        useHasReduceMotionPreference: () => qe.vx,
        useHasSaveDataPreference: () => qe.sb,
        useLazyQuery: () => Ue._,
        useLocale: () => qe.Ym,
        useMutateState: () => k,
        useMutation: () => _e.n,
        useNewswirePost: () => qe.CA,
        usePreloadImg: () => qe.OG,
        usePrevious: () => qe.ZC,
        useQuery: () => X,
        useQueryParams: () => qe.sq,
        useReactiveVar: () => w.q,
        useRelativeTime: () => qe.Vq,
        useRockstarEventDispatcher: () => qe.OH,
        useRockstarEventSubscriber: () => qe.zP,
        useRockstarToken: () => R.e9,
        useRockstarTokenPing: () => R.Es,
        useRockstarTokenReactive: () => R.bD,
        useRockstarWebSettings: () => Ke,
        useScApi: () => qe.Cb,
        useScAuthLinks: () => qe.N6,
        useScroll: () => De.Ll,
        useScrollTracking: () => qe.GA,
        useScrollVisibility: () => qe.JE,
        useState: () => x,
        useWindowResize: () => Ye.G4,
        webSettingsReactive: () => Qe,
        withAutoRouteTracking: () => $e,
        withGtmTracking: () => Le,
        withMediaBasedProps: () => Re,
        withReactiveState: () => P,
        withRockstarGraph: () => J,
        withTranslations: () => Oe
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var a = o(959),
        r = o(7978);
      const s = () => {
          let e = 0;
          return {
            refresh: () => {
              cancelAnimationFrame(e), e = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  r.u.refresh()
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
      var l = o(7473),
        c = o(9991);
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
      var g = o(283);
      const p = e => {
        const t = (0, g.clone)(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var h = o(1038),
        m = o(4662),
        f = o(9793),
        b = o(3082),
        w = o(7927);
      const v = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        x = () => (0, b.useContext)(v),
        y = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        k = () => (0, b.useContext)(y),
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
          return (0, f.jsx)(v.Provider, {
            value: t(),
            children: (0, f.jsx)(y.Provider, {
              value: o,
              children: e
            })
          })
        },
        P = (e, {
          state: t
        }) => function(o) {
          return (0, f.jsx)(S, {
            state: t,
            children: (0, f.jsx)(e, {
              ...o
            })
          })
        };
      var C = o(9922),
        E = o(2909),
        T = o(3996),
        A = o(4395),
        L = o(8989),
        R = o(5753),
        M = o(9164);
      var j = o(945);
      const I = (0, E.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var O = o(8548),
        q = o(9647),
        D = o.n(q);
      var U = o(735),
        _ = o(5942);
      const B = (0, U.e)({
        sha256: _.sc
      });
      var F = o(7324);
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
              data: n,
              loading: a,
              error: r,
              ...s
            } = (0, F.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = (0, g.get)(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, b.useEffect)(() => {
            if (o.autoSetError && r) throw new Error(r.message)
          }, [r]), {
            loading: a,
            error: r,
            data: n,
            ...s
          }
        },
        G = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        $ = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, b.useState)(new T.D({
              typePolicies: t
            })),
            {
              formatMessage: r
            } = (0, E.useIntl)(),
            s = B.concat((({
              formatMessage: e
            }) => (0, j.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = I[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(o)
                  }
                }
                return t
              }))
            }))({
              formatMessage: r
            }).concat((({
              token: e
            }) => (0, M.o)((t, {
              headers: o
            }) => {
              const n = e?.() ?? null;
              return n ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${n}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, O.$)({
              ...e,
              fetch: D()
            }))(n))));
          return new A.R({
            cache: a,
            link: s
          })
        },
        V = (0, b.createContext)(N),
        X = (e, t) => (0, b.useContext)(V)(e, t),
        W = (0, E.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = $({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(R.ec, {
            token: t?.token,
            children: (0, f.jsx)(L.X, {
              client: n,
              children: (0, f.jsx)(V.Provider, {
                value: N,
                children: e
              })
            })
          })
        }, G),
        J = (e, {
          env: t = "prod"
        }) => {
          const o = (0, C.UT)("");
          return function(n) {
            return (0, f.jsx)(W, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, f.jsx)(e, {
                ...n
              })
            })
          }
        },
        Q = (0, C.UT)({}),
        H = "data-disallow-body-scroll",
        K = e => {
          const t = (0, w.q)(Q),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(H, "true") : document.documentElement.removeAttribute(H)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => Q(e))({
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
      var te = o(2636);
      const oe = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            o = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        ne = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (oe({
            element: o
          }), ae(o))
        },
        ae = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const o = e?.querySelectorAll(t.join(", "));
            if (o?.length) {
              const e = [...o].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class re {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, a = null, r = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = a, this.alias = r
        }
      }
      const se = Object.freeze({
          pc: new re("pc", "PC Legacy", 8, "sc"),
          ps: new re("ps", "PlayStation", 3, "np", "ps"),
          ps3: new re("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new re("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new re("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new re("xbox", "Xbox", 4, "xbl"),
          xbox360: new re("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new re("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new re("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new re("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new re("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new re("applestore", "App Store", 102, "applestore"),
          googleplay: new re("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new re("app_store", "App Store", 102, "applestore"),
          googlePlay: new re("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new re("pcalt", "PC Enhanced", 22, "sc")
        }),
        ie = Object.freeze(Object.values(se));

      function de(e) {
        if (!e) return;
        if (e instanceof re) return e;
        const t = e.toString().toLowerCase();
        return ie.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var le = o(3058);
      const ce = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ue = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        ge = (e, t) => {
          e && void 0 !== t && (0, le.canStoreCookie)(e) && ue(e) !== t && (document.cookie = `${e}=${t}; domain=${ce()}; path=/;`)
        },
        pe = {
          BL: "bl"
        };
      Object.values(pe), pe.BL;
      var he = o(2118);
      const me = e => e.keys().forEach(e),
        fe = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        be = (e = !0) => fe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        we = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            o = (e => {
              const t = new URL(e).pathname.split("/"),
                o = t[t.length - 1];
              return decodeURIComponent(o)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              n = document.createElement("a");
            n.href = t, n.setAttribute("download", o), document.body.appendChild(n), n.click(), document.body.removeChild(n)
          }).catch(e => {
            console.log(e)
          })
        },
        ve = () => [se.xbox360.name, se.xboxone.name, se.ps3.name, se.ps4.name, se.pc.name],
        xe = () => [se.xboxsx.name, se.ps5.name, se.pcalt.name],
        ye = e => xe().includes(e),
        ke = e => {
          const t = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return t.has(e) ? t.get(e) : e
        };
      var Se = o(1471),
        Pe = o.n(Se);
      const Ce = (0, o(7279).A)(),
        Ee = Ce?.id,
        Te = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ae = e => {
          const t = {
            ...e,
            environment: Ee,
            display_type: Te
          };
          Pe().dataLayer({
            dataLayer: t
          })
        },
        Le = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ae(e)
          }
        }))(e, t),
        Re = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, b.useState)(t), r = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => r(e));
              t = {
                ...t,
                items: e
              }
            }
            const n = t?.mediaQueryList;
            return n?.length ? (n.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
              t = {
                ...t,
                ...e
              }
            }), t) : t
          };
          return (0, b.useEffect)(() => {
            const e = (0, g.debounce)(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, f.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Me = o(3066),
        je = o(2879);
      const Ie = Me.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Oe = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, je.A)(),
              {
                data: o
              } = X(Ie, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, f.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var qe = o(5997),
        De = o(7714),
        Ue = o(2746),
        _e = o(4812);
      const Be = (0, h.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        Fe = () => (0, b.useContext)(Be),
        ze = ({
          children: e,
          ...t
        }) => {
          const o = Fe() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Be.Provider, {
            value: n,
            children: e
          })
        };
      var Ne = o(3022),
        Ge = o(6416);
      const $e = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ge.useLocation)();
          return (0, b.useEffect)(() => {
            Ae({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        Ve = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Pe().initialize(t)
        };
      var Xe = o(3568);
      const We = "rockstar-games-web";
      let Je;
      try {
        const e = Xe.A.get(We) ?? "";
        Je = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Je = {}
      }
      const Qe = (0, C.UT)(Je),
        He = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Qe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Xe.A.set(We, JSON.stringify(o), {
            expires: 30,
            domain: ce(),
            path: "/"
          }), Qe(o), o
        },
        Ke = () => ({
          webSettings: (0, w.q)(Qe),
          webSettingsReactive: Qe,
          mutateWebSettings: He
        });
      var Ye = o(5633)
    }
  }
]);