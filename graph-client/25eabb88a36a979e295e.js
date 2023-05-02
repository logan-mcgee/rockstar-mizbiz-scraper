"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [641, 195], {
    1641: (e, t, n) => {
      n.r(t);
      var r = n(4888),
        a = n(3664),
        o = n(7941),
        s = n(2245),
        i = n(3322);
      const l = () => {
          const e = r.Ps`query P($limit:Int){posts(locale:"en_us", limit:$limit){results{id title}}}`,
            {
              data: t
            } = (0, o.aM)(e, {
              variables: {
                limit: 15
              }
            });
          return t ? (0, i.jsxs)("div", {
            "data-testid": "test",
            children: [(0, i.jsx)("h1", {
              children: "Posts back from query:"
            }), t.posts.results?.map((e => (0, i.jsx)("div", {
              children: e.title
            }, e.id)))]
          }) : (0, i.jsx)("div", {
            "data-testid": "loading",
            children: "Loading..."
          })
        },
        c = e => {
          let {
            env: t
          } = e;
          return (0, i.jsxs)(s.X, {
            typePolicies: {},
            graphOptions: {
              env: t,
              useGETForQueries: !0
            },
            children: [(0, i.jsx)(l, {}), (0, i.jsx)(l, {}), (0, i.jsx)(l, {})]
          })
        },
        d = document.createElement("div");
      document.body.appendChild(d), (0, a.s)(d).render((0, i.jsx)(c, {
        env: "dev"
      }))
    },
    7941: (e, t, n) => {
      n.d(t, {
        UJ: () => P,
        Db: () => w,
        aM: () => v
      });
      var r = n(4736),
        a = n(7207),
        o = n(4039),
        s = n(951),
        i = n(3356),
        l = n(2560),
        c = n(7311),
        d = n.n(c),
        u = n(2195);
      const h = (e, t) => {
        const n = (0, i.l)(u.locale),
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
            data: o,
            loading: s,
            error: c,
            ...h
          } = (0, l.a)(e, a);
        return (0, r.useEffect)((() => {
          if (o && a.setTitleDataPath) {
            const e = d().get(o, a.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [o]), (0, r.useEffect)((() => (a.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: s
        }), () => {
          a.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [s]), (0, r.useEffect)((() => {
          if (a.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: s,
          error: c,
          data: o,
          ...h
        }
      };
      var p = n(3322);
      const g = (0, r.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, r.useContext)(g)(e, t),
        m = new Promise((e => {
          e()
        })),
        k = {
          cache: new a.h
        },
        x = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(k)
        }],
        f = (0, r.createContext)((() => x)),
        w = e => (0, r.useContext)(f)(e),
        P = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(f.Provider, {
            value: s.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    2245: (e, t, n) => {
      n.d(t, {
        X: () => x,
        x: () => k
      });
      var r = n(4736),
        a = n(7207),
        o = n(4039),
        s = n(4955),
        i = n(7941),
        l = n(9886),
        c = n(1938);
      var d = n(5356),
        u = n(3386),
        h = n.n(u);
      var p = n(6594),
        g = n(9770);
      const v = (0, p.Nq)({
        sha256: g.JQ
      });
      var m = n(3322);
      const k = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
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
            [i] = (0, r.useState)(new a.h({
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
              uri: s
            })));
          return new o.f({
            cache: i,
            link: l
          })
        },
        x = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const a = k({
            graphOptions: n,
            typePolicies: r
          });
          return (0, m.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            children: (0, m.jsx)(s.e, {
              client: a,
              children: (0, m.jsx)(i.UJ, {
                children: t
              })
            })
          })
        }
    },
    9886: (e, t, n) => {
      n.d(t, {
        Fv: () => u,
        XW: () => h,
        cC: () => p,
        yx: () => d
      });
      var r = n(4736),
        a = n(6674),
        o = n(3356);
      const s = async e => {
        let {
          url: t,
          forceUpdate: n = !1,
          token: r
        } = e;
        try {
          const e = await fetch(t, {
              credentials: "include",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                forceUpdate: n
              })
            }),
            a = await e.json(),
            {
              tokenExpiresIn: o = null
            } = a;
          if (null !== o) {
            const e = Math.max(0, 1e3 * (o - 5));
            setTimeout((() => {
              s({
                url: t,
                forceUpdate: !0,
                token: r
              })
            }), e)
          }
          return r(a.bearerToken ?? null), a
        } catch (e) {
          return r(!1), !1
        }
      }, i = s;
      var l = n(3322);
      const c = (0, r.createContext)((0, a.QS)(null)),
        d = () => (0, r.useContext)(c),
        u = e => {
          let {
            children: t,
            token: n,
            tokenPing: r
          } = e;
          return (0, l.jsx)(c.Provider, {
            value: [n, r],
            children: t
          })
        },
        h = () => {
          const [e] = d();
          return (0, o.l)(e)
        },
        p = () => {
          const [e, t] = d();
          return () => i({
            url: t,
            token: e,
            forceUpdate: !1
          })
        }
    },
    2195: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => o,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => s
      });
      var r = n(6674),
        a = n(3356);
      const o = (0, r.QS)(document.documentElement.lang),
        s = () => (0, a.l)(o),
        i = window?.env,
        l = (0, r.QS)({
          media: i?.cdn?.media,
          videos: i?.cdn?.videos
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