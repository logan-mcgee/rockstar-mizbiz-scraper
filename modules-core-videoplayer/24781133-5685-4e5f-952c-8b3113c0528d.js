try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "24781133-5685-4e5f-952c-8b3113c0528d", e._sentryDebugIdIdentifier = "sentry-dbid-24781133-5685-4e5f-952c-8b3113c0528d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2148], {
    99: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var o = n(2887),
        r = n(9465),
        s = n.n(r),
        a = n(6188),
        c = n.n(a),
        i = n(5547),
        d = n(7954);
      const {
        apiHost: u
      } = (0, i.A)(), l = (0, d.t)(document.documentElement.lang), w = {}, m = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: r = null,
        pingBearer: a,
        requireBearerToken: i = !0,
        useCache: d = !0
      } = {}) => {
        try {
          const {
            bearerToken: m = null
          } = await (a?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let f = `${u}/${e}`;
          if (null === r || c().isEmpty(r) || (f += `?${new URLSearchParams(r)}`), !m && i) return null;
          m && (h.Authorization = `Bearer ${m}`);
          const p = {
              headers: h
            },
            g = s().all([p, t, n]),
            v = JSON.stringify({
              ...g,
              url: f
            }),
            y = await (0, o.sc)(v);
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
          const k = await fetch(f, g),
            E = await k.json();
          return d && (w[y] = {
            response: E,
            loading: !1
          }), E
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    309: (e, t, n) => {
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
    437: (e, t, n) => {
      n.d(t, {
        G4: () => h,
        uU: () => m
      });
      var o = n(2295),
        r = n(2229),
        s = n(3452),
        a = n(1823),
        c = n(9482);
      const i = {
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
            n = i;
          return Object.keys(i).map((t => {
            const {
              min: o,
              max: r
            } = i[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          })), {
            isMobile: e < i.sm.min,
            isTablet: e < i.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        u = (0, c.A)({
          context: (0, r.createContext)(d()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = u,
        w = (0, a.UT)(d()),
        m = ({
          children: e
        }) => {
          const t = (0, s.q)(w);
          return (0, r.useEffect)((() => {
            const e = () => {
              w(d())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.jsx)(u.Provider, {
            value: t,
            children: e
          })
        },
        h = () => (0, r.useContext)(u)
    },
    772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => h,
        Es: () => f,
        bD: () => m
      });
      var o = n(2295),
        r = n(2229),
        s = n(1823),
        a = n(3452),
        c = n(9482),
        i = n(8128),
        d = n(5547);
      const u = {
          token: (0, s.UT)("")
        },
        l = (0, c.A)({
          context: (0, r.createContext)(u),
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
          } = (0, r.useContext)(l);
          return [e]
        },
        h = () => {
          const [e] = m();
          return (0, a.q)(e)
        },
        f = () => {
          const [e] = m();
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
                } = (0, i.s)(n) ?? {};
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
                r = await o.json();
              return e(r.bearerToken ?? ""), r
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
        RK: () => r,
        bn: () => L,
        vx: () => x,
        sb: () => C,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => c,
        ZC: () => u,
        sq: () => d,
        OH: () => g,
        zP: () => v,
        Cb: () => m,
        N6: () => b,
        Br: () => E,
        GA: () => A
      });
      const o = (0, n(309).A)(),
        r = () => o;
      var s = n(2229),
        a = n(6675);
      const c = e => {
        const [t, n] = (0, s.useState)(null), [o, r] = (0, s.useState)(null), [a, c] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
          let t = new Image,
            o = !1;
          return t.addEventListener("load", (() => {
            c({
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
      var i = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, i.useLocation)();
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
      const m = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: o = null
      }) => {
        const r = (0, l.Es)(),
          [a, c] = (0, s.useState)(null),
          [i, d] = (0, s.useState)(!1),
          [u, m] = (0, s.useState)(null),
          h = (0, s.useCallback)((async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              m(null), c(null), d(!0);
              const i = await (0, w.A)(s ?? e, {
                pingBearer: r,
                fetchOptions: n,
                finalFetchOptions: a,
                query: o
              });
              return i?.status || m(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              m(String(e)), d(!1)
            }
            return null
          }), [e, n, o]);
        return (0, s.useEffect)((() => {
          null === a && null === u && !i && t && h()
        }), [t, a, u, i, h]), {
          data: a,
          error: u,
          loading: i,
          fetch: h
        }
      };
      var h = n(5547);
      const f = "__RS_CUSTOM_EVENTS__",
        p = e => `rsCustomEvent:${e}`;
      window[f] || (window[f] = {});
      const g = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = p(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].eventQueue.push(o), window[f][n].subscribers.forEach((e => {
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
            const n = p(e);
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
        k = (n(5342), n(7954));
      const E = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, h.A)(), r = (0, a.A)(), s = (0, k.t)(r), c = (0, l.e9)();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(s), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(c), new URL(i, `https://${n}.rockstargames.com/`)
        },
        b = e => {
          const {
            signup: t,
            login: n
          } = (0, h.A)(), o = (0, a.A)(), r = (0, k.t)(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        };
      n(437);
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
      var S = n(5906),
        T = n(1878);
      const L = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, S.XB)(), {
            effectiveConnectionType: o
          } = (0, S.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, S.xV)(), {
            saveData: a
          } = (0, S.zp)(), c = x(), i = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (c) return !1;
              if (T.n8 || T.lT || T.w || T.UX) return !1;
              const t = "Safari" === T.C0,
                s = "Firefox" === T.C0,
                i = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                d = r && r >= 4,
                u = n && n >= 4;
              return !(e(!a) || e(i) || e(d) || !t && !s && e(u))
            })();
            s !== e && t(s)
          };
          return (0, s.useEffect)((() => (i(), window.addEventListener("online", i), window.addEventListener("offline", i), window.addEventListener("devicememory", i), () => {
            window.removeEventListener("online", i), window.removeEventListener("offline", i), window.removeEventListener("devicememory", i)
          })), [n, o, e, r, a, c]), e
        },
        A = e => {
          const [t, n] = (0, s.useState)(!1), o = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            const r = () => {
              if (t || !o.current) return;
              const s = o.current,
                {
                  height: a
                } = s.getBoundingClientRect(),
                c = window.innerHeight;
              window.scrollY + c >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", r))
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
    2690: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        r = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (o()?.[n] || (o()[n] = {}), o()?.[n]?.[e] || (o()[n][e] = t), o()[n][e])
    },
    5342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var o = n(2295),
        r = n(2229),
        s = n(3452),
        a = n(1823),
        c = n(9482);
      const i = (0, n(2690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        d = e => i(e),
        u = (0, c.A)({
          context: (0, r.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, r.useContext)(u),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, r.useState)(window.pageYOffset), [a, c] = (0, r.useState)(null), [l, w] = (0, r.useState)(!1), m = (0, s.q)(i);
          let h;
          const f = () => {
            w(!0), clearTimeout(h), h = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, r.useEffect)((() => {
            let e;
            const t = () => {
              if (m) return void c(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || c(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, m]), (0, r.useMemo)((() => (0, o.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: e
          })), [m, t, f, a])
        }
    },
    5547: (e, t, n) => {
      n.d(t, {
        A: () => c
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        s = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: s,
          graphEnv: a,
          scHost: c,
          hostname: i,
          cdnBase: d,
          key: u,
          marketingAuthTLD: l
        }) => {
          const w = o?.apiHost ?? e,
            m = o?.authHost ?? t,
            h = o?.cdnBase ?? d,
            f = o?.clientId ?? n,
            p = r?.marketingAuthTLD ?? l,
            g = o?.scHost ?? c,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: g,
            hostname: i,
            cdnBase: h,
            key: u,
            clientId: f,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${g}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${f}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`
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
        c = () => {
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
      var o = n(3452);
      const r = (0, n(1823).UT)(document.documentElement.lang),
        s = () => (0, o.q)(r)
    },
    7954: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    9482: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        r = ({
          context: e,
          key: t
        }) => (o()?.[t] || (o()[t] = e), o()[t])
    },
    9656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => i
      });
      var o = n(2295),
        r = n(2229);
      const s = (0, n(9482).A)({
          context: (0, r.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = s,
        c = ({
          article: e,
          children: t
        }) => (0, o.jsx)(s.Provider, {
          value: e,
          children: t
        }),
        i = () => (0, r.useContext)(s)
    }
  }
]);