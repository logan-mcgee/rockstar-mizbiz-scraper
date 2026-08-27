try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "40058695-91db-4bc3-8a52-f4d1fd55e968", e._sentryDebugIdIdentifier = "sentry-dbid-40058695-91db-4bc3-8a52-f4d1fd55e968")
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
  [64, 1177, 4809, 8116, 9793], {
    94931(e, t, r) {
      var n = r(93082),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function g(e, t, r) {
        var n, o = {},
          g = null,
          m = null;
        for (n in void 0 !== r && (g = "" + r), void 0 !== t.key && (g = "" + t.key), void 0 !== t.ref && (m = t.ref), t) i.call(t, n) && !l.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: g,
          ref: m,
          props: o,
          _owner: s.current
        }
      }
      t.Fragment = o, t.jsx = g, t.jsxs = g
    },
    39793(e, t, r) {
      e.exports = r(94931)
    },
    17607(e, t, r) {
      r.r(t), r.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => a,
        RSG_CTA_FRAGMENT: () => o,
        RSG_GAME_FRAGMENT: () => i,
        RSG_ICON_FRAGMENT: () => s,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => g,
        RSG_RICH_TEXT_FRAGMENT: () => N,
        RSG_VIDEO_FILE_FRAGMENT: () => x,
        RSG_VIDEO_FRAGMENT: () => D,
        SYS_FRAGMENT: () => m,
        WWW_BANNER_FRAGMENT: () => c,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => _,
        WWW_DIVIDER_FRAGMENT: () => y,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => d,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => f,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => w,
        WWW_GRID_FRAGMENT: () => p,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => F,
        WWW_GRID_WRAPPER_FRAGMENT: () => W,
        WWW_IMAGE_BLOCK_FRAGMENT: () => R,
        WWW_IMAGE_CARD_FRAGMENT: () => b,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => h,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => E,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => I,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => S,
        WWW_MASONRY_GRID_FRAGMENT: () => v,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => T,
        WWW_PROMO_MODULE_FRAGMENT: () => C,
        WWW_REACT_COMPONENT_FRAGMENT: () => O,
        WWW_SECTION_WRAPPER_FRAGMENT: () => M,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => A,
        WWW_TEXT_BLOCK_FRAGMENT: () => k,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => P,
        WWW_THEME_PROVIDER_FRAGMENT: () => $,
        WWW_VIDEO_PLAYER_FRAGMENT: () => j,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => G,
        wwwBottomSheetQuery: () => B,
        wwwPageQuery: () => q
      });
      var n = r(94935);
      const a = n.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        o = n.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        i = n.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ...RsgImageFileFragment
      }
    }
  }
}
`,
        s = n.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        l = n.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        g = n.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  sys {
    ...SysFragment
  }
  altText
  imageFilesCollection(
    limit: 8
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        m = n.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        c = n.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        u = n.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
    ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  
  cardsCollection(limit: 4) {
    items {
      __typename
      ...WwwImageCardFragment
      ...WwwImageBlockFragment
    }
  }
}
`,
        _ = n.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
      ...SysFragment
    }
    playbackBehavior
    scrimColor
    landscapeViewportBehavior
    overlayElements {
      ...WwwGridWrapperFragment
    }
    video {
      ...RsgVideoFragment
    }
    squareVideo {
      ...RsgVideoFragment
    }
}
`,
        y = n.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
      ...SysFragment
    }
    thickness
    style
}
`,
        d = n.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        f = n.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  autoplay
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
      navColor
    }
  }
}
`,
        w = n.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    sys {
      ...SysFragment
    }
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        p = n.gql`
fragment WwwGridFragment on WwwGrid {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 10) {
    items {
      ...WwwTextBlockFragment
      ...WwwImageCardFragment
      ...WwwImageBlockFragment
      ...WwwImageCarouselFragment
      ...WwwLinkOutImageFragment
      ...RsgImageFragment
      ...RsgImageFileFragment
    }
  }
  layout {
    breakpointsCollection(limit: 8) {
      items {
        ...WwwGridLayoutBreakpointFragment
      }
    }
  }
}
`,
        F = n.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
  __typename
  sys {
    ...SysFragment
  }
  mediaQuery
  columns
  behavior
  alignment
}
`,
        W = n.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
  __typename
  sys {
    ...SysFragment
  }
  title
  theme {
    ...WwwThemeProviderFragment
  }
  gap
  contentCollection(limit: 6) {
    items {
      ...WwwGridFragment
    }
  }
}
`,
        R = n.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ...RsgImageFileFragment
    ...WwwLightboxImageFragment
  }
  textAlignment
  title
  titleSize
}
`,
        b = n.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        h = n.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ...WwwImageBlockFragment
    }
  }
}
`,
        E = n.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        I = n.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        S = n.gql`
fragment WwwLinkOutImageFragment on WwwLinkOutImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  link {
    url
  }
  image {
    ...RsgImageFragment
  }
}
`,
        v = n.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        T = n.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        C = n.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        O = n.gql`
fragment WwwReactComponentFragment on WwwReactComponent {
  __typename
  sys {
    ...SysFragment
  }
  componentName
  componentProps
}
`,
        G = n.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
  __typename
  sys {
    ...SysFragment
  }
  tinaPageUrl
}
`,
        M = n.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  title
  
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ...RsgContentRatingFragment
      ...RsgImageFragment
      ...WwwBannerFragment
      ...WwwEditorialGridModuleFragment
      ...WwwLinkOutImageFragment
      ...WwwMasonryGridFragment
      ...WwwNewsletterSubscribeFragment
      ...WwwDecorativeVideoFragment
      ...WwwDividerFragment
      ...WwwGridWrapperFragment
      ...WwwDeckFragment
      
      ...WwwSupportCalloutModuleFragment
      ...WwwWebOfferClaimFragment
    }
  }
}
`,
        A = n.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        k = n.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
  __typename
  sys {
    ...SysFragment
  }
  badge
  eyebrow
  header
  body
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  footnote
  headerSize
  bodySize
  alignment
  headerTextWrap
  bodyTextWrap
}
`,
        P = n.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ...RsgRichTextFragment
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        $ = n.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        N = n.gql`
fragment RsgRichTextFragment on RsgRichText {
  __typename
  sys {
    ...SysFragment
  }
  content {
    json
  }
}
`,
        x = n.gql`
fragment RsgVideoFileFragment on RsgVideoFile {
  __typename
  sys {
    ...SysFragment
  }
  codec
  context
  height
  posterImage {
    ...RsgImageFileFragment
  }
  upload {
    url
    title
  }
  url
  width
}
`,
        D = n.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
  videoFilesCollection(limit: 3) {
    items {
      ...RsgVideoFileFragment
    }
  }
}
`,
        j = n.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    referencesCollection(limit: 20) {
      items {
        ...RsgVideoFragment
      }
    }
  }
}
`,
        q = n.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ...WwwDividerFragment
            ...WwwFeaturedContentCarouselFragment
            ...WwwFeaturedGameSectionFragment
             
            ...WwwImagesMarqueeModuleFragment
            ...WwwPromoModuleFragment
            ...WwwSectionWrapperFragment
            ...WwwTextWithBadgeFragment
          }
        }
      }
    }
  }
  
  ${a}
  ${o}
  ${s}
  ${l}
  ${g}
  ${N}
  ${x}
  ${D}
  ${m}
  ${c}
  ${u}
  ${_}
  ${y}
  ${d}
  ${f}
  ${w}
  ${p}
  ${F}
  ${W}
  
  ${R}
  ${b}
  ${h}
  ${E}
  ${I}
  ${S}
  ${v}
  ${T}
  ${C}
  
  ${M}
  ${A}
  ${k}
  ${P}
  ${$}
  ${G}
`,
        B = n.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ...RsgImageFragment
            ...RsgRichTextFragment
            ...WwwBannerFragment
            ...WwwDeckFragment
            ...WwwDecorativeVideoFragment
            ...WwwDividerFragment
            ...WwwGridWrapperFragment
            ...WwwPromoModuleFragment
            
            ...WwwSectionWrapperFragment
            ...WwwTextBlockFragment
            ...WwwTextWithBadgeFragment
            ...WwwThemeProviderFragment
            ...WwwVideoPlayerFragment
          }
        }
      }
    }
  }
  
  ${a}
  ${o}
  ${s}
  ${l}
  ${g}
  ${N}
  ${x}
  ${D}
  ${m}
  ${c}
  ${u}
  ${_}
  ${y}
  ${d}
  ${p}
  ${F}
  ${W}
  ${R}
  ${b}
  ${h}
  ${I}
  ${S}
  ${v}
  ${T}
  ${C}
  
  ${M}
  ${A}
  ${k}
  ${P}
  ${$}
  ${j}
  ${G}
`
    },
    51177(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => P,
        __assign: () => o,
        __asyncDelegator: () => I,
        __asyncGenerator: () => E,
        __asyncValues: () => S,
        __await: () => h,
        __awaiter: () => y,
        __classPrivateFieldGet: () => M,
        __classPrivateFieldIn: () => k,
        __classPrivateFieldSet: () => A,
        __createBinding: () => f,
        __decorate: () => s,
        __disposeResources: () => N,
        __esDecorate: () => g,
        __exportStar: () => w,
        __extends: () => a,
        __generator: () => d,
        __importDefault: () => G,
        __importStar: () => O,
        __makeTemplateObject: () => v,
        __metadata: () => _,
        __param: () => l,
        __propKey: () => c,
        __read: () => F,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => x,
        __runInitializers: () => m,
        __setFunctionName: () => u,
        __spread: () => W,
        __spreadArray: () => b,
        __spreadArrays: () => R,
        __values: () => p
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e
        }, o.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
        }
        return r
      }

      function s(e, t, r, n) {
        var a, o = arguments.length,
          i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
        return o > 3 && i && Object.defineProperty(t, r, i), i
      }

      function l(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function g(e, t, r, n, a, o) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, l = n.kind, g = "getter" === l ? "get" : "setter" === l ? "set" : "value", m = !t && e ? n.static ? e : e.prototype : null, c = t || (m ? Object.getOwnPropertyDescriptor(m, n.name) : {}), u = !1, _ = r.length - 1; _ >= 0; _--) {
          var y = {};
          for (var d in n) y[d] = "access" === d ? {} : n[d];
          for (var d in n.access) y.access[d] = n.access[d];
          y.addInitializer = function(e) {
            if (u) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(i(e || null))
          };
          var f = (0, r[_])("accessor" === l ? {
            get: c.get,
            set: c.set
          } : c[g], y);
          if ("accessor" === l) {
            if (void 0 === f) continue;
            if (null === f || "object" != typeof f) throw new TypeError("Object expected");
            (s = i(f.get)) && (c.get = s), (s = i(f.set)) && (c.set = s), (s = i(f.init)) && a.unshift(s)
          } else(s = i(f)) && ("field" === l ? a.unshift(s) : c[g] = s)
        }
        m && Object.defineProperty(m, n.name, c), u = !0
      }

      function m(e, t, r) {
        for (var n = arguments.length > 2, a = 0; a < t.length; a++) r = n ? t[a].call(e, r) : t[a].call(e);
        return n ? r : void 0
      }

      function c(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function u(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function _(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
          function i(e) {
            try {
              l(n.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              l(n.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function l(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, s)
          }
          l((n = n.apply(e, t || [])).next())
        })
      }

      function d(e, t) {
        var r, n, a, o = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(l) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (o = 0)), o;) try {
                if (r = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                switch (n = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < a[1]) {
                      o.label = a[1], a = s;
                      break
                    }
                    if (a && o.label < a[2]) {
                      o.label = a[2], o.ops.push(s);
                      break
                    }
                    a[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = t.call(e, o)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, l])
          }
        }
      }
      var f = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var a = Object.getOwnPropertyDescriptor(t, r);
        a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, a)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function w(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || f(t, e, r)
      }

      function p(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function F(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, o = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (e) {
          a = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (a) throw a.error
          }
        }
        return i
      }

      function W() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(F(arguments[t]));
        return e
      }

      function R() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          a = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
        return n
      }

      function b(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, a = 0, o = t.length; a < o; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function h(e) {
        return this instanceof h ? (this.v = e, this) : new h(e)
      }

      function E(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, a = r.apply(e, t || []),
          o = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, g)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          a[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              o.push([e, t, r, n]) > 1 || s(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
          try {
            (r = a[e](t)).value instanceof h ? Promise.resolve(r.value.v).then(l, g) : m(o[0][2], r)
          } catch (e) {
            m(o[0][3], e)
          }
          var r
        }

        function l(e) {
          s("next", e)
        }

        function g(e) {
          s("throw", e)
        }

        function m(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function I(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, a) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: h(e[n](t)),
              done: !1
            } : a ? a(t) : t
          } : a
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(n, a) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(n, a, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function v(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var T = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        C = function(e) {
          return C = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, C(e)
        };

      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = C(e), n = 0; n < r.length; n++) "default" !== r[n] && f(t, e, r[n]);
        return T(t, e), t
      }

      function G(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function M(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function A(e, t, r, n, a) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !a) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? a.call(e, r) : a ? a.value = r : t.set(e, r), r
      }

      function k(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function P(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, a;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (a = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          a && (n = function() {
            try {
              a.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var $ = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function N(e) {
        function t(t) {
          e.error = e.hasError ? new $(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function a() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(a);
            if (r.dispose) {
              var o = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(o).then(a, function(e) {
                return t(e), a()
              })
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function x(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, a, o) {
          return r ? t ? ".jsx" : ".js" : !n || a && o ? n + a + "." + o.toLowerCase() + "js" : e
        }) : e
      }
      const D = {
        __extends: a,
        __assign: o,
        __rest: i,
        __decorate: s,
        __param: l,
        __esDecorate: g,
        __runInitializers: m,
        __propKey: c,
        __setFunctionName: u,
        __metadata: _,
        __awaiter: y,
        __generator: d,
        __createBinding: f,
        __exportStar: w,
        __values: p,
        __read: F,
        __spread: W,
        __spreadArrays: R,
        __spreadArray: b,
        __await: h,
        __asyncGenerator: E,
        __asyncDelegator: I,
        __asyncValues: S,
        __makeTemplateObject: v,
        __importStar: O,
        __importDefault: G,
        __classPrivateFieldGet: M,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: k,
        __addDisposableResource: P,
        __disposeResources: N,
        __rewriteRelativeImportExtension: x
      };
      r.d(t, ["default", 0, D])
    }
  }
]);