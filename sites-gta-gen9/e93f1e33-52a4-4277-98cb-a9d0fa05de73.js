try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e93f1e33-52a4-4277-98cb-a9d0fa05de73", t._sentryDebugIdIdentifier = "sentry-dbid-e93f1e33-52a4-4277-98cb-a9d0fa05de73")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1145], {
    9862: (t, e, n) => {
      t.exports = n(52522)
    },
    19683: (t, e, n) => {
      n.d(e, {
        C: () => c,
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
              c = function() {
                return Promise.resolve().then(i)
              };
            c(), n = {
              push: function(t) {
                e.push(t), c()
              },
              filter: function(t) {
                return e = e.filter(t), n
              }
            }
          }
        }
      }

      function c(t, e) {
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
        c = new WeakMap;

      function l(t, e) {
        var n, l, a, s = (n = e || null, l = function(e) {
          return t.forEach((function(t) {
            return r(t, e)
          }))
        }, (a = (0, o.useState)((function() {
          return {
            value: n,
            callback: l,
            facade: {
              get current() {
                return a.value
              },
              set current(t) {
                var e = a.value;
                e !== t && (a.value = t, a.callback(t, e))
              }
            }
          }
        }))[0]).callback = l, a.facade);
        return i((function() {
          var e = c.get(s);
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
          c.set(s, t)
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
        c = (n(33804), ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((t, e) => {
          const n = (0, o.TL)(`Primitive.${e}`),
            c = i.forwardRef(((t, o) => {
              const {
                asChild: i,
                ...c
              } = t, l = i ? n : e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(l, {
                ...c,
                ref: o
              })
            }));
          return c.displayName = `Primitive.${e}`, {
            ...t,
            [e]: c
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
        a = i.forwardRef(((t, e) => (0, r.jsx)(c.span, {
          ...t,
          ref: e,
          style: {
            ...l,
            ...t.style
          }
        })));
      a.displayName = "VisuallyHidden";
      const s = ({
        enabled: t = !0,
        ...e
      }) => {
        const n = t ? a : i.Fragment;
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
        v6: () => a
      });
      var o = n(67915),
        r = n(68879);
      const i = new Map;

      function c(t, e) {
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

      function a(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              i = o[t];
            "function" == typeof n && "function" == typeof i && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = l(n, i) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof i ? "id" === t && n && i ? e.id = c(n, i) : e[t] = void 0 !== i ? i : n : e[t] = (0, r.A)(n, i)
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
          c = i ** 2 + o;
        if (c > 0) {
          const t = y(c);
          return m(i + t) + m(i - t) - r
        }
        const l = m(y(i * i - c)),
          a = i ? Math.atan(y(-c) / i) : -h / 2;
        let s;
        return s = n < 0 ? (i > 0 ? 2 * h : h) - a : r < 0 ? (i > 0 ? 2 * h : -3 * h) + a : (i > 0 ? 0 : h) + a, 2 * l * Math.cos(s / 3) - r
      }, w = (t, e, n, o) => ((e * t + 3 * n) * t + o) * t;

      function b(t, e, n, o) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (t === e && n === o) return p;
        const r = 6 * (3 * t - 3 * n + 1),
          i = 6 * (n - 2 * t),
          c = 3 * t,
          l = r * r,
          a = i * i,
          s = i / r,
          f = 3 * i * c / l - a * i / (l * r),
          u = 2 * c / r - a / l,
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
        c = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        a = n ? Symbol.for("react.provider") : 60109,
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
                case c:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case s:
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
        return x(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = s, e.ContextProvider = a, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = y, e.Portal = r, e.Profiler = l, e.StrictMode = c, e.Suspense = p, e.isAsyncMode = function(t) {
        return S(t) || x(t) === f
      }, e.isConcurrentMode = S, e.isContextConsumer = function(t) {
        return x(t) === s
      }, e.isContextProvider = function(t) {
        return x(t) === a
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
        return x(t) === c
      }, e.isSuspense = function(t) {
        return x(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === l || t === c || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === a || t.$$typeof === s || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === v || t.$$typeof === g)
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
        c = Math.round,
        l = Math.floor,
        a = t => ({
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
          c = w(e),
          l = h(c),
          a = p(e),
          s = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[l] / 2 - r[l] / 2;
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
            y[c] -= d * (n && s ? -1 : 1);
            break;
          case "end":
            y[c] += d * (n && s ? -1 : 1)
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
          rects: c,
          elements: l,
          strategy: a
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
          strategy: a
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: c.floating.width,
          height: c.floating.height
        } : c.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), v = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, E = S(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: w,
          offsetParent: b,
          strategy: a
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

      function A(t) {
        return o.some((e => t[e] >= 0))
      }

      function P() {
        return "undefined" != typeof window
      }

      function L(t) {
        return $(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function D(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function O(t) {
        var e;
        return null == (e = ($(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function $(t) {
        return !!P() && (t instanceof Node || t instanceof D(t).Node)
      }

      function M(t) {
        return !!P() && (t instanceof Element || t instanceof D(t).Element)
      }

      function C(t) {
        return !!P() && (t instanceof HTMLElement || t instanceof D(t).HTMLElement)
      }

      function k(t) {
        return !(!P() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof D(t).ShadowRoot)
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
        return ["table", "td", "th"].includes(L(t))
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
          n = M(t) ? W(t) : t;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((t => !!n[t] && "none" !== n[t])) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function H() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function B(t) {
        return ["html", "body", "#document"].includes(L(t))
      }

      function W(t) {
        return D(t).getComputedStyle(t)
      }

      function V(t) {
        return M(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function z(t) {
        if ("html" === L(t)) return t;
        const e = t.assignedSlot || t.parentNode || k(t) && t.host || O(t);
        return k(e) ? e.host : e
      }

      function I(t) {
        const e = z(t);
        return B(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : C(e) && _(e) ? e : I(e)
      }

      function X(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = I(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          c = D(r);
        if (i) {
          const t = U(c);
          return e.concat(c, c.visualViewport || [], _(r) ? r : [], t && n ? X(t) : [])
        }
        return e.concat(r, X(r, [], n))
      }

      function U(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }

      function Y(t) {
        const e = W(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const r = C(t),
          i = r ? t.offsetWidth : n,
          l = r ? t.offsetHeight : o,
          a = c(n) !== i || c(o) !== l;
        return a && (n = i, o = l), {
          width: n,
          height: o,
          $: a
        }
      }

      function q(t) {
        return M(t) ? t : t.contextElement
      }

      function K(t) {
        const e = q(t);
        if (!C(e)) return a(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = Y(e);
        let l = (i ? c(n.width) : n.width) / o,
          s = (i ? c(n.height) : n.height) / r;
        return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
          x: l,
          y: s
        }
      }
      const Z = a(0);

      function G(t) {
        const e = D(t);
        return H() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : Z
      }

      function J(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          i = q(t);
        let c = a(1);
        e && (o ? M(o) && (c = K(o)) : c = K(t));
        const l = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== D(t)) && e
        }(i, n, o) ? G(i) : a(0);
        let s = (r.left + l.x) / c.x,
          f = (r.top + l.y) / c.y,
          u = r.width / c.x,
          d = r.height / c.y;
        if (i) {
          const t = D(i),
            e = o && M(o) ? D(o) : o;
          let n = t,
            r = U(n);
          for (; r && o && e !== n;) {
            const t = K(r),
              e = r.getBoundingClientRect(),
              o = W(r),
              i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              c = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            s *= t.x, f *= t.y, u *= t.x, d *= t.y, s += i, f += c, n = D(r), r = U(n)
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
        return e ? e.left + n : J(O(t)).left + n
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
          const n = D(t),
            o = O(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            c = o.clientHeight,
            l = 0,
            a = 0;
          if (r) {
            i = r.width, c = r.height;
            const t = H();
            (!t || t && "fixed" === e) && (l = r.offsetLeft, a = r.offsetTop)
          }
          return {
            width: i,
            height: c,
            x: l,
            y: a
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = O(t),
            n = V(t),
            o = t.ownerDocument.body,
            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            c = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let l = -n.scrollLeft + Q(t);
          const a = -n.scrollTop;
          return "rtl" === W(o).direction && (l += i(e.clientWidth, o.clientWidth) - r), {
            width: r,
            height: c,
            x: l,
            y: a
          }
        }(O(t));
        else if (M(e)) o = function(t, e) {
          const n = J(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = C(t) ? K(t) : a(1);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = G(t);
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
        return !(n === e || !M(n) || B(n)) && ("fixed" === W(n).position || nt(n, e))
      }

      function ot(t, e, n) {
        const o = C(e),
          r = O(e),
          i = "fixed" === n,
          c = J(t, !0, i, e);
        let l = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const s = a(0);
        if (o || !o && !i)
          if (("body" !== L(e) || _(r)) && (l = V(e)), o) {
            const t = J(e, !0, i, e);
            s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
          } else r && (s.x = Q(r));
        const f = !r || o || i ? a(0) : tt(r, l);
        return {
          x: c.left + l.scrollLeft - s.x - f.x,
          y: c.top + l.scrollTop - s.y - f.y,
          width: c.width,
          height: c.height
        }
      }

      function rt(t) {
        return "static" === W(t).position
      }

      function it(t, e) {
        if (!C(t) || "fixed" === W(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return O(t) === n && (n = n.ownerDocument.body), n
      }

      function ct(t, e) {
        const n = D(t);
        if (j(t)) return n;
        if (!C(t)) {
          let e = z(t);
          for (; e && !B(e);) {
            if (M(e) && !rt(e)) return e;
            e = z(e)
          }
          return n
        }
        let o = it(t, e);
        for (; o && F(o) && rt(o);) o = it(o, e);
        return o && B(o) && rt(o) && !N(o) ? n : o || function(t) {
          let e = z(t);
          for (; C(e) && !B(e);) {
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
            c = O(o),
            l = !!e && j(e.floating);
          if (o === c || l && i) return n;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = a(1);
          const u = a(0),
            d = C(o);
          if ((d || !d && !i) && (("body" !== L(o) || _(c)) && (s = V(o)), C(o))) {
            const t = J(o);
            f = K(o), u.x = t.x + o.clientLeft, u.y = t.y + o.clientTop
          }
          const p = !c || d || i ? a(0) : tt(c, s, !0);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - s.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - s.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: O,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: c
          } = t;
          const l = [..."clippingAncestors" === n ? j(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = X(t, [], !1).filter((t => M(t) && "body" !== L(t))),
                r = null;
              const i = "fixed" === W(t).position;
              let c = i ? z(t) : t;
              for (; M(c) && !B(c);) {
                const e = W(c),
                  n = N(c);
                n || "fixed" !== e.position || (r = null), (i ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || _(c) && !n && nt(t, c)) ? o = o.filter((t => t !== c)) : r = e, c = z(c)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            a = l[0],
            s = l.reduce(((t, n) => {
              const o = et(e, n, c);
              return t.top = i(o.top, t.top), t.right = r(o.right, t.right), t.bottom = r(o.bottom, t.bottom), t.left = i(o.left, t.left), t
            }), et(e, a, c));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: ct,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || ct,
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
          } = Y(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: K,
        isElement: M,
        isRTL: function(t) {
          return "rtl" === W(t).direction
        }
      };

      function at(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function st(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: c = !0,
          ancestorResize: a = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: f = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, d = q(t), p = c || a ? [...d ? X(d) : [], ...X(e)] : [];
        p.forEach((t => {
          c && t.addEventListener("scroll", n, {
            passive: !0
          }), a && t.addEventListener("resize", n)
        }));
        const m = d && f ? function(t, e) {
          let n, o = null;
          const c = O(t);

          function a() {
            var t;
            clearTimeout(n), null == (t = o) || t.disconnect(), o = null
          }
          return function s(f, u) {
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
              rootMargin: -l(m) + "px " + -l(c.clientWidth - (p + y)) + "px " + -l(c.clientHeight - (m + h)) + "px " + -l(p) + "px",
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
              1 !== o || at(d, t.getBoundingClientRect()) || s(), w = !1
            }
            try {
              o = new IntersectionObserver(b, {
                ...g,
                root: c.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(b, g)
            }
            o.observe(t)
          }(!0), a
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
          w && !at(w, o) && n(), w = o, y = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          p.forEach((t => {
            c && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n)
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
                placement: c,
                middlewareData: l
              } = e, a = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: r
                } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), c = p(n), l = m(n), a = "y" === g(n), s = ["left", "top"].includes(c) ? -1 : 1, f = i && a ? -1 : 1, u = d(e, t);
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
                return l && "number" == typeof w && (h = "end" === l ? -1 * w : w), a ? {
                  x: h * f,
                  y: y * s
                } : {
                  x: y * s,
                  y: h * f
                }
              }(e, t);
              return c === (null == (n = l.offset) ? void 0 : n.placement) && null != (o = l.arrow) && o.alignmentOffset ? {} : {
                x: r + a.x,
                y: i + a.y,
                data: {
                  ...a,
                  placement: c
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
                crossAxis: c = !1,
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
                ...a
              } = d(t, e), s = {
                x: n,
                y: o
              }, f = await R(e, a), m = g(p(r)), h = y(m);
              let w = s[h],
                b = s[m];
              if (i) {
                const t = "y" === h ? "bottom" : "right";
                w = u(w + f["y" === h ? "top" : "left"], w, w - f[t])
              }
              if (c) {
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
                    [m]: c
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
                rects: c,
                initialPlacement: l,
                platform: a,
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
              const A = p(r),
                P = g(l),
                L = p(l) === l,
                D = await (null == a.isRTL ? void 0 : a.isRTL(s.floating)),
                O = y || (L || !E ? [v(l)] : function(t) {
                  const e = v(t);
                  return [b(t), e, b(e)]
                }(l)),
                $ = "none" !== S;
              !y && $ && O.push(... function(t, e, n, o) {
                const r = m(t);
                let i = function(t, e, n) {
                  const o = ["left", "right"],
                    r = ["right", "left"],
                    i = ["top", "bottom"],
                    c = ["bottom", "top"];
                  switch (t) {
                    case "top":
                    case "bottom":
                      return n ? e ? r : o : e ? o : r;
                    case "left":
                    case "right":
                      return e ? i : c;
                    default:
                      return []
                  }
                }(p(t), "start" === n, o);
                return r && (i = i.map((t => t + "-" + r)), e && (i = i.concat(i.map(b)))), i
              }(l, E, S, D));
              const M = [l, ...O],
                C = await R(e, T),
                k = [];
              let _ = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && k.push(C[A]), u) {
                const t = function(t, e, n) {
                  void 0 === n && (n = !1);
                  const o = m(t),
                    r = w(t),
                    i = h(r);
                  let c = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return e.reference[i] > e.floating[i] && (c = v(c)), [c, v(c)]
                }(r, c, D);
                k.push(C[t[0]], C[t[1]])
              }
              if (_ = [..._, {
                  placement: r,
                  overflows: k
                }], !k.every((t => t <= 0))) {
                var F, j;
                const t = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
                  e = M[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: _
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (j = _.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : j.placement;
                if (!n) switch (x) {
                  case "bestFit": {
                    var N;
                    const t = null == (N = _.filter((t => {
                      if ($) {
                        const e = g(t.placement);
                        return e === P || "y" === e
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
                placement: c,
                rects: l,
                platform: a,
                elements: s
              } = e, {
                apply: f = () => {},
                ...u
              } = d(t, e), y = await R(e, u), h = p(c), w = m(c), b = "y" === g(c), {
                width: v,
                height: x
              } = l.floating;
              let S, E;
              "top" === h || "bottom" === h ? (S = h, E = w === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (E = h, S = "end" === w ? "top" : "bottom");
              const T = x - y.top - y.bottom,
                A = v - y.left - y.right,
                P = r(x - y[S], T),
                L = r(v - y[E], A),
                D = !e.middlewareData.shift;
              let O = P,
                $ = L;
              if (null != (n = e.middlewareData.shift) && n.enabled.x && ($ = A), null != (o = e.middlewareData.shift) && o.enabled.y && (O = T), D && !w) {
                const t = i(y.left, 0),
                  e = i(y.right, 0),
                  n = i(y.top, 0),
                  o = i(y.bottom, 0);
                b ? $ = v - 2 * (0 !== t || 0 !== e ? t + e : i(y.left, y.right)) : O = x - 2 * (0 !== n || 0 !== o ? n + o : i(y.top, y.bottom))
              }
              await f({
                ...e,
                availableWidth: $,
                availableHeight: O
              });
              const M = await a.getDimensions(s.floating);
              return v !== M.width || x !== M.height ? {
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
                      referenceHidden: A(t)
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
        yt = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: c,
              platform: l,
              elements: a,
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
              A = E ? "clientHeight" : "clientWidth",
              P = c.reference[v] + c.reference[b] - g[b] - c.floating[v],
              L = g[b] - c.reference[b],
              D = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f));
            let O = D ? D[A] : 0;
            O && await (null == l.isElement ? void 0 : l.isElement(D)) || (O = a.floating[A] || c.floating[v]);
            const $ = P / 2 - L / 2,
              M = O / 2 - S[v] / 2 - 1,
              C = r(y[R], M),
              k = r(y[T], M),
              _ = C,
              F = O - S[v] - k,
              j = O / 2 - S[v] / 2 + $,
              N = u(_, j, F),
              H = !s.arrow && null != m(i) && j !== N && c.reference[v] / 2 - (j < _ ? C : k) - S[v] / 2 < 0,
              B = H ? j < _ ? j - _ : j - F : 0;
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
                middlewareData: c
              } = e, {
                offset: l = 0,
                mainAxis: a = !0,
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
              if (a) {
                const t = "y" === m ? "height" : "width",
                  e = i.reference[m] - i.floating[t] + v.mainAxis,
                  n = i.reference[m] + i.reference[t] - v.mainAxis;
                h < e ? h = e : h > n && (h = n)
              }
              if (s) {
                var x, S;
                const t = "y" === m ? "width" : "height",
                  e = ["top", "left"].includes(p(r)),
                  n = i.reference[u] - i.floating[t] + (e && (null == (x = c.offset) ? void 0 : x[u]) || 0) + (e ? 0 : v.crossAxis),
                  o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (S = c.offset) ? void 0 : S[u]) || 0) - (e ? v.crossAxis : 0);
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
              platform: c
            } = n, l = i.filter(Boolean), a = await (null == c.isRTL ? void 0 : c.isRTL(e));
            let s = await c.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = E(s, o, a),
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
                platform: c,
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
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (s = !0 === b.rects ? await c.getElementRects({
                reference: t,
                floating: e,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = E(s, d, a))), n = -1)
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
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        l = {};

      function a(t) {
        return o.isMemo(t) ? c : l[t.$$typeof] || r
      }
      l[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, l[o.Memo] = c;
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
          var c = f(n);
          u && (c = c.concat(u(n)));
          for (var l = a(e), y = a(n), h = 0; h < c.length; ++h) {
            var g = c[h];
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