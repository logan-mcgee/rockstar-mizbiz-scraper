/*! For license information please see 3fdba04016b74917956e880f97b2024e.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4c7dd47c-61c9-47c5-9665-e239a4f82b55", e._sentryDebugIdIdentifier = "sentry-dbid-4c7dd47c-61c9-47c5-9665-e239a4f82b55")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [558, 472], {
    1996: (e, t, a) => {
      "use strict";
      var l = a(8200),
        n = Symbol.for("react.element"),
        i = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, a) {
        var l, d = {},
          s = null,
          m = null;
        for (l in void 0 !== a && (s = "" + a), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (m = t.ref), t) i.call(t, l) && !r.hasOwnProperty(l) && (d[l] = t[l]);
        if (e && e.defaultProps)
          for (l in t = e.defaultProps) void 0 === d[l] && (d[l] = t[l]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: m,
          props: d,
          _owner: o.current
        }
      }
      t.jsx = d, t.jsxs = d
    },
    3480: (e, t, a) => {
      "use strict";
      e.exports = a(1996)
    },
    2792: (e, t, a) => {
      "use strict";
      a.d(t, {
        Q: () => d,
        m: () => r
      });
      var l = a(8200),
        n = a(3480);
      const i = (0, l.createContext)(),
        {
          Provider: o
        } = i,
        r = e => {
          let {
            children: t,
            payload: a
          } = e;
          return (0, n.jsx)(o, {
            value: a,
            children: t
          })
        },
        d = () => (0, l.useContext)(i)
    },
    3472: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        parse: () => m,
        previewSrc: () => c,
        uploadDir: () => u,
        useGenerateCdnSource: () => s,
        useGetCdnSource: () => d,
        useImageParser: () => r
      });
      var l = a(8200),
        n = a(5792),
        i = a(2792);
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
            ariaLabel: d = null,
            sources: s = null,
            prod: m = null
          } = e;
          const c = (0, n.useLocale)(),
            {
              meta: u = {}
            } = (0, i.Q)() ?? {},
            [p, b] = (0, l.useState)(m ?? u?.cdn ?? u?.prod ?? !0);
          (0, l.useEffect)((() => {
            b(m ?? u?.cdn ?? u?.prod ?? !0)
          }), [m, u]);
          const g = (0, l.useCallback)((e => {
            const t = null !== s,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return o(a);
            const l = `${t?(0,n.getCdnPrefix)(p):""}${a}`;
            return o(l)
          }), [p, s]);
          return {
            alt: t,
            ariaLabel: d,
            src: {
              mobile: g(s?.[c]?.mobile ?? s?.en_us?.mobile ?? a),
              desktop: g(s?.[c]?.desktop ?? s?.en_us?.desktop ?? r)
            }
          }
        },
        d = e => {
          const {
            meta: t = {}
          } = (0, i.Q)() ?? {}, [a, r] = (0, l.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, l.useEffect)((() => {
            r(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e?.startsWith("http") ? o(e) : o(`${(0,n.getCdnPrefix)(a)}${e}`)
        },
        s = () => {
          const {
            meta: e = {}
          } = (0, i.Q)() ?? {}, t = (0, l.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, l.useCallback)((e => e ? e?.startsWith("http") ? o(e) : o(`${(0,n.getCdnPrefix)(t)}${e}`) : null), [t])
        },
        m = e => e.full_src,
        c = e => e?.previewSrc ?? "",
        u = e => e.meta.uploads_directory
    },
    7558: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        AriaLabelField: () => n,
        AttributesFields: () => de,
        BorderField: () => d,
        BorderImageField: () => ce,
        CTAsField: () => ge,
        ClassNamesField: () => ue,
        ContentField: () => pe,
        DisplayClassField: () => se,
        FormEntryField: () => xe,
        GridContextField: () => fe,
        GtmField: () => he,
        ImageField: () => ye,
        ItemsField: () => _e,
        LeadAssetToggle: () => Ne,
        MediaQueryField: () => Te,
        MemoQField: () => Ae,
        MetaField: () => Be,
        NameField: () => Ge,
        PlatformsAndLinksField: () => je,
        PostEntryFields: () => $e,
        PostMetaField: () => Xe,
        PreviewImagesField: () => Re,
        StyleField: () => re,
        TINA_MEMOQ_PREFIX: () => Ke,
        TINA_PARSER_KEY: () => We,
        TagsField: () => Ue,
        TextField: () => Ve,
        ThemeField: () => qe,
        TranslationKey: () => be,
        UploadsField: () => ze,
        XMLField: () => Ee,
        _defaultImageValues: () => Se,
        defaultItemUnique: () => Je,
        defaultPricingOptionsUnique: () => Ze,
        itemPropsWithKey: () => et,
        localizedImageField: () => Ye,
        translatedField: () => tt
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
        o = function() {
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
        d = function() {
          return {
            name: "border",
            label: "Border",
            description: "Entire CSS value as a string.",
            component: "text"
          }
        };
      var s = a(3480);
      const m = function() {
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
        v = {
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
          }, ...u, ...p]
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
          }, ...u, ...p]
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
          }, ...u, ...p]
        },
        M = {
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
          }, ...u, ...p]
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
          }, ...u]
        },
        D = {
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
          }, ...u]
        },
        C = {
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
        P = function() {
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
        E = {
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
        B = {
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
        $ = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        X = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        R = {
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
        z = {
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
        H = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        Y = {
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
        ie = function() {
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
              ...m("Position")
            }, {
              ...b
            }, {
              ...g
            }, {
              ...v
            }, {
              ...f
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
              ...k
            }, {
              ...y
            }, {
              ...w
            }, {
              ..._
            }, {
              ...N
            }, {
              ...M
            }, {
              ...T
            }, {
              ...D
            }, {
              ...I
            }, {
              ...d({})
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
              ...ie(t)
            }, {
              ...c("Box Model")
            }],
            n = [{
              ...m("Text")
            }, {
              ...V
            }, {
              ...U
            }, {
              ...X
            }, {
              ...R
            }, {
              ...O
            }, {
              ...q
            }, {
              ...z
            }, {
              ...Q
            }, {
              ...H
            }, {
              ...c("Text")
            }],
            s = [{
              ...m("Background..")
            }, ...i({
              filter: t
            }), ...o({
              filter: t
            }), ...r({
              filter: t
            }), {
              ...c("Background")
            }],
            u = [{
              ...m("Grid")
            }, {
              ...L("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              ...P("--grid-num-columns-mobile", "Grid Number of Columns (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...L("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              ...P("--grid-num-columns-desktop", "Grid Number of Columns (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...E
            }, {
              ...C
            }, {
              ...F
            }, {
              ...A
            }, {
              ...B
            }, {
              ...G
            }, {
              ...j
            }, {
              ...$
            }, {
              ...c("Grid")
            }],
            p = [{
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
            oe = [...l, ...a, ...n, ...s];
          return "grid" === t && oe.push(...u), ("image" === t || "layeredImage" === t || t?.startsWith("parallax")) && oe.push(...p), "gridItem" === t && oe.push({
            ...C
          }), "title" === t && (oe.push(Y), oe.push(W)), oe
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
            fields: [...oe({
              filter: t
            })]
          }
        },
        de = e => {
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
      var me = a(3472);
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
            }, se({})]
          }
        },
        ue = e => {
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
          name: We,
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
            fields: [tt({
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
            }, tt({
              name: "href",
              label: "Link",
              component: "text"
            }), tt({
              name: "buttonText",
              label: "Button Text",
              description: "For non-platform button labels",
              component: "text"
            }), be()],
            ...e,
            itemProps: e => et(e, {
              label: `Link for [${e?.platform??e?.buttonText??""}]`
            }),
            defaultItem: () => Je()
          }
        },
        ve = [{
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
        fe = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: ve,
          initialValues: ve[0]
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
            name: "event_placement",
            label: "Event Placement",
            component: "text"
          }],
          itemProps: e => et(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => Je()
        }),
        xe = e => {
          let {
            templates: t = []
          } = e;
          return {
            label: "Content",
            description: "Add/remove/arrange/configure sections",
            name: We,
            component: "blocks",
            templates: t
          }
        },
        Se = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        ke = e => {
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
        ye = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const l = [tt({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), tt({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, ke({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => ke({
              name: e
            })))
          }, tt({
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
          }), tt({
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
          }), {
            name: "image",
            label: a,
            component: "group",
            fields: l,
            defaultItem: () => Je(Se),
            itemProps: e => et(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        we = e => {
          let {
            game: t = null,
            filter: a = null
          } = e;
          const l = [tt({
            label: "Title",
            name: "title",
            component: "text"
          }), ye({
            game: t,
            label: "Image Sources"
          })];
          return "discounts" !== a && l.push(tt({
            label: "Description",
            name: "description",
            component: "html"
          })), l.push(tt({
            label: "Link",
            name: "to",
            component: "text"
          }), re({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...l, ue({
              filter: "grid"
            }), Te({
              filter: a,
              fields: l,
              game: t
            })],
            defaultItem: () => Je({
              image: Je(Se)
            }),
            itemProps: e => et(e, {
              label: e?.[Ke]?.title ? `${e[Ke].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        _e = e => {
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
            templates: [we({
              filter: t,
              game: a
            })],
            defaultItem: () => Je(),
            itemProps: e => et(e, {})
          }
        },
        Ne = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => Je({
            hero: !1
          })
        }),
        Me = e => {
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
            defaultItem: () => Je(),
            itemProps: e => et(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        Te = e => {
          let {
            fields: t = [],
            filter: a = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [Me({
              filter: a,
              fields: t
            })]
          }
        };
      var De = a(8200),
        Ie = a(3052),
        Ce = a(9125),
        Le = a(5532);
      const Pe = e => {
          let {
            field: t,
            input: a,
            form: l
          } = e;
          const {
            name: n,
            label: i,
            description: o,
            fileLoaded: r
          } = t, [d, m] = (0, De.useState)("");
          return (0, s.jsxs)(Ce.c, {
            name: n,
            label: i,
            description: o,
            children: [(0, s.jsx)(Le.c, {
              onChange: e => {
                m(e)
              },
              name: a?.name,
              value: d,
              accept: ".xml"
            }), (0, s.jsx)("button", {
              style: {
                display: "block"
              },
              onClick: () => (async () => {
                if (!d) return;
                const e = new FileReader;
                e.onload = async e => {
                  r(e.target.result)
                }, e.readAsText(d)
              })(),
              children: "Save XML"
            })]
          })
        },
        Ee = e => {
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
            component: Pe,
            clearable: !0
          }
        };
      var Fe = a(7364);
      const Ae = e => {
          let {
            id: t,
            table: a,
            initialStatus: l = null,
            uploadSuccess: n = null,
            uploadError: i = null
          } = e;
          const [, o] = (0, De.useState)(l), [r] = (0, Ie.useMutation)(Fe.MemoqXmlUpload), {
            refetch: d
          } = (0, Ie.useQuery)(Fe.MemoqXmlDownload, {
            skip: !0,
            variables: {
              id: t,
              table: a
            }
          });
          let m = [{
            name: "download",
            label: "Download XML",
            component: () => (0, s.jsx)(Ce.c, {
              name: "download",
              label: "Download XML",
              description: "Download XML and upload to MemoQ.",
              children: (0, s.jsx)("button", {
                onClick: () => (async () => {
                  const e = await d(),
                    a = `${t}-translations.xml`,
                    l = document.createElement("a");
                  o(e.data.memoqXmlDownload.translation_status), l.setAttribute("href", `data:text/xml;charset=utf-8,${encodeURIComponent(e.data.memoqXmlDownload.xml)}`), l.setAttribute("_target", "blank"), l.setAttribute("download", a), l.style.display = "none", document.body.appendChild(l), l.click(), document.body.removeChild(l)
                })(),
                type: "button",
                children: "Download XML"
              })
            })
          }, Ee({
            name: "upload",
            label: "Upload XML",
            description: "Upload translated XML file from MemoQ.",
            fileLoaded: async e => {
              try {
                const l = await r({
                  variables: {
                    table: a,
                    id: t,
                    xml: e
                  }
                });
                l?.data?.memoqXmlUpload?.translation_status && (o(l.data.memoqXmlUpload.translation_status), "function" == typeof n && n())
              } catch (e) {
                "function" == typeof i && i(e)
              }
            }
          }), {
            name: "lockTranslations",
            label: "Lock Translations",
            description: "Prevent translations from being overridden while on.",
            component: "toggle"
          }];
          return t && a || (m = []), {
            name: "__memoq",
            label: "MemoQ Integration",
            description: "Use this section to download and upload MemoQ-friendly XML files.",
            component: "group",
            fields: m
          }
        },
        Be = function() {
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
        Ge = () => ({
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
            itemProps: e => et(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => Je()
          }
        },
        $e = () => [{
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
        }, Ue({
          name: "primary_tags",
          label: "Game",
          context: 1
        }), Ue({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        Xe = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...$e(), {
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
          }, Re()]
        }),
        Re = () => ({
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
      var Oe = a(1368);
      const Ue = e => {
          let {
            label: t = "Tags",
            name: a = "tags",
            context: l = null
          } = e;
          return {
            label: t,
            name: a,
            component: e => {
              let {
                field: t,
                input: a,
                meta: n
              } = e;
              const {
                data: i
              } = (0, Ie.useQuery)(Oe.TagList, {
                variables: {
                  locale: "en_us",
                  context: l
                }
              });
              if (!i || !(i?.tagList ?? []).length) return null;
              const o = [{
                id: "",
                name: "-- Select Tag --"
              }, ...i.tagList];
              return (0, s.jsx)(Ce.c, {
                field: t,
                input: a,
                meta: n,
                children: (0, s.jsx)("select", {
                  ...a,
                  children: o.map((e => (0, s.jsx)("option", {
                    value: e.id,
                    children: e.name
                  }, e.id)))
                })
              })
            }
          }
        },
        Ve = () => tt({
          label: "Text",
          name: We,
          component: "html"
        }),
        qe = () => ({
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
        ze = () => ({
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
        Qe = e => {
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
        He = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        Ye = e => {
          let {
            name: t = "image",
            label: a = "Image configuration"
          } = e;
          return {
            name: t,
            label: a,
            component: "group",
            fields: [tt({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), Qe({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: He.map((e => Qe({
                name: e
              })))
            }, tt({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => Je(),
            itemProps: e => et(e, {
              label: `Image [${t}]`
            })
          }
        },
        We = "content",
        Ke = "_memoq",
        Je = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,l.v4)()}`
          }
        },
        Ze = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `pricing_key_${(0,l.v4)()}`
          }
        },
        et = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        tt = e => ({
          ...e,
          name: `${Ke}.${e.name}`
        })
    },
    9125: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => o
      });
      var l = a(8200),
        n = a(4952);
      var i = a(3480);
      const o = e => {
        let {
          style: t,
          width: a,
          height: o,
          resizable: r,
          field: d,
          input: s,
          meta: m,
          name: c,
          label: u,
          description: p,
          error: b,
          children: g
        } = e;
        const v = () => r ? (0, i.jsx)(n.Resizable, {
          defaultSize: {
            width: a || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, l.cloneElement)(g, ...s)
        }) : g;
        return (0, i.jsxs)("div", {
          className: "rockstargames-tinaae14828e2aa41ee80b3457afa9f6453f FieldWrapper-sc-custom jpQZXK",
          style: t,
          children: [(0, i.jsxs)("label", {
            className: "rockstargames-tinab458dbf7c8d564ed9f34f2e2d2c2567a FieldLabel-sc-custom dzLxXV",
            htmlFor: c ?? d?.name,
            children: [u ?? d?.label, (0, i.jsx)("span", {
              className: "rockstargames-tinac5285dc90816c68f4c9e005800470530 FieldDescription-sc-custom cyKzVM",
              children: p ?? d?.description
            })]
          }), (0, i.jsx)(v, {}), (b || m?.error) && (0, i.jsx)("div", {
            className: "FieldError_sc_custom",
            children: b ?? m?.error
          })]
        })
      }
    },
    5532: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => n
      });
      var l = a(3480);
      const n = e => {
        let {
          value: t,
          onChange: a = (() => {}),
          multi: n = !1,
          ...i
        } = e;
        const o = e => {
          let {
            value: t,
            multi: a
          } = e;
          return a ? (0, l.jsxs)("div", {
            children: ["Selected files: ", t.map((e => e.name)).join(", ")]
          }) : (0, l.jsxs)("div", {
            children: ["Selected file: ", t.name]
          })
        };
        return (0, l.jsx)("label", {
          children: t && "" !== t ? (0, l.jsx)(o, {
            value: t,
            multi: n
          }) : (0, l.jsx)("input", {
            ...i,
            type: "file",
            onChange: e => {
              a(n ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }
    },
    7364: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MemoqXmlDownload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "memoqXmlDownload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "xml"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "translation_status"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "MemoqXmlUpload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
                value: "xml"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "memoqXmlUpload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "xml"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "xml"
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
                    value: "translation_status"
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
          end: 314
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
        body: "query MemoqXmlDownload($table: String!, $id: String!) {\n    memoqXmlDownload(table: $table, id: $id) {\n        xml\n        translation_status\n    }\n}\n\nmutation MemoqXmlUpload($table: String!, $id: String!, $xml: String!) {\n    memoqXmlUpload(table: $table, id: $id, xml: $xml) {\n        translation_status\n    }\n}\n",
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

      function i(e, t) {
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
          var d = r;
          r = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (l[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var l = n(e, t);
          l && a.definitions.push(l)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), l[e.name.value] = t
        }
      })), e.exports = t, e.exports.MemoqXmlDownload = i(t, "MemoqXmlDownload"), e.exports.MemoqXmlUpload = i(t, "MemoqXmlUpload")
    },
    1368: e => {
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
          var d = r;
          r = new Set, d.forEach((function(e) {
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
    }
  }
]);
//# sourceMappingURL=3fdba04016b74917956e880f97b2024e.js.map