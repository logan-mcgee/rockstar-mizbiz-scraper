"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [321], {
    184: e => {
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
        return !1 !== t.clone && t.isMergeableObject(e) ? c((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function s(e, t, r) {
        return e.concat(t).map((function(e) {
          return n(e, r)
        }))
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function c(e, r, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || s, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(r);
        return l === Array.isArray(e) ? l ? u.arrayMerge(e, r, u) : function(e, t, r) {
          var s = {};
          return r.isMergeableObject(e) && o(e).forEach((function(t) {
            s[t] = n(e[t], r)
          })), o(t).forEach((function(o) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (a(e, o) && r.isMergeableObject(t[o]) ? s[o] = function(e, t) {
              if (!t.customMerge) return c;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : c
            }(o, r)(e[o], t[o], r) : s[o] = n(t[o], r))
          })), s
        }(e, r, u) : n(r, u)
      }
      c.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return c(e, r, t)
        }), {})
      };
      var u = c;
      e.exports = u
    },
    738: (e, t, r) => {
      r.d(t, {
        Z: () => p
      });
      const n = e => async function(t) {
        let {
          outputFormat: r = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const n = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === r ? (e => {
          const t = new DataView(e);
          let r = "";
          for (let e = 0; e < t.byteLength; e += 4) r += t.getUint32(e).toString(16).padStart(8, "0");
          return r
        })(n) : n
      }, s = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512");
      var o = r(184),
        a = r.n(o),
        c = r(370),
        u = r.n(c),
        l = r(335),
        i = r(296);
      const {
        apiHost: d
      } = (0, l.Z)(), h = (0, i.r)(document.documentElement.lang), g = {}, p = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: r = {},
          query: n = null,
          pingBearer: o,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: i = null
        } = await (o?.()) ?? {}, p = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...h && {
            "X-lang": h
          }
        };
        let f = `${d}/${e}`;
        if (null === n || u().isEmpty(n) || (f += `?${new URLSearchParams(n)}`), !i && c) return null;
        i && (p.Authorization = `Bearer ${i}`);
        const m = {
            headers: p
          },
          v = a().all([m, t, r]),
          w = JSON.stringify({
            ...v,
            url: f
          }),
          y = await s(w);
        if (l) {
          if (g[y]?.response) return g[y].response;
          if (g[y]?.loading) return {
            error: null,
            result: null
          };
          g[y] = {
            loading: !0
          }
        }
        const b = await fetch(f, v),
          S = await b.json();
        return l && (g[y] = {
          response: S,
          loading: !1
        }), S
      }
    },
    335: (e, t, r) => {
      r.d(t, {
        Z: () => c
      });
      const n = window?.env?.sc,
        s = window?.env?.marketing,
        o = e => {
          let {
            apiHost: t,
            authHost: r,
            clientId: o,
            graphEnv: a,
            scHost: c,
            hostname: u,
            cdnBase: l,
            key: i,
            marketingAuthTLD: d
          } = e;
          const h = n?.apiHost ?? t,
            g = n?.authHost ?? r,
            p = n?.cdnBase ?? l,
            f = n?.clientId ?? o,
            m = s?.marketingAuthTLD ?? d,
            v = n?.scHost ?? c;
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: n?.graphEnv ?? a,
            host: v,
            hostname: u,
            cdnBase: p,
            key: i,
            clientId: f,
            authHost: g,
            login: `https://${g}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${f}`,
            gateway: `https://${m}.rockstargames.com/auth/gateway.json`,
            logout: `https://${m}.rockstargames.com/auth/sc-auth-logout`,
            pingBearer: `https://${m}.rockstargames.com/auth/ping-bearer.json`
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
          marketingAuthTLD: "www"
        }), o({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www"
        })],
        c = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find((t => {
              let {
                key: r
              } = t;
              return r === e
            })) ?? null;
            if (t) return t
          }
          return a.find((e => {
            let {
              hostname: t
            } = e;
            return t.test(document.location.hostname)
          })) || a[0]
        }
    },
    296: (e, t, r) => {
      r.d(t, {
        r: () => n
      });
      const n = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    321: (e, t, r) => {
      r.r(t), r.d(t, {
        setFreezeUserShouldSeeMore: () => p.rj,
        useLocale: () => o,
        useNewswirePost: () => g.useNewswirePost,
        usePreloadImg: () => c,
        useQueryParams: () => l,
        useRockstarLocalState: () => i,
        useScApi: () => h,
        useScroll: () => p.vO
      });
      var n = r(859),
        s = r(285);
      const o = () => (0, n.useReactiveVar)(s.locale);
      var a = r(927);
      const c = e => {
        const [t, r] = (0, a.useState)(null), [n, s] = (0, a.useState)(null), [o, c] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
          let t = new Image,
            n = !1;
          return t.addEventListener("load", (() => {
            c({
              width: t.width,
              height: t.height
            }), t = null, n || r(!0)
          })), t.addEventListener("error", (() => {
            t = null, n || (r(!1), s(!0))
          })), t.src = e, () => {
            n = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, o]
      };
      var u = r(375);
      const l = () => {
          const {
            search: e
          } = (0, u.useLocation)();
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
            setCustomFooter: e => {
              t({
                customFooter: e
              })
            },
            updateGameData: r => {
              let {
                base: n = null,
                navOpen: s = !1
              } = r;
              const o = {
                ...e.gameData
              };
              null !== n && (o.base = n.replace(/\/$/, "")), null !== s && (o.navOpen = s), t({
                gameData: o
              })
            }
          }
        };
      var d = r(738);
      const h = (e, t) => {
        let {
          autoFetch: r = !0,
          fetchOptions: s = {},
          query: o = null
        } = t;
        const c = (0, n.useRockstarTokenPing)(),
          [u, l] = (0, a.useState)(null),
          [i, h] = (0, a.useState)(!1),
          [g, p] = (0, a.useState)(null),
          f = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: n = {}
              } = t;
              p(null), l(null), h(!0);
              const a = await (0, d.Z)(r ?? e, {
                pingBearer: c,
                fetchOptions: s,
                finalFetchOptions: n,
                query: o
              });
              return a?.status || p(JSON.stringify(a?.error)), l(a), h(!1), a
            } catch (e) {
              p(String(e)), h(!1)
            }
            return null
          }), [e, s, o]);
        return (0, a.useEffect)((() => {
          null === u && null === g && !i && r && f()
        }), [r, u, g, i, f]), {
          data: u,
          error: g,
          loading: i,
          fetch: f
        }
      };
      var g = r(438),
        p = r(186)
    },
    438: (e, t, r) => {
      r.r(t), r.d(t, {
        Consumer: () => a,
        Provider: () => c,
        useNewswirePost: () => u
      });
      var n = r(927),
        s = r(705);
      const o = (0, n.createContext)(),
        {
          Consumer: a
        } = o,
        c = e => {
          let {
            article: t,
            children: r
          } = e;
          return (0, s.jsx)(o.Provider, {
            value: t,
            children: r
          })
        },
        u = () => (0, n.useContext)(o)
    },
    186: (e, t, r) => {
      r.d(t, {
        ID: () => i,
        rj: () => c,
        vO: () => l
      });
      var n = r(859),
        s = r(927),
        o = r(705);
      const a = (0, n.makeVar)(!1),
        c = e => a(e),
        u = (0, s.createContext)(null),
        l = () => (0, s.useContext)(u),
        i = e => {
          let {
            children: t
          } = e;
          const [r, l] = (0, s.useState)(window.pageYOffset), [i, d] = (0, s.useState)(null), [h, g] = (0, s.useState)(!1), p = (0, n.useReactiveVar)(a);
          let f;
          const m = () => {
            g(!0), clearTimeout(f), f = setTimeout((() => {
              g(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const t = () => {
              if (p) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), h || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, p]), (0, s.useMemo)((() => (0, o.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: p,
              pageYOffset: r,
              pauseUserShouldSeeMore: m,
              setFreezeUserShouldSeeMore: c,
              userShouldSeeMore: i
            },
            children: t
          })), [p, r, m, i])
        }
    }
  }
]);