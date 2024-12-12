! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "abd4b598-030e-440d-85de-6d8bda1d087c", e._sentryDebugIdIdentifier = "sentry-dbid-abd4b598-030e-440d-85de-6d8bda1d087c")
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
  [1331], {
    51331: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => w
      });
      var r = s(71403),
        t = s(81902),
        o = s(11650),
        d = s(74401),
        l = s(8999);
      const n = {
        panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articlef7ac64452243a956773b0006ceabda05",
        "swiper-navigation-disabled": "rockstargames-modules-core-newswire-articledc22359bec851b1e81fe143880b81baa",
        "swiper-rtl": "rockstargames-modules-core-newswire-articlec048a9d824a3299e577a0247ae83259a",
        fadeIn: "rockstargames-modules-core-newswire-articlebf7dad188048d7f3e7fe5b5facfc8054",
        active: "rockstargames-modules-core-newswire-articlef65cef484c9ac448fdee8722711b4fa4",
        customPagination: "rockstargames-modules-core-newswire-articledfd09301e8bc05fb3326fe3223046e0c",
        slotContainer: "rockstargames-modules-core-newswire-articlee4a20c5951e71334d90487aead88e549",
        top: "rockstargames-modules-core-newswire-articlee7816d1c9eba72e26e4aa43b3a1d7290",
        left: "rockstargames-modules-core-newswire-articleeb8100a60fc362b743435b4bb1ecd74a",
        right: "rockstargames-modules-core-newswire-articlea82650d1c0a2ecc2eaa4684d72a693a2",
        bottom: "rockstargames-modules-core-newswire-articlebf35f83fe5c0c2f0d549660fecf38994",
        slideContent: "rockstargames-modules-core-newswire-articled6c114a0322e633d87283c68984bea70",
        backgroundContent: "rockstargames-modules-core-newswire-articlef09b432cfaa12bac205887c0948ab18e",
        foregroundContent: "rockstargames-modules-core-newswire-articlefa5c09eaa5d07cb6da01d9524cca299d",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articledd9665694d33734ed3e110477feda51d"
      };
      var i = s(46632);
      const c = e => {
          let {
            shouldFade: a,
            condition: s,
            className: r,
            children: t
          } = e;
          return (0, i.jsx)("div", {
            className: (0, d.classList)(r, a ? n.fadeIn : "", s ? n.active : ""),
            children: t
          })
        },
        m = e => {
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
            horizontal: r
          } = e;
          return a && a?.content ? (0, i.jsx)(c, {
            shouldFade: a?.fadeIn,
            condition: a?.fadeIn,
            className: (0, d.classList)(n.slot, n[s], n[r]),
            children: (0, i.jsx)(l.A, {
              ...a.content[0]
            })
          }) : null
        },
        f = e => {
          let {
            active: a = !1,
            backgroundContent: s,
            foregroundContent: r
          } = e;
          return (0, i.jsxs)("div", {
            className: n.slideContent,
            children: [s && (0, i.jsx)(c, {
              shouldFade: s?.fadeIn,
              condition: a,
              children: (0, i.jsx)("div", {
                className: n.backgroundContent,
                children: (0, i.jsx)(l.A, {
                  ...s.imageWithBadge
                })
              })
            }), r && (0, i.jsx)(c, {
              shouldFade: r?.fadeIn,
              condition: a,
              children: (0, i.jsx)("div", {
                className: n.foregroundContent,
                children: (0, i.jsx)(l.A, {
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
            slides: c = null
          } = e;
          const [b, w] = (0, r.useState)(null);
          return c ? (0, i.jsx)("div", {
            className: n.panoramaCarouselWrapper,
            children: (0, i.jsxs)(t.RC, {
              modules: [o.Vx],
              loop: a,
              grabCursor: s,
              centeredSlides: l,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => (e => {
                w(c[e])
              })(e?.realIndex ?? 0),
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
                className: (0, d.classList)(n.slotContainer, n.top),
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
              }), c.map((e => (0, i.jsx)(t.qr, {
                children: a => {
                  let {
                    isActive: s
                  } = a;
                  return (0, i.jsx)(f, {
                    active: s,
                    ...e
                  })
                }
              }, e?.key))), (0, i.jsxs)("div", {
                className: (0, d.classList)(n.slotContainer, n.bottom),
                children: [(0, i.jsx)(u, {
                  item: b?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, i.jsx)(u, {
                  item: b?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, i.jsx)(m, {
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
          return a ? (o = b, d = t, (0, i.jsx)(o, {
            className: s,
            style: r,
            ...d
          })) : null;
          var o, d
        }
    }
  }
]);