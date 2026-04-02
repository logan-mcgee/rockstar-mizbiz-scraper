try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "81b2e4f1-4245-4951-b0cd-29560308fd7e", e._sentryDebugIdIdentifier = "sentry-dbid-81b2e4f1-4245-4951-b0cd-29560308fd7e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
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
        ec: () => m,
        e9: () => f,
        Es: () => g,
        bD: () => h
      });
      var r = n(42295),
        s = n(71127),
        o = n(21823),
        a = n(93452),
        i = n(9482),
        c = n(37980),
        u = n(58128),
        d = n(45547);
      const l = {
          token: (0, o.UT)("")
        },
        w = (0, i.A)({
          context: (0, s.createContext)(l),
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
        h = () => {
          const {
            token: e
          } = (0, s.useContext)(w);
          return [e]
        },
        f = () => {
          const [e] = h();
          return (0, a.q)(e)
        },
        g = () => {
          const [e] = h();
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
              const s = r(c.A.get(t)) || r(e?.());
              if (s) return e(s), {
                bearerToken: s
              };
              const o = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                a = await o.json();
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
        A: () => o
      });
      var r = n(93452);
      const s = (0, n(21823).UT)(document.documentElement.lang),
        o = () => (0, r.q)(s)
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
            h = r?.authHost ?? t,
            f = r?.cdnBase ?? d,
            g = r?.clientId ?? n,
            p = s?.marketingAuthTLD ?? w,
            v = r?.scHost ?? c,
            y = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: v,
            hostname: u,
            cdnBase: f,
            key: l,
            clientId: g,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: h,
            queryManifest: i,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${h}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${h}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${h}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${y}`,
            authCookieName: "BearerToken"
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
        G4: () => h,
        uU: () => m
      });
      var r = n(42295),
        s = n(71127),
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
              min: r,
              max: s
            } = c[t], o = e >= r && e <= s, a = e >= r;
            n[t] = {
              activeExact: o,
              activeMin: a,
              min: r,
              max: s
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
          return (0, s.useEffect)(() => {
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
    56088: (e, t, n) => {
      n.d(t, {
        RK: () => s,
        vx: () => E,
        sb: () => x,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        OH: () => p,
        zP: () => v,
        Cb: () => m,
        N6: () => b,
        GA: () => S,
        JE: () => C
      });
      const r = (0, n(60309).A)(),
        s = () => r;
      var o = n(71127),
        a = n(26675);
      const i = e => {
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
      var c = n(10181);
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
        query: r = null
      }) => {
        const s = (0, l.Es)(),
          [a, i] = (0, o.useState)(null),
          [c, u] = (0, o.useState)(!1),
          [d, m] = (0, o.useState)(null),
          [h, f] = (0, o.useState)(!1),
          g = (0, o.useCallback)(async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              m(null), i(null), u(!0);
              const c = await (0, w.A)(o ?? e, {
                pingBearer: s,
                fetchOptions: n,
                finalFetchOptions: a,
                query: r
              });
              return c?.status || m(JSON.stringify(c?.error)), i(c), u(!1), c
            } catch (e) {
              m(String(e)), u(!1)
            } finally {
              f(!0)
            }
            return null
          }, [e, n, r]);
        return (0, o.useEffect)(() => {
          null === a && null === d && !c && t && g()
        }, [t, a, d, c, g]), {
          data: a,
          error: d,
          loading: c,
          fetch: g,
          resolved: h
        }
      };
      var h = n(45547);
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
            }), window[f][n].eventQueue.push(r), window[f][n].subscribers.forEach(e => {
              e(r.detail)
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
            return window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].subscribers.push(t), window[f][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[f][n].subscribers = window[f][n].subscribers.filter(e => e !== t), 0 === window[f][n].subscribers.length && delete window[f][n]
            }
          }, [e, t]), (0, o.useMemo)(() => ({}), [])
        };
      var y = n(89656),
        k = (n(95342), n(17954));
      const b = e => {
        const {
          signup: t,
          login: n
        } = (0, h.A)(), r = (0, a.A)(), s = (0, k.t)(r);
        let o = "";
        return o += "lang=" + encodeURIComponent(s), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${o}`,
          signInUrl: `${n}?${o}`
        }
      };
      n(50437);
      const E = () => {
          const [e, t] = (0, o.useState)();
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
      n(81878), navigator, navigator, navigator, navigator;
      const S = e => {
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
        C = (e = 0) => {
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
        a = n(10336),
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
          } = await (a?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let f = `${d}/${e}`;
          if (null === s || i().isEmpty(s) || (f += `?${new URLSearchParams(s)}`), !m && c) return null;
          m && (h.Authorization = `Bearer ${m}`);
          const g = {
              headers: h
            },
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: f
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
          const k = await fetch(f, p),
            b = await k.json();
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
        s = n(71127);
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
        Ll: () => l,
        N2: () => w
      });
      var r = n(42295),
        s = n(71127),
        o = n(93452),
        a = n(21823),
        i = n(9482);
      const c = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => c(e),
        d = (0, i.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, s.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, s.useState)(window.pageYOffset), [a, i] = (0, s.useState)(null), [l, w] = (0, s.useState)(!1), m = (0, o.q)(c);
          let h;
          const f = () => {
            w(!0), clearTimeout(h), h = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, s.useEffect)(() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [l, m]), (0, s.useMemo)(() => (0, r.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          }), [m, t, f, a])
        }
    }
  }
]);