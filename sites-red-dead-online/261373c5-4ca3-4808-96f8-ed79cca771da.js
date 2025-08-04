try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "261373c5-4ca3-4808-96f8-ed79cca771da", e._sentryDebugIdIdentifier = "sentry-dbid-261373c5-4ca3-4808-96f8-ed79cca771da")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [8161], {
    2053: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const o = () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }
    },
    2562: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    3304: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(62229),
        r = n(42298),
        s = n(70954);
      const a = (0, r.A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: i
        } = a,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, s.jsx)(a.Provider, {
            value: t,
            children: n
          })
        },
        l = () => (0, o.useContext)(a)
    },
    6590: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => p
      });
      var o = n(62229),
        r = n(75110),
        s = n(54099),
        a = n(42298),
        i = n(89858),
        c = n(70954);
      const l = (0, i.A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, r.UT)(!1)
        }),
        d = e => l(e),
        u = (0, a.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        h = () => (0, o.useContext)(u),
        p = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [a, i] = (0, o.useState)(null), [h, p] = (0, o.useState)(!1), m = (0, s.q)(l);
          let w;
          const g = () => {
            p(!0), clearTimeout(w), w = setTimeout((() => {
              p(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (m) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, m]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: n,
              pauseUserShouldSeeMore: g,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: a
            },
            children: t
          })), [m, n, g, a])
        }
    },
    14531: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      var o = n(75110),
        r = n(54099);
      const s = (0, o.UT)(document.documentElement.lang),
        a = () => (0, r.q)(s)
    },
    29683: (e, t, n) => {
      n.d(t, {
        A: () => p
      });
      var o = n(93876),
        r = n(90562),
        s = n.n(r),
        a = n(99489),
        i = n.n(a),
        c = n(94203),
        l = n(67538);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, p = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: a,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: p = null
          } = await (a?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let w = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (w += `?${new URLSearchParams(r)}`), !p && c) return null;
          p && (m.Authorization = `Bearer ${p}`);
          const g = {
              headers: m
            },
            f = s().all([g, t, n]),
            v = JSON.stringify({
              ...f,
              url: w
            }),
            b = await (0, o.sc)(v);
          if (l) {
            if (h[b]?.response) return h[b].response;
            if (h[b]?.loading) return {
              error: null,
              result: null
            };
            h[b] = {
              loading: !0
            }
          }
          const x = await fetch(w, f),
            k = await x.json();
          return l && (h[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    32779: (e, t, n) => {
      n.d(t, {
        A: () => s,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        r = [{
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
        s = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    33820: (e, t, n) => {
      n.d(t, {
        _y: () => b,
        _l: () => i._,
        n_: () => k,
        IT: () => x
      });
      var o = n(62229),
        r = n(61712),
        s = n(86140),
        a = n(7016),
        i = n(56861),
        c = n(51335),
        l = n(99489),
        d = n.n(l),
        u = n(48539);
      const h = (e, t) => {
        const n = (0, u.Ym)(),
          r = {
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
            loading: a,
            error: i,
            ...l
          } = (0, c.IT)(e, r);
        return (0, o.useEffect)((() => {
          if (s && r.setTitleDataPath) {
            const e = d().get(s, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [s]), (0, o.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: a
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [a]), (0, o.useEffect)((() => {
          if (r.autoSetError && i) throw new Error(String(i))
        }), [i]), {
          loading: a,
          error: i,
          data: s,
          ...l
        }
      };
      var p = n(70954);
      const m = (0, o.createContext)((() => ({
          data: null
        }))),
        w = new Promise((e => {
          e()
        })),
        g = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        f = [() => w, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(g))
        }],
        v = (0, o.createContext)((() => f)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, p.jsx)(v.Provider, {
            value: a.n,
            children: (0, p.jsx)(m.Provider, {
              value: h,
              children: t
            })
          })
        }),
        x = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, o.useContext)(m)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, o.useContext)(v)(e))
    },
    42298: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactContextFactory = window?.reactContextFactory ?? {},
        r = e => {
          let {
            context: t,
            key: n
          } = e;
          return o()?.[n] || (o()[n] = t), o()[n]
        }
    },
    48539: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        vx: () => S,
        sb: () => C,
        Ym: () => a.A,
        CA: () => b.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => l,
        OH: () => f,
        zP: () => v,
        Cb: () => p,
        N6: () => y,
        Br: () => k,
        GA: () => E
      });
      const o = (0, n(2053).A)(),
        r = () => o;
      var s = n(62229),
        a = n(14531);
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
      var c = n(9623);
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
        };
      var u = n(51379),
        h = n(29683);
      const p = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const a = (0, u.Es)(),
          [i, c] = (0, s.useState)(null),
          [l, d] = (0, s.useState)(!1),
          [p, m] = (0, s.useState)(null),
          w = (0, s.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: s = {}
              } = t;
              m(null), c(null), d(!0);
              const i = await (0, h.A)(n ?? e, {
                pingBearer: a,
                fetchOptions: o,
                finalFetchOptions: s,
                query: r
              });
              return i?.status || m(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              m(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, s.useEffect)((() => {
          null === i && null === p && !l && n && w()
        }), [n, i, p, l, w]), {
          data: i,
          error: p,
          loading: l,
          fetch: w
        }
      };
      var m = n(94203);
      const w = "__RS_CUSTOM_EVENTS__",
        g = e => `rsCustomEvent:${e}`;
      window[w] || (window[w] = {});
      const f = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = g(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].eventQueue.push(o), window[w][n].subscribers.forEach((e => {
              e(o.detail)
            }))
          };
          return (0, s.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)((() => {
            const n = g(e);
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
      var b = n(3304),
        x = (n(6590), n(67538));
      const k = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, m.A)(), r = (0, a.A)(), s = (0, x.t)(r), i = (0, u.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(s), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(i), new URL(c, `https://${n}.rockstargames.com/`)
        },
        y = e => {
          const {
            signup: t,
            login: n
          } = (0, m.A)(), o = (0, a.A)(), r = (0, x.t)(o);
          let s = "";
          return s += "lang=" + encodeURIComponent(r), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${s}`,
            signInUrl: `${n}?${s}`
          }
        };
      n(55925);
      const S = () => {
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
        C = () => {
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
      n(27185), n(89421);
      const E = e => {
        const [t, n] = (0, s.useState)(!1), o = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          const r = () => {
            if (t || !o.current) return;
            const s = o.current,
              {
                height: a
              } = s.getBoundingClientRect(),
              i = window.innerHeight;
            window.scrollY + i >= s.offsetTop + a * e && (n(!0), window.removeEventListener("scroll", r))
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
      }
    },
    51379: (e, t, n) => {
      n.d(t, {
        ec: () => h,
        e9: () => m,
        Es: () => w,
        bD: () => p
      });
      var o = n(62229),
        r = n(75110),
        s = n(42298),
        a = n(39445),
        i = n(94203);
      var c = n(82261),
        l = n(70954);
      const d = {
          token: (0, r.UT)("")
        },
        u = (0, s.A)({
          context: (0, o.createContext)(d),
          key: "utilsTokenProvider"
        }),
        h = e => {
          let {
            children: t,
            token: n
          } = e;
          return (0, l.jsx)(u.Provider, {
            value: {
              token: n
            },
            children: t
          })
        },
        p = () => {
          const {
            token: e
          } = (0, o.useContext)(u);
          return [e]
        },
        m = () => {
          const [e] = p();
          return (0, c.useReactiveVar)(e)
        },
        w = () => {
          const [e] = p();
          return () => (async e => {
            let {
              token: t
            } = e;
            const {
              pingBearer: n
            } = (0, i.A)();
            try {
              const e = t?.() ?? "";
              if (e) {
                const {
                  exp: t = 0
                } = (0, a.s)(e) ?? {};
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
        }
    },
    55925: (e, t, n) => {
      n.d(t, {
        G4: () => m,
        uU: () => p
      });
      var o = n(62229),
        r = n(75110),
        s = n(54099),
        a = n(42298),
        i = n(70954);
      const c = {
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
        l = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = c;
          return Object.keys(c).map((t => {
            const {
              min: o,
              max: r
            } = c[t], s = e >= o && e <= r, a = e >= o;
            n[t] = {
              activeExact: s,
              activeMin: a,
              min: o,
              max: r
            }
          })), {
            isMobile: e < c.sm.min,
            isTablet: e < c.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        d = (0, a.A)({
          context: (0, o.createContext)(l()),
          key: "resizeContext"
        }),
        {
          Consumer: u
        } = d,
        h = (0, r.UT)(l()),
        p = e => {
          let {
            children: t
          } = e;
          const n = (0, s.q)(h);
          return (0, o.useEffect)((() => {
            const e = () => {
              h(l())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, i.jsx)(d.Provider, {
            value: n,
            children: t
          })
        },
        m = () => (0, o.useContext)(d)
    },
    67538: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    82261: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => ce.R,
        ApolloProvider: () => le.X,
        DataLayerProvider: () => Re,
        GraphOperationsProvider: () => y._y,
        InMemoryCache: () => ue.D,
        Platform: () => q,
        Platforms: () => X,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => Ue.uU,
        RockstarGraphProvider: () => j,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => Be.N2,
        classList: () => Q,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => z,
        downloadFile: () => oe,
        findPlatform: () => W,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ne,
        getConfigForDomain: () => a.A,
        getCookieValueByName: () => K,
        getGen8Consoles: () => re,
        getGen9Consoles: () => se,
        getLanguageLabel: () => ie,
        getUriForGraphEnv: () => i,
        gql: () => de.J1,
        gtmInit: () => ke,
        importAll: () => ee,
        isGen9Platform: () => ae,
        makeVar: () => k.UT,
        mutateWebSettings: () => Ae,
        newswirePost: () => D,
        oneTrustInit: () => B,
        safeStyles: () => d,
        scrollToElement: () => F,
        setContextItem: () => u.A,
        setCookieValue: () => Z,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => H,
        toScLocaleString: () => he.t,
        track: () => ve,
        useApolloClient: () => U,
        useBase: () => _e.RK,
        useBodyScrollable: () => _,
        useDataLayer: () => Te,
        useHasReduceMotionPreference: () => _e.vx,
        useHasSaveDataPreference: () => _e.sb,
        useLocale: () => _e.Ym,
        useMutateState: () => v,
        useMutation: () => y.n_,
        useNewswirePost: () => _e.CA,
        usePreloadImg: () => _e.OG,
        usePrevious: () => _e.ZC,
        useQuery: () => y.IT,
        useQueryParams: () => _e.sq,
        useReactiveVar: () => M.q,
        useRockstarEventDispatcher: () => _e.OH,
        useRockstarEventSubscriber: () => _e.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => Pe,
        useScApi: () => _e.Cb,
        useScAuthLinks: () => _e.N6,
        useScAuthTpaLink: () => _e.Br,
        useScroll: () => Be.Ll,
        useScrollTracking: () => _e.GA,
        useState: () => g,
        useWindowResize: () => Ue.G4,
        webSettingsReactive: () => Ee,
        withAutoRouteTracking: () => xe,
        withGtmTracking: () => je,
        withMediaBasedProps: () => Ie,
        withReactiveState: () => x,
        withRockstarGraph: () => I,
        withTranslations: () => $e
      });
      var o = n(29683);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(2053),
        a = n(94203);
      const i = e => {
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
      };
      var c = n(99489),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(42298),
        h = n(89858),
        p = n(62229),
        m = n(70954);
      const w = (0, u.A)({
          context: (0, p.createContext)({}),
          key: "graphContextGet"
        }),
        g = () => (0, p.useContext)(w),
        f = (0, u.A)({
          context: (0, p.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, p.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, M.q)(n);
          const o = (0, p.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, m.jsx)(w.Provider, {
            value: n(),
            children: (0, m.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        x = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, m.jsx)(b, {
              state: n,
              children: (0, m.jsx)(e, {
                ...t
              })
            })
          }
        };
      var k = n(75110),
        y = n(33820),
        S = n(51379),
        C = n(22896);
      var E = n(24735),
        A = n(15403),
        P = n.n(A);
      var L = n(77083),
        T = n(93876);
      const R = (0, L.e)({
          sha256: T.sc
        }),
        U = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [s] = (0, p.useState)(new ue.D({
              typePolicies: n
            })),
            a = R.concat((e => {
              let {
                token: t
              } = e;
              return (0, C.o)(((e, n) => {
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
            }).concat((e => (0, E.$)({
              ...e,
              fetch: P()
            }))(r)));
          return new ce.R({
            cache: s,
            link: a
          })
        },
        j = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = U({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, m.jsx)(S.ec, {
            token: n?.token,
            children: (0, m.jsx)(le.X, {
              client: r,
              children: (0, m.jsx)(y._y, {
                children: t
              })
            })
          })
        },
        I = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, k.UT)("");
          return function(t) {
            return (0, m.jsx)(j, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, m.jsx)(e, {
                ...t
              })
            })
          }
        };
      var M = n(54099);
      const O = (0, k.UT)({}),
        $ = "data-disallow-body-scroll",
        _ = e => {
          const t = (0, M.q)(O),
            n = Object.values(t).some((e => !!e));
          return (0, p.useEffect)((() => {
            n ? document.documentElement.setAttribute($, "true") : document.documentElement.removeAttribute($)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => O(e))({
              ...t,
              [e]: n
            })
          }
        },
        B = e => {
          let {
            id: t,
            init: n
          } = e;
          if (t) {
            const e = document.createElement("script");
            e.onload = () => n(), e.onerror = () => n(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
          } else n()
        };
      var D = n(3304);
      const H = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        F = e => {
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
        z = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (F({
            element: n
          }), N(n))
        },
        N = e => {
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
      class q {
        constructor(e, t, n, o) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = s
        }
      }
      let G = "";
      G = "PC Legacy";
      const X = Object.freeze({
          pc: new q("pc", "PC Legacy", 8, "sc"),
          ps: new q("ps", "PlayStation", 3, "np", "ps"),
          ps3: new q("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new q("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new q("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new q("xbox", "Xbox", 4, "xbl"),
          xbox360: new q("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new q("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new q("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new q("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new q("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new q("applestore", "App Store", 102, "applestore"),
          googleplay: new q("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new q("app_store", "App Store", 102, "applestore"),
          googlePlay: new q("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new q("pcalt", "PC Enhanced", 22, "sc")
        }),
        V = Object.freeze(Object.values(X));

      function W(e) {
        if (!e) return;
        if (e instanceof q) return e;
        const t = e.toString().toLowerCase();
        return V.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const Q = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var Y = n(33521),
        J = n(2562);
      const K = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        Z = (e, t) => {
          e && void 0 !== t && (0, Y.canStoreCookie)(e) && K(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,J.F)()}; path=/;`)
        },
        ee = e => e.keys().forEach(e),
        te = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ne = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return te.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        oe = e => {
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
        re = () => [X.xbox360.name, X.xboxone.name, X.ps3.name, X.ps4.name, X.pc.name],
        se = () => [X.xboxsx.name, X.ps5.name, X.pcalt.name],
        ae = e => se().includes(e),
        ie = e => {
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
      var ce = n(86140),
        le = n(89561),
        de = n(67006),
        ue = n(61712),
        he = n(67538),
        pe = n(59065),
        me = n.n(pe);
      const we = (0, n(32779).A)(),
        ge = we?.id,
        fe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ve = e => {
          const t = {
            ...e,
            environment: ge,
            display_type: fe
          };
          me().dataLayer({
            dataLayer: t
          })
        };
      var be = n(9623);
      const xe = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, be.useLocation)();
          return (0, p.useEffect)((() => {
            ve({
              event: "trackPageview"
            })
          }), [n]), (0, m.jsx)(e, {
            ...t
          })
        })(e, t),
        ke = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          me().initialize(n)
        };
      var ye = n(37307);
      const Se = "rockstar-games-web";
      let Ce;
      try {
        const e = ye.A.get(Se) ?? "";
        Ce = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ce = {}
      }
      const Ee = (0, k.UT)(Ce),
        Ae = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ee() ?? {}
          };
          return o[t] = n, null === n && delete o[t], ye.A.set(Se, JSON.stringify(o), {
            expires: 30,
            domain: (0, J.F)(),
            path: "/"
          }), Ee(o), o
        },
        Pe = () => ({
          webSettings: (0, M.q)(Ee),
          webSettingsReactive: Ee,
          mutateWebSettings: Ae
        }),
        Le = (0, u.A)({
          context: (0, p.createContext)({}),
          key: "gtmDatalayer"
        }),
        Te = () => (0, p.useContext)(Le),
        Re = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = Te() ?? {},
            r = (0, p.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, m.jsx)(Le.Provider, {
            value: r,
            children: t
          })
        };
      var Ue = n(55925);
      const je = e => t => ((e, t) => (0, m.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ve(e)
          }
        }))(e, t),
        Ie = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, p.useState)(t), s = e => {
              let t = e;
              const n = t?.items;
              if (n?.length) {
                const e = n.map((e => s(e)));
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
            return (0, p.useEffect)((() => {
              const e = l().debounce((() => {
                r(s(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, m.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var Me = n(14531);
      const Oe = de.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        $e = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, Me.A)(),
                {
                  data: n
                } = (0, y.IT)(Oe, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, m.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var _e = n(48539),
        Be = n(6590)
    },
    89858: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {},
        r = e => {
          let {
            key: t,
            value: n,
            domain: r = "default"
          } = e;
          return o()?.[r] || (o()[r] = {}), o()?.[r]?.[t] || (o()[r][t] = n), o()[r][t]
        }
    },
    94203: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        s = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: s,
            cms: a,
            graphEnv: i,
            scHost: c,
            hostname: l,
            cdnBase: d,
            key: u,
            marketingAuthTLD: h
          } = e;
          const p = o?.apiHost ?? t,
            m = o?.authHost ?? n,
            w = o?.cdnBase ?? d,
            g = o?.clientId ?? s,
            f = r?.marketingAuthTLD ?? h,
            v = o?.scHost ?? c,
            b = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? i,
            host: v,
            hostname: l,
            cdnBase: w,
            key: u,
            clientId: g,
            cms: `https://${a}.rockstargames.com/graphql`,
            authHost: m,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
          }
        },
        a = [s({
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
        }), s({
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
        i = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = a.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return a.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || a[0]
        }
    }
  }
]);