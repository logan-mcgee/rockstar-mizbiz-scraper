! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6c42db4-be37-4094-86a2-29e36be1d2d4", e._sentryDebugIdIdentifier = "sentry-dbid-e6c42db4-be37-4094-86a2-29e36be1d2d4")
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
  [834], {
    3963: (e, t, n) => {
      "use strict";
      n.d(t, {
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
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = i.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, i] = t;
            return i === n && (e = {
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
    9807: (e, t, n) => {
      "use strict";
      n.d(t, {
        UT: () => o.UT,
        hp: () => M,
        RX: () => z,
        IT: () => y,
        qs: () => i.q,
        e9: () => $,
        Es: () => O,
        bD: () => N,
        J0: () => E,
        my: () => B
      });
      var o = n(1796),
        i = n(9409),
        a = n(1403),
        r = n(555),
        s = n(2296),
        l = n(9998),
        c = n(7637),
        d = n(4252),
        u = n.n(d),
        p = n(7679);
      const w = (e, t) => {
        const n = (0, i.q)(p.Hg),
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
      var g = n(6632);
      const h = (0, a.createContext)((() => ({
          data: null
        }))),
        m = new Promise((e => {
          e()
        })),
        f = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        k = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(f))
        }],
        v = (0, a.createContext)((() => k)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, g.jsx)(v.Provider, {
            value: l.n,
            children: (0, g.jsx)(h.Provider, {
              value: w,
              children: t
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(h)(e, t)),
        x = (window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(v)(e)), (0, a.createContext)({})),
        E = () => (0, a.useContext)(x);
      var S = n(5019);
      const T = "graph-token-context",
        P = {
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)("tokenPing"),
          tokenPingExpires: (0, o.UT)(100)
        },
        _ = window?.[T] ?? (window[T] = (0, a.createContext)(P)),
        C = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: i
          } = e;
          return (0, g.jsx)(_.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: i
            },
            children: t
          })
        },
        N = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, a.useContext)(_);
          return [e, t, n]
        },
        $ = () => {
          const [e] = N();
          return (0, i.q)(e)
        },
        O = () => {
          const [e, t, n] = N();
          return () => (async e => {
            let {
              url: t,
              token: n,
              tokenPingExpires: o
            } = e;
            const i = t?.();
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
              return null !== l && o?.(l), n(s.bearerToken ?? null), s
            } catch (e) {
              return n(!1), !1
            }
          })({
            url: t,
            token: e,
            tokenPingExpires: n
          })
        };
      var D = n(8102);
      var A = n(6375),
        L = n(8793),
        j = n.n(L);
      var H = n(7249),
        I = n(9961);
      const U = (0, H.ez)({
          sha256: I.sc
        }),
        q = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const i = (e => {
            let {
              graphOptions: t,
              typePolicies: n = {}
            } = e;
            const o = t?.env ? z(t?.env) : t?.uri,
              i = {
                ...t,
                uri: o
              },
              [l] = (0, a.useState)(new r.D({
                typePolicies: n
              })),
              c = U.concat((e => {
                let {
                  token: t
                } = e;
                return (0, D.o)(((e, n) => {
                  let {
                    headers: o
                  } = n;
                  const i = t?.() ?? null;
                  return i ? {
                    headers: {
                      ...o,
                      authorization: `Bearer ${i}`
                    }
                  } : null
                }))
              })({
                token: t?.token
              }).concat((e => (0, A.$)({
                ...e,
                fetch: j()
              }))(i)));
            return new s.R({
              cache: l,
              link: c
            })
          })({
            graphOptions: n,
            typePolicies: o
          });
          return (0, g.jsx)(C, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, g.jsx)(S.X, {
              client: i,
              children: (0, g.jsx)(b, {
                children: t
              })
            })
          })
        },
        M = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, i) => {
            const a = window?.[e]?.[t]?.[n] ?? (0, o.UT)(i);
            return window[e][t][n] = a, a
          })(t, e)
        },
        R = M("graph-with-rs-graph"),
        B = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: o,
            token: i = R("token", null),
            tokenPingExpires: a = R("tokenPingExpires", null),
            tokenPing: r = R("token", null)
          } = t;
          return function(t) {
            return (0, g.jsx)(q, {
              typePolicies: o,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: i,
                tokenPing: r,
                tokenPingExpires: a
              },
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        },
        z = (M("graph-hoc"), e => {
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
    7679: (e, t, n) => {
      "use strict";
      n.d(t, {
        Hg: () => i
      });
      var o = n(1796);
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
    1534: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => w
      });
      var o = n(9961),
        i = n(7327),
        a = n.n(i),
        r = n(4252),
        s = n.n(r),
        l = n(5866),
        c = n(5691);
      const {
        apiHost: d
      } = (0, l.A)(), u = (0, c.t)(document.documentElement.lang), p = {}, w = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: i = null,
          pingBearer: r,
          requireBearerToken: l = !0,
          useCache: c = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: w = null
          } = await (r?.()) ?? {}, g = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let h = `${d}/${e}`;
          if (null === i || s().isEmpty(i) || (h += `?${new URLSearchParams(i)}`), !w && l) return null;
          w && (g.Authorization = `Bearer ${w}`);
          const m = {
              headers: g
            },
            f = a().all([m, t, n]),
            k = JSON.stringify({
              ...f,
              url: h
            }),
            v = await (0, o.sc)(k);
          if (c) {
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
          return c && (p[v] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    5866: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => s
      });
      const o = window?.env?.sc,
        i = window?.env?.marketing,
        a = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: a,
            graphEnv: r,
            scHost: s,
            hostname: l,
            cdnBase: c,
            key: d,
            marketingAuthTLD: u
          } = e;
          const p = o?.apiHost ?? t,
            w = o?.authHost ?? n,
            g = o?.cdnBase ?? c,
            h = o?.clientId ?? a,
            m = i?.marketingAuthTLD ?? u,
            f = o?.scHost ?? s;
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? r,
            host: f,
            hostname: l,
            cdnBase: g,
            key: d,
            clientId: h,
            authHost: w,
            login: `https://${w}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${w}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${w}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${m}/auth/gateway.json`,
            logout: `https://${m}/auth/sc-auth-logout`,
            pingBearer: `https://${m}/auth/ping-bearer.json`
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
            const t = r.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return r.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || r[0]
        }
    },
    5691: (e, t, n) => {
      "use strict";
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    6279: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => l
      });
      var o = n(714),
        i = n.n(o);
      const a = (0, n(3963).A)(),
        r = a?.id,
        s = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: r,
            display_type: s
          };
          i().dataLayer({
            dataLayer: t
          })
        }
    },
    922: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ym: () => a,
        OG: () => s,
        ZC: () => l,
        OH: () => d
      });
      var o = n(9807),
        i = n(7679);
      const a = () => (0, o.qs)(i.Hg);
      var r = n(1403);
      const s = e => {
        const [t, n] = (0, r.useState)(null), [o, i] = (0, r.useState)(null), [a, s] = (0, r.useState)({});
        return (0, r.useLayoutEffect)((() => {
          let t = new Image,
            o = !1;
          return t.addEventListener("load", (() => {
            s({
              width: t.width,
              height: t.height
            }), t = null, o || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, o || (n(!1), i(!0))
          })), t.src = e, () => {
            o = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      n(9779);
      const l = e => {
        const t = (0, r.useRef)();
        return (0, r.useEffect)((() => {
          t.current = e
        }), [e]), t.current
      };
      n(1534), n(4277);
      const c = "__RS_CUSTOM_EVENTS__";
      window[c] || (window[c] = {});
      const d = () => {
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
        return (0, r.useMemo)((() => ({
          dispatch: e
        })), [])
      };
      n(9269), n(6269)
    },
    4277: (e, t, n) => {
      "use strict";
      n.d(t, {
        uU: () => C,
        Ax: () => h.A,
        S0: () => m.A,
        pT: () => d,
        _h: () => b,
        tI: () => f.t,
        bJ: () => g,
        Ym: () => u.Ym,
        OG: () => u.OG,
        ZC: () => u.ZC,
        L$: () => x,
        G4: () => N,
        JG: () => s
      }), n(6279);
      var o = n(6632),
        i = n(9807);
      n(7679);
      var a = n(1403);
      n(4252);
      var r = n(313);
      const s = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const a = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, i.IT)(r.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(n);
          return a ? (0, o.jsx)(e, {
            ...t,
            t: a
          }) : null
        })(e, n, t)
      };
      class l {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
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
      var u = n(922);
      const p = (0, i.hp)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        w = "data-disallow-body-scroll",
        g = e => {
          const t = (0, i.qs)(p),
            n = Object.values(t).some((e => !!e));
          return (0, a.useEffect)((() => {
            n ? document.documentElement.setAttribute(w, "true") : document.documentElement.removeAttribute(w)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => p(e))({
              ...t,
              [e]: n
            })
          }
        };
      var h = n(1534),
        m = n(5866),
        f = n(5691);
      const k = "rockstar-games-web";
      let v;
      try {
        const e = window.localStorage.getItem(k);
        v = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        v = {}
      }
      const b = (0, i.UT)(v),
        y = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...b() ?? {}
          };
          return o[t] = n, null === n && delete o[t], window.localStorage.setItem(k, JSON.stringify(o)), b(o), o
        },
        x = () => ({
          lsSettings: (0, i.qs)(b),
          settingsReactive: b,
          mutateLSSettings: y
        });
      n(9269);
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
            t = window.innerHeight,
            n = E;
          return Object.keys(E).map((t => {
            const {
              min: o,
              max: i
            } = E[t], a = e >= o && e <= i, r = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: r,
              min: o,
              max: i
            }
          })), {
            isMobile: e < E.sm.min,
            isTablet: e < E.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        T = (0, a.createContext)(S()),
        {
          Consumer: P
        } = T,
        _ = (0, i.UT)(S()),
        C = e => {
          let {
            children: t
          } = e;
          const n = (0, i.qs)(_);
          return (0, a.useEffect)((() => {
            const e = () => {
              _(S())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.jsx)(T.Provider, {
            value: n,
            children: t
          })
        },
        N = () => (0, a.useContext)(T);
      n(6269)
    },
    9269: (e, t, n) => {
      "use strict";
      var o = n(1403);
      n(6632);
      const i = (0, o.createContext)(),
        {
          Consumer: a
        } = i
    },
    6269: (e, t, n) => {
      "use strict";
      var o = n(9807);
      n(1403), n(6632), (0, o.UT)(!1)
    },
    313: e => {
      var t = {
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

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var o = e.type;
          "NamedType" === o.kind && t.add(o.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
        }))
      }
      t.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var o = {};

      function i(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var o = e.definitions[n];
          if (o.name && o.name.value == t) return o
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), o[e.name.value] = t
        }
      })), e.exports = t, e.exports.Translations = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var a = o[t] || new Set,
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
        return r.forEach((function(t) {
          var o = i(e, t);
          o && n.definitions.push(o)
        })), n
      }(t, "Translations")
    }
  }
]);