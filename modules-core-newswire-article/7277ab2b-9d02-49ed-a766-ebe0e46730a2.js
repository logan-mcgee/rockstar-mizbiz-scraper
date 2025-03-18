! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7277ab2b-9d02-49ed-a766-ebe0e46730a2", e._sentryDebugIdIdentifier = "sentry-dbid-7277ab2b-9d02-49ed-a766-ebe0e46730a2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3502], {
    61121: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => w
      });
      var r = s(62229),
        t = s(50216),
        o = s(80725),
        l = s(57308),
        n = s(95966);
      const c = {
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
      var d = s(91029);
      const i = e => {
          let {
            shouldFade: a,
            condition: s,
            className: r,
            children: t
          } = e;
          return (0, d.jsx)("div", {
            className: (0, n.classList)(r, a ? c.fadeIn : "", s ? c.active : ""),
            children: t
          })
        },
        f = e => {
          let {
            currentSlide: a
          } = e;
          return (0, d.jsx)("div", {
            className: c.customPagination,
            children: (0, d.jsx)("span", {
              children: a?.itemName ?? "Item"
            })
          })
        },
        m = e => {
          let {
            item: a,
            vertical: s,
            horizontal: r
          } = e;
          return a && a?.content ? (0, d.jsx)(i, {
            shouldFade: a?.fadeIn,
            condition: a?.fadeIn,
            className: (0, n.classList)(c.slot, c[s], c[r]),
            children: (0, d.jsx)(l.A, {
              ...a.content[0]
            })
          }) : null
        },
        u = e => {
          let {
            active: a = !1,
            backgroundContent: s,
            foregroundContent: r
          } = e;
          return (0, d.jsxs)("div", {
            className: c.slideContent,
            children: [s && (0, d.jsx)(i, {
              shouldFade: s?.fadeIn,
              condition: a,
              children: (0, d.jsx)("div", {
                className: c.backgroundContent,
                children: (0, d.jsx)(l.A, {
                  ...s.imageWithBadge
                })
              })
            }), r && (0, d.jsx)(i, {
              shouldFade: r?.fadeIn,
              condition: a,
              children: (0, d.jsx)("div", {
                className: c.foregroundContent,
                children: (0, d.jsx)(l.A, {
                  ...r.imageWithBadge
                })
              })
            })]
          })
        },
        b = e => {
          let {
            loop: a = !0,
            grabCursor: s = !0,
            centeredSlides: l = !0,
            slides: i = null
          } = e;
          const [b, w] = (0, r.useState)(null);
          return i ? (0, d.jsx)("div", {
            className: c.panoramaCarouselWrapper,
            children: (0, d.jsxs)(o.RC, {
              modules: [t.Vx],
              loop: a,
              grabCursor: s,
              centeredSlides: l,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                w(i[e?.realIndex ?? 0])
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
              children: [(0, d.jsxs)("div", {
                className: (0, n.classList)(c.slotContainer, c.top),
                children: [(0, d.jsx)(m, {
                  item: b?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, d.jsx)(m, {
                  item: b?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, d.jsx)(m, {
                  item: b?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map((e => (0, d.jsx)(o.qr, {
                children: a => {
                  let {
                    isActive: s
                  } = a;
                  return (0, d.jsx)(u, {
                    active: s,
                    ...e
                  })
                }
              }, e?.key))), (0, d.jsxs)("div", {
                className: (0, n.classList)(c.slotContainer, c.bottom),
                children: [(0, d.jsx)(m, {
                  item: b?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, d.jsx)(m, {
                  item: b?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, d.jsx)(f, {
                currentSlide: b
              })]
            })
          }) : null
        },
        w = e => {
          let {
            type: a = null,
            className: s,
            style: r,
            panoramaCarousel: t
          } = e;
          return a ? (o = b, l = t, (0, d.jsx)(o, {
            className: s,
            style: r,
            ...l
          })) : null;
          var o, l
        }
    }
  }
]);