try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd07e2e4-c82c-423e-81cc-55a6b19f8bd5", e._sentryDebugIdIdentifier = "sentry-dbid-cd07e2e4-c82c-423e-81cc-55a6b19f8bd5")
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
  [939], {
    47279(e, t, o) {
      o.d(t, {
        A: () => c,
        C: () => i
      });
      var n = o(54028),
        r = o.n(n),
        s = o(15963),
        a = o.n(s);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        d = [{
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
        c = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = d.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), s = d[n >= 0 ? n : 0], i = d.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), a()(r()({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    77678(e, t, o) {
      o.d(t, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    99800(e, t, o) {
      o.d(t, {
        OD: () => a,
        lv: () => i,
        wC: () => r,
        PE: () => v,
        rB: () => c,
        tC: () => h.t,
        yh: () => b,
        Ap: () => g,
        Xs: () => x,
        kx: () => y,
        rJ: () => S,
        pT: () => m,
        lV: () => k,
        PA: () => n,
        My: () => p,
        _e: () => f
      }), o(39793), o(69646);
      const n = ({
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
        r = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (n({
            element: o
          }), s(o))
        },
        s = e => {
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
      class a {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, r = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = s
        }
      }
      const i = Object.freeze({
          pc: new a("pc", "PC Legacy", 8, "sc"),
          ps: new a("ps", "PlayStation", 3, "np", "ps"),
          ps3: new a("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new a("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new a("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new a("xbox", "Xbox", 4, "xbl"),
          xbox360: new a("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new a("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new a("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new a("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new a("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new a("applestore", "App Store", 102, "applestore"),
          googleplay: new a("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new a("app_store", "App Store", 102, "applestore"),
          googlePlay: new a("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new a("pcalt", "PC Enhanced", 22, "sc")
        }),
        d = Object.freeze(Object.values(i));

      function c(e) {
        if (!e) return;
        if (e instanceof a) return e;
        const t = e.toString().toLowerCase();
        return d.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var l = o(23058),
        u = o(77678);
      const g = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        p = (e, t) => {
          e && void 0 !== t && (0, l.canStoreCookie)(e) && g(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,u.F)()}; path=/;`)
        };
      var h = o(32118);
      const m = e => e.keys().forEach(e),
        f = e => e.replace(/(<([^>]+)>)/gi, ""),
        w = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        b = (e = !0) => w.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        v = e => {
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
        x = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        y = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        k = e => y().includes(e),
        S = e => {
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
        }
    },
    83320(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => L.R,
        ApolloProvider: () => R.X,
        DataLayerProvider: () => ye,
        InMemoryCache: () => E.D,
        Platform: () => oe.OD,
        Platforms: () => oe.lv,
        ReactiveStateProvider: () => C,
        ResizeProvider: () => Ie.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => M.ec,
        ScrollProvider: () => fe.N2,
        coreScApiFetch: () => r.A,
        createDeferredScrollTriggerRefresh: () => a,
        cx: () => n,
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
        isGen9Platform: () => oe.lV,
        makeVar: () => T.UT,
        mutateWebSettings: () => Me,
        newswirePost: () => te,
        oneTrustInit: () => ee,
        safeStyles: () => h,
        scrollToElement: () => oe.PA,
        setContextItem: () => m.A,
        setCookieValue: () => oe.My,
        setMakeVarItem: () => f.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => ke.t,
        track: () => de,
        useApolloClient: () => V,
        useBase: () => me.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => xe,
        useGetTpaLinkGenerator: () => me.gd,
        useHasReduceMotionPreference: () => me.vx,
        useHasSaveDataPreference: () => me.sb,
        useLazyQuery: () => we._,
        useLocale: () => me.Ym,
        useMutateState: () => S,
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
        useRockstarWebSettings: () => je,
        useScApi: () => me.Cb,
        useScAuthLinks: () => me.N6,
        useScroll: () => fe.Ll,
        useScrollTracking: () => me.GA,
        useScrollVisibility: () => me.JE,
        useState: () => y,
        useWindowResize: () => Ie.G4,
        webSettingsReactive: () => Re,
        withAutoRouteTracking: () => Ce,
        withGtmTracking: () => ce,
        withMediaBasedProps: () => le,
        withReactiveState: () => P,
        withRockstarGraph: () => Q,
        withTranslations: () => he
      });
      var n = {};
      o.r(n), o.d(n, {
        default: () => i
      });
      var r = o(10959),
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
      var g = o(69646),
        p = o.n(g);
      const h = e => {
        const t = p().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var m = o(81038),
        f = o(94662),
        w = o(39793),
        b = o(93082),
        v = o(37927);
      const x = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextGet"
        }),
        y = () => (0, b.useContext)(x),
        k = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "graphContextSet"
        }),
        S = () => (0, b.useContext)(k),
        C = ({
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
          return (0, w.jsx)(x.Provider, {
            value: t(),
            children: (0, w.jsx)(k.Provider, {
              value: o,
              children: e
            })
          })
        },
        P = (e, {
          state: t
        }) => function(o) {
          return (0, w.jsx)(C, {
            state: t,
            children: (0, w.jsx)(e, {
              ...o
            })
          })
        };
      var T = o(79922),
        A = o(42909),
        E = o(13996),
        L = o(74395),
        R = o(48989),
        M = o(95753),
        j = o(99164);
      var I = o(70945);
      const O = (0, A.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var D = o(98548),
        _ = o(39647),
        q = o.n(_);
      var U = o(70735),
        F = o(5942);
      const B = (0, U.e)({
        sha256: F.sc
      });
      var z = o(87324);
      const N = document.documentElement.lang,
        G = (e, t) => {
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
              data: n,
              loading: r,
              error: s,
              ...a
            } = (0, z.IT)(e, o);
          return (0, b.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = p().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, b.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, b.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: r,
            error: s,
            data: n,
            ...a
          }
        },
        $ = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        V = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? u(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, b.useState)(new E.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, A.useIntl)(),
            a = B.concat((({
              formatMessage: e
            }) => (0, I.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = O[t?.code ?? ""];
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
            }) => (0, j.o)((t, {
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
            }).concat((e => (0, D.$)({
              ...e,
              fetch: q()
            }))(n))));
          return new L.R({
            cache: r,
            link: a
          })
        },
        X = (0, b.createContext)(G),
        J = (e, t) => (0, b.useContext)(X)(e, t),
        W = (0, A.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = V({
            graphOptions: t,
            typePolicies: o
          });
          return (0, w.jsx)(M.ec, {
            token: t?.token,
            children: (0, w.jsx)(R.X, {
              client: n,
              children: (0, w.jsx)(X.Provider, {
                value: G,
                children: e
              })
            })
          })
        }, $),
        Q = (e, {
          env: t = "prod"
        }) => {
          const o = (0, T.UT)("");
          return function(n) {
            return (0, w.jsx)(W, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, w.jsx)(e, {
                ...n
              })
            })
          }
        },
        H = (0, T.UT)({}),
        K = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, v.q)(H),
            o = Object.values(t).some(e => !!e);
          return (0, b.useEffect)(() => {
            o ? document.documentElement.setAttribute(K, "true") : document.documentElement.removeAttribute(K)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => H(e))({
              ...t,
              [e]: o
            })
          }
        },
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
        oe = o(99800),
        ne = o(81471),
        re = o.n(ne);
      const se = (0, o(47279).A)(),
        ae = se?.id,
        ie = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        de = e => {
          const t = {
            ...e,
            environment: ae,
            display_type: ie
          };
          re().dataLayer({
            dataLayer: t
          })
        },
        ce = e => t => ((e, t) => (0, w.jsx)(e, {
          ...t,
          gtmTrack: e => {
            de(e)
          }
        }))(e, t),
        le = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, b.useState)(t), s = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => s(e));
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
            const e = p().debounce(() => {
              r(s(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, w.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var ue = o(23066),
        ge = o(12879);
      const pe = ue.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        he = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, ge.A)(),
              {
                data: o
              } = J(pe, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, w.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var me = o(85997),
        fe = o(17714),
        we = o(52746),
        be = o(54812);
      const ve = (0, m.A)({
          context: (0, b.createContext)({}),
          key: "gtmDatalayer"
        }),
        xe = () => (0, b.useContext)(ve),
        ye = ({
          children: e,
          ...t
        }) => {
          const o = xe() ?? {},
            n = (0, b.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, w.jsx)(ve.Provider, {
            value: n,
            children: e
          })
        };
      var ke = o(93022),
        Se = o(36416);
      const Ce = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Se.useLocation)();
          return (0, b.useEffect)(() => {
            de({
              event: "trackPageview"
            })
          }, [o]), (0, w.jsx)(e, {
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
          re().initialize(t)
        };
      var Te = o(43568),
        Ae = o(77678);
      const Ee = "rockstar-games-web";
      let Le;
      try {
        const e = Te.A.get(Ee) ?? "";
        Le = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Le = {}
      }
      const Re = (0, T.UT)(Le),
        Me = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Re() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Te.A.set(Ee, JSON.stringify(o), {
            expires: 30,
            domain: (0, Ae.F)(),
            path: "/"
          }), Re(o), o
        },
        je = () => ({
          webSettings: (0, v.q)(Re),
          webSettingsReactive: Re,
          mutateWebSettings: Me
        });
      var Ie = o(25633)
    }
  }
]);