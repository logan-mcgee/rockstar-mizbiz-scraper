try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a6942299-c384-484b-bcf9-5b3ae0c1ecd5", e._sentryDebugIdIdentifier = "sentry-dbid-a6942299-c384-484b-bcf9-5b3ae0c1ecd5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [954, 8333], {
    954: (e, a, i) => {
      "use strict";
      e.exports = i(2834)
    },
    2834: (e, a, i) => {
      "use strict";
      var n = i(2229),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function t(e, a, i) {
        var n, t = {},
          l = null,
          f = null;
        for (n in void 0 !== i && (l = "" + i), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (f = a.ref), a) r.call(a, n) && !s.hasOwnProperty(n) && (t[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === t[n] && (t[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: t,
          _owner: d.current
        }
      }
      a.jsx = t, a.jsxs = t
    },
    4235: e => {
      var a = {
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
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function o(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }

      function r(e, a) {
        var i = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = n[a] || new Set,
          d = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var t = s;
          s = new Set, t.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var n = o(e, a);
          n && i.definitions.push(n)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.GifsList = r(a, "GifsList"), e.exports.GifInfo = r(a, "GifInfo")
    },
    8333: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => n
      });
      const n = i(9088).A
    },
    9088: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => f
      });
      var n = i(2229),
        o = i(5966);
      const r = {
        hiddenMobile: "rockstargames-modules-core-gif-viewerabb297e5eb4b30107497c5af3b977524",
        hiddenLarge: "rockstargames-modules-core-gif-viewerb8ebff1e6c6fc120a77104f6a7edc21d",
        "hidden-sm": "rockstargames-modules-core-gif-vieweraac271d5fdbd3f76a2f95154f54f56f3",
        "show-sm": "rockstargames-modules-core-gif-viewerd8b46b1e13206714908c4ba62343bb7d",
        "hidden-md": "rockstargames-modules-core-gif-viewerea1e161efb3286f18acc4ca224776b52",
        "show-md": "rockstargames-modules-core-gif-viewere3451141fab2f5a3cc092cfe4cc95654",
        "hidden-lg": "rockstargames-modules-core-gif-viewere1e026f5e3c3b3dbeca879b01e49da10",
        "show-lg": "rockstargames-modules-core-gif-viewerc7ff5218a9d689524fb1f41925045edc",
        "hidden-xl": "rockstargames-modules-core-gif-viewerb76b86f8931dabffacb746e1088bd06f",
        "show-xl": "rockstargames-modules-core-gif-viewerea13d7c61982adf247792719febab3e8",
        "hidden-xxl": "rockstargames-modules-core-gif-viewerbc195247a1f0dd5b7d5f5f94a70d90a0",
        "show-xxl": "rockstargames-modules-core-gif-viewerc56987d4c3541e92c7f916ad8f648e23",
        "full-width": "rockstargames-modules-core-gif-viewera44ea239a96fa21be5803aa8597935f3",
        "reverse-mobile": "rockstargames-modules-core-gif-viewerd7a211eb98231158320e9010496f41ad",
        "center-children": "rockstargames-modules-core-gif-viewerf2784956deb5076d08b115ab9f0de65b",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-gif-viewercc8c0e3543ec9ea6e406cd5d60661547",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-gif-viewere2e4a9d2a67fa93b20ba2d2c3bfb18d6",
        "horizontal-line": "rockstargames-modules-core-gif-viewerb33830da2f964a317241cf53c7e5773a",
        gold: "rockstargames-modules-core-gif-viewerf70025cd962a532f67afe3f67f16efb7",
        gifWrapper: "rockstargames-modules-core-gif-viewerf9ae1cdda1f485a1da00edfec5947239",
        gifWrapperHero: "rockstargames-modules-core-gif-viewerf1ae0b7e0b8f54f7883d7a5810ff67d1",
        muteBtn: "rockstargames-modules-core-gif-viewera385e95337be85fde170dc13e35beb24",
        unMuted: "rockstargames-modules-core-gif-viewere906711c6535a405f565f647a9db24d6",
        video: "rockstargames-modules-core-gif-viewerc4b1d579f91603be5e73eec4ba724711",
        videoMobile: "rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7",
        videoDesktop: "rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09",
        mutable: "rockstargames-modules-core-gif-viewera093729df8a4878dc8a2f4ff1af1eada"
      };
      var d = i(4235),
        s = i(954);
      const t = e => {
          let {
            hashes: a,
            hover: i,
            loop: o,
            sound: d
          } = e;
          const {
            desktop: t = null,
            mobile: f = null
          } = a, [c, u] = (0, n.useState)(!0), m = {
            autoPlay: !i,
            hover: i,
            loop: o,
            sound: d,
            muted: c
          };
          return (0, s.jsxs)("div", {
            onClick: () => u(!c),
            children: [t && (0, s.jsx)(l, {
              className: [f ? r.hiddenMobile : "", r.videoDesktop].join(" "),
              hash: t,
              ...m
            }), f && (0, s.jsx)(l, {
              className: [t ? r.hiddenLarge : "", r.videoMobile].join(" "),
              hash: f,
              ...m
            }), m.sound ? (0, s.jsx)("div", {
              className: [r.muteBtn, c ? "" : r.unMuted].join(" ")
            }) : ""]
          })
        },
        l = e => {
          let {
            className: a,
            hash: i,
            hover: t,
            autoPlay: l,
            loop: f,
            muted: c,
            sound: u
          } = e;
          const {
            data: m
          } = (0, o.useQuery)(d.GifInfo, {
            variables: {
              hash: i
            }
          }), b = (0, n.useRef)();
          return m ? (0, s.jsx)("div", {
            className: [a, r.video, u ? r.mutable : ""].join(" "),
            onMouseEnter: () => t && void b.current.play(),
            onMouseLeave: () => t && (b.current.pause(), void(b.current.currentTime = 0)),
            children: (0, s.jsx)("video", {
              ref: b,
              src: m.gifInfo.file,
              autoPlay: l,
              loop: f,
              muted: c,
              playsInline: !0
            })
          }) : null
        },
        f = e => {
          let {
            hash: a,
            style: i,
            title: n,
            caption: o,
            hero: d = !1,
            loop: l = !0,
            sound: f = !1,
            hover: c = !1
          } = e;
          if (!a) return null;
          const u = "object" == typeof a ? a : Object.keys(a).map((e => ({
            [e]: a[e]
          })));
          return (0, s.jsxs)("figure", {
            className: `${r.gifWrapper} ${d?r.gifWrapperHero:""}`,
            style: i,
            children: [(0, s.jsx)(t, {
              hashes: u,
              hover: c,
              loop: l,
              sound: f,
              title: n ?? "R* Games"
            }), o && (0, s.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            })]
          })
        }
    }
  }
]);