"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [534, 941], {
    8914: (e, t, a) => {
      a.d(t, {
        UJ: () => S,
        Db: () => P,
        aM: () => g
      });
      var n = a(4736),
        r = a(6129),
        o = a(1905),
        l = a(7449),
        i = a(389),
        s = a(198),
        c = a(4591),
        d = a.n(c),
        u = a(8941);
      const h = (e, t) => {
        const a = (0, i.l)(u.locale),
          r = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              ...null == t ? void 0 : t.variables,
              locale: a
            }
          },
          {
            data: o,
            loading: l,
            error: c,
            ...h
          } = (0, s.a)(e, r);
        return (0, n.useEffect)((() => {
          if (o && r.setTitleDataPath) {
            const e = d().get(o, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [o]), (0, n.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: l
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [l]), (0, n.useEffect)((() => {
          if (r.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: l,
          error: c,
          data: o,
          ...h
        }
      };
      var v = a(3563);
      const p = (0, n.createContext)((() => ({
          data: null
        }))),
        g = (e, t) => (0, n.useContext)(p)(e, t),
        w = new Promise((e => {
          e()
        })),
        m = {
          cache: new r.h
        },
        f = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(m)
        }],
        x = (0, n.createContext)((() => f)),
        P = e => (0, n.useContext)(x)(e),
        S = e => {
          let {
            children: t
          } = e;
          return (0, v.jsx)(x.Provider, {
            value: l.D,
            children: (0, v.jsx)(p.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    2055: (e, t, a) => {
      a.d(t, {
        Nj: () => d,
        eJ: () => i,
        qs: () => c
      });
      var n = a(389),
        r = a(4736),
        o = a(3563);
      const l = (0, r.createContext)({}),
        i = () => (0, r.useContext)(l),
        s = (0, r.createContext)({}),
        c = () => (0, r.useContext)(s),
        d = e => {
          let {
            children: t,
            state: a
          } = e;
          (0, n.l)(a);
          const i = (0, r.useCallback)((e => {
            const t = {
              ...a(),
              ...e
            };
            a(t)
          }), [a]);
          return (0, o.jsx)(l.Provider, {
            value: a(),
            children: (0, o.jsx)(s.Provider, {
              value: i,
              children: t
            })
          })
        }
    },
    6983: (e, t, a) => {
      a.d(t, {
        X: () => m,
        x: () => w
      });
      var n = a(4736),
        r = a(6129),
        o = a(1905),
        l = a(1769),
        i = a(8914),
        s = a(1e3),
        c = a(7704),
        d = a(5624),
        u = a.n(d);
      var h = a(8026),
        v = a(6531);
      const p = (0, h.Nq)({
        sha256: v.JQ
      });
      var g = a(3563);
      const w = e => {
          let {
            graphOptions: t,
            typePolicies: a = {}
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
            [i] = (0, n.useState)(new r.h({
              typePolicies: a
            })),
            d = p.concat(s.Vl.concat((e => (0, c.L)({
              ...e,
              fetch: u()
            }))({
              ...t,
              uri: l
            })));
          return new o.f({
            cache: i,
            link: d
          })
        },
        m = e => {
          let {
            children: t,
            graphOptions: a,
            typePolicies: n
          } = e;
          const r = w({
            graphOptions: a,
            typePolicies: n
          });
          return (0, g.jsx)(l.e, {
            client: r,
            children: (0, g.jsx)(i.UJ, {
              children: t
            })
          })
        }
    },
    1e3: (e, t, a) => {
      a.d(t, {
        AJ: () => i,
        Vl: () => s,
        u1: () => c,
        vX: () => l
      });
      var n = a(181),
        r = a(389),
        o = a(9471);
      const l = (0, n.QS)(null),
        i = async e => {
          const t = await fetch(e, {
              credentials: "include",
              method: "POST"
            }),
            a = await t.json();
          return l(a.bearerToken ?? null), a
        }, s = (0, o.v)(((e, t) => {
          let {
            headers: a
          } = t;
          const n = l();
          return n ? {
            headers: {
              ...a,
              authorization: `Bearer ${n}`
            }
          } : null
        })), c = () => (0, r.l)(l)
    },
    534: (e, t, a) => {
      a.r(t), a.d(t, {
        GraphOperationsProvider: () => n.UJ,
        ReactiveStateProvider: () => r.Nj,
        RockstarGraphProvider: () => o.X,
        useApolloClient: () => o.x
      });
      var n = a(8914),
        r = a(2055),
        o = a(6983)
    },
    8941: (e, t, a) => {
      a.r(t), a.d(t, {
        base: () => m,
        cdn: () => u,
        locale: () => o,
        useBase: () => f,
        useCdn: () => h,
        useLocale: () => l
      });
      var n = a(181),
        r = a(389);
      const o = (0, n.QS)(document.documentElement.lang),
        l = () => (0, r.l)(o);
      var i, s, c;
      const d = null === (i = window) || void 0 === i ? void 0 : i.env,
        u = (0, n.QS)({
          media: null == d || null === (s = d.cdn) || void 0 === s ? void 0 : s.media,
          videos: null == d || null === (c = d.cdn) || void 0 === c ? void 0 : c.videos
        }),
        h = () => (0, r.l)(u);
      var v;
      const p = document.currentScript,
        g = null != p && p.src ? new URL(p.src).origin : "";
      let w = (null === (v = document.getElementsByTagName("base")[0]) || void 0 === v ? void 0 : v.getAttribute("href")) ?? `${g}/`;
      w.endsWith("/") || (w = `${w}/`);
      const m = (0, n.QS)(w),
        f = () => (0, r.l)(m)
    }
  }
]);