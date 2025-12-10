try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2fedb6e7-3375-4910-9a6c-4a6f02bead95", e._sentryDebugIdIdentifier = "sentry-dbid-2fedb6e7-3375-4910-9a6c-4a6f02bead95")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6088], {
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
        ec: () => l,
        e9: () => m,
        Es: () => f,
        bD: () => w
      });
      var r = n(42295),
        s = n(62229),
        o = n(89311),
        a = n(9482),
        i = n(58128),
        c = n(45547);
      const u = {
          token: (0, o.makeVar)("")
        },
        d = (0, a.A)({
          context: (0, s.createContext)(u),
          key: "utilsTokenProvider"
        }),
        l = ({
          children: e,
          token: t
        }) => (0, r.jsx)(d.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        w = () => {
          const {
            token: e
          } = (0, s.useContext)(d);
          return [e]
        },
        m = () => {
          const [e] = w();
          return (0, o.useReactiveVar)(e)
        },
        f = () => {
          const [e] = w();
          return () => (async ({
            token: e
          }) => {
            const {
              pingBearer: t
            } = (0, c.A)();
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
        A: () => o
      });
      var r = n(89311);
      const s = (0, r.makeVar)(document.documentElement.lang),
        o = () => (0, r.useReactiveVar)(s)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const r = window?.env?.sc,
        s = window?.env?.marketing,
        o = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
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
            p = s?.marketingAuthTLD ?? w,
            v = r?.scHost ?? c,
            b = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: v,
            hostname: u,
            cdnBase: h,
            key: l,
            clientId: g,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: f,
            queryManifest: i,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${b}`
          }
        },
        a = [o({
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
        }), o({
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
        G4: () => m,
        uU: () => w
      });
      var r = n(42295),
        s = n(62229),
        o = n(89311),
        a = n(9482);
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
        c = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = i;
          return Object.keys(i).map(t => {
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
          }), {
            isMobile: e < i.sm.min,
            isTablet: e < i.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        u = (0, a.A)({
          context: (0, s.createContext)(c()),
          key: "resizeContext"
        }),
        {
          Consumer: d
        } = u,
        l = (0, o.makeVar)(c()),
        w = ({
          children: e
        }) => {
          const t = (0, o.useReactiveVar)(l);
          return (0, s.useEffect)(() => {
            const e = () => {
              l(c())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, r.jsx)(u.Provider, {
            value: t,
            children: e
          })
        },
        m = () => (0, s.useContext)(u)
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
    56088: (e, t, n) => {
      n.d(t, {
        RK: () => s,
        bn: () => M,
        ri: () => a,
        vx: () => x,
        sb: () => S,
        Ym: () => i.A,
        CA: () => k.useNewswirePost,
        OG: () => c,
        ZC: () => l,
        sq: () => d,
        OH: () => v,
        zP: () => b,
        Cb: () => f,
        N6: () => E,
        GA: () => A,
        JE: () => T
      });
      const r = (0, n(60309).A)(),
        s = () => r;
      var o = n(62229);
      const a = (e, t) => {
        const [n, r] = (0, o.useState)(0);
        return (0, o.useEffect)(() => {
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
        }, [e]), n
      };
      var i = n(26675);
      const c = e => {
        const [t, n] = (0, o.useState)(null), [r, s] = (0, o.useState)(null), [a, i] = (0, o.useState)({});
        return (0, o.useLayoutEffect)(() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", () => {
            i({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          }), t.addEventListener("error", () => {
            t = null, r || (n(!1), s(!0))
          }), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }, [e]), [t, a]
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
          return (0, o.useEffect)(() => {
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
        const s = (0, w.Es)(),
          [a, i] = (0, o.useState)(null),
          [c, u] = (0, o.useState)(!1),
          [d, l] = (0, o.useState)(null),
          f = (0, o.useCallback)(async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              l(null), i(null), u(!0);
              const c = await (0, m.A)(o ?? e, {
                pingBearer: s,
                fetchOptions: n,
                finalFetchOptions: a,
                query: r
              });
              return c?.status || l(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              l(String(e)), u(!1)
            }
            return null
          }, [e, n, r]);
        return (0, o.useEffect)(() => {
          null === a && null === d && !c && t && f()
        }, [t, a, d, c, f]), {
          data: a,
          error: d,
          loading: c,
          fetch: f
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
          return (0, o.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        b = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, o.useEffect)(() => {
            const n = p(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter(e => e !== t), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }, [e, t]), (0, o.useMemo)(() => ({}), [])
        };
      var k = n(89656),
        y = (n(95342), n(17954));
      const E = e => {
        const {
          signup: t,
          login: n
        } = (0, h.A)(), r = (0, i.A)(), s = (0, y.t)(r);
        let o = "";
        return o += "lang=" + encodeURIComponent(s), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${o}`,
          signInUrl: `${n}?${o}`
        }
      };
      n(50437);
      const x = () => {
          const [e, t] = (0, o.useState)(!1);
          return (0, o.useEffect)(() => {
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
          const [e, t] = (0, o.useState)(!1);
          return (0, o.useEffect)(() => {
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
      var C = n(25906),
        L = n(81878);
      const M = () => {
          const [e, t] = (0, o.useState)(!1), {
            deviceMemory: n
          } = (0, C.XB)(), {
            effectiveConnectionType: r
          } = (0, C.M5)(), {
            numberOfLogicalProcessors: s
          } = (0, C.xV)(), {
            saveData: a
          } = (0, C.zp)(), i = x(), c = () => {
            const o = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (L.n8 || L.lT || L.w || L.UX) return !1;
              const t = "Safari" === L.C0,
                o = "Firefox" === L.C0,
                c = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
                u = s && s >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(c) || e(u) || !t && !o && e(d))
            })();
            o !== e && t(o)
          };
          return (0, o.useEffect)(() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          }), [n, r, e, s, a, i]), e
        },
        A = e => {
          const [t, n] = (0, o.useState)(!1), r = (0, o.useRef)(null);
          return (0, o.useEffect)(() => {
            const s = () => {
              if (t || !r.current) return;
              const o = r.current,
                {
                  height: a
                } = o.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= o.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", s))
            };
            return window.addEventListener("scroll", s, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", s)
            }
          }, [t, e]), {
            ref: r,
            scrollTracked: t
          }
        },
        T = (e = 0) => {
          const t = (0, o.useRef)(null),
            [n, r] = (0, o.useState)(!1),
            s = () => {
              const n = t.current;
              if (!n) return;
              const s = n.getBoundingClientRect(),
                o = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(s.bottom, o) - Math.max(s.top, 0)) / s.height;
              r(a > e)
            };
          return (0, o.useEffect)(() => {
            s();
            const e = () => requestAnimationFrame(s);
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
        s = n(79465),
        o = n.n(s),
        a = n(15076),
        i = n.n(a),
        c = n(45547),
        u = n(17954);
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
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: h
            }),
            b = await (0, r.sc)(v);
          if (u) {
            if (w[b]?.response) return w[b].response;
            if (w[b]?.loading) return {
              error: null,
              result: null
            };
            w[b] = {
              loading: !0
            }
          }
          const k = await fetch(h, p),
            y = await k.json();
          return u && (w[b] = {
            response: y,
            loading: !1
          }), y
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
        s = n(62229);
      const o = (0, n(9482).A)({
          context: (0, s.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = o,
        i = ({
          article: e,
          children: t
        }) => (0, r.jsx)(o.Provider, {
          value: e,
          children: t
        }),
        c = () => (0, s.useContext)(o)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => d,
        N2: () => l
      });
      var r = n(42295),
        s = n(62229),
        o = n(89311),
        a = n(9482);
      const i = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, o.makeVar)(!1)
        }),
        c = e => i(e),
        u = (0, a.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        }),
        d = () => (0, s.useContext)(u),
        l = ({
          children: e
        }) => {
          const [t, n] = (0, s.useState)(window.pageYOffset), [a, d] = (0, s.useState)(null), [l, w] = (0, s.useState)(!1), m = (0, o.useReactiveVar)(i);
          let f;
          const h = () => {
            w(!0), clearTimeout(f), f = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, s.useEffect)(() => {
            let e;
            const t = () => {
              if (m) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [l, m]), (0, s.useMemo)(() => (0, r.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: h,
              setFreezeUserShouldSeeMore: c,
              userShouldSeeMore: a
            },
            children: e
          }), [m, t, h, a])
        }
    }
  }
]);