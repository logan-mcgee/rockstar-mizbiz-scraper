try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "48bcc7b7-d464-4e56-925c-2c454a721593", e._sentryDebugIdIdentifier = "sentry-dbid-48bcc7b7-d464-4e56-925c-2c454a721593")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3771], {
    53771: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => f
      });
      var t = i(42295),
        n = i(95966),
        s = i(66342);
      const r = {
          allCredits: "rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885",
          credit: "rockstargames-sites-rockstargamesf4e95ac7ec6e85f321acaf5c2246adf3",
          creditContent: "rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841",
          creditContentOld: "rockstargames-sites-rockstargamesaf8ab3ea585e1c8c23ca7ab0b0ff339a",
          creditSection: "rockstargames-sites-rockstargamesaef86015783d6ce28bb7b88331b9adb6",
          creditSectionInner: "rockstargames-sites-rockstargamesb525e8bb6213678232c2815dfc948151",
          description: "rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd",
          header: "rockstargames-sites-rockstargamesdf14f88f6bdbd500bf797bd76a28005f",
          hero: "rockstargames-sites-rockstargamesf5e04151b0ee11a4ec33543d6e61353c",
          heroContent: "rockstargames-sites-rockstargamesbd3782823e3d0e7347672ef3f677dc3e",
          logoLeft: "rockstargames-sites-rockstargamesbe0588e6483b4c6baaf9fdca3c08d22d",
          logoRight: "rockstargames-sites-rockstargamesf2d6e1f442642a213a8b067d3c188e06",
          logos: "rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc",
          name: "rockstargames-sites-rockstargamesd02ccc389d442e5433ff5ab6fecc6a09",
          originalPeople: "rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916",
          pillBtn: "rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab",
          position: "rockstargames-sites-rockstargamescc36f0d36534abd657d69e9381d6de02",
          selected: "rockstargames-sites-rockstargamesb8593315bcfc0b018046dfd57cc7876a"
        },
        d = ({
          t: e,
          title: a
        }) => (0, t.jsx)("div", {
          className: [r.hero, r.heroRdr2].join(" "),
          "data-game": a,
          children: (0, t.jsxs)("div", {
            className: r.heroContent,
            children: [(0, t.jsxs)("div", {
              className: r.logos,
              "data-title": a,
              children: [(0, t.jsx)("div", {
                className: r.logoLeft
              }), (0, t.jsx)("div", {
                className: r.logoRight
              })]
            }), (0, t.jsx)("p", {
              className: r.description,
              dangerouslySetInnerHTML: {
                __html: e(`credits.${a}.desc`)
              },
              "data-title": a
            })]
          })
        }),
        c = ({
          children: e
        }) => (0, t.jsx)("div", {
          className: r.header,
          children: e
        }),
        o = ({
          data: e
        }) => e ? (0, t.jsxs)("div", {
          className: r.creditContent,
          children: [(0, t.jsx)(c, {
            children: (0, t.jsx)("h1", {
              children: "Credits"
            })
          }), (0, t.jsx)("ul", {
            children: e?.map((e => (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: r.name,
                children: e.preferred_name
              }), (0, t.jsx)("span", {
                className: r.position,
                children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
              })]
            }, JSON.stringify(e))))
          })]
        }) : null,
        l = ({
          data: e
        }) => {
          if (!e) return null;
          const a = e[0]?.static_json;
          return (0, t.jsxs)("div", {
            className: r.originalPeople,
            children: [(0, t.jsx)(c, {
              children: (0, t.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(a.pageContent).map((e => {
              const {
                sections: i
              } = a.pageContent[e];
              return (0, t.jsxs)("div", {
                className: r.creditSection,
                children: [(0, t.jsx)("h3", {
                  children: (n = e, a.scrollerData.find((({
                    eventName: e
                  }) => e === n))?.title ?? "")
                }), i.map((({
                  content: e,
                  title: a
                }) => (0, t.jsxs)("div", {
                  className: r.creditSectionInner,
                  children: [(0, t.jsx)("h4", {
                    dangerouslySetInnerHTML: {
                      __html: a
                    }
                  }), (0, t.jsx)("ul", {
                    className: r.creditContentOld,
                    children: e.map((e => (0, t.jsx)("li", {
                      dangerouslySetInnerHTML: {
                        __html: e
                      }
                    }, e)))
                  })]
                }, a)))]
              }, e);
              var n
            }))]
          })
        },
        f = (0, n.withTranslations)((({
          t: e,
          title: a
        }) => {
          const i = "v" === a,
            {
              data: c
            } = (0, n.useQuery)(s.CreditData, {
              variables: {
                needsIfruit: i,
                title: a
              }
            });
          if (!c) return null;
          const {
            creditsForTitle: f,
            creditsIfruit: m
          } = c;
          return (0, t.jsxs)("div", {
            className: r.allCredits,
            "data-title": a,
            children: [(0, t.jsx)(d, {
              title: a,
              t: e
            }), (0, t.jsx)(o, {
              data: f
            }), "v" === a ? (0, t.jsx)(l, {
              data: m
            }) : ""]
          })
        }))
    },
    66342: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CreditData"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "title"
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
                value: "needsIfruit"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "creditsForTitle"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "title"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "title"
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
                    value: "business_title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "division"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preferred_name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "creditsIfruit"
              },
              arguments: [],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "needsIfruit"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "static_json"
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
          end: 277
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query CreditData(\n    $cache: Boolean = true\n    $title: String!\n    $needsIfruit: Boolean!\n) {\n    creditsForTitle(title: $title) {\n        business_title\n        division\n        preferred_name\n    }\n    creditsIfruit @include(if: $needsIfruit) {\n        static_json\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var t = e.definitions[i];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.CreditData = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = t[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var c = d;
          d = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = n(e, a);
          t && i.definitions.push(t)
        })), i
      }(a, "CreditData")
    }
  }
]);