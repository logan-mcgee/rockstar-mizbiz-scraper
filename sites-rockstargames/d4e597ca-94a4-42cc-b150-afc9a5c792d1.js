try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d4e597ca-94a4-42cc-b150-afc9a5c792d1", e._sentryDebugIdIdentifier = "sentry-dbid-d4e597ca-94a4-42cc-b150-afc9a5c792d1")
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
  [8045], {
    70426: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => Ee,
        GraphOperationsProvider: () => A._y,
        InMemoryCache: () => S.D,
        Platform: () => W,
        Platforms: () => H,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => Be.uU,
        RockstarGraphProvider: () => U,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => Pe.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => X,
        downloadFile: () => se,
        findPlatform: () => J,
        generateTpaLink: () => oe,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => re,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => Z,
        getGen8Consoles: () => ie,
        getGen9Consoles: () => de,
        getLanguageLabel: () => ce,
        getUriForGraphEnv: () => i,
        gql: () => ye.J1,
        gtmInit: () => je,
        importAll: () => ne,
        isGen9Platform: () => le,
        makeVar: () => x.UT,
        mutateWebSettings: () => Ue,
        newswirePost: () => F,
        oneTrustInit: () => $,
        safeStyles: () => c,
        scrollToElement: () => q,
        setContextItem: () => u.A,
        setCookieValue: () => ee,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => z,
        toScLocaleString: () => Te.t,
        track: () => we,
        useApolloClient: () => M,
        useBase: () => Se.RK,
        useBodyScrollable: () => G,
        useDataLayer: () => Ae,
        useHasReduceMotionPreference: () => Se.vx,
        useHasSaveDataPreference: () => Se.sb,
        useLocale: () => Se.Ym,
        useMutateState: () => y,
        useMutation: () => A.n_,
        useNewswirePost: () => Se.CA,
        usePreloadImg: () => Se.OG,
        usePrevious: () => Se.ZC,
        useQuery: () => A.IT,
        useQueryParams: () => Se.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => Se.OH,
        useRockstarEventSubscriber: () => Se.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => De,
        useScApi: () => Se.Cb,
        useScAuthLinks: () => Se.N6,
        useScroll: () => Pe.Ll,
        useScrollTracking: () => Se.GA,
        useState: () => f,
        useWindowResize: () => Be.G4,
        webSettingsReactive: () => Me,
        withAutoRouteTracking: () => Re,
        withGtmTracking: () => fe,
        withMediaBasedProps: () => be,
        withReactiveState: () => k,
        withRockstarGraph: () => D,
        withTranslations: () => xe
      });
      var n = o(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = o(60309),
        s = o(45547);
      const i = e => {
        if (/^https{0,1}:\/\//.test(e)) return e;
        let t = "";
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
      var d = o(15076),
        l = o.n(d);
      const c = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        g = o(42295),
        h = o(62229),
        m = o(93452);
      const w = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        f = () => (0, h.useContext)(w),
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
          const o = (0, h.useCallback)((e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }), [t]);
          return (0, g.jsx)(w.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: o,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(o) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...o
            })
          })
        };
      var x = o(21823),
        S = o(19757),
        P = o(21643),
        C = o(88718),
        A = o(96566),
        E = o(20772),
        T = o(6347);
      var L = o(83605),
        R = o(61162),
        j = o.n(R);
      var I = o(62944),
        O = o(42887);
      const _ = (0, I.e)({
          sha256: O.sc
        }),
        M = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? i(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, h.useState)(new S.D({
              typePolicies: t
            })),
            r = _.concat((({
              token: e
            }) => (0, T.o)(((t, {
              headers: o
            }) => {
              const n = e?.() ?? null;
              return n ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${n}`
                }
              } : null
            })))({
              token: e?.token
            }).concat((e => (0, L.$)({
              ...e,
              fetch: j()
            }))(n)));
          return new P.R({
            cache: a,
            link: r
          })
        },
        U = ({
          children: e,
          graphOptions: t,
          typePolicies: o
        }) => {
          const n = M({
            graphOptions: t,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)(E.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: n,
              children: (0, g.jsx)(A._y, {
                children: e
              })
            })
          })
        },
        D = (e, {
          env: t = "prod"
        }) => {
          const o = (0, x.UT)("");
          return function(n) {
            return (0, g.jsx)(U, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, g.jsx)(e, {
                ...n
              })
            })
          }
        },
        B = (0, x.UT)({}),
        N = "data-disallow-body-scroll",
        G = e => {
          const t = (0, m.q)(B),
            o = Object.values(t).some((e => !!e));
          return (0, h.useEffect)((() => {
            o ? document.documentElement.setAttribute(N, "true") : document.documentElement.removeAttribute(N)
          }), [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => B(e))({
              ...t,
              [e]: o
            })
          }
        },
        $ = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var F = o(89656);
      const z = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        q = ({
          element: e
        }) => {
          const t = setInterval((() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            o = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        X = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (q({
            element: o
          }), V(o))
        },
        V = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const o = e?.querySelectorAll(t.join(", "));
            if (o?.length) {
              const e = [...o].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class W {
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
      const H = Object.freeze({
          pc: new W("pc", "PC Legacy", 8, "sc"),
          ps: new W("ps", "PlayStation", 3, "np", "ps"),
          ps3: new W("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new W("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new W("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new W("xbox", "Xbox", 4, "xbl"),
          xbox360: new W("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new W("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new W("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new W("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new W("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new W("applestore", "App Store", 102, "applestore"),
          googleplay: new W("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new W("app_store", "App Store", 102, "applestore"),
          googlePlay: new W("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new W("pcalt", "PC Enhanced", 22, "sc")
        }),
        Q = Object.freeze(Object.values(H));

      function J(e) {
        if (!e) return;
        if (e instanceof W) return e;
        const t = e.toString().toLowerCase();
        return Q.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var Y = o(6306);
      const K = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Z = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find((e => e.startsWith(o))),
            a = n?.substring(o.length, n.length);
          return a
        },
        ee = (e, t) => {
          e && void 0 !== t && (0, Y.canStoreCookie)(e) && Z(e) !== t && (document.cookie = `${e}=${t}; domain=${K()}; path=/;`)
        };
      var te = o(81788);
      const oe = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, te.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await o(), d = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return d.searchParams.append("cid", r), d.searchParams.append("lang", n), d.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && d.searchParams.append("accessToken", i.bearerToken), d
      }, ne = e => e.keys().forEach(e), ae = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], re = (e = !0) => ae.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null, se = e => {
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
        }).then((e => e.arrayBuffer())).then((e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            n = document.createElement("a");
          n.href = t, n.setAttribute("download", o), document.body.appendChild(n), n.click(), document.body.removeChild(n)
        })).catch((e => {
          console.log(e)
        }))
      }, ie = () => [H.xbox360.name, H.xboxone.name, H.ps3.name, H.ps4.name, H.pc.name], de = () => [H.xboxsx.name, H.ps5.name, H.pcalt.name], le = e => de().includes(e), ce = e => {
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
      var ue = o(89864),
        pe = o.n(ue);
      const ge = (0, o(79867).A)(),
        he = ge?.id,
        me = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        we = e => {
          const t = {
            ...e,
            environment: he,
            display_type: me
          };
          pe().dataLayer({
            dataLayer: t
          })
        },
        fe = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            we(e)
          }
        }))(e, t),
        be = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, h.useState)(t), r = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map((e => r(e)));
              t = {
                ...t,
                items: e
              }
            }
            const n = t?.mediaQueryList;
            return n?.length ? (n.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              t = {
                ...t,
                ...e
              }
            })), t) : t
          };
          return (0, h.useEffect)((() => {
            const e = l().debounce((() => {
              a(r(t))
            }), o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, g.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var ye = o(69964),
        ve = o(26675);
      const ke = ye.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        xe = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, ve.A)(),
              {
                data: o
              } = (0, A.IT)(ke, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find((t => t.key === e))?.value ?? e : null
          })(o);
          return n ? (0, g.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Se = o(72148),
        Pe = o(95342);
      const Ce = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ae = () => (0, h.useContext)(Ce),
        Ee = ({
          children: e,
          ...t
        }) => {
          const o = Ae() ?? {},
            n = (0, h.useMemo)((() => ({
              ...o,
              ...t
            })), [o, t]);
          return (0, g.jsx)(Ce.Provider, {
            value: n,
            children: e
          })
        };
      var Te = o(17954),
        Le = o(9623);
      const Re = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Le.useLocation)();
          return (0, h.useEffect)((() => {
            we({
              event: "trackPageview"
            })
          }), [o]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        je = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          pe().initialize(t)
        };
      var Ie = o(37980);
      const Oe = "rockstar-games-web";
      let _e;
      try {
        const e = Ie.A.get(Oe) ?? "";
        _e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        _e = {}
      }
      const Me = (0, x.UT)(_e),
        Ue = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Me() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ie.A.set(Oe, JSON.stringify(o), {
            expires: 30,
            domain: K(),
            path: "/"
          }), Me(o), o
        },
        De = () => ({
          webSettings: (0, m.q)(Me),
          webSettingsReactive: Me,
          mutateWebSettings: Ue
        });
      var Be = o(50437)
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => r,
        C: () => n
      });
      const n = {
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
        r = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = a.findIndex((t => Object.entries(t.sites).findIndex((([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0))) >= 0)), r = a[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    96566: (e, t, o) => {
      o.d(t, {
        _y: () => y,
        _l: () => d._,
        n_: () => k,
        IT: () => v
      });
      var n = o(42295),
        a = o(62229),
        r = o(19757),
        s = o(21643),
        i = o(80701),
        d = o(63886),
        l = o(46277),
        c = o(15076),
        u = o.n(c),
        p = o(72148);
      const g = (e, t) => {
          const o = (0, p.Ym)(),
            n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: o,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: s,
              error: i,
              ...d
            } = (0, l.IT)(e, n);
          return (0, a.useEffect)((() => {
            if (r && n.setTitleDataPath) {
              const e = u().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, a.useEffect)((() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, a.useEffect)((() => {
            if (n.autoSetError && i) throw new Error(String(i))
          }), [i]), {
            loading: s,
            error: i,
            data: r,
            ...d
          }
        },
        h = (0, a.createContext)((() => ({
          data: null
        }))),
        m = new Promise((e => {
          e()
        })),
        w = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        f = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(w))
        }],
        b = (0, a.createContext)((() => f)),
        y = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, n.jsx)(b.Provider, {
          value: i.n,
          children: (0, n.jsx)(h.Provider, {
            value: g,
            children: e
          })
        })),
        v = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(h)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(b)(e))
    }
  }
]);