/*! For license information please see c64cea3951348de3dc81fe8a5eb55428.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5070377c-ba4c-492f-9616-11b42fcacb83", e._sentryDebugIdIdentifier = "sentry-dbid-5070377c-ba4c-492f-9616-11b42fcacb83")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [948], {
    996: (e, n, a) => {
      "use strict";
      var i = a(200),
        t = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      n.jsx = function(e, n, a) {
        var i, d = {},
          l = null,
          c = null;
        for (i in void 0 !== a && (l = "" + a), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (c = n.ref), n) o.call(n, i) && !s.hasOwnProperty(i) && (d[i] = n[i]);
        if (e && e.defaultProps)
          for (i in n = e.defaultProps) void 0 === d[i] && (d[i] = n[i]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: c,
          props: d,
          _owner: r.current
        }
      }
    },
    480: (e, n, a) => {
      "use strict";
      e.exports = a(996)
    },
    226: (e, n, a) => {
      "use strict";
      a.d(n, {
        c: () => l
      });
      var i = a(204),
        t = a.n(i);
      const o = [{
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
            location: n
          } = window, a = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), i = o.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [i, t] = n;
            return t === a && (e = {
              site: i,
              subDomain: t
            }, !0)
          })) >= 0));
          return {
            ...o[i >= 0 ? i : 0],
            currentSite: e
          }
        })(),
        s = r?.id,
        d = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const n = {
            ...e,
            environment: s,
            display_type: d
          };
          t().dataLayer({
            dataLayer: n
          })
        }
    },
    948: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        withGtmTracking: () => o,
        withLocale: () => d,
        withMediaBasedProps: () => u,
        withTranslations: () => v
      });
      var i = a(226),
        t = a(480);
      const o = e => n => ((e, n) => (0, t.jsx)(e, {
        ...n,
        gtmTrack: e => {
          (0, i.c)(e)
        }
      }))(e, n);
      var r = a(52),
        s = a(680);
      const d = e => n => ((e, n) => {
        const a = (0, r.useReactiveVar)(s.locale);
        return (0, t.jsx)(e, {
          ...n,
          locale: a
        })
      })(e, n);
      var l = a(200),
        c = a(660),
        f = a.n(c);
      const u = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return a => ((e, n, a) => {
          const [i, o] = (0, l.useState)(n), r = e => {
            let n = e;
            const a = n?.items;
            if (a?.length) {
              const e = a.map((e => r(e)));
              n = {
                ...n,
                items: e
              }
            }
            const i = n?.mediaQueryList;
            return i?.length ? (i.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              n = {
                ...n,
                ...e
              }
            })), n) : n
          };
          return (0, l.useEffect)((() => {
            const e = f().debounce((() => {
              o(r(n))
            }), a);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, t.jsx)(e, {
            ...i
          })
        })(e, a, n)
      };
      var m = a(371);
      const v = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return a => ((e, n, a) => {
          const i = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: n
            } = (0, r.useQuery)(m.Translations, {
              variables: {
                config: e
              }
            });
            return n ? e => n?.translations.find((n => n.key === e))?.value ?? e : null
          }(a);
          return i ? (0, t.jsx)(e, {
            ...n,
            t: i
          }) : null
        })(e, a, n)
      }
    },
    371: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.Translations = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = i[n] || new Set,
          r = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "Translations")
    }
  }
]);
//# sourceMappingURL=c64cea3951348de3dc81fe8a5eb55428.js.map