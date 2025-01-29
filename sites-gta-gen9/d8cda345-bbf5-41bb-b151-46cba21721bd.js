! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d8cda345-bbf5-41bb-b151-46cba21721bd", t._sentryDebugIdIdentifier = "sentry-dbid-d8cda345-bbf5-41bb-b151-46cba21721bd")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1155], {
    98018: (t, e, n) => {
      "use strict";
      var o = n(20844),
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
        a = {};

      function s(t) {
        return o.isMemo(t) ? c : a[t.$$typeof] || r
      }
      a[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[o.Memo] = c;
      var l = Object.defineProperty,
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
          for (var a = s(e), y = s(n), g = 0; g < c.length; ++g) {
            var h = c[g];
            if (!(i[h] || o && o[h] || y && y[h] || a && a[h])) {
              var b = d(n, h);
              try {
                l(e, h, b)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    98160: (t, e) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        c = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        f = n ? Symbol.for("react.async_mode") : 60111,
        u = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        h = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;

      function w(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case o:
              switch (t = t.type) {
                case f:
                case u:
                case i:
                case a:
                case c:
                case p:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case l:
                    case d:
                    case g:
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
        return w(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = l, e.ContextProvider = s, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = g, e.Memo = y, e.Portal = r, e.Profiler = a, e.StrictMode = c, e.Suspense = p, e.isAsyncMode = function(t) {
        return T(t) || w(t) === f
      }, e.isConcurrentMode = T, e.isContextConsumer = function(t) {
        return w(t) === l
      }, e.isContextProvider = function(t) {
        return w(t) === s
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
      }, e.isForwardRef = function(t) {
        return w(t) === d
      }, e.isFragment = function(t) {
        return w(t) === i
      }, e.isLazy = function(t) {
        return w(t) === g
      }, e.isMemo = function(t) {
        return w(t) === y
      }, e.isPortal = function(t) {
        return w(t) === r
      }, e.isProfiler = function(t) {
        return w(t) === a
      }, e.isStrictMode = function(t) {
        return w(t) === c
      }, e.isSuspense = function(t) {
        return w(t) === p
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === a || t === c || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === g || t.$$typeof === y || t.$$typeof === s || t.$$typeof === l || t.$$typeof === d || t.$$typeof === b || t.$$typeof === v || t.$$typeof === x || t.$$typeof === h)
      }, e.typeOf = w
    },
    20844: (t, e, n) => {
      "use strict";
      t.exports = n(98160)
    },
    80689: (t, e, n) => {
      var o = n(20605).Symbol;
      t.exports = o
    },
    95192: (t, e, n) => {
      var o = n(80689),
        r = n(54915),
        i = n(18150),
        c = o ? o.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : c && c in Object(t) ? r(t) : i(t)
      }
    },
    42368: (t, e, n) => {
      var o = n(69896),
        r = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, o(t) + 1).replace(r, "") : t
      }
    },
    38888: (t, e, n) => {
      var o = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = o
    },
    54915: (t, e, n) => {
      var o = n(80689),
        r = Object.prototype,
        i = r.hasOwnProperty,
        c = r.toString,
        a = o ? o.toStringTag : void 0;
      t.exports = function(t) {
        var e = i.call(t, a),
          n = t[a];
        try {
          t[a] = void 0;
          var o = !0
        } catch (t) {}
        var r = c.call(t);
        return o && (e ? t[a] = n : delete t[a]), r
      }
    },
    18150: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    20605: (t, e, n) => {
      var o = n(38888),
        r = "object" == typeof self && self && self.Object === Object && self,
        i = o || r || Function("return this")();
      t.exports = i
    },
    69896: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    45757: (t, e, n) => {
      var o = n(23693),
        r = n(42204),
        i = n(79902),
        c = Math.max,
        a = Math.min;
      t.exports = function(t, e, n) {
        var s, l, f, u, d, p, m = 0,
          y = !1,
          g = !1,
          h = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function b(e) {
          var n = s,
            o = l;
          return s = l = void 0, m = e, u = t.apply(o, n)
        }

        function v(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || g && t - m >= f
        }

        function x() {
          var t = r();
          if (v(t)) return w(t);
          d = setTimeout(x, function(t) {
            var n = e - (t - p);
            return g ? a(n, f - (t - m)) : n
          }(t))
        }

        function w(t) {
          return d = void 0, h && s ? b(t) : (s = l = void 0, u)
        }

        function T() {
          var t = r(),
            n = v(t);
          if (s = arguments, l = this, p = t, n) {
            if (void 0 === d) return function(t) {
              return m = t, d = setTimeout(x, e), y ? b(t) : u
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(x, e), b(p)
          }
          return void 0 === d && (d = setTimeout(x, e)), u
        }
        return e = i(e) || 0, o(n) && (y = !!n.leading, f = (g = "maxWait" in n) ? c(i(n.maxWait) || 0, e) : f, h = "trailing" in n ? !!n.trailing : h), T.cancel = function() {
          void 0 !== d && clearTimeout(d), m = 0, s = p = l = d = void 0
        }, T.flush = function() {
          return void 0 === d ? u : w(r())
        }, T
      }
    },
    23693: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    56490: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    69978: (t, e, n) => {
      var o = n(95192),
        r = n(56490);
      t.exports = function(t) {
        return "symbol" == typeof t || r(t) && "[object Symbol]" == o(t)
      }
    },
    42204: (t, e, n) => {
      var o = n(20605);
      t.exports = function() {
        return o.Date.now()
      }
    },
    79902: (t, e, n) => {
      var o = n(42368),
        r = n(23693),
        i = n(69978),
        c = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (r(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = o(t);
        var n = a.test(t);
        return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : c.test(t) ? NaN : +t
      }
    },
    93782: (t, e, n) => {
      "use strict";
      n.d(e, {
        S: () => r
      });
      var o = n(62229);

      function r(t, e) {
        return n = e || null, r = function(e) {
          return t.forEach((function(t) {
            return function(t, e) {
              return "function" == typeof t ? t(e) : t && (t.current = e), t
            }(t, e)
          }))
        }, (i = (0, o.useState)((function() {
          return {
            value: n,
            callback: r,
            facade: {
              get current() {
                return i.value
              },
              set current(t) {
                var e = i.value;
                e !== t && (i.value = t, i.callback(t, e))
              }
            }
          }
        }))[0]).callback = r, i.facade;
        var n, r, i
      }
    },
    64269: (t, e, n) => {
      "use strict";
      n.d(e, {
        C: () => c,
        f: () => a
      });
      var o = n(78322);

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

      function a(t) {
        void 0 === t && (t = {});
        var e = i(null);
        return e.options = (0, o.Cl)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    79600: (t, e, n) => {
      "use strict";
      n.d(e, {
        BN: () => p,
        ER: () => m,
        Ej: () => y,
        UE: () => a,
        UU: () => s,
        cY: () => d,
        jD: () => u,
        rD: () => i
      });
      var o = n(74788);

      function r(t, e, n) {
        let {
          reference: r,
          floating: i
        } = t;
        const c = (0, o.TV)(e),
          a = (0, o.Dz)(e),
          s = (0, o.sq)(a),
          l = (0, o.C0)(e),
          f = "y" === c,
          u = r.x + r.width / 2 - i.width / 2,
          d = r.y + r.height / 2 - i.height / 2,
          p = r[s] / 2 - i[s] / 2;
        let m;
        switch (l) {
          case "top":
            m = {
              x: u,
              y: r.y - i.height
            };
            break;
          case "bottom":
            m = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            m = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            m = {
              x: r.x - i.width,
              y: d
            };
            break;
          default:
            m = {
              x: r.x,
              y: r.y
            }
        }
        switch ((0, o.Sg)(e)) {
          case "start":
            m[a] -= p * (n && f ? -1 : 1);
            break;
          case "end":
            m[a] += p * (n && f ? -1 : 1)
        }
        return m
      }
      const i = async (t, e, n) => {
        const {
          placement: o = "bottom",
          strategy: i = "absolute",
          middleware: c = [],
          platform: a
        } = n, s = c.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(e));
        let f = await a.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }),
          {
            x: u,
            y: d
          } = r(f, o, l),
          p = o,
          m = {},
          y = 0;
        for (let n = 0; n < s.length; n++) {
          const {
            name: c,
            fn: g
          } = s[n], {
            x: h,
            y: b,
            data: v,
            reset: x
          } = await g({
            x: u,
            y: d,
            initialPlacement: o,
            placement: p,
            strategy: i,
            middlewareData: m,
            rects: f,
            platform: a,
            elements: {
              reference: t,
              floating: e
            }
          });
          u = null != h ? h : u, d = null != b ? b : d, m = {
            ...m,
            [c]: {
              ...m[c],
              ...v
            }
          }, x && y <= 50 && (y++, "object" == typeof x && (x.placement && (p = x.placement), x.rects && (f = !0 === x.rects ? await a.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }) : x.rects), ({
            x: u,
            y: d
          } = r(f, p, l))), n = -1)
        }
        return {
          x: u,
          y: d,
          placement: p,
          strategy: i,
          middlewareData: m
        }
      };
      async function c(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: r,
          y: i,
          platform: c,
          rects: a,
          elements: s,
          strategy: l
        } = t, {
          boundary: f = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = (0, o._3)(e, t), y = (0, o.nI)(m), g = s[p ? "floating" === d ? "reference" : "floating" : d], h = (0, o.B1)(await c.getClippingRect({
          element: null == (n = await (null == c.isElement ? void 0 : c.isElement(g))) || n ? g : g.contextElement || await (null == c.getDocumentElement ? void 0 : c.getDocumentElement(s.floating)),
          boundary: f,
          rootBoundary: u,
          strategy: l
        })), b = "floating" === d ? {
          ...a.floating,
          x: r,
          y: i
        } : a.reference, v = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(s.floating)), x = await (null == c.isElement ? void 0 : c.isElement(v)) && await (null == c.getScale ? void 0 : c.getScale(v)) || {
          x: 1,
          y: 1
        }, w = (0, o.B1)(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: b,
          offsetParent: v,
          strategy: l
        }) : b);
        return {
          top: (h.top - w.top + y.top) / x.y,
          bottom: (w.bottom - h.bottom + y.bottom) / x.y,
          left: (h.left - w.left + y.left) / x.x,
          right: (w.right - h.right + y.right) / x.x
        }
      }
      const a = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: r,
              placement: i,
              rects: c,
              platform: a,
              elements: s,
              middlewareData: l
            } = e, {
              element: f,
              padding: u = 0
            } = (0, o._3)(t, e) || {};
            if (null == f) return {};
            const d = (0, o.nI)(u),
              p = {
                x: n,
                y: r
              },
              m = (0, o.Dz)(i),
              y = (0, o.sq)(m),
              g = await a.getDimensions(f),
              h = "y" === m,
              b = h ? "top" : "left",
              v = h ? "bottom" : "right",
              x = h ? "clientHeight" : "clientWidth",
              w = c.reference[y] + c.reference[m] - p[m] - c.floating[y],
              T = p[m] - c.reference[m],
              S = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(f));
            let E = S ? S[x] : 0;
            E && await (null == a.isElement ? void 0 : a.isElement(S)) || (E = s.floating[x] || c.floating[y]);
            const R = w / 2 - T / 2,
              O = E / 2 - g[y] / 2 - 1,
              _ = (0, o.jk)(d[b], O),
              L = (0, o.jk)(d[v], O),
              P = _,
              j = E - g[y] - L,
              A = E / 2 - g[y] / 2 + R,
              C = (0, o.qE)(P, A, j),
              D = !l.arrow && null != (0, o.Sg)(i) && A != C && c.reference[y] / 2 - (A < P ? _ : L) - g[y] / 2 < 0,
              k = D ? A < P ? A - P : A - j : 0;
            return {
              [m]: p[m] + k,
              data: {
                [m]: C,
                centerOffset: A - C - k,
                ...D && {
                  alignmentOffset: k
                }
              },
              reset: D
            }
          }
        }),
        s = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, r;
              const {
                placement: i,
                middlewareData: a,
                rects: s,
                initialPlacement: l,
                platform: f,
                elements: u
              } = e, {
                mainAxis: d = !0,
                crossAxis: p = !0,
                fallbackPlacements: m,
                fallbackStrategy: y = "bestFit",
                fallbackAxisSideDirection: g = "none",
                flipAlignment: h = !0,
                ...b
              } = (0, o._3)(t, e);
              if (null != (n = a.arrow) && n.alignmentOffset) return {};
              const v = (0, o.C0)(i),
                x = (0, o.C0)(l) === l,
                w = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)),
                T = m || (x || !h ? [(0, o.bV)(l)] : (0, o.WJ)(l));
              m || "none" === g || T.push(...(0, o.lP)(l, h, g, w));
              const S = [l, ...T],
                E = await c(e, b),
                R = [];
              let O = (null == (r = a.flip) ? void 0 : r.overflows) || [];
              if (d && R.push(E[v]), p) {
                const t = (0, o.w7)(i, s, w);
                R.push(E[t[0]], E[t[1]])
              }
              if (O = [...O, {
                  placement: i,
                  overflows: R
                }], !R.every((t => t <= 0))) {
                var _, L;
                const t = ((null == (_ = a.flip) ? void 0 : _.index) || 0) + 1,
                  e = S[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: O
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (L = O.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : L.placement;
                if (!n) switch (y) {
                  case "bestFit": {
                    var P;
                    const t = null == (P = O.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : P[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = l
                }
                if (i !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        };

      function l(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function f(t) {
        return o.r_.some((e => t[e] >= 0))
      }
      const u = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n
              } = e, {
                strategy: r = "referenceHidden",
                ...i
              } = (0, o._3)(t, e);
              switch (r) {
                case "referenceHidden": {
                  const t = l(await c(e, {
                    ...i,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: f(t)
                    }
                  }
                }
                case "escaped": {
                  const t = l(await c(e, {
                    ...i,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: f(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        d = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: r
              } = e, i = await async function(t, e) {
                const {
                  placement: n,
                  platform: r,
                  elements: i
                } = t, c = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), a = (0, o.C0)(n), s = (0, o.Sg)(n), l = "y" === (0, o.TV)(n), f = ["left", "top"].includes(a) ? -1 : 1, u = c && l ? -1 : 1, d = (0, o._3)(e, t);
                let {
                  mainAxis: p,
                  crossAxis: m,
                  alignmentAxis: y
                } = "number" == typeof d ? {
                  mainAxis: d,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...d
                };
                return s && "number" == typeof y && (m = "end" === s ? -1 * y : y), l ? {
                  x: m * u,
                  y: p * f
                } : {
                  x: p * f,
                  y: m * u
                }
              }(e, t);
              return {
                x: n + i.x,
                y: r + i.y,
                data: i
              }
            }
          }
        },
        p = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: r,
                placement: i
              } = e, {
                mainAxis: a = !0,
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
                ...f
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = await c(e, f), p = (0, o.TV)((0, o.C0)(i)), m = (0, o.PG)(p);
              let y = u[m],
                g = u[p];
              if (a) {
                const t = "y" === m ? "bottom" : "right",
                  e = y + d["y" === m ? "top" : "left"],
                  n = y - d[t];
                y = (0, o.qE)(e, y, n)
              }
              if (s) {
                const t = "y" === p ? "bottom" : "right",
                  e = g + d["y" === p ? "top" : "left"],
                  n = g - d[t];
                g = (0, o.qE)(e, g, n)
              }
              const h = l.fn({
                ...e,
                [m]: y,
                [p]: g
              });
              return {
                ...h,
                data: {
                  x: h.x - n,
                  y: h.y - r
                }
              }
            }
          }
        },
        m = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: n,
                y: r,
                placement: i,
                rects: c,
                middlewareData: a
              } = e, {
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: f = !0
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = (0, o.TV)(i), p = (0, o.PG)(d);
              let m = u[p],
                y = u[d];
              const g = (0, o._3)(s, e),
                h = "number" == typeof g ? {
                  mainAxis: g,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...g
                };
              if (l) {
                const t = "y" === p ? "height" : "width",
                  e = c.reference[p] - c.floating[t] + h.mainAxis,
                  n = c.reference[p] + c.reference[t] - h.mainAxis;
                m < e ? m = e : m > n && (m = n)
              }
              if (f) {
                var b, v;
                const t = "y" === p ? "width" : "height",
                  e = ["top", "left"].includes((0, o.C0)(i)),
                  n = c.reference[d] - c.floating[t] + (e && (null == (b = a.offset) ? void 0 : b[d]) || 0) + (e ? 0 : h.crossAxis),
                  r = c.reference[d] + c.reference[t] + (e ? 0 : (null == (v = a.offset) ? void 0 : v[d]) || 0) - (e ? h.crossAxis : 0);
                y < n ? y = n : y > r && (y = r)
              }
              return {
                [p]: m,
                [d]: y
              }
            }
          }
        },
        y = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              const {
                placement: n,
                rects: r,
                platform: i,
                elements: a
              } = e, {
                apply: s = (() => {}),
                ...l
              } = (0, o._3)(t, e), f = await c(e, l), u = (0, o.C0)(n), d = (0, o.Sg)(n), p = "y" === (0, o.TV)(n), {
                width: m,
                height: y
              } = r.floating;
              let g, h;
              "top" === u || "bottom" === u ? (g = u, h = d === (await (null == i.isRTL ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = u, g = "end" === d ? "top" : "bottom");
              const b = y - f[g],
                v = m - f[h],
                x = !e.middlewareData.shift;
              let w = b,
                T = v;
              if (p) {
                const t = m - f.left - f.right;
                T = d || x ? (0, o.jk)(v, t) : t
              } else {
                const t = y - f.top - f.bottom;
                w = d || x ? (0, o.jk)(b, t) : t
              }
              if (x && !d) {
                const t = (0, o.T9)(f.left, 0),
                  e = (0, o.T9)(f.right, 0),
                  n = (0, o.T9)(f.top, 0),
                  r = (0, o.T9)(f.bottom, 0);
                p ? T = m - 2 * (0 !== t || 0 !== e ? t + e : (0, o.T9)(f.left, f.right)) : w = y - 2 * (0 !== n || 0 !== r ? n + r : (0, o.T9)(f.top, f.bottom))
              }
              await s({
                ...e,
                availableWidth: T,
                availableHeight: w
              });
              const S = await i.getDimensions(a.floating);
              return m !== S.width || y !== S.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    546: (t, e, n) => {
      "use strict";
      n.d(e, {
        ll: () => $,
        rD: () => M
      });
      var o = n(74788),
        r = n(79600);

      function i(t) {
        return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function c(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function a(t) {
        var e;
        return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function s(t) {
        return t instanceof Node || t instanceof c(t).Node
      }

      function l(t) {
        return t instanceof Element || t instanceof c(t).Element
      }

      function f(t) {
        return t instanceof HTMLElement || t instanceof c(t).HTMLElement
      }

      function u(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof c(t).ShadowRoot)
      }

      function d(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = h(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r)
      }

      function p(t) {
        return ["table", "td", "th"].includes(i(t))
      }

      function m(t) {
        const e = y(),
          n = h(t);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function y() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function g(t) {
        return ["html", "body", "#document"].includes(i(t))
      }

      function h(t) {
        return c(t).getComputedStyle(t)
      }

      function b(t) {
        return l(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function v(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || u(t) && t.host || a(t);
        return u(e) ? e.host : e
      }

      function x(t) {
        const e = v(t);
        return g(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : f(e) && d(e) ? e : x(e)
      }

      function w(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = x(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          a = c(r);
        return i ? e.concat(a, a.visualViewport || [], d(r) ? r : [], a.frameElement && n ? w(a.frameElement) : []) : e.concat(r, w(r, [], n))
      }

      function T(t) {
        const e = h(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const i = f(t),
          c = i ? t.offsetWidth : n,
          a = i ? t.offsetHeight : r,
          s = (0, o.LI)(n) !== c || (0, o.LI)(r) !== a;
        return s && (n = c, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function S(t) {
        return l(t) ? t : t.contextElement
      }

      function E(t) {
        const e = S(t);
        if (!f(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: c
          } = T(e);
        let a = (c ? (0, o.LI)(n.width) : n.width) / r,
          s = (c ? (0, o.LI)(n.height) : n.height) / i;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const R = (0, o.Jx)(0);

      function O(t) {
        const e = c(t);
        return y() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : R
      }

      function _(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          a = S(t);
        let s = (0, o.Jx)(1);
        e && (r ? l(r) && (s = E(r)) : s = E(t));
        const f = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== c(t)) && e
        }(a, n, r) ? O(a) : (0, o.Jx)(0);
        let u = (i.left + f.x) / s.x,
          d = (i.top + f.y) / s.y,
          p = i.width / s.x,
          m = i.height / s.y;
        if (a) {
          const t = c(a),
            e = r && l(r) ? c(r) : r;
          let n = t.frameElement;
          for (; n && r && e !== t;) {
            const t = E(n),
              e = n.getBoundingClientRect(),
              o = h(n),
              r = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              i = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            u *= t.x, d *= t.y, p *= t.x, m *= t.y, u += r, d += i, n = c(n).frameElement
          }
        }
        return (0, o.B1)({
          width: p,
          height: m,
          x: u,
          y: d
        })
      }

      function L(t) {
        return _(a(t)).left + b(t).scrollLeft
      }

      function P(t, e, n) {
        let r;
        if ("viewport" === e) r = function(t, e) {
          const n = c(t),
            o = a(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            s = o.clientHeight,
            l = 0,
            f = 0;
          if (r) {
            i = r.width, s = r.height;
            const t = y();
            (!t || t && "fixed" === e) && (l = r.offsetLeft, f = r.offsetTop)
          }
          return {
            width: i,
            height: s,
            x: l,
            y: f
          }
        }(t, n);
        else if ("document" === e) r = function(t) {
          const e = a(t),
            n = b(t),
            r = t.ownerDocument.body,
            i = (0, o.T9)(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
            c = (0, o.T9)(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + L(t);
          const l = -n.scrollTop;
          return "rtl" === h(r).direction && (s += (0, o.T9)(e.clientWidth, r.clientWidth) - i), {
            width: i,
            height: c,
            x: s,
            y: l
          }
        }(a(t));
        else if (l(e)) r = function(t, e) {
          const n = _(t, !0, "fixed" === e),
            r = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            c = f(t) ? E(t) : (0, o.Jx)(1);
          return {
            width: t.clientWidth * c.x,
            height: t.clientHeight * c.y,
            x: i * c.x,
            y: r * c.y
          }
        }(e, n);
        else {
          const n = O(t);
          r = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
          }
        }
        return (0, o.B1)(r)
      }

      function j(t, e) {
        const n = v(t);
        return !(n === e || !l(n) || g(n)) && ("fixed" === h(n).position || j(n, e))
      }

      function A(t, e, n) {
        const r = f(e),
          c = a(e),
          s = "fixed" === n,
          l = _(t, !0, s, e);
        let u = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const p = (0, o.Jx)(0);
        if (r || !r && !s)
          if (("body" !== i(e) || d(c)) && (u = b(e)), r) {
            const t = _(e, !0, s, e);
            p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
          } else c && (p.x = L(c));
        return {
          x: l.left + u.scrollLeft - p.x,
          y: l.top + u.scrollTop - p.y,
          width: l.width,
          height: l.height
        }
      }

      function C(t, e) {
        return f(t) && "fixed" !== h(t).position ? e ? e(t) : t.offsetParent : null
      }

      function D(t, e) {
        const n = c(t);
        if (!f(t)) return n;
        let o = C(t, e);
        for (; o && p(o) && "static" === h(o).position;) o = C(o, e);
        return o && ("html" === i(o) || "body" === i(o) && "static" === h(o).position && !m(o)) ? n : o || function(t) {
          let e = v(t);
          for (; f(e) && !g(e);) {
            if (m(e)) return e;
            e = v(e)
          }
          return null
        }(t) || n
      }
      const k = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            rect: e,
            offsetParent: n,
            strategy: r
          } = t;
          const c = f(n),
            s = a(n);
          if (n === s) return e;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = (0, o.Jx)(1);
          const p = (0, o.Jx)(0);
          if ((c || !c && "fixed" !== r) && (("body" !== i(n) || d(s)) && (l = b(n)), f(n))) {
            const t = _(n);
            u = E(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
          }
          return {
            width: e.width * u.x,
            height: e.height * u.y,
            x: e.x * u.x - l.scrollLeft * u.x + p.x,
            y: e.y * u.y - l.scrollTop * u.y + p.y
          }
        },
        getDocumentElement: a,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: c
          } = t;
          const a = [..."clippingAncestors" === n ? function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = w(t, [], !1).filter((t => l(t) && "body" !== i(t))),
                r = null;
              const c = "fixed" === h(t).position;
              let a = c ? v(t) : t;
              for (; l(a) && !g(a);) {
                const e = h(a),
                  n = m(a);
                n || "fixed" !== e.position || (r = null), (c ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || d(a) && !n && j(t, a)) ? o = o.filter((t => t !== a)) : r = e, a = v(a)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), r],
            s = a[0],
            f = a.reduce(((t, n) => {
              const r = P(e, n, c);
              return t.top = (0, o.T9)(r.top, t.top), t.right = (0, o.jk)(r.right, t.right), t.bottom = (0, o.jk)(r.bottom, t.bottom), t.left = (0, o.T9)(r.left, t.left), t
            }), P(e, s, c));
          return {
            width: f.right - f.left,
            height: f.bottom - f.top,
            x: f.left,
            y: f.top
          }
        },
        getOffsetParent: D,
        getElementRects: async function(t) {
          let {
            reference: e,
            floating: n,
            strategy: o
          } = t;
          const r = this.getOffsetParent || D,
            i = this.getDimensions;
          return {
            reference: A(e, await r(n), o),
            floating: {
              x: 0,
              y: 0,
              ...await i(n)
            }
          }
        },
        getClientRects: function(t) {
          return Array.from(t.getClientRects())
        },
        getDimensions: function(t) {
          return T(t)
        },
        getScale: E,
        isElement: l,
        isRTL: function(t) {
          return "rtl" === h(t).direction
        }
      };

      function $(t, e, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: c = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: l = "function" == typeof IntersectionObserver,
          animationFrame: f = !1
        } = r, u = S(t), d = i || c ? [...u ? w(u) : [], ...w(e)] : [];
        d.forEach((t => {
          i && t.addEventListener("scroll", n, {
            passive: !0
          }), c && t.addEventListener("resize", n)
        }));
        const p = u && l ? function(t, e) {
          let n, r = null;
          const i = a(t);

          function c() {
            clearTimeout(n), r && r.disconnect(), r = null
          }
          return function a(s, l) {
            void 0 === s && (s = !1), void 0 === l && (l = 1), c();
            const {
              left: f,
              top: u,
              width: d,
              height: p
            } = t.getBoundingClientRect();
            if (s || e(), !d || !p) return;
            const m = {
              rootMargin: -(0, o.RI)(u) + "px " + -(0, o.RI)(i.clientWidth - (f + d)) + "px " + -(0, o.RI)(i.clientHeight - (u + p)) + "px " + -(0, o.RI)(f) + "px",
              threshold: (0, o.T9)(0, (0, o.jk)(1, l)) || 1
            };
            let y = !0;

            function g(t) {
              const e = t[0].intersectionRatio;
              if (e !== l) {
                if (!y) return a();
                e ? a(!1, e) : n = setTimeout((() => {
                  a(!1, 1e-7)
                }), 100)
              }
              y = !1
            }
            try {
              r = new IntersectionObserver(g, {
                ...m,
                root: i.ownerDocument
              })
            } catch (t) {
              r = new IntersectionObserver(g, m)
            }
            r.observe(t)
          }(!0), c
        }(u, n) : null;
        let m, y = -1,
          g = null;
        s && (g = new ResizeObserver((t => {
          let [o] = t;
          o && o.target === u && g && (g.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame((() => {
            g && g.observe(e)
          }))), n()
        })), u && !f && g.observe(u), g.observe(e));
        let h = f ? _(t) : null;
        return f && function e() {
          const o = _(t);
          !h || o.x === h.x && o.y === h.y && o.width === h.width && o.height === h.height || n(), h = o, m = requestAnimationFrame(e)
        }(), n(), () => {
          d.forEach((t => {
            i && t.removeEventListener("scroll", n), c && t.removeEventListener("resize", n)
          })), p && p(), g && g.disconnect(), g = null, f && cancelAnimationFrame(m)
        }
      }
      const M = (t, e, n) => {
        const o = new Map,
          i = {
            platform: k,
            ...n
          },
          c = {
            ...i.platform,
            _c: o
          };
        return (0, r.rD)(t, e, {
          ...i,
          platform: c
        })
      }
    },
    74788: (t, e, n) => {
      "use strict";
      n.d(e, {
        B1: () => R,
        C0: () => p,
        Dz: () => b,
        Jx: () => s,
        LI: () => c,
        PG: () => y,
        RI: () => a,
        Sg: () => m,
        T9: () => i,
        TV: () => h,
        WJ: () => x,
        _3: () => d,
        bV: () => S,
        jk: () => r,
        lP: () => T,
        nI: () => E,
        qE: () => u,
        r_: () => o,
        sq: () => g,
        w7: () => v
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        c = Math.round,
        a = Math.floor,
        s = t => ({
          x: t,
          y: t
        }),
        l = {
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

      function g(t) {
        return "y" === t ? "height" : "width"
      }

      function h(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function b(t) {
        return y(h(t))
      }

      function v(t, e, n) {
        void 0 === n && (n = !1);
        const o = m(t),
          r = b(t),
          i = g(r);
        let c = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
        return e.reference[i] > e.floating[i] && (c = S(c)), [c, S(c)]
      }

      function x(t) {
        const e = S(t);
        return [w(t), e, w(e)]
      }

      function w(t) {
        return t.replace(/start|end/g, (t => f[t]))
      }

      function T(t, e, n, o) {
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
        return r && (i = i.map((t => t + "-" + r)), e && (i = i.concat(i.map(w)))), i
      }

      function S(t) {
        return t.replace(/left|right|bottom|top/g, (t => l[t]))
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

      function R(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height
        }
      }
    },
    43680: (t, e, n) => {
      "use strict";

      function o() {
        return o = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
          }
          return t
        }, o.apply(this, arguments)
      }
      n.d(e, {
        A: () => o
      })
    }
  }
]);