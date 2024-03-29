! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0f5e3ae8-00e6-4ecc-9c6f-5da9c92b1e75", e._sentryDebugIdIdentifier = "sentry-dbid-0f5e3ae8-00e6-4ecc-9c6f-5da9c92b1e75")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [356], {
    14812: (e, t, n) => {
      n.d(t, {
        UT: () => o.UT,
        C2: () => N,
        mg: () => W,
        wH: () => p.wH,
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
      var o = n(83328),
        r = n(34608),
        a = n(88200),
        s = n(16296),
        i = n(28120),
        c = n(35876),
        l = n(94412),
        d = n(73660),
        u = n.n(d),
        p = n(34424);
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
      var g = n(63480);
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
        v = (0, a.createContext)((() => m)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(v.Provider, {
            value: c.c,
            children: (0, g.jsx)(h.Provider, {
              value: w,
              children: t
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(h)(e, t)),
        E = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(v)(e)),
        _ = (0, a.createContext)({}),
        x = () => (0, a.useContext)(_),
        P = (0, a.createContext)({}),
        T = () => (0, a.useContext)(P);
      var C = n(75060);
      const H = "graph-token-context",
        $ = {
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)("tokenPing"),
          tokenPingExpires: (0, o.UT)(100)
        },
        S = window?.[H] ?? (window[H] = (0, a.createContext)($)),
        U = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: r
          } = e;
          return (0, g.jsx)(S.Provider, {
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
          } = (0, a.useContext)(S);
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
      var L = n(59740);
      var B = n(99810),
        D = n(96020),
        O = n.n(D);
      var A = n(72676),
        R = n(17664);
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
          return (0, g.jsx)(U, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, g.jsx)(C.g, {
              client: r,
              children: (0, g.jsx)(b, {
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
            return (0, g.jsx)(z, {
              typePolicies: o,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: r,
                tokenPing: s,
                tokenPingExpires: a
              },
              children: (0, g.jsx)(e, {
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
    34424: (e, t, n) => {
      n.d(t, {
        EH: () => r,
        wH: () => u
      });
      var o = n(83328);
      const r = (0, o.UT)(document.documentElement.lang),
        a = window?.env;
      (0, o.UT)({
        media: a?.cdn?.media,
        videos: a?.cdn?.videos
      });
      var s = n(34608);
      const i = document.currentScript,
        c = i?.src ? new URL(i.src).origin : "";
      let l = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${c}/`;
      l.endsWith("/") || (l = `${l}/`);
      const d = (0, o.UT)(l),
        u = () => (0, s.g)(d)
    },
    81340: (e, t, n) => {
      n.d(t, {
        c: () => w
      });
      var o = n(17664),
        r = n(3652),
        a = n.n(r),
        s = n(73660),
        i = n.n(s),
        c = n(29452),
        l = n(16716);
      const {
        apiHost: d
      } = (0, c.c)(), u = (0, l._)(document.documentElement.lang), p = {}, w = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: s,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: w = null
          } = await (s?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let h = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !w && c) return null;
          w && (g.Authorization = `Bearer ${w}`);
          const k = {
              headers: g
            },
            f = a().all([k, t, n]),
            m = JSON.stringify({
              ...f,
              url: h
            }),
            v = await (0, o.MB)(m);
          if (l) {
            if (p[v]?.response) return p[v].response;
            if (p[v]?.loading) return {
              error: null,
              result: null
            };
            p[v] = {
              loading: !0
            }
          }
          const b = await fetch(h, f),
            y = await b.json();
          return l && (p[v] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    29452: (e, t, n) => {
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
            w = o?.authHost ?? n,
            g = o?.cdnBase ?? l,
            h = o?.clientId ?? a,
            k = r?.marketingAuthTLD ?? u,
            f = o?.scHost ?? i;
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? s,
            host: f,
            hostname: c,
            cdnBase: g,
            key: d,
            clientId: h,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${h}`,
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
    16716: (e, t, n) => {
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
      var o = n(14812),
        r = n(34424);
      const a = () => (0, o.gh)(r.EH);
      var s = n(88200);
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
      n(13557), n(81340);
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
      n(87208), n(94832)
    },
    87208: (e, t, n) => {
      var o = n(88200);
      n(63480);
      const r = (0, o.createContext)(),
        {
          Consumer: a
        } = r
    },
    94832: (e, t, n) => {
      var o = n(14812);
      n(88200), n(63480), (0, o.UT)(!1)
    },
    37019: (e, t, n) => {
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
//# sourceMappingURL=85e22f1f8b63a20b5b5b75f5887b1717.js.map