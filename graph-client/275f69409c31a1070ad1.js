"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [824, 682, 195], {
    5824: (e, t, r) => {
      r.r(t), r.d(t, {
        gql: () => a.Ps,
        makeVar: () => n.QS,
        pingBearer: () => l.AJ,
        useApolloClient: () => c.useApolloClient,
        useBase: () => u.useBase,
        useCdn: () => u.useCdn,
        useMutateState: () => i.qs,
        useMutation: () => o.Db,
        useQuery: () => o.aM,
        useReactiveVar: () => s.l,
        useState: () => i.eJ,
        useUserBearerToken: () => l.u1,
        userBearerToken: () => l.vX,
        withReactiveState: () => p,
        withRockstarGraph: () => h
      });
      var a = r(4888),
        n = r(6674),
        s = r(3356),
        o = r(7941),
        i = r(3857),
        l = r(332),
        c = r(2682),
        u = r(2195),
        d = r(3322);
      const h = (e, t) => {
          let {
            env: r = "prod",
            typePolicies: a
          } = t;
          return function(t) {
            return (0, d.jsx)(c.RockstarGraphProvider, {
              typePolicies: a,
              graphOptions: {
                env: r,
                useGETForQueries: !0
              },
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        },
        p = (e, t) => {
          let {
            state: r
          } = t;
          return function(t) {
            return (0, d.jsx)(c.ReactiveStateProvider, {
              state: r ?? (0, n.QS)(null),
              children: (0, d.jsx)(e, {
                ...t
              })
            })
          }
        }
    },
    7941: (e, t, r) => {
      r.d(t, {
        UJ: () => m,
        Db: () => S,
        aM: () => v
      });
      var a = r(4736),
        n = r(7207),
        s = r(4039),
        o = r(951),
        i = r(3356),
        l = r(2560),
        c = r(7311),
        u = r.n(c),
        d = r(2195);
      const h = (e, t) => {
        const r = (0, i.l)(d.locale),
          n = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              ...t?.variables,
              locale: r
            }
          },
          {
            data: s,
            loading: o,
            error: c,
            ...h
          } = (0, l.a)(e, n);
        return (0, a.useEffect)((() => {
          if (s && n.setTitleDataPath) {
            const e = u().get(s, n.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, a.useEffect)((() => (n.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: o
        }), () => {
          n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [o]), (0, a.useEffect)((() => {
          if (n.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: o,
          error: c,
          data: s,
          ...h
        }
      };
      var p = r(3322);
      const g = (0, a.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, a.useContext)(g)(e, t),
        w = new Promise((e => {
          e()
        })),
        f = {
          cache: new n.h
        },
        x = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new s.f(f)
        }],
        P = (0, a.createContext)((() => x)),
        S = e => (0, a.useContext)(P)(e),
        m = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(P.Provider, {
            value: o.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    3857: (e, t, r) => {
      r.d(t, {
        Nj: () => u,
        eJ: () => i,
        qs: () => c
      });
      var a = r(3356),
        n = r(4736),
        s = r(3322);
      const o = (0, n.createContext)({}),
        i = () => (0, n.useContext)(o),
        l = (0, n.createContext)({}),
        c = () => (0, n.useContext)(l),
        u = e => {
          let {
            children: t,
            state: r
          } = e;
          (0, a.l)(r);
          const i = (0, n.useCallback)((e => {
            const t = {
              ...r(),
              ...e
            };
            r(t)
          }), [r]);
          return (0, s.jsx)(o.Provider, {
            value: r(),
            children: (0, s.jsx)(l.Provider, {
              value: i,
              children: t
            })
          })
        }
    },
    2322: (e, t, r) => {
      r.d(t, {
        X: () => f,
        x: () => w
      });
      var a = r(4736),
        n = r(7207),
        s = r(4039),
        o = r(4955),
        i = r(7941),
        l = r(332),
        c = r(5356),
        u = r(3386),
        d = r.n(u);
      var h = r(6594),
        p = r(9770);
      const g = (0, h.Nq)({
        sha256: p.JQ
      });
      var v = r(3322);
      const w = e => {
          let {
            graphOptions: t,
            typePolicies: r = {}
          } = e;
          const o = t?.env ? (e => {
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
            })(t?.env) : t?.uri,
            [i] = (0, a.useState)(new n.h({
              typePolicies: r
            })),
            u = g.concat(l.Vl.concat((e => (0, c.L)({
              ...e,
              fetch: d()
            }))({
              ...t,
              uri: o
            })));
          return new s.f({
            cache: i,
            link: u
          })
        },
        f = e => {
          let {
            children: t,
            graphOptions: r,
            typePolicies: a
          } = e;
          const n = w({
            graphOptions: r,
            typePolicies: a
          });
          return (0, v.jsx)(o.e, {
            client: n,
            children: (0, v.jsx)(i.UJ, {
              children: t
            })
          })
        }
    },
    332: (e, t, r) => {
      r.d(t, {
        AJ: () => i,
        Vl: () => l,
        u1: () => c,
        vX: () => o
      });
      var a = r(6674),
        n = r(3356),
        s = r(1938);
      const o = (0, a.QS)(null),
        i = async function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          try {
            const r = await fetch(e, {
                credentials: "include",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  forceUpdate: t
                })
              }),
              a = await r.json(),
              {
                tokenExpiresIn: n = null
              } = a;
            if (null !== n) {
              const t = Math.max(0, 1e3 * (n - 5));
              setTimeout((() => {
                i(e, !0)
              }), t)
            }
            return o(a.bearerToken ?? null), a
          } catch (e) {
            return o(!1), !1
          }
        }, l = (0, s.v)(((e, t) => {
          let {
            headers: r
          } = t;
          const a = o();
          return a ? {
            headers: {
              ...r,
              authorization: `Bearer ${a}`
            }
          } : null
        })), c = () => (0, n.l)(o)
    },
    2682: (e, t, r) => {
      r.r(t), r.d(t, {
        GraphOperationsProvider: () => a.UJ,
        ReactiveStateProvider: () => n.Nj,
        RockstarGraphProvider: () => s.X,
        useApolloClient: () => s.x
      });
      var a = r(7941),
        n = r(3857),
        s = r(2322)
    },
    2195: (e, t, r) => {
      r.r(t), r.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => s,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => o
      });
      var a = r(6674),
        n = r(3356);
      const s = (0, a.QS)(document.documentElement.lang),
        o = () => (0, n.l)(s),
        i = window?.env,
        l = (0, a.QS)({
          media: i?.cdn?.media,
          videos: i?.cdn?.videos
        }),
        c = () => (0, n.l)(l),
        u = document.currentScript,
        d = u?.src ? new URL(u.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${d}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, a.QS)(h),
        g = () => (0, n.l)(p)
    }
  }
]);