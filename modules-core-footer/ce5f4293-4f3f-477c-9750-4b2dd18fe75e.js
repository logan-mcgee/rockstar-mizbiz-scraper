try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ce5f4293-4f3f-477c-9750-4b2dd18fe75e", e._sentryDebugIdIdentifier = "sentry-dbid-ce5f4293-4f3f-477c-9750-4b2dd18fe75e")
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
        e9: () => m,
        Es: () => h,
        bD: () => f
      });
      var o = n(42295),
        r = n(71127),
        s = n(21823),
        a = n(93452),
        c = n(9482),
        i = n(58128),
        u = n(45547);
      const d = {
          token: (0, s.UT)("")
        },
        l = (0, c.A)({
          context: (0, r.createContext)(d),
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
          } = (0, r.useContext)(l);
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
          cdnBase: u,
          key: d,
          marketingAuthTLD: l
        }) => {
          const w = o?.apiHost ?? e,
            f = o?.authHost ?? t,
            m = o?.cdnBase ?? u,
            h = o?.clientId ?? n,
            g = r?.marketingAuthTLD ?? l,
            p = o?.scHost ?? c,
            v = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: p,
            hostname: i,
            cdnBase: m,
            key: d,
            clientId: h,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: f,
            scBase: `https://${p}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${h}`,
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
        G4: () => m,
        uU: () => f
      });
      var o = n(42295),
        r = n(71127),
        s = n(93452),
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
        u = () => {
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
        d = (0, c.A)({
          context: (0, r.createContext)(u()),
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
          return (0, r.useEffect)((() => {
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
        m = () => (0, r.useContext)(d)
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
        A: () => f
      });
      var o = n(42887),
        r = n(79465),
        s = n.n(r),
        a = n(15076),
        c = n.n(a),
        i = n(45547),
        u = n(17954);
      const {
        apiHost: d
      } = (0, i.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, f = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: r = null,
        pingBearer: a,
        requireBearerToken: i = !0,
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
          if (null === r || c().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !f && i) return null;
          f && (m.Authorization = `Bearer ${f}`);
          const g = {
              headers: m
            },
            p = s().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: h
            }),
            y = await (0, o.sc)(v);
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
          const E = await fetch(h, p),
            k = await E.json();
          return u && (w[y] = {
            response: k,
            loading: !1
          }), k
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
        RK: () => r,
        bn: () => A,
        ri: () => a,
        vx: () => C,
        sb: () => S,
        Ym: () => c.A,
        CA: () => E.useNewswirePost,
        OG: () => i,
        ZC: () => l,
        sq: () => d,
        OH: () => v,
        zP: () => y,
        Cb: () => m,
        N6: () => x,
        Br: () => b,
        GA: () => M
      });
      const o = (0, n(60309).A)(),
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
      var c = n(26675);
      const i = e => {
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
      const m = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: o = null
      }) => {
        const r = (0, w.Es)(),
          [a, c] = (0, s.useState)(null),
          [i, u] = (0, s.useState)(!1),
          [d, l] = (0, s.useState)(null),
          m = (0, s.useCallback)((async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              l(null), c(null), u(!0);
              const i = await (0, f.A)(s ?? e, {
                pingBearer: r,
                fetchOptions: n,
                finalFetchOptions: a,
                query: o
              });
              return i?.status || l(JSON.stringify(i?.error)), c(i), u(!1), i
            } catch (e) {
              l(String(e)), u(!1)
            }
            return null
          }), [e, n, o]);
        return (0, s.useEffect)((() => {
          null === a && null === d && !i && t && m()
        }), [t, a, d, i, m]), {
          data: a,
          error: d,
          loading: i,
          fetch: m
        }
      };
      var h = n(45547);
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
        k = (n(95342), n(17954));
      const b = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, h.A)(), r = (0, c.A)(), s = (0, k.t)(r), a = (0, w.e9)();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(s), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(a), new URL(i, `https://${n}.rockstargames.com/`)
        },
        x = e => {
          const {
            signup: t,
            login: n
          } = (0, h.A)(), o = (0, c.A)(), r = (0, k.t)(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        };
      n(50437);
      const C = () => {
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
      var T = n(25906),
        L = n(81878);
      const A = () => {
          const [e, t] = (0, s.useState)(!1), {
            deviceMemory: n
          } = (0, T.XB)(), {
            effectiveConnectionType: o
          } = (0, T.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, T.xV)(), {
            saveData: a
          } = (0, T.zp)(), c = C(), i = () => {
            const s = (() => {
              const e = e => !1 === e;
              if (c) return !1;
              if (L.n8 || L.lT || L.w || L.UX) return !1;
              const t = "Safari" === L.C0,
                s = "Firefox" === L.C0,
                i = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
                u = r && r >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(i) || e(u) || !t && !s && e(d))
            })();
            s !== e && t(s)
          };
          return (0, s.useEffect)((() => (i(), window.addEventListener("online", i), window.addEventListener("offline", i), window.addEventListener("devicememory", i), () => {
            window.removeEventListener("online", i), window.removeEventListener("offline", i), window.removeEventListener("devicememory", i)
          })), [n, o, e, r, a, c]), e
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
    89656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => i
      });
      var o = n(42295),
        r = n(71127);
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
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var o = n(42295),
        r = n(71127),
        s = n(93452),
        a = n(21823),
        c = n(9482);
      const i = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => i(e),
        d = (0, c.A)({
          context: (0, r.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, r.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, r.useState)(window.pageYOffset), [a, c] = (0, r.useState)(null), [l, w] = (0, r.useState)(!1), f = (0, s.q)(i);
          let m;
          const h = () => {
            w(!0), clearTimeout(m), m = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, r.useEffect)((() => {
            let e;
            const t = () => {
              if (f) return void c(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || c(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, f]), (0, r.useMemo)((() => (0, o.jsx)(d.Provider, {
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
    }
  }
]);