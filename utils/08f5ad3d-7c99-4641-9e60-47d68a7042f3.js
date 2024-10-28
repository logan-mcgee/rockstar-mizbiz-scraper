! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "08f5ad3d-7c99-4641-9e60-47d68a7042f3", e._sentryDebugIdIdentifier = "sentry-dbid-08f5ad3d-7c99-4641-9e60-47d68a7042f3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [886, 847], {
    6509: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ArraySort: () => f,
        Platform: () => s,
        Platforms: () => d,
        default: () => L,
        detectIfWeShouldAnchorSomewhere: () => i,
        downloadFile: () => S,
        findPlatform: () => c,
        flattenObjectPreserveNesting: () => g,
        getCdnPrefix: () => b,
        getGen8Consoles: () => k,
        getGen9Consoles: () => y,
        getLanguageLabel: () => P,
        importAll: () => m,
        isGen9Platform: () => x,
        nestFlattenedObject: () => p,
        prettyPrint: () => v,
        scrollToElement: () => r,
        stripHTML: () => w
      });
      var a = n(4252),
        o = n.n(a);
      const r = e => {
          let {
            element: t
          } = e;
          const n = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            a = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", a))
            };
          document.addEventListener("scroll", a)
        },
        i = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e));
          n && r({
            element: n
          })
        };
      class s {
        constructor(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = a
        }
      }
      const d = Object.freeze({
          pc: new s("pc", "PC", 8),
          ps: new s("ps", "PlayStation", 3),
          ps3: new s("ps3", "PlayStation 3", 2),
          ps4: new s("ps4", "PlayStation 4", 11),
          ps5: new s("ps5", "PlayStation 5", 20),
          xbox: new s("xbox", "Xbox", 4),
          xbox360: new s("xbox360", "Xbox 360", 1),
          xboxone: new s("xboxone", "Xbox One", 12),
          xboxsx: new s("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new s("switch", "Nintendo Switch™", 18),
          nintendoswitch: new s("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new s("applestore", "App Store", 102),
          googleplay: new s("googleplay", "Google Play", 1023),
          appStore: new s("app_store", "App Store", 102),
          googlePlay: new s("ggle_play", "Google Play", 1023)
        }),
        l = Object.freeze(Object.values(d));

      function c(e) {
        if (!e) return;
        if (e instanceof s) return e;
        const t = e.toString().toLowerCase();
        return l.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var u = n(6632);
      const m = e => e.keys().forEach(e),
        f = {
          alphabetical: {
            asc: (e, t) => [...e].sort(((e, n) => e[t].localeCompare(n[t], "en", {
              ignorePunctuation: !0
            }))).reverse(),
            desc: (e, t) => [...e].sort(((e, n) => e[t].localeCompare(n[t], "en", {
              ignorePunctuation: !0
            })))
          },
          date: {
            asc: (e, t) => [...e].sort(((e, n) => new Date(e[t]).getTime() > new Date(n[t]).getTime() ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, n) => new Date(e[t]).getTime() < new Date(n[t]).getTime() ? 1 : -1))
          },
          numerical: {
            asc: (e, t) => [...e].sort(((e, n) => e[t] > n[t] ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, n) => e[t] < n[t] ? 1 : -1))
          }
        },
        g = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((a => {
            const o = t ? `${t}.${a}` : a;
            "object" == typeof e[a] && null !== e[a] ? Object.assign(n, g(e[a], o)) : n[o] = e[a]
          })), n
        },
        p = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const a = e[n],
                r = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: a
                  }
                } : {
                  [t]: e
                }));
              o().merge(t, r)
            } else o().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        w = e => e.replace(/(<([^>]+)>)/gi, ""),
        v = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, u.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        h = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        b = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return h.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        S = e => {
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
              a = document.createElement("a");
            a.href = t, a.setAttribute("download", n), document.body.appendChild(a), a.click(), document.body.removeChild(a)
          })).catch((e => {
            console.log(e)
          }))
        },
        k = () => [d.xbox360.name, d.xboxone.name, d.ps3.name, d.ps4.name, d.pc.name],
        y = () => [d.xboxsx.name, d.ps5.name],
        x = e => y().includes(e),
        P = e => {
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
        },
        L = P
    },
    1359: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => l
      });
      var a = n(1482),
        o = n.n(a);
      const r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        i = (() => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [a, o] = t;
            return o === n && (e = {
              site: a,
              subDomain: o
            }, !0)
          })) >= 0)), o = r[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        })(),
        s = i?.id,
        d = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: s,
            display_type: d
          };
          o().dataLayer({
            dataLayer: t
          })
        }
    },
    3244: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        withGtmTracking: () => r,
        withLocale: () => d,
        withMediaBasedProps: () => m,
        withTranslations: () => g
      });
      var a = n(1359),
        o = n(6632);
      const r = e => t => ((e, t) => (0, o.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, a.A)(e)
        }
      }))(e, t);
      var i = n(8407),
        s = n(136);
      const d = e => t => ((e, t) => {
        const n = (0, i.useReactiveVar)(s.locale);
        return (0, o.jsx)(e, {
          ...t,
          locale: n
        })
      })(e, t);
      var l = n(1403),
        c = n(4252),
        u = n.n(c);
      const m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return n => ((e, t, n) => {
          const [a, r] = (0, l.useState)(t), i = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map((e => i(e)));
              t = {
                ...t,
                items: e
              }
            }
            const a = t?.mediaQueryList;
            return a?.length ? (a.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              t = {
                ...t,
                ...e
              }
            })), t) : t
          };
          return (0, l.useEffect)((() => {
            const e = u().debounce((() => {
              r(i(t))
            }), n);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, o.jsx)(e, {
            ...a
          })
        })(e, n, t)
      };
      var f = n(2529);
      const g = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return n => ((e, t, n) => {
          const a = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: t
            } = (0, i.useQuery)(f.Translations, {
              variables: {
                config: e
              }
            });
            return t ? e => t?.translations.find((t => t.key === e))?.value ?? e : null
          }(n);
          return a ? (0, o.jsx)(e, {
            ...t,
            t: a
          }) : null
        })(e, n, t)
      }
    },
    3886: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => S.DataLayerProvider,
        Platform: () => o.Platform,
        Platforms: () => o.Platforms,
        ResizeProvider: () => k.uU,
        coreScApiFetch: () => u.A,
        detectIfWeShouldAnchorSomewhere: () => o.detectIfWeShouldAnchorSomewhere,
        downloadFile: () => o.downloadFile,
        findPlatform: () => o.findPlatform,
        getAccentColor: () => m,
        getCdnPrefix: () => o.getCdnPrefix,
        getGen8Consoles: () => o.getGen8Consoles,
        getGen9Consoles: () => o.getGen9Consoles,
        getLanguageLabel: () => o.getLanguageLabel,
        getScConfigForOrigin: () => f.A,
        importAll: () => o.importAll,
        isGen9Platform: () => o.isGen9Platform,
        lsSettingsReactive: () => h.settingsReactive,
        mutateLSSettings: () => h.mutateLSSettings,
        safeStyles: () => v,
        scrollToElement: () => o.scrollToElement,
        supportedBrowsers: () => b,
        toScLocaleString: () => g.t,
        useBodyScrollable: () => c,
        useCursorScroll: () => r.useCursorScroll,
        useDataLayer: () => S.useDataLayer,
        useGetPlatformLoginUrl: () => r.useGetPlatformLoginUrl,
        useHasReduceMotionPreference: () => r.useHasReduceMotionPreference,
        useHasSaveDataPreference: () => r.useHasSaveDataPreference,
        useLocale: () => r.useLocale,
        useNewswirePost: () => r.useNewswirePost,
        usePreloadImg: () => r.usePreloadImg,
        usePrevious: () => r.usePrevious,
        useQueryParams: () => r.useQueryParams,
        useRockstarEventDispatcher: () => r.useRockstarEventDispatcher,
        useRockstarEventSubscriber: () => r.useRockstarEventSubscriber,
        useRockstarLocalState: () => r.useRockstarLocalState,
        useRockstarWebLSSettings: () => h.useRockstarWebLSSettings,
        useScApi: () => r.useScApi,
        useScroll: () => r.useScroll,
        useScrollTracking: () => r.useScrollTracking,
        useWindowResize: () => k.G4,
        withGtmTracking: () => a.withGtmTracking,
        withLocale: () => a.withLocale,
        withMediaBasedProps: () => a.withMediaBasedProps,
        withTranslations: () => a.withTranslations
      });
      var a = n(3244),
        o = n(6509),
        r = n(8705),
        i = n(1403),
        s = n(8407);
      const d = (0, s.makeVarNamespace)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        l = "data-disallow-body-scroll",
        c = e => {
          const t = (0, s.useReactiveVar)(d),
            n = Object.values(t).some((e => !!e));
          return (0, i.useEffect)((() => {
            n ? document.documentElement.setAttribute(l, "true") : document.documentElement.removeAttribute(l)
          }), [n]), {
            bodyShouldLock: n,
            setBodyIsLocked: n => (e => d(e))({
              ...t,
              [e]: n
            })
          }
        };
      var u = n(156);
      const m = e => e.includes("reddead") || e.includes("rdr") ? "#CC0000" : e.includes("bully") ? "#F8AD00" : "#FCAF17";
      var f = n(6088),
        g = n(5577),
        p = n(4252),
        w = n.n(p);
      const v = e => {
        const t = w().clone(e);
        return t?.["margin-top"] && (t.marginTop = t["margin-top"]), t?.["margin-bottom"] && (t.marginBottom = t["margin-bottom"]), t?.["margin-left"] && (t.marginLeft = t["margin-left"]), t?.["margin-right"] && (t.marginRight = t["margin-right"]), t?.["object-fit"] && (t.objectFit = t["object-fit"]), delete t?.["margin-top"], delete t?.["margin-bottom"], delete t?.["margin-right"], delete t?.["margin-left"], delete t?.["object-fit"], t
      };
      var h = n(6847);
      const b = /Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Firefox\/(10[2-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Maci.+ Version\/(15\.([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(16[._]\d+|(1[7-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}[6-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/;
      var S = n(4050),
        k = n(2904)
    },
    6847: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        mutateLSSettings: () => s,
        settingsReactive: () => i,
        useRockstarWebLSSettings: () => d
      });
      var a = n(8407);
      const o = "rockstar-games-web";
      let r;
      try {
        const e = window.localStorage.getItem(o);
        r = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        r = {}
      }
      const i = (0, a.makeVar)(r),
        s = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const a = {
            ...i() ?? {}
          };
          return a[t] = n, null === n && delete a[t], window.localStorage.setItem(o, JSON.stringify(a)), i(a), a
        },
        d = () => ({
          lsSettings: (0, a.useReactiveVar)(i),
          settingsReactive: i,
          mutateLSSettings: s
        })
    },
    4050: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => c,
        ResizeProvider: () => o.uU,
        ScrollProvider: () => r.N2,
        newswirePost: () => a,
        useDataLayer: () => l
      });
      var a = n(359),
        o = n(2904),
        r = n(295),
        i = n(1403),
        s = n(6632);
      const d = (0, i.createContext)({}),
        l = () => (0, i.useContext)(d),
        c = e => {
          let {
            children: t,
            ...n
          } = e;
          const a = l() ?? {},
            o = (0, i.useMemo)((() => ({
              ...a,
              ...n
            })), [a, n]);
          return (0, s.jsx)(d.Provider, {
            value: o,
            children: t
          })
        }
    },
    2904: (e, t, n) => {
      "use strict";
      n.d(t, {
        G4: () => m,
        uU: () => u
      });
      var a = n(1403),
        o = n(8407),
        r = n(6632);
      const i = {
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
        s = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = i;
          return Object.keys(i).map((t => {
            const {
              min: a,
              max: o
            } = i[t], r = e >= a && e <= o, s = e >= a;
            n[t] = {
              activeExact: r,
              activeMin: s,
              min: a,
              max: o
            }
          })), {
            isMobile: e < i.sm.min,
            isTablet: e < i.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        d = (0, a.createContext)(s()),
        {
          Consumer: l
        } = d,
        c = (0, o.makeVar)(s()),
        u = e => {
          let {
            children: t
          } = e;
          const n = (0, o.useReactiveVar)(c);
          return (0, a.useEffect)((() => {
            const e = () => {
              c(s())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, r.jsx)(d.Provider, {
            value: n,
            children: t
          })
        },
        m = () => (0, a.useContext)(d)
    },
    2529: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Translations"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "config"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "translations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "config"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "config"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 144
        }
      };

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
        }))
      }
      t.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function o(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), a[e.name.value] = t
        }
      })), e.exports = t, e.exports.Translations = function(e, t) {
        var n = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var r = a[t] || new Set,
          i = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            i.has(e) || (i.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var a = o(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "Translations")
    }
  }
]);