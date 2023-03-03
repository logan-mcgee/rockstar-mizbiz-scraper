"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [503, 276], {
    503: (e, t, a) => {
      a.r(t);
      var n = a(450),
        r = a(3493),
        s = a(3081),
        i = a(2425),
        o = a(5668);
      const l = () => {
          const e = n.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
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
        d = document.createElement("div");
      document.body.appendChild(d), (0, r.s)(d).render((0, o.jsx)(c, {
        env: "dev"
      }))
    },
    3081: (e, t, a) => {
      a.d(t, {
        UJ: () => b,
        Db: () => y,
        aM: () => v
      });
      var n = a(4736),
        r = a(9286),
        s = a(6623),
        i = a(1056),
        o = a(9830),
        l = a(777),
        c = a(735),
        d = a.n(c),
        u = a(9276);
      const h = (e, t) => {
        const a = (0, o.l)(u.locale),
          r = {
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
            data: s,
            loading: i,
            error: c,
            ...h
          } = (0, l.a)(e, r);
        return (0, n.useEffect)((() => {
          if (s && r.setTitleDataPath) {
            const e = d().get(s, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, n.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, n.useEffect)((() => {
          if (r.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: s,
          ...h
        }
      };
      var p = a(5668);
      const g = (0, n.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, n.useContext)(g)(e, t),
        m = new Promise((e => {
          e()
        })),
        w = {
          cache: new r.h
        },
        f = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new s.f(w)
        }],
        x = (0, n.createContext)((() => f)),
        y = e => (0, n.useContext)(x)(e),
        b = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(x.Provider, {
            value: i.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    2425: (e, t, a) => {
      a.d(t, {
        X: () => w,
        x: () => m
      });
      var n = a(4736),
        r = a(9286),
        s = a(6623),
        i = a(5877),
        o = a(3081),
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
      const m = e => {
          let {
            graphOptions: t,
            typePolicies: a = {}
          } = e;
          const i = t?.env ? (e => {
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
            [o] = (0, n.useState)(new r.h({
              typePolicies: a
            })),
            d = g.concat(l.Vl.concat((e => (0, c.L)({
              ...e,
              fetch: u()
            }))({
              ...t,
              uri: i
            })));
          return new s.f({
            cache: o,
            link: d
          })
        },
        w = e => {
          let {
            children: t,
            graphOptions: a,
            typePolicies: n
          } = e;
          const r = m({
            graphOptions: a,
            typePolicies: n
          });
          return (0, v.jsx)(i.e, {
            client: r,
            children: (0, v.jsx)(o.UJ, {
              children: t
            })
          })
        }
    },
    9792: (e, t, a) => {
      a.d(t, {
        AJ: () => o,
        Vl: () => l,
        u1: () => c,
        vX: () => i
      });
      var n = a(4938),
        r = a(9830),
        s = a(9287);
      const i = (0, n.QS)(null),
        o = async function(e) {
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
              n = await a.json();
            return i(n.bearerToken ?? null), n
          } catch (e) {
            return i(!1), !1
          }
        }, l = (0, s.v)(((e, t) => {
          let {
            headers: a
          } = t;
          const n = i();
          return n ? {
            headers: {
              ...a,
              authorization: `Bearer ${n}`
            }
          } : null
        })), c = () => (0, r.l)(i)
    },
    9276: (e, t, a) => {
      a.r(t), a.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => s,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => i
      });
      var n = a(4938),
        r = a(9830);
      const s = (0, n.QS)(document.documentElement.lang),
        i = () => (0, r.l)(s),
        o = window?.env,
        l = (0, n.QS)({
          media: o?.cdn?.media,
          videos: o?.cdn?.videos
        }),
        c = () => (0, r.l)(l),
        d = document.currentScript,
        u = d?.src ? new URL(d.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${u}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, n.QS)(h),
        g = () => (0, r.l)(p)
    }
  }
]);