try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "45fef050-0d41-4420-b4af-156b5f422acb", e._sentryDebugIdIdentifier = "sentry-dbid-45fef050-0d41-4420-b4af-156b5f422acb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3059], {
    73059(e, a, t) {
      t.d(a, {
        A: () => o
      });
      var i = t(37015),
        n = t(20219),
        s = t(20212);

      function o(e) {
        let {
          swiper: a,
          extendParams: t,
          on: o
        } = e;
        t({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
          }
        }), a.a11y = {
          clicked: !1
        };
        let r, l, d = null,
          c = (new Date).getTime();

        function g(e) {
          const a = d;
          0 !== a.length && (0, s.s)(a, e)
        }

        function p(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function f(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function u(e, a) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("role", a)
          })
        }

        function m(e, a) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", a)
          })
        }

        function b(e, a) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-label", a)
          })
        }

        function v(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function E(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function h(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const t = a.params.a11y,
            i = e.target;
          if (!a.pagination || !a.pagination.el || i !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches((0, n.c)(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
              const e = (0, s.m)(a.navigation.prevEl);
              (0, s.m)(a.navigation.nextEl).includes(i) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? g(t.lastSlideMessage) : g(t.nextSlideMessage)), e.includes(i) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? g(t.firstSlideMessage) : g(t.prevSlideMessage))
            }
            a.pagination && i.matches((0, n.c)(a.params.pagination.bulletClass)) && i.click()
          }
        }

        function y() {
          return a.pagination && a.pagination.bullets && a.pagination.bullets.length
        }

        function w() {
          return y() && a.params.pagination.clickable
        }
        const M = (e, a, t) => {
            p(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", h)), b(e, t),
              function(e, a) {
                (e = (0, s.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", a)
                })
              }(e, a)
          },
          k = e => {
            l && l !== e.target && !l.contains(e.target) && (r = !0), a.a11y.clicked = !0
          },
          x = () => {
            r = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                a.destroyed || (a.a11y.clicked = !1)
              })
            })
          },
          L = e => {
            c = (new Date).getTime()
          },
          A = e => {
            if (a.a11y.clicked || !a.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - c < 100) return;
            const t = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
            if (!t || !a.slides.includes(t)) return;
            l = t;
            const i = a.slides.indexOf(t) === a.activeIndex,
              n = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(t);
            i || n || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame(() => {
              r || (a.params.loop ? a.slideToLoop(a.getSlideIndexWhenGrid(parseInt(t.getAttribute("data-swiper-slide-index"))), 0) : a.slideTo(a.getSlideIndexWhenGrid(a.slides.indexOf(t)), 0), r = !1)
            }))
          },
          S = () => {
            const e = a.params.a11y;
            e.itemRoleDescriptionMessage && m(a.slides, e.itemRoleDescriptionMessage), e.slideRole && u(a.slides, e.slideRole);
            const t = a.slides.length;
            e.slideLabelMessage && a.slides.forEach((i, n) => {
              const s = a.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n;
              b(i, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, t))
            })
          };
        o("beforeInit", () => {
          d = (0, s.c)("span", a.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), o("afterInit", () => {
          a.params.a11y.enabled && (() => {
            const e = a.params.a11y;
            a.el.append(d);
            const t = a.el;
            e.containerRoleDescriptionMessage && m(t, e.containerRoleDescriptionMessage), e.containerMessage && b(t, e.containerMessage), e.containerRole && u(t, e.containerRole);
            const n = a.wrapperEl,
              o = e.id || n.getAttribute("id") || `swiper-wrapper-${r=16,void 0===r&&(r=16),"x".repeat(r).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var r;
            const l = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
            var c, g;
            c = n, g = o, (c = (0, s.m)(c)).forEach(e => {
                e.setAttribute("id", g)
              }),
              function(e, a) {
                (e = (0, s.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", a)
                })
              }(n, l), S();
            let {
              nextEl: p,
              prevEl: f
            } = a.navigation ? a.navigation : {};
            p = (0, s.m)(p), f = (0, s.m)(f), p && p.forEach(a => M(a, o, e.nextSlideMessage)), f && f.forEach(a => M(a, o, e.prevSlideMessage)), w() && (0, s.m)(a.pagination.el).forEach(e => {
              e.addEventListener("keydown", h)
            }), (0, i.g)().addEventListener("visibilitychange", L), a.el.addEventListener("focus", A, !0), a.el.addEventListener("focus", A, !0), a.el.addEventListener("pointerdown", k, !0), a.el.addEventListener("pointerup", x, !0)
          })()
        }), o("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          a.params.a11y.enabled && S()
        }), o("fromEdge toEdge afterInit lock unlock", () => {
          a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const {
              nextEl: e,
              prevEl: t
            } = a.navigation;
            t && (a.isBeginning ? (v(t), f(t)) : (E(t), p(t))), e && (a.isEnd ? (v(e), f(e)) : (E(e), p(e)))
          }()
        }), o("paginationUpdate", () => {
          a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            y() && a.pagination.bullets.forEach(t => {
              a.params.pagination.clickable && (p(t), a.params.pagination.renderBullet || (u(t, "button"), b(t, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, s.i)(t) + 1)))), t.matches((0, n.c)(a.params.pagination.bulletActiveClass)) ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current")
            })
          }()
        }), o("destroy", () => {
          a.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: t
            } = a.navigation ? a.navigation : {};
            e = (0, s.m)(e), t = (0, s.m)(t), e && e.forEach(e => e.removeEventListener("keydown", h)), t && t.forEach(e => e.removeEventListener("keydown", h)), w() && (0, s.m)(a.pagination.el).forEach(e => {
              e.removeEventListener("keydown", h)
            }), (0, i.g)().removeEventListener("visibilitychange", L), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", A, !0), a.el.removeEventListener("pointerdown", k, !0), a.el.removeEventListener("pointerup", x, !0))
          }()
        })
      }
    }
  }
]);