try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2677de23-fe09-440a-9642-69decf8e4031", e._sentryDebugIdIdentifier = "sentry-dbid-2677de23-fe09-440a-9642-69decf8e4031")
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
  [1858], {
    89477: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => p
      });
      var r = t(42295),
        s = t(62229),
        o = t(85827),
        n = t(24162),
        i = t(45021),
        l = t(10632),
        d = t(4572),
        c = t.n(d);
      const f = {
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
        u = ({
          shouldFade: e,
          condition: a,
          className: t,
          children: s
        }) => (0, r.jsx)("div", {
          className: c()(t, e ? f.fadeIn : "", a ? f.active : ""),
          children: s
        }),
        m = ({
          currentSlide: e,
          prevRef: a,
          nextRef: t
        }) => (0, r.jsxs)("div", {
          className: f.customPagination,
          children: [(0, r.jsx)("button", {
            type: "button",
            className: f.prevBtn,
            ref: a,
            "aria-label": "Previous Slide",
            children: (0, r.jsx)(i.ChevronLeft, {
              label: "Previous Slide",
              size: "LG"
            })
          }), (0, r.jsx)("span", {
            children: e?.itemName ?? "Item"
          }), (0, r.jsx)("button", {
            type: "button",
            className: f.nextBtn,
            ref: t,
            "aria-label": "Next Slide",
            children: (0, r.jsx)(i.ChevronRight, {
              label: "Next Slide",
              size: "LG"
            })
          })]
        }),
        b = ({
          item: e,
          vertical: a,
          horizontal: t
        }) => e && e?.content ? (0, r.jsx)(u, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: c()(f.slot, f[a], f[t]),
          children: (0, r.jsx)(l.A, {
            ...e.content[0]
          })
        }) : null,
        g = ({
          active: e = !1,
          backgroundContent: a,
          foregroundContent: t
        }) => (0, r.jsxs)("div", {
          className: f.slideContent,
          children: [a && (0, r.jsx)(u, {
            shouldFade: a?.fadeIn,
            condition: e,
            children: (0, r.jsx)("div", {
              className: f.backgroundContent,
              children: (0, r.jsx)(l.A, {
                ...a.imageWithBadge
              })
            })
          }), t && (0, r.jsx)(u, {
            shouldFade: t?.fadeIn,
            condition: e,
            children: (0, r.jsx)("div", {
              className: f.foregroundContent,
              children: (0, r.jsx)(l.A, {
                ...t.imageWithBadge
              })
            })
          })]
        }),
        w = ({
          loop: e = !0,
          grabCursor: a = !0,
          centeredSlides: t = !0,
          slides: i = null
        }) => {
          const [l, d] = (0, s.useState)(null), u = (0, s.useRef)(null), w = (0, s.useRef)(null), [p, h] = (0, s.useState)();
          return (0, s.useEffect)(() => {
            h({
              nextEl: w.current,
              prevEl: u.current
            })
          }, [w, u]), i ? (0, r.jsx)("div", {
            className: f.panoramaCarouselWrapper,
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
                d(i[e?.realIndex ?? 0])
              },
              onInit: e => {
                e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = w.current, e?.navigation.init(), e?.navigation.update()
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
                className: c()(f.slotContainer, f.top),
                children: [(0, r.jsx)(b, {
                  item: l?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, r.jsx)(b, {
                  item: l?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, r.jsx)(b, {
                  item: l?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map(e => (0, r.jsx)(n.qr, {
                children: ({
                  isActive: a
                }) => (0, r.jsx)(g, {
                  active: a,
                  ...e
                })
              }, e?.key)), (0, r.jsxs)("div", {
                className: c()(f.slotContainer, f.bottom),
                children: [(0, r.jsx)(b, {
                  item: l?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, r.jsx)(b, {
                  item: l?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, r.jsx)(m, {
                currentSlide: l,
                prevRef: u,
                nextRef: w
              })]
            })
          }) : null
        },
        p = ({
          type: e = null,
          className: a,
          style: t,
          panoramaCarousel: s
        }) => {
          return e ? (o = w, n = s, (0, r.jsx)(o, {
            className: a,
            style: t,
            ...n
          })) : null;
          var o, n
        }
    }
  }
]);