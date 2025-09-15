try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "16ff0bea-89b8-4ea6-9349-650762854880", e._sentryDebugIdIdentifier = "sentry-dbid-16ff0bea-89b8-4ea6-9349-650762854880")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2148], {
    9482: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      const o = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        s = ({
          context: e,
          key: t
        }) => (o()?.[t] || (o()[t] = e), o()[t])
    },
    20772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => f,
        Es: () => h,
        bD: () => m
      });
      var o = n(42295),
        s = n(62229),
        r = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(58128),
        u = n(45547);
      const d = {
          token: (0, r.UT)("")
        },
        l = (0, i.A)({
          context: (0, s.createContext)(d),
          key: "utilsTokenProvider"
        }),
        w = ({
          children: e,
          token: t
        }) => (0, o.jsx)(l.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        m = () => {
          const {
            token: e
          } = (0, s.useContext)(l);
          return [e]
        },
        f = () => {
          const [e] = m();
          return (0, a.q)(e)
        },
        h = () => {
          const [e] = m();
          return () => (async ({
            token: e
          }) => {
            const {
              pingBearer: t
            } = (0, u.A)();
            try {
              const n = e?.() ?? "";
              if (n) {
                const {
                  exp: e = 0
                } = (0, c.s)(n) ?? {};
                if (e - (new Date).getTime() / 1e3 > 0 && n) return {
                  bearerToken: n
                }
              }
              const o = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await o.json();
              return e(s.bearerToken ?? ""), s
            } catch (t) {
              return e(""), !1
            }
          })({
            token: e
          })
        }
    },
    26675: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      var o = n(93452);
      const s = (0, n(21823).UT)(document.documentElement.lang),
        r = () => (0, o.q)(s)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const o = window?.env?.sc,
        s = window?.env?.marketing,
        r = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: r,
          graphEnv: a,
          scHost: i,
          hostname: c,
          cdnBase: u,
          key: d,
          marketingAuthTLD: l
        }) => {
          const w = o?.apiHost ?? e,
            m = o?.authHost ?? t,
            f = o?.cdnBase ?? u,
            h = o?.clientId ?? n,
            g = s?.marketingAuthTLD ?? l,
            p = o?.scHost ?? i,
            v = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: p,
            hostname: c,
            cdnBase: f,
            key: d,
            clientId: h,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${p}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/${v}`
          }
        },
        a = [r({
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
        }), r({
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
            const t = a.find((({
              key: t
            }) => t === e)) ?? null;
            if (t) return t
          }
          return a.find((({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname))) || a[0]
        }
    },
    50437: (e, t, n) => {
      n.d(t, {
        G4: () => f,
        uU: () => m
      });
      var o = n(42295),
        s = n(62229),
        r = n(93452),
        a = n(21823),
        i = n(9482);
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
        u = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = c;
          return Object.keys(c).map((t => {
            const {
              min: o,
              max: s
            } = c[t], r = e >= o && e <= s, a = e >= o;
            n[t] = {
              activeExact: r,
              activeMin: a,
              min: o,
              max: s
            }
          })), {
            isMobile: e < c.sm.min,
            isTablet: e < c.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        d = (0, i.A)({
          context: (0, s.createContext)(u()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = d,
        w = (0, a.UT)(u()),
        m = ({
          children: e
        }) => {
          const t = (0, r.q)(w);
          return (0, s.useEffect)((() => {
            const e = () => {
              w(u())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.jsx)(d.Provider, {
            value: t,
            children: e
          })
        },
        f = () => (0, s.useContext)(d)
    },
    52690: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      const o = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        s = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (o()?.[n] || (o()[n] = {}), o()?.[n]?.[e] || (o()[n][e] = t), o()[n][e])
    },
    60099: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var o = n(42887),
        s = n(79465),
        r = n.n(s),
        a = n(16188),
        i = n.n(a),
        c = n(45547),
        u = n(95573);
      const {
        apiHost: d
      } = (0, c.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, m = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: s = null,
        pingBearer: a,
        requireBearerToken: c = !0,
        useCache: u = !0
      } = {}) => {
        try {
          const {
            bearerToken: m = null
          } = await (a?.()) ?? {}, f = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let h = `${d}/${e}`;
          if (null === s || i().isEmpty(s) || (h += `?${new URLSearchParams(s)}`), !m && c) return null;
          m && (f.Authorization = `Bearer ${m}`);
          const g = {
              headers: f
            },
            p = r().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: h
            }),
            E = await (0, o.sc)(v);
          if (u) {
            if (w[E]?.response) return w[E].response;
            if (w[E]?.loading) return {
              error: null,
              result: null
            };
            w[E] = {
              loading: !0
            }
          }
          const b = await fetch(h, p),
            y = await b.json();
          return u && (w[E] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    72148: (e, t, n) => {
      n.d(t, {
        RK: () => s,
        bn: () => A,
        T0: () => U,
        vx: () => L,
        sb: () => C,
        Ym: () => a.A,
        CA: () => E.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        OH: () => p,
        zP: () => v,
        Cb: () => m,
        N6: () => k,
        Br: () => y,
        GA: () => M,
        G4: () => x.G4
      });
      const o = (0, n(82690).A)(),
        s = () => o;
      var r = n(62229),
        a = n(26675);
      const i = e => {
        const [t, n] = (0, r.useState)(null), [o, s] = (0, r.useState)(null), [a, i] = (0, r.useState)({});
        return (0, r.useLayoutEffect)((() => {
          let t = new Image,
            o = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, o || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, o || (n(!1), s(!0))
          })), t.src = e, () => {
            o = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      var c = n(9623);
      const u = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, r.useRef)();
          return (0, r.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var l = n(20772),
        w = n(60099);
      const m = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: o = null
      }) => {
        const s = (0, l.Es)(),
          [a, i] = (0, r.useState)(null),
          [c, u] = (0, r.useState)(!1),
          [d, m] = (0, r.useState)(null),
          f = (0, r.useCallback)((async (t = {}, r = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              m(null), i(null), u(!0);
              const c = await (0, w.A)(r ?? e, {
                pingBearer: s,
                fetchOptions: n,
                finalFetchOptions: a,
                query: o
              });
              return c?.status || m(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              m(String(e)), u(!1)
            }
            return null
          }), [e, n, o]);
        return (0, r.useEffect)((() => {
          null === a && null === d && !c && t && f()
        }), [t, a, d, c, f]), {
          data: a,
          error: d,
          loading: c,
          fetch: f
        }
      };
      var f = n(45547);
      const h = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[h] || (window[h] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].eventQueue.push(o), window[h][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, r.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, r.useEffect)((() => {
            const n = g(e);
            return window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].subscribers.push(t), window[h][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[h][n].subscribers = window[h][n].subscribers.filter((e => e !== t)), 0 === window[h][n].subscribers.length && delete window[h][n]
            }
          }), [e, t]), (0, r.useMemo)((() => ({})), [])
        };
      var E = n(89656),
        b = (n(95342), n(95573));
      const y = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, f.A)(), s = (0, a.A)(), r = (0, b.t)(s), i = (0, l.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(r), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(i), new URL(c, `https://${n}.rockstargames.com/`)
        },
        k = e => {
          const {
            signup: t,
            login: n
          } = (0, f.A)(), o = (0, a.A)(), s = (0, b.t)(o);
          let r = "";
          return r += "lang=" + encodeURIComponent(s), r += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${r}`,
            signInUrl: `${n}?${r}`
          }
        };
      var x = n(50437);
      const L = () => {
          const [e, t] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
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
          const [e, t] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
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
      var S = n(25906),
        T = n(81878);
      const A = () => {
          const [e, t] = (0, r.useState)(!1), {
            deviceMemory: n
          } = (0, S.XB)(), {
            effectiveConnectionType: o
          } = (0, S.M5)(), {
            numberOfLogicalProcessors: s
          } = (0, S.xV)(), {
            saveData: a
          } = (0, S.zp)(), i = L(), c = () => {
            const r = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (T.n8 || T.lT || T.w || T.UX) return !1;
              const t = "Safari" === T.C0,
                r = "Firefox" === T.C0,
                c = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                u = s && s >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(c) || e(u) || !t && !r && e(d))
            })();
            r !== e && t(r)
          };
          return (0, r.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, o, e, s, a, i]), e
        },
        M = e => {
          const [t, n] = (0, r.useState)(!1), o = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const s = () => {
              if (t || !o.current) return;
              const r = o.current,
                {
                  height: a
                } = r.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= r.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", s))
            };
            return window.addEventListener("scroll", s, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", s)
            }
          }), [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        U = e => {
          const [t, n] = (0, r.useState)(null);
          let o, s;
          const a = e => {
              e.preventDefault(), "mousedown" === e.type && t ? (window.addEventListener("mousemove", i), o = e.pageX - t?.offsetLeft, s = t?.scrollLeft) : window.removeEventListener("mousemove", i)
            },
            i = e => {
              if (t) {
                e.preventDefault();
                const n = e.pageX - t.offsetLeft - o;
                t.scrollLeft = s - n
              }
            };
          (0, r.useEffect)((() => (n(e?.current), t && (t.addEventListener("mousedown", a), window.addEventListener("mouseup", a)), () => {
            t && t.removeEventListener("mousedown", a), window.removeEventListener("mouseup", a), window.removeEventListener("mousemove", i)
          })), [e?.current])
        }
    },
    82690: (e, t, n) => {
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
    89656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var o = n(42295),
        s = n(62229);
      const r = (0, n(9482).A)({
          context: (0, s.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = r,
        i = ({
          article: e,
          children: t
        }) => (0, o.jsx)(r.Provider, {
          value: e,
          children: t
        }),
        c = () => (0, s.useContext)(r)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var o = n(42295),
        s = n(62229),
        r = n(93452),
        a = n(21823),
        i = n(9482);
      const c = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => c(e),
        d = (0, i.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, s.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, s.useState)(window.pageYOffset), [a, i] = (0, s.useState)(null), [l, w] = (0, s.useState)(!1), m = (0, r.q)(c);
          let f;
          const h = () => {
            w(!0), clearTimeout(f), f = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, m]), (0, s.useMemo)((() => (0, o.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: h,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          })), [m, t, h, a])
        }
    },
    95573: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    }
  }
]);