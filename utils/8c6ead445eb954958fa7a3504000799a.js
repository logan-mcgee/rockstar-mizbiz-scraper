! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6edec836-8e45-4dab-aa55-9cf87e5eecce", e._sentryDebugIdIdentifier = "sentry-dbid-6edec836-8e45-4dab-aa55-9cf87e5eecce")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [96], {
    576: (e, t, n) => {
      var s = n(664),
        r = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var s, c = {},
          u = null,
          i = null;
        for (s in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (i = t.ref), t) o.call(t, s) && !l.hasOwnProperty(s) && (c[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === c[s] && (c[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: u,
          ref: i,
          props: c,
          _owner: a.current
        }
      }
    },
    240: (e, t, n) => {
      e.exports = n(576)
    },
    775: (e, t, n) => {
      n.d(t, {
        c: () => w
      });
      var s = n(456),
        r = n(128),
        o = n.n(r),
        a = n(660),
        l = n.n(a),
        c = n(916),
        u = n(280);
      const {
        apiHost: i
      } = (0, c.c)(), d = (0, u._)(document.documentElement.lang), h = {}, w = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: a,
          requireBearerToken: c = !0,
          useCache: u = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: w = null
          } = await (a?.()) ?? {}, f = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let p = `${i}/${e}`;
          if (null === r || l().isEmpty(r) || (p += `?${new URLSearchParams(r)}`), !w && c) return null;
          w && (f.Authorization = `Bearer ${w}`);
          const g = {
              headers: f
            },
            m = o().all([g, t, n]),
            v = JSON.stringify({
              ...m,
              url: p
            }),
            b = await (0, s.sha256)(v);
          if (u) {
            if (h[b]?.response) return h[b].response;
            if (h[b]?.loading) return {
              error: null,
              result: null
            };
            h[b] = {
              loading: !0
            }
          }
          const y = await fetch(p, m),
            k = await y.json();
          return u && (h[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    916: (e, t, n) => {
      n.d(t, {
        c: () => l
      });
      const s = window?.env?.sc,
        r = window?.env?.marketing,
        o = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: a,
            scHost: l,
            hostname: c,
            cdnBase: u,
            key: i,
            marketingAuthTLD: d
          } = e;
          const h = s?.apiHost ?? t,
            w = s?.authHost ?? n,
            f = s?.cdnBase ?? u,
            p = s?.clientId ?? o,
            g = r?.marketingAuthTLD ?? d,
            m = s?.scHost ?? l;
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? a,
            host: m,
            hostname: c,
            cdnBase: f,
            key: i,
            clientId: p,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/auth/ping-bearer.json`
          }
        },
        a = [o({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), o({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        l = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return a.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || a[0]
        }
    },
    280: (e, t, n) => {
      n.d(t, {
        _: () => s
      });
      const s = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    96: (e, t, n) => {
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => v.C0,
        useLocale: () => o,
        useNewswirePost: () => m.useNewswirePost,
        usePreloadImg: () => l,
        useQueryParams: () => u,
        useRockstarEventDispatcher: () => p,
        useRockstarEventSubscriber: () => g,
        useRockstarLocalState: () => i,
        useScApi: () => h,
        useScroll: () => v.QZ
      });
      var s = n(52),
        r = n(680);
      const o = () => (0, s.useReactiveVar)(r.locale);
      var a = n(664);
      const l = e => {
        const [t, n] = (0, a.useState)(null), [s, r] = (0, a.useState)(null), [o, l] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
          let t = new Image,
            s = !1;
          return t.addEventListener("load", (() => {
            l({
              width: t.width,
              height: t.height
            }), t = null, s || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, s || (n(!1), r(!0))
          })), t.src = e, () => {
            s = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, o]
      };
      var c = n(13);
      const u = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        i = () => {
          const e = (0, s.useState)(),
            t = (0, s.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: s
              } = e;
              t({
                navOpen: null !== n ? n : !s
              })
            },
            clearError: () => {
              t({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              t({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: n,
                  filter: s
                }
              })
            },
            setLoading: e => {
              t({
                loading: e
              })
            },
            setHeaderHidden: e => {
              t({
                headerHidden: e
              })
            },
            setNavHidden: e => {
              t({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              t({
                normalLogo: e
              })
            },
            setSearch: e => {
              t({
                search: e
              })
            },
            setTitle: e => {
              const n = "Rockstar Games";
              let s = e;
              e.endsWith(n) || (s = `${e} - ${n}`), document.title = s, t({
                title: s
              })
            },
            setError: e => {
              let {
                code: n,
                message: s
              } = e;
              t({
                error: {
                  code: n,
                  message: s
                }
              })
            },
            setStandalone: e => {
              t({
                standalone: e
              })
            },
            setCustomFooter: e => {
              t({
                customFooter: e
              })
            },
            updateGameData: n => {
              let {
                base: s = null,
                navOpen: r = !1
              } = n;
              const o = {
                ...e.gameData
              };
              null !== s && (o.base = s.replace(/\/$/, "")), null !== r && (o.navOpen = r), t({
                gameData: o
              })
            }
          }
        };
      var d = n(775);
      const h = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: r = {},
            query: o = null
          } = t;
          const l = (0, s.useRockstarTokenPing)(),
            [c, u] = (0, a.useState)(null),
            [i, h] = (0, a.useState)(!1),
            [w, f] = (0, a.useState)(null),
            p = (0, a.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: s = {}
                } = t;
                f(null), u(null), h(!0);
                const a = await (0, d.c)(n ?? e, {
                  pingBearer: l,
                  fetchOptions: r,
                  finalFetchOptions: s,
                  query: o
                });
                return a?.status || f(JSON.stringify(a?.error)), u(a), h(!1), a
              } catch (e) {
                f(String(e)), h(!1)
              }
              return null
            }), [e, r, o]);
          return (0, a.useEffect)((() => {
            null === c && null === w && !i && n && p()
          }), [n, c, w, i, p]), {
            data: c,
            error: w,
            loading: i,
            fetch: p
          }
        },
        w = "__RS_CUSTOM_EVENTS__",
        f = e => `rsCustomEvent:${e}`;
      window[w] || (window[w] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = f(e),
              s = new CustomEvent(n, {
                detail: t
              });
            window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].eventQueue.push(s), window[w][n].subscribers.forEach((e => {
              e(s.detail)
            }))
          };
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        g = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = f(e);
            return window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].subscribers.push(t), window[w][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[w][n].subscribers = window[w][n].subscribers.filter((e => e !== t)), 0 === window[w][n].subscribers.length && delete window[w][n]
            }
          }), [e, t]), (0, a.useMemo)((() => ({})), [])
        };
      var m = n(640),
        v = n(172)
    },
    640: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => l,
        useNewswirePost: () => c
      });
      var s = n(664),
        r = n(240);
      const o = (0, s.createContext)(),
        {
          Consumer: a
        } = o,
        l = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, r.jsx)(o.Provider, {
            value: t,
            children: n
          })
        },
        c = () => (0, s.useContext)(o)
    },
    172: (e, t, n) => {
      n.d(t, {
        C0: () => l,
        Iq: () => i,
        QZ: () => u
      });
      var s = n(52),
        r = n(664),
        o = n(240);
      const a = (0, s.makeVar)(!1),
        l = e => a(e),
        c = (0, r.createContext)(null),
        u = () => (0, r.useContext)(c),
        i = e => {
          let {
            children: t
          } = e;
          const [n, u] = (0, r.useState)(window.pageYOffset), [i, d] = (0, r.useState)(null), [h, w] = (0, r.useState)(!1), f = (0, s.useReactiveVar)(a);
          let p;
          const g = () => {
            w(!0), clearTimeout(p), p = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, r.useEffect)((() => {
            let e;
            const t = () => {
              if (f) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              u(t), h || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, f]), (0, r.useMemo)((() => (0, o.jsx)(c.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: n,
              pauseUserShouldSeeMore: g,
              setFreezeUserShouldSeeMore: l,
              userShouldSeeMore: i
            },
            children: t
          })), [f, n, g, i])
        }
    }
  }
]);