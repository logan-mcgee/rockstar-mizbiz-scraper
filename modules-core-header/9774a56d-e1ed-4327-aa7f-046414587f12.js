try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9774a56d-e1ed-4327-aa7f-046414587f12", t._sentryDebugIdIdentifier = "sentry-dbid-9774a56d-e1ed-4327-aa7f-046414587f12")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7145], {
    15234: (t, e, n) => {
      n.d(e, {
        Oh: () => i
      });
      var r = n(71127),
        o = 0;

      function i() {
        r.useEffect(() => {
          const t = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", t[0] ?? a()), document.body.insertAdjacentElement("beforeend", t[1] ?? a()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), o--
          }
        }, [])
      }

      function a() {
        const t = document.createElement("span");
        return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t
      }
    },
    60528: (t, e, n) => {
      n.d(e, {
        X: () => i
      });
      var r = n(71127),
        o = n(63155);

      function i(t) {
        const [e, n] = r.useState(void 0);
        return (0, o.N)(() => {
          if (t) {
            n({
              width: t.offsetWidth,
              height: t.offsetHeight
            });
            const e = new ResizeObserver(e => {
              if (!Array.isArray(e)) return;
              if (!e.length) return;
              const r = e[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const t = r.borderBoxSize,
                  e = Array.isArray(t) ? t[0] : t;
                o = e.inlineSize, i = e.blockSize
              } else o = t.offsetWidth, i = t.offsetHeight;
              n({
                width: o,
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
    },
    94926: (t, e, n) => {
      n.d(e, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        a = 0,
        l = function(t) {
          return t && (t.host || l(t.parentNode))
        },
        s = function(t, e, n) {
          void 0 === n && (n = "data-aria-hidden");
          var s = Array.from(Array.isArray(t) ? t : [t]),
            c = e || function(t) {
              return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body
            }(t);
          return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live], script"))), function(t, e, n, s) {
            var c = function(t, e) {
              return e.map(function(e) {
                if (t.contains(e)) return e;
                var n = l(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
              }).filter(function(t) {
                return Boolean(t)
              })
            }(e, Array.isArray(t) ? t : [t]);
            i[n] || (i[n] = new WeakMap);
            var f = i[n],
              u = [],
              d = new Set,
              p = new Set(c),
              h = function(t) {
                t && !d.has(t) && (d.add(t), h(t.parentNode))
              };
            c.forEach(h);
            var m = function(t) {
              t && !p.has(t) && Array.prototype.forEach.call(t.children, function(t) {
                if (d.has(t)) m(t);
                else try {
                  var e = t.getAttribute(s),
                    i = null !== e && "false" !== e,
                    a = (r.get(t) || 0) + 1,
                    l = (f.get(t) || 0) + 1;
                  r.set(t, a), f.set(t, l), u.push(t), 1 === a && i && o.set(t, !0), 1 === l && t.setAttribute(n, "true"), i || t.setAttribute(s, "true")
                } catch (e) {
                  console.error("aria-hidden: cannot operate on ", t, e)
                }
              })
            };
            return m(e), d.clear(), a++,
              function() {
                u.forEach(function(t) {
                  var e = r.get(t) - 1,
                    i = f.get(t) - 1;
                  r.set(t, e), f.set(t, i), e || (o.has(t) || t.removeAttribute(s), o.delete(t)), i || t.removeAttribute(n)
                }), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(s, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    96077: (t, e, n) => {
      n.d(e, {
        Mz: () => xe,
        i3: () => ve,
        UC: () => be,
        bL: () => we,
        Bk: () => ne
      });
      var r = n(71127);
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        a = Math.max,
        l = Math.round,
        s = Math.floor,
        c = t => ({
          x: t,
          y: t
        }),
        f = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        u = {
          start: "end",
          end: "start"
        };

      function d(t, e, n) {
        return a(t, i(e, n))
      }

      function p(t, e) {
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

      function y(t) {
        return "y" === t ? "height" : "width"
      }
      const w = new Set(["top", "bottom"]);

      function x(t) {
        return w.has(h(t)) ? "y" : "x"
      }

      function b(t) {
        return g(x(t))
      }

      function v(t) {
        return t.replace(/start|end/g, t => u[t])
      }
      const A = ["left", "right"],
        R = ["right", "left"],
        S = ["top", "bottom"],
        E = ["bottom", "top"];

      function P(t) {
        return t.replace(/left|right|bottom|top/g, t => f[t])
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

      function k(t) {
        const {
          x: e,
          y: n,
          width: r,
          height: o
        } = t;
        return {
          width: r,
          height: o,
          top: n,
          left: e,
          right: e + r,
          bottom: n + o,
          x: e,
          y: n
        }
      }

      function D(t, e, n) {
        let {
          reference: r,
          floating: o
        } = t;
        const i = x(e),
          a = b(e),
          l = y(a),
          s = h(e),
          c = "y" === i,
          f = r.x + r.width / 2 - o.width / 2,
          u = r.y + r.height / 2 - o.height / 2,
          d = r[l] / 2 - o[l] / 2;
        let p;
        switch (s) {
          case "top":
            p = {
              x: f,
              y: r.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: f,
              y: r.y + r.height
            };
            break;
          case "right":
            p = {
              x: r.x + r.width,
              y: u
            };
            break;
          case "left":
            p = {
              x: r.x - o.width,
              y: u
            };
            break;
          default:
            p = {
              x: r.x,
              y: r.y
            }
        }
        switch (m(e)) {
          case "start":
            p[a] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            p[a] += d * (n && c ? -1 : 1)
        }
        return p
      }
      async function L(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: l,
          strategy: s
        } = t, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: d = !1,
          padding: h = 0
        } = p(e, t), m = T(h), g = l[d ? "floating" === u ? "reference" : "floating" : u], y = k(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: s
        })), w = "floating" === u ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), b = await (null == i.isElement ? void 0 : i.isElement(x)) && await (null == i.getScale ? void 0 : i.getScale(x)) || {
          x: 1,
          y: 1
        }, v = k(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
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

      function O(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function C(t) {
        return o.some(e => t[e] >= 0)
      }
      const M = new Set(["left", "top"]);

      function _() {
        return "undefined" != typeof window
      }

      function W(t) {
        return B(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function H(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function F(t) {
        var e;
        return null == (e = (B(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function B(t) {
        return !!_() && (t instanceof Node || t instanceof H(t).Node)
      }

      function j(t) {
        return !!_() && (t instanceof Element || t instanceof H(t).Element)
      }

      function N(t) {
        return !!_() && (t instanceof HTMLElement || t instanceof H(t).HTMLElement)
      }

      function z(t) {
        return !(!_() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof H(t).ShadowRoot)
      }
      const $ = new Set(["inline", "contents"]);

      function I(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: r,
          display: o
        } = et(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !$.has(o)
      }
      const V = new Set(["table", "td", "th"]);

      function X(t) {
        return V.has(W(t))
      }
      const Y = [":popover-open", ":modal"];

      function q(t) {
        return Y.some(e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        })
      }
      const G = ["transform", "translate", "scale", "rotate", "perspective"],
        U = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        J = ["paint", "layout", "strict", "content"];

      function K(t) {
        const e = Q(),
          n = j(t) ? et(t) : t;
        return G.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || U.some(t => (n.willChange || "").includes(t)) || J.some(t => (n.contain || "").includes(t))
      }

      function Q() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const Z = new Set(["html", "body", "#document"]);

      function tt(t) {
        return Z.has(W(t))
      }

      function et(t) {
        return H(t).getComputedStyle(t)
      }

      function nt(t) {
        return j(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function rt(t) {
        if ("html" === W(t)) return t;
        const e = t.assignedSlot || t.parentNode || z(t) && t.host || F(t);
        return z(e) ? e.host : e
      }

      function ot(t) {
        const e = rt(t);
        return tt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && I(e) ? e : ot(e)
      }

      function it(t, e, n) {
        var r;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const o = ot(t),
          i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
          a = H(o);
        if (i) {
          const t = at(a);
          return e.concat(a, a.visualViewport || [], I(o) ? o : [], t && n ? it(t) : [])
        }
        return e.concat(o, it(o, [], n))
      }

      function at(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function lt(t) {
        const e = et(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const o = N(t),
          i = o ? t.offsetWidth : n,
          a = o ? t.offsetHeight : r,
          s = l(n) !== i || l(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function st(t) {
        return j(t) ? t : t.contextElement
      }

      function ct(t) {
        const e = st(t);
        if (!N(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = lt(e);
        let a = (i ? l(n.width) : n.width) / r,
          s = (i ? l(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const ft = c(0);

      function ut(t) {
        const e = H(t);
        return Q() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : ft
      }

      function dt(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const o = t.getBoundingClientRect(),
          i = st(t);
        let a = c(1);
        e && (r ? j(r) && (a = ct(r)) : a = ct(t));
        const l = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== H(t)) && e
        }(i, n, r) ? ut(i) : c(0);
        let s = (o.left + l.x) / a.x,
          f = (o.top + l.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const t = H(i),
            e = r && j(r) ? H(r) : r;
          let n = t,
            o = at(n);
          for (; o && r && e !== n;) {
            const t = ct(o),
              e = o.getBoundingClientRect(),
              r = et(o),
              i = e.left + (o.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              a = e.top + (o.clientTop + parseFloat(r.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += a, n = H(o), o = at(n)
          }
        }
        return k({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function pt(t, e) {
        const n = nt(t).scrollLeft;
        return e ? e.left + n : dt(F(t)).left + n
      }

      function ht(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - pt(t, n),
          y: n.top + e.scrollTop
        }
      }
      const mt = new Set(["absolute", "fixed"]);

      function gt(t, e, n) {
        let r;
        if ("viewport" === e) r = function(t, e) {
          const n = H(t),
            r = F(t),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            l = 0,
            s = 0;
          if (o) {
            i = o.width, a = o.height;
            const t = Q();
            (!t || t && "fixed" === e) && (l = o.offsetLeft, s = o.offsetTop)
          }
          const c = pt(r);
          if (c <= 0) {
            const t = r.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              o = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              a = Math.abs(r.clientWidth - e.clientWidth - o);
            a <= 25 && (i -= a)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: a,
            x: l,
            y: s
          }
        }(t, n);
        else if ("document" === e) r = function(t) {
          const e = F(t),
            n = nt(t),
            r = t.ownerDocument.body,
            o = a(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
            i = a(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
          let l = -n.scrollLeft + pt(t);
          const s = -n.scrollTop;
          return "rtl" === et(r).direction && (l += a(e.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: l,
            y: s
          }
        }(F(t));
        else if (j(e)) r = function(t, e) {
          const n = dt(t, !0, "fixed" === e),
            r = n.top + t.clientTop,
            o = n.left + t.clientLeft,
            i = N(t) ? ct(t) : c(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(e, n);
        else {
          const n = ut(t);
          r = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return k(r)
      }

      function yt(t, e) {
        const n = rt(t);
        return !(n === e || !j(n) || tt(n)) && ("fixed" === et(n).position || yt(n, e))
      }

      function wt(t, e, n) {
        const r = N(e),
          o = F(e),
          i = "fixed" === n,
          a = dt(t, !0, i, e);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);

        function f() {
          s.x = pt(o)
        }
        if (r || !r && !i)
          if (("body" !== W(e) || I(o)) && (l = nt(e)), r) {
            const t = dt(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else o && f();
        i && !r && o && f();
        const u = !o || r || i ? c(0) : ht(o, l);
        return {
          x: a.left + l.scrollLeft - s.x - u.x,
          y: a.top + l.scrollTop - s.y - u.y,
          width: a.width,
          height: a.height
        }
      }

      function xt(t) {
        return "static" === et(t).position
      }

      function bt(t, e) {
        if (!N(t) || "fixed" === et(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return F(t) === n && (n = n.ownerDocument.body), n
      }

      function vt(t, e) {
        const n = H(t);
        if (q(t)) return n;
        if (!N(t)) {
          let e = rt(t);
          for (; e && !tt(e);) {
            if (j(e) && !xt(e)) return e;
            e = rt(e)
          }
          return n
        }
        let r = bt(t, e);
        for (; r && X(r) && xt(r);) r = bt(r, e);
        return r && tt(r) && xt(r) && !K(r) ? n : r || function(t) {
          let e = rt(t);
          for (; N(e) && !tt(e);) {
            if (K(e)) return e;
            if (q(e)) return null;
            e = rt(e)
          }
          return null
        }(t) || n
      }
      const At = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: r,
            strategy: o
          } = t;
          const i = "fixed" === o,
            a = F(r),
            l = !!e && q(e.floating);
          if (r === a || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = N(r);
          if ((d || !d && !i) && (("body" !== W(r) || I(a)) && (s = nt(r)), N(r))) {
            const t = dt(r);
            f = ct(r), u.x = t.x + r.clientLeft, u.y = t.y + r.clientTop
          }
          const p = !a || d || i ? c(0) : ht(a, s);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: F,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = t;
          const l = [..."clippingAncestors" === n ? q(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let r = it(t, [], !1).filter(t => j(t) && "body" !== W(t)),
                o = null;
              const i = "fixed" === et(t).position;
              let a = i ? rt(t) : t;
              for (; j(a) && !tt(a);) {
                const e = et(a),
                  n = K(a);
                n || "fixed" !== e.position || (o = null), (i ? !n && !o : !n && "static" === e.position && o && mt.has(o.position) || I(a) && !n && yt(t, a)) ? r = r.filter(t => t !== a) : o = e, a = rt(a)
              }
              return e.set(t, r), r
            }(e, this._c) : [].concat(n), r],
            s = l[0],
            c = l.reduce((t, n) => {
              const r = gt(e, n, o);
              return t.top = a(r.top, t.top), t.right = i(r.right, t.right), t.bottom = i(r.bottom, t.bottom), t.left = a(r.left, t.left), t
            }, gt(e, s, o));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: vt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || vt,
            n = this.getDimensions,
            r = await n(t.floating);
          return {
            reference: wt(t.reference, await e(t.floating), t.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
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
        getScale: ct,
        isElement: j,
        isRTL: function(t) {
          return "rtl" === et(t).direction
        }
      };

      function Rt(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }
      const St = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, r;
              const {
                x: o,
                y: i,
                placement: a,
                middlewareData: l
              } = e, s = await async function(t, e) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = t, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = h(n), l = m(n), s = "y" === x(n), c = M.has(a) ? -1 : 1, f = i && s ? -1 : 1, u = p(e, t);
                let {
                  mainAxis: d,
                  crossAxis: g,
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
                return l && "number" == typeof y && (g = "end" === l ? -1 * y : y), s ? {
                  x: g * f,
                  y: d * c
                } : {
                  x: d * c,
                  y: g * f
                }
              }(e, t);
              return a === (null == (n = l.offset) ? void 0 : n.placement) && null != (r = l.arrow) && r.alignmentOffset ? {} : {
                x: o + s.x,
                y: i + s.y,
                data: {
                  ...s,
                  placement: a
                }
              }
            }
          }
        },
        Et = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: r,
                placement: o
              } = e, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: l = {
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
                ...s
              } = p(t, e), c = {
                x: n,
                y: r
              }, f = await L(e, s), u = x(h(o)), m = g(u);
              let y = c[m],
                w = c[u];
              if (i) {
                const t = "y" === m ? "bottom" : "right";
                y = d(y + f["y" === m ? "top" : "left"], y, y - f[t])
              }
              if (a) {
                const t = "y" === u ? "bottom" : "right";
                w = d(w + f["y" === u ? "top" : "left"], w, w - f[t])
              }
              const b = l.fn({
                ...e,
                [m]: y,
                [u]: w
              });
              return {
                ...b,
                data: {
                  x: b.x - n,
                  y: b.y - r,
                  enabled: {
                    [m]: i,
                    [u]: a
                  }
                }
              }
            }
          }
        },
        Pt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: l,
                platform: s,
                elements: c
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: d,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: w = "none",
                flipAlignment: T = !0,
                ...k
              } = p(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const D = h(o),
                O = x(l),
                C = h(l) === l,
                M = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                _ = d || (C || !T ? [P(l)] : function(t) {
                  const e = P(t);
                  return [v(t), e, v(e)]
                }(l)),
                W = "none" !== w;
              !d && W && _.push(... function(t, e, n, r) {
                const o = m(t);
                let i = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? R : A : e ? A : R;
                    case "left":
                    case "right":
                      return e ? S : E;
                    default:
                      return []
                  }
                }(h(t), "start" === n, r);
                return o && (i = i.map(t => t + "-" + o), e && (i = i.concat(i.map(v)))), i
              }(l, T, w, M));
              const H = [l, ..._],
                F = await L(e, k),
                B = [];
              let j = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && B.push(F[D]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const r = m(t),
                    o = b(t),
                    i = y(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (a = P(a)), [a, P(a)]
                }(o, a, M);
                B.push(F[t[0]], F[t[1]])
              }
              if (j = [...j, {
                  placement: o,
                  overflows: B
                }], !B.every(t => t <= 0)) {
                var N, z;
                const t = ((null == (N = i.flip) ? void 0 : N.index) || 0) + 1,
                  e = H[t];
                if (e && ("alignment" !== u || O === x(e) || j.every(t => x(t.placement) !== O || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: j
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (z = j.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : z.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var $;
                    const t = null == ($ = j.filter(t => {
                      if (W) {
                        const e = x(t.placement);
                        return e === O || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : $[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = l
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        Tt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, r;
              const {
                placement: o,
                rects: l,
                platform: s,
                elements: c
              } = e, {
                apply: f = () => {},
                ...u
              } = p(t, e), d = await L(e, u), g = h(o), y = m(o), w = "y" === x(o), {
                width: b,
                height: v
              } = l.floating;
              let A, R;
              "top" === g || "bottom" === g ? (A = g, R = y === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = g, A = "end" === y ? "top" : "bottom");
              const S = v - d.top - d.bottom,
                E = b - d.left - d.right,
                P = i(v - d[A], S),
                T = i(b - d[R], E),
                k = !e.middlewareData.shift;
              let D = P,
                O = T;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (O = E), null != (r = e.middlewareData.shift) && r.enabled.y && (D = S), k && !y) {
                const t = a(d.left, 0),
                  e = a(d.right, 0),
                  n = a(d.top, 0),
                  r = a(d.bottom, 0);
                w ? O = b - 2 * (0 !== t || 0 !== e ? t + e : a(d.left, d.right)) : D = v - 2 * (0 !== n || 0 !== r ? n + r : a(d.top, d.bottom))
              }
              await f({
                ...e,
                availableWidth: O,
                availableHeight: D
              });
              const C = await s.getDimensions(c.floating);
              return b !== C.width || v !== C.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        kt = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n
              } = e, {
                strategy: r = "referenceHidden",
                ...o
              } = p(t, e);
              switch (r) {
                case "referenceHidden": {
                  const t = O(await L(e, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: C(t)
                    }
                  }
                }
                case "escaped": {
                  const t = O(await L(e, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: C(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Dt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: a,
              platform: l,
              elements: s,
              middlewareData: c
            } = e, {
              element: f,
              padding: u = 0
            } = p(t, e) || {};
            if (null == f) return {};
            const h = T(u),
              g = {
                x: n,
                y: r
              },
              w = b(o),
              x = y(w),
              v = await l.getDimensions(f),
              A = "y" === w,
              R = A ? "top" : "left",
              S = A ? "bottom" : "right",
              E = A ? "clientHeight" : "clientWidth",
              P = a.reference[x] + a.reference[w] - g[w] - a.floating[x],
              k = g[w] - a.reference[w],
              D = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let L = D ? D[E] : 0;
            L && await (null == l.isElement ? void 0 : l.isElement(D)) || (L = s.floating[E] || a.floating[x]);
            const O = P / 2 - k / 2,
              C = L / 2 - v[x] / 2 - 1,
              M = i(h[R], C),
              _ = i(h[S], C),
              W = M,
              H = L - v[x] - _,
              F = L / 2 - v[x] / 2 + O,
              B = d(W, F, H),
              j = !c.arrow && null != m(o) && F !== B && a.reference[x] / 2 - (F < W ? M : _) - v[x] / 2 < 0,
              N = j ? F < W ? F - W : F - H : 0;
            return {
              [w]: g[w] + N,
              data: {
                [w]: B,
                centerOffset: F - B - N,
                ...j && {
                  alignmentOffset: N
                }
              },
              reset: j
            }
          }
        }),
        Lt = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = e, {
                offset: l = 0,
                mainAxis: s = !0,
                crossAxis: c = !0
              } = p(t, e), f = {
                x: n,
                y: r
              }, u = x(o), d = g(u);
              let m = f[d],
                y = f[u];
              const w = p(l, e),
                b = "number" == typeof w ? {
                  mainAxis: w,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...w
                };
              if (s) {
                const t = "y" === d ? "height" : "width",
                  e = i.reference[d] - i.floating[t] + b.mainAxis,
                  n = i.reference[d] + i.reference[t] - b.mainAxis;
                m < e ? m = e : m > n && (m = n)
              }
              if (c) {
                var v, A;
                const t = "y" === d ? "width" : "height",
                  e = M.has(h(o)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (v = a.offset) ? void 0 : v[u]) || 0) + (e ? 0 : b.crossAxis),
                  r = i.reference[u] + i.reference[t] + (e ? 0 : (null == (A = a.offset) ? void 0 : A[u]) || 0) - (e ? b.crossAxis : 0);
                y < n ? y = n : y > r && (y = r)
              }
              return {
                [d]: m,
                [u]: y
              }
            }
          }
        },
        Ot = (t, e, n) => {
          const r = new Map,
            o = {
              platform: At,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (t, e, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, l = i.filter(Boolean), s = await (null == a.isRTL ? void 0 : a.isRTL(e));
            let c = await a.getElementRects({
                reference: t,
                floating: e,
                strategy: o
              }),
              {
                x: f,
                y: u
              } = D(c, r, s),
              d = r,
              p = {},
              h = 0;
            for (let n = 0; n < l.length; n++) {
              const {
                name: i,
                fn: m
              } = l[n], {
                x: g,
                y,
                data: w,
                reset: x
              } = await m({
                x: f,
                y: u,
                initialPlacement: r,
                placement: d,
                strategy: o,
                middlewareData: p,
                rects: c,
                platform: a,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != g ? g : f, u = null != y ? y : u, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...w
                }
              }, x && h <= 50 && (h++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (c = !0 === x.rects ? await a.getElementRects({
                reference: t,
                floating: e,
                strategy: o
              }) : x.rects), ({
                x: f,
                y: u
              } = D(c, d, s))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: o,
              middlewareData: p
            }
          })(t, e, {
            ...o,
            platform: i
          })
        };
      var Ct = n(18429),
        Mt = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function _t(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        let n, r, o;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (r = n; 0 !== r--;)
              if (!_t(t[r], e[r])) return !1;
            return !0
          }
          if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(e, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && t.$$typeof || _t(t[n], e[n]))) return !1
          }
          return !0
        }
        return t != t && e != e
      }

      function Wt(t) {
        return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ht(t, e) {
        const n = Wt(t);
        return Math.round(e * n) / n
      }

      function Ft(t) {
        const e = r.useRef(t);
        return Mt(() => {
          e.current = t
        }), e
      }
      const Bt = t => ({
          name: "arrow",
          options: t,
          fn(e) {
            const {
              element: n,
              padding: r
            } = "function" == typeof t ? t(e) : t;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Dt({
              element: n.current,
              padding: r
            }).fn(e) : {} : n ? Dt({
              element: n,
              padding: r
            }).fn(e) : {};
            var o
          }
        }),
        jt = (t, e) => ({
          ...Et(t),
          options: [t, e]
        }),
        Nt = (t, e) => ({
          ...Lt(t),
          options: [t, e]
        }),
        zt = (t, e) => ({
          ...Pt(t),
          options: [t, e]
        }),
        $t = (t, e) => ({
          ...Tt(t),
          options: [t, e]
        }),
        It = (t, e) => ({
          ...kt(t),
          options: [t, e]
        }),
        Vt = (t, e) => ({
          ...Bt(t),
          options: [t, e]
        });
      var Xt = n(78004),
        Yt = n(42295),
        qt = r.forwardRef((t, e) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = t;
          return (0, Yt.jsx)(Xt.sG.svg, {
            ...i,
            ref: e,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild ? n : (0, Yt.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      qt.displayName = "Arrow";
      var Gt = qt,
        Ut = n(95362),
        Jt = n(85426),
        Kt = n(76286),
        Qt = n(63155),
        Zt = n(60528),
        te = "Popper",
        [ee, ne] = (0, Jt.A)(te),
        [re, oe] = ee(te),
        ie = t => {
          const {
            __scopePopper: e,
            children: n
          } = t, [o, i] = r.useState(null);
          return (0, Yt.jsx)(re, {
            scope: e,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      ie.displayName = te;
      var ae = "PopperAnchor",
        le = r.forwardRef((t, e) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = t, a = oe(ae, n), l = r.useRef(null), s = (0, Ut.s)(e, l), c = r.useRef(null);
          return r.useEffect(() => {
            const t = c.current;
            c.current = o?.current || l.current, t !== c.current && a.onAnchorChange(c.current)
          }), o ? null : (0, Yt.jsx)(Xt.sG.div, {
            ...i,
            ref: s
          })
        });
      le.displayName = ae;
      var se = "PopperContent",
        [ce, fe] = ee(se),
        ue = r.forwardRef((t, e) => {
          const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: l = 0,
            align: c = "center",
            alignOffset: f = 0,
            arrowPadding: u = 0,
            avoidCollisions: d = !0,
            collisionBoundary: p = [],
            collisionPadding: h = 0,
            sticky: m = "partial",
            hideWhenDetached: g = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: w,
            ...x
          } = t, b = oe(se, n), [v, A] = r.useState(null), R = (0, Ut.s)(e, t => A(t)), [S, E] = r.useState(null), P = (0, Zt.X)(S), T = P?.width ?? 0, k = P?.height ?? 0, D = o + ("center" !== c ? "-" + c : ""), L = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, O = Array.isArray(p) ? p : [p], C = O.length > 0, M = {
            padding: L,
            boundary: O.filter(me),
            altBoundary: C
          }, {
            refs: _,
            floatingStyles: W,
            placement: H,
            isPositioned: B,
            middlewareData: j
          } = function(t) {
            void 0 === t && (t = {});
            const {
              placement: e = "bottom",
              strategy: n = "absolute",
              middleware: o = [],
              platform: i,
              elements: {
                reference: a,
                floating: l
              } = {},
              transform: s = !0,
              whileElementsMounted: c,
              open: f
            } = t, [u, d] = r.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: e,
              middlewareData: {},
              isPositioned: !1
            }), [p, h] = r.useState(o);
            _t(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), x = r.useCallback(t => {
              t !== R.current && (R.current = t, g(t))
            }, []), b = r.useCallback(t => {
              t !== S.current && (S.current = t, w(t))
            }, []), v = a || m, A = l || y, R = r.useRef(null), S = r.useRef(null), E = r.useRef(u), P = null != c, T = Ft(c), k = Ft(i), D = Ft(f), L = r.useCallback(() => {
              if (!R.current || !S.current) return;
              const t = {
                placement: e,
                strategy: n,
                middleware: p
              };
              k.current && (t.platform = k.current), Ot(R.current, S.current, t).then(t => {
                const e = {
                  ...t,
                  isPositioned: !1 !== D.current
                };
                O.current && !_t(E.current, e) && (E.current = e, Ct.flushSync(() => {
                  d(e)
                }))
              })
            }, [p, e, n, k, D]);
            Mt(() => {
              !1 === f && E.current.isPositioned && (E.current.isPositioned = !1, d(t => ({
                ...t,
                isPositioned: !1
              })))
            }, [f]);
            const O = r.useRef(!1);
            Mt(() => (O.current = !0, () => {
              O.current = !1
            }), []), Mt(() => {
              if (v && (R.current = v), A && (S.current = A), v && A) {
                if (T.current) return T.current(v, A, L);
                L()
              }
            }, [v, A, L, T, P]);
            const C = r.useMemo(() => ({
                reference: R,
                floating: S,
                setReference: x,
                setFloating: b
              }), [x, b]),
              M = r.useMemo(() => ({
                reference: v,
                floating: A
              }), [v, A]),
              _ = r.useMemo(() => {
                const t = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!M.floating) return t;
                const e = Ht(M.floating, u.x),
                  r = Ht(M.floating, u.y);
                return s ? {
                  ...t,
                  transform: "translate(" + e + "px, " + r + "px)",
                  ...Wt(M.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: e,
                  top: r
                }
              }, [n, s, M.floating, u.x, u.y]);
            return r.useMemo(() => ({
              ...u,
              update: L,
              refs: C,
              elements: M,
              floatingStyles: _
            }), [u, L, C, M, _])
          }({
            strategy: "fixed",
            placement: D,
            whileElementsMounted: (...t) => function(t, e, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: l = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = st(t), p = o || l ? [...d ? it(d) : [], ...it(e)] : [];
              p.forEach(t => {
                o && t.addEventListener("scroll", n, {
                  passive: !0
                }), l && t.addEventListener("resize", n)
              });
              const h = d && f ? function(t, e) {
                let n, r = null;
                const o = F(t);

                function l() {
                  var t;
                  clearTimeout(n), null == (t = r) || t.disconnect(), r = null
                }
                return function c(f, u) {
                  void 0 === f && (f = !1), void 0 === u && (u = 1), l();
                  const d = t.getBoundingClientRect(),
                    {
                      left: p,
                      top: h,
                      width: m,
                      height: g
                    } = d;
                  if (f || e(), !m || !g) return;
                  const y = {
                    rootMargin: -s(h) + "px " + -s(o.clientWidth - (p + m)) + "px " + -s(o.clientHeight - (h + g)) + "px " + -s(p) + "px",
                    threshold: a(0, i(1, u)) || 1
                  };
                  let w = !0;

                  function x(e) {
                    const r = e[0].intersectionRatio;
                    if (r !== u) {
                      if (!w) return c();
                      r ? c(!1, r) : n = setTimeout(() => {
                        c(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== r || Rt(d, t.getBoundingClientRect()) || c(), w = !1
                  }
                  try {
                    r = new IntersectionObserver(x, {
                      ...y,
                      root: o.ownerDocument
                    })
                  } catch (t) {
                    r = new IntersectionObserver(x, y)
                  }
                  r.observe(t)
                }(!0), l
              }(d, n) : null;
              let m, g = -1,
                y = null;
              c && (y = new ResizeObserver(t => {
                let [r] = t;
                r && r.target === d && y && (y.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                  var t;
                  null == (t = y) || t.observe(e)
                })), n()
              }), d && !u && y.observe(d), y.observe(e));
              let w = u ? dt(t) : null;
              return u && function e() {
                const r = dt(t);
                w && !Rt(w, r) && n(), w = r, m = requestAnimationFrame(e)
              }(), n(), () => {
                var t;
                p.forEach(t => {
                  o && t.removeEventListener("scroll", n), l && t.removeEventListener("resize", n)
                }), null == h || h(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(m)
              }
            }(...t, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [(N = {
              mainAxis: l + k,
              alignmentAxis: f
            }, {
              ...St(N),
              options: [N, undefined]
            }), d && jt({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? Nt() : void 0,
              ...M
            }), d && zt({
              ...M
            }), $t({
              ...M,
              apply: ({
                elements: t,
                rects: e,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = e.reference, a = t.floating.style;
                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), S && Vt({
              element: S,
              padding: u
            }), ge({
              arrowWidth: T,
              arrowHeight: k
            }), g && It({
              strategy: "referenceHidden",
              ...M
            })]
          });
          var N;
          const [z, $] = ye(H), I = (0, Kt.c)(w);
          (0, Qt.N)(() => {
            B && I?.()
          }, [B, I]);
          const V = j.arrow?.x,
            X = j.arrow?.y,
            Y = 0 !== j.arrow?.centerOffset,
            [q, G] = r.useState();
          return (0, Qt.N)(() => {
            v && G(window.getComputedStyle(v).zIndex)
          }, [v]), (0, Yt.jsx)("div", {
            ref: _.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...W,
              transform: B ? W.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: q,
              "--radix-popper-transform-origin": [j.transformOrigin?.x, j.transformOrigin?.y].join(" "),
              ...j.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: t.dir,
            children: (0, Yt.jsx)(ce, {
              scope: n,
              placedSide: z,
              onArrowChange: E,
              arrowX: V,
              arrowY: X,
              shouldHideArrow: Y,
              children: (0, Yt.jsx)(Xt.sG.div, {
                "data-side": z,
                "data-align": $,
                ...x,
                ref: R,
                style: {
                  ...x.style,
                  animation: B ? void 0 : "none"
                }
              })
            })
          })
        });
      ue.displayName = se;
      var de = "PopperArrow",
        pe = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        he = r.forwardRef(function(t, e) {
          const {
            __scopePopper: n,
            ...r
          } = t, o = fe(de, n), i = pe[o.placedSide];
          return (0, Yt.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, Yt.jsx)(Gt, {
              ...r,
              ref: e,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function me(t) {
        return null !== t
      }
      he.displayName = de;
      var ge = t => ({
        name: "transformOrigin",
        options: t,
        fn(e) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = e, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : t.arrowWidth, l = i ? 0 : t.arrowHeight, [s, c] = ye(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], u = (o.arrow?.x ?? 0) + a / 2, d = (o.arrow?.y ?? 0) + l / 2;
          let p = "",
            h = "";
          return "bottom" === s ? (p = i ? f : `${u}px`, h = -l + "px") : "top" === s ? (p = i ? f : `${u}px`, h = `${r.floating.height+l}px`) : "right" === s ? (p = -l + "px", h = i ? f : `${d}px`) : "left" === s && (p = `${r.floating.width+l}px`, h = i ? f : `${d}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function ye(t) {
        const [e, n = "center"] = t.split("-");
        return [e, n]
      }
      var we = ie,
        xe = le,
        be = ue,
        ve = he
    }
  }
]);