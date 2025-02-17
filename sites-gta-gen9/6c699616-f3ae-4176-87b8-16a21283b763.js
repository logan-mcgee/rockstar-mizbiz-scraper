! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6c699616-f3ae-4176-87b8-16a21283b763", e._sentryDebugIdIdentifier = "sentry-dbid-6c699616-f3ae-4176-87b8-16a21283b763")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [216], {
    50216: (e, t, a) => {
      a.d(t, {
        Jq: () => d,
        xI: () => c,
        U1: () => u,
        Vx: () => l,
        dK: () => o,
        WO: () => p
      });
      var s = a(23109),
        i = a(92566);

      function n(e, t, a, s) {
        return e.params.createElements && Object.keys(s).forEach((n => {
          if (!a[n] && !0 === a.auto) {
            let l = (0, i.e)(e.el, `.${s[n]}`)[0];
            l || (l = (0, i.c)("div", s[n]), l.className = s[n], e.el.append(l)), a[n] = l, t[n] = l
          }
        })), a
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
          return e && "string" == typeof e && t.isElement && (a = t.el.querySelector(e), a) ? a : (e && ("string" == typeof e && (a = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && a.length > 1 && 1 === t.el.querySelectorAll(e).length && (a = t.el.querySelector(e))), e && !a ? e : a)
        }

        function o(e, a) {
          const s = t.params.navigation;
          (e = (0, i.m)(e)).forEach((e => {
            e && (e.classList[a ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = a), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
          }))
        }

        function c() {
          const {
            nextEl: e,
            prevEl: a
          } = t.navigation;
          if (t.params.loop) return o(a, !1), void o(e, !1);
          o(a, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function d(e) {
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
            a && a.addEventListener("click", "next" === s ? p : d), !t.enabled && a && a.classList.add(...e.lockClass.split(" "))
          };
          a.forEach((e => l(e, "next"))), s.forEach((e => l(e, "prev")))
        }

        function m() {
          let {
            nextEl: e,
            prevEl: a
          } = t.navigation;
          e = (0, i.m)(e), a = (0, i.m)(a);
          const s = (e, a) => {
            e.removeEventListener("click", "next" === a ? p : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => s(e, "next"))), a.forEach((e => s(e, "prev")))
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
        }, s("init", (() => {
          !1 === t.params.navigation.enabled ? g() : (u(), c())
        })), s("toEdge fromEdge lock unlock", (() => {
          c()
        })), s("destroy", (() => {
          m()
        })), s("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: a
          } = t.navigation;
          e = (0, i.m)(e), a = (0, i.m)(a), t.enabled ? c() : [...e, ...a].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), s("click", ((e, a) => {
          let {
            nextEl: s,
            prevEl: n
          } = t.navigation;
          s = (0, i.m)(s), n = (0, i.m)(n);
          const r = a.target;
          if (t.params.navigation.hideOnClick && !n.includes(r) && !s.includes(r)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
            let e;
            s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...s, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const g = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), m()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), c()
          },
          disable: g,
          update: c,
          init: u,
          destroy: m
        })
      }

      function r(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function o(e) {
        let {
          swiper: t,
          extendParams: a,
          on: s,
          emit: l
        } = e;
        const o = "swiper-pagination";
        let c;
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
        let d = 0;

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
          const s = (0, i.g)(a) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === s) return;
            t.slideToLoop(s)
          } else t.slideTo(s)
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
            if (a.dynamicBullets && (c = (0, i.f)(l[0], t.isHorizontal() ? "width" : "height", !0), o.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = c * (a.dynamicMainBullets + 4) + "px"
              })), a.dynamicMainBullets > 1 && void 0 !== n && (d += s - (n || 0), d > a.dynamicMainBullets - 1 ? d = a.dynamicMainBullets - 1 : d < 0 && (d = 0)), r = Math.max(s - d, 0), p = r + (Math.min(l.length, a.dynamicMainBullets) - 1), m = (p + r) / 2), l.forEach((e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${a.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t)
              })), o.length > 1) l.forEach((e => {
              const n = (0, i.g)(e);
              n === s ? e.classList.add(...a.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), a.dynamicBullets && (n >= r && n <= p && e.classList.add(...`${a.bulletActiveClass}-main`.split(" ")), n === r && u(e, "prev"), n === p && u(e, "next"))
            }));
            else {
              const e = l[s];
              if (e && e.classList.add(...a.bulletActiveClass.split(" ")), t.isElement && l.forEach(((e, t) => {
                  e.setAttribute("part", t === s ? "bullet-active" : "bullet")
                })), a.dynamicBullets) {
                const e = l[r],
                  t = l[p];
                for (let e = r; e <= p; e += 1) l[e] && l[e].classList.add(...`${a.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(t, "next")
              }
            }
            if (a.dynamicBullets) {
              const s = Math.min(l.length, a.dynamicMainBullets + 4),
                i = (c * s - c) / 2 - m * c,
                n = e ? "right" : "left";
              l.forEach((e => {
                e.style[t.isHorizontal() ? n : "top"] = `${i}px`
              }))
            }
          }
          o.forEach(((e, i) => {
            if ("fraction" === a.type && (e.querySelectorAll(r(a.currentClass)).forEach((e => {
                e.textContent = a.formatFractionCurrent(s + 1)
              })), e.querySelectorAll(r(a.totalClass)).forEach((e => {
                e.textContent = a.formatFractionTotal(g)
              }))), "progressbar" === a.type) {
              let i;
              i = a.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const n = (s + 1) / g;
              let l = 1,
                o = 1;
              "horizontal" === i ? l = n : o = n, e.querySelectorAll(r(a.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
              }))
            }
            "custom" === a.type && a.renderCustom ? (e.innerHTML = a.renderCustom(t, s + 1, g), 0 === i && l("paginationRender", e)) : (0 === i && l("paginationRender", e), l("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass)
          }))
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
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], s.forEach((a => {
            "custom" !== e.type && (a.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...a.querySelectorAll(r(e.bulletClass)))
          })), "custom" !== e.type && l("paginationRender", s[0])
        }

        function b() {
          t.params.pagination = n(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let a;
          "string" == typeof e.el && t.isElement && (a = t.el.querySelector(e.el)), a || "string" != typeof e.el || (a = [...document.querySelectorAll(e.el)]), a || (a = e.el), a && 0 !== a.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(a) && a.length > 1 && (a = [...t.el.querySelectorAll(e.el)], a.length > 1 && (a = a.filter((e => (0, i.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(a) && 1 === a.length && (a = a[0]), Object.assign(t.pagination, {
            el: a
          }), a = (0, i.m)(a), a.forEach((a => {
            "bullets" === e.type && e.clickable && a.classList.add(...(e.clickableClass || "").split(" ")), a.classList.add(e.modifierClass + e.type), a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (a.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && a.classList.add(e.progressbarOppositeClass), e.clickable && a.addEventListener("click", m), t.enabled || a.classList.add(e.lockClass)
          })))
        }

        function v() {
          const e = t.params.pagination;
          if (p()) return;
          let a = t.pagination.el;
          a && (a = (0, i.m)(a), a.forEach((a => {
            a.classList.remove(e.hiddenClass), a.classList.remove(e.modifierClass + e.type), a.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (a.classList.remove(...(e.clickableClass || "").split(" ")), a.removeEventListener("click", m))
          }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        s("changeDirection", (() => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: a
          } = t.pagination;
          a = (0, i.m)(a), a.forEach((a => {
            a.classList.remove(e.horizontalClass, e.verticalClass), a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), s("init", (() => {
          !1 === t.params.pagination.enabled ? h() : (b(), f(), g())
        })), s("activeIndexChange", (() => {
          void 0 === t.snapIndex && g()
        })), s("snapIndexChange", (() => {
          g()
        })), s("snapGridLengthChange", (() => {
          f(), g()
        })), s("destroy", (() => {
          v()
        })), s("enable disable", (() => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, i.m)(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), s("lock unlock", (() => {
          g()
        })), s("click", ((e, a) => {
          const s = a.target,
            n = (0, i.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
            const e = n[0].classList.contains(t.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
          }
        }));
        const h = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, i.m)(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), v()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, i.m)(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), b(), f(), g()
          },
          disable: h,
          render: f,
          update: g,
          init: b,
          destroy: v
        })
      }

      function c(e) {
        let {
          swiper: t,
          extendParams: a,
          on: s
        } = e;

        function n(e, t) {
          const a = function() {
            let e, t, a;
            return (s, i) => {
              for (t = -1, e = s.length; e - t > 1;) a = e + t >> 1, s[a] <= i ? t = a : e = a;
              return e
            }
          }();
          let s, i;
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (i = a(this.x, e), s = i - 1, (e - this.x[s]) * (this.y[i] - this.y[s]) / (this.x[i] - this.x[s]) + this.y[s]) : 0
          }, this
        }

        function l() {
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        a({
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        }), t.controller = {
          control: void 0
        }, s("beforeInit", (() => {
          if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const a = s => {
                t.controller.control = s.detail[0], t.update(), e.removeEventListener("init", a)
              };
              e.addEventListener("init", a)
            }
          } else t.controller.control = t.params.controller.control
        })), s("update", (() => {
          l()
        })), s("resize", (() => {
          l()
        })), s("observerUpdate", (() => {
          l()
        })), s("setTranslate", ((e, a, s) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(a, s)
        })), s("setTransition", ((e, a, s) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(a, s)
        })), Object.assign(t.controller, {
          setTranslate: function(e, a) {
            const s = t.controller.control;
            let i, l;
            const r = t.constructor;

            function o(e) {
              if (e.destroyed) return;
              const a = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by && (function(e) {
                t.controller.spline = t.params.loop ? new n(t.slidesGrid, e.slidesGrid) : new n(t.snapGrid, e.snapGrid)
              }(e), l = -t.controller.spline.interpolate(-a)), l && "container" !== t.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(i) && Number.isFinite(i) || (i = 1), l = (a - t.minTranslate()) * i + e.minTranslate()), t.params.controller.inverse && (l = e.maxTranslate() - l), e.updateProgress(l), e.setTranslate(l, t), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            if (Array.isArray(s))
              for (let e = 0; e < s.length; e += 1) s[e] !== a && s[e] instanceof r && o(s[e]);
            else s instanceof r && a !== s && o(s)
          },
          setTransition: function(e, a) {
            const s = t.constructor,
              n = t.controller.control;
            let l;

            function r(a) {
              a.destroyed || (a.setTransition(e, t), 0 !== e && (a.transitionStart(), a.params.autoHeight && (0, i.n)((() => {
                a.updateAutoHeight()
              })), (0, i.j)(a.wrapperEl, (() => {
                n && a.transitionEnd()
              }))))
            }
            if (Array.isArray(n))
              for (l = 0; l < n.length; l += 1) n[l] !== a && n[l] instanceof s && r(n[l]);
            else n instanceof s && a !== n && r(n)
          }
        })
      }

      function d(e) {
        let {
          swiper: t,
          extendParams: a,
          on: s
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
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
          }
        }), t.a11y = {
          clicked: !1
        };
        let n = null;

        function l(e) {
          const t = n;
          0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
        }

        function o(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("tabIndex", "0")
          }))
        }

        function c(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("tabIndex", "-1")
          }))
        }

        function d(e, t) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("role", t)
          }))
        }

        function p(e, t) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-roledescription", t)
          }))
        }

        function u(e, t) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-label", t)
          }))
        }

        function m(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-disabled", !0)
          }))
        }

        function g(e) {
          (e = (0, i.m)(e)).forEach((e => {
            e.setAttribute("aria-disabled", !1)
          }))
        }

        function f(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const a = t.params.a11y,
            s = e.target;
          t.pagination && t.pagination.el && (s === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(r(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && s === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? l(a.lastSlideMessage) : l(a.nextSlideMessage)), t.navigation && t.navigation.prevEl && s === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? l(a.firstSlideMessage) : l(a.prevSlideMessage)), t.pagination && s.matches(r(t.params.pagination.bulletClass)) && s.click())
        }

        function b() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function v() {
          return b() && t.params.pagination.clickable
        }
        const h = (e, t, a) => {
            o(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", f)), u(e, a),
              function(e, t) {
                (e = (0, i.m)(e)).forEach((e => {
                  e.setAttribute("aria-controls", t)
                }))
              }(e, t)
          },
          y = () => {
            t.a11y.clicked = !0
          },
          E = () => {
            requestAnimationFrame((() => {
              requestAnimationFrame((() => {
                t.destroyed || (t.a11y.clicked = !1)
              }))
            }))
          },
          w = e => {
            if (t.a11y.clicked) return;
            const a = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!a || !t.slides.includes(a)) return;
            const s = t.slides.indexOf(a) === t.activeIndex,
              i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(a);
            s || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(a), 0))
          },
          x = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && p(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
            const a = t.slides.length;
            e.slideLabelMessage && t.slides.forEach(((s, i) => {
              const n = t.params.loop ? parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i;
              u(s, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, a))
            }))
          };
        s("beforeInit", (() => {
          n = (0, i.c)("span", t.params.a11y.notificationClass), n.setAttribute("aria-live", "assertive"), n.setAttribute("aria-atomic", "true")
        })), s("afterInit", (() => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(n);
            const a = t.el;
            e.containerRoleDescriptionMessage && p(a, e.containerRoleDescriptionMessage), e.containerMessage && u(a, e.containerMessage);
            const s = t.wrapperEl,
              l = e.id || s.getAttribute("id") || `swiper-wrapper-${r=16,void 0===r&&(r=16),"x".repeat(r).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
            var r;
            const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var c, d;
            c = s, d = l, (c = (0, i.m)(c)).forEach((e => {
                e.setAttribute("id", d)
              })),
              function(e, t) {
                (e = (0, i.m)(e)).forEach((e => {
                  e.setAttribute("aria-live", t)
                }))
              }(s, o), x();
            let {
              nextEl: m,
              prevEl: g
            } = t.navigation ? t.navigation : {};
            m = (0, i.m)(m), g = (0, i.m)(g), m && m.forEach((t => h(t, l, e.nextSlideMessage))), g && g.forEach((t => h(t, l, e.prevSlideMessage))), v() && (0, i.m)(t.pagination.el).forEach((e => {
              e.addEventListener("keydown", f)
            })), t.el.addEventListener("focus", w, !0), t.el.addEventListener("pointerdown", y, !0), t.el.addEventListener("pointerup", E, !0)
          })()
        })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
          t.params.a11y.enabled && x()
        })), s("fromEdge toEdge afterInit lock unlock", (() => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: a
            } = t.navigation;
            a && (t.isBeginning ? (m(a), c(a)) : (g(a), o(a))), e && (t.isEnd ? (m(e), c(e)) : (g(e), o(e)))
          }()
        })), s("paginationUpdate", (() => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            b() && t.pagination.bullets.forEach((a => {
              t.params.pagination.clickable && (o(a), t.params.pagination.renderBullet || (d(a, "button"), u(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, i.g)(a) + 1)))), a.matches(r(t.params.pagination.bulletActiveClass)) ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")
            }))
          }()
        })), s("destroy", (() => {
          t.params.a11y.enabled && function() {
            n && n.remove();
            let {
              nextEl: e,
              prevEl: a
            } = t.navigation ? t.navigation : {};
            e = (0, i.m)(e), a = (0, i.m)(a), e && e.forEach((e => e.removeEventListener("keydown", f))), a && a.forEach((e => e.removeEventListener("keydown", f))), v() && (0, i.m)(t.pagination.el).forEach((e => {
              e.removeEventListener("keydown", f)
            })), t.el.removeEventListener("focus", w, !0), t.el.removeEventListener("pointerdown", y, !0), t.el.removeEventListener("pointerup", E, !0)
          }()
        }))
      }

      function p(e) {
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

        function c() {
          const {
            thumbs: e
          } = t.params;
          if (l) return !1;
          l = !0;
          const a = t.constructor;
          if (e.swiper instanceof a) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), t.thumbs.swiper.update();
          else if ((0, i.k)(e.swiper)) {
            const s = Object.assign({}, e.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper = new a(s), r = !0
          }
          return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
        }

        function d(e) {
          const a = t.thumbs.swiper;
          if (!a || a.destroyed) return;
          const s = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
          let n = 1;
          const l = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), a.slides.forEach((e => e.classList.remove(l))), a.params.loop || a.params.virtual && a.params.virtual.enabled)
            for (let e = 0; e < n; e += 1)(0, i.e)(a.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
              e.classList.add(l)
            }));
          else
            for (let e = 0; e < n; e += 1) a.slides[t.realIndex + e] && a.slides[t.realIndex + e].classList.add(l);
          const r = t.params.thumbs.autoScrollOffset,
            o = r && !a.params.loop;
          if (t.realIndex !== a.realIndex || o) {
            const i = a.activeIndex;
            let n, l;
            if (a.params.loop) {
              const e = a.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
              n = a.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
            o && (n += "next" === l ? r : -1 * r), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > i ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > i && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0))
          }
        }
        t.thumbs = {
          swiper: null
        }, n("beforeInit", (() => {
          const {
            thumbs: e
          } = t.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const a = (0, s.g)(),
                i = () => {
                  const s = "string" == typeof e.swiper ? a.querySelector(e.swiper) : e.swiper;
                  if (s && s.swiper) e.swiper = s.swiper, c(), d(!0);
                  else if (s) {
                    const a = i => {
                      e.swiper = i.detail[0], s.removeEventListener("init", a), c(), d(!0), e.swiper.update(), t.update()
                    };
                    s.addEventListener("init", a)
                  }
                  return s
                },
                n = () => {
                  t.destroyed || i() || requestAnimationFrame(n)
                };
              requestAnimationFrame(n)
            } else c(), d(!0)
        })), n("slideChange update resize observerUpdate", (() => {
          d()
        })), n("setTransition", ((e, a) => {
          const s = t.thumbs.swiper;
          s && !s.destroyed && s.setTransition(a)
        })), n("beforeDestroy", (() => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {
          init: c,
          update: d
        })
      }

      function u(e) {
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
                time: (0, i.d)()
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
                snapGrid: c,
                touchEventsData: d
              } = t, p = (0, i.d)() - d.touchStartTime;
              if (a < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (a > -t.maxTranslate()) t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (l.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      a = d.velocities.pop(),
                      s = e.position - a.position,
                      n = e.time - a.time;
                    t.velocity = s / n, t.velocity /= 2, Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || (0, i.d)() - e.time > 300) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= l.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                  let e = 1e3 * l.freeMode.momentumRatio;
                  const a = t.velocity * e;
                  let p = t.translate + a;
                  o && (p = -p);
                  let u, m = !1;
                  const g = 20 * Math.abs(t.velocity) * l.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate()) l.freeMode.momentumBounce ? (p + t.maxTranslate() < -g && (p = t.maxTranslate() - g), u = t.maxTranslate(), m = !0, d.allowMomentumBounce = !0) : p = t.maxTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (p > t.minTranslate()) l.freeMode.momentumBounce ? (p - t.minTranslate() > g && (p = t.minTranslate() + g), u = t.minTranslate(), m = !0, d.allowMomentumBounce = !0) : p = t.minTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (l.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < c.length; t += 1)
                      if (c[t] > -p) {
                        e = t;
                        break
                      } p = Math.abs(c[e] - p) < Math.abs(c[e - 1] - p) || "next" === t.swipeDirection ? c[e] : c[e - 1], p = -p
                  }
                  if (f && n("transitionEnd", (() => {
                      t.loopFix()
                    })), 0 !== t.velocity) {
                    if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), l.freeMode.sticky) {
                      const a = Math.abs((o ? -p : p) - t.translate),
                        s = t.slidesSizesGrid[t.activeIndex];
                      e = a < s ? l.speed : a < 2 * s ? 1.5 * l.speed : 2.5 * l.speed
                    }
                  } else if (l.freeMode.sticky) return void t.slideToClosest();
                  l.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, i.j)(r, (() => {
                    t && !t.destroyed && d.allowMomentumBounce && (s("momentumBounce"), t.setTransition(l.speed), setTimeout((() => {
                      t.setTranslate(u), (0, i.j)(r, (() => {
                        t && !t.destroyed && t.transitionEnd()
                      }))
                    }), 0))
                  }))) : t.velocity ? (s("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, i.j)(r, (() => {
                    t && !t.destroyed && t.transitionEnd()
                  })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
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