try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "81798926-f724-4d0e-8a8f-99d4b7b572d7", e._sentryDebugIdIdentifier = "sentry-dbid-81798926-f724-4d0e-8a8f-99d4b7b572d7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [961], {
    9819(e) {
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
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          n(e, i)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          n(e, i)
        }), e.definitions && e.definitions.forEach(function(e) {
          n(e, i)
        })
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

      function o(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }

      function t(e, i) {
        var n = {
          kind: e.kind,
          definitions: [o(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var t = a[i] || new Set,
          l = new Set,
          d = new Set;
        for (t.forEach(function(e) {
            d.add(e)
          }); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach(function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach(function(e) {
              d.add(e)
            }))
          })
        }
        return l.forEach(function(i) {
          var a = o(e, i);
          a && n.definitions.push(a)
        }), n
      }
      i.definitions.forEach(function(e) {
        if (e.name) {
          var i = new Set;
          n(e, i), a[e.name.value] = i
        }
      }), e.exports = i, e.exports.GifsList = t(i, "GifsList"), e.exports.GifInfo = t(i, "GifInfo")
    },
    7577(e, i, n) {
      "use strict";
      n.r(i), n.d(i, {
        Gif: () => u,
        HashSelector: () => c
      });
      var a = n(39793);
      const o = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e",
        t = ({
          color: e
        }) => (0, a.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, a.jsx)("div", {
            className: o
          }), (0, a.jsx)("div", {
            className: o
          }), (0, a.jsx)("div", {
            className: o
          })]
        });
      var l = n(70193),
        d = (n(48395), n(17301)),
        s = n(13331),
        r = n(9819);
      const f = ({
          field: e,
          input: i,
          meta: n
        }) => {
          const {
            data: o
          } = (0, s.useQuery)(r.GifsList);
          return (0, a.jsx)(d.FieldWrapper, {
            name: i.name || e.name || e.label,
            label: e.label,
            description: e.description,
            meta: n,
            children: o?.gifsList?.length ? (0, a.jsxs)("select", {
              ...i,
              children: [(0, a.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), o.gifsList.map(e => (0, a.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash))]
            }) : (0, a.jsx)(t, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        c = (e = {}) => ({
          label: e?.label ?? "Gif hash",
          name: e?.group ?? "hash",
          description: e?.description ?? "",
          component: ({
            field: e,
            input: i,
            meta: n
          }) => (0, a.jsx)(f, {
            field: e,
            input: i,
            meta: n
          })
        }),
        u = (e = {
          group: "hash"
        }) => ({
          name: e.group,
          label: "Gif",
          fields: [(0, l.om)(), c({
            group: "hash.mobile",
            label: "Mobile Source",
            description: "(If responsive, only Mobile Source is needed)"
          }), c({
            group: "hash.desktop",
            label: "Desktop Source"
          }), (0, l.z9)({
            name: "caption",
            label: "Caption",
            component: "html"
          }), {
            name: "loop",
            label: "Is Looping?",
            description: "Should this gif repeat endlessly?",
            component: "toggle"
          }, (0, l.ho)()],
          defaultItem: () => (0, l.Q)({
            loop: !1
          }),
          itemProps: e => (0, l.Rv)(e, {
            label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
          })
        })
    }
  }
]);