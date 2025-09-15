try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "699e37c5-d04f-4441-9602-089c432d5110", e._sentryDebugIdIdentifier = "sentry-dbid-699e37c5-d04f-4441-9602-089c432d5110")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [426, 2295, 8045], {
    42295: (e, t, o) => {
      e.exports = o(69245)
    },
    69245: (e, t, o) => {
      var n = o(62229),
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

      function d(e, t, o) {
        var n, r = {},
          d = null,
          c = null;
        for (n in void 0 !== o && (d = "" + o), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: i.current
        }
      }
      t.Fragment = r, t.jsx = d, t.jsxs = d
    },
    70426: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => Ae,
        GraphOperationsProvider: () => E._y,
        InMemoryCache: () => S.D,
        Platform: () => V,
        Platforms: () => H,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => Be.uU,
        RockstarGraphProvider: () => D,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => Pe.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => W,
        downloadFile: () => se,
        findPlatform: () => Y,
        generateTpaLink: () => oe,
        getAccentColor: () => a,
        getBase: () => r.A,
        getCdnPrefix: () => re,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => Z,
        getGen8Consoles: () => ie,
        getGen9Consoles: () => le,
        getLanguageLabel: () => ce,
        getUriForGraphEnv: () => i,
        gql: () => ye.J1,
        gtmInit: () => Re,
        importAll: () => ne,
        isGen9Platform: () => de,
        makeVar: () => x.UT,
        mutateWebSettings: () => De,
        newswirePost: () => G,
        oneTrustInit: () => F,
        safeStyles: () => c,
        scrollToElement: () => q,
        setContextItem: () => u.A,
        setCookieValue: () => ee,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => z,
        toScLocaleString: () => _e.t,
        track: () => we,
        useApolloClient: () => U,
        useBase: () => Se.RK,
        useBodyScrollable: () => $,
        useDataLayer: () => Ee,
        useHasReduceMotionPreference: () => Se.vx,
        useHasSaveDataPreference: () => Se.sb,
        useLocale: () => Se.Ym,
        useMutateState: () => y,
        useMutation: () => E.n_,
        useNewswirePost: () => Se.CA,
        usePreloadImg: () => Se.OG,
        usePrevious: () => Se.ZC,
        useQuery: () => E.IT,
        useQueryParams: () => Se.sq,
        useReactiveVar: () => m.q,
        useRockstarEventDispatcher: () => Se.OH,
        useRockstarEventSubscriber: () => Se.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => Me,
        useScApi: () => Se.Cb,
        useScAuthLinks: () => Se.N6,
        useScAuthTpaLink: () => Se.Br,
        useScroll: () => Pe.Ll,
        useScrollTracking: () => Se.GA,
        useState: () => f,
        useWindowResize: () => Be.G4,
        webSettingsReactive: () => Ue,
        withAutoRouteTracking: () => Le,
        withGtmTracking: () => fe,
        withMediaBasedProps: () => be,
        withReactiveState: () => k,
        withRockstarGraph: () => M,
        withTranslations: () => xe
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
      var l = o(15076),
        d = o.n(l);
      const c = e => {
        const t = d().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        g = o(42295),
        h = o(62229),
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
        y = () => (0, h.useContext)(b),
        v = ({
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
        k = (e, {
          state: t
        }) => function(o) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...o
            })
          })
        };
      var x = o(21823),
        S = o(19757),
        P = o(21643),
        C = o(88718),
        E = o(96566),
        A = o(20772),
        _ = o(6347);
      var T = o(83605),
        L = o(61162),
        R = o.n(L);
      var O = o(62944),
        j = o(42887);
      const I = (0, O.e)({
          sha256: j.sc
        }),
        U = ({
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
            r = I.concat((({
              token: e
            }) => (0, _.o)(((t, {
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
            }).concat((e => (0, T.$)({
              ...e,
              fetch: R()
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
          const n = U({
            graphOptions: t,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)(A.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: n,
              children: (0, g.jsx)(E._y, {
                children: e
              })
            })
          })
        },
        M = (e, {
          env: t = "prod"
        }) => {
          const o = (0, x.UT)("");
          return function(n) {
            return (0, g.jsx)(D, {
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
        B = (0, x.UT)({}),
        N = "data-disallow-body-scroll",
        $ = e => {
          const t = (0, m.q)(B),
            o = Object.values(t).some((e => !!e));
          return (0, h.useEffect)((() => {
            o ? document.documentElement.setAttribute(N, "true") : document.documentElement.removeAttribute(N)
          }), [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => B(e))({
              ...t,
              [e]: o
            })
          }
        },
        F = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var G = o(89656);
      const z = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        q = ({
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
        W = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (q({
            element: o
          }), X(o))
        },
        X = e => {
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
      class V {
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
      const H = Object.freeze({
          pc: new V("pc", "PC Legacy", 8, "sc"),
          ps: new V("ps", "PlayStation", 3, "np", "ps"),
          ps3: new V("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new V("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new V("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new V("xbox", "Xbox", 4, "xbl"),
          xbox360: new V("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new V("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new V("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new V("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new V("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new V("applestore", "App Store", 102, "applestore"),
          googleplay: new V("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new V("app_store", "App Store", 102, "applestore"),
          googlePlay: new V("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new V("pcalt", "PC Enhanced", 22, "sc")
        }),
        Q = Object.freeze(Object.values(H));

      function Y(e) {
        if (!e) return;
        if (e instanceof V) return e;
        const t = e.toString().toLowerCase();
        return Q.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var J = o(6306);
      const K = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        Z = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find((e => e.startsWith(o))),
            a = n?.substring(o.length, n.length);
          return a
        },
        ee = (e, t) => {
          e && void 0 !== t && (0, J.canStoreCookie)(e) && Z(e) !== t && (document.cookie = `${e}=${t}; domain=${K()}; path=/;`)
        };
      var te = o(81788);
      const oe = async ({
        service: e,
        returnUrl: t,
        pingBearer: o
      }) => {
        const [{
          iso: n
        }] = (0, te.getLocale)(), {
          authHost: a,
          clientId: r
        } = (0, s.A)(), i = await o(), l = new URL(`tpa/${e}/link`, `https://${a}.rockstargames.com`);
        return l.searchParams.append("cid", r), l.searchParams.append("lang", n), l.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && l.searchParams.append("accessToken", i.bearerToken), l
      }, ne = e => e.keys().forEach(e), ae = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], re = (e = !0) => ae.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null, se = e => {
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
      }, ie = () => [H.xbox360.name, H.xboxone.name, H.ps3.name, H.ps4.name, H.pc.name], le = () => [H.xboxsx.name, H.ps5.name, H.pcalt.name], de = e => le().includes(e), ce = e => {
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
      var ue = o(89864),
        pe = o.n(ue);
      const ge = (0, o(79867).A)(),
        he = ge?.id,
        me = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        we = e => {
          const t = {
            ...e,
            environment: he,
            display_type: me
          };
          pe().dataLayer({
            dataLayer: t
          })
        },
        fe = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            we(e)
          }
        }))(e, t),
        be = (e, t = 250) => o => ((e, t, o) => {
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
            const e = d().debounce((() => {
              a(r(t))
            }), o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, g.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var ye = o(69964),
        ve = o(26675);
      const ke = ye.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        xe = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, ve.A)(),
              {
                data: o
              } = (0, E.IT)(ke, {
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
      var Se = o(72148),
        Pe = o(95342);
      const Ce = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ee = () => (0, h.useContext)(Ce),
        Ae = ({
          children: e,
          ...t
        }) => {
          const o = Ee() ?? {},
            n = (0, h.useMemo)((() => ({
              ...o,
              ...t
            })), [o, t]);
          return (0, g.jsx)(Ce.Provider, {
            value: n,
            children: e
          })
        };
      var _e = o(17954),
        Te = o(9623);
      const Le = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Te.useLocation)();
          return (0, h.useEffect)((() => {
            we({
              event: "trackPageview"
            })
          }), [o]), (0, g.jsx)(e, {
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
          pe().initialize(t)
        };
      var Oe = o(37980);
      const je = "rockstar-games-web";
      let Ie;
      try {
        const e = Oe.A.get(je) ?? "";
        Ie = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ie = {}
      }
      const Ue = (0, x.UT)(Ie),
        De = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ue() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Oe.A.set(je, JSON.stringify(o), {
            expires: 30,
            domain: K(),
            path: "/"
          }), Ue(o), o
        },
        Me = () => ({
          webSettings: (0, m.q)(Ue),
          webSettingsReactive: Ue,
          mutateWebSettings: De
        });
      var Be = o(50437)
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
    96566: (e, t, o) => {
      o.d(t, {
        _y: () => y,
        _l: () => l._,
        n_: () => k,
        IT: () => v
      });
      var n = o(42295),
        a = o(62229),
        r = o(19757),
        s = o(21643),
        i = o(80701),
        l = o(63886),
        d = o(46277),
        c = o(15076),
        u = o.n(c),
        p = o(72148);
      const g = (e, t) => {
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
          return (0, a.useEffect)((() => {
            if (r && n.setTitleDataPath) {
              const e = u().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, a.useEffect)((() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: s
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [s]), (0, a.useEffect)((() => {
            if (n.autoSetError && i) throw new Error(String(i))
          }), [i]), {
            loading: s,
            error: i,
            data: r,
            ...l
          }
        },
        h = (0, a.createContext)((() => ({
          data: null
        }))),
        m = new Promise((e => {
          e()
        })),
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
        b = (0, a.createContext)((() => f)),
        y = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, n.jsx)(b.Provider, {
          value: i.n,
          children: (0, n.jsx)(h.Provider, {
            value: g,
            children: e
          })
        })),
        v = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, a.useContext)(h)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, a.useContext)(b)(e))
    }
  }
]);