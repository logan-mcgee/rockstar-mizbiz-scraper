try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e7ec90a5-0ff1-4b85-9749-fa23f4530c4d", e._sentryDebugIdIdentifier = "sentry-dbid-e7ec90a5-0ff1-4b85-9749-fa23f4530c4d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [9308], {
    42295: (e, t, o) => {
      e.exports = o(69245)
    },
    69245: (e, t, o) => {
      var n = o(71127),
        a = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, o) {
        var n, r = {},
          d = null,
          c = null;
        for (n in void 0 !== o && (d = "" + o), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: i.current
        }
      }
      t.Fragment = r, t.jsx = d, t.jsxs = d
    },
    79308: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => C.R,
        ApolloProvider: () => E.X,
        DataLayerProvider: () => Ie,
        InMemoryCache: () => P.D,
        Platform: () => K,
        Platforms: () => Z,
        ReactiveStateProvider: () => k,
        ResizeProvider: () => Ve.uU,
        RockstarGraphProvider: () => z,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => _e.N2,
        coreScApiFetch: () => n.A,
        cx: () => a,
        detectIfWeShouldAnchorSomewhere: () => J,
        downloadFile: () => ue,
        findPlatform: () => te,
        generateTpaLink: () => ie,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ce,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => ae,
        getGen8Consoles: () => pe,
        getGen9Consoles: () => ge,
        getLanguageLabel: () => he,
        getUriForGraphEnv: () => l,
        gql: () => Pe.J1,
        gtmInit: () => Be,
        importAll: () => le,
        isGen9Platform: () => me,
        makeVar: () => S.UT,
        mutateWebSettings: () => Ge,
        newswirePost: () => X,
        oneTrustInit: () => W,
        safeStyles: () => u,
        scrollToElement: () => H,
        setContextItem: () => p.A,
        setCookieValue: () => re,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => Q,
        toScLocaleString: () => Ue.t,
        track: () => ke,
        useApolloClient: () => B,
        useBase: () => Le.RK,
        useBodyScrollable: () => V,
        useDataLayer: () => je,
        useHasReduceMotionPreference: () => Le.vx,
        useHasSaveDataPreference: () => Le.sb,
        useLazyQuery: () => Re._,
        useLocale: () => Le.Ym,
        useMutateState: () => v,
        useMutation: () => Te.n,
        useNewswirePost: () => Le.CA,
        usePreloadImg: () => Le.OG,
        usePrevious: () => Le.ZC,
        useQuery: () => $,
        useQueryParams: () => Le.sq,
        useReactiveVar: () => f.q,
        useRelativeTime: () => Le.Vq,
        useRockstarEventDispatcher: () => Le.OH,
        useRockstarEventSubscriber: () => Le.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => qe,
        useScApi: () => Le.Cb,
        useScAuthLinks: () => Le.N6,
        useScroll: () => _e.Ll,
        useScrollTracking: () => Le.GA,
        useScrollVisibility: () => Le.JE,
        useState: () => b,
        useWindowResize: () => Ve.G4,
        webSettingsReactive: () => Fe,
        withAutoRouteTracking: () => De,
        withGtmTracking: () => xe,
        withMediaBasedProps: () => Se,
        withReactiveState: () => x,
        withRockstarGraph: () => F,
        withTranslations: () => Ae
      });
      var n = o(60099);
      const a = (...e) => e.filter(Boolean).join(" "),
        r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = o(60309),
        i = o(45547);
      const l = e => {
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
      var d = o(10336),
        c = o.n(d);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = o(9482),
        g = o(52690),
        m = o(42295),
        h = o(71127),
        f = o(93452);
      const w = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, h.useContext)(w),
        y = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, h.useContext)(y),
        k = ({
          children: e,
          state: t
        }) => {
          (0, f.q)(t);
          const o = (0, h.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, m.jsx)(w.Provider, {
            value: t(),
            children: (0, m.jsx)(y.Provider, {
              value: o,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(o) {
          return (0, m.jsx)(k, {
            state: t,
            children: (0, m.jsx)(e, {
              ...o
            })
          })
        };
      var S = o(21823),
        P = o(19757),
        C = o(21643),
        E = o(88718),
        A = o(20772),
        L = o(6347);
      var _ = o(83605),
        R = o(61162),
        T = o.n(R);
      var O = o(62944),
        j = o(42887);
      const I = (0, O.e)({
        sha256: j.sc
      });
      var U = o(46277);
      const M = document.documentElement.lang,
        D = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: M,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: a,
              error: r,
              ...s
            } = (0, U.IT)(e, o);
          return (0, h.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = c().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, h.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, h.useEffect)(() => {
            if (o.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: n,
            ...s
          }
        },
        B = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? l(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, h.useState)(new P.D({
              typePolicies: t
            })),
            r = I.concat((({
              token: e
            }) => (0, L.o)((t, {
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
            }).concat((e => (0, _.$)({
              ...e,
              fetch: T()
            }))(n)));
          return new C.R({
            cache: a,
            link: r
          })
        },
        N = (0, h.createContext)(D),
        z = ({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = B({
            graphOptions: t,
            typePolicies: o
          });
          return (0, m.jsx)(A.ec, {
            token: t?.token,
            children: (0, m.jsx)(E.X, {
              client: n,
              children: (0, m.jsx)(N.Provider, {
                value: D,
                children: e
              })
            })
          })
        },
        $ = (e, t) => (0, h.useContext)(N)(e, t),
        F = (e, {
          env: t = "prod"
        }) => {
          const o = (0, S.UT)("");
          return function(n) {
            return (0, m.jsx)(z, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, m.jsx)(e, {
                ...n
              })
            })
          }
        },
        G = (0, S.UT)({}),
        q = "data-disallow-body-scroll",
        V = e => {
          const t = (0, f.q)(G),
            o = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            o ? document.documentElement.setAttribute(q, "true") : document.documentElement.removeAttribute(q)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => G(e))({
              ...t,
              [e]: o
            })
          }
        },
        W = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var X = o(89656);
      const Q = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        H = ({
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
        J = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (H({
            element: o
          }), Y(o))
        },
        Y = e => {
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
      class K {
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
      var oe = o(6306);
      const ne = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ae = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        re = (e, t) => {
          e && void 0 !== t && (0, oe.canStoreCookie)(e) && ae(e) !== t && (document.cookie = `${e}=${t}; domain=${ne()}; path=/;`)
        };
      var se = o(56990);
      const ie = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, se.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, i.A)(), s = await o(), l = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return l.searchParams.append("cid", r), l.searchParams.append("lang", n), l.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && l.searchParams.append("accessToken", s.bearerToken), l
      }, le = e => e.keys().forEach(e), de = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ce = (e = !0) => de.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, ue = e => {
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
      }, pe = () => [Z.xbox360.name, Z.xboxone.name, Z.ps3.name, Z.ps4.name, Z.pc.name], ge = () => [Z.xboxsx.name, Z.ps5.name, Z.pcalt.name], me = e => ge().includes(e), he = e => {
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
      var fe = o(89864),
        we = o.n(fe);
      const be = (0, o(79867).A)(),
        ye = be?.id,
        ve = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ke = e => {
          const t = {
            ...e,
            environment: ye,
            display_type: ve
          };
          we().dataLayer({
            dataLayer: t
          })
        },
        xe = e => t => ((e, t) => (0, m.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ke(e)
          }
        }))(e, t),
        Se = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, h.useState)(t), r = e => {
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
          return (0, h.useEffect)(() => {
            const e = c().debounce(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, m.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Pe = o(69964),
        Ce = o(26675);
      const Ee = Pe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ae = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ce.A)(),
              {
                data: o
              } = $(Ee, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, m.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Le = o(65085),
        _e = o(95342),
        Re = o(66591),
        Te = o(80701);
      const Oe = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        je = () => (0, h.useContext)(Oe),
        Ie = ({
          children: e,
          ...t
        }) => {
          const o = je() ?? {},
            n = (0, h.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, m.jsx)(Oe.Provider, {
            value: n,
            children: e
          })
        };
      var Ue = o(17954),
        Me = o(10181);
      const De = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Me.useLocation)();
          return (0, h.useEffect)(() => {
            ke({
              event: "trackPageview"
            })
          }, [o]), (0, m.jsx)(e, {
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
          we().initialize(t)
        };
      var Ne = o(37980);
      const ze = "rockstar-games-web";
      let $e;
      try {
        const e = Ne.A.get(ze) ?? "";
        $e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $e = {}
      }
      const Fe = (0, S.UT)($e),
        Ge = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Fe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ne.A.set(ze, JSON.stringify(o), {
            expires: 30,
            domain: ne(),
            path: "/"
          }), Fe(o), o
        },
        qe = () => ({
          webSettings: (0, f.q)(Fe),
          webSettingsReactive: Fe,
          mutateWebSettings: Ge
        });
      var Ve = o(50437)
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => d,
        C: () => i
      });
      var n = o(56265),
        a = o.n(n),
        r = o(41972),
        s = o.n(r);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
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
        d = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = l.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), r = l[n >= 0 ? n : 0], i = l.find(e => e.id === r.fallbackEnvironment);
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