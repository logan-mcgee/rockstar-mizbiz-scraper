try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7a584eac-a946-4f56-a34f-8b92a3df9fd8", e._sentryDebugIdIdentifier = "sentry-dbid-7a584eac-a946-4f56-a34f-8b92a3df9fd8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2066], {
    52066: (e, a, t) => {
      t.d(a, {
        Jq: () => d,
        U1: () => p,
        Vx: () => l,
        dK: () => o,
        WO: () => c
      });
      var s = t(11304),
        i = t(52477);

      function n(e, a, t, s) {
        return e.params.createElements && Object.keys(s).forEach((n => {
          if (!t[n] && !0 === t.auto) {
            let l = (0, i.e)(e.el, `.${s[n]}`)[0];
            l || (l = (0, i.c)("div", s[n]), l.className = s[n], e.el.append(l)), t[n] = l, a[n] = l
          }
        })), t
      }

      function l(e) {
        let {
          swiper: a,
          extendParams: t,
          on: s,
          emit: l
        } = e;

        function r(e) {
          let t;
          return e && "string" == typeof e && a.isElement && (t = a.el.querySelector(e) || a.hostEl.querySelector(e), t) ? t : (e && ("string" == typeof e && (t = [...document.querySelectorAll(e)]), a.params.uniqueNavElements && "string" == typeof e && t && t.length > 1 && 1 === a.el.querySelectorAll(e).length ? t = a.el.querySelector(e) : t && 1 === t.length && (t = t[0])), e && !t ? e : t)
        }

        function o(e, t) {
          const s = a.params.navigation;
          (e = (0, i.m)(e)).forEach((e => {
            e && (e.classList[t ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = t), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass))
          }))
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

        function p(e) {
          e.preventDefault(), (!a.isEnd || a.params.loop || a.params.rewind) && (a.slideNext(), l("navigationNext"))
        }

        function u() {
          const e = a.params.navigation;
          if (a.params.navigation = n(a, a.originalParams.navigation, a.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let t = r(e.nextEl),
            s = r(e.prevEl);
          Object.assign(a.navigation, {
            nextEl: t,
            prevEl: s
          }), t = (0, i.m)(t), s = (0, i.m)(s);
          const l = (t, s) => {
            t && t.addEventListener("click", "next" === s ? p : c), !a.enabled && t && t.classList.add(...e.lockClass.split(" "))
          };
          t.forEach((e => l(e, "next"))), s.forEach((e => l(e, "prev")))
        }

        function m() {
          let {
            nextEl: e,
            prevEl: t
          } = a.navigation;
          e = (0, i.m)(e), t = (0, i.m)(t);
          const s = (e, t) => {
            e.removeEventListener("click", "next" === t ? p : c), e.classList.remove(...a.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => s(e, "next"))), t.forEach((e => s(e, "prev")))
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
        }, s("init", (() => {
          !1 === a.params.navigation.enabled ? g() : (u(), d())
        })), s("toEdge fromEdge lock unlock", (() => {
          d()
        })), s("destroy", (() => {
          m()
        })), s("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: t
          } = a.navigation;
          e = (0, i.m)(e), t = (0, i.m)(t), a.enabled ? d() : [...e, ...t].filter((e => !!e)).forEach((e => e.classList.add(a.params.navigation.lockClass)))
        })), s("click", ((e, t) => {
          let {
            nextEl: s,
            prevEl: n
          } = a.navigation;
          s = (0, i.m)(s), n = (0, i.m)(n);
          const r = t.target;
          let o = n.includes(r) || s.includes(r);
          if (a.isElement && !o) {
            const e = t.path || t.composedPath && t.composedPath();
            e && (o = e.find((e => s.includes(e) || n.includes(e))))
          }
          if (a.params.navigation.hideOnClick && !o) {
            if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === r || a.pagination.el.contains(r))) return;
            let e;
            s.length ? e = s[0].classList.contains(a.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(a.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...s, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(a.params.navigation.hiddenClass)))
          }
        }));
        const g = () => {
          a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")), m()
        };
        Object.assign(a.navigation, {
          enable: () => {
            a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")), u(), d()
          },
          disable: g,
          update: d,
          init: u,
          destroy: m
        })
      }

      function r(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function o(e) {
        let {
          swiper: a,
          extendParams: t,
          on: s,
          emit: l
        } = e;
        const o = "swiper-pagination";
        let d;
        t({
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
        }), a.pagination = {
          el: null,
          bullets: []
        };
        let c = 0;

        function p() {
          return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length
        }

        function u(e, t) {
          const {
            bulletActiveClass: s
          } = a.params.pagination;
          e && (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${t}`), (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${t}-${t}`))
        }

        function m(e) {
          const t = e.target.closest(r(a.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          const s = (0, i.h)(t) * a.params.slidesPerGroup;
          if (a.params.loop) {
            if (a.realIndex === s) return;
            const e = (n = a.realIndex, l = s, (l %= o = a.slides.length) == 1 + (n %= o) ? "next" : l === n - 1 ? "previous" : void 0);
            "next" === e ? a.slideNext() : "previous" === e ? a.slidePrev() : a.slideToLoop(s)
          } else a.slideTo(s);
          var n, l, o
        }

        function g() {
          const e = a.rtl,
            t = a.params.pagination;
          if (p()) return;
          let s, n, o = a.pagination.el;
          o = (0, i.m)(o);
          const m = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
            g = a.params.loop ? Math.ceil(m / a.params.slidesPerGroup) : a.snapGrid.length;
          if (a.params.loop ? (n = a.previousRealIndex || 0, s = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (s = a.snapIndex, n = a.previousSnapIndex) : (n = a.previousIndex || 0, s = a.activeIndex || 0), "bullets" === t.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const l = a.pagination.bullets;
            let r, p, m;
            if (t.dynamicBullets && (d = (0, i.f)(l[0], a.isHorizontal() ? "width" : "height", !0), o.forEach((e => {
                e.style[a.isHorizontal() ? "width" : "height"] = d * (t.dynamicMainBullets + 4) + "px"
              })), t.dynamicMainBullets > 1 && void 0 !== n && (c += s - (n || 0), c > t.dynamicMainBullets - 1 ? c = t.dynamicMainBullets - 1 : c < 0 && (c = 0)), r = Math.max(s - c, 0), p = r + (Math.min(l.length, t.dynamicMainBullets) - 1), m = (p + r) / 2), l.forEach((e => {
                const a = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${t.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...a)
              })), o.length > 1) l.forEach((e => {
              const n = (0, i.h)(e);
              n === s ? e.classList.add(...t.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), t.dynamicBullets && (n >= r && n <= p && e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")), n === r && u(e, "prev"), n === p && u(e, "next"))
            }));
            else {
              const e = l[s];
              if (e && e.classList.add(...t.bulletActiveClass.split(" ")), a.isElement && l.forEach(((e, a) => {
                  e.setAttribute("part", a === s ? "bullet-active" : "bullet")
                })), t.dynamicBullets) {
                const e = l[r],
                  a = l[p];
                for (let e = r; e <= p; e += 1) l[e] && l[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(a, "next")
              }
            }
            if (t.dynamicBullets) {
              const s = Math.min(l.length, t.dynamicMainBullets + 4),
                i = (d * s - d) / 2 - m * d,
                n = e ? "right" : "left";
              l.forEach((e => {
                e.style[a.isHorizontal() ? n : "top"] = `${i}px`
              }))
            }
          }
          o.forEach(((e, i) => {
            if ("fraction" === t.type && (e.querySelectorAll(r(t.currentClass)).forEach((e => {
                e.textContent = t.formatFractionCurrent(s + 1)
              })), e.querySelectorAll(r(t.totalClass)).forEach((e => {
                e.textContent = t.formatFractionTotal(g)
              }))), "progressbar" === t.type) {
              let i;
              i = t.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
              const n = (s + 1) / g;
              let l = 1,
                o = 1;
              "horizontal" === i ? l = n : o = n, e.querySelectorAll(r(t.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${a.params.speed}ms`
              }))
            }
            "custom" === t.type && t.renderCustom ? (e.innerHTML = t.renderCustom(a, s + 1, g), 0 === i && l("paginationRender", e)) : (0 === i && l("paginationRender", e), l("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](t.lockClass)
          }))
        }

        function f() {
          const e = a.params.pagination;
          if (p()) return;
          const t = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
          let s = a.pagination.el;
          s = (0, i.m)(s);
          let n = "";
          if ("bullets" === e.type) {
            let s = a.params.loop ? Math.ceil(t / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && s > t && (s = t);
            for (let t = 0; t < s; t += 1) e.renderBullet ? n += e.renderBullet.call(a, t, e.bulletClass) : n += `<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], s.forEach((t => {
            "custom" !== e.type && (t.innerHTML = n || ""), "bullets" === e.type && a.pagination.bullets.push(...t.querySelectorAll(r(e.bulletClass)))
          })), "custom" !== e.type && l("paginationRender", s[0])
        }

        function b() {
          a.params.pagination = n(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
          });
          const e = a.params.pagination;
          if (!e.el) return;
          let t;
          "string" == typeof e.el && a.isElement && (t = a.el.querySelector(e.el)), t || "string" != typeof e.el || (t = [...document.querySelectorAll(e.el)]), t || (t = e.el), t && 0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(t) && t.length > 1 && (t = [...a.el.querySelectorAll(e.el)], t.length > 1 && (t = t.find((e => (0, i.a)(e, ".swiper")[0] === a.el)))), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(a.pagination, {
            el: t
          }), t = (0, i.m)(t), t.forEach((t => {
            "bullets" === e.type && e.clickable && t.classList.add(...(e.clickableClass || "").split(" ")), t.classList.add(e.modifierClass + e.type), t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.classList.add(e.progressbarOppositeClass), e.clickable && t.addEventListener("click", m), a.enabled || t.classList.add(e.lockClass)
          })))
        }

        function v() {
          const e = a.params.pagination;
          if (p()) return;
          let t = a.pagination.el;
          t && (t = (0, i.m)(t), t.forEach((t => {
            t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", m))
          }))), a.pagination.bullets && a.pagination.bullets.forEach((a => a.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        s("changeDirection", (() => {
          if (!a.pagination || !a.pagination.el) return;
          const e = a.params.pagination;
          let {
            el: t
          } = a.pagination;
          t = (0, i.m)(t), t.forEach((t => {
            t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), s("init", (() => {
          !1 === a.params.pagination.enabled ? h() : (b(), f(), g())
        })), s("activeIndexChange", (() => {
          void 0 === a.snapIndex && g()
        })), s("snapIndexChange", (() => {
          g()
        })), s("snapGridLengthChange", (() => {
          f(), g()
        })), s("destroy", (() => {
          v()
        })), s("enable disable", (() => {
          let {
            el: e
          } = a.pagination;
          e && (e = (0, i.m)(e), e.forEach((e => e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass))))
        })), s("lock unlock", (() => {
          g()
        })), s("click", ((e, t) => {
          const s = t.target,
            n = (0, i.m)(a.pagination.el);
          if (a.params.pagination.el && a.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && s === a.navigation.nextEl || a.navigation.prevEl && s === a.navigation.prevEl)) return;
            const e = n[0].classList.contains(a.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(a.params.pagination.hiddenClass)))
          }
        }));
        const h = () => {
          a.el.classList.add(a.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = a.pagination;
          e && (e = (0, i.m)(e), e.forEach((e => e.classList.add(a.params.pagination.paginationDisabledClass)))), v()
        };
        Object.assign(a.pagination, {
          enable: () => {
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = a.pagination;
            e && (e = (0, i.m)(e), e.forEach((e => e.classList.remove(a.params.pagination.paginationDisabledClass)))), b(), f(), g()
          },
          disable: h,
          render: f,
          update: g,
          init: b,
          destroy: v
        })
      }

      function d(e) {
        let {
          swiper: a,
          extendParams: t,
          on: n
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
        let l, o, d = null,
          c = (new Date).getTime();

        function p(e) {
          const a = d;
          0 !== a.length && (a.innerHTML = "", a.innerHTML = e)
        }

        function u(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("tabIndex", "0")
          }))
        }

        function m(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("tabIndex", "-1")
          }))
        }

        function g(e, a) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("role", a)
          }))
        }

        function f(e, a) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-roledescription", a)
          }))
        }

        function b(e, a) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-label", a)
          }))
        }

        function v(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-disabled", !0)
          }))
        }

        function h(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-disabled", !1)
          }))
        }

        function y(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const t = a.params.a11y,
            s = e.target;
          if (!a.pagination || !a.pagination.el || s !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches(r(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
              const e = (0, i.m)(a.navigation.prevEl);
              (0, i.m)(a.navigation.nextEl).includes(s) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? p(t.lastSlideMessage) : p(t.nextSlideMessage)), e.includes(s) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? p(t.firstSlideMessage) : p(t.prevSlideMessage))
            }
            a.pagination && s.matches(r(a.params.pagination.bulletClass)) && s.click()
          }
        }

        function E() {
          return a.pagination && a.pagination.bullets && a.pagination.bullets.length
        }

        function w() {
          return E() && a.params.pagination.clickable
        }
        const C = (e, a, t) => {
            u(e), "BUTTON" !== e.tagName && (g(e, "button"), e.addEventListener("keydown", y)), b(e, t),
              function(e, a) {
                (e = (0, i.m)(e)).forEach((e => {
                  e.setAttribute("aria-controls", a)
                }))
              }(e, a)
          },
          x = e => {
            o && o !== e.target && !o.contains(e.target) && (l = !0), a.a11y.clicked = !0
          },
          M = () => {
            l = !1, requestAnimationFrame((() => {
              requestAnimationFrame((() => {
                a.destroyed || (a.a11y.clicked = !1)
              }))
            }))
          },
          L = e => {
            c = (new Date).getTime()
          },
          k = e => {
            if (a.a11y.clicked || !a.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - c < 100) return;
            const t = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
            if (!t || !a.slides.includes(t)) return;
            o = t;
            const s = a.slides.indexOf(t) === a.activeIndex,
              i = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(t);
            s || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame((() => {
              l || (a.params.loop ? a.slideToLoop(parseInt(t.getAttribute("data-swiper-slide-index")), 0) : a.slideTo(a.slides.indexOf(t), 0), l = !1)
            })))
          },
          T = () => {
            const e = a.params.a11y;
            e.itemRoleDescriptionMessage && f(a.slides, e.itemRoleDescriptionMessage), e.slideRole && g(a.slides, e.slideRole);
            const t = a.slides.length;
            e.slideLabelMessage && a.slides.forEach(((s, i) => {
              const n = a.params.loop ? parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i;
              b(s, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, t))
            }))
          };
        n("beforeInit", (() => {
          d = (0, i.c)("span", a.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
        })), n("afterInit", (() => {
          a.params.a11y.enabled && (() => {
            const e = a.params.a11y;
            a.el.append(d);
            const t = a.el;
            e.containerRoleDescriptionMessage && f(t, e.containerRoleDescriptionMessage), e.containerMessage && b(t, e.containerMessage), e.containerRole && g(t, e.containerRole);
            const n = a.wrapperEl,
              l = e.id || n.getAttribute("id") || `swiper-wrapper-${r=16,void 0===r&&(r=16),"x".repeat(r).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
            var r;
            const o = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
            var c, p;
            c = n, p = l, (c = (0, i.m)(c)).forEach((e => {
                e.setAttribute("id", p)
              })),
              function(e, a) {
                (e = (0, i.m)(e)).forEach((e => {
                  e.setAttribute("aria-live", a)
                }))
              }(n, o), T();
            let {
              nextEl: u,
              prevEl: m
            } = a.navigation ? a.navigation : {};
            u = (0, i.m)(u), m = (0, i.m)(m), u && u.forEach((a => C(a, l, e.nextSlideMessage))), m && m.forEach((a => C(a, l, e.prevSlideMessage))), w() && (0, i.m)(a.pagination.el).forEach((e => {
              e.addEventListener("keydown", y)
            })), (0, s.g)().addEventListener("visibilitychange", L), a.el.addEventListener("focus", k, !0), a.el.addEventListener("focus", k, !0), a.el.addEventListener("pointerdown", x, !0), a.el.addEventListener("pointerup", M, !0)
          })()
        })), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
          a.params.a11y.enabled && T()
        })), n("fromEdge toEdge afterInit lock unlock", (() => {
          a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const {
              nextEl: e,
              prevEl: t
            } = a.navigation;
            t && (a.isBeginning ? (v(t), m(t)) : (h(t), u(t))), e && (a.isEnd ? (v(e), m(e)) : (h(e), u(e)))
          }()
        })), n("paginationUpdate", (() => {
          a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            E() && a.pagination.bullets.forEach((t => {
              a.params.pagination.clickable && (u(t), a.params.pagination.renderBullet || (g(t, "button"), b(t, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, i.h)(t) + 1)))), t.matches(r(a.params.pagination.bulletActiveClass)) ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current")
            }))
          }()
        })), n("destroy", (() => {
          a.params.a11y.enabled && function() {
            d && d.remove();
            let {
              nextEl: e,
              prevEl: t
            } = a.navigation ? a.navigation : {};
            e = (0, i.m)(e), t = (0, i.m)(t), e && e.forEach((e => e.removeEventListener("keydown", y))), t && t.forEach((e => e.removeEventListener("keydown", y))), w() && (0, i.m)(a.pagination.el).forEach((e => {
              e.removeEventListener("keydown", y)
            })), (0, s.g)().removeEventListener("visibilitychange", L), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", k, !0), a.el.removeEventListener("pointerdown", x, !0), a.el.removeEventListener("pointerup", M, !0))
          }()
        }))
      }

      function c(e) {
        let {
          swiper: a,
          extendParams: t,
          on: n
        } = e;
        t({
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
          const e = a.thumbs.swiper;
          if (!e || e.destroyed) return;
          const t = e.clickedIndex,
            s = e.clickedSlide;
          if (s && s.classList.contains(a.params.thumbs.slideThumbActiveClass)) return;
          if (null == t) return;
          let i;
          i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : t, a.params.loop ? a.slideToLoop(i) : a.slideTo(i)
        }

        function d() {
          const {
            thumbs: e
          } = a.params;
          if (l) return !1;
          l = !0;
          const t = a.constructor;
          if (e.swiper instanceof t) {
            if (e.swiper.destroyed) return l = !1, !1;
            a.thumbs.swiper = e.swiper, Object.assign(a.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), Object.assign(a.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), a.thumbs.swiper.update()
          } else if ((0, i.l)(e.swiper)) {
            const s = Object.assign({}, e.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), a.thumbs.swiper = new t(s), r = !0
          }
          return a.thumbs.swiper.el.classList.add(a.params.thumbs.thumbsContainerClass), a.thumbs.swiper.on("tap", o), !0
        }

        function c(e) {
          const t = a.thumbs.swiper;
          if (!t || t.destroyed) return;
          const s = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
          let n = 1;
          const l = a.params.thumbs.slideThumbActiveClass;
          if (a.params.slidesPerView > 1 && !a.params.centeredSlides && (n = a.params.slidesPerView), a.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), t.slides.forEach((e => e.classList.remove(l))), t.params.loop || t.params.virtual && t.params.virtual.enabled)
            for (let e = 0; e < n; e += 1)(0, i.e)(t.slidesEl, `[data-swiper-slide-index="${a.realIndex+e}"]`).forEach((e => {
              e.classList.add(l)
            }));
          else
            for (let e = 0; e < n; e += 1) t.slides[a.realIndex + e] && t.slides[a.realIndex + e].classList.add(l);
          const r = a.params.thumbs.autoScrollOffset,
            o = r && !t.params.loop;
          if (a.realIndex !== t.realIndex || o) {
            const i = t.activeIndex;
            let n, l;
            if (t.params.loop) {
              const e = t.slides.find((e => e.getAttribute("data-swiper-slide-index") === `${a.realIndex}`));
              n = t.slides.indexOf(e), l = a.activeIndex > a.previousIndex ? "next" : "prev"
            } else n = a.realIndex, l = n > a.previousIndex ? "next" : "prev";
            o && (n += "next" === l ? r : -1 * r), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(n) < 0 && (t.params.centeredSlides ? n = n > i ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > i && t.params.slidesPerGroup, t.slideTo(n, e ? 0 : void 0))
          }
        }
        a.thumbs = {
          swiper: null
        }, n("beforeInit", (() => {
          const {
            thumbs: e
          } = a.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const t = (0, s.g)(),
                i = () => {
                  const s = "string" == typeof e.swiper ? t.querySelector(e.swiper) : e.swiper;
                  if (s && s.swiper) e.swiper = s.swiper, d(), c(!0);
                  else if (s) {
                    const t = `${a.params.eventsPrefix}init`,
                      i = n => {
                        e.swiper = n.detail[0], s.removeEventListener(t, i), d(), c(!0), e.swiper.update(), a.update()
                      };
                    s.addEventListener(t, i)
                  }
                  return s
                },
                n = () => {
                  a.destroyed || i() || requestAnimationFrame(n)
                };
              requestAnimationFrame(n)
            } else d(), c(!0)
        })), n("slideChange update resize observerUpdate", (() => {
          c()
        })), n("setTransition", ((e, t) => {
          const s = a.thumbs.swiper;
          s && !s.destroyed && s.setTransition(t)
        })), n("beforeDestroy", (() => {
          const e = a.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
        })), Object.assign(a.thumbs, {
          init: d,
          update: c
        })
      }

      function p(e) {
        let {
          swiper: a,
          extendParams: t,
          emit: s,
          once: n
        } = e;
        t({
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
        }), Object.assign(a, {
          freeMode: {
            onTouchStart: function() {
              if (a.params.cssMode) return;
              const e = a.getTranslate();
              a.setTranslate(e), a.setTransition(0), a.touchEventsData.velocities.length = 0, a.freeMode.onTouchEnd({
                currentPos: a.rtl ? a.translate : -a.translate
              })
            },
            onTouchMove: function() {
              if (a.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: t
              } = a;
              0 === e.velocities.length && e.velocities.push({
                position: t[a.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: t[a.isHorizontal() ? "currentX" : "currentY"],
                time: (0, i.d)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: t
              } = e;
              if (a.params.cssMode) return;
              const {
                params: l,
                wrapperEl: r,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: c
              } = a, p = (0, i.d)() - c.touchStartTime;
              if (t < -a.minTranslate()) a.slideTo(a.activeIndex);
              else if (t > -a.maxTranslate()) a.slides.length < d.length ? a.slideTo(d.length - 1) : a.slideTo(a.slides.length - 1);
              else {
                if (l.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      t = c.velocities.pop(),
                      s = e.position - t.position,
                      n = e.time - t.time;
                    a.velocity = s / n, a.velocity /= 2, Math.abs(a.velocity) < l.freeMode.minimumVelocity && (a.velocity = 0), (n > 150 || (0, i.d)() - e.time > 300) && (a.velocity = 0)
                  } else a.velocity = 0;
                  a.velocity *= l.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                  let e = 1e3 * l.freeMode.momentumRatio;
                  const t = a.velocity * e;
                  let p = a.translate + t;
                  o && (p = -p);
                  let u, m = !1;
                  const g = 20 * Math.abs(a.velocity) * l.freeMode.momentumBounceRatio;
                  let f;
                  if (p < a.maxTranslate()) l.freeMode.momentumBounce ? (p + a.maxTranslate() < -g && (p = a.maxTranslate() - g), u = a.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = a.maxTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (p > a.minTranslate()) l.freeMode.momentumBounce ? (p - a.minTranslate() > g && (p = a.minTranslate() + g), u = a.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = a.minTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (l.freeMode.sticky) {
                    let e;
                    for (let a = 0; a < d.length; a += 1)
                      if (d[a] > -p) {
                        e = a;
                        break
                      } p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === a.swipeDirection ? d[e] : d[e - 1], p = -p
                  }
                  if (f && n("transitionEnd", (() => {
                      a.loopFix()
                    })), 0 !== a.velocity) {
                    if (e = o ? Math.abs((-p - a.translate) / a.velocity) : Math.abs((p - a.translate) / a.velocity), l.freeMode.sticky) {
                      const t = Math.abs((o ? -p : p) - a.translate),
                        s = a.slidesSizesGrid[a.activeIndex];
                      e = t < s ? l.speed : t < 2 * s ? 1.5 * l.speed : 2.5 * l.speed
                    }
                  } else if (l.freeMode.sticky) return void a.slideToClosest();
                  l.freeMode.momentumBounce && m ? (a.updateProgress(u), a.setTransition(e), a.setTranslate(p), a.transitionStart(!0, a.swipeDirection), a.animating = !0, (0, i.k)(r, (() => {
                    a && !a.destroyed && c.allowMomentumBounce && (s("momentumBounce"), a.setTransition(l.speed), setTimeout((() => {
                      a.setTranslate(u), (0, i.k)(r, (() => {
                        a && !a.destroyed && a.transitionEnd()
                      }))
                    }), 0))
                  }))) : a.velocity ? (s("_freeModeNoMomentumRelease"), a.updateProgress(p), a.setTransition(e), a.setTranslate(p), a.transitionStart(!0, a.swipeDirection), a.animating || (a.animating = !0, (0, i.k)(r, (() => {
                    a && !a.destroyed && a.transitionEnd()
                  })))) : a.updateProgress(p), a.updateActiveIndex(), a.updateSlidesClasses()
                } else {
                  if (l.freeMode.sticky) return void a.slideToClosest();
                  l.freeMode && s("_freeModeNoMomentumRelease")
                }(!l.freeMode.momentum || p >= l.longSwipesMs) && (s("_freeModeStaticRelease"), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses())
              }
            }
          }
        })
      }
    }
  }
]);