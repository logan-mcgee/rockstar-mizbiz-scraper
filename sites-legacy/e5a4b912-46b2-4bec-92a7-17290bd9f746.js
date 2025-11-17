try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e5a4b912-46b2-4bec-92a7-17290bd9f746", e._sentryDebugIdIdentifier = "sentry-dbid-e5a4b912-46b2-4bec-92a7-17290bd9f746")
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
  [2323], {
    12323: (e, a, t) => {
      "use strict";
      t.d(a, {
        f6: () => ie,
        CT: () => me,
        SX: () => ve,
        a2: () => he,
        om: () => fe,
        Vz: () => xe,
        sE: () => ne,
        Qw: () => Ce,
        ZH: () => Ie,
        UP: () => we,
        Q: () => Me,
        Rv: () => _e,
        z9: () => Le
      });
      var l = t(11206);
      const n = {
        alt: "Images Need Alt Text",
        badge: null,
        splitter: " ",
        role: "",
        caption: ""
      };
      var o = t(42295);
      const i = (e = {
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
        r = (e = {
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
        s = (e = {
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
        d = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, o.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }),
        c = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, o.jsx)("hr", {})
        }),
        m = [{
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
        p = [{
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
        u = {
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
        g = {
          label: "Right",
          name: "right",
          description: "Distance from right for LAYERS (recommended to use %)",
          component: "text"
        },
        v = {
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
        f = {
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
        S = {
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
        k = {
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
          }, ...m, ...p]
        },
        w = {
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
          }, ...m, ...p]
        },
        I = {
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
          }, ...m, ...p]
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
          }, ...m, ...p]
        },
        M = {
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
          }, ...m]
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
          }, ...m]
        },
        L = {
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
          }, ...m]
        },
        B = {
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
        T = {
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
        G = {
          label: "Grid Align Self",
          name: "--grid-align-self",
          description: "Set the align-self property",
          component: "text"
        },
        E = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        D = {
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
        A = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        $ = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        z = {
          label: "--letter-spacing-h",
          name: "--letter-spacing-h",
          description: "Set the --letter-spacing-h",
          component: "text"
        },
        R = {
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
        O = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        X = {
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
        H = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        V = {
          label: "Date/Time Color",
          name: "--time-color",
          description: "Applies to time tags inside this component.",
          component: "color"
        },
        W = {
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
        Q = {
          label: "Image Min-Width",
          name: "min-width",
          description: "Set the image min-width",
          component: "text"
        },
        Y = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        K = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        J = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        Z = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        ee = {
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
        te = (e = null) => ({
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
        le = ({
          filter: e = null
        }) => {
          const a = [{
              ...d("Position")
            }, {
              ...u
            }, {
              ...b
            }, {
              ...g
            }, {
              ...v
            }, {
              ...h
            }, {
              ...f
            }, {
              ...c("Position")
            }],
            t = [{
              ...d("Box Model")
            }, {
              ...x
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
              ...C
            }, {
              ...M
            }, {
              ..._
            }, {
              ...L
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
              ...te(e)
            }, {
              ...c("Box Model")
            }],
            l = [{
              ...d("Text")
            }, {
              ...F
            }, {
              ...R
            }, {
              ...A
            }, {
              ...$
            }, {
              ...z
            }, {
              ...O
            }, {
              ...X
            }, {
              ...U
            }, {
              ...H
            }, {
              ...c("Text")
            }],
            n = [{
              ...d("Background..")
            }, ...i({
              filter: e
            }), ...r({
              filter: e
            }), ...s({
              filter: e
            }), {
              ...c("Background")
            }],
            o = [{
              ...d("Grid")
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
              ...B
            }, {
              ...T
            }, {
              ...P
            }, {
              ...G
            }, {
              ...E
            }, {
              ...D
            }, {
              ...j
            }, {
              ...c("Grid")
            }],
            m = [{
              ...d("Image")
            }, {
              ...Y
            }, {
              ...ae
            }, {
              ...q
            }, {
              ...Q
            }, {
              ...K
            }, {
              ...J
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...c("Image")
            }],
            p = [...t, ...a, ...l, ...n];
          return "grid" === e && p.push(...o), ("image" === e || "layeredImage" === e || e?.startsWith("parallax")) && p.push(...m), "gridItem" === e && p.push({
            ...B
          }), "title" === e && (p.push(V), p.push(W)), p
        },
        ne = ({
          filter: e = null,
          name: a = "style",
          label: t = "CSS Variables"
        }) => ({
          label: t,
          name: a,
          description: "Override CSS Variables",
          component: "group",
          fields: [...le({
            filter: e
          })]
        });
      var oe = t(34725);
      const ie = () => ({
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
          itemProps: e => _e(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => Me()
        }),
        re = (e = {
          label: "TranslationKey",
          description: "This value must begin with `key_` and MUST BE UNIQUE."
        }) => ({
          name: "key",
          component: "text",
          ...e
        }),
        se = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, o.jsx)("hr", {})
        }),
        de = ({
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
            uploadDir: oe.XC,
            parse: oe.qg,
            previewSrc: oe.z0
          }, {
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: oe.XC,
            parse: oe.qg,
            previewSrc: oe.z0
          }]
        }),
        ce = [{
          ...se("Background Image Gradient")
        }, {
          ...((e = "Label") => ({
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, o.jsx)("h3", {
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
          ...se("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        me = ({
          game: e = null,
          label: a = "Image Configuration"
        }) => {
          const t = [Le({
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
          }, de({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map(e => de({
              name: e
            }))
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
          }), re({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== e && "rdr2" !== e || t.push({
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
          }), t.push({
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
          }), "Background Image" === a && t.push(...ce), {
            name: "image",
            label: a,
            component: "group",
            fields: t,
            defaultItem: () => Me(n),
            itemProps: e => _e(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var pe = t(81788),
        ue = t(24325);
      const be = ({
          name: e = "src",
          label: a = e,
          description: t
        }) => ({
          name: e,
          label: a,
          description: t,
          component: "image",
          clearable: !0,
          uploadDir: oe.XC,
          parse: oe.qg,
          previewSrc: oe.z0
        }),
        ge = ({
          name: e,
          label: a = e,
          description: t
        }) => ({
          name: e,
          label: a,
          description: t ?? "If responsive, only the Mobile Source is needed.",
          component: "group",
          fields: [be({
            name: "mobile",
            label: "Mobile Source"
          }), be({
            name: "desktop",
            label: "Desktop Source"
          })]
        }),
        ve = ({
          name: e = "image",
          label: a = "Image",
          description: t,
          ImageField: l = be
        }) => {
          const n = pe.POSIXLocales;
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
            defaultItem: () => Me(),
            itemProps: e => _e(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        he = ({
          name: e = "image",
          label: a = "Image",
          description: t
        }) => ve({
          name: e,
          label: a,
          description: t,
          ImageField: ge
        }),
        fe = ((0, ue.cG)("Background Image Gradient"), (0, ue.ri)("Background Image Gradient"), (0, ue.cG)("Background Image Gradient"), () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        })),
        xe = (e = {}) => ({
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
          }, ie()],
          ...e,
          itemProps: e => _e(e, {
            label: `Link for [${e?.platform??""}]`
          }),
          defaultItem: () => Me()
        });
      var Se = t(95966),
        ye = t(61398),
        ke = t(51774);
      const we = ({
        label: e = "Tags",
        name: a = "tags",
        context: t = null
      }) => ({
        label: e,
        name: a,
        component: function({
          field: e,
          input: a,
          meta: l
        }) {
          const {
            data: n
          } = (0, Se.useQuery)(ye.TagList, {
            variables: {
              locale: "en_us",
              context: t
            }
          });
          if (!n || !(n?.tagList ?? []).length) return null;
          const i = [{
            id: "",
            name: "-- Select Tag --"
          }, ...n.tagList];
          return (0, o.jsx)(ke.A, {
            field: e,
            input: a,
            meta: l,
            children: (0, o.jsx)("select", {
              ...a,
              children: i.map(e => (0, o.jsx)("option", {
                value: e.id,
                children: e.name
              }, e.id))
            })
          })
        }
      });
      t(62229), t(32823);
      const Ie = "content",
        Ce = "_memoq",
        Me = (e = {}) => ({
          ...e,
          key: `key_${(0,l.A)()}`
        }),
        _e = (e, a = {}) => ({
          ...a,
          key: e.key
        }),
        Le = e => ({
          ...e,
          name: `${Ce}.${e.name}`
        })
    },
    24325: (e, a, t) => {
      "use strict";
      t.d(a, {
        cG: () => n,
        cm: () => o.A,
        ri: () => i
      });
      var l = t(42295);
      const n = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, l.jsx)("hr", {})
      });
      var o = t(51774);
      t(32823);
      const i = (e = "Label") => ({
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
    },
    32823: (e, a, t) => {
      "use strict";
      t(42295)
    },
    34725: (e, a, t) => {
      "use strict";
      t.d(a, {
        C1: () => s,
        S1: () => r,
        XC: () => p,
        jS: () => d,
        qg: () => c,
        z0: () => m
      });
      var l = t(62229),
        n = t(95966),
        o = t(74767);
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
          desktop: t = null,
          ariaLabel: r = null,
          sources: s = null,
          prod: d = null
        }) => {
          const c = (0, n.useLocale)(),
            {
              meta: m = {}
            } = (0, o.i)() ?? {},
            [p, u] = (0, l.useState)(d ?? m?.cdn ?? m?.prod ?? !0);
          (0, l.useEffect)(() => {
            u(d ?? m?.cdn ?? m?.prod ?? !0)
          }, [d, m]);
          const b = (0, l.useCallback)(e => {
            const a = null !== s,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return i(t);
            const l = `${a?(0,n.getCdnPrefix)(p):""}${t}`;
            return i(l)
          }, [p, s]);
          return {
            alt: e,
            ariaLabel: r,
            src: {
              mobile: b(s?.[c]?.mobile ?? s?.en_us?.mobile ?? a),
              desktop: b(s?.[c]?.desktop ?? s?.en_us?.desktop ?? t)
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
        d = () => {
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
        c = e => e.full_src,
        m = e => {
          const a = e?.previewSrc ?? e?.preview_src ?? e;
          return a?.startsWith("http") ? a : `${(0,n.getCdnPrefix)(!1)}${a}`
        },
        p = e => e.meta.uploads_directory
    },
    51774: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var l = t(42295),
        n = t(62229),
        o = t(21442);
      const i = ({
        style: e,
        width: a,
        height: t,
        resizable: i,
        field: r,
        input: s,
        meta: d,
        name: c,
        label: m,
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
            htmlFor: c ?? r?.name,
            children: [m ?? r?.label, (0, l.jsx)("span", {
              className: "rockstargames-sites-legacya0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: p ?? r?.description
            })]
          }), (0, l.jsx)(g, {}), (u || d?.error) && (0, l.jsx)("div", {
            className: "FieldError_sc_custom",
            children: u ?? d?.error
          })]
        })
      }
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
    74767: (e, a, t) => {
      "use strict";
      t.d(a, {
        i: () => s,
        o: () => r
      });
      var l = t(42295),
        n = t(62229);
      const o = (0, t(95966).setContextItem)({
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
    }
  }
]);