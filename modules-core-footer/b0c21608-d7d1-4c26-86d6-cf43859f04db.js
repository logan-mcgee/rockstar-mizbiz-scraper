try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b0c21608-d7d1-4c26-86d6-cf43859f04db", e._sentryDebugIdIdentifier = "sentry-dbid-b0c21608-d7d1-4c26-86d6-cf43859f04db")
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
  [6088], {
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
        ec: () => m,
        e9: () => h,
        Es: () => g,
        bD: () => f
      });
      var r = n(42295),
        o = n(71127),
        s = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(37980),
        u = n(58128),
        d = n(45547);
      const l = {
          token: (0, s.UT)("")
        },
        w = (0, i.A)({
          context: (0, o.createContext)(l),
          key: "utilsTokenProvider"
        }),
        m = ({
          children: e,
          token: t
        }) => (0, r.jsx)(w.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        f = () => {
          const {
            token: e
          } = (0, o.useContext)(w);
          return [e]
        },
        h = () => {
          const [e] = f();
          return (0, a.q)(e)
        },
        g = () => {
          const [e] = f();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = (0, d.A)(), r = e => {
              try {
                const {
                  exp: t = 0
                } = (0, u.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const o = r(c.A.get(t)) || r(e?.());
              if (o) return e(o), {
                bearerToken: o
              };
              const s = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                a = await s.json();
              return e(a.bearerToken ?? ""), a
            } catch {
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
          queryManifest: i,
          scHost: c,
          hostname: u,
          cdnBase: d,
          key: l,
          marketingAuthTLD: w
        }) => {
          const m = r?.apiHost ?? e,
            f = r?.authHost ?? t,
            h = r?.cdnBase ?? d,
            g = r?.clientId ?? n,
            p = o?.marketingAuthTLD ?? w,
            v = r?.scHost ?? c,
            y = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: v,
            hostname: u,
            cdnBase: h,
            key: l,
            clientId: g,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: f,
            queryManifest: i,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${y}`,
            authCookieName: "BearerToken"
          }
        },
        a = [s({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
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
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        i = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return a.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || a[0]
        }
    },
    50437: (e, t, n) => {
      n.d(t, {
        G4: () => f,
        uU: () => m
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
          return Object.keys(c).map(t => {
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
          }), {
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
        m = ({
          children: e
        }) => {
          const t = (0, s.q)(w);
          return (0, o.useEffect)(() => {
            const e = () => {
              w(u())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, r.jsx)(d.Provider, {
            value: t,
            children: e
          })
        },
        f = () => (0, o.useContext)(d)
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
    56088: (e, t, n) => {
      n.d(t, {
        RK: () => o,
        bn: () => $,
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
        Cb: () => f,
        N6: () => k,
        GA: () => _,
        JE: () => H
      });
      const r = (0, n(60309).A)(),
        o = () => r;
      var s = n(71127);
      const a = (e, t) => {
        const [n, r] = (0, s.useState)(0);
        return (0, s.useEffect)(() => {
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
        }, [e]), n
      };
      var i = n(26675);
      const c = e => {
        const [t, n] = (0, s.useState)(null), [r, o] = (0, s.useState)(null), [a, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)(() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", () => {
            i({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          }), t.addEventListener("error", () => {
            t = null, r || (n(!1), o(!0))
          }), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }, [e]), [t, a]
      };
      var u = n(10181);
      const d = () => {
          const {
            search: e
          } = (0, u.useLocation)();
          return new URLSearchParams(e)
        },
        l = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        };
      var w = n(20772),
        m = n(60099);
      const f = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null
      }) => {
        const o = (0, w.Es)(),
          [a, i] = (0, s.useState)(null),
          [c, u] = (0, s.useState)(!1),
          [d, l] = (0, s.useState)(null),
          [f, h] = (0, s.useState)(!1),
          g = (0, s.useCallback)(async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              l(null), i(null), u(!0);
              const c = await (0, m.A)(s ?? e, {
                pingBearer: o,
                fetchOptions: n,
                finalFetchOptions: a,
                query: r
              });
              return c?.status || l(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              l(String(e)), u(!1)
            } finally {
              h(!0)
            }
            return null
          }, [e, n, r]);
        return (0, s.useEffect)(() => {
          null === a && null === d && !c && t && g()
        }, [t, a, d, c, g]), {
          data: a,
          error: d,
          loading: c,
          fetch: g,
          resolved: f
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
              r = new CustomEvent(n, {
                detail: t
              });
            window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].eventQueue.push(r), window[g][n].subscribers.forEach(e => {
              e(r.detail)
            })
          };
          return (0, s.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        y = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)(() => {
            const n = p(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter(e => e !== t), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }, [e, t]), (0, s.useMemo)(() => ({}), [])
        };
      var E = n(89656),
        b = (n(95342), n(17954));
      const k = e => {
        const {
          signup: t,
          login: n
        } = (0, h.A)(), r = (0, i.A)(), o = (0, b.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(50437);
      const x = () => {
          const [e, t] = (0, s.useState)();
          return (0, s.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        S = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)(() => {
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
          }, []), e
        };
      var C = n(81878);
      const L = navigator?.deviceMemory,
        T = navigator?.connection?.effectiveType,
        M = navigator?.hardwareConcurrency,
        A = navigator?.connection?.saveData ?? !1,
        $ = () => {
          const [e, t] = (0, s.useState)(), n = x();
          return (0, s.useEffect)(() => {
            const r = () => {
              const r = (() => {
                const e = e => !1 === e;
                if (n) return !1;
                if (C.n8 || C.lT || C.w || C.UX) return !1;
                const t = "Safari" === C.C0,
                  r = "Firefox" === C.C0,
                  o = T && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(T),
                  s = M && M >= 4,
                  a = L && L >= 4;
                return !(e(!A) || e(o) || e(s) || !t && !r && e(a))
              })();
              r !== e && t(r)
            };
            return r(), window.addEventListener("online", r), window.addEventListener("offline", r), window.addEventListener("devicememory", r), () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r), window.removeEventListener("devicememory", r)
            }
          }, [L, T, e, M, A, n]), e
        },
        _ = e => {
          const [t, n] = (0, s.useState)(!1), r = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
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
          }, [t, e]), {
            ref: r,
            scrollTracked: t
          }
        },
        H = (e = 0) => {
          const t = (0, s.useRef)(null),
            [n, r] = (0, s.useState)(!1),
            o = () => {
              const n = t.current;
              if (!n) return;
              const o = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(o.bottom, s) - Math.max(o.top, 0)) / o.height;
              r(a > e)
            };
          return (0, s.useEffect)(() => {
            o();
            const e = () => requestAnimationFrame(o);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), window.addEventListener("resize", e), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
            }
          }, [e]), {
            ref: t,
            inView: n
          }
        }
    },
    60099: (e, t, n) => {
      n.d(t, {
        A: () => m
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
      } = (0, c.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, m = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: o = null,
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
          if (null === o || i().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !m && c) return null;
          m && (f.Authorization = `Bearer ${m}`);
          const g = {
              headers: f
            },
            p = s().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: h
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
          const E = await fetch(h, p),
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
          const [t, n] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [l, w] = (0, o.useState)(!1), m = (0, s.q)(c);
          let f;
          const h = () => {
            w(!0), clearTimeout(f), f = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, o.useEffect)(() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [l, m]), (0, o.useMemo)(() => (0, r.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: h,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          }), [m, t, h, a])
        }
    }
  }
]);