! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cd7a5d89-d353-45c5-a786-47acf5868e63", e._sentryDebugIdIdentifier = "sentry-dbid-cd7a5d89-d353-45c5-a786-47acf5868e63")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [3413], {
    148: (e, n, i) => {
      "use strict";
      i.d(n, {
        A: () => t
      });
      const a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        t = () => {
          let e;
          const {
            location: n
          } = window, i = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), t = a.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [a, t] = n;
            return t === i && (e = {
              site: a,
              subDomain: t
            }, !0)
          })) >= 0)), o = a[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        }
    },
    1398: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
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
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
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
                value: "tagList"
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
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
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
          end: 131
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
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
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
      })), e.exports = n, e.exports.TagList = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          r = new Set,
          l = new Set;
        for (o.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (a[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }(n, "TagList")
    },
    1910: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        Gif: () => y,
        HashSelector: () => g
      });
      const a = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e";
      var t = i(5854);
      const o = e => {
        let {
          color: n
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": n
          },
          children: [(0, t.jsx)("div", {
            className: a
          }), (0, t.jsx)("div", {
            className: a
          }), (0, t.jsx)("div", {
            className: a
          })]
        })
      };
      var r = i(9311);
      var l = i(2229),
        d = i(5966);
      const s = (0, d.setContextItem)({
          context: (0, l.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: c
        } = s,
        u = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, t.jsx)("hr", {})
          }
        };
      u("Background Image Gradient"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), u("Background Image Gradient"), i(148), i(6481);
      const f = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, t.jsx)("hr", {})
        }
      };
      var m = i(6536);
      const v = e => {
          let {
            style: n,
            width: i,
            height: a,
            resizable: o,
            field: r,
            input: d,
            meta: s,
            name: c,
            label: u,
            description: f,
            error: v,
            children: k
          } = e;
          const h = () => o ? (0, t.jsx)(m.c, {
            defaultSize: {
              width: i || "100%",
              height: a || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, l.cloneElement)(k, ...d)
          }) : k;
          return (0, t.jsxs)("div", {
            className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: n,
            children: [(0, t.jsxs)("label", {
              className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: c ?? r?.name,
              children: [u ?? r?.label, (0, t.jsx)("span", {
                className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: f ?? r?.description
              })]
            }), (0, t.jsx)(h, {}), (v || s?.error) && (0, t.jsx)("div", {
              className: "FieldError_sc_custom",
              children: v ?? s?.error
            })]
          })
        },
        k = (f("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), f("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => h({
            hero: !1
          })
        }));
      i(1398);
      const h = function() {
        return {
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          key: `key_${(0,r.A)()}`
        }
      };
      var p = i(4235);
      const b = e => {
          let {
            field: n,
            input: i,
            meta: a
          } = e;
          const {
            data: r
          } = (0, d.useQuery)(p.GifsList);
          return (0, t.jsx)(v, {
            name: i.name || n.name || n.label,
            label: n.label,
            description: n.description,
            meta: a,
            children: r?.gifsList?.length ? (0, t.jsxs)("select", {
              ...i,
              children: [(0, t.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), r.gifsList.map((e => (0, t.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, t.jsx)(o, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        g = function() {
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
              return (0, t.jsx)(b, {
                field: n,
                input: i,
                meta: a
              })
            }
          }
        },
        y = function() {
          return {
            name: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              group: "hash"
            }).group,
            label: "Gif",
            fields: [{
              label: "Name",
              name: "name",
              component: "text",
              description: "Block label for internal use only"
            }, g({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), g({
              group: "hash.desktop",
              label: "Desktop Source"
            }), (e = {
              name: "caption",
              label: "Caption",
              component: "html"
            }, {
              ...e,
              name: `_memoq.${e.name}`
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, k()],
            defaultItem: () => h({
              loop: !1
            }),
            itemProps: e => function(e) {
              return {
                ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                key: e.key
              }
            }(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          };
          var e
        }
    },
    3019: (e, n, i) => {
      var a = {
        "./de": [1261, 6879],
        "./en": [7157, 2243],
        "./es": [8194, 278],
        "./fr": [3034, 9022],
        "./it": [8271, 2365],
        "./ja": [6083, 9377],
        "./ko": [1324, 9028],
        "./pl": [9090, 1242],
        "./pt": [4698, 7970],
        "./ru": [3695, 7453],
        "./zh": [7188, 8880]
      };

      function t(e) {
        if (!i.o(a, e)) return Promise.resolve().then((() => {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }));
        var n = a[e],
          t = n[0];
        return i.e(n[1]).then((() => i.t(t, 23)))
      }
      t.keys = () => Object.keys(a), t.id = 3019, e.exports = t
    },
    3514: (e, n, i) => {
      var a = {
        "./de": [6304, 4710],
        "./en": [3832, 3486],
        "./es": [4579, 4011],
        "./fr": [2951, 4851],
        "./it": [5014, 9936],
        "./ja": [5422, 2156],
        "./ko": [6373, 3885],
        "./pl": [1923, 6891],
        "./pt": [267, 3475],
        "./ru": [2282, 4528],
        "./zh": [7749, 4861]
      };

      function t(e) {
        if (!i.o(a, e)) return Promise.resolve().then((() => {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }));
        var n = a[e],
          t = n[0];
        return i.e(n[1]).then((() => i.t(t, 23)))
      }
      t.keys = () => Object.keys(a), t.id = 3514, e.exports = t
    },
    4235: e => {
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
          r = new Set,
          l = new Set;
        for (o.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (a[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
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
    },
    4375: (e, n, i) => {
      var a = {
        "./de": [7311, 5639],
        "./en": [2347, 6267],
        "./es": [7376, 5742],
        "./fr": [7084, 2678],
        "./it": [1121, 6997],
        "./ja": [1561, 6361],
        "./ko": [5982, 7452],
        "./pl": [3204, 2642],
        "./pt": [6396, 3034],
        "./ru": [6317, 3941],
        "./zh": [754, 5832]
      };

      function t(e) {
        if (!i.o(a, e)) return Promise.resolve().then((() => {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }));
        var n = a[e],
          t = n[0];
        return i.e(n[1]).then((() => i.t(t, 23)))
      }
      t.keys = () => Object.keys(a), t.id = 4375, e.exports = t
    },
    4819: (e, n, i) => {
      var a = {
        "./de": [3577, 5259],
        "./en": [1137, 4799],
        "./es": [5494, 3370],
        "./fr": [2974, 7010],
        "./it": [6515, 4913],
        "./ja": [1535, 6285],
        "./ko": [6208, 6664],
        "./pl": [230, 1054],
        "./pt": [9006, 662],
        "./ru": [211, 5233],
        "./zh": [8432, 4700]
      };

      function t(e) {
        if (!i.o(a, e)) return Promise.resolve().then((() => {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }));
        var n = a[e],
          t = n[0];
        return i.e(n[1]).then((() => i.t(t, 23)))
      }
      t.keys = () => Object.keys(a), t.id = 4819, e.exports = t
    },
    5267: (e, n, i) => {
      var a = {
        "./de": [5293, 299],
        "./en": [8085, 5663],
        "./es": [6594, 5530],
        "./fr": [3210, 2466],
        "./it": [3135, 7073],
        "./ja": [115, 4621],
        "./ko": [8140, 824],
        "./pl": [3122, 2398],
        "./pt": [5626, 9126],
        "./ru": [8559, 3697],
        "./zh": [3572, 1868]
      };

      function t(e) {
        if (!i.o(a, e)) return Promise.resolve().then((() => {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }));
        var n = a[e],
          t = n[0];
        return i.e(n[1]).then((() => i.t(t, 23)))
      }
      t.keys = () => Object.keys(a), t.id = 5267, e.exports = t
    },
    8525: (e, n, i) => {
      var a = {
        "./de": [9692, 9990],
        "./en": [8436, 1822],
        "./es": [7911, 2347],
        "./fr": [3691, 131],
        "./it": [9802, 8272],
        "./ja": [3050, 7436],
        "./ko": [8073, 2221],
        "./pl": [695, 2171],
        "./pt": [1999, 8755],
        "./ru": [1790, 2864],
        "./zh": [2721, 3197]
      };

      function t(e) {
        if (!i.o(a, e)) return Promise.resolve().then((() => {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }));
        var n = a[e],
          t = n[0];
        return i.e(n[1]).then((() => i.t(t, 23)))
      }
      t.keys = () => Object.keys(a), t.id = 8525, e.exports = t
    }
  }
]);