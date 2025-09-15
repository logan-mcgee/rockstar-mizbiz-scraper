try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5c89b18f-8963-4eeb-b571-ed8d26378e2e", e._sentryDebugIdIdentifier = "sentry-dbid-5c89b18f-8963-4eeb-b571-ed8d26378e2e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2295, 2399, 4676, 5941, 7533, 7637, 9757], {
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    69245: (e, t, n) => {
      var o = n(71127),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var o, a = {},
          l = null,
          d = null;
        for (o in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, o) && !c.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
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
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function o(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? i((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
      }

      function r(e, t, n) {
        return e.concat(t).map((function(e) {
          return o(e, n)
        }))
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function i(e, n, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || r, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = o;
        var l = Array.isArray(n);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, n, c) : function(e, t, n) {
          var r = {};
          return n.isMergeableObject(e) && a(e).forEach((function(t) {
            r[t] = o(e[t], n)
          })), a(t).forEach((function(a) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, a) || (s(e, a) && n.isMergeableObject(t[a]) ? r[a] = function(e, t) {
              if (!t.customMerge) return i;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : i
            }(a, n)(e[a], t[a], n) : r[a] = o(t[a], n))
          })), r
        }(e, n, c) : o(n, c)
      }
      i.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, n) {
          return i(e, n, t)
        }), {})
      };
      var c = i;
      e.exports = c
    },
    79867: (e, t, n) => {
      n.d(t, {
        A: () => a,
        C: () => o
      });
      const o = {
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((([t, o]) => o === n && (e = {
            site: t,
            subDomain: o
          }, !0))) >= 0)), a = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    89757: (e, t, n) => {
      n.r(t), n.d(t, {
        ApolloClient: () => P.R,
        ApolloProvider: () => C.X,
        DataLayerProvider: () => De,
        GraphOperationsProvider: () => I,
        InMemoryCache: () => S.D,
        Platform: () => re,
        Platforms: () => ae,
        ReactiveStateProvider: () => v,
        ResizeProvider: () => He.uU,
        RockstarGraphProvider: () => V,
        RockstarTokenProvider: () => B.ec,
        ScrollProvider: () => Me.N2,
        coreScApiFetch: () => o.A,
        detectIfWeShouldAnchorSomewhere: () => ne,
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
        importAll: () => he,
        isGen9Platform: () => ve,
        makeVar: () => k.UT,
        mutateWebSettings: () => Xe,
        newswirePost: () => Z,
        oneTrustInit: () => K,
        safeStyles: () => d,
        scrollToElement: () => te,
        setContextItem: () => u.A,
        setCookieValue: () => ue,
        setMakeVarItem: () => p.A,
        supportedBrowsers: () => ee,
        toScLocaleString: () => Be.t,
        track: () => Ee,
        useApolloClient: () => X,
        useBase: () => O.RK,
        useBodyScrollable: () => J,
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
        useReactiveVar: () => f.q,
        useRockstarEventDispatcher: () => O.OH,
        useRockstarEventSubscriber: () => O.zP,
        useRockstarToken: () => B.e9,
        useRockstarTokenPing: () => B.Es,
        useRockstarTokenReactive: () => B.bD,
        useRockstarWebSettings: () => Ve,
        useScApi: () => O.Cb,
        useScAuthLinks: () => O.N6,
        useScAuthTpaLink: () => O.Br,
        useScroll: () => Me.Ll,
        useScrollTracking: () => O.GA,
        useState: () => w,
        useWindowResize: () => He.G4,
        webSettingsReactive: () => We,
        withAutoRouteTracking: () => $e,
        withGtmTracking: () => Oe,
        withMediaBasedProps: () => je,
        withReactiveState: () => x,
        withRockstarGraph: () => H,
        withTranslations: () => _e
      });
      var o = n(60099);
      const r = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var a = n(60309),
        s = n(45547);
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
      var c = n(16188),
        l = n.n(c);
      const d = e => {
        const t = l().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), t?.["min-height"] && (t.minHeight = t["min-height"]), t?.["max-height"] && (t.maxHeight = t["max-height"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], delete t?.["min-height"], delete t?.["max-height"], t
      };
      var u = n(9482),
        p = n(52690),
        g = n(42295),
        h = n(71127),
        f = n(93452);
      const m = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextGet"
        }),
        w = () => (0, h.useContext)(m),
        b = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "graphContextSet"
        }),
        y = () => (0, h.useContext)(b),
        v = ({
          children: e,
          state: t
        }) => {
          (0, f.q)(t);
          const n = (0, h.useCallback)((e => {
            const n = {
              ...t(),
              ...e
            };
            t(n)
          }), [t]);
          return (0, g.jsx)(m.Provider, {
            value: t(),
            children: (0, g.jsx)(b.Provider, {
              value: n,
              children: e
            })
          })
        },
        x = (e, {
          state: t
        }) => function(n) {
          return (0, g.jsx)(v, {
            state: t,
            children: (0, g.jsx)(e, {
              ...n
            })
          })
        };
      var k = n(21823),
        S = n(19757),
        P = n(75102),
        C = n(88718),
        A = n(13585),
        E = n(46277),
        O = n(72148);
      const j = (e, t) => {
          const n = (0, O.Ym)(),
            o = {
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
              data: r,
              loading: a,
              error: s,
              ...i
            } = (0, E.IT)(e, o);
          return (0, h.useEffect)((() => {
            if (r && o.setTitleDataPath) {
              const e = l().get(r, o.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }), [r]), (0, h.useEffect)((() => (o.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: a
          }), () => {
            o.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          })), [a]), (0, h.useEffect)((() => {
            if (o.autoSetError && s) throw new Error(String(s))
          }), [s]), {
            loading: a,
            error: s,
            data: r,
            ...i
          }
        },
        L = (0, h.createContext)((() => ({
          data: null
        }))),
        R = new Promise((e => {
          e()
        })),
        T = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new S.D)
        },
        _ = [() => R, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new P.R(T))
        }],
        M = (0, h.createContext)((() => _)),
        I = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, g.jsx)(M.Provider, {
          value: A.n,
          children: (0, g.jsx)(L.Provider, {
            value: j,
            children: e
          })
        })),
        U = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, t) => (0, h.useContext)(L)(e, t)),
        D = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, h.useContext)(M)(e));
      var B = n(20772),
        N = n(6347);
      var $ = n(83605),
        F = n(61162),
        G = n.n(F);
      var z = n(62944),
        q = n(42887);
      const W = (0, z.e)({
          sha256: q.sc
        }),
        X = ({
          graphOptions: e,
          typePolicies: t = {}
        }) => {
          const n = e?.env ? i(e?.env) : e?.uri,
            o = {
              ...e,
              uri: n
            },
            [r] = (0, h.useState)(new S.D({
              typePolicies: t
            })),
            a = W.concat((({
              token: e
            }) => (0, N.o)(((t, {
              headers: n
            }) => {
              const o = e?.() ?? null;
              return o ? {
                headers: {
                  ...n,
                  authorization: `Bearer ${o}`
                }
              } : null
            })))({
              token: e?.token
            }).concat((e => (0, $.$)({
              ...e,
              fetch: G()
            }))(o)));
          return new P.R({
            cache: r,
            link: a
          })
        },
        V = ({
          children: e,
          graphOptions: t,
          typePolicies: n
        }) => {
          const o = X({
            graphOptions: t,
            typePolicies: n ?? {}
          });
          return (0, g.jsx)(B.ec, {
            token: t?.token,
            children: (0, g.jsx)(C.X, {
              client: o,
              children: (0, g.jsx)(I, {
                children: e
              })
            })
          })
        },
        H = (e, {
          env: t = "prod"
        }) => {
          const n = (0, k.UT)("");
          return function(o) {
            return (0, g.jsx)(V, {
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
        Q = (0, k.UT)({}),
        Y = "data-disallow-body-scroll",
        J = e => {
          const t = (0, f.q)(Q),
            n = Object.values(t).some((e => !!e));
          return (0, h.useEffect)((() => {
            n ? document.documentElement.setAttribute(Y, "true") : document.documentElement.removeAttribute(Y)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => Q(e))({
              ...t,
              [e]: n
            })
          }
        },
        K = ({
          id: e,
          init: t
        }) => {
          if (e) {
            const n = document.createElement("script");
            n.onload = () => t(), n.onerror = () => t(), n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.setAttribute("data-domain-script", e), n.setAttribute("data-document-language", "true"), document.head.appendChild(n)
          } else t()
        };
      var Z = n(89656);
      const ee = /Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/,
        te = ({
          element: e
        }) => {
          const t = setInterval((() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            n = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        ne = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (te({
            element: n
          }), oe(n))
        },
        oe = e => {
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
      class re {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, o, r = null, a = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = o, this.aliasOnlineService = r, this.alias = a
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
        return se.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var ce = n(6306);
      const le = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        de = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            o = t.find((e => e.startsWith(n))),
            r = o?.substring(n.length, o.length);
          return r
        },
        ue = (e, t) => {
          e && void 0 !== t && (0, ce.canStoreCookie)(e) && de(e) !== t && (document.cookie = `${e}=${t}; domain=${le()}; path=/;`)
        };
      var pe = n(81788);
      const ge = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, pe.getLocale)(), {
          authHost: r,
          clientId: a
        } = (0, s.A)(), i = await n(), c = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return c.searchParams.append("cid", a), c.searchParams.append("lang", o), c.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && c.searchParams.append("accessToken", i.bearerToken), c
      }, he = e => e.keys().forEach(e), fe = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], me = (e = !0) => fe.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null, we = e => {
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
      var ke = n(89864),
        Se = n.n(ke);
      const Pe = (0, n(79867).A)(),
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
        Oe = e => t => ((e, t) => (0, g.jsx)(e, {
          ...t,
          gtmTrack: e => {
            Ee(e)
          }
        }))(e, t),
        je = (e, t = 250) => n => ((e, t, n) => {
          const [o, r] = (0, h.useState)(t), a = e => {
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
          return (0, h.useEffect)((() => {
            const e = l().debounce((() => {
              r(a(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, g.jsx)(e, {
            ...o
          })
        })(e, n, t);
      var Le = n(40445),
        Re = n(26675);
      const Te = Le.J1`
query Translations($locale: String!, $config: String!) {
    translations(locale: $locale, config: $config) {
        key
        value
    }
}`,
        _e = (e, t = "default") => n => ((e, t, n) => {
          const o = ((e = "default") => {
            const t = (0, Re.A)(),
              {
                data: n
              } = U(Te, {
                variables: {
                  config: e,
                  locale: t
                }
              });
            return n ? e => n?.translations.find((t => t.key === e))?.value ?? e : null
          })(n);
          return o ? (0, g.jsx)(e, {
            ...t,
            t: o
          }) : null
        })(e, n, t);
      var Me = n(95342);
      const Ie = (0, u.A)({
          context: (0, h.createContext)({}),
          key: "gtmDatalayer"
        }),
        Ue = () => (0, h.useContext)(Ie),
        De = ({
          children: e,
          ...t
        }) => {
          const n = Ue() ?? {},
            o = (0, h.useMemo)((() => ({
              ...n,
              ...t
            })), [n, t]);
          return (0, g.jsx)(Ie.Provider, {
            value: o,
            children: e
          })
        };
      var Be = n(17954),
        Ne = n(9623);
      const $e = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, Ne.useLocation)();
          return (0, h.useEffect)((() => {
            Ee({
              event: "trackPageview"
            })
          }), [n]), (0, g.jsx)(e, {
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
          Se().initialize(t)
        };
      var Ge = n(37980);
      const ze = "rockstar-games-web";
      let qe;
      try {
        const e = Ge.A.get(ze) ?? "";
        qe = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        qe = {}
      }
      const We = (0, k.UT)(qe),
        Xe = ({
          key: e,
          value: t
        }) => {
          if (null == e) throw Error("You have to specify a key and a value.");
          const n = {
            ...We() ?? {}
          };
          return n[e] = t, null === t && delete n[e], Ge.A.set(ze, JSON.stringify(n), {
            expires: 30,
            domain: le(),
            path: "/"
          }), We(n), n
        },
        Ve = () => ({
          webSettings: (0, f.q)(We),
          webSettingsReactive: We,
          mutateWebSettings: Xe
        });
      var He = n(50437)
    }
  }
]);