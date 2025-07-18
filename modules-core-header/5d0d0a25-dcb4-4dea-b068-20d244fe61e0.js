try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5d0d0a25-dcb4-4dea-b068-20d244fe61e0", e._sentryDebugIdIdentifier = "sentry-dbid-5d0d0a25-dcb4-4dea-b068-20d244fe61e0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5839], {
    27114: (e, t, n) => {
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
    45421: (e, t, n) => {
      n.d(t, {
        Mz: () => it,
        i3: () => st,
        UC: () => at,
        bL: () => ot,
        Bk: () => ze
      });
      var r = n(71127);
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        a = Math.max,
        s = Math.round,
        l = Math.floor,
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

      function v(e) {
        return g(w(e))
      }

      function x(e) {
        return e.replace(/start|end/g, (e => u[e]))
      }

      function b(e) {
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

      function E(e) {
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

      function R(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = w(t),
          a = v(t),
          s = y(a),
          l = h(t),
          c = "y" === i,
          f = r.x + r.width / 2 - o.width / 2,
          u = r.y + r.height / 2 - o.height / 2,
          d = r[s] / 2 - o[s] / 2;
        let p;
        switch (l) {
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
          elements: s,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: d = !1,
          padding: h = 0
        } = p(t, e), m = A(h), g = s[d ? "floating" === u ? "reference" : "floating" : u], y = E(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: l
        })), w = "floating" === u ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), x = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
          x: 1,
          y: 1
        }, b = E(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: w,
          offsetParent: v,
          strategy: l
        }) : w);
        return {
          top: (y.top - b.top + m.top) / x.y,
          bottom: (b.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - b.left + m.left) / x.x,
          right: (b.right - y.right + m.right) / x.x
        }
      }

      function T(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function L(e) {
        return o.some((t => e[t] >= 0))
      }

      function P() {
        return "undefined" != typeof window
      }

      function k(e) {
        return D(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function O(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function C(e) {
        var t;
        return null == (t = (D(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function D(e) {
        return !!P() && (e instanceof Node || e instanceof O(e).Node)
      }

      function M(e) {
        return !!P() && (e instanceof Element || e instanceof O(e).Element)
      }

      function _(e) {
        return !!P() && (e instanceof HTMLElement || e instanceof O(e).HTMLElement)
      }

      function N(e) {
        return !(!P() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof O(e).ShadowRoot)
      }

      function F(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = z(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function H(e) {
        return ["table", "td", "th"].includes(k(e))
      }

      function W(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function I(e) {
        const t = j(),
          n = M(e) ? z(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function j() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function B(e) {
        return ["html", "body", "#document"].includes(k(e))
      }

      function z(e) {
        return O(e).getComputedStyle(e)
      }

      function $(e) {
        return M(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function V(e) {
        if ("html" === k(e)) return e;
        const t = e.assignedSlot || e.parentNode || N(e) && e.host || C(e);
        return N(t) ? t.host : t
      }

      function K(e) {
        const t = V(e);
        return B(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _(t) && F(t) ? t : K(t)
      }

      function X(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = K(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = O(o);
        if (i) {
          const e = Y(a);
          return t.concat(a, a.visualViewport || [], F(o) ? o : [], e && n ? X(e) : [])
        }
        return t.concat(o, X(o, [], n))
      }

      function Y(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function q(e) {
        const t = z(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = _(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          l = s(n) !== i || s(r) !== a;
        return l && (n = i, r = a), {
          width: n,
          height: r,
          $: l
        }
      }

      function G(e) {
        return M(e) ? e : e.contextElement
      }

      function U(e) {
        const t = G(e);
        if (!_(t)) return c(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = q(t);
        let a = (i ? s(n.width) : n.width) / r,
          l = (i ? s(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), {
          x: a,
          y: l
        }
      }
      const J = c(0);

      function Q(e) {
        const t = O(e);
        return j() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : J
      }

      function Z(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = G(e);
        let a = c(1);
        t && (r ? M(r) && (a = U(r)) : a = U(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== O(e)) && t
        }(i, n, r) ? Q(i) : c(0);
        let l = (o.left + s.x) / a.x,
          f = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = O(i),
            t = r && M(r) ? O(r) : r;
          let n = e,
            o = Y(n);
          for (; o && r && t !== n;) {
            const e = U(o),
              t = o.getBoundingClientRect(),
              r = z(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, f *= e.y, u *= e.x, d *= e.y, l += i, f += a, n = O(o), o = Y(n)
          }
        }
        return E({
          width: u,
          height: d,
          x: l,
          y: f
        })
      }

      function ee(e, t) {
        const n = $(e).scrollLeft;
        return t ? t.left + n : Z(C(e)).left + n
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
          const n = O(e),
            r = C(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = j();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: s,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = C(e),
            n = $(e),
            r = e.ownerDocument.body,
            o = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = a(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + ee(e);
          const l = -n.scrollTop;
          return "rtl" === z(r).direction && (s += a(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: l
          }
        }(C(e));
        else if (M(t)) r = function(e, t) {
          const n = Z(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = _(e) ? U(e) : c(1);
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
        return E(r)
      }

      function re(e, t) {
        const n = V(e);
        return !(n === t || !M(n) || B(n)) && ("fixed" === z(n).position || re(n, t))
      }

      function oe(e, t, n) {
        const r = _(t),
          o = C(t),
          i = "fixed" === n,
          a = Z(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = c(0);
        if (r || !r && !i)
          if (("body" !== k(t) || F(o)) && (s = $(t)), r) {
            const e = Z(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = ee(o));
        const f = !o || r || i ? c(0) : te(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - f.x,
          y: a.top + s.scrollTop - l.y - f.y,
          width: a.width,
          height: a.height
        }
      }

      function ie(e) {
        return "static" === z(e).position
      }

      function ae(e, t) {
        if (!_(e) || "fixed" === z(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return C(e) === n && (n = n.ownerDocument.body), n
      }

      function se(e, t) {
        const n = O(e);
        if (W(e)) return n;
        if (!_(e)) {
          let t = V(e);
          for (; t && !B(t);) {
            if (M(t) && !ie(t)) return t;
            t = V(t)
          }
          return n
        }
        let r = ae(e, t);
        for (; r && H(r) && ie(r);) r = ae(r, t);
        return r && B(r) && ie(r) && !I(r) ? n : r || function(e) {
          let t = V(e);
          for (; _(t) && !B(t);) {
            if (I(t)) return t;
            if (W(t)) return null;
            t = V(t)
          }
          return null
        }(e) || n
      }
      const le = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = C(r),
            s = !!t && W(t.floating);
          if (r === a || s && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = _(r);
          if ((d || !d && !i) && (("body" !== k(r) || F(a)) && (l = $(r)), _(r))) {
            const e = Z(r);
            f = U(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const p = !a || d || i ? c(0) : te(a, l, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - l.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - l.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: C,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const s = [..."clippingAncestors" === n ? W(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = X(e, [], !1).filter((e => M(e) && "body" !== k(e))),
                o = null;
              const i = "fixed" === z(e).position;
              let a = i ? V(e) : e;
              for (; M(a) && !B(a);) {
                const t = z(a),
                  n = I(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || F(a) && !n && re(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = V(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            l = s[0],
            c = s.reduce(((e, n) => {
              const r = ne(t, n, o);
              return e.top = a(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = a(r.left, e.left), e
            }), ne(t, l, o));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: se,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || se,
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
          } = q(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: U,
        isElement: M,
        isRTL: function(e) {
          return "rtl" === z(e).direction
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
                middlewareData: s
              } = t, l = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = h(n), s = m(n), l = "y" === w(n), c = ["left", "top"].includes(a) ? -1 : 1, f = i && l ? -1 : 1, u = p(t, e);
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
                return s && "number" == typeof y && (g = "end" === s ? -1 * y : y), l ? {
                  x: g * f,
                  y: d * c
                } : {
                  x: d * c,
                  y: g * f
                }
              }(t, e);
              return a === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                  ...l,
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
                ...l
              } = p(e, t), c = {
                x: n,
                y: r
              }, f = await S(t, l), u = w(h(o)), m = g(u);
              let y = c[m],
                v = c[u];
              if (i) {
                const e = "y" === m ? "bottom" : "right";
                y = d(y + f["y" === m ? "top" : "left"], y, y - f[e])
              }
              if (a) {
                const e = "y" === u ? "bottom" : "right";
                v = d(v + f["y" === u ? "top" : "left"], v, v - f[e])
              }
              const x = s.fn({
                ...t,
                [m]: y,
                [u]: v
              });
              return {
                ...x,
                data: {
                  x: x.x - n,
                  y: x.y - r,
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
                initialPlacement: s,
                platform: l,
                elements: c
              } = t, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: d,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: A = "none",
                flipAlignment: E = !0,
                ...R
              } = p(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const T = h(o),
                L = w(s),
                P = h(s) === s,
                k = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                O = d || (P || !E ? [b(s)] : function(e) {
                  const t = b(e);
                  return [x(e), t, x(t)]
                }(s)),
                C = "none" !== A;
              !d && C && O.push(... function(e, t, n, r) {
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
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(x)))), i
              }(s, E, A, k));
              const D = [s, ...O],
                M = await S(t, R),
                _ = [];
              let N = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (f && _.push(M[T]), u) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = m(e),
                    o = v(e),
                    i = y(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = b(a)), [a, b(a)]
                }(o, a, k);
                _.push(M[e[0]], M[e[1]])
              }
              if (N = [...N, {
                  placement: o,
                  overflows: _
                }], !_.every((e => e <= 0))) {
                var F, H;
                const e = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
                  t = D[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: N
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (H = N.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : H.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var W;
                    const e = null == (W = N.filter((e => {
                      if (C) {
                        const t = w(e.placement);
                        return t === L || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : W[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = s
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
                rects: s,
                platform: l,
                elements: c
              } = t, {
                apply: f = () => {},
                ...u
              } = p(e, t), d = await S(t, u), g = h(o), y = m(o), v = "y" === w(o), {
                width: x,
                height: b
              } = s.floating;
              let A, E;
              "top" === g || "bottom" === g ? (A = g, E = y === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (E = g, A = "end" === y ? "top" : "bottom");
              const R = b - d.top - d.bottom,
                T = x - d.left - d.right,
                L = i(b - d[A], R),
                P = i(x - d[E], T),
                k = !t.middlewareData.shift;
              let O = L,
                C = P;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (C = T), null != (r = t.middlewareData.shift) && r.enabled.y && (O = R), k && !y) {
                const e = a(d.left, 0),
                  t = a(d.right, 0),
                  n = a(d.top, 0),
                  r = a(d.bottom, 0);
                v ? C = x - 2 * (0 !== e || 0 !== t ? e + t : a(d.left, d.right)) : O = b - 2 * (0 !== n || 0 !== r ? n + r : a(d.top, d.bottom))
              }
              await f({
                ...t,
                availableWidth: C,
                availableHeight: O
              });
              const D = await l.getDimensions(c.floating);
              return x !== D.width || b !== D.height ? {
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
                  const e = T(await S(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: L(e)
                    }
                  }
                }
                case "escaped": {
                  const e = T(await S(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: L(e)
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
              platform: s,
              elements: l,
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
              w = v(o),
              x = y(w),
              b = await s.getDimensions(f),
              E = "y" === w,
              R = E ? "top" : "left",
              S = E ? "bottom" : "right",
              T = E ? "clientHeight" : "clientWidth",
              L = a.reference[x] + a.reference[w] - g[w] - a.floating[x],
              P = g[w] - a.reference[w],
              k = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(f));
            let O = k ? k[T] : 0;
            O && await (null == s.isElement ? void 0 : s.isElement(k)) || (O = l.floating[T] || a.floating[x]);
            const C = L / 2 - P / 2,
              D = O / 2 - b[x] / 2 - 1,
              M = i(h[R], D),
              _ = i(h[S], D),
              N = M,
              F = O - b[x] - _,
              H = O / 2 - b[x] / 2 + C,
              W = d(N, H, F),
              I = !c.arrow && null != m(o) && H !== W && a.reference[x] / 2 - (H < N ? M : _) - b[x] / 2 < 0,
              j = I ? H < N ? H - N : H - F : 0;
            return {
              [w]: g[w] + j,
              data: {
                [w]: W,
                centerOffset: H - W - j,
                ...I && {
                  alignmentOffset: j
                }
              },
              reset: I
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
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = p(e, t), f = {
                x: n,
                y: r
              }, u = w(o), d = g(u);
              let m = f[d],
                y = f[u];
              const v = p(s, t),
                x = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...v
                };
              if (l) {
                const e = "y" === d ? "height" : "width",
                  t = i.reference[d] - i.floating[e] + x.mainAxis,
                  n = i.reference[d] + i.reference[e] - x.mainAxis;
                m < t ? m = t : m > n && (m = n)
              }
              if (c) {
                var b, A;
                const e = "y" === d ? "width" : "height",
                  t = ["top", "left"].includes(h(o)),
                  n = i.reference[u] - i.floating[e] + (t && (null == (b = a.offset) ? void 0 : b[u]) || 0) + (t ? 0 : x.crossAxis),
                  r = i.reference[u] + i.reference[e] + (t ? 0 : (null == (A = a.offset) ? void 0 : A[u]) || 0) - (t ? x.crossAxis : 0);
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
              platform: le,
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
            } = n, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: f,
                y: u
              } = R(c, r, l),
              d = r,
              p = {},
              h = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: i,
                fn: m
              } = s[n], {
                x: g,
                y,
                data: w,
                reset: v
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
              }, v && h <= 50 && (h++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (c = !0 === v.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : v.rects), ({
                x: f,
                y: u
              } = R(c, d, l))), n = -1)
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
        ve = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

      function xe(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!xe(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || xe(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function be(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ae(e, t) {
        const n = be(e);
        return Math.round(t * n) / n
      }

      function Ee(e) {
        const t = r.useRef(e);
        return ve((() => {
          t.current = e
        })), t
      }
      const Re = e => ({
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
        Te = (e, t) => ({
          ...ge(e),
          options: [e, t]
        }),
        Le = (e, t) => ({
          ...de(e),
          options: [e, t]
        }),
        Pe = (e, t) => ({
          ...pe(e),
          options: [e, t]
        }),
        ke = (e, t) => ({
          ...he(e),
          options: [e, t]
        }),
        Oe = (e, t) => ({
          ...Re(e),
          options: [e, t]
        });
      var Ce = n(85100),
        De = n(25854),
        Me = r.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, De.jsx)(Ce.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, De.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      Me.displayName = "Arrow";
      var _e = Me,
        Ne = n(86410),
        Fe = n(29818),
        He = n(27734),
        We = n(85307),
        Ie = n(61832),
        je = "Popper",
        [Be, ze] = (0, Fe.A)(je),
        [$e, Ve] = Be(je),
        Ke = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null);
          return (0, De.jsx)($e, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      Ke.displayName = je;
      var Xe = "PopperAnchor",
        Ye = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, a = Ve(Xe, n), s = r.useRef(null), l = (0, Ne.s)(t, s);
          return r.useEffect((() => {
            a.onAnchorChange(o?.current || s.current)
          })), o ? null : (0, De.jsx)(Ce.sG.div, {
            ...i,
            ref: l
          })
        }));
      Ye.displayName = Xe;
      var qe = "PopperContent",
        [Ge, Ue] = Be(qe),
        Je = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: s = 0,
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
            ...v
          } = e, x = Ve(qe, n), [b, A] = r.useState(null), E = (0, Ne.s)(t, (e => A(e))), [R, S] = r.useState(null), T = (0, Ie.X)(R), L = T?.width ?? 0, P = T?.height ?? 0, k = o + ("center" !== c ? "-" + c : ""), O = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, D = Array.isArray(p) ? p : [p], M = D.length > 0, _ = {
            padding: O,
            boundary: D.filter(tt),
            altBoundary: M
          }, {
            refs: N,
            floatingStyles: F,
            placement: H,
            isPositioned: W,
            middlewareData: I
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: o = [],
              platform: i,
              elements: {
                reference: a,
                floating: s
              } = {},
              transform: l = !0,
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
            xe(p, o) || h(o);
            const [m, g] = r.useState(null), [y, w] = r.useState(null), v = r.useCallback((e => {
              e !== E.current && (E.current = e, g(e))
            }), []), x = r.useCallback((e => {
              e !== R.current && (R.current = e, w(e))
            }), []), b = a || m, A = s || y, E = r.useRef(null), R = r.useRef(null), S = r.useRef(u), T = null != c, L = Ee(c), P = Ee(i), k = Ee(f), O = r.useCallback((() => {
              if (!E.current || !R.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: p
              };
              P.current && (e.platform = P.current), ye(E.current, R.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                C.current && !xe(S.current, t) && (S.current = t, we.flushSync((() => {
                  d(t)
                })))
              }))
            }), [p, t, n, P, k]);
            ve((() => {
              !1 === f && S.current.isPositioned && (S.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [f]);
            const C = r.useRef(!1);
            ve((() => (C.current = !0, () => {
              C.current = !1
            })), []), ve((() => {
              if (b && (E.current = b), A && (R.current = A), b && A) {
                if (L.current) return L.current(b, A, O);
                O()
              }
            }), [b, A, O, L, T]);
            const D = r.useMemo((() => ({
                reference: E,
                floating: R,
                setReference: v,
                setFloating: x
              })), [v, x]),
              M = r.useMemo((() => ({
                reference: b,
                floating: A
              })), [b, A]),
              _ = r.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!M.floating) return e;
                const t = Ae(M.floating, u.x),
                  r = Ae(M.floating, u.y);
                return l ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...be(M.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, l, M.floating, u.x, u.y]);
            return r.useMemo((() => ({
              ...u,
              update: O,
              refs: D,
              elements: M,
              floatingStyles: _
            })), [u, O, D, M, _])
          }({
            strategy: "fixed",
            placement: k,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: s = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = r, d = G(e), p = o || s ? [...d ? X(d) : [], ...X(t)] : [];
              p.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), s && e.addEventListener("resize", n)
              }));
              const h = d && f ? function(e, t) {
                let n, r = null;
                const o = C(e);

                function s() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function c(f, u) {
                  void 0 === f && (f = !1), void 0 === u && (u = 1), s();
                  const d = e.getBoundingClientRect(),
                    {
                      left: p,
                      top: h,
                      width: m,
                      height: g
                    } = d;
                  if (f || t(), !m || !g) return;
                  const y = {
                    rootMargin: -l(h) + "px " + -l(o.clientWidth - (p + m)) + "px " + -l(o.clientHeight - (h + g)) + "px " + -l(p) + "px",
                    threshold: a(0, i(1, u)) || 1
                  };
                  let w = !0;

                  function v(t) {
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
                    r = new IntersectionObserver(v, {
                      ...y,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(v, y)
                  }
                  r.observe(e)
                }(!0), s
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
                  o && e.removeEventListener("scroll", n), s && e.removeEventListener("resize", n)
                })), null == h || h(), null == (e = y) || e.disconnect(), y = null, u && cancelAnimationFrame(m)
              }
            }(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: x.anchor
            },
            middleware: [(j = {
              mainAxis: s + P,
              alignmentAxis: f
            }, {
              ...fe(j),
              options: [j, undefined]
            }), d && Se({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? Te() : void 0,
              ..._
            }), d && Le({
              ..._
            }), Pe({
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
            }), R && Oe({
              element: R,
              padding: u
            }), nt({
              arrowWidth: L,
              arrowHeight: P
            }), g && ke({
              strategy: "referenceHidden",
              ..._
            })]
          });
          var j;
          const [B, z] = rt(H), $ = (0, He.c)(w);
          (0, We.N)((() => {
            W && $?.()
          }), [W, $]);
          const V = I.arrow?.x,
            K = I.arrow?.y,
            Y = 0 !== I.arrow?.centerOffset,
            [q, U] = r.useState();
          return (0, We.N)((() => {
            b && U(window.getComputedStyle(b).zIndex)
          }), [b]), (0, De.jsx)("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...F,
              transform: W ? F.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: q,
              "--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
              ...I.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, De.jsx)(Ge, {
              scope: n,
              placedSide: B,
              onArrowChange: S,
              arrowX: V,
              arrowY: K,
              shouldHideArrow: Y,
              children: (0, De.jsx)(Ce.sG.div, {
                "data-side": B,
                "data-align": z,
                ...v,
                ref: E,
                style: {
                  ...v.style,
                  animation: W ? void 0 : "none"
                }
              })
            })
          })
        }));
      Je.displayName = qe;
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
          } = e, o = Ue(Qe, n), i = Ze[o.placedSide];
          return (0, De.jsx)("span", {
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
            children: (0, De.jsx)(_e, {
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
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = rt(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], u = (o.arrow?.x ?? 0) + a / 2, d = (o.arrow?.y ?? 0) + s / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? f : `${u}px`, h = -s + "px") : "top" === l ? (p = i ? f : `${u}px`, h = `${r.floating.height+s}px`) : "right" === l ? (p = -s + "px", h = i ? f : `${d}px`) : "left" === l && (p = `${r.floating.width+s}px`, h = i ? f : `${d}px`), {
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
      var ot = Ke,
        it = Ye,
        at = Je,
        st = et
    },
    61832: (e, t, n) => {
      n.d(t, {
        X: () => i
      });
      var r = n(71127),
        o = n(85307);

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
    72480: (e, t, n) => {
      n.d(t, {
        n: () => u
      });
      var r = n(71127),
        o = n(86410),
        i = n(85100),
        a = n(27734),
        s = n(25854),
        l = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        f = {
          bubbles: !1,
          cancelable: !0
        },
        u = r.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: u = !1,
            onMountAutoFocus: h,
            onUnmountAutoFocus: y,
            ...w
          } = e, [v, x] = r.useState(null), b = (0, a.c)(h), A = (0, a.c)(y), E = r.useRef(null), R = (0, o.s)(t, (e => x(e))), S = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect((() => {
            if (u) {
              let e = function(e) {
                  if (S.paused || !v) return;
                  const t = e.target;
                  v.contains(t) ? E.current = t : m(E.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (S.paused || !v) return;
                  const t = e.relatedTarget;
                  null !== t && (v.contains(t) || m(E.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && m(v)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return v && r.observe(v, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [u, v, S.paused]), r.useEffect((() => {
            if (v) {
              g.add(S);
              const e = document.activeElement;
              if (!v.contains(e)) {
                const t = new CustomEvent(l, f);
                v.addEventListener(l, b), v.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (m(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(d(v).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && m(v))
              }
              return () => {
                v.removeEventListener(l, b), setTimeout((() => {
                  const t = new CustomEvent(c, f);
                  v.addEventListener(c, A), v.dispatchEvent(t), t.defaultPrevented || m(e ?? document.body, {
                    select: !0
                  }), v.removeEventListener(c, A), g.remove(S)
                }), 0)
              }
            }
          }), [v, b, A, S]);
          const T = r.useCallback((e => {
            if (!n && !u) return;
            if (S.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = d(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && m(i, {
                select: !0
              })) : (e.preventDefault(), n && m(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }), [n, u, S.paused]);
          return (0, s.jsx)(i.sG.div, {
            tabIndex: -1,
            ...w,
            ref: R,
            onKeyDown: T
          })
        }));

      function d(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function p(e, t) {
        for (const n of e)
          if (!h(n, {
              upTo: t
            })) return n
      }

      function h(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function m(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      u.displayName = "FocusScope";
      var g = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = y(e, t), e.unshift(t)
          },
          remove(t) {
            e = y(e, t), e[0]?.resume()
          }
        }
      }();

      function y(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    98463: (e, t, n) => {
      n.d(t, {
        Eq: () => l
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        a = 0,
        s = function(e) {
          return e && (e.host || s(e.parentNode))
        },
        l = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (l.push.apply(l, Array.from(c.querySelectorAll("[aria-live]"))), function(e, t, n, l) {
            var c = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = s(t);
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
                  var t = e.getAttribute(l),
                    i = null !== t && "false" !== t,
                    a = (r.get(e) || 0) + 1,
                    s = (f.get(e) || 0) + 1;
                  r.set(e, a), f.set(e, s), u.push(e), 1 === a && i && o.set(e, !0), 1 === s && e.setAttribute(n, "true"), i || e.setAttribute(l, "true")
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
                  r.set(e, t), f.set(e, i), t || (o.has(e) || e.removeAttribute(l), o.delete(e)), i || e.removeAttribute(n)
                })), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(l, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    }
  }
]);