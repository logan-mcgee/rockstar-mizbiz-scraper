try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "fa6a4803-f444-4517-84e1-8eb90f7288df", t._sentryDebugIdIdentifier = "sentry-dbid-fa6a4803-f444-4517-84e1-8eb90f7288df")
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
  [5762], {
    60853(t, e, n) {
      n.d(e, {
        UE: () => Rt,
        ll: () => gt,
        rD: () => At,
        UU: () => xt,
        jD: () => bt,
        ER: () => Et,
        cY: () => yt,
        BN: () => wt,
        Ej: () => vt
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

      function m(t) {
        return t.split("-")[1]
      }

      function h(t) {
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
        return h(g(t))
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
          var e, n, o, r;
          return {
            top: null != (e = t.top) ? e : 0,
            right: null != (n = t.right) ? n : 0,
            bottom: null != (o = t.bottom) ? o : 0,
            left: null != (r = t.left) ? r : 0
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

      function L(t, e, n) {
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
          h = o[s] / 2 - r[s] / 2;
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
        const x = m(e);
        return x && (w[l] += h * ("end" === x ? 1 : -1) * (n && a ? -1 : 1)), w
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
          altBoundary: m = !1,
          padding: h = 0
        } = u(e, t), p = A(h), g = s[m ? "floating" === d ? "reference" : "floating" : d], y = T(await i.getClippingRect({
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

      function O(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function D(t) {
        return o.some(e => t[e] >= 0)
      }
      const k = new Set(["left", "top"]);

      function C() {
        return "undefined" != typeof window
      }

      function P(t) {
        return _(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function M(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function H(t) {
        var e;
        return null == (e = (_(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function _(t) {
        return !!C() && (t instanceof Node || t instanceof M(t).Node)
      }

      function F(t) {
        return !!C() && (t instanceof Element || t instanceof M(t).Element)
      }

      function j(t) {
        return !!C() && (t instanceof HTMLElement || t instanceof M(t).HTMLElement)
      }

      function B(t) {
        return !(!C() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof M(t).ShadowRoot)
      }

      function W(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = G(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== r && "contents" !== r
      }

      function z(t) {
        return /^(table|td|th)$/.test(P(t))
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
      const V = /transform|translate|scale|rotate|perspective|filter/,
        U = /paint|layout|strict|content/,
        I = t => !!t && "none" !== t;
      let Y;

      function $(t) {
        const e = F(t) ? G(t) : t;
        return I(e.transform) || I(e.translate) || I(e.scale) || I(e.rotate) || I(e.perspective) || !X() && (I(e.backdropFilter) || I(e.filter)) || V.test(e.willChange || "") || U.test(e.contain || "")
      }

      function X() {
        return null == Y && (Y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Y
      }

      function q(t) {
        return /^(html|body|#document)$/.test(P(t))
      }

      function G(t) {
        return M(t).getComputedStyle(t)
      }

      function Z(t) {
        return F(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function J(t) {
        if ("html" === P(t)) return t;
        const e = t.assignedSlot || t.parentNode || B(t) && t.host || H(t);
        return B(e) ? e.host : e
      }

      function K(t) {
        const e = J(t);
        return q(e) ? (t.ownerDocument || t).body : j(e) && W(e) ? e : K(e)
      }

      function Q(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = K(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = M(r);
        if (i) {
          const t = tt(l);
          return e.concat(l, l.visualViewport || [], W(r) ? r : [], t && n ? Q(t) : [])
        }
        return e.concat(r, Q(r, [], n))
      }

      function tt(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function et(t) {
        const e = G(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = j(t),
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
        if (!j(e)) return c(1);
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
        const e = M(t);
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
          return void 0 === e && (e = !1), !!n && e && n === M(t)
        }(i, n, o) ? it(i) : c(0);
        let a = (r.left + s.x) / l.x,
          f = (r.top + s.y) / l.y,
          u = r.width / l.x,
          d = r.height / l.y;
        if (i && o) {
          const t = M(i),
            e = F(o) ? M(o) : o;
          let n = t,
            r = tt(n);
          for (; r && e !== n;) {
            const t = ot(r),
              e = r.getBoundingClientRect(),
              o = G(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            a *= t.x, f *= t.y, u *= t.x, d *= t.y, a += i, f += l, n = M(r), r = tt(n)
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
        const n = Z(t).scrollLeft;
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
        if ("viewport" === e || "layoutViewport" === e) o = function(t, e, n) {
          void 0 === n && (n = "viewport");
          const o = "layoutViewport" === n,
            r = M(t),
            i = H(t),
            l = r.visualViewport;
          let s = i.clientWidth,
            c = i.clientHeight,
            a = 0,
            f = 0;
          if (l) {
            const t = !X() || "fixed" === e;
            o ? t || (a = -l.offsetLeft, f = -l.offsetTop) : (s = l.width, c = l.height, t && (a = l.offsetLeft, f = l.offsetTop))
          }
          if (st(i) <= 0) {
            const t = i.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              o = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              r = Math.abs(i.clientWidth - e.clientWidth - o),
              l = "stable both-edges" === getComputedStyle(i).scrollbarGutter ? r / 2 : r;
            l <= 25 && (s -= l)
          }
          return {
            width: s,
            height: c,
            x: a,
            y: f
          }
        }(t, n, e);
        else if ("document" === e) o = function(t) {
          const e = Z(t),
            n = t.ownerDocument.body,
            o = i(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            r = i(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let l = -e.scrollLeft + st(t);
          const s = -e.scrollTop;
          return "rtl" === G(n).direction && (l += i(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: r,
            x: l,
            y: s
          }
        }(H(t));
        else if (F(e)) o = function(t, e) {
          const n = lt(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = ot(t);
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

      function ft(t, e, n) {
        const o = j(e),
          r = H(e),
          i = "fixed" === n,
          l = lt(t, !0, i, e);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = c(0);
        if ((o || !i) && (("body" !== P(e) || W(r)) && (s = Z(e)), o)) {
          const t = lt(e, !0, i, e);
          a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
        }!o && r && (a.x = st(r));
        const f = !r || o || i ? c(0) : ct(r, s);
        return {
          x: l.left + s.scrollLeft - a.x - f.x,
          y: l.top + s.scrollTop - a.y - f.y,
          width: l.width,
          height: l.height
        }
      }

      function ut(t) {
        return "static" === G(t).position
      }

      function dt(t, e) {
        if (!j(t) || "fixed" === G(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return H(t) === n && (n = n.ownerDocument.body), n
      }

      function mt(t, e) {
        const n = M(t);
        if (N(t)) return n;
        if (!j(t)) {
          let e = J(t);
          for (; e && !q(e);) {
            if (F(e) && !ut(e)) return e;
            e = J(e)
          }
          return n
        }
        let o = dt(t, e);
        for (; o && z(o) && ut(o);) o = dt(o, e);
        return o && q(o) && ut(o) && !$(o) ? n : o || function(t) {
          let e = J(t);
          for (; j(e) && !q(e);) {
            if ($(e)) return e;
            if (N(e)) return null;
            e = J(e)
          }
          return null
        }(t) || n
      }
      const ht = {
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
            d = j(o);
          if ((d || !i) && (("body" !== P(o) || W(l)) && (a = Z(o)), d)) {
            const t = lt(o);
            f = ot(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const m = !l || d || i ? c(0) : ct(l, a);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - a.scrollLeft * f.x + u.x + m.x,
            y: n.y * f.y - a.scrollTop * f.y + u.y + m.y
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
              let o = Q(t, [], !1).filter(t => F(t) && "body" !== P(t)),
                r = null;
              const i = "fixed" === G(t).position;
              let l = i ? J(t) : t;
              for (; F(l) && !q(l);) {
                const t = G(l),
                  e = $(l),
                  n = r ? r.position : i ? "fixed" : "";
                e || "fixed" !== n && ("absolute" !== n || "static" !== t.position) ? r = t : o = o.filter(t => t !== l), l = J(l)
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
            reference: ft(t.reference, await e(t.floating), t.strategy),
            floating: {
              x: 0,
              y: 0,
              width: o.width,
              height: o.height
            }
          }
        },
        getClientRects: function(t) {
          return t.getClientRects ? Array.from(t.getClientRects()) : []
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
          return "rtl" === G(t).direction
        }
      };

      function pt(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function gt(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: c = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = nt(t), m = l || c ? [...d ? Q(d) : [], ...e ? Q(e) : []] : [];
        m.forEach(t => {
          l && t.addEventListener("scroll", n), c && t.addEventListener("resize", n)
        });
        const h = d && f ? function(t, e, n) {
          let o, l = null;
          const c = H(t);

          function a() {
            var t;
            clearTimeout(o), null == (t = l) || t.disconnect(), l = null
          }

          function f(n, u) {
            void 0 === n && (n = !1), void 0 === u && (u = 1), a();
            const d = t.getBoundingClientRect(),
              {
                left: m,
                top: h,
                width: p,
                height: g
              } = d;
            if (n || e(), !p || !g) return;
            const y = {
              rootMargin: -s(h) + "px " + -s(c.clientWidth - (m + p)) + "px " + -s(c.clientHeight - (h + g)) + "px " + -s(m) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function x(e) {
              const n = e[0].intersectionRatio;
              if (!pt(d, t.getBoundingClientRect())) return f();
              if (n !== u) {
                if (!w) return f();
                n ? f(!1, n) : o = setTimeout(() => {
                  f(!1, 1e-7)
                }, 1e3)
              }
              w = !1
            }
            try {
              l = new IntersectionObserver(x, {
                ...y,
                root: c.ownerDocument
              })
            } catch (t) {
              l = new IntersectionObserver(x, y)
            }
            l.observe(t)
          }
          const u = M(t),
            d = () => f(n);
          return u.addEventListener("resize", d), f(!0), () => {
            u.removeEventListener("resize", d), a()
          }
        }(d, n, c) : null;
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
          w && !pt(w, o) && n(), w = o, p = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          m.forEach(t => {
            l && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
          }), null == h || h(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(p)
        }
      }
      const yt = function(t) {
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
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = d(n), s = m(n), c = "y" === g(n), a = k.has(l) ? -1 : 1, f = i && c ? -1 : 1, h = u(e, t);
                let {
                  mainAxis: p,
                  crossAxis: y,
                  alignmentAxis: w
                } = "number" == typeof h ? {
                  mainAxis: h,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: h.mainAxis || 0,
                  crossAxis: h.crossAxis || 0,
                  alignmentAxis: h.alignmentAxis
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
        wt = function(t) {
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
              } = u(t, e), d = {
                x: n,
                y: o
              }, m = await i.detectOverflow(e, a), p = g(r), y = h(p);
              let w = d[y],
                x = d[p];
              const v = (t, e) => f(e + m["y" === t ? "top" : "left"], e, e - m["y" === t ? "bottom" : "right"]);
              l && (w = v(y, w)), s && (x = v(p, x));
              const b = c.fn({
                ...e,
                [y]: w,
                [p]: x
              });
              return {
                ...b,
                data: {
                  x: b.x - n,
                  y: b.y - o,
                  enabled: {
                    [y]: l,
                    [p]: s
                  }
                }
              }
            }
          }
        },
        xt = function(t) {
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
                crossAxis: h = !0,
                fallbackPlacements: A,
                fallbackStrategy: T = "bestFit",
                fallbackAxisSideDirection: L = "none",
                flipAlignment: S = !0,
                ...O
              } = u(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const D = d(r),
                k = g(s),
                C = d(s) === s,
                P = await (null == c.isRTL ? void 0 : c.isRTL(a.floating)),
                M = A || (C || !S ? [E(s)] : function(t) {
                  const e = E(t);
                  return [w(t), e, w(e)]
                }(s)),
                H = "none" !== L;
              !A && H && M.push(... function(t, e, n, o) {
                const r = m(t);
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
              }(s, S, L, P));
              const _ = [s, ...M],
                F = await c.detectOverflow(e, O),
                j = [];
              let B = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && j.push(F[D]), h) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = y(t),
                    i = p(r);
                  let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (l = E(l)), [l, E(l)]
                }(r, l, P);
                j.push(F[t[0]], F[t[1]])
              }
              if (B = [...B, {
                  placement: r,
                  overflows: j
                }], !j.every(t => t <= 0)) {
                var W, z;
                const t = ((null == (W = i.flip) ? void 0 : W.index) || 0) + 1,
                  e = _[t];
                if (e && ("alignment" !== h || k === g(e) || B.every(t => g(t.placement) !== k || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: B
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (z = B.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : z.placement;
                if (!n) switch (T) {
                  case "bestFit": {
                    var N;
                    const t = null == (N = B.filter(t => {
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
        vt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              const {
                placement: n,
                rects: o,
                platform: l,
                elements: s
              } = e, {
                apply: c = () => {},
                ...a
              } = u(t, e), f = await l.detectOverflow(e, a), h = d(n), p = m(n), y = "y" === g(n), {
                width: w,
                height: x
              } = o.floating;
              let v, b;
              "top" === h || "bottom" === h ? (v = h, b = p === (await (null == l.isRTL ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = h, v = "end" === p ? "top" : "bottom");
              const R = x - f.top - f.bottom,
                E = w - f.left - f.right,
                A = r(x - f[v], R),
                T = r(w - f[b], E),
                L = e.middlewareData.shift,
                S = !L;
              let O = A,
                D = T;
              null != L && L.enabled.x && (D = E), null != L && L.enabled.y && (O = R), S && !p && (y ? D = w - 2 * i(f.left, f.right) : O = x - 2 * i(f.top, f.bottom)), await c({
                ...e,
                availableWidth: D,
                availableHeight: O
              });
              const k = await l.getDimensions(s.floating);
              return w !== k.width || x !== k.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        bt = function(t) {
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
                  const t = O(await o.detectOverflow(e, {
                    ...i,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: D(t)
                    }
                  }
                }
                case "escaped": {
                  const t = O(await o.detectOverflow(e, {
                    ...i,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: D(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Rt = t => ({
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
              padding: h = 0
            } = u(t, e) || {};
            if (null == d) return {};
            const g = A(h),
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
              L = R ? "clientHeight" : "clientWidth",
              S = l.reference[v] + l.reference[x] - w[x] - l.floating[v],
              O = w[x] - l.reference[x],
              D = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(d));
            let k = D ? D[L] : 0;
            k && await (null == s.isElement ? void 0 : s.isElement(D)) || (k = c.floating[L] || l.floating[v]);
            const C = S / 2 - O / 2,
              P = k / 2 - b[v] / 2 - 1,
              M = r(g[E], P),
              H = r(g[T], P),
              _ = k - b[v] - H,
              F = k / 2 - b[v] / 2 + C,
              j = f(M, F, _),
              B = !a.arrow && null != m(i) && F !== j && l.reference[v] / 2 - (F < M ? M : H) - b[v] / 2 < 0,
              W = B ? F < M ? F - M : F - _ : 0;
            return {
              [x]: w[x] + W,
              data: {
                [x]: j,
                centerOffset: F - j - W,
                ...B && {
                  alignmentOffset: W
                }
              },
              reset: B
            }
          }
        }),
        Et = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              var n, o;
              const {
                x: r,
                y: i,
                placement: l,
                rects: s,
                middlewareData: c
              } = e, {
                offset: a = 0,
                mainAxis: f = !0,
                crossAxis: m = !0
              } = u(t, e), p = {
                x: r,
                y: i
              }, y = g(l), w = h(y);
              let x = p[w],
                v = p[y];
              const b = u(a, e),
                R = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: null != (n = b.mainAxis) ? n : 0,
                  crossAxis: null != (o = b.crossAxis) ? o : 0
                };
              if (f) {
                const t = "y" === w ? "height" : "width",
                  e = s.reference[w] - s.floating[t] + R.mainAxis,
                  n = s.reference[w] + s.reference[t] - R.mainAxis;
                x < e ? x = e : x > n && (x = n)
              }
              if (m) {
                var E, A;
                const t = "y" === w ? "width" : "height",
                  e = k.has(d(l)),
                  n = s.reference[y] - s.floating[t] + (e && (null == (E = c.offset) ? void 0 : E[y]) || 0) + (e ? 0 : R.crossAxis),
                  o = s.reference[y] + s.reference[t] + (e ? 0 : (null == (A = c.offset) ? void 0 : A[y]) || 0) - (e ? R.crossAxis : 0);
                v < n ? v = n : v > o && (v = o)
              }
              return {
                [w]: x,
                [y]: v
              }
            }
          }
        },
        At = (t, e, n) => {
          const o = new Map,
            r = null != n ? n : {},
            i = {
              ...ht,
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
              } = L(a, o, c),
              d = o,
              m = 0;
            const h = {};
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
                middlewareData: h,
                rects: a,
                platform: s,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != w ? w : f, u = null != x ? x : u, h[g] = {
                ...h[g],
                ...v
              }, b && m < 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (a = !0 === b.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = L(a, d, c))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: r,
              middlewareData: h
            }
          })(t, e, {
            ...r,
            platform: i
          })
        }
    },
    53213(t, e, n) {
      n.d(e, {
        we: () => u
      });
      var o = n(60853),
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
            reference: m,
            floating: h
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
        const [R, E] = r.useState(null), [A, T] = r.useState(null), L = r.useCallback(t => {
          t !== k.current && (k.current = t, E(t))
        }, []), S = r.useCallback(t => {
          t !== C.current && (C.current = t, T(t))
        }, []), O = m || R, D = h || A, k = r.useRef(null), C = r.useRef(null), P = r.useRef(w), M = null != g, H = f(g), _ = f(d), F = f(y), j = r.useCallback(() => {
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
            B.current && !s(P.current, e) && (P.current = e, i.flushSync(() => {
              x(e)
            }))
          })
        }, [v, e, n, _, F]);
        l(() => {
          !1 === y && P.current.isPositioned && (P.current.isPositioned = !1, x(t => ({
            ...t,
            isPositioned: !1
          })))
        }, [y]);
        const B = r.useRef(!1);
        l(() => (B.current = !0, () => {
          B.current = !1
        }), []), l(() => {
          if (O && (k.current = O), D && (C.current = D), O && D) {
            if (H.current) return H.current(O, D, j);
            j()
          }
        }, [O, D, j, H, M]);
        const W = r.useMemo(() => ({
            reference: k,
            floating: C,
            setReference: L,
            setFloating: S
          }), [L, S]),
          z = r.useMemo(() => ({
            reference: O,
            floating: D
          }), [O, D]),
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
          update: j,
          refs: W,
          elements: z,
          floatingStyles: N
        }), [w, j, W, z, N])
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
    12430(t, e, n) {
      n.d(e, {
        jH: () => l
      });
      var o = n(93082),
        r = (n(39793), Object.defineProperty),
        i = o.createContext(void 0);

      function l(t) {
        const e = o.useContext(i);
        return t || e || "ltr"
      }
      r(l, "name", {
        value: "useDirection",
        configurable: !0
      })
    },
    19046(t, e, n) {
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
      }(0, Object.defineProperty)(r, "name", {
        value: "usePrevious",
        configurable: !0
      })
    },
    7078(t, e, n) {
      n.d(e, {
        X: () => i
      });
      var o = n(93082),
        r = n(9608);

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
      }(0, Object.defineProperty)(i, "name", {
        value: "useSize",
        configurable: !0
      })
    }
  }
]);