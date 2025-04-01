! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a719fa20-e97c-4901-9903-43f8e2084780", e._sentryDebugIdIdentifier = "sentry-dbid-a719fa20-e97c-4901-9903-43f8e2084780")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5338], {
    29960: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => c,
        o: () => s
      });
      var n = a(62229),
        l = a(95966),
        o = a(73855);
      const i = (0, l.setContextItem)({
          context: (0, n.createContext)(),
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
        c = () => (0, n.useContext)(i)
    },
    19544: (e, t, a) => {
      "use strict";
      a.d(t, {
        C1: () => s,
        S1: () => r,
        XC: () => p,
        jS: () => c,
        qg: () => d,
        z0: () => m
      });
      var n = a(62229),
        l = a(95966),
        o = a(29960);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        r = e => {
          let {
            alt: t = null,
            mobile: a = null,
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
            const t = null !== c,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return i(a);
            const n = `${t?(0,l.getCdnPrefix)(u):""}${a}`;
            return i(n)
          }), [u, c]);
          return {
            alt: t,
            ariaLabel: s,
            src: {
              mobile: b(c?.[m]?.mobile ?? c?.en_us?.mobile ?? a),
              desktop: b(c?.[m]?.desktop ?? c?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const t = (0, o.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [r, s] = (0, n.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, n.useEffect)((() => {
            s(a?.cdn ?? a?.prod ?? !1)
          }), [a]), e ? e?.startsWith("http") ? i(e) : i(`${(0,l.getCdnPrefix)(r)}${e}`) : null
        },
        c = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, n.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, n.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = t?.prod ?? a;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,l.getCdnPrefix)(n)}${e}`) : null
          }), [a])
        },
        d = e => e.full_src,
        m = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,l.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    35338: (e, t, a) => {
      "use strict";
      a.d(t, {
        bY: () => ie,
        f6: () => re,
        KO: () => se,
        CT: () => ue,
        pr: () => be,
        om: () => fe,
        Vz: () => ve,
        sE: () => le,
        Qw: () => Se,
        ZH: () => Ce,
        A_: () => he,
        gY: () => Ae,
        Q: () => we,
        Rv: () => _e,
        xc: () => ye,
        z9: () => Be
      });
      var n = a(42868);
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
      var s = a(73855);
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
        h = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        A = {
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
        y = {
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
        _ = {
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
        B = {
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
        I = {
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
        E = {
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
        T = function() {
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
        L = {
          label: "Grid Align Self",
          name: "--grid-align-self",
          description: "Set the align-self property",
          component: "text"
        },
        z = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        G = {
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
        N = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        P = {
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
        j = {
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
        O = {
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
        ne = e => {
          let {
            filter: t = null
          } = e;
          const a = [{
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
              ...h
            }, {
              ...d("Position")
            }],
            n = [{
              ...c("Box Model")
            }, {
              ...A
            }, {
              ...x
            }, {
              ...k
            }, {
              ...y
            }, {
              ...C
            }, {
              ...S
            }, {
              ...w
            }, {
              ..._
            }, {
              ...B
            }, {
              ...I
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
              ...d("Box Model")
            }],
            l = [{
              ...c("Text")
            }, {
              ...$
            }, {
              ...j
            }, {
              ...N
            }, {
              ...P
            }, {
              ...R
            }, {
              ...O
            }, {
              ...H
            }, {
              ...U
            }, {
              ...W
            }, {
              ...d("Text")
            }],
            s = [{
              ...c("Background..")
            }, ...o({
              filter: t
            }), ...i({
              filter: t
            }), ...r({
              filter: t
            }), {
              ...d("Background")
            }],
            m = [{
              ...c("Grid")
            }, {
              ...T("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...T("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...E
            }, {
              ...D
            }, {
              ...M
            }, {
              ...L
            }, {
              ...z
            }, {
              ...G
            }, {
              ...F
            }, {
              ...d("Grid")
            }],
            p = [{
              ...c("Image")
            }, {
              ...Y
            }, {
              ...te
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
            ne = [...n, ...a, ...l, ...s];
          return "grid" === t && ne.push(...m), ("image" === t || "layeredImage" === t || t?.startsWith("parallax")) && ne.push(...p), "gridItem" === t && ne.push({
            ...E
          }), "title" === t && (ne.push(X), ne.push(Q)), ne
        },
        le = e => {
          let {
            filter: t = null,
            name: a = "style",
            label: n = "CSS Variables"
          } = e;
          return {
            label: n,
            name: a,
            description: "Override CSS Variables",
            component: "group",
            fields: [...ne({
              filter: t
            })]
          }
        };
      var oe = a(19544);
      const ie = e => {
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
        re = () => ({
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
          defaultItem: () => we()
        }),
        se = () => ({
          name: "id",
          label: "ID",
          description: "HTML attribute used to specify a unique id for an element. (WITHOUT the # sign, sometimes used for jump links)",
          component: "text"
        }),
        ce = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        de = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, s.jsx)("hr", {})
          }
        },
        me = e => {
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
        pe = [{
          ...de("Background Image Gradient")
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
          ...de("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        ue = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const n = [Be({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Be({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, me({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => me({
              name: e
            })))
          }, Be({
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
          }), Be({
            name: "caption",
            label: "Caption",
            component: "html"
          }), ce({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== t && "rdr2" !== t || n.push({
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
          }), "Background Image" === a && n.push(...pe), {
            name: "image",
            label: a,
            component: "group",
            fields: n,
            defaultItem: () => we(l),
            itemProps: e => _e(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      a(81788);
      var ge = a(50657);
      (0, ge.cG)("Background Image Gradient"), (0, ge.ri)("Background Image Gradient"), (0, ge.cG)("Background Image Gradient");
      const be = () => ({
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
          itemProps: e => _e(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => we()
        }),
        fe = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        ve = function() {
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
            }, re()],
            ...e,
            itemProps: e => _e(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => we()
          }
        };
      a(95966), a(61398), a(92580);
      const he = () => Be({
          label: "Text",
          name: Ce,
          component: "html"
        }),
        Ae = () => ({
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
        });
      a(62229), a(10894);
      const xe = e => {
          let {
            name: t,
            label: a = t
          } = e;
          return {
            name: t,
            label: a,
            component: "group",
            description: "(If responsive, only Mobile Source is needed)",
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
        ke = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        ye = e => {
          let {
            name: t = "image",
            label: a = "Image configuration"
          } = e;
          return {
            name: t,
            label: a,
            component: "group",
            fields: [Be({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), xe({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: ke.map((e => xe({
                name: e
              })))
            }, Be({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => we(),
            itemProps: e => _e(e, {
              label: `Image [${t}]`
            })
          }
        },
        Ce = "content",
        Se = "_memoq",
        we = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,n.A)()}`
          }
        },
        _e = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        Be = e => ({
          ...e,
          name: `${Se}.${e.name}`
        })
    },
    92580: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => k
      });
      var n = a(62229),
        l = a(92255),
        o = a(53178),
        i = a.n(o),
        r = a(27835),
        s = a.n(r),
        c = a(17529),
        d = a.n(c),
        m = a(72162),
        p = a.n(m),
        u = a(82510),
        g = a.n(u),
        b = a(90675),
        f = a.n(b),
        v = a(36877),
        h = {};
      h.styleTagTransform = f(), h.setAttributes = p(), h.insert = d().bind(null, "head"), h.domAPI = s(), h.insertStyleElement = g(), i()(v.A, h);
      const A = v.A && v.A.locals ? v.A.locals : void 0;
      var x = a(73855);
      const k = e => {
        let {
          style: t,
          width: a,
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
            width: a || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, n.cloneElement)(g, ...s)
        }) : g;
        return (0, x.jsxs)("div", {
          className: `${A.FieldWrapper_sc_custom} FieldWrapper-sc-custom jpQZXK`,
          style: t,
          children: [(0, x.jsxs)("label", {
            className: `${A.FieldLabel_sc_custom} FieldLabel-sc-custom dzLxXV`,
            htmlFor: d ?? r?.name,
            children: [m ?? r?.label, (0, x.jsx)("span", {
              className: `${A.FieldDescription_sc_custom} FieldDescription-sc-custom cyKzVM`,
              children: p ?? r?.description
            })]
          }), (0, x.jsx)(b, {}), (u || c?.error) && (0, x.jsx)("div", {
            className: "FieldError_sc_custom",
            children: u ?? c?.error
          })]
        })
      }
    },
    10894: (e, t, a) => {
      "use strict";
      a(73855)
    },
    50657: (e, t, a) => {
      "use strict";
      a.d(t, {
        cG: () => l,
        cm: () => o.A,
        ri: () => i
      });
      var n = a(73855);
      const l = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, n.jsx)("hr", {})
        }
      };
      var o = a(92580);
      a(10894);
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
    36877: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => p
      });
      var n = a(42587),
        l = a.n(n),
        o = a(15081),
        i = a.n(o),
        r = a(79908),
        s = a.n(r),
        c = new URL(a(75958), a.b),
        d = i()(l()),
        m = s()(c);
      d.push([e.id, `.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67{margin-bottom:var(--tina-padding-big,20px);position:relative}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67,.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 *{box-sizing:border-box;font-family:Inter,sans-serif}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-gta-gen9ceac2b2784e621f05ce51dade558df8d{all:unset;color:var(--tina-color-grey-8,#433e52);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-1,13px);font-weight:600;-webkit-letter-spacing:.01em;-moz-letter-spacing:.01em;-ms-letter-spacing:.01em;letter-spacing:.01em;line-height:1.35;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;width:100%}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-gta-gen9a0b2c6a5b66b849b487834caa1f6e3c8{all:unset;color:var(--tina-color-grey-6,#716c7f);display:block;font-family:Inter,sans-serif;font-size:var(--tina-font-size-0,12px);font-style:italic;font-weight:lighter;margin:0;padding-top:4px;white-space:normal}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 input{box-shadow:0 0 0 2px transparent}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 input,.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 select{background:var(--tina-color-grey-0,#fff);background-color:var(--tina-color-grey-0,#fff);border:1px solid var(--tina-color-grey-2,#edecf3);border-radius:var(--tina-radius-small,5px);font-size:var(--tina-font-size-2,15px);line-height:1.35;margin:0;outline:none;padding:var(--tina-padding-small,12px);position:relative;transition:all 85ms ease-out;width:100%}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(${m});background-position:right .7em top 50%;background-repeat:no-repeat;background-size:.65em auto;display:block;font-family:inherit;max-width:100%}.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-gta-gen9d9b75ea1bc84f8562bd9c7c730ce7317,.rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67 .rockstargames-sites-gta-gen9d84706d08967f65d5d2384427474feb5{color:var(--tina-color-error,#ec4815)}[class^=BlockMenuList-] button,button[class^=CreateButton-]{color:#000}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/tina/src/ui/FieldWrapper/index.less"],
        names: [],
        mappings: "AAAA,8DAII,0CAAA,CADA,iBAEJ,CALA,8HACI,qBAAA,CACA,4BAOJ,CATA,4HAWQ,SAAA,CAUA,sCAAA,CATA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,eAAA,CACA,4BAAA,CACA,yBAAA,CACA,wBAAA,CACA,oBAAA,CACA,gBAAA,CAEA,iBAAA,CAGA,eAAA,CAFA,sBAAA,CACA,UAER,CA1BA,4HA6BQ,SAAA,CAMA,sCAAA,CALA,aAAA,CACA,4BAAA,CACA,sCAAA,CACA,iBAAA,CACA,mBAAA,CAIA,QAAA,CAFA,eAAA,CACA,kBACR,CAtCA,oEAuDQ,gCADR,CAtDA,yIA4CQ,wCAAA,CAIA,8CAAA,CAGA,iDAAA,CARA,0CAAA,CAEA,sCAAA,CACA,gBAAA,CAOA,QAAA,CACA,YAAA,CAZA,sCAAA,CAKA,iBAAA,CAGA,4BAAA,CAEA,UA2BR,CA/EA,qEA0EQ,uBAAA,CACA,oBAAA,CACA,eAAA,CAEA,wDAAA,CAEA,sCAAA,CADA,2BAAA,CAEA,0BAAA,CAtBA,aAAA,CACA,mBAAA,CACA,cAkBR,CA/EA,wPAsFQ,qCAHR,CAaA,4DACI,UARJ",
        sourcesContent: [".FieldWrapper_sc_custom {\n    box-sizing: border-box;\n    font-family: 'Inter', sans-serif;\n    position: relative;\n    margin-bottom: var(--tina-padding-big, 20px);\n    * {\n        box-sizing: border-box;\n        font-family: 'Inter', sans-serif;\n    }\n\n    .FieldLabel_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-1, 13px);\n        font-weight: 600;\n        -webkit-letter-spacing: 0.01em;\n        -moz-letter-spacing: 0.01em;\n        -ms-letter-spacing: 0.01em;\n        letter-spacing: 0.01em;\n        line-height: 1.35;\n        color: var(--tina-color-grey-8, #433e52);\n        margin-bottom: 8px;\n        text-overflow: ellipsis;\n        width: 100%;\n        overflow: hidden;\n    }\n\n    .FieldDescription_sc_custom {\n        all: unset;\n        display: block;\n        font-family: 'Inter', sans-serif;\n        font-size: var(--tina-font-size-0, 12px);\n        font-style: italic;\n        font-weight: lighter;\n        color: var(--tina-color-grey-6, #716c7f);\n        padding-top: 4px;\n        white-space: normal;\n        margin: 0;\n    }\n\n    input {\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        outline: none;\n        box-shadow: 0 0 0 2px transparent;\n    }\n\n    select {\n        display: block;\n        font-family: inherit;\n        max-width: 100%;\n        padding: var(--tina-padding-small, 12px);\n        border-radius: var(--tina-radius-small, 5px);\n        background: var(--tina-color-grey-0, #ffffff);\n        font-size: var(--tina-font-size-2, 15px);\n        line-height: 1.35;\n        position: relative;\n        background-color: var(--tina-color-grey-0, #ffffff);\n        -webkit-transition: all 85ms ease-out;\n        transition: all 85ms ease-out;\n        border: 1px solid var(--tina-color-grey-2, #edecf3);\n        width: 100%;\n        margin: 0;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        outline: none;\n        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n        background-repeat: no-repeat;\n        background-position: right 0.7em top 50%;\n        background-size: 0.65em auto;\n    }\n\n    .field-error,\n    .FieldError_sc_custom {\n        color: var(--tina-color-error, #ec4815);\n    }\n}\n\n[class^='BlockMenuList-'] {\n    button {\n        color: black;\n    }\n}\n\nbutton[class^='CreateButton-'] {\n    color: black;\n}\n"],
        sourceRoot: ""
      }]), d.locals = {
        FieldWrapper_sc_custom: "rockstargames-sites-gta-gen9e8a5daf12553885a40529a38c92c1d67",
        FieldLabel_sc_custom: "rockstargames-sites-gta-gen9ceac2b2784e621f05ce51dade558df8d",
        FieldDescription_sc_custom: "rockstargames-sites-gta-gen9a0b2c6a5b66b849b487834caa1f6e3c8",
        FieldError_sc_custom: "rockstargames-sites-gta-gen9d9b75ea1bc84f8562bd9c7c730ce7317",
        "field-error": "rockstargames-sites-gta-gen9d84706d08967f65d5d2384427474feb5"
      };
      const p = d
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
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
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
      var n = {};

      function l(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == t) return n
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.TagList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [l(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = n[t] || new Set,
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
        return i.forEach((function(t) {
          var n = l(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TagList")
    },
    75958: e => {
      "use strict";
      e.exports = "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"
    }
  }
]);