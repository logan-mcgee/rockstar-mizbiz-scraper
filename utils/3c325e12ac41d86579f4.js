(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [667, 52, 342, 188, 681], {
    761: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => f
      });
      const r = e => async function(t) {
        let {
          outputFormat: n = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const r = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === n ? (e => {
          const t = new DataView(e);
          let n = "";
          for (let e = 0; e < t.byteLength; e += 4) n += t.getUint32(e).toString(16).padStart(8, "0");
          return n
        })(r) : r
      }, a = (r("SHA-1"), r("SHA-256"));
      r("SHA-384"), r("SHA-512");
      var o = n(617),
        i = n.n(o),
        s = n(653),
        c = n.n(s),
        l = n(901),
        d = n(82);
      const {
        apiHost: u
      } = (0, l.Z)(), m = (0, d.r)(document.documentElement.lang), g = {}, f = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: o,
          requireBearerToken: s = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          bearerToken: d = null
        } = await (o?.()) ?? {}, f = {
          "X-Requested-With": "XMLHttpRequest",
          "X-AMC": !0,
          "Content-Type": "application/json",
          ...m && {
            "X-lang": m
          }
        };
        let h = `${u}/${e}`;
        if (null === r || c().isEmpty(r) || (h += `?${new URLSearchParams(r)}`), !d && s) return null;
        d && (f.Authorization = `Bearer ${d}`);
        const v = {
            headers: f
          },
          p = i().all([v, t, n]),
          w = JSON.stringify({
            ...p,
            url: h
          }),
          y = await a(w);
        if (l) {
          if (g[y]?.response) return g[y].response;
          if (g[y]?.loading) return {
            error: null,
            result: null
          };
          g[y] = {
            loading: !0
          }
        }
        const S = await fetch(h, p),
          b = await S.json();
        return l && (g[y] = {
          response: b,
          loading: !1
        }), b
      }
    },
    901: (e, t, n) => {
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
            scHost: o,
            hostname: i,
            cdnBase: s,
            key: c,
            marketingAuthTLD: l
          } = {
            key: "prod",
            clientId: "rsg",
            graphEnv: "prod",
            authHost: "signin",
            scHost: "socialclub",
            apiHost: "scapi",
            hostname: /www/,
            cdnBase: "https://s.rsg.sc/sc",
            marketingAuthTLD: "www"
          };
          return {
            apiHost: `https://${t}.rockstargames.com`,
            graphEnv: a,
            host: o,
            hostname: i,
            cdnBase: s,
            key: c,
            login: `https://${n}.rockstargames.com/connect/authorize/${r}`,
            silentCheck: `https://${n}.rockstargames.com/connect/cors/check/${r}`,
            signup: `https://${n}.rockstargames.com/create/?cid=${r}`,
            gateway: `https://${l}.rockstargames.com/auth/gateway.json`,
            logout: `https://${l}.rockstargames.com/auth/sc-auth-logout`,
            pingBearer: `https://${l}.rockstargames.com/auth/ping-bearer.json`
          }
        })()],
        a = () => {
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
            return t.test(document.location.hostname)
          })) || r[0]
        }
    },
    52: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ArraySort: () => l,
        detectIfWeShouldAnchorSomewhere: () => i,
        flattenObjectPreserveNesting: () => d,
        getCdnPrefix: () => h,
        getGen8Consoles: () => v,
        getGen9Consoles: () => p,
        importAll: () => c,
        nestFlattenedObject: () => u,
        prettyPrint: () => g,
        scrollToElement: () => o,
        stripHTML: () => m
      });
      var r = n(653),
        a = n.n(r);
      const o = e => {
          let {
            element: t
          } = e;
          window.scrollTo({
            top: t.offsetTop,
            behavior: "smooth"
          })
        },
        i = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e));
          n && o({
            element: n
          })
        };
      var s = n(160);
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
        m = e => e.replace(/(<([^>]+)>)/gi, ""),
        g = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, s.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        f = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return f.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        v = () => ["xbox360", "ps4", "ps3"],
        p = () => ["xboxone", "ps5", "pc"]
    },
    82: (e, t, n) => {
      "use strict";
      n.d(t, {
        r: () => r
      });
      const r = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    190: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => s
      });
      var r = n(806),
        a = n.n(r);
      const o = "www.rockstargames.com" === document?.location?.hostname ? "prod" : "dev",
        i = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        s = e => {
          const t = {
            ...e,
            environment: o,
            display_type: i
          };
          a().dataLayer({
            dataLayer: t
          })
        }
    },
    342: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        withGtmTracking: () => o,
        withLocale: () => c,
        withMediaBasedProps: () => m,
        withTranslations: () => f
      });
      var r = n(190),
        a = n(160);
      const o = e => t => ((e, t) => (0, a.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, r.Z)(e)
        }
      }))(e, t);
      var i = n(859),
        s = n(285);
      const c = e => t => ((e, t) => {
        const n = (0, i.useReactiveVar)(s.locale);
        return (0, a.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(932),
        d = n(653),
        u = n.n(d);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return n => ((e, t, n) => {
          const [r, o] = (0, l.useState)(t), i = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map((e => i(e)));
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
              o(i(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, a.jsx)(e, {
            ...r
          })
        })(e, n, t)
      };
      var g = n(390);
      const f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const r = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, i.useQuery)(g.Translations, {
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
    188: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        setFreezeUserShouldSeeMore: () => f.rj,
        useLocale: () => o,
        useNewswirePost: () => g.useNewswirePost,
        usePreloadImg: () => s,
        useQueryParams: () => l,
        useRockstarLocalState: () => d,
        useScApi: () => m,
        useScroll: () => f.vO
      });
      var r = n(859),
        a = n(285);
      const o = () => (0, r.useReactiveVar)(a.locale);
      var i = n(932);
      const s = e => {
        const [t, n] = (0, i.useState)(null), [r, a] = (0, i.useState)(null), [o, s] = (0, i.useState)({});
        return (0, i.useLayoutEffect)((() => {
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
        }), [e]), [t, o]
      };
      var c = n(30);
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
              const o = {
                ...e.gameData
              };
              null !== r && (o.base = r.replace(/\/$/, "")), null !== a && (o.navOpen = a), t({
                gameData: o
              })
            }
          }
        };
      var u = n(761);
      const m = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: a = {},
          query: o = null
        } = t;
        const s = (0, r.useRockstarTokenPing)(),
          [c, l] = (0, i.useState)(null),
          [d, m] = (0, i.useState)(!1),
          [g, f] = (0, i.useState)(null),
          h = (0, i.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: r = {}
              } = t;
              f(null), l(null), m(!0);
              const i = await (0, u.Z)(n ?? e, {
                pingBearer: s,
                fetchOptions: a,
                finalFetchOptions: r,
                query: o
              });
              return i?.status || f(JSON.stringify(i?.error)), l(i), m(!1), i
            } catch (e) {
              f(String(e)), m(!1)
            }
            return null
          }), [e, a, o]);
        return (0, i.useEffect)((() => {
          null === c && null === g && !d && n && h()
        }), [n, c, g, d, h]), {
          data: c,
          error: g,
          loading: d,
          fetch: h
        }
      };
      var g = n(711),
        f = n(550)
    },
    667: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => y.DataLayerProvider,
        ResizeProvider: () => S.ph,
        coreScApiFetch: () => u.Z,
        detectIfWeShouldAnchorSomewhere: () => a.detectIfWeShouldAnchorSomewhere,
        getCdnPrefix: () => a.getCdnPrefix,
        getGen8Consoles: () => a.getGen8Consoles,
        getGen9Consoles: () => a.getGen9Consoles,
        getScConfigForOrigin: () => m.Z,
        importAll: () => a.importAll,
        lsSettingsReactive: () => p.settingsReactive,
        mutateLSSettings: () => p.mutateLSSettings,
        safeStyles: () => v,
        scrollToElement: () => a.scrollToElement,
        supportedBrowsers: () => w,
        toScLocaleString: () => g.r,
        useBodyScrollable: () => d,
        useDataLayer: () => y.useDataLayer,
        useLocale: () => o.useLocale,
        useNewswirePost: () => o.useNewswirePost,
        usePreloadImg: () => o.usePreloadImg,
        useQueryParams: () => o.useQueryParams,
        useRockstarLocalState: () => o.useRockstarLocalState,
        useRockstarWebLSSettings: () => p.useRockstarWebLSSettings,
        useScApi: () => o.useScApi,
        useScroll: () => o.useScroll,
        useWindowResize: () => S.w_,
        withGtmTracking: () => r.withGtmTracking,
        withLocale: () => r.withLocale,
        withMediaBasedProps: () => r.withMediaBasedProps,
        withTranslations: () => r.withTranslations
      });
      var r = n(342),
        a = n(52),
        o = n(188),
        i = n(932),
        s = n(859);
      const c = (0, s.makeVar)(!0),
        l = "data-disallow-body-scroll",
        d = () => {
          const e = (0, s.useReactiveVar)(c);
          return (0, i.useEffect)((() => {
            e ? document.documentElement.removeAttribute(l) : document.documentElement.setAttribute(l, "")
          }), [e]), {
            bodyIsScrollable: e,
            setBodyIsScrollable: c
          }
        };
      var u = n(761),
        m = n(901),
        g = n(82),
        f = n(653),
        h = n.n(f);
      const v = e => {
        const t = h().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
      };
      var p = n(681);
      const w = /Edge?\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Firefox\/(10[2-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(10[89]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Maci.+ Version\/(15\.([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9[4-9]|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(14[._]([5-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](109|1[1-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}\d|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}\d|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(13\.([4-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(19|[2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var y = n(460),
        S = n(373)
    },
    681: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        mutateLSSettings: () => s,
        settingsReactive: () => i,
        useRockstarWebLSSettings: () => c
      });
      var r = n(859);
      const a = "rockstar-games-web";
      let o;
      try {
        o = JSON.parse(window.localStorage.getItem(a) ?? null)
      } catch (e) {
        o = {}
      }
      const i = (0, r.makeVar)(o),
        s = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const r = i() ?? {};
          return r[t] = n, null === n && delete r[t], window.localStorage.setItem(a, JSON.stringify(r)), r
        },
        c = () => ({
          lsSettings: (0, r.useReactiveVar)(i),
          settingsReactive: i,
          mutateLSSettings: s
        })
    },
    460: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => d,
        ResizeProvider: () => a.ph,
        ScrollProvider: () => o.ID,
        newswirePost: () => r,
        useDataLayer: () => l
      });
      var r = n(711),
        a = n(373),
        o = n(550),
        i = n(932),
        s = n(160);
      const c = (0, i.createContext)({}),
        l = () => (0, i.useContext)(c),
        d = e => {
          let {
            children: t,
            ...n
          } = e;
          const r = l() ?? {},
            a = (0, i.useMemo)((() => ({
              ...r,
              ...n
            })), [r, n]);
          return (0, s.jsx)(c.Provider, {
            value: a,
            children: t
          })
        }
    },
    711: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => s,
        useNewswirePost: () => c
      });
      var r = n(932),
        a = n(160);
      const o = (0, r.createContext)(),
        {
          Consumer: i
        } = o,
        s = e => {
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
    373: (e, t, n) => {
      "use strict";
      n.d(t, {
        ph: () => u,
        w_: () => m
      });
      var r = n(932),
        a = n(859),
        o = n(160);
      const i = {
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
        s = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = i;
          return Object.keys(i).map((t => {
            const {
              min: r,
              max: a
            } = i[t], o = e >= r && e <= a, s = e >= r;
            n[t] = {
              activeExact: o,
              activeMin: s,
              min: r,
              max: a
            }
          })), {
            isMobile: e <= i.sm.min,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        c = (0, r.createContext)(s()),
        {
          Consumer: l
        } = c,
        d = (0, a.makeVar)(s()),
        u = e => {
          let {
            children: t
          } = e;
          const n = (0, a.useReactiveVar)(d);
          return (0, r.useEffect)((() => {
            const e = () => {
              d(s())
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
    550: (e, t, n) => {
      "use strict";
      n.d(t, {
        ID: () => d,
        rj: () => s,
        vO: () => l
      });
      var r = n(859),
        a = n(932),
        o = n(160);
      const i = (0, r.makeVar)(!1),
        s = e => i(e),
        c = (0, a.createContext)(null),
        l = () => (0, a.useContext)(c),
        d = e => {
          let {
            children: t
          } = e;
          const [n, l] = (0, a.useState)(window.pageYOffset), [d, u] = (0, a.useState)(null), [m, g] = (0, a.useState)(!1), f = (0, r.useReactiveVar)(i);
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
          }), [m, f]), (0, a.useMemo)((() => (0, o.jsx)(c.Provider, {
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
    617: e => {
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

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function i(e, t) {
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
          return n.isMergeableObject(e) && o(e).forEach((function(t) {
            a[t] = r(e[t], n)
          })), o(t).forEach((function(o) {
            (function(e, t) {
              return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (i(e, o) && n.isMergeableObject(t[o]) ? a[o] = function(e, t) {
              if (!t.customMerge) return s;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : s
            }(o, n)(e[o], t[o], n) : a[o] = r(t[o], n))
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
    143: (e, t, n) => {
      "use strict";
      var r, a = (r = n(680)) && r.__esModule ? r : {
          default: r
        },
        o = {
          tags: function(e) {
            var t = e.id,
              n = e.events,
              r = e.dataLayer,
              o = e.dataLayerName,
              i = e.preview,
              s = "&gtm_auth=" + e.auth,
              c = "&gtm_preview=" + i;
            return t || (0, a.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + s + c + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(n).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + s + c + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + o + "','" + t + "');",
              dataLayerVar: this.dataLayer(r, o)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = o
    },
    248: (e, t, n) => {
      "use strict";
      var r, a = (r = n(143)) && r.__esModule ? r : {
          default: r
        },
        o = {
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
              o = e.dataLayerName,
              i = void 0 === o ? "dataLayer" : o,
              s = e.auth,
              c = void 0 === s ? "" : s,
              l = e.preview,
              d = void 0 === l ? "" : l,
              u = this.gtm({
                id: t,
                events: r,
                dataLayer: a || void 0,
                dataLayerName: i,
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
            var o = a.default.dataLayer(t, r),
              i = this.dataScript(o);
            document.head.insertBefore(i, document.head.childNodes[0])
          }
        };
      e.exports = o
    },
    806: (e, t, n) => {
      "use strict";
      var r, a = (r = n(248)) && r.__esModule ? r : {
        default: r
      };
      e.exports = a.default
    },
    680: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    390: e => {
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
          i = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var r = a(e, t);
          r && n.definitions.push(r)
        })), n
      }(t, "Translations")
    }
  }
]);