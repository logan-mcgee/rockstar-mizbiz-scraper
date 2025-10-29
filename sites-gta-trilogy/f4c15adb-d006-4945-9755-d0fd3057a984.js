try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f4c15adb-d006-4945-9755-d0fd3057a984", e._sentryDebugIdIdentifier = "sentry-dbid-f4c15adb-d006-4945-9755-d0fd3057a984")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [7583], {
    99: (e, t, n) => {
      n.d(t, {
        A: () => h
      });
      var s = n(2887),
        r = n(9465),
        o = n.n(r),
        a = n(5076),
        i = n.n(a),
        c = n(5547),
        d = n(7954);
      const {
        apiHost: u
      } = (0, c.A)(), l = (0, d.t)(document.documentElement.lang), w = {}, h = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: r = null,
        pingBearer: a,
        requireBearerToken: c = !0,
        useCache: d = !0
      } = {}) => {
        try {
          const {
            bearerToken: h = null
          } = await (a?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let f = `${u}/${e}`;
          if (null === r || i().isEmpty(r) || (f += `?${new URLSearchParams(r)}`), !h && c) return null;
          h && (m.Authorization = `Bearer ${h}`);
          const g = {
              headers: m
            },
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: f
            }),
            y = await (0, s.sc)(v);
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
          const k = await fetch(f, p),
            b = await k.json();
          return d && (w[y] = {
            response: b,
            loading: !1
          }), b
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    309: (e, t, n) => {
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
    437: (e, t, n) => {
      n.d(t, {
        G4: () => m,
        uU: () => h
      });
      var s = n(2295),
        r = n(2229),
        o = n(3452),
        a = n(1823),
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
              min: s,
              max: r
            } = c[t], o = e >= s && e <= r, a = e >= s;
            n[t] = {
              activeExact: o,
              activeMin: a,
              min: s,
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
        h = ({
          children: e
        }) => {
          const t = (0, o.q)(w);
          return (0, r.useEffect)((() => {
            const e = () => {
              w(d())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(u.Provider, {
            value: t,
            children: e
          })
        },
        m = () => (0, r.useContext)(u)
    },
    772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => m,
        Es: () => f,
        bD: () => h
      });
      var s = n(2295),
        r = n(2229),
        o = n(1823),
        a = n(3452),
        i = n(9482),
        c = n(8128),
        d = n(5547);
      const u = {
          token: (0, o.UT)("")
        },
        l = (0, i.A)({
          context: (0, r.createContext)(u),
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
        h = () => {
          const {
            token: e
          } = (0, r.useContext)(l);
          return [e]
        },
        m = () => {
          const [e] = h();
          return (0, a.q)(e)
        },
        f = () => {
          const [e] = h();
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
              const s = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                r = await s.json();
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
        vx: () => E,
        sb: () => x,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => u,
        sq: () => d,
        OH: () => p,
        zP: () => v,
        Cb: () => h,
        N6: () => b,
        GA: () => S
      });
      const s = (0, n(309).A)(),
        r = () => s;
      var o = n(2229),
        a = n(6675);
      const i = e => {
        const [t, n] = (0, o.useState)(null), [s, r] = (0, o.useState)(null), [a, i] = (0, o.useState)({});
        return (0, o.useLayoutEffect)((() => {
          let t = new Image,
            s = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, s || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, s || (n(!1), r(!0))
          })), t.src = e, () => {
            s = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      var c = n(9623);
      const d = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        u = e => {
          const t = (0, o.useRef)();
          return (0, o.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var l = n(772),
        w = n(99);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: s = null
      }) => {
        const r = (0, l.Es)(),
          [a, i] = (0, o.useState)(null),
          [c, d] = (0, o.useState)(!1),
          [u, h] = (0, o.useState)(null),
          m = (0, o.useCallback)((async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              h(null), i(null), d(!0);
              const c = await (0, w.A)(o ?? e, {
                pingBearer: r,
                fetchOptions: n,
                finalFetchOptions: a,
                query: s
              });
              return c?.status || h(JSON.stringify(c?.error)), i(c), d(!1), c
            } catch (e) {
              h(String(e)), d(!1)
            }
            return null
          }), [e, n, s]);
        return (0, o.useEffect)((() => {
          null === a && null === u && !c && t && m()
        }), [t, a, u, c, m]), {
          data: a,
          error: u,
          loading: c,
          fetch: m
        }
      };
      var m = n(5547);
      const f = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[f] || (window[f] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              s = new CustomEvent(n, {
                detail: t
              });
            window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].eventQueue.push(s), window[f][n].subscribers.forEach((e => {
              e(s.detail)
            }))
          };
          return (0, o.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, o.useEffect)((() => {
            const n = g(e);
            return window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].subscribers.push(t), window[f][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[f][n].subscribers = window[f][n].subscribers.filter((e => e !== t)), 0 === window[f][n].subscribers.length && delete window[f][n]
            }
          }), [e, t]), (0, o.useMemo)((() => ({})), [])
        };
      var y = n(9656),
        k = (n(5342), n(7954));
      const b = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), s = (0, a.A)(), r = (0, k.t)(s);
        let o = "";
        return o += "lang=" + encodeURIComponent(r), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${o}`,
          signInUrl: `${n}?${o}`
        }
      };
      n(437);
      const E = () => {
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
        x = () => {
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
      n(5906), n(1878);
      const S = e => {
        const [t, n] = (0, o.useState)(!1), s = (0, o.useRef)(null);
        return (0, o.useEffect)((() => {
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
        }), [t, e]), {
          ref: s,
          scrollTracked: t
        }
      }
    },
    5342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var s = n(2295),
        r = n(2229),
        o = n(3452),
        a = n(1823),
        i = n(9482);
      const c = (0, n(7452).A)({
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
          const [t, n] = (0, r.useState)(window.pageYOffset), [a, i] = (0, r.useState)(null), [l, w] = (0, r.useState)(!1), h = (0, o.q)(c);
          let m;
          const f = () => {
            w(!0), clearTimeout(m), m = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, r.useEffect)((() => {
            let e;
            const t = () => {
              if (h) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, h]), (0, r.useMemo)((() => (0, s.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: h,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: e
          })), [h, t, f, a])
        }
    },
    5547: (e, t, n) => {
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
          hostname: d,
          cdnBase: u,
          key: l,
          marketingAuthTLD: w
        }) => {
          const h = s?.apiHost ?? e,
            m = s?.authHost ?? t,
            f = s?.cdnBase ?? u,
            g = s?.clientId ?? n,
            p = r?.marketingAuthTLD ?? w,
            v = s?.scHost ?? c,
            y = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? a,
            host: v,
            hostname: d,
            cdnBase: f,
            key: l,
            clientId: g,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: m,
            queryManifest: i,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${y}`
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
        A: () => o
      });
      var s = n(3452);
      const r = (0, n(1823).UT)(document.documentElement.lang),
        o = () => (0, s.q)(r)
    },
    7452: (e, t, n) => {
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
    7954: (e, t, n) => {
      n.d(t, {
        t: () => s
      });
      const s = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
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
    9656: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var s = n(2295),
        r = n(2229);
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
    }
  }
]);