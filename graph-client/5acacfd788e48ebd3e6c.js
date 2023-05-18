"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [724, 280], {
    724: (e, t, n) => {
      n.r(t);
      var r = n(4296),
        a = n(1224),
        i = n(4857),
        o = n(2061),
        s = n(9706);
      const l = () => {
          const e = r.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
            {
              data: t
            } = (0, i.aM)(e, {
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
          return (0, s.jsxs)(o.X, {
            typePolicies: {},
            graphOptions: {
              env: t,
              useGETForQueries: !0
            },
            children: [(0, s.jsx)(l, {}), (0, s.jsx)(l, {}), (0, s.jsx)(l, {})]
          })
        },
        d = document.createElement("div");
      document.body.appendChild(d), (0, a.s)(d).render((0, s.jsx)(c, {
        env: "dev"
      }))
    },
    4857: (e, t, n) => {
      n.d(t, {
        UJ: () => f,
        Db: () => w,
        aM: () => v
      });
      var r = n(4736),
        a = n(222),
        i = n(2669),
        o = n(1016),
        s = n(799),
        l = n(5136),
        c = n(948),
        d = n.n(c),
        u = n(280);
      const h = (e, t) => {
        const n = (0, s.l)(u.locale),
          a = {
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
            data: i,
            loading: o,
            error: c,
            ...h
          } = (0, l.a)(e, a);
        return (0, r.useEffect)((() => {
          if (i && a.setTitleDataPath) {
            const e = d().get(i, a.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [i]), (0, r.useEffect)((() => (a.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: o
        }), () => {
          a.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [o]), (0, r.useEffect)((() => {
          if (a.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: o,
          error: c,
          data: i,
          ...h
        }
      };
      var p = n(9706);
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
        m = [() => k, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new i.f(x)
        }],
        P = (0, r.createContext)((() => m)),
        w = e => (0, r.useContext)(P)(e),
        f = e => {
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
    2061: (e, t, n) => {
      n.d(t, {
        X: () => m,
        x: () => x
      });
      var r = n(4736),
        a = n(222),
        i = n(2669),
        o = n(6137),
        s = n(4857),
        l = n(5748),
        c = n(6843);
      var d = n(2709),
        u = n(5986),
        h = n.n(u);
      var p = n(4127),
        g = n(7707);
      const v = (0, p.Nq)({
        sha256: g.JQ
      });
      var k = n(9706);
      const x = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
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
            [s] = (0, r.useState)(new a.h({
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
            }).concat((e => (0, d.L)({
              ...e,
              fetch: h()
            }))({
              ...t,
              uri: o
            })));
          return new i.f({
            cache: s,
            link: l
          })
        },
        m = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const a = x({
            graphOptions: n,
            typePolicies: r
          });
          return (0, k.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, k.jsx)(o.e, {
              client: a,
              children: (0, k.jsx)(s.UJ, {
                children: t
              })
            })
          })
        }
    },
    5748: (e, t, n) => {
      n.d(t, {
        Fv: () => c,
        XW: () => d,
        cC: () => u,
        yx: () => l
      });
      var r = n(4736),
        a = n(9156),
        i = n(799);
      var o = n(9706);
      const s = (0, r.createContext)((0, a.QS)(null)),
        l = () => (0, r.useContext)(s),
        c = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: a
          } = e;
          return (0, o.jsx)(s.Provider, {
            value: [n, r, a],
            children: t
          })
        },
        d = () => {
          const [e] = l();
          return (0, i.l)(e)
        },
        u = () => {
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
                i = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === a) return {
                bearerToken: a
              };
              if (i && a) return {
                bearerToken: a
              };
              const o = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await o.json(),
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
    280: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => i,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => o
      });
      var r = n(9156),
        a = n(799);
      const i = (0, r.QS)(document.documentElement.lang),
        o = () => (0, a.l)(i),
        s = window?.env,
        l = (0, r.QS)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        c = () => (0, a.l)(l),
        d = document.currentScript,
        u = d?.src ? new URL(d.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${u}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, r.QS)(h),
        g = () => (0, a.l)(p)
    }
  }
]);