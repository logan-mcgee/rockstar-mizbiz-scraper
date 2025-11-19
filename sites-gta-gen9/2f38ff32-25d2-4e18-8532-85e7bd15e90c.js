try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2f38ff32-25d2-4e18-8532-85e7bd15e90c", t._sentryDebugIdIdentifier = "sentry-dbid-2f38ff32-25d2-4e18-8532-85e7bd15e90c")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1302], {
    16859: (t, e) => {
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        a = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        f = n ? Symbol.for("react.async_mode") : 60111,
        u = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        h = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        w = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;

      function v(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch (t = t.type) {
                case f:
                case u:
                case i:
                case s:
                case l:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case c:
                    case d:
                    case h:
                    case y:
                    case a:
                      return t;
                    default:
                      return e
                  }
              }
            case r:
              return e
          }
        }
      }

      function S(t) {
        return v(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = a, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = y, e.Portal = r, e.Profiler = s, e.StrictMode = l, e.Suspense = p, e.isAsyncMode = function(t) {
        return S(t) || v(t) === f
      }, e.isConcurrentMode = S, e.isContextConsumer = function(t) {
        return v(t) === c
      }, e.isContextProvider = function(t) {
        return v(t) === a
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
      }, e.isForwardRef = function(t) {
        return v(t) === d
      }, e.isFragment = function(t) {
        return v(t) === i
      }, e.isLazy = function(t) {
        return v(t) === h
      }, e.isMemo = function(t) {
        return v(t) === y
      }, e.isPortal = function(t) {
        return v(t) === r
      }, e.isProfiler = function(t) {
        return v(t) === s
      }, e.isStrictMode = function(t) {
        return v(t) === l
      }, e.isSuspense = function(t) {
        return v(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === s || t === l || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === a || t.$$typeof === c || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === x || t.$$typeof === g)
      }, e.typeOf = v
    },
    35255: (t, e, n) => {
      var o = n(88335),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        l = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function a(t) {
        return o.isMemo(t) ? l : s[t.$$typeof] || r
      }
      s[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[o.Memo] = l;
      var c = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      t.exports = function t(e, n, o) {
        if ("string" != typeof n) {
          if (m) {
            var r = p(n);
            r && r !== m && t(e, r, o)
          }
          var l = f(n);
          u && (l = l.concat(u(n)));
          for (var s = a(e), y = a(n), h = 0; h < l.length; ++h) {
            var g = l[h];
            if (!(i[g] || o && o[g] || y && y[g] || s && s[g])) {
              var w = d(n, g);
              try {
                c(e, g, w)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    64728: (t, e, n) => {
      n.d(e, {
        UE: () => Ot,
        ll: () => Rt,
        rD: () => Ct,
        UU: () => At,
        jD: () => Dt,
        ER: () => Pt,
        cY: () => Tt,
        BN: () => Et,
        Ej: () => Lt
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
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
        return i(t, r(e, n))
      }

      function d(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function p(t) {
        return t.split("-")[0]
      }

      function m(t) {
        return t.split("-")[1]
      }

      function y(t) {
        return "x" === t ? "y" : "x"
      }

      function h(t) {
        return "y" === t ? "height" : "width"
      }
      const g = new Set(["top", "bottom"]);

      function w(t) {
        return g.has(p(t)) ? "y" : "x"
      }

      function b(t) {
        return y(w(t))
      }

      function x(t) {
        return t.replace(/start|end/g, t => f[t])
      }
      const v = ["left", "right"],
        S = ["right", "left"],
        R = ["top", "bottom"],
        T = ["bottom", "top"];

      function E(t) {
        return t.replace(/left|right|bottom|top/g, t => c[t])
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

      function L(t) {
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
        const i = w(e),
          l = b(e),
          s = h(l),
          a = p(e),
          c = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[s] / 2 - r[s] / 2;
        let y;
        switch (a) {
          case "top":
            y = {
              x: f,
              y: o.y - r.height
            };
            break;
          case "bottom":
            y = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            y = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            y = {
              x: o.x - r.width,
              y: u
            };
            break;
          default:
            y = {
              x: o.x,
              y: o.y
            }
        }
        switch (m(e)) {
          case "start":
            y[l] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            y[l] += d * (n && c ? -1 : 1)
        }
        return y
      }
      async function O(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: l,
          elements: s,
          strategy: a
        } = t, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(e, t), y = A(m), h = s[p ? "floating" === u ? "reference" : "floating" : u], g = L(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: a
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), x = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, v = L(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: w,
          offsetParent: b,
          strategy: a
        }) : w);
        return {
          top: (g.top - v.top + y.top) / x.y,
          bottom: (v.bottom - g.bottom + y.bottom) / x.y,
          left: (g.left - v.left + y.left) / x.x,
          right: (v.right - g.right + y.right) / x.x
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

      function C(t) {
        return o.some(e => t[e] >= 0)
      }
      const $ = new Set(["left", "top"]);

      function M() {
        return "undefined" != typeof window
      }

      function k(t) {
        return H(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function F(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function _(t) {
        var e;
        return null == (e = (H(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function H(t) {
        return !!M() && (t instanceof Node || t instanceof F(t).Node)
      }

      function j(t) {
        return !!M() && (t instanceof Element || t instanceof F(t).Element)
      }

      function W(t) {
        return !!M() && (t instanceof HTMLElement || t instanceof F(t).HTMLElement)
      }

      function B(t) {
        return !(!M() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof F(t).ShadowRoot)
      }
      const N = new Set(["inline", "contents"]);

      function z(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = tt(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !N.has(r)
      }
      const V = new Set(["table", "td", "th"]);

      function I(t) {
        return V.has(k(t))
      }
      const Y = [":popover-open", ":modal"];

      function U(t) {
        return Y.some(e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        })
      }
      const q = ["transform", "translate", "scale", "rotate", "perspective"],
        X = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        G = ["paint", "layout", "strict", "content"];

      function J(t) {
        const e = K(),
          n = j(t) ? tt(t) : t;
        return q.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || X.some(t => (n.willChange || "").includes(t)) || G.some(t => (n.contain || "").includes(t))
      }

      function K() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const Q = new Set(["html", "body", "#document"]);

      function Z(t) {
        return Q.has(k(t))
      }

      function tt(t) {
        return F(t).getComputedStyle(t)
      }

      function et(t) {
        return j(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function nt(t) {
        if ("html" === k(t)) return t;
        const e = t.assignedSlot || t.parentNode || B(t) && t.host || _(t);
        return B(e) ? e.host : e
      }

      function ot(t) {
        const e = nt(t);
        return Z(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : W(e) && z(e) ? e : ot(e)
      }

      function rt(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = ot(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = F(r);
        if (i) {
          const t = it(l);
          return e.concat(l, l.visualViewport || [], z(r) ? r : [], t && n ? rt(t) : [])
        }
        return e.concat(r, rt(r, [], n))
      }

      function it(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function lt(t) {
        const e = tt(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = W(t),
          i = r ? t.offsetWidth : n,
          s = r ? t.offsetHeight : o,
          a = l(n) !== i || l(o) !== s;
        return a && (n = i, o = s), {
          width: n,
          height: o,
          $: a
        }
      }

      function st(t) {
        return j(t) ? t : t.contextElement
      }

      function at(t) {
        const e = st(t);
        if (!W(e)) return a(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = lt(e);
        let s = (i ? l(n.width) : n.width) / o,
          c = (i ? l(n.height) : n.height) / r;
        return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), {
          x: s,
          y: c
        }
      }
      const ct = a(0);

      function ft(t) {
        const e = F(t);
        return K() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : ct
      }

      function ut(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = st(t);
        let l = a(1);
        e && (o ? j(o) && (l = at(o)) : l = at(t));
        const s = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== F(t)) && e
        }(i, n, o) ? ft(i) : a(0);
        let c = (r.left + s.x) / l.x,
          f = (r.top + s.y) / l.y,
          u = r.width / l.x,
          d = r.height / l.y;
        if (i) {
          const t = F(i),
            e = o && j(o) ? F(o) : o;
          let n = t,
            r = it(n);
          for (; r && o && e !== n;) {
            const t = at(r),
              e = r.getBoundingClientRect(),
              o = tt(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            c *= t.x, f *= t.y, u *= t.x, d *= t.y, c += i, f += l, n = F(r), r = it(n)
          }
        }
        return L({
          width: u,
          height: d,
          x: c,
          y: f
        })
      }

      function dt(t, e) {
        const n = et(t).scrollLeft;
        return e ? e.left + n : ut(_(t)).left + n
      }

      function pt(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - dt(t, n),
          y: n.top + e.scrollTop
        }
      }
      const mt = new Set(["absolute", "fixed"]);

      function yt(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = F(t),
            o = _(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            l = o.clientHeight,
            s = 0,
            a = 0;
          if (r) {
            i = r.width, l = r.height;
            const t = K();
            (!t || t && "fixed" === e) && (s = r.offsetLeft, a = r.offsetTop)
          }
          const c = dt(o);
          if (c <= 0) {
            const t = o.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              r = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              l = Math.abs(o.clientWidth - e.clientWidth - r);
            l <= 25 && (i -= l)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: l,
            x: s,
            y: a
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = _(t),
            n = et(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let s = -n.scrollLeft + dt(t);
          const a = -n.scrollTop;
          return "rtl" === tt(o).direction && (s += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: l,
            x: s,
            y: a
          }
        }(_(t));
        else if (j(e)) o = function(t, e) {
          const n = ut(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = W(t) ? at(t) : a(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
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
        return L(o)
      }

      function ht(t, e) {
        const n = nt(t);
        return !(n === e || !j(n) || Z(n)) && ("fixed" === tt(n).position || ht(n, e))
      }

      function gt(t, e, n) {
        const o = W(e),
          r = _(e),
          i = "fixed" === n,
          l = ut(t, !0, i, e);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = a(0);

        function f() {
          c.x = dt(r)
        }
        if (o || !o && !i)
          if (("body" !== k(e) || z(r)) && (s = et(e)), o) {
            const t = ut(e, !0, i, e);
            c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
          } else r && f();
        i && !o && r && f();
        const u = !r || o || i ? a(0) : pt(r, s);
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

      function bt(t, e) {
        if (!W(t) || "fixed" === tt(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return _(t) === n && (n = n.ownerDocument.body), n
      }

      function xt(t, e) {
        const n = F(t);
        if (U(t)) return n;
        if (!W(t)) {
          let e = nt(t);
          for (; e && !Z(e);) {
            if (j(e) && !wt(e)) return e;
            e = nt(e)
          }
          return n
        }
        let o = bt(t, e);
        for (; o && I(o) && wt(o);) o = bt(o, e);
        return o && Z(o) && wt(o) && !J(o) ? n : o || function(t) {
          let e = nt(t);
          for (; W(e) && !Z(e);) {
            if (J(e)) return e;
            if (U(e)) return null;
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
            strategy: r
          } = t;
          const i = "fixed" === r,
            l = _(o),
            s = !!e && U(e.floating);
          if (o === l || s && i) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = a(1);
          const u = a(0),
            d = W(o);
          if ((d || !d && !i) && (("body" !== k(o) || z(l)) && (c = et(o)), W(o))) {
            const t = ut(o);
            f = at(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !l || d || i ? a(0) : pt(l, c);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - c.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - c.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: _,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const s = [..."clippingAncestors" === n ? U(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = rt(t, [], !1).filter(t => j(t) && "body" !== k(t)),
                r = null;
              const i = "fixed" === tt(t).position;
              let l = i ? nt(t) : t;
              for (; j(l) && !Z(l);) {
                const e = tt(l),
                  n = J(l);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && mt.has(r.position) || z(l) && !n && ht(t, l)) ? o = o.filter(t => t !== l) : r = e, l = nt(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            a = s[0],
            c = s.reduce((t, n) => {
              const o = yt(e, n, l);
              return t.top = i(o.top, t.top), t.right = r(o.right, t.right), t.bottom = r(o.bottom, t.bottom), t.left = i(o.left, t.left), t
            }, yt(e, a, l));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: xt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || xt,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: gt(t.reference, await e(t.floating), t.strategy),
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
        isElement: j,
        isRTL: function(t) {
          return "rtl" === tt(t).direction
        }
      };

      function St(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function Rt(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: a = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = st(t), p = l || a ? [...d ? rt(d) : [], ...rt(e)] : [];
        p.forEach(t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), a && t.addEventListener("resize", n)
        });
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = _(t);

          function a() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function c(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), a();
            const d = t.getBoundingClientRect(),
              {
                left: p,
                top: m,
                width: y,
                height: h
              } = d;
            if (f || e(), !y || !h) return;
            const g = {
              rootMargin: -s(m) + "px " + -s(l.clientWidth - (p + y)) + "px " + -s(l.clientHeight - (m + h)) + "px " + -s(p) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function b(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return c();
                o ? c(!1, o) : n = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || St(d, t.getBoundingClientRect()) || c(), w = !1
            }
            try {
              o = new IntersectionObserver(b, {
                ...g,
                root: l.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(b, g)
            }
            o.observe(t)
          }(!0), a
        }(d, n) : null;
        let y, h = -1,
          g = null;
        c && (g = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === d && g && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var t;
            null == (t = g) || t.observe(e)
          })), n()
        }), d && !u && g.observe(d), g.observe(e));
        let w = u ? ut(t) : null;
        return u && function e() {
          const o = ut(t);
          w && !St(w, o) && n(), w = o, y = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach(t => {
            l && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n)
          }), null == m || m(), null == (t = g) || t.disconnect(), g = null, u && cancelAnimationFrame(y)
        }
      }
      const Tt = function(t) {
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
              } = e, a = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = p(n), s = m(n), a = "y" === w(n), c = $.has(l) ? -1 : 1, f = i && a ? -1 : 1, u = d(e, t);
                let {
                  mainAxis: y,
                  crossAxis: h,
                  alignmentAxis: g
                } = "number" == typeof u ? {
                  mainAxis: u,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: u.mainAxis || 0,
                  crossAxis: u.crossAxis || 0,
                  alignmentAxis: u.alignmentAxis
                };
                return s && "number" == typeof g && (h = "end" === s ? -1 * g : g), a ? {
                  x: h * f,
                  y: y * c
                } : {
                  x: y * c,
                  y: h * f
                }
              }(e, t);
              return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (o = s.arrow) && o.alignmentOffset ? {} : {
                x: r + a.x,
                y: i + a.y,
                data: {
                  ...a,
                  placement: l
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
                y: o,
                placement: r
              } = e, {
                mainAxis: i = !0,
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
              }, f = await O(e, a), m = w(p(r)), h = y(m);
              let g = c[h],
                b = c[m];
              if (i) {
                const t = "y" === h ? "bottom" : "right";
                g = u(g + f["y" === h ? "top" : "left"], g, g - f[t])
              }
              if (l) {
                const t = "y" === m ? "bottom" : "right";
                b = u(b + f["y" === m ? "top" : "left"], b, b - f[t])
              }
              const x = s.fn({
                ...e,
                [h]: g,
                [m]: b
              });
              return {
                ...x,
                data: {
                  x: x.x - n,
                  y: x.y - o,
                  enabled: {
                    [h]: i,
                    [m]: l
                  }
                }
              }
            }
          }
        },
        At = function(t) {
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
                platform: a,
                elements: c
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: y,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: A = "none",
                flipAlignment: L = !0,
                ...D
              } = d(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const P = p(r),
                C = w(s),
                $ = p(s) === s,
                M = await (null == a.isRTL ? void 0 : a.isRTL(c.floating)),
                k = y || ($ || !L ? [E(s)] : function(t) {
                  const e = E(t);
                  return [x(t), e, x(e)]
                }(s)),
                F = "none" !== A;
              !y && F && k.push(... function(t, e, n, o) {
                const r = m(t);
                let i = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? S : v : e ? v : S;
                    case "left":
                    case "right":
                      return e ? R : T;
                    default:
                      return []
                  }
                }(p(t), "start" === n, o);
                return r && (i = i.map(t => t + "-" + r), e && (i = i.concat(i.map(x)))), i
              }(s, L, A, M));
              const _ = [s, ...k],
                H = await O(e, D),
                j = [];
              let W = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && j.push(H[P]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = b(t),
                    i = h(r);
                  let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (l = E(l)), [l, E(l)]
                }(r, l, M);
                j.push(H[t[0]], H[t[1]])
              }
              if (W = [...W, {
                  placement: r,
                  overflows: j
                }], !j.every(t => t <= 0)) {
                var B, N;
                const t = ((null == (B = i.flip) ? void 0 : B.index) || 0) + 1,
                  e = _[t];
                if (e && ("alignment" !== u || C === w(e) || W.every(t => w(t.placement) !== C || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: W
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (N = W.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : N.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var z;
                    const t = null == (z = W.filter(t => {
                      if (F) {
                        const e = w(t.placement);
                        return e === C || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : z[0];
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
        Lt = function(t) {
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
              } = d(t, e), y = await O(e, u), h = p(l), g = m(l), b = "y" === w(l), {
                width: x,
                height: v
              } = s.floating;
              let S, R;
              "top" === h || "bottom" === h ? (S = h, R = g === (await (null == a.isRTL ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = h, S = "end" === g ? "top" : "bottom");
              const T = v - y.top - y.bottom,
                E = x - y.left - y.right,
                A = r(v - y[S], T),
                L = r(x - y[R], E),
                D = !e.middlewareData.shift;
              let P = A,
                C = L;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (C = E), null != (o = e.middlewareData.shift) && o.enabled.y && (P = T), D && !g) {
                const t = i(y.left, 0),
                  e = i(y.right, 0),
                  n = i(y.top, 0),
                  o = i(y.bottom, 0);
                b ? C = x - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : P = v - 2 * (0 !== n || 0 !== o ? n + o : i(y.top, y.bottom))
              }
              await f({
                ...e,
                availableWidth: C,
                availableHeight: P
              });
              const $ = await a.getDimensions(c.floating);
              return x !== $.width || v !== $.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        Dt = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n
              } = e, {
                strategy: o = "referenceHidden",
                ...r
              } = d(t, e);
              switch (o) {
                case "referenceHidden": {
                  const t = P(await O(e, {
                    ...r,
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
                  const t = P(await O(e, {
                    ...r,
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
        Ot = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: l,
              platform: s,
              elements: a,
              middlewareData: c
            } = e, {
              element: f,
              padding: p = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const y = A(p),
              g = {
                x: n,
                y: o
              },
              w = b(i),
              x = h(w),
              v = await s.getDimensions(f),
              S = "y" === w,
              R = S ? "top" : "left",
              T = S ? "bottom" : "right",
              E = S ? "clientHeight" : "clientWidth",
              L = l.reference[x] + l.reference[w] - g[w] - l.floating[x],
              D = g[w] - l.reference[w],
              O = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(f));
            let P = O ? O[E] : 0;
            P && await (null == s.isElement ? void 0 : s.isElement(O)) || (P = a.floating[E] || l.floating[x]);
            const C = L / 2 - D / 2,
              $ = P / 2 - v[x] / 2 - 1,
              M = r(y[R], $),
              k = r(y[T], $),
              F = M,
              _ = P - v[x] - k,
              H = P / 2 - v[x] / 2 + C,
              j = u(F, H, _),
              W = !c.arrow && null != m(i) && H !== j && l.reference[x] / 2 - (H < F ? M : k) - v[x] / 2 < 0,
              B = W ? H < F ? H - F : H - _ : 0;
            return {
              [w]: g[w] + B,
              data: {
                [w]: j,
                centerOffset: H - j - B,
                ...W && {
                  alignmentOffset: B
                }
              },
              reset: W
            }
          }
        }),
        Pt = function(t) {
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
                mainAxis: a = !0,
                crossAxis: c = !0
              } = d(t, e), f = {
                x: n,
                y: o
              }, u = w(r), m = y(u);
              let h = f[m],
                g = f[u];
              const b = d(s, e),
                x = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (a) {
                const t = "y" === m ? "height" : "width",
                  e = i.reference[m] - i.floating[t] + x.mainAxis,
                  n = i.reference[m] + i.reference[t] - x.mainAxis;
                h < e ? h = e : h > n && (h = n)
              }
              if (c) {
                var v, S;
                const t = "y" === m ? "width" : "height",
                  e = $.has(p(r)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (v = l.offset) ? void 0 : v[u]) || 0) + (e ? 0 : x.crossAxis),
                  o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (S = l.offset) ? void 0 : S[u]) || 0) - (e ? x.crossAxis : 0);
                g < n ? g = n : g > o && (g = o)
              }
              return {
                [m]: h,
                [u]: g
              }
            }
          }
        },
        Ct = (t, e, n) => {
          const o = new Map,
            r = {
              platform: vt,
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
            } = n, s = i.filter(Boolean), a = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let c = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = D(c, o, a),
              d = o,
              p = {},
              m = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: i,
                fn: y
              } = s[n], {
                x: h,
                y: g,
                data: w,
                reset: b
              } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: p,
                rects: c,
                platform: l,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != h ? h : f, u = null != g ? g : u, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...w
                }
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (c = !0 === b.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = D(c, d, a))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: r,
              middlewareData: p
            }
          })(t, e, {
            ...r,
            platform: i
          })
        }
    },
    88335: (t, e, n) => {
      t.exports = n(16859)
    }
  }
]);