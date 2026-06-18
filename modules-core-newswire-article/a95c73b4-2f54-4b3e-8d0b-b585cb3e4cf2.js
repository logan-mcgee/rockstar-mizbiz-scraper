try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a95c73b4-2f54-4b3e-8d0b-b585cb3e4cf2", e._sentryDebugIdIdentifier = "sentry-dbid-a95c73b4-2f54-4b3e-8d0b-b585cb3e4cf2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5997], {
    10959(e, t, n) {
      n.d(t, {
        A: () => w
      });
      var r = n(5942),
        o = n(76597),
        s = n.n(o),
        a = n(40283),
        i = n(39991),
        c = n(93022);
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
            bearerToken: m = null
          } = await (i?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let f = `${u}/${e}`;
          if (null === o || (0, a.isEmpty)(o) || (f += `?${new URLSearchParams(o)}`), !m && c) return null;
          m && (h.Authorization = `Bearer ${m}`);
          const p = {
              headers: h
            },
            g = s().all([p, t, n]),
            v = JSON.stringify({
              ...g,
              url: f
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
          const b = await fetch(f, g);
          if (!b.ok) throw new Error(`ScApi fetch error for ${e} with status code ${b.status}`);
          const k = await b.json();
          return w && (l[y] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    32118(e, t, n) {
      n.d(t, {
        t: () => s
      });
      var r = n(42909),
        o = n(39991);
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
    17473(e, t, n) {
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
    39991(e, t, n) {
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
            h = r?.authHost ?? t,
            f = r?.cdnBase ?? d,
            p = r?.clientId ?? n,
            g = o?.marketingAuthTLD ?? w,
            v = r?.scHost ?? c,
            y = o?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: v,
            hostname: u,
            cdnBase: f,
            key: l,
            clientId: p,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: h,
            queryManifest: i,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${h}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${h}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${h}.rockstargames.com/create/?cid=${p}`,
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
    81038(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        o = ({
          context: e,
          key: t
        }) => (r()?.[t] || (r()[t] = e), r()[t])
    },
    94662(e, t, n) {
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
    93022(e, t, n) {
      n.d(t, {
        t: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    85997(e, t, n) {
      n.d(t, {
        RK: () => o,
        bn: () => A,
        gd: () => R,
        vx: () => E,
        sb: () => x,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        Vq: () => q,
        OH: () => g,
        zP: () => v,
        Cb: () => m,
        N6: () => k,
        GA: () => $,
        JE: () => _
      });
      const r = (0, n(17473).A)(),
        o = () => r;
      var s = n(93082),
        a = n(12879);
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
      var c = n(36416);
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
      var l = n(95753),
        w = n(10959);
      const m = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: o = !0,
        useCache: a = !0
      }) => {
        const i = (0, l.Es)(),
          [c, u] = (0, s.useState)(null),
          [d, m] = (0, s.useState)(!1),
          [h, f] = (0, s.useState)(null),
          [p, g] = (0, s.useState)(!1),
          v = (0, s.useCallback)(async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              f(null), u(null), m(!0);
              const d = await (0, w.A)(s ?? e, {
                pingBearer: i,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: o,
                useCache: a
              });
              return d?.status || f(JSON.stringify(d?.error)), u(d), m(!1), d
            } catch (e) {
              f(String(e)), m(!1)
            } finally {
              g(!0)
            }
            return null
          }, [e, n, r]);
        return (0, s.useEffect)(() => {
          null === c && null === h && !d && t && v()
        }, [t, c, h, d, v]), {
          data: c,
          error: h,
          loading: d,
          fetch: v,
          resolved: p
        }
      };
      var h = n(39991);
      const f = "__RS_CUSTOM_EVENTS__",
        p = e => `rsCustomEvent:${e}`;
      window[f] || (window[f] = {});
      const g = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = p(e),
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
          return (0, s.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)(() => {
            const n = p(e);
            return window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].subscribers.push(t), window[f][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[f][n].subscribers = window[f][n].subscribers.filter(e => e !== t), 0 === window[f][n].subscribers.length && delete window[f][n]
            }
          }, [e, t]), (0, s.useMemo)(() => ({}), [])
        };
      var y = n(22636),
        b = (n(17714), n(93022));
      const k = e => {
        const {
          signup: t,
          login: n
        } = (0, h.A)(), r = (0, a.A)(), o = (0, b.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(25633);
      const E = () => {
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
          const [e, t] = (0, s.useState)(), n = E();
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
        _ = (e = 0) => {
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
      var U = n(42909);
      const q = () => {
        const {
          formatRelativeTime: e
        } = (0, U.useIntl)();
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
      var H = n(32118);
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
    12879(e, t, n) {
      n.d(t, {
        A: () => s
      });
      var r = n(37927);
      const o = (0, n(79922).UT)(document.documentElement.lang),
        s = () => (0, r.q)(o)
    },
    95753(e, t, n) {
      n.d(t, {
        ec: () => m,
        e9: () => f,
        Es: () => p,
        bD: () => h
      });
      var r = n(39793),
        o = n(93082),
        s = n(79922),
        a = n(37927),
        i = n(81038),
        c = n(43568),
        u = n(4242),
        d = n(39991);
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
        h = () => {
          const {
            token: e
          } = (0, o.useContext)(w);
          return [e]
        },
        f = () => {
          const [e] = h();
          return (0, a.q)(e)
        },
        p = () => {
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
    22636(e, t, n) {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(39793),
        o = n(93082);
      const s = (0, n(81038).A)({
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
    25633(e, t, n) {
      n.d(t, {
        G4: () => h,
        uU: () => m
      });
      var r = n(39793),
        o = n(93082),
        s = n(37927),
        a = n(79922),
        i = n(81038);
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
        h = () => (0, o.useContext)(d)
    },
    17714(e, t, n) {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(39793),
        o = n(93082),
        s = n(37927),
        a = n(79922),
        i = n(81038);
      const c = (0, n(94662).A)({
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
          let h;
          const f = () => {
            w(!0), clearTimeout(h), h = setTimeout(() => {
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