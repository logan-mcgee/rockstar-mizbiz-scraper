! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b6117f0-29ed-4e1b-ab3d-179daeb34a37", e._sentryDebugIdIdentifier = "sentry-dbid-2b6117f0-29ed-4e1b-ab3d-179daeb34a37")
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
  [886, 509, 244, 324, 847, 50], {
    6516: (e, t, n) => {
      "use strict";
      var r = n(1403),
        a = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
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
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) o.call(t, r) && !i.hasOwnProperty(r) && (c[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === c[r] && (c[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: d,
          props: c,
          _owner: s.current
        }
      }
    },
    6632: (e, t, n) => {
      "use strict";
      e.exports = n(6516)
    },
    156: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => f
      });
      var r = n(4686),
        a = n(6540),
        o = n.n(a),
        s = n(4252),
        i = n.n(s),
        c = n(6088),
        l = n(5577);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), m = {}, f = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: a = null,
          pingBearer: s,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: f = null
          } = await (s?.()) ?? {}, g = {
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
          const w = {
              headers: g
            },
            v = o().all([w, t, n]),
            p = JSON.stringify({
              ...v,
              url: h
            }),
            b = await (0, r.sha256)(p);
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
          const S = await fetch(h, v),
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
    6088: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => i
      });
      const r = window?.env?.sc,
        a = window?.env?.marketing,
        o = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            graphEnv: s,
            scHost: i,
            hostname: c,
            cdnBase: l,
            key: d,
            marketingAuthTLD: u
          } = e;
          const m = r?.apiHost ?? t,
            f = r?.authHost ?? n,
            g = r?.cdnBase ?? l,
            h = r?.clientId ?? o,
            w = a?.marketingAuthTLD ?? u,
            v = r?.scHost ?? i;
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? s,
            host: v,
            hostname: c,
            cdnBase: g,
            key: d,
            clientId: h,
            authHost: f,
            login: `https://${f}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/auth/ping-bearer.json`
          }
        },
        s = [o({
          key: "prod",
          clientId: "rsg",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), o({
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
    6509: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ArraySort: () => f,
        Platform: () => i,
        Platforms: () => c,
        default: () => P,
        detectIfWeShouldAnchorSomewhere: () => s,
        downloadFile: () => S,
        findPlatform: () => d,
        flattenObjectPreserveNesting: () => g,
        getCdnPrefix: () => b,
        getGen8Consoles: () => k,
        getGen9Consoles: () => y,
        getLanguageLabel: () => L,
        importAll: () => m,
        isGen9Platform: () => E,
        nestFlattenedObject: () => h,
        prettyPrint: () => v,
        scrollToElement: () => o,
        stripHTML: () => w
      });
      var r = n(4252),
        a = n.n(r);
      const o = e => {
          let {
            element: t
          } = e;
          const n = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            r = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", r))
            };
          document.addEventListener("scroll", r)
        },
        s = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e));
          n && o({
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
          ps: new i("ps", "PlayStation", 3),
          ps3: new i("ps3", "PlayStation 3", 2),
          ps4: new i("ps4", "PlayStation 4", 11),
          ps5: new i("ps5", "PlayStation 5", 20),
          xbox: new i("xbox", "Xbox", 4),
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
      var u = n(6632);
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
        g = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((r => {
            const a = t ? `${t}.${r}` : r;
            "object" == typeof e[r] && null !== e[r] ? Object.assign(n, g(e[r], a)) : n[a] = e[r]
          })), n
        },
        h = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const r = e[n],
                o = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: r
                  }
                } : {
                  [t]: e
                }));
              a().merge(t, o)
            } else a().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        w = e => e.replace(/(<([^>]+)>)/gi, ""),
        v = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, u.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        p = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        b = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return p.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
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
        y = () => [c.xboxsx.name, c.ps5.name],
        E = e => y().includes(e),
        L = e => {
          const t = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return t.has(e) ? t.get(e) : e
        },
        P = L
    },
    5577: (e, t, n) => {
      "use strict";
      n.d(t, {
        t: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    1359: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => l
      });
      var r = n(1482),
        a = n.n(r);
      const o = [{
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = o.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, a] = t;
            return a === n && (e = {
              site: r,
              subDomain: a
            }, !0)
          })) >= 0)), a = o[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
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
          a().dataLayer({
            dataLayer: t
          })
        }
    },
    3244: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        withGtmTracking: () => o,
        withLocale: () => c,
        withMediaBasedProps: () => m,
        withTranslations: () => g
      });
      var r = n(1359),
        a = n(6632);
      const o = e => t => ((e, t) => (0, a.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, r.A)(e)
        }
      }))(e, t);
      var s = n(8407),
        i = n(136);
      const c = e => t => ((e, t) => {
        const n = (0, s.useReactiveVar)(i.locale);
        return (0, a.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(1403),
        d = n(4252),
        u = n.n(d);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return n => ((e, t, n) => {
          const [r, o] = (0, l.useState)(t), s = e => {
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
              o(s(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, a.jsx)(e, {
            ...r
          })
        })(e, n, t)
      };
      var f = n(2529);
      const g = function(e) {
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
          return r ? (0, a.jsx)(e, {
            ...t,
            t: r
          }) : null
        })(e, n, t)
      }
    },
    3324: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => k.U4,
        useBrowserCapabilityDetection: () => x,
        useGetPlatformLoginUrl: () => h,
        useHasReduceMotionPreference: () => y,
        useHasSaveDataPreference: () => E,
        useLocale: () => o,
        useNewswirePost: () => S.useNewswirePost,
        usePreloadImg: () => i,
        usePrevious: () => d,
        useQueryParams: () => l,
        useRockstarEventDispatcher: () => p,
        useRockstarEventSubscriber: () => b,
        useRockstarLocalState: () => u,
        useScApi: () => f,
        useScroll: () => k.Ll
      });
      var r = n(8407),
        a = n(136);
      const o = () => (0, r.useReactiveVar)(a.locale);
      var s = n(1403);
      const i = e => {
        const [t, n] = (0, s.useState)(null), [r, a] = (0, s.useState)(null), [o, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)((() => {
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
        }), [e]), [t, o]
      };
      var c = n(9779);
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
            setError: function() {
              let {
                code: e,
                message: n
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              t({
                error: {
                  code: e,
                  message: n
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
              const o = {
                ...e.gameData
              };
              null !== r && (o.base = r.replace(/\/$/, "")), null !== a && (o.navOpen = a), t({
                gameData: o
              })
            }
          }
        };
      var m = n(156);
      const f = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: a = {},
          query: o = null
        } = t;
        const i = (0, r.useRockstarTokenPing)(),
          [c, l] = (0, s.useState)(null),
          [d, u] = (0, s.useState)(!1),
          [f, g] = (0, s.useState)(null),
          h = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: r = {}
              } = t;
              g(null), l(null), u(!0);
              const s = await (0, m.A)(n ?? e, {
                pingBearer: i,
                fetchOptions: a,
                finalFetchOptions: r,
                query: o
              });
              return s?.status || g(JSON.stringify(s?.error)), l(s), u(!1), s
            } catch (e) {
              g(String(e)), u(!1)
            }
            return null
          }), [e, a, o]);
        return (0, s.useEffect)((() => {
          null === c && null === f && !d && n && h()
        }), [n, c, f, d, h]), {
          data: c,
          error: f,
          loading: d,
          fetch: h
        }
      };
      var g = n(2756);
      const h = (e, t, n) => {
          const {
            authHost: a,
            clientId: o
          } = (0, g.getScConfigForOrigin)(), s = (0, r.useRockstarToken)();
          return `https://${a}.rockstargames.com/tpa/${e}/link/?cid=${o}&lang=${t}&returnUrl=${encodeURIComponent(n)}&accessToken=${s}`
        },
        w = "__RS_CUSTOM_EVENTS__",
        v = e => `rsCustomEvent:${e}`;
      window[w] || (window[w] = {});
      const p = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = v(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].eventQueue.push(r), window[w][n].subscribers.forEach((e => {
              e(r.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        b = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = v(e);
            return window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].subscribers.push(t), window[w][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[w][n].subscribers = window[w][n].subscribers.filter((e => e !== t)), 0 === window[w][n].subscribers.length && delete window[w][n]
            }
          }), [e, t]), (0, s.useMemo)((() => ({})), [])
        };
      var S = n(359),
        k = n(295);
      const y = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        E = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if ("connection" in navigator && "saveData" in navigator.connection) {
              const e = navigator?.connection;
              t(e.saveData);
              const n = () => {
                t(e.saveData)
              };
              return e.addEventListener("change", n), () => {
                e.removeEventListener("change", n)
              }
            }
          }), []), e
        };
      var L = n(9928),
        P = n(4999);
      const x = () => {
        const [e, t] = (0, s.useState)(!1), {
          deviceMemory: n
        } = (0, L.useMemoryStatus)(), {
          effectiveConnectionType: r
        } = (0, L.useNetworkStatus)(), {
          numberOfLogicalProcessors: a
        } = (0, L.useHardwareConcurrency)(), {
          saveData: o
        } = (0, L.useSaveData)(), i = y(), c = () => {
          const s = (() => {
            const e = e => !1 === e;
            if (i) return !1;
            if (P.isLegacyEdge || P.isIE || P.isWearable || P.isSmartTV) return !1;
            const t = "Safari" === P.browserName,
              s = "Firefox" === P.browserName,
              c = r && !["slow-2g", "2g", "3g", "other", "unknown", "none"].includes(r),
              l = a && a >= 4,
              d = n && n >= 4;
            return !(e(!o) || e(c) || e(l) || !t && !s && e(d))
          })();
          s !== e && t(s)
        };
        return (0, s.useEffect)((() => (c(), window.addEventListener("online", c), window.addEventListener("offline", c), window.addEventListener("devicememory", c), () => {
          window.removeEventListener("online", c), window.removeEventListener("offline", c), window.removeEventListener("devicememory", c)
        })), [n, r, e, a, o, i]), e
      }
    },
    3886: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => S.DataLayerProvider,
        Platform: () => a.Platform,
        Platforms: () => a.Platforms,
        ResizeProvider: () => k.uU,
        coreScApiFetch: () => u.A,
        detectIfWeShouldAnchorSomewhere: () => a.detectIfWeShouldAnchorSomewhere,
        downloadFile: () => a.downloadFile,
        findPlatform: () => a.findPlatform,
        getAccentColor: () => m,
        getCdnPrefix: () => a.getCdnPrefix,
        getGen8Consoles: () => a.getGen8Consoles,
        getGen9Consoles: () => a.getGen9Consoles,
        getLanguageLabel: () => a.getLanguageLabel,
        getScConfigForOrigin: () => f.A,
        importAll: () => a.importAll,
        isGen9Platform: () => a.isGen9Platform,
        lsSettingsReactive: () => p.settingsReactive,
        mutateLSSettings: () => p.mutateLSSettings,
        safeStyles: () => v,
        scrollToElement: () => a.scrollToElement,
        supportedBrowsers: () => b,
        toScLocaleString: () => g.t,
        useBodyScrollable: () => d,
        useDataLayer: () => S.useDataLayer,
        useGetPlatformLoginUrl: () => o.useGetPlatformLoginUrl,
        useHasReduceMotionPreference: () => o.useHasReduceMotionPreference,
        useHasSaveDataPreference: () => o.useHasSaveDataPreference,
        useLocale: () => o.useLocale,
        useNewswirePost: () => o.useNewswirePost,
        usePreloadImg: () => o.usePreloadImg,
        usePrevious: () => o.usePrevious,
        useQueryParams: () => o.useQueryParams,
        useRockstarEventDispatcher: () => o.useRockstarEventDispatcher,
        useRockstarEventSubscriber: () => o.useRockstarEventSubscriber,
        useRockstarLocalState: () => o.useRockstarLocalState,
        useRockstarWebLSSettings: () => p.useRockstarWebLSSettings,
        useScApi: () => o.useScApi,
        useScroll: () => o.useScroll,
        useWindowResize: () => k.G4,
        withGtmTracking: () => r.withGtmTracking,
        withLocale: () => r.withLocale,
        withMediaBasedProps: () => r.withMediaBasedProps,
        withTranslations: () => r.withTranslations
      });
      var r = n(3244),
        a = n(6509),
        o = n(3324),
        s = n(1403),
        i = n(8407);
      const c = (0, i.makeVarNamespace)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        l = "data-disallow-body-scroll",
        d = e => {
          const t = (0, i.useReactiveVar)(c),
            n = Object.values(t).some((e => !!e));
          return (0, s.useEffect)((() => {
            n ? document.documentElement.setAttribute(l, "true") : document.documentElement.removeAttribute(l)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => c(e))({
              ...t,
              [e]: n
            })
          }
        };
      var u = n(156);
      const m = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var f = n(6088),
        g = n(5577),
        h = n(4252),
        w = n.n(h);
      const v = e => {
        const t = w().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
      };
      var p = n(6847);
      const b = /Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Firefox\/(10[2-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Maci.+ Version\/(15\.([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(16[._]\d+|(1[7-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var S = n(4050),
        k = n(2904)
    },
    6847: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        mutateLSSettings: () => i,
        settingsReactive: () => s,
        useRockstarWebLSSettings: () => c
      });
      var r = n(8407);
      const a = "rockstar-games-web";
      let o;
      try {
        const e = window.localStorage.getItem(a);
        o = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        o = {}
      }
      const s = (0, r.makeVar)(o),
        i = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const r = {
            ...s() ?? {}
          };
          return r[t] = n, null === n && delete r[t], window.localStorage.setItem(a, JSON.stringify(r)), s(r), r
        },
        c = () => ({
          lsSettings: (0, r.useReactiveVar)(s),
          settingsReactive: s,
          mutateLSSettings: i
        })
    },
    4050: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => d,
        ResizeProvider: () => a.uU,
        ScrollProvider: () => o.N2,
        newswirePost: () => r,
        useDataLayer: () => l
      });
      var r = n(359),
        a = n(2904),
        o = n(295),
        s = n(1403),
        i = n(6632);
      const c = (0, s.createContext)({}),
        l = () => (0, s.useContext)(c),
        d = e => {
          let {
            children: t,
            ...n
          } = e;
          const r = l() ?? {},
            a = (0, s.useMemo)((() => ({
              ...r,
              ...n
            })), [r, n]);
          return (0, i.jsx)(c.Provider, {
            value: a,
            children: t
          })
        }
    },
    359: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Consumer: () => s,
        Provider: () => i,
        useNewswirePost: () => c
      });
      var r = n(1403),
        a = n(6632);
      const o = (0, r.createContext)(),
        {
          Consumer: s
        } = o,
        i = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, a.jsx)(o.Provider, {
            value: t,
            children: n
          })
        },
        c = () => (0, r.useContext)(o)
    },
    2904: (e, t, n) => {
      "use strict";
      n.d(t, {
        G4: () => m,
        uU: () => u
      });
      var r = n(1403),
        a = n(8407),
        o = n(6632);
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
              max: a
            } = s[t], o = e >= r && e <= a, i = e >= r;
            n[t] = {
              activeExact: o,
              activeMin: i,
              min: r,
              max: a
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
          }), []), (0, o.jsx)(c.Provider, {
            value: n,
            children: t
          })
        },
        m = () => (0, r.useContext)(c)
    },
    295: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ll: () => l,
        N2: () => d,
        U4: () => i
      });
      var r = n(8407),
        a = n(1403),
        o = n(6632);
      const s = (0, r.makeVar)(!1),
        i = e => s(e),
        c = (0, a.createContext)(null),
        l = () => (0, a.useContext)(c),
        d = e => {
          let {
            children: t
          } = e;
          const [n, l] = (0, a.useState)(window.pageYOffset), [d, u] = (0, a.useState)(null), [m, f] = (0, a.useState)(!1), g = (0, r.useReactiveVar)(s);
          let h;
          const w = () => {
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
          }), [m, g]), (0, a.useMemo)((() => (0, o.jsx)(c.Provider, {
            value: {
              freezeUserShouldSeeMore: g,
              pageYOffset: n,
              pauseUserShouldSeeMore: w,
              setFreezeUserShouldSeeMore: i,
              userShouldSeeMore: d
            },
            children: t
          })), [g, n, w, d])
        }
    },
    2529: e => {
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
        var o = r[t] || new Set,
          s = new Set,
          i = new Set;
        for (o.forEach((function(e) {
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
          var r = a(e, t);
          r && n.definitions.push(r)
        })), n
      }(t, "Translations")
    }
  }
]);