try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "55ce5656-3ba5-4665-905f-d593c71ef610", e._sentryDebugIdIdentifier = "sentry-dbid-55ce5656-3ba5-4665-905f-d593c71ef610")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [2148], {
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
    17954: (e, t, n) => {
      n.d(t, {
        t: () => r
      });
      const r = e => {
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
      var r = n(42295),
        o = n(71127),
        s = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(58128),
        u = n(45547);
      const d = {
          token: (0, s.UT)("")
        },
        l = (0, i.A)({
          context: (0, o.createContext)(d),
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
        f = () => {
          const {
            token: e
          } = (0, o.useContext)(l);
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
    26675: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var r = n(93452);
      const o = (0, n(21823).UT)(document.documentElement.lang),
        s = () => (0, r.q)(o)
    },
    45547: (e, t, n) => {
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
          cdnBase: u,
          key: d,
          marketingAuthTLD: l
        }) => {
          const w = r?.apiHost ?? e,
            f = r?.authHost ?? t,
            h = r?.cdnBase ?? u,
            m = r?.clientId ?? n,
            g = o?.marketingAuthTLD ?? l,
            p = r?.scHost ?? i,
            v = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: p,
            hostname: c,
            cdnBase: h,
            key: d,
            clientId: m,
            cms: `https://${s}.rockstargames.com/graphql`,
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
    50437: (e, t, n) => {
      n.d(t, {
        G4: () => h,
        uU: () => f
      });
      var r = n(42295),
        o = n(71127),
        s = n(93452),
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
          const t = (0, s.q)(w);
          return (0, o.useEffect)((() => {
            const e = () => {
              w(u())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, r.jsx)(d.Provider, {
            value: t,
            children: e
          })
        },
        h = () => (0, o.useContext)(d)
    },
    52690: (e, t, n) => {
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
    60099: (e, t, n) => {
      n.d(t, {
        A: () => f
      });
      var r = n(42887),
        o = n(79465),
        s = n.n(o),
        a = n(15076),
        i = n.n(a),
        c = n(45547),
        u = n(17954);
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
          } = await (a?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let m = `${d}/${e}`;
          if (null === o || i().isEmpty(o) || (m += `?${new URLSearchParams(o)}`), !f && c) return null;
          f && (h.Authorization = `Bearer ${f}`);
          const g = {
              headers: h
            },
            p = s().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: m
            }),
            y = await (0, r.sc)(v);
          if (u) {
            if (w[y]?.response) return w[y].response;
            if (w[y]?.loading) return {
              error: null,
              result: null
            };
            w[y] = {
              loading: !0
            }
          }
          const E = await fetch(m, p),
            b = await E.json();
          return u && (w[y] = {
            response: b,
            loading: !1
          }), b
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    60309: (e, t, n) => {
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
    72148: (e, t, n) => {
      n.d(t, {
        RK: () => o,
        bn: () => L,
        ri: () => a,
        vx: () => x,
        sb: () => S,
        Ym: () => i.A,
        CA: () => E.useNewswirePost,
        OG: () => c,
        ZC: () => l,
        sq: () => d,
        OH: () => v,
        zP: () => y,
        Cb: () => h,
        N6: () => k,
        GA: () => A
      });
      const r = (0, n(60309).A)(),
        o = () => r;
      var s = n(71127);
      const a = (e, t) => {
        const [n, r] = (0, s.useState)(0);
        return (0, s.useEffect)((() => {
          if (e.current) {
            const {
              current: n
            } = e, o = n.getBoundingClientRect(), {
              width: s
            } = o;
            let a = s;
            if (!0 === t) {
              const e = window.getComputedStyle(n);
              a += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
            }
            r(a)
          }
        }), [e]), n
      };
      var i = n(26675);
      const c = e => {
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
      var u = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, u.useLocation)();
          return new URLSearchParams(e)
        },
        l = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var w = n(20772),
        f = n(60099);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null
      }) => {
        const o = (0, w.Es)(),
          [a, i] = (0, s.useState)(null),
          [c, u] = (0, s.useState)(!1),
          [d, l] = (0, s.useState)(null),
          h = (0, s.useCallback)((async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              l(null), i(null), u(!0);
              const c = await (0, f.A)(s ?? e, {
                pingBearer: o,
                fetchOptions: n,
                finalFetchOptions: a,
                query: r
              });
              return c?.status || l(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              l(String(e)), u(!1)
            }
            return null
          }), [e, n, r]);
        return (0, s.useEffect)((() => {
          null === a && null === d && !c && t && h()
        }), [t, a, d, c, h]), {
          data: a,
          error: d,
          loading: c,
          fetch: h
        }
      };
      var m = n(45547);
      const g = "__RS_CUSTOM_EVENTS__",
        p = e => `rsCustomEvent:${e}`;
      window[g] || (window[g] = {});
      const v = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = p(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].eventQueue.push(r), window[g][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        y = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = p(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter((e => e !== t)), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var E = n(89656),
        b = (n(95342), n(17954));
      const k = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), r = (0, i.A)(), o = (0, b.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(50437);
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
        S = () => {
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
      var C = n(25906),
        T = n(81878);
      const L = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, C.XB)(), {
            effectiveConnectionType: r
          } = (0, C.M5)(), {
            numberOfLogicalProcessors: o
          } = (0, C.xV)(), {
            saveData: a
          } = (0, C.zp)(), i = x(), c = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (T.n8 || T.lT || T.w || T.UX) return !1;
              const t = "Safari" === T.C0,
                s = "Firefox" === T.C0,
                c = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
                u = o && o >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(c) || e(u) || !t && !s && e(d))
            })();
            s !== e && t(s)
          };
          return (0, s.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, r, e, o, a, i]), e
        },
        A = e => {
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
    89656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(42295),
        o = n(71127);
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
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(42295),
        o = n(71127),
        s = n(93452),
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
          const [t, n] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [l, w] = (0, o.useState)(!1), f = (0, s.q)(c);
          let h;
          const m = () => {
            w(!0), clearTimeout(h), h = setTimeout((() => {
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
          }), [l, f]), (0, o.useMemo)((() => (0, r.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: t,
              pauseUserShouldSeeMore: m,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          })), [f, t, m, a])
        }
    }
  }
]);