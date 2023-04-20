(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [437], {
    201: (e, a, t) => {
      "use strict";
      t.d(a, {
        I: () => d,
        d: () => r
      });
      var n = t(822),
        l = t(322);
      const i = (0, n.createContext)(),
        {
          Provider: o
        } = i,
        r = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, l.jsx)(o, {
            value: t,
            children: a
          })
        },
        d = () => (0, n.useContext)(i)
    },
    69: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        parse: () => s,
        previewSrc: () => m,
        uploadDir: () => c,
        useGetCdnSource: () => d,
        useImageParser: () => r
      });
      var n = t(822),
        l = t(929),
        i = t(201);
      const o = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === t ? null : (a.endsWith("akamaized.net"), e)
        },
        r = e => {
          let {
            alt: a = null,
            mobile: t = null,
            desktop: r = null,
            ariaLabel: d = null,
            sources: s = null,
            prod: m = null
          } = e;
          const c = (0, l.useLocale)(),
            {
              meta: u = {}
            } = (0, i.I)() ?? {},
            [p, b] = (0, n.useState)(m ?? u?.cdn ?? u?.prod ?? !0);
          (0, n.useEffect)((() => {
            b(m ?? u?.cdn ?? u?.prod ?? !0)
          }), [m, u]);
          const g = (0, n.useCallback)((e => {
            const a = null !== s,
              t = e?.previewSrc ?? e ?? null;
            if (null === t) return null;
            if (t.startsWith("http")) return o(t);
            const n = `${a?(0,l.getCdnPrefix)(p):""}${t}`;
            return o(n)
          }), [p, s]);
          return {
            alt: a,
            ariaLabel: d,
            src: {
              mobile: g(s?.[c]?.mobile ?? s?.en_us?.mobile ?? t),
              desktop: g(s?.[c]?.desktop ?? s?.en_us?.desktop ?? r)
            }
          }
        },
        d = e => {
          const {
            meta: a = {}
          } = (0, i.I)(), [t, r] = (0, n.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, n.useEffect)((() => {
            r(a?.cdn ?? a?.prod ?? !1)
          }), [a]), null === e ? null : e.startsWith("http") ? o(e) : o(`${(0,l.getCdnPrefix)(t)}${e}`)
        },
        s = e => e.full_src,
        m = e => `${(0,l.getCdnPrefix)(!1)}${e?.previewSrc??e}`,
        c = e => e.meta.uploads_directory
    },
    437: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AriaLabelField: () => l,
        AttributesFields: () => z,
        BorderField: () => d,
        BorderImageField: () => Q,
        ClassNamesField: () => Y,
        ContentField: () => W,
        DisplayClassField: () => O,
        FormEntryField: () => J,
        GridContextField: () => K,
        ImageField: () => te,
        ItemsField: () => le,
        LeadAssetToggle: () => ie,
        MediaQueryField: () => re,
        MemoQField: () => ge,
        MetaField: () => ve,
        NameField: () => fe,
        PlatformsAndLinksField: () => he,
        PostEntryFields: () => Se,
        PostMetaField: () => ke,
        PreviewImagesField: () => xe,
        StyleField: () => R,
        TINA_MEMOQ_PREFIX: () => Ce,
        TINA_PARSER_KEY: () => Le,
        TagsField: () => we,
        TextField: () => Ne,
        ThemeField: () => De,
        UploadsField: () => _e,
        XMLField: () => pe,
        _defaultImageValues: () => ee,
        defaultItemUnique: () => Fe,
        itemPropsWithKey: () => Pe,
        localizedImageField: () => Te,
        translatedField: () => Ae
      });
      var n = t(887);
      const l = e => {
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
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return [{
            name: e?.parent ? `${e?.parent}.backgroundImage` : "backgroundImage",
            label: "Background Image",
            component: "text",
            initialValues: "url()",
            format: e => e ? -1 !== e.indexOf("url(") ? `url(${e.split("url(")[1].split(")")[0]})` : `url(${e})` : "url()"
          }, {
            name: e?.parent ? `${e?.parent}.backgroundSize` : "backgroundSize",
            label: "Background Size",
            component: "select",
            options: ["", "cover", "contain", "revert", "auto"]
          }, {
            name: e?.parent ? `${e?.parent}.backgroundPosition` : "backgroundPosition",
            label: "Background Position",
            component: "select",
            options: ["", "center", "left", "right", "top", "bottom"]
          }]
        },
        r = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return [{
            name: e?.parent ? `${e?.parent}.backgroundRepeat` : "backgroundRepeat",
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
      var s = t(322);
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
        S = {
          label: "Object Position - Horizontal",
          name: "--bg-position-horizontal",
          description: "Distance from left BACKGROUND IMAGES (recommended to use %)",
          component: "text"
        },
        k = {
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
          }, ...u, ...p]
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
        D = {
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
        T = {
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
        C = {
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
        P = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        A = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        $ = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        E = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        B = {
          label: "Image Width",
          name: "width",
          description: "Set the image width",
          component: "text"
        },
        X = {
          label: "Image Min-Width",
          name: "min-width",
          description: "Set the image min-width",
          component: "text"
        },
        U = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        j = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        V = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        G = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        q = e => {
          let {
            filter: a = null
          } = e;
          const t = [{
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
              ...S
            }, {
              ...c("Position")
            }],
            n = [{
              ...m("Box Model")
            }, {
              ...k
            }, {
              ...x
            }, {
              ...y
            }, {
              ...w
            }, {
              ...N
            }, {
              ...D
            }, {
              ..._
            }, {
              ...M
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
              ...c("Box Model")
            }],
            l = [{
              ...m("Text")
            }, {
              ...F
            }, {
              ...P
            }, {
              ...A
            }, {
              ...$
            }, {
              ...E
            }, {
              ...c("Text")
            }],
            s = [{
              ...m("Background..")
            }, ...i(a), ...o(a), ...r(a), {
              ...c("Background")
            }],
            u = [{
              ...m("Grid")
            }, {
              ...L("--grid-num-columns-mobile", "Grid Number of Columns (Mobile)")
            }, {
              ...L("--grid-num-columns-desktop", "Grid Number of Columns (Desktop)")
            }, {
              ...C
            }, {
              ...T
            }, {
              ...c("Grid")
            }],
            p = [{
              ...m("Image")
            }, {
              ...B
            }, {
              ...X
            }, {
              ...U
            }, {
              ...j
            }, {
              ...V
            }, {
              ...G
            }, {
              ...c("Image")
            }],
            q = [...n, ...l, ...s];
          return "grid" === a && q.push(...u), "image" !== a && "layeredImage" !== a || q.push(...p), "layeredImage" !== a && "parallaxOuterLayer" !== a && "parallaxInnerLayer" !== a || q.push(...t), "gridItem" === a && q.push({
            ...T
          }), q
        },
        R = e => {
          let {
            filter: a = null
          } = e;
          return {
            label: "CSS Variables",
            name: "style",
            description: "Override CSS Variables",
            component: "group",
            fields: [...q({
              filter: a
            })]
          }
        },
        z = e => {
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
            }, l({
              parent: a
            }), R({
              filter: t
            })]
          }
        },
        O = function() {
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
      var H = t(69);
      const Q = function() {
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
              uploadDir: H.uploadDir,
              parse: H.parse,
              previewSrc: H.previewSrc
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
            }, O({})]
          }
        },
        Y = e => {
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
        W = () => ({
          name: Le,
          label: "Content",
          component: "html"
        }),
        Z = [{
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
        K = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: Z,
          initialValues: Z[0]
        }),
        J = e => {
          let {
            templates: a = []
          } = e;
          return {
            label: "Content",
            description: "Add/remove/arrange/configure sections",
            name: Le,
            component: "blocks",
            templates: a
          }
        },
        ee = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        ae = e => {
          let {
            name: a,
            label: t = a
          } = e;
          return {
            name: a,
            label: t,
            component: "group",
            description: "(If responsive, only Mobile Source is needed)",
            fields: [{
              name: "mobile",
              label: "Mobile Source",
              component: "image",
              clearable: !0,
              uploadDir: H.uploadDir,
              parse: H.parse,
              previewSrc: H.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: H.uploadDir,
              parse: H.parse,
              previewSrc: H.previewSrc
            }]
          }
        },
        te = e => {
          let {
            game: a = null,
            label: t = "Image configuration"
          } = e;
          const n = [Ae({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Ae({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? (If blank, the badge will not be displayed)",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that is used as a line break for badge text (Default is a space)",
            component: "text"
          }, ae({
            name: "sources.en_us",
            label: "Upload global images"
          }), {
            name: "sources",
            label: "Upload local images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => ae({
              name: e
            })))
          }, Ae({
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
          }), Ae({
            name: "caption",
            label: "Caption",
            component: "html"
          })];
          return "rdo" !== a && "rdr2" !== a || n.push({
            name: "role",
            label: "Role",
            description: "Adds a role icon",
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
            label: t,
            component: "group",
            fields: n,
            defaultItem: () => Fe(ee),
            itemProps: e => Pe(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        ne = e => {
          let {
            game: a = null,
            filter: t = null
          } = e;
          const n = [Ae({
            label: "Title",
            name: "title",
            component: "text"
          }), te({
            game: a,
            label: "Image Sources"
          })];
          return "discounts" !== t && n.push(Ae({
            label: "Description",
            name: "description",
            component: "html"
          })), n.push(Ae({
            label: "Link",
            name: "to",
            component: "text"
          }), R({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...n, Y({
              filter: "grid"
            }), re({
              filter: t,
              fields: n,
              game: a
            })],
            defaultItem: () => Fe({
              image: Fe(ee)
            }),
            itemProps: e => Pe(e, {
              label: e?.[Ce]?.title ? `${e[Ce].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        le = e => {
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
            templates: [ne({
              filter: a,
              game: t
            })],
            defaultItem: () => Fe(),
            itemProps: e => Pe(e, {})
          }
        },
        ie = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => Fe({
            hero: !1
          })
        }),
        oe = e => {
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
            defaultItem: () => Fe(),
            itemProps: e => Pe(e, {
              label: `Media Query: ${e?.mediaQueryString??"New"}`
            })
          }
        },
        re = e => {
          let {
            fields: a = [],
            filter: t = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [oe({
              filter: t,
              fields: a
            })]
          }
        };
      var de = t(822),
        se = t(859),
        me = t(304),
        ce = t(592);
      const ue = e => {
          let {
            field: a,
            input: t,
            form: n
          } = e;
          const {
            name: l,
            label: i,
            description: o,
            fileLoaded: r
          } = a, [d, m] = (0, de.useState)("");
          return (0, s.jsxs)(me.Z, {
            name: l,
            label: i,
            description: o,
            children: [(0, s.jsx)(ce.Z, {
              onChange: e => {
                m(e)
              },
              name: t?.name,
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
        pe = e => {
          let {
            name: a,
            label: t,
            description: n,
            fileLoaded: l
          } = e;
          return {
            name: a,
            label: t,
            description: n,
            fileLoaded: l,
            component: ue,
            clearable: !0
          }
        };
      var be = t(556);
      const ge = e => {
          let {
            id: a,
            table: t,
            initialStatus: n = null,
            uploadSuccess: l = null,
            uploadError: i = null
          } = e;
          const [, o] = (0, de.useState)(n), [r] = (0, se.useMutation)(be.MemoqXmlUpload), {
            refetch: d
          } = (0, se.useQuery)(be.MemoqXmlDownload, {
            skip: !0,
            variables: {
              id: a,
              table: t
            }
          });
          let m = [{
            name: "download",
            label: "Download XML",
            component: () => (0, s.jsx)(me.Z, {
              name: "download",
              label: "Download XML",
              description: "Download XML and upload to MemoQ.",
              children: (0, s.jsx)("button", {
                onClick: () => (async () => {
                  const e = await d(),
                    t = `${a}-translations.xml`,
                    n = document.createElement("a");
                  o(e.data.memoqXmlDownload.translation_status), n.setAttribute("href", `data:text/xml;charset=utf-8,${encodeURIComponent(e.data.memoqXmlDownload.xml)}`), n.setAttribute("_target", "blank"), n.setAttribute("download", t), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
                })(),
                type: "button",
                children: "Download XML"
              })
            })
          }, pe({
            name: "upload",
            label: "Upload XML",
            description: "Upload translated XML file from MemoQ.",
            fileLoaded: async e => {
              try {
                const n = await r({
                  variables: {
                    table: t,
                    id: a,
                    xml: e
                  }
                });
                n?.data?.memoqXmlUpload?.translation_status && (o(n.data.memoqXmlUpload.translation_status), "function" == typeof l && l())
              } catch (e) {
                "function" == typeof i && i(e)
              }
            }
          })];
          return a && t || (m = []), {
            name: "__memoq",
            label: "MemoQ Integration",
            description: "Use this section to download and upload MemoQ-friendly XML files.",
            component: "group",
            fields: m
          }
        },
        ve = function() {
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
        fe = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        he = function() {
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
            itemProps: e => Pe(e, {
              label: `Link for [${e?.platform??""}]`
            }),
            defaultItem: () => Fe()
          }
        },
        Se = () => [{
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
        }, we({
          name: "primary_tags",
          label: "Game",
          context: 1
        }), we({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        ke = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...Se(), {
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
          }, xe()]
        }),
        xe = () => ({
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
              uploadDir: H.uploadDir,
              previewSrc: H.previewSrc,
              parse: H.parse
            }, {
              name: "newswire-block-square",
              label: "Square Source",
              component: "image",
              clearable: !0,
              uploadDir: H.uploadDir,
              previewSrc: H.previewSrc,
              parse: H.parse
            }]
          })))
        });
      var ye = t(496);
      const we = e => {
          let {
            label: a = "Tags",
            name: t = "tags",
            context: n = null
          } = e;
          return {
            label: a,
            name: t,
            component: e => {
              let {
                field: a,
                input: t,
                meta: l
              } = e;
              const {
                data: i
              } = (0, se.useQuery)(ye.TagList, {
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
              return (0, s.jsx)(me.Z, {
                field: a,
                input: t,
                meta: l,
                children: (0, s.jsx)("select", {
                  ...t,
                  children: o.map((e => (0, s.jsx)("option", {
                    value: e.id,
                    children: e.name
                  }, e.id)))
                })
              })
            }
          }
        },
        Ne = () => Ae({
          label: "Text",
          name: Le,
          component: "html"
        }),
        De = () => ({
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
          }]
        }),
        _e = () => ({
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
        Me = e => {
          let {
            name: a,
            label: t = a
          } = e;
          return {
            name: a,
            label: t,
            component: "group",
            description: "(If responsive, only Mobile Source is needed)",
            fields: [{
              name: "mobile",
              label: "Mobile Source",
              component: "image",
              clearable: !0,
              uploadDir: H.uploadDir,
              parse: H.parse,
              previewSrc: H.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: H.uploadDir,
              parse: H.parse,
              previewSrc: H.previewSrc
            }]
          }
        },
        Ie = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        Te = e => {
          let {
            name: a = "image",
            label: t = "Image configuration"
          } = e;
          return {
            name: a,
            label: t,
            component: "group",
            fields: [Ae({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), Me({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: Ie.map((e => Me({
                name: e
              })))
            }, Ae({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => Fe(),
            itemProps: e => Pe(e, {
              label: `Image [${a}]`
            })
          }
        },
        Le = "content",
        Ce = "_memoq",
        Fe = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,n.Z)()}`
          }
        },
        Pe = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        Ae = e => ({
          ...e,
          name: `${Ce}.${e.name}`
        })
    },
    304: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => o
      });
      var n = t(822),
        l = t(751);
      var i = t(322);
      const o = e => {
        let {
          style: a,
          width: t,
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
        const v = () => r ? (0, i.jsx)(l.e, {
          defaultSize: {
            width: t || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, n.cloneElement)(g, ...s)
        }) : g;
        return (0, i.jsxs)("div", {
          className: "f3ec8d89954175f42137 FieldWrapper-sc-custom jpQZXK",
          style: a,
          children: [(0, i.jsxs)("label", {
            className: "dc10ff67c241feacb785 FieldLabel-sc-custom dzLxXV",
            htmlFor: c ?? d?.name,
            children: [u ?? d?.label, (0, i.jsx)("span", {
              className: "f2aa3128a2d6ebae9d50 FieldDescription-sc-custom cyKzVM",
              children: p ?? d?.description
            })]
          }), (0, i.jsx)(v, {}), (b || m?.error) && (0, i.jsx)("div", {
            className: "FieldError_sc_custom",
            children: b ?? m?.error
          })]
        })
      }
    },
    592: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => l
      });
      var n = t(322);
      const l = e => {
        let {
          value: a,
          onChange: t = (() => {}),
          multi: l = !1,
          ...i
        } = e;
        const o = e => {
          let {
            value: a,
            multi: t
          } = e;
          return t ? (0, n.jsxs)("div", {
            children: ["Selected files: ", a.map((e => e.name)).join(", ")]
          }) : (0, n.jsxs)("div", {
            children: ["Selected file: ", a.name]
          })
        };
        return (0, n.jsx)("label", {
          children: a && "" !== a ? (0, n.jsx)(o, {
            value: a,
            multi: l
          }) : (0, n.jsx)("input", {
            ...i,
            type: "file",
            onChange: e => {
              t(l ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }
    },
    887: (e, a, t) => {
      "use strict";
      t.d(a, {
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
      const d = function(e, a, t) {
        if (n.randomUUID && !a && !e) return n.randomUUID();
        const l = (e = e || {}).random || (e.rng || o)();
        if (l[6] = 15 & l[6] | 64, l[8] = 63 & l[8] | 128, a) {
          t = t || 0;
          for (let e = 0; e < 16; ++e) a[t + e] = l[e];
          return a
        }
        return function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (r[e[a + 0]] + r[e[a + 1]] + r[e[a + 2]] + r[e[a + 3]] + "-" + r[e[a + 4]] + r[e[a + 5]] + "-" + r[e[a + 6]] + r[e[a + 7]] + "-" + r[e[a + 8]] + r[e[a + 9]] + "-" + r[e[a + 10]] + r[e[a + 11]] + r[e[a + 12]] + r[e[a + 13]] + r[e[a + 14]] + r[e[a + 15]]).toLowerCase()
        }(l)
      }
    },
    556: e => {
      var a = {
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
        body: "query MemoqXmlDownload($table: String!, $id: String!) {\n    memoqXmlDownload(table: $table, id: $id) {\n        xml\n        translation_status\n    }\n}\n\nmutation MemoqXmlUpload($table: String!, $id: String!, $xml: String!) {\n    memoqXmlUpload(table: $table, id: $id, xml: $xml) {\n        translation_status\n    }\n}\n",
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

      function i(e, a) {
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
          var d = r;
          r = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var n = l(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.MemoqXmlDownload = i(a, "MemoqXmlDownload"), e.exports.MemoqXmlUpload = i(a, "MemoqXmlUpload")
    },
    496: e => {
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
          var d = r;
          r = new Set, d.forEach((function(e) {
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
    }
  }
]);