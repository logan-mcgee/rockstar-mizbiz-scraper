try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e7ba5afd-9914-4de3-80fa-e64eefdfd166", e._sentryDebugIdIdentifier = "sentry-dbid-e7ba5afd-9914-4de3-80fa-e64eefdfd166")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
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
    17954: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    20772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => h,
        Es: () => m,
        bD: () => f
      });
      var o = n(42295),
        s = n(62229),
        r = n(21823),
        a = n(93452),
        c = n(9482),
        i = n(58128),
        d = n(45547);
      const u = {
          token: (0, r.UT)("")
        },
        l = (0, c.A)({
          context: (0, s.createContext)(u),
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
        f = () => {
          const {
            token: e
          } = (0, s.useContext)(l);
          return [e]
        },
        h = () => {
          const [e] = f();
          return (0, a.q)(e)
        },
        m = () => {
          const [e] = f();
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
        A: () => c
      });
      const o = window?.env?.sc,
        s = window?.env?.marketing,
        r = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: r,
          graphEnv: a,
          scHost: c,
          hostname: i,
          cdnBase: d,
          key: u,
          marketingAuthTLD: l
        }) => {
          const w = o?.apiHost ?? e,
            f = o?.authHost ?? t,
            h = o?.cdnBase ?? d,
            m = o?.clientId ?? n,
            g = s?.marketingAuthTLD ?? l,
            p = o?.scHost ?? c,
            v = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: p,
            hostname: i,
            cdnBase: h,
            key: u,
            clientId: m,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: f,
            scBase: `https://${p}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${m}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${m}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${m}`,
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
    50437: (e, t, n) => {
      n.d(t, {
        G4: () => h,
        uU: () => f
      });
      var o = n(42295),
        s = n(62229),
        r = n(93452),
        a = n(21823),
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
              max: s
            } = i[t], r = e >= o && e <= s, a = e >= o;
            n[t] = {
              activeExact: r,
              activeMin: a,
              min: o,
              max: s
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
          context: (0, s.createContext)(d()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = u,
        w = (0, a.UT)(d()),
        f = ({
          children: e
        }) => {
          const t = (0, r.q)(w);
          return (0, s.useEffect)((() => {
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
        h = () => (0, s.useContext)(u)
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
        A: () => f
      });
      var o = n(42887),
        s = n(79465),
        r = n.n(s),
        a = n(15076),
        c = n.n(a),
        i = n(45547),
        d = n(17954);
      const {
        apiHost: u
      } = (0, i.A)(), l = (0, d.t)(document.documentElement.lang), w = {}, f = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: s = null,
        pingBearer: a,
        requireBearerToken: i = !0,
        useCache: d = !0
      } = {}) => {
        try {
          const {
            bearerToken: f = null
          } = await (a?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let m = `${u}/${e}`;
          if (null === s || c().isEmpty(s) || (m += `?${new URLSearchParams(s)}`), !f && i) return null;
          f && (h.Authorization = `Bearer ${f}`);
          const g = {
              headers: h
            },
            p = r().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: m
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
          const k = await fetch(m, p),
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
    60309: (e, t, n) => {
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
    72148: (e, t, n) => {
      n.d(t, {
        RK: () => s,
        bn: () => L,
        vx: () => x,
        sb: () => C,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => c,
        ZC: () => u,
        sq: () => d,
        OH: () => p,
        zP: () => v,
        Cb: () => f,
        N6: () => b,
        Br: () => E,
        GA: () => A
      });
      const o = (0, n(60309).A)(),
        s = () => o;
      var r = n(62229),
        a = n(26675);
      const c = e => {
        const [t, n] = (0, r.useState)(null), [o, s] = (0, r.useState)(null), [a, c] = (0, r.useState)({});
        return (0, r.useLayoutEffect)((() => {
          let t = new Image,
            o = !1;
          return t.addEventListener("load", (() => {
            c({
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
      var i = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, i.useLocation)();
          return new URLSearchParams(e)
        },
        u = e => {
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
        query: o = null
      }) => {
        const s = (0, l.Es)(),
          [a, c] = (0, r.useState)(null),
          [i, d] = (0, r.useState)(!1),
          [u, f] = (0, r.useState)(null),
          h = (0, r.useCallback)((async (t = {}, r = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              f(null), c(null), d(!0);
              const i = await (0, w.A)(r ?? e, {
                pingBearer: s,
                fetchOptions: n,
                finalFetchOptions: a,
                query: o
              });
              return i?.status || f(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              f(String(e)), d(!1)
            }
            return null
          }), [e, n, o]);
        return (0, r.useEffect)((() => {
          null === a && null === u && !i && t && h()
        }), [t, a, u, i, h]), {
          data: a,
          error: u,
          loading: i,
          fetch: h
        }
      };
      var h = n(45547);
      const m = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[m] || (window[m] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[m][n] || (window[m][n] = {
              eventQueue: [],
              subscribers: []
            }), window[m][n].eventQueue.push(o), window[m][n].subscribers.forEach((e => {
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
            return window[m][n] || (window[m][n] = {
              eventQueue: [],
              subscribers: []
            }), window[m][n].subscribers.push(t), window[m][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[m][n].subscribers = window[m][n].subscribers.filter((e => e !== t)), 0 === window[m][n].subscribers.length && delete window[m][n]
            }
          }), [e, t]), (0, r.useMemo)((() => ({})), [])
        };
      var y = n(89656),
        k = (n(95342), n(17954));
      const E = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, h.A)(), s = (0, a.A)(), r = (0, k.t)(s), c = (0, l.e9)();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(r), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(c), new URL(i, `https://${n}.rockstargames.com/`)
        },
        b = e => {
          const {
            signup: t,
            login: n
          } = (0, h.A)(), o = (0, a.A)(), s = (0, k.t)(o);
          let r = "";
          return r += "lang=" + encodeURIComponent(s), r += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${r}`,
            signInUrl: `${n}?${r}`
          }
        };
      n(50437);
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
      const L = () => {
          const [e, t] = (0, r.useState)(!1), {
            deviceMemory: n
          } = (0, S.XB)(), {
            effectiveConnectionType: o
          } = (0, S.M5)(), {
            numberOfLogicalProcessors: s
          } = (0, S.xV)(), {
            saveData: a
          } = (0, S.zp)(), c = x(), i = () => {
            const r = (() => {
              const e = e => !1 === e;
              if (c) return !1;
              if (T.n8 || T.lT || T.w || T.UX) return !1;
              const t = "Safari" === T.C0,
                r = "Firefox" === T.C0,
                i = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                d = s && s >= 4,
                u = n && n >= 4;
              return !(e(!a) || e(i) || e(d) || !t && !r && e(u))
            })();
            r !== e && t(r)
          };
          return (0, r.useEffect)((() => (i(), window.addEventListener("online", i), window.addEventListener("offline", i), window.addEventListener("devicememory", i), () => {
            window.removeEventListener("online", i), window.removeEventListener("offline", i), window.removeEventListener("devicememory", i)
          })), [n, o, e, s, a, c]), e
        },
        A = e => {
          const [t, n] = (0, r.useState)(!1), o = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const s = () => {
              if (t || !o.current) return;
              const r = o.current,
                {
                  height: a
                } = r.getBoundingClientRect(),
                c = window.innerHeight;
              window.scrollY + c >= r.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", s))
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
        }
    },
    89656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => i
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
        c = ({
          article: e,
          children: t
        }) => (0, o.jsx)(r.Provider, {
          value: e,
          children: t
        }),
        i = () => (0, s.useContext)(r)
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
        c = n(9482);
      const i = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        d = e => i(e),
        u = (0, c.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, s.useContext)(u),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, s.useState)(window.pageYOffset), [a, c] = (0, s.useState)(null), [l, w] = (0, s.useState)(!1), f = (0, r.q)(i);
          let h;
          const m = () => {
            w(!0), clearTimeout(h), h = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (f) return void c(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || c(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, f]), (0, s.useMemo)((() => (0, o.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: t,
              pauseUserShouldSeeMore: m,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: e
          })), [f, t, m, a])
        }
    }
  }
]);