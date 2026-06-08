try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "744f8e5f-7f3f-4958-9ad8-ab008e348658", e._sentryDebugIdIdentifier = "sentry-dbid-744f8e5f-7f3f-4958-9ad8-ab008e348658")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2066], {
    42066(e, a, t) {
      t.r(a), t.d(a, {
        default: () => w
      });
      var r = t(39793),
        s = t(93082),
        o = t(50662),
        n = t(14653),
        l = t(32760),
        i = t(44453),
        d = t(81270);
      const c = {
          active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
          backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
          bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
          customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
          fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
          foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
          left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
          nextBtn: "rockstargames-modules-core-newswire-articlef973aaa2cc8eeceebc88bd5deaadfa74",
          panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
          prevBtn: "rockstargames-modules-core-newswire-articleb13b550f10699e799bf6296b708e9473",
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
          className: t,
          children: s
        }) => (0, r.jsx)("div", {
          className: (0, d.default)(t, e ? c.fadeIn : "", a ? c.active : ""),
          children: s
        }),
        u = ({
          currentSlide: e,
          prevRef: a,
          nextRef: t
        }) => (0, r.jsxs)("div", {
          className: c.customPagination,
          children: [(0, r.jsx)("button", {
            type: "button",
            className: c.prevBtn,
            ref: a,
            "aria-label": "Previous Slide",
            children: (0, r.jsx)(l.ChevronLeft, {
              label: "Previous Slide",
              size: "LG"
            })
          }), (0, r.jsx)("span", {
            children: e?.itemName ?? "Item"
          }), (0, r.jsx)("button", {
            type: "button",
            className: c.nextBtn,
            ref: t,
            "aria-label": "Next Slide",
            children: (0, r.jsx)(l.ChevronRight, {
              label: "Next Slide",
              size: "LG"
            })
          })]
        }),
        b = ({
          item: e,
          vertical: a,
          horizontal: t
        }) => e && e?.content ? (0, r.jsx)(f, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: (0, d.default)(c.slot, c[a], c[t]),
          children: (0, r.jsx)(i.A, {
            ...e.content[0]
          })
        }) : null,
        m = ({
          active: e = !1,
          backgroundContent: a,
          foregroundContent: t
        }) => (0, r.jsxs)("div", {
          className: c.slideContent,
          children: [a && (0, r.jsx)(f, {
            shouldFade: a?.fadeIn,
            condition: e,
            children: (0, r.jsx)("div", {
              className: c.backgroundContent,
              children: (0, r.jsx)(i.A, {
                ...a.imageWithBadge
              })
            })
          }), t && (0, r.jsx)(f, {
            shouldFade: t?.fadeIn,
            condition: e,
            children: (0, r.jsx)("div", {
              className: c.foregroundContent,
              children: (0, r.jsx)(i.A, {
                ...t.imageWithBadge
              })
            })
          })]
        }),
        g = ({
          loop: e = !0,
          grabCursor: a = !0,
          centeredSlides: t = !0,
          slides: l = null
        }) => {
          const [i, f] = (0, s.useState)(null), g = (0, s.useRef)(null), w = (0, s.useRef)(null), [p, h] = (0, s.useState)();
          return (0, s.useEffect)(() => {
            h({
              nextEl: w.current,
              prevEl: g.current
            })
          }, [w, g]), l ? (0, r.jsx)("div", {
            className: c.panoramaCarouselWrapper,
            children: (0, r.jsxs)(n.RC, {
              loop: e,
              grabCursor: a,
              centeredSlides: t,
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [o.Vx],
              navigation: p,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                f(l[e?.realIndex ?? 0])
              },
              onInit: e => {
                e.params.navigation.prevEl = g.current, e.params.navigation.nextEl = w.current, e?.navigation.init(), e?.navigation.update()
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
                className: (0, d.default)(c.slotContainer, c.top),
                children: [(0, r.jsx)(b, {
                  item: i?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, r.jsx)(b, {
                  item: i?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, r.jsx)(b, {
                  item: i?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), l.map(e => (0, r.jsx)(n.qr, {
                children: ({
                  isActive: a
                }) => (0, r.jsx)(m, {
                  active: a,
                  ...e
                })
              }, e?.key)), (0, r.jsxs)("div", {
                className: (0, d.default)(c.slotContainer, c.bottom),
                children: [(0, r.jsx)(b, {
                  item: i?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, r.jsx)(b, {
                  item: i?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, r.jsx)(u, {
                currentSlide: i,
                prevRef: g,
                nextRef: w
              })]
            })
          }) : null
        },
        w = ({
          type: e = null,
          className: a,
          style: t,
          panoramaCarousel: s
        }) => {
          return e ? (o = g, n = s, (0, r.jsx)(o, {
            className: a,
            style: t,
            ...n
          })) : null;
          var o, n
        }
    }
  }
]);