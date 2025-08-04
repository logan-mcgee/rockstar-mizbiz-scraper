try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0797967d-0d57-485c-a103-5440bdf07964", e._sentryDebugIdIdentifier = "sentry-dbid-0797967d-0d57-485c-a103-5440bdf07964")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6489], {
    8870: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => w
      });
      var t = s(62229),
        r = s(4394),
        o = s(23205),
        d = s(80195),
        l = s(95966);
      const n = {
        panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
        "swiper-navigation-disabled": "rockstargames-modules-core-newswire-articled20ad0b7e7720a75082106c87130274f",
        "swiper-rtl": "rockstargames-modules-core-newswire-articlec658d9e1c69cce7a4a70ef2d52858eba",
        fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
        active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
        customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
        slotContainer: "rockstargames-modules-core-newswire-articlef7f1e5026f11d0cc5e371f990c3620e7",
        top: "rockstargames-modules-core-newswire-articleec807ccbb44eb584b15097ea4127de46",
        left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
        right: "rockstargames-modules-core-newswire-articleada7cdbc241d461551ac775229986a37",
        bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
        slideContent: "rockstargames-modules-core-newswire-articled8c6874e2f33425124e575a60fa339ab",
        backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
        foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articledfaec79c93eeafe2c26c2f2e0c576afd"
      };
      var i = s(70954);
      const c = e => {
          let {
            shouldFade: a,
            condition: s,
            className: t,
            children: r
          } = e;
          return (0, i.jsx)("div", {
            className: (0, l.classList)(t, a ? n.fadeIn : "", s ? n.active : ""),
            children: r
          })
        },
        f = e => {
          let {
            currentSlide: a
          } = e;
          return (0, i.jsx)("div", {
            className: n.customPagination,
            children: (0, i.jsx)("span", {
              children: a?.itemName ?? "Item"
            })
          })
        },
        u = e => {
          let {
            item: a,
            vertical: s,
            horizontal: t
          } = e;
          return a && a?.content ? (0, i.jsx)(c, {
            shouldFade: a?.fadeIn,
            condition: a?.fadeIn,
            className: (0, l.classList)(n.slot, n[s], n[t]),
            children: (0, i.jsx)(d.A, {
              ...a.content[0]
            })
          }) : null
        },
        m = e => {
          let {
            active: a = !1,
            backgroundContent: s,
            foregroundContent: t
          } = e;
          return (0, i.jsxs)("div", {
            className: n.slideContent,
            children: [s && (0, i.jsx)(c, {
              shouldFade: s?.fadeIn,
              condition: a,
              children: (0, i.jsx)("div", {
                className: n.backgroundContent,
                children: (0, i.jsx)(d.A, {
                  ...s.imageWithBadge
                })
              })
            }), t && (0, i.jsx)(c, {
              shouldFade: t?.fadeIn,
              condition: a,
              children: (0, i.jsx)("div", {
                className: n.foregroundContent,
                children: (0, i.jsx)(d.A, {
                  ...t.imageWithBadge
                })
              })
            })]
          })
        },
        b = e => {
          let {
            loop: a = !0,
            grabCursor: s = !0,
            centeredSlides: d = !0,
            slides: c = null
          } = e;
          const [b, w] = (0, t.useState)(null);
          return c ? (0, i.jsx)("div", {
            className: n.panoramaCarouselWrapper,
            children: (0, i.jsxs)(o.RC, {
              modules: [r.Vx],
              loop: a,
              grabCursor: s,
              centeredSlides: d,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                w(c[e?.realIndex ?? 0])
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
              children: [(0, i.jsxs)("div", {
                className: (0, l.classList)(n.slotContainer, n.top),
                children: [(0, i.jsx)(u, {
                  item: b?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, i.jsx)(u, {
                  item: b?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, i.jsx)(u, {
                  item: b?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), c.map((e => (0, i.jsx)(o.qr, {
                children: a => {
                  let {
                    isActive: s
                  } = a;
                  return (0, i.jsx)(m, {
                    active: s,
                    ...e
                  })
                }
              }, e?.key))), (0, i.jsxs)("div", {
                className: (0, l.classList)(n.slotContainer, n.bottom),
                children: [(0, i.jsx)(u, {
                  item: b?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, i.jsx)(u, {
                  item: b?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, i.jsx)(f, {
                currentSlide: b
              })]
            })
          }) : null
        },
        w = e => {
          let {
            type: a = null,
            className: s,
            style: t,
            panoramaCarousel: r
          } = e;
          return a ? (o = b, d = r, (0, i.jsx)(o, {
            className: s,
            style: t,
            ...d
          })) : null;
          var o, d
        }
    }
  }
]);