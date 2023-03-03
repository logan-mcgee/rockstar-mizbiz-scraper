"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [140, 276], {
    3081: (e, t, a) => {
      a.d(t, {
        UJ: () => S,
        Db: () => P,
        aM: () => v
      });
      var r = a(4736),
        n = a(9286),
        o = a(6623),
        s = a(1056),
        i = a(9830),
        l = a(777),
        c = a(735),
        d = a.n(c),
        u = a(9276);
      const h = (e, t) => {
        const a = (0, i.l)(u.locale),
          n = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              ...t?.variables,
              locale: a
            }
          },
          {
            data: o,
            loading: s,
            error: c,
            ...h
          } = (0, l.a)(e, n);
        return (0, r.useEffect)((() => {
          if (o && n.setTitleDataPath) {
            const e = d().get(o, n.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [o]), (0, r.useEffect)((() => (n.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: s
        }), () => {
          n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [s]), (0, r.useEffect)((() => {
          if (n.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: s,
          error: c,
          data: o,
          ...h
        }
      };
      var p = a(5668);
      const g = (0, r.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, r.useContext)(g)(e, t),
        w = new Promise((e => {
          e()
        })),
        f = {
          cache: new n.h
        },
        m = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(f)
        }],
        x = (0, r.createContext)((() => m)),
        P = e => (0, r.useContext)(x)(e),
        S = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(x.Provider, {
            value: s.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    3841: (e, t, a) => {
      a.d(t, {
        Nj: () => d,
        eJ: () => i,
        qs: () => c
      });
      var r = a(9830),
        n = a(4736),
        o = a(5668);
      const s = (0, n.createContext)({}),
        i = () => (0, n.useContext)(s),
        l = (0, n.createContext)({}),
        c = () => (0, n.useContext)(l),
        d = e => {
          let {
            children: t,
            state: a
          } = e;
          (0, r.l)(a);
          const i = (0, n.useCallback)((e => {
            const t = {
              ...a(),
              ...e
            };
            a(t)
          }), [a]);
          return (0, o.jsx)(s.Provider, {
            value: a(),
            children: (0, o.jsx)(l.Provider, {
              value: i,
              children: t
            })
          })
        }
    },
    2425: (e, t, a) => {
      a.d(t, {
        X: () => f,
        x: () => w
      });
      var r = a(4736),
        n = a(9286),
        o = a(6623),
        s = a(5877),
        i = a(3081),
        l = a(9792),
        c = a(5662),
        d = a(9659),
        u = a.n(d);
      var h = a(8328),
        p = a(7313);
      const g = (0, h.Nq)({
        sha256: p.JQ
      });
      var v = a(5668);
      const w = e => {
          let {
            graphOptions: t,
            typePolicies: a = {}
          } = e;
          const s = t?.env ? (e => {
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
            [i] = (0, r.useState)(new n.h({
              typePolicies: a
            })),
            d = g.concat(l.Vl.concat((e => (0, c.L)({
              ...e,
              fetch: u()
            }))({
              ...t,
              uri: s
            })));
          return new o.f({
            cache: i,
            link: d
          })
        },
        f = e => {
          let {
            children: t,
            graphOptions: a,
            typePolicies: r
          } = e;
          const n = w({
            graphOptions: a,
            typePolicies: r
          });
          return (0, v.jsx)(s.e, {
            client: n,
            children: (0, v.jsx)(i.UJ, {
              children: t
            })
          })
        }
    },
    9792: (e, t, a) => {
      a.d(t, {
        AJ: () => i,
        Vl: () => l,
        u1: () => c,
        vX: () => s
      });
      var r = a(4938),
        n = a(9830),
        o = a(9287);
      const s = (0, r.QS)(null),
        i = async function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          try {
            const a = await fetch(e, {
                credentials: "include",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  forceUpdate: t
                })
              }),
              r = await a.json();
            return s(r.bearerToken ?? null), r
          } catch (e) {
            return s(!1), !1
          }
        }, l = (0, o.v)(((e, t) => {
          let {
            headers: a
          } = t;
          const r = s();
          return r ? {
            headers: {
              ...a,
              authorization: `Bearer ${r}`
            }
          } : null
        })), c = () => (0, n.l)(s)
    },
    2140: (e, t, a) => {
      a.r(t), a.d(t, {
        GraphOperationsProvider: () => r.UJ,
        ReactiveStateProvider: () => n.Nj,
        RockstarGraphProvider: () => o.X,
        useApolloClient: () => o.x
      });
      var r = a(3081),
        n = a(3841),
        o = a(2425)
    },
    9276: (e, t, a) => {
      a.r(t), a.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => o,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => s
      });
      var r = a(4938),
        n = a(9830);
      const o = (0, r.QS)(document.documentElement.lang),
        s = () => (0, n.l)(o),
        i = window?.env,
        l = (0, r.QS)({
          media: i?.cdn?.media,
          videos: i?.cdn?.videos
        }),
        c = () => (0, n.l)(l),
        d = document.currentScript,
        u = d?.src ? new URL(d.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${u}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, r.QS)(h),
        g = () => (0, n.l)(p)
    }
  }
]);