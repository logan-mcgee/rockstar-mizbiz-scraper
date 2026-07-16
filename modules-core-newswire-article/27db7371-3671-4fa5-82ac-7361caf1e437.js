try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "27db7371-3671-4fa5-82ac-7361caf1e437", e._sentryDebugIdIdentifier = "sentry-dbid-27db7371-3671-4fa5-82ac-7361caf1e437")
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
  [1857, 6277], {
    76277(e, a, t) {
      t.r(a), t.d(a, {
        default: () => b
      });
      var n = t(39793),
        s = t(93082),
        i = t(281),
        l = t(14653),
        r = t(52321),
        o = t(98769),
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
        }) => (0, n.jsx)("div", {
          className: (0, d.default)(t, e ? c.fadeIn : "", a ? c.active : ""),
          children: s
        }),
        u = ({
          currentSlide: e,
          prevRef: a,
          nextRef: t
        }) => (0, n.jsxs)("div", {
          className: c.customPagination,
          children: [(0, n.jsx)("button", {
            type: "button",
            className: c.prevBtn,
            ref: a,
            "aria-label": "Previous Slide",
            children: (0, n.jsx)(r.JG, {
              label: "Previous Slide",
              size: "LG"
            })
          }), (0, n.jsx)("span", {
            children: e?.itemName ?? "Item"
          }), (0, n.jsx)("button", {
            type: "button",
            className: c.nextBtn,
            ref: t,
            "aria-label": "Next Slide",
            children: (0, n.jsx)(r.c_, {
              label: "Next Slide",
              size: "LG"
            })
          })]
        }),
        m = ({
          item: e,
          vertical: a,
          horizontal: t
        }) => e && e?.content ? (0, n.jsx)(f, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: (0, d.default)(c.slot, c[a], c[t]),
          children: (0, n.jsx)(o.A, {
            ...e.content[0]
          })
        }) : null,
        p = ({
          active: e = !1,
          backgroundContent: a,
          foregroundContent: t
        }) => (0, n.jsxs)("div", {
          className: c.slideContent,
          children: [a && (0, n.jsx)(f, {
            shouldFade: a?.fadeIn,
            condition: e,
            children: (0, n.jsx)("div", {
              className: c.backgroundContent,
              children: (0, n.jsx)(o.A, {
                ...a.imageWithBadge
              })
            })
          }), t && (0, n.jsx)(f, {
            shouldFade: t?.fadeIn,
            condition: e,
            children: (0, n.jsx)("div", {
              className: c.foregroundContent,
              children: (0, n.jsx)(o.A, {
                ...t.imageWithBadge
              })
            })
          })]
        }),
        g = ({
          loop: e = !0,
          grabCursor: a = !0,
          centeredSlides: t = !0,
          slides: r = null
        }) => {
          const [o, f] = (0, s.useState)(null), g = (0, s.useRef)(null), b = (0, s.useRef)(null), [v, w] = (0, s.useState)();
          return (0, s.useEffect)(() => {
            w({
              nextEl: b.current,
              prevEl: g.current
            })
          }, [b, g]), r ? (0, n.jsx)("div", {
            className: c.panoramaCarouselWrapper,
            children: (0, n.jsxs)(l.RC, {
              loop: e,
              grabCursor: a,
              centeredSlides: t,
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [i.A],
              navigation: v,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                f(r[e?.realIndex ?? 0])
              },
              onInit: e => {
                e.params.navigation.prevEl = g.current, e.params.navigation.nextEl = b.current, e?.navigation.init(), e?.navigation.update()
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
              children: [(0, n.jsxs)("div", {
                className: (0, d.default)(c.slotContainer, c.top),
                children: [(0, n.jsx)(m, {
                  item: o?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, n.jsx)(m, {
                  item: o?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, n.jsx)(m, {
                  item: o?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), r.map(e => (0, n.jsx)(l.qr, {
                children: ({
                  isActive: a
                }) => (0, n.jsx)(p, {
                  active: a,
                  ...e
                })
              }, e?.key)), (0, n.jsxs)("div", {
                className: (0, d.default)(c.slotContainer, c.bottom),
                children: [(0, n.jsx)(m, {
                  item: o?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, n.jsx)(m, {
                  item: o?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, n.jsx)(u, {
                currentSlide: o,
                prevRef: g,
                nextRef: b
              })]
            })
          }) : null
        },
        b = ({
          type: e = null,
          className: a,
          style: t,
          panoramaCarousel: s
        }) => {
          return e ? (i = g, l = s, (0, n.jsx)(i, {
            className: a,
            style: t,
            ...l
          })) : null;
          var i, l
        }
    },
    281(e, a, t) {
      t.d(a, {
        A: () => i
      });
      var n = t(61122),
        s = t(20212);

      function i(e) {
        let {
          swiper: a,
          extendParams: t,
          on: i,
          emit: l
        } = e;

        function r(e) {
          let t;
          return e && "string" == typeof e && a.isElement && (t = a.el.querySelector(e) || a.hostEl.querySelector(e), t) ? t : (e && ("string" == typeof e && (t = [...document.querySelectorAll(e)]), a.params.uniqueNavElements && "string" == typeof e && t && t.length > 1 && 1 === a.el.querySelectorAll(e).length ? t = a.el.querySelector(e) : t && 1 === t.length && (t = t[0])), e && !t ? e : t)
        }

        function o(e, t) {
          const n = a.params.navigation;
          (e = (0, s.m)(e)).forEach(e => {
            e && (e.classList[t ? "add" : "remove"](...n.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = t), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](n.lockClass))
          })
        }

        function d() {
          const {
            nextEl: e,
            prevEl: t
          } = a.navigation;
          if (a.params.loop) return o(t, !1), void o(e, !1);
          o(t, a.isBeginning && !a.params.rewind), o(e, a.isEnd && !a.params.rewind)
        }

        function c(e) {
          e.preventDefault(), (!a.isBeginning || a.params.loop || a.params.rewind) && (a.slidePrev(), l("navigationPrev"))
        }

        function f(e) {
          e.preventDefault(), (!a.isEnd || a.params.loop || a.params.rewind) && (a.slideNext(), l("navigationNext"))
        }

        function u() {
          const e = a.params.navigation;
          if (a.params.navigation = (0, n.c)(a, a.originalParams.navigation, a.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let t = r(e.nextEl),
            i = r(e.prevEl);
          Object.assign(a.navigation, {
            nextEl: t,
            prevEl: i
          }), t = (0, s.m)(t), i = (0, s.m)(i);
          const l = (t, n) => {
            t && t.addEventListener("click", "next" === n ? f : c), !a.enabled && t && t.classList.add(...e.lockClass.split(" "))
          };
          t.forEach(e => l(e, "next")), i.forEach(e => l(e, "prev"))
        }

        function m() {
          let {
            nextEl: e,
            prevEl: t
          } = a.navigation;
          e = (0, s.m)(e), t = (0, s.m)(t);
          const n = (e, t) => {
            e.removeEventListener("click", "next" === t ? f : c), e.classList.remove(...a.params.navigation.disabledClass.split(" "))
          };
          e.forEach(e => n(e, "next")), t.forEach(e => n(e, "prev"))
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), a.navigation = {
          nextEl: null,
          prevEl: null
        }, i("init", () => {
          !1 === a.params.navigation.enabled ? p() : (u(), d())
        }), i("toEdge fromEdge lock unlock", () => {
          d()
        }), i("destroy", () => {
          m()
        }), i("enable disable", () => {
          let {
            nextEl: e,
            prevEl: t
          } = a.navigation;
          e = (0, s.m)(e), t = (0, s.m)(t), a.enabled ? d() : [...e, ...t].filter(e => !!e).forEach(e => e.classList.add(a.params.navigation.lockClass))
        }), i("click", (e, t) => {
          let {
            nextEl: n,
            prevEl: i
          } = a.navigation;
          n = (0, s.m)(n), i = (0, s.m)(i);
          const r = t.target;
          let o = i.includes(r) || n.includes(r);
          if (a.isElement && !o) {
            const e = t.path || t.composedPath && t.composedPath();
            e && (o = e.find(e => n.includes(e) || i.includes(e)))
          }
          if (a.params.navigation.hideOnClick && !o) {
            if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === r || a.pagination.el.contains(r))) return;
            let e;
            n.length ? e = n[0].classList.contains(a.params.navigation.hiddenClass) : i.length && (e = i[0].classList.contains(a.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...n, ...i].filter(e => !!e).forEach(e => e.classList.toggle(a.params.navigation.hiddenClass))
          }
        });
        const p = () => {
          a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")), m()
        };
        Object.assign(a.navigation, {
          enable: () => {
            a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")), u(), d()
          },
          disable: p,
          update: d,
          init: u,
          destroy: m
        })
      }
    }
  }
]);