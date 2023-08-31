(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [223], {
    165: (e, t, a) => {
      "use strict";
      a.d(t, {
        I: () => d,
        d: () => r
      });
      var n = a(932),
        l = a(160);
      const i = (0, n.createContext)(),
        {
          Provider: o
        } = i,
        r = e => {
          let {
            children: t,
            payload: a
          } = e;
          return (0, l.jsx)(o, {
            value: a,
            children: t
          })
        },
        d = () => (0, n.useContext)(i)
    },
    512: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        parse: () => m,
        previewSrc: () => c,
        uploadDir: () => p,
        useGenerateCdnSource: () => s,
        useGetCdnSource: () => d,
        useImageParser: () => r
      });
      var n = a(932),
        l = a(929),
        i = a(165);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith("akamaized.net"), e)
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
          const c = (0, l.useLocale)(),
            {
              meta: p = {}
            } = (0, i.I)() ?? {},
            [u, b] = (0, n.useState)(m ?? p?.cdn ?? p?.prod ?? !0);
          (0, n.useEffect)((() => {
            b(m ?? p?.cdn ?? p?.prod ?? !0)
          }), [m, p]);
          const g = (0, n.useCallback)((e => {
            const t = null !== s,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return o(a);
            const n = `${t?(0,l.getCdnPrefix)(u):""}${a}`;
            return o(n)
          }), [u, s]);
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
          } = (0, i.I)() ?? {}, [a, r] = (0, n.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, n.useEffect)((() => {
            r(t?.cdn ?? t?.prod ?? !1)
          }), [t]), null === e ? null : e.startsWith("http") ? o(e) : o(`${(0,l.getCdnPrefix)(a)}${e}`)
        },
        s = () => {
          const {
            meta: e = {}
          } = (0, i.I)() ?? {}, t = (0, n.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
          return (0, n.useCallback)((e => e ? e.startsWith("http") ? o(e) : o(`${(0,l.getCdnPrefix)(t)}${e}`) : null), [t])
        },
        m = e => e.full_src,
        c = e => `${(0,l.getCdnPrefix)(!1)}${e?.previewSrc??e}`,
        p = e => e.meta.uploads_directory
    },
    223: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        AriaLabelField: () => l,
        AttributesFields: () => le,
        BorderField: () => d,
        BorderImageField: () => re,
        CTAsField: () => me,
        ClassNamesField: () => de,
        ContentField: () => se,
        DisplayClassField: () => ie,
        FormEntryField: () => be,
        GridContextField: () => pe,
        GtmField: () => ue,
        ImageField: () => ve,
        ItemsField: () => xe,
        LeadAssetToggle: () => Se,
        MediaQueryField: () => ye,
        MemoQField: () => Ce,
        MetaField: () => Le,
        NameField: () => Fe,
        PlatformsAndLinksField: () => Pe,
        PostEntryFields: () => Ae,
        PostMetaField: () => Be,
        PreviewImagesField: () => Ee,
        StyleField: () => ne,
        TINA_MEMOQ_PREFIX: () => ze,
        TINA_PARSER_KEY: () => Re,
        TagsField: () => je,
        TextField: () => Ge,
        ThemeField: () => Xe,
        UploadsField: () => Ue,
        XMLField: () => _e,
        _defaultImageValues: () => ge,
        defaultItemUnique: () => He,
        defaultPricingOptionsUnique: () => Qe,
        itemPropsWithKey: () => We,
        localizedImageField: () => Oe,
        translatedField: () => Ye
      });
      var n = a(272);
      const l = e => {
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
      var s = a(160);
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
        p = [{
          value: "0px",
          label: "None"
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
          }, ...p, ...u]
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
          }, ...p, ...u]
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
          }, ...p, ...u]
        },
        I = {
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
        D = {
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
        T = {
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
          }, ...p]
        },
        M = {
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
        C = function() {
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
        L = {
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
        P = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        A = {
          label: "Grid Align Self",
          name: "--grid-align-self",
          description: "Set the align-self property",
          component: "text"
        },
        B = {
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
        $ = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        j = {
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
        O = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        R = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        z = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        H = {
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
        W = {
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
        Z = {
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
        ae = e => {
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
            n = [{
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
              ...N
            }, {
              ...I
            }, {
              ...D
            }, {
              ...T
            }, {
              ..._
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
              ...c("Box Model")
            }],
            l = [{
              ...m("Text")
            }, {
              ...V
            }, {
              ...U
            }, {
              ...j
            }, {
              ...G
            }, {
              ...X
            }, {
              ...q
            }, {
              ...O
            }, {
              ...R
            }, {
              ...z
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
            p = [{
              ...m("Grid")
            }, {
              ...C("--grid-num-columns-mobile", "Grid Number of Columns (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...C("--grid-num-columns-desktop", "Grid Number of Columns (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...L
            }, {
              ...M
            }, {
              ...F
            }, {
              ...P
            }, {
              ...A
            }, {
              ...B
            }, {
              ...E
            }, {
              ...$
            }, {
              ...c("Grid")
            }],
            u = [{
              ...m("Image")
            }, {
              ...Z
            }, {
              ...W
            }, {
              ...Y
            }, {
              ...K
            }, {
              ...J
            }, {
              ...ee
            }, {
              ...te
            }, {
              ...c("Image")
            }],
            ae = [...n, ...l, ...s];
          return "grid" === t && ae.push(...p), "image" !== t && "layeredImage" !== t || ae.push(...u), "layeredImage" !== t && "parallaxOuterLayer" !== t && "parallaxInnerLayer" !== t || ae.push(...a), "gridItem" === t && ae.push({
            ...M
          }), "title" === t && (ae.push(H), ae.push(Q)), ae
        },
        ne = e => {
          let {
            filter: t = null
          } = e;
          return {
            label: "CSS Variables",
            name: "style",
            description: "Override CSS Variables",
            component: "group",
            fields: [...ae({
              filter: t
            })]
          }
        },
        le = e => {
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
            }, l({
              parent: t
            }), ne({
              filter: a
            })]
          }
        },
        ie = function() {
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
      var oe = a(512);
      const re = function() {
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
              uploadDir: oe.uploadDir,
              parse: oe.parse,
              previewSrc: oe.previewSrc
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
            }, ie({})]
          }
        },
        de = e => {
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
        se = () => ({
          name: Re,
          label: "Content",
          component: "html"
        }),
        me = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            name: "ctas",
            label: "CTA buttons",
            component: "group-list",
            fields: [Ye({
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
            }, {
              name: "href",
              label: "Link",
              component: "text"
            }, {
              name: "buttonText",
              label: "Button Text",
              description: "For non-platform button labels",
              component: "text"
            }],
            ...e,
            itemProps: e => We(e, {
              label: `Link for [${e?.platform??e?.buttonText??""}]`
            }),
            defaultItem: () => He()
          }
        },
        ce = [{
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
        }],
        pe = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: ce,
          initialValues: ce[0]
        }),
        ue = () => ({
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
          itemProps: e => We(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => He()
        }),
        be = e => {
          let {
            templates: t = []
          } = e;
          return {
            label: "Content",
            description: "Add/remove/arrange/configure sections",
            name: Re,
            component: "blocks",
            templates: t
          }
        },
        ge = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        fe = e => {
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
              uploadDir: oe.uploadDir,
              parse: oe.parse,
              previewSrc: oe.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: oe.uploadDir,
              parse: oe.parse,
              previewSrc: oe.previewSrc
            }]
          }
        },
        ve = e => {
          let {
            game: t = null,
            label: a = "Image Configuration"
          } = e;
          const n = [Ye({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Ye({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, fe({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => fe({
              name: e
            })))
          }, Ye({
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
          }), Ye({
            name: "caption",
            label: "Caption",
            component: "html"
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
          }), {
            name: "image",
            label: a,
            component: "group",
            fields: n,
            defaultItem: () => He(ge),
            itemProps: e => We(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        he = e => {
          let {
            game: t = null,
            filter: a = null
          } = e;
          const n = [Ye({
            label: "Title",
            name: "title",
            component: "text"
          }), ve({
            game: t,
            label: "Image Sources"
          })];
          return "discounts" !== a && n.push(Ye({
            label: "Description",
            name: "description",
            component: "html"
          })), n.push(Ye({
            label: "Link",
            name: "to",
            component: "text"
          }), ne({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...n, de({
              filter: "grid"
            }), ye({
              filter: a,
              fields: n,
              game: t
            })],
            defaultItem: () => He({
              image: He(ge)
            }),
            itemProps: e => We(e, {
              label: e?.[ze]?.title ? `${e[ze].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        xe = e => {
          let {
            filter: t = null,
            game: a = null,
            label: n = null,
            name: l = "items"
          } = e;
          return {
            name: l,
            label: n ?? `Edit ${l}`,
            component: "blocks",
            templates: [he({
              filter: t,
              game: a
            })],
            defaultItem: () => He(),
            itemProps: e => We(e, {})
          }
        },
        Se = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => He({
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
            defaultItem: () => He(),
            itemProps: e => We(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        ye = e => {
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
        };
      var we = a(932),
        Ne = a(859),
        Ie = a(577),
        De = a(939);
      const Te = e => {
          let {
            field: t,
            input: a,
            form: n
          } = e;
          const {
            name: l,
            label: i,
            description: o,
            fileLoaded: r
          } = t, [d, m] = (0, we.useState)("");
          return (0, s.jsxs)(Ie.Z, {
            name: l,
            label: i,
            description: o,
            children: [(0, s.jsx)(De.Z, {
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
        _e = e => {
          let {
            name: t,
            label: a,
            description: n,
            fileLoaded: l
          } = e;
          return {
            name: t,
            label: a,
            description: n,
            fileLoaded: l,
            component: Te,
            clearable: !0
          }
        };
      var Me = a(623);
      const Ce = e => {
          let {
            id: t,
            table: a,
            initialStatus: n = null,
            uploadSuccess: l = null,
            uploadError: i = null
          } = e;
          const [, o] = (0, we.useState)(n), [r] = (0, Ne.useMutation)(Me.MemoqXmlUpload), {
            refetch: d
          } = (0, Ne.useQuery)(Me.MemoqXmlDownload, {
            skip: !0,
            variables: {
              id: t,
              table: a
            }
          });
          let m = [{
            name: "download",
            label: "Download XML",
            component: () => (0, s.jsx)(Ie.Z, {
              name: "download",
              label: "Download XML",
              description: "Download XML and upload to MemoQ.",
              children: (0, s.jsx)("button", {
                onClick: () => (async () => {
                  const e = await d(),
                    a = `${t}-translations.xml`,
                    n = document.createElement("a");
                  o(e.data.memoqXmlDownload.translation_status), n.setAttribute("href", `data:text/xml;charset=utf-8,${encodeURIComponent(e.data.memoqXmlDownload.xml)}`), n.setAttribute("_target", "blank"), n.setAttribute("download", a), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
                })(),
                type: "button",
                children: "Download XML"
              })
            })
          }, _e({
            name: "upload",
            label: "Upload XML",
            description: "Upload translated XML file from MemoQ.",
            fileLoaded: async e => {
              try {
                const n = await r({
                  variables: {
                    table: a,
                    id: t,
                    xml: e
                  }
                });
                n?.data?.memoqXmlUpload?.translation_status && (o(n.data.memoqXmlUpload.translation_status), "function" == typeof l && l())
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
        Le = function() {
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
        Fe = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        Pe = function() {
          return {
            component: "group-list",
            name: "platformsAndLinks",
            label: "Platforms and Links",
            fields: [{
              name: "platform",
              label: "Choose Platform",
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
                value: "xboxone",
                label: "Xbox One"
              }, {
                value: "xboxseriesxs",
                label: "Xbox Series X|S"
              }, {
                value: "pc",
                label: "PC"
              }]
            }, {
              name: "href",
              label: "Link",
              component: "text"
            }, {
              name: "buttonText",
              label: "Button Text",
              description: "For non-platform button labels",
              component: "text"
            }],
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            itemProps: e => We(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => He()
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
        }, je({
          name: "primary_tags",
          label: "Game",
          context: 1
        }), je({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        Be = () => ({
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
            label: "Use cdn?",
            description: "Set this to true to upload images to akamai. Images will take a couple minutes to show up after saving.",
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
          }, Ee()]
        }),
        Ee = () => ({
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
              uploadDir: oe.uploadDir,
              previewSrc: oe.previewSrc,
              parse: oe.parse
            }, {
              name: "newswire-block-square",
              label: "Square Source",
              component: "image",
              clearable: !0,
              uploadDir: oe.uploadDir,
              previewSrc: oe.previewSrc,
              parse: oe.parse
            }]
          })))
        });
      var $e = a(571);
      const je = e => {
          let {
            label: t = "Tags",
            name: a = "tags",
            context: n = null
          } = e;
          return {
            label: t,
            name: a,
            component: e => {
              let {
                field: t,
                input: a,
                meta: l
              } = e;
              const {
                data: i
              } = (0, Ne.useQuery)($e.TagList, {
                variables: {
                  locale: "en_us",
                  context: n
                }
              });
              if (!i || !(i?.tagList ?? []).length) return null;
              const o = [{
                id: "",
                name: "-- Select Tag --"
              }, ...i.tagList];
              return (0, s.jsx)(Ie.Z, {
                field: t,
                input: a,
                meta: l,
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
        Ge = () => Ye({
          label: "Text",
          name: Re,
          component: "html"
        }),
        Xe = () => ({
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
          }]
        }),
        Ue = () => ({
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
              uploadDir: oe.uploadDir,
              parse: oe.parse,
              previewSrc: oe.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: oe.uploadDir,
              parse: oe.parse,
              previewSrc: oe.previewSrc
            }]
          }
        },
        qe = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        Oe = e => {
          let {
            name: t = "image",
            label: a = "Image configuration"
          } = e;
          return {
            name: t,
            label: a,
            component: "group",
            fields: [Ye({
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
            }, Ye({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => He(),
            itemProps: e => We(e, {
              label: `Image [${t}]`
            })
          }
        },
        Re = "content",
        ze = "_memoq",
        He = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,n.Z)()}`
          }
        },
        Qe = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `pricing_key_${(0,n.Z)()}`
          }
        },
        We = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        Ye = e => ({
          ...e,
          name: `${ze}.${e.name}`
        })
    },
    577: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => o
      });
      var n = a(932),
        l = a(595);
      var i = a(160);
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
          label: p,
          description: u,
          error: b,
          children: g
        } = e;
        const f = () => r ? (0, i.jsx)(l.e, {
          defaultSize: {
            width: a || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, n.cloneElement)(g, ...s)
        }) : g;
        return (0, i.jsxs)("div", {
          className: "b8556f6133e2002ef3ec8d89954175f42137 FieldWrapper-sc-custom jpQZXK",
          style: t,
          children: [(0, i.jsxs)("label", {
            className: "b8556f6133e2002edc10ff67c241feacb785 FieldLabel-sc-custom dzLxXV",
            htmlFor: c ?? d?.name,
            children: [p ?? d?.label, (0, i.jsx)("span", {
              className: "b8556f6133e2002ef2aa3128a2d6ebae9d50 FieldDescription-sc-custom cyKzVM",
              children: u ?? d?.description
            })]
          }), (0, i.jsx)(f, {}), (b || m?.error) && (0, i.jsx)("div", {
            className: "FieldError_sc_custom",
            children: b ?? m?.error
          })]
        })
      }
    },
    939: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => l
      });
      var n = a(160);
      const l = e => {
        let {
          value: t,
          onChange: a = (() => {}),
          multi: l = !1,
          ...i
        } = e;
        const o = e => {
          let {
            value: t,
            multi: a
          } = e;
          return a ? (0, n.jsxs)("div", {
            children: ["Selected files: ", t.map((e => e.name)).join(", ")]
          }) : (0, n.jsxs)("div", {
            children: ["Selected file: ", t.name]
          })
        };
        return (0, n.jsx)("label", {
          children: t && "" !== t ? (0, n.jsx)(o, {
            value: t,
            multi: l
          }) : (0, n.jsx)("input", {
            ...i,
            type: "file",
            onChange: e => {
              a(l ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }
    },
    272: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => d
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let l;
      const i = new Uint8Array(16);

      function o() {
        if (!l && (l = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !l)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return l(i)
      }
      const r = [];
      for (let e = 0; e < 256; ++e) r.push((e + 256).toString(16).slice(1));
      const d = function(e, t, a) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        const l = (e = e || {}).random || (e.rng || o)();
        if (l[6] = 15 & l[6] | 64, l[8] = 63 & l[8] | 128, t) {
          a = a || 0;
          for (let e = 0; e < 16; ++e) t[a + e] = l[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (r[e[t + 0]] + r[e[t + 1]] + r[e[t + 2]] + r[e[t + 3]] + "-" + r[e[t + 4]] + r[e[t + 5]] + "-" + r[e[t + 6]] + r[e[t + 7]] + "-" + r[e[t + 8]] + r[e[t + 9]] + "-" + r[e[t + 10]] + r[e[t + 11]] + r[e[t + 12]] + r[e[t + 13]] + r[e[t + 14]] + r[e[t + 15]]).toLowerCase()
        }(l)
      }
    },
    623: e => {
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
        body: "query MemoqXmlDownload($table: String!, $id: String!) {\n    memoqXmlDownload(table: $table, id: $id) {\n        xml\n        translation_status\n    }\n}\n\nmutation MemoqXmlUpload($table: String!, $id: String!, $xml: String!) {\n    memoqXmlUpload(table: $table, id: $id, xml: $xml) {\n        translation_status\n    }\n}\n",
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

      function i(e, t) {
        var a = {
          kind: e.kind,
          definitions: [l(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = n[t] || new Set,
          o = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var n = l(e, t);
          n && a.definitions.push(n)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.MemoqXmlDownload = i(t, "MemoqXmlDownload"), e.exports.MemoqXmlUpload = i(t, "MemoqXmlUpload")
    },
    571: e => {
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
        var i = n[t] || new Set,
          o = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var n = l(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TagList")
    }
  }
]);