! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cade2709-f481-4cd2-810a-4ac46dd5b151", e._sentryDebugIdIdentifier = "sentry-dbid-cade2709-f481-4cd2-810a-4ac46dd5b151")
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
  [930, 4, 108], {
    1190: (e, t, n) => {
      var r = n(9493);
      t.H = r.createRoot, r.hydrateRoot
    },
    6516: (e, t, n) => {
      var r = n(1403),
        o = Symbol.for("react.element"),
        i = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, u = {},
          l = null,
          c = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (u[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === u[r] && (u[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: u,
          _owner: a.current
        }
      }
      t.jsx = u, t.jsxs = u
    },
    6632: (e, t, n) => {
      e.exports = n(6516)
    },
    2930: (e, t, n) => {
      n.r(t);
      var r = n(7264),
        o = n(1190),
        i = n(336),
        a = n(4403),
        s = n(6632);
      const u = () => {
          const e = r.gql`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
            {
              data: t
            } = (0, i.IT)(e, {
              variables: {
                limit: 15
              }
            });
          return t ? (0, s.jsxs)("div", {
            "data-testid": "test",
            children: [(0, s.jsx)("h1", {
              children: "Posts back from query:"
            }), t.posts.results?.map((e => (0, s.jsx)("div", {
              children: e.title
            }, e.id)))]
          }) : (0, s.jsx)("div", {
            "data-testid": "loading",
            children: "Loading..."
          })
        },
        l = e => {
          let {
            env: t
          } = e;
          return (0, s.jsxs)(a.N, {
            typePolicies: {},
            graphOptions: {
              env: t,
              useGETForQueries: !0
            },
            children: [(0, s.jsx)(u, {}), (0, s.jsx)(u, {}), (0, s.jsx)(u, {})]
          })
        },
        c = document.createElement("div");
      document.body.appendChild(c), (0, o.H)(c).render((0, s.jsx)(l, {
        env: "dev"
      }))
    },
    6710: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => p.N,
        gql: () => r.gql,
        makeVar: () => r.makeVar,
        makeVarNamespace: () => v,
        uriForGraphEnv: () => m,
        useApolloClient: () => p.m,
        useBase: () => h.useBase,
        useCdn: () => h.useCdn,
        useMutateState: () => c,
        useMutation: () => o.n_,
        useQuery: () => o.IT,
        useReactiveVar: () => r.useReactiveVar,
        useRockstarToken: () => f.e9,
        useRockstarTokenPing: () => f.Es,
        useRockstarTokenReactive: () => f.bD,
        useState: () => u,
        withHavingPingedBearer: () => g,
        withReactiveState: () => b,
        withRockstarGraph: () => k
      });
      var r = n(7264),
        o = n(336),
        i = n(1403),
        a = n(6632);
      const s = (0, i.createContext)({}),
        u = () => (0, i.useContext)(s),
        l = (0, i.createContext)({}),
        c = () => (0, i.useContext)(l),
        d = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, r.useReactiveVar)(n);
          const o = (0, i.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, a.jsx)(s.Provider, {
            value: n(),
            children: (0, a.jsx)(l.Provider, {
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
            const [n, r] = (0, i.useState)(!1), o = (0, f.Es)();
            return (0, i.useEffect)((() => {
              (async () => {
                await o(), r(!0)
              })()
            }), []), n ? (0, a.jsx)(e, {
              ...t
            }) : null
          }
        },
        v = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, o) => {
            const i = window?.[e]?.[t]?.[n] ?? (0, r.makeVar)(o);
            return window[e][t][n] = i, i
          })(t, e)
        },
        w = v("graph-with-rs-graph"),
        k = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: r,
            token: o = w("token", null),
            tokenPingExpires: i = w("tokenPingExpires", null),
            tokenPing: s = w("token", null)
          } = t;
          return function(t) {
            return (0, a.jsx)(p.N, {
              typePolicies: r,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPing: s,
                tokenPingExpires: i
              },
              children: (0, a.jsx)(e, {
                ...t
              })
            })
          }
        },
        y = v("graph-hoc"),
        b = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, a.jsx)(d, {
              state: n ?? y("state", null),
              children: (0, a.jsx)(e, {
                ...t
              })
            })
          }
        },
        m = e => {
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
        n_: () => w,
        IT: () => v
      });
      var r = n(1403),
        o = n(7264),
        i = n(4252),
        a = n.n(i),
        s = n(3108);
      const u = (e, t) => {
        const n = (0, o.useReactiveVar)(s.locale),
          i = {
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
            loading: l,
            error: c,
            ...d
          } = (0, o.useQuery)(e, i);
        return (0, r.useEffect)((() => {
          if (u && i.setTitleDataPath) {
            const e = a().get(u, i.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [u]), (0, r.useEffect)((() => (i.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: l
        }), () => {
          i.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [l]), (0, r.useEffect)((() => {
          if (i.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: l,
          error: c,
          data: u,
          ...d
        }
      };
      var l = n(6632);
      const c = (0, r.createContext)((() => ({
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
          return (0, l.jsx)(h.Provider, {
            value: o.useMutation,
            children: (0, l.jsx)(c.Provider, {
              value: u,
              children: t
            })
          })
        }),
        v = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, r.useContext)(c)(e, t)),
        w = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, r.useContext)(h)(e))
    },
    4403: (e, t, n) => {
      n.d(t, {
        N: () => x,
        m: () => E
      });
      var r = n(1403),
        o = n(7264),
        i = n(336),
        a = n(2889),
        s = n(226),
        u = n(1622),
        l = n(4984);
      var c = n(7124),
        d = n.n(c);
      var p, f = n(7860),
        h = n(4512),
        g = n(8226),
        v = n(3851);

      function w(e) {
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
      var k = {
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
        var n = (0, v.o)(k, e),
          r = n.sha256,
          o = n.generateHash,
          i = void 0 === o ? function(e) {
            return Promise.resolve(r((0, h.y)(e)))
          } : o,
          a = n.disable,
          c = n.retry,
          d = n.useGETForHashedQueries,
          p = !0,
          y = function(e) {
            return new Promise((function(t) {
              return t(i(e))
            }))
          };
        return new u.C((function(e, n) {
          __DEV__ ? (0, f.V1)(n, "PersistedQueryLink cannot be the last link in the chain.") : (0, f.V1)(n, 26);
          var r = e.query;
          return new l.c((function(o) {
            var i, u, l = !1,
              f = !1,
              h = function(t, r) {
                var o = t.response,
                  s = t.networkError;
                if (!l && (o && o.errors || s)) {
                  l = !0;
                  var d = [],
                    h = o && o.errors;
                  (0, g.E)(h) && d.push.apply(d, h);
                  var k = void 0;
                  "string" != typeof(null == s ? void 0 : s.result) && (k = s && s.result && s.result.errors), (0, g.E)(k) && d.push.apply(d, k);
                  var y = {
                    response: o,
                    networkError: s,
                    operation: e,
                    graphQLErrors: (0, g.E)(d) ? d : void 0,
                    meta: w(d)
                  };
                  if (p = !a(y), c(y)) return i && i.unsubscribe(), e.setContext({
                    http: {
                      includeQuery: !0,
                      includeExtensions: p
                    },
                    fetchOptions: {
                      method: "POST"
                    }
                  }), f && e.setContext({
                    fetchOptions: u
                  }), void(i = n(e).subscribe(v))
                }
                r()
              },
              v = {
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
                }, i = n(e).subscribe(v)
              })).catch(o.error.bind(o)) : i = n(e).subscribe(v),
              function() {
                i && i.unsubscribe()
              }
          }))
        }))
      }({
        sha256: n(4686).sha256
      });
      var b = n(6710),
        m = n(6632);
      const E = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const i = t?.env ? (0, b.uriForGraphEnv)(t?.env) : t?.uri,
            a = {
              ...t,
              uri: i
            },
            [c] = (0, r.useState)(new o.InMemoryCache({
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
                return new l.c((function(o) {
                  var i, a = !1;
                  return Promise.resolve(r).then((function(t) {
                      return n(0, e.getContext())
                    })).then(e.setContext).then((function() {
                      a || (i = t(e).subscribe({
                        next: o.next.bind(o),
                        error: o.error.bind(o),
                        complete: o.complete.bind(o)
                      }))
                    })).catch(o.error.bind(o)),
                    function() {
                      a = !0, i && i.unsubscribe()
                    }
                }))
              }));
              var n
            })({
              token: t?.token
            }).concat((e => (0, o.createHttpLink)({
              ...e,
              fetch: d()
            }))(a)));
          return new o.ApolloClient({
            cache: c,
            link: p
          })
        },
        x = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const s = E({
            graphOptions: n,
            typePolicies: r
          });
          return (0, m.jsx)(a.ec, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, m.jsx)(o.ApolloProvider, {
              client: s,
              children: (0, m.jsx)(i._y, {
                children: t
              })
            })
          })
        }
    },
    2889: (e, t, n) => {
      n.d(t, {
        ec: () => l,
        e9: () => d,
        Es: () => p,
        bD: () => c
      });
      var r = n(1403),
        o = n(7264);
      var i = n(6632);
      const a = "graph-token-context",
        s = {
          token: (0, o.makeVar)(null),
          tokenPing: (0, o.makeVar)("tokenPing"),
          tokenPingExpires: (0, o.makeVar)(100)
        },
        u = window?.[a] ?? (window[a] = (0, r.createContext)(s)),
        l = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: o
          } = e;
          return (0, i.jsx)(u.Provider, {
            value: {
              token: n,
              tokenPing: r,
              tokenPingExpires: o
            },
            children: t
          })
        },
        c = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, r.useContext)(u);
          return [e, t, n]
        },
        d = () => {
          const [e] = c();
          return (0, o.useReactiveVar)(e)
        },
        p = () => {
          const [e, t, n] = c();
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
                i = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === t) return {
                bearerToken: t
              };
              if (i && t) return {
                bearerToken: t
              };
              const a = await fetch(o, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await a.json(),
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
        useLocale: () => i
      });
      var r = n(7264);
      const o = (0, r.makeVar)(document.documentElement.lang),
        i = () => (0, r.useReactiveVar)(o),
        a = window?.env,
        s = (0, r.makeVar)({
          media: a?.cdn?.media,
          videos: a?.cdn?.videos
        }),
        u = () => (0, r.useReactiveVar)(s),
        l = document.currentScript,
        c = l?.src ? new URL(l.src).origin : "";
      let d = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${c}/`;
      d.endsWith("/") || (d = `${d}/`);
      const p = (0, r.makeVar)(d),
        f = () => (0, r.useReactiveVar)(p)
    }
  }
]);