try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "96ec40e6-ffe4-49e4-b033-6e54db67ad90", e._sentryDebugIdIdentifier = "sentry-dbid-96ec40e6-ffe4-49e4-b033-6e54db67ad90")
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
        JP: () => u,
        jt: () => d,
        KI: () => g
      });
      var n = s(42295),
        r = s(62229),
        o = s(20820),
        i = s(74313),
        l = s(79142),
        a = s(4572),
        c = s.n(a);
      const d = ({
          json: e,
          options: t,
          bodySize: s,
          className: a
        }) => {
          const d = (0, r.useMemo)(() => ((e, t) => ({
              [l.MARKS.BOLD]: s => (0, n.jsx)(o.Body, {
                appearance: "bold",
                size: e,
                className: t,
                asChild: !0,
                children: (0, n.jsx)("strong", {
                  children: s
                })
              }),
              [l.MARKS.ITALIC]: s => (0, n.jsx)(o.Body, {
                className: c()("zlkq940", t),
                size: e,
                asChild: !0,
                children: (0, n.jsx)("em", {
                  children: s
                })
              }),
              [l.MARKS.UNDERLINE]: s => (0, n.jsx)(o.Body, {
                size: e,
                className: c()("zlkq941", t),
                children: s
              }),
              [l.MARKS.CODE]: e => (0, n.jsx)(o.Code, {
                className: t,
                asChild: !0,
                children: (0, n.jsx)("code", {
                  children: e
                })
              })
            }))(s, a), [s, a]),
            u = (0, r.useMemo)(() => ((e, t) => ({
              [l.BLOCKS.PARAGRAPH]: (s, r) => (0, n.jsx)(o.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, n.jsx)("p", {
                  children: r
                })
              }),
              [l.BLOCKS.HEADING_1]: (e, s) => (0, n.jsx)(o.Heading, {
                level: 1,
                className: t,
                children: s
              }),
              [l.BLOCKS.HEADING_2]: (e, s) => (0, n.jsx)(o.Heading, {
                level: 2,
                className: t,
                children: s
              }),
              [l.BLOCKS.HEADING_3]: (e, s) => (0, n.jsx)(o.Heading, {
                level: 3,
                className: t,
                children: s
              }),
              [l.BLOCKS.HEADING_4]: (e, s) => (0, n.jsx)(o.Heading, {
                level: 4,
                className: t,
                children: s
              }),
              [l.BLOCKS.HEADING_5]: (e, s) => (0, n.jsx)(o.Heading, {
                level: 5,
                className: t,
                children: s
              }),
              [l.BLOCKS.HEADING_6]: (e, s) => (0, n.jsx)(o.Heading, {
                level: 6,
                className: t,
                children: s
              }),
              [l.BLOCKS.HR]: () => (0, n.jsx)(o.Divider, {
                thickness: "thin"
              }),
              [l.BLOCKS.UL_LIST]: (s, r) => (0, n.jsx)(o.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, n.jsx)("ul", {
                  children: r
                })
              }),
              [l.BLOCKS.OL_LIST]: (s, r) => (0, n.jsx)(o.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, n.jsx)("ol", {
                  children: r
                })
              }),
              [l.BLOCKS.LIST_ITEM]: (s, r) => (0, n.jsx)(o.Body, {
                size: e,
                className: t,
                asChild: !0,
                children: (0, n.jsx)("li", {
                  children: r
                })
              }),
              [l.INLINES.HYPERLINK]: (s, r) => (0, n.jsx)(o.Body, {
                size: e,
                className: t,
                appearance: "hyperlink",
                asChild: !0,
                children: (0, n.jsx)("a", {
                  href: s.data.uri,
                  children: r
                })
              })
            }))(s, a), [s, a]);
          if (!e) return null;
          const g = {
            renderMark: {
              ...d,
              ...t?.renderMark
            },
            renderNode: {
              ...u,
              ...t?.renderNode
            }
          };
          return (0, i.i)(e, g)
        },
        u = ({
          block: e
        }) => e.content?.json ? (0, n.jsx)(d, {
          json: e.content.json
        }) : null,
        g = "RsgRichText"
    },
    18064: (e, t, s) => {
      "use strict";
      s.d(t, {
        a: () => c,
        A: () => d
      });
      var n = s(42295),
        r = s(62229);
      const o = ({
        typename: e
      }) => ((0, r.useEffect)(() => {}, []), null);
      var i = s(2824);
      const l = {
        [i.KI]: i.JP
      };
      var a = s(51087);
      const c = (0, r.createContext)({
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
          const i = (0, r.useContext)(a.N);
          if (! function(e) {
              return "object" == typeof e && null !== e && "__typename" in e && "string" == typeof e.__typename
            }(e) || !e.sys?.id) return null;
          const d = {
            ...l,
            ...i.customBlocks
          } [e.__typename];
          return d ? (0, n.jsx)(c.Provider, {
            value: {
              blockPosition: t
            },
            children: (0, n.jsx)(d, {
              block: e,
              ...s
            })
          }) : (0, n.jsx)(o, {
            typename: e.__typename
          })
        }
    },
    23112: () => {},
    32811: (e, t, s) => {
      "use strict";
      s.d(t, {
        f5: () => y,
        Um: () => C,
        Vz: () => b,
        js: () => m,
        KU: () => f,
        UG: () => n,
        FE: () => p,
        iu: () => a
      });
      var n = s(96498),
        r = s(89311),
        o = s(87592),
        i = s(81788),
        l = s(62229);
      const a = ({
        query: e,
        variables: t = {}
      }) => {
        const [{
          iso: s
        }] = (0, i.getLocale)(), n = {
          locale: p[s],
          ...t
        }, {
          loading: a,
          error: c,
          data: d
        } = (0, r.useQuery)(e, {
          variables: n,
          client: f(),
          errorPolicy: "all"
        });
        return (0, l.useEffect)(() => {
          if (c) {
            const t = c.networkError;
            400 !== t?.statusCode && ((0, o.addBreadcrumb)({
              category: "contentful",
              message: "Contentful Service Data Error",
              data: {
                query: e,
                data: d,
                error: c
              }
            }), (0, o.captureMessage)("Issue with Contentful Service", o.Severity.Error))
          }
        }, [c]), {
          loading: a,
          error: c,
          data: d
        }
      };
      var c = s(79958),
        d = s(62944),
        u = s(95966),
        g = s(32334);
      const {
        cms: h
      } = (0, u.getConfigForDomain)(), f = () => {
        const e = "contentful-apollo-client";
        if (!window?.[e]) {
          const t = (0, d.e)({
              sha256: g.sc
            }),
            s = new c.P({
              uri: h
            });
          window[e] = new r.ApolloClient({
            link: r.ApolloLink.from([t, s]),
            cache: new r.InMemoryCache
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
        C = function(e) {
          return e.Bottom = "BOTTOM", e.BottomLeft = "BOTTOM_LEFT", e.BottomRight = "BOTTOM_RIGHT", e.Center = "CENTER", e.Face = "FACE", e.Faces = "FACES", e.Left = "LEFT", e.Right = "RIGHT", e.Top = "TOP", e.TopLeft = "TOP_LEFT", e.TopRight = "TOP_RIGHT", e
        }({}),
        b = function(e) {
          return e.Crop = "CROP", e.Fill = "FILL", e.Fit = "FIT", e.Pad = "PAD", e.Scale = "SCALE", e.Thumb = "THUMB", e
        }({})
    },
    45614: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        BlockErrorBoundary: () => l.A,
        BlockRenderer: () => i.A,
        BlockRendererContext: () => i.a,
        PageRenderer: () => o.A,
        RsgMdTextComponent: () => n.w,
        RsgRichTextComponent: () => r.jt
      });
      var n = s(51713),
        r = s(2824),
        o = s(51087),
        i = s(18064),
        l = s(52857),
        a = s(73692),
        c = {};
      for (const e in a)["default", "RsgMdTextComponent", "RsgRichTextComponent", "PageRenderer", "BlockRenderer", "BlockRendererContext", "BlockErrorBoundary"].indexOf(e) < 0 && (c[e] = () => a[e]);
      s.d(t, c)
    },
    45881: (e, t, s) => {
      "use strict";
      s.d(t, {
        y: () => n
      });
      const n = (e, t) => {
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
        N: () => l
      });
      var n = s(42295),
        r = s(62229),
        o = s(18064),
        i = s(52857);
      const l = (0, r.createContext)({
          customBlocks: null
        }),
        a = (0, r.memo)(function({
          data: e,
          customBlocks: t,
          children: s
        }) {
          return e && e.sys?.id ? (0, n.jsxs)(l.Provider, {
            value: {
              customBlocks: t
            },
            children: [s, e.contentCollection?.items.filter(c).map((t, s) => (0, n.jsx)(i.A, {
              block: t,
              children: (0, n.jsx)(o.A, {
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
        d = a
    },
    51713: (e, t, s) => {
      "use strict";
      s.d(t, {
        w: () => l
      });
      var n = s(42295),
        r = s(62229),
        o = s(39471),
        i = s(2824);
      const l = ({
        markdown: e,
        rsgRichTextOptions: t,
        bodySize: s = "MD",
        className: l
      }) => {
        const [a, c] = (0, r.useState)();
        return (0, r.useEffect)(() => {
          (0, o.V)(e).then(e => {
            c(e)
          })
        }, [e]), a ? (0, n.jsx)(i.jt, {
          json: a,
          options: t,
          bodySize: s,
          className: l
        }) : null
      }
    },
    52857: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i
      });
      var n = s(87592),
        r = s(62229);
      class o extends r.Component {
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
          (0, n.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "Contentful Component Rendering Issue",
            data: {
              error: e,
              errorInfo: t
            }
          }), (0, n.captureMessage)("Contentful ErrorBoundary", n.Severity.Error)
        }
        render() {
          return this.state.hasError ? null : this.props.children
        }
      }
      const i = o
    },
    72463: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        ContentfulTypes: () => n,
        ImageFormat: () => i.f5,
        ImageResizeFocus: () => i.Um,
        ImageResizeStrategy: () => i.Vz,
        contentfulToRockstarLanguageMap: () => i.js,
        getClient: () => i.KU,
        graphql: () => i.UG,
        rockstarToContentfulMap: () => i.FE,
        useContentfulQuery: () => i.iu
      });
      var n = s(79142),
        r = s(45614),
        o = {};
      for (const e in r)["default", "ContentfulTypes"].indexOf(e) < 0 && (o[e] = () => r[e]);
      s.d(t, o);
      var i = s(32811)
    },
    73692: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        DEFAULT_WIDTHS: () => o._t,
        buildContentfulImageUrl: () => o.Bk,
        fallbackKey: () => n.y,
        generateSrcSet: () => o.GO,
        getFileType: () => o.ti,
        getOptimizedImage: () => o.JO,
        getOptimizedRsgImage: () => o.dK,
        getRsgImage: () => r.c,
        isVectorOrGif: () => o.Dq,
        resolveImageWithContext: () => o.Vx,
        scaleDimensions: () => o.K4,
        scaleRsgImage: () => r.k
      });
      var n = s(45881),
        r = s(79150),
        o = s(88891),
        i = s(23112),
        l = {};
      for (const e in i)["default", "fallbackKey", "getRsgImage", "scaleRsgImage", "DEFAULT_WIDTHS", "buildContentfulImageUrl", "generateSrcSet", "getFileType", "getOptimizedImage", "getOptimizedRsgImage", "isVectorOrGif", "resolveImageWithContext", "scaleDimensions"].indexOf(e) < 0 && (l[e] = () => i[e]);
      s.d(t, l)
    },
    79150: (e, t, s) => {
      "use strict";

      function n(e, t, s) {
        if (!e?.imageFilesCollection?.items) return null;
        let n = e.imageFilesCollection.items.find(e => e?.context === t);
        if (!n) {
          let s = "mobile";
          "mobile" === t && (s = "desktop"), n = e.imageFilesCollection.items.find(e => e?.context === s)
        }
        if (!n) return null;
        const {
          altText: o
        } = e;
        return (s?.height || s?.width) && (n = r(n, {
          width: s?.width,
          height: s?.height
        })), {
          altText: o,
          ...n
        }
      }

      function r(e, t) {
        if (!e.source?.width || !e.source?.height || e.source.width < 0 || e.source.height < 0 || !e.source.url) return console.warn("Original image data error"), e;
        if (t.height && t.width) return console.warn("Provide only one value to scale by"), e;
        let s = e.source.width,
          n = e.source.height;
        const r = new URL(e.source.url);
        if (t.width) {
          const o = t.width / e.source.width;
          s = t.width, n = Math.round(e.source.height * o), r.searchParams.set("w", String(s))
        } else if (t.height) {
          n = t.height;
          const o = t.height / e.source.height;
          s = Math.round(e.source.width * o), r.searchParams.set("h", String(n))
        }
        return {
          ...e,
          source: {
            ...e.source,
            url: r.toString(),
            width: s,
            height: n
          }
        }
      }
      s.d(t, {
        c: () => n,
        k: () => r
      })
    },
    88891: (e, t, s) => {
      "use strict";
      s.d(t, {
        _t: () => o._t,
        Bk: () => n.Bk,
        GO: () => o.GO,
        ti: () => n.ti,
        JO: () => o.JO,
        dK: () => l,
        Dq: () => r.D,
        Vx: () => i,
        K4: () => n.K4
      });
      var n = s(7139),
        r = s(6178),
        o = s(56678);
      const i = (e, t, s = "mobile") => {
          return "object" == typeof(n = e) && null !== n && "context" in n && "source" in n ? e.context === t ? e : null : (e => "object" == typeof e && null !== e && "imageFilesCollection" in e && !!e.imageFilesCollection?.items.length)(e) ? e?.imageFilesCollection?.items.find(e => e.context === t) ?? e?.imageFilesCollection?.items.find(e => e.context === s) ?? null : null;
          var n
        },
        l = (e, t, s = {}) => {
          const r = i(e, t);
          if (!r?.source?.url || !r?.source?.width || !r?.source?.height) return;
          const l = r.source.url;
          return s.preferModernFormat && ["jpg", "png"].includes((0, n.ti)(l)) && (s.format = "webp"), {
            ...(0, o.JO)({
              src: l,
              originalSize: {
                width: r.source.width ?? 1920,
                height: r.source.height ?? 1080
              },
              options: s
            }),
            alt: r.altText ?? ""
          }
        }
    }
  }
]);