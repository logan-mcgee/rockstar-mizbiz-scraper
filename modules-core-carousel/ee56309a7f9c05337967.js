"use strict";
(self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [781], {
    781: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => g
      });
      var s = a(822),
        n = a(720),
        o = a(889),
        l = a(542),
        i = a(976);
      const r = {
        panoramaCarouselWrapper: "f11df373d33d2ee7b7b8",
        "swiper-navigation-disabled": "c18133483c2ac43ed666",
        fadeIn: "c0226c4d27c57cc9716f",
        active: "f021000f06be31b8ff9f",
        customPagination: "ec65c279a6e02061806a",
        slotContainer: "a26fb55dab08d1b15664",
        top: "f35be7935640f10c1a33",
        left: "d6722405bd01766308a0",
        right: "ee05675c866ccf3e8fe8",
        bottom: "cbca2e57950f81ba154c",
        slideContent: "c191a0bb7d573c895c09",
        backgroundContent: "f17f8dcafe3e9802c9dd",
        foregroundContent: "e8eff6919e067c5d701e"
      };
      var c = a(668);
      const d = e => {
          let {
            shouldFade: t,
            condition: a,
            className: s,
            children: n
          } = e;
          return (0, c.jsx)("div", {
            className: (0, l.classList)(s, t ? r.fadeIn : "", a ? r.active : ""),
            children: n
          })
        },
        m = e => {
          let {
            currentSlide: t
          } = e;
          return (0, c.jsx)("div", {
            className: r.customPagination,
            children: (0, c.jsx)("span", {
              children: t?.itemName ?? "Item"
            })
          })
        },
        u = e => {
          let {
            item: t,
            vertical: a,
            horizontal: s
          } = e;
          return t && t?.content ? (0, c.jsx)(d, {
            shouldFade: t?.fadeIn,
            condition: t?.fadeIn,
            className: (0, l.classList)(r.slot, r[a], r[s]),
            children: (0, c.jsx)(i.ImageWithBadge, {
              ...t.content[0]
            })
          }) : null
        },
        h = e => {
          let {
            active: t = !1,
            backgroundContent: a,
            foregroundContent: s
          } = e;
          return (0, c.jsxs)("div", {
            className: r.slideContent,
            children: [a && (0, c.jsx)(d, {
              shouldFade: a?.fadeIn,
              condition: t,
              children: (0, c.jsx)("div", {
                className: r.backgroundContent,
                children: (0, c.jsx)(i.ImageWithBadge, {
                  ...a.imageWithBadge
                })
              })
            }), s && (0, c.jsx)(d, {
              shouldFade: s?.fadeIn,
              condition: t,
              children: (0, c.jsx)("div", {
                className: r.foregroundContent,
                children: (0, c.jsx)(i.ImageWithBadge, {
                  ...s.imageWithBadge
                })
              })
            })]
          })
        },
        f = e => {
          let {
            loop: t = !0,
            grabCursor: a = !0,
            centeredSlides: i = !0,
            slides: d = null
          } = e;
          const [f, g] = (0, s.useState)(null);
          return d ? (0, c.jsx)("div", {
            className: r.panoramaCarouselWrapper,
            children: (0, c.jsxs)(n.tq, {
              modules: [o.W_],
              loop: t,
              grabCursor: a,
              centeredSlides: i,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => (e => {
                g(d[e])
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
                className: (0, l.classList)(r.slotContainer, r.top),
                children: [(0, c.jsx)(u, {
                  item: f?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, c.jsx)(u, {
                  item: f?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, c.jsx)(u, {
                  item: f?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), d.map((e => (0, c.jsx)(n.o5, {
                children: t => {
                  let {
                    isActive: a
                  } = t;
                  return (0, c.jsx)(h, {
                    active: a,
                    ...e
                  })
                }
              }, e?.key))), (0, c.jsxs)("div", {
                className: (0, l.classList)(r.slotContainer, r.bottom),
                children: [(0, c.jsx)(u, {
                  item: f?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, c.jsx)(u, {
                  item: f?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, c.jsx)(m, {
                currentSlide: f
              })]
            })
          }) : null
        },
        g = e => {
          let {
            type: t = null,
            className: a,
            style: s,
            panoramaCarousel: n
          } = e;
          return t ? (o = f, l = n, (0, c.jsx)(o, {
            className: a,
            style: s,
            ...l
          })) : null;
          var o, l
        }
    }
  }
]);