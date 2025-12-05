try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b4ba10df-751a-4f35-85b5-d0ba00a785a4", e._sentryDebugIdIdentifier = "sentry-dbid-b4ba10df-751a-4f35-85b5-d0ba00a785a4")
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
  [5941, 9757], {
    42295: (e, t, o) => {
      e.exports = o(69245)
    },
    69245: (e, t, o) => {
      var n = o(71127),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var n, a = {},
          l = null,
          d = null;
        for (n in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    79465: e => {
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

      function i(e, o, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || r, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(o);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, o, c) : function(e, t, o) {
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
        }(e, o, c) : n(o, c)
      }
      i.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, o) {
          return i(e, o, t)
        }, {})
      };
      var c = i;
      e.exports = c
    },
    79867: (e, t, o) => {
      o.d(t, {
        A: () => a,
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
        r = [{
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
        a = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = r.findIndex(t => Object.entries(t.sites).findIndex(([t, n]) => n === o && (e = {
            site: t,
            subDomain: n
          }, !0)) >= 0), a = r[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    89757: (e, t, o) => {
      o.r(t), o.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => De,
        GraphOperationsProvider: () => I,
        InMemoryCache: () => k.D,
        Platform: () => re,
        Platforms: () => ae,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => He.uU,
        RockstarGraphProvider: () => X,
        RockstarTokenProvider: () => N.ec,
        ScrollProvider: () => Me.N2,
        coreScApiFetch: () => n.A,
        detectIfWeShouldAnchorSomewhere: () => oe,
        downloadFile: () => we,
        findPlatform: () => ie,
        generateTpaLink: () => ge,
        getAccentColor: () => r,
        getBase: () => a.A,
        getCdnPrefix: () => me,
        getConfigForDomain: () => s.A,
        getCookieValueByName: () => de,
        getGen8Consoles: () => be,
        getGen9Consoles: () => ye,
        getLanguageLabel: () => xe,
        getUriForGraphEnv: () => i,
        gql: () => Le.J1,
        gtmInit: () => Fe,
        importAll: () => fe,
        isGen9Platform: () => ve,
        makeVar: () => S.UT,
        mutateWebSettings: () => We,
        newswirePost: () => Z,
        oneTrustInit: () => K,
        safeStyles: () => d,
        scrollToElement: () => te,
        setContextItem: () => u.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => Ne.t,
        track: () => Ae,
        useApolloClient: () => W,
        useBase: () => O.RK,
        useBodyScrollable: () => Y,
        useDataLayer: () => Ue,
        useHasReduceMotionPreference: () => O.vx,
        useHasSaveDataPreference: () => O.sb,
        useLocale: () => O.Ym,
        useMutateState: () => y,
        useMutation: () => D,
        useNewswirePost: () => O.CA,
        usePreloadImg: () => O.OG,
        usePrevious: () => O.ZC,
        useQuery: () => U,
        useQueryParams: () => O.sq,
        useReactiveVar: () => h.q,
        useRockstarEventDispatcher: () => O.OH,
        useRockstarEventSubscriber: () => O.zP,
        useRockstarToken: () => N.e9,
        useRockstarTokenPing: () => N.Es,
        useRockstarTokenReactive: () => N.bD,
        useRockstarWebSettings: () => Xe,
        useScApi: () => O.Cb,
        useScAuthLinks: () => O.N6,
        useScroll: () => Me.Ll,
        useScrollTracking: () => O.GA,
        useScrollVisibility: () => O.JE,
        useState: () => w,
        useWindowResize: () => He.G4,
        webSettingsReactive: () => Ve,
        withAutoRouteTracking: () => $e,
        withGtmTracking: () => Oe,
        withMediaBasedProps: () => je,
        withReactiveState: () => x,
        withRockstarGraph: () => H,
        withTranslations: () => Te
      });
      var n = o(60099);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = o(60309),
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
      var c = o(15076),
        l = o.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = o(9482),
        p = o(52690),
        g = o(42295),
        f = o(71127),
        h = o(93452);
      const m = (0, u.A)({
          context: (0, f.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, f.useContext)(m),
        b = (0, u.A)({
          context: (0, f.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, f.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, h.q)(t);
          const o = (0, f.useCallback)(e => {
            const o = {
              ...t(),
              ...e
            };
            t(o)
          }, [t]);
          return (0, g.jsx)(m.Provider, {
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
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...o
            })
          })
        };
      var S = o(21823),
        k = o(19757),
        P = o(75102),
        C = o(88718),
        E = o(13585),
        A = o(46277),
        O = o(56088);
      const j = (e, t) => {
          const o = (0, O.Ym)(),
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
              loading: a,
              error: s,
              ...i
            } = (0, A.IT)(e, n);
          return (0, f.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = l().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, f.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [a]), (0, f.useEffect)(() => {
            if (n.autoSetError && s) throw new Error(String(s))
          }, [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        L = (0, f.createContext)(() => ({
          data: null
        })),
        R = new Promise(e => {
          e()
        }),
        _ = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new k.D)
        },
        T = [() => R, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new P.R(_))
        }],
        M = (0, f.createContext)(() => T),
        I = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, g.jsx)(M.Provider, {
          value: E.n,
          children: (0, g.jsx)(L.Provider, {
            value: j,
            children: e
          })
        })),
        U = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, f.useContext)(L)(e, t)),
        D = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, f.useContext)(M)(e));
      var N = o(20772),
        B = o(6347);
      var $ = o(83605),
        F = o(61162),
        G = o.n(F);
      var z = o(62944),
        q = o(42887);
      const V = (0, z.e)({
          sha256: q.sc
        }),
        W = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const o = e?.env ? i(e?.env) : e?.uri,
            n = {
              ...e,
              uri: o
            },
            [r] = (0, f.useState)(new k.D({
              typePolicies: t
            })),
            a = V.concat((({
              token: e
            }) => (0, B.o)((t, {
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
            }).concat((e => (0, $.$)({
              ...e,
              fetch: G()
            }))(n)));
          return new P.R({
            cache: r,
            link: a
          })
        },
        X = ({
          children: e,
          graphOptions: t,
          typePolicies: o
        }) => {
          const n = W({
            graphOptions: t,
            typePolicies: o ?? {}
          });
          return (0, g.jsx)(N.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: n,
              children: (0, g.jsx)(I, {
                children: e
              })
            })
          })
        },
        H = (e, {
          env: t = "prod"
        }) => {
          const o = (0, S.UT)("");
          return function(n) {
            return (0, g.jsx)(X, {
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
        Q = (0, S.UT)({}),
        J = "data-disallow-body-scroll",
        Y = e => {
          const t = (0, h.q)(Q),
            o = Object.values(t).some(e => !!e);
          return (0, f.useEffect)(() => {
            o ? document.documentElement.setAttribute(J, "true") : document.documentElement.removeAttribute(J)
          }, [o]), {
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
              const e = [...o].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class re {
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
      const ae = Object.freeze({
          pc: new re("pc", "PC Legacy", 8, "sc"),
          ps: new re("ps", "PlayStation", 3, "np", "ps"),
          ps3: new re("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new re("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new re("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new re("xbox", "Xbox", 4, "xbl"),
          xbox360: new re("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new re("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new re("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new re("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new re("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new re("applestore", "App Store", 102, "applestore"),
          googleplay: new re("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new re("app_store", "App Store", 102, "applestore"),
          googlePlay: new re("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new re("pcalt", "PC Enhanced", 22, "sc")
        }),
        se = Object.freeze(Object.values(ae));

      function ie(e) {
        if (!e) return;
        if (e instanceof re) return e;
        const t = e.toString().toLowerCase();
        return se.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var ce = o(6306);
      const le = () => {
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
        ue = (e, t) => {
          e && void 0 !== t && (0, ce.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${le()}; path=/;`)
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
          authHost: r,
          clientId: a
        } = (0, s.A)(), i = await o(), c = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return c.searchParams.append("cid", a), c.searchParams.append("lang", n), c.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && c.searchParams.append("accessToken", i.bearerToken), c
      }, fe = e => e.keys().forEach(e), he = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], me = (e = !0) => he.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null, we = e => {
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
      }, be = () => [ae.xbox360.name, ae.xboxone.name, ae.ps3.name, ae.ps4.name, ae.pc.name], ye = () => [ae.xboxsx.name, ae.ps5.name, ae.pcalt.name], ve = e => ye().includes(e), xe = e => {
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
      var Se = o(89864),
        ke = o.n(Se);
      const Pe = (0, o(79867).A)(),
        Ce = Pe?.id,
        Ee = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        Ae = e => {
          const t = {
            ...e,
            environment: Ce,
            display_type: Ee
          };
          ke().dataLayer({
            dataLayer: t
          })
        },
        Oe = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ae(e)
          }
        }))(e, t),
        je = (e, t = 250) => o => ((e, t, o) => {
          const [n, r] = (0, f.useState)(t), a = e => {
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
          return (0, f.useEffect)(() => {
            const e = l().debounce(() => {
              r(a(t))
            }, o);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), (0, g.jsx)(e, {
            ...n
          })
        })(e, o, t);
      var Le = o(40445),
        Re = o(26675);
      const _e = Le.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        Te = (e, t = "default") => o => ((e, t, o) => {
          const n = ((e = "default") => {
            const t = (0, Re.A)(),
              {
                data: o
              } = U(_e, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return o ? e => o?.translations.find(t => t.key === e)?.value ?? e : null
          })(o);
          return n ? (0, g.jsx)(e, {
            ...t,
            t: n
          }) : null
        })(e, o, t);
      var Me = o(95342);
      const Ie = (0, u.A)({
          context: (0, f.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ue = () => (0, f.useContext)(Ie),
        De = ({
          children: e,
          ...t
        }) => {
          const o = Ue() ?? {},
            n = (0, f.useMemo)(() => ({
              ...o,
              ...t
            }), [o, t]);
          return (0, g.jsx)(Ie.Provider, {
            value: n,
            children: e
          })
        };
      var Ne = o(17954),
        Be = o(9623);
      const $e = e => t => ((e, t) => {
          const {
            pathname: o
          } = (0, Be.useLocation)();
          return (0, f.useEffect)(() => {
            Ae({
              event: "trackPageview"
            })
          }, [o]), (0, g.jsx)(e, {
            ...t
          })
        })(e, t),
        Fe = ({
          id: e
        }) => {
          if (!e) return;
          const t = {
            gtmId: e
          };
          ke().initialize(t)
        };
      var Ge = o(37980);
      const ze = "rockstar-games-web";
      let qe;
      try {
        const e = Ge.A.get(ze) ?? "";
        qe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        qe = {}
      }
      const Ve = (0, S.UT)(qe),
        We = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const o = {
            ...Ve() ?? {}
          };
          return o[e] = t, null === t && delete o[e], Ge.A.set(ze, JSON.stringify(o), {
            expires: 30,
            domain: le(),
            path: "/"
          }), Ve(o), o
        },
        Xe = () => ({
          webSettings: (0, h.q)(Ve),
          webSettingsReactive: Ve,
          mutateWebSettings: We
        });
      var He = o(50437)
    }
  }
]);