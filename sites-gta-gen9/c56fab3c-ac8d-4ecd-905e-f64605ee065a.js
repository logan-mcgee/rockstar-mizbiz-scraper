try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c56fab3c-ac8d-4ecd-905e-f64605ee065a", t._sentryDebugIdIdentifier = "sentry-dbid-c56fab3c-ac8d-4ecd-905e-f64605ee065a")
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
  [2649, 3135], {
    16859: (t, e) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        a = n ? Symbol.for("react.context") : 60110,
        f = n ? Symbol.for("react.async_mode") : 60111,
        u = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        h = n ? Symbol.for("react.memo") : 60115,
        y = n ? Symbol.for("react.lazy") : 60116,
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
                case l:
                case s:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case a:
                    case d:
                    case y:
                    case h:
                    case c:
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
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = a, e.ContextProvider = c, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = y, e.Memo = h, e.Portal = r, e.Profiler = l, e.StrictMode = s, e.Suspense = p, e.isAsyncMode = function(t) {
        return T(t) || v(t) === f
      }, e.isConcurrentMode = T, e.isContextConsumer = function(t) {
        return v(t) === a
      }, e.isContextProvider = function(t) {
        return v(t) === c
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
      }, e.isForwardRef = function(t) {
        return v(t) === d
      }, e.isFragment = function(t) {
        return v(t) === i
      }, e.isLazy = function(t) {
        return v(t) === y
      }, e.isMemo = function(t) {
        return v(t) === h
      }, e.isPortal = function(t) {
        return v(t) === r
      }, e.isProfiler = function(t) {
        return v(t) === l
      }, e.isStrictMode = function(t) {
        return v(t) === s
      }, e.isSuspense = function(t) {
        return v(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === l || t === s || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === c || t.$$typeof === a || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === x || t.$$typeof === g)
      }, e.typeOf = v
    },
    25778: (t, e, n) => {
      "use strict";
      n.d(e, {
        m: () => i
      });
      var o = n(86825);
      const r = t => "dark" === t ? o.xW.dark : o.xW.light,
        i = (t, e) => [o.xW.tokens, o.xW.typography, r(t)].join(" ")
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
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        l = {};

      function c(t) {
        return o.isMemo(t) ? s : l[t.$$typeof] || r
      }
      l[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, l[o.Memo] = s;
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
          var s = f(n);
          u && (s = s.concat(u(n)));
          for (var l = c(e), h = c(n), y = 0; y < s.length; ++y) {
            var g = s[y];
            if (!(i[g] || o && o[g] || h && h[g] || l && l[g])) {
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

      function s(t) {
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
      var l, c = [],
        a = !1,
        f = -1;

      function u() {
        a && l && (a = !1, l.length ? c = l.concat(c) : f = -1, c.length && d())
      }

      function d() {
        if (!a) {
          var t = s(u);
          a = !0;
          for (var e = c.length; e;) {
            for (l = c, c = []; ++f < e;) l && l[f].run();
            f = -1, e = c.length
          }
          l = null, a = !1,
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
        c.push(new p(t, e)), 1 !== c.length || a || s(d)
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
        UE: () => Dt,
        ll: () => St,
        rD: () => Pt,
        UU: () => Lt,
        jD: () => At,
        ER: () => Ot,
        cY: () => Rt,
        BN: () => Et,
        Ej: () => kt
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        s = Math.round,
        l = Math.floor,
        c = t => ({
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

      function h(t) {
        return "x" === t ? "y" : "x"
      }

      function y(t) {
        return "y" === t ? "height" : "width"
      }
      const g = new Set(["top", "bottom"]);

      function w(t) {
        return g.has(p(t)) ? "y" : "x"
      }

      function b(t) {
        return h(w(t))
      }

      function x(t) {
        return t.replace(/start|end/g, t => f[t])
      }
      const v = ["left", "right"],
        T = ["right", "left"],
        S = ["top", "bottom"],
        R = ["bottom", "top"];

      function E(t) {
        return t.replace(/left|right|bottom|top/g, t => a[t])
      }

      function L(t) {
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

      function A(t, e, n) {
        let {
          reference: o,
          floating: r
        } = t;
        const i = w(e),
          s = b(e),
          l = y(s),
          c = p(e),
          a = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[l] / 2 - r[l] / 2;
        let h;
        switch (c) {
          case "top":
            h = {
              x: f,
              y: o.y - r.height
            };
            break;
          case "bottom":
            h = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            h = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            h = {
              x: o.x - r.width,
              y: u
            };
            break;
          default:
            h = {
              x: o.x,
              y: o.y
            }
        }
        switch (m(e)) {
          case "start":
            h[s] -= d * (n && a ? -1 : 1);
            break;
          case "end":
            h[s] += d * (n && a ? -1 : 1)
        }
        return h
      }
      async function D(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: s,
          elements: l,
          strategy: c
        } = t, {
          boundary: a = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(e, t), h = L(m), y = l[p ? "floating" === u ? "reference" : "floating" : u], g = k(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(y))) || n ? y : y.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
          boundary: a,
          rootBoundary: f,
          strategy: c
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), x = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, v = k(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: w,
          offsetParent: b,
          strategy: c
        }) : w);
        return {
          top: (g.top - v.top + h.top) / x.y,
          bottom: (v.bottom - g.bottom + h.bottom) / x.y,
          left: (g.left - v.left + h.left) / x.x,
          right: (v.right - g.right + h.right) / x.x
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

      function P(t) {
        return o.some(e => t[e] >= 0)
      }
      const C = new Set(["left", "top"]);

      function $() {
        return "undefined" != typeof window
      }

      function _(t) {
        return W(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function M(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function F(t) {
        var e;
        return null == (e = (W(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function W(t) {
        return !!$() && (t instanceof Node || t instanceof M(t).Node)
      }

      function H(t) {
        return !!$() && (t instanceof Element || t instanceof M(t).Element)
      }

      function j(t) {
        return !!$() && (t instanceof HTMLElement || t instanceof M(t).HTMLElement)
      }

      function B(t) {
        return !(!$() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof M(t).ShadowRoot)
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
        return V.has(_(t))
      }
      const U = [":popover-open", ":modal"];

      function Y(t) {
        return U.some(e => {
          try {
            return t.matches(e)
          } catch (t) {
            return !1
          }
        })
      }
      const X = ["transform", "translate", "scale", "rotate", "perspective"],
        q = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        Z = ["paint", "layout", "strict", "content"];

      function G(t) {
        const e = J(),
          n = H(t) ? tt(t) : t;
        return X.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || q.some(t => (n.willChange || "").includes(t)) || Z.some(t => (n.contain || "").includes(t))
      }

      function J() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const K = new Set(["html", "body", "#document"]);

      function Q(t) {
        return K.has(_(t))
      }

      function tt(t) {
        return M(t).getComputedStyle(t)
      }

      function et(t) {
        return H(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function nt(t) {
        if ("html" === _(t)) return t;
        const e = t.assignedSlot || t.parentNode || B(t) && t.host || F(t);
        return B(e) ? e.host : e
      }

      function ot(t) {
        const e = nt(t);
        return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : j(e) && z(e) ? e : ot(e)
      }

      function rt(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = ot(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          s = M(r);
        if (i) {
          const t = it(s);
          return e.concat(s, s.visualViewport || [], z(r) ? r : [], t && n ? rt(t) : [])
        }
        return e.concat(r, rt(r, [], n))
      }

      function it(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function st(t) {
        const e = tt(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = j(t),
          i = r ? t.offsetWidth : n,
          l = r ? t.offsetHeight : o,
          c = s(n) !== i || s(o) !== l;
        return c && (n = i, o = l), {
          width: n,
          height: o,
          $: c
        }
      }

      function lt(t) {
        return H(t) ? t : t.contextElement
      }

      function ct(t) {
        const e = lt(t);
        if (!j(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = st(e);
        let l = (i ? s(n.width) : n.width) / o,
          a = (i ? s(n.height) : n.height) / r;
        return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
          x: l,
          y: a
        }
      }
      const at = c(0);

      function ft(t) {
        const e = M(t);
        return J() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : at
      }

      function ut(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = lt(t);
        let s = c(1);
        e && (o ? H(o) && (s = ct(o)) : s = ct(t));
        const l = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== M(t)) && e
        }(i, n, o) ? ft(i) : c(0);
        let a = (r.left + l.x) / s.x,
          f = (r.top + l.y) / s.y,
          u = r.width / s.x,
          d = r.height / s.y;
        if (i) {
          const t = M(i),
            e = o && H(o) ? M(o) : o;
          let n = t,
            r = it(n);
          for (; r && o && e !== n;) {
            const t = ct(r),
              e = r.getBoundingClientRect(),
              o = tt(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              s = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            a *= t.x, f *= t.y, u *= t.x, d *= t.y, a += i, f += s, n = M(r), r = it(n)
          }
        }
        return k({
          width: u,
          height: d,
          x: a,
          y: f
        })
      }

      function dt(t, e) {
        const n = et(t).scrollLeft;
        return e ? e.left + n : ut(F(t)).left + n
      }

      function pt(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - dt(t, n),
          y: n.top + e.scrollTop
        }
      }
      const mt = new Set(["absolute", "fixed"]);

      function ht(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = M(t),
            o = F(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            s = o.clientHeight,
            l = 0,
            c = 0;
          if (r) {
            i = r.width, s = r.height;
            const t = J();
            (!t || t && "fixed" === e) && (l = r.offsetLeft, c = r.offsetTop)
          }
          const a = dt(o);
          if (a <= 0) {
            const t = o.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              r = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              s = Math.abs(o.clientWidth - e.clientWidth - r);
            s <= 25 && (i -= s)
          } else a <= 25 && (i += a);
          return {
            width: i,
            height: s,
            x: l,
            y: c
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = F(t),
            n = et(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            s = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let l = -n.scrollLeft + dt(t);
          const c = -n.scrollTop;
          return "rtl" === tt(o).direction && (l += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: s,
            x: l,
            y: c
          }
        }(F(t));
        else if (H(e)) o = function(t, e) {
          const n = ut(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = j(t) ? ct(t) : c(1);
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
        return k(o)
      }

      function yt(t, e) {
        const n = nt(t);
        return !(n === e || !H(n) || Q(n)) && ("fixed" === tt(n).position || yt(n, e))
      }

      function gt(t, e, n) {
        const o = j(e),
          r = F(e),
          i = "fixed" === n,
          s = ut(t, !0, i, e);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = c(0);

        function f() {
          a.x = dt(r)
        }
        if (o || !o && !i)
          if (("body" !== _(e) || z(r)) && (l = et(e)), o) {
            const t = ut(e, !0, i, e);
            a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
          } else r && f();
        i && !o && r && f();
        const u = !r || o || i ? c(0) : pt(r, l);
        return {
          x: s.left + l.scrollLeft - a.x - u.x,
          y: s.top + l.scrollTop - a.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function wt(t) {
        return "static" === tt(t).position
      }

      function bt(t, e) {
        if (!j(t) || "fixed" === tt(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return F(t) === n && (n = n.ownerDocument.body), n
      }

      function xt(t, e) {
        const n = M(t);
        if (Y(t)) return n;
        if (!j(t)) {
          let e = nt(t);
          for (; e && !Q(e);) {
            if (H(e) && !wt(e)) return e;
            e = nt(e)
          }
          return n
        }
        let o = bt(t, e);
        for (; o && I(o) && wt(o);) o = bt(o, e);
        return o && Q(o) && wt(o) && !G(o) ? n : o || function(t) {
          let e = nt(t);
          for (; j(e) && !Q(e);) {
            if (G(e)) return e;
            if (Y(e)) return null;
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
            s = F(o),
            l = !!e && Y(e.floating);
          if (o === s || l && i) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = j(o);
          if ((d || !d && !i) && (("body" !== _(o) || z(s)) && (a = et(o)), j(o))) {
            const t = ut(o);
            f = ct(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !s || d || i ? c(0) : pt(s, a);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - a.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - a.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: F,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: s
          } = t;
          const l = [..."clippingAncestors" === n ? Y(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = rt(t, [], !1).filter(t => H(t) && "body" !== _(t)),
                r = null;
              const i = "fixed" === tt(t).position;
              let s = i ? nt(t) : t;
              for (; H(s) && !Q(s);) {
                const e = tt(s),
                  n = G(s);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && mt.has(r.position) || z(s) && !n && yt(t, s)) ? o = o.filter(t => t !== s) : r = e, s = nt(s)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            c = l[0],
            a = l.reduce((t, n) => {
              const o = ht(e, n, s);
              return t.top = i(o.top, t.top), t.right = r(o.right, t.right), t.bottom = r(o.bottom, t.bottom), t.left = i(o.left, t.left), t
            }, ht(e, c, s));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
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
          } = st(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: ct,
        isElement: H,
        isRTL: function(t) {
          return "rtl" === tt(t).direction
        }
      };

      function Tt(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function St(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: s = !0,
          ancestorResize: c = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = lt(t), p = s || c ? [...d ? rt(d) : [], ...rt(e)] : [];
        p.forEach(t => {
          s && t.addEventListener("scroll", n, {
            passive: !0
          }), c && t.addEventListener("resize", n)
        });
        const m = d && f ? function(t, e) {
          let n, o = null;
          const s = F(t);

          function c() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function a(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), c();
            const d = t.getBoundingClientRect(),
              {
                left: p,
                top: m,
                width: h,
                height: y
              } = d;
            if (f || e(), !h || !y) return;
            const g = {
              rootMargin: -l(m) + "px " + -l(s.clientWidth - (p + h)) + "px " + -l(s.clientHeight - (m + y)) + "px " + -l(p) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function b(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return a();
                o ? a(!1, o) : n = setTimeout(() => {
                  a(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || Tt(d, t.getBoundingClientRect()) || a(), w = !1
            }
            try {
              o = new IntersectionObserver(b, {
                ...g,
                root: s.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(b, g)
            }
            o.observe(t)
          }(!0), c
        }(d, n) : null;
        let h, y = -1,
          g = null;
        a && (g = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === d && g && (g.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
            var t;
            null == (t = g) || t.observe(e)
          })), n()
        }), d && !u && g.observe(d), g.observe(e));
        let w = u ? ut(t) : null;
        return u && function e() {
          const o = ut(t);
          w && !Tt(w, o) && n(), w = o, h = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach(t => {
            s && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
          }), null == m || m(), null == (t = g) || t.disconnect(), g = null, u && cancelAnimationFrame(h)
        }
      }
      const Rt = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: r,
                y: i,
                placement: s,
                middlewareData: l
              } = e, c = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), s = p(n), l = m(n), c = "y" === w(n), a = C.has(s) ? -1 : 1, f = i && c ? -1 : 1, u = d(e, t);
                let {
                  mainAxis: h,
                  crossAxis: y,
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
                return l && "number" == typeof g && (y = "end" === l ? -1 * g : g), c ? {
                  x: y * f,
                  y: h * a
                } : {
                  x: h * a,
                  y: y * f
                }
              }(e, t);
              return s === (null == (n = l.offset) ? void 0 : n.placement) && null != (o = l.arrow) && o.alignmentOffset ? {} : {
                x: r + c.x,
                y: i + c.y,
                data: {
                  ...c,
                  placement: s
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
                crossAxis: s = !1,
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
                ...c
              } = d(t, e), a = {
                x: n,
                y: o
              }, f = await D(e, c), m = w(p(r)), y = h(m);
              let g = a[y],
                b = a[m];
              if (i) {
                const t = "y" === y ? "bottom" : "right";
                g = u(g + f["y" === y ? "top" : "left"], g, g - f[t])
              }
              if (s) {
                const t = "y" === m ? "bottom" : "right";
                b = u(b + f["y" === m ? "top" : "left"], b, b - f[t])
              }
              const x = l.fn({
                ...e,
                [y]: g,
                [m]: b
              });
              return {
                ...x,
                data: {
                  x: x.x - n,
                  y: x.y - o,
                  enabled: {
                    [y]: i,
                    [m]: s
                  }
                }
              }
            }
          }
        },
        Lt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: r,
                middlewareData: i,
                rects: s,
                initialPlacement: l,
                platform: c,
                elements: a
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: h,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: L = "none",
                flipAlignment: k = !0,
                ...A
              } = d(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const O = p(r),
                P = w(l),
                C = p(l) === l,
                $ = await (null == c.isRTL ? void 0 : c.isRTL(a.floating)),
                _ = h || (C || !k ? [E(l)] : function(t) {
                  const e = E(t);
                  return [x(t), e, x(e)]
                }(l)),
                M = "none" !== L;
              !h && M && _.push(... function(t, e, n, o) {
                const r = m(t);
                let i = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? T : v : e ? v : T;
                    case "left":
                    case "right":
                      return e ? S : R;
                    default:
                      return []
                  }
                }(p(t), "start" === n, o);
                return r && (i = i.map(t => t + "-" + r), e && (i = i.concat(i.map(x)))), i
              }(l, k, L, $));
              const F = [l, ..._],
                W = await D(e, A),
                H = [];
              let j = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && H.push(W[O]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = b(t),
                    i = y(r);
                  let s = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (s = E(s)), [s, E(s)]
                }(r, s, $);
                H.push(W[t[0]], W[t[1]])
              }
              if (j = [...j, {
                  placement: r,
                  overflows: H
                }], !H.every(t => t <= 0)) {
                var B, N;
                const t = ((null == (B = i.flip) ? void 0 : B.index) || 0) + 1,
                  e = F[t];
                if (e && ("alignment" !== u || P === w(e) || j.every(t => w(t.placement) !== P || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: j
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (N = j.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : N.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var z;
                    const t = null == (z = j.filter(t => {
                      if (M) {
                        const e = w(t.placement);
                        return e === P || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : z[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = l
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
        kt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: s,
                rects: l,
                platform: c,
                elements: a
              } = e, {
                apply: f = () => {},
                ...u
              } = d(t, e), h = await D(e, u), y = p(s), g = m(s), b = "y" === w(s), {
                width: x,
                height: v
              } = l.floating;
              let T, S;
              "top" === y || "bottom" === y ? (T = y, S = g === (await (null == c.isRTL ? void 0 : c.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (S = y, T = "end" === g ? "top" : "bottom");
              const R = v - h.top - h.bottom,
                E = x - h.left - h.right,
                L = r(v - h[T], R),
                k = r(x - h[S], E),
                A = !e.middlewareData.shift;
              let O = L,
                P = k;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (P = E), null != (o = e.middlewareData.shift) && o.enabled.y && (O = R), A && !g) {
                const t = i(h.left, 0),
                  e = i(h.right, 0),
                  n = i(h.top, 0),
                  o = i(h.bottom, 0);
                b ? P = x - 2 * (0 !== t || 0 !== e ? t + e : i(h.left, h.right)) : O = v - 2 * (0 !== n || 0 !== o ? n + o : i(h.top, h.bottom))
              }
              await f({
                ...e,
                availableWidth: P,
                availableHeight: O
              });
              const C = await c.getDimensions(a.floating);
              return x !== C.width || v !== C.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        At = function(t) {
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
                  const t = O(await D(e, {
                    ...r,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: P(t)
                    }
                  }
                }
                case "escaped": {
                  const t = O(await D(e, {
                    ...r,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: P(t)
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
              y: o,
              placement: i,
              rects: s,
              platform: l,
              elements: c,
              middlewareData: a
            } = e, {
              element: f,
              padding: p = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const h = L(p),
              g = {
                x: n,
                y: o
              },
              w = b(i),
              x = y(w),
              v = await l.getDimensions(f),
              T = "y" === w,
              S = T ? "top" : "left",
              R = T ? "bottom" : "right",
              E = T ? "clientHeight" : "clientWidth",
              k = s.reference[x] + s.reference[w] - g[w] - s.floating[x],
              A = g[w] - s.reference[w],
              D = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let O = D ? D[E] : 0;
            O && await (null == l.isElement ? void 0 : l.isElement(D)) || (O = c.floating[E] || s.floating[x]);
            const P = k / 2 - A / 2,
              C = O / 2 - v[x] / 2 - 1,
              $ = r(h[S], C),
              _ = r(h[R], C),
              M = $,
              F = O - v[x] - _,
              W = O / 2 - v[x] / 2 + P,
              H = u(M, W, F),
              j = !a.arrow && null != m(i) && W !== H && s.reference[x] / 2 - (W < M ? $ : _) - v[x] / 2 < 0,
              B = j ? W < M ? W - M : W - F : 0;
            return {
              [w]: g[w] + B,
              data: {
                [w]: H,
                centerOffset: W - H - B,
                ...j && {
                  alignmentOffset: B
                }
              },
              reset: j
            }
          }
        }),
        Ot = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: n,
                y: o,
                placement: r,
                rects: i,
                middlewareData: s
              } = e, {
                offset: l = 0,
                mainAxis: c = !0,
                crossAxis: a = !0
              } = d(t, e), f = {
                x: n,
                y: o
              }, u = w(r), m = h(u);
              let y = f[m],
                g = f[u];
              const b = d(l, e),
                x = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (c) {
                const t = "y" === m ? "height" : "width",
                  e = i.reference[m] - i.floating[t] + x.mainAxis,
                  n = i.reference[m] + i.reference[t] - x.mainAxis;
                y < e ? y = e : y > n && (y = n)
              }
              if (a) {
                var v, T;
                const t = "y" === m ? "width" : "height",
                  e = C.has(p(r)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (v = s.offset) ? void 0 : v[u]) || 0) + (e ? 0 : x.crossAxis),
                  o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (T = s.offset) ? void 0 : T[u]) || 0) - (e ? x.crossAxis : 0);
                g < n ? g = n : g > o && (g = o)
              }
              return {
                [m]: y,
                [u]: g
              }
            }
          }
        },
        Pt = (t, e, n) => {
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
              platform: s
            } = n, l = i.filter(Boolean), c = await (null == s.isRTL ? void 0 : s.isRTL(e));
            let a = await s.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = A(a, o, c),
              d = o,
              p = {},
              m = 0;
            for (let n = 0; n < l.length; n++) {
              const {
                name: i,
                fn: h
              } = l[n], {
                x: y,
                y: g,
                data: w,
                reset: b
              } = await h({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: p,
                rects: a,
                platform: s,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != y ? y : f, u = null != g ? g : u, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...w
                }
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (a = !0 === b.rects ? await s.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = A(a, d, c))), n = -1)
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
    86825: (t, e, n) => {
      "use strict";
      n.d(e, {
        nz: () => o,
        wj: () => r,
        xW: () => i,
        HZ: () => s,
        X6: () => l,
        yU: () => c
      });
      var o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        r = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        i = {
          dark: "foundry_nu8bkp6",
          light: "foundry_nu8bkp5",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        s = "--foundry-platform-scales-ratio-65afb887",
        l = "foundry_nu8bkp4",
        c = "foundry_nu8bkp3"
    },
    88335: (t, e, n) => {
      "use strict";
      t.exports = n(16859)
    }
  }
]);