try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "574561c5-da11-41ef-8f67-7af4cc09bedd", e._sentryDebugIdIdentifier = "sentry-dbid-574561c5-da11-41ef-8f67-7af4cc09bedd")
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
  [4860], {
    45787(e, t, n) {
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
          return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live], script"))), function(e, t, n, s) {
            var c = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = l(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
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
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
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
              })
            };
            return m(t), d.clear(), a++,
              function() {
                u.forEach(function(e) {
                  var t = r.get(e) - 1,
                    i = f.get(e) - 1;
                  r.set(e, t), f.set(e, i), t || (o.has(e) || e.removeAttribute(s), o.delete(e)), i || e.removeAttribute(n)
                }), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(s, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    86187(e, t, n) {
      n.d(t, {
        Oh: () => s
      });
      var r = n(4637),
        o = Object.defineProperty,
        i = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        }),
        a = 0,
        l = null;

      function s() {
        r.useEffect(() => {
          l || (l = {
            start: c(),
            end: c()
          });
          const {
            start: e,
            end: t
          } = l;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), a++, () => {
            1 === a && (l?.start.remove(), l?.end.remove(), l = null), a = Math.max(0, a - 1)
          }
        }, [])
      }

      function c() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      i(function(e) {
        return s(), e.children
      }, "FocusGuards"), i(s, "useFocusGuards"), i(c, "createFocusGuard")
    },
    78961(e, t, n) {
      n.d(t, {
        Mz: () => st,
        i3: () => ft,
        UC: () => ct,
        bL: () => lt,
        Bk: () => Ge
      });
      var r = n(4637);
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
        };

      function u(e, t, n) {
        return a(e, i(t, n))
      }

      function d(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function p(e) {
        return e.split("-")[0]
      }

      function h(e) {
        return e.split("-")[1]
      }

      function m(e) {
        return "x" === e ? "y" : "x"
      }

      function g(e) {
        return "y" === e ? "height" : "width"
      }

      function y(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function w(e) {
        return m(y(e))
      }

      function x(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const v = ["left", "right"],
        b = ["right", "left"],
        A = ["top", "bottom"],
        R = ["bottom", "top"];

      function S(e) {
        const t = p(e);
        return f[t] + e.slice(t.length)
      }

      function E(e) {
        return "number" != typeof e ? function(e) {
          var t, n, r, o;
          return {
            top: null != (t = e.top) ? t : 0,
            right: null != (n = e.right) ? n : 0,
            bottom: null != (r = e.bottom) ? r : 0,
            left: null != (o = e.left) ? o : 0
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function P(e) {
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

      function O(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = y(t),
          a = w(t),
          l = g(a),
          s = p(t),
          c = "y" === i,
          f = r.x + r.width / 2 - o.width / 2,
          u = r.y + r.height / 2 - o.height / 2,
          d = r[l] / 2 - o[l] / 2;
        let m;
        switch (s) {
          case "top":
            m = {
              x: f,
              y: r.y - o.height
            };
            break;
          case "bottom":
            m = {
              x: f,
              y: r.y + r.height
            };
            break;
          case "right":
            m = {
              x: r.x + r.width,
              y: u
            };
            break;
          case "left":
            m = {
              x: r.x - o.width,
              y: u
            };
            break;
          default:
            m = {
              x: r.x,
              y: r.y
            }
        }
        const x = h(t);
        return x && (m[a] += d * ("end" === x ? 1 : -1) * (n && c ? -1 : 1)), m
      }
      async function C(e, t) {
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
          altBoundary: p = !1,
          padding: h = 0
        } = d(t, e), m = E(h), g = l[p ? "floating" === u ? "reference" : "floating" : u], y = P(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: s
        })), w = "floating" === u ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), v = await (null == i.isElement ? void 0 : i.isElement(x)) && await (null == i.getScale ? void 0 : i.getScale(x)) || {
          x: 1,
          y: 1
        }, b = P(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: w,
          offsetParent: x,
          strategy: s
        }) : w);
        return {
          top: (y.top - b.top + m.top) / v.y,
          bottom: (b.bottom - y.bottom + m.bottom) / v.y,
          left: (y.left - b.left + m.left) / v.x,
          right: (b.right - y.right + m.right) / v.x
        }
      }

      function L(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function T(e) {
        return o.some(t => e[t] >= 0)
      }
      const k = new Set(["left", "top"]);

      function D() {
        return "undefined" != typeof window
      }

      function M(e) {
        return H(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function _(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function W(e) {
        var t;
        return null == (t = (H(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function H(e) {
        return !!D() && (e instanceof Node || e instanceof _(e).Node)
      }

      function F(e) {
        return !!D() && (e instanceof Element || e instanceof _(e).Element)
      }

      function j(e) {
        return !!D() && (e instanceof HTMLElement || e instanceof _(e).HTMLElement)
      }

      function z(e) {
        return !(!D() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof _(e).ShadowRoot)
      }

      function B(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = J(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
      }

      function N(e) {
        return /^(table|td|th)$/.test(M(e))
      }

      function $(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const V = /transform|translate|scale|rotate|perspective|filter/,
        I = /paint|layout|strict|content/,
        X = e => !!e && "none" !== e;
      let Y;

      function G(e) {
        const t = F(e) ? J(e) : e;
        return X(t.transform) || X(t.translate) || X(t.scale) || X(t.rotate) || X(t.perspective) || !q() && (X(t.backdropFilter) || X(t.filter)) || V.test(t.willChange || "") || I.test(t.contain || "")
      }

      function q() {
        return null == Y && (Y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Y
      }

      function U(e) {
        return /^(html|body|#document)$/.test(M(e))
      }

      function J(e) {
        return _(e).getComputedStyle(e)
      }

      function K(e) {
        return F(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Q(e) {
        if ("html" === M(e)) return e;
        const t = e.assignedSlot || e.parentNode || z(e) && e.host || W(e);
        return z(t) ? t.host : t
      }

      function Z(e) {
        const t = Q(e);
        return U(t) ? (e.ownerDocument || e).body : j(t) && B(t) ? t : Z(t)
      }

      function ee(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = Z(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = _(o);
        if (i) {
          const e = te(a);
          return t.concat(a, a.visualViewport || [], B(o) ? o : [], e && n ? ee(e) : [])
        }
        return t.concat(o, ee(o, [], n))
      }

      function te(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function ne(e) {
        const t = J(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = j(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = l(n) !== i || l(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function re(e) {
        return F(e) ? e : e.contextElement
      }

      function oe(e) {
        const t = re(e);
        if (!j(t)) return c(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = ne(t);
        let a = (i ? l(n.width) : n.width) / r,
          s = (i ? l(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const ie = c(0);

      function ae(e) {
        const t = _(e);
        return q() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : ie
      }

      function le(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = re(e);
        let a = c(1);
        t && (r ? F(r) && (a = oe(r)) : a = oe(e));
        const l = function(e, t, n) {
          return void 0 === t && (t = !1), !!n && t && n === _(e)
        }(i, n, r) ? ae(i) : c(0);
        let s = (o.left + l.x) / a.x,
          f = (o.top + l.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i && r) {
          const e = _(i),
            t = F(r) ? _(r) : r;
          let n = e,
            o = te(n);
          for (; o && t !== n;) {
            const e = oe(o),
              t = o.getBoundingClientRect(),
              r = J(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            s *= e.x, f *= e.y, u *= e.x, d *= e.y, s += i, f += a, n = _(o), o = te(n)
          }
        }
        return P({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function se(e, t) {
        const n = K(e).scrollLeft;
        return t ? t.left + n : le(W(e)).left + n
      }

      function ce(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - se(e, n),
          y: n.top + t.scrollTop
        }
      }

      function fe(e, t, n) {
        let r;
        if ("viewport" === t || "layoutViewport" === t) r = function(e, t, n) {
          void 0 === n && (n = "viewport");
          const r = "layoutViewport" === n,
            o = _(e),
            i = W(e),
            a = o.visualViewport;
          let l = i.clientWidth,
            s = i.clientHeight,
            c = 0,
            f = 0;
          if (a) {
            const e = !q() || "fixed" === t;
            r ? e || (c = -a.offsetLeft, f = -a.offsetTop) : (l = a.width, s = a.height, e && (c = a.offsetLeft, f = a.offsetTop))
          }
          if (se(i) <= 0) {
            const e = i.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              r = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              o = Math.abs(i.clientWidth - t.clientWidth - r),
              a = "stable both-edges" === getComputedStyle(i).scrollbarGutter ? o / 2 : o;
            a <= 25 && (l -= a)
          }
          return {
            width: l,
            height: s,
            x: c,
            y: f
          }
        }(e, n, t);
        else if ("document" === t) r = function(e) {
          const t = K(e),
            n = e.ownerDocument.body,
            r = a(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
            o = a(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
          let i = -t.scrollLeft + se(e);
          const l = -t.scrollTop;
          return "rtl" === J(n).direction && (i += a(e.clientWidth, n.clientWidth) - r), {
            width: r,
            height: o,
            x: i,
            y: l
          }
        }(W(e));
        else if (F(t)) r = function(e, t) {
          const n = le(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = oe(e);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = ae(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return P(r)
      }

      function ue(e, t, n) {
        const r = j(t),
          o = W(t),
          i = "fixed" === n,
          a = le(e, !0, i, t);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);
        if ((r || !i) && (("body" !== M(t) || B(o)) && (l = K(t)), r)) {
          const e = le(t, !0, i, t);
          s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
        }!r && o && (s.x = se(o));
        const f = !o || r || i ? c(0) : ce(o, l);
        return {
          x: a.left + l.scrollLeft - s.x - f.x,
          y: a.top + l.scrollTop - s.y - f.y,
          width: a.width,
          height: a.height
        }
      }

      function de(e) {
        return "static" === J(e).position
      }

      function pe(e, t) {
        if (!j(e) || "fixed" === J(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return W(e) === n && (n = n.ownerDocument.body), n
      }

      function he(e, t) {
        const n = _(e);
        if ($(e)) return n;
        if (!j(e)) {
          let t = Q(e);
          for (; t && !U(t);) {
            if (F(t) && !de(t)) return t;
            t = Q(t)
          }
          return n
        }
        let r = pe(e, t);
        for (; r && N(r) && de(r);) r = pe(r, t);
        return r && U(r) && de(r) && !G(r) ? n : r || function(e) {
          let t = Q(e);
          for (; j(t) && !U(t);) {
            if (G(t)) return t;
            if ($(t)) return null;
            t = Q(t)
          }
          return null
        }(e) || n
      }
      const me = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = W(r),
            l = !!t && $(t.floating);
          if (r === a || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = j(r);
          if ((d || !i) && (("body" !== M(r) || B(a)) && (s = K(r)), d)) {
            const e = le(r);
            f = oe(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const p = !a || d || i ? c(0) : ce(a, s);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: W,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const l = [..."clippingAncestors" === n ? $(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = ee(e, [], !1).filter(e => F(e) && "body" !== M(e)),
                o = null;
              const i = "fixed" === J(e).position;
              let a = i ? Q(e) : e;
              for (; F(a) && !U(a);) {
                const e = J(a),
                  t = G(a),
                  n = o ? o.position : i ? "fixed" : "";
                t || "fixed" !== n && ("absolute" !== n || "static" !== e.position) ? o = e : r = r.filter(e => e !== a), a = Q(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            s = fe(t, l[0], o);
          let c = s.top,
            f = s.right,
            u = s.bottom,
            d = s.left;
          for (let e = 1; e < l.length; e++) {
            const n = fe(t, l[e], o);
            c = a(n.top, c), f = i(n.right, f), u = i(n.bottom, u), d = a(n.left, d)
          }
          return {
            width: f - d,
            height: u - c,
            x: d,
            y: c
          }
        },
        getOffsetParent: he,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || he,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: ue(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return e.getClientRects ? Array.from(e.getClientRects()) : []
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = ne(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: oe,
        isElement: F,
        isRTL: function(e) {
          return "rtl" === J(e).direction
        }
      };

      function ge(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const ye = function(e) {
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
                fallbackPlacements: m,
                fallbackStrategy: E = "bestFit",
                fallbackAxisSideDirection: P = "none",
                flipAlignment: O = !0,
                ...C
              } = d(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const L = p(o),
                T = y(l),
                k = p(l) === l,
                D = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                M = m || (k || !O ? [S(l)] : function(e) {
                  const t = S(e);
                  return [x(e), t, x(t)]
                }(l)),
                _ = "none" !== P;
              !m && _ && M.push(... function(e, t, n, r) {
                const o = h(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? b : v : t ? v : b;
                    case "left":
                    case "right":
                      return t ? A : R;
                    default:
                      return []
                  }
                }(p(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(x)))), i
              }(l, O, P, D));
              const W = [l, ...M],
                H = await s.detectOverflow(t, C),
                F = [];
              let j = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && F.push(H[L]), u) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = h(e),
                    o = w(e),
                    i = g(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = S(a)), [a, S(a)]
                }(o, a, D);
                F.push(H[e[0]], H[e[1]])
              }
              if (j = [...j, {
                  placement: o,
                  overflows: F
                }], !F.every(e => e <= 0)) {
                var z, B;
                const e = ((null == (z = i.flip) ? void 0 : z.index) || 0) + 1,
                  t = W[e];
                if (t && ("alignment" !== u || T === y(t) || j.every(e => y(e.placement) !== T || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: j
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (B = j.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : B.placement;
                if (!n) switch (E) {
                  case "bestFit": {
                    var N;
                    const e = null == (N = j.filter(e => {
                      if (_) {
                        const t = y(e.placement);
                        return t === T || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : N[0];
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
        we = e => ({
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
              padding: p = 0
            } = d(e, t) || {};
            if (null == f) return {};
            const m = E(p),
              y = {
                x: n,
                y: r
              },
              x = w(o),
              v = g(x),
              b = await l.getDimensions(f),
              A = "y" === x,
              R = A ? "top" : "left",
              S = A ? "bottom" : "right",
              P = A ? "clientHeight" : "clientWidth",
              O = a.reference[v] + a.reference[x] - y[x] - a.floating[v],
              C = y[x] - a.reference[x],
              L = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let T = L ? L[P] : 0;
            T && await (null == l.isElement ? void 0 : l.isElement(L)) || (T = s.floating[P] || a.floating[v]);
            const k = O / 2 - C / 2,
              D = T / 2 - b[v] / 2 - 1,
              M = i(m[R], D),
              _ = i(m[S], D),
              W = T - b[v] - _,
              H = T / 2 - b[v] / 2 + k,
              F = u(M, H, W),
              j = !c.arrow && null != h(o) && H !== F && a.reference[v] / 2 - (H < M ? M : _) - b[v] / 2 < 0,
              z = j ? H < M ? H - M : H - W : 0;
            return {
              [x]: y[x] + z,
              data: {
                [x]: F,
                centerOffset: H - F - z,
                ...j && {
                  alignmentOffset: z
                }
              },
              reset: j
            }
          }
        }),
        xe = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              var n, r;
              const {
                x: o,
                y: i,
                placement: a,
                rects: l,
                middlewareData: s
              } = t, {
                offset: c = 0,
                mainAxis: f = !0,
                crossAxis: u = !0
              } = d(e, t), h = {
                x: o,
                y: i
              }, g = y(a), w = m(g);
              let x = h[w],
                v = h[g];
              const b = d(c, t),
                A = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: null != (n = b.mainAxis) ? n : 0,
                  crossAxis: null != (r = b.crossAxis) ? r : 0
                };
              if (f) {
                const e = "y" === w ? "height" : "width",
                  t = l.reference[w] - l.floating[e] + A.mainAxis,
                  n = l.reference[w] + l.reference[e] - A.mainAxis;
                x < t ? x = t : x > n && (x = n)
              }
              if (u) {
                var R, S;
                const e = "y" === w ? "width" : "height",
                  t = k.has(p(a)),
                  n = l.reference[g] - l.floating[e] + (t && (null == (R = s.offset) ? void 0 : R[g]) || 0) + (t ? 0 : A.crossAxis),
                  r = l.reference[g] + l.reference[e] + (t ? 0 : (null == (S = s.offset) ? void 0 : S[g]) || 0) - (t ? A.crossAxis : 0);
                v < n ? v = n : v > r && (v = r)
              }
              return {
                [w]: x,
                [g]: v
              }
            }
          }
        },
        ve = (e, t, n) => {
          const r = new Map,
            o = null != n ? n : {},
            i = {
              ...me,
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, l = a.detectOverflow ? a : {
              ...a,
              detectOverflow: C
            }, s = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: f,
                y: u
              } = O(c, r, s),
              d = r,
              p = 0;
            const h = {};
            for (let n = 0; n < i.length; n++) {
              const m = i[n];
              if (!m) continue;
              const {
                name: g,
                fn: y
              } = m, {
                x: w,
                y: x,
                data: v,
                reset: b
              } = await y({
                x: f,
                y: u,
                initialPlacement: r,
                placement: d,
                strategy: o,
                middlewareData: h,
                rects: c,
                platform: l,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              f = null != w ? w : f, u = null != x ? x : u, h[g] = {
                ...h[g],
                ...v
              }, b && p < 50 && (p++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: f,
                y: u
              } = O(c, d, s))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var be = n(84017),
        Ae = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function Re(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Re(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Re(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Se(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ee(e, t) {
        const n = Se(e);
        return Math.round(t * n) / n
      }

      function Pe(e) {
        const t = r.useRef(e);
        return Ae(() => {
          t.current = e
        }), t
      }
      const Oe = (e, t) => {
          const n = function(e) {
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
                  } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = p(n), l = h(n), s = "y" === y(n), c = k.has(a) ? -1 : 1, f = i && s ? -1 : 1, u = d(t, e);
                  let {
                    mainAxis: m,
                    crossAxis: g,
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
                  return l && "number" == typeof w && (g = "end" === l ? -1 * w : w), s ? {
                    x: g * f,
                    y: m * c
                  } : {
                    x: m * c,
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
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Ce = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: n,
                  y: r,
                  placement: o,
                  platform: i
                } = t, {
                  mainAxis: a = !0,
                  crossAxis: l = !1,
                  limiter: s = {
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
                  ...c
                } = d(e, t), f = {
                  x: n,
                  y: r
                }, p = await i.detectOverflow(t, c), h = y(o), g = m(h);
                let w = f[g],
                  x = f[h];
                const v = (e, t) => u(t + p["y" === e ? "top" : "left"], t, t - p["y" === e ? "bottom" : "right"]);
                a && (w = v(g, w)), l && (x = v(h, x));
                const b = s.fn({
                  ...t,
                  [g]: w,
                  [h]: x
                });
                return {
                  ...b,
                  data: {
                    x: b.x - n,
                    y: b.y - r,
                    enabled: {
                      [g]: a,
                      [h]: l
                    }
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Le = (e, t) => {
          const n = ye(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Te = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "size",
              options: e,
              async fn(t) {
                const {
                  placement: n,
                  rects: r,
                  platform: o,
                  elements: l
                } = t, {
                  apply: s = () => {},
                  ...c
                } = d(e, t), f = await o.detectOverflow(t, c), u = p(n), m = h(n), g = "y" === y(n), {
                  width: w,
                  height: x
                } = r.floating;
                let v, b;
                "top" === u || "bottom" === u ? (v = u, b = m === (await (null == o.isRTL ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = u, v = "end" === m ? "top" : "bottom");
                const A = x - f.top - f.bottom,
                  R = w - f.left - f.right,
                  S = i(x - f[v], A),
                  E = i(w - f[b], R),
                  P = t.middlewareData.shift,
                  O = !P;
                let C = S,
                  L = E;
                null != P && P.enabled.x && (L = R), null != P && P.enabled.y && (C = A), O && !m && (g ? L = w - 2 * a(f.left, f.right) : C = x - 2 * a(f.top, f.bottom)), await s({
                  ...t,
                  availableWidth: L,
                  availableHeight: C
                });
                const T = await o.getDimensions(l.floating);
                return w !== T.width || x !== T.height ? {
                  reset: {
                    rects: !0
                  }
                } : {}
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        ke = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: n,
                  platform: r
                } = t, {
                  strategy: o = "referenceHidden",
                  ...i
                } = d(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = L(await r.detectOverflow(t, {
                      ...i,
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
                    const e = L(await r.detectOverflow(t, {
                      ...i,
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
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        De = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: r
              } = "function" == typeof e ? e(t) : e;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? we({
                element: n.current,
                padding: r
              }).fn(t) : {} : n ? we({
                element: n,
                padding: r
              }).fn(t) : {};
              var o
            }
          }))(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        };
      var Me = n(41988),
        _e = n(39793),
        We = Object.defineProperty,
        He = (e, t) => We(e, "name", {
          value: t,
          configurable: !0
        }),
        Fe = r.forwardRef(He(function(e, t) {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, _e.jsx)(Me.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, _e.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }, "Arrow")),
        je = n(85049),
        ze = n(72579),
        Be = n(7198),
        Ne = n(9608),
        $e = n(7078),
        Ve = Object.defineProperty,
        Ie = (e, t) => Ve(e, "name", {
          value: t,
          configurable: !0
        }),
        Xe = "Popper",
        [Ye, Ge] = (0, ze.A)(Xe),
        [qe, Ue] = Ye(Xe),
        Je = Ie(e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null), [a, l] = r.useState(void 0);
          return (0, _e.jsx)(qe, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            placementState: a,
            setPlacementState: l,
            children: n
          })
        }, "Popper"),
        Ke = r.forwardRef(Ie(function(e, t) {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, a = Ue("PopperAnchor", n), l = r.useRef(null), s = a.onAnchorChange, c = r.useCallback(e => {
            l.current = e, e && s(e)
          }, [s]), f = (0, je.s)(t, c), u = r.useRef(null);
          r.useEffect(() => {
            if (!o) return;
            const e = u.current;
            u.current = o.current, e !== u.current && s(u.current)
          });
          const d = a.placementState && at(a.placementState),
            p = d?.[0],
            h = d?.[1];
          return o ? null : (0, _e.jsx)(Me.sG.div, {
            "data-radix-popper-side": p,
            "data-radix-popper-align": h,
            ...i,
            ref: f
          })
        }, "PopperAnchor")),
        Qe = "PopperContent",
        [Ze, et] = Ye(Qe),
        tt = r.forwardRef(Ie(function(e, t) {
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
          } = e, v = Ue(Qe, n), [b, A] = r.useState(null), R = (0, je.s)(t, A), [S, E] = r.useState(null), P = (0, $e.X)(S), O = P?.width ?? 0, C = P?.height ?? 0, L = o + ("center" !== c ? "-" + c : ""), T = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, k = Array.isArray(p) ? p : [p], D = k.length > 0, M = {
            padding: T,
            boundary: k.filter(ot),
            altBoundary: D
          }, {
            refs: H,
            floatingStyles: F,
            placement: j,
            isPositioned: z,
            middlewareData: B
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
            Re(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), x = r.useCallback(e => {
              e !== R.current && (R.current = e, g(e))
            }, []), v = r.useCallback(e => {
              e !== S.current && (S.current = e, w(e))
            }, []), b = a || m, A = l || y, R = r.useRef(null), S = r.useRef(null), E = r.useRef(u), P = null != c, O = Pe(c), C = Pe(i), L = Pe(f), T = r.useCallback(() => {
              if (!R.current || !S.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: p
              };
              C.current && (e.platform = C.current), ve(R.current, S.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== L.current
                };
                k.current && !Re(E.current, t) && (E.current = t, be.flushSync(() => {
                  d(t)
                }))
              })
            }, [p, t, n, C, L]);
            Ae(() => {
              !1 === f && E.current.isPositioned && (E.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [f]);
            const k = r.useRef(!1);
            Ae(() => (k.current = !0, () => {
              k.current = !1
            }), []), Ae(() => {
              if (b && (R.current = b), A && (S.current = A), b && A) {
                if (O.current) return O.current(b, A, T);
                T()
              }
            }, [b, A, T, O, P]);
            const D = r.useMemo(() => ({
                reference: R,
                floating: S,
                setReference: x,
                setFloating: v
              }), [x, v]),
              M = r.useMemo(() => ({
                reference: b,
                floating: A
              }), [b, A]),
              _ = r.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!M.floating) return e;
                const t = Ee(M.floating, u.x),
                  r = Ee(M.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Se(M.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, s, M.floating, u.x, u.y]);
            return r.useMemo(() => ({
              ...u,
              update: T,
              refs: D,
              elements: M,
              floatingStyles: _
            }), [u, T, D, M, _])
          }({
            strategy: "fixed",
            placement: L,
            whileElementsMounted: Ie((...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: l = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = re(e), p = o || l ? [...d ? ee(d) : [], ...t ? ee(t) : []] : [];
              p.forEach(e => {
                o && e.addEventListener("scroll", n), l && e.addEventListener("resize", n)
              });
              const h = d && f ? function(e, t, n) {
                let r, o = null;
                const l = W(e);

                function c() {
                  var e;
                  clearTimeout(r), null == (e = o) || e.disconnect(), o = null
                }

                function f(n, u) {
                  void 0 === n && (n = !1), void 0 === u && (u = 1), c();
                  const d = e.getBoundingClientRect(),
                    {
                      left: p,
                      top: h,
                      width: m,
                      height: g
                    } = d;
                  if (n || t(), !m || !g) return;
                  const y = {
                    rootMargin: -s(h) + "px " + -s(l.clientWidth - (p + m)) + "px " + -s(l.clientHeight - (h + g)) + "px " + -s(p) + "px",
                    threshold: a(0, i(1, u)) || 1
                  };
                  let w = !0;

                  function x(t) {
                    const n = t[0].intersectionRatio;
                    if (!ge(d, e.getBoundingClientRect())) return f();
                    if (n !== u) {
                      if (!w) return f();
                      n ? f(!1, n) : r = setTimeout(() => {
                        f(!1, 1e-7)
                      }, 1e3)
                    }
                    w = !1
                  }
                  try {
                    o = new IntersectionObserver(x, {
                      ...y,
                      root: l.ownerDocument
                    })
                  } catch (e) {
                    o = new IntersectionObserver(x, y)
                  }
                  o.observe(e)
                }
                const u = _(e),
                  d = () => f(n);
                return u.addEventListener("resize", d), f(!0), () => {
                  u.removeEventListener("resize", d), c()
                }
              }(d, n, l) : null;
              let m, g = -1,
                y = null;
              c && (y = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === d && y && t && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                  var e;
                  null == (e = y) || e.observe(t)
                })), n()
              }), d && !u && y.observe(d), t && y.observe(t));
              let w = u ? le(e) : null;
              return u && function t() {
                const r = le(e);
                w && !ge(w, r) && n(), w = r, m = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                p.forEach(e => {
                  o && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                }), null == h || h(), null == (e = y) || e.disconnect(), y = null, u && cancelAnimationFrame(m)
              }
            }(...e, {
              animationFrame: "always" === y
            }), "whileElementsMounted"),
            elements: {
              reference: v.anchor
            },
            middleware: [Oe({
              mainAxis: l + C,
              alignmentAxis: f
            }), d && Ce({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? {
                fn: xe(N).fn,
                options: [N, void 0]
              } : void 0,
              ...M
            }), d && Le({
              ...M
            }), Te({
              ...M,
              apply: Ie(({
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
              }, "apply")
            }), S && De({
              element: S,
              padding: u
            }), it({
              arrowWidth: O,
              arrowHeight: C
            }), g && ke({
              strategy: "referenceHidden",
              ...M,
              boundary: D ? M.boundary : void 0
            })]
          });
          var N;
          const $ = v.setPlacementState;
          (0, Ne.N)(() => ($(j), () => {
            $(void 0)
          }), [j, $]);
          const [V, I] = at(j), X = (0, Be.c)(w);
          (0, Ne.N)(() => {
            z && X?.()
          }, [z, X]);
          const Y = B.arrow?.x,
            G = B.arrow?.y,
            q = 0 !== B.arrow?.centerOffset,
            [U, J] = r.useState();
          return (0, Ne.N)(() => {
            b && J(window.getComputedStyle(b).zIndex)
          }, [b]), (0, _e.jsx)("div", {
            ref: H.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...F,
              transform: z ? F.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [B.transformOrigin?.x, B.transformOrigin?.y].join(" "),
              ...B.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, _e.jsx)(Ze, {
              scope: n,
              placedSide: V,
              placedAlign: I,
              onArrowChange: E,
              arrowX: Y,
              arrowY: G,
              shouldHideArrow: q,
              children: (0, _e.jsx)(Me.sG.div, {
                "data-side": V,
                "data-align": I,
                ...x,
                ref: R,
                style: {
                  ...x.style,
                  animation: z ? x.style?.animation : "none"
                }
              })
            })
          })
        }, "PopperContent")),
        nt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        rt = r.forwardRef(Ie(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = et("PopperArrow", n), i = nt[o.placedSide];
          return (0, _e.jsx)("span", {
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
            children: (0, _e.jsx)(Fe, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function ot(e) {
        return null !== e
      }
      Ie(ot, "isNotNull");
      var it = Ie(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [s, c] = at(n), f = {
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
      }), "transformOrigin");

      function at(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      Ie(at, "getSideAndAlignFromPlacement");
      var lt = Je,
        st = Ke,
        ct = tt,
        ft = rt
    },
    7078(e, t, n) {
      n.d(t, {
        X: () => i
      });
      var r = n(4637),
        o = n(9608);

      function i(e) {
        const [t, n] = r.useState(void 0);
        return (0, o.N)(() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
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
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }, [e]), t
      }(0, Object.defineProperty)(i, "name", {
        value: "useSize",
        configurable: !0
      })
    }
  }
]);