try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3082ec35-dd15-4e18-ba00-12e5c9014953", e._sentryDebugIdIdentifier = "sentry-dbid-3082ec35-dd15-4e18-ba00-12e5c9014953")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7152], {
    32654: (e, t, s) => {
      s.d(t, {
        RC: () => ge,
        qr: () => we
      });
      var r = s(73579);

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => s.indexOf(e) < 0).forEach(s => {
          void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
        })
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

      function o() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, a), e
      }
      const l = {
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
        return n(e, l), e
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

      function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
      }

      function m() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
          const r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != r && !f(r)) {
            const s = Object.keys(Object(r)).filter(e => t.indexOf(e) < 0);
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n && n.enumerable && (u(e[i]) && u(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : m(e[i], r[i]) : !u(e[i]) && u(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : m(e[i], r[i])) : e[i] = r[i])
            }
          }
        }
        return e
      }

      function h(e, t, s) {
        e.style.setProperty(t, s)
      }

      function v(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: r
        } = e;
        const i = d(),
          n = -t.translate;
        let a, o = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            a = (new Date).getTime(), null === o && (o = a);
            const e = Math.max(Math.min((a - o) / l, 1), 0),
              d = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + d * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [r]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: c
              })
            }), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
          };
        u()
      }

      function g(e, t) {
        void 0 === t && (t = "");
        const s = d(),
          r = [...e.children];
        return s.HTMLSlotElement && e instanceof HTMLSlotElement && r.push(...e.assignedElements()), t ? r.filter(e => e.matches(t)) : r
      }

      function w(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function b(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter(e => !!e.trim())
        }(t)), s
      }

      function S(e, t) {
        return d().getComputedStyle(e, null).getPropertyValue(t)
      }

      function T(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function y(e, t, s) {
        const r = d();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function E(e, t) {
        void 0 === t && (t = ""), "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
          createHTML: e => e
        }).createHTML(t) : e.innerHTML = t
      }
      let x, M, P;

      function C() {
        return x || (x = function() {
          const e = d(),
            t = o();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), x
      }

      function O(e) {
        return void 0 === e && (e = {}), M || (M = function(e) {
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
            o = r.screen.width,
            l = r.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === i;
          let h = "MacIntel" === i;
          return !p && h && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), h = !1), c && !m && (a.os = "android", a.android = !0), (p || f || u) && (a.os = "ios", a.ios = !0), a
        }(e)), M
      }

      function k() {
        return P || (P = function() {
          const e = d(),
            t = O();
          let s = !1;

          function r() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (r()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
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
        }()), P
      }
      var _ = {
        on(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const i = s ? "unshift" : "push";
          return e.split(" ").forEach(e => {
            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
          }), r
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
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((r, i) => {
              (r === t || r.__emitterProxy && r.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
            })
          }), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, r;
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), r = e) : (t = n[0].events, s = n[0].data, r = n[0].context || e), s.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
              e.apply(r, [t, ...s])
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
              e.apply(r, s)
            })
          }), e
        }
      };
      const I = (e, t, s) => {
          t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        L = (e, t, s) => {
          t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        z = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            })), t && t.remove()
          }
        },
        A = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        G = e => {
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
            }).map((e, t) => s + r + t)), void e.slides.forEach((t, s) => {
              n.includes(t.column) && A(e, s)
            })
          }
          const n = i + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = i - t; r <= n + t; r += 1) {
              const t = (r % s + s) % s;
              (t < i || t > n) && A(e, t)
            } else
              for (let r = Math.max(i - t, 0); r <= Math.min(n + t, s - 1); r += 1) r !== i && (r > n || r < i) && A(e, r)
        };
      var D = {
        updateSize: function() {
          const e = this;
          let t, s;
          const r = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(S(r, "padding-left") || 0, 10) - parseInt(S(r, "padding-right") || 0, 10), s = s - parseInt(S(r, "padding-top") || 0, 10) - parseInt(S(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
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
              wrongRTL: o
            } = e,
            l = e.virtual && s.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = g(i, `.${e.params.slideClass}, swiper-slide`),
            p = l ? e.virtual.slides.length : c.length;
          let u = [];
          const f = [],
            m = [];
          let v = s.slidesOffsetBefore;
          "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
          let w = s.slidesOffsetAfter;
          "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
          const b = e.snapGrid.length,
            T = e.slidesGrid.length;
          let E = s.spaceBetween,
            x = -v,
            M = 0,
            P = 0;
          if (void 0 === n) return;
          "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * n : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, c.forEach(e => {
            a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          }), s.centeredSlides && s.cssMode && (h(r, "--swiper-centered-offset-before", ""), h(r, "--swiper-centered-offset-after", ""));
          const C = s.grid && s.grid.rows > 1 && e.grid;
          let O;
          C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const k = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
          for (let r = 0; r < p; r += 1) {
            let i;
            if (O = 0, c[r] && (i = c[r]), C && e.grid.updateSlide(r, i, c), !c[r] || "none" !== S(i, "display")) {
              if ("auto" === s.slidesPerView) {
                k && (c[r].style[e.getDirectionLabel("width")] = "");
                const n = getComputedStyle(i),
                  a = i.style.transform,
                  o = i.style.webkitTransform;
                if (a && (i.style.transform = "none"), o && (i.style.webkitTransform = "none"), s.roundLengths) O = e.isHorizontal() ? y(i, "width", !0) : y(i, "height", !0);
                else {
                  const e = t(n, "width"),
                    s = t(n, "padding-left"),
                    r = t(n, "padding-right"),
                    a = t(n, "margin-left"),
                    o = t(n, "margin-right"),
                    l = n.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) O = e + a + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: n
                    } = i;
                    O = e + s + r + a + o + (n - t)
                  }
                }
                a && (i.style.transform = a), o && (i.style.webkitTransform = o), s.roundLengths && (O = Math.floor(O))
              } else O = (n - (s.slidesPerView - 1) * E) / s.slidesPerView, s.roundLengths && (O = Math.floor(O)), c[r] && (c[r].style[e.getDirectionLabel("width")] = `${O}px`);
              c[r] && (c[r].swiperSlideSize = O), m.push(O), s.centeredSlides ? (x = x + O / 2 + M / 2 + E, 0 === M && 0 !== r && (x = x - n / 2 - E), 0 === r && (x = x - n / 2 - E), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), P % s.slidesPerGroup === 0 && u.push(x), f.push(x)) : (s.roundLengths && (x = Math.floor(x)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup === 0 && u.push(x), f.push(x), x = x + O + E), e.virtualSize += O + E, M = O, P += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, n) + w, a && o && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${e.virtualSize+E}px`), s.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize+E}px`), C && e.grid.updateWrapperSize(O, u), !s.centeredSlides) {
            const t = [];
            for (let r = 0; r < u.length; r += 1) {
              let i = u[r];
              s.roundLengths && (i = Math.floor(i)), u[r] <= e.virtualSize - n && t.push(i)
            }
            u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
          }
          if (l && s.loop) {
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
            c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach(e => {
              e.style[t] = `${E}px`
            })
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            m.forEach(t => {
              e += t + (E || 0)
            }), e -= E;
            const t = e > n ? e - n : 0;
            u = u.map(e => e <= 0 ? -v : e > t ? t + w : e)
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            m.forEach(t => {
              e += t + (E || 0)
            }), e -= E;
            const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
            if (e + t < n) {
              const s = (n - e - t) / 2;
              u.forEach((e, t) => {
                u[t] = e - s
              }), f.forEach((e, t) => {
                f[t] = e + s
              })
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
            e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s)
          }
          if (p !== d && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== T && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
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
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach(e => {
              s.push(e)
            });
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
          i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = s.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < r.length; e += 1) {
            const l = r[e];
            let d = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= r[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = -(a - d),
              f = u + t.slidesSizesGrid[e],
              m = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
              h = u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size;
            h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), I(l, h, s.slideVisibleClass), I(l, m, s.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -p : p
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
            progressLoop: o
          } = t;
          const l = n,
            d = a;
          if (0 === r) i = 0, n = !0, a = !0;
          else {
            i = (e - t.minTranslate()) / r;
            const s = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            n = s || i <= 0, a = o || i >= 1, s && (i = 0), o && (i = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[s],
              n = t.slidesGrid[r],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= i ? (l - i) / a : (l + a - n) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: o,
            isBeginning: n,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
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
            o = e => g(r, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let l, d, c;
          if (n)
            if (s.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
            } else l = o(`[data-swiper-slide-index="${i}"]`);
          else a ? (l = t.find(e => e.column === i), c = t.find(e => e.column === i + 1), d = t.find(e => e.column === i - 1)) : l = t[i];
          l && (a || (c = function(e, t) {
            const s = [];
            for (; e.nextElementSibling;) {
              const r = e.nextElementSibling;
              t ? r.matches(t) && s.push(r) : s.push(r), e = r
            }
            return s
          }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function(e, t) {
            const s = [];
            for (; e.previousElementSibling;) {
              const r = e.previousElementSibling;
              t ? r.matches(t) && s.push(r) : s.push(r), e = r
            }
            return s
          }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach(e => {
            L(e, e === l, s.slideActiveClass), L(e, e === c, s.slideNextClass), L(e, e === d, s.slidePrevClass)
          }), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: i,
              activeIndex: n,
              realIndex: a,
              snapIndex: o
            } = t;
          let l, d = e;
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
            }(t)), r.indexOf(s) >= 0) l = r.indexOf(s);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= r.length && (l = r.length - 1), d === n && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && i.grid && i.grid.rows > 1;
          let u;
          if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
          else if (p) {
            const e = t.slides.find(e => e.column === d);
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), t.initialized && G(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            r = s.params;
          let i = e.closest(`.${r.slideClass}, swiper-slide`);
          !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
            !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
          });
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

      function N(e) {
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
        let o = r;
        o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${i}`), s && "reset" === o ? t.emit(`slideResetTransition${i}`) : s && n !== a && (t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`))
      }
      var V = {
          slideTo: function(e, t, s, r, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            let a = e;
            a < 0 && (a = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: p,
              rtlTranslate: u,
              wrapperEl: f,
              enabled: m
            } = n;
            if (!m && !r && !i || n.destroyed || n.animating && o.preventInteractionOnTransition) return !1;
            void 0 === t && (t = n.params.speed);
            const h = Math.min(n.params.slidesPerGroupSkip, a);
            let g = h + Math.floor((a - h) / n.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const w = -l[g];
            if (o.normalizeSlideIndex)
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
            a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), b = a > p ? "next" : a < p ? "prev" : "reset";
            const S = n.virtual && n.params.virtual.enabled;
            if ((!S || !i) && (u && -w === n.translate || !u && w === n.translate)) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(s, b), n.transitionEnd(s, b)), !1;
            if (o.cssMode) {
              const e = n.isHorizontal(),
                s = u ? w : -w;
              if (0 === t) S && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                f[e ? "scrollLeft" : "scrollTop"] = s
              })) : f[e ? "scrollLeft" : "scrollTop"] = s, S && requestAnimationFrame(() => {
                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
              });
              else {
                if (!n.support.smoothScroll) return v({
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
            const T = k().isSafari;
            return S && !i && T && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(s, b), 0 === t ? n.transitionEnd(s, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
              n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, b))
            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, s, r) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const n = i.grid && i.params.grid && i.params.grid.rows > 1;
            let a = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * i.params.grid.rows;
                  e = i.slides.find(e => 1 * e.getAttribute("data-swiper-slide-index") === t).column
                } else e = i.getSlideIndexByData(a);
                const t = n ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: s
                  } = i.params;
                let o = i.params.slidesPerView;
                "auto" === o ? o = i.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (s && (l = l || e < Math.ceil(o / 2)), r && s && "auto" !== i.params.slidesPerView && !n && (l = !1), l) {
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
                  a = i.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                } else a = i.getSlideIndexByData(a)
              } return requestAnimationFrame(() => {
              i.slideTo(a, t, s, r)
            }), i
          },
          slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const r = this,
              {
                enabled: i,
                params: n,
                animating: a
              } = r;
            if (!i || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            let o = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
            const l = r.activeIndex < n.slidesPerGroupSkip ? 1 : o,
              d = r.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (r.loopFix({
                  direction: "next"
                }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && n.cssMode) return requestAnimationFrame(() => {
                r.slideTo(r.activeIndex + l, e, t, s)
              }), !0
            }
            return n.rewind && r.isEnd ? r.slideTo(0, e, t, s) : r.slideTo(r.activeIndex + l, e, t, s)
          },
          slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const r = this,
              {
                params: i,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = r;
            if (!l || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
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
            const u = p(o ? r.translate : -r.translate),
              f = n.map(e => p(e)),
              m = i.freeMode && i.freeMode.enabled;
            let h = n[f.indexOf(u) - 1];
            if (void 0 === h && (i.cssMode || m)) {
              let e;
              n.forEach((t, s) => {
                u >= t && (e = s)
              }), void 0 !== e && (h = m ? n[e] : n[e > 0 ? e - 1 : e])
            }
            let v = 0;
            if (void 0 !== h && (v = a.indexOf(h), v < 0 && (v = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (v = v - r.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), i.rewind && r.isBeginning) {
              const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
              return r.slideTo(i, e, t, s)
            }
            return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame(() => {
              r.slideTo(v, e, t, s)
            }), !0) : r.slideTo(v, e, t, s)
          },
          slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const r = this;
            if (!r.destroyed) return void 0 === e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, s)
          },
          slideToClosest: function(e, t, s, r) {
            void 0 === t && (t = !0), void 0 === r && (r = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let n = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, n),
              o = a + Math.floor((n - a) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * r && (n += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * r && (n -= i.params.slidesPerGroup)
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
            let i, n = e.getSlideIndexWhenGrid(e.clickedIndex);
            const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
              o = e.grid && e.params.grid && e.params.grid.rows > 1;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(i) : n > (o ? (e.slides.length - r) / 2 - (e.params.grid.rows - 1) : e.slides.length - r) ? (e.loopFix(), n = e.getSlideIndex(g(s, `${a}[data-swiper-slide-index="${i}"]`)[0]), c(() => {
                e.slideTo(n)
              })) : e.slideTo(n)
            } else e.slideTo(n)
          }
        },
        j = {
          loopCreate: function(e, t) {
            const s = this,
              {
                params: r,
                slidesEl: i
              } = s;
            if (!r.loop || s.virtual && s.params.virtual.enabled) return;
            const n = () => {
                g(i, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                })
              },
              a = s.grid && r.grid && r.grid.rows > 1;
            r.loopAddBlankSlides && (r.slidesPerGroup > 1 || a) && (() => {
              const e = g(i, `.${r.slideBlankClass}`);
              e.forEach(e => {
                e.remove()
              }), e.length > 0 && (s.recalcSlides(), s.updateSlides())
            })();
            const o = r.slidesPerGroup * (a ? r.grid.rows : 1),
              l = s.slides.length % o !== 0,
              d = a && s.slides.length % r.grid.rows !== 0,
              c = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = s.isElement ? b("swiper-slide", [r.slideBlankClass]) : b("div", [r.slideClass, r.slideBlankClass]);
                  s.slidesEl.append(e)
                }
              };
            l ? (r.loopAddBlankSlides ? (c(o - s.slides.length % o), s.recalcSlides(), s.updateSlides()) : w("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : d ? (r.loopAddBlankSlides ? (c(r.grid.rows - s.slides.length % r.grid.rows), s.recalcSlides(), s.updateSlides()) : w("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : n(), s.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: r,
              setTranslate: i,
              activeSlideIndex: n,
              initial: a,
              byController: o,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: p,
              allowSlideNext: u,
              slidesEl: f,
              params: m
            } = d, {
              centeredSlides: h,
              initialSlide: v
            } = m;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
            let g = m.slidesPerView;
            "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)), h && g % 2 == 0 && (g += 1));
            const b = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
            let S = h ? Math.max(b, Math.ceil(g / 2)) : b;
            S % b !== 0 && (S += b - S % b), S += m.loopAdditionalSlides, d.loopedSlides = S;
            const T = d.grid && m.grid && m.grid.rows > 1;
            c.length < g + S || "cards" === d.params.effect && c.length < g + 2 * S ? w("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : T && "row" === m.grid.fill && w("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [],
              E = [],
              x = T ? Math.ceil(c.length / m.grid.rows) : c.length,
              M = a && x - v < g && !h;
            let P = M ? v : d.activeIndex;
            void 0 === n ? n = d.getSlideIndex(c.find(e => e.classList.contains(m.slideActiveClass))) : P = n;
            const C = "next" === r || !r,
              O = "prev" === r || !r;
            let k = 0,
              _ = 0;
            const I = (T ? c[n].column : n) + (h && void 0 === i ? -g / 2 + .5 : 0);
            if (I < S) {
              k = Math.max(S - I, b);
              for (let e = 0; e < S - I; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (T) {
                  const e = x - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t)
                } else y.push(x - t - 1)
              }
            } else if (I + g > x - S) {
              _ = Math.max(I - (x - 2 * S), b), M && (_ = Math.max(_, g - x + v + 1));
              for (let e = 0; e < _; e += 1) {
                const t = e - Math.floor(e / x) * x;
                T ? c.forEach((e, s) => {
                  e.column === t && E.push(s)
                }) : E.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                d.__preventObserver__ = !1
              }), "cards" === d.params.effect && c.length < g + 2 * S && (E.includes(n) && E.splice(E.indexOf(n), 1), y.includes(n) && y.splice(y.indexOf(n), 1)), O && y.forEach(e => {
                c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              }), C && E.forEach(e => {
                c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
              }), d.recalcSlides(), "auto" === m.slidesPerView ? d.updateSlides() : T && (y.length > 0 && O || E.length > 0 && C) && d.slides.forEach((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              }), m.watchSlidesProgress && d.updateSlidesOffset(), s)
              if (y.length > 0 && O) {
                if (void 0 === t) {
                  const e = d.slidesGrid[P],
                    t = d.slidesGrid[P + k] - e;
                  l ? d.setTranslate(d.translate - t) : (d.slideTo(P + Math.ceil(k), 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = T ? y.length / m.grid.rows : y.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (E.length > 0 && C)
              if (void 0 === t) {
                const e = d.slidesGrid[P],
                  t = d.slidesGrid[P - _] - e;
                l ? d.setTranslate(d.translate - t) : (d.slideTo(P - _, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = T ? E.length / m.grid.rows : E.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: r,
                setTranslate: i,
                activeSlideIndex: n,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === m.slidesPerView && s
                })
              }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === m.slidesPerView && s
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
            if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const r = [];
            e.slides.forEach(e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              r[t] = e
            }), e.slides.forEach(e => {
              e.removeAttribute("data-swiper-slide-index")
            }), r.forEach(e => {
              s.append(e)
            }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function B(e, t, s) {
        const r = d(),
          {
            params: i
          } = e,
          n = i.edgeSwipeDetection,
          a = i.edgeSwipeThreshold;
        return !n || !(s <= a || s >= r.innerWidth - a) || "prevent" === n && (t.preventDefault(), !0)
      }

      function R(e) {
        const t = this,
          s = o();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const i = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== i.pointerId && i.pointerId !== r.pointerId) return;
          i.pointerId = r.pointerId
        } else "touchstart" === r.type && 1 === r.targetTouches.length && (i.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) return void B(t, r, r.targetTouches[0].pageX);
        const {
          params: n,
          touches: a,
          enabled: l
        } = t;
        if (!l) return;
        if (!n.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let c = r.target;
        if ("wrapper" === n.touchEventsTarget && ! function(e, t) {
            const s = d();
            let r = t.contains(e);
            return !r && s.HTMLSlotElement && t instanceof HTMLSlotElement && (r = [...t.assignedElements()].includes(e), r || (r = function(e, t) {
              const s = [t];
              for (; s.length > 0;) {
                const t = s.shift();
                if (e === t) return !0;
                s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
              }
            }(e, t))), r
          }(c, t.wrapperEl)) return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const u = !!n.noSwipingClass && "" !== n.noSwipingClass,
          f = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && f && (c = f[0]);
        const m = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
          h = !(!r.target || !r.target.shadowRoot);
        if (n.noSwiping && (h ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === o() || s === d()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const r = s.closest(e);
                return r || s.getRootNode ? r || t(s.getRootNode().host) : null
              }(t)
          }(m, c) : c.closest(m))) return void(t.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
        a.currentX = r.pageX, a.currentY = r.pageY;
        const v = a.currentX,
          g = a.currentY;
        if (!B(t, r, v)) return;
        Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), a.startX = v, a.startY = g, i.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1);
        let w = !0;
        c.matches(i.focusableElements) && (w = !1, "SELECT" === c.nodeName && (i.isTouched = !1)), s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== c && ("mouse" === r.pointerType || "mouse" !== r.pointerType && !c.matches(i.focusableElements)) && s.activeElement.blur();
        const b = w && t.allowTouchMove && n.touchStartPreventDefault;
        !n.touchStartForcePreventDefault && !b || c.isContentEditable || r.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
      }

      function F(e) {
        const t = o(),
          s = this,
          r = s.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: a,
            enabled: l
          } = s;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === e.pointerType) return;
        let d, c = e;
        if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
          if (null !== r.touchId) return;
          if (c.pointerId !== r.pointerId) return
        }
        if ("touchmove" === c.type) {
          if (d = [...c.changedTouches].find(e => e.identifier === r.touchId), !d || d.identifier !== r.touchId) return
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
          } else {
            if (a && (u > n.startX && -s.translate <= s.maxTranslate() || u < n.startX && -s.translate >= s.minTranslate())) return;
            if (!a && (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== c.target && "mouse" !== c.pointerType && t.activeElement.blur(), t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements)) return r.isMoved = !0, void(s.allowClick = !1);
        r.allowTouchCallbacks && s.emit("touchMove", c), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = f;
        const m = n.currentX - n.startX,
          h = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold) return;
        if (void 0 === r.isScrolling) {
          let e;
          s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? r.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (r.isScrolling && s.emit("touchMoveOpposite", c), void 0 === r.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (r.startMoving = !0)), r.isScrolling || "touchmove" === c.type && r.preventTouchMoveFromPointerMove) return void(r.isTouched = !1);
        if (!r.startMoving) return;
        s.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
        let v = s.isHorizontal() ? m : h,
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
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            s.wrapperEl.dispatchEvent(e)
          }
          r.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
        }
        if ((new Date).getTime(), !1 !== i._loopSwapReset && r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(n, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: r.currentTranslate
        }), r.loopSwapReset = !0, void(r.startTranslate = r.currentTranslate);
        s.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
        let T = !0,
          y = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (y = 0), v > 0 ? (b && S && r.allowThresholdMove && r.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== i.slidesPerView && s.slides.length - i.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), r.currentTranslate > s.minTranslate() && (T = !1, i.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** y))) : v < 0 && (b && S && r.allowThresholdMove && r.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== i.slidesPerView && s.slides.length - i.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === i.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
          }), r.currentTranslate < s.maxTranslate() && (T = !1, i.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** y))), T && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), i.threshold > 0) {
          if (!(Math.abs(v) > i.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove) return r.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, r.currentTranslate = r.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
      }

      function $(e) {
        const t = this,
          s = t.touchEventsData;
        let r, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (r = [...i.changedTouches].find(e => e.identifier === s.touchId), !r || r.identifier !== s.touchId) return
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
          rtlTranslate: o,
          slidesGrid: l,
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
        if (s.lastClickTime = p(), c(() => {
            t.destroyed || (t.allowClick = !0)
          }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let m;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, m = n.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
        if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: m
        });
        const h = m >= -t.maxTranslate() && !t.params.loop;
        let v = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
          const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== l[e + t] ? (h || m >= l[e] && m < l[e + t]) && (v = e, g = l[e + t] - l[e]) : (h || m >= l[e]) && (v = e, g = l[l.length - 1] - l[l.length - 2])
        }
        let w = null,
          b = null;
        n.rewind && (t.isBeginning ? b = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const S = (m - l[v]) / g,
          T = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (f > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (S >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? w : v + T) : t.slideTo(v)), "prev" === t.swipeDirection && (S > 1 - n.longSwipesRatio ? t.slideTo(v + T) : null !== b && S < 0 && Math.abs(S) > n.longSwipesRatio ? t.slideTo(b) : t.slideTo(v))
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + T), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : v)) : i.target === t.navigation.nextEl ? t.slideTo(v + T) : t.slideTo(v)
        }
      }

      function H() {
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
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }, 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function W(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function q() {
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

      function Y(e) {
        const t = this;
        z(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function X() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const U = (e, t) => {
          const s = o(),
            {
              params: r,
              el: i,
              wrapperEl: n,
              device: a
            } = e,
            l = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          i && "string" != typeof i && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), i[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), i[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
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
          }), (r.preventClicks || r.preventClicksPropagation) && i[d]("click", e.onClick, !0), r.cssMode && n[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e[c]("observerUpdate", H, !0), i[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        K = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var Z = {
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

      function J(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const r = Object.keys(s)[0],
            i = s[r];
          "object" == typeof i && null !== i ? (!0 === e[r] && (e[r] = {
            enabled: !0
          }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in i ? ("object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
            enabled: !1
          }), m(t, s)) : m(t, s)) : m(t, s)
        }
      }
      const Q = {
          eventsEmitter: _,
          update: D,
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
                return s.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
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
              let o, l = 0,
                d = 0;
              s.isHorizontal() ? l = r ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : i.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = s.maxTranslate() - s.minTranslate();
              o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
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
                  wrapperEl: o
                } = n;
              if (n.animating && a.preventInteractionOnTransition) return !1;
              const l = n.minTranslate(),
                d = n.maxTranslate();
              let c;
              if (c = r && e > l ? l : r && e < d ? d : e, n.updateProgress(c), a.cssMode) {
                const e = n.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!n.support.smoothScroll) return v({
                    swiper: n,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  o.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"))
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
              r.cssMode || (r.autoHeight && s.updateAutoHeight(), N({
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
              s.animating = !1, r.cssMode || (s.setTransition(0), N({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: V,
          loop: j,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                t.__preventObserver__ = !1
              })
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                e.__preventObserver__ = !1
              }))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = R.bind(e), e.onTouchMove = F.bind(e), e.onTouchEnd = $.bind(e), e.onDocumentTouchStart = X.bind(e), t.cssMode && (e.onScroll = q.bind(e)), e.onClick = W.bind(e), e.onLoad = Y.bind(e), U(e, "on")
            },
            detachEvents: function() {
              U(this, "off")
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
              const a = o(),
                l = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
                d = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : a.querySelector(r.breakpointsBase),
                c = e.getBreakpoint(n, l, d);
              if (!c || e.currentBreakpoint === c) return;
              const p = (c in n ? n[c] : void 0) || e.originalParams,
                u = K(e, r),
                f = K(e, p),
                h = e.params.grabCursor,
                v = p.grabCursor,
                g = r.enabled;
              u && !f ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && f && (i.classList.add(`${r.containerModifierClass}grid`), (p.grid.fill && "column" === p.grid.fill || !p.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !v ? e.unsetGrabCursor() : !h && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                if (void 0 === p[t]) return;
                const s = r[t] && r[t].enabled,
                  i = p[t] && p[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable()
              });
              const w = p.direction && p.direction !== r.direction,
                b = r.loop && (p.slidesPerView !== r.slidesPerView || w),
                S = r.loop;
              w && s && e.changeDirection(), m(e.params, p);
              const T = e.params.enabled,
                y = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), g && !T ? e.disable() : !g && T && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", p), s && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !S && y ? (e.loopCreate(t), e.updateSlides()) : S && !y && e.loopDestroy()), e.emit("breakpoint", p)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let r = !1;
              const i = d(),
                n = "window" === t ? i.innerHeight : s.clientHeight,
                a = Object.keys(e).map(e => {
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
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                const {
                  point: n,
                  value: o
                } = a[e];
                "window" === t ? i.matchMedia(`(min-width: ${o}px)`).matches && (r = n) : o <= s.clientWidth && (r = n)
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
                  return e.forEach(e => {
                    "object" == typeof e ? Object.keys(e).forEach(r => {
                      e[r] && s.push(t + r)
                    }) : "string" == typeof e && s.push(t + e)
                  }), s
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
              e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
          }
        },
        ee = {};
      class te {
        constructor() {
          let e, t;
          for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++) r[i] = arguments[i];
          1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = m({}, t), e && !t.el && (t.el = e);
          const n = o();
          if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
            const e = [];
            return n.querySelectorAll(t.el).forEach(s => {
              const r = m({}, t, {
                el: s
              });
              e.push(new te(r))
            }), e
          }
          const a = this;
          a.__swiper__ = !0, a.support = C(), a.device = O({
            userAgent: t.userAgent
          }), a.browser = k(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
          const l = {};
          a.modules.forEach(e => {
            e({
              params: t,
              swiper: a,
              extendParams: J(t, l),
              on: a.on.bind(a),
              once: a.once.bind(a),
              off: a.off.bind(a),
              emit: a.emit.bind(a)
            })
          });
          const d = m({}, Z, l);
          return a.params = m({}, d, ee, t), a.originalParams = m({}, a.params), a.passedParams = m({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach(e => {
            a.on(e, a.params.on[e])
          }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
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
          } = this, r = T(g(t, `.${s.slideClass}, swiper-slide`)[0]);
          return T(e) - r
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e))
        }
        getSlideIndexWhenGrid(e) {
          return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = g(e, `.${t.slideClass}, swiper-slide`)
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
          const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach(s => {
            const r = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: r
            }), e.emit("_slideClass", s, r)
          }), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: n,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let s = o + 1; s < r.length; s += 1) r[s] && !e && (t += Math.ceil(r[s].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1) r[s] && !e && (t += r[s].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < r.length; e += 1)(t ? i[e] + n[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
          return l
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
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
              t.complete && z(e, t)
            }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight();
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
          return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          }), s.emit("changeDirection"), t && s.update()), s
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
          let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : g(s, r())[0];
          return !i && t.params.createElements && (i = b("div", t.params.wrapperClass), s.append(i), g(s, `.${t.params.slideClass}`).forEach(e => {
            i.append(e)
          })), Object.assign(t, {
            el: s,
            wrapperEl: i,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === S(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === S(s, "direction")),
            wrongRTL: "-webkit-box" === S(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(e => {
            e.complete ? z(t, e) : e.addEventListener("load", e => {
              z(t, e.target)
            })
          }), G(t), t.initialized = !0, G(t), t.emit("init"), t.emit("afterInit"), t
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
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach(e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
            s.off(e)
          }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function(e) {
            const t = e;
            Object.keys(t).forEach(e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            })
          }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          m(ee, e)
        }
        static get extendedDefaults() {
          return ee
        }
        static get defaults() {
          return Z
        }
        static installModule(e) {
          te.prototype.__modules__ || (te.prototype.__modules__ = []);
          const t = te.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach(e => te.installModule(e)), te) : (te.installModule(e), te)
        }
      }
      Object.keys(Q).forEach(e => {
        Object.keys(Q[e]).forEach(t => {
          te.prototype[t] = Q[e][t]
        })
      }), te.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: r
        } = e;
        const i = d();
        let n = null,
          a = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
          },
          l = () => {
            t && !t.destroyed && t.initialized && r("orientationchange")
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
            a = i.requestAnimationFrame(() => {
              const {
                width: s,
                height: r
              } = t;
              let i = s,
                n = r;
              e.forEach(e => {
                let {
                  contentBoxSize: s,
                  contentRect: r,
                  target: a
                } = e;
                a && a !== t.el || (i = r ? r.width : (s[0] || s).inlineSize, n = r ? r.height : (s[0] || s).blockSize)
              }), i === s && n === r || o()
            })
          }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", l))
        }), s("destroy", () => {
          a && i.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", l)
        })
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: r,
          emit: i
        } = e;
        const n = [],
          a = d(),
          o = function(e, s) {
            void 0 === s && (s = {});
            const r = new(a.MutationObserver || a.WebkitMutationObserver)(e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const s = function() {
                i("observerUpdate", e[0])
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0)
            });
            r.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: t.isElement || (void 0 === s.childList || s).childList,
              characterData: void 0 === s.characterData || s.characterData
            }), n.push(r)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), r("init", () => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = function(e) {
                const t = [];
                let s = e.parentElement;
                for (; s;) t.push(s), s = s.parentElement;
                return t
              }(t.hostEl);
              for (let t = 0; t < e.length; t += 1) o(e[t])
            }
            o(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), o(t.wrapperEl, {
              attributes: !1
            })
          }
        }), r("destroy", () => {
          n.forEach(e => {
            e.disconnect()
          }), n.splice(0, n.length)
        })
      }]);
      const se = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function re(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function ie(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => s.indexOf(e) < 0).forEach(s => {
          void 0 === e[s] ? e[s] = t[s] : re(t[s]) && re(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : ie(e[s], t[s]) : e[s] = t[s]
        })
      }

      function ne(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function ae(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function oe(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function le(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map(e => e.trim()).filter(e => !!e),
          s = [];
        return t.forEach(e => {
          s.indexOf(e) < 0 && s.push(e)
        }), s.join(" ")
      }

      function de(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function ce() {
        return ce = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, ce.apply(this, arguments)
      }

      function pe(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function ue(e) {
        const t = [];
        return r.Children.toArray(e).forEach(e => {
          pe(e) ? t.push(e) : e.props && e.props.children && ue(e.props.children).forEach(e => t.push(e))
        }), t
      }

      function fe(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return r.Children.toArray(e).forEach(e => {
          if (pe(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const r = ue(e.props.children);
            r.length > 0 ? r.forEach(e => t.push(e)) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        }), {
          slides: t,
          slots: s
        }
      }

      function me(e, t) {
        return "undefined" == typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
      }
      const he = (0, r.createContext)(null),
        ve = (0, r.createContext)(null),
        ge = (0, r.forwardRef)(function(e, t) {
          let {
            className: s,
            tag: i = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, r.useState)("swiper"), [u, f] = (0, r.useState)(null), [m, h] = (0, r.useState)(!1), v = (0, r.useRef)(!1), g = (0, r.useRef)(null), w = (0, r.useRef)(null), b = (0, r.useRef)(null), S = (0, r.useRef)(null), T = (0, r.useRef)(null), y = (0, r.useRef)(null), x = (0, r.useRef)(null), M = (0, r.useRef)(null), {
            params: P,
            passedParams: C,
            rest: O,
            events: k
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              r = {},
              i = {};
            ie(s, Z), s._emitClasses = !0, s.init = !1;
            const n = {},
              a = se.map(e => e.replace(/_/, "")),
              o = Object.assign({}, e);
            return Object.keys(o).forEach(o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? re(e[o]) ? (s[o] = {}, i[o] = {}, ie(s[o], e[o]), ie(i[o], e[o])) : (s[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n[o] = e[o])
            }), ["navigation", "pagination", "scrollbar"].forEach(e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            }), {
              params: s,
              passedParams: i,
              rest: n,
              events: r
            }
          }(l), {
            slides: _,
            slots: I
          } = fe(a), L = () => {
            h(!m)
          };
          Object.assign(P.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const z = () => {
            Object.assign(P.on, k), d = !0;
            const e = {
              ...P
            };
            if (delete e.wrapperClass, w.current = new te(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = _;
              const e = {
                cache: !1,
                slides: _,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              ie(w.current.params.virtual, e), ie(w.current.originalParams.virtual, e)
            }
          };
          return g.current || z(), w.current && w.current.on("_beforeBreakpoint", L), (0, r.useEffect)(() => () => {
            w.current && w.current.off("_beforeBreakpoint", L)
          }), (0, r.useEffect)(() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          }), me(() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && z(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: r,
                  prevEl: i,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                ne(t) && r && i && (o.params.navigation.nextEl = r, o.originalParams.navigation.nextEl = r, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), ae(t) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), oe(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(s)
              }({
                el: g.current,
                nextEl: T.current,
                prevEl: y.current,
                paginationEl: x.current,
                scrollbarEl: M.current,
                swiper: w.current
              }, P), o && !w.current.destroyed && o(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }, []), me(() => {
            !d && k && w.current && Object.keys(k).forEach(e => {
              w.current.on(e, k[e])
            });
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
              return se.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(s => {
                if (s in e && s in t)
                  if (re(e[s]) && re(t[s])) {
                    const r = Object.keys(e[s]),
                      i = Object.keys(t[s]);
                    r.length !== i.length ? a(s) : (r.forEach(r => {
                      e[s][r] !== t[s][r] && a(s)
                    }), i.forEach(r => {
                      e[s][r] !== t[s][r] && a(s)
                    }))
                  } else e[s] !== t[s] && a(s)
              }), n
            }(C, b.current, _, S.current, e => e.key);
            return b.current = C, S.current = _, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: r,
                changedParams: i,
                nextEl: n,
                prevEl: a,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const d = i.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: f,
                  virtual: m,
                  thumbs: h
                } = t;
              let v, g, w, b, S, T, y, x;
              i.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (v = !0), i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (g = !0), i.includes("pagination") && r.pagination && (r.pagination.el || l) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && r.navigation && (r.navigation.prevEl || a) && (r.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const M = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !r.loop ? T = !0 : !c.loop && r.loop ? y = !0 : x = !0), d.forEach(e => {
                if (re(c[e]) && re(r[e])) Object.assign(c[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || M(e);
                else {
                  const t = r[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = r[e] : !1 === t && M(e)
                }
              }), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && s && m && c.virtual.enabled ? (m.slides = s, m.update(!0)) : i.includes("virtual") && m && c.virtual.enabled && (s && (m.slides = s), m.update(!0)), i.includes("children") && s && c.loop && (x = !0), v && h.init() && h.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), p.init(), p.render(), p.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), E(n, t.hostEl.constructor.nextButtonSvg), n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), E(a, t.hostEl.constructor.prevButtonSvg), a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), i.includes("direction") && t.changeDirection(r.direction, !1), (T || x) && t.loopDestroy(), (y || x) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: _,
              passedParams: C,
              changedParams: e,
              nextEl: T.current,
              prevEl: y.current,
              scrollbarEl: M.current,
              paginationEl: x.current
            }), () => {
              k && w.current && Object.keys(k).forEach(e => {
                w.current.off(e, k[e])
              })
            }
          }), me(() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }, [u]), r.createElement(i, ce({
            ref: g,
            className: le(`${c}${s?` ${s}`:""}`)
          }, O), r.createElement(ve.Provider, {
            value: w.current
          }, I["container-start"], r.createElement(n, {
            className: de(P.wrapperClass)
          }, I["wrapper-start"], P.virtual ? function(e, t, s) {
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
                to: o
              } = s,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[i(e)]);
            return c.map((t, s) => r.cloneElement(t, {
              swiper: e,
              style: n,
              key: t.props.virtualIndex || t.key || `slide-${s}`
            }))
          }(w.current, _, u) : _.map((e, t) => r.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          })), I["wrapper-end"]), ne(P) && r.createElement(r.Fragment, null, r.createElement("div", {
            ref: y,
            className: "swiper-button-prev"
          }), r.createElement("div", {
            ref: T,
            className: "swiper-button-next"
          })), oe(P) && r.createElement("div", {
            ref: M,
            className: "swiper-scrollbar"
          }), ae(P) && r.createElement("div", {
            ref: x,
            className: "swiper-pagination"
          }), I["container-end"]))
        });
      ge.displayName = "Swiper";
      const we = (0, r.forwardRef)(function(e, t) {
        let {
          tag: s = "div",
          children: i,
          className: n = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, r.useRef)(null),
          [f, m] = (0, r.useState)("swiper-slide"),
          [h, v] = (0, r.useState)(!1);

        function g(e, t, s) {
          t === u.current && m(s)
        }
        me(() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && m("swiper-slide")
          }
        }), me(() => {
          a && u.current && !a.destroyed && m(a.getSlideClasses(u.current))
        }, [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(w) : i;
        return r.createElement(s, ce({
          ref: u,
          className: le(`${f}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), o && r.createElement(he.Provider, {
          value: w
        }, r.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !h && r.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && r.createElement(he.Provider, {
          value: w
        }, b(), l && !h && r.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      });
      we.displayName = "SwiperSlide"
    },
    87927: (e, t, s) => {
      s.d(t, {
        DP: () => r.DP,
        NP: () => r.NP
      });
      var r = s(50078)
    },
    91633: (e, t, s) => {
      s.d(t, {
        m: () => r.m
      });
      var r = s(25778)
    },
    96369: (e, t, s) => {
      function r(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var s = t.call(e, "string");
            if ("object" != typeof s) return s;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function i(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), s.push.apply(s, r)
        }
        return s
      }

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(s), !0).forEach(function(t) {
            var i, n, a;
            i = e, n = t, a = s[t], (n = r(n)) in i ? Object.defineProperty(i, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : i[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : i(Object(s)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
          })
        }
        return e
      }

      function a(e, t) {
        var s = {};
        for (var r in e) s[r] = t(e[r], r);
        return s
      }
      s.d(t, {
        c: () => l
      });
      var o = (e, t, s) => {
          for (var r of Object.keys(e)) {
            var i;
            if (e[r] !== (null !== (i = t[r]) && void 0 !== i ? i : s[r])) return !1
          }
          return !0
        },
        l = e => {
          var t = t => {
            var s = e.defaultClassName,
              r = n(n({}, e.defaultVariants), t);
            for (var i in r) {
              var a, l = null !== (a = r[i]) && void 0 !== a ? a : e.defaultVariants[i];
              if (null != l) {
                var d = l;
                "boolean" == typeof d && (d = !0 === d ? "true" : "false");
                var c = e.variantClassNames[i][d];
                c && (s += " " + c)
              }
            }
            for (var [p, u] of e.compoundVariants) o(p, r, e.defaultVariants) && (s += " " + u);
            return s
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return a(e.variantClassNames, e => a(e, e => e.split(" ")[0]))
            }
          }, t
        }
    }
  }
]);