try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "969683d6-5406-49b2-a1c0-1cb3dc57c824", e._sentryDebugIdIdentifier = "sentry-dbid-969683d6-5406-49b2-a1c0-1cb3dc57c824")
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
  [5827], {
    85827: (e, t, a) => {
      a.d(t, {
        Jq: () => d,
        U1: () => p,
        Vx: () => l,
        dK: () => o,
        WO: () => c
      });
      var s = a(60272),
        i = a(96501);

      function n(e, t, a, s) {
        return e.params.createElements && Object.keys(s).forEach(n => {
          if (!a[n] && !0 === a.auto) {
            let l = (0, i.e)(e.el, `.${s[n]}`)[0];
            l || (l = (0, i.c)("div", s[n]), l.className = s[n], e.el.append(l)), a[n] = l, t[n] = l
          }
        }), a
      }

      function l(e) {
        let {
          swiper: t,
          extendParams: a,
          on: s,
          emit: l
        } = e;

        function r(e) {
          let a;
          return e && "string" == typeof e && t.isElement && (a = t.el.querySelector(e) || t.hostEl.querySelector(e), a) ? a : (e && ("string" == typeof e && (a = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && a && a.length > 1 && 1 === t.el.querySelectorAll(e).length ? a = t.el.querySelector(e) : a && 1 === a.length && (a = a[0])), e && !a ? e : a)
        }

        function o(e, a) {
          const s = t.params.navigation;
          (e = (0, i.m)(e)).forEach(e => {
            e && (e.classList[a ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = a), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
          })
        }

        function d() {
          const {
            nextEl: e,
            prevEl: a
          } = t.navigation;
          if (t.params.loop) return o(a, !1), void o(e, !1);
          o(a, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function c(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), l("navigationPrev"))
        }

        function p(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), l("navigationNext"))
        }

        function u() {
          const e = t.params.navigation;
          if (t.params.navigation = n(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let a = r(e.nextEl),
            s = r(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: a,
            prevEl: s
          }), a = (0, i.m)(a), s = (0, i.m)(s);
          const l = (a, s) => {
            a && a.addEventListener("click", "next" === s ? p : c), !t.enabled && a && a.classList.add(...e.lockClass.split(" "))
          };
          a.forEach(e => l(e, "next")), s.forEach(e => l(e, "prev"))
        }

        function m() {
          let {
            nextEl: e,
            prevEl: a
          } = t.navigation;
          e = (0, i.m)(e), a = (0, i.m)(a);
          const s = (e, a) => {
            e.removeEventListener("click", "next" === a ? p : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach(e => s(e, "next")), a.forEach(e => s(e, "prev"))
        }
        a({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        }, s("init", () => {
          !1 === t.params.navigation.enabled ? g() : (u(), d())
        }), s("toEdge fromEdge lock unlock", () => {
          d()
        }), s("destroy", () => {
          m()
        }), s("enable disable", () => {
          let {
            nextEl: e,
            prevEl: a
          } = t.navigation;
          e = (0, i.m)(e), a = (0, i.m)(a), t.enabled ? d() : [...e, ...a].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
        }), s("click", (e, a) => {
          let {
            nextEl: s,
            prevEl: n
          } = t.navigation;
          s = (0, i.m)(s), n = (0, i.m)(n);
          const r = a.target;
          let o = n.includes(r) || s.includes(r);
          if (t.isElement && !o) {
            const e = a.path || a.composedPath && a.composedPath();
            e && (o = e.find(e => s.includes(e) || n.includes(e)))
          }
          if (t.params.navigation.hideOnClick && !o) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
            let e;
            s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...s, ...n].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
          }
        });
        const g = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), m()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), d()
          },
          disable: g,
          update: d,
          init: u,
          destroy: m
        })
      }

      function r(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }

      function o(e) {
        let {
          swiper: t,
          extendParams: a,
          on: s,
          emit: l
        } = e;
        const o = "swiper-pagination";
        let d;
        a({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`
          }
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let c = 0;

        function p() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function u(e, a) {
          const {
            bulletActiveClass: s
          } = t.params.pagination;
          e && (e = e[("prev" === a ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${a}`), (e = e[("prev" === a ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${a}-${a}`))
        }

        function m(e) {
          const a = e.target.closest(r(t.params.pagination.bulletClass));
          if (!a) return;
          e.preventDefault();
          const s = (0, i.i)(a) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === s) return;
            const e = (n = t.realIndex, l = s, (l %= o = t.slides.length) === 1 + (n %= o) ? "next" : l === n - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(s)
          } else t.slideTo(s);
          var n, l, o
        }

        function g() {
          const e = t.rtl,
            a = t.params.pagination;
          if (p()) return;
          let s, n, o = t.pagination.el;
          o = (0, i.m)(o);
          const m = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            g = t.params.loop ? Math.ceil(m / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (n = t.previousRealIndex || 0, s = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (s = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, s = t.activeIndex || 0), "bullets" === a.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const l = t.pagination.bullets;
            let r, p, m;
            if (a.dynamicBullets && (d = (0, i.h)(l[0], t.isHorizontal() ? "width" : "height", !0), o.forEach(e => {
                e.style[t.isHorizontal() ? "width" : "height"] = d * (a.dynamicMainBullets + 4) + "px"
              }), a.dynamicMainBullets > 1 && void 0 !== n && (c += s - (n || 0), c > a.dynamicMainBullets - 1 ? c = a.dynamicMainBullets - 1 : c < 0 && (c = 0)), r = Math.max(s - c, 0), p = r + (Math.min(l.length, a.dynamicMainBullets) - 1), m = (p + r) / 2), l.forEach(e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${a.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...t)
              }), o.length > 1) l.forEach(e => {
              const n = (0, i.i)(e);
              n === s ? e.classList.add(...a.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), a.dynamicBullets && (n >= r && n <= p && e.classList.add(...`${a.bulletActiveClass}-main`.split(" ")), n === r && u(e, "prev"), n === p && u(e, "next"))
            });
            else {
              const e = l[s];
              if (e && e.classList.add(...a.bulletActiveClass.split(" ")), t.isElement && l.forEach((e, t) => {
                  e.setAttribute("part", t === s ? "bullet-active" : "bullet")
                }), a.dynamicBullets) {
                const e = l[r],
                  t = l[p];
                for (let e = r; e <= p; e += 1) l[e] && l[e].classList.add(...`${a.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(t, "next")
              }
            }
            if (a.dynamicBullets) {
              const s = Math.min(l.length, a.dynamicMainBullets + 4),
                i = (d * s - d) / 2 - m * d,
                n = e ? "right" : "left";
              l.forEach(e => {
                e.style[t.isHorizontal() ? n : "top"] = `${i}px`
              })
            }
          }
          o.forEach((e, n) => {
            if ("fraction" === a.type && (e.querySelectorAll(r(a.currentClass)).forEach(e => {
                e.textContent = a.formatFractionCurrent(s + 1)
              }), e.querySelectorAll(r(a.totalClass)).forEach(e => {
                e.textContent = a.formatFractionTotal(g)
              })), "progressbar" === a.type) {
              let i;
              i = a.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const n = (s + 1) / g;
              let l = 1,
                o = 1;
              "horizontal" === i ? l = n : o = n, e.querySelectorAll(r(a.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
              })
            }
            "custom" === a.type && a.renderCustom ? ((0, i.s)(e, a.renderCustom(t, s + 1, g)), 0 === n && l("paginationRender", e)) : (0 === n && l("paginationRender", e), l("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass)
          })
        }

        function f() {
          const e = t.params.pagination;
          if (p()) return;
          const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let s = t.pagination.el;
          s = (0, i.m)(s);
          let n = "";
          if ("bullets" === e.type) {
            let s = t.params.loop ? Math.ceil(a / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && s > a && (s = a);
            for (let a = 0; a < s; a += 1) e.renderBullet ? n += e.renderBullet.call(t, a, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], s.forEach(a => {
            "custom" !== e.type && (0, i.s)(a, n || ""), "bullets" === e.type && t.pagination.bullets.push(...a.querySelectorAll(r(e.bulletClass)))
          }), "custom" !== e.type && l("paginationRender", s[0])
        }

        function v() {
          t.params.pagination = n(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let a;
          "string" == typeof e.el && t.isElement && (a = t.el.querySelector(e.el)), a || "string" != typeof e.el || (a = [...document.querySelectorAll(e.el)]), a || (a = e.el), a && 0 !== a.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(a) && a.length > 1 && (a = [...t.el.querySelectorAll(e.el)], a.length > 1 && (a = a.find(e => (0, i.b)(e, ".swiper")[0] === t.el))), Array.isArray(a) && 1 === a.length && (a = a[0]), Object.assign(t.pagination, {
            el: a
          }), a = (0, i.m)(a), a.forEach(a => {
            "bullets" === e.type && e.clickable && a.classList.add(...(e.clickableClass || "").split(" ")), a.classList.add(e.modifierClass + e.type), a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (a.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && a.classList.add(e.progressbarOppositeClass), e.clickable && a.addEventListener("click", m), t.enabled || a.classList.add(e.lockClass)
          }))
        }

        function b() {
          const e = t.params.pagination;
          if (p()) return;
          let a = t.pagination.el;
          a && (a = (0, i.m)(a), a.forEach(a => {
            a.classList.remove(e.hiddenClass), a.classList.remove(e.modifierClass + e.type), a.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (a.classList.remove(...(e.clickableClass || "").split(" ")), a.removeEventListener("click", m))
          })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        s("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: a
          } = t.pagination;
          a = (0, i.m)(a), a.forEach(a => {
            a.classList.remove(e.horizontalClass, e.verticalClass), a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), s("init", () => {
          !1 === t.params.pagination.enabled ? h() : (v(), f(), g())
        }), s("activeIndexChange", () => {
          void 0 === t.snapIndex && g()
        }), s("snapIndexChange", () => {
          g()
        }), s("snapGridLengthChange", () => {
          f(), g()
        }), s("destroy", () => {
          b()
        }), s("enable disable", () => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, i.m)(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }), s("lock unlock", () => {
          g()
        }), s("click", (e, a) => {
          const s = a.target,
            n = (0, i.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
            const e = n[0].classList.contains(t.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"), n.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass))
          }
        });
        const h = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, i.m)(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), b()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, i.m)(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), v(), f(), g()
          },
          disable: h,
          render: f,
          update: g,
          init: v,
          destroy: b
        })
      }

      function d(e) {
        let {
          swiper: t,
          extendParams: a,
          on: n
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
        let l, o, d = null,
          c = (new Date).getTime();

        function p(e) {
          const t = d;
          0 !== t.length && (0, i.s)(t, e)
        }

        function u(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function m(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function g(e, t) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function f(e, t) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function v(e, t) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
          })
        }

        function b(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function h(e) {
          (e = (0, i.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function y(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const a = t.params.a11y,
            s = e.target;
          if (!t.pagination || !t.pagination.el || s !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(r(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, i.m)(t.navigation.prevEl);
              (0, i.m)(t.navigation.nextEl).includes(s) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? p(a.lastSlideMessage) : p(a.nextSlideMessage)), e.includes(s) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? p(a.firstSlideMessage) : p(a.prevSlideMessage))
            }
            t.pagination && s.matches(r(t.params.pagination.bulletClass)) && s.click()
          }
        }

        function E() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function w() {
          return E() && t.params.pagination.clickable
        }
        const C = (e, t, a) => {
            u(e), "BUTTON" !== e.tagName && (g(e, "button"), e.addEventListener("keydown", y)), v(e, a),
              function(e, t) {
                (e = (0, i.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          x = e => {
            o && o !== e.target && !o.contains(e.target) && (l = !0), t.a11y.clicked = !0
          },
          M = () => {
            l = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1)
              })
            })
          },
          L = e => {
            c = (new Date).getTime()
          },
          k = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - c < 100) return;
            const a = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!a || !t.slides.includes(a)) return;
            o = a;
            const s = t.slides.indexOf(a) === t.activeIndex,
              i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(a);
            s || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              l || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(a.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(a)), 0), l = !1)
            }))
          },
          T = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && f(t.slides, e.itemRoleDescriptionMessage), e.slideRole && g(t.slides, e.slideRole);
            const a = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((s, i) => {
              const n = t.params.loop ? parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i;
              v(s, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, a))
            })
          };
        n("beforeInit", () => {
          d = (0, i.c)("span", t.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        }), n("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(d);
            const a = t.el;
            e.containerRoleDescriptionMessage && f(a, e.containerRoleDescriptionMessage), e.containerMessage && v(a, e.containerMessage), e.containerRole && g(a, e.containerRole);
            const n = t.wrapperEl,
              l = e.id || n.getAttribute("id") || `swiper-wrapper-${r=16,void 0===r&&(r=16),"x".repeat(r).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var r;
            const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var c, p;
            c = n, p = l, (c = (0, i.m)(c)).forEach(e => {
                e.setAttribute("id", p)
              }),
              function(e, t) {
                (e = (0, i.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(n, o), T();
            let {
              nextEl: u,
              prevEl: m
            } = t.navigation ? t.navigation : {};
            u = (0, i.m)(u), m = (0, i.m)(m), u && u.forEach(t => C(t, l, e.nextSlideMessage)), m && m.forEach(t => C(t, l, e.prevSlideMessage)), w() && (0, i.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", y)
            }), (0, s.g)().addEventListener("visibilitychange", L), t.el.addEventListener("focus", k, !0), t.el.addEventListener("focus", k, !0), t.el.addEventListener("pointerdown", x, !0), t.el.addEventListener("pointerup", M, !0)
          })()
        }), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && T()
        }), n("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: a
            } = t.navigation;
            a && (t.isBeginning ? (b(a), m(a)) : (h(a), u(a))), e && (t.isEnd ? (b(e), m(e)) : (h(e), u(e)))
          }()
        }), n("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            E() && t.pagination.bullets.forEach(a => {
              t.params.pagination.clickable && (u(a), t.params.pagination.renderBullet || (g(a, "button"), v(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, i.i)(a) + 1)))), a.matches(r(t.params.pagination.bulletActiveClass)) ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")
            })
          }()
        }), n("destroy", () => {
          t.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: a
            } = t.navigation ? t.navigation : {};
            e = (0, i.m)(e), a = (0, i.m)(a), e && e.forEach(e => e.removeEventListener("keydown", y)), a && a.forEach(e => e.removeEventListener("keydown", y)), w() && (0, i.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", y)
            }), (0, s.g)().removeEventListener("visibilitychange", L), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", k, !0), t.el.removeEventListener("pointerdown", x, !0), t.el.removeEventListener("pointerup", M, !0))
          }()
        })
      }

      function c(e) {
        let {
          swiper: t,
          extendParams: a,
          on: n
        } = e;
        a({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let l = !1,
          r = !1;

        function o() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const a = e.clickedIndex,
            s = e.clickedSlide;
          if (s && s.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == a) return;
          let i;
          i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : a, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }

        function d() {
          const {
            thumbs: e
          } = t.params;
          if (l) return !1;
          l = !0;
          const a = t.constructor;
          if (e.swiper instanceof a) {
            if (e.swiper.destroyed) return l = !1, !1;
            t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper.update()
          } else if ((0, i.o)(e.swiper)) {
            const s = Object.assign({}, e.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper = new a(s), r = !0
          }
          return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
        }

        function c(e) {
          const a = t.thumbs.swiper;
          if (!a || a.destroyed) return;
          const s = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
          let n = 1;
          const l = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), a.slides.forEach(e => e.classList.remove(l)), a.params.loop || a.params.virtual && a.params.virtual.enabled)
            for (let e = 0; e < n; e += 1)(0, i.e)(a.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach(e => {
              e.classList.add(l)
            });
          else
            for (let e = 0; e < n; e += 1) a.slides[t.realIndex + e] && a.slides[t.realIndex + e].classList.add(l);
          const r = t.params.thumbs.autoScrollOffset,
            o = r && !a.params.loop;
          if (t.realIndex !== a.realIndex || o) {
            const i = a.activeIndex;
            let n, l;
            if (a.params.loop) {
              const e = a.slides.find(e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`);
              n = a.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
            o && (n += "next" === l ? r : -1 * r), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > i ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > i && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0))
          }
        }
        t.thumbs = {
          swiper: null
        }, n("beforeInit", () => {
          const {
            thumbs: e
          } = t.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const a = (0, s.g)(),
                i = () => {
                  const s = "string" == typeof e.swiper ? a.querySelector(e.swiper) : e.swiper;
                  if (s && s.swiper) e.swiper = s.swiper, d(), c(!0);
                  else if (s) {
                    const a = `${t.params.eventsPrefix}init`,
                      i = n => {
                        e.swiper = n.detail[0], s.removeEventListener(a, i), d(), c(!0), e.swiper.update(), t.update()
                      };
                    s.addEventListener(a, i)
                  }
                  return s
                },
                n = () => {
                  t.destroyed || i() || requestAnimationFrame(n)
                };
              requestAnimationFrame(n)
            } else d(), c(!0)
        }), n("slideChange update resize observerUpdate", () => {
          c()
        }), n("setTransition", (e, a) => {
          const s = t.thumbs.swiper;
          s && !s.destroyed && s.setTransition(a)
        }), n("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
        }), Object.assign(t.thumbs, {
          init: d,
          update: c
        })
      }

      function p(e) {
        let {
          swiper: t,
          extendParams: a,
          emit: s,
          once: n
        } = e;
        a({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(t, {
          freeMode: {
            onTouchStart: function() {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                currentPos: t.rtl ? t.translate : -t.translate
              })
            },
            onTouchMove: function() {
              if (t.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: a
              } = t;
              0 === e.velocities.length && e.velocities.push({
                position: a[t.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: a[t.isHorizontal() ? "currentX" : "currentY"],
                time: (0, i.f)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: a
              } = e;
              if (t.params.cssMode) return;
              const {
                params: l,
                wrapperEl: r,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: c
              } = t, p = (0, i.f)() - c.touchStartTime;
              if (a < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (a > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (l.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      a = c.velocities.pop(),
                      s = e.position - a.position,
                      n = e.time - a.time;
                    t.velocity = s / n, t.velocity /= 2, Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || (0, i.f)() - e.time > 300) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= l.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                  let e = 1e3 * l.freeMode.momentumRatio;
                  const a = t.velocity * e;
                  let p = t.translate + a;
                  o && (p = -p);
                  let u, m = !1;
                  const g = 20 * Math.abs(t.velocity) * l.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate()) l.freeMode.momentumBounce ? (p + t.maxTranslate() < -g && (p = t.maxTranslate() - g), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (p > t.minTranslate()) l.freeMode.momentumBounce ? (p - t.minTranslate() > g && (p = t.minTranslate() + g), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (l.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break
                      } p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                  }
                  if (f && n("transitionEnd", () => {
                      t.loopFix()
                    }), 0 !== t.velocity) {
                    if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), l.freeMode.sticky) {
                      const a = Math.abs((o ? -p : p) - t.translate),
                        s = t.slidesSizesGrid[t.activeIndex];
                      e = a < s ? l.speed : a < 2 * s ? 1.5 * l.speed : 2.5 * l.speed
                    }
                  } else if (l.freeMode.sticky) return void t.slideToClosest();
                  l.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, i.l)(r, () => {
                    t && !t.destroyed && c.allowMomentumBounce && (s("momentumBounce"), t.setTransition(l.speed), setTimeout(() => {
                      t.setTranslate(u), (0, i.l)(r, () => {
                        t && !t.destroyed && t.transitionEnd()
                      })
                    }, 0))
                  })) : t.velocity ? (s("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, i.l)(r, () => {
                    t && !t.destroyed && t.transitionEnd()
                  }))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                  if (l.freeMode.sticky) return void t.slideToClosest();
                  l.freeMode && s("_freeModeNoMomentumRelease")
                }(!l.freeMode.momentum || p >= l.longSwipesMs) && (s("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
              }
            }
          }
        })
      }
    }
  }
]);