try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ccae628-aafd-4463-8a35-b9355ca629d8", e._sentryDebugIdIdentifier = "sentry-dbid-1ccae628-aafd-4463-8a35-b9355ca629d8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2853], {
    42853: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => Oe,
        InMemoryCache: () => S.D,
        Platform: () => K,
        Platforms: () => Y,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => qe.uU,
        RockstarGraphProvider: () => z,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => Le.N2,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => H,
        downloadFile: () => le,
        findPlatform: () => ee,
        generateTpaLink: () => se,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => ce,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => oe,
        getGen8Consoles: () => ue,
        getGen9Consoles: () => pe,
        getLanguageLabel: () => he,
        getUriForGraphEnv: () => i,
        gql: () => Se.J1,
        gtmInit: () => De,
        importAll: () => ie,
        isGen9Platform: () => ge,
        makeVar: () => x.UT,
        mutateWebSettings: () => $e,
        newswirePost: () => X,
        oneTrustInit: () => V,
        safeStyles: () => l,
        scrollToElement: () => W,
        setContextItem: () => u.A,
        setCookieValue: () => ae,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => Q,
        toScLocaleString: () => Me.t,
        track: () => ve,
        useApolloClient: () => D,
        useBase: () => Ae.RK,
        useBodyScrollable: () => q,
        useDataLayer: () => Ie,
        useHasReduceMotionPreference: () => Ae.vx,
        useHasSaveDataPreference: () => Ae.sb,
        useLazyQuery: () => Te._,
        useLocale: () => Ae.Ym,
        useMutateState: () => y,
        useMutation: () => Re.n,
        useNewswirePost: () => Ae.CA,
        usePreloadImg: () => Ae.OG,
        usePrevious: () => Ae.ZC,
        useQuery: () => N,
        useQueryParams: () => Ae.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => Ae.OH,
        useRockstarEventSubscriber: () => Ae.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => Fe,
        useScApi: () => Ae.Cb,
        useScAuthLinks: () => Ae.N6,
        useScroll: () => Le.Ll,
        useScrollTracking: () => Ae.GA,
        useScrollVisibility: () => Ae.JE,
        useState: () => w,
        useWindowResize: () => qe.G4,
        webSettingsReactive: () => Ge,
        withAutoRouteTracking: () => _e,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => xe,
        withReactiveState: () => k,
        withRockstarGraph: () => G,
        withTranslations: () => Ee
      });
      var o = n(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = n(60309),
        s = n(45547);
      const i = e => {
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
      var d = n(15076),
        c = n.n(d);
      const l = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(9482),
        p = n(52690),
        g = n(42295),
        h = n(71127),
        m = n(93452);
      const f = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, h.useContext)(f),
        b = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, h.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, m.q)(t);
          const n = (0, h.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, g.jsx)(f.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...n
            })
          })
        };
      var x = n(21823),
        S = n(19757),
        P = n(75102),
        C = n(88718),
        E = n(20772),
        A = n(6347);
      var L = n(83605),
        T = n(61162),
        R = n.n(T);
      var j = n(62944),
        I = n(42887);
      const O = (0, j.e)({
        sha256: I.sc
      });
      var M = n(46277);
      const U = document.documentElement.lang,
        _ = (e, t) => {
          const n = {
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
              data: o,
              loading: a,
              error: r,
              ...s
            } = (0, M.IT)(e, n);
          return (0, h.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, h.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, h.useEffect)(() => {
            if (n.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: o,
            ...s
          }
        },
        D = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? i(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [a] = (0, h.useState)(new S.D({
              typePolicies: t
            })),
            r = O.concat((({
              token: e
            }) => (0, A.o)((t, {
              headers: n
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${o}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, L.$)({
              ...e,
              fetch: R()
            }))(o)));
          return new P.R({
            cache: a,
            link: r
          })
        },
        B = (0, h.createContext)(_),
        z = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = D({
            graphOptions: t,
            typePolicies: n
          });
          return (0, g.jsx)(E.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: o,
              children: (0, g.jsx)(B.Provider, {
                value: _,
                children: e
              })
            })
          })
        },
        N = (e, t) => (0, h.useContext)(B)(e, t),
        G = (e, {
          env: t = "prod"
        }) => {
          const n = (0, x.UT)("");
          return function(o) {
            return (0, g.jsx)(z, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, g.jsx)(e, {
                ...o
              })
            })
          }
        },
        $ = (0, x.UT)({}),
        F = "data-disallow-body-scroll",
        q = e => {
          const t = (0, m.q)($),
            n = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            n ? document.documentElement.setAttribute(F, "true") : document.documentElement.removeAttribute(F)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => $(e))({
              ...t,
              [e]: n
            })
          }
        },
        V = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var X = n(89656);
      const Q = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        W = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            n = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        H = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (W({
            element: n
          }), J(n))
        },
        J = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class K {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, a = null, r = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = a, this.alias = r
        }
      }
      const Y = Object.freeze({
          pc: new K("pc", "PC Legacy", 8, "sc"),
          ps: new K("ps", "PlayStation", 3, "np", "ps"),
          ps3: new K("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new K("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new K("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new K("xbox", "Xbox", 4, "xbl"),
          xbox360: new K("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new K("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new K("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new K("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new K("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new K("applestore", "App Store", 102, "applestore"),
          googleplay: new K("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new K("app_store", "App Store", 102, "applestore"),
          googlePlay: new K("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new K("pcalt", "PC Enhanced", 22, "sc")
        }),
        Z = Object.freeze(Object.values(Y));

      function ee(e) {
        if (!e) return;
        if (e instanceof K) return e;
        const t = e.toString().toLowerCase();
        return Z.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var te = n(6306);
      const ne = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        oe = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            a = o?.substring(n.length, o.length);
          return a
        },
        ae = (e, t) => {
          e && void 0 !== t && (0, te.canStoreCookie)(e) && oe(e) !== t && (document.cookie = `${e}=${t}; domain=${ne()}; path=/;`)
        };
      var re = n(56990);
      const se = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, re.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await n(), d = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return d.searchParams.append("cid", r), d.searchParams.append("lang", o), d.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && d.searchParams.append("accessToken", i.bearerToken), d
      }, ie = e => e.keys().forEach(e), de = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ce = (e = !0) => de.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, le = e => {
        e.preventDefault();
        const t = e.currentTarget.href,
          n = (e => {
            const t = new URL(e).pathname.split("/"),
              n = t[t.length - 1];
            return decodeURIComponent(n)
          })(t);
        fetch(t, {
          method: "GET",
          headers: {}
        }).then(e => e.arrayBuffer()).then(e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            o = document.createElement("a");
          o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }).catch(e => {
          console.log(e)
        })
      }, ue = () => [Y.xbox360.name, Y.xboxone.name, Y.ps3.name, Y.ps4.name, Y.pc.name], pe = () => [Y.xboxsx.name, Y.ps5.name, Y.pcalt.name], ge = e => pe().includes(e), he = e => {
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
      var me = n(89864),
        fe = n.n(me);
      const we = (0, n(79867).A)(),
        be = we?.id,
        ye = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ve = e => {
          const t = {
            ...e,
            environment: be,
            display_type: ye
          };
          fe().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ve(e)
          }
        }))(e, t),
        xe = (e, t = 250) => n => ((e, t, n) => {
          const [o, a] = (0, h.useState)(t), r = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => r(e));
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
          return (0, h.useEffect)(() => {
            const e = c().debounce(() => {
              a(r(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, g.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Se = n(40445),
        Pe = n(26675);
      const Ce = Se.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ee = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, Pe.A)(),
              {
                data: n
              } = N(Ce, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, g.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var Ae = n(56088),
        Le = n(95342),
        Te = n(66591),
        Re = n(80701);
      const je = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ie = () => (0, h.useContext)(je),
        Oe = ({
          children: e,
          ...t
        }) => {
          const n = Ie() ?? {},
            o = (0, h.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, g.jsx)(je.Provider, {
            value: o,
            children: e
          })
        };
      var Me = n(17954),
        Ue = n(10181);
      const _e = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ue.useLocation)();
          return (0, h.useEffect)(() => {
            ve({
              event: "trackPageview"
            })
          }, [n]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        De = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          fe().initialize(t)
        };
      var Be = n(37980);
      const ze = "rockstar-games-web";
      let Ne;
      try {
        const e = Be.A.get(ze) ?? "";
        Ne = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ne = {}
      }
      const Ge = (0, x.UT)(Ne),
        $e = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Ge() ?? {}
          };
          return n[e] = t, null === t && delete n[e], Be.A.set(ze, JSON.stringify(n), {
            expires: 30,
            domain: ne(),
            path: "/"
          }), Ge(n), n
        },
        Fe = () => ({
          webSettings: (0, m.q)(Ge),
          webSettingsReactive: Ge,
          mutateWebSettings: $e
        });
      var qe = n(50437)
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => c,
        C: () => i
      });
      var o = n(56265),
        a = n.n(o),
        r = n(41972),
        s = n.n(r);
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = d.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), r = d[o >= 0 ? o : 0], i = d.find(e => e.id === r.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(a()({}, i, {
            currentSite: e
          }, r), "fallbackEnvironment")
        }
    }
  }
]);