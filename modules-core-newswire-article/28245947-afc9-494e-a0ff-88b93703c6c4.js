try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28245947-afc9-494e-a0ff-88b93703c6c4", e._sentryDebugIdIdentifier = "sentry-dbid-28245947-afc9-494e-a0ff-88b93703c6c4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3727], {
    13727: (e, t, a) => {
      "use strict";
      a.d(t, {
        F2: () => oe,
        bY: () => se,
        Y4: () => de,
        f6: () => ce,
        KO: () => me,
        CT: () => he,
        pr: () => ve,
        Xt: () => Se,
        ho: () => ye,
        Zn: () => we,
        om: () => Ie,
        sE: () => ie,
        Qw: () => Te,
        ZH: () => Ce,
        A_: () => Me,
        m9: () => n,
        Q: () => _e,
        Rv: () => Be,
        z9: () => Le
      });
      var l = a(59740);
      const n = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        i = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Aria Label",
            name: t ? `${t}.ariaLabel` : "ariaLabel",
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
          let t;
          return t = "grid" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
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
          }], t
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
      var d = a(70954);
      const c = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          return {
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, d.jsx)("h3", {
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
            component: () => (0, d.jsx)("hr", {})
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
        h = {
          label: "Right",
          name: "right",
          description: "Distance from right for LAYERS (recommended to use %)",
          component: "text"
        },
        f = {
          label: "Bottom",
          name: "bottom",
          description: "Distance from bottom for LAYERS (recommended to use %)",
          component: "text"
        },
        v = {
          label: "Object Position - Vertical",
          name: "--bg-position-vertical",
          description: "Distance from top for BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        x = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        S = {
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
        y = {
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
        k = {
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
        I = {
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
          }, ...p, ...u]
        },
        C = {
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
        T = {
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
        B = {
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
        L = {
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
        N = function() {
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
        G = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        E = {
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
        A = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        P = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        j = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        $ = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        z = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        R = {
          label: "--letter-spacing-h",
          name: "--letter-spacing-h",
          description: "Set the --letter-spacing-h",
          component: "text"
        },
        O = {
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
        F = {
          label: "Header Multiplier",
          name: "--header-multiplier",
          description: "Set the --header-multiplier",
          component: "text"
        },
        H = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        Q = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        V = {
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
        U = {
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
        Y = {
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
        J = {
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
        te = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        ae = {
          label: "Aspect Ratio",
          name: "--aspect-ratio",
          description: "Set the aspect ratio of the image or container",
          component: "text"
        },
        le = function() {
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
        ne = e => {
          let {
            filter: t = null
          } = e;
          const a = [{
              ...c("Position")
            }, {
              ...g
            }, {
              ...b
            }, {
              ...h
            }, {
              ...f
            }, {
              ...v
            }, {
              ...x
            }, {
              ...m("Position")
            }],
            l = [{
              ...c("Box Model")
            }, {
              ...S
            }, {
              ...y
            }, {
              ...k
            }, {
              ...w
            }, {
              ...I
            }, {
              ...M
            }, {
              ...C
            }, {
              ...T
            }, {
              ..._
            }, {
              ...B
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
              ...le(t)
            }, {
              ...m("Box Model")
            }],
            n = [{
              ...c("Text")
            }, {
              ...F
            }, {
              ...O
            }, {
              ...$
            }, {
              ...z
            }, {
              ...R
            }, {
              ...H
            }, {
              ...Q
            }, {
              ...V
            }, {
              ...W
            }, {
              ...m("Text")
            }],
            i = [{
              ...c("Background..")
            }, ...o({
              filter: t
            }), ...r({
              filter: t
            }), ...s({
              filter: t
            }), {
              ...m("Background")
            }],
            d = [{
              ...c("Grid")
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
              ...L
            }, {
              ...G
            }, {
              ...E
            }, {
              ...D
            }, {
              ...A
            }, {
              ...P
            }, {
              ...j
            }, {
              ...m("Grid")
            }],
            p = [{
              ...c("Image")
            }, {
              ...K
            }, {
              ...ae
            }, {
              ...q
            }, {
              ...Y
            }, {
              ...J
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...te
            }, {
              ...m("Image")
            }],
            u = [...l, ...a, ...n, ...i];
          return "grid" === t && u.push(...d), ("image" === t || "layeredImage" === t || t?.startsWith("parallax")) && u.push(...p), "gridItem" === t && u.push({
            ...L
          }), "title" === t && (u.push(U), u.push(X)), u
        },
        ie = e => {
          let {
            filter: t = null,
            name: a = "style",
            label: l = "CSS Variables"
          } = e;
          return {
            label: l,
            name: a,
            description: "Override CSS Variables",
            component: "group",
            fields: [...ne({
              filter: t
            })]
          }
        },
        oe = e => {
          let {
            parent: t = null,
            filter: a = null
          } = e;
          return {
            name: t ? `${t}.attributes` : "attributes",
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
              parent: t
            }), ie({
              filter: a
            })]
          }
        };
      var re = a(72405);
      const se = e => {
          let {
            filter: t = null
          } = e;
          return {
            name: "className",
            label: "Class Names",
            component: "text",
            description: "Must be a space-separated list of valid CSS class names (excluding periods)."
          }
        },
        de = () => ({
          name: Ce,
          label: "Content",
          component: "html"
        }),
        ce = () => ({
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
          itemProps: e => Be(e, {
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
            component: () => (0, d.jsx)("hr", {})
          }
        },
        ge = e => {
          let {
            name: t,
            label: a = t
          } = e;
          return {
            name: t,
            label: a,
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
              component: () => (0, d.jsx)("h3", {
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
        he = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const l = [Le({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Le({
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
          }, Le({
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
          }), Le({
            name: "caption",
            label: "Caption",
            component: "html"
          }), pe({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== t && "rdr2" !== t || l.push({
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
          }), "Background Image" === a && l.push(...be), {
            name: "image",
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => _e(n),
            itemProps: e => Be(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      a(81788);
      var fe = a(54108);
      (0, fe.cG)("Background Image Gradient"), (0, fe.ri)("Background Image Gradient"), (0, fe.cG)("Background Image Gradient");
      const ve = () => ({
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
          itemProps: e => Be(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => _e()
        }),
        xe = e => {
          let {
            game: t = null,
            filter: a = null
          } = e;
          const l = [Le({
            label: "Title",
            name: "title",
            component: "text"
          }), he({
            game: t,
            label: "Image Sources"
          })];
          return "discounts" !== a && l.push(Le({
            label: "Description",
            name: "description",
            component: "html"
          })), l.push(Le({
            label: "Link",
            name: "to",
            component: "text"
          }), ie({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...l, se({
              filter: "grid"
            }), me(), we({
              filter: a,
              fields: l,
              game: t
            }), ve(), ce()],
            defaultItem: () => _e({
              image: _e(n)
            }),
            itemProps: e => Be(e, {
              label: e?.[Te]?.title ? `${e[Te].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        Se = e => {
          let {
            filter: t = null,
            game: a = null,
            label: l = null,
            name: n = "items"
          } = e;
          return {
            name: n,
            label: l ?? `Edit ${n}`,
            component: "blocks",
            templates: [xe({
              filter: t,
              game: a
            })],
            defaultItem: () => _e(),
            itemProps: e => Be(e, {})
          }
        },
        ye = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => _e({
            hero: !1
          })
        }),
        ke = e => {
          let {
            fields: t = []
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
            }, ...t],
            defaultItem: () => _e(),
            itemProps: e => Be(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        we = e => {
          let {
            fields: t = [],
            filter: a = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [ke({
              filter: a,
              fields: t
            })]
          }
        },
        Ie = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        });
      a(95966), a(61398), a(40237);
      const Me = () => Le({
        label: "Text",
        name: Ce,
        component: "html"
      });
      a(62229), a(80615);
      const Ce = "content",
        Te = "_memoq",
        _e = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,l.A)()}`
          }
        },
        Be = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        Le = e => ({
          ...e,
          name: `${Te}.${e.name}`
        })
    },
    40237: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var l = a(62229),
        n = a(98282);
      var i = a(70954);
      const o = e => {
        let {
          style: t,
          width: a,
          height: o,
          resizable: r,
          field: s,
          input: d,
          meta: c,
          name: m,
          label: p,
          description: u,
          error: g,
          children: b
        } = e;
        const h = () => r ? (0, i.jsx)(n.c, {
          defaultSize: {
            width: a || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, l.cloneElement)(b, ...d)
        }) : b;
        return (0, i.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
          style: t,
          children: [(0, i.jsxs)("label", {
            className: "rockstargames-modules-core-newswire-articleceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
            htmlFor: m ?? s?.name,
            children: [p ?? s?.label, (0, i.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlea0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: u ?? s?.description
            })]
          }), (0, i.jsx)(h, {}), (g || c?.error) && (0, i.jsx)("div", {
            className: "FieldError_sc_custom",
            children: g ?? c?.error
          })]
        })
      }
    },
    50911: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => d,
        o: () => s
      });
      var l = a(62229),
        n = a(95966),
        i = a(70954);
      const o = (0, n.setContextItem)({
          context: (0, l.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: r
        } = o,
        s = e => {
          let {
            children: t,
            payload: a
          } = e;
          return (0, i.jsx)(r, {
            value: a,
            children: t
          })
        },
        d = () => (0, l.useContext)(o)
    },
    54108: (e, t, a) => {
      "use strict";
      a.d(t, {
        cG: () => n,
        cm: () => i.A,
        ri: () => o
      });
      var l = a(70954);
      const n = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, l.jsx)("hr", {})
        }
      };
      var i = a(40237);
      a(80615);
      const o = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
        return {
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, l.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }
      }
    },
    61398: e => {
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

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var l = e.type;
          "NamedType" === l.kind && t.add(l.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var l = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var l = e.definitions[a];
          if (l.name && l.name.value == t) return l
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), l[e.name.value] = t
        }
      })), e.exports = t, e.exports.TagList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = l[t] || new Set,
          o = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (l[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var l = n(e, t);
          l && a.definitions.push(l)
        })), a
      }(t, "TagList")
    },
    72405: (e, t, a) => {
      "use strict";
      a.d(t, {
        C1: () => s,
        S1: () => r,
        XC: () => p,
        jS: () => d,
        qg: () => c,
        z0: () => m
      });
      var l = a(62229),
        n = a(95966),
        i = a(50911);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        r = e => {
          let {
            alt: t = null,
            mobile: a = null,
            desktop: r = null,
            ariaLabel: s = null,
            sources: d = null,
            prod: c = null
          } = e;
          const m = (0, n.useLocale)(),
            {
              meta: p = {}
            } = (0, i.i)() ?? {},
            [u, g] = (0, l.useState)(c ?? p?.cdn ?? p?.prod ?? !0);
          (0, l.useEffect)((() => {
            g(c ?? p?.cdn ?? p?.prod ?? !0)
          }), [c, p]);
          const b = (0, l.useCallback)((e => {
            const t = null !== d,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return o(a);
            const l = `${t?(0,n.getCdnPrefix)(u):""}${a}`;
            return o(l)
          }), [u, d]);
          return {
            alt: t,
            ariaLabel: s,
            src: {
              mobile: b(d?.[m]?.mobile ?? d?.en_us?.mobile ?? a),
              desktop: b(d?.[m]?.desktop ?? d?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const t = (0, i.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [r, s] = (0, l.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, l.useEffect)((() => {
            s(a?.cdn ?? a?.prod ?? !1)
          }), [a]), e ? e?.startsWith("http") ? o(e) : o(`${(0,n.getCdnPrefix)(r)}${e}`) : null
        },
        d = () => {
          const e = (0, i.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, l.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, l.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const l = t?.prod ?? a;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,n.getCdnPrefix)(l)}${e}`) : null
          }), [a])
        },
        c = e => e.full_src,
        m = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    80615: (e, t, a) => {
      "use strict";
      a(70954)
    }
  }
]);