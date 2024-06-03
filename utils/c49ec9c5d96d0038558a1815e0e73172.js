! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f74a278a-1db7-40b4-825e-cb4e18c622a7", e._sentryDebugIdIdentifier = "sentry-dbid-f74a278a-1db7-40b4-825e-cb4e18c622a7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [372, 400, 32, 828, 744, 543], {
    576: (e, t, n) => {
      "use strict";
      var r = n(664),
        o = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var r, c = {},
          l = null,
          d = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) a.call(t, r) && !i.hasOwnProperty(r) && (c[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === c[r] && (c[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: c,
          _owner: s.current
        }
      }
    },
    240: (e, t, n) => {
      "use strict";
      e.exports = n(576)
    },
    775: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => f
      });
      var r = n(456),
        o = n(128),
        a = n.n(o),
        s = n(660),
        i = n.n(s),
        c = n(916),
        l = n(280);
      const {
        apiHost: d
      } = (0, c.c)(), u = (0, l._)(document.documentElement.lang), m = {}, f = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: s,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: f = null
          } = await (s?.()) ?? {}, h = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let g = `${d}/${e}`;
          if (null === o || i().isEmpty(o) || (g += `?${new URLSearchParams(o)}`), !f && c) return null;
          f && (h.Authorization = `Bearer ${f}`);
          const w = {
              headers: h
            },
            p = a().all([w, t, n]),
            v = JSON.stringify({
              ...p,
              url: g
            }),
            b = await (0, r.sha256)(v);
          if (l) {
            if (m[b]?.response) return m[b].response;
            if (m[b]?.loading) return {
              error: null,
              result: null
            };
            m[b] = {
              loading: !0
            }
          }
          const S = await fetch(g, p),
            k = await S.json();
          return l && (m[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    916: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => i
      });
      const r = window?.env?.sc,
        o = window?.env?.marketing,
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
          const m = r?.apiHost ?? t,
            f = r?.authHost ?? n,
            h = r?.cdnBase ?? l,
            g = r?.clientId ?? a,
            w = o?.marketingAuthTLD ?? u,
            p = r?.scHost ?? i;
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? s,
            host: p,
            hostname: c,
            cdnBase: h,
            key: d,
            clientId: g,
            authHost: f,
            login: `https://${f}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/auth/ping-bearer.json`
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
            return new RegExp(t).test(document.location.hostname)
          })) || s[0]
        }
    },
    400: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ArraySort: () => f,
        Platform: () => i,
        Platforms: () => c,
        detectIfWeShouldAnchorSomewhere: () => s,
        downloadFile: () => S,
        findPlatform: () => d,
        flattenObjectPreserveNesting: () => h,
        getCdnPrefix: () => b,
        getGen8Consoles: () => k,
        getGen9Consoles: () => y,
        importAll: () => m,
        nestFlattenedObject: () => g,
        prettyPrint: () => p,
        scrollToElement: () => a,
        stripHTML: () => w
      });
      var r = n(660),
        o = n.n(r);
      const a = e => {
          let {
            element: t
          } = e;
          window.scrollTo({
            top: t.offsetTop,
            behavior: "smooth"
          })
        },
        s = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e));
          n && a({
            element: n
          })
        };
      class i {
        constructor(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = r
        }
      }
      const c = Object.freeze({
          pc: new i("pc", "PC", 8),
          ps3: new i("ps3", "PlayStation 3", 2),
          ps4: new i("ps4", "PlayStation 4", 11),
          ps5: new i("ps5", "PlayStation 5", 20),
          xbox360: new i("xbox360", "Xbox 360", 1),
          xboxone: new i("xboxone", "Xbox One", 12),
          xboxsx: new i("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new i("switch", "Nintendo Switch™", 18)
        }),
        l = Object.freeze(Object.values(c));

      function d(e) {
        if (!e) return;
        if (e instanceof i) return e;
        const t = e.toString().toLowerCase();
        return l.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var u = n(240);
      const m = e => e.keys().forEach(e),
        f = {
          alphabetical: {
            asc: (e, t) => [...e].sort(((e, n) => e[t].localeCompare(n[t], "en", {
              ignorePunctuation: !0
            }))).reverse(),
            desc: (e, t) => [...e].sort(((e, n) => e[t].localeCompare(n[t], "en", {
              ignorePunctuation: !0
            })))
          },
          date: {
            asc: (e, t) => [...e].sort(((e, n) => new Date(e[t]).getTime() > new Date(n[t]).getTime() ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, n) => new Date(e[t]).getTime() < new Date(n[t]).getTime() ? 1 : -1))
          },
          numerical: {
            asc: (e, t) => [...e].sort(((e, n) => e[t] > n[t] ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, n) => e[t] < n[t] ? 1 : -1))
          }
        },
        h = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((r => {
            const o = t ? `${t}.${r}` : r;
            "object" == typeof e[r] && null !== e[r] ? Object.assign(n, h(e[r], o)) : n[o] = e[r]
          })), n
        },
        g = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const r = e[n],
                a = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: r
                  }
                } : {
                  [t]: e
                }));
              o().merge(t, a)
            } else o().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        w = e => e.replace(/(<([^>]+)>)/gi, ""),
        p = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, u.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
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
        S = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            n = (e => {
              const t = new URL(e).pathname.split("/"),
                n = t[t.length - 1];
              return decodeURIComponent(n)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              r = document.createElement("a");
            r.href = t, r.setAttribute("download", n), document.body.appendChild(r), r.click(), document.body.removeChild(r)
          })).catch((e => {
            console.log(e)
          }))
        },
        k = () => [c.xbox360.name, c.xboxone.name, c.ps3.name, c.ps4.name, c.pc.name],
        y = () => [c.xboxsx.name, c.ps5.name]
    },
    280: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    300: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => l
      });
      var r = n(204),
        o = n.n(r);
      const a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = (() => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = a.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, o] = t;
            return o === n && (e = {
              site: r,
              subDomain: o
            }, !0)
          })) >= 0)), o = a[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        })(),
        i = s?.id,
        c = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: i,
            display_type: c
          };
          o().dataLayer({
            dataLayer: t
          })
        }
    },
    32: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        withGtmTracking: () => a,
        withLocale: () => c,
        withMediaBasedProps: () => m,
        withTranslations: () => h
      });
      var r = n(300),
        o = n(240);
      const a = e => t => ((e, t) => (0, o.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, r.c)(e)
        }
      }))(e, t);
      var s = n(52),
        i = n(680);
      const c = e => t => ((e, t) => {
        const n = (0, s.useReactiveVar)(i.locale);
        return (0, o.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(664),
        d = n(660),
        u = n.n(d);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return n => ((e, t, n) => {
          const [r, a] = (0, l.useState)(t), s = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map((e => s(e)));
              t = {
                ...t,
                items: e
              }
            }
            const r = t?.mediaQueryList;
            return r?.length ? (r.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              t = {
                ...t,
                ...e
              }
            })), t) : t
          };
          return (0, l.useEffect)((() => {
            const e = u().debounce((() => {
              a(s(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, o.jsx)(e, {
            ...r
          })
        })(e, n, t)
      };
      var f = n(448);
      const h = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const r = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, s.useQuery)(f.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(n);
          return r ? (0, o.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, n, t)
      }
    },
    828: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => b.C0,
        useLocale: () => a,
        useNewswirePost: () => v.useNewswirePost,
        usePreloadImg: () => i,
        usePrevious: () => d,
        useQueryParams: () => l,
        useRockstarEventDispatcher: () => w,
        useRockstarEventSubscriber: () => p,
        useRockstarLocalState: () => u,
        useScApi: () => f,
        useScroll: () => b.QZ
      });
      var r = n(52),
        o = n(680);
      const a = () => (0, r.useReactiveVar)(o.locale);
      var s = n(664);
      const i = e => {
        const [t, n] = (0, s.useState)(null), [r, o] = (0, s.useState)(null), [a, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), o(!0))
          })), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, a]
      };
      var c = n(13);
      const l = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        },
        u = () => {
          const e = (0, r.useState)(),
            t = (0, r.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: r
              } = e;
              t({
                navOpen: null !== n ? n : !r
              })
            },
            clearError: () => {
              t({
                error: {
                  code: null,
                  message: null
                }
              })
            },
            setBreadcrumb: function() {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              t({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: n,
                  filter: r
                }
              })
            },
            setLoading: e => {
              t({
                loading: e
              })
            },
            setHeaderHidden: e => {
              t({
                headerHidden: e
              })
            },
            setNavHidden: e => {
              t({
                navHidden: e
              })
            },
            setNormalLogo: e => {
              t({
                normalLogo: e
              })
            },
            setSearch: e => {
              t({
                search: e
              })
            },
            setTitle: e => {
              const n = "Rockstar Games";
              let r = e;
              e.endsWith(n) || (r = `${e} - ${n}`), document.title = r, t({
                title: r
              })
            },
            setError: e => {
              let {
                code: n,
                message: r
              } = e;
              t({
                error: {
                  code: n,
                  message: r
                }
              })
            },
            setStandalone: e => {
              t({
                standalone: e
              })
            },
            setCustomFooter: e => {
              t({
                customFooter: e
              })
            },
            updateGameData: n => {
              let {
                base: r = null,
                navOpen: o = !1
              } = n;
              const a = {
                ...e.gameData
              };
              null !== r && (a.base = r.replace(/\/$/, "")), null !== o && (a.navOpen = o), t({
                gameData: a
              })
            }
          }
        };
      var m = n(775);
      const f = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: o = {},
            query: a = null
          } = t;
          const i = (0, r.useRockstarTokenPing)(),
            [c, l] = (0, s.useState)(null),
            [d, u] = (0, s.useState)(!1),
            [f, h] = (0, s.useState)(null),
            g = (0, s.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: r = {}
                } = t;
                h(null), l(null), u(!0);
                const s = await (0, m.c)(n ?? e, {
                  pingBearer: i,
                  fetchOptions: o,
                  finalFetchOptions: r,
                  query: a
                });
                return s?.status || h(JSON.stringify(s?.error)), l(s), u(!1), s
              } catch (e) {
                h(String(e)), u(!1)
              }
              return null
            }), [e, o, a]);
          return (0, s.useEffect)((() => {
            null === c && null === f && !d && n && g()
          }), [n, c, f, d, g]), {
            data: c,
            error: f,
            loading: d,
            fetch: g
          }
        },
        h = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[h] || (window[h] = {});
      const w = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].eventQueue.push(r), window[h][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        p = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = g(e);
            return window[h][n] || (window[h][n] = {
              eventQueue: [],
              subscribers: []
            }), window[h][n].subscribers.push(t), window[h][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[h][n].subscribers = window[h][n].subscribers.filter((e => e !== t)), 0 === window[h][n].subscribers.length && delete window[h][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var v = n(640),
        b = n(172)
    },
    372: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => S.DataLayerProvider,
        Platform: () => o.Platform,
        Platforms: () => o.Platforms,
        ResizeProvider: () => k.a7,
        coreScApiFetch: () => m.c,
        detectIfWeShouldAnchorSomewhere: () => o.detectIfWeShouldAnchorSomewhere,
        downloadFile: () => o.downloadFile,
        findPlatform: () => o.findPlatform,
        getCdnPrefix: () => o.getCdnPrefix,
        getGen8Consoles: () => o.getGen8Consoles,
        getGen9Consoles: () => o.getGen9Consoles,
        getScConfigForOrigin: () => f.c,
        importAll: () => o.importAll,
        lsSettingsReactive: () => v.settingsReactive,
        mutateLSSettings: () => v.mutateLSSettings,
        safeStyles: () => p,
        scrollToElement: () => o.scrollToElement,
        supportedBrowsers: () => b,
        toScLocaleString: () => h._,
        useBodyScrollable: () => u,
        useDataLayer: () => S.useDataLayer,
        useLocale: () => a.useLocale,
        useNewswirePost: () => a.useNewswirePost,
        usePreloadImg: () => a.usePreloadImg,
        usePrevious: () => a.usePrevious,
        useQueryParams: () => a.useQueryParams,
        useRockstarEventDispatcher: () => a.useRockstarEventDispatcher,
        useRockstarEventSubscriber: () => a.useRockstarEventSubscriber,
        useRockstarLocalState: () => a.useRockstarLocalState,
        useRockstarWebLSSettings: () => v.useRockstarWebLSSettings,
        useScApi: () => a.useScApi,
        useScroll: () => a.useScroll,
        useWindowResize: () => k.bk,
        withGtmTracking: () => r.withGtmTracking,
        withLocale: () => r.withLocale,
        withMediaBasedProps: () => r.withMediaBasedProps,
        withTranslations: () => r.withTranslations
      });
      var r = n(32),
        o = n(400),
        a = n(828),
        s = n(664),
        i = n(52);
      const c = (0, i.makeVarNamespace)("@rockstargames/utils")("bodyIsScrollableReactive", !0),
        l = e => c(e),
        d = "data-disallow-body-scroll",
        u = () => {
          const e = (0, i.useReactiveVar)(c);
          return (0, s.useEffect)((() => {
            e ? document.documentElement.removeAttribute(d) : document.documentElement.setAttribute(d, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: l
          }
        };
      var m = n(775),
        f = n(916),
        h = n(280),
        g = n(660),
        w = n.n(g);
      const p = e => {
        const t = w().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
      };
      var v = n(744);
      const b = /Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Firefox\/(10[2-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Maci.+ Version\/(15\.([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(16[._]\d+|(1[7-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var S = n(543),
        k = n(628)
    },
    744: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        mutateLSSettings: () => i,
        settingsReactive: () => s,
        useRockstarWebLSSettings: () => c
      });
      var r = n(52);
      const o = "rockstar-games-web";
      let a;
      try {
        const e = window.localStorage.getItem(o);
        a = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        a = {}
      }
      const s = (0, r.makeVar)(a),
        i = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const r = {
            ...s() ?? {}
          };
          return r[t] = n, null === n && delete r[t], window.localStorage.setItem(o, JSON.stringify(r)), s(r), r
        },
        c = () => ({
          lsSettings: (0, r.useReactiveVar)(s),
          settingsReactive: s,
          mutateLSSettings: i
        })
    },
    543: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => d,
        ResizeProvider: () => o.a7,
        ScrollProvider: () => a.Iq,
        newswirePost: () => r,
        useDataLayer: () => l
      });
      var r = n(640),
        o = n(628),
        a = n(172),
        s = n(664),
        i = n(240);
      const c = (0, s.createContext)({}),
        l = () => (0, s.useContext)(c),
        d = e => {
          let {
            children: t,
            ...n
          } = e;
          const r = l() ?? {},
            o = (0, s.useMemo)((() => ({
              ...r,
              ...n
            })), [r, n]);
          return (0, i.jsx)(c.Provider, {
            value: o,
            children: t
          })
        }
    },
    640: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Consumer: () => s,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(664),
        o = n(240);
      const a = (0, r.createContext)(),
        {
          Consumer: s
        } = a,
        i = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, o.jsx)(a.Provider, {
            value: t,
            children: n
          })
        },
        c = () => (0, r.useContext)(a)
    },
    628: (e, t, n) => {
      "use strict";
      n.d(t, {
        a7: () => u,
        bk: () => m
      });
      var r = n(664),
        o = n(52),
        a = n(240);
      const s = {
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
        i = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = s;
          return Object.keys(s).map((t => {
            const {
              min: r,
              max: o
            } = s[t], a = e >= r && e <= o, i = e >= r;
            n[t] = {
              activeExact: a,
              activeMin: i,
              min: r,
              max: o
            }
          })), {
            isMobile: e < s.sm.min,
            isTablet: e < s.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        c = (0, r.createContext)(i()),
        {
          Consumer: l
        } = c,
        d = (0, o.makeVar)(i()),
        u = e => {
          let {
            children: t
          } = e;
          const n = (0, o.useReactiveVar)(d);
          return (0, r.useEffect)((() => {
            const e = () => {
              d(i())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, a.jsx)(c.Provider, {
            value: n,
            children: t
          })
        },
        m = () => (0, r.useContext)(c)
    },
    172: (e, t, n) => {
      "use strict";
      n.d(t, {
        C0: () => i,
        Iq: () => d,
        QZ: () => l
      });
      var r = n(52),
        o = n(664),
        a = n(240);
      const s = (0, r.makeVar)(!1),
        i = e => s(e),
        c = (0, o.createContext)(null),
        l = () => (0, o.useContext)(c),
        d = e => {
          let {
            children: t
          } = e;
          const [n, l] = (0, o.useState)(window.pageYOffset), [d, u] = (0, o.useState)(null), [m, f] = (0, o.useState)(!1), h = (0, r.useReactiveVar)(s);
          let g;
          const w = () => {
            f(!0), clearTimeout(g), g = setTimeout((() => {
              f(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (h) return void u(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), m || u(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [m, h]), (0, o.useMemo)((() => (0, a.jsx)(c.Provider, {
            value: {
              freezeUserShouldSeeMore: h,
              pageYOffset: n,
              pauseUserShouldSeeMore: w,
              setFreezeUserShouldSeeMore: i,
              userShouldSeeMore: d
            },
            children: t
          })), [h, n, w, d])
        }
    },
    448: e => {
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
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
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
      var r = {};

      function o(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var r = e.definitions[n];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.Translations = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var a = r[t] || new Set,
          s = new Set,
          i = new Set;
        for (a.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return s.forEach((function(t) {
          var r = o(e, t);
          r && n.definitions.push(r)
        })), n
      }(t, "Translations")
    }
  }
]);