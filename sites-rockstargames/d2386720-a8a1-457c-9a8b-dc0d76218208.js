! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "d2386720-a8a1-457c-9a8b-dc0d76218208", n._sentryDebugIdIdentifier = "sentry-dbid-d2386720-a8a1-457c-9a8b-dc0d76218208")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [40], {
    65317: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => A
      });
      var t = e(62229),
        r = e(53178),
        i = e.n(r),
        o = e(27835),
        s = e.n(o),
        d = e(17529),
        l = e.n(d),
        m = e(72162),
        c = e.n(m),
        g = e(82510),
        f = e.n(g),
        h = e(90675),
        p = e.n(h),
        u = e(39460),
        b = {};
      b.styleTagTransform = p(), b.setAttributes = c(), b.insert = l().bind(null, "head"), b.domAPI = s(), b.insertStyleElement = f(), i()(u.A, b);
      const v = u.A && u.A.locals ? u.A.locals : void 0;
      var x = e(73855);
      class w extends t.Component {
        constructor(n) {
          super(n), this.state = {
            header: n.header ?? null,
            hidden: n.hidden ?? !1
          }
        }
        static getDerivedStateFromError(n) {
          return {
            error: {
              message: n.message ?? n.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, x.jsxs)("div", {
            className: v.errorMsg,
            children: [(0, x.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, x.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const A = function(n) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(t) {
          return (0, x.jsx)(w, {
            header: a,
            hidden: e,
            children: (0, x.jsx)(n, {
              ...t
            })
          })
        }
      }
    },
    10040: (n, a, e) => {
      "use strict";
      e.r(a), e.d(a, {
        default: () => I
      });
      var t = e(62229),
        r = e(92440),
        i = e(95966),
        o = e(65317),
        s = e(53169),
        d = e(53178),
        l = e.n(d),
        m = e(27835),
        c = e.n(m),
        g = e(17529),
        f = e.n(g),
        h = e(72162),
        p = e.n(h),
        u = e(82510),
        b = e.n(u),
        v = e(90675),
        x = e.n(v),
        w = e(97047),
        A = {};
      A.styleTagTransform = x(), A.setAttributes = p(), A.insert = f().bind(null, "head"), A.domAPI = c(), A.insertStyleElement = b(), l()(w.A, A);
      const k = w.A && w.A.locals ? w.A.locals : void 0;
      var y = e(73855);
      const C = (0, o.A)((n => {
        let {
          componentsForTinaParser: a,
          root: e,
          url: o,
          setBrand: d
        } = n;
        const {
          data: l
        } = (0, i.useQuery)(s.MetaUrlInfo, {
          variables: {
            url: o
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), [m, c] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          const n = l?.metaUrlInfo?.tina ?? null,
            a = n?.payload?.meta?.brand ?? null;
          a && d?.(a), n && c(n)
        }), [l]), m ? (0, y.jsx)("div", {
          "data-root": e,
          className: k.root,
          children: (0, y.jsx)(r.TinaParser, {
            components: a,
            tina: m
          })
        }) : null
      }));
      var z = e(94057);
      const I = () => (0, y.jsx)(C, {
        componentsForTinaParser: z.componentsForTinaParser,
        root: "/",
        url: "/refund-policy"
      })
    },
    97047: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => w
      });
      var t = e(42587),
        r = e.n(t),
        i = e(15081),
        o = e.n(i),
        s = e(79908),
        d = e.n(s),
        l = new URL(e(30860), e.b),
        m = new URL(e(9348), e.b),
        c = new URL(e(33548), e.b),
        g = new URL(e(98820), e.b),
        f = new URL(e(25828), e.b),
        h = o()(r()),
        p = d()(l),
        u = d()(m),
        b = d()(c),
        v = d()(g),
        x = d()(f);
      h.push([n.id, `.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"]{--text-overlay-title-font:var(--gta-font-family-h)!important;--text-overlay-text-transform:none!important;--callout-section-header-font:var(--gta-font-family-h)!important;--callout-section-header-text-transform:none!important;--callout-section-subheader-text-transform:none!important}@font-face{font-family:ITCMachine;font-style:normal;font-weight:400;src:url(${p}) format("woff")}@font-face{font-family:ITCMachine;font-style:normal;font-weight:700;src:url(${u}) format("woff")}@font-face{font-family:ITCMachineCyr;font-style:normal;font-weight:400;src:url(${b}) format("woff")}@font-face{font-family:ITCMachineCyr;font-style:normal;font-weight:700;src:url(${v}) format("woff")}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"],.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"]{--gold-9998:#f4c220;--theme-header-fonts:"ITCMachineCyr",CorporateW05,ChaletComprime,NeueHelveticaW05,NotoSansJP,NotoSansSC,NotoSansTC,Helvetica,Arial,sans-serif;--badge-text-color:var(--black-200,#000);--badge-background:var(--gold-9998);--badge-margin:1rem;background-image:url(${x});background-position:top;background-repeat:repeat;background-size:contain}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] .rockstargames-sites-rockstargamesa10cad39de8d5de18b950bef6e5a139e,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] [data-context=discounts] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] h3,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] .rockstargames-sites-rockstargamesa10cad39de8d5de18b950bef6e5a139e,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] [data-context=discounts] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] h3{--color-h-dynamic:var(--gold-9998);font-family:var(--theme-header-fonts);font-weight:400;text-transform:uppercase}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] [data-context=discounts] h3,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] [data-context=discounts] h3{font-family:var(--theme-header-fonts)}@media (min-width:1024px){.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] [data-context=parallax-wrapper],.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] [data-context=parallax-wrapper]{height:55vh}}@media (min-width:2350px){.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9998"] [data-context=parallax-wrapper],.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9998"] [data-context=parallax-wrapper]{height:60vh}}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9997"] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9997"] h2,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9997"] h3,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9997"] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9997"] h2,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9997"] h3{-webkit-text-fill-color:transparent;background:linear-gradient(75.23deg,#94979a 3.33%,#94979a 14.64%,#c4c5ca 26.9%,#c4c5ca 31.62%,#c4c5ca 38.02%,#acafb2 58.02%,#b4b9bd 68.96%,#94979a 97.62%);-webkit-background-clip:text}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9996"] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9996"] h2,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9996"] h3,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9996"] h1,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9996"] h2,.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9996"] h3{--font-family-h:RDRUltraHeadline;--font-weight-h:400}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9996"] :lang(pl_pl),.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] [data-theme="9996"] :lang(ru_ru),.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9996"] :lang(pl_pl),.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"][data-theme="9996"] :lang(ru_ru){--font-family-h:Impact!important;--text-transform-h1:uppercase;--text-transform-newswire-subtitle:uppercase}.rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f[data-root="/gta-plus"] [data-theme="9998"] h2{--color-h:var(--gold-9998);--color-h-dynamic:var(--gold-9998);--claim-countdown-left-color:#fff!important;--claim-countdown-right-color:var(--gold-9998);font-family:var(--theme-header-fonts);font-weight:400;text-transform:uppercase}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/TinaPayloadRenderByURL/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/themes/9998/index.less", "webpack://./../../buildtime/legacy-design-system/themes/9997/index.less", "webpack://./../../buildtime/legacy-design-system/themes/9996/index.less"],
        names: [],
        mappings: "AACI,8GAIQ,4DAAA,CACA,4CAAA,CACA,gEAAA,CACA,sDAAA,CACA,yDA4BZ,CCscI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDpcR,CCgcI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD9bR,CC0bI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDxbR,CCobI,WACI,yBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDlbR,CEtDA,mQAEI,mBAAA,CACA,6IAAA,CASA,wCAAA,CACA,mCAAA,CACA,mBAAA,CAPA,wDAAA,CACA,uBAAA,CACA,wBAAA,CACA,uBFwDJ,CElEA,stCAmBQ,kCAAA,CAFA,qCAAA,CAGA,eAAA,CAFA,wBFuER,CEzFA,2TAkCY,qCF2DZ,CC1BI,0BAAA,mUC3BQ,WF0DV,CACF,CExDQ,0BAAA,mUACI,WF4DV,CACF,CG9GA,2xBAiBQ,mCAAA,CAZA,0JAAA,CAWA,4BHwGR,CIxHA,2xBAKQ,gCAAA,CACA,mBJ2HR,CIjIA,0jBAiBQ,gCAAA,CACA,6BAAA,CACA,4CJ0HR,CA9II,iHAcY,0BAAA,CACA,kCAAA,CACA,2CAAA,CACA,8CAAA,CANA,qCAAA,CAEA,eAAA,CADA,wBA2IhB",
        sourcesContent: [".root {\n    &[data-root='/gta-plus'] {\n        [data-theme='9998'] {\n            @import '@rsgweb/legacy-design-system/themes/index.less';\n\n            --text-overlay-title-font: var(--gta-font-family-h) !important;\n            --text-overlay-text-transform: none !important;\n            --callout-section-header-font: var(--gta-font-family-h) !important;\n            --callout-section-header-text-transform: none !important;\n            --callout-section-subheader-text-transform: none !important;\n\n            h2 {\n                font-family: var(--theme-header-fonts);\n                text-transform: uppercase;\n                font-weight: 400;\n                --color-h: var(--gold-9998);\n                --color-h-dynamic: var(--gold-9998);\n                --claim-countdown-left-color: #fff !important;\n                --claim-countdown-right-color: var(--gold-9998);\n            }\n        }\n        [data-theme='9997'] {\n            @import '@rsgweb/legacy-design-system/themes/index.less';\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "@import '../../less/mixins.less';\n\n.loadFont(ITCMachine, 400, normal, ITCMachineMedium);\n.loadFont(ITCMachine, 700, normal, ITCMachineBold);\n.loadFont(ITCMachineCyr, 400, normal, ITCMachineCyrMedium);\n.loadFont(ITCMachineCyr, 700, normal, ITCMachineCyrBold);\n\n&[data-theme='9998'],\n[data-theme='9998'] {\n    --gold-9998: #f4c220;\n    --theme-header-fonts: 'ITCMachineCyr', CorporateW05, ChaletComprime,\n        NeueHelveticaW05, NotoSansJP, NotoSansSC, NotoSansTC, Helvetica, Arial,\n        sans-serif;\n\n    background-image: url('./img/9998.jpg');\n    background-position: top;\n    background-repeat: repeat;\n    background-size: contain;\n\n    --badge-text-color: var(--black-200, #000);\n    --badge-background: var(--gold-9998);\n    --badge-margin: 1rem;\n\n    .golden-text {\n        font-family: var(--theme-header-fonts);\n        text-transform: uppercase;\n        --color-h-dynamic: var(--gold-9998);\n        font-weight: 400;\n    }\n\n    h1,\n    h3 {\n        .golden-text();\n    }\n\n    [data-context='discounts'] {\n        h1 {\n            .golden-text();\n        }\n\n        h3 {\n            font-family: var(--theme-header-fonts);\n        }\n    }\n\n    [data-context='parallax-wrapper'] {\n        .lg({\n            height: 55vh;\n        });\n\n        @media (min-width: 2350px) {\n            height: 60vh;\n        }\n    }\n}\n", "@import '../../less/mixins.less';\n\n&[data-theme='9997'],\n[data-theme='9997'] {\n    h1,\n    h2,\n    h3 {\n        background: linear-gradient(\n            75.23deg,\n            #94979a 3.33%,\n            #94979a 14.64%,\n            #c4c5ca 26.9%,\n            #c4c5ca 31.62%,\n            #c4c5ca 38.02%,\n            #acafb2 58.02%,\n            #b4b9bd 68.96%,\n            #94979a 97.62%\n        );\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n}\n", "@import '../../less/mixins.less';\n\n&[data-theme='9996'],\n[data-theme='9996'] {\n    h1,\n    h2,\n    h3 {\n        --font-family-h: RDRUltraHeadline;\n        --font-weight-h: 400;\n    }\n\n    // Polish\n    :lang(pl_pl) {\n        --font-family-h: Impact !important; // override default Polish header font\n        --text-transform-h1: uppercase;\n        --text-transform-newswire-subtitle: uppercase;\n    }\n    // Russian\n    :lang(ru_ru) {\n        --font-family-h: Impact !important; // override default Russian header font\n        --text-transform-h1: uppercase;\n        --text-transform-newswire-subtitle: uppercase;\n    }\n}\n"],
        sourceRoot: ""
      }]), h.locals = {
        root: "rockstargames-sites-rockstargamesb682ae1b0f926c7f6b70f0415bef334f",
        "golden-text": "rockstargames-sites-rockstargamesa10cad39de8d5de18b950bef6e5a139e"
      };
      const w = h
    },
    39460: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => s
      });
      var t = e(42587),
        r = e.n(t),
        i = e(15081),
        o = e.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b{grid-gap:1rem;align-content:center;background:#000;display:grid;grid-auto-rows:max-content;height:100%;justify-items:center;padding:.5rem}.rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b,.rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b h1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/ErrorBoundarySimple/index.less"],
        names: [],
        mappings: "AAAA,mEAQI,aAAA,CAFA,oBAAA,CAHA,eAAA,CAEA,YAAA,CAIA,0BAAA,CARA,WAAA,CAMA,oBAAA,CALA,aAQJ,CAVA,yIAII,UASJ",
        sourcesContent: [".errorMsg {\n    height: 100%;\n    padding: 0.5rem;\n    background: black;\n    color: white;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    grid-auto-rows: max-content;\n    h1 {\n        color: white;\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        errorMsg: "rockstargames-sites-rockstargamesd5c408a8b618087ef4bb452f96526b2b"
      };
      const s = o
    },
    53169: n => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
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
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
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
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
                  }
                }
              }, {
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
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
                    value: "url"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "keywords"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 323
        }
      };

      function e(n, a) {
        if ("FragmentSpread" === n.kind) a.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var t = n.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          e(n, a)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          e(n, a)
        })), n.definitions && n.definitions.forEach((function(n) {
          e(n, a)
        }))
      }
      a.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(n, a) {
        for (var e = 0; e < n.definitions.length; e++) {
          var t = n.definitions[e];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(n) {
        if (n.name) {
          var a = new Set;
          e(n, a), t[n.name.value] = a
        }
      })), n.exports = a, n.exports.MetaUrlInfo = function(n, a) {
        var e = {
          kind: n.kind,
          definitions: [r(n, a)]
        };
        n.hasOwnProperty("loc") && (e.loc = n.loc);
        var i = t[a] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(n) {
            s.add(n)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(n) {
            o.has(n) || (o.add(n), (t[n] || new Set).forEach((function(n) {
              s.add(n)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = r(n, a);
          t && e.definitions.push(t)
        })), e
      }(a, "MetaUrlInfo")
    },
    9348: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/19c1282af6518115a47ce33574933452.woff"
    },
    98820: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0d54f0bec90d46ed006fe854aeb4e142.woff"
    },
    33548: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/833df8714c622b68b15fc955690d73a0.woff"
    },
    30860: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e2bc5e1de875d695135d15db92a6e7a1.woff"
    },
    25828: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/84fd9d5fdcee26ee997e1aa122d2f748.jpg"
    }
  }
]);