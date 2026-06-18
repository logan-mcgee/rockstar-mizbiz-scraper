try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f3d4efef-d0a8-4278-8dfa-ffb977ab83d3", e._sentryDebugIdIdentifier = "sentry-dbid-f3d4efef-d0a8-4278-8dfa-ffb977ab83d3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [997], {
    959(e, t, n) {
      n.d(t, {
        A: () => w
      });
      var r = n(5942),
        o = n(6597),
        s = n.n(o),
        a = n(283),
        i = n(9991),
        c = n(3022);
      const {
        apiHost: u
      } = (0, i.A)(), d = (0, c.t)(document.documentElement.lang), l = {}, w = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: o = null,
        pingBearer: i,
        requireBearerToken: c = !0,
        useCache: w = !0
      } = {}) => {
        try {
          const {
            bearerToken: f = null
          } = await (i?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let h = `${u}/${e}`;
          if (null === o || (0, a.isEmpty)(o) || (h += `?${new URLSearchParams(o)}`), !f && c) return null;
          f && (m.Authorization = `Bearer ${f}`);
          const p = {
              headers: m
            },
            g = s().all([p, t, n]),
            v = JSON.stringify({
              ...g,
              url: h
            }),
            y = await (0, r.sc)(v);
          if (w) {
            if (l[y]?.response) return l[y].response;
            if (l[y]?.loading) return {
              error: null,
              result: null
            };
            l[y] = {
              loading: !0
            }
          }
          const k = await fetch(h, g);
          if (!k.ok) throw new Error(`ScApi fetch error for ${e} with status code ${k.status}`);
          const E = await k.json();
          return w && (l[y] = {
            response: E,
            loading: !1
          }), E
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    2118(e, t, n) {
      n.d(t, {
        t: () => s
      });
      var r = n(2909),
        o = n(9991);
      const s = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: s
        }] = (0, r.getLocale)(), {
          authHost: a,
          clientId: i
        } = (0, o.A)(), c = await n(), u = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return u.searchParams.append("cid", i), u.searchParams.append("lang", s), u.searchParams.append("returnUrl", t ?? window.location.pathname), c && "boolean" != typeof c && "string" == typeof c.bearerToken && u.searchParams.append("accessToken", c.bearerToken), u
      }
    },
    7473(e, t, n) {
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
    9991(e, t, n) {
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
          const f = r?.apiHost ?? e,
            m = r?.authHost ?? t,
            h = r?.cdnBase ?? d,
            p = r?.clientId ?? n,
            g = o?.marketingAuthTLD ?? w,
            v = r?.scHost ?? c,
            y = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${f}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: v,
            hostname: u,
            cdnBase: h,
            key: l,
            clientId: p,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: m,
            queryManifest: i,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/${y}`,
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
    8657(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        o = ({
          context: e,
          key: t
        }) => (r()?.[t] || (r()[t] = e), r()[t])
    },
    4662(e, t, n) {
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
    3022(e, t, n) {
      n.d(t, {
        t: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    5997(e, t, n) {
      n.d(t, {
        RK: () => o,
        bn: () => A,
        gd: () => R,
        vx: () => b,
        sb: () => x,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        Vq: () => _,
        OH: () => g,
        zP: () => v,
        Cb: () => f,
        N6: () => E,
        GA: () => $,
        JE: () => U
      });
      const r = (0, n(7473).A)(),
        o = () => r;
      var s = n(3082),
        a = n(2879);
      const i = e => {
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
      var c = n(6416);
      const u = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        };
      var l = n(5753),
        w = n(959);
      const f = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: o = !0,
        useCache: a = !0
      }) => {
        const i = (0, l.Es)(),
          [c, u] = (0, s.useState)(null),
          [d, f] = (0, s.useState)(!1),
          [m, h] = (0, s.useState)(null),
          [p, g] = (0, s.useState)(!1),
          v = (0, s.useCallback)(async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              h(null), u(null), f(!0);
              const d = await (0, w.A)(s ?? e, {
                pingBearer: i,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: o,
                useCache: a
              });
              return d?.status || h(JSON.stringify(d?.error)), u(d), f(!1), d
            } catch (e) {
              h(String(e)), f(!1)
            } finally {
              g(!0)
            }
            return null
          }, [e, n, r]);
        return (0, s.useEffect)(() => {
          null === c && null === m && !d && t && v()
        }, [t, c, m, d, v]), {
          data: c,
          error: m,
          loading: d,
          fetch: v,
          resolved: p
        }
      };
      var m = n(9991);
      const h = "__RS_CUSTOM_EVENTS__",
        p = e => `rsCustomEvent:${e}`;
      window[h] || (window[h] = {});
      const g = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = p(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].eventQueue.push(r), window[h][n].subscribers.forEach(e => {
              e(r.detail)
            })
          };
          return (0, s.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)(() => {
            const n = p(e);
            return window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].subscribers.push(t), window[h][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[h][n].subscribers = window[h][n].subscribers.filter(e => e !== t), 0 === window[h][n].subscribers.length && delete window[h][n]
            }
          }, [e, t]), (0, s.useMemo)(() => ({}), [])
        };
      var y = n(2636),
        k = (n(7714), n(3022));
      const E = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), r = (0, a.A)(), o = (0, k.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(5633);
      const b = () => {
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
        x = () => {
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
      var C = n(6988);
      const T = navigator?.deviceMemory,
        S = navigator?.connection?.effectiveType,
        L = navigator?.hardwareConcurrency,
        M = navigator?.connection?.saveData ?? !1,
        A = () => {
          const [e, t] = (0, s.useState)(), n = b();
          return (0, s.useEffect)(() => {
            const r = () => {
              const r = (() => {
                const e = e => !1 === e;
                if (n) return !1;
                if (C.n8 || C.lT || C.w || C.UX) return !1;
                const t = "Safari" === C.C0,
                  r = "Firefox" === C.C0,
                  o = S && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(S),
                  s = L && L >= 4,
                  a = T && T >= 4;
                return !(e(!M) || e(o) || e(s) || !t && !r && e(a))
              })();
              r !== e && t(r)
            };
            return r(), window.addEventListener("online", r), window.addEventListener("offline", r), window.addEventListener("devicememory", r), () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r), window.removeEventListener("devicememory", r)
            }
          }, [T, S, e, L, M, n]), e
        },
        $ = e => {
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
        U = (e = 0) => {
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
        };
      var q = n(2909);
      const _ = () => {
        const {
          formatRelativeTime: e
        } = (0, q.useIntl)();
        return {
          formatRelativeRoundedTime: t => {
            const n = "number" == typeof t ? t : t.getTime(),
              r = Math.round((n - Date.now()) / 1e3),
              o = Math.abs(r),
              {
                unit: s,
                divisor: a
              } = [{
                unit: "second",
                divisor: 1,
                nextCutoff: 60
              }, {
                unit: "minute",
                divisor: 60,
                nextCutoff: 3600
              }, {
                unit: "hour",
                divisor: 3600,
                nextCutoff: 86400
              }, {
                unit: "day",
                divisor: 86400,
                nextCutoff: 604800
              }, {
                unit: "week",
                divisor: 604800,
                nextCutoff: 2592e3
              }, {
                unit: "month",
                divisor: 2592e3,
                nextCutoff: 31536e3
              }].find(e => o < e.nextCutoff) || {
                unit: "year",
                divisor: 31536e3
              },
              i = Math.round(r / a);
            return e(i, s, {
              numeric: "always"
            })
          }
        }
      };
      var H = n(2118);
      const R = () => {
        const e = (0, l.Es)();
        return async ({
          service: t,
          returnUrl: n
        }) => await (0, H.t)({
          service: t,
          returnUrl: n,
          pingBearer: e
        })
      }
    },
    2879(e, t, n) {
      n.d(t, {
        A: () => s
      });
      var r = n(7927);
      const o = (0, n(9922).UT)(document.documentElement.lang),
        s = () => (0, r.q)(o)
    },
    5753(e, t, n) {
      n.d(t, {
        ec: () => f,
        e9: () => h,
        Es: () => p,
        bD: () => m
      });
      var r = n(9793),
        o = n(3082),
        s = n(9922),
        a = n(7927),
        i = n(8657),
        c = n(3568),
        u = n(4242),
        d = n(9991);
      const l = {
          token: (0, s.UT)("")
        },
        w = (0, i.A)({
          context: (0, o.createContext)(l),
          key: "utilsTokenProvider"
        }),
        f = ({
          children: e,
          token: t
        }) => (0, r.jsx)(w.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        m = () => {
          const {
            token: e
          } = (0, o.useContext)(w);
          return [e]
        },
        h = () => {
          const [e] = m();
          return (0, a.q)(e)
        },
        p = () => {
          const [e] = m();
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
    2636(e, t, n) {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(9793),
        o = n(3082);
      const s = (0, n(8657).A)({
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
    5633(e, t, n) {
      n.d(t, {
        G4: () => m,
        uU: () => f
      });
      var r = n(9793),
        o = n(3082),
        s = n(7927),
        a = n(9922),
        i = n(8657);
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
        f = ({
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
        m = () => (0, o.useContext)(d)
    },
    7714(e, t, n) {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(9793),
        o = n(3082),
        s = n(7927),
        a = n(9922),
        i = n(8657);
      const c = (0, n(4662).A)({
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
          let m;
          const h = () => {
            w(!0), clearTimeout(m), m = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, o.useEffect)(() => {
            let e;
            const t = () => {
              if (f) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [l, f]), (0, o.useMemo)(() => (0, r.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: t,
              pauseUserShouldSeeMore: h,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          }), [f, t, h, a])
        }
    }
  }
]);