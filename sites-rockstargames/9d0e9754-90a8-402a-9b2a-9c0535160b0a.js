try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9d0e9754-90a8-402a-9b2a-9c0535160b0a", e._sentryDebugIdIdentifier = "sentry-dbid-9d0e9754-90a8-402a-9b2a-9c0535160b0a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2295, 6927, 9308], {
    42295: (e, t, o) => {
      e.exports = o(69245)
    },
    69245: (e, t, o) => {
      var n = o(71127),
        a = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var n, r = {},
          c = null,
          d = null;
        for (n in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: i.current
        }
      }
      t.Fragment = r, t.jsx = c, t.jsxs = c
    },
    79308: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => f.ApolloClient,
        ApolloProvider: () => f.ApolloProvider,
        DataLayerProvider: () => Ce,
        InMemoryCache: () => f.InMemoryCache,
        Platform: () => W,
        Platforms: () => q,
        ReactiveStateProvider: () => k,
        ResizeProvider: () => De.uU,
        RockstarGraphProvider: () => I,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => xe.N2,
        coreScApiFetch: () => n.A,
        cx: () => a,
        detectIfWeShouldAnchorSomewhere: () => G,
        downloadFile: () => re,
        findPlatform: () => X,
        generateTpaLink: () => te,
        getAccentColor: () => r,
        getBase: () => s.A,
        getCdnPrefix: () => ae,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => K,
        getGen8Consoles: () => se,
        getGen9Consoles: () => ie,
        getLanguageLabel: () => ce,
        getUriForGraphEnv: () => l,
        gql: () => f.gql,
        gtmInit: () => Re,
        importAll: () => oe,
        isGen9Platform: () => le,
        makeVar: () => f.makeVar,
        mutateWebSettings: () => Ie,
        newswirePost: () => V,
        oneTrustInit: () => z,
        safeStyles: () => u,
        scrollToElement: () => $,
        setContextItem: () => p.A,
        setCookieValue: () => Z,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => F,
        toScLocaleString: () => Ee.t,
        track: () => he,
        useApolloClient: () => j,
        useBase: () => ke.RK,
        useBodyScrollable: () => N,
        useDataLayer: () => Pe,
        useHasReduceMotionPreference: () => ke.vx,
        useHasSaveDataPreference: () => ke.sb,
        useLazyQuery: () => f.useLazyQuery,
        useLocale: () => ke.Ym,
        useMutateState: () => v,
        useMutation: () => f.useMutation,
        useNewswirePost: () => ke.CA,
        usePreloadImg: () => ke.OG,
        usePrevious: () => ke.ZC,
        useQuery: () => M,
        useQueryParams: () => ke.sq,
        useReactiveVar: () => f.useReactiveVar,
        useRelativeTime: () => ke.Vq,
        useRockstarEventDispatcher: () => ke.OH,
        useRockstarEventSubscriber: () => ke.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => Me,
        useScApi: () => ke.Cb,
        useScAuthLinks: () => ke.N6,
        useScroll: () => xe.Ll,
        useScrollTracking: () => ke.GA,
        useScrollVisibility: () => ke.JE,
        useState: () => b,
        useWindowResize: () => De.G4,
        webSettingsReactive: () => Te,
        withAutoRouteTracking: () => Le,
        withGtmTracking: () => fe,
        withMediaBasedProps: () => we,
        withReactiveState: () => x,
        withRockstarGraph: () => D,
        withTranslations: () => ve
      });
      var n = o(60099);
      const a = (...e) => e.filter(Boolean).join(" "),
        r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = o(60309),
        i = o(45547);
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
      var c = o(15076),
        d = o.n(c);
      const u = e => {
        const t = d().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = o(9482),
        g = o(52690),
        m = o(42295),
        h = o(71127),
        f = o(32467);
      const w = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, h.useContext)(w),
        y = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, h.useContext)(y),
        k = ({
          children: e,
          state: t
        }) => {
          (0, f.useReactiveVar)(t);
          const o = (0, h.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, m.jsx)(w.Provider, {
            value: t(),
            children: (0, m.jsx)(y.Provider, {
              value: o,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(o) {
          return (0, m.jsx)(k, {
            state: t,
            children: (0, m.jsx)(e, {
              ...o
            })
          })
        };
      var S = o(20772),
        P = o(6347);
      var C = o(61162),
        E = o.n(C);
      var A = o(62944),
        L = o(42887);
      const R = (0, A.e)({
          sha256: L.sc
        }),
        _ = document.documentElement.lang,
        O = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: _,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: a,
              error: r,
              ...s
            } = (0, f.useQuery)(e, o);
          return (0, h.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = d().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, h.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, h.useEffect)(() => {
            if (o.autoSetError && r) throw new Error(String(r))
          }, [r]), {
            loading: a,
            error: r,
            data: n,
            ...s
          }
        },
        j = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? l(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [a] = (0, h.useState)(new f.InMemoryCache({
              typePolicies: t
            })),
            r = R.concat((({
              token: e
            }) => (0, P.o)((t, {
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
            }).concat((e => (0, f.createHttpLink)({
              ...e,
              fetch: E()
            }))(n)));
          return new f.ApolloClient({
            cache: a,
            link: r
          })
        },
        T = (0, h.createContext)(O),
        I = ({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = j({
            graphOptions: t,
            typePolicies: o
          });
          return (0, m.jsx)(S.ec, {
            token: t?.token,
            children: (0, m.jsx)(f.ApolloProvider, {
              client: n,
              children: (0, m.jsx)(T.Provider, {
                value: O,
                children: e
              })
            })
          })
        },
        M = (e, t) => (0, h.useContext)(T)(e, t),
        D = (e, {
          env: t = "prod"
        }) => {
          const o = (0, f.makeVar)("");
          return function(n) {
            return (0, m.jsx)(I, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, m.jsx)(e, {
                ...n
              })
            })
          }
        },
        U = (0, f.makeVar)({}),
        B = "data-disallow-body-scroll",
        N = e => {
          const t = (0, f.useReactiveVar)(U),
            o = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            o ? document.documentElement.setAttribute(B, "true") : document.documentElement.removeAttribute(B)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => U(e))({
              ...t,
              [e]: o
            })
          }
        },
        z = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var V = o(89656);
      const F = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        $ = ({
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
        G = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && ($({
            element: o
          }), Q(o))
        },
        Q = e => {
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
      class W {
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
      const q = Object.freeze({
          pc: new W("pc", "PC Legacy", 8, "sc"),
          ps: new W("ps", "PlayStation", 3, "np", "ps"),
          ps3: new W("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new W("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new W("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new W("xbox", "Xbox", 4, "xbl"),
          xbox360: new W("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new W("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new W("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new W("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new W("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new W("applestore", "App Store", 102, "applestore"),
          googleplay: new W("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new W("app_store", "App Store", 102, "applestore"),
          googlePlay: new W("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new W("pcalt", "PC Enhanced", 22, "sc")
        }),
        H = Object.freeze(Object.values(q));

      function X(e) {
        if (!e) return;
        if (e instanceof W) return e;
        const t = e.toString().toLowerCase();
        return H.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var Y = o(6306);
      const J = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        K = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            a = n?.substring(o.length, n.length);
          return a
        },
        Z = (e, t) => {
          e && void 0 !== t && (0, Y.canStoreCookie)(e) && K(e) !== t && (document.cookie = `${e}=${t}; domain=${J()}; path=/;`)
        };
      var ee = o(56990);
      const te = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, ee.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, i.A)(), s = await o(), l = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return l.searchParams.append("cid", r), l.searchParams.append("lang", n), l.searchParams.append("returnUrl", t ?? window.location.pathname), s && "boolean" != typeof s && "string" == typeof s.bearerToken && l.searchParams.append("accessToken", s.bearerToken), l
      }, oe = e => e.keys().forEach(e), ne = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], ae = (e = !0) => ne.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, re = e => {
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
      }, se = () => [q.xbox360.name, q.xboxone.name, q.ps3.name, q.ps4.name, q.pc.name], ie = () => [q.xboxsx.name, q.ps5.name, q.pcalt.name], le = e => ie().includes(e), ce = e => {
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
      var de = o(89864),
        ue = o.n(de);
      const pe = (0, o(79867).A)(),
        ge = pe?.id,
        me = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        he = e => {
          const t = {
            ...e,
            environment: ge,
            display_type: me
          };
          ue().dataLayer({
            dataLayer: t
          })
        },
        fe = e => t => ((e, t) => (0, m.jsx)(e, {
          ...t,
          gtmTrack: e => {
            he(e)
          }
        }))(e, t),
        we = (e, t = 250) => o => ((e, t, o) => {
          const [n, a] = (0, h.useState)(t), r = e => {
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
          return (0, h.useEffect)(() => {
            const e = d().debounce(() => {
              a(r(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, m.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var be = o(26675);
      const ye = f.gql`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ve = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, be.A)(),
              {
                data: o
              } = M(ye, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, m.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var ke = o(65085),
        xe = o(95342);
      const Se = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        Pe = () => (0, h.useContext)(Se),
        Ce = ({
          children: e,
          ...t
        }) => {
          const o = Pe() ?? {},
            n = (0, h.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, m.jsx)(Se.Provider, {
            value: n,
            children: e
          })
        };
      var Ee = o(17954),
        Ae = o(10181);
      const Le = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ae.useLocation)();
          return (0, h.useEffect)(() => {
            he({
              event: "trackPageview"
            })
          }, [o]), (0, m.jsx)(e, {
            ...t
          })
        })(e, t),
        Re = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ue().initialize(t)
        };
      var _e = o(37980);
      const Oe = "rockstar-games-web";
      let je;
      try {
        const e = _e.A.get(Oe) ?? "";
        je = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        je = {}
      }
      const Te = (0, f.makeVar)(je),
        Ie = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Te() ?? {}
          };
          return o[e] = t, null === t && delete o[e], _e.A.set(Oe, JSON.stringify(o), {
            expires: 30,
            domain: J(),
            path: "/"
          }), Te(o), o
        },
        Me = () => ({
          webSettings: (0, f.useReactiveVar)(Te),
          webSettingsReactive: Te,
          mutateWebSettings: Ie
        });
      var De = o(50437)
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => c,
        C: () => i
      });
      var n = o(56265),
        a = o.n(n),
        r = o(41972),
        s = o.n(r);
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
        c = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = l.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), r = l[n >= 0 ? n : 0], i = l.find(e => e.id === r.fallbackEnvironment);
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