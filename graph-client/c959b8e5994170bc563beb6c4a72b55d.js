"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [741, 334, 739], {
    7741: (e, t, n) => {
      n.r(t);
      var r = n(6737),
        o = n(441),
        a = n(3121),
        i = n(5851),
        s = n(3705);
      const l = () => {
          const e = r.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
            {
              data: t
            } = (0, a.aM)(e, {
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
        c = e => {
          let {
            env: t
          } = e;
          return (0, s.jsxs)(i.X, {
            typePolicies: {},
            graphOptions: {
              env: t,
              useGETForQueries: !0
            },
            children: [(0, s.jsx)(l, {}), (0, s.jsx)(l, {}), (0, s.jsx)(l, {})]
          })
        },
        u = document.createElement("div");
      document.body.appendChild(u), (0, o.s)(u).render((0, s.jsx)(c, {
        env: "dev"
      }))
    },
    6967: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => g.X,
        gql: () => r.Ps,
        makeVar: () => o.QS,
        makeVarNamespace: () => x,
        uriForGraphEnv: () => j,
        useApolloClient: () => g.x,
        useBase: () => w.useBase,
        useCdn: () => w.useCdn,
        useMutateState: () => p,
        useMutation: () => i.Db,
        useQuery: () => i.aM,
        useReactiveVar: () => a.l,
        useRockstarToken: () => k.XW,
        useRockstarTokenPing: () => k.cC,
        useRockstarTokenReactive: () => k.yx,
        useState: () => u,
        withHavingPingedBearer: () => v,
        withReactiveState: () => f,
        withRockstarGraph: () => m
      });
      var r = n(6737),
        o = n(9551),
        a = n(2997),
        i = n(3121),
        s = n(927),
        l = n(3705);
      const c = (0, s.createContext)({}),
        u = () => (0, s.useContext)(c),
        d = (0, s.createContext)({}),
        p = () => (0, s.useContext)(d),
        h = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, a.l)(n);
          const r = (0, s.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, l.jsx)(c.Provider, {
            value: n(),
            children: (0, l.jsx)(d.Provider, {
              value: r,
              children: t
            })
          })
        };
      var g = n(5851),
        k = n(405),
        w = n(8739);
      const v = function(e) {
          return function(t) {
            const [n, r] = (0, s.useState)(!1), o = (0, k.cC)();
            return (0, s.useEffect)((() => {
              (async () => {
                await o(), r(!0)
              })()
            }), []), n ? (0, l.jsx)(e, {
              ...t
            }) : null
          }
        },
        x = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, r) => {
            const a = window?.[e]?.[t]?.[n] ?? (0, o.QS)(r);
            return window[e][t][n] = a, a
          })(t, e)
        },
        P = x("graph-with-rs-graph"),
        m = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: r,
            token: o = P("token", null),
            tokenPingExpires: a = P("tokenPingExpires", null),
            tokenPing: i = P("token", null)
          } = t;
          return function(t) {
            return (0, l.jsx)(g.X, {
              typePolicies: r,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPing: i,
                tokenPingExpires: a
              },
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        E = x("graph-hoc"),
        f = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, l.jsx)(h, {
              state: n ?? E("state", null),
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        j = e => {
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
    3121: (e, t, n) => {
      n.d(t, {
        UJ: () => P,
        Db: () => E,
        aM: () => m
      });
      var r = n(927),
        o = n(5672),
        a = n(2213),
        i = n(895),
        s = n(2997),
        l = n(7605),
        c = n(5370),
        u = n.n(c),
        d = n(8739);
      const p = (e, t) => {
        const n = (0, s.l)(d.locale),
          o = {
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
            data: a,
            loading: i,
            error: c,
            ...p
          } = (0, l.a)(e, o);
        return (0, r.useEffect)((() => {
          if (a && o.setTitleDataPath) {
            const e = u().get(a, o.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [a]), (0, r.useEffect)((() => (o.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, r.useEffect)((() => {
          if (o.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: a,
          ...p
        }
      };
      var h = n(3705);
      const g = (0, r.createContext)((() => ({
          data: null
        }))),
        k = new Promise((e => {
          e()
        })),
        w = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new o.h)
        },
        v = [() => k, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new a.f(w))
        }],
        x = (0, r.createContext)((() => v)),
        P = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, h.jsx)(x.Provider, {
            value: i.D,
            children: (0, h.jsx)(g.Provider, {
              value: p,
              children: t
            })
          })
        }),
        m = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, r.useContext)(g)(e, t)),
        E = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, r.useContext)(x)(e))
    },
    5851: (e, t, n) => {
      n.d(t, {
        X: () => P,
        x: () => x
      });
      var r = n(927),
        o = n(5672),
        a = n(2213),
        i = n(588),
        s = n(3121),
        l = n(405),
        c = n(5767);
      var u = n(2495),
        d = n(3421),
        p = n.n(d);
      var h = n(3843),
        g = n(7056);
      const k = (0, h.Nq)({
        sha256: g.JQ
      });
      var w = n(6967),
        v = n(3705);
      const x = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const i = t?.env ? (0, w.uriForGraphEnv)(t?.env) : t?.uri,
            [s] = (0, r.useState)(new o.h({
              typePolicies: n
            })),
            l = k.concat((e => {
              let {
                token: t
              } = e;
              return (0, c.v)(((e, n) => {
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
              }))
            })({
              token: t?.token
            }).concat((e => (0, u.L)({
              ...e,
              fetch: p()
            }))({
              ...t,
              uri: i
            })));
          return new a.f({
            cache: s,
            link: l
          })
        },
        P = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const o = x({
            graphOptions: n,
            typePolicies: r
          });
          return (0, v.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, v.jsx)(i.e, {
              client: o,
              children: (0, v.jsx)(s.UJ, {
                children: t
              })
            })
          })
        }
    },
    405: (e, t, n) => {
      n.d(t, {
        Fv: () => u,
        XW: () => p,
        cC: () => h,
        yx: () => d
      });
      var r = n(927),
        o = n(9551),
        a = n(2997);
      var i = n(3705);
      const s = "graph-token-context",
        l = {
          token: (0, o.QS)(null),
          tokenPing: (0, o.QS)("tokenPing"),
          tokenPingExpires: (0, o.QS)(100)
        },
        c = window?.[s] ?? (window[s] = (0, r.createContext)(l)),
        u = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: o
          } = e;
          return (0, i.jsx)(c.Provider, {
            value: {
              token: n,
              tokenPing: r,
              tokenPingExpires: o
            },
            children: t
          })
        },
        d = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, r.useContext)(c);
          return [e, t, n]
        },
        p = () => {
          const [e] = d();
          return (0, a.l)(e)
        },
        h = () => {
          const [e, t, n] = d();
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
                  tokenExpiresTime: l = null
                } = s;
              return null !== l && r?.(l), n(s.bearerToken ?? null), s
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
    8739: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => h,
        cdn: () => l,
        locale: () => a,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => i
      });
      var r = n(9551),
        o = n(2997);
      const a = (0, r.QS)(document.documentElement.lang),
        i = () => (0, o.l)(a),
        s = window?.env,
        l = (0, r.QS)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        c = () => (0, o.l)(l),
        u = document.currentScript,
        d = u?.src ? new URL(u.src).origin : "";
      let p = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${d}/`;
      p.endsWith("/") || (p = `${p}/`);
      const h = (0, r.QS)(p),
        g = () => (0, o.l)(h)
    }
  }
]);