try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a3811521-3337-4fce-9264-7b9afcc6db3e", e._sentryDebugIdIdentifier = "sentry-dbid-a3811521-3337-4fce-9264-7b9afcc6db3e")
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
  [1177, 3411, 5982], {
    94931(e, t, n) {
      var a = n(93082),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        g = Object.prototype.hasOwnProperty,
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        m = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var a, o = {},
          l = null,
          s = null;
        for (a in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (s = t.ref), t) g.call(t, a) && !m.hasOwnProperty(a) && (o[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === o[a] && (o[a] = t[a]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: s,
          props: o,
          _owner: i.current
        }
      }
      t.Fragment = o, t.jsx = l, t.jsxs = l
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    37840(e, t, n) {
      n.r(t), n.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => r,
        RSG_CTA_FRAGMENT: () => o,
        RSG_GAME_FRAGMENT: () => g,
        RSG_ICON_FRAGMENT: () => i,
        RSG_IMAGE_FILE_FRAGMENT: () => m,
        RSG_IMAGE_FRAGMENT: () => l,
        RSG_VIDEO_FILE_FRAGMENT: () => x,
        RSG_VIDEO_FRAGMENT: () => $,
        SYS_FRAGMENT: () => s,
        WWW_BANNER_FRAGMENT: () => w,
        WWW_DECK_FRAGMENT: () => c,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => y,
        WWW_DIVIDER_FRAGMENT: () => d,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => F,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => _,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => W,
        WWW_GRID_FRAGMENT: () => u,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => p,
        WWW_GRID_WRAPPER_FRAGMENT: () => f,
        WWW_IMAGE_BLOCK_FRAGMENT: () => R,
        WWW_IMAGE_CARD_FRAGMENT: () => I,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => b,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => E,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => S,
        WWW_MASONRY_GRID_FRAGMENT: () => T,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => G,
        WWW_PROMO_MODULE_FRAGMENT: () => M,
        WWW_REACT_COMPONENT_FRAGMENT: () => A,
        WWW_SECTION_WRAPPER_FRAGMENT: () => k,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => O,
        WWW_TEXT_BLOCK_FRAGMENT: () => N,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => v,
        WWW_THEME_PROVIDER_FRAGMENT: () => D,
        WWW_VIDEO_PLAYER_FRAGMENT: () => q,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => h,
        wwwBottomSheetQuery: () => B,
        wwwPageQuery: () => P
      });
      var a = n(3710);
      const r = a.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        o = a.gql`
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
        g = a.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ... on RsgImageFile {
          ...RsgImageFileFragment
        }
      }
    }
  }
}
`,
        i = a.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        m = a.gql`
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
        l = a.gql`
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
        s = a.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        w = a.gql`
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
        c = a.gql`
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
          ... on WwwImageCard {
              ...WwwImageCardFragment
          }
          ... on WwwImageBlock {
            ...WwwImageBlockFragment
          }
      }
  }
}
`,
        y = a.gql`
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
        d = a.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
          ...SysFragment
    }
    thickness
    style
}
`,
        F = a.gql`
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
        _ = a.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
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
        W = a.gql`
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
        u = a.gql`
fragment WwwGridFragment on WwwGrid {
    __typename
    sys {
        ...SysFragment
    }
    contentCollection(limit: 10) {
        items {
            ... on WwwTextBlock {
                ...WwwTextBlockFragment
            }
            ... on WwwImageCard {
                ...WwwImageCardFragment
            }
            ... on WwwImageBlock {
              ...WwwImageBlockFragment
            }
            ... on WwwImageCarousel {
              ...WwwImageCarouselFragment
            }
            ... on WwwLinkOutImage {
              ...WwwLinkOutImageFragment
            }
            ... on RsgImage {
              ...RsgImageFragment
            }
            ... on RsgImageFile {
              ...RsgImageFileFragment
            }
        }
    }
    layout {
        breakpointsCollection(limit: 8) {
            items {
                ... on WwwGridLayoutBreakpoint {
                    ...WwwGridLayoutBreakpointFragment
                }
            }
        }
    }
}
`,
        p = a.gql`
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
        f = a.gql`
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
            ... on WwwGrid {
              ...WwwGridFragment
            }
        }
    }
}
`,
        R = a.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ... on RsgImageFile {
      ...RsgImageFileFragment
    }
    ... on WwwLightboxImage {
      ...WwwLightboxImageFragment
    }
  }
  textAlignment
  title
  titleSize
}
`,
        I = a.gql`
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
        b = a.gql`
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
      ... on WwwImageBlock {
        ...WwwImageBlockFragment
      }
    }
  }
}
`,
        E = a.gql`
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
        C = a.gql`
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
        S = a.gql`
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
        T = a.gql`
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
        G = a.gql`
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
        M = a.gql`
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
        A = a.gql`
fragment WwwReactComponentFragment on WwwReactComponent {
  __typename
  sys {
    ...SysFragment
  }
  componentName
  componentProps
}
`,
        h = a.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
    __typename
    sys {
        ...SysFragment
    }
    tinaPageUrl
}
`,
        k = a.gql`
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
      ... on RsgContentRating {
        ...RsgContentRatingFragment
      }
      ... on RsgImage {
        ...RsgImageFragment
      }
      ... on WwwBanner {
        ...WwwBannerFragment
      }
      ... on WwwEditorialGridModule {
        ...WwwEditorialGridModuleFragment
      }
      ... on WwwLinkOutImage {
        ...WwwLinkOutImageFragment
      }
      ... on WwwMasonryGrid {
        ...WwwMasonryGridFragment
      }
      ... on WwwNewsletterSubscribe {
        ...WwwNewsletterSubscribeFragment
      }
      ... on WwwDecorativeVideo {
        ...WwwDecorativeVideoFragment
      }
      ... on WwwDivider {
        ...WwwDividerFragment
      }
      ... on WwwGridWrapper {
        ...WwwGridWrapperFragment
      }
      ... on WwwDeck {
        ...WwwDeckFragment
      }
      
      ... on WwwSupportCalloutModule {
        ...WwwSupportCalloutModuleFragment
      }
      ... on WwwWebOfferClaim {
        ...WwwWebOfferClaimFragment
      }
    }
  }
}
`,
        O = a.gql`
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
        N = a.gql`
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
        v = a.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ... on RsgRichText {
      __typename
      sys {
        ...SysFragment
      }
      content {
        json
      }
    }
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        D = a.gql`
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
        x = a.gql`
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
        $ = a.gql`
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
        q = a.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    ... on RsgGroup {
      referencesCollection(limit: 20) {
        items {
          ... on RsgVideo {
            ...RsgVideoFragment
          }
        }
      }
    }
  }
}
`,
        P = a.gql`
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
            ... on WwwDivider {
              ...WwwDividerFragment
            }
            ... on WwwFeaturedContentCarousel {
              ...WwwFeaturedContentCarouselFragment
            }
            ... on WwwFeaturedGameSection {
              ...WwwFeaturedGameSectionFragment
            }
            ... on WwwImagesMarqueeModule {
              ...WwwImagesMarqueeModuleFragment
            }
            ... on WwwPromoModule {
              ...WwwPromoModuleFragment
            }
            ... on WwwSectionWrapper {
              ...WwwSectionWrapperFragment
            }
            ... on WwwTextWithBadge {
              ...WwwTextWithBadgeFragment
            }
          }
        }
      }
    }
  }
  ${r}
  ${o}
  ${i}
  ${m}
  ${l}
  ${x}
  ${$}
  ${s}
  ${w}
  ${c}
  ${y}
  ${d}
  ${F}
  ${_}
  ${W}
  ${u}
  ${p}
  ${f}
  ${R}
  ${I}
  ${b}
  ${E}
  ${C}
  ${S}
  ${T}
  ${G}
  ${M}
  
  ${k}
  ${O}
  ${N}
  ${v}
  ${D}
  ${h}
`,
        B = a.gql`
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
            ... on WwwVideoPlayer {
              ...WwwVideoPlayerFragment
            }
          }
        }
      }
    }
  }
  ${m}
  ${x}
  ${$}
  ${s}
  ${q}
`
    },
    51177(e, t, n) {
      n.d(t, {
        C6: () => r,
        Cl: () => o,
        Tt: () => g,
        YH: () => m,
        fX: () => w,
        gz: () => s,
        sH: () => i
      });
      var a = function(e, t) {
        return a = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, a(e, t)
      };

      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, n = 1, a = arguments.length; n < a; n++)
            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, o.apply(this, arguments)
      };

      function g(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
        }
        return n
      }

      function i(e, t, n, a) {
        return new(n || (n = Promise))(function(r, o) {
          function g(e) {
            try {
              m(a.next(e))
            } catch (e) {
              o(e)
            }
          }

          function i(e) {
            try {
              m(a.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function m(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(g, i)
          }
          m((a = a.apply(e, t || [])).next())
        })
      }

      function m(e, t) {
        var n, a, r, o = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1]
            },
            trys: [],
            ops: []
          },
          g = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return g.next = i(0), g.throw = i(1), g.return = i(2), "function" == typeof Symbol && (g[Symbol.iterator] = function() {
          return this
        }), g;

        function i(i) {
          return function(m) {
            return function(i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; g && (g = 0, i[0] && (o = 0)), o;) try {
                if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return o.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    o.label++, a = i[1], i = [0];
                    continue;
                  case 7:
                    i = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                      o.label = i[1];
                      break
                    }
                    if (6 === i[0] && o.label < r[1]) {
                      o.label = r[1], r = i;
                      break
                    }
                    if (r && o.label < r[2]) {
                      o.label = r[2], o.ops.push(i);
                      break
                    }
                    r[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                i = t.call(e, o)
              } catch (e) {
                i = [6, e], a = 0
              } finally {
                n = r = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, m])
          }
        }
      }

      function l(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var a, r, o = n.call(e),
          g = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(a = o.next()).done;) g.push(a.value)
        } catch (e) {
          r = {
            error: e
          }
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o)
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

      function w(e, t, n) {
        if (n || 2 === arguments.length)
          for (var a, r = 0, o = t.length; r < o; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
        return e.concat(a || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);