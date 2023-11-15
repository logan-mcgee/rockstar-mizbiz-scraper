"use strict";
(self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [614], {
    614: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => h
      });
      var o = s(927),
        t = s(965),
        r = s(118),
        c = s(542),
        l = s(976);
      const d = {
        panoramaCarouselWrapper: "rockstargames-modules-core-carouself44142f6360045df2e3e4882a36dd9fe",
        "swiper-navigation-disabled": "rockstargames-modules-core-carouself0123388d835d7bdc4f9719cb3db9f35",
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
        foregroundContent: "rockstargames-modules-core-carouself27ee4d4ec80fa355c5b56ddd48b8c54"
      };
      var n = s(705);
      const i = e => {
          let {
            shouldFade: a,
            condition: s,
            className: o,
            children: t
          } = e;
          return (0, n.jsx)("div", {
            className: (0, c.classList)(o, a ? d.fadeIn : "", s ? d.active : ""),
            children: t
          })
        },
        m = e => {
          let {
            currentSlide: a
          } = e;
          return (0, n.jsx)("div", {
            className: d.customPagination,
            children: (0, n.jsx)("span", {
              children: a?.itemName ?? "Item"
            })
          })
        },
        u = e => {
          let {
            item: a,
            vertical: s,
            horizontal: o
          } = e;
          return a && a?.content ? (0, n.jsx)(i, {
            shouldFade: a?.fadeIn,
            condition: a?.fadeIn,
            className: (0, c.classList)(d.slot, d[s], d[o]),
            children: (0, n.jsx)(l.ImageWithBadge, {
              ...a.content[0]
            })
          }) : null
        },
        g = e => {
          let {
            active: a = !1,
            backgroundContent: s,
            foregroundContent: o
          } = e;
          return (0, n.jsxs)("div", {
            className: d.slideContent,
            children: [s && (0, n.jsx)(i, {
              shouldFade: s?.fadeIn,
              condition: a,
              children: (0, n.jsx)("div", {
                className: d.backgroundContent,
                children: (0, n.jsx)(l.ImageWithBadge, {
                  ...s.imageWithBadge
                })
              })
            }), o && (0, n.jsx)(i, {
              shouldFade: o?.fadeIn,
              condition: a,
              children: (0, n.jsx)("div", {
                className: d.foregroundContent,
                children: (0, n.jsx)(l.ImageWithBadge, {
                  ...o.imageWithBadge
                })
              })
            })]
          })
        },
        f = e => {
          let {
            loop: a = !0,
            grabCursor: s = !0,
            centeredSlides: l = !0,
            slides: i = null
          } = e;
          const [f, h] = (0, o.useState)(null);
          return i ? (0, n.jsx)("div", {
            className: d.panoramaCarouselWrapper,
            children: (0, n.jsxs)(t.tq, {
              modules: [r.W_],
              loop: a,
              grabCursor: s,
              centeredSlides: l,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => (e => {
                h(i[e])
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
                className: (0, c.classList)(d.slotContainer, d.top),
                children: [(0, n.jsx)(u, {
                  item: f?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, n.jsx)(u, {
                  item: f?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, n.jsx)(u, {
                  item: f?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map((e => (0, n.jsx)(t.o5, {
                children: a => {
                  let {
                    isActive: s
                  } = a;
                  return (0, n.jsx)(g, {
                    active: s,
                    ...e
                  })
                }
              }, e?.key))), (0, n.jsxs)("div", {
                className: (0, c.classList)(d.slotContainer, d.bottom),
                children: [(0, n.jsx)(u, {
                  item: f?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, n.jsx)(u, {
                  item: f?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, n.jsx)(m, {
                currentSlide: f
              })]
            })
          }) : null
        },
        h = e => {
          let {
            type: a = null,
            className: s,
            style: o,
            panoramaCarousel: t
          } = e;
          return a ? (r = f, c = t, (0, n.jsx)(r, {
            className: s,
            style: o,
            ...c
          })) : null;
          var r, c
        }
    }
  }
]);