! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5944dd64-48a6-437a-a0f2-4849ce7cbb6c", e._sentryDebugIdIdentifier = "sentry-dbid-5944dd64-48a6-437a-a0f2-4849ce7cbb6c")
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
  [705], {
    6516: (e, t, n) => {
      var r = n(1403),
        s = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var r, i = {},
          u = null,
          l = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) o.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: u,
          ref: l,
          props: i,
          _owner: a.current
        }
      }
    },
    6632: (e, t, n) => {
      e.exports = n(6516)
    },
    156: (e, t, n) => {
      n.d(t, {
        A: () => f
      });
      var r = n(4686),
        s = n(6540),
        o = n.n(s),
        a = n(4252),
        c = n.n(a),
        i = n(6088),
        u = n(5577);
      const {
        apiHost: l
      } = (0, i.A)(), d = (0, u.t)(document.documentElement.lang), w = {}, f = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: s = null,
          pingBearer: a,
          requireBearerToken: i = !0,
          useCache: u = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
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
          let h = `${l}/${e}`;
          if (null === s || c().isEmpty(s) || (h += `?${new URLSearchParams(s)}`), !f && i) return null;
          f && (v.Authorization = `Bearer ${f}`);
          const g = {
              headers: v
            },
            m = o().all([g, t, n]),
            p = JSON.stringify({
              ...m,
              url: h
            }),
            E = await (0, r.sha256)(p);
          if (u) {
            if (w[E]?.response) return w[E].response;
            if (w[E]?.loading) return {
              error: null,
              result: null
            };
            w[E] = {
              loading: !0
            }
          }
          const b = await fetch(h, m),
            y = await b.json();
          return u && (w[E] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    6088: (e, t, n) => {
      n.d(t, {
        A: () => c
      });
      const r = window?.env?.sc,
        s = window?.env?.marketing,
        o = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: a,
            scHost: c,
            hostname: i,
            cdnBase: u,
            key: l,
            marketingAuthTLD: d
          } = e;
          const w = r?.apiHost ?? t,
            f = r?.authHost ?? n,
            v = r?.cdnBase ?? u,
            h = r?.clientId ?? o,
            g = s?.marketingAuthTLD ?? d,
            m = r?.scHost ?? c;
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? a,
            host: m,
            hostname: i,
            cdnBase: v,
            key: l,
            clientId: h,
            authHost: f,
            login: `https://${f}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${h}`,
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
        c = () => {
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
    5577: (e, t, n) => {
      n.d(t, {
        t: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    8705: (e, t, n) => {
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => y.U4,
        useBrowserCapabilityDetection: () => O,
        useCursorScroll: () => C,
        useGetPlatformLoginUrl: () => h,
        useHasReduceMotionPreference: () => S,
        useHasSaveDataPreference: () => k,
        useLocale: () => o,
        useNewswirePost: () => b.useNewswirePost,
        usePreloadImg: () => c,
        usePrevious: () => l,
        useQueryParams: () => u,
        useRockstarEventDispatcher: () => p,
        useRockstarEventSubscriber: () => E,
        useRockstarLocalState: () => d,
        useScApi: () => f,
        useScroll: () => y.Ll,
        useScrollTracking: () => $
      });
      var r = n(8407),
        s = n(136);
      const o = () => (0, r.useReactiveVar)(s.locale);
      var a = n(1403);
      const c = e => {
        const [t, n] = (0, a.useState)(null), [r, s] = (0, a.useState)(null), [o, c] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            c({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), s(!0))
          })), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, o]
      };
      var i = n(9779);
      const u = () => {
          const {
            search: e
          } = (0, i.useLocation)();
          return new URLSearchParams(e)
        },
        l = e => {
          const t = (0, a.useRef)();
          return (0, a.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        },
        d = () => {
          const e = (0, r.useState)(),
            t = (0, r.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: r
              } = e;
              t({
                navOpen: null !== n ? n : !r
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
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              t({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: n,
                  filter: r
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
              let r = e;
              e.endsWith(n) || (r = `${e} - ${n}`), document.title = r, t({
                title: r
              })
            },
            setError: function() {
              let {
                code: e,
                message: n
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              t({
                error: {
                  code: e,
                  message: n
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
                base: r = null,
                navOpen: s = !1
              } = n;
              const o = {
                ...e.gameData
              };
              null !== r && (o.base = r.replace(/\/$/, "")), null !== s && (o.navOpen = s), t({
                gameData: o
              })
            }
          }
        };
      var w = n(156);
      const f = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: s = {},
          query: o = null
        } = t;
        const c = (0, r.useRockstarTokenPing)(),
          [i, u] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [f, v] = (0, a.useState)(null),
          h = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: r = {}
              } = t;
              v(null), u(null), d(!0);
              const a = await (0, w.A)(n ?? e, {
                pingBearer: c,
                fetchOptions: s,
                finalFetchOptions: r,
                query: o
              });
              return a?.status || v(JSON.stringify(a?.error)), u(a), d(!1), a
            } catch (e) {
              v(String(e)), d(!1)
            }
            return null
          }), [e, s, o]);
        return (0, a.useEffect)((() => {
          null === i && null === f && !l && n && h()
        }), [n, i, f, l, h]), {
          data: i,
          error: f,
          loading: l,
          fetch: h
        }
      };
      var v = n(2756);
      const h = (e, t, n) => {
          const {
            authHost: s,
            clientId: o
          } = (0, v.getScConfigForOrigin)(), a = (0, r.useRockstarToken)();
          return `https://${s}.rockstargames.com/tpa/${e}/link/?cid=${o}&lang=${t}&returnUrl=${encodeURIComponent(n)}&accessToken=${a}`
        },
        g = "__RS_CUSTOM_EVENTS__",
        m = e => `rsCustomEvent:${e}`;
      window[g] || (window[g] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = m(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].eventQueue.push(r), window[g][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        E = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = m(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter((e => e !== t)), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }), [e, t]), (0, a.useMemo)((() => ({})), [])
        };
      var b = n(359),
        y = n(295);
      const S = () => {
          const [e, t] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        k = () => {
          const [e, t] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
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
      var L = n(9928),
        _ = n(4999);
      const O = () => {
          const [e, t] = (0, a.useState)(!1), {
            deviceMemory: n
          } = (0, L.useMemoryStatus)(), {
            effectiveConnectionType: r
          } = (0, L.useNetworkStatus)(), {
            numberOfLogicalProcessors: s
          } = (0, L.useHardwareConcurrency)(), {
            saveData: o
          } = (0, L.useSaveData)(), c = S(), i = () => {
            const a = (() => {
              const e = e => !1 === e;
              if (c) return !1;
              if (_.isLegacyEdge || _.isIE || _.isWearable || _.isSmartTV) return !1;
              const t = "Safari" === _.browserName,
                a = "Firefox" === _.browserName,
                i = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
                u = s && s >= 4,
                l = n && n >= 4;
              return !(e(!o) || e(i) || e(u) || !t && !a && e(l))
            })();
            a !== e && t(a)
          };
          return (0, a.useEffect)((() => (i(), window.addEventListener("online", i), window.addEventListener("offline", i), window.addEventListener("devicememory", i), () => {
            window.removeEventListener("online", i), window.removeEventListener("offline", i), window.removeEventListener("devicememory", i)
          })), [n, r, e, s, o, c]), e
        },
        $ = e => {
          const [t, n] = (0, a.useState)(!1), r = (0, a.useRef)(null);
          return (0, a.useEffect)((() => {
            const s = () => {
              if (t || !r.current) return;
              const o = r.current,
                {
                  height: a
                } = o.getBoundingClientRect(),
                c = window.innerHeight;
              window.scrollY + c >= o.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", s))
            };
            return window.addEventListener("scroll", s, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", s)
            }
          }), [t, e]), {
            ref: r,
            scrollTracked: t
          }
        },
        C = e => {
          const [t, n] = (0, a.useState)(null);
          let r, s;
          const o = e => {
              e.preventDefault(), "mousedown" === e.type && t ? (window.addEventListener("mousemove", c), r = e.pageX - t?.offsetLeft, s = t?.scrollLeft) : window.removeEventListener("mousemove", c)
            },
            c = e => {
              if (t) {
                e.preventDefault();
                const n = e.pageX - t.offsetLeft - r;
                t.scrollLeft = s - n
              }
            };
          (0, a.useEffect)((() => (n(e?.current), t && (t.addEventListener("mousedown", o), window.addEventListener("mouseup", o)), () => {
            t && t.removeEventListener("mousedown", o), window.removeEventListener("mouseup", o), window.removeEventListener("mousemove", c)
          })), [e?.current])
        }
    },
    359: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => i
      });
      var r = n(1403),
        s = n(6632);
      const o = (0, r.createContext)(),
        {
          Consumer: a
        } = o,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, s.jsx)(o.Provider, {
            value: t,
            children: n
          })
        },
        i = () => (0, r.useContext)(o)
    },
    295: (e, t, n) => {
      n.d(t, {
        Ll: () => u,
        N2: () => l,
        U4: () => c
      });
      var r = n(8407),
        s = n(1403),
        o = n(6632);
      const a = (0, r.makeVar)(!1),
        c = e => a(e),
        i = (0, s.createContext)(null),
        u = () => (0, s.useContext)(i),
        l = e => {
          let {
            children: t
          } = e;
          const [n, u] = (0, s.useState)(window.pageYOffset), [l, d] = (0, s.useState)(null), [w, f] = (0, s.useState)(!1), v = (0, r.useReactiveVar)(a);
          let h;
          const g = () => {
            f(!0), clearTimeout(h), h = setTimeout((() => {
              f(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (v) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              u(t), w || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [w, v]), (0, s.useMemo)((() => (0, o.jsx)(i.Provider, {
            value: {
              freezeUserShouldSeeMore: v,
              pageYOffset: n,
              pauseUserShouldSeeMore: g,
              setFreezeUserShouldSeeMore: c,
              userShouldSeeMore: l
            },
            children: t
          })), [v, n, g, l])
        }
    }
  }
]);