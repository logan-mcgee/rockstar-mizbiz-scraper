! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "db2a313b-2519-42cf-afb0-48be814a63eb", e._sentryDebugIdIdentifier = "sentry-dbid-db2a313b-2519-42cf-afb0-48be814a63eb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [4116, 2781, 3855], {
    53178: e => {
      var t = [];

      function s(e) {
        for (var s = -1, i = 0; i < t.length; i++)
          if (t[i].identifier === e) {
            s = i;
            break
          } return s
      }

      function i(e, i) {
        for (var n = {}, a = [], l = 0; l < e.length; l++) {
          var o = e[l],
            d = i.base ? o[0] + i.base : o[0],
            c = n[d] || 0,
            p = "".concat(d, " ").concat(c);
          n[d] = c + 1;
          var u = s(p),
            m = {
              css: o[1],
              media: o[2],
              sourceMap: o[3],
              supports: o[4],
              layer: o[5]
            };
          if (-1 !== u) t[u].references++, t[u].updater(m);
          else {
            var f = r(m, i);
            i.byIndex = l, t.splice(l, 0, {
              identifier: p,
              updater: f,
              references: 1
            })
          }
          a.push(p)
        }
        return a
      }

      function r(e, t) {
        var s = t.domAPI(t);
        return s.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              s.update(e = t)
            } else s.remove()
          }
      }
      e.exports = function(e, r) {
        var n = i(e = e || [], r = r || {});
        return function(e) {
          e = e || [];
          for (var a = 0; a < n.length; a++) {
            var l = s(n[a]);
            t[l].references--
          }
          for (var o = i(e, r), d = 0; d < n.length; d++) {
            var c = s(n[d]);
            0 === t[c].references && (t[c].updater(), t.splice(c, 1))
          }
          n = o
        }
      }
    },
    17529: e => {
      var t = {};
      e.exports = function(e, s) {
        var i = function(e) {
          if (void 0 === t[e]) {
            var s = document.querySelector(e);
            if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) try {
              s = s.contentDocument.head
            } catch (e) {
              s = null
            }
            t[e] = s
          }
          return t[e]
        }(e);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        i.appendChild(s)
      }
    },
    82510: e => {
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    72162: (e, t, s) => {
      e.exports = function(e) {
        var t = s.nc;
        t && e.setAttribute("nonce", t)
      }
    },
    27835: e => {
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = e.insertStyleElement(e);
        return {
          update: function(s) {
            ! function(e, t, s) {
              var i = "";
              s.supports && (i += "@supports (".concat(s.supports, ") {")), s.media && (i += "@media ".concat(s.media, " {"));
              var r = void 0 !== s.layer;
              r && (i += "@layer".concat(s.layer.length > 0 ? " ".concat(s.layer) : "", " {")), i += s.css, r && (i += "}"), s.media && (i += "}"), s.supports && (i += "}");
              var n = s.sourceMap;
              n && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))), " */")), t.styleTagTransform(i, e, t.options)
            }(t, e, s)
          },
          remove: function() {
            ! function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    },
    90675: e => {
      e.exports = function(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    },
    15081: e => {
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var s = "",
              i = void 0 !== t[5];
            return t[4] && (s += "@supports (".concat(t[4], ") {")), t[2] && (s += "@media ".concat(t[2], " {")), i && (s += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), s += e(t), i && (s += "}"), t[2] && (s += "}"), t[4] && (s += "}"), s
          })).join("")
        }, t.i = function(e, s, i, r, n) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var a = {};
          if (i)
            for (var l = 0; l < this.length; l++) {
              var o = this[l][0];
              null != o && (a[o] = !0)
            }
          for (var d = 0; d < e.length; d++) {
            var c = [].concat(e[d]);
            i && a[c[0]] || (void 0 !== n && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = n), s && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = s) : c[2] = s), r && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = r) : c[4] = "".concat(r)), t.push(c))
          }
        }, t
      }
    },
    79908: e => {
      e.exports = function(e, t) {
        return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
      }
    },
    42587: e => {
      e.exports = function(e) {
        var t = e[1],
          s = e[3];
        if (!s) return t;
        if ("function" == typeof btoa) {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
            r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
            n = "/*# ".concat(r, " */");
          return [t].concat([n]).join("\n")
        }
        return [t].join("\n")
      }
    },
    32469: (e, t, s) => {
      var i = s(62229),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, s) {
        var i, n = {},
          d = null,
          c = null;
        for (i in void 0 !== s && (d = "" + s), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, i) && !o.hasOwnProperty(i) && (n[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === n[i] && (n[i] = t[i]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      t.Fragment = n, t.jsx = d, t.jsxs = d
    },
    73855: (e, t, s) => {
      e.exports = s(32469)
    },
    4394: (e, t, s) => {
      s.d(t, {
        U1: () => c,
        Vx: () => a,
        dK: () => o,
        WO: () => d
      });
      var i = s(21991),
        r = s(99108);

      function n(e, t, s, i) {
        return e.params.createElements && Object.keys(i).forEach((n => {
          if (!s[n] && !0 === s.auto) {
            let a = (0, r.e)(e.el, `.${i[n]}`)[0];
            a || (a = (0, r.c)("div", i[n]), a.className = i[n], e.el.append(a)), s[n] = a, t[n] = a
          }
        })), s
      }

      function a(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: a
        } = e;

        function l(e) {
          let s;
          return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
        }

        function o(e, s) {
          const i = t.params.navigation;
          (e = (0, r.m)(e)).forEach((e => {
            e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
          }))
        }

        function d() {
          const {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          if (t.params.loop) return o(s, !1), void o(e, !1);
          o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function c(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
        }

        function p(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
        }

        function u() {
          const e = t.params.navigation;
          if (t.params.navigation = n(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let s = l(e.nextEl),
            i = l(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: s,
            prevEl: i
          }), s = (0, r.m)(s), i = (0, r.m)(i);
          const a = (s, i) => {
            s && s.addEventListener("click", "next" === i ? p : c), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
          };
          s.forEach((e => a(e, "next"))), i.forEach((e => a(e, "prev")))
        }

        function m() {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = (0, r.m)(e), s = (0, r.m)(s);
          const i = (e, s) => {
            e.removeEventListener("click", "next" === s ? p : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => i(e, "next"))), s.forEach((e => i(e, "prev")))
        }
        s({
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
        }, i("init", (() => {
          !1 === t.params.navigation.enabled ? f() : (u(), d())
        })), i("toEdge fromEdge lock unlock", (() => {
          d()
        })), i("destroy", (() => {
          m()
        })), i("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = (0, r.m)(e), s = (0, r.m)(s), t.enabled ? d() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), i("click", ((e, s) => {
          let {
            nextEl: i,
            prevEl: n
          } = t.navigation;
          i = (0, r.m)(i), n = (0, r.m)(n);
          const l = s.target;
          if (t.params.navigation.hideOnClick && !n.includes(l) && !i.includes(l)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
            let e;
            i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), a(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const f = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), m()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), d()
          },
          disable: f,
          update: d,
          init: u,
          destroy: m
        })
      }

      function l(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function o(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: a
        } = e;
        const o = "swiper-pagination";
        let d;
        s({
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

        function u(e, s) {
          const {
            bulletActiveClass: i
          } = t.params.pagination;
          e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`))
        }

        function m(e) {
          const s = e.target.closest(l(t.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const i = (0, r.g)(s) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === i) return;
            t.slideToLoop(i)
          } else t.slideTo(i)
        }

        function f() {
          const e = t.rtl,
            s = t.params.pagination;
          if (p()) return;
          let i, n, o = t.pagination.el;
          o = (0, r.m)(o);
          const m = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            f = t.params.loop ? Math.ceil(m / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (n = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const a = t.pagination.bullets;
            let l, p, m;
            if (s.dynamicBullets && (d = (0, r.f)(a[0], t.isHorizontal() ? "width" : "height", !0), o.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = d * (s.dynamicMainBullets + 4) + "px"
              })), s.dynamicMainBullets > 1 && void 0 !== n && (c += i - (n || 0), c > s.dynamicMainBullets - 1 ? c = s.dynamicMainBullets - 1 : c < 0 && (c = 0)), l = Math.max(i - c, 0), p = l + (Math.min(a.length, s.dynamicMainBullets) - 1), m = (p + l) / 2), a.forEach((e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t)
              })), o.length > 1) a.forEach((e => {
              const n = (0, r.g)(e);
              n === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (n >= l && n <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), n === l && u(e, "prev"), n === p && u(e, "next"))
            }));
            else {
              const e = a[i];
              if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && a.forEach(((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                })), s.dynamicBullets) {
                const e = a[l],
                  t = a[p];
                for (let e = l; e <= p; e += 1) a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(t, "next")
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(a.length, s.dynamicMainBullets + 4),
                r = (d * i - d) / 2 - m * d,
                n = e ? "right" : "left";
              a.forEach((e => {
                e.style[t.isHorizontal() ? n : "top"] = `${r}px`
              }))
            }
          }
          o.forEach(((e, r) => {
            if ("fraction" === s.type && (e.querySelectorAll(l(s.currentClass)).forEach((e => {
                e.textContent = s.formatFractionCurrent(i + 1)
              })), e.querySelectorAll(l(s.totalClass)).forEach((e => {
                e.textContent = s.formatFractionTotal(f)
              }))), "progressbar" === s.type) {
              let r;
              r = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const n = (i + 1) / f;
              let a = 1,
                o = 1;
              "horizontal" === r ? a = n : o = n, e.querySelectorAll(l(s.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
              }))
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, f), 0 === r && a("paginationRender", e)) : (0 === r && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
          }))
        }

        function h() {
          const e = t.params.pagination;
          if (p()) return;
          const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let i = t.pagination.el;
          i = (0, r.m)(i);
          let n = "";
          if ("bullets" === e.type) {
            let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
            for (let s = 0; s < i; s += 1) e.renderBullet ? n += e.renderBullet.call(t, s, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((s => {
            "custom" !== e.type && (s.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(l(e.bulletClass)))
          })), "custom" !== e.type && a("paginationRender", i[0])
        }

        function v() {
          t.params.pagination = n(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let s;
          "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => (0, r.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
            el: s
          }), s = (0, r.m)(s), s.forEach((s => {
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", m), t.enabled || s.classList.add(e.lockClass)
          })))
        }

        function g() {
          const e = t.params.pagination;
          if (p()) return;
          let s = t.pagination.el;
          s && (s = (0, r.m)(s), s.forEach((s => {
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", m))
          }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        i("changeDirection", (() => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: s
          } = t.pagination;
          s = (0, r.m)(s), s.forEach((s => {
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), i("init", (() => {
          !1 === t.params.pagination.enabled ? w() : (v(), h(), f())
        })), i("activeIndexChange", (() => {
          void 0 === t.snapIndex && f()
        })), i("snapIndexChange", (() => {
          f()
        })), i("snapGridLengthChange", (() => {
          h(), f()
        })), i("destroy", (() => {
          g()
        })), i("enable disable", (() => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, r.m)(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), i("lock unlock", (() => {
          f()
        })), i("click", ((e, s) => {
          const i = s.target,
            n = (0, r.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
            const e = n[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
          }
        }));
        const w = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, r.m)(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), g()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, r.m)(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), v(), h(), f()
          },
          disable: w,
          render: h,
          update: f,
          init: v,
          destroy: g
        })
      }

      function d(e) {
        let {
          swiper: t,
          extendParams: s,
          on: n
        } = e;
        s({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let a = !1,
          l = !1;

        function o() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const s = e.clickedIndex,
            i = e.clickedSlide;
          if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == s) return;
          let r;
          r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(r) : t.slideTo(r)
        }

        function d() {
          const {
            thumbs: e
          } = t.params;
          if (a) return !1;
          a = !0;
          const s = t.constructor;
          if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), t.thumbs.swiper.update();
          else if ((0, r.k)(e.swiper)) {
            const i = Object.assign({}, e.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper = new s(i), l = !0
          }
          return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
        }

        function c(e) {
          const s = t.thumbs.swiper;
          if (!s || s.destroyed) return;
          const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
          let n = 1;
          const a = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.forEach((e => e.classList.remove(a))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
            for (let e = 0; e < n; e += 1)(0, r.e)(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
              e.classList.add(a)
            }));
          else
            for (let e = 0; e < n; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(a);
          const l = t.params.thumbs.autoScrollOffset,
            o = l && !s.params.loop;
          if (t.realIndex !== s.realIndex || o) {
            const r = s.activeIndex;
            let n, a;
            if (s.params.loop) {
              const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
              n = s.slides.indexOf(e), a = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else n = t.realIndex, a = n > t.previousIndex ? "next" : "prev";
            o && (n += "next" === a ? l : -1 * l), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > r ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > r && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0))
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
              const s = (0, i.g)(),
                r = () => {
                  const i = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                  if (i && i.swiper) e.swiper = i.swiper, d(), c(!0);
                  else if (i) {
                    const s = r => {
                      e.swiper = r.detail[0], i.removeEventListener("init", s), d(), c(!0), e.swiper.update(), t.update()
                    };
                    i.addEventListener("init", s)
                  }
                  return i
                },
                n = () => {
                  t.destroyed || r() || requestAnimationFrame(n)
                };
              requestAnimationFrame(n)
            } else d(), c(!0)
        })), n("slideChange update resize observerUpdate", (() => {
          c()
        })), n("setTransition", ((e, s) => {
          const i = t.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s)
        })), n("beforeDestroy", (() => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && l && e.destroy()
        })), Object.assign(t.thumbs, {
          init: d,
          update: c
        })
      }

      function c(e) {
        let {
          swiper: t,
          extendParams: s,
          emit: i,
          once: n
        } = e;
        s({
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
                touches: s
              } = t;
              0 === e.velocities.length && e.velocities.push({
                position: s[t.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                time: (0, r.d)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: s
              } = e;
              if (t.params.cssMode) return;
              const {
                params: a,
                wrapperEl: l,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: c
              } = t, p = (0, r.d)() - c.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (a.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      s = c.velocities.pop(),
                      i = e.position - s.position,
                      n = e.time - s.time;
                    t.velocity = i / n, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || (0, r.d)() - e.time > 300) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= a.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                  let e = 1e3 * a.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  o && (p = -p);
                  let u, m = !1;
                  const f = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio;
                  let h;
                  if (p < t.maxTranslate()) a.freeMode.momentumBounce ? (p + t.maxTranslate() < -f && (p = t.maxTranslate() - f), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), a.loop && a.centeredSlides && (h = !0);
                  else if (p > t.minTranslate()) a.freeMode.momentumBounce ? (p - t.minTranslate() > f && (p = t.minTranslate() + f), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), a.loop && a.centeredSlides && (h = !0);
                  else if (a.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break
                      } p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                  }
                  if (h && n("transitionEnd", (() => {
                      t.loopFix()
                    })), 0 !== t.velocity) {
                    if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), a.freeMode.sticky) {
                      const s = Math.abs((o ? -p : p) - t.translate),
                        i = t.slidesSizesGrid[t.activeIndex];
                      e = s < i ? a.speed : s < 2 * i ? 1.5 * a.speed : 2.5 * a.speed
                    }
                  } else if (a.freeMode.sticky) return void t.slideToClosest();
                  a.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, r.j)(l, (() => {
                    t && !t.destroyed && c.allowMomentumBounce && (i("momentumBounce"), t.setTransition(a.speed), setTimeout((() => {
                      t.setTranslate(u), (0, r.j)(l, (() => {
                        t && !t.destroyed && t.transitionEnd()
                      }))
                    }), 0))
                  }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, r.j)(l, (() => {
                    t && !t.destroyed && t.transitionEnd()
                  })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                  if (a.freeMode.sticky) return void t.slideToClosest();
                  a.freeMode && i("_freeModeNoMomentumRelease")
                }(!a.freeMode.momentum || p >= a.longSwipesMs) && (i("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
              }
            }
          }
        })
      }
    },
    21991: (e, t, s) => {
      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function r(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s])
        }))
      }
      s.d(t, {
        a: () => o,
        g: () => a
      });
      const n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return r(e, n), e
      }
      const l = {
        document: n,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function o() {
        const e = "undefined" != typeof window ? window : {};
        return r(e, l), e
      }
    },
    99108: (e, t, s) => {
      s.d(t, {
        a: () => b,
        c: () => f,
        d: () => a,
        e: () => u,
        f: () => S,
        g: () => w,
        i: () => l,
        j: () => y,
        k: () => o,
        m: () => E,
        n: () => n,
        o: () => g,
        p: () => v,
        q: () => h,
        r: () => p,
        s: () => c,
        t: () => m,
        u: () => d,
        v: () => r
      });
      var i = s(21991);

      function r(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function a() {
        return Date.now()
      }

      function l(e, t) {
        void 0 === t && (t = "x");
        const s = (0, i.a)();
        let r, n, a;
        const l = function(e) {
          const t = (0, i.a)();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = a.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), n || 0
      }

      function o(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n && n.enumerable && (o(e[i]) && o(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : d(e[i], r[i]) : !o(e[i]) && o(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : d(e[i], r[i])) : e[i] = r[i])
            }
          }
        }
        var s;
        return e
      }

      function c(e, t, s) {
        e.style.setProperty(t, s)
      }

      function p(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: r
        } = e;
        const n = (0, i.a)(),
          a = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > a ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0),
              i = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + i * (s - a);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [r]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: c
              })
            })), void n.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = n.requestAnimationFrame(u)
          };
        u()
      }

      function u(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function m(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function f(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), s
      }

      function h(e, t) {
        const s = [];
        for (; e.previousElementSibling;) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && s.push(i) : s.push(i), e = i
        }
        return s
      }

      function v(e, t) {
        const s = [];
        for (; e.nextElementSibling;) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && s.push(i) : s.push(i), e = i
        }
        return s
      }

      function g(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function w(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function b(e, t) {
        const s = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
        return s
      }

      function y(e, t) {
        t && e.addEventListener("transitionend", (function s(i) {
          i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s))
        }))
      }

      function S(e, t, s) {
        const r = (0, i.a)();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    23205: (e, t, s) => {
      s.d(t, {
        RC: () => K,
        qr: () => J
      });
      var i = s(62229),
        r = s(21991),
        n = s(99108);
      let a, l, o;

      function d() {
        return a || (a = function() {
          const e = (0, r.a)(),
            t = (0, r.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), l || (l = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const s = d(),
            i = (0, r.a)(),
            n = i.navigator.platform,
            a = t || i.navigator.userAgent,
            l = {
              ios: !1,
              android: !1
            },
            o = i.screen.width,
            c = i.screen.height,
            p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const m = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === n;
          let v = "MacIntel" === n;
          return !u && v && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), v = !1), p && !h && (l.os = "android", l.android = !0), (u || f || m) && (l.os = "ios", l.ios = !0), l
        }(e)), l
      }
      var p = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const r = s ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
          })), i
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
            t.apply(i, n)
          }
          return r.__emitterProxy = t, i.on(e, r, s)
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const i = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
            }))
          })), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(i, [t, ...s])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(i, s)
            }))
          })), e
        }
      };
      const u = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        m = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        f = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = r,
              n = [s - t];
            return n.push(...Array.from({
              length: t
            }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
              n.includes(t.column) && m(e, s)
            }))
          }
          const n = r + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = r - t; i <= n + t; i += 1) {
              const t = (i % s + s) % s;
              (t < r || t > n) && m(e, t)
            } else
              for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && m(e, i)
        };
      var h = {
        updateSize: function() {
          const e = this;
          let t, s;
          const i = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, n.o)(i, "padding-left") || 0, 10) - parseInt((0, n.o)(i, "padding-right") || 0, 10), s = s - parseInt((0, n.o)(i, "padding-top") || 0, 10) - parseInt((0, n.o)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, s) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
          }
          const s = e.params,
            {
              wrapperEl: i,
              slidesEl: r,
              size: a,
              rtlTranslate: l,
              wrongRTL: o
            } = e,
            d = e.virtual && s.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, n.e)(r, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let m = [];
          const f = [],
            h = [];
          let v = s.slidesOffsetBefore;
          "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
          let g = s.slidesOffsetAfter;
          "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = s.spaceBetween,
            S = -v,
            E = 0,
            T = 0;
          if (void 0 === a) return;
          "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * a : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, p.forEach((e => {
            l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), s.centeredSlides && s.cssMode && ((0, n.s)(i, "--swiper-centered-offset-before", ""), (0, n.s)(i, "--swiper-centered-offset-after", ""));
          const x = s.grid && s.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < u; i += 1) {
            let r;
            if (C = 0, p[i] && (r = p[i]), x && e.grid.updateSlide(i, r, p), !p[i] || "none" !== (0, n.o)(r, "display")) {
              if ("auto" === s.slidesPerView) {
                M && (p[i].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(r),
                  l = r.style.transform,
                  o = r.style.webkitTransform;
                if (l && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), s.roundLengths) C = e.isHorizontal() ? (0, n.f)(r, "width", !0) : (0, n.f)(r, "height", !0);
                else {
                  const e = t(a, "width"),
                    s = t(a, "padding-left"),
                    i = t(a, "padding-right"),
                    n = t(a, "margin-left"),
                    l = t(a, "margin-right"),
                    o = a.getPropertyValue("box-sizing");
                  if (o && "border-box" === o) C = e + n + l;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = r;
                    C = e + s + i + n + l + (a - t)
                  }
                }
                l && (r.style.transform = l), o && (r.style.webkitTransform = o), s.roundLengths && (C = Math.floor(C))
              } else C = (a - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (C = Math.floor(C)), p[i] && (p[i].style[e.getDirectionLabel("width")] = `${C}px`);
              p[i] && (p[i].swiperSlideSize = C), h.push(C), s.centeredSlides ? (S = S + C / 2 + E / 2 + y, 0 === E && 0 !== i && (S = S - a / 2 - y), 0 === i && (S = S - a / 2 - y), Math.abs(S) < .001 && (S = 0), s.roundLengths && (S = Math.floor(S)), T % s.slidesPerGroup == 0 && m.push(S), f.push(S)) : (s.roundLengths && (S = Math.floor(S)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && m.push(S), f.push(S), S = S + C + y), e.virtualSize += C + y, E = C, T += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + g, l && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize+y}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), x && e.grid.updateWrapperSize(C, m), !s.centeredSlides) {
            const t = [];
            for (let i = 0; i < m.length; i += 1) {
              let r = m[i];
              s.roundLengths && (r = Math.floor(r)), m[i] <= e.virtualSize - a && t.push(r)
            }
            m = t, Math.floor(e.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - a)
          }
          if (d && s.loop) {
            const t = h[0] + y;
            if (s.slidesPerGroup > 1) {
              const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                r = t * s.slidesPerGroup;
              for (let e = 0; e < i; e += 1) m.push(m[m.length - 1] + r)
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === m.length && (m = [0]), 0 !== y) {
            const t = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter(((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e => {
              e.style[t] = `${y}px`
            }))
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t => {
              e += t + (y || 0)
            })), e -= y;
            const t = e - a;
            m = m.map((e => e <= 0 ? -v : e > t ? t + g : e))
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (h.forEach((t => {
                e += t + (y || 0)
              })), e -= y, e < a) {
              const t = (a - e) / 2;
              m.forEach(((e, s) => {
                m[s] = e - t
              })), f.forEach(((e, s) => {
                f[s] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: m,
              slidesGrid: f,
              slidesSizesGrid: h
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
            (0, n.s)(i, "--swiper-centered-offset-before", -m[0] + "px"), (0, n.s)(i, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (u !== c && e.emit("slidesLengthChange"), m.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            u <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let r, n = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              s.push(e)
            }));
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                s.push(a(e))
              } else s.push(a(t.activeIndex));
          for (r = 0; r < s.length; r += 1)
            if (void 0 !== s[r]) {
              const e = s[r].offsetHeight;
              n = e > n ? e : n
            }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            s = t.params,
            {
              slides: i,
              rtlTranslate: r,
              snapGrid: n
            } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          r && (a = e), i.forEach((e => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let l = s.spaceBetween;
          "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
          for (let e = 0; e < i.length; e += 1) {
            const o = i[e];
            let d = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
              p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
              u = -(a - d),
              m = u + t.slidesSizesGrid[e],
              f = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
            (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), i[e].classList.add(s.slideVisibleClass)), f && i[e].classList.add(s.slideFullyVisibleClass), o.progress = r ? -c : c, o.originalProgress = r ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * s || 0
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let {
            progress: r,
            isBeginning: n,
            isEnd: a,
            progressLoop: l
          } = t;
          const o = n,
            d = a;
          if (0 === i) r = 0, n = !0, a = !0;
          else {
            r = (e - t.minTranslate()) / i;
            const s = Math.abs(e - t.minTranslate()) < 1,
              l = Math.abs(e - t.maxTranslate()) < 1;
            n = s || r <= 0, a = l || r >= 1, s && (r = 0), l && (r = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              r = t.slidesGrid[s],
              n = t.slidesGrid[i],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              o = Math.abs(e);
            l = o >= r ? (o - r) / a : (o + a - n) / a, l > 1 && (l -= 1)
          }
          Object.assign(t, {
            progress: r,
            progressLoop: l,
            isBeginning: n,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: s,
              slidesEl: i,
              activeIndex: r
            } = e,
            a = e.virtual && s.virtual.enabled,
            l = e.grid && s.grid && s.grid.rows > 1,
            o = e => (0, n.e)(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, p;
          if (t.forEach((e => {
              e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            })), a)
            if (s.loop) {
              let t = r - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = o(`[data-swiper-slide-index="${t}"]`)
            } else d = o(`[data-swiper-slide-index="${r}"]`);
          else l ? (d = t.filter((e => e.column === r))[0], p = t.filter((e => e.column === r + 1))[0], c = t.filter((e => e.column === r - 1))[0]) : d = t[r];
          d && (d.classList.add(s.slideActiveClass), l ? (p && p.classList.add(s.slideNextClass), c && c.classList.add(s.slidePrevClass)) : (p = (0, n.p)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p && (p = t[0]), p && p.classList.add(s.slideNextClass), c = (0, n.q)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: r,
              activeIndex: n,
              realIndex: a,
              snapIndex: l
            } = t;
          let o, d = e;
          const c = e => {
            let s = e - t.virtual.slidesBefore;
            return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: s
              } = e, i = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
              return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
            }(t)), i.indexOf(s) >= 0) o = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            o = e + Math.floor((d - e) / r.slidesPerGroup)
          }
          if (o >= i.length && (o = i.length - 1), d === n && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && r.grid && r.grid.rows > 1;
          let u;
          if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
          else if (p) {
            const e = t.slides.filter((e => e.column === d))[0];
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: o,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), t.initialized && f(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            i = s.params;
          let r = e.closest(`.${i.slideClass}, swiper-slide`);
          !r && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e)
          }));
          let n, a = !1;
          if (r)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === r) {
                a = !0, n = e;
                break
              } if (!r || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
          s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
      };

      function v(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: i,
          step: r
        } = e;
        const {
          activeIndex: n,
          previousIndex: a
        } = t;
        let l = i;
        if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
          if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`), "next" === l ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
        }
      }
      var g = {
          slideTo: function(e, t, s, i, r) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let l = e;
            l < 0 && (l = 0);
            const {
              params: o,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: p,
              activeIndex: u,
              rtlTranslate: m,
              wrapperEl: f,
              enabled: h
            } = a;
            if (a.animating && o.preventInteractionOnTransition || !h && !i && !r || a.destroyed) return !1;
            const v = Math.min(a.params.slidesPerGroupSkip, l);
            let g = v + Math.floor((l - v) / a.params.slidesPerGroup);
            g >= d.length && (g = d.length - 1);
            const w = -d[g];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  s = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= s && t < i - (i - s) / 2 ? l = e : t >= s && t < i && (l = e + 1) : t >= s && (l = e)
              }
            if (a.initialized && l !== u) {
              if (!a.allowSlideNext && (m ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (u || 0) !== l) return !1
            }
            let b;
            if (l !== (p || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = l > u ? "next" : l < u ? "prev" : "reset", m && -w === a.translate || !m && w === a.translate) return a.updateActiveIndex(l), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)), !1;
            if (o.cssMode) {
              const e = a.isHorizontal(),
                s = m ? w : -w;
              if (0 === t) {
                const t = a.virtual && a.params.virtual.enabled;
                t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  f[e ? "scrollLeft" : "scrollTop"] = s
                }))) : f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                  a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                }))
              } else {
                if (!a.support.smoothScroll) return (0, n.r)({
                  swiper: a,
                  targetPosition: s,
                  side: e ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [e ? "left" : "top"]: s,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(l), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, b), 0 === t ? a.transitionEnd(s, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, b))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, s, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            if (r.destroyed) return;
            const n = r.grid && r.params.grid && r.params.grid.rows > 1;
            let a = e;
            if (r.params.loop)
              if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * r.params.grid.rows;
                  e = r.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = r.getSlideIndexByData(a);
                const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                  {
                    centeredSlides: s
                  } = r.params;
                let i = r.params.slidesPerView;
                "auto" === i ? i = r.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && i % 2 == 0 && (i += 1));
                let l = t - e < i;
                if (s && (l = l || e < Math.ceil(i / 2)), l) {
                  const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                  r.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? r.realIndex : void 0
                  })
                }
                if (n) {
                  const e = a * r.params.grid.rows;
                  a = r.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else a = r.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              r.slideTo(a, t, s, i)
            })), r
          },
          slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                enabled: r,
                params: n,
                animating: a
              } = i;
            if (!r || i.destroyed) return i;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
              d = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                i.slideTo(i.activeIndex + o, e, t, s)
              })), !0
            }
            return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
          },
          slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                params: r,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: o,
                animating: d
              } = i;
            if (!o || i.destroyed) return i;
            const c = i.virtual && r.virtual.enabled;
            if (r.loop) {
              if (d && !c && r.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? i.translate : -i.translate),
              m = n.map((e => p(e)));
            let f = n[m.indexOf(u) - 1];
            if (void 0 === f && r.cssMode) {
              let e;
              n.forEach(((t, s) => {
                u >= t && (e = s)
              })), void 0 !== e && (f = n[e > 0 ? e - 1 : e])
            }
            let h = 0;
            if (void 0 !== f && (h = a.indexOf(f), h < 0 && (h = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && i.isBeginning) {
              const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(r, e, t, s)
            }
            return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
              i.slideTo(h, e, t, s)
            })), !0) : i.slideTo(h, e, t, s)
          },
          slideReset: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this;
            if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, s)
          },
          slideToClosest: function(e, t, s, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
            const r = this;
            if (r.destroyed) return;
            let n = r.activeIndex;
            const a = Math.min(r.params.slidesPerGroupSkip, n),
              l = a + Math.floor((n - a) / r.params.slidesPerGroup),
              o = r.rtlTranslate ? r.translate : -r.translate;
            if (o >= r.snapGrid[l]) {
              const e = r.snapGrid[l];
              o - e > (r.snapGrid[l + 1] - e) * i && (n += r.params.slidesPerGroup)
            } else {
              const e = r.snapGrid[l - 1];
              o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup)
            }
            return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: s
            } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let r, a = e.clickedIndex;
            const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        w = {
          loopCreate: function(e) {
            const t = this,
              {
                params: s,
                slidesEl: i
              } = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled) return;
            const r = () => {
                (0, n.e)(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              a = t.grid && s.grid && s.grid.rows > 1,
              l = s.slidesPerGroup * (a ? s.grid.rows : 1),
              o = t.slides.length % l != 0,
              d = a && t.slides.length % s.grid.rows != 0,
              c = e => {
                for (let i = 0; i < e; i += 1) {
                  const e = t.isElement ? (0, n.c)("swiper-slide", [s.slideBlankClass]) : (0, n.c)("div", [s.slideClass, s.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            o ? (s.loopAddBlankSlides ? (c(l - t.slides.length % l), t.recalcSlides(), t.updateSlides()) : (0, n.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : d ? (s.loopAddBlankSlides ? (c(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, n.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), r()) : r(), t.loopFix({
              slideRealIndex: e,
              direction: s.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: i,
              setTranslate: r,
              activeSlideIndex: a,
              byController: l,
              byMousewheel: o
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: p,
              allowSlideNext: u,
              slidesEl: m,
              params: f
            } = d, {
              centeredSlides: h
            } = f;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) return s && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
            let v = f.slidesPerView;
            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)), h && v % 2 == 0 && (v += 1));
            const g = f.slidesPerGroupAuto ? v : f.slidesPerGroup;
            let w = g;
            w % g != 0 && (w += g - w % g), w += f.loopAdditionalSlides, d.loopedSlides = w;
            const b = d.grid && f.grid && f.grid.rows > 1;
            c.length < v + w ? (0, n.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, n.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [],
              S = [];
            let E = d.activeIndex;
            void 0 === a ? a = d.getSlideIndex(c.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : E = a;
            const T = "next" === i || !i,
              x = "prev" === i || !i;
            let C = 0,
              M = 0;
            const P = b ? Math.ceil(c.length / f.grid.rows) : c.length,
              k = (b ? c[a].column : a) + (h && void 0 === r ? -v / 2 + .5 : 0);
            if (k < w) {
              C = Math.max(w - k, g);
              for (let e = 0; e < w - k; e += 1) {
                const t = e - Math.floor(e / P) * P;
                if (b) {
                  const e = P - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t)
                } else y.push(P - t - 1)
              }
            } else if (k + v > P - w) {
              M = Math.max(k - (P - 2 * w), g);
              for (let e = 0; e < M; e += 1) {
                const t = e - Math.floor(e / P) * P;
                b ? c.forEach(((e, s) => {
                  e.column === t && S.push(s)
                })) : S.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                d.__preventObserver__ = !1
              })), x && y.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, m.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), T && S.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, m.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : b && (y.length > 0 && x || S.length > 0 && T) && d.slides.forEach(((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              })), f.watchSlidesProgress && d.updateSlidesOffset(), s)
              if (y.length > 0 && x) {
                if (void 0 === t) {
                  const e = d.slidesGrid[E],
                    t = d.slidesGrid[E + C] - e;
                  o ? d.setTranslate(d.translate - t) : (d.slideTo(E + C, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (r) {
                  const e = b ? y.length / f.grid.rows : y.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (S.length > 0 && T)
              if (void 0 === t) {
                const e = d.slidesGrid[E],
                  t = d.slidesGrid[E - M] - e;
                o ? d.setTranslate(d.translate - t) : (d.slideTo(E - M, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? S.length / f.grid.rows : S.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: r,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === f.slidesPerView && s
                })
              })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && s
              })
            }
            d.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: s
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              i[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), i.forEach((e => {
              s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function b(e, t, s) {
        const i = (0, r.a)(),
          {
            params: n
          } = e,
          a = n.edgeSwipeDetection,
          l = n.edgeSwipeThreshold;
        return !a || !(s <= l || s >= i.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
      }

      function y(e) {
        const t = this,
          s = (0, r.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
          a.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void b(t, i, i.targetTouches[0].pageX);
        const {
          params: l,
          touches: o,
          enabled: d
        } = t;
        if (!d) return;
        if (!l.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!l.noSwipingClass && "" !== l.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        p && i.target && i.target.shadowRoot && u && (c = u[0]);
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
          f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === (0, r.g)() || s === (0, r.a)()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
              }(t)
          }(m, c) : c.closest(m))) return void(t.allowClick = !0);
        if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
        o.currentX = i.pageX, o.currentY = i.pageY;
        const h = o.currentX,
          v = o.currentY;
        if (!b(t, i, h)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = h, o.startY = v, a.touchStartTime = (0, n.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
        let g = !0;
        c.matches(a.focusableElements) && (g = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && s.activeElement.blur();
        const w = g && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !w || c.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
      }

      function S(e) {
        const t = (0, r.g)(),
          s = this,
          i = s.touchEventsData,
          {
            params: a,
            touches: l,
            rtlTranslate: o,
            enabled: d
          } = s;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== i.touchId) return;
          if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX,
          m = c.pageY;
        if (p.preventedByNestedSwiper) return l.startX = u, void(l.startY = m);
        if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(l, {
          startX: u,
          startY: m,
          currentX: u,
          currentY: m
        }), i.touchStartTime = (0, n.d)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (s.isVertical()) {
            if (m < l.startY && s.translate <= s.maxTranslate() || m > l.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (u < l.startX && s.translate <= s.maxTranslate() || u > l.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = u, l.currentY = m;
        const f = l.currentX - l.startX,
          h = l.currentY - l.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let v = s.isHorizontal() ? f : h,
          g = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
        a.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), g = Math.abs(g) * (o ? 1 : -1)), l.diff = v, v *= a.touchRatio, o && (v = -v, g = -g);
        const w = s.touchesDirection;
        s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
        const b = s.params.loop && !a.cssMode,
          y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
          if (b && y && s.loopFix({
              direction: s.swipeDirection
            }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            s.wrapperEl.dispatchEvent(e)
          }
          i.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(v) >= 1) return Object.assign(l, {
          startX: u,
          startY: m,
          currentX: u,
          currentY: m,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
        let S = !0,
          E = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (E = 0), v > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > s.minTranslate() && (S = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** E))) : v < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), i.currentTranslate < s.maxTranslate() && (S = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** E))), S && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
          if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, i.currentTranslate = i.startTranslate, void(l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
      }

      function E(e) {
        const t = this,
          s = t.touchEventsData;
        let i, r = e;
        if (r.originalEvent && (r = r.originalEvent), "touchend" === r.type || "touchcancel" === r.type) {
          if (i = [...r.changedTouches].filter((e => e.identifier === s.touchId))[0], !i || i.identifier !== s.touchId) return
        } else {
          if (null !== s.touchId) return;
          if (r.pointerId !== s.pointerId) return;
          i = r
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && (!["pointercancel", "contextmenu"].includes(r.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        s.pointerId = null, s.touchId = null;
        const {
          params: a,
          touches: l,
          rtlTranslate: o,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === r.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, n.d)(),
          u = p - s.touchStartTime;
        if (t.allowClick) {
          const e = r.path || r.composedPath && r.composedPath();
          t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
        }
        if (s.lastClickTime = (0, n.d)(), (0, n.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === l.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let m;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, m = a.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: m
        });
        const f = m >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (f || m >= d[e] && m < d[e + t]) && (h = e, v = d[e + t] - d[e]) : (f || m >= d[e]) && (h = e, v = d[d.length - 1] - d[d.length - 2])
        }
        let g = null,
          w = null;
        a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const b = (m - d[h]) / v,
          y = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (u > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : h + y) : t.slideTo(h)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(h + y) : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(h))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || r.target !== t.navigation.nextEl && r.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h)) : r.target === t.navigation.nextEl ? t.slideTo(h + y) : t.slideTo(h)
        }
      }

      function T() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: r,
          snapGrid: n
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function x(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function C() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
          } = e;
        if (!i) return;
        let r;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function M(e) {
        const t = this;
        u(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function P() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const k = (e, t) => {
          const s = (0, r.g)(),
            {
              params: i,
              el: n,
              wrapperEl: a,
              device: l
            } = e,
            o = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
          }), n[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), n[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
          }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
          }), s[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (i.preventClicks || i.preventClicksPropagation) && n[d]("click", e.onClick, !0), i.cssMode && a[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : e[c]("observerUpdate", T, !0), n[d]("load", e.onLoad, {
            capture: !0
          })
        },
        L = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var I = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function O(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            r = s[i];
          "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), (0, n.u)(t, s)) : (0, n.u)(t, s)) : (0, n.u)(t, s)
        }
      }
      const _ = {
          eventsEmitter: p,
          update: h,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: s,
                translate: i,
                wrapperEl: r
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let a = (0, n.i)(r, e);
              return a += this.cssOverflowAdjustment(), s && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: n,
                  progress: a
                } = s;
              let l, o = 0,
                d = 0;
              s.isHorizontal() ? o = i ? -e : e : d = e, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : r.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
              const c = s.maxTranslate() - s.minTranslate();
              l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, i, r) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
              const a = this,
                {
                  params: l,
                  wrapperEl: o
                } = a;
              if (a.animating && l.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let p;
              if (p = i && e > d ? d : i && e < c ? c : e, a.updateProgress(p), l.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!a.support.smoothScroll) return (0, n.r)({
                    swiper: a,
                    targetPosition: -p,
                    side: e ? "left" : "top"
                  }), !0;
                  o.scrollTo({
                    [e ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, s && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: i
                } = s;
              i.cssMode || (i.autoHeight && s.updateAutoHeight(), v({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: i
                } = s;
              s.animating = !1, i.cssMode || (s.setTransition(0), v({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: w,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = y.bind(e), e.onTouchMove = S.bind(e), e.onTouchEnd = E.bind(e), e.onDocumentTouchStart = P.bind(e), t.cssMode && (e.onScroll = C.bind(e)), e.onClick = x.bind(e), e.onLoad = M.bind(e), k(e, "on")
            },
            detachEvents: function() {
              k(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: s,
                  params: i,
                  el: r
                } = e,
                a = i.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              const o = (l in a ? a[l] : void 0) || e.originalParams,
                d = L(e, i),
                c = L(e, o),
                p = i.enabled;
              d && !c ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === o[t]) return;
                const s = i[t] && i[t].enabled,
                  r = o[t] && o[t].enabled;
                s && !r && e[t].disable(), !s && r && e[t].enable()
              }));
              const u = o.direction && o.direction !== i.direction,
                m = i.loop && (o.slidesPerView !== i.slidesPerView || u),
                f = i.loop;
              u && s && e.changeDirection(), (0, n.u)(e.params, o);
              const h = e.params.enabled,
                v = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && v ? (e.loopCreate(t), e.updateSlides()) : f && !v && e.loopDestroy()), e.emit("breakpoint", o)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let i = !1;
              const n = (0, r.a)(),
                a = "window" === t ? n.innerHeight : s.clientHeight,
                l = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < l.length; e += 1) {
                const {
                  point: r,
                  value: a
                } = l[e];
                "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r) : a <= s.clientWidth && (i = r)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: s
                } = e,
                {
                  slidesOffsetBefore: i
                } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: s,
                  rtl: i,
                  el: r,
                  device: n
                } = e,
                a = function(e, t) {
                  const s = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((i => {
                      e[i] && s.push(t + i)
                    })) : "string" == typeof e && s.push(t + e)
                  })), s
                }(["initialized", s.direction, {
                  "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                  autoheight: s.autoHeight
                }, {
                  rtl: i
                }, {
                  grid: s.grid && s.grid.rows > 1
                }, {
                  "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                  android: n.android
                }, {
                  ios: n.ios
                }, {
                  "css-mode": s.cssMode
                }, {
                  centered: s.cssMode && s.centeredSlides
                }, {
                  "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
              t.push(...a), r.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        A = {};
      class z {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, n.u)({}, t), e && !t.el && (t.el = e);
          const l = (0, r.g)();
          if (t.el && "string" == typeof t.el && l.querySelectorAll(t.el).length > 1) {
            const e = [];
            return l.querySelectorAll(t.el).forEach((s => {
              const i = (0, n.u)({}, t, {
                el: s
              });
              e.push(new z(i))
            })), e
          }
          const p = this;
          p.__swiper__ = !0, p.support = d(), p.device = c({
            userAgent: t.userAgent
          }), p.browser = (o || (o = function() {
            const e = (0, r.a)(),
              t = c();
            let s = !1;

            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                s = e < 16 || 16 === e && i < 2
              }
            }
            const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              a = i();
            return {
              isSafari: s || a,
              needPerspectiveFix: s,
              need3dFix: a || n && t.ios,
              isWebView: n
            }
          }()), o), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
          const u = {};
          p.modules.forEach((e => {
            e({
              params: t,
              swiper: p,
              extendParams: O(t, u),
              on: p.on.bind(p),
              once: p.once.bind(p),
              off: p.off.bind(p),
              emit: p.emit.bind(p)
            })
          }));
          const m = (0, n.u)({}, I, u);
          return p.params = (0, n.u)({}, m, A, t), p.originalParams = (0, n.u)({}, p.params), p.passedParams = (0, n.u)({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach((e => {
            p.on(e, p.params.on[e])
          })), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
            enabled: p.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === p.params.direction,
            isVertical: () => "vertical" === p.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: p.params.allowSlideNext,
            allowSlidePrev: p.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: p.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: p.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), p.emit("_swiper"), p.params.init && p.init(), p
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: s
          } = this, i = (0, n.e)(t, `.${s.slideClass}, swiper-slide`), r = (0, n.g)(i[0]);
          return (0, n.g)(e) - r
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, n.e)(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            r = (s.maxTranslate() - i) * e + i;
          s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((s => {
            const i = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: i
            }), e.emit("_slideClass", s, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: n,
            size: a,
            activeIndex: l
          } = this;
          let o = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
            for (let s = l + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), o += 1, t > a && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = l + 1; e < i.length; e += 1)(t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a) && (o += 1);
          else
            for (let e = l - 1; e >= 0; e -= 1) r[l] - r[e] < a && (o += 1);
          return o
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let r;
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && u(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
              const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              r = e.slideTo(t.length - 1, 0, !1, !0)
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i()
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
          s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : (0, n.e)(s, i())[0];
          return !r && t.params.createElements && (r = (0, n.c)("div", t.params.wrapperClass), s.append(r), (0, n.e)(s, `.${t.params.slideClass}`).forEach((e => {
            r.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, n.o)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, n.o)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, n.o)(r, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
            e.complete ? u(t, e) : e.addEventListener("load", (e => {
              u(t, e.target)
            }))
          })), f(t), t.initialized = !0, f(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: i,
              el: r,
              wrapperEl: a,
              slides: l
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach((e => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el.swiper = null, (0, n.v)(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, n.u)(A, e)
        }
        static get extendedDefaults() {
          return A
        }
        static get defaults() {
          return I
        }
        static installModule(e) {
          z.prototype.__modules__ || (z.prototype.__modules__ = []);
          const t = z.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => z.installModule(e))), z) : (z.installModule(e), z)
        }
      }
      Object.keys(_).forEach((e => {
        Object.keys(_[e]).forEach((t => {
          z.prototype[t] = _[e][t]
        }))
      })), z.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: i
        } = e;
        const n = (0, r.a)();
        let a = null,
          l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
            l = n.requestAnimationFrame((() => {
              const {
                width: s,
                height: i
              } = t;
              let r = s,
                n = i;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: i,
                  target: a
                } = e;
                a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize)
              })), r === s && n === i || o()
            }))
          })), a.observe(t.el)) : (n.addEventListener("resize", o), n.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
          l && n.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: a
        } = e;
        const l = [],
          o = (0, r.a)(),
          d = function(e, s) {
            void 0 === s && (s = {});
            const i = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const s = function() {
                a("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
            }));
            i.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData
            }), l.push(i)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, n.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          l.forEach((e => {
            e.disconnect()
          })), l.splice(0, l.length)
        }))
      }]);
      const D = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function N(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function G(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : N(t[s]) && N(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : G(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function $(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function B(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function j(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function R(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function V(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function F() {
        return F = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
          }
          return e
        }, F.apply(this, arguments)
      }

      function H(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function q(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          H(e) ? t.push(e) : e.props && e.props.children && q(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function W(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (H(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = q(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function Y(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const X = (0, i.createContext)(null),
        U = (0, i.createContext)(null),
        K = (0, i.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: r = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: l,
            ...o
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, i.useState)("swiper"), [u, m] = (0, i.useState)(null), [f, h] = (0, i.useState)(!1), v = (0, i.useRef)(!1), g = (0, i.useRef)(null), w = (0, i.useRef)(null), b = (0, i.useRef)(null), y = (0, i.useRef)(null), S = (0, i.useRef)(null), E = (0, i.useRef)(null), T = (0, i.useRef)(null), x = (0, i.useRef)(null), {
            params: C,
            passedParams: M,
            rest: P,
            events: k
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              i = {},
              r = {};
            G(s, I), s._emitClasses = !0, s.init = !1;
            const n = {},
              a = D.map((e => e.replace(/_/, ""))),
              l = Object.assign({}, e);
            return Object.keys(l).forEach((l => {
              void 0 !== e[l] && (a.indexOf(l) >= 0 ? N(e[l]) ? (s[l] = {}, r[l] = {}, G(s[l], e[l]), G(r[l], e[l])) : (s[l] = e[l], r[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l] ? t ? i[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : s.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n[l] = e[l])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            })), {
              params: s,
              passedParams: r,
              rest: n,
              events: i
            }
          }(o), {
            slides: L,
            slots: O
          } = W(a), _ = () => {
            h(!f)
          };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const A = () => {
            Object.assign(C.on, k), d = !0;
            const e = {
              ...C
            };
            if (delete e.wrapperClass, w.current = new z(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = L;
              const e = {
                cache: !1,
                slides: L,
                renderExternal: m,
                renderExternalUpdate: !1
              };
              G(w.current.params.virtual, e), G(w.current.originalParams.virtual, e)
            }
          };
          return g.current || A(), w.current && w.current.on("_beforeBreakpoint", _), (0, i.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", _)
          })), (0, i.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), Y((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && A(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: i,
                  prevEl: r,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: l
                } = e;
                $(t) && i && r && (l.params.navigation.nextEl = i, l.originalParams.navigation.nextEl = i, l.params.navigation.prevEl = r, l.originalParams.navigation.prevEl = r), B(t) && n && (l.params.pagination.el = n, l.originalParams.pagination.el = n), j(t) && a && (l.params.scrollbar.el = a, l.originalParams.scrollbar.el = a), l.init(s)
              }({
                el: g.current,
                nextEl: S.current,
                prevEl: E.current,
                paginationEl: T.current,
                scrollbarEl: x.current,
                swiper: w.current
              }, C), l && !w.current.destroyed && l(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), Y((() => {
            !d && k && w.current && Object.keys(k).forEach((e => {
              w.current.on(e, k[e])
            }));
            const e = function(e, t, s, i, r) {
              const n = [];
              if (!t) return n;
              const a = e => {
                n.indexOf(e) < 0 && n.push(e)
              };
              if (s && i) {
                const e = i.map(r),
                  t = s.map(r);
                e.join("") !== t.join("") && a("children"), i.length !== s.length && a("children")
              }
              return D.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (N(e[s]) && N(t[s])) {
                    const i = Object.keys(e[s]),
                      r = Object.keys(t[s]);
                    i.length !== r.length ? a(s) : (i.forEach((i => {
                      e[s][i] !== t[s][i] && a(s)
                    })), r.forEach((i => {
                      e[s][i] !== t[s][i] && a(s)
                    })))
                  } else e[s] !== t[s] && a(s)
              })), n
            }(M, b.current, L, y.current, (e => e.key));
            return b.current = M, y.current = L, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: i,
                changedParams: r,
                nextEl: n,
                prevEl: a,
                scrollbarEl: l,
                paginationEl: o
              } = e;
              const d = r.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: m,
                  virtual: f,
                  thumbs: h
                } = t;
              let v, g, w, b, y, S, E, T;
              r.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), r.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (g = !0), r.includes("pagination") && i.pagination && (i.pagination.el || o) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (c.scrollbar || !1 === c.scrollbar) && m && !m.el && (b = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (y = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              r.includes("loop") && t.isElement && (c.loop && !i.loop ? S = !0 : !c.loop && i.loop ? E = !0 : T = !0), d.forEach((e => {
                if (N(c[e]) && N(i[e])) Object.assign(c[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || x(e);
                else {
                  const t = i[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = i[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), r.includes("children") && s && f && c.virtual.enabled ? (f.slides = s, f.update(!0)) : r.includes("virtual") && f && c.virtual.enabled && (s && (f.slides = s), f.update(!0)), r.includes("children") && s && c.loop && (T = !0), v && h.init() && h.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (c.pagination.el = o), p.init(), p.render(), p.update()), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (c.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), y && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = t.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), r.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && t.changeDirection(i.direction, !1), (S || T) && t.loopDestroy(), (E || T) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: L,
              passedParams: M,
              changedParams: e,
              nextEl: S.current,
              prevEl: E.current,
              scrollbarEl: x.current,
              paginationEl: T.current
            }), () => {
              k && w.current && Object.keys(k).forEach((e => {
                w.current.off(e, k[e])
              }))
            }
          })), Y((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), i.createElement(r, F({
            ref: g,
            className: R(`${c}${s?` ${s}`:""}`)
          }, P), i.createElement(U.Provider, {
            value: w.current
          }, O["container-start"], i.createElement(n, {
            className: V(C.wrapperClass)
          }, O["wrapper-start"], C.virtual ? function(e, t, s) {
            if (!s) return null;
            const r = e => {
                let s = e;
                return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
              },
              n = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
              } : {
                top: `${s.offset}px`
              },
              {
                from: a,
                to: l
              } = s,
              o = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = o; e < d; e += 1) e >= a && e <= l && c.push(t[r(e)]);
            return c.map(((t, s) => i.cloneElement(t, {
              swiper: e,
              style: n,
              key: `slide-${s}`
            })))
          }(w.current, L, u) : L.map(((e, t) => i.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), O["wrapper-end"]), $(C) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: E,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: S,
            className: "swiper-button-next"
          })), j(C) && i.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), B(C) && i.createElement("div", {
            ref: T,
            className: "swiper-pagination"
          }), O["container-end"]))
        }));
      K.displayName = "Swiper";
      const J = (0, i.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: r,
          className: n = "",
          swiper: a,
          zoom: l,
          lazy: o,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [m, f] = (0, i.useState)("swiper-slide"),
          [h, v] = (0, i.useState)(!1);

        function g(e, t, s) {
          t === u.current && f(s)
        }
        Y((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== m && f("swiper-slide")
          }
        })), Y((() => {
          a && u.current && !a.destroyed && f(a.getSlideClasses(u.current))
        }), [a]);
        const w = {
            isActive: m.indexOf("swiper-slide-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isPrev: m.indexOf("swiper-slide-prev") >= 0,
            isNext: m.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof r ? r(w) : r;
        return i.createElement(s, F({
          ref: u,
          className: R(`${m}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), l && i.createElement(X.Provider, {
          value: w
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof l ? l : void 0
        }, b(), o && !h && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !l && i.createElement(X.Provider, {
          value: w
        }, b(), o && !h && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      J.displayName = "SwiperSlide"
    }
  }
]);