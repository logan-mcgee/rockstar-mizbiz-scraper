try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c9276f3f-58f4-482e-891d-aa3d8436514a", e._sentryDebugIdIdentifier = "sentry-dbid-c9276f3f-58f4-482e-891d-aa3d8436514a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1379], {
    2053: (e, t, n) => {
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
    2562: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    3304: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(71127),
        r = n(42298),
        s = n(70954);
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
    6590: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => m
      });
      var o = n(71127),
        r = n(75110),
        s = n(54099),
        a = n(42298),
        i = n(89858),
        c = n(70954);
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
        m = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [h, m] = (0, o.useState)(!1), g = (0, s.q)(l);
          let p;
          const w = () => {
            m(!0), clearTimeout(p), p = setTimeout((() => {
              m(!1)
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
              pauseUserShouldSeeMore: w,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: t
          })), [g, n, w, a])
        }
    },
    14531: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      var o = n(75110),
        r = n(54099);
      const s = (0, o.UT)(document.documentElement.lang),
        a = () => (0, r.q)(s)
    },
    29683: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var o = n(93876),
        r = n(90562),
        s = n.n(r),
        a = n(16188),
        i = n.n(a),
        c = n(94203),
        l = n(67538);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, m = async function(e) {
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
            bearerToken: m = null
          } = await (a?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let p = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (p += `?${new URLSearchParams(r)}`), !m && c) return null;
          m && (g.Authorization = `Bearer ${m}`);
          const w = {
              headers: g
            },
            f = s().all([w, t, n]),
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
          const y = await fetch(p, f),
            x = await y.json();
          return l && (h[b] = {
            response: x,
            loading: !1
          }), x
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    42298: (e, t, n) => {
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
    48539: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        bn: () => L,
        ri: () => a,
        vx: () => E,
        sb: () => C,
        Ym: () => i.A,
        CA: () => y.useNewswirePost,
        OG: () => c,
        ZC: () => u,
        sq: () => d,
        OH: () => v,
        zP: () => b,
        Cb: () => g,
        N6: () => S,
        Br: () => k,
        GA: () => T
      });
      const o = (0, n(2053).A)(),
        r = () => o;
      var s = n(71127);
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
      var i = n(14531);
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
      var h = n(51379),
        m = n(29683);
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
              const i = await (0, m.A)(n ?? e, {
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
      var p = n(94203);
      const w = "__RS_CUSTOM_EVENTS__",
        f = e => `rsCustomEvent:${e}`;
      window[w] || (window[w] = {});
      const v = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = f(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].eventQueue.push(o), window[w][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        b = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = f(e);
            return window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].subscribers.push(t), window[w][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[w][n].subscribers = window[w][n].subscribers.filter((e => e !== t)), 0 === window[w][n].subscribers.length && delete window[w][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var y = n(3304),
        x = (n(6590), n(67538));
      const k = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, p.A)(), r = (0, i.A)(), s = (0, x.t)(r), a = (0, h.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(s), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(a), new URL(c, `https://${n}.rockstargames.com/`)
        },
        S = e => {
          const {
            signup: t,
            login: n
          } = (0, p.A)(), o = (0, i.A)(), r = (0, x.t)(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        };
      n(55925);
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
      var A = n(27185),
        P = n(89421);
      const L = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, A.XB)(), {
            effectiveConnectionType: o
          } = (0, A.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, A.xV)(), {
            saveData: a
          } = (0, A.zp)(), i = E(), c = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (P.n8 || P.lT || P.w || P.UX) return !1;
              const t = "Safari" === P.C0,
                s = "Firefox" === P.C0,
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
    51379: (e, t, n) => {
      n.d(t, {
        ec: () => h,
        e9: () => g,
        Es: () => p,
        bD: () => m
      });
      var o = n(71127),
        r = n(75110),
        s = n(42298),
        a = n(39445),
        i = n(94203);
      var c = n(81635),
        l = n(70954);
      const d = {
          token: (0, r.UT)("")
        },
        u = (0, s.A)({
          context: (0, o.createContext)(d),
          key: "utilsTokenProvider"
        }),
        h = e => {
          let {
            children: t,
            token: n
          } = e;
          return (0, l.jsx)(u.Provider, {
            value: {
              token: n
            },
            children: t
          })
        },
        m = () => {
          const {
            token: e
          } = (0, o.useContext)(u);
          return [e]
        },
        g = () => {
          const [e] = m();
          return (0, c.useReactiveVar)(e)
        },
        p = () => {
          const [e] = m();
          return () => (async e => {
            let {
              token: t
            } = e;
            const {
              pingBearer: n
            } = (0, i.A)();
            try {
              const e = t?.() ?? "";
              if (e) {
                const {
                  exp: t = 0
                } = (0, a.s)(e) ?? {};
                if (t - (new Date).getTime() / 1e3 > 0 && e) return {
                  bearerToken: e
                }
              }
              const o = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                r = await o.json();
              return t(r.bearerToken ?? ""), r
            } catch (e) {
              return t(""), !1
            }
          })({
            token: e
          })
        }
    },
    55925: (e, t, n) => {
      n.d(t, {
        G4: () => g,
        uU: () => m
      });
      var o = n(71127),
        r = n(75110),
        s = n(54099),
        a = n(42298),
        i = n(70954);
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
        m = e => {
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
    67538: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    81635: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => S.R,
        ApolloProvider: () => ye.X,
        DataLayerProvider: () => Fe,
        GraphOperationsProvider: () => j,
        InMemoryCache: () => k.D,
        Platform: () => oe,
        Platforms: () => re,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => He.uU,
        RockstarGraphProvider: () => G,
        RockstarTokenProvider: () => $.ec,
        ScrollProvider: () => Ve.N2,
        classList: () => ie,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => te,
        downloadFile: () => pe,
        findPlatform: () => ae,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ge,
        getConfigForDomain: () => a.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => we,
        getGen9Consoles: () => fe,
        getLanguageLabel: () => be,
        getUriForGraphEnv: () => i,
        gql: () => xe.J1,
        gtmInit: () => Ue,
        importAll: () => he,
        isGen9Platform: () => ve,
        makeVar: () => x.UT,
        mutateWebSettings: () => $e,
        newswirePost: () => K,
        oneTrustInit: () => J,
        safeStyles: () => d,
        scrollToElement: () => ee,
        setContextItem: () => u.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => Z,
        toScLocaleString: () => ke.t,
        track: () => Le,
        useApolloClient: () => q,
        useBase: () => A.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => _e,
        useHasReduceMotionPreference: () => A.vx,
        useHasSaveDataPreference: () => A.sb,
        useLocale: () => A.Ym,
        useMutateState: () => v,
        useMutation: () => I,
        useNewswirePost: () => A.CA,
        usePreloadImg: () => A.OG,
        usePrevious: () => A.ZC,
        useQuery: () => O,
        useQueryParams: () => A.sq,
        useReactiveVar: () => V.q,
        useRockstarEventDispatcher: () => A.OH,
        useRockstarEventSubscriber: () => A.zP,
        useRockstarToken: () => $.e9,
        useRockstarTokenPing: () => $.Es,
        useRockstarTokenReactive: () => $.bD,
        useRockstarWebSettings: () => Be,
        useScApi: () => A.Cb,
        useScAuthLinks: () => A.N6,
        useScAuthTpaLink: () => A.Br,
        useScroll: () => Ve.Ll,
        useScrollTracking: () => A.GA,
        useState: () => w,
        useWindowResize: () => He.G4,
        webSettingsReactive: () => Ie,
        withAutoRouteTracking: () => Re,
        withGtmTracking: () => ze,
        withMediaBasedProps: () => Ne,
        withReactiveState: () => y,
        withRockstarGraph: () => X,
        withTranslations: () => Xe
      });
      var o = n(29683);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(2053),
        a = n(94203);
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
      var u = n(42298),
        h = n(89858),
        m = n(71127),
        g = n(70954);
      const p = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, m.useContext)(p),
        f = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, m.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, V.q)(n);
          const o = (0, m.useCallback)((e => {
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
        y = (e, t) => {
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
      var x = n(75110),
        k = n(61712),
        S = n(86140),
        E = n(25714),
        C = n(51335),
        A = n(48539);
      const P = (e, t) => {
          const n = (0, A.Ym)(),
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
          return (0, m.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, m.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, m.useEffect)((() => {
            if (o.autoSetError && a) throw new Error(String(a))
          }), [a]), {
            loading: s,
            error: a,
            data: r,
            ...i
          }
        },
        L = (0, m.createContext)((() => ({
          data: null
        }))),
        T = new Promise((e => {
          e()
        })),
        R = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new k.D)
        },
        U = [() => T, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new S.R(R))
        }],
        M = (0, m.createContext)((() => U)),
        j = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(M.Provider, {
            value: E.n,
            children: (0, g.jsx)(L.Provider, {
              value: P,
              children: t
            })
          })
        }),
        O = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, m.useContext)(L)(e, t)),
        I = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, m.useContext)(M)(e));
      var $ = n(51379),
        B = n(22896);
      var D = n(24735),
        _ = n(15403),
        F = n.n(_);
      var H = n(77083),
        z = n(93876);
      const N = (0, H.e)({
          sha256: z.sc
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
            [s] = (0, m.useState)(new k.D({
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
            typePolicies: o ?? {}
          });
          return (0, g.jsx)($.ec, {
            token: n?.token,
            children: (0, g.jsx)(ye.X, {
              client: r,
              children: (0, g.jsx)(j, {
                children: t
              })
            })
          })
        },
        X = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, x.UT)("");
          return function(t) {
            return (0, g.jsx)(G, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        };
      var V = n(54099);
      const W = (0, x.UT)({}),
        Q = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, V.q)(W),
            n = Object.values(t).some((e => !!e));
          return (0, m.useEffect)((() => {
            n ? document.documentElement.setAttribute(Q, "true") : document.documentElement.removeAttribute(Q)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => W(e))({
              ...t,
              [e]: n
            })
          }
        },
        J = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        };
      var K = n(3304);
      const Z = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        ee = e => {
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
        te = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (ee({
            element: n
          }), ne(n))
        },
        ne = e => {
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
      class oe {
        constructor(e, t, n, o) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = s
        }
      }
      const re = Object.freeze({
          pc: new oe("pc", "PC Legacy", 8, "sc"),
          ps: new oe("ps", "PlayStation", 3, "np", "ps"),
          ps3: new oe("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new oe("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new oe("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new oe("xbox", "Xbox", 4, "xbl"),
          xbox360: new oe("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new oe("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new oe("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new oe("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new oe("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new oe("applestore", "App Store", 102, "applestore"),
          googleplay: new oe("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new oe("app_store", "App Store", 102, "applestore"),
          googlePlay: new oe("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new oe("pcalt", "PC Enhanced", 22, "sc")
        }),
        se = Object.freeze(Object.values(re));

      function ae(e) {
        if (!e) return;
        if (e instanceof oe) return e;
        const t = e.toString().toLowerCase();
        return se.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const ie = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var ce = n(33521),
        le = n(2562);
      const de = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        ue = (e, t) => {
          e && void 0 !== t && (0, ce.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,le.F)()}; path=/;`)
        },
        he = e => e.keys().forEach(e),
        me = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ge = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return me.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        pe = e => {
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
        we = () => [re.xbox360.name, re.xboxone.name, re.ps3.name, re.ps4.name, re.pc.name],
        fe = () => [re.xboxsx.name, re.ps5.name, re.pcalt.name],
        ve = e => fe().includes(e),
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
      var ye = n(89561),
        xe = n(67006),
        ke = n(67538),
        Se = n(59065),
        Ee = n.n(Se);
      const Ce = (0, n(32779).A)(),
        Ae = Ce?.id,
        Pe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Le = e => {
          const t = {
            ...e,
            environment: Ae,
            display_type: Pe
          };
          Ee().dataLayer({
            dataLayer: t
          })
        };
      var Te = n(9623);
      const Re = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Te.useLocation)();
          return (0, m.useEffect)((() => {
            Le({
              event: "trackPageview"
            })
          }), [n]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        Ue = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          Ee().initialize(n)
        };
      var Me = n(37307);
      const je = "rockstar-games-web";
      let Oe;
      try {
        const e = Me.A.get(je) ?? "";
        Oe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Oe = {}
      }
      const Ie = (0, x.UT)(Oe),
        $e = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ie() ?? {}
          };
          return o[t] = n, null === n && delete o[t], Me.A.set(je, JSON.stringify(o), {
            expires: 30,
            domain: (0, le.F)(),
            path: "/"
          }), Ie(o), o
        },
        Be = () => ({
          webSettings: (0, V.q)(Ie),
          webSettingsReactive: Ie,
          mutateWebSettings: $e
        }),
        De = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        _e = () => (0, m.useContext)(De),
        Fe = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = _e() ?? {},
            r = (0, m.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, g.jsx)(De.Provider, {
            value: r,
            children: t
          })
        };
      var He = n(55925);
      const ze = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Le(e)
          }
        }))(e, t),
        Ne = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, m.useState)(t), s = e => {
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
            return (0, m.useEffect)((() => {
              const e = l().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, g.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var qe = n(14531);
      const Ge = xe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Xe = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, qe.A)(),
                {
                  data: n
                } = O(Ge, {
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
      var Ve = n(6590)
    },
    89858: (e, t, n) => {
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
    94203: (e, t, n) => {
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
            cms: a,
            graphEnv: i,
            scHost: c,
            hostname: l,
            cdnBase: d,
            key: u,
            marketingAuthTLD: h
          } = e;
          const m = o?.apiHost ?? t,
            g = o?.authHost ?? n,
            p = o?.cdnBase ?? d,
            w = o?.clientId ?? s,
            f = r?.marketingAuthTLD ?? h,
            v = o?.scHost ?? c,
            b = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? i,
            host: v,
            hostname: l,
            cdnBase: p,
            key: u,
            clientId: w,
            cms: `https://${a}.rockstargames.com/graphql`,
            authHost: g,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
          }
        },
        a = [s({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
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
          cms: "cms-prod.ros",
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
    }
  }
]);