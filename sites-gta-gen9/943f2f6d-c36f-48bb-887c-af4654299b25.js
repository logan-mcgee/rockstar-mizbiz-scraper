try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "943f2f6d-c36f-48bb-887c-af4654299b25", e._sentryDebugIdIdentifier = "sentry-dbid-943f2f6d-c36f-48bb-887c-af4654299b25")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [811, 8844], {
    12914: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    43342: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => ge,
        InMemoryCache: () => S.D,
        Platform: () => Q.OD,
        Platforms: () => Q.lv,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => Ce.uU,
        RockstarGraphProvider: () => z,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => de.N2,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => Q.wC,
        downloadFile: () => Q.PE,
        findPlatform: () => Q.rB,
        generateTpaLink: () => Q.tC,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => Q.yh,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => Q.Ap,
        getGen8Consoles: () => Q.Xs,
        getGen9Consoles: () => Q.kx,
        getLanguageLabel: () => Q.rJ,
        getUriForGraphEnv: () => i,
        gql: () => oe.J1,
        gtmInit: () => we,
        importAll: () => Q.pT,
        isGen9Platform: () => Q.lV,
        makeVar: () => x.UT,
        mutateWebSettings: () => Se,
        newswirePost: () => q,
        oneTrustInit: () => X,
        safeStyles: () => c,
        scrollToElement: () => Q.PA,
        setContextItem: () => u.A,
        setCookieValue: () => Q.My,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => J,
        toScLocaleString: () => he.t,
        track: () => ee,
        useApolloClient: () => _,
        useBase: () => ie.RK,
        useBodyScrollable: () => V,
        useDataLayer: () => pe,
        useHasReduceMotionPreference: () => ie.vx,
        useHasSaveDataPreference: () => ie.sb,
        useLazyQuery: () => le._,
        useLocale: () => ie.Ym,
        useMutateState: () => y,
        useMutation: () => ce.n,
        useNewswirePost: () => ie.CA,
        usePreloadImg: () => ie.OG,
        usePrevious: () => ie.ZC,
        useQuery: () => F,
        useQueryParams: () => ie.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => ie.OH,
        useRockstarEventSubscriber: () => ie.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => Pe,
        useScApi: () => ie.Cb,
        useScAuthLinks: () => ie.N6,
        useScroll: () => de.Ll,
        useScrollTracking: () => ie.GA,
        useScrollVisibility: () => ie.JE,
        useState: () => w,
        useWindowResize: () => Ce.G4,
        webSettingsReactive: () => xe,
        withAutoRouteTracking: () => fe,
        withGtmTracking: () => te,
        withMediaBasedProps: () => ne,
        withReactiveState: () => k,
        withRockstarGraph: () => N,
        withTranslations: () => se
      });
      var o = n(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = n(60309),
        s = n(45547);
      const i = e => {
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
      };
      var d = n(10336),
        l = n.n(d);
      const c = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(9482),
        p = n(52690),
        g = n(42295),
        h = n(71127),
        m = n(93452);
      const f = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, h.useContext)(f),
        b = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, h.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, m.q)(t);
          const n = (0, h.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, g.jsx)(f.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...n
            })
          })
        };
      var x = n(21823),
        S = n(19757),
        P = n(21643),
        C = n(88718),
        A = n(20772),
        E = n(6347);
      var L = n(83605),
        T = n(61162),
        R = n.n(T);
      var j = n(62944),
        I = n(42887);
      const O = (0, j.e)({
        sha256: I.sc
      });
      var M = n(46277);
      const D = document.documentElement.lang,
        U = (e, t) => {
          const n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: D,
                ...t?.variables
              }
            },
            {
              data: o,
              loading: a,
              error: r,
              ...s
            } = (0, M.IT)(e, n);
          return (0, h.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = l().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, h.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, h.useEffect)(() => {
            if (n.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: o,
            ...s
          }
        },
        _ = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? i(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [a] = (0, h.useState)(new S.D({
              typePolicies: t
            })),
            r = O.concat((({
              token: e
            }) => (0, E.o)((t, {
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
            }).concat((e => (0, L.$)({
              ...e,
              fetch: R()
            }))(o)));
          return new P.R({
            cache: a,
            link: r
          })
        },
        B = (0, h.createContext)(U),
        z = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = _({
            graphOptions: t,
            typePolicies: n
          });
          return (0, g.jsx)(A.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: o,
              children: (0, g.jsx)(B.Provider, {
                value: U,
                children: e
              })
            })
          })
        },
        F = (e, t) => (0, h.useContext)(B)(e, t),
        N = (e, {
          env: t = "prod"
        }) => {
          const n = (0, x.UT)("");
          return function(o) {
            return (0, g.jsx)(z, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, g.jsx)(e, {
                ...o
              })
            })
          }
        },
        G = (0, x.UT)({}),
        $ = "data-disallow-body-scroll",
        V = e => {
          const t = (0, m.q)(G),
            n = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            n ? document.documentElement.setAttribute($, "true") : document.documentElement.removeAttribute($)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => G(e))({
              ...t,
              [e]: n
            })
          }
        },
        X = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var q = n(89656);
      const J = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var Q = n(45440),
        W = n(89864),
        H = n.n(W);
      const K = (0, n(79867).A)(),
        Y = K?.id,
        Z = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        ee = e => {
          const t = {
            ...e,
            environment: Y,
            display_type: Z
          };
          H().dataLayer({
            dataLayer: t
          })
        },
        te = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            ee(e)
          }
        }))(e, t),
        ne = (e, t = 250) => n => ((e, t, n) => {
          const [o, a] = (0, h.useState)(t), r = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map(e => r(e));
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
          return (0, h.useEffect)(() => {
            const e = l().debounce(() => {
              a(r(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, g.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var oe = n(69964),
        ae = n(26675);
      const re = oe.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        se = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, ae.A)(),
              {
                data: n
              } = F(re, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, g.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var ie = n(56088),
        de = n(95342),
        le = n(66591),
        ce = n(80701);
      const ue = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        pe = () => (0, h.useContext)(ue),
        ge = ({
          children: e,
          ...t
        }) => {
          const n = pe() ?? {},
            o = (0, h.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, g.jsx)(ue.Provider, {
            value: o,
            children: e
          })
        };
      var he = n(95573),
        me = n(10181);
      const fe = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, me.useLocation)();
          return (0, h.useEffect)(() => {
            ee({
              event: "trackPageview"
            })
          }, [n]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        we = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          H().initialize(t)
        };
      var be = n(37980),
        ye = n(12914);
      const ve = "rockstar-games-web";
      let ke;
      try {
        const e = be.A.get(ve) ?? "";
        ke = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        ke = {}
      }
      const xe = (0, x.UT)(ke),
        Se = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...xe() ?? {}
          };
          return n[e] = t, null === t && delete n[e], be.A.set(ve, JSON.stringify(n), {
            expires: 30,
            domain: (0, ye.F)(),
            path: "/"
          }), xe(n), n
        },
        Pe = () => ({
          webSettings: (0, m.q)(xe),
          webSettingsReactive: xe,
          mutateWebSettings: Se
        });
      var Ce = n(50437)
    },
    45440: (e, t, n) => {
      n.d(t, {
        OD: () => s,
        lv: () => i,
        wC: () => a,
        PE: () => k,
        rB: () => l,
        tC: () => f,
        yh: () => v,
        Ap: () => p,
        Xs: () => x,
        kx: () => S,
        rJ: () => C,
        pT: () => w,
        lV: () => P,
        PA: () => o,
        My: () => g,
        _e: () => b
      }), n(42295), n(10336);
      const o = ({
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
        a = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (o({
            element: n
          }), r(n))
        },
        r = e => {
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
      class s {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, a = null, r = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = a, this.alias = r
        }
      }
      const i = Object.freeze({
          pc: new s("pc", "PC Legacy", 8, "sc"),
          ps: new s("ps", "PlayStation", 3, "np", "ps"),
          ps3: new s("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new s("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new s("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new s("xbox", "Xbox", 4, "xbl"),
          xbox360: new s("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new s("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new s("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new s("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new s("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new s("applestore", "App Store", 102, "applestore"),
          googleplay: new s("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new s("app_store", "App Store", 102, "applestore"),
          googlePlay: new s("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new s("pcalt", "PC Enhanced", 22, "sc")
        }),
        d = Object.freeze(Object.values(i));

      function l(e) {
        if (!e) return;
        if (e instanceof s) return e;
        const t = e.toString().toLowerCase();
        return d.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var c = n(6306),
        u = n(12914);
      const p = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find(e => e.startsWith(n)),
            a = o?.substring(n.length, o.length);
          return a
        },
        g = (e, t) => {
          e && void 0 !== t && (0, c.canStoreCookie)(e) && p(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,u.F)()}; path=/;`)
        };
      var h = n(56990),
        m = n(45547);
      const f = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, h.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, m.A)(), s = await n(), i = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return i.searchParams.append("cid", r), i.searchParams.append("lang", o), i.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && i.searchParams.append("accessToken", s.bearerToken), i
      }, w = e => e.keys().forEach(e), b = e => e.replace(/(<([^>]+)>)/gi, ""), y = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], v = (e = !0) => y.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, k = e => {
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
      }, x = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name], S = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name], P = e => S().includes(e), C = e => {
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
      }
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => l,
        C: () => i
      });
      var o = n(56265),
        a = n.n(o),
        r = n(41972),
        s = n.n(r);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        d = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        l = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = d.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), r = d[o >= 0 ? o : 0], i = d.find(e => e.id === r.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(a()({}, i, {
            currentSite: e
          }, r), "fallbackEnvironment")
        }
    }
  }
]);