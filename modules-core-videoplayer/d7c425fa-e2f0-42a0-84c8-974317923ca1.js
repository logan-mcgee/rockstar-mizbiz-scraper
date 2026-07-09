try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d7c425fa-e2f0-42a0-84c8-974317923ca1", e._sentryDebugIdIdentifier = "sentry-dbid-d7c425fa-e2f0-42a0-84c8-974317923ca1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [793, 812], {
    4620(e) {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
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
                value: "context"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
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
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
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
                    value: "name"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function i(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, t)
        })
      }
      t.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function o(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          i(e, t), a[e.name.value] = t
        }
      }), e.exports = t, e.exports.TagList = function(e, t) {
        var i = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = a[t] || new Set,
          l = new Set,
          r = new Set;
        for (n.forEach(function(e) {
            r.add(e)
          }); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach(function(e) {
            l.has(e) || (l.add(e), (a[e] || new Set).forEach(function(e) {
              r.add(e)
            }))
          })
        }
        return l.forEach(function(t) {
          var a = o(e, t);
          a && i.definitions.push(a)
        }), i
      }(t, "TagList")
    },
    4931(e, t, i) {
      "use strict";
      var a = i(3082),
        o = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, i) {
        var a, n = {},
          d = null,
          p = null;
        for (a in void 0 !== i && (d = "" + i), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (p = t.ref), t) l.call(t, a) && !s.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: p,
          props: n,
          _owner: r.current
        }
      }
      t.Fragment = n, t.jsx = d, t.jsxs = d
    },
    9793(e, t, i) {
      "use strict";
      e.exports = i(4931)
    },
    9812(e, t, i) {
      "use strict";
      i.r(t), i.d(t, {
        RockstarVideoPlayer: () => Qe,
        VideoField: () => Ke,
        default: () => Je
      });
      var a = i(9793),
        o = i(283),
        n = i(3331);
      const l = "rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e",
        r = ({
          color: e
        }) => (0, a.jsxs)("div", {
          className: "rockstargames-modules-core-videoplayere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, a.jsx)("div", {
            className: l
          }), (0, a.jsx)("div", {
            className: l
          }), (0, a.jsx)("div", {
            className: l
          })]
        });
      var s = i(4815);
      const d = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        p = (e = {
          parent: "",
          post: null
        }) => [{
          name: e?.parent ? `${e?.parent}.backgroundColor` : "backgroundColor",
          label: "Background Color",
          component: "text"
        }, {
          name: e?.parent ? `${e?.parent}.gradient` : "gradient",
          label: "Background Gradient",
          component: "group",
          fields: [{
            name: e?.parent ? `${e?.parent}.gradientStart` : "gradientStart",
            label: "Start Color",
            component: "color"
          }, {
            name: e?.parent ? `${e?.parent}.gradientEnd` : "gradientEnd",
            label: "End Color",
            component: "color"
          }]
        }],
        h = (e = {
          parent: "",
          post: null,
          filter: null
        }) => {
          const t = {
            name: "backgroundImage",
            label: "Background Image",
            component: "text",
            initialValues: "url()",
            format: e => e ? -1 !== e.indexOf("url(") ? `url(${e.split("url(")[1].split(")")[0]})` : `url(${e})` : "url()"
          };
          let i;
          return i = "grid" === e.filter ? [t, {
            name: "--grid-background-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "--grid-background-position",
            label: "Background Position",
            component: "text"
          }] : [t, {
            name: "backgroundSize",
            label: "Background Size",
            component: "text"
          }, {
            name: "backgroundPosition",
            label: "Background Position",
            component: "text"
          }], i
        },
        c = (e = {
          parent: "",
          post: null,
          filter: null
        }) => "grid" === e.filter ? [{
          name: "--grid-background-repeat",
          label: "Background Repeat",
          component: "select",
          options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
        }] : [{
          name: "backgroundRepeat",
          label: "Background Repeat",
          component: "select",
          options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
        }],
        u = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, a.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }),
        m = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, a.jsx)("hr", {})
        }),
        g = [{
          value: "0px",
          label: "None"
        }, {
          value: "auto",
          label: "Auto"
        }, {
          value: "var(--grid-gap-dynamic)",
          label: "Match Grid Gap"
        }, {
          value: "var(--grid-gap-static-xs)",
          label: "Xtra Small"
        }, {
          value: "var(--grid-gap-static-sm)",
          label: "Small"
        }, {
          value: "var(--grid-gap-static-md)",
          label: "Medium"
        }, {
          value: "var(--grid-gap-static-lg)",
          label: "Large"
        }, {
          value: "var(--grid-gap-static-xl)",
          label: "Xtra Large"
        }],
        b = [{
          value: "calc(var(--grid-gap-dynamic) * -1)",
          label: "Match Grid Gap (Negative)"
        }, {
          value: "calc(var(--grid-gap-static-xs) * -1)",
          label: "Xtra Small (Negative)"
        }, {
          value: "calc(var(--grid-gap-static-sm) * -1)",
          label: "Small (Negative)"
        }, {
          value: "calc(var(--grid-gap-static-md) * -1)",
          label: "Medium (Negative)"
        }, {
          value: "calc(var(--grid-gap-static-lg) * -1)",
          label: "Large (Negative)"
        }, {
          value: "calc(var(--grid-gap-static-xl) * -1)",
          label: "Xtra Large (Negative)"
        }],
        f = {
          label: "Top",
          name: "top",
          description: "Distance from top for LAYERS (recommended to use %)",
          component: "text"
        },
        v = {
          label: "Left",
          name: "left",
          description: "Distance from left for LAYERS (recommended to use %)",
          component: "text"
        },
        y = {
          label: "Right",
          name: "right",
          description: "Distance from right for LAYERS (recommended to use %)",
          component: "text"
        },
        x = {
          label: "Bottom",
          name: "bottom",
          description: "Distance from bottom for LAYERS (recommended to use %)",
          component: "text"
        },
        w = {
          label: "Object Position - Vertical",
          name: "--bg-position-vertical",
          description: "Distance from top for BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        S = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        z = {
          label: "Display",
          name: "display",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Display --"
          }, {
            value: "initial",
            label: "Default"
          }, {
            value: "none",
            label: "Hidden"
          }]
        },
        k = {
          label: "Position",
          name: "position",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Position --"
          }, {
            value: "absolute",
            label: "absolute"
          }, {
            value: "relative",
            label: "relative"
          }, {
            value: "fixed",
            label: "fixed"
          }, {
            value: "static",
            label: "static"
          }, {
            value: "sticky",
            label: "sticky"
          }, {
            value: "initial",
            label: "initial"
          }]
        },
        M = {
          label: "Max Width",
          name: "--max-width-dynamic",
          description: "Set the max-width (No selection is full bleed)",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Max Width --"
          }, {
            value: "var(--max-width-static)",
            label: "Standard (640px)"
          }, {
            value: "var(--max-width-static-md)",
            label: "Medium"
          }, {
            value: "var(--max-width-static-lg)",
            label: "Large"
          }, {
            value: "var(--max-width-static-xl)",
            label: "Xtra Large"
          }]
        },
        R = {
          label: "Top Margin",
          name: "margin-top",
          description: "Set the top margin",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Margin --"
          }, {
            value: "var(--padding-top-bottom)",
            label: "Standard Margin"
          }, ...g, ...b]
        },
        B = {
          label: "Left Margin",
          name: "margin-left",
          description: "Set the left margin",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Margin --"
          }, {
            value: "var(--padding-sides)",
            label: "Standard"
          }, ...g, ...b]
        },
        N = {
          label: "Right Margin",
          name: "margin-right",
          description: "Set the right margin",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Margin --"
          }, {
            value: "var(--padding-sides)",
            label: "Standard"
          }, ...g, ...b]
        },
        _ = {
          label: "Bottom Margin",
          name: "margin-bottom",
          description: "Set the bottom margin",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Margin --"
          }, {
            value: "var(--padding-top-bottom)",
            label: "Standard"
          }, ...g, ...b]
        },
        E = {
          label: "Top Padding",
          name: "--padding-t",
          description: "Set the top padding",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Padding --"
          }, {
            value: "var(--padding-top-bottom)",
            label: "Standard Padding"
          }, ...g]
        },
        L = {
          label: "Side Padding",
          name: "--padding-dynamic",
          description: "Set the side padding",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Padding --"
          }, {
            value: "var(--padding-sides)",
            label: "Standard"
          }, ...g]
        },
        C = {
          label: "Bottom Padding",
          name: "--padding-b",
          description: "Set the bottom padding",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Padding --"
          }, {
            value: "var(--padding-top-bottom)",
            label: "Standard"
          }, ...g]
        },
        W = {
          label: "Grid Column Span",
          name: "gridColumn",
          description: "Set the grid-column",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Grid Column --"
          }, {
            value: "1/-1",
            label: "All Columns"
          }]
        },
        j = (e = "--grid-position", t = "Grid Position") => ({
          label: t,
          name: e,
          description: "Set the grid-template-position",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Position --"
          }, {
            value: "absolute",
            label: "absolute"
          }, {
            value: "relative",
            label: "relative"
          }, {
            value: "fixed",
            label: "fixed"
          }, {
            value: "static",
            label: "static"
          }, {
            value: "sticky",
            label: "sticky"
          }, {
            value: "initial",
            label: "initial"
          }]
        }),
        T = {
          label: "Grid Gap",
          name: "--grid-gap-dynamic",
          description: "Set the grid-gap",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Grid Gap --"
          }, {
            value: "var(--grid-gap-static-xs)",
            label: "Xtra Small"
          }, {
            value: "var(--grid-gap-static-sm)",
            label: "Small"
          }, {
            value: "var(--grid-gap-static-md)",
            label: "Medium"
          }, {
            value: "var(--grid-gap-static-lg)",
            label: "Large"
          }, {
            value: "var(--grid-gap-static-xl)",
            label: "Xtra Large"
          }]
        },
        I = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        P = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        D = {
          label: "Grid Align Self",
          name: "--grid-align-self",
          description: "Set the align-self property",
          component: "text"
        },
        G = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        A = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        H = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        O = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        F = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        $ = {
          label: "--letter-spacing-h",
          name: "--letter-spacing-h",
          description: "Set the --letter-spacing-h",
          component: "text"
        },
        U = {
          label: "Font Size Multiplier",
          name: "fontSize",
          description: "Shift all font sizes by a particular value",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Font Size Multiplier --"
          }, {
            value: "0.5em",
            label: "Much smaller (x0.5)"
          }, {
            value: "0.75em",
            label: "Smaller (x0.75)"
          }, {
            value: "1.25em",
            label: "Bigger (x1.25)"
          }, {
            value: "1.5em",
            label: "Much Bigger (x1.5)"
          }]
        },
        V = {
          label: "Header Multiplier",
          name: "--header-multiplier",
          description: "Set the --header-multiplier",
          component: "text"
        },
        X = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        Y = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        q = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        K = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        Q = {
          label: "Date/Time Color",
          name: "--time-color",
          description: "Applies to time tags inside this component.",
          component: "color"
        },
        J = {
          label: "Invert Breadcrumb Separator Color",
          name: "toggleInvertSeparator",
          description: "Invert the color.",
          component: "toggle"
        },
        Z = {
          label: "Image Width",
          name: "width",
          description: "Set the image width",
          component: "text"
        },
        ee = {
          label: "Image Min-Width",
          name: "min-width",
          description: "Set the image min-width",
          component: "text"
        },
        te = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        ie = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        ae = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        oe = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        ne = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        le = {
          label: "Aspect Ratio",
          name: "--aspect-ratio",
          description: "Set the aspect ratio of the image or container",
          component: "text"
        },
        re = {
          label: "zIndex",
          name: "z-index",
          description: "Set the z-index of the image or container",
          component: "number"
        },
        se = (e = null) => ({
          label: "Mix Blend Mode",
          name: "parallaxImageLayer" === e ? "--mix-blend-mode" : "mixBlendMode",
          description: "Set how an element's content should blend with the content of the element's parent and the element's background",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Mix Blend Mode --"
          }, {
            value: "normal",
            label: "Normal"
          }, {
            value: "multiply",
            label: "Multiply"
          }, {
            value: "screen",
            label: "Screen"
          }, {
            value: "overlay",
            label: "Overlay"
          }, {
            value: "darken",
            label: "Darken"
          }, {
            value: "lighten",
            label: "Lighten"
          }, {
            value: "color-dodge",
            label: "Color Dodge"
          }, {
            value: "color-burn",
            label: "Color Burn"
          }, {
            value: "hard-light",
            label: "Hard Light"
          }, {
            value: "soft-light",
            label: "Soft Light"
          }, {
            value: "difference",
            label: "Difference"
          }, {
            value: "exclusion",
            label: "Exclusion"
          }, {
            value: "hue",
            label: "Hue"
          }, {
            value: "saturation",
            label: "Saturation"
          }, {
            value: "color",
            label: "Color"
          }, {
            value: "luminosity",
            label: "Luminosity"
          }, {
            value: "inherit",
            label: "Inherit"
          }, {
            value: "initial",
            label: "Initial"
          }, {
            value: "revert",
            label: "Revert"
          }, {
            value: "revert-layer",
            label: "Revert Layer"
          }, {
            value: "unset",
            label: "Unset"
          }]
        }),
        de = ({
          filter: e = null
        }) => {
          const t = [{
              ...u("Position")
            }, {
              ...f
            }, {
              ...v
            }, {
              ...y
            }, {
              ...x
            }, {
              ...w
            }, {
              ...S
            }, {
              ...m("Position")
            }],
            i = [{
              ...u("Box Model")
            }, {
              ...z
            }, {
              ...k
            }, {
              ...M
            }, {
              ...R
            }, {
              ...B
            }, {
              ...N
            }, {
              ..._
            }, {
              ...E
            }, {
              ...L
            }, {
              ...C
            }, {
              name: "border",
              label: "Border",
              description: "Entire CSS value as a string.",
              component: "text"
            }, {
              name: "--image-rounding-dynamic",
              label: "Border Radius",
              description: "The rounding on the corners of the image or container.",
              component: "select",
              options: [{
                label: "-- Select Border Radius --",
                value: ""
              }, {
                label: "None",
                value: "0px"
              }, {
                label: "Standard",
                value: "var(--image-rounding-static)"
              }, {
                label: "SM",
                value: "var(--image-rounding-static-sm)"
              }, {
                label: "XS",
                value: "var(--image-rounding-static-xs)"
              }]
            }, {
              ...se(e)
            }, {
              ...m("Box Model")
            }],
            a = [{
              ...u("Text")
            }, {
              ...V
            }, {
              ...U
            }, {
              ...O
            }, {
              ...F
            }, {
              ...$
            }, {
              ...X
            }, {
              ...Y
            }, {
              ...q
            }, {
              ...K
            }, {
              ...Q
            }, {
              ...m("Text")
            }],
            o = [{
              ...u("Background..")
            }, ...p({
              filter: e
            }), ...h({
              filter: e
            }), ...c({
              filter: e
            }), {
              ...m("Background")
            }],
            n = [{
              ...u("Grid")
            }, {
              ...j("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...j("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...W
            }, {
              ...I
            }, {
              ...P
            }, {
              ...D
            }, {
              ...G
            }, {
              ...A
            }, {
              ...H
            }, {
              ...T
            }, {
              ...re
            }, {
              ...m("Grid")
            }],
            l = [{
              ...u("Image")
            }, {
              ...te
            }, {
              ...le
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...ie
            }, {
              ...ae
            }, {
              ...oe
            }, {
              ...ne
            }, {
              ...re
            }, {
              ...m("Image")
            }],
            r = [...i, ...t, ...a, ...o];
          return "grid" === e && r.push(...n), ("image" === e || "layeredImage" === e || e?.startsWith("parallax")) && r.push(...l), "gridItem" === e && r.push({
            ...W
          }), "title" === e && (r.push(Q), r.push(J)), r
        },
        pe = ({
          filter: e = null,
          name: t = "style",
          label: i = "CSS Variables"
        }) => ({
          label: i,
          name: t,
          description: "Override CSS Variables",
          component: "group",
          fields: [...de({
            filter: e
          })]
        });
      var he = i(3082);
      const ce = (0, n.setContextItem)({
          context: (0, he.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: ue
        } = ce,
        me = e => e.full_src,
        ge = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        be = e => e.meta.uploads_directory,
        fe = (e = {
          label: "TranslationKey",
          description: "This value must begin with `key_` and MUST BE UNIQUE."
        }) => ({
          name: "key",
          component: "text",
          ...e
        }),
        ve = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, a.jsx)("hr", {})
        }),
        ye = ({
          name: e,
          label: t = e
        }) => ({
          name: e,
          label: t,
          component: "group",
          description: "If responsive, only the Mobile Source is needed.",
          fields: [{
            name: "mobile",
            label: "Mobile Source",
            component: "image",
            clearable: !0,
            uploadDir: be,
            parse: me,
            previewSrc: ge
          }, {
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: be,
            parse: me,
            previewSrc: ge
          }, pe({
            name: "imageMobileStyle",
            label: "Mobile CSS Style",
            filter: "image"
          }), pe({
            name: "imageDesktopStyle",
            label: "Desktop CSS Style",
            filter: "image"
          })]
        }),
        xe = [{
          ...ve("Background Image Gradient")
        }, {
          ...((e = "Label") => ({
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, a.jsx)("h3", {
              style: {
                marginBottom: "var(--tina-padding-small)",
                "--color-h3": "var(--tina-color-grey-8)"
              },
              children: e
            })
          }))("Background Image Gradient")
        }, {
          name: "style.--gradient-height",
          label: "Gradient Height",
          description: "Select the height of the gradient. Smaller size means less of the selected gradient color(s).",
          component: "select",
          options: [{
            value: "",
            label: "Off"
          }, {
            value: "3",
            label: "xs"
          }, {
            value: "5",
            label: "small"
          }, {
            value: "10",
            label: "medium"
          }, {
            value: "15",
            label: "large"
          }, {
            value: "20",
            label: "xl"
          }]
        }, {
          name: "style.--gradient-start-color",
          label: "Top Color",
          component: "color"
        }, {
          name: "style.--gradient-end-color",
          label: "Bottom Color",
          component: "color"
        }, {
          ...ve("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        we = ({
          game: e = null,
          label: t = "Image Configuration",
          name: i = "image"
        }) => {
          const a = [Xe({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Xe({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, ye({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map(e => ye({
              name: e
            }))
          }, {
            name: "accessibleRole",
            label: "Choose an Accessible Role",
            component: "select",
            options: [{
              value: "",
              label: " "
            }, {
              value: "none",
              label: "None"
            }, {
              value: "presentation",
              label: "Presentation"
            }]
          }, Xe({
            name: "frame",
            label: "Choose Frame",
            component: "select",
            options: [{
              value: "",
              label: "None"
            }, {
              value: "frame_1",
              label: "Frame 1"
            }, {
              value: "frame_2",
              label: "Frame 2"
            }, {
              value: "frame_3",
              label: "Frame 3"
            }, {
              value: "frame_4",
              label: "Frame 4"
            }, {
              value: "frame_5",
              label: "Frame 5"
            }, {
              value: "frame_6",
              label: "Frame 6"
            }]
          }), Xe({
            name: "caption",
            label: "Caption",
            component: "html"
          }), fe({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== e && "rdr2" !== e || a.push({
            name: "role",
            label: "Role",
            description: "Add a role icon.",
            component: "select",
            options: [{
              value: "",
              label: "None"
            }, {
              value: "bounty",
              label: "Bounty Hunter"
            }, {
              value: "collector",
              label: "Collector"
            }, {
              value: "moonshiner",
              label: "Moonshiner"
            }, {
              value: "naturalist",
              label: "Naturalist"
            }, {
              value: "trader",
              label: "Trader"
            }]
          }), a.push({
            label: "Border Style",
            name: "style.--image-border-style",
            description: "(ex. 1px solid #fff)",
            component: "text"
          }, {
            label: "Border Radius",
            name: "style.--image-border-radius",
            component: "text"
          }, {
            name: "style.--background-image-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "style.--background-image-repeat",
            label: "Background Repeat",
            component: "select",
            options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
          }), "Background Image" === t && a.push(...xe), {
            name: i,
            label: t,
            component: "group",
            fields: a,
            defaultItem: () => Ue(d),
            itemProps: e => Ve(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      i(2909);
      const Se = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, a.jsx)("hr", {})
      });
      var ze, ke = i(4017),
        Me = function() {
          return Me = Object.assign || function(e) {
            for (var t, i = 1, a = arguments.length; i < a; i++)
              for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, Me.apply(this, arguments)
        },
        Re = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        Be = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        Ne = {
          width: "20px",
          height: "20px",
          position: "absolute",
          zIndex: 1
        },
        _e = {
          top: Me(Me({}, Re), {
            top: "-5px"
          }),
          right: Me(Me({}, Be), {
            left: void 0,
            right: "-5px"
          }),
          bottom: Me(Me({}, Re), {
            top: void 0,
            bottom: "-5px"
          }),
          left: Me(Me({}, Be), {
            left: "-5px"
          }),
          topRight: Me(Me({}, Ne), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: Me(Me({}, Ne), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: Me(Me({}, Ne), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: Me(Me({}, Ne), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        Ee = (0, he.memo)(function(e) {
          var t = e.onResizeStart,
            i = e.direction,
            o = e.children,
            n = e.replaceStyles,
            l = e.className,
            r = (0, he.useCallback)(function(e) {
              t(e, i)
            }, [t, i]),
            s = (0, he.useCallback)(function(e) {
              t(e, i)
            }, [t, i]),
            d = (0, he.useMemo)(function() {
              return Me(Me({
                position: "absolute",
                userSelect: "none"
              }, _e[i]), null != n ? n : {})
            }, [n, i]);
          return (0, a.jsx)("div", {
            className: l || void 0,
            style: d,
            onMouseDown: r,
            onTouchStart: s,
            children: o
          })
        }),
        Le = (ze = function(e, t) {
          return ze = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }, ze(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function i() {
            this.constructor = e
          }
          ze(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }),
        Ce = function() {
          return Ce = Object.assign || function(e) {
            for (var t, i = 1, a = arguments.length; i < a; i++)
              for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, Ce.apply(this, arguments)
        },
        We = {
          width: "auto",
          height: "auto"
        },
        je = function(e, t, i) {
          return Math.max(Math.min(e, i), t)
        },
        Te = function(e, t, i) {
          var a = Math.round(e / t);
          return a * t + i * (a - 1)
        },
        Ie = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        Pe = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        De = function(e, t, i) {
          void 0 === i && (i = 0);
          var a = t.reduce(function(i, a, o) {
              return Math.abs(a - e) < Math.abs(t[i] - e) ? o : i
            }, 0),
            o = Math.abs(t[a] - e);
          return 0 === i || o < i ? t[a] : e
        },
        Ge = function(e) {
          return "auto" === (e = e.toString()) || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : "".concat(e, "px")
        },
        Ae = function(e, t, i, a) {
          if (e && "string" == typeof e) {
            if (e.endsWith("px")) return Number(e.replace("px", ""));
            if (e.endsWith("%")) return t * (Number(e.replace("%", "")) / 100);
            if (e.endsWith("vw")) return i * (Number(e.replace("vw", "")) / 100);
            if (e.endsWith("vh")) return a * (Number(e.replace("vh", "")) / 100)
          }
          return e
        },
        He = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        Oe = "__resizable_base__",
        Fe = function(e) {
          function t(t) {
            var i, a, o, n, l = e.call(this, t) || this;
            return l.ratio = 1, l.resizable = null, l.parentLeft = 0, l.parentTop = 0, l.resizableLeft = 0, l.resizableRight = 0, l.resizableTop = 0, l.resizableBottom = 0, l.targetLeft = 0, l.targetTop = 0, l.delta = {
              width: 0,
              height: 0
            }, l.appendBase = function() {
              if (!l.resizable || !l.window) return null;
              var e = l.parentNode;
              if (!e) return null;
              var t = l.window.document.createElement("div");
              return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(Oe) : t.className += Oe, e.appendChild(t), t
            }, l.removeBase = function(e) {
              var t = l.parentNode;
              t && t.removeChild(e)
            }, l.state = {
              isResizing: !1,
              width: null !== (a = null === (i = l.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== a ? a : "auto",
              height: null !== (n = null === (o = l.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : "auto",
              direction: "right",
              original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              },
              backgroundStyle: {
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)",
                cursor: "auto",
                opacity: 0,
                position: "fixed",
                zIndex: 9999,
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
              },
              flexBasis: void 0
            }, l.onResizeStart = l.onResizeStart.bind(l), l.onMouseMove = l.onMouseMove.bind(l), l.onMouseUp = l.onMouseUp.bind(l), l
          }
          return Le(t, e), Object.defineProperty(t.prototype, "parentNode", {
            get: function() {
              return this.resizable ? this.resizable.parentNode : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "window", {
            get: function() {
              return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "propsSize", {
            get: function() {
              return this.props.size || this.props.defaultSize || We
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "size", {
            get: function() {
              var e = 0,
                t = 0;
              if (this.resizable && this.window) {
                var i = this.resizable.offsetWidth,
                  a = this.resizable.offsetHeight,
                  o = this.resizable.style.position;
                "relative" !== o && (this.resizable.style.position = "relative"), e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : a, this.resizable.style.position = o
              }
              return {
                width: e,
                height: t
              }
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "sizeStyle", {
            get: function() {
              var e = this,
                t = this.props.size,
                i = function(t) {
                  var i;
                  if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                  if (e.propsSize && e.propsSize[t] && (null === (i = e.propsSize[t]) || void 0 === i ? void 0 : i.toString().endsWith("%"))) {
                    if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
                    var a = e.getParentSize(),
                      o = Number(e.state[t].toString().replace("px", "")) / a[t] * 100;
                    return "".concat(o, "%")
                  }
                  return Ge(e.state[t])
                };
              return {
                width: t && void 0 !== t.width && !this.state.isResizing ? Ge(t.width) : i("width"),
                height: t && void 0 !== t.height && !this.state.isResizing ? Ge(t.height) : i("height")
              }
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.getParentSize = function() {
            if (!this.parentNode) return this.window ? {
              width: this.window.innerWidth,
              height: this.window.innerHeight
            } : {
              width: 0,
              height: 0
            };
            var e = this.appendBase();
            if (!e) return {
              width: 0,
              height: 0
            };
            var t = !1,
              i = this.parentNode.style.flexWrap;
            "wrap" !== i && (t = !0, this.parentNode.style.flexWrap = "wrap"), e.style.position = "relative", e.style.minWidth = "100%", e.style.minHeight = "100%";
            var a = {
              width: e.offsetWidth,
              height: e.offsetHeight
            };
            return t && (this.parentNode.style.flexWrap = i), this.removeBase(e), a
          }, t.prototype.bindEvents = function() {
            this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
              capture: !0,
              passive: !1
            }), this.window.addEventListener("touchend", this.onMouseUp))
          }, t.prototype.unbindEvents = function() {
            this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
          }, t.prototype.componentDidMount = function() {
            if (this.resizable && this.window) {
              var e = this.window.getComputedStyle(this.resizable);
              this.setState({
                width: this.state.width || this.size.width,
                height: this.state.height || this.size.height,
                flexBasis: "auto" !== e.flexBasis ? e.flexBasis : void 0
              })
            }
          }, t.prototype.componentWillUnmount = function() {
            this.window && this.unbindEvents()
          }, t.prototype.createSizeForCssProperty = function(e, t) {
            var i = this.propsSize && this.propsSize[t];
            return "auto" !== this.state[t] || this.state.original[t] !== e || void 0 !== i && "auto" !== i ? e : "auto"
          }, t.prototype.calculateNewMaxFromBoundary = function(e, t) {
            var i, a, o = this.props.boundsByDirection,
              n = this.state.direction,
              l = o && Ie("left", n),
              r = o && Ie("top", n);
            if ("parent" === this.props.bounds) {
              var s = this.parentNode;
              s && (i = l ? this.resizableRight - this.parentLeft : s.offsetWidth + (this.parentLeft - this.resizableLeft), a = r ? this.resizableBottom - this.parentTop : s.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = l ? this.resizableRight : this.window.innerWidth - this.resizableLeft, a = r ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = l ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), a = r ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (e = e && e < i ? e : i), a && Number.isFinite(a) && (t = t && t < a ? t : a), {
              maxWidth: e,
              maxHeight: t
            }
          }, t.prototype.calculateNewSizeFromDirection = function(e, t) {
            var i, a = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              n = o[0],
              l = o[1],
              r = this.state,
              s = r.direction,
              d = r.original,
              p = this.props,
              h = p.lockAspectRatio,
              c = p.lockAspectRatioExtraHeight,
              u = p.lockAspectRatioExtraWidth,
              m = d.width,
              g = d.height,
              b = c || 0,
              f = u || 0;
            return Ie("right", s) && (m = d.width + (e - d.x) * n / a, h && (g = (m - f) / this.ratio + b)), Ie("left", s) && (m = d.width - (e - d.x) * n / a, h && (g = (m - f) / this.ratio + b)), Ie("bottom", s) && (g = d.height + (t - d.y) * l / a, h && (m = (g - b) * this.ratio + f)), Ie("top", s) && (g = d.height - (t - d.y) * l / a, h && (m = (g - b) * this.ratio + f)), {
              newWidth: m,
              newHeight: g
            }
          }, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, i, a) {
            var o = this.props,
              n = o.lockAspectRatio,
              l = o.lockAspectRatioExtraHeight,
              r = o.lockAspectRatioExtraWidth,
              s = void 0 === a.width ? 10 : a.width,
              d = void 0 === i.width || i.width < 0 ? e : i.width,
              p = void 0 === a.height ? 10 : a.height,
              h = void 0 === i.height || i.height < 0 ? t : i.height,
              c = l || 0,
              u = r || 0;
            if (n) {
              var m = (p - c) * this.ratio + u,
                g = (h - c) * this.ratio + u,
                b = (s - u) / this.ratio + c,
                f = (d - u) / this.ratio + c,
                v = Math.max(s, m),
                y = Math.min(d, g),
                x = Math.max(p, b),
                w = Math.min(h, f);
              e = je(e, v, y), t = je(t, x, w)
            } else e = je(e, s, d), t = je(t, p, h);
            return {
              newWidth: e,
              newHeight: t
            }
          }, t.prototype.setBoundingClientRect = function() {
            var e = 1 / (this.props.scale || 1);
            if ("parent" === this.props.bounds) {
              var t = this.parentNode;
              if (t) {
                var i = t.getBoundingClientRect();
                this.parentLeft = i.left * e, this.parentTop = i.top * e
              }
            }
            if (this.props.bounds && "string" != typeof this.props.bounds) {
              var a = this.props.bounds.getBoundingClientRect();
              this.targetLeft = a.left * e, this.targetTop = a.top * e
            }
            if (this.resizable) {
              var o = this.resizable.getBoundingClientRect(),
                n = o.left,
                l = o.top,
                r = o.right,
                s = o.bottom;
              this.resizableLeft = n * e, this.resizableRight = r * e, this.resizableTop = l * e, this.resizableBottom = s * e
            }
          }, t.prototype.onResizeStart = function(e, t) {
            if (this.resizable && this.window) {
              var i, a = 0,
                o = 0;
              if (e.nativeEvent && function(e) {
                  return Boolean((e.clientX || 0 === e.clientX) && (e.clientY || 0 === e.clientY))
                }(e.nativeEvent) ? (a = e.nativeEvent.clientX, o = e.nativeEvent.clientY) : e.nativeEvent && Pe(e.nativeEvent) && (a = e.nativeEvent.touches[0].clientX, o = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var n = this.window.getComputedStyle(this.resizable);
              if ("auto" !== n.flexBasis) {
                var l = this.parentNode;
                if (l) {
                  var r = this.window.getComputedStyle(l).flexDirection;
                  this.flexDir = r.startsWith("row") ? "row" : "column", i = n.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var s = {
                original: {
                  x: a,
                  y: o,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: Ce(Ce({}, this.state.backgroundStyle), {
                  cursor: this.window.getComputedStyle(e.target).cursor || "auto"
                }),
                direction: t,
                flexBasis: i
              };
              this.setState(s)
            }
          }, t.prototype.onMouseMove = function(e) {
            var t = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && Pe(e)) try {
                e.preventDefault(), e.stopPropagation()
              } catch (e) {}
              var i = this.props,
                a = i.maxWidth,
                o = i.maxHeight,
                n = i.minWidth,
                l = i.minHeight,
                r = Pe(e) ? e.touches[0].clientX : e.clientX,
                s = Pe(e) ? e.touches[0].clientY : e.clientY,
                d = this.state,
                p = d.direction,
                h = d.original,
                c = d.width,
                u = d.height,
                m = this.getParentSize(),
                g = function(e, t, i, a, o, n, l) {
                  return a = Ae(a, e.width, t, i), o = Ae(o, e.height, t, i), n = Ae(n, e.width, t, i), l = Ae(l, e.height, t, i), {
                    maxWidth: void 0 === a ? void 0 : Number(a),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === n ? void 0 : Number(n),
                    minHeight: void 0 === l ? void 0 : Number(l)
                  }
                }(m, this.window.innerWidth, this.window.innerHeight, a, o, n, l);
              a = g.maxWidth, o = g.maxHeight, n = g.minWidth, l = g.minHeight;
              var b = this.calculateNewSizeFromDirection(r, s),
                f = b.newHeight,
                v = b.newWidth,
                y = this.calculateNewMaxFromBoundary(a, o);
              this.props.snap && this.props.snap.x && (v = De(v, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (f = De(f, this.props.snap.y, this.props.snapGap));
              var x = this.calculateNewSizeFromAspectRatio(v, f, {
                width: y.maxWidth,
                height: y.maxHeight
              }, {
                width: n,
                height: l
              });
              if (v = x.newWidth, f = x.newHeight, this.props.grid) {
                var w = Te(v, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  S = Te(f, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  z = this.props.snapGap || 0;
                v = 0 === z || Math.abs(w - v) <= z ? w : v, f = 0 === z || Math.abs(S - f) <= z ? S : f
              }
              var k = {
                width: v - h.width,
                height: f - h.height
              };
              if (this.delta = k, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var M = v / m.width * 100;
                  v = "".concat(M, "%")
                } else if (c.endsWith("vw")) {
                var R = v / this.window.innerWidth * 100;
                v = "".concat(R, "vw")
              } else if (c.endsWith("vh")) {
                var B = v / this.window.innerHeight * 100;
                v = "".concat(B, "vh")
              }
              u && "string" == typeof u && (u.endsWith("%") ? (M = f / m.height * 100, f = "".concat(M, "%")) : u.endsWith("vw") ? (R = f / this.window.innerWidth * 100, f = "".concat(R, "vw")) : u.endsWith("vh") && (B = f / this.window.innerHeight * 100, f = "".concat(B, "vh")));
              var N = {
                width: this.createSizeForCssProperty(v, "width"),
                height: this.createSizeForCssProperty(f, "height")
              };
              "row" === this.flexDir ? N.flexBasis = N.width : "column" === this.flexDir && (N.flexBasis = N.height);
              var _ = this.state.width !== N.width,
                E = this.state.height !== N.height,
                L = this.state.flexBasis !== N.flexBasis,
                C = _ || E || L;
              C && (0, ke.flushSync)(function() {
                t.setState(N)
              }), this.props.onResize && C && this.props.onResize(e, p, this.resizable, k)
            }
          }, t.prototype.onMouseUp = function(e) {
            var t, i, a = this.state,
              o = a.isResizing,
              n = a.direction;
            a.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(e, n, this.resizable, this.delta), this.props.size && this.setState({
              width: null !== (t = this.props.size.width) && void 0 !== t ? t : "auto",
              height: null !== (i = this.props.size.height) && void 0 !== i ? i : "auto"
            }), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: Ce(Ce({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            }))
          }, t.prototype.updateSize = function(e) {
            var t, i;
            this.setState({
              width: null !== (t = e.width) && void 0 !== t ? t : "auto",
              height: null !== (i = e.height) && void 0 !== i ? i : "auto"
            })
          }, t.prototype.renderResizer = function() {
            var e = this,
              t = this.props,
              i = t.enable,
              o = t.handleStyles,
              n = t.handleClasses,
              l = t.handleWrapperStyle,
              r = t.handleWrapperClass,
              s = t.handleComponent;
            if (!i) return null;
            var d = Object.keys(i).map(function(t) {
              return !1 !== i[t] ? (0, a.jsx)(Ee, {
                direction: t,
                onResizeStart: e.onResizeStart,
                replaceStyles: o && o[t],
                className: n && n[t],
                children: s && s[t] ? s[t] : null
              }, t) : null
            });
            return (0, a.jsx)("div", {
              className: r,
              style: l,
              children: d
            })
          }, t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props).reduce(function(t, i) {
                return -1 !== He.indexOf(i) || (t[i] = e.props[i]), t
              }, {}),
              i = Ce(Ce(Ce({
                position: "relative",
                userSelect: this.state.isResizing ? "none" : "auto"
              }, this.props.style), this.sizeStyle), {
                maxWidth: this.props.maxWidth,
                maxHeight: this.props.maxHeight,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                boxSizing: "border-box",
                flexShrink: 0
              });
            this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
            var o = this.props.as || "div";
            return (0, a.jsxs)(o, Ce({
              style: i,
              className: this.props.className
            }, t, {
              ref: function(t) {
                t && (e.resizable = t)
              },
              children: [this.state.isResizing && (0, a.jsx)("div", {
                style: this.state.backgroundStyle
              }), this.props.children, this.renderResizer()]
            }))
          }, t.defaultProps = {
            as: "div",
            onResizeStart: function() {},
            onResize: function() {},
            onResizeStop: function() {},
            enable: {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
              topRight: !0,
              bottomRight: !0,
              bottomLeft: !0,
              topLeft: !0
            },
            style: {},
            grid: [1, 1],
            gridGap: [0, 0],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0,
            scale: 1,
            resizeRatio: 1,
            snapGap: 0
          }, t
        }(he.PureComponent);
      const $e = ({
        style: e,
        width: t,
        height: i,
        resizable: o,
        field: n,
        input: l,
        meta: r,
        name: s,
        label: d,
        description: p,
        error: h,
        children: c
      }) => {
        const u = () => o ? (0, a.jsx)(Fe, {
          defaultSize: {
            width: t || "100%",
            height: i || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, he.cloneElement)(c, ...l)
        }) : c;
        return (0, a.jsxs)("div", {
          className: "rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
          style: e,
          children: [(0, a.jsxs)("label", {
            className: "rockstargames-modules-core-videoplayerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
            htmlFor: s ?? n?.name,
            children: [d ?? n?.label, (0, a.jsx)("span", {
              className: "rockstargames-modules-core-videoplayera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: p ?? n?.description
            })]
          }), (0, a.jsx)(u, {}), (h || r?.error) && (0, a.jsx)("div", {
            className: "FieldError_sc_custom",
            children: h ?? r?.error
          })]
        })
      };
      Se("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), Se("Background Image Gradient");
      i(4620), n.PAGE_THEMES.BL, n.PAGE_THEMES.BL;
      const Ue = (e = {}) => ({
          ...e,
          key: `key_${(0,s.v4)()}`
        }),
        Ve = (e, t = {}) => ({
          ...t,
          key: e.key
        }),
        Xe = e => ({
          ...e,
          name: `_memoq.${e.name}`
        }),
        Ye = n.gql`
query VideosList($locale: String!, $cache: Boolean = true, $limit: Int) {
    videos(locale: $locale, limit: $limit) {
        results {
            id
            title
            game {
                title
            }
        }
    }
}
`,
        qe = ({
          field: e,
          input: t,
          meta: i
        }) => {
          const {
            data: l
          } = (0, n.useQuery)(Ye, {
            variables: {
              limit: 1e3
            }
          }), s = o(l?.videos?.results).groupBy("game.title").map((e, t) => ({
            gameTitle: t,
            videos: e.map(e => ({
              id: e.id,
              title: e.title
            }))
          })).value();
          return (0, a.jsx)($e, {
            name: t.name || e.name || e.label,
            label: e.label,
            description: e.description,
            meta: i,
            children: l && s?.length ? (0, a.jsxs)("select", {
              ...t,
              children: [(0, a.jsx)("option", {
                value: "",
                children: "-- Select a video --"
              }), s.map(e => (0, a.jsx)("optgroup", {
                label: e.gameTitle,
                children: e.videos.map(e => (0, a.jsxs)("option", {
                  value: e.id,
                  children: ["(", e.id, ")", " ", e.title]
                }, e.id))
              }, e.gameTitle))]
            }) : (0, a.jsx)(r, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        Ke = ({
          label: e = "Video",
          name: t = "id"
        } = {}) => ({
          label: e,
          name: t,
          component: ({
            field: e,
            input: t,
            meta: i
          }) => (0, a.jsx)(qe, {
            field: e,
            input: t,
            meta: i
          })
        }),
        Qe = () => ({
          label: "Video",
          fields: [{
            label: "Name",
            name: "name",
            component: "text",
            description: "Block label for internal use only"
          }, Ke(), {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, {
            name: "hero",
            label: "Is this a lead asset?",
            component: "toggle",
            defaultValue: !1,
            defaultItem: () => Ue({
              hero: !1
            })
          }, we({
            label: "Background Image"
          })],
          defaultItem: () => Ue({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => Ve(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        Je = Qe
    }
  }
]);