try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e5167c19-3204-4f43-8eaf-cd61d786f142", e._sentryDebugIdIdentifier = "sentry-dbid-e5167c19-3204-4f43-8eaf-cd61d786f142")
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
  [6321], {
    12914: (e, t, o) => {
      o.d(t, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    45440: (e, t, o) => {
      o.d(t, {
        OD: () => s,
        lv: () => i,
        wC: () => a,
        PE: () => x,
        rB: () => d,
        tC: () => w,
        yh: () => v,
        Ap: () => p,
        Xs: () => k,
        kx: () => S,
        rJ: () => C,
        pT: () => f,
        lV: () => P,
        PA: () => n,
        My: () => h,
        _e: () => b
      }), o(42295), o(16188);
      const n = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            o = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        a = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (n({
            element: o
          }), r(o))
        },
        r = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const o = e?.querySelectorAll(t.join(", "));
            if (o?.length) {
              const e = [...o].find(e => !e?.hasAttribute("disabled"));
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
        constructor(e, t, o, n, a = null, r = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = a, this.alias = r
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
      var c = o(6306),
        u = o(12914);
      const p = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        h = (e, t) => {
          e && void 0 !== t && (0, c.canStoreCookie)(e) && p(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,u.F)()}; path=/;`)
        };
      var g = o(81788),
        m = o(45547);
      const w = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, g.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, m.A)(), s = await o(), i = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return i.searchParams.append("cid", r), i.searchParams.append("lang", n), i.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && i.searchParams.append("accessToken", s.bearerToken), i
      }, f = e => e.keys().forEach(e), b = e => e.replace(/(<([^>]+)>)/gi, ""), y = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], v = (e = !0) => y.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, x = e => {
        e.preventDefault();
        const t = e.currentTarget.href,
          o = (e => {
            const t = new URL(e).pathname.split("/"),
              o = t[t.length - 1];
            return decodeURIComponent(o)
          })(t);
        fetch(t, {
          method: "GET",
          headers: {}
        }).then(e => e.arrayBuffer()).then(e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            n = document.createElement("a");
          n.href = t, n.setAttribute("download", o), document.body.appendChild(n), n.click(), document.body.removeChild(n)
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
    58702: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => ie,
        GraphOperationsProvider: () => A._y,
        InMemoryCache: () => S.D,
        Platform: () => q.OD,
        Platforms: () => q.lv,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => ye.uU,
        RockstarGraphProvider: () => D,
        RockstarTokenProvider: () => E.ec,
        ScrollProvider: () => ae.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => q.wC,
        downloadFile: () => q.PE,
        findPlatform: () => q.rB,
        generateTpaLink: () => q.tC,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => q.yh,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => q.Ap,
        getGen8Consoles: () => q.Xs,
        getGen9Consoles: () => q.kx,
        getLanguageLabel: () => q.rJ,
        getUriForGraphEnv: () => i,
        gql: () => Z.J1,
        gtmInit: () => ue,
        importAll: () => q.pT,
        isGen9Platform: () => q.lV,
        makeVar: () => k.UT,
        mutateWebSettings: () => fe,
        newswirePost: () => $,
        oneTrustInit: () => G,
        safeStyles: () => c,
        scrollToElement: () => q.PA,
        setContextItem: () => u.A,
        setCookieValue: () => q.My,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => z,
        toScLocaleString: () => le.t,
        track: () => Q,
        useApolloClient: () => M,
        useBase: () => ne.RK,
        useBodyScrollable: () => N,
        useDataLayer: () => se,
        useHasReduceMotionPreference: () => ne.vx,
        useHasSaveDataPreference: () => ne.sb,
        useLocale: () => ne.Ym,
        useMutateState: () => y,
        useMutation: () => A.n_,
        useNewswirePost: () => ne.CA,
        usePreloadImg: () => ne.OG,
        usePrevious: () => ne.ZC,
        useQuery: () => A.IT,
        useQueryParams: () => ne.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => ne.OH,
        useRockstarEventSubscriber: () => ne.zP,
        useRockstarToken: () => E.e9,
        useRockstarTokenPing: () => E.Es,
        useRockstarTokenReactive: () => E.bD,
        useRockstarWebSettings: () => be,
        useScApi: () => ne.Cb,
        useScAuthLinks: () => ne.N6,
        useScroll: () => ae.Ll,
        useScrollTracking: () => ne.GA,
        useScrollVisibility: () => ne.JE,
        useState: () => f,
        useWindowResize: () => ye.G4,
        webSettingsReactive: () => we,
        withAutoRouteTracking: () => ce,
        withGtmTracking: () => Y,
        withMediaBasedProps: () => K,
        withReactiveState: () => x,
        withRockstarGraph: () => U,
        withTranslations: () => oe
      });
      var n = o(60099);
      const a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var r = o(60309),
        s = o(45547);
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
      var l = o(16188),
        d = o.n(l);
      const c = e => {
        const t = d().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        h = o(42295),
        g = o(62229),
        m = o(93452);
      const w = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextGet"
        }),
        f = () => (0, g.useContext)(w),
        b = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, g.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, m.q)(t);
          const o = (0, g.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, h.jsx)(w.Provider, {
            value: t(),
            children: (0, h.jsx)(b.Provider, {
              value: o,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(o) {
          return (0, h.jsx)(v, {
            state: t,
            children: (0, h.jsx)(e, {
              ...o
            })
          })
        };
      var k = o(21823),
        S = o(19757),
        P = o(75102),
        C = o(88718),
        A = o(96566),
        E = o(20772),
        T = o(6347);
      var L = o(83605),
        R = o(61162),
        _ = o.n(R);
      var j = o(62944),
        I = o(42887);
      const O = (0, j.e)({
          sha256: I.sc
        }),
        M = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? i(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, g.useState)(new S.D({
              typePolicies: t
            })),
            r = O.concat((({
              token: e
            }) => (0, T.o)((t, {
              headers: o
            }) => {
              const n = e?.() ?? null;
              return n ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${n}`
                }
              } : null
            }))({
              token: e?.token
            }).concat((e => (0, L.$)({
              ...e,
              fetch: _()
            }))(n)));
          return new P.R({
            cache: a,
            link: r
          })
        },
        D = ({
          children: e,
          graphOptions: t,
          typePolicies: o
        }) => {
          const n = M({
            graphOptions: t,
            typePolicies: o ?? {}
          });
          return (0, h.jsx)(E.ec, {
            token: t?.token,
            children: (0, h.jsx)(C.X, {
              client: n,
              children: (0, h.jsx)(A._y, {
                children: e
              })
            })
          })
        },
        U = (e, {
          env: t = "prod"
        }) => {
          const o = (0, k.UT)("");
          return function(n) {
            return (0, h.jsx)(D, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, h.jsx)(e, {
                ...n
              })
            })
          }
        },
        B = (0, k.UT)({}),
        F = "data-disallow-body-scroll",
        N = e => {
          const t = (0, m.q)(B),
            o = Object.values(t).some(e => !!e);
          return (0, g.useEffect)(() => {
            o ? document.documentElement.setAttribute(F, "true") : document.documentElement.removeAttribute(F)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => B(e))({
              ...t,
              [e]: o
            })
          }
        },
        G = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var $ = o(89656);
      const z = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var q = o(45440),
        V = o(89864),
        X = o.n(V);
      const J = (0, o(79867).A)(),
        W = J?.id,
        H = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Q = e => {
          const t = {
            ...e,
            environment: W,
            display_type: H
          };
          X().dataLayer({
            dataLayer: t
          })
        },
        Y = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Q(e)
          }
        }))(e, t),
        K = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, g.useState)(t), r = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => r(e));
              t = {
                ...t,
                items: e
              }
            }
            const n = t?.mediaQueryList;
            return n?.length ? (n.filter(e => window.matchMedia(e.mediaQueryString).matches).forEach(e => {
              t = {
                ...t,
                ...e
              }
            }), t) : t
          };
          return (0, g.useEffect)(() => {
            const e = d().debounce(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Z = o(40445),
        ee = o(26675);
      const te = Z.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        oe = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, ee.A)(),
              {
                data: o
              } = (0, A.IT)(te, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, h.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var ne = o(56088),
        ae = o(95342);
      const re = (0, u.A)({
          context: (0, g.createContext)({}),
          key: "gtmDatalayer"
        }),
        se = () => (0, g.useContext)(re),
        ie = ({
          children: e,
          ...t
        }) => {
          const o = se() ?? {},
            n = (0, g.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, h.jsx)(re.Provider, {
            value: n,
            children: e
          })
        };
      var le = o(17954),
        de = o(9623);
      const ce = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, de.useLocation)();
          return (0, g.useEffect)(() => {
            Q({
              event: "trackPageview"
            })
          }, [o]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        ue = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          X().initialize(t)
        };
      var pe = o(37980),
        he = o(12914);
      const ge = "rockstar-games-web";
      let me;
      try {
        const e = pe.A.get(ge) ?? "";
        me = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        me = {}
      }
      const we = (0, k.UT)(me),
        fe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...we() ?? {}
          };
          return o[e] = t, null === t && delete o[e], pe.A.set(ge, JSON.stringify(o), {
            expires: 30,
            domain: (0, he.F)(),
            path: "/"
          }), we(o), o
        },
        be = () => ({
          webSettings: (0, m.q)(we),
          webSettingsReactive: we,
          mutateWebSettings: fe
        });
      var ye = o(50437)
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => r,
        C: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        a = [{
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
        r = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = a.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), r = a[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    96566: (e, t, o) => {
      o.d(t, {
        _y: () => y,
        _l: () => l._,
        n_: () => x,
        IT: () => v
      });
      var n = o(42295),
        a = o(62229),
        r = o(19757),
        s = o(75102),
        i = o(80701),
        l = o(66591),
        d = o(46277),
        c = o(16188),
        u = o.n(c),
        p = o(56088);
      const h = (e, t) => {
          const o = (0, p.Ym)(),
            n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: o,
                ...t?.variables
              }
            },
            {
              data: r,
              loading: s,
              error: i,
              ...l
            } = (0, d.IT)(e, n);
          return (0, a.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = u().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, a.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [s]), (0, a.useEffect)(() => {
            if (n.autoSetError && i) throw new Error(String(i))
          }, [i]), {
            loading: s,
            error: i,
            data: r,
            ...l
          }
        },
        g = (0, a.createContext)(() => ({
          data: null
        })),
        m = new Promise(e => {
          e()
        }),
        w = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new r.D)
        },
        f = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.R(w))
        }],
        b = (0, a.createContext)(() => f),
        y = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, n.jsx)(b.Provider, {
          value: i.n,
          children: (0, n.jsx)(g.Provider, {
            value: h,
            children: e
          })
        })),
        v = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(g)(e, t)),
        x = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(b)(e))
    }
  }
]);