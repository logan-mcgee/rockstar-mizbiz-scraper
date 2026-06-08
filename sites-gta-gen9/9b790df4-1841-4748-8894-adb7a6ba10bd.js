try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9b790df4-1841-4748-8894-adb7a6ba10bd", t._sentryDebugIdIdentifier = "sentry-dbid-9b790df4-1841-4748-8894-adb7a6ba10bd")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2268], {
    43431(t) {
      var e, n, o = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function r() {
        throw new Error("clearTimeout has not been defined")
      }

      function l(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
          e = i
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
          n = r
        }
      }();
      var s, c = [],
        a = !1,
        f = -1;

      function u() {
        a && s && (a = !1, s.length ? c = s.concat(c) : f = -1, c.length && d())
      }

      function d() {
        if (!a) {
          var t = l(u);
          a = !0;
          for (var e = c.length; e;) {
            for (s = c, c = []; ++f < e;) s && s[f].run();
            f = -1, e = c.length
          }
          s = null, a = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function h(t, e) {
        this.fun = t, this.array = e
      }

      function m() {}
      o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new h(t, e)), 1 !== c.length || a || l(d)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(t) {
        return []
      }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, o.cwd = function() {
        return "/"
      }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, o.umask = function() {
        return 0
      }
    },
    45750(t, e, n) {
      "use strict";
      n.d(e, {
        UE: () => tt,
        ll: () => Z,
        rD: () => nt,
        UU: () => X,
        jD: () => K,
        ER: () => et,
        cY: () => Q,
        BN: () => J,
        Ej: () => G
      });
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        r = Math.max,
        l = Math.round,
        s = Math.floor,
        c = t => ({
          x: t,
          y: t
        }),
        a = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function f(t, e, n) {
        return r(t, i(e, n))
      }

      function u(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function d(t) {
        return t.split("-")[0]
      }

      function h(t) {
        return t.split("-")[1]
      }

      function m(t) {
        return "x" === t ? "y" : "x"
      }

      function p(t) {
        return "y" === t ? "height" : "width"
      }

      function g(t) {
        const e = t[0];
        return "t" === e || "b" === e ? "y" : "x"
      }

      function y(t) {
        return m(g(t))
      }

      function w(t) {
        return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
      }
      const v = ["left", "right"],
        b = ["right", "left"],
        x = ["top", "bottom"],
        T = ["bottom", "top"];

      function L(t) {
        const e = d(t);
        return a[e] + t.slice(e.length)
      }

      function R(t) {
        return "number" != typeof t ? function(t) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
          }
        }(t) : {
          top: t,
          right: t,
          bottom: t,
          left: t
        }
      }

      function E(t) {
        const {
          x: e,
          y: n,
          width: o,
          height: i
        } = t;
        return {
          width: o,
          height: i,
          top: n,
          left: e,
          right: e + o,
          bottom: n + i,
          x: e,
          y: n
        }
      }

      function A(t, e, n) {
        let {
          reference: o,
          floating: i
        } = t;
        const r = g(e),
          l = y(e),
          s = p(l),
          c = d(e),
          a = "y" === r,
          f = o.x + o.width / 2 - i.width / 2,
          u = o.y + o.height / 2 - i.height / 2,
          m = o[s] / 2 - i[s] / 2;
        let w;
        switch (c) {
          case "top":
            w = {
              x: f,
              y: o.y - i.height
            };
            break;
          case "bottom":
            w = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            w = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            w = {
              x: o.x - i.width,
              y: u
            };
            break;
          default:
            w = {
              x: o.x,
              y: o.y
            }
        }
        switch (h(e)) {
          case "start":
            w[l] -= m * (n && a ? -1 : 1);
            break;
          case "end":
            w[l] += m * (n && a ? -1 : 1)
        }
        return w
      }
      async function k(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: i,
          platform: r,
          rects: l,
          elements: s,
          strategy: c
        } = t, {
          boundary: a = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: h = !1,
          padding: m = 0
        } = u(e, t), p = R(m), g = s[h ? "floating" === d ? "reference" : "floating" : d], y = E(await r.getClippingRect({
          element: null == (n = await (null == r.isElement ? void 0 : r.isElement(g))) || n ? g : g.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(s.floating)),
          boundary: a,
          rootBoundary: f,
          strategy: c
        })), w = "floating" === d ? {
          x: o,
          y: i,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, v = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(s.floating)), b = await (null == r.isElement ? void 0 : r.isElement(v)) && await (null == r.getScale ? void 0 : r.getScale(v)) || {
          x: 1,
          y: 1
        }, x = E(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: w,
          offsetParent: v,
          strategy: c
        }) : w);
        return {
          top: (y.top - x.top + p.top) / b.y,
          bottom: (x.bottom - y.bottom + p.bottom) / b.y,
          left: (y.left - x.left + p.left) / b.x,
          right: (x.right - y.right + p.right) / b.x
        }
      }

      function D(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function O(t) {
        return o.some(e => t[e] >= 0)
      }
      const C = new Set(["left", "top"]);
      var S = n(24843);

      function P(t) {
        const e = (0, S.L9)(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const i = (0, S.sb)(t),
          r = i ? t.offsetWidth : n,
          s = i ? t.offsetHeight : o,
          c = l(n) !== r || l(o) !== s;
        return c && (n = r, o = s), {
          width: n,
          height: o,
          $: c
        }
      }

      function _(t) {
        return (0, S.vq)(t) ? t : t.contextElement
      }

      function M(t) {
        const e = _(t);
        if (!(0, S.sb)(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: r
          } = P(e);
        let s = (r ? l(n.width) : n.width) / o,
          a = (r ? l(n.height) : n.height) / i;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const q = c(0);

      function F(t) {
        const e = (0, S.zk)(t);
        return (0, S.Tc)() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : q
      }

      function H(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          r = _(t);
        let l = c(1);
        e && (o ? (0, S.vq)(o) && (l = M(o)) : l = M(t));
        const s = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== (0, S.zk)(t)) && e
        }(r, n, o) ? F(r) : c(0);
        let a = (i.left + s.x) / l.x,
          f = (i.top + s.y) / l.y,
          u = i.width / l.x,
          d = i.height / l.y;
        if (r) {
          const t = (0, S.zk)(r),
            e = o && (0, S.vq)(o) ? (0, S.zk)(o) : o;
          let n = t,
            i = (0, S._m)(n);
          for (; i && o && e !== n;) {
            const t = M(i),
              e = i.getBoundingClientRect(),
              o = (0, S.L9)(i),
              r = e.left + (i.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (i.clientTop + parseFloat(o.paddingTop)) * t.y;
            a *= t.x, f *= t.y, u *= t.x, d *= t.y, a += r, f += l, n = (0, S.zk)(i), i = (0, S._m)(n)
          }
        }
        return E({
          width: u,
          height: d,
          x: a,
          y: f
        })
      }

      function z(t, e) {
        const n = (0, S.CP)(t).scrollLeft;
        return e ? e.left + n : H((0, S.ep)(t)).left + n
      }

      function W(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - z(t, n),
          y: n.top + e.scrollTop
        }
      }

      function B(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = (0, S.zk)(t),
            o = (0, S.ep)(t),
            i = n.visualViewport;
          let r = o.clientWidth,
            l = o.clientHeight,
            s = 0,
            c = 0;
          if (i) {
            r = i.width, l = i.height;
            const t = (0, S.Tc)();
            (!t || t && "fixed" === e) && (s = i.offsetLeft, c = i.offsetTop)
          }
          const a = z(o);
          if (a <= 0) {
            const t = o.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              i = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              l = Math.abs(o.clientWidth - e.clientWidth - i);
            l <= 25 && (r -= l)
          } else a <= 25 && (r += a);
          return {
            width: r,
            height: l,
            x: s,
            y: c
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = (0, S.ep)(t),
            n = (0, S.CP)(t),
            o = t.ownerDocument.body,
            i = r(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = r(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let s = -n.scrollLeft + z(t);
          const c = -n.scrollTop;
          return "rtl" === (0, S.L9)(o).direction && (s += r(e.clientWidth, o.clientWidth) - i), {
            width: i,
            height: l,
            x: s,
            y: c
          }
        }((0, S.ep)(t));
        else if ((0, S.vq)(e)) o = function(t, e) {
          const n = H(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            r = (0, S.sb)(t) ? M(t) : c(1);
          return {
            width: t.clientWidth * r.x,
            height: t.clientHeight * r.y,
            x: i * r.x,
            y: o * r.y
          }
        }(e, n);
        else {
          const n = F(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return E(o)
      }

      function $(t, e) {
        const n = (0, S.$4)(t);
        return !(n === e || !(0, S.vq)(n) || (0, S.eu)(n)) && ("fixed" === (0, S.L9)(n).position || $(n, e))
      }

      function N(t, e, n) {
        const o = (0, S.sb)(e),
          i = (0, S.ep)(e),
          r = "fixed" === n,
          l = H(t, !0, r, e);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = c(0);

        function f() {
          a.x = z(i)
        }
        if (o || !o && !r)
          if (("body" !== (0, S.mq)(e) || (0, S.ZU)(i)) && (s = (0, S.CP)(e)), o) {
            const t = H(e, !0, r, e);
            a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
          } else i && f();
        r && !o && i && f();
        const u = !i || o || r ? c(0) : W(i, s);
        return {
          x: l.left + s.scrollLeft - a.x - u.x,
          y: l.top + s.scrollTop - a.y - u.y,
          width: l.width,
          height: l.height
        }
      }

      function V(t) {
        return "static" === (0, S.L9)(t).position
      }

      function I(t, e) {
        if (!(0, S.sb)(t) || "fixed" === (0, S.L9)(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return (0, S.ep)(t) === n && (n = n.ownerDocument.body), n
      }

      function U(t, e) {
        const n = (0, S.zk)(t);
        if ((0, S.Tf)(t)) return n;
        if (!(0, S.sb)(t)) {
          let e = (0, S.$4)(t);
          for (; e && !(0, S.eu)(e);) {
            if ((0, S.vq)(e) && !V(e)) return e;
            e = (0, S.$4)(e)
          }
          return n
        }
        let o = I(t, e);
        for (; o && (0, S.Lv)(o) && V(o);) o = I(o, e);
        return o && (0, S.eu)(o) && V(o) && !(0, S.sQ)(o) ? n : o || (0, S.gJ)(t) || n
      }
      const j = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: i
          } = t;
          const r = "fixed" === i,
            l = (0, S.ep)(o),
            s = !!e && (0, S.Tf)(e.floating);
          if (o === l || s && r) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = (0, S.sb)(o);
          if ((d || !d && !r) && (("body" !== (0, S.mq)(o) || (0, S.ZU)(l)) && (a = (0, S.CP)(o)), d)) {
            const t = H(o);
            f = M(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const h = !l || d || r ? c(0) : W(l, a);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - a.scrollLeft * f.x + u.x + h.x,
            y: n.y * f.y - a.scrollTop * f.y + u.y + h.y
          }
        },
        getDocumentElement: S.ep,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const s = [..."clippingAncestors" === n ? (0, S.Tf)(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = (0, S.v9)(t, [], !1).filter(t => (0, S.vq)(t) && "body" !== (0, S.mq)(t)),
                i = null;
              const r = "fixed" === (0, S.L9)(t).position;
              let l = r ? (0, S.$4)(t) : t;
              for (;
                (0, S.vq)(l) && !(0, S.eu)(l);) {
                const e = (0, S.L9)(l),
                  n = (0, S.sQ)(l);
                n || "fixed" !== e.position || (i = null), (r ? !n && !i : !n && "static" === e.position && i && ("absolute" === i.position || "fixed" === i.position) || (0, S.ZU)(l) && !n && $(t, l)) ? o = o.filter(t => t !== l) : i = e, l = (0, S.$4)(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            c = B(e, s[0], l);
          let a = c.top,
            f = c.right,
            u = c.bottom,
            d = c.left;
          for (let t = 1; t < s.length; t++) {
            const n = B(e, s[t], l);
            a = r(n.top, a), f = i(n.right, f), u = i(n.bottom, u), d = r(n.left, d)
          }
          return {
            width: f - d,
            height: u - a,
            x: d,
            y: a
          }
        },
        getOffsetParent: U,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || U,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: N(t.reference, await e(t.floating), t.strategy),
            floating: {
              x: 0,
              y: 0,
              width: o.width,
              height: o.height
            }
          }
        },
        getClientRects: function(t) {
          return Array.from(t.getClientRects())
        },
        getDimensions: function(t) {
          const {
            width: e,
            height: n
          } = P(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: M,
        isElement: S.vq,
        isRTL: function(t) {
          return "rtl" === (0, S.L9)(t).direction
        }
      };

      function Y(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function Z(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: c = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = _(t), h = l || c ? [...d ? (0, S.v9)(d) : [], ...e ? (0, S.v9)(e) : []] : [];
        h.forEach(t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), c && t.addEventListener("resize", n)
        });
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = (0, S.ep)(t);

          function c() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function a(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), c();
            const d = t.getBoundingClientRect(),
              {
                left: h,
                top: m,
                width: p,
                height: g
              } = d;
            if (f || e(), !p || !g) return;
            const y = {
              rootMargin: -s(m) + "px " + -s(l.clientWidth - (h + p)) + "px " + -s(l.clientHeight - (m + g)) + "px " + -s(h) + "px",
              threshold: r(0, i(1, u)) || 1
            };
            let w = !0;

            function v(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return a();
                o ? a(!1, o) : n = setTimeout(() => {
                  a(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || Y(d, t.getBoundingClientRect()) || a(), w = !1
            }
            try {
              o = new IntersectionObserver(v, {
                ...y,
                root: l.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(v, y)
            }
            o.observe(t)
          }(!0), c
        }(d, n) : null;
        let p, g = -1,
          y = null;
        a && (y = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === d && y && e && (y.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var t;
            null == (t = y) || t.observe(e)
          })), n()
        }), d && !u && y.observe(d), e && y.observe(e));
        let w = u ? H(t) : null;
        return u && function e() {
          const o = H(t);
          w && !Y(w, o) && n(), w = o, p = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          h.forEach(t => {
            l && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
          }), null == m || m(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(p)
        }
      }
      const Q = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: i,
                y: r,
                placement: l,
                middlewareData: s
              } = e, c = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: i
                } = t, r = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), l = d(n), s = h(n), c = "y" === g(n), a = C.has(l) ? -1 : 1, f = r && c ? -1 : 1, m = u(e, t);
                let {
                  mainAxis: p,
                  crossAxis: y,
                  alignmentAxis: w
                } = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: m.mainAxis || 0,
                  crossAxis: m.crossAxis || 0,
                  alignmentAxis: m.alignmentAxis
                };
                return s && "number" == typeof w && (y = "end" === s ? -1 * w : w), c ? {
                  x: y * f,
                  y: p * a
                } : {
                  x: p * a,
                  y: y * f
                }
              }(e, t);
              return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (o = s.arrow) && o.alignmentOffset ? {} : {
                x: i + c.x,
                y: r + c.y,
                data: {
                  ...c,
                  placement: l
                }
              }
            }
          }
        },
        J = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: o,
                placement: i,
                platform: r
              } = e, {
                mainAxis: l = !0,
                crossAxis: s = !1,
                limiter: c = {
                  fn: t => {
                    let {
                      x: e,
                      y: n
                    } = t;
                    return {
                      x: e,
                      y: n
                    }
                  }
                },
                ...a
              } = u(t, e), h = {
                x: n,
                y: o
              }, p = await r.detectOverflow(e, a), y = g(d(i)), w = m(y);
              let v = h[w],
                b = h[y];
              if (l) {
                const t = "y" === w ? "bottom" : "right";
                v = f(v + p["y" === w ? "top" : "left"], v, v - p[t])
              }
              if (s) {
                const t = "y" === y ? "bottom" : "right";
                b = f(b + p["y" === y ? "top" : "left"], b, b - p[t])
              }
              const x = c.fn({
                ...e,
                [w]: v,
                [y]: b
              });
              return {
                ...x,
                data: {
                  x: x.x - n,
                  y: x.y - o,
                  enabled: {
                    [w]: l,
                    [y]: s
                  }
                }
              }
            }
          }
        },
        X = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: i,
                middlewareData: r,
                rects: l,
                initialPlacement: s,
                platform: c,
                elements: a
              } = e, {
                mainAxis: f = !0,
                crossAxis: m = !0,
                fallbackPlacements: R,
                fallbackStrategy: E = "bestFit",
                fallbackAxisSideDirection: A = "none",
                flipAlignment: k = !0,
                ...D
              } = u(t, e);
              if (null != (n = r.arrow) && n.alignmentOffset) return {};
              const O = d(i),
                C = g(s),
                S = d(s) === s,
                P = await (null == c.isRTL ? void 0 : c.isRTL(a.floating)),
                _ = R || (S || !k ? [L(s)] : function(t) {
                  const e = L(t);
                  return [w(t), e, w(e)]
                }(s)),
                M = "none" !== A;
              !R && M && _.push(... function(t, e, n, o) {
                const i = h(t);
                let r = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? b : v : e ? v : b;
                    case "left":
                    case "right":
                      return e ? x : T;
                    default:
                      return []
                  }
                }(d(t), "start" === n, o);
                return i && (r = r.map(t => t + "-" + i), e && (r = r.concat(r.map(w)))), r
              }(s, k, A, P));
              const q = [s, ..._],
                F = await c.detectOverflow(e, D),
                H = [];
              let z = (null == (o = r.flip) ? void 0 : o.overflows) || [];
              if (f && H.push(F[O]), m) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = h(t),
                    i = y(t),
                    r = p(i);
                  let l = "x" === i ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[r] > e.floating[r] && (l = L(l)), [l, L(l)]
                }(i, l, P);
                H.push(F[t[0]], F[t[1]])
              }
              if (z = [...z, {
                  placement: i,
                  overflows: H
                }], !H.every(t => t <= 0)) {
                var W, B;
                const t = ((null == (W = r.flip) ? void 0 : W.index) || 0) + 1,
                  e = q[t];
                if (e && ("alignment" !== m || C === g(e) || z.every(t => g(t.placement) !== C || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: z
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (B = z.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : B.placement;
                if (!n) switch (E) {
                  case "bestFit": {
                    var $;
                    const t = null == ($ = z.filter(t => {
                      if (M) {
                        const e = g(t.placement);
                        return e === C || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : $[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = s
                }
                if (i !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        G = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: l,
                rects: s,
                platform: c,
                elements: a
              } = e, {
                apply: f = () => {},
                ...m
              } = u(t, e), p = await c.detectOverflow(e, m), y = d(l), w = h(l), v = "y" === g(l), {
                width: b,
                height: x
              } = s.floating;
              let T, L;
              "top" === y || "bottom" === y ? (T = y, L = w === (await (null == c.isRTL ? void 0 : c.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (L = y, T = "end" === w ? "top" : "bottom");
              const R = x - p.top - p.bottom,
                E = b - p.left - p.right,
                A = i(x - p[T], R),
                k = i(b - p[L], E),
                D = !e.middlewareData.shift;
              let O = A,
                C = k;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (C = E), null != (o = e.middlewareData.shift) && o.enabled.y && (O = R), D && !w) {
                const t = r(p.left, 0),
                  e = r(p.right, 0),
                  n = r(p.top, 0),
                  o = r(p.bottom, 0);
                v ? C = b - 2 * (0 !== t || 0 !== e ? t + e : r(p.left, p.right)) : O = x - 2 * (0 !== n || 0 !== o ? n + o : r(p.top, p.bottom))
              }
              await f({
                ...e,
                availableWidth: C,
                availableHeight: O
              });
              const S = await c.getDimensions(a.floating);
              return b !== S.width || x !== S.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        K = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n,
                platform: o
              } = e, {
                strategy: i = "referenceHidden",
                ...r
              } = u(t, e);
              switch (i) {
                case "referenceHidden": {
                  const t = D(await o.detectOverflow(e, {
                    ...r,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: O(t)
                    }
                  }
                }
                case "escaped": {
                  const t = D(await o.detectOverflow(e, {
                    ...r,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: O(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        tt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: r,
              rects: l,
              platform: s,
              elements: c,
              middlewareData: a
            } = e, {
              element: d,
              padding: m = 0
            } = u(t, e) || {};
            if (null == d) return {};
            const g = R(m),
              w = {
                x: n,
                y: o
              },
              v = y(r),
              b = p(v),
              x = await s.getDimensions(d),
              T = "y" === v,
              L = T ? "top" : "left",
              E = T ? "bottom" : "right",
              A = T ? "clientHeight" : "clientWidth",
              k = l.reference[b] + l.reference[v] - w[v] - l.floating[b],
              D = w[v] - l.reference[v],
              O = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(d));
            let C = O ? O[A] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(O)) || (C = c.floating[A] || l.floating[b]);
            const S = k / 2 - D / 2,
              P = C / 2 - x[b] / 2 - 1,
              _ = i(g[L], P),
              M = i(g[E], P),
              q = _,
              F = C - x[b] - M,
              H = C / 2 - x[b] / 2 + S,
              z = f(q, H, F),
              W = !a.arrow && null != h(r) && H !== z && l.reference[b] / 2 - (H < q ? _ : M) - x[b] / 2 < 0,
              B = W ? H < q ? H - q : H - F : 0;
            return {
              [v]: w[v] + B,
              data: {
                [v]: z,
                centerOffset: H - z - B,
                ...W && {
                  alignmentOffset: B
                }
              },
              reset: W
            }
          }
        }),
        et = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: n,
                y: o,
                placement: i,
                rects: r,
                middlewareData: l
              } = e, {
                offset: s = 0,
                mainAxis: c = !0,
                crossAxis: a = !0
              } = u(t, e), f = {
                x: n,
                y: o
              }, h = g(i), p = m(h);
              let y = f[p],
                w = f[h];
              const v = u(s, e),
                b = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...v
                };
              if (c) {
                const t = "y" === p ? "height" : "width",
                  e = r.reference[p] - r.floating[t] + b.mainAxis,
                  n = r.reference[p] + r.reference[t] - b.mainAxis;
                y < e ? y = e : y > n && (y = n)
              }
              if (a) {
                var x, T;
                const t = "y" === p ? "width" : "height",
                  e = C.has(d(i)),
                  n = r.reference[h] - r.floating[t] + (e && (null == (x = l.offset) ? void 0 : x[h]) || 0) + (e ? 0 : b.crossAxis),
                  o = r.reference[h] + r.reference[t] + (e ? 0 : (null == (T = l.offset) ? void 0 : T[h]) || 0) - (e ? b.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [p]: y,
                [h]: w
              }
            }
          }
        },
        nt = (t, e, n) => {
          const o = new Map,
            i = {
              platform: j,
              ...n
            },
            r = {
              ...i.platform,
              _c: o
            };
          return (async (t, e, n) => {
            const {
              placement: o = "bottom",
              strategy: i = "absolute",
              middleware: r = [],
              platform: l
            } = n, s = l.detectOverflow ? l : {
              ...l,
              detectOverflow: k
            }, c = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let a = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
              }),
              {
                x: f,
                y: u
              } = A(a, o, c),
              d = o,
              h = 0;
            const m = {};
            for (let n = 0; n < r.length; n++) {
              const p = r[n];
              if (!p) continue;
              const {
                name: g,
                fn: y
              } = p, {
                x: w,
                y: v,
                data: b,
                reset: x
              } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: i,
                middlewareData: m,
                rects: a,
                platform: s,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != w ? w : f, u = null != v ? v : u, m[g] = {
                ...m[g],
                ...b
              }, x && h < 50 && (h++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (a = !0 === x.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
              }) : x.rects), ({
                x: f,
                y: u
              } = A(a, d, c))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: i,
              middlewareData: m
            }
          })(t, e, {
            ...i,
            platform: r
          })
        }
    },
    24843(t, e, n) {
      "use strict";

      function o() {
        return "undefined" != typeof window
      }

      function i(t) {
        return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function r(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function l(t) {
        var e;
        return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function s(t) {
        return !!o() && (t instanceof Node || t instanceof r(t).Node)
      }

      function c(t) {
        return !!o() && (t instanceof Element || t instanceof r(t).Element)
      }

      function a(t) {
        return !!o() && (t instanceof HTMLElement || t instanceof r(t).HTMLElement)
      }

      function f(t) {
        return !(!o() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof r(t).ShadowRoot)
      }

      function u(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: i
        } = T(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== i && "contents" !== i
      }

      function d(t) {
        return /^(table|td|th)$/.test(i(t))
      }

      function h(t) {
        try {
          if (t.matches(":popover-open")) return !0
        } catch (t) {}
        try {
          return t.matches(":modal")
        } catch (t) {
          return !1
        }
      }
      n.d(e, {
        $4: () => R,
        CP: () => L,
        L9: () => T,
        Lv: () => d,
        Tc: () => b,
        Tf: () => h,
        ZU: () => u,
        _m: () => k,
        ep: () => l,
        eu: () => x,
        gJ: () => v,
        mq: () => i,
        sQ: () => w,
        sb: () => a,
        v9: () => A,
        vq: () => c,
        zk: () => r
      });
      const m = /transform|translate|scale|rotate|perspective|filter/,
        p = /paint|layout|strict|content/,
        g = t => !!t && "none" !== t;
      let y;

      function w(t) {
        const e = c(t) ? T(t) : t;
        return g(e.transform) || g(e.translate) || g(e.scale) || g(e.rotate) || g(e.perspective) || !b() && (g(e.backdropFilter) || g(e.filter)) || m.test(e.willChange || "") || p.test(e.contain || "")
      }

      function v(t) {
        let e = R(t);
        for (; a(e) && !x(e);) {
          if (w(e)) return e;
          if (h(e)) return null;
          e = R(e)
        }
        return null
      }

      function b() {
        return null == y && (y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), y
      }

      function x(t) {
        return /^(html|body|#document)$/.test(i(t))
      }

      function T(t) {
        return r(t).getComputedStyle(t)
      }

      function L(t) {
        return c(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function R(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || f(t) && t.host || l(t);
        return f(e) ? e.host : e
      }

      function E(t) {
        const e = R(t);
        return x(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : a(e) && u(e) ? e : E(e)
      }

      function A(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = E(t),
          l = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          s = r(i);
        if (l) {
          const t = k(s);
          return e.concat(s, s.visualViewport || [], u(i) ? i : [], t && n ? A(t) : [])
        }
        return e.concat(i, A(i, [], n))
      }

      function k(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }
    }
  }
]);