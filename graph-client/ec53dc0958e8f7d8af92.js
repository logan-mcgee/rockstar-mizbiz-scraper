"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [824, 682, 195], {
    5824: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => l.X,
        gql: () => r.Ps,
        makeVar: () => a.QS,
        useApolloClient: () => u.useApolloClient,
        useBase: () => d.useBase,
        useCdn: () => d.useCdn,
        useMutateState: () => i.qs,
        useMutation: () => s.Db,
        useQuery: () => s.aM,
        useReactiveVar: () => o.l,
        useRockstarToken: () => c.XW,
        useRockstarTokenPing: () => c.cC,
        useRockstarTokenReactive: () => c.yx,
        useState: () => i.eJ,
        withReactiveState: () => v,
        withRockstarGraph: () => p
      });
      var r = n(4888),
        a = n(6674),
        o = n(3356),
        s = n(7941),
        i = n(3857),
        l = n(2245),
        c = n(9886),
        u = n(2682),
        d = n(2195),
        h = n(3322);
      const p = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: r,
            token: o = (0, a.QS)(null),
            tokenPing: s = null
          } = t;
          return function(t) {
            return (0, h.jsx)(u.RockstarGraphProvider, {
              typePolicies: r,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPing: s
              },
              children: (0, h.jsx)(e, {
                ...t
              })
            })
          }
        },
        v = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, h.jsx)(u.ReactiveStateProvider, {
              state: n ?? (0, a.QS)(null),
              children: (0, h.jsx)(e, {
                ...t
              })
            })
          }
        }
    },
    7941: (e, t, n) => {
      n.d(t, {
        UJ: () => C,
        Db: () => w,
        aM: () => k
      });
      var r = n(4736),
        a = n(7207),
        o = n(4039),
        s = n(951),
        i = n(3356),
        l = n(2560),
        c = n(7311),
        u = n.n(c),
        d = n(2195);
      const h = (e, t) => {
        const n = (0, i.l)(d.locale),
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
            const e = u().get(o, a.setTitleDataPath) ?? null;
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
      const v = (0, r.createContext)((() => ({
          data: null
        }))),
        k = (e, t) => (0, r.useContext)(v)(e, t),
        g = new Promise((e => {
          e()
        })),
        P = {
          cache: new a.h
        },
        x = [() => g, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(P)
        }],
        f = (0, r.createContext)((() => x)),
        w = e => (0, r.useContext)(f)(e),
        C = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(f.Provider, {
            value: s.D,
            children: (0, p.jsx)(v.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    3857: (e, t, n) => {
      n.d(t, {
        Nj: () => u,
        eJ: () => i,
        qs: () => c
      });
      var r = n(3356),
        a = n(4736),
        o = n(3322);
      const s = (0, a.createContext)({}),
        i = () => (0, a.useContext)(s),
        l = (0, a.createContext)({}),
        c = () => (0, a.useContext)(l),
        u = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, r.l)(n);
          const i = (0, a.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, o.jsx)(s.Provider, {
            value: n(),
            children: (0, o.jsx)(l.Provider, {
              value: i,
              children: t
            })
          })
        }
    },
    2245: (e, t, n) => {
      n.d(t, {
        X: () => x,
        x: () => P
      });
      var r = n(4736),
        a = n(7207),
        o = n(4039),
        s = n(4955),
        i = n(7941),
        l = n(9886),
        c = n(1938);
      var u = n(5356),
        d = n(3386),
        h = n.n(d);
      var p = n(6594),
        v = n(9770);
      const k = (0, p.Nq)({
        sha256: v.JQ
      });
      var g = n(3322);
      const P = e => {
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
            l = k.concat((e => {
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
            }).concat((e => (0, u.L)({
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
          const a = P({
            graphOptions: n,
            typePolicies: r
          });
          return (0, g.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            children: (0, g.jsx)(s.e, {
              client: a,
              children: (0, g.jsx)(i.UJ, {
                children: t
              })
            })
          })
        }
    },
    9886: (e, t, n) => {
      n.d(t, {
        Fv: () => d,
        XW: () => h,
        cC: () => p,
        yx: () => u
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
        u = () => (0, r.useContext)(c),
        d = e => {
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
          const [e] = u();
          return (0, o.l)(e)
        },
        p = () => {
          const [e, t] = u();
          return () => i({
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
        useBase: () => v,
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
        u = document.currentScript,
        d = u?.src ? new URL(u.src).origin : "";
      let h = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${d}/`;
      h.endsWith("/") || (h = `${h}/`);
      const p = (0, r.QS)(h),
        v = () => (0, a.l)(p)
    }
  }
]);