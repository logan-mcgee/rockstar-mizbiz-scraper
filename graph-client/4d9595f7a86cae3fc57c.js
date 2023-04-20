"use strict";
(self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [682, 195], {
    7941: (e, t, a) => {
      a.d(t, {
        UJ: () => S,
        Db: () => P,
        aM: () => v
      });
      var n = a(4736),
        r = a(7207),
        o = a(4039),
        s = a(951),
        i = a(3356),
        l = a(2560),
        c = a(7311),
        d = a.n(c),
        u = a(2195);
      const h = (e, t) => {
        const a = (0, i.l)(u.locale),
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
            data: o,
            loading: s,
            error: c,
            ...h
          } = (0, l.a)(e, r);
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
          loading: s
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [s]), (0, n.useEffect)((() => {
          if (r.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: s,
          error: c,
          data: o,
          ...h
        }
      };
      var p = a(3322);
      const g = (0, n.createContext)((() => ({
          data: null
        }))),
        v = (e, t) => (0, n.useContext)(g)(e, t),
        w = new Promise((e => {
          e()
        })),
        f = {
          cache: new r.h
        },
        m = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: new o.f(f)
        }],
        x = (0, n.createContext)((() => m)),
        P = e => (0, n.useContext)(x)(e),
        S = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(x.Provider, {
            value: s.D,
            children: (0, p.jsx)(g.Provider, {
              value: h,
              children: t
            })
          })
        }
    },
    3857: (e, t, a) => {
      a.d(t, {
        Nj: () => d,
        eJ: () => i,
        qs: () => c
      });
      var n = a(3356),
        r = a(4736),
        o = a(3322);
      const s = (0, r.createContext)({}),
        i = () => (0, r.useContext)(s),
        l = (0, r.createContext)({}),
        c = () => (0, r.useContext)(l),
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
          return (0, o.jsx)(s.Provider, {
            value: a(),
            children: (0, o.jsx)(l.Provider, {
              value: i,
              children: t
            })
          })
        }
    },
    2322: (e, t, a) => {
      a.d(t, {
        X: () => f,
        x: () => w
      });
      var n = a(4736),
        r = a(7207),
        o = a(4039),
        s = a(4955),
        i = a(7941),
        l = a(332),
        c = a(5356),
        d = a(3386),
        u = a.n(d);
      var h = a(6594),
        p = a(9770);
      const g = (0, h.Nq)({
        sha256: p.JQ
      });
      var v = a(3322);
      const w = e => {
          let {
            graphOptions: t,
            typePolicies: a = {}
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
            [i] = (0, n.useState)(new r.h({
              typePolicies: a
            })),
            d = g.concat(l.Vl.concat((e => (0, c.L)({
              ...e,
              fetch: u()
            }))({
              ...t,
              uri: s
            })));
          return new o.f({
            cache: i,
            link: d
          })
        },
        f = e => {
          let {
            children: t,
            graphOptions: a,
            typePolicies: n
          } = e;
          const r = w({
            graphOptions: a,
            typePolicies: n
          });
          return (0, v.jsx)(s.e, {
            client: r,
            children: (0, v.jsx)(i.UJ, {
              children: t
            })
          })
        }
    },
    332: (e, t, a) => {
      a.d(t, {
        AJ: () => i,
        Vl: () => l,
        u1: () => c,
        vX: () => s
      });
      var n = a(6674),
        r = a(3356),
        o = a(1938);
      const s = (0, n.QS)(null),
        i = async function(e) {
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
              n = await a.json(),
              {
                tokenExpiresIn: r = null
              } = n;
            if (null !== r) {
              const t = Math.max(0, 1e3 * (r - 5));
              setTimeout((() => {
                i(e, !0)
              }), t)
            }
            return s(n.bearerToken ?? null), n
          } catch (e) {
            return s(!1), !1
          }
        }, l = (0, o.v)(((e, t) => {
          let {
            headers: a
          } = t;
          const n = s();
          return n ? {
            headers: {
              ...a,
              authorization: `Bearer ${n}`
            }
          } : null
        })), c = () => (0, r.l)(s)
    },
    2682: (e, t, a) => {
      a.r(t), a.d(t, {
        GraphOperationsProvider: () => n.UJ,
        ReactiveStateProvider: () => r.Nj,
        RockstarGraphProvider: () => o.X,
        useApolloClient: () => o.x
      });
      var n = a(7941),
        r = a(3857),
        o = a(2322)
    },
    2195: (e, t, a) => {
      a.r(t), a.d(t, {
        base: () => p,
        cdn: () => l,
        locale: () => o,
        useBase: () => g,
        useCdn: () => c,
        useLocale: () => s
      });
      var n = a(6674),
        r = a(3356);
      const o = (0, n.QS)(document.documentElement.lang),
        s = () => (0, r.l)(o),
        i = window?.env,
        l = (0, n.QS)({
          media: i?.cdn?.media,
          videos: i?.cdn?.videos
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