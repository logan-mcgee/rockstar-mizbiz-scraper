! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "26a7e4dd-4342-4278-b951-d8249524ace7", e._sentryDebugIdIdentifier = "sentry-dbid-26a7e4dd-4342-4278-b951-d8249524ace7")
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
        ArraySort: () => g,
        Platform: () => d,
        Platforms: () => l,
        default: () => E,
        detectIfWeShouldAnchorSomewhere: () => r,
        downloadFile: () => k,
        findPlatform: () => u,
        flattenObjectPreserveNesting: () => p,
        getCdnPrefix: () => S,
        getGen8Consoles: () => y,
        getGen9Consoles: () => x,
        getLanguageLabel: () => L,
        importAll: () => f,
        isGen9Platform: () => P,
        nestFlattenedObject: () => w,
        prettyPrint: () => h,
        scrollToElement: () => i,
        stripHTML: () => v
      });
      var a = n(4252),
        o = n.n(a);
      const i = e => {
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
        r = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (i({
            element: n
          }), s(n))
        },
        s = e => {
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
      class d {
        constructor(e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = a
        }
      }
      const l = Object.freeze({
          pc: new d("pc", "PC", 8),
          ps: new d("ps", "PlayStation", 3),
          ps3: new d("ps3", "PlayStation 3", 2),
          ps4: new d("ps4", "PlayStation 4", 11),
          ps5: new d("ps5", "PlayStation 5", 20),
          xbox: new d("xbox", "Xbox", 4),
          xbox360: new d("xbox360", "Xbox 360", 1),
          xboxone: new d("xboxone", "Xbox One", 12),
          xboxsx: new d("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new d("switch", "Nintendo Switch™", 18),
          nintendoswitch: new d("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new d("applestore", "App Store", 102),
          googleplay: new d("googleplay", "Google Play", 1023),
          appStore: new d("app_store", "App Store", 102),
          googlePlay: new d("ggle_play", "Google Play", 1023)
        }),
        c = Object.freeze(Object.values(l));

      function u(e) {
        if (!e) return;
        if (e instanceof d) return e;
        const t = e.toString().toLowerCase();
        return c.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var m = n(6632);
      const f = e => e.keys().forEach(e),
        g = {
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
        p = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((a => {
            const o = t ? `${t}.${a}` : a;
            "object" == typeof e[a] && null !== e[a] ? Object.assign(n, p(e[a], o)) : n[o] = e[a]
          })), n
        },
        w = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const a = e[n],
                i = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: a
                  }
                } : {
                  [t]: e
                }));
              o().merge(t, i)
            } else o().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        v = e => e.replace(/(<([^>]+)>)/gi, ""),
        h = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, m.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        b = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        S = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return b.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        k = e => {
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
        y = () => [l.xbox360.name, l.xboxone.name, l.ps3.name, l.ps4.name, l.pc.name],
        x = () => [l.xboxsx.name, l.ps5.name],
        P = e => x().includes(e),
        L = e => {
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
        E = L
    },
    1359: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => l
      });
      var a = n(1482),
        o = n.n(a);
      const i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = (() => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = i.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [a, o] = t;
            return o === n && (e = {
              site: a,
              subDomain: o
            }, !0)
          })) >= 0)), o = i[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        })(),
        s = r?.id,
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
        withGtmTracking: () => i,
        withLocale: () => d,
        withMediaBasedProps: () => m,
        withTranslations: () => g
      });
      var a = n(1359),
        o = n(6632);
      const i = e => t => ((e, t) => (0, o.jsx)(e, {
        ...t,
        gtmTrack: e => {
          (0, a.A)(e)
        }
      }))(e, t);
      var r = n(8407),
        s = n(136);
      const d = e => t => ((e, t) => {
        const n = (0, r.useReactiveVar)(s.locale);
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
          const [a, i] = (0, l.useState)(t), r = e => {
            let t = e;
            const n = t?.items;
            if (n?.length) {
              const e = n.map((e => r(e)));
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
              i(r(t))
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
            } = (0, r.useQuery)(f.Translations, {
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
        useCursorScroll: () => i.useCursorScroll,
        useDataLayer: () => S.useDataLayer,
        useGetPlatformLoginUrl: () => i.useGetPlatformLoginUrl,
        useHasReduceMotionPreference: () => i.useHasReduceMotionPreference,
        useHasSaveDataPreference: () => i.useHasSaveDataPreference,
        useLocale: () => i.useLocale,
        useNewswirePost: () => i.useNewswirePost,
        usePreloadImg: () => i.usePreloadImg,
        usePrevious: () => i.usePrevious,
        useQueryParams: () => i.useQueryParams,
        useRockstarEventDispatcher: () => i.useRockstarEventDispatcher,
        useRockstarEventSubscriber: () => i.useRockstarEventSubscriber,
        useRockstarLocalState: () => i.useRockstarLocalState,
        useRockstarWebLSSettings: () => h.useRockstarWebLSSettings,
        useScApi: () => i.useScApi,
        useScroll: () => i.useScroll,
        useScrollTracking: () => i.useScrollTracking,
        useWindowResize: () => k.G4,
        withGtmTracking: () => a.withGtmTracking,
        withLocale: () => a.withLocale,
        withMediaBasedProps: () => a.withMediaBasedProps,
        withTranslations: () => a.withTranslations
      });
      var a = n(3244),
        o = n(6509),
        i = n(8705),
        r = n(1403),
        s = n(8407);
      const d = (0, s.makeVarNamespace)("@rockstargames/utils")("bodyIsScrollableReactive", {}),
        l = "data-disallow-body-scroll",
        c = e => {
          const t = (0, s.useReactiveVar)(d),
            n = Object.values(t).some((e => !!e));
          return (0, r.useEffect)((() => {
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
        settingsReactive: () => r,
        useRockstarWebLSSettings: () => d
      });
      var a = n(8407);
      const o = "rockstar-games-web";
      let i;
      try {
        const e = window.localStorage.getItem(o);
        i = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        i = {}
      }
      const r = (0, a.makeVar)(i),
        s = e => {
          let {
            key: t,
            value: n
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const a = {
            ...r() ?? {}
          };
          return a[t] = n, null === n && delete a[t], window.localStorage.setItem(o, JSON.stringify(a)), r(a), a
        },
        d = () => ({
          lsSettings: (0, a.useReactiveVar)(r),
          settingsReactive: r,
          mutateLSSettings: s
        })
    },
    4050: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        DataLayerProvider: () => c,
        ResizeProvider: () => o.uU,
        ScrollProvider: () => i.N2,
        newswirePost: () => a,
        useDataLayer: () => l
      });
      var a = n(359),
        o = n(2904),
        i = n(295),
        r = n(1403),
        s = n(6632);
      const d = (0, r.createContext)({}),
        l = () => (0, r.useContext)(d),
        c = e => {
          let {
            children: t,
            ...n
          } = e;
          const a = l() ?? {},
            o = (0, r.useMemo)((() => ({
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
        i = n(6632);
      const r = {
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
            n = r;
          return Object.keys(r).map((t => {
            const {
              min: a,
              max: o
            } = r[t], i = e >= a && e <= o, s = e >= a;
            n[t] = {
              activeExact: i,
              activeMin: s,
              min: a,
              max: o
            }
          })), {
            isMobile: e < r.sm.min,
            isTablet: e < r.md.max,
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
          }), []), (0, i.jsx)(d.Provider, {
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
        var i = a[t] || new Set,
          r = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var a = o(e, t);
          a && n.definitions.push(a)
        })), n
      }(t, "Translations")
    }
  }
]);