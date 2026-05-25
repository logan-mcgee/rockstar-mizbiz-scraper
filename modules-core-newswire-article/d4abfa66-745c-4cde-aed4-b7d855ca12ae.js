try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d4abfa66-745c-4cde-aed4-b7d855ca12ae", t._sentryDebugIdIdentifier = "sentry-dbid-d4abfa66-745c-4cde-aed4-b7d855ca12ae")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5971], {
    10376(t, e, n) {
      n.d(e, {
        UE: () => kt,
        ll: () => yt,
        rD: () => Et,
        UU: () => bt,
        jD: () => Rt,
        ER: () => Tt,
        cY: () => wt,
        BN: () => xt,
        Ej: () => vt
      });
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        r = Math.max,
        l = Math.round,
        a = Math.floor,
        s = t => ({
          x: t,
          y: t
        }),
        c = {
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

      function p(t) {
        return "x" === t ? "y" : "x"
      }

      function m(t) {
        return "y" === t ? "height" : "width"
      }

      function g(t) {
        const e = t[0];
        return "t" === e || "b" === e ? "y" : "x"
      }

      function y(t) {
        return p(g(t))
      }

      function w(t) {
        return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
      }
      const x = ["left", "right"],
        b = ["right", "left"],
        v = ["top", "bottom"],
        R = ["bottom", "top"];

      function k(t) {
        const e = d(t);
        return c[e] + t.slice(e.length)
      }

      function T(t) {
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

      function L(t, e, n) {
        let {
          reference: o,
          floating: i
        } = t;
        const r = g(e),
          l = y(e),
          a = m(l),
          s = d(e),
          c = "y" === r,
          f = o.x + o.width / 2 - i.width / 2,
          u = o.y + o.height / 2 - i.height / 2,
          p = o[a] / 2 - i[a] / 2;
        let w;
        switch (s) {
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
            w[l] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            w[l] += p * (n && c ? -1 : 1)
        }
        return w
      }
      async function A(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: i,
          platform: r,
          rects: l,
          elements: a,
          strategy: s
        } = t, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: h = !1,
          padding: p = 0
        } = u(e, t), m = T(p), g = a[h ? "floating" === d ? "reference" : "floating" : d], y = E(await r.getClippingRect({
          element: null == (n = await (null == r.isElement ? void 0 : r.isElement(g))) || n ? g : g.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: s
        })), w = "floating" === d ? {
          x: o,
          y: i,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, x = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(a.floating)), b = await (null == r.isElement ? void 0 : r.isElement(x)) && await (null == r.getScale ? void 0 : r.getScale(x)) || {
          x: 1,
          y: 1
        }, v = E(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: w,
          offsetParent: x,
          strategy: s
        }) : w);
        return {
          top: (y.top - v.top + m.top) / b.y,
          bottom: (v.bottom - y.bottom + m.bottom) / b.y,
          left: (y.left - v.left + m.left) / b.x,
          right: (v.right - y.right + m.right) / b.x
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
      const _ = new Set(["left", "top"]);

      function S() {
        return "undefined" != typeof window
      }

      function C(t) {
        return H(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function W(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function M(t) {
        var e;
        return null == (e = (H(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function H(t) {
        return !!S() && (t instanceof Node || t instanceof W(t).Node)
      }

      function P(t) {
        return !!S() && (t instanceof Element || t instanceof W(t).Element)
      }

      function F(t) {
        return !!S() && (t instanceof HTMLElement || t instanceof W(t).HTMLElement)
      }

      function B(t) {
        return !(!S() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof W(t).ShadowRoot)
      }

      function N(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: i
        } = Z(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== i && "contents" !== i
      }

      function V(t) {
        return /^(table|td|th)$/.test(C(t))
      }

      function z(t) {
        try {
          if (t.matches(":popover-open")) return !0
        } catch (t) {}
        try {
          return t.matches(":modal")
        } catch (t) {
          return !1
        }
      }
      const I = /transform|translate|scale|rotate|perspective|filter/,
        j = /paint|layout|strict|content/,
        U = t => !!t && "none" !== t;
      let Y;

      function $(t) {
        const e = P(t) ? Z(t) : t;
        return U(e.transform) || U(e.translate) || U(e.scale) || U(e.rotate) || U(e.perspective) || !X() && (U(e.backdropFilter) || U(e.filter)) || I.test(e.willChange || "") || j.test(e.contain || "")
      }

      function X() {
        return null == Y && (Y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Y
      }

      function q(t) {
        return /^(html|body|#document)$/.test(C(t))
      }

      function Z(t) {
        return W(t).getComputedStyle(t)
      }

      function G(t) {
        return P(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function J(t) {
        if ("html" === C(t)) return t;
        const e = t.assignedSlot || t.parentNode || B(t) && t.host || M(t);
        return B(e) ? e.host : e
      }

      function K(t) {
        const e = J(t);
        return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : F(e) && N(e) ? e : K(e)
      }

      function Q(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = K(t),
          r = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = W(i);
        if (r) {
          const t = tt(l);
          return e.concat(l, l.visualViewport || [], N(i) ? i : [], t && n ? Q(t) : [])
        }
        return e.concat(i, Q(i, [], n))
      }

      function tt(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function et(t) {
        const e = Z(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const i = F(t),
          r = i ? t.offsetWidth : n,
          a = i ? t.offsetHeight : o,
          s = l(n) !== r || l(o) !== a;
        return s && (n = r, o = a), {
          width: n,
          height: o,
          $: s
        }
      }

      function nt(t) {
        return P(t) ? t : t.contextElement
      }

      function ot(t) {
        const e = nt(t);
        if (!F(e)) return s(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: r
          } = et(e);
        let a = (r ? l(n.width) : n.width) / o,
          c = (r ? l(n.height) : n.height) / i;
        return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
          x: a,
          y: c
        }
      }
      const it = s(0);

      function rt(t) {
        const e = W(t);
        return X() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : it
      }

      function lt(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          r = nt(t);
        let l = s(1);
        e && (o ? P(o) && (l = ot(o)) : l = ot(t));
        const a = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== W(t)) && e
        }(r, n, o) ? rt(r) : s(0);
        let c = (i.left + a.x) / l.x,
          f = (i.top + a.y) / l.y,
          u = i.width / l.x,
          d = i.height / l.y;
        if (r) {
          const t = W(r),
            e = o && P(o) ? W(o) : o;
          let n = t,
            i = tt(n);
          for (; i && o && e !== n;) {
            const t = ot(i),
              e = i.getBoundingClientRect(),
              o = Z(i),
              r = e.left + (i.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (i.clientTop + parseFloat(o.paddingTop)) * t.y;
            c *= t.x, f *= t.y, u *= t.x, d *= t.y, c += r, f += l, n = W(i), i = tt(n)
          }
        }
        return E({
          width: u,
          height: d,
          x: c,
          y: f
        })
      }

      function at(t, e) {
        const n = G(t).scrollLeft;
        return e ? e.left + n : lt(M(t)).left + n
      }

      function st(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - at(t, n),
          y: n.top + e.scrollTop
        }
      }

      function ct(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = W(t),
            o = M(t),
            i = n.visualViewport;
          let r = o.clientWidth,
            l = o.clientHeight,
            a = 0,
            s = 0;
          if (i) {
            r = i.width, l = i.height;
            const t = X();
            (!t || t && "fixed" === e) && (a = i.offsetLeft, s = i.offsetTop)
          }
          const c = at(o);
          if (c <= 0) {
            const t = o.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              i = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              l = Math.abs(o.clientWidth - e.clientWidth - i);
            l <= 25 && (r -= l)
          } else c <= 25 && (r += c);
          return {
            width: r,
            height: l,
            x: a,
            y: s
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = M(t),
            n = G(t),
            o = t.ownerDocument.body,
            i = r(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = r(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let a = -n.scrollLeft + at(t);
          const s = -n.scrollTop;
          return "rtl" === Z(o).direction && (a += r(e.clientWidth, o.clientWidth) - i), {
            width: i,
            height: l,
            x: a,
            y: s
          }
        }(M(t));
        else if (P(e)) o = function(t, e) {
          const n = lt(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            r = F(t) ? ot(t) : s(1);
          return {
            width: t.clientWidth * r.x,
            height: t.clientHeight * r.y,
            x: i * r.x,
            y: o * r.y
          }
        }(e, n);
        else {
          const n = rt(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return E(o)
      }

      function ft(t, e) {
        const n = J(t);
        return !(n === e || !P(n) || q(n)) && ("fixed" === Z(n).position || ft(n, e))
      }

      function ut(t, e, n) {
        const o = F(e),
          i = M(e),
          r = "fixed" === n,
          l = lt(t, !0, r, e);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = s(0);

        function f() {
          c.x = at(i)
        }
        if (o || !o && !r)
          if (("body" !== C(e) || N(i)) && (a = G(e)), o) {
            const t = lt(e, !0, r, e);
            c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
          } else i && f();
        r && !o && i && f();
        const u = !i || o || r ? s(0) : st(i, a);
        return {
          x: l.left + a.scrollLeft - c.x - u.x,
          y: l.top + a.scrollTop - c.y - u.y,
          width: l.width,
          height: l.height
        }
      }

      function dt(t) {
        return "static" === Z(t).position
      }

      function ht(t, e) {
        if (!F(t) || "fixed" === Z(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return M(t) === n && (n = n.ownerDocument.body), n
      }

      function pt(t, e) {
        const n = W(t);
        if (z(t)) return n;
        if (!F(t)) {
          let e = J(t);
          for (; e && !q(e);) {
            if (P(e) && !dt(e)) return e;
            e = J(e)
          }
          return n
        }
        let o = ht(t, e);
        for (; o && V(o) && dt(o);) o = ht(o, e);
        return o && q(o) && dt(o) && !$(o) ? n : o || function(t) {
          let e = J(t);
          for (; F(e) && !q(e);) {
            if ($(e)) return e;
            if (z(e)) return null;
            e = J(e)
          }
          return null
        }(t) || n
      }
      const mt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: i
          } = t;
          const r = "fixed" === i,
            l = M(o),
            a = !!e && z(e.floating);
          if (o === l || a && r) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = s(1);
          const u = s(0),
            d = F(o);
          if ((d || !d && !r) && (("body" !== C(o) || N(l)) && (c = G(o)), d)) {
            const t = lt(o);
            f = ot(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const h = !l || d || r ? s(0) : st(l, c);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - c.scrollLeft * f.x + u.x + h.x,
            y: n.y * f.y - c.scrollTop * f.y + u.y + h.y
          }
        },
        getDocumentElement: M,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const a = [..."clippingAncestors" === n ? z(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = Q(t, [], !1).filter(t => P(t) && "body" !== C(t)),
                i = null;
              const r = "fixed" === Z(t).position;
              let l = r ? J(t) : t;
              for (; P(l) && !q(l);) {
                const e = Z(l),
                  n = $(l);
                n || "fixed" !== e.position || (i = null), (r ? !n && !i : !n && "static" === e.position && i && ("absolute" === i.position || "fixed" === i.position) || N(l) && !n && ft(t, l)) ? o = o.filter(t => t !== l) : i = e, l = J(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            s = ct(e, a[0], l);
          let c = s.top,
            f = s.right,
            u = s.bottom,
            d = s.left;
          for (let t = 1; t < a.length; t++) {
            const n = ct(e, a[t], l);
            c = r(n.top, c), f = i(n.right, f), u = i(n.bottom, u), d = r(n.left, d)
          }
          return {
            width: f - d,
            height: u - c,
            x: d,
            y: c
          }
        },
        getOffsetParent: pt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || pt,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: ut(t.reference, await e(t.floating), t.strategy),
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
          } = et(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: ot,
        isElement: P,
        isRTL: function(t) {
          return "rtl" === Z(t).direction
        }
      };

      function gt(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function yt(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: s = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = nt(t), h = l || s ? [...d ? Q(d) : [], ...e ? Q(e) : []] : [];
        h.forEach(t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), s && t.addEventListener("resize", n)
        });
        const p = d && f ? function(t, e) {
          let n, o = null;
          const l = M(t);

          function s() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function c(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), s();
            const d = t.getBoundingClientRect(),
              {
                left: h,
                top: p,
                width: m,
                height: g
              } = d;
            if (f || e(), !m || !g) return;
            const y = {
              rootMargin: -a(p) + "px " + -a(l.clientWidth - (h + m)) + "px " + -a(l.clientHeight - (p + g)) + "px " + -a(h) + "px",
              threshold: r(0, i(1, u)) || 1
            };
            let w = !0;

            function x(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return c();
                o ? c(!1, o) : n = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || gt(d, t.getBoundingClientRect()) || c(), w = !1
            }
            try {
              o = new IntersectionObserver(x, {
                ...y,
                root: l.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(x, y)
            }
            o.observe(t)
          }(!0), s
        }(d, n) : null;
        let m, g = -1,
          y = null;
        c && (y = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === d && y && e && (y.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var t;
            null == (t = y) || t.observe(e)
          })), n()
        }), d && !u && y.observe(d), e && y.observe(e));
        let w = u ? lt(t) : null;
        return u && function e() {
          const o = lt(t);
          w && !gt(w, o) && n(), w = o, m = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          h.forEach(t => {
            l && t.removeEventListener("scroll", n), s && t.removeEventListener("resize", n)
          }), null == p || p(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(m)
        }
      }
      const wt = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: i,
                y: r,
                placement: l,
                middlewareData: a
              } = e, s = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: i
                } = t, r = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), l = d(n), a = h(n), s = "y" === g(n), c = _.has(l) ? -1 : 1, f = r && s ? -1 : 1, p = u(e, t);
                let {
                  mainAxis: m,
                  crossAxis: y,
                  alignmentAxis: w
                } = "number" == typeof p ? {
                  mainAxis: p,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: p.mainAxis || 0,
                  crossAxis: p.crossAxis || 0,
                  alignmentAxis: p.alignmentAxis
                };
                return a && "number" == typeof w && (y = "end" === a ? -1 * w : w), s ? {
                  x: y * f,
                  y: m * c
                } : {
                  x: m * c,
                  y: y * f
                }
              }(e, t);
              return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (o = a.arrow) && o.alignmentOffset ? {} : {
                x: i + s.x,
                y: r + s.y,
                data: {
                  ...s,
                  placement: l
                }
              }
            }
          }
        },
        xt = function(t) {
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
                crossAxis: a = !1,
                limiter: s = {
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
                ...c
              } = u(t, e), h = {
                x: n,
                y: o
              }, m = await r.detectOverflow(e, c), y = g(d(i)), w = p(y);
              let x = h[w],
                b = h[y];
              if (l) {
                const t = "y" === w ? "bottom" : "right";
                x = f(x + m["y" === w ? "top" : "left"], x, x - m[t])
              }
              if (a) {
                const t = "y" === y ? "bottom" : "right";
                b = f(b + m["y" === y ? "top" : "left"], b, b - m[t])
              }
              const v = s.fn({
                ...e,
                [w]: x,
                [y]: b
              });
              return {
                ...v,
                data: {
                  x: v.x - n,
                  y: v.y - o,
                  enabled: {
                    [w]: l,
                    [y]: a
                  }
                }
              }
            }
          }
        },
        bt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: i,
                middlewareData: r,
                rects: l,
                initialPlacement: a,
                platform: s,
                elements: c
              } = e, {
                mainAxis: f = !0,
                crossAxis: p = !0,
                fallbackPlacements: T,
                fallbackStrategy: E = "bestFit",
                fallbackAxisSideDirection: L = "none",
                flipAlignment: A = !0,
                ...D
              } = u(t, e);
              if (null != (n = r.arrow) && n.alignmentOffset) return {};
              const O = d(i),
                _ = g(a),
                S = d(a) === a,
                C = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                W = T || (S || !A ? [k(a)] : function(t) {
                  const e = k(t);
                  return [w(t), e, w(e)]
                }(a)),
                M = "none" !== L;
              !T && M && W.push(... function(t, e, n, o) {
                const i = h(t);
                let r = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? b : x : e ? x : b;
                    case "left":
                    case "right":
                      return e ? v : R;
                    default:
                      return []
                  }
                }(d(t), "start" === n, o);
                return i && (r = r.map(t => t + "-" + i), e && (r = r.concat(r.map(w)))), r
              }(a, A, L, C));
              const H = [a, ...W],
                P = await s.detectOverflow(e, D),
                F = [];
              let B = (null == (o = r.flip) ? void 0 : o.overflows) || [];
              if (f && F.push(P[O]), p) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = h(t),
                    i = y(t),
                    r = m(i);
                  let l = "x" === i ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[r] > e.floating[r] && (l = k(l)), [l, k(l)]
                }(i, l, C);
                F.push(P[t[0]], P[t[1]])
              }
              if (B = [...B, {
                  placement: i,
                  overflows: F
                }], !F.every(t => t <= 0)) {
                var N, V;
                const t = ((null == (N = r.flip) ? void 0 : N.index) || 0) + 1,
                  e = H[t];
                if (e && ("alignment" !== p || _ === g(e) || B.every(t => g(t.placement) !== _ || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: B
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (V = B.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : V.placement;
                if (!n) switch (E) {
                  case "bestFit": {
                    var z;
                    const t = null == (z = B.filter(t => {
                      if (M) {
                        const e = g(t.placement);
                        return e === _ || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : z[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = a
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
        vt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: l,
                rects: a,
                platform: s,
                elements: c
              } = e, {
                apply: f = () => {},
                ...p
              } = u(t, e), m = await s.detectOverflow(e, p), y = d(l), w = h(l), x = "y" === g(l), {
                width: b,
                height: v
              } = a.floating;
              let R, k;
              "top" === y || "bottom" === y ? (R = y, k = w === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (k = y, R = "end" === w ? "top" : "bottom");
              const T = v - m.top - m.bottom,
                E = b - m.left - m.right,
                L = i(v - m[R], T),
                A = i(b - m[k], E),
                D = !e.middlewareData.shift;
              let O = L,
                _ = A;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (_ = E), null != (o = e.middlewareData.shift) && o.enabled.y && (O = T), D && !w) {
                const t = r(m.left, 0),
                  e = r(m.right, 0),
                  n = r(m.top, 0),
                  o = r(m.bottom, 0);
                x ? _ = b - 2 * (0 !== t || 0 !== e ? t + e : r(m.left, m.right)) : O = v - 2 * (0 !== n || 0 !== o ? n + o : r(m.top, m.bottom))
              }
              await f({
                ...e,
                availableWidth: _,
                availableHeight: O
              });
              const S = await s.getDimensions(c.floating);
              return b !== S.width || v !== S.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        Rt = function(t) {
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
        kt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: r,
              rects: l,
              platform: a,
              elements: s,
              middlewareData: c
            } = e, {
              element: d,
              padding: p = 0
            } = u(t, e) || {};
            if (null == d) return {};
            const g = T(p),
              w = {
                x: n,
                y: o
              },
              x = y(r),
              b = m(x),
              v = await a.getDimensions(d),
              R = "y" === x,
              k = R ? "top" : "left",
              E = R ? "bottom" : "right",
              L = R ? "clientHeight" : "clientWidth",
              A = l.reference[b] + l.reference[x] - w[x] - l.floating[b],
              D = w[x] - l.reference[x],
              O = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(d));
            let _ = O ? O[L] : 0;
            _ && await (null == a.isElement ? void 0 : a.isElement(O)) || (_ = s.floating[L] || l.floating[b]);
            const S = A / 2 - D / 2,
              C = _ / 2 - v[b] / 2 - 1,
              W = i(g[k], C),
              M = i(g[E], C),
              H = W,
              P = _ - v[b] - M,
              F = _ / 2 - v[b] / 2 + S,
              B = f(H, F, P),
              N = !c.arrow && null != h(r) && F !== B && l.reference[b] / 2 - (F < H ? W : M) - v[b] / 2 < 0,
              V = N ? F < H ? F - H : F - P : 0;
            return {
              [x]: w[x] + V,
              data: {
                [x]: B,
                centerOffset: F - B - V,
                ...N && {
                  alignmentOffset: V
                }
              },
              reset: N
            }
          }
        }),
        Tt = function(t) {
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
                offset: a = 0,
                mainAxis: s = !0,
                crossAxis: c = !0
              } = u(t, e), f = {
                x: n,
                y: o
              }, h = g(i), m = p(h);
              let y = f[m],
                w = f[h];
              const x = u(a, e),
                b = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
                };
              if (s) {
                const t = "y" === m ? "height" : "width",
                  e = r.reference[m] - r.floating[t] + b.mainAxis,
                  n = r.reference[m] + r.reference[t] - b.mainAxis;
                y < e ? y = e : y > n && (y = n)
              }
              if (c) {
                var v, R;
                const t = "y" === m ? "width" : "height",
                  e = _.has(d(i)),
                  n = r.reference[h] - r.floating[t] + (e && (null == (v = l.offset) ? void 0 : v[h]) || 0) + (e ? 0 : b.crossAxis),
                  o = r.reference[h] + r.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[h]) || 0) - (e ? b.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [m]: y,
                [h]: w
              }
            }
          }
        },
        Et = (t, e, n) => {
          const o = new Map,
            i = {
              platform: mt,
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
            } = n, a = l.detectOverflow ? l : {
              ...l,
              detectOverflow: A
            }, s = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let c = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
              }),
              {
                x: f,
                y: u
              } = L(c, o, s),
              d = o,
              h = 0;
            const p = {};
            for (let n = 0; n < r.length; n++) {
              const m = r[n];
              if (!m) continue;
              const {
                name: g,
                fn: y
              } = m, {
                x: w,
                y: x,
                data: b,
                reset: v
              } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: i,
                middlewareData: p,
                rects: c,
                platform: a,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != w ? w : f, u = null != x ? x : u, p[g] = {
                ...p[g],
                ...b
              }, v && h < 50 && (h++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (c = !0 === v.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
              }) : v.rects), ({
                x: f,
                y: u
              } = L(c, d, s))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: i,
              middlewareData: p
            }
          })(t, e, {
            ...i,
            platform: r
          })
        }
    },
    74144(t, e, n) {
      n.d(e, {
        m: () => r
      });
      var o = n(99878);
      const i = t => "dark" === t ? o.xW.dark : o.xW.light,
        r = (t, e) => [o.xW.tokens, o.xW.typography, o.xW.grid, i(t)].join(" ")
    },
    99878(t, e, n) {
      n.d(e, {
        nz: () => o,
        wj: () => i,
        xW: () => r,
        Np: () => l,
        HZ: () => a,
        X6: () => s,
        yU: () => c
      });
      var o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        i = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        r = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        l = "foundry_nu8bkpb",
        a = "--foundry-platform-scales-ratio-65afb887",
        s = "foundry_nu8bkp4",
        c = "foundry_nu8bkp3"
    }
  }
]);