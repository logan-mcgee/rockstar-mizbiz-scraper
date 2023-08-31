"use strict";
(self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [727], {
    727: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => f
      });
      var s = a(932),
        n = a(822),
        o = a(763),
        c = a(542),
        l = a(976);
      const i = {
        panoramaCarouselWrapper: "bee0101446542c1ef11df373d33d2ee7b7b8",
        "swiper-navigation-disabled": "bee0101446542c1ec18133483c2ac43ed666",
        fadeIn: "bee0101446542c1ec0226c4d27c57cc9716f",
        active: "bee0101446542c1ef021000f06be31b8ff9f",
        customPagination: "bee0101446542c1eec65c279a6e02061806a",
        slotContainer: "bee0101446542c1ea26fb55dab08d1b15664",
        top: "bee0101446542c1ef35be7935640f10c1a33",
        left: "bee0101446542c1ed6722405bd01766308a0",
        right: "bee0101446542c1eee05675c866ccf3e8fe8",
        bottom: "bee0101446542c1ecbca2e57950f81ba154c",
        slideContent: "bee0101446542c1ec191a0bb7d573c895c09",
        backgroundContent: "bee0101446542c1ef17f8dcafe3e9802c9dd",
        foregroundContent: "bee0101446542c1ee8eff6919e067c5d701e"
      };
      var r = a(160);
      const d = e => {
          let {
            shouldFade: t,
            condition: a,
            className: s,
            children: n
          } = e;
          return (0, r.jsx)("div", {
            className: (0, c.classList)(s, t ? i.fadeIn : "", a ? i.active : ""),
            children: n
          })
        },
        m = e => {
          let {
            currentSlide: t
          } = e;
          return (0, r.jsx)("div", {
            className: i.customPagination,
            children: (0, r.jsx)("span", {
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
          return t && t?.content ? (0, r.jsx)(d, {
            shouldFade: t?.fadeIn,
            condition: t?.fadeIn,
            className: (0, c.classList)(i.slot, i[a], i[s]),
            children: (0, r.jsx)(l.ImageWithBadge, {
              ...t.content[0]
            })
          }) : null
        },
        b = e => {
          let {
            active: t = !1,
            backgroundContent: a,
            foregroundContent: s
          } = e;
          return (0, r.jsxs)("div", {
            className: i.slideContent,
            children: [a && (0, r.jsx)(d, {
              shouldFade: a?.fadeIn,
              condition: t,
              children: (0, r.jsx)("div", {
                className: i.backgroundContent,
                children: (0, r.jsx)(l.ImageWithBadge, {
                  ...a.imageWithBadge
                })
              })
            }), s && (0, r.jsx)(d, {
              shouldFade: s?.fadeIn,
              condition: t,
              children: (0, r.jsx)("div", {
                className: i.foregroundContent,
                children: (0, r.jsx)(l.ImageWithBadge, {
                  ...s.imageWithBadge
                })
              })
            })]
          })
        },
        h = e => {
          let {
            loop: t = !0,
            grabCursor: a = !0,
            centeredSlides: l = !0,
            slides: d = null
          } = e;
          const [h, f] = (0, s.useState)(null);
          return d ? (0, r.jsx)("div", {
            className: i.panoramaCarouselWrapper,
            children: (0, r.jsxs)(n.tq, {
              modules: [o.W_],
              loop: t,
              grabCursor: a,
              centeredSlides: l,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => (e => {
                f(d[e])
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
              children: [(0, r.jsxs)("div", {
                className: (0, c.classList)(i.slotContainer, i.top),
                children: [(0, r.jsx)(u, {
                  item: h?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, r.jsx)(u, {
                  item: h?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, r.jsx)(u, {
                  item: h?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), d.map((e => (0, r.jsx)(n.o5, {
                children: t => {
                  let {
                    isActive: a
                  } = t;
                  return (0, r.jsx)(b, {
                    active: a,
                    ...e
                  })
                }
              }, e?.key))), (0, r.jsxs)("div", {
                className: (0, c.classList)(i.slotContainer, i.bottom),
                children: [(0, r.jsx)(u, {
                  item: h?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, r.jsx)(u, {
                  item: h?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, r.jsx)(m, {
                currentSlide: h
              })]
            })
          }) : null
        },
        f = e => {
          let {
            type: t = null,
            className: a,
            style: s,
            panoramaCarousel: n
          } = e;
          return t ? (o = h, c = n, (0, r.jsx)(o, {
            className: a,
            style: s,
            ...c
          })) : null;
          var o, c
        }
    }
  }
]);