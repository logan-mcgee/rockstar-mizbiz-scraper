try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6e4cbc02-a7da-4fc9-b16d-7c9deb44a1c1", e._sentryDebugIdIdentifier = "sentry-dbid-6e4cbc02-a7da-4fc9-b16d-7c9deb44a1c1")
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
  [8295], {
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
    91685(e, t, n) {
      n.d(t, {
        Oh: () => i
      });
      var r = n(4637),
        o = 0;

      function i() {
        r.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? a()), document.body.insertAdjacentElement("beforeend", e[1] ?? a()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function a() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    55677(e, t, n) {
      n.d(t, {
        Mz: () => st,
        i3: () => ft,
        UC: () => ct,
        bL: () => lt,
        Bk: () => Xe
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
      const b = ["left", "right"],
        v = ["right", "left"],
        A = ["top", "bottom"],
        R = ["bottom", "top"];

      function S(e) {
        const t = p(e);
        return f[t] + e.slice(t.length)
      }

      function E(e) {
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

      function O(e) {
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

      function P(e, t, n) {
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
        switch (h(t)) {
          case "start":
            m[a] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            m[a] += d * (n && c ? -1 : 1)
        }
        return m
      }
      async function T(e, t) {
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
        } = d(t, e), m = E(h), g = l[p ? "floating" === u ? "reference" : "floating" : u], y = O(await i.getClippingRect({
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

      function k(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function D(e) {
        return o.some(t => e[t] >= 0)
      }
      const L = new Set(["left", "top"]);

      function C() {
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
        return !!C() && (e instanceof Node || e instanceof _(e).Node)
      }

      function F(e) {
        return !!C() && (e instanceof Element || e instanceof _(e).Element)
      }

      function j(e) {
        return !!C() && (e instanceof HTMLElement || e instanceof _(e).HTMLElement)
      }

      function B(e) {
        return !(!C() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof _(e).ShadowRoot)
      }

      function N(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = J(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
      }

      function z(e) {
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
      const I = /transform|translate|scale|rotate|perspective|filter/,
        V = /paint|layout|strict|content/,
        X = e => !!e && "none" !== e;
      let Y;

      function q(e) {
        const t = F(e) ? J(e) : e;
        return X(t.transform) || X(t.translate) || X(t.scale) || X(t.rotate) || X(t.perspective) || !G() && (X(t.backdropFilter) || X(t.filter)) || I.test(t.willChange || "") || V.test(t.contain || "")
      }

      function G() {
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
        const t = e.assignedSlot || e.parentNode || B(e) && e.host || W(e);
        return B(t) ? t.host : t
      }

      function Z(e) {
        const t = Q(e);
        return U(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : j(t) && N(t) ? t : Z(t)
      }

      function ee(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = Z(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = _(o);
        if (i) {
          const e = te(a);
          return t.concat(a, a.visualViewport || [], N(o) ? o : [], e && n ? ee(e) : [])
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
        return G() && t.visualViewport ? {
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
          return void 0 === t && (t = !1), !(!n || t && n !== _(e)) && t
        }(i, n, r) ? ae(i) : c(0);
        let s = (o.left + l.x) / a.x,
          f = (o.top + l.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = _(i),
            t = r && F(r) ? _(r) : r;
          let n = e,
            o = te(n);
          for (; o && r && t !== n;) {
            const e = oe(o),
              t = o.getBoundingClientRect(),
              r = J(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            s *= e.x, f *= e.y, u *= e.x, d *= e.y, s += i, f += a, n = _(o), o = te(n)
          }
        }
        return O({
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
        if ("viewport" === t) r = function(e, t) {
          const n = _(e),
            r = W(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            l = 0,
            s = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = G();
            (!e || e && "fixed" === t) && (l = o.offsetLeft, s = o.offsetTop)
          }
          const c = se(r);
          if (c <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              a = Math.abs(r.clientWidth - t.clientWidth - o);
            a <= 25 && (i -= a)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: a,
            x: l,
            y: s
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = W(e),
            n = K(e),
            r = e.ownerDocument.body,
            o = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = a(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let l = -n.scrollLeft + se(e);
          const s = -n.scrollTop;
          return "rtl" === J(r).direction && (l += a(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: l,
            y: s
          }
        }(W(e));
        else if (F(t)) r = function(e, t) {
          const n = le(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = j(e) ? oe(e) : c(1);
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
        return O(r)
      }

      function ue(e, t) {
        const n = Q(e);
        return !(n === t || !F(n) || U(n)) && ("fixed" === J(n).position || ue(n, t))
      }

      function de(e, t, n) {
        const r = j(t),
          o = W(t),
          i = "fixed" === n,
          a = le(e, !0, i, t);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);

        function f() {
          s.x = se(o)
        }
        if (r || !r && !i)
          if (("body" !== M(t) || N(o)) && (l = K(t)), r) {
            const e = le(t, !0, i, t);
            s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
          } else o && f();
        i && !r && o && f();
        const u = !o || r || i ? c(0) : ce(o, l);
        return {
          x: a.left + l.scrollLeft - s.x - u.x,
          y: a.top + l.scrollTop - s.y - u.y,
          width: a.width,
          height: a.height
        }
      }

      function pe(e) {
        return "static" === J(e).position
      }

      function he(e, t) {
        if (!j(e) || "fixed" === J(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return W(e) === n && (n = n.ownerDocument.body), n
      }

      function me(e, t) {
        const n = _(e);
        if ($(e)) return n;
        if (!j(e)) {
          let t = Q(e);
          for (; t && !U(t);) {
            if (F(t) && !pe(t)) return t;
            t = Q(t)
          }
          return n
        }
        let r = he(e, t);
        for (; r && z(r) && pe(r);) r = he(r, t);
        return r && U(r) && pe(r) && !q(r) ? n : r || function(e) {
          let t = Q(e);
          for (; j(t) && !U(t);) {
            if (q(t)) return t;
            if ($(t)) return null;
            t = Q(t)
          }
          return null
        }(e) || n
      }
      const ge = {
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
          if ((d || !d && !i) && (("body" !== M(r) || N(a)) && (s = K(r)), d)) {
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
                const t = J(a),
                  n = q(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || N(a) && !n && ue(e, a)) ? r = r.filter(e => e !== a) : o = t, a = Q(a)
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
        getOffsetParent: me,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || me,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: de(e.reference, await t(e.floating), e.strategy),
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

      function ye(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const we = function(e) {
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
                fallbackAxisSideDirection: O = "none",
                flipAlignment: P = !0,
                ...T
              } = d(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const k = p(o),
                D = y(l),
                L = p(l) === l,
                C = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                M = m || (L || !P ? [S(l)] : function(e) {
                  const t = S(e);
                  return [x(e), t, x(t)]
                }(l)),
                _ = "none" !== O;
              !m && _ && M.push(... function(e, t, n, r) {
                const o = h(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? v : b : t ? b : v;
                    case "left":
                    case "right":
                      return t ? A : R;
                    default:
                      return []
                  }
                }(p(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(x)))), i
              }(l, P, O, C));
              const W = [l, ...M],
                H = await s.detectOverflow(t, T),
                F = [];
              let j = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && F.push(H[k]), u) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = h(e),
                    o = w(e),
                    i = g(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = S(a)), [a, S(a)]
                }(o, a, C);
                F.push(H[e[0]], H[e[1]])
              }
              if (j = [...j, {
                  placement: o,
                  overflows: F
                }], !F.every(e => e <= 0)) {
                var B, N;
                const e = ((null == (B = i.flip) ? void 0 : B.index) || 0) + 1,
                  t = W[e];
                if (t && ("alignment" !== u || D === y(t) || j.every(e => y(e.placement) !== D || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: j
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (N = j.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : N.placement;
                if (!n) switch (E) {
                  case "bestFit": {
                    var z;
                    const e = null == (z = j.filter(e => {
                      if (_) {
                        const t = y(e.placement);
                        return t === D || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : z[0];
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
        xe = e => ({
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
        be = function(e) {
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
              } = d(e, t), f = {
                x: n,
                y: r
              }, u = y(o), h = m(u);
              let g = f[h],
                w = f[u];
              const x = d(l, t),
                b = "number" == typeof x ? {
                  mainAxis: x,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...x
                };
              if (s) {
                const e = "y" === h ? "height" : "width",
                  t = i.reference[h] - i.floating[e] + b.mainAxis,
                  n = i.reference[h] + i.reference[e] - b.mainAxis;
                g < t ? g = t : g > n && (g = n)
              }
              if (c) {
                var v, A;
                const e = "y" === h ? "width" : "height",
                  t = L.has(p(o)),
                  n = i.reference[u] - i.floating[e] + (t && (null == (v = a.offset) ? void 0 : v[u]) || 0) + (t ? 0 : b.crossAxis),
                  r = i.reference[u] + i.reference[e] + (t ? 0 : (null == (A = a.offset) ? void 0 : A[u]) || 0) - (t ? b.crossAxis : 0);
                w < n ? w = n : w > r && (w = r)
              }
              return {
                [h]: g,
                [u]: w
              }
            }
          }
        },
        ve = (e, t, n) => {
          const r = new Map,
            o = {
              platform: ge,
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
            } = n, l = a.detectOverflow ? a : {
              ...a,
              detectOverflow: T
            }, s = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
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
                  reference: e,
                  floating: t
                }
              });
              f = null != w ? w : f, u = null != x ? x : u, h[g] = {
                ...h[g],
                ...b
              }, v && p < 50 && (p++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (c = !0 === v.rects ? await a.getElementRects({
                reference: e,
                floating: t,
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
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var Ae = n(84017),
        Re = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function Se(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Se(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Se(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Ee(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Oe(e, t) {
        const n = Ee(e);
        return Math.round(t * n) / n
      }

      function Pe(e) {
        const t = r.useRef(e);
        return Re(() => {
          t.current = e
        }), t
      }
      const Te = (e, t) => {
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
                  } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = p(n), l = h(n), s = "y" === y(n), c = L.has(a) ? -1 : 1, f = i && s ? -1 : 1, u = d(t, e);
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
        ke = (e, t) => {
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
                }, h = await i.detectOverflow(t, c), g = y(p(o)), w = m(g);
                let x = f[w],
                  b = f[g];
                if (a) {
                  const e = "y" === w ? "bottom" : "right";
                  x = u(x + h["y" === w ? "top" : "left"], x, x - h[e])
                }
                if (l) {
                  const e = "y" === g ? "bottom" : "right";
                  b = u(b + h["y" === g ? "top" : "left"], b, b - h[e])
                }
                const v = s.fn({
                  ...t,
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
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        De = (e, t) => {
          const n = we(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Le = (e, t) => {
          const n = function(e) {
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
                } = d(e, t), m = await s.detectOverflow(t, u), g = p(o), w = h(o), x = "y" === y(o), {
                  width: b,
                  height: v
                } = l.floating;
                let A, R;
                "top" === g || "bottom" === g ? (A = g, R = w === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = g, A = "end" === w ? "top" : "bottom");
                const S = v - m.top - m.bottom,
                  E = b - m.left - m.right,
                  O = i(v - m[A], S),
                  P = i(b - m[R], E),
                  T = !t.middlewareData.shift;
                let k = O,
                  D = P;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (D = E), null != (r = t.middlewareData.shift) && r.enabled.y && (k = S), T && !w) {
                  const e = a(m.left, 0),
                    t = a(m.right, 0),
                    n = a(m.top, 0),
                    r = a(m.bottom, 0);
                  x ? D = b - 2 * (0 !== e || 0 !== t ? e + t : a(m.left, m.right)) : k = v - 2 * (0 !== n || 0 !== r ? n + r : a(m.top, m.bottom))
                }
                await f({
                  ...t,
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
                    const e = k(await r.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: D(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = k(await r.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), n.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: D(e)
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
        Me = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: r
              } = "function" == typeof e ? e(t) : e;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? xe({
                element: n.current,
                padding: r
              }).fn(t) : {} : n ? xe({
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
      var _e = n(66704),
        We = n(39793),
        He = r.forwardRef((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, We.jsx)(_e.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, We.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      He.displayName = "Arrow";
      var Fe = He,
        je = n(50446),
        Be = n(53582),
        Ne = n(38351),
        ze = n(86627),
        $e = n(94119),
        Ie = "Popper",
        [Ve, Xe] = (0, Be.A)(Ie),
        [Ye, qe] = Ve(Ie),
        Ge = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null);
          return (0, We.jsx)(Ye, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      Ge.displayName = Ie;
      var Ue = "PopperAnchor",
        Je = r.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, a = qe(Ue, n), l = r.useRef(null), s = (0, je.s)(t, l), c = r.useRef(null);
          return r.useEffect(() => {
            const e = c.current;
            c.current = o?.current || l.current, e !== c.current && a.onAnchorChange(c.current)
          }), o ? null : (0, We.jsx)(_e.sG.div, {
            ...i,
            ref: s
          })
        });
      Je.displayName = Ue;
      var Ke = "PopperContent",
        [Qe, Ze] = Ve(Ke),
        et = r.forwardRef((e, t) => {
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
          } = e, b = qe(Ke, n), [v, A] = r.useState(null), R = (0, je.s)(t, e => A(e)), [S, E] = r.useState(null), O = (0, $e.X)(S), P = O?.width ?? 0, T = O?.height ?? 0, k = o + ("center" !== c ? "-" + c : ""), D = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, L = Array.isArray(p) ? p : [p], C = L.length > 0, M = {
            padding: D,
            boundary: L.filter(ot),
            altBoundary: C
          }, {
            refs: _,
            floatingStyles: H,
            placement: F,
            isPositioned: j,
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
            Se(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), x = r.useCallback(e => {
              e !== R.current && (R.current = e, g(e))
            }, []), b = r.useCallback(e => {
              e !== S.current && (S.current = e, w(e))
            }, []), v = a || m, A = l || y, R = r.useRef(null), S = r.useRef(null), E = r.useRef(u), O = null != c, P = Pe(c), T = Pe(i), k = Pe(f), D = r.useCallback(() => {
              if (!R.current || !S.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: p
              };
              T.current && (e.platform = T.current), ve(R.current, S.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                L.current && !Se(E.current, t) && (E.current = t, Ae.flushSync(() => {
                  d(t)
                }))
              })
            }, [p, t, n, T, k]);
            Re(() => {
              !1 === f && E.current.isPositioned && (E.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [f]);
            const L = r.useRef(!1);
            Re(() => (L.current = !0, () => {
              L.current = !1
            }), []), Re(() => {
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
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!M.floating) return e;
                const t = Oe(M.floating, u.x),
                  r = Oe(M.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Ee(M.floating) >= 1.5 && {
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
              update: D,
              refs: C,
              elements: M,
              floatingStyles: _
            }), [u, D, C, M, _])
          }({
            strategy: "fixed",
            placement: k,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: l = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = re(e), p = o || l ? [...d ? ee(d) : [], ...t ? ee(t) : []] : [];
              p.forEach(e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), l && e.addEventListener("resize", n)
              });
              const h = d && f ? function(e, t) {
                let n, r = null;
                const o = W(e);

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
                      r ? c(!1, r) : n = setTimeout(() => {
                        c(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== r || ye(d, e.getBoundingClientRect()) || c(), w = !1
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
                w && !ye(w, r) && n(), w = r, m = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                p.forEach(e => {
                  o && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                }), null == h || h(), null == (e = y) || e.disconnect(), y = null, u && cancelAnimationFrame(m)
              }
            }(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [Te({
              mainAxis: l + T,
              alignmentAxis: f
            }), d && ke({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? {
                fn: be(N).fn,
                options: [N, void 0]
              } : void 0,
              ...M
            }), d && De({
              ...M
            }), Le({
              ...M,
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
            }), S && Me({
              element: S,
              padding: u
            }), it({
              arrowWidth: P,
              arrowHeight: T
            }), g && Ce({
              strategy: "referenceHidden",
              ...M
            })]
          });
          var N;
          const [z, $] = at(F), I = (0, Ne.c)(w);
          (0, ze.N)(() => {
            j && I?.()
          }, [j, I]);
          const V = B.arrow?.x,
            X = B.arrow?.y,
            Y = 0 !== B.arrow?.centerOffset,
            [q, G] = r.useState();
          return (0, ze.N)(() => {
            v && G(window.getComputedStyle(v).zIndex)
          }, [v]), (0, We.jsx)("div", {
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
            dir: e.dir,
            children: (0, We.jsx)(Qe, {
              scope: n,
              placedSide: z,
              onArrowChange: E,
              arrowX: V,
              arrowY: X,
              shouldHideArrow: Y,
              children: (0, We.jsx)(_e.sG.div, {
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
      et.displayName = Ke;
      var tt = "PopperArrow",
        nt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        rt = r.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = Ze(tt, n), i = nt[o.placedSide];
          return (0, We.jsx)("span", {
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
            children: (0, We.jsx)(Fe, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function ot(e) {
        return null !== e
      }
      rt.displayName = tt;
      var it = e => ({
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
      });

      function at(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var lt = Ge,
        st = Je,
        ct = et,
        ft = rt
    },
    94119(e, t, n) {
      n.d(t, {
        X: () => i
      });
      var r = n(4637),
        o = n(86627);

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
      }
    }
  }
]);