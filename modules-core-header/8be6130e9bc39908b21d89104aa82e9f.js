! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "208461b1-5fe5-4d63-9bb3-abb01e56414b", e._sentryDebugIdIdentifier = "sentry-dbid-208461b1-5fe5-4d63-9bb3-abb01e56414b")
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
  [784], {
    53592: (e, t, n) => {
      "use strict";
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
    61076: (e, t, n) => {
      "use strict";
      n.d(t, {
        UT: () => o.UT,
        C2: () => q,
        mg: () => F,
        aU: () => P,
        cQ: () => x,
        UL: () => y,
        gh: () => i.g,
        Wy: () => U,
        aI: () => D,
        vb: () => $,
        oT: () => S,
        EB: () => V
      });
      var o = n(46516),
        i = n(75896),
        a = n(51664),
        r = n(4914),
        s = n(49996),
        c = n(48516),
        l = n(33544),
        d = n(73660),
        u = n.n(d),
        g = n(55806);
      const m = (e, t) => {
        const n = (0, i.g)(g.EH),
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
            error: c,
            ...d
          } = (0, l.U)(e, o);
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
          if (o.autoSetError && c) throw new Error(String(c))
        }), [c]), {
          loading: s,
          error: c,
          data: r,
          ...d
        }
      };
      var p = n(95240);
      const w = (0, a.createContext)((() => ({
          data: null
        }))),
        h = new Promise((e => {
          e()
        })),
        f = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.Y)
        },
        k = [() => h, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.u(f))
        }],
        v = (0, a.createContext)((() => k)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(v.Provider, {
            value: c.c,
            children: (0, p.jsx)(w.Provider, {
              value: m,
              children: t
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(w)(e, t)),
        x = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(v)(e)),
        E = (0, a.createContext)({}),
        S = () => (0, a.useContext)(E),
        T = (0, a.createContext)({}),
        P = () => (0, a.useContext)(T);
      var _ = n(78244);
      const C = "graph-token-context",
        N = {
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)("tokenPing"),
          tokenPingExpires: (0, o.UT)(100)
        },
        j = window?.[C] ?? (window[C] = (0, a.createContext)(N)),
        L = e => {
          let {
            children: t,
            token: n,
            tokenPing: o,
            tokenPingExpires: i
          } = e;
          return (0, p.jsx)(j.Provider, {
            value: {
              token: n,
              tokenPing: o,
              tokenPingExpires: i
            },
            children: t
          })
        },
        $ = () => {
          const {
            token: e,
            tokenPing: t,
            tokenPingExpires: n
          } = (0, a.useContext)(j);
          return [e, t, n]
        },
        U = () => {
          const [e] = $();
          return (0, i.g)(e)
        },
        D = () => {
          const [e, t, n] = $();
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
                  tokenExpiresTime: c = null
                } = s;
              return null !== c && o?.(c), n(s.bearerToken ?? null), s
            } catch (e) {
              return n(!1), !1
            }
          })({
            url: t,
            token: e,
            tokenPingExpires: n
          })
        };
      var H = n(80776);
      var O = n(6972),
        I = n(31344),
        M = n.n(I);
      var B = n(35240),
        A = n(92560);
      const z = (0, B.Ad)({
          sha256: A.MB
        }),
        R = e => {
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
            const o = t?.env ? F(t?.env) : t?.uri,
              [i] = (0, a.useState)(new r.Y({
                typePolicies: n
              })),
              c = z.concat((e => {
                let {
                  token: t
                } = e;
                return (0, H.Q)(((e, n) => {
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
              }).concat((e => (0, O.w)({
                ...e,
                fetch: M()
              }))({
                ...t,
                uri: o
              })));
            return new s.u({
              cache: i,
              link: c
            })
          })({
            graphOptions: n,
            typePolicies: o
          });
          return (0, p.jsx)(L, {
            token: n?.token,
            tokenPing: n?.tokenPing,
            tokenPingExpires: n?.tokenPingExpires,
            children: (0, p.jsx)(_.g, {
              client: i,
              children: (0, p.jsx)(b, {
                children: t
              })
            })
          })
        },
        q = e => {
          const t = "__makevars__";
          return window?.[t] || (window[t] = {}), window?.[t]?.[e] || (window[t][e] = {}), ((e, t) => (n, i) => {
            const a = window?.[e]?.[t]?.[n] ?? (0, o.UT)(i);
            return window[e][t][n] = a, a
          })(t, e)
        },
        X = q("graph-with-rs-graph"),
        V = (e, t) => {
          let {
            env: n = "prod",
            typePolicies: o,
            token: i = X("token", null),
            tokenPingExpires: a = X("tokenPingExpires", null),
            tokenPing: r = X("token", null)
          } = t;
          return function(t) {
            return (0, p.jsx)(R, {
              typePolicies: o,
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: i,
                tokenPing: r,
                tokenPingExpires: a
              },
              children: (0, p.jsx)(e, {
                ...t
              })
            })
          }
        },
        F = (q("graph-hoc"), e => {
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
      "use strict";
      n.d(t, {
        EH: () => i
      });
      var o = n(46516);
      const i = (0, o.UT)(document.documentElement.lang),
        a = window?.env,
        r = ((0, o.UT)({
          media: a?.cdn?.media,
          videos: a?.cdn?.videos
        }), document.currentScript),
        s = r?.src ? new URL(r.src).origin : "";
      let c = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${s}/`;
      c.endsWith("/") || (c = `${c}/`), (0, o.UT)(c)
    },
    28152: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => m
      });
      var o = n(92560),
        i = n(50632),
        a = n.n(i),
        r = n(73660),
        s = n.n(r),
        c = n(42991),
        l = n(76772);
      const {
        apiHost: d
      } = (0, c.c)(), u = (0, l._)(document.documentElement.lang), g = {}, m = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: i = null,
          pingBearer: r,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: m = null
          } = await (r?.()) ?? {}, p = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let w = `${d}/${e}`;
          if (null === i || s().isEmpty(i) || (w += `?${new URLSearchParams(i)}`), !m && c) return null;
          m && (p.Authorization = `Bearer ${m}`);
          const h = {
              headers: p
            },
            f = a().all([h, t, n]),
            k = JSON.stringify({
              ...f,
              url: w
            }),
            v = await (0, o.MB)(k);
          if (l) {
            if (g[v]?.response) return g[v].response;
            if (g[v]?.loading) return {
              error: null,
              result: null
            };
            g[v] = {
              loading: !0
            }
          }
          const b = await fetch(w, f),
            y = await b.json();
          return l && (g[v] = {
            response: y,
            loading: !1
          }), y
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    42991: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => s
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
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const g = o?.apiHost ?? t,
            m = o?.authHost ?? n,
            p = o?.cdnBase ?? l,
            w = o?.clientId ?? a,
            h = i?.marketingAuthTLD ?? u,
            f = o?.scHost ?? s;
          return {
            apiHost: `https://${g}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? r,
            host: f,
            hostname: c,
            cdnBase: p,
            key: d,
            clientId: w,
            authHost: m,
            login: `https://${m}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${w}`,
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
    76772: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    99928: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => c
      });
      var o = n(15908),
        i = n.n(o);
      const a = (0, n(53592).c)(),
        r = a?.id,
        s = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        c = e => {
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
    72908: (e, t, n) => {
      "use strict";
      n.d(t, {
        y_: () => a,
        kJ: () => s,
        i0: () => c,
        kj: () => d
      });
      var o = n(61076),
        i = n(55806);
      const a = () => (0, o.gh)(i.EH);
      var r = n(51664);
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
      n(57013);
      const c = e => {
        const t = (0, r.useRef)();
        return (0, r.useEffect)((() => {
          t.current = e
        }), [e]), t.current
      };
      n(28152), n(25144);
      const l = "__RS_CUSTOM_EVENTS__";
      window[l] || (window[l] = {});
      const d = () => {
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
        return (0, r.useMemo)((() => ({
          dispatch: e
        })), [])
      };
      n(33820), n(2148)
    },
    25144: (e, t, n) => {
      "use strict";
      n.d(t, {
        a7: () => A,
        s9: () => P.c,
        KS: () => f,
        kh: () => b,
        I$: () => y,
        S_: () => _.c,
        UN: () => k,
        U$: () => $,
        G6: () => N,
        _g: () => C._,
        Qz: () => T,
        sL: () => q,
        y_: () => x.y_,
        kJ: () => x.kJ,
        i0: () => x.i0,
        ym: () => D,
        bk: () => z,
        S6: () => a,
        au: () => c,
        Ux: () => m
      });
      var o = n(99928),
        i = n(95240);
      const a = e => t => ((e, t) => (0, i.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, o.c)(e)
        }
      }))(e, t);
      var r = n(61076),
        s = n(55806);
      const c = e => t => ((e, t) => {
        const n = (0, r.gh)(s.EH);
        return (0, i.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(51664),
        d = n(73660),
        u = n.n(d),
        g = n(95532);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const o = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, r.UL)(g.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(n);
          return o ? (0, i.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t)
      };
      class p {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const w = Object.freeze({
          pc: new p("pc", "PC", 8),
          ps: new p("ps", "PlayStation", 3),
          ps3: new p("ps3", "PlayStation 3", 2),
          ps4: new p("ps4", "PlayStation 4", 11),
          ps5: new p("ps5", "PlayStation 5", 20),
          xbox: new p("xbox", "Xbox", 4),
          xbox360: new p("xbox360", "Xbox 360", 1),
          xboxone: new p("xboxone", "Xbox One", 12),
          xboxsx: new p("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new p("switch", "Nintendo Switch™", 18)
        }),
        h = Object.freeze(Object.values(w));

      function f(e) {
        if (!e) return;
        if (e instanceof p) return e;
        const t = e.toString().toLowerCase();
        return h.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const k = e => e.keys().forEach(e),
        v = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        b = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return v.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        y = () => [w.xboxsx.name, w.ps5.name];
      var x = n(72908);
      const E = (0, r.C2)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        S = "data-disallow-body-scroll",
        T = e => {
          const t = (0, r.gh)(E),
            n = Object.values(t).some((e => !!e));
          return (0, l.useEffect)((() => {
            n ? document.documentElement.setAttribute(S, "true") : document.documentElement.removeAttribute(S)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => E(e))({
              ...t,
              [e]: n
            })
          }
        };
      var P = n(28152),
        _ = n(42991),
        C = n(76772);
      const N = e => {
          const t = u().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
        },
        j = "rockstar-games-web";
      let L;
      try {
        const e = window.localStorage.getItem(j);
        L = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        L = {}
      }
      const $ = (0, r.UT)(L),
        U = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...$() ?? {}
          };
          return o[t] = n, null === n && delete o[t], window.localStorage.setItem(j, JSON.stringify(o)), $(o), o
        },
        D = () => ({
          lsSettings: (0, r.gh)($),
          settingsReactive: $,
          mutateLSSettings: U
        });
      n(33820);
      const H = {
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
        O = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = H;
          return Object.keys(H).map((t => {
            const {
              min: o,
              max: i
            } = H[t], a = e >= o && e <= i, r = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: r,
              min: o,
              max: i
            }
          })), {
            isMobile: e < H.sm.min,
            isTablet: e < H.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        I = (0, l.createContext)(O()),
        {
          Consumer: M
        } = I,
        B = (0, r.UT)(O()),
        A = e => {
          let {
            children: t
          } = e;
          const n = (0, r.gh)(B);
          return (0, l.useEffect)((() => {
            const e = () => {
              B(O())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.jsx)(I.Provider, {
            value: n,
            children: t
          })
        },
        z = () => (0, l.useContext)(I);
      n(2148);
      const R = (0, l.createContext)({}),
        q = () => (0, l.useContext)(R)
    },
    33820: (e, t, n) => {
      "use strict";
      var o = n(51664);
      n(95240);
      const i = (0, o.createContext)(),
        {
          Consumer: a
        } = i
    },
    2148: (e, t, n) => {
      "use strict";
      var o = n(61076);
      n(51664), n(95240), (0, o.UT)(!1)
    },
    95532: e => {
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
          var c = s;
          s = new Set, c.forEach((function(e) {
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