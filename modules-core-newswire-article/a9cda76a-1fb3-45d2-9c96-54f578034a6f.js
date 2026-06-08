try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a9cda76a-1fb3-45d2-9c96-54f578034a6f", e._sentryDebugIdIdentifier = "sentry-dbid-a9cda76a-1fb3-45d2-9c96-54f578034a6f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8657], {
    85705(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
                  }
                }
              }, {
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
              value: !1
            },
            directives: []
          }, {
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
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
                  }
                }
              }, {
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
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
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
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
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1002
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          n(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          n(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          n(e, a)
        })
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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

      function t(e, a) {
        var n = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var t = i[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach(function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return r.forEach(function(a) {
          var i = s(e, a);
          i && n.definitions.push(i)
        }), n
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = t(a, "TinaModulesList"), e.exports.TinaModulesInfo = t(a, "TinaModulesInfo")
    },
    41926(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => t
      });
      var i = n(45966),
        s = n(99800);
      const t = (e = {
        parent: "",
        post: null
      }) => ({
        name: "listItem",
        label: "List Item",
        component: "group",
        fields: [(0, i.om)(e), (0, i.z9)({
          name: "content",
          label: "Content",
          component: "text",
          initialValues: ""
        }), (0, i.sE)(e)],
        defaultItem: () => (0, i.Q)({
          content: ""
        }),
        itemProps: e => (0, i.Rv)(e, {
          label: (0, s._e)(`${e?.name??e?.[i.Qw]?.content??"New"} [List Item]`)
        })
      })
    },
    28851(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => m
      });
      var i = n(39793),
        s = n(93082),
        t = n(91681),
        r = n.n(t),
        o = n(13331),
        d = n(81270);
      const c = {
          blue: "rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: l
        } = r(),
        m = ({
          list: e,
          string: a,
          starColor: n,
          style: t,
          className: r,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: k
        }) => {
          const [g, b] = (0, s.useState)(null);
          if ((0, s.useEffect)(() => {
              b(e)
            }, [e]), !a && !e) return null;
          const p = {
            color: t?.color
          };
          return delete t?.color, f && g ? (0, i.jsx)("div", {
            className: c.grid,
            style: {
              "--ordered-list-grid-column": f,
              "--ordered-list-grid-column-mobile": k ?? f
            },
            children: (0, i.jsx)("ol", {
              className: (0, d.default)(c.itemList, c.noImg, c[n], c[m]),
              style: (0, o.safeStyles)(t),
              children: g.map(e => (0, i.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: l(e.content)
                },
                style: p
              }, e.content))
            })
          }) : (0, i.jsx)("ol", {
            style: (0, o.safeStyles)(t),
            className: (0, d.default)(c.itemList, c.custom, u ? c.noImg : "", n ? c[n] : "", m ? c[m] : "", r ?? ""),
            children: e.map(e => (0, i.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e?.content ?? e)
              }
            }, e?.content))
          })
        }
    },
    67359(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => r
      });
      var i = n(39793),
        s = n(13331);
      const t = {
          responsiveImage: "rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b"
        },
        r = ({
          src: e,
          className: a = "",
          animate: n,
          ariaLabel: r,
          style: o = {}
        }) => {
          const [d, c] = (0, s.usePreloadImg)(e);
          if (!d) return null;
          o.backgroundImage = `url(${e})`;
          const l = {
            ...o
          };
          return c && (l["--aspect-ratio"] = c.width / c.height), (0, i.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [t.responsiveImage, n ? t.animateBox : "", a].join(" "),
            style: l
          })
        }
    },
    12334(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => m
      });
      var i = n(39793),
        s = n(93082),
        t = n(91681),
        r = n.n(t),
        o = n(13331),
        d = n(81270);
      const c = {
          blue: "rockstargames-modules-core-newswire-articledf5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-modules-core-newswire-articleef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-modules-core-newswire-articleaa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-modules-core-newswire-articlea6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-modules-core-newswire-articlea55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-modules-core-newswire-articleea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-modules-core-newswire-articlec157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-modules-core-newswire-articlef4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-modules-core-newswire-articlec5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-modules-core-newswire-articlefa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-modules-core-newswire-articlea1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-modules-core-newswire-articleb239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-modules-core-newswire-articled45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-modules-core-newswire-articlef14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-modules-core-newswire-articlecc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-modules-core-newswire-articlec446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-modules-core-newswire-articlede1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-modules-core-newswire-articlea034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-modules-core-newswire-articlea0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-modules-core-newswire-articleb03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-modules-core-newswire-articlebdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: l
        } = r(),
        m = ({
          list: e,
          string: a,
          starColor: n,
          style: t,
          className: r,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: k
        }) => {
          const [g, b] = (0, s.useState)(null), p = a ? a.split("_#_") : e;
          if ((0, s.useEffect)(() => {
              b(e)
            }, [e]), !a && !e) return null;
          const w = {
            color: t?.color
          };
          return delete t?.color, f && g ? (0, i.jsx)("div", {
            className: c.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": k ?? f
            },
            children: (0, i.jsx)("ul", {
              className: (0, d.default)(c.itemList, c.noImg, c[n], c[m]),
              style: (0, o.safeStyles)(t),
              children: g.map((e, a) => (0, i.jsx)("li", {
                style: w,
                dangerouslySetInnerHTML: {
                  __html: l(e.content)
                }
              }, a))
            })
          }) : (0, i.jsx)("ul", {
            style: (0, o.safeStyles)(t),
            className: (0, d.default)(c.itemList, c.custom, u ? c.noImg : "", n ? c[n] : "", m ? c[m] : "", r ?? ""),
            children: p.map((e, a) => (0, i.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    77678(e, a, n) {
      "use strict";
      n.d(a, {
        F: () => i
      });
      const i = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    32118(e, a, n) {
      "use strict";
      n.d(a, {
        t: () => t
      });
      var i = n(42909),
        s = n(39991);
      const t = async ({
        service: e,
        returnUrl: a,
        pingBearer: n
      }) => {
        const [{
          iso: t
        }] = (0, i.getLocale)(), {
          authHost: r,
          clientId: o
        } = (0, s.A)(), d = await n(), c = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return c.searchParams.append("cid", o), c.searchParams.append("lang", t), c.searchParams.append("returnUrl", a ?? window.location.pathname), d && "boolean" != typeof d && "string" == typeof d.bearerToken && c.searchParams.append("accessToken", d.bearerToken), c
      }
    },
    39991(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => o
      });
      const i = window?.env?.sc,
        s = window?.env?.marketing,
        t = ({
          apiHost: e,
          authHost: a,
          clientId: n,
          cms: t,
          graphEnv: r,
          queryManifest: o,
          scHost: d,
          hostname: c,
          cdnBase: l,
          key: m,
          marketingAuthTLD: u
        }) => {
          const f = i?.apiHost ?? e,
            k = i?.authHost ?? a,
            g = i?.cdnBase ?? l,
            b = i?.clientId ?? n,
            p = s?.marketingAuthTLD ?? u,
            w = i?.scHost ?? d,
            v = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${f}.rockstargames.com`,
            graphEnv: i?.graphEnv ?? r,
            host: w,
            hostname: c,
            cdnBase: g,
            key: m,
            clientId: b,
            cms: `https://${t}.rockstargames.com/graphql`,
            authHost: k,
            queryManifest: o,
            scBase: `https://${w}.rockstargames.com/`,
            login: `https://${k}.rockstargames.com/connect/authorize/${b}`,
            silentCheck: `https://${k}.rockstargames.com/connect/cors/check/${b}`,
            signup: `https://${k}.rockstargames.com/create/?cid=${b}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${v}`,
            authCookieName: "BearerToken"
          }
        },
        r = [t({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), t({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        o = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const a = r.find(({
              key: a
            }) => a === e) ?? null;
            if (a) return a
          }
          return r.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || r[0]
        }
    },
    99800(e, a, n) {
      "use strict";
      n.d(a, {
        OD: () => r,
        lv: () => o,
        wC: () => s,
        PE: () => v,
        rB: () => c,
        tC: () => k.t,
        yh: () => w,
        Ap: () => u,
        Xs: () => h,
        kx: () => y,
        rJ: () => S,
        pT: () => g,
        lV: () => N,
        PA: () => i,
        My: () => f,
        _e: () => b
      }), n(39793), n(69646);
      const i = ({
          element: e
        }) => {
          const a = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            n = e => {
              e.target === document && (clearInterval(a), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        s = ({
          paramName: e = "section"
        } = {}) => {
          const a = new URLSearchParams(document.location.search),
            n = document.getElementById(a.get(e) || e);
          n && (i({
            element: n
          }), t(n))
        },
        t = e => {
          const a = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (a.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(a.join(", "));
            if (n?.length) {
              const e = [...n].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class r {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, a, n, i, s = null, t = null) {
          this.name = e, this.friendlyName = a, this.id = n, this.onlineService = i, this.aliasOnlineService = s, this.alias = t
        }
      }
      const o = Object.freeze({
          pc: new r("pc", "PC Legacy", 8, "sc"),
          ps: new r("ps", "PlayStation", 3, "np", "ps"),
          ps3: new r("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new r("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new r("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new r("xbox", "Xbox", 4, "xbl"),
          xbox360: new r("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new r("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new r("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new r("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new r("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new r("applestore", "App Store", 102, "applestore"),
          googleplay: new r("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new r("app_store", "App Store", 102, "applestore"),
          googlePlay: new r("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new r("pcalt", "PC Enhanced", 22, "sc")
        }),
        d = Object.freeze(Object.values(o));

      function c(e) {
        if (!e) return;
        if (e instanceof r) return e;
        const a = e.toString().toLowerCase();
        return d.find(e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase())
      }
      var l = n(23058),
        m = n(77678);
      const u = e => {
          const a = document.cookie.split("; "),
            n = `${e}=`,
            i = a.find(e => e.startsWith(n)),
            s = i?.substring(n.length, i.length);
          return s
        },
        f = (e, a) => {
          e && void 0 !== a && (0, l.canStoreCookie)(e) && u(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,m.F)()}; path=/;`)
        };
      var k = n(32118);
      const g = e => e.keys().forEach(e),
        b = e => e.replace(/(<([^>]+)>)/gi, ""),
        p = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        w = (e = !0) => p.filter(a => a.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        v = e => {
          e.preventDefault();
          const a = e.currentTarget.href,
            n = (e => {
              const a = new URL(e).pathname.split("/"),
                n = a[a.length - 1];
              return decodeURIComponent(n)
            })(a);
          fetch(a, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const a = window.URL.createObjectURL(new Blob([e])),
              i = document.createElement("a");
            i.href = a, i.setAttribute("download", n), document.body.appendChild(i), i.click(), document.body.removeChild(i)
          }).catch(e => {
            console.log(e)
          })
        },
        h = () => [o.xbox360.name, o.xboxone.name, o.ps3.name, o.ps4.name, o.pc.name],
        y = () => [o.xboxsx.name, o.ps5.name, o.pcalt.name],
        N = e => y().includes(e),
        S = e => {
          const a = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return a.has(e) ? a.get(e) : e
        }
    },
    26581(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => m
      });
      var i = n(39793),
        s = n(44453),
        t = n(67359),
        r = n(64064),
        o = n.n(r),
        d = n(31879),
        c = n.n(d);
      const l = {
          "center-children": "rockstargames-modules-core-newswire-articlef2fa26d0f173f3d967cd339102390c4a",
          "full-width": "rockstargames-modules-core-newswire-articled506082984d54d056e358cfbc0dde795",
          gold: "rockstargames-modules-core-newswire-articleadff1577bb3952ea5b448144560148e1",
          heroImage: "rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b",
          "hidden-lg": "rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259",
          "hidden-md": "rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf",
          "hidden-sm": "rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719",
          "hidden-xl": "rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e",
          "hidden-xxl": "rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531",
          hiddenLarge: "rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb",
          hiddenMobile: "rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218",
          "horizontal-line": "rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707",
          responsiveImage: "rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae",
          responsiveVideo: "rockstargames-modules-core-newswire-articlee70c0545b9c94794421dac5b59959c39",
          "reverse-mobile": "rockstargames-modules-core-newswire-articlefc45ea13bab881368ae51d327eb77243",
          "show-lg": "rockstargames-modules-core-newswire-articlea0529cc3561a81f9b96939b579caa623",
          "show-md": "rockstargames-modules-core-newswire-articled6cabd1c7dce349d9e7e1598ead4503e",
          "show-sm": "rockstargames-modules-core-newswire-articleb540a7274484859d8ab14a6c04f62b4f",
          "show-xl": "rockstargames-modules-core-newswire-articlee13f7a8d45b3fec8db6dedc3321f89f2",
          "show-xxl": "rockstargames-modules-core-newswire-articled350dc14eb32714ed0230fe9f53591cd",
          "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418",
          "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7"
        },
        m = ({
          alt: e = "",
          className: a = "",
          src: n = {},
          image: r = null,
          video: d = null
        }) => (0, i.jsxs)("div", {
          className: ((n?.videoPlayerId || n?.gifHash) && l.heroImage, a),
          children: [n?.mobile && (0, i.jsx)(t.A, {
            src: n.mobile,
            ariaLabel: e,
            className: [n?.desktop && l.hiddenLarge, l.responsiveImage].join(" "),
            noRatioPlease: !0
          }), n?.desktop && (0, i.jsx)(t.A, {
            src: n.desktop,
            ariaLabel: e,
            className: [n?.mobile && l.hiddenMobile, l.responsiveImage].join(" ")
          }), n?.videoPlayerId && (0, i.jsx)("div", {
            className: [l.responsiveVideo, l.trailer].join(" "),
            children: (0, i.jsx)(c(), {
              context: "site",
              autoplay: !1,
              id: n.videoPlayerId,
              hero: !0
            })
          }), n?.gifHash && (0, i.jsx)("div", {
            className: l.responsiveVideo,
            children: (0, i.jsx)(o(), {
              hash: [{
                desktop: n?.gifHash?.desktop
              }, {
                mobile: n?.gifHash?.mobile
              }]
            })
          }), r && (0, i.jsx)(s.A, {
            image: r
          }), d && (0, i.jsx)("div", {
            className: [l.responsiveVideo, l.trailer].join(" "),
            children: (0, i.jsx)(c(), {
              context: "site",
              autoplay: d?.autoplay ?? !1,
              id: d.id,
              hero: !0
            })
          })]
        })
    }
  }
]);