try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c313e6f4-870b-44ea-9e72-51d54dd86b86", e._sentryDebugIdIdentifier = "sentry-dbid-c313e6f4-870b-44ea-9e72-51d54dd86b86")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [8859], {
    8859: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => _.R,
        ApolloProvider: () => z.X,
        DataLayerProvider: () => Tt,
        InMemoryCache: () => I.D,
        Platform: () => be,
        Platforms: () => ke,
        ReactiveStateProvider: () => $,
        ResizeProvider: () => vt,
        RockstarGraphProvider: () => re,
        RockstarTokenProvider: () => N,
        ScrollProvider: () => ut,
        coreScApiFetch: () => v,
        detectIfWeShouldAnchorSomewhere: () => fe,
        downloadFile: () => Ae,
        findPlatform: () => xe,
        generateTpaLink: () => Te,
        getAccentColor: () => b,
        getBase: () => k,
        getCdnPrefix: () => je,
        getConfigForDomain: () => m,
        getCookieValueByName: () => Ce,
        getGen8Consoles: () => Ue,
        getGen9Consoles: () => $e,
        getLanguageLabel: () => Be,
        getUriForGraphEnv: () => y,
        gql: () => Ge.J1,
        gtmInit: () => Rt,
        importAll: () => Me,
        isGen9Platform: () => Oe,
        makeVar: () => B.UT,
        mutateWebSettings: () => $t,
        newswirePost: () => o,
        oneTrustInit: () => le,
        safeStyles: () => x,
        scrollToElement: () => we,
        setContextItem: () => E,
        setCookieValue: () => Pe,
        setMakeVarItem: () => P,
        supportedBrowsers: () => ge,
        toScLocaleString: () => p,
        track: () => He,
        useApolloClient: () => ne,
        useBase: () => Ye,
        useBodyScrollable: () => de,
        useDataLayer: () => Lt,
        useHasReduceMotionPreference: () => kt,
        useHasSaveDataPreference: () => yt,
        useLazyQuery: () => Et._,
        useLocale: () => Xe,
        useMutateState: () => U,
        useMutation: () => Ct.n,
        useNewswirePost: () => pe,
        usePreloadImg: () => Ke,
        usePrevious: () => tt,
        useQuery: () => ae,
        useQueryParams: () => et,
        useReactiveVar: () => M.q,
        useRockstarEventDispatcher: () => at,
        useRockstarEventSubscriber: () => st,
        useRockstarToken: () => V,
        useRockstarTokenPing: () => X,
        useRockstarTokenReactive: () => G,
        useRockstarWebSettings: () => Ot,
        useScApi: () => nt,
        useScAuthLinks: () => ht,
        useScroll: () => lt,
        useScrollTracking: () => xt,
        useScrollVisibility: () => St,
        useState: () => j,
        useWindowResize: () => bt,
        webSettingsReactive: () => Ut,
        withAutoRouteTracking: () => Mt,
        withGtmTracking: () => Fe,
        withMediaBasedProps: () => Ne,
        withReactiveState: () => O,
        withRockstarGraph: () => se,
        withTranslations: () => We
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => he,
        Provider: () => me,
        useNewswirePost: () => pe
      });
      var r = n(2887),
        a = n(9465),
        s = n.n(a),
        i = n(5076),
        c = n.n(i);
      const d = window?.env?.sc,
        l = window?.env?.marketing,
        u = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
          graphEnv: r,
          queryManifest: a,
          scHost: s,
          hostname: i,
          cdnBase: c,
          key: u,
          marketingAuthTLD: h
        }) => {
          const m = d?.apiHost ?? e,
            p = d?.authHost ?? t,
            g = d?.cdnBase ?? c,
            w = d?.clientId ?? n,
            f = l?.marketingAuthTLD ?? h,
            v = d?.scHost ?? s,
            b = l?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: d?.graphEnv ?? r,
            host: v,
            hostname: i,
            cdnBase: g,
            key: u,
            clientId: w,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: p,
            queryManifest: a,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${p}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${p}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${p}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`,
            authCookieName: "BearerToken"
          }
        },
        h = [u({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
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
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        m = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = h.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return h.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || h[0]
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
        v = async (e, {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: o = null,
          pingBearer: a,
          requireBearerToken: i = !0,
          useCache: d = !0
        } = {}) => {
          try {
            const {
              bearerToken: l = null
            } = await (a?.()) ?? {}, u = {
              "X-Requested-With": "XMLHttpRequest",
              "X-AMC": !0,
              "Content-Type": "application/json",
              ...w && {
                "X-lang": w
              }
            };
            let h = `${g}/${e}`;
            if (null === o || c().isEmpty(o) || (h += `?${new URLSearchParams(o)}`), !l && i) return null;
            l && (u.Authorization = `Bearer ${l}`);
            const m = {
                headers: u
              },
              p = s().all([m, t, n]),
              v = JSON.stringify({
                ...p,
                url: h
              }),
              b = await (0, r.sc)(v);
            if (d) {
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
              y = await k.json();
            return d && (f[b] = {
              response: y,
              loading: !1
            }), y
          } catch (t) {
            console.error(`ScApi fetch error ${e}:`, t)
          }
        }, b = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", k = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, y = e => {
          if (/^https{0,1}:\/\//.test(e)) return e;
          let t;
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
        }, x = e => {
          const t = c().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        }, S = () => window.reactContextFactory = window?.reactContextFactory ?? {}, E = ({
          context: e,
          key: t
        }) => (S()?.[t] || (S()[t] = e), S()[t]), C = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, P = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (C()?.[n] || (C()[n] = {}), C()?.[n]?.[e] || (C()[n][e] = t), C()[n][e]);
      var L = n(2295),
        T = n(1127),
        M = n(3452);
      const R = E({
          context: (0, T.createContext)({}),
          key: "graphContextGet"
        }),
        j = () => (0, T.useContext)(R),
        A = E({
          context: (0, T.createContext)({}),
          key: "graphContextSet"
        }),
        U = () => (0, T.useContext)(A),
        $ = ({
          children: e,
          state: t
        }) => {
          (0, M.q)(t);
          const n = (0, T.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, L.jsx)(R.Provider, {
            value: t(),
            children: (0, L.jsx)(A.Provider, {
              value: n,
              children: e
            })
          })
        },
        O = (e, {
          state: t
        }) => function(n) {
          return (0, L.jsx)($, {
            state: t,
            children: (0, L.jsx)(e, {
              ...n
            })
          })
        };
      var B = n(1823),
        I = n(9757),
        _ = n(5102),
        z = n(8718),
        D = n(7980),
        q = n(8128);
      const H = {
          token: (0, B.UT)("")
        },
        F = E({
          context: (0, T.createContext)(H),
          key: "utilsTokenProvider"
        }),
        N = ({
          children: e,
          token: t
        }) => (0, L.jsx)(F.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        G = () => {
          const {
            token: e
          } = (0, T.useContext)(F);
          return [e]
        },
        V = () => {
          const [e] = G();
          return (0, M.q)(e)
        },
        X = () => {
          const [e] = G();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = m(), o = e => {
              try {
                const {
                  exp: t = 0
                } = (0, q.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const r = o(D.A.get(t)) || o(e?.());
              if (r) return e(r), {
                bearerToken: r
              };
              const a = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await a.json();
              return e(s.bearerToken ?? ""), s
            } catch {
              return e(""), !1
            }
          })({
            token: e
          })
        };
      var Q = n(6347);
      var W = n(3605),
        J = n(1162),
        Y = n.n(J);
      const K = (0, n(2944).e)({
        sha256: r.sc
      });
      var Z = n(6277);
      const ee = document.documentElement.lang,
        te = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: ee,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: r,
              error: a,
              ...s
            } = (0, Z.IT)(e, n);
          return (0, T.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, T.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, T.useEffect)(() => {
            if (n.autoSetError && a) throw new Error(String(a))
          }, [a]), {
            loading: r,
            error: a,
            data: o,
            ...s
          }
        },
        ne = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? y(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, T.useState)(new I.D({
              typePolicies: t
            })),
            a = K.concat((({
              token: e
            }) => (0, Q.o)((t, {
              headers: n
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${o}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, W.$)({
              ...e,
              fetch: Y()
            }))(o)));
          return new _.R({
            cache: r,
            link: a
          })
        },
        oe = (0, T.createContext)(te),
        re = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = ne({
            graphOptions: t,
            typePolicies: n
          });
          return (0, L.jsx)(N, {
            token: t?.token,
            children: (0, L.jsx)(z.X, {
              client: o,
              children: (0, L.jsx)(oe.Provider, {
                value: te,
                children: e
              })
            })
          })
        },
        ae = (e, t) => (0, T.useContext)(oe)(e, t),
        se = (e, {
          env: t = "prod"
        }) => {
          const n = (0, B.UT)("");
          return function(o) {
            return (0, L.jsx)(re, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, L.jsx)(e, {
                ...o
              })
            })
          }
        },
        ie = (0, B.UT)({}),
        ce = "data-disallow-body-scroll",
        de = e => {
          const t = (0, M.q)(ie),
            n = Object.values(t).some(e => !!e);
          return (0, T.useEffect)(() => {
            n ? document.documentElement.setAttribute(ce, "true") : document.documentElement.removeAttribute(ce)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => ie(e))({
              ...t,
              [e]: n
            })
          }
        },
        le = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        ue = E({
          context: (0, T.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: he
        } = ue,
        me = ({
          article: e,
          children: t
        }) => (0, L.jsx)(ue.Provider, {
          value: e,
          children: t
        }),
        pe = () => (0, T.useContext)(ue),
        ge = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        we = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            n = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        fe = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (we({
            element: n
          }), ve(n))
        },
        ve = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class be {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = a
        }
      }
      const ke = Object.freeze({
          pc: new be("pc", "PC Legacy", 8, "sc"),
          ps: new be("ps", "PlayStation", 3, "np", "ps"),
          ps3: new be("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new be("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new be("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new be("xbox", "Xbox", 4, "xbl"),
          xbox360: new be("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new be("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new be("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new be("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new be("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new be("applestore", "App Store", 102, "applestore"),
          googleplay: new be("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new be("app_store", "App Store", 102, "applestore"),
          googlePlay: new be("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new be("pcalt", "PC Enhanced", 22, "sc")
        }),
        ye = Object.freeze(Object.values(ke));

      function xe(e) {
        if (!e) return;
        if (e instanceof be) return e;
        const t = e.toString().toLowerCase();
        return ye.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var Se = n(6306);
      const Ee = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Ce = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            r = o?.substring(n.length, o.length);
          return r
        },
        Pe = (e, t) => {
          e && void 0 !== t && (0, Se.canStoreCookie)(e) && Ce(e) !== t && (document.cookie = `${e}=${t}; domain=${Ee()}; path=/;`)
        };
      var Le = n(8613);
      const Te = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, Le.JK)(), {
          authHost: r,
          clientId: a
        } = m(), s = await n(), i = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return i.searchParams.append("cid", a), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && i.searchParams.append("accessToken", s.bearerToken), i
      }, Me = e => e.keys().forEach(e), Re = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], je = (e = !0) => Re.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, Ae = e => {
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
        }).then(e => e.arrayBuffer()).then(e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            o = document.createElement("a");
          o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }).catch(e => {
          console.log(e)
        })
      }, Ue = () => [ke.xbox360.name, ke.xboxone.name, ke.ps3.name, ke.ps4.name, ke.pc.name], $e = () => [ke.xboxsx.name, ke.ps5.name, ke.pcalt.name], Oe = e => $e().includes(e), Be = e => {
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
      var Ie = n(9864),
        _e = n.n(Ie);
      const ze = (0, n(9867).A)(),
        De = ze?.id,
        qe = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        He = e => {
          const t = {
            ...e,
            environment: De,
            display_type: qe
          };
          _e().dataLayer({
            dataLayer: t
          })
        },
        Fe = e => t => ((e, t) => (0, L.jsx)(e, {
          ...t,
          gtmTrack: e => {
            He(e)
          }
        }))(e, t),
        Ne = (e, t = 250) => n => ((e, t, n) => {
          const [o, r] = (0, T.useState)(t), a = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => a(e));
              t = {
                ...t,
                items: e
              }
            }
            const o = t?.mediaQueryList;
            return o?.length ? (o.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
              t = {
                ...t,
                ...e
              }
            }), t) : t
          };
          return (0, T.useEffect)(() => {
            const e = c().debounce(() => {
              r(a(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, L.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Ge = n(445);
      const Ve = (0, B.UT)(document.documentElement.lang),
        Xe = () => (0, M.q)(Ve),
        Qe = Ge.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        We = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = Xe(),
              {
                data: n
              } = ae(Qe, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, L.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t),
        Je = k(),
        Ye = () => Je,
        Ke = e => {
          const [t, n] = (0, T.useState)(null), [o, r] = (0, T.useState)(null), [a, s] = (0, T.useState)({});
          return (0, T.useLayoutEffect)(() => {
            let t = new Image,
              o = !1;
            return t.addEventListener("load", () => {
              s({
                width: t.width,
                height: t.height
              }), t = null, o || n(!0)
            }), t.addEventListener("error", () => {
              t = null, o || (n(!1), r(!0))
            }), t.src = e, () => {
              o = !0, null !== t && (t.src = "")
            }
          }, [e]), [t, a]
        };
      var Ze = n(2562);
      const et = () => {
          const {
            search: e
          } = (0, Ze.useLocation)();
          return new URLSearchParams(e)
        },
        tt = e => {
          const t = (0, T.useRef)();
          return (0, T.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        nt = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: o = null
        }) => {
          const r = X(),
            [a, s] = (0, T.useState)(null),
            [i, c] = (0, T.useState)(!1),
            [d, l] = (0, T.useState)(null),
            [u, h] = (0, T.useState)(!1),
            m = (0, T.useCallback)(async (t = {}, a = null) => {
              try {
                const {
                  fetchOptions: i = {}
                } = t;
                l(null), s(null), c(!0);
                const d = await v(a ?? e, {
                  pingBearer: r,
                  fetchOptions: n,
                  finalFetchOptions: i,
                  query: o
                });
                return d?.status || l(JSON.stringify(d?.error)), s(d), c(!1), d
              } catch (e) {
                l(String(e)), c(!1)
              } finally {
                h(!0)
              }
              return null
            }, [e, n, o]);
          return (0, T.useEffect)(() => {
            null === a && null === d && !i && t && m()
          }, [t, a, d, i, m]), {
            data: a,
            error: d,
            loading: i,
            fetch: m,
            resolved: u
          }
        },
        ot = "__RS_CUSTOM_EVENTS__",
        rt = e => `rsCustomEvent:${e}`;
      window[ot] || (window[ot] = {});
      const at = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = rt(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[ot][n] || (window[ot][n] = {
              eventQueue: [],
              subscribers: []
            }), window[ot][n].eventQueue.push(o), window[ot][n].subscribers.forEach(e => {
              e(o.detail)
            })
          };
          return (0, T.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        st = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, T.useEffect)(() => {
            const n = rt(e);
            return window[ot][n] || (window[ot][n] = {
              eventQueue: [],
              subscribers: []
            }), window[ot][n].subscribers.push(t), window[ot][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[ot][n].subscribers = window[ot][n].subscribers.filter(e => e !== t), 0 === window[ot][n].subscribers.length && delete window[ot][n]
            }
          }, [e, t]), (0, T.useMemo)(() => ({}), [])
        },
        it = P({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, B.UT)(!1)
        }),
        ct = e => it(e),
        dt = E({
          context: (0, T.createContext)(null),
          key: "scrollContext"
        }),
        lt = () => (0, T.useContext)(dt),
        ut = ({
          children: e
        }) => {
          const [t, n] = (0, T.useState)(window.pageYOffset), [o, r] = (0, T.useState)(null), [a, s] = (0, T.useState)(!1), i = (0, M.q)(it);
          let c;
          const d = () => {
            s(!0), clearTimeout(c), c = setTimeout(() => {
              s(!1)
            }, 2e3)
          };
          return (0, T.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), a || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [a, i]), (0, T.useMemo)(() => (0, L.jsx)(dt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: ct,
              userShouldSeeMore: o
            },
            children: e
          }), [i, t, d, o])
        },
        ht = e => {
          const {
            signup: t,
            login: n
          } = m(), o = Xe(), r = p(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        },
        mt = {
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
        pt = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = mt;
          return Object.keys(mt).map(t => {
            const {
              min: o,
              max: r
            } = mt[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          }), {
            isMobile: e < mt.sm.min,
            isTablet: e < mt.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        gt = E({
          context: (0, T.createContext)(pt()),
          key: "resizeContext"
        }),
        {
          Consumer: wt
        } = gt,
        ft = (0, B.UT)(pt()),
        vt = ({
          children: e
        }) => {
          const t = (0, M.q)(ft);
          return (0, T.useEffect)(() => {
            const e = () => {
              ft(pt())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, L.jsx)(gt.Provider, {
            value: t,
            children: e
          })
        },
        bt = () => (0, T.useContext)(gt),
        kt = () => {
          const [e, t] = (0, T.useState)();
          return (0, T.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        yt = () => {
          const [e, t] = (0, T.useState)(!1);
          return (0, T.useEffect)(() => {
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
          }, []), e
        };
      n(1878), navigator, navigator, navigator, navigator;
      const xt = e => {
          const [t, n] = (0, T.useState)(!1), o = (0, T.useRef)(null);
          return (0, T.useEffect)(() => {
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
          }, [t, e]), {
            ref: o,
            scrollTracked: t
          }
        },
        St = (e = 0) => {
          const t = (0, T.useRef)(null),
            [n, o] = (0, T.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                a = window.innerHeight || document.documentElement.clientHeight,
                s = (Math.min(r.bottom, a) - Math.max(r.top, 0)) / r.height;
              o(s > e)
            };
          return (0, T.useEffect)(() => {
            r();
            const e = () => requestAnimationFrame(r);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), window.addEventListener("resize", e), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
            }
          }, [e]), {
            ref: t,
            inView: n
          }
        };
      var Et = n(6591),
        Ct = n(701);
      const Pt = E({
          context: (0, T.createContext)({}),
          key: "gtmDatalayer"
        }),
        Lt = () => (0, T.useContext)(Pt),
        Tt = ({
          children: e,
          ...t
        }) => {
          const n = Lt() ?? {},
            o = (0, T.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, L.jsx)(Pt.Provider, {
            value: o,
            children: e
          })
        },
        Mt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ze.useLocation)();
          return (0, T.useEffect)(() => {
            He({
              event: "trackPageview"
            })
          }, [n]), (0, L.jsx)(e, {
            ...t
          })
        })(e, t),
        Rt = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          _e().initialize(t)
        },
        jt = "rockstar-games-web";
      let At;
      try {
        const e = D.A.get(jt) ?? "";
        At = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        At = {}
      }
      const Ut = (0, B.UT)(At),
        $t = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Ut() ?? {}
          };
          return n[e] = t, null === t && delete n[e], D.A.set(jt, JSON.stringify(n), {
            expires: 30,
            domain: Ee(),
            path: "/"
          }), Ut(n), n
        },
        Ot = () => ({
          webSettings: (0, M.q)(Ut),
          webSettingsReactive: Ut,
          mutateWebSettings: $t
        })
    }
  }
]);