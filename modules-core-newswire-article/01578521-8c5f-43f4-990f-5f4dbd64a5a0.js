! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "01578521-8c5f-43f4-990f-5f4dbd64a5a0", e._sentryDebugIdIdentifier = "sentry-dbid-01578521-8c5f-43f4-990f-5f4dbd64a5a0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7539], {
    17539: (e, a, t) => {
      "use strict";
      t.d(a, {
        F2: () => oe,
        bY: () => se,
        Y4: () => ce,
        f6: () => de,
        KO: () => me,
        CT: () => fe,
        pr: () => he,
        Xt: () => xe,
        ho: () => ke,
        Zn: () => we,
        om: () => Ce,
        sE: () => ie,
        Qw: () => Ie,
        ZH: () => Be,
        A_: () => Se,
        m9: () => l,
        Q: () => _e,
        Rv: () => Me,
        z9: () => De
      });
      var n = t(42868);
      const l = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        i = e => {
          let {
            parent: a = null
          } = e;
          return {
            label: "Aria Label",
            name: a ? `${a}.ariaLabel` : "ariaLabel",
            component: "text",
            description: "Label text that is used for screen readers"
          }
        },
        o = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return [{
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
          }]
        },
        r = function() {
          const e = {
            name: "backgroundImage",
            label: "Background Image",
            component: "text",
            initialValues: "url()",
            format: e => e ? -1 !== e.indexOf("url(") ? `url(${e.split("url(")[1].split(")")[0]})` : `url(${e})` : "url()"
          };
          let a;
          return a = "grid" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null,
            filter: null
          }).filter ? [e, {
            name: "--grid-background-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "--grid-background-position",
            label: "Background Position",
            component: "text"
          }] : [e, {
            name: "backgroundSize",
            label: "Background Size",
            component: "text"
          }, {
            name: "backgroundPosition",
            label: "Background Position",
            component: "text"
          }], a
        },
        s = function() {
          return "grid" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null,
            filter: null
          }).filter ? [{
            name: "--grid-background-repeat",
            label: "Background Repeat",
            component: "select",
            options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
          }] : [{
            name: "backgroundRepeat",
            label: "Background Repeat",
            component: "select",
            options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
          }]
        };
      var c = t(73855);
      const d = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          return {
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, c.jsx)("h3", {
              style: {
                marginBottom: "var(--tina-padding-small)",
                "--color-h3": "var(--tina-color-grey-8)"
              },
              children: e
            })
          }
        },
        m = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, c.jsx)("hr", {})
          }
        },
        p = [{
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
        u = [{
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
        g = {
          label: "Top",
          name: "top",
          description: "Distance from top for LAYERS (recommended to use %)",
          component: "text"
        },
        b = {
          label: "Left",
          name: "left",
          description: "Distance from left for LAYERS (recommended to use %)",
          component: "text"
        },
        f = {
          label: "Right",
          name: "right",
          description: "Distance from right for LAYERS (recommended to use %)",
          component: "text"
        },
        A = {
          label: "Bottom",
          name: "bottom",
          description: "Distance from bottom for LAYERS (recommended to use %)",
          component: "text"
        },
        h = {
          label: "Object Position - Vertical",
          name: "--bg-position-vertical",
          description: "Distance from top for BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        v = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        x = {
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
        y = {
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
        w = {
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
          }, ...p, ...u]
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
          }, ...p, ...u]
        },
        S = {
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
          }, ...p, ...u]
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
          }, ...p, ...u]
        },
        I = {
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
          }, ...p]
        },
        _ = {
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
          }, ...p]
        },
        M = {
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
          }, ...p]
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
        E = function() {
          return {
            label: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Grid Position",
            name: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "--grid-position",
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
          }
        },
        L = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        T = {
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
        N = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        F = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        G = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        R = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        j = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        P = {
          label: "--letter-spacing-h",
          name: "--letter-spacing-h",
          description: "Set the --letter-spacing-h",
          component: "text"
        },
        $ = {
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
        O = {
          label: "Header Multiplier",
          name: "--header-multiplier",
          description: "Set the --header-multiplier",
          component: "text"
        },
        Q = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        H = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        U = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        V = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        W = {
          label: "Date/Time Color",
          name: "--time-color",
          description: "Applies to time tags inside this component.",
          component: "color"
        },
        X = {
          label: "Invert Breadcrumb Separator Color",
          name: "toggleInvertSeparator",
          description: "Invert the color.",
          component: "toggle"
        },
        q = {
          label: "Image Width",
          name: "width",
          description: "Set the image width",
          component: "text"
        },
        J = {
          label: "Image Min-Width",
          name: "min-width",
          description: "Set the image min-width",
          component: "text"
        },
        K = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        Y = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        Z = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        ee = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        ae = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        te = {
          label: "Aspect Ratio",
          name: "--aspect-ratio",
          description: "Set the aspect ratio of the image or container",
          component: "text"
        },
        ne = function() {
          return {
            label: "Mix Blend Mode",
            name: "parallaxImageLayer" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null) ? "--mix-blend-mode" : "mixBlendMode",
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
          }
        },
        le = e => {
          let {
            filter: a = null
          } = e;
          const t = [{
              ...d("Position")
            }, {
              ...g
            }, {
              ...b
            }, {
              ...f
            }, {
              ...A
            }, {
              ...h
            }, {
              ...v
            }, {
              ...m("Position")
            }],
            n = [{
              ...d("Box Model")
            }, {
              ...x
            }, {
              ...k
            }, {
              ...y
            }, {
              ...w
            }, {
              ...C
            }, {
              ...S
            }, {
              ...B
            }, {
              ...I
            }, {
              ..._
            }, {
              ...M
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
              ...ne(a)
            }, {
              ...m("Box Model")
            }],
            l = [{
              ...d("Text")
            }, {
              ...O
            }, {
              ...$
            }, {
              ...R
            }, {
              ...j
            }, {
              ...P
            }, {
              ...Q
            }, {
              ...H
            }, {
              ...U
            }, {
              ...V
            }, {
              ...m("Text")
            }],
            i = [{
              ...d("Background..")
            }, ...o({
              filter: a
            }), ...r({
              filter: a
            }), ...s({
              filter: a
            }), {
              ...m("Background")
            }],
            c = [{
              ...d("Grid")
            }, {
              ...E("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...E("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...D
            }, {
              ...L
            }, {
              ...T
            }, {
              ...z
            }, {
              ...N
            }, {
              ...F
            }, {
              ...G
            }, {
              ...m("Grid")
            }],
            p = [{
              ...d("Image")
            }, {
              ...K
            }, {
              ...te
            }, {
              ...q
            }, {
              ...J
            }, {
              ...Y
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...ae
            }, {
              ...m("Image")
            }],
            u = [...n, ...t, ...l, ...i];
          return "grid" === a && u.push(...c), ("image" === a || "layeredImage" === a || a?.startsWith("parallax")) && u.push(...p), "gridItem" === a && u.push({
            ...D
          }), "title" === a && (u.push(W), u.push(X)), u
        },
        ie = e => {
          let {
            filter: a = null,
            name: t = "style",
            label: n = "CSS Variables"
          } = e;
          return {
            label: n,
            name: t,
            description: "Override CSS Variables",
            component: "group",
            fields: [...le({
              filter: a
            })]
          }
        },
        oe = e => {
          let {
            parent: a = null,
            filter: t = null
          } = e;
          return {
            name: a ? `${a}.attributes` : "attributes",
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
            }, i({
              parent: a
            }), ie({
              filter: t
            })]
          }
        };
      var re = t(19544);
      const se = e => {
          let {
            filter: a = null
          } = e;
          return {
            name: "className",
            label: "Class Names",
            component: "text",
            description: "Must be a space-separated list of valid CSS class names (excluding periods)."
          }
        },
        ce = () => ({
          name: Be,
          label: "Content",
          component: "html"
        }),
        de = () => ({
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
          itemProps: e => Me(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => _e()
        }),
        me = () => ({
          name: "id",
          label: "ID",
          description: "HTML attribute used to specify a unique id for an element. (WITHOUT the # sign, sometimes used for jump links)",
          component: "text"
        }),
        pe = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        ue = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, c.jsx)("hr", {})
          }
        },
        ge = e => {
          let {
            name: a,
            label: t = a
          } = e;
          return {
            name: a,
            label: t,
            component: "group",
            description: "If responsive, only the Mobile Source is needed.",
            fields: [{
              name: "mobile",
              label: "Mobile Source",
              component: "image",
              clearable: !0,
              uploadDir: re.XC,
              parse: re.qg,
              previewSrc: re.z0
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: re.XC,
              parse: re.qg,
              previewSrc: re.z0
            }]
          }
        },
        be = [{
          ...ue("Background Image Gradient")
        }, {
          ... function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
            return {
              label: e,
              name: e.toLowerCase().split(" ").join("_"),
              component: () => (0, c.jsx)("h3", {
                style: {
                  marginBottom: "var(--tina-padding-small)",
                  "--color-h3": "var(--tina-color-grey-8)"
                },
                children: e
              })
            }
          }("Background Image Gradient")
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
          ...ue("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        fe = e => {
          let {
            game: a = null,
            label: t = "Image Configuration"
          } = e;
          const n = [De({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), De({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, ge({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => ge({
              name: e
            })))
          }, De({
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
          }), De({
            name: "caption",
            label: "Caption",
            component: "html"
          }), pe({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== a && "rdr2" !== a || n.push({
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
          }), "Background Image" === t && n.push(...be), {
            name: "image",
            label: t,
            component: "group",
            fields: n,
            defaultItem: () => _e(l),
            itemProps: e => Me(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      t(81788);
      var Ae = t(50657);
      (0, Ae.cG)("Background Image Gradient"), (0, Ae.ri)("Background Image Gradient"), (0, Ae.cG)("Background Image Gradient");
      const he = () => ({
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
          itemProps: e => Me(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => _e()
        }),
        ve = e => {
          let {
            game: a = null,
            filter: t = null
          } = e;
          const n = [De({
            label: "Title",
            name: "title",
            component: "text"
          }), fe({
            game: a,
            label: "Image Sources"
          })];
          return "discounts" !== t && n.push(De({
            label: "Description",
            name: "description",
            component: "html"
          })), n.push(De({
            label: "Link",
            name: "to",
            component: "text"
          }), ie({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...n, se({
              filter: "grid"
            }), me(), we({
              filter: t,
              fields: n,
              game: a
            }), he(), de()],
            defaultItem: () => _e({
              image: _e(l)
            }),
            itemProps: e => Me(e, {
              label: e?.[Ie]?.title ? `${e[Ie].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        xe = e => {
          let {
            filter: a = null,
            game: t = null,
            label: n = null,
            name: l = "items"
          } = e;
          return {
            name: l,
            label: n ?? `Edit ${l}`,
            component: "blocks",
            templates: [ve({
              filter: a,
              game: t
            })],
            defaultItem: () => _e(),
            itemProps: e => Me(e, {})
          }
        },
        ke = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => _e({
            hero: !1
          })
        }),
        ye = e => {
          let {
            fields: a = []
          } = e;
          return {
            label: "Media Query",
            name: "mediaQuery",
            description: "Override options based on screen size.",
            component: "group",
            fields: [{
              label: "Media Query String",
              name: "mediaQueryString",
              description: "ex. (max-width: 600px)",
              component: "text"
            }, ...a],
            defaultItem: () => _e(),
            itemProps: e => Me(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        we = e => {
          let {
            fields: a = [],
            filter: t = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [ye({
              filter: t,
              fields: a
            })]
          }
        },
        Ce = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        });
      t(95966), t(61398), t(92580);
      const Se = () => De({
        label: "Text",
        name: Be,
        component: "html"
      });
      t(62229), t(10894);
      const Be = "content",
        Ie = "_memoq",
        _e = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,n.A)()}`
          }
        },
        Me = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        De = e => ({
          ...e,
          name: `${Ie}.${e.name}`
        })
    },
    92580: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var n = t(62229),
        l = t(14636),
        i = t(53178),
        o = t.n(i),
        r = t(27835),
        s = t.n(r),
        c = t(17529),
        d = t.n(c),
        m = t(72162),
        p = t.n(m),
        u = t(82510),
        g = t.n(u),
        b = t(90675),
        f = t.n(b),
        A = t(36877),
        h = {};
      h.styleTagTransform = f(), h.setAttributes = p(), h.insert = d().bind(null, "head"), h.domAPI = s(), h.insertStyleElement = g(), o()(A.A, h);
      const v = A.A && A.A.locals ? A.A.locals : void 0;
      var x = t(73855);
      const k = e => {
        let {
          style: a,
          width: t,
          height: i,
          resizable: o,
          field: r,
          input: s,
          meta: c,
          name: d,
          label: m,
          description: p,
          error: u,
          children: g
        } = e;
        const b = () => o ? (0, x.jsx)(l.c, {
          defaultSize: {
            width: t || "100%",
            height: i || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, n.cloneElement)(g, ...s)
        }) : g;
        return (0, x.jsxs)("div", {
          className: `${v.FieldWrapper_sc_custom} FieldWrapper-sc-custom jpQZXK`,
          style: a,
          children: [(0, x.jsxs)("label", {
            className: `${v.FieldLabel_sc_custom} FieldLabel-sc-custom dzLxXV`,
            htmlFor: d ?? r?.name,
            children: [m ?? r?.label, (0, x.jsx)("span", {
              className: `${v.FieldDescription_sc_custom} FieldDescription-sc-custom cyKzVM`,
              children: p ?? r?.description
            })]
          }), (0, x.jsx)(b, {}), (u || c?.error) && (0, x.jsx)("div", {
            className: "FieldError_sc_custom",
            children: u ?? c?.error
          })]
        })
      }
    },
    10894: (e, a, t) => {
      "use strict";
      t(73855)
    },
    50657: (e, a, t) => {
      "use strict";
      t.d(a, {
        cG: () => l,
        cm: () => i.A,
        ri: () => o
      });
      var n = t(73855);
      const l = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, n.jsx)("hr", {})
        }
      };
      var i = t(92580);
      t(10894);
      const o = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
        return {
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, n.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }
      }
    },
    36877: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var n = t(42587),
        l = t.n(n),
        i = t(15081),
        o = t.n(i),
        r = t(79908),
        s = t.n(r),
        c = new URL(t(75958), t.b),
        d = o()(l()),
        m = s()(c);
      d.push([e.id, `.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67{margin-bottom:var(--tina-padding-big,20px);position:relative}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67,.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 *{box-sizing:border-box;font-family:Inter,sans-serif}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-newswire-articleceac2b2784e621f05ce51dade558df8d{all:unset;color:var(--tina-color-grey-8,#433e52);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-1,13px);font-weight:600;-webkit-letter-spacing:.01em;-moz-letter-spacing:.01em;-ms-letter-spacing:.01em;letter-spacing:.01em;line-height:1.35;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;width:100%}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-newswire-articlea0b2c6a5b66b849b487834caa1f6e3c8{all:unset;color:var(--tina-color-grey-6,#716c7f);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-0,12px);font-style:italic;font-weight:lighter;margin:0;padding-top:4px;white-space:normal}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 input{box-shadow:0 0 0 2px transparent}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 input,.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 select{background:var(--tina-color-grey-0,#fff);background-color:var(--tina-color-grey-0,#fff);border:1px solid var(--tina-color-grey-2,#edecf3);border-radius:var(--tina-radius-small,5px);font-size:var(--tina-font-size-2,15px);line-height:1.35;margin:0;outline:none;padding:var(--tina-padding-small,12px);position:relative;transition:all 85ms ease-out;width:100%}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(${m});background-position:right .7em top 50%;background-repeat:no-repeat;background-size:.65em auto;display:block;font-family:inherit;max-width:100%}.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-newswire-articled9b75ea1bc84f8562bd9c7c730ce7317,.rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 .rockstargames-modules-core-newswire-articled84706d08967f65d5d2384427474feb5{color:var(--tina-color-error,#ec4815)}[class^=BlockMenuList-] button,button[class^=CreateButton-]{color:#000}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/tina/src/ui/FieldWrapper/index.less"],
        names: [],
        mappings: "AAAA,6EAII,0CAAA,CADA,iBAEJ,CALA,4JACI,qBAAA,CACA,4BAOJ,CATA,0JAWQ,SAAA,CAUA,sCAAA,CATA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,eAAA,CACA,4BAAA,CACA,yBAAA,CACA,wBAAA,CACA,oBAAA,CACA,gBAAA,CAEA,iBAAA,CAGA,eAAA,CAFA,sBAAA,CACA,UAER,CA1BA,0JA6BQ,SAAA,CAMA,sCAAA,CALA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,iBAAA,CACA,mBAAA,CAIA,QAAA,CAFA,eAAA,CACA,kBACR,CAtCA,mFAuDQ,gCADR,CAtDA,uKA4CQ,wCAAA,CAIA,8CAAA,CAGA,iDAAA,CARA,0CAAA,CAEA,sCAAA,CACA,gBAAA,CAOA,QAAA,CACA,YAAA,CAZA,sCAAA,CAKA,iBAAA,CAGA,4BAAA,CAEA,UA2BR,CA/EA,oFA0EQ,uBAAA,CACA,oBAAA,CACA,eAAA,CAEA,wDAAA,CAEA,sCAAA,CADA,2BAAA,CAEA,0BAAA,CAtBA,aAAA,CACA,mBAAA,CACA,cAkBR,CA/EA,oTAsFQ,qCAHR,CAaA,4DACI,UARJ",
        sourcesContent: [".FieldWrapper_sc_custom {\n    box-sizing: border-box;\n    font-family: 'Inter', sans-serif;\n    position: relative;\n    margin-bottom: var(--tina-padding-big, 20px);\n    * {\n        box-sizing: border-box;\n        font-family: 'Inter', sans-serif;\n    }\n\n    .FieldLabel_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-1, 13px);\n        font-weight: 600;\n        -webkit-letter-spacing: 0.01em;\n        -moz-letter-spacing: 0.01em;\n        -ms-letter-spacing: 0.01em;\n        letter-spacing: 0.01em;\n        line-height: 1.35;\n        color: var(--tina-color-grey-8, #433e52);\n        margin-bottom: 8px;\n        text-overflow: ellipsis;\n        width: 100%;\n        overflow: hidden;\n    }\n\n    .FieldDescription_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-0, 12px);\n        font-style: italic;\n        font-weight: lighter;\n        color: var(--tina-color-grey-6, #716c7f);\n        padding-top: 4px;\n        white-space: normal;\n        margin: 0;\n    }\n\n    input {\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        outline: none;\n        box-shadow: 0 0 0 2px transparent;\n    }\n\n    select {\n        display: block;\n        font-family: inherit;\n        max-width: 100%;\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        outline: none;\n        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n        background-repeat: no-repeat;\n        background-position: right 0.7em top 50%;\n        background-size: 0.65em auto;\n    }\n\n    .field-error,\n    .FieldError_sc_custom {\n        color: var(--tina-color-error, #ec4815);\n    }\n}\n\n[class^='BlockMenuList-'] {\n    button {\n        color: black;\n    }\n}\n\nbutton[class^='CreateButton-'] {\n    color: black;\n}\n"],
        sourceRoot: ""
      }]), d.locals = {
        FieldWrapper_sc_custom: "rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67",
        FieldLabel_sc_custom: "rockstargames-modules-core-newswire-articleceac2b2784e621f05ce51dade558df8d",
        FieldDescription_sc_custom: "rockstargames-modules-core-newswire-articlea0b2c6a5b66b849b487834caa1f6e3c8",
        FieldError_sc_custom: "rockstargames-modules-core-newswire-articled9b75ea1bc84f8562bd9c7c730ce7317",
        "field-error": "rockstargames-modules-core-newswire-articled84706d08967f65d5d2384427474feb5"
      };
      const p = d
    },
    61398: e => {
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
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function l(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = n[a] || new Set,
          o = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var n = l(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TagList")
    },
    75958: e => {
      "use strict";
      e.exports = "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"
    }
  }
]);