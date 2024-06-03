! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "26ae0c12-a2e8-482d-9eef-140154182718", e._sentryDebugIdIdentifier = "sentry-dbid-26ae0c12-a2e8-482d-9eef-140154182718")
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
  [8, 544, 240], {
    9576: (e, t, a) => {
      "use strict";
      var l = a(1664),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, a) {
        var l, o = {},
          d = null,
          m = null;
        for (l in void 0 !== a && (d = "" + a), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (m = t.ref), t) i.call(t, l) && !s.hasOwnProperty(l) && (o[l] = t[l]);
        if (e && e.defaultProps)
          for (l in t = e.defaultProps) void 0 === o[l] && (o[l] = t[l]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: m,
          props: o,
          _owner: r.current
        }
      }
      t.Fragment = o, t.jsx = d, t.jsxs = d
    },
    5240: (e, t, a) => {
      "use strict";
      e.exports = a(9576)
    },
    508: (e, t, a) => {
      "use strict";
      a.d(t, {
        Q: () => s,
        m: () => r
      });
      var l = a(1664),
        n = a(5240);
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
    3924: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        parse: () => m,
        previewSrc: () => c,
        uploadDir: () => p,
        useGenerateCdnSource: () => d,
        useGetCdnSource: () => s,
        useImageParser: () => r
      });
      var l = a(1664),
        n = a(5792),
        o = a(508);
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
            prod: m = null
          } = e;
          const c = (0, n.useLocale)(),
            {
              meta: p = {}
            } = (0, o.Q)() ?? {},
            [u, b] = (0, l.useState)(m ?? p?.cdn ?? p?.prod ?? !0);
          (0, l.useEffect)((() => {
            b(m ?? p?.cdn ?? p?.prod ?? !0)
          }), [m, p]);
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
              mobile: g(d?.[c]?.mobile ?? d?.en_us?.mobile ?? a),
              desktop: g(d?.[c]?.desktop ?? d?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const {
            meta: t = {}
          } = (0, o.Q)() ?? {}, [a, r] = (0, l.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, l.useEffect)((() => {
            r(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(a)}${e}`)
        },
        d = () => {
          const {
            meta: e = {}
          } = (0, o.Q)() ?? {}, t = (0, l.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, l.useCallback)((e => e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(t)}${e}`) : null), [t])
        },
        m = e => e.full_src,
        c = e => {
          const t = e?.previewSrc ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    9008: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        AriaLabelField: () => n,
        AttributesFields: () => se,
        BorderField: () => s,
        BorderImageField: () => ce,
        CTAsField: () => ge,
        ClassNamesField: () => pe,
        ContentField: () => ue,
        DisplayClassField: () => de,
        FormEntryField: () => xe,
        GridContextField: () => ve,
        GtmField: () => he,
        IdField: () => Se,
        ImageField: () => Ie,
        ImpressionTrackingField: () => Te,
        ItemsField: () => Me,
        LeadAssetToggle: () => Le,
        MediaQueryField: () => De,
        MetaField: () => Ne,
        NameField: () => Be,
        PlatformsAndLinksField: () => Fe,
        PostEntryFields: () => Ae,
        PostMetaField: () => Ee,
        PreviewImagesField: () => Ge,
        StyleField: () => re,
        TINA_MEMOQ_PREFIX: () => Ze,
        TINA_PARSER_KEY: () => Je,
        TagsField: () => Oe,
        TextField: () => ze,
        ThemeField: () => He,
        TranslationKey: () => be,
        UploadsField: () => Ye,
        XMLField: () => We,
        _defaultImageValues: () => ye,
        defaultItemUnique: () => et,
        defaultPricingOptionsUnique: () => tt,
        itemPropsWithKey: () => at,
        localizedImageField: () => Ke,
        translatedField: () => lt
      });
      var l = a(8e3);
      const n = e => {
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
        },
        s = function() {
          return {
            name: "border",
            label: "Border",
            description: "Entire CSS value as a string.",
            component: "text"
          }
        };
      var d = a(5240);
      const m = function() {
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
        c = function() {
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
        b = {
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
        h = {
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
          }, ...p, ...u]
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
          }, ...p, ...u]
        },
        T = {
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
          }, ...p]
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
          }, ...p]
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
          }, ...p]
        },
        P = {
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
        D = function() {
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
        N = function() {
          return {
            label: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Grid Number of Columns",
            name: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "--grid-num-columns",
            description: "Set the grid-template-columns",
            component: "select",
            options: [{
              value: "",
              label: "-- Select Number of Columns --"
            }, {
              value: "auto-fit",
              label: "auto-fit"
            }, {
              value: "auto-fill",
              label: "auto-fill"
            }, {
              value: "1",
              label: "1 column"
            }, {
              value: "2",
              label: "2 columns"
            }, {
              value: "3",
              label: "3 columns"
            }, {
              value: "4",
              label: "4 columns"
            }]
          }
        },
        B = {
          label: "Grid Gap",
          name: "--grid-gap-dynamic",
          description: "Set the grid-gap",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Grid Gap --"
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
        F = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        A = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        E = {
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
        j = {
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
        O = {
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
        H = {
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
        U = {
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
        V = {
          label: "Date/Time Color",
          name: "--time-color",
          description: "Applies to time tags inside this component.",
          component: "color"
        },
        q = {
          label: "Invert Breadcrumb Separator Color",
          name: "toggleInvertSeparator",
          description: "Invert the color.",
          component: "toggle"
        },
        K = {
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
        Z = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        ee = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        te = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        ae = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        le = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        ne = {
          label: "Aspect Ratio",
          name: "--aspect-ratio",
          description: "Set the aspect ratio of the image or container",
          component: "text"
        },
        oe = function() {
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
        ie = e => {
          let {
            filter: t = null
          } = e;
          const a = [{
              ...m("Position")
            }, {
              ...b
            }, {
              ...g
            }, {
              ...f
            }, {
              ...v
            }, {
              ...h
            }, {
              ...x
            }, {
              ...c("Position")
            }],
            l = [{
              ...m("Box Model")
            }, {
              ...S
            }, {
              ...y
            }, {
              ...k
            }, {
              ...w
            }, {
              ..._
            }, {
              ...I
            }, {
              ...T
            }, {
              ...C
            }, {
              ...M
            }, {
              ...L
            }, {
              ...s({})
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
              ...oe(t)
            }, {
              ...c("Box Model")
            }],
            n = [{
              ...m("Text")
            }, {
              ...U
            }, {
              ...H
            }, {
              ...$
            }, {
              ...O
            }, {
              ...z
            }, {
              ...Q
            }, {
              ...X
            }, {
              ...W
            }, {
              ...Y
            }, {
              ...c("Text")
            }],
            d = [{
              ...m("Background..")
            }, ...o({
              filter: t
            }), ...i({
              filter: t
            }), ...r({
              filter: t
            }), {
              ...c("Background")
            }],
            p = [{
              ...m("Grid")
            }, {
              ...D("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              ...N("--grid-num-columns-mobile", "Grid Number of Columns (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...D("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              ...N("--grid-num-columns-desktop", "Grid Number of Columns (Desktop)")
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
              ...F
            }, {
              ...A
            }, {
              ...E
            }, {
              ...G
            }, {
              ...j
            }, {
              ...R
            }, {
              ...c("Grid")
            }],
            u = [{
              ...m("Image")
            }, {
              ...Z
            }, {
              ...ne
            }, {
              ...K
            }, {
              ...J
            }, {
              ...ee
            }, {
              ...te
            }, {
              ...ae
            }, {
              ...le
            }, {
              ...c("Image")
            }],
            ie = [...l, ...a, ...n, ...d];
          return "grid" === t && ie.push(...p), ("image" === t || "layeredImage" === t || t?.startsWith("parallax")) && ie.push(...u), "gridItem" === t && ie.push({
            ...P
          }), "title" === t && (ie.push(V), ie.push(q)), ie
        },
        re = e => {
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
            fields: [...ie({
              filter: t
            })]
          }
        },
        se = e => {
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
            }, n({
              parent: t
            }), re({
              filter: a
            })]
          }
        },
        de = function() {
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
      var me = a(3924);
      const ce = function() {
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
            }, de({})]
          }
        },
        pe = e => {
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
        ue = () => ({
          name: Je,
          label: "Content",
          component: "html"
        }),
        be = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        ge = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            name: "ctas",
            label: "CTA buttons",
            component: "group-list",
            fields: [lt({
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
            }, lt({
              name: "href",
              label: "Link",
              component: "text"
            }), lt({
              name: "buttonText",
              label: "Button Text",
              description: "For non-platform button labels",
              component: "text"
            }), be()],
            ...e,
            itemProps: e => at(e, {
              label: `Link for [${e?.platform??e?.buttonText??""}]`
            }),
            defaultItem: () => et()
          }
        },
        fe = [{
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
        }],
        ve = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: fe,
          initialValues: fe[0]
        }),
        he = () => ({
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
          }],
          itemProps: e => at(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => et()
        }),
        xe = e => {
          let {
            templates: t = []
          } = e;
          return {
            label: "Content",
            description: "Add/remove/arrange/configure sections",
            name: Je,
            component: "blocks",
            templates: t
          }
        },
        Se = () => ({
          name: "id",
          label: "ID",
          description: "HTML attribute used to specify a unique id for an element. (WITHOUT the # sign, sometimes used for jump links)",
          component: "text"
        }),
        ye = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        ke = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, d.jsx)("hr", {})
          }
        },
        we = e => {
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
        _e = [{
          ...ke("Background Image Gradient")
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
          ...ke("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        Ie = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const l = [lt({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), lt({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, we({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => we({
              name: e
            })))
          }, lt({
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
          }), lt({
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
          }), "Background Image" === a && l.push(..._e), {
            name: "image",
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => et(ye),
            itemProps: e => at(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        Te = () => ({
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
          itemProps: e => at(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => et()
        }),
        Ce = e => {
          let {
            game: t = null,
            filter: a = null
          } = e;
          const l = [lt({
            label: "Title",
            name: "title",
            component: "text"
          }), Ie({
            game: t,
            label: "Image Sources"
          })];
          return "discounts" !== a && l.push(lt({
            label: "Description",
            name: "description",
            component: "html"
          })), l.push(lt({
            label: "Link",
            name: "to",
            component: "text"
          }), re({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...l, pe({
              filter: "grid"
            }), Se(), De({
              filter: a,
              fields: l,
              game: t
            }), Te(), he()],
            defaultItem: () => et({
              image: et(ye)
            }),
            itemProps: e => at(e, {
              label: e?.[Ze]?.title ? `${e[Ze].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        Me = e => {
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
            templates: [Ce({
              filter: t,
              game: a
            })],
            defaultItem: () => et(),
            itemProps: e => at(e, {})
          }
        },
        Le = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => et({
            hero: !1
          })
        }),
        Pe = e => {
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
            defaultItem: () => et(),
            itemProps: e => at(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        De = e => {
          let {
            fields: t = [],
            filter: a = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [Pe({
              filter: a,
              fields: t
            })]
          }
        },
        Ne = function() {
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
        Be = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        Fe = function() {
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
            itemProps: e => at(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => et()
          }
        },
        Ae = () => [{
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
        }, Oe({
          name: "primary_tags",
          label: "Game",
          context: 1
        }), Oe({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        Ee = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...Ae(), {
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
          }, Ge()]
        }),
        Ge = () => ({
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
        });
      var je = a(3052),
        Re = a(2712),
        $e = a(5652);
      const Oe = e => {
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
              } = (0, je.useQuery)(Re.TagList, {
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
              return (0, d.jsx)($e.c, {
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
        ze = () => lt({
          label: "Text",
          name: Je,
          component: "html"
        }),
        He = () => ({
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
      var Ue = a(1664),
        Qe = a(1876);
      const Xe = e => {
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
          } = t, [s, m] = (0, Ue.useState)("");
          return (0, d.jsxs)($e.c, {
            name: n,
            label: o,
            description: i,
            children: [(0, d.jsx)(Qe.c, {
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
        We = e => {
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
            component: Xe,
            clearable: !0
          }
        },
        Ye = () => ({
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
        }),
        Ve = e => {
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
        qe = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        Ke = e => {
          let {
            name: t = "image",
            label: a = "Image configuration"
          } = e;
          return {
            name: t,
            label: a,
            component: "group",
            fields: [lt({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), Ve({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: qe.map((e => Ve({
                name: e
              })))
            }, lt({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => et(),
            itemProps: e => at(e, {
              label: `Image [${t}]`
            })
          }
        },
        Je = "content",
        Ze = "_memoq",
        et = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,l.v4)()}`
          }
        },
        tt = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `pricing_key_${(0,l.v4)()}`
          }
        },
        at = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        lt = e => ({
          ...e,
          name: `${Ze}.${e.name}`
        })
    },
    5652: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => i
      });
      var l = a(1664),
        n = a(4952);
      var o = a(5240);
      const i = e => {
        let {
          style: t,
          width: a,
          height: i,
          resizable: r,
          field: s,
          input: d,
          meta: m,
          name: c,
          label: p,
          description: u,
          error: b,
          children: g
        } = e;
        const f = () => r ? (0, o.jsx)(n.Resizable, {
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
          className: "rockstargames-tinaae14828e2aa41ee80b3457afa9f6453f FieldWrapper-sc-custom jpQZXK",
          style: t,
          children: [(0, o.jsxs)("label", {
            className: "rockstargames-tinab458dbf7c8d564ed9f34f2e2d2c2567a FieldLabel-sc-custom dzLxXV",
            htmlFor: c ?? s?.name,
            children: [p ?? s?.label, (0, o.jsx)("span", {
              className: "rockstargames-tinac5285dc90816c68f4c9e005800470530 FieldDescription-sc-custom cyKzVM",
              children: u ?? s?.description
            })]
          }), (0, o.jsx)(f, {}), (b || m?.error) && (0, o.jsx)("div", {
            className: "FieldError_sc_custom",
            children: b ?? m?.error
          })]
        })
      }
    },
    1876: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => n
      });
      var l = a(5240);
      const n = e => {
        let {
          value: t,
          onChange: a = (() => {}),
          multi: n = !1,
          ...o
        } = e;
        const i = e => {
          let {
            value: t,
            multi: a
          } = e;
          return a ? (0, l.jsxs)("div", {
            children: ["Selected files:", t.map((e => e.name)).join(", ")]
          }) : (0, l.jsxs)("div", {
            children: ["Selected file:", t.name]
          })
        };
        return (0, l.jsx)("label", {
          children: t && "" !== t ? (0, l.jsx)(i, {
            value: t,
            multi: n
          }) : (0, l.jsx)("input", {
            ...o,
            type: "file",
            onChange: e => {
              a(n ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }
    },
    2712: e => {
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