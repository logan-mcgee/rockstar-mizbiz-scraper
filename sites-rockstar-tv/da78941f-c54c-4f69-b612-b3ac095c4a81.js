! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da78941f-c54c-4f69-b612-b3ac095c4a81", e._sentryDebugIdIdentifier = "sentry-dbid-da78941f-c54c-4f69-b612-b3ac095c4a81")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [220, 839], {
    5138: (e, t, n) => {
      n.d(t, {
        A: () => s,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    1207: (e, t, n) => {
      n.d(t, {
        OD: () => a,
        lv: () => i,
        pP: () => d,
        wC: () => r,
        PE: () => f,
        rB: () => l,
        yh: () => m,
        Ap: () => h,
        Xs: () => v,
        kx: () => k,
        rJ: () => x,
        pT: () => w,
        lV: () => b,
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
          }), s(n))
        },
        s = e => {
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
      class a {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const i = Object.freeze({
          pc: new a("pc", "PC", 8),
          ps: new a("ps", "PlayStation", 3),
          ps3: new a("ps3", "PlayStation 3", 2),
          ps4: new a("ps4", "PlayStation 4", 11),
          ps5: new a("ps5", "PlayStation 5", 20),
          xbox: new a("xbox", "Xbox", 4),
          xbox360: new a("xbox360", "Xbox 360", 1),
          xboxone: new a("xboxone", "Xbox One", 12),
          xboxsx: new a("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new a("switch", "Nintendo Switch™", 18),
          nintendoswitch: new a("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new a("applestore", "App Store", 102),
          googleplay: new a("googleplay", "Google Play", 1023),
          appStore: new a("app_store", "App Store", 102),
          googlePlay: new a("ggle_play", "Google Play", 1023)
        }),
        c = Object.freeze(Object.values(i));

      function l(e) {
        if (!e) return;
        if (e instanceof a) return e;
        const t = e.toString().toLowerCase();
        return c.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
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
        p = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        m = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return p.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
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
        k = () => [i.xboxsx.name, i.ps5.name],
        b = e => k().includes(e),
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
        GraphOperationsProvider: () => je,
        InMemoryCache: () => I.D,
        Platform: () => We.OD,
        Platforms: () => We.lv,
        ReactiveStateProvider: () => _,
        ResizeProvider: () => xe,
        RockstarGraphProvider: () => He,
        RockstarTokenProvider: () => K,
        ScrollProvider: () => pe,
        classList: () => We.pP,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => We.wC,
        downloadFile: () => We.PE,
        findPlatform: () => We.rB,
        getAccentColor: () => k,
        getBase: () => b,
        getCdnPrefix: () => We.yh,
        getCookieValueByName: () => We.Ap,
        getGen8Consoles: () => We.Xs,
        getGen9Consoles: () => We.kx,
        getLanguageLabel: () => We.rJ,
        getScConfigForOrigin: () => g,
        getUriForGraphEnv: () => x,
        gql: () => Ye.J1,
        gtmInit: () => st,
        importAll: () => We.pT,
        isGen9Platform: () => We.lV,
        lsSettingsReactive: () => ct,
        makeVar: () => U.UT,
        mutateLSSettings: () => lt,
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
        useMutateState: () => j,
        useMutation: () => Oe,
        useNewswirePost: () => de,
        usePreloadImg: () => G,
        usePrevious: () => Q,
        useQuery: () => _e,
        useQueryParams: () => V,
        useReactiveVar: () => z.q,
        useRockstarEventDispatcher: () => se,
        useRockstarEventSubscriber: () => ae,
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
        withMediaBasedProps: () => pt,
        withReactiveState: () => O,
        withRockstarGraph: () => qe,
        withTranslations: () => ft
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => ce,
        Provider: () => le,
        useNewswirePost: () => de
      });
      var r = n(1328),
        s = n(1032),
        a = n.n(s),
        i = n(1999),
        c = n.n(i);
      const l = window?.env?.sc,
        d = window?.env?.marketing,
        u = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: r,
            scHost: s,
            hostname: a,
            cdnBase: i,
            key: c,
            marketingAuthTLD: u
          } = e;
          const h = l?.apiHost ?? t,
            g = l?.authHost ?? n,
            w = l?.cdnBase ?? i,
            p = l?.clientId ?? o,
            m = d?.marketingAuthTLD ?? u,
            f = l?.scHost ?? s,
            v = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? r,
            host: f,
            hostname: a,
            cdnBase: w,
            key: c,
            clientId: p,
            authHost: g,
            login: `https://${g}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${m}/auth/gateway.json`,
            logout: `https://${m}/auth/sc-auth-logout`,
            pingBearer: `https://${m}/${v}`
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
          apiHost: p
        } = g(),
        m = w(document.documentElement.lang),
        f = {},
        v = async function(e) {
          let {
            fetchOptions: t = {},
            finalFetchOptions: n = {},
            query: o = null,
            pingBearer: s,
            requireBearerToken: i = !0,
            useCache: l = !0
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            const {
              bearerToken: d = null
            } = await (s?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...m && {
                "X-lang": m
              }
            };
            let h = `${p}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const g = {
                headers: u
              },
              w = a().all([g, t, n]),
              v = JSON.stringify({
                ...w,
                url: h
              }),
              k = await (0, r.sc)(v);
            if (l) {
              if (f[k]?.response) return f[k].response;
              if (f[k]?.loading) return {
                error: null,
                result: null
              };
              f[k] = {
                loading: !0
              }
            }
            const b = await fetch(h, w),
              x = await b.json();
            return l && (f[k] = {
              response: x,
              loading: !1
            }), x
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, k = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", b = () => {
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
          const t = c().clone(e);
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
        R = E({
          context: (0, L.createContext)({}),
          key: "graphContextSet"
        }),
        j = () => (0, L.useContext)(R),
        _ = e => {
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
            children: (0, T.jsx)(R.Provider, {
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
            return (0, T.jsx)(_, {
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
      const F = b(),
        H = () => F;
      var z = n(175);
      const q = (0, U.UT)(document.documentElement.lang),
        N = () => (0, z.q)(q),
        G = e => {
          const [t, n] = (0, L.useState)(null), [o, r] = (0, L.useState)(null), [s, a] = (0, L.useState)({});
          return (0, L.useLayoutEffect)((() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", (() => {
              a({
                width: t.width,
                height: t.height
              }), t = null, o || n(!0)
            })), t.addEventListener("error", (() => {
              t = null, o || (n(!1), r(!0))
            })), t.src = e, () => {
              o = !0, null !== t && (t.src = "")
            }
          }), [e]), [t, s]
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
                s = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === r) return {
                bearerToken: r
              };
              if (s && r) return {
                bearerToken: r
              };
              const a = await fetch(o, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await a.json(),
                {
                  tokenExpiresTime: c = null
                } = i;
              return null !== c && n?.(c), t(i.bearerToken ?? null), i
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
          const s = te(),
            [a, i] = (0, L.useState)(null),
            [c, l] = (0, L.useState)(!1),
            [d, u] = (0, L.useState)(null),
            h = (0, L.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: a = {}
                } = t;
                u(null), i(null), l(!0);
                const c = await v(n ?? e, {
                  pingBearer: s,
                  fetchOptions: o,
                  finalFetchOptions: a,
                  query: r
                });
                return c?.status || u(JSON.stringify(c?.error)), i(c), l(!1), c
              } catch (e) {
                u(String(e)), l(!1)
              }
              return null
            }), [e, o, r]);
          return (0, L.useEffect)((() => {
            null === a && null === d && !c && n && h()
          }), [n, a, d, c, h]), {
            data: a,
            error: d,
            loading: c,
            fetch: h
          }
        },
        oe = "__RS_CUSTOM_EVENTS__",
        re = e => `rsCustomEvent:${e}`;
      window[oe] || (window[oe] = {});
      const se = () => {
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
        ae = (e, t) => {
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
          Consumer: ce
        } = ie,
        le = e => {
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
        pe = e => {
          let {
            children: t
          } = e;
          const [n, o] = (0, L.useState)(window.pageYOffset), [r, s] = (0, L.useState)(null), [a, i] = (0, L.useState)(!1), c = (0, z.q)(ue);
          let l;
          const d = () => {
            i(!0), clearTimeout(l), l = setTimeout((() => {
              i(!1)
            }), 2e3)
          };
          return (0, L.useEffect)((() => {
            let e;
            const t = () => {
              if (c) return void s(!1);
              const t = Math.max(0, window.pageYOffset);
              o(t), a || s(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [a, c]), (0, L.useMemo)((() => (0, T.jsx)(ge.Provider, {
            value: {
              freezeUserShouldSeeMore: c,
              pageYOffset: n,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: he,
              userShouldSeeMore: r
            },
            children: t
          })), [c, n, d, r])
        },
        me = {
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
            n = me;
          return Object.keys(me).map((t => {
            const {
              min: o,
              max: r
            } = me[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          })), {
            isMobile: e < me.sm.min,
            isTablet: e < me.md.max,
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
          Consumer: ke
        } = ve,
        be = (0, U.UT)(fe()),
        xe = e => {
          let {
            children: t
          } = e;
          const n = (0, z.q)(be);
          return (0, L.useEffect)((() => {
            const e = () => {
              be(fe())
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
              const s = o.current,
                {
                  height: a
                } = s.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", r))
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
              loading: s,
              error: a,
              ...i
            } = (0, $.IT)(e, o);
          return (0, L.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = c().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, L.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, L.useEffect)((() => {
            if (o.autoSetError && a) throw new Error(String(a))
          }), [a]), {
            loading: s,
            error: a,
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
        Re = (0, L.createContext)((() => Ae)),
        je = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, T.jsx)(Re.Provider, {
            value: D.n,
            children: (0, T.jsx)(Le.Provider, {
              value: Ce,
              children: t
            })
          })
        }),
        _e = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, L.useContext)(Le)(e, t)),
        Oe = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, L.useContext)(Re)(e));
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
            [s] = (0, L.useState)(new I.D({
              typePolicies: n
            })),
            a = $e.concat((e => {
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
            cache: s,
            link: a
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
              children: (0, T.jsx)(je, {
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
                    r = ct()?.agegatePass;
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
        st = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Ze().initialize(n)
        },
        at = "rockstar-games-web";
      let it;
      try {
        const e = window.localStorage.getItem(at);
        it = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        it = {}
      }
      const ct = (0, U.UT)(it),
        lt = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...ct() ?? {}
          };
          return o[t] = n, null === n && delete o[t], window.localStorage.setItem(at, JSON.stringify(o)), ct(o), o
        },
        dt = () => ({
          lsSettings: (0, z.q)(ct),
          settingsReactive: ct,
          mutateLSSettings: lt
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
        pt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, L.useState)(t), s = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => s(e)));
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
              const e = c().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, T.jsx)(e, {
              ...o
            })
          })(e, n, t)
        },
        mt = Ye.J1`
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
              } = _e(mt, {
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