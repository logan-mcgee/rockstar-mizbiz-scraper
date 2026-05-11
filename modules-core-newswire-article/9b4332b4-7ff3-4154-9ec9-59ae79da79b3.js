try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9b4332b4-7ff3-4154-9ec9-59ae79da79b3", t._sentryDebugIdIdentifier = "sentry-dbid-9b4332b4-7ff3-4154-9ec9-59ae79da79b3")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [419], {
    35255(t, e, n) {
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
        a = {};

      function c(t) {
        return o.isMemo(t) ? l : a[t.$$typeof] || r
      }
      a[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[o.Memo] = l;
      var s = Object.defineProperty,
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
          for (var a = c(e), y = c(n), h = 0; h < l.length; ++h) {
            var g = l[h];
            if (!(i[g] || o && o[g] || y && y[g] || a && a[g])) {
              var w = d(n, g);
              try {
                s(e, g, w)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    16859(t, e) {
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        s = n ? Symbol.for("react.context") : 60110,
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
                case a:
                case l:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case s:
                    case d:
                    case h:
                    case y:
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

      function S(t) {
        return v(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = s, e.ContextProvider = c, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = y, e.Portal = r, e.Profiler = a, e.StrictMode = l, e.Suspense = p, e.isAsyncMode = function(t) {
        return S(t) || v(t) === f
      }, e.isConcurrentMode = S, e.isContextConsumer = function(t) {
        return v(t) === s
      }, e.isContextProvider = function(t) {
        return v(t) === c
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
        return v(t) === a
      }, e.isStrictMode = function(t) {
        return v(t) === l
      }, e.isSuspense = function(t) {
        return v(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === a || t === l || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === c || t.$$typeof === s || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === x || t.$$typeof === g)
      }, e.typeOf = v
    },
    88335(t, e, n) {
      t.exports = n(16859)
    },
    64728(t, e, n) {
      n.d(e, {
        UE: () => Rt,
        ll: () => gt,
        rD: () => kt,
        UU: () => xt,
        jD: () => St,
        ER: () => Tt,
        cY: () => wt,
        BN: () => bt,
        Ej: () => vt
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        l = Math.round,
        a = Math.floor,
        c = t => ({
          x: t,
          y: t
        }),
        s = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function f(t, e, n) {
        return i(t, r(e, n))
      }

      function u(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function d(t) {
        return t.split("-")[0]
      }

      function p(t) {
        return t.split("-")[1]
      }

      function m(t) {
        return "x" === t ? "y" : "x"
      }

      function y(t) {
        return "y" === t ? "height" : "width"
      }

      function h(t) {
        const e = t[0];
        return "t" === e || "b" === e ? "y" : "x"
      }

      function g(t) {
        return m(h(t))
      }

      function w(t) {
        return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
      }
      const b = ["left", "right"],
        x = ["right", "left"],
        v = ["top", "bottom"],
        S = ["bottom", "top"];

      function R(t) {
        const e = d(t);
        return s[e] + t.slice(e.length)
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

      function E(t, e, n) {
        let {
          reference: o,
          floating: r
        } = t;
        const i = h(e),
          l = g(e),
          a = y(l),
          c = d(e),
          s = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          m = o[a] / 2 - r[a] / 2;
        let w;
        switch (c) {
          case "top":
            w = {
              x: f,
              y: o.y - r.height
            };
            break;
          case "bottom":
            w = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            w = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            w = {
              x: o.x - r.width,
              y: u
            };
            break;
          default:
            w = {
              x: o.x,
              y: o.y
            }
        }
        switch (p(e)) {
          case "start":
            w[l] -= m * (n && s ? -1 : 1);
            break;
          case "end":
            w[l] += m * (n && s ? -1 : 1)
        }
        return w
      }
      async function O(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: l,
          elements: a,
          strategy: c
        } = t, {
          boundary: s = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = u(e, t), y = T(m), h = a[p ? "floating" === d ? "reference" : "floating" : d], g = k(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: s,
          rootBoundary: f,
          strategy: c
        })), w = "floating" === d ? {
          x: o,
          y: r,
          width: l.floating.width,
          height: l.floating.height
        } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), x = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, v = k(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: w,
          offsetParent: b,
          strategy: c
        }) : w);
        return {
          top: (g.top - v.top + y.top) / x.y,
          bottom: (v.bottom - g.bottom + y.bottom) / x.y,
          left: (g.left - v.left + y.left) / x.x,
          right: (v.right - g.right + y.right) / x.x
        }
      }

      function L(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function A(t) {
        return o.some(e => t[e] >= 0)
      }
      const D = new Set(["left", "top"]);

      function $() {
        return "undefined" != typeof window
      }

      function _(t) {
        return M(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function P(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function C(t) {
        var e;
        return null == (e = (M(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function M(t) {
        return !!$() && (t instanceof Node || t instanceof P(t).Node)
      }

      function F(t) {
        return !!$() && (t instanceof Element || t instanceof P(t).Element)
      }

      function W(t) {
        return !!$() && (t instanceof HTMLElement || t instanceof P(t).HTMLElement)
      }

      function H(t) {
        return !(!$() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof P(t).ShadowRoot)
      }

      function j(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = Z(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== r && "contents" !== r
      }

      function N(t) {
        return /^(table|td|th)$/.test(_(t))
      }

      function B(t) {
        try {
          if (t.matches(":popover-open")) return !0
        } catch (t) {}
        try {
          return t.matches(":modal")
        } catch (t) {
          return !1
        }
      }
      const z = /transform|translate|scale|rotate|perspective|filter/,
        V = /paint|layout|strict|content/,
        I = t => !!t && "none" !== t;
      let U;

      function Y(t) {
        const e = F(t) ? Z(t) : t;
        return I(e.transform) || I(e.translate) || I(e.scale) || I(e.rotate) || I(e.perspective) || !X() && (I(e.backdropFilter) || I(e.filter)) || z.test(e.willChange || "") || V.test(e.contain || "")
      }

      function X() {
        return null == U && (U = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), U
      }

      function q(t) {
        return /^(html|body|#document)$/.test(_(t))
      }

      function Z(t) {
        return P(t).getComputedStyle(t)
      }

      function G(t) {
        return F(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function J(t) {
        if ("html" === _(t)) return t;
        const e = t.assignedSlot || t.parentNode || H(t) && t.host || C(t);
        return H(e) ? e.host : e
      }

      function K(t) {
        const e = J(t);
        return q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : W(e) && j(e) ? e : K(e)
      }

      function Q(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = K(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = P(r);
        if (i) {
          const t = tt(l);
          return e.concat(l, l.visualViewport || [], j(r) ? r : [], t && n ? Q(t) : [])
        }
        return e.concat(r, Q(r, [], n))
      }

      function tt(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function et(t) {
        const e = Z(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = W(t),
          i = r ? t.offsetWidth : n,
          a = r ? t.offsetHeight : o,
          c = l(n) !== i || l(o) !== a;
        return c && (n = i, o = a), {
          width: n,
          height: o,
          $: c
        }
      }

      function nt(t) {
        return F(t) ? t : t.contextElement
      }

      function ot(t) {
        const e = nt(t);
        if (!W(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = et(e);
        let a = (i ? l(n.width) : n.width) / o,
          s = (i ? l(n.height) : n.height) / r;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const rt = c(0);

      function it(t) {
        const e = P(t);
        return X() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : rt
      }

      function lt(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = nt(t);
        let l = c(1);
        e && (o ? F(o) && (l = ot(o)) : l = ot(t));
        const a = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== P(t)) && e
        }(i, n, o) ? it(i) : c(0);
        let s = (r.left + a.x) / l.x,
          f = (r.top + a.y) / l.y,
          u = r.width / l.x,
          d = r.height / l.y;
        if (i) {
          const t = P(i),
            e = o && F(o) ? P(o) : o;
          let n = t,
            r = tt(n);
          for (; r && o && e !== n;) {
            const t = ot(r),
              e = r.getBoundingClientRect(),
              o = Z(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += l, n = P(r), r = tt(n)
          }
        }
        return k({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function at(t, e) {
        const n = G(t).scrollLeft;
        return e ? e.left + n : lt(C(t)).left + n
      }

      function ct(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - at(t, n),
          y: n.top + e.scrollTop
        }
      }

      function st(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = P(t),
            o = C(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            l = o.clientHeight,
            a = 0,
            c = 0;
          if (r) {
            i = r.width, l = r.height;
            const t = X();
            (!t || t && "fixed" === e) && (a = r.offsetLeft, c = r.offsetTop)
          }
          const s = at(o);
          if (s <= 0) {
            const t = o.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              r = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              l = Math.abs(o.clientWidth - e.clientWidth - r);
            l <= 25 && (i -= l)
          } else s <= 25 && (i += s);
          return {
            width: i,
            height: l,
            x: a,
            y: c
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = C(t),
            n = G(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let a = -n.scrollLeft + at(t);
          const c = -n.scrollTop;
          return "rtl" === Z(o).direction && (a += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: l,
            x: a,
            y: c
          }
        }(C(t));
        else if (F(e)) o = function(t, e) {
          const n = lt(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = W(t) ? ot(t) : c(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = it(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return k(o)
      }

      function ft(t, e) {
        const n = J(t);
        return !(n === e || !F(n) || q(n)) && ("fixed" === Z(n).position || ft(n, e))
      }

      function ut(t, e, n) {
        const o = W(e),
          r = C(e),
          i = "fixed" === n,
          l = lt(t, !0, i, e);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);

        function f() {
          s.x = at(r)
        }
        if (o || !o && !i)
          if (("body" !== _(e) || j(r)) && (a = G(e)), o) {
            const t = lt(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else r && f();
        i && !o && r && f();
        const u = !r || o || i ? c(0) : ct(r, a);
        return {
          x: l.left + a.scrollLeft - s.x - u.x,
          y: l.top + a.scrollTop - s.y - u.y,
          width: l.width,
          height: l.height
        }
      }

      function dt(t) {
        return "static" === Z(t).position
      }

      function pt(t, e) {
        if (!W(t) || "fixed" === Z(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return C(t) === n && (n = n.ownerDocument.body), n
      }

      function mt(t, e) {
        const n = P(t);
        if (B(t)) return n;
        if (!W(t)) {
          let e = J(t);
          for (; e && !q(e);) {
            if (F(e) && !dt(e)) return e;
            e = J(e)
          }
          return n
        }
        let o = pt(t, e);
        for (; o && N(o) && dt(o);) o = pt(o, e);
        return o && q(o) && dt(o) && !Y(o) ? n : o || function(t) {
          let e = J(t);
          for (; W(e) && !q(e);) {
            if (Y(e)) return e;
            if (B(e)) return null;
            e = J(e)
          }
          return null
        }(t) || n
      }
      const yt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: r
          } = t;
          const i = "fixed" === r,
            l = C(o),
            a = !!e && B(e.floating);
          if (o === l || a && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = W(o);
          if ((d || !d && !i) && (("body" !== _(o) || j(l)) && (s = G(o)), d)) {
            const t = lt(o);
            f = ot(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !l || d || i ? c(0) : ct(l, s);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: C,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: l
          } = t;
          const a = [..."clippingAncestors" === n ? B(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = Q(t, [], !1).filter(t => F(t) && "body" !== _(t)),
                r = null;
              const i = "fixed" === Z(t).position;
              let l = i ? J(t) : t;
              for (; F(l) && !q(l);) {
                const e = Z(l),
                  n = Y(l);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && ("absolute" === r.position || "fixed" === r.position) || j(l) && !n && ft(t, l)) ? o = o.filter(t => t !== l) : r = e, l = J(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            c = st(e, a[0], l);
          let s = c.top,
            f = c.right,
            u = c.bottom,
            d = c.left;
          for (let t = 1; t < a.length; t++) {
            const n = st(e, a[t], l);
            s = i(n.top, s), f = r(n.right, f), u = r(n.bottom, u), d = i(n.left, d)
          }
          return {
            width: f - d,
            height: u - s,
            x: d,
            y: s
          }
        },
        getOffsetParent: mt,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || mt,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: ut(t.reference, await e(t.floating), t.strategy),
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
          } = et(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: ot,
        isElement: F,
        isRTL: function(t) {
          return "rtl" === Z(t).direction
        }
      };

      function ht(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function gt(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: l = !0,
          ancestorResize: c = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = nt(t), p = l || c ? [...d ? Q(d) : [], ...e ? Q(e) : []] : [];
        p.forEach(t => {
          l && t.addEventListener("scroll", n, {
            passive: !0
          }), c && t.addEventListener("resize", n)
        });
        const m = d && f ? function(t, e) {
          let n, o = null;
          const l = C(t);

          function c() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function s(f, u) {
            void 0 === f && (f = !1), void 0 === u && (u = 1), c();
            const d = t.getBoundingClientRect(),
              {
                left: p,
                top: m,
                width: y,
                height: h
              } = d;
            if (f || e(), !y || !h) return;
            const g = {
              rootMargin: -a(m) + "px " + -a(l.clientWidth - (p + y)) + "px " + -a(l.clientHeight - (m + h)) + "px " + -a(p) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function b(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return s();
                o ? s(!1, o) : n = setTimeout(() => {
                  s(!1, 1e-7)
                }, 1e3)
              }
              1 !== o || ht(d, t.getBoundingClientRect()) || s(), w = !1
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
          }(!0), c
        }(d, n) : null;
        let y, h = -1,
          g = null;
        s && (g = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === d && g && e && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var t;
            null == (t = g) || t.observe(e)
          })), n()
        }), d && !u && g.observe(d), e && g.observe(e));
        let w = u ? lt(t) : null;
        return u && function e() {
          const o = lt(t);
          w && !ht(w, o) && n(), w = o, y = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach(t => {
            l && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
          }), null == m || m(), null == (t = g) || t.disconnect(), g = null, u && cancelAnimationFrame(y)
        }
      }
      const wt = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, o;
              const {
                x: r,
                y: i,
                placement: l,
                middlewareData: a
              } = e, c = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = d(n), a = p(n), c = "y" === h(n), s = D.has(l) ? -1 : 1, f = i && c ? -1 : 1, m = u(e, t);
                let {
                  mainAxis: y,
                  crossAxis: g,
                  alignmentAxis: w
                } = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: m.mainAxis || 0,
                  crossAxis: m.crossAxis || 0,
                  alignmentAxis: m.alignmentAxis
                };
                return a && "number" == typeof w && (g = "end" === a ? -1 * w : w), c ? {
                  x: g * f,
                  y: y * s
                } : {
                  x: y * s,
                  y: g * f
                }
              }(e, t);
              return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (o = a.arrow) && o.alignmentOffset ? {} : {
                x: r + c.x,
                y: i + c.y,
                data: {
                  ...c,
                  placement: l
                }
              }
            }
          }
        },
        bt = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: o,
                placement: r,
                platform: i
              } = e, {
                mainAxis: l = !0,
                crossAxis: a = !1,
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
              } = u(t, e), p = {
                x: n,
                y: o
              }, y = await i.detectOverflow(e, s), g = h(d(r)), w = m(g);
              let b = p[w],
                x = p[g];
              if (l) {
                const t = "y" === w ? "bottom" : "right";
                b = f(b + y["y" === w ? "top" : "left"], b, b - y[t])
              }
              if (a) {
                const t = "y" === g ? "bottom" : "right";
                x = f(x + y["y" === g ? "top" : "left"], x, x - y[t])
              }
              const v = c.fn({
                ...e,
                [w]: b,
                [g]: x
              });
              return {
                ...v,
                data: {
                  x: v.x - n,
                  y: v.y - o,
                  enabled: {
                    [w]: l,
                    [g]: a
                  }
                }
              }
            }
          }
        },
        xt = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: r,
                middlewareData: i,
                rects: l,
                initialPlacement: a,
                platform: c,
                elements: s
              } = e, {
                mainAxis: f = !0,
                crossAxis: m = !0,
                fallbackPlacements: T,
                fallbackStrategy: k = "bestFit",
                fallbackAxisSideDirection: E = "none",
                flipAlignment: O = !0,
                ...L
              } = u(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const A = d(r),
                D = h(a),
                $ = d(a) === a,
                _ = await (null == c.isRTL ? void 0 : c.isRTL(s.floating)),
                P = T || ($ || !O ? [R(a)] : function(t) {
                  const e = R(t);
                  return [w(t), e, w(e)]
                }(a)),
                C = "none" !== E;
              !T && C && P.push(... function(t, e, n, o) {
                const r = p(t);
                let i = function(t, e, n) {
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? x : b : e ? b : x;
                    case "left":
                    case "right":
                      return e ? v : S;
                    default:
                      return []
                  }
                }(d(t), "start" === n, o);
                return r && (i = i.map(t => t + "-" + r), e && (i = i.concat(i.map(w)))), i
              }(a, O, E, _));
              const M = [a, ...P],
                F = await c.detectOverflow(e, L),
                W = [];
              let H = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && W.push(F[A]), m) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = p(t),
                    r = g(t),
                    i = y(r);
                  let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (l = R(l)), [l, R(l)]
                }(r, l, _);
                W.push(F[t[0]], F[t[1]])
              }
              if (H = [...H, {
                  placement: r,
                  overflows: W
                }], !W.every(t => t <= 0)) {
                var j, N;
                const t = ((null == (j = i.flip) ? void 0 : j.index) || 0) + 1,
                  e = M[t];
                if (e && ("alignment" !== m || D === h(e) || H.every(t => h(t.placement) !== D || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: H
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (N = H.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : N.placement;
                if (!n) switch (k) {
                  case "bestFit": {
                    var B;
                    const t = null == (B = H.filter(t => {
                      if (C) {
                        const e = h(t.placement);
                        return e === D || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : B[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = a
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
        vt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: l,
                rects: a,
                platform: c,
                elements: s
              } = e, {
                apply: f = () => {},
                ...m
              } = u(t, e), y = await c.detectOverflow(e, m), g = d(l), w = p(l), b = "y" === h(l), {
                width: x,
                height: v
              } = a.floating;
              let S, R;
              "top" === g || "bottom" === g ? (S = g, R = w === (await (null == c.isRTL ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (R = g, S = "end" === w ? "top" : "bottom");
              const T = v - y.top - y.bottom,
                k = x - y.left - y.right,
                E = r(v - y[S], T),
                O = r(x - y[R], k),
                L = !e.middlewareData.shift;
              let A = E,
                D = O;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (D = k), null != (o = e.middlewareData.shift) && o.enabled.y && (A = T), L && !w) {
                const t = i(y.left, 0),
                  e = i(y.right, 0),
                  n = i(y.top, 0),
                  o = i(y.bottom, 0);
                b ? D = x - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : A = v - 2 * (0 !== n || 0 !== o ? n + o : i(y.top, y.bottom))
              }
              await f({
                ...e,
                availableWidth: D,
                availableHeight: A
              });
              const $ = await c.getDimensions(s.floating);
              return x !== $.width || v !== $.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        St = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n,
                platform: o
              } = e, {
                strategy: r = "referenceHidden",
                ...i
              } = u(t, e);
              switch (r) {
                case "referenceHidden": {
                  const t = L(await o.detectOverflow(e, {
                    ...i,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: A(t)
                    }
                  }
                }
                case "escaped": {
                  const t = L(await o.detectOverflow(e, {
                    ...i,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: A(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Rt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: l,
              platform: a,
              elements: c,
              middlewareData: s
            } = e, {
              element: d,
              padding: m = 0
            } = u(t, e) || {};
            if (null == d) return {};
            const h = T(m),
              w = {
                x: n,
                y: o
              },
              b = g(i),
              x = y(b),
              v = await a.getDimensions(d),
              S = "y" === b,
              R = S ? "top" : "left",
              k = S ? "bottom" : "right",
              E = S ? "clientHeight" : "clientWidth",
              O = l.reference[x] + l.reference[b] - w[b] - l.floating[x],
              L = w[b] - l.reference[b],
              A = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(d));
            let D = A ? A[E] : 0;
            D && await (null == a.isElement ? void 0 : a.isElement(A)) || (D = c.floating[E] || l.floating[x]);
            const $ = O / 2 - L / 2,
              _ = D / 2 - v[x] / 2 - 1,
              P = r(h[R], _),
              C = r(h[k], _),
              M = P,
              F = D - v[x] - C,
              W = D / 2 - v[x] / 2 + $,
              H = f(M, W, F),
              j = !s.arrow && null != p(i) && W !== H && l.reference[x] / 2 - (W < M ? P : C) - v[x] / 2 < 0,
              N = j ? W < M ? W - M : W - F : 0;
            return {
              [b]: w[b] + N,
              data: {
                [b]: H,
                centerOffset: W - H - N,
                ...j && {
                  alignmentOffset: N
                }
              },
              reset: j
            }
          }
        }),
        Tt = function(t) {
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
                offset: a = 0,
                mainAxis: c = !0,
                crossAxis: s = !0
              } = u(t, e), f = {
                x: n,
                y: o
              }, p = h(r), y = m(p);
              let g = f[y],
                w = f[p];
              const b = u(a, e),
                x = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (c) {
                const t = "y" === y ? "height" : "width",
                  e = i.reference[y] - i.floating[t] + x.mainAxis,
                  n = i.reference[y] + i.reference[t] - x.mainAxis;
                g < e ? g = e : g > n && (g = n)
              }
              if (s) {
                var v, S;
                const t = "y" === y ? "width" : "height",
                  e = D.has(d(r)),
                  n = i.reference[p] - i.floating[t] + (e && (null == (v = l.offset) ? void 0 : v[p]) || 0) + (e ? 0 : x.crossAxis),
                  o = i.reference[p] + i.reference[t] + (e ? 0 : (null == (S = l.offset) ? void 0 : S[p]) || 0) - (e ? x.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [y]: g,
                [p]: w
              }
            }
          }
        },
        kt = (t, e, n) => {
          const o = new Map,
            r = {
              platform: yt,
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
            } = n, a = l.detectOverflow ? l : {
              ...l,
              detectOverflow: O
            }, c = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let s = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = E(s, o, c),
              d = o,
              p = 0;
            const m = {};
            for (let n = 0; n < i.length; n++) {
              const y = i[n];
              if (!y) continue;
              const {
                name: h,
                fn: g
              } = y, {
                x: w,
                y: b,
                data: x,
                reset: v
              } = await g({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: m,
                rects: s,
                platform: a,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              f = null != w ? w : f, u = null != b ? b : u, m[h] = {
                ...m[h],
                ...x
              }, v && p < 50 && (p++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (s = !0 === v.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : v.rects), ({
                x: f,
                y: u
              } = E(s, d, c))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: r,
              middlewareData: m
            }
          })(t, e, {
            ...r,
            platform: i
          })
        }
    },
    86825(t, e, n) {
      n.d(e, {
        nz: () => o,
        wj: () => r,
        xW: () => i,
        Np: () => l,
        HZ: () => a,
        X6: () => c,
        yU: () => s
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
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        l = "foundry_nu8bkpb",
        a = "--foundry-platform-scales-ratio-65afb887",
        c = "foundry_nu8bkp4",
        s = "foundry_nu8bkp3"
    },
    25778(t, e, n) {
      n.d(e, {
        m: () => i
      });
      var o = n(86825);
      const r = t => "dark" === t ? o.xW.dark : o.xW.light,
        i = (t, e) => [o.xW.tokens, o.xW.typography, o.xW.grid, r(t)].join(" ")
    }
  }
]);