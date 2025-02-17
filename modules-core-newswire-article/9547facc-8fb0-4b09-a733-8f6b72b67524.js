! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9547facc-8fb0-4b09-a733-8f6b72b67524", e._sentryDebugIdIdentifier = "sentry-dbid-9547facc-8fb0-4b09-a733-8f6b72b67524")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3254], {
    6400: (e, t, n) => {
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
    37415: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    65168: (e, t, n) => {
      n.d(t, {
        A: () => w
      });
      var o = n(6621),
        r = n(94751),
        s = n.n(r),
        a = n(16188),
        i = n.n(a),
        c = n(81012),
        l = n(17453);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, w = async function(e) {
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
            bearerToken: w = null
          } = await (a?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let p = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (p += `?${new URLSearchParams(r)}`), !w && c) return null;
          w && (g.Authorization = `Bearer ${w}`);
          const m = {
              headers: g
            },
            f = s().all([m, t, n]),
            v = JSON.stringify({
              ...f,
              url: p
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
          const x = await fetch(p, f),
            k = await x.json();
          return l && (h[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    53976: (e, t, n) => {
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
    81012: (e, t, n) => {
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
            w = o?.authHost ?? n,
            g = o?.cdnBase ?? l,
            p = o?.clientId ?? s,
            m = r?.marketingAuthTLD ?? u,
            f = o?.scHost ?? i,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: f,
            hostname: c,
            cdnBase: g,
            key: d,
            clientId: p,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${m}/auth/gateway.json`,
            logout: `https://${m}/auth/sc-auth-logout`,
            pingBearer: `https://${m}/${v}`
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
    26432: (e, t, n) => {
      n.d(t, {
        OD: () => a,
        lv: () => i,
        pP: () => d,
        wC: () => r,
        PE: () => b,
        rB: () => l,
        yh: () => v,
        Ap: () => w,
        Xs: () => x,
        kx: () => k,
        rJ: () => S,
        pT: () => p,
        lV: () => y,
        PA: () => o,
        My: () => g,
        _e: () => m
      }), n(16188);
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
      var u = n(29040),
        h = n(37415);
      const w = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        g = (e, t) => {
          e && void 0 !== t && (0, u.canStoreCookie)(e) && w(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,h.F)()}; path=/;`)
        };
      n(91029);
      const p = e => e.keys().forEach(e),
        m = e => e.replace(/(<([^>]+)>)/gi, ""),
        f = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        v = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return f.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        b = e => {
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
        x = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        k = () => [i.xboxsx.name, i.ps5.name],
        y = e => k().includes(e),
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
    97277: (e, t, n) => {
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
    37273: (e, t, n) => {
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
    17453: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    5315: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        ri: () => a,
        vx: () => x,
        sb: () => k,
        Ym: () => i.A,
        CA: () => b.useNewswirePost,
        OG: () => c,
        ZC: () => u,
        sq: () => d,
        OH: () => f,
        zP: () => v,
        Cb: () => g,
        GA: () => y
      });
      const o = (0, n(53976).A)(),
        r = () => o;
      var s = n(62229);
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
      var i = n(10842);
      const c = e => {
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
      var l = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, l.useLocation)();
          return new URLSearchParams(e)
        },
        u = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var h = n(24204),
        w = n(65168);
      const g = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const a = (0, h.Es)(),
          [i, c] = (0, s.useState)(null),
          [l, d] = (0, s.useState)(!1),
          [u, g] = (0, s.useState)(null),
          p = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: s = {}
              } = t;
              g(null), c(null), d(!0);
              const i = await (0, w.A)(n ?? e, {
                pingBearer: a,
                fetchOptions: o,
                finalFetchOptions: s,
                query: r
              });
              return i?.status || g(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              g(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, s.useEffect)((() => {
          null === i && null === u && !l && n && p()
        }), [n, i, u, l, p]), {
          data: i,
          error: u,
          loading: l,
          fetch: p
        }
      };
      n(81012);
      const p = "__RS_CUSTOM_EVENTS__",
        m = e => `rsCustomEvent:${e}`;
      window[p] || (window[p] = {});
      const f = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = m(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[p][n] || (window[p][n] = {
              eventQueue: [],
              subscribers: []
            }), window[p][n].eventQueue.push(o), window[p][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = m(e);
            return window[p][n] || (window[p][n] = {
              eventQueue: [],
              subscribers: []
            }), window[p][n].subscribers.push(t), window[p][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[p][n].subscribers = window[p][n].subscribers.filter((e => e !== t)), 0 === window[p][n].subscribers.length && delete window[p][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var b = n(57987);
      n(37059), n(60028);
      const x = () => {
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
        k = () => {
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
      n(19980), n(91544);
      const y = e => {
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
    10842: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      var o = n(82753),
        r = n(59094);
      const s = (0, o.UT)(document.documentElement.lang),
        a = () => (0, r.q)(s)
    },
    93514: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => z.R,
        ApolloProvider: () => q.X,
        DataLayerProvider: () => ue,
        GraphOperationsProvider: () => y._y,
        InMemoryCache: () => G.D,
        Platform: () => H.OD,
        Platforms: () => H.lv,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => he.uU,
        RockstarGraphProvider: () => M,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => be.N2,
        classList: () => H.pP,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => H.wC,
        downloadFile: () => H.PE,
        findPlatform: () => H.rB,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => H.yh,
        getConfigForDomain: () => a.A,
        getCookieValueByName: () => H.Ap,
        getGen8Consoles: () => H.Xs,
        getGen9Consoles: () => H.kx,
        getLanguageLabel: () => H.rJ,
        getUriForGraphEnv: () => i,
        gql: () => N.J1,
        gtmInit: () => te,
        importAll: () => H.pT,
        isGen9Platform: () => H.lV,
        makeVar: () => k.UT,
        mutateWebSettings: () => ie,
        newswirePost: () => $,
        oneTrustInit: () => D,
        safeStyles: () => d,
        scrollToElement: () => H.PA,
        setContextItem: () => u.A,
        setCookieValue: () => H.My,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => F,
        toScLocaleString: () => X.t,
        track: () => K,
        useApolloClient: () => _,
        useBase: () => ve.RK,
        useBodyScrollable: () => B,
        useDataLayer: () => de,
        useHasReduceMotionPreference: () => ve.vx,
        useHasSaveDataPreference: () => ve.sb,
        useLocale: () => ve.Ym,
        useMutateState: () => v,
        useMutation: () => y.n_,
        useNewswirePost: () => ve.CA,
        usePreloadImg: () => ve.OG,
        usePrevious: () => ve.ZC,
        useQuery: () => y.IT,
        useQueryParams: () => ve.sq,
        useReactiveVar: () => O.q,
        useRockstarEventDispatcher: () => ve.OH,
        useRockstarEventSubscriber: () => ve.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => ce,
        useScApi: () => ve.Cb,
        useScroll: () => be.Ll,
        useScrollTracking: () => ve.GA,
        useState: () => m,
        useWindowResize: () => he.G4,
        webSettingsReactive: () => ae,
        withAutoRouteTracking: () => ee,
        withGtmTracking: () => we,
        withMediaBasedProps: () => ge,
        withReactiveState: () => x,
        withRockstarGraph: () => j,
        withTranslations: () => fe
      });
      var o = n(65168);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(53976),
        a = n(81012);
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
      var c = n(16188),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(97277),
        h = n(37273),
        w = n(62229),
        g = n(91029);
      const p = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "graphContextGet"
        }),
        m = () => (0, w.useContext)(p),
        f = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, w.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, O.q)(n);
          const o = (0, w.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, g.jsx)(p.Provider, {
            value: n(),
            children: (0, g.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        x = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, g.jsx)(b, {
              state: n,
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        };
      var k = n(82753),
        y = n(19800),
        S = n(24204),
        E = n(55197);
      var P = n(13556),
        C = n(62600),
        A = n.n(C);
      var T = n(6162),
        L = n(6621);
      const R = (0, T.e)({
          sha256: L.sc
        }),
        _ = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [s] = (0, w.useState)(new G.D({
              typePolicies: n
            })),
            a = R.concat((e => {
              let {
                token: t
              } = e;
              return (0, E.o)(((e, n) => {
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
            }).concat((e => (0, P.$)({
              ...e,
              fetch: A()
            }))(r)));
          return new z.R({
            cache: s,
            link: a
          })
        },
        M = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = _({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)(S.ec, {
            token: n?.token,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, g.jsx)(q.X, {
              client: r,
              children: (0, g.jsx)(y._y, {
                children: t
              })
            })
          })
        },
        j = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, k.UT)(null),
            r = (0, k.UT)(null);
          return function(t) {
            return (0, g.jsx)(M, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPingExpires: r
              },
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        };
      var O = n(59094);
      const I = (0, k.UT)({}),
        U = "data-disallow-body-scroll",
        B = e => {
          const t = (0, O.q)(I),
            n = Object.values(t).some((e => !!e));
          return (0, w.useEffect)((() => {
            n ? document.documentElement.setAttribute(U, "true") : document.documentElement.removeAttribute(U)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => I(e))({
              ...t,
              [e]: n
            })
          }
        },
        D = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        };
      var $ = n(57987);
      const F = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var H = n(26432),
        z = n(19937),
        q = n(1140),
        N = n(6854),
        G = n(7711),
        X = n(17453),
        V = n(84842),
        W = n.n(V);
      const Q = (0, n(6400).A)(),
        Y = Q?.id,
        J = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        K = e => {
          const t = {
            ...e,
            environment: Y,
            display_type: J
          };
          W().dataLayer({
            dataLayer: t
          })
        };
      var Z = n(9623);
      const ee = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Z.useLocation)();
          return (0, w.useEffect)((() => {
            K({
              event: "trackPageview"
            })
          }), [n]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        te = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          W().initialize(n)
        };
      var ne = n(92217),
        oe = n(37415);
      const re = "rockstar-games-web";
      let se;
      try {
        const e = ne.A.get(re) ?? "";
        se = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        se = {}
      }
      const ae = (0, k.UT)(se),
        ie = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...ae() ?? {}
          };
          return o[t] = n, null === n && delete o[t], ne.A.set(re, JSON.stringify(o), {
            expires: 30,
            domain: (0, oe.F)(),
            path: "/"
          }), ae(o), o
        },
        ce = () => ({
          webSettings: (0, O.q)(ae),
          webSettingsReactive: ae,
          mutateWebSettings: ie
        }),
        le = (0, u.A)({
          context: (0, w.createContext)({}),
          key: "gtmDatalayer"
        }),
        de = () => (0, w.useContext)(le),
        ue = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = de() ?? {},
            r = (0, w.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, g.jsx)(le.Provider, {
            value: r,
            children: t
          })
        };
      var he = n(60028);
      const we = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            K(e)
          }
        }))(e, t),
        ge = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, w.useState)(t), s = e => {
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
            return (0, w.useEffect)((() => {
              const e = l().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, g.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var pe = n(10842);
      const me = N.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        fe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, pe.A)(),
                {
                  data: n
                } = (0, y.IT)(me, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, g.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var ve = n(5315),
        be = n(37059)
    },
    19800: (e, t, n) => {
      n.d(t, {
        _y: () => b,
        _l: () => i._,
        n_: () => k,
        IT: () => x
      });
      var o = n(62229),
        r = n(7711),
        s = n(19937),
        a = n(71951),
        i = n(32044),
        c = n(19030),
        l = n(16188),
        d = n.n(l),
        u = n(5315);
      const h = (e, t) => {
        const n = (0, u.Ym)(),
          r = {
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
            data: s,
            loading: a,
            error: i,
            ...l
          } = (0, c.IT)(e, r);
        return (0, o.useEffect)((() => {
          if (s && r.setTitleDataPath) {
            const e = d().get(s, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, o.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: a
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [a]), (0, o.useEffect)((() => {
          if (r.autoSetError && i) throw new Error(String(i))
        }), [i]), {
          loading: a,
          error: i,
          data: s,
          ...l
        }
      };
      var w = n(91029);
      const g = (0, o.createContext)((() => ({
          data: null
        }))),
        p = new Promise((e => {
          e()
        })),
        m = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        f = [() => p, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(m))
        }],
        v = (0, o.createContext)((() => f)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, w.jsx)(v.Provider, {
            value: a.n,
            children: (0, w.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }),
        x = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, o.useContext)(g)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, o.useContext)(v)(e))
    },
    24204: (e, t, n) => {
      n.d(t, {
        ec: () => u,
        e9: () => w,
        Es: () => g,
        bD: () => h
      });
      var o = n(62229),
        r = n(82753),
        s = n(97277),
        a = n(81012);
      var i = n(93514),
        c = n(91029);
      const l = {
          token: (0, r.UT)(""),
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
        w = () => {
          const [e] = h();
          return (0, i.useReactiveVar)(e)
        },
        g = () => {
          const [e, t] = h();
          return () => (async e => {
            let {
              token: t,
              tokenPingExpires: n
            } = e;
            const {
              pingBearer: o
            } = (0, a.A)();
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
    57987: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(62229),
        r = n(97277),
        s = n(91029);
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
    60028: (e, t, n) => {
      n.d(t, {
        G4: () => g,
        uU: () => w
      });
      var o = n(62229),
        r = n(82753),
        s = n(59094),
        a = n(97277),
        i = n(91029);
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
        w = e => {
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
        g = () => (0, o.useContext)(d)
    },
    37059: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => w
      });
      var o = n(62229),
        r = n(82753),
        s = n(59094),
        a = n(97277),
        i = n(37273),
        c = n(91029);
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
        w = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [h, w] = (0, o.useState)(!1), g = (0, s.q)(l);
          let p;
          const m = () => {
            w(!0), clearTimeout(p), p = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (g) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, g]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: g,
              pageYOffset: n,
              pauseUserShouldSeeMore: m,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: t
          })), [g, n, m, a])
        }
    }
  }
]);