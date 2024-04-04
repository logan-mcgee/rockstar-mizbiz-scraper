/*! For license information please see 8d6c4a7b79b535178de3035574c18e9f.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c667b428-c421-4b1e-a821-72cd750b577f", e._sentryDebugIdIdentifier = "sentry-dbid-c667b428-c421-4b1e-a821-72cd750b577f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [32], {
    576: (e, n, i) => {
      "use strict";
      var t = i(664),
        a = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      n.jsx = function(e, n, i) {
        var t, d = {},
          l = null,
          c = null;
        for (t in void 0 !== i && (l = "" + i), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (c = n.ref), n) o.call(n, t) && !s.hasOwnProperty(t) && (d[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === d[t] && (d[t] = n[t]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: c,
          props: d,
          _owner: r.current
        }
      }
    },
    240: (e, n, i) => {
      "use strict";
      e.exports = i(576)
    },
    300: (e, n, i) => {
      "use strict";
      i.d(n, {
        c: () => l
      });
      var t = i(204),
        a = i.n(t);
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
          } = window, i = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), t = o.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [t, a] = n;
            return a === i && (e = {
              site: t,
              subDomain: a
            }, !0)
          })) >= 0)), a = o[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
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
          a().dataLayer({
            dataLayer: n
          })
        }
    },
    32: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        withGtmTracking: () => o,
        withLocale: () => d,
        withMediaBasedProps: () => f,
        withTranslations: () => v
      });
      var t = i(300),
        a = i(240);
      const o = e => n => ((e, n) => (0, a.jsx)(e, {
        ...n,
        gtmTrack: e => {
          (0, t.c)(e)
        }
      }))(e, n);
      var r = i(52),
        s = i(680);
      const d = e => n => ((e, n) => {
        const i = (0, r.useReactiveVar)(s.locale);
        return (0, a.jsx)(e, {
          ...n,
          locale: i
        })
      })(e, n);
      var l = i(664),
        c = i(660),
        u = i.n(c);
      const f = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return i => ((e, n, i) => {
          const [t, o] = (0, l.useState)(n), r = e => {
            let n = e;
            const i = n?.items;
            if (i?.length) {
              const e = i.map((e => r(e)));
              n = {
                ...n,
                items: e
              }
            }
            const t = n?.mediaQueryList;
            return t?.length ? (t.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              n = {
                ...n,
                ...e
              }
            })), n) : n
          };
          return (0, l.useEffect)((() => {
            const e = u().debounce((() => {
              o(r(n))
            }), i);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, a.jsx)(e, {
            ...t
          })
        })(e, i, n)
      };
      var m = i(448);
      const v = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return i => ((e, n, i) => {
          const t = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: n
            } = (0, r.useQuery)(m.Translations, {
              variables: {
                config: e
              }
            });
            return n ? e => n?.translations.find((n => n.key === e))?.value ?? e : null
          }(i);
          return t ? (0, a.jsx)(e, {
            ...n,
            t
          }) : null
        })(e, i, n)
      }
    },
    448: e => {
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

      function i(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, n)
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
      var t = {};

      function a(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var t = e.definitions[i];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.Translations = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [a(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = t[n] || new Set,
          r = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var t = a(e, n);
          t && i.definitions.push(t)
        })), i
      }(n, "Translations")
    }
  }
]);
//# sourceMappingURL=8d6c4a7b79b535178de3035574c18e9f.js.map