! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ae43426-8ea9-42af-9b48-1dc74e10da1c", e._sentryDebugIdIdentifier = "sentry-dbid-1ae43426-8ea9-42af-9b48-1dc74e10da1c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5853, 1029, 3410, 5791, 8172], {
    65039: (e, t, s) => {
      var r = s(62229),
        i = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, s) {
        var r, n = {},
          d = null,
          c = null;
        for (r in void 0 !== s && (d = "" + s), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !o.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      t.Fragment = n, t.jsx = d, t.jsxs = d
    },
    91029: (e, t, s) => {
      e.exports = s(65039)
    },
    25561: (e, t, s) => {
      s.d(t, {
        RC: () => ue,
        qr: () => fe
      });
      var r = s(62229);

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
        }))
      }
      const a = {
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

      function l() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, a), e
      }
      const o = {
        document: a,
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

      function d() {
        const e = "undefined" != typeof window ? window : {};
        return n(e, o), e
      }

      function c(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function p() {
        return Date.now()
      }

      function u(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function f() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, r = s.length; t < r; t += 1) {
              const r = s[t],
                n = Object.getOwnPropertyDescriptor(i, r);
              void 0 !== n && n.enumerable && (u(e[r]) && u(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : f(e[r], i[r]) : !u(e[r]) && u(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : f(e[r], i[r])) : e[r] = i[r])
            }
          }
        }
        var s;
        return e
      }

      function h(e, t, s) {
        e.style.setProperty(t, s)
      }

      function m(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: r
        } = e;
        const i = d(),
          n = -t.translate;
        let a, l = null;
        const o = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            a = (new Date).getTime(), null === l && (l = a);
            const e = Math.max(Math.min((a - l) / o, 1), 0),
              d = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + d * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [r]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: c
              })
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
          };
        u()
      }

      function v(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function g(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function w(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), s
      }

      function b(e, t) {
        return d().getComputedStyle(e, null).getPropertyValue(t)
      }

      function S(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function T(e, t, s) {
        const r = d();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }
      let y, E, x;

      function C() {
        return y || (y = function() {
          const e = d(),
            t = l();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), y
      }

      function P(e) {
        return void 0 === e && (e = {}), E || (E = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const s = C(),
            r = d(),
            i = r.navigator.platform,
            n = t || r.navigator.userAgent,
            a = {
              ios: !1,
              android: !1
            },
            l = r.screen.width,
            o = r.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let m = "MacIntel" === i;
          return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !h && (a.os = "android", a.android = !0), (p || f || u) && (a.os = "ios", a.ios = !0), a
        }(e)), E
      }
      var M = {
        on(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const i = s ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
          })), r
        },
        once(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;

          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
            t.apply(r, n)
          }
          return i.__emitterProxy = t, r.on(e, i, s)
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const r = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[r](e), s
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
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((r, i) => {
              (r === t || r.__emitterProxy && r.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
            }))
          })), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, r;
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), r = e) : (t = n[0].events, s = n[0].data, r = n[0].context || e), s.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(r, [t, ...s])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(r, s)
            }))
          })), e
        }
      };
      const _ = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        k = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        O = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = i,
              n = [s - t];
            return n.push(...Array.from({
              length: t
            }).map(((e, t) => s + r + t))), void e.slides.forEach(((t, s) => {
              n.includes(t.column) && k(e, s)
            }))
          }
          const n = i + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = i - t; r <= n + t; r += 1) {
              const t = (r % s + s) % s;
              (t < i || t > n) && k(e, t)
            } else
              for (let r = Math.max(i - t, 0); r <= Math.min(n + t, s - 1); r += 1) r !== i && (r > n || r < i) && k(e, r)
        };
      var I = {
        updateSize: function() {
          const e = this;
          let t, s;
          const r = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(r, "padding-left") || 0, 10) - parseInt(b(r, "padding-right") || 0, 10), s = s - parseInt(b(r, "padding-top") || 0, 10) - parseInt(b(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
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
              wrapperEl: r,
              slidesEl: i,
              size: n,
              rtlTranslate: a,
              wrongRTL: l
            } = e,
            o = e.virtual && s.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            c = v(i, `.${e.params.slideClass}, swiper-slide`),
            p = o ? e.virtual.slides.length : c.length;
          let u = [];
          const f = [],
            m = [];
          let g = s.slidesOffsetBefore;
          "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
          let w = s.slidesOffsetAfter;
          "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
          const S = e.snapGrid.length,
            y = e.slidesGrid.length;
          let E = s.spaceBetween,
            x = -g,
            C = 0,
            P = 0;
          if (void 0 === n) return;
          "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * n : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, c.forEach((e => {
            a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), s.centeredSlides && s.cssMode && (h(r, "--swiper-centered-offset-before", ""), h(r, "--swiper-centered-offset-after", ""));
          const M = s.grid && s.grid.rows > 1 && e.grid;
          let _;
          M ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const k = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
          for (let r = 0; r < p; r += 1) {
            let i;
            if (_ = 0, c[r] && (i = c[r]), M && e.grid.updateSlide(r, i, c), !c[r] || "none" !== b(i, "display")) {
              if ("auto" === s.slidesPerView) {
                k && (c[r].style[e.getDirectionLabel("width")] = "");
                const n = getComputedStyle(i),
                  a = i.style.transform,
                  l = i.style.webkitTransform;
                if (a && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) _ = e.isHorizontal() ? T(i, "width", !0) : T(i, "height", !0);
                else {
                  const e = t(n, "width"),
                    s = t(n, "padding-left"),
                    r = t(n, "padding-right"),
                    a = t(n, "margin-left"),
                    l = t(n, "margin-right"),
                    o = n.getPropertyValue("box-sizing");
                  if (o && "border-box" === o) _ = e + a + l;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: n
                    } = i;
                    _ = e + s + r + a + l + (n - t)
                  }
                }
                a && (i.style.transform = a), l && (i.style.webkitTransform = l), s.roundLengths && (_ = Math.floor(_))
              } else _ = (n - (s.slidesPerView - 1) * E) / s.slidesPerView, s.roundLengths && (_ = Math.floor(_)), c[r] && (c[r].style[e.getDirectionLabel("width")] = `${_}px`);
              c[r] && (c[r].swiperSlideSize = _), m.push(_), s.centeredSlides ? (x = x + _ / 2 + C / 2 + E, 0 === C && 0 !== r && (x = x - n / 2 - E), 0 === r && (x = x - n / 2 - E), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), P % s.slidesPerGroup == 0 && u.push(x), f.push(x)) : (s.roundLengths && (x = Math.floor(x)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && u.push(x), f.push(x), x = x + _ + E), e.virtualSize += _ + E, C = _, P += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, n) + w, a && l && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${e.virtualSize+E}px`), s.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize+E}px`), M && e.grid.updateWrapperSize(_, u), !s.centeredSlides) {
            const t = [];
            for (let r = 0; r < u.length; r += 1) {
              let i = u[r];
              s.roundLengths && (i = Math.floor(i)), u[r] <= e.virtualSize - n && t.push(i)
            }
            u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
          }
          if (o && s.loop) {
            const t = m[0] + E;
            if (s.slidesPerGroup > 1) {
              const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                i = t * s.slidesPerGroup;
              for (let e = 0; e < r; e += 1) u.push(u[u.length - 1] + i)
            }
            for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === u.length && (u = [0]), 0 !== E) {
            const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
            c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
              e.style[t] = `${E}px`
            }))
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = e - n;
            u = u.map((e => e <= 0 ? -g : e > t ? t + w : e))
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (m.forEach((t => {
                e += t + (E || 0)
              })), e -= E, e < n) {
              const t = (n - e) / 2;
              u.forEach(((e, s) => {
                u[s] = e - t
              })), f.forEach(((e, s) => {
                f[s] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: f,
              slidesSizesGrid: m
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
            h(r, "--swiper-centered-offset-before", -u[0] + "px"), h(r, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (p !== d && e.emit("slidesLengthChange"), u.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
            const t = `${s.containerModifierClass}backface-hidden`,
              r = e.el.classList.contains(t);
            p <= s.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            s = [],
            r = t.virtual && t.params.virtual.enabled;
          let i, n = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              s.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !r) break;
                s.push(a(e))
              } else s.push(a(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              n = e > n ? e : n
            }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            s = t.params,
            {
              slides: r,
              rtlTranslate: i,
              snapGrid: n
            } = t;
          if (0 === r.length) return;
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          i && (a = e), r.forEach((e => {
            e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let l = s.spaceBetween;
          "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
          for (let e = 0; e < r.length; e += 1) {
            const o = r[e];
            let d = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= r[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
              p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
              u = -(a - d),
              f = u + t.slidesSizesGrid[e],
              h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
            (u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), r[e].classList.add(s.slideVisibleClass)), h && r[e].classList.add(s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * s || 0
          }
          const s = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: n,
            isEnd: a,
            progressLoop: l
          } = t;
          const o = n,
            d = a;
          if (0 === r) i = 0, n = !0, a = !0;
          else {
            i = (e - t.minTranslate()) / r;
            const s = Math.abs(e - t.minTranslate()) < 1,
              l = Math.abs(e - t.maxTranslate()) < 1;
            n = s || i <= 0, a = l || i >= 1, s && (i = 0), l && (i = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[s],
              n = t.slidesGrid[r],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              o = Math.abs(e);
            l = o >= i ? (o - i) / a : (o + a - n) / a, l > 1 && (l -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: l,
            isBeginning: n,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: s,
              slidesEl: r,
              activeIndex: i
            } = e,
            n = e.virtual && s.virtual.enabled,
            a = e.grid && s.grid && s.grid.rows > 1,
            l = e => v(r, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let o, d, c;
          if (t.forEach((e => {
              e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            })), n)
            if (s.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
            } else o = l(`[data-swiper-slide-index="${i}"]`);
          else a ? (o = t.filter((e => e.column === i))[0], c = t.filter((e => e.column === i + 1))[0], d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
          o && (o.classList.add(s.slideActiveClass), a ? (c && c.classList.add(s.slideNextClass), d && d.classList.add(s.slidePrevClass)) : (c = function(e, t) {
            const s = [];
            for (; e.nextElementSibling;) {
              const r = e.nextElementSibling;
              t ? r.matches(t) && s.push(r) : s.push(r), e = r
            }
            return s
          }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), c && c.classList.add(s.slideNextClass), d = function(e, t) {
            const s = [];
            for (; e.previousElementSibling;) {
              const r = e.previousElementSibling;
              t ? r.matches(t) && s.push(r) : s.push(r), e = r
            }
            return s
          }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]), d && d.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: i,
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
              } = e, r = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : r >= t[e] && r < t[e + 1] && (i = e + 1) : r >= t[e] && (i = e);
              return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), r.indexOf(s) >= 0) o = r.indexOf(s);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            o = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (o >= r.length && (o = r.length - 1), d === n && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && i.grid && i.grid.rows > 1;
          let u;
          if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
          else if (p) {
            const e = t.slides.filter((e => e.column === d))[0];
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
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
          }), t.initialized && O(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            r = s.params;
          let i = e.closest(`.${r.slideClass}, swiper-slide`);
          !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
          }));
          let n, a = !1;
          if (i)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === i) {
                a = !0, n = e;
                break
              } if (!i || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
          s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, r.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
      };

      function L(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: r,
          step: i
        } = e;
        const {
          activeIndex: n,
          previousIndex: a
        } = t;
        let l = r;
        if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${i}`), s && n !== a) {
          if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var A = {
          slideTo: function(e, t, s, r, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            let a = e;
            a < 0 && (a = 0);
            const {
              params: l,
              snapGrid: o,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: p,
              rtlTranslate: u,
              wrapperEl: f,
              enabled: h
            } = n;
            if (n.animating && l.preventInteractionOnTransition || !h && !r && !i || n.destroyed) return !1;
            const v = Math.min(n.params.slidesPerGroupSkip, a);
            let g = v + Math.floor((a - v) / n.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const w = -o[g];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w),
                  s = Math.floor(100 * d[e]),
                  r = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < r - (r - s) / 2 ? a = e : t >= s && t < r && (a = e + 1) : t >= s && (a = e)
              }
            if (n.initialized && a !== p) {
              if (!n.allowSlideNext && (u ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate())) return !1;
              if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1
            }
            let b;
            if (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), b = a > p ? "next" : a < p ? "prev" : "reset", u && -w === n.translate || !u && w === n.translate) return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(s, b), n.transitionEnd(s, b)), !1;
            if (l.cssMode) {
              const e = n.isHorizontal(),
                s = u ? w : -w;
              if (0 === t) {
                const t = n.virtual && n.params.virtual.enabled;
                t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  f[e ? "scrollLeft" : "scrollTop"] = s
                }))) : f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                  n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                }))
              } else {
                if (!n.support.smoothScroll) return m({
                  swiper: n,
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
            return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(s, b), 0 === t ? n.transitionEnd(s, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
              n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, b))
            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, s, r) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            const n = i.grid && i.params.grid && i.params.grid.rows > 1;
            let a = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * i.params.grid.rows;
                  e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = i.getSlideIndexByData(a);
                const t = n ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: s
                  } = i.params;
                let r = i.params.slidesPerView;
                "auto" === r ? r = i.slidesPerViewDynamic() : (r = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && r % 2 == 0 && (r += 1));
                let l = t - e < r;
                if (s && (l = l || e < Math.ceil(r / 2)), l) {
                  const r = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: r,
                    slideTo: !0,
                    activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === r ? i.realIndex : void 0
                  })
                }
                if (n) {
                  const e = a * i.params.grid.rows;
                  a = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else a = i.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              i.slideTo(a, t, s, r)
            })), i
          },
          slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const r = this,
              {
                enabled: i,
                params: n,
                animating: a
              } = r;
            if (!i || r.destroyed) return r;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
            const o = r.activeIndex < n.slidesPerGroupSkip ? 1 : l,
              d = r.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (r.loopFix({
                  direction: "next"
                }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                r.slideTo(r.activeIndex + o, e, t, s)
              })), !0
            }
            return n.rewind && r.isEnd ? r.slideTo(0, e, t, s) : r.slideTo(r.activeIndex + o, e, t, s)
          },
          slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const r = this,
              {
                params: i,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: o,
                animating: d
              } = r;
            if (!o || r.destroyed) return r;
            const c = r.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              r.loopFix({
                direction: "prev"
              }), r._clientLeft = r.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? r.translate : -r.translate),
              f = n.map((e => p(e)));
            let h = n[f.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
              let e;
              n.forEach(((t, s) => {
                u >= t && (e = s)
              })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = a.indexOf(h), m < 0 && (m = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - r.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && r.isBeginning) {
              const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
              return r.slideTo(i, e, t, s)
            }
            return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              r.slideTo(m, e, t, s)
            })), !0) : r.slideTo(m, e, t, s)
          },
          slideReset: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const r = this;
            if (!r.destroyed) return r.slideTo(r.activeIndex, e, t, s)
          },
          slideToClosest: function(e, t, s, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = .5);
            const i = this;
            if (i.destroyed) return;
            let n = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, n),
              l = a + Math.floor((n - a) / i.params.slidesPerGroup),
              o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
              const e = i.snapGrid[l];
              o - e > (i.snapGrid[l + 1] - e) * r && (n += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[l - 1];
              o - e <= (i.snapGrid[l] - e) * r && (n -= i.params.slidesPerGroup)
            }
            return n = Math.max(n, 0), n = Math.min(n, i.slidesGrid.length - 1), i.slideTo(n, e, t, s)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: s
            } = e, r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, n = e.clickedIndex;
            const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - r / 2 || n > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), n = e.getSlideIndex(v(s, `${a}[data-swiper-slide-index="${i}"]`)[0]), c((() => {
                e.slideTo(n)
              }))) : e.slideTo(n) : n > e.slides.length - r ? (e.loopFix(), n = e.getSlideIndex(v(s, `${a}[data-swiper-slide-index="${i}"]`)[0]), c((() => {
                e.slideTo(n)
              }))) : e.slideTo(n)
            } else e.slideTo(n)
          }
        },
        z = {
          loopCreate: function(e) {
            const t = this,
              {
                params: s,
                slidesEl: r
              } = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled) return;
            const i = () => {
                v(r, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              n = t.grid && s.grid && s.grid.rows > 1,
              a = s.slidesPerGroup * (n ? s.grid.rows : 1),
              l = t.slides.length % a != 0,
              o = n && t.slides.length % s.grid.rows != 0,
              d = e => {
                for (let r = 0; r < e; r += 1) {
                  const e = t.isElement ? w("swiper-slide", [s.slideBlankClass]) : w("div", [s.slideClass, s.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            l ? (s.loopAddBlankSlides ? (d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : o ? (s.loopAddBlankSlides ? (d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()) : g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), t.loopFix({
              slideRealIndex: e,
              direction: s.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: r,
              setTranslate: i,
              activeSlideIndex: n,
              byController: a,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop) return;
            o.emit("beforeLoopFix");
            const {
              slides: d,
              allowSlidePrev: c,
              allowSlideNext: p,
              slidesEl: u,
              params: f
            } = o, {
              centeredSlides: h
            } = f;
            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && f.virtual.enabled) return s && (f.centeredSlides || 0 !== o.snapIndex ? f.centeredSlides && o.snapIndex < f.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
            let m = f.slidesPerView;
            "auto" === m ? m = o.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(f.slidesPerView, 10)), h && m % 2 == 0 && (m += 1));
            const v = f.slidesPerGroupAuto ? m : f.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v), w += f.loopAdditionalSlides, o.loopedSlides = w;
            const b = o.grid && f.grid && f.grid.rows > 1;
            d.length < m + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              T = [];
            let y = o.activeIndex;
            void 0 === n ? n = o.getSlideIndex(d.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : y = n;
            const E = "next" === r || !r,
              x = "prev" === r || !r;
            let C = 0,
              P = 0;
            const M = b ? Math.ceil(d.length / f.grid.rows) : d.length,
              _ = (b ? d[n].column : n) + (h && void 0 === i ? -m / 2 + .5 : 0);
            if (_ < w) {
              C = Math.max(w - _, v);
              for (let e = 0; e < w - _; e += 1) {
                const t = e - Math.floor(e / M) * M;
                if (b) {
                  const e = M - t - 1;
                  for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && S.push(t)
                } else S.push(M - t - 1)
              }
            } else if (_ + m > M - w) {
              P = Math.max(_ - (M - 2 * w), v);
              for (let e = 0; e < P; e += 1) {
                const t = e - Math.floor(e / M) * M;
                b ? d.forEach(((e, s) => {
                  e.column === t && T.push(s)
                })) : T.push(t)
              }
            }
            if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
                o.__preventObserver__ = !1
              })), x && S.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
              })), E && T.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
              })), o.recalcSlides(), "auto" === f.slidesPerView ? o.updateSlides() : b && (S.length > 0 && x || T.length > 0 && E) && o.slides.forEach(((e, t) => {
                o.grid.updateSlide(t, e, o.slides)
              })), f.watchSlidesProgress && o.updateSlidesOffset(), s)
              if (S.length > 0 && x) {
                if (void 0 === t) {
                  const e = o.slidesGrid[y],
                    t = o.slidesGrid[y + C] - e;
                  l ? o.setTranslate(o.translate - t) : (o.slideTo(y + C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = b ? S.length / f.grid.rows : S.length;
                  o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
                }
              } else if (T.length > 0 && E)
              if (void 0 === t) {
                const e = o.slidesGrid[y],
                  t = o.slidesGrid[y - P] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(y - P, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? T.length / f.grid.rows : T.length;
                o.slideTo(o.activeIndex - e, 0, !1, !0)
              } if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !a) {
              const e = {
                slideRealIndex: t,
                direction: r,
                setTranslate: i,
                activeSlideIndex: n,
                byController: !0
              };
              Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === f.slidesPerView && s
                })
              })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                ...e,
                slideTo: o.controller.control.params.slidesPerView === f.slidesPerView && s
              })
            }
            o.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: s
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const r = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              r[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), r.forEach((e => {
              s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function G(e, t, s) {
        const r = d(),
          {
            params: i
          } = e,
          n = i.edgeSwipeDetection,
          a = i.edgeSwipeThreshold;
        return !n || !(s <= a || s >= r.innerWidth - a) || "prevent" === n && (t.preventDefault(), !0)
      }

      function D(e) {
        const t = this,
          s = l();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const i = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== i.pointerId && i.pointerId !== r.pointerId) return;
          i.pointerId = r.pointerId
        } else "touchstart" === r.type && 1 === r.targetTouches.length && (i.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) return void G(t, r, r.targetTouches[0].pageX);
        const {
          params: n,
          touches: a,
          enabled: o
        } = t;
        if (!o) return;
        if (!n.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let c = r.target;
        if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const u = !!n.noSwipingClass && "" !== n.noSwipingClass,
          f = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && f && (c = f[0]);
        const h = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
          m = !(!r.target || !r.target.shadowRoot);
        if (n.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === l() || s === d()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const r = s.closest(e);
                return r || s.getRootNode ? r || t(s.getRootNode().host) : null
              }(t)
          }(h, c) : c.closest(h))) return void(t.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
        a.currentX = r.pageX, a.currentY = r.pageY;
        const v = a.currentX,
          g = a.currentY;
        if (!G(t, r, v)) return;
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), a.startX = v, a.startY = g, i.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1);
        let w = !0;
        c.matches(i.focusableElements) && (w = !1, "SELECT" === c.nodeName && (i.isTouched = !1)), s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== c && s.activeElement.blur();
        const b = w && t.allowTouchMove && n.touchStartPreventDefault;
        !n.touchStartForcePreventDefault && !b || c.isContentEditable || r.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
      }

      function N(e) {
        const t = l(),
          s = this,
          r = s.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: a,
            enabled: o
          } = s;
        if (!o) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let d, c = e;
        if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
          if (null !== r.touchId) return;
          if (c.pointerId !== r.pointerId) return
        }
        if ("touchmove" === c.type) {
          if (d = [...c.changedTouches].filter((e => e.identifier === r.touchId))[0], !d || d.identifier !== r.touchId) return
        } else d = c;
        if (!r.isTouched) return void(r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", c));
        const u = d.pageX,
          f = d.pageY;
        if (c.preventedByNestedSwiper) return n.startX = u, void(n.startY = f);
        if (!s.allowTouchMove) return c.target.matches(r.focusableElements) || (s.allowClick = !1), void(r.isTouched && (Object.assign(n, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), r.touchStartTime = p()));
        if (i.touchReleaseOnEdges && !i.loop)
          if (s.isVertical()) {
            if (f < n.startY && s.translate <= s.maxTranslate() || f > n.startY && s.translate >= s.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
          } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements)) return r.isMoved = !0, void(s.allowClick = !1);
        r.allowTouchCallbacks && s.emit("touchMove", c), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = f;
        const h = n.currentX - n.startX,
          m = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold) return;
        if (void 0 === r.isScrolling) {
          let e;
          s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? r.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (r.isScrolling && s.emit("touchMoveOpposite", c), void 0 === r.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1);
        if (!r.startMoving) return;
        s.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
        let v = s.isHorizontal() ? h : m,
          g = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        i.oneWayMovement && (v = Math.abs(v) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), n.diff = v, v *= i.touchRatio, a && (v = -v, g = -g);
        const w = s.touchesDirection;
        s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
        const b = s.params.loop && !i.cssMode,
          S = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!r.isMoved) {
          if (b && S && s.loopFix({
              direction: s.swipeDirection
            }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            s.wrapperEl.dispatchEvent(e)
          }
          r.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
        }
        if ((new Date).getTime(), r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(n, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: r.currentTranslate
        }), r.loopSwapReset = !0, void(r.startTranslate = r.currentTranslate);
        s.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
        let T = !0,
          y = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (y = 0), v > 0 ? (b && S && r.allowThresholdMove && r.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), r.currentTranslate > s.minTranslate() && (T = !1, i.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** y))) : v < 0 && (b && S && r.allowThresholdMove && r.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === i.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
          }), r.currentTranslate < s.maxTranslate() && (T = !1, i.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** y))), T && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), i.threshold > 0) {
          if (!(Math.abs(v) > i.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove) return r.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, r.currentTranslate = r.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
      }

      function V(e) {
        const t = this,
          s = t.touchEventsData;
        let r, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (r = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0], !r || r.identifier !== s.touchId) return
        } else {
          if (null !== s.touchId) return;
          if (i.pointerId !== s.pointerId) return;
          r = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        s.pointerId = null, s.touchId = null;
        const {
          params: n,
          touches: a,
          rtlTranslate: l,
          slidesGrid: o,
          enabled: d
        } = t;
        if (!d) return;
        if (!n.simulateTouch && "mouse" === i.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = p(),
          f = u - s.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), f < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = p(), c((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = n.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
        if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: h
        });
        const m = h >= -t.maxTranslate() && !t.params.loop;
        let v = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
          const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== o[e + t] ? (m || h >= o[e] && h < o[e + t]) && (v = e, g = o[e + t] - o[e]) : (m || h >= o[e]) && (v = e, g = o[o.length - 1] - o[o.length - 2])
        }
        let w = null,
          b = null;
        n.rewind && (t.isBeginning ? b = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const S = (h - o[v]) / g,
          T = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (f > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (S >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? w : v + T) : t.slideTo(v)), "prev" === t.swipeDirection && (S > 1 - n.longSwipesRatio ? t.slideTo(v + T) : null !== b && S < 0 && Math.abs(S) > n.longSwipesRatio ? t.slideTo(b) : t.slideTo(v))
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + T), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : v)) : i.target === t.navigation.nextEl ? t.slideTo(v + T) : t.slideTo(v)
        }
      }

      function B() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: r,
          allowSlidePrev: i,
          snapGrid: n
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function R(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function j() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: r
          } = e;
        if (!r) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function F(e) {
        const t = this;
        _(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function $() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const H = (e, t) => {
          const s = l(),
            {
              params: r,
              el: i,
              wrapperEl: n,
              device: a
            } = e,
            o = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
          }), i[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), i[d]("pointerdown", e.onTouchStart, {
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
          }), (r.preventClicks || r.preventClicksPropagation) && i[d]("click", e.onClick, !0), r.cssMode && n[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", B, !0) : e[c]("observerUpdate", B, !0), i[d]("load", e.onLoad, {
            capture: !0
          })
        },
        W = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var Y = {
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

      function q(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const r = Object.keys(s)[0],
            i = s[r];
          "object" == typeof i && null !== i ? (!0 === e[r] && (e[r] = {
            enabled: !0
          }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in i ? ("object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
            enabled: !1
          }), f(t, s)) : f(t, s)) : f(t, s)
        }
      }
      const X = {
          eventsEmitter: M,
          update: I,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: s,
                translate: r,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return s ? -r : r;
              if (t.cssMode) return r;
              let n = function(e, t) {
                void 0 === t && (t = "x");
                const s = d();
                let r, i, n;
                const a = function(e) {
                  const t = d();
                  let s;
                  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
              }(i, e);
              return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: r,
                  params: i,
                  wrapperEl: n,
                  progress: a
                } = s;
              let l, o = 0,
                d = 0;
              s.isHorizontal() ? o = r ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
              const c = s.maxTranslate() - s.minTranslate();
              l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, r, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === r && (r = !0);
              const n = this,
                {
                  params: a,
                  wrapperEl: l
                } = n;
              if (n.animating && a.preventInteractionOnTransition) return !1;
              const o = n.minTranslate(),
                d = n.maxTranslate();
              let c;
              if (c = r && e > o ? o : r && e < d ? d : e, n.updateProgress(c), a.cssMode) {
                const e = n.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!n.support.smoothScroll) return m({
                    swiper: n,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"))
              }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
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
                  params: r
                } = s;
              r.cssMode || (r.autoHeight && s.updateAutoHeight(), L({
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
                  params: r
                } = s;
              s.animating = !1, r.cssMode || (s.setTransition(0), L({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: A,
          loop: z,
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
              e.onTouchStart = D.bind(e), e.onTouchMove = N.bind(e), e.onTouchEnd = V.bind(e), e.onDocumentTouchStart = $.bind(e), t.cssMode && (e.onScroll = j.bind(e)), e.onClick = R.bind(e), e.onLoad = F.bind(e), H(e, "on")
            },
            detachEvents: function() {
              H(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: s,
                  params: r,
                  el: i
                } = e,
                n = r.breakpoints;
              if (!n || n && 0 === Object.keys(n).length) return;
              const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const l = (a in n ? n[a] : void 0) || e.originalParams,
                o = W(e, r),
                d = W(e, l),
                c = r.enabled;
              o && !d ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${r.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === l[t]) return;
                const s = r[t] && r[t].enabled,
                  i = l[t] && l[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable()
              }));
              const p = l.direction && l.direction !== r.direction,
                u = r.loop && (l.slidesPerView !== r.slidesPerView || p),
                h = r.loop;
              p && s && e.changeDirection(), f(e.params, l);
              const m = e.params.enabled,
                v = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), s && (u ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && v ? (e.loopCreate(t), e.updateSlides()) : h && !v && e.loopDestroy()), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let r = !1;
              const i = d(),
                n = "window" === t ? i.innerHeight : s.clientHeight,
                a = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: n * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < a.length; e += 1) {
                const {
                  point: n,
                  value: l
                } = a[e];
                "window" === t ? i.matchMedia(`(min-width: ${l}px)`).matches && (r = n) : l <= s.clientWidth && (r = n)
              }
              return r || "max"
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
                  slidesOffsetBefore: r
                } = s;
              if (r) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
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
                  rtl: r,
                  el: i,
                  device: n
                } = e,
                a = function(e, t) {
                  const s = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((r => {
                      e[r] && s.push(t + r)
                    })) : "string" == typeof e && s.push(t + e)
                  })), s
                }(["initialized", s.direction, {
                  "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                  autoheight: s.autoHeight
                }, {
                  rtl: r
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
              t.push(...a), i.classList.add(...t), e.emitContainerClasses()
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
        U = {};
      class K {
        constructor() {
          let e, t;
          for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++) r[i] = arguments[i];
          1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = f({}, t), e && !t.el && (t.el = e);
          const n = l();
          if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
            const e = [];
            return n.querySelectorAll(t.el).forEach((s => {
              const r = f({}, t, {
                el: s
              });
              e.push(new K(r))
            })), e
          }
          const a = this;
          a.__swiper__ = !0, a.support = C(), a.device = P({
            userAgent: t.userAgent
          }), a.browser = (x || (x = function() {
            const e = d(),
              t = P();
            let s = !1;

            function r() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (r()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                s = e < 16 || 16 === e && r < 2
              }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              n = r();
            return {
              isSafari: s || n,
              needPerspectiveFix: s,
              need3dFix: n || i && t.ios,
              isWebView: i
            }
          }()), x), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
          const o = {};
          a.modules.forEach((e => {
            e({
              params: t,
              swiper: a,
              extendParams: q(t, o),
              on: a.on.bind(a),
              once: a.once.bind(a),
              off: a.off.bind(a),
              emit: a.emit.bind(a)
            })
          }));
          const c = f({}, Y, o);
          return a.params = f({}, c, U, t), a.originalParams = f({}, a.params), a.passedParams = f({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
            a.on(e, a.params.on[e])
          })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
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
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), a.emit("_swiper"), a.params.init && a.init(), a
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
          } = this, r = S(v(t, `.${s.slideClass}, swiper-slide`)[0]);
          return S(e) - r
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = v(e, `.${t.slideClass}, swiper-slide`)
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
          const r = s.minTranslate(),
            i = (s.maxTranslate() - r) * e + r;
          s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
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
            const r = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: r
            }), e.emit("_slideClass", s, r)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: n,
            size: a,
            activeIndex: l
          } = this;
          let o = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = r[l] ? Math.ceil(r[l].swiperSlideSize) : 0;
            for (let s = l + 1; s < r.length; s += 1) r[s] && !e && (t += Math.ceil(r[s].swiperSlideSize), o += 1, t > a && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1) r[s] && !e && (t += r[s].swiperSlideSize, o += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = l + 1; e < r.length; e += 1)(t ? i[e] + n[e] - i[l] < a : i[e] - i[l] < a) && (o += 1);
          else
            for (let e = l - 1; e >= 0; e -= 1) i[l] - i[e] < a && (o += 1);
          return o
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && _(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
              const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || r()
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            r = s.params.direction;
          return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
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
          const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : v(s, r())[0];
          return !i && t.params.createElements && (i = w("div", t.params.wrapperClass), s.append(i), v(s, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: i,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
            wrongRTL: "-webkit-box" === b(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
            e.complete ? _(t, e) : e.addEventListener("load", (e => {
              _(t, e.target)
            }))
          })), O(t), t.initialized = !0, O(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: r,
              el: i,
              wrapperEl: n,
              slides: a
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), n.removeAttribute("style"), a && a.length && a.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el.swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          f(U, e)
        }
        static get extendedDefaults() {
          return U
        }
        static get defaults() {
          return Y
        }
        static installModule(e) {
          K.prototype.__modules__ || (K.prototype.__modules__ = []);
          const t = K.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => K.installModule(e))), K) : (K.installModule(e), K)
        }
      }
      Object.keys(X).forEach((e => {
        Object.keys(X[e]).forEach((t => {
          K.prototype[t] = X[e][t]
        }))
      })), K.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: r
        } = e;
        const i = d();
        let n = null,
          a = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
          },
          o = () => {
            t && !t.destroyed && t.initialized && r("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
            a = i.requestAnimationFrame((() => {
              const {
                width: s,
                height: r
              } = t;
              let i = s,
                n = r;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: r,
                  target: a
                } = e;
                a && a !== t.el || (i = r ? r.width : (s[0] || s).inlineSize, n = r ? r.height : (s[0] || s).blockSize)
              })), i === s && n === r || l()
            }))
          })), n.observe(t.el)) : (i.addEventListener("resize", l), i.addEventListener("orientationchange", o))
        })), s("destroy", (() => {
          a && i.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", o)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: r,
          emit: i
        } = e;
        const n = [],
          a = d(),
          l = function(e, s) {
            void 0 === s && (s = {});
            const r = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const s = function() {
                i("observerUpdate", e[0])
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0)
            }));
            r.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData
            }), n.push(r)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), r("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = function(e, t) {
                const s = [];
                let r = e.parentElement;
                for (; r;) s.push(r), r = r.parentElement;
                return s
              }(t.hostEl);
              for (let t = 0; t < e.length; t += 1) l(e[t])
            }
            l(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), l(t.wrapperEl, {
              attributes: !1
            })
          }
        })), r("destroy", (() => {
          n.forEach((e => {
            e.disconnect()
          })), n.splice(0, n.length)
        }))
      }]);
      const Z = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function J(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function Q(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : J(t[s]) && J(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : Q(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function ee(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function te(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function se(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function re(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function ie(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function ne() {
        return ne = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, ne.apply(this, arguments)
      }

      function ae(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function le(e) {
        const t = [];
        return r.Children.toArray(e).forEach((e => {
          ae(e) ? t.push(e) : e.props && e.props.children && le(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function oe(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return r.Children.toArray(e).forEach((e => {
          if (ae(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const r = le(e.props.children);
            r.length > 0 ? r.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function de(e, t) {
        return "undefined" == typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
      }
      const ce = (0, r.createContext)(null),
        pe = (0, r.createContext)(null),
        ue = (0, r.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: i = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: l,
            ...o
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, r.useState)("swiper"), [u, f] = (0, r.useState)(null), [h, m] = (0, r.useState)(!1), v = (0, r.useRef)(!1), g = (0, r.useRef)(null), w = (0, r.useRef)(null), b = (0, r.useRef)(null), S = (0, r.useRef)(null), T = (0, r.useRef)(null), y = (0, r.useRef)(null), E = (0, r.useRef)(null), x = (0, r.useRef)(null), {
            params: C,
            passedParams: P,
            rest: M,
            events: _
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              r = {},
              i = {};
            Q(s, Y), s._emitClasses = !0, s.init = !1;
            const n = {},
              a = Z.map((e => e.replace(/_/, ""))),
              l = Object.assign({}, e);
            return Object.keys(l).forEach((l => {
              void 0 !== e[l] && (a.indexOf(l) >= 0 ? J(e[l]) ? (s[l] = {}, i[l] = {}, Q(s[l], e[l]), Q(i[l], e[l])) : (s[l] = e[l], i[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l] ? t ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : s.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n[l] = e[l])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            })), {
              params: s,
              passedParams: i,
              rest: n,
              events: r
            }
          }(o), {
            slides: k,
            slots: O
          } = oe(a), I = () => {
            m(!h)
          };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const L = () => {
            Object.assign(C.on, _), d = !0;
            const e = {
              ...C
            };
            if (delete e.wrapperClass, w.current = new K(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              Q(w.current.params.virtual, e), Q(w.current.originalParams.virtual, e)
            }
          };
          return g.current || L(), w.current && w.current.on("_beforeBreakpoint", I), (0, r.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", I)
          })), (0, r.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), de((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && L(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: r,
                  prevEl: i,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: l
                } = e;
                ee(t) && r && i && (l.params.navigation.nextEl = r, l.originalParams.navigation.nextEl = r, l.params.navigation.prevEl = i, l.originalParams.navigation.prevEl = i), te(t) && n && (l.params.pagination.el = n, l.originalParams.pagination.el = n), se(t) && a && (l.params.scrollbar.el = a, l.originalParams.scrollbar.el = a), l.init(s)
              }({
                el: g.current,
                nextEl: T.current,
                prevEl: y.current,
                paginationEl: E.current,
                scrollbarEl: x.current,
                swiper: w.current
              }, C), l && !w.current.destroyed && l(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), de((() => {
            !d && _ && w.current && Object.keys(_).forEach((e => {
              w.current.on(e, _[e])
            }));
            const e = function(e, t, s, r, i) {
              const n = [];
              if (!t) return n;
              const a = e => {
                n.indexOf(e) < 0 && n.push(e)
              };
              if (s && r) {
                const e = r.map(i),
                  t = s.map(i);
                e.join("") !== t.join("") && a("children"), r.length !== s.length && a("children")
              }
              return Z.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (J(e[s]) && J(t[s])) {
                    const r = Object.keys(e[s]),
                      i = Object.keys(t[s]);
                    r.length !== i.length ? a(s) : (r.forEach((r => {
                      e[s][r] !== t[s][r] && a(s)
                    })), i.forEach((r => {
                      e[s][r] !== t[s][r] && a(s)
                    })))
                  } else e[s] !== t[s] && a(s)
              })), n
            }(P, b.current, k, S.current, (e => e.key));
            return b.current = P, S.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: r,
                changedParams: i,
                nextEl: n,
                prevEl: a,
                scrollbarEl: l,
                paginationEl: o
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: f,
                  virtual: h,
                  thumbs: m
                } = t;
              let v, g, w, b, S, T, y, E;
              i.includes("thumbs") && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (g = !0), i.includes("pagination") && r.pagination && (r.pagination.el || o) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && r.navigation && (r.navigation.prevEl || a) && (r.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !r.loop ? T = !0 : !c.loop && r.loop ? y = !0 : E = !0), d.forEach((e => {
                if (J(c[e]) && J(r[e])) Object.assign(c[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || x(e);
                else {
                  const t = r[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = r[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && s && h && c.virtual.enabled ? (h.slides = s, h.update(!0)) : i.includes("virtual") && h && c.virtual.enabled && (s && (h.slides = s), h.update(!0)), i.includes("children") && s && c.loop && (E = !0), v && m.init() && m.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (c.pagination.el = o), p.init(), p.render(), p.update()), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (c.scrollbar.el = l), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = t.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), i.includes("direction") && t.changeDirection(r.direction, !1), (T || E) && t.loopDestroy(), (y || E) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: k,
              passedParams: P,
              changedParams: e,
              nextEl: T.current,
              prevEl: y.current,
              scrollbarEl: x.current,
              paginationEl: E.current
            }), () => {
              _ && w.current && Object.keys(_).forEach((e => {
                w.current.off(e, _[e])
              }))
            }
          })), de((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), r.createElement(i, ne({
            ref: g,
            className: re(`${c}${s?` ${s}`:""}`)
          }, M), r.createElement(pe.Provider, {
            value: w.current
          }, O["container-start"], r.createElement(n, {
            className: ie(C.wrapperClass)
          }, O["wrapper-start"], C.virtual ? function(e, t, s) {
            if (!s) return null;
            const i = e => {
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
            for (let e = o; e < d; e += 1) e >= a && e <= l && c.push(t[i(e)]);
            return c.map(((t, s) => r.cloneElement(t, {
              swiper: e,
              style: n,
              key: `slide-${s}`
            })))
          }(w.current, k, u) : k.map(((e, t) => r.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), O["wrapper-end"]), ee(C) && r.createElement(r.Fragment, null, r.createElement("div", {
            ref: y,
            className: "swiper-button-prev"
          }), r.createElement("div", {
            ref: T,
            className: "swiper-button-next"
          })), se(C) && r.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), te(C) && r.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), O["container-end"]))
        }));
      ue.displayName = "Swiper";
      const fe = (0, r.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: i,
          className: n = "",
          swiper: a,
          zoom: l,
          lazy: o,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, r.useRef)(null),
          [f, h] = (0, r.useState)("swiper-slide"),
          [m, v] = (0, r.useState)(!1);

        function g(e, t, s) {
          t === u.current && h(s)
        }
        de((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && h("swiper-slide")
          }
        })), de((() => {
          a && u.current && !a.destroyed && h(a.getSlideClasses(u.current))
        }), [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(w) : i;
        return r.createElement(s, ne({
          ref: u,
          className: re(`${f}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), l && r.createElement(ce.Provider, {
          value: w
        }, r.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof l ? l : void 0
        }, b(), o && !m && r.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !l && r.createElement(ce.Provider, {
          value: w
        }, b(), o && !m && r.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      fe.displayName = "SwiperSlide"
    }
  }
]);