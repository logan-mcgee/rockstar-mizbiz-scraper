try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2ac4dc4-f0cb-470e-a7a3-31808ff6d567", e._sentryDebugIdIdentifier = "sentry-dbid-a2ac4dc4-f0cb-470e-a7a3-31808ff6d567")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9164], {
    12914: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    45440: (e, t, n) => {
      n.d(t, {
        OD: () => s,
        lv: () => i,
        wC: () => a,
        PE: () => x,
        rB: () => d,
        tC: () => f,
        yh: () => v,
        Ap: () => p,
        Xs: () => k,
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
        l = Object.freeze(Object.values(i));

      function d(e) {
        if (!e) return;
        if (e instanceof s) return e;
        const t = e.toString().toLowerCase();
        return l.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
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
      }], v = (e = !0) => y.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, x = e => {
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
      }, k = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name], S = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name], P = e => S().includes(e), C = e => {
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
    66783: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => C.R,
        ApolloProvider: () => A.X,
        DataLayerProvider: () => he,
        InMemoryCache: () => P.D,
        Platform: () => W.OD,
        Platforms: () => W.lv,
        ReactiveStateProvider: () => x,
        ResizeProvider: () => Ae.uU,
        RockstarGraphProvider: () => F,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => de.N2,
        coreScApiFetch: () => o.A,
        cx: () => a,
        detectIfWeShouldAnchorSomewhere: () => W.wC,
        downloadFile: () => W.PE,
        findPlatform: () => W.rB,
        generateTpaLink: () => W.tC,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => W.yh,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => W.Ap,
        getGen8Consoles: () => W.Xs,
        getGen9Consoles: () => W.kx,
        getLanguageLabel: () => W.rJ,
        getUriForGraphEnv: () => l,
        gql: () => ae.J1,
        gtmInit: () => be,
        importAll: () => W.pT,
        isGen9Platform: () => W.lV,
        makeVar: () => S.UT,
        mutateWebSettings: () => Pe,
        newswirePost: () => J,
        oneTrustInit: () => q,
        safeStyles: () => u,
        scrollToElement: () => W.PA,
        setContextItem: () => p.A,
        setCookieValue: () => W.My,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => Q,
        toScLocaleString: () => me.t,
        track: () => te,
        useApolloClient: () => B,
        useBase: () => le.RK,
        useBodyScrollable: () => X,
        useDataLayer: () => ge,
        useHasReduceMotionPreference: () => le.vx,
        useHasSaveDataPreference: () => le.sb,
        useLazyQuery: () => ce._,
        useLocale: () => le.Ym,
        useMutateState: () => v,
        useMutation: () => ue.n,
        useNewswirePost: () => le.CA,
        usePreloadImg: () => le.OG,
        usePrevious: () => le.ZC,
        useQuery: () => N,
        useQueryParams: () => le.sq,
        useReactiveVar: () => f.q,
        useRelativeTime: () => le.Vq,
        useRockstarEventDispatcher: () => le.OH,
        useRockstarEventSubscriber: () => le.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => Ce,
        useScApi: () => le.Cb,
        useScAuthLinks: () => le.N6,
        useScroll: () => de.Ll,
        useScrollTracking: () => le.GA,
        useScrollVisibility: () => le.JE,
        useState: () => b,
        useWindowResize: () => Ae.G4,
        webSettingsReactive: () => Se,
        withAutoRouteTracking: () => we,
        withGtmTracking: () => ne,
        withMediaBasedProps: () => oe,
        withReactiveState: () => k,
        withRockstarGraph: () => G,
        withTranslations: () => ie
      });
      var o = n(60099);
      const a = (...e) => e.filter(Boolean).join(" "),
        r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = n(60309),
        i = n(45547);
      const l = e => {
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
        c = n.n(d);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = n(9482),
        g = n(52690),
        h = n(42295),
        m = n(71127),
        f = n(93452);
      const w = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, m.useContext)(w),
        y = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, m.useContext)(y),
        x = ({
          children: e,
          state: t
        }) => {
          (0, f.q)(t);
          const n = (0, m.useCallback)(e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }, [t]);
          return (0, h.jsx)(w.Provider, {
            value: t(),
            children: (0, h.jsx)(y.Provider, {
              value: n,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(n) {
          return (0, h.jsx)(x, {
            state: t,
            children: (0, h.jsx)(e, {
              ...n
            })
          })
        };
      var S = n(21823),
        P = n(19757),
        C = n(75102),
        A = n(88718),
        E = n(20772),
        L = n(6347);
      var T = n(83605),
        R = n(61162),
        j = n.n(R);
      var I = n(62944),
        O = n(42887);
      const M = (0, I.e)({
        sha256: O.sc
      });
      var _ = n(46277);
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
            } = (0, _.IT)(e, n);
          return (0, m.useEffect)(() => {
            if (o && n.setTitleDataPath) {
              const e = c().get(o, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [o]), (0, m.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, m.useEffect)(() => {
            if (n.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: o,
            ...s
          }
        },
        B = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? l(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [a] = (0, m.useState)(new P.D({
              typePolicies: t
            })),
            r = M.concat((({
              token: e
            }) => (0, L.o)((t, {
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
            }).concat((e => (0, T.$)({
              ...e,
              fetch: j()
            }))(o)));
          return new C.R({
            cache: a,
            link: r
          })
        },
        z = (0, m.createContext)(U),
        F = ({
          children: e,
          graphOptions: t,
          typePolicies: n = {}
        }) => {
          const o = B({
            graphOptions: t,
            typePolicies: n
          });
          return (0, h.jsx)(E.ec, {
            token: t?.token,
            children: (0, h.jsx)(A.X, {
              client: o,
              children: (0, h.jsx)(z.Provider, {
                value: U,
                children: e
              })
            })
          })
        },
        N = (e, t) => (0, m.useContext)(z)(e, t),
        G = (e, {
          env: t = "prod"
        }) => {
          const n = (0, S.UT)("");
          return function(o) {
            return (0, h.jsx)(F, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: n
              },
              children: (0, h.jsx)(e, {
                ...o
              })
            })
          }
        },
        $ = (0, S.UT)({}),
        V = "data-disallow-body-scroll",
        X = e => {
          const t = (0, f.q)($),
            n = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            n ? document.documentElement.setAttribute(V, "true") : document.documentElement.removeAttribute(V)
          }, [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => $(e))({
              ...t,
              [e]: n
            })
          }
        },
        q = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var J = n(89656);
      const Q = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var W = n(45440),
        H = n(89864),
        K = n.n(H);
      const Y = (0, n(79867).A)(),
        Z = Y?.id,
        ee = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        te = e => {
          const t = {
            ...e,
            environment: Z,
            display_type: ee
          };
          K().dataLayer({
            dataLayer: t
          })
        },
        ne = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            te(e)
          }
        }))(e, t),
        oe = (e, t = 250) => n => ((e, t, n) => {
          const [o, a] = (0, m.useState)(t), r = e => {
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
          return (0, m.useEffect)(() => {
            const e = c().debounce(() => {
              a(r(t))
            }, n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var ae = n(40445),
        re = n(26675);
      const se = ae.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ie = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, re.A)(),
              {
                data: n
              } = N(se, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find(t => t.key === e)?.value ?? e : null
          })(n);
          return o ? (0, h.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var le = n(65085),
        de = n(95342),
        ce = n(66591),
        ue = n(80701);
      const pe = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        ge = () => (0, m.useContext)(pe),
        he = ({
          children: e,
          ...t
        }) => {
          const n = ge() ?? {},
            o = (0, m.useMemo)(() => ({
              ...n,
              ...t
            }), [n, t]);
          return (0, h.jsx)(pe.Provider, {
            value: o,
            children: e
          })
        };
      var me = n(17954),
        fe = n(10181);
      const we = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, fe.useLocation)();
          return (0, m.useEffect)(() => {
            te({
              event: "trackPageview"
            })
          }, [n]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        be = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          K().initialize(t)
        };
      var ye = n(37980),
        ve = n(12914);
      const xe = "rockstar-games-web";
      let ke;
      try {
        const e = ye.A.get(xe) ?? "";
        ke = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        ke = {}
      }
      const Se = (0, S.UT)(ke),
        Pe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...Se() ?? {}
          };
          return n[e] = t, null === t && delete n[e], ye.A.set(xe, JSON.stringify(n), {
            expires: 30,
            domain: (0, ve.F)(),
            path: "/"
          }), Se(n), n
        },
        Ce = () => ({
          webSettings: (0, f.q)(Se),
          webSettingsReactive: Se,
          mutateWebSettings: Pe
        });
      var Ae = n(50437)
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => d,
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
        l = [{
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
        d = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = l.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), r = l[o >= 0 ? o : 0], i = l.find(e => e.id === r.fallbackEnvironment);
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