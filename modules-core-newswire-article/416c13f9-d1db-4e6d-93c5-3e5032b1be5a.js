try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "416c13f9-d1db-4e6d-93c5-3e5032b1be5a", t._sentryDebugIdIdentifier = "sentry-dbid-416c13f9-d1db-4e6d-93c5-3e5032b1be5a")
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
  [4728], {
    64728: (t, e, n) => {
      n.d(e, {
        UE: () => kt,
        ll: () => Tt,
        rD: () => Ot,
        UU: () => Lt,
        jD: () => St,
        ER: () => Ct,
        cY: () => Et,
        BN: () => At,
        Ej: () => Dt
      });
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        r = Math.max,
        l = Math.round,
        s = Math.floor,
        a = t => ({
          x: t,
          y: t
        }),
        c = {
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
        return r(t, i(e, n))
      }

      function d(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function h(t) {
        return t.split("-")[0]
      }

      function m(t) {
        return t.split("-")[1]
      }

      function g(t) {
        return "x" === t ? "y" : "x"
      }

      function p(t) {
        return "y" === t ? "height" : "width"
      }
      const y = new Set(["top", "bottom"]);

      function w(t) {
        return y.has(h(t)) ? "y" : "x"
      }

      function x(t) {
        return g(w(t))
      }

      function b(t) {
        return t.replace(/start|end/g, t => f[t])
      }
      const v = ["left", "right"],
        R = ["right", "left"],
        T = ["top", "bottom"],
        E = ["bottom", "top"];

      function A(t) {
        return t.replace(/left|right|bottom|top/g, t => c[t])
      }

      function L(t) {
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

      function D(t) {
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

      function S(t, e, n) {
        let {
          reference: o,
          floating: i
        } = t;
        const r = w(e),
          l = x(e),
          s = p(l),
          a = h(e),
          c = "y" === r,
          f = o.x + o.width / 2 - i.width / 2,
          u = o.y + o.height / 2 - i.height / 2,
          d = o[s] / 2 - i[s] / 2;
        let g;
        switch (a) {
          case "top":
            g = {
              x: f,
              y: o.y - i.height
            };
            break;
          case "bottom":
            g = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            g = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            g = {
              x: o.x - i.width,
              y: u
            };
            break;
          default:
            g = {
              x: o.x,
              y: o.y
            }
        }
        switch (m(e)) {
          case "start":
            g[l] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            g[l] += d * (n && c ? -1 : 1)
        }
        return g
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
          strategy: a
        } = t, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: h = !1,
          padding: m = 0
        } = d(e, t), g = L(m), p = s[h ? "floating" === u ? "reference" : "floating" : u], y = D(await r.getClippingRect({
          element: null == (n = await (null == r.isElement ? void 0 : r.isElement(p))) || n ? p : p.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: a
        })), w = "floating" === u ? {
          x: o,
          y: i,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, x = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(s.floating)), b = await (null == r.isElement ? void 0 : r.isElement(x)) && await (null == r.getScale ? void 0 : r.getScale(x)) || {
          x: 1,
          y: 1
        }, v = D(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: w,
          offsetParent: x,
          strategy: a
        }) : w);
        return {
          top: (y.top - v.top + g.top) / b.y,
          bottom: (v.bottom - y.bottom + g.bottom) / b.y,
          left: (y.left - v.left + g.left) / b.x,
          right: (v.right - y.right + g.right) / b.x
        }
      }

      function C(t, e) {
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

      function M() {
        return "undefined" != typeof window
      }

      function F(t) {
        return W(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function P(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function H(t) {
        var e;
        return null == (e = (W(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function W(t) {
        return !!M() && (t instanceof Node || t instanceof P(t).Node)
      }

      function B(t) {
        return !!M() && (t instanceof Element || t instanceof P(t).Element)
      }

      function N(t) {
        return !!M() && (t instanceof HTMLElement || t instanceof P(t).HTMLElement)
      }

      function V(t) {
        return !(!M() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof P(t).ShadowRoot)
      }
      const I = new Set(["inline", "contents"]);

      function z(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: i
        } = tt(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !I.has(i)
      }
      const j = new Set(["table", "td", "th"]);

      function Y(t) {
        return j.has(F(t))
      }
      const U = [":popover-open", ":modal"];

      function q(t) {
        return U.some(e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        })
      }
      const X = ["transform", "translate", "scale", "rotate", "perspective"],
        $ = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        G = ["paint", "layout", "strict", "content"];

      function J(t) {
        const e = K(),
          n = B(t) ? tt(t) : t;
        return X.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || $.some(t => (n.willChange || "").includes(t)) || G.some(t => (n.contain || "").includes(t))
      }

      function K() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const Q = new Set(["html", "body", "#document"]);

      function Z(t) {
        return Q.has(F(t))
      }

      function tt(t) {
        return P(t).getComputedStyle(t)
      }

      function et(t) {
        return B(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function nt(t) {
        if ("html" === F(t)) return t;
        const e = t.assignedSlot || t.parentNode || V(t) && t.host || H(t);
        return V(e) ? e.host : e
      }

      function ot(t) {
        const e = nt(t);
        return Z(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && z(e) ? e : ot(e)
      }

      function it(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = ot(t),
          r = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = P(i);
        if (r) {
          const t = rt(l);
          return e.concat(l, l.visualViewport || [], z(i) ? i : [], t && n ? it(t) : [])
        }
        return e.concat(i, it(i, [], n))
      }

      function rt(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function lt(t) {
        const e = tt(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const i = N(t),
          r = i ? t.offsetWidth : n,
          s = i ? t.offsetHeight : o,
          a = l(n) !== r || l(o) !== s;
        return a && (n = r, o = s), {
          width: n,
          height: o,
          $: a
        }
      }

      function st(t) {
        return B(t) ? t : t.contextElement
      }

      function at(t) {
        const e = st(t);
        if (!N(e)) return a(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: r
          } = lt(e);
        let s = (r ? l(n.width) : n.width) / o,
          c = (r ? l(n.height) : n.height) / i;
        return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), {
          x: s,
          y: c
        }
      }
      const ct = a(0);

      function ft(t) {
        const e = P(t);
        return K() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : ct
      }

      function ut(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          r = st(t);
        let l = a(1);
        e && (o ? B(o) && (l = at(o)) : l = at(t));
        const s = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== P(t)) && e
        }(r, n, o) ? ft(r) : a(0);
        let c = (i.left + s.x) / l.x,
          f = (i.top + s.y) / l.y,
          u = i.width / l.x,
          d = i.height / l.y;
        if (r) {
          const t = P(r),
            e = o && B(o) ? P(o) : o;
          let n = t,
            i = rt(n);
          for (; i && o && e !== n;) {
            const t = at(i),
              e = i.getBoundingClientRect(),
              o = tt(i),
              r = e.left + (i.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (i.clientTop + parseFloat(o.paddingTop)) * t.y;
            c *= t.x, f *= t.y, u *= t.x, d *= t.y, c += r, f += l, n = P(i), i = rt(n)
          }
        }
        return D({
          width: u,
          height: d,
          x: c,
          y: f
        })
      }

      function dt(t, e) {
        const n = et(t).scrollLeft;
        return e ? e.left + n : ut(H(t)).left + n
      }

      function ht(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - dt(t, n),
          y: n.top + e.scrollTop
        }
      }
      const mt = new Set(["absolute", "fixed"]);

      function gt(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = P(t),
            o = H(t),
            i = n.visualViewport;
          let r = o.clientWidth,
            l = o.clientHeight,
            s = 0,
            a = 0;
          if (i) {
            r = i.width, l = i.height;
            const t = K();
            (!t || t && "fixed" === e) && (s = i.offsetLeft, a = i.offsetTop)
          }
          const c = dt(o);
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
            x: s,
            y: a
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = H(t),
            n = et(t),
            o = t.ownerDocument.body,
            i = r(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = r(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let s = -n.scrollLeft + dt(t);
          const a = -n.scrollTop;
          return "rtl" === tt(o).direction && (s += r(e.clientWidth, o.clientWidth) - i), {
            width: i,
            height: l,
            x: s,
            y: a
          }
        }(H(t));
        else if (B(e)) o = function(t, e) {
          const n = ut(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            r = N(t) ? at(t) : a(1);
          return {
            width: t.clientWidth * r.x,
            height: t.clientHeight * r.y,
            x: i * r.x,
            y: o * r.y
          }
        }(e, n);
        else {
          const n = ft(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return D(o)
      }

      function pt(t, e) {
        const n = nt(t);
        return !(n === e || !B(n) || Z(n)) && ("fixed" === tt(n).position || pt(n, e))
      }

      function yt(t, e, n) {
        const o = N(e),
          i = H(e),
          r = "fixed" === n,
          l = ut(t, !0, r, e);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = a(0);

        function f() {
          c.x = dt(i)
        }
        if (o || !o && !r)
          if (("body" !== F(e) || z(i)) && (s = et(e)), o) {
            const t = ut(e, !0, r, e);
            c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
          } else i && f();
        r && !o && i && f();
        const u = !i || o || r ? a(0) : ht(i, s);
        return {
          x: l.left + s.scrollLeft - c.x - u.x,
          y: l.top + s.scrollTop - c.y - u.y,
          width: l.width,
          height: l.height
        }
      }

      function wt(t) {
        return "static" === tt(t).position
      }

      function xt(t, e) {
        if (!N(t) || "fixed" === tt(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return H(t) === n && (n = n.ownerDocument.body), n
      }

      function bt(t, e) {
        const n = P(t);
        if (q(t)) return n;
        if (!N(t)) {
          let e = nt(t);
          for (; e && !Z(e);) {
            if (B(e) && !wt(e)) return e;
            e = nt(e)
          }
          return n
        }
        let o = xt(t, e);
        for (; o && Y(o) && wt(o);) o = xt(o, e);
        return o && Z(o) && wt(o) && !J(o) ? n : o || function(t) {
          let e = nt(t);
          for (; N(e) && !Z(e);) {
            if (J(e)) return e;
            if (q(e)) return null;
            e = nt(e)
          }
          return null
        }(t) || n
      }
      const vt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: i
          } = t;
          const r = "fixed" === i,
            l = H(o),
            s = !!e && q(e.floating);
          if (o === l || s && r) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = a(1);
          const u = a(0),
            d = N(o);
          if ((d || !d && !r) && (("body" !== F(o) || z(l)) && (c = et(o)), N(o))) {
            const t = ut(o);
            f = at(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const h = !l || d || r ? a(0) : ht(l, c);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - c.scrollLeft * f.x + u.x + h.x,
            y: n.y * f.y - c.scrollTop * f.y + u.y + h.y
          }
        },
        getDocumentElement: H,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const s = [..."clippingAncestors" === n ? q(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = it(t, [], !1).filter(t => B(t) && "body" !== F(t)),
                i = null;
              const r = "fixed" === tt(t).position;
              let l = r ? nt(t) : t;
              for (; B(l) && !Z(l);) {
                const e = tt(l),
                  n = J(l);
                n || "fixed" !== e.position || (i = null), (r ? !n && !i : !n && "static" === e.position && i && mt.has(i.position) || z(l) && !n && pt(t, l)) ? o = o.filter(t => t !== l) : i = e, l = nt(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            a = s[0],
            c = s.reduce((t, n) => {
              const o = gt(e, n, l);
              return t.top = r(o.top, t.top), t.right = i(o.right, t.right), t.bottom = i(o.bottom, t.bottom), t.left = r(o.left, t.left), t
            }, gt(e, a, l));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: bt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || bt,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: yt(t.reference, await e(t.floating), t.strategy),
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
          } = lt(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: at,
        isElement: B,
        isRTL: function(t) {
          return "rtl" === tt(t).direction
        }
      };

      function Rt(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function Tt(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: a = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = st(t), h = l || a ? [...d ? it(d) : [], ...it(e)] : [];
        h.forEach(t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), a && t.addEventListener("resize", n)
        });
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = H(t);

          function a() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function c(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), a();
            const d = t.getBoundingClientRect(),
              {
                left: h,
                top: m,
                width: g,
                height: p
              } = d;
            if (f || e(), !g || !p) return;
            const y = {
              rootMargin: -s(m) + "px " + -s(l.clientWidth - (h + g)) + "px " + -s(l.clientHeight - (m + p)) + "px " + -s(h) + "px",
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
              1 !== o || Rt(d, t.getBoundingClientRect()) || c(), w = !1
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
          }(!0), a
        }(d, n) : null;
        let g, p = -1,
          y = null;
        c && (y = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === d && y && (y.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
            var t;
            null == (t = y) || t.observe(e)
          })), n()
        }), d && !u && y.observe(d), y.observe(e));
        let w = u ? ut(t) : null;
        return u && function e() {
          const o = ut(t);
          w && !Rt(w, o) && n(), w = o, g = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          h.forEach(t => {
            l && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n)
          }), null == m || m(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(g)
        }
      }
      const Et = function(t) {
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
              } = e, a = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: i
                } = t, r = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), l = h(n), s = m(n), a = "y" === w(n), c = _.has(l) ? -1 : 1, f = r && a ? -1 : 1, u = d(e, t);
                let {
                  mainAxis: g,
                  crossAxis: p,
                  alignmentAxis: y
                } = "number" == typeof u ? {
                  mainAxis: u,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: u.mainAxis || 0,
                  crossAxis: u.crossAxis || 0,
                  alignmentAxis: u.alignmentAxis
                };
                return s && "number" == typeof y && (p = "end" === s ? -1 * y : y), a ? {
                  x: p * f,
                  y: g * c
                } : {
                  x: g * c,
                  y: p * f
                }
              }(e, t);
              return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (o = s.arrow) && o.alignmentOffset ? {} : {
                x: i + a.x,
                y: r + a.y,
                data: {
                  ...a,
                  placement: l
                }
              }
            }
          }
        },
        At = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: o,
                placement: i
              } = e, {
                mainAxis: r = !0,
                crossAxis: l = !1,
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
                ...a
              } = d(t, e), c = {
                x: n,
                y: o
              }, f = await k(e, a), m = w(h(i)), p = g(m);
              let y = c[p],
                x = c[m];
              if (r) {
                const t = "y" === p ? "bottom" : "right";
                y = u(y + f["y" === p ? "top" : "left"], y, y - f[t])
              }
              if (l) {
                const t = "y" === m ? "bottom" : "right";
                x = u(x + f["y" === m ? "top" : "left"], x, x - f[t])
              }
              const b = s.fn({
                ...e,
                [p]: y,
                [m]: x
              });
              return {
                ...b,
                data: {
                  x: b.x - n,
                  y: b.y - o,
                  enabled: {
                    [p]: r,
                    [m]: l
                  }
                }
              }
            }
          }
        },
        Lt = function(t) {
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
                platform: a,
                elements: c
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: g,
                fallbackStrategy: y = "bestFit",
                fallbackAxisSideDirection: L = "none",
                flipAlignment: D = !0,
                ...S
              } = d(t, e);
              if (null != (n = r.arrow) && n.alignmentOffset) return {};
              const C = h(i),
                O = w(s),
                _ = h(s) === s,
                M = await (null == a.isRTL ? void 0 : a.isRTL(c.floating)),
                F = g || (_ || !D ? [A(s)] : function(t) {
                  const e = A(t);
                  return [b(t), e, b(e)]
                }(s)),
                P = "none" !== L;
              !g && P && F.push(... function(t, e, n, o) {
                const i = m(t);
                let r = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? R : v : e ? v : R;
                    case "left":
                    case "right":
                      return e ? T : E;
                    default:
                      return []
                  }
                }(h(t), "start" === n, o);
                return i && (r = r.map(t => t + "-" + i), e && (r = r.concat(r.map(b)))), r
              }(s, D, L, M));
              const H = [s, ...F],
                W = await k(e, S),
                B = [];
              let N = (null == (o = r.flip) ? void 0 : o.overflows) || [];
              if (f && B.push(W[C]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    i = x(t),
                    r = p(i);
                  let l = "x" === i ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[r] > e.floating[r] && (l = A(l)), [l, A(l)]
                }(i, l, M);
                B.push(W[t[0]], W[t[1]])
              }
              if (N = [...N, {
                  placement: i,
                  overflows: B
                }], !B.every(t => t <= 0)) {
                var V, I;
                const t = ((null == (V = r.flip) ? void 0 : V.index) || 0) + 1,
                  e = H[t];
                if (e && ("alignment" !== u || O === w(e) || N.every(t => w(t.placement) !== O || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: N
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (I = N.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : I.placement;
                if (!n) switch (y) {
                  case "bestFit": {
                    var z;
                    const t = null == (z = N.filter(t => {
                      if (P) {
                        const e = w(t.placement);
                        return e === O || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : z[0];
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
        Dt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: l,
                rects: s,
                platform: a,
                elements: c
              } = e, {
                apply: f = () => {},
                ...u
              } = d(t, e), g = await k(e, u), p = h(l), y = m(l), x = "y" === w(l), {
                width: b,
                height: v
              } = s.floating;
              let R, T;
              "top" === p || "bottom" === p ? (R = p, T = y === (await (null == a.isRTL ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (T = p, R = "end" === y ? "top" : "bottom");
              const E = v - g.top - g.bottom,
                A = b - g.left - g.right,
                L = i(v - g[R], E),
                D = i(b - g[T], A),
                S = !e.middlewareData.shift;
              let C = L,
                O = D;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (O = A), null != (o = e.middlewareData.shift) && o.enabled.y && (C = E), S && !y) {
                const t = r(g.left, 0),
                  e = r(g.right, 0),
                  n = r(g.top, 0),
                  o = r(g.bottom, 0);
                x ? O = b - 2 * (0 !== t || 0 !== e ? t + e : r(g.left, g.right)) : C = v - 2 * (0 !== n || 0 !== o ? n + o : r(g.top, g.bottom))
              }
              await f({
                ...e,
                availableWidth: O,
                availableHeight: C
              });
              const _ = await a.getDimensions(c.floating);
              return b !== _.width || v !== _.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        St = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n
              } = e, {
                strategy: o = "referenceHidden",
                ...i
              } = d(t, e);
              switch (o) {
                case "referenceHidden": {
                  const t = C(await k(e, {
                    ...i,
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
                  const t = C(await k(e, {
                    ...i,
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
              platform: s,
              elements: a,
              middlewareData: c
            } = e, {
              element: f,
              padding: h = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const g = L(h),
              y = {
                x: n,
                y: o
              },
              w = x(r),
              b = p(w),
              v = await s.getDimensions(f),
              R = "y" === w,
              T = R ? "top" : "left",
              E = R ? "bottom" : "right",
              A = R ? "clientHeight" : "clientWidth",
              D = l.reference[b] + l.reference[w] - y[w] - l.floating[b],
              S = y[w] - l.reference[w],
              k = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(f));
            let C = k ? k[A] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(k)) || (C = a.floating[A] || l.floating[b]);
            const O = D / 2 - S / 2,
              _ = C / 2 - v[b] / 2 - 1,
              M = i(g[T], _),
              F = i(g[E], _),
              P = M,
              H = C - v[b] - F,
              W = C / 2 - v[b] / 2 + O,
              B = u(P, W, H),
              N = !c.arrow && null != m(r) && W !== B && l.reference[b] / 2 - (W < P ? M : F) - v[b] / 2 < 0,
              V = N ? W < P ? W - P : W - H : 0;
            return {
              [w]: y[w] + V,
              data: {
                [w]: B,
                centerOffset: W - B - V,
                ...N && {
                  alignmentOffset: V
                }
              },
              reset: N
            }
          }
        }),
        Ct = function(t) {
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
                mainAxis: a = !0,
                crossAxis: c = !0
              } = d(t, e), f = {
                x: n,
                y: o
              }, u = w(i), m = g(u);
              let p = f[m],
                y = f[u];
              const x = d(s, e),
                b = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
                };
              if (a) {
                const t = "y" === m ? "height" : "width",
                  e = r.reference[m] - r.floating[t] + b.mainAxis,
                  n = r.reference[m] + r.reference[t] - b.mainAxis;
                p < e ? p = e : p > n && (p = n)
              }
              if (c) {
                var v, R;
                const t = "y" === m ? "width" : "height",
                  e = _.has(h(i)),
                  n = r.reference[u] - r.floating[t] + (e && (null == (v = l.offset) ? void 0 : v[u]) || 0) + (e ? 0 : b.crossAxis),
                  o = r.reference[u] + r.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[u]) || 0) - (e ? b.crossAxis : 0);
                y < n ? y = n : y > o && (y = o)
              }
              return {
                [m]: p,
                [u]: y
              }
            }
          }
        },
        Ot = (t, e, n) => {
          const o = new Map,
            i = {
              platform: vt,
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
            } = n, s = r.filter(Boolean), a = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let c = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
              }),
              {
                x: f,
                y: u
              } = S(c, o, a),
              d = o,
              h = {},
              m = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: r,
                fn: g
              } = s[n], {
                x: p,
                y,
                data: w,
                reset: x
              } = await g({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: i,
                middlewareData: h,
                rects: c,
                platform: l,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != p ? p : f, u = null != y ? y : u, h = {
                ...h,
                [r]: {
                  ...h[r],
                  ...w
                }
              }, x && m <= 50 && (m++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (c = !0 === x.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
              }) : x.rects), ({
                x: f,
                y: u
              } = S(c, d, a))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: i,
              middlewareData: h
            }
          })(t, e, {
            ...i,
            platform: r
          })
        }
    }
  }
]);