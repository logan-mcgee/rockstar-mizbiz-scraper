"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [682, 195], {
    7941: (e, t, n) => {
      n.d(t, {
        UJ: () => m,
        Db: () => P,
        aM: () => v
      });
      var r = n(4736),
        a = n(7207),
        o = n(4039),
        s = n(951),
        c = n(3356),
        l = n(2560),
        i = n(7311),
        d = n.n(i),
        u = n(2195);
      const h = (e, t) => {
        const n = (0, c.l)(u.locale),
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
            error: i,
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
          if (a.autoSetError && i) throw new Error(String(i))
        }), [i]), {
          loading: s,
          error: i,
          data: o,
          ...h
        }
      };
      var p = n(3322);
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
        f = [() => k, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(x)
        }],
        w = (0, r.createContext)((() => f)),
        P = e => (0, r.useContext)(w)(e),
        m = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(w.Provider, {
            value: s.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    3857: (e, t, n) => {
      n.d(t, {
        Nj: () => d,
        eJ: () => c,
        qs: () => i
      });
      var r = n(3356),
        a = n(4736),
        o = n(3322);
      const s = (0, a.createContext)({}),
        c = () => (0, a.useContext)(s),
        l = (0, a.createContext)({}),
        i = () => (0, a.useContext)(l),
        d = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, r.l)(n);
          const c = (0, a.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, o.jsx)(s.Provider, {
            value: n(),
            children: (0, o.jsx)(l.Provider, {
              value: c,
              children: t
            })
          })
        }
    },
    2245: (e, t, n) => {
      n.d(t, {
        X: () => f,
        x: () => x
      });
      var r = n(4736),
        a = n(7207),
        o = n(4039),
        s = n(4955),
        c = n(7941),
        l = n(9886),
        i = n(1938);
      var d = n(5356),
        u = n(3386),
        h = n.n(u);
      var p = n(6594),
        g = n(9770);
      const v = (0, p.Nq)({
        sha256: g.JQ
      });
      var k = n(3322);
      const x = e => {
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
            [c] = (0, r.useState)(new a.h({
              typePolicies: n
            })),
            l = v.concat((e => {
              let {
                token: t
              } = e;
              return (0, i.v)(((e, n) => {
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
            cache: c,
            link: l
          })
        },
        f = e => {
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
            children: (0, k.jsx)(s.e, {
              client: a,
              children: (0, k.jsx)(c.UJ, {
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
      }, c = s;
      var l = n(3322);
      const i = (0, r.createContext)((0, a.QS)(null)),
        d = () => (0, r.useContext)(i),
        u = e => {
          let {
            children: t,
            token: n,
            tokenPing: r
          } = e;
          return (0, l.jsx)(i.Provider, {
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
          return () => c({
            url: t,
            token: e,
            forceUpdate: !1
          })
        }
    },
    2682: (e, t, n) => {
      n.r(t), n.d(t, {
        GraphOperationsProvider: () => r.UJ,
        ReactiveStateProvider: () => a.Nj,
        RockstarGraphProvider: () => o.X,
        RockstarTokenProvider: () => s.Fv,
        useApolloClient: () => o.x,
        useRockstarToken: () => s.XW,
        useRockstarTokenReactive: () => s.yx
      });
      var r = n(7941),
        a = n(3857),
        o = n(2245),
        s = n(9886)
    },
    2195: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => o,
        useBase: () => g,
        useCdn: () => i,
        useLocale: () => s
      });
      var r = n(6674),
        a = n(3356);
      const o = (0, r.QS)(document.documentElement.lang),
        s = () => (0, a.l)(o),
        c = window?.env,
        l = (0, r.QS)({
          media: c?.cdn?.media,
          videos: c?.cdn?.videos
        }),
        i = () => (0, a.l)(l),
        d = document.currentScript,
        u = d?.src ? new URL(d.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${u}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, r.QS)(h),
        g = () => (0, a.l)(p)
    }
  }
]);