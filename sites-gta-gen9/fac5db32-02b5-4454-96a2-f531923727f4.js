try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fac5db32-02b5-4454-96a2-f531923727f4", e._sentryDebugIdIdentifier = "sentry-dbid-fac5db32-02b5-4454-96a2-f531923727f4")
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
  [2301, 9793], {
    94931(e, t, o) {
      var n = o(93082),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var n, s = {},
          l = null,
          c = null;
        for (n in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, n) && !d.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: c,
          props: s,
          _owner: i.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    47279(e, t, o) {
      o.d(t, {
        A: () => l,
        C: () => i
      });
      var n = o(54028),
        r = o.n(n),
        s = o(15963),
        a = o.n(s);
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
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = d.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), s = d[n >= 0 ? n : 0], i = d.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), a()(r()({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    77678(e, t, o) {
      o.d(t, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    99800(e, t, o) {
      o.d(t, {
        OD: () => a,
        lv: () => i,
        wC: () => r,
        PE: () => v,
        rB: () => l,
        tC: () => h.t,
        yh: () => b,
        Ap: () => p,
        Xs: () => x,
        kx: () => y,
        rJ: () => S,
        pT: () => m,
        lV: () => k,
        PA: () => n,
        My: () => g,
        _e: () => f
      }), o(39793), o(69646);
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
        r = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (n({
            element: o
          }), s(o))
        },
        s = e => {
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
      class a {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, r = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = s
        }
      }
      const i = Object.freeze({
          pc: new a("pc", "PC Legacy", 8, "sc"),
          ps: new a("ps", "PlayStation", 3, "np", "ps"),
          ps3: new a("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new a("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new a("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new a("xbox", "Xbox", 4, "xbl"),
          xbox360: new a("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new a("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new a("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new a("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new a("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new a("applestore", "App Store", 102, "applestore"),
          googleplay: new a("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new a("app_store", "App Store", 102, "applestore"),
          googlePlay: new a("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new a("pcalt", "PC Enhanced", 22, "sc")
        }),
        d = Object.freeze(Object.values(i));

      function l(e) {
        if (!e) return;
        if (e instanceof a) return e;
        const t = e.toString().toLowerCase();
        return d.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var c = o(23058),
        u = o(77678);
      const p = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        g = (e, t) => {
          e && void 0 !== t && (0, c.canStoreCookie)(e) && p(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,u.F)()}; path=/;`)
        };
      var h = o(32118);
      const m = e => e.keys().forEach(e),
        f = e => e.replace(/(<([^>]+)>)/gi, ""),
        w = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        b = (e = !0) => w.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        v = e => {
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
        },
        x = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        y = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        k = e => y().includes(e),
        S = e => {
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
    42301(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => T.X,
        DataLayerProvider: () => be,
        InMemoryCache: () => C.D,
        Platform: () => Z.OD,
        Platforms: () => Z.lv,
        ReactiveStateProvider: () => y,
        ResizeProvider: () => Le.uU,
        RockstarGraphProvider: () => V,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => ge.N2,
        coreScApiFetch: () => n.A,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => Z.wC,
        downloadFile: () => Z.PE,
        findPlatform: () => Z.rB,
        generateTpaLink: () => Z.tC,
        getAccentColor: () => s,
        getBase: () => a.A,
        getCdnPrefix: () => Z.yh,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => Z.Ap,
        getGen8Consoles: () => Z.Xs,
        getGen9Consoles: () => Z.kx,
        getLanguageLabel: () => Z.rJ,
        getUriForGraphEnv: () => d,
        gql: () => de.J1,
        gtmInit: () => ke,
        importAll: () => Z.pT,
        isGen9Platform: () => Z.lV,
        makeVar: () => S.UT,
        mutateWebSettings: () => Ae,
        newswirePost: () => K,
        oneTrustInit: () => H,
        safeStyles: () => u,
        scrollToElement: () => Z.PA,
        setContextItem: () => p.A,
        setCookieValue: () => Z.My,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => ve.t,
        track: () => se,
        useApolloClient: () => z,
        useBase: () => pe.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => we,
        useGetTpaLinkGenerator: () => pe.gd,
        useHasReduceMotionPreference: () => pe.vx,
        useHasSaveDataPreference: () => pe.sb,
        useLazyQuery: () => he._,
        useLocale: () => pe.Ym,
        useMutateState: () => x,
        useMutation: () => me.n,
        useNewswirePost: () => pe.CA,
        usePreloadImg: () => pe.OG,
        usePrevious: () => pe.ZC,
        useQuery: () => $,
        useQueryParams: () => pe.sq,
        useReactiveVar: () => f.q,
        useRelativeTime: () => pe.Vq,
        useRockstarEventDispatcher: () => pe.OH,
        useRockstarEventSubscriber: () => pe.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => Re,
        useScApi: () => pe.Cb,
        useScAuthLinks: () => pe.N6,
        useScroll: () => ge.Ll,
        useScrollTracking: () => pe.GA,
        useScrollVisibility: () => pe.JE,
        useState: () => b,
        useWindowResize: () => Le.G4,
        webSettingsReactive: () => Te,
        withAutoRouteTracking: () => ye,
        withGtmTracking: () => ae,
        withMediaBasedProps: () => ie,
        withReactiveState: () => k,
        withRockstarGraph: () => X,
        withTranslations: () => ue
      });
      var n = o(10959);
      const r = (...e) => e.filter(Boolean).join(" "),
        s = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = o(17473),
        i = o(39991);
      const d = e => {
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
      var l = o(69646),
        c = o.n(l);
      const u = e => {
        const t = c().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = o(81038),
        g = o(94662),
        h = o(39793),
        m = o(93082),
        f = o(37927);
      const w = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextGet"
        }),
        b = () => (0, m.useContext)(w),
        v = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "graphContextSet"
        }),
        x = () => (0, m.useContext)(v),
        y = ({
          children: e,
          state: t
        }) => {
          (0, f.q)(t);
          const o = (0, m.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, h.jsx)(w.Provider, {
            value: t(),
            children: (0, h.jsx)(v.Provider, {
              value: o,
              children: e
            })
          })
        },
        k = (e, {
          state: t
        }) => function(o) {
          return (0, h.jsx)(y, {
            state: t,
            children: (0, h.jsx)(e, {
              ...o
            })
          })
        };
      var S = o(79922),
        P = o(42909),
        C = o(13996),
        E = o(94920),
        T = o(48989),
        A = o(95753),
        R = o(99164);
      var L = o(70945);
      const _ = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var O = o(98548),
        j = o(39647),
        I = o.n(j);
      var M = o(70735),
        D = o(5942);
      const U = (0, M.e)({
        sha256: D.sc
      });
      var q = o(87324);
      const B = document.documentElement.lang,
        N = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: B,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: r,
              error: s,
              ...a
            } = (0, q.IT)(e, o);
          return (0, m.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = c().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, m.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, m.useEffect)(() => {
            if (o.autoSetError && s) throw new Error(s.message)
          }, [s]), {
            loading: r,
            error: s,
            data: n,
            ...a
          }
        },
        F = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        z = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? d(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, m.useState)(new C.D({
              typePolicies: t
            })),
            {
              formatMessage: s
            } = (0, P.useIntl)(),
            a = U.concat((({
              formatMessage: e
            }) => (0, L.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = _[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(o)
                  }
                }
                return t
              }))
            }))({
              formatMessage: s
            }).concat((({
              token: e
            }) => (0, R.o)((t, {
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
            }).concat((e => (0, O.$)({
              ...e,
              fetch: I()
            }))(n))));
          return new E.R({
            cache: r,
            link: a
          })
        },
        G = (0, m.createContext)(N),
        $ = (e, t) => (0, m.useContext)(G)(e, t),
        V = (0, P.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = z({
            graphOptions: t,
            typePolicies: o
          });
          return (0, h.jsx)(A.ec, {
            token: t?.token,
            children: (0, h.jsx)(T.X, {
              client: n,
              children: (0, h.jsx)(G.Provider, {
                value: N,
                children: e
              })
            })
          })
        }, F),
        X = (e, {
          env: t = "prod"
        }) => {
          const o = (0, S.UT)("");
          return function(n) {
            return (0, h.jsx)(V, {
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
        J = (0, S.UT)({}),
        W = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, f.q)(J),
            o = Object.values(t).some(e => !!e);
          return (0, m.useEffect)(() => {
            o ? document.documentElement.setAttribute(W, "true") : document.documentElement.removeAttribute(W)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => J(e))({
              ...t,
              [e]: o
            })
          }
        },
        H = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const o = document.createElement("script");
            o.onload = () => t(), o.onerror = () => t(), o.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", o.setAttribute("data-domain-script", e), o.setAttribute("data-document-language", "true"), document.head.appendChild(o)
          } else t()
        };
      var K = o(22636);
      const Y = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var Z = o(99800),
        ee = o(81471),
        te = o.n(ee);
      const oe = (0, o(47279).A)(),
        ne = oe?.id,
        re = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        se = e => {
          const t = {
            ...e,
            environment: ne,
            display_type: re
          };
          te().dataLayer({
            dataLayer: t
          })
        },
        ae = e => t => ((e, t) => (0, h.jsx)(e, {
          ...t,
          gtmTrack: e => {
            se(e)
          }
        }))(e, t),
        ie = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, m.useState)(t), s = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => s(e));
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
          return (0, m.useEffect)(() => {
            const e = c().debounce(() => {
              r(s(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, h.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var de = o(8670),
        le = o(12879);
      const ce = de.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        ue = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, le.A)(),
              {
                data: o
              } = $(ce, {
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
      var pe = o(85997),
        ge = o(17714),
        he = o(52746),
        me = o(54812);
      const fe = (0, p.A)({
          context: (0, m.createContext)({}),
          key: "gtmDatalayer"
        }),
        we = () => (0, m.useContext)(fe),
        be = ({
          children: e,
          ...t
        }) => {
          const o = we() ?? {},
            n = (0, m.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, h.jsx)(fe.Provider, {
            value: n,
            children: e
          })
        };
      var ve = o(93022),
        xe = o(36416);
      const ye = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, xe.useLocation)();
          return (0, m.useEffect)(() => {
            se({
              event: "trackPageview"
            })
          }, [o]), (0, h.jsx)(e, {
            ...t
          })
        })(e, t),
        ke = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          te().initialize(t)
        };
      var Se = o(43568),
        Pe = o(77678);
      const Ce = "rockstar-games-web";
      let Ee;
      try {
        const e = Se.A.get(Ce) ?? "";
        Ee = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        Ee = {}
      }
      const Te = (0, S.UT)(Ee),
        Ae = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Te() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Se.A.set(Ce, JSON.stringify(o), {
            expires: 30,
            domain: (0, Pe.F)(),
            path: "/"
          }), Te(o), o
        },
        Re = () => ({
          webSettings: (0, f.q)(Te),
          webSettingsReactive: Te,
          mutateWebSettings: Ae
        });
      var Le = o(25633)
    }
  }
]);