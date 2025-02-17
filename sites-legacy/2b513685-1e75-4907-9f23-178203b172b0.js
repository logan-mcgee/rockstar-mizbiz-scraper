! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b513685-1e75-4907-9f23-178203b172b0", e._sentryDebugIdIdentifier = "sentry-dbid-2b513685-1e75-4907-9f23-178203b172b0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [3001], {
    68430: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => d,
        o: () => s
      });
      var l = a(62229),
        n = a(95966),
        o = a(91029);
      const i = (0, n.setContextItem)({
          context: (0, l.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: r
        } = i,
        s = e => {
          let {
            children: t,
            payload: a
          } = e;
          return (0, o.jsx)(r, {
            value: a,
            children: t
          })
        },
        d = () => (0, l.useContext)(i)
    },
    8458: (e, t, a) => {
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
        o = a(68430);
      const i = e => {
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
            } = (0, o.i)() ?? {},
            [u, b] = (0, l.useState)(c ?? p?.cdn ?? p?.prod ?? !0);
          (0, l.useEffect)((() => {
            b(c ?? p?.cdn ?? p?.prod ?? !0)
          }), [c, p]);
          const g = (0, l.useCallback)((e => {
            const t = null !== d,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return i(a);
            const l = `${t?(0,n.getCdnPrefix)(u):""}${a}`;
            return i(l)
          }), [u, d]);
          return {
            alt: t,
            ariaLabel: s,
            src: {
              mobile: g(d?.[m]?.mobile ?? d?.en_us?.mobile ?? a),
              desktop: g(d?.[m]?.desktop ?? d?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const {
            meta: t = {}
          } = (0, o.i)() ?? {}, [a, r] = (0, l.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, l.useEffect)((() => {
            r(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(a)}${e}`)
        },
        d = () => {
          const {
            meta: e = {}
          } = (0, o.i)() ?? {}, t = (0, l.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, l.useCallback)((function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const l = a?.prod ?? t;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(l)}${e}`) : null
          }), [t])
        },
        c = e => e.full_src,
        m = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    3533: (e, t, a) => {
      "use strict";
      a.d(t, {
        f6: () => ie,
        CT: () => me,
        SX: () => ve,
        a2: () => he,
        om: () => fe,
        Vz: () => xe,
        sE: () => ne,
        Qw: () => _e,
        ZH: () => Ie,
        UP: () => we,
        Q: () => Ce,
        Rv: () => Le,
        z9: () => Me
      });
      var l = a(20310);
      const n = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
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
        i = function() {
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
        r = function() {
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
      var s = a(91029);
      const d = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          return {
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, s.jsx)("h3", {
              style: {
                marginBottom: "var(--tina-padding-small)",
                "--color-h3": "var(--tina-color-grey-8)"
              },
              children: e
            })
          }
        },
        c = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, s.jsx)("hr", {})
          }
        },
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
          }, ...m, ...p]
        },
        C = {
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
          }, ...m]
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
        P = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        G = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        T = {
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
        te = {
          label: "Aspect Ratio",
          name: "--aspect-ratio",
          description: "Set the aspect ratio of the image or container",
          component: "text"
        },
        ae = function() {
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
            filter: t = null
          } = e;
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
            l = [{
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
              ..._
            }, {
              ...C
            }, {
              ...L
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
              ...ae(t)
            }, {
              ...c("Box Model")
            }],
            n = [{
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
            s = [{
              ...d("Background..")
            }, ...o({
              filter: t
            }), ...i({
              filter: t
            }), ...r({
              filter: t
            }), {
              ...c("Background")
            }],
            m = [{
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
              ...P
            }, {
              ...G
            }, {
              ...T
            }, {
              ...E
            }, {
              ...D
            }, {
              ...j
            }, {
              ...c("Grid")
            }],
            p = [{
              ...d("Image")
            }, {
              ...Y
            }, {
              ...te
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
            le = [...l, ...a, ...n, ...s];
          return "grid" === t && le.push(...m), ("image" === t || "layeredImage" === t || t?.startsWith("parallax")) && le.push(...p), "gridItem" === t && le.push({
            ...B
          }), "title" === t && (le.push(V), le.push(W)), le
        },
        ne = e => {
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
            fields: [...le({
              filter: t
            })]
          }
        };
      var oe = a(8458);
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
          itemProps: e => Le(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => Ce()
        }),
        re = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        se = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, s.jsx)("hr", {})
          }
        },
        de = e => {
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
          }
        },
        ce = [{
          ...se("Background Image Gradient")
        }, {
          ... function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
            return {
              label: e,
              name: e.toLowerCase().split(" ").join("_"),
              component: () => (0, s.jsx)("h3", {
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
          ...se("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        me = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const l = [Me({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Me({
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
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => de({
              name: e
            })))
          }, Me({
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
          }), Me({
            name: "caption",
            label: "Caption",
            component: "html"
          }), re({
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
          }), "Background Image" === a && l.push(...ce), {
            name: "image",
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => Ce(n),
            itemProps: e => Le(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var pe = a(81788),
        ue = a(87950);
      const be = e => {
          let {
            name: t,
            label: a = t,
            description: l
          } = e;
          return {
            name: t,
            label: a,
            description: l,
            component: "image",
            clearable: !0,
            uploadDir: oe.XC,
            parse: oe.qg,
            previewSrc: oe.z0
          }
        },
        ge = e => {
          let {
            name: t,
            label: a = t,
            description: l
          } = e;
          return {
            name: t,
            label: a,
            description: l ?? "If responsive, only the Mobile Source is needed.",
            component: "group",
            fields: [be({
              name: "mobile",
              label: "Mobile Source"
            }), be({
              name: "desktop",
              label: "Desktop Source"
            })]
          }
        },
        ve = e => {
          let {
            name: t = "image",
            label: a = "Image",
            description: l,
            ImageField: n = be
          } = e;
          const o = pe.POSIXLocales;
          return {
            name: t,
            label: a,
            description: l,
            component: "group",
            fields: [n({
              name: "sources.en_us",
              label: "Upload Global Images"
            }), {
              name: "sources",
              label: "Upload Locale Images",
              description: "The site will default to the global value, but use a locale one on locale sites if it exists here.",
              component: "group",
              fields: o.map((e => n({
                name: e
              })))
            }],
            defaultItem: () => Ce(),
            itemProps: e => Le(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        he = e => {
          let {
            name: t,
            label: a,
            description: l
          } = e;
          return ve({
            name: "image",
            label: "Image",
            description: l,
            ImageField: ge
          })
        },
        fe = ((0, ue.cG)("Background Image Gradient"), (0, ue.ri)("Background Image Gradient"), (0, ue.cG)("Background Image Gradient"), () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        })),
        xe = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
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
                value: "pc",
                label: "PC"
              }, {
                value: "applestore",
                label: "Apple App Store"
              }, {
                value: "googleplay",
                label: "Google Play"
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
            itemProps: e => Le(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => Ce()
          }
        };
      var Se = a(95966),
        ye = a(61398),
        ke = a(38852);
      const we = e => {
        let {
          label: t = "Tags",
          name: a = "tags",
          context: l = null
        } = e;
        return {
          label: t,
          name: a,
          component: function(e) {
            let {
              field: t,
              input: a,
              meta: n
            } = e;
            const {
              data: o
            } = (0, Se.useQuery)(ye.TagList, {
              variables: {
                locale: "en_us",
                context: l
              }
            });
            if (!o || !(o?.tagList ?? []).length) return null;
            const i = [{
              id: "",
              name: "-- Select Tag --"
            }, ...o.tagList];
            return (0, s.jsx)(ke.A, {
              field: t,
              input: a,
              meta: n,
              children: (0, s.jsx)("select", {
                ...a,
                children: i.map((e => (0, s.jsx)("option", {
                  value: e.id,
                  children: e.name
                }, e.id)))
              })
            })
          }
        }
      };
      a(62229), a(45144);
      const Ie = "content",
        _e = "_memoq",
        Ce = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,l.A)()}`
          }
        },
        Le = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        Me = e => ({
          ...e,
          name: `${_e}.${e.name}`
        })
    },
    38852: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var l = a(62229),
        n = a(44251);
      var o = a(91029);
      const i = e => {
        let {
          style: t,
          width: a,
          height: i,
          resizable: r,
          field: s,
          input: d,
          meta: c,
          name: m,
          label: p,
          description: u,
          error: b,
          children: g
        } = e;
        const v = () => r ? (0, o.jsx)(n.c, {
          defaultSize: {
            width: a || "100%",
            height: i || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, l.cloneElement)(g, ...d)
        }) : g;
        return (0, o.jsxs)("div", {
          className: "rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
          style: t,
          children: [(0, o.jsxs)("label", {
            className: "rockstargames-sites-legacyceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
            htmlFor: m ?? s?.name,
            children: [p ?? s?.label, (0, o.jsx)("span", {
              className: "rockstargames-sites-legacya0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
              children: u ?? s?.description
            })]
          }), (0, o.jsx)(v, {}), (b || c?.error) && (0, o.jsx)("div", {
            className: "FieldError_sc_custom",
            children: b ?? c?.error
          })]
        })
      }
    },
    45144: (e, t, a) => {
      "use strict";
      a(91029)
    },
    87950: (e, t, a) => {
      "use strict";
      a.d(t, {
        cG: () => n,
        cm: () => o.A,
        ri: () => i
      });
      var l = a(91029);
      const n = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, l.jsx)("hr", {})
        }
      };
      var o = a(38852);
      a(45144);
      const i = function() {
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
        var o = l[t] || new Set,
          i = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            i.has(e) || (i.add(e), (l[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var l = n(e, t);
          l && a.definitions.push(l)
        })), a
      }(t, "TagList")
    }
  }
]);