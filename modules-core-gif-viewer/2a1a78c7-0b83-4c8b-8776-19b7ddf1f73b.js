! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2a1a78c7-0b83-4c8b-8776-19b7ddf1f73b", e._sentryDebugIdIdentifier = "sentry-dbid-2a1a78c7-0b83-4c8b-8776-19b7ddf1f73b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [68, 240], {
    99576: (e, n, i) => {
      "use strict";
      var a = i(51664),
        t = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, i) {
        var a, o = {},
          s = null,
          f = null;
        for (a in void 0 !== i && (s = "" + i), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (f = n.ref), n) l.call(n, a) && !d.hasOwnProperty(a) && (o[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === o[a] && (o[a] = n[a]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: f,
          props: o,
          _owner: r.current
        }
      }
      n.Fragment = o, n.jsx = s, n.jsxs = s
    },
    95240: (e, n, i) => {
      "use strict";
      e.exports = i(99576)
    },
    65068: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        Gif: () => c,
        HashSelector: () => f
      });
      var a = i(89468),
        t = i(32104),
        o = i(33052),
        l = i(9860),
        r = i(83632),
        d = i(95240);
      const s = e => {
          let {
            field: n,
            input: i,
            meta: a
          } = e;
          const {
            data: s
          } = (0, o.useQuery)(r.GifsList);
          return (0, d.jsx)(t.FieldWrapper, {
            name: i.name || n.name || n.label,
            label: n.label,
            description: n.description,
            meta: a,
            children: s?.gifsList?.length ? (0, d.jsxs)("select", {
              ...i,
              children: [(0, d.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), s.gifsList.map((e => (0, d.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, d.jsx)(l.DotLoader, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        f = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e?.label ?? "Gif hash",
            name: e?.group ?? "hash",
            description: e?.description ?? "",
            component: e => {
              let {
                field: n,
                input: i,
                meta: a
              } = e;
              return (0, d.jsx)(s, {
                field: n,
                input: i,
                meta: a
              })
            }
          }
        },
        c = function() {
          return {
            name: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              group: "hash"
            }).group,
            label: "Gif",
            fields: [(0, a.NameField)(), f({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), f({
              group: "hash.desktop",
              label: "Desktop Source"
            }), (0, a.translatedField)({
              name: "caption",
              label: "Caption",
              component: "html"
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, (0, a.LeadAssetToggle)()],
            defaultItem: () => (0, a.defaultItemUnique)({
              loop: !1
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          }
        }
    },
    83632: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifsList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
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
                value: "gifsList"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifInfo"
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
                value: "hash"
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
                value: "gifInfo"
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
                  value: "hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hash"
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
                    value: "file"
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
          end: 206
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
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
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

      function o(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          l = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.GifsList = o(n, "GifsList"), e.exports.GifInfo = o(n, "GifInfo")
    }
  }
]);