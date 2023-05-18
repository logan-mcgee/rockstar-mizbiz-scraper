"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [543, 280], {
    7543: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => p.X,
        gql: () => r.Ps,
        makeVar: () => a.QS,
        useApolloClient: () => p.x,
        useBase: () => v.useBase,
        useCdn: () => v.useCdn,
        useMutateState: () => h,
        useMutation: () => s.Db,
        useQuery: () => s.aM,
        useReactiveVar: () => o.l,
        useRockstarToken: () => k.XW,
        useRockstarTokenPing: () => k.cC,
        useRockstarTokenReactive: () => k.yx,
        useState: () => u,
        withHavingPingedBearer: () => x,
        withReactiveState: () => w,
        withRockstarGraph: () => P
      });
      var r = n(4296),
        a = n(9156),
        o = n(799),
        s = n(4857),
        i = n(4736),
        l = n(9706);
      const c = (0, i.createContext)({}),
        u = () => (0, i.useContext)(c),
        d = (0, i.createContext)({}),
        h = () => (0, i.useContext)(d),
        g = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, o.l)(n);
          const r = (0, i.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, l.jsx)(c.Provider, {
            value: n(),
            children: (0, l.jsx)(d.Provider, {
              value: r,
              children: t
            })
          })
        };
      var p = n(2061),
        k = n(5748),
        v = n(280);
      const x = function(e) {
          return function(t) {
            const [n, r] = (0, i.useState)(!1), a = (0, k.cC)();
            return (0, i.useEffect)((() => {
              (async () => {
                await a(), r(!0)
              })()
            }), []), n ? (0, l.jsx)(e, {
              ...t
            }) : null
          }
        },
        P = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: r,
            token: o = (0, a.QS)(null),
            tokenPingExpires: s = (0, a.QS)(null),
            tokenPing: i = null
          } = t;
          return function(t) {
            return (0, l.jsx)(p.X, {
              typePolicies: r,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o,
                tokenPing: i,
                tokenPingExpires: s
              },
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        w = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, l.jsx)(g, {
              state: n ?? (0, a.QS)(null),
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        }
    },
    4857: (e, t, n) => {
      n.d(t, {
        UJ: () => C,
        Db: () => f,
        aM: () => k
      });
      var r = n(4736),
        a = n(222),
        o = n(2669),
        s = n(1016),
        i = n(799),
        l = n(5136),
        c = n(948),
        u = n.n(c),
        d = n(280);
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
      var g = n(9706);
      const p = (0, r.createContext)((() => ({
          data: null
        }))),
        k = (e, t) => (0, r.useContext)(p)(e, t),
        v = new Promise((e => {
          e()
        })),
        x = {
          cache: new a.h
        },
        P = [() => v, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(x)
        }],
        w = (0, r.createContext)((() => P)),
        f = e => (0, r.useContext)(w)(e),
        C = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(w.Provider, {
            value: s.D,
            children: (0, g.jsx)(p.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    2061: (e, t, n) => {
      n.d(t, {
        X: () => P,
        x: () => x
      });
      var r = n(4736),
        a = n(222),
        o = n(2669),
        s = n(6137),
        i = n(4857),
        l = n(5748),
        c = n(6843);
      var u = n(2709),
        d = n(5986),
        h = n.n(d);
      var g = n(4127),
        p = n(7707);
      const k = (0, g.Nq)({
        sha256: p.JQ
      });
      var v = n(9706);
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
        P = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: r
          } = e;
          const a = x({
            graphOptions: n,
            typePolicies: r
          });
          return (0, v.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, v.jsx)(s.e, {
              client: a,
              children: (0, v.jsx)(i.UJ, {
                children: t
              })
            })
          })
        }
    },
    5748: (e, t, n) => {
      n.d(t, {
        Fv: () => c,
        XW: () => u,
        cC: () => d,
        yx: () => l
      });
      var r = n(4736),
        a = n(9156),
        o = n(799);
      var s = n(9706);
      const i = (0, r.createContext)((0, a.QS)(null)),
        l = () => (0, r.useContext)(i),
        c = e => {
          let {
            children: t,
            token: n,
            tokenPing: r,
            tokenPingExpires: a
          } = e;
          return (0, s.jsx)(i.Provider, {
            value: [n, r, a],
            children: t
          })
        },
        u = () => {
          const [e] = l();
          return (0, o.l)(e)
        },
        d = () => {
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
                o = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === a) return {
                bearerToken: a
              };
              if (o && a) return {
                bearerToken: a
              };
              const s = await fetch(t, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await s.json(),
                {
                  tokenExpiresTime: l = null
                } = i;
              return null !== l && r?.(l), n(i.bearerToken ?? null), i
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
        base: () => g,
        cdn: () => l,
        locale: () => o,
        useBase: () => p,
        useCdn: () => c,
        useLocale: () => s
      });
      var r = n(9156),
        a = n(799);
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
      const g = (0, r.QS)(h),
        p = () => (0, a.l)(g)
    }
  }
]);