try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6905fb69-9f11-4b45-a1c6-b28d4a558de7", e._sentryDebugIdIdentifier = "sentry-dbid-6905fb69-9f11-4b45-a1c6-b28d4a558de7")
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
  [1328], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    6522: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18670: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var n = i(42295),
        t = i(62229),
        d = i(95966);
      const s = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f"
      };
      (0, d.importAll)(i(86751));
      const l = ({
        isWideCard: e = !1,
        size: a = 640,
        title: l,
        titleSlug: r,
        inGlobalNav: m = !1
      }) => {
        const {
          isMobile: c
        } = (0, d.useWindowResize)(), o = (0, t.useMemo)((() => {
          let n = "";
          return e && (n = c ? i(24865)(`./${r}/mobile.jpg`) : i(53781)(`./${r}/desktop.jpg`)), n || (n = i(39294)(`./${r}.jpg`), n += `?im=Resize=${a}`), n
        }), [c, r]), [u] = (0, d.usePreloadImg)(o);
        let k = o;
        return (0, n.jsx)("div", {
          role: "img",
          "aria-label": l,
          style: {
            backgroundImage: `url(${k})`,
            borderRadius: m ? "unset" : ""
          },
          className: [s.img, u ? s.startAnimation : "", e ? s.wide : ""].join(" ")
        })
      }
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, i) => {
      var n = {
        "./VI/mobile.jpg": 92244
      };

      function t(e) {
        var a = d(e);
        return i(a)
      }

      function d(e) {
        if (!i.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      t.keys = function() {
        return Object.keys(n)
      }, t.resolve = d, e.exports = t, t.id = 24865
    },
    26195: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Downloads"
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
                value: "collectionId"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "seriesId"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numGamesToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numAppsToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withIndex"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withCollection"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSeries"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withDlcs"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMusics"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGroups"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGoldbars"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withApps"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withPatches"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSharkCards"
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
                value: "game"
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
                  value: "id"
                },
                value: {
                  kind: "IntValue",
                  value: "912"
                }
              }],
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
                      value: "withIndex"
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
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "featuredDownloads"
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
                      value: "withIndex"
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
                    value: "title_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "href"
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
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collections"
              },
              name: {
                kind: "Name",
                value: "downloadsCollections"
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
                  value: "numAppsToGet"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numAppsToGet"
                  }
                }
              }],
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
                      value: "withIndex"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preview"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
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
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                          value: "withSeries"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
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
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "pc_mac_games"
              },
              name: {
                kind: "Name",
                value: "games"
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numGamesToGet"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "pcAndDownloadable",
                  block: !1
                }
              }],
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
                      value: "withGames"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "downloads_game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
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
              alias: {
                kind: "Name",
                value: "collection"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "collectionId"
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
                  value: "seriesId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "seriesId"
                  }
                }
              }],
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
                      value: "withCollection"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
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
                          value: "withApps"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
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
                          value: "withGoldbars"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "patches"
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
                          value: "withPatches"
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
                        value: "support_url"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
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
                            value: "title_slug"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
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
                              value: "withMusics"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
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
                              value: "withDlcs"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groups"
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
                              value: "withGroups"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "screensavers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
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
                    value: "shark_cards"
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
                          value: "withSharkCards"
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
                        value: "preview"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 3367
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: 912) @include(if: $withIndex) {\n        id\n        title\n        description\n        title_slug\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pc_mac_games: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title\n            title_slug\n            downloads_game {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                title\n                title_slug\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Downloads = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var d = n[a] || new Set,
          s = new Set,
          l = new Set;
        for (d.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "Downloads")
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    29625: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => s
      });
      var n = i(42295),
        t = i(14200);
      const d = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        s = ({
          className: e = "",
          children: a,
          context: i = "",
          to: s,
          onClick: l,
          target: r = "_self",
          ...m
        }) => {
          const c = [d.button, d[i], e].join(" ");
          return s ? (0, n.jsx)(t.A, {
            ...m,
            to: s,
            className: c,
            onClick: l,
            target: r,
            children: a
          }) : (0, n.jsx)("button", {
            ...m,
            type: "button",
            className: c,
            onClick: l,
            children: a
          })
        }
    },
    31222: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Downloads"
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
                value: "collectionId"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "seriesId"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numGamesToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numAppsToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withIndex"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withCollection"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSeries"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withDlcs"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMusics"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGroups"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGoldbars"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withApps"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withPatches"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSharkCards"
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
                value: "game"
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
                  value: "id"
                },
                value: {
                  kind: "StringValue",
                  value: "r8ogrer8",
                  block: !1
                }
              }],
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
                      value: "withIndex"
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
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "featuredDownloads"
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
                      value: "withIndex"
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
                    value: "title_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "href"
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
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collections"
              },
              name: {
                kind: "Name",
                value: "downloadsCollections"
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
                  value: "numAppsToGet"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numAppsToGet"
                  }
                }
              }],
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
                      value: "withIndex"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preview"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
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
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                          value: "withSeries"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
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
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "pcMacGames"
              },
              name: {
                kind: "Name",
                value: "games"
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numGamesToGet"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "pcAndDownloadable",
                  block: !1
                }
              }],
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
                      value: "withGames"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "downloadsGame"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
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
              alias: {
                kind: "Name",
                value: "collection"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "collectionId"
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
                  value: "seriesId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "seriesId"
                  }
                }
              }],
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
                      value: "withCollection"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
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
                          value: "withApps"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
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
                          value: "withGoldbars"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "patches"
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
                          value: "withPatches"
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
                        value: "support_url"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
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
                            value: "titleSlug"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
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
                              value: "withMusics"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
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
                              value: "withDlcs"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groups"
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
                              value: "withGroups"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "screensavers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
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
                    value: "shark_cards"
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
                          value: "withSharkCards"
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
                        value: "preview"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 3368
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: "r8ogrer8") @include(if: $withIndex) {\n        id\n        title\n        description\n        titleSlug\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pcMacGames: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title\n            titleSlug\n            downloadsGame {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                title\n                titleSlug\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Downloads = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var d = n[a] || new Set,
          s = new Set,
          l = new Set;
        for (d.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "Downloads")
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    31328: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => I
      });
      var n = i(42295),
        t = i(62229),
        d = i(95966),
        s = i(81788);
      const l = (0, s.defineMessages)({
        rockstargames_downloads_collections_download_text: {
          id: "rockstargames_downloads_collections_download_text",
          description: "Download text for the collection",
          defaultMessage: "Download {item} {collection}"
        },
        rockstargames_downloads_go_back: {
          id: "rockstargames_downloads_go_back",
          description: "Go back text",
          defaultMessage: "Go back"
        },
        rockstargames_downloads_dimensions_label: {
          id: "rockstargames_downloads_dimensions_label",
          description: "Dimensions label, i.e: 256 by 480 pixels",
          defaultMessage: "{width} by {height} pixels."
        }
      });
      var r = i(14200),
        m = i(18670),
        c = i(29625),
        o = i(2765),
        u = i.n(o),
        k = i(2973),
        g = i.n(k);
      const v = {
          card: "rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6",
          caret: "rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a",
          collection: "rockstargames-sites-rockstargamesf00e37c4c6751a2a963089d28a7db25d",
          collectionTitle: "rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784",
          companion: "rockstargames-sites-rockstargamesf2fcf46974b8bcb51c2f31d594f13010",
          downloadItem: "rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f",
          dropdownButton: "rockstargames-sites-rockstargameseb436adb5c6a333063de9f93bcab2219",
          dropdownWrapper: "rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591",
          featured: "rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153",
          featuredDesc: "rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e",
          "gold-bars": "rockstargames-sites-rockstargamesad4d370c6f4c995effeffdd2d99df4ff",
          grid: "rockstargames-sites-rockstargamesdf20b52cd2d4afc71c11829a72ad7f3a",
          gridLarge: "rockstargames-sites-rockstargamesaa87fd8eb500af65e43ab9cb885b2904",
          hero: "rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd",
          img: "rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08",
          index: "rockstargames-sites-rockstargamesea380575ec472e21790d9ee33249f056",
          info: "rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7",
          item: "rockstargames-sites-rockstargamesb6b5eb46349ce8a0af02da4c313b7d2c",
          label: "rockstargames-sites-rockstargamesad1425e196ee1431a1204b3236281ac8",
          launcher: "rockstargames-sites-rockstargamesb557129b444f05a3a0a9c3926e377a69",
          list: "rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c",
          open: "rockstargames-sites-rockstargamesfd7fe4af2f580cfd1ec053ba72d2055f",
          pillBtn: "rockstargames-sites-rockstargamesa99c18d02ddda6e42eb5e9b62bf8665b",
          reddeadredemption2: "rockstargames-sites-rockstargamesb3ce52adedf554ac350e3d81703b4062",
          sectionHeader: "rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969",
          sections: "rockstargames-sites-rockstargamesd3b49d2ed63442f065d4e1d1421ffc61",
          selected: "rockstargames-sites-rockstargamesac524a1a85b7be0103e971d6977d0468",
          series: "rockstargames-sites-rockstargamescecd768b640c3216cefacf4381004ffa",
          "shark-cards": "rockstargames-sites-rockstargamesb4ec4279ef4ddaf4f8857e468c3f4ed0",
          text: "rockstargames-sites-rockstargamesc64faa9a1dfc8b0784239d8b74efa38f",
          title: "rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846",
          viewAll: "rockstargames-sites-rockstargamesfba9c5949f3095c0d199f1abe7d7d13f"
        },
        p = (0, d.withTranslations)((({
          links: e,
          collectionId: a,
          name: i,
          title: m,
          label: c,
          t: o
        }) => {
          const k = (0, s.useIntl)(),
            [p, f] = (0, t.useState)(!1),
            {
              sanitize: b
            } = g(),
            N = [11, 10, 12, 13, 14, 15].includes(a),
            h = i || o("Select Retailer"),
            w = (0, t.useRef)(),
            j = e => {
              w.current.contains(e.target) || f(!1)
            },
            _ = () => {
              f(!1)
            },
            y = e => {
              (0, d.downloadFile)(e), _()
            },
            x = e => {
              "Escape" === e.key && f(!1)
            };
          (0, t.useEffect)((() => (p ? window.addEventListener("keyup", x) : window.removeEventListener("keyup", x), () => window.removeEventListener("keyup", x))), [x, p]), g().addHook("afterSanitizeAttributes", (function(e) {
            e.hasAttribute("target") && e.setAttribute("tabindex", p ? 0 : -1)
          })), (0, t.useEffect)((() => (p ? document.addEventListener("mousedown", j) : document.removeEventListener("mousedown", j), () => {
            document.removeEventListener("mousedown", j)
          })), [p]);
          const S = e => {
            if (!e) return null;
            const a = e.trim().match(/(\d{1,4})x(\d{1,4})/);
            if (a) {
              const e = a[1],
                i = a[2];
              return k.formatMessage(l.rockstargames_downloads_dimensions_label, {
                width: e,
                height: i
              })
            }
            return null
          };
          let F = null;
          return F = u(), (0, n.jsx)("div", {
            ref: w,
            className: v.dropdownWrapper,
            children: (0, n.jsx)(F, {
              active: p,
              children: (0, n.jsxs)("div", {
                children: [(0, n.jsx)("button", {
                  className: v.dropdownButton,
                  onClick: () => f(!p),
                  type: "select",
                  "aria-label": `${c?c+", ":""}${h}`,
                  children: (0, n.jsxs)("div", {
                    className: v.title,
                    children: [(0, n.jsx)("p", {
                      children: h
                    }), (0, n.jsx)("div", {
                      className: [v.caret, p ? v.open : ""].join(" ")
                    })]
                  })
                }), (0, n.jsx)("ul", {
                  className: [v.list, p ? v.open : ""].join(" "),
                  children: N ? (0, n.jsx)(n.Fragment, {
                    children: (e => {
                      const a = (new DOMParser).parseFromString(b(e, {
                        ADD_ATTR: ["target"]
                      }), "text/html");
                      return Array.from(a.querySelectorAll("a")).map(((e, a) => {
                        const i = Array.from(e.attributes),
                          t = {};
                        return i.forEach((e => {
                          let a = e.name;
                          switch (a) {
                            case "class":
                              a = "className";
                              break;
                            case "href":
                              a = "to";
                              break;
                            case "tabindex":
                              a = "tabIndex"
                          }
                          t[a] = e.value
                        })), (0, n.jsx)("li", {
                          className: v.item,
                          children: (0, n.jsx)(r.A, {
                            ...t,
                            tabIndex: p ? 0 : -1,
                            target: "_blank",
                            onClick: _,
                            children: e.textContent
                          })
                        }, `link_${a}`)
                      }))
                    })(e)
                  }) : e.map((e => {
                    if ("thumb" !== e.label) return (0, n.jsx)("li", {
                      className: v.item,
                      children: (0, n.jsx)(r.A, {
                        to: e.src,
                        "data-gtm-category": "Downloads",
                        "data-gtm-action": `Collection : ${m}`,
                        "data-gtm-label": e.src,
                        tabIndex: p ? 0 : -1,
                        onClick: y,
                        "aria-label": S(e.label),
                        children: e.label
                      })
                    }, e.id)
                  }))
                })]
              })
            })
          })
        })),
        f = (0, d.withTranslations)((({
          collection: e,
          games: a,
          homepage: i = !1,
          t
        }) => (0, n.jsxs)("div", {
          className: v.collection,
          children: [(0, n.jsx)("h2", {
            className: v.sectionHeader,
            children: e.title
          }), (0, n.jsx)("div", {
            className: v.grid,
            children: a.results.map((a => (0, n.jsxs)("div", {
              className: v.downloadItem,
              children: [(0, n.jsx)(m.A, {
                title: a.title,
                titleSlug: a.titleSlug
              }), (0, n.jsx)(p, {
                collectionId: e.id,
                links: a.downloadsGame.platform,
                label: a.title
              })]
            }, a.titleSlug)))
          }), i ? (0, n.jsx)("div", {
            className: v.viewAll,
            children: (0, n.jsx)(c.A, {
              role: "link",
              "aria-label": e.title,
              "data-gtm-category": "Downloads",
              "data-gtm-action": "Collection: View All",
              "data-gtm-label": e.title,
              to: "/downloads?collection=11",
              context: "secondary",
              children: t("View All")
            })
          }) : ""]
        }))),
        b = (0, d.withTranslations)((({
          collection: e,
          homepage: a = !1,
          t: i
        }) => (0, n.jsxs)("div", {
          className: v.collection,
          children: [(0, n.jsx)("h2", {
            className: v.sectionHeader,
            children: e.title
          }), (0, n.jsx)("div", {
            className: v.grid,
            children: e.apps.slice(0, a ? 4 : 100).map((a => (0, n.jsxs)("div", {
              className: v.downloadItem,
              children: [(0, n.jsx)("div", {
                className: v.img,
                style: {
                  backgroundImage: `url(${a.preview})`,
                  "--aspect-ratio": "1/1"
                }
              }), (0, n.jsx)(p, {
                collectionId: e.id,
                links: a.platform
              })]
            }, a.id)))
          }), a ? (0, n.jsx)("div", {
            className: v.viewAll,
            children: (0, n.jsx)(c.A, {
              role: "link",
              "aria-label": e.title,
              "data-gtm-category": "Downloads",
              "data-gtm-action": "Collection: View All",
              "data-gtm-label": e.title,
              to: "/downloads?collection=10",
              context: "secondary",
              children: i("View All")
            })
          }) : ""]
        }))),
        N = ({
          collection: e
        }) => {
          const a = (0, s.useIntl)();
          return (0, n.jsxs)("div", {
            className: v.collection,
            children: [(0, n.jsx)("h4", {
              className: v.collectionTitle,
              children: (0, n.jsx)(r.A, {
                to: "/downloads",
                children: a.formatMessage(l.rockstargames_downloads_go_back)
              })
            }), (0, n.jsx)("h2", {
              className: v.sectionHeader,
              children: e.title
            }), (0, n.jsx)("div", {
              className: v.grid,
              children: e.gold_bars.map((a => (0, n.jsxs)("div", {
                className: v.downloadItem,
                children: [(0, n.jsx)("div", {
                  className: v.img,
                  style: {
                    backgroundImage: `url(${a.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, n.jsx)(p, {
                  collectionId: e.id,
                  links: a.platform
                })]
              }, a.preview)))
            })]
          })
        },
        h = ({
          collection: e
        }) => {
          const a = (0, s.useIntl)();
          return (0, n.jsxs)("div", {
            className: v.collection,
            children: [(0, n.jsx)("h4", {
              className: v.collectionTitle,
              children: (0, n.jsx)(r.A, {
                to: "/downloads",
                children: a.formatMessage(l.rockstargames_downloads_go_back)
              })
            }), (0, n.jsx)("h2", {
              className: v.sectionHeader,
              children: e.title
            }), (0, n.jsx)("div", {
              className: v.grid,
              children: e.patches.map((i => (0, n.jsx)(r.A, {
                to: i.support_url,
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection : Patches",
                "data-gtm-label": i.game.title,
                "aria-label": a.formatMessage(l.rockstargames_downloads_collections_download_text, {
                  item: i.game.title,
                  collection: e.title
                }),
                children: (0, n.jsx)("div", {
                  className: v.card,
                  children: (0, n.jsx)(m.A, {
                    title: i.game.title,
                    titleSlug: i?.game?.titleSlug ?? i.game.title_slug
                  })
                })
              }, i.support_url)))
            })]
          })
        },
        w = ({
          collection: e
        }) => {
          const a = (0, s.useIntl)();
          return (0, n.jsxs)("div", {
            className: v.collection,
            children: [(0, n.jsx)("h4", {
              className: v.collectionTitle,
              children: (0, n.jsx)(r.A, {
                to: "/downloads",
                children: a.formatMessage(l.rockstargames_downloads_go_back)
              })
            }), (0, n.jsx)("h2", {
              className: v.sectionHeader,
              children: e.title
            }), (0, n.jsx)("div", {
              className: v.grid,
              children: e.shark_cards.map((a => (0, n.jsxs)("div", {
                className: v.downloadItem,
                children: [(0, n.jsx)("div", {
                  className: v.img,
                  style: {
                    backgroundImage: `url(${a.preview})`,
                    "--aspect-ratio": "7/5"
                  }
                }), (0, n.jsxs)("div", {
                  className: v.label,
                  children: [(0, n.jsx)("h5", {
                    children: a.title
                  }), (0, n.jsx)("p", {
                    children: a.desc
                  })]
                }), (0, n.jsx)(p, {
                  collectionId: e.id,
                  links: a.platform
                })]
              }, a.title)))
            })]
          })
        },
        j = ({
          collection: e,
          imgRatio: a
        }) => {
          const i = (0, s.useIntl)(),
            d = (0, t.useRef)(),
            m = e.title_slug,
            c = !["music", "dlc"].includes(m);
          return (0, t.useEffect)((() => {
            d?.current && d.current.focus()
          }), [d]), (0, n.jsxs)("div", {
            className: v.collection,
            ref: d,
            "aria-label": e?.title,
            role: "region",
            children: [(0, n.jsx)("h4", {
              className: v.collectionTitle,
              children: (0, n.jsx)(r.A, {
                to: "/downloads",
                children: i.formatMessage(l.rockstargames_downloads_go_back)
              })
            }), (0, n.jsx)("h2", {
              className: v.sectionHeader,
              children: e.title
            }), (0, n.jsx)("div", {
              className: v.grid,
              children: e.series.map((t => (0, n.jsx)(r.A, {
                to: `/downloads?collection=${e.id}&series=${t.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${e.title}`,
                "data-gtm-label": t.title,
                "aria-label": i.formatMessage(l.rockstargames_downloads_collections_download_text, {
                  item: t.title,
                  collection: e.title
                }),
                children: (0, n.jsxs)("div", {
                  className: v.card,
                  children: [(0, n.jsx)("div", {
                    className: v.img,
                    style: {
                      backgroundImage: `url(${t?.musics?.[0]?.thumb??t?.dlcs?.[0]?.thumb??t.preview})`,
                      "--aspect-ratio": a
                    }
                  }), c ? (0, n.jsx)("h5", {
                    className: v.title,
                    "aria-hidden": !0,
                    children: t.title
                  }) : ""]
                })
              }, t.id)))
            })]
          })
        },
        _ = ({
          collection: e,
          games: a = []
        }) => {
          const i = [6, 10, 15].includes(e.id) ? "1/1" : [9, 11, 12, 13].includes(e.id) ? "64/79" : [14].includes(e.id) ? "/5" : "16/9";
          switch (e.title_slug) {
            case "apps":
              return (0, n.jsx)(b, {
                collection: e
              });
            case "gamespcmac":
              return (0, n.jsx)(f, {
                collection: e,
                games: a
              });
            case "goldbars":
              return (0, n.jsx)(N, {
                collection: e
              });
            case "patches":
              return (0, n.jsx)(h, {
                collection: e
              });
            case "sharkcards":
              return (0, n.jsx)(w, {
                collection: e
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, n.jsx)(j, {
                collection: e,
                imgRatio: i
              })
          }
        },
        y = ({
          collection: e
        }) => (0, n.jsx)(r.A, {
          to: `/downloads?collection=${e.id}`,
          "data-gtm-category": "Downloads",
          "data-gtm-action": "Collection : Misc",
          "data-gtm-label": e.title,
          onClick: () => {
            window.scrollTo(0, 0)
          },
          children: (0, n.jsxs)("div", {
            className: v.card,
            children: [(0, n.jsx)("div", {
              className: v.img,
              style: {
                "--aspect-ratio": "1/1",
                backgroundImage: `url(${e.preview})`
              }
            }), (0, n.jsx)("h5", {
              className: v.title,
              children: e.title
            })]
          })
        }),
        x = (0, d.withTranslations)((({
          collections: e,
          t: a
        }) => (0, n.jsxs)("div", {
          className: v.collection,
          children: [(0, n.jsx)("h2", {
            className: v.sectionHeader,
            children: a("Miscellaneous")
          }), (0, n.jsx)("div", {
            className: v.grid,
            children: e.map((e => (0, n.jsx)(y, {
              collection: e
            }, e.id)))
          })]
        }))),
        S = (0, d.withTranslations)((({
          data: {
            featured: e,
            game: a
          },
          t: i
        }) => (0, n.jsxs)("div", {
          className: v.featured,
          children: [(0, n.jsxs)("div", {
            className: [v.gridLarge, v.hero].join(" "),
            children: [(0, n.jsx)("div", {
              style: {
                "--aspect-ratio": "1/1"
              },
              className: [v.img, v[a.titleSlug]].join(" ")
            }), (0, n.jsxs)("div", {
              className: v.featuredDesc,
              children: [(0, n.jsxs)("div", {
                className: v.text,
                children: [(0, n.jsx)("h2", {
                  children: a.title
                }), (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a.description
                  }
                })]
              }), (0, n.jsx)(c.A, {
                to: "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Featured Item",
                "data-gtm-label": "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                children: i("Download Now")
              })]
            })]
          }), (0, n.jsx)("h2", {
            className: v.sectionHeader,
            children: i("Featured Downloads")
          }), (0, n.jsx)("div", {
            className: v.gridLarge,
            children: e.map((e => (0, n.jsx)(r.A, {
              to: e.href,
              target: e.href.startsWith("http") ? "_blank" : "_self",
              "data-gtm-category": "Downloads",
              "data-gtm-action": `Featured: ${e.title_key}`,
              "data-gtm-label": e.href,
              children: (0, n.jsxs)("div", {
                className: v.card,
                children: [(0, n.jsx)("div", {
                  style: {
                    "--aspect-ratio": "780/373"
                  },
                  className: [v[e.name], v.img].join(" ")
                }), (0, n.jsx)("h5", {
                  className: v.title,
                  children: i(e.title_key)
                })]
              })
            }, e.name)))
          })]
        }))),
        F = (0, d.withTranslations)((({
          collection: e,
          imgRatio: a,
          t: i
        }) => {
          const d = e.title_slug,
            s = (0, t.useRef)();
          return (0, t.useEffect)((() => {
            s?.current && s.current.focus()
          }), [s]), (0, n.jsxs)("div", {
            ref: s,
            "aria-label": `${e.title}${e?.series?.[0]?.title?", "+e?.series?.[0]?.title:""}`,
            children: [(0, n.jsxs)("div", {
              className: [v.sectionHeader, v.series].join(" "),
              children: [(0, n.jsx)("h4", {
                className: v.collectionTitle,
                children: (0, n.jsx)(r.A, {
                  to: `/downloads?collection=${e.id}`,
                  children: e.title
                })
              }), (0, n.jsx)("h2", {
                className: v.seriesTitle,
                children: `${e?.series?.[0]?.title??""}`
              })]
            }), (0, n.jsx)("div", {
              className: v.grid,
              children: e.series.map((({
                groups: t
              }) => t.map((t => (0, n.jsxs)("div", {
                className: v.downloadItem,
                children: [(0, n.jsx)("div", {
                  className: v.img,
                  "aria-label": t.label,
                  style: {
                    backgroundImage: `url(${t?.thumb??t?.preview})`,
                    "--aspect-ratio": a
                  }
                }), (0, n.jsxs)("div", {
                  className: v.label,
                  children: [(0, n.jsx)("h5", {
                    children: i(t.label)
                  }), (0, n.jsx)(p, {
                    links: "dlc" === d || "music" === d ? t.platform : "gamescreensaver" === d ? t.screensavers : "gamewallpaper" === d || "rockstarwallpaper" === d ? t.wallpapers : t.avatars,
                    collectionId: e.id,
                    label: t.label,
                    title: e.series[0].title,
                    name: ["gamewallpaper", "avatars", "rockstarwallpaper"].includes(d) ? i("Select Size") : ["gamescreensaver"].includes(d) ? i("Select") : ""
                  })]
                })]
              }, t.id)))))
            })]
          })
        }));
      var V = i(87790),
        D = i(31222),
        A = i(26195);
      const T = D.Downloads ?? A.Downloads,
        I = (0, d.withTranslations)((({
          t: e
        }) => {
          const {
            setBreadcrumb: a
          } = (0, V.b)(), i = (0, d.useQueryParams)(), [s, l] = (0, t.useState)(null), [r, m] = (0, t.useState)(null), {
            loading: c,
            refetch: o
          } = (0, d.useQuery)(T, {
            variables: s,
            skip: !0,
            autoSetLoading: !0
          });
          if ((0, t.useEffect)((() => {
              m(null);
              const e = null !== i.get("series"),
                a = {
                  seriesId: Number(i.get("series")),
                  collectionId: Number(i.get("collection")),
                  numAppsToGet: "10" === i.get("collection") ? 100 : 4,
                  numGamesToGet: "11" === i.get("collection") ? 100 : 4,
                  withIndex: null === i.get("collection") && null === i.get("series"),
                  withGames: null === i.get("collection") || "11" === i.get("collection"),
                  withCollection: null !== i.get("collection"),
                  withSeries: e,
                  withDlcs: "12" === i.get("collection"),
                  withGroups: e,
                  withMusics: "13" === i.get("collection"),
                  withGoldbars: "15" === i.get("collection"),
                  withApps: "10" === i.get("collection"),
                  withPatches: "9" === i.get("collection"),
                  withSharkCards: "14" === i.get("collection")
                };
              l(a)
            }), [i.get("series"), i.get("collection"), m]), (0, t.useEffect)((() => {
              let i = [{
                href: "/downloads",
                title: e("Downloads")
              }];
              return r?.collection?.id && s.withSeries && (i = [...i, {
                href: `/downloads?collection=${r.collection.id}`,
                title: r.collection.title
              }]), a(i), () => {
                a()
              }
            }), [r, s]), (0, t.useEffect)((() => {
              s && (async () => {
                const e = await o(s);
                m(e.data)
              })()
            }), [o, s]), !r || c) return null;
          if (s.withIndex) return (0, n.jsx)("div", {
            className: v.index,
            children: (0, n.jsxs)("div", {
              className: v.sections,
              children: [(0, n.jsx)(S, {
                data: r
              }), (0, n.jsx)(f, {
                homepage: !0,
                games: r.pcMacGames,
                collection: r.collections.find((e => "gamespcmac" === e.title_slug))
              }), (0, n.jsx)(b, {
                homepage: !0,
                collection: r.collections.find((e => "apps" === e.title_slug))
              }), (0, n.jsx)(x, {
                collections: r.collections.filter((e => !["apps", "gamespcmac", "sharkcards"].includes(e.title_slug)))
              })]
            })
          });
          if (s.withSeries) {
            const e = [6, 12, 13].includes(s.collectionId) ? "1/1" : "16/9";
            return (0, n.jsx)("div", {
              className: v.index,
              children: (0, n.jsx)(F, {
                collection: r.collection,
                imgRatio: e
              })
            })
          }
          return s.withCollection ? (0, n.jsx)("div", {
            className: v.index,
            children: (0, n.jsx)(_, {
              collection: r.collection,
              games: r.pcMacGames
            })
          }) : null
        }))
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    39294: (e, a, i) => {
      var n = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 6522,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function t(e) {
        var a = d(e);
        return i(a)
      }

      function d(e) {
        if (!i.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      t.keys = function() {
        return Object.keys(n)
      }, t.resolve = d, e.exports = t, t.id = 39294
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, i) => {
      var n = {
        "./VI/desktop.jpg": 67496
      };

      function t(e) {
        var a = d(e);
        return i(a)
      }

      function d(e) {
        if (!i.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      t.keys = function() {
        return Object.keys(n)
      }, t.resolve = d, e.exports = t, t.id = 53781
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    86751: (e, a, i) => {
      var n = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 6522,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function t(e) {
        var a = d(e);
        return i(a)
      }

      function d(e) {
        if (!i.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      t.keys = function() {
        return Object.keys(n)
      }, t.resolve = d, e.exports = t, t.id = 86751
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    }
  }
]);