try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "625de122-fa51-4b56-a818-c0b3aa9d4932", e._sentryDebugIdIdentifier = "sentry-dbid-625de122-fa51-4b56-a818-c0b3aa9d4932")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [176], {
    148: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = o.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), a = o[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    176: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => B.R,
        ApolloProvider: () => wt.X,
        DataLayerProvider: () => It,
        GraphOperationsProvider: () => Ie,
        InMemoryCache: () => O.D,
        Platform: () => Ze,
        Platforms: () => et,
        ReactiveStateProvider: () => M,
        ResizeProvider: () => Se,
        RockstarGraphProvider: () => qe,
        RockstarTokenProvider: () => K,
        ScrollProvider: () => ge,
        classList: () => ot,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => Ye,
        downloadFile: () => ut,
        findPlatform: () => nt,
        getAccentColor: () => b,
        getBase: () => k,
        getCdnPrefix: () => dt,
        getConfigForDomain: () => m,
        getCookieValueByName: () => st,
        getGen8Consoles: () => ht,
        getGen9Consoles: () => mt,
        getLanguageLabel: () => gt,
        getUriForGraphEnv: () => x,
        gql: () => ft.J1,
        gtmInit: () => Ct,
        importAll: () => ct,
        isGen9Platform: () => pt,
        makeVar: () => $.UT,
        mutateWebSettings: () => Ut,
        newswirePost: () => o,
        oneTrustInit: () => Qe,
        safeStyles: () => y,
        scrollToElement: () => Je,
        setContextItem: () => E,
        setCookieValue: () => it,
        setMakeVarItem: () => P,
        supportedBrowsers: () => Ve,
        toScLocaleString: () => p,
        track: () => St,
        useApolloClient: () => Fe,
        useBase: () => z,
        useBodyScrollable: () => We,
        useDataLayer: () => Mt,
        useHasReduceMotionPreference: () => Ce,
        useHasSaveDataPreference: () => Pe,
        useLocale: () => N,
        useMutateState: () => A,
        useMutation: () => Oe,
        useNewswirePost: () => de,
        usePreloadImg: () => G,
        usePrevious: () => Q,
        useQuery: () => $e,
        useQueryParams: () => W,
        useReactiveVar: () => F.q,
        useRockstarEventDispatcher: () => ae,
        useRockstarEventSubscriber: () => se,
        useRockstarToken: () => ee,
        useRockstarTokenPing: () => te,
        useRockstarTokenReactive: () => Z,
        useRockstarWebSettings: () => jt,
        useScApi: () => ne,
        useScAuthLinks: () => fe,
        useScAuthTpaLink: () => we,
        useScroll: () => pe,
        useScrollTracking: () => Te,
        useState: () => U,
        useWindowResize: () => Ee,
        webSettingsReactive: () => Rt,
        withAutoRouteTracking: () => Et,
        withGtmTracking: () => $t,
        withMediaBasedProps: () => Ot,
        withReactiveState: () => I,
        withRockstarGraph: () => Ne,
        withTranslations: () => _t
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => ce,
        Provider: () => le,
        useNewswirePost: () => de
      });
      var r = n(7862),
        a = n(8398),
        s = n.n(a),
        i = n(4981),
        c = n.n(i);
      const l = window?.env?.sc,
        d = window?.env?.marketing,
        u = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: o,
            cms: r,
            graphEnv: a,
            scHost: s,
            hostname: i,
            cdnBase: c,
            key: u,
            marketingAuthTLD: h
          } = e;
          const m = l?.apiHost ?? t,
            p = l?.authHost ?? n,
            g = l?.cdnBase ?? c,
            w = l?.clientId ?? o,
            f = d?.marketingAuthTLD ?? h,
            v = l?.scHost ?? s,
            b = d?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: l?.graphEnv ?? a,
            host: v,
            hostname: i,
            cdnBase: g,
            key: u,
            clientId: w,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: p,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${p}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${p}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${p}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
          }
        },
        h = [u({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), u({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        m = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = h.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return h.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || h[0]
        },
        p = e => {
          const t = e.replace("_", "-");
          return "zh-hans" === t ? "zh-cn" : t
        },
        {
          apiHost: g
        } = m(),
        w = p(document.documentElement.lang),
        f = {},
        v = async function(e) {
          let {
            fetchOptions: t = {},
            finalFetchOptions: n = {},
            query: o = null,
            pingBearer: a,
            requireBearerToken: i = !0,
            useCache: l = !0
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            const {
              bearerToken: d = null
            } = await (a?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...w && {
                "X-lang": w
              }
            };
            let h = `${g}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !d && i) return null;
            d && (u.Authorization = `Bearer ${d}`);
            const m = {
                headers: u
              },
              p = s().all([m, t, n]),
              v = JSON.stringify({
                ...p,
                url: h
              }),
              b = await (0, r.sc)(v);
            if (l) {
              if (f[b]?.response) return f[b].response;
              if (f[b]?.loading) return {
                error: null,
                result: null
              };
              f[b] = {
                loading: !0
              }
            }
            const k = await fetch(h, p),
              x = await k.json();
            return l && (f[b] = {
              response: x,
              loading: !1
            }), x
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", k = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, x = e => {
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
        }, y = e => {
          const t = c().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        }, S = () => window.reactContextFactory = window?.reactContextFactory ?? {}, E = e => {
          let {
            context: t,
            key: n
          } = e;
          return S()?.[n] || (S()[n] = t), S()[n]
        }, C = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, P = e => {
          let {
            key: t,
            value: n,
            domain: o = "default"
          } = e;
          return C()?.[o] || (C()[o] = {}), C()?.[o]?.[t] || (C()[o][t] = n), C()[o][t]
        };
      var T = n(2229),
        L = n(5854);
      const R = E({
          context: (0, T.createContext)({}),
          key: "graphContextGet"
        }),
        U = () => (0, T.useContext)(R),
        j = E({
          context: (0, T.createContext)({}),
          key: "graphContextSet"
        }),
        A = () => (0, T.useContext)(j),
        M = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, F.q)(n);
          const o = (0, T.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, L.jsx)(R.Provider, {
            value: n(),
            children: (0, L.jsx)(j.Provider, {
              value: o,
              children: t
            })
          })
        },
        I = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, L.jsx)(M, {
              state: n,
              children: (0, L.jsx)(e, {
                ...t
              })
            })
          }
        };
      var $ = n(9196),
        O = n(2810),
        B = n(6486),
        _ = n(5580),
        D = n(1515);
      const H = k(),
        z = () => H;
      var F = n(9449);
      const q = (0, $.UT)(document.documentElement.lang),
        N = () => (0, F.q)(q),
        G = e => {
          const [t, n] = (0, T.useState)(null), [o, r] = (0, T.useState)(null), [a, s] = (0, T.useState)({});
          return (0, T.useLayoutEffect)((() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", (() => {
              s({
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
      var X = n(9623);
      const W = () => {
          const {
            search: e
          } = (0, X.useLocation)();
          return new URLSearchParams(e)
        },
        Q = e => {
          const t = (0, T.useRef)();
          return (0, T.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var V = n(4895);
      const J = {
          token: (0, $.UT)("")
        },
        Y = E({
          context: (0, T.createContext)(J),
          key: "utilsTokenProvider"
        }),
        K = e => {
          let {
            children: t,
            token: n
          } = e;
          return (0, L.jsx)(Y.Provider, {
            value: {
              token: n
            },
            children: t
          })
        },
        Z = () => {
          const {
            token: e
          } = (0, T.useContext)(Y);
          return [e]
        },
        ee = () => {
          const [e] = Z();
          return (0, F.q)(e)
        },
        te = () => {
          const [e] = Z();
          return () => (async e => {
            let {
              token: t
            } = e;
            const {
              pingBearer: n
            } = m();
            try {
              const e = t?.() ?? "";
              if (e) {
                const {
                  exp: t = 0
                } = (0, V.s)(e) ?? {};
                if (t - (new Date).getTime() / 1e3 > 0 && e) return {
                  bearerToken: e
                }
              }
              const o = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                r = await o.json();
              return t(r.bearerToken ?? ""), r
            } catch (e) {
              return t(""), !1
            }
          })({
            token: e
          })
        },
        ne = (e, t) => {
          let {
            autoFetch: n = !0,
            fetchOptions: o = {},
            query: r = null
          } = t;
          const a = te(),
            [s, i] = (0, T.useState)(null),
            [c, l] = (0, T.useState)(!1),
            [d, u] = (0, T.useState)(null),
            h = (0, T.useCallback)((async function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                const {
                  fetchOptions: s = {}
                } = t;
                u(null), i(null), l(!0);
                const c = await v(n ?? e, {
                  pingBearer: a,
                  fetchOptions: o,
                  finalFetchOptions: s,
                  query: r
                });
                return c?.status || u(JSON.stringify(c?.error)), i(c), l(!1), c
              } catch (e) {
                u(String(e)), l(!1)
              }
              return null
            }), [e, o, r]);
          return (0, T.useEffect)((() => {
            null === s && null === d && !c && n && h()
          }), [n, s, d, c, h]), {
            data: s,
            error: d,
            loading: c,
            fetch: h
          }
        },
        oe = "__RS_CUSTOM_EVENTS__",
        re = e => `rsCustomEvent:${e}`;
      window[oe] || (window[oe] = {});
      const ae = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = re(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[oe][n] || (window[oe][n] = {
              eventQueue: [],
              subscribers: []
            }), window[oe][n].eventQueue.push(o), window[oe][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, T.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        se = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, T.useEffect)((() => {
            const n = re(e);
            return window[oe][n] || (window[oe][n] = {
              eventQueue: [],
              subscribers: []
            }), window[oe][n].subscribers.push(t), window[oe][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[oe][n].subscribers = window[oe][n].subscribers.filter((e => e !== t)), 0 === window[oe][n].subscribers.length && delete window[oe][n]
            }
          }), [e, t]), (0, T.useMemo)((() => ({})), [])
        },
        ie = E({
          context: (0, T.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: ce
        } = ie,
        le = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, L.jsx)(ie.Provider, {
            value: t,
            children: n
          })
        },
        de = () => (0, T.useContext)(ie),
        ue = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, $.UT)(!1)
        }),
        he = e => ue(e),
        me = E({
          context: (0, T.createContext)(null),
          key: "scrollContext"
        }),
        pe = () => (0, T.useContext)(me),
        ge = e => {
          let {
            children: t
          } = e;
          const [n, o] = (0, T.useState)(window.pageYOffset), [r, a] = (0, T.useState)(null), [s, i] = (0, T.useState)(!1), c = (0, F.q)(ue);
          let l;
          const d = () => {
            i(!0), clearTimeout(l), l = setTimeout((() => {
              i(!1)
            }), 2e3)
          };
          return (0, T.useEffect)((() => {
            let e;
            const t = () => {
              if (c) return void a(!1);
              const t = Math.max(0, window.pageYOffset);
              o(t), s || a(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [s, c]), (0, T.useMemo)((() => (0, L.jsx)(me.Provider, {
            value: {
              freezeUserShouldSeeMore: c,
              pageYOffset: n,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: he,
              userShouldSeeMore: r
            },
            children: t
          })), [c, n, d, r])
        },
        we = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = m(), r = N(), a = p(r), s = ee();
          let i = "tpa/" + e + "/link/";
          return i += "?cid=" + encodeURIComponent(o), i += "&lang=" + encodeURIComponent(a), i += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), i += "&accessToken=" + encodeURIComponent(s), new URL(i, `https://${n}.rockstargames.com/`)
        },
        fe = e => {
          const {
            signup: t,
            login: n
          } = m(), o = N(), r = p(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        },
        ve = {
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
        be = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = ve;
          return Object.keys(ve).map((t => {
            const {
              min: o,
              max: r
            } = ve[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          })), {
            isMobile: e < ve.sm.min,
            isTablet: e < ve.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        ke = E({
          context: (0, T.createContext)(be()),
          key: "resizeContext"
        }),
        {
          Consumer: xe
        } = ke,
        ye = (0, $.UT)(be()),
        Se = e => {
          let {
            children: t
          } = e;
          const n = (0, F.q)(ye);
          return (0, T.useEffect)((() => {
            const e = () => {
              ye(be())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, L.jsx)(ke.Provider, {
            value: n,
            children: t
          })
        },
        Ee = () => (0, T.useContext)(ke),
        Ce = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)((() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        Pe = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)((() => {
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
      n(8933), n(1345);
      const Te = e => {
          const [t, n] = (0, T.useState)(!1), o = (0, T.useRef)(null);
          return (0, T.useEffect)((() => {
            const r = () => {
              if (t || !o.current) return;
              const a = o.current,
                {
                  height: s
                } = a.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= a.offsetTop + s * e && (n(!0), window.removeEventListener("scroll", r))
            };
            return window.addEventListener("scroll", r, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", r)
            }
          }), [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        Le = (e, t) => {
          const n = N(),
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
              loading: a,
              error: s,
              ...i
            } = (0, D.IT)(e, o);
          return (0, T.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = c().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, T.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [a]), (0, T.useEffect)((() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        Re = (0, T.createContext)((() => ({
          data: null
        }))),
        Ue = new Promise((e => {
          e()
        })),
        je = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new O.D)
        },
        Ae = [() => Ue, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new B.R(je))
        }],
        Me = (0, T.createContext)((() => Ae)),
        Ie = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, L.jsx)(Me.Provider, {
            value: _.n,
            children: (0, L.jsx)(Re.Provider, {
              value: Le,
              children: t
            })
          })
        }),
        $e = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, T.useContext)(Re)(e, t)),
        Oe = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, T.useContext)(Me)(e));
      var Be = n(4270);
      var _e = n(7142),
        De = n(8247),
        He = n.n(De);
      const ze = (0, n(9849).e)({
          sha256: r.sc
        }),
        Fe = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? x(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, T.useState)(new O.D({
              typePolicies: n
            })),
            s = ze.concat((e => {
              let {
                token: t
              } = e;
              return (0, Be.o)(((e, n) => {
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
            }).concat((e => (0, _e.$)({
              ...e,
              fetch: He()
            }))(r)));
          return new B.R({
            cache: a,
            link: s
          })
        },
        qe = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = Fe({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, L.jsx)(K, {
            token: n?.token,
            children: (0, L.jsx)(wt.X, {
              client: r,
              children: (0, L.jsx)(Ie, {
                children: t
              })
            })
          })
        },
        Ne = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, $.UT)("");
          return function(t) {
            return (0, L.jsx)(qe, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, L.jsx)(e, {
                ...t
              })
            })
          }
        },
        Ge = (0, $.UT)({}),
        Xe = "data-disallow-body-scroll",
        We = e => {
          const t = (0, F.q)(Ge),
            n = Object.values(t).some((e => !!e));
          return (0, T.useEffect)((() => {
            n ? document.documentElement.setAttribute(Xe, "true") : document.documentElement.removeAttribute(Xe)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Ge(e))({
              ...t,
              [e]: n
            })
          }
        },
        Qe = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        },
        Ve = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Je = e => {
          let {
            element: t
          } = e;
          const n = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            o = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        Ye = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (Je({
            element: n
          }), Ke(n))
        },
        Ke = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class Ze {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const et = Object.freeze({
          pc: new Ze("pc", "PC", 8),
          ps: new Ze("ps", "PlayStation", 3),
          ps3: new Ze("ps3", "PlayStation 3", 2),
          ps4: new Ze("ps4", "PlayStation 4", 11),
          ps5: new Ze("ps5", "PlayStation 5", 20),
          xbox: new Ze("xbox", "Xbox", 4),
          xbox360: new Ze("xbox360", "Xbox 360", 1),
          xboxone: new Ze("xboxone", "Xbox One", 12),
          xboxsx: new Ze("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new Ze("switch", "Nintendo Switch™", 18),
          nintendoswitch: new Ze("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new Ze("applestore", "App Store", 102),
          googleplay: new Ze("googleplay", "Google Play", 1023),
          appStore: new Ze("app_store", "App Store", 102),
          googlePlay: new Ze("ggle_play", "Google Play", 1023),
          pcalt: new Ze("pcalt", "PC Enhanced", 22)
        }),
        tt = Object.freeze(Object.values(et));

      function nt(e) {
        if (!e) return;
        if (e instanceof Ze) return e;
        const t = e.toString().toLowerCase();
        return tt.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const ot = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var rt = n(5125);
      const at = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        st = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        it = (e, t) => {
          e && void 0 !== t && (0, rt.canStoreCookie)(e) && st(e) !== t && (document.cookie = `${e}=${t}; domain=${at()}; path=/;`)
        },
        ct = e => e.keys().forEach(e),
        lt = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        dt = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return lt.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        ut = e => {
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
              o = document.createElement("a");
            o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
          })).catch((e => {
            console.log(e)
          }))
        },
        ht = () => [et.xbox360.name, et.xboxone.name, et.ps3.name, et.ps4.name, et.pc.name],
        mt = () => [et.xboxsx.name, et.ps5.name, et.pcalt.name],
        pt = e => mt().includes(e),
        gt = e => {
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
        };
      var wt = n(3843),
        ft = n(1492),
        vt = n(6389),
        bt = n.n(vt);
      const kt = (0, n(148).A)(),
        xt = kt?.id,
        yt = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        St = e => {
          const t = {
            ...e,
            environment: xt,
            display_type: yt
          };
          bt().dataLayer({
            dataLayer: t
          })
        },
        Et = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, X.useLocation)();
          return (0, T.useEffect)((() => {
            St({
              event: "trackPageview"
            })
          }), [n]), (0, L.jsx)(e, {
            ...t
          })
        })(e, t),
        Ct = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          bt().initialize(n)
        };
      var Pt = n(4388);
      const Tt = "rockstar-games-web";
      let Lt;
      try {
        const e = Pt.A.get(Tt) ?? "";
        Lt = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Lt = {}
      }
      const Rt = (0, $.UT)(Lt),
        Ut = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Rt() ?? {}
          };
          return o[t] = n, null === n && delete o[t], Pt.A.set(Tt, JSON.stringify(o), {
            expires: 30,
            domain: at(),
            path: "/"
          }), Rt(o), o
        },
        jt = () => ({
          webSettings: (0, F.q)(Rt),
          webSettingsReactive: Rt,
          mutateWebSettings: Ut
        }),
        At = E({
          context: (0, T.createContext)({}),
          key: "gtmDatalayer"
        }),
        Mt = () => (0, T.useContext)(At),
        It = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = Mt() ?? {},
            r = (0, T.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, L.jsx)(At.Provider, {
            value: r,
            children: t
          })
        },
        $t = e => t => ((e, t) => (0, L.jsx)(e, {
          ...t,
          gtmTrack: e => {
            St(e)
          }
        }))(e, t),
        Ot = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, T.useState)(t), a = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => a(e)));
                t = {
                  ...t,
                  items: e
                }
              }
              const o = t?.mediaQueryList;
              return o?.length ? (o.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
                t = {
                  ...t,
                  ...e
                }
              })), t) : t
            };
            return (0, T.useEffect)((() => {
              const e = c().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, L.jsx)(e, {
              ...o
            })
          })(e, n, t)
        },
        Bt = ft.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        _t = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = N(),
                {
                  data: n
                } = $e(Bt, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, L.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        }
    }
  }
]);