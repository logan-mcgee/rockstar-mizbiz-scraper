! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "adf7a9f6-2b19-4dd1-9e20-cdf5ec5c7027", e._sentryDebugIdIdentifier = "sentry-dbid-adf7a9f6-2b19-4dd1-9e20-cdf5ec5c7027")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-carousel",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [272], {
    7272: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => g
      });
      var o = s(1664),
        t = s(8111),
        r = s(1403),
        l = s(1740),
        d = s(9860);
      const c = {
        panoramaCarouselWrapper: "rockstargames-modules-core-carouself44142f6360045df2e3e4882a36dd9fe",
        "swiper-navigation-disabled": "rockstargames-modules-core-carouself0123388d835d7bdc4f9719cb3db9f35",
        "swiper-rtl": "rockstargames-modules-core-carousela3870e8e16123c81c23306c06c7b9340",
        fadeIn: "rockstargames-modules-core-carouseld4f1b10735e518844763b81efd6f40eb",
        active: "rockstargames-modules-core-carouselca46360012ac0f676bc1c62ab418e542",
        customPagination: "rockstargames-modules-core-carousela46e632d8e134870d7360a7e1b58097a",
        slotContainer: "rockstargames-modules-core-carouselef474212bf96dabeb510bad4bd6a2655",
        top: "rockstargames-modules-core-carousele3b402ce05da568ffcf242335e510b13",
        left: "rockstargames-modules-core-carouselca258680e689564b3a2efc3c09aec508",
        right: "rockstargames-modules-core-carouself27ddf0ad0e83654cd50a8194e3cdf39",
        bottom: "rockstargames-modules-core-carouseldce8d481134e1469230126c9dea72ec3",
        slideContent: "rockstargames-modules-core-carouseld2821c7eaa41e93f244841b61af4d76c",
        backgroundContent: "rockstargames-modules-core-carouself3114cc3532853b28070b1ee4ca14f75",
        foregroundContent: "rockstargames-modules-core-carouself27ee4d4ec80fa355c5b56ddd48b8c54",
        "swiper-preloader-spin": "rockstargames-modules-core-carouselefb7a2e410ae367c15338446ee977c23"
      };
      var n = s(5240);
      const i = e => {
          let {
            shouldFade: a,
            condition: s,
            className: o,
            children: t
          } = e;
          return (0, n.jsx)("div", {
            className: (0, l.classList)(o, a ? c.fadeIn : "", s ? c.active : ""),
            children: t
          })
        },
        u = e => {
          let {
            currentSlide: a
          } = e;
          return (0, n.jsx)("div", {
            className: c.customPagination,
            children: (0, n.jsx)("span", {
              children: a?.itemName ?? "Item"
            })
          })
        },
        f = e => {
          let {
            item: a,
            vertical: s,
            horizontal: o
          } = e;
          return a && a?.content ? (0, n.jsx)(i, {
            shouldFade: a?.fadeIn,
            condition: a?.fadeIn,
            className: (0, l.classList)(c.slot, c[s], c[o]),
            children: (0, n.jsx)(d.ImageWithBadge, {
              ...a.content[0]
            })
          }) : null
        },
        m = e => {
          let {
            active: a = !1,
            backgroundContent: s,
            foregroundContent: o
          } = e;
          return (0, n.jsxs)("div", {
            className: c.slideContent,
            children: [s && (0, n.jsx)(i, {
              shouldFade: s?.fadeIn,
              condition: a,
              children: (0, n.jsx)("div", {
                className: c.backgroundContent,
                children: (0, n.jsx)(d.ImageWithBadge, {
                  ...s.imageWithBadge
                })
              })
            }), o && (0, n.jsx)(i, {
              shouldFade: o?.fadeIn,
              condition: a,
              children: (0, n.jsx)("div", {
                className: c.foregroundContent,
                children: (0, n.jsx)(d.ImageWithBadge, {
                  ...o.imageWithBadge
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
            slides: i = null
          } = e;
          const [b, g] = (0, o.useState)(null);
          return i ? (0, n.jsx)("div", {
            className: c.panoramaCarouselWrapper,
            children: (0, n.jsxs)(t.wx, {
              modules: [r._2],
              loop: a,
              grabCursor: s,
              centeredSlides: d,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => (e => {
                g(i[e])
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
              children: [(0, n.jsxs)("div", {
                className: (0, l.classList)(c.slotContainer, c.top),
                children: [(0, n.jsx)(f, {
                  item: b?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, n.jsx)(f, {
                  item: b?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, n.jsx)(f, {
                  item: b?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map((e => (0, n.jsx)(t.Ky, {
                children: a => {
                  let {
                    isActive: s
                  } = a;
                  return (0, n.jsx)(m, {
                    active: s,
                    ...e
                  })
                }
              }, e?.key))), (0, n.jsxs)("div", {
                className: (0, l.classList)(c.slotContainer, c.bottom),
                children: [(0, n.jsx)(f, {
                  item: b?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, n.jsx)(f, {
                  item: b?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, n.jsx)(u, {
                currentSlide: b
              })]
            })
          }) : null
        },
        g = e => {
          let {
            type: a = null,
            className: s,
            style: o,
            panoramaCarousel: t
          } = e;
          return a ? (r = b, l = t, (0, n.jsx)(r, {
            className: s,
            style: o,
            ...l
          })) : null;
          var r, l
        }
    }
  }
]);