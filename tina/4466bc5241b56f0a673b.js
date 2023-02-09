(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [821], {
    501: (e, a, t) => {
      "use strict";
      t.d(a, {
        I: () => d,
        d: () => r
      });
      var l = t(822),
        n = t(563);
      const i = (0, l.createContext)(),
        {
          Provider: o
        } = i,
        r = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, n.jsx)(o, {
            value: t,
            children: a
          })
        },
        d = () => (0, l.useContext)(i)
    },
    236: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        parse: () => s,
        previewSrc: () => m,
        uploadDir: () => c,
        useGetCdnSource: () => d,
        useImageParser: () => r
      });
      var l = t(822),
        n = t(929),
        i = t(501);
      Math.min(window.screen.width, 1920);
      const o = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === t ? null : (a.endsWith("akamaized.net"), e)
        },
        r = e => {
          var a, t, r, d;
          let {
            alt: s = null,
            mobile: m = null,
            desktop: c = null,
            ariaLabel: u = null,
            sources: p = null,
            prod: b = null
          } = e;
          const g = (0, n.useLocale)(),
            {
              meta: v = {}
            } = (0, i.I)() ?? {},
            [f, h] = (0, l.useState)(b ?? (null == v ? void 0 : v.cdn) ?? (null == v ? void 0 : v.prod) ?? !0);
          (0, l.useEffect)((() => {
            h(b ?? (null == v ? void 0 : v.cdn) ?? (null == v ? void 0 : v.prod) ?? !0)
          }), [b, v]);
          const S = (0, l.useCallback)((e => {
            const a = null !== p,
              t = "string" == typeof e ? e : "object" == typeof e ? (null == e ? void 0 : e.previewSrc) ?? null : null;
            if (null === t) return null;
            if (t.startsWith("http")) return o(t);
            const l = `${a?(0,n.getCdnPrefix)(f):""}${t}`;
            return o(l)
          }), [f, p]);
          return {
            alt: s,
            ariaLabel: u,
            src: {
              mobile: S((null == p || null === (a = p[g]) || void 0 === a ? void 0 : a.mobile) ?? (null == p || null === (t = p.en_us) || void 0 === t ? void 0 : t.mobile) ?? m),
              desktop: S((null == p || null === (r = p[g]) || void 0 === r ? void 0 : r.desktop) ?? (null == p || null === (d = p.en_us) || void 0 === d ? void 0 : d.desktop) ?? c)
            }
          }
        },
        d = e => {
          const {
            meta: a = {}
          } = (0, i.I)(), [t, r] = (0, l.useState)((null == a ? void 0 : a.cdn) ?? (null == a ? void 0 : a.prod) ?? !1);
          return (0, l.useEffect)((() => {
            r((null == a ? void 0 : a.cdn) ?? (null == a ? void 0 : a.prod) ?? !1)
          }), [a]), null === e ? null : e.startsWith("http") ? o(e) : o(`${(0,n.getCdnPrefix)(t)}${e}`)
        },
        s = e => e.full_src,
        m = e => `${(null==e?void 0:e.previewSrc)??e}`,
        c = e => e.meta.uploads_directory
    },
    821: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AriaLabelField: () => n,
        AttributesFields: () => z,
        BorderField: () => r,
        BorderImageField: () => H,
        ClassNamesField: () => Q,
        ContentField: () => Y,
        DisplayClassField: () => R,
        FormEntryField: () => K,
        GridContextField: () => Z,
        ImageField: () => ee,
        ItemsField: () => te,
        LeadAssetToggle: () => le,
        MediaQueryField: () => ie,
        MemoQField: () => pe,
        MetaField: () => be,
        NameField: () => ge,
        PlatformsAndLinksField: () => ve,
        PostEntryFields: () => fe,
        PostMetaField: () => he,
        PreviewImagesField: () => Se,
        StyleField: () => q,
        TINA_MEMOQ_PREFIX: () => Te,
        TINA_PARSER_KEY: () => Ie,
        TagsField: () => xe,
        TextField: () => ye,
        ThemeField: () => we,
        UploadsField: () => Ne,
        XMLField: () => ce,
        _defaultImageValues: () => J,
        defaultItemUnique: () => Le,
        itemPropsWithKey: () => Ce,
        localizedImageField: () => Me,
        translatedField: () => Fe
      });
      var l = t(637);
      const n = e => {
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
            name: null != e && e.parent ? `${null==e?void 0:e.parent}.backgroundColor` : "backgroundColor",
            label: "Background Color",
            component: "text"
          }, {
            name: null != e && e.parent ? `${null==e?void 0:e.parent}.gradient` : "gradient",
            label: "Background Gradient",
            component: "group",
            fields: [{
              name: null != e && e.parent ? `${null==e?void 0:e.parent}.gradientStart` : "gradientStart",
              label: "Start Color",
              component: "color"
            }, {
              name: null != e && e.parent ? `${null==e?void 0:e.parent}.gradientEnd` : "gradientEnd",
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
            name: null != e && e.parent ? `${null==e?void 0:e.parent}.backgroundImage` : "backgroundImage",
            label: "Background Image",
            component: "text",
            initialValues: "url()",
            format: (e, a, t) => e ? -1 !== e.indexOf("url(") ? `url(${e.split("url(")[1].split(")")[0]})` : `url(${e})` : "url()"
          }, {
            name: null != e && e.parent ? `${null==e?void 0:e.parent}.backgroundSize` : "backgroundSize",
            label: "Background Size",
            component: "select",
            options: ["", "cover", "contain", "revert", "auto"]
          }, {
            name: null != e && e.parent ? `${null==e?void 0:e.parent}.backgroundPosition` : "backgroundPosition",
            label: "Background Position",
            component: "select",
            options: ["", "center", "left", "right", "top", "bottom"]
          }]
        },
        r = function() {
          return {
            name: "border",
            label: "Border",
            description: "Entire CSS value as a string.",
            component: "text"
          }
        };
      var d = t(563);
      const s = function() {
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
        c = [{
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
        p = {
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
        f = {
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
        x = {
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
          }, ...c, ...u]
        },
        y = {
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
          }, ...c, ...u]
        },
        w = {
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
          }, ...c, ...u]
        },
        N = {
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
          }, ...c, ...u]
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
          }, ...c]
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
          }, ...c]
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
          }, ...c]
        },
        I = {
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
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "--grid-num-columns",
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Grid Number of Columns";
          return {
            label: a,
            name: e,
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
        C = {
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
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        P = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        A = {
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
        $ = {
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
        B = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        U = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        j = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        V = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        G = e => {
          let {
            filter: a = null
          } = e;
          const t = [{
              ...s("Position")
            }, {
              ...p
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
              ...m("Position")
            }],
            l = [{
              ...s("Box Model")
            }, {
              ...S
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
              ...r({})
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
              ...m("Box Model")
            }],
            n = [{
              ...s("Text")
            }, {
              ...C
            }, {
              ...F
            }, {
              ...P
            }, {
              ...A
            }, {
              ...E
            }, {
              ...m("Text")
            }],
            d = [{
              ...s("Background")
            }, ...i(a), ...o(a), {
              ...m("Background")
            }],
            c = [{
              ...s("Grid")
            }, {
              ...T("--grid-num-columns-mobile", "Grid Number of Columns (Mobile)")
            }, {
              ...T("--grid-num-columns-desktop", "Grid Number of Columns (Desktop)")
            }, {
              ...L
            }, {
              ...I
            }, {
              ...m("Grid")
            }],
            u = [{
              ...s("Image")
            }, {
              ...$
            }, {
              ...X
            }, {
              ...B
            }, {
              ...U
            }, {
              ...j
            }, {
              ...V
            }, {
              ...m("Image")
            }];
          let G = [...l, ...n, ...d];
          return "grid" === a && G.push(...c), "image" !== a && "layeredImage" !== a || G.push(...u), "layeredImage" !== a && "parallaxOuterLayer" !== a && "parallaxInnerLayer" !== a || G.push(...t), "gridItem" === a && G.push({
            ...I
          }), G
        },
        q = e => {
          let {
            filter: a = null
          } = e;
          return {
            label: "CSS Variables",
            name: "style",
            description: "Override CSS Variables",
            component: "group",
            fields: [...G({
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
            }, n({
              parent: a
            }), q({
              filter: t
            })]
          }
        },
        R = function() {
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
      var O = t(236);
      const H = function() {
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
              uploadDir: O.uploadDir,
              parse: O.parse,
              previewSrc: O.previewSrc
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
            }, R({})]
          }
        },
        Q = e => {
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
        Y = () => ({
          name: Ie,
          label: "Content",
          component: "html"
        }),
        W = [{
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
        Z = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: W,
          initialValues: W[0]
        }),
        K = e => {
          let {
            templates: a = []
          } = e;
          return {
            label: "Content",
            description: "Add/remove/arrange/configure sections",
            name: Ie,
            component: "blocks",
            templates: a
          }
        },
        J = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        ee = e => {
          let {
            game: a = null,
            label: t = "Image configuration"
          } = e;
          const l = e => {
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
                  uploadDir: O.uploadDir,
                  parse: O.parse,
                  previewSrc: O.previewSrc
                }, {
                  name: "desktop",
                  label: "Desktop Source",
                  component: "image",
                  clearable: !0,
                  uploadDir: O.uploadDir,
                  parse: O.parse,
                  previewSrc: O.previewSrc
                }]
              }
            },
            n = [Fe({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), Fe({
              label: "Badge Text",
              name: "badge",
              description: "What text should appear inside the badge? (If blank, the badge will not be displayed)",
              component: "text"
            }), {
              label: "Badge Text Splitter",
              name: "splitter",
              description: "Character that is used as a line break for badge text (Default is a space)",
              component: "text"
            }, l({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => l({
                name: e
              })))
            }, Fe({
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
            }), Fe({
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
          }), {
            name: "image",
            label: t,
            component: "group",
            fields: n,
            defaultItem: () => Le(J),
            itemProps: e => Ce(e, {
              label: null != e && e.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        ae = e => {
          let {
            game: a = null,
            filter: t = null
          } = e;
          const l = [Fe({
            label: "Title",
            name: "title",
            component: "text"
          }), ee({
            game: a,
            label: "Image Sources"
          })];
          return "discounts" !== t && l.push(Fe({
            label: "Description",
            name: "description",
            component: "html"
          })), l.push(Fe({
            label: "Link",
            name: "to",
            component: "text"
          }), q({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...l, Q({
              filter: "grid"
            }), ie({
              filter: t,
              fields: l,
              game: a
            })],
            defaultItem: () => Le({
              image: Le(J)
            }),
            itemProps: e => {
              var a;
              return Ce(e, {
                label: null != e && null !== (a = e[Te]) && void 0 !== a && a.title ? `${e[Te].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
              })
            }
          }
        },
        te = e => {
          let {
            filter: a = null,
            game: t = null,
            label: l = null,
            name: n = "items"
          } = e;
          return {
            name: n,
            label: l ?? `Edit ${n}`,
            component: "blocks",
            templates: [ae({
              filter: a,
              game: t
            })],
            defaultItem: () => Le(),
            itemProps: e => Ce(e, {})
          }
        },
        le = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => Le({
            hero: !1
          })
        }),
        ne = e => {
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
            defaultItem: () => Le(),
            itemProps: e => Ce(e, {
              label: `Media Query: ${(null==e?void 0:e.mediaQueryString)??"New"}`
            })
          }
        },
        ie = e => {
          let {
            fields: a = [],
            filter: t = null
          } = e;
          return {
            label: "Media Queries",
            name: "mediaQueryList",
            description: "Override styles based on screen size",
            component: "blocks",
            templates: [ne({
              filter: t,
              fields: a
            })]
          }
        };
      var oe = t(822),
        re = t(859),
        de = t(245),
        se = t(575);
      const me = e => {
          let {
            field: a,
            input: t,
            form: l
          } = e;
          const {
            name: n,
            label: i,
            description: o,
            fileLoaded: r
          } = a, [s, m] = (0, oe.useState)("");
          return (0, d.jsxs)(de.Z, {
            name: n,
            label: i,
            description: o,
            children: [(0, d.jsx)(se.Z, {
              onChange: e => {
                m(e)
              },
              name: null == t ? void 0 : t.name,
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
        ce = e => {
          let {
            name: a,
            label: t,
            description: l,
            fileLoaded: n
          } = e;
          return {
            name: a,
            label: t,
            description: l,
            fileLoaded: n,
            component: me,
            clearable: !0
          }
        };
      var ue = t(556);
      const pe = e => {
          let {
            id: a,
            table: t,
            initialStatus: l = null,
            pingBearer: n,
            uploadSuccess: i = null,
            uploadError: o = null
          } = e;
          const [, r] = (0, oe.useState)(l), [s] = (0, re.useMutation)(ue.MemoqXmlUpload), {
            refetch: m
          } = (0, re.useQuery)(ue.MemoqXmlDownload, {
            skip: !0,
            variables: {
              id: a,
              table: t
            }
          });
          let c = [{
            name: "download",
            label: "Download XML",
            component: () => (0, d.jsx)(de.Z, {
              name: "download",
              label: "Download XML",
              description: "Download XML and upload to MemoQ.",
              children: (0, d.jsx)("button", {
                onClick: () => (async () => {
                  await n();
                  const e = await m(),
                    t = `${a}-translations.xml`,
                    l = document.createElement("a");
                  r(e.data.memoqXmlDownload.translation_status), l.setAttribute("href", `data:text/xml;charset=utf-8,${encodeURIComponent(e.data.memoqXmlDownload.xml)}`), l.setAttribute("_target", "blank"), l.setAttribute("download", t), l.style.display = "none", document.body.appendChild(l), l.click(), document.body.removeChild(l)
                })(),
                children: "Download XML"
              })
            })
          }, ce({
            name: "upload",
            label: "Upload XML",
            description: "Upload translated XML file from MemoQ.",
            fileLoaded: async e => {
              try {
                var l, d;
                await n();
                const o = await s({
                  variables: {
                    table: t,
                    id: a,
                    xml: e
                  }
                });
                null != o && null !== (l = o.data) && void 0 !== l && null !== (d = l.memoqXmlUpload) && void 0 !== d && d.translation_status && (r(o.data.memoqXmlUpload.translation_status), "function" == typeof i && i())
              } catch (e) {
                "function" == typeof o && o(e)
              }
            }
          })];
          return a && t || (c = []), {
            name: "__memoq",
            label: "MemoQ Integration",
            description: "Use this section to download and upload MemoQ-friendly XML files.",
            component: "group",
            fields: c
          }
        },
        be = function() {
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
        ge = () => ({
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
            ...e,
            itemProps: e => Ce(e, {
              label: `Link for [${(null==e?void 0:e.platform)??""}]`
            }),
            defaultItem: () => Le()
          }
        },
        fe = () => [{
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
        }, xe({
          name: "primary_tags",
          label: "Game",
          context: 1
        }), xe({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        he = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...fe(), {
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
          }, Se()]
        }),
        Se = () => ({
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
              uploadDir: O.uploadDir,
              previewSrc: O.previewSrc,
              parse: O.parse
            }, {
              name: "newswire-block-square",
              label: "Square Source",
              component: "image",
              clearable: !0,
              uploadDir: O.uploadDir,
              previewSrc: O.previewSrc,
              parse: O.parse
            }]
          })))
        });
      var ke = t(496);
      const xe = e => {
          let {
            label: a = "Tags",
            name: t = "tags",
            context: l = null
          } = e;
          return {
            label: a,
            name: t,
            component: e => {
              let {
                field: a,
                input: t,
                meta: n
              } = e;
              const {
                data: i
              } = (0, re.useQuery)(ke.TagList, {
                variables: {
                  locale: "en_us",
                  context: l
                }
              });
              if (!i || !((null == i ? void 0 : i.tagList) ?? []).length) return null;
              const o = [{
                id: "",
                name: "-- Select Tag --"
              }, ...i.tagList];
              return (0, d.jsx)(de.Z, {
                field: a,
                input: t,
                meta: n,
                children: (0, d.jsx)("select", {
                  ...t,
                  children: o.map((e => (0, d.jsx)("option", {
                    value: e.id,
                    children: e.name
                  }, e.id)))
                })
              })
            }
          }
        },
        ye = () => Fe({
          label: "Text",
          name: Ie,
          component: "html"
        }),
        we = () => ({
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
        Ne = () => ({
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
        De = e => {
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
              uploadDir: O.uploadDir,
              parse: O.parse,
              previewSrc: O.previewSrc
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: O.uploadDir,
              parse: O.parse,
              previewSrc: O.previewSrc
            }]
          }
        },
        _e = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        Me = e => {
          let {
            name: a = "image",
            label: t = "Image configuration"
          } = e;
          return {
            name: a,
            label: t,
            component: "group",
            fields: [Fe({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), De({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: _e.map((e => De({
                name: e
              })))
            }, Fe({
              name: "caption",
              label: "Caption",
              component: "html"
            })],
            defaultItem: () => Le(),
            itemProps: e => Ce(e, {
              label: `Image [${a}]`
            })
          }
        },
        Ie = "content",
        Te = "_memoq",
        Le = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            ...e,
            key: `key_${(0,l.Z)()}`
          }
        },
        Ce = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            ...a,
            key: e.key
          }
        },
        Fe = e => ({
          ...e,
          name: `${Te}.${e.name}`
        })
    },
    245: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => o
      });
      var l = t(822),
        n = t(811);
      var i = t(563);
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
        const v = () => r ? (0, i.jsx)(n.e, {
          defaultSize: {
            width: t || "100%",
            height: o || "500px"
          },
          style: {
            paddingBottom: "10px"
          },
          children: (0, l.cloneElement)(g, ...s)
        }) : g;
        return (0, i.jsxs)("div", {
          className: "f3ec8d89954175f42137 FieldWrapper-sc-custom jpQZXK",
          style: a,
          children: [(0, i.jsxs)("label", {
            className: "dc10ff67c241feacb785 FieldLabel-sc-custom dzLxXV",
            htmlFor: c ?? (null == d ? void 0 : d.name),
            children: [u ?? (null == d ? void 0 : d.label), (0, i.jsx)("span", {
              className: "f2aa3128a2d6ebae9d50 FieldDescription-sc-custom cyKzVM",
              children: p ?? (null == d ? void 0 : d.description)
            })]
          }), (0, i.jsx)(v, {}), (b || (null == m ? void 0 : m.error)) && (0, i.jsx)("div", {
            className: "FieldError_sc_custom",
            children: b ?? (null == m ? void 0 : m.error)
          })]
        })
      }
    },
    575: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => n
      });
      var l = t(563);
      const n = e => {
        let {
          value: a,
          onChange: t = (() => {}),
          multi: n = !1,
          ...i
        } = e;
        const o = e => {
          let {
            value: a,
            multi: t
          } = e;
          return t ? (0, l.jsxs)("div", {
            children: ["Selected files: ", a.map((e => e.name)).join(", ")]
          }) : (0, l.jsxs)("div", {
            children: ["Selected file: ", a.name]
          })
        };
        return (0, l.jsx)("label", {
          children: a && "" !== a ? (0, l.jsx)(o, {
            value: a,
            multi: n
          }) : (0, l.jsx)("input", {
            ...i,
            type: "file",
            onChange: e => {
              t(n ? [...e.target.files] : e.target.files[0])
            }
          })
        })
      }
    },
    637: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => d
      });
      const l = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let n;
      const i = new Uint8Array(16);

      function o() {
        if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !n)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return n(i)
      }
      const r = [];
      for (let e = 0; e < 256; ++e) r.push((e + 256).toString(16).slice(1));
      const d = function(e, a, t) {
        if (l.randomUUID && !a && !e) return l.randomUUID();
        const n = (e = e || {}).random || (e.rng || o)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, a) {
          t = t || 0;
          for (let e = 0; e < 16; ++e) a[t + e] = n[e];
          return a
        }
        return function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (r[e[a + 0]] + r[e[a + 1]] + r[e[a + 2]] + r[e[a + 3]] + "-" + r[e[a + 4]] + r[e[a + 5]] + "-" + r[e[a + 6]] + r[e[a + 7]] + "-" + r[e[a + 8]] + r[e[a + 9]] + "-" + r[e[a + 10]] + r[e[a + 11]] + r[e[a + 12]] + r[e[a + 13]] + r[e[a + 14]] + r[e[a + 15]]).toLowerCase()
        }(n)
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
          var l = e.type;
          "NamedType" === l.kind && a.add(l.name.value)
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
      var l = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var l = e.definitions[t];
          if (l.name && l.name.value == a) return l
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = l[a] || new Set,
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
        return o.forEach((function(a) {
          var l = n(e, a);
          l && t.definitions.push(l)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), l[e.name.value] = a
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
          var l = e.type;
          "NamedType" === l.kind && a.add(l.name.value)
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
      var l = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var l = e.definitions[t];
          if (l.name && l.name.value == a) return l
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), l[e.name.value] = a
        }
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = l.TagList || new Set,
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
        return o.forEach((function(a) {
          var l = n(e, a);
          l && t.definitions.push(l)
        })), t
      }(a, "TagList")
    }
  }
]);