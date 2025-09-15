try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "695129db-72f2-423d-8cab-b1ee0daa8b2b", e._sentryDebugIdIdentifier = "sentry-dbid-695129db-72f2-423d-8cab-b1ee0daa8b2b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1858], {
    89477: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => g
      });
      var r = s(42295),
        t = s(62229),
        o = s(7545),
        d = s(24162),
        n = s(10632),
        i = s(4572),
        l = s.n(i);
      const c = {
          active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
          backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
          bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
          customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
          fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
          foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
          left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
          panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
          right: "rockstargames-modules-core-newswire-articleada7cdbc241d461551ac775229986a37",
          slideContent: "rockstargames-modules-core-newswire-articled8c6874e2f33425124e575a60fa339ab",
          slotContainer: "rockstargames-modules-core-newswire-articlef7f1e5026f11d0cc5e371f990c3620e7",
          "swiper-navigation-disabled": "rockstargames-modules-core-newswire-articled20ad0b7e7720a75082106c87130274f",
          "swiper-preloader-spin": "rockstargames-modules-core-newswire-articledfaec79c93eeafe2c26c2f2e0c576afd",
          "swiper-rtl": "rockstargames-modules-core-newswire-articlec658d9e1c69cce7a4a70ef2d52858eba",
          top: "rockstargames-modules-core-newswire-articleec807ccbb44eb584b15097ea4127de46"
        },
        f = ({
          shouldFade: e,
          condition: a,
          className: s,
          children: t
        }) => (0, r.jsx)("div", {
          className: l()(s, e ? c.fadeIn : "", a ? c.active : ""),
          children: t
        }),
        b = ({
          currentSlide: e
        }) => (0, r.jsx)("div", {
          className: c.customPagination,
          children: (0, r.jsx)("span", {
            children: e?.itemName ?? "Item"
          })
        }),
        m = ({
          item: e,
          vertical: a,
          horizontal: s
        }) => e && e?.content ? (0, r.jsx)(f, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: l()(c.slot, c[a], c[s]),
          children: (0, r.jsx)(n.A, {
            ...e.content[0]
          })
        }) : null,
        u = ({
          active: e = !1,
          backgroundContent: a,
          foregroundContent: s
        }) => (0, r.jsxs)("div", {
          className: c.slideContent,
          children: [a && (0, r.jsx)(f, {
            shouldFade: a?.fadeIn,
            condition: e,
            children: (0, r.jsx)("div", {
              className: c.backgroundContent,
              children: (0, r.jsx)(n.A, {
                ...a.imageWithBadge
              })
            })
          }), s && (0, r.jsx)(f, {
            shouldFade: s?.fadeIn,
            condition: e,
            children: (0, r.jsx)("div", {
              className: c.foregroundContent,
              children: (0, r.jsx)(n.A, {
                ...s.imageWithBadge
              })
            })
          })]
        }),
        w = ({
          loop: e = !0,
          grabCursor: a = !0,
          centeredSlides: s = !0,
          slides: n = null
        }) => {
          const [i, f] = (0, t.useState)(null);
          return n ? (0, r.jsx)("div", {
            className: c.panoramaCarouselWrapper,
            children: (0, r.jsxs)(d.RC, {
              modules: [o.Vx],
              loop: e,
              grabCursor: a,
              centeredSlides: s,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                f(n[e?.realIndex ?? 0])
              },
              breakpoints: {
                768: {
                  slidesPerView: 1.25
                },
                1024: {
                  slidesPerView: 1.5
                },
                1920: {
                  slidesPerView: 1.75
                }
              },
              children: [(0, r.jsxs)("div", {
                className: l()(c.slotContainer, c.top),
                children: [(0, r.jsx)(m, {
                  item: i?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, r.jsx)(m, {
                  item: i?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, r.jsx)(m, {
                  item: i?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), n.map((e => (0, r.jsx)(d.qr, {
                children: ({
                  isActive: a
                }) => (0, r.jsx)(u, {
                  active: a,
                  ...e
                })
              }, e?.key))), (0, r.jsxs)("div", {
                className: l()(c.slotContainer, c.bottom),
                children: [(0, r.jsx)(m, {
                  item: i?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, r.jsx)(m, {
                  item: i?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, r.jsx)(b, {
                currentSlide: i
              })]
            })
          }) : null
        },
        g = ({
          type: e = null,
          className: a,
          style: s,
          panoramaCarousel: t
        }) => {
          return e ? (o = w, d = t, (0, r.jsx)(o, {
            className: a,
            style: s,
            ...d
          })) : null;
          var o, d
        }
    }
  }
]);