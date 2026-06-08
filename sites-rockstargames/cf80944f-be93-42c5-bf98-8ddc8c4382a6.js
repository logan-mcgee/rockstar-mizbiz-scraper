try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cf80944f-be93-42c5-bf98-8ddc8c4382a6", e._sentryDebugIdIdentifier = "sentry-dbid-cf80944f-be93-42c5-bf98-8ddc8c4382a6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3109], {
    84620(e) {
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
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
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
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), l[e.name.value] = t
        }
      }), e.exports = t, e.exports.TagList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = l[t] || new Set,
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
        return i.forEach(function(t) {
          var l = n(e, t);
          l && a.definitions.push(l)
        }), a
      }(t, "TagList")
    },
    54563(e, t, a) {
      "use strict";
      a.d(t, {
        i: () => s,
        o: () => r
      });
      var l = a(39793),
        n = a(93082);
      const o = (0, a(13331).setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = o,
        r = ({
          children: e,
          payload: t
        }) => (0, l.jsx)(i, {
          value: t,
          children: e
        }),
        s = () => (0, n.useContext)(o)
    },
    25993(e, t, a) {
      "use strict";
      a.d(t, {
        C1: () => s,
        S1: () => r,
        XC: () => p,
        jS: () => m,
        qg: () => d,
        z0: () => c
      });
      var l = a(93082),
        n = a(13331),
        o = a(54563);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        r = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: a = {},
          desktop: r = null,
          imageDesktopStyle: s = {},
          ariaLabel: m = null,
          sources: d = null,
          prod: c = null
        }) => {
          const p = (0, n.useLocale)(),
            {
              meta: u = {}
            } = (0, o.i)() ?? {},
            [b, g] = (0, l.useState)(c ?? u?.cdn ?? u?.prod ?? !0);
          (0, l.useEffect)(() => {
            g(c ?? u?.cdn ?? u?.prod ?? !0)
          }, [c, u]);
          const h = (0, l.useCallback)(e => {
            const t = null !== d,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return i(a);
            const l = `${t?(0,n.getCdnPrefix)(b):""}${a}`;
            return i(l)
          }, [b, d]);
          return {
            alt: e,
            ariaLabel: m,
            src: {
              mobile: h(d?.[p]?.mobile ?? d?.en_us?.mobile ?? t),
              imageMobileStyle: d?.[p]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? a,
              imageDesktopStyle: d?.[p]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? s,
              desktop: h(d?.[p]?.desktop ?? d?.en_us?.desktop ?? r)
            }
          }
        },
        s = e => {
          const t = (0, o.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [r, s] = (0, l.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, l.useEffect)(() => {
            s(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(r)}${e}`) : null
        },
        m = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, l.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, l.useCallback)((e, t = {}) => {
            const l = t?.prod ?? a;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,n.getCdnPrefix)(l)}${e}`) : null
          }, [a])
        },
        d = e => e.full_src,
        c = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    13109(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        AriaLabelField: () => y,
        AttributesFields: () => Ie,
        BorderField: () => T,
        BorderImageField: () => Ce,
        CTAsField: () => Ne,
        ClassNamesField: () => Pe,
        ComprehensiveImageFieldGroup: () => et,
        ContentField: () => Me,
        DisplayClassField: () => Te,
        Divider: () => $e,
        FieldWrapper: () => Xe,
        FileInput: () => Ue,
        FormEntryField: () => Be,
        GridContextField: () => Fe,
        Group: () => Ot.Group,
        GroupField: () => Ot.GroupField,
        GtmField: () => Ae,
        HiddenInput: () => We,
        IdField: () => Ge,
        ImageField: () => ze,
        ImpressionTrackingField: () => tt,
        InViewTracker: () => Bt,
        ItemsField: () => lt,
        LeadAssetToggle: () => nt,
        LocalizedImageGroup: () => Ye,
        LocalizedResponsiveImageGroup: () => Ke,
        MediaQueryField: () => it,
        MetaField: () => rt,
        NameField: () => st,
        PlatformsAndLinksField: () => mt,
        PostEntryFields: () => dt,
        PostMetaField: () => ct,
        PreviewImagesField: () => pt,
        ResponsiveImageGroup: () => Je,
        ScrollmationField: () => ut,
        SimpleImageField: () => It,
        SingleImageSource: () => Ve,
        StyleField: () => we,
        TINA_MEMOQ_PREFIX: () => v,
        TINA_PARSER_KEY: () => S,
        TagsField: () => gt,
        TextField: () => Ot.TextField,
        ThemeField: () => ht,
        TinaLabel: () => qe,
        TinaParser: () => At,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => Et,
        TranslationKey: () => Le,
        UploadsField: () => ft,
        XMLField: () => St,
        _defaultImageValues: () => x,
        defaultItemUnique: () => Tt,
        defaultPricingOptionsUnique: () => _t,
        itemPropsWithKey: () => Ct,
        localizedImageField: () => kt,
        recursiveNestedTemplates: () => jt,
        translatedField: () => Pt,
        useGenerateCdnSource: () => _e.jS,
        useGetCdnSource: () => _e.C1,
        useImageParser: () => _e.S1,
        usePrunedTinaKeys: () => b,
        useTinaComponents: () => c,
        useTinaPayload: () => p.i,
        useTranslations: () => Mt
      });
      var l = a(39793),
        n = a(93082),
        o = a(2631),
        i = a.n(o);
      var r = a(13331);
      const s = (0, r.setContextItem)({
          context: (0, n.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: m
        } = s,
        d = ({
          children: e,
          components: t
        }) => (0, l.jsx)(m, {
          value: t,
          children: e
        }),
        c = () => (0, n.useContext)(s);
      var p = a(54563);
      const u = (e, t) => Array.isArray(e) ? e.map(e => u(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((a, l) => (l !== t && (a[l] = u(e[l], t)), a), {}) : e,
        b = e => (0, n.useMemo)(() => u(e, "key"), [e]);
      var g = a(97773),
        h = a.n(g),
        f = a(39279);
      const v = "_memoq",
        S = "content",
        x = {
          alt: "Images Need Alt Text",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        y = ({
          parent: e = null
        }) => ({
          label: "Aria Label",
          name: e ? `${e}.ariaLabel` : "ariaLabel",
          component: "text",
          description: "Label text that is used for screen readers"
        }),
        k = (e = {
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
        w = (e = {
          parent: "",
          post: null,
          filter: null
        }) => {
          const t = {
            name: "backgroundImage",
            label: "Background Image",
            component: "text",
            initialValues: "url()",
            format: e => e ? -1 !== e.indexOf("url(") ? `url(${e.split("url(")[1].split(")")[0]})` : `url(${e})` : "url()"
          };
          let a;
          return a = "grid" === e.filter ? [t, {
            name: "--grid-background-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "--grid-background-position",
            label: "Background Position",
            component: "text"
          }] : [t, {
            name: "backgroundSize",
            label: "Background Size",
            component: "text"
          }, {
            name: "backgroundPosition",
            label: "Background Position",
            component: "text"
          }], a
        },
        I = (e = {
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
        T = (e = {}) => ({
          name: "border",
          label: "Border",
          description: "Entire CSS value as a string.",
          component: "text"
        }),
        _ = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, l.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }),
        C = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, l.jsx)("hr", {})
        }),
        P = [{
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
        M = [{
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
        L = {
          label: "Top",
          name: "top",
          description: "Distance from top for LAYERS (recommended to use %)",
          component: "text"
        },
        N = {
          label: "Left",
          name: "left",
          description: "Distance from left for LAYERS (recommended to use %)",
          component: "text"
        },
        B = {
          label: "Right",
          name: "right",
          description: "Distance from right for LAYERS (recommended to use %)",
          component: "text"
        },
        D = {
          label: "Bottom",
          name: "bottom",
          description: "Distance from bottom for LAYERS (recommended to use %)",
          component: "text"
        },
        F = {
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
        G = {
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
        j = {
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
        E = {
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
        O = {
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
          }, ...P, ...M]
        },
        z = {
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
          }, ...P, ...M]
        },
        R = {
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
          }, ...P, ...M]
        },
        $ = {
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
          }, ...P, ...M]
        },
        H = {
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
          }, ...P]
        },
        X = {
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
          }, ...P]
        },
        U = {
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
          }, ...P]
        },
        W = {
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
        q = (e = "--grid-position", t = "Grid Position") => ({
          label: t,
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
        Q = {
          label: "Grid Gap",
          name: "--grid-gap-dynamic",
          description: "Set the grid-gap",
          component: "select",
          options: [{
            value: "",
            label: "-- Select Grid Gap --"
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
          }]
        },
        V = {
          label: "Grid Align Content",
          name: "--grid-align-content",
          description: "Set the align-content property",
          component: "text"
        },
        J = {
          label: "Grid Align items",
          name: "--grid-align-items",
          description: "Set the align-items property",
          component: "text"
        },
        Y = {
          label: "Grid Align Self",
          name: "--grid-align-self",
          description: "Set the align-self property",
          component: "text"
        },
        K = {
          label: "Grid Justify Content",
          name: "--grid-justify-content",
          description: "Set the justify-content property",
          component: "text"
        },
        Z = {
          label: "Grid Justify Items",
          name: "--grid-justify-items",
          description: "Set the justify-items property",
          component: "text"
        },
        ee = {
          label: "Grid Justify Self",
          name: "--grid-justify-self",
          description: "Set the justify-self property",
          component: "text"
        },
        te = {
          label: "--font-family-h",
          name: "--font-family-h",
          description: "Set the --font-family-h",
          component: "text"
        },
        ae = {
          label: "--font-weight-h",
          name: "--font-weight-h",
          description: "Set the --font-weight-h",
          component: "text"
        },
        le = {
          label: "--letter-spacing-h",
          name: "--letter-spacing-h",
          description: "Set the --letter-spacing-h",
          component: "text"
        },
        ne = {
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
        oe = {
          label: "Header Multiplier",
          name: "--header-multiplier",
          description: "Set the --header-multiplier",
          component: "text"
        },
        ie = {
          label: "Header Color",
          name: "--color-h-dynamic",
          description: "Applies to each header tag inside this component, unless overridden.",
          component: "color"
        },
        re = {
          label: "Subtitle Color",
          name: "--color-subtitle-dynamic",
          description: "Applies to ONLY the post title. Should only update this on the root level.",
          component: "color"
        },
        se = {
          label: "Body Color",
          name: "color",
          description: "Applies to the body font.",
          component: "color"
        },
        me = {
          label: "Highlight Color",
          name: "--highlight-color",
          component: "color"
        },
        de = {
          label: "Date/Time Color",
          name: "--time-color",
          description: "Applies to time tags inside this component.",
          component: "color"
        },
        ce = {
          label: "Invert Breadcrumb Separator Color",
          name: "toggleInvertSeparator",
          description: "Invert the color.",
          component: "toggle"
        },
        pe = {
          label: "Image Width",
          name: "width",
          description: "Set the image width",
          component: "text"
        },
        ue = {
          label: "Image Min-Width",
          name: "min-width",
          description: "Set the image min-width",
          component: "text"
        },
        be = {
          label: "Object Fit",
          name: "object-fit",
          description: "Set the image object-fit",
          component: "text"
        },
        ge = {
          label: "Image Max-Width",
          name: "max-width",
          description: "Set the image max-width",
          component: "text"
        },
        he = {
          label: "Image Height",
          name: "height",
          description: "Set the image height",
          component: "text"
        },
        fe = {
          label: "Image Min-Height",
          name: "min-height",
          description: "Set the image min-height",
          component: "text"
        },
        ve = {
          label: "Image Max-Height",
          name: "max-height",
          description: "Set the image max-height",
          component: "text"
        },
        Se = {
          label: "Aspect Ratio",
          name: "--aspect-ratio",
          description: "Set the aspect ratio of the image or container",
          component: "text"
        },
        xe = {
          label: "zIndex",
          name: "z-index",
          description: "Set the z-index of the image or container",
          component: "number"
        },
        ye = (e = null) => ({
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
        ke = ({
          filter: e = null
        }) => {
          const t = [{
              ..._("Position")
            }, {
              ...L
            }, {
              ...N
            }, {
              ...B
            }, {
              ...D
            }, {
              ...F
            }, {
              ...A
            }, {
              ...C("Position")
            }],
            a = [{
              ..._("Box Model")
            }, {
              ...G
            }, {
              ...j
            }, {
              ...E
            }, {
              ...O
            }, {
              ...z
            }, {
              ...R
            }, {
              ...$
            }, {
              ...H
            }, {
              ...X
            }, {
              ...U
            }, {
              ...T({})
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
              ...ye(e)
            }, {
              ...C("Box Model")
            }],
            l = [{
              ..._("Text")
            }, {
              ...oe
            }, {
              ...ne
            }, {
              ...te
            }, {
              ...ae
            }, {
              ...le
            }, {
              ...ie
            }, {
              ...re
            }, {
              ...se
            }, {
              ...me
            }, {
              ...de
            }, {
              ...C("Text")
            }],
            n = [{
              ..._("Background..")
            }, ...k({
              filter: e
            }), ...w({
              filter: e
            }), ...I({
              filter: e
            }), {
              ...C("Background")
            }],
            o = [{
              ..._("Grid")
            }, {
              ...q("--grid-position-mobile", "Grid Position (Mobile)")
            }, {
              label: "Grid Template Override (Mobile)",
              name: "--grid-template-mobile-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...q("--grid-position-desktop", "Grid Position (Desktop)")
            }, {
              label: "Grid Template Override (Desktop)",
              name: "--grid-template-desktop-override",
              description: "Short-hand for grid template rows/columns (overrides the above field)",
              component: "text"
            }, {
              ...W
            }, {
              ...V
            }, {
              ...J
            }, {
              ...Y
            }, {
              ...K
            }, {
              ...Z
            }, {
              ...ee
            }, {
              ...Q
            }, {
              ...xe
            }, {
              ...C("Grid")
            }],
            i = [{
              ..._("Image")
            }, {
              ...be
            }, {
              ...Se
            }, {
              ...pe
            }, {
              ...ue
            }, {
              ...ge
            }, {
              ...he
            }, {
              ...fe
            }, {
              ...ve
            }, {
              ...xe
            }, {
              ...C("Image")
            }],
            r = [...a, ...t, ...l, ...n];
          return "grid" === e && r.push(...o), ("image" === e || "layeredImage" === e || e?.startsWith("parallax")) && r.push(...i), "gridItem" === e && r.push({
            ...W
          }), "title" === e && (r.push(de), r.push(ce)), r
        },
        we = ({
          filter: e = null,
          name: t = "style",
          label: a = "CSS Variables"
        }) => ({
          label: a,
          name: t,
          description: "Override CSS Variables",
          component: "group",
          fields: [...ke({
            filter: e
          })]
        }),
        Ie = ({
          parent: e = null,
          filter: t = null
        }) => ({
          name: e ? `${e}.attributes` : "attributes",
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
          }, y({
            parent: e
          }), we({
            filter: t
          })]
        }),
        Te = (e = {}) => ({
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
        });
      var _e = a(25993);
      const Ce = (e = {}) => ({
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
            uploadDir: _e.XC,
            parse: _e.qg,
            previewSrc: _e.z0
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
          }, Te({})]
        }),
        Pe = ({
          filter: e = null
        }) => ({
          name: "className",
          label: "Class Names",
          component: "text",
          description: "Must be a space-separated list of valid CSS class names (excluding periods)."
        }),
        Me = () => ({
          name: S,
          label: "Content",
          component: "html"
        }),
        Le = (e = {
          label: "TranslationKey",
          description: "This value must begin with `key_` and MUST BE UNIQUE."
        }) => ({
          name: "key",
          component: "text",
          ...e
        }),
        Ne = (e = {}) => ({
          name: "ctas",
          label: "CTA buttons",
          component: "group-list",
          fields: [Pt({
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
          }, Pt({
            name: "href",
            label: "Link",
            component: "text"
          }), Pt({
            name: "buttonText",
            label: "Button Text",
            description: "For non-platform button labels",
            component: "text"
          }), Le()],
          ...e,
          itemProps: e => Ct(e, {
            label: `Link for [${e?.platform??e?.buttonText??""}]`
          }),
          defaultItem: () => Tt()
        }),
        Be = ({
          templates: e = []
        }) => ({
          label: "Content",
          description: "Add/remove/arrange/configure sections",
          name: S,
          component: "blocks",
          templates: e
        }),
        De = [{
          value: "",
          label: "-- Select Grid Context --"
        }, {
          value: "twitch-drops",
          label: "Twitch Drops"
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
        Fe = () => ({
          name: "context",
          label: "Container Type",
          component: "select",
          description: "What kind of content container is this?",
          options: De,
          initialValues: De[0]
        }),
        Ae = () => ({
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
          itemProps: e => Ct(e, {
            label: "GA Event Tracking"
          }),
          defaultItem: () => Tt()
        }),
        Ge = () => ({
          name: "id",
          label: "ID",
          description: "HTML attribute used to specify a unique id for an element. (WITHOUT the # sign, sometimes used for jump links)",
          component: "text"
        }),
        je = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, l.jsx)("hr", {})
        }),
        Ee = ({
          name: e,
          label: t = e
        }) => ({
          name: e,
          label: t,
          component: "group",
          description: "If responsive, only the Mobile Source is needed.",
          fields: [{
            name: "mobile",
            label: "Mobile Source",
            component: "image",
            clearable: !0,
            uploadDir: _e.XC,
            parse: _e.qg,
            previewSrc: _e.z0
          }, {
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: _e.XC,
            parse: _e.qg,
            previewSrc: _e.z0
          }, we({
            name: "imageMobileStyle",
            label: "Mobile CSS Style",
            filter: "image"
          }), we({
            name: "imageDesktopStyle",
            label: "Desktop CSS Style",
            filter: "image"
          })]
        }),
        Oe = [{
          ...je("Background Image Gradient")
        }, {
          ...((e = "Label") => ({
            label: e,
            name: e.toLowerCase().split(" ").join("_"),
            component: () => (0, l.jsx)("h3", {
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
          ...je("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        ze = ({
          game: e = null,
          label: t = "Image Configuration",
          name: a = "image"
        }) => {
          const l = [Pt({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Pt({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, Ee({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map(e => Ee({
              name: e
            }))
          }, {
            name: "accessibleRole",
            label: "Choose an Accessible Role",
            component: "select",
            options: [{
              value: "",
              label: " "
            }, {
              value: "none",
              label: "None"
            }, {
              value: "presentation",
              label: "Presentation"
            }]
          }, Pt({
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
          }), Pt({
            name: "caption",
            label: "Caption",
            component: "html"
          }), Le({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== e && "rdr2" !== e || l.push({
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
          }), "Background Image" === t && l.push(...Oe), {
            name: a,
            label: t,
            component: "group",
            fields: l,
            defaultItem: () => Tt(x),
            itemProps: e => Ct(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var Re = a(42909);
      const $e = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, l.jsx)("hr", {})
      });
      var He = a(79484);
      const Xe = ({
          style: e,
          width: t,
          height: a,
          resizable: o,
          field: i,
          input: r,
          meta: s,
          name: m,
          label: d,
          description: c,
          error: p,
          children: u
        }) => {
          const b = () => o ? (0, l.jsx)(He.c, {
            defaultSize: {
              width: t || "100%",
              height: a || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, n.cloneElement)(u, ...r)
          }) : u;
          return (0, l.jsxs)("div", {
            className: "rockstargames-sites-rockstargamese8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: e,
            children: [(0, l.jsxs)("label", {
              className: "rockstargames-sites-rockstargamesceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: m ?? i?.name,
              children: [d ?? i?.label, (0, l.jsx)("span", {
                className: "rockstargames-sites-rockstargamesa0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: c ?? i?.description
              })]
            }), (0, l.jsx)(b, {}), (p || s?.error) && (0, l.jsx)("div", {
              className: "FieldError_sc_custom",
              children: p ?? s?.error
            })]
          })
        },
        Ue = ({
          value: e,
          onChange: t = () => {},
          multi: a = !1,
          ...n
        }) => {
          const o = ({
            value: e,
            multi: t
          }) => t ? (0, l.jsxs)("div", {
            children: ["Selected files:", e.map(e => e.name).join(", ")]
          }) : (0, l.jsxs)("div", {
            children: ["Selected file:", e.name]
          });
          return (0, l.jsx)("label", {
            children: e && "" !== e ? (0, l.jsx)(o, {
              value: e,
              multi: a
            }) : (0, l.jsx)("input", {
              ...n,
              type: "file",
              onChange: e => {
                t(a ? [...e.target.files] : e.target.files[0])
              }
            })
          })
        },
        We = ({
          defaultValue: e,
          name: t
        }) => (0, l.jsx)("input", {
          type: "hidden",
          value: e,
          name: t
        }),
        qe = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, l.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        }),
        Qe = {
          alt: "",
          badge: null,
          splitter: " ",
          role: "",
          caption: ""
        },
        Ve = ({
          name: e = "src",
          label: t = e,
          description: a
        }) => ({
          name: e,
          label: t,
          description: a,
          component: "image",
          clearable: !0,
          uploadDir: _e.XC,
          parse: _e.qg,
          previewSrc: _e.z0
        }),
        Je = ({
          name: e,
          label: t = e,
          description: a
        }) => ({
          name: e,
          label: t,
          description: a ?? "If responsive, only the Mobile Source is needed.",
          component: "group",
          fields: [Ve({
            name: "mobile",
            label: "Mobile Source"
          }), Ve({
            name: "desktop",
            label: "Desktop Source"
          })]
        }),
        Ye = ({
          name: e = "image",
          label: t = "Image",
          description: a,
          ImageField: l = Ve
        }) => {
          const n = Re.POSIXLocales;
          return {
            name: e,
            label: t,
            description: a,
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
            defaultItem: () => Tt(),
            itemProps: e => Ct(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        Ke = ({
          name: e = "image",
          label: t = "Image",
          description: a
        }) => Ye({
          name: e,
          label: t,
          description: a,
          ImageField: Je
        }),
        Ze = [{
          ...$e("Background Image Gradient")
        }, {
          ...qe("Background Image Gradient")
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
          ...$e("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "Example: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        et = ({
          name: e = "image",
          label: t = "Image Configuration",
          description: a = "",
          game: l = ""
        }) => {
          const n = [Pt({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Pt({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, Ke({
            name: "image",
            label: "Image",
            description: "",
            ImageField: Je
          }), Pt({
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
          }), Pt({
            name: "caption",
            label: "Caption",
            component: "html"
          }), Le({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== l && "rdr2" !== l || n.push({
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
          }), "Background Image" === t && n.push(...Ze), {
            name: e,
            label: t,
            description: a,
            component: "group",
            fields: n,
            defaultItem: () => Tt(Qe),
            itemProps: e => Ct(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        tt = () => ({
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
          itemProps: e => Ct(e, {
            label: "GA Impression Tracking"
          }),
          defaultItem: () => Tt()
        }),
        at = ({
          game: e = null,
          filter: t = null
        }) => {
          const a = [Pt({
            label: "Title",
            name: "title",
            component: "text"
          }), ze({
            game: e,
            label: "Image Sources"
          })];
          return "discounts" !== t && a.push(Pt({
            label: "Description",
            name: "description",
            component: "html"
          })), a.push(Pt({
            label: "Link",
            name: "to",
            component: "text"
          }), we({
            filter: "title"
          })), {
            label: "Image/Title/Text Block",
            component: "group",
            fields: [...a, Pe({
              filter: "grid"
            }), Ge(), it({
              filter: t,
              fields: a,
              game: e
            }), tt(), Ae()],
            defaultItem: () => Tt({
              image: Tt(x)
            }),
            itemProps: e => Ct(e, {
              label: e?.[v]?.title ? `${e[v].title} [Image/Title/Text Block]` : "New [Image/Title/Text Block]"
            })
          }
        },
        lt = ({
          filter: e = null,
          game: t = null,
          label: a = null,
          name: l = "items"
        }) => ({
          name: l,
          label: a ?? `Edit ${l}`,
          component: "blocks",
          templates: [at({
            filter: e,
            game: t
          })],
          defaultItem: () => Tt(),
          itemProps: e => Ct(e, {})
        }),
        nt = () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => Tt({
            hero: !1
          })
        }),
        ot = ({
          fields: e = []
        }) => ({
          label: "Media Query",
          name: "mediaQuery",
          description: "Override options based on screen size.",
          component: "group",
          fields: [{
            label: "Media Query String",
            name: "mediaQueryString",
            description: "ex. (max-width: 600px)",
            component: "text"
          }, ...e],
          defaultItem: () => Tt(),
          itemProps: e => Ct(e, {
            label: `Media Query: ${e?.mediaQueryString??"New"}`
          })
        }),
        it = ({
          fields: e = [],
          filter: t = null
        }) => ({
          label: "Media Queries",
          name: "mediaQueryList",
          description: "Override styles based on screen size",
          component: "blocks",
          templates: [ot({
            filter: t,
            fields: e
          })]
        }),
        rt = (e = {
          post: null
        }) => ({
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
        }),
        st = () => ({
          label: "Name",
          name: "name",
          component: "text",
          description: "Block label for internal use only"
        }),
        mt = (e = {}) => ({
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
          }, Ae()],
          ...e,
          itemProps: e => Ct(e, {
            label: `Link for [${e?.platform??""}]`
          }),
          defaultItem: () => Tt()
        }),
        dt = () => [{
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
        }, gt({
          name: "primary_tags",
          label: "Game",
          description: "Applies title-specific styling",
          context: 1
        }), gt({
          name: "secondary_tags",
          label: "Topic",
          context: 2
        })],
        ct = () => ({
          name: "meta",
          label: "Post Info",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...dt(), {
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
          }, pt()]
        }),
        pt = () => ({
          name: "preview_images",
          label: "Manage preview images",
          description: "Upload images for use on newswire cards",
          component: "group",
          fields: ["en_us", "de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map(e => ({
            name: e,
            label: e,
            component: "group",
            fields: [{
              name: "newswire-block-16x9",
              label: "16x9 Source",
              component: "image",
              clearable: !0,
              uploadDir: _e.XC,
              previewSrc: _e.z0,
              parse: _e.qg
            }, {
              name: "newswire-block-square",
              label: "Square Source",
              component: "image",
              clearable: !0,
              uploadDir: _e.XC,
              previewSrc: _e.z0,
              parse: _e.qg
            }]
          }))
        }),
        ut = () => ({
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
          itemProps: e => Ct(e, {
            label: "Advanced Scrollmation Field Settings"
          }),
          defaultItem: () => Tt()
        });
      var bt = a(84620);
      const gt = ({
          label: e = "Tags",
          name: t = "tags",
          description: a = null,
          context: n = null
        }) => ({
          label: e,
          name: t,
          description: a,
          component: function({
            field: e,
            input: t,
            meta: a
          }) {
            const {
              data: o
            } = (0, r.useQuery)(bt.TagList, {
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
            return (0, l.jsx)(Xe, {
              field: e,
              input: t,
              meta: a,
              children: (0, l.jsx)("select", {
                ...t,
                children: i.map(e => (0, l.jsx)("option", {
                  value: e.id,
                  children: e.name
                }, e.id))
              })
            })
          }
        }),
        ht = () => ({
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
        ft = () => ({
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
        vt = ({
          field: e,
          input: t,
          form: a
        }) => {
          const {
            name: o,
            label: i,
            description: r,
            fileLoaded: s
          } = e, [m, d] = (0, n.useState)("");
          return (0, l.jsxs)(Xe, {
            name: o,
            label: i,
            description: r,
            children: [(0, l.jsx)(Ue, {
              onChange: e => {
                d(e)
              },
              name: t?.name,
              value: m,
              accept: ".xml"
            }), (0, l.jsx)("button", {
              style: {
                display: "block"
              },
              onClick: () => (async () => {
                if (!m) return;
                const e = new FileReader;
                e.onload = async e => {
                  s(e.target.result)
                }, e.readAsText(m)
              })(),
              children: "Save XML"
            })]
          })
        },
        St = ({
          name: e,
          label: t,
          description: a,
          fileLoaded: l
        }) => ({
          name: e,
          label: t,
          description: a,
          fileLoaded: l,
          component: vt,
          clearable: !0
        }),
        xt = ({
          name: e,
          label: t = e
        }) => ({
          name: e,
          label: t,
          component: "group",
          description: "(If responsive, only Mobile Source is needed)",
          fields: [{
            name: "mobile",
            label: "Mobile Source",
            component: "image",
            clearable: !0,
            uploadDir: _e.XC,
            parse: _e.qg,
            previewSrc: _e.z0
          }, {
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: _e.XC,
            parse: _e.qg,
            previewSrc: _e.z0
          }]
        }),
        yt = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        kt = ({
          name: e = "image",
          label: t = "Image configuration"
        }) => ({
          name: e,
          label: t,
          component: "group",
          fields: [Pt({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), xt({
            name: "sources.en_us",
            label: "Upload global images"
          }), {
            name: "sources",
            label: "Upload local images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: yt.map(e => xt({
              name: e
            }))
          }, Pt({
            name: "caption",
            label: "Caption",
            component: "html"
          })],
          defaultItem: () => Tt(),
          itemProps: t => Ct(t, {
            label: `Image [${e}]`
          })
        }),
        wt = ({
          name: e,
          label: t = name
        }) => ({
          name,
          label: t,
          component: "group",
          description: "Only use Desktop Images for now.",
          fields: [{
            name: "desktop",
            label: "Desktop Source",
            component: "image",
            clearable: !0,
            uploadDir: _e.XC,
            parse: _e.qg,
            previewSrc: _e.z0
          }]
        }),
        It = ({
          label: e = "Image Configuration"
        }) => ({
          name: "posterImage",
          label: e,
          component: "group",
          fields: [wt({
            name: "sources.en_us",
            label: "Upload Global Images"
          })],
          defaultItem: () => Tt({}),
          itemProps: e => Ct(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        }),
        Tt = (e = {}) => ({
          ...e,
          key: `key_${(0,f.A)()}`
        }),
        _t = (e = {}) => ({
          ...e,
          key: `pricing_key_${(0,f.A)()}`
        }),
        Ct = (e, t = {}) => ({
          ...t,
          key: e.key
        }),
        Pt = e => ({
          ...e,
          name: `${v}.${e.name}`
        }),
        Mt = ({
          payload: e,
          variables: t
        }) => {
          const a = ((e, t) => {
              const a = {};
              return i().cloneDeepWith(e, (e, l, n) => {
                l === t && e && (a[n.key] = e)
              }), a
            })(e, v),
            l = JSON.parse(JSON.stringify(i().merge(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
            n = JSON.parse(JSON.stringify(e));
          return i().cloneDeepWith(n, (e, t, a) => {
            (e => {
              if (!e || !i().has(e, "key") || e.translated) return;
              const t = l[e.key] ?? null;
              if (!t) return;
              const a = h()(t);
              Object.keys(a).map(t => {
                i().set(e, t, a[t])
              }), i().set(e, "translated", !0), Object.freeze(e)
            })(a)
          }), n
        };
      var Lt = a(82199);
      const Nt = {
          event: "page_section_impression",
          element_placement: null
        },
        Bt = ({
          threshold: e = .6,
          children: t,
          gtm: a = {}
        }) => {
          const {
            track: o
          } = (0, Lt.useGtmTrack)(), {
            ref: i,
            scrollTracked: s
          } = (0, r.useScrollTracking)(e);
          return (0, n.useEffect)(() => {
            s && o({
              ...Nt,
              ...a
            })
          }, [s]), (0, l.jsx)("section", {
            ref: i,
            children: t
          })
        },
        Dt = ({
          impressionTracking: e,
          gtm: t = {},
          children: a
        }) => e?.shouldTrack ? (0, l.jsx)(Bt, {
          threshold: e?.threshold,
          gtm: t,
          children: a
        }) : a,
        Ft = ({
          components: e,
          payload: t,
          componentProps: a = {}
        }) => {
          const o = (0, n.useMemo)(() => (i().cloneDeepWith(t, (a, l) => {
            "_template" !== l || Number.isInteger(Number(a)) || i().get(e, a) || (console.error(`TinaParser:useComponentRenderer: Component ${a} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: a
          }) => {
            const o = r => {
              let s = "";
              if (s = Array.isArray(r?.[S]) ? r[S].map(e => o(e)) : r?.[S] ?? "", !r?._template) return s;
              let m = r._template;
              "0" === m && (console.warn(`The _template "${m}" wasn't found in the available components. The _template "${m}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: r
              }), m = "gen9.Hero");
              const d = i().get(e, m) ?? null;
              if (!d) return null;
              const c = ((e, t) => a => ((e, t, a) => (0, l.jsx)(Dt, {
                  impressionTracking: a?.impressionTracking,
                  gtm: a?.gtm,
                  children: (0, l.jsx)(e, {
                    ...t
                  })
                }))(e, a, t))(d, {
                  impressionTracking: r?.impressionTracking,
                  gtm: {
                    ...r?.gtm,
                    whatever: 1
                  }
                }),
                p = [...r?.translations ?? []].reverse(),
                u = `componentProps_${(0,f.A)()}`;
              return (0, n.createElement)(c, {
                ...t?.meta,
                ...r,
                ...a,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: u
              }, s)
            };
            return t?.[S]?.length ? o(t) : null
          })({
            components: e,
            payload: t,
            componentProps: a
          })), [JSON.stringify(t)]);
          return o
        },
        At = ({
          tina: e,
          components: t = {},
          componentProps: a = {}
        }) => {
          const o = (0, p.i)(),
            [r, s] = (0, n.useState)(null),
            [m, u] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            e?.payload && s(e.payload), e?.variables && u(e.variables)
          }, [e]);
          const [b] = (0, n.useState)({
            ...t,
            ...c() ?? {}
          }), g = (({
            payload: e
          }) => {
            const [t, a] = (0, n.useState)(e);
            return (0, n.useEffect)(() => {
              const t = i().debounce(() => {
                const t = JSON.parse(JSON.stringify(e));
                i().cloneDeepWith(t, (e, t, a) => {
                  a?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      a = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...a,
                      _template: e?._template
                    })
                  })(a)
                }), a(t)
              }, 250);
              return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, [e]), t
          })({
            payload: r
          }), h = Mt({
            payload: r,
            variables: m
          });
          return (0, n.useMemo)(() => {
            if (!r) return null;
            const t = h,
              n = r?.meta?.prod ?? r?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              i = {
                ...r,
                meta: {
                  ...r?.meta ?? {},
                  prod: n
                }
              };
            return (0, l.jsx)(p.o, {
              payload: i,
              children: (0, l.jsx)(d, {
                components: b,
                children: (0, l.jsx)(Ft, {
                  payload: t,
                  components: b,
                  componentProps: {
                    ...a,
                    tina: e
                  }
                })
              })
            })
          }, [o, r, JSON.stringify(g), JSON.stringify(h)])
        },
        Gt = (e = "", t = 0, a = {}, l = () => {}) => {
          let n = {
            ...a
          };
          if (t > 0) {
            const o = Gt(e, t - 1, a, l);
            n = {
              ...n,
              ...l(e, {
                templates: o
              })
            }
          }
          return n
        },
        jt = Gt,
        Et = ({
          html: e,
          as: t = "span",
          ...a
        }) => (0, l.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...a
        });
      var Ot = a(77281)
    }
  }
]);