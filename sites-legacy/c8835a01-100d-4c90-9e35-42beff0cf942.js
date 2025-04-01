! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c8835a01-100d-4c90-9e35-42beff0cf942", e._sentryDebugIdIdentifier = "sentry-dbid-c8835a01-100d-4c90-9e35-42beff0cf942")
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
  [5267], {
    29960: (e, a, t) => {
      "use strict";
      t.d(a, {
        i: () => c,
        o: () => s
      });
      var n = t(62229),
        l = t(95966),
        o = t(73855);
      const i = (0, l.setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: r
        } = i,
        s = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, o.jsx)(r, {
            value: t,
            children: a
          })
        },
        c = () => (0, n.useContext)(i)
    },
    19544: (e, a, t) => {
      "use strict";
      t.d(a, {
        C1: () => s,
        S1: () => r,
        XC: () => p,
        jS: () => c,
        qg: () => d,
        z0: () => m
      });
      var n = t(62229),
        l = t(95966),
        o = t(29960);
      const i = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === t ? null : (a.endsWith(".akamaized.net"), e)
        },
        r = e => {
          let {
            alt: a = null,
            mobile: t = null,
            desktop: r = null,
            ariaLabel: s = null,
            sources: c = null,
            prod: d = null
          } = e;
          const m = (0, l.useLocale)(),
            {
              meta: p = {}
            } = (0, o.i)() ?? {},
            [u, g] = (0, n.useState)(d ?? p?.cdn ?? p?.prod ?? !0);
          (0, n.useEffect)((() => {
            g(d ?? p?.cdn ?? p?.prod ?? !0)
          }), [d, p]);
          const b = (0, n.useCallback)((e => {
            const a = null !== c,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return i(t);
            const n = `${a?(0,l.getCdnPrefix)(u):""}${t}`;
            return i(n)
          }), [u, c]);
          return {
            alt: a,
            ariaLabel: s,
            src: {
              mobile: b(c?.[m]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: b(c?.[m]?.desktop ?? c?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const a = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = a,
            [r, s] = (0, n.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, n.useEffect)((() => {
            s(t?.cdn ?? t?.prod ?? !1)
          }), [t]), e ? e?.startsWith("http") ? i(e) : i(`${(0,l.getCdnPrefix)(r)}${e}`) : null
        },
        c = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: a = {}
            } = e,
            t = (0, n.useMemo)((() => a?.cdn ?? a?.prod ?? !1), [a]);
          return (0, n.useCallback)((function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = a?.prod ?? t;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,l.getCdnPrefix)(n)}${e}`) : null
          }), [t])
        },
        d = e => e.full_src,
        m = e => {
          const a = e?.previewSrc ?? e?.preview_src ?? e;
          return a?.startsWith("http") ? a : `${(0,l.getCdnPrefix)(!1)}${a}`
        },
        p = e => e.meta.uploads_directory
    },
    58147: (e, a, t) => {
      "use strict";
      t.d(a, {
        f6: () => ie,
        CT: () => me,
        SX: () => fe,
        a2: () => ve,
        om: () => Ae,
        Vz: () => he,
        sE: () => le,
        Qw: () => we,
        ZH: () => Se,
        UP: () => Ce,
        Q: () => Be,
        Rv: () => Ie,
        z9: () => _e
      });
      var n = t(42868);
      const l = {
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
      var s = t(73855);
      const c = function() {
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
        d = function() {
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
        g = {
          label: "Left",
          name: "left",
          description: "Distance from left for LAYERS (recommended to use %)",
          component: "text"
        },
        b = {
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
        A = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        h = {
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
        x = {
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
          }, ...m, ...p]
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
          }, ...m, ...p]
        },
        w = {
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
        B = {
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
        I = {
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
        _ = {
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
        D = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        M = {
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
        F = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        N = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        P = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        T = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        G = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        j = {
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
        $ = {
          label: "Header Multiplier",
          name: "--header-multiplier",
          description: "Set the --header-multiplier",
          component: "text"
        },
        U = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        O = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        H = {
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
        X = {
          label: "Date/Time Color",
          name: "--time-color",
          description: "Applies to time tags inside this component.",
          component: "color"
        },
        Q = {
          label: "Invert Breadcrumb Separator Color",
          name: "toggleInvertSeparator",
          description: "Invert the color.",
          component: "toggle"
        },
        V = {
          label: "Image Width",
          name: "width",
          description: "Set the image width",
          component: "text"
        },
        q = {
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
        te = function() {
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
            filter: a = null
          } = e;
          const t = [{
              ...c("Position")
            }, {
              ...u
            }, {
              ...g
            }, {
              ...b
            }, {
              ...f
            }, {
              ...v
            }, {
              ...A
            }, {
              ...d("Position")
            }],
            n = [{
              ...c("Box Model")
            }, {
              ...h
            }, {
              ...x
            }, {
              ...y
            }, {
              ...k
            }, {
              ...C
            }, {
              ...S
            }, {
              ...w
            }, {
              ...B
            }, {
              ...I
            }, {
              ..._
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
              ...te(a)
            }, {
              ...d("Box Model")
            }],
            l = [{
              ...c("Text")
            }, {
              ...$
            }, {
              ...R
            }, {
              ...T
            }, {
              ...G
            }, {
              ...j
            }, {
              ...U
            }, {
              ...O
            }, {
              ...H
            }, {
              ...W
            }, {
              ...d("Text")
            }],
            s = [{
              ...c("Background..")
            }, ...o({
              filter: a
            }), ...i({
              filter: a
            }), ...r({
              filter: a
            }), {
              ...d("Background")
            }],
            m = [{
              ...c("Grid")
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
              ...L
            }, {
              ...D
            }, {
              ...M
            }, {
              ...z
            }, {
              ...F
            }, {
              ...N
            }, {
              ...P
            }, {
              ...d("Grid")
            }],
            p = [{
              ...c("Image")
            }, {
              ...Y
            }, {
              ...ae
            }, {
              ...V
            }, {
              ...q
            }, {
              ...K
            }, {
              ...J
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...d("Image")
            }],
            ne = [...n, ...t, ...l, ...s];
          return "grid" === a && ne.push(...m), ("image" === a || "layeredImage" === a || a?.startsWith("parallax")) && ne.push(...p), "gridItem" === a && ne.push({
            ...L
          }), "title" === a && (ne.push(X), ne.push(Q)), ne
        },
        le = e => {
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
            fields: [...ne({
              filter: a
            })]
          }
        };
      var oe = t(19544);
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
          itemProps: e => Ie(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => Be()
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
        ce = e => {
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
        de = [{
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
            game: a = null,
            label: t = "Image Configuration"
          } = e;
          const n = [_e({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), _e({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, ce({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => ce({
              name: e
            })))
          }, _e({
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
          }), _e({
            name: "caption",
            label: "Caption",
            component: "html"
          }), re({
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
          }), "Background Image" === t && n.push(...de), {
            name: "image",
            label: t,
            component: "group",
            fields: n,
            defaultItem: () => Be(l),
            itemProps: e => Ie(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var pe = t(81788),
        ue = t(50657);
      const ge = e => {
          let {
            name: a = "src",
            label: t = a,
            description: n
          } = e;
          return {
            name: a,
            label: t,
            description: n,
            component: "image",
            clearable: !0,
            uploadDir: oe.XC,
            parse: oe.qg,
            previewSrc: oe.z0
          }
        },
        be = e => {
          let {
            name: a,
            label: t = a,
            description: n
          } = e;
          return {
            name: a,
            label: t,
            description: n ?? "If responsive, only the Mobile Source is needed.",
            component: "group",
            fields: [ge({
              name: "mobile",
              label: "Mobile Source"
            }), ge({
              name: "desktop",
              label: "Desktop Source"
            })]
          }
        },
        fe = e => {
          let {
            name: a = "image",
            label: t = "Image",
            description: n,
            ImageField: l = ge
          } = e;
          const o = pe.POSIXLocales;
          return {
            name: a,
            label: t,
            description: n,
            component: "group",
            fields: [l({
              name: "sources.en_us",
              label: "Upload Global Image"
            }), {
              name: "sources",
              label: "Upload Localized Images",
              description: "The site will default to the global value, but use a locale one on locale sites if it exists here.",
              component: "group",
              fields: o.map((e => l({
                name: e
              })))
            }],
            defaultItem: () => Be(),
            itemProps: e => Ie(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        ve = e => {
          let {
            name: a = "image",
            label: t = "Image",
            description: n
          } = e;
          return fe({
            name: a,
            label: t,
            description: n,
            ImageField: be
          })
        },
        Ae = ((0, ue.cG)("Background Image Gradient"), (0, ue.ri)("Background Image Gradient"), (0, ue.cG)("Background Image Gradient"), () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        })),
        he = function() {
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
                value: "pcalt",
                label: "PC Enhanced"
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
            itemProps: e => Ie(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => Be()
          }
        };
      var xe = t(95966),
        ye = t(61398),
        ke = t(92580);
      const Ce = e => {
        let {
          label: a = "Tags",
          name: t = "tags",
          context: n = null
        } = e;
        return {
          label: a,
          name: t,
          component: function(e) {
            let {
              field: a,
              input: t,
              meta: l
            } = e;
            const {
              data: o
            } = (0, xe.useQuery)(ye.TagList, {
              variables: {
                locale: "en_us",
                context: n
              }
            });
            if (!o || !(o?.tagList ?? []).length) return null;
            const i = [{
              id: "",
              name: "-- Select Tag --"
            }, ...o.tagList];
            return (0, s.jsx)(ke.A, {
              field: a,
              input: t,
              meta: l,
              children: (0, s.jsx)("select", {
                ...t,
                children: i.map((e => (0, s.jsx)("option", {
                  value: e.id,
                  children: e.name
                }, e.id)))
              })
            })
          }
        }
      };
      t(62229), t(10894);
      const Se = "content",
        we = "_memoq",
        Be = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,n.A)()}`
          }
        },
        Ie = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        _e = e => ({
          ...e,
          name: `${we}.${e.name}`
        })
    },
    92580: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => y
      });
      var n = t(62229),
        l = t(92255),
        o = t(53178),
        i = t.n(o),
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
        v = t(36877),
        A = {};
      A.styleTagTransform = f(), A.setAttributes = p(), A.insert = d().bind(null, "head"), A.domAPI = s(), A.insertStyleElement = g(), i()(v.A, A);
      const h = v.A && v.A.locals ? v.A.locals : void 0;
      var x = t(73855);
      const y = e => {
        let {
          style: a,
          width: t,
          height: o,
          resizable: i,
          field: r,
          input: s,
          meta: c,
          name: d,
          label: m,
          description: p,
          error: u,
          children: g
        } = e;
        const b = () => i ? (0, x.jsx)(l.c, {
          defaultSize: {
            width: t || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, n.cloneElement)(g, ...s)
        }) : g;
        return (0, x.jsxs)("div", {
          className: `${h.FieldWrapper_sc_custom} FieldWrapper-sc-custom jpQZXK`,
          style: a,
          children: [(0, x.jsxs)("label", {
            className: `${h.FieldLabel_sc_custom} FieldLabel-sc-custom dzLxXV`,
            htmlFor: d ?? r?.name,
            children: [m ?? r?.label, (0, x.jsx)("span", {
              className: `${h.FieldDescription_sc_custom} FieldDescription-sc-custom cyKzVM`,
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
        cm: () => o.A,
        ri: () => i
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
      var o = t(92580);
      t(10894);
      const i = function() {
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
        o = t(15081),
        i = t.n(o),
        r = t(79908),
        s = t.n(r),
        c = new URL(t(75958), t.b),
        d = i()(l()),
        m = s()(c);
      d.push([e.id, `.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67{margin-bottom:var(--tina-padding-big,20px);position:relative}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67,.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 *{box-sizing:border-box;font-family:Inter,sans-serif}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-legacyceac2b2784e621f05ce51dade558df8d{all:unset;color:var(--tina-color-grey-8,#433e52);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-1,13px);font-weight:600;-webkit-letter-spacing:.01em;-moz-letter-spacing:.01em;-ms-letter-spacing:.01em;letter-spacing:.01em;line-height:1.35;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;width:100%}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-legacya0b2c6a5b66b849b487834caa1f6e3c8{all:unset;color:var(--tina-color-grey-6,#716c7f);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-0,12px);font-style:italic;font-weight:lighter;margin:0;padding-top:4px;white-space:normal}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 input{box-shadow:0 0 0 2px transparent}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 input,.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 select{background:var(--tina-color-grey-0,#fff);background-color:var(--tina-color-grey-0,#fff);border:1px solid var(--tina-color-grey-2,#edecf3);border-radius:var(--tina-radius-small,5px);font-size:var(--tina-font-size-2,15px);line-height:1.35;margin:0;outline:none;padding:var(--tina-padding-small,12px);position:relative;transition:all 85ms ease-out;width:100%}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(${m});background-position:right .7em top 50%;background-repeat:no-repeat;background-size:.65em auto;display:block;font-family:inherit;max-width:100%}.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-legacyd9b75ea1bc84f8562bd9c7c730ce7317,.rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-legacyd84706d08967f65d5d2384427474feb5{color:var(--tina-color-error,#ec4815)}[class^=BlockMenuList-] button,button[class^=CreateButton-]{color:#000}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/tina/src/ui/FieldWrapper/index.less"],
        names: [],
        mappings: "AAAA,4DAII,0CAAA,CADA,iBAEJ,CALA,0HACI,qBAAA,CACA,4BAOJ,CATA,wHAWQ,SAAA,CAUA,sCAAA,CATA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,eAAA,CACA,4BAAA,CACA,yBAAA,CACA,wBAAA,CACA,oBAAA,CACA,gBAAA,CAEA,iBAAA,CAGA,eAAA,CAFA,sBAAA,CACA,UAER,CA1BA,wHA6BQ,SAAA,CAMA,sCAAA,CALA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,iBAAA,CACA,mBAAA,CAIA,QAAA,CAFA,eAAA,CACA,kBACR,CAtCA,kEAuDQ,gCADR,CAtDA,qIA4CQ,wCAAA,CAIA,8CAAA,CAGA,iDAAA,CARA,0CAAA,CAEA,sCAAA,CACA,gBAAA,CAOA,QAAA,CACA,YAAA,CAZA,sCAAA,CAKA,iBAAA,CAGA,4BAAA,CAEA,UA2BR,CA/EA,mEA0EQ,uBAAA,CACA,oBAAA,CACA,eAAA,CAEA,wDAAA,CAEA,sCAAA,CADA,2BAAA,CAEA,0BAAA,CAtBA,aAAA,CACA,mBAAA,CACA,cAkBR,CA/EA,gPAsFQ,qCAHR,CAaA,4DACI,UARJ",
        sourcesContent: [".FieldWrapper_sc_custom {\n    box-sizing: border-box;\n    font-family: 'Inter', sans-serif;\n    position: relative;\n    margin-bottom: var(--tina-padding-big, 20px);\n    * {\n        box-sizing: border-box;\n        font-family: 'Inter', sans-serif;\n    }\n\n    .FieldLabel_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-1, 13px);\n        font-weight: 600;\n        -webkit-letter-spacing: 0.01em;\n        -moz-letter-spacing: 0.01em;\n        -ms-letter-spacing: 0.01em;\n        letter-spacing: 0.01em;\n        line-height: 1.35;\n        color: var(--tina-color-grey-8, #433e52);\n        margin-bottom: 8px;\n        text-overflow: ellipsis;\n        width: 100%;\n        overflow: hidden;\n    }\n\n    .FieldDescription_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-0, 12px);\n        font-style: italic;\n        font-weight: lighter;\n        color: var(--tina-color-grey-6, #716c7f);\n        padding-top: 4px;\n        white-space: normal;\n        margin: 0;\n    }\n\n    input {\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        outline: none;\n        box-shadow: 0 0 0 2px transparent;\n    }\n\n    select {\n        display: block;\n        font-family: inherit;\n        max-width: 100%;\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        outline: none;\n        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n        background-repeat: no-repeat;\n        background-position: right 0.7em top 50%;\n        background-size: 0.65em auto;\n    }\n\n    .field-error,\n    .FieldError_sc_custom {\n        color: var(--tina-color-error, #ec4815);\n    }\n}\n\n[class^='BlockMenuList-'] {\n    button {\n        color: black;\n    }\n}\n\nbutton[class^='CreateButton-'] {\n    color: black;\n}\n"],
        sourceRoot: ""
      }]), d.locals = {
        FieldWrapper_sc_custom: "rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67",
        FieldLabel_sc_custom: "rockstargames-sites-legacyceac2b2784e621f05ce51dade558df8d",
        FieldDescription_sc_custom: "rockstargames-sites-legacya0b2c6a5b66b849b487834caa1f6e3c8",
        FieldError_sc_custom: "rockstargames-sites-legacyd9b75ea1bc84f8562bd9c7c730ce7317",
        "field-error": "rockstargames-sites-legacyd84706d08967f65d5d2384427474feb5"
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
        var o = n[a] || new Set,
          i = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            i.has(e) || (i.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
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