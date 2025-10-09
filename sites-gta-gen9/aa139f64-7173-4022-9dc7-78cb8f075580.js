try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "aa139f64-7173-4022-9dc7-78cb8f075580", t._sentryDebugIdIdentifier = "sentry-dbid-aa139f64-7173-4022-9dc7-78cb8f075580")
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
  [1186, 2649, 5030], {
    16859: (t, e) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        c = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109,
        a = n ? Symbol.for("react.context") : 60110,
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
                case c:
                case l:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case a:
                    case d:
                    case h:
                    case y:
                    case s:
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

      function T(t) {
        return v(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = a, e.ContextProvider = s, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = y, e.Portal = r, e.Profiler = c, e.StrictMode = l, e.Suspense = p, e.isAsyncMode = function(t) {
        return T(t) || v(t) === f
      }, e.isConcurrentMode = T, e.isContextConsumer = function(t) {
        return v(t) === a
      }, e.isContextProvider = function(t) {
        return v(t) === s
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
        return v(t) === c
      }, e.isStrictMode = function(t) {
        return v(t) === l
      }, e.isSuspense = function(t) {
        return v(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === c || t === l || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === s || t.$$typeof === a || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === x || t.$$typeof === g)
      }, e.typeOf = v
    },
    35255: (t, e, n) => {
      "use strict";
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
        c = {};

      function s(t) {
        return o.isMemo(t) ? l : c[t.$$typeof] || r
      }
      c[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[o.Memo] = l;
      var a = Object.defineProperty,
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
          for (var c = s(e), y = s(n), h = 0; h < l.length; ++h) {
            var g = l[h];
            if (!(i[g] || o && o[g] || y && y[g] || c && c[g])) {
              var w = d(n, g);
              try {
                a(e, g, w)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    42649: t => {
      var e, n, o = t.exports = {};

      function r() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function l(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === r || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
          e = r
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
          n = i
        }
      }();
      var c, s = [],
        a = !1,
        f = -1;

      function u() {
        a && c && (a = !1, c.length ? s = c.concat(s) : f = -1, s.length && d())
      }

      function d() {
        if (!a) {
          var t = l(u);
          a = !0;
          for (var e = s.length; e;) {
            for (c = s, s = []; ++f < e;) c && c[f].run();
            f = -1, e = s.length
          }
          c = null, a = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function p(t, e) {
        this.fun = t, this.array = e
      }

      function m() {}
      o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        s.push(new p(t, e)), 1 !== s.length || a || l(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(t) {
        return []
      }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, o.cwd = function() {
        return "/"
      }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, o.umask = function() {
        return 0
      }
    },
    64728: (t, e, n) => {
      "use strict";
      n.d(e, {
        UE: () => yt,
        ll: () => at,
        rD: () => gt,
        UU: () => dt,
        jD: () => mt,
        ER: () => ht,
        cY: () => ft,
        BN: () => ut,
        Ej: () => pt
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        l = Math.round,
        c = Math.floor,
        s = t => ({
          x: t,
          y: t
        }),
        a = {
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

      function g(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function w(t) {
        return y(g(t))
      }

      function b(t) {
        return t.replace(/start|end/g, (t => f[t]))
      }

      function x(t) {
        return t.replace(/left|right|bottom|top/g, (t => a[t]))
      }

      function v(t) {
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

      function R(t, e, n) {
        let {
          reference: o,
          floating: r
        } = t;
        const i = g(e),
          l = w(e),
          c = h(l),
          s = p(e),
          a = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[c] / 2 - r[c] / 2;
        let y;
        switch (s) {
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
            y[l] -= d * (n && a ? -1 : 1);
            break;
          case "end":
            y[l] += d * (n && a ? -1 : 1)
        }
        return y
      }
      async function S(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: l,
          elements: c,
          strategy: s
        } = t, {
          boundary: a = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(e, t), y = v(m), h = c[p ? "floating" === u ? "reference" : "floating" : u], g = T(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(c.floating)),
          boundary: a,
          rootBoundary: f,
          strategy: s
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)), x = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, R = T(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: c,
          rect: w,
          offsetParent: b,
          strategy: s
        }) : w);
        return {
          top: (g.top - R.top + y.top) / x.y,
          bottom: (R.bottom - g.bottom + y.bottom) / x.y,
          left: (g.left - R.left + y.left) / x.x,
          right: (R.right - g.right + y.right) / x.x
        }
      }

      function E(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function L(t) {
        return o.some((e => t[e] >= 0))
      }

      function A() {
        return "undefined" != typeof window
      }

      function D(t) {
        return $(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function O(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function P(t) {
        var e;
        return null == (e = ($(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function $(t) {
        return !!A() && (t instanceof Node || t instanceof O(t).Node)
      }

      function C(t) {
        return !!A() && (t instanceof Element || t instanceof O(t).Element)
      }

      function k(t) {
        return !!A() && (t instanceof HTMLElement || t instanceof O(t).HTMLElement)
      }

      function M(t) {
        return !(!A() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof O(t).ShadowRoot)
      }

      function _(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = W(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r)
      }

      function F(t) {
        return ["table", "td", "th"].includes(D(t))
      }

      function H(t) {
        return [":popover-open", ":modal"].some((e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        }))
      }

      function j(t) {
        const e = B(),
          n = C(t) ? W(t) : t;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((t => !!n[t] && "none" !== n[t])) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function B() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function N(t) {
        return ["html", "body", "#document"].includes(D(t))
      }

      function W(t) {
        return O(t).getComputedStyle(t)
      }

      function z(t) {
        return C(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function V(t) {
        if ("html" === D(t)) return t;
        const e = t.assignedSlot || t.parentNode || M(t) && t.host || P(t);
        return M(e) ? e.host : e
      }

      function I(t) {
        const e = V(t);
        return N(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : k(e) && _(e) ? e : I(e)
      }

      function Y(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = I(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = O(r);
        if (i) {
          const t = U(l);
          return e.concat(l, l.visualViewport || [], _(r) ? r : [], t && n ? Y(t) : [])
        }
        return e.concat(r, Y(r, [], n))
      }

      function U(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function q(t) {
        const e = W(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = k(t),
          i = r ? t.offsetWidth : n,
          c = r ? t.offsetHeight : o,
          s = l(n) !== i || l(o) !== c;
        return s && (n = i, o = c), {
          width: n,
          height: o,
          $: s
        }
      }

      function X(t) {
        return C(t) ? t : t.contextElement
      }

      function G(t) {
        const e = X(t);
        if (!k(e)) return s(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = q(e);
        let c = (i ? l(n.width) : n.width) / o,
          a = (i ? l(n.height) : n.height) / r;
        return c && Number.isFinite(c) || (c = 1), a && Number.isFinite(a) || (a = 1), {
          x: c,
          y: a
        }
      }
      const J = s(0);

      function K(t) {
        const e = O(t);
        return B() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : J
      }

      function Q(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = X(t);
        let l = s(1);
        e && (o ? C(o) && (l = G(o)) : l = G(t));
        const c = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== O(t)) && e
        }(i, n, o) ? K(i) : s(0);
        let a = (r.left + c.x) / l.x,
          f = (r.top + c.y) / l.y,
          u = r.width / l.x,
          d = r.height / l.y;
        if (i) {
          const t = O(i),
            e = o && C(o) ? O(o) : o;
          let n = t,
            r = U(n);
          for (; r && o && e !== n;) {
            const t = G(r),
              e = r.getBoundingClientRect(),
              o = W(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            a *= t.x, f *= t.y, u *= t.x, d *= t.y, a += i, f += l, n = O(r), r = U(n)
          }
        }
        return T({
          width: u,
          height: d,
          x: a,
          y: f
        })
      }

      function Z(t, e) {
        const n = z(t).scrollLeft;
        return e ? e.left + n : Q(P(t)).left + n
      }

      function tt(t, e, n) {
        void 0 === n && (n = !1);
        const o = t.getBoundingClientRect();
        return {
          x: o.left + e.scrollLeft - (n ? 0 : Z(t, o)),
          y: o.top + e.scrollTop
        }
      }

      function et(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = O(t),
            o = P(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            l = o.clientHeight,
            c = 0,
            s = 0;
          if (r) {
            i = r.width, l = r.height;
            const t = B();
            (!t || t && "fixed" === e) && (c = r.offsetLeft, s = r.offsetTop)
          }
          return {
            width: i,
            height: l,
            x: c,
            y: s
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = P(t),
            n = z(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let c = -n.scrollLeft + Z(t);
          const s = -n.scrollTop;
          return "rtl" === W(o).direction && (c += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: l,
            x: c,
            y: s
          }
        }(P(t));
        else if (C(e)) o = function(t, e) {
          const n = Q(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = k(t) ? G(t) : s(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = K(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return T(o)
      }

      function nt(t, e) {
        const n = V(t);
        return !(n === e || !C(n) || N(n)) && ("fixed" === W(n).position || nt(n, e))
      }

      function ot(t, e, n) {
        const o = k(e),
          r = P(e),
          i = "fixed" === n,
          l = Q(t, !0, i, e);
        let c = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = s(0);
        if (o || !o && !i)
          if (("body" !== D(e) || _(r)) && (c = z(e)), o) {
            const t = Q(e, !0, i, e);
            a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
          } else r && (a.x = Z(r));
        const f = !r || o || i ? s(0) : tt(r, c);
        return {
          x: l.left + c.scrollLeft - a.x - f.x,
          y: l.top + c.scrollTop - a.y - f.y,
          width: l.width,
          height: l.height
        }
      }

      function rt(t) {
        return "static" === W(t).position
      }

      function it(t, e) {
        if (!k(t) || "fixed" === W(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return P(t) === n && (n = n.ownerDocument.body), n
      }

      function lt(t, e) {
        const n = O(t);
        if (H(t)) return n;
        if (!k(t)) {
          let e = V(t);
          for (; e && !N(e);) {
            if (C(e) && !rt(e)) return e;
            e = V(e)
          }
          return n
        }
        let o = it(t, e);
        for (; o && F(o) && rt(o);) o = it(o, e);
        return o && N(o) && rt(o) && !j(o) ? n : o || function(t) {
          let e = V(t);
          for (; k(e) && !N(e);) {
            if (j(e)) return e;
            if (H(e)) return null;
            e = V(e)
          }
          return null
        }(t) || n
      }
      const ct = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: r
          } = t;
          const i = "fixed" === r,
            l = P(o),
            c = !!e && H(e.floating);
          if (o === l || c && i) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = s(1);
          const u = s(0),
            d = k(o);
          if ((d || !d && !i) && (("body" !== D(o) || _(l)) && (a = z(o)), k(o))) {
            const t = Q(o);
            f = G(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !l || d || i ? s(0) : tt(l, a, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - a.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - a.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: P,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const c = [..."clippingAncestors" === n ? H(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = Y(t, [], !1).filter((t => C(t) && "body" !== D(t))),
                r = null;
              const i = "fixed" === W(t).position;
              let l = i ? V(t) : t;
              for (; C(l) && !N(l);) {
                const e = W(l),
                  n = j(l);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || _(l) && !n && nt(t, l)) ? o = o.filter((t => t !== l)) : r = e, l = V(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            s = c[0],
            a = c.reduce(((t, n) => {
              const o = et(e, n, l);
              return t.top = i(o.top, t.top), t.right = r(o.right, t.right), t.bottom = r(o.bottom, t.bottom), t.left = i(o.left, t.left), t
            }), et(e, s, l));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          }
        },
        getOffsetParent: lt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || lt,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: ot(t.reference, await e(t.floating), t.strategy),
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
          } = q(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: G,
        isElement: C,
        isRTL: function(t) {
          return "rtl" === W(t).direction
        }
      };

      function st(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function at(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: s = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = X(t), p = l || s ? [...d ? Y(d) : [], ...Y(e)] : [];
        p.forEach((t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), s && t.addEventListener("resize", n)
        }));
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = P(t);

          function s() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function a(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), s();
            const d = t.getBoundingClientRect(),
              {
                left: p,
                top: m,
                width: y,
                height: h
              } = d;
            if (f || e(), !y || !h) return;
            const g = {
              rootMargin: -c(m) + "px " + -c(l.clientWidth - (p + y)) + "px " + -c(l.clientHeight - (m + h)) + "px " + -c(p) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function b(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return a();
                o ? a(!1, o) : n = setTimeout((() => {
                  a(!1, 1e-7)
                }), 1e3)
              }
              1 !== o || st(d, t.getBoundingClientRect()) || a(), w = !1
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
          }(!0), s
        }(d, n) : null;
        let y, h = -1,
          g = null;
        a && (g = new ResizeObserver((t => {
          let [o] = t;
          o && o.target === d && g && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
            var t;
            null == (t = g) || t.observe(e)
          }))), n()
        })), d && !u && g.observe(d), g.observe(e));
        let w = u ? Q(t) : null;
        return u && function e() {
          const o = Q(t);
          w && !st(w, o) && n(), w = o, y = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach((t => {
            l && t.removeEventListener("scroll", n), s && t.removeEventListener("resize", n)
          })), null == m || m(), null == (t = g) || t.disconnect(), g = null, u && cancelAnimationFrame(y)
        }
      }
      const ft = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: r,
                y: i,
                placement: l,
                middlewareData: c
              } = e, s = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = p(n), c = m(n), s = "y" === g(n), a = ["left", "top"].includes(l) ? -1 : 1, f = i && s ? -1 : 1, u = d(e, t);
                let {
                  mainAxis: y,
                  crossAxis: h,
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
                return c && "number" == typeof w && (h = "end" === c ? -1 * w : w), s ? {
                  x: h * f,
                  y: y * a
                } : {
                  x: y * a,
                  y: h * f
                }
              }(e, t);
              return l === (null == (n = c.offset) ? void 0 : n.placement) && null != (o = c.arrow) && o.alignmentOffset ? {} : {
                x: r + s.x,
                y: i + s.y,
                data: {
                  ...s,
                  placement: l
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
                y: o,
                placement: r
              } = e, {
                mainAxis: i = !0,
                crossAxis: l = !1,
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
                ...s
              } = d(t, e), a = {
                x: n,
                y: o
              }, f = await S(e, s), m = g(p(r)), h = y(m);
              let w = a[h],
                b = a[m];
              if (i) {
                const t = "y" === h ? "bottom" : "right";
                w = u(w + f["y" === h ? "top" : "left"], w, w - f[t])
              }
              if (l) {
                const t = "y" === m ? "bottom" : "right";
                b = u(b + f["y" === m ? "top" : "left"], b, b - f[t])
              }
              const x = c.fn({
                ...e,
                [h]: w,
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
        dt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: r,
                middlewareData: i,
                rects: l,
                initialPlacement: c,
                platform: s,
                elements: a
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: y,
                fallbackStrategy: v = "bestFit",
                fallbackAxisSideDirection: T = "none",
                flipAlignment: R = !0,
                ...E
              } = d(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const L = p(r),
                A = g(c),
                D = p(c) === c,
                O = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                P = y || (D || !R ? [x(c)] : function(t) {
                  const e = x(t);
                  return [b(t), e, b(e)]
                }(c)),
                $ = "none" !== T;
              !y && $ && P.push(... function(t, e, n, o) {
                const r = m(t);
                let i = function(t, e, n) {
                  const o = ["left", "right"],
                    r = ["right", "left"],
                    i = ["top", "bottom"],
                    l = ["bottom", "top"];
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? r : o : e ? o : r;
                    case "left":
                    case "right":
                      return e ? i : l;
                    default:
                      return []
                  }
                }(p(t), "start" === n, o);
                return r && (i = i.map((t => t + "-" + r)), e && (i = i.concat(i.map(b)))), i
              }(c, R, T, O));
              const C = [c, ...P],
                k = await S(e, E),
                M = [];
              let _ = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && M.push(k[L]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = w(t),
                    i = h(r);
                  let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (l = x(l)), [l, x(l)]
                }(r, l, O);
                M.push(k[t[0]], k[t[1]])
              }
              if (_ = [..._, {
                  placement: r,
                  overflows: M
                }], !M.every((t => t <= 0))) {
                var F, H;
                const t = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
                  e = C[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: _
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (H = _.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : H.placement;
                if (!n) switch (v) {
                  case "bestFit": {
                    var j;
                    const t = null == (j = _.filter((t => {
                      if ($) {
                        const e = g(t.placement);
                        return e === A || "y" === e
                      }
                      return !0
                    })).map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : j[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = c
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
        pt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: l,
                rects: c,
                platform: s,
                elements: a
              } = e, {
                apply: f = () => {},
                ...u
              } = d(t, e), y = await S(e, u), h = p(l), w = m(l), b = "y" === g(l), {
                width: x,
                height: v
              } = c.floating;
              let T, R;
              "top" === h || "bottom" === h ? (T = h, R = w === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (R = h, T = "end" === w ? "top" : "bottom");
              const E = v - y.top - y.bottom,
                L = x - y.left - y.right,
                A = r(v - y[T], E),
                D = r(x - y[R], L),
                O = !e.middlewareData.shift;
              let P = A,
                $ = D;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && ($ = L), null != (o = e.middlewareData.shift) && o.enabled.y && (P = E), O && !w) {
                const t = i(y.left, 0),
                  e = i(y.right, 0),
                  n = i(y.top, 0),
                  o = i(y.bottom, 0);
                b ? $ = x - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : P = v - 2 * (0 !== n || 0 !== o ? n + o : i(y.top, y.bottom))
              }
              await f({
                ...e,
                availableWidth: $,
                availableHeight: P
              });
              const C = await s.getDimensions(a.floating);
              return x !== C.width || v !== C.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        mt = function(t) {
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
                  const t = E(await S(e, {
                    ...r,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: L(t)
                    }
                  }
                }
                case "escaped": {
                  const t = E(await S(e, {
                    ...r,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: L(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        yt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: l,
              platform: c,
              elements: s,
              middlewareData: a
            } = e, {
              element: f,
              padding: p = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const y = v(p),
              g = {
                x: n,
                y: o
              },
              b = w(i),
              x = h(b),
              T = await c.getDimensions(f),
              R = "y" === b,
              S = R ? "top" : "left",
              E = R ? "bottom" : "right",
              L = R ? "clientHeight" : "clientWidth",
              A = l.reference[x] + l.reference[b] - g[b] - l.floating[x],
              D = g[b] - l.reference[b],
              O = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(f));
            let P = O ? O[L] : 0;
            P && await (null == c.isElement ? void 0 : c.isElement(O)) || (P = s.floating[L] || l.floating[x]);
            const $ = A / 2 - D / 2,
              C = P / 2 - T[x] / 2 - 1,
              k = r(y[S], C),
              M = r(y[E], C),
              _ = k,
              F = P - T[x] - M,
              H = P / 2 - T[x] / 2 + $,
              j = u(_, H, F),
              B = !a.arrow && null != m(i) && H !== j && l.reference[x] / 2 - (H < _ ? k : M) - T[x] / 2 < 0,
              N = B ? H < _ ? H - _ : H - F : 0;
            return {
              [b]: g[b] + N,
              data: {
                [b]: j,
                centerOffset: H - j - N,
                ...B && {
                  alignmentOffset: N
                }
              },
              reset: B
            }
          }
        }),
        ht = function(t) {
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
                offset: c = 0,
                mainAxis: s = !0,
                crossAxis: a = !0
              } = d(t, e), f = {
                x: n,
                y: o
              }, u = g(r), m = y(u);
              let h = f[m],
                w = f[u];
              const b = d(c, e),
                x = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (s) {
                const t = "y" === m ? "height" : "width",
                  e = i.reference[m] - i.floating[t] + x.mainAxis,
                  n = i.reference[m] + i.reference[t] - x.mainAxis;
                h < e ? h = e : h > n && (h = n)
              }
              if (a) {
                var v, T;
                const t = "y" === m ? "width" : "height",
                  e = ["top", "left"].includes(p(r)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (v = l.offset) ? void 0 : v[u]) || 0) + (e ? 0 : x.crossAxis),
                  o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (T = l.offset) ? void 0 : T[u]) || 0) - (e ? x.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [m]: h,
                [u]: w
              }
            }
          }
        },
        gt = (t, e, n) => {
          const o = new Map,
            r = {
              platform: ct,
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
            } = n, c = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let a = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = R(a, o, s),
              d = o,
              p = {},
              m = 0;
            for (let n = 0; n < c.length; n++) {
              const {
                name: i,
                fn: y
              } = c[n], {
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
                rects: a,
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
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (a = !0 === b.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = R(a, d, s))), n = -1)
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
      "use strict";
      t.exports = n(16859)
    }
  }
]);