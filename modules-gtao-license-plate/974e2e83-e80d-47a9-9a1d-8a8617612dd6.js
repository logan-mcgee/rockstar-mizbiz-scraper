try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "974e2e83-e80d-47a9-9a1d-8a8617612dd6", e._sentryDebugIdIdentifier = "sentry-dbid-974e2e83-e80d-47a9-9a1d-8a8617612dd6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [637, 7830], {
    79867(e, t, r) {
      r.d(t, {
        A: () => l,
        C: () => s
      });
      var n = r(56265),
        o = r.n(n),
        a = r(41972),
        i = r.n(a);
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        c = [{
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
        l = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = c.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === r && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), a = c[n >= 0 ? n : 0], s = c.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(o()({}, s, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    60637(e, t, r) {
      r.r(t), r.d(t, {
        ApolloClient: () => j.R,
        ApolloProvider: () => E.X,
        DataLayerProvider: () => Fe,
        InMemoryCache: () => k.D,
        Platform: () => re,
        Platforms: () => ne,
        ReactiveStateProvider: () => _,
        ResizeProvider: () => Je.uU,
        RockstarGraphProvider: () => V,
        RockstarTokenProvider: () => O.ec,
        ScrollProvider: () => Ie.N2,
        coreScApiFetch: () => n.A,
        cx: () => o,
        detectIfWeShouldAnchorSomewhere: () => ee,
        downloadFile: () => he,
        findPlatform: () => ae,
        generateTpaLink: () => de.t,
        getAccentColor: () => a,
        getBase: () => i.A,
        getCdnPrefix: () => pe,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => ce,
        getGen8Consoles: () => ge,
        getGen9Consoles: () => ye,
        getLanguageLabel: () => be,
        getUriForGraphEnv: () => c,
        gql: () => Ee.J1,
        gtmInit: () => Ge,
        importAll: () => ue,
        isGen9Platform: () => me,
        makeVar: () => S.UT,
        mutateWebSettings: () => Xe,
        newswirePost: () => H,
        oneTrustInit: () => K,
        safeStyles: () => u,
        scrollToElement: () => Z,
        setContextItem: () => f.A,
        setCookieValue: () => le,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => qe.t,
        track: () => Pe,
        useApolloClient: () => N,
        useBase: () => Ae.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => Me,
        useGetTpaLinkGenerator: () => Ae.gd,
        useHasReduceMotionPreference: () => Ae.vx,
        useHasSaveDataPreference: () => Ae.sb,
        useLazyQuery: () => Re._,
        useLocale: () => Ae.Ym,
        useMutateState: () => v,
        useMutation: () => Le.n,
        useNewswirePost: () => Ae.CA,
        usePreloadImg: () => Ae.OG,
        usePrevious: () => Ae.ZC,
        useQuery: () => $,
        useQueryParams: () => Ae.sq,
        useReactiveVar: () => y.q,
        useRelativeTime: () => Ae.Vq,
        useRockstarEventDispatcher: () => Ae.OH,
        useRockstarEventSubscriber: () => Ae.zP,
        useRockstarToken: () => O.e9,
        useRockstarTokenPing: () => O.Es,
        useRockstarTokenReactive: () => O.bD,
        useRockstarWebSettings: () => We,
        useScApi: () => Ae.Cb,
        useScAuthLinks: () => Ae.N6,
        useScroll: () => Ie.Ll,
        useScrollTracking: () => Ae.GA,
        useScrollVisibility: () => Ae.JE,
        useState: () => b,
        useWindowResize: () => Je.G4,
        webSettingsReactive: () => Ve,
        withAutoRouteTracking: () => ze,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => je,
        withReactiveState: () => x,
        withRockstarGraph: () => X,
        withTranslations: () => Ce
      });
      var n = r(60099);
      const o = (...e) => e.filter(Boolean).join(" "),
        a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var i = r(60309),
        s = r(45547);
      const c = e => {
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
      var l = r(10336),
        d = r.n(l);
      const u = e => {
        const t = d().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var f = r(9482),
        p = r(52690),
        h = r(42295),
        g = r(71127),
        y = r(93452);
      const m = (0, f.A)({
          context: (0, g.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, g.useContext)(m),
        w = (0, f.A)({
          context: (0, g.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, g.useContext)(w),
        _ = ({
          children: e,
          state: t
        }) => {
          (0, y.q)(t);
          const r = (0, g.useCallback)(e => {
            const r = {
              ...t(),
              ...e
            };
            t(r)
          }, [t]);
          return (0, h.jsx)(m.Provider, {
            value: t(),
            children: (0, h.jsx)(w.Provider, {
              value: r,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(r) {
          return (0, h.jsx)(_, {
            state: t,
            children: (0, h.jsx)(e, {
              ...r
            })
          })
        };
      var S = r(21823),
        P = r(42909),
        k = r(19757),
        j = r(75102),
        E = r(88718),
        O = r(20772),
        T = r(6347);
      var C = r(19526);
      const A = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var I = r(83605),
        R = r(61162),
        L = r.n(R);
      var D = r(62944),
        M = r(42887);
      const F = (0, D.e)({
        sha256: M.sc
      });
      var q = r(46277);
      const U = document.documentElement.lang,
        z = (e, t) => {
          const r = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: U,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: o,
              error: a,
              ...i
            } = (0, q.IT)(e, r);
          return (0, g.useEffect)(() => {
            if (n && r.setTitleDataPath) {
              const e = d().get(n, r.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, g.useEffect)(() => (r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: o
          }), () => {
            r.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [o]), (0, g.useEffect)(() => {
            if (r.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: o,
            error: a,
            data: n,
            ...i
          }
        },
        G = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        N = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const r = e?.env ? c(e?.env) : e?.uri,
            n = {
              ...e,
              uri: r
            },
            [o] = (0, g.useState)(new k.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, P.useIntl)(),
            i = F.concat((({
              formatMessage: e
            }) => (0, C.S)(t => {
              const {
                response: r
              } = t;
              r?.errors && (r.errors = r?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const r = A[t?.code ?? ""];
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
              const n = e?.() ?? null;
              return n ? {
                headers: {
                  ...r,
                  authorization: `Bearer ${n}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, I.$)({
              ...e,
              fetch: L()
            }))(n))));
          return new j.R({
            cache: o,
            link: i
          })
        },
        B = (0, g.createContext)(z),
        $ = (e, t) => (0, g.useContext)(B)(e, t),
        V = (0, P.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: r = {}
        }) => {
          const n = N({
            graphOptions: t,
            typePolicies: r
          });
          return (0, h.jsx)(O.ec, {
            token: t?.token,
            children: (0, h.jsx)(E.X, {
              client: n,
              children: (0, h.jsx)(B.Provider, {
                value: z,
                children: e
              })
            })
          })
        }, G),
        X = (e, {
          env: t = "prod"
        }) => {
          const r = (0, S.UT)("");
          return function(n) {
            return (0, h.jsx)(V, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: r
              },
              children: (0, h.jsx)(e, {
                ...n
              })
            })
          }
        },
        W = (0, S.UT)({}),
        J = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, y.q)(W),
            r = Object.values(t).some(e => !!e);
          return (0, g.useEffect)(() => {
            r ? document.documentElement.setAttribute(J, "true") : document.documentElement.removeAttribute(J)
          }, [r]), {
            bodyShouldLock: r,
            setBodyIsLocked: r => (e => W(e))({
              ...t,
              [e]: r
            })
          }
        },
        K = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const r = document.createElement("script");
            r.onload = () => t(), r.onerror = () => t(), r.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", r.setAttribute("data-domain-script", e), r.setAttribute("data-document-language", "true"), document.head.appendChild(r)
          } else t()
        };
      var H = r(89656);
      const Y = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Z = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            r = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", r))
            };
          document.addEventListener("scroll", r)
        },
        ee = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            r = document.getElementById(t.get(e) || e);
          r && (Z({
            element: r
          }), te(r))
        },
        te = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const r = e?.querySelectorAll(t.join(", "));
            if (r?.length) {
              const e = [...r].find(e => !e?.hasAttribute("disabled"));
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
        constructor(e, t, r, n, o = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = r, this.onlineService = n, this.aliasOnlineService = o, this.alias = a
        }
      }
      const ne = Object.freeze({
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
        oe = Object.freeze(Object.values(ne));

      function ae(e) {
        if (!e) return;
        if (e instanceof re) return e;
        const t = e.toString().toLowerCase();
        return oe.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ie = r(6306);
      const se = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ce = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            n = t.find(e => e.startsWith(r)),
            o = n?.substring(r.length, n.length);
          return o
        },
        le = (e, t) => {
          e && void 0 !== t && (0, ie.canStoreCookie)(e) && ce(e) !== t && (document.cookie = `${e}=${t}; domain=${se()}; path=/;`)
        };
      var de = r(68466);
      const ue = e => e.keys().forEach(e),
        fe = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        pe = (e = !0) => fe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        he = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            r = (e => {
              const t = new URL(e).pathname.split("/"),
                r = t[t.length - 1];
              return decodeURIComponent(r)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              n = document.createElement("a");
            n.href = t, n.setAttribute("download", r), document.body.appendChild(n), n.click(), document.body.removeChild(n)
          }).catch(e => {
            console.log(e)
          })
        },
        ge = () => [ne.xbox360.name, ne.xboxone.name, ne.ps3.name, ne.ps4.name, ne.pc.name],
        ye = () => [ne.xboxsx.name, ne.ps5.name, ne.pcalt.name],
        me = e => ye().includes(e),
        be = e => {
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
      var we = r(89864),
        ve = r.n(we);
      const _e = (0, r(79867).A)(),
        xe = _e?.id,
        Se = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Pe = e => {
          const t = {
            ...e,
            environment: xe,
            display_type: Se
          };
          ve().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Pe(e)
          }
        }))(e, t),
        je = (e, t = 250) => r => ((e, t, r) => {
          const [n, o] = (0, g.useState)(t), a = e => {
            let t = e;
            const r = t?.items;
            if (r?.length) {
              const e = r.map(e => a(e));
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
          return (0, g.useEffect)(() => {
            const e = d().debounce(() => {
              o(a(t))
            }, r);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...n
          })
        })(e, r, t);
      var Ee = r(40445),
        Oe = r(26675);
      const Te = Ee.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ce = (e, t = "default") => r => ((e, t, r) => {
          const n = ((e = "default") => {
            const t = (0, Oe.A)(),
              {
                data: r
              } = $(Te, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return r ? e => r?.translations.find(t => t.key === e)?.value ?? e : null
          })(r);
          return n ? (0, h.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, r, t);
      var Ae = r(57301),
        Ie = r(95342),
        Re = r(66591),
        Le = r(80701);
      const De = (0, f.A)({
          context: (0, g.createContext)({}),
          key: "gtmDatalayer"
        }),
        Me = () => (0, g.useContext)(De),
        Fe = ({
          children: e,
          ...t
        }) => {
          const r = Me() ?? {},
            n = (0, g.useMemo)(() => ({
              ...r,
              ...t
            }), [r, t]);
          return (0, h.jsx)(De.Provider, {
            value: n,
            children: e
          })
        };
      var qe = r(17954),
        Ue = r(10181);
      const ze = e => t => ((e, t) => {
          const {
            pathname: r
          } = (0, Ue.useLocation)();
          return (0, g.useEffect)(() => {
            Pe({
              event: "trackPageview"
            })
          }, [r]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        Ge = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ve().initialize(t)
        };
      var Ne = r(37980);
      const Be = "rockstar-games-web";
      let $e;
      try {
        const e = Ne.A.get(Be) ?? "";
        $e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $e = {}
      }
      const Ve = (0, S.UT)($e),
        Xe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const r = {
            ...Ve() ?? {}
          };
          return r[e] = t, null === t && delete r[e], Ne.A.set(Be, JSON.stringify(r), {
            expires: 30,
            domain: se(),
            path: "/"
          }), Ve(r), r
        },
        We = () => ({
          webSettings: (0, y.q)(Ve),
          webSettingsReactive: Ve,
          mutateWebSettings: Xe
        });
      var Je = r(50437)
    },
    78322(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => D,
        __assign: () => a,
        __asyncDelegator: () => k,
        __asyncGenerator: () => P,
        __asyncValues: () => j,
        __await: () => S,
        __awaiter: () => h,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldIn: () => L,
        __classPrivateFieldSet: () => R,
        __createBinding: () => y,
        __decorate: () => s,
        __disposeResources: () => F,
        __esDecorate: () => l,
        __exportStar: () => m,
        __extends: () => o,
        __generator: () => g,
        __importDefault: () => A,
        __importStar: () => C,
        __makeTemplateObject: () => E,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => u,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => q,
        __runInitializers: () => d,
        __setFunctionName: () => f,
        __spread: () => v,
        __spreadArray: () => x,
        __spreadArrays: () => _,
        __values: () => b,
        default: () => U
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function s(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function l(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = n.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", d = !t && e ? n.static ? e : e.prototype : null, u = t || (d ? Object.getOwnPropertyDescriptor(d, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
          var h = {};
          for (var g in n) h[g] = "access" === g ? {} : n[g];
          for (var g in n.access) h.access[g] = n.access[g];
          h.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var y = (0, r[p])("accessor" === c ? {
            get: u.get,
            set: u.set
          } : u[l], h);
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (s = i(y.get)) && (u.get = s), (s = i(y.set)) && (u.set = s), (s = i(y.init)) && o.unshift(s)
          } else(s = i(y)) && ("field" === c ? o.unshift(s) : u[l] = s)
        }
        d && Object.defineProperty(d, n.name, u), f = !0
      }

      function d(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
      }

      function u(e) {
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

      function h(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
          function i(e) {
            try {
              c(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            try {
              c(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, s)
          }
          c((n = n.apply(e, t || [])).next())
        })
      }

      function g(e, t) {
        var r, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
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
                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                  case 0:
                  case 1:
                    o = s;
                    break;
                  case 4:
                    return a.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                      a.label = s[1];
                      break
                    }
                    if (6 === s[0] && a.label < o[1]) {
                      a.label = o[1], o = s;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(s);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                s = t.call(e, a)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = o = 0
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
      var y = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var o = Object.getOwnPropertyDescriptor(t, r);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, o)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function m(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || y(t, e, r)
      }

      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
        return e
      }

      function _() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
        return n
      }

      function x(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e)
      }

      function P(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, l)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              a.push([e, t, r, n]) > 1 || s(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
          try {
            (r = o[e](t)).value instanceof S ? Promise.resolve(r.value.v).then(c, l) : d(a[0][2], r)
          } catch (e) {
            d(a[0][3], e)
          }
          var r
        }

        function c(e) {
          s("next", e)
        }

        function l(e) {
          s("throw", e)
        }

        function d(e, t) {
          e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
      }

      function k(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: S(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function j(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = b(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(n, o) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(n, o, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function E(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var O = Object.create ? function(e, t) {
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

      function C(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = T(e), n = 0; n < r.length; n++) "default" !== r[n] && y(t, e, r[n]);
        return O(t, e), t
      }

      function A(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function I(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function R(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function L(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function D(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, o;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          o && (n = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var M = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function F(e) {
        function t(t) {
          e.error = e.hasError ? new M(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function o() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(a).then(o, function(e) {
                return t(e), o()
              })
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function q(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const U = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: d,
        __propKey: u,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: h,
        __generator: g,
        __createBinding: y,
        __exportStar: m,
        __values: b,
        __read: w,
        __spread: v,
        __spreadArrays: _,
        __spreadArray: x,
        __await: S,
        __asyncGenerator: P,
        __asyncDelegator: k,
        __asyncValues: j,
        __makeTemplateObject: E,
        __importStar: C,
        __importDefault: A,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: R,
        __classPrivateFieldIn: L,
        __addDisposableResource: D,
        __disposeResources: F,
        __rewriteRelativeImportExtension: q
      }
    }
  }
]);