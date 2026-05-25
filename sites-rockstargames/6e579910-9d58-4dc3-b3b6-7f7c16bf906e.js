try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6e579910-9d58-4dc3-b3b6-7f7c16bf906e", e._sentryDebugIdIdentifier = "sentry-dbid-6e579910-9d58-4dc3-b3b6-7f7c16bf906e")
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
  [8146], {
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
        var s = r[t] || new Set,
          o = new Set,
          i = new Set;
        for (s.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var l = i;
          i = new Set, l.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return o.forEach(function(t) {
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
        var s = r[t] || new Set,
          o = new Set,
          i = new Set;
        for (s.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var l = i;
          i = new Set, l.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return o.forEach(function(t) {
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
        s = a(13331),
        o = a(30013),
        i = a(81270);
      const l = ({
          button: e,
          closeDialog: t,
          style: a = "primary"
        }) => {
          const {
            buttonIcon: n,
            buttonText: s,
            extraClasses: l,
            isDisabled: c,
            isLink: d,
            link: _,
            onClick: u,
            testId: m
          } = e;
          return d ? s && (0, r.jsx)(o.Button, {
            asChild: !0,
            appearance: a,
            size: "MD",
            children: (0, r.jsx)("a", {
              href: _,
              ...m && {
                "data-testid": m
              },
              children: s
            })
          }) : (0, r.jsx)(o.Button, {
            autoFocus: !0,
            iconRight: n,
            className: (0, i.default)(l),
            isDisabled: c,
            onPress: e => (e => {
              u && u(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: a,
            "aria-label": s,
            ...m && {
              "data-testid": m
            },
            children: s
          })
        },
        c = {
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
          buttons: o,
          showDialog: i,
          onClose: d = () => {},
          closeOnOutsideClick: _ = !0,
          extraClasses: u
        }) => {
          const m = (0, n.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, s.useBodyScrollable)("AlertDialog");
          (0, n.useEffect)(() => {
            i && m?.current && (m.current?.showModal?.(), g(!0))
          }, [i]);
          const f = () => {
            g(!1), d(), m.current?.close?.()
          };
          if (i) return (0, r.jsxs)("dialog", {
            ref: m,
            className: c.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && _ && (g(!1), d(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, r.jsx)("i", {
              className: [c.icon, c[e]].join(" ")
            }), (0, r.jsxs)("div", {
              className: [c.content, u?.content].join(" "),
              children: [(0, r.jsx)("h3", {
                className: [c.heading, u?.heading].join(" "),
                children: t
              }), a && (0, r.jsx)("div", {
                className: [c.message, u?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), o && (0, r.jsx)("div", {
              className: c.actions,
              children: o.slice(0, 2).map((e, t) => (0, r.jsx)(l, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: f
              }, e.buttonText))
            })]
          })
        }
    },
    72132(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r = a(39793),
        n = a(57821),
        s = a.n(n);
      const o = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        l = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? i : o, (0, r.jsx)(s(), {
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
        YT: () => o,
        Ay: () => i
      });
      var r = a(39793),
        n = a(23743);
      var s = a(81270);
      var o = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const i = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: o,
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
            className: (0, s.default)("rockstargames-sites-rockstargamesb0ff0045ed0326a46ca1e0867d2050c1", a),
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": e,
            src: o,
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
        A: () => f
      });
      var r = a(39793),
        n = a(93082),
        s = a(42909),
        o = a(13331),
        i = a(42285),
        l = a(82199),
        c = a(38044),
        d = a(59426);
      const _ = {
          rating: "rockstargames-sites-rockstargamesc3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-rockstargamesbabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-rockstargamesb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-rockstargamesb6339480b5fd086fb0c025930bfb7dcd"
        },
        u = (0, s.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var m = a(70386),
        g = a(30433);
      (0, o.importAll)(a(36672));
      const f = (0, d.A)((0, g.g)(({
        descriptors: e = null,
        footer: t = null,
        href: d,
        img: g = null,
        titleSlug: f = null,
        style: b = {},
        className: p,
        ...h
      }) => {
        const [k, v] = (0, n.useState)(!1), {
          inView: x
        } = (0, i.useInView)({
          threshold: .6
        }), [w, y] = (0, n.useState)({
          ratingDescriptors: e,
          ratingFooter: t,
          ratingImg: g,
          ratingUrl: d
        }), {
          track: j
        } = (0, l.useGtmTrack)(), C = (0, s.useIntl)(), {
          data: R
        } = (0, o.useQuery)(m.GameData, {
          variables: {
            titleSlug: f
          },
          skip: !f
        });
        if ((0, n.useEffect)(() => {
            R && y(R?.game)
          }, [R]), (0, n.useEffect)(() => {
            x && !k && w.ratingImg && (j({
              event: "page_section_impression",
              element_placement: "rating"
            }), v(!0))
          }, [x]), !w.ratingImg) return null;
        const S = !!w.ratingDescriptors;
        return (0, r.jsxs)("div", {
          className: [_.rating, S ? _.withDescriptors : _.withOutDescriptors, p || ""].join(" "),
          style: (0, o.safeStyles)(b),
          "data-testid": "rating",
          ...h,
          children: [(0, r.jsx)(c.A, {
            to: w.ratingUrl,
            target: "_blank",
            children: (0, r.jsx)("img", {
              alt: C.formatMessage(u.components_ratings_link_alt, {
                rating: (N = w.ratingImg, N.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${w.ratingImg}`)
            })
          }), S && (0, r.jsxs)("div", {
            className: _.text,
            children: [(0, r.jsx)("p", {
              className: _.descriptors,
              dangerouslySetInnerHTML: {
                __html: w?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), w.ratingFooter && (0, r.jsx)("hr", {}), w.ratingFooter && (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: w.ratingFooter.replace(/ \//g, ", ")
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
        L: () => l
      });
      var r = a(39793),
        n = a(93082),
        s = a(35959);
      var o = a(81270);
      const i = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        l = (0, n.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: n,
          testId: l,
          ...c
        }, d) {
          const _ = i(e),
            u = (0, s.v6)(c, {
              className: (0, o.default)("rockstargames-sites-rockstargamesf54750ef62f8600000c94f0caba85986", a),
              "data-testid": l
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
        A: () => o
      });
      var r = a(39793),
        n = a(93082);
      class s extends n.Component {
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
      const o = (e, t = null, a = !1) => {
        const n = n => (0, r.jsx)(s, {
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
        RSG_CTA_FRAGMENT: () => s,
        RSG_GAME_FRAGMENT: () => o,
        RSG_ICON_FRAGMENT: () => i,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => c,
        RSG_VIDEO_FILE_FRAGMENT: () => P,
        RSG_VIDEO_FRAGMENT: () => L,
        SYS_FRAGMENT: () => d,
        WWW_BANNER_FRAGMENT: () => _,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => m,
        WWW_DIVIDER_FRAGMENT: () => g,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => f,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => b,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => p,
        WWW_GRID_FRAGMENT: () => h,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => k,
        WWW_GRID_WRAPPER_FRAGMENT: () => v,
        WWW_IMAGE_BLOCK_FRAGMENT: () => x,
        WWW_IMAGE_CARD_FRAGMENT: () => w,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => y,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => j,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => R,
        WWW_MASONRY_GRID_FRAGMENT: () => S,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => N,
        WWW_PROMO_MODULE_FRAGMENT: () => I,
        WWW_REACT_COMPONENT_FRAGMENT: () => E,
        WWW_SECTION_WRAPPER_FRAGMENT: () => z,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => T,
        WWW_TEXT_BLOCK_FRAGMENT: () => M,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => D,
        WWW_THEME_PROVIDER_FRAGMENT: () => F,
        WWW_VIDEO_PLAYER_FRAGMENT: () => G,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => A,
        wwwBottomSheetQuery: () => B,
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
        s = r.gql`
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
        o = r.gql`
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
        l = r.gql`
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
        c = r.gql`
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
        f = r.gql`
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
        b = r.gql`
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
        k = r.gql`
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
        v = r.gql`
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
        x = r.gql`
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
        w = r.gql`
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
        y = r.gql`
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
        j = r.gql`
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
        E = r.gql`
fragment WwwReactComponentFragment on WwwReactComponent {
  __typename
  sys {
    ...SysFragment
  }
  componentName
  componentProps
}
`,
        A = r.gql`
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
        L = r.gql`
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
        G = r.gql`
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
  ${s}
  ${i}
  ${l}
  ${c}
  ${P}
  ${L}
  ${d}
  ${_}
  ${u}
  ${m}
  ${g}
  ${f}
  ${b}
  ${p}
  ${h}
  ${k}
  ${v}
  ${x}
  ${w}
  ${y}
  ${j}
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
  ${A}
`,
        B = r.gql`
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
  ${l}
  ${P}
  ${L}
  ${d}
  ${G}
`
    },
    28927(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: () => Po
      });
      var r = a(39793),
        n = a(59442),
        s = a(93082),
        o = a(13331),
        i = a(42909),
        l = a(72701),
        c = a(30013),
        d = a(37840),
        _ = a(36416);
      const u = (0, s.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        m = ({
          children: e
        }) => {
          const [t, a] = (0, _.useSearchParams)(), [n, o] = (0, s.useState)(""), [i, l] = (0, s.useState)(!1), c = () => {
            const e = !i;
            l(e), e || (o(""), a(e => (e.delete("view"), e), {
              replace: !0
            }))
          };
          (0, s.useEffect)(() => {
            const e = t.get("view");
            e ? (o(e), l(!0)) : (o(""), l(!1))
          }, [t]);
          const d = (0, s.useMemo)(() => ({
            open: i,
            onOpenChange: c,
            slug: n
          }), [i, n]);
          return (0, r.jsx)(u.Provider, {
            value: d,
            children: e
          })
        };
      var g = a(23743);
      const f = (0, i.defineMessages)({
        bottom_sheet_modal_close_icon: {
          id: "bottom_sheet_modal_close_icon",
          description: "Label for X icon to close modal in Bottom Sheet",
          defaultMessage: "Close"
        }
      });
      var b = a(82199),
        p = a(42285),
        h = a(20766);
      const k = (0, s.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        }),
        v = ({
          theme: e,
          children: t
        }) => e ? (0, r.jsx)(k.Provider, {
          value: {
            ...e
          },
          children: t
        }) : t;
      var x = a(35959);
      const w = (0, s.forwardRef)(function({
        href: e,
        testId: t,
        ...a
      }, n) {
        const s = (0, i.linkWithLocale)(e || ""),
          o = (0, x.v6)(a, {
            "data-testid": t
          });
        return s.isExternal ? (0, r.jsx)("a", {
          href: s.link,
          target: "_blank",
          rel: "noreferrer",
          ...o,
          ref: n
        }) : (0, r.jsx)(_.Link, {
          to: s.link,
          target: "_self",
          ...o,
          ref: n
        })
      });
      var y = a(81684),
        j = a(9276),
        C = a(87704),
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
        const n = (0, x.v6)(a, {
            className: R({
              showOn: e
            })
          }),
          o = (0, s.useMemo)(() => t ? void 0 : window?.matchMedia?.(j.f[e]), [e, window]);
        return (o?.matches ?? !0) && (0, r.jsx)(g.DX, {
          ...n
        })
      };
      a(98166);
      var N = "var(--rd0xso2)",
        I = "var(--rd0xso1)",
        E = "rd0xso6",
        A = "var(--rd0xso0)";
      const z = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          topPaddingMultiplier: n,
          bottomPaddingMultiplier: s,
          backgroundCss: o,
          backgroundImage: i,
          ...l
        }, c) {
          const d = t ? g.DX : "section",
            _ = (0, x.v6)({
              "data-testid": a,
              className: "rd0xso3",
              style: (0, y.DI)({
                [A]: n ?? "0.5",
                [I]: s ?? "0.5",
                [N]: o,
                backgroundImage: i ? `url(${i})` : ""
              })
            }, l);
          return (0, r.jsx)(d, {
            ref: c,
            ..._,
            children: e
          })
        }),
        T = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          if (!e) return;
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "rd0xso4 _1betujy5"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        M = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : c.Heading,
            i = (0, x.v6)({
              "data-testid": a,
              className: "rd0xso5 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        D = (0, s.forwardRef)(function({
          testId: e,
          children: t,
          label: a,
          url: n,
          iconRight: s = "ArrowRight",
          isExternal: o = !1,
          ...i
        }, l) {
          const d = (0, x.v6)({
            "data-testid": e
          }, i);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(S, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: s,
                className: E,
                label: a,
                ...d,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(w, {
                  href: n,
                  target: o ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(S, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, r.jsx)(c.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: s,
                className: E,
                label: a,
                ...d,
                ref: l,
                asChild: !0,
                children: (0, r.jsx)(w, {
                  href: n,
                  target: o ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, r.jsx)(S, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, r.jsx)(c.Button, {
                size: "LG",
                appearance: "ghost",
                iconRight: s,
                className: "rd0xso7",
                "aria-label": a,
                ...d,
                ref: l,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, r.jsx)(w, {
                  href: n,
                  target: o ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        F = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "rd0xso8"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        P = {
          none: 0,
          default: .5,
          double: 1
        },
        L = (0, s.createContext)({
          analyticsData: void 0
        }),
        G = "WwwSectionWrapper",
        W = () => {
          const {
            analyticsData: e
          } = (0, s.useContext)(L), {
            track: t
          } = (0, b.useGtmTrack)(), a = e?.element_placement;
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
              const r = (0, s.useCallback)(r => {
                  r && t({
                    event: "page_section_impression",
                    element_placement: a,
                    ...e
                  })
                }, [t]),
                {
                  ref: n,
                  inView: o
                } = (0, p.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: r
                });
              return {
                ref: n,
                inView: o
              }
            }
          }
        };
      var B = a(88819);
      const q = ({
          testId: e,
          ...t
        }) => {
          const a = (0, x.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, r.jsx)(B.bL, {
            ...a
          })
        },
        O = ({
          testId: e,
          ...t
        }) => {
          const a = (0, x.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.ZL, {
            ...a
          })
        },
        V = (0, s.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, x.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, r.jsx)(B.hJ, {
            ref: a,
            ...n
          })
        }),
        $ = (0, s.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const s = (0, x.v6)(a, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, r.jsx)(B.UC, {
            ref: n,
            ...s,
            children: t
          })
        }),
        U = (0, s.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const s = (0, x.v6)(a, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: t
          })
        }),
        X = (0, s.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, x.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, r.jsx)(B.bm, {
            ref: a,
            ...n
          })
        }),
        H = (0, s.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, x.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.hE, {
            ref: a,
            ...n
          })
        }),
        K = (0, s.forwardRef)(function({
          testId: e,
          ...t
        }, a) {
          const n = (0, x.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(B.VY, {
            ref: a,
            ...n
          })
        }),
        Y = () => {
          const {
            trackEvent: e
          } = W(), {
            formatMessage: t
          } = (0, i.useIntl)(), [a, n] = (0, s.useState)(!1), {
            slug: _,
            open: m,
            onOpenChange: b
          } = (() => {
            const e = (0, s.useContext)(u);
            if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
            return {
              open: e.open,
              slug: e.slug,
              onOpenChange: e.onOpenChange
            }
          })(), p = (0, o.usePrevious)(_), [h, k] = (0, s.useState)(null), {
            loading: v,
            error: x,
            data: w
          } = (0, l.useContentfulQuery)({
            query: d.wwwBottomSheetQuery,
            variables: {
              slug: _
            },
            skip: !_
          });
          if ((0, s.useEffect)(() => {
              a !== m && (n(m), k(document.activeElement), m ? e({
                event: "modal_open",
                card_id: _,
                card_name: _,
                text: _
              }) : (e({
                event: "modal_close",
                card_id: p,
                card_name: p,
                text: p
              }), h?.focus(), k(null)))
            }, [m, a]), !_) return;
          let y = null;
          return !w || v || x || (y = w?.wwwBottomSheetCollection?.items?.[0]), (0, r.jsx)(q, {
            open: m,
            onOpenChange: b,
            children: (0, r.jsxs)(O, {
              children: [(0, r.jsx)(V, {}), (0, r.jsxs)($, {
                children: [(0, r.jsxs)(g.s6, {
                  children: [(0, r.jsx)(H, {}), (0, r.jsx)(K, {})]
                }), (0, r.jsx)(X, {
                  children: (0, r.jsx)(c.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(f.bottom_sheet_modal_close_icon)
                  })
                }), (0, r.jsx)(U, {
                  children: y && (0, r.jsx)(J, {
                    block: y.contentCollection
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
          } = (0, s.useContext)(l.BlockRendererContext);
          if (e) return e.items.map(e => (0, r.jsx)(l.BlockRenderer, {
            block: e,
            blockPosition: t
          }, e.sys.id))
        },
        Q = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"差事 {name} 的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}');
      var Z = a(57978);
      const ee = e => e.endsWith(".svg") || e.endsWith(".gif"),
        te = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        ae = (e, t = te, a = {}) => {
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
        re = e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary",
        ne = {
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
      var se = a(53374),
        oe = "var(--_1dbiq9u0)";
      const ie = [{
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
        le = (0, s.forwardRef)(function({
          src: e,
          width: t,
          height: a,
          testId: n,
          style: o,
          aspectRatio: i,
          ...l
        }, c) {
          const [d, _] = (0, s.useState)(!1), u = (0, s.useRef)(null), m = (0, se.UP)(u, c);
          (0, s.useEffect)(() => {
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
          const g = (0, s.useMemo)(() => {
            const r = !e || !ee(e),
              s = r ? (e => {
                if (!Array.isArray(e) || 0 === e.length) return "100vw";
                const t = e.filter(e => e?.slot).map(e => e.media ? `${e.media} ${e.slot}` : e.slot);
                return [...t.filter(e => e.includes("max-width")), t.find(e => !e.includes("max-width")) ?? "100vw"].join(", ")
              })(ie) : void 0,
              c = i ?? `${t||1} / ${a||1}`,
              _ = (0, y.DI)({
                [oe]: c
              });
            return (0, x.v6)({
              "data-testid": n,
              srcSet: d && r ? ae(e)?.map(e => `${e.url} ${e.width}w`).join(", ") : void 0,
              src: e,
              sizes: d && r ? s : void 0,
              className: "_1dbiq9u1",
              loading: "lazy",
              decoding: "async",
              width: t,
              height: a,
              style: {
                ..._,
                ...o
              }
            }, l)
          }, [n, e, l, d]);
          return d ? (0, r.jsx)("img", {
            ref: m,
            ...g
          }) : (0, r.jsx)("div", {
            ref: m
          })
        }),
        ce = (0, s.forwardRef)(function({
          src: e,
          className: t,
          loading: a = "lazy",
          testId: n,
          ...s
        }, o) {
          if (!e.source?.url || !e.source?.height || !e.source?.width) return null;
          const i = (0, l.getOptimizedImage)({
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
          const c = (0, x.v6)({
            "data-testid": n,
            alt: i.alt,
            src: i.url,
            width: i.width,
            height: i.height,
            loading: a,
            className: t
          }, s);
          return (0, r.jsx)(le, {
            ref: o,
            ...c
          })
        }),
        de = "RsgImageFile",
        _e = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)(a, {
            "data-testid": t
          });
          return (0, r.jsx)("picture", {
            ...s,
            ref: n,
            children: e
          })
        }),
        ue = ({
          testId: e,
          src: t,
          ...a
        }) => {
          const n = (0, x.v6)(a, {
            "data-testid": e,
            srcSet: ee(t) ? t : ae(t)?.map(e => `${e.url} ${e.width}w`).join(", ")
          });
          return (0, r.jsx)("source", {
            ...n
          })
        },
        me = (0, s.forwardRef)(function({
          testId: e,
          src: t,
          ...a
        }, n) {
          const o = (0, x.v6)(a, {
              "data-testid": e
            }),
            i = (0, s.useRef)(null),
            l = (0, se.UP)(i, n);
          return (0, s.useEffect)(() => {
            i?.current && (ee(t) ? i.current.src = t : i.current.srcset = ae(t)?.map(e => `${e.url} ${e.width}w`).join(", "))
          }, []), (0, r.jsx)("img", {
            className: "_1fbh3900",
            ref: l,
            ...o
          })
        }),
        ge = new Map([
          ["mobile", j.f.mobile],
          ["mobile_small", j.f.mobileSmall],
          ["mobile_medium", j.f.mobileMedium],
          ["tablet_small", j.f.tabletSmall],
          ["tablet_medium", j.f.tabletMedium],
          ["tablet_small_and_medium", j.f.tabletSmallAndMedium],
          ["tablet_large", j.f.tabletLarge],
          ["tablet_medium_and_large", j.f.tabletMediumAndLarge],
          ["tablet", j.f.tablet],
          ["desktop", j.f.desktop],
          ["desktop_small", j.f.desktopSmall],
          ["desktop_medium", j.f.desktopMedium],
          ["tablet_and_desktop", j.f.tabletAndDesktop],
          ["mobile_medium_and_larger", j.f.mobileMediumAndLarger],
          ["tablet_small_and_larger", j.f.tabletSmallAndLarger],
          ["tablet_medium_and_larger", j.f.tabletMediumAndLarger],
          ["tablet_medium_and_smaller", j.f.tabletMediumAndSmaller],
          ["tablet_large_and_larger", j.f.tabletLargeAndLarger],
          ["tablet_large_and_smaller", j.f.tabletLargeAndSmaller],
          ["desktop_small_and_larger", j.f.desktopSmallAndLarger],
          ["desktop_medium_and_larger", j.f.desktopMediumAndLarger],
          ["desktop_large_and_larger", j.f.desktopLargeAndLarger],
          ["portrait", j.f.portrait],
          ["landscape", j.f.landscape],
          ["mobile_landscape", j.f.mobileLandscape]
        ]),
        fe = e => {
          for (const [t] of ge) {
            const a = e?.find(e => e === t);
            if (a) return a
          }
        },
        be = "RsgImage";
      var pe = "var(--dhgwc10)";
      const he = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "dhgwc11 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        ke = (0, s.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: a,
          asChild: n,
          altText: s,
          ...o
        }, i) {
          const l = n ? g.DX : "a",
            c = (0, x.v6)({
              "data-testid": a,
              className: "dhgwc12",
              "aria-label": s,
              style: (0, y.DI)({
                [pe]: e
              })
            }, o);
          return (0, r.jsx)(l, {
            ref: i,
            ...c,
            children: t
          })
        }),
        ve = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          src: n,
          ...s
        }, o) {
          const i = a ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": t,
              className: "dhgwc13",
              style: {
                backgroundImage: `url(${n})`
              }
            }, s);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            children: e
          })
        }),
        xe = (0, s.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const n = (0, x.v6)({
            src: e,
            className: "dhgwc14"
          }, t);
          return (0, r.jsx)(ce, {
            ref: a,
            ...n
          })
        }),
        we = "WwwBanner";
      var ye = a(64634),
        je = a(64010),
        Ce = a(54389),
        Re = a.n(Ce);
      const Se = (0, i.defineMessages)({
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
      var Ne = (0, C.c)({
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
        Ie = "_1betujy6 _1betujy5",
        Ee = (0, C.c)({
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
      const Ae = (0, s.createContext)({
          defaultSlide: 0,
          embla: void 0,
          controlsVisible: !1,
          prevButtonDisabled: !1,
          nextButtonDisabled: !1,
          onPrevButtonClick: null,
          onNextButtonClick: null,
          navigationRef: (0, s.createRef)(),
          viewportRef: void 0
        }),
        ze = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          defaultSlide: n = 0,
          onNext: o,
          onPrev: i,
          onSwipe: l,
          ...c
        }, d) {
          const {
            navigationRef: _
          } = (0, s.useContext)(Ae), {
            embla: u,
            viewportRef: m,
            controlsVisible: f,
            prevButtonDisabled: b,
            nextButtonDisabled: p,
            onPrevButtonClick: h,
            onNextButtonClick: k
          } = (({
            defaultSlide: e,
            onNext: t,
            onPrev: a,
            onSwipe: r
          }) => {
            const [n, o] = (0, s.useState)(!0), [i, l] = (0, s.useState)(!0), [c, d] = (0, s.useState)(!1), _ = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [u, m] = (0, ye.A)(_, [(0, je.J)()]), g = (0, s.useCallback)(() => {
              m && (m.scrollPrev(), a?.())
            }, [m]), f = (0, s.useCallback)(() => {
              m && (m.scrollNext(), t?.())
            }, [m]), b = (0, s.useCallback)(() => {
              m && (o(!m.canScrollPrev()), l(!m.canScrollNext()))
            }, [m]), p = () => {
              if (!m) return;
              const e = m.internalEngine().scrollSnaps.length > 1;
              d(e), m.reInit({
                active: e
              })
            };
            return (0, s.useEffect)(() => {
              if (!m) return;
              b(), m.on("reInit", b).on("select", b);
              const e = Re()(p, 25);
              return window.addEventListener("resize", e), p(), () => {
                window.removeEventListener("resize", e)
              }
            }, [m, b]), (0, s.useEffect)(() => {
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
            }, [m]), (0, s.useEffect)(() => {
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
              controlsVisible: c,
              prevButtonDisabled: n,
              nextButtonDisabled: i,
              onPrevButtonClick: g,
              onNextButtonClick: f,
              viewportRef: u
            }
          })({
            defaultSlide: n,
            onNext: o,
            onPrev: i,
            onSwipe: l
          }), v = a ? g.DX : "div", w = (0, x.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, c);
          return (0, r.jsx)(Ae.Provider, {
            value: {
              embla: u,
              defaultSlide: n,
              navigationRef: _,
              controlsVisible: f,
              prevButtonDisabled: b,
              nextButtonDisabled: p,
              onPrevButtonClick: h,
              onNextButtonClick: k,
              viewportRef: m
            },
            children: (0, r.jsx)(v, {
              ref: d,
              ...w,
              children: (0, r.jsx)(g.xV, {
                children: e
              })
            })
          })
        }),
        Te = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)(n, {
              "data-testid": t,
              className: Ie
            });
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Me = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)(a, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, r.jsx)(c.Heading, {
            ref: n,
            ...s,
            children: e
          })
        }),
        De = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const {
            viewportRef: o
          } = (0, s.useContext)(Ae), i = (0, x.v6)({
            "data-testid": t,
            className: Ie
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: (0, r.jsx)("div", {
              ref: o,
              className: "lwwe802",
              children: (0, r.jsx)("div", {
                className: "lwwe803",
                children: e
              })
            })
          })
        }),
        Fe = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const s = t ? g.DX : "div",
            o = (0, x.v6)({
              className: "lwwe807",
              tabIndex: -1
            }, a);
          return (0, r.jsx)(s, {
            ref: n,
            ...o,
            children: (0, r.jsx)("div", {
              className: "lwwe804",
              children: e
            })
          })
        }),
        Pe = (0, s.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: a,
          ...n
        }, s) {
          const o = (0, x.v6)({
            "data-testid": a,
            className: Ne({
              variant: t
            })
          }, n);
          return (0, r.jsx)("div", {
            ref: s,
            ...o,
            children: e
          })
        }),
        Le = (0, s.forwardRef)(function({
          override_textColor: e,
          override_backgroundColor: t,
          appearance: a,
          size: n,
          testId: o,
          asChild: l,
          ...d
        }, _) {
          const {
            controlsVisible: u,
            onPrevButtonClick: m,
            onNextButtonClick: f,
            prevButtonDisabled: b,
            nextButtonDisabled: p
          } = (0, s.useContext)(Ae), {
            formatMessage: h
          } = (0, i.useIntl)(), k = l ? g.DX : "div", v = (0, x.v6)({
            className: Ee({
              visible: u
            }),
            "data-testid": o
          }, d);
          return (0, r.jsxs)(k, {
            ref: _,
            ...v,
            children: [(0, r.jsx)(c.IconButton, {
              size: n,
              icon: "ArrowLeft",
              appearance: a,
              onClick: m,
              label: h(Se.carousel_prev_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: b
            }), (0, r.jsx)(c.IconButton, {
              size: n,
              icon: "ArrowRight",
              appearance: a,
              onClick: f,
              label: h(Se.carousel_next_button),
              override_backgroundColor: t,
              override_textColor: e,
              isDisabled: p
            })]
          })
        }),
        Ge = (0, s.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        We = "WwwDeck",
        Be = (0, i.defineMessages)({
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
      var qe = "_197irmi6",
        Oe = (0, C.c)({
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
      const $e = () => {
          const e = (0, s.useContext)(Ue);
          if (!e) throw new Error("useDecorativeVideoContext must be used within VideoProvider");
          return e
        },
        Ue = (0, s.createContext)({
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
        Xe = (0, s.forwardRef)(function({
          landscapeViewportBehavior: e,
          scrimColor: t,
          reducedMotion: a,
          playOnce: n,
          children: o,
          asChild: i,
          ...l
        }, c) {
          const [d, _] = (0, s.useState)(!a), [u, m] = (0, s.useState)(!1), [f, b] = (0, s.useState)(!1), p = (0, s.useRef)(null), h = (0, s.useRef)(!1), k = (0, s.useRef)(null), v = (0, x.v6)({
            className: Oe({
              landscapeViewportBehavior: e
            })
          }, l), w = i ? g.DX : "div";
          return (0, r.jsx)(Ue.Provider, {
            value: {
              landscapeViewportBehavior: e,
              scrimColor: t,
              videoRef: p,
              lastPlayingRef: h,
              bgImageRef: k,
              isPlaying: d,
              playOnce: n,
              hasEnded: u,
              setHasEnded: m,
              reducedMotion: a,
              setIsPlaying: _,
              error: f,
              setError: b
            },
            children: (0, r.jsx)(w, {
              ref: c,
              ...v,
              children: o
            })
          })
        }),
        He = (0, s.forwardRef)(function({
          onToggle: e,
          ...t
        }, a) {
          const {
            formatMessage: n
          } = (0, i.useIntl)(), {
            isPlaying: o,
            setIsPlaying: l,
            videoRef: d,
            lastPlayingRef: _,
            error: u,
            playOnce: m,
            hasEnded: g,
            setHasEnded: f,
            setError: b,
            reducedMotion: p
          } = $e(), [h, k] = (0, s.useState)("Pause"), v = (!m || !g) && _.current;
          (0, s.useEffect)(() => {
            k(o || v ? "Pause" : m && g ? "Replay" : "Play")
          }, [v, o, m, g]);
          const w = (0, s.useMemo)(() => n(m && g ? Be.decorative_video_replay_button_label : v ? Be.decorative_video_pause_button_label : Be.decorative_video_play_button_label), [m, g]),
            y = (0, x.v6)({
              className: "_197irmi5",
              label: w,
              "aria-label": n(Be.decorative_video_play_button_label),
              "aria-pressed": o
            }, t);
          return p || u ? null : (0, r.jsx)(c.IconButton, {
            ref: a,
            ...y,
            icon: h,
            size: "SM",
            onPress: async () => {
              e?.(!o);
              const t = d.current;
              if (t)
                if (m && g) try {
                    f(!1), t.currentTime = 0, await t.play(), l(!0), _.current = !0
                  } catch {
                    b(!0), l(!1), _.current = !1
                  } else if (o || v) t?.pause(), l(!1), _.current = !1;
                  else try {
                    await (t?.play()), l(!0), _.current = !0
                  } catch {
                    b(!0), l(!1), _.current = !1
                  }
            }
          })
        }),
        Ke = (0, s.forwardRef)(function({
          src: e,
          poster: t,
          altText: a,
          autoPlay: n,
          muted: o,
          asChild: i,
          testId: l,
          ...c
        }, d) {
          const {
            videoRef: _,
            reducedMotion: u,
            lastPlayingRef: m,
            playOnce: f,
            setIsPlaying: b,
            error: p,
            setError: h,
            setHasEnded: k
          } = $e(), v = i ? g.DX : "div", w = (0, x.v6)({
            "data-testid": l
          }, c);
          return (0, s.useEffect)(() => {
            const t = _.current;
            if (!t || !e || u) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                b(!0), k(!1), m.current = !0
              },
              n = () => {
                t.paused || (b(!1), m.current = !1)
              },
              s = () => {
                console.warn("Play request interrupted :", t.error), h(!0), b(!1), m.current = !1
              },
              o = () => {
                b(!1), m.current = !1, k(!0)
              },
              i = () => {
                console.warn("Video failed to load sources."), h(!0), b(!1), m.current = !1
              };
            return t.addEventListener("play", r), t.addEventListener("pause", n), t.addEventListener("error", s), t.addEventListener("ended", o), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("pause", n), t.removeEventListener("error", s), t.removeEventListener("ended", o), a && a.removeEventListener("error", i)
            }
          }, [_, e, u, b, h, k, m.current]), (() => {
            const {
              videoRef: e,
              lastPlayingRef: t,
              setIsPlaying: a,
              playOnce: r,
              hasEnded: n
            } = $e();
            (0, s.useEffect)(() => {
              const s = async () => {
                const s = e.current;
                if (s)
                  if (document.hidden) t.current = !s.paused && !n, s.paused || (s.pause(), a(!1));
                  else if (t.current && !n && s.paused && s.muted && (!r || !n)) try {
                  await s.play(), a(!0), t.current = !0
                } catch {
                  a(!1), t.current = !1
                }
              };
              return document.addEventListener("visibilitychange", s), () => document.removeEventListener("visibilitychange", s)
            }, [e, a, r, n, t])
          })(), ((e = 0) => {
            const {
              videoRef: t,
              lastPlayingRef: a,
              setIsPlaying: r,
              playOnce: n,
              hasEnded: o
            } = $e();
            (0, s.useEffect)(() => {
              const s = t.current;
              if (!s) return;
              const i = new IntersectionObserver(async e => {
                if (e[0].isIntersecting) {
                  if (a.current && !o && s.paused && s.muted && (!n || !o)) try {
                    await s.play(), r(!0), a.current = !0
                  } catch {
                    r(!1), a.current = !1
                  }
                } else a.current = !s.paused && !o, s.paused || (s.pause(), r(!1))
              }, {
                threshold: e
              });
              return i.observe(s), () => i.disconnect()
            }, [t, r, e, n, o, a])
          })(0), (0, r.jsx)(v, {
            ref: d,
            ...w,
            children: p || u || !e ? (0, r.jsx)("img", {
              "data-testid": "decorative-video-fallback",
              alt: a,
              src: t,
              className: qe
            }) : (0, r.jsx)("video", {
              ref: _,
              className: qe,
              src: e,
              poster: t,
              autoPlay: n,
              muted: o,
              loop: !f,
              playsInline: !0,
              onError: () => h(!0),
              "aria-hidden": "true",
              tabIndex: -1
            })
          })
        }),
        Ye = (0, s.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            scrimColor: n
          } = $e(), s = (0, x.v6)({
            className: "_197irmi4",
            style: (0, y.DI)({
              [Ve]: n ?? "unset"
            })
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...s,
            children: e
          })
        }),
        Je = "WwwDecorativeVideo";
      var Qe = (0, C.c)({
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
      const Ze = (0, s.forwardRef)(function({
          gradientStyle: e = "",
          thickness: t = "dimensions_25",
          ...a
        }, n) {
          return (0, r.jsx)("div", {
            className: Qe({
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
        et = "WwwDivider";
      var tt = a(11215);
      const at = o.gql`
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
        rt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          layout: a = "primary",
          aspect: n = "wide",
          transparent: s = !1,
          asChild: o,
          ...i
        }, l) {
          const c = o ? g.DX : "div",
            d = (0, x.v6)({
              className: "sp6aw70",
              "data-layout": a,
              "data-aspect": n,
              "data-transparent": !!s || void 0,
              "data-testid": t
            }, i);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        nt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: (0, r.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        }),
        st = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        ot = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : c.Text,
            i = (0, x.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        it = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : c.Heading,
            i = (0, x.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            level: 4,
            ref: s,
            ...i,
            children: e
          })
        }),
        lt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "time",
            i = (0, x.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        ct = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        dt = ({
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
        _t = ({
          width: e = "100%"
        }) => (0, r.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var ut = "_17xncyz0";
      const mt = ({
          layout: e,
          aspect: t,
          transparent: a,
          testId: n
        }) => (0, r.jsxs)(rt, {
          className: ut,
          layout: e,
          aspect: t,
          transparent: a,
          testId: n,
          children: [(0, r.jsx)(nt, {
            children: (0, r.jsx)(dt, {
              width: "100%"
            })
          }), (0, r.jsxs)(st, {
            children: [(0, r.jsx)(ot, {
              children: (0, r.jsx)(_t, {
                width: "30%"
              })
            }), (0, r.jsxs)(it, {
              children: [(0, r.jsx)(_t, {}), (0, r.jsx)(_t, {})]
            }), (0, r.jsx)(lt, {
              children: (0, r.jsx)(_t, {
                width: "40%"
              })
            })]
          })]
        }),
        gt = ({
          loading: e,
          data: t,
          id: a,
          aspect: n,
          layout: s,
          transparent: o,
          handleStoryClick: i,
          testId: l
        }) => {
          const c = t?.preview_images_parsed.newswire_block["square" === n ? "square" : "d16x9"],
            d = `${c}?im=Resize,width=${"primary"===s?1200:600}`;
          return e || !t ? (0, r.jsx)(mt, {
            layout: s,
            aspect: n,
            testId: l
          }) : (0, r.jsx)(w, {
            className: "_17xncyz1",
            href: t.url,
            onClick: i,
            children: (0, r.jsxs)(rt, {
              className: ut,
              layout: s,
              aspect: n,
              transparent: o,
              testId: l,
              children: [(0, r.jsx)(nt, {
                children: (0, r.jsx)("img", {
                  src: d,
                  loading: "lazy"
                })
              }), (0, r.jsxs)(st, {
                children: [(0, r.jsxs)(ct, {
                  children: [(0, r.jsx)(ot, {
                    children: t.primary_tags[0].name
                  }), (0, r.jsx)(it, {
                    children: t.title
                  })]
                }), (0, r.jsx)(lt, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        },
        ft = o.gql`
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
        bt = "WwwEditorialPost",
        pt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        ht = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = (0, se.Ub)(j.f.tabletMediumAndLarger),
            i = a ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(i, {
            ref: s,
            ...l,
            className: o ? "_1hb4ou60 _1betujy6 _1betujy5" : "",
            children: e
          })
        }),
        kt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          onCarouselSwipe: n,
          ...o
        }, i) {
          const {
            viewportRef: l
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
              [r, n] = (0, ye.A)(a, [(0, je.J)()]);
            return (0, s.useEffect)(() => {
              if (!n) return;
              let e = 0;
              const a = () => {
                  e = n.selectedScrollSnap()
                },
                r = () => {
                  const a = n.selectedScrollSnap();
                  e !== a && t?.()
                };
              return n.on("pointerDown", a), n.on("pointerUp", r), () => {
                n.off("pointerDown", a), n.off("pointerUp", r)
              }
            }, [n]), {
              embla: n,
              viewportRef: r
            }
          })({
            defaultSlide: 0,
            onCarouselSwipe: n
          }), c = a ? g.DX : "div", d = (0, x.v6)({
            "data-testid": t,
            className: "_1hb4ou65"
          }, o);
          return (0, r.jsx)(c, {
            className: "_1hb4ou63",
            ref: i,
            children: (0, r.jsx)(ze, {
              ref: l,
              ...d,
              children: (0, r.jsx)(De, {
                children: e
              })
            })
          })
        }),
        vt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(Pe, {
            ref: n,
            ...s,
            children: e
          })
        }),
        xt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = (0, x.v6)({
              "data-testid": t,
              className: "_1hb4ou62"
            }, n),
            i = a ? g.DX : "div";
          return (0, r.jsx)(i, {
            ref: s,
            ...o,
            children: e
          })
        }),
        wt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = (0, x.v6)({
              "data-testid": t,
              className: "_1hb4ou64"
            }, n),
            i = a ? g.DX : "div";
          return (0, r.jsx)(i, {
            ref: s,
            ...o,
            children: e
          })
        }),
        yt = "WwwEditorialGridModule",
        jt = (0, i.defineMessages)({
          featured_game_breadcrumbs_parent_item: {
            id: "featured_game_breadcrumbs_parent_item",
            description: "Breadcrumbs parent page item label",
            defaultMessage: "Games"
          }
        });
      var Ct = a(81270),
        Rt = a(93529),
        St = a(99206);
      Rt.os.registerPlugin(Z.u);
      const Nt = (0, s.forwardRef)(function({
          src: e,
          context: t,
          className: a,
          loading: n = "lazy",
          testId: s,
          ...o
        }, i) {
          if (!e) return null;
          const c = (0, l.getOptimizedRsgImage)(e, t, {
            preferModernFormat: !0
          });
          if (!c?.url) return null;
          const d = (0, x.v6)({
            "data-testid": s,
            alt: c.alt,
            src: c.url,
            width: c.width,
            height: c.height,
            loading: n,
            className: a
          }, o);
          return (0, r.jsx)(le, {
            ref: i,
            ...d
          })
        }),
        It = (0, i.defineMessages)({
          hp_hero_play_button_label: {
            id: "hp_hero_play_button_label",
            description: "Featured Game hero play button label",
            defaultMessage: "Play"
          },
          hp_hero_stop_button_label: {
            id: "hp_hero_stop_button_label",
            description: "Featured Game hero stop button label",
            defaultMessage: "Stop"
          }
        });
      var Et = "vi4uz51";
      const At = (0, s.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        zt = () => {
          const e = (0, s.useContext)(At);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        Tt = (0, s.forwardRef)(function({
          testId: e,
          children: t,
          asChild: a,
          isLooping: n = !1,
          ...o
        }, i) {
          const l = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            [_, u] = (0, s.useState)(!l),
            [m, f] = (0, s.useState)(!1),
            b = (0, x.v6)({
              "data-testid": e,
              className: "vi4uz50"
            }, o),
            p = a ? g.DX : "div";
          return (0, r.jsx)(At.Provider, {
            value: {
              videoRef: c,
              bgImageRef: d,
              isPlaying: _,
              isLooping: n,
              reducedMotion: l,
              setIsPlaying: u,
              videoError: m,
              setVideoError: f
            },
            children: (0, r.jsx)(p, {
              ref: i,
              ...b,
              children: t
            })
          })
        }),
        Mt = (0, s.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: a,
          setIsPlaying: n,
          videoLabel: o,
          testId: i,
          asChild: c,
          ...d
        }, _) {
          const u = (0, se.Ub)(j.f.mobile),
            {
              videoRef: m,
              isLooping: f,
              reducedMotion: b,
              setVideoError: p
            } = zt(),
            [h, k] = (0, s.useState)(null),
            v = c ? g.DX : "div",
            w = (0, x.v6)({
              "data-testid": i,
              className: Et
            }, d);
          return (0, s.useEffect)(() => {
            const t = m.current;
            if (!t || !e.mobile && !e.desktop || b) return;
            const a = t?.children[t.children.length - 1] ?? null,
              r = () => {
                n(!0)
              },
              s = () => {
                n(!1)
              },
              o = () => {
                console.warn("Play request interrupted :", t.error), n(!1)
              },
              i = () => {
                console.warn("Video failed to load sources."), p(!0)
              };
            return t.addEventListener("play", r), t.addEventListener("error", o), t.addEventListener("pause", s), a && a.addEventListener("error", i), () => {
              t.removeEventListener("play", r), t.removeEventListener("error", o), t.removeEventListener("pause", s), a && a.removeEventListener("error", i)
            }
          }, [m.current, JSON.stringify(e), b]), (0, s.useEffect)(() => {
            const e = (0, l.getOptimizedRsgImage)(t, u ? "1:1" : "21:9", {
              preferModernFormat: !0
            });
            e && k(e)
          }, [t, u]), (0, r.jsxs)(v, {
            ref: _,
            ...w,
            children: [(0, r.jsxs)("video", {
              ref: m,
              className: Et,
              loop: f,
              "aria-label": o,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: h?.url ?? void 0,
              children: [e.mobile && (0, r.jsx)("source", {
                media: j.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, r.jsx)("source", {
                media: j.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, r.jsx)(Nt, {
              context: u ? "1:1" : "21:9",
              src: t,
              className: (0, Ct.default)(["vi4uz52", a ? "vi4uz54" : "vi4uz53"]),
              "aria-hidden": a
            })]
          })
        }),
        Dt = (0, s.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: a,
          testId: n,
          ...o
        }, l) {
          const {
            formatMessage: d
          } = (0, i.useIntl)(), {
            videoRef: _,
            reducedMotion: u,
            videoError: m
          } = zt(), g = (0, s.useCallback)(() => {
            (() => {
              const e = _.current;
              e && (a ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(a)
          }, [a]), f = (0, x.v6)({
            "data-testid": n,
            className: (0, Ct.default)("vi4uz5e", e ? "vi4uz5d" : ""),
            label: d(a ? It.hp_hero_stop_button_label : It.hp_hero_play_button_label),
            "aria-label": d(It.hp_hero_play_button_label),
            "aria-pressed": a
          }, o);
          return u || m ? null : (0, r.jsx)(c.IconButton, {
            ref: l,
            ...f,
            icon: a ? "Stop" : "Play",
            appearance: "primary",
            size: "SM",
            onPress: g
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
      const Ft = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "section",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Pt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Lt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, n);
          return (0, r.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, r.jsx)(o, {
              ref: s,
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
      const Wt = (0, s.createContext)({
          heroRef: (0, s.createRef)(),
          backgroundRef: (0, s.createRef)(),
          backgroundGradientRef: (0, s.createRef)(),
          playStopButtonRef: (0, s.createRef)(),
          collectionsRef: (0, s.createRef)(),
          gameDetailsRef: (0, s.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        Bt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const i = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, s.useRef)(null),
            c = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            _ = (0, s.useRef)(null),
            u = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            [f, b] = (0, s.useState)(!i);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: a,
            playStopButtonRef: r,
            collectionsRef: n,
            gameDetailsRef: o
          }) {
            const [i, l] = (0, s.useState)(!1);
            (0, St.L)(() => {
              if (i) return;
              const s = e.current,
                c = t.current,
                d = a.current,
                _ = r.current,
                u = n.current,
                m = o.current;
              if (!(s && c && d && _ && u && m)) return;
              const g = Rt.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  trigger: s,
                  start: "top top",
                  endTrigger: u,
                  end: "top top",
                  pin: !0,
                  pinSpacing: !1,
                  scrub: !0,
                  onEnter: () => {
                    g.scrollTrigger?.refresh()
                  }
                }
              });
              g.fromTo(d, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -60%, rgba(0, 0, 0, 1) 20%)"
              }, 0), g.to(d, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), g.fromTo(c, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), g.to(_, {
                opacity: 0,
                duration: 10
              }, 70), n.current && (Rt.os.utils.toArray(":scope > *", n.current).forEach(e => {
                Rt.os.fromTo(e, {
                  opacity: 0
                }, {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: e,
                    start: "top bottom",
                    end: "+=20%",
                    toggleActions: "play none none none",
                    scrub: !0
                  }
                })
              }), g.scrollTrigger?.refresh(), l(!0))
            }, [e.current, t.current, a.current, r.current, o.current, n.current])
          }({
            heroRef: l,
            backgroundRef: c,
            backgroundGradientRef: d,
            playStopButtonRef: _,
            collectionsRef: u,
            gameDetailsRef: m
          });
          const p = a ? g.DX : "div",
            h = (0, x.v6)({
              "data-testid": t,
              className: "_1xrjhoy0"
            }, n);
          return (0, r.jsx)(Wt.Provider, {
            value: {
              heroRef: l,
              backgroundRef: c,
              backgroundGradientRef: d,
              playStopButtonRef: _,
              collectionsRef: u,
              gameDetailsRef: m,
              reducedMotion: i,
              isPlaying: f,
              setIsPlaying: b
            },
            children: (0, r.jsx)(p, {
              ref: o,
              ...h,
              children: e
            })
          })
        }),
        qt = (0, s.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...a
        }, n) {
          const {
            heroRef: o,
            backgroundRef: i,
            backgroundGradientRef: l,
            isPlaying: c,
            playStopButtonRef: d,
            reducedMotion: _,
            setIsPlaying: u
          } = (0, s.useContext)(Wt), {
            trackEvent: m
          } = W(), g = (0, se.UP)(o, n), f = (0, se.Ub)(j.f.mobile), b = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), p = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), h = {
            desktop: b?.url,
            mobile: p?.url ?? b?.url
          };
          return (0, r.jsxs)(Tt, {
            ref: g,
            ...a,
            children: [(0, r.jsx)(Mt, {
              backgroundImage: e,
              isPlaying: c,
              ref: i,
              setIsPlaying: u,
              videoSrc: h,
              videoLabel: t?.title ?? ""
            }), !_ && (0, r.jsx)(Dt, {
              ref: d,
              isPlaying: c,
              onButtonClick: e => {
                const a = f ? p : b;
                m({
                  event: "cta_other",
                  text: e ? "toggle pause" : "toggle play",
                  video_id: a?.sys?.id,
                  video_type: t?.type
                }, t)
              }
            }), (0, r.jsx)("div", {
              ref: l,
              className: Gt({
                reducedMotion: _
              })
            })]
          })
        }),
        Ot = (0, s.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, x.v6)({
            className: "_1xrjhoy3"
          }, e);
          return (0, r.jsx)(ce, {
            ref: t,
            ...a
          })
        }),
        Vt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_1xrjhoy7"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        $t = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_1xrjhoy8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ut = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_1xrjhoy9"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Xt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_1xrjhoya"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ht = (0, s.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...n
        }, s) {
          const o = t ? g.DX : Nt,
            i = (0, x.v6)({
              "data-testid": e,
              className: "_1xrjhoyc"
            }, n);
          return (0, r.jsx)("div", {
            className: "_1xrjhoyb",
            children: (0, r.jsx)(o, {
              ref: s,
              ...i,
              children: a
            })
          })
        }),
        Kt = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, o) {
          const {
            gameDetailsRef: i
          } = (0, s.useContext)(Wt), l = (0, se.UP)(i, o), c = t ? g.DX : Ft, d = (0, x.v6)({
            "data-testid": a
          }, n);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        Yt = (0, s.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...n
        }, o) {
          const {
            collectionsRef: i
          } = (0, s.useContext)(Wt), l = (0, se.UP)(i, o), c = a ? g.DX : Ft, d = (0, x.v6)({
            className: (0, Ct.default)("_1xrjhoy1", t)
          }, n);
          return (0, r.jsx)(c, {
            ref: l,
            ...d,
            children: e
          })
        }),
        Jt = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : Lt,
            i = (0, x.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Qt = (0, s.forwardRef)(function({
          children: e,
          className: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : Pt,
            i = (0, x.v6)({
              className: (0, Ct.default)("_1xrjhoy2", t)
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Zt = "view",
        ea = e => {
          if (!e) return null;
          try {
            return new URL(e, window.location.origin)
          } catch {
            return null
          }
        },
        ta = (e, t) => {
          if (!e) return "";
          const a = ea(e);
          return a ? (new URLSearchParams(t).forEach((e, t) => {
            a.searchParams.has(t) || a.searchParams.set(t, e)
          }), `${a.pathname}${a.search}${a.hash}`) : e
        },
        aa = ({
          block: e,
          size: t = "MD",
          backgroundColor: a,
          asChild: n,
          ...o
        }) => {
          const i = (0, _.useLocation)(),
            [, l] = (0, _.useSearchParams)(),
            {
              trackEvent: d
            } = W(),
            u = e?.link?.url ?? "",
            m = (0, s.useMemo)(() => ((e, t) => {
              const a = ea(e);
              if (!a) return {
                mode: "link",
                href: e,
                viewParam: ""
              };
              const r = a.searchParams.get(Zt) ?? "",
                n = r ? "bottom-sheet" : "link";
              return {
                mode: n,
                href: "bottom-sheet" === n ? ta(e, t) : e,
                viewParam: r
              }
            })(u, i.search), [u, i.search]),
            f = "bottom-sheet" === m.mode,
            b = m.href,
            p = m.viewParam,
            h = e?.openInNewTab ? "_blank" : "_self";
          if (!e) return null;
          const k = e => {
              d({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: b,
                ...e.analyticsData
              }, e)
            },
            v = (0, x.v6)({
              size: t,
              appearance: e?.appearance,
              iconLeft: e?.iconLeft?.icon,
              iconRight: e?.iconRight?.icon,
              onPress: f ? () => {
                f && f && p && l(e => {
                  const t = new URLSearchParams(e);
                  return t.set(Zt, p), t
                }, {
                  replace: !0
                }), k(e)
              } : () => k(e),
              override_backgroundColor: e?.backgroundColor ?? a,
              asChild: !f
            }, o);
          return n ? (0, r.jsx)(w, {
            href: b,
            target: h,
            children: (0, r.jsx)(g.DX, {
              ...o
            })
          }) : (0, r.jsx)(c.Button, {
            ...v,
            children: f ? e.text : (0, r.jsx)(w, {
              href: b,
              target: h,
              children: e.text
            })
          })
        },
        ra = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = W(), {
            blockPosition: a
          } = (0, s.useContext)(l.BlockRendererContext), {
            ref: n
          } = t(), {
            formatMessage: o
          } = (0, i.useIntl)();
          if (!e) return null;
          const {
            logo: d,
            game: _,
            description: u,
            ctasCollection: m
          } = e;
          return (0, r.jsxs)(Bt, {
            ref: n,
            children: [(0, r.jsx)(qt, {
              backgroundImage: e.backgroundImage,
              backgroundVideo: e.backgroundVideo,
              isLooping: !0
            }), (0, r.jsx)(Kt, {
              children: (0, r.jsxs)(Yt, {
                children: [(0, r.jsxs)(Jt, {
                  children: [(0, r.jsx)(Ot, {
                    src: d
                  }), (0, r.jsxs)(Vt, {
                    children: [(0, r.jsxs)(Qt, {
                      children: [(0, r.jsxs)(c.Breadcrumbs.Root, {
                        children: [(0, r.jsx)(c.Breadcrumbs.Item, {
                          href: "/games",
                          children: o(jt.featured_game_breadcrumbs_parent_item)
                        }), (0, r.jsx)(c.Breadcrumbs.Item, {
                          href: _?.wwwPageLink?.url,
                          isCurrent: !0,
                          children: _?.title
                        })]
                      }), (0, r.jsx)($t, {
                        asChild: !0,
                        children: (0, r.jsx)(c.Body, {
                          children: u
                        })
                      })]
                    }), (0, r.jsxs)(Qt, {
                      className: "hg5jwy0",
                      children: [m?.items && (0, r.jsx)(Ut, {
                        children: m?.items?.map((e, t) => {
                          if (e?.text) return (0, r.jsx)(aa, {
                            block: e,
                            size: "MD"
                          }, t)
                        })
                      }), _?.platformsCollection?.items?.length && (0, r.jsx)(Xt, {
                        children: _.platformsCollection.items.map((e, t) => (0, r.jsx)(Ht, {
                          src: e?.logo,
                          context: "mobile"
                        }, `${e?.sys?.id}-${t}`))
                      })]
                    })]
                  })]
                }), e.childModulesCollection?.items.map(e => (0, r.jsx)(l.BlockRenderer, {
                  block: e,
                  blockPosition: a
                }, e.sys.id))]
              })
            })]
          })
        },
        na = "WwwFeaturedGameSection";
      var sa = "r3mkgz4",
        oa = "var(--r3mkgz0)",
        ia = "r3mkgz5",
        la = "var(--r3mkgz1)";
      const ca = {
          wrap: "flex-direction: row;",
          stack: "flex-direction: column;"
        },
        da = {
          left: "\n        align-items: flex-start;\n        justify-content: flex-start;\n    ",
          center: "\n        align-items: center;\n        justify-content: center;\n    ",
          right: "\n        align-items: flex-end;\n        justify-content: flex-end;\n    "
        },
        _a = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gap: n,
          ...s
        }, o) {
          const i = t ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": a,
              className: "r3mkgz3 _1betujy5",
              style: (0, y.DI)({
                [oa]: n
              })
            }, s);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            children: e
          })
        }),
        ua = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          breakpoints: n,
          gap: o,
          ...i
        }, l) {
          const c = `grid-${(0,s.useId)()}`,
            d = t ? g.DX : "div",
            _ = (0, s.useMemo)(() => n?.map(({
              mediaQuery: e,
              columns: t,
              behavior: a = "wrap",
              alignment: r = "left"
            }) => `\n            @media ${e} {\n                #${CSS.escape(c)}.${sa} {\n                    ${ca[a]}\n                    ${da[r]}\n                }\n                ${t.map((e,a)=>`\n                    #${CSS.escape(c)} .${ia}:nth-of-type(${t.length}n + ${a+1}) {\n                            --grid-col-span: ${e};\n                        }\n                    `).join(" ")}\n            }\n        `), [n]),
            u = (0, x.v6)({
              "data-testid": a,
              className: sa,
              style: (0, y.DI)({
                [la]: o
              })
            }, i);
          return (0, r.jsxs)(d, {
            id: c,
            ref: l,
            ...u,
            children: [(0, r.jsx)("style", {
              children: _
            }), e]
          })
        }),
        ma = (0, s.forwardRef)(function({
          gap: e,
          children: t,
          asChild: a,
          testId: n,
          ...s
        }, o) {
          const i = a ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": n,
              className: ia,
              style: (0, y.DI)({
                [la]: e
              })
            }, s);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            children: t
          })
        }),
        ga = ({
          contentCollection: e,
          layout: t,
          ...a
        }) => {
          const n = (0, s.useMemo)(() => t?.breakpointsCollection?.items.map(e => ({
            mediaQuery: e.mediaQuery || "all",
            behavior: e.behavior || "wrap",
            alignment: e.alignment || "left",
            columns: e.columns
          })), [t]);
          return (0, r.jsx)(ua, {
            breakpoints: n,
            ...a,
            children: e?.items.map((t, a) => (0, r.jsx)(ma, {
              children: (0, r.jsx)(l.BlockRenderer, {
                block: t,
                blockPosition: {
                  blockIndex: a,
                  totalBlocks: e.items.length
                }
              })
            }, t.sys?.id || a))
          })
        },
        fa = "WwwGridWrapper",
        ba = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var pa = a(21324),
        ha = a(68507);
      Rt.os.registerPlugin(Z.u);
      const ka = () => ({
          desktop: {
            enter: Rt.os.timeline({
              paused: !0
            }),
            exit: Rt.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: Rt.os.timeline({
              paused: !0
            }),
            exit: Rt.os.timeline({
              paused: !0
            })
          }
        }),
        va = (e, t) => e?.[t ? "mobile" : "desktop"],
        xa = e => {
          const t = {
              desktop: {
                enter: Rt.os.timeline({
                  paused: !0
                }),
                exit: Rt.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: Rt.os.timeline({
                  paused: !0
                }),
                exit: Rt.os.timeline({
                  paused: !0
                })
              }
            },
            a = [e.fade?.current].filter(Boolean) || null,
            r = [e.content?.current].filter(Boolean) || null;
          return a || r ? (t.mobile.enter.set([a, r], {
            opacity: 1
          }), t.mobile.exit.fromTo(a, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(r, {
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
          }, 0), t.desktop.enter.set(a, {
            opacity: 1
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
          }, 0), t) : ka()
        },
        wa = (e, t, {
          isMobile: a = !1,
          loop: r = !1
        }) => {
          (0, s.useEffect)(() => {
            if (!e || 0 === t.length) return;
            const n = e.scrollSnapList(),
              s = n.length,
              o = () => {
                const o = e.scrollProgress();
                let i = 0,
                  l = 0,
                  c = 0;
                for (let e = 0; e < s; e++) {
                  const d = n[e],
                    _ = n[(e + 1) % s];
                  if (r) {
                    const t = _ > d ? _ - d : 1 + _ - d,
                      a = (o - d + 1) % 1;
                    if (a >= 0 && a <= t) {
                      i = e, l = (e + 1) % s, c = a / t;
                      break
                    }
                    c = Math.min(a / t, 1)
                  } else {
                    const t = n[e + 1] ?? 1,
                      a = t - d;
                    if (o >= d && o <= t) {
                      i = e, l = e + 1, c = (o - d) / a;
                      break
                    }
                    c = Math.max(0, Math.min((o - d) / a, 1))
                  }
                  const u = t[e];
                  if (u) {
                    const e = va(u, a);
                    e?.enter.progress(c).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[i];
                if (d) {
                  const e = va(d, a);
                  e?.enter.progress(1 - c).pause(), e?.exit.progress(c).pause()
                }
                if (!a) {
                  const e = t[l];
                  if (e) {
                    const t = va(e, !1);
                    t?.enter.progress(c).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach((e, t) => {
                  if (t !== i && t !== l) {
                    const t = va(e, a);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                })
              };
            return t.length > 1 ? (e.on("scroll", o), e.on("resize", o), () => {
              e.off("scroll", o), e.off("resize", o)
            }) : void 0
          }, [e, t, a, r])
        },
        ya = () => x.X3 ? null : document.body,
        ja = (0, i.defineMessages)({
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
      var Ca = a(80135),
        Ra = (0, C.c)({
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
        Sa = (0, C.c)({
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
        Na = (0, C.c)({
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
      const Ia = ({
          appearance: e,
          type: t,
          onClick: a,
          onBulletKeyDown: n,
          dotRef: s,
          fillRef: o
        }) => (0, r.jsx)("button", {
          className: "wai797b",
          onClick: a,
          onKeyDown: n,
          children: (0, r.jsx)("span", {
            ref: s,
            className: (0, Ct.default)("wai797c", Sa({
              appearance: e,
              type: t
            })),
            children: (0, r.jsx)("span", {
              ref: o,
              className: Na({
                appearance: e,
                type: t
              })
            })
          })
        }),
        Ea = ({
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
        Aa = (0, s.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: a,
          current: n,
          size: s,
          setDotRef: o,
          setFillRef: i,
          onBulletClick: l,
          onBulletKeyDown: c,
          testId: d,
          asChild: _,
          ...u
        }, m) {
          const f = _ ? g.DX : "div",
            b = (0, x.v6)({
              "data-testid": d,
              className: Ra({
                appearance: t,
                size: s
              })
            }, u),
            p = 100 * n / a;
          return (0, r.jsxs)(f, {
            ref: m,
            ...b,
            children: [("pagination" === e || "line" === e) && (0, Ca.A)(a)?.map(a => (0, r.jsx)(Ia, {
              type: e,
              appearance: t,
              onClick: () => l(a),
              onBulletKeyDown: c?.(a),
              dotRef: e => o?.(e, a),
              fillRef: e => i?.(e, a)
            }, a)), "progress" === e && (0, r.jsx)(Ea, {
              progress: p
            })]
          })
        });
      var za = (0, C.c)({
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
      const Ta = (0, s.createContext)({
          variant: "default",
          slides: null,
          defaultSlide: 0,
          autoPlay: !1,
          playOnInit: !1,
          autoScrollEnabled: !1,
          loop: !1,
          delay: 6e3,
          totalSlides: 0,
          slideRefs: null,
          inView: !1,
          emblaApi: null,
          intersectionRef: null,
          currentSlideRef: null,
          viewportRef: null,
          onBulletClick: null,
          onBulletKeyDown: null,
          setDotRef: null,
          setFillRef: null,
          isPausedRef: null
        }),
        Ma = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          slides: a,
          variant: n,
          delay: i,
          slideRefs: l,
          loop: c = !0,
          defaultSlide: d,
          playOnInit: _,
          autoPlay: u,
          autoScrollEnabled: m,
          ...f
        }, b) {
          const p = (0, s.useRef)(null),
            h = (0, s.useRef)(null),
            {
              ref: k,
              inView: v
            } = (0, o.useScrollVisibility)(1 / 3),
            {
              embla: w,
              viewportRef: y,
              currentSlideRef: C,
              onBulletClick: R,
              onBulletKeyDown: S,
              setDotRef: N,
              setFillRef: I,
              isPausedRef: E
            } = (({
              defaultSlide: e = 0,
              delay: t = 6e3,
              duration: a = 50,
              loop: r = !1,
              slideRefs: n,
              slides: o,
              totalSlides: i
            }) => {
              const l = .5,
                c = "power2.inOut",
                d = (0, s.useRef)(e),
                {
                  trackEvent: _
                } = W(),
                [u, m] = (0, s.useState)(!1),
                g = (0, s.useRef)(!1),
                f = (0, s.useRef)(!1),
                b = (0, s.useRef)([]),
                p = (0, s.useRef)([]),
                h = (0, s.useRef)(null),
                k = (0, s.useRef)(null),
                v = (0, s.useRef)(null),
                x = (0, se.Ub)(j.f.mobile),
                w = (0, s.useRef)(null),
                y = (0, s.useRef)([]);
              v.current || (v.current = (0, ha.A)({
                delay: 2 * t,
                stopOnInteraction: !1
              }));
              const [C, R] = (0, ye.A)({
                axis: "x",
                align: "start",
                startIndex: e,
                containScroll: "trimSnaps",
                watchDrag: u,
                active: !0,
                duration: a,
                loop: r
              }, [v.current, (0, je.J)()]);
              wa(R, y.current, {
                isMobile: x,
                loop: r
              });
              const S = (0, s.useCallback)((e, t) => {
                  b.current[t] = e
                }, []),
                N = (0, s.useCallback)((e, t) => {
                  p.current[t] = e
                }, []),
                I = (0, s.useCallback)(() => {
                  k.current?.kill(), k.current = null, g.current = !0
                }, []),
                E = (0, s.useCallback)(() => {
                  k.current?.pause(), g.current = !0
                }, []),
                A = (0, s.useCallback)(e => {
                  R && R.selectedScrollSnap() !== e && (d.current !== e && (d.current = e), R.scrollTo(e), v.current?.isPlaying() || (v.current?.stop(), E()), _({
                    event: "carousel_thumbnail_click",
                    position: e + 1,
                    position_max: R.slideNodes().length
                  }))
                }, [R, v, d, E]);
              (0, s.useEffect)(() => {
                const e = () => {
                  w.current && clearTimeout(w.current), f.current || (f.current = !0, E()), w.current = setTimeout(() => {
                    f.current = !1, k.current?.resume(), g.current = !1
                  }, 250)
                };
                return window.addEventListener("resize", e), () => {
                  window.removeEventListener("resize", e), w.current && clearTimeout(w.current)
                }
              }, []), (0, s.useEffect)(() => {
                if (!R) return;
                const e = R.slideNodes(),
                  a = [];
                for (let t = 0; t < e.length; t++) {
                  const e = n.current[t],
                    r = e ? xa(e) : ka();
                  a.push(r)
                }
                y.current = a;
                const r = () => {
                    v.current?.reset();
                    const e = R?.selectedScrollSnap();
                    d.current = e, (e => {
                      p?.current?.length && p.current.forEach((t, a) => {
                        t && t.parentElement && "BUTTON" === t.parentElement.tagName && (t.parentElement.disabled = a === e)
                      })
                    })(e), f.current || I(), a.forEach(e => {
                      const t = va(e, x);
                      t?.enter?.progress(1), t?.exit?.progress(0)
                    }), p.current.forEach((t, a) => {
                      t && (a === e || Rt.os.to(t, {
                        width: 10,
                        duration: l,
                        ease: c
                      }))
                    }), b.current.forEach((t, a) => {
                      if (!t) return;
                      const r = a === e;
                      Rt.os.to(t, {
                        opacity: r ? 1 : 0,
                        duration: l,
                        ease: c
                      })
                    }), f.current ? k.current?.pause() : (e => {
                      const a = b.current[e],
                        r = p.current[e];
                      a && r && R && (b.current.forEach(e => {
                        e && Rt.os.to(e, {
                          width: "0%",
                          duration: l,
                          ease: c
                        })
                      }), g.current = !1, Rt.os.to(r, {
                        width: 80,
                        duration: l,
                        ease: c
                      }), Rt.os.fromTo(a, {
                        opacity: 0
                      }, {
                        opacity: 1,
                        duration: l,
                        ease: c
                      }), k.current = Rt.os.to(a, {
                        width: "100%",
                        duration: t / 1e3,
                        ease: "none",
                        onComplete: () => {
                          if (!R) return;
                          const e = R.selectedScrollSnap() + 1,
                            t = e >= R.scrollSnapList().length ? 0 : e;
                          R.scrollTo(t)
                        }
                      }))
                    })(e), R.slideNodes().forEach((t, a) => {
                      t.querySelectorAll("a, button, input, textarea, select, [tabindex]").forEach(t => {
                        a === e ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", "-1")
                      })
                    }), window.postMessage({
                      source: "navColorTheme",
                      mode: o[e].navColor ?? "dark"
                    })
                  },
                  s = n.current?.map(e => e.background?.current).filter(Boolean);
                if (0 === s.length) return;
                let i = !1;
                const _ = s.map(e => new Promise(t => {
                  if (e.complete) t();
                  else {
                    const a = () => {
                      e.removeEventListener("load", a), t()
                    };
                    e.addEventListener("load", a)
                  }
                }));
                return Promise.all(_).then(() => {
                  i || r()
                }), R.on("select", r), R.on("resize", r), () => {
                  i = !0, R.off("select", r), R.off("resize", r), a.forEach(e => {
                    e?.mobile.enter?.kill(), e?.mobile.exit?.kill(), e?.desktop.enter?.kill(), e?.desktop.exit?.kill()
                  })
                }
              }, [R, v, n, I, x]), (0, s.useEffect)(() => {
                if (!R) return;
                let e = 0;
                const t = () => {
                    e = R.selectedScrollSnap()
                  },
                  a = () => {
                    const t = R.selectedScrollSnap();
                    e !== t && _({
                      event: "carousel_swipe"
                    })
                  };
                return R.on("pointerDown", t), R.on("pointerUp", a), () => {
                  R.off("pointerDown", t), R.off("pointerUp", a)
                }
              }, [R]), (0, s.useEffect)(() => {
                m(i > 1)
              }, [i]), (0, s.useEffect)(() => {
                if (!R) return;
                const e = () => {
                  k.current?.resume(), g.current = !1
                };
                return R.on("autoplay:play", e), R.on("autoplay:stop", E), () => {
                  R.off("autoplay:play", e), R.off("autoplay:stop", E)
                }
              }, [R, E]);
              const z = (0, s.useCallback)(e => t => {
                "Enter" !== t.key && " " !== t.key || (t.preventDefault(), R?.scrollTo(e))
              }, [R]);
              return (0, s.useEffect)(() => {
                const e = e => {
                  R && "input" !== document.activeElement?.tagName.toLowerCase() && ("ArrowRight" === e.key && R.scrollNext(), "ArrowLeft" === e.key && R.scrollPrev())
                };
                return R?.rootNode().addEventListener("keydown", e), () => R?.rootNode()?.removeEventListener("keydown", e)
              }, [R]), (0, s.useEffect)(() => {
                const e = n.current[d.current].fade.current;
                if (!R || !e || "input" === document.activeElement?.tagName.toLowerCase()) return;
                const t = e => {
                  const t = e.shiftKey,
                    a = Array.from((e => {
                      const t = n.current[e],
                        a = [...t.fade.current?.querySelectorAll("a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex='-1'])") || [], h?.current];
                      return t ? a : []
                    })(d.current));
                  if (0 === a.length) return;
                  const r = a[0],
                    s = a[a.length - 1];
                  if (!t && document.activeElement === s) {
                    if (1 === R?.slideNodes().length) return;
                    e.preventDefault();
                    const t = p.current[d.current + 1];
                    t && t.focus()
                  }
                  if (t && document.activeElement === r) {
                    if (1 === R?.slideNodes().length || 0 === d.current) return;
                    e.preventDefault();
                    const t = p.current[d.current];
                    t && t.focus()
                  }
                };
                return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
              }, [R]), {
                currentSlideRef: d,
                delay: t,
                embla: R,
                isPausedRef: g,
                viewportRef: C,
                setDotRef: N,
                setFillRef: S,
                playPauseRef: h,
                onBulletClick: A,
                onBulletKeyDown: z
              }
            })({
              defaultSlide: d,
              delay: i,
              loop: c,
              slideRefs: l,
              slides: a,
              totalSlides: a.length
            });
          (({
            embla: e,
            slides: t,
            target: a = ya(),
            enabled: r = !0,
            defaultSlideColor: n = "#000",
            backgroundRef: o
          }) => {
            const i = (0, s.useRef)([]),
              l = (0, s.useRef)([]);
            (0, s.useEffect)(() => {
              if (!(e && r && t?.length && a)) return;
              const s = () => {
                  i.current = e.scrollSnapList(), l.current = t?.map(e => [e.topGradientColor || n, e.bottomGradientColor || n]), _()
                },
                c = e => {
                  const t = o.current?.getContext("2d");
                  t && o.current && (t.rect(0, 0, o.current.width, o.current.height), t.fillStyle = e, t.fill())
                },
                d = e => {
                  const t = document.getElementById("navigation-gradient"),
                    a = t?.getContext("2d");
                  e && a && t && (a.rect(0, 0, t.width, t.height), a.fillStyle = e, a.fill())
                },
                _ = () => {
                  const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                    a = i.current,
                    r = Math.max(a.findIndex(e => e > t), 0),
                    s = r - 1 >= 0 ? r - 1 : a.length - 1,
                    [o, _] = l.current[r] ?? n,
                    [u, m] = l.current[s] ?? n,
                    g = Math.max(a[s] ?? 0, 0),
                    f = a[1] ?? 1,
                    b = Math.round((t - g) / f * 100);
                  if (u.length < 2 || o.length < 2) return;
                  const p = `color-mix(in srgb, ${m}, ${_} ${b}%)`;
                  d(`color-mix(in srgb, ${u}, ${o} ${b}%)`), c(p)
                };
              if (1 !== t?.length) return _(), e.on("scroll", _), e.on("reInit", _), e.on("slidesChanged", s), s(), () => {
                e.off("scroll", _), e.off("reInit", _), e.off("slidesChanged", s)
              };
              (() => {
                const [e, t] = l.current[0] ?? [n, n];
                d(e), c(t)
              })(), s()
            }, [r, e, t.length, n])
          })({
            embla: w,
            slides: a,
            backgroundRef: p
          }), (({
            backgroundRef: e,
            contentRef: t
          }) => {
            const a = (0, se.Ub)(j.f.mobileSmall);
            (0, s.useLayoutEffect)(() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                a = e.style.position,
                r = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = a), e.style.zIndex = r
              }
            }, []), (0, St.L)(() => {
              const t = e.current;
              if (!t) return;
              const a = t.parentElement;
              Rt.os.to(t, {
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
              }), Rt.os.to(t, {
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
              (0, St.L)(() => {
                const a = e.current;
                if (!a) return;
                const r = a.parentElement;
                if (!r) return;
                Rt.os.set(a, {
                  clearProps: "opacity"
                }), Rt.os.set(a, {
                  opacity: 1
                });
                const n = Rt.os.to(a, {
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
                      Rt.os.set(a, {
                        opacity: 1
                      })
                    }
                  }
                });
                return () => {
                  n.scrollTrigger?.kill(), n.kill(), Rt.os.set(a, {
                    clearProps: "opacity"
                  })
                }
              }, {
                dependencies: [t],
                scope: e,
                revertOnUpdate: !0
              })
            })({
              contentRef: t,
              isMobileSmall: a
            })
          })({
            backgroundRef: p,
            contentRef: h
          });
          const A = t ? g.DX : ze,
            z = (0, x.v6)({
              className: "_1obdf6x0"
            }, f);
          return (0, r.jsx)(Ta.Provider, {
            value: {
              slides: a,
              defaultSlide: d,
              autoPlay: u,
              playOnInit: _,
              autoScrollEnabled: m,
              loop: c,
              variant: n,
              delay: i,
              slideRefs: l,
              emblaApi: w,
              inView: v,
              currentSlideRef: C,
              intersectionRef: k,
              isPausedRef: E,
              viewportRef: y,
              onBulletClick: R,
              onBulletKeyDown: S,
              setDotRef: N,
              setFillRef: I
            },
            children: (0, r.jsxs)(A, {
              ref: b,
              ...z,
              children: [(0, r.jsx)("canvas", {
                ref: p,
                className: "_1obdf6x5",
                "aria-hidden": !0
              }), (0, r.jsx)("div", {
                ref: h,
                children: e
              })]
            })
          })
        }),
        Da = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const {
            inView: o,
            intersectionRef: i,
            viewportRef: l
          } = (0, s.useContext)(Ta), c = (0, se.UP)(l, n), d = t ? g.DX : Fe;
          return (0, r.jsx)("div", {
            ref: i,
            children: (0, r.jsx)(d, {
              ref: c,
              appearance: "ghost",
              className: "_1obdf6x1",
              "data-disabled": String(!o),
              ...a,
              children: e
            })
          })
        }),
        Fa = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const {
            variant: o
          } = (0, s.useContext)(Ta), i = (0, x.v6)({
            className: za({
              variant: o
            })
          }, a), l = t ? g.DX : Pe;
          return (0, r.jsx)(l, {
            ref: n,
            ...i,
            children: e
          })
        }),
        Pa = (0, s.forwardRef)(function({
          label: e,
          asChild: t,
          ...a
        }, n) {
          const {
            emblaApi: o,
            inView: l,
            currentSlideRef: d,
            slides: _,
            variant: u,
            setDotRef: m,
            setFillRef: f,
            onBulletClick: b,
            onBulletKeyDown: p
          } = (0, s.useContext)(Ta), h = !l, [k, v] = (0, s.useState)(!1), w = !k && !h, y = _.length, {
            formatMessage: C
          } = (0, i.useIntl)(), {
            trackEvent: R
          } = W(), S = (0, se.Ub)(j.f.mobile), N = t ? g.DX : "div", I = (0, x.v6)({
            className: "_1obdf6xd"
          }, a), E = (0, s.useCallback)(() => {
            v(e => (R({
              event: "cta_other",
              text: e ? "toggle play" : "toggle pause"
            }), !e))
          }, []);
          return (0, s.useEffect)(() => {
            const e = o?.plugins?.()?.autoplay;
            e && (w ? e.play() : e.stop())
          }, [o, w]), (0, s.useEffect)(() => {
            if (!o) return;
            const e = () => {
                h || v(!1)
              },
              t = () => {};
            return o.on("select", e), o.on("autoplay:play", e), o.on("autoplay:stop", t), () => {
              o.off("select", e), o.off("autoplay:play", e), o.off("autoplay:stop", t)
            }
          }, [o, h]), (0, r.jsx)(N, {
            ref: n,
            ...I,
            children: (0, r.jsxs)("div", {
              className: "_1obdf6xg",
              "data-disabled": String(h),
              children: [y > 1 && (0, r.jsxs)("div", {
                className: "_1obdf6xe",
                children: [(0, r.jsx)(c.IconButton, {
                  className: "_1obdf6x6",
                  icon: w ? "Pause" : "Play",
                  label: C(w ? ja.hero_carousel_pause_button : ja.hero_carousel_play_button),
                  "aria-label": C(ja.hero_carousel_play_button),
                  "aria-pressed": w,
                  size: "SM",
                  appearance: "ghost",
                  onPress: E
                }), (0, r.jsx)(Aa, {
                  type: S ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: d?.current,
                  pages: y,
                  onBulletClick: b,
                  onBulletKeyDown: p,
                  setDotRef: m,
                  setFillRef: f
                })]
              }), !S && e && (0, r.jsxs)("div", {
                className: "_1obdf6xh",
                children: [(0, r.jsx)(c.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "_1obdf6xi",
                  children: "full_height" === u ? C(ja.hero_carousel_scroll_down_label) : void 0
                }), (0, r.jsx)(pa.ArrowDown, {
                  size: "MD",
                  label: e
                })]
              })]
            })
          })
        });
      var La = "var(--uw9ioi2)",
        Ga = "var(--uw9ioi3)",
        Wa = "var(--uw9ioi1)",
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
        qa = ((0, C.c)({
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
      const Oa = (0, s.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: a,
          verticalBackgroundPosition: n,
          asChild: s,
          testId: o,
          size: i = "MD",
          ...l
        }, c) {
          const d = s ? g.DX : "div",
            _ = (0, x.v6)({
              "data-testid": o,
              className: qa({
                size: i
              }),
              style: (0, y.DI)({
                [Wa]: t,
                [La]: a,
                [Ga]: n
              })
            }, l);
          return (0, r.jsx)(d, {
            ref: c,
            ..._,
            children: e
          })
        }),
        Va = (0, s.forwardRef)(function({
          src: e,
          ...t
        }, a) {
          const n = (0, se.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"),
            {
              isUltraWideLandscape: o
            } = (() => {
              const e = (0, s.useCallback)(() => {
                  const e = window.innerWidth / window.innerHeight;
                  return [e >= 21 / 9, e <= 9 / 21]
                }, []),
                [t, a] = e(),
                [r, n] = (0, s.useState)(t),
                [o, i] = (0, s.useState)(a);
              return (0, s.useEffect)(() => {
                const t = () => {
                  const [t, a] = e();
                  n(t), i(a)
                };
                return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
              }, []), {
                isUltraWideLandscape: r,
                isUltraTallPortrait: o
              }
            })(),
            i = (0, x.v6)({
              className: "uw9ioic",
              src: e
            }, t);
          return (0, r.jsx)(Nt, {
            ref: a,
            ...i,
            loading: "eager",
            context: n ? "2:3" : o ? "32:9" : "21:9"
          })
        }),
        $a = (0, s.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: a,
          testId: n,
          ...s
        }, o) {
          const i = a ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": n,
              className: Ba({
                invisible: e
              })
            }, s);
          return (0, r.jsx)("div", {
            className: "uw9ioid _1betujy6 _1betujy5",
            children: (0, r.jsx)(i, {
              ref: o,
              ...l,
              children: t
            })
          })
        }),
        Ua = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "uw9ioig"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Xa = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : c.Label,
            i = (0, x.v6)({
              "data-testid": a,
              className: "uw9ioih foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ha = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "h2",
            i = (0, x.v6)({
              "data-testid": a,
              className: "uw9ioii foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ka = (0, s.forwardRef)(function({
          asChild: e,
          src: t,
          ...a
        }, n) {
          const s = e ? g.DX : "div",
            o = (0, x.v6)({
              className: "uw9ioij"
            }, a);
          return (0, r.jsx)(s, {
            ref: n,
            ...o,
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
        Ya = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "uw9ioin"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ja = ({
          slideRefs: e,
          slide: t,
          currentSlideIndex: a
        }) => {
          const {
            isPausedRef: n,
            emblaApi: o
          } = (0, s.useContext)(Ta), i = () => {
            n.current || o?.plugins().autoplay.stop()
          };
          return (0, r.jsxs)(Oa, {
            bottomGradientColor: t.bottomGradientColor,
            size: ba(t.title),
            children: [(0, r.jsx)(Va, {
              ref: e.current[a].background,
              src: t.background
            }), (0, r.jsxs)($a, {
              ref: e.current[a].content,
              invisible: 0 === a,
              children: [(0, r.jsx)(Ka, {
                ref: e.current[a].logo,
                src: t.logo
              }), (0, r.jsxs)(Ua, {
                ref: e.current[a].heading,
                children: [t.eyebrow && (0, r.jsx)(Xa, {
                  size: "LG",
                  appearance: "bold",
                  children: t.eyebrow
                }), t.title && (0, r.jsx)(Ha, {
                  children: t.title
                })]
              }), t?.ctasCollection?.items && (0, r.jsx)(Ya, {
                ref: e?.current[a]?.ctas,
                children: t?.ctasCollection?.items?.map(e => (0, r.jsx)(aa, {
                  block: e,
                  size: "MD",
                  onClick: i
                }, e.sys.id))
              })]
            })]
          })
        },
        Qa = (0, s.forwardRef)(function({
          slides: e,
          size: t,
          delay: a = 6e3,
          defaultSlide: n = 0,
          loop: o = !0,
          ...i
        }, l) {
          const {
            trackEvent: c
          } = W(), {
            emblaApi: d,
            inView: _
          } = (0, s.useContext)(Ta), u = (0, s.useRef)(e?.map(() => ({
            background: (0, s.createRef)(),
            content: (0, s.createRef)(),
            logo: (0, s.createRef)(),
            heading: (0, s.createRef)(),
            ctas: (0, s.createRef)(),
            fade: (0, s.createRef)()
          })));
          return (0, s.useEffect)(() => {
            const t = t => {
              const a = t.selectedScrollSnap();
              _ && c({
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
          }, [d]), e?.length ? (0, r.jsxs)(Ma, {
            ref: l,
            slides: e,
            variant: t,
            tabIndex: -1,
            delay: a,
            slideRefs: u,
            defaultSlide: n,
            onNext: () => {
              c({
                event: "carousel_next"
              })
            },
            onPrev: () => {
              c({
                event: "carousel_previous"
              })
            },
            onSwipe: () => {
              c({
                event: "carousel_swipe"
              })
            },
            loop: o,
            ...i,
            children: [(0, r.jsx)(Da, {
              children: e?.map((e, t) => (0, r.jsx)(Fa, {
                ref: u?.current[t]?.fade,
                variant: "full",
                children: (0, r.jsx)(Ja, {
                  currentSlideIndex: t,
                  slideRefs: u,
                  slide: e
                })
              }, t))
            }), e?.length > 1 && (0, r.jsx)(Pa, {})]
          }) : null
        }),
        Za = ({
          block: e
        }) => {
          const {
            useTrackPageSectionImpression: t
          } = W(), {
            ref: a
          } = t();
          return e ? (0, r.jsx)(Qa, {
            ref: a,
            size: e.size,
            slides: e.slidesCollection?.items
          }) : null
        },
        er = "WwwFeaturedContentCarousel";
      var tr = (0, C.c)({
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
      const ar = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_1cw0rgk0"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        rr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "_1cw0rgk1"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        nr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          textAlignment: n = "left",
          ...s
        }, o) {
          const i = a ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": t,
              className: tr({
                textAlignment: n
              })
            }, s);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            children: e
          })
        }),
        sr = "WwwImageBlock";
      var or = a(26182),
        ir = (0, C.c)({
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
        lr = (0, C.c)({
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
        cr = (0, C.c)({
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
        dr = (0, C.c)({
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
        _r = "var(--_1scye890)",
        ur = "var(--_1scye891)",
        mr = "var(--_1scye892)",
        gr = (0, C.c)({
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
        fr = (0, C.c)({
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
        br = (0, C.c)({
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
        pr = (0, C.c)({
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
      const hr = (0, s.forwardRef)(function({
          image: e,
          size: t = "auto",
          testId: a,
          asChild: n,
          ...s
        }, o) {
          if (!e) return;
          const i = n ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": a,
              className: pr({
                size: t
              })
            }, s);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            children: (0, r.jsx)(ce, {
              src: e,
              className: "_1hsn8lx6"
            })
          })
        }),
        kr = (0, s.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        vr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          size: n = "medium",
          gradientColor: s,
          gradientType: o = "linear",
          interactive: i = !1,
          theme: l = "dark",
          ...c
        }, d) {
          const _ = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(s),
            u = _ && (0, y.DI)({
              [_r]: _.r,
              [mr]: _.b,
              [ur]: _.g
            }),
            m = a ? g.DX : "div",
            f = (0, x.v6)({
              "data-testid": t,
              className: fr({
                gradient: o
              }),
              style: {
                ...u
              }
            }, c);
          return (0, r.jsx)(kr.Provider, {
            value: {
              size: n,
              gradientColor: s,
              interactive: i,
              theme: l
            },
            children: (0, r.jsx)(m, {
              ref: d,
              ...f,
              children: e
            })
          })
        }),
        xr = (0, s.forwardRef)(function({
          testId: e,
          asChild: t,
          children: a,
          ...n
        }, o) {
          const {
            interactive: i
          } = (0, s.useContext)(kr), l = t ? g.DX : "div", c = (0, x.v6)({
            "data-testid": e,
            className: gr({
              interactive: i
            })
          }, n);
          return (0, r.jsx)(l, {
            ref: o,
            ...c,
            children: a
          })
        }),
        wr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const i = (0, s.useContext)(kr);
          if (!i) return;
          const {
            size: l
          } = i, c = a ? g.DX : "div", d = (0, x.v6)({
            "data-testid": t,
            className: lr({
              size: l
            })
          }, n);
          return (0, r.jsx)(c, {
            ref: o,
            ...d,
            children: e
          })
        }),
        yr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, s.useContext)(kr);
          if (!o) return;
          const {
            size: i
          } = o, l = (0, x.v6)({
            "data-testid": t,
            className: ir({
              size: i
            })
          }, a);
          return (0, r.jsx)("span", {
            ref: n,
            ...l,
            children: e
          })
        }),
        jr = (0, s.forwardRef)(function({
          ...e
        }, t) {
          const a = (0, x.v6)({
            className: "_1scye89j"
          }, e);
          return (0, r.jsx)(hr, {
            ref: t,
            ...a
          })
        }),
        Cr = (0, s.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: a,
          ...n
        }, o) {
          const i = (0, s.useContext)(kr);
          if (!i) return;
          const {
            size: d,
            theme: _
          } = i, u = (0, x.v6)({
            "data-testid": a,
            className: br({
              theme: _,
              size: d
            })
          }, n);
          return (0, r.jsx)(l.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [or.BLOCKS.HEADING_1]: (e, a) => (0, r.jsx)(c.Heading, {
                  level: t,
                  ref: o,
                  ...u,
                  children: a
                })
              }
            }
          })
        }),
        Rr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const i = (0, s.useContext)(kr);
          if (!i) return;
          const {
            size: l
          } = i, c = a ? g.DX : "div", d = (0, x.v6)({
            "data-testid": t,
            className: dr({
              size: l
            })
          }, n);
          return (0, r.jsx)(c, {
            ref: o,
            ...d,
            children: e
          })
        }),
        Sr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const o = (0, s.useContext)(kr);
          if (!o) return;
          const {
            size: i,
            theme: l
          } = o, d = (0, h.m)(l, "normal"), _ = (0, x.v6)({
            "data-testid": t,
            className: (0, Ct.default)(d, cr({
              size: i
            }))
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: n,
            ..._,
            children: e
          })
        });
      var Nr = (0, C.c)({
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
      const Ir = "WwwImageCard",
        Er = (0, i.defineMessages)({
          image_carousel_screen_reader_announcer_label: {
            id: "image_carousel_screen_reader_announcer_label",
            description: "Image carousel screen reader announcer label",
            defaultMessage: "Now showing {selectedTab} of {total}"
          }
        });
      var Ar = "var(--iast650)",
        zr = (0, C.c)({
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
        Tr = (0, C.c)({
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
      const Mr = (0, s.createContext)({
          theme: "light",
          items: null,
          activeIndex: 0,
          focusedIndex: 0,
          setActiveIndex: null,
          setFocusedIndex: null
        }),
        Dr = (0, s.forwardRef)(function({
          theme: e = "light",
          items: t,
          children: a,
          asChild: n,
          testId: o,
          ...l
        }, c) {
          const [d, _] = (0, s.useState)(0), [u, m] = (0, s.useState)(0), {
            formatMessage: f
          } = (0, i.useIntl)(), b = (0, s.useMemo)(() => ({
            theme: e,
            items: t,
            activeIndex: d,
            focusedIndex: u,
            setActiveIndex: _,
            setFocusedIndex: m
          }), [e, t, d, u]), p = (0, h.m)(e), k = n ? g.DX : "div", v = (0, x.v6)({
            className: (0, Ct.default)("iast651", p),
            "data-testid": o
          }, l);
          return (0, r.jsxs)(Mr.Provider, {
            value: b,
            children: [(0, r.jsx)(k, {
              ref: c,
              ...v,
              children: a
            }), (0, r.jsx)(Or, {
              total: t.length,
              announcer: (e, t) => f(Er.image_carousel_screen_reader_announcer_label, {
                selectedTab: `${e+1}`,
                total: `${t}`
              })
            })]
          })
        }),
        Fr = (0, s.createContext)(null),
        Pr = (0, s.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const {
            activeIndex: n,
            setActiveIndex: o,
            focusedIndex: i,
            setFocusedIndex: l,
            theme: c
          } = (0, s.useContext)(Mr), {
            containerRef: d,
            buttonRefs: _,
            highlight: u,
            overflow: m
          } = ((e = 0, t = []) => {
            const a = (0, s.useRef)(null),
              r = (0, s.useRef)([]),
              [n, o] = (0, s.useState)({
                left: 0,
                width: 0
              }),
              [i, l] = (0, s.useState)({
                left: !1,
                right: !1
              }),
              c = (0, s.useCallback)(() => {
                const t = a.current,
                  n = r.current[e];
                if (!t || !n) return;
                const s = n.offsetLeft,
                  i = n.offsetWidth;
                o(e => e.left === s && e.width === i ? e : {
                  left: s,
                  width: i
                })
              }, [e]);
            return (0, s.useLayoutEffect)(() => {
              const e = () => requestAnimationFrame(c),
                t = "function" == typeof document.fonts?.ready?.then ? document.fonts.ready : void 0;
              t ? t.then(e) : e()
            }, [e, c, ...t]), (0, s.useEffect)(() => {
              const t = r.current[e];
              if (!t) return;
              const a = new ResizeObserver(() => c());
              return a.observe(t), () => a.disconnect()
            }, [e, c]), (0, s.useEffect)(() => {
              const e = a.current;
              if (!e) return;
              const t = () => {
                l({
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
              highlight: n,
              overflow: i,
              remeasure: c
            }
          })(n, [e]), {
            onKeyDown: g
          } = (({
            count: e,
            focusedIndex: t,
            setFocusedIndex: a,
            setActiveIndex: r,
            buttonRefs: n
          }) => ({
            onKeyDown: (0, s.useCallback)(s => {
              if (!(e <= 0)) switch (s.key) {
                case "ArrowRight": {
                  s.preventDefault();
                  const r = (t + 1) % e;
                  a(r), n.current[r]?.focus(), n.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "ArrowLeft": {
                  s.preventDefault();
                  const r = (t - 1 + e) % e;
                  a(r), n.current[r]?.focus(), n.current[r]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                  });
                  break
                }
                case "Home":
                  s.preventDefault(), a(0), n.current[0]?.focus();
                  break;
                case "End":
                  s.preventDefault(), a(e - 1), n.current[e - 1]?.focus();
                  break;
                case "Enter":
                case " ":
                  s.preventDefault(), r(t), a(t)
              }
            }, [e, t, a, r, n])
          }))({
            count: s.Children.count(e),
            focusedIndex: i,
            setFocusedIndex: l,
            setActiveIndex: o,
            buttonRefs: _
          }), f = (e, t) => {
            _.current[e] = t
          }, b = (e, t) => {
            if (!l || !o) return;
            o(e), l(e);
            const a = t ?? _.current[e];
            a && (a.focus(), "function" == typeof a.scrollIntoView && a.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }))
          }, p = (0, s.useMemo)(() => ({
            setButtonRef: f,
            onTabKeyDown: g,
            activateIndex: b
          }), [g]), k = (0, h.m)(c), v = (0, se.UP)(d, a), w = (0, x.v6)({
            className: (0, Ct.default)(Tr({
              overflowLeft: m.left,
              overflowRight: m.right
            }), k),
            role: "tablist"
          }, t);
          return (0, r.jsx)("div", {
            className: (0, Ct.default)("iast658", k),
            children: (0, r.jsxs)("div", {
              ref: v,
              ...w,
              onKeyDown: g,
              children: [(0, r.jsx)("div", {
                className: (0, Ct.default)("iast65e", k),
                style: {
                  transform: `translateX(calc(${u.left}px - ${y.LU.global.spacing.gap[50]}))`,
                  width: u.width
                }
              }), (0, r.jsx)(Fr.Provider, {
                value: p,
                children: e
              })]
            })
          })
        }),
        Lr = (0, s.forwardRef)(function({
          children: e,
          index: t,
          onClick: a,
          onKeyDown: n,
          ...o
        }, i) {
          const {
            activeIndex: l,
            focusedIndex: c,
            theme: d
          } = (0, s.useContext)(Mr), {
            setButtonRef: _,
            onTabKeyDown: u,
            activateIndex: m
          } = (() => {
            const e = (0, s.useContext)(Fr);
            if (!e) throw new Error("ImageCarousel.Tab must be used inside ImageCarousel.Tabs");
            return e
          })(), g = l === t, f = c === t, b = (0, h.m)(d), p = (0, se.UP)(e => _(t, e), i), k = (0, x.v6)({
            className: (0, Ct.default)("iast65d foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh", b)
          }, o);
          return (0, r.jsx)("button", {
            ref: p,
            ...k,
            role: "tab",
            type: "button",
            tabIndex: f ? 0 : -1,
            "aria-selected": g,
            "data-selected": g,
            onClick: e => {
              a?.(e), m(t, e.currentTarget)
            },
            onKeyDown: e => {
              n?.(e), u(e)
            },
            children: e
          })
        }),
        Gr = (0, s.memo)(Lr, (e, t) => e.children === t.children && e.index === t.index && e.appearance === t.appearance),
        Wr = (0, s.forwardRef)(function({
          children: e,
          mobileAspectRatio: t = "1/1",
          desktopAspectRatio: a = "16/9",
          ...n
        }, s) {
          const o = (0, se.Ub)(j.f.mobile),
            i = (0, x.v6)({
              className: "iast652",
              style: (0, y.DI)({
                [Ar]: o ? t : a
              })
            }, n);
          return (0, r.jsx)("div", {
            ref: s,
            ...i,
            children: e
          })
        }),
        Br = (0, s.forwardRef)(function({
          index: e,
          children: t,
          ...a
        }, n) {
          const {
            theme: o,
            activeIndex: i
          } = (0, s.useContext)(Mr), l = i === e, c = (0, h.m)(o), d = (0, x.v6)({
            className: (0, Ct.default)(zr({
              isActive: l
            }), c),
            role: "tabpanel",
            hidden: !l,
            "aria-hidden": !l
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...d,
            children: t
          })
        }),
        qr = (0, s.memo)(Br),
        Or = ({
          total: e,
          announcer: t
        }) => {
          const {
            activeIndex: a
          } = (0, s.useContext)(Mr);
          return e <= 0 || !a ? null : (0, r.jsx)(g.s6, {
            "aria-live": "polite",
            "aria-atomic": "true",
            children: t(a, e)
          })
        },
        Vr = ({
          index: e,
          children: t
        }) => {
          const {
            activeIndex: a
          } = (0, s.useContext)(Mr), n = a !== e ? -1 : void 0;
          return (0, r.jsx)(g.DX, {
            tabIndex: n,
            children: t
          })
        },
        $r = "WwwImageCarousel";
      var Ur = a(13335);
      const Xr = (0, s.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        Hr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const [i, l] = (0, s.useState)(!1), c = a ? g.DX : "section", d = (0, x.v6)({
            "data-testid": t,
            className: "b8qqdy0"
          }, n);
          return (0, r.jsx)(Xr.Provider, {
            value: {
              imagesLoaded: i,
              setImagesLoaded: l
            },
            children: (0, r.jsx)(c, {
              ref: o,
              ...d,
              children: e
            })
          })
        }),
        Kr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "b8qqdy1"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Yr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "b8qqdy7 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Jr = (0, s.forwardRef)(function({
          children: e,
          delay: t = 0,
          speed: a = .2
        }, n) {
          const [s] = (0, ye.A)({
            loop: !0,
            dragFree: !0,
            startIndex: 0,
            watchDrag: !1,
            containScroll: "keepSnaps"
          }, [(0, Ur.A)({
            playOnInit: !0,
            speed: a,
            direction: "forward",
            startDelay: t,
            stopOnInteraction: !1,
            stopOnMouseEnter: !1,
            stopOnFocusIn: !1,
            rootNode: null
          })]), o = (0, se.UP)(s, n);
          return (0, r.jsx)("div", {
            className: "b8qqdy2",
            ref: o,
            children: (0, r.jsx)("div", {
              className: "b8qqdy3",
              children: e
            })
          })
        }),
        Qr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }) {
          const s = (0, x.v6)({
              "data-testid": t,
              className: "b8qqdy6"
            }, n),
            o = a ? g.DX : "div";
          return (0, r.jsx)(o, {
            ...s,
            children: e
          })
        }),
        Zr = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t,
              className: "b8qqdy8"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        en = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            "data-testid": t,
            className: "b8qqdy9"
          }, a);
          return (0, r.jsx)(c.Heading, {
            ref: n,
            ...s,
            level: 3,
            children: e
          })
        }),
        tn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            "data-testid": t,
            className: "b8qqdya"
          }, a);
          return (0, r.jsx)(c.Body, {
            ref: n,
            ...s,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        an = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          link: a,
          ...n
        }, s) {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "b8qqdyb"
          }, n);
          return a?.url ? (0, r.jsx)(c.Button, {
            ref: s,
            ...o,
            size: "MD",
            asChild: !0,
            children: (0, r.jsx)(w, {
              href: a?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, r.jsx)(c.Button, {
            ref: s,
            ...o,
            size: "MD",
            children: e
          })
        }),
        rn = ({
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
            cta: s,
            description: o,
            title: i
          } = e, l = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items, c = l ? Math.floor(l.length / 2) : 0, d = l?.slice(0, c) || [], _ = l?.slice(c) || [];
          return (0, r.jsxs)(Hr, {
            ref: n,
            children: [(0, r.jsxs)(Kr, {
              children: [(0, r.jsx)(Jr, {
                delay: 0,
                speed: .2,
                children: d.map((e, t) => {
                  if (e.boxArt) return (0, r.jsx)(Qr, {
                    asChild: !0,
                    children: (0, r.jsx)(Nt, {
                      src: e.boxArt,
                      context: "mobile",
                      sizes: "(min-width: 1570px) 260px, 20vw",
                      loading: "eager"
                    })
                  }, `${t}-${e?.boxArt?.altText}`)
                })
              }), (0, r.jsx)(Jr, {
                delay: 10,
                speed: .16,
                children: _.map((e, t) => {
                  if (e.boxArt) return (0, r.jsx)(Qr, {
                    asChild: !0,
                    children: (0, r.jsx)(Nt, {
                      src: e.boxArt,
                      context: "mobile",
                      sizes: "(min-width: 1570px) 260px, 20vw",
                      loading: "eager"
                    })
                  }, `${t}-${e?.boxArt?.altText}`)
                })
              })]
            }), (0, r.jsxs)(Yr, {
              children: [(0, r.jsxs)(Zr, {
                children: [(0, r.jsx)(en, {
                  children: i
                }), (0, r.jsx)(tn, {
                  children: o
                })]
              }), s && (0, r.jsx)(an, {
                appearance: s?.appearance,
                override_backgroundColor: s?.backgroundColor,
                iconLeft: s?.iconLeft?.icon,
                iconRight: s?.iconRight?.icon,
                link: s?.link,
                onPress: (u = s, () => t(u.analyticsData, u)),
                children: s?.text
              })]
            })]
          });
          var u
        },
        nn = "WwwImagesMarqueeModule",
        sn = "WwwLightboxImage",
        on = "WwwLinkOutImage";
      var ln = (0, C.c)({
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
        cn = ((0, C.c)({
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
        dn = (0, C.c)({
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
      const _n = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              className: "_64q2nv0 _1betujy6 _1betujy5",
              "data-testid": a
            }, n);
          return (0, r.jsx)(o, {
            ...i,
            ref: s,
            children: e
          })
        }),
        un = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: n,
          ...s
        }, o) {
          const i = t ? g.DX : "div",
            l = (0, x.v6)({
              className: cn({
                grid: n
              }),
              "data-testid": a
            }, s);
          return (0, r.jsx)(i, {
            ...l,
            ref: o,
            children: e
          })
        }),
        mn = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          gridType: n,
          ...o
        }, i) {
          const l = t ? g.DX : "div",
            c = (0, x.v6)({
              className: (0, Ct.default)(cn({
                grid: n || "4_up_a"
              })),
              "data-testid": a
            }, o);
          return (0, r.jsx)(l, {
            ...c,
            ref: i,
            children: s.Children.map(e, (e, t) => (0, s.isValidElement)(e) && (0, s.cloneElement)(e, {
              style: {
                gridArea: String.fromCharCode(97 + t)
              }
            }))
          })
        }),
        gn = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          type: n,
          ...s
        }, o) {
          const i = t ? g.DX : "div",
            l = (0, x.v6)({
              className: dn({
                type: n
              }),
              "data-testid": a
            }, s);
          return (0, r.jsx)(i, {
            ...l,
            ref: o,
            children: e
          })
        }),
        fn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          defaultSlide: a = 0,
          onCarouselSwipe: n,
          ...o
        }, i) {
          const [l, c] = (0, s.useState)(!1), {
            ref: d,
            api: _,
            currentSlide: u
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: a = 40
          }) => {
            const r = (0, s.useRef)(null),
              [n, o] = (0, s.useState)(t),
              [i, l] = (0, s.useState)(0),
              [c, d] = (0, s.useState)(!1),
              [_, u] = (0, ye.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: c,
                duration: a
              }, []),
              m = (0, s.useCallback)(() => {
                u && (l(u?.scrollSnapList()?.length ?? 0), d(u?.canScrollNext() || u?.canScrollPrev()))
              }, [u]),
              g = (0, s.useCallback)(() => {
                u && o(u?.selectedScrollSnap() ?? 0)
              }, [u]);
            return (0, s.useEffect)(() => {
              u && r?.current && (e ? r?.current.play() : r.current.stop())
            }, [e, u]), (0, s.useEffect)(() => {
              if (u) return u.on("init", m), u.on("reInit", m), u.on("select", g), m(), () => {
                u.off("init", m), u.off("reInit", m), u.off("select", g)
              }
            }, [u, m, g]), {
              ref: _,
              currentSlide: n,
              totalSlides: i,
              api: u
            }
          })({
            defaultSlide: a
          }), m = (0, se.UP)(d, i), g = (0, x.v6)({
            className: "_64q2nve",
            "data-testid": t
          }, o);
          return (0, s.useEffect)(() => {
            const e = () => {
              c(!0)
            };
            return _?.on("pointerUp", e), l && n?.(), c(!1), () => {
              _?.off("pointerUp", e)
            }
          }, [_, u]), (0, r.jsx)(Fe, {
            ...g,
            ref: m,
            children: e
          })
        }),
        bn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            className: "_64q2nvf",
            "data-testid": t
          }, a);
          return (0, r.jsx)(Pe, {
            ...s,
            ref: n,
            children: e
          })
        }),
        pn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          textColor: a,
          size: n,
          ...s
        }, o) {
          const i = (0, x.v6)({
            className: "_64q2nvg",
            "data-testid": t,
            gradientType: "radial",
            theme: "dark" === a ? "light" : "dark",
            interactive: !0,
            size: n
          }, s);
          return (0, r.jsx)(vr, {
            ...i,
            ref: o,
            children: e
          })
        }),
        hn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            className: "_64q2nvh",
            "data-testid": t
          }, a);
          return (0, r.jsx)(wr, {
            ...s,
            ref: n,
            children: e
          })
        }),
        kn = yr,
        vn = Cr,
        xn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            "data-testid": t
          }, a);
          return (0, r.jsx)(Sr, {
            ...s,
            ref: n,
            asChild: !0,
            children: (0, r.jsx)("span", {
              className: ln({
                appearance: a.appearance
              }),
              tabIndex: -1,
              children: e
            })
          })
        }),
        wn = xr,
        yn = (0, i.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        });
      var jn = "_18nij4j0";
      const Cn = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        Rn = ({
          card: e,
          context: t,
          size: a
        }) => {
          const {
            textColor: n,
            badgeText: s,
            text: o,
            cta: i,
            backgroundImage: l
          } = e, c = Cn[a];
          return (0, r.jsxs)(pn, {
            size: a,
            textColor: n,
            children: [(0, r.jsxs)(hn, {
              children: [s && (0, r.jsx)(kn, {
                children: s
              }), o && (0, r.jsx)(vn, {
                level: c,
                children: o
              }), i && (0, r.jsx)(xn, {
                iconLeft: i.iconLeft?.icon,
                iconRight: i.iconRight?.icon,
                appearance: i.appearance,
                override_backgroundColor: i?.backgroundColor,
                size: "MD",
                children: i.text
              })]
            }), l && (0, r.jsx)(wn, {
              asChild: !0,
              children: (0, r.jsx)(Nt, {
                alt: l?.altText,
                src: l,
                context: t
              })
            })]
          })
        },
        Sn = "WwwMasonryGrid";
      var Nn = a(47279),
        In = a(35318),
        En = a(72132),
        An = a(28401),
        zn = a(49673);
      const Tn = (0, i.defineMessages)({
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
        Mn = {
          SUCCESS: {
            icon: "check",
            heading: Tn.ns_successfully_subscribed_title,
            bodyText: Tn.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Tn.ns_check_email_title,
            bodyText: Tn.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Tn.ns_error_preferences_title,
            bodyText: Tn.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Tn.ns_error_generic_title,
            bodyText: Tn.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Tn.ns_already_subbed_title,
            bodyText: Tn.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Tn.ns_confirm_after_register_title,
            bodyText: Tn.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Tn.ns_confirm_title,
            bodyText: Tn.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        Dn = {
          0: Mn.ERROR_PREFERENCES,
          1: Mn.SUCCESS,
          2: Mn.ERROR_PREFERENCES,
          3: Mn.ERROR_PREFERENCES,
          4: Mn.ERROR_GENERIC
        },
        Fn = (0, An.eU)(null),
        Pn = (e, t) => {
          const [a, r] = (0, s.useState)(), [n, l] = (0, s.useState)(!1), [c, d] = (0, s.useState)(!1), [_, u] = (0, s.useState)(!1), [m, g] = (0, s.useState)(!1), [f, p] = (0, zn.fp)(Fn), h = (0, i.useIntl)(), {
            track: k
          } = (0, b.useGtmTrack)(), v = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, s.useEffect)(() => {
            a ? (d(!0), u(!1)) : d(!1)
          }, [a]);
          const x = {
              ...Mn.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: h.formatMessage(Tn.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  w()
                }
              }, {
                buttonText: h.formatMessage(Tn.ns_go_back_text),
                onClick: () => {
                  r(null)
                }
              }]
            },
            w = async () => (k({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || window.location.assign(v.auth), t.loggedIn && t.isAMinor ? (r(Mn.ERROR_GENERIC), g(!1), void k({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !f || t.loggedIn && 3 == f ? void await y() : t.loggedIn && f ? (k({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), r(Mn.ALREADY_SUBSCRIBED), void g(!1)) : void 0), y = async () => {
              const {
                error: e = null,
                result: a
              } = await (0, o.coreScApiFetch)("marketing/update", {
                fetchOptions: {
                  method: "POST"
                },
                pingBearer: t.pingBearer,
                query: {
                  subscribe: !0
                }
              });
              if (e) p(0), r(Mn.ERROR_GENERIC), k({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = a.status;
                p(e), r(Dn[e]), 1 === e ? (k({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), k({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : k({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, s.useEffect)(() => {
            l(1 === f)
          }, [f]), (0, s.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === f) return;
                  p(-1), u(!0);
                  const {
                    error: a = null,
                    result: n
                  } = await (0, o.coreScApiFetch)("marketing/status", {
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
                          t.isNewAccount ? (k({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), k({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), r(Mn.SUCCESS)) : (k({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), r(Mn.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          k({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), r(Mn.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (r(x), k({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(a), u(!1)
                  }
                })() : u(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: a,
            handleSubscribeButton: w,
            isButtonLoading: m,
            isLoading: _,
            isSubscribed: n,
            setShowDialog: d,
            showDialog: c,
            subscriptionStatus: f,
            urls: v,
            setDialog: r
          }
        },
        Ln = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "l1gjt90 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Gn = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : c.Heading,
            i = (0, x.v6)({
              "data-testid": a,
              className: "l1gjt91"
            }, n);
          return (0, r.jsx)(o, {
            level: 2,
            ref: s,
            ...i,
            children: e
          })
        }),
        Wn = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "l1gjt92"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Bn = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "l1gjt94"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        qn = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: a,
          ...n
        }, s) {
          const o = (0, x.v6)({
            "data-testid": t,
            isDisabled: a
          }, n);
          return (0, r.jsx)(c.Button, {
            appearance: "primary",
            size: "MD",
            ref: s,
            ...o,
            children: e
          })
        }),
        On = "WwwNewsletterSubscribe";
      var Vn = (0, C.c)({
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
        $n = (0, C.c)({
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
        Un = "var(--_1ozycm40)",
        Xn = "_1ozycm4o",
        Hn = (0, C.c)({
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
      const Kn = (0, s.createContext)(void 0),
        Yn = (0, s.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: a = !0,
          imagePlacement: n = "left",
          children: o,
          asChild: i,
          testId: l,
          ...c
        }, d) {
          const _ = i ? g.DX : "div",
            u = "dark" === e ? "#000000" : "lightgrey",
            m = (0, x.v6)({
              "data-testid": l,
              className: "_1ozycm42 _1betujy6 _1betujy5",
              style: (0, y.DI)({
                [Un]: t ?? u
              })
            }, c),
            f = (0, se.Ub)(j.f.mobile),
            b = f ? "vertical" : n,
            p = "left" === n ? o : s.Children.toArray(o).reverse();
          return (0, r.jsx)(Kn.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: b,
              gradientEnabled: a
            },
            children: (0, r.jsx)(_, {
              ref: d,
              ...m,
              children: f ? o : p
            })
          })
        }),
        Jn = (0, s.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: a,
          asChild: n,
          ...o
        }, i) {
          const l = (0, s.useContext)(Kn);
          if (!l) return;
          const {
            colorMode: c,
            gradientEnabled: d,
            imagePlacement: _
          } = l, u = n ? g.DX : "div", m = (0, h.m)(c ?? "dark", "normal"), f = (0, x.v6)({
            "data-testid": a,
            className: (0, Ct.default)(m, "_1ozycm43", Hn({
              contentAlignment: e,
              imagePlacement: _
            }), !d && "_1ozycm4a")
          }, o);
          return (0, r.jsx)(u, {
            ref: i,
            ...f,
            children: t
          })
        }),
        Qn = (0, s.forwardRef)(function({
          image: e,
          testId: t,
          asChild: a,
          ...n
        }, o) {
          const i = (0, se.Ub)(j.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            l = (0, s.useContext)(Kn);
          if (!l || !e) return;
          const {
            imagePlacement: c,
            gradientEnabled: d
          } = l, _ = a ? g.DX : "div", u = (0, x.v6)({
            "data-testid": t,
            className: Vn({
              imagePlacement: c
            })
          }, n);
          return (0, r.jsxs)(_, {
            ref: o,
            ...u,
            children: [d && (0, r.jsx)("div", {
              className: $n({
                imagePlacement: c
              })
            }), (0, r.jsx)(Nt, {
              src: e,
              context: i,
              className: "_1ozycm4j"
            })]
          })
        }),
        Zn = (0, s.forwardRef)(function({
          ...e
        }, t) {
          return (0, r.jsx)(hr, {
            ref: t,
            ...e
          })
        }),
        es = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const s = (0, x.v6)({
            "data-testid": t,
            className: "_1ozycm4k"
          }, a);
          return (0, r.jsx)(c.Button, {
            ref: n,
            ...s,
            children: e
          })
        }),
        ts = (0, s.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const n = (0, x.v6)({
            className: "_1ozycm4l"
          }, t);
          return (0, r.jsx)(c.Heading, {
            ref: a,
            ...n,
            children: e
          })
        }),
        as = (0, s.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          if (!e) return;
          const n = (0, x.v6)({
            className: "_1ozycm4m"
          }, t);
          return (0, r.jsx)(c.Body, {
            ref: a,
            ...n,
            children: e
          })
        }),
        rs = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const s = (0, x.v6)({
            "data-testid": t,
            className: "_1ozycm4n"
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: e
          })
        }),
        ns = (0, s.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: a,
          ...n
        }, s) {
          if (!e) return;
          const o = (0, x.v6)({
              "data-testid": a,
              className: Xn
            }, n),
            i = {
              [l.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, r.jsx)(c.Body, {
                size: "XS",
                className: Xn,
                children: t
              }),
              [l.ContentfulTypes.INLINES.HYPERLINK]: (e, a) => {
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
            ref: s,
            ...o,
            children: (0, r.jsx)(l.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: i
              }
            })
          })
        }),
        ss = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          if (!e) return;
          const s = (0, x.v6)({
            "data-testid": t,
            className: "_1ozycm4q"
          }, a);
          return (0, r.jsx)(c.Label, {
            ref: n,
            ...s,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        os = "WwwPromoModule",
        is = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "_174ett30 _1betujy6 _1betujy5"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...i,
            children: e
          })
        }),
        ls = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": a,
              className: "_174ett31"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        cs = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          ...a
        }, n) {
          const s = t ? g.DX : "div",
            o = (0, x.v6)({
              className: "_174ett32"
            }, a);
          return (0, r.jsx)(s, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ds = (0, s.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: a,
          ...n
        }, s) {
          const o = e ? g.DX : "div",
            i = (0, x.v6)({
              "data-testid": t
            }, n);
          return (0, r.jsxs)(o, {
            ref: s,
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
        _s = (0, s.forwardRef)(function({
          children: e,
          asChild: t,
          testId: a,
          ...n
        }, s) {
          const o = t ? g.DX : c.Body,
            i = (0, x.v6)({
              "data-testid": a,
              className: "_174ett36 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        us = "WwwSupportCalloutModule";
      var ms = "var(--lgxyya7)",
        gs = (0, C.c)({
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
        fs = "var(--lgxyya9)",
        bs = "var(--lgxyyaa)",
        ps = (0, C.c)({
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
      const hs = (0, s.createContext)({
          align: "left"
        }),
        ks = (0, s.forwardRef)(function({
          align: e = "left",
          children: t,
          testId: a,
          asChild: n,
          ...s
        }, o) {
          const i = n ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": a,
              className: ps({
                align: e
              })
            }, s);
          return (0, r.jsx)(hs.Provider, {
            value: {
              align: e
            },
            children: (0, r.jsx)(i, {
              ref: o,
              ...l,
              children: t
            })
          })
        }),
        vs = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            "data-testid": t,
            className: "lgxyya6"
          }, a);
          return (0, r.jsx)("div", {
            className: "lgxyya5",
            children: (0, r.jsx)(c.Badge.Root, {
              appearance: "primary",
              ref: n,
              ...s,
              children: (0, r.jsx)(c.Badge.Label, {
                children: e
              })
            })
          })
        }),
        xs = (0, s.forwardRef)(function({
          bodyTextWrap: e,
          children: t,
          testId: a,
          ...n
        }, s) {
          const o = (0, x.v6)({
            "data-testid": a,
            className: "lgxyya8",
            style: (0, y.DI)({
              [ms]: e
            })
          }, n);
          return t ? (0, r.jsx)("div", {
            ref: s,
            ...o,
            children: t
          }) : null
        }),
        ws = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          size: a = "SM",
          ...n
        }, s) {
          const o = (0, x.v6)({
            "data-testid": t,
            className: "lgxyya4"
          }, n);
          return (0, r.jsx)(c.Label, {
            size: a,
            appearance: "bold",
            ref: s,
            ...o,
            children: e
          })
        }),
        ys = (0, s.forwardRef)(function({
          headerSize: e,
          textColor: t,
          headerTextWrap: a,
          children: n,
          testId: o,
          ...i
        }, l) {
          const d = (0, se.Ub)(j.f.desktopSmallAndLarger),
            [_, u] = (0, s.useState)(2),
            m = (0, x.v6)({
              "data-testid": o,
              className: (0, Ct.default)("lgxyyag", t && "lgxyyab"),
              style: (0, y.DI)({
                [fs]: t,
                [bs]: a
              }),
              asChild: !0
            }, i);
          return (0, s.useEffect)(() => {
            "XS" === e ? u(d ? 5 : 6) : "SM" === e ? u(d ? 4 : 5) : "MD" === e ? u(d ? 3 : 4) : "LG" === e ? u(d ? 2 : 3) : "XL" === e && u(d ? 1 : 2)
          }, [e, d]), (0, r.jsx)(c.Heading, {
            level: _,
            ref: l,
            ...m,
            children: (0, r.jsx)("h2", {
              children: n
            })
          })
        }),
        js = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          ...n
        }, s) {
          const o = a ? g.DX : "p",
            i = (0, x.v6)({
              "data-testid": t,
              className: "lgxyyah"
            }, n);
          return (0, r.jsx)(o, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Cs = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const {
            align: o
          } = (0, s.useContext)(hs), i = (0, x.v6)({
            "data-testid": t,
            className: gs({
              align: o
            })
          }, a);
          return (0, r.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        Rs = "WwwTextBlock";
      var Ss = (0, C.c)({
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
      const Ns = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          asChild: a,
          variant: n = "image_right",
          ...s
        }, o) {
          const i = a ? g.DX : "div",
            l = (0, x.v6)({
              "data-testid": t,
              className: Ss({
                alignment: n
              })
            }, s);
          return (0, r.jsx)(i, {
            ref: o,
            ...l,
            children: e
          })
        }),
        Is = (0, s.forwardRef)(function({
          testId: e,
          altText: t,
          ...a
        }, n) {
          const s = (0, x.v6)({
            "data-testid": e,
            className: "ftz7gr6",
            alt: t
          }, a);
          return (0, r.jsx)("img", {
            ref: n,
            ...s
          })
        }),
        Es = (0, s.forwardRef)(function({
          children: e,
          ...t
        }, a) {
          const n = (0, x.v6)({
            className: "ftz7gr7"
          }, t);
          return (0, r.jsx)("div", {
            ref: a,
            ...n,
            children: e
          })
        }),
        As = "WwwTextWithBadge";
      var zs = a(31879),
        Ts = a.n(zs);
      const Ms = "WwwVideoPlayer";
      var Ds = a(13517);
      const Fs = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        Ps = (0, i.defineMessages)({
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
      var Ls = a(17301);
      const Gs = ({
        legalText: e
      }) => (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });
      var Ws = "_3rocp6l",
        Bs = (0, C.c)({
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
        qs = "_3rocp6m",
        Os = "_3rocp6i",
        Vs = "_3rocp6g",
        $s = "_3rocp65",
        Us = "_3rocp66",
        Xs = "_3rocp6q",
        Hs = "_3rocp6j",
        Ks = "_3rocp63",
        Ys = "_3rocp68",
        Js = "_3rocp6z",
        Qs = "_3rocp6a",
        Zs = "_3rocp6h",
        eo = "_3rocp67";
      const to = ({
        content: e,
        loggedIn: t,
        addClaim: a,
        signin: n,
        landingSlide: s
      }) => (0, r.jsxs)("div", {
        className: (0, Ct.default)($s, "_3rocp6c _3rocp6b", "onScreen" === s ? Ys : "", "hidden" === s ? Us : "", "visible" === s ? eo : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: Ks,
          alt: e.introScreen.image.alt
        }), (0, r.jsxs)("div", {
          className: Zs,
          children: [(0, r.jsx)("div", {
            className: Qs,
            children: (0, r.jsxs)("div", {
              className: Ws,
              children: [(0, r.jsx)(c.Badge.Root, {
                className: "_3rocp6k",
                appearance: "primary",
                children: (0, r.jsx)(c.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, r.jsxs)("div", {
                className: (0, Ct.default)(qs, "override"),
                children: [(0, r.jsx)(c.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, r.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, r.jsx)("div", {
                className: Vs,
                children: (0, r.jsx)(c.Button, {
                  className: Js,
                  appearance: "primary",
                  size: "MD",
                  onClick: t ? a : n,
                  children: t ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, r.jsx)("div", {
            className: Os,
            children: (0, r.jsx)("div", {
              className: (0, Ct.default)(Hs, "override"),
              children: (0, r.jsx)(Gs, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var ao = a(14653),
        ro = a(50662),
        no = a(63218),
        so = a(51550),
        oo = a(30433);
      const io = (0, i.defineMessages)({
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
        lo = "rockstargames-sites-rockstargamesb2d75ee6d468c7fde9ad28ba90ca2804",
        co = (0, s.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...n
        }, s) {
          const {
            formatMessage: o
          } = (0, i.useIntl)(), l = (0, x.v6)(n, {
            "data-testid": a,
            className: (0, Ct.default)("rockstargames-sites-rockstargamesd738b88fa09e0960678501900af6dae1", t)
          });
          return (0, r.jsxs)("div", {
            ref: s,
            ...l,
            children: [(0, r.jsx)(g.s6, {
              children: o(io.character_card_a11y_intro)
            }), e]
          })
        }),
        _o = (0, oo.g)(co),
        uo = (0, s.forwardRef)(function({
          src: e,
          alt: t,
          testId: n,
          ...o
        }, i) {
          const [l, c] = (0, s.useState)(e), d = (0, x.v6)(o, {
            className: "rockstargames-sites-rockstargamesa0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, r.jsx)("div", {
            ref: i,
            ...d,
            children: (0, r.jsx)("img", {
              className: lo,
              src: l,
              alt: t ?? "",
              onError: () => c(a(14804)),
              "aria-hidden": !t
            })
          }) : (0, r.jsx)("div", {
            ref: i,
            ...d,
            children: (0, r.jsx)("img", {
              className: lo,
              src: a(14804),
              alt: t ?? "",
              "aria-hidden": !t
            })
          })
        }),
        mo = (0, s.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...n
        }, s) {
          const o = e ? g.DX : "div",
            i = (0, x.v6)(n, {
              className: (0, Ct.default)("rockstargames-sites-rockstargamesfbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, r.jsx)(o, {
            ref: s,
            ...i
          })
        }),
        go = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, n) {
          const s = (0, x.v6)(a, {
            className: "rockstargames-sites-rockstargamesd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, r.jsx)("div", {
            ref: n,
            ...s,
            children: e
          })
        }),
        fo = ({
          testId: e,
          ...t
        }) => {
          const a = (0, x.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsx)(no.Ay, {
            ...a
          })
        },
        bo = (0, s.forwardRef)(function({
          children: e,
          testId: t,
          userName: a,
          ...n
        }, s) {
          const {
            formatMessage: o
          } = (0, i.useIntl)(), l = (0, x.v6)(n, {
            "data-testid": t
          });
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstargamescd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...l,
            ref: s,
            children: [(0, r.jsx)(g.s6, {
              children: o(io.character_card_a11y_player, {
                player: a
              })
            }), (0, r.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        po = (0, s.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, n) {
          const s = (0, x.v6)(a, {
            "data-testid": e
          });
          return (0, r.jsx)("div", {
            ...s,
            ref: n,
            children: t
          })
        }),
        ho = ({
          testId: e,
          ...t
        }) => {
          const {
            formatMessage: a
          } = (0, i.useIntl)(), n = (0, x.v6)(t, {
            "data-testid": e
          });
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.s6, {
              children: a(io.character_card_a11y_rank, {
                rank: t.rank
              })
            }), (0, r.jsx)(so.L, {
              ...n,
              "aria-hidden": !0
            })]
          })
        };
      var ko = a(38044);
      const vo = ({
        content: e,
        successSlide: t,
        characterList: a,
        linkAccountUrl: n,
        linkMoreAccounts: o,
        linkAccountBtn: i
      }) => {
        const l = (0, s.createRef)(),
          d = (0, s.createRef)(),
          _ = (0, s.createRef)(),
          [u, m] = (0, s.useState)(),
          [g, f] = (0, s.useState)(!1),
          [b, p] = (0, s.useState)(),
          [h, k] = (0, s.useState)(!1),
          [v, x] = (0, s.useState)(!0);
        return (0, s.useEffect)(() => {
          const e = () => {
            l?.current && f(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [l]), (0, s.useEffect)(() => {
          m({
            nextEl: d?.current,
            prevEl: _?.current
          })
        }, [_?.current, d?.current]), (0, r.jsxs)("div", {
          className: (0, Ct.default)($s, "_3rocp6d _3rocp6b", "onScreen" === t ? Ys : "", "hidden" === t ? Us : "", "visible" === t ? eo : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: Ks,
            alt: e.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: Zs,
            children: [(0, r.jsxs)("div", {
              className: Ws,
              children: [(0, r.jsx)("div", {
                className: Bs({
                  slideName: "success"
                }),
                children: (0, r.jsx)(pa.Check, {
                  className: Xs,
                  label: "succcess check label"
                })
              }), (0, r.jsxs)("div", {
                className: (0, Ct.default)(qs, "override"),
                children: [(0, r.jsx)(c.Heading, {
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
                  ref: l,
                  children: (0, r.jsx)(ao.RC, {
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
                    modules: [ro.Vx, ro.Jq],
                    onInit: e => {
                      p(e)
                    },
                    onSlideChange: e => {
                      k(e?.isEnd), x(e?.isBeginning)
                    },
                    children: a.map(e => (0, r.jsx)(ao.qr, {
                      tabIndex: 0,
                      children: (0, r.jsxs)(_o, {
                        className: "_3rocp6x",
                        children: [(0, r.jsx)(uo, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, r.jsxs)(mo, {
                          children: [(0, r.jsx)(go, {
                            children: (0, r.jsx)(fo, {
                              tagSize: no.YT.large,
                              platform: e.platform
                            })
                          }), (0, r.jsx)(bo, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, r.jsx)(po, {
                            children: (0, r.jsx)(ho, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, r.jsx)(c.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, r.jsx)(ko.A, {
                    className: "_3rocp6r",
                    to: n,
                    onClick: o,
                    children: i
                  })
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: _,
                  onClick: () => {
                    b?.slidePrev()
                  },
                  isDisabled: v,
                  "data-hidden": !g
                }), (0, r.jsx)(c.Button, {
                  className: "_3rocp6v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    b?.slideNext()
                  },
                  isDisabled: h,
                  "data-hidden": !g
                })]
              })]
            }), (0, r.jsx)("div", {
              className: Os,
              children: (0, r.jsx)("div", {
                className: (0, Ct.default)(Hs, "override"),
                children: (0, r.jsx)(Gs, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      a(79955);
      const xo = {
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
        wo = ({
          buttonText: e = "",
          link: t = "",
          platform: n = "",
          target: s = null,
          onClick: o,
          tabIndex: i,
          className: l,
          ...c
        }) => {
          const d = s ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            u = [xo.platformButton, xo[n], l].join(" "),
            m = n ? a(5328)(`./${n}.svg`) : null,
            g = (0, r.jsxs)(r.Fragment, {
              children: [m ? (0, r.jsx)("img", {
                src: m,
                alt: e
              }) : "", !m && (0, r.jsx)("div", {
                className: xo.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, r.jsx)("a", {
            href: t,
            className: u,
            target: d,
            onClick: o,
            "aria-label": e,
            tabIndex: i,
            ...c,
            children: g
          }) : (0, r.jsx)(_.NavLink, {
            className: u,
            onClick: o,
            to: t,
            "aria-label": e,
            ...c,
            children: g
          }) : (0, r.jsx)("button", {
            className: u,
            onClick: o,
            "aria-label": e,
            tabIndex: i,
            ...c,
            children: g
          })
        },
        yo = ({
          content: e,
          unlinkedSlide: t,
          returnUrl: a,
          giftId: n
        }) => {
          const s = (0, o.useRockstarTokenPing)(),
            {
              track: i
            } = (0, b.useGtmTrack)(),
            l = async e => {
              const t = (0, o.findPlatform)(e)?.onlineService;
              if (t && "sc" !== t) {
                i({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: n,
                  text: `link ${t}`
                });
                const e = await (0, o.generateTpaLink)({
                  pingBearer: s,
                  returnUrl: a || window.location.pathname,
                  service: t
                });
                window.location.assign(e.href)
              }
            };
          return (0, r.jsxs)("div", {
            className: (0, Ct.default)($s, "_3rocp6e _3rocp6b", "onScreen" === t ? Ys : "", "hidden" === t ? Us : "", "visible" === t ? eo : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: Ks,
              alt: e.introScreen.image.alt
            }), (0, r.jsxs)("div", {
              className: Zs,
              children: [(0, r.jsx)("div", {
                className: Qs,
                children: (0, r.jsxs)("div", {
                  className: Ws,
                  children: [(0, r.jsx)("div", {
                    className: Bs({
                      slideName: "error"
                    }),
                    children: (0, r.jsx)(pa.TriangleAlert, {
                      className: Xs,
                      label: ""
                    })
                  }), (0, r.jsxs)("div", {
                    className: (0, Ct.default)(qs, "override"),
                    children: [(0, r.jsx)(c.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, r.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, r.jsxs)("div", {
                    className: "_3rocp610",
                    children: [(0, r.jsx)(wo, {
                      buttonText: (0, o.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => l("xbox"),
                      tabIndex: 0
                    }), (0, r.jsx)(wo, {
                      buttonText: (0, o.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => l("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, r.jsx)("div", {
                className: Os,
                children: (0, r.jsx)("div", {
                  className: (0, Ct.default)(Hs, "override"),
                  children: (0, r.jsx)(Gs, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        jo = ({
          errorSlide: e,
          content: t
        }) => (0, r.jsxs)("div", {
          className: (0, Ct.default)($s, "_3rocp6f _3rocp6b", "onScreen" === e ? Ys : "", "hidden" === e ? Us : "", "visible" === e ? eo : ""),
          children: [t?.introScreen?.image?.sources?.mobile && (0, r.jsx)("img", {
            src: t.introScreen.image.sources.mobile,
            className: Ks,
            alt: t.introScreen.image.alt
          }), (0, r.jsxs)("div", {
            className: Zs,
            children: [(0, r.jsx)("div", {
              className: Qs,
              children: (0, r.jsxs)("div", {
                className: Ws,
                children: [(0, r.jsx)("div", {
                  className: Bs({
                    slideName: "error"
                  }),
                  children: (0, r.jsx)(pa.TriangleAlert, {
                    className: Xs,
                    label: ""
                  })
                }), (0, r.jsxs)("div", {
                  className: (0, Ct.default)(qs, "override"),
                  children: [(0, r.jsx)(c.Heading, {
                    level: 3,
                    children: t.errorScreen.headline
                  }), (0, r.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.errorScreen.body
                    }
                  })]
                }), (0, r.jsx)("div", {
                  className: Vs,
                  children: (0, r.jsx)(c.Button, {
                    className: Js,
                    appearance: "primary",
                    size: "MD",
                    onClick: () => window.location.reload(),
                    children: t.errorScreen.btnText
                  })
                })]
              })
            }), (0, r.jsx)("div", {
              className: Os,
              children: (0, r.jsx)("div", {
                className: (0, Ct.default)(Hs, "override"),
                children: (0, r.jsx)(Gs, {
                  legalText: t.legalText
                })
              })
            })]
          })]
        });
      var Co = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(Co || {});
      const Ro = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: So
        } = (0, Nn.A)(),
        No = (0, i.withIntl)(({
          giftId: e,
          location: t = "gtaplus_site",
          introScreen: a,
          errorScreen: n,
          unlinkedScreen: l,
          successScreen: c,
          jumpLinkId: d,
          legalText: u,
          fontTheme: m = "chalet",
          usePadding: g = !0,
          ...f
        }) => {
          const h = {
              errorScreen: {
                btnText: n?.errorButton || "",
                headline: n?.errorHeadline || "",
                body: n?.errorContent || ""
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
                    desktop: (0, Ls.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, Ls.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: u,
              successScreen: {
                body: c?.successContent || "",
                headline: c?.successHeadline || ""
              },
              unlinkedScreen: {
                body: l?.unlinkedContent || "",
                btnText: l?.unlinkedButtonText || "",
                headline: l?.unlinkedHeadline || ""
              }
            },
            [k] = (0, _.useSearchParams)(),
            {
              data: v,
              loggedIn: x
            } = (0, b.useRockstarUser)(),
            w = (0, o.useRockstarTokenPing)(),
            y = `https://${So?.subDomain}.rockstargames.com/account/connections`,
            j = (0, i.useIntl)(),
            {
              track: C
            } = (0, b.useGtmTrack)(),
            R = (0, s.useRef)(null),
            {
              ref: S,
              inView: N
            } = (0, p.useInView)({
              threshold: .6
            }),
            I = 1280,
            E = (0, s.createRef)(),
            [A, z] = (0, s.useState)(null),
            [T, M] = (0, s.useState)([]),
            [D, F] = (0, s.useState)(!1),
            [P, L] = (0, s.useState)(),
            [G, W] = (0, s.useState)("hidden"),
            [B, q] = (0, s.useState)("hidden"),
            [O, V] = (0, s.useState)("hidden"),
            [$, U] = (0, s.useState)("hidden"),
            [X, H] = (0, s.useState)(!1),
            [K, Y] = (0, s.useState)(Co.landing),
            [J, Q] = (0, s.useState)(h.introScreen.image.sources.mobile || Ro),
            Z = `${document.location.pathname}${document.location.search}#${d}`,
            ee = (0, o.usePrevious)(P),
            te = (0, o.usePrevious)(x),
            {
              signInUrl: ae
            } = (0, o.useScAuthLinks)(Z),
            re = e => {
              e === Co.landing ? (Y(Co.landing), q("onScreen"), W("hidden"), U("hidden"), V("hidden")) : e === Co.success ? (Y(Co.success), q("offScreen"), W("visible"), setTimeout(() => {
                q("hidden"), U("hidden")
              }, 300), setTimeout(() => {
                W("onScreen")
              }, 100)) : e === Co.error ? (Y(Co.error), q("offScreen"), U("visible"), setTimeout(() => {
                q("hidden")
              }, 300), setTimeout(() => {
                U("onScreen")
              }, 100)) : e === Co.unlinked && (Y(Co.unlinked), q("offScreen"), V("visible"), setTimeout(() => {
                q("hidden"), U("hidden")
              }, 300), setTimeout(() => {
                V("onScreen")
              }, 100))
            };
          return (0, s.useEffect)(() => {
            let e;
            return d && window.location.hash === `#${d}` && R.current && (e = window.setTimeout(() => {
              R.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [d]), (0, s.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== t ? Q(h.introScreen.image.sources.mobile || Ro) : Q(h.introScreen.image.sources.desktop || Ro)
              },
              a = () => {
                window.innerWidth <= I && !D ? (F(!0), re(K)) : window.innerWidth > I && D && F(!1), e()
              };
            return F(window.innerWidth <= I), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [K, D]), (0, s.useEffect)(() => {
            const e = v?.characters?.gtao;
            M(e || [])
          }, [v?.characters?.gtao]), (0, s.useEffect)(() => {
            "boolean" != typeof ee && "boolean" != typeof te || !e || P && x && (async () => {
              try {
                const {
                  result: t
                } = await (0, o.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: w,
                  query: {
                    giftUId: e
                  }
                });
                z("boolean" == typeof t && t)
              } catch (e) {
                z(!1)
              }
            })()
          }, [P, x, e]), (0, s.useEffect)(() => {
            "boolean" == typeof x ? x ? L(!0) : (L(!1), q("onScreen")) : L(!0)
          }, [x]), (0, s.useEffect)(() => {
            "boolean" == typeof A && v?.accountSynced && L(!1)
          }, [A, v?.accountSynced, L]), (0, s.useEffect)(() => {
            P || (async () => {
              T.length > 0 && A ? re(Co.success) : re(A ? Co.unlinked : Co.landing)
            })()
          }, [P]), (0, s.useEffect)(() => {
            if (N && !X) {
              if (void 0 === x) return;
              C({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: x ? "signed in" : "signed out"
              }), H(!0)
            }
          }, [N, x]), (0, s.useEffect)(() => {
            "onScreen" === G && C({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [G]), (0, s.useEffect)(() => {
            "onScreen" === O && C({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [O]), (0, s.useEffect)(() => {
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
              ...f,
              children: (0, r.jsxs)(Ds.motion.div, {
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
                  className: (0, Ct.default)("_3rocp64", P ? "loader" : ""),
                  ref: E,
                  children: P ? (0, r.jsx)("div", {
                    className: "_3rocp6w",
                    children: (0, r.jsx)(En.A, {
                      type: "SPINNING"
                    })
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [K === Co.landing && (0, r.jsx)(to, {
                      content: h,
                      loggedIn: x,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: t,
                            utmCampaign: k.get("utm_campaign"),
                            utmContent: k.get("utm_content"),
                            utmMedium: k.get("utm_medium"),
                            utmSource: k.get("utm_source")
                          },
                          {
                            status: r
                          } = await (0, o.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: w,
                            query: a
                          }) ?? [];
                        re(r ? Co.success : Co.error), C({
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
                      landingSlide: B
                    }), K === Co.success && (0, r.jsx)(vo, {
                      content: h,
                      successSlide: G,
                      characterList: T,
                      linkAccountUrl: y,
                      linkMoreAccounts: () => {
                        C({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: y,
                          text: Ps.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: j.formatMessage(Ps.engagement_link_account)
                    }), K === Co.unlinked && (0, r.jsx)(yo, {
                      content: h,
                      unlinkedSlide: O,
                      returnUrl: Z,
                      giftId: e
                    }), K === Co.error && (0, r.jsx)(jo, {
                      errorSlide: $,
                      content: h
                    })]
                  })
                })]
              })
            })
          })
        }, Fs),
        Io = No;
      var Eo = a(25655);
      const Ao = "WwwWebOfferClaim";
      var zo = a(44293);
      const To = "RsgContentRating",
        Mo = {
          [be]: ({
            block: e
          }) => {
            const t = e.imageFilesCollection?.items,
              a = e.altText,
              n = fe(t?.map(e => e?.context)),
              s = t?.find(e => e.context === n) || t?.[0],
              o = s?.source?.url;
            return t && o && n ? (0, r.jsxs)(_e, {
              children: [t?.map((e, t) => {
                const a = e.sys.id + t,
                  s = e.source?.url,
                  o = ge.get(e?.context || n);
                return s ? (0, r.jsx)(ue, {
                  src: s,
                  media: o,
                  width: e.source?.width,
                  height: e.source?.height
                }, a) : null
              }), (0, r.jsx)(me, {
                src: o,
                alt: a
              })]
            }) : null
          },
          [de]: ({
            block: e
          }) => e ? (0, r.jsx)(ce, {
            src: e
          }) : null,
          [To]: ({
            block: e
          }) => {
            if (!e) return;
            const {
              titleSlug: t
            } = e;
            return t && (0, r.jsx)(zo.A, {
              titleSlug: t
            })
          },
          [we]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W();
            if (!e) return null;
            const {
              altText: a,
              backgroundColor: n,
              backgroundImage: s,
              link: o,
              foregroundImage: i
            } = e, c = (0, l.getOptimizedRsgImage)(s, "5:1", {
              preferModernFormat: !0
            });
            return (0, r.jsx)(he, {
              testId: "www-brand-banner",
              children: (0, r.jsx)(ke, {
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
                children: (0, r.jsxs)(w, {
                  href: o?.url ?? "",
                  children: [(0, r.jsx)(ve, {
                    src: c?.url ?? ""
                  }), i && (0, r.jsx)(xe, {
                    src: i
                  })]
                })
              })
            })
          },
          [We]: ({
            block: e,
            ...t
          }) => {
            const {
              blockPosition: a
            } = (0, s.useContext)(l.BlockRendererContext), {
              primaryAccentColor: n,
              secondaryAccentColor: o
            } = (0, s.useContext)(k), {
              trackEvent: i
            } = W(), c = e.cardsCollection?.items?.length ?? 0;
            if (e) return (0, r.jsxs)(ze, {
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
              children: [(0, r.jsxs)(Te, {
                children: [(0, r.jsx)(Me, {
                  level: 5,
                  children: e.title
                }), (0, r.jsx)(Le, {
                  appearance: e.navigationButtonAppearance ?? "secondary",
                  size: "SM",
                  override_backgroundColor: n,
                  override_textColor: o
                })]
              }), (0, r.jsx)(De, {
                children: e.cardsCollection?.items?.map((t, n) => (0, r.jsx)(Ge.Provider, {
                  value: {
                    totalItems: c,
                    itemIndex: n
                  },
                  children: (0, r.jsx)(Pe, {
                    variant: e.variant,
                    children: (0, r.jsx)(l.BlockRenderer, {
                      block: t,
                      blockPosition: a
                    }, e.sys.id)
                  }, `${t?.sys?.id}-${n}`)
                }, `${t?.sys?.id}-${n}`))
              })]
            })
          },
          [Je]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), {
              landscapeViewportBehavior: a,
              scrimColor: n,
              video: o,
              overlayElements: i,
              playbackBehavior: c
            } = e, {
              primaryAccentColor: d,
              secondaryAccentColor: _
            } = (0, s.useContext)(k), u = (0, se.Ub)(j.f.landscape), m = "play_once" === c, g = (0, s.useCallback)(e => t({
              event: "cta_other",
              text: "toggle " + (e ? "play" : "pause"),
              element_placement: "decorative video"
            }), []);
            if (!o) return null;
            const f = o.videoFilesCollection?.items?.find(e => "desktop" === e.context),
              b = o.videoFilesCollection?.items?.find(e => "mobile" === e.context),
              p = u ? f : b,
              h = p?.url ?? p?.upload?.url,
              v = p?.posterImage?.source?.url;
            return (0, r.jsxs)(Xe, {
              playOnce: m,
              landscapeViewportBehavior: a,
              scrimColor: n,
              children: [i && (0, r.jsx)(Ye, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: i
                })
              }), h && (0, r.jsx)(He, {
                appearance: d ? "accent" : "primary",
                override_backgroundColor: d,
                override_textColor: _,
                onToggle: g
              }), (0, r.jsx)(Ke, {
                src: h,
                poster: v,
                altText: o.posterImage?.altText,
                autoPlay: !0,
                muted: !0
              })]
            })
          },
          [et]: ({
            block: e
          }) => e ? (0, r.jsx)(Ze, {
            gradientStyle: e.style || "",
            thickness: e.thickness || "dimensions_25"
          }) : null,
          [yt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), {
              trackEvent: a
            } = W(), n = e.contentCollection?.items, l = n?.map(e => e.tinaId), c = (0, s.useMemo)(() => ((e, t) => {
              const a = ((e, t) => e.reduce((e, a) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(a, t), ""))(e, t);
              return o.gql`
        ${at}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(l, t.iso), [l]), {
              loading: d,
              data: _,
              error: u
            } = (0, o.useQuery)(c, {
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
            if (u) return (0, tt.captureMessage)("Failed to load Newswire Unit", tt.Severity.Error), null;
            if (!e || !n) return null;
            const g = n?.map(e => ({
              id: e.sys.id,
              tinaId: e.tinaId,
              block: _?.[`post${e.tinaId}`] ? _[`post${e.tinaId}`] : null
            })).filter(e => !!e.tinaId && e?.block?.created);
            if (d || !g?.length) return null;
            const f = g[0];
            return (0, r.jsx)(pt, {
              testId: "editorial-grid-module",
              children: (0, r.jsxs)(ht, {
                children: [(0, r.jsx)(S, {
                  showOn: "tabletMediumAndSmaller",
                  children: (0, r.jsx)(kt, {
                    testId: "newswire-carousel",
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: g?.map((e, t) => (0, r.jsx)(vt, {
                      children: (0, r.jsx)(gt, {
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
                  children: (0, r.jsx)(xt, {
                    testId: "primary-story",
                    children: (0, r.jsx)(gt, {
                      loading: d,
                      data: f.block,
                      id: f.id,
                      layout: "primary",
                      aspect: "wide",
                      handleStoryClick: m(f, 1),
                      testId: f.tinaId
                    })
                  })
                }), (0, r.jsx)(S, {
                  showOn: "tabletMediumAndLarger",
                  children: (0, r.jsx)(wt, {
                    children: g?.slice?.(1)?.map((e, t) => (0, r.jsx)(gt, {
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
          [bt]: ({
            block: e
          }) => {
            const [t] = (0, i.getLocale)(), a = e.tinaId, n = (0, s.useMemo)(() => ((e, t) => {
              const a = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}", allowNull: true) {\n        ...postFields\n    }\n`)(e, t);
              return o.gql`
        ${ft}

        ${r=a,`\nquery NewswirePosts {\n    ${r}\n}`}
    `;
              var r
            })(a, t.iso), [a]), {
              loading: l,
              data: c,
              error: d
            } = (0, o.useQuery)(n, {
              autoSetError: !1
            });
            if (d) return (0, tt.captureMessage)("Failed to load Newswire Unit", tt.Severity.Error), null;
            if (!e) return null;
            const _ = {
              tinaId: a,
              block: c?.[`post${a}`] ? c[`post${a}`] : null
            };
            return _.block ? (0, r.jsx)(gt, {
              loading: l,
              data: _.block,
              id: e.sys.id,
              layout: "secondary",
              aspect: "wide"
            }) : null
          },
          [na]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: `featured game section: ${e.game?.title}`
              }
            },
            children: (0, r.jsx)(ra, {
              block: e
            })
          }),
          [fa]: ({
            block: e
          }) => {
            const {
              colorMode: t
            } = (0, s.useContext)(k);
            if (!e) return;
            const {
              contentCollection: a,
              gap: n,
              theme: o
            } = e;
            if (!a?.items?.length) return null;
            const i = e.theme?.colorMode ?? t,
              l = (e => {
                if (!e) return "";
                const t = e?.replace("gap_", "");
                return y.LU.global.spacing.gap[t] ? y.LU.global.spacing.gap[t] : ""
              })(n);
            return (0, r.jsx)(v, {
              theme: o,
              children: (0, r.jsx)(_a, {
                gap: l,
                className: (0, h.m)(i ?? "dark"),
                children: a?.items.map(e => (0, r.jsx)(ga, {
                  contentCollection: e.contentCollection,
                  layout: e.layout
                }, e.sys.id))
              })
            })
          },
          [er]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: "featured content hero carousel"
              }
            },
            children: (0, r.jsx)(Za, {
              block: e
            })
          }),
          [sr]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, s.useContext)(l.BlockRendererContext), a = (0, se.Ub)(j.f.desktopSmallAndLarger);
            if (!e?.image) return null;
            const {
              image: n,
              title: o,
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
            return (0, r.jsxs)(ar, {
              children: [(0, r.jsx)(rr, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: n,
                  blockPosition: t
                })
              }), (0, r.jsxs)(nr, {
                textAlignment: u,
                children: [o && (0, r.jsx)(c.Heading, {
                  level: m,
                  asChild: !0,
                  children: (0, r.jsx)("h3", {
                    className: "_1cw0rgk2",
                    children: o
                  })
                }), d && (0, r.jsx)(l.RsgMdTextComponent, {
                  markdown: d,
                  bodySize: g
                })]
              })]
            })
          },
          [Ir]: ({
            block: e
          }) => {
            const {
              totalItems: t,
              itemIndex: a
            } = (0, s.useContext)(Ge), {
              trackEvent: n
            } = W(), o = !!e.cta?.link?.url, i = (0, r.jsxs)(vr, {
              gradientColor: e?.gradientColor,
              interactive: !0,
              children: [(0, r.jsx)(xr, {
                asChild: !0,
                children: (0, r.jsx)(Nt, {
                  alt: e?.ariaLabel,
                  src: e.backgroundImage,
                  context: "2:3"
                })
              }), (0, r.jsx)(jr, {
                image: e.logo,
                size: e.logoSize
              }), (0, r.jsxs)(wr, {
                children: [e.text && (0, r.jsx)(Rr, {
                  asChild: !0,
                  children: (0, r.jsx)(c.Body, {
                    children: e.text
                  })
                }), e.cta && (0, r.jsx)(Sr, {
                  appearance: e.cta.appearance,
                  iconLeft: e.cta.iconLeft,
                  iconRight: e.cta.iconRight,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  asChild: !0,
                  children: (0, r.jsx)("span", {
                    className: Nr({
                      appearance: e.cta.appearance
                    }),
                    tabIndex: -1,
                    children: e.cta?.text
                  })
                })]
              })]
            });
            return o ? (0, r.jsx)(aa, {
              block: e.cta,
              className: "_120g2g72",
              onClick: () => {
                n({
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
          [$r]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), {
              blockPosition: a
            } = (0, s.useContext)(l.BlockRendererContext), n = (e, {
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
              contentCollection: o,
              mobileAspectRatio: i = "1/1",
              desktopAspectRatio: c = "16/9"
            } = e, d = o?.items ?? [], _ = d.map(t => ({
              label: t.title,
              analyticsData: "analyticsData" in t ? t.analyticsData : e.analyticsData
            }));
            return (0, r.jsxs)(Dr, {
              items: d,
              children: [(0, r.jsx)(Wr, {
                mobileAspectRatio: i,
                desktopAspectRatio: c,
                children: !!d.length && d.map((e, t) => (0, r.jsx)(qr, {
                  index: t,
                  children: (0, r.jsx)(ar, {
                    children: (0, r.jsx)(rr, {
                      children: (0, r.jsx)(Vr, {
                        index: t,
                        children: (0, r.jsx)(l.BlockRenderer, {
                          block: e.image,
                          blockPosition: a
                        })
                      })
                    })
                  })
                }, e?.sys?.id))
              }), !!d.length && (0, r.jsx)(Pr, {
                children: _.map((e, t) => (0, r.jsx)(Gr, {
                  appearance: "ghost",
                  index: t,
                  onClick: n(t, e),
                  children: e.label
                }, e.label))
              })]
            })
          },
          [nn]: ({
            block: e
          }) => (0, r.jsx)(L.Provider, {
            value: {
              analyticsData: {
                element_placement: "images marquee section"
              }
            },
            children: (0, r.jsx)(rn, {
              block: e
            })
          }),
          [sn]: ({
            block: e,
            ...t
          }) => {
            const a = (0, s.useContext)(l.BlockRendererContext),
              {
                blockPosition: n
              } = a,
              {
                trackEvent: o
              } = W(),
              {
                primaryAccentColor: i,
                secondaryAccentColor: d
              } = (0, s.useContext)(k),
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
                  position: n?.blockIndex && Number.isFinite(n.blockIndex) ? n.blockIndex + 1 : void 0
                }
              };
            if (!e?.image) return null;
            const {
              image: m,
              caption: g,
              downloadButton: f,
              thumbnailAspectRatio: b,
              thumbnailObjectPosition: p,
              zoomControls: h
            } = e;
            return (0, r.jsxs)(c.Lightbox.Root, {
              altText: m?.altText || "",
              onOpenChange: e => {
                e && window.dispatchEvent(new CustomEvent("header:hideNav", {
                  detail: {
                    isHidden: !0
                  }
                }))
              },
              children: [(0, r.jsxs)(c.Lightbox.Trigger, {
                tabIndex: _,
                className: "_1ynyi8s0",
                style: {
                  aspectRatio: b,
                  ...(0, y.DI)({
                    [c.Lightbox.CssVars.TriggerBorder]: i,
                    [c.Lightbox.CssVars.TriggerIconBg]: i,
                    [c.Lightbox.CssVars.TriggerIconFg]: d,
                    [c.Lightbox.CssVars.TriggerIconBgActive]: i,
                    [c.Lightbox.CssVars.TriggerIconFgActive]: d
                  })
                },
                onClick: () => {
                  o({
                    event: "card_click",
                    ...u()
                  }, e)
                },
                children: [(0, r.jsx)(c.Lightbox.Thumbnail, {
                  src: m?.source?.url,
                  style: {
                    objectPosition: p
                  }
                }), (0, r.jsx)(c.Lightbox.OpenIcon, {
                  className: "_1ynyi8s2",
                  asChild: !0,
                  children: (0, r.jsx)(pa.Maximize2, {
                    label: ""
                  })
                })]
              }), (0, r.jsxs)(c.Lightbox.Portal, {
                children: [(0, r.jsx)(c.Lightbox.Overlay, {}), (0, r.jsxs)(c.Lightbox.Content, {
                  children: [(0, r.jsx)(c.Lightbox.ZoomPan, {
                    children: (0, r.jsx)(c.Lightbox.Image, {
                      className: "_1ynyi8s1",
                      src: m?.source?.url
                    })
                  }), (0, r.jsxs)(c.Lightbox.Controls, {
                    children: [g && (0, r.jsx)(c.Lightbox.Caption, {
                      children: g
                    }), (0, r.jsx)(c.Lightbox.Close, {
                      onPress: () => {
                        o({
                          event: "modal_close",
                          ...u()
                        }, e)
                      }
                    }), h && (0, r.jsx)(c.Lightbox.Zoom, {}), f && (0, r.jsx)(c.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          },
          [on]: ({
            block: e
          }) => {
            const {
              trackEvent: t
            } = W(), a = e?.image?.imageFilesCollection?.items, n = e?.image?.altText, s = fe(a?.map(e => e?.context)), o = a?.find(e => e.context === s) || a?.[0], i = o?.source?.url, l = e.link?.url;
            return a && i && s && l ? (0, r.jsx)("div", {
              className: "_1eo5pzj0",
              children: (0, r.jsx)(w, {
                href: l,
                className: "_1eo5pzj1",
                onClick: () => {
                  t({
                    event: "cta_other"
                  }, e)
                },
                children: (0, r.jsxs)(_e, {
                  children: [a?.map((e, t) => {
                    const a = e.sys.id + t,
                      n = e.source?.url,
                      o = ge.get(e?.context || s);
                    return n ? (0, r.jsx)(ue, {
                      src: n,
                      media: o,
                      width: e.source?.width,
                      height: e.source?.height
                    }, a) : null
                  }), (0, r.jsx)(me, {
                    src: i,
                    alt: n
                  })]
                })
              })
            }) : null
          },
          [Sn]: ({
            block: e
          }) => {
            const t = (0, i.useIntl)(),
              {
                trackEvent: a
              } = W();
            if (!e) return null;
            const n = e.cardsCollection?.items || [],
              [s, ...o] = n,
              l = (e, t) => ne[e]?.[t] ?? "1:1",
              c = (e, t) => () => {
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
            return (0, r.jsxs)(_n, {
              children: [(0, r.jsx)(S, {
                showOn: "mobile",
                forceMount: !0,
                children: (0, r.jsxs)(un, {
                  gridType: e.variant,
                  children: [(0, r.jsx)(gn, {
                    type: re(0),
                    children: (0, r.jsx)(w, {
                      href: s.link?.url,
                      target: "_blank",
                      title: t.formatMessage(yn.masonry_grid_external_store_link),
                      onClick: () => c(s, 0),
                      children: (0, r.jsx)(Rn, {
                        card: s,
                        context: "4:5",
                        size: "medium"
                      })
                    })
                  }), (0, r.jsx)(fn, {
                    defaultSlide: 0,
                    onCarouselSwipe: () => a({
                      event: "carousel_swipe"
                    }),
                    children: o.map((e, a) => (0, r.jsx)(bn, {
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(yn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: jn,
                        children: (0, r.jsx)(Rn, {
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
                children: (0, r.jsx)(mn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = re(a),
                      s = l("tabletSmall", n),
                      o = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(gn, {
                      type: n,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(yn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: jn,
                        children: (0, r.jsx)(Rn, {
                          card: e,
                          context: s,
                          size: o
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletMedium",
                forceMount: !0,
                children: (0, r.jsx)(mn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = re(a),
                      s = l("tabletMedium", n),
                      o = 0 === a ? "medium" : "small";
                    return (0, r.jsx)(gn, {
                      type: n,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(yn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: jn,
                        children: (0, r.jsx)(Rn, {
                          card: e,
                          context: s,
                          size: o
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "tabletLarge",
                forceMount: !0,
                children: (0, r.jsx)(mn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = re(a),
                      s = l("tabletLarge", n),
                      o = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(gn, {
                      type: n,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(yn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: jn,
                        children: (0, r.jsx)(Rn, {
                          card: e,
                          context: s,
                          size: o
                        })
                      })
                    }, e.sys.id)
                  })
                })
              }), (0, r.jsx)(S, {
                showOn: "desktopSmallAndLarger",
                forceMount: !0,
                children: (0, r.jsx)(mn, {
                  gridType: e.variant,
                  children: n.map((e, a) => {
                    const n = re(a),
                      s = l("desktopSmallAndLarger", n),
                      o = 0 === a ? "large" : "medium";
                    return (0, r.jsx)(gn, {
                      type: n,
                      children: (0, r.jsx)(w, {
                        href: e.link?.url,
                        target: "_blank",
                        title: t.formatMessage(yn.masonry_grid_external_store_link),
                        onClick: () => c(e, a),
                        className: jn,
                        children: (0, r.jsx)(Rn, {
                          card: e,
                          context: s,
                          size: o
                        })
                      })
                    }, e.sys.id)
                  })
                })
              })]
            })
          },
          [On]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const a = (0, i.useIntl)(),
              n = (0, o.useRockstarTokenPing)(),
              {
                loggedIn: d,
                data: u,
                loading: m
              } = (0, b.useRockstarUser)(),
              g = (0, _.useNavigate)(),
              [{
                iso: f
              }] = (0, i.getLocale)(),
              p = (0, o.toScLocaleString)(f),
              {
                login: h
              } = (0, o.getConfigForDomain)(),
              k = (0, Nn.A)(),
              [v] = (0, _.useSearchParams)(),
              x = "true" === v.get("marketing"),
              [w, y] = (0, s.useState)(!0),
              j = {
                lang: p,
                location: location.pathname,
                login: h,
                navigate: g,
                www: k.sites.www
              },
              C = {
                ...u,
                isFromAuth: x,
                loggedIn: d,
                pingBearer: n,
                userLoading: m
              },
              R = Pn(j, C),
              {
                dialog: S,
                urls: N,
                handleSubscribeButton: I,
                isButtonLoading: E,
                isLoading: A,
                isSubscribed: z,
                setShowDialog: T,
                showDialog: M
              } = R;
            let D;
            D = null === d || d && A ? "loading" : "ready";
            const F = "ready" == (m ? "loading" : "ready"),
              P = "ready" === D;
            if ((0, s.useEffect)(() => {
                F && y(d && !z || !d)
              }, [F, d, z]), (0, s.useEffect)(() => {
                t && F && P && t(M || w)
              }, [w, t, F, P, M]), !e) return null;
            const L = S?.buttons || [{
                buttonText: a.formatMessage(Tn.ns_ok_button_text),
                onClick: () => {
                  T(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: S?.showManagePreferences ? a.formatMessage(Tn.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: N.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              G = (e, t) => (0, r.jsx)(c.Heading, {
                level: 3,
                className: "_4fo4mk1",
                children: t
              }),
              W = {
                [l.ContentfulTypes.BLOCKS.HEADING_1]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_2]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_3]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_4]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_5]: G,
                [l.ContentfulTypes.BLOCKS.HEADING_6]: G
              },
              B = d && !P;
            return (0, r.jsxs)(r.Fragment, {
              children: [w && (0, r.jsx)(Ln, {
                children: B ? (0, r.jsx)(En.A, {}) : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(Gn, {
                    asChild: !0,
                    children: e.image && (0, r.jsx)(ce, {
                      src: e.image
                    })
                  }), (0, r.jsxs)(Wn, {
                    children: [e.textContent && (0, r.jsx)(Bn, {
                      children: (0, r.jsx)(l.RsgMdTextComponent, {
                        markdown: e.textContent,
                        rsgRichTextOptions: {
                          renderNode: W
                        }
                      })
                    }), (0, r.jsx)(qn, {
                      onClick: I,
                      isDisabled: E,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), S && (0, r.jsx)(In.A, {
                icon: S.icon,
                title: a.formatMessage(S.heading),
                secondaryText: a.formatMessage(S.bodyText),
                closeOnOutsideClick: S.closeOnOutsideClick,
                buttons: L,
                showDialog: M,
                onClose: () => T(!1)
              })]
            })
          },
          [os]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              trackRichTextHyperlink: a
            } = W();
            return (0, r.jsxs)(Yn, {
              colorMode: "dark",
              backgroundColor: e.backgroundColor,
              gradientEnabled: e.enableGradient,
              imagePlacement: e.imagePlacement,
              children: [(0, r.jsx)(Qn, {
                image: e.backgroundImage
              }), (0, r.jsxs)(Jn, {
                contentAlignment: e.contentAlignment,
                children: [(0, r.jsx)(ss, {
                  children: e.badge
                }), (0, r.jsx)(Zn, {
                  image: e.foregroundImage,
                  size: e.foregroundImageSize
                }), (0, r.jsxs)(rs, {
                  children: [(0, r.jsx)(ts, {
                    level: 4,
                    children: e.headline
                  }), (0, r.jsx)(as, {
                    size: "MD",
                    children: e.description
                  })]
                }), e.cta && (0, r.jsx)(es, {
                  appearance: e.cta.appearance,
                  override_backgroundColor: e.cta.backgroundColor,
                  size: "MD",
                  onPress: (n = e.cta, () => t(n.analyticsData, n)),
                  asChild: !0,
                  children: (0, r.jsx)("a", {
                    href: e.cta.link?.url,
                    children: e.cta.text
                  })
                }), (0, r.jsx)(ns, {
                  markdown: e.legalText,
                  onHyperlinkClick: e => a(e)
                })]
              })]
            });
            var n
          },
          [G]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, s.useContext)(l.BlockRendererContext), {
              trackEvent: a,
              useTrackPageSectionImpression: n
            } = W(), {
              ref: i
            } = n(e.analyticsData), [c, d] = (0, s.useState)(!1), [_, u] = (0, s.useState)(!0), {
              isMobile: m
            } = (0, o.useWindowResize)(), g = e.title, f = e.cta, b = g || f;
            (0, s.useEffect)(() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && d(!0)
              } catch {
                d(!1)
              }
            }, [e]);
            const p = (0, s.useCallback)(e => {
              u(e)
            }, []);
            if (!e || !_) return null;
            const k = {
                topPaddingMultiplier: P[e.topPadding] ?? P.default,
                bottomPaddingMultiplier: P[e.bottomPadding] ?? P.default,
                backgroundCss: e.backgroundCss,
                backgroundImage: m ? e.mobileBackgroundImage?.source?.url : e.desktopBackgroundImage?.source?.url,
                className: (0, h.m)(e.theme?.colorMode ?? "dark")
              },
              x = (0, r.jsxs)(z, {
                ref: i,
                ...k,
                children: [b && (0, r.jsxs)(T, {
                  children: [g && (0, r.jsx)(M, {
                    level: 2,
                    children: g
                  }), f?.text && f.link?.url && (0, r.jsx)(D, {
                    label: f.text,
                    url: f.link.url,
                    isExternal: c,
                    iconRight: f.iconRight?.icon,
                    onClick: () => a(f?.analyticsData, f),
                    children: f.text
                  })]
                }), e.contentCollection?.items && (0, r.jsx)(F, {
                  children: e.contentCollection.items?.map(e => (0, r.jsx)(l.BlockRenderer, {
                    block: e,
                    blockPosition: t,
                    renderSectionWrapper: p
                  }, e.sys?.id))
                })]
              });
            let w;
            return w = (0, r.jsx)(v, {
              theme: e.theme,
              children: x
            }), w
          },
          [us]: ({
            block: e
          }) => {
            if (!e) return null;
            const {
              cta: t
            } = e;
            return (0, r.jsx)(is, {
              children: (0, r.jsxs)(ls, {
                children: [(0, r.jsxs)(cs, {
                  children: [(0, r.jsx)(ds, {
                    altText: e.title
                  }), (0, r.jsx)(_s, {
                    children: e.description
                  })]
                }), t && (0, r.jsx)(aa, {
                  block: t,
                  size: "MD"
                })]
              })
            })
          },
          [Rs]: ({
            block: e
          }) => {
            const {
              primaryAccentColor: t,
              headerTextColor: a
            } = (0, s.useContext)(k), {
              alignment: n,
              badge: o,
              eyebrow: i,
              eyebrowSize: c,
              header: d,
              headerSize: _,
              body: u,
              bodySize: m,
              ctasCollection: g,
              footnote: f,
              headerTextWrap: b,
              bodyTextWrap: p
            } = e;
            return (0, r.jsxs)(ks, {
              align: n || "left",
              children: [o && (0, r.jsx)(vs, {
                children: o
              }), (0, r.jsxs)(xs, {
                bodyTextWrap: p,
                children: [i && (0, r.jsx)(ws, {
                  size: c,
                  children: i
                }), d && (0, r.jsx)(ys, {
                  headerSize: _,
                  textColor: a,
                  headerTextWrap: b,
                  children: d
                }), u && (0, r.jsx)(js, {
                  asChild: !0,
                  children: (0, r.jsx)(l.RsgMdTextComponent, {
                    markdown: u,
                    bodySize: m
                  })
                })]
              }), g && g?.items?.length > 0 && (0, r.jsx)(Cs, {
                children: g.items.map(e => (0, r.jsx)(aa, {
                  block: e,
                  backgroundColor: t
                }, e.text))
              }), f && (0, r.jsx)(l.RsgMdTextComponent, {
                markdown: f,
                bodySize: "XS"
              })]
            })
          },
          [As]: ({
            block: e
          }) => {
            const {
              blockPosition: t
            } = (0, s.useContext)(l.BlockRendererContext);
            if (!e?.content) return null;
            const {
              image: a,
              content: n,
              variant: o
            } = e;
            return (0, r.jsxs)(Ns, {
              variant: o ?? "image_right",
              children: [(0, r.jsx)(Is, {
                altText: a?.altText ?? "",
                src: a?.source?.url ?? ""
              }), (0, r.jsx)(Es, {
                children: (0, r.jsx)(l.BlockRenderer, {
                  block: n,
                  blockPosition: t
                })
              })]
            })
          },
          [Ms]: ({
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
                    return (0, r.jsx)(Ts(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              })
            })
          },
          [Ao]: ({
            block: e
          }) => {
            const {
              data: t
            } = (0, o.useQuery)(Eo.MetaUrlInfo, {
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
            return (0, r.jsx)(Io, {
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
        Do = ({
          data: e
        }) => (0, r.jsx)(m, {
          children: (0, r.jsx)(l.PageRenderer, {
            data: e.items[0],
            customBlocks: Mo,
            children: (0, r.jsx)(Y, {})
          })
        }),
        Fo = ({
          slug: e
        }) => {
          let t = e;
          const {
            data: a,
            loading: n
          } = (0, l.useContentfulQuery)({
            query: d.wwwPageQuery,
            variables: {
              slug: t
            }
          });
          return !n && a && a.wwwPageCollection.items[0] ? (0, r.jsx)(Do, {
            data: a.wwwPageCollection
          }) : null
        },
        Po = (Lo = ({
          slug: e
        }) => {
          const [{
            iso: t
          }] = (0, i.getLocale)(), a = (0, s.useCallback)(() => {
            Z.u.refresh()
          }, []);
          return (0, r.jsx)(n.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            className: "_1dx15kv0",
            locale: t,
            onPlatformScaleChange: a,
            children: (0, r.jsx)(Fo, {
              slug: e
            })
          })
        }, (0, i.withIntl)(Lo, Q));
      var Lo
    },
    47279(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => c,
        C: () => i
      });
      var r = a(54028),
        n = a.n(r),
        s = a(15963),
        o = a.n(s);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
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
        c = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = l.findIndex(t => Object.entries(t.sites).findIndex(([t, r]) => r === a && (e = {
            site: t,
            subDomain: r
          }, !0)) >= 0), s = l[r >= 0 ? r : 0], i = l.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), o()(n()({}, i, {
            currentSite: e
          }, s), "fallbackEnvironment")
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
        var t = s(e);
        return a(t)
      }

      function s(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = s, e.exports = n, n.id = 5328
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
        "./esrb_m.svg": 87256,
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
        var t = s(e);
        return a(t)
      }

      function s(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = s, e.exports = n, n.id = 36672
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
        "./esrb_m.svg": 87256,
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
        var t = s(e);
        return a(t)
      }

      function s(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = s, e.exports = n, n.id = 8194
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
    87256(e) {
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