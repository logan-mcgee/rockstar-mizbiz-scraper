try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7eeebc83-6a87-4a3f-9763-5180571bcf24", e._sentryDebugIdIdentifier = "sentry-dbid-7eeebc83-6a87-4a3f-9763-5180571bcf24")
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
  [5085], {
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
        ec: () => w,
        e9: () => f,
        Es: () => h,
        bD: () => m
      });
      var r = n(42295),
        s = n(71127),
        o = n(32467),
        a = n(9482),
        i = n(37980),
        c = n(58128),
        u = n(45547);
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
    26675: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      var r = n(32467);
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
            v = s?.marketingAuthTLD ?? w,
            p = r?.scHost ?? c,
            y = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: p,
            hostname: u,
            cdnBase: h,
            key: l,
            clientId: g,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: f,
            queryManifest: i,
            scBase: `https://${p}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${v}/auth/gateway.json`,
            logout: `https://${v}/auth/sc-auth-logout`,
            pingBearer: `https://${v}/${y}`,
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
        G4: () => m,
        uU: () => w
      });
      var r = n(42295),
        s = n(71127),
        o = n(32467),
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
            v = o().all([g, t, n]),
            p = JSON.stringify({
              ...v,
              url: h
            }),
            y = await (0, r.sc)(p);
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
          const k = await fetch(h, v),
            E = await k.json();
          return u && (w[y] = {
            response: E,
            loading: !1
          }), E
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
    65085: (e, t, n) => {
      n.d(t, {
        RK: () => s,
        bn: () => R,
        ri: () => a,
        vx: () => x,
        sb: () => C,
        Ym: () => i.A,
        CA: () => k.useNewswirePost,
        OG: () => c,
        ZC: () => l,
        sq: () => d,
        Vq: () => q,
        OH: () => p,
        zP: () => y,
        Cb: () => f,
        N6: () => b,
        GA: () => $,
        JE: () => H
      });
      const r = (0, n(60309).A)(),
        s = () => r;
      var o = n(71127);
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
      var u = n(10181);
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
        query: r = null,
        requireBearerToken: s = !0,
        useCache: a = !0
      }) => {
        const i = (0, w.Es)(),
          [c, u] = (0, o.useState)(null),
          [d, l] = (0, o.useState)(!1),
          [f, h] = (0, o.useState)(null),
          [g, v] = (0, o.useState)(!1),
          p = (0, o.useCallback)(async (t = {}, o = null) => {
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
              v(!0)
            }
            return null
          }, [e, n, r]);
        return (0, o.useEffect)(() => {
          null === c && null === f && !d && t && p()
        }, [t, c, f, d, p]), {
          data: c,
          error: f,
          loading: d,
          fetch: p,
          resolved: g
        }
      };
      var h = n(45547);
      const g = "__RS_CUSTOM_EVENTS__",
        v = e => `rsCustomEvent:${e}`;
      window[g] || (window[g] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = v(e),
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
        y = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, o.useEffect)(() => {
            const n = v(e);
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
        E = (n(95342), n(17954));
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
      n(50437);
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
      var S = n(81878);
      const L = navigator?.deviceMemory,
        T = navigator?.connection?.effectiveType,
        M = navigator?.hardwareConcurrency,
        A = navigator?.connection?.saveData ?? !1,
        R = () => {
          const [e, t] = (0, o.useState)(), n = x();
          return (0, o.useEffect)(() => {
            const r = () => {
              const r = (() => {
                const e = e => !1 === e;
                if (n) return !1;
                if (S.n8 || S.lT || S.w || S.UX) return !1;
                const t = "Safari" === S.C0,
                  r = "Firefox" === S.C0,
                  s = T && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(T),
                  o = M && M >= 4,
                  a = L && L >= 4;
                return !(e(!A) || e(s) || e(o) || !t && !r && e(a))
              })();
              r !== e && t(r)
            };
            return r(), window.addEventListener("online", r), window.addEventListener("offline", r), window.addEventListener("devicememory", r), () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r), window.removeEventListener("devicememory", r)
            }
          }, [L, T, e, M, A, n]), e
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
      var _ = n(56990);
      const q = () => {
        const {
          formatRelativeTime: e
        } = (0, _.useIntl)();
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
        Ll: () => d,
        N2: () => l
      });
      var r = n(42295),
        s = n(71127),
        o = n(32467),
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