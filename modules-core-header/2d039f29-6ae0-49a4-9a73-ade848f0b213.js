! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2d039f29-6ae0-49a4-9a73-ade848f0b213", e._sentryDebugIdIdentifier = "sentry-dbid-2d039f29-6ae0-49a4-9a73-ade848f0b213")
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
  [230], {
    3963: (e, n, t) => {
      "use strict";
      t.d(n, {
        A: () => a,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        i = [{
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
            location: n
          } = window, t = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), o = i.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [o, i] = n;
            return i === t && (e = {
              site: o,
              subDomain: i
            }, !0)
          })) >= 0)), a = i[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    9807: (e, n, t) => {
      "use strict";
      t.d(n, {
        UT: () => o.UT,
        hp: () => q,
        RX: () => X,
        IT: () => y,
        qs: () => i.q,
        e9: () => N,
        Es: () => $,
        bD: () => L,
        J0: () => E,
        my: () => B
      });
      var o = t(1796),
        i = t(9409),
        a = t(1403),
        r = t(555),
        s = t(2296),
        l = t(9998),
        c = t(7637),
        d = t(4252),
        u = t.n(d),
        w = t(7679);
      const p = (e, n) => {
        const t = (0, i.q)(w.Hg),
          o = {
            autoSetError: !0,
            autoSetLoading: !1,
            setTitleDataPath: "meta.title",
            ...n,
            variables: {
              locale: t,
              ...n?.variables
            }
          },
          {
            data: r,
            loading: s,
            error: l,
            ...d
          } = (0, c.I)(e, o);
        return (0, a.useEffect)((() => {
          if (r && o.setTitleDataPath) {
            const e = u().get(r, o.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [r]), (0, a.useEffect)((() => (o.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: s
        }), () => {
          o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [s]), (0, a.useEffect)((() => {
          if (o.autoSetError && l) throw new Error(String(l))
        }), [l]), {
          loading: s,
          error: l,
          data: r,
          ...d
        }
      };
      var m = t(6632);
      const g = (0, a.createContext)((() => ({
          data: null
        }))),
        h = new Promise((e => {
          e()
        })),
        f = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        v = [() => h, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(f))
        }],
        k = (0, a.createContext)((() => v)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: n
          } = e;
          return (0, m.jsx)(k.Provider, {
            value: l.n,
            children: (0, m.jsx)(g.Provider, {
              value: p,
              children: n
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, n) => (0, a.useContext)(g)(e, n)),
        x = (window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(k)(e)), (0, a.createContext)({})),
        E = () => (0, a.useContext)(x);
      var S = t(5019);
      const T = "graph-token-context",
        P = {
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)("tokenPing"),
          tokenPingExpires: (0, o.UT)(100)
        },
        _ = window?.[T] ?? (window[T] = (0, a.createContext)(P)),
        C = e => {
          let {
            children: n,
            token: t,
            tokenPing: o,
            tokenPingExpires: i
          } = e;
          return (0, m.jsx)(_.Provider, {
            value: {
              token: t,
              tokenPing: o,
              tokenPingExpires: i
            },
            children: n
          })
        },
        L = () => {
          const {
            token: e,
            tokenPing: n,
            tokenPingExpires: t
          } = (0, a.useContext)(_);
          return [e, n, t]
        },
        N = () => {
          const [e] = L();
          return (0, i.q)(e)
        },
        $ = () => {
          const [e, n, t] = L();
          return () => (async e => {
            let {
              url: n,
              token: t,
              tokenPingExpires: o
            } = e;
            const i = n?.();
            try {
              const e = o?.() ?? 0,
                n = t?.() ?? null,
                a = (e => {
                  const n = Date.now() / 1e3;
                  return Math.ceil(e - n)
                })(e) > 0;
              if (!1 === n) return {
                bearerToken: n
              };
              if (a && n) return {
                bearerToken: n
              };
              const r = await fetch(i, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await r.json(),
                {
                  tokenExpiresTime: l = null
                } = s;
              return null !== l && o?.(l), t(s.bearerToken ?? null), s
            } catch (e) {
              return t(!1), !1
            }
          })({
            url: n,
            token: e,
            tokenPingExpires: t
          })
        };
      var O = t(8102);
      var D = t(6375),
        A = t(8793),
        j = t.n(A);
      var H = t(7249),
        I = t(9961);
      const M = (0, H.ez)({
          sha256: I.sc
        }),
        U = e => {
          let {
            children: n,
            graphOptions: t,
            typePolicies: o
          } = e;
          const i = (e => {
            let {
              graphOptions: n,
              typePolicies: t = {}
            } = e;
            const o = n?.env ? X(n?.env) : n?.uri,
              i = {
                ...n,
                uri: o
              },
              [l] = (0, a.useState)(new r.D({
                typePolicies: t
              })),
              c = M.concat((e => {
                let {
                  token: n
                } = e;
                return (0, O.o)(((e, t) => {
                  let {
                    headers: o
                  } = t;
                  const i = n?.() ?? null;
                  return i ? {
                    headers: {
                      ...o,
                      authorization: `Bearer ${i}`
                    }
                  } : null
                }))
              })({
                token: n?.token
              }).concat((e => (0, D.$)({
                ...e,
                fetch: j()
              }))(i)));
            return new s.R({
              cache: l,
              link: c
            })
          })({
            graphOptions: t,
            typePolicies: o
          });
          return (0, m.jsx)(C, {
            token: t?.token,
            tokenPing: t?.tokenPing,
            tokenPingExpires: t?.tokenPingExpires,
            children: (0, m.jsx)(S.X, {
              client: i,
              children: (0, m.jsx)(b, {
                children: n
              })
            })
          })
        },
        q = e => {
          const n = "__makevars__";
          return window?.[n] || (window[n] = {}), window?.[n]?.[e] || (window[n][e] = {}), ((e, n) => (t, i) => {
            const a = window?.[e]?.[n]?.[t] ?? (0, o.UT)(i);
            return window[e][n][t] = a, a
          })(n, e)
        },
        R = q("graph-with-rs-graph"),
        B = (e, n) => {
          let {
            env: t = "prod",
            typePolicies: o,
            token: i = R("token", null),
            tokenPingExpires: a = R("tokenPingExpires", null),
            tokenPing: r = R("token", null)
          } = n;
          return function(n) {
            return (0, m.jsx)(U, {
              typePolicies: o,
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: i,
                tokenPing: r,
                tokenPingExpires: a
              },
              children: (0, m.jsx)(e, {
                ...n
              })
            })
          }
        },
        X = (q("graph-hoc"), e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
          let n = "";
          switch (e) {
            case "prod":
              n = "graph";
              break;
            case "prod-int":
              n = "graph-int";
              break;
            default:
              n = `${e}-graph`
          }
          return `https://${n}.rockstargames.com?origin=${document.location.origin}`
        })
    },
    7679: (e, n, t) => {
      "use strict";
      t.d(n, {
        Hg: () => i
      });
      var o = t(1796);
      const i = (0, o.UT)(document.documentElement.lang),
        a = window?.env,
        r = ((0, o.UT)({
          media: a?.cdn?.media,
          videos: a?.cdn?.videos
        }), document.currentScript),
        s = r?.src ? new URL(r.src).origin : "";
      let l = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${s}/`;
      l.endsWith("/") || (l = `${l}/`), (0, o.UT)(l)
    },
    1534: (e, n, t) => {
      "use strict";
      t.d(n, {
        A: () => p
      });
      var o = t(9961),
        i = t(7327),
        a = t.n(i),
        r = t(4252),
        s = t.n(r),
        l = t(5866),
        c = t(5691);
      const {
        apiHost: d
      } = (0, l.A)(), u = (0, c.t)(document.documentElement.lang), w = {}, p = async function(e) {
        let {
          fetchOptions: n = {},
          finalFetchOptions: t = {},
          query: i = null,
          pingBearer: r,
          requireBearerToken: l = !0,
          useCache: c = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: p = null
          } = await (r?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let g = `${d}/${e}`;
          if (null === i || s().isEmpty(i) || (g += `?${new URLSearchParams(i)}`), !p && l) return null;
          p && (m.Authorization = `Bearer ${p}`);
          const h = {
              headers: m
            },
            f = a().all([h, n, t]),
            v = JSON.stringify({
              ...f,
              url: g
            }),
            k = await (0, o.sc)(v);
          if (c) {
            if (w[k]?.response) return w[k].response;
            if (w[k]?.loading) return {
              error: null,
              result: null
            };
            w[k] = {
              loading: !0
            }
          }
          const b = await fetch(g, f),
            y = await b.json();
          return c && (w[k] = {
            response: y,
            loading: !1
          }), y
        } catch (n) {
          console.error(`ScApi fetch error ${e}:`, n)
        }
      }
    },
    5866: (e, n, t) => {
      "use strict";
      t.d(n, {
        A: () => s
      });
      const o = window?.env?.sc,
        i = window?.env?.marketing,
        a = e => {
          let {
            apiHost: n,
            authHost: t,
            clientId: a,
            graphEnv: r,
            scHost: s,
            hostname: l,
            cdnBase: c,
            key: d,
            marketingAuthTLD: u
          } = e;
          const w = o?.apiHost ?? n,
            p = o?.authHost ?? t,
            m = o?.cdnBase ?? c,
            g = o?.clientId ?? a,
            h = i?.marketingAuthTLD ?? u,
            f = o?.scHost ?? s;
          return {
            apiHost: `https://${w}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? r,
            host: f,
            hostname: l,
            cdnBase: m,
            key: d,
            clientId: g,
            authHost: p,
            login: `https://${p}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${p}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${p}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${h}/auth/gateway.json`,
            logout: `https://${h}/auth/sc-auth-logout`,
            pingBearer: `https://${h}/auth/ping-bearer.json`
          }
        },
        r = [a({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), a({
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
        s = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const n = r.find((n => {
              let {
                key: t
              } = n;
              return t === e
            })) ?? null;
            if (n) return n
          }
          return r.find((e => {
            let {
              hostname: n
            } = e;
            return new RegExp(n).test(document.location.hostname)
          })) || r[0]
        }
    },
    5691: (e, n, t) => {
      "use strict";
      t.d(n, {
        t: () => o
      });
      const o = e => {
        const n = e.replace("_", "-");
        return "zh-hans" === n ? "zh-cn" : n
      }
    },
    6279: (e, n, t) => {
      "use strict";
      t.d(n, {
        A: () => l
      });
      var o = t(714),
        i = t.n(o);
      const a = (0, t(3963).A)(),
        r = a?.id,
        s = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const n = {
            ...e,
            environment: r,
            display_type: s
          };
          i().dataLayer({
            dataLayer: n
          })
        }
    },
    5662: (e, n, t) => {
      "use strict";
      t.d(n, {
        bn: () => p,
        Ym: () => a,
        OG: () => s,
        ZC: () => l,
        OH: () => d
      });
      var o = t(9807),
        i = t(7679);
      const a = () => (0, o.qs)(i.Hg);
      var r = t(1403);
      const s = e => {
        const [n, t] = (0, r.useState)(null), [o, i] = (0, r.useState)(null), [a, s] = (0, r.useState)({});
        return (0, r.useLayoutEffect)((() => {
          let n = new Image,
            o = !1;
          return n.addEventListener("load", (() => {
            s({
              width: n.width,
              height: n.height
            }), n = null, o || t(!0)
          })), n.addEventListener("error", (() => {
            n = null, o || (t(!1), i(!0))
          })), n.src = e, () => {
            o = !0, null !== n && (n.src = "")
          }
        }), [e]), [n, a]
      };
      t(9779);
      const l = e => {
        const n = (0, r.useRef)();
        return (0, r.useEffect)((() => {
          n.current = e
        }), [e]), n.current
      };
      t(1534), t(4277);
      const c = "__RS_CUSTOM_EVENTS__";
      window[c] || (window[c] = {});
      const d = () => {
        const e = (e, n) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          const t = (e => `rsCustomEvent:${e}`)(e),
            o = new CustomEvent(t, {
              detail: n
            });
          window[c][t] || (window[c][t] = {
            eventQueue: [],
            subscribers: []
          }), window[c][t].eventQueue.push(o), window[c][t].subscribers.forEach((e => {
            e(o.detail)
          }))
        };
        return (0, r.useMemo)((() => ({
          dispatch: e
        })), [])
      };
      t(9269), t(6269);
      var u = t(4369),
        w = t(1977);
      const p = () => {
        const [e, n] = (0, r.useState)(!1), {
          deviceMemory: t
        } = (0, u.XB)(), {
          effectiveConnectionType: o
        } = (0, u.M5)(), {
          numberOfLogicalProcessors: i
        } = (0, u.xV)(), {
          saveData: a
        } = (0, u.zp)(), s = (() => {
          const [e, n] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              t = e => {
                n(e.matches)
              };
            return n(e?.matches), e.addEventListener("change", t), () => {
              e.removeEventListener("change", t)
            }
          }), []), e
        })(), l = () => {
          const r = (() => {
            const e = e => !1 === e;
            if (s) return !1;
            if (w.n8 || w.lT || w.w || w.UX) return !1;
            const n = "Safari" === w.C0,
              r = "Firefox" === w.C0,
              l = o && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(o),
              c = i && i >= 4,
              d = t && t >= 4;
            return !(e(!a) || e(l) || e(c) || !n && !r && e(d))
          })();
          r !== e && n(r)
        };
        return (0, r.useEffect)((() => (l(), window.addEventListener("online", l), window.addEventListener("offline", l), window.addEventListener("devicememory", l), () => {
          window.removeEventListener("online", l), window.removeEventListener("offline", l), window.removeEventListener("devicememory", l)
        })), [t, o, e, i, a, s]), e
      }
    },
    4277: (e, n, t) => {
      "use strict";
      t.d(n, {
        uU: () => C,
        Ax: () => g.A,
        S0: () => h.A,
        pT: () => d,
        _h: () => b,
        tI: () => f.t,
        bJ: () => m,
        Ym: () => u.Ym,
        OG: () => u.OG,
        ZC: () => u.ZC,
        L$: () => x,
        G4: () => L,
        JG: () => s
      }), t(6279);
      var o = t(6632),
        i = t(9807);
      t(7679);
      var a = t(1403);
      t(4252);
      var r = t(313);
      const s = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return t => ((e, n, t) => {
          const a = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: n
            } = (0, i.IT)(r.Translations, {
              variables: {
                config: e
              }
            });
            return n ? e => n?.translations.find((n => n.key === e))?.value ?? e : null
          }(t);
          return a ? (0, o.jsx)(e, {
            ...n,
            t: a
          }) : null
        })(e, t, n)
      };
      class l {
        constructor(e, n, t) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = n, this.id = t, this.alias = o
        }
      }
      const c = Object.freeze({
        pc: new l("pc", "PC", 8),
        ps: new l("ps", "PlayStation", 3),
        ps3: new l("ps3", "PlayStation 3", 2),
        ps4: new l("ps4", "PlayStation 4", 11),
        ps5: new l("ps5", "PlayStation 5", 20),
        xbox: new l("xbox", "Xbox", 4),
        xbox360: new l("xbox360", "Xbox 360", 1),
        xboxone: new l("xboxone", "Xbox One", 12),
        xboxsx: new l("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
        switch: new l("switch", "Nintendo Switch™", 18)
      });
      Object.freeze(Object.values(c));
      const d = e => e.keys().forEach(e);
      var u = t(5662);
      const w = (0, i.hp)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        p = "data-disallow-body-scroll",
        m = e => {
          const n = (0, i.qs)(w),
            t = Object.values(n).some((e => !!e));
          return (0, a.useEffect)((() => {
            t ? document.documentElement.setAttribute(p, "true") : document.documentElement.removeAttribute(p)
          }), [t]), {
            bodyShouldLock: t,
            setBodyIsLocked: t => (e => w(e))({
              ...n,
              [e]: t
            })
          }
        };
      var g = t(1534),
        h = t(5866),
        f = t(5691);
      const v = "rockstar-games-web";
      let k;
      try {
        const e = window.localStorage.getItem(v);
        k = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        k = {}
      }
      const b = (0, i.UT)(k),
        y = e => {
          let {
            key: n,
            value: t
          } = e;
          if (null == n) throw Error("You have to specify a key and a value.");
          const o = {
            ...b() ?? {}
          };
          return o[n] = t, null === t && delete o[n], window.localStorage.setItem(v, JSON.stringify(o)), b(o), o
        },
        x = () => ({
          lsSettings: (0, i.qs)(b),
          settingsReactive: b,
          mutateLSSettings: y
        });
      t(9269);
      const E = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        S = () => {
          const e = window.innerWidth,
            n = window.innerHeight,
            t = E;
          return Object.keys(E).map((n => {
            const {
              min: o,
              max: i
            } = E[n], a = e >= o && e <= i, r = e >= o;
            t[n] = {
              activeExact: a,
              activeMin: r,
              min: o,
              max: i
            }
          })), {
            isMobile: e < E.sm.min,
            isTablet: e < E.md.max,
            breakpoints: t,
            windowWidth: e,
            windowHeight: n
          }
        },
        T = (0, a.createContext)(S()),
        {
          Consumer: P
        } = T,
        _ = (0, i.UT)(S()),
        C = e => {
          let {
            children: n
          } = e;
          const t = (0, i.qs)(_);
          return (0, a.useEffect)((() => {
            const e = () => {
              _(S())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.jsx)(T.Provider, {
            value: t,
            children: n
          })
        },
        L = () => (0, a.useContext)(T);
      t(6269)
    },
    9269: (e, n, t) => {
      "use strict";
      var o = t(1403);
      t(6632);
      const i = (0, o.createContext)(),
        {
          Consumer: a
        } = i
    },
    6269: (e, n, t) => {
      "use strict";
      var o = t(9807);
      t(1403), t(6632), (0, o.UT)(!1)
    },
    313: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Translations"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "config"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "config"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "config"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 144
        }
      };

      function t(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var o = e.type;
          "NamedType" === o.kind && n.add(o.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, n)
        }))
      }
      n.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var o = {};

      function i(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var o = e.definitions[t];
          if (o.name && o.name.value == n) return o
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), o[e.name.value] = n
        }
      })), e.exports = n, e.exports.Translations = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var a = o[n] || new Set,
          r = new Set,
          s = new Set;
        for (a.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (o[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var o = i(e, n);
          o && t.definitions.push(o)
        })), t
      }(n, "Translations")
    }
  }
]);