try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8cf47a32-938d-40ef-a5f8-fb4c1457e860", e._sentryDebugIdIdentifier = "sentry-dbid-8cf47a32-938d-40ef-a5f8-fb4c1457e860")
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
  [8706], {
    28706: (e, t, n) => {
      n.r(t), n.d(t, {
        BlockErrorBoundary: () => S,
        BlockRenderer: () => w,
        BlockRendererContext: () => y,
        ContentfulTypes: () => o,
        DEFAULT_QUALITY: () => P,
        DEFAULT_WIDTHS: () => v,
        ImageFormat: () => Y,
        ImageResizeFocus: () => X,
        ImageResizeStrategy: () => Z,
        PageRenderer: () => E,
        RsgMdTextComponent: () => f,
        RsgRichTextComponent: () => u,
        buildContentfulImageUrl: () => B,
        contentfulToRockstarLanguageMap: () => V,
        fallbackKey: () => k,
        generateSrcSet: () => O,
        getClient: () => W,
        getOptimizedImage: () => M,
        getOptimizedRsgImage: () => A,
        getRsgImage: () => R,
        graphql: () => F,
        isVectorImage: () => L,
        resolveImageWithContext: () => D,
        rockstarToContentfulMap: () => Q,
        scaleDimensions: () => _,
        scaleRsgImage: () => j,
        useContentfulQuery: () => K
      });
      var r = n(20766),
        o = n.t(r, 2),
        i = n(42295),
        s = n(62229),
        l = n(39471),
        a = n(327),
        c = n(74313);
      const d = {
          [r.MARKS.BOLD]: e => (0, i.jsx)(a.Body, {
            appearance: "bold",
            asChild: !0,
            children: (0, i.jsx)("strong", {
              children: e
            })
          }),
          [r.MARKS.ITALIC]: e => (0, i.jsx)(a.Body, {
            className: "zlkq940",
            asChild: !0,
            children: (0, i.jsx)("em", {
              children: e
            })
          }),
          [r.MARKS.UNDERLINE]: e => (0, i.jsx)(a.Body, {
            className: "zlkq941",
            children: e
          }),
          [r.MARKS.CODE]: e => (0, i.jsx)(a.Code, {
            asChild: !0,
            children: (0, i.jsx)("code", {
              children: e
            })
          })
        },
        h = {
          [r.BLOCKS.PARAGRAPH]: (e, t) => (0, i.jsx)(a.Body, {
            asChild: !0,
            children: (0, i.jsx)("p", {
              children: t
            })
          }),
          [r.BLOCKS.HEADING_1]: (e, t) => (0, i.jsx)(a.Heading, {
            level: 1,
            children: t
          }),
          [r.BLOCKS.HEADING_2]: (e, t) => (0, i.jsx)(a.Heading, {
            level: 2,
            children: t
          }),
          [r.BLOCKS.HEADING_3]: (e, t) => (0, i.jsx)(a.Heading, {
            level: 3,
            children: t
          }),
          [r.BLOCKS.HEADING_4]: (e, t) => (0, i.jsx)(a.Heading, {
            level: 4,
            children: t
          }),
          [r.BLOCKS.HEADING_5]: (e, t) => (0, i.jsx)(a.Heading, {
            level: 5,
            children: t
          }),
          [r.BLOCKS.HEADING_6]: (e, t) => (0, i.jsx)(a.Heading, {
            level: 6,
            children: t
          }),
          [r.BLOCKS.HR]: () => (0, i.jsx)(a.Divider, {
            thickness: "thin"
          }),
          [r.BLOCKS.UL_LIST]: (e, t) => (0, i.jsx)(a.Body, {
            asChild: !0,
            children: (0, i.jsx)("ul", {
              children: t
            })
          }),
          [r.BLOCKS.OL_LIST]: (e, t) => (0, i.jsx)(a.Body, {
            asChild: !0,
            children: (0, i.jsx)("ol", {
              children: t
            })
          }),
          [r.BLOCKS.LIST_ITEM]: (e, t) => (0, i.jsx)(a.Body, {
            asChild: !0,
            children: (0, i.jsx)("li", {
              children: t
            })
          }),
          [r.INLINES.HYPERLINK]: (e, t) => (0, i.jsx)(a.Body, {
            appearance: "hyperlink",
            asChild: !0,
            children: (0, i.jsx)("a", {
              href: e.data.uri,
              children: t
            })
          })
        },
        u = ({
          json: e,
          options: t
        }) => {
          if (!e) return null;
          const n = {
            renderMark: {
              ...d,
              ...t?.renderMark
            },
            renderNode: {
              ...h,
              ...t?.renderNode
            }
          };
          return (0, c.i)(e, n)
        },
        g = "RsgRichText",
        f = ({
          markdown: e,
          rsgRichTextOptions: t
        }) => {
          const [n, r] = (0, s.useState)();
          return (0, s.useEffect)((() => {
            (0, l.V)(e).then((e => {
              r(e)
            }))
          }), [e]), n ? (0, i.jsx)(u, {
            json: n,
            options: t
          }) : null
        },
        m = ({
          typename: e
        }) => ((0, s.useEffect)((() => {}), []), null),
        p = {
          [g]: ({
            block: e
          }) => e.content?.json ? (0, i.jsx)(u, {
            json: e.content.json
          }) : null
        },
        y = (0, s.createContext)({
          parentIds: null,
          sectionImpressionData: {
            totalBlocks: 0,
            blockIndex: 0
          }
        }),
        w = ({
          block: e,
          parentIds: t = [],
          sectionImpressionData: n,
          ...r
        }) => {
          const o = (0, s.useContext)(x);
          if (! function(e) {
              return "object" == typeof e && null !== e && "__typename" in e && "string" == typeof e.__typename
            }(e) || !e.sys?.id) return null;
          const l = [...t, `${e.sys.id}:${e.__typename}`].filter(Boolean),
            a = {
              ...p,
              ...o.customBlocks
            } [e.__typename];
          return a ? (0, i.jsx)(y.Provider, {
            value: {
              parentIds: l,
              sectionImpressionData: n
            },
            children: (0, i.jsx)(a, {
              block: e,
              ...r
            })
          }) : (0, i.jsx)(m, {
            typename: e.__typename
          })
        };
      var C = n(87592);
      class I extends s.Component {
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
          (0, C.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "Contentful Component Rendering Issue",
            data: {
              error: e,
              errorInfo: t
            }
          }), (0, C.captureMessage)("Contentful ErrorBoundary", C.Severity.Error)
        }
        render() {
          return this.state.hasError ? null : this.props.children
        }
      }
      const S = I,
        x = (0, s.createContext)({
          customBlocks: null
        }),
        b = (0, s.memo)((function({
          data: e,
          customBlocks: t,
          children: n
        }) {
          return e && e.sys?.id ? (0, i.jsxs)(x.Provider, {
            value: {
              customBlocks: t
            },
            children: [n, e.contentCollection?.items.filter(T).map(((t, n) => (0, i.jsx)(S, {
              block: t,
              children: (0, i.jsx)(w, {
                block: t,
                parentIds: [`${e.sys?.id}:${e.__typename}:${e.slug}`],
                sectionImpressionData: {
                  blockIndex: n + 1,
                  totalBlocks: e.contentCollection?.items.length ?? 0
                }
              })
            }, t.sys.id)))]
          }) : null
        })),
        T = e => !!e.sys?.id,
        E = b,
        k = (e, t) => {
          const n = (e => {
            let t = 0;
            for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
            return (t >>> 0).toString(36).padStart(7, "0")
          })(JSON.stringify(e));
          return void 0 !== t ? `${n}-${t}` : n
        };

      function R(e, t, n) {
        if (!e?.imageFilesCollection?.items) return null;
        let r = e.imageFilesCollection.items.find((e => e?.context === t));
        if (!r) {
          let n = "mobile";
          "mobile" === t && (n = "desktop"), r = e.imageFilesCollection.items.find((e => e?.context === n))
        }
        if (!r) return null;
        const {
          altText: o
        } = e;
        return (n?.height || n?.width) && (r = j(r, {
          width: n?.width,
          height: n?.height
        })), {
          altText: o,
          ...r
        }
      }

      function j(e, t) {
        if (!e.source?.width || !e.source?.height || e.source.width < 0 || e.source.height < 0 || !e.source.url) return console.warn("Original image data error"), e;
        if (t.height && t.width) return console.warn("Provide only one value to scale by"), e;
        let n = e.source.width,
          r = e.source.height;
        const o = new URL(e.source.url);
        if (t.width) {
          const i = t.width / e.source.width;
          n = t.width, r = Math.round(e.source.height * i), o.searchParams.set("w", String(n))
        } else if (t.height) {
          r = t.height;
          const i = t.height / e.source.height;
          n = Math.round(e.source.width * i), o.searchParams.set("h", String(r))
        }
        return {
          ...e,
          source: {
            ...e.source,
            url: o.toString(),
            width: n,
            height: r
          }
        }
      }
      const B = (e, t = {}) => {
          const n = new URL(e);
          return t.width && n.searchParams.set("w", String(t.width)), t.height && n.searchParams.set("h", String(t.height)), t.quality && n.searchParams.set("q", String(t.quality)), t.format && n.searchParams.set("fm", String(t.format)), t.fit && n.searchParams.set("fit", String(t.fit)), n.toString()
        },
        _ = (e, t) => {
          const {
            width: n,
            height: r
          } = e;
          if (t.width && t.height) return console.warn("Provide only one scaling dimension (width OR height)"), e;
          if (t.width) {
            const e = t.width / n;
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
        L = e => {
          const t = e.split("?")[0];
          return /\.(svg)$/i.test(t)
        },
        P = 75,
        v = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        O = (e, t = v, n = {}) => t.map((t => `${B(e,{...n,width:t})} ${t}w`)).join(", "),
        M = ({
          src: e,
          originalSize: t,
          options: n = {},
          widths: r = v
        }) => {
          if (!e || !t?.width || !t?.height) return null;
          const o = _(t, n),
            i = B(e, {
              ...n,
              ..._
            }),
            s = L(i) ? void 0 : O(e, r, n);
          return {
            url: i,
            width: o.width,
            height: o.height,
            srcSet: s
          }
        },
        D = (e, t, n = "mobile") => {
          return "object" == typeof(r = e) && null !== r && "context" in r && "source" in r ? e.context === t ? e : null : (e => "object" == typeof e && null !== e && "imageFilesCollection" in e && !!e.imageFilesCollection?.items.length)(e) ? e?.imageFilesCollection?.items.find((e => e.context === t)) ?? e?.imageFilesCollection?.items.find((e => e.context === n)) ?? null : null;
          var r
        },
        A = (e, t, n = {}) => {
          const r = D(e, t);
          if (r?.source?.url && r?.source?.width && r?.source?.height) return M({
            src: r.source.url,
            originalSize: {
              width: r.source.width,
              height: r.source.height
            },
            options: n
          })
        };
      var F = n(96498),
        H = n(89311),
        N = n(81788);
      const K = ({
        query: e,
        variables: t = {}
      }) => {
        const [{
          iso: n
        }] = (0, N.getLocale)(), r = {
          locale: Q[n],
          ...t
        }, {
          loading: o,
          error: i,
          data: l
        } = (0, H.useQuery)(e, {
          variables: r,
          client: W(),
          errorPolicy: "all"
        });
        return (0, s.useEffect)((() => {
          if (i) {
            const t = i.networkError;
            400 !== t?.statusCode && ((0, C.addBreadcrumb)({
              category: "contentful",
              message: "Contentful Service Data Error",
              data: {
                query: e,
                data: l,
                error: i
              }
            }), (0, C.captureMessage)("Issue with Contentful Service", C.Severity.Error))
          }
        }), [i]), {
          loading: o,
          error: i,
          data: l
        }
      };
      var G = n(79958),
        U = n(62944),
        z = n(95966),
        $ = n(32334);
      const {
        cms: q
      } = (0, z.getConfigForDomain)(), J = "contentful-apollo-client", W = () => {
        if (!window?.[J]) {
          const e = (0, U.e)({
              sha256: $.sc
            }),
            t = new G.P({
              uri: q
            });
          window[J] = new H.ApolloClient({
            link: H.ApolloLink.from([e, t]),
            cache: new H.InMemoryCache
          })
        }
        return window[J]
      }, V = {
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
      }, Q = Object.entries(V).reduce(((e, [t, n]) => ({
        ...e,
        [n]: t
      })), {});
      var Y = function(e) {
          return e.Avif = "AVIF", e.Jpg = "JPG", e.JpgProgressive = "JPG_PROGRESSIVE", e.Png = "PNG", e.Png8 = "PNG8", e.Webp = "WEBP", e
        }({}),
        X = function(e) {
          return e.Bottom = "BOTTOM", e.BottomLeft = "BOTTOM_LEFT", e.BottomRight = "BOTTOM_RIGHT", e.Center = "CENTER", e.Face = "FACE", e.Faces = "FACES", e.Left = "LEFT", e.Right = "RIGHT", e.Top = "TOP", e.TopLeft = "TOP_LEFT", e.TopRight = "TOP_RIGHT", e
        }({}),
        Z = function(e) {
          return e.Crop = "CROP", e.Fill = "FILL", e.Fit = "FIT", e.Pad = "PAD", e.Scale = "SCALE", e.Thumb = "THUMB", e
        }({})
    }
  }
]);