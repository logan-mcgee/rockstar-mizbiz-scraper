! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4fa98f6c-4dc2-4289-9d2a-e82025e55323", e._sentryDebugIdIdentifier = "sentry-dbid-4fa98f6c-4dc2-4289-9d2a-e82025e55323")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [6497], {
    15820: (e, t, n) => {
      n.d(t, {
        A: () => m
      });
      var o = n(7862),
        r = n(98398),
        a = n.n(r),
        s = n(4981),
        i = n.n(s),
        c = n(56720),
        l = n(71945);
      const {
        apiHost: d
      } = (0, c.A)(), u = (0, l.t)(document.documentElement.lang), h = {}, m = async function(e) {
        let {
          fetchOptions: t = {},
          finalFetchOptions: n = {},
          query: r = null,
          pingBearer: s,
          requireBearerToken: c = !0,
          useCache: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          const {
            bearerToken: m = null
          } = await (s?.()) ?? {}, p = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...u && {
              "X-lang": u
            }
          };
          let w = `${d}/${e}`;
          if (null === r || i().isEmpty(r) || (w += `?${new URLSearchParams(r)}`), !m && c) return null;
          m && (p.Authorization = `Bearer ${m}`);
          const g = {
              headers: p
            },
            f = a().all([g, t, n]),
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
          const y = await fetch(w, f),
            k = await y.json();
          return l && (h[b] = {
            response: k,
            loading: !1
          }), k
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }
    },
    16855: (e, t, n) => {
      n.r(t), n.d(t, {
        Consumer: () => i,
        Provider: () => c,
        useNewswirePost: () => l
      });
      var o = n(62229),
        r = n(57985),
        a = n(25854);
      const s = (0, r.A)({
          context: (0, o.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: i
        } = s,
        c = e => {
          let {
            article: t,
            children: n
          } = e;
          return (0, a.jsx)(s.Provider, {
            value: t,
            children: n
          })
        },
        l = () => (0, o.useContext)(s)
    },
    35553: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => ie.R,
        ApolloProvider: () => ce.X,
        DataLayerProvider: () => Le,
        GraphOperationsProvider: () => x._y,
        InMemoryCache: () => de.D,
        Platform: () => N,
        Platforms: () => q,
        ReactiveStateProvider: () => b,
        ResizeProvider: () => Me.uU,
        RockstarGraphProvider: () => _,
        RockstarTokenProvider: () => S.ec,
        ScrollProvider: () => $e.N2,
        classList: () => W,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => F,
        downloadFile: () => ne,
        findPlatform: () => V,
        getAccentColor: () => r,
        getBase: () => a.A,
        getCdnPrefix: () => te,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => J,
        getGen8Consoles: () => oe,
        getGen9Consoles: () => re,
        getLanguageLabel: () => se,
        getUriForGraphEnv: () => i,
        gql: () => le.J1,
        gtmInit: () => ye,
        importAll: () => Z,
        isGen9Platform: () => ae,
        makeVar: () => k.UT,
        mutateWebSettings: () => Ee,
        newswirePost: () => D,
        oneTrustInit: () => B,
        safeStyles: () => d,
        scrollToElement: () => H,
        setContextItem: () => u.A,
        setCookieValue: () => K,
        setMakeVarItem: () => h.A,
        supportedBrowsers: () => G,
        toScLocaleString: () => ue.t,
        track: () => fe,
        useApolloClient: () => R,
        useBase: () => Oe.RK,
        useBodyScrollable: () => $,
        useDataLayer: () => Te,
        useHasReduceMotionPreference: () => Oe.vx,
        useHasSaveDataPreference: () => Oe.sb,
        useLocale: () => Oe.Ym,
        useMutateState: () => v,
        useMutation: () => x.n_,
        useNewswirePost: () => Oe.CA,
        usePreloadImg: () => Oe.OG,
        usePrevious: () => Oe.ZC,
        useQuery: () => x.IT,
        useQueryParams: () => Oe.sq,
        useReactiveVar: () => j.q,
        useRockstarEventDispatcher: () => Oe.OH,
        useRockstarEventSubscriber: () => Oe.zP,
        useRockstarToken: () => S.e9,
        useRockstarTokenPing: () => S.Es,
        useRockstarTokenReactive: () => S.bD,
        useRockstarWebSettings: () => Ae,
        useScApi: () => Oe.Cb,
        useScAuthLinks: () => Oe.N6,
        useScAuthTpaLink: () => Oe.Br,
        useScroll: () => $e.Ll,
        useScrollTracking: () => Oe.GA,
        useState: () => g,
        useWindowResize: () => Me.G4,
        webSettingsReactive: () => Ce,
        withAutoRouteTracking: () => be,
        withGtmTracking: () => Re,
        withMediaBasedProps: () => _e,
        withReactiveState: () => y,
        withRockstarGraph: () => U,
        withTranslations: () => Ie
      });
      var o = n(15820);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = n(38212),
        s = n(56720);
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
      var c = n(4981),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(57985),
        h = n(66205),
        m = n(62229),
        p = n(25854);
      const w = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        g = () => (0, m.useContext)(w),
        f = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, m.useContext)(f),
        b = e => {
          let {
            children: t,
            state: n
          } = e;
          (0, j.q)(n);
          const o = (0, m.useCallback)((e => {
            const t = {
              ...n(),
              ...e
            };
            n(t)
          }), [n]);
          return (0, p.jsx)(w.Provider, {
            value: n(),
            children: (0, p.jsx)(f.Provider, {
              value: o,
              children: t
            })
          })
        },
        y = (e, t) => {
          let {
            state: n
          } = t;
          return function(t) {
            return (0, p.jsx)(b, {
              state: n,
              children: (0, p.jsx)(e, {
                ...t
              })
            })
          }
        };
      var k = n(49196),
        x = n(81588),
        S = n(86497),
        C = n(54270);
      var E = n(27142),
        A = n(18247),
        P = n.n(A);
      var T = n(9849),
        L = n(7862);
      const M = (0, T.e)({
          sha256: L.sc
        }),
        R = e => {
          let {
            graphOptions: t,
            typePolicies: n = {}
          } = e;
          const o = t?.env ? i(t?.env) : t?.uri,
            r = {
              ...t,
              uri: o
            },
            [a] = (0, m.useState)(new de.D({
              typePolicies: n
            })),
            s = M.concat((e => {
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
          return new ie.R({
            cache: a,
            link: s
          })
        },
        _ = e => {
          let {
            children: t,
            graphOptions: n,
            typePolicies: o
          } = e;
          const r = R({
            graphOptions: n,
            typePolicies: o ?? {}
          });
          return (0, p.jsx)(S.ec, {
            token: n?.token,
            children: (0, p.jsx)(ce.X, {
              client: r,
              children: (0, p.jsx)(x._y, {
                children: t
              })
            })
          })
        },
        U = (e, t) => {
          let {
            env: n = "prod"
          } = t;
          const o = (0, k.UT)("");
          return function(t) {
            return (0, p.jsx)(_, {
              graphOptions: {
                env: n,
                useGETForQueries: !0,
                token: o
              },
              children: (0, p.jsx)(e, {
                ...t
              })
            })
          }
        };
      var j = n(99449);
      const I = (0, k.UT)({}),
        O = "data-disallow-body-scroll",
        $ = e => {
          const t = (0, j.q)(I),
            n = Object.values(t).some((e => !!e));
          return (0, m.useEffect)((() => {
            n ? document.documentElement.setAttribute(O, "true") : document.documentElement.removeAttribute(O)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => I(e))({
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
      var D = n(16855);
      const G = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        H = e => {
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
        F = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (H({
            element: n
          }), z(n))
        },
        z = e => {
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
      class N {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const q = Object.freeze({
          pc: new N("pc", "PC", 8),
          ps: new N("ps", "PlayStation", 3),
          ps3: new N("ps3", "PlayStation 3", 2),
          ps4: new N("ps4", "PlayStation 4", 11),
          ps5: new N("ps5", "PlayStation 5", 20),
          xbox: new N("xbox", "Xbox", 4),
          xbox360: new N("xbox360", "Xbox 360", 1),
          xboxone: new N("xboxone", "Xbox One", 12),
          xboxsx: new N("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new N("switch", "Nintendo Switch™", 18),
          nintendoswitch: new N("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new N("applestore", "App Store", 102),
          googleplay: new N("googleplay", "Google Play", 1023),
          appStore: new N("app_store", "App Store", 102),
          googlePlay: new N("ggle_play", "Google Play", 1023),
          pcalt: new N("pcalt", "PC Enhanced", 22)
        }),
        X = Object.freeze(Object.values(q));

      function V(e) {
        if (!e) return;
        if (e instanceof N) return e;
        const t = e.toString().toLowerCase();
        return X.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const W = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var Q = n(25125),
        Y = n(87171);
      const J = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        K = (e, t) => {
          e && void 0 !== t && (0, Q.canStoreCookie)(e) && J(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,Y.F)()}; path=/;`)
        },
        Z = e => e.keys().forEach(e),
        ee = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        te = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return ee.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        ne = e => {
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
        oe = () => [q.xbox360.name, q.xboxone.name, q.ps3.name, q.ps4.name, q.pc.name],
        re = () => [q.xboxsx.name, q.ps5.name, q.pcalt.name],
        ae = e => re().includes(e),
        se = e => {
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
      var ie = n(76486),
        ce = n(83843),
        le = n(31492),
        de = n(92810),
        ue = n(71945),
        he = n(96389),
        me = n.n(he);
      const pe = (0, n(40148).A)(),
        we = pe?.id,
        ge = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        fe = e => {
          const t = {
            ...e,
            environment: we,
            display_type: ge
          };
          me().dataLayer({
            dataLayer: t
          })
        };
      var ve = n(9623);
      const be = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, ve.useLocation)();
          return (0, m.useEffect)((() => {
            fe({
              event: "trackPageview"
            })
          }), [n]), (0, p.jsx)(e, {
            ...t
          })
        })(e, t),
        ye = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          me().initialize(n)
        };
      var ke = n(84388);
      const xe = "rockstar-games-web";
      let Se;
      try {
        const e = ke.A.get(xe) ?? "";
        Se = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Se = {}
      }
      const Ce = (0, k.UT)(Se),
        Ee = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ce() ?? {}
          };
          return o[t] = n, null === n && delete o[t], ke.A.set(xe, JSON.stringify(o), {
            expires: 30,
            domain: (0, Y.F)(),
            path: "/"
          }), Ce(o), o
        },
        Ae = () => ({
          webSettings: (0, j.q)(Ce),
          webSettingsReactive: Ce,
          mutateWebSettings: Ee
        }),
        Pe = (0, u.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        Te = () => (0, m.useContext)(Pe),
        Le = e => {
          let {
            children: t,
            ...n
          } = e;
          const o = Te() ?? {},
            r = (0, m.useMemo)((() => ({
              ...o,
              ...n
            })), [o, n]);
          return (0, p.jsx)(Pe.Provider, {
            value: r,
            children: t
          })
        };
      var Me = n(75544);
      const Re = e => t => ((e, t) => (0, p.jsx)(e, {
          ...t,
          gtmTrack: e => {
            fe(e)
          }
        }))(e, t),
        _e = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
          return n => ((e, t, n) => {
            const [o, r] = (0, m.useState)(t), a = e => {
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
            return (0, m.useEffect)((() => {
              const e = l().debounce((() => {
                r(a(t))
              }), n);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            })), (0, p.jsx)(e, {
              ...o
            })
          })(e, n, t)
        };
      var Ue = n(41510);
      const je = le.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Ie = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
          return n => ((e, t, n) => {
            const o = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
              const t = (0, Ue.A)(),
                {
                  data: n
                } = (0, x.IT)(je, {
                  variables: {
                    config: e,
                    locale: t
                  }
                });
              return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
            }(n);
            return o ? (0, p.jsx)(e, {
              ...t,
              t: o
            }) : null
          })(e, n, t)
        };
      var Oe = n(98397),
        $e = n(89591)
    },
    38212: (e, t, n) => {
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
    40148: (e, t, n) => {
      n.d(t, {
        A: () => a,
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
        a = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), a = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    41510: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var o = n(49196),
        r = n(99449);
      const a = (0, o.UT)(document.documentElement.lang),
        s = () => (0, r.q)(a)
    },
    56720: (e, t, n) => {
      n.d(t, {
        A: () => i
      });
      const o = window?.env?.sc,
        r = window?.env?.marketing,
        a = e => {
          let {
            apiHost: t,
            authHost: n,
            clientId: a,
            cms: s,
            graphEnv: i,
            scHost: c,
            hostname: l,
            cdnBase: d,
            key: u,
            marketingAuthTLD: h
          } = e;
          const m = o?.apiHost ?? t,
            p = o?.authHost ?? n,
            w = o?.cdnBase ?? d,
            g = o?.clientId ?? a,
            f = r?.marketingAuthTLD ?? h,
            v = o?.scHost ?? c,
            b = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: o?.graphEnv ?? i,
            host: v,
            hostname: l,
            cdnBase: w,
            key: u,
            clientId: g,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: p,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${p}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${p}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${p}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${b}`
          }
        },
        s = [a({
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
        }), a({
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
            const t = s.find((t => {
              let {
                key: n
              } = t;
              return n === e
            })) ?? null;
            if (t) return t
          }
          return s.find((e => {
            let {
              hostname: t
            } = e;
            return new RegExp(t).test(document.location.hostname)
          })) || s[0]
        }
    },
    57985: (e, t, n) => {
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
    66205: (e, t, n) => {
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
    71945: (e, t, n) => {
      n.d(t, {
        t: () => o
      });
      const o = e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }
    },
    75544: (e, t, n) => {
      n.d(t, {
        G4: () => p,
        uU: () => m
      });
      var o = n(62229),
        r = n(49196),
        a = n(99449),
        s = n(57985),
        i = n(25854);
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
            } = c[t], a = e >= o && e <= r, s = e >= o;
            n[t] = {
              activeExact: a,
              activeMin: s,
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
        d = (0, s.A)({
          context: (0, o.createContext)(l()),
          key: "resizeContext"
        }),
        {
          Consumer: u
        } = d,
        h = (0, r.UT)(l()),
        m = e => {
          let {
            children: t
          } = e;
          const n = (0, a.q)(h);
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
        p = () => (0, o.useContext)(d)
    },
    81588: (e, t, n) => {
      n.d(t, {
        _y: () => b,
        _l: () => i._,
        n_: () => k,
        IT: () => y
      });
      var o = n(62229),
        r = n(92810),
        a = n(76486),
        s = n(96646),
        i = n(60799),
        c = n(21515),
        l = n(4981),
        d = n.n(l),
        u = n(98397);
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
            data: a,
            loading: s,
            error: i,
            ...l
          } = (0, c.IT)(e, r);
        return (0, o.useEffect)((() => {
          if (a && r.setTitleDataPath) {
            const e = d().get(a, r.setTitleDataPath) ?? null;
            e && window.postMessage({
              type: "graph.titleUpdate",
              title: e
            })
          }
        }), [a]), (0, o.useEffect)((() => (r.autoSetLoading && window.postMessage({
          type: "graph.loadingUpdate",
          loading: s
        }), () => {
          r.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: !1
          })
        })), [s]), (0, o.useEffect)((() => {
          if (r.autoSetError && i) throw new Error(String(i))
        }), [i]), {
          loading: s,
          error: i,
          data: a,
          ...l
        }
      };
      var m = n(25854);
      const p = (0, o.createContext)((() => ({
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
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new a.R(g))
        }],
        v = (0, o.createContext)((() => f)),
        b = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = e => {
          let {
            children: t
          } = e;
          return (0, m.jsx)(v.Provider, {
            value: s.n,
            children: (0, m.jsx)(p.Provider, {
              value: h,
              children: t
            })
          })
        }),
        y = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, o.useContext)(p)(e, t)),
        k = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, o.useContext)(v)(e))
    },
    86497: (e, t, n) => {
      n.d(t, {
        ec: () => h,
        e9: () => p,
        Es: () => w,
        bD: () => m
      });
      var o = n(62229),
        r = n(49196),
        a = n(57985),
        s = n(4895),
        i = n(56720);
      var c = n(35553),
        l = n(25854);
      const d = {
          token: (0, r.UT)("")
        },
        u = (0, a.A)({
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
        m = () => {
          const {
            token: e
          } = (0, o.useContext)(u);
          return [e]
        },
        p = () => {
          const [e] = m();
          return (0, c.useReactiveVar)(e)
        },
        w = () => {
          const [e] = m();
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
                } = (0, s.s)(e) ?? {};
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
    87171: (e, t, n) => {
      n.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    89591: (e, t, n) => {
      n.d(t, {
        Ll: () => h,
        N2: () => m
      });
      var o = n(62229),
        r = n(49196),
        a = n(99449),
        s = n(57985),
        i = n(66205),
        c = n(25854);
      const l = (0, i.A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, r.UT)(!1)
        }),
        d = e => l(e),
        u = (0, s.A)({
          context: (0, o.createContext)(null),
          key: "scrollContext"
        }),
        h = () => (0, o.useContext)(u),
        m = e => {
          let {
            children: t
          } = e;
          const [n, r] = (0, o.useState)(window.pageYOffset), [s, i] = (0, o.useState)(null), [h, m] = (0, o.useState)(!1), p = (0, a.q)(l);
          let w;
          const g = () => {
            m(!0), clearTimeout(w), w = setTimeout((() => {
              m(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const t = () => {
              if (p) return void i(!1);
              const t = Math.max(0, window.pageYOffset);
              r(t), h || i(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [h, p]), (0, o.useMemo)((() => (0, c.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: p,
              pageYOffset: n,
              pauseUserShouldSeeMore: g,
              setFreezeUserShouldSeeMore: d,
              userShouldSeeMore: s
            },
            children: t
          })), [p, n, g, s])
        }
    },
    98397: (e, t, n) => {
      n.d(t, {
        RK: () => r,
        vx: () => S,
        sb: () => C,
        Ym: () => s.A,
        CA: () => b.useNewswirePost,
        OG: () => i,
        ZC: () => d,
        sq: () => l,
        OH: () => f,
        zP: () => v,
        Cb: () => m,
        N6: () => x,
        Br: () => k,
        GA: () => E
      });
      const o = (0, n(38212).A)(),
        r = () => o;
      var a = n(62229),
        s = n(41510);
      const i = e => {
        const [t, n] = (0, a.useState)(null), [o, r] = (0, a.useState)(null), [s, i] = (0, a.useState)({});
        return (0, a.useLayoutEffect)((() => {
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
        }), [e]), [t, s]
      };
      var c = n(9623);
      const l = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        d = e => {
          const t = (0, a.useRef)();
          return (0, a.useEffect)((() => {
            t.current = e
          }), [e]), t.current
        };
      var u = n(86497),
        h = n(15820);
      const m = (e, t) => {
        let {
          autoFetch: n = !0,
          fetchOptions: o = {},
          query: r = null
        } = t;
        const s = (0, u.Es)(),
          [i, c] = (0, a.useState)(null),
          [l, d] = (0, a.useState)(!1),
          [m, p] = (0, a.useState)(null),
          w = (0, a.useCallback)((async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              const {
                fetchOptions: a = {}
              } = t;
              p(null), c(null), d(!0);
              const i = await (0, h.A)(n ?? e, {
                pingBearer: s,
                fetchOptions: o,
                finalFetchOptions: a,
                query: r
              });
              return i?.status || p(JSON.stringify(i?.error)), c(i), d(!1), i
            } catch (e) {
              p(String(e)), d(!1)
            }
            return null
          }), [e, o, r]);
        return (0, a.useEffect)((() => {
          null === i && null === m && !l && n && w()
        }), [n, i, m, l, w]), {
          data: i,
          error: m,
          loading: l,
          fetch: w
        }
      };
      var p = n(56720);
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
          return (0, a.useMemo)((() => ({
            dispatch: e
          })), [])
        },
        v = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, a.useEffect)((() => {
            const n = g(e);
            return window[w][n] || (window[w][n] = {
              eventQueue: [],
              subscribers: []
            }), window[w][n].subscribers.push(t), window[w][n].eventQueue.forEach((e => {
              t(e.detail)
            })), () => {
              window[w][n].subscribers = window[w][n].subscribers.filter((e => e !== t)), 0 === window[w][n].subscribers.length && delete window[w][n]
            }
          }), [e, t]), (0, a.useMemo)((() => ({})), [])
        };
      var b = n(16855),
        y = (n(89591), n(71945));
      const k = (e, t) => {
          const {
            authHost: n,
            clientId: o
          } = (0, p.A)(), r = (0, s.A)(), a = (0, y.t)(r), i = (0, u.e9)();
          let c = "tpa/" + e + "/link/";
          return c += "?cid=" + encodeURIComponent(o), c += "&lang=" + encodeURIComponent(a), c += "&returnUrl=" + encodeURIComponent(t ?? window.location.pathname), c += "&accessToken=" + encodeURIComponent(i), new URL(c, `https://${n}.rockstargames.com/`)
        },
        x = e => {
          const {
            signup: t,
            login: n
          } = (0, p.A)(), o = (0, s.A)(), r = (0, y.t)(o);
          let a = "";
          return a += "lang=" + encodeURIComponent(r), a += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
            signUpUrl: `${t}&${a}`,
            signInUrl: `${n}?${a}`
          }
        };
      n(75544);
      const S = () => {
          const [e, t] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
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
          const [e, t] = (0, a.useState)(!1);
          return (0, a.useEffect)((() => {
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
      n(88933), n(1345);
      const E = e => {
        const [t, n] = (0, a.useState)(!1), o = (0, a.useRef)(null);
        return (0, a.useEffect)((() => {
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
      }
    }
  }
]);