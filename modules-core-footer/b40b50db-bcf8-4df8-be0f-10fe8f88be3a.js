try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b40b50db-bcf8-4df8-be0f-10fe8f88be3a", e._sentryDebugIdIdentifier = "sentry-dbid-b40b50db-bcf8-4df8-be0f-10fe8f88be3a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [9757], {
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
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = a.findIndex((t => Object.entries(t.sites).findIndex((([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0))) >= 0)), r = a[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    89757: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => _e,
        GraphOperationsProvider: () => U,
        InMemoryCache: () => S.D,
        Platform: () => ae,
        Platforms: () => re,
        ReactiveStateProvider: () => y,
        ResizeProvider: () => He.uU,
        RockstarGraphProvider: () => W,
        RockstarTokenProvider: () => B.ec,
        ScrollProvider: () => Me.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => oe,
        downloadFile: () => fe,
        findPlatform: () => ie,
        generateTpaLink: () => ge,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => we,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => ce,
        getGen8Consoles: () => be,
        getGen9Consoles: () => ve,
        getLanguageLabel: () => xe,
        getUriForGraphEnv: () => i,
        gql: () => Re.J1,
        gtmInit: () => $e,
        importAll: () => he,
        isGen9Platform: () => ye,
        makeVar: () => k.UT,
        mutateWebSettings: () => Ve,
        newswirePost: () => Z,
        oneTrustInit: () => K,
        safeStyles: () => c,
        scrollToElement: () => te,
        setContextItem: () => u.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => Be.t,
        track: () => Ee,
        useApolloClient: () => V,
        useBase: () => L.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => De,
        useHasReduceMotionPreference: () => L.vx,
        useHasSaveDataPreference: () => L.sb,
        useLocale: () => L.Ym,
        useMutateState: () => v,
        useMutation: () => _,
        useNewswirePost: () => L.CA,
        usePreloadImg: () => L.OG,
        usePrevious: () => L.ZC,
        useQuery: () => D,
        useQueryParams: () => L.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => L.OH,
        useRockstarEventSubscriber: () => L.zP,
        useRockstarToken: () => B.e9,
        useRockstarTokenPing: () => B.Es,
        useRockstarTokenReactive: () => B.bD,
        useRockstarWebSettings: () => We,
        useScApi: () => L.Cb,
        useScAuthLinks: () => L.N6,
        useScroll: () => Me.Ll,
        useScrollTracking: () => L.GA,
        useState: () => f,
        useWindowResize: () => He.G4,
        webSettingsReactive: () => Xe,
        withAutoRouteTracking: () => Ge,
        withGtmTracking: () => Le,
        withMediaBasedProps: () => Te,
        withReactiveState: () => x,
        withRockstarGraph: () => H,
        withTranslations: () => Oe
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
      var d = o(15076),
        l = o.n(d);
      const c = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        g = o(42295),
        h = o(71127),
        m = o(93452);
      const w = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        f = () => (0, h.useContext)(w),
        b = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, h.useContext)(b),
        y = ({
          children: e,
          state: t
        }) => {
          (0, m.q)(t);
          const o = (0, h.useCallback)((e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }), [t]);
          return (0, g.jsx)(w.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: o,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(o) {
          return (0, g.jsx)(y, {
            state: t,
            children: (0, g.jsx)(e, {
              ...o
            })
          })
        };
      var k = o(21823),
        S = o(19757),
        P = o(75102),
        C = o(88718),
        A = o(13585),
        E = o(46277),
        L = o(72148);
      const T = (e, t) => {
          const o = (0, L.Ym)(),
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
              data: a,
              loading: r,
              error: s,
              ...i
            } = (0, E.IT)(e, n);
          return (0, h.useEffect)((() => {
            if (a && n.setTitleDataPath) {
              const e = l().get(a, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [a]), (0, h.useEffect)((() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [r]), (0, h.useEffect)((() => {
            if (n.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: r,
            error: s,
            data: a,
            ...i
          }
        },
        R = (0, h.createContext)((() => ({
          data: null
        }))),
        j = new Promise((e => {
          e()
        })),
        I = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new S.D)
        },
        O = [() => j, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new P.R(I))
        }],
        M = (0, h.createContext)((() => O)),
        U = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, g.jsx)(M.Provider, {
          value: A.n,
          children: (0, g.jsx)(R.Provider, {
            value: T,
            children: e
          })
        })),
        D = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, h.useContext)(R)(e, t)),
        _ = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, h.useContext)(M)(e));
      var B = o(20772),
        N = o(6347);
      var G = o(83605),
        $ = o(61162),
        F = o.n($);
      var z = o(62944),
        q = o(42887);
      const X = (0, z.e)({
          sha256: q.sc
        }),
        V = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? i(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, h.useState)(new S.D({
              typePolicies: t
            })),
            r = X.concat((({
              token: e
            }) => (0, N.o)(((t, {
              headers: o
            }) => {
              const n = e?.() ?? null;
              return n ? {
                headers: {
                  ...o,
                  authorization: `Bearer ${n}`
                }
              } : null
            })))({
              token: e?.token
            }).concat((e => (0, G.$)({
              ...e,
              fetch: F()
            }))(n)));
          return new P.R({
            cache: a,
            link: r
          })
        },
        W = ({
          children: e,
          graphOptions: t,
          typePolicies: o
        }) => {
          const n = V({
            graphOptions: t,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)(B.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: n,
              children: (0, g.jsx)(U, {
                children: e
              })
            })
          })
        },
        H = (e, {
          env: t = "prod"
        }) => {
          const o = (0, k.UT)("");
          return function(n) {
            return (0, g.jsx)(W, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, g.jsx)(e, {
                ...n
              })
            })
          }
        },
        Q = (0, k.UT)({}),
        J = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, m.q)(Q),
            o = Object.values(t).some((e => !!e));
          return (0, h.useEffect)((() => {
            o ? document.documentElement.setAttribute(J, "true") : document.documentElement.removeAttribute(J)
          }), [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => Q(e))({
              ...t,
              [e]: o
            })
          }
        },
        K = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var Z = o(89656);
      const ee = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        te = ({
          element: e
        }) => {
          const t = setInterval((() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            o = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", o))
            };
          document.addEventListener("scroll", o)
        },
        oe = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (te({
            element: o
          }), ne(o))
        },
        ne = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const o = e?.querySelectorAll(t.join(", "));
            if (o?.length) {
              const e = [...o].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class ae {
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
      const re = Object.freeze({
          pc: new ae("pc", "PC Legacy", 8, "sc"),
          ps: new ae("ps", "PlayStation", 3, "np", "ps"),
          ps3: new ae("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new ae("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new ae("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new ae("xbox", "Xbox", 4, "xbl"),
          xbox360: new ae("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new ae("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new ae("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new ae("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new ae("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new ae("applestore", "App Store", 102, "applestore"),
          googleplay: new ae("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new ae("app_store", "App Store", 102, "applestore"),
          googlePlay: new ae("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new ae("pcalt", "PC Enhanced", 22, "sc")
        }),
        se = Object.freeze(Object.values(re));

      function ie(e) {
        if (!e) return;
        if (e instanceof ae) return e;
        const t = e.toString().toLowerCase();
        return se.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var de = o(6306);
      const le = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        ce = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find((e => e.startsWith(o))),
            a = n?.substring(o.length, n.length);
          return a
        },
        ue = (e, t) => {
          e && void 0 !== t && (0, de.canStoreCookie)(e) && ce(e) !== t && (document.cookie = `${e}=${t}; domain=${le()}; path=/;`)
        };
      var pe = o(81788);
      const ge = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, pe.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await o(), d = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return d.searchParams.append("cid", r), d.searchParams.append("lang", n), d.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && d.searchParams.append("accessToken", i.bearerToken), d
      }, he = e => e.keys().forEach(e), me = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], we = (e = !0) => me.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null, fe = e => {
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
        }).then((e => e.arrayBuffer())).then((e => {
          const t = window.URL.createObjectURL(new Blob([e])),
            n = document.createElement("a");
          n.href = t, n.setAttribute("download", o), document.body.appendChild(n), n.click(), document.body.removeChild(n)
        })).catch((e => {
          console.log(e)
        }))
      }, be = () => [re.xbox360.name, re.xboxone.name, re.ps3.name, re.ps4.name, re.pc.name], ve = () => [re.xboxsx.name, re.ps5.name, re.pcalt.name], ye = e => ve().includes(e), xe = e => {
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
      var ke = o(89864),
        Se = o.n(ke);
      const Pe = (0, o(79867).A)(),
        Ce = Pe?.id,
        Ae = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ee = e => {
          const t = {
            ...e,
            environment: Ce,
            display_type: Ae
          };
          Se().dataLayer({
            dataLayer: t
          })
        },
        Le = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ee(e)
          }
        }))(e, t),
        Te = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, h.useState)(t), r = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map((e => r(e)));
              t = {
                ...t,
                items: e
              }
            }
            const n = t?.mediaQueryList;
            return n?.length ? (n.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              t = {
                ...t,
                ...e
              }
            })), t) : t
          };
          return (0, h.useEffect)((() => {
            const e = l().debounce((() => {
              a(r(t))
            }), o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, g.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Re = o(40445),
        je = o(26675);
      const Ie = Re.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Oe = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, je.A)(),
              {
                data: o
              } = D(Ie, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find((t => t.key === e))?.value ?? e : null
          })(o);
          return n ? (0, g.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Me = o(95342);
      const Ue = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        De = () => (0, h.useContext)(Ue),
        _e = ({
          children: e,
          ...t
        }) => {
          const o = De() ?? {},
            n = (0, h.useMemo)((() => ({
              ...o,
              ...t
            })), [o, t]);
          return (0, g.jsx)(Ue.Provider, {
            value: n,
            children: e
          })
        };
      var Be = o(17954),
        Ne = o(9623);
      const Ge = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ne.useLocation)();
          return (0, h.useEffect)((() => {
            Ee({
              event: "trackPageview"
            })
          }), [o]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        $e = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          Se().initialize(t)
        };
      var Fe = o(37980);
      const ze = "rockstar-games-web";
      let qe;
      try {
        const e = Fe.A.get(ze) ?? "";
        qe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        qe = {}
      }
      const Xe = (0, k.UT)(qe),
        Ve = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Xe() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Fe.A.set(ze, JSON.stringify(o), {
            expires: 30,
            domain: le(),
            path: "/"
          }), Xe(o), o
        },
        We = () => ({
          webSettings: (0, m.q)(Xe),
          webSettingsReactive: Xe,
          mutateWebSettings: Ve
        });
      var He = o(50437)
    }
  }
]);