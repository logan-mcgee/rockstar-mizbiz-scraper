! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8ef64432-9605-418f-85cd-7636b017aca5", e._sentryDebugIdIdentifier = "sentry-dbid-8ef64432-9605-418f-85cd-7636b017aca5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [4, 108], {
    6516: (e, t, n) => {
      var r = n(1403),
        o = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, u = {},
          c = null,
          l = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !s.hasOwnProperty(r) && (u[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === u[r] && (u[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: l,
          props: u,
          _owner: i.current
        }
      }
      t.jsx = u, t.jsxs = u
    },
    6632: (e, t, n) => {
      e.exports = n(6516)
    },
    6710: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => p.N,
        gql: () => r.gql,
        makeVar: () => r.makeVar,
        makeVarNamespace: () => w,
        uriForGraphEnv: () => E,
        useApolloClient: () => p.m,
        useBase: () => h.useBase,
        useCdn: () => h.useCdn,
        useLazyQuery: () => o._l,
        useMutateState: () => l,
        useMutation: () => o.n_,
        useQuery: () => o.IT,
        useReactiveVar: () => r.useReactiveVar,
        useRockstarToken: () => f.e9,
        useRockstarTokenPing: () => f.Es,
        useRockstarTokenReactive: () => f.bD,
        useState: () => u,
        withHavingPingedBearer: () => g,
        withReactiveState: () => b,
        withRockstarGraph: () => v
      });
      var r = n(7264),
        o = n(336),
        a = n(1403),
        i = n(6632);
      const s = (0, a.createContext)({}),
        u = () => (0, a.useContext)(s),
        c = (0, a.createContext)({}),
        l = () => (0, a.useContext)(c),
        d = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, r.useReactiveVar)(n);
          const o = (0, a.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, i.jsx)(s.Provider, {
            value: n(),
            children: (0, i.jsx)(c.Provider, {
              value: o,
              children: t
            })
          })
        };
      var p = n(4403),
        f = n(2889),
        h = n(3108);
      const g = function(e) {
          return function(t) {
            const [n, r] = (0, a.useState)(!1), o = (0, f.Es)();
            return (0, a.useEffect)((() => {
              (async () => {
                await o(), r(!0)
              })()
            }), []), n ? (0, i.jsx)(e, {
              ...t
            }) : null
          }
        },
        w = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, o) => {
            const a = window?.[e]?.[t]?.[n] ?? (0, r.makeVar)(o);
            return window[e][t][n] = a, a
          })(t, e)
        },
        k = w("graph-with-rs-graph"),
        v = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: r,
            token: o = k("token", null),
            tokenPingExpires: a = k("tokenPingExpires", null),
            tokenPing: s = k("token", null)
          } = t;
          return function(t) {
            return (0, i.jsx)(p.N, {
              typePolicies: r,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPing: s,
                tokenPingExpires: a
              },
              children: (0, i.jsx)(e, {
                ...t
              })
            })
          }
        },
        y = w("graph-hoc"),
        b = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, i.jsx)(d, {
              state: n ?? y("state", null),
              children: (0, i.jsx)(e, {
                ...t
              })
            })
          }
        },
        E = e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
          let t = "";
          switch (e) {
            case "prod":
              t = "graph";
              break;
            case "prod-int":
              t = "graph-int";
              break;
            default:
              t = `${e}-graph`
          }
          return `https://${t}.rockstargames.com?origin=${document.location.origin}`
        }
    },
    336: (e, t, n) => {
      n.d(t, {
        _y: () => g,
        _l: () => o.useLazyQuery,
        n_: () => k,
        IT: () => w
      });
      var r = n(1403),
        o = n(7264),
        a = n(4252),
        i = n.n(a),
        s = n(3108);
      const u = (e, t) => {
        const n = (0, o.useReactiveVar)(s.locale),
          a = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              locale: n,
              ...t?.variables
            }
          },
          {
            data: u,
            loading: c,
            error: l,
            ...d
          } = (0, o.useQuery)(e, a);
        return (0, r.useEffect)((() => {
          if (u && a.setTitleDataPath) {
            const e = i().get(u, a.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [u]), (0, r.useEffect)((() => (a.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: c
        }), () => {
          a.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [c]), (0, r.useEffect)((() => {
          if (a.autoSetError && l) throw new Error(String(l))
        }), [l]), {
          loading: c,
          error: l,
          data: u,
          ...d
        }
      };
      var c = n(6632);
      const l = (0, r.createContext)((() => ({
          data: null
        }))),
        d = new Promise((e => {
          e()
        })),
        p = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new o.InMemoryCache)
        },
        f = [() => d, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new o.ApolloClient(p))
        }],
        h = (0, r.createContext)((() => f)),
        g = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, c.jsx)(h.Provider, {
            value: o.useMutation,
            children: (0, c.jsx)(l.Provider, {
              value: u,
              children: t
            })
          })
        }),
        w = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, r.useContext)(l)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, r.useContext)(h)(e))
    },
    4403: (e, t, n) => {
      n.d(t, {
        N: () => m,
        m: () => _
      });
      var r = n(1403),
        o = n(7264),
        a = n(336),
        i = n(2889),
        s = n(226),
        u = n(1622),
        c = n(4984);
      var l = n(7124),
        d = n.n(l);
      var p, f = n(7860),
        h = n(4512),
        g = n(8226),
        w = n(3851);

      function k(e) {
        var t = Object.create(null),
          n = Object.create(null);
        return (0, g.E)(e) && e.forEach((function(e) {
          var r;
          t[e.message] = e, "string" == typeof(null === (r = e.extensions) || void 0 === r ? void 0 : r.code) && (n[e.extensions.code] = e)
        })), {
          persistedQueryNotSupported: !(!t.PersistedQueryNotSupported && !n.PERSISTED_QUERY_NOT_SUPPORTED),
          persistedQueryNotFound: !(!t.PersistedQueryNotFound && !n.PERSISTED_QUERY_NOT_FOUND)
        }
      }
      p || (p = {});
      var v = {
        disable: function(e) {
          return e.meta.persistedQueryNotSupported
        },
        retry: function(e) {
          var t = e.meta;
          return t.persistedQueryNotSupported || t.persistedQueryNotFound
        },
        useGETForHashedQueries: !1
      };
      const y = function(e) {
        var t = new WeakMap;
        __DEV__ ? (0, f.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 'Missing/invalid "sha256" or "generateHash" function. Please configure one using the "createPersistedQueryLink(options)" options parameter.') : (0, f.V1)(e && ("function" == typeof e.sha256 || "function" == typeof e.generateHash), 25);
        var n = (0, w.o)(v, e),
          r = n.sha256,
          o = n.generateHash,
          a = void 0 === o ? function(e) {
            return Promise.resolve(r((0, h.y)(e)))
          } : o,
          i = n.disable,
          l = n.retry,
          d = n.useGETForHashedQueries,
          p = !0,
          y = function(e) {
            return new Promise((function(t) {
              return t(a(e))
            }))
          };
        return new u.C((function(e, n) {
          __DEV__ ? (0, f.V1)(n, "PersistedQueryLink cannot be the last link in the chain.") : (0, f.V1)(n, 26);
          var r = e.query;
          return new c.c((function(o) {
            var a, u, c = !1,
              f = !1,
              h = function(t, r) {
                var o = t.response,
                  s = t.networkError;
                if (!c && (o && o.errors || s)) {
                  c = !0;
                  var d = [],
                    h = o && o.errors;
                  (0, g.E)(h) && d.push.apply(d, h);
                  var v = void 0;
                  "string" != typeof(null == s ? void 0 : s.result) && (v = s && s.result && s.result.errors), (0, g.E)(v) && d.push.apply(d, v);
                  var y = {
                    response: o,
                    networkError: s,
                    operation: e,
                    graphQLErrors: (0, g.E)(d) ? d : void 0,
                    meta: k(d)
                  };
                  if (p = !i(y), l(y)) return a && a.unsubscribe(), e.setContext({
                    http: {
                      includeQuery: !0,
                      includeExtensions: p
                    },
                    fetchOptions: {
                      method: "POST"
                    }
                  }), f && e.setContext({
                    fetchOptions: u
                  }), void(a = n(e).subscribe(w))
                }
                r()
              },
              w = {
                next: function(e) {
                  h({
                    response: e
                  }, (function() {
                    return o.next(e)
                  }))
                },
                error: function(e) {
                  h({
                    networkError: e
                  }, (function() {
                    return o.error(e)
                  }))
                },
                complete: o.complete.bind(o)
              };
            return e.setContext({
                http: {
                  includeQuery: !p,
                  includeExtensions: p
                }
              }), d && p && ! function(e) {
                return e.query.definitions.some((function(e) {
                  return "OperationDefinition" === e.kind && "mutation" === e.operation
                }))
              }(e) && (e.setContext((function(e) {
                var t = e.fetchOptions,
                  n = void 0 === t ? {} : t;
                return u = n, {
                  fetchOptions: (0, s.Cl)((0, s.Cl)({}, n), {
                    method: "GET"
                  })
                }
              })), f = !0), p ? function(e) {
                if (!e || "object" != typeof e) return y(e);
                var n = t.get(e);
                return n || t.set(e, n = y(e)), n
              }(r).then((function(t) {
                e.extensions.persistedQuery = {
                  version: 1,
                  sha256Hash: t
                }, a = n(e).subscribe(w)
              })).catch(o.error.bind(o)) : a = n(e).subscribe(w),
              function() {
                a && a.unsubscribe()
              }
          }))
        }))
      }({
        sha256: n(4686).sha256
      });
      var b = n(6710),
        E = n(6632);
      const _ = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const a = t?.env ? (0, b.uriForGraphEnv)(t?.env) : t?.uri,
            i = {
              ...t,
              uri: a
            },
            [l] = (0, r.useState)(new o.InMemoryCache({
              typePolicies: n
            })),
            p = y.concat((e => {
              let {
                token: t
              } = e;
              return n = (e, n) => {
                let {
                  headers: r
                } = n;
                const o = t?.() ?? null;
                return o ? {
                  headers: {
                    ...r,
                    authorization: `Bearer ${o}`
                  }
                } : null
              }, new u.C((function(e, t) {
                var r = (0, s.Tt)(e, []);
                return new c.c((function(o) {
                  var a, i = !1;
                  return Promise.resolve(r).then((function(t) {
                      return n(0, e.getContext())
                    })).then(e.setContext).then((function() {
                      i || (a = t(e).subscribe({
                        next: o.next.bind(o),
                        error: o.error.bind(o),
                        complete: o.complete.bind(o)
                      }))
                    })).catch(o.error.bind(o)),
                    function() {
                      i = !0, a && a.unsubscribe()
                    }
                }))
              }));
              var n
            })({
              token: t?.token
            }).concat((e => (0, o.createHttpLink)({
              ...e,
              fetch: d()
            }))(i)));
          return new o.ApolloClient({
            cache: l,
            link: p
          })
        },
        m = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const s = _({
            graphOptions: n,
            typePolicies: r
          });
          return (0, E.jsx)(i.ec, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, E.jsx)(o.ApolloProvider, {
              client: s,
              children: (0, E.jsx)(a._y, {
                children: t
              })
            })
          })
        }
    },
    2889: (e, t, n) => {
      n.d(t, {
        ec: () => c,
        e9: () => d,
        Es: () => p,
        bD: () => l
      });
      var r = n(1403),
        o = n(7264);
      var a = n(6632);
      const i = "graph-token-context",
        s = {
          token: (0, o.makeVar)(null),
          tokenPing: (0, o.makeVar)("tokenPing"),
          tokenPingExpires: (0, o.makeVar)(100)
        },
        u = window?.[i] ?? (window[i] = (0, r.createContext)(s)),
        c = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: o
          } = e;
          return (0, a.jsx)(u.Provider, {
            value: {
              token: n,
              tokenPing: r,
              tokenPingExpires: o
            },
            children: t
          })
        },
        l = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, r.useContext)(u);
          return [e, t, n]
        },
        d = () => {
          const [e] = l();
          return (0, o.useReactiveVar)(e)
        },
        p = () => {
          const [e, t, n] = l();
          return () => (async e => {
            let {
              url: t,
              token: n,
              tokenPingExpires: r
            } = e;
            const o = t?.();
            try {
              const e = r?.() ?? 0,
                t = n?.() ?? null,
                a = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === t) return {
                bearerToken: t
              };
              if (a && t) return {
                bearerToken: t
              };
              const i = await fetch(o, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await i.json(),
                {
                  tokenExpiresTime: u = null
                } = s;
              return null !== u && r?.(u), n(s.bearerToken ?? null), s
            } catch (e) {
              return n(!1), !1
            }
          })({
            url: t,
            token: e,
            tokenPingExpires: n
          })
        }
    },
    3108: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => p,
        cdn: () => s,
        locale: () => o,
        useBase: () => f,
        useCdn: () => u,
        useLocale: () => a
      });
      var r = n(7264);
      const o = (0, r.makeVar)(document.documentElement.lang),
        a = () => (0, r.useReactiveVar)(o),
        i = window?.env,
        s = (0, r.makeVar)({
          media: i?.cdn?.media,
          videos: i?.cdn?.videos
        }),
        u = () => (0, r.useReactiveVar)(s),
        c = document.currentScript,
        l = c?.src ? new URL(c.src).origin : "";
      let d = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${l}/`;
      d.endsWith("/") || (d = `${d}/`);
      const p = (0, r.makeVar)(d),
        f = () => (0, r.useReactiveVar)(p)
    }
  }
]);