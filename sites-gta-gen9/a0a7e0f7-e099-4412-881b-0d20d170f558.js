try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a0a7e0f7-e099-4412-881b-0d20d170f558", t._sentryDebugIdIdentifier = "sentry-dbid-a0a7e0f7-e099-4412-881b-0d20d170f558")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [736], {
    6385: (t, e, n) => {
      n.d(e, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => c
      });
      var o = n(83970),
        r = n(70954),
        i = n(62229),
        l = n(18628);
      const c = ({
        enabled: t = !0,
        ...e
      }) => {
        const n = t ? l.s6 : i.Fragment;
        return (0, r.jsx)(n, {
          ...e
        })
      }
    },
    28136: (t, e, n) => {
      var o = n(75754),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        l = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        c = {};

      function a(t) {
        return o.isMemo(t) ? l : c[t.$$typeof] || r
      }
      c[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[o.Memo] = l;
      var s = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      t.exports = function t(e, n, o) {
        if ("string" != typeof n) {
          if (m) {
            var r = p(n);
            r && r !== m && t(e, r, o)
          }
          var l = f(n);
          u && (l = l.concat(u(n)));
          for (var c = a(e), y = a(n), h = 0; h < l.length; ++h) {
            var g = l[h];
            if (!(i[g] || o && o[g] || y && y[g] || c && c[g])) {
              var w = d(n, g);
              try {
                s(e, g, w)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    55106: (t, e, n) => {
      n.d(e, {
        UE: () => yt,
        ll: () => st,
        rD: () => gt,
        UU: () => dt,
        jD: () => mt,
        ER: () => ht,
        cY: () => ft,
        BN: () => ut,
        Ej: () => pt
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        l = Math.round,
        c = Math.floor,
        a = t => ({
          x: t,
          y: t
        }),
        s = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        f = {
          start: "end",
          end: "start"
        };

      function u(t, e, n) {
        return i(t, r(e, n))
      }

      function d(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function p(t) {
        return t.split("-")[0]
      }

      function m(t) {
        return t.split("-")[1]
      }

      function y(t) {
        return "x" === t ? "y" : "x"
      }

      function h(t) {
        return "y" === t ? "height" : "width"
      }

      function g(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function w(t) {
        return y(g(t))
      }

      function b(t) {
        return t.replace(/start|end/g, (t => f[t]))
      }

      function x(t) {
        return t.replace(/left|right|bottom|top/g, (t => s[t]))
      }

      function v(t) {
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

      function S(t) {
        const {
          x: e,
          y: n,
          width: o,
          height: r
        } = t;
        return {
          width: o,
          height: r,
          top: n,
          left: e,
          right: e + o,
          bottom: n + r,
          x: e,
          y: n
        }
      }

      function E(t, e, n) {
        let {
          reference: o,
          floating: r
        } = t;
        const i = g(e),
          l = w(e),
          c = h(l),
          a = p(e),
          s = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[c] / 2 - r[c] / 2;
        let y;
        switch (a) {
          case "top":
            y = {
              x: f,
              y: o.y - r.height
            };
            break;
          case "bottom":
            y = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            y = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            y = {
              x: o.x - r.width,
              y: u
            };
            break;
          default:
            y = {
              x: o.x,
              y: o.y
            }
        }
        switch (m(e)) {
          case "start":
            y[l] -= d * (n && s ? -1 : 1);
            break;
          case "end":
            y[l] += d * (n && s ? -1 : 1)
        }
        return y
      }
      async function R(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: l,
          elements: c,
          strategy: a
        } = t, {
          boundary: s = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(e, t), y = v(m), h = c[p ? "floating" === u ? "reference" : "floating" : u], g = S(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(c.floating)),
          boundary: s,
          rootBoundary: f,
          strategy: a
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)), x = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, E = S(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: c,
          rect: w,
          offsetParent: b,
          strategy: a
        }) : w);
        return {
          top: (g.top - E.top + y.top) / x.y,
          bottom: (E.bottom - g.bottom + y.bottom) / x.y,
          left: (g.left - E.left + y.left) / x.x,
          right: (E.right - g.right + y.right) / x.x
        }
      }

      function T(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function A(t) {
        return o.some((e => t[e] >= 0))
      }

      function D() {
        return "undefined" != typeof window
      }

      function L(t) {
        return $(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function O(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function P(t) {
        var e;
        return null == (e = ($(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function $(t) {
        return !!D() && (t instanceof Node || t instanceof O(t).Node)
      }

      function M(t) {
        return !!D() && (t instanceof Element || t instanceof O(t).Element)
      }

      function C(t) {
        return !!D() && (t instanceof HTMLElement || t instanceof O(t).HTMLElement)
      }

      function k(t) {
        return !(!D() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof O(t).ShadowRoot)
      }

      function _(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = W(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r)
      }

      function F(t) {
        return ["table", "td", "th"].includes(L(t))
      }

      function H(t) {
        return [":popover-open", ":modal"].some((e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        }))
      }

      function j(t) {
        const e = B(),
          n = M(t) ? W(t) : t;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((t => !!n[t] && "none" !== n[t])) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function B() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function N(t) {
        return ["html", "body", "#document"].includes(L(t))
      }

      function W(t) {
        return O(t).getComputedStyle(t)
      }

      function V(t) {
        return M(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function z(t) {
        if ("html" === L(t)) return t;
        const e = t.assignedSlot || t.parentNode || k(t) && t.host || P(t);
        return k(e) ? e.host : e
      }

      function I(t) {
        const e = z(t);
        return N(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : C(e) && _(e) ? e : I(e)
      }

      function X(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = I(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = O(r);
        if (i) {
          const t = Y(l);
          return e.concat(l, l.visualViewport || [], _(r) ? r : [], t && n ? X(t) : [])
        }
        return e.concat(r, X(r, [], n))
      }

      function Y(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function U(t) {
        const e = W(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = C(t),
          i = r ? t.offsetWidth : n,
          c = r ? t.offsetHeight : o,
          a = l(n) !== i || l(o) !== c;
        return a && (n = i, o = c), {
          width: n,
          height: o,
          $: a
        }
      }

      function q(t) {
        return M(t) ? t : t.contextElement
      }

      function G(t) {
        const e = q(t);
        if (!C(e)) return a(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = U(e);
        let c = (i ? l(n.width) : n.width) / o,
          s = (i ? l(n.height) : n.height) / r;
        return c && Number.isFinite(c) || (c = 1), s && Number.isFinite(s) || (s = 1), {
          x: c,
          y: s
        }
      }
      const J = a(0);

      function K(t) {
        const e = O(t);
        return B() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : J
      }

      function Q(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = q(t);
        let l = a(1);
        e && (o ? M(o) && (l = G(o)) : l = G(t));
        const c = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== O(t)) && e
        }(i, n, o) ? K(i) : a(0);
        let s = (r.left + c.x) / l.x,
          f = (r.top + c.y) / l.y,
          u = r.width / l.x,
          d = r.height / l.y;
        if (i) {
          const t = O(i),
            e = o && M(o) ? O(o) : o;
          let n = t,
            r = Y(n);
          for (; r && o && e !== n;) {
            const t = G(r),
              e = r.getBoundingClientRect(),
              o = W(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += l, n = O(r), r = Y(n)
          }
        }
        return S({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function Z(t, e) {
        const n = V(t).scrollLeft;
        return e ? e.left + n : Q(P(t)).left + n
      }

      function tt(t, e, n) {
        void 0 === n && (n = !1);
        const o = t.getBoundingClientRect();
        return {
          x: o.left + e.scrollLeft - (n ? 0 : Z(t, o)),
          y: o.top + e.scrollTop
        }
      }

      function et(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = O(t),
            o = P(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            l = o.clientHeight,
            c = 0,
            a = 0;
          if (r) {
            i = r.width, l = r.height;
            const t = B();
            (!t || t && "fixed" === e) && (c = r.offsetLeft, a = r.offsetTop)
          }
          return {
            width: i,
            height: l,
            x: c,
            y: a
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = P(t),
            n = V(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let c = -n.scrollLeft + Z(t);
          const a = -n.scrollTop;
          return "rtl" === W(o).direction && (c += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: l,
            x: c,
            y: a
          }
        }(P(t));
        else if (M(e)) o = function(t, e) {
          const n = Q(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = C(t) ? G(t) : a(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = K(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return S(o)
      }

      function nt(t, e) {
        const n = z(t);
        return !(n === e || !M(n) || N(n)) && ("fixed" === W(n).position || nt(n, e))
      }

      function ot(t, e, n) {
        const o = C(e),
          r = P(e),
          i = "fixed" === n,
          l = Q(t, !0, i, e);
        let c = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = a(0);
        if (o || !o && !i)
          if (("body" !== L(e) || _(r)) && (c = V(e)), o) {
            const t = Q(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else r && (s.x = Z(r));
        const f = !r || o || i ? a(0) : tt(r, c);
        return {
          x: l.left + c.scrollLeft - s.x - f.x,
          y: l.top + c.scrollTop - s.y - f.y,
          width: l.width,
          height: l.height
        }
      }

      function rt(t) {
        return "static" === W(t).position
      }

      function it(t, e) {
        if (!C(t) || "fixed" === W(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return P(t) === n && (n = n.ownerDocument.body), n
      }

      function lt(t, e) {
        const n = O(t);
        if (H(t)) return n;
        if (!C(t)) {
          let e = z(t);
          for (; e && !N(e);) {
            if (M(e) && !rt(e)) return e;
            e = z(e)
          }
          return n
        }
        let o = it(t, e);
        for (; o && F(o) && rt(o);) o = it(o, e);
        return o && N(o) && rt(o) && !j(o) ? n : o || function(t) {
          let e = z(t);
          for (; C(e) && !N(e);) {
            if (j(e)) return e;
            if (H(e)) return null;
            e = z(e)
          }
          return null
        }(t) || n
      }
      const ct = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: r
          } = t;
          const i = "fixed" === r,
            l = P(o),
            c = !!e && H(e.floating);
          if (o === l || c && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = a(1);
          const u = a(0),
            d = C(o);
          if ((d || !d && !i) && (("body" !== L(o) || _(l)) && (s = V(o)), C(o))) {
            const t = Q(o);
            f = G(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !l || d || i ? a(0) : tt(l, s, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: P,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const c = [..."clippingAncestors" === n ? H(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = X(t, [], !1).filter((t => M(t) && "body" !== L(t))),
                r = null;
              const i = "fixed" === W(t).position;
              let l = i ? z(t) : t;
              for (; M(l) && !N(l);) {
                const e = W(l),
                  n = j(l);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || _(l) && !n && nt(t, l)) ? o = o.filter((t => t !== l)) : r = e, l = z(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            a = c[0],
            s = c.reduce(((t, n) => {
              const o = et(e, n, l);
              return t.top = i(o.top, t.top), t.right = r(o.right, t.right), t.bottom = r(o.bottom, t.bottom), t.left = i(o.left, t.left), t
            }), et(e, a, l));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: lt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || lt,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: ot(t.reference, await e(t.floating), t.strategy),
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
          } = U(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: G,
        isElement: M,
        isRTL: function(t) {
          return "rtl" === W(t).direction
        }
      };

      function at(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function st(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: a = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = q(t), p = l || a ? [...d ? X(d) : [], ...X(e)] : [];
        p.forEach((t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), a && t.addEventListener("resize", n)
        }));
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = P(t);

          function a() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function s(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), a();
            const d = t.getBoundingClientRect(),
              {
                left: p,
                top: m,
                width: y,
                height: h
              } = d;
            if (f || e(), !y || !h) return;
            const g = {
              rootMargin: -c(m) + "px " + -c(l.clientWidth - (p + y)) + "px " + -c(l.clientHeight - (m + h)) + "px " + -c(p) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function b(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return s();
                o ? s(!1, o) : n = setTimeout((() => {
                  s(!1, 1e-7)
                }), 1e3)
              }
              1 !== o || at(d, t.getBoundingClientRect()) || s(), w = !1
            }
            try {
              o = new IntersectionObserver(b, {
                ...g,
                root: l.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(b, g)
            }
            o.observe(t)
          }(!0), a
        }(d, n) : null;
        let y, h = -1,
          g = null;
        s && (g = new ResizeObserver((t => {
          let [o] = t;
          o && o.target === d && g && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
            var t;
            null == (t = g) || t.observe(e)
          }))), n()
        })), d && !u && g.observe(d), g.observe(e));
        let w = u ? Q(t) : null;
        return u && function e() {
          const o = Q(t);
          w && !at(w, o) && n(), w = o, y = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach((t => {
            l && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n)
          })), null == m || m(), null == (t = g) || t.disconnect(), g = null, u && cancelAnimationFrame(y)
        }
      }
      const ft = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: r,
                y: i,
                placement: l,
                middlewareData: c
              } = e, a = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = p(n), c = m(n), a = "y" === g(n), s = ["left", "top"].includes(l) ? -1 : 1, f = i && a ? -1 : 1, u = d(e, t);
                let {
                  mainAxis: y,
                  crossAxis: h,
                  alignmentAxis: w
                } = "number" == typeof u ? {
                  mainAxis: u,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: u.mainAxis || 0,
                  crossAxis: u.crossAxis || 0,
                  alignmentAxis: u.alignmentAxis
                };
                return c && "number" == typeof w && (h = "end" === c ? -1 * w : w), a ? {
                  x: h * f,
                  y: y * s
                } : {
                  x: y * s,
                  y: h * f
                }
              }(e, t);
              return l === (null == (n = c.offset) ? void 0 : n.placement) && null != (o = c.arrow) && o.alignmentOffset ? {} : {
                x: r + a.x,
                y: i + a.y,
                data: {
                  ...a,
                  placement: l
                }
              }
            }
          }
        },
        ut = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: o,
                placement: r
              } = e, {
                mainAxis: i = !0,
                crossAxis: l = !1,
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
              } = d(t, e), s = {
                x: n,
                y: o
              }, f = await R(e, a), m = g(p(r)), h = y(m);
              let w = s[h],
                b = s[m];
              if (i) {
                const t = "y" === h ? "bottom" : "right";
                w = u(w + f["y" === h ? "top" : "left"], w, w - f[t])
              }
              if (l) {
                const t = "y" === m ? "bottom" : "right";
                b = u(b + f["y" === m ? "top" : "left"], b, b - f[t])
              }
              const x = c.fn({
                ...e,
                [h]: w,
                [m]: b
              });
              return {
                ...x,
                data: {
                  x: x.x - n,
                  y: x.y - o,
                  enabled: {
                    [h]: i,
                    [m]: l
                  }
                }
              }
            }
          }
        },
        dt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: r,
                middlewareData: i,
                rects: l,
                initialPlacement: c,
                platform: a,
                elements: s
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: y,
                fallbackStrategy: v = "bestFit",
                fallbackAxisSideDirection: S = "none",
                flipAlignment: E = !0,
                ...T
              } = d(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const A = p(r),
                D = g(c),
                L = p(c) === c,
                O = await (null == a.isRTL ? void 0 : a.isRTL(s.floating)),
                P = y || (L || !E ? [x(c)] : function(t) {
                  const e = x(t);
                  return [b(t), e, b(e)]
                }(c)),
                $ = "none" !== S;
              !y && $ && P.push(... function(t, e, n, o) {
                const r = m(t);
                let i = function(t, e, n) {
                  const o = ["left", "right"],
                    r = ["right", "left"],
                    i = ["top", "bottom"],
                    l = ["bottom", "top"];
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? r : o : e ? o : r;
                    case "left":
                    case "right":
                      return e ? i : l;
                    default:
                      return []
                  }
                }(p(t), "start" === n, o);
                return r && (i = i.map((t => t + "-" + r)), e && (i = i.concat(i.map(b)))), i
              }(c, E, S, O));
              const M = [c, ...P],
                C = await R(e, T),
                k = [];
              let _ = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && k.push(C[A]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = w(t),
                    i = h(r);
                  let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (l = x(l)), [l, x(l)]
                }(r, l, O);
                k.push(C[t[0]], C[t[1]])
              }
              if (_ = [..._, {
                  placement: r,
                  overflows: k
                }], !k.every((t => t <= 0))) {
                var F, H;
                const t = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
                  e = M[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: _
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (H = _.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : H.placement;
                if (!n) switch (v) {
                  case "bestFit": {
                    var j;
                    const t = null == (j = _.filter((t => {
                      if ($) {
                        const e = g(t.placement);
                        return e === D || "y" === e
                      }
                      return !0
                    })).map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : j[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = c
                }
                if (r !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        pt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: l,
                rects: c,
                platform: a,
                elements: s
              } = e, {
                apply: f = () => {},
                ...u
              } = d(t, e), y = await R(e, u), h = p(l), w = m(l), b = "y" === g(l), {
                width: x,
                height: v
              } = c.floating;
              let S, E;
              "top" === h || "bottom" === h ? (S = h, E = w === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (E = h, S = "end" === w ? "top" : "bottom");
              const T = v - y.top - y.bottom,
                A = x - y.left - y.right,
                D = r(v - y[S], T),
                L = r(x - y[E], A),
                O = !e.middlewareData.shift;
              let P = D,
                $ = L;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && ($ = A), null != (o = e.middlewareData.shift) && o.enabled.y && (P = T), O && !w) {
                const t = i(y.left, 0),
                  e = i(y.right, 0),
                  n = i(y.top, 0),
                  o = i(y.bottom, 0);
                b ? $ = x - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : P = v - 2 * (0 !== n || 0 !== o ? n + o : i(y.top, y.bottom))
              }
              await f({
                ...e,
                availableWidth: $,
                availableHeight: P
              });
              const M = await a.getDimensions(s.floating);
              return x !== M.width || v !== M.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        mt = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n
              } = e, {
                strategy: o = "referenceHidden",
                ...r
              } = d(t, e);
              switch (o) {
                case "referenceHidden": {
                  const t = T(await R(e, {
                    ...r,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: A(t)
                    }
                  }
                }
                case "escaped": {
                  const t = T(await R(e, {
                    ...r,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: A(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        yt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: l,
              platform: c,
              elements: a,
              middlewareData: s
            } = e, {
              element: f,
              padding: p = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const y = v(p),
              g = {
                x: n,
                y: o
              },
              b = w(i),
              x = h(b),
              S = await c.getDimensions(f),
              E = "y" === b,
              R = E ? "top" : "left",
              T = E ? "bottom" : "right",
              A = E ? "clientHeight" : "clientWidth",
              D = l.reference[x] + l.reference[b] - g[b] - l.floating[x],
              L = g[b] - l.reference[b],
              O = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(f));
            let P = O ? O[A] : 0;
            P && await (null == c.isElement ? void 0 : c.isElement(O)) || (P = a.floating[A] || l.floating[x]);
            const $ = D / 2 - L / 2,
              M = P / 2 - S[x] / 2 - 1,
              C = r(y[R], M),
              k = r(y[T], M),
              _ = C,
              F = P - S[x] - k,
              H = P / 2 - S[x] / 2 + $,
              j = u(_, H, F),
              B = !s.arrow && null != m(i) && H !== j && l.reference[x] / 2 - (H < _ ? C : k) - S[x] / 2 < 0,
              N = B ? H < _ ? H - _ : H - F : 0;
            return {
              [b]: g[b] + N,
              data: {
                [b]: j,
                centerOffset: H - j - N,
                ...B && {
                  alignmentOffset: N
                }
              },
              reset: B
            }
          }
        }),
        ht = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: n,
                y: o,
                placement: r,
                rects: i,
                middlewareData: l
              } = e, {
                offset: c = 0,
                mainAxis: a = !0,
                crossAxis: s = !0
              } = d(t, e), f = {
                x: n,
                y: o
              }, u = g(r), m = y(u);
              let h = f[m],
                w = f[u];
              const b = d(c, e),
                x = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (a) {
                const t = "y" === m ? "height" : "width",
                  e = i.reference[m] - i.floating[t] + x.mainAxis,
                  n = i.reference[m] + i.reference[t] - x.mainAxis;
                h < e ? h = e : h > n && (h = n)
              }
              if (s) {
                var v, S;
                const t = "y" === m ? "width" : "height",
                  e = ["top", "left"].includes(p(r)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (v = l.offset) ? void 0 : v[u]) || 0) + (e ? 0 : x.crossAxis),
                  o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (S = l.offset) ? void 0 : S[u]) || 0) - (e ? x.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [m]: h,
                [u]: w
              }
            }
          }
        },
        gt = (t, e, n) => {
          const o = new Map,
            r = {
              platform: ct,
              ...n
            },
            i = {
              ...r.platform,
              _c: o
            };
          return (async (t, e, n) => {
            const {
              placement: o = "bottom",
              strategy: r = "absolute",
              middleware: i = [],
              platform: l
            } = n, c = i.filter(Boolean), a = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let s = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = E(s, o, a),
              d = o,
              p = {},
              m = 0;
            for (let n = 0; n < c.length; n++) {
              const {
                name: i,
                fn: y
              } = c[n], {
                x: h,
                y: g,
                data: w,
                reset: b
              } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: p,
                rects: s,
                platform: l,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != h ? h : f, u = null != g ? g : u, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...w
                }
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (s = !0 === b.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = E(s, d, a))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: r,
              middlewareData: p
            }
          })(t, e, {
            ...r,
            platform: i
          })
        }
    },
    68295: (t, e, n) => {
      n.d(e, {
        C: () => l,
        f: () => c
      });
      var o = n(91299);

      function r(t) {
        return t
      }

      function i(t, e) {
        void 0 === e && (e = r);
        var n = [],
          o = !1;
        return {
          read: function() {
            if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : t
          },
          useMedium: function(t) {
            var r = e(t, o);
            return n.push(r),
              function() {
                n = n.filter((function(t) {
                  return t !== r
                }))
              }
          },
          assignSyncMedium: function(t) {
            for (o = !0; n.length;) {
              var e = n;
              n = [], e.forEach(t)
            }
            n = {
              push: function(e) {
                return t(e)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(t) {
            o = !0;
            var e = [];
            if (n.length) {
              var r = n;
              n = [], r.forEach(t), e = n
            }
            var i = function() {
                var n = e;
                e = [], n.forEach(t)
              },
              l = function() {
                return Promise.resolve().then(i)
              };
            l(), n = {
              push: function(t) {
                e.push(t), l()
              },
              filter: function(t) {
                return e = e.filter(t), n
              }
            }
          }
        }
      }

      function l(t, e) {
        return void 0 === e && (e = r), i(t, e)
      }

      function c(t) {
        void 0 === t && (t = {});
        var e = i(null);
        return e.options = (0, o.__assign)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    75754: (t, e, n) => {
      t.exports = n(82886)
    },
    82886: (t, e) => {
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        c = n ? Symbol.for("react.profiler") : 60114,
        a = n ? Symbol.for("react.provider") : 60109,
        s = n ? Symbol.for("react.context") : 60110,
        f = n ? Symbol.for("react.async_mode") : 60111,
        u = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        h = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        w = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;

      function v(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch (t = t.type) {
                case f:
                case u:
                case i:
                case c:
                case l:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case s:
                    case d:
                    case h:
                    case y:
                    case a:
                      return t;
                    default:
                      return e
                  }
              }
            case r:
              return e
          }
        }
      }

      function S(t) {
        return v(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = s, e.ContextProvider = a, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = y, e.Portal = r, e.Profiler = c, e.StrictMode = l, e.Suspense = p, e.isAsyncMode = function(t) {
        return S(t) || v(t) === f
      }, e.isConcurrentMode = S, e.isContextConsumer = function(t) {
        return v(t) === s
      }, e.isContextProvider = function(t) {
        return v(t) === a
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
      }, e.isForwardRef = function(t) {
        return v(t) === d
      }, e.isFragment = function(t) {
        return v(t) === i
      }, e.isLazy = function(t) {
        return v(t) === h
      }, e.isMemo = function(t) {
        return v(t) === y
      }, e.isPortal = function(t) {
        return v(t) === r
      }, e.isProfiler = function(t) {
        return v(t) === c
      }, e.isStrictMode = function(t) {
        return v(t) === l
      }, e.isSuspense = function(t) {
        return v(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === c || t === l || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === a || t.$$typeof === s || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === x || t.$$typeof === g)
      }, e.typeOf = v
    },
    89720: (t, e, n) => {
      n.d(e, {
        S: () => c
      });
      var o = n(62229);

      function r(t, e) {
        return "function" == typeof t ? t(e) : t && (t.current = e), t
      }
      var i = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function c(t, e) {
        var n, c, a, s = (n = e || null, c = function(e) {
          return t.forEach((function(t) {
            return r(t, e)
          }))
        }, (a = (0, o.useState)((function() {
          return {
            value: n,
            callback: c,
            facade: {
              get current() {
                return a.value
              },
              set current(t) {
                var e = a.value;
                e !== t && (a.value = t, a.callback(t, e))
              }
            }
          }
        }))[0]).callback = c, a.facade);
        return i((function() {
          var e = l.get(s);
          if (e) {
            var n = new Set(e),
              o = new Set(t),
              i = s.current;
            n.forEach((function(t) {
              o.has(t) || r(t, null)
            })), o.forEach((function(t) {
              n.has(t) || r(t, i)
            }))
          }
          l.set(s, t)
        }), [t]), s
      }
    }
  }
]);