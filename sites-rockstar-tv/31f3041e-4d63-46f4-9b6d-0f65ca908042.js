try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "31f3041e-4d63-46f4-9b6d-0f65ca908042", e._sentryDebugIdIdentifier = "sentry-dbid-31f3041e-4d63-46f4-9b6d-0f65ca908042")
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
  [9772], {
    9772: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => _.R,
        ApolloProvider: () => q.X,
        DataLayerProvider: () => Rt,
        InMemoryCache: () => z.D,
        Platform: () => ke,
        Platforms: () => ye,
        ReactiveStateProvider: () => B,
        ResizeProvider: () => bt,
        RockstarGraphProvider: () => ae,
        RockstarTokenProvider: () => G,
        ScrollProvider: () => ht,
        coreScApiFetch: () => v,
        cx: () => b,
        detectIfWeShouldAnchorSomewhere: () => ve,
        downloadFile: () => Ue,
        findPlatform: () => Se,
        generateTpaLink: () => Me,
        getAccentColor: () => k,
        getBase: () => y,
        getCdnPrefix: () => Ae,
        getConfigForDomain: () => m,
        getCookieValueByName: () => Pe,
        getGen8Consoles: () => $e,
        getGen9Consoles: () => Be,
        getLanguageLabel: () => Ie,
        getUriForGraphEnv: () => x,
        gql: () => Ve.J1,
        gtmInit: () => At,
        importAll: () => Re,
        isGen9Platform: () => Oe,
        makeVar: () => I.UT,
        mutateWebSettings: () => Ot,
        newswirePost: () => o,
        oneTrustInit: () => ue,
        safeStyles: () => S,
        scrollToElement: () => fe,
        setContextItem: () => C,
        setCookieValue: () => Te,
        setMakeVarItem: () => T,
        supportedBrowsers: () => we,
        toScLocaleString: () => p,
        track: () => Fe,
        useApolloClient: () => oe,
        useBase: () => Ke,
        useBodyScrollable: () => le,
        useDataLayer: () => Mt,
        useHasReduceMotionPreference: () => yt,
        useHasSaveDataPreference: () => xt,
        useLazyQuery: () => Pt._,
        useLocale: () => Qe,
        useMutateState: () => $,
        useMutation: () => Tt.n,
        useNewswirePost: () => ge,
        usePreloadImg: () => Ze,
        usePrevious: () => nt,
        useQuery: () => se,
        useQueryParams: () => tt,
        useReactiveVar: () => R.q,
        useRelativeTime: () => Ct,
        useRockstarEventDispatcher: () => st,
        useRockstarEventSubscriber: () => it,
        useRockstarToken: () => X,
        useRockstarTokenPing: () => Q,
        useRockstarTokenReactive: () => V,
        useRockstarWebSettings: () => It,
        useScApi: () => ot,
        useScAuthLinks: () => mt,
        useScroll: () => ut,
        useScrollTracking: () => St,
        useScrollVisibility: () => Et,
        useState: () => A,
        useWindowResize: () => kt,
        webSettingsReactive: () => Bt,
        withAutoRouteTracking: () => jt,
        withGtmTracking: () => Ne,
        withMediaBasedProps: () => Ge,
        withReactiveState: () => O,
        withRockstarGraph: () => ie,
        withTranslations: () => Je
      });
      var o = {};
      n.r(o), n.d(o, {
        Consumer: () => me,
        Provider: () => pe,
        useNewswirePost: () => ge
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
        }, b = (...e) => e.filter(Boolean).join(" "), k = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17", y = () => {
          const e = document.currentScript,
            t = e?.src ? new URL(e.src).origin : "";
          let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
          return n.endsWith("/") || (n = `${n}/`), n
        }, x = e => {
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
        }, S = e => {
          const t = c().clone(e);
          return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
        }, E = () => window.reactContextFactory = window?.reactContextFactory ?? {}, C = ({
          context: e,
          key: t
        }) => (E()?.[t] || (E()[t] = e), E()[t]), P = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {}, T = ({
          key: e,
          value: t,
          domain: n = "default"
        }) => (P()?.[n] || (P()[n] = {}), P()?.[n]?.[e] || (P()[n][e] = t), P()[n][e]);
      var L = n(2295),
        M = n(1127),
        R = n(3452);
      const j = C({
          context: (0, M.createContext)({}),
          key: "graphContextGet"
        }),
        A = () => (0, M.useContext)(j),
        U = C({
          context: (0, M.createContext)({}),
          key: "graphContextSet"
        }),
        $ = () => (0, M.useContext)(U),
        B = ({
          children: e,
          state: t
        }) => {
          (0, R.q)(t);
          const n = (0, M.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, L.jsx)(j.Provider, {
            value: t(),
            children: (0, L.jsx)(U.Provider, {
              value: n,
              children: e
            })
          })
        },
        O = (e, {
          state: t
        }) => function(n) {
          return (0, L.jsx)(B, {
            state: t,
            children: (0, L.jsx)(e, {
              ...n
            })
          })
        };
      var I = n(1823),
        z = n(9757),
        _ = n(5102),
        q = n(8718),
        D = n(7980),
        H = n(8128);
      const F = {
          token: (0, I.UT)("")
        },
        N = C({
          context: (0, M.createContext)(F),
          key: "utilsTokenProvider"
        }),
        G = ({
          children: e,
          token: t
        }) => (0, L.jsx)(N.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        V = () => {
          const {
            token: e
          } = (0, M.useContext)(N);
          return [e]
        },
        X = () => {
          const [e] = V();
          return (0, R.q)(e)
        },
        Q = () => {
          const [e] = V();
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
                } = (0, H.s)(e ?? "") ?? {};
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
      var W = n(6347);
      var J = n(3605),
        Y = n(1162),
        K = n.n(Y);
      const Z = (0, n(2944).e)({
        sha256: r.sc
      });
      var ee = n(6277);
      const te = document.documentElement.lang,
        ne = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: te,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: r,
              error: a,
              ...s
            } = (0, ee.IT)(e, n);
          return (0, M.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, M.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, M.useEffect)(() => {
            if (n.autoSetError && a) throw new Error(String(a))
          }, [a]), {
            loading: r,
            error: a,
            data: o,
            ...s
          }
        },
        oe = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? x(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, M.useState)(new z.D({
              typePolicies: t
            })),
            a = Z.concat((({
              token: e
            }) => (0, W.o)((t, {
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
            }).concat((e => (0, J.$)({
              ...e,
              fetch: K()
            }))(o)));
          return new _.R({
            cache: r,
            link: a
          })
        },
        re = (0, M.createContext)(ne),
        ae = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = oe({
            graphOptions: t,
            typePolicies: n
          });
          return (0, L.jsx)(G, {
            token: t?.token,
            children: (0, L.jsx)(q.X, {
              client: o,
              children: (0, L.jsx)(re.Provider, {
                value: ne,
                children: e
              })
            })
          })
        },
        se = (e, t) => (0, M.useContext)(re)(e, t),
        ie = (e, {
          env: t = "prod"
        }) => {
          const n = (0, I.UT)("");
          return function(o) {
            return (0, L.jsx)(ae, {
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
        ce = (0, I.UT)({}),
        de = "data-disallow-body-scroll",
        le = e => {
          const t = (0, R.q)(ce),
            n = Object.values(t).some(e => !!e);
          return (0, M.useEffect)(() => {
            n ? document.documentElement.setAttribute(de, "true") : document.documentElement.removeAttribute(de)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => ce(e))({
              ...t,
              [e]: n
            })
          }
        },
        ue = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        },
        he = C({
          context: (0, M.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: me
        } = he,
        pe = ({
          article: e,
          children: t
        }) => (0, L.jsx)(he.Provider, {
          value: e,
          children: t
        }),
        ge = () => (0, M.useContext)(he),
        we = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        fe = ({
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
        ve = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (fe({
            element: n
          }), be(n))
        },
        be = e => {
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
      class ke {
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
      const ye = Object.freeze({
          pc: new ke("pc", "PC Legacy", 8, "sc"),
          ps: new ke("ps", "PlayStation", 3, "np", "ps"),
          ps3: new ke("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new ke("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new ke("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new ke("xbox", "Xbox", 4, "xbl"),
          xbox360: new ke("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new ke("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new ke("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new ke("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new ke("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new ke("applestore", "App Store", 102, "applestore"),
          googleplay: new ke("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new ke("app_store", "App Store", 102, "applestore"),
          googlePlay: new ke("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new ke("pcalt", "PC Enhanced", 22, "sc")
        }),
        xe = Object.freeze(Object.values(ye));

      function Se(e) {
        if (!e) return;
        if (e instanceof ke) return e;
        const t = e.toString().toLowerCase();
        return xe.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var Ee = n(6306);
      const Ce = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Pe = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            r = o?.substring(n.length, o.length);
          return r
        },
        Te = (e, t) => {
          e && void 0 !== t && (0, Ee.canStoreCookie)(e) && Pe(e) !== t && (document.cookie = `${e}=${t}; domain=${Ce()}; path=/;`)
        };
      var Le = n(8613);
      const Me = async ({
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
      }, Re = e => e.keys().forEach(e), je = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], Ae = (e = !0) => je.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, Ue = e => {
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
      }, $e = () => [ye.xbox360.name, ye.xboxone.name, ye.ps3.name, ye.ps4.name, ye.pc.name], Be = () => [ye.xboxsx.name, ye.ps5.name, ye.pcalt.name], Oe = e => Be().includes(e), Ie = e => {
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
      var ze = n(9864),
        _e = n.n(ze);
      const qe = (0, n(9867).A)(),
        De = qe?.id,
        He = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Fe = e => {
          const t = {
            ...e,
            environment: De,
            display_type: He
          };
          _e().dataLayer({
            dataLayer: t
          })
        },
        Ne = e => t => ((e, t) => (0, L.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Fe(e)
          }
        }))(e, t),
        Ge = (e, t = 250) => n => ((e, t, n) => {
          const [o, r] = (0, M.useState)(t), a = e => {
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
          return (0, M.useEffect)(() => {
            const e = c().debounce(() => {
              r(a(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, L.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Ve = n(445);
      const Xe = (0, I.UT)(document.documentElement.lang),
        Qe = () => (0, R.q)(Xe),
        We = Ve.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Je = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = Qe(),
              {
                data: n
              } = se(We, {
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
        Ye = y(),
        Ke = () => Ye,
        Ze = e => {
          const [t, n] = (0, M.useState)(null), [o, r] = (0, M.useState)(null), [a, s] = (0, M.useState)({});
          return (0, M.useLayoutEffect)(() => {
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
      var et = n(2562);
      const tt = () => {
          const {
            search: e
          } = (0, et.useLocation)();
          return new URLSearchParams(e)
        },
        nt = e => {
          const t = (0, M.useRef)();
          return (0, M.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        },
        ot = (e, {
          autoFetch: t = !0,
          fetchOptions: n = {},
          query: o = null,
          requireBearerToken: r = !0,
          useCache: a = !0
        }) => {
          const s = Q(),
            [i, c] = (0, M.useState)(null),
            [d, l] = (0, M.useState)(!1),
            [u, h] = (0, M.useState)(null),
            [m, p] = (0, M.useState)(!1),
            g = (0, M.useCallback)(async (t = {}, i = null) => {
              try {
                const {
                  fetchOptions: d = {}
                } = t;
                h(null), c(null), l(!0);
                const u = await v(i ?? e, {
                  pingBearer: s,
                  fetchOptions: n,
                  finalFetchOptions: d,
                  query: o,
                  requireBearerToken: r,
                  useCache: a
                });
                return u?.status || h(JSON.stringify(u?.error)), c(u), l(!1), u
              } catch (e) {
                h(String(e)), l(!1)
              } finally {
                p(!0)
              }
              return null
            }, [e, n, o]);
          return (0, M.useEffect)(() => {
            null === i && null === u && !d && t && g()
          }, [t, i, u, d, g]), {
            data: i,
            error: u,
            loading: d,
            fetch: g,
            resolved: m
          }
        },
        rt = "__RS_CUSTOM_EVENTS__",
        at = e => `rsCustomEvent:${e}`;
      window[rt] || (window[rt] = {});
      const st = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = at(e),
              o = new CustomEvent(n, {
                detail: t
              });
            window[rt][n] || (window[rt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[rt][n].eventQueue.push(o), window[rt][n].subscribers.forEach(e => {
              e(o.detail)
            })
          };
          return (0, M.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        it = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, M.useEffect)(() => {
            const n = at(e);
            return window[rt][n] || (window[rt][n] = {
              eventQueue: [],
              subscribers: []
            }), window[rt][n].subscribers.push(t), window[rt][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[rt][n].subscribers = window[rt][n].subscribers.filter(e => e !== t), 0 === window[rt][n].subscribers.length && delete window[rt][n]
            }
          }, [e, t]), (0, M.useMemo)(() => ({}), [])
        },
        ct = T({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, I.UT)(!1)
        }),
        dt = e => ct(e),
        lt = C({
          context: (0, M.createContext)(null),
          key: "scrollContext"
        }),
        ut = () => (0, M.useContext)(lt),
        ht = ({
          children: e
        }) => {
          const [t, n] = (0, M.useState)(window.pageYOffset), [o, r] = (0, M.useState)(null), [a, s] = (0, M.useState)(!1), i = (0, R.q)(ct);
          let c;
          const d = () => {
            s(!0), clearTimeout(c), c = setTimeout(() => {
              s(!1)
            }, 2e3)
          };
          return (0, M.useEffect)(() => {
            let e;
            const t = () => {
              if (i) return void r(!1);
              const t = Math.max(0, window.pageYOffset);
              n(t), a || r(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }, [a, i]), (0, M.useMemo)(() => (0, L.jsx)(lt.Provider, {
            value: {
              freezeUserShouldSeeMore: i,
              pageYOffset: t,
              pauseUserShouldSeeMore: d,
              setFreezeUserShouldSeeMore: dt,
              userShouldSeeMore: o
            },
            children: e
          }), [i, t, d, o])
        },
        mt = e => {
          const {
            signup: t,
            login: n
          } = m(), o = Qe(), r = p(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        },
        pt = {
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
        gt = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = pt;
          return Object.keys(pt).map(t => {
            const {
              min: o,
              max: r
            } = pt[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
              min: o,
              max: r
            }
          }), {
            isMobile: e < pt.sm.min,
            isTablet: e < pt.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        wt = C({
          context: (0, M.createContext)(gt()),
          key: "resizeContext"
        }),
        {
          Consumer: ft
        } = wt,
        vt = (0, I.UT)(gt()),
        bt = ({
          children: e
        }) => {
          const t = (0, R.q)(vt);
          return (0, M.useEffect)(() => {
            const e = () => {
              vt(gt())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, L.jsx)(wt.Provider, {
            value: t,
            children: e
          })
        },
        kt = () => (0, M.useContext)(wt),
        yt = () => {
          const [e, t] = (0, M.useState)();
          return (0, M.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        xt = () => {
          const [e, t] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
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
      const St = e => {
          const [t, n] = (0, M.useState)(!1), o = (0, M.useRef)(null);
          return (0, M.useEffect)(() => {
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
        Et = (e = 0) => {
          const t = (0, M.useRef)(null),
            [n, o] = (0, M.useState)(!1),
            r = () => {
              const n = t.current;
              if (!n) return;
              const r = n.getBoundingClientRect(),
                a = window.innerHeight || document.documentElement.clientHeight,
                s = (Math.min(r.bottom, a) - Math.max(r.top, 0)) / r.height;
              o(s > e)
            };
          return (0, M.useEffect)(() => {
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
        },
        Ct = () => {
          const {
            formatRelativeTime: e
          } = (0, Le.tz)();
          return {
            formatRelativeRoundedTime: t => {
              const n = "number" == typeof t ? t : t.getTime(),
                o = Math.round((n - Date.now()) / 1e3),
                r = Math.abs(o),
                {
                  unit: a,
                  divisor: s
                } = [{
                  unit: "second",
                  divisor: 1,
                  nextCutoff: 60
                }, {
                  unit: "minute",
                  divisor: 60,
                  nextCutoff: 3600
                }, {
                  unit: "hour",
                  divisor: 3600,
                  nextCutoff: 86400
                }, {
                  unit: "day",
                  divisor: 86400,
                  nextCutoff: 604800
                }, {
                  unit: "week",
                  divisor: 604800,
                  nextCutoff: 2592e3
                }, {
                  unit: "month",
                  divisor: 2592e3,
                  nextCutoff: 31536e3
                }].find(e => r < e.nextCutoff) || {
                  unit: "year",
                  divisor: 31536e3
                },
                i = Math.round(o / s);
              return e(i, a, {
                numeric: "always"
              })
            }
          }
        };
      var Pt = n(6591),
        Tt = n(701);
      const Lt = C({
          context: (0, M.createContext)({}),
          key: "gtmDatalayer"
        }),
        Mt = () => (0, M.useContext)(Lt),
        Rt = ({
          children: e,
          ...t
        }) => {
          const n = Mt() ?? {},
            o = (0, M.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, L.jsx)(Lt.Provider, {
            value: o,
            children: e
          })
        },
        jt = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, et.useLocation)();
          return (0, M.useEffect)(() => {
            Fe({
              event: "trackPageview"
            })
          }, [n]), (0, L.jsx)(e, {
            ...t
          })
        })(e, t),
        At = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          _e().initialize(t)
        },
        Ut = "rockstar-games-web";
      let $t;
      try {
        const e = D.A.get(Ut) ?? "";
        $t = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $t = {}
      }
      const Bt = (0, I.UT)($t),
        Ot = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Bt() ?? {}
          };
          return n[e] = t, null === t && delete n[e], D.A.set(Ut, JSON.stringify(n), {
            expires: 30,
            domain: Ce(),
            path: "/"
          }), Bt(n), n
        },
        It = () => ({
          webSettings: (0, R.q)(Bt),
          webSettingsReactive: Bt,
          mutateWebSettings: Ot
        })
    }
  }
]);