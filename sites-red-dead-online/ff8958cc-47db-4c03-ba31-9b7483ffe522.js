try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ff8958cc-47db-4c03-ba31-9b7483ffe522", e._sentryDebugIdIdentifier = "sentry-dbid-ff8958cc-47db-4c03-ba31-9b7483ffe522")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [7583], {
    9482: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const s = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        o = ({
          context: e,
          key: t
        }) => (s()?.[t] || (s()[t] = e), s()[t])
    },
    17954: (e, t, n) => {
      n.d(t, {
        t: () => s
      });
      const s = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    20772: (e, t, n) => {
      n.d(t, {
        ec: () => w,
        e9: () => m,
        Es: () => f,
        bD: () => h
      });
      var s = n(42295),
        o = n(62229),
        r = n(21823),
        a = n(93452),
        c = n(9482),
        i = n(58128),
        u = n(45547);
      const d = {
          token: (0, r.UT)("")
        },
        l = (0, c.A)({
          context: (0, o.createContext)(d),
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
          } = (0, o.useContext)(l);
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
              const s = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await s.json();
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
        A: () => r
      });
      var s = n(93452);
      const o = (0, n(21823).UT)(document.documentElement.lang),
        r = () => (0, s.q)(o)
    },
    45547: (e, t, n) => {
      n.d(t, {
        A: () => c
      });
      const s = window?.env?.sc,
        o = window?.env?.marketing,
        r = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: r,
          graphEnv: a,
          scHost: c,
          hostname: i,
          cdnBase: u,
          key: d,
          marketingAuthTLD: l
        }) => {
          const w = s?.apiHost ?? e,
            h = s?.authHost ?? t,
            m = s?.cdnBase ?? u,
            f = s?.clientId ?? n,
            p = o?.marketingAuthTLD ?? l,
            g = s?.scHost ?? c,
            v = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? a,
            host: g,
            hostname: i,
            cdnBase: m,
            key: d,
            clientId: f,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: h,
            scBase: `https://${g}.rockstargames.com/`,
            login: `https://${h}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${h}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${h}.rockstargames.com/create/?cid=${f}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`
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
        G4: () => m,
        uU: () => h
      });
      var s = n(42295),
        o = n(62229),
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
        u = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = i;
          return Object.keys(i).map((t => {
            const {
              min: s,
              max: o
            } = i[t], r = e >= s && e <= o, a = e >= s;
            n[t] = {
              activeExact: r,
              activeMin: a,
              min: s,
              max: o
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
          context: (0, o.createContext)(u()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = d,
        w = (0, a.UT)(u()),
        h = ({
          children: e
        }) => {
          const t = (0, r.q)(w);
          return (0, o.useEffect)((() => {
            const e = () => {
              w(u())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(d.Provider, {
            value: t,
            children: e
          })
        },
        m = () => (0, o.useContext)(d)
    },
    52690: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const s = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        o = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (s()?.[n] || (s()[n] = {}), s()?.[n]?.[e] || (s()[n][e] = t), s()[n][e])
    },
    60099: (e, t, n) => {
      n.d(t, {
        A: () => h
      });
      var s = n(42887),
        o = n(79465),
        r = n.n(o),
        a = n(15076),
        c = n.n(a),
        i = n(45547),
        u = n(17954);
      const {
        apiHost: d
      } = (0, i.A)(), l = (0, u.t)(document.documentElement.lang), w = {}, h = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: o = null,
        pingBearer: a,
        requireBearerToken: i = !0,
        useCache: u = !0
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
          let f = `${d}/${e}`;
          if (null === o || c().isEmpty(o) || (f += `?${new URLSearchParams(o)}`), !h && i) return null;
          h && (m.Authorization = `Bearer ${h}`);
          const p = {
              headers: m
            },
            g = r().all([p, t, n]),
            v = JSON.stringify({
              ...g,
              url: f
            }),
            b = await (0, s.sc)(v);
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
          const k = await fetch(f, g),
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
        A: () => s
      });
      const s = () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }
    },
    72148: (e, t, n) => {
      n.d(t, {
        RK: () => o,
        vx: () => x,
        sb: () => C,
        Ym: () => a.A,
        CA: () => b.useNewswirePost,
        OG: () => c,
        ZC: () => d,
        sq: () => u,
        OH: () => g,
        zP: () => v,
        Cb: () => h,
        N6: () => E,
        Br: () => y,
        GA: () => S
      });
      const s = (0, n(60309).A)(),
        o = () => s;
      var r = n(62229),
        a = n(26675);
      const c = e => {
        const [t, n] = (0, r.useState)(null), [s, o] = (0, r.useState)(null), [a, c] = (0, r.useState)({});
        return (0, r.useLayoutEffect)((() => {
          let t = new Image,
            s = !1;
          return t.addEventListener("load", (() => {
            c({
              width: t.width,
              height: t.height
            }), t = null, s || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, s || (n(!1), o(!0))
          })), t.src = e, () => {
            s = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      var i = n(9623);
      const u = () => {
          const {
            search: e
          } = (0, i.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, r.useRef)();
          return (0, r.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var l = n(20772),
        w = n(60099);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: s = null
      }) => {
        const o = (0, l.Es)(),
          [a, c] = (0, r.useState)(null),
          [i, u] = (0, r.useState)(!1),
          [d, h] = (0, r.useState)(null),
          m = (0, r.useCallback)((async (t = {}, r = null) => {
            try {
              const {
                fetchOptions: a = {}
              } = t;
              h(null), c(null), u(!0);
              const i = await (0, w.A)(r ?? e, {
                pingBearer: o,
                fetchOptions: n,
                finalFetchOptions: a,
                query: s
              });
              return i?.status || h(JSON.stringify(i?.error)), c(i), u(!1), i
            } catch (e) {
              h(String(e)), u(!1)
            }
            return null
          }), [e, n, s]);
        return (0, r.useEffect)((() => {
          null === a && null === d && !i && t && m()
        }), [t, a, d, i, m]), {
          data: a,
          error: d,
          loading: i,
          fetch: m
        }
      };
      var m = n(45547);
      const f = "__RS_CUSTOM_EVENTS__",
        p = e => `rsCustomEvent:${e}`;
      window[f] || (window[f] = {});
      const g = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = p(e),
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
          return (0, r.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, r.useEffect)((() => {
            const n = p(e);
            return window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].subscribers.push(t), window[f][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[f][n].subscribers = window[f][n].subscribers.filter((e => e !== t)), 0 === window[f][n].subscribers.length && delete window[f][n]
            }
          }), [e, t]), (0, r.useMemo)((() => ({})), [])
        };
      var b = n(89656),
        k = (n(95342), n(17954));
      const y = (e, t) => {
          const {
            authHost: n,
            clientId: s
          } = (0, m.A)(), o = (0, a.A)(), r = (0, k.t)(o), c = (0, l.e9)();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(s), i += "&lang=" + encodeURIComponent(r), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(c), new URL(i, `https://${n}.rockstargames.com/`)
        },
        E = e => {
          const {
            signup: t,
            login: n
          } = (0, m.A)(), s = (0, a.A)(), o = (0, k.t)(s);
          let r = "";
          return r += "lang=" + encodeURIComponent(o), r += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
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
      n(25906), n(81878);
      const S = e => {
        const [t, n] = (0, r.useState)(!1), s = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          const o = () => {
            if (t || !s.current) return;
            const r = s.current,
              {
                height: a
              } = r.getBoundingClientRect(),
              c = window.innerHeight;
            window.scrollY + c >= r.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", o))
          };
          return window.addEventListener("scroll", o, {
            passive: !0
          }), () => {
            window.removeEventListener("scroll", o)
          }
        }), [t, e]), {
          ref: s,
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
      var s = n(42295),
        o = n(62229);
      const r = (0, n(9482).A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = r,
        c = ({
          article: e,
          children: t
        }) => (0, s.jsx)(r.Provider, {
          value: e,
          children: t
        }),
        i = () => (0, o.useContext)(r)
    },
    95342: (e, t, n) => {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var s = n(42295),
        o = n(62229),
        r = n(93452),
        a = n(21823),
        c = n(9482);
      const i = (0, n(52690).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => i(e),
        d = (0, c.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, o.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, o.useState)(window.pageYOffset), [a, c] = (0, o.useState)(null), [l, w] = (0, o.useState)(!1), h = (0, r.q)(i);
          let m;
          const f = () => {
            w(!0), clearTimeout(m), m = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (h) return void c(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || c(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [l, h]), (0, o.useMemo)((() => (0, s.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: h,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          })), [h, t, f, a])
        }
    }
  }
]);