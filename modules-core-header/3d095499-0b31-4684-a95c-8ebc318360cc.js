try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3d095499-0b31-4684-a95c-8ebc318360cc", e._sentryDebugIdIdentifier = "sentry-dbid-3d095499-0b31-4684-a95c-8ebc318360cc")
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
  [2295, 4676, 7533, 9308, 9588], {
    42295: (e, t, n) => {
      e.exports = n(69245)
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
    79308: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => C.R,
        ApolloProvider: () => E.X,
        DataLayerProvider: () => Me,
        InMemoryCache: () => P.D,
        Platform: () => K,
        Platforms: () => Z,
        ReactiveStateProvider: () => x,
        ResizeProvider: () => Ve.uU,
        RockstarGraphProvider: () => $,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => je.N2,
        coreScApiFetch: () => r.A,
        cx: () => o,
        detectIfWeShouldAnchorSomewhere: () => J,
        downloadFile: () => ue,
        findPlatform: () => te,
        generateTpaLink: () => ie,
        getAccentColor: () => a,
        getBase: () => s.A,
        getCdnPrefix: () => de,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => oe,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => ge,
        getLanguageLabel: () => me,
        getUriForGraphEnv: () => c,
        gql: () => Pe.J1,
        gtmInit: () => Be,
        importAll: () => ce,
        isGen9Platform: () => fe,
        makeVar: () => S.UT,
        mutateWebSettings: () => Ge,
        newswirePost: () => X,
        oneTrustInit: () => W,
        safeStyles: () => u,
        scrollToElement: () => H,
        setContextItem: () => p.A,
        setCookieValue: () => ae,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => Q,
        toScLocaleString: () => Ie.t,
        track: () => xe,
        useApolloClient: () => B,
        useBase: () => Oe.RK,
        useBodyScrollable: () => V,
        useDataLayer: () => Te,
        useHasReduceMotionPreference: () => Oe.vx,
        useHasSaveDataPreference: () => Oe.sb,
        useLazyQuery: () => Le._,
        useLocale: () => Oe.Ym,
        useMutateState: () => v,
        useMutation: () => Re.n,
        useNewswirePost: () => Oe.CA,
        usePreloadImg: () => Oe.OG,
        usePrevious: () => Oe.ZC,
        useQuery: () => z,
        useQueryParams: () => Oe.sq,
        useReactiveVar: () => h.q,
        useRelativeTime: () => Oe.Vq,
        useRockstarEventDispatcher: () => Oe.OH,
        useRockstarEventSubscriber: () => Oe.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => qe,
        useScApi: () => Oe.Cb,
        useScAuthLinks: () => Oe.N6,
        useScroll: () => je.Ll,
        useScrollTracking: () => Oe.GA,
        useScrollVisibility: () => Oe.JE,
        useState: () => w,
        useWindowResize: () => Ve.G4,
        webSettingsReactive: () => Fe,
        withAutoRouteTracking: () => De,
        withGtmTracking: () => ke,
        withMediaBasedProps: () => Se,
        withReactiveState: () => k,
        withRockstarGraph: () => F,
        withTranslations: () => Ae
      });
      var r = n(60099);
      const o = (...e) => e.filter(Boolean).join(" "),
        a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(60309),
        i = n(45547);
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
      var l = n(15076),
        d = n.n(l);
      const u = e => {
        const t = d().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = n(9482),
        g = n(52690),
        f = n(42295),
        m = n(71127),
        h = n(93452);
      const b = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, m.useContext)(b),
        y = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, m.useContext)(y),
        x = ({
          children: e,
          state: t
        }) => {
          (0, h.q)(t);
          const n = (0, m.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, f.jsx)(b.Provider, {
            value: t(),
            children: (0, f.jsx)(y.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, f.jsx)(x, {
            state: t,
            children: (0, f.jsx)(e, {
              ...n
            })
          })
        };
      var S = n(21823),
        P = n(19757),
        C = n(75102),
        E = n(88718),
        A = n(20772),
        O = n(6347);
      var j = n(83605),
        L = n(61162),
        R = n.n(L);
      var _ = n(62944),
        T = n(42887);
      const M = (0, _.e)({
        sha256: T.sc
      });
      var I = n(46277);
      const U = document.documentElement.lang,
        D = (e, t) => {
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
              data: r,
              loading: o,
              error: a,
              ...s
            } = (0, I.IT)(e, n);
          return (0, m.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = d().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, m.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: o
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [o]), (0, m.useEffect)(() => {
            if (n.autoSetError && a) throw new Error(String(a))
          }, [a]), {
            loading: o,
            error: a,
            data: r,
            ...s
          }
        },
        B = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? c(e?.env) : e?.uri,
            r = {
              ...e,
              uri: n
            },
            [o] = (0, m.useState)(new P.D({
              typePolicies: t
            })),
            a = M.concat((({
              token: e
            }) => (0, O.o)((t, {
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
            }).concat((e => (0, j.$)({
              ...e,
              fetch: R()
            }))(r)));
          return new C.R({
            cache: o,
            link: a
          })
        },
        N = (0, m.createContext)(D),
        $ = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const r = B({
            graphOptions: t,
            typePolicies: n
          });
          return (0, f.jsx)(A.ec, {
            token: t?.token,
            children: (0, f.jsx)(E.X, {
              client: r,
              children: (0, f.jsx)(N.Provider, {
                value: D,
                children: e
              })
            })
          })
        },
        z = (e, t) => (0, m.useContext)(N)(e, t),
        F = (e, {
          env: t = "prod"
        }) => {
          const n = (0, S.UT)("");
          return function(r) {
            return (0, f.jsx)($, {
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
        G = (0, S.UT)({}),
        q = "data-disallow-body-scroll",
        V = e => {
          const t = (0, h.q)(G),
            n = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            n ? document.documentElement.setAttribute(q, "true") : document.documentElement.removeAttribute(q)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => G(e))({
              ...t,
              [e]: n
            })
          }
        },
        W = ({
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
        H = ({
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
        J = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (H({
            element: n
          }), Y(n))
        },
        Y = e => {
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
        constructor(e, t, n, r, o = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = r, this.aliasOnlineService = o, this.alias = a
        }
      }
      const Z = Object.freeze({
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
        ee = Object.freeze(Object.values(Z));

      function te(e) {
        if (!e) return;
        if (e instanceof K) return e;
        const t = e.toString().toLowerCase();
        return ee.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ne = n(6306);
      const re = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        oe = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            r = t.find(e => e.startsWith(n)),
            o = r?.substring(n.length, r.length);
          return o
        },
        ae = (e, t) => {
          e && void 0 !== t && (0, ne.canStoreCookie)(e) && oe(e) !== t && (document.cookie = `${e}=${t}; domain=${re()}; path=/;`)
        };
      var se = n(56990);
      const ie = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: r
        }] = (0, se.getLocale)(), {
          authHost: o,
          clientId: a
        } = (0, i.A)(), s = await n(), c = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
        return c.searchParams.append("cid", a), c.searchParams.append("lang", r), c.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && c.searchParams.append("accessToken", s.bearerToken), c
      }, ce = e => e.keys().forEach(e), le = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], de = (e = !0) => le.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, ue = e => {
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
      }, pe = () => [Z.xbox360.name, Z.xboxone.name, Z.ps3.name, Z.ps4.name, Z.pc.name], ge = () => [Z.xboxsx.name, Z.ps5.name, Z.pcalt.name], fe = e => ge().includes(e), me = e => {
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
      var he = n(89864),
        be = n.n(he);
      const we = (0, n(79867).A)(),
        ye = we?.id,
        ve = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        xe = e => {
          const t = {
            ...e,
            environment: ye,
            display_type: ve
          };
          be().dataLayer({
            dataLayer: t
          })
        },
        ke = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            xe(e)
          }
        }))(e, t),
        Se = (e, t = 250) => n => ((e, t, n) => {
          const [r, o] = (0, m.useState)(t), a = e => {
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
          return (0, m.useEffect)(() => {
            const e = d().debounce(() => {
              o(a(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, f.jsx)(e, {
            ...r
          })
        })(e, n, t);
      var Pe = n(40445),
        Ce = n(26675);
      const Ee = Pe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ae = (e, t = "default") => n => ((e, t, n) => {
          const r = ((e = "default") => {
            const t = (0, Ce.A)(),
              {
                data: n
              } = z(Ee, {
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
      var Oe = n(65085),
        je = n(95342),
        Le = n(66591),
        Re = n(80701);
      const _e = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Te = () => (0, m.useContext)(_e),
        Me = ({
          children: e,
          ...t
        }) => {
          const n = Te() ?? {},
            r = (0, m.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, f.jsx)(_e.Provider, {
            value: r,
            children: e
          })
        };
      var Ie = n(17954),
        Ue = n(90230);
      const De = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ue.zy)();
          return (0, m.useEffect)(() => {
            xe({
              event: "trackPageview"
            })
          }, [n]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        Be = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          be().initialize(t)
        };
      var Ne = n(37980);
      const $e = "rockstar-games-web";
      let ze;
      try {
        const e = Ne.A.get($e) ?? "";
        ze = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        ze = {}
      }
      const Fe = (0, S.UT)(ze),
        Ge = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Fe() ?? {}
          };
          return n[e] = t, null === t && delete n[e], Ne.A.set($e, JSON.stringify(n), {
            expires: 30,
            domain: re(),
            path: "/"
          }), Fe(n), n
        },
        qe = () => ({
          webSettings: (0, h.q)(Fe),
          webSettingsReactive: Fe,
          mutateWebSettings: Ge
        });
      var Ve = n(50437)
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