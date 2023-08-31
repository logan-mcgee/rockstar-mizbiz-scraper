"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [188], {
    761: (e, t, r) => {
      r.d(t, {
        Z: () => f
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
      }, a = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512");
      var o = r(617),
        s = r.n(o),
        c = r(653),
        u = r.n(c),
        l = r(901),
        i = r(82);
      const {
        apiHost: d
      } = (0, l.Z)(), h = (0, i.r)(document.documentElement.lang), g = {}, f = async function(e) {
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
        } = await (o?.()) ?? {}, f = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...h && {
            "X-lang": h
          }
        };
        let p = `${d}/${e}`;
        if (null === n || u().isEmpty(n) || (p += `?${new URLSearchParams(n)}`), !i && c) return null;
        i && (f.Authorization = `Bearer ${i}`);
        const m = {
            headers: f
          },
          v = s().all([m, t, r]),
          y = JSON.stringify({
            ...v,
            url: p
          }),
          w = await a(y);
        if (l) {
          if (g[w]?.response) return g[w].response;
          if (g[w]?.loading) return {
            error: null,
            result: null
          };
          g[w] = {
            loading: !0
          }
        }
        const b = await fetch(p, v),
          S = await b.json();
        return l && (g[w] = {
          response: S,
          loading: !1
        }), S
      }
    },
    901: (e, t, r) => {
      r.d(t, {
        Z: () => s
      });
      const n = window?.env?.sc,
        a = window?.env?.marketing,
        o = [(e => {
          let {
            apiHost: t,
            authHost: r,
            clientId: o,
            graphEnv: s,
            scHost: c,
            hostname: u,
            cdnBase: l,
            key: i,
            marketingAuthTLD: d
          } = {
            key: "prod",
            clientId: "rsg",
            graphEnv: "prod",
            authHost: "signin",
            scHost: "socialclub",
            apiHost: "scapi",
            hostname: /www/,
            cdnBase: "https://s.rsg.sc/sc",
            marketingAuthTLD: "www"
          };
          return {
            apiHost: `https://${n?.apiHost??t}.rockstargames.com`,
            graphEnv: n?.graphEnv ?? s,
            host: n?.scHost ?? c,
            hostname: u,
            cdnBase: n?.cdnBase ?? l,
            key: i,
            login: `https://${n?.authHost??r}.rockstargames.com/connect/authorize/${n?.clientId??o}`,
            silentCheck: `https://${n?.authHost??r}.rockstargames.com/connect/cors/check/${n?.clientId??o}`,
            signup: `https://${n?.authHost??r}.rockstargames.com/create/?cid=${n?.clientId??o}`,
            gateway: `https://${a?.marketingAuthTLD??d}.rockstargames.com/auth/gateway.json`,
            logout: `https://${a?.marketingAuthTLD??d}.rockstargames.com/auth/sc-auth-logout`,
            pingBearer: `https://${a?.marketingAuthTLD??d}.rockstargames.com/auth/ping-bearer.json`
          }
        })()],
        s = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = o.find((t => {
              let {
                key: r
              } = t;
              return r === e
            })) ?? null;
            if (t) return t
          }
          return o.find((e => {
            let {
              hostname: t
            } = e;
            return t.test(document.location.hostname)
          })) || o[0]
        }
    },
    82: (e, t, r) => {
      r.d(t, {
        r: () => n
      });
      const n = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    188: (e, t, r) => {
      r.r(t), r.d(t, {
        setFreezeUserShouldSeeMore: () => f.rj,
        useLocale: () => o,
        useNewswirePost: () => g.useNewswirePost,
        usePreloadImg: () => c,
        useQueryParams: () => l,
        useRockstarLocalState: () => i,
        useScApi: () => h,
        useScroll: () => f.vO
      });
      var n = r(859),
        a = r(285);
      const o = () => (0, n.useReactiveVar)(a.locale);
      var s = r(932);
      const c = e => {
        const [t, r] = (0, s.useState)(null), [n, a] = (0, s.useState)(null), [o, c] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
          let t = new Image,
            n = !1;
          return t.addEventListener("load", (() => {
            c({
              width: t.width,
              height: t.height
            }), t = null, n || r(!0)
          })), t.addEventListener("error", (() => {
            t = null, n || (r(!1), a(!0))
          })), t.src = e, () => {
            n = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, o]
      };
      var u = r(30);
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
                navOpen: a = !1
              } = r;
              const o = {
                ...e.gameData
              };
              null !== n && (o.base = n.replace(/\/$/, "")), null !== a && (o.navOpen = a), t({
                gameData: o
              })
            }
          }
        };
      var d = r(761);
      const h = (e, t) => {
        let {
          autoFetch: r = !0,
          fetchOptions: a = {},
          query: o = null
        } = t;
        const c = (0, n.useRockstarTokenPing)(),
          [u, l] = (0, s.useState)(null),
          [i, h] = (0, s.useState)(!1),
          [g, f] = (0, s.useState)(null),
          p = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: n = {}
              } = t;
              f(null), l(null), h(!0);
              const s = await (0, d.Z)(r ?? e, {
                pingBearer: c,
                fetchOptions: a,
                finalFetchOptions: n,
                query: o
              });
              return s?.status || f(JSON.stringify(s?.error)), l(s), h(!1), s
            } catch (e) {
              f(String(e)), h(!1)
            }
            return null
          }), [e, a, o]);
        return (0, s.useEffect)((() => {
          null === u && null === g && !i && r && p()
        }), [r, u, g, i, p]), {
          data: u,
          error: g,
          loading: i,
          fetch: p
        }
      };
      var g = r(711),
        f = r(550)
    },
    711: (e, t, r) => {
      r.r(t), r.d(t, {
        Consumer: () => s,
        Provider: () => c,
        useNewswirePost: () => u
      });
      var n = r(932),
        a = r(160);
      const o = (0, n.createContext)(),
        {
          Consumer: s
        } = o,
        c = e => {
          let {
            article: t,
            children: r
          } = e;
          return (0, a.jsx)(o.Provider, {
            value: t,
            children: r
          })
        },
        u = () => (0, n.useContext)(o)
    },
    550: (e, t, r) => {
      r.d(t, {
        ID: () => i,
        rj: () => c,
        vO: () => l
      });
      var n = r(859),
        a = r(932),
        o = r(160);
      const s = (0, n.makeVar)(!1),
        c = e => s(e),
        u = (0, a.createContext)(null),
        l = () => (0, a.useContext)(u),
        i = e => {
          let {
            children: t
          } = e;
          const [r, l] = (0, a.useState)(window.pageYOffset), [i, d] = (0, a.useState)(null), [h, g] = (0, a.useState)(!1), f = (0, n.useReactiveVar)(s);
          let p;
          const m = () => {
            g(!0), clearTimeout(p), p = setTimeout((() => {
              g(!1)
            }), 2e3)
          };
          return (0, a.useEffect)((() => {
            let e;
            const t = () => {
              if (f) return void d(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), h || d(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, f]), (0, a.useMemo)((() => (0, o.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: r,
              pauseUserShouldSeeMore: m,
              setFreezeUserShouldSeeMore: c,
              userShouldSeeMore: i
            },
            children: t
          })), [f, r, m, i])
        }
    },
    617: e => {
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

      function a(e, t, r) {
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

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function c(e, r, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || a, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(r);
        return l === Array.isArray(e) ? l ? u.arrayMerge(e, r, u) : function(e, t, r) {
          var a = {};
          return r.isMergeableObject(e) && o(e).forEach((function(t) {
            a[t] = n(e[t], r)
          })), o(t).forEach((function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && r.isMergeableObject(t[o]) ? a[o] = function(e, t) {
              if (!t.customMerge) return c;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : c
            }(o, r)(e[o], t[o], r) : a[o] = n(t[o], r))
          })), a
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
    }
  }
]);