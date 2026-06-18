try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b095ec38-f3a1-407e-8cbb-b1cab8f0de56", e._sentryDebugIdIdentifier = "sentry-dbid-b095ec38-f3a1-407e-8cbb-b1cab8f0de56")
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
  [2074], {
    9276(e, t, a) {
      "use strict";
      a.d(t, {
        f: () => r
      });
      var r = {
        mobile: "(min-width: 0px) and (max-width: 767.98px)",
        mobileSmall: "(min-width: 0px) and (max-width: 499.98px)",
        mobileMedium: "(min-width: 500px) and (max-width: 767.98px)",
        tabletSmall: "(min-width: 768px) and (max-width: 1023.98px)",
        tabletMedium: "(min-width: 1024px) and (max-width: 1279.98px)",
        tabletSmallAndMedium: "(min-width: 768px) and (max-width: 1279.98px)",
        tabletLarge: "(min-width: 1280px) and (max-width: 1439.98px)",
        tabletMediumAndLarge: "(min-width: 1024px) and (max-width: 1439.98px)",
        tablet: "(min-width: 768px) and (max-width: 1439.98px)",
        desktop: "(min-width: 1440px) and (max-width: 2559.98px)",
        desktopSmall: "(min-width: 1440px) and (max-width: 1919.98px)",
        desktopMedium: "(min-width: 1920px) and (max-width: 2559.98px)",
        tabletAndDesktop: "(min-width: 768px) and (max-width: 2559.98px)",
        mobileMediumAndLarger: "(min-width: 500px)",
        tabletSmallAndLarger: "(min-width: 768px)",
        tabletMediumAndLarger: "(min-width: 1024px)",
        tabletMediumAndSmaller: "(max-width: 1023.98px)",
        tabletLargeAndLarger: "(min-width: 1280px)",
        tabletLargeAndSmaller: "(max-width: 1279.98px)",
        desktopSmallAndLarger: "(min-width: 1440px)",
        desktopMediumAndLarger: "(min-width: 1920px)",
        desktopLargeAndLarger: "(min-width: 2560px)",
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
        mobileLandscape: "(min-width: 500px) and (max-width: 767px) and (orientation: landscape)"
      }
    },
    25655(e) {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
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
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 190
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        tina {\n            payload\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      }), e.exports = t, e.exports.MetaUrlInfo = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = r[t] || new Set,
          s = new Set,
          i = new Set;
        for (o.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach(function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return s.forEach(function(t) {
          var r = n(e, t);
          r && a.definitions.push(r)
        }), a
      }(t, "MetaUrlInfo")
    },
    70386(e) {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                      value: "withMetaTitle"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
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
          end: 394
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      }), e.exports = t, e.exports.GameData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = r[t] || new Set,
          s = new Set,
          i = new Set;
        for (o.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach(function(e) {
            s.has(e) || (s.add(e), (r[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return s.forEach(function(t) {
          var r = n(e, t);
          r && a.definitions.push(r)
        }), a
      }(t, "GameData")
    },
    98166() {},
    35318(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var r = a(39793),
        n = a(93082),
        o = a(13331),
        s = a(74645),
        i = a(81270);
      const c = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: n,
            buttonText: o,
            extraClasses: c,
            isDisabled: l,
            isLink: d,
            link: _,
            onClick: u,
            testId: m
          } = e;
          return d ? o && (0, r.jsx)(s.Button, {
            asChild: !0,
            appearance: a,
            size: "LG",
            children: (0, r.jsx)("a", {
              href: _,
              ...m && {
                "data-testid": m
              },
              children: o
            })
          }) : (0, r.jsx)(s.Button, {
            autoFocus: !0,
            iconRight: n,
            className: (0, i.default)(c),
            isDisabled: l,
            onPress: e => (e => {
              u && u(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: a,
            size: "LG",
            "aria-label": o,
            ...m && {
              "data-testid": m
            },
            children: o
          })
        },
        l = {
          actions: "rockstargames-sites-rockstargamesd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-rockstargamesb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-rockstargamesefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-rockstargamesd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-rockstargamesf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-rockstargamese30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-rockstargamesdab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-rockstargamesbc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-rockstargamesb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-rockstargamesf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-rockstargamesb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-rockstargamesa6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-rockstargamesb2b3117a07a11b3ec5897e4718e24373"
        },
        d = ({
          icon: e,
          title: t,
          secondaryText: a,
          buttons: s,
          showDialog: i,
          onClose: d = () => {},
          closeOnOutsideClick: _ = !0,
          extraClasses: u
        }) => {
          const m = (0, n.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, o.useBodyScrollable)("AlertDialog");
          (0, n.useEffect)(() => {
            i && m?.current && (m.current?.showModal?.(), g(!0))
          }, [i]);
          const b = () => {
            g(!1), d(), m.current?.close?.()
          };
          if (i) return (0, r.jsxs)("dialog", {
            ref: m,
            className: l.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && _ && (g(!1), d(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, r.jsx)("i", {
              className: [l.icon, l[e]].join(" ")
            }), (0, r.jsxs)("div", {
              className: [l.content, u?.content].join(" "),
              children: [(0, r.jsx)("h3", {
                className: [l.heading, u?.heading].join(" "),
                children: t
              }), a && (0, r.jsx)("div", {
                className: [l.message, u?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), s && (0, r.jsx)("div", {
              className: l.actions,
              children: s.slice(0, 2).map((e, t) => (0, r.jsx)(c, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: b
              }, e.buttonText))
            })]
          })
        }
    },
    72132(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var r = a(39793),
        n = a(57821),
        o = a.n(n);
      const s = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        c = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? i : s, (0, r.jsx)(o(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    63218(e, t, a) {
      "use strict";
      a.d(t, {
        YT: () => s,
        Ay: () => i
      });
      var r = a(39793),
        n = a(90067);
      var o = a(81270);
      var s = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const i = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: s,
          alt: i
        } = ((e, t) => {
          const a = "small" === t;
          switch (e) {
            case "pc":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, e);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            className: (0, o.default)("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", a),
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": e,
            src: s,
            alt: "",
            "aria-hidden": !0
          }), (0, r.jsx)(n.s6, {
            children: i
          })]
        })
      }
    },
    44293(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => b
      });
      var r = a(39793),
        n = a(93082),
        o = a(42909),
        s = a(13331),
        i = a(42285),
        c = a(82199),
        l = a(38044),
        d = a(59426);
      const _ = {
          rating: "rockstargames-sites-rockstargamesc3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-rockstargamesbabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-rockstargamesb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-rockstargamesb6339480b5fd086fb0c025930bfb7dcd"
        },
        u = (0, o.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var m = a(70386),
        g = a(30433);
      (0, s.importAll)(a(36672));
      const b = (0, d.A)((0, g.g)(({
        descriptors: e = null,
        footer: t = null,
        href: d,
        img: g = null,
        titleSlug: b = null,
        style: f = {},
        className: p,
        ...h
      }) => {
        const [y, k] = (0, n.useState)(!1), {
          inView: v
        } = (0, i.useInView)({
          threshold: .6
        }), [x, j] = (0, n.useState)({
          ratingDescriptors: e,
          ratingFooter: t,
          ratingImg: g,
          ratingUrl: d
        }), {
          track: w
        } = (0, c.useGtmTrack)(), C = (0, o.useIntl)(), {
          data: R
        } = (0, s.useQuery)(m.GameData, {
          variables: {
            titleSlug: b
          },
          skip: !b
        });
        if ((0, n.useEffect)(() => {
            R && j(R?.game)
          }, [R]), (0, n.useEffect)(() => {
            v && !y && x.ratingImg && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), k(!0))
          }, [v]), !x.ratingImg) return null;
        const S = !!x.ratingDescriptors;
        return (0, r.jsxs)("div", {
          className: [_.rating, S ? _.withDescriptors : _.withOutDescriptors, p || ""].join(" "),
          style: (0, s.safeStyles)(f),
          "data-testid": "rating",
          ...h,
          children: [(0, r.jsx)(l.A, {
            to: x.ratingUrl,
            target: "_blank",
            children: (0, r.jsx)("img", {
              alt: C.formatMessage(u.components_ratings_link_alt, {
                rating: (N = x.ratingImg, N.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${x.ratingImg}`)
            })
          }), S && (0, r.jsxs)("div", {
            className: _.text,
            children: [(0, r.jsx)("p", {
              className: _.descriptors,
              dangerouslySetInnerHTML: {
                __html: x?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), x.ratingFooter && (0, r.jsx)("hr", {}), x.ratingFooter && (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: x.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var N
      }))
    },
    51550(e, t, a) {
      "use strict";
      a.d(t, {
        L: () => c
      });
      var r = a(39793),
        n = a(93082),
        o = a(27859);
      var s = a(81270);
      const i = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        c = (0, n.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: n,
          testId: c,
          ...l
        }, d) {
          const _ = i(e),
            u = (0, o.v6)(l, {
              className: (0, s.default)("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", a),
              "data-testid": c
            });
          return (0, r.jsxs)("div", {
            "data-size": t,
            ref: d,
            ...u,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": n,
              className: "rockstargames-sites-rockstargamesa3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": i(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: _
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-sites-rockstargamesd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        })
    },
    59426(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => s
      });
      var r = a(39793),
        n = a(93082);
      class o extends n.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const s = (e, t = null, a = !1) => {
        const n = n => (0, r.jsx)(o, {
          header: t,
          hidden: a,
          children: (0, r.jsx)(e, {
            ...n
          })
        });
        return n.displayName = `withSimpleErrorBoundary(${e.displayName||e.name||"Component"})`, n
      }
    },
    37840(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => n,
        RSG_CTA_FRAGMENT: () => o,
        RSG_GAME_FRAGMENT: () => s,
        RSG_ICON_FRAGMENT: () => i,
        RSG_IMAGE_FILE_FRAGMENT: () => c,
        RSG_IMAGE_FRAGMENT: () => l,
        RSG_VIDEO_FILE_FRAGMENT: () => P,
        RSG_VIDEO_FRAGMENT: () => G,
        SYS_FRAGMENT: () => d,
        WWW_BANNER_FRAGMENT: () => _,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => m,
        WWW_DIVIDER_FRAGMENT: () => g,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => b,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => f,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => p,
        WWW_GRID_FRAGMENT: () => h,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => y,
        WWW_GRID_WRAPPER_FRAGMENT: () => k,
        WWW_IMAGE_BLOCK_FRAGMENT: () => v,
        WWW_IMAGE_CARD_FRAGMENT: () => x,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => j,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => w,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => R,
        WWW_MASONRY_GRID_FRAGMENT: () => S,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => N,
        WWW_PROMO_MODULE_FRAGMENT: () => I,
        WWW_REACT_COMPONENT_FRAGMENT: () => A,
        WWW_SECTION_WRAPPER_FRAGMENT: () => z,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => T,
        WWW_TEXT_BLOCK_FRAGMENT: () => M,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => D,
        WWW_THEME_PROVIDER_FRAGMENT: () => F,
        WWW_VIDEO_PLAYER_FRAGMENT: () => L,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => E,
        wwwBottomSheetQuery: () => q,
        wwwPageQuery: () => W
      });
      var r = a(3710);
      const n = r.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        o = r.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        s = r.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ... on RsgImageFile {
          ...RsgImageFileFragment
        }
      }
    }
  }
}
`,
        i = r.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        c = r.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        l = r.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  sys {
    ...SysFragment
  }
  altText
  imageFilesCollection(
    limit: 8
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        d = r.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        _ = r.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        u = r.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
      ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  cardsCollection(limit: 4) {
      items {
          __typename
          ... on WwwImageCard {
              ...WwwImageCardFragment
          }
          ... on WwwImageBlock {
            ...WwwImageBlockFragment
          }
      }
  }
}
`,
        m = r.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
        ...SysFragment
    }
    playbackBehavior
    scrimColor
    landscapeViewportBehavior
    overlayElements {
        ...WwwGridWrapperFragment
    }
    video {
        ...RsgVideoFragment
    }
    squareVideo {
        ...RsgVideoFragment
    }
}
`,
        g = r.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
          ...SysFragment
    }
    thickness
    style
}
`,
        b = r.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        f = r.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
      navColor
    }
  }
}
`,
        p = r.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    sys {
      ...SysFragment
    }
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        h = r.gql`
fragment WwwGridFragment on WwwGrid {
    __typename
    sys {
        ...SysFragment
    }
    contentCollection(limit: 10) {
        items {
            ... on WwwTextBlock {
                ...WwwTextBlockFragment
            }
            ... on WwwImageCard {
                ...WwwImageCardFragment
            }
            ... on WwwImageBlock {
              ...WwwImageBlockFragment
            }
            ... on WwwImageCarousel {
              ...WwwImageCarouselFragment
            }
            ... on WwwLinkOutImage {
              ...WwwLinkOutImageFragment
            }
            ... on RsgImage {
              ...RsgImageFragment
            }
            ... on RsgImageFile {
              ...RsgImageFileFragment
            }
        }
    }
    layout {
        breakpointsCollection(limit: 8) {
            items {
                ... on WwwGridLayoutBreakpoint {
                    ...WwwGridLayoutBreakpointFragment
                }
            }
        }
    }
}
`,
        y = r.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
    __typename
    sys {
        ...SysFragment
    }
    mediaQuery
    columns
    behavior
    alignment
}
`,
        k = r.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
    __typename
    sys {
        ...SysFragment
    }
    title
    theme {
      ...WwwThemeProviderFragment
    }
    gap
    contentCollection(limit: 6) {
        items {
            ... on WwwGrid {
              ...WwwGridFragment
            }
        }
    }
}
`,
        v = r.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ... on RsgImageFile {
      ...RsgImageFileFragment
    }
    ... on WwwLightboxImage {
      ...WwwLightboxImageFragment
    }
  }
  textAlignment
  title
  titleSize
}
`,
        x = r.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        j = r.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ... on WwwImageBlock {
        ...WwwImageBlockFragment
      }
    }
  }
}
`,
        w = r.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        C = r.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        R = r.gql`
fragment WwwLinkOutImageFragment on WwwLinkOutImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  link {
    url
  }
  image {
    ...RsgImageFragment
  }
}
`,
        S = r.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        N = r.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        I = r.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        A = r.gql`
fragment WwwReactComponentFragment on WwwReactComponent {
  __typename
  sys {
    ...SysFragment
  }
  componentName
  componentProps
}
`,
        E = r.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
    __typename
    sys {
        ...SysFragment
    }
    tinaPageUrl
}
`,
        z = r.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  title
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ... on RsgContentRating {
        ...RsgContentRatingFragment
      }
      ... on RsgImage {
        ...RsgImageFragment
      }
      ... on WwwBanner {
        ...WwwBannerFragment
      }
      ... on WwwEditorialGridModule {
        ...WwwEditorialGridModuleFragment
      }
      ... on WwwLinkOutImage {
        ...WwwLinkOutImageFragment
      }
      ... on WwwMasonryGrid {
        ...WwwMasonryGridFragment
      }
      ... on WwwNewsletterSubscribe {
        ...WwwNewsletterSubscribeFragment
      }
      ... on WwwDecorativeVideo {
        ...WwwDecorativeVideoFragment
      }
      ... on WwwDivider {
        ...WwwDividerFragment
      }
      ... on WwwGridWrapper {
        ...WwwGridWrapperFragment
      }
      ... on WwwDeck {
        ...WwwDeckFragment
      }
      
      ... on WwwSupportCalloutModule {
        ...WwwSupportCalloutModuleFragment
      }
      ... on WwwWebOfferClaim {
        ...WwwWebOfferClaimFragment
      }
    }
  }
}
`,
        T = r.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        M = r.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
    __typename
    sys {
        ...SysFragment
    }
    badge
    eyebrow
    header
    body
    ctasCollection(limit: 4) {
        items {
            __typename
            sys {
                ...SysFragment
            }
            ...RsgCtaFragment
        }
    }
    footnote
    headerSize
    bodySize
    alignment
    headerTextWrap
    bodyTextWrap
}
`,
        D = r.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ... on RsgRichText {
      __typename
      sys {
        ...SysFragment
      }
      content {
        json
      }
    }
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        F = r.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        P = r.gql`
fragment RsgVideoFileFragment on RsgVideoFile {
  __typename
  sys {
    ...SysFragment
  }
  codec
  context
  height
  posterImage {
    ...RsgImageFileFragment
  }
  upload {
    url
    title
  }
  url
  width
}
`,
        G = r.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
  videoFilesCollection(limit: 3) {
    items {
      ...RsgVideoFileFragment
    }
  }
}
`,
        L = r.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    ... on RsgGroup {
      referencesCollection(limit: 20) {
        items {
          ... on RsgVideo {
            ...RsgVideoFragment
          }
        }
      }
    }
  }
}
`,
        W = r.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ... on WwwDivider {
              ...WwwDividerFragment
            }
            ... on WwwFeaturedContentCarousel {
              ...WwwFeaturedContentCarouselFragment
            }
            ... on WwwFeaturedGameSection {
              ...WwwFeaturedGameSectionFragment
            }
            ... on WwwImagesMarqueeModule {
              ...WwwImagesMarqueeModuleFragment
            }
            ... on WwwPromoModule {
              ...WwwPromoModuleFragment
            }
            ... on WwwSectionWrapper {
              ...WwwSectionWrapperFragment
            }
            ... on WwwTextWithBadge {
              ...WwwTextWithBadgeFragment
            }
          }
        }
      }
    }
  }
  ${n}
  ${o}
  ${i}
  ${c}
  ${l}
  ${P}
  ${G}
  ${d}
  ${_}
  ${u}
  ${m}
  ${g}
  ${b}
  ${f}
  ${p}
  ${h}
  ${y}
  ${k}
  ${v}
  ${x}
  ${j}
  ${w}
  ${C}
  ${R}
  ${S}
  ${N}
  ${I}
  
  ${z}
  ${T}
  ${M}
  ${D}
  ${F}
  ${E}
`,
        q = r.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ... on WwwVideoPlayer {
              ...WwwVideoPlayerFragment
            }
          }
        }
      }
    }
  }
  ${c}
  ${P}
  ${G}
  ${d}
  ${L}
`
    },
    99447(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: () => qs
      });
      var r = a(39793),
        n = a(93082),
        o = a(26152),
        s = a(13331),
        i = a(42909),
        c = a(72701),
        l = a(31655),
        d = a(37840),
        _ = a(36416);
      const u = (0, n.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        m = ({
          children: e
        }) => {
          const [t, a] = (0, _.useSearchParams)(), [o, s] = (0, n.useState)(""), [i, c] = (0, n.useState)(!1), l = () => {
            const e = !i;
            c(e), e || (s(""), a(e => (e.delete("view"), e), {
              replace: !0
            }))
          };
          (0, n.useEffect)(() => {
            const e = t.get("view");
            e ? (s(e), c(!0)) : (s(""), c(!1))
          }, [t]);
          const d = (0, n.useMemo)(() => ({
            open: i,
            onOpenChange: l,
            slug: o
          }), [i, o]);
          return (0, r.jsx)(u.Provider, {
            value: d,
            children: e
          })
        };
      var g = a(84173);
      const b = (0, i.defineMessages)({
        bottom_sheet_modal_close_icon: {
          id: "bottom_sheet_modal_close_icon",
          description: "Label for X icon to close modal in Bottom Sheet",
          defaultMessage: "Close"
        }
      });
      var f = a(82199),
        p = a(42285),
        h = a(85624);
      const y = (0, n.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        }),
        k = ({
          theme: e,
          children: t
        }) => e ? (0, r.jsx)(y.Provider, {
          value: {
            ...e
          },
          children: t
        }) : t;
      var v = a(69353);
      const x = (0, n.forwardRef)(function({
        href: e,
        testId: t,
        ...a
      }, n) {
        const o = (0, i.linkWithLocale)(e || ""),
          s = (0, v.v6)(a, {
            "data-testid": t
          });
        return o.isExternal ? (0, r.jsx)("a", {
          href: o.link,
          target: "_blank",
          rel: "noreferrer",
          ...s,
          ref: n
        }) : (0, r.jsx)(_.Link, {
          to: o.link,
          target: "_self",
          ...s,
          ref: n
        })
      });
      var j = a(46966),
        w = a(9276),
        C = a(16630),
        R = (0, C.c)({
          defaultClassName: "_1ksuttk0",
          variantClassNames: {
            showOn: {
              mobile: "_1ksuttk1",
              mobileSmall: "_1ksuttk2",
              mobileMedium: "_1ksuttk3",
              tabletSmall: "_1ksuttk4",
              tabletMedium: "_1ksuttk5",
              tabletSmallAndMedium: "_1ksuttk6",
              tabletLarge: "_1ksuttk7",
              tabletMediumAndLarge: "_1ksuttk8",
              tablet: "_1ksuttk9",
              desktop: "_1ksuttka",
              desktopSmall: "_1ksuttkb",
              desktopMedium: "_1ksuttkc",
              tabletAndDesktop: "_1ksuttkd",
              mobileMediumAndLarger: "_1ksuttke",
              tabletSmallAndLarger: "_1ksuttkf",
              tabletMediumAndLarger: "_1ksuttkg",
              tabletMediumAndSmaller: "_1ksuttkh",
              tabletLargeAndLarger: "_1ksuttki",
              tabletLargeAndSmaller: "_1ksuttkj",
              desktopSmallAndLarger: "_1ksuttkk",
              desktopMediumAndLarger: "_1ksuttkl",
              desktopLargeAndLarger: "_1ksuttkm",
              portrait: "_1ksuttkn",
              landscape: "_1ksuttko",
              mobileLandscape: "_1ksuttkp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const S = ({
        showOn: e,
        forceMount: t = !1,
        ...a
      }) => {
        const o = (0, v.v6)(a, {
            className: R({
              showOn: e
            })
          }),
          s = (0, n.useMemo)(() => t ? void 0 : window?.matchMedia?.(w.f[e]), [e, window]);
        return (s?.matches ?? !0) && (0, r.jsx)(g.DX, {
          ...o
        })
      };
      a(98166);
      var N = "var(--rd0xso2)",
        I = "var(--rd0xso1)",
        A = "rd0xso6",
        E = "var(--rd0xso0)";
      const z = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          topPaddingMultiplier: n,
          bottomPaddingMultiplier: o,
          backgroundCss: s,
          backgroundImage: i,
          ...c
        }, l) {
          const d = t ? g.DX : "section",
            _ = (0, v.v6)({
              "data-testid": a,
              className: "rd0xso3",
              style: (0, j.DI)({
                [E]: n ?? "0.5",
                [I]: o ?? "0.5",
                [N]: s,
                backgroundImage: i ? `url(${i})` : ""
              })
            }, c);
          return (0, r.jsx)(d, {
            ref: l,
            ..._,
            children: e
          })
        }),
        T = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          if (!e) return;
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "rd0xso4 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        M = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : l.Heading,
            i = (0, v.v6)({
              "data-testid": a,
              className: "rd0xso5 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        D = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          label: a,
          url: n,
          iconRight: o = "ArrowRight",
          isExternal: s = !1,
          ...i
        }, c) {
          const d = (0, v.v6)({
            "data-testid": e
          }, i);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(S, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, r.jsx)(l.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: o,
                className: A,
                label: a,
                ...d,
                ref: c,
                asChild: !0,
                children: (0, r.jsx)(x, {
                  href: n,
                  target: s ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(S, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, r.jsx)(l.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: o,
                className: A,
                label: a,
                ...d,
                ref: c,
                asChild: !0,
                children: (0, r.jsx)(x, {
                  href: n,
                  target: s ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(S, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, r.jsx)(l.Button, {
                size: "XL",
                appearance: "ghost",
                iconRight: o,
                className: "rd0xso7",
                "aria-label": a,
                ...d,
                ref: c,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, r.jsx)(x, {
                  href: n,
                  target: s ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        F = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "rd0xso8"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        P = {
          none: 0,
          default: .5,
          double: 1
        },
        G = (0, n.createContext)({
          analyticsData: void 0
        }),
        L = "WwwSectionWrapper",
        W = () => {
          const {
            analyticsData: e
          } = (0, n.useContext)(G), {
            track: t
          } = (0, f.useGtmTrack)(), a = e?.element_placement;
          return {
            trackEvent: (e, r) => {
              const n = r?.analyticsData || {};
              return t({
                ...r?.link?.url && {
                  link_url: r?.link?.url
                },
                ...e,
                element_placement: a,
                ...n
              })
            },
            trackRichTextHyperlink: e => t({
              event: "site_link_click",
              link_url: e.data.uri,
              text: e.content[0].value,
              element_placement: a
            }),
            useTrackPageSectionImpression: e => {
              const r = (0, n.useCallback)(r => {
                  r && t({
                    event: "page_section_impression",
                    element_placement: a,
                    ...e
                  })
                }, [t]),
                {
                  ref: o,
                  inView: s
                } = (0, p.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: r
                });
              return {
                ref: o,
                inView: s
              }
            }
          }
        };
      var q = a(88819);
      const V = ({
          testId: e,
          ...t
        }) => {
          const a = (0, v.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, r.jsx)(q.bL, {
            ...a
          })
        },
        O = ({
          testId: e,
          ...t
        }) => {
          const a = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(q.ZL, {
            ...a
          })
        },
        B = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, v.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, r.jsx)(q.hJ, {
            ref: a,
            ...n
          })
        }),
        $ = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const o = (0, v.v6)(a, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, r.jsx)(q.UC, {
            ref: n,
            ...o,
            children: t
          })
        }),
        U = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const o = (0, v.v6)(a, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: t
          })
        }),
        X = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, v.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, r.jsx)(q.bm, {
            ref: a,
            ...n
          })
        }),
        H = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(q.hE, {
            ref: a,
            ...n
          })
        }),
        K = (0, n.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, v.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(q.VY, {
            ref: a,
            ...n
          })
        }),
        Y = () => {
          const {
            trackEvent: e
          } = W(), {
            formatMessage: t
          } = (0, i.useIntl)(), [a, o] = (0, n.useState)(!1), {
            slug: _,
            open: m,
            onOpenChange: f
          } = (() => {
            const e = (0, n.useContext)(u);
            if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
            return {
              open: e.open,
              slug: e.slug,
              onOpenChange: e.onOpenChange
            }
          })(), p = (0, s.usePrevious)(_), [h, y] = (0, n.useState)(null), {
            loading: k,
            error: v,
            data: x
          } = (0, c.useContentfulQuery)({
            query: d.wwwBottomSheetQuery,
            variables: {
              slug: _
            },
            skip: !_
          });
          if ((0, n.useEffect)(() => {
              a !== m && (o(m), y(document.activeElement), m ? e({
                event: "modal_open",
                card_id: _,
                card_name: _,
                text: _
              }) : (e({
                event: "modal_close",
                card_id: p,
                card_name: p,
                text: p
              }), h?.focus(), y(null)))
            }, [m, a]), !_) return;
          let j = null;
          return !x || k || v || (j = x?.wwwBottomSheetCollection?.items?.[0]), (0, r.jsx)(V, {
            open: m,
            onOpenChange: f,
            children: (0, r.jsxs)(O, {
              children: [(0, r.jsx)(B, {}), (0, r.jsxs)($, {
                children: [(0, r.jsxs)(g.s6, {
                  children: [(0, r.jsx)(H, {}), (0, r.jsx)(K, {})]
                }), (0, r.jsx)(X, {
                  children: (0, r.jsx)(l.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(b.bottom_sheet_modal_close_icon)
                  })
                }), (0, r.jsx)(U, {
                  children: j && (0, r.jsx)(J, {
                    block: j.contentCollection
                  })
                })]
              })]
            })
          })
        },
        J = ({
          block: e
        }) => {
          const {
            blockPosition: t
          } = (0, n.useContext)(c.BlockRendererContext);
          if (e) return e.items.map(e => (0, r.jsx)(c.BlockRenderer, {
            block: e,
            blockPosition: t
          }, e.sys.id))
        },
        Z = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Video wird wiedergegeben","hp_hero_stop_button_label":"Video angehalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","job_type_adversary_mode":"Gegner-Modus","job_type_air_race":"Luftrennen","job_type_arena_deathmatch":"Arena-Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Radrennen","job_type_capture":"Capture","job_type_contact_mission":"Kontaktmission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Dragsterrennen","job_type_drift_race":"Driftrennen","job_type_foot_race":"Rennen zu Fuß","job_type_hao_special_works_race":"HSW-Rennen","job_type_heist":"Raubüberfall","job_type_heist_prep":"Raubüberfall-Austrüstungsmission","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Landrennen","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission-Creator","job_type_open_wheel_race":"Open-Wheel-Rennen","job_type_parachuting":"Fallschirmsprung","job_type_pursuit_race":"Verfolgungsrennen","job_type_race":"Rennen","job_type_random_mission":"Zufällige Mission","job_type_special_race":"Spezialrennen","job_type_street_race":"Straßenrennen","job_type_stunt_race":"Stuntrennen","job_type_survival":"Überlebenskampf","job_type_target":"Zielscheibenrennen","job_type_team_deathmatch":"Team-Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Verwandlungsrennen","job_type_unknown":"Unbekannt","job_type_vehicle_deathmatch":"Fahrzeug-Deathmatch","job_type_water_race":"Seerennen","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Video Playing","hp_hero_stop_button_label":"Video Stopped","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo vídeo","hp_hero_stop_button_label":"Vídeo en pausa","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena War","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misiones de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de drift","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar del golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de coches de competición","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Partida de supervivencia","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo video","hp_hero_stop_button_label":"Video detenido","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena de Motores","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misión de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de derrapes","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar de golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de ruedas descubiertas","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Supervivencia","job_type_target":"Carrera de ataque al objetivo","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Vidéo en cours de lecture","hp_hero_stop_button_label":"Vidéo arrêtée","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","job_type_adversary_mode":"Mode rivalité","job_type_air_race":"Course aérienne","job_type_arena_deathmatch":"Affrontement en arène","job_type_arena_war":"Guerre d\'arène","job_type_bike_race":"Course à moto","job_type_capture":"Capture","job_type_contact_mission":"Mission de contact","job_type_deathmatch":"Affrontement","job_type_drag_race":"Course de dragster","job_type_drift_race":"Course de drift","job_type_foot_race":"Course à pied","job_type_hao_special_works_race":"Course d\'Hao\'s Special Works","job_type_heist":"Braquage","job_type_heist_prep":"Préparation de braquage","job_type_king_of_the_hill":"Conquête","job_type_land_race":"Course terrestre","job_type_last_team_standing":"Extermination","job_type_mission":"Mission","job_type_mission_creator":"Éditeur de missions","job_type_open_wheel_race":"Course d\'ultralégères","job_type_parachuting":"Saut en parachute","job_type_pursuit_race":"Course de poursuite","job_type_race":"Course","job_type_random_mission":"Mission aléatoire","job_type_special_race":"Course de véhicules spéciaux","job_type_street_race":"Course de rue","job_type_stunt_race":"Course nautique","job_type_survival":"Survie","job_type_target":"Course aux points","job_type_team_deathmatch":"Affrontement en équipe","job_type_team_king_of_the_hill":"Conquête en équipe","job_type_transform_race":"Course polymorphes","job_type_unknown":"Inconnu","job_type_vehicle_deathmatch":"Affrontement motorisé","job_type_water_race":"Course nautique","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Video in riproduzione","hp_hero_stop_button_label":"Riproduzione video interrotta","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","job_type_adversary_mode":"Modalità Competizione","job_type_air_race":"Gara aerea","job_type_arena_deathmatch":"Deathmatch nell\'Arena","job_type_arena_war":"Arena War","job_type_bike_race":"Gara su due ruote","job_type_capture":"Cattura","job_type_contact_mission":"Missione dei contatti","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Gara drag","job_type_drift_race":"Gara drift","job_type_foot_race":"Gara a piedi","job_type_hao_special_works_race":"Gara di Hao\'s Special Works","job_type_heist":"Colpi","job_type_heist_prep":"Missione preliminare del colpo","job_type_king_of_the_hill":"Re della collina","job_type_land_race":"Gara terrestre","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Missione","job_type_mission_creator":"Creatore di missioni","job_type_open_wheel_race":"Gara per ruote scoperte","job_type_parachuting":"Paracadutismo","job_type_pursuit_race":"Inseguimenti","job_type_race":"Gara","job_type_random_mission":"Missione casuale","job_type_special_race":"Gara con veicoli speciali","job_type_street_race":"Gara clandestina","job_type_stunt_race":"Gara stunt","job_type_survival":"Sopravvivenza","job_type_target":"Gara al bersaglio","job_type_team_deathmatch":"Deathmatch a squadre","job_type_team_king_of_the_hill":"Re della collina a squadre","job_type_transform_race":"Gara multiveicolo","job_type_unknown":"Sconosciuto","job_type_vehicle_deathmatch":"Deathmatch con veicoli","job_type_water_race":"Gara acquatica","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"ビデオ再生中","hp_hero_stop_button_label":"ビデオ停止中","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","job_type_adversary_mode":"敵対モード","job_type_air_race":"エアレース","job_type_arena_deathmatch":"アリーナデスマッチ","job_type_arena_war":"アリーナウォーズ","job_type_bike_race":"バイクレース","job_type_capture":"キャプチャー","job_type_contact_mission":"コンタクトのミッション","job_type_deathmatch":"デスマッチ","job_type_drag_race":"ドラッグレース","job_type_drift_race":"ドリフトレース","job_type_foot_race":"徒競走","job_type_hao_special_works_race":"ハオ・スペシャルワークスレース","job_type_heist":"強盗","job_type_heist_prep":"強盗調達","job_type_king_of_the_hill":"キングオブザヒル","job_type_land_race":"ランドレース","job_type_last_team_standing":"ラスト・チーム・アライブ","job_type_mission":"ミッション","job_type_mission_creator":"ミッションクリエイター","job_type_open_wheel_race":"オープンホイールレース","job_type_parachuting":"パラシューティング","job_type_pursuit_race":"追跡レース","job_type_race":"レース","job_type_random_mission":"ランダムなミッション","job_type_special_race":"特殊車両レース","job_type_street_race":"ストリートレース","job_type_stunt_race":"スタントレース","job_type_survival":"サバイバル","job_type_target":"ターゲットアサルトレース","job_type_team_deathmatch":"チームデスマッチ","job_type_team_king_of_the_hill":"チーム・キングオブザヒル","job_type_transform_race":"トランスフォームレース","job_type_unknown":"不明","job_type_vehicle_deathmatch":"マシンデスマッチ","job_type_water_race":"シーレース","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"비디오 재생 중","hp_hero_stop_button_label":"비디오 정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","job_type_adversary_mode":"대적 모드","job_type_air_race":"항공 레이스","job_type_arena_deathmatch":"아레나 데스매치","job_type_arena_war":"아레나 워","job_type_bike_race":"바이크 레이스","job_type_capture":"점령","job_type_contact_mission":"연락책 임무","job_type_deathmatch":"데스매치","job_type_drag_race":"드래그 레이스","job_type_drift_race":"드리프트 레이스","job_type_foot_race":"도보 레이스","job_type_hao_special_works_race":"하오의 스페셜 웍스 레이스 ","job_type_heist":"습격","job_type_heist_prep":"습격 준비","job_type_king_of_the_hill":"킹 오브 더 힐","job_type_land_race":"지상 레이스","job_type_last_team_standing":"라스트 팀 스탠딩","job_type_mission":"임무","job_type_mission_creator":"임무 생성기","job_type_open_wheel_race":"오픈 휠 레이스","job_type_parachuting":"낙하산 강하","job_type_pursuit_race":"추격전 레이스","job_type_race":"레이스","job_type_random_mission":"무작위 임무","job_type_special_race":"특수 차량 레이스","job_type_street_race":"길거리 레이스","job_type_stunt_race":"스턴트 레이스","job_type_survival":"서바이벌","job_type_target":"타겟 어썰트 레이스","job_type_team_deathmatch":"팀 데스매치","job_type_team_king_of_the_hill":"팀 킹 오브 더 힐","job_type_transform_race":"변신 레이스","job_type_unknown":"알 수 없음","job_type_vehicle_deathmatch":"이동 수단 데스매치","job_type_water_race":"해상 레이스","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Teraz odtwarzane","hp_hero_stop_button_label":"Wideo zatrzymane","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","job_type_adversary_mode":"Tryb adwerszarza","job_type_air_race":"Wyścig powietrzny","job_type_arena_deathmatch":"Deathmatch na arenie","job_type_arena_war":"Arena wojny","job_type_bike_race":"Wyścig jednośladów","job_type_capture":"Zdobywanie","job_type_contact_mission":"Misja od kontaktów","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Wyścig równoległy","job_type_drift_race":"Wyścig driftowe","job_type_foot_race":"Wyścig pieszy","job_type_hao_special_works_race":"Wyścigi Hao’s Special Works","job_type_heist":"Napad","job_type_heist_prep":"Misja w terenie","job_type_king_of_the_hill":"Król wzgórza","job_type_land_race":"Wyścig lądowy","job_type_last_team_standing":"Ostatnia drużyna wygrywa","job_type_mission":"Misja","job_type_mission_creator":"Kreator misji","job_type_open_wheel_race":"Wyścig bolidów","job_type_parachuting":"Skoki spadochronowe","job_type_pursuit_race":"Pościg","job_type_race":"Wyścig","job_type_random_mission":"Losowa misja","job_type_special_race":"Wyścig pojazdów specjalnych","job_type_street_race":"Wyścig uliczny","job_type_stunt_race":"Wyścig kaskaderski","job_type_survival":"Walka o przetrwanie","job_type_target":"Wyścig strzelecki","job_type_team_deathmatch":"Deathmatch drużynowy","job_type_team_king_of_the_hill":"Drużynowy Król wzgórza","job_type_transform_race":"Wyścig z transformacją","job_type_unknown":"Nieznane","job_type_vehicle_deathmatch":"Deathmatch w pojazdach","job_type_water_race":"Wyścig morski","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Vídeo em reprodução","hp_hero_stop_button_label":"Vídeo parado","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","job_type_adversary_mode":"Modo Adversário","job_type_air_race":"Corrida Aérea","job_type_arena_deathmatch":"Mata-mata da Arena","job_type_arena_war":"Arena de Guerra","job_type_bike_race":"Corrida sobre duas rodas","job_type_capture":"Captura","job_type_contact_mission":"Missão de Contato","job_type_deathmatch":"Mata-mata","job_type_drag_race":"Corrida de Arrancada","job_type_drift_race":"Corrida de Drift","job_type_foot_race":"Corrida a pé","job_type_hao_special_works_race":"Corrida da Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Preliminar do Golpe","job_type_king_of_the_hill":"Marcando Território","job_type_land_race":"Corrida Terrestre","job_type_last_team_standing":"Última Equipe Sobrevivente","job_type_mission":"Missão","job_type_mission_creator":"Criador de Missões","job_type_open_wheel_race":"Corrida de Roda Exposta","job_type_parachuting":"Paraquedismo","job_type_pursuit_race":"Corrida de Perseguição","job_type_race":"Corrida","job_type_random_mission":"Missão aleatória","job_type_special_race":"Corrida de Veículo Especial","job_type_street_race":"Corrida de Rua","job_type_stunt_race":"Corrida Acrobática","job_type_survival":"Sobrevivência","job_type_target":"Corrida de Assalto com Alvos","job_type_team_deathmatch":"Mata-mata em Equipe","job_type_team_king_of_the_hill":"Marcando Território em Equipe","job_type_transform_race":"Corrida Metamorfose","job_type_unknown":"Desconhecido","job_type_vehicle_deathmatch":"Mata-mata em Veículos","job_type_water_race":"Corrida Marítima","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизведение видео","hp_hero_stop_button_label":"Видео остановлено","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","job_type_adversary_mode":"Режим противоборства","job_type_air_race":"Гонка по воздуху","job_type_arena_deathmatch":"Перестрелка на арене","job_type_arena_war":"Битва на арене","job_type_bike_race":"Велогонка","job_type_capture":"Захват","job_type_contact_mission":"Задание знакомого","job_type_deathmatch":"Перестрелка","job_type_drag_race":"Драг-гонка","job_type_drift_race":"Дрифтовая гонка","job_type_foot_race":"Пешая гонка","job_type_hao_special_works_race":"Гонка Hao’s Special Works","job_type_heist":"Ограбление","job_type_heist_prep":"Подготовка к ограблению","job_type_king_of_the_hill":"Король горы","job_type_land_race":"Гонка по суше","job_type_last_team_standing":"«Команда уцелевших»","job_type_mission":"Задание","job_type_mission_creator":"Редактор заданий","job_type_open_wheel_race":"Гонки на болидах","job_type_parachuting":"Парашютизм","job_type_pursuit_race":"Гонка «Погоня»","job_type_race":"Гонка","job_type_random_mission":"Случайная миссия","job_type_special_race":"Гонка для особого транспорта","job_type_street_race":"Уличная гонка","job_type_stunt_race":"Каскадерская гонка","job_type_survival":"Выживание","job_type_target":"Гонка с мишенями","job_type_team_deathmatch":"Командная перестрелка","job_type_team_king_of_the_hill":"Команда «Король горы»","job_type_transform_race":"Гонка «Трансформации»","job_type_unknown":"Неизвестно","job_type_vehicle_deathmatch":"Перестрелка на транспорте","job_type_water_race":"Морская гонка","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"视频播放中","hp_hero_stop_button_label":"视频已停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","job_type_adversary_mode":"对抗模式","job_type_air_race":"空中竞速","job_type_arena_deathmatch":"竞技场死斗","job_type_arena_war":"竞技场之战","job_type_bike_race":"两轮车竞速","job_type_capture":"夺取","job_type_contact_mission":"联系人任务","job_type_deathmatch":"死斗游戏","job_type_drag_race":"直线竞速","job_type_drift_race":"漂移竞速","job_type_foot_race":"徒步竞速","job_type_hao_special_works_race":"阿浩特别工坊竞速","job_type_heist":"抢劫任务","job_type_heist_prep":"抢劫前置任务","job_type_king_of_the_hill":"占山为王","job_type_land_race":"陆地竞速","job_type_last_team_standing":"团队生存游戏","job_type_mission":"任务","job_type_mission_creator":"任务制作器","job_type_open_wheel_race":"开轮式竞速","job_type_parachuting":"跳伞","job_type_pursuit_race":"追逐竞速","job_type_race":"竞速","job_type_random_mission":"随机任务","job_type_special_race":"特殊载具竞速","job_type_street_race":"街头竞速","job_type_stunt_race":"特技竞速","job_type_survival":"生存战","job_type_target":"标靶射击竞速","job_type_team_deathmatch":"团队死斗游戏","job_type_team_king_of_the_hill":"团队占山为王","job_type_transform_race":"幻变竞速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"载具死斗游戏","job_type_water_race":"水上竞速","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"正播放影片","hp_hero_stop_button_label":"影片已停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"差事 {name} 的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","job_type_adversary_mode":"競爭模式","job_type_air_race":"空中競速","job_type_arena_deathmatch":"鬥技場死鬥遊戲","job_type_arena_war":"決戰鬥技場","job_type_bike_race":"雙輪車競速","job_type_capture":"奪取","job_type_contact_mission":"聯絡人任務","job_type_deathmatch":"死鬥遊戲","job_type_drag_race":"直線競速","job_type_drift_race":"甩尾競速","job_type_foot_race":"賽跑","job_type_hao_special_works_race":"阿浩特製改裝競速","job_type_heist":"搶劫任務","job_type_heist_prep":"搶劫前置任務","job_type_king_of_the_hill":"山頭之王","job_type_land_race":"陸上競速","job_type_last_team_standing":"團隊生存遊戲","job_type_mission":"任務","job_type_mission_creator":"任務製作器","job_type_open_wheel_race":"開輪式競速","job_type_parachuting":"跳傘活動","job_type_pursuit_race":"追緝競速","job_type_race":"競速","job_type_random_mission":"隨機任務","job_type_special_race":"特殊載具競速","job_type_street_race":"街頭競速","job_type_stunt_race":"特技競速","job_type_survival":"生存戰","job_type_target":"射靶競速","job_type_team_deathmatch":"團隊死鬥遊戲","job_type_team_king_of_the_hill":"團隊山頭之王","job_type_transform_race":"變形狂飆競速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"載具死鬥遊戲","job_type_water_race":"水上競速","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        Q = e => e.endsWith(".svg") || e.endsWith(".gif"),
        ee = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        te = (e, t = ee, a = {}) => {
          const r = Math.min(4e3, a.maxWidth ?? 1 / 0);
          return t.filter(e => e <= r).map(t => {
            const r = ((e, t = {}) => {
              if (!e.startsWith("http")) return e;
              const a = new URL(e);
              return a.pathname.endsWith(".svg") ? e : (t.width && a.searchParams.set("w", String(t.width)), t.height && a.searchParams.set("h", String(t.height)), t.quality && a.searchParams.set("q", String(t.quality)), t.format && a.searchParams.set("fm", String(t.format)), t.fit && a.searchParams.set("fit", String(t.fit)), a.toString())
            })(e, {
              ...a,
              width: t
            });
            return {
              url: r,
              width: t
            }
          })
        },
        ae = e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary",
        re = {
          tabletSmall: {
            primary: "16:9",
            secondary: "3:1",
            tertiary: "4:3"
          },
          tabletMedium: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          },
          tabletLarge: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          },
          desktopSmallAndLarger: {
            primary: "4:5",
            secondary: "3:1",
            tertiary: "1:1"
          }
        };
      var ne = a(32996),
        oe = "var(--_1dbiq9u0)";
      const se = [{
          media: "(max-width: 480px)",
          slot: "100vw"
        }, {
          media: "(max-width: 768px)",
          slot: "100vw"
        }, {
          media: "(max-width: 900px)",
          slot: "90vw"
        }, {
          media: "(max-width: 1024px)",
          slot: "90vw"
        }, {
          media: "(max-width: 1280px)",
          slot: "1280px"
        }, {
          media: "(max-width: 1440px)",
          slot: "1440px"
        }, {
          media: "(max-width: 1640px)",
          slot: "1640px"
        }, {
          media: "(max-width: 1920px)",
          slot: "1920px"
        }, {
          media: "(max-width: 2000px)",
          slot: "2000px"
        }, {
          media: "(max-width: 2560px)",
          slot: "2560px"
        }, {
          slot: "3840px"
        }],
        ie = (0, n.forwardRef)(function({
          src: e,
          width: t,
          height: a,
          testId: o,
          style: s,
          aspectRatio: i,
          ...c
        }, l) {
          const [d, _] = (0, n.useState)(!1), u = (0, n.useRef)(null), m = (0, ne.UP)(u, l);
          (0, n.useEffect)(() => {
            if (!u.current) return;
            if ("loading" in HTMLImageElement.prototype) return void _(!0);
            const e = new IntersectionObserver((e, t) => {
              e.some(e => e.isIntersecting) && (_(!0), t.disconnect())
            }, {
              rootMargin: "200px"
            });
            return e.observe(u.current), () => {
              e.disconnect()
            }
          }, [u.current]);
          const g = (0, n.useMemo)(() => {
            const r = !e || !Q(e),
              n = r ? (e => {
                if (!Array.isArray(e) || 0 === e.length) return "100vw";
                const t = e.filter(e => e?.slot).map(e => e.media ? `${e.media} ${e.slot}` : e.slot);
                return [...t.filter(e => e.includes("max-width")), t.find(e => !e.includes("max-width")) ?? "100vw"].join(", ")
              })(se) : void 0,
              l = i ?? `${t||1} / ${a||1}`,
              _ = (0, j.DI)({
                [oe]: l
              });
            return (0, v.v6)({
              "data-testid": o,
              srcSet: d && r ? te(e)?.map(e => `${e.url} ${e.width}w`).join(", ") : void 0,
              src: e,
              sizes: d && r ? n : void 0,
              className: "_1dbiq9u1",
              loading: "lazy",
              decoding: "async",
              width: t,
              height: a,
              style: {
                ..._,
                ...s
              }
            }, c)
          }, [o, e, c, d]);
          return d ? (0, r.jsx)("img", {
            ref: m,
            ...g
          }) : (0, r.jsx)("div", {
            ref: m
          })
        }),
        ce = (0, n.forwardRef)(function({
          src: e,
          className: t,
          loading: a = "lazy",
          testId: n,
          ...o
        }, s) {
          if (!e.source?.url || !e.source?.height || !e.source?.width) return null;
          const i = (0, c.getOptimizedImage)({
            src: e.source.url,
            originalSize: {
              height: e.source.height,
              width: e.source.width
            },
            options: {
              preferModernFormat: !0
            }
          });
          if (!i?.url) return null;
          const l = (0, v.v6)({
            "data-testid": n,
            alt: i.alt,
            src: i.url,
            width: i.width,
            height: i.height,
            loading: a,
            className: t
          }, o);
          return (0, r.jsx)(ie, {
            ref: s,
            ...l
          })
        }),
        le = "RsgImageFile",
        de = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("picture", {
            ...o,
            ref: n,
            children: e
          })
        }),
        _e = ({
          testId: e,
          src: t,
          ...a
        }) => {
          const n = (0, v.v6)(a, {
            "data-testid": e,
            srcSet: Q(t) ? t : te(t)?.map(e => `${e.url} ${e.width}w`).join(", ")
          });
          return (0, r.jsx)("source", {
            ...n
          })
        },
        ue = (0, n.forwardRef)(function({
          testId: e,
          src: t,
          ...a
        }, o) {
          const s = (0, v.v6)(a, {
              "data-testid": e
            }),
            i = (0, n.useRef)(null),
            c = (0, ne.UP)(i, o);
          return (0, n.useEffect)(() => {
            i?.current && (Q(t) ? i.current.src = t : i.current.srcset = te(t)?.map(e => `${e.url} ${e.width}w`).join(", "))
          }, []), (0, r.jsx)("img", {
            className: "_1fbh3900",
            ref: c,
            ...s
          })
        }),
        me = new Map([
          ["mobile", w.f.mobile],
          ["mobile_small", w.f.mobileSmall],
          ["mobile_medium", w.f.mobileMedium],
          ["tablet_small", w.f.tabletSmall],
          ["tablet_medium", w.f.tabletMedium],
          ["tablet_small_and_medium", w.f.tabletSmallAndMedium],
          ["tablet_large", w.f.tabletLarge],
          ["tablet_medium_and_large", w.f.tabletMediumAndLarge],
          ["tablet", w.f.tablet],
          ["desktop", w.f.desktop],
          ["desktop_small", w.f.desktopSmall],
          ["desktop_medium", w.f.desktopMedium],
          ["tablet_and_desktop", w.f.tabletAndDesktop],
          ["mobile_medium_and_larger", w.f.mobileMediumAndLarger],
          ["tablet_small_and_larger", w.f.tabletSmallAndLarger],
          ["tablet_medium_and_larger", w.f.tabletMediumAndLarger],
          ["tablet_medium_and_smaller", w.f.tabletMediumAndSmaller],
          ["tablet_large_and_larger", w.f.tabletLargeAndLarger],
          ["tablet_large_and_smaller", w.f.tabletLargeAndSmaller],
          ["desktop_small_and_larger", w.f.desktopSmallAndLarger],
          ["desktop_medium_and_larger", w.f.desktopMediumAndLarger],
          ["desktop_large_and_larger", w.f.desktopLargeAndLarger],
          ["portrait", w.f.portrait],
          ["landscape", w.f.landscape],
          ["mobile_landscape", w.f.mobileLandscape]
        ]),
        ge = e => {
          for (const [t] of me) {
            const a = e?.find(e => e === t);
            if (a) return a
          }
        },
        be = "RsgImage";
      var fe = "var(--dhgwc10)";
      const pe = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "dhgwc11 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        he = (0, n.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: a,
          asChild: n,
          altText: o,
          ...s
        }, i) {
          const c = n ? g.DX : "a",
            l = (0, v.v6)({
              "data-testid": a,
              className: "dhgwc12",
              "aria-label": o,
              style: (0, j.DI)({
                [fe]: e
              })
            }, s);
          return (0, r.jsx)(c, {
            ref: i,
            ...l,
            children: t
          })
        }),
        ye = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          src: n,
          ...o
        }, s) {
          const i = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": t,
              className: "dhgwc13",
              style: {
                backgroundImage: `url(${n})`
              }
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...c,
            children: e
          })
        }),
        ke = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const n = (0, v.v6)({
            src: e,
            className: "dhgwc14"
          }, t);
          return (0, r.jsx)(ce, {
            ref: a,
            ...n
          })
        }),
        ve = "WwwBanner";
      var xe = a(64634),
        je = a(64010),
        we = a(34708);
      const Ce = (0, i.defineMessages)({
        carousel_next_button: {
          id: "carousel_next_button",
          description: "The label for the next button.",
          defaultMessage: "Next"
        },
        carousel_prev_button: {
          id: "carousel_prev_button",
          description: "The label for the previous button.",
          defaultMessage: "Previous"
        }
      });
      var Re = (0, C.c)({
          defaultClassName: "lwwe808",
          variantClassNames: {
            variant: {
              small: "lwwe809",
              medium: "lwwe80a",
              full: "lwwe80b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Se = "_1betujy6 _1betujy5",
        Ne = (0, C.c)({
          defaultClassName: "lwwe80g",
          variantClassNames: {
            visible: {
              true: "lwwe80h",
              false: "lwwe80i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ie = (0, n.createContext)({
          defaultSlide: 0,
          embla: void 0,
          controlsVisible: !1,
          prevButtonDisabled: !1,
          nextButtonDisabled: !1,
          onPrevButtonClick: null,
          onNextButtonClick: null,
          navigationRef: (0, n.createRef)(),
          viewportRef: void 0
        }),
        Ae = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          defaultSlide: o = 0,
          onNext: s,
          onPrev: i,
          onSwipe: c,
          ...l
        }, d) {
          const {
            navigationRef: _
          } = (0, n.useContext)(Ie), {
            embla: u,
            viewportRef: m,
            controlsVisible: b,
            prevButtonDisabled: f,
            nextButtonDisabled: p,
            onPrevButtonClick: h,
            onNextButtonClick: y
          } = (({
            defaultSlide: e,
            onNext: t,
            onPrev: a,
            onSwipe: r
          }) => {
            const [o, s] = (0, n.useState)(!0), [i, c] = (0, n.useState)(!0), [l, d] = (0, n.useState)(!1), _ = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [u, m] = (0, xe.A)(_, [(0, je.J)()]), g = (0, n.useCallback)(() => {
              m && (m.scrollPrev(), a?.())
            }, [m]), b = (0, n.useCallback)(() => {
              m && (m.scrollNext(), t?.())
            }, [m]), f = (0, n.useCallback)(() => {
              m && (s(!m.canScrollPrev()), c(!m.canScrollNext()))
            }, [m]), p = () => {
              if (!m) return;
              const e = m.internalEngine().scrollSnaps.length > 1;
              d(e), m.reInit({
                active: e
              })
            };
            return (0, n.useEffect)(() => {
              if (!m) return;
              f(), m.on("reInit", f).on("select", f);
              const e = (0, we.A)(p, 25);
              return window.addEventListener("resize", e), p(), () => {
                window.removeEventListener("resize", e)
              }
            }, [m, f]), (0, n.useEffect)(() => {
              if (!m) return;
              let e = 0;
              const t = () => {
                  e = m.selectedScrollSnap()
                },
                a = () => {
                  const t = m.selectedScrollSnap();
                  e !== t && r?.()
                };
              return m.on("pointerDown", t), m.on("pointerUp", a), () => {
                m.off("pointerDown", t), m.off("pointerUp", a)
              }
            }, [m]), (0, n.useEffect)(() => {
              if (!m) return;
              const e = e => {
                  e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                    ..._,
                    watchDrag: !0
                  }) : e.reInit({
                    ..._,
                    watchDrag: !1
                  })
                },
                t = t => {
                  p(), e(t)
                };
              return m?.on("init", e), m?.on("resize", e), m?.on("slidesChanged", t), () => {
                m?.off("init", e), m?.off("resize", e), m?.off("slidesChanged", t)
              }
            }, [m]), {
              embla: m,
              controlsVisible: l,
              prevButtonDisabled: o,
              nextButtonDisabled: i,
              onPrevButtonClick: g,
              onNextButtonClick: b,
              viewportRef: u
            }
          })({
            defaultSlide: o,
            onNext: s,
            onPrev: i,
            onSwipe: c
          }), k = a ? g.DX : "div", x = (0, v.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, l);
          return (0, r.jsx)(Ie.Provider, {
            value: {
              embla: u,
              defaultSlide: o,
              navigationRef: _,
              controlsVisible: b,
              prevButtonDisabled: f,
              nextButtonDisabled: p,
              onPrevButtonClick: h,
              onNextButtonClick: y,
              viewportRef: m
            },
            children: (0, r.jsx)(k, {
              ref: d,
              ...x,
              children: (0, r.jsx)(g.xV, {
                children: e
              })
            })
          })
        }),
        Ee = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)(n, {
              "data-testid": t,
              className: Se
            });
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ze = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)(a, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, r.jsx)(l.Heading, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Te = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const {
            viewportRef: s
          } = (0, n.useContext)(Ie), i = (0, v.v6)({
            "data-testid": t,
            className: Se
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ...i,
            children: (0, r.jsx)("div", {
              ref: s,
              className: "lwwe802",
              children: (0, r.jsx)("div", {
                className: "lwwe803",
                children: e
              })
            })
          })
        }),
        Me = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const o = t ? g.DX : "div",
            s = (0, v.v6)({
              className: "lwwe807",
              tabIndex: -1
            }, a);
          return (0, r.jsx)(o, {
            ref: n,
            ...s,
            children: (0, r.jsx)("div", {
              className: "lwwe804",
              children: e
            })
          })
        }),
        De = (0, n.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: a,
          ...n
        }, o) {
          const s = (0, v.v6)({
            "data-testid": a,
            className: Re({
              variant: t
            })
          }, n);
          return (0, r.jsx)("div", {
            ref: o,
            ...s,
            children: e
          })
        }),
        Fe = (0, n.forwardRef)(function({
          override_textColor: e,
          override_backgroundColor: t,
          appearance: a,
          size: o,
          testId: s,
          asChild: c,
          ...d
        }, _) {
          const {
            controlsVisible: u,
            onPrevButtonClick: m,
            onNextButtonClick: b,
            prevButtonDisabled: f,
            nextButtonDisabled: p
          } = (0, n.useContext)(Ie), {
            formatMessage: h
          } = (0, i.useIntl)(), y = c ? g.DX : "div", k = (0, v.v6)({
            className: Ne({
              visible: u
            }),
            "data-testid": s
          }, d);
          return (0, r.jsxs)(y, {
            ref: _,
            ...k,
            children: [(0, r.jsx)(l.IconButton, {
              size: o,
              icon: "ArrowLeft",
              appearance: a,
              onClick: m,
              label: h(Ce.carousel_prev_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: f
            }), (0, r.jsx)(l.IconButton, {
              size: o,
              icon: "ArrowRight",
              appearance: a,
              onClick: b,
              label: h(Ce.carousel_next_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: p
            })]
          })
        }),
        Pe = (0, n.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Ge = "WwwDeck",
        Le = (0, i.defineMessages)({
          decorative_video_play_button_label: {
            id: "decorative_video_play_button_label",
            description: "Decorative video play button label",
            defaultMessage: "Play"
          },
          decorative_video_pause_button_label: {
            id: "decorative_video_pause_button_label",
            description: "Decorative video pause button label",
            defaultMessage: "Pause"
          },
          decorative_video_replay_button_label: {
            id: "decorative_video_replay_button_label",
            description: "Decorative video replay button label",
            defaultMessage: "Replay"
          }
        });
      var We = "_197irmi6",
        qe = (0, C.c)({
          defaultClassName: "_197irmi1",
          variantClassNames: {
            landscapeViewportBehavior: {
              full_height: "_197irmi2",
              retain_aspect_ratio: "_197irmi3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ve = "var(--_197irmi0)";
      const Oe = () => {
          const e = (0, n.useContext)(Be);
          if (!e) throw new Error("useDecorativeVideoContext must be used within VideoProvider");
          return e
        },
        Be = (0, n.createContext)({
          landscapeViewportBehavior: "retain_aspect_ratio",
          scrimColor: void 0,
          reducedMotion: window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          isPlaying: !1,
          setIsPlaying: () => {},
          error: !1,
          playOnce: !1,
          hasEnded: !1,
          setHasEnded: () => {},
          setError: () => {},
          videoRef: null,
          lastPlayingRef: null,
          bgImageRef: null
        }),
        $e = (0, n.forwardRef)(function({
          landscapeViewportBehavior: e,
          scrimColor: t,
          reducedMotion: a,
          playOnce: o,
          children: s,
          asChild: i,
          ...c
        }, l) {
          const [d, _] = (0, n.useState)(!a), [u, m] = (0, n.useState)(!1), [b, f] = (0, n.useState)(!1), p = (0, n.useRef)(null), h = (0, n.useRef)(!1), y = (0, n.useRef)(null), k = (0, v.v6)({
            className: qe({
              landscapeViewportBehavior: e
            })
          }, c), x = i ? g.DX : "div";
          return (0, r.jsx)(Be.Provider, {
            value: {
              landscapeViewportBehavior: e,
              scrimColor: t,
              videoRef: p,
              lastPlayingRef: h,
              bgImageRef: y,
              isPlaying: d,
              playOnce: o,
              hasEnded: u,
              setHasEnded: m,
              reducedMotion: a,
              setIsPlaying: _,
              error: b,
              setError: f
            },
            children: (0, r.jsx)(x, {
              ref: l,
              ...k,
              children: s
            })
          })
        }),
        Ue = (0, n.forwardRef)(function({
          onToggle: e,
          ...t
        }, a) {
          const {
            formatMessage: o
          } = (0, i.useIntl)(), {
            isPlaying: s,
            setIsPlaying: c,
            videoRef: d,
            lastPlayingRef: _,
            error: u,
            playOnce: m,
            hasEnded: g,
            setHasEnded: b,
            setError: f,
            reducedMotion: p
          } = Oe(), [h, y] = (0, n.useState)("Pause"), k = (!m || !g) && _.current;
          (0, n.useEffect)(() => {
            y(s || k ? "Pause" : m && g ? "Replay" : "Play")
          }, [k, s, m, g]);
          const x = (0, n.useMemo)(() => o(m && g ? Le.decorative_video_replay_button_label : k ? Le.decorative_video_pause_button_label : Le.decorative_video_play_button_label), [m, g]),
            j = (0, v.v6)({
              className: "_197irmi5",
              label: x,
              "aria-label": o(s ? Le.decorative_video_play_button_label : Le.decorative_video_pause_button_label)
            }, t);
          return p || u ? null : (0, r.jsx)(l.IconButton, {
            ref: a,
            ...j,
            icon: h,
            size: "SM",
            onPress: async () => {
              e?.(!s);
              const t = d.current;
              if (t)
                if (m && g) try {
                    b(!1), t.currentTime = 0, await t.play(), c(!0), _.current = !0
                  } catch {
                    f(!0), c(!1), _.current = !1
                  } else if (s || k) t?.pause(), c(!1), _.current = !1;
                  else try {
                    await (t?.play()), c(!0), _.current = !0
                  } catch {
                    f(!0), c(!1), _.current = !1
                  }
            }
          })
        }),
        Xe = (0, n.forwardRef)(function({
          src: e,
          poster: t,
          altText: a,
          autoPlay: o,
          muted: s,
          asChild: i,
          testId: c,
          ...l
        }, d) {
          const {
            videoRef: _,
            reducedMotion: u,
            lastPlayingRef: m,
            playOnce: b,
            setIsPlaying: f,
            error: p,
            setError: h,
            setHasEnded: y
          } = Oe(), k = i ? g.DX : "div", x = (0, v.v6)({
            "data-testid": c
          }, l);
          return (0, n.useEffect)(() => {
            const t = _.current;
            if (!t || !e || u) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                f(!0), y(!1), m.current = !0
              },
              n = () => {
                t.paused || (f(!1), m.current = !1)
              },
              o = () => {
                console.warn("Play request interrupted :", t.error), h(!0), f(!1), m.current = !1
              },
              s = () => {
                f(!1), m.current = !1, y(!0)
              },
              i = () => {
                console.warn("Video failed to load sources."), h(!0), f(!1), m.current = !1
              };
            return t.addEventListener("play", r), t.addEventListener("pause", n), t.addEventListener("error", o), t.addEventListener("ended", s), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("pause", n), t.removeEventListener("error", o), t.removeEventListener("ended", s), a && a.removeEventListener("error", i)
            }
          }, [_, e, u, f, h, y, m.current]), (() => {
            const {
              videoRef: e,
              lastPlayingRef: t,
              setIsPlaying: a,
              playOnce: r,
              hasEnded: o
            } = Oe();
            (0, n.useEffect)(() => {
              const n = async () => {
                const n = e.current;
                if (n)
                  if (document.hidden) t.current = !n.paused && !o, n.paused || (n.pause(), a(!1));
                  else if (t.current && !o && n.paused && n.muted && (!r || !o)) try {
                  await n.play(), a(!0), t.current = !0
                } catch {
                  a(!1), t.current = !1
                }
              };
              return document.addEventListener("visibilitychange", n), () => document.removeEventListener("visibilitychange", n)
            }, [e, a, r, o, t])
          })(), ((e = 0) => {
            const {
              videoRef: t,
              lastPlayingRef: a,
              setIsPlaying: r,
              playOnce: o,
              hasEnded: s
            } = Oe();
            (0, n.useEffect)(() => {
              const n = t.current;
              if (!n) return;
              const i = new IntersectionObserver(async e => {
                if (e[0].isIntersecting) {
                  if (a.current && !s && n.paused && n.muted && (!o || !s)) try {
                    await n.play(), r(!0), a.current = !0
                  } catch {
                    r(!1), a.current = !1
                  }
                } else a.current = !n.paused && !s, n.paused || (n.pause(), r(!1))
              }, {
                threshold: e
              });
              return i.observe(n), () => i.disconnect()
            }, [t, r, e, o, s, a])
          })(0), (0, r.jsx)(k, {
            ref: d,
            ...x,
            children: p || u || !e ? (0, r.jsx)("img", {
              "data-testid": "decorative-video-fallback",
              alt: a,
              src: t,
              className: We
            }) : (0, r.jsx)("video", {
              ref: _,
              className: We,
              src: e,
              poster: t,
              autoPlay: o,
              muted: s,
              loop: !b,
              playsInline: !0,
              onError: () => h(!0),
              "aria-hidden": "true",
              tabIndex: -1
            })
          })
        }),
        He = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            scrimColor: n
          } = Oe(), o = (0, v.v6)({
            className: "_197irmi4",
            style: (0, j.DI)({
              [Ve]: n ?? "unset"
            })
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...o,
            children: e
          })
        }),
        Ke = "WwwDecorativeVideo";
      var Ye = (0, C.c)({
        defaultClassName: "_1asiojt0",
        variantClassNames: {
          size: {
            dimensions_25: "_1asiojt1",
            dimensions_50: "_1asiojt2",
            dimensions_100: "_1asiojt3",
            dimensions_150: "_1asiojt4",
            dimensions_175: "_1asiojt5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Je = (0, n.forwardRef)(function({
          gradientStyle: e = "",
          thickness: t = "dimensions_25",
          ...a
        }, n) {
          return (0, r.jsx)("div", {
            className: Ye({
              size: t
            }),
            style: {
              background: e
            },
            tabIndex: -1,
            ref: n,
            ...a
          })
        }),
        Ze = "WwwDivider";
      var Qe = a(11215);
      const et = s.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        tt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          layout: a = "primary",
          aspect: n = "wide",
          transparent: o = !1,
          asChild: s,
          ...i
        }, c) {
          const l = s ? g.DX : "div",
            d = (0, v.v6)({
              className: "sp6aw70",
              "data-layout": a,
              "data-aspect": n,
              "data-transparent": !!o || void 0,
              "data-testid": t
            }, i);
          return (0, r.jsx)(l, {
            ref: c,
            ...d,
            children: e
          })
        }),
        at = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: (0, r.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        }),
        rt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        nt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : l.Text,
            i = (0, v.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ot = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : l.Heading,
            i = (0, v.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            level: 4,
            ref: o,
            ...i,
            children: e
          })
        }),
        st = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "time",
            i = (0, v.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        it = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ct = ({
          width: e = "100%",
          height: t = "100%"
        }) => (0, r.jsx)("div", {
          className: "_9c411v3 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e,
            height: t
          }
        }),
        lt = ({
          width: e = "100%"
        }) => (0, r.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var dt = "_17xncyz0";
      const _t = ({
          layout: e,
          aspect: t,
          transparent: a,
          testId: n
        }) => (0, r.jsxs)(tt, {
          className: dt,
          layout: e,
          aspect: t,
          transparent: a,
          testId: n,
          children: [(0, r.jsx)(at, {
            children: (0, r.jsx)(ct, {
              width: "100%"
            })
          }), (0, r.jsxs)(rt, {
            children: [(0, r.jsx)(nt, {
              children: (0, r.jsx)(lt, {
                width: "30%"
              })
            }), (0, r.jsxs)(ot, {
              children: [(0, r.jsx)(lt, {}), (0, r.jsx)(lt, {})]
            }), (0, r.jsx)(st, {
              children: (0, r.jsx)(lt, {
                width: "40%"
              })
            })]
          })]
        }),
        ut = ({
          loading: e,
          data: t,
          id: a,
          aspect: n,
          layout: o,
          transparent: s,
          handleStoryClick: i,
          testId: c
        }) => {
          const l = t?.preview_images_parsed.newswire_block["square" === n ? "square" : "d16x9"],
            d = `${l}?im=Resize,width=${"primary"===o?1200:600}`;
          return e || !t ? (0, r.jsx)(_t, {
            layout: o,
            aspect: n,
            testId: c
          }) : (0, r.jsx)(x, {
            className: "_17xncyz1",
            href: t.url,
            onClick: i,
            children: (0, r.jsxs)(tt, {
              className: dt,
              layout: o,
              aspect: n,
              transparent: s,
              testId: c,
              children: [(0, r.jsx)(at, {
                children: (0, r.jsx)("img", {
                  src: d,
                  loading: "lazy"
                })
              }), (0, r.jsxs)(rt, {
                children: [(0, r.jsxs)(it, {
                  children: [(0, r.jsx)(nt, {
                    children: t.primary_tags[0].name
                  }), (0, r.jsx)(ot, {
                    children: t.title
                  })]
                }), (0, r.jsx)(st, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        },
        mt = s.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        gt = "WwwEditorialPost",
        bt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ft = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = (0, ne.Ub)(w.f.tabletMediumAndLarger),
            i = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(i, {
            ref: o,
            ...c,
            className: s ? "_1hb4ou60 _1betujy6 _1betujy5" : "",
            children: e
          })
        }),
        pt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          onCarouselSwipe: o,
          ...s
        }, i) {
          const {
            viewportRef: c
          } = (({
            defaultSlide: e = 0,
            onCarouselSwipe: t
          }) => {
            const a = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "trimSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              },
              [r, o] = (0, xe.A)(a, [(0, je.J)()]);
            return (0, n.useEffect)(() => {
              if (!o) return;
              let e = 0;
              const a = () => {
                  e = o.selectedScrollSnap()
                },
                r = () => {
                  const a = o.selectedScrollSnap();
                  e !== a && t?.()
                };
              return o.on("pointerDown", a), o.on("pointerUp", r), () => {
                o.off("pointerDown", a), o.off("pointerUp", r)
              }
            }, [o]), {
              embla: o,
              viewportRef: r
            }
          })({
            defaultSlide: 0,
            onCarouselSwipe: o
          }), l = a ? g.DX : "div", d = (0, v.v6)({
            "data-testid": t,
            className: "_1hb4ou65"
          }, s);
          return (0, r.jsx)(l, {
            className: "_1hb4ou63",
            ref: i,
            children: (0, r.jsx)(Ae, {
              ref: c,
              ...d,
              children: (0, r.jsx)(Te, {
                children: e
              })
            })
          })
        }),
        ht = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(De, {
            ref: n,
            ...o,
            children: e
          })
        }),
        yt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = (0, v.v6)({
              "data-testid": t,
              className: "_1hb4ou62"
            }, n),
            i = a ? g.DX : "div";
          return (0, r.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        }),
        kt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = (0, v.v6)({
              "data-testid": t,
              className: "_1hb4ou64"
            }, n),
            i = a ? g.DX : "div";
          return (0, r.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        }),
        vt = "WwwEditorialGridModule",
        xt = (0, i.defineMessages)({
          featured_game_breadcrumbs_parent_item: {
            id: "featured_game_breadcrumbs_parent_item",
            description: "Breadcrumbs parent page item label",
            defaultMessage: "Games"
          }
        });
      var jt = a(81270),
        wt = a(93529),
        Ct = a(99206),
        Rt = a(57978);
      wt.os.registerPlugin(Rt.u);
      const St = (0, n.forwardRef)(function({
          src: e,
          context: t,
          className: a,
          loading: n = "lazy",
          testId: o,
          ...s
        }, i) {
          if (!e) return null;
          const l = (0, c.getOptimizedRsgImage)(e, t, {
            preferModernFormat: !0
          });
          if (!l?.url) return null;
          const d = (0, v.v6)({
            "data-testid": o,
            alt: l.alt,
            src: l.url,
            width: l.width,
            height: l.height,
            loading: n,
            className: a
          }, s);
          return (0, r.jsx)(ie, {
            ref: i,
            ...d
          })
        }),
        Nt = (0, i.defineMessages)({
          hp_hero_play_button_label: {
            id: "hp_hero_play_button_label",
            description: "Featured Game hero play button label",
            defaultMessage: "Video Playing"
          },
          hp_hero_stop_button_label: {
            id: "hp_hero_stop_button_label",
            description: "Featured Game hero stop button label",
            defaultMessage: "Video Stopped"
          }
        });
      var It = "vi4uz51";
      const At = (0, n.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        Et = () => {
          const e = (0, n.useContext)(At);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        zt = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          asChild: a,
          isLooping: o = !1,
          ...s
        }, i) {
          const c = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            [_, u] = (0, n.useState)(!c),
            [m, b] = (0, n.useState)(!1),
            f = (0, v.v6)({
              "data-testid": e,
              className: "vi4uz50"
            }, s),
            p = a ? g.DX : "div";
          return (0, r.jsx)(At.Provider, {
            value: {
              videoRef: l,
              bgImageRef: d,
              isPlaying: _,
              isLooping: o,
              reducedMotion: c,
              setIsPlaying: u,
              videoError: m,
              setVideoError: b
            },
            children: (0, r.jsx)(p, {
              ref: i,
              ...f,
              children: t
            })
          })
        }),
        Tt = (0, n.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: a,
          setIsPlaying: o,
          videoLabel: s,
          testId: i,
          asChild: l,
          ...d
        }, _) {
          const u = (0, ne.Ub)(w.f.mobile),
            {
              videoRef: m,
              isLooping: b,
              reducedMotion: f,
              setVideoError: p
            } = Et(),
            [h, y] = (0, n.useState)(null),
            k = l ? g.DX : "div",
            x = (0, v.v6)({
              "data-testid": i,
              className: It
            }, d);
          return (0, n.useEffect)(() => {
            const t = m.current;
            if (!t || !e.mobile && !e.desktop || f) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                o(!0)
              },
              n = () => {
                o(!1)
              },
              s = () => {
                console.warn("Play request interrupted :", t.error), o(!1)
              },
              i = () => {
                console.warn("Video failed to load sources."), p(!0)
              };
            return t.addEventListener("play", r), t.addEventListener("error", s), t.addEventListener("pause", n), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("error", s), t.removeEventListener("pause", n), a && a.removeEventListener("error", i)
            }
          }, [m.current, JSON.stringify(e), f]), (0, n.useEffect)(() => {
            const e = (0, c.getOptimizedRsgImage)(t, u ? "1:1" : "21:9", {
              preferModernFormat: !0
            });
            e && y(e)
          }, [t, u]), (0, r.jsxs)(k, {
            ref: _,
            ...x,
            children: [(0, r.jsxs)("video", {
              ref: m,
              className: It,
              loop: b,
              "aria-label": s,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: h?.url ?? void 0,
              children: [e.mobile && (0, r.jsx)("source", {
                media: w.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, r.jsx)("source", {
                media: w.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, r.jsx)(St, {
              context: u ? "1:1" : "21:9",
              src: t,
              className: (0, jt.default)(["vi4uz53", a ? "vi4uz55" : "vi4uz54"]),
              "aria-hidden": a
            })]
          })
        }),
        Mt = (0, n.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: a,
          testId: o,
          ...s
        }, c) {
          const {
            formatMessage: d
          } = (0, i.useIntl)(), {
            videoRef: _,
            reducedMotion: u,
            videoError: m
          } = Et(), g = (0, n.useCallback)(() => {
            (() => {
              const e = _.current;
              e && (a ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(a)
          }, [a]), b = (0, v.v6)({
            "data-testid": o,
            className: (0, jt.default)("vi4uz5g", e ? "vi4uz5e" : ""),
            label: d(a ? Nt.hp_hero_stop_button_label : Nt.hp_hero_play_button_label),
            "aria-label": d(a ? Nt.hp_hero_play_button_label : Nt.hp_hero_stop_button_label)
          }, s);
          return u || m ? null : (0, r.jsx)("div", {
            className: "vi4uz5f",
            children: (0, r.jsx)(l.IconButton, {
              ref: c,
              ...b,
              icon: a ? "Stop" : "Play",
              appearance: "primary",
              size: "SM",
              onPress: g
            })
          })
        });
      (0, C.c)({
        defaultClassName: "_1betujy6 _1betujy5",
        variantClassNames: {
          columns: {
            1: "_16t2abv3",
            2: "_16t2abv4",
            3: "_16t2abv5",
            4: "_16t2abv6",
            5: "_16t2abv7",
            6: "_16t2abv8",
            7: "_16t2abv9",
            8: "_16t2abva",
            9: "_16t2abvb",
            10: "_16t2abvc",
            11: "_16t2abvd",
            12: "_16t2abve"
          },
          align: {
            start: "_16t2abvf",
            center: "_16t2abvg",
            end: "_16t2abvh"
          }
        },
        defaultVariants: {
          columns: 3,
          align: "start"
        },
        compoundVariants: []
      });
      const Dt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "section",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Ft = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Pt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, n);
          return (0, r.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, r.jsx)(s, {
              ref: o,
              ...i,
              children: e
            })
          })
        });
      var Gt = (0, C.c)({
        defaultClassName: "_1xrjhoy4",
        variantClassNames: {
          reducedMotion: {
            false: "_1xrjhoy5",
            true: "_1xrjhoy6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Lt = (0, n.createContext)({
          heroRef: (0, n.createRef)(),
          backgroundRef: (0, n.createRef)(),
          backgroundGradientRef: (0, n.createRef)(),
          playStopButtonRef: (0, n.createRef)(),
          collectionsRef: (0, n.createRef)(),
          gameDetailsRef: (0, n.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        Wt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, n.useRef)(null),
            l = (0, n.useRef)(null),
            d = (0, n.useRef)(null),
            _ = (0, n.useRef)(null),
            u = (0, n.useRef)(null),
            m = (0, n.useRef)(null),
            [b, f] = (0, n.useState)(!i);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: a,
            playStopButtonRef: r,
            collectionsRef: n,
            gameDetailsRef: o
          }) {
            (0, Ct.L)(() => {
              const s = e.current,
                i = t.current,
                c = a.current,
                l = r.current,
                d = n.current,
                _ = o.current;
              if (!(s && i && c && l && d && _)) return;
              const u = wt.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  invalidateOnRefresh: !0,
                  trigger: s,
                  start: "top top",
                  end: "+=100%",
                  scrub: !0,
                  onEnter: () => {
                    const e = document.activeElement;
                    u.scrollTrigger?.refresh(), e && e instanceof HTMLElement && wt.os.delayedCall(.01, () => {
                      e.focus({
                        preventScroll: !0
                      })
                    })
                  }
                }
              });
              u.fromTo(i, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), u.fromTo(c, {
                scale: 1
              }, {
                scale: 1.1
              }, 0);
              const m = wt.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  invalidateOnRefresh: !0,
                  trigger: s,
                  start: "top top",
                  endTrigger: d,
                  end: "top top",
                  scrub: !0,
                  onEnter: () => {
                    m.scrollTrigger?.refresh()
                  }
                }
              });
              return m.fromTo(c, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -100%, rgba(0, 0, 0, 1) 20%)"
              }, 0), m.fromTo(c, {
                backdropFilter: "blur(0px)"
              }, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), m.fromTo(l, {
                opacity: 1,
                pointerEvents: "auto"
              }, {
                opacity: 0,
                pointerEvents: "none",
                immediateRender: !1,
                duration: 10
              }, 70), d && wt.os.utils.toArray(":scope > *", n.current).forEach(e => {
                const t = wt.os.fromTo(e, {
                  opacity: 0
                }, {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    invalidateOnRefresh: !0,
                    trigger: e,
                    start: "top bottom",
                    end: "+=20%",
                    toggleActions: "play none none none",
                    scrub: !0,
                    fastScrollEnd: !0,
                    onEnter: () => {
                      t.scrollTrigger?.refresh()
                    }
                  }
                })
              }), () => {
                u?.kill(), m?.kill()
              }
            }, {
              dependencies: [e.current, t.current, a.current, r.current, o.current, n.current],
              revertOnUpdate: !0
            })
          }({
            heroRef: c,
            backgroundRef: l,
            backgroundGradientRef: d,
            playStopButtonRef: _,
            collectionsRef: u,
            gameDetailsRef: m
          });
          const p = a ? g.DX : "div",
            h = (0, v.v6)({
              "data-testid": t,
              className: "_1xrjhoy0"
            }, o);
          return (0, r.jsx)(Lt.Provider, {
            value: {
              heroRef: c,
              backgroundRef: l,
              backgroundGradientRef: d,
              playStopButtonRef: _,
              collectionsRef: u,
              gameDetailsRef: m,
              reducedMotion: i,
              isPlaying: b,
              setIsPlaying: f
            },
            children: (0, r.jsx)(p, {
              ref: s,
              ...h,
              children: e
            })
          })
        }),
        qt = (0, n.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...a
        }, o) {
          const {
            heroRef: s,
            backgroundRef: i,
            backgroundGradientRef: c,
            isPlaying: l,
            playStopButtonRef: d,
            reducedMotion: _,
            setIsPlaying: u
          } = (0, n.useContext)(Lt), {
            trackEvent: m
          } = W(), g = (0, ne.UP)(s, o), b = (0, ne.Ub)(w.f.mobile), f = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), p = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), h = {
            desktop: f?.url,
            mobile: p?.url ?? f?.url
          };
          return (0, r.jsx)(zt, {
            ref: g,
            ...a,
            children: (0, r.jsx)("div", {
              className: "_1xrjhoye",
              children: (0, r.jsxs)("div", {
                className: "_1xrjhoyf",
                children: [(0, r.jsx)(Tt, {
                  backgroundImage: e,
                  isPlaying: l,
                  ref: i,
                  setIsPlaying: u,
                  videoSrc: h,
                  videoLabel: t?.title ?? ""
                }), !_ && (0, r.jsx)(Mt, {
                  ref: d,
                  isPlaying: l,
                  onButtonClick: e => {
                    const a = b ? p : f;
                    m({
                      event: "cta_other",
                      text: e ? "toggle pause" : "toggle play",
                      video_id: a?.sys?.id,
                      video_type: t?.type
                    }, t)
                  }
                }), (0, r.jsx)("div", {
                  ref: c,
                  className: Gt({
                    reducedMotion: _
                  })
                })]
              })
            })
          })
        }),
        Vt = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, v.v6)({
            className: "_1xrjhoy3"
          }, e);
          return (0, r.jsx)(ce, {
            ref: t,
            ...a
          })
        }),
        Ot = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_1xrjhoy7"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Bt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_1xrjhoy8 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        $t = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_1xrjhoy9"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Ut = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_1xrjhoya"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Xt = (0, n.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...n
        }, o) {
          const s = t ? g.DX : St,
            i = (0, v.v6)({
              "data-testid": e,
              className: "_1xrjhoyc"
            }, n);
          return (0, r.jsx)("div", {
            className: "_1xrjhoyb",
            children: (0, r.jsx)(s, {
              ref: o,
              ...i,
              children: a
            })
          })
        }),
        Ht = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...o
        }, s) {
          const {
            gameDetailsRef: i
          } = (0, n.useContext)(Lt), c = (0, ne.UP)(i, s), l = t ? g.DX : Dt, d = (0, v.v6)({
            "data-testid": a
          }, o);
          return (0, r.jsx)(l, {
            ref: c,
            ...d,
            children: e
          })
        }),
        Kt = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...o
        }, s) {
          const {
            collectionsRef: i
          } = (0, n.useContext)(Lt), c = (0, ne.UP)(i, s), l = a ? g.DX : Dt, d = (0, v.v6)({
            className: (0, jt.default)("_1xrjhoy1", t)
          }, o);
          return (0, r.jsx)(l, {
            ref: c,
            ...d,
            children: e
          })
        }),
        Yt = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : Pt,
            i = (0, v.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Jt = (0, n.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : Ft,
            i = (0, v.v6)({
              className: (0, jt.default)("_1xrjhoy2", t)
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Zt = "view",
        Qt = e => {
          if (!e) return null;
          try {
            return new URL(e, window.location.origin)
          } catch {
            return null
          }
        },
        ea = (e, t) => {
          if (!e) return "";
          const a = Qt(e);
          return a ? (new URLSearchParams(t).forEach((e, t) => {
            a.searchParams.has(t) || a.searchParams.set(t, e)
          }), `${a.pathname}${a.search}${a.hash}`) : e
        },
        ta = ({
          block: e,
          size: t = "MD",
          backgroundColor: a,
          asChild: o,
          ...s
        }) => {
          const i = (0, _.useLocation)(),
            [, c] = (0, _.useSearchParams)(),
            {
              trackEvent: d
            } = W(),
            u = e?.link?.url ?? "",
            m = (0, n.useMemo)(() => ((e, t) => {
              const a = Qt(e);
              if (!a) return {
                mode: "link",
                href: e,
                viewParam: ""
              };
              const r = a.searchParams.get(Zt) ?? "",
                n = r ? "bottom-sheet" : "link";
              return {
                mode: n,
                href: "bottom-sheet" === n ? ea(e, t) : e,
                viewParam: r
              }
            })(u, i.search), [u, i.search]),
            b = "bottom-sheet" === m.mode,
            f = m.href,
            p = m.viewParam,
            h = e?.openInNewTab ? "_blank" : "_self";
          if (!e) return null;
          const y = e => {
              d({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: f,
                ...e.analyticsData
              }, e)
            },
            k = (0, v.v6)({
              size: t,
              appearance: e?.appearance,
              iconLeft: e?.iconLeft?.icon,
              iconRight: e?.iconRight?.icon,
              onPress: b ? () => {
                b && b && p && c(e => {
                  const t = new URLSearchParams(e);
                  return t.set(Zt, p), t
                }, {
                  replace: !0
                }), y(e)
              } : () => y(e),
              override_backgroundColor: e?.backgroundColor ?? a,
              asChild: !b
            }, s);
          return o ? (0, r.jsx)(x, {
            href: f,
            target: h,
            children: (0, r.jsx)(g.DX, {
              ...s
            })
          }) : (0, r.jsx)(l.Button, {
            ...k,
            children: b ? e.text : (0, r.jsx)(x, {
              href: f,
              target: h,
              children: e.text
            })
          })
        },
        aa = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = W(), {
            blockPosition: a
          } = (0, n.useContext)(c.BlockRendererContext), {
            ref: o
          } = t(), {
            formatMessage: s
          } = (0, i.useIntl)();
          if (!e) return null;
          const {
            logo: d,
            game: _,
            description: u,
            ctasCollection: m
          } = e;
          return (0, r.jsxs)(Wt, {
            ref: o,
            children: [(0, r.jsx)(qt, {
              backgroundImage: e.backgroundImage,
              backgroundVideo: e.backgroundVideo,
              isLooping: !0
            }), (0, r.jsx)(Ht, {
              children: (0, r.jsxs)(Kt, {
                children: [(0, r.jsxs)(Yt, {
                  children: [(0, r.jsx)(Vt, {
                    src: d
                  }), (0, r.jsxs)(Ot, {
                    children: [(0, r.jsxs)(Jt, {
                      children: [(0, r.jsxs)(l.Breadcrumbs.Root, {
                        children: [(0, r.jsx)(l.Breadcrumbs.Item, {
                          href: "/games",
                          children: s(xt.featured_game_breadcrumbs_parent_item)
                        }), (0, r.jsx)(l.Breadcrumbs.Item, {
                          href: _?.wwwPageLink?.url,
                          isCurrent: !0,
                          children: _?.title
                        })]
                      }), (0, r.jsx)(Bt, {
                        asChild: !0,
                        children: (0, r.jsx)(l.Body, {
                          children: u
                        })
                      })]
                    }), (0, r.jsxs)(Jt, {
                      className: "hg5jwy0",
                      children: [m?.items && (0, r.jsx)($t, {
                        children: m?.items?.map((e, t) => {
                          if (e?.text) return (0, r.jsx)(ta, {
                            block: e,
                            size: "LG"
                          }, t)
                        })
                      }), _?.platformsCollection?.items?.length && (0, r.jsx)(Ut, {
                        children: _.platformsCollection.items.map((e, t) => (0, r.jsx)(Xt, {
                          src: e?.logo,
                          context: "mobile"
                        }, `${e?.sys?.id}-${t}`))
                      })]
                    })]
                  })]
                }), e.childModulesCollection?.items.map(e => (0, r.jsx)(c.BlockRenderer, {
                  block: e,
                  blockPosition: a
                }, e.sys.id))]
              })
            })]
          })
        },
        ra = "WwwFeaturedGameSection";
      var na = "r3mkgz4",
        oa = "var(--r3mkgz0)",
        sa = "r3mkgz5",
        ia = "var(--r3mkgz1)";
      const ca = {
          wrap: "flex-direction: row;",
          stack: "flex-direction: column;"
        },
        la = {
          left: "\n        align-items: flex-start;\n        justify-content: flex-start;\n    ",
          center: "\n        align-items: center;\n        justify-content: center;\n    ",
          right: "\n        align-items: flex-end;\n        justify-content: flex-end;\n    "
        },
        da = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gap: n,
          ...o
        }, s) {
          const i = t ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": a,
              className: "r3mkgz3 _1betujy5",
              style: (0, j.DI)({
                [oa]: n
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...c,
            children: e
          })
        }),
        _a = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          breakpoints: o,
          gap: s,
          ...i
        }, c) {
          const l = `grid-${(0,n.useId)()}`,
            d = t ? g.DX : "div",
            _ = (0, n.useMemo)(() => o?.map(({
              mediaQuery: e,
              columns: t,
              behavior: a = "wrap",
              alignment: r = "left"
            }) => `\n            @media ${e} {\n                #${CSS.escape(l)}.${na} {\n                    ${ca[a]}\n                    ${la[r]}\n                }\n                ${t.map((e,a)=>`\n                    #${CSS.escape(l)} .${sa}:nth-of-type(${t.length}n + ${a+1}) {\n                            --grid-col-span: ${e};\n                        }\n                    `).join(" ")}\n            }\n        `), [o]),
            u = (0, v.v6)({
              "data-testid": a,
              className: na,
              style: (0, j.DI)({
                [ia]: s
              })
            }, i);
          return (0, r.jsxs)(d, {
            id: l,
            ref: c,
            ...u,
            children: [(0, r.jsx)("style", {
              children: _
            }), e]
          })
        }),
        ua = (0, n.forwardRef)(function({
          gap: e,
          children: t,
          asChild: a,
          testId: n,
          ...o
        }, s) {
          const i = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": n,
              className: sa,
              style: (0, j.DI)({
                [ia]: e
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...c,
            children: t
          })
        }),
        ma = ({
          contentCollection: e,
          layout: t,
          ...a
        }) => {
          const o = (0, n.useMemo)(() => t?.breakpointsCollection?.items.map(e => ({
            mediaQuery: e.mediaQuery || "all",
            behavior: e.behavior || "wrap",
            alignment: e.alignment || "left",
            columns: e.columns
          })), [t]);
          return (0, r.jsx)(_a, {
            breakpoints: o,
            ...a,
            children: e?.items.map((t, a) => (0, r.jsx)(ua, {
              children: (0, r.jsx)(c.BlockRenderer, {
                block: t,
                blockPosition: {
                  blockIndex: a,
                  totalBlocks: e.items.length
                }
              })
            }, t.sys?.id || a))
          })
        },
        ga = "WwwGridWrapper",
        ba = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var fa = a(66760);
      wt.os.registerPlugin(Rt.u);
      const pa = "data-original-tabindex",
        ha = (e, t = 0, a = 1) => Math.min(Math.max(e, t), a),
        ya = ["a[href]", "button:not([disabled])", "textarea:not([disabled])", "input:not([disabled])", "select:not([disabled])", '[tabindex]:not([tabindex="-1"])'].join(","),
        ka = e => Array.from(e.querySelectorAll(ya)).filter(e => {
          const t = e.hasAttribute("disabled"),
            a = "true" === e.getAttribute("aria-hidden"),
            r = !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          return !t && !a && r
        }),
        va = () => ({
          desktop: {
            enter: wt.os.timeline({
              paused: !0
            }),
            exit: wt.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: wt.os.timeline({
              paused: !0
            }),
            exit: wt.os.timeline({
              paused: !0
            })
          }
        }),
        xa = (e, t) => t ? e.mobile : e.desktop,
        ja = e => {
          const t = {
              desktop: {
                enter: wt.os.timeline({
                  paused: !0
                }),
                exit: wt.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: wt.os.timeline({
                  paused: !0
                }),
                exit: wt.os.timeline({
                  paused: !0
                })
              }
            },
            a = e.fade?.current,
            r = e.content?.current;
          return a && r ? (t.mobile.enter.set(r, {
            opacity: 1,
            clearProps: "transform, y, yPercent"
          }).fromTo(r, {
            opacity: 0
          }, {
            opacity: 1,
            duration: .2,
            ease: "power1.inOut"
          }, 0), t.mobile.exit.set(r, {
            clearProps: "transform, y, yPercent"
          }, 0).fromTo(a, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(r, {
            x: 0
          }, {
            x: "70vw",
            duration: 1,
            ease: "none"
          }, 0), t.desktop.enter.set(r, {
            opacity: 1,
            clearProps: "transform, x, xPercent"
          }, 0).fromTo(r, {
            opacity: 0,
            yPercent: 25
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in"
          }, 0), t.desktop.exit.fromTo(a, {
            opacity: 1
          }, {
            opacity: .1,
            duration: 1,
            ease: "none"
          }, 0).fromTo(r, {
            opacity: 1,
            yPercent: 0
          }, {
            opacity: 0,
            yPercent: 0,
            duration: 1,
            ease: "none"
          }, 0), t) : va()
        },
        wa = ({
          defaultSlide: e = 0,
          delay: t,
          loop: a = !0,
          slideRefs: r,
          slides: o
        }) => {
          const s = (0, ne.Ub)(w.f.mobile),
            {
              trackEvent: i
            } = W(),
            [c, l] = (0, n.useState)(e),
            d = (0, n.useRef)(null),
            _ = (0, n.useRef)(0),
            u = (0, n.useRef)(!1),
            m = (0, n.useRef)(!1),
            g = (0, n.useRef)(!1),
            b = (0, n.useRef)(e),
            f = (0, n.useRef)(null),
            p = (0, n.useRef)(null),
            h = (0, n.useRef)([]),
            y = (0, n.useRef)([]),
            k = (0, n.useRef)([]),
            v = (0, n.useRef)("auto"),
            x = (0, n.useRef)({}),
            j = (0, n.useRef)(t),
            C = (0, n.useRef)(e),
            [R, S] = (0, xe.A)({
              axis: "x",
              align: "start",
              active: !0,
              containScroll: "trimSnaps",
              duration: 50,
              loop: a,
              startIndex: e
            }, [(0, je.J)()]);
          Ca(S, h.current, {
            isMobile: s,
            loop: a
          });
          const N = (0, n.useCallback)((e, t) => {
              y.current[t] = e
            }, []),
            I = (0, n.useCallback)(e => x.current[e] ?? {
              value: 0,
              remainingMs: t
            }, [t]),
            A = (0, n.useCallback)(() => {
              const e = f.current,
                t = C.current;
              if (!e) return void(x.current[t] = I(t));
              const a = ha(e.progress()),
                r = _.current,
                n = ha(a * (1 - r) + r),
                o = j.current,
                s = o * a,
                i = Math.max(o - s, 0);
              x.current[t] = {
                value: n,
                remainingMs: i
              }
            }, [I]),
            E = (0, n.useCallback)(() => {
              f.current && (f.current.kill(), f.current = null)
            }, []),
            z = (0, n.useCallback)(() => {
              A(), E()
            }, [E, A]),
            T = (0, n.useCallback)(e => {
              y.current.forEach((t, a) => {
                if (!t) return;
                const r = a == e;
                wt.os.to(t, {
                  width: r ? 80 : 10,
                  duration: .5,
                  ease: "power2.inOut"
                })
              }), k.current.forEach((t, a) => {
                if (!t) return;
                if (a !== e) return void wt.os.set(t, {
                  opacity: 0,
                  width: "0%"
                });
                const r = I(a);
                wt.os.set(t, {
                  opacity: 1,
                  width: 100 * r.value + "%"
                })
              })
            }, [I]),
            M = (0, n.useCallback)(e => {
              E(), C.current = e, T(e)
            }, [T, E]),
            D = (0, n.useCallback)(e => {
              x.current[e] = {
                value: 0,
                remainingMs: t
              }
            }, [t]),
            F = (0, n.useCallback)((e, a) => {
              if (m.current) return;
              const r = k.current[e];
              if (!r || !S) return;
              E(), C.current = e, T(e);
              const n = a?.fromStored ? I(e) : {
                  value: 0,
                  remainingMs: t
                },
                o = ha(n.value),
                s = o >= 1 ? t : Math.max(n.remainingMs, 0);
              _.current = o, 0 === o && (x.current[e] = {
                value: 0,
                remainingMs: t
              }), wt.os.set(r, {
                opacity: 1,
                width: 100 * o + "%"
              }), j.current = s, f.current = wt.os.to(r, {
                width: "100%",
                ease: "none",
                duration: s / 1e3,
                onUpdate() {
                  const t = ha(this.progress()),
                    a = ha(t * (1 - o) + o),
                    r = Math.max(s - s * t, 0);
                  x.current[e] = {
                    value: a,
                    remainingMs: r
                  }
                },
                onComplete() {
                  if (x.current[e] = {
                      value: 1,
                      remainingMs: 0
                    }, u.current || !S) return;
                  v.current = "auto";
                  const t = S.selectedScrollSnap() + 1,
                    a = t >= S.scrollSnapList().length ? 0 : t;
                  S.scrollTo(a)
                }
              })
            }, [T, t, S, I, E]),
            P = (0, n.useCallback)((e, t) => {
              k.current[t] = e, e && t === b.current && !u.current && m.current && F(t, {
                fromStored: !0
              })
            }, [F]),
            G = (0, n.useCallback)(() => {
              g.current = !1, u.current = !0, z(), M(b.current)
            }, [z, M]),
            L = (0, n.useCallback)(() => {
              g.current = !1, u.current = !1, F(b.current, {
                fromStored: !0
              })
            }, [F]),
            q = (0, n.useCallback)(() => {
              u.current || (g.current = !0, u.current = !0, z(), M(b.current))
            }, [z, M]),
            V = (0, n.useCallback)(() => {
              g.current && (g.current = !1, u.current = !1, F(b.current))
            }, [F]),
            O = (0, n.useCallback)(e => {
              S && S.slideNodes().forEach((t, a) => {
                const r = a === e,
                  n = ka(t);
                t.setAttribute("aria-hidden", String(!r)), n.forEach(e => {
                  if (!r) {
                    if (!e.hasAttribute(pa)) {
                      const t = e.getAttribute("tabindex");
                      e.setAttribute(pa, null === t ? "__none__" : t)
                    }
                    return void e.setAttribute("tabindex", "-1")
                  }
                  const t = e.getAttribute(pa);
                  null !== t && ("__none__" === t ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", t), e.removeAttribute(t))
                })
              })
            }, [S]),
            B = (0, n.useCallback)((e, t) => {
              b.current = e, l(e), O(e), y.current.forEach((t, a) => {
                const r = t?.parentElement;
                if (!r) return;
                const n = a === e;
                n ? r.setAttribute("tabindex", "-1") : r.removeAttribute("tabindex"), r.setAttribute("aria-current", n ? "true" : "false")
              });
              const a = (e => "auto" === e || "drag" === e || "bullet" === e || "keyboard" === e)(t);
              a && D(e), u.current ? M(e) : F(e, {
                fromStored: !a
              })
            }, [M, D, F, O]);
          (0, n.useLayoutEffect)(() => {
            if (!S) return;
            const e = S.slideNodes(),
              a = [];
            for (let n = 0; n < e.length; n++) {
              const e = r.current[n];
              a.push(e ? ja(e) : va()), x.current[n] || (x.current[n] = {
                value: 0,
                remainingMs: t
              })
            }
            return h.current = a, () => {
              a.forEach(e => {
                e.mobile.enter.kill(), e.mobile.exit.kill(), e.desktop.enter.kill(), e.desktop.exit.kill()
              })
            }
          }, [t, S, r]), (0, n.useEffect)(() => {
            if (!S) return;
            const e = () => {
                const e = S.selectedScrollSnap();
                B(e, v.current), v.current = "auto", window.postMessage({
                  source: "navColorTheme",
                  mode: o[e].navColor ?? "dark"
                })
              },
              t = r.current.map(e => e?.background.current).filter(Boolean);
            let a = !1;
            const n = new Map;
            return Promise.all(t.map(e => new Promise(t => {
              if (e.complete) return void t();
              const a = () => {
                e.removeEventListener("load", a), n.delete(e), t()
              };
              e.addEventListener("load", a), n.set(e, a)
            }))).then(() => {
              a || (v.current = "resize-sync", B(S.selectedScrollSnap(), "resize-sync"))
            }), S.on("select", e), S.on("reInit", e), S.on("init", e), () => {
              a = !0, S.off("select", e), S.off("reInit", e), S.off("init", e), z(), n.forEach((e, t) => {
                t.removeEventListener("load", e)
              })
            }
          }, [S, B, z, o, r]), (0, n.useEffect)(() => {
            if (!S) return;
            let e = b.current;
            const t = () => {
                e = b.current, C.current = e, A(), E(), M(e)
              },
              a = () => {
                const t = S.selectedScrollSnap();
                if (e !== t) return v.current = "drag", void i({
                  event: "carousel_swipe"
                });
                u.current || (b.current = t, C.current = t, F(t, {
                  fromStored: !0
                })), requestAnimationFrame(() => {
                  const e = S.selectedScrollSnap();
                  u.current || f.current || (b.current = e, C.current = e, F(e, {
                    fromStored: !0
                  }))
                })
              };
            return S.on("pointerDown", t), S.on("pointerUp", a), () => {
              S.off("pointerDown", t), S.off("pointerUp", a)
            }
          }, [S, E, M, F, A, i]), (0, n.useEffect)(() => {
            const e = () => {
              p.current && clearTimeout(p.current);
              const e = S?.selectedScrollSnap() ?? b.current;
              m.current = !0, C.current = e, A(), E(), M(e), p.current = setTimeout(() => {
                v.current = "resize-sync";
                const e = S?.selectedScrollSnap() ?? b.current;
                C.current = e, m.current = !1, u.current ? M(e) : (F(e, {
                  fromStored: !0
                }), Rt.u.refresh())
              }, 250)
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e), p.current && clearTimeout(p.current), m.current = !1
            }
          }, [S, m, E, M, F, A]);
          const $ = (0, n.useCallback)(e => {
              S && S.selectedScrollSnap() !== e && (A(), v.current = "bullet", S.scrollTo(e), i({
                event: "carousel_thumbnail_click",
                position: e + 1,
                position_max: S.slideNodes().length
              }))
            }, [S, A, i]),
            U = (0, n.useCallback)(e => t => {
              S && ("Enter" !== t.key && " " !== t.key || (t.preventDefault(), S.selectedScrollSnap() !== e && (A(), v.current = "bullet", S?.scrollTo(e))))
            }, [S, A]);
          return (0, n.useEffect)(() => {
            if (!S) return;
            const e = S.rootNode();
            if (!e) return;
            const t = t => {
              const a = document.activeElement,
                r = !!a && e.contains(a),
                n = a?.tagName.toLowerCase();
              if (!r || "input" === n || "textarea" === n || a?.isContentEditable) return;
              if ("ArrowRight" === t.key) return t.preventDefault(), A(), v.current = "keyboard", void S.scrollNext();
              if ("ArrowLeft" === t.key) return t.preventDefault(), A(), v.current = "keyboard", void S.scrollPrev();
              if ("Tab" !== t.key) return;
              const o = e.querySelector("[data-carousel-pagination]"),
                s = !!o?.contains(a);
              if (t.shiftKey && s) {
                const e = S.slideNodes()[b.current];
                if (!e) return;
                const a = ka(e);
                if (!a.length) return;
                return t.preventDefault(), void a[a.length - 1].focus()
              }
              null !== d.current && cancelAnimationFrame(d.current), d.current = requestAnimationFrame(() => {
                d.current = null;
                const t = document.activeElement;
                if (!t || !e.contains(t)) return;
                const a = (e => {
                  const t = S.slideNodes();
                  for (let a = 0; a < t.length; a++)
                    if (t[a].contains(e)) return a;
                  return -1
                })(t);
                var r; - 1 !== a && ((r = a) < 0 || S.selectedScrollSnap() !== r && (A(), v.current = "keyboard", S.scrollTo(r)))
              })
            };
            return e.addEventListener("keydown", t), () => {
              e.removeEventListener("keydown", t), null !== d.current && cancelAnimationFrame(d.current)
            }
          }, [S, A]), {
            embla: S,
            viewportRef: R,
            activeSlide: c,
            currentSlideRef: b,
            isPausedRef: u,
            pauseProgress: G,
            resumeProgress: L,
            pausedForVisibility: q,
            resumeForVisibility: V,
            onBulletClick: $,
            onBulletKeyDown: U,
            setDotRef: N,
            setFillRef: P
          }
        },
        Ca = (e, t, {
          isMobile: a = !1,
          loop: r = !1
        }) => {
          (0, n.useEffect)(() => {
            if (!e || 0 === t.length) return;
            const n = e.scrollSnapList(),
              o = n.length,
              s = () => {
                const s = e.scrollProgress();
                let i = 0,
                  c = 0,
                  l = 0;
                for (let e = 0; e < o; e++) {
                  const d = n[e],
                    _ = n[(e + 1) % o];
                  if (r) {
                    const t = _ > d ? _ - d : 1 + _ - d,
                      a = (s - d + 1) % 1;
                    if (a >= 0 && a <= t) {
                      i = e, c = (e + 1) % o, l = a / t;
                      break
                    }
                    l = Math.min(a / t, 1)
                  } else {
                    const t = n[e + 1] ?? 1,
                      a = t - d;
                    if (s >= d && s <= t) {
                      i = e, c = e + 1, l = (s - d) / a;
                      break
                    }
                    l = Math.max(0, Math.min((s - d) / a, 1))
                  }
                  const u = t[e];
                  if (u) {
                    const e = xa(u, a);
                    e?.enter.progress(l).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[i];
                if (d) {
                  const e = xa(d, a);
                  e?.enter.progress(1 - l).pause(), e?.exit.progress(l).pause()
                }
                if (!a) {
                  const e = t[c];
                  if (e) {
                    const t = xa(e, !1);
                    t?.enter.progress(l).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach((e, t) => {
                  if (t !== i && t !== c) {
                    const t = xa(e, a);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                })
              };
            return t.length > 1 && (e.on("scroll", s), e.on("resize", s)), () => {
              e.off("scroll", s), e.off("resize", s)
            }
          }, [e, t, a, r])
        },
        Ra = () => v.X3 ? null : document.body,
        Sa = (0, i.defineMessages)({
          hero_carousel_play_button: {
            id: "hero_carousel_play_button",
            description: "Aria label for the icon button to play the hero carousel",
            defaultMessage: "Play"
          },
          hero_carousel_pause_button: {
            id: "hero_carousel_pause_button",
            description: "Aria label for the icon button to pause the hero carousel",
            defaultMessage: "Pause"
          },
          hero_carousel_scroll_down_label: {
            id: "hero_carousel_scroll_down_label",
            description: "Hero carousel scroll down label",
            defaultMessage: "Scroll Down"
          }
        });
      var Na = a(80135),
        Ia = (0, C.c)({
          defaultClassName: "wai7970",
          variantClassNames: {
            inLayout: {
              true: "wai7971",
              false: "wai7972"
            },
            appearance: {
              dark: "wai7973",
              light: "wai7974",
              adaptive: "wai7975",
              ghost: "wai7976"
            },
            size: {
              large: "wai7977",
              small: "wai7978"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              size: "large"
            }, "wai7979"],
            [{
              appearance: "ghost",
              size: "small"
            }, "wai797a"]
          ]
        }),
        Aa = (0, C.c)({
          defaultClassName: "wai797f",
          variantClassNames: {
            appearance: {
              dark: "wai797g",
              light: "wai797h",
              adaptive: "wai797i",
              ghost: "wai797j"
            },
            type: {
              pagination: "wai797k",
              progress: "wai797l",
              line: "wai797m"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              type: "pagination"
            }, "wai797n"],
            [{
              appearance: "ghost",
              type: "line"
            }, "wai797o"]
          ]
        }),
        Ea = (0, C.c)({
          defaultClassName: "wai797p",
          variantClassNames: {
            appearance: {
              dark: "wai797q",
              light: "wai797r",
              adaptive: "wai797s",
              ghost: "wai797t"
            },
            type: {
              pagination: "wai797u",
              progress: "wai797v",
              line: "wai797w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const za = ({
          appearance: e,
          type: t,
          onClick: a,
          onBulletKeyDown: n,
          dotRef: o,
          fillRef: s
        }) => (0, r.jsx)("button", {
          className: "wai797b",
          onClick: a,
          onKeyDown: n,
          children: (0, r.jsx)("span", {
            ref: o,
            className: (0, jt.default)("wai797c", Aa({
              appearance: e,
              type: t
            })),
            children: (0, r.jsx)("span", {
              ref: s,
              className: Ea({
                appearance: e,
                type: t
              })
            })
          })
        }),
        Ta = ({
          progress: e = 0
        }) => (0, r.jsx)("span", {
          className: "wai797d",
          children: (0, r.jsx)("span", {
            className: "wai797e",
            style: {
              width: `${e}%`
            }
          })
        }),
        Ma = (0, n.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: a,
          current: n,
          size: o,
          setDotRef: s,
          setFillRef: i,
          onBulletClick: c,
          onBulletKeyDown: l,
          testId: d,
          asChild: _,
          ...u
        }, m) {
          const b = _ ? g.DX : "div",
            f = (0, v.v6)({
              "data-testid": d,
              className: Ia({
                appearance: t,
                size: o
              })
            }, u),
            p = 100 * n / a;
          return (0, r.jsxs)(b, {
            ref: m,
            ...f,
            children: [("pagination" === e || "line" === e) && (0, Na.A)(a)?.map(a => (0, r.jsx)(za, {
              type: e,
              appearance: t,
              onClick: () => c(a),
              onBulletKeyDown: l?.(a),
              dotRef: e => s?.(e, a),
              fillRef: e => i?.(e, a)
            }, a)), "progress" === e && (0, r.jsx)(Ta, {
              progress: p
            })]
          })
        });
      var Da = (0, C.c)({
        defaultClassName: "_1obdf6x2",
        variantClassNames: {
          variant: {
            default: "_1obdf6x3",
            full_height: "_1obdf6x4"
          }
        },
        defaultVariants: {
          variant: "default"
        },
        compoundVariants: []
      });
      const Fa = (0, n.createContext)({
          variant: "default",
          slides: [],
          defaultSlide: 0,
          loop: !0,
          delay: 6e3,
          totalSlides: 0,
          slideRefs: null,
          currentSlideRef: null,
          activeSlide: 0,
          emblaApi: null,
          inView: !1,
          intersectionRef: null,
          isPausedRef: null,
          viewportRef: null,
          onBulletClick: null,
          onBulletKeyDown: null,
          setDotRef: null,
          setFillRef: null,
          pauseProgress: null,
          resumeProgress: null,
          pausedForVisibility: null,
          resumeForVisibility: null
        }),
        Pa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          slides: a,
          variant: o,
          delay: i,
          slideRefs: c,
          loop: l = !0,
          defaultSlide: d,
          ..._
        }, u) {
          const m = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            {
              ref: f,
              inView: p
            } = (0, s.useScrollVisibility)(1 / 3),
            {
              embla: h,
              viewportRef: y,
              currentSlideRef: k,
              activeSlide: x,
              onBulletClick: j,
              onBulletKeyDown: C,
              setDotRef: R,
              setFillRef: S,
              isPausedRef: N,
              pauseProgress: I,
              resumeProgress: A,
              pausedForVisibility: E,
              resumeForVisibility: z
            } = wa({
              defaultSlide: d,
              delay: i,
              loop: l,
              slideRefs: c,
              slides: a,
              totalSlides: a.length
            });
          (({
            embla: e,
            slides: t,
            target: a = Ra(),
            enabled: r = !0,
            defaultSlideColor: o = "#000",
            backgroundRef: s
          }) => {
            const i = (0, n.useRef)([]),
              c = (0, n.useRef)([]),
              l = e => {
                const t = s.current?.getContext("2d");
                t && s.current && (t.fillStyle = e, t.fillRect(0, 0, s.current.width, s.current.height))
              },
              d = e => {
                const t = document.getElementById("navigation-gradient"),
                  a = t?.getContext("2d");
                e && a && t && (a.fillStyle = e, a.fillRect(0, 0, t.width, t.height))
              };
            (0, n.useEffect)(() => {
              if (!(e && r && t?.length && a)) return;
              const n = () => {
                  i.current = e.scrollSnapList(), c.current = t?.map(e => [e.topGradientColor || o, e.bottomGradientColor || o]), s()
                },
                s = () => {
                  const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                    a = i.current,
                    r = Math.max(a.findIndex(e => e > t), 0),
                    n = r - 1 >= 0 ? r - 1 : a.length - 1,
                    [s, _] = c.current[r] ?? o,
                    [u, m] = c.current[n] ?? o,
                    g = Math.max(a[n] ?? 0, 0),
                    b = a[1] ?? 1,
                    f = Math.round((t - g) / b * 100);
                  if (u.length < 2 || s.length < 2) return;
                  const p = `color-mix(in srgb, ${m}, ${_} ${f}%)`;
                  d(`color-mix(in srgb, ${u}, ${s} ${f}%)`), l(p)
                };
              return 1 === t?.length ? ((() => {
                const [e, t] = c.current[0] ?? [o, o];
                d(e), l(t)
              })(), n()) : (s(), e.on("scroll", s), e.on("reInit", s), e.on("slidesChanged", n), n()), () => {
                e.off("scroll", s), e.off("reInit", s), e.off("slidesChanged", n)
              }
            }, [r, e, t, o, a])
          })({
            embla: h,
            slides: a,
            backgroundRef: m
          }), (({
            backgroundRef: e,
            contentRef: t
          }) => {
            const a = (0, ne.Ub)(w.f.mobileSmall);
            (0, n.useLayoutEffect)(() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                a = e.style.position,
                r = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = a), e.style.zIndex = r
              }
            }, []), (0, Ct.L)(() => {
              const t = e.current;
              if (!t) return;
              const a = t.parentElement;
              wt.os.to(t, {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "top bottom",
                  end: "top top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              }), wt.os.to(t, {
                autoAlpha: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: a,
                  start: "top top-=10%",
                  end: "bottom 25%",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              })
            }, {
              dependencies: [e]
            }), (({
              contentRef: e,
              isMobileSmall: t
            }) => {
              (0, Ct.L)(() => {
                const a = e.current;
                if (!a) return;
                const r = a.parentElement;
                if (!r) return;
                wt.os.set(a, {
                  clearProps: "opacity"
                }), wt.os.set(a, {
                  opacity: 1
                });
                const n = wt.os.to(a, {
                  opacity: 0,
                  ease: "none",
                  paused: !0,
                  scrollTrigger: {
                    trigger: r,
                    start: t ? "bottom 45%" : "bottom 75%",
                    end: "bottom top",
                    scrub: !0,
                    invalidateOnRefresh: !0,
                    onLeaveBack: () => {
                      wt.os.set(a, {
                        opacity: 1
                      })
                    }
                  }
                });
                return () => {
                  n.scrollTrigger?.kill(), n.kill(), wt.os.set(a, {
                    clearProps: "opacity"
                  })
                }
              }, {
                dependencies: [t, e],
                scope: e,
                revertOnUpdate: !0
              })
            })({
              contentRef: t,
              isMobileSmall: a
            })
          })({
            backgroundRef: m,
            contentRef: b
          });
          const T = t ? g.DX : Ae,
            M = (0, v.v6)({
              className: "_1obdf6x0",
              role: "region",
              "aria-label": "Featured Content Carousel",
              tabIndex: 0
            }, _);
          return (0, r.jsx)(Fa.Provider, {
            value: {
              slides: a,
              defaultSlide: d,
              loop: l,
              variant: o,
              delay: i,
              slideRefs: c,
              emblaApi: h,
              inView: p,
              currentSlideRef: k,
              activeSlide: x,
              intersectionRef: f,
              isPausedRef: N,
              viewportRef: y,
              onBulletClick: j,
              onBulletKeyDown: C,
              setDotRef: R,
              setFillRef: S,
              pauseProgress: I,
              resumeProgress: A,
              pausedForVisibility: E,
              resumeForVisibility: z
            },
            children: (0, r.jsxs)(T, {
              ref: u,
              ...M,
              children: [(0, r.jsx)("canvas", {
                ref: m,
                className: "_1obdf6x5",
                "aria-hidden": !0
              }), (0, r.jsx)("div", {
                ref: b,
                children: e
              })]
            })
          })
        }),
        Ga = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, o) {
          const {
            inView: s,
            intersectionRef: i,
            viewportRef: c
          } = (0, n.useContext)(Fa), l = (0, ne.UP)(c, o), d = t ? g.DX : Me;
          return (0, r.jsx)("div", {
            ref: i,
            children: (0, r.jsx)(d, {
              ref: l,
              appearance: "ghost",
              className: "_1obdf6x1",
              "data-disabled": String(!s),
              ...a,
              children: e
            })
          })
        }),
        La = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, o) {
          const {
            variant: s
          } = (0, n.useContext)(Fa), i = (0, v.v6)({
            className: Da({
              variant: s
            })
          }, a), c = t ? g.DX : De;
          return (0, r.jsx)(c, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Wa = (0, n.forwardRef)(function({
          label: e,
          asChild: t,
          ...a
        }, o) {
          const {
            inView: s,
            activeSlide: c,
            slides: d,
            variant: _,
            setDotRef: u,
            setFillRef: m,
            onBulletClick: b,
            onBulletKeyDown: f,
            isPausedRef: p,
            pauseProgress: h,
            resumeProgress: y,
            pausedForVisibility: k,
            resumeForVisibility: x
          } = (0, n.useContext)(Fa), j = !s, [, C] = (0, n.useState)(0), R = (0, ne.Ub)(w.f.mobile), {
            formatMessage: S
          } = (0, i.useIntl)(), {
            trackEvent: N
          } = W(), I = t ? g.DX : "div", A = (0, v.v6)({
            className: "_1obdf6xd"
          }, a), E = !p.current, z = d.length, T = (0, n.useCallback)(() => {
            p.current ? (N({
              event: "cta_other",
              text: "toggle play"
            }), y()) : (N({
              event: "cta_other",
              text: "toggle pause"
            }), h()), C(e => e + 1)
          }, [h, y, p, N]);
          (0, n.useEffect)(() => {
            s ? x() : k(), C(e => e + 1)
          }, [s, k, x]);
          const M = (0, r.jsx)(l.IconButton, {
            className: "_1obdf6x6",
            icon: E ? "Pause" : "Play",
            label: S(E ? Sa.hero_carousel_pause_button : Sa.hero_carousel_play_button),
            "aria-label": S(E ? Sa.hero_carousel_play_button : Sa.hero_carousel_pause_button),
            size: "SM",
            appearance: "ghost",
            onPress: T
          });
          return (0, r.jsx)(I, {
            ref: o,
            ...A,
            children: (0, r.jsxs)("div", {
              className: "_1obdf6xg",
              "data-disabled": String(j),
              children: [z > 1 && (0, r.jsxs)("div", {
                className: "_1obdf6xe",
                "data-carousel-pagination": !0,
                children: [!R && M, (0, r.jsx)(Ma, {
                  type: R ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: c,
                  pages: z,
                  onBulletClick: b,
                  onBulletKeyDown: f,
                  setDotRef: u,
                  setFillRef: m
                }), R && M]
              }), !R && e && (0, r.jsxs)("div", {
                className: "_1obdf6xh",
                children: [(0, r.jsx)(l.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "_1obdf6xi",
                  children: "full_height" === _ ? S(Sa.hero_carousel_scroll_down_label) : void 0
                }), (0, r.jsx)(fa.ArrowDown, {
                  size: "MD",
                  label: e
                })]
              })]
            })
          })
        });
      var qa = "var(--uw9ioi2)",
        Va = "var(--uw9ioi3)",
        Oa = "var(--uw9ioi1)",
        Ba = (0, C.c)({
          defaultClassName: "uw9ioie",
          variantClassNames: {
            invisible: {
              true: "uw9ioif"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $a = ((0, C.c)({
          defaultClassName: "uw9ioio",
          variantClassNames: {
            appearance: {
              link: "uw9ioip",
              danger: "uw9ioiq",
              information: "uw9ioir",
              primary: "uw9iois",
              secondary: "uw9ioit",
              tertiary: "uw9ioiu",
              ghost: "uw9ioiv",
              accent: "uw9ioiw"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }), (0, C.c)({
          defaultClassName: "uw9ioi6",
          variantClassNames: {
            size: {
              SM: "uw9ioi7",
              MD: "uw9ioi8",
              LG: "uw9ioi9",
              XL: "uw9ioia"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }));
      const Ua = (0, n.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: a,
          verticalBackgroundPosition: n,
          asChild: o,
          testId: s,
          size: i = "MD",
          ...c
        }, l) {
          const d = o ? g.DX : "div",
            _ = (0, v.v6)({
              "data-testid": s,
              className: $a({
                size: i
              }),
              style: (0, j.DI)({
                [Oa]: t,
                [qa]: a,
                [Va]: n
              })
            }, c);
          return (0, r.jsx)(d, {
            ref: l,
            ..._,
            children: e
          })
        }),
        Xa = (0, n.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const o = (0, ne.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"),
            {
              isUltraWideLandscape: s
            } = (() => {
              const e = (0, n.useCallback)(() => {
                  const e = window.innerWidth / window.innerHeight;
                  return [e >= 21 / 9, e <= 9 / 21]
                }, []),
                [t, a] = e(),
                [r, o] = (0, n.useState)(t),
                [s, i] = (0, n.useState)(a);
              return (0, n.useEffect)(() => {
                const t = () => {
                  const [t, a] = e();
                  o(t), i(a)
                };
                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
              }, []), {
                isUltraWideLandscape: r,
                isUltraTallPortrait: s
              }
            })(),
            i = (0, v.v6)({
              className: "uw9ioic",
              src: e
            }, t);
          return (0, r.jsx)(St, {
            ref: a,
            ...i,
            loading: "eager",
            context: o ? "2:3" : s ? "32:9" : "21:9"
          })
        }),
        Ha = (0, n.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: a,
          testId: n,
          ...o
        }, s) {
          const i = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": n,
              className: Ba({
                invisible: e
              })
            }, o);
          return (0, r.jsx)("div", {
            className: "uw9ioid _1betujy6 _1betujy5",
            children: (0, r.jsx)(i, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        Ka = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "uw9ioig"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Ya = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : l.Label,
            i = (0, v.v6)({
              "data-testid": a,
              className: "uw9ioih foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Ja = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "h2",
            i = (0, v.v6)({
              "data-testid": a,
              className: "uw9ioii foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Za = (0, n.forwardRef)(function({
          asChild: e,
          src: t,
          ...a
        }, n) {
          const o = e ? g.DX : "div",
            s = (0, v.v6)({
              className: "uw9ioij"
            }, a);
          return (0, r.jsx)(o, {
            ref: n,
            ...s,
            children: (0, r.jsx)(ce, {
              src: t,
              alt: t?.altText ?? "",
              className: "uw9ioik",
              style: t?.source?.width && t?.source?.height ? {
                aspectRatio: `${t.source.width}/${t.source.height}`
              } : {},
              loading: "eager"
            })
          })
        }),
        Qa = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "uw9ioin"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        er = ({
          slideRefs: e,
          slide: t,
          currentSlideIndex: a
        }) => {
          const {
            isPausedRef: o,
            emblaApi: s
          } = (0, n.useContext)(Fa), i = () => {
            o.current || s?.plugins()?.autoplay?.stop()
          };
          return (0, r.jsxs)(Ua, {
            bottomGradientColor: t.bottomGradientColor,
            size: ba(t.title),
            children: [(0, r.jsx)(Xa, {
              ref: e.current[a].background,
              src: t.background
            }), (0, r.jsxs)(Ha, {
              ref: e.current[a].content,
              invisible: 0 === a,
              children: [(0, r.jsx)(Za, {
                ref: e.current[a].logo,
                src: t.logo
              }), (0, r.jsxs)(Ka, {
                ref: e.current[a].heading,
                children: [t.eyebrow && (0, r.jsx)(Ya, {
                  size: "LG",
                  appearance: "bold",
                  children: t.eyebrow
                }), t.title && (0, r.jsx)(Ja, {
                  children: t.title
                })]
              }), t?.ctasCollection?.items && (0, r.jsx)(Qa, {
                ref: e?.current[a]?.ctas,
                children: t?.ctasCollection?.items?.map(e => (0, r.jsx)(ta, {
                  block: e,
                  size: "LG",
                  onClick: i
                }, e.sys.id))
              })]
            })]
          })
        },
        tr = (0, n.forwardRef)(function({
          slides: e,
          size: t,
          delay: a = 6e3,
          defaultSlide: o = 0,
          loop: s = !0,
          ...i
        }, c) {
          const {
            trackEvent: l
          } = W(), {
            emblaApi: d,
            inView: _
          } = (0, n.useContext)(Fa), u = (0, n.useRef)(e?.map(() => ({
            background: (0, n.createRef)(),
            content: (0, n.createRef)(),
            logo: (0, n.createRef)(),
            heading: (0, n.createRef)(),
            ctas: (0, n.createRef)(),
            fade: (0, n.createRef)()
          })));
          return (0, n.useEffect)(() => {
            const t = t => {
              const a = t.selectedScrollSnap();
              _ && l({
                event: "banner_item_impression",
                card_id: e[a].sys.id,
                card_name: e[a].title,
                position: a + 1,
                position_max: e.length
              }, e[a])
            };
            return d && (t(d), d?.on("select", t)), () => {
              d?.off("select", t)
            }
          }, [d]), e?.length ? (0, r.jsxs)(Pa, {
            ref: c,
            slides: e,
            variant: t,
            tabIndex: -1,
            delay: a,
            slideRefs: u,
            defaultSlide: o,
            onNext: () => {
              l({
                event: "carousel_next"
              })
            },
            onPrev: () => {
              l({
                event: "carousel_previous"
              })
            },
            onSwipe: () => {
              l({
                event: "carousel_swipe"
              })
            },
            loop: s,
            ...i,
            children: [(0, r.jsx)(Ga, {
              children: e?.map((e, t) => (0, r.jsx)(La, {
                ref: u?.current[t]?.fade,
                variant: "full",
                children: (0, r.jsx)(er, {
                  currentSlideIndex: t,
                  slideRefs: u,
                  slide: e
                })
              }, t))
            }), e?.length > 1 && (0, r.jsx)(Wa, {})]
          }) : null
        }),
        ar = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = W(), {
            ref: a
          } = t();
          return e ? (0, r.jsx)(tr, {
            ref: a,
            size: e.size,
            slides: e.slidesCollection?.items
          }) : null
        },
        rr = "WwwFeaturedContentCarousel";
      var nr = (0, C.c)({
        defaultClassName: "_1cw0rgk3",
        variantClassNames: {
          textAlignment: {
            left: "_1cw0rgk4",
            center: "_1cw0rgk5",
            right: "_1cw0rgk6"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const or = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_1cw0rgk0"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        sr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "_1cw0rgk1"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        ir = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          textAlignment: n = "left",
          ...o
        }, s) {
          const i = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": t,
              className: nr({
                textAlignment: n
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...c,
            children: e
          })
        }),
        cr = "WwwImageBlock";
      var lr = a(26182),
        dr = (0, C.c)({
          defaultClassName: "_1scye89e",
          variantClassNames: {
            size: {
              small: "_1scye89f",
              medium: "_1scye89g",
              large: "_1scye89h",
              xlarge: "_1scye89i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _r = (0, C.c)({
          defaultClassName: "_1scye899",
          variantClassNames: {
            size: {
              small: "_1scye89a",
              medium: "_1scye89b",
              large: "_1scye89c",
              xlarge: "_1scye89d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ur = (0, C.c)({
          defaultClassName: "_1scye89y",
          variantClassNames: {
            size: {
              small: "_1scye89z",
              medium: "_1scye8910",
              large: "_1scye8911",
              xlarge: "_1scye8912"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mr = (0, C.c)({
          defaultClassName: "_1scye89r",
          variantClassNames: {
            theme: {
              dark: "_1scye89s",
              light: "_1scye89t"
            },
            size: {
              small: "_1scye89u",
              medium: "_1scye89v",
              large: "_1scye89w",
              xlarge: "_1scye89x"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gr = "var(--_1scye890)",
        br = "var(--_1scye891)",
        fr = "var(--_1scye892)",
        pr = (0, C.c)({
          defaultClassName: "_1scye896",
          variantClassNames: {
            interactive: {
              false: "_1scye897",
              true: "_1scye898"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hr = (0, C.c)({
          defaultClassName: "_1scye893",
          variantClassNames: {
            gradient: {
              linear: "_1scye894",
              radial: "_1scye895"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yr = (0, C.c)({
          defaultClassName: "_1scye89k",
          variantClassNames: {
            theme: {
              light: "_1scye89l",
              dark: "_1scye89m"
            },
            size: {
              small: "_1scye89n",
              medium: "_1scye89o",
              large: "_1scye89p",
              xlarge: "_1scye89q"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kr = (0, C.c)({
          defaultClassName: "_1hsn8lx0",
          variantClassNames: {
            size: {
              SM: "_1hsn8lx1",
              MD: "_1hsn8lx2",
              LG: "_1hsn8lx3",
              XL: "_1hsn8lx4",
              auto: "_1hsn8lx5"
            }
          },
          defaultVariants: {
            size: "MD"
          },
          compoundVariants: []
        });
      const vr = (0, n.forwardRef)(function({
          image: e,
          size: t = "auto",
          testId: a,
          asChild: n,
          ...o
        }, s) {
          if (!e) return;
          const i = n ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": a,
              className: kr({
                size: t
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...c,
            children: (0, r.jsx)(ce, {
              src: e,
              className: "_1hsn8lx6"
            })
          })
        }),
        xr = (0, n.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        jr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          size: n = "medium",
          gradientColor: o,
          gradientType: s = "linear",
          interactive: i = !1,
          theme: c = "dark",
          ...l
        }, d) {
          const _ = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(o),
            u = _ && (0, j.DI)({
              [gr]: _.r,
              [fr]: _.b,
              [br]: _.g
            }),
            m = a ? g.DX : "div",
            b = (0, v.v6)({
              "data-testid": t,
              className: hr({
                gradient: s
              }),
              style: {
                ...u
              }
            }, l);
          return (0, r.jsx)(xr.Provider, {
            value: {
              size: n,
              gradientColor: o,
              interactive: i,
              theme: c
            },
            children: (0, r.jsx)(m, {
              ref: d,
              ...b,
              children: e
            })
          })
        }),
        wr = (0, n.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...o
        }, s) {
          const {
            interactive: i
          } = (0, n.useContext)(xr), c = t ? g.DX : "div", l = (0, v.v6)({
            "data-testid": e,
            className: pr({
              interactive: i
            })
          }, o);
          return (0, r.jsx)(c, {
            ref: s,
            ...l,
            children: a
          })
        }),
        Cr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = (0, n.useContext)(xr);
          if (!i) return;
          const {
            size: c
          } = i, l = a ? g.DX : "div", d = (0, v.v6)({
            "data-testid": t,
            className: _r({
              size: c
            })
          }, o);
          return (0, r.jsx)(l, {
            ref: s,
            ...d,
            children: e
          })
        }),
        Rr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const s = (0, n.useContext)(xr);
          if (!s) return;
          const {
            size: i
          } = s, c = (0, v.v6)({
            "data-testid": t,
            className: dr({
              size: i
            })
          }, a);
          return (0, r.jsx)("span", {
            ref: o,
            ...c,
            children: e
          })
        }),
        Sr = (0, n.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, v.v6)({
            className: "_1scye89j"
          }, e);
          return (0, r.jsx)(vr, {
            ref: t,
            ...a
          })
        }),
        Nr = (0, n.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: a,
          ...o
        }, s) {
          const i = (0, n.useContext)(xr);
          if (!i) return;
          const {
            size: d,
            theme: _
          } = i, u = (0, v.v6)({
            "data-testid": a,
            className: yr({
              theme: _,
              size: d
            })
          }, o);
          return (0, r.jsx)(c.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [lr.BLOCKS.HEADING_1]: (e, a) => (0, r.jsx)(l.Heading, {
                  level: t,
                  ref: s,
                  ...u,
                  children: a
                })
              }
            }
          })
        }),
        Ir = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = (0, n.useContext)(xr);
          if (!i) return;
          const {
            size: c
          } = i, l = a ? g.DX : "div", d = (0, v.v6)({
            "data-testid": t,
            className: mr({
              size: c
            })
          }, o);
          return (0, r.jsx)(l, {
            ref: s,
            ...d,
            children: e
          })
        }),
        Ar = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const s = (0, n.useContext)(xr);
          if (!s) return;
          const {
            size: i,
            theme: c
          } = s, d = (0, h.m)(c, "normal"), _ = (0, v.v6)({
            "data-testid": t,
            className: (0, jt.default)(d, ur({
              size: i
            }))
          }, a);
          return (0, r.jsx)(l.Button, {
            ref: o,
            ..._,
            children: e
          })
        });
      var Er = (0, C.c)({
        defaultClassName: "_120g2g73",
        variantClassNames: {
          appearance: {
            link: "_120g2g74",
            accent: "_120g2g75",
            primary: "_120g2g76",
            secondary: "_120g2g77",
            tertiary: "_120g2g78",
            ghost: "_120g2g79",
            information: "_120g2g7a",
            danger: "_120g2g7b"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const zr = "WwwImageCard",
        Tr = (0, i.defineMessages)({
          image_carousel_screen_reader_announcer_label: {
            id: "image_carousel_screen_reader_announcer_label",
            description: "Image carousel screen reader announcer label",
            defaultMessage: "Now showing {selectedTab} of {total}"
          }
        });
      var Mr = "var(--iast650)",
        Dr = (0, C.c)({
          defaultClassName: "iast655",
          variantClassNames: {
            isActive: {
              true: "iast656",
              false: "iast657"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fr = (0, C.c)({
          defaultClassName: "iast659",
          variantClassNames: {
            overflowLeft: {
              true: "iast65a"
            },
            overflowRight: {
              true: "iast65b"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              overflowLeft: !0,
              overflowRight: !0
            }, "iast65c"]
          ]
        });
      const Pr = (0, n.createContext)({
          theme: "light",
          items: null,
          activeIndex: 0,
          focusedIndex: 0,
          setActiveIndex: null,
          setFocusedIndex: null
        }),
        Gr = (0, n.forwardRef)(function({
          theme: e = "light",
          items: t,
          children: a,
          asChild: o,
          testId: s,
          ...c
        }, l) {
          const [d, _] = (0, n.useState)(0), [u, m] = (0, n.useState)(0), {
            formatMessage: b
          } = (0, i.useIntl)(), f = (0, n.useMemo)(() => ({
            theme: e,
            items: t,
            activeIndex: d,
            focusedIndex: u,
            setActiveIndex: _,
            setFocusedIndex: m
          }), [e, t, d, u]), p = (0, h.m)(e), y = o ? g.DX : "div", k = (0, v.v6)({
            className: (0, jt.default)("iast651", p),
            "data-testid": s
          }, c);
          return (0, r.jsxs)(Pr.Provider, {
            value: f,
            children: [(0, r.jsx)(y, {
              ref: l,
              ...k,
              children: a
            }), (0, r.jsx)(Ur, {
              total: t.length,
              announcer: (e, t) => b(Tr.image_carousel_screen_reader_announcer_label, {
                selectedTab: `${e+1}`,
                total: `${t}`
              })
            })]
          })
        }),
        Lr = (0, n.createContext)(null),
        Wr = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            activeIndex: o,
            setActiveIndex: s,
            focusedIndex: i,
            setFocusedIndex: c,
            theme: l
          } = (0, n.useContext)(Pr), {
            containerRef: d,
            buttonRefs: _,
            highlight: u,
            overflow: m
          } = ((e = 0, t = []) => {
            const a = (0, n.useRef)(null),
              r = (0, n.useRef)([]),
              [o, s] = (0, n.useState)({
                left: 0,
                width: 0
              }),
              [i, c] = (0, n.useState)({
                left: !1,
                right: !1
              }),
              l = (0, n.useCallback)(() => {
                const t = a.current,
                  n = r.current[e];
                if (!t || !n) return;
                const o = n.offsetLeft,
                  i = n.offsetWidth;
                s(e => e.left === o && e.width === i ? e : {
                  left: o,
                  width: i
                })
              }, [e]);
            return (0, n.useLayoutEffect)(() => {
              const e = () => requestAnimationFrame(l),
                t = "function" == typeof document.fonts?.ready?.then ? document.fonts.ready : void 0;
              t ? t.then(e) : e()
            }, [e, l, ...t]), (0, n.useEffect)(() => {
              const t = r.current[e];
              if (!t) return;
              const a = new ResizeObserver(() => l());
              return a.observe(t), () => a.disconnect()
            }, [e, l]), (0, n.useEffect)(() => {
              const e = a.current;
              if (!e) return;
              const t = () => {
                c({
                  left: e.scrollLeft > 0,
                  right: e.scrollWidth - e.clientWidth > 1 + e.scrollLeft
                })
              };
              t();
              const r = new ResizeObserver(t);
              return r.observe(e), e.addEventListener("scroll", t), () => {
                r.disconnect(), e.removeEventListener("scroll", t)
              }
            }, []), {
              containerRef: a,
              buttonRefs: r,
              highlight: o,
              overflow: i,
              remeasure: l
            }
          })(o, [e]), {
            onKeyDown: g
          } = (({
            count: e,
            focusedIndex: t,
            setFocusedIndex: a,
            setActiveIndex: r,
            buttonRefs: o
          }) => ({
            onKeyDown: (0, n.useCallback)(n => {
              if (!(e <= 0)) switch (n.key) {
                case "ArrowRight": {
                  n.preventDefault();
                  const r = (t + 1) % e;
                  a(r), o.current[r]?.focus(), o.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "ArrowLeft": {
                  n.preventDefault();
                  const r = (t - 1 + e) % e;
                  a(r), o.current[r]?.focus(), o.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "Home":
                  n.preventDefault(), a(0), o.current[0]?.focus();
                  break;
                case "End":
                  n.preventDefault(), a(e - 1), o.current[e - 1]?.focus();
                  break;
                case "Enter":
                case " ":
                  n.preventDefault(), r(t), a(t)
              }
            }, [e, t, a, r, o])
          }))({
            count: n.Children.count(e),
            focusedIndex: i,
            setFocusedIndex: c,
            setActiveIndex: s,
            buttonRefs: _
          }), b = (e, t) => {
            _.current[e] = t
          }, f = (e, t) => {
            if (!c || !s) return;
            s(e), c(e);
            const a = t ?? _.current[e];
            a && (a.focus(), "function" == typeof a.scrollIntoView && a.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }))
          }, p = (0, n.useMemo)(() => ({
            setButtonRef: b,
            onTabKeyDown: g,
            activateIndex: f
          }), [g]), y = (0, h.m)(l), k = (0, ne.UP)(d, a), x = (0, v.v6)({
            className: (0, jt.default)(Fr({
              overflowLeft: m.left,
              overflowRight: m.right
            }), y),
            role: "tablist"
          }, t);
          return (0, r.jsx)("div", {
            className: (0, jt.default)("iast658", y),
            children: (0, r.jsxs)("div", {
              ref: k,
              ...x,
              onKeyDown: g,
              children: [(0, r.jsx)("div", {
                className: (0, jt.default)("iast65e", y),
                style: {
                  transform: `translateX(calc(${u.left}px - ${j.LU.global.spacing.gap[50]}))`,
                  width: u.width
                }
              }), (0, r.jsx)(Lr.Provider, {
                value: p,
                children: e
              })]
            })
          })
        }),
        qr = (0, n.forwardRef)(function({
          children: e,
          index: t,
          onClick: a,
          onKeyDown: o,
          ...s
        }, i) {
          const {
            activeIndex: c,
            focusedIndex: l,
            theme: d
          } = (0, n.useContext)(Pr), {
            setButtonRef: _,
            onTabKeyDown: u,
            activateIndex: m
          } = (() => {
            const e = (0, n.useContext)(Lr);
            if (!e) throw new Error("ImageCarousel.Tab must be used inside ImageCarousel.Tabs");
            return e
          })(), g = c === t, b = l === t, f = (0, h.m)(d), p = (0, ne.UP)(e => _(t, e), i), y = (0, v.v6)({
            className: (0, jt.default)("iast65d foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj", f)
          }, s);
          return (0, r.jsx)("button", {
            ref: p,
            ...y,
            role: "tab",
            type: "button",
            tabIndex: b ? 0 : -1,
            "aria-selected": g,
            "data-selected": g,
            onClick: e => {
              a?.(e), m(t, e.currentTarget)
            },
            onKeyDown: e => {
              o?.(e), u(e)
            },
            children: e
          })
        }),
        Vr = (0, n.memo)(qr, (e, t) => e.children === t.children && e.index === t.index && e.appearance === t.appearance),
        Or = (0, n.forwardRef)(function({
          children: e,
          mobileAspectRatio: t = "1/1",
          desktopAspectRatio: a = "16/9",
          ...n
        }, o) {
          const s = (0, ne.Ub)(w.f.mobile),
            i = (0, v.v6)({
              className: "iast652",
              style: (0, j.DI)({
                [Mr]: s ? t : a
              })
            }, n);
          return (0, r.jsx)("div", {
            ref: o,
            ...i,
            children: e
          })
        }),
        Br = (0, n.forwardRef)(function({
          index: e,
          children: t,
          ...a
        }, o) {
          const {
            theme: s,
            activeIndex: i
          } = (0, n.useContext)(Pr), c = i === e, l = (0, h.m)(s), d = (0, v.v6)({
            className: (0, jt.default)(Dr({
              isActive: c
            }), l),
            role: "tabpanel",
            hidden: !c,
            "aria-hidden": !c
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ...d,
            children: t
          })
        }),
        $r = (0, n.memo)(Br),
        Ur = ({
          total: e,
          announcer: t
        }) => {
          const {
            activeIndex: a
          } = (0, n.useContext)(Pr);
          return e <= 0 || !a ? null : (0, r.jsx)(g.s6, {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: t(a, e)
          })
        },
        Xr = ({
          index: e,
          children: t
        }) => {
          const {
            activeIndex: a
          } = (0, n.useContext)(Pr), o = a !== e ? -1 : void 0;
          return (0, r.jsx)(g.DX, {
            tabIndex: o,
            children: t
          })
        },
        Hr = "WwwImageCarousel";
      var Kr = a(13335);
      const Yr = (0, n.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        Jr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const [i, c] = (0, n.useState)(!1), l = a ? g.DX : "section", d = (0, v.v6)({
            "data-testid": t,
            className: "b8qqdy0"
          }, o);
          return (0, r.jsx)(Yr.Provider, {
            value: {
              imagesLoaded: i,
              setImagesLoaded: c
            },
            children: (0, r.jsx)(l, {
              ref: s,
              ...d,
              children: e
            })
          })
        }),
        Zr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          topGamesArray: o,
          bottomGamesArray: s,
          ...i
        }, c) {
          const l = a ? g.DX : "div",
            d = (0, v.v6)({
              "data-testid": t,
              className: "b8qqdy1"
            }, i),
            [_, u] = (0, xe.A)({
              loop: !0,
              dragFree: !0,
              startIndex: 0,
              watchDrag: !1,
              containScroll: "keepSnaps"
            }, [(0, Kr.A)({
              playOnInit: !0,
              speed: .2,
              direction: "forward",
              startDelay: 0,
              stopOnInteraction: !1,
              stopOnMouseEnter: !1,
              stopOnFocusIn: !1,
              rootNode: null
            })]),
            [m, b] = (0, xe.A)({
              loop: !0,
              dragFree: !0,
              startIndex: 0,
              watchDrag: !1,
              containScroll: "keepSnaps"
            }, [(0, Kr.A)({
              playOnInit: !0,
              speed: .16,
              direction: "forward",
              startDelay: 10,
              stopOnInteraction: !1,
              stopOnMouseEnter: !1,
              stopOnFocusIn: !1,
              rootNode: null
            })]),
            f = (0, n.useRef)([]);
          return (0, n.useEffect)(() => {
            f.current = [u, b].filter(Boolean)
          }, [u, b]), (0, r.jsxs)(l, {
            ref: c,
            ...d,
            onMouseEnter: () => {
              f.current.forEach(e => e?.plugins().autoScroll?.stop())
            },
            onMouseLeave: () => {
              f.current.forEach(e => e?.plugins().autoScroll?.play())
            },
            children: [(0, r.jsx)(en, {
              gamesArray: o,
              ref: _
            }), (0, r.jsx)(en, {
              gamesArray: s,
              ref: m
            }), e]
          })
        }),
        Qr = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "b8qqdy7 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        en = (0, n.forwardRef)(function({
          gamesArray: e
        }, t) {
          return (0, r.jsx)("div", {
            className: "b8qqdy2",
            ref: t,
            children: (0, r.jsx)("div", {
              className: "b8qqdy3",
              children: e.map((e, t) => {
                if (e.boxArt) return (0, r.jsx)(tn, {
                  asChild: !0,
                  children: (0, r.jsx)(St, {
                    src: e.boxArt,
                    context: "mobile",
                    sizes: "(min-width: 1570px) 260px, 20vw",
                    loading: "eager"
                  })
                }, `${t}-${e?.boxArt?.altText}`)
              })
            })
          })
        }),
        tn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }) {
          const o = (0, v.v6)({
              "data-testid": t,
              className: "b8qqdy6"
            }, n),
            s = a ? g.DX : "div";
          return (0, r.jsx)(s, {
            ...o,
            children: e
          })
        }),
        an = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t,
              className: "b8qqdy8"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        rn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            "data-testid": t,
            className: "b8qqdy9"
          }, a);
          return (0, r.jsx)(l.Heading, {
            ref: n,
            ...o,
            level: 3,
            children: e
          })
        }),
        nn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            "data-testid": t,
            className: "b8qqdya"
          }, a);
          return (0, r.jsx)(l.Body, {
            ref: n,
            ...o,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        on = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          link: a,
          ...n
        }, o) {
          const s = (0, v.v6)({
            "data-testid": t,
            className: "b8qqdyb"
          }, n);
          return a?.url ? (0, r.jsx)(l.Button, {
            ref: o,
            ...s,
            size: "XL",
            asChild: !0,
            children: (0, r.jsx)(x, {
              href: a?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, r.jsx)(l.Button, {
            ref: o,
            ...s,
            size: "LG",
            children: e
          })
        }),
        sn = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: a
          } = W(), {
            ref: n
          } = a();
          if (!e) return null;
          const {
            cta: o,
            description: s,
            title: i
          } = e, c = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items, l = c ? Math.floor(c.length / 2) : 0, d = c?.slice(0, l) || [], _ = c?.slice(l) || [];
          return (0, r.jsxs)(Jr, {
            ref: n,
            children: [(0, r.jsx)(Zr, {
              topGamesArray: d,
              bottomGamesArray: _
            }), (0, r.jsxs)(Qr, {
              children: [(0, r.jsxs)(an, {
                children: [(0, r.jsx)(rn, {
                  children: i
                }), (0, r.jsx)(nn, {
                  children: s
                })]
              }), o && (0, r.jsx)(on, {
                appearance: o?.appearance,
                override_backgroundColor: o?.backgroundColor,
                iconLeft: o?.iconLeft?.icon,
                iconRight: o?.iconRight?.icon,
                link: o?.link,
                onPress: (u = o, () => t(u.analyticsData, u)),
                children: o?.text
              })]
            })]
          });
          var u
        },
        cn = "WwwImagesMarqueeModule",
        ln = "WwwLightboxImage",
        dn = "WwwLinkOutImage";
      var _n = (0, C.c)({
          defaultClassName: "_64q2nvi",
          variantClassNames: {
            appearance: {
              primary: "_64q2nvj",
              secondary: "_64q2nvk",
              tertiary: "_64q2nvl",
              ghost: "_64q2nvm",
              information: "_64q2nvn",
              danger: "_64q2nvo",
              accent: "_64q2nvp",
              link: "_64q2nvq"
            }
          },
          defaultVariants: {
            appearance: "primary"
          },
          compoundVariants: []
        }),
        un = ((0, C.c)({
          defaultClassName: "_64q2nv1",
          variantClassNames: {
            layout: {
              primary: "_64q2nv2",
              secondary: "_64q2nv3",
              default: "_64q2nv4"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        }), (0, C.c)({
          defaultClassName: "_64q2nv5 _1betujy7",
          variantClassNames: {
            grid: {
              "4_up_a": "_64q2nv6",
              "4_up_b": "_64q2nv7",
              "4_up_c": "_64q2nv8",
              "4_up_d": "_64q2nv9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })),
        mn = (0, C.c)({
          defaultClassName: "_64q2nva",
          variantClassNames: {
            type: {
              primary: "_64q2nvb",
              secondary: "_64q2nvc",
              tertiary: "_64q2nvd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              className: "_64q2nv0 _1betujy6 _1betujy5",
              "data-testid": a
            }, n);
          return (0, r.jsx)(s, {
            ...i,
            ref: o,
            children: e
          })
        }),
        bn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: n,
          ...o
        }, s) {
          const i = t ? g.DX : "div",
            c = (0, v.v6)({
              className: un({
                grid: n
              }),
              "data-testid": a
            }, o);
          return (0, r.jsx)(i, {
            ...c,
            ref: s,
            children: e
          })
        }),
        fn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: o,
          ...s
        }, i) {
          const c = t ? g.DX : "div",
            l = (0, v.v6)({
              className: (0, jt.default)(un({
                grid: o || "4_up_a"
              })),
              "data-testid": a
            }, s);
          return (0, r.jsx)(c, {
            ...l,
            ref: i,
            children: n.Children.map(e, (e, t) => (0, n.isValidElement)(e) && (0, n.cloneElement)(e, {
              style: {
                gridArea: String.fromCharCode(97 + t)
              }
            }))
          })
        }),
        pn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          type: n,
          ...o
        }, s) {
          const i = t ? g.DX : "div",
            c = (0, v.v6)({
              className: mn({
                type: n
              }),
              "data-testid": a
            }, o);
          return (0, r.jsx)(i, {
            ...c,
            ref: s,
            children: e
          })
        }),
        hn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          defaultSlide: a = 0,
          onCarouselSwipe: o,
          ...s
        }, i) {
          const [c, l] = (0, n.useState)(!1), {
            ref: d,
            api: _,
            currentSlide: u
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: a = 40
          }) => {
            const r = (0, n.useRef)(null),
              [o, s] = (0, n.useState)(t),
              [i, c] = (0, n.useState)(0),
              [l, d] = (0, n.useState)(!1),
              [_, u] = (0, xe.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: l,
                duration: a
              }, []),
              m = (0, n.useCallback)(() => {
                u && (c(u?.scrollSnapList()?.length ?? 0), d(u?.canScrollNext() || u?.canScrollPrev()))
              }, [u]),
              g = (0, n.useCallback)(() => {
                u && s(u?.selectedScrollSnap() ?? 0)
              }, [u]);
            return (0, n.useEffect)(() => {
              u && r?.current && (e ? r?.current.play() : r.current.stop())
            }, [e, u]), (0, n.useEffect)(() => {
              if (u) return u.on("init", m), u.on("reInit", m), u.on("select", g), m(), () => {
                u.off("init", m), u.off("reInit", m), u.off("select", g)
              }
            }, [u, m, g]), {
              ref: _,
              currentSlide: o,
              totalSlides: i,
              api: u
            }
          })({
            defaultSlide: a
          }), m = (0, ne.UP)(d, i), g = (0, v.v6)({
            className: "_64q2nve",
            "data-testid": t
          }, s);
          return (0, n.useEffect)(() => {
            const e = () => {
              l(!0)
            };
            return _?.on("pointerUp", e), c && o?.(), l(!1), () => {
              _?.off("pointerUp", e)
            }
          }, [_, u]), (0, r.jsx)(Me, {
            ...g,
            ref: m,
            children: e
          })
        }),
        yn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            className: "_64q2nvf",
            "data-testid": t
          }, a);
          return (0, r.jsx)(De, {
            ...o,
            ref: n,
            children: e
          })
        }),
        kn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          textColor: a,
          size: n,
          ...o
        }, s) {
          const i = (0, v.v6)({
            className: "_64q2nvg",
            "data-testid": t,
            gradientType: "radial",
            theme: "dark" === a ? "light" : "dark",
            interactive: !0,
            size: n
          }, o);
          return (0, r.jsx)(jr, {
            ...i,
            ref: s,
            children: e
          })
        }),
        vn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            className: "_64q2nvh",
            "data-testid": t
          }, a);
          return (0, r.jsx)(Cr, {
            ...o,
            ref: n,
            children: e
          })
        }),
        xn = Rr,
        jn = Nr,
        wn = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(Ar, {
            ...o,
            ref: n,
            asChild: !0,
            children: (0, r.jsx)("span", {
              className: _n({
                appearance: a.appearance
              }),
              tabIndex: -1,
              children: e
            })
          })
        }),
        Cn = wr,
        Rn = (0, i.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        });
      var Sn = "_18nij4j0";
      const Nn = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        In = ({
          card: e,
          context: t,
          size: a
        }) => {
          const {
            textColor: n,
            badgeText: o,
            text: s,
            cta: i,
            backgroundImage: c
          } = e, l = Nn[a];
          return (0, r.jsxs)(kn, {
            size: a,
            textColor: n,
            children: [(0, r.jsxs)(vn, {
              children: [o && (0, r.jsx)(xn, {
                children: o
              }), s && (0, r.jsx)(jn, {
                level: l,
                children: s
              }), i && (0, r.jsx)(wn, {
                iconLeft: i.iconLeft?.icon,
                iconRight: i.iconRight?.icon,
                appearance: i.appearance,
                override_backgroundColor: i?.backgroundColor,
                size: "LG",
                children: i.text
              })]
            }), c && (0, r.jsx)(Cn, {
              asChild: !0,
              children: (0, r.jsx)(St, {
                alt: c?.altText,
                src: c,
                context: t
              })
            })]
          })
        },
        An = "WwwMasonryGrid";
      var En = a(47279),
        zn = a(35318),
        Tn = a(72132),
        Mn = a(28401),
        Dn = a(49673);
      const Fn = (0, i.defineMessages)({
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details_amp: {
            id: "ns_successfully_subscribed_details_amp",
            description: "Newsletter Subscription Alert - Successfully Subscribed details post AMP launch",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details_amp: {
            id: "ns_already_subbed_details_amp",
            description: "Newsletter Subscription Alert - Already Subscribed details post AMP launch",
            defaultMessage: "You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        Pn = {
          SUCCESS: {
            icon: "check",
            heading: Fn.ns_successfully_subscribed_title,
            bodyText: Fn.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Fn.ns_check_email_title,
            bodyText: Fn.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Fn.ns_error_preferences_title,
            bodyText: Fn.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Fn.ns_error_generic_title,
            bodyText: Fn.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Fn.ns_already_subbed_title,
            bodyText: Fn.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Fn.ns_confirm_after_register_title,
            bodyText: Fn.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Fn.ns_confirm_title,
            bodyText: Fn.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        Gn = {
          0: Pn.ERROR_PREFERENCES,
          1: Pn.SUCCESS,
          2: Pn.ERROR_PREFERENCES,
          3: Pn.ERROR_PREFERENCES,
          4: Pn.ERROR_GENERIC
        },
        Ln = (0, Mn.eU)(null),
        Wn = (e, t) => {
          const [a, r] = (0, n.useState)(), [o, c] = (0, n.useState)(!1), [l, d] = (0, n.useState)(!1), [_, u] = (0, n.useState)(!1), [m, g] = (0, n.useState)(!1), [b, p] = (0, Dn.fp)(Ln), h = (0, i.useIntl)(), {
            track: y
          } = (0, f.useGtmTrack)(), k = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, n.useEffect)(() => {
            a ? (d(!0), u(!1)) : d(!1)
          }, [a]);
          const v = {
              ...Pn.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: h.formatMessage(Fn.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  x()
                }
              }, {
                buttonText: h.formatMessage(Fn.ns_go_back_text),
                onClick: () => {
                  r(null)
                }
              }]
            },
            x = async () => (y({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || window.location.assign(k.auth), t.loggedIn && t.isAMinor ? (r(Pn.ERROR_GENERIC), g(!1), void y({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !b || t.loggedIn && 3 == b ? void await j() : t.loggedIn && b ? (y({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), r(Pn.ALREADY_SUBSCRIBED), void g(!1)) : void 0), j = async () => {
              const {
                error: e = null,
                result: a
              } = await (0, s.coreScApiFetch)("marketing/update", {
                fetchOptions: {
                  method: "POST"
                },
                pingBearer: t.pingBearer,
                query: {
                  subscribe: !0
                }
              });
              if (e) p(0), r(Pn.ERROR_GENERIC), y({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = a.status;
                p(e), r(Gn[e]), 1 === e ? (y({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), y({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : y({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, n.useEffect)(() => {
            c(1 === b)
          }, [b]), (0, n.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === b) return;
                  p(-1), u(!0);
                  const {
                    error: a = null,
                    result: n
                  } = await (0, s.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (a) p(0), u(!1);
                  else {
                    const a = n.status;
                    p(a), t.isFromAuth && (a => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (a) {
                        case 1:
                          t.isNewAccount ? (y({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), y({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), r(Pn.SUCCESS)) : (y({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), r(Pn.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          y({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), r(Pn.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (r(v), y({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : j()
                      }
                    })(a), u(!1)
                  }
                })() : u(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: a,
            handleSubscribeButton: x,
            isButtonLoading: m,
            isLoading: _,
            isSubscribed: o,
            setShowDialog: d,
            showDialog: l,
            subscriptionStatus: b,
            urls: k,
            setDialog: r
          }
        },
        qn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "l1gjt90 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Vn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : l.Heading,
            i = (0, v.v6)({
              "data-testid": a,
              className: "l1gjt91"
            }, n);
          return (0, r.jsx)(s, {
            level: 2,
            ref: o,
            ...i,
            children: e
          })
        }),
        On = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "l1gjt92"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Bn = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "l1gjt94"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        $n = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: a,
          ...n
        }, o) {
          const s = (0, v.v6)({
            "data-testid": t,
            isDisabled: a
          }, n);
          return (0, r.jsx)(l.Button, {
            appearance: "primary",
            size: "LG",
            ref: o,
            ...s,
            children: e
          })
        }),
        Un = "WwwNewsletterSubscribe";
      var Xn = (0, C.c)({
          defaultClassName: "_1ozycm4b",
          variantClassNames: {
            imagePlacement: {
              left: "_1ozycm4c",
              right: "_1ozycm4d",
              vertical: "_1ozycm4e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hn = (0, C.c)({
          defaultClassName: "_1ozycm4f",
          variantClassNames: {
            imagePlacement: {
              left: "_1ozycm4g",
              right: "_1ozycm4h",
              vertical: "_1ozycm4i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kn = "var(--_1ozycm40)",
        Yn = "_1ozycm4o",
        Jn = (0, C.c)({
          defaultClassName: "_1ozycm44",
          variantClassNames: {
            contentAlignment: {
              center: "_1ozycm45",
              left: "_1ozycm46"
            },
            imagePlacement: {
              left: "_1ozycm47",
              right: "_1ozycm48",
              vertical: "_1ozycm49"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Zn = (0, n.createContext)(void 0),
        Qn = (0, n.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: a = !0,
          imagePlacement: o = "left",
          children: s,
          asChild: i,
          testId: c,
          ...l
        }, d) {
          const _ = i ? g.DX : "div",
            u = "dark" === e ? "#000000" : "lightgrey",
            m = (0, v.v6)({
              "data-testid": c,
              className: "_1ozycm42 _1betujy6 _1betujy5",
              style: (0, j.DI)({
                [Kn]: t ?? u
              })
            }, l),
            b = (0, ne.Ub)(w.f.mobile),
            f = b ? "vertical" : o,
            p = "left" === o ? s : n.Children.toArray(s).reverse();
          return (0, r.jsx)(Zn.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: f,
              gradientEnabled: a
            },
            children: (0, r.jsx)(_, {
              ref: d,
              ...m,
              children: b ? s : p
            })
          })
        }),
        eo = (0, n.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: a,
          asChild: o,
          ...s
        }, i) {
          const c = (0, n.useContext)(Zn);
          if (!c) return;
          const {
            colorMode: l,
            gradientEnabled: d,
            imagePlacement: _
          } = c, u = o ? g.DX : "div", m = (0, h.m)(l ?? "dark", "normal"), b = (0, v.v6)({
            "data-testid": a,
            className: (0, jt.default)(m, "_1ozycm43", Jn({
              contentAlignment: e,
              imagePlacement: _
            }), !d && "_1ozycm4a")
          }, s);
          return (0, r.jsx)(u, {
            ref: i,
            ...b,
            children: t
          })
        }),
        to = (0, n.forwardRef)(function({
          image: e,
          testId: t,
          asChild: a,
          ...o
        }, s) {
          const i = (0, ne.Ub)(w.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            c = (0, n.useContext)(Zn);
          if (!c || !e) return;
          const {
            imagePlacement: l,
            gradientEnabled: d
          } = c, _ = a ? g.DX : "div", u = (0, v.v6)({
            "data-testid": t,
            className: Xn({
              imagePlacement: l
            })
          }, o);
          return (0, r.jsxs)(_, {
            ref: s,
            ...u,
            children: [d && (0, r.jsx)("div", {
              className: Hn({
                imagePlacement: l
              })
            }), (0, r.jsx)(St, {
              src: e,
              context: i,
              className: "_1ozycm4j"
            })]
          })
        }),
        ao = (0, n.forwardRef)(function({
          ...e
        }, t) {
          return (0, r.jsx)(vr, {
            ref: t,
            ...e
          })
        }),
        ro = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, v.v6)({
            "data-testid": t,
            className: "_1ozycm4k"
          }, a);
          return (0, r.jsx)(l.Button, {
            ref: n,
            ...o,
            children: e
          })
        }),
        no = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const n = (0, v.v6)({
            className: "_1ozycm4l"
          }, t);
          return (0, r.jsx)(l.Heading, {
            ref: a,
            ...n,
            children: e
          })
        }),
        oo = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const n = (0, v.v6)({
            className: "_1ozycm4m"
          }, t);
          return (0, r.jsx)(l.Body, {
            ref: a,
            ...n,
            children: e
          })
        }),
        so = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, v.v6)({
            "data-testid": t,
            className: "_1ozycm4n"
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: e
          })
        }),
        io = (0, n.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: a,
          ...n
        }, o) {
          if (!e) return;
          const s = (0, v.v6)({
              "data-testid": a,
              className: Yn
            }, n),
            i = {
              [c.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, r.jsx)(l.Body, {
                size: "XS",
                className: Yn,
                children: t
              }),
              [c.ContentfulTypes.INLINES.HYPERLINK]: (e, a) => {
                return (0, r.jsx)("a", {
                  href: e.data.uri,
                  className: "_1ozycm4p",
                  onClick: (n = e, () => t?.(n)),
                  children: a
                });
                var n
              }
            };
          return (0, r.jsx)("div", {
            ref: o,
            ...s,
            children: (0, r.jsx)(c.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: i
              }
            })
          })
        }),
        co = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, v.v6)({
            "data-testid": t,
            className: "_1ozycm4q"
          }, a);
          return (0, r.jsx)(l.Label, {
            ref: n,
            ...o,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        lo = "WwwPromoModule",
        _o = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "_174ett30 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...i,
            children: e
          })
        }),
        uo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": a,
              className: "_174ett31"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        mo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const o = t ? g.DX : "div",
            s = (0, v.v6)({
              className: "_174ett32"
            }, a);
          return (0, r.jsx)(o, {
            ref: n,
            ...s,
            children: e
          })
        }),
        go = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: a,
          ...n
        }, o) {
          const s = e ? g.DX : "div",
            i = (0, v.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsxs)(s, {
            ref: o,
            ...i,
            children: [(0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90e8a0c40853b90840df2c9de1542722.svg",
              className: "_174ett34",
              alt: a
            }), (0, r.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def13a31001678085d3deddd9381ae73.svg",
              className: "_174ett35",
              alt: a
            })]
          })
        }),
        bo = (0, n.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const s = t ? g.DX : l.Body,
            i = (0, v.v6)({
              "data-testid": a,
              className: "_174ett36 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        fo = "WwwSupportCalloutModule";
      var po = "var(--lgxyya7)",
        ho = (0, C.c)({
          defaultClassName: "lgxyyac",
          variantClassNames: {
            align: {
              left: "lgxyyad",
              center: "lgxyyae",
              right: "lgxyyaf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yo = "var(--lgxyya9)",
        ko = "var(--lgxyyaa)",
        vo = (0, C.c)({
          defaultClassName: "lgxyya0",
          variantClassNames: {
            align: {
              left: "lgxyya1",
              center: "lgxyya2",
              right: "lgxyya3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xo = (0, n.createContext)({
          align: "left"
        }),
        jo = (0, n.forwardRef)(function({
          align: e = "left",
          children: t,
          testId: a,
          asChild: n,
          ...o
        }, s) {
          const i = n ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": a,
              className: vo({
                align: e
              })
            }, o);
          return (0, r.jsx)(xo.Provider, {
            value: {
              align: e
            },
            children: (0, r.jsx)(i, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        wo = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            "data-testid": t,
            className: "lgxyya6"
          }, a);
          return (0, r.jsx)("div", {
            className: "lgxyya5",
            children: (0, r.jsx)(l.Badge.Root, {
              appearance: "primary",
              ref: n,
              ...o,
              children: (0, r.jsx)(l.Badge.Label, {
                children: e
              })
            })
          })
        }),
        Co = (0, n.forwardRef)(function({
          bodyTextWrap: e,
          children: t,
          testId: a,
          ...n
        }, o) {
          const s = (0, v.v6)({
            "data-testid": a,
            className: "lgxyya8",
            style: (0, j.DI)({
              [po]: e
            })
          }, n);
          return t ? (0, r.jsx)("div", {
            ref: o,
            ...s,
            children: t
          }) : null
        }),
        Ro = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          size: a = "SM",
          ...n
        }, o) {
          const s = (0, v.v6)({
            "data-testid": t,
            className: "lgxyya4"
          }, n);
          return (0, r.jsx)(l.Label, {
            size: a,
            appearance: "bold",
            ref: o,
            ...s,
            children: e
          })
        }),
        So = (0, n.forwardRef)(function({
          headerSize: e,
          textColor: t,
          headerTextWrap: a,
          children: o,
          testId: s,
          ...i
        }, c) {
          const d = (0, ne.Ub)(w.f.desktopSmallAndLarger),
            [_, u] = (0, n.useState)(2),
            m = (0, v.v6)({
              "data-testid": s,
              className: (0, jt.default)("lgxyyag", t && "lgxyyab"),
              style: (0, j.DI)({
                [yo]: t,
                [ko]: a
              }),
              asChild: !0
            }, i);
          return (0, n.useEffect)(() => {
            "XS" === e ? u(d ? 5 : 6) : "SM" === e ? u(d ? 4 : 5) : "MD" === e ? u(d ? 3 : 4) : "LG" === e ? u(d ? 2 : 3) : "XL" === e && u(d ? 1 : 2)
          }, [e, d]), (0, r.jsx)(l.Heading, {
            level: _,
            ref: c,
            ...m,
            children: (0, r.jsx)("h2", {
              children: o
            })
          })
        }),
        No = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const s = a ? g.DX : "p",
            i = (0, v.v6)({
              "data-testid": t,
              className: "lgxyyah"
            }, n);
          return (0, r.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        }),
        Io = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, o) {
          const {
            align: s
          } = (0, n.useContext)(xo), i = (0, v.v6)({
            "data-testid": t,
            className: ho({
              align: s
            })
          }, a);
          return (0, r.jsx)("div", {
            ref: o,
            ...i,
            children: e
          })
        }),
        Ao = "WwwTextBlock";
      var Eo = (0, C.c)({
        defaultClassName: "ftz7gr3 _1betujy6 _1betujy5",
        variantClassNames: {
          alignment: {
            image_left: "ftz7gr4",
            image_right: "ftz7gr5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const zo = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          variant: n = "image_right",
          ...o
        }, s) {
          const i = a ? g.DX : "div",
            c = (0, v.v6)({
              "data-testid": t,
              className: Eo({
                alignment: n
              })
            }, o);
          return (0, r.jsx)(i, {
            ref: s,
            ...c,
            children: e
          })
        }),
        To = (0, n.forwardRef)(function({
          testId: e,
          altText: t,
          ...a
        }, n) {
          const o = (0, v.v6)({
            "data-testid": e,
            className: "ftz7gr6",
            alt: t
          }, a);
          return (0, r.jsx)("img", {
            ref: n,
            ...o
          })
        }),
        Mo = (0, n.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const n = (0, v.v6)({
            className: "ftz7gr7"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...n,
            children: e
          })
        }),
        Do = "WwwTextWithBadge";
      var Fo = a(31879),
        Po = a.n(Fo);
      const Go = "WwwVideoPlayer";
      var Lo = a(13517);
      const Wo = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        qo = (0, i.defineMessages)({
          engagement_legal_text: {
            id: "engagement_legal_text",
            description: "Legal Text",
            defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
          },
          engagement_faq: {
            id: "engagement_faq",
            description: "FAQ Text",
            defaultMessage: "FAQ"
          },
          engagement_faqs: {
            id: "engagement_faqs",
            description: "FAQs Text in plural",
            defaultMessage: "FAQs"
          },
          engagement_link_account: {
            id: "engagement_link_account",
            description: "Text for button to link another account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            description: "Text for button to link another game/console account",
            defaultMessage: "Link Game Account"
          }
        });
      var Vo = a(17301);
      const Oo = ({
        legalText: e
      }) => (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });
      var Bo = "_3rocp6l",
        $o = (0, C.c)({
          defaultClassName: "_3rocp6n",
          variantClassNames: {
            slideName: {
              success: "_3rocp6o",
              error: "_3rocp6p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Uo = "_3rocp6m",
        Xo = "_3rocp6i",
        Ho = "_3rocp6g",
        Ko = "_3rocp65",
        Yo = "_3rocp66",
        Jo = "_3rocp6q",
        Zo = "_3rocp6j",
        Qo = "_3rocp63",
        es = "_3rocp68",
        ts = "_3rocp6z",
        as = "_3rocp6a",
        rs = "_3rocp6h",
        ns = "_3rocp67";
      const os = ({
        content: e,
        loggedIn: t,
        addClaim: a,
        signin: n,
        landingSlide: o
      }) => (0, r.jsxs)("div", {
        className: (0, jt.default)(Ko, "_3rocp6c _3rocp6b", "onScreen" === o ? es : "", "hidden" === o ? Yo : "", "visible" === o ? ns : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: Qo,
          alt: e.introScreen.image.alt
        }), (0, r.jsxs)("div", {
          className: rs,
          children: [(0, r.jsx)("div", {
            className: as,
            children: (0, r.jsxs)("div", {
              className: Bo,
              children: [(0, r.jsx)(l.Badge.Root, {
                className: "_3rocp6k",
                appearance: "primary",
                children: (0, r.jsx)(l.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, r.jsxs)("div", {
                className: (0, jt.default)(Uo, "override"),
                children: [(0, r.jsx)(l.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, r.jsx)("div", {
                className: Ho,
                children: (0, r.jsx)(l.Button, {
                  className: ts,
                  appearance: "primary",
                  size: "LG",
                  onClick: t ? a : n,
                  children: t ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: Xo,
            children: (0, r.jsx)("div", {
              className: (0, jt.default)(Zo, "override"),
              children: (0, r.jsx)(Oo, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var ss = a(14653),
        is = a(50662),
        cs = a(90067),
        ls = a(27859),
        ds = a(63218),
        _s = a(51550),
        us = a(30433);
      const ms = (0, i.defineMessages)({
          character_card_a11y_intro: {
            id: "character_card_a11y_intro",
            description: "The a11y intro for the charcter card.",
            defaultMessage: "Character Card:"
          },
          character_card_a11y_player: {
            id: "character_card_a11y_player",
            description: "The a11y player name for the charcter card.",
            defaultMessage: "Player {player}."
          },
          character_card_a11y_rank: {
            id: "character_card_a11y_rank",
            description: "The a11y rank for the charcter card.",
            defaultMessage: "Rank {rank}."
          }
        }),
        gs = "rockstargames-sites-rockstargamesb2d75ee6d468c7fde9ad28ba90ca2804",
        bs = (0, n.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...n
        }, o) {
          const {
            formatMessage: s
          } = (0, i.useIntl)(), c = (0, ls.v6)(n, {
            "data-testid": a,
            className: (0, jt.default)("rockstargames-sites-rockstargamesd738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsxs)("div", {
            ref: o,
            ...c,
            children: [(0, r.jsx)(cs.s6, {
              children: s(ms.character_card_a11y_intro)
            }), e]
          })
        }),
        fs = (0, us.g)(bs),
        ps = (0, n.forwardRef)(function({
          src: e,
          alt: t,
          testId: o,
          ...s
        }, i) {
          const [c, l] = (0, n.useState)(e), d = (0, ls.v6)(s, {
            className: "rockstargames-sites-rockstargamesa0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": o
          });
          return e ? (0, r.jsx)("div", {
            ref: i,
            ...d,
            children: (0, r.jsx)("img", {
              className: gs,
              src: c,
              alt: t ?? "",
              onError: () => l(a(14804)),
              "aria-hidden": !t
            })
          }) : (0, r.jsx)("div", {
            ref: i,
            ...d,
            children: (0, r.jsx)("img", {
              className: gs,
              src: a(14804),
              alt: t ?? "",
              "aria-hidden": !t
            })
          })
        }),
        hs = (0, n.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...n
        }, o) {
          const s = e ? cs.DX : "div",
            i = (0, ls.v6)(n, {
              className: (0, jt.default)("rockstargames-sites-rockstargamesfbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        ys = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, ls.v6)(a, {
            className: "rockstargames-sites-rockstargamesd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...o,
            children: e
          })
        }),
        ks = ({
          testId: e,
          ...t
        }) => {
          const a = (0, ls.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(ds.Ay, {
            ...a
          })
        },
        vs = (0, n.forwardRef)(function({
          children: e,
          testId: t,
          userName: a,
          ...n
        }, o) {
          const {
            formatMessage: s
          } = (0, i.useIntl)(), c = (0, ls.v6)(n, {
            "data-testid": t
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamescd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...c,
            ref: o,
            children: [(0, r.jsx)(cs.s6, {
              children: s(ms.character_card_a11y_player, {
                player: a
              })
            }), (0, r.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        xs = (0, n.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const o = (0, ls.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...o,
            ref: n,
            children: t
          })
        }),
        js = ({
          testId: e,
          ...t
        }) => {
          const {
            formatMessage: a
          } = (0, i.useIntl)(), n = (0, ls.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(cs.s6, {
              children: a(ms.character_card_a11y_rank, {
                rank: t.rank
              })
            }), (0, r.jsx)(_s.L, {
              ...n,
              "aria-hidden": !0
            })]
          })
        };
      var ws = a(38044);
      const Cs = ({
        content: e,
        successSlide: t,
        characterList: a,
        linkAccountUrl: o,
        linkMoreAccounts: s,
        linkAccountBtn: i
      }) => {
        const c = (0, n.createRef)(),
          d = (0, n.createRef)(),
          _ = (0, n.createRef)(),
          [u, m] = (0, n.useState)(),
          [g, b] = (0, n.useState)(!1),
          [f, p] = (0, n.useState)(),
          [h, y] = (0, n.useState)(!1),
          [k, v] = (0, n.useState)(!0);
        return (0, n.useEffect)(() => {
          const e = () => {
            c?.current && b(c?.current?.scrollWidth > c?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [c]), (0, n.useEffect)(() => {
          m({
            nextEl: d?.current,
            prevEl: _?.current
          })
        }, [_?.current, d?.current]), (0, r.jsxs)("div", {
          className: (0, jt.default)(Ko, "_3rocp6d _3rocp6b", "onScreen" === t ? es : "", "hidden" === t ? Yo : "", "visible" === t ? ns : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: Qo,
            alt: e.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: rs,
            children: [(0, r.jsxs)("div", {
              className: Bo,
              children: [(0, r.jsx)("div", {
                className: $o({
                  slideName: "success"
                }),
                children: (0, r.jsx)(fa.Check, {
                  className: Jo,
                  label: "succcess check label"
                })
              }), (0, r.jsxs)("div", {
                className: (0, jt.default)(Uo, "override"),
                children: [(0, r.jsx)(l.Heading, {
                  level: 3,
                  children: e.successScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.successScreen.body
                  }
                })]
              }), (0, r.jsxs)("div", {
                className: "_3rocp6s",
                children: [(0, r.jsx)("div", {
                  className: "_3rocp6t",
                  ref: c,
                  children: (0, r.jsx)(ss.RC, {
                    mousewheel: {
                      releaseOnEdges: !0
                    },
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: g,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: u,
                    modules: [is.Vx, is.Jq],
                    onInit: e => {
                      p(e)
                    },
                    onSlideChange: e => {
                      y(e?.isEnd), v(e?.isBeginning)
                    },
                    children: a.map(e => (0, r.jsx)(ss.qr, {
                      tabIndex: 0,
                      children: (0, r.jsxs)(fs, {
                        className: "_3rocp6x",
                        children: [(0, r.jsx)(ps, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, r.jsxs)(hs, {
                          children: [(0, r.jsx)(ys, {
                            children: (0, r.jsx)(ks, {
                              tagSize: ds.YT.large,
                              platform: e.platform
                            })
                          }), (0, r.jsx)(vs, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, r.jsx)(xs, {
                            children: (0, r.jsx)(js, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, r.jsx)(l.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, r.jsx)(ws.A, {
                    className: "_3rocp6r",
                    to: o,
                    onClick: s,
                    children: i
                  })
                }), (0, r.jsx)(l.Button, {
                  className: "_3rocp6u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: _,
                  onClick: () => {
                    f?.slidePrev()
                  },
                  isDisabled: k,
                  "data-hidden": !g
                }), (0, r.jsx)(l.Button, {
                  className: "_3rocp6v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    f?.slideNext()
                  },
                  isDisabled: h,
                  "data-hidden": !g
                })]
              })]
            }), (0, r.jsx)("div", {
              className: Xo,
              children: (0, r.jsx)("div", {
                className: (0, jt.default)(Zo, "override"),
                children: (0, r.jsx)(Oo, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      a(79955);
      const Rs = {
          applestore: "rockstargames-sites-rockstargamese68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-rockstargamesc240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-rockstargamesee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-rockstargamesfc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-rockstargamesb12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-rockstargamese752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-rockstargamesbb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-rockstargamesd0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-rockstargamesffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-rockstargamesa2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-rockstargamesed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-rockstargamesfa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-rockstargamese950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-rockstargamesdd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-rockstargamesed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-rockstargamesf046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-rockstargamese7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-rockstargamese8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-rockstargameseaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-rockstargamese6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-rockstargamesc03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-rockstargamesdde1b553776bdd59373d22a43479de29"
        },
        Ss = ({
          buttonText: e = "",
          link: t = "",
          platform: n = "",
          target: o = null,
          onClick: s,
          tabIndex: i,
          className: c,
          ...l
        }) => {
          const d = o ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            u = [Rs.platformButton, Rs[n], c].join(" "),
            m = n ? a(5328)(`./${n}.svg`) : null,
            g = (0, r.jsxs)(r.Fragment, {
              children: [m ? (0, r.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, r.jsx)("div", {
                className: Rs.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: u,
            target: d,
            onClick: s,
            "aria-label": e,
            tabIndex: i,
            ...l,
            children: g
          }) : (0, r.jsx)(_.NavLink, {
            className: u,
            onClick: s,
            to: t,
            "aria-label": e,
            ...l,
            children: g
          }) : (0, r.jsx)("button", {
            className: u,
            onClick: s,
            "aria-label": e,
            tabIndex: i,
            ...l,
            children: g
          })
        },
        Ns = ({
          content: e,
          unlinkedSlide: t,
          returnUrl: a,
          giftId: n
        }) => {
          const o = (0, s.useRockstarTokenPing)(),
            {
              track: i
            } = (0, f.useGtmTrack)(),
            c = async e => {
              const t = (0, s.findPlatform)(e)?.onlineService;
              if (t && "sc" !== t) {
                i({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: n,
                  text: `link ${t}`
                });
                const e = await (0, s.generateTpaLink)({
                  pingBearer: o,
                  returnUrl: a || window.location.pathname,
                  service: t
                });
                window.location.assign(e.href)
              }
            };
          return (0, r.jsxs)("div", {
            className: (0, jt.default)(Ko, "_3rocp6e _3rocp6b", "onScreen" === t ? es : "", "hidden" === t ? Yo : "", "visible" === t ? ns : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: Qo,
              alt: e.introScreen.image.alt
            }), (0, r.jsxs)("div", {
              className: rs,
              children: [(0, r.jsx)("div", {
                className: as,
                children: (0, r.jsxs)("div", {
                  className: Bo,
                  children: [(0, r.jsx)("div", {
                    className: $o({
                      slideName: "error"
                    }),
                    children: (0, r.jsx)(fa.TriangleAlert, {
                      className: Jo,
                      label: ""
                    })
                  }), (0, r.jsxs)("div", {
                    className: (0, jt.default)(Uo, "override"),
                    children: [(0, r.jsx)(l.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, r.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, r.jsxs)("div", {
                    className: "_3rocp610",
                    children: [(0, r.jsx)(Ss, {
                      buttonText: (0, s.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => c("xbox"),
                      tabIndex: 0
                    }), (0, r.jsx)(Ss, {
                      buttonText: (0, s.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => c("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, r.jsx)("div", {
                className: Xo,
                children: (0, r.jsx)("div", {
                  className: (0, jt.default)(Zo, "override"),
                  children: (0, r.jsx)(Oo, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        Is = ({
          errorSlide: e,
          content: t
        }) => (0, r.jsxs)("div", {
          className: (0, jt.default)(Ko, "_3rocp6f _3rocp6b", "onScreen" === e ? es : "", "hidden" === e ? Yo : "", "visible" === e ? ns : ""),
          children: [t?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: t.introScreen.image.sources.mobile,
            className: Qo,
            alt: t.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: rs,
            children: [(0, r.jsx)("div", {
              className: as,
              children: (0, r.jsxs)("div", {
                className: Bo,
                children: [(0, r.jsx)("div", {
                  className: $o({
                    slideName: "error"
                  }),
                  children: (0, r.jsx)(fa.TriangleAlert, {
                    className: Jo,
                    label: ""
                  })
                }), (0, r.jsxs)("div", {
                  className: (0, jt.default)(Uo, "override"),
                  children: [(0, r.jsx)(l.Heading, {
                    level: 3,
                    children: t.errorScreen.headline
                  }), (0, r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.errorScreen.body
                    }
                  })]
                }), (0, r.jsx)("div", {
                  className: Ho,
                  children: (0, r.jsx)(l.Button, {
                    className: ts,
                    appearance: "primary",
                    size: "LG",
                    onClick: () => window.location.reload(),
                    children: t.errorScreen.btnText
                  })
                })]
              })
            }), (0, r.jsx)("div", {
              className: Xo,
              children: (0, r.jsx)("div", {
                className: (0, jt.default)(Zo, "override"),
                children: (0, r.jsx)(Oo, {
                  legalText: t.legalText
                })
              })
            })]
          })]
        });
      var As = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(As || {});
      const Es = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: zs
        } = (0, En.A)(),
        Ts = (0, i.withIntl)(({
          giftId: e,
          location: t = "gtaplus_site",
          introScreen: a,
          errorScreen: o,
          unlinkedScreen: c,
          successScreen: l,
          jumpLinkId: d,
          legalText: u,
          fontTheme: m = "chalet",
          usePadding: g = !0,
          ...b
        }) => {
          const h = {
              errorScreen: {
                btnText: o?.errorButton || "",
                headline: o?.errorHeadline || "",
                body: o?.errorContent || ""
              },
              introScreen: {
                body: a?.introContent || "",
                btnText: {
                  loggedIn: a?.btnTextLoggedIn || "",
                  loggedOut: a?.btnTextLoggedOut || ""
                },
                headline: a?.introHeadline || "",
                image: {
                  alt: a?.image?.alt || a?.introHeadline || "",
                  sources: {
                    desktop: (0, Vo.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, Vo.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: u,
              successScreen: {
                body: l?.successContent || "",
                headline: l?.successHeadline || ""
              },
              unlinkedScreen: {
                body: c?.unlinkedContent || "",
                btnText: c?.unlinkedButtonText || "",
                headline: c?.unlinkedHeadline || ""
              }
            },
            [y] = (0, _.useSearchParams)(),
            {
              data: k,
              loggedIn: v
            } = (0, f.useRockstarUser)(),
            x = (0, s.useRockstarTokenPing)(),
            j = `https://${zs?.subDomain}.rockstargames.com/account/connections`,
            w = (0, i.useIntl)(),
            {
              track: C
            } = (0, f.useGtmTrack)(),
            R = (0, n.useRef)(null),
            {
              ref: S,
              inView: N
            } = (0, p.useInView)({
              threshold: .6
            }),
            I = 1280,
            A = (0, n.createRef)(),
            [E, z] = (0, n.useState)(null),
            [T, M] = (0, n.useState)([]),
            [D, F] = (0, n.useState)(!1),
            [P, G] = (0, n.useState)(),
            [L, W] = (0, n.useState)("hidden"),
            [q, V] = (0, n.useState)("hidden"),
            [O, B] = (0, n.useState)("hidden"),
            [$, U] = (0, n.useState)("hidden"),
            [X, H] = (0, n.useState)(!1),
            [K, Y] = (0, n.useState)(As.landing),
            [J, Z] = (0, n.useState)(h.introScreen.image.sources.mobile || Es),
            Q = `${document.location.pathname}${document.location.search}#${d}`,
            ee = (0, s.usePrevious)(P),
            te = (0, s.usePrevious)(v),
            {
              signInUrl: ae
            } = (0, s.useScAuthLinks)(Q),
            re = e => {
              e === As.landing ? (Y(As.landing), V("onScreen"), W("hidden"), U("hidden"), B("hidden")) : e === As.success ? (Y(As.success), V("offScreen"), W("visible"), setTimeout(() => {
                V("hidden"), U("hidden")
              }, 300), setTimeout(() => {
                W("onScreen")
              }, 100)) : e === As.error ? (Y(As.error), V("offScreen"), U("visible"), setTimeout(() => {
                V("hidden")
              }, 300), setTimeout(() => {
                U("onScreen")
              }, 100)) : e === As.unlinked && (Y(As.unlinked), V("offScreen"), B("visible"), setTimeout(() => {
                V("hidden"), U("hidden")
              }, 300), setTimeout(() => {
                B("onScreen")
              }, 100))
            };
          return (0, n.useEffect)(() => {
            let e;
            return d && window.location.hash === `#${d}` && R.current && (e = window.setTimeout(() => {
              R.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [d]), (0, n.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== t ? Z(h.introScreen.image.sources.mobile || Es) : Z(h.introScreen.image.sources.desktop || Es)
              },
              a = () => {
                window.innerWidth <= I && !D ? (F(!0), re(K)) : window.innerWidth > I && D && F(!1), e()
              };
            return F(window.innerWidth <= I), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [K, D]), (0, n.useEffect)(() => {
            const e = k?.characters?.gtao;
            M(e || [])
          }, [k?.characters?.gtao]), (0, n.useEffect)(() => {
            "boolean" != typeof ee && "boolean" != typeof te || !e || P && v && (async () => {
              try {
                const {
                  result: t
                } = await (0, s.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: x,
                  query: {
                    giftUId: e
                  }
                });
                z("boolean" == typeof t && t)
              } catch (e) {
                z(!1)
              }
            })()
          }, [P, v, e]), (0, n.useEffect)(() => {
            "boolean" == typeof v ? v ? G(!0) : (G(!1), V("onScreen")) : G(!0)
          }, [v]), (0, n.useEffect)(() => {
            "boolean" == typeof E && k?.accountSynced && G(!1)
          }, [E, k?.accountSynced, G]), (0, n.useEffect)(() => {
            P || (async () => {
              T.length > 0 && E ? re(As.success) : re(E ? As.unlinked : As.landing)
            })()
          }, [P]), (0, n.useEffect)(() => {
            if (N && !X) {
              if (void 0 === v) return;
              C({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: v ? "signed in" : "signed out"
              }), H(!0)
            }
          }, [N, v]), (0, n.useEffect)(() => {
            "onScreen" === L && C({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [L]), (0, n.useEffect)(() => {
            "onScreen" === O && C({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [O]), (0, n.useEffect)(() => {
            "onScreen" === $ && C({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [$]), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: "_3rocp60",
              "data-font": m,
              "data-use-padding": g,
              ref: R,
              id: d || "",
              ...b,
              children: (0, r.jsxs)(Lo.motion.div, {
                className: "_3rocp61",
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: S,
                children: [(0, r.jsx)("div", {
                  className: "_3rocp62",
                  style: {
                    "--engagement-image": `url(${J})`
                  }
                }), (0, r.jsx)("div", {
                  className: (0, jt.default)("_3rocp64", P ? "loader" : ""),
                  ref: A,
                  children: P ? (0, r.jsx)("div", {
                    className: "_3rocp6w",
                    children: (0, r.jsx)(Tn.A, {
                      type: "SPINNING"
                    })
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [K === As.landing && (0, r.jsx)(os, {
                      content: h,
                      loggedIn: v,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: t,
                            utmCampaign: y.get("utm_campaign"),
                            utmContent: y.get("utm_content"),
                            utmMedium: y.get("utm_medium"),
                            utmSource: y.get("utm_source")
                          },
                          {
                            status: r
                          } = await (0, s.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: x,
                            query: a
                          }) ?? [];
                        re(r ? As.success : As.error), C({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: ae,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.assign(ae)
                      },
                      landingSlide: q
                    }), K === As.success && (0, r.jsx)(Cs, {
                      content: h,
                      successSlide: L,
                      characterList: T,
                      linkAccountUrl: j,
                      linkMoreAccounts: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: j,
                          text: qo.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: w.formatMessage(qo.engagement_link_account)
                    }), K === As.unlinked && (0, r.jsx)(Ns, {
                      content: h,
                      unlinkedSlide: O,
                      returnUrl: Q,
                      giftId: e
                    }), K === As.error && (0, r.jsx)(Is, {
                      errorSlide: $,
                      content: h
                    })]
                  })
                })]
              })
            })
          })
        }, Wo);
      var Ms = a(25655);
      const Ds = "WwwWebOfferClaim";
      var Fs = a(44293);
      const Ps = "RsgContentRating",
        Gs = {
          [be]: ({
            block: e
          }) => {
            const t = e.imageFilesCollection?.items,
              a = e.altText,
              n = ge(t?.map(e => e?.context)),
              o = t?.find(e => e.context === n) || t?.[0],
              s = o?.source?.url;
            return t && s && n ? (0, r.jsxs)(de, {
              children: [t?.map((e, t) => {
                const a = e.sys.id + t,
                  o = e.source?.url,
                  s = me.get(e?.context || n);
                return o ? (0, r.jsx)(_e, {
                  src: o,
                  media: s,
                  width: e.source?.width,
                  height: e.source?.height
                }, a) : null
              }), (0, r.jsx)(ue, {
                src: s,
                alt: a
              })]
            }) : null
          },
          [le]: ({
            block: e
          }) => e ? (0, r.jsx)(ce, {
            src: e
          }) : null,
          [Ps]: ({
            block: e
          }) => {
            if (!e) return;
            const {
              titleSlug: t
            } = e;
            return t && (0, r.jsx)(Fs.A, {
              titleSlug: t
            })
          },
          [ve]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W();
            if (!e) return null;
            const {
              altText: a,
              backgroundColor: n,
              backgroundImage: o,
              link: s,
              foregroundImage: i
            } = e, l = (0, c.getOptimizedRsgImage)(o, "5:1", {
              preferModernFormat: !0
            });
            return (0, r.jsx)(pe, {
              testId: "www-brand-banner",
              children: (0, r.jsx)(he, {
                altText: a ?? "",
                backgroundColor: n,
                onClick: () => {
                  t({
                    event: "card_click",
                    card_id: e.sys.id,
                    card_name: "brand banner",
                    link_url: e.link?.url
                  })
                },
                asChild: !0,
                children: (0, r.jsxs)(x, {
                  href: s?.url ?? "",
                  children: [(0, r.jsx)(ye, {
                    src: l?.url ?? ""
                  }), i && (0, r.jsx)(ke, {
                    src: i
                  })]
                })
              })
            })
          },
          [Ge]: ({
            block: e,
            ...t
          }) => {
            const {
              blockPosition: a
            } = (0, n.useContext)(c.BlockRendererContext), {
              primaryAccentColor: o,
              secondaryAccentColor: s
            } = (0, n.useContext)(y), {
              trackEvent: i
            } = W(), l = e.cardsCollection?.items?.length ?? 0;
            if (e) return (0, r.jsxs)(Ae, {
              ...t,
              onNext: () => {
                i({
                  event: "carousel_next"
                })
              },
              onPrev: () => {
                i({
                  event: "carousel_previous"
                })
              },
              onSwipe: () => {
                i({
                  event: "carousel_swipe"
                })
              },
              style: {
                paddingBottom: "3px"
              },
              children: [(0, r.jsxs)(Ee, {
                children: [(0, r.jsx)(ze, {
                  level: 5,
                  children: e.title
                }), (0, r.jsx)(Fe, {
                  appearance: e.navigationButtonAppearance ?? "secondary",
                  size: "SM",
                  override_backgroundColor: o,
                  override_textColor: s
                })]
              }), (0, r.jsx)(Te, {
                children: e.cardsCollection?.items?.map((t, n) => (0, r.jsx)(Pe.Provider, {
                  value: {
                    totalItems: l,
                    itemIndex: n
                  },
                  children: (0, r.jsx)(De, {
                    variant: e.variant,
                    children: (0, r.jsx)(c.BlockRenderer, {
                      block: t,
                      blockPosition: a
                    }, e.sys.id)
                  }, `${t?.sys?.id}-${n}`)
                }, `${t?.sys?.id}-${n}`))
              })]
            })
          },
          [Ke]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), {
              landscapeViewportBehavior: a,
              scrimColor: o,
              video: s,
              overlayElements: i,
              playbackBehavior: l
            } = e, {
              primaryAccentColor: d,
              secondaryAccentColor: _
            } = (0, n.useContext)(y), u = (0, ne.Ub)(w.f.landscape), m = "play_once" === l, g = (0, n.useCallback)(e => t({
              event: "cta_other",
              text: "toggle " + (e ? "play" : "pause"),
              element_placement: "decorative video"
            }), []);
            if (!s) return null;
            const b = s.videoFilesCollection?.items?.find(e => "desktop" === e.context),
              f = s.videoFilesCollection?.items?.find(e => "mobile" === e.context),
              p = u ? b : f,
              h = p?.url ?? p?.upload?.url,
              k = p?.posterImage?.source?.url;
            return (0, r.jsxs)($e, {
              playOnce: m,
              landscapeViewportBehavior: a,
              scrimColor: o,
              children: [i && (0, r.jsx)(He, {
                children: (0, r.jsx)(c.BlockRenderer, {
                  block: i
                })
              }), h && (0, r.jsx)(Ue, {
                appearance: d ? "accent" : "primary",
                override_backgroundColor: d,
                override_textColor: _,
                onToggle: g
              }), (0, r.jsx)(Xe, {
                src: h,
                poster: k,
                altText: s.posterImage?.altText,
                autoPlay: !0,
                muted: !0
              })]
            })
          },
          [Ze]: ({
            block: e
          }) => e ? (0, r.jsx)(Je, {
            gradientStyle: e.style || "",
            thickness: e.thickness || "dimensions_25"
          }) : null,
          [vt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), {
              trackEvent: a
            } = W(), o = e.contentCollection?.items, c = o?.map(e => e.tinaId), l = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => e.reduce((e, a) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(a, t), ""))(e, t);
              return s.gql`
        ${et}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(c, t.iso), [c]), {
              loading: d,
              data: _,
              error: u
            } = (0, s.useQuery)(l, {
              autoSetError: !1
            }), m = (e, t) => () => {
              const r = e.block,
                n = {
                  position: t,
                  position_max: g.length,
                  event: "card_click",
                  card_name: r?.url.split("/").pop() ?? r?.title,
                  card_id: e.tinaId,
                  link_url: r?.url
                };
              a(n)
            };
            if (u) return (0, Qe.captureMessage)("Failed to load Newswire Unit", {
              level: Qe.Severity.Error,
              extra: {
                error: u
              }
            }), null;
            if (!e || !o) return null;
            const g = o?.map(e => ({
              id: e.sys.id,
              tinaId: e.tinaId,
              block: _?.[`post${e.tinaId}`] ? _[`post${e.tinaId}`] : null
            })).filter(e => !!e.tinaId && e?.block?.created);
            if (d || !g?.length) return null;
            const b = g[0];
            return (0, r.jsx)(bt, {
              testId: "editorial-grid-module",
              children: (0, r.jsxs)(ft, {
                children: [(0, r.jsx)(S, {
                  showOn: "tabletMediumAndSmaller",
                  children: (0, r.jsx)(pt, {
                    testId: "newswire-carousel",
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: g?.map((e, t) => (0, r.jsx)(ht, {
                      children: (0, r.jsx)(ut, {
                        loading: d,
                        data: e.block,
                        id: e.id,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: m(e, t + 1),
                        testId: e.tinaId
                      })
                    }, e.id))
                  })
                }), (0, r.jsx)(S, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(yt, {
                    testId: "primary-story",
                    children: (0, r.jsx)(ut, {
                      loading: d,
                      data: b.block,
                      id: b.id,
                      layout: "primary",
                      aspect: "wide",
                      handleStoryClick: m(b, 1),
                      testId: b.tinaId
                    })
                  })
                }), (0, r.jsx)(S, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(kt, {
                    children: g?.slice?.(1)?.map((e, t) => (0, r.jsx)(ut, {
                      loading: d,
                      data: e.block,
                      id: e.id,
                      layout: "tertiary",
                      aspect: "square",
                      transparent: !0,
                      handleStoryClick: m(e, t + 1),
                      testId: e.tinaId
                    }, e.id))
                  })
                })]
              })
            })
          },
          [gt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), a = e.tinaId, o = (0, n.useMemo)(() => ((e, t) => {
              const a = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(e, t);
              return s.gql`
        ${mt}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(a, t.iso), [a]), {
              loading: c,
              data: l,
              error: d
            } = (0, s.useQuery)(o, {
              autoSetError: !1
            });
            if (d) return (0, Qe.captureMessage)("Failed to load Newswire Unit", {
              level: Qe.Severity.Error,
              extra: {
                error: d
              }
            }), null;
            if (!e) return null;
            const _ = {
              tinaId: a,
              block: l?.[`post${a}`] ? l[`post${a}`] : null
            };
            return _.block ? (0, r.jsx)(ut, {
              loading: c,
              data: _.block,
              id: e.sys.id,
              layout: "secondary",
              aspect: "wide"
            }) : null
          },
          [ra]: ({
            block: e
          }) => (0, r.jsx)(G.Provider, {
            value: {
              analyticsData: {
                element_placement: `featured game section: ${e.game?.title}`
              }
            },
            children: (0, r.jsx)(aa, {
              block: e
            })
          }),
          [ga]: ({
            block: e
          }) => {
            const {
              colorMode: t
            } = (0, n.useContext)(y);
            if (!e) return;
            const {
              contentCollection: a,
              gap: o,
              theme: s
            } = e;
            if (!a?.items?.length) return null;
            const i = e.theme?.colorMode ?? t,
              c = (e => {
                if (!e) return "";
                const t = e?.replace("gap_", "");
                return j.LU.global.spacing.gap[t] ? j.LU.global.spacing.gap[t] : ""
              })(o);
            return (0, r.jsx)(k, {
              theme: s,
              children: (0, r.jsx)(da, {
                gap: c,
                className: (0, h.m)(i ?? "dark"),
                children: a?.items.map(e => (0, r.jsx)(ma, {
                  contentCollection: e.contentCollection,
                  layout: e.layout
                }, e.sys.id))
              })
            })
          },
          [rr]: ({
            block: e
          }) => (0, r.jsx)(G.Provider, {
            value: {
              analyticsData: {
                element_placement: "featured content hero carousel"
              }
            },
            children: (0, r.jsx)(ar, {
              block: e
            })
          }),
          [cr]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(c.BlockRendererContext), a = (0, ne.Ub)(w.f.desktopSmallAndLarger);
            if (!e?.image) return null;
            const {
              image: o,
              title: s,
              titleSize: i,
              description: d,
              descriptionSize: _,
              textAlignment: u
            } = e, m = {
              XS: 6,
              SM: 5,
              MD: 4,
              LG: 3,
              XL: 2
            } [i || "MD"] - (a ? 1 : 0), g = {
              "body-xs": "XS",
              "body-sm": "SM",
              "body-md": "MD",
              "body-lg": "LG"
            } [_ ?? "body-md"];
            return (0, r.jsxs)(or, {
              children: [(0, r.jsx)(sr, {
                children: (0, r.jsx)(c.BlockRenderer, {
                  block: o,
                  blockPosition: t
                })
              }), (0, r.jsxs)(ir, {
                textAlignment: u,
                children: [s && (0, r.jsx)(l.Heading, {
                  level: m,
                  asChild: !0,
                  children: (0, r.jsx)("h3", {
                    className: "_1cw0rgk2",
                    children: s
                  })
                }), d && (0, r.jsx)(c.RsgMdTextComponent, {
                  markdown: d,
                  bodySize: g
                })]
              })]
            })
          },
          [zr]: ({
            block: e
          }) => {
            const {
              totalItems: t,
              itemIndex: a
            } = (0, n.useContext)(Pe), {
              trackEvent: o
            } = W(), s = !!e.cta?.link?.url, i = (0, r.jsxs)(jr, {
              gradientColor: e?.gradientColor,
              interactive: !0,
              children: [(0, r.jsx)(wr, {
                asChild: !0,
                children: (0, r.jsx)(St, {
                  alt: e?.ariaLabel,
                  src: e.backgroundImage,
                  context: "2:3"
                })
              }), (0, r.jsx)(Sr, {
                image: e.logo,
                size: e.logoSize
              }), (0, r.jsxs)(Cr, {
                children: [e.text && (0, r.jsx)(Ir, {
                  asChild: !0,
                  children: (0, r.jsx)(l.Body, {
                    children: e.text
                  })
                }), e.cta && (0, r.jsx)(Ar, {
                  appearance: e.cta.appearance,
                  iconLeft: e.cta.iconLeft,
                  iconRight: e.cta.iconRight,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  asChild: !0,
                  children: (0, r.jsx)("span", {
                    className: Er({
                      appearance: e.cta.appearance
                    }),
                    tabIndex: -1,
                    children: e.cta?.text
                  })
                })]
              })]
            });
            return s ? (0, r.jsx)(ta, {
              block: e.cta,
              className: "_120g2g72",
              onClick: () => {
                o({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  card_name: e?.text,
                  position: a + 1,
                  position_max: t
                }, e)
              },
              asChild: !0,
              children: i
            }) : i
          },
          [Hr]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), {
              blockPosition: a
            } = (0, n.useContext)(c.BlockRendererContext), o = (e, {
              label: a,
              analyticsData: r
            }) => () => {
              t({
                event: "component_tab_click",
                text: a,
                position: e + 1,
                ...r
              })
            };
            if (!e) return;
            const {
              contentCollection: s,
              mobileAspectRatio: i = "1/1",
              desktopAspectRatio: l = "16/9"
            } = e, d = s?.items ?? [], _ = d.map(t => ({
              label: t.title,
              analyticsData: "analyticsData" in t ? t.analyticsData : e.analyticsData
            }));
            return (0, r.jsxs)(Gr, {
              items: d,
              children: [(0, r.jsx)(Or, {
                mobileAspectRatio: i,
                desktopAspectRatio: l,
                children: !!d.length && d.map((e, t) => (0, r.jsx)($r, {
                  index: t,
                  children: (0, r.jsx)(or, {
                    children: (0, r.jsx)(sr, {
                      children: (0, r.jsx)(Xr, {
                        index: t,
                        children: (0, r.jsx)(c.BlockRenderer, {
                          block: e.image,
                          blockPosition: a
                        })
                      })
                    })
                  })
                }, e?.sys?.id))
              }), !!d.length && (0, r.jsx)(Wr, {
                children: _.map((e, t) => (0, r.jsx)(Vr, {
                  appearance: "ghost",
                  index: t,
                  onClick: o(t, e),
                  children: e.label
                }, e.label))
              })]
            })
          },
          [cn]: ({
            block: e
          }) => (0, r.jsx)(G.Provider, {
            value: {
              analyticsData: {
                element_placement: "images marquee section"
              }
            },
            children: (0, r.jsx)(sn, {
              block: e
            })
          }),
          [ln]: ({
            block: e,
            ...t
          }) => {
            const a = (0, n.useContext)(c.BlockRendererContext),
              {
                blockPosition: o
              } = a,
              {
                trackEvent: s
              } = W(),
              {
                primaryAccentColor: i,
                secondaryAccentColor: d
              } = (0, n.useContext)(y),
              _ = t?.tabIndex,
              u = () => {
                let t = "";
                if (e.image?.source?.url) try {
                  t = new URL(e.image.source.url).pathname.split("/").pop() ?? ""
                } catch {
                  t = e.image?.source?.url.split("/").pop() ?? ""
                }
                return {
                  card_id: e.sys.id,
                  card_name: t,
                  position: o?.blockIndex && Number.isFinite(o.blockIndex) ? o.blockIndex + 1 : void 0
                }
              };
            if (!e?.image) return null;
            const {
              image: m,
              caption: g,
              downloadButton: b,
              thumbnailAspectRatio: f,
              thumbnailObjectPosition: p,
              zoomControls: h
            } = e;
            return (0, r.jsxs)(l.Lightbox.Root, {
              altText: m?.altText || "",
              onOpenChange: e => {
                e && window.dispatchEvent(new CustomEvent("header:hideNav", {
                  detail: {
                    isHidden: !0
                  }
                }))
              },
              children: [(0, r.jsxs)(l.Lightbox.Trigger, {
                tabIndex: _,
                className: "_1ynyi8s0",
                style: {
                  aspectRatio: f,
                  ...(0, j.DI)({
                    [l.Lightbox.CssVars.TriggerBorder]: i,
                    [l.Lightbox.CssVars.TriggerIconBg]: i,
                    [l.Lightbox.CssVars.TriggerIconFg]: d,
                    [l.Lightbox.CssVars.TriggerIconBgActive]: i,
                    [l.Lightbox.CssVars.TriggerIconFgActive]: d
                  })
                },
                onClick: () => {
                  s({
                    event: "card_click",
                    ...u()
                  }, e)
                },
                children: [(0, r.jsx)(l.Lightbox.Thumbnail, {
                  src: m?.source?.url,
                  style: {
                    objectPosition: p
                  }
                }), (0, r.jsx)(l.Lightbox.OpenIcon, {
                  className: "_1ynyi8s2",
                  asChild: !0,
                  children: (0, r.jsx)(fa.Maximize2, {
                    label: ""
                  })
                })]
              }), (0, r.jsxs)(l.Lightbox.Portal, {
                children: [(0, r.jsx)(l.Lightbox.Overlay, {}), (0, r.jsxs)(l.Lightbox.Content, {
                  children: [(0, r.jsx)(l.Lightbox.ZoomPan, {
                    children: (0, r.jsx)(l.Lightbox.Image, {
                      className: "_1ynyi8s1",
                      src: m?.source?.url
                    })
                  }), (0, r.jsxs)(l.Lightbox.Controls, {
                    children: [g && (0, r.jsx)(l.Lightbox.Caption, {
                      children: g
                    }), (0, r.jsx)(l.Lightbox.Close, {
                      onPress: () => {
                        s({
                          event: "modal_close",
                          ...u()
                        }, e)
                      }
                    }), h && (0, r.jsx)(l.Lightbox.Zoom, {}), b && (0, r.jsx)(l.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          },
          [dn]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), a = e?.image?.imageFilesCollection?.items, n = e?.image?.altText, o = ge(a?.map(e => e?.context)), s = a?.find(e => e.context === o) || a?.[0], i = s?.source?.url, c = e.link?.url;
            return a && i && o && c ? (0, r.jsx)("div", {
              className: "_1eo5pzj0",
              children: (0, r.jsx)(x, {
                href: c,
                className: "_1eo5pzj1",
                onClick: () => {
                  t({
                    event: "cta_other"
                  }, e)
                },
                children: (0, r.jsxs)(de, {
                  children: [a?.map((e, t) => {
                    const a = e.sys.id + t,
                      n = e.source?.url,
                      s = me.get(e?.context || o);
                    return n ? (0, r.jsx)(_e, {
                      src: n,
                      media: s,
                      width: e.source?.width,
                      height: e.source?.height
                    }, a) : null
                  }), (0, r.jsx)(ue, {
                    src: i,
                    alt: n
                  })]
                })
              })
            }) : null
          },
          [An]: ({
            block: e
          }) => {
            const t = (0, i.useIntl)(),
              {
                trackEvent: a
              } = W();
            if (!e) return null;
            const n = e.cardsCollection?.items || [],
              [o, ...s] = n,
              c = (e, t) => re[e]?.[t] ?? "1:1",
              l = (e, t) => () => {
                a({
                  event: "card_click",
                  card_id: e?.sys?.id,
                  position: t + 1,
                  position_max: n.length,
                  ...e.link?.url && {
                    link_url: e.link?.url
                  },
                  ...e.analyticsData
                }, e.cta)
              };
            return (0, r.jsxs)(gn, {
              children: [(0, r.jsx)(S, {
                showOn: "mobile",
                forceMount: !0,
                children: (0, r.jsxs)(bn, {
                  gridType: e.variant,
                  children: [(0, r.jsx)(pn, {
                    type: ae(0),
                    children: (0, r.jsx)(x, {
                      href: o.link?.url,
                      target: "_blank",
                      title: t.formatMessage(Rn.masonry_grid_external_store_link),
                      onClick: () => l(o, 0),
                      children: (0, r.jsx)(In, {
                        card: o,
                        context: "4:5",
                        size: "medium"
                      })
                    })
                  }), (0, r.jsx)(hn, {
                    defaultSlide: 0,
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: s.map((e, a) => (0, r.jsx)(yn, {
                      children: (0, r.jsx)(x, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Rn.masonry_grid_external_store_link),
                        onClick: () => l(e, a),
                        className: Sn,
                        children: (0, r.jsx)(In, {
                          card: e,
                          context: "4:3",
                          size: "small"
                        })
                      })
                    }, e.sys.id))
                  })]
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletSmall",
                forceMount: !0,
                children: (0, r.jsx)(fn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = ae(a),
                      o = c("tabletSmall", n),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(pn, {
                      type: n,
                      children: (0, r.jsx)(x, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Rn.masonry_grid_external_store_link),
                        onClick: () => l(e, a),
                        className: Sn,
                        children: (0, r.jsx)(In, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletMedium",
                forceMount: !0,
                children: (0, r.jsx)(fn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = ae(a),
                      o = c("tabletMedium", n),
                      s = 0 === a ? "medium" : "small";
                    return (0, r.jsx)(pn, {
                      type: n,
                      children: (0, r.jsx)(x, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Rn.masonry_grid_external_store_link),
                        onClick: () => l(e, a),
                        className: Sn,
                        children: (0, r.jsx)(In, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletLarge",
                forceMount: !0,
                children: (0, r.jsx)(fn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = ae(a),
                      o = c("tabletLarge", n),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(pn, {
                      type: n,
                      children: (0, r.jsx)(x, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Rn.masonry_grid_external_store_link),
                        onClick: () => l(e, a),
                        className: Sn,
                        children: (0, r.jsx)(In, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "desktopSmallAndLarger",
                forceMount: !0,
                children: (0, r.jsx)(fn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = ae(a),
                      o = c("desktopSmallAndLarger", n),
                      s = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(pn, {
                      type: n,
                      children: (0, r.jsx)(x, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(Rn.masonry_grid_external_store_link),
                        onClick: () => l(e, a),
                        className: Sn,
                        children: (0, r.jsx)(In, {
                          card: e,
                          context: o,
                          size: s
                        })
                      })
                    }, e.sys.id)
                  })
                })
              })]
            })
          },
          [Un]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const a = (0, i.useIntl)(),
              o = (0, s.useRockstarTokenPing)(),
              {
                loggedIn: d,
                data: u,
                loading: m
              } = (0, f.useRockstarUser)(),
              g = (0, _.useNavigate)(),
              [{
                iso: b
              }] = (0, i.getLocale)(),
              p = (0, s.toScLocaleString)(b),
              {
                login: h
              } = (0, s.getConfigForDomain)(),
              y = (0, En.A)(),
              [k] = (0, _.useSearchParams)(),
              v = "true" === k.get("marketing"),
              [x, j] = (0, n.useState)(!0),
              w = {
                lang: p,
                location: location.pathname,
                login: h,
                navigate: g,
                www: y.sites.www
              },
              C = {
                ...u,
                isFromAuth: v,
                loggedIn: d,
                pingBearer: o,
                userLoading: m
              },
              R = Wn(w, C),
              {
                dialog: S,
                urls: N,
                handleSubscribeButton: I,
                isButtonLoading: A,
                isLoading: E,
                isSubscribed: z,
                setShowDialog: T,
                showDialog: M
              } = R;
            let D;
            D = null === d || d && E ? "loading" : "ready";
            const F = "ready" == (m ? "loading" : "ready"),
              P = "ready" === D;
            if ((0, n.useEffect)(() => {
                F && j(d && !z || !d)
              }, [F, d, z]), (0, n.useEffect)(() => {
                t && F && P && t(M || x)
              }, [x, t, F, P, M]), !e) return null;
            const G = S?.buttons || [{
                buttonText: a.formatMessage(Fn.ns_ok_button_text),
                onClick: () => {
                  T(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: S?.showManagePreferences ? a.formatMessage(Fn.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: N.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              L = (e, t) => (0, r.jsx)(l.Heading, {
                level: 3,
                className: "_4fo4mk1",
                children: t
              }),
              W = {
                [c.ContentfulTypes.BLOCKS.HEADING_1]: L,
                [c.ContentfulTypes.BLOCKS.HEADING_2]: L,
                [c.ContentfulTypes.BLOCKS.HEADING_3]: L,
                [c.ContentfulTypes.BLOCKS.HEADING_4]: L,
                [c.ContentfulTypes.BLOCKS.HEADING_5]: L,
                [c.ContentfulTypes.BLOCKS.HEADING_6]: L
              },
              q = d && !P;
            return (0, r.jsxs)(r.Fragment, {
              children: [x && (0, r.jsx)(qn, {
                children: q ? (0, r.jsx)(Tn.A, {}) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(Vn, {
                    asChild: !0,
                    children: e.image && (0, r.jsx)(ce, {
                      src: e.image
                    })
                  }), (0, r.jsxs)(On, {
                    children: [e.textContent && (0, r.jsx)(Bn, {
                      children: (0, r.jsx)(c.RsgMdTextComponent, {
                        markdown: e.textContent,
                        rsgRichTextOptions: {
                          renderNode: W
                        }
                      })
                    }), (0, r.jsx)($n, {
                      onClick: I,
                      isDisabled: A,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), S && (0, r.jsx)(zn.A, {
                icon: S.icon,
                title: a.formatMessage(S.heading),
                secondaryText: a.formatMessage(S.bodyText),
                closeOnOutsideClick: S.closeOnOutsideClick,
                buttons: G,
                showDialog: M,
                onClose: () => T(!1)
              })]
            })
          },
          [lo]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              trackRichTextHyperlink: a
            } = W();
            return (0, r.jsxs)(Qn, {
              colorMode: "dark",
              backgroundColor: e.backgroundColor,
              gradientEnabled: e.enableGradient,
              imagePlacement: e.imagePlacement,
              children: [(0, r.jsx)(to, {
                image: e.backgroundImage
              }), (0, r.jsxs)(eo, {
                contentAlignment: e.contentAlignment,
                children: [(0, r.jsx)(co, {
                  children: e.badge
                }), (0, r.jsx)(ao, {
                  image: e.foregroundImage,
                  size: e.foregroundImageSize
                }), (0, r.jsxs)(so, {
                  children: [(0, r.jsx)(no, {
                    level: 4,
                    children: e.headline
                  }), (0, r.jsx)(oo, {
                    size: "MD",
                    children: e.description
                  })]
                }), e.cta && (0, r.jsx)(ro, {
                  appearance: e.cta.appearance,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  onPress: (n = e.cta, () => t(n.analyticsData, n)),
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: e.cta.link?.url,
                    children: e.cta.text
                  })
                }), (0, r.jsx)(io, {
                  markdown: e.legalText,
                  onHyperlinkClick: e => a(e)
                })]
              })]
            });
            var n
          },
          [L]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(c.BlockRendererContext), {
              trackEvent: a,
              useTrackPageSectionImpression: o
            } = W(), {
              ref: i
            } = o(e.analyticsData), [l, d] = (0, n.useState)(!1), [_, u] = (0, n.useState)(!0), {
              isMobile: m
            } = (0, s.useWindowResize)(), g = e.title, b = e.cta, f = g || b;
            (0, n.useEffect)(() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && d(!0)
              } catch {
                d(!1)
              }
            }, [e]);
            const p = (0, n.useCallback)(e => {
              u(e)
            }, []);
            if (!e || !_) return null;
            const y = {
                topPaddingMultiplier: P[e.topPadding] ?? P.default,
                bottomPaddingMultiplier: P[e.bottomPadding] ?? P.default,
                backgroundCss: e.backgroundCss,
                backgroundImage: m ? e.mobileBackgroundImage?.source?.url : e.desktopBackgroundImage?.source?.url,
                className: (0, h.m)(e.theme?.colorMode ?? "dark")
              },
              v = (0, r.jsxs)(z, {
                ref: i,
                ...y,
                children: [f && (0, r.jsxs)(T, {
                  children: [g && (0, r.jsx)(M, {
                    level: 2,
                    children: g
                  }), b?.text && b.link?.url && (0, r.jsx)(D, {
                    label: b.text,
                    url: b.link.url,
                    isExternal: l,
                    iconRight: b.iconRight?.icon,
                    onClick: () => a(b?.analyticsData, b),
                    children: b.text
                  })]
                }), e.contentCollection?.items && (0, r.jsx)(F, {
                  children: e.contentCollection.items?.map(e => (0, r.jsx)(c.BlockRenderer, {
                    block: e,
                    blockPosition: t,
                    renderSectionWrapper: p
                  }, e.sys?.id))
                })]
              });
            let x;
            return x = (0, r.jsx)(k, {
              theme: e.theme,
              children: v
            }), x
          },
          [fo]: ({
            block: e
          }) => {
            if (!e) return null;
            const {
              cta: t
            } = e;
            return (0, r.jsx)(_o, {
              children: (0, r.jsxs)(uo, {
                children: [(0, r.jsxs)(mo, {
                  children: [(0, r.jsx)(go, {
                    altText: e.title
                  }), (0, r.jsx)(bo, {
                    children: e.description
                  })]
                }), t && (0, r.jsx)(ta, {
                  block: t,
                  size: "LG"
                })]
              })
            })
          },
          [Ao]: ({
            block: e
          }) => {
            const {
              primaryAccentColor: t,
              headerTextColor: a
            } = (0, n.useContext)(y), {
              alignment: o,
              badge: s,
              eyebrow: i,
              eyebrowSize: l,
              header: d,
              headerSize: _,
              body: u,
              bodySize: m,
              ctasCollection: g,
              footnote: b,
              headerTextWrap: f,
              bodyTextWrap: p
            } = e;
            return (0, r.jsxs)(jo, {
              align: o || "left",
              children: [s && (0, r.jsx)(wo, {
                children: s
              }), (0, r.jsxs)(Co, {
                bodyTextWrap: p,
                children: [i && (0, r.jsx)(Ro, {
                  size: l,
                  children: i
                }), d && (0, r.jsx)(So, {
                  headerSize: _,
                  textColor: a,
                  headerTextWrap: f,
                  children: d
                }), u && (0, r.jsx)(No, {
                  asChild: !0,
                  children: (0, r.jsx)(c.RsgMdTextComponent, {
                    markdown: u,
                    bodySize: m
                  })
                })]
              }), g && g?.items?.length > 0 && (0, r.jsx)(Io, {
                children: g.items.map(e => (0, r.jsx)(ta, {
                  block: e,
                  backgroundColor: t
                }, e.text))
              }), b && (0, r.jsx)(c.RsgMdTextComponent, {
                markdown: b,
                bodySize: "XS"
              })]
            })
          },
          [Do]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, n.useContext)(c.BlockRendererContext);
            if (!e?.content) return null;
            const {
              image: a,
              content: o,
              variant: s
            } = e;
            return (0, r.jsxs)(zo, {
              variant: s ?? "image_right",
              children: [(0, r.jsx)(To, {
                altText: a?.altText ?? "",
                src: a?.source?.url ?? ""
              }), (0, r.jsx)(Mo, {
                children: (0, r.jsx)(c.BlockRenderer, {
                  block: o,
                  blockPosition: t
                })
              })]
            })
          },
          [Go]: ({
            block: e
          }) => {
            if (e) return (0, r.jsx)(r.Fragment, {
              children: e.videos?.referencesCollection?.items.map(e => {
                if ("Link" === e.type && e?.link?.url) {
                  const t = new URL(e?.link?.url),
                    a = "www.rockstargames.com" === t.hostname,
                    n = t.pathname.split("/");
                  if (a && "videos" === n[1]) {
                    const t = n[2];
                    return (0, r.jsx)(Po(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              })
            })
          },
          [Ds]: ({
            block: e
          }) => {
            const {
              data: t
            } = (0, s.useQuery)(Ms.MetaUrlInfo, {
              variables: {
                url: e?.tinaPageUrl ?? ""
              },
              setTitleDataPath: "metaUrlInfo.title"
            });
            if (!t || !e) return null;
            const a = (e => {
              if (!e) return null;
              const {
                content: t
              } = e.metaUrlInfo.tina.payload;
              if (!t) return null;
              let a = {
                _template: ""
              };
              return t.forEach(e => {
                if ("gen9.TinaWrapper" === e?._template) {
                  const t = e.content.find(e => "Engagement" === e?._template);
                  t && (a = t)
                }
              }), a
            })(t);
            return (0, r.jsx)(Ts, {
              fontTheme: "helvetica",
              usePadding: !1,
              giftId: a?.giftId || "",
              location: a?.location || "",
              jumpLinkId: a?.jumpLinkId || "",
              legalText: a?._memoq?.legalText || "",
              successScreen: {
                successContent: a?.successScreen?._memoq?.successContent || "",
                successHeadline: a?.successScreen?._memoq?.successHeadline || ""
              },
              errorScreen: {
                errorHeadline: a?.errorScreen?._memoq?.errorHeadline || "",
                errorButton: a?.errorScreen?._memoq?.errorButton || ""
              },
              unlinkedScreen: {
                unlinkedContent: a?.unlinkedScreen?._memoq?.unlinkedContent || "",
                unlinkedHeadline: a?.unlinkedScreen?._memoq?.unlinkedHeadline || "",
                unlinkedButtonText: a?.unlinkedScreen?._memoq?.unlinkedButtonText || ""
              },
              introScreen: {
                tag: a?.introScreen?._memoq?.tag || "",
                introHeadline: a?.introScreen?._memoq?.introHeadline || "",
                introContent: a?.introScreen?._memoq?.introContent || "",
                btnTextLoggedIn: a?.introScreen?._memoq?.btnTextLoggedIn || "",
                btnTextLoggedOut: a?.introScreen?._memoq?.btnTextLoggedOut || "",
                image: {
                  alt: a?.introScreen?.image?._memoq?.alt || "",
                  sources: a?.introScreen?.image?.sources
                }
              }
            })
          }
        },
        Ls = ({
          data: e
        }) => (0, r.jsx)(m, {
          children: (0, r.jsx)(c.PageRenderer, {
            data: e.items[0],
            customBlocks: Gs,
            children: (0, r.jsx)(Y, {})
          })
        }),
        Ws = ({
          slug: e
        }) => {
          let t = e;
          const {
            data: a,
            loading: n
          } = (0, c.useContentfulQuery)({
            query: d.wwwPageQuery,
            variables: {
              slug: t
            }
          });
          return !n && a && a.wwwPageCollection.items[0] ? (0, r.jsx)(Ls, {
            data: a.wwwPageCollection
          }) : null
        },
        qs = (Vs = ({
          slug: e
        }) => {
          const [{
            iso: t
          }] = (0, i.getLocale)(), a = (0, n.useMemo)(() => (0, s.createDeferredScrollTriggerRefresh)(), []);
          return (0, n.useEffect)(() => () => {
            a.cleanup()
          }, [a]), (0, r.jsx)(o.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            className: "_1dx15kv0",
            locale: t,
            onPlatformScaleChange: a.refresh,
            children: (0, r.jsx)(Ws, {
              slug: e
            })
          })
        }, (0, i.withIntl)(Vs, Z));
      var Vs
    },
    47279(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => i,
        C: () => o
      });
      var r = a(57202),
        n = a(50573);
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = s.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === a && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), i = s[o >= 0 ? o : 0], c = s.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, n.A)((0, r.A)({}, c, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    5328(e, t, a) {
      var r = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function n(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = o, e.exports = n, n.id = 5328
    },
    36672(e, t, a) {
      var r = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_latam_rp.svg": 6325,
        "./esrb_m.svg": 64875,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./tw_rp.png": 68271,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 10088,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 98847,
        "./vaci_rp.png": 32323
      };

      function n(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = o, e.exports = n, n.id = 36672
    },
    8194(e, t, a) {
      var r = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_latam_rp.svg": 6325,
        "./esrb_m.svg": 64875,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./tw_rp.png": 68271,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 10088,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 98847,
        "./vaci_rp.png": 32323
      };

      function n(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = o, e.exports = n, n.id = 8194
    },
    49733(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    62749(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    84941(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    39821(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    29886(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    65437(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    33492(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65115(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    23146(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    80304(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    22454(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    66426(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    59129(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    42659(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    36773(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    97558(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    6325(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7394670f18d3cf36ebc76e11b860fc03.svg"
    },
    64875(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    68918(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    68271(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/12bd0a3a5b71cd7d797c7e213829d218.png"
    },
    84406(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    10088(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    98847(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    14804(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    }
  }
]);