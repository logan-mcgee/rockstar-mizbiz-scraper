try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "69294054-6a3e-41a1-9439-c013bf3aaff9", e._sentryDebugIdIdentifier = "sentry-dbid-69294054-6a3e-41a1-9439-c013bf3aaff9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1101, 2295, 2853, 4676], {
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    42853: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => Te,
        InMemoryCache: () => S.D,
        Platform: () => Y,
        Platforms: () => K,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => qe.uU,
        RockstarGraphProvider: () => B,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => Oe.N2,
        coreScApiFetch: () => r.A,
        detectIfWeShouldAnchorSomewhere: () => H,
        downloadFile: () => de,
        findPlatform: () => ee,
        generateTpaLink: () => se,
        getAccentColor: () => o,
        getBase: () => a.A,
        getCdnPrefix: () => le,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => re,
        getGen8Consoles: () => ue,
        getGen9Consoles: () => pe,
        getLanguageLabel: () => ge,
        getUriForGraphEnv: () => i,
        gql: () => Se.J1,
        gtmInit: () => De,
        importAll: () => ie,
        isGen9Platform: () => fe,
        makeVar: () => x.UT,
        mutateWebSettings: () => Fe,
        newswirePost: () => W,
        oneTrustInit: () => V,
        safeStyles: () => d,
        scrollToElement: () => Q,
        setContextItem: () => u.A,
        setCookieValue: () => oe,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => X,
        toScLocaleString: () => Me.t,
        track: () => ve,
        useApolloClient: () => D,
        useBase: () => Ae.RK,
        useBodyScrollable: () => q,
        useDataLayer: () => Re,
        useHasReduceMotionPreference: () => Ae.vx,
        useHasSaveDataPreference: () => Ae.sb,
        useLazyQuery: () => je._,
        useLocale: () => Ae.Ym,
        useMutateState: () => y,
        useMutation: () => Le.n,
        useNewswirePost: () => Ae.CA,
        usePreloadImg: () => Ae.OG,
        usePrevious: () => Ae.ZC,
        useQuery: () => $,
        useQueryParams: () => Ae.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => Ae.OH,
        useRockstarEventSubscriber: () => Ae.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => Ge,
        useScApi: () => Ae.Cb,
        useScAuthLinks: () => Ae.N6,
        useScroll: () => Oe.Ll,
        useScrollTracking: () => Ae.GA,
        useScrollVisibility: () => Ae.JE,
        useState: () => b,
        useWindowResize: () => qe.G4,
        webSettingsReactive: () => ze,
        withAutoRouteTracking: () => Ue,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => xe,
        withReactiveState: () => k,
        withRockstarGraph: () => z,
        withTranslations: () => Ee
      });
      var r = n(60099);
      const o = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = n(60309),
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
      var c = n(15076),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(9482),
        p = n(52690),
        f = n(42295),
        g = n(71127),
        m = n(93452);
      const h = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, g.useContext)(h),
        w = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, g.useContext)(w),
        v = ({
          children: e,
          state: t
        }) => {
          (0, m.q)(t);
          const n = (0, g.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, f.jsx)(h.Provider, {
            value: t(),
            children: (0, f.jsx)(w.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, f.jsx)(v, {
            state: t,
            children: (0, f.jsx)(e, {
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
      var O = n(83605),
        j = n(61162),
        L = n.n(j);
      var _ = n(62944),
        R = n(42887);
      const T = (0, _.e)({
        sha256: R.sc
      });
      var M = n(46277);
      const I = document.documentElement.lang,
        U = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: I,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: o,
              error: a,
              ...s
            } = (0, M.IT)(e, n);
          return (0, g.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = l().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, g.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: o
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [o]), (0, g.useEffect)(() => {
            if (n.autoSetError && a) throw new Error(String(a))
          }, [a]), {
            loading: o,
            error: a,
            data: r,
            ...s
          }
        },
        D = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? i(e?.env) : e?.uri,
            r = {
              ...e,
              uri: n
            },
            [o] = (0, g.useState)(new S.D({
              typePolicies: t
            })),
            a = T.concat((({
              token: e
            }) => (0, A.o)((t, {
              headers: n
            }) => {
              const r = e?.() ?? null;
              return r ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${r}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, O.$)({
              ...e,
              fetch: L()
            }))(r)));
          return new P.R({
            cache: o,
            link: a
          })
        },
        N = (0, g.createContext)(U),
        B = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const r = D({
            graphOptions: t,
            typePolicies: n
          });
          return (0, f.jsx)(E.ec, {
            token: t?.token,
            children: (0, f.jsx)(C.X, {
              client: r,
              children: (0, f.jsx)(N.Provider, {
                value: U,
                children: e
              })
            })
          })
        },
        $ = (e, t) => (0, g.useContext)(N)(e, t),
        z = (e, {
          env: t = "prod"
        }) => {
          const n = (0, x.UT)("");
          return function(r) {
            return (0, f.jsx)(B, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, f.jsx)(e, {
                ...r
              })
            })
          }
        },
        F = (0, x.UT)({}),
        G = "data-disallow-body-scroll",
        q = e => {
          const t = (0, m.q)(F),
            n = Object.values(t).some(e => !!e);
          return (0, g.useEffect)(() => {
            n ? document.documentElement.setAttribute(G, "true") : document.documentElement.removeAttribute(G)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => F(e))({
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
      var W = n(89656);
      const X = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Q = ({
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
          n && (Q({
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
      class Y {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, r, o = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = r, this.aliasOnlineService = o, this.alias = a
        }
      }
      const K = Object.freeze({
          pc: new Y("pc", "PC Legacy", 8, "sc"),
          ps: new Y("ps", "PlayStation", 3, "np", "ps"),
          ps3: new Y("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new Y("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new Y("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new Y("xbox", "Xbox", 4, "xbl"),
          xbox360: new Y("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new Y("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new Y("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new Y("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new Y("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new Y("applestore", "App Store", 102, "applestore"),
          googleplay: new Y("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new Y("app_store", "App Store", 102, "applestore"),
          googlePlay: new Y("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new Y("pcalt", "PC Enhanced", 22, "sc")
        }),
        Z = Object.freeze(Object.values(K));

      function ee(e) {
        if (!e) return;
        if (e instanceof Y) return e;
        const t = e.toString().toLowerCase();
        return Z.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var te = n(6306);
      const ne = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        re = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            r = t.find(e => e.startsWith(n)),
            o = r?.substring(n.length, r.length);
          return o
        },
        oe = (e, t) => {
          e && void 0 !== t && (0, te.canStoreCookie)(e) && re(e) !== t && (document.cookie = `${e}=${t}; domain=${ne()}; path=/;`)
        };
      var ae = n(56990);
      const se = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: r
        }] = (0, ae.getLocale)(), {
          authHost: o,
          clientId: a
        } = (0, s.A)(), i = await n(), c = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
        return c.searchParams.append("cid", a), c.searchParams.append("lang", r), c.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && c.searchParams.append("accessToken", i.bearerToken), c
      }, ie = e => e.keys().forEach(e), ce = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], le = (e = !0) => ce.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, de = e => {
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
            r = document.createElement("a");
          r.href = t, r.setAttribute("download", n), document.body.appendChild(r), r.click(), document.body.removeChild(r)
        }).catch(e => {
          console.log(e)
        })
      }, ue = () => [K.xbox360.name, K.xboxone.name, K.ps3.name, K.ps4.name, K.pc.name], pe = () => [K.xboxsx.name, K.ps5.name, K.pcalt.name], fe = e => pe().includes(e), ge = e => {
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
        he = n.n(me);
      const be = (0, n(79867).A)(),
        we = be?.id,
        ye = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ve = e => {
          const t = {
            ...e,
            environment: we,
            display_type: ye
          };
          he().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ve(e)
          }
        }))(e, t),
        xe = (e, t = 250) => n => ((e, t, n) => {
          const [r, o] = (0, g.useState)(t), a = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => a(e));
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
          return (0, g.useEffect)(() => {
            const e = l().debounce(() => {
              o(a(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, f.jsx)(e, {
            ...r
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
          const r = ((e = "default") => {
            const t = (0, Pe.A)(),
              {
                data: n
              } = $(Ce, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return r ? (0, f.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, n, t);
      var Ae = n(56088),
        Oe = n(95342),
        je = n(66591),
        Le = n(80701);
      const _e = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "gtmDatalayer"
        }),
        Re = () => (0, g.useContext)(_e),
        Te = ({
          children: e,
          ...t
        }) => {
          const n = Re() ?? {},
            r = (0, g.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, f.jsx)(_e.Provider, {
            value: r,
            children: e
          })
        };
      var Me = n(17954),
        Ie = n(90230);
      const Ue = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ie.zy)();
          return (0, g.useEffect)(() => {
            ve({
              event: "trackPageview"
            })
          }, [n]), (0, f.jsx)(e, {
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
          he().initialize(t)
        };
      var Ne = n(37980);
      const Be = "rockstar-games-web";
      let $e;
      try {
        const e = Ne.A.get(Be) ?? "";
        $e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $e = {}
      }
      const ze = (0, x.UT)($e),
        Fe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...ze() ?? {}
          };
          return n[e] = t, null === t && delete n[e], Ne.A.set(Be, JSON.stringify(n), {
            expires: 30,
            domain: ne(),
            path: "/"
          }), ze(n), n
        },
        Ge = () => ({
          webSettings: (0, m.q)(ze),
          webSettingsReactive: ze,
          mutateWebSettings: Fe
        });
      var qe = n(50437)
    },
    69245: (e, t, n) => {
      var r = n(71127),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var r, a = {},
          l = null,
          d = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, r) && !c.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    79465: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? i((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
      }

      function o(e, t, n) {
        return e.concat(t).map(function(e) {
          return r(e, n)
        })
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function i(e, n, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || o, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = r;
        var l = Array.isArray(n);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, n, c) : function(e, t, n) {
          var o = {};
          return n.isMergeableObject(e) && a(e).forEach(function(t) {
            o[t] = r(e[t], n)
          }), a(t).forEach(function(a) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, a) || (s(e, a) && n.isMergeableObject(t[a]) ? o[a] = function(e, t) {
              if (!t.customMerge) return i;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : i
            }(a, n)(e[a], t[a], n) : o[a] = r(t[a], n))
          }), o
        }(e, n, c) : r(n, c)
      }
      i.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, n) {
          return i(e, n, t)
        }, {})
      };
      var c = i;
      e.exports = c
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => l,
        C: () => i
      });
      var r = n(56265),
        o = n.n(r),
        a = n(41972),
        s = n.n(a);
      const i = {
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = c.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === n && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), a = c[r >= 0 ? r : 0], i = c.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(o()({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    }
  }
]);