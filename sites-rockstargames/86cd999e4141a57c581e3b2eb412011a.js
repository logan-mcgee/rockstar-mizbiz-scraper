! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "93e02a22-8d48-4300-b2c8-9ec172874c81", e._sentryDebugIdIdentifier = "sentry-dbid-93e02a22-8d48-4300-b2c8-9ec172874c81")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [376], {
    7376: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => u
      });
      var i = n(3052),
        s = n(5792),
        t = n(3309),
        d = n.n(t),
        o = n(9980),
        r = n.n(o);
      var c = n(6788),
        l = n.n(c),
        f = n(3480);
      const m = e => {
          let {
            person: a
          } = e;
          const n = a.covid_people_images.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamese6f33a56a8f1f8cd228df27a4a791605",
            children: a.covid_people_images.map((e => (0, f.jsx)("img", {
              src: e.img_full
            }, e.id)))
          }) : "";
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd79de7be49a60251cbdf4ee0b2c7468a",
            children: [n, (0, f.jsx)("h2", {
              children: a.hero
            }), (0, f.jsx)("h3", {
              children: `${a.employee} - ${a.studio.name}`
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf27845991fcb31e41a8d689a7a439b4b",
              children: (0, f.jsx)(d(), {
                components: {
                  instagramembed: r()
                },
                bindings: {
                  images: ""
                },
                jsx: a.description
              })
            })]
          }, a.id)
        },
        u = (0, s.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: n
          } = (0, i.useQuery)(l());
          if (!n) return null;
          const {
            frontlineHeroes: s
          } = n;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesb740f4dcac7eb39171d1270ae34642ca",
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesefe83a36324b36aa86347b0b5af25902"
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesed80ae530c81c008ec8a5cfb481aa29d",
              children: [(0, f.jsx)("h1", {
                children: a("covid-title")
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa137195529a3d6d091cb1ec628f2caf0",
                dangerouslySetInnerHTML: {
                  __html: a("covid-desc")
                }
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf443941cff414bc9ef5541df5260d4b7",
                children: s.map(((e, a) => (0, f.jsx)(m, {
                  person: e
                }, a)))
              })]
            })]
          })
        }))
    },
    6788: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "FrontlineHeroes"
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
                value: "frontlineHeroes"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hero"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "employee"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "studio"
                  },
                  arguments: [],
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
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "covid_people_images"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "covid_person_id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "img_full"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 265
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query FrontlineHeroes($cache: Boolean = true) {\n    frontlineHeroes {\n        hero\n        employee\n        description\n        studio {\n            name\n        }\n        covid_people_images {\n            id: covid_person_id\n            img_full\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.FrontlineHeroes = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var t = i[a] || new Set,
          d = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            d.has(e) || (d.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var i = s(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "FrontlineHeroes")
    }
  }
]);
//# sourceMappingURL=86cd999e4141a57c581e3b2eb412011a.js.map