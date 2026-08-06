try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4a3bc670-b9e9-4438-823f-d0c5c820adea", e._sentryDebugIdIdentifier = "sentry-dbid-4a3bc670-b9e9-4438-823f-d0c5c820adea")
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
  [1177, 2948, 4809, 6454, 7190], {
    94931(e, t, a) {
      var n = a(93082),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        g = Object.prototype.hasOwnProperty,
        m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var n, o = {},
          l = null,
          s = null;
        for (n in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (s = t.ref), t) g.call(t, n) && !i.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: s,
          props: o,
          _owner: m.current
        }
      }
      t.Fragment = o, t.jsx = l, t.jsxs = l
    },
    39793(e, t, a) {
      e.exports = a(94931)
    },
    59169(e, t, a) {
      a.r(t), a.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => r,
        RSG_CTA_FRAGMENT: () => o,
        RSG_GAME_FRAGMENT: () => g,
        RSG_ICON_FRAGMENT: () => m,
        RSG_IMAGE_FILE_FRAGMENT: () => i,
        RSG_IMAGE_FRAGMENT: () => l,
        RSG_RICH_TEXT_FRAGMENT: () => D,
        RSG_VIDEO_FILE_FRAGMENT: () => x,
        RSG_VIDEO_FRAGMENT: () => q,
        SYS_FRAGMENT: () => s,
        WWW_BANNER_FRAGMENT: () => w,
        WWW_DECK_FRAGMENT: () => c,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => y,
        WWW_DIVIDER_FRAGMENT: () => F,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => _,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => d,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => W,
        WWW_GRID_FRAGMENT: () => u,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => p,
        WWW_GRID_WRAPPER_FRAGMENT: () => f,
        WWW_IMAGE_BLOCK_FRAGMENT: () => R,
        WWW_IMAGE_CARD_FRAGMENT: () => I,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => E,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => b,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => S,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => T,
        WWW_MASONRY_GRID_FRAGMENT: () => C,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => G,
        WWW_PROMO_MODULE_FRAGMENT: () => M,
        WWW_REACT_COMPONENT_FRAGMENT: () => h,
        WWW_SECTION_WRAPPER_FRAGMENT: () => $,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => k,
        WWW_TEXT_BLOCK_FRAGMENT: () => O,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => N,
        WWW_THEME_PROVIDER_FRAGMENT: () => v,
        WWW_VIDEO_PLAYER_FRAGMENT: () => P,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => A,
        wwwBottomSheetQuery: () => L,
        wwwPageQuery: () => B
      });
      var n = a(89340);
      const r = n.gql`
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
        g = n.gql`
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
        m = n.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        i = n.gql`
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
        l = n.gql`
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
        s = n.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        w = n.gql`
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
        c = n.gql`
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
        y = n.gql`
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
        F = n.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
      ...SysFragment
    }
    thickness
    style
}
`,
        _ = n.gql`
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
        d = n.gql`
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
        W = n.gql`
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
        u = n.gql`
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
        p = n.gql`
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
        f = n.gql`
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
        I = n.gql`
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
        E = n.gql`
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
        b = n.gql`
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
        S = n.gql`
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
        T = n.gql`
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
        C = n.gql`
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
        G = n.gql`
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
        M = n.gql`
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
        h = n.gql`
fragment WwwReactComponentFragment on WwwReactComponent {
  __typename
  sys {
    ...SysFragment
  }
  componentName
  componentProps
}
`,
        A = n.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
  __typename
  sys {
    ...SysFragment
  }
  tinaPageUrl
}
`,
        $ = n.gql`
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
        k = n.gql`
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
        O = n.gql`
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
        N = n.gql`
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
        v = n.gql`
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
        D = n.gql`
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
        q = n.gql`
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
        P = n.gql`
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
        B = n.gql`
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
  ${r}
  ${o}
  ${m}
  ${i}
  ${l}
  ${D}
  ${x}
  ${q}
  ${s}
  ${w}
  ${c}
  ${y}
  ${F}
  ${_}
  ${d}
  ${W}
  ${u}
  ${p}
  ${f}
  ${R}
  ${I}
  ${E}
  ${b}
  ${S}
  ${T}
  ${C}
  ${G}
  ${M}
  
  ${$}
  ${k}
  ${O}
  ${N}
  ${v}
  ${A}
`,
        L = n.gql`
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
  ${r}
  ${o}
  ${m}
  ${i}
  ${l}
  ${D}
  ${x}
  ${q}
  ${s}
  ${w}
  ${c}
  ${y}
  ${F}
  ${_}
  ${u}
  ${p}
  ${f}
  ${R}
  ${I}
  ${E}
  ${S}
  ${T}
  ${C}
  ${G}
  ${M}
  
  ${$}
  ${k}
  ${O}
  ${N}
  ${v}
  ${P}
  ${A}
`
    },
    51177(e, t, a) {
      a.d(t, {
        C6: () => r,
        Cl: () => o,
        Tt: () => g,
        YH: () => i,
        fX: () => w,
        gz: () => s,
        sH: () => m
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
        }, n(e, t)
      };

      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function a() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, a = 1, n = arguments.length; a < n; a++)
            for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, o.apply(this, arguments)
      };

      function g(e, t) {
        var a = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
        }
        return a
      }

      function m(e, t, a, n) {
        return new(a || (a = Promise))(function(r, o) {
          function g(e) {
            try {
              i(n.next(e))
            } catch (e) {
              o(e)
            }
          }

          function m(e) {
            try {
              i(n.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function i(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
              e(t)
            })).then(g, m)
          }
          i((n = n.apply(e, t || [])).next())
        })
      }

      function i(e, t) {
        var a, n, r, o = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1]
            },
            trys: [],
            ops: []
          },
          g = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return g.next = m(0), g.throw = m(1), g.return = m(2), "function" == typeof Symbol && (g[Symbol.iterator] = function() {
          return this
        }), g;

        function m(m) {
          return function(i) {
            return function(m) {
              if (a) throw new TypeError("Generator is already executing.");
              for (; g && (g = 0, m[0] && (o = 0)), o;) try {
                if (a = 1, n && (r = 2 & m[0] ? n.return : m[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, m[1])).done) return r;
                switch (n = 0, r && (m = [2 & m[0], r.value]), m[0]) {
                  case 0:
                  case 1:
                    r = m;
                    break;
                  case 4:
                    return o.label++, {
                      value: m[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = m[1], m = [0];
                    continue;
                  case 7:
                    m = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || 6 !== m[0] && 2 !== m[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === m[0] && (!r || m[1] > r[0] && m[1] < r[3])) {
                      o.label = m[1];
                      break
                    }
                    if (6 === m[0] && o.label < r[1]) {
                      o.label = r[1], r = m;
                      break
                    }
                    if (r && o.label < r[2]) {
                      o.label = r[2], o.ops.push(m);
                      break
                    }
                    r[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                m = t.call(e, o)
              } catch (e) {
                m = [6, e], n = 0
              } finally {
                a = r = 0
              }
              if (5 & m[0]) throw m[1];
              return {
                value: m[0] ? m[1] : void 0,
                done: !0
              }
            }([m, i])
          }
        }
      }

      function l(e, t) {
        var a = "function" == typeof Symbol && e[Symbol.iterator];
        if (!a) return e;
        var n, r, o = a.call(e),
          g = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) g.push(n.value)
        } catch (e) {
          r = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (a = o.return) && a.call(o)
          } finally {
            if (r) throw r.error
          }
        }
        return g
      }

      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
        return e
      }

      function w(e, t, a) {
        if (a || 2 === arguments.length)
          for (var n, r = 0, o = t.length; r < o; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create
    }
  }
]);