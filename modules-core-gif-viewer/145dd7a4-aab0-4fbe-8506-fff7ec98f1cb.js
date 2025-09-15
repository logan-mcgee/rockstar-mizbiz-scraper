try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "145dd7a4-aab0-4fbe-8506-fff7ec98f1cb", e._sentryDebugIdIdentifier = "sentry-dbid-145dd7a4-aab0-4fbe-8506-fff7ec98f1cb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [2295, 9741], {
    2295: (e, a, i) => {
      "use strict";
      e.exports = i(9245)
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
    5843: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var n = i(2295),
        o = i(2229),
        r = i(5966);
      const d = {
        "center-children": "rockstargames-modules-core-gif-viewerf2784956deb5076d08b115ab9f0de65b",
        "full-width": "rockstargames-modules-core-gif-viewera44ea239a96fa21be5803aa8597935f3",
        gifWrapper: "rockstargames-modules-core-gif-viewerf9ae1cdda1f485a1da00edfec5947239",
        gifWrapperHero: "rockstargames-modules-core-gif-viewerf1ae0b7e0b8f54f7883d7a5810ff67d1",
        gold: "rockstargames-modules-core-gif-viewerf70025cd962a532f67afe3f67f16efb7",
        "hidden-lg": "rockstargames-modules-core-gif-viewere1e026f5e3c3b3dbeca879b01e49da10",
        "hidden-md": "rockstargames-modules-core-gif-viewerea1e161efb3286f18acc4ca224776b52",
        "hidden-sm": "rockstargames-modules-core-gif-vieweraac271d5fdbd3f76a2f95154f54f56f3",
        "hidden-xl": "rockstargames-modules-core-gif-viewerb76b86f8931dabffacb746e1088bd06f",
        "hidden-xxl": "rockstargames-modules-core-gif-viewerbc195247a1f0dd5b7d5f5f94a70d90a0",
        hiddenLarge: "rockstargames-modules-core-gif-viewerb8ebff1e6c6fc120a77104f6a7edc21d",
        hiddenMobile: "rockstargames-modules-core-gif-viewerabb297e5eb4b30107497c5af3b977524",
        "horizontal-line": "rockstargames-modules-core-gif-viewerb33830da2f964a317241cf53c7e5773a",
        mutable: "rockstargames-modules-core-gif-viewera093729df8a4878dc8a2f4ff1af1eada",
        muteBtn: "rockstargames-modules-core-gif-viewera385e95337be85fde170dc13e35beb24",
        "reverse-mobile": "rockstargames-modules-core-gif-viewerd7a211eb98231158320e9010496f41ad",
        "show-lg": "rockstargames-modules-core-gif-viewerc7ff5218a9d689524fb1f41925045edc",
        "show-md": "rockstargames-modules-core-gif-viewere3451141fab2f5a3cc092cfe4cc95654",
        "show-sm": "rockstargames-modules-core-gif-viewerd8b46b1e13206714908c4ba62343bb7d",
        "show-xl": "rockstargames-modules-core-gif-viewerea13d7c61982adf247792719febab3e8",
        "show-xxl": "rockstargames-modules-core-gif-viewerc56987d4c3541e92c7f916ad8f648e23",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-gif-viewere2e4a9d2a67fa93b20ba2d2c3bfb18d6",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-gif-viewercc8c0e3543ec9ea6e406cd5d60661547",
        unMuted: "rockstargames-modules-core-gif-viewere906711c6535a405f565f647a9db24d6",
        video: "rockstargames-modules-core-gif-viewerc4b1d579f91603be5e73eec4ba724711",
        videoDesktop: "rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09",
        videoMobile: "rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7"
      };
      var s = i(4235);
      const t = ({
          hashes: e,
          hover: a,
          loop: i,
          sound: r
        }) => {
          const {
            desktop: s = null,
            mobile: t = null
          } = e, [l, c] = (0, o.useState)(!0), u = {
            autoPlay: !a,
            hover: a,
            loop: i,
            sound: r,
            muted: l
          };
          return (0, n.jsxs)("div", {
            onClick: () => c(!l),
            children: [s && (0, n.jsx)(f, {
              className: [t ? d.hiddenMobile : "", d.videoDesktop].join(" "),
              hash: s,
              ...u
            }), t && (0, n.jsx)(f, {
              className: [s ? d.hiddenLarge : "", d.videoMobile].join(" "),
              hash: t,
              ...u
            }), u.sound ? (0, n.jsx)("div", {
              className: [d.muteBtn, l ? "" : d.unMuted].join(" ")
            }) : ""]
          })
        },
        f = ({
          className: e,
          hash: a,
          hover: i,
          autoPlay: t,
          loop: f,
          muted: l,
          sound: c
        }) => {
          const {
            data: u
          } = (0, r.useQuery)(s.GifInfo, {
            variables: {
              hash: a
            }
          }), m = (0, o.useRef)();
          return u ? (0, n.jsx)("div", {
            className: [e, d.video, c ? d.mutable : ""].join(" "),
            onMouseEnter: () => i && void m.current.play(),
            onMouseLeave: () => i && (m.current.pause(), void(m.current.currentTime = 0)),
            children: (0, n.jsx)("video", {
              ref: m,
              src: u.gifInfo.file,
              autoPlay: t,
              loop: f,
              muted: l,
              playsInline: !0
            })
          }) : null
        },
        l = ({
          hash: e,
          style: a,
          title: i,
          caption: o,
          hero: r = !1,
          loop: s = !0,
          sound: f = !1,
          hover: l = !1
        }) => {
          if (!e) return null;
          const c = "object" == typeof e ? e : Object.keys(e).map((a => ({
            [a]: e[a]
          })));
          return (0, n.jsxs)("figure", {
            className: `${d.gifWrapper} ${r?d.gifWrapperHero:""}`,
            style: a,
            children: [(0, n.jsx)(t, {
              hashes: c,
              hover: l,
              loop: s,
              sound: f,
              title: i ?? "R* Games"
            }), o && (0, n.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            })]
          })
        }
    },
    9245: (e, a, i) => {
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
          f = null,
          l = null;
        for (n in void 0 !== i && (f = "" + i), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (l = a.ref), a) r.call(a, n) && !s.hasOwnProperty(n) && (t[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === t[n] && (t[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: l,
          props: t,
          _owner: d.current
        }
      }
      a.jsx = t, a.jsxs = t
    },
    9741: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => n
      });
      const n = i(5843).A
    }
  }
]);