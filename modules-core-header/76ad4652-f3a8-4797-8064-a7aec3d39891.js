try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "76ad4652-f3a8-4797-8064-a7aec3d39891", t._sentryDebugIdIdentifier = "sentry-dbid-76ad4652-f3a8-4797-8064-a7aec3d39891")
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
        r.useEffect((() => {
          const t = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", t[0] ?? a()), document.body.insertAdjacentElement("beforeend", t[1] ?? a()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((t => t.remove())), o--
          }
        }), [])
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
        return (0, o.N)((() => {
          if (t) {
            n({
              width: t.offsetWidth,
              height: t.offsetHeight
            });
            const e = new ResizeObserver((e => {
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
            }));
            return e.observe(t, {
              box: "border-box"
            }), () => e.unobserve(t)
          }
          n(void 0)
        }), [t]), e
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
          return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live]"))), function(t, e, n, s) {
            var c = function(t, e) {
              return e.map((function(e) {
                if (t.contains(e)) return e;
                var n = l(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
              })).filter((function(t) {
                return Boolean(t)
              }))
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
              t && !p.has(t) && Array.prototype.forEach.call(t.children, (function(t) {
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
              }))
            };
            return m(e), d.clear(), a++,
              function() {
                u.forEach((function(t) {
                  var e = r.get(t) - 1,
                    i = f.get(t) - 1;
                  r.set(t, e), f.set(t, i), e || (o.has(t) || t.removeAttribute(s), o.delete(t)), i || t.removeAttribute(n)
                })), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(s, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    96077: (t, e, n) => {
      n.d(e, {
        Mz: () => ie,
        i3: () => le,
        UC: () => ae,
        bL: () => oe,
        Bk: () => $t
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

      function w(t) {
        return ["top", "bottom"].includes(h(t)) ? "y" : "x"
      }

      function x(t) {
        return g(w(t))
      }

      function b(t) {
        return t.replace(/start|end/g, (t => u[t]))
      }

      function v(t) {
        return t.replace(/left|right|bottom|top/g, (t => f[t]))
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

      function R(t) {
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

      function E(t, e, n) {
        let {
          reference: r,
          floating: o
        } = t;
        const i = w(e),
          a = x(e),
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
      async function S(t, e) {
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
        } = p(e, t), m = A(h), g = l[d ? "floating" === u ? "reference" : "floating" : u], y = R(await i.getClippingRect({
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
        }, v = R(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function P(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function T(t) {
        return o.some((e => t[e] >= 0))
      }

      function k() {
        return "undefined" != typeof window
      }

      function O(t) {
        return C(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function D(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function L(t) {
        var e;
        return null == (e = (C(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function C(t) {
        return !!k() && (t instanceof Node || t instanceof D(t).Node)
      }

      function M(t) {
        return !!k() && (t instanceof Element || t instanceof D(t).Element)
      }

      function _(t) {
        return !!k() && (t instanceof HTMLElement || t instanceof D(t).HTMLElement)
      }

      function H(t) {
        return !(!k() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof D(t).ShadowRoot)
      }

      function W(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: r,
          display: o
        } = $(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o)
      }

      function B(t) {
        return ["table", "td", "th"].includes(O(t))
      }

      function j(t) {
        return [":popover-open", ":modal"].some((e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        }))
      }

      function F(t) {
        const e = N(),
          n = M(t) ? $(t) : t;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((t => !!n[t] && "none" !== n[t])) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function N() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function z(t) {
        return ["html", "body", "#document"].includes(O(t))
      }

      function $(t) {
        return D(t).getComputedStyle(t)
      }

      function I(t) {
        return M(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function V(t) {
        if ("html" === O(t)) return t;
        const e = t.assignedSlot || t.parentNode || H(t) && t.host || L(t);
        return H(e) ? e.host : e
      }

      function X(t) {
        const e = V(t);
        return z(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : _(e) && W(e) ? e : X(e)
      }

      function Y(t, e, n) {
        var r;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const o = X(t),
          i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
          a = D(o);
        if (i) {
          const t = q(a);
          return e.concat(a, a.visualViewport || [], W(o) ? o : [], t && n ? Y(t) : [])
        }
        return e.concat(o, Y(o, [], n))
      }

      function q(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function G(t) {
        const e = $(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const o = _(t),
          i = o ? t.offsetWidth : n,
          a = o ? t.offsetHeight : r,
          s = l(n) !== i || l(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function U(t) {
        return M(t) ? t : t.contextElement
      }

      function J(t) {
        const e = U(t);
        if (!_(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = G(e);
        let a = (i ? l(n.width) : n.width) / r,
          s = (i ? l(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const K = c(0);

      function Q(t) {
        const e = D(t);
        return N() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : K
      }

      function Z(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const o = t.getBoundingClientRect(),
          i = U(t);
        let a = c(1);
        e && (r ? M(r) && (a = J(r)) : a = J(t));
        const l = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== D(t)) && e
        }(i, n, r) ? Q(i) : c(0);
        let s = (o.left + l.x) / a.x,
          f = (o.top + l.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const t = D(i),
            e = r && M(r) ? D(r) : r;
          let n = t,
            o = q(n);
          for (; o && r && e !== n;) {
            const t = J(o),
              e = o.getBoundingClientRect(),
              r = $(o),
              i = e.left + (o.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              a = e.top + (o.clientTop + parseFloat(r.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += a, n = D(o), o = q(n)
          }
        }
        return R({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function tt(t, e) {
        const n = I(t).scrollLeft;
        return e ? e.left + n : Z(L(t)).left + n
      }

      function et(t, e, n) {
        void 0 === n && (n = !1);
        const r = t.getBoundingClientRect();
        return {
          x: r.left + e.scrollLeft - (n ? 0 : tt(t, r)),
          y: r.top + e.scrollTop
        }
      }

      function nt(t, e, n) {
        let r;
        if ("viewport" === e) r = function(t, e) {
          const n = D(t),
            r = L(t),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            l = 0,
            s = 0;
          if (o) {
            i = o.width, a = o.height;
            const t = N();
            (!t || t && "fixed" === e) && (l = o.offsetLeft, s = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: l,
            y: s
          }
        }(t, n);
        else if ("document" === e) r = function(t) {
          const e = L(t),
            n = I(t),
            r = t.ownerDocument.body,
            o = a(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
            i = a(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
          let l = -n.scrollLeft + tt(t);
          const s = -n.scrollTop;
          return "rtl" === $(r).direction && (l += a(e.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: l,
            y: s
          }
        }(L(t));
        else if (M(e)) r = function(t, e) {
          const n = Z(t, !0, "fixed" === e),
            r = n.top + t.clientTop,
            o = n.left + t.clientLeft,
            i = _(t) ? J(t) : c(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(e, n);
        else {
          const n = Q(t);
          r = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return R(r)
      }

      function rt(t, e) {
        const n = V(t);
        return !(n === e || !M(n) || z(n)) && ("fixed" === $(n).position || rt(n, e))
      }

      function ot(t, e, n) {
        const r = _(e),
          o = L(e),
          i = "fixed" === n,
          a = Z(t, !0, i, e);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);
        if (r || !r && !i)
          if (("body" !== O(e) || W(o)) && (l = I(e)), r) {
            const t = Z(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else o && (s.x = tt(o));
        const f = !o || r || i ? c(0) : et(o, l);
        return {
          x: a.left + l.scrollLeft - s.x - f.x,
          y: a.top + l.scrollTop - s.y - f.y,
          width: a.width,
          height: a.height
        }
      }

      function it(t) {
        return "static" === $(t).position
      }

      function at(t, e) {
        if (!_(t) || "fixed" === $(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return L(t) === n && (n = n.ownerDocument.body), n
      }

      function lt(t, e) {
        const n = D(t);
        if (j(t)) return n;
        if (!_(t)) {
          let e = V(t);
          for (; e && !z(e);) {
            if (M(e) && !it(e)) return e;
            e = V(e)
          }
          return n
        }
        let r = at(t, e);
        for (; r && B(r) && it(r);) r = at(r, e);
        return r && z(r) && it(r) && !F(r) ? n : r || function(t) {
          let e = V(t);
          for (; _(e) && !z(e);) {
            if (F(e)) return e;
            if (j(e)) return null;
            e = V(e)
          }
          return null
        }(t) || n
      }
      const st = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: r,
            strategy: o
          } = t;
          const i = "fixed" === o,
            a = L(r),
            l = !!e && j(e.floating);
          if (r === a || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = _(r);
          if ((d || !d && !i) && (("body" !== O(r) || W(a)) && (s = I(r)), _(r))) {
            const t = Z(r);
            f = J(r), u.x = t.x + r.clientLeft, u.y = t.y + r.clientTop
          }
          const p = !a || d || i ? c(0) : et(a, s, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: L,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = t;
          const l = [..."clippingAncestors" === n ? j(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let r = Y(t, [], !1).filter((t => M(t) && "body" !== O(t))),
                o = null;
              const i = "fixed" === $(t).position;
              let a = i ? V(t) : t;
              for (; M(a) && !z(a);) {
                const e = $(a),
                  n = F(a);
                n || "fixed" !== e.position || (o = null), (i ? !n && !o : !n && "static" === e.position && o && ["absolute", "fixed"].includes(o.position) || W(a) && !n && rt(t, a)) ? r = r.filter((t => t !== a)) : o = e, a = V(a)
              }
              return e.set(t, r), r
            }(e, this._c) : [].concat(n), r],
            s = l[0],
            c = l.reduce(((t, n) => {
              const r = nt(e, n, o);
              return t.top = a(r.top, t.top), t.right = i(r.right, t.right), t.bottom = i(r.bottom, t.bottom), t.left = a(r.left, t.left), t
            }), nt(e, s, o));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: lt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || lt,
            n = this.getDimensions,
            r = await n(t.floating);
          return {
            reference: ot(t.reference, await e(t.floating), t.strategy),
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
          } = G(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: J,
        isElement: M,
        isRTL: function(t) {
          return "rtl" === $(t).direction
        }
      };

      function ct(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }
      const ft = function(t) {
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
                } = t, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = h(n), l = m(n), s = "y" === w(n), c = ["left", "top"].includes(a) ? -1 : 1, f = i && s ? -1 : 1, u = p(e, t);
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
        ut = function(t) {
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
              }, f = await S(e, s), u = w(h(o)), m = g(u);
              let y = c[m],
                x = c[u];
              if (i) {
                const t = "y" === m ? "bottom" : "right";
                y = d(y + f["y" === m ? "top" : "left"], y, y - f[t])
              }
              if (a) {
                const t = "y" === u ? "bottom" : "right";
                x = d(x + f["y" === u ? "top" : "left"], x, x - f[t])
              }
              const b = l.fn({
                ...e,
                [m]: y,
                [u]: x
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
        dt = function(t) {
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
                fallbackAxisSideDirection: A = "none",
                flipAlignment: R = !0,
                ...E
              } = p(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const P = h(o),
                T = w(l),
                k = h(l) === l,
                O = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                D = d || (k || !R ? [v(l)] : function(t) {
                  const e = v(t);
                  return [b(t), e, b(e)]
                }(l)),
                L = "none" !== A;
              !d && L && D.push(... function(t, e, n, r) {
                const o = m(t);
                let i = function(t, e, n) {
                  const r = ["left", "right"],
                    o = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? o : r : e ? r : o;
                    case "left":
                    case "right":
                      return e ? i : a;
                    default:
                      return []
                  }
                }(h(t), "start" === n, r);
                return o && (i = i.map((t => t + "-" + o)), e && (i = i.concat(i.map(b)))), i
              }(l, R, A, O));
              const C = [l, ...D],
                M = await S(e, E),
                _ = [];
              let H = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && _.push(M[P]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const r = m(t),
                    o = x(t),
                    i = y(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (a = v(a)), [a, v(a)]
                }(o, a, O);
                _.push(M[t[0]], M[t[1]])
              }
              if (H = [...H, {
                  placement: o,
                  overflows: _
                }], !_.every((t => t <= 0))) {
                var W, B;
                const t = ((null == (W = i.flip) ? void 0 : W.index) || 0) + 1,
                  e = C[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: H
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (B = H.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : B.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var j;
                    const t = null == (j = H.filter((t => {
                      if (L) {
                        const e = w(t.placement);
                        return e === T || "y" === e
                      }
                      return !0
                    })).map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : j[0];
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
        pt = function(t) {
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
              } = p(t, e), d = await S(e, u), g = h(o), y = m(o), x = "y" === w(o), {
                width: b,
                height: v
              } = l.floating;
              let A, R;
              "top" === g || "bottom" === g ? (A = g, R = y === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = g, A = "end" === y ? "top" : "bottom");
              const E = v - d.top - d.bottom,
                P = b - d.left - d.right,
                T = i(v - d[A], E),
                k = i(b - d[R], P),
                O = !e.middlewareData.shift;
              let D = T,
                L = k;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (L = P), null != (r = e.middlewareData.shift) && r.enabled.y && (D = E), O && !y) {
                const t = a(d.left, 0),
                  e = a(d.right, 0),
                  n = a(d.top, 0),
                  r = a(d.bottom, 0);
                x ? L = b - 2 * (0 !== t || 0 !== e ? t + e : a(d.left, d.right)) : D = v - 2 * (0 !== n || 0 !== r ? n + r : a(d.top, d.bottom))
              }
              await f({
                ...e,
                availableWidth: L,
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
        ht = function(t) {
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
                  const t = P(await S(e, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: T(t)
                    }
                  }
                }
                case "escaped": {
                  const t = P(await S(e, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: T(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        mt = t => ({
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
            const h = A(u),
              g = {
                x: n,
                y: r
              },
              w = x(o),
              b = y(w),
              v = await l.getDimensions(f),
              R = "y" === w,
              E = R ? "top" : "left",
              S = R ? "bottom" : "right",
              P = R ? "clientHeight" : "clientWidth",
              T = a.reference[b] + a.reference[w] - g[w] - a.floating[b],
              k = g[w] - a.reference[w],
              O = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let D = O ? O[P] : 0;
            D && await (null == l.isElement ? void 0 : l.isElement(O)) || (D = s.floating[P] || a.floating[b]);
            const L = T / 2 - k / 2,
              C = D / 2 - v[b] / 2 - 1,
              M = i(h[E], C),
              _ = i(h[S], C),
              H = M,
              W = D - v[b] - _,
              B = D / 2 - v[b] / 2 + L,
              j = d(H, B, W),
              F = !c.arrow && null != m(o) && B !== j && a.reference[b] / 2 - (B < H ? M : _) - v[b] / 2 < 0,
              N = F ? B < H ? B - H : B - W : 0;
            return {
              [w]: g[w] + N,
              data: {
                [w]: j,
                centerOffset: B - j - N,
                ...F && {
                  alignmentOffset: N
                }
              },
              reset: F
            }
          }
        }),
        gt = function(t) {
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
              }, u = w(o), d = g(u);
              let m = f[d],
                y = f[u];
              const x = p(l, e),
                b = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
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
                  e = ["top", "left"].includes(h(o)),
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
        yt = (t, e, n) => {
          const r = new Map,
            o = {
              platform: st,
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
              } = E(c, r, s),
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
              } = E(c, d, s))), n = -1)
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
      var wt = n(18429),
        xt = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

      function bt(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        let n, r, o;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (r = n; 0 != r--;)
              if (!bt(t[r], e[r])) return !1;
            return !0
          }
          if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(e, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && t.$$typeof || bt(t[n], e[n]))) return !1
          }
          return !0
        }
        return t != t && e != e
      }

      function vt(t) {
        return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function At(t, e) {
        const n = vt(t);
        return Math.round(e * n) / n
      }

      function Rt(t) {
        const e = r.useRef(t);
        return xt((() => {
          e.current = t
        })), e
      }
      const Et = t => ({
          name: "arrow",
          options: t,
          fn(e) {
            const {
              element: n,
              padding: r
            } = "function" == typeof t ? t(e) : t;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? mt({
              element: n.current,
              padding: r
            }).fn(e) : {} : n ? mt({
              element: n,
              padding: r
            }).fn(e) : {};
            var o
          }
        }),
        St = (t, e) => ({
          ...ut(t),
          options: [t, e]
        }),
        Pt = (t, e) => ({
          ...gt(t),
          options: [t, e]
        }),
        Tt = (t, e) => ({
          ...dt(t),
          options: [t, e]
        }),
        kt = (t, e) => ({
          ...pt(t),
          options: [t, e]
        }),
        Ot = (t, e) => ({
          ...ht(t),
          options: [t, e]
        }),
        Dt = (t, e) => ({
          ...Et(t),
          options: [t, e]
        });
      var Lt = n(78004),
        Ct = n(42295),
        Mt = r.forwardRef(((t, e) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = t;
          return (0, Ct.jsx)(Lt.sG.svg, {
            ...i,
            ref: e,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild ? n : (0, Ct.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      Mt.displayName = "Arrow";
      var _t = Mt,
        Ht = n(95362),
        Wt = n(85426),
        Bt = n(76286),
        jt = n(63155),
        Ft = n(60528),
        Nt = "Popper",
        [zt, $t] = (0, Wt.A)(Nt),
        [It, Vt] = zt(Nt),
        Xt = t => {
          const {
            __scopePopper: e,
            children: n
          } = t, [o, i] = r.useState(null);
          return (0, Ct.jsx)(It, {
            scope: e,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      Xt.displayName = Nt;
      var Yt = "PopperAnchor",
        qt = r.forwardRef(((t, e) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = t, a = Vt(Yt, n), l = r.useRef(null), s = (0, Ht.s)(e, l);
          return r.useEffect((() => {
            a.onAnchorChange(o?.current || l.current)
          })), o ? null : (0, Ct.jsx)(Lt.sG.div, {
            ...i,
            ref: s
          })
        }));
      qt.displayName = Yt;
      var Gt = "PopperContent",
        [Ut, Jt] = zt(Gt),
        Kt = r.forwardRef(((t, e) => {
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
          } = t, b = Vt(Gt, n), [v, A] = r.useState(null), R = (0, Ht.s)(e, (t => A(t))), [E, S] = r.useState(null), P = (0, Ft.X)(E), T = P?.width ?? 0, k = P?.height ?? 0, O = o + ("center" !== c ? "-" + c : ""), D = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, C = Array.isArray(p) ? p : [p], M = C.length > 0, _ = {
            padding: D,
            boundary: C.filter(ee),
            altBoundary: M
          }, {
            refs: H,
            floatingStyles: W,
            placement: B,
            isPositioned: j,
            middlewareData: F
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
            bt(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), x = r.useCallback((t => {
              t !== R.current && (R.current = t, g(t))
            }), []), b = r.useCallback((t => {
              t !== E.current && (E.current = t, w(t))
            }), []), v = a || m, A = l || y, R = r.useRef(null), E = r.useRef(null), S = r.useRef(u), P = null != c, T = Rt(c), k = Rt(i), O = Rt(f), D = r.useCallback((() => {
              if (!R.current || !E.current) return;
              const t = {
                placement: e,
                strategy: n,
                middleware: p
              };
              k.current && (t.platform = k.current), yt(R.current, E.current, t).then((t => {
                const e = {
                  ...t,
                  isPositioned: !1 !== O.current
                };
                L.current && !bt(S.current, e) && (S.current = e, wt.flushSync((() => {
                  d(e)
                })))
              }))
            }), [p, e, n, k, O]);
            xt((() => {
              !1 === f && S.current.isPositioned && (S.current.isPositioned = !1, d((t => ({
                ...t,
                isPositioned: !1
              }))))
            }), [f]);
            const L = r.useRef(!1);
            xt((() => (L.current = !0, () => {
              L.current = !1
            })), []), xt((() => {
              if (v && (R.current = v), A && (E.current = A), v && A) {
                if (T.current) return T.current(v, A, D);
                D()
              }
            }), [v, A, D, T, P]);
            const C = r.useMemo((() => ({
                reference: R,
                floating: E,
                setReference: x,
                setFloating: b
              })), [x, b]),
              M = r.useMemo((() => ({
                reference: v,
                floating: A
              })), [v, A]),
              _ = r.useMemo((() => {
                const t = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!M.floating) return t;
                const e = At(M.floating, u.x),
                  r = At(M.floating, u.y);
                return s ? {
                  ...t,
                  transform: "translate(" + e + "px, " + r + "px)",
                  ...vt(M.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: e,
                  top: r
                }
              }), [n, s, M.floating, u.x, u.y]);
            return r.useMemo((() => ({
              ...u,
              update: D,
              refs: C,
              elements: M,
              floatingStyles: _
            })), [u, D, C, M, _])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...t) => function(t, e, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: l = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = U(t), p = o || l ? [...d ? Y(d) : [], ...Y(e)] : [];
              p.forEach((t => {
                o && t.addEventListener("scroll", n, {
                  passive: !0
                }), l && t.addEventListener("resize", n)
              }));
              const h = d && f ? function(t, e) {
                let n, r = null;
                const o = L(t);

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
                      r ? c(!1, r) : n = setTimeout((() => {
                        c(!1, 1e-7)
                      }), 1e3)
                    }
                    1 !== r || ct(d, t.getBoundingClientRect()) || c(), w = !1
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
              c && (y = new ResizeObserver((t => {
                let [r] = t;
                r && r.target === d && y && (y.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame((() => {
                  var t;
                  null == (t = y) || t.observe(e)
                }))), n()
              })), d && !u && y.observe(d), y.observe(e));
              let w = u ? Z(t) : null;
              return u && function e() {
                const r = Z(t);
                w && !ct(w, r) && n(), w = r, m = requestAnimationFrame(e)
              }(), n(), () => {
                var t;
                p.forEach((t => {
                  o && t.removeEventListener("scroll", n), l && t.removeEventListener("resize", n)
                })), null == h || h(), null == (t = y) || t.disconnect(), y = null, u && cancelAnimationFrame(m)
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
              ...ft(N),
              options: [N, undefined]
            }), d && St({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? Pt() : void 0,
              ..._
            }), d && Tt({
              ..._
            }), kt({
              ..._,
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
            }), E && Dt({
              element: E,
              padding: u
            }), ne({
              arrowWidth: T,
              arrowHeight: k
            }), g && Ot({
              strategy: "referenceHidden",
              ..._
            })]
          });
          var N;
          const [z, $] = re(B), I = (0, Bt.c)(w);
          (0, jt.N)((() => {
            j && I?.()
          }), [j, I]);
          const V = F.arrow?.x,
            X = F.arrow?.y,
            q = 0 !== F.arrow?.centerOffset,
            [G, J] = r.useState();
          return (0, jt.N)((() => {
            v && J(window.getComputedStyle(v).zIndex)
          }), [v]), (0, Ct.jsx)("div", {
            ref: H.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...W,
              transform: j ? W.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
              ...F.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: t.dir,
            children: (0, Ct.jsx)(Ut, {
              scope: n,
              placedSide: z,
              onArrowChange: S,
              arrowX: V,
              arrowY: X,
              shouldHideArrow: q,
              children: (0, Ct.jsx)(Lt.sG.div, {
                "data-side": z,
                "data-align": $,
                ...x,
                ref: R,
                style: {
                  ...x.style,
                  animation: j ? void 0 : "none"
                }
              })
            })
          })
        }));
      Kt.displayName = Gt;
      var Qt = "PopperArrow",
        Zt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        te = r.forwardRef((function(t, e) {
          const {
            __scopePopper: n,
            ...r
          } = t, o = Jt(Qt, n), i = Zt[o.placedSide];
          return (0, Ct.jsx)("span", {
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
            children: (0, Ct.jsx)(_t, {
              ...r,
              ref: e,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function ee(t) {
        return null !== t
      }
      te.displayName = Qt;
      var ne = t => ({
        name: "transformOrigin",
        options: t,
        fn(e) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = e, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : t.arrowWidth, l = i ? 0 : t.arrowHeight, [s, c] = re(n), f = {
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

      function re(t) {
        const [e, n = "center"] = t.split("-");
        return [e, n]
      }
      var oe = Xt,
        ie = qt,
        ae = Kt,
        le = te
    }
  }
]);