try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ab895389-0d2d-4e71-8ff5-e46fcdc1dfa0", e._sentryDebugIdIdentifier = "sentry-dbid-ab895389-0d2d-4e71-8ff5-e46fcdc1dfa0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [6589], {
    84620(e) {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var l = e.type;
          "NamedType" === l.kind && a.add(l.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var l = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var l = e.definitions[t];
          if (l.name && l.name.value == a) return l
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), l[e.name.value] = a
        }
      }), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = l[a] || new Set,
          i = new Set,
          r = new Set;
        for (o.forEach(function(e) {
            r.add(e)
          }); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach(function(e) {
            i.has(e) || (i.add(e), (l[e] || new Set).forEach(function(e) {
              r.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var l = n(e, a);
          l && t.definitions.push(l)
        }), t
      }(a, "TagList")
    },
    54563(e, a, t) {
      "use strict";
      t.d(a, {
        i: () => s,
        o: () => r
      });
      var l = t(39793),
        n = t(93082);
      const o = (0, t(13331).setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = o,
        r = ({
          children: e,
          payload: a
        }) => (0, l.jsx)(i, {
          value: a,
          children: e
        }),
        s = () => (0, n.useContext)(o)
    },
    25993(e, a, t) {
      "use strict";
      t.d(a, {
        C1: () => s,
        S1: () => r,
        XC: () => p,
        jS: () => m,
        qg: () => d,
        z0: () => c
      });
      var l = t(93082),
        n = t(13331),
        o = t(54563);
      const i = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === t ? null : (a.endsWith(".akamaized.net"), e)
        },
        r = ({
          alt: e = null,
          mobile: a = null,
          imageMobileStyle: t = {},
          desktop: r = null,
          imageDesktopStyle: s = {},
          ariaLabel: m = null,
          sources: d = null,
          prod: c = null
        }) => {
          const p = (0, n.useLocale)(),
            {
              meta: u = {}
            } = (0, o.i)() ?? {},
            [b, g] = (0, l.useState)(c ?? u?.cdn ?? u?.prod ?? !0);
          (0, l.useEffect)(() => {
            g(c ?? u?.cdn ?? u?.prod ?? !0)
          }, [c, u]);
          const h = (0, l.useCallback)(e => {
            const a = null !== d,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return i(t);
            const l = `${a?(0,n.getCdnPrefix)(b):""}${t}`;
            return i(l)
          }, [b, d]);
          return {
            alt: e,
            ariaLabel: m,
            src: {
              mobile: h(d?.[p]?.mobile ?? d?.en_us?.mobile ?? a),
              imageMobileStyle: d?.[p]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? t,
              imageDesktopStyle: d?.[p]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? s,
              desktop: h(d?.[p]?.desktop ?? d?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const a = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = a,
            [r, s] = (0, l.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, l.useEffect)(() => {
            s(t?.cdn ?? t?.prod ?? !1)
          }, [t]), e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(r)}${e}`) : null
        },
        m = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: a = {}
            } = e,
            t = (0, l.useMemo)(() => a?.cdn ?? a?.prod ?? !1, [a]);
          return (0, l.useCallback)((e, a = {}) => {
            const l = a?.prod ?? t;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(l)}${e}`) : null
          }, [t])
        },
        d = e => e.full_src,
        c = e => {
          const a = e?.previewSrc ?? e?.preview_src ?? e;
          return a?.startsWith("http") ? a : `${(0,n.getCdnPrefix)(!1)}${a}`
        },
        p = e => e.meta.uploads_directory
    },
    76589(e, a, t) {
      "use strict";
      t.d(a, {
        SF: () => r,
        F2: () => ce,
        Ju: () => p,
        cn: () => be,
        ml: () => ve,
        bY: () => ge,
        ln: () => Ee,
        Y4: () => he,
        BK: () => pe,
        Jn: () => xe,
        ig: () => ye,
        f6: () => ke,
        KO: () => we,
        CT: () => Ce,
        pr: () => je,
        Xt: () => Re,
        ho: () => $e,
        SX: () => De,
        a2: () => Ne,
        Zn: () => Oe,
        i2: () => He,
        om: () => Xe,
        pg: () => na,
        Vz: () => Ue,
        mA: () => Ve,
        Mw: () => qe,
        Vf: () => Ye,
        bK: () => Ae,
        sV: () => Qe,
        Oy: () => ba,
        JP: () => Pe,
        sE: () => de,
        Qw: () => n,
        ZH: () => o,
        UP: () => Ze,
        A_: () => ea,
        gY: () => aa,
        Br: () => fe,
        nG: () => oa,
        I2: () => ma,
        m9: () => i,
        Q: () => ga,
        Ji: () => ha,
        Rv: () => fa,
        xc: () => pa,
        z9: () => va
      });
      var l = t(39279);
      const n = "_memoq",
        o = "content",
        i = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        r = ({
          parent: e = null
        }) => ({
          label: "Aria Label",
          name: e ? `${e}.ariaLabel` : "ariaLabel",
          component: "text",
          description: "Label text that is used for screen readers"
        });
      var s = t(39793);
      const m = (e = {
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
        d = (e = {
          parent: "",
          post: null,
          filter: null
        }) => {
          const a = {
            name: "backgroundImage",
            label: "Background Image",
            component: "text",
            initialValues: "url()",
            format: e => e ? -1 !== e.indexOf("url(") ? `url(${e.split("url(")[1].split(")")[0]})` : `url(${e})` : "url()"
          };
          let t;
          return t = "grid" === e.filter ? [a, {
            name: "--grid-background-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "--grid-background-position",
            label: "Background Position",
            component: "text"
          }] : [a, {
            name: "backgroundSize",
            label: "Background Size",
            component: "text"
          }, {
            name: "backgroundPosition",
            label: "Background Position",
            component: "text"
          }], t
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
        p = (e = {}) => ({
          name: "border",
          label: "Border",
          description: "Entire CSS value as a string.",
          component: "text"
        }),
        u = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, s.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }),
        b = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, s.jsx)("hr", {})
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
        h = [{
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
        x = {
          label: "Right",
          name: "right",
          description: "Distance from right for LAYERS (recommended to use %)",
          component: "text"
        },
        S = {
          label: "Bottom",
          name: "bottom",
          description: "Distance from bottom for LAYERS (recommended to use %)",
          component: "text"
        },
        y = {
          label: "Object Position - Vertical",
          name: "--bg-position-vertical",
          description: "Distance from top for BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        k = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        w = {
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
        I = {
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
        T = {
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
        _ = {
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
          }, ...g, ...h]
        },
        C = {
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
          }, ...g, ...h]
        },
        M = {
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
          }, ...g, ...h]
        },
        B = {
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
          }, ...g, ...h]
        },
        L = {
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
        P = {
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
        A = {
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
        D = {
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
        N = (e = "--grid-position", a = "Grid Position") => ({
          label: a,
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
        G = {
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
        E = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        j = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        z = {
          label: "Grid Align Self",
          name: "--grid-align-self",
          description: "Set the align-self property",
          component: "text"
        },
        R = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        $ = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        F = {
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
        H = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        X = {
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
        q = {
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
        Q = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        W = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        K = {
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
        ae = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        te = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        le = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        ne = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        oe = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        ie = {
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
        me = ({
          filter: e = null
        }) => {
          const a = [{
              ...u("Position")
            }, {
              ...f
            }, {
              ...v
            }, {
              ...x
            }, {
              ...S
            }, {
              ...y
            }, {
              ...k
            }, {
              ...b("Position")
            }],
            t = [{
              ...u("Box Model")
            }, {
              ...w
            }, {
              ...I
            }, {
              ...T
            }, {
              ..._
            }, {
              ...C
            }, {
              ...M
            }, {
              ...B
            }, {
              ...L
            }, {
              ...P
            }, {
              ...A
            }, {
              ...p({})
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
              ...b("Box Model")
            }],
            l = [{
              ...u("Text")
            }, {
              ...V
            }, {
              ...U
            }, {
              ...O
            }, {
              ...H
            }, {
              ...X
            }, {
              ...q
            }, {
              ...Y
            }, {
              ...Q
            }, {
              ...W
            }, {
              ...K
            }, {
              ...b("Text")
            }],
            n = [{
              ...u("Background..")
            }, ...m({
              filter: e
            }), ...d({
              filter: e
            }), ...c({
              filter: e
            }), {
              ...b("Background")
            }],
            o = [{
              ...u("Grid")
            }, {
              ...N("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...N("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...D
            }, {
              ...E
            }, {
              ...j
            }, {
              ...z
            }, {
              ...R
            }, {
              ...$
            }, {
              ...F
            }, {
              ...G
            }, {
              ...re
            }, {
              ...b("Grid")
            }],
            i = [{
              ...u("Image")
            }, {
              ...ae
            }, {
              ...ie
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...te
            }, {
              ...le
            }, {
              ...ne
            }, {
              ...oe
            }, {
              ...re
            }, {
              ...b("Image")
            }],
            r = [...t, ...a, ...l, ...n];
          return "grid" === e && r.push(...o), ("image" === e || "layeredImage" === e || e?.startsWith("parallax")) && r.push(...i), "gridItem" === e && r.push({
            ...D
          }), "title" === e && (r.push(K), r.push(J)), r
        },
        de = ({
          filter: e = null,
          name: a = "style",
          label: t = "CSS Variables"
        }) => ({
          label: t,
          name: a,
          description: "Override CSS Variables",
          component: "group",
          fields: [...me({
            filter: e
          })]
        }),
        ce = ({
          parent: e = null,
          filter: a = null
        }) => ({
          name: e ? `${e}.attributes` : "attributes",
          label: "Attributes",
          component: "group",
          fields: [{
            name: "id",
            label: "ID",
            component: "text"
          }, {
            name: "rel",
            label: "rel",
            component: "text"
          }, {
            name: "className",
            label: "Class Names",
            component: "text",
            description: "Must be a space-separated list of valid CSS class names (excluding periods)."
          }, {
            name: "hiddenMobile",
            label: "Hide on Mobile",
            component: "toggle"
          }, {
            name: "hiddenLarge",
            label: "Hide on Desktop",
            component: "toggle"
          }, r({
            parent: e
          }), de({
            filter: a
          })]
        }),
        pe = (e = {}) => ({
          label: "Show/Hide",
          name: "displayClass",
          description: "Show/Hide the layer based on screen size.",
          component: "select",
          options: [{
            label: "Always Show",
            value: ""
          }, {
            label: "Hide on Mobile",
            value: "hiddenMobile"
          }, {
            label: "Hide on Desktop",
            value: "hiddenLarge"
          }]
        });
      var ue = t(25993);
      const be = (e = {}) => ({
          name: "borderImage",
          label: "Border Image Properties",
          description: "Control border-image properties.",
          component: "group",
          fields: [{
            name: "--border-image-source",
            label: "Border Image Source",
            description: "Source of image to be used as a border.",
            component: "image",
            clearable: !0,
            uploadDir: ue.XC,
            parse: ue.qg,
            previewSrc: ue.z0
          }, {
            name: "--border-image-slice",
            label: "Border Image Slice",
            description: "The dimensions for slicing the source image into regions.",
            component: "text"
          }, {
            name: "--border-image-width",
            label: "Border Image Width",
            description: "The width of the border image.",
            component: "text"
          }, {
            name: "--border-image-outset",
            label: "Border Image Outset",
            description: "The distance of the border image from the element's outside edge.",
            component: "text"
          }, {
            name: "--border-image-repeat",
            label: "Border Image Repeat",
            description: "Defines how the edge regions of the source image are adjusted to fit the dimensions of the border image.",
            component: "text"
          }, pe({})]
        }),
        ge = ({
          filter: e = null
        }) => ({
          name: "className",
          label: "Class Names",
          component: "text",
          description: "Must be a space-separated list of valid CSS class names (excluding periods)."
        }),
        he = () => ({
          name: o,
          label: "Content",
          component: "html"
        }),
        fe = (e = {
          label: "TranslationKey",
          description: "This value must begin with `key_` and MUST BE UNIQUE."
        }) => ({
          name: "key",
          component: "text",
          ...e
        }),
        ve = (e = {}) => ({
          name: "ctas",
          label: "CTA buttons",
          component: "group-list",
          fields: [va({
            name: "expandingButtonLabel",
            label: "Expanding Button Label",
            description: "Default: Subscribe",
            component: "text"
          }), {
            name: "isInExpandingButton",
            label: "Is this CTA within the expanding button?",
            component: "toggle"
          }, {
            name: "platform",
            label: "Choose Platform",
            component: "select",
            options: [{
              value: null,
              label: "-- Select an Icon --"
            }, {
              value: "",
              label: "No Icon"
            }, {
              value: "ps5",
              label: "PlayStation 5"
            }, {
              value: "ps4",
              label: "PlayStation 4"
            }, {
              value: "xboxone",
              label: "Xbox One"
            }, {
              value: "xboxseriesxs",
              label: "Xbox Series X|S"
            }, {
              value: "pc",
              label: "PC"
            }, {
              value: "questionmark",
              label: "Question Mark"
            }]
          }, va({
            name: "href",
            label: "Link",
            component: "text"
          }), va({
            name: "buttonText",
            label: "Button Text",
            description: "For non-platform button labels",
            component: "text"
          }), fe()],
          ...e,
          itemProps: e => fa(e, {
            label: `Link for [${e?.platform??e?.buttonText??""}]`
          }),
          defaultItem: () => ga()
        }),
        xe = ({
          templates: e = []
        }) => ({
          label: "Content",
          description: "Add/remove/arrange/configure sections",
          name: o,
          component: "blocks",
          templates: e
        }),
        Se = [{
          value: "",
          label: "-- Select Grid Context --"
        }, {
          value: "twitch-drops",
          label: "Twitch Drops"
        }, {
          value: "newswire-article",
          label: "Newswire Article"
        }, {
          value: "readable-text",
          label: "Standard Readable Text (max width of 640px)"
        }, {
          value: "grid-inset",
          label: "Grid with padding on top/bottom"
        }, {
          value: "clr-article",
          label: "Circoloco Records"
        }, {
          value: "gta-plus",
          label: "GTA Plus"
        }],
        ye = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: Se,
          initialValues: Se[0]
        }),
        ke = () => ({
          name: "gtm",
          label: "Google Analytics",
          component: "group",
          fields: [{
            name: "event",
            label: "Event",
            component: "text"
          }, {
            name: "element_placement",
            label: "Element Placement",
            component: "text"
          }, {
            name: "text",
            label: "Text",
            component: "text"
          }],
          itemProps: e => fa(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => ga()
        }),
        we = () => ({
          name: "id",
          label: "ID",
          description: "HTML attribute used to specify a unique id for an element. (WITHOUT the # sign, sometimes used for jump links)",
          component: "text"
        }),
        Ie = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, s.jsx)("hr", {})
        }),
        Te = ({
          name: e,
          label: a = e
        }) => ({
          name: e,
          label: a,
          component: "group",
          description: "If responsive, only the Mobile Source is needed.",
          fields: [{
            name: "mobile",
            label: "Mobile Source",
            component: "image",
            clearable: !0,
            uploadDir: ue.XC,
            parse: ue.qg,
            previewSrc: ue.z0
          }, {
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: ue.XC,
            parse: ue.qg,
            previewSrc: ue.z0
          }, de({
            name: "imageMobileStyle",
            label: "Mobile CSS Style",
            filter: "image"
          }), de({
            name: "imageDesktopStyle",
            label: "Desktop CSS Style",
            filter: "image"
          })]
        }),
        _e = [{
          ...Ie("Background Image Gradient")
        }, {
          ...((e = "Label") => ({
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, s.jsx)("h3", {
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
          ...Ie("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        Ce = ({
          game: e = null,
          label: a = "Image Configuration",
          name: t = "image"
        }) => {
          const l = [va({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), va({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, Te({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map(e => Te({
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
          }, va({
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
          }), va({
            name: "caption",
            label: "Caption",
            component: "html"
          }), fe({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== e && "rdr2" !== e || l.push({
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
          }), l.push({
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
          }), "Background Image" === a && l.push(..._e), {
            name: t,
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => ga(i),
            itemProps: e => fa(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var Me = t(42909),
        Be = t(30635);
      const Le = {
          alt: "",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        Pe = ({
          name: e = "src",
          label: a = e,
          description: t
        }) => ({
          name: e,
          label: a,
          description: t,
          component: "image",
          clearable: !0,
          uploadDir: ue.XC,
          parse: ue.qg,
          previewSrc: ue.z0
        }),
        Ae = ({
          name: e,
          label: a = e,
          description: t
        }) => ({
          name: e,
          label: a,
          description: t ?? "If responsive, only the Mobile Source is needed.",
          component: "group",
          fields: [Pe({
            name: "mobile",
            label: "Mobile Source"
          }), Pe({
            name: "desktop",
            label: "Desktop Source"
          })]
        }),
        De = ({
          name: e = "image",
          label: a = "Image",
          description: t,
          ImageField: l = Pe
        }) => {
          const n = Me.POSIXLocales;
          return {
            name: e,
            label: a,
            description: t,
            component: "group",
            fields: [l({
              name: "sources.en_us",
              label: "Upload Global Image"
            }), {
              name: "sources",
              label: "Upload Localized Images",
              description: "The site will default to the global value, but use a locale one on locale sites if it exists here.",
              component: "group",
              fields: n.map(e => l({
                name: e
              }))
            }],
            defaultItem: () => ga(),
            itemProps: e => fa(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        Ne = ({
          name: e = "image",
          label: a = "Image",
          description: t
        }) => De({
          name: e,
          label: a,
          description: t,
          ImageField: Ae
        }),
        Ge = [{
          ...(0, Be.cG)("Background Image Gradient")
        }, {
          ...(0, Be.ri)("Background Image Gradient")
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
            label: "XSmall"
          }, {
            value: "5",
            label: "Small"
          }, {
            value: "10",
            label: "Medium"
          }, {
            value: "15",
            label: "Large"
          }, {
            value: "20",
            label: "XLarge"
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
          ...(0, Be.cG)("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "Example: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        Ee = ({
          name: e = "image",
          label: a = "Image Configuration",
          description: t = "",
          game: l = ""
        }) => {
          const n = [va({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), va({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, Ne({
            name: "image",
            label: "Image",
            description: "",
            ImageField: Ae
          }), va({
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
          }), va({
            name: "caption",
            label: "Caption",
            component: "html"
          }), fe({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== l && "rdr2" !== l || n.push({
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
          }), n.push({
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
          }), "Background Image" === a && n.push(...Ge), {
            name: e,
            label: a,
            description: t,
            component: "group",
            fields: n,
            defaultItem: () => ga(Le),
            itemProps: e => fa(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        je = () => ({
          name: "impressionTracking",
          label: "Impression Tracking",
          component: "group",
          fields: [{
            name: "shouldTrack",
            label: "Track Section Impression",
            component: "toggle",
            description: "Should a GA tracking event be fired when this section enters the viewport? (Event data is set in GA Event Tracking section)"
          }, {
            name: "threshold",
            label: "Threshold",
            component: "number",
            step: .1,
            description: "A number from 0 - 1, how much of the component should be in the viewport before tracking? (i.e. 0.6 is 60%)"
          }],
          itemProps: e => fa(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => ga()
        }),
        ze = ({
          game: e = null,
          filter: a = null
        }) => {
          const t = [va({
            label: "Title",
            name: "title",
            component: "text"
          }), Ce({
            game: e,
            label: "Image Sources"
          })];
          return "discounts" !== a && t.push(va({
            label: "Description",
            name: "description",
            component: "html"
          })), t.push(va({
            label: "Link",
            name: "to",
            component: "text"
          }), de({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...t, ge({
              filter: "grid"
            }), we(), Oe({
              filter: a,
              fields: t,
              game: e
            }), je(), ke()],
            defaultItem: () => ga({
              image: ga(i)
            }),
            itemProps: e => fa(e, {
              label: e?.[n]?.title ? `${e[n].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        Re = ({
          filter: e = null,
          game: a = null,
          label: t = null,
          name: l = "items"
        }) => ({
          name: l,
          label: t ?? `Edit ${l}`,
          component: "blocks",
          templates: [ze({
            filter: e,
            game: a
          })],
          defaultItem: () => ga(),
          itemProps: e => fa(e, {})
        }),
        $e = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => ga({
            hero: !1
          })
        }),
        Fe = ({
          fields: e = []
        }) => ({
          label: "Media Query",
          name: "mediaQuery",
          description: "Override options based on screen size.",
          component: "group",
          fields: [{
            label: "Media Query String",
            name: "mediaQueryString",
            description: "ex. (max-width: 600px)",
            component: "text"
          }, ...e],
          defaultItem: () => ga(),
          itemProps: e => fa(e, {
            label: `Media Query: ${e?.mediaQueryString??"New"}`
          })
        }),
        Oe = ({
          fields: e = [],
          filter: a = null
        }) => ({
          label: "Media Queries",
          name: "mediaQueryList",
          description: "Override styles based on screen size",
          component: "blocks",
          templates: [Fe({
            filter: a,
            fields: e
          })]
        }),
        He = (e = {
          post: null
        }) => ({
          name: "info",
          label: "Metadata",
          component: "group",
          description: "Title, Description",
          fields: [{
            name: "meta.title",
            label: "Title",
            component: "text"
          }, {
            name: "meta.description",
            label: "Description",
            component: "text"
          }, {
            name: "meta.keywords",
            label: "Keywords",
            component: "text"
          }, {
            name: "published",
            label: "Published Status",
            component: "toggle"
          }]
        }),
        Xe = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        Ue = (e = {}) => ({
          component: "group-list",
          name: "platformsAndLinks",
          label: "Platforms and Links",
          fields: [{
            name: "platform",
            label: "Choose Platform",
            description: "You can only choose EITHER platform or button text.",
            component: "select",
            options: [{
              value: null,
              label: "-- Select an Icon --"
            }, {
              value: "ps5",
              label: "PlayStation 5"
            }, {
              value: "ps4",
              label: "PlayStation 4"
            }, {
              value: "ps",
              label: "PlayStation"
            }, {
              value: "xbox",
              label: "Xbox"
            }, {
              value: "xboxone",
              label: "Xbox One"
            }, {
              value: "xboxseriesxs",
              label: "Xbox Series X|S"
            }, {
              value: "nintendoswitch",
              label: "Nintendo Switch"
            }, {
              value: "nintendoswitch2",
              label: "Nintendo Switch 2"
            }, {
              value: "pc",
              label: "PC"
            }, {
              value: "pcalt",
              label: "PC Enhanced"
            }, {
              value: "applestore",
              label: "Apple App Store"
            }, {
              value: "googleplay",
              label: "Google Play"
            }, {
              value: "netflix",
              label: "Netflix Games"
            }]
          }, {
            name: "href",
            label: "Link",
            component: "text"
          }, {
            name: "buttonText",
            label: "Button Text",
            description: "For non-platform button labels.",
            component: "text"
          }, ke()],
          ...e,
          itemProps: e => fa(e, {
            label: `Link for [${e?.platform??""}]`
          }),
          defaultItem: () => ga()
        }),
        Ve = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }, {
          name: "subtitle",
          label: "Subtitle",
          component: "text"
        }, {
          name: "blurb",
          label: "Meta description",
          component: "textarea"
        }, {
          component: "select",
          name: "template",
          label: "Post Template",
          options: [{
            value: "",
            label: "None"
          }, {
            value: "event",
            label: "Event Post"
          }, {
            value: "community",
            label: "Community Post"
          }, {
            value: "title",
            label: "Title Release/Update"
          }, {
            value: "halloween",
            label: "Halloween Post"
          }]
        }, {
          name: "event_num",
          label: "Event Number",
          component: "number"
        }, Ze({
          name: "primary_tags",
          label: "Game",
          description: "Applies title-specific styling",
          context: 1
        }), ...na(), Ze({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        qe = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...Ve(), {
            name: "created",
            label: "Post Date",
            component: "date",
            dateFormat: "YYYY-MM-DD",
            timeFormat: "HH:mm:ss"
          }, {
            name: "animateIn",
            label: "Animate Content In?",
            description: "Should each block animate as it's scrolled into view?",
            component: "toggle"
          }, {
            name: "include_in_related",
            label: "Included as related elsewhere",
            description: "Show this article as a related article in other posts?",
            component: "toggle"
          }, {
            name: "show_related",
            label: "Show Related Posts",
            description: "Show related posts under this one?",
            component: "toggle"
          }, {
            name: "stuck_priority",
            description: "Toggle on to move this post to the top of the newswire",
            label: "Sticky",
            component: "toggle"
          }, {
            name: "expired_after",
            label: "Expiration Date",
            description: "Set this date to hide this post from the newswire index some time in the future.",
            component: "date",
            dateFormat: "YYYY-MM-DD",
            timeFormat: "HH:mm:ss"
          }, {
            name: "cdn",
            label: "Use production cdn?",
            description: "Set this to true to if images being public is ok. Images will take a couple minutes to show up after saving.",
            component: "toggle"
          }, {
            name: "posts_status_id",
            label: "Published",
            component: "toggle",
            description: "Toggle off to remove post from the site."
          }, {
            name: "translations_approved",
            label: "Translations Approved",
            component: "toggle",
            description: "If you want translations to sync, toggle this to on."
          }, Ye()]
        }),
        Ye = () => ({
          name: "preview_images",
          label: "Manage preview images",
          description: "Upload images for use on newswire cards",
          component: "group",
          fields: ["en_us", "de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map(e => ({
            name: e,
            label: e,
            component: "group",
            fields: [{
              name: "newswire-block-16x9",
              label: "16x9 Source",
              component: "image",
              clearable: !0,
              uploadDir: ue.XC,
              previewSrc: ue.z0,
              parse: ue.qg
            }, {
              name: "newswire-block-square",
              label: "Square Source",
              component: "image",
              clearable: !0,
              uploadDir: ue.XC,
              previewSrc: ue.z0,
              parse: ue.qg
            }]
          }))
        }),
        Qe = () => ({
          name: "advancedScrollmationConfigurations",
          label: "Advanced Scrollmation Configurations",
          component: "group",
          fields: [{
            name: "anticipatePin",
            label: "Anticipate Pin | Number - Have ScrollTrigger monitor the scroll velocity and anticipate the pin (the default is 0).",
            component: "number"
          }, {
            name: "start",
            label: "Start Position | String - Determines the starting position of the ScrollTrigger.",
            component: "text"
          }, {
            name: "end",
            label: "End Position | String - Determines the ending position of the ScrollTrigger.",
            component: "text"
          }, {
            name: "ease",
            label: 'Ease | String -  the ease that the snapping animation should use. The default is "power3".',
            component: "text"
          }, {
            name: "fastScrollEnd",
            label: "Fast Scroll End | Boolean - If true, it will force the current ScrollTrigger is animation to completion",
            component: "toggle"
          }, {
            name: "horizontal",
            label: "Horizontal Scroll | Boolean - true if your setup uses horizontal scrolling instead.",
            component: "toggle"
          }, {
            name: "invalidateOnRefresh",
            label: "Invalidate on Refresh |  Boolean - This flushes out any internally-recorded starting values.",
            component: "toggle"
          }, {
            name: "markers",
            label: "Markers | Boolean - Adds markers that are helpful during development",
            component: "toggle"
          }, {
            name: "once",
            label: "Once  | Boolean -  If true, the ScrollTrigger will only play once",
            component: "toggle"
          }, {
            name: "pin",
            label: "Pin | Boolean - Adds markers that are helpful during development",
            component: "toggle"
          }, {
            name: "pinReparent",
            label: "Pin Reparent | Boolean - If true, the pinned element will be reparented to the <body>",
            component: "toggle"
          }, {
            name: "pinSpacer",
            label: "Pin Spacer | String - normally ScrollTrigger creates a <div> internally to wrap around pinned elements but in the extremely rare scenario where you are loading an iframe into the pinned element.",
            component: "toggle"
          }, {
            name: "preventOverlaps",
            label: "Prevent Overlaps | Boolean - this feature activates as a ScrollTrigger is about to trigger an animation.",
            component: "toggle"
          }, {
            name: "refreshPriority",
            label: "Refresh Priority | Number - Use refreshPriority to influence the order in which ScrollTriggers get refreshed.",
            component: "number"
          }, {
            name: "scrub",
            label: "Scrub | String - Links the progress of the animation directly to the scrollbar so it acts like a scrubber.",
            component: "text"
          }],
          itemProps: e => fa(e, {
            label: "Advanced Scrollmation Field Settings"
          }),
          defaultItem: () => ga()
        });
      var We = t(13331),
        Ke = t(84620),
        Je = t(93283);
      const Ze = ({
          label: e = "Tags",
          name: a = "tags",
          description: t = null,
          context: l = null
        }) => ({
          label: e,
          name: a,
          description: t,
          component: function({
            field: e,
            input: a,
            meta: t
          }) {
            const {
              data: n
            } = (0, We.useQuery)(Ke.TagList, {
              variables: {
                locale: "en_us",
                context: l
              }
            });
            if (!n || !(n?.tagList ?? []).length) return null;
            const o = [{
              id: "",
              name: "-- Select Tag --"
            }, ...n.tagList];
            return (0, s.jsx)(Je.A, {
              field: e,
              input: a,
              meta: t,
              children: (0, s.jsx)("select", {
                ...a,
                children: o.map(e => (0, s.jsx)("option", {
                  value: e.id,
                  children: e.name
                }, e.id))
              })
            })
          }
        }),
        ea = () => va({
          label: "Text",
          name: o,
          component: "html"
        }),
        aa = () => ({
          label: "Hardcoded Theme",
          name: "theme",
          description: "Dev-built themes for one-off posts.",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Theme --"
          }, {
            value: "gtao-halloween-2022",
            label: "GTAO Halloween 2022"
          }, {
            value: "gtao-tuner-promo",
            label: "GTAO Tuner Promo"
          }, {
            value: "gtao-tuner-announcement",
            label: "GTAO Tuner Announcement"
          }, {
            value: "gta-trilogy-announcement",
            label: "GTA Trilogy Announcement"
          }, {
            value: "rdo-telegram",
            label: "RDO Telegram"
          }, {
            value: "9998",
            label: "9998"
          }, {
            value: "9997",
            label: "9997"
          }, {
            value: "9996",
            label: "9996"
          }]
        }),
        ta = {
          label: "Theme Name",
          name: "themeName",
          component: "select",
          type: "string",
          options: [{
            value: "",
            label: "-- Select --"
          }, {
            value: We.PAGE_THEMES.BL,
            label: We.PAGE_THEMES.BL
          }]
        },
        la = {
          label: "Theme Level",
          name: "themeLevel",
          component: "select",
          type: "string",
          options: [{
            value: "",
            label: "-- Select --"
          }, {
            value: "0",
            label: "Level 0"
          }, {
            value: "1",
            label: "Level 1"
          }, {
            value: "2",
            label: "Level 2"
          }, {
            value: "3",
            label: "Level 3"
          }]
        },
        na = () => [ta, la],
        oa = () => ({
          label: "Image manager",
          name: "uploads",
          component: "group",
          fields: [{
            name: "directory",
            label: "Upload Directory",
            component: "text"
          }, {
            name: "prod",
            label: "Prod Images?",
            description: "Set this to true to upload images to akamai. Images may take a couple minutes to show up after saving.",
            component: "toggle"
          }]
        });
      var ia = t(93082),
        ra = t(40779);
      const sa = ({
          field: e,
          input: a,
          form: t
        }) => {
          const {
            name: l,
            label: n,
            description: o,
            fileLoaded: i
          } = e, [r, m] = (0, ia.useState)("");
          return (0, s.jsxs)(Je.A, {
            name: l,
            label: n,
            description: o,
            children: [(0, s.jsx)(ra.A, {
              onChange: e => {
                m(e)
              },
              name: a?.name,
              value: r,
              accept: ".xml"
            }), (0, s.jsx)("button", {
              style: {
                display: "block"
              },
              onClick: () => (async () => {
                if (!r) return;
                const e = new FileReader;
                e.onload = async e => {
                  i(e.target.result)
                }, e.readAsText(r)
              })(),
              children: "Save XML"
            })]
          })
        },
        ma = ({
          name: e,
          label: a,
          description: t,
          fileLoaded: l
        }) => ({
          name: e,
          label: a,
          description: t,
          fileLoaded: l,
          component: sa,
          clearable: !0
        }),
        da = ({
          name: e,
          label: a = e
        }) => ({
          name: e,
          label: a,
          component: "group",
          description: "(If responsive, only Mobile Source is needed)",
          fields: [{
            name: "mobile",
            label: "Mobile Source",
            component: "image",
            clearable: !0,
            uploadDir: ue.XC,
            parse: ue.qg,
            previewSrc: ue.z0
          }, {
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: ue.XC,
            parse: ue.qg,
            previewSrc: ue.z0
          }]
        }),
        ca = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        pa = ({
          name: e = "image",
          label: a = "Image configuration"
        }) => ({
          name: e,
          label: a,
          component: "group",
          fields: [va({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), da({
            name: "sources.en_us",
            label: "Upload global images"
          }), {
            name: "sources",
            label: "Upload local images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ca.map(e => da({
              name: e
            }))
          }, va({
            name: "caption",
            label: "Caption",
            component: "html"
          })],
          defaultItem: () => ga(),
          itemProps: a => fa(a, {
            label: `Image [${e}]`
          })
        }),
        ua = ({
          name: e,
          label: a = name
        }) => ({
          name,
          label: a,
          component: "group",
          description: "Only use Desktop Images for now.",
          fields: [{
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: ue.XC,
            parse: ue.qg,
            previewSrc: ue.z0
          }]
        }),
        ba = ({
          label: e = "Image Configuration"
        }) => ({
          name: "posterImage",
          label: e,
          component: "group",
          fields: [ua({
            name: "sources.en_us",
            label: "Upload Global Images"
          })],
          defaultItem: () => ga({}),
          itemProps: e => fa(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        }),
        ga = (e = {}) => ({
          ...e,
          key: `key_${(0,l.A)()}`
        }),
        ha = (e = {}) => ({
          ...e,
          key: `pricing_key_${(0,l.A)()}`
        }),
        fa = (e, a = {}) => ({
          ...a,
          key: e.key
        }),
        va = e => ({
          ...e,
          name: `${n}.${e.name}`
        })
    },
    93283(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var l = t(39793),
        n = t(93082),
        o = t(79484);
      const i = ({
        style: e,
        width: a,
        height: t,
        resizable: i,
        field: r,
        input: s,
        meta: m,
        name: d,
        label: c,
        description: p,
        error: u,
        children: b
      }) => {
        const g = () => i ? (0, l.jsx)(o.c, {
          defaultSize: {
            width: a || "100%",
            height: t || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, n.cloneElement)(b, ...s)
        }) : b;
        return (0, l.jsxs)("div", {
          className: "rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
          style: e,
          children: [(0, l.jsxs)("label", {
            className: "rockstargames-sites-legacyceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
            htmlFor: d ?? r?.name,
            children: [c ?? r?.label, (0, l.jsx)("span", {
              className: "rockstargames-sites-legacya0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: p ?? r?.description
            })]
          }), (0, l.jsx)(g, {}), (u || m?.error) && (0, l.jsx)("div", {
            className: "FieldError_sc_custom",
            children: u ?? m?.error
          })]
        })
      }
    },
    40779(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var l = t(39793);
      const n = ({
        value: e,
        onChange: a = () => {},
        multi: t = !1,
        ...n
      }) => {
        const o = ({
          value: e,
          multi: a
        }) => a ? (0, l.jsxs)("div", {
          children: ["Selected files:", e.map(e => e.name).join(", ")]
        }) : (0, l.jsxs)("div", {
          children: ["Selected file:", e.name]
        });
        return (0, l.jsx)("label", {
          children: e && "" !== e ? (0, l.jsx)(o, {
            value: e,
            multi: t
          }) : (0, l.jsx)("input", {
            ...n,
            type: "file",
            onChange: e => {
              a(t ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }
    },
    30635(e, a, t) {
      "use strict";
      t.d(a, {
        cG: () => n,
        cm: () => o.A,
        zp: () => i.A,
        t$: () => r,
        ri: () => s
      });
      var l = t(39793);
      const n = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, l.jsx)("hr", {})
      });
      var o = t(93283),
        i = t(40779);
      const r = ({
          defaultValue: e,
          name: a
        }) => (0, l.jsx)("input", {
          type: "hidden",
          value: e,
          name: a
        }),
        s = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, l.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        })
    }
  }
]);