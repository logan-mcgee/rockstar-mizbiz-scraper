try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4ca088cb-b66c-4903-a6bc-ab8501de9525", e._sentryDebugIdIdentifier = "sentry-dbid-4ca088cb-b66c-4903-a6bc-ab8501de9525")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [5670, 5854], {
    1454: (e, a, i) => {
      "use strict";
      var o = i(2229),
        n = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function t(e, a, i) {
        var o, t = {},
          l = null,
          c = null;
        for (o in void 0 !== i && (l = "" + i), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) r.call(a, o) && !d.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: t,
          _owner: s.current
        }
      }
      a.jsx = t, a.jsxs = t
    },
    1936: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var o = i(2229),
        n = i(5966);
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
      var s = i(4235),
        d = i(5854);
      const t = e => {
          let {
            hashes: a,
            hover: i,
            loop: n,
            sound: s
          } = e;
          const {
            desktop: t = null,
            mobile: c = null
          } = a, [f, u] = (0, o.useState)(!0), m = {
            autoPlay: !i,
            hover: i,
            loop: n,
            sound: s,
            muted: f
          };
          return (0, d.jsxs)("div", {
            onClick: () => u(!f),
            children: [t && (0, d.jsx)(l, {
              className: [c ? r.hiddenMobile : "", r.videoDesktop].join(" "),
              hash: t,
              ...m
            }), c && (0, d.jsx)(l, {
              className: [t ? r.hiddenLarge : "", r.videoMobile].join(" "),
              hash: c,
              ...m
            }), m.sound ? (0, d.jsx)("div", {
              className: [r.muteBtn, f ? "" : r.unMuted].join(" ")
            }) : ""]
          })
        },
        l = e => {
          let {
            className: a,
            hash: i,
            hover: t,
            autoPlay: l,
            loop: c,
            muted: f,
            sound: u
          } = e;
          const {
            data: m
          } = (0, n.useQuery)(s.GifInfo, {
            variables: {
              hash: i
            }
          }), b = (0, o.useRef)();
          return m ? (0, d.jsx)("div", {
            className: [a, r.video, u ? r.mutable : ""].join(" "),
            onMouseEnter: () => t && void b.current.play(),
            onMouseLeave: () => t && (b.current.pause(), void(b.current.currentTime = 0)),
            children: (0, d.jsx)("video", {
              ref: b,
              src: m.gifInfo.file,
              autoPlay: l,
              loop: c,
              muted: f,
              playsInline: !0
            })
          }) : null
        },
        c = e => {
          let {
            hash: a,
            style: i,
            title: o,
            caption: n,
            hero: s = !1,
            loop: l = !0,
            sound: c = !1,
            hover: f = !1
          } = e;
          if (!a) return null;
          const u = "object" == typeof a ? a : Object.keys(a).map((e => ({
            [e]: a[e]
          })));
          return (0, d.jsxs)("figure", {
            className: `${r.gifWrapper} ${s?r.gifWrapperHero:""}`,
            style: i,
            children: [(0, d.jsx)(t, {
              hashes: u,
              hover: f,
              loop: l,
              sound: c,
              title: o ?? "R* Games"
            }), n && (0, d.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          })
        }
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
          var o = e.type;
          "NamedType" === o.kind && a.add(o.name.value)
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
      var o = {};

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var o = e.definitions[i];
          if (o.name && o.name.value == a) return o
        }
      }

      function r(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = o[a] || new Set,
          s = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var t = d;
          d = new Set, t.forEach((function(e) {
            s.has(e) || (s.add(e), (o[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var o = n(e, a);
          o && i.definitions.push(o)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), o[e.name.value] = a
        }
      })), e.exports = a, e.exports.GifsList = r(a, "GifsList"), e.exports.GifInfo = r(a, "GifInfo")
    },
    5670: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => s
      });
      var o = i(9623),
        n = i(1936),
        r = i(5854);
      const s = () => {
        const {
          hashId: e
        } = (0, o.useParams)(), [a] = (0, o.useSearchParams)(), i = !("false" === a.get("loop")), s = "true" === a.get("sound"), d = a.has("hover");
        return (0, r.jsx)(n.A, {
          hash: {
            desktop: e
          },
          hover: d,
          loop: i,
          sound: s
        })
      }
    },
    5854: (e, a, i) => {
      "use strict";
      e.exports = i(1454)
    }
  }
]);