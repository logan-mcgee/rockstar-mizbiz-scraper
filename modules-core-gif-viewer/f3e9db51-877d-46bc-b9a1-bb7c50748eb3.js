! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f3e9db51-877d-46bc-b9a1-bb7c50748eb3", e._sentryDebugIdIdentifier = "sentry-dbid-f3e9db51-877d-46bc-b9a1-bb7c50748eb3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [162], {
    516: (e, a, i) => {
      "use strict";
      var o = i(784),
        n = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function t(e, a, i) {
        var o, t = {},
          c = null,
          l = null;
        for (o in void 0 !== i && (c = "" + i), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (l = a.ref), a) r.call(a, o) && !s.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: t,
          _owner: d.current
        }
      }
      a.jsx = t, a.jsxs = t
    },
    632: (e, a, i) => {
      "use strict";
      e.exports = i(516)
    },
    362: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var o = i(784),
        n = i(407);
      const r = {
        hiddenMobile: "rockstargames-modules-core-gif-viewerff7b0b8c8b5337d09e0494100b0f4bca",
        hiddenLarge: "rockstargames-modules-core-gif-viewerb5f7015455ef0b013385884e296f9b47",
        "hidden-sm": "rockstargames-modules-core-gif-viewerb0a40020f6ade9f5b03e6dd84fd7c720",
        "show-sm": "rockstargames-modules-core-gif-viewerfa122440b58b070f7f9c3662667d69d5",
        "hidden-md": "rockstargames-modules-core-gif-viewerb58766ad9eea6ff40140e4ef26951e73",
        "show-md": "rockstargames-modules-core-gif-viewerbe84ec0d49567df75d78020ee3d45e14",
        "hidden-lg": "rockstargames-modules-core-gif-viewerea510dcb151202cb03a0b3ce54398392",
        "show-lg": "rockstargames-modules-core-gif-viewerb3e2fdecdc32b835863ad709836ffc2c",
        "hidden-xl": "rockstargames-modules-core-gif-viewerb73b69d88edcbbbc9c8707ae3f10a828",
        "show-xl": "rockstargames-modules-core-gif-viewerfa85b6b705736353ebd0c1fe0900fec9",
        "hidden-xxl": "rockstargames-modules-core-gif-viewere89ace7cb51701236f21a3e894bec910",
        "show-xxl": "rockstargames-modules-core-gif-vieweraf703bcdb0523f180292f48ee186094f",
        "full-width": "rockstargames-modules-core-gif-viewera58cf9f712138e9ab66e70885c7dceda",
        "reverse-mobile": "rockstargames-modules-core-gif-viewere0c204bbaa93b473c48b9117e0c0e94d",
        "center-children": "rockstargames-modules-core-gif-viewercffbdde88c4db597c274c8cd3fb70310",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-gif-viewerbf7a717f6d28dd40467ba533fff67d10",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-gif-viewerae0964e311b92ceaebe99b540d3beb5a",
        "horizontal-line": "rockstargames-modules-core-gif-viewerf02660d108110f8ad4dfd0be18b027f2",
        gold: "rockstargames-modules-core-gif-viewerfc1a3a7680469b49a8fc20a092e1f4c6",
        gifWrapper: "rockstargames-modules-core-gif-viewerbee71bf6036d57496c2e791ac47b1b9e",
        gifWrapperHero: "rockstargames-modules-core-gif-viewerd7f36cad6d4e4eb32ec553bf74812236",
        muteBtn: "rockstargames-modules-core-gif-viewerdf3191e53d035955056329ece4a7025c",
        unMuted: "rockstargames-modules-core-gif-vieweraddfba273b85b13c083805654d3dbbf9",
        video: "rockstargames-modules-core-gif-viewerc4d9e6f3d76dc0e22ee8914f875a37f6",
        videoMobile: "rockstargames-modules-core-gif-viewerc6bb570ca58519071f681f317410e089",
        videoDesktop: "rockstargames-modules-core-gif-viewerc29cfac86e2c81ed526dac35af666f9d",
        mutable: "rockstargames-modules-core-gif-viewerd7de22cf0597def1dd4ca337c1401d4b"
      };
      var d = i(614),
        s = i(632);
      const t = e => {
          let {
            hashes: a,
            hover: i,
            loop: n,
            sound: d
          } = e;
          const {
            desktop: t = null,
            mobile: l = null
          } = a, [f, u] = (0, o.useState)(!0), m = {
            autoPlay: !i,
            hover: i,
            loop: n,
            sound: d,
            muted: f
          };
          return (0, s.jsxs)("div", {
            onClick: () => u(!f),
            children: [t && (0, s.jsx)(c, {
              className: [l ? r.hiddenMobile : "", r.videoDesktop].join(" "),
              hash: t,
              ...m
            }), l && (0, s.jsx)(c, {
              className: [t ? r.hiddenLarge : "", r.videoMobile].join(" "),
              hash: l,
              ...m
            }), m.sound ? (0, s.jsx)("div", {
              className: [r.muteBtn, f ? "" : r.unMuted].join(" ")
            }) : ""]
          })
        },
        c = e => {
          let {
            className: a,
            hash: i,
            hover: t,
            autoPlay: c,
            loop: l,
            muted: f,
            sound: u
          } = e;
          const {
            data: m
          } = (0, n.useQuery)(d.GifInfo, {
            variables: {
              hash: i
            }
          }), b = (0, o.useRef)();
          return m ? (0, s.jsx)("div", {
            className: [a, r.video, u ? r.mutable : ""].join(" "),
            onMouseEnter: () => t && void b.current.play(),
            onMouseLeave: () => t && (b.current.pause(), void(b.current.currentTime = 0)),
            children: (0, s.jsx)("video", {
              ref: b,
              src: m.gifInfo.file,
              autoPlay: c,
              loop: l,
              muted: f,
              playsInline: !0
            })
          }) : null
        },
        l = e => {
          let {
            hash: a,
            style: i,
            title: o,
            caption: n,
            hero: d = !1,
            loop: c = !0,
            sound: l = !1,
            hover: f = !1
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
              hover: f,
              loop: c,
              sound: l,
              title: o ?? "R* Games"
            }), n && (0, s.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          })
        }
    },
    162: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => d
      });
      var o = i(410),
        n = i(362),
        r = i(632);
      const d = () => {
        const {
          hashId: e
        } = (0, o.useParams)(), [a] = (0, o.useSearchParams)(), i = !("false" === a.get("loop")), d = "true" === a.get("sound"), s = a.has("hover");
        return (0, r.jsx)(n.A, {
          hash: {
            desktop: e
          },
          hover: s,
          loop: i,
          sound: d
        })
      }
    },
    614: e => {
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
          d = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var t = s;
          s = new Set, t.forEach((function(e) {
            d.has(e) || (d.add(e), (o[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
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
    }
  }
]);