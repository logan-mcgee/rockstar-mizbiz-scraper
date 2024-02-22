! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "db49ca59-e8ae-4d91-be4f-a5ddf41bc8c2", e._sentryDebugIdIdentifier = "sentry-dbid-db49ca59-e8ae-4d91-be4f-a5ddf41bc8c2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [356], {
    4812: (e, t, n) => {
      n.d(t, {
        UT: () => o.UT,
        C2: () => N,
        mg: () => W,
        aU: () => T,
        cQ: () => E,
        UL: () => y,
        gh: () => r.g,
        Wy: () => M,
        aI: () => I,
        vb: () => j,
        oT: () => x,
        EB: () => X
      });
      var o = n(3328),
        r = n(4608),
        a = n(8200),
        s = n(6296),
        i = n(8120),
        c = n(5876),
        l = n(4412),
        d = n(3660),
        u = n.n(d),
        p = n(4424);
      const g = (e, t) => {
        const n = (0, r.g)(p.EH),
          o = {
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
            data: s,
            loading: i,
            error: c,
            ...d
          } = (0, l.U)(e, o);
        return (0, a.useEffect)((() => {
          if (s && o.setTitleDataPath) {
            const e = u().get(s, o.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, a.useEffect)((() => (o.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, a.useEffect)((() => {
          if (o.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: s,
          ...d
        }
      };
      var w = n(3480);
      const h = (0, a.createContext)((() => ({
          data: null
        }))),
        k = new Promise((e => {
          e()
        })),
        f = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new s.Y)
        },
        m = [() => k, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new i.u(f))
        }],
        b = (0, a.createContext)((() => m)),
        v = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, w.jsx)(b.Provider, {
            value: c.c,
            children: (0, w.jsx)(h.Provider, {
              value: g,
              children: t
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(h)(e, t)),
        E = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(b)(e)),
        _ = (0, a.createContext)({}),
        x = () => (0, a.useContext)(_),
        P = (0, a.createContext)({}),
        T = () => (0, a.useContext)(P);
      var C = n(5060);
      const $ = "graph-token-context",
        S = {
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)("tokenPing"),
          tokenPingExpires: (0, o.UT)(100)
        },
        U = window?.[$] ?? (window[$] = (0, a.createContext)(S)),
        H = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, w.jsx)(U.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: r
            },
            children: t
          })
        },
        j = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, a.useContext)(U);
          return [e, t, n]
        },
        M = () => {
          const [e] = j();
          return (0, r.g)(e)
        },
        I = () => {
          const [e, t, n] = j();
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
              const s = await fetch(r, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await s.json(),
                {
                  tokenExpiresTime: c = null
                } = i;
              return null !== c && o?.(c), n(i.bearerToken ?? null), i
            } catch (e) {
              return n(!1), !1
            }
          })({
            url: t,
            token: e,
            tokenPingExpires: n
          })
        };
      var L = n(9740);
      var B = n(9810),
        D = n(6020),
        O = n.n(D);
      var A = n(2676),
        R = n(7664);
      const q = (0, A.Ad)({
          sha256: R.MB
        }),
        z = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = (e => {
            let {
              graphOptions: t,
              typePolicies: n = {}
            } = e;
            const o = t?.env ? W(t?.env) : t?.uri,
              [r] = (0, a.useState)(new s.Y({
                typePolicies: n
              })),
              c = q.concat((e => {
                let {
                  token: t
                } = e;
                return (0, L.Q)(((e, n) => {
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
              }).concat((e => (0, B.w)({
                ...e,
                fetch: O()
              }))({
                ...t,
                uri: o
              })));
            return new i.u({
              cache: r,
              link: c
            })
          })({
            graphOptions: n,
            typePolicies: o
          });
          return (0, w.jsx)(H, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, w.jsx)(C.g, {
              client: r,
              children: (0, w.jsx)(v, {
                children: t
              })
            })
          })
        },
        N = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, r) => {
            const a = window?.[e]?.[t]?.[n] ?? (0, o.UT)(r);
            return window[e][t][n] = a, a
          })(t, e)
        },
        Q = N("graph-with-rs-graph"),
        X = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: o,
            token: r = Q("token", null),
            tokenPingExpires: a = Q("tokenPingExpires", null),
            tokenPing: s = Q("token", null)
          } = t;
          return function(t) {
            return (0, w.jsx)(z, {
              typePolicies: o,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: r,
                tokenPing: s,
                tokenPingExpires: a
              },
              children: (0, w.jsx)(e, {
                ...t
              })
            })
          }
        },
        W = (N("graph-hoc"), e => {
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
        })
    },
    4424: (e, t, n) => {
      n.d(t, {
        EH: () => r
      });
      var o = n(3328);
      const r = (0, o.UT)(document.documentElement.lang),
        a = window?.env,
        s = ((0, o.UT)({
          media: a?.cdn?.media,
          videos: a?.cdn?.videos
        }), document.currentScript),
        i = s?.src ? new URL(s.src).origin : "";
      let c = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${i}/`;
      c.endsWith("/") || (c = `${c}/`), (0, o.UT)(c)
    },
    1340: (e, t, n) => {
      n.d(t, {
        c: () => g
      });
      var o = n(7664),
        r = n(3652),
        a = n.n(r),
        s = n(3660),
        i = n.n(s),
        c = n(9452),
        l = n(6716);
      const {
        apiHost: d
      } = (0, c.c)(), u = (0, l._)(document.documentElement.lang), p = {}, g = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: s,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: g = null
        } = await (s?.()) ?? {}, w = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...u && {
            "X-lang": u
          }
        };
        let h = `${d}/${e}`;
        if (null === r || i().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !g && c) return null;
        g && (w.Authorization = `Bearer ${g}`);
        const k = {
            headers: w
          },
          f = a().all([k, t, n]),
          m = JSON.stringify({
            ...f,
            url: h
          }),
          b = await (0, o.MB)(m);
        if (l) {
          if (p[b]?.response) return p[b].response;
          if (p[b]?.loading) return {
            error: null,
            result: null
          };
          p[b] = {
            loading: !0
          }
        }
        const v = await fetch(h, f),
          y = await v.json();
        return l && (p[b] = {
          response: y,
          loading: !1
        }), y
      }
    },
    9452: (e, t, n) => {
      n.d(t, {
        c: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        a = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: a,
            graphEnv: s,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const p = o?.apiHost ?? t,
            g = o?.authHost ?? n,
            w = o?.cdnBase ?? l,
            h = o?.clientId ?? a,
            k = r?.marketingAuthTLD ?? u,
            f = o?.scHost ?? i;
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? s,
            host: f,
            hostname: c,
            cdnBase: w,
            key: d,
            clientId: h,
            authHost: g,
            login: `https://${g}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${k}.rockstargames.com/auth/gateway.json`,
            logout: `https://${k}.rockstargames.com/auth/sc-auth-logout`,
            pingBearer: `https://${k}.rockstargames.com/auth/ping-bearer.json`
          }
        },
        s = [a({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www"
        }), a({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www"
        })],
        i = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = s.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return s.find((e => {
            let {
              hostname: t
            } = e;
            return t.test(document.location.hostname)
          })) || s[0]
        }
    },
    6716: (e, t, n) => {
      n.d(t, {
        _: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    6464: (e, t, n) => {
      n.d(t, {
        y_: () => a,
        kJ: () => i,
        kj: () => l
      });
      var o = n(4812),
        r = n(4424);
      const a = () => (0, o.gh)(r.EH);
      var s = n(8200);
      const i = e => {
        const [t, n] = (0, s.useState)(null), [o, r] = (0, s.useState)(null), [a, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
          let t = new Image,
            o = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, o || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, o || (n(!1), r(!0))
          })), t.src = e, () => {
            o = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      n(3557), n(1340);
      const c = "__RS_CUSTOM_EVENTS__";
      window[c] || (window[c] = {});
      const l = () => {
        const e = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          const n = (e => `rsCustomEvent:${e}`)(e),
            o = new CustomEvent(n, {
              detail: t
            });
          window[c][n] || (window[c][n] = {
            eventQueue: [],
            subscribers: []
          }), window[c][n].eventQueue.push(o), window[c][n].subscribers.forEach((e => {
            e(o.detail)
          }))
        };
        return (0, s.useMemo)((() => ({
          dispatch: e
        })), [])
      };
      n(7208), n(4832)
    },
    7208: (e, t, n) => {
      var o = n(8200);
      n(3480);
      const r = (0, o.createContext)(),
        {
          Consumer: a
        } = r
    },
    4832: (e, t, n) => {
      var o = n(4812);
      n(8200), n(3480), (0, o.UT)(!1)
    },
    7019: (e, t, n) => {
      n.d(t, {
        U: () => o,
        c: () => a
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0));
          return {
            ...r[o >= 0 ? o : 0],
            currentSite: e
          }
        }
    }
  }
]);
//# sourceMappingURL=def6ab6c4f1d809036aa625e2e1216f5.js.map