"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [18, 534, 941], {
    9018: (e, t, r) => {
      r.r(t), r.d(t, {
        gql: () => a.Ps,
        makeVar: () => n.QS,
        pingBearer: () => i.AJ,
        useApolloClient: () => c.useApolloClient,
        useBase: () => u.useBase,
        useCdn: () => u.useCdn,
        useMutateState: () => s.qs,
        useMutation: () => l.Db,
        useQuery: () => l.aM,
        useReactiveVar: () => o.l,
        useState: () => s.eJ,
        useUserBearerToken: () => i.u1,
        userBearerToken: () => i.vX,
        withReactiveState: () => h,
        withRockstarGraph: () => v
      });
      var a = r(7158),
        n = r(181),
        o = r(389),
        l = r(8914),
        s = r(2055),
        i = r(1e3),
        c = r(534),
        u = r(8941),
        d = r(3563);
      const v = (e, t) => {
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
        h = (e, t) => {
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
    8914: (e, t, r) => {
      r.d(t, {
        UJ: () => k,
        Db: () => f,
        aM: () => g
      });
      var a = r(4736),
        n = r(6129),
        o = r(1905),
        l = r(7449),
        s = r(389),
        i = r(198),
        c = r(4591),
        u = r.n(c),
        d = r(8941);
      const v = (e, t) => {
        const r = (0, s.l)(d.locale),
          n = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              ...null == t ? void 0 : t.variables,
              locale: r
            }
          },
          {
            data: o,
            loading: l,
            error: c,
            ...v
          } = (0, i.a)(e, n);
        return (0, a.useEffect)((() => {
          if (o && n.setTitleDataPath) {
            const e = u().get(o, n.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [o]), (0, a.useEffect)((() => (n.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: l
        }), () => {
          n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [l]), (0, a.useEffect)((() => {
          if (n.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: l,
          error: c,
          data: o,
          ...v
        }
      };
      var h = r(3563);
      const p = (0, a.createContext)((() => ({
          data: null
        }))),
        g = (e, t) => (0, a.useContext)(p)(e, t),
        w = new Promise((e => {
          e()
        })),
        P = {
          cache: new n.h
        },
        x = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(P)
        }],
        S = (0, a.createContext)((() => x)),
        f = e => (0, a.useContext)(S)(e),
        k = e => {
          let {
            children: t
          } = e;
          return (0, h.jsx)(S.Provider, {
            value: l.D,
            children: (0, h.jsx)(p.Provider, {
              value: v,
              children: t
            })
          })
        }
    },
    2055: (e, t, r) => {
      r.d(t, {
        Nj: () => u,
        eJ: () => s,
        qs: () => c
      });
      var a = r(389),
        n = r(4736),
        o = r(3563);
      const l = (0, n.createContext)({}),
        s = () => (0, n.useContext)(l),
        i = (0, n.createContext)({}),
        c = () => (0, n.useContext)(i),
        u = e => {
          let {
            children: t,
            state: r
          } = e;
          (0, a.l)(r);
          const s = (0, n.useCallback)((e => {
            const t = {
              ...r(),
              ...e
            };
            r(t)
          }), [r]);
          return (0, o.jsx)(l.Provider, {
            value: r(),
            children: (0, o.jsx)(i.Provider, {
              value: s,
              children: t
            })
          })
        }
    },
    6983: (e, t, r) => {
      r.d(t, {
        X: () => P,
        x: () => w
      });
      var a = r(4736),
        n = r(6129),
        o = r(1905),
        l = r(1769),
        s = r(8914),
        i = r(1e3),
        c = r(7704),
        u = r(5624),
        d = r.n(u);
      var v = r(8026),
        h = r(6531);
      const p = (0, v.Nq)({
        sha256: h.JQ
      });
      var g = r(3563);
      const w = e => {
          let {
            graphOptions: t,
            typePolicies: r = {}
          } = e;
          const l = null != t && t.env ? (e => {
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
            })(null == t ? void 0 : t.env) : null == t ? void 0 : t.uri,
            [s] = (0, a.useState)(new n.h({
              typePolicies: r
            })),
            u = p.concat(i.Vl.concat((e => (0, c.L)({
              ...e,
              fetch: d()
            }))({
              ...t,
              uri: l
            })));
          return new o.f({
            cache: s,
            link: u
          })
        },
        P = e => {
          let {
            children: t,
            graphOptions: r,
            typePolicies: a
          } = e;
          const n = w({
            graphOptions: r,
            typePolicies: a
          });
          return (0, g.jsx)(l.e, {
            client: n,
            children: (0, g.jsx)(s.UJ, {
              children: t
            })
          })
        }
    },
    1e3: (e, t, r) => {
      r.d(t, {
        AJ: () => s,
        Vl: () => i,
        u1: () => c,
        vX: () => l
      });
      var a = r(181),
        n = r(389),
        o = r(9471);
      const l = (0, a.QS)(null),
        s = async e => {
          const t = await fetch(e, {
              credentials: "include",
              method: "POST"
            }),
            r = await t.json();
          return l(r.bearerToken ?? null), r
        }, i = (0, o.v)(((e, t) => {
          let {
            headers: r
          } = t;
          const a = l();
          return a ? {
            headers: {
              ...r,
              authorization: `Bearer ${a}`
            }
          } : null
        })), c = () => (0, n.l)(l)
    },
    534: (e, t, r) => {
      r.r(t), r.d(t, {
        GraphOperationsProvider: () => a.UJ,
        ReactiveStateProvider: () => n.Nj,
        RockstarGraphProvider: () => o.X,
        useApolloClient: () => o.x
      });
      var a = r(8914),
        n = r(2055),
        o = r(6983)
    },
    8941: (e, t, r) => {
      r.r(t), r.d(t, {
        base: () => P,
        cdn: () => d,
        locale: () => o,
        useBase: () => x,
        useCdn: () => v,
        useLocale: () => l
      });
      var a = r(181),
        n = r(389);
      const o = (0, a.QS)(document.documentElement.lang),
        l = () => (0, n.l)(o);
      var s, i, c;
      const u = null === (s = window) || void 0 === s ? void 0 : s.env,
        d = (0, a.QS)({
          media: null == u || null === (i = u.cdn) || void 0 === i ? void 0 : i.media,
          videos: null == u || null === (c = u.cdn) || void 0 === c ? void 0 : c.videos
        }),
        v = () => (0, n.l)(d);
      var h;
      const p = document.currentScript,
        g = null != p && p.src ? new URL(p.src).origin : "";
      let w = (null === (h = document.getElementsByTagName("base")[0]) || void 0 === h ? void 0 : h.getAttribute("href")) ?? `${g}/`;
      w.endsWith("/") || (w = `${w}/`);
      const P = (0, a.QS)(w),
        x = () => (0, n.l)(P)
    }
  }
]);