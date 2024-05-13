! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8da76b9a-47c5-4179-8941-ac7104d2d679", e._sentryDebugIdIdentifier = "sentry-dbid-8da76b9a-47c5-4179-8941-ac7104d2d679")
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
  [600, 240, 980], {
    99576: (e, a, r) => {
      var t = r(51664),
        s = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, r) {
        var t, o = {},
          c = null,
          i = null;
        for (t in void 0 !== r && (c = "" + r), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, t) && !d.hasOwnProperty(t) && (o[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === o[t] && (o[t] = a[t]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: i,
          props: o,
          _owner: n.current
        }
      }
      a.Fragment = o, a.jsx = c, a.jsxs = c
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    },
    76980: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => g
      });
      var t = r(51664),
        s = r(48111),
        o = r(31403),
        l = r(1740),
        n = r(9860);
      const d = {
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
      var c = r(95240);
      const i = e => {
          let {
            shouldFade: a,
            condition: r,
            className: t,
            children: s
          } = e;
          return (0, c.jsx)("div", {
            className: (0, l.classList)(t, a ? d.fadeIn : "", r ? d.active : ""),
            children: s
          })
        },
        f = e => {
          let {
            currentSlide: a
          } = e;
          return (0, c.jsx)("div", {
            className: d.customPagination,
            children: (0, c.jsx)("span", {
              children: a?.itemName ?? "Item"
            })
          })
        },
        u = e => {
          let {
            item: a,
            vertical: r,
            horizontal: t
          } = e;
          return a && a?.content ? (0, c.jsx)(i, {
            shouldFade: a?.fadeIn,
            condition: a?.fadeIn,
            className: (0, l.classList)(d.slot, d[r], d[t]),
            children: (0, c.jsx)(n.ImageWithBadge, {
              ...a.content[0]
            })
          }) : null
        },
        m = e => {
          let {
            active: a = !1,
            backgroundContent: r,
            foregroundContent: t
          } = e;
          return (0, c.jsxs)("div", {
            className: d.slideContent,
            children: [r && (0, c.jsx)(i, {
              shouldFade: r?.fadeIn,
              condition: a,
              children: (0, c.jsx)("div", {
                className: d.backgroundContent,
                children: (0, c.jsx)(n.ImageWithBadge, {
                  ...r.imageWithBadge
                })
              })
            }), t && (0, c.jsx)(i, {
              shouldFade: t?.fadeIn,
              condition: a,
              children: (0, c.jsx)("div", {
                className: d.foregroundContent,
                children: (0, c.jsx)(n.ImageWithBadge, {
                  ...t.imageWithBadge
                })
              })
            })]
          })
        },
        b = e => {
          let {
            loop: a = !0,
            grabCursor: r = !0,
            centeredSlides: n = !0,
            slides: i = null
          } = e;
          const [b, g] = (0, t.useState)(null);
          return i ? (0, c.jsx)("div", {
            className: d.panoramaCarouselWrapper,
            children: (0, c.jsxs)(s.wx, {
              modules: [o._2],
              loop: a,
              grabCursor: r,
              centeredSlides: n,
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
              children: [(0, c.jsxs)("div", {
                className: (0, l.classList)(d.slotContainer, d.top),
                children: [(0, c.jsx)(u, {
                  item: b?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, c.jsx)(u, {
                  item: b?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, c.jsx)(u, {
                  item: b?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map((e => (0, c.jsx)(s.Ky, {
                children: a => {
                  let {
                    isActive: r
                  } = a;
                  return (0, c.jsx)(m, {
                    active: r,
                    ...e
                  })
                }
              }, e?.key))), (0, c.jsxs)("div", {
                className: (0, l.classList)(d.slotContainer, d.bottom),
                children: [(0, c.jsx)(u, {
                  item: b?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, c.jsx)(u, {
                  item: b?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, c.jsx)(f, {
                currentSlide: b
              })]
            })
          }) : null
        },
        g = e => {
          let {
            type: a = null,
            className: r,
            style: t,
            panoramaCarousel: s
          } = e;
          return a ? (o = b, l = s, (0, c.jsx)(o, {
            className: r,
            style: t,
            ...l
          })) : null;
          var o, l
        }
    }
  }
]);