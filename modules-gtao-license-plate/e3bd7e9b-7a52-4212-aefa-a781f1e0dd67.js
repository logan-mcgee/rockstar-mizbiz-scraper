try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e3bd7e9b-7a52-4212-aefa-a781f1e0dd67", e._sentryDebugIdIdentifier = "sentry-dbid-e3bd7e9b-7a52-4212-aefa-a781f1e0dd67")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [2148], {
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
        Es: () => f,
        bD: () => m
      });
      var o = n(42295),
        r = n(62229),
        s = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(58128),
        d = n(45547);
      const u = {
          token: (0, s.UT)("")
        },
        l = (0, i.A)({
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
    26675: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var o = n(93452);
      const r = (0, n(21823).UT)(document.documentElement.lang),
        s = () => (0, o.q)(r)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
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
          const w = o?.apiHost ?? e,
            m = o?.authHost ?? t,
            h = o?.cdnBase ?? d,
            f = o?.clientId ?? n,
            g = r?.marketingAuthTLD ?? l,
            p = o?.scHost ?? i,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: p,
            hostname: c,
            cdnBase: h,
            key: u,
            clientId: f,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${p}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${f}`,
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
        uU: () => m
      });
      var o = n(42295),
        r = n(62229),
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
        d = () => {
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
        u = (0, i.A)({
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
    52690: (e, t, n) => {
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
    60099: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var o = n(42887),
        r = n(79465),
        s = n.n(r),
        a = n(16188),
        i = n.n(a),
        c = n(45547),
        d = n(17954);
      const {
        apiHost: u
      } = (0, c.A)(), l = (0, d.t)(document.documentElement.lang), w = {}, m = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: r = null,
        pingBearer: a,
        requireBearerToken: c = !0,
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
          if (null === r || i().isEmpty(r) || (f += `?${new URLSearchParams(r)}`), !m && c) return null;
          m && (h.Authorization = `Bearer ${m}`);
          const g = {
              headers: h
            },
            p = s().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: f
            }),
            b = await (0, o.sc)(v);
          if (d) {
            if (w[b]?.response) return w[b].response;
            if (w[b]?.loading) return {
              error: null,
              result: null
            };
            w[b] = {
              loading: !0
            }
          }
          const y = await fetch(f, p),
            E = await y.json();
          return d && (w[b] = {
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
        U4: () => E.U4,
        RK: () => r,
        bn: () => U,
        ri: () => a,
        vx: () => S,
        sb: () => T,
        Ym: () => i.A,
        CA: () => y.useNewswirePost,
        OG: () => c,
        ZC: () => l,
        sq: () => u,
        OH: () => v,
        zP: () => b,
        Cb: () => h,
        N6: () => C,
        Br: () => x,
        GA: () => M
      });
      const o = (0, n(60309).A)(),
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
      var i = n(26675);
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
      var d = n(9623);
      const u = () => {
          const {
            search: e
          } = (0, d.useLocation)();
          return new URLSearchParams(e)
        },
        l = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var w = n(20772),
        m = n(60099);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: o = null
      }) => {
        const r = (0, w.Es)(),
          [a, i] = (0, s.useState)(null),
          [c, d] = (0, s.useState)(!1),
          [u, l] = (0, s.useState)(null),
          h = (0, s.useCallback)((async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              l(null), i(null), d(!0);
              const c = await (0, m.A)(s ?? e, {
                pingBearer: r,
                fetchOptions: n,
                finalFetchOptions: a,
                query: o
              });
              return c?.status || l(JSON.stringify(c?.error)), i(c), d(!1), c
            } catch (e) {
              l(String(e)), d(!1)
            }
            return null
          }), [e, n, o]);
        return (0, s.useEffect)((() => {
          null === a && null === u && !c && t && h()
        }), [t, a, u, c, h]), {
          data: a,
          error: u,
          loading: c,
          fetch: h
        }
      };
      var f = n(45547);
      const g = "__RS_CUSTOM_EVENTS__",
        p = e => `rsCustomEvent:${e}`;
      window[g] || (window[g] = {});
      const v = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = p(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].eventQueue.push(o), window[g][n].subscribers.forEach((e => {
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
      var y = n(89656),
        E = n(95342),
        k = n(17954);
      const x = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, f.A)(), r = (0, i.A)(), s = (0, k.t)(r), a = (0, w.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(s), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(a), new URL(c, `https://${n}.rockstargames.com/`)
        },
        C = e => {
          const {
            signup: t,
            login: n
          } = (0, f.A)(), o = (0, i.A)(), r = (0, k.t)(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        };
      n(50437);
      const S = () => {
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
        T = () => {
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
      var L = n(25906),
        A = n(81878);
      const U = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, L.XB)(), {
            effectiveConnectionType: o
          } = (0, L.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, L.xV)(), {
            saveData: a
          } = (0, L.zp)(), i = S(), c = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (A.n8 || A.lT || A.w || A.UX) return !1;
              const t = "Safari" === A.C0,
                s = "Firefox" === A.C0,
                c = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                d = r && r >= 4,
                u = n && n >= 4;
              return !(e(!a) || e(c) || e(d) || !t && !s && e(u))
            })();
            s !== e && t(s)
          };
          return (0, s.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          })), [n, o, e, r, a, i]), e
        },
        M = e => {
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
    89656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var o = n(42295),
        r = n(62229);
      const s = (0, n(9482).A)({
          context: (0, r.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = s,
        i = ({
          article: e,
          children: t
        }) => (0, o.jsx)(s.Provider, {
          value: e,
          children: t
        }),
        c = () => (0, r.useContext)(s)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w,
        U4: () => d
      });
      var o = n(42295),
        r = n(62229),
        s = n(93452),
        a = n(21823),
        i = n(9482);
      const c = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        d = e => c(e),
        u = (0, i.A)({
          context: (0, r.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, r.useContext)(u),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, r.useState)(window.pageYOffset), [a, i] = (0, r.useState)(null), [l, w] = (0, r.useState)(!1), m = (0, s.q)(c);
          let h;
          const f = () => {
            w(!0), clearTimeout(h), h = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, r.useEffect)((() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
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
    }
  }
]);