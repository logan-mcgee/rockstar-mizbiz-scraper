try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "707a9a80-36c5-4c27-9670-cc3134cfdc00", e._sentryDebugIdIdentifier = "sentry-dbid-707a9a80-36c5-4c27-9670-cc3134cfdc00")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2148], {
    9482: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        s = ({
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
        Es: () => f,
        bD: () => m
      });
      var r = n(42295),
        s = n(62229),
        o = n(21823),
        a = n(93452),
        c = n(9482),
        i = n(58128),
        u = n(45547);
      const d = {
          token: (0, o.UT)("")
        },
        l = (0, c.A)({
          context: (0, s.createContext)(d),
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
        m = () => {
          const {
            token: e
          } = (0, s.useContext)(l);
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
              const r = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await r.json();
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
        A: () => o
      });
      var r = n(93452);
      const s = (0, n(21823).UT)(document.documentElement.lang),
        o = () => (0, r.q)(s)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => c
      });
      const r = window?.env?.sc,
        s = window?.env?.marketing,
        o = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
          graphEnv: a,
          scHost: c,
          hostname: i,
          cdnBase: u,
          key: d,
          marketingAuthTLD: l
        }) => {
          const w = r?.apiHost ?? e,
            m = r?.authHost ?? t,
            h = r?.cdnBase ?? u,
            f = r?.clientId ?? n,
            g = s?.marketingAuthTLD ?? l,
            p = r?.scHost ?? c,
            v = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: p,
            hostname: i,
            cdnBase: h,
            key: d,
            clientId: f,
            cms: `https://${o}.rockstargames.com/graphql`,
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
        a = [o({
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
        }), o({
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
        uU: () => m
      });
      var r = n(42295),
        s = n(62229),
        o = n(93452),
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
              min: r,
              max: s
            } = i[t], o = e >= r && e <= s, a = e >= r;
            n[t] = {
              activeExact: o,
              activeMin: a,
              min: r,
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
        d = (0, c.A)({
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
          const t = (0, o.q)(w);
          return (0, s.useEffect)((() => {
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
        h = () => (0, s.useContext)(d)
    },
    52690: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      const r = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        s = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (r()?.[n] || (r()[n] = {}), r()?.[n]?.[e] || (r()[n][e] = t), r()[n][e])
    },
    60099: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var r = n(42887),
        s = n(79465),
        o = n.n(s),
        a = n(15076),
        c = n.n(a),
        i = n(45547),
        u = n(17954);
      const {
        apiHost: d
      } = (0, i.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, m = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: s = null,
        pingBearer: a,
        requireBearerToken: i = !0,
        useCache: u = !0
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
          let f = `${d}/${e}`;
          if (null === s || c().isEmpty(s) || (f += `?${new URLSearchParams(s)}`), !m && i) return null;
          m && (h.Authorization = `Bearer ${m}`);
          const g = {
              headers: h
            },
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: f
            }),
            k = await (0, r.sc)(v);
          if (u) {
            if (w[k]?.response) return w[k].response;
            if (w[k]?.loading) return {
              error: null,
              result: null
            };
            w[k] = {
              loading: !0
            }
          }
          const y = await fetch(f, p),
            E = await y.json();
          return u && (w[k] = {
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
        RK: () => s,
        bn: () => A,
        ri: () => a,
        vx: () => C,
        sb: () => S,
        Ym: () => c.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => l,
        sq: () => d,
        OH: () => v,
        zP: () => k,
        Cb: () => h,
        N6: () => x,
        Br: () => b,
        GA: () => M
      });
      const r = (0, n(60309).A)(),
        s = () => r;
      var o = n(62229);
      const a = (e, t) => {
        const [n, r] = (0, o.useState)(0);
        return (0, o.useEffect)((() => {
          if (e.current) {
            const {
              current: n
            } = e, s = n.getBoundingClientRect(), {
              width: o
            } = s;
            let a = o;
            if (!0 === t) {
              const e = window.getComputedStyle(n);
              a += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
            }
            r(a)
          }
        }), [e]), n
      };
      var c = n(26675);
      const i = e => {
        const [t, n] = (0, o.useState)(null), [r, s] = (0, o.useState)(null), [a, c] = (0, o.useState)({});
        return (0, o.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            c({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), s(!0))
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
          const t = (0, o.useRef)();
          return (0, o.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var w = n(20772),
        m = n(60099);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null
      }) => {
        const s = (0, w.Es)(),
          [a, c] = (0, o.useState)(null),
          [i, u] = (0, o.useState)(!1),
          [d, l] = (0, o.useState)(null),
          h = (0, o.useCallback)((async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              l(null), c(null), u(!0);
              const i = await (0, m.A)(o ?? e, {
                pingBearer: s,
                fetchOptions: n,
                finalFetchOptions: a,
                query: r
              });
              return i?.status || l(JSON.stringify(i?.error)), c(i), u(!1), i
            } catch (e) {
              l(String(e)), u(!1)
            }
            return null
          }), [e, n, r]);
        return (0, o.useEffect)((() => {
          null === a && null === d && !i && t && h()
        }), [t, a, d, i, h]), {
          data: a,
          error: d,
          loading: i,
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
          return (0, o.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        k = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, o.useEffect)((() => {
            const n = p(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter((e => e !== t)), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }), [e, t]), (0, o.useMemo)((() => ({})), [])
        };
      var y = n(89656),
        E = (n(95342), n(17954));
      const b = (e, t) => {
          const {
            authHost: n,
            clientId: r
          } = (0, f.A)(), s = (0, c.A)(), o = (0, E.t)(s), a = (0, w.e9)();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(r), i += "&lang=" + encodeURIComponent(o), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(a), new URL(i, `https://${n}.rockstargames.com/`)
        },
        x = e => {
          const {
            signup: t,
            login: n
          } = (0, f.A)(), r = (0, c.A)(), s = (0, E.t)(r);
          let o = "";
          return o += "lang=" + encodeURIComponent(s), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${o}`,
            signInUrl: `${n}?${o}`
          }
        };
      n(50437);
      const C = () => {
          const [e, t] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
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
          const [e, t] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
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
          const [e, t] = (0, o.useState)(!1), {
            deviceMemory: n
          } = (0, T.XB)(), {
            effectiveConnectionType: r
          } = (0, T.M5)(), {
            numberOfLogicalProcessors: s
          } = (0, T.xV)(), {
            saveData: a
          } = (0, T.zp)(), c = C(), i = () => {
            const o = (() => {
              const e = e => !1 === e;
              if (c) return !1;
              if (L.n8 || L.lT || L.w || L.UX) return !1;
              const t = "Safari" === L.C0,
                o = "Firefox" === L.C0,
                i = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
                u = s && s >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(i) || e(u) || !t && !o && e(d))
            })();
            o !== e && t(o)
          };
          return (0, o.useEffect)((() => (i(), window.addEventListener("online", i), window.addEventListener("offline", i), window.addEventListener("devicememory", i), () => {
            window.removeEventListener("online", i), window.removeEventListener("offline", i), window.removeEventListener("devicememory", i)
          })), [n, r, e, s, a, c]), e
        },
        M = e => {
          const [t, n] = (0, o.useState)(!1), r = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            const s = () => {
              if (t || !r.current) return;
              const o = r.current,
                {
                  height: a
                } = o.getBoundingClientRect(),
                c = window.innerHeight;
              window.scrollY + c >= o.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", s))
            };
            return window.addEventListener("scroll", s, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", s)
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
        Provider: () => c,
        useNewswirePost: () => i
      });
      var r = n(42295),
        s = n(62229);
      const o = (0, n(9482).A)({
          context: (0, s.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = o,
        c = ({
          article: e,
          children: t
        }) => (0, r.jsx)(o.Provider, {
          value: e,
          children: t
        }),
        i = () => (0, s.useContext)(o)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(42295),
        s = n(62229),
        o = n(93452),
        a = n(21823),
        c = n(9482);
      const i = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => i(e),
        d = (0, c.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, s.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, s.useState)(window.pageYOffset), [a, c] = (0, s.useState)(null), [l, w] = (0, s.useState)(!1), m = (0, o.q)(i);
          let h;
          const f = () => {
            w(!0), clearTimeout(h), h = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (m) return void c(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || c(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, m]), (0, s.useMemo)((() => (0, r.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          })), [m, t, f, a])
        }
    }
  }
]);