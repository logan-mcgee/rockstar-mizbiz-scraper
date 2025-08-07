try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b8576fc0-8b4f-4d3b-a7a6-50b6950f168f", e._sentryDebugIdIdentifier = "sentry-dbid-b8576fc0-8b4f-4d3b-a7a6-50b6950f168f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3144], {
    23144: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => f
      });
      var i = t(95966),
        n = t(66342);
      const s = {
        pillBtn: "rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab",
        selected: "rockstargames-sites-rockstargamesb8593315bcfc0b018046dfd57cc7876a",
        allCredits: "rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885",
        hero: "rockstargames-sites-rockstargamesf5e04151b0ee11a4ec33543d6e61353c",
        logoLeft: "rockstargames-sites-rockstargamesbe0588e6483b4c6baaf9fdca3c08d22d",
        logoRight: "rockstargames-sites-rockstargamesf2d6e1f442642a213a8b067d3c188e06",
        heroContent: "rockstargames-sites-rockstargamesbd3782823e3d0e7347672ef3f677dc3e",
        logos: "rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc",
        header: "rockstargames-sites-rockstargamesdf14f88f6bdbd500bf797bd76a28005f",
        description: "rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd",
        creditContent: "rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841",
        credit: "rockstargames-sites-rockstargamesf4e95ac7ec6e85f321acaf5c2246adf3",
        name: "rockstargames-sites-rockstargamesd02ccc389d442e5433ff5ab6fecc6a09",
        position: "rockstargames-sites-rockstargamescc36f0d36534abd657d69e9381d6de02",
        originalPeople: "rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916",
        creditContentOld: "rockstargames-sites-rockstargamesaf8ab3ea585e1c8c23ca7ab0b0ff339a",
        creditSection: "rockstargames-sites-rockstargamesaef86015783d6ce28bb7b88331b9adb6",
        creditSectionInner: "rockstargames-sites-rockstargamesb525e8bb6213678232c2815dfc948151"
      };
      var r = t(70954);
      const d = e => {
          let {
            t: a,
            title: t
          } = e;
          return (0, r.jsx)("div", {
            className: [s.hero, s.heroRdr2].join(" "),
            "data-game": t,
            children: (0, r.jsxs)("div", {
              className: s.heroContent,
              children: [(0, r.jsxs)("div", {
                className: s.logos,
                "data-title": t,
                children: [(0, r.jsx)("div", {
                  className: s.logoLeft
                }), (0, r.jsx)("div", {
                  className: s.logoRight
                })]
              }), (0, r.jsx)("p", {
                className: s.description,
                dangerouslySetInnerHTML: {
                  __html: a(`credits.${t}.desc`)
                },
                "data-title": t
              })]
            })
          })
        },
        l = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)("div", {
            className: s.header,
            children: a
          })
        },
        c = e => {
          let {
            data: a
          } = e;
          return a ? (0, r.jsxs)("div", {
            className: s.creditContent,
            children: [(0, r.jsx)(l, {
              children: (0, r.jsx)("h1", {
                children: "Credits"
              })
            }), (0, r.jsx)("ul", {
              children: a?.map((e => (0, r.jsxs)("li", {
                children: [(0, r.jsx)("span", {
                  className: s.name,
                  children: e.preferred_name
                }), (0, r.jsx)("span", {
                  className: s.position,
                  children: `${e?.business_title?.replace('"',"").trim()}, ${e.division}`
                })]
              }, JSON.stringify(e))))
            })]
          }) : null
        },
        o = e => {
          let {
            data: a
          } = e;
          if (!a) return null;
          const t = a[0]?.static_json;
          return (0, r.jsxs)("div", {
            className: s.originalPeople,
            children: [(0, r.jsx)(l, {
              children: (0, r.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(t.pageContent).map((e => {
              const {
                sections: a
              } = t.pageContent[e];
              return (0, r.jsxs)("div", {
                className: s.creditSection,
                children: [(0, r.jsx)("h3", {
                  children: (i = e, t.scrollerData.find((e => {
                    let {
                      eventName: a
                    } = e;
                    return a === i
                  }))?.title ?? "")
                }), a.map((e => {
                  let {
                    content: a,
                    title: t
                  } = e;
                  return (0, r.jsxs)("div", {
                    className: s.creditSectionInner,
                    children: [(0, r.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: t
                      }
                    }), (0, r.jsx)("ul", {
                      className: s.creditContentOld,
                      children: a.map((e => (0, r.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: e
                        }
                      }, e)))
                    })]
                  }, t)
                }))]
              }, e);
              var i
            }))]
          })
        },
        f = (0, i.withTranslations)((e => {
          let {
            t: a,
            title: t
          } = e;
          const l = "v" === t,
            {
              data: f
            } = (0, i.useQuery)(n.CreditData, {
              variables: {
                needsIfruit: l,
                title: t
              }
            });
          if (!f) return null;
          const {
            creditsForTitle: m,
            creditsIfruit: u
          } = f;
          return (0, r.jsxs)("div", {
            className: s.allCredits,
            "data-title": t,
            children: [(0, r.jsx)(d, {
              title: t,
              t: a
            }), (0, r.jsx)(c, {
              data: m
            }), "v" === t ? (0, r.jsx)(o, {
              data: u
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var i = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.CreditData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = i[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = n(e, a);
          i && t.definitions.push(i)
        })), t
      }(a, "CreditData")
    }
  }
]);