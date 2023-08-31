"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [230, 792, 315], {
    3230: (e, t, n) => {
      n.r(t);
      var r = n(2670),
        a = n(170),
        s = n(781),
        i = n(7663),
        o = n(6160);
      const l = () => {
          const e = r.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
            {
              data: t
            } = (0, s.aM)(e, {
              variables: {
                limit: 15
              }
            });
          return t ? (0, o.jsxs)("div", {
            "data-testid": "test",
            children: [(0, o.jsx)("h1", {
              children: "Posts back from query:"
            }), t.posts.results?.map((e => (0, o.jsx)("div", {
              children: e.title
            }, e.id)))]
          }) : (0, o.jsx)("div", {
            "data-testid": "loading",
            children: "Loading..."
          })
        },
        c = e => {
          let {
            env: t
          } = e;
          return (0, o.jsxs)(i.X, {
            typePolicies: {},
            graphOptions: {
              env: t,
              useGETForQueries: !0
            },
            children: [(0, o.jsx)(l, {}), (0, o.jsx)(l, {}), (0, o.jsx)(l, {})]
          })
        },
        u = document.createElement("div");
      document.body.appendChild(u), (0, a.s)(u).render((0, o.jsx)(c, {
        env: "dev"
      }))
    },
    3330: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => g.X,
        gql: () => r.Ps,
        makeVar: () => a.QS,
        uriForGraphEnv: () => w,
        useApolloClient: () => g.x,
        useBase: () => k.useBase,
        useCdn: () => k.useCdn,
        useMutateState: () => h,
        useMutation: () => i.Db,
        useQuery: () => i.aM,
        useReactiveVar: () => s.l,
        useRockstarToken: () => v.XW,
        useRockstarTokenPing: () => v.cC,
        useRockstarTokenReactive: () => v.yx,
        useState: () => u,
        withHavingPingedBearer: () => x,
        withReactiveState: () => m,
        withRockstarGraph: () => P
      });
      var r = n(2670),
        a = n(474),
        s = n(2914),
        i = n(781),
        o = n(5843),
        l = n(6160);
      const c = (0, o.createContext)({}),
        u = () => (0, o.useContext)(c),
        d = (0, o.createContext)({}),
        h = () => (0, o.useContext)(d),
        p = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, s.l)(n);
          const r = (0, o.useCallback)((e => {
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
      var g = n(7663),
        v = n(3665),
        k = n(6315);
      const x = function(e) {
          return function(t) {
            const [n, r] = (0, o.useState)(!1), a = (0, v.cC)();
            return (0, o.useEffect)((() => {
              (async () => {
                await a(), r(!0)
              })()
            }), []), n ? (0, l.jsx)(e, {
              ...t
            }) : null
          }
        },
        P = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: r,
            token: s = (0, a.QS)(null),
            tokenPingExpires: i = (0, a.QS)(null),
            tokenPing: o = null
          } = t;
          return function(t) {
            return (0, l.jsx)(g.X, {
              typePolicies: r,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: s,
                tokenPing: o,
                tokenPingExpires: i
              },
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        m = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, l.jsx)(p, {
              state: n ?? (0, a.QS)(null),
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        w = e => {
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
    781: (e, t, n) => {
      n.d(t, {
        UJ: () => f,
        Db: () => w,
        aM: () => v
      });
      var r = n(5843),
        a = n(5579),
        s = n(9438),
        i = n(5403),
        o = n(2914),
        l = n(5130),
        c = n(3653),
        u = n.n(c),
        d = n(6315);
      const h = (e, t) => {
        const n = (0, o.l)(d.locale),
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
            data: s,
            loading: i,
            error: c,
            ...h
          } = (0, l.a)(e, a);
        return (0, r.useEffect)((() => {
          if (s && a.setTitleDataPath) {
            const e = u().get(s, a.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, r.useEffect)((() => (a.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          a.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, r.useEffect)((() => {
          if (a.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: s,
          ...h
        }
      };
      var p = n(6160);
      const g = (0, r.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, r.useContext)(g)(e, t),
        k = new Promise((e => {
          e()
        })),
        x = {
          cache: new a.h
        },
        P = [() => k, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new s.f(x)
        }],
        m = (0, r.createContext)((() => P)),
        w = e => (0, r.useContext)(m)(e),
        f = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(m.Provider, {
            value: i.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    7663: (e, t, n) => {
      n.d(t, {
        X: () => m,
        x: () => P
      });
      var r = n(5843),
        a = n(5579),
        s = n(9438),
        i = n(5894),
        o = n(781),
        l = n(3665),
        c = n(9877);
      var u = n(8365),
        d = n(8678),
        h = n.n(d);
      var p = n(9266),
        g = n(7294);
      const v = (0, p.Nq)({
        sha256: g.JQ
      });
      var k = n(3330),
        x = n(6160);
      const P = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const i = t?.env ? (0, k.uriForGraphEnv)(t?.env) : t?.uri,
            [o] = (0, r.useState)(new a.h({
              typePolicies: n
            })),
            l = v.concat((e => {
              let {
                token: t
              } = e;
              return (0, c.v)(((e, n) => {
                let {
                  headers: r
                } = n;
                const a = t?.() ?? null;
                return a ? {
                  headers: {
                    ...r,
                    authorization: `Bearer ${a}`
                  }
                } : null
              }))
            })({
              token: t?.token
            }).concat((e => (0, u.L)({
              ...e,
              fetch: h()
            }))({
              ...t,
              uri: i
            })));
          return new s.f({
            cache: o,
            link: l
          })
        },
        m = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const a = P({
            graphOptions: n,
            typePolicies: r
          });
          return (0, x.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, x.jsx)(i.e, {
              client: a,
              children: (0, x.jsx)(o.UJ, {
                children: t
              })
            })
          })
        }
    },
    3665: (e, t, n) => {
      n.d(t, {
        Fv: () => c,
        XW: () => u,
        cC: () => d,
        yx: () => l
      });
      var r = n(5843),
        a = n(474),
        s = n(2914);
      var i = n(6160);
      const o = (0, r.createContext)((0, a.QS)(null)),
        l = () => (0, r.useContext)(o),
        c = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: a
          } = e;
          return (0, i.jsx)(o.Provider, {
            value: [n, r, a],
            children: t
          })
        },
        u = () => {
          const [e] = l();
          return (0, s.l)(e)
        },
        d = () => {
          const [e, t, n] = l();
          return () => (async e => {
            let {
              url: t,
              token: n,
              tokenPingExpires: r
            } = e;
            try {
              const e = r?.() ?? 0,
                a = n?.() ?? null,
                s = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === a) return {
                bearerToken: a
              };
              if (s && a) return {
                bearerToken: a
              };
              const i = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await i.json(),
                {
                  tokenExpiresTime: l = null
                } = o;
              return null !== l && r?.(l), n(o.bearerToken ?? null), o
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
    6315: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => s,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => i
      });
      var r = n(474),
        a = n(2914);
      const s = (0, r.QS)(document.documentElement.lang),
        i = () => (0, a.l)(s),
        o = window?.env,
        l = (0, r.QS)({
          media: o?.cdn?.media,
          videos: o?.cdn?.videos
        }),
        c = () => (0, a.l)(l),
        u = document.currentScript,
        d = u?.src ? new URL(u.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${d}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, r.QS)(h),
        g = () => (0, a.l)(p)
    }
  }
]);