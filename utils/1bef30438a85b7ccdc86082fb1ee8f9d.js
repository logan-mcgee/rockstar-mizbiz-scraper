! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0d3bc65a-5a8e-44b7-81eb-415acb63c1bd", e._sentryDebugIdIdentifier = "sentry-dbid-0d3bc65a-5a8e-44b7-81eb-415acb63c1bd")
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
  [32], {
    576: (e, n, i) => {
      "use strict";
      var a = i(664),
        t = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      n.jsx = function(e, n, i) {
        var a, l = {},
          d = null,
          c = null;
        for (a in void 0 !== i && (d = "" + i), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (c = n.ref), n) o.call(n, a) && !s.hasOwnProperty(a) && (l[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === l[a] && (l[a] = n[a]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: c,
          props: l,
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
        c: () => d
      });
      var a = i(204),
        t = i.n(a);
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
          } = window, i = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), a = o.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [a, t] = n;
            return t === i && (e = {
              site: a,
              subDomain: t
            }, !0)
          })) >= 0)), t = o[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...t,
            currentSite: e
          }
        })(),
        s = r?.id,
        l = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        d = e => {
          const n = {
            ...e,
            environment: s,
            display_type: l
          };
          t().dataLayer({
            dataLayer: n
          })
        }
    },
    32: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        withGtmTracking: () => o,
        withLocale: () => l,
        withMediaBasedProps: () => f,
        withTranslations: () => v
      });
      var a = i(300),
        t = i(240);
      const o = e => n => ((e, n) => (0, t.jsx)(e, {
        ...n,
        gtmTrack: e => {
          (0, a.c)(e)
        }
      }))(e, n);
      var r = i(52),
        s = i(680);
      const l = e => n => ((e, n) => {
        const i = (0, r.useReactiveVar)(s.locale);
        return (0, t.jsx)(e, {
          ...n,
          locale: i
        })
      })(e, n);
      var d = i(664),
        c = i(660),
        u = i.n(c);
      const f = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return i => ((e, n, i) => {
          const [a, o] = (0, d.useState)(n), r = e => {
            let n = e;
            const i = n?.items;
            if (i?.length) {
              const e = i.map((e => r(e)));
              n = {
                ...n,
                items: e
              }
            }
            const a = n?.mediaQueryList;
            return a?.length ? (a.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              n = {
                ...n,
                ...e
              }
            })), n) : n
          };
          return (0, d.useEffect)((() => {
            const e = u().debounce((() => {
              o(r(n))
            }), i);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, t.jsx)(e, {
            ...a
          })
        })(e, i, n)
      };
      var m = i(448);
      const v = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return i => ((e, n, i) => {
          const a = function() {
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
          return a ? (0, t.jsx)(e, {
            ...n,
            t: a
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
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
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
      var a = {};

      function t(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.Translations = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          r = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }(n, "Translations")
    }
  }
]);