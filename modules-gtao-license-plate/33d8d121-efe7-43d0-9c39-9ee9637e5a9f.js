! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "33d8d121-efe7-43d0-9c39-9ee9637e5a9f", e._sentryDebugIdIdentifier = "sentry-dbid-33d8d121-efe7-43d0-9c39-9ee9637e5a9f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [113], {
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
    9358: (e, t, n) => {
      n.d(t, {
        A: () => g
      });
      var o = n(1328),
        r = n(1032),
        s = n.n(r),
        a = n(6188),
        i = n.n(a),
        c = n(2570),
        l = n(267);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, g = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: a,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: g = null
          } = await (a?.()) ?? {}, w = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let m = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (m += `?${new URLSearchParams(r)}`), !g && c) return null;
          g && (w.Authorization = `Bearer ${g}`);
          const p = {
              headers: w
            },
            f = s().all([p, t, n]),
            v = JSON.stringify({
              ...f,
              url: m
            }),
            b = await (0, o.sc)(v);
          if (l) {
            if (h[b]?.response) return h[b].response;
            if (h[b]?.loading) return {
              error: null,
              result: null
            };
            h[b] = {
              loading: !0
            }
          }
          const k = await fetch(m, f),
            x = await k.json();
          return l && (h[b] = {
            response: x,
            loading: !1
          }), x
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    7122: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const o = () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }
    },
    2570: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        s = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: s,
            graphEnv: a,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const h = o?.apiHost ?? t,
            g = o?.authHost ?? n,
            w = o?.cdnBase ?? l,
            m = o?.clientId ?? s,
            p = r?.marketingAuthTLD ?? u,
            f = o?.scHost ?? i,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: f,
            hostname: c,
            cdnBase: w,
            key: d,
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
        a = [s({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), s({
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
        i = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return a.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || a[0]
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
        yh: () => p,
        Ap: () => h,
        Xs: () => v,
        kx: () => b,
        rJ: () => x,
        pT: () => w,
        lV: () => k,
        PA: () => o,
        My: () => g
      }), n(6188);
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
    7807: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        r = e => {
          let {
            context: t,
            key: n
          } = e;
          return o()?.[n] || (o()[n] = t), o()[n]
        }
    },
    5459: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        r = e => {
          let {
            key: t,
            value: n,
            domain: r = "default"
          } = e;
          return o()?.[r] || (o()[r] = {}), o()?.[r]?.[t] || (o()[r][t] = n), o()[r][t]
        }
    },
    267: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    6082: (e, t, n) => {
      n.d(t, {
        U4: () => S.U4,
        RK: () => r,
        bn: () => L,
        ri: () => a,
        vx: () => E,
        sb: () => C,
        Ym: () => d,
        CA: () => y.useNewswirePost,
        OG: () => u,
        ZC: () => w,
        sq: () => g,
        OH: () => k,
        zP: () => x,
        Cb: () => f,
        GA: () => T
      });
      const o = (0, n(7122).A)(),
        r = () => o;
      var s = n(2229);
      const a = (e, t) => {
        const [n, o] = (0, s.useState)(0);
        return (0, s.useEffect)((() => {
          if (e.current) {
            const {
              current: n
            } = e, r = n.getBoundingClientRect(), {
              width: s
            } = r;
            let a = s;
            if (!0 === t) {
              const e = window.getComputedStyle(n);
              a += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
            }
            o(a)
          }
        }), [e]), n
      };
      var i = n(3562),
        c = n(175);
      const l = (0, i.UT)(document.documentElement.lang),
        d = () => (0, c.q)(l),
        u = e => {
          const [t, n] = (0, s.useState)(null), [o, r] = (0, s.useState)(null), [a, i] = (0, s.useState)({});
          return (0, s.useLayoutEffect)((() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", (() => {
              i({
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
      var h = n(9623);
      const g = () => {
          const {
            search: e
          } = (0, h.useLocation)();
          return new URLSearchParams(e)
        },
        w = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var m = n(6118),
        p = n(9358);
      const f = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const a = (0, m.Es)(),
          [i, c] = (0, s.useState)(null),
          [l, d] = (0, s.useState)(!1),
          [u, h] = (0, s.useState)(null),
          g = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: s = {}
              } = t;
              h(null), c(null), d(!0);
              const i = await (0, p.A)(n ?? e, {
                pingBearer: a,
                fetchOptions: o,
                finalFetchOptions: s,
                query: r
              });
              return i?.status || h(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              h(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, s.useEffect)((() => {
          null === i && null === u && !l && n && g()
        }), [n, i, u, l, g]), {
          data: i,
          error: u,
          loading: l,
          fetch: g
        }
      };
      n(2570);
      const v = "__RS_CUSTOM_EVENTS__",
        b = e => `rsCustomEvent:${e}`;
      window[v] || (window[v] = {});
      const k = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = b(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[v][n] || (window[v][n] = {
              eventQueue: [],
              subscribers: []
            }), window[v][n].eventQueue.push(o), window[v][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        x = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = b(e);
            return window[v][n] || (window[v][n] = {
              eventQueue: [],
              subscribers: []
            }), window[v][n].subscribers.push(t), window[v][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[v][n].subscribers = window[v][n].subscribers.filter((e => e !== t)), 0 === window[v][n].subscribers.length && delete window[v][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var y = n(5285),
        S = n(6941);
      n(6450);
      const E = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        C = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
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
      var P = n(2859),
        A = n(4943);
      const L = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, P.XB)(), {
            effectiveConnectionType: o
          } = (0, P.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, P.xV)(), {
            saveData: a
          } = (0, P.zp)(), i = E(), c = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (A.n8 || A.lT || A.w || A.UX) return !1;
              const t = "Safari" === A.C0,
                s = "Firefox" === A.C0,
                c = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                l = r && r >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(c) || e(l) || !t && !s && e(d))
            })();
            s !== e && t(s)
          };
          return (0, s.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, o, e, r, a, i]), e
        },
        T = e => {
          const [t, n] = (0, s.useState)(!1), o = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
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
        }
    },
    3012: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => S.R,
        ApolloProvider: () => ne.X,
        DataLayerProvider: () => xe,
        GraphOperationsProvider: () => _,
        InMemoryCache: () => y.D,
        Platform: () => te.OD,
        Platforms: () => te.lv,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => ye.uU,
        RockstarGraphProvider: () => G,
        RockstarTokenProvider: () => I.ec,
        ScrollProvider: () => Ae.N2,
        classList: () => te.pP,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => te.wC,
        downloadFile: () => te.PE,
        findPlatform: () => te.rB,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => te.yh,
        getCookieValueByName: () => te.Ap,
        getGen8Consoles: () => te.Xs,
        getGen9Consoles: () => te.kx,
        getLanguageLabel: () => te.rJ,
        getScConfigForOrigin: () => a.A,
        getUriForGraphEnv: () => i,
        gql: () => oe.J1,
        gtmInit: () => ge,
        importAll: () => te.pT,
        isGen9Platform: () => te.lV,
        lsSettingsReactive: () => pe,
        makeVar: () => x.UT,
        mutateLSSettings: () => fe,
        newswirePost: () => Z,
        oneTrustInit: () => K,
        safeStyles: () => d,
        scrollToElement: () => te.PA,
        setContextItem: () => u.A,
        setCookieValue: () => te.My,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => re.t,
        track: () => de,
        useApolloClient: () => q,
        useBase: () => P.RK,
        useBodyScrollable: () => J,
        useDataLayer: () => ke,
        useHasReduceMotionPreference: () => P.vx,
        useHasSaveDataPreference: () => P.sb,
        useLocale: () => P.Ym,
        useMutateState: () => v,
        useMutation: () => U,
        useNewswirePost: () => P.CA,
        usePreloadImg: () => P.OG,
        usePrevious: () => P.ZC,
        useQuery: () => j,
        useQueryParams: () => P.sq,
        useReactiveVar: () => Q.q,
        useRockstarEventDispatcher: () => P.OH,
        useRockstarEventSubscriber: () => P.zP,
        useRockstarToken: () => I.e9,
        useRockstarTokenPing: () => I.Es,
        useRockstarTokenReactive: () => I.bD,
        useRockstarWebLSSettings: () => ve,
        useScApi: () => P.Cb,
        useScroll: () => Ae.Ll,
        useScrollTracking: () => P.GA,
        useState: () => p,
        useWindowResize: () => ye.G4,
        withAutoRouteTracking: () => he,
        withGtmTracking: () => Se,
        withMediaBasedProps: () => Ee,
        withReactiveState: () => k,
        withRockstarGraph: () => V,
        withTranslations: () => Pe
      });
      var o = n(9358);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(7122),
        a = n(2570);
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
      var c = n(6188),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(7807),
        h = n(5459),
        g = n(2229),
        w = n(8096);
      const m = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextGet"
        }),
        p = () => (0, g.useContext)(m),
        f = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, g.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, Q.q)(n);
          const o = (0, g.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, w.jsx)(m.Provider, {
            value: n(),
            children: (0, w.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        k = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, w.jsx)(b, {
              state: n,
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        };
      var x = n(3562),
        y = n(5164),
        S = n(5220),
        E = n(5053),
        C = n(4474),
        P = n(6082);
      const A = (e, t) => {
          const n = (0, P.Ym)(),
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
            } = (0, C.IT)(e, o);
          return (0, g.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, g.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, g.useEffect)((() => {
            if (o.autoSetError && a) throw new Error(String(a))
          }), [a]), {
            loading: s,
            error: a,
            data: r,
            ...i
          }
        },
        L = (0, g.createContext)((() => ({
          data: null
        }))),
        T = new Promise((e => {
          e()
        })),
        M = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new y.D)
        },
        R = [() => T, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new S.R(M))
        }],
        O = (0, g.createContext)((() => R)),
        _ = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, w.jsx)(O.Provider, {
            value: E.n,
            children: (0, w.jsx)(L.Provider, {
              value: A,
              children: t
            })
          })
        }),
        j = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, g.useContext)(L)(e, t)),
        U = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, g.useContext)(O)(e));
      var I = n(6118),
        B = n(6532);
      var D = n(5879),
        $ = n(49),
        F = n.n($);
      var z = n(1863),
        H = n(1328);
      const N = (0, z.e)({
          sha256: H.sc
        }),
        q = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [s] = (0, g.useState)(new y.D({
              typePolicies: n
            })),
            a = N.concat((e => {
              let {
                token: t
              } = e;
              return (0, B.o)(((e, n) => {
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
            }).concat((e => (0, D.$)({
              ...e,
              fetch: F()
            }))(r)));
          return new S.R({
            cache: s,
            link: a
          })
        },
        G = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = q({
            graphOptions: n,
            typePolicies: o
          });
          return (0, w.jsx)(I.ec, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, w.jsx)(ne.X, {
              client: r,
              children: (0, w.jsx)(_, {
                children: t
              })
            })
          })
        },
        X = {
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
                    r = pe()?.agegatePass;
                  return o ?? r
                }
              }
            }
          }
        },
        V = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, x.UT)(null),
            r = (0, x.UT)(null);
          return function(t) {
            return (0, w.jsx)(G, {
              typePolicies: X,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPingExpires: r
              },
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        };
      var Q = n(175);
      const W = (0, x.UT)({}),
        Y = "data-disallow-body-scroll",
        J = e => {
          const t = (0, Q.q)(W),
            n = Object.values(t).some((e => !!e));
          return (0, g.useEffect)((() => {
            n ? document.documentElement.setAttribute(Y, "true") : document.documentElement.removeAttribute(Y)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => W(e))({
              ...t,
              [e]: n
            })
          }
        },
        K = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        };
      var Z = n(5285);
      const ee = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var te = n(1207),
        ne = n(1477),
        oe = n(8037),
        re = n(267),
        se = n(4875),
        ae = n.n(se);
      const ie = (0, n(5138).A)(),
        ce = ie?.id,
        le = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        de = e => {
          const t = {
            ...e,
            environment: ce,
            display_type: le
          };
          ae().dataLayer({
            dataLayer: t
          })
        };
      var ue = n(9623);
      const he = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, ue.useLocation)();
          return (0, g.useEffect)((() => {
            de({
              event: "trackPageview"
            })
          }), [n]), (0, w.jsx)(e, {
            ...t
          })
        })(e, t),
        ge = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          ae().initialize(n)
        },
        we = "rockstar-games-web";
      let me;
      try {
        const e = window.localStorage.getItem(we);
        me = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        me = {}
      }
      const pe = (0, x.UT)(me),
        fe = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...pe() ?? {}
          };
          return o[t] = n, null === n && delete o[t], window.localStorage.setItem(we, JSON.stringify(o)), pe(o), o
        },
        ve = () => ({
          lsSettings: (0, Q.q)(pe),
          settingsReactive: pe,
          mutateLSSettings: fe
        }),
        be = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "gtmDatalayer"
        }),
        ke = () => (0, g.useContext)(be),
        xe = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = ke() ?? {},
            r = (0, g.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, w.jsx)(be.Provider, {
            value: r,
            children: t
          })
        };
      var ye = n(6450);
      const Se = e => t => ((e, t) => (0, w.jsx)(e, {
          ...t,
          gtmTrack: e => {
            de(e)
          }
        }))(e, t),
        Ee = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, g.useState)(t), s = e => {
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
            return (0, g.useEffect)((() => {
              const e = l().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, w.jsx)(e, {
              ...o
            })
          })(e, n, t)
        },
        Ce = oe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Pe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const {
                data: t
              } = j(Ce, {
                variables: {
                  config: e,
                  locale: "en_us"
                }
              });
              return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, w.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var Ae = n(6941)
    },
    6118: (e, t, n) => {
      n.d(t, {
        ec: () => u,
        e9: () => g,
        Es: () => w,
        bD: () => h
      });
      var o = n(2229),
        r = n(3562),
        s = n(7807),
        a = n(5966);
      var i = n(3012),
        c = n(8096);
      const l = {
          token: (0, r.UT)(null),
          tokenPingExpires: (0, r.UT)(100)
        },
        d = (0, s.A)({
          context: (0, o.createContext)(l),
          key: "utilsTokenProvider"
        }),
        u = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, c.jsx)(d.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: r
            },
            children: t
          })
        },
        h = () => {
          const {
            token: e,
            tokenPingExpires: t
          } = (0, o.useContext)(d);
          return [e, t]
        },
        g = () => {
          const [e] = h();
          return (0, i.useReactiveVar)(e)
        },
        w = () => {
          const [e, t] = h();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: o
            } = (0, a.getScConfigForOrigin)();
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
        }
    },
    5285: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(2229),
        r = n(7807),
        s = n(8096);
      const a = (0, r.A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: i
        } = a,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, s.jsx)(a.Provider, {
            value: t,
            children: n
          })
        },
        l = () => (0, o.useContext)(a)
    },
    6450: (e, t, n) => {
      n.d(t, {
        G4: () => w,
        uU: () => g
      });
      var o = n(2229),
        r = n(3562),
        s = n(175),
        a = n(7807),
        i = n(8096);
      const c = {
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
        l = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = c;
          return Object.keys(c).map((t => {
            const {
              min: o,
              max: r
            } = c[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          })), {
            isMobile: e < c.sm.min,
            isTablet: e < c.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        d = (0, a.A)({
          context: (0, o.createContext)(l()),
          key: "resizeContext"
        }),
        {
          Consumer: u
        } = d,
        h = (0, r.UT)(l()),
        g = e => {
          let {
            children: t
          } = e;
          const n = (0, s.q)(h);
          return (0, o.useEffect)((() => {
            const e = () => {
              h(l())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.jsx)(d.Provider, {
            value: n,
            children: t
          })
        },
        w = () => (0, o.useContext)(d)
    },
    6941: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => g,
        U4: () => d
      });
      var o = n(2229),
        r = n(3562),
        s = n(175),
        a = n(7807),
        i = n(5459),
        c = n(8096);
      const l = (0, i.A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, r.UT)(!1)
        }),
        d = e => l(e),
        u = (0, a.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        h = () => (0, o.useContext)(u),
        g = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [h, g] = (0, o.useState)(!1), w = (0, s.q)(l);
          let m;
          const p = () => {
            g(!0), clearTimeout(m), m = setTimeout((() => {
              g(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (w) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, w]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: w,
              pageYOffset: n,
              pauseUserShouldSeeMore: p,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: t
          })), [w, n, p, a])
        }
    }
  }
]);