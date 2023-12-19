"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [334, 739], {
    6967: (e, t, n) => {
      n.r(t), n.d(t, {
        RockstarGraphProvider: () => g.X,
        gql: () => o.Ps,
        makeVar: () => r.QS,
        makeVarNamespace: () => x,
        uriForGraphEnv: () => C,
        useApolloClient: () => g.x,
        useBase: () => k.useBase,
        useCdn: () => k.useCdn,
        useMutateState: () => p,
        useMutation: () => i.Db,
        useQuery: () => i.aM,
        useReactiveVar: () => a.l,
        useRockstarToken: () => w.XW,
        useRockstarTokenPing: () => w.cC,
        useRockstarTokenReactive: () => w.yx,
        useState: () => u,
        withHavingPingedBearer: () => v,
        withReactiveState: () => E,
        withRockstarGraph: () => f
      });
      var o = n(6737),
        r = n(9551),
        a = n(2997),
        i = n(3121),
        s = n(927),
        l = n(3705);
      const c = (0, s.createContext)({}),
        u = () => (0, s.useContext)(c),
        d = (0, s.createContext)({}),
        p = () => (0, s.useContext)(d),
        h = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, a.l)(n);
          const o = (0, s.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, l.jsx)(c.Provider, {
            value: n(),
            children: (0, l.jsx)(d.Provider, {
              value: o,
              children: t
            })
          })
        };
      var g = n(5851),
        w = n(405),
        k = n(8739);
      const v = function(e) {
          return function(t) {
            const [n, o] = (0, s.useState)(!1), r = (0, w.cC)();
            return (0, s.useEffect)((() => {
              (async () => {
                await r(), o(!0)
              })()
            }), []), n ? (0, l.jsx)(e, {
              ...t
            }) : null
          }
        },
        x = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, o) => {
            const a = window?.[e]?.[t]?.[n] ?? (0, r.QS)(o);
            return window[e][t][n] = a, a
          })(t, e)
        },
        P = x("graph-with-rs-graph"),
        f = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: o,
            token: r = P("token", null),
            tokenPingExpires: a = P("tokenPingExpires", null),
            tokenPing: i = P("token", null)
          } = t;
          return function(t) {
            return (0, l.jsx)(g.X, {
              typePolicies: o,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: r,
                tokenPing: i,
                tokenPingExpires: a
              },
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        m = x("graph-hoc"),
        E = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, l.jsx)(h, {
              state: n ?? m("state", null),
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        C = e => {
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
        }
    },
    3121: (e, t, n) => {
      n.d(t, {
        UJ: () => P,
        Db: () => m,
        aM: () => f
      });
      var o = n(927),
        r = n(5672),
        a = n(2213),
        i = n(895),
        s = n(2997),
        l = n(7605),
        c = n(5370),
        u = n.n(c),
        d = n(8739);
      const p = (e, t) => {
        const n = (0, s.l)(d.locale),
          r = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...t,
            variables: {
              locale: n,
              ...t?.variables
            }
          },
          {
            data: a,
            loading: i,
            error: c,
            ...p
          } = (0, l.a)(e, r);
        return (0, o.useEffect)((() => {
          if (a && r.setTitleDataPath) {
            const e = u().get(a, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [a]), (0, o.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, o.useEffect)((() => {
          if (r.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: a,
          ...p
        }
      };
      var h = n(3705);
      const g = (0, o.createContext)((() => ({
          data: null
        }))),
        w = new Promise((e => {
          e()
        })),
        k = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.h)
        },
        v = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new a.f(k))
        }],
        x = (0, o.createContext)((() => v)),
        P = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, h.jsx)(x.Provider, {
            value: i.D,
            children: (0, h.jsx)(g.Provider, {
              value: p,
              children: t
            })
          })
        }),
        f = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, o.useContext)(g)(e, t)),
        m = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, o.useContext)(x)(e))
    },
    5851: (e, t, n) => {
      n.d(t, {
        X: () => P,
        x: () => x
      });
      var o = n(927),
        r = n(5672),
        a = n(2213),
        i = n(588),
        s = n(3121),
        l = n(405),
        c = n(5767);
      var u = n(2495),
        d = n(3421),
        p = n.n(d);
      var h = n(3843),
        g = n(7056);
      const w = (0, h.Nq)({
        sha256: g.JQ
      });
      var k = n(6967),
        v = n(3705);
      const x = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const i = t?.env ? (0, k.uriForGraphEnv)(t?.env) : t?.uri,
            [s] = (0, o.useState)(new r.h({
              typePolicies: n
            })),
            l = w.concat((e => {
              let {
                token: t
              } = e;
              return (0, c.v)(((e, n) => {
                let {
                  headers: o
                } = n;
                const r = t?.() ?? null;
                return r ? {
                  headers: {
                    ...o,
                    authorization: `Bearer ${r}`
                  }
                } : null
              }))
            })({
              token: t?.token
            }).concat((e => (0, u.L)({
              ...e,
              fetch: p()
            }))({
              ...t,
              uri: i
            })));
          return new a.f({
            cache: s,
            link: l
          })
        },
        P = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = x({
            graphOptions: n,
            typePolicies: o
          });
          return (0, v.jsx)(l.Fv, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, v.jsx)(i.e, {
              client: r,
              children: (0, v.jsx)(s.UJ, {
                children: t
              })
            })
          })
        }
    },
    405: (e, t, n) => {
      n.d(t, {
        Fv: () => u,
        XW: () => p,
        cC: () => h,
        yx: () => d
      });
      var o = n(927),
        r = n(9551),
        a = n(2997);
      var i = n(3705);
      const s = "graph-token-context",
        l = {
          token: (0, r.QS)(null),
          tokenPing: (0, r.QS)("tokenPing"),
          tokenPingExpires: (0, r.QS)(100)
        },
        c = window?.[s] ?? (window[s] = (0, o.createContext)(l)),
        u = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, i.jsx)(c.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: r
            },
            children: t
          })
        },
        d = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, o.useContext)(c);
          return [e, t, n]
        },
        p = () => {
          const [e] = d();
          return (0, a.l)(e)
        },
        h = () => {
          const [e, t, n] = d();
          return () => (async e => {
            let {
              url: t,
              token: n,
              tokenPingExpires: o
            } = e;
            const r = t?.();
            try {
              const e = o?.() ?? 0,
                t = n?.() ?? null,
                a = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === t) return {
                bearerToken: t
              };
              if (a && t) return {
                bearerToken: t
              };
              const i = await fetch(r, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await i.json(),
                {
                  tokenExpiresTime: l = null
                } = s;
              return null !== l && o?.(l), n(s.bearerToken ?? null), s
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
    8739: (e, t, n) => {
      n.r(t), n.d(t, {
        base: () => h,
        cdn: () => l,
        locale: () => a,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => i
      });
      var o = n(9551),
        r = n(2997);
      const a = (0, o.QS)(document.documentElement.lang),
        i = () => (0, r.l)(a),
        s = window?.env,
        l = (0, o.QS)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        c = () => (0, r.l)(l),
        u = document.currentScript,
        d = u?.src ? new URL(u.src).origin : "";
      let p = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${d}/`;
      p.endsWith("/") || (p = `${p}/`);
      const h = (0, o.QS)(p),
        g = () => (0, r.l)(h)
    }
  }
]);