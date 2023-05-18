/*! For license information please see db0b268cb5b5c927ec40.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [61], {
    112: (e, t, r) => {
      r.d(t, {
        Z: () => l
      });
      var n = r(616),
        o = r.n(n),
        a = r(639),
        s = r(914);
      const {
        apiHost: u
      } = (0, a.Z)(), c = (0, s.r)(document.documentElement.lang), l = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: r = {},
          query: n = null,
          pingBearer: a,
          requireBearerToken: s = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: l = null
        } = await (a?.()) ?? {}, i = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...c && {
            "X-lang": c
          }
        };
        let d = `${u}/${e}`;
        if (null !== n && (d += `?${new URLSearchParams(n)}`), !l && s) return null;
        l && (i.Authorization = `Bearer ${l}`);
        const f = {
            headers: i
          },
          h = o().all([f, t, r]),
          p = await fetch(d, h);
        return await p.json()
      }
    },
    639: (e, t, r) => {
      r.d(t, {
        Z: () => o
      });
      const n = [(e => {
          let {
            apiHost: t,
            authHost: r,
            clientId: n,
            graphEnv: o,
            scHost: a,
            hostname: s
          } = {
            clientId: "rsg",
            graphEnv: "prod",
            authHost: "signin",
            scHost: "socialclub",
            apiHost: "scapi",
            hostname: /www/
          };
          return {
            apiHost: `https://${t}.rockstargames.com`,
            gateway: "/auth/gateway.json",
            graphEnv: o,
            host: a,
            hostname: s,
            login: `https://${r}.rockstargames.com/connect/authorize/${n}`,
            logout: "/auth/sc-auth-logout",
            pingBearer: "/auth/ping-bearer.json",
            silentCheck: `https://${r}.rockstargames.com/connect/cors/check/${n}`,
            signup: `https://${r}.rockstargames.com/create/?cid=${n}`
          }
        })()],
        o = () => n.find((e => {
          let {
            hostname: t
          } = e;
          return t.test(document.location.hostname)
        })) || n[0]
    },
    914: (e, t, r) => {
      r.d(t, {
        r: () => n
      });
      const n = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    61: (e, t, r) => {
      r.r(t), r.d(t, {
        setFreezeUserShouldSeeMore: () => p.rj,
        useLocale: () => a,
        useNewswirePost: () => h.useNewswirePost,
        usePreloadImg: () => u,
        useQueryParams: () => l,
        useRockstarLocalState: () => i,
        useScApi: () => f,
        useScroll: () => p.vO
      });
      var n = r(859),
        o = r(285);
      const a = () => (0, n.useReactiveVar)(o.locale);
      var s = r(822);
      const u = e => {
        const [t, r] = (0, s.useState)(null), [n, o] = (0, s.useState)(null), [a, u] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
          let t = new Image,
            n = !1;
          return t.addEventListener("load", (() => {
            u({
              width: t.width,
              height: t.height
            }), t = null, n || r(!0)
          })), t.addEventListener("error", (() => {
            t = null, n || (r(!1), o(!0))
          })), t.src = e, () => {
            n = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      var c = r(814);
      const l = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        i = () => {
          const e = (0, n.useState)(),
            t = (0, n.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: n
              } = e;
              t({
                navOpen: null !== r ? r : !n
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
              let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              t({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: r,
                  filter: n
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
              const r = "Rockstar Games";
              let n = e;
              e.endsWith(r) || (n = `${e} - ${r}`), document.title = n, t({
                title: n
              })
            },
            setError: e => {
              let {
                code: r,
                message: n
              } = e;
              t({
                error: {
                  code: r,
                  message: n
                }
              })
            },
            setStandalone: e => {
              t({
                standalone: e
              })
            },
            setCustomHeader: e => {
              t({
                customHeader: e
              })
            },
            setCustomFooter: e => {
              t({
                customFooter: e
              })
            },
            updateGameData: r => {
              let {
                base: n = null,
                navOpen: o = !1
              } = r;
              const a = {
                ...e.gameData
              };
              null !== n && (a.base = n.replace(/\/$/, "")), null !== o && (a.navOpen = o), t({
                gameData: a
              })
            },
            setModalIsOpen: e => {
              t({
                modalIsOpen: e
              })
            }
          }
        };
      var d = r(112);
      const f = (e, t) => {
        let {
          autoFetch: r = !0,
          fetchOptions: o = {},
          query: a = null
        } = t;
        const u = (0, n.useRockstarTokenPing)(),
          [c, l] = (0, s.useState)(null),
          [i, f] = (0, s.useState)(!1),
          [h, p] = (0, s.useState)(null),
          g = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: n = {}
              } = t;
              p(null), l(null), f(!0);
              const s = await (0, d.Z)(r ?? e, {
                pingBearer: u,
                fetchOptions: o,
                finalFetchOptions: n,
                query: a
              });
              return s?.status || p(JSON.stringify(s?.error)), l(s), f(!1), s
            } catch (e) {
              p(String(e)), f(!1)
            }
            return null
          }), [e, o, a]);
        return (0, s.useEffect)((() => {
          null === c && null === h && !i && r && g()
        }), [r, c, h, i, g]), {
          data: c,
          error: h,
          loading: i,
          fetch: g
        }
      };
      var h = r(719),
        p = r(62)
    },
    719: (e, t, r) => {
      r.r(t), r.d(t, {
        Consumer: () => s,
        Provider: () => u,
        useNewswirePost: () => c
      });
      var n = r(822),
        o = r(706);
      const a = (0, n.createContext)(),
        {
          Consumer: s
        } = a,
        u = e => {
          let {
            article: t,
            children: r
          } = e;
          return (0, o.jsx)(a.Provider, {
            value: t,
            children: r
          })
        },
        c = () => (0, n.useContext)(a)
    },
    62: (e, t, r) => {
      r.d(t, {
        ID: () => i,
        rj: () => u,
        vO: () => l
      });
      var n = r(859),
        o = r(822),
        a = r(706);
      const s = (0, n.makeVar)(!1),
        u = e => s(e),
        c = (0, o.createContext)(null),
        l = () => (0, o.useContext)(c),
        i = e => {
          let {
            children: t
          } = e;
          const [r, l] = (0, o.useState)(window.pageYOffset), [i, d] = (0, o.useState)(null), [f, h] = (0, o.useState)(!1), p = (0, n.useReactiveVar)(s);
          let g;
          const m = () => {
            h(!0), clearTimeout(g), g = setTimeout((() => {
              h(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (p) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), f || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [f, p]), (0, o.useMemo)((() => (0, a.jsx)(c.Provider, {
            value: {
              freezeUserShouldSeeMore: p,
              pageYOffset: r,
              pauseUserShouldSeeMore: m,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: i
            },
            children: t
          })), [p, r, m, i])
        }
    },
    616: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? u((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function o(e, t, r) {
        return e.concat(t).map((function(e) {
          return n(e, r)
        }))
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function u(e, r, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || o, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(r);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, r, c) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && a(e).forEach((function(t) {
            o[t] = n(e[t], r)
          })), a(t).forEach((function(a) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, a) || (s(e, a) && r.isMergeableObject(t[a]) ? o[a] = function(e, t) {
              if (!t.customMerge) return u;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : u
            }(a, r)(e[a], t[a], r) : o[a] = n(t[a], r))
          })), o
        }(e, r, c) : n(r, c)
      }
      u.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return u(e, r, t)
        }), {})
      };
      var c = u;
      e.exports = c
    },
    115: (e, t, r) => {
      var n = r(822),
        o = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, r) {
        var n, c = {},
          l = null,
          i = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) a.call(t, n) && !u.hasOwnProperty(n) && (c[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === c[n] && (c[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: c,
          _owner: s.current
        }
      }
    },
    706: (e, t, r) => {
      e.exports = r(115)
    }
  }
]);