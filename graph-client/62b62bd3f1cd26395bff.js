"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [641, 195], {
    1641: (e, t, n) => {
      n.r(t);
      var a = n(4888),
        r = n(3664),
        s = n(7941),
        i = n(2322),
        o = n(3322);
      const l = () => {
          const e = a.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
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
    7941: (e, t, n) => {
      n.d(t, {
        UJ: () => b,
        Db: () => y,
        aM: () => v
      });
      var a = n(4736),
        r = n(7207),
        s = n(4039),
        i = n(951),
        o = n(3356),
        l = n(2560),
        c = n(7311),
        d = n.n(c),
        u = n(2195);
      const h = (e, t) => {
        const n = (0, o.l)(u.locale),
          r = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              ...t?.variables,
              locale: n
            }
          },
          {
            data: s,
            loading: i,
            error: c,
            ...h
          } = (0, l.a)(e, r);
        return (0, a.useEffect)((() => {
          if (s && r.setTitleDataPath) {
            const e = d().get(s, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, a.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, a.useEffect)((() => {
          if (r.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: s,
          ...h
        }
      };
      var p = n(3322);
      const g = (0, a.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, a.useContext)(g)(e, t),
        m = new Promise((e => {
          e()
        })),
        f = {
          cache: new r.h
        },
        w = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new s.f(f)
        }],
        x = (0, a.createContext)((() => w)),
        y = e => (0, a.useContext)(x)(e),
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
    2322: (e, t, n) => {
      n.d(t, {
        X: () => f,
        x: () => m
      });
      var a = n(4736),
        r = n(7207),
        s = n(4039),
        i = n(4955),
        o = n(7941),
        l = n(332),
        c = n(5356),
        d = n(3386),
        u = n.n(d);
      var h = n(6594),
        p = n(9770);
      const g = (0, h.Nq)({
        sha256: p.JQ
      });
      var v = n(3322);
      const m = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
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
            [o] = (0, a.useState)(new r.h({
              typePolicies: n
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
        f = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: a
          } = e;
          const r = m({
            graphOptions: n,
            typePolicies: a
          });
          return (0, v.jsx)(i.e, {
            client: r,
            children: (0, v.jsx)(o.UJ, {
              children: t
            })
          })
        }
    },
    332: (e, t, n) => {
      n.d(t, {
        AJ: () => o,
        Vl: () => l,
        u1: () => c,
        vX: () => i
      });
      var a = n(6674),
        r = n(3356),
        s = n(1938);
      const i = (0, a.QS)(null),
        o = async function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          try {
            const n = await fetch(e, {
                credentials: "include",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  forceUpdate: t
                })
              }),
              a = await n.json(),
              {
                tokenExpiresIn: r = null
              } = a;
            if (null !== r) {
              const t = Math.max(0, 1e3 * (r - 5));
              setTimeout((() => {
                o(e, !0)
              }), t)
            }
            return i(a.bearerToken ?? null), a
          } catch (e) {
            return i(!1), !1
          }
        }, l = (0, s.v)(((e, t) => {
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
        })), c = () => (0, r.l)(i)
    },
    2195: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => s,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => i
      });
      var a = n(6674),
        r = n(3356);
      const s = (0, a.QS)(document.documentElement.lang),
        i = () => (0, r.l)(s),
        o = window?.env,
        l = (0, a.QS)({
          media: o?.cdn?.media,
          videos: o?.cdn?.videos
        }),
        c = () => (0, r.l)(l),
        d = document.currentScript,
        u = d?.src ? new URL(d.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${u}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, a.QS)(h),
        g = () => (0, r.l)(p)
    }
  }
]);