"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [944, 941], {
    7944: (e, t, n) => {
      n.r(t);
      var a = n(7158),
        r = n(8581),
        l = n(8914),
        i = n(6983),
        s = n(3563);
      const o = () => {
          var e;
          const t = a.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
            {
              data: n
            } = (0, l.aM)(t, {
              variables: {
                limit: 15
              }
            });
          return n ? (0, s.jsxs)("div", {
            "data-testid": "test",
            children: [(0, s.jsx)("h1", {
              children: "Posts back from query:"
            }), null === (e = n.posts.results) || void 0 === e ? void 0 : e.map((e => (0, s.jsx)("div", {
              children: e.title
            }, e.id)))]
          }) : (0, s.jsx)("div", {
            "data-testid": "loading",
            children: "Loading..."
          })
        },
        d = e => {
          let {
            env: t
          } = e;
          return (0, s.jsxs)(i.X, {
            typePolicies: {},
            graphOptions: {
              env: t,
              useGETForQueries: !0
            },
            children: [(0, s.jsx)(o, {}), (0, s.jsx)(o, {}), (0, s.jsx)(o, {})]
          })
        },
        c = document.createElement("div");
      document.body.appendChild(c), (0, r.s)(c).render((0, s.jsx)(d, {
        env: "dev"
      }))
    },
    8914: (e, t, n) => {
      n.d(t, {
        UJ: () => b,
        Db: () => P,
        aM: () => g
      });
      var a = n(4736),
        r = n(6129),
        l = n(1905),
        i = n(7449),
        s = n(389),
        o = n(198),
        d = n(4591),
        c = n.n(d),
        u = n(8941);
      const h = (e, t) => {
        const n = (0, s.l)(u.locale),
          r = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              ...null == t ? void 0 : t.variables,
              locale: n
            }
          },
          {
            data: l,
            loading: i,
            error: d,
            ...h
          } = (0, o.a)(e, r);
        return (0, a.useEffect)((() => {
          if (l && r.setTitleDataPath) {
            const e = c().get(l, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [l]), (0, a.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, a.useEffect)((() => {
          if (r.autoSetError && d) throw new Error(String(d))
        }), [d]), {
          loading: i,
          error: d,
          data: l,
          ...h
        }
      };
      var v = n(3563);
      const p = (0, a.createContext)((() => ({
          data: null
        }))),
        g = (e, t) => (0, a.useContext)(p)(e, t),
        m = new Promise((e => {
          e()
        })),
        w = {
          cache: new r.h
        },
        x = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new l.f(w)
        }],
        f = (0, a.createContext)((() => x)),
        P = e => (0, a.useContext)(f)(e),
        b = e => {
          let {
            children: t
          } = e;
          return (0, v.jsx)(f.Provider, {
            value: i.D,
            children: (0, v.jsx)(p.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    6983: (e, t, n) => {
      n.d(t, {
        X: () => w,
        x: () => m
      });
      var a = n(4736),
        r = n(6129),
        l = n(1905),
        i = n(1769),
        s = n(8914),
        o = n(1e3),
        d = n(7704),
        c = n(5624),
        u = n.n(c);
      var h = n(8026),
        v = n(6531);
      const p = (0, h.Nq)({
        sha256: v.JQ
      });
      var g = n(3563);
      const m = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const i = null != t && t.env ? (e => {
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
            [s] = (0, a.useState)(new r.h({
              typePolicies: n
            })),
            c = p.concat(o.Vl.concat((e => (0, d.L)({
              ...e,
              fetch: u()
            }))({
              ...t,
              uri: i
            })));
          return new l.f({
            cache: s,
            link: c
          })
        },
        w = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: a
          } = e;
          const r = m({
            graphOptions: n,
            typePolicies: a
          });
          return (0, g.jsx)(i.e, {
            client: r,
            children: (0, g.jsx)(s.UJ, {
              children: t
            })
          })
        }
    },
    1e3: (e, t, n) => {
      n.d(t, {
        AJ: () => s,
        Vl: () => o,
        u1: () => d,
        vX: () => i
      });
      var a = n(181),
        r = n(389),
        l = n(9471);
      const i = (0, a.QS)(null),
        s = async e => {
          const t = await fetch(e, {
              credentials: "include",
              method: "POST"
            }),
            n = await t.json();
          return i(n.bearerToken ?? null), n
        }, o = (0, l.v)(((e, t) => {
          let {
            headers: n
          } = t;
          const a = i();
          return a ? {
            headers: {
              ...n,
              authorization: `Bearer ${a}`
            }
          } : null
        })), d = () => (0, r.l)(i)
    },
    8941: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => w,
        cdn: () => u,
        locale: () => l,
        useBase: () => x,
        useCdn: () => h,
        useLocale: () => i
      });
      var a = n(181),
        r = n(389);
      const l = (0, a.QS)(document.documentElement.lang),
        i = () => (0, r.l)(l);
      var s, o, d;
      const c = null === (s = window) || void 0 === s ? void 0 : s.env,
        u = (0, a.QS)({
          media: null == c || null === (o = c.cdn) || void 0 === o ? void 0 : o.media,
          videos: null == c || null === (d = c.cdn) || void 0 === d ? void 0 : d.videos
        }),
        h = () => (0, r.l)(u);
      var v;
      const p = document.currentScript,
        g = null != p && p.src ? new URL(p.src).origin : "";
      let m = (null === (v = document.getElementsByTagName("base")[0]) || void 0 === v ? void 0 : v.getAttribute("href")) ?? `${g}/`;
      m.endsWith("/") || (m = `${m}/`);
      const w = (0, a.QS)(m),
        x = () => (0, r.l)(w)
    }
  }
]);