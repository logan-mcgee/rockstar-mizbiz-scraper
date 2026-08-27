try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d7001989-9311-4d30-aefa-d21699d36f1e", e._sentryDebugIdIdentifier = "sentry-dbid-d7001989-9311-4d30-aefa-d21699d36f1e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2272], {
    99644(e, t, n) {
      var r = n(5942),
        s = n(76597),
        o = n.n(s),
        a = n(82088),
        i = n(52960),
        c = n(94105);
      const {
        apiHost: u
      } = (0, i.A)(), d = (0, c.t)(document.documentElement.lang), l = {};
      n.d(t, ["A", 0, async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: s = null,
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
          if (null === s || (0, a.A)(s) || (f += `?${new URLSearchParams(s)}`), !m && c) return null;
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
          const k = await fetch(f, p);
          if (!k.ok) throw new Error(`ScApi fetch error for ${e} with status code ${k.status}`);
          const b = await k.json();
          return w && (l[y] = {
            response: b,
            loading: !1
          }), b
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }])
    },
    69635(e, t, n) {
      var r = n(42909),
        s = n(52960);
      n.d(t, ["t", 0, async ({
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
      }])
    },
    82644(e, t, n) {
      n.d(t, ["A", 0, () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }])
    },
    52960(e, t, n) {
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
          marketingAuthTLD: w,
          castlePublishableKey: m = null,
          videoDomain: h = "videos.rockstargames.com"
        }) => {
          const f = r?.apiHost ?? e,
            g = r?.authHost ?? t,
            p = r?.cdnBase ?? d,
            v = r?.clientId ?? n,
            y = s?.marketingAuthTLD ?? w,
            k = r?.scHost ?? c,
            b = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${f}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: k,
            hostname: u,
            cdnBase: p,
            key: l,
            clientId: v,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: g,
            queryManifest: i,
            scBase: `https://${k}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${v}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${v}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${v}`,
            gateway: `https://${y}/auth/gateway.json`,
            logout: `https://${y}/auth/sc-auth-logout`,
            pingBearer: `https://${y}/${b}`,
            authCookieName: "BearerToken",
            castlePublishableKey: m ?? "pk_nwrygxuAFNt6rsmUsQghqkZxzcbwTMPd",
            finalMarketingTLD: y,
            videoDomain: h
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
          marketingAuthTLD: "www.rockstargames.com",
          castlePublishableKey: "pk_1Tt6Yzr1WFzxrJCh7WzMZzY1rHpaPudN"
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
        })];
      n.d(t, ["A", 0, () => {
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
      }])
    },
    51505(e, t, n) {
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {};
      n.d(t, ["A", 0, ({
        context: e,
        key: t
      }) => (r()?.[t] || (r()[t] = e), r()[t])])
    },
    22925(e, t, n) {
      const r = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {};
      n.d(t, ["A", 0, ({
        key: e,
        value: t,
        domain: n = "default"
      }) => (r()?.[n] || (r()[n] = {}), r()?.[n]?.[e] || (r()[n][e] = t), r()[n][e])])
    },
    94105(e, t, n) {
      n.d(t, ["t", 0, e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }])
    },
    92272(e, t, n) {
      n.d(t, {
        RK: () => s,
        bn: () => A,
        gd: () => P,
        vx: () => E,
        sb: () => x,
        Ym: () => a.A,
        CA: () => y.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => u,
        Vq: () => H,
        OH: () => p,
        zP: () => v,
        Cb: () => m,
        N6: () => b,
        GA: () => $,
        JE: () => U
      });
      const r = (0, n(82644).A)(),
        s = () => r;
      var o = n(93082),
        a = n(32214);
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
      var c = n(99225);
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
      var l = n(87172),
        w = n(99644);
      const m = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: s = !0,
        useCache: a = !0
      }) => {
        const i = (0, l.Es)(),
          [c, u] = (0, o.useState)(null),
          [d, m] = (0, o.useState)(!1),
          [h, f] = (0, o.useState)(null),
          [g, p] = (0, o.useState)(!1),
          v = (0, o.useCallback)(async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              f(null), u(null), m(!0);
              const d = await (0, w.A)(o ?? e, {
                pingBearer: i,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: s,
                useCache: a
              });
              return d?.status || f(JSON.stringify(d?.error)), u(d), m(!1), d
            } catch (e) {
              f(String(e)), m(!1)
            } finally {
              p(!0)
            }
            return null
          }, [e, n, r]);
        return (0, o.useEffect)(() => {
          null === c && null === h && !d && t && v()
        }, [t, c, h, d, v]), {
          data: c,
          error: h,
          loading: d,
          fetch: v,
          resolved: g
        }
      };
      var h = n(52960);
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
      var y = n(83495),
        k = (n(88359), n(94105));
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
      n(20968);
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
      var C = n(6988);
      const T = navigator?.deviceMemory,
        S = navigator?.connection?.effectiveType,
        L = navigator?.hardwareConcurrency,
        M = navigator?.connection?.saveData ?? !1,
        A = () => {
          const [e, t] = (0, o.useState)(), n = E();
          return (0, o.useEffect)(() => {
            const r = () => {
              const r = (() => {
                const e = e => !1 === e;
                if (n) return !1;
                if (C.n8 || C.lT || C.w || C.UX) return !1;
                const t = "Safari" === C.C0,
                  r = "Firefox" === C.C0,
                  s = S && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(S),
                  o = L && L >= 4,
                  a = T && T >= 4;
                return !(e(!M) || e(s) || e(o) || !t && !r && e(a))
              })();
              r !== e && t(r)
            };
            return r(), window.addEventListener("online", r), window.addEventListener("offline", r), window.addEventListener("devicememory", r), () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r), window.removeEventListener("devicememory", r)
            }
          }, [T, S, e, L, M, n]), e
        },
        $ = e => {
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
        U = (e = 0) => {
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
      var q = n(42909);
      const H = () => {
        const {
          formatRelativeTime: e
        } = (0, q.useIntl)();
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
      var _ = n(69635);
      const P = () => {
        const e = (0, l.Es)();
        return async ({
          service: t,
          returnUrl: n
        }) => await (0, _.t)({
          service: t,
          returnUrl: n,
          pingBearer: e
        })
      }
    },
    32214(e, t, n) {
      var r = n(15266);
      const s = (0, n(10933).UT)(document.documentElement.lang);
      n.d(t, ["A", 0, () => (0, r.q)(s)])
    },
    87172(e, t, n) {
      n.d(t, {
        ec: () => m,
        e9: () => f,
        Es: () => g,
        bD: () => h
      });
      var r = n(39793),
        s = n(93082),
        o = n(10933),
        a = n(15266),
        i = n(51505),
        c = n(62885),
        u = n(4242),
        d = n(52960);
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
    83495(e, t, n) {
      n.r(t);
      var r = n(39793),
        s = n(93082);
      const o = (0, n(51505).A)({
          context: (0, s.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: a
        } = o;
      n.d(t, ["Consumer", 0, a, "Provider", 0, ({
        article: e,
        children: t
      }) => (0, r.jsx)(o.Provider, {
        value: e,
        children: t
      }), "useNewswirePost", 0, () => (0, s.useContext)(o)])
    },
    20968(e, t, n) {
      var r = n(39793),
        s = n(93082),
        o = n(15266),
        a = n(10933),
        i = n(51505);
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
        w = (0, a.UT)(u());
      n.d(t, ["G4", 0, () => (0, s.useContext)(d), "uU", 0, ({
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
      }])
    },
    88359(e, t, n) {
      var r = n(39793),
        s = n(93082),
        o = n(15266),
        a = n(10933),
        i = n(51505);
      const c = (0, n(22925).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, a.UT)(!1)
        }),
        u = e => c(e),
        d = (0, i.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        });
      n.d(t, ["Ll", 0, () => (0, s.useContext)(d), "N2", 0, ({
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
      }])
    }
  }
]);