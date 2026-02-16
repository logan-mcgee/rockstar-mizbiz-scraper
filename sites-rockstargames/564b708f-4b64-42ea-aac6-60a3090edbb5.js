try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "564b708f-4b64-42ea-aac6-60a3090edbb5", e._sentryDebugIdIdentifier = "sentry-dbid-564b708f-4b64-42ea-aac6-60a3090edbb5")
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
    2824: (e, t, r) => {
      "use strict";
      r.d(t, {
        JP: () => h,
        jt: () => d,
        KI: () => u
      });
      var s = r(42295),
        n = r(62229),
        i = r(20820),
        o = r(74313),
        a = r(79142),
        l = r(4572),
        c = r.n(l);
      const d = ({
          json: e,
          options: t,
          bodySize: r,
          className: l
        }) => {
          const d = (0, n.useMemo)(() => ((e, t) => ({
              [a.MARKS.BOLD]: r => (0, s.jsx)(i.Body, {
                appearance: "bold",
                size: e,
                className: t,
                asChild: !0,
                children: (0, s.jsx)("strong", {
                  children: r
                })
              }),
              [a.MARKS.ITALIC]: r => (0, s.jsx)(i.Body, {
                className: c()("zlkq940", t),
                size: e,
                asChild: !0,
                children: (0, s.jsx)("em", {
                  children: r
                })
              }),
              [a.MARKS.UNDERLINE]: r => (0, s.jsx)(i.Body, {
                size: e,
                className: c()("zlkq941", t),
                children: r
              }),
              [a.MARKS.CODE]: e => (0, s.jsx)(i.Code, {
                className: t,
                asChild: !0,
                children: (0, s.jsx)("code", {
                  children: e
                })
              })
            }))(r, l), [r, l]),
            h = (0, n.useMemo)(() => ((e, t) => ({
              [a.BLOCKS.PARAGRAPH]: (r, n) => (0, s.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, s.jsx)("p", {
                  children: n
                })
              }),
              [a.BLOCKS.HEADING_1]: (e, r) => (0, s.jsx)(i.Heading, {
                level: 1,
                className: t,
                children: r
              }),
              [a.BLOCKS.HEADING_2]: (e, r) => (0, s.jsx)(i.Heading, {
                level: 2,
                className: t,
                children: r
              }),
              [a.BLOCKS.HEADING_3]: (e, r) => (0, s.jsx)(i.Heading, {
                level: 3,
                className: t,
                children: r
              }),
              [a.BLOCKS.HEADING_4]: (e, r) => (0, s.jsx)(i.Heading, {
                level: 4,
                className: t,
                children: r
              }),
              [a.BLOCKS.HEADING_5]: (e, r) => (0, s.jsx)(i.Heading, {
                level: 5,
                className: t,
                children: r
              }),
              [a.BLOCKS.HEADING_6]: (e, r) => (0, s.jsx)(i.Heading, {
                level: 6,
                className: t,
                children: r
              }),
              [a.BLOCKS.HR]: () => (0, s.jsx)(i.Divider, {
                thickness: "thin"
              }),
              [a.BLOCKS.UL_LIST]: (r, n) => (0, s.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, s.jsx)("ul", {
                  children: n
                })
              }),
              [a.BLOCKS.OL_LIST]: (r, n) => (0, s.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, s.jsx)("ol", {
                  children: n
                })
              }),
              [a.BLOCKS.LIST_ITEM]: (r, n) => (0, s.jsx)(i.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, s.jsx)("li", {
                  children: n
                })
              }),
              [a.INLINES.HYPERLINK]: (r, n) => (0, s.jsx)(i.Body, {
                size: e,
                className: t,
                appearance: "hyperlink",
                asChild: !0,
                children: (0, s.jsx)("a", {
                  href: r.data.uri,
                  children: n
                })
              })
            }))(r, l), [r, l]);
          if (!e) return null;
          const u = {
            renderMark: {
              ...d,
              ...t?.renderMark
            },
            renderNode: {
              ...h,
              ...t?.renderNode
            }
          };
          return (0, o.i)(e, u)
        },
        h = ({
          block: e
        }) => e.content?.json ? (0, s.jsx)(d, {
          json: e.content.json
        }) : null,
        u = "RsgRichText"
    },
    8747: (e, t, r) => {
      "use strict";
      r.d(t, {
        _t: () => a,
        Bk: () => s,
        GO: () => l,
        ti: () => i,
        JO: () => c,
        dK: () => d,
        Dq: () => o,
        K4: () => n
      });
      const s = (e, t = {}) => {
          if (!e.startsWith("http")) return e;
          const r = new URL(e);
          return r.pathname.endsWith(".svg") ? e : (t.width && r.searchParams.set("w", String(t.width)), t.height && r.searchParams.set("h", String(t.height)), t.quality && r.searchParams.set("q", String(t.quality)), t.format && r.searchParams.set("fm", String(t.format)), t.fit && r.searchParams.set("fit", String(t.fit)), r.toString())
        },
        n = (e, t) => {
          const {
            width: r,
            height: s
          } = e;
          if (t.width && t.height) return console.warn("Provide only one scaling dimension (width OR height)"), e;
          if (t.width) {
            const e = t.width / r;
            return {
              width: t.width,
              height: Math.round(s * e)
            }
          }
          if (t.height) {
            const e = t.height / s;
            return {
              width: Math.round(s * e),
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
        l = (e, t = a, r = {}) => {
          const n = Math.min(4e3, r.maxWidth ?? 1 / 0);
          return t.filter(e => e <= n).map(t => ({
            url: s(e, {
              ...r,
              width: t
            }),
            width: t
          }))
        },
        c = ({
          src: e,
          originalSize: t,
          options: r = {},
          widths: c = a
        }) => {
          if (!e || !t?.width || !t?.height) return null;
          r.preferModernFormat && ["jpg", "png"].includes(i(e)) && (r.format = "webp");
          const d = {
              quality: r.quality,
              format: r.format,
              fit: r.fit
            },
            h = n(t, r),
            u = s(e, {
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
        d = (e, t = "mobile", r = {}) => {
          let s = e?.imageFilesCollection?.items.find(e => e.context === t);
          if (s || (s = e?.imageFilesCollection?.items.find(e => "mobile" === e.context)), !s?.source?.url || !s?.source?.width || !s?.source?.height) return;
          const n = s.source.url;
          return {
            ...c({
              src: n,
              originalSize: {
                width: s.source.width ?? 1920,
                height: s.source.height ?? 1080
              },
              options: r
            }),
            alt: s.altText ?? ""
          }
        }
    },
    18064: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => c,
        A: () => d
      });
      var s = r(42295),
        n = r(62229);
      const i = ({
        typename: e
      }) => ((0, n.useEffect)(() => {}, []), null);
      var o = r(2824);
      const a = {
        [o.KI]: o.JP
      };
      var l = r(51087);
      const c = (0, n.createContext)({
          blockPosition: {
            totalBlocks: 0,
            blockIndex: 0
          }
        }),
        d = ({
          block: e,
          blockPosition: t,
          ...r
        }) => {
          const o = (0, n.useContext)(l.N);
          if (! function(e) {
              return "object" == typeof e && null !== e && "__typename" in e && "string" == typeof e.__typename
            }(e) || !e.sys?.id) return null;
          const d = {
            ...a,
            ...o.customBlocks
          } [e.__typename];
          return d ? (0, s.jsx)(c.Provider, {
            value: {
              blockPosition: t
            },
            children: (0, s.jsx)(d, {
              block: e,
              ...r
            })
          }) : (0, s.jsx)(i, {
            typename: e.__typename
          })
        }
    },
    23112: () => {},
    32811: (e, t, r) => {
      "use strict";
      r.d(t, {
        f5: () => y,
        Um: () => w,
        Vz: () => b,
        js: () => m,
        KU: () => f,
        UG: () => s,
        FE: () => p,
        iu: () => l
      });
      var s = r(96498),
        n = r(89311),
        i = r(87592),
        o = r(81788),
        a = r(62229);
      const l = ({
        query: e,
        variables: t = {},
        skip: r = !1
      }) => {
        const [{
          iso: s
        }] = (0, o.getLocale)(), l = {
          locale: p[s],
          ...t
        }, {
          loading: c,
          error: d,
          data: h
        } = (0, n.useQuery)(e, {
          variables: l,
          client: f(),
          errorPolicy: "all",
          skip: r
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
      var c = r(79958),
        d = r(62944),
        h = r(95966),
        u = r(32334);
      const {
        cms: g
      } = (0, h.getConfigForDomain)(), f = () => {
        const e = "contentful-apollo-client";
        if (!window?.[e]) {
          const t = (0, d.e)({
              sha256: u.sc
            }),
            r = new c.P({
              uri: g
            });
          window[e] = new n.ApolloClient({
            link: n.ApolloLink.from([t, r]),
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
      }, p = Object.entries(m).reduce((e, [t, r]) => ({
        ...e,
        [r]: t
      }), {});
      var y = function(e) {
          return e.Avif = "AVIF", e.Jpg = "JPG", e.JpgProgressive = "JPG_PROGRESSIVE", e.Png = "PNG", e.Png8 = "PNG8", e.Webp = "WEBP", e
        }({}),
        w = function(e) {
          return e.Bottom = "BOTTOM", e.BottomLeft = "BOTTOM_LEFT", e.BottomRight = "BOTTOM_RIGHT", e.Center = "CENTER", e.Face = "FACE", e.Faces = "FACES", e.Left = "LEFT", e.Right = "RIGHT", e.Top = "TOP", e.TopLeft = "TOP_LEFT", e.TopRight = "TOP_RIGHT", e
        }({}),
        b = function(e) {
          return e.Crop = "CROP", e.Fill = "FILL", e.Fit = "FIT", e.Pad = "PAD", e.Scale = "SCALE", e.Thumb = "THUMB", e
        }({})
    },
    45614: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        BlockErrorBoundary: () => a.A,
        BlockRenderer: () => o.A,
        BlockRendererContext: () => o.a,
        PageRenderer: () => i.A,
        RsgMdTextComponent: () => s.w,
        RsgRichTextComponent: () => n.jt
      });
      var s = r(51713),
        n = r(2824),
        i = r(51087),
        o = r(18064),
        a = r(52857),
        l = r(73692),
        c = {};
      for (const e in l)["default", "RsgMdTextComponent", "RsgRichTextComponent", "PageRenderer", "BlockRenderer", "BlockRendererContext", "BlockErrorBoundary"].indexOf(e) < 0 && (c[e] = () => l[e]);
      r.d(t, c)
    },
    45881: (e, t, r) => {
      "use strict";
      r.d(t, {
        y: () => s
      });
      const s = (e, t) => {
        const r = (e => {
          let t = 0;
          for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r);
          return (t >>> 0).toString(36).padStart(7, "0")
        })(JSON.stringify(e));
        return void 0 !== t ? `${r}-${t}` : r
      }
    },
    51087: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => d,
        N: () => a
      });
      var s = r(42295),
        n = r(62229),
        i = r(18064),
        o = r(52857);
      const a = (0, n.createContext)({
          customBlocks: null
        }),
        l = (0, n.memo)(function({
          data: e,
          customBlocks: t,
          children: r
        }) {
          return e && e.sys?.id ? (0, s.jsxs)(a.Provider, {
            value: {
              customBlocks: t
            },
            children: [r, e.contentCollection?.items.filter(c).map((t, r) => (0, s.jsx)(o.A, {
              block: t,
              children: (0, s.jsx)(i.A, {
                block: t,
                blockPosition: {
                  blockIndex: r + 1,
                  totalBlocks: e.contentCollection?.items.length ?? 0
                }
              })
            }, t.sys.id))]
          }) : null
        }),
        c = e => !!e.sys?.id,
        d = l
    },
    51713: (e, t, r) => {
      "use strict";
      r.d(t, {
        w: () => a
      });
      var s = r(42295),
        n = r(62229),
        i = r(39471),
        o = r(2824);
      const a = ({
        markdown: e,
        rsgRichTextOptions: t,
        bodySize: r = "MD",
        className: a
      }) => {
        const [l, c] = (0, n.useState)();
        return (0, n.useEffect)(() => {
          (0, i.V)(e).then(e => {
            c(e)
          })
        }, [e]), l ? (0, s.jsx)(o.jt, {
          json: l,
          options: t,
          bodySize: r,
          className: a
        }) : null
      }
    },
    52857: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var s = r(87592),
        n = r(62229);
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
          (0, s.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "Contentful Component Rendering Issue",
            data: {
              error: e,
              errorInfo: t
            }
          }), (0, s.captureMessage)("Contentful ErrorBoundary", s.Severity.Error)
        }
        render() {
          return this.state.hasError ? null : this.props.children
        }
      }
      const o = i
    },
    72463: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        ContentfulTypes: () => s,
        ImageFormat: () => o.f5,
        ImageResizeFocus: () => o.Um,
        ImageResizeStrategy: () => o.Vz,
        contentfulToRockstarLanguageMap: () => o.js,
        getClient: () => o.KU,
        graphql: () => o.UG,
        rockstarToContentfulMap: () => o.FE,
        useContentfulQuery: () => o.iu
      });
      var s = r(79142),
        n = r(45614),
        i = {};
      for (const e in n)["default", "ContentfulTypes"].indexOf(e) < 0 && (i[e] = () => n[e]);
      r.d(t, i);
      var o = r(32811)
    },
    73692: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        DEFAULT_WIDTHS: () => i._t,
        buildContentfulImageUrl: () => i.Bk,
        fallbackKey: () => s.y,
        generateSrcSet: () => i.GO,
        getFileType: () => i.ti,
        getOptimizedImage: () => i.JO,
        getOptimizedRsgImage: () => i.dK,
        getRsgImage: () => n.c,
        isVectorOrGif: () => i.Dq,
        scaleDimensions: () => i.K4,
        scaleRsgImage: () => n.k
      });
      var s = r(45881),
        n = r(79150),
        i = r(8747),
        o = r(23112),
        a = {};
      for (const e in o)["default", "fallbackKey", "getRsgImage", "scaleRsgImage", "DEFAULT_WIDTHS", "buildContentfulImageUrl", "generateSrcSet", "getFileType", "getOptimizedImage", "getOptimizedRsgImage", "isVectorOrGif", "scaleDimensions"].indexOf(e) < 0 && (a[e] = () => o[e]);
      r.d(t, a)
    },
    79150: (e, t, r) => {
      "use strict";

      function s(e, t, r) {
        if (!e?.imageFilesCollection?.items) return null;
        let s = e.imageFilesCollection.items.find(e => e?.context === t);
        if (!s) {
          let r = "mobile";
          "mobile" === t && (r = "desktop"), s = e.imageFilesCollection.items.find(e => e?.context === r)
        }
        if (!s) return null;
        const {
          altText: i
        } = e;
        return (r?.height || r?.width) && (s = n(s, {
          width: r?.width,
          height: r?.height
        })), {
          altText: i,
          ...s
        }
      }

      function n(e, t) {
        if (!e.source?.width || !e.source?.height || e.source.width < 0 || e.source.height < 0 || !e.source.url) return console.warn("Original image data error"), e;
        if (t.height && t.width) return console.warn("Provide only one value to scale by"), e;
        let r = e.source.width,
          s = e.source.height;
        const n = new URL(e.source.url);
        if (t.width) {
          const i = t.width / e.source.width;
          r = t.width, s = Math.round(e.source.height * i), n.searchParams.set("w", String(r))
        } else if (t.height) {
          s = t.height;
          const i = t.height / e.source.height;
          r = Math.round(e.source.width * i), n.searchParams.set("h", String(s))
        }
        return {
          ...e,
          source: {
            ...e.source,
            url: n.toString(),
            width: r,
            height: s
          }
        }
      }
      r.d(t, {
        c: () => s,
        k: () => n
      })
    }
  }
]);