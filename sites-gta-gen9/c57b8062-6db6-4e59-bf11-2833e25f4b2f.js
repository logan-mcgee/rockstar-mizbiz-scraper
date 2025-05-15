! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c57b8062-6db6-4e59-bf11-2833e25f4b2f", t._sentryDebugIdIdentifier = "sentry-dbid-c57b8062-6db6-4e59-bf11-2833e25f4b2f")
  } catch (t) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1145], {
    9862: (t, e, n) => {
      t.exports = n(52522)
    },
    19683: (t, e, n) => {
      n.d(e, {
        C: () => a,
        f: () => l
      });
      var o = n(23514);

      function r(t) {
        return t
      }

      function i(t, e) {
        void 0 === e && (e = r);
        var n = [],
          o = !1;
        return {
          read: function() {
            if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : t
          },
          useMedium: function(t) {
            var r = e(t, o);
            return n.push(r),
              function() {
                n = n.filter((function(t) {
                  return t !== r
                }))
              }
          },
          assignSyncMedium: function(t) {
            for (o = !0; n.length;) {
              var e = n;
              n = [], e.forEach(t)
            }
            n = {
              push: function(e) {
                return t(e)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(t) {
            o = !0;
            var e = [];
            if (n.length) {
              var r = n;
              n = [], r.forEach(t), e = n
            }
            var i = function() {
                var n = e;
                e = [], n.forEach(t)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), n = {
              push: function(t) {
                e.push(t), a()
              },
              filter: function(t) {
                return e = e.filter(t), n
              }
            }
          }
        }
      }

      function a(t, e) {
        return void 0 === e && (e = r), i(t, e)
      }

      function l(t) {
        void 0 === t && (t = {});
        var e = i(null);
        return e.options = (0, o.__assign)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    23614: (t, e, n) => {
      n.d(e, {
        S: () => l
      });
      var o = n(62229);

      function r(t, e) {
        return "function" == typeof t ? t(e) : t && (t.current = e), t
      }
      var i = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        a = new WeakMap;

      function l(t, e) {
        var n, l, c, s = (n = e || null, l = function(e) {
          return t.forEach((function(t) {
            return r(t, e)
          }))
        }, (c = (0, o.useState)((function() {
          return {
            value: n,
            callback: l,
            facade: {
              get current() {
                return c.value
              },
              set current(t) {
                var e = c.value;
                e !== t && (c.value = t, c.callback(t, e))
              }
            }
          }
        }))[0]).callback = l, c.facade);
        return i((function() {
          var e = a.get(s);
          if (e) {
            var n = new Set(e),
              o = new Set(t),
              i = s.current;
            n.forEach((function(t) {
              o.has(t) || r(t, null)
            })), o.forEach((function(t) {
              n.has(t) || r(t, i)
            }))
          }
          a.set(s, t)
        }), [t]), s
      }
    },
    30109: (t, e, n) => {
      n.d(e, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => s
      });
      var o = n(23135),
        r = n(25854),
        i = n(62229),
        a = (n(33804), ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((t, e) => {
          const n = (0, o.TL)(`Primitive.${e}`),
            a = i.forwardRef(((t, o) => {
              const {
                asChild: i,
                ...a
              } = t, l = i ? n : e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(l, {
                ...a,
                ref: o
              })
            }));
          return a.displayName = `Primitive.${e}`, {
            ...t,
            [e]: a
          }
        }), {})),
        l = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        c = i.forwardRef(((t, e) => (0, r.jsx)(a.span, {
          ...t,
          ref: e,
          style: {
            ...l,
            ...t.style
          }
        })));
      c.displayName = "VisuallyHidden";
      const s = ({
        enabled: t = !0,
        ...e
      }) => {
        const n = t ? c : i.Fragment;
        return (0, r.jsx)(n, {
          ...e
        })
      }
    },
    38763: (t, e, n) => {
      n.d(e, {
        X3: () => o.X,
        AK: () => b,
        bZ: () => u,
        v6: () => c
      });
      var o = n(67915),
        r = n(68879);
      const i = new Map;

      function a(t, e) {
        if (t === e) return t;
        const n = i.get(t);
        if (n) return n.forEach((t => t(e))), e;
        const o = i.get(e);
        return o ? (o.forEach((e => e(t))), t) : e
      }

      function l(...t) {
        return (...e) => {
          for (const n of t) "function" == typeof n && n(...e)
        }
      }

      function c(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              i = o[t];
            "function" == typeof n && "function" == typeof i && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = l(n, i) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof i ? "id" === t && n && i ? e.id = a(n, i) : e[t] = void 0 !== i ? i : n : e[t] = (0, r.A)(n, i)
          }
        }
        return e
      }
      const s = /^(on.*)$/,
        f = /^(onPress.*)$/;

      function u(t, {
        onPress: e
      } = {
        onPress: !0
      }) {
        const n = {},
          o = {};
        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (f.test(r) ? e ? n[r] = t[r] : o[r] = t[r] : s.test(r) ? n[r] = t[r] : o[r] = t[r]);
        return {
          events: n,
          others: o
        }
      }
      var d;

      function p(t) {
        return t
      }
      n(40323), n(5117), n(74534), n(66573), n(11666), n(96810), n(1571),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(d || (d = {})), Symbol.toStringTag;
      const {
        cbrt: m,
        sqrt: y,
        PI: h
      } = Math, g = (t, e, n, o, r) => {
        const i = e + n * t,
          a = i ** 2 + o;
        if (a > 0) {
          const t = y(a);
          return m(i + t) + m(i - t) - r
        }
        const l = m(y(i * i - a)),
          c = i ? Math.atan(y(-a) / i) : -h / 2;
        let s;
        return s = n < 0 ? (i > 0 ? 2 * h : h) - c : r < 0 ? (i > 0 ? 2 * h : -3 * h) + c : (i > 0 ? 0 : h) + c, 2 * l * Math.cos(s / 3) - r
      }, w = (t, e, n, o) => ((e * t + 3 * n) * t + o) * t;

      function b(t, e, n, o) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (t === e && n === o) return p;
        const r = 6 * (3 * t - 3 * n + 1),
          i = 6 * (n - 2 * t),
          a = 3 * t,
          l = r * r,
          c = i * i,
          s = i / r,
          f = 3 * i * a / l - c * i / (l * r),
          u = 2 * a / r - c / l,
          d = u * u * u,
          m = 3 / r,
          y = 3 * e - 3 * o + 1,
          h = o - 2 * e,
          b = 3 * e,
          v = r ? g : p;
        return t => 0 === t || 1 === t ? t : w(v(t, f, m, d, s), y, h, b)
      }
    },
    52522: (t, e) => {
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
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
        v = n ? Symbol.for("react.scope") : 60119;

      function x(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch (t = t.type) {
                case f:
                case u:
                case i:
                case l:
                case a:
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
        return x(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = s, e.ContextProvider = c, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = y, e.Portal = r, e.Profiler = l, e.StrictMode = a, e.Suspense = p, e.isAsyncMode = function(t) {
        return S(t) || x(t) === f
      }, e.isConcurrentMode = S, e.isContextConsumer = function(t) {
        return x(t) === s
      }, e.isContextProvider = function(t) {
        return x(t) === c
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
      }, e.isForwardRef = function(t) {
        return x(t) === d
      }, e.isFragment = function(t) {
        return x(t) === i
      }, e.isLazy = function(t) {
        return x(t) === h
      }, e.isMemo = function(t) {
        return x(t) === y
      }, e.isPortal = function(t) {
        return x(t) === r
      }, e.isProfiler = function(t) {
        return x(t) === l
      }, e.isStrictMode = function(t) {
        return x(t) === a
      }, e.isSuspense = function(t) {
        return x(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === l || t === a || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === c || t.$$typeof === s || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === v || t.$$typeof === g)
      }, e.typeOf = x
    },
    63735: (t, e, n) => {
      n.d(e, {
        UE: () => yt,
        ll: () => st,
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
        a = Math.round,
        l = Math.floor,
        c = t => ({
          x: t,
          y: t
        }),
        s = {
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

      function v(t) {
        return t.replace(/left|right|bottom|top/g, (t => s[t]))
      }

      function x(t) {
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

      function S(t) {
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
        const i = g(e),
          a = w(e),
          l = h(a),
          c = p(e),
          s = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[l] / 2 - r[l] / 2;
        let y;
        switch (c) {
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
            y[a] -= d * (n && s ? -1 : 1);
            break;
          case "end":
            y[a] += d * (n && s ? -1 : 1)
        }
        return y
      }
      async function R(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: a,
          elements: l,
          strategy: c
        } = t, {
          boundary: s = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(e, t), y = x(m), h = l[p ? "floating" === u ? "reference" : "floating" : u], g = S(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
          boundary: s,
          rootBoundary: f,
          strategy: c
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), v = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, E = S(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: w,
          offsetParent: b,
          strategy: c
        }) : w);
        return {
          top: (g.top - E.top + y.top) / v.y,
          bottom: (E.bottom - g.bottom + y.bottom) / v.y,
          left: (g.left - E.left + y.left) / v.x,
          right: (E.right - g.right + y.right) / v.x
        }
      }

      function T(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function M(t) {
        return o.some((e => t[e] >= 0))
      }

      function A() {
        return "undefined" != typeof window
      }

      function P(t) {
        return O(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function L(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function D(t) {
        var e;
        return null == (e = (O(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function O(t) {
        return !!A() && (t instanceof Node || t instanceof L(t).Node)
      }

      function $(t) {
        return !!A() && (t instanceof Element || t instanceof L(t).Element)
      }

      function _(t) {
        return !!A() && (t instanceof HTMLElement || t instanceof L(t).HTMLElement)
      }

      function C(t) {
        return !(!A() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof L(t).ShadowRoot)
      }

      function k(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = W(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r)
      }

      function F(t) {
        return ["table", "td", "th"].includes(P(t))
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

      function N(t) {
        const e = H(),
          n = $(t) ? W(t) : t;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((t => !!n[t] && "none" !== n[t])) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function H() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function B(t) {
        return ["html", "body", "#document"].includes(P(t))
      }

      function W(t) {
        return L(t).getComputedStyle(t)
      }

      function V(t) {
        return $(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function z(t) {
        if ("html" === P(t)) return t;
        const e = t.assignedSlot || t.parentNode || C(t) && t.host || D(t);
        return C(e) ? e.host : e
      }

      function I(t) {
        const e = z(t);
        return B(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : _(e) && k(e) ? e : I(e)
      }

      function G(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = I(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          a = L(r);
        if (i) {
          const t = X(a);
          return e.concat(a, a.visualViewport || [], k(r) ? r : [], t && n ? G(t) : [])
        }
        return e.concat(r, G(r, [], n))
      }

      function X(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function U(t) {
        const e = W(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = _(t),
          i = r ? t.offsetWidth : n,
          l = r ? t.offsetHeight : o,
          c = a(n) !== i || a(o) !== l;
        return c && (n = i, o = l), {
          width: n,
          height: o,
          $: c
        }
      }

      function Y(t) {
        return $(t) ? t : t.contextElement
      }

      function q(t) {
        const e = Y(t);
        if (!_(e)) return c(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = U(e);
        let l = (i ? a(n.width) : n.width) / o,
          s = (i ? a(n.height) : n.height) / r;
        return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
          x: l,
          y: s
        }
      }
      const K = c(0);

      function Z(t) {
        const e = L(t);
        return H() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : K
      }

      function J(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = Y(t);
        let a = c(1);
        e && (o ? $(o) && (a = q(o)) : a = q(t));
        const l = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== L(t)) && e
        }(i, n, o) ? Z(i) : c(0);
        let s = (r.left + l.x) / a.x,
          f = (r.top + l.y) / a.y,
          u = r.width / a.x,
          d = r.height / a.y;
        if (i) {
          const t = L(i),
            e = o && $(o) ? L(o) : o;
          let n = t,
            r = X(n);
          for (; r && o && e !== n;) {
            const t = q(r),
              e = r.getBoundingClientRect(),
              o = W(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              a = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += a, n = L(r), r = X(n)
          }
        }
        return S({
          width: u,
          height: d,
          x: s,
          y: f
        })
      }

      function Q(t, e) {
        const n = V(t).scrollLeft;
        return e ? e.left + n : J(D(t)).left + n
      }

      function tt(t, e, n) {
        void 0 === n && (n = !1);
        const o = t.getBoundingClientRect();
        return {
          x: o.left + e.scrollLeft - (n ? 0 : Q(t, o)),
          y: o.top + e.scrollTop
        }
      }

      function et(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = L(t),
            o = D(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            a = o.clientHeight,
            l = 0,
            c = 0;
          if (r) {
            i = r.width, a = r.height;
            const t = H();
            (!t || t && "fixed" === e) && (l = r.offsetLeft, c = r.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: l,
            y: c
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = D(t),
            n = V(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            a = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let l = -n.scrollLeft + Q(t);
          const c = -n.scrollTop;
          return "rtl" === W(o).direction && (l += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: a,
            x: l,
            y: c
          }
        }(D(t));
        else if ($(e)) o = function(t, e) {
          const n = J(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = _(t) ? q(t) : c(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = Z(t);
          o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return S(o)
      }

      function nt(t, e) {
        const n = z(t);
        return !(n === e || !$(n) || B(n)) && ("fixed" === W(n).position || nt(n, e))
      }

      function ot(t, e, n) {
        const o = _(e),
          r = D(e),
          i = "fixed" === n,
          a = J(t, !0, i, e);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = c(0);
        if (o || !o && !i)
          if (("body" !== P(e) || k(r)) && (l = V(e)), o) {
            const t = J(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else r && (s.x = Q(r));
        const f = !r || o || i ? c(0) : tt(r, l);
        return {
          x: a.left + l.scrollLeft - s.x - f.x,
          y: a.top + l.scrollTop - s.y - f.y,
          width: a.width,
          height: a.height
        }
      }

      function rt(t) {
        return "static" === W(t).position
      }

      function it(t, e) {
        if (!_(t) || "fixed" === W(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return D(t) === n && (n = n.ownerDocument.body), n
      }

      function at(t, e) {
        const n = L(t);
        if (j(t)) return n;
        if (!_(t)) {
          let e = z(t);
          for (; e && !B(e);) {
            if ($(e) && !rt(e)) return e;
            e = z(e)
          }
          return n
        }
        let o = it(t, e);
        for (; o && F(o) && rt(o);) o = it(o, e);
        return o && B(o) && rt(o) && !N(o) ? n : o || function(t) {
          let e = z(t);
          for (; _(e) && !B(e);) {
            if (N(e)) return e;
            if (j(e)) return null;
            e = z(e)
          }
          return null
        }(t) || n
      }
      const lt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: o,
            strategy: r
          } = t;
          const i = "fixed" === r,
            a = D(o),
            l = !!e && j(e.floating);
          if (o === a || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = _(o);
          if ((d || !d && !i) && (("body" !== P(o) || k(a)) && (s = V(o)), _(o))) {
            const t = J(o);
            f = q(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !a || d || i ? c(0) : tt(a, s, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: D,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: a
          } = t;
          const l = [..."clippingAncestors" === n ? j(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = G(t, [], !1).filter((t => $(t) && "body" !== P(t))),
                r = null;
              const i = "fixed" === W(t).position;
              let a = i ? z(t) : t;
              for (; $(a) && !B(a);) {
                const e = W(a),
                  n = N(a);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || k(a) && !n && nt(t, a)) ? o = o.filter((t => t !== a)) : r = e, a = z(a)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            c = l[0],
            s = l.reduce(((t, n) => {
              const o = et(e, n, a);
              return t.top = i(o.top, t.top), t.right = r(o.right, t.right), t.bottom = r(o.bottom, t.bottom), t.left = i(o.left, t.left), t
            }), et(e, c, a));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: at,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || at,
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
          } = U(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: q,
        isElement: $,
        isRTL: function(t) {
          return "rtl" === W(t).direction
        }
      };

      function ct(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function st(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: a = !0,
          ancestorResize: c = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = Y(t), p = a || c ? [...d ? G(d) : [], ...G(e)] : [];
        p.forEach((t => {
          a && t.addEventListener("scroll", n, {
            passive: !0
          }), c && t.addEventListener("resize", n)
        }));
        const m = d && f ? function(t, e) {
          let n, o = null;
          const a = D(t);

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
              rootMargin: -l(m) + "px " + -l(a.clientWidth - (p + y)) + "px " + -l(a.clientHeight - (m + h)) + "px " + -l(p) + "px",
              threshold: i(0, r(1, u)) || 1
            };
            let w = !0;

            function b(e) {
              const o = e[0].intersectionRatio;
              if (o !== u) {
                if (!w) return s();
                o ? s(!1, o) : n = setTimeout((() => {
                  s(!1, 1e-7)
                }), 1e3)
              }
              1 !== o || ct(d, t.getBoundingClientRect()) || s(), w = !1
            }
            try {
              o = new IntersectionObserver(b, {
                ...g,
                root: a.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(b, g)
            }
            o.observe(t)
          }(!0), c
        }(d, n) : null;
        let y, h = -1,
          g = null;
        s && (g = new ResizeObserver((t => {
          let [o] = t;
          o && o.target === d && g && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
            var t;
            null == (t = g) || t.observe(e)
          }))), n()
        })), d && !u && g.observe(d), g.observe(e));
        let w = u ? J(t) : null;
        return u && function e() {
          const o = J(t);
          w && !ct(w, o) && n(), w = o, y = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach((t => {
            a && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
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
                placement: a,
                middlewareData: l
              } = e, c = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), a = p(n), l = m(n), c = "y" === g(n), s = ["left", "top"].includes(a) ? -1 : 1, f = i && c ? -1 : 1, u = d(e, t);
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
                return l && "number" == typeof w && (h = "end" === l ? -1 * w : w), c ? {
                  x: h * f,
                  y: y * s
                } : {
                  x: y * s,
                  y: h * f
                }
              }(e, t);
              return a === (null == (n = l.offset) ? void 0 : n.placement) && null != (o = l.arrow) && o.alignmentOffset ? {} : {
                x: r + c.x,
                y: i + c.y,
                data: {
                  ...c,
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
                y: o,
                placement: r
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
                ...c
              } = d(t, e), s = {
                x: n,
                y: o
              }, f = await R(e, c), m = g(p(r)), h = y(m);
              let w = s[h],
                b = s[m];
              if (i) {
                const t = "y" === h ? "bottom" : "right";
                w = u(w + f["y" === h ? "top" : "left"], w, w - f[t])
              }
              if (a) {
                const t = "y" === m ? "bottom" : "right";
                b = u(b + f["y" === m ? "top" : "left"], b, b - f[t])
              }
              const v = l.fn({
                ...e,
                [h]: w,
                [m]: b
              });
              return {
                ...v,
                data: {
                  x: v.x - n,
                  y: v.y - o,
                  enabled: {
                    [h]: i,
                    [m]: a
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
                rects: a,
                initialPlacement: l,
                platform: c,
                elements: s
              } = e, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: y,
                fallbackStrategy: x = "bestFit",
                fallbackAxisSideDirection: S = "none",
                flipAlignment: E = !0,
                ...T
              } = d(t, e);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const M = p(r),
                A = g(l),
                P = p(l) === l,
                L = await (null == c.isRTL ? void 0 : c.isRTL(s.floating)),
                D = y || (P || !E ? [v(l)] : function(t) {
                  const e = v(t);
                  return [b(t), e, b(e)]
                }(l)),
                O = "none" !== S;
              !y && O && D.push(... function(t, e, n, o) {
                const r = m(t);
                let i = function(t, e, n) {
                  const o = ["left", "right"],
                    r = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? r : o : e ? o : r;
                    case "left":
                    case "right":
                      return e ? i : a;
                    default:
                      return []
                  }
                }(p(t), "start" === n, o);
                return r && (i = i.map((t => t + "-" + r)), e && (i = i.concat(i.map(b)))), i
              }(l, E, S, L));
              const $ = [l, ...D],
                _ = await R(e, T),
                C = [];
              let k = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && C.push(_[M]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = w(t),
                    i = h(r);
                  let a = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (a = v(a)), [a, v(a)]
                }(r, a, L);
                C.push(_[t[0]], _[t[1]])
              }
              if (k = [...k, {
                  placement: r,
                  overflows: C
                }], !C.every((t => t <= 0))) {
                var F, j;
                const t = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
                  e = $[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: k
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (j = k.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : j.placement;
                if (!n) switch (x) {
                  case "bestFit": {
                    var N;
                    const t = null == (N = k.filter((t => {
                      if (O) {
                        const e = g(t.placement);
                        return e === A || "y" === e
                      }
                      return !0
                    })).map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : N[0];
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
        pt = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: a,
                rects: l,
                platform: c,
                elements: s
              } = e, {
                apply: f = () => {},
                ...u
              } = d(t, e), y = await R(e, u), h = p(a), w = m(a), b = "y" === g(a), {
                width: v,
                height: x
              } = l.floating;
              let S, E;
              "top" === h || "bottom" === h ? (S = h, E = w === (await (null == c.isRTL ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (E = h, S = "end" === w ? "top" : "bottom");
              const T = x - y.top - y.bottom,
                M = v - y.left - y.right,
                A = r(x - y[S], T),
                P = r(v - y[E], M),
                L = !e.middlewareData.shift;
              let D = A,
                O = P;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && (O = M), null != (o = e.middlewareData.shift) && o.enabled.y && (D = T), L && !w) {
                const t = i(y.left, 0),
                  e = i(y.right, 0),
                  n = i(y.top, 0),
                  o = i(y.bottom, 0);
                b ? O = v - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : D = x - 2 * (0 !== n || 0 !== o ? n + o : i(y.top, y.bottom))
              }
              await f({
                ...e,
                availableWidth: O,
                availableHeight: D
              });
              const $ = await c.getDimensions(s.floating);
              return v !== $.width || x !== $.height ? {
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
                  const t = T(await R(e, {
                    ...r,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: M(t)
                    }
                  }
                }
                case "escaped": {
                  const t = T(await R(e, {
                    ...r,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: M(t)
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
              rects: a,
              platform: l,
              elements: c,
              middlewareData: s
            } = e, {
              element: f,
              padding: p = 0
            } = d(t, e) || {};
            if (null == f) return {};
            const y = x(p),
              g = {
                x: n,
                y: o
              },
              b = w(i),
              v = h(b),
              S = await l.getDimensions(f),
              E = "y" === b,
              R = E ? "top" : "left",
              T = E ? "bottom" : "right",
              M = E ? "clientHeight" : "clientWidth",
              A = a.reference[v] + a.reference[b] - g[b] - a.floating[v],
              P = g[b] - a.reference[b],
              L = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let D = L ? L[M] : 0;
            D && await (null == l.isElement ? void 0 : l.isElement(L)) || (D = c.floating[M] || a.floating[v]);
            const O = A / 2 - P / 2,
              $ = D / 2 - S[v] / 2 - 1,
              _ = r(y[R], $),
              C = r(y[T], $),
              k = _,
              F = D - S[v] - C,
              j = D / 2 - S[v] / 2 + O,
              N = u(k, j, F),
              H = !s.arrow && null != m(i) && j !== N && a.reference[v] / 2 - (j < k ? _ : C) - S[v] / 2 < 0,
              B = H ? j < k ? j - k : j - F : 0;
            return {
              [b]: g[b] + B,
              data: {
                [b]: N,
                centerOffset: j - N - B,
                ...H && {
                  alignmentOffset: B
                }
              },
              reset: H
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
                middlewareData: a
              } = e, {
                offset: l = 0,
                mainAxis: c = !0,
                crossAxis: s = !0
              } = d(t, e), f = {
                x: n,
                y: o
              }, u = g(r), m = y(u);
              let h = f[m],
                w = f[u];
              const b = d(l, e),
                v = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (c) {
                const t = "y" === m ? "height" : "width",
                  e = i.reference[m] - i.floating[t] + v.mainAxis,
                  n = i.reference[m] + i.reference[t] - v.mainAxis;
                h < e ? h = e : h > n && (h = n)
              }
              if (s) {
                var x, S;
                const t = "y" === m ? "width" : "height",
                  e = ["top", "left"].includes(p(r)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (x = a.offset) ? void 0 : x[u]) || 0) + (e ? 0 : v.crossAxis),
                  o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (S = a.offset) ? void 0 : S[u]) || 0) - (e ? v.crossAxis : 0);
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
              platform: lt,
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
              platform: a
            } = n, l = i.filter(Boolean), c = await (null == a.isRTL ? void 0 : a.isRTL(e));
            let s = await a.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = E(s, o, c),
              d = o,
              p = {},
              m = 0;
            for (let n = 0; n < l.length; n++) {
              const {
                name: i,
                fn: y
              } = l[n], {
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
                rects: s,
                platform: a,
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
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (s = !0 === b.rects ? await a.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = E(s, d, c))), n = -1)
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
    67332: (t, e, n) => {
      var o = n(9862),
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
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        l = {};

      function c(t) {
        return o.isMemo(t) ? a : l[t.$$typeof] || r
      }
      l[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, l[o.Memo] = a;
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
          var a = f(n);
          u && (a = a.concat(u(n)));
          for (var l = c(e), y = c(n), h = 0; h < a.length; ++h) {
            var g = a[h];
            if (!(i[g] || o && o[g] || y && y[g] || l && l[g])) {
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
    67915: (t, e, n) => {
      n.d(e, {
        X: () => o
      });
      const o = "undefined" == typeof window
    }
  }
]);