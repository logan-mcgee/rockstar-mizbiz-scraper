(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [870, 153, 867, 251], {
    112: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => l
      });
      var r = n(616),
        a = n.n(r),
        i = n(639),
        o = n(914);
      const {
        apiHost: s
      } = (0, i.Z)(), c = (0, o.r)(document.documentElement.lang), l = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: i,
          requireBearerToken: o = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: l = null
        } = await (i?.()) ?? {}, d = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...c && {
            "X-lang": c
          }
        };
        let u = `${s}/${e}`;
        if (null !== r && (u += `?${new URLSearchParams(r)}`), !l && o) return null;
        l && (d.Authorization = `Bearer ${l}`);
        const m = {
            headers: d
          },
          g = a().all([m, t, n]),
          f = await fetch(u, g);
        return await f.json()
      }
    },
    639: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => a
      });
      const r = [(e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: r,
            graphEnv: a,
            scHost: i,
            hostname: o
          } = {
            clientId: "rsg",
            graphEnv: "prod",
            authHost: "signin",
            scHost: "socialclub",
            apiHost: "scapi",
            hostname: /www/
          };
          return {
            apiHost: `https://${t}.rockstargames.com`,
            gateway: "/auth/gateway.json",
            graphEnv: a,
            host: i,
            hostname: o,
            login: `https://${n}.rockstargames.com/connect/authorize/${r}`,
            logout: "/auth/sc-auth-logout",
            pingBearer: "/auth/ping-bearer.json",
            silentCheck: `https://${n}.rockstargames.com/connect/cors/check/${r}`,
            signup: `https://${n}.rockstargames.com/create/?cid=${r}`
          }
        })()],
        a = () => r.find((e => {
          let {
            hostname: t
          } = e;
          return t.test(document.location.hostname)
        })) || r[0]
    },
    153: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ArraySort: () => s,
        flattenObjectPreserveNesting: () => c,
        getCdnPrefix: () => g,
        importAll: () => o,
        nestFlattenedObject: () => l,
        prettyPrint: () => u,
        stripHTML: () => d
      });
      var r = n(948),
        a = n.n(r),
        i = n(706);
      const o = e => e.keys().forEach(e),
        s = {
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
        c = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((r => {
            const a = t ? `${t}.${r}` : r;
            "object" == typeof e[r] && null !== e[r] ? Object.assign(n, c(e[r], a)) : n[a] = e[r]
          })), n
        },
        l = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const r = e[n],
                i = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: r
                  }
                } : {
                  [t]: e
                }));
              a().merge(t, i)
            } else a().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        d = e => e.replace(/(<([^>]+)>)/gi, ""),
        u = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, i.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        m = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        g = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return m.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        }
    },
    914: (e, t, n) => {
      "use strict";
      n.d(t, {
        r: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    295: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => s
      });
      var r = n(449),
        a = n.n(r);
      const i = "www.rockstargames.com" === document?.location?.hostname ? "prod" : "dev",
        o = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        s = e => {
          const t = {
            ...e,
            environment: i,
            display_type: o
          };
          a().dataLayer({
            dataLayer: t
          })
        }
    },
    867: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        withGtmTracking: () => i,
        withLocale: () => c,
        withMediaBasedProps: () => m,
        withTranslations: () => f
      });
      var r = n(295),
        a = n(706);
      const i = e => t => ((e, t) => (0, a.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, r.Z)(e)
        }
      }))(e, t);
      var o = n(859),
        s = n(285);
      const c = e => t => ((e, t) => {
        const n = (0, o.useReactiveVar)(s.locale);
        return (0, a.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(822),
        d = n(948),
        u = n.n(d);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return n => ((e, t, n) => {
          const [r, i] = (0, l.useState)(t), o = e => {
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
              i(o(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, a.jsx)(e, {
            ...r
          })
        })(e, n, t)
      };
      var g = n(167);
      const f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const r = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, o.useQuery)(g.Translations, {
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
    61: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => f.rj,
        useLocale: () => i,
        useNewswirePost: () => g.useNewswirePost,
        usePreloadImg: () => s,
        useQueryParams: () => l,
        useRockstarLocalState: () => d,
        useScApi: () => m,
        useScroll: () => f.vO
      });
      var r = n(859),
        a = n(285);
      const i = () => (0, r.useReactiveVar)(a.locale);
      var o = n(822);
      const s = e => {
        const [t, n] = (0, o.useState)(null), [r, a] = (0, o.useState)(null), [i, s] = (0, o.useState)({});
        return (0, o.useLayoutEffect)((() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", (() => {
            s({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          })), t.addEventListener("error", (() => {
            t = null, r || (n(!1), a(!0))
          })), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }), [e]), [t, i]
      };
      var c = n(814);
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
            setCustomHeader: e => {
              t({
                customHeader: e
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
              const i = {
                ...e.gameData
              };
              null !== r && (i.base = r.replace(/\/$/, "")), null !== a && (i.navOpen = a), t({
                gameData: i
              })
            },
            setModalIsOpen: e => {
              t({
                modalIsOpen: e
              })
            }
          }
        };
      var u = n(112);
      const m = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: a = {},
          query: i = null
        } = t;
        const s = (0, r.useRockstarTokenPing)(),
          [c, l] = (0, o.useState)(null),
          [d, m] = (0, o.useState)(!1),
          [g, f] = (0, o.useState)(null),
          h = (0, o.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: r = {}
              } = t;
              f(null), l(null), m(!0);
              const o = await (0, u.Z)(n ?? e, {
                pingBearer: s,
                fetchOptions: a,
                finalFetchOptions: r,
                query: i
              });
              return o?.status || f(JSON.stringify(o?.error)), l(o), m(!1), o
            } catch (e) {
              f(String(e)), m(!1)
            }
            return null
          }), [e, a, i]);
        return (0, o.useEffect)((() => {
          null === c && null === g && !d && n && h()
        }), [n, c, g, d, h]), {
          data: c,
          error: g,
          loading: d,
          fetch: h
        }
      };
      var g = n(719),
        f = n(62)
    },
    870: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        coreScApiFetch: () => u.Z,
        getCdnPrefix: () => a.getCdnPrefix,
        getScConfigForOrigin: () => m.Z,
        importAll: () => a.importAll,
        lsSettingsReactive: () => p.settingsReactive,
        mutateLSSettings: () => p.mutateLSSettings,
        safeStyles: () => v,
        supportedBrowsers: () => w,
        toScLocaleString: () => g.r,
        useBodyScrollable: () => d,
        useLocale: () => i.useLocale,
        useNewswirePost: () => i.useNewswirePost,
        usePreloadImg: () => i.usePreloadImg,
        useQueryParams: () => i.useQueryParams,
        useRockstarLocalState: () => i.useRockstarLocalState,
        useRockstarWebLSSettings: () => p.useRockstarWebLSSettings,
        useScApi: () => i.useScApi,
        useScroll: () => i.useScroll,
        withGtmTracking: () => r.withGtmTracking,
        withLocale: () => r.withLocale,
        withMediaBasedProps: () => r.withMediaBasedProps,
        withTranslations: () => r.withTranslations
      });
      var r = n(867),
        a = n(153),
        i = n(61),
        o = n(822),
        s = n(859);
      const c = (0, s.makeVar)(!0),
        l = "data-disallow-body-scroll",
        d = () => {
          const e = (0, s.useReactiveVar)(c);
          return (0, o.useEffect)((() => {
            e ? document.documentElement.removeAttribute(l) : document.documentElement.setAttribute(l, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: c
          }
        };
      var u = n(112),
        m = n(639),
        g = n(914),
        f = n(948),
        h = n.n(f);
      const v = e => {
        const t = h().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], t
      };
      var p = n(251);
      const w = /Edge?\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Firefox\/(10[2-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(10[89]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Maci.+ Version\/(15\.([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9[4-9]|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(14[._]([5-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](109|1[1-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}\d|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}\d|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(13\.([4-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(19|[2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/
    },
    251: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        mutateLSSettings: () => s,
        settingsReactive: () => o,
        useRockstarWebLSSettings: () => c
      });
      var r = n(859);
      const a = "rockstar-games-web";
      let i;
      try {
        i = JSON.parse(window.localStorage.getItem(a) ?? null)
      } catch (e) {
        i = {}
      }
      const o = (0, r.makeVar)(i),
        s = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const r = o() ?? {};
          return r[t] = n, null === n && delete r[t], window.localStorage.setItem(a, JSON.stringify(r)), r
        },
        c = () => ({
          lsSettings: (0, r.useReactiveVar)(o),
          settingsReactive: o,
          mutateLSSettings: s
        })
    },
    719: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Consumer: () => o,
        Provider: () => s,
        useNewswirePost: () => c
      });
      var r = n(822),
        a = n(706);
      const i = (0, r.createContext)(),
        {
          Consumer: o
        } = i,
        s = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, a.jsx)(i.Provider, {
            value: t,
            children: n
          })
        },
        c = () => (0, r.useContext)(i)
    },
    62: (e, t, n) => {
      "use strict";
      n.d(t, {
        ID: () => d,
        rj: () => s,
        vO: () => l
      });
      var r = n(859),
        a = n(822),
        i = n(706);
      const o = (0, r.makeVar)(!1),
        s = e => o(e),
        c = (0, a.createContext)(null),
        l = () => (0, a.useContext)(c),
        d = e => {
          let {
            children: t
          } = e;
          const [n, l] = (0, a.useState)(window.pageYOffset), [d, u] = (0, a.useState)(null), [m, g] = (0, a.useState)(!1), f = (0, r.useReactiveVar)(o);
          let h;
          const v = () => {
            g(!0), clearTimeout(h), h = setTimeout((() => {
              g(!1)
            }), 2e3)
          };
          return (0, a.useEffect)((() => {
            let e;
            const t = () => {
              if (f) return void u(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), m || u(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [m, f]), (0, a.useMemo)((() => (0, i.jsx)(c.Provider, {
            value: {
              freezeUserShouldSeeMore: f,
              pageYOffset: n,
              pauseUserShouldSeeMore: v,
              setFreezeUserShouldSeeMore: s,
              userShouldSeeMore: d
            },
            children: t
          })), [f, n, v, d])
        }
    },
    616: e => {
      "use strict";
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
      }

      function a(e, t, n) {
        return e.concat(t).map((function(e) {
          return r(e, n)
        }))
      }

      function i(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function o(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, n, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || a, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = r;
        var l = Array.isArray(n);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, n, c) : function(e, t, n) {
          var a = {};
          return n.isMergeableObject(e) && i(e).forEach((function(t) {
            a[t] = r(e[t], n)
          })), i(t).forEach((function(i) {
            (function(e, t) {
              return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, i) || (o(e, i) && n.isMergeableObject(t[i]) ? a[i] = function(e, t) {
              if (!t.customMerge) return s;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : s
            }(i, n)(e[i], t[i], n) : a[i] = r(t[i], n))
          })), a
        }(e, n, c) : r(n, c)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, n) {
          return s(e, n, t)
        }), {})
      };
      var c = s;
      e.exports = c
    },
    472: (e, t, n) => {
      "use strict";
      var r, a = (r = n(496)) && r.__esModule ? r : {
          default: r
        },
        i = {
          tags: function(e) {
            var t = e.id,
              n = e.events,
              r = e.dataLayer,
              i = e.dataLayerName,
              o = e.preview,
              s = "&gtm_auth=" + e.auth,
              c = "&gtm_preview=" + o;
            return t || (0, a.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + s + c + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(n).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + s + c + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + i + "','" + t + "');",
              dataLayerVar: this.dataLayer(r, i)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = i
    },
    357: (e, t, n) => {
      "use strict";
      var r, a = (r = n(472)) && r.__esModule ? r : {
          default: r
        },
        i = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = a.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = t.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = t.script, e
              },
              dataScript: this.dataScript(t.dataLayerVar)
            }
          },
          initialize: function(e) {
            var t = e.gtmId,
              n = e.events,
              r = void 0 === n ? {} : n,
              a = e.dataLayer,
              i = e.dataLayerName,
              o = void 0 === i ? "dataLayer" : i,
              s = e.auth,
              c = void 0 === s ? "" : s,
              l = e.preview,
              d = void 0 === l ? "" : l,
              u = this.gtm({
                id: t,
                events: r,
                dataLayer: a || void 0,
                dataLayerName: o,
                auth: c,
                preview: d
              });
            a && document.head.appendChild(u.dataScript), document.head.insertBefore(u.script(), document.head.childNodes[0]), document.body.insertBefore(u.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              n = e.dataLayerName,
              r = void 0 === n ? "dataLayer" : n;
            if (window[r]) return window[r].push(t);
            var i = a.default.dataLayer(t, r),
              o = this.dataScript(i);
            document.head.insertBefore(o, document.head.childNodes[0])
          }
        };
      e.exports = i
    },
    449: (e, t, n) => {
      "use strict";
      var r, a = (r = n(357)) && r.__esModule ? r : {
        default: r
      };
      e.exports = a.default
    },
    496: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    167: e => {
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
        var i = r[t] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
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