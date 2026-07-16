try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e38f8811-2dc8-4035-8403-7250ae6fd2d1", e._sentryDebugIdIdentifier = "sentry-dbid-e38f8811-2dc8-4035-8403-7250ae6fd2d1")
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
  [6596], {
    52974(e, t, n) {
      var r = n(5942),
        s = n(76597),
        o = n.n(s),
        a = n(82088),
        i = n(91146),
        c = n(3339);
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
          } = await (i?.()) ?? {}, f = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let h = `${u}/${e}`;
          if (null === s || (0, a.A)(s) || (h += `?${new URLSearchParams(s)}`), !m && c) return null;
          m && (f.Authorization = `Bearer ${m}`);
          const g = {
              headers: f
            },
            p = o().all([g, t, n]),
            v = JSON.stringify({
              ...p,
              url: h
            }),
            k = await (0, r.sc)(v);
          if (w) {
            if (l[k]?.response) return l[k].response;
            if (l[k]?.loading) return {
              error: null,
              result: null
            };
            l[k] = {
              loading: !0
            }
          }
          const y = await fetch(h, p);
          if (!y.ok) throw new Error(`ScApi fetch error for ${e} with status code ${y.status}`);
          const E = await y.json();
          return w && (l[k] = {
            response: E,
            loading: !1
          }), E
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }])
    },
    49345(e, t, n) {
      var r = n(42909),
        s = n(91146);
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
    12658(e, t, n) {
      n.d(t, ["A", 0, () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }])
    },
    91146(e, t, n) {
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
            k = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
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
            pingBearer: `https://${p}/${k}`,
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
    17727(e, t, n) {
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {};
      n.d(t, ["A", 0, ({
        context: e,
        key: t
      }) => (r()?.[t] || (r()[t] = e), r()[t])])
    },
    45075(e, t, n) {
      const r = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {};
      n.d(t, ["A", 0, ({
        key: e,
        value: t,
        domain: n = "default"
      }) => (r()?.[n] || (r()[n] = {}), r()?.[n]?.[e] || (r()[n][e] = t), r()[n][e])])
    },
    3339(e, t, n) {
      n.d(t, ["t", 0, e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }])
    },
    56596(e, t, n) {
      n.d(t, {
        RK: () => s,
        bn: () => $,
        ri: () => a,
        gd: () => q,
        vx: () => x,
        sb: () => C,
        Ym: () => i.A,
        CA: () => y.useNewswirePost,
        OG: () => c,
        ZC: () => l,
        sq: () => d,
        Vq: () => _,
        OH: () => v,
        zP: () => k,
        Cb: () => f,
        N6: () => b,
        GA: () => R,
        JE: () => H
      });
      const r = (0, n(12658).A)(),
        s = () => r;
      var o = n(93082);
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
      var i = n(75764);
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
      var u = n(99225);
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
      var w = n(61295),
        m = n(52974);
      const f = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: s = !0,
        useCache: a = !0
      }) => {
        const i = (0, w.Es)(),
          [c, u] = (0, o.useState)(null),
          [d, l] = (0, o.useState)(!1),
          [f, h] = (0, o.useState)(null),
          [g, p] = (0, o.useState)(!1),
          v = (0, o.useCallback)(async (t = {}, o = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              h(null), u(null), l(!0);
              const d = await (0, m.A)(o ?? e, {
                pingBearer: i,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: s,
                useCache: a
              });
              return d?.status || h(JSON.stringify(d?.error)), u(d), l(!1), d
            } catch (e) {
              h(String(e)), l(!1)
            } finally {
              p(!0)
            }
            return null
          }, [e, n, r]);
        return (0, o.useEffect)(() => {
          null === c && null === f && !d && t && v()
        }, [t, c, f, d, v]), {
          data: c,
          error: f,
          loading: d,
          fetch: v,
          resolved: g
        }
      };
      var h = n(91146);
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
        k = (e, t) => {
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
      var y = n(11701),
        E = (n(12509), n(3339));
      const b = e => {
        const {
          signup: t,
          login: n
        } = (0, h.A)(), r = (0, i.A)(), s = (0, E.t)(r);
        let o = "";
        return o += "lang=" + encodeURIComponent(s), o += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${o}`,
          signInUrl: `${n}?${o}`
        }
      };
      n(53634);
      const x = () => {
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
        C = () => {
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
      var S = n(6988);
      const T = navigator?.deviceMemory,
        L = navigator?.connection?.effectiveType,
        M = navigator?.hardwareConcurrency,
        A = navigator?.connection?.saveData ?? !1,
        $ = () => {
          const [e, t] = (0, o.useState)(), n = x();
          return (0, o.useEffect)(() => {
            const r = () => {
              const r = (() => {
                const e = e => !1 === e;
                if (n) return !1;
                if (S.n8 || S.lT || S.w || S.UX) return !1;
                const t = "Safari" === S.C0,
                  r = "Firefox" === S.C0,
                  s = L && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(L),
                  o = M && M >= 4,
                  a = T && T >= 4;
                return !(e(!A) || e(s) || e(o) || !t && !r && e(a))
              })();
              r !== e && t(r)
            };
            return r(), window.addEventListener("online", r), window.addEventListener("offline", r), window.addEventListener("devicememory", r), () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r), window.removeEventListener("devicememory", r)
            }
          }, [T, L, e, M, A, n]), e
        },
        R = e => {
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
        H = (e = 0) => {
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
      var B = n(42909);
      const _ = () => {
        const {
          formatRelativeTime: e
        } = (0, B.useIntl)();
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
      var U = n(49345);
      const q = () => {
        const e = (0, w.Es)();
        return async ({
          service: t,
          returnUrl: n
        }) => await (0, U.t)({
          service: t,
          returnUrl: n,
          pingBearer: e
        })
      }
    },
    75764(e, t, n) {
      var r = n(89340);
      const s = (0, r.makeVar)(document.documentElement.lang);
      n.d(t, ["A", 0, () => (0, r.useReactiveVar)(s)])
    },
    61295(e, t, n) {
      n.d(t, {
        ec: () => w,
        e9: () => f,
        Es: () => h,
        bD: () => m
      });
      var r = n(39793),
        s = n(93082),
        o = n(89340),
        a = n(17727),
        i = n(62885),
        c = n(4242),
        u = n(91146);
      const d = {
          token: (0, o.makeVar)("")
        },
        l = (0, a.A)({
          context: (0, s.createContext)(d),
          key: "utilsTokenProvider"
        }),
        w = ({
          children: e,
          token: t
        }) => (0, r.jsx)(l.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        m = () => {
          const {
            token: e
          } = (0, s.useContext)(l);
          return [e]
        },
        f = () => {
          const [e] = m();
          return (0, o.useReactiveVar)(e)
        },
        h = () => {
          const [e] = m();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = (0, u.A)(), r = e => {
              try {
                const {
                  exp: t = 0
                } = (0, c.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const s = r(i.A.get(t)) || r(e?.());
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
    11701(e, t, n) {
      n.r(t);
      var r = n(39793),
        s = n(93082);
      const o = (0, n(17727).A)({
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
    53634(e, t, n) {
      var r = n(39793),
        s = n(93082),
        o = n(89340),
        a = n(17727);
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
        l = (0, o.makeVar)(c());
      n.d(t, ["G4", 0, () => (0, s.useContext)(u), "uU", 0, ({
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
      }])
    },
    12509(e, t, n) {
      var r = n(39793),
        s = n(93082),
        o = n(89340),
        a = n(17727);
      const i = (0, n(45075).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, o.makeVar)(!1)
        }),
        c = e => i(e),
        u = (0, a.A)({
          context: (0, s.createContext)(null),
          key: "scrollContext"
        });
      n.d(t, ["Ll", 0, () => (0, s.useContext)(u), "N2", 0, ({
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
      }])
    }
  }
]);