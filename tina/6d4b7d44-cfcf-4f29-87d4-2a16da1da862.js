! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d4b7d44-cfcf-4f29-87d4-2a16da1da862", e._sentryDebugIdIdentifier = "sentry-dbid-6d4b7d44-cfcf-4f29-87d4-2a16da1da862")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [736], {
    881: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => s,
        o: () => r
      });
      var l = a(1403),
        n = a(6632);
      const o = (0, l.createContext)(),
        {
          Provider: i
        } = o,
        r = e => {
          let {
            children: t,
            payload: a
          } = e;
          return (0, n.jsx)(i, {
            value: a,
            children: t
          })
        },
        s = () => (0, l.useContext)(o)
    },
    8235: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        parse: () => d,
        previewSrc: () => c,
        uploadDir: () => p,
        useGenerateCdnSource: () => m,
        useGetCdnSource: () => s,
        useImageParser: () => r
      });
      var l = a(1403),
        n = a(2756),
        o = a(881);
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
            sources: m = null,
            prod: d = null
          } = e;
          const c = (0, n.useLocale)(),
            {
              meta: p = {}
            } = (0, o.i)() ?? {},
            [u, b] = (0, l.useState)(d ?? p?.cdn ?? p?.prod ?? !0);
          (0, l.useEffect)((() => {
            b(d ?? p?.cdn ?? p?.prod ?? !0)
          }), [d, p]);
          const g = (0, l.useCallback)((e => {
            const t = null !== m,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return i(a);
            const l = `${t?(0,n.getCdnPrefix)(u):""}${a}`;
            return i(l)
          }), [u, m]);
          return {
            alt: t,
            ariaLabel: s,
            src: {
              mobile: g(m?.[c]?.mobile ?? m?.en_us?.mobile ?? a),
              desktop: g(m?.[c]?.desktop ?? m?.en_us?.desktop ?? r)
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
        m = () => {
          const {
            meta: e = {}
          } = (0, o.i)() ?? {}, t = (0, l.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, l.useCallback)((function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const l = a?.prod ?? t;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(l)}${e}`) : null
          }), [t])
        },
        d = e => e.full_src,
        c = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    1736: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        AriaLabelField: () => o,
        AttributesFields: () => re,
        BorderField: () => m,
        BorderImageField: () => de,
        CTAsField: () => be,
        ClassNamesField: () => ce,
        ComprehensiveImageFieldGroup: () => Ae,
        ContentField: () => pe,
        DisplayClassField: () => se,
        FormEntryField: () => ge,
        GridContextField: () => fe,
        GtmField: () => ve,
        IdField: () => Se,
        ImageField: () => we,
        ImpressionTrackingField: () => Fe,
        ItemsField: () => Ge,
        LeadAssetToggle: () => Ee,
        LocalizedImageGroup: () => Be,
        LocalizedResponsiveImageGroup: () => De,
        MediaQueryField: () => $e,
        MetaField: () => ze,
        NameField: () => Oe,
        PlatformsAndLinksField: () => je,
        PostEntryFields: () => He,
        PostMetaField: () => Ue,
        PreviewImagesField: () => Xe,
        ResponsiveImageGroup: () => Me,
        ScrollmationField: () => We,
        SimpleImageField: () => rt,
        SingleImageSource: () => Pe,
        StyleField: () => ie,
        TINA_MEMOQ_PREFIX: () => mt,
        TINA_PARSER_KEY: () => st,
        TagsField: () => qe,
        TextField: () => Ke,
        ThemeField: () => Je,
        TranslationKey: () => ue,
        UploadsField: () => Ze,
        XMLField: () => at,
        _defaultImageValues: () => n,
        defaultItemUnique: () => dt,
        defaultPricingOptionsUnique: () => ct,
        itemPropsWithKey: () => pt,
        localizedImageField: () => ot,
        translatedField: () => ut
      });
      var l = a(3004);
      const n = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        o = e => {
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
        i = function() {
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
        },
        m = function() {
          return {
            name: "border",
            label: "Border",
            description: "Entire CSS value as a string.",
            component: "text"
          }
        };
      var d = a(6632);
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
        p = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, d.jsx)("hr", {})
          }
        },
        u = [{
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
        g = {
          label: "Top",
          name: "top",
          description: "Distance from top for LAYERS (recommended to use %)",
          component: "text"
        },
        h = {
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
        v = {
          label: "Bottom",
          name: "bottom",
          description: "Distance from bottom for LAYERS (recommended to use %)",
          component: "text"
        },
        S = {
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
        y = {
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
        w = {
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
        I = {
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
          }, ...u, ...b]
        },
        _ = {
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
          }, ...u, ...b]
        },
        T = {
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
          }, ...u, ...b]
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
          }, ...u, ...b]
        },
        P = {
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
          }, ...u]
        },
        M = {
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
          }, ...u]
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
          }, ...u]
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
        L = function() {
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
        A = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        F = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        N = {
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
        E = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        R = {
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
        O = {
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
        H = {
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
        X = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        W = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        Y = {
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
        V = {
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
        K = {
          label: "Image Min-Width",
          name: "min-width",
          description: "Set the image min-width",
          component: "text"
        },
        J = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        Z = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        ee = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        te = {
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
        le = {
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
        oe = e => {
          let {
            filter: t = null
          } = e;
          const a = [{
              ...c("Position")
            }, {
              ...g
            }, {
              ...h
            }, {
              ...f
            }, {
              ...v
            }, {
              ...S
            }, {
              ...x
            }, {
              ...p("Position")
            }],
            l = [{
              ...c("Box Model")
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
              ...T
            }, {
              ...C
            }, {
              ...P
            }, {
              ...M
            }, {
              ...B
            }, {
              ...m({})
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
              ...ne(t)
            }, {
              ...p("Box Model")
            }],
            n = [{
              ...c("Text")
            }, {
              ...H
            }, {
              ...j
            }, {
              ...$
            }, {
              ...z
            }, {
              ...O
            }, {
              ...U
            }, {
              ...X
            }, {
              ...W
            }, {
              ...Y
            }, {
              ...p("Text")
            }],
            o = [{
              ...c("Background..")
            }, ...i({
              filter: t
            }), ...r({
              filter: t
            }), ...s({
              filter: t
            }), {
              ...p("Background")
            }],
            d = [{
              ...c("Grid")
            }, {
              ...L("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...L("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...D
            }, {
              ...A
            }, {
              ...F
            }, {
              ...N
            }, {
              ...G
            }, {
              ...E
            }, {
              ...R
            }, {
              ...p("Grid")
            }],
            u = [{
              ...c("Image")
            }, {
              ...J
            }, {
              ...le
            }, {
              ...q
            }, {
              ...K
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...te
            }, {
              ...ae
            }, {
              ...p("Image")
            }],
            b = [...l, ...a, ...n, ...o];
          return "grid" === t && b.push(...d), ("image" === t || "layeredImage" === t || t?.startsWith("parallax")) && b.push(...u), "gridItem" === t && b.push({
            ...D
          }), "title" === t && (b.push(Q), b.push(V)), b
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
            fields: [...oe({
              filter: t
            })]
          }
        },
        re = e => {
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
            }, o({
              parent: t
            }), ie({
              filter: a
            })]
          }
        },
        se = function() {
          return {
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
          }
        };
      var me = a(8235);
      const de = function() {
          return {
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
              uploadDir: me.uploadDir,
              parse: me.parse,
              previewSrc: me.previewSrc
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
            }, se({})]
          }
        },
        ce = e => {
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
        pe = () => ({
          name: st,
          label: "Content",
          component: "html"
        }),
        ue = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        be = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            name: "ctas",
            label: "CTA buttons",
            component: "group-list",
            fields: [ut({
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
            }, ut({
              name: "href",
              label: "Link",
              component: "text"
            }), ut({
              name: "buttonText",
              label: "Button Text",
              description: "For non-platform button labels",
              component: "text"
            }), ue()],
            ...e,
            itemProps: e => pt(e, {
              label: `Link for [${e?.platform??e?.buttonText??""}]`
            }),
            defaultItem: () => dt()
          }
        },
        ge = e => {
          let {
            templates: t = []
          } = e;
          return {
            label: "Content",
            description: "Add/remove/arrange/configure sections",
            name: st,
            component: "blocks",
            templates: t
          }
        },
        he = [{
          value: "",
          label: "-- Select Grid Context --"
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
        fe = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: he,
          initialValues: he[0]
        }),
        ve = () => ({
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
          itemProps: e => pt(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => dt()
        }),
        Se = () => ({
          name: "id",
          label: "ID",
          description: "HTML attribute used to specify a unique id for an element. (WITHOUT the # sign, sometimes used for jump links)",
          component: "text"
        }),
        xe = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, d.jsx)("hr", {})
          }
        },
        ye = e => {
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
              uploadDir: me.uploadDir,
              parse: me.parse,
              previewSrc: me.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: me.uploadDir,
              parse: me.parse,
              previewSrc: me.previewSrc
            }]
          }
        },
        ke = [{
          ...xe("Background Image Gradient")
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
          ...xe("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        we = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const l = [ut({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), ut({
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
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => ye({
              name: e
            })))
          }, ut({
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
          }), ut({
            name: "caption",
            label: "Caption",
            component: "html"
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
          }), "Background Image" === a && l.push(...ke), {
            name: "image",
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => dt(n),
            itemProps: e => pt(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var Ie = a(1403);
      const _e = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"];
      a(396);
      var Te = a(8139);
      const Ce = {
          alt: "",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        Pe = e => {
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
            uploadDir: me.uploadDir,
            parse: me.parse,
            previewSrc: me.previewSrc
          }
        },
        Me = e => {
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
            fields: [Pe({
              name: "mobile",
              label: "Mobile Source"
            }), Pe({
              name: "desktop",
              label: "Desktop Source"
            })]
          }
        },
        Be = e => {
          let {
            name: t = "image",
            label: a = "Image",
            description: l,
            ImageField: n = Pe
          } = e;
          const o = _e;
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
            defaultItem: () => dt(),
            itemProps: e => pt(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        De = e => {
          let {
            name: t,
            label: a,
            description: l
          } = e;
          return Be({
            name: "image",
            label: "Image",
            description: l,
            ImageField: Me
          })
        },
        Le = [{
          ...(0, Te.Divider)("Background Image Gradient")
        }, {
          ...(0, Te.TinaLabel)("Background Image Gradient")
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
          ...(0, Te.Divider)("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "Example: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        Ae = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const l = [ut({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), ut({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, ...De(), ut({
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
          }), ut({
            name: "caption",
            label: "Caption",
            component: "html"
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
          }), "Background Image" === a && l.push(...Le), {
            name: "image",
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => dt(Ce),
            itemProps: e => pt(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        Fe = () => ({
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
          itemProps: e => pt(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => dt()
        }),
        Ne = e => {
          let {
            game: t = null,
            filter: a = null
          } = e;
          const l = [ut({
            label: "Title",
            name: "title",
            component: "text"
          }), we({
            game: t,
            label: "Image Sources"
          })];
          return "discounts" !== a && l.push(ut({
            label: "Description",
            name: "description",
            component: "html"
          })), l.push(ut({
            label: "Link",
            name: "to",
            component: "text"
          }), ie({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...l, ce({
              filter: "grid"
            }), Se(), $e({
              filter: a,
              fields: l,
              game: t
            }), Fe(), ve()],
            defaultItem: () => dt({
              image: dt(n)
            }),
            itemProps: e => pt(e, {
              label: e?.[mt]?.title ? `${e[mt].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        Ge = e => {
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
            templates: [Ne({
              filter: t,
              game: a
            })],
            defaultItem: () => dt(),
            itemProps: e => pt(e, {})
          }
        },
        Ee = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => dt({
            hero: !1
          })
        }),
        Re = e => {
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
            defaultItem: () => dt(),
            itemProps: e => pt(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        $e = e => {
          let {
            fields: t = [],
            filter: a = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [Re({
              filter: a,
              fields: t
            })]
          }
        },
        ze = function() {
          return {
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
          }
        },
        Oe = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        je = function() {
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
            }],
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            itemProps: e => pt(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => dt()
          }
        },
        He = () => [{
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
        }, qe({
          name: "primary_tags",
          label: "Game",
          context: 1
        }), qe({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        Ue = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...He(), {
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
          }, Xe()]
        }),
        Xe = () => ({
          name: "preview_images",
          label: "Manage preview images",
          description: "Upload images for use on newswire cards",
          component: "group",
          fields: ["en_us", "de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => ({
            name: e,
            label: e,
            component: "group",
            fields: [{
              name: "newswire-block-16x9",
              label: "16x9 Source",
              component: "image",
              clearable: !0,
              uploadDir: me.uploadDir,
              previewSrc: me.previewSrc,
              parse: me.parse
            }, {
              name: "newswire-block-square",
              label: "Square Source",
              component: "image",
              clearable: !0,
              uploadDir: me.uploadDir,
              previewSrc: me.previewSrc,
              parse: me.parse
            }]
          })))
        }),
        We = () => ({
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
          itemProps: e => pt(e, {
            label: "Advanced Scrollmation Field Settings"
          }),
          defaultItem: () => dt()
        });
      var Ye = a(8407),
        Qe = a(6385),
        Ve = a(2887);
      const qe = e => {
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
              } = (0, Ye.useQuery)(Qe.TagList, {
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
              return (0, d.jsx)(Ve.A, {
                field: t,
                input: a,
                meta: n,
                children: (0, d.jsx)("select", {
                  ...a,
                  children: i.map((e => (0, d.jsx)("option", {
                    value: e.id,
                    children: e.name
                  }, e.id)))
                })
              })
            }
          }
        },
        Ke = () => ut({
          label: "Text",
          name: st,
          component: "html"
        }),
        Je = () => ({
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
        Ze = () => ({
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
      var et = a(8597);
      const tt = e => {
          let {
            field: t,
            input: a,
            form: l
          } = e;
          const {
            name: n,
            label: o,
            description: i,
            fileLoaded: r
          } = t, [s, m] = (0, Ie.useState)("");
          return (0, d.jsxs)(Ve.A, {
            name: n,
            label: o,
            description: i,
            children: [(0, d.jsx)(et.A, {
              onChange: e => {
                m(e)
              },
              name: a?.name,
              value: s,
              accept: ".xml"
            }), (0, d.jsx)("button", {
              style: {
                display: "block"
              },
              onClick: () => (async () => {
                if (!s) return;
                const e = new FileReader;
                e.onload = async e => {
                  r(e.target.result)
                }, e.readAsText(s)
              })(),
              children: "Save XML"
            })]
          })
        },
        at = e => {
          let {
            name: t,
            label: a,
            description: l,
            fileLoaded: n
          } = e;
          return {
            name: t,
            label: a,
            description: l,
            fileLoaded: n,
            component: tt,
            clearable: !0
          }
        },
        lt = e => {
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
              uploadDir: me.uploadDir,
              parse: me.parse,
              previewSrc: me.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: me.uploadDir,
              parse: me.parse,
              previewSrc: me.previewSrc
            }]
          }
        },
        nt = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        ot = e => {
          let {
            name: t = "image",
            label: a = "Image configuration"
          } = e;
          return {
            name: t,
            label: a,
            component: "group",
            fields: [ut({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), lt({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: nt.map((e => lt({
                name: e
              })))
            }, ut({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => dt(),
            itemProps: e => pt(e, {
              label: `Image [${t}]`
            })
          }
        },
        it = e => {
          let {
            name: t,
            label: a = name
          } = e;
          return {
            name,
            label: a,
            component: "group",
            description: "Only use Desktop Images for now.",
            fields: [{
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: me.uploadDir,
              parse: me.parse,
              previewSrc: me.previewSrc
            }]
          }
        },
        rt = e => {
          let {
            label: t = "Image Configuration"
          } = e;
          return {
            name: "posterImage",
            label: t,
            component: "group",
            fields: [it({
              name: "sources.en_us",
              label: "Upload Global Images"
            })],
            defaultItem: () => dt({}),
            itemProps: e => pt(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        st = "content",
        mt = "_memoq",
        dt = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,l.v4)()}`
          }
        },
        ct = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `pricing_key_${(0,l.v4)()}`
          }
        },
        pt = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        ut = e => ({
          ...e,
          name: `${mt}.${e.name}`
        })
    },
    6385: e => {
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