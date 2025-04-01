! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "94b41cfe-c018-4331-a337-b05bb6730479", n._sentryDebugIdIdentifier = "sentry-dbid-94b41cfe-c018-4331-a337-b05bb6730479")
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
  [5881], {
    75881: (n, a, e) => {
      e.d(a, {
        A: () => D
      });
      var t = e(62229),
        r = e(23205),
        i = e(10403),
        o = e(27057),
        s = e(2918),
        d = e(95966),
        l = e(81788);
      const c = (0, l.defineMessages)({
        next_button_label: {
          id: "next_button_label",
          defaultMessage: "Next video page"
        },
        previous_button_label: {
          id: "previous_button_label",
          defaultMessage: "Previous video page"
        }
      });
      var g = e(55981),
        m = e(53178),
        p = e.n(m),
        f = e(27835),
        h = e.n(f),
        b = e(17529),
        u = e.n(b),
        v = e(72162),
        x = e.n(v),
        w = e(82510),
        A = e.n(w),
        k = e(90675),
        y = e.n(k),
        C = e(96694),
        z = {};
      z.styleTagTransform = y(), z.setAttributes = x(), z.insert = u().bind(null, "head"), z.domAPI = h(), z.insertStyleElement = A(), p()(C.A, z);
      const B = C.A && C.A.locals ? C.A.locals : void 0;
      var _ = e(94997),
        M = e(73855);
      const D = (0, _.g)((n => {
        let {
          vids: a,
          games: e,
          title: m,
          gameTitleNecessary: p
        } = n;
        const f = (0, l.useIntl)(),
          {
            track: h
          } = (0, s.useGtmTrack)(),
          b = void 0 !== e ? "games" : "videos",
          [u, v] = (0, t.useState)(),
          [x, w] = (0, t.useState)(),
          [A, k] = (0, t.useState)(0),
          y = (0, t.useRef)(null),
          C = (0, t.useRef)(null);
        (0, t.useEffect)((() => {
          w({
            nextEl: C.current,
            prevEl: y.current
          })
        }), [C, y]), (0, t.useEffect)((() => {
          const n = () => {
            const n = n => window.matchMedia(`(max-width: ${n})`).matches;
            let a = 4;
            n("768px") ? a = 1 : n("990px") || n("1440px") ? a = 2.2 : n("1920px") && (a = 3.2), k(a)
          };
          return window.addEventListener("resize", n), n(), () => {
            window.removeEventListener("resize", n)
          }
        }), [A]);
        const z = n => {
          u?.slideTo(n)
        };
        let _;
        return _ = "games" === b ? (0, M.jsx)(M.Fragment, {
          children: e.results.map(((n, a) => "775700as" !== n.id && (0, M.jsx)(r.qr, {
            className: B.slide,
            onFocus: () => z(a),
            children: (0, M.jsx)(g.N, {
              game: n,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${n.id}`
            })
          }, n.id)))
        }) : (0, M.jsx)(M.Fragment, {
          children: a.map(((n, a) => (0, M.jsx)(r.qr, {
            className: B.slide,
            onFocus: () => z(a),
            children: (0, M.jsx)(o.N, {
              video: n,
              gameTitleNecessary: p
            })
          }, n.id)))
        }), (0, M.jsxs)("section", {
          className: B.videoList,
          children: [(0, M.jsxs)("h3", {
            className: B.sectionHeader,
            children: [m, (0, M.jsxs)("div", {
              className: B.arrowNav,
              children: [(0, M.jsx)("button", {
                className: [B.arrow, B.previous].join(" "),
                type: "button",
                ref: y,
                "aria-label": f.formatMessage(c.previous_button_label)
              }), (0, M.jsx)("button", {
                className: [B.arrow, B.next].join(" "),
                type: "button",
                ref: C,
                "aria-label": f.formatMessage(c.next_button_label),
                onKeyDown: n => {
                  if ("Tab" === n.key && !n.shiftKey) {
                    const a = u?.slides[u?.activeIndex].querySelector('a, button, [role="button"]');
                    a && (n.preventDefault(), a.focus())
                  }
                }
              })]
            })]
          }), (0, M.jsx)("div", {
            className: [B.items, A % 1 != 0 ? B.partial : ""].join(" "),
            children: (0, M.jsx)("div", {
              className: B.trackWrapper,
              children: A && (0, M.jsx)(r.RC, {
                className: B.track,
                slidesPerView: A,
                spaceBetween: 24,
                onInit: n => {
                  v(n)
                },
                grabCursor: !0,
                navigation: x,
                modules: [i.Vx],
                slideClass: (0, d.classList)("swiper-slide"),
                onSlideNextTransitionEnd: () => {
                  h({
                    event: "carousel_next",
                    element_placement: m?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  h({
                    event: "carousel_previous",
                    element_placement: m?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  h({
                    event: "carousel_swipe",
                    element_placement: m?.toLowerCase() ?? ""
                  })
                },
                children: _
              })
            })
          })]
        })
      }))
    },
    96694: (n, a, e) => {
      e.d(a, {
        A: () => f
      });
      var t = e(42587),
        r = e.n(t),
        i = e(15081),
        o = e.n(i),
        s = e(79908),
        d = e.n(s),
        l = new URL(e(53658), e.b),
        c = new URL(e(46891), e.b),
        g = o()(r()),
        m = d()(l),
        p = d()(c);
      g.push([n.id, `.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5{display:flex;flex-flow:column;padding:var(--padding-top-bottom) 0}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .swiper{overflow:visible;width:100%;z-index:unset}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .swiper-wrapper{display:grid;grid-auto-flow:column;height:auto;justify-content:flex-start;z-index:unset}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .swiper-slide{padding:3px}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .swiper-button-disabled{opacity:.15;pointer-events:none}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .swiper-button-lock{display:none}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201{--line-height-h:1.3;grid-gap:var(--grid-gap-static-sm);display:flex;font-family:var(--font-family-h);font-size:var(--font-size-5);font-size:var(--font-size-4);font-weight:var(--font-weight-h);justify-content:space-between;margin:0 0 1.5rem}@media (min-width:1920px){.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201{font-size:var(--font-size-6);font-size:var(--font-size-5)}}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesc9b73b78d75dd740e918208a9d615796{grid-gap:var(--grid-gap-static-sm);display:flex}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9{display:flex;position:relative}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9 .rockstargames-sites-rockstargamesbd79ab04bc93e3bcf79be808e0a06e9b{flex:0 1 auto;overflow:hidden;width:100%}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9.rockstargames-sites-rockstargamesab95829b388545f21071fd5bb97c25bb{margin-right:0}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesa4d3877b3cf6bff0abccdc561c0fe149{grid-column-gap:var(--standard-grid-gap);display:grid;grid-auto-flow:column;transition:transform .3s}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad{background-color:var(--black-200);background-position:50%;background-repeat:no-repeat;background-size:100% auto;border:none;flex:0 0 auto;transition:opacity .3s;width:calc(var(--base-pixel-size) * 2.5);z-index:5}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad:hover{cursor:pointer}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad.rockstargames-sites-rockstargamesd7404262ef1f79bde0883b02110a4a5d{background-image:url(${m})}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad.rockstargames-sites-rockstargamesbfdf85a5867d26b52a0962be91170e36{background-image:url(${p})}.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad.rockstargames-sites-rockstargamesdbe1b06efadb349825f7b9b1b2778c68{opacity:.25}@media (min-width:1920px){.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5{margin:0 auto;max-width:var(--max-width);padding-left:var(--padding-sides);padding-right:var(--padding-sides);width:100%}}@media (max-width:1919px){.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9,.rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5 .rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201{margin-left:var(--padding-sides);margin-right:var(--padding-sides)}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/videos/List/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,mEC6SI,YAAA,CACA,gBAAA,CD5SA,mCA+BJ,CAjCA,2EAQY,gBAAA,CAFA,UAAA,CACA,aA+BZ,CAtCA,mFAYY,YAAA,CACA,qBAAA,CACA,WAAA,CACA,0BAAA,CACA,aA6BZ,CA7CA,iFAmBY,WA6BZ,CAhDA,2FAwBY,WAAA,CADA,mBA6BZ,CApDA,uFA4BY,YA2BZ,CAvDA,sICkvBI,mBAAA,CD9sBI,kCAAA,CAFA,YAAA,CC8sBJ,gCAAA,CADA,4BAAA,CAWA,4BAAA,CATA,gCAAA,CD9sBI,6BAAA,CC2sBJ,iBD5qBJ,CCwBI,0BAAA,sIA2pBI,4BAAA,CAQA,4BDvrBN,CACF,CAvEA,sIAwCQ,kCAAA,CADA,YAyCR,CAhFA,sIA4CQ,YAAA,CADA,iBAyCR,CApFA,yMA+CY,aAAA,CACA,eAAA,CACA,UAwCZ,CArCQ,wMACI,cAuCZ,CA5FA,sIA4DQ,wCAAA,CAHA,YAAA,CACA,qBAAA,CACA,wBAuCR,CAlGA,sIAsEQ,iCAAA,CADA,uBAAA,CAFA,2BAAA,CACA,yBAAA,CAGA,WAAA,CANA,aAAA,CADA,sBAAA,CADA,wCAAA,CAGA,SA2CR,CApCQ,4IACI,cAsCZ,CApCQ,wMACI,wDAsCZ,CApCQ,wMACI,wDAsCZ,CApCQ,wMACI,WAsCZ,CC/BI,0BAAA,mEA8SA,aAAA,CAFA,0BAAA,CAGA,iCAAA,CACA,kCAAA,CAHA,UDtQF,CACF,CCrDI,0BAAA,4QDiBQ,gCAAA,CACA,iCAyCV,CACF",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.videoList {\n    .flex;\n    padding: var(--padding-top-bottom) 0;\n\n    :global {\n        .swiper {\n            width: 100%;\n            z-index: unset;\n            overflow: visible;\n        }\n\n        .swiper-wrapper {\n            display: grid;\n            grid-auto-flow: column;\n            height: auto;\n            justify-content: flex-start;\n            z-index: unset;\n        }\n        .swiper-slide {\n            padding: 3px;\n        }\n\n        .swiper-button-disabled {\n            pointer-events: none;\n            opacity: 0.15;\n        }\n\n        .swiper-button-lock {\n            display: none;\n        }\n    }\n\n    .sectionHeader {\n        .sectionHeaderSmall;\n        display: flex;\n        justify-content: space-between;\n        grid-gap: var(--grid-gap-static-sm);\n    }\n    .arrowNav {\n        display: flex;\n        grid-gap: var(--grid-gap-static-sm);\n    }\n    .items {\n        position: relative;\n        display: flex;\n\n        .trackWrapper {\n            flex: 0 1 auto;\n            overflow: hidden;\n            width: 100%;\n        }\n\n        &.partial {\n            margin-right: 0;\n        }\n    }\n    .track {\n        display: grid;\n        grid-auto-flow: column;\n        transition: transform 0.3s;\n        grid-column-gap: var(--standard-grid-gap);\n    }\n    .arrow {\n        width: calc(var(--base-pixel-size) * 2.5);\n        transition: opacity 0.3s;\n        flex: 0 0 auto;\n        z-index: 5;\n        background-repeat: no-repeat;\n        background-size: 100% auto;\n        background-position: 50%;\n        background-color: var(--black-200);\n        border: none;\n\n        &:hover {\n            cursor: pointer;\n        }\n        &.previous {\n            background-image: data-uri('./img/ui_arrow_left.svg');\n        }\n        &.next {\n            background-image: data-uri('./img/ui_arrow_right.svg');\n        }\n        &.disabled {\n            opacity: 0.25;\n        }\n    }\n    .xlMin ({\n        .maxWidth(var(--padding-sides));\n    });;\n\n    // if vw < max-width, track items bleed off of edge\n    .lgMax ({\n        .sectionHeader,\n        .items {\n            margin-left: var(--padding-sides);\n            margin-right: var(--padding-sides);\n        }\n    });;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), g.locals = {
        videoList: "rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5",
        sectionHeader: "rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201",
        arrowNav: "rockstargames-sites-rockstargamesc9b73b78d75dd740e918208a9d615796",
        items: "rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9",
        trackWrapper: "rockstargames-sites-rockstargamesbd79ab04bc93e3bcf79be808e0a06e9b",
        partial: "rockstargames-sites-rockstargamesab95829b388545f21071fd5bb97c25bb",
        track: "rockstargames-sites-rockstargamesa4d3877b3cf6bff0abccdc561c0fe149",
        arrow: "rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad",
        previous: "rockstargames-sites-rockstargamesd7404262ef1f79bde0883b02110a4a5d",
        next: "rockstargames-sites-rockstargamesbfdf85a5867d26b52a0962be91170e36",
        disabled: "rockstargames-sites-rockstargamesdbe1b06efadb349825f7b9b1b2778c68"
      };
      const f = g
    },
    53658: n => {
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27none%27%3E%3Cpath stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m15 18-6-6 6-6%27/%3E%3C/svg%3E"
    },
    46891: n => {
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27none%27%3E%3Cpath stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m9 18 6-6-6-6%27/%3E%3C/svg%3E"
    }
  }
]);