! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b5d4fda7-5236-41c4-8a76-11710eb293c7", e._sentryDebugIdIdentifier = "sentry-dbid-b5d4fda7-5236-41c4-8a76-11710eb293c7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [839], {
    5138: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = o.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), a = o[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    1207: (e, t, n) => {
      n.d(t, {
        OD: () => s,
        lv: () => i,
        pP: () => d,
        wC: () => r,
        PE: () => f,
        rB: () => c,
        yh: () => p,
        Ap: () => h,
        Xs: () => v,
        kx: () => b,
        rJ: () => x,
        pT: () => w,
        lV: () => k,
        PA: () => o,
        My: () => g
      }), n(1999);
      const o = e => {
          let {
            element: t
          } = e;
          const n = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            o = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        r = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (o({
            element: n
          }), a(n))
        },
        a = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class s {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const i = Object.freeze({
          pc: new s("pc", "PC", 8),
          ps: new s("ps", "PlayStation", 3),
          ps3: new s("ps3", "PlayStation 3", 2),
          ps4: new s("ps4", "PlayStation 4", 11),
          ps5: new s("ps5", "PlayStation 5", 20),
          xbox: new s("xbox", "Xbox", 4),
          xbox360: new s("xbox360", "Xbox 360", 1),
          xboxone: new s("xboxone", "Xbox One", 12),
          xboxsx: new s("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new s("switch", "Nintendo Switch™", 18),
          nintendoswitch: new s("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new s("applestore", "App Store", 102),
          googleplay: new s("googleplay", "Google Play", 1023),
          appStore: new s("app_store", "App Store", 102),
          googlePlay: new s("ggle_play", "Google Play", 1023)
        }),
        l = Object.freeze(Object.values(i));

      function c(e) {
        if (!e) return;
        if (e instanceof s) return e;
        const t = e.toString().toLowerCase();
        return l.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const d = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var u = n(4511);
      const h = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        g = (e, t) => {
          e && void 0 !== t && (0, u.canStoreCookie)(e) && h(e) !== t && (document.cookie = `${e}=${t}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
        };
      n(8096);
      const w = e => e.keys().forEach(e),
        m = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        p = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return m.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        f = e => {
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
          }).then((e => e.arrayBuffer())).then((e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              o = document.createElement("a");
            o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
          })).catch((e => {
            console.log(e)
          }))
        },
        v = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        b = () => [i.xboxsx.name, i.ps5.name],
        k = e => b().includes(e),
        x = e => {
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
    839: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => B.R,
        ApolloProvider: () => Je.X,
        DataLayerProvider: () => gt,
        GraphOperationsProvider: () => Re,
        InMemoryCache: () => I.D,
        Platform: () => We.OD,
        Platforms: () => We.lv,
        ReactiveStateProvider: () => j,
        ResizeProvider: () => xe,
        RockstarGraphProvider: () => He,
        RockstarTokenProvider: () => K,
        ScrollProvider: () => me,
        classList: () => We.pP,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => We.wC,
        downloadFile: () => We.PE,
        findPlatform: () => We.rB,
        getAccentColor: () => b,
        getBase: () => k,
        getCdnPrefix: () => We.yh,
        getCookieValueByName: () => We.Ap,
        getGen8Consoles: () => We.Xs,
        getGen9Consoles: () => We.kx,
        getLanguageLabel: () => We.rJ,
        getScConfigForOrigin: () => g,
        getUriForGraphEnv: () => x,
        gql: () => Ye.J1,
        gtmInit: () => at,
        importAll: () => We.pT,
        isGen9Platform: () => We.lV,
        lsSettingsReactive: () => lt,
        makeVar: () => U.UT,
        mutateLSSettings: () => ct,
        newswirePost: () => o,
        oneTrustInit: () => Ve,
        safeStyles: () => y,
        scrollToElement: () => We.PA,
        setContextItem: () => E,
        setCookieValue: () => We.My,
        setMakeVarItem: () => C,
        supportedBrowsers: () => Qe,
        toScLocaleString: () => w,
        track: () => ot,
        useApolloClient: () => Fe,
        useBase: () => H,
        useBodyScrollable: () => Xe,
        useDataLayer: () => ht,
        useHasReduceMotionPreference: () => Se,
        useHasSaveDataPreference: () => Ee,
        useLocale: () => N,
        useMutateState: () => R,
        useMutation: () => Oe,
        useNewswirePost: () => de,
        usePreloadImg: () => G,
        usePrevious: () => Q,
        useQuery: () => je,
        useQueryParams: () => V,
        useReactiveVar: () => z.q,
        useRockstarEventDispatcher: () => ae,
        useRockstarEventSubscriber: () => se,
        useRockstarToken: () => ee,
        useRockstarTokenPing: () => te,
        useRockstarTokenReactive: () => Z,
        useRockstarWebLSSettings: () => dt,
        useScApi: () => ne,
        useScroll: () => we,
        useScrollTracking: () => Pe,
        useState: () => A,
        useWindowResize: () => ye,
        withAutoRouteTracking: () => rt,
        withGtmTracking: () => wt,
        withMediaBasedProps: () => mt,
        withReactiveState: () => O,
        withRockstarGraph: () => qe,
        withTranslations: () => ft
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => le,
        Provider: () => ce,
        useNewswirePost: () => de
      });
      var r = n(1328),
        a = n(1032),
        s = n.n(a),
        i = n(1999),
        l = n.n(i);
      const c = window?.env?.sc,
        d = window?.env?.marketing,
        u = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: r,
            scHost: a,
            hostname: s,
            cdnBase: i,
            key: l,
            marketingAuthTLD: u
          } = e;
          const h = c?.apiHost ?? t,
            g = c?.authHost ?? n,
            w = c?.cdnBase ?? i,
            m = c?.clientId ?? o,
            p = d?.marketingAuthTLD ?? u,
            f = c?.scHost ?? a,
            v = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: c?.graphEnv ?? r,
            host: f,
            hostname: s,
            cdnBase: w,
            key: l,
            clientId: m,
            authHost: g,
            login: `https://${g}.rockstargames.com/connect/authorize/${m}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${m}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${m}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`
          }
        },
        h = [u({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), u({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        g = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = h.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return h.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || h[0]
        },
        w = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: m
        } = g(),
        p = w(document.documentElement.lang),
        f = {},
        v = async function(e) {
          let {
            fetchOptions: t = {},
            finalFetchOptions: n = {},
            query: o = null,
            pingBearer: a,
            requireBearerToken: i = !0,
            useCache: c = !0
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            const {
              bearerToken: d = null
            } = await (a?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...p && {
                "X-lang": p
              }
            };
            let h = `${m}/${e}`;
            if (null === o || l().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const g = {
                headers: u
              },
              w = s().all([g, t, n]),
              v = JSON.stringify({
                ...w,
                url: h
              }),
              b = await (0, r.sc)(v);
            if (c) {
              if (f[b]?.response) return f[b].response;
              if (f[b]?.loading) return {
                error: null,
                result: null
              };
              f[b] = {
                loading: !0
              }
            }
            const k = await fetch(h, w),
              x = await k.json();
            return c && (f[b] = {
              response: x,
              loading: !1
            }), x
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", k = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, x = e => {
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
        }, y = e => {
          const t = l().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        }, S = () => window.reactContextFactory = window?.reactContextFactory ?? {}, E = e => {
          let {
            context: t,
            key: n
          } = e;
          return S()?.[n] || (S()[n] = t), S()[n]
        }, P = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, C = e => {
          let {
            key: t,
            value: n,
            domain: o = "default"
          } = e;
          return P()?.[o] || (P()[o] = {}), P()?.[o]?.[t] || (P()[o][t] = n), P()[o][t]
        };
      var L = n(2229),
        T = n(8096);
      const M = E({
          context: (0, L.createContext)({}),
          key: "graphContextGet"
        }),
        A = () => (0, L.useContext)(M),
        _ = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        R = () => (0, L.useContext)(_),
        j = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, z.q)(n);
          const o = (0, L.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, T.jsx)(M.Provider, {
            value: n(),
            children: (0, T.jsx)(_.Provider, {
              value: o,
              children: t
            })
          })
        },
        O = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, T.jsx)(j, {
              state: n,
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        };
      var U = n(3562),
        I = n(5164),
        B = n(5220),
        D = n(5053),
        $ = n(4474);
      const F = k(),
        H = () => F;
      var z = n(175);
      const q = (0, U.UT)(document.documentElement.lang),
        N = () => (0, z.q)(q),
        G = e => {
          const [t, n] = (0, L.useState)(null), [o, r] = (0, L.useState)(null), [a, s] = (0, L.useState)({});
          return (0, L.useLayoutEffect)((() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", (() => {
              s({
                width: t.width,
                height: t.height
              }), t = null, o || n(!0)
            })), t.addEventListener("error", (() => {
              t = null, o || (n(!1), r(!0))
            })), t.src = e, () => {
              o = !0, null !== t && (t.src = "")
            }
          }), [e]), [t, a]
        };
      var X = n(9623);
      const V = () => {
          const {
            search: e
          } = (0, X.useLocation)();
          return new URLSearchParams(e)
        },
        Q = e => {
          const t = (0, L.useRef)();
          return (0, L.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var W = n(5966);
      const J = {
          token: (0, U.UT)(null),
          tokenPingExpires: (0, U.UT)(100)
        },
        Y = E({
          context: (0, L.createContext)(J),
          key: "utilsTokenProvider"
        }),
        K = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, T.jsx)(Y.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: r
            },
            children: t
          })
        },
        Z = () => {
          const {
            token: e,
            tokenPingExpires: t
          } = (0, L.useContext)(Y);
          return [e, t]
        },
        ee = () => {
          const [e] = Z();
          return (0, z.q)(e)
        },
        te = () => {
          const [e, t] = Z();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: o
            } = (0, W.getScConfigForOrigin)();
            try {
              const e = n?.() ?? 0,
                r = t?.() ?? null,
                a = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === r) return {
                bearerToken: r
              };
              if (a && r) return {
                bearerToken: r
              };
              const s = await fetch(o, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await s.json(),
                {
                  tokenExpiresTime: l = null
                } = i;
              return null !== l && n?.(l), t(i.bearerToken ?? null), i
            } catch (e) {
              return t(!1), !1
            }
          })({
            token: e,
            tokenPingExpires: t
          })
        },
        ne = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: o = {},
            query: r = null
          } = t;
          const a = te(),
            [s, i] = (0, L.useState)(null),
            [l, c] = (0, L.useState)(!1),
            [d, u] = (0, L.useState)(null),
            h = (0, L.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: s = {}
                } = t;
                u(null), i(null), c(!0);
                const l = await v(n ?? e, {
                  pingBearer: a,
                  fetchOptions: o,
                  finalFetchOptions: s,
                  query: r
                });
                return l?.status || u(JSON.stringify(l?.error)), i(l), c(!1), l
              } catch (e) {
                u(String(e)), c(!1)
              }
              return null
            }), [e, o, r]);
          return (0, L.useEffect)((() => {
            null === s && null === d && !l && n && h()
          }), [n, s, d, l, h]), {
            data: s,
            error: d,
            loading: l,
            fetch: h
          }
        },
        oe = "__RS_CUSTOM_EVENTS__",
        re = e => `rsCustomEvent:${e}`;
      window[oe] || (window[oe] = {});
      const ae = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = re(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[oe][n] || (window[oe][n] = {
              eventQueue: [],
              subscribers: []
            }), window[oe][n].eventQueue.push(o), window[oe][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, L.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        se = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, L.useEffect)((() => {
            const n = re(e);
            return window[oe][n] || (window[oe][n] = {
              eventQueue: [],
              subscribers: []
            }), window[oe][n].subscribers.push(t), window[oe][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[oe][n].subscribers = window[oe][n].subscribers.filter((e => e !== t)), 0 === window[oe][n].subscribers.length && delete window[oe][n]
            }
          }), [e, t]), (0, L.useMemo)((() => ({})), [])
        },
        ie = E({
          context: (0, L.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: le
        } = ie,
        ce = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, T.jsx)(ie.Provider, {
            value: t,
            children: n
          })
        },
        de = () => (0, L.useContext)(ie),
        ue = C({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, U.UT)(!1)
        }),
        he = e => ue(e),
        ge = E({
          context: (0, L.createContext)(null),
          key: "scrollContext"
        }),
        we = () => (0, L.useContext)(ge),
        me = e => {
          let {
            children: t
          } = e;
          const [n, o] = (0, L.useState)(window.pageYOffset), [r, a] = (0, L.useState)(null), [s, i] = (0, L.useState)(!1), l = (0, z.q)(ue);
          let c;
          const d = () => {
            i(!0), clearTimeout(c), c = setTimeout((() => {
              i(!1)
            }), 2e3)
          };
          return (0, L.useEffect)((() => {
            let e;
            const t = () => {
              if (l) return void a(!1);
              const t = Math.max(0, window.pageYOffset);
              o(t), s || a(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [s, l]), (0, L.useMemo)((() => (0, T.jsx)(ge.Provider, {
            value: {
              freezeUserShouldSeeMore: l,
              pageYOffset: n,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: he,
              userShouldSeeMore: r
            },
            children: t
          })), [l, n, d, r])
        },
        pe = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        fe = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = pe;
          return Object.keys(pe).map((t => {
            const {
              min: o,
              max: r
            } = pe[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < pe.sm.min,
            isTablet: e < pe.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ve = E({
          context: (0, L.createContext)(fe()),
          key: "resizeContext"
        }),
        {
          Consumer: be
        } = ve,
        ke = (0, U.UT)(fe()),
        xe = e => {
          let {
            children: t
          } = e;
          const n = (0, z.q)(ke);
          return (0, L.useEffect)((() => {
            const e = () => {
              ke(fe())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, T.jsx)(ve.Provider, {
            value: n,
            children: t
          })
        },
        ye = () => (0, L.useContext)(ve),
        Se = () => {
          const [e, t] = (0, L.useState)(!1);
          return (0, L.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        Ee = () => {
          const [e, t] = (0, L.useState)(!1);
          return (0, L.useEffect)((() => {
            if ("connection" in navigator && "saveData" in navigator.connection) {
              const e = navigator?.connection;
              t(e.saveData);
              const n = () => {
                t(e.saveData)
              };
              return e.addEventListener("change", n), () => {
                e.removeEventListener("change", n)
              }
            }
          }), []), e
        };
      n(2859), n(4943);
      const Pe = e => {
          const [t, n] = (0, L.useState)(!1), o = (0, L.useRef)(null);
          return (0, L.useEffect)((() => {
            const r = () => {
              if (t || !o.current) return;
              const a = o.current,
                {
                  height: s
                } = a.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= a.offsetTop + s * e && (n(!0), window.removeEventListener("scroll", r))
            };
            return window.addEventListener("scroll", r, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", r)
            }
          }), [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        Ce = (e, t) => {
          const n = N(),
            o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: n,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: a,
              error: s,
              ...i
            } = (0, $.IT)(e, o);
          return (0, L.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, L.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [a]), (0, L.useEffect)((() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        Le = (0, L.createContext)((() => ({
          data: null
        }))),
        Te = new Promise((e => {
          e()
        })),
        Me = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new I.D)
        },
        Ae = [() => Te, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new B.R(Me))
        }],
        _e = (0, L.createContext)((() => Ae)),
        Re = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, T.jsx)(_e.Provider, {
            value: D.n,
            children: (0, T.jsx)(Le.Provider, {
              value: Ce,
              children: t
            })
          })
        }),
        je = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Le)(e, t)),
        Oe = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)(_e)(e));
      var Ue = n(6532);
      var Ie = n(5879),
        Be = n(49),
        De = n.n(Be);
      const $e = (0, n(1863).e)({
          sha256: r.sc
        }),
        Fe = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? x(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, L.useState)(new I.D({
              typePolicies: n
            })),
            s = $e.concat((e => {
              let {
                token: t
              } = e;
              return (0, Ue.o)(((e, n) => {
                let {
                  headers: o
                } = n;
                const r = t?.() ?? null;
                return r ? {
                  headers: {
                    ...o,
                    authorization: `Bearer ${r}`
                  }
                } : null
              }))
            })({
              token: t?.token
            }).concat((e => (0, Ie.$)({
              ...e,
              fetch: De()
            }))(r)));
          return new B.R({
            cache: a,
            link: s
          })
        },
        He = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = Fe({
            graphOptions: n,
            typePolicies: o
          });
          return (0, T.jsx)(K, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, T.jsx)(Je.X, {
              client: r,
              children: (0, T.jsx)(Re, {
                children: t
              })
            })
          })
        },
        ze = {
          RockstarGames_Users_Model_Entity_User_o: {
            fields: {
              logged_in: {
                read(e, t) {
                  let {
                    readField: n
                  } = t;
                  return Number.isInteger(n("id"))
                }
              },
              agegate_pass: {
                read(e, t) {
                  let {
                    readField: n
                  } = t;
                  const o = void 0 !== n("isAMinor") && !n("isAMinor"),
                    r = lt()?.agegatePass;
                  return o ?? r
                }
              }
            }
          }
        },
        qe = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, U.UT)(null),
            r = (0, U.UT)(null);
          return function(t) {
            return (0, T.jsx)(He, {
              typePolicies: ze,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPingExpires: r
              },
              children: (0, T.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ne = (0, U.UT)({}),
        Ge = "data-disallow-body-scroll",
        Xe = e => {
          const t = (0, z.q)(Ne),
            n = Object.values(t).some((e => !!e));
          return (0, L.useEffect)((() => {
            n ? document.documentElement.setAttribute(Ge, "true") : document.documentElement.removeAttribute(Ge)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Ne(e))({
              ...t,
              [e]: n
            })
          }
        },
        Ve = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        },
        Qe = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var We = n(1207),
        Je = n(1477),
        Ye = n(8037),
        Ke = n(4875),
        Ze = n.n(Ke);
      const et = (0, n(5138).A)(),
        tt = et?.id,
        nt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ot = e => {
          const t = {
            ...e,
            environment: tt,
            display_type: nt
          };
          Ze().dataLayer({
            dataLayer: t
          })
        },
        rt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, X.useLocation)();
          return (0, L.useEffect)((() => {
            ot({
              event: "trackPageview"
            })
          }), [n]), (0, T.jsx)(e, {
            ...t
          })
        })(e, t),
        at = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Ze().initialize(n)
        },
        st = "rockstar-games-web";
      let it;
      try {
        const e = window.localStorage.getItem(st);
        it = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        it = {}
      }
      const lt = (0, U.UT)(it),
        ct = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...lt() ?? {}
          };
          return o[t] = n, null === n && delete o[t], window.localStorage.setItem(st, JSON.stringify(o)), lt(o), o
        },
        dt = () => ({
          lsSettings: (0, z.q)(lt),
          settingsReactive: lt,
          mutateLSSettings: ct
        }),
        ut = E({
          context: (0, L.createContext)({}),
          key: "gtmDatalayer"
        }),
        ht = () => (0, L.useContext)(ut),
        gt = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = ht() ?? {},
            r = (0, L.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, T.jsx)(ut.Provider, {
            value: r,
            children: t
          })
        },
        wt = e => t => ((e, t) => (0, T.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ot(e)
          }
        }))(e, t),
        mt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, L.useState)(t), a = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => a(e)));
                t = {
                  ...t,
                  items: e
                }
              }
              const o = t?.mediaQueryList;
              return o?.length ? (o.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
                t = {
                  ...t,
                  ...e
                }
              })), t) : t
            };
            return (0, L.useEffect)((() => {
              const e = l().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, T.jsx)(e, {
              ...o
            })
          })(e, n, t)
        },
        pt = Ye.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ft = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const {
                data: t
              } = je(pt, {
                variables: {
                  config: e,
                  locale: "en_us"
                }
              });
              return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, T.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        }
    }
  }
]);