! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "05679b44-7e09-40a3-9de7-0e3ce42cac56", e._sentryDebugIdIdentifier = "sentry-dbid-05679b44-7e09-40a3-9de7-0e3ce42cac56")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [608], {
    53592: (e, t, n) => {
      n.d(t, {
        U: () => o,
        c: () => s
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
        s = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    61076: (e, t, n) => {
      n.d(t, {
        UT: () => o.UT,
        C2: () => N,
        mg: () => W,
        aU: () => T,
        cQ: () => y,
        UL: () => E,
        gh: () => r.g,
        Wy: () => M,
        aI: () => I,
        vb: () => j,
        oT: () => _,
        EB: () => X
      });
      var o = n(46516),
        r = n(75896),
        s = n(51664),
        a = n(4914),
        i = n(49996),
        c = n(48516),
        l = n(33544),
        u = n(73660),
        d = n.n(u),
        p = n(55806);
      const w = (e, t) => {
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
            data: a,
            loading: i,
            error: c,
            ...u
          } = (0, l.U)(e, o);
        return (0, s.useEffect)((() => {
          if (a && o.setTitleDataPath) {
            const e = d().get(a, o.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [a]), (0, s.useEffect)((() => (o.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: i
        }), () => {
          o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [i]), (0, s.useEffect)((() => {
          if (o.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: i,
          error: c,
          data: a,
          ...u
        }
      };
      var g = n(95240);
      const h = (0, s.createContext)((() => ({
          data: null
        }))),
        k = new Promise((e => {
          e()
        })),
        f = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new a.Y)
        },
        m = [() => k, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new i.u(f))
        }],
        b = (0, s.createContext)((() => m)),
        v = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(b.Provider, {
            value: c.c,
            children: (0, g.jsx)(h.Provider, {
              value: w,
              children: t
            })
          })
        }),
        E = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, s.useContext)(h)(e, t)),
        y = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, s.useContext)(b)(e)),
        x = (0, s.createContext)({}),
        _ = () => (0, s.useContext)(x),
        P = (0, s.createContext)({}),
        T = () => (0, s.useContext)(P);
      var C = n(78244);
      const $ = "graph-token-context",
        S = {
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)("tokenPing"),
          tokenPingExpires: (0, o.UT)(100)
        },
        U = window?.[$] ?? (window[$] = (0, s.createContext)(S)),
        H = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, g.jsx)(U.Provider, {
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
          } = (0, s.useContext)(U);
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
                s = (e => {
                  const t = Date.now() / 1e3;
                  return Math.ceil(e - t)
                })(e) > 0;
              if (!1 === t) return {
                bearerToken: t
              };
              if (s && t) return {
                bearerToken: t
              };
              const a = await fetch(r, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                i = await a.json(),
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
      var L = n(80776);
      var B = n(6972),
        D = n(31344),
        O = n.n(D);
      var A = n(35240),
        R = n(92560);
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
              [r] = (0, s.useState)(new a.Y({
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
          return (0, g.jsx)(H, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, g.jsx)(C.g, {
              client: r,
              children: (0, g.jsx)(v, {
                children: t
              })
            })
          })
        },
        N = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, r) => {
            const s = window?.[e]?.[t]?.[n] ?? (0, o.UT)(r);
            return window[e][t][n] = s, s
          })(t, e)
        },
        Q = N("graph-with-rs-graph"),
        X = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: o,
            token: r = Q("token", null),
            tokenPingExpires: s = Q("tokenPingExpires", null),
            tokenPing: a = Q("token", null)
          } = t;
          return function(t) {
            return (0, g.jsx)(z, {
              typePolicies: o,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: r,
                tokenPing: a,
                tokenPingExpires: s
              },
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        },
        W = (N("graph-hoc"), e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
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
    55806: (e, t, n) => {
      n.d(t, {
        EH: () => r
      });
      var o = n(46516);
      const r = (0, o.UT)(document.documentElement.lang),
        s = window?.env,
        a = ((0, o.UT)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }), document.currentScript),
        i = a?.src ? new URL(a.src).origin : "";
      let c = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${i}/`;
      c.endsWith("/") || (c = `${c}/`), (0, o.UT)(c)
    },
    28152: (e, t, n) => {
      n.d(t, {
        c: () => w
      });
      var o = n(92560),
        r = n(50632),
        s = n.n(r),
        a = n(73660),
        i = n.n(a),
        c = n(42991),
        l = n(76772);
      const {
        apiHost: u
      } = (0, c.c)(), d = (0, l._)(document.documentElement.lang), p = {}, w = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: a,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: w = null
          } = await (a?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...d && {
              "X-lang": d
            }
          };
          let h = `${u}/${e}`;
          if (null === r || i().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !w && c) return null;
          w && (g.Authorization = `Bearer ${w}`);
          const k = {
              headers: g
            },
            f = s().all([k, t, n]),
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
            E = await v.json();
          return l && (p[b] = {
            response: E,
            loading: !1
          }), E
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    42991: (e, t, n) => {
      n.d(t, {
        c: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        s = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: s,
            graphEnv: a,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: u,
            marketingAuthTLD: d
          } = e;
          const p = o?.apiHost ?? t,
            w = o?.authHost ?? n,
            g = o?.cdnBase ?? l,
            h = o?.clientId ?? s,
            k = r?.marketingAuthTLD ?? d,
            f = o?.scHost ?? i;
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? a,
            host: f,
            hostname: c,
            cdnBase: g,
            key: u,
            clientId: h,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${k}/auth/gateway.json`,
            logout: `https://${k}/auth/sc-auth-logout`,
            pingBearer: `https://${k}/auth/ping-bearer.json`
          }
        },
        a = [s({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), s({
          key: "sc-prod",
          clientId: "socialclub",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        i = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return a.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || a[0]
        }
    },
    76772: (e, t, n) => {
      n.d(t, {
        _: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    94532: (e, t, n) => {
      n.d(t, {
        y_: () => s,
        kJ: () => i,
        i0: () => c,
        kj: () => u
      });
      var o = n(61076),
        r = n(55806);
      const s = () => (0, o.gh)(r.EH);
      var a = n(51664);
      const i = e => {
        const [t, n] = (0, a.useState)(null), [o, r] = (0, a.useState)(null), [s, i] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
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
        }), [e]), [t, s]
      };
      n(57013);
      const c = e => {
        const t = (0, a.useRef)();
        return (0, a.useEffect)((() => {
          t.current = e
        }), [e]), t.current
      };
      n(28152);
      const l = "__RS_CUSTOM_EVENTS__";
      window[l] || (window[l] = {});
      const u = () => {
        const e = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          const n = (e => `rsCustomEvent:${e}`)(e),
            o = new CustomEvent(n, {
              detail: t
            });
          window[l][n] || (window[l][n] = {
            eventQueue: [],
            subscribers: []
          }), window[l][n].eventQueue.push(o), window[l][n].subscribers.forEach((e => {
            e(o.detail)
          }))
        };
        return (0, a.useMemo)((() => ({
          dispatch: e
        })), [])
      };
      n(33820), n(2148)
    },
    33820: (e, t, n) => {
      var o = n(51664);
      n(95240);
      const r = (0, o.createContext)(),
        {
          Consumer: s
        } = r
    },
    2148: (e, t, n) => {
      var o = n(61076);
      n(51664), n(95240), (0, o.UT)(!1)
    }
  }
]);