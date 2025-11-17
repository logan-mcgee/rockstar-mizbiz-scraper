try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "894d9a8a-68d4-449d-9e23-ebc690ad558a", e._sentryDebugIdIdentifier = "sentry-dbid-894d9a8a-68d4-449d-9e23-ebc690ad558a")
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
        BlockErrorBoundary: () => w,
        BlockRenderer: () => m,
        BlockRendererContext: () => f,
        ContentfulTypes: () => r,
        DEFAULT_QUALITY: () => B,
        DEFAULT_WIDTHS: () => _,
        ImageFormat: () => W,
        ImageResizeFocus: () => V,
        ImageResizeStrategy: () => Q,
        PageRenderer: () => b,
        RsgMdTextComponent: () => h,
        RsgRichTextComponent: () => c,
        buildContentfulImageUrl: () => k,
        contentfulToRockstarLanguageMap: () => q,
        fallbackKey: () => x,
        generateSrcSet: () => L,
        getClient: () => $,
        getOptimizedImage: () => P,
        getOptimizedRsgImage: () => M,
        getRsgImage: () => T,
        graphql: () => O,
        isVectorImage: () => j,
        resolveImageWithContext: () => v,
        rockstarToContentfulMap: () => J,
        scaleDimensions: () => R,
        scaleRsgImage: () => E,
        useContentfulQuery: () => F
      });
      var r = n(79142),
        o = n(42295),
        i = n(62229),
        s = n(39471),
        a = n(39978),
        l = n(74313);
      const c = ({
          json: e,
          options: t,
          bodySize: n
        }) => {
          const s = (0, i.useMemo)(() => {
              return e = n, {
                [r.MARKS.BOLD]: t => (0, o.jsx)(a.Body, {
                  appearance: "bold",
                  size: e,
                  asChild: !0,
                  children: (0, o.jsx)("strong", {
                    children: t
                  })
                }),
                [r.MARKS.ITALIC]: t => (0, o.jsx)(a.Body, {
                  className: "zlkq940",
                  size: e,
                  asChild: !0,
                  children: (0, o.jsx)("em", {
                    children: t
                  })
                }),
                [r.MARKS.UNDERLINE]: t => (0, o.jsx)(a.Body, {
                  size: e,
                  className: "zlkq941",
                  children: t
                }),
                [r.MARKS.CODE]: e => (0, o.jsx)(a.Code, {
                  asChild: !0,
                  children: (0, o.jsx)("code", {
                    children: e
                  })
                })
              };
              var e
            }, [n]),
            c = (0, i.useMemo)(() => {
              return e = n, {
                [r.BLOCKS.PARAGRAPH]: (t, n) => (0, o.jsx)(a.Body, {
                  size: e,
                  asChild: !0,
                  children: (0, o.jsx)("p", {
                    children: n
                  })
                }),
                [r.BLOCKS.HEADING_1]: (e, t) => (0, o.jsx)(a.Heading, {
                  level: 1,
                  children: t
                }),
                [r.BLOCKS.HEADING_2]: (e, t) => (0, o.jsx)(a.Heading, {
                  level: 2,
                  children: t
                }),
                [r.BLOCKS.HEADING_3]: (e, t) => (0, o.jsx)(a.Heading, {
                  level: 3,
                  children: t
                }),
                [r.BLOCKS.HEADING_4]: (e, t) => (0, o.jsx)(a.Heading, {
                  level: 4,
                  children: t
                }),
                [r.BLOCKS.HEADING_5]: (e, t) => (0, o.jsx)(a.Heading, {
                  level: 5,
                  children: t
                }),
                [r.BLOCKS.HEADING_6]: (e, t) => (0, o.jsx)(a.Heading, {
                  level: 6,
                  children: t
                }),
                [r.BLOCKS.HR]: () => (0, o.jsx)(a.Divider, {
                  thickness: "thin"
                }),
                [r.BLOCKS.UL_LIST]: (t, n) => (0, o.jsx)(a.Body, {
                  size: e,
                  asChild: !0,
                  children: (0, o.jsx)("ul", {
                    children: n
                  })
                }),
                [r.BLOCKS.OL_LIST]: (t, n) => (0, o.jsx)(a.Body, {
                  size: e,
                  asChild: !0,
                  children: (0, o.jsx)("ol", {
                    children: n
                  })
                }),
                [r.BLOCKS.LIST_ITEM]: (t, n) => (0, o.jsx)(a.Body, {
                  size: e,
                  asChild: !0,
                  children: (0, o.jsx)("li", {
                    children: n
                  })
                }),
                [r.INLINES.HYPERLINK]: (t, n) => (0, o.jsx)(a.Body, {
                  size: e,
                  appearance: "hyperlink",
                  asChild: !0,
                  children: (0, o.jsx)("a", {
                    href: t.data.uri,
                    children: n
                  })
                })
              };
              var e
            }, [n]);
          if (!e) return null;
          const d = {
            renderMark: {
              ...s,
              ...t?.renderMark
            },
            renderNode: {
              ...c,
              ...t?.renderNode
            }
          };
          return (0, l.i)(e, d)
        },
        d = "RsgRichText",
        h = ({
          markdown: e,
          rsgRichTextOptions: t,
          bodySize: n = "MD"
        }) => {
          const [r, a] = (0, i.useState)();
          return (0, i.useEffect)(() => {
            (0, s.V)(e).then(e => {
              a(e)
            })
          }, [e]), r ? (0, o.jsx)(c, {
            json: r,
            options: t,
            bodySize: n
          }) : null
        },
        u = ({
          typename: e
        }) => ((0, i.useEffect)(() => {}, []), null),
        g = {
          [d]: ({
            block: e
          }) => e.content?.json ? (0, o.jsx)(c, {
            json: e.content.json
          }) : null
        },
        f = (0, i.createContext)({
          parentIds: null,
          sectionImpressionData: {
            totalBlocks: 0,
            blockIndex: 0
          }
        }),
        m = ({
          block: e,
          parentIds: t = [],
          sectionImpressionData: n,
          ...r
        }) => {
          const s = (0, i.useContext)(C);
          if (! function(e) {
              return "object" == typeof e && null !== e && "__typename" in e && "string" == typeof e.__typename
            }(e) || !e.sys?.id) return null;
          const a = [...t, `${e.sys.id}:${e.__typename}`].filter(Boolean),
            l = {
              ...g,
              ...s.customBlocks
            } [e.__typename];
          return l ? (0, o.jsx)(f.Provider, {
            value: {
              parentIds: a,
              sectionImpressionData: n
            },
            children: (0, o.jsx)(l, {
              block: e,
              ...r
            })
          }) : (0, o.jsx)(u, {
            typename: e.__typename
          })
        };
      var p = n(87592);
      class y extends i.Component {
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
          (0, p.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "Contentful Component Rendering Issue",
            data: {
              error: e,
              errorInfo: t
            }
          }), (0, p.captureMessage)("Contentful ErrorBoundary", p.Severity.Error)
        }
        render() {
          return this.state.hasError ? null : this.props.children
        }
      }
      const w = y,
        C = (0, i.createContext)({
          customBlocks: null
        }),
        S = (0, i.memo)(function({
          data: e,
          customBlocks: t,
          children: n
        }) {
          return e && e.sys?.id ? (0, o.jsxs)(C.Provider, {
            value: {
              customBlocks: t
            },
            children: [n, e.contentCollection?.items.filter(I).map((t, n) => (0, o.jsx)(w, {
              block: t,
              children: (0, o.jsx)(m, {
                block: t,
                parentIds: [`${e.sys?.id}:${e.__typename}:${e.slug}`],
                sectionImpressionData: {
                  blockIndex: n + 1,
                  totalBlocks: e.contentCollection?.items.length ?? 0
                }
              })
            }, t.sys.id))]
          }) : null
        }),
        I = e => !!e.sys?.id,
        b = S,
        x = (e, t) => {
          const n = (e => {
            let t = 0;
            for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
            return (t >>> 0).toString(36).padStart(7, "0")
          })(JSON.stringify(e));
          return void 0 !== t ? `${n}-${t}` : n
        };

      function T(e, t, n) {
        if (!e?.imageFilesCollection?.items) return null;
        let r = e.imageFilesCollection.items.find(e => e?.context === t);
        if (!r) {
          let n = "mobile";
          "mobile" === t && (n = "desktop"), r = e.imageFilesCollection.items.find(e => e?.context === n)
        }
        if (!r) return null;
        const {
          altText: o
        } = e;
        return (n?.height || n?.width) && (r = E(r, {
          width: n?.width,
          height: n?.height
        })), {
          altText: o,
          ...r
        }
      }

      function E(e, t) {
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
      const k = (e, t = {}) => {
          const n = new URL(e);
          return t.width && n.searchParams.set("w", String(t.width)), t.height && n.searchParams.set("h", String(t.height)), t.quality && n.searchParams.set("q", String(t.quality)), t.format && n.searchParams.set("fm", String(t.format)), t.fit && n.searchParams.set("fit", String(t.fit)), n.toString()
        },
        R = (e, t) => {
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
        j = e => {
          const t = e.split("?")[0];
          return /\.(svg)$/i.test(t)
        },
        B = 75,
        _ = [320, 400, 480, 620, 768, 900, 1024, 1280, 1440, 1640, 1920, 2e3, 2560, 3840],
        L = (e, t = _, n = {}) => t.map(t => `${k(e,{...n,width:t})} ${t}w`).join(", "),
        P = ({
          src: e,
          originalSize: t,
          options: n = {},
          widths: r = _
        }) => {
          if (!e || !t?.width || !t?.height) return null;
          const o = R(t, n),
            i = k(e, {
              ...n,
              ...R
            }),
            s = j(i) ? void 0 : L(e, r, n);
          return {
            url: i,
            width: o.width,
            height: o.height,
            srcSet: s
          }
        },
        v = (e, t, n = "mobile") => {
          return "object" == typeof(r = e) && null !== r && "context" in r && "source" in r ? e.context === t ? e : null : (e => "object" == typeof e && null !== e && "imageFilesCollection" in e && !!e.imageFilesCollection?.items.length)(e) ? e?.imageFilesCollection?.items.find(e => e.context === t) ?? e?.imageFilesCollection?.items.find(e => e.context === n) ?? null : null;
          var r
        },
        M = (e, t, n = {}) => {
          const r = v(e, t);
          if (r?.source?.url && r?.source?.width && r?.source?.height) return P({
            src: r.source.url,
            originalSize: {
              width: r.source.width,
              height: r.source.height
            },
            options: n
          })
        };
      var O = n(96498),
        D = n(89311),
        A = n(81788);
      const F = ({
        query: e,
        variables: t = {}
      }) => {
        const [{
          iso: n
        }] = (0, A.getLocale)(), r = {
          locale: J[n],
          ...t
        }, {
          loading: o,
          error: s,
          data: a
        } = (0, D.useQuery)(e, {
          variables: r,
          client: $(),
          errorPolicy: "all"
        });
        return (0, i.useEffect)(() => {
          if (s) {
            const t = s.networkError;
            400 !== t?.statusCode && ((0, p.addBreadcrumb)({
              category: "contentful",
              message: "Contentful Service Data Error",
              data: {
                query: e,
                data: a,
                error: s
              }
            }), (0, p.captureMessage)("Issue with Contentful Service", p.Severity.Error))
          }
        }, [s]), {
          loading: o,
          error: s,
          data: a
        }
      };
      var z = n(79958),
        H = n(62944),
        N = n(95966),
        K = n(32334);
      const {
        cms: G
      } = (0, N.getConfigForDomain)(), U = "contentful-apollo-client", $ = () => {
        if (!window?.[U]) {
          const e = (0, H.e)({
              sha256: K.sc
            }),
            t = new z.P({
              uri: G
            });
          window[U] = new D.ApolloClient({
            link: D.ApolloLink.from([e, t]),
            cache: new D.InMemoryCache
          })
        }
        return window[U]
      }, q = {
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
      }, J = Object.entries(q).reduce((e, [t, n]) => ({
        ...e,
        [n]: t
      }), {});
      var W = function(e) {
          return e.Avif = "AVIF", e.Jpg = "JPG", e.JpgProgressive = "JPG_PROGRESSIVE", e.Png = "PNG", e.Png8 = "PNG8", e.Webp = "WEBP", e
        }({}),
        V = function(e) {
          return e.Bottom = "BOTTOM", e.BottomLeft = "BOTTOM_LEFT", e.BottomRight = "BOTTOM_RIGHT", e.Center = "CENTER", e.Face = "FACE", e.Faces = "FACES", e.Left = "LEFT", e.Right = "RIGHT", e.Top = "TOP", e.TopLeft = "TOP_LEFT", e.TopRight = "TOP_RIGHT", e
        }({}),
        Q = function(e) {
          return e.Crop = "CROP", e.Fill = "FILL", e.Fit = "FIT", e.Pad = "PAD", e.Scale = "SCALE", e.Thumb = "THUMB", e
        }({})
    }
  }
]);