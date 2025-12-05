try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cc9f4382-6d46-46ad-a412-736808b2e227", e._sentryDebugIdIdentifier = "sentry-dbid-cc9f4382-6d46-46ad-a412-736808b2e227")
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
  [6088], {
    9482: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const s = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        r = ({
          context: e,
          key: t
        }) => (s()?.[t] || (s()[t] = e), s()[t])
    },
    20772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => f,
        Es: () => h,
        bD: () => m
      });
      var s = n(42295),
        r = n(62229),
        o = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(58128),
        u = n(45547);
      const d = {
          token: (0, o.UT)("")
        },
        l = (0, i.A)({
          context: (0, r.createContext)(d),
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
        m = () => {
          const {
            token: e
          } = (0, r.useContext)(l);
          return [e]
        },
        f = () => {
          const [e] = m();
          return (0, a.q)(e)
        },
        h = () => {
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
                r = await s.json();
              return e(r.bearerToken ?? ""), r
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
      var s = n(93452);
      const r = (0, n(21823).UT)(document.documentElement.lang),
        o = () => (0, s.q)(r)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const s = window?.env?.sc,
        r = window?.env?.marketing,
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
          const m = s?.apiHost ?? e,
            f = s?.authHost ?? t,
            h = s?.cdnBase ?? d,
            g = s?.clientId ?? n,
            p = r?.marketingAuthTLD ?? w,
            v = s?.scHost ?? c,
            E = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? a,
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
            pingBearer: `https://${p}/${E}`
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
        G4: () => f,
        uU: () => m
      });
      var s = n(42295),
        r = n(62229),
        o = n(93452),
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
              min: s,
              max: r
            } = c[t], o = e >= s && e <= r, a = e >= s;
            n[t] = {
              activeExact: o,
              activeMin: a,
              min: s,
              max: r
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
          context: (0, r.createContext)(u()),
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
          return (0, r.useEffect)(() => {
            const e = () => {
              w(u())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, s.jsx)(d.Provider, {
            value: t,
            children: e
          })
        },
        f = () => (0, r.useContext)(d)
    },
    52690: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const s = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        r = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (s()?.[n] || (s()[n] = {}), s()?.[n]?.[e] || (s()[n][e] = t), s()[n][e])
    },
    56088: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        bn: () => T,
        T0: () => A,
        vx: () => L,
        sb: () => x,
        Ym: () => a.A,
        CA: () => E.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        OH: () => p,
        zP: () => v,
        Cb: () => m,
        N6: () => b,
        GA: () => M,
        JE: () => $,
        G4: () => k.G4
      });
      const s = (0, n(82690).A)(),
        r = () => s;
      var o = n(62229),
        a = n(26675);
      const i = e => {
        const [t, n] = (0, o.useState)(null), [s, r] = (0, o.useState)(null), [a, i] = (0, o.useState)({});
        return (0, o.useLayoutEffect)(() => {
          let t = new Image,
            s = !1;
          return t.addEventListener("load", () => {
            i({
              width: t.width,
              height: t.height
            }), t = null, s || n(!0)
          }), t.addEventListener("error", () => {
            t = null, s || (n(!1), r(!0))
          }), t.src = e, () => {
            s = !0, null !== t && (t.src = "")
          }
        }, [e]), [t, a]
      };
      var c = n(9623);
      const u = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, o.useRef)();
          return (0, o.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        };
      var l = n(20772),
        w = n(60099);
      const m = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: s = null
      }) => {
        const r = (0, l.Es)(),
          [a, i] = (0, o.useState)(null),
          [c, u] = (0, o.useState)(!1),
          [d, m] = (0, o.useState)(null),
          f = (0, o.useCallback)(async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              m(null), i(null), u(!0);
              const c = await (0, w.A)(o ?? e, {
                pingBearer: r,
                fetchOptions: n,
                finalFetchOptions: a,
                query: s
              });
              return c?.status || m(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              m(String(e)), u(!1)
            }
            return null
          }, [e, n, s]);
        return (0, o.useEffect)(() => {
          null === a && null === d && !c && t && f()
        }, [t, a, d, c, f]), {
          data: a,
          error: d,
          loading: c,
          fetch: f
        }
      };
      var f = n(45547);
      const h = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[h] || (window[h] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              s = new CustomEvent(n, {
                detail: t
              });
            window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].eventQueue.push(s), window[h][n].subscribers.forEach(e => {
              e(s.detail)
            })
          };
          return (0, o.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, o.useEffect)(() => {
            const n = g(e);
            return window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].subscribers.push(t), window[h][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[h][n].subscribers = window[h][n].subscribers.filter(e => e !== t), 0 === window[h][n].subscribers.length && delete window[h][n]
            }
          }, [e, t]), (0, o.useMemo)(() => ({}), [])
        };
      var E = n(89656),
        y = (n(95342), n(95573));
      const b = e => {
        const {
          signup: t,
          login: n
        } = (0, f.A)(), s = (0, a.A)(), r = (0, y.t)(s);
        let o = "";
        return o += "lang=" + encodeURIComponent(r), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${o}`,
          signInUrl: `${n}?${o}`
        }
      };
      var k = n(50437);
      const L = () => {
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
        x = () => {
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
      var S = n(25906),
        C = n(81878);
      const T = () => {
          const [e, t] = (0, o.useState)(!1), {
            deviceMemory: n
          } = (0, S.XB)(), {
            effectiveConnectionType: s
          } = (0, S.M5)(), {
            numberOfLogicalProcessors: r
          } = (0, S.xV)(), {
            saveData: a
          } = (0, S.zp)(), i = L(), c = () => {
            const o = (() => {
              const e = e => !1 === e;
              if (i) return !1;
              if (C.n8 || C.lT || C.w || C.UX) return !1;
              const t = "Safari" === C.C0,
                o = "Firefox" === C.C0,
                c = s && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(s),
                u = r && r >= 4,
                d = n && n >= 4;
              return !(e(!a) || e(c) || e(u) || !t && !o && e(d))
            })();
            o !== e && t(o)
          };
          return (0, o.useEffect)(() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
            window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
          }), [n, s, e, r, a, i]), e
        },
        M = e => {
          const [t, n] = (0, o.useState)(!1), s = (0, o.useRef)(null);
          return (0, o.useEffect)(() => {
            const r = () => {
              if (t || !s.current) return;
              const o = s.current,
                {
                  height: a
                } = o.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= o.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", r))
            };
            return window.addEventListener("scroll", r, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", r)
            }
          }, [t, e]), {
            ref: s,
            scrollTracked: t
          }
        },
        A = e => {
          const [t, n] = (0, o.useState)(null);
          let s, r;
          const a = e => {
              e.preventDefault(), "mousedown" === e.type && t ? (window.addEventListener("mousemove", i), s = e.pageX - t?.offsetLeft, r = t?.scrollLeft) : window.removeEventListener("mousemove", i)
            },
            i = e => {
              if (t) {
                e.preventDefault();
                const n = e.pageX - t.offsetLeft - s;
                t.scrollLeft = r - n
              }
            };
          (0, o.useEffect)(() => (n(e?.current), t && (t.addEventListener("mousedown", a), window.addEventListener("mouseup", a)), () => {
            t && t.removeEventListener("mousedown", a), window.removeEventListener("mouseup", a), window.removeEventListener("mousemove", i)
          }), [e?.current])
        },
        $ = (e = 0) => {
          const t = (0, o.useRef)(null),
            [n, s] = (0, o.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                o = window.innerHeight || document.documentElement.clientHeight,
                a = (Math.min(r.bottom, o) - Math.max(r.top, 0)) / r.height;
              s(a > e)
            };
          return (0, o.useEffect)(() => {
            r();
            const e = () => requestAnimationFrame(r);
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
      var s = n(42887),
        r = n(79465),
        o = n.n(r),
        a = n(16188),
        i = n.n(a),
        c = n(45547),
        u = n(95573);
      const {
        apiHost: d
      } = (0, c.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, m = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: r = null,
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
          if (null === r || i().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !m && c) return null;
          m && (f.Authorization = `Bearer ${m}`);
          const g = {
              headers: f
            },
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: h
            }),
            E = await (0, s.sc)(v);
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
          const y = await fetch(h, p),
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
        r = n(62229);
      const o = (0, n(9482).A)({
          context: (0, r.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = o,
        i = ({
          article: e,
          children: t
        }) => (0, s.jsx)(o.Provider, {
          value: e,
          children: t
        }),
        c = () => (0, r.useContext)(o)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var s = n(42295),
        r = n(62229),
        o = n(93452),
        a = n(21823),
        i = n(9482);
      const c = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => c(e),
        d = (0, i.A)({
          context: (0, r.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, r.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, r.useState)(window.pageYOffset), [a, i] = (0, r.useState)(null), [l, w] = (0, r.useState)(!1), m = (0, o.q)(c);
          let f;
          const h = () => {
            w(!0), clearTimeout(f), f = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, r.useEffect)(() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [l, m]), (0, r.useMemo)(() => (0, s.jsx)(d.Provider, {
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