/*! For license information please see 2cb24b4b00bbb9d222ef80502cec5a3d.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "81021814-c744-4d8f-95c2-28fa1d8f55ab", e._sentryDebugIdIdentifier = "sentry-dbid-81021814-c744-4d8f-95c2-28fa1d8f55ab")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [978, 848, 948, 444, 368, 320], {
    996: (e, t, n) => {
      "use strict";
      var r = n(200),
        a = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (c[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === c[r] && (c[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: d,
          props: c,
          _owner: o.current
        }
      }
    },
    480: (e, t, n) => {
      "use strict";
      e.exports = n(996)
    },
    916: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => f
      });
      var r = n(456),
        a = n(128),
        s = n.n(a),
        o = n(660),
        i = n.n(o),
        c = n(240),
        l = n(592);
      const {
        apiHost: d
      } = (0, c.c)(), u = (0, l._)(document.documentElement.lang), m = {}, f = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: a = null,
          pingBearer: o,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: f = null
        } = await (o?.()) ?? {}, g = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...u && {
            "X-lang": u
          }
        };
        let h = `${d}/${e}`;
        if (null === a || i().isEmpty(a) || (h += `?${new URLSearchParams(a)}`), !f && c) return null;
        f && (g.Authorization = `Bearer ${f}`);
        const v = {
            headers: g
          },
          w = s().all([v, t, n]),
          p = JSON.stringify({
            ...w,
            url: h
          }),
          k = await (0, r.sha256)(p);
        if (l) {
          if (m[k]?.response) return m[k].response;
          if (m[k]?.loading) return {
            error: null,
            result: null
          };
          m[k] = {
            loading: !0
          }
        }
        const b = await fetch(h, w),
          S = await b.json();
        return l && (m[k] = {
          response: S,
          loading: !1
        }), S
      }
    },
    240: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => i
      });
      const r = window?.env?.sc,
        a = window?.env?.marketing,
        s = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: s,
            graphEnv: o,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const m = r?.apiHost ?? t,
            f = r?.authHost ?? n,
            g = r?.cdnBase ?? l,
            h = r?.clientId ?? s,
            v = a?.marketingAuthTLD ?? u,
            w = r?.scHost ?? i;
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? o,
            host: w,
            hostname: c,
            cdnBase: g,
            key: d,
            clientId: h,
            authHost: f,
            login: `https://${f}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${v}.rockstargames.com/auth/gateway.json`,
            logout: `https://${v}.rockstargames.com/auth/sc-auth-logout`,
            pingBearer: `https://${v}.rockstargames.com/auth/ping-bearer.json`
          }
        },
        o = [s({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www"
        }), s({
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
            const t = o.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return o.find((e => {
            let {
              hostname: t
            } = e;
            return t.test(document.location.hostname)
          })) || o[0]
        }
    },
    848: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ArraySort: () => l,
        detectIfWeShouldAnchorSomewhere: () => o,
        flattenObjectPreserveNesting: () => d,
        getCdnPrefix: () => h,
        getGen8Consoles: () => v,
        getGen9Consoles: () => w,
        importAll: () => c,
        nestFlattenedObject: () => u,
        prettyPrint: () => f,
        scrollToElement: () => s,
        stripHTML: () => m
      });
      var r = n(660),
        a = n.n(r);
      const s = e => {
          let {
            element: t
          } = e;
          window.scrollTo({
            top: t.offsetTop,
            behavior: "smooth"
          })
        },
        o = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e));
          n && s({
            element: n
          })
        };
      var i = n(480);
      const c = e => e.keys().forEach(e),
        l = {
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
        d = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((r => {
            const a = t ? `${t}.${r}` : r;
            "object" == typeof e[r] && null !== e[r] ? Object.assign(n, d(e[r], a)) : n[a] = e[r]
          })), n
        },
        u = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const r = e[n],
                s = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: r
                  }
                } : {
                  [t]: e
                }));
              a().merge(t, s)
            } else a().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        m = e => e.replace(/(<([^>]+)>)/gi, ""),
        f = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, i.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        g = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return g.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        v = () => ["xbox360", "ps4", "ps3"],
        w = () => ["xboxone", "ps5", "pc"]
    },
    592: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    226: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => l
      });
      var r = n(204),
        a = n.n(r);
      const s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        o = (() => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, a] = t;
            return a === n && (e = {
              site: r,
              subDomain: a
            }, !0)
          })) >= 0));
          return {
            ...s[r >= 0 ? r : 0],
            currentSite: e
          }
        })(),
        i = o?.id,
        c = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: i,
            display_type: c
          };
          a().dataLayer({
            dataLayer: t
          })
        }
    },
    948: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        withGtmTracking: () => s,
        withLocale: () => c,
        withMediaBasedProps: () => m,
        withTranslations: () => g
      });
      var r = n(226),
        a = n(480);
      const s = e => t => ((e, t) => (0, a.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, r.c)(e)
        }
      }))(e, t);
      var o = n(52),
        i = n(680);
      const c = e => t => ((e, t) => {
        const n = (0, o.useReactiveVar)(i.locale);
        return (0, a.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(200),
        d = n(660),
        u = n.n(d);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return n => ((e, t, n) => {
          const [r, s] = (0, l.useState)(t), o = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map((e => o(e)));
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
              s(o(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, a.jsx)(e, {
            ...r
          })
        })(e, n, t)
      };
      var f = n(371);
      const g = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const r = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, o.useQuery)(f.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(n);
          return r ? (0, a.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, n, t)
      }
    },
    444: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => p.C0,
        useLocale: () => s,
        useNewswirePost: () => w.useNewswirePost,
        usePreloadImg: () => i,
        useQueryParams: () => l,
        useRockstarEventDispatcher: () => h,
        useRockstarEventSubscriber: () => v,
        useRockstarLocalState: () => d,
        useScApi: () => m,
        useScroll: () => p.QZ
      });
      var r = n(52),
        a = n(680);
      const s = () => (0, r.useReactiveVar)(a.locale);
      var o = n(200);
      const i = e => {
        const [t, n] = (0, o.useState)(null), [r, a] = (0, o.useState)(null), [s, i] = (0, o.useState)({});
        return (0, o.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            i({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), a(!0))
          })), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, s]
      };
      var c = n(557);
      const l = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = () => {
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
                navOpen: a = !1
              } = n;
              const s = {
                ...e.gameData
              };
              null !== r && (s.base = r.replace(/\/$/, "")), null !== a && (s.navOpen = a), t({
                gameData: s
              })
            }
          }
        };
      var u = n(916);
      const m = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: a = {},
            query: s = null
          } = t;
          const i = (0, r.useRockstarTokenPing)(),
            [c, l] = (0, o.useState)(null),
            [d, m] = (0, o.useState)(!1),
            [f, g] = (0, o.useState)(null),
            h = (0, o.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: r = {}
                } = t;
                g(null), l(null), m(!0);
                const o = await (0, u.c)(n ?? e, {
                  pingBearer: i,
                  fetchOptions: a,
                  finalFetchOptions: r,
                  query: s
                });
                return o?.status || g(JSON.stringify(o?.error)), l(o), m(!1), o
              } catch (e) {
                g(String(e)), m(!1)
              }
              return null
            }), [e, a, s]);
          return (0, o.useEffect)((() => {
            null === c && null === f && !d && n && h()
          }), [n, c, f, d, h]), {
            data: c,
            error: f,
            loading: d,
            fetch: h
          }
        },
        f = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[f] || (window[f] = {});
      const h = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].eventQueue.push(r), window[f][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, o.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, o.useEffect)((() => {
            const n = g(e);
            return window[f][n] || (window[f][n] = {
              eventQueue: [],
              subscribers: []
            }), window[f][n].subscribers.push(t), window[f][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[f][n].subscribers = window[f][n].subscribers.filter((e => e !== t)), 0 === window[f][n].subscribers.length && delete window[f][n]
            }
          }), [e, t]), (0, o.useMemo)((() => ({})), [])
        };
      var w = n(300),
        p = n(380)
    },
    978: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => k.DataLayerProvider,
        ResizeProvider: () => b.a7,
        coreScApiFetch: () => u.c,
        detectIfWeShouldAnchorSomewhere: () => a.detectIfWeShouldAnchorSomewhere,
        getCdnPrefix: () => a.getCdnPrefix,
        getGen8Consoles: () => a.getGen8Consoles,
        getGen9Consoles: () => a.getGen9Consoles,
        getScConfigForOrigin: () => m.c,
        importAll: () => a.importAll,
        lsSettingsReactive: () => w.settingsReactive,
        mutateLSSettings: () => w.mutateLSSettings,
        safeStyles: () => v,
        scrollToElement: () => a.scrollToElement,
        supportedBrowsers: () => p,
        toScLocaleString: () => f._,
        useBodyScrollable: () => d,
        useDataLayer: () => k.useDataLayer,
        useLocale: () => s.useLocale,
        useNewswirePost: () => s.useNewswirePost,
        usePreloadImg: () => s.usePreloadImg,
        useQueryParams: () => s.useQueryParams,
        useRockstarEventDispatcher: () => s.useRockstarEventDispatcher,
        useRockstarEventSubscriber: () => s.useRockstarEventSubscriber,
        useRockstarLocalState: () => s.useRockstarLocalState,
        useRockstarWebLSSettings: () => w.useRockstarWebLSSettings,
        useScApi: () => s.useScApi,
        useScroll: () => s.useScroll,
        useWindowResize: () => b.bk,
        withGtmTracking: () => r.withGtmTracking,
        withLocale: () => r.withLocale,
        withMediaBasedProps: () => r.withMediaBasedProps,
        withTranslations: () => r.withTranslations
      });
      var r = n(948),
        a = n(848),
        s = n(444),
        o = n(200),
        i = n(52);
      const c = (0, i.makeVar)(!0),
        l = "data-disallow-body-scroll",
        d = () => {
          const e = (0, i.useReactiveVar)(c);
          return (0, o.useEffect)((() => {
            e ? document.documentElement.removeAttribute(l) : document.documentElement.setAttribute(l, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: c
          }
        };
      var u = n(916),
        m = n(240),
        f = n(592),
        g = n(660),
        h = n.n(g);
      const v = e => {
        const t = h().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
      };
      var w = n(368);
      const p = /Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Firefox\/(10[2-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Maci.+ Version\/(15\.([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(16[._]\d+|(1[7-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var k = n(320),
        b = n(428)
    },
    368: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        mutateLSSettings: () => i,
        settingsReactive: () => o,
        useRockstarWebLSSettings: () => c
      });
      var r = n(52);
      const a = "rockstar-games-web";
      let s;
      try {
        const e = window.localStorage.getItem(a);
        s = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        s = {}
      }
      const o = (0, r.makeVar)(s),
        i = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const r = {
            ...o() ?? {}
          };
          return r[t] = n, null === n && delete r[t], window.localStorage.setItem(a, JSON.stringify(r)), o(r), r
        },
        c = () => ({
          lsSettings: (0, r.useReactiveVar)(o),
          settingsReactive: o,
          mutateLSSettings: i
        })
    },
    320: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => d,
        ResizeProvider: () => a.a7,
        ScrollProvider: () => s.Iq,
        newswirePost: () => r,
        useDataLayer: () => l
      });
      var r = n(300),
        a = n(428),
        s = n(380),
        o = n(200),
        i = n(480);
      const c = (0, o.createContext)({}),
        l = () => (0, o.useContext)(c),
        d = e => {
          let {
            children: t,
            ...n
          } = e;
          const r = l() ?? {},
            a = (0, o.useMemo)((() => ({
              ...r,
              ...n
            })), [r, n]);
          return (0, i.jsx)(c.Provider, {
            value: a,
            children: t
          })
        }
    },
    300: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Consumer: () => o,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(200),
        a = n(480);
      const s = (0, r.createContext)(),
        {
          Consumer: o
        } = s,
        i = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, a.jsx)(s.Provider, {
            value: t,
            children: n
          })
        },
        c = () => (0, r.useContext)(s)
    },
    428: (e, t, n) => {
      "use strict";
      n.d(t, {
        a7: () => u,
        bk: () => m
      });
      var r = n(200),
        a = n(52),
        s = n(480);
      const o = {
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
            n = o;
          return Object.keys(o).map((t => {
            const {
              min: r,
              max: a
            } = o[t], s = e >= r && e <= a, i = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: i,
              min: r,
              max: a
            }
          })), {
            isMobile: e <= o.sm.min,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        c = (0, r.createContext)(i()),
        {
          Consumer: l
        } = c,
        d = (0, a.makeVar)(i()),
        u = e => {
          let {
            children: t
          } = e;
          const n = (0, a.useReactiveVar)(d);
          return (0, r.useEffect)((() => {
            const e = () => {
              d(i())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(c.Provider, {
            value: n,
            children: t
          })
        },
        m = () => (0, r.useContext)(c)
    },
    380: (e, t, n) => {
      "use strict";
      n.d(t, {
        C0: () => i,
        Iq: () => d,
        QZ: () => l
      });
      var r = n(52),
        a = n(200),
        s = n(480);
      const o = (0, r.makeVar)(!1),
        i = e => o(e),
        c = (0, a.createContext)(null),
        l = () => (0, a.useContext)(c),
        d = e => {
          let {
            children: t
          } = e;
          const [n, l] = (0, a.useState)(window.pageYOffset), [d, u] = (0, a.useState)(null), [m, f] = (0, a.useState)(!1), g = (0, r.useReactiveVar)(o);
          let h;
          const v = () => {
            f(!0), clearTimeout(h), h = setTimeout((() => {
              f(!1)
            }), 2e3)
          };
          return (0, a.useEffect)((() => {
            let e;
            const t = () => {
              if (g) return void u(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), m || u(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [m, g]), (0, a.useMemo)((() => (0, s.jsx)(c.Provider, {
            value: {
              freezeUserShouldSeeMore: g,
              pageYOffset: n,
              pauseUserShouldSeeMore: v,
              setFreezeUserShouldSeeMore: i,
              userShouldSeeMore: d
            },
            children: t
          })), [g, n, v, d])
        }
    },
    371: e => {
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

      function a(e, t) {
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
          definitions: [a(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = r[t] || new Set,
          o = new Set,
          i = new Set;
        for (s.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var r = a(e, t);
          r && n.definitions.push(r)
        })), n
      }(t, "Translations")
    }
  }
]);
//# sourceMappingURL=2cb24b4b00bbb9d222ef80502cec5a3d.js.map