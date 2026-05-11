try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f607bea9-f66e-4256-a660-9c365944f038", t._sentryDebugIdIdentifier = "sentry-dbid-f607bea9-f66e-4256-a660-9c365944f038")
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
    94926(t, e, n) {
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
    15234(t, e, n) {
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
    96077(t, e, n) {
      n.d(e, {
        Mz: () => se,
        i3: () => fe,
        UC: () => ce,
        bL: () => le,
        Bk: () => Xt
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
        };

      function u(t, e, n) {
        return a(t, i(e, n))
      }

      function d(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function p(t) {
        return t.split("-")[0]
      }

      function h(t) {
        return t.split("-")[1]
      }

      function m(t) {
        return "x" === t ? "y" : "x"
      }

      function g(t) {
        return "y" === t ? "height" : "width"
      }

      function y(t) {
        const e = t[0];
        return "t" === e || "b" === e ? "y" : "x"
      }

      function w(t) {
        return m(y(t))
      }

      function x(t) {
        return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
      }
      const b = ["left", "right"],
        v = ["right", "left"],
        A = ["top", "bottom"],
        R = ["bottom", "top"];

      function S(t) {
        const e = p(t);
        return f[e] + t.slice(e.length)
      }

      function E(t) {
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

      function O(t) {
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

      function P(t, e, n) {
        let {
          reference: r,
          floating: o
        } = t;
        const i = y(e),
          a = w(e),
          l = g(a),
          s = p(e),
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
        switch (h(e)) {
          case "start":
            m[a] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            m[a] += d * (n && c ? -1 : 1)
        }
        return m
      }
      async function T(t, e) {
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
          altBoundary: p = !1,
          padding: h = 0
        } = d(e, t), m = E(h), g = l[p ? "floating" === u ? "reference" : "floating" : u], y = O(await i.getClippingRect({
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
        }, v = O(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function k(t, e) {
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
      const L = new Set(["left", "top"]);

      function C() {
        return "undefined" != typeof window
      }

      function M(t) {
        return H(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function _(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function W(t) {
        var e;
        return null == (e = (H(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function H(t) {
        return !!C() && (t instanceof Node || t instanceof _(t).Node)
      }

      function F(t) {
        return !!C() && (t instanceof Element || t instanceof _(t).Element)
      }

      function j(t) {
        return !!C() && (t instanceof HTMLElement || t instanceof _(t).HTMLElement)
      }

      function B(t) {
        return !(!C() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof _(t).ShadowRoot)
      }

      function N(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: r,
          display: o
        } = J(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && "inline" !== o && "contents" !== o
      }

      function z(t) {
        return /^(table|td|th)$/.test(M(t))
      }

      function $(t) {
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
        V = /paint|layout|strict|content/,
        X = t => !!t && "none" !== t;
      let Y;

      function q(t) {
        const e = F(t) ? J(t) : t;
        return X(e.transform) || X(e.translate) || X(e.scale) || X(e.rotate) || X(e.perspective) || !G() && (X(e.backdropFilter) || X(e.filter)) || I.test(e.willChange || "") || V.test(e.contain || "")
      }

      function G() {
        return null == Y && (Y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Y
      }

      function U(t) {
        return /^(html|body|#document)$/.test(M(t))
      }

      function J(t) {
        return _(t).getComputedStyle(t)
      }

      function K(t) {
        return F(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function Q(t) {
        if ("html" === M(t)) return t;
        const e = t.assignedSlot || t.parentNode || B(t) && t.host || W(t);
        return B(e) ? e.host : e
      }

      function Z(t) {
        const e = Q(t);
        return U(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : j(e) && N(e) ? e : Z(e)
      }

      function tt(t, e, n) {
        var r;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const o = Z(t),
          i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
          a = _(o);
        if (i) {
          const t = et(a);
          return e.concat(a, a.visualViewport || [], N(o) ? o : [], t && n ? tt(t) : [])
        }
        return e.concat(o, tt(o, [], n))
      }

      function et(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function nt(t) {
        const e = J(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const o = j(t),
          i = o ? t.offsetWidth : n,
          a = o ? t.offsetHeight : r,
          s = l(n) !== i || l(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function rt(t) {
        return F(t) ? t : t.contextElement
      }

      function ot(t) {
        const e = rt(t);
        if (!j(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = nt(e);
        let a = (i ? l(n.width) : n.width) / r,
          s = (i ? l(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const it = c(0);

      function at(t) {
        const e = _(t);
        return G() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : it
      }

      function lt(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const o = t.getBoundingClientRect(),
          i = rt(t);
        let a = c(1);
        e && (r ? F(r) && (a = ot(r)) : a = ot(t));
        const l = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== _(t)) && e
        }(i, n, r) ? at(i) : c(0);
        let s = (o.left + l.x) / a.x,
          f = (o.top + l.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const t = _(i),
            e = r && F(r) ? _(r) : r;
          let n = t,
            o = et(n);
          for (; o && r && e !== n;) {
            const t = ot(o),
              e = o.getBoundingClientRect(),
              r = J(o),
              i = e.left + (o.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              a = e.top + (o.clientTop + parseFloat(r.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += a, n = _(o), o = et(n)
          }
        }
        return O({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function st(t, e) {
        const n = K(t).scrollLeft;
        return e ? e.left + n : lt(W(t)).left + n
      }

      function ct(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - st(t, n),
          y: n.top + e.scrollTop
        }
      }

      function ft(t, e, n) {
        let r;
        if ("viewport" === e) r = function(t, e) {
          const n = _(t),
            r = W(t),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            l = 0,
            s = 0;
          if (o) {
            i = o.width, a = o.height;
            const t = G();
            (!t || t && "fixed" === e) && (l = o.offsetLeft, s = o.offsetTop)
          }
          const c = st(r);
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
          const e = W(t),
            n = K(t),
            r = t.ownerDocument.body,
            o = a(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
            i = a(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
          let l = -n.scrollLeft + st(t);
          const s = -n.scrollTop;
          return "rtl" === J(r).direction && (l += a(e.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: l,
            y: s
          }
        }(W(t));
        else if (F(e)) r = function(t, e) {
          const n = lt(t, !0, "fixed" === e),
            r = n.top + t.clientTop,
            o = n.left + t.clientLeft,
            i = j(t) ? ot(t) : c(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(e, n);
        else {
          const n = at(t);
          r = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return O(r)
      }

      function ut(t, e) {
        const n = Q(t);
        return !(n === e || !F(n) || U(n)) && ("fixed" === J(n).position || ut(n, e))
      }

      function dt(t, e, n) {
        const r = j(e),
          o = W(e),
          i = "fixed" === n,
          a = lt(t, !0, i, e);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);

        function f() {
          s.x = st(o)
        }
        if (r || !r && !i)
          if (("body" !== M(e) || N(o)) && (l = K(e)), r) {
            const t = lt(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else o && f();
        i && !r && o && f();
        const u = !o || r || i ? c(0) : ct(o, l);
        return {
          x: a.left + l.scrollLeft - s.x - u.x,
          y: a.top + l.scrollTop - s.y - u.y,
          width: a.width,
          height: a.height
        }
      }

      function pt(t) {
        return "static" === J(t).position
      }

      function ht(t, e) {
        if (!j(t) || "fixed" === J(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return W(t) === n && (n = n.ownerDocument.body), n
      }

      function mt(t, e) {
        const n = _(t);
        if ($(t)) return n;
        if (!j(t)) {
          let e = Q(t);
          for (; e && !U(e);) {
            if (F(e) && !pt(e)) return e;
            e = Q(e)
          }
          return n
        }
        let r = ht(t, e);
        for (; r && z(r) && pt(r);) r = ht(r, e);
        return r && U(r) && pt(r) && !q(r) ? n : r || function(t) {
          let e = Q(t);
          for (; j(e) && !U(e);) {
            if (q(e)) return e;
            if ($(e)) return null;
            e = Q(e)
          }
          return null
        }(t) || n
      }
      const gt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: r,
            strategy: o
          } = t;
          const i = "fixed" === o,
            a = W(r),
            l = !!e && $(e.floating);
          if (r === a || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = j(r);
          if ((d || !d && !i) && (("body" !== M(r) || N(a)) && (s = K(r)), d)) {
            const t = lt(r);
            f = ot(r), u.x = t.x + r.clientLeft, u.y = t.y + r.clientTop
          }
          const p = !a || d || i ? c(0) : ct(a, s);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: W,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = t;
          const l = [..."clippingAncestors" === n ? $(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let r = tt(t, [], !1).filter(t => F(t) && "body" !== M(t)),
                o = null;
              const i = "fixed" === J(t).position;
              let a = i ? Q(t) : t;
              for (; F(a) && !U(a);) {
                const e = J(a),
                  n = q(a);
                n || "fixed" !== e.position || (o = null), (i ? !n && !o : !n && "static" === e.position && o && ("absolute" === o.position || "fixed" === o.position) || N(a) && !n && ut(t, a)) ? r = r.filter(t => t !== a) : o = e, a = Q(a)
              }
              return e.set(t, r), r
            }(e, this._c) : [].concat(n), r],
            s = ft(e, l[0], o);
          let c = s.top,
            f = s.right,
            u = s.bottom,
            d = s.left;
          for (let t = 1; t < l.length; t++) {
            const n = ft(e, l[t], o);
            c = a(n.top, c), f = i(n.right, f), u = i(n.bottom, u), d = a(n.left, d)
          }
          return {
            width: f - d,
            height: u - c,
            x: d,
            y: c
          }
        },
        getOffsetParent: mt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || mt,
            n = this.getDimensions,
            r = await n(t.floating);
          return {
            reference: dt(t.reference, await e(t.floating), t.strategy),
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
          } = nt(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: ot,
        isElement: F,
        isRTL: function(t) {
          return "rtl" === J(t).direction
        }
      };

      function yt(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }
      const wt = function(t) {
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
                fallbackPlacements: m,
                fallbackStrategy: E = "bestFit",
                fallbackAxisSideDirection: O = "none",
                flipAlignment: P = !0,
                ...T
              } = d(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const k = p(o),
                D = y(l),
                L = p(l) === l,
                C = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                M = m || (L || !P ? [S(l)] : function(t) {
                  const e = S(t);
                  return [x(t), e, x(e)]
                }(l)),
                _ = "none" !== O;
              !m && _ && M.push(... function(t, e, n, r) {
                const o = h(t);
                let i = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? v : b : e ? b : v;
                    case "left":
                    case "right":
                      return e ? A : R;
                    default:
                      return []
                  }
                }(p(t), "start" === n, r);
                return o && (i = i.map(t => t + "-" + o), e && (i = i.concat(i.map(x)))), i
              }(l, P, O, C));
              const W = [l, ...M],
                H = await s.detectOverflow(e, T),
                F = [];
              let j = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && F.push(H[k]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const r = h(t),
                    o = w(t),
                    i = g(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (a = S(a)), [a, S(a)]
                }(o, a, C);
                F.push(H[t[0]], H[t[1]])
              }
              if (j = [...j, {
                  placement: o,
                  overflows: F
                }], !F.every(t => t <= 0)) {
                var B, N;
                const t = ((null == (B = i.flip) ? void 0 : B.index) || 0) + 1,
                  e = W[t];
                if (e && ("alignment" !== u || D === y(e) || j.every(t => y(t.placement) !== D || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: j
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (N = j.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : N.placement;
                if (!n) switch (E) {
                  case "bestFit": {
                    var z;
                    const t = null == (z = j.filter(t => {
                      if (_) {
                        const e = y(t.placement);
                        return e === D || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : z[0];
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
        xt = t => ({
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
              padding: p = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const m = E(p),
              y = {
                x: n,
                y: r
              },
              x = w(o),
              b = g(x),
              v = await l.getDimensions(f),
              A = "y" === x,
              R = A ? "top" : "left",
              S = A ? "bottom" : "right",
              O = A ? "clientHeight" : "clientWidth",
              P = a.reference[b] + a.reference[x] - y[x] - a.floating[b],
              T = y[x] - a.reference[x],
              k = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let D = k ? k[O] : 0;
            D && await (null == l.isElement ? void 0 : l.isElement(k)) || (D = s.floating[O] || a.floating[b]);
            const L = P / 2 - T / 2,
              C = D / 2 - v[b] / 2 - 1,
              M = i(m[R], C),
              _ = i(m[S], C),
              W = M,
              H = D - v[b] - _,
              F = D / 2 - v[b] / 2 + L,
              j = u(W, F, H),
              B = !c.arrow && null != h(o) && F !== j && a.reference[b] / 2 - (F < W ? M : _) - v[b] / 2 < 0,
              N = B ? F < W ? F - W : F - H : 0;
            return {
              [x]: y[x] + N,
              data: {
                [x]: j,
                centerOffset: F - j - N,
                ...B && {
                  alignmentOffset: N
                }
              },
              reset: B
            }
          }
        }),
        bt = function(t) {
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
              } = d(t, e), f = {
                x: n,
                y: r
              }, u = y(o), h = m(u);
              let g = f[h],
                w = f[u];
              const x = d(l, e),
                b = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
                };
              if (s) {
                const t = "y" === h ? "height" : "width",
                  e = i.reference[h] - i.floating[t] + b.mainAxis,
                  n = i.reference[h] + i.reference[t] - b.mainAxis;
                g < e ? g = e : g > n && (g = n)
              }
              if (c) {
                var v, A;
                const t = "y" === h ? "width" : "height",
                  e = L.has(p(o)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (v = a.offset) ? void 0 : v[u]) || 0) + (e ? 0 : b.crossAxis),
                  r = i.reference[u] + i.reference[t] + (e ? 0 : (null == (A = a.offset) ? void 0 : A[u]) || 0) - (e ? b.crossAxis : 0);
                w < n ? w = n : w > r && (w = r)
              }
              return {
                [h]: g,
                [u]: w
              }
            }
          }
        },
        vt = (t, e, n) => {
          const r = new Map,
            o = {
              platform: gt,
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
            } = n, l = a.detectOverflow ? a : {
              ...a,
              detectOverflow: T
            }, s = await (null == a.isRTL ? void 0 : a.isRTL(e));
            let c = await a.getElementRects({
                reference: t,
                floating: e,
                strategy: o
              }),
              {
                x: f,
                y: u
              } = P(c, r, s),
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
                data: b,
                reset: v
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
                  reference: t,
                  floating: e
                }
              });
              f = null != w ? w : f, u = null != x ? x : u, h[g] = {
                ...h[g],
                ...b
              }, v && p < 50 && (p++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (c = !0 === v.rects ? await a.getElementRects({
                reference: t,
                floating: e,
                strategy: o
              }) : v.rects), ({
                x: f,
                y: u
              } = P(c, d, s))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: o,
              middlewareData: h
            }
          })(t, e, {
            ...o,
            platform: i
          })
        };
      var At = n(18429),
        Rt = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function St(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        let n, r, o;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (r = n; 0 !== r--;)
              if (!St(t[r], e[r])) return !1;
            return !0
          }
          if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(e, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && t.$$typeof || St(t[n], e[n]))) return !1
          }
          return !0
        }
        return t != t && e != e
      }

      function Et(t) {
        return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ot(t, e) {
        const n = Et(t);
        return Math.round(e * n) / n
      }

      function Pt(t) {
        const e = r.useRef(t);
        return Rt(() => {
          e.current = t
        }), e
      }
      const Tt = (t, e) => {
          const n = function(t) {
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
                  } = t, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = p(n), l = h(n), s = "y" === y(n), c = L.has(a) ? -1 : 1, f = i && s ? -1 : 1, u = d(e, t);
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
          }(t);
          return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
          }
        },
        kt = (t, e) => {
          const n = function(t) {
            return void 0 === t && (t = {}), {
              name: "shift",
              options: t,
              async fn(e) {
                const {
                  x: n,
                  y: r,
                  placement: o,
                  platform: i
                } = e, {
                  mainAxis: a = !0,
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
                  ...c
                } = d(t, e), f = {
                  x: n,
                  y: r
                }, h = await i.detectOverflow(e, c), g = y(p(o)), w = m(g);
                let x = f[w],
                  b = f[g];
                if (a) {
                  const t = "y" === w ? "bottom" : "right";
                  x = u(x + h["y" === w ? "top" : "left"], x, x - h[t])
                }
                if (l) {
                  const t = "y" === g ? "bottom" : "right";
                  b = u(b + h["y" === g ? "top" : "left"], b, b - h[t])
                }
                const v = s.fn({
                  ...e,
                  [w]: x,
                  [g]: b
                });
                return {
                  ...v,
                  data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                      [w]: a,
                      [g]: l
                    }
                  }
                }
              }
            }
          }(t);
          return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
          }
        },
        Dt = (t, e) => {
          const n = wt(t);
          return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
          }
        },
        Lt = (t, e) => {
          const n = function(t) {
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
                } = d(t, e), m = await s.detectOverflow(e, u), g = p(o), w = h(o), x = "y" === y(o), {
                  width: b,
                  height: v
                } = l.floating;
                let A, R;
                "top" === g || "bottom" === g ? (A = g, R = w === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = g, A = "end" === w ? "top" : "bottom");
                const S = v - m.top - m.bottom,
                  E = b - m.left - m.right,
                  O = i(v - m[A], S),
                  P = i(b - m[R], E),
                  T = !e.middlewareData.shift;
                let k = O,
                  D = P;
                if (null != (n = e.middlewareData.shift) && n.enabled.x && (D = E), null != (r = e.middlewareData.shift) && r.enabled.y && (k = S), T && !w) {
                  const t = a(m.left, 0),
                    e = a(m.right, 0),
                    n = a(m.top, 0),
                    r = a(m.bottom, 0);
                  x ? D = b - 2 * (0 !== t || 0 !== e ? t + e : a(m.left, m.right)) : k = v - 2 * (0 !== n || 0 !== r ? n + r : a(m.top, m.bottom))
                }
                await f({
                  ...e,
                  availableWidth: D,
                  availableHeight: k
                });
                const L = await s.getDimensions(c.floating);
                return b !== L.width || v !== L.height ? {
                  reset: {
                    rects: !0
                  }
                } : {}
              }
            }
          }(t);
          return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
          }
        },
        Ct = (t, e) => {
          const n = function(t) {
            return void 0 === t && (t = {}), {
              name: "hide",
              options: t,
              async fn(e) {
                const {
                  rects: n,
                  platform: r
                } = e, {
                  strategy: o = "referenceHidden",
                  ...i
                } = d(t, e);
                switch (o) {
                  case "referenceHidden": {
                    const t = k(await r.detectOverflow(e, {
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
                    const t = k(await r.detectOverflow(e, {
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
          }(t);
          return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
          }
        },
        Mt = (t, e) => {
          const n = (t => ({
            name: "arrow",
            options: t,
            fn(e) {
              const {
                element: n,
                padding: r
              } = "function" == typeof t ? t(e) : t;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? xt({
                element: n.current,
                padding: r
              }).fn(e) : {} : n ? xt({
                element: n,
                padding: r
              }).fn(e) : {};
              var o
            }
          }))(t);
          return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
          }
        };
      var _t = n(78004),
        Wt = n(42295),
        Ht = r.forwardRef((t, e) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = t;
          return (0, Wt.jsx)(_t.sG.svg, {
            ...i,
            ref: e,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild ? n : (0, Wt.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Ht.displayName = "Arrow";
      var Ft = Ht,
        jt = n(95362),
        Bt = n(85426),
        Nt = n(76286),
        zt = n(63155),
        $t = n(60528),
        It = "Popper",
        [Vt, Xt] = (0, Bt.A)(It),
        [Yt, qt] = Vt(It),
        Gt = t => {
          const {
            __scopePopper: e,
            children: n
          } = t, [o, i] = r.useState(null);
          return (0, Wt.jsx)(Yt, {
            scope: e,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      Gt.displayName = It;
      var Ut = "PopperAnchor",
        Jt = r.forwardRef((t, e) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = t, a = qt(Ut, n), l = r.useRef(null), s = (0, jt.s)(e, l), c = r.useRef(null);
          return r.useEffect(() => {
            const t = c.current;
            c.current = o?.current || l.current, t !== c.current && a.onAnchorChange(c.current)
          }), o ? null : (0, Wt.jsx)(_t.sG.div, {
            ...i,
            ref: s
          })
        });
      Jt.displayName = Ut;
      var Kt = "PopperContent",
        [Qt, Zt] = Vt(Kt),
        te = r.forwardRef((t, e) => {
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
          } = t, b = qt(Kt, n), [v, A] = r.useState(null), R = (0, jt.s)(e, t => A(t)), [S, E] = r.useState(null), O = (0, $t.X)(S), P = O?.width ?? 0, T = O?.height ?? 0, k = o + ("center" !== c ? "-" + c : ""), D = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, L = Array.isArray(p) ? p : [p], C = L.length > 0, M = {
            padding: D,
            boundary: L.filter(oe),
            altBoundary: C
          }, {
            refs: _,
            floatingStyles: H,
            placement: F,
            isPositioned: j,
            middlewareData: B
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
            St(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), x = r.useCallback(t => {
              t !== R.current && (R.current = t, g(t))
            }, []), b = r.useCallback(t => {
              t !== S.current && (S.current = t, w(t))
            }, []), v = a || m, A = l || y, R = r.useRef(null), S = r.useRef(null), E = r.useRef(u), O = null != c, P = Pt(c), T = Pt(i), k = Pt(f), D = r.useCallback(() => {
              if (!R.current || !S.current) return;
              const t = {
                placement: e,
                strategy: n,
                middleware: p
              };
              T.current && (t.platform = T.current), vt(R.current, S.current, t).then(t => {
                const e = {
                  ...t,
                  isPositioned: !1 !== k.current
                };
                L.current && !St(E.current, e) && (E.current = e, At.flushSync(() => {
                  d(e)
                }))
              })
            }, [p, e, n, T, k]);
            Rt(() => {
              !1 === f && E.current.isPositioned && (E.current.isPositioned = !1, d(t => ({
                ...t,
                isPositioned: !1
              })))
            }, [f]);
            const L = r.useRef(!1);
            Rt(() => (L.current = !0, () => {
              L.current = !1
            }), []), Rt(() => {
              if (v && (R.current = v), A && (S.current = A), v && A) {
                if (P.current) return P.current(v, A, D);
                D()
              }
            }, [v, A, D, P, O]);
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
                const e = Ot(M.floating, u.x),
                  r = Ot(M.floating, u.y);
                return s ? {
                  ...t,
                  transform: "translate(" + e + "px, " + r + "px)",
                  ...Et(M.floating) >= 1.5 && {
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
              update: D,
              refs: C,
              elements: M,
              floatingStyles: _
            }), [u, D, C, M, _])
          }({
            strategy: "fixed",
            placement: k,
            whileElementsMounted: (...t) => function(t, e, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: l = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = rt(t), p = o || l ? [...d ? tt(d) : [], ...e ? tt(e) : []] : [];
              p.forEach(t => {
                o && t.addEventListener("scroll", n, {
                  passive: !0
                }), l && t.addEventListener("resize", n)
              });
              const h = d && f ? function(t, e) {
                let n, r = null;
                const o = W(t);

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
                    1 !== r || yt(d, t.getBoundingClientRect()) || c(), w = !1
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
                r && r.target === d && y && e && (y.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                  var t;
                  null == (t = y) || t.observe(e)
                })), n()
              }), d && !u && y.observe(d), e && y.observe(e));
              let w = u ? lt(t) : null;
              return u && function e() {
                const r = lt(t);
                w && !yt(w, r) && n(), w = r, m = requestAnimationFrame(e)
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
            middleware: [Tt({
              mainAxis: l + T,
              alignmentAxis: f
            }), d && kt({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? {
                fn: bt(N).fn,
                options: [N, void 0]
              } : void 0,
              ...M
            }), d && Dt({
              ...M
            }), Lt({
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
            }), S && Mt({
              element: S,
              padding: u
            }), ie({
              arrowWidth: P,
              arrowHeight: T
            }), g && Ct({
              strategy: "referenceHidden",
              ...M
            })]
          });
          var N;
          const [z, $] = ae(F), I = (0, Nt.c)(w);
          (0, zt.N)(() => {
            j && I?.()
          }, [j, I]);
          const V = B.arrow?.x,
            X = B.arrow?.y,
            Y = 0 !== B.arrow?.centerOffset,
            [q, G] = r.useState();
          return (0, zt.N)(() => {
            v && G(window.getComputedStyle(v).zIndex)
          }, [v]), (0, Wt.jsx)("div", {
            ref: _.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...H,
              transform: j ? H.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: q,
              "--radix-popper-transform-origin": [B.transformOrigin?.x, B.transformOrigin?.y].join(" "),
              ...B.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: t.dir,
            children: (0, Wt.jsx)(Qt, {
              scope: n,
              placedSide: z,
              onArrowChange: E,
              arrowX: V,
              arrowY: X,
              shouldHideArrow: Y,
              children: (0, Wt.jsx)(_t.sG.div, {
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
        });
      te.displayName = Kt;
      var ee = "PopperArrow",
        ne = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        re = r.forwardRef(function(t, e) {
          const {
            __scopePopper: n,
            ...r
          } = t, o = Zt(ee, n), i = ne[o.placedSide];
          return (0, Wt.jsx)("span", {
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
            children: (0, Wt.jsx)(Ft, {
              ...r,
              ref: e,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function oe(t) {
        return null !== t
      }
      re.displayName = ee;
      var ie = t => ({
        name: "transformOrigin",
        options: t,
        fn(e) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = e, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : t.arrowWidth, l = i ? 0 : t.arrowHeight, [s, c] = ae(n), f = {
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

      function ae(t) {
        const [e, n = "center"] = t.split("-");
        return [e, n]
      }
      var le = Gt,
        se = Jt,
        ce = te,
        fe = re
    },
    60528(t, e, n) {
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
    }
  }
]);