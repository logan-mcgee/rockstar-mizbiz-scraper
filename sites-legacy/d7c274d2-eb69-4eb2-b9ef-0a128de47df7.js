try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d7c274d2-eb69-4eb2-b9ef-0a128de47df7", e._sentryDebugIdIdentifier = "sentry-dbid-d7c274d2-eb69-4eb2-b9ef-0a128de47df7")
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
  [5997], {
    10959(e, t, n) {
      n.d(t, {
        A: () => w
      });
      var r = n(5942),
        o = n(76597),
        s = n.n(o),
        i = n(82088),
        a = n(39991),
        c = n(93022);
      const {
        apiHost: u
      } = (0, a.A)(), d = (0, c.t)(document.documentElement.lang), l = {}, w = async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: o = null,
        pingBearer: a,
        requireBearerToken: c = !0,
        useCache: w = !0
      } = {}) => {
        try {
          const {
            bearerToken: f = null
          } = await (a?.()) ?? {}, v = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let h = `${u}/${e}`;
          if (null === o || (0, i.A)(o) || (h += `?${new URLSearchParams(o)}`), !f && c) return null;
          f && (v.Authorization = `Bearer ${f}`);
          const m = {
              headers: v
            },
            g = s().all([m, t, n]),
            b = JSON.stringify({
              ...g,
              url: h
            }),
            p = await (0, r.sc)(b);
          if (w) {
            if (l[p]?.response) return l[p].response;
            if (l[p]?.loading) return {
              error: null,
              result: null
            };
            l[p] = {
              loading: !0
            }
          }
          const y = await fetch(h, g);
          if (!y.ok) throw new Error(`ScApi fetch error for ${e} with status code ${y.status}`);
          const E = await y.json();
          return w && (l[p] = {
            response: E,
            loading: !1
          }), E
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
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
        gd: () => $,
        vx: () => x,
        sb: () => C,
        Ym: () => i.A,
        CA: () => p.useNewswirePost,
        OG: () => a,
        ZC: () => d,
        sq: () => u,
        Vq: () => O,
        OH: () => g,
        zP: () => b,
        Cb: () => f,
        N6: () => E,
        GA: () => U,
        JE: () => _
      });
      const r = (0, n(17473).A)(),
        o = () => r;
      var s = n(93082),
        i = n(12879);
      const a = e => {
        const [t, n] = (0, s.useState)(null), [r, o] = (0, s.useState)(null), [i, a] = (0, s.useState)({});
        return (0, s.useLayoutEffect)(() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", () => {
            a({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          }), t.addEventListener("error", () => {
            t = null, r || (n(!1), o(!0))
          }), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }, [e]), [t, i]
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
      const f = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: o = !0,
        useCache: i = !0
      }) => {
        const a = (0, l.Es)(),
          [c, u] = (0, s.useState)(null),
          [d, f] = (0, s.useState)(!1),
          [v, h] = (0, s.useState)(null),
          [m, g] = (0, s.useState)(!1),
          b = (0, s.useCallback)(async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              h(null), u(null), f(!0);
              const d = await (0, w.A)(s ?? e, {
                pingBearer: a,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: o,
                useCache: i
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
          null === c && null === v && !d && t && b()
        }, [t, c, v, d, b]), {
          data: c,
          error: v,
          loading: d,
          fetch: b,
          resolved: m
        }
      };
      var v = n(39991);
      const h = "__RS_CUSTOM_EVENTS__",
        m = e => `rsCustomEvent:${e}`;
      window[h] || (window[h] = {});
      const g = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = m(e),
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
        b = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)(() => {
            const n = m(e);
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
      var p = n(22636),
        y = (n(17714), n(93022));
      const E = e => {
        const {
          signup: t,
          login: n
        } = (0, v.A)(), r = (0, i.A)(), o = (0, y.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(o), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(25633);
      const x = () => {
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
        C = () => {
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
      var k = n(6988);
      const S = navigator?.deviceMemory,
        T = navigator?.connection?.effectiveType,
        L = navigator?.hardwareConcurrency,
        M = navigator?.connection?.saveData ?? !1,
        A = () => {
          const [e, t] = (0, s.useState)(), n = x();
          return (0, s.useEffect)(() => {
            const r = () => {
              const r = (() => {
                const e = e => !1 === e;
                if (n) return !1;
                if (k.n8 || k.lT || k.w || k.UX) return !1;
                const t = "Safari" === k.C0,
                  r = "Firefox" === k.C0,
                  o = T && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(T),
                  s = L && L >= 4,
                  i = S && S >= 4;
                return !(e(!M) || e(o) || e(s) || !t && !r && e(i))
              })();
              r !== e && t(r)
            };
            return r(), window.addEventListener("online", r), window.addEventListener("offline", r), window.addEventListener("devicememory", r), () => {
              window.removeEventListener("online", r), window.removeEventListener("offline", r), window.removeEventListener("devicememory", r)
            }
          }, [S, T, e, L, M, n]), e
        },
        U = e => {
          const [t, n] = (0, s.useState)(!1), r = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            const o = () => {
              if (t || !r.current) return;
              const s = r.current,
                {
                  height: i
                } = s.getBoundingClientRect(),
                a = window.innerHeight;
              window.scrollY + a >= s.offsetTop + i * e && (n(!0), window.removeEventListener("scroll", o))
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
                i = (Math.min(o.bottom, s) - Math.max(o.top, 0)) / o.height;
              r(i > e)
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
      var R = n(42909);
      const O = () => {
        const {
          formatRelativeTime: e
        } = (0, R.useIntl)();
        return {
          formatRelativeRoundedTime: t => {
            const n = "number" == typeof t ? t : t.getTime(),
              r = Math.round((n - Date.now()) / 1e3),
              o = Math.abs(r),
              {
                unit: s,
                divisor: i
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
              a = Math.round(r / i);
            return e(a, s, {
              numeric: "always"
            })
          }
        }
      };
      var q = n(32118);
      const $ = () => {
        const e = (0, l.Es)();
        return async ({
          service: t,
          returnUrl: n
        }) => await (0, q.t)({
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
        ec: () => f,
        e9: () => h,
        Es: () => m,
        bD: () => v
      });
      var r = n(39793),
        o = n(93082),
        s = n(79922),
        i = n(37927),
        a = n(81038),
        c = n(43568),
        u = n(4242),
        d = n(39991);
      const l = {
          token: (0, s.UT)("")
        },
        w = (0, a.A)({
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
        v = () => {
          const {
            token: e
          } = (0, o.useContext)(w);
          return [e]
        },
        h = () => {
          const [e] = v();
          return (0, i.q)(e)
        },
        m = () => {
          const [e] = v();
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
                i = await s.json();
              return e(i.bearerToken ?? ""), i
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
        Consumer: () => i,
        Provider: () => a,
        useNewswirePost: () => c
      });
      var r = n(39793),
        o = n(93082);
      const s = (0, n(81038).A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: i
        } = s,
        a = ({
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
        G4: () => v,
        uU: () => f
      });
      var r = n(39793),
        o = n(93082),
        s = n(37927),
        i = n(79922),
        a = n(81038);
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
            } = c[t], s = e >= r && e <= o, i = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: i,
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
        d = (0, a.A)({
          context: (0, o.createContext)(u()),
          key: "resizeContext"
        }),
        {
          Consumer: l
        } = d,
        w = (0, i.UT)(u()),
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
        v = () => (0, o.useContext)(d)
    },
    17714(e, t, n) {
      n.d(t, {
        Ll: () => l,
        N2: () => w
      });
      var r = n(39793),
        o = n(93082),
        s = n(37927),
        i = n(79922),
        a = n(81038);
      const c = (0, n(94662).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, i.UT)(!1)
        }),
        u = e => c(e),
        d = (0, a.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        l = () => (0, o.useContext)(d),
        w = ({
          children: e
        }) => {
          const [t, n] = (0, o.useState)(window.pageYOffset), [i, a] = (0, o.useState)(null), [l, w] = (0, o.useState)(!1), f = (0, s.q)(c);
          let v;
          const h = () => {
            w(!0), clearTimeout(v), v = setTimeout(() => {
              w(!1)
            }, 2e3)
          };
          return (0, o.useEffect)(() => {
            let e;
            const t = () => {
              if (f) return void a(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), l || a(t > 60 && t > e), e = t
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
              userShouldSeeMore: i
            },
            children: e
          }), [f, t, h, i])
        }
    }
  }
]);