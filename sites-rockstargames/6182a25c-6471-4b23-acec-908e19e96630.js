try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6182a25c-6471-4b23-acec-908e19e96630", t._sentryDebugIdIdentifier = "sentry-dbid-6182a25c-6471-4b23-acec-908e19e96630")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1043], {
    10376(t, e, n) {
      n.d(e, {
        UE: () => Et,
        ll: () => yt,
        rD: () => Tt,
        UU: () => vt,
        jD: () => Rt,
        ER: () => At,
        cY: () => wt,
        BN: () => xt,
        Ej: () => bt
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
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
        return i(t, r(e, n))
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
      const x = ["left", "right"],
        v = ["right", "left"],
        b = ["top", "bottom"],
        R = ["bottom", "top"];

      function E(t) {
        const e = d(t);
        return a[e] + t.slice(e.length)
      }

      function A(t) {
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

      function T(t) {
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

      function D(t, e, n) {
        let {
          reference: o,
          floating: r
        } = t;
        const i = g(e),
          l = y(e),
          s = p(l),
          c = d(e),
          a = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          m = o[s] / 2 - r[s] / 2;
        let w;
        switch (c) {
          case "top":
            w = {
              x: f,
              y: o.y - r.height
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
              x: o.x - r.width,
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
      async function S(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: l,
          elements: s,
          strategy: c
        } = t, {
          boundary: a = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: h = !1,
          padding: m = 0
        } = u(e, t), p = A(m), g = s[h ? "floating" === d ? "reference" : "floating" : d], y = T(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: a,
          rootBoundary: f,
          strategy: c
        })), w = "floating" === d ? {
          x: o,
          y: r,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), v = await (null == i.isElement ? void 0 : i.isElement(x)) && await (null == i.getScale ? void 0 : i.getScale(x)) || {
          x: 1,
          y: 1
        }, b = T(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: w,
          offsetParent: x,
          strategy: c
        }) : w);
        return {
          top: (y.top - b.top + p.top) / v.y,
          bottom: (b.bottom - y.bottom + p.bottom) / v.y,
          left: (y.left - b.left + p.left) / v.x,
          right: (b.right - y.right + p.right) / v.x
        }
      }

      function L(t, e) {
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
      const k = new Set(["left", "top"]);

      function C() {
        return "undefined" != typeof window
      }

      function M(t) {
        return _(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function P(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function H(t) {
        var e;
        return null == (e = (_(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function _(t) {
        return !!C() && (t instanceof Node || t instanceof P(t).Node)
      }

      function F(t) {
        return !!C() && (t instanceof Element || t instanceof P(t).Element)
      }

      function B(t) {
        return !!C() && (t instanceof HTMLElement || t instanceof P(t).HTMLElement)
      }

      function W(t) {
        return !(!C() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof P(t).ShadowRoot)
      }

      function j(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = Z(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== r && "contents" !== r
      }

      function z(t) {
        return /^(table|td|th)$/.test(M(t))
      }

      function N(t) {
        try {
          if (t.matches(":popover-open")) return !0
        } catch (t) {}
        try {
          return t.matches(":modal")
        } catch (t) {
          return !1
        }
      }
      const U = /transform|translate|scale|rotate|perspective|filter/,
        V = /paint|layout|strict|content/,
        I = t => !!t && "none" !== t;
      let Y;

      function $(t) {
        const e = F(t) ? Z(t) : t;
        return I(e.transform) || I(e.translate) || I(e.scale) || I(e.rotate) || I(e.perspective) || !X() && (I(e.backdropFilter) || I(e.filter)) || U.test(e.willChange || "") || V.test(e.contain || "")
      }

      function X() {
        return null == Y && (Y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Y
      }

      function q(t) {
        return /^(html|body|#document)$/.test(M(t))
      }

      function Z(t) {
        return P(t).getComputedStyle(t)
      }

      function G(t) {
        return F(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function J(t) {
        if ("html" === M(t)) return t;
        const e = t.assignedSlot || t.parentNode || W(t) && t.host || H(t);
        return W(e) ? e.host : e
      }

      function K(t) {
        const e = J(t);
        return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : B(e) && j(e) ? e : K(e)
      }

      function Q(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = K(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = P(r);
        if (i) {
          const t = tt(l);
          return e.concat(l, l.visualViewport || [], j(r) ? r : [], t && n ? Q(t) : [])
        }
        return e.concat(r, Q(r, [], n))
      }

      function tt(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function et(t) {
        const e = Z(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = B(t),
          i = r ? t.offsetWidth : n,
          s = r ? t.offsetHeight : o,
          c = l(n) !== i || l(o) !== s;
        return c && (n = i, o = s), {
          width: n,
          height: o,
          $: c
        }
      }

      function nt(t) {
        return F(t) ? t : t.contextElement
      }

      function ot(t) {
        const e = nt(t);
        if (!B(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = et(e);
        let s = (i ? l(n.width) : n.width) / o,
          a = (i ? l(n.height) : n.height) / r;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const rt = c(0);

      function it(t) {
        const e = P(t);
        return X() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : rt
      }

      function lt(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = nt(t);
        let l = c(1);
        e && (o ? F(o) && (l = ot(o)) : l = ot(t));
        const s = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== P(t)) && e
        }(i, n, o) ? it(i) : c(0);
        let a = (r.left + s.x) / l.x,
          f = (r.top + s.y) / l.y,
          u = r.width / l.x,
          d = r.height / l.y;
        if (i) {
          const t = P(i),
            e = o && F(o) ? P(o) : o;
          let n = t,
            r = tt(n);
          for (; r && o && e !== n;) {
            const t = ot(r),
              e = r.getBoundingClientRect(),
              o = Z(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            a *= t.x, f *= t.y, u *= t.x, d *= t.y, a += i, f += l, n = P(r), r = tt(n)
          }
        }
        return T({
          width: u,
          height: d,
          x: a,
          y: f
        })
      }

      function st(t, e) {
        const n = G(t).scrollLeft;
        return e ? e.left + n : lt(H(t)).left + n
      }

      function ct(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - st(t, n),
          y: n.top + e.scrollTop
        }
      }

      function at(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = P(t),
            o = H(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            l = o.clientHeight,
            s = 0,
            c = 0;
          if (r) {
            i = r.width, l = r.height;
            const t = X();
            (!t || t && "fixed" === e) && (s = r.offsetLeft, c = r.offsetTop)
          }
          const a = st(o);
          if (a <= 0) {
            const t = o.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              r = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              l = Math.abs(o.clientWidth - e.clientWidth - r);
            l <= 25 && (i -= l)
          } else a <= 25 && (i += a);
          return {
            width: i,
            height: l,
            x: s,
            y: c
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = H(t),
            n = G(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let s = -n.scrollLeft + st(t);
          const c = -n.scrollTop;
          return "rtl" === Z(o).direction && (s += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: l,
            x: s,
            y: c
          }
        }(H(t));
        else if (F(e)) o = function(t, e) {
          const n = lt(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = B(t) ? ot(t) : c(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = it(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return T(o)
      }

      function ft(t, e) {
        const n = J(t);
        return !(n === e || !F(n) || q(n)) && ("fixed" === Z(n).position || ft(n, e))
      }

      function ut(t, e, n) {
        const o = B(e),
          r = H(e),
          i = "fixed" === n,
          l = lt(t, !0, i, e);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = c(0);

        function f() {
          a.x = st(r)
        }
        if (o || !o && !i)
          if (("body" !== M(e) || j(r)) && (s = G(e)), o) {
            const t = lt(e, !0, i, e);
            a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
          } else r && f();
        i && !o && r && f();
        const u = !r || o || i ? c(0) : ct(r, s);
        return {
          x: l.left + s.scrollLeft - a.x - u.x,
          y: l.top + s.scrollTop - a.y - u.y,
          width: l.width,
          height: l.height
        }
      }

      function dt(t) {
        return "static" === Z(t).position
      }

      function ht(t, e) {
        if (!B(t) || "fixed" === Z(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return H(t) === n && (n = n.ownerDocument.body), n
      }

      function mt(t, e) {
        const n = P(t);
        if (N(t)) return n;
        if (!B(t)) {
          let e = J(t);
          for (; e && !q(e);) {
            if (F(e) && !dt(e)) return e;
            e = J(e)
          }
          return n
        }
        let o = ht(t, e);
        for (; o && z(o) && dt(o);) o = ht(o, e);
        return o && q(o) && dt(o) && !$(o) ? n : o || function(t) {
          let e = J(t);
          for (; B(e) && !q(e);) {
            if ($(e)) return e;
            if (N(e)) return null;
            e = J(e)
          }
          return null
        }(t) || n
      }
      const pt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: r
          } = t;
          const i = "fixed" === r,
            l = H(o),
            s = !!e && N(e.floating);
          if (o === l || s && i) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = B(o);
          if ((d || !d && !i) && (("body" !== M(o) || j(l)) && (a = G(o)), d)) {
            const t = lt(o);
            f = ot(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const h = !l || d || i ? c(0) : ct(l, a);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - a.scrollLeft * f.x + u.x + h.x,
            y: n.y * f.y - a.scrollTop * f.y + u.y + h.y
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
          const s = [..."clippingAncestors" === n ? N(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = Q(t, [], !1).filter(t => F(t) && "body" !== M(t)),
                r = null;
              const i = "fixed" === Z(t).position;
              let l = i ? J(t) : t;
              for (; F(l) && !q(l);) {
                const e = Z(l),
                  n = $(l);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && ("absolute" === r.position || "fixed" === r.position) || j(l) && !n && ft(t, l)) ? o = o.filter(t => t !== l) : r = e, l = J(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            c = at(e, s[0], l);
          let a = c.top,
            f = c.right,
            u = c.bottom,
            d = c.left;
          for (let t = 1; t < s.length; t++) {
            const n = at(e, s[t], l);
            a = i(n.top, a), f = r(n.right, f), u = r(n.bottom, u), d = i(n.left, d)
          }
          return {
            width: f - d,
            height: u - a,
            x: d,
            y: a
          }
        },
        getOffsetParent: mt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || mt,
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
        isElement: F,
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
          ancestorResize: c = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = nt(t), h = l || c ? [...d ? Q(d) : [], ...e ? Q(e) : []] : [];
        h.forEach(t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), c && t.addEventListener("resize", n)
        });
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = H(t);

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
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function x(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return a();
                o ? a(!1, o) : n = setTimeout(() => {
                  a(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || gt(d, t.getBoundingClientRect()) || a(), w = !1
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
        let w = u ? lt(t) : null;
        return u && function e() {
          const o = lt(t);
          w && !gt(w, o) && n(), w = o, p = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          h.forEach(t => {
            l && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
          }), null == m || m(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(p)
        }
      }
      const wt = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: r,
                y: i,
                placement: l,
                middlewareData: s
              } = e, c = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = d(n), s = h(n), c = "y" === g(n), a = k.has(l) ? -1 : 1, f = i && c ? -1 : 1, m = u(e, t);
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
                x: r + c.x,
                y: i + c.y,
                data: {
                  ...c,
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
                placement: r,
                platform: i
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
              }, p = await i.detectOverflow(e, a), y = g(d(r)), w = m(y);
              let x = h[w],
                v = h[y];
              if (l) {
                const t = "y" === w ? "bottom" : "right";
                x = f(x + p["y" === w ? "top" : "left"], x, x - p[t])
              }
              if (s) {
                const t = "y" === y ? "bottom" : "right";
                v = f(v + p["y" === y ? "top" : "left"], v, v - p[t])
              }
              const b = c.fn({
                ...e,
                [w]: x,
                [y]: v
              });
              return {
                ...b,
                data: {
                  x: b.x - n,
                  y: b.y - o,
                  enabled: {
                    [w]: l,
                    [y]: s
                  }
                }
              }
            }
          }
        },
        vt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: r,
                middlewareData: i,
                rects: l,
                initialPlacement: s,
                platform: c,
                elements: a
              } = e, {
                mainAxis: f = !0,
                crossAxis: m = !0,
                fallbackPlacements: A,
                fallbackStrategy: T = "bestFit",
                fallbackAxisSideDirection: D = "none",
                flipAlignment: S = !0,
                ...L
              } = u(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const O = d(r),
                k = g(s),
                C = d(s) === s,
                M = await (null == c.isRTL ? void 0 : c.isRTL(a.floating)),
                P = A || (C || !S ? [E(s)] : function(t) {
                  const e = E(t);
                  return [w(t), e, w(e)]
                }(s)),
                H = "none" !== D;
              !A && H && P.push(... function(t, e, n, o) {
                const r = h(t);
                let i = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? v : x : e ? x : v;
                    case "left":
                    case "right":
                      return e ? b : R;
                    default:
                      return []
                  }
                }(d(t), "start" === n, o);
                return r && (i = i.map(t => t + "-" + r), e && (i = i.concat(i.map(w)))), i
              }(s, S, D, M));
              const _ = [s, ...P],
                F = await c.detectOverflow(e, L),
                B = [];
              let W = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && B.push(F[O]), m) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = h(t),
                    r = y(t),
                    i = p(r);
                  let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (l = E(l)), [l, E(l)]
                }(r, l, M);
                B.push(F[t[0]], F[t[1]])
              }
              if (W = [...W, {
                  placement: r,
                  overflows: B
                }], !B.every(t => t <= 0)) {
                var j, z;
                const t = ((null == (j = i.flip) ? void 0 : j.index) || 0) + 1,
                  e = _[t];
                if (e && ("alignment" !== m || k === g(e) || W.every(t => g(t.placement) !== k || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: W
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (z = W.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : z.placement;
                if (!n) switch (T) {
                  case "bestFit": {
                    var N;
                    const t = null == (N = W.filter(t => {
                      if (H) {
                        const e = g(t.placement);
                        return e === k || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : N[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = s
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
        bt = function(t) {
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
              } = u(t, e), p = await c.detectOverflow(e, m), y = d(l), w = h(l), x = "y" === g(l), {
                width: v,
                height: b
              } = s.floating;
              let R, E;
              "top" === y || "bottom" === y ? (R = y, E = w === (await (null == c.isRTL ? void 0 : c.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (E = y, R = "end" === w ? "top" : "bottom");
              const A = b - p.top - p.bottom,
                T = v - p.left - p.right,
                D = r(b - p[R], A),
                S = r(v - p[E], T),
                L = !e.middlewareData.shift;
              let O = D,
                k = S;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (k = T), null != (o = e.middlewareData.shift) && o.enabled.y && (O = A), L && !w) {
                const t = i(p.left, 0),
                  e = i(p.right, 0),
                  n = i(p.top, 0),
                  o = i(p.bottom, 0);
                x ? k = v - 2 * (0 !== t || 0 !== e ? t + e : i(p.left, p.right)) : O = b - 2 * (0 !== n || 0 !== o ? n + o : i(p.top, p.bottom))
              }
              await f({
                ...e,
                availableWidth: k,
                availableHeight: O
              });
              const C = await c.getDimensions(a.floating);
              return v !== C.width || b !== C.height ? {
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
                strategy: r = "referenceHidden",
                ...i
              } = u(t, e);
              switch (r) {
                case "referenceHidden": {
                  const t = L(await o.detectOverflow(e, {
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
                  const t = L(await o.detectOverflow(e, {
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
        Et = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: l,
              platform: s,
              elements: c,
              middlewareData: a
            } = e, {
              element: d,
              padding: m = 0
            } = u(t, e) || {};
            if (null == d) return {};
            const g = A(m),
              w = {
                x: n,
                y: o
              },
              x = y(i),
              v = p(x),
              b = await s.getDimensions(d),
              R = "y" === x,
              E = R ? "top" : "left",
              T = R ? "bottom" : "right",
              D = R ? "clientHeight" : "clientWidth",
              S = l.reference[v] + l.reference[x] - w[x] - l.floating[v],
              L = w[x] - l.reference[x],
              O = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(d));
            let k = O ? O[D] : 0;
            k && await (null == s.isElement ? void 0 : s.isElement(O)) || (k = c.floating[D] || l.floating[v]);
            const C = S / 2 - L / 2,
              M = k / 2 - b[v] / 2 - 1,
              P = r(g[E], M),
              H = r(g[T], M),
              _ = P,
              F = k - b[v] - H,
              B = k / 2 - b[v] / 2 + C,
              W = f(_, B, F),
              j = !a.arrow && null != h(i) && B !== W && l.reference[v] / 2 - (B < _ ? P : H) - b[v] / 2 < 0,
              z = j ? B < _ ? B - _ : B - F : 0;
            return {
              [x]: w[x] + z,
              data: {
                [x]: W,
                centerOffset: B - W - z,
                ...j && {
                  alignmentOffset: z
                }
              },
              reset: j
            }
          }
        }),
        At = function(t) {
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
                offset: s = 0,
                mainAxis: c = !0,
                crossAxis: a = !0
              } = u(t, e), f = {
                x: n,
                y: o
              }, h = g(r), p = m(h);
              let y = f[p],
                w = f[h];
              const x = u(s, e),
                v = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
                };
              if (c) {
                const t = "y" === p ? "height" : "width",
                  e = i.reference[p] - i.floating[t] + v.mainAxis,
                  n = i.reference[p] + i.reference[t] - v.mainAxis;
                y < e ? y = e : y > n && (y = n)
              }
              if (a) {
                var b, R;
                const t = "y" === p ? "width" : "height",
                  e = k.has(d(r)),
                  n = i.reference[h] - i.floating[t] + (e && (null == (b = l.offset) ? void 0 : b[h]) || 0) + (e ? 0 : v.crossAxis),
                  o = i.reference[h] + i.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[h]) || 0) - (e ? v.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [p]: y,
                [h]: w
              }
            }
          }
        },
        Tt = (t, e, n) => {
          const o = new Map,
            r = {
              platform: pt,
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
            } = n, s = l.detectOverflow ? l : {
              ...l,
              detectOverflow: S
            }, c = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let a = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = D(a, o, c),
              d = o,
              h = 0;
            const m = {};
            for (let n = 0; n < i.length; n++) {
              const p = i[n];
              if (!p) continue;
              const {
                name: g,
                fn: y
              } = p, {
                x: w,
                y: x,
                data: v,
                reset: b
              } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: m,
                rects: a,
                platform: s,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != w ? w : f, u = null != x ? x : u, m[g] = {
                ...m[g],
                ...v
              }, b && h < 50 && (h++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (a = !0 === b.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = D(a, d, c))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: r,
              middlewareData: m
            }
          })(t, e, {
            ...r,
            platform: i
          })
        }
    },
    17966(t, e, n) {
      n.d(e, {
        we: () => u
      });
      var o = n(10376),
        r = n(93082),
        i = n(84017),
        l = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function s(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        let n, o, r;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (o = n; 0 !== o--;)
              if (!s(t[o], e[o])) return !1;
            return !0
          }
          if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length) return !1;
          for (o = n; 0 !== o--;)
            if (!{}.hasOwnProperty.call(e, r[o])) return !1;
          for (o = n; 0 !== o--;) {
            const n = r[o];
            if (!("_owner" === n && t.$$typeof || s(t[n], e[n]))) return !1
          }
          return !0
        }
        return t != t && e != e
      }

      function c(t) {
        return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function a(t, e) {
        const n = c(t);
        return Math.round(e * n) / n
      }

      function f(t) {
        const e = r.useRef(t);
        return l(() => {
          e.current = t
        }), e
      }

      function u(t) {
        void 0 === t && (t = {});
        const {
          placement: e = "bottom",
          strategy: n = "absolute",
          middleware: u = [],
          platform: d,
          elements: {
            reference: h,
            floating: m
          } = {},
          transform: p = !0,
          whileElementsMounted: g,
          open: y
        } = t, [w, x] = r.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: e,
          middlewareData: {},
          isPositioned: !1
        }), [v, b] = r.useState(u);
        s(v, u) || b(u);
        const [R, E] = r.useState(null), [A, T] = r.useState(null), D = r.useCallback(t => {
          t !== k.current && (k.current = t, E(t))
        }, []), S = r.useCallback(t => {
          t !== C.current && (C.current = t, T(t))
        }, []), L = h || R, O = m || A, k = r.useRef(null), C = r.useRef(null), M = r.useRef(w), P = null != g, H = f(g), _ = f(d), F = f(y), B = r.useCallback(() => {
          if (!k.current || !C.current) return;
          const t = {
            placement: e,
            strategy: n,
            middleware: v
          };
          _.current && (t.platform = _.current), (0, o.rD)(k.current, C.current, t).then(t => {
            const e = {
              ...t,
              isPositioned: !1 !== F.current
            };
            W.current && !s(M.current, e) && (M.current = e, i.flushSync(() => {
              x(e)
            }))
          })
        }, [v, e, n, _, F]);
        l(() => {
          !1 === y && M.current.isPositioned && (M.current.isPositioned = !1, x(t => ({
            ...t,
            isPositioned: !1
          })))
        }, [y]);
        const W = r.useRef(!1);
        l(() => (W.current = !0, () => {
          W.current = !1
        }), []), l(() => {
          if (L && (k.current = L), O && (C.current = O), L && O) {
            if (H.current) return H.current(L, O, B);
            B()
          }
        }, [L, O, B, H, P]);
        const j = r.useMemo(() => ({
            reference: k,
            floating: C,
            setReference: D,
            setFloating: S
          }), [D, S]),
          z = r.useMemo(() => ({
            reference: L,
            floating: O
          }), [L, O]),
          N = r.useMemo(() => {
            const t = {
              position: n,
              left: 0,
              top: 0
            };
            if (!z.floating) return t;
            const e = a(z.floating, w.x),
              o = a(z.floating, w.y);
            return p ? {
              ...t,
              transform: "translate(" + e + "px, " + o + "px)",
              ...c(z.floating) >= 1.5 && {
                willChange: "transform"
              }
            } : {
              position: n,
              left: e,
              top: o
            }
          }, [n, p, z.floating, w.x, w.y]);
        return r.useMemo(() => ({
          ...w,
          update: B,
          refs: j,
          elements: z,
          floatingStyles: N
        }), [w, B, j, z, N])
      }
      n.d(e, ["BN", 0, (t, e) => {
        const n = (0, o.BN)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "ER", 0, (t, e) => ({
        fn: (0, o.ER)(t).fn,
        options: [t, e]
      }), "Ej", 0, (t, e) => {
        const n = (0, o.Ej)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "UE", 0, (t, e) => {
        const n = (t => ({
          name: "arrow",
          options: t,
          fn(e) {
            const {
              element: n,
              padding: r
            } = "function" == typeof t ? t(e) : t;
            return n && (i = n, {}.hasOwnProperty.call(i, "current")) ? null != n.current ? (0, o.UE)({
              element: n.current,
              padding: r
            }).fn(e) : {} : n ? (0, o.UE)({
              element: n,
              padding: r
            }).fn(e) : {};
            var i
          }
        }))(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "UU", 0, (t, e) => {
        const n = (0, o.UU)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "cY", 0, (t, e) => {
        const n = (0, o.cY)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "jD", 0, (t, e) => {
        const n = (0, o.jD)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }])
    },
    99136(t, e, n) {
      n.d(e, {
        jH: () => i
      });
      var o = n(93082),
        r = (n(39793), o.createContext(void 0));

      function i(t) {
        const e = o.useContext(r);
        return t || e || "ltr"
      }
    },
    52184(t, e, n) {
      n.d(e, {
        Z: () => r
      });
      var o = n(93082);

      function r(t) {
        const e = o.useRef({
          value: t,
          previous: t
        });
        return o.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t])
      }
    },
    5024(t, e, n) {
      n.d(e, {
        X: () => i
      });
      var o = n(93082),
        r = n(10198);

      function i(t) {
        const [e, n] = o.useState(void 0);
        return (0, r.N)(() => {
          if (t) {
            n({
              width: t.offsetWidth,
              height: t.offsetHeight
            });
            const e = new ResizeObserver(e => {
              if (!Array.isArray(e)) return;
              if (!e.length) return;
              const o = e[0];
              let r, i;
              if ("borderBoxSize" in o) {
                const t = o.borderBoxSize,
                  e = Array.isArray(t) ? t[0] : t;
                r = e.inlineSize, i = e.blockSize
              } else r = t.offsetWidth, i = t.offsetHeight;
              n({
                width: r,
                height: i
              })
            });
            return e.observe(t, {
              box: "border-box"
            }), () => e.unobserve(t)
          }
          n(void 0)
        }, [t]), e
      }
    }
  }
]);