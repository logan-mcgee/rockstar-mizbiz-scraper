try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7fb2a4ac-ec67-48ae-bf64-2c6d6a3a5443", e._sentryDebugIdIdentifier = "sentry-dbid-7fb2a4ac-ec67-48ae-bf64-2c6d6a3a5443")
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
  [2463], {
    2824: (e, t, s) => {
      "use strict";
      s.d(t, {
        JP: () => h,
        jt: () => d,
        KI: () => u
      });
      var r = s(42295),
        n = s(62229),
        i = s(10299),
        o = s(74313),
        a = s(79142),
        l = s(4572),
        c = s.n(l);
      const d = ({
          json: e,
          options: t,
          bodySize: s,
          className: l,
          ...d
        }) => {
          const h = (0, n.useMemo)(() => (({
              size: e,
              className: t,
              ...s
            }) => ({
              [a.MARKS.BOLD]: n => (0, r.jsx)(i.Body, {
                appearance: "bold",
                size: e,
                className: t,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("strong", {
                  children: n
                })
              }),
              [a.MARKS.ITALIC]: n => (0, r.jsx)(i.Body, {
                className: c()("zlkq940", t),
                size: e,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("em", {
                  children: n
                })
              }),
              [a.MARKS.UNDERLINE]: n => (0, r.jsx)(i.Body, {
                size: e,
                className: c()("zlkq941", t),
                ...s,
                children: n
              }),
              [a.MARKS.CODE]: e => (0, r.jsx)(i.Code, {
                className: t,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("code", {
                  children: e
                })
              })
            }))({
              size: s,
              className: l,
              ...d
            }), [s, l]),
            u = (0, n.useMemo)(() => (({
              size: e,
              className: t,
              ...s
            }) => ({
              [a.BLOCKS.PARAGRAPH]: (n, o) => (0, r.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("p", {
                  children: o
                })
              }),
              [a.BLOCKS.HEADING_1]: (e, n) => (0, r.jsx)(i.Heading, {
                level: 1,
                className: t,
                ...s,
                children: n
              }),
              [a.BLOCKS.HEADING_2]: (e, n) => (0, r.jsx)(i.Heading, {
                level: 2,
                className: t,
                ...s,
                children: n
              }),
              [a.BLOCKS.HEADING_3]: (e, n) => (0, r.jsx)(i.Heading, {
                level: 3,
                className: t,
                ...s,
                children: n
              }),
              [a.BLOCKS.HEADING_4]: (e, n) => (0, r.jsx)(i.Heading, {
                level: 4,
                className: t,
                ...s,
                children: n
              }),
              [a.BLOCKS.HEADING_5]: (e, n) => (0, r.jsx)(i.Heading, {
                level: 5,
                className: t,
                ...s,
                children: n
              }),
              [a.BLOCKS.HEADING_6]: (e, n) => (0, r.jsx)(i.Heading, {
                level: 6,
                className: t,
                ...s,
                children: n
              }),
              [a.BLOCKS.HR]: () => (0, r.jsx)(i.Divider, {
                thickness: "thin"
              }),
              [a.BLOCKS.UL_LIST]: (n, o) => (0, r.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("ul", {
                  children: o
                })
              }),
              [a.BLOCKS.OL_LIST]: (n, o) => (0, r.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("ol", {
                  children: o
                })
              }),
              [a.BLOCKS.LIST_ITEM]: (n, o) => (0, r.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                ...s,
                children: (0, r.jsx)("li", {
                  children: o
                })
              }),
              [a.INLINES.HYPERLINK]: (n, o) => (0, r.jsx)(i.Body, {
                size: e,
                className: t,
                appearance: "hyperlink",
                asChild: !0,
                ...s,
                children: (0, r.jsx)("a", {
                  href: n.data.uri,
                  children: o
                })
              })
            }))({
              size: s,
              className: l,
              ...d
            }), [s, l]);
          if (!e) return null;
          const g = {
            renderMark: {
              ...h,
              ...t?.renderMark
            },
            renderNode: {
              ...u,
              ...t?.renderNode
            }
          };
          return (0, o.i)(e, g)
        },
        h = ({
          block: e
        }) => e.content?.json ? (0, r.jsx)(d, {
          json: e.content.json
        }) : null,
        u = "RsgRichText"
    },
    8747: (e, t, s) => {
      "use strict";
      s.d(t, {
        _t: () => a,
        Bk: () => r,
        GO: () => l,
        ti: () => i,
        JO: () => c,
        dK: () => d,
        Dq: () => o,
        K4: () => n
      });
      const r = (e, t = {}) => {
          if (!e.startsWith("http")) return e;
          const s = new URL(e);
          return s.pathname.endsWith(".svg") ? e : (t.width && s.searchParams.set("w", String(t.width)), t.height && s.searchParams.set("h", String(t.height)), t.quality && s.searchParams.set("q", String(t.quality)), t.format && s.searchParams.set("fm", String(t.format)), t.fit && s.searchParams.set("fit", String(t.fit)), s.toString())
        },
        n = (e, t) => {
          const {
            width: s,
            height: r
          } = e;
          if (t.width && t.height) return console.warn("Provide only one scaling dimension (width OR height)"), e;
          if (t.width) {
            const e = t.width / s;
            return {
              width: t.width,
              height: Math.round(r * e)
            }
          }
          if (t.height) {
            const e = t.height / r;
            return {
              width: Math.round(r * e),
              height: t.height
            }
          }
          return e
        },
        i = e => {
          const t = e.lastIndexOf(".");
          return -1 !== t ? e.substring(t + 1) : ""
        },
        o = e => e.endsWith(".svg") || e.endsWith(".gif"),
        a = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        l = (e, t = a, s = {}) => {
          const n = Math.min(4e3, s.maxWidth ?? 1 / 0);
          return t.filter(e => e <= n).map(t => ({
            url: r(e, {
              ...s,
              width: t
            }),
            width: t
          }))
        },
        c = ({
          src: e,
          originalSize: t,
          options: s = {},
          widths: c = a
        }) => {
          if (!e || !t?.width || !t?.height) return null;
          s.preferModernFormat && ["jpg", "png"].includes(i(e)) && (s.format = "webp");
          const d = {
              quality: s.quality,
              format: s.format,
              fit: s.fit
            },
            h = n(t, s),
            u = r(e, {
              ...d
            }),
            g = o(u),
            f = g ? void 0 : l(e, c, d);
          return {
            url: g || !f ? u : f?.[f?.length - 1]?.url,
            width: h.width,
            height: h.height,
            srcSet: f?.map(e => `${e.url} ${e.width}w`).join(", ")
          }
        },
        d = (e, t = "mobile", s = {}) => {
          let r = e?.imageFilesCollection?.items.find(e => e.context === t);
          if (r || (r = e?.imageFilesCollection?.items.find(e => "mobile" === e.context)), !r?.source?.url || !r?.source?.width || !r?.source?.height) return;
          const n = r.source.url;
          return {
            ...c({
              src: n,
              originalSize: {
                width: r.source.width ?? 1920,
                height: r.source.height ?? 1080
              },
              options: s
            }),
            alt: r.altText ?? ""
          }
        }
    },
    18064: (e, t, s) => {
      "use strict";
      s.d(t, {
        a: () => c,
        A: () => d
      });
      var r = s(42295),
        n = s(62229);
      const i = ({
        typename: e
      }) => ((0, n.useEffect)(() => {}, []), null);
      var o = s(2824);
      const a = {
        [o.KI]: o.JP
      };
      var l = s(51087);
      const c = (0, n.createContext)({
          blockPosition: {
            totalBlocks: 0,
            blockIndex: 0
          }
        }),
        d = ({
          block: e,
          blockPosition: t,
          ...s
        }) => {
          const o = (0, n.useContext)(l.N);
          if (! function(e) {
              return "object" == typeof e && null !== e && "__typename" in e && "string" == typeof e.__typename
            }(e) || !e.sys?.id) return null;
          const d = {
            ...a,
            ...o.customBlocks
          } [e.__typename];
          return d ? (0, r.jsx)(c.Provider, {
            value: {
              blockPosition: t
            },
            children: (0, r.jsx)(d, {
              block: e,
              ...s
            })
          }) : (0, r.jsx)(i, {
            typename: e.__typename
          })
        }
    },
    23112: () => {},
    32811: (e, t, s) => {
      "use strict";
      s.d(t, {
        f5: () => y,
        Um: () => w,
        Vz: () => C,
        js: () => m,
        KU: () => f,
        UG: () => r,
        FE: () => p,
        iu: () => l
      });
      var r = s(96498),
        n = s(89311),
        i = s(87592),
        o = s(81788),
        a = s(62229);
      const l = ({
        query: e,
        variables: t = {},
        skip: s = !1
      }) => {
        const [{
          iso: r
        }] = (0, o.getLocale)(), l = {
          locale: p[r],
          ...t
        }, {
          loading: c,
          error: d,
          data: h
        } = (0, n.useQuery)(e, {
          variables: l,
          client: f(),
          errorPolicy: "all",
          skip: s
        });
        return (0, a.useEffect)(() => {
          if (d) {
            const t = d.networkError;
            400 !== t?.statusCode && ((0, i.addBreadcrumb)({
              category: "contentful",
              message: "Contentful Service Data Error",
              data: {
                query: e,
                data: h,
                error: d
              }
            }), (0, i.captureMessage)("Issue with Contentful Service", i.Severity.Error))
          }
        }, [d]), {
          loading: c,
          error: d,
          data: h
        }
      };
      var c = s(79958),
        d = s(62944),
        h = s(95966),
        u = s(32334);
      const {
        cms: g
      } = (0, h.getConfigForDomain)(), f = () => {
        const e = "contentful-apollo-client";
        if (!window?.[e]) {
          const t = (0, d.e)({
              sha256: u.sc
            }),
            s = new c.P({
              uri: g
            });
          window[e] = new n.ApolloClient({
            link: n.ApolloLink.from([t, s]),
            cache: new n.InMemoryCache
          })
        }
        return window[e]
      }, m = {
        "en-US": "en-US",
        "de-DE": "de-DE",
        "fr-FR": "fr-FR",
        "it-IT": "it-IT",
        "ja-JP": "ja-JP",
        "ru-RU": "ru-RU",
        "es-ES": "es-ES",
        "es-MX": "es-MX",
        "pt-BR": "pt-BR",
        "ko-KR": "ko-KR",
        "zh-Hant-TW": "zh-TW",
        "pl-PL": "pl-PL",
        "zh-Hans": "zh-CN"
      }, p = Object.entries(m).reduce((e, [t, s]) => ({
        ...e,
        [s]: t
      }), {});
      var y = function(e) {
          return e.Avif = "AVIF", e.Jpg = "JPG", e.JpgProgressive = "JPG_PROGRESSIVE", e.Png = "PNG", e.Png8 = "PNG8", e.Webp = "WEBP", e
        }({}),
        w = function(e) {
          return e.Bottom = "BOTTOM", e.BottomLeft = "BOTTOM_LEFT", e.BottomRight = "BOTTOM_RIGHT", e.Center = "CENTER", e.Face = "FACE", e.Faces = "FACES", e.Left = "LEFT", e.Right = "RIGHT", e.Top = "TOP", e.TopLeft = "TOP_LEFT", e.TopRight = "TOP_RIGHT", e
        }({}),
        C = function(e) {
          return e.Crop = "CROP", e.Fill = "FILL", e.Fit = "FIT", e.Pad = "PAD", e.Scale = "SCALE", e.Thumb = "THUMB", e
        }({})
    },
    45614: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        BlockErrorBoundary: () => a.A,
        BlockRenderer: () => o.A,
        BlockRendererContext: () => o.a,
        PageRenderer: () => i.A,
        RsgMdTextComponent: () => r.w,
        RsgRichTextComponent: () => n.jt
      });
      var r = s(51713),
        n = s(2824),
        i = s(51087),
        o = s(18064),
        a = s(52857),
        l = s(73692),
        c = {};
      for (const e in l)["default", "RsgMdTextComponent", "RsgRichTextComponent", "PageRenderer", "BlockRenderer", "BlockRendererContext", "BlockErrorBoundary"].indexOf(e) < 0 && (c[e] = () => l[e]);
      s.d(t, c)
    },
    45881: (e, t, s) => {
      "use strict";
      s.d(t, {
        y: () => r
      });
      const r = (e, t) => {
        const s = (e => {
          let t = 0;
          for (let s = 0; s < e.length; s++) t = (t << 5) - t + e.charCodeAt(s);
          return (t >>> 0).toString(36).padStart(7, "0")
        })(JSON.stringify(e));
        return void 0 !== t ? `${s}-${t}` : s
      }
    },
    51087: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => d,
        N: () => a
      });
      var r = s(42295),
        n = s(62229),
        i = s(18064),
        o = s(52857);
      const a = (0, n.createContext)({
          customBlocks: null
        }),
        l = (0, n.memo)(function({
          data: e,
          customBlocks: t,
          children: s
        }) {
          return e && e.sys?.id ? (0, r.jsxs)(a.Provider, {
            value: {
              customBlocks: t
            },
            children: [s, e.contentCollection?.items.filter(c).map((t, s) => (0, r.jsx)(o.A, {
              block: t,
              children: (0, r.jsx)(i.A, {
                block: t,
                blockPosition: {
                  blockIndex: s + 1,
                  totalBlocks: e.contentCollection?.items.length ?? 0
                }
              })
            }, t.sys.id))]
          }) : null
        }),
        c = e => !!e.sys?.id,
        d = l
    },
    51713: (e, t, s) => {
      "use strict";
      s.d(t, {
        w: () => a
      });
      var r = s(42295),
        n = s(62229),
        i = s(39471),
        o = s(2824);
      const a = ({
        markdown: e,
        rsgRichTextOptions: t,
        bodySize: s = "MD",
        className: a,
        ...l
      }) => {
        const [c, d] = (0, n.useState)();
        return (0, n.useEffect)(() => {
          (0, i.V)(e).then(e => {
            d(e)
          })
        }, [e]), c ? (0, r.jsx)(o.jt, {
          json: c,
          options: t,
          bodySize: s,
          className: a,
          ...l
        }) : null
      }
    },
    52857: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => o
      });
      var r = s(87592),
        n = s(62229);
      class i extends n.Component {
        state = {
          hasError: !1,
          block: null
        };
        constructor(e) {
          super(e), this.state.block = e.block
        }
        static getDerivedStateFromError() {
          return {
            hasError: !0
          }
        }
        componentDidCatch(e, t) {
          (0, r.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "Contentful Component Rendering Issue",
            data: {
              error: e,
              errorInfo: t
            }
          }), (0, r.captureMessage)("Contentful ErrorBoundary", r.Severity.Error)
        }
        render() {
          return this.state.hasError ? null : this.props.children
        }
      }
      const o = i
    },
    72463: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        ContentfulTypes: () => r,
        ImageFormat: () => o.f5,
        ImageResizeFocus: () => o.Um,
        ImageResizeStrategy: () => o.Vz,
        contentfulToRockstarLanguageMap: () => o.js,
        getClient: () => o.KU,
        graphql: () => o.UG,
        rockstarToContentfulMap: () => o.FE,
        useContentfulQuery: () => o.iu
      });
      var r = s(79142),
        n = s(45614),
        i = {};
      for (const e in n)["default", "ContentfulTypes"].indexOf(e) < 0 && (i[e] = () => n[e]);
      s.d(t, i);
      var o = s(32811)
    },
    73692: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        DEFAULT_WIDTHS: () => i._t,
        buildContentfulImageUrl: () => i.Bk,
        fallbackKey: () => r.y,
        generateSrcSet: () => i.GO,
        getFileType: () => i.ti,
        getOptimizedImage: () => i.JO,
        getOptimizedRsgImage: () => i.dK,
        getRsgImage: () => n.c,
        isVectorOrGif: () => i.Dq,
        scaleDimensions: () => i.K4,
        scaleRsgImage: () => n.k
      });
      var r = s(45881),
        n = s(79150),
        i = s(8747),
        o = s(23112),
        a = {};
      for (const e in o)["default", "fallbackKey", "getRsgImage", "scaleRsgImage", "DEFAULT_WIDTHS", "buildContentfulImageUrl", "generateSrcSet", "getFileType", "getOptimizedImage", "getOptimizedRsgImage", "isVectorOrGif", "scaleDimensions"].indexOf(e) < 0 && (a[e] = () => o[e]);
      s.d(t, a)
    },
    79150: (e, t, s) => {
      "use strict";

      function r(e, t, s) {
        if (!e?.imageFilesCollection?.items) return null;
        let r = e.imageFilesCollection.items.find(e => e?.context === t);
        if (!r) {
          let s = "mobile";
          "mobile" === t && (s = "desktop"), r = e.imageFilesCollection.items.find(e => e?.context === s)
        }
        if (!r) return null;
        const {
          altText: i
        } = e;
        return (s?.height || s?.width) && (r = n(r, {
          width: s?.width,
          height: s?.height
        })), {
          altText: i,
          ...r
        }
      }

      function n(e, t) {
        if (!e.source?.width || !e.source?.height || e.source.width < 0 || e.source.height < 0 || !e.source.url) return console.warn("Original image data error"), e;
        if (t.height && t.width) return console.warn("Provide only one value to scale by"), e;
        let s = e.source.width,
          r = e.source.height;
        const n = new URL(e.source.url);
        if (t.width) {
          const i = t.width / e.source.width;
          s = t.width, r = Math.round(e.source.height * i), n.searchParams.set("w", String(s))
        } else if (t.height) {
          r = t.height;
          const i = t.height / e.source.height;
          s = Math.round(e.source.width * i), n.searchParams.set("h", String(r))
        }
        return {
          ...e,
          source: {
            ...e.source,
            url: n.toString(),
            width: s,
            height: r
          }
        }
      }
      s.d(t, {
        c: () => r,
        k: () => n
      })
    }
  }
]);