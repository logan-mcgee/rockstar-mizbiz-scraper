try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "462cc73e-0152-41fe-8dcf-38deaa678ba2", e._sentryDebugIdIdentifier = "sentry-dbid-462cc73e-0152-41fe-8dcf-38deaa678ba2")
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
  [2148], {
    99: (e, t, n) => {
      n.d(t, {
        A: () => h
      });
      var r = n(2887),
        o = n(9465),
        s = n.n(o),
        a = n(6188),
        i = n.n(a),
        c = n(5547),
        d = n(7954);
      const {
        apiHost: u
      } = (0, c.A)(), l = (0, d.t)(document.documentElement.lang), w = {}, h = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: o = null,
        pingBearer: a,
        requireBearerToken: c = !0,
        useCache: d = !0
      } = {}) => {
        try {
          const {
            bearerToken: h = null
          } = await (a?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let f = `${u}/${e}`;
          if (null === o || i().isEmpty(o) || (f += `?${new URLSearchParams(o)}`), !h && c) return null;
          h && (m.Authorization = `Bearer ${h}`);
          const g = {
              headers: m
            },
            p = s().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: f
            }),
            y = await (0, r.sc)(v);
          if (d) {
            if (w[y]?.response) return w[y].response;
            if (w[y]?.loading) return {
              error: null,
              result: null
            };
            w[y] = {
              loading: !0
            }
          }
          const E = await fetch(f, p),
            b = await E.json();
          return d && (w[y] = {
            response: b,
            loading: !1
          }), b
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    309: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const r = () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }
    },
    437: (e, t, n) => {
      n.d(t, {
        G4: () => m,
        uU: () => h
      });
      var r = n(2295),
        o = n(2229),
        s = n(3452),
        a = n(1823),
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
        d = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = c;
          return Object.keys(c).map((t => {
            const {
              min: r,
              max: o
            } = c[t], s = e >= r && e <= o, a = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: r,
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
        u = (0, i.A)({
          context: (0, o.createContext)(d()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = u,
        w = (0, a.UT)(d()),
        h = ({
          children: e
        }) => {
          const t = (0, s.q)(w);
          return (0, o.useEffect)((() => {
            const e = () => {
              w(d())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, r.jsx)(u.Provider, {
            value: t,
            children: e
          })
        },
        m = () => (0, o.useContext)(u)
    },
    772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => m,
        Es: () => f,
        bD: () => h
      });
      var r = n(2295),
        o = n(2229),
        s = n(1823),
        a = n(3452),
        i = n(9482),
        c = n(8128),
        d = n(5547);
      const u = {
          token: (0, s.UT)("")
        },
        l = (0, i.A)({
          context: (0, o.createContext)(u),
          key: "utilsTokenProvider"
        }),
        w = ({
          children: e,
          token: t
        }) => (0, r.jsx)(l.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        h = () => {
          const {
            token: e
          } = (0, o.useContext)(l);
          return [e]
        },
        m = () => {
          const [e] = h();
          return (0, a.q)(e)
        },
        f = () => {
          const [e] = h();
          return () => (async ({
            token: e
          }) => {
            const {
              pingBearer: t
            } = (0, d.A)();
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
              const r = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await r.json();
              return e(o.bearerToken ?? ""), o
            } catch (t) {
              return e(""), !1
            }
          })({
            token: e
          })
        }
    },
    2148: (e, t, n) => {
      n.d(t, {
        RK: () => o,
        bn: () => T,
        vx: () => k,
        sb: () => x,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => u,
        sq: () => d,
        OH: () => p,
        zP: () => v,
        Cb: () => h,
        N6: () => b,
        GA: () => L
      });
      const r = (0, n(309).A)(),
        o = () => r;
      var s = n(2229),
        a = n(6675);
      const i = e => {
        const [t, n] = (0, s.useState)(null), [r, o] = (0, s.useState)(null), [a, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), o(!0))
          })), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      var c = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        u = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var l = n(772),
        w = n(99);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null
      }) => {
        const o = (0, l.Es)(),
          [a, i] = (0, s.useState)(null),
          [c, d] = (0, s.useState)(!1),
          [u, h] = (0, s.useState)(null),
          m = (0, s.useCallback)((async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              h(null), i(null), d(!0);
              const c = await (0, w.A)(s ?? e, {
                pingBearer: o,
                fetchOptions: n,
                finalFetchOptions: a,
                query: r
              });
              return c?.status || h(JSON.stringify(c?.error)), i(c), d(!1), c
            } catch (e) {
              h(String(e)), d(!1)
            }
            return null
          }), [e, n, r]);
        return (0, s.useEffect)((() => {
          null === a && null === u && !c && t && m()
        }), [t, a, u, c, m]), {
          data: a,
          error: u,
          loading: c,
          fetch: m
        }
      };
      var m = n(5547);
      const f = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[f] || (window[f] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].eventQueue.push(r), window[f][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = g(e);
            return window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].subscribers.push(t), window[f][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[f][n].subscribers = window[f][n].subscribers.filter((e => e !== t)), 0 === window[f][n].subscribers.length && delete window[f][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var y = n(9656),
        E = (n(5342), n(7954));
      const b = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), r = (0, a.A)(), o = (0, E.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(437);
      const k = () => {
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
        x = () => {
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
      var S = n(5906),
        C = n(1878);
      const T = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, S.XB)(), {
            effectiveConnectionType: r
          } = (0, S.M5)(), {
            numberOfLogicalProcessors: o
          } = (0, S.xV)(), {
            saveData: a
          } = (0, S.zp)(), i = k(), c = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (C.n8 || C.lT || C.w || C.UX) return !1;
              const t = "Safari" === C.C0,
                s = "Firefox" === C.C0,
                c = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
                d = o && o >= 4,
                u = n && n >= 4;
              return !(e(!a) || e(c) || e(d) || !t && !s && e(u))
            })();
            s !== e && t(s)
          };
          return (0, s.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, r, e, o, a, i]), e
        },
        L = e => {
          const [t, n] = (0, s.useState)(!1), r = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            const o = () => {
              if (t || !r.current) return;
              const s = r.current,
                {
                  height: a
                } = s.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", o))
            };
            return window.addEventListener("scroll", o, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", o)
            }
          }), [t, e]), {
            ref: r,
            scrollTracked: t
          }
        }
    },
    2690: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const r = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        o = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (r()?.[n] || (r()[n] = {}), r()?.[n]?.[e] || (r()[n][e] = t), r()[n][e])
    },
    5342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(2295),
        o = n(2229),
        s = n(3452),
        a = n(1823),
        i = n(9482);
      const c = (0, n(2690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        d = e => c(e),
        u = (0, i.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, o.useContext)(u),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [l, w] = (0, o.useState)(!1), h = (0, s.q)(c);
          let m;
          const f = () => {
            w(!0), clearTimeout(m), m = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (h) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, h]), (0, o.useMemo)((() => (0, r.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: h,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: e
          })), [h, t, f, a])
        }
    },
    5547: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const r = window?.env?.sc,
        o = window?.env?.marketing,
        s = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: s,
          graphEnv: a,
          scHost: i,
          hostname: c,
          cdnBase: d,
          key: u,
          marketingAuthTLD: l
        }) => {
          const w = r?.apiHost ?? e,
            h = r?.authHost ?? t,
            m = r?.cdnBase ?? d,
            f = r?.clientId ?? n,
            g = o?.marketingAuthTLD ?? l,
            p = r?.scHost ?? i,
            v = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: p,
            hostname: c,
            cdnBase: m,
            key: u,
            clientId: f,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: h,
            scBase: `https://${p}.rockstargames.com/`,
            login: `https://${h}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${h}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${h}.rockstargames.com/create/?cid=${f}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/${v}`
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
    6675: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var r = n(3452);
      const o = (0, n(1823).UT)(document.documentElement.lang),
        s = () => (0, r.q)(o)
    },
    7954: (e, t, n) => {
      n.d(t, {
        t: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    9482: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        o = ({
          context: e,
          key: t
        }) => (r()?.[t] || (r()[t] = e), r()[t])
    },
    9656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(2295),
        o = n(2229);
      const s = (0, n(9482).A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = s,
        i = ({
          article: e,
          children: t
        }) => (0, r.jsx)(s.Provider, {
          value: e,
          children: t
        }),
        c = () => (0, o.useContext)(s)
    }
  }
]);