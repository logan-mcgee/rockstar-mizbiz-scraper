try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "76ad4652-f3a8-4797-8064-a7aec3d39891", e._sentryDebugIdIdentifier = "sentry-dbid-76ad4652-f3a8-4797-8064-a7aec3d39891")
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
  [7145], {
    15234: (e, t, n) => {
      n.d(t, {
        Oh: () => i
      });
      var r = n(71127),
        o = 0;

      function i() {
        r.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? a()), document.body.insertAdjacentElement("beforeend", e[1] ?? a()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
          }
        }), [])
      }

      function a() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    60528: (e, t, n) => {
      n.d(t, {
        X: () => i
      });
      var r = n(71127),
        o = n(63155);

      function i(e) {
        const [t, n] = r.useState(void 0);
        return (0, o.N)((() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }), [e]), t
      }
    },
    94926: (e, t, n) => {
      n.d(t, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        a = 0,
        l = function(e) {
          return e && (e.host || l(e.parentNode))
        },
        s = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var s = Array.from(Array.isArray(e) ? e : [e]),
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live]"))), function(e, t, n, s) {
            var c = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = l(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            i[n] || (i[n] = new WeakMap);
            var f = i[n],
              u = [],
              d = new Set,
              p = new Set(c),
              h = function(e) {
                e && !d.has(e) && (d.add(e), h(e.parentNode))
              };
            c.forEach(h);
            var m = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (d.has(e)) m(e);
                else try {
                  var t = e.getAttribute(s),
                    i = null !== t && "false" !== t,
                    a = (r.get(e) || 0) + 1,
                    l = (f.get(e) || 0) + 1;
                  r.set(e, a), f.set(e, l), u.push(e), 1 === a && i && o.set(e, !0), 1 === l && e.setAttribute(n, "true"), i || e.setAttribute(s, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return m(t), d.clear(), a++,
              function() {
                u.forEach((function(e) {
                  var t = r.get(e) - 1,
                    i = f.get(e) - 1;
                  r.set(e, t), f.set(e, i), t || (o.has(e) || e.removeAttribute(s), o.delete(e)), i || e.removeAttribute(n)
                })), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(s, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    96077: (e, t, n) => {
      n.d(t, {
        Mz: () => it,
        i3: () => lt,
        UC: () => at,
        bL: () => ot,
        Bk: () => $e
      });
      var r = n(71127);
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        a = Math.max,
        l = Math.round,
        s = Math.floor,
        c = e => ({
          x: e,
          y: e
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

      function d(e, t, n) {
        return a(e, i(t, n))
      }

      function p(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function h(e) {
        return e.split("-")[0]
      }

      function m(e) {
        return e.split("-")[1]
      }

      function g(e) {
        return "x" === e ? "y" : "x"
      }

      function y(e) {
        return "y" === e ? "height" : "width"
      }

      function w(e) {
        return ["top", "bottom"].includes(h(e)) ? "y" : "x"
      }

      function x(e) {
        return g(w(e))
      }

      function b(e) {
        return e.replace(/start|end/g, (e => u[e]))
      }

      function v(e) {
        return e.replace(/left|right|bottom|top/g, (e => f[e]))
      }

      function A(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function R(e) {
        const {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function E(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = w(t),
          a = x(t),
          l = y(a),
          s = h(t),
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
        switch (m(t)) {
          case "start":
            p[a] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            p[a] += d * (n && c ? -1 : 1)
        }
        return p
      }
      async function S(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: l,
          strategy: s
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: d = !1,
          padding: h = 0
        } = p(t, e), m = A(h), g = l[d ? "floating" === u ? "reference" : "floating" : u], y = R(await i.getClippingRect({
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

      function P(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function T(e) {
        return o.some((t => e[t] >= 0))
      }

      function k() {
        return "undefined" != typeof window
      }

      function O(e) {
        return C(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function D(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function L(e) {
        var t;
        return null == (t = (C(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function C(e) {
        return !!k() && (e instanceof Node || e instanceof D(e).Node)
      }

      function M(e) {
        return !!k() && (e instanceof Element || e instanceof D(e).Element)
      }

      function _(e) {
        return !!k() && (e instanceof HTMLElement || e instanceof D(e).HTMLElement)
      }

      function H(e) {
        return !(!k() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof D(e).ShadowRoot)
      }

      function W(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = $(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function B(e) {
        return ["table", "td", "th"].includes(O(e))
      }

      function j(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function F(e) {
        const t = N(),
          n = M(e) ? $(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function N() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function z(e) {
        return ["html", "body", "#document"].includes(O(e))
      }

      function $(e) {
        return D(e).getComputedStyle(e)
      }

      function I(e) {
        return M(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function V(e) {
        if ("html" === O(e)) return e;
        const t = e.assignedSlot || e.parentNode || H(e) && e.host || L(e);
        return H(t) ? t.host : t
      }

      function X(e) {
        const t = V(e);
        return z(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _(t) && W(t) ? t : X(t)
      }

      function Y(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = X(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = D(o);
        if (i) {
          const e = q(a);
          return t.concat(a, a.visualViewport || [], W(o) ? o : [], e && n ? Y(e) : [])
        }
        return t.concat(o, Y(o, [], n))
      }

      function q(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function G(e) {
        const t = $(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = _(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = l(n) !== i || l(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function U(e) {
        return M(e) ? e : e.contextElement
      }

      function J(e) {
        const t = U(e);
        if (!_(t)) return c(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = G(t);
        let a = (i ? l(n.width) : n.width) / r,
          s = (i ? l(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const K = c(0);

      function Q(e) {
        const t = D(e);
        return N() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : K
      }

      function Z(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = U(e);
        let a = c(1);
        t && (r ? M(r) && (a = J(r)) : a = J(e));
        const l = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== D(e)) && t
        }(i, n, r) ? Q(i) : c(0);
        let s = (o.left + l.x) / a.x,
          f = (o.top + l.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = D(i),
            t = r && M(r) ? D(r) : r;
          let n = e,
            o = q(n);
          for (; o && r && t !== n;) {
            const e = J(o),
              t = o.getBoundingClientRect(),
              r = $(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            s *= e.x, f *= e.y, u *= e.x, d *= e.y, s += i, f += a, n = D(o), o = q(n)
          }
        }
        return R({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function ee(e, t) {
        const n = I(e).scrollLeft;
        return t ? t.left + n : Z(L(e)).left + n
      }

      function te(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : ee(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function ne(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = D(e),
            r = L(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            l = 0,
            s = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = N();
            (!e || e && "fixed" === t) && (l = o.offsetLeft, s = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: l,
            y: s
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = L(e),
            n = I(e),
            r = e.ownerDocument.body,
            o = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = a(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let l = -n.scrollLeft + ee(e);
          const s = -n.scrollTop;
          return "rtl" === $(r).direction && (l += a(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: l,
            y: s
          }
        }(L(e));
        else if (M(t)) r = function(e, t) {
          const n = Z(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = _(e) ? J(e) : c(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = Q(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return R(r)
      }

      function re(e, t) {
        const n = V(e);
        return !(n === t || !M(n) || z(n)) && ("fixed" === $(n).position || re(n, t))
      }

      function oe(e, t, n) {
        const r = _(t),
          o = L(t),
          i = "fixed" === n,
          a = Z(e, !0, i, t);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);
        if (r || !r && !i)
          if (("body" !== O(t) || W(o)) && (l = I(t)), r) {
            const e = Z(t, !0, i, t);
            s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
          } else o && (s.x = ee(o));
        const f = !o || r || i ? c(0) : te(o, l);
        return {
          x: a.left + l.scrollLeft - s.x - f.x,
          y: a.top + l.scrollTop - s.y - f.y,
          width: a.width,
          height: a.height
        }
      }

      function ie(e) {
        return "static" === $(e).position
      }

      function ae(e, t) {
        if (!_(e) || "fixed" === $(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return L(e) === n && (n = n.ownerDocument.body), n
      }

      function le(e, t) {
        const n = D(e);
        if (j(e)) return n;
        if (!_(e)) {
          let t = V(e);
          for (; t && !z(t);) {
            if (M(t) && !ie(t)) return t;
            t = V(t)
          }
          return n
        }
        let r = ae(e, t);
        for (; r && B(r) && ie(r);) r = ae(r, t);
        return r && z(r) && ie(r) && !F(r) ? n : r || function(e) {
          let t = V(e);
          for (; _(t) && !z(t);) {
            if (F(t)) return t;
            if (j(t)) return null;
            t = V(t)
          }
          return null
        }(e) || n
      }
      const se = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = L(r),
            l = !!t && j(t.floating);
          if (r === a || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = _(r);
          if ((d || !d && !i) && (("body" !== O(r) || W(a)) && (s = I(r)), _(r))) {
            const e = Z(r);
            f = J(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const p = !a || d || i ? c(0) : te(a, s, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: L,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const l = [..."clippingAncestors" === n ? j(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = Y(e, [], !1).filter((e => M(e) && "body" !== O(e))),
                o = null;
              const i = "fixed" === $(e).position;
              let a = i ? V(e) : e;
              for (; M(a) && !z(a);) {
                const t = $(a),
                  n = F(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || W(a) && !n && re(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = V(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            s = l[0],
            c = l.reduce(((e, n) => {
              const r = ne(t, n, o);
              return e.top = a(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = a(r.left, e.left), e
            }), ne(t, s, o));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: le,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || le,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: oe(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = G(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: J,
        isElement: M,
        isRTL: function(e) {
          return "rtl" === $(e).direction
        }
      };

      function ce(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const fe = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: o,
                y: i,
                placement: a,
                middlewareData: l
              } = t, s = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = h(n), l = m(n), s = "y" === w(n), c = ["left", "top"].includes(a) ? -1 : 1, f = i && s ? -1 : 1, u = p(t, e);
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
              }(t, e);
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
        ue = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: l = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...s
              } = p(e, t), c = {
                x: n,
                y: r
              }, f = await S(t, s), u = w(h(o)), m = g(u);
              let y = c[m],
                x = c[u];
              if (i) {
                const e = "y" === m ? "bottom" : "right";
                y = d(y + f["y" === m ? "top" : "left"], y, y - f[e])
              }
              if (a) {
                const e = "y" === u ? "bottom" : "right";
                x = d(x + f["y" === u ? "top" : "left"], x, x - f[e])
              }
              const b = l.fn({
                ...t,
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
        de = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: l,
                platform: s,
                elements: c
              } = t, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: d,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: A = "none",
                flipAlignment: R = !0,
                ...E
              } = p(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const P = h(o),
                T = w(l),
                k = h(l) === l,
                O = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                D = d || (k || !R ? [v(l)] : function(e) {
                  const t = v(e);
                  return [b(e), t, b(t)]
                }(l)),
                L = "none" !== A;
              !d && L && D.push(... function(e, t, n, r) {
                const o = m(e);
                let i = function(e, t, n) {
                  const r = ["left", "right"],
                    o = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? o : r : t ? r : o;
                    case "left":
                    case "right":
                      return t ? i : a;
                    default:
                      return []
                  }
                }(h(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(b)))), i
              }(l, R, A, O));
              const C = [l, ...D],
                M = await S(t, E),
                _ = [];
              let H = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && _.push(M[P]), u) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = m(e),
                    o = x(e),
                    i = y(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = v(a)), [a, v(a)]
                }(o, a, O);
                _.push(M[e[0]], M[e[1]])
              }
              if (H = [...H, {
                  placement: o,
                  overflows: _
                }], !_.every((e => e <= 0))) {
                var W, B;
                const e = ((null == (W = i.flip) ? void 0 : W.index) || 0) + 1,
                  t = C[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: H
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (B = H.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : B.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var j;
                    const e = null == (j = H.filter((e => {
                      if (L) {
                        const t = w(e.placement);
                        return t === T || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : j[0];
                    e && (n = e);
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
        pe = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                rects: l,
                platform: s,
                elements: c
              } = t, {
                apply: f = () => {},
                ...u
              } = p(e, t), d = await S(t, u), g = h(o), y = m(o), x = "y" === w(o), {
                width: b,
                height: v
              } = l.floating;
              let A, R;
              "top" === g || "bottom" === g ? (A = g, R = y === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = g, A = "end" === y ? "top" : "bottom");
              const E = v - d.top - d.bottom,
                P = b - d.left - d.right,
                T = i(v - d[A], E),
                k = i(b - d[R], P),
                O = !t.middlewareData.shift;
              let D = T,
                L = k;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (L = P), null != (r = t.middlewareData.shift) && r.enabled.y && (D = E), O && !y) {
                const e = a(d.left, 0),
                  t = a(d.right, 0),
                  n = a(d.top, 0),
                  r = a(d.bottom, 0);
                x ? L = b - 2 * (0 !== e || 0 !== t ? e + t : a(d.left, d.right)) : D = v - 2 * (0 !== n || 0 !== r ? n + r : a(d.top, d.bottom))
              }
              await f({
                ...t,
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
        he = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = p(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = P(await S(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: T(e)
                    }
                  }
                }
                case "escaped": {
                  const e = P(await S(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: T(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        me = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: a,
              platform: l,
              elements: s,
              middlewareData: c
            } = t, {
              element: f,
              padding: u = 0
            } = p(e, t) || {};
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
        ge = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = t, {
                offset: l = 0,
                mainAxis: s = !0,
                crossAxis: c = !0
              } = p(e, t), f = {
                x: n,
                y: r
              }, u = w(o), d = g(u);
              let m = f[d],
                y = f[u];
              const x = p(l, t),
                b = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
                };
              if (s) {
                const e = "y" === d ? "height" : "width",
                  t = i.reference[d] - i.floating[e] + b.mainAxis,
                  n = i.reference[d] + i.reference[e] - b.mainAxis;
                m < t ? m = t : m > n && (m = n)
              }
              if (c) {
                var v, A;
                const e = "y" === d ? "width" : "height",
                  t = ["top", "left"].includes(h(o)),
                  n = i.reference[u] - i.floating[e] + (t && (null == (v = a.offset) ? void 0 : v[u]) || 0) + (t ? 0 : b.crossAxis),
                  r = i.reference[u] + i.reference[e] + (t ? 0 : (null == (A = a.offset) ? void 0 : A[u]) || 0) - (t ? b.crossAxis : 0);
                y < n ? y = n : y > r && (y = r)
              }
              return {
                [d]: m,
                [u]: y
              }
            }
          }
        },
        ye = (e, t, n) => {
          const r = new Map,
            o = {
              platform: se,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, l = i.filter(Boolean), s = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
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
                  reference: e,
                  floating: t
                }
              });
              f = null != g ? g : f, u = null != y ? y : u, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...w
                }
              }, x && h <= 50 && (h++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (c = !0 === x.rects ? await a.getElementRects({
                reference: e,
                floating: t,
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
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var we = n(18429),
        xe = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

      function be(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!be(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || be(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function ve(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ae(e, t) {
        const n = ve(e);
        return Math.round(t * n) / n
      }

      function Re(e) {
        const t = r.useRef(e);
        return xe((() => {
          t.current = e
        })), t
      }
      const Ee = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? me({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? me({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        Se = (e, t) => ({
          ...ue(e),
          options: [e, t]
        }),
        Pe = (e, t) => ({
          ...ge(e),
          options: [e, t]
        }),
        Te = (e, t) => ({
          ...de(e),
          options: [e, t]
        }),
        ke = (e, t) => ({
          ...pe(e),
          options: [e, t]
        }),
        Oe = (e, t) => ({
          ...he(e),
          options: [e, t]
        }),
        De = (e, t) => ({
          ...Ee(e),
          options: [e, t]
        });
      var Le = n(78004),
        Ce = n(42295),
        Me = r.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, Ce.jsx)(Le.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, Ce.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      Me.displayName = "Arrow";
      var _e = Me,
        He = n(95362),
        We = n(85426),
        Be = n(76286),
        je = n(63155),
        Fe = n(60528),
        Ne = "Popper",
        [ze, $e] = (0, We.A)(Ne),
        [Ie, Ve] = ze(Ne),
        Xe = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null);
          return (0, Ce.jsx)(Ie, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      Xe.displayName = Ne;
      var Ye = "PopperAnchor",
        qe = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, a = Ve(Ye, n), l = r.useRef(null), s = (0, He.s)(t, l);
          return r.useEffect((() => {
            a.onAnchorChange(o?.current || l.current)
          })), o ? null : (0, Ce.jsx)(Le.sG.div, {
            ...i,
            ref: s
          })
        }));
      qe.displayName = Ye;
      var Ge = "PopperContent",
        [Ue, Je] = ze(Ge),
        Ke = r.forwardRef(((e, t) => {
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
          } = e, b = Ve(Ge, n), [v, A] = r.useState(null), R = (0, He.s)(t, (e => A(e))), [E, S] = r.useState(null), P = (0, Fe.X)(E), T = P?.width ?? 0, k = P?.height ?? 0, O = o + ("center" !== c ? "-" + c : ""), D = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, C = Array.isArray(p) ? p : [p], M = C.length > 0, _ = {
            padding: D,
            boundary: C.filter(tt),
            altBoundary: M
          }, {
            refs: H,
            floatingStyles: W,
            placement: B,
            isPositioned: j,
            middlewareData: F
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
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
            } = e, [u, d] = r.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [p, h] = r.useState(o);
            be(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), x = r.useCallback((e => {
              e !== R.current && (R.current = e, g(e))
            }), []), b = r.useCallback((e => {
              e !== E.current && (E.current = e, w(e))
            }), []), v = a || m, A = l || y, R = r.useRef(null), E = r.useRef(null), S = r.useRef(u), P = null != c, T = Re(c), k = Re(i), O = Re(f), D = r.useCallback((() => {
              if (!R.current || !E.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: p
              };
              k.current && (e.platform = k.current), ye(R.current, E.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                L.current && !be(S.current, t) && (S.current = t, we.flushSync((() => {
                  d(t)
                })))
              }))
            }), [p, t, n, k, O]);
            xe((() => {
              !1 === f && S.current.isPositioned && (S.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [f]);
            const L = r.useRef(!1);
            xe((() => (L.current = !0, () => {
              L.current = !1
            })), []), xe((() => {
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
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!M.floating) return e;
                const t = Ae(M.floating, u.x),
                  r = Ae(M.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...ve(M.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
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
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: l = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = U(e), p = o || l ? [...d ? Y(d) : [], ...Y(t)] : [];
              p.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), l && e.addEventListener("resize", n)
              }));
              const h = d && f ? function(e, t) {
                let n, r = null;
                const o = L(e);

                function l() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function c(f, u) {
                  void 0 === f && (f = !1), void 0 === u && (u = 1), l();
                  const d = e.getBoundingClientRect(),
                    {
                      left: p,
                      top: h,
                      width: m,
                      height: g
                    } = d;
                  if (f || t(), !m || !g) return;
                  const y = {
                    rootMargin: -s(h) + "px " + -s(o.clientWidth - (p + m)) + "px " + -s(o.clientHeight - (h + g)) + "px " + -s(p) + "px",
                    threshold: a(0, i(1, u)) || 1
                  };
                  let w = !0;

                  function x(t) {
                    const r = t[0].intersectionRatio;
                    if (r !== u) {
                      if (!w) return c();
                      r ? c(!1, r) : n = setTimeout((() => {
                        c(!1, 1e-7)
                      }), 1e3)
                    }
                    1 !== r || ce(d, e.getBoundingClientRect()) || c(), w = !1
                  }
                  try {
                    r = new IntersectionObserver(x, {
                      ...y,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(x, y)
                  }
                  r.observe(e)
                }(!0), l
              }(d, n) : null;
              let m, g = -1,
                y = null;
              c && (y = new ResizeObserver((e => {
                let [r] = e;
                r && r.target === d && y && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame((() => {
                  var e;
                  null == (e = y) || e.observe(t)
                }))), n()
              })), d && !u && y.observe(d), y.observe(t));
              let w = u ? Z(e) : null;
              return u && function t() {
                const r = Z(e);
                w && !ce(w, r) && n(), w = r, m = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                p.forEach((e => {
                  o && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                })), null == h || h(), null == (e = y) || e.disconnect(), y = null, u && cancelAnimationFrame(m)
              }
            }(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [(N = {
              mainAxis: l + k,
              alignmentAxis: f
            }, {
              ...fe(N),
              options: [N, undefined]
            }), d && Se({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? Pe() : void 0,
              ..._
            }), d && Te({
              ..._
            }), ke({
              ..._,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), E && De({
              element: E,
              padding: u
            }), nt({
              arrowWidth: T,
              arrowHeight: k
            }), g && Oe({
              strategy: "referenceHidden",
              ..._
            })]
          });
          var N;
          const [z, $] = rt(B), I = (0, Be.c)(w);
          (0, je.N)((() => {
            j && I?.()
          }), [j, I]);
          const V = F.arrow?.x,
            X = F.arrow?.y,
            q = 0 !== F.arrow?.centerOffset,
            [G, J] = r.useState();
          return (0, je.N)((() => {
            v && J(window.getComputedStyle(v).zIndex)
          }), [v]), (0, Ce.jsx)("div", {
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
            dir: e.dir,
            children: (0, Ce.jsx)(Ue, {
              scope: n,
              placedSide: z,
              onArrowChange: S,
              arrowX: V,
              arrowY: X,
              shouldHideArrow: q,
              children: (0, Ce.jsx)(Le.sG.div, {
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
      Ke.displayName = Ge;
      var Qe = "PopperArrow",
        Ze = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        et = r.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = Je(Qe, n), i = Ze[o.placedSide];
          return (0, Ce.jsx)("span", {
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
            children: (0, Ce.jsx)(_e, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function tt(e) {
        return null !== e
      }
      et.displayName = Qe;
      var nt = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [s, c] = rt(n), f = {
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

      function rt(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var ot = Xe,
        it = qe,
        at = Ke,
        lt = et
    }
  }
]);