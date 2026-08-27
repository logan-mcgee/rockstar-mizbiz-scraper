try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6f25420a-8b76-4b55-b0e0-04479f03138b", e._sentryDebugIdIdentifier = "sentry-dbid-6f25420a-8b76-4b55-b0e0-04479f03138b")
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
    73059(e, t, a) {
      a.d(t, {
        A: () => o
      });
      var i = a(37015),
        n = a(20219),
        s = a(20212);

      function o(e) {
        let {
          swiper: t,
          extendParams: a,
          on: o
        } = e;
        a({
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
        }), t.a11y = {
          clicked: !1
        };
        let r, l, d = null,
          c = (new Date).getTime();

        function g(e) {
          const t = d;
          0 !== t.length && (0, s.s)(t, e)
        }

        function p(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function u(e) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function f(e, t) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function b(e, t) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function m(e, t) {
          (e = (0, s.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
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
          const a = t.params.a11y,
            i = e.target;
          if (!t.pagination || !t.pagination.el || i !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches((0, n.c)(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, s.m)(t.navigation.prevEl);
              (0, s.m)(t.navigation.nextEl).includes(i) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? g(a.lastSlideMessage) : g(a.nextSlideMessage)), e.includes(i) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? g(a.firstSlideMessage) : g(a.prevSlideMessage))
            }
            t.pagination && i.matches((0, n.c)(t.params.pagination.bulletClass)) && i.click()
          }
        }

        function y() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function w() {
          return y() && t.params.pagination.clickable
        }
        const M = (e, t, a) => {
            p(e), "BUTTON" !== e.tagName && (f(e, "button"), e.addEventListener("keydown", h)), m(e, a),
              function(e, t) {
                (e = (0, s.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          k = e => {
            l && l !== e.target && !l.contains(e.target) && (r = !0), t.a11y.clicked = !0
          },
          x = () => {
            r = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1)
              })
            })
          },
          L = e => {
            c = (new Date).getTime()
          },
          A = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - c < 100) return;
            const a = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!a || !t.slides.includes(a)) return;
            l = a;
            const i = t.slides.indexOf(a) === t.activeIndex,
              n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(a);
            i || n || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              r || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(a.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(a)), 0), r = !1)
            }))
          },
          S = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && b(t.slides, e.itemRoleDescriptionMessage), e.slideRole && f(t.slides, e.slideRole);
            const a = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((i, n) => {
              const s = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n;
              m(i, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, a))
            })
          };
        o("beforeInit", () => {
          d = (0, s.c)("span", t.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), o("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(d);
            const a = t.el;
            e.containerRoleDescriptionMessage && b(a, e.containerRoleDescriptionMessage), e.containerMessage && m(a, e.containerMessage), e.containerRole && f(a, e.containerRole);
            const n = t.wrapperEl,
              o = e.id || n.getAttribute("id") || `swiper-wrapper-${r=16,void 0===r&&(r=16),"x".repeat(r).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var r;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var c, g;
            c = n, g = o, (c = (0, s.m)(c)).forEach(e => {
                e.setAttribute("id", g)
              }),
              function(e, t) {
                (e = (0, s.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(n, l), S();
            let {
              nextEl: p,
              prevEl: u
            } = t.navigation ? t.navigation : {};
            p = (0, s.m)(p), u = (0, s.m)(u), p && p.forEach(t => M(t, o, e.nextSlideMessage)), u && u.forEach(t => M(t, o, e.prevSlideMessage)), w() && (0, s.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", h)
            }), (0, i.g)().addEventListener("visibilitychange", L), t.el.addEventListener("focus", A, !0), t.el.addEventListener("focus", A, !0), t.el.addEventListener("pointerdown", k, !0), t.el.addEventListener("pointerup", x, !0)
          })()
        }), o("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && S()
        }), o("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: a
            } = t.navigation;
            a && (t.isBeginning ? (v(a), u(a)) : (E(a), p(a))), e && (t.isEnd ? (v(e), u(e)) : (E(e), p(e)))
          }()
        }), o("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            y() && t.pagination.bullets.forEach(a => {
              t.params.pagination.clickable && (p(a), t.params.pagination.renderBullet || (f(a, "button"), m(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, s.i)(a) + 1)))), a.matches((0, n.c)(t.params.pagination.bulletActiveClass)) ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")
            })
          }()
        }), o("destroy", () => {
          t.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: a
            } = t.navigation ? t.navigation : {};
            e = (0, s.m)(e), a = (0, s.m)(a), e && e.forEach(e => e.removeEventListener("keydown", h)), a && a.forEach(e => e.removeEventListener("keydown", h)), w() && (0, s.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", h)
            }), (0, i.g)().removeEventListener("visibilitychange", L), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", A, !0), t.el.removeEventListener("pointerdown", k, !0), t.el.removeEventListener("pointerup", x, !0))
          }()
        })
      }
    }
  }
]);