try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3916a05d-ea2c-4cd2-8273-1f7b96e2a4ef", e._sentryDebugIdIdentifier = "sentry-dbid-3916a05d-ea2c-4cd2-8273-1f7b96e2a4ef")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2148], {
    9482: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const s = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        o = ({
          context: e,
          key: t
        }) => (s()?.[t] || (s()[t] = e), s()[t])
    },
    20772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => m,
        Es: () => h,
        bD: () => f
      });
      var s = n(42295),
        o = n(62229),
        r = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(58128),
        u = n(45547);
      const d = {
          token: (0, r.UT)("")
        },
        l = (0, i.A)({
          context: (0, o.createContext)(d),
          key: "utilsTokenProvider"
        }),
        w = ({
          children: e,
          token: t
        }) => (0, s.jsx)(l.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        f = () => {
          const {
            token: e
          } = (0, o.useContext)(l);
          return [e]
        },
        m = () => {
          const [e] = f();
          return (0, a.q)(e)
        },
        h = () => {
          const [e] = f();
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
              const s = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await s.json();
              return e(o.bearerToken ?? ""), o
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
      var s = n(93452);
      const o = (0, n(21823).UT)(document.documentElement.lang),
        r = () => (0, s.q)(o)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const s = window?.env?.sc,
        o = window?.env?.marketing,
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
          const w = s?.apiHost ?? e,
            f = s?.authHost ?? t,
            m = s?.cdnBase ?? u,
            h = s?.clientId ?? n,
            g = o?.marketingAuthTLD ?? l,
            v = s?.scHost ?? i,
            p = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? a,
            host: v,
            hostname: c,
            cdnBase: m,
            key: d,
            clientId: h,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: f,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/${p}`
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
        G4: () => m,
        uU: () => f
      });
      var s = n(42295),
        o = n(62229),
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
              min: s,
              max: o
            } = c[t], r = e >= s && e <= o, a = e >= s;
            n[t] = {
              activeExact: r,
              activeMin: a,
              min: s,
              max: o
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
          context: (0, o.createContext)(u()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = d,
        w = (0, a.UT)(u()),
        f = ({
          children: e
        }) => {
          const t = (0, r.q)(w);
          return (0, o.useEffect)((() => {
            const e = () => {
              w(u())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(d.Provider, {
            value: t,
            children: e
          })
        },
        m = () => (0, o.useContext)(d)
    },
    52690: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const s = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        o = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (s()?.[n] || (s()[n] = {}), s()?.[n]?.[e] || (s()[n][e] = t), s()[n][e])
    },
    60099: (e, t, n) => {
      n.d(t, {
        A: () => f
      });
      var s = n(42887),
        o = n(79465),
        r = n.n(o),
        a = n(16188),
        i = n.n(a),
        c = n(45547),
        u = n(95573);
      const {
        apiHost: d
      } = (0, c.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, f = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: o = null,
        pingBearer: a,
        requireBearerToken: c = !0,
        useCache: u = !0
      } = {}) => {
        try {
          const {
            bearerToken: f = null
          } = await (a?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let h = `${d}/${e}`;
          if (null === o || i().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !f && c) return null;
          f && (m.Authorization = `Bearer ${f}`);
          const g = {
              headers: m
            },
            v = r().all([g, t, n]),
            p = JSON.stringify({
              ...v,
              url: h
            }),
            E = await (0, s.sc)(p);
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
          const y = await fetch(h, v),
            b = await y.json();
          return u && (w[E] = {
            response: b,
            loading: !1
          }), b
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    72148: (e, t, n) => {
      n.d(t, {
        RK: () => o,
        bn: () => T,
        T0: () => M,
        vx: () => x,
        sb: () => L,
        Ym: () => a.A,
        CA: () => E.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        OH: () => v,
        zP: () => p,
        Cb: () => f,
        N6: () => b,
        GA: () => A,
        G4: () => k.G4
      });
      const s = (0, n(82690).A)(),
        o = () => s;
      var r = n(62229),
        a = n(26675);
      const i = e => {
        const [t, n] = (0, r.useState)(null), [s, o] = (0, r.useState)(null), [a, i] = (0, r.useState)({});
        return (0, r.useLayoutEffect)((() => {
          let t = new Image,
            s = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, s || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, s || (n(!1), o(!0))
          })), t.src = e, () => {
            s = !0, null !== t && (t.src = "")
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
      const f = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: s = null
      }) => {
        const o = (0, l.Es)(),
          [a, i] = (0, r.useState)(null),
          [c, u] = (0, r.useState)(!1),
          [d, f] = (0, r.useState)(null),
          m = (0, r.useCallback)((async (t = {}, r = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              f(null), i(null), u(!0);
              const c = await (0, w.A)(r ?? e, {
                pingBearer: o,
                fetchOptions: n,
                finalFetchOptions: a,
                query: s
              });
              return c?.status || f(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              f(String(e)), u(!1)
            }
            return null
          }), [e, n, s]);
        return (0, r.useEffect)((() => {
          null === a && null === d && !c && t && m()
        }), [t, a, d, c, m]), {
          data: a,
          error: d,
          loading: c,
          fetch: m
        }
      };
      var m = n(45547);
      const h = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[h] || (window[h] = {});
      const v = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              s = new CustomEvent(n, {
                detail: t
              });
            window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].eventQueue.push(s), window[h][n].subscribers.forEach((e => {
              e(s.detail)
            }))
          };
          return (0, r.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        p = (e, t) => {
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
        y = (n(95342), n(95573));
      const b = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), s = (0, a.A)(), o = (0, y.t)(s);
        let r = "";
        return r += "lang=" + encodeURIComponent(o), r += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${r}`,
          signInUrl: `${n}?${r}`
        }
      };
      var k = n(50437);
      const x = () => {
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
        L = () => {
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
        C = n(81878);
      const T = () => {
          const [e, t] = (0, r.useState)(!1), {
            deviceMemory: n
          } = (0, S.XB)(), {
            effectiveConnectionType: s
          } = (0, S.M5)(), {
            numberOfLogicalProcessors: o
          } = (0, S.xV)(), {
            saveData: a
          } = (0, S.zp)(), i = x(), c = () => {
            const r = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (C.n8 || C.lT || C.w || C.UX) return !1;
              const t = "Safari" === C.C0,
                r = "Firefox" === C.C0,
                c = s && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(s),
                u = o && o >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(c) || e(u) || !t && !r && e(d))
            })();
            r !== e && t(r)
          };
          return (0, r.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, s, e, o, a, i]), e
        },
        A = e => {
          const [t, n] = (0, r.useState)(!1), s = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const o = () => {
              if (t || !s.current) return;
              const r = s.current,
                {
                  height: a
                } = r.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= r.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", o))
            };
            return window.addEventListener("scroll", o, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", o)
            }
          }), [t, e]), {
            ref: s,
            scrollTracked: t
          }
        },
        M = e => {
          const [t, n] = (0, r.useState)(null);
          let s, o;
          const a = e => {
              e.preventDefault(), "mousedown" === e.type && t ? (window.addEventListener("mousemove", i), s = e.pageX - t?.offsetLeft, o = t?.scrollLeft) : window.removeEventListener("mousemove", i)
            },
            i = e => {
              if (t) {
                e.preventDefault();
                const n = e.pageX - t.offsetLeft - s;
                t.scrollLeft = o - n
              }
            };
          (0, r.useEffect)((() => (n(e?.current), t && (t.addEventListener("mousedown", a), window.addEventListener("mouseup", a)), () => {
            t && t.removeEventListener("mousedown", a), window.removeEventListener("mouseup", a), window.removeEventListener("mousemove", i)
          })), [e?.current])
        }
    },
    82690: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      const s = () => {
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
      var s = n(42295),
        o = n(62229);
      const r = (0, n(9482).A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = r,
        i = ({
          article: e,
          children: t
        }) => (0, s.jsx)(r.Provider, {
          value: e,
          children: t
        }),
        c = () => (0, o.useContext)(r)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var s = n(42295),
        o = n(62229),
        r = n(93452),
        a = n(21823),
        i = n(9482);
      const c = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => c(e),
        d = (0, i.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, o.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [l, w] = (0, o.useState)(!1), f = (0, r.q)(c);
          let m;
          const h = () => {
            w(!0), clearTimeout(m), m = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (f) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, f]), (0, o.useMemo)((() => (0, s.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: t,
              pauseUserShouldSeeMore: h,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          })), [f, t, h, a])
        }
    },
    95573: (e, t, n) => {
      n.d(t, {
        t: () => s
      });
      const s = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    }
  }
]);