try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "874528dd-8bc7-4c3b-9235-6bfcefe82012", e._sentryDebugIdIdentifier = "sentry-dbid-874528dd-8bc7-4c3b-9235-6bfcefe82012")
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
  [997], {
    959(e, t, n) {
      n.d(t, {
        A: () => w
      });
      var r = n(5942),
        s = n(6597),
        o = n.n(s),
        a = n(2088),
        i = n(9991),
        c = n(3022);
      const {
        apiHost: u
      } = (0, i.A)(), d = (0, c.t)(document.documentElement.lang), l = {}, w = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: s = null,
        pingBearer: i,
        requireBearerToken: c = !0,
        useCache: w = !0
      } = {}) => {
        try {
          const {
            bearerToken: h = null
          } = await (i?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let f = `${u}/${e}`;
          if (null === s || (0, a.A)(s) || (f += `?${new URLSearchParams(s)}`), !h && c) return null;
          h && (m.Authorization = `Bearer ${h}`);
          const g = {
              headers: m
            },
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: f
            }),
            b = await (0, r.sc)(v);
          if (w) {
            if (l[b]?.response) return l[b].response;
            if (l[b]?.loading) return {
              error: null,
              result: null
            };
            l[b] = {
              loading: !0
            }
          }
          const y = await fetch(f, p);
          if (!y.ok) throw new Error(`ScApi fetch error for ${e} with status code ${y.status}`);
          const k = await y.json();
          return w && (l[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    2118(e, t, n) {
      n.d(t, {
        t: () => o
      });
      var r = n(2909),
        s = n(9991);
      const o = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, r.getLocale)(), {
          authHost: a,
          clientId: i
        } = (0, s.A)(), c = await n(), u = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return u.searchParams.append("cid", i), u.searchParams.append("lang", o), u.searchParams.append("returnUrl", t ?? window.location.pathname), c && "boolean" != typeof c && "string" == typeof c.bearerToken && u.searchParams.append("accessToken", c.bearerToken), u
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
          const h = r?.apiHost ?? e,
            m = r?.authHost ?? t,
            f = r?.cdnBase ?? d,
            g = r?.clientId ?? n,
            p = s?.marketingAuthTLD ?? w,
            v = r?.scHost ?? c,
            b = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: v,
            hostname: u,
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
            pingBearer: `https://${p}/${b}`,
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
    1038(e, t, n) {
      n.d(t, {
        A: () => s
      });
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        s = ({
          context: e,
          key: t
        }) => (r()?.[t] || (r()[t] = e), r()[t])
    },
    4662(e, t, n) {
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
        RK: () => s,
        gd: () => L,
        vx: () => E,
        sb: () => x,
        Ym: () => a.A,
        CA: () => b.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        Vq: () => A,
        OH: () => p,
        zP: () => v,
        Cb: () => h,
        N6: () => k,
        GA: () => C,
        JE: () => T
      });
      const r = (0, n(7473).A)(),
        s = () => r;
      var o = n(3082),
        a = n(2879);
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
      var c = n(6416);
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
      var l = n(5753),
        w = n(959);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: s = !0,
        useCache: a = !0
      }) => {
        const i = (0, l.Es)(),
          [c, u] = (0, o.useState)(null),
          [d, h] = (0, o.useState)(!1),
          [m, f] = (0, o.useState)(null),
          [g, p] = (0, o.useState)(!1),
          v = (0, o.useCallback)(async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              f(null), u(null), h(!0);
              const d = await (0, w.A)(o ?? e, {
                pingBearer: i,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: s,
                useCache: a
              });
              return d?.status || f(JSON.stringify(d?.error)), u(d), h(!1), d
            } catch (e) {
              f(String(e)), h(!1)
            } finally {
              p(!0)
            }
            return null
          }, [e, n, r]);
        return (0, o.useEffect)(() => {
          null === c && null === m && !d && t && v()
        }, [t, c, m, d, v]), {
          data: c,
          error: m,
          loading: d,
          fetch: v,
          resolved: g
        }
      };
      var m = n(9991);
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
      var b = n(2636),
        y = (n(7714), n(3022));
      const k = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), r = (0, a.A)(), s = (0, y.t)(r);
        let o = "";
        return o += "lang=" + encodeURIComponent(s), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${o}`,
          signInUrl: `${n}?${o}`
        }
      };
      n(5633);
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
      n(6988), navigator, navigator, navigator, navigator;
      const C = e => {
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
        };
      var S = n(2909);
      const A = () => {
        const {
          formatRelativeTime: e
        } = (0, S.useIntl)();
        return {
          formatRelativeRoundedTime: t => {
            const n = "number" == typeof t ? t : t.getTime(),
              r = Math.round((n - Date.now()) / 1e3),
              s = Math.abs(r),
              {
                unit: o,
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
              }].find(e => s < e.nextCutoff) || {
                unit: "year",
                divisor: 31536e3
              },
              i = Math.round(r / a);
            return e(i, o, {
              numeric: "always"
            })
          }
        }
      };
      var M = n(2118);
      const L = () => {
        const e = (0, l.Es)();
        return async ({
          service: t,
          returnUrl: n
        }) => await (0, M.t)({
          service: t,
          returnUrl: n,
          pingBearer: e
        })
      }
    },
    2879(e, t, n) {
      n.d(t, {
        A: () => o
      });
      var r = n(7927);
      const s = (0, n(9922).UT)(document.documentElement.lang),
        o = () => (0, r.q)(s)
    },
    5753(e, t, n) {
      n.d(t, {
        ec: () => h,
        e9: () => f,
        Es: () => g,
        bD: () => m
      });
      var r = n(9793),
        s = n(3082),
        o = n(9922),
        a = n(7927),
        i = n(1038),
        c = n(3568),
        u = n(4242),
        d = n(9991);
      const l = {
          token: (0, o.UT)("")
        },
        w = (0, i.A)({
          context: (0, s.createContext)(l),
          key: "utilsTokenProvider"
        }),
        h = ({
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
          } = (0, s.useContext)(w);
          return [e]
        },
        f = () => {
          const [e] = m();
          return (0, a.q)(e)
        },
        g = () => {
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
    2636(e, t, n) {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(9793),
        s = n(3082);
      const o = (0, n(1038).A)({
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
    5633(e, t, n) {
      n.d(t, {
        G4: () => m,
        uU: () => h
      });
      var r = n(9793),
        s = n(3082),
        o = n(7927),
        a = n(9922),
        i = n(1038);
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
        h = ({
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
        m = () => (0, s.useContext)(d)
    },
    7714(e, t, n) {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(9793),
        s = n(3082),
        o = n(7927),
        a = n(9922),
        i = n(1038);
      const c = (0, n(4662).A)({
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
          const [t, n] = (0, s.useState)(window.pageYOffset), [a, i] = (0, s.useState)(null), [l, w] = (0, s.useState)(!1), h = (0, o.q)(c);
          let m;
          const f = () => {
            w(!0), clearTimeout(m), m = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, s.useEffect)(() => {
            let e;
            const t = () => {
              if (h) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [l, h]), (0, s.useMemo)(() => (0, r.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: h,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: a
            },
            children: e
          }), [h, t, f, a])
        }
    }
  }
]);