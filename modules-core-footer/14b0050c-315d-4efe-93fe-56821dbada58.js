try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "14b0050c-315d-4efe-93fe-56821dbada58", e._sentryDebugIdIdentifier = "sentry-dbid-14b0050c-315d-4efe-93fe-56821dbada58")
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
  [637, 4069], {
    79465(e) {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === o
            }(e)
          }(e)
        },
        o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? i((o = e, Array.isArray(o) ? [] : {}), e, t) : e;
        var o
      }

      function r(e, t, o) {
        return e.concat(t).map(function(e) {
          return n(e, o)
        })
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function i(e, o, d) {
        (d = d || {}).arrayMerge = d.arrayMerge || r, d.isMergeableObject = d.isMergeableObject || t, d.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(o);
        return c === Array.isArray(e) ? c ? d.arrayMerge(e, o, d) : function(e, t, o) {
          var r = {};
          return o.isMergeableObject(e) && a(e).forEach(function(t) {
            r[t] = n(e[t], o)
          }), a(t).forEach(function(a) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, a) || (s(e, a) && o.isMergeableObject(t[a]) ? r[a] = function(e, t) {
              if (!t.customMerge) return i;
              var o = t.customMerge(e);
              return "function" == typeof o ? o : i
            }(a, o)(e[a], t[a], o) : r[a] = n(t[a], o))
          }), r
        }(e, o, d) : n(o, d)
      }
      i.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, o) {
          return i(e, o, t)
        }, {})
      };
      var d = i;
      e.exports = d
    },
    69245(e, t, o) {
      var n = o(71127),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var n, a = {},
          c = null,
          l = null;
        for (n in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, n) && !d.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: l,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    42295(e, t, o) {
      e.exports = o(69245)
    },
    79867(e, t, o) {
      o.d(t, {
        A: () => c,
        C: () => i
      });
      var n = o(56265),
        r = o.n(n),
        a = o(41972),
        s = o.n(a);
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
        c = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = d.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), a = d[n >= 0 ? n : 0], i = d.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), s()(r()({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    60637(e, t, o) {
      o.r(t), o.d(t, {
        ApolloClient: () => E.R,
        ApolloProvider: () => T.X,
        DataLayerProvider: () => Ue,
        InMemoryCache: () => C.D,
        Platform: () => oe,
        Platforms: () => ne,
        ReactiveStateProvider: () => x,
        ResizeProvider: () => Je.uU,
        RockstarGraphProvider: () => V,
        RockstarTokenProvider: () => A.ec,
        ScrollProvider: () => Me.N2,
        coreScApiFetch: () => n.A,
        cx: () => r,
        detectIfWeShouldAnchorSomewhere: () => ee,
        downloadFile: () => fe,
        findPlatform: () => ae,
        generateTpaLink: () => le.t,
        getAccentColor: () => a,
        getBase: () => s.A,
        getCdnPrefix: () => ge,
        getConfigForDomain: () => i.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => he,
        getGen9Consoles: () => me,
        getLanguageLabel: () => we,
        getUriForGraphEnv: () => d,
        gql: () => Te.J1,
        gtmInit: () => ze,
        importAll: () => ue,
        isGen9Platform: () => be,
        makeVar: () => k.UT,
        mutateWebSettings: () => We,
        newswirePost: () => K,
        oneTrustInit: () => H,
        safeStyles: () => u,
        scrollToElement: () => Z,
        setContextItem: () => p.A,
        setCookieValue: () => ce,
        setMakeVarItem: () => g.A,
        supportedBrowsers: () => Y,
        toScLocaleString: () => qe.t,
        track: () => Pe,
        useApolloClient: () => F,
        useBase: () => Re.RK,
        useBodyScrollable: () => Q,
        useDataLayer: () => De,
        useGetTpaLinkGenerator: () => Re.gd,
        useHasReduceMotionPreference: () => Re.vx,
        useHasSaveDataPreference: () => Re.sb,
        useLazyQuery: () => Le._,
        useLocale: () => Re.Ym,
        useMutateState: () => v,
        useMutation: () => _e.n,
        useNewswirePost: () => Re.CA,
        usePreloadImg: () => Re.OG,
        usePrevious: () => Re.ZC,
        useQuery: () => $,
        useQueryParams: () => Re.sq,
        useReactiveVar: () => m.q,
        useRelativeTime: () => Re.Vq,
        useRockstarEventDispatcher: () => Re.OH,
        useRockstarEventSubscriber: () => Re.zP,
        useRockstarToken: () => A.e9,
        useRockstarTokenPing: () => A.Es,
        useRockstarTokenReactive: () => A.bD,
        useRockstarWebSettings: () => Xe,
        useScApi: () => Re.Cb,
        useScAuthLinks: () => Re.N6,
        useScroll: () => Me.Ll,
        useScrollTracking: () => Re.GA,
        useScrollVisibility: () => Re.JE,
        useState: () => w,
        useWindowResize: () => Je.G4,
        webSettingsReactive: () => Ve,
        withAutoRouteTracking: () => Be,
        withGtmTracking: () => Ce,
        withMediaBasedProps: () => Ee,
        withReactiveState: () => S,
        withRockstarGraph: () => W,
        withTranslations: () => je
      });
      var n = o(60099);
      const r = (...e) => e.filter(Boolean).join(" "),
        a = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var s = o(60309),
        i = o(45547);
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
      var c = o(15076),
        l = o.n(c);
      const u = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), t?.["z-index"] && (t.zIndex = t["z-index"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var p = o(9482),
        g = o(52690),
        f = o(42295),
        h = o(71127),
        m = o(93452);
      const b = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, h.useContext)(b),
        y = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        v = () => (0, h.useContext)(y),
        x = ({
          children: e,
          state: t
        }) => {
          (0, m.q)(t);
          const o = (0, h.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, f.jsx)(b.Provider, {
            value: t(),
            children: (0, f.jsx)(y.Provider, {
              value: o,
              children: e
            })
          })
        },
        S = (e, {
          state: t
        }) => function(o) {
          return (0, f.jsx)(x, {
            state: t,
            children: (0, f.jsx)(e, {
              ...o
            })
          })
        };
      var k = o(21823),
        P = o(42909),
        C = o(19757),
        E = o(75102),
        T = o(88718),
        A = o(20772),
        O = o(6347);
      var j = o(19526);
      const R = (0, P.defineMessages)({
        "g.1.2.1": {
          id: "g.1.2.1",
          description: "The requested video does not exist.",
          defaultMessage: "The requested video does not exist."
        }
      });
      var M = o(83605),
        L = o(61162),
        _ = o.n(L);
      var I = o(62944),
        D = o(42887);
      const U = (0, I.e)({
        sha256: D.sc
      });
      var q = o(46277);
      const N = document.documentElement.lang,
        B = (e, t) => {
          const o = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...t,
              variables: {
                locale: N,
                ...t?.variables
              }
            },
            {
              data: n,
              loading: r,
              error: a,
              ...s
            } = (0, q.IT)(e, o);
          return (0, h.useEffect)(() => {
            if (n && o.setTitleDataPath) {
              const e = l().get(n, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [n]), (0, h.useEffect)(() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: r
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [r]), (0, h.useEffect)(() => {
            if (o.autoSetError && a) throw new Error(a.message)
          }, [a]), {
            loading: r,
            error: a,
            data: n,
            ...s
          }
        },
        z = JSON.parse('{"de-DE":{"g.1.2.1":"The requested video does not exist."},"en-US":{"g.1.2.1":"The requested video does not exist."},"es-ES":{"g.1.2.1":"The requested video does not exist."},"es-MX":{"g.1.2.1":"The requested video does not exist."},"fr-FR":{"g.1.2.1":"The requested video does not exist."},"it-IT":{"g.1.2.1":"The requested video does not exist."},"ja-JP":{"g.1.2.1":"The requested video does not exist."},"ko-KR":{"g.1.2.1":"The requested video does not exist."},"pl-PL":{"g.1.2.1":"The requested video does not exist."},"pt-BR":{"g.1.2.1":"The requested video does not exist."},"ru-RU":{"g.1.2.1":"The requested video does not exist."},"zh-CN":{"g.1.2.1":"The requested video does not exist."},"zh-TW":{"g.1.2.1":"The requested video does not exist."}}'),
        F = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? d(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, h.useState)(new C.D({
              typePolicies: t
            })),
            {
              formatMessage: a
            } = (0, P.useIntl)(),
            s = U.concat((({
              formatMessage: e
            }) => (0, j.S)(t => {
              const {
                response: o
              } = t;
              o?.errors && (o.errors = o?.errors.map(t => {
                if ("FrontendCatchableException" === t.message) {
                  const o = R[t?.code ?? ""];
                  return {
                    ...t,
                    message: e(o)
                  }
                }
                return t
              }))
            }))({
              formatMessage: a
            }).concat((({
              token: e
            }) => (0, O.o)((t, {
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
            }).concat((e => (0, M.$)({
              ...e,
              fetch: _()
            }))(n))));
          return new E.R({
            cache: r,
            link: s
          })
        },
        G = (0, h.createContext)(B),
        $ = (e, t) => (0, h.useContext)(G)(e, t),
        V = (0, P.withIntl)(({
          children: e,
          graphOptions: t,
          typePolicies: o = {}
        }) => {
          const n = F({
            graphOptions: t,
            typePolicies: o
          });
          return (0, f.jsx)(A.ec, {
            token: t?.token,
            children: (0, f.jsx)(T.X, {
              client: n,
              children: (0, f.jsx)(G.Provider, {
                value: B,
                children: e
              })
            })
          })
        }, z),
        W = (e, {
          env: t = "prod"
        }) => {
          const o = (0, k.UT)("");
          return function(n) {
            return (0, f.jsx)(V, {
              graphOptions: {
                env: t,
                useGETForQueries: !0,
                token: o
              },
              children: (0, f.jsx)(e, {
                ...n
              })
            })
          }
        },
        X = (0, k.UT)({}),
        J = "data-disallow-body-scroll",
        Q = e => {
          const t = (0, m.q)(X),
            o = Object.values(t).some(e => !!e);
          return (0, h.useEffect)(() => {
            o ? document.documentElement.setAttribute(J, "true") : document.documentElement.removeAttribute(J)
          }, [o]), {
            bodyShouldLock: o,
            setBodyIsLocked: o => (e => X(e))({
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
      var K = o(89656);
      const Y = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        Z = ({
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
        ee = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (Z({
            element: o
          }), te(o))
        },
        te = e => {
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
      class oe {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, o, n, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = o, this.onlineService = n, this.aliasOnlineService = r, this.alias = a
        }
      }
      const ne = Object.freeze({
          pc: new oe("pc", "PC Legacy", 8, "sc"),
          ps: new oe("ps", "PlayStation", 3, "np", "ps"),
          ps3: new oe("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new oe("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new oe("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new oe("xbox", "Xbox", 4, "xbl"),
          xbox360: new oe("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new oe("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new oe("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new oe("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new oe("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new oe("applestore", "App Store", 102, "applestore"),
          googleplay: new oe("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new oe("app_store", "App Store", 102, "applestore"),
          googlePlay: new oe("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new oe("pcalt", "PC Enhanced", 22, "sc")
        }),
        re = Object.freeze(Object.values(ne));

      function ae(e) {
        if (!e) return;
        if (e instanceof oe) return e;
        const t = e.toString().toLowerCase();
        return re.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var se = o(6306);
      const ie = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        de = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find(e => e.startsWith(o)),
            r = n?.substring(o.length, n.length);
          return r
        },
        ce = (e, t) => {
          e && void 0 !== t && (0, se.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${ie()}; path=/;`)
        };
      var le = o(68466);
      const ue = e => e.keys().forEach(e),
        pe = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        ge = (e = !0) => pe.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        fe = e => {
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
        he = () => [ne.xbox360.name, ne.xboxone.name, ne.ps3.name, ne.ps4.name, ne.pc.name],
        me = () => [ne.xboxsx.name, ne.ps5.name, ne.pcalt.name],
        be = e => me().includes(e),
        we = e => {
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
      var ye = o(89864),
        ve = o.n(ye);
      const xe = (0, o(79867).A)(),
        Se = xe?.id,
        ke = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Pe = e => {
          const t = {
            ...e,
            environment: Se,
            display_type: ke
          };
          ve().dataLayer({
            dataLayer: t
          })
        },
        Ce = e => t => ((e, t) => (0, f.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Pe(e)
          }
        }))(e, t),
        Ee = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, h.useState)(t), a = e => {
            let t = e;
            const o = t?.items;
            if (o?.length) {
              const e = o.map(e => a(e));
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
            const e = l().debounce(() => {
              r(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, f.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Te = o(40445),
        Ae = o(26675);
      const Oe = Te.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        je = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Ae.A)(),
              {
                data: o
              } = $(Oe, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, f.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Re = o(57301),
        Me = o(95342),
        Le = o(66591),
        _e = o(80701);
      const Ie = (0, p.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        De = () => (0, h.useContext)(Ie),
        Ue = ({
          children: e,
          ...t
        }) => {
          const o = De() ?? {},
            n = (0, h.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, f.jsx)(Ie.Provider, {
            value: n,
            children: e
          })
        };
      var qe = o(17954),
        Ne = o(10181);
      const Be = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Ne.useLocation)();
          return (0, h.useEffect)(() => {
            Pe({
              event: "trackPageview"
            })
          }, [o]), (0, f.jsx)(e, {
            ...t
          })
        })(e, t),
        ze = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ve().initialize(t)
        };
      var Fe = o(37980);
      const Ge = "rockstar-games-web";
      let $e;
      try {
        const e = Fe.A.get(Ge) ?? "";
        $e = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        $e = {}
      }
      const Ve = (0, k.UT)($e),
        We = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ve() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Fe.A.set(Ge, JSON.stringify(o), {
            expires: 30,
            domain: ie(),
            path: "/"
          }), Ve(o), o
        },
        Xe = () => ({
          webSettings: (0, m.q)(Ve),
          webSettingsReactive: Ve,
          mutateWebSettings: We
        });
      var Je = o(50437)
    }
  }
]);