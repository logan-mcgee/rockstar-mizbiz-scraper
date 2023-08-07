/*! For license information please see 0947186146e0f4783014.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [215], {
    215: (e, i, n) => {
      "use strict";
      n.r(i), n.d(i, {
        Gif: () => f,
        HashSelector: () => c
      });
      var a = n(616),
        t = n(374),
        o = n(859),
        l = n(976),
        r = n(849),
        s = n(160);
      const d = e => {
          let {
            field: i,
            input: n,
            meta: a
          } = e;
          const {
            data: d
          } = (0, o.useQuery)(r.GifsList);
          return (0, s.jsx)(t.FieldWrapper, {
            name: n.name || i.name || i.label,
            label: i.label,
            description: i.description,
            meta: a,
            children: d?.gifsList?.length ? (0, s.jsxs)("select", {
              ...n,
              children: [(0, s.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), d.gifsList.map((e => (0, s.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, s.jsx)(l.DotLoader, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        c = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e?.label ?? "Gif hash",
            name: e?.group ?? "hash",
            description: e?.description ?? "",
            component: e => {
              let {
                field: i,
                input: n,
                meta: a
              } = e;
              return (0, s.jsx)(d, {
                field: i,
                input: n,
                meta: a
              })
            }
          }
        },
        f = function() {
          return {
            name: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              group: "hash"
            }).group,
            label: "Gif",
            fields: [(0, a.NameField)(), c({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), c({
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
    970: (e, i, n) => {
      "use strict";
      var a = n(932),
        t = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, i, n) {
        var a, s = {},
          d = null,
          c = null;
        for (a in void 0 !== n && (d = "" + n), void 0 !== i.key && (d = "" + i.key), void 0 !== i.ref && (c = i.ref), i) o.call(i, a) && !r.hasOwnProperty(a) && (s[a] = i[a]);
        if (e && e.defaultProps)
          for (a in i = e.defaultProps) void 0 === s[a] && (s[a] = i[a]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: l.current
        }
      }
      i.jsx = s, i.jsxs = s
    },
    160: (e, i, n) => {
      "use strict";
      e.exports = n(970)
    },
    849: e => {
      var i = {
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

      function n(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && i.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, i)
        }))
      }
      i.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }

      function o(e, i) {
        var n = {
          kind: e.kind,
          definitions: [t(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = a[i] || new Set,
          l = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(i) {
          var a = t(e, i);
          a && n.definitions.push(a)
        })), n
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          n(e, i), a[e.name.value] = i
        }
      })), e.exports = i, e.exports.GifsList = o(i, "GifsList"), e.exports.GifInfo = o(i, "GifInfo")
    }
  }
]);