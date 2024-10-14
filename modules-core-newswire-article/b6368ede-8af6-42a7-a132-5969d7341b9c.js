! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "b6368ede-8af6-42a7-a132-5969d7341b9c", t._sentryDebugIdIdentifier = "sentry-dbid-b6368ede-8af6-42a7-a132-5969d7341b9c")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7542], {
    81503: (t, e, n) => {
      "use strict";
      n.d(e, {
        m: () => o
      });
      var o = function() {
        return n.nc
      }
    },
    19435: (t, e, n) => {
      var o = n(78007).Symbol;
      t.exports = o
    },
    7158: (t, e, n) => {
      var o = n(19435),
        i = n(16061),
        r = n(84968),
        l = o ? o.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : l && l in Object(t) ? i(t) : r(t)
      }
    },
    48530: (t, e, n) => {
      var o = n(18478),
        i = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, o(t) + 1).replace(i, "") : t
      }
    },
    94626: (t, e, n) => {
      var o = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = o
    },
    16061: (t, e, n) => {
      var o = n(19435),
        i = Object.prototype,
        r = i.hasOwnProperty,
        l = i.toString,
        c = o ? o.toStringTag : void 0;
      t.exports = function(t) {
        var e = r.call(t, c),
          n = t[c];
        try {
          t[c] = void 0;
          var o = !0
        } catch (t) {}
        var i = l.call(t);
        return o && (e ? t[c] = n : delete t[c]), i
      }
    },
    84968: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    78007: (t, e, n) => {
      var o = n(94626),
        i = "object" == typeof self && self && self.Object === Object && self,
        r = o || i || Function("return this")();
      t.exports = r
    },
    18478: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    14963: (t, e, n) => {
      var o = n(27335),
        i = n(92346),
        r = n(58972),
        l = Math.max,
        c = Math.min;
      t.exports = function(t, e, n) {
        var s, a, f, u, d, p, m = 0,
          g = !1,
          h = !1,
          y = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function x(e) {
          var n = s,
            o = a;
          return s = a = void 0, m = e, u = t.apply(o, n)
        }

        function w(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || h && t - m >= f
        }

        function v() {
          var t = i();
          if (w(t)) return b(t);
          d = setTimeout(v, function(t) {
            var n = e - (t - p);
            return h ? c(n, f - (t - m)) : n
          }(t))
        }

        function b(t) {
          return d = void 0, y && s ? x(t) : (s = a = void 0, u)
        }

        function T() {
          var t = i(),
            n = w(t);
          if (s = arguments, a = this, p = t, n) {
            if (void 0 === d) return function(t) {
              return m = t, d = setTimeout(v, e), g ? x(t) : u
            }(p);
            if (h) return clearTimeout(d), d = setTimeout(v, e), x(p)
          }
          return void 0 === d && (d = setTimeout(v, e)), u
        }
        return e = r(e) || 0, o(n) && (g = !!n.leading, f = (h = "maxWait" in n) ? l(r(n.maxWait) || 0, e) : f, y = "trailing" in n ? !!n.trailing : y), T.cancel = function() {
          void 0 !== d && clearTimeout(d), m = 0, s = p = a = d = void 0
        }, T.flush = function() {
          return void 0 === d ? u : b(i())
        }, T
      }
    },
    27335: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    95360: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    87416: (t, e, n) => {
      var o = n(7158),
        i = n(95360);
      t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == o(t)
      }
    },
    92346: (t, e, n) => {
      var o = n(78007);
      t.exports = function() {
        return o.Date.now()
      }
    },
    58972: (t, e, n) => {
      var o = n(48530),
        i = n(27335),
        r = n(87416),
        l = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        a = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (r(t)) return NaN;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = o(t);
        var n = c.test(t);
        return n || s.test(t) ? a(t.slice(2), n ? 2 : 8) : l.test(t) ? NaN : +t
      }
    },
    26677: (t, e, n) => {
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
    },
    23340: (t, e, n) => {
      "use strict";
      n.d(e, {
        BN: () => p,
        ER: () => m,
        Ej: () => g,
        UE: () => c,
        UU: () => s,
        cY: () => d,
        jD: () => u,
        rD: () => r
      });
      var o = n(84891);

      function i(t, e, n) {
        let {
          reference: i,
          floating: r
        } = t;
        const l = (0, o.TV)(e),
          c = (0, o.Dz)(e),
          s = (0, o.sq)(c),
          a = (0, o.C0)(e),
          f = "y" === l,
          u = i.x + i.width / 2 - r.width / 2,
          d = i.y + i.height / 2 - r.height / 2,
          p = i[s] / 2 - r[s] / 2;
        let m;
        switch (a) {
          case "top":
            m = {
              x: u,
              y: i.y - r.height
            };
            break;
          case "bottom":
            m = {
              x: u,
              y: i.y + i.height
            };
            break;
          case "right":
            m = {
              x: i.x + i.width,
              y: d
            };
            break;
          case "left":
            m = {
              x: i.x - r.width,
              y: d
            };
            break;
          default:
            m = {
              x: i.x,
              y: i.y
            }
        }
        switch ((0, o.Sg)(e)) {
          case "start":
            m[c] -= p * (n && f ? -1 : 1);
            break;
          case "end":
            m[c] += p * (n && f ? -1 : 1)
        }
        return m
      }
      const r = async (t, e, n) => {
        const {
          placement: o = "bottom",
          strategy: r = "absolute",
          middleware: l = [],
          platform: c
        } = n, s = l.filter(Boolean), a = await (null == c.isRTL ? void 0 : c.isRTL(e));
        let f = await c.getElementRects({
            reference: t,
            floating: e,
            strategy: r
          }),
          {
            x: u,
            y: d
          } = i(f, o, a),
          p = o,
          m = {},
          g = 0;
        for (let n = 0; n < s.length; n++) {
          const {
            name: l,
            fn: h
          } = s[n], {
            x: y,
            y: x,
            data: w,
            reset: v
          } = await h({
            x: u,
            y: d,
            initialPlacement: o,
            placement: p,
            strategy: r,
            middlewareData: m,
            rects: f,
            platform: c,
            elements: {
              reference: t,
              floating: e
            }
          });
          u = null != y ? y : u, d = null != x ? x : d, m = {
            ...m,
            [l]: {
              ...m[l],
              ...w
            }
          }, v && g <= 50 && (g++, "object" == typeof v && (v.placement && (p = v.placement), v.rects && (f = !0 === v.rects ? await c.getElementRects({
            reference: t,
            floating: e,
            strategy: r
          }) : v.rects), ({
            x: u,
            y: d
          } = i(f, p, a))), n = -1)
        }
        return {
          x: u,
          y: d,
          placement: p,
          strategy: r,
          middlewareData: m
        }
      };
      async function l(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: i,
          y: r,
          platform: l,
          rects: c,
          elements: s,
          strategy: a
        } = t, {
          boundary: f = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = (0, o._3)(e, t), g = (0, o.nI)(m), h = s[p ? "floating" === d ? "reference" : "floating" : d], y = (0, o.B1)(await l.getClippingRect({
          element: null == (n = await (null == l.isElement ? void 0 : l.isElement(h))) || n ? h : h.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(s.floating)),
          boundary: f,
          rootBoundary: u,
          strategy: a
        })), x = "floating" === d ? {
          ...c.floating,
          x: i,
          y: r
        } : c.reference, w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(s.floating)), v = await (null == l.isElement ? void 0 : l.isElement(w)) && await (null == l.getScale ? void 0 : l.getScale(w)) || {
          x: 1,
          y: 1
        }, b = (0, o.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: x,
          offsetParent: w,
          strategy: a
        }) : x);
        return {
          top: (y.top - b.top + g.top) / v.y,
          bottom: (b.bottom - y.bottom + g.bottom) / v.y,
          left: (y.left - b.left + g.left) / v.x,
          right: (b.right - y.right + g.right) / v.x
        }
      }
      const c = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: i,
              placement: r,
              rects: l,
              platform: c,
              elements: s,
              middlewareData: a
            } = e, {
              element: f,
              padding: u = 0
            } = (0, o._3)(t, e) || {};
            if (null == f) return {};
            const d = (0, o.nI)(u),
              p = {
                x: n,
                y: i
              },
              m = (0, o.Dz)(r),
              g = (0, o.sq)(m),
              h = await c.getDimensions(f),
              y = "y" === m,
              x = y ? "top" : "left",
              w = y ? "bottom" : "right",
              v = y ? "clientHeight" : "clientWidth",
              b = l.reference[g] + l.reference[m] - p[m] - l.floating[g],
              T = p[m] - l.reference[m],
              R = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(f));
            let E = R ? R[v] : 0;
            E && await (null == c.isElement ? void 0 : c.isElement(R)) || (E = s.floating[v] || l.floating[g]);
            const L = b / 2 - T / 2,
              _ = E / 2 - h[g] / 2 - 1,
              A = (0, o.jk)(d[x], _),
              O = (0, o.jk)(d[w], _),
              D = A,
              k = E - h[g] - O,
              S = E / 2 - h[g] / 2 + L,
              j = (0, o.qE)(D, S, k),
              C = !a.arrow && null != (0, o.Sg)(r) && S != j && l.reference[g] / 2 - (S < D ? A : O) - h[g] / 2 < 0,
              P = C ? S < D ? S - D : S - k : 0;
            return {
              [m]: p[m] + P,
              data: {
                [m]: j,
                centerOffset: S - j - P,
                ...C && {
                  alignmentOffset: P
                }
              },
              reset: C
            }
          }
        }),
        s = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, i;
              const {
                placement: r,
                middlewareData: c,
                rects: s,
                initialPlacement: a,
                platform: f,
                elements: u
              } = e, {
                mainAxis: d = !0,
                crossAxis: p = !0,
                fallbackPlacements: m,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: y = !0,
                ...x
              } = (0, o._3)(t, e);
              if (null != (n = c.arrow) && n.alignmentOffset) return {};
              const w = (0, o.C0)(r),
                v = (0, o.C0)(a) === a,
                b = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)),
                T = m || (v || !y ? [(0, o.bV)(a)] : (0, o.WJ)(a));
              m || "none" === h || T.push(...(0, o.lP)(a, y, h, b));
              const R = [a, ...T],
                E = await l(e, x),
                L = [];
              let _ = (null == (i = c.flip) ? void 0 : i.overflows) || [];
              if (d && L.push(E[w]), p) {
                const t = (0, o.w7)(r, s, b);
                L.push(E[t[0]], E[t[1]])
              }
              if (_ = [..._, {
                  placement: r,
                  overflows: L
                }], !L.every((t => t <= 0))) {
                var A, O;
                const t = ((null == (A = c.flip) ? void 0 : A.index) || 0) + 1,
                  e = R[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: _
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (O = _.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : O.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var D;
                    const t = null == (D = _.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : D[0];
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
        };

      function a(t, e) {
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
                strategy: i = "referenceHidden",
                ...r
              } = (0, o._3)(t, e);
              switch (i) {
                case "referenceHidden": {
                  const t = a(await l(e, {
                    ...r,
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
                  const t = a(await l(e, {
                    ...r,
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
                y: i
              } = e, r = await async function(t, e) {
                const {
                  placement: n,
                  platform: i,
                  elements: r
                } = t, l = await (null == i.isRTL ? void 0 : i.isRTL(r.floating)), c = (0, o.C0)(n), s = (0, o.Sg)(n), a = "y" === (0, o.TV)(n), f = ["left", "top"].includes(c) ? -1 : 1, u = l && a ? -1 : 1, d = (0, o._3)(e, t);
                let {
                  mainAxis: p,
                  crossAxis: m,
                  alignmentAxis: g
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
                return s && "number" == typeof g && (m = "end" === s ? -1 * g : g), a ? {
                  x: m * u,
                  y: p * f
                } : {
                  x: p * f,
                  y: m * u
                }
              }(e, t);
              return {
                x: n + r.x,
                y: i + r.y,
                data: r
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
                y: i,
                placement: r
              } = e, {
                mainAxis: c = !0,
                crossAxis: s = !1,
                limiter: a = {
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
                y: i
              }, d = await l(e, f), p = (0, o.TV)((0, o.C0)(r)), m = (0, o.PG)(p);
              let g = u[m],
                h = u[p];
              if (c) {
                const t = "y" === m ? "bottom" : "right",
                  e = g + d["y" === m ? "top" : "left"],
                  n = g - d[t];
                g = (0, o.qE)(e, g, n)
              }
              if (s) {
                const t = "y" === p ? "bottom" : "right",
                  e = h + d["y" === p ? "top" : "left"],
                  n = h - d[t];
                h = (0, o.qE)(e, h, n)
              }
              const y = a.fn({
                ...e,
                [m]: g,
                [p]: h
              });
              return {
                ...y,
                data: {
                  x: y.x - n,
                  y: y.y - i
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
                y: i,
                placement: r,
                rects: l,
                middlewareData: c
              } = e, {
                offset: s = 0,
                mainAxis: a = !0,
                crossAxis: f = !0
              } = (0, o._3)(t, e), u = {
                x: n,
                y: i
              }, d = (0, o.TV)(r), p = (0, o.PG)(d);
              let m = u[p],
                g = u[d];
              const h = (0, o._3)(s, e),
                y = "number" == typeof h ? {
                  mainAxis: h,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...h
                };
              if (a) {
                const t = "y" === p ? "height" : "width",
                  e = l.reference[p] - l.floating[t] + y.mainAxis,
                  n = l.reference[p] + l.reference[t] - y.mainAxis;
                m < e ? m = e : m > n && (m = n)
              }
              if (f) {
                var x, w;
                const t = "y" === p ? "width" : "height",
                  e = ["top", "left"].includes((0, o.C0)(r)),
                  n = l.reference[d] - l.floating[t] + (e && (null == (x = c.offset) ? void 0 : x[d]) || 0) + (e ? 0 : y.crossAxis),
                  i = l.reference[d] + l.reference[t] + (e ? 0 : (null == (w = c.offset) ? void 0 : w[d]) || 0) - (e ? y.crossAxis : 0);
                g < n ? g = n : g > i && (g = i)
              }
              return {
                [p]: m,
                [d]: g
              }
            }
          }
        },
        g = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              const {
                placement: n,
                rects: i,
                platform: r,
                elements: c
              } = e, {
                apply: s = (() => {}),
                ...a
              } = (0, o._3)(t, e), f = await l(e, a), u = (0, o.C0)(n), d = (0, o.Sg)(n), p = "y" === (0, o.TV)(n), {
                width: m,
                height: g
              } = i.floating;
              let h, y;
              "top" === u || "bottom" === u ? (h = u, y = d === (await (null == r.isRTL ? void 0 : r.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (y = u, h = "end" === d ? "top" : "bottom");
              const x = g - f[h],
                w = m - f[y],
                v = !e.middlewareData.shift;
              let b = x,
                T = w;
              if (p) {
                const t = m - f.left - f.right;
                T = d || v ? (0, o.jk)(w, t) : t
              } else {
                const t = g - f.top - f.bottom;
                b = d || v ? (0, o.jk)(x, t) : t
              }
              if (v && !d) {
                const t = (0, o.T9)(f.left, 0),
                  e = (0, o.T9)(f.right, 0),
                  n = (0, o.T9)(f.top, 0),
                  i = (0, o.T9)(f.bottom, 0);
                p ? T = m - 2 * (0 !== t || 0 !== e ? t + e : (0, o.T9)(f.left, f.right)) : b = g - 2 * (0 !== n || 0 !== i ? n + i : (0, o.T9)(f.top, f.bottom))
              }
              await s({
                ...e,
                availableWidth: T,
                availableHeight: b
              });
              const R = await r.getDimensions(c.floating);
              return m !== R.width || g !== R.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    31202: (t, e, n) => {
      "use strict";
      n.d(e, {
        ll: () => I,
        rD: () => V
      });
      var o = n(84891),
        i = n(23340);

      function r(t) {
        return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function l(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function c(t) {
        var e;
        return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function s(t) {
        return t instanceof Node || t instanceof l(t).Node
      }

      function a(t) {
        return t instanceof Element || t instanceof l(t).Element
      }

      function f(t) {
        return t instanceof HTMLElement || t instanceof l(t).HTMLElement
      }

      function u(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof l(t).ShadowRoot)
      }

      function d(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: i
        } = y(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i)
      }

      function p(t) {
        return ["table", "td", "th"].includes(r(t))
      }

      function m(t) {
        const e = g(),
          n = y(t);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function g() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function h(t) {
        return ["html", "body", "#document"].includes(r(t))
      }

      function y(t) {
        return l(t).getComputedStyle(t)
      }

      function x(t) {
        return a(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function w(t) {
        if ("html" === r(t)) return t;
        const e = t.assignedSlot || t.parentNode || u(t) && t.host || c(t);
        return u(e) ? e.host : e
      }

      function v(t) {
        const e = w(t);
        return h(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : f(e) && d(e) ? e : v(e)
      }

      function b(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = v(t),
          r = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          c = l(i);
        return r ? e.concat(c, c.visualViewport || [], d(i) ? i : [], c.frameElement && n ? b(c.frameElement) : []) : e.concat(i, b(i, [], n))
      }

      function T(t) {
        const e = y(t);
        let n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0;
        const r = f(t),
          l = r ? t.offsetWidth : n,
          c = r ? t.offsetHeight : i,
          s = (0, o.LI)(n) !== l || (0, o.LI)(i) !== c;
        return s && (n = l, i = c), {
          width: n,
          height: i,
          $: s
        }
      }

      function R(t) {
        return a(t) ? t : t.contextElement
      }

      function E(t) {
        const e = R(t);
        if (!f(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          {
            width: i,
            height: r,
            $: l
          } = T(e);
        let c = (l ? (0, o.LI)(n.width) : n.width) / i,
          s = (l ? (0, o.LI)(n.height) : n.height) / r;
        return c && Number.isFinite(c) || (c = 1), s && Number.isFinite(s) || (s = 1), {
          x: c,
          y: s
        }
      }
      const L = (0, o.Jx)(0);

      function _(t) {
        const e = l(t);
        return g() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : L
      }

      function A(t, e, n, i) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          c = R(t);
        let s = (0, o.Jx)(1);
        e && (i ? a(i) && (s = E(i)) : s = E(t));
        const f = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== l(t)) && e
        }(c, n, i) ? _(c) : (0, o.Jx)(0);
        let u = (r.left + f.x) / s.x,
          d = (r.top + f.y) / s.y,
          p = r.width / s.x,
          m = r.height / s.y;
        if (c) {
          const t = l(c),
            e = i && a(i) ? l(i) : i;
          let n = t.frameElement;
          for (; n && i && e !== t;) {
            const t = E(n),
              e = n.getBoundingClientRect(),
              o = y(n),
              i = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              r = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            u *= t.x, d *= t.y, p *= t.x, m *= t.y, u += i, d += r, n = l(n).frameElement
          }
        }
        return (0, o.B1)({
          width: p,
          height: m,
          x: u,
          y: d
        })
      }

      function O(t) {
        return A(c(t)).left + x(t).scrollLeft
      }

      function D(t, e, n) {
        let i;
        if ("viewport" === e) i = function(t, e) {
          const n = l(t),
            o = c(t),
            i = n.visualViewport;
          let r = o.clientWidth,
            s = o.clientHeight,
            a = 0,
            f = 0;
          if (i) {
            r = i.width, s = i.height;
            const t = g();
            (!t || t && "fixed" === e) && (a = i.offsetLeft, f = i.offsetTop)
          }
          return {
            width: r,
            height: s,
            x: a,
            y: f
          }
        }(t, n);
        else if ("document" === e) i = function(t) {
          const e = c(t),
            n = x(t),
            i = t.ownerDocument.body,
            r = (0, o.T9)(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
            l = (0, o.T9)(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
          let s = -n.scrollLeft + O(t);
          const a = -n.scrollTop;
          return "rtl" === y(i).direction && (s += (0, o.T9)(e.clientWidth, i.clientWidth) - r), {
            width: r,
            height: l,
            x: s,
            y: a
          }
        }(c(t));
        else if (a(e)) i = function(t, e) {
          const n = A(t, !0, "fixed" === e),
            i = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            l = f(t) ? E(t) : (0, o.Jx)(1);
          return {
            width: t.clientWidth * l.x,
            height: t.clientHeight * l.y,
            x: r * l.x,
            y: i * l.y
          }
        }(e, n);
        else {
          const n = _(t);
          i = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
          }
        }
        return (0, o.B1)(i)
      }

      function k(t, e) {
        const n = w(t);
        return !(n === e || !a(n) || h(n)) && ("fixed" === y(n).position || k(n, e))
      }

      function S(t, e, n) {
        const i = f(e),
          l = c(e),
          s = "fixed" === n,
          a = A(t, !0, s, e);
        let u = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const p = (0, o.Jx)(0);
        if (i || !i && !s)
          if (("body" !== r(e) || d(l)) && (u = x(e)), i) {
            const t = A(e, !0, s, e);
            p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
          } else l && (p.x = O(l));
        return {
          x: a.left + u.scrollLeft - p.x,
          y: a.top + u.scrollTop - p.y,
          width: a.width,
          height: a.height
        }
      }

      function j(t, e) {
        return f(t) && "fixed" !== y(t).position ? e ? e(t) : t.offsetParent : null
      }

      function C(t, e) {
        const n = l(t);
        if (!f(t)) return n;
        let o = j(t, e);
        for (; o && p(o) && "static" === y(o).position;) o = j(o, e);
        return o && ("html" === r(o) || "body" === r(o) && "static" === y(o).position && !m(o)) ? n : o || function(t) {
          let e = w(t);
          for (; f(e) && !h(e);) {
            if (m(e)) return e;
            e = w(e)
          }
          return null
        }(t) || n
      }
      const P = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            rect: e,
            offsetParent: n,
            strategy: i
          } = t;
          const l = f(n),
            s = c(n);
          if (n === s) return e;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = (0, o.Jx)(1);
          const p = (0, o.Jx)(0);
          if ((l || !l && "fixed" !== i) && (("body" !== r(n) || d(s)) && (a = x(n)), f(n))) {
            const t = A(n);
            u = E(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
          }
          return {
            width: e.width * u.x,
            height: e.height * u.y,
            x: e.x * u.x - a.scrollLeft * u.x + p.x,
            y: e.y * u.y - a.scrollTop * u.y + p.y
          }
        },
        getDocumentElement: c,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: i,
            strategy: l
          } = t;
          const c = [..."clippingAncestors" === n ? function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = b(t, [], !1).filter((t => a(t) && "body" !== r(t))),
                i = null;
              const l = "fixed" === y(t).position;
              let c = l ? w(t) : t;
              for (; a(c) && !h(c);) {
                const e = y(c),
                  n = m(c);
                n || "fixed" !== e.position || (i = null), (l ? !n && !i : !n && "static" === e.position && i && ["absolute", "fixed"].includes(i.position) || d(c) && !n && k(t, c)) ? o = o.filter((t => t !== c)) : i = e, c = w(c)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), i],
            s = c[0],
            f = c.reduce(((t, n) => {
              const i = D(e, n, l);
              return t.top = (0, o.T9)(i.top, t.top), t.right = (0, o.jk)(i.right, t.right), t.bottom = (0, o.jk)(i.bottom, t.bottom), t.left = (0, o.T9)(i.left, t.left), t
            }), D(e, s, l));
          return {
            width: f.right - f.left,
            height: f.bottom - f.top,
            x: f.left,
            y: f.top
          }
        },
        getOffsetParent: C,
        getElementRects: async function(t) {
          let {
            reference: e,
            floating: n,
            strategy: o
          } = t;
          const i = this.getOffsetParent || C,
            r = this.getDimensions;
          return {
            reference: S(e, await i(n), o),
            floating: {
              x: 0,
              y: 0,
              ...await r(n)
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
        isElement: a,
        isRTL: function(t) {
          return "rtl" === y(t).direction
        }
      };

      function I(t, e, n, i) {
        void 0 === i && (i = {});
        const {
          ancestorScroll: r = !0,
          ancestorResize: l = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: a = "function" == typeof IntersectionObserver,
          animationFrame: f = !1
        } = i, u = R(t), d = r || l ? [...u ? b(u) : [], ...b(e)] : [];
        d.forEach((t => {
          r && t.addEventListener("scroll", n, {
            passive: !0
          }), l && t.addEventListener("resize", n)
        }));
        const p = u && a ? function(t, e) {
          let n, i = null;
          const r = c(t);

          function l() {
            clearTimeout(n), i && i.disconnect(), i = null
          }
          return function c(s, a) {
            void 0 === s && (s = !1), void 0 === a && (a = 1), l();
            const {
              left: f,
              top: u,
              width: d,
              height: p
            } = t.getBoundingClientRect();
            if (s || e(), !d || !p) return;
            const m = {
              rootMargin: -(0, o.RI)(u) + "px " + -(0, o.RI)(r.clientWidth - (f + d)) + "px " + -(0, o.RI)(r.clientHeight - (u + p)) + "px " + -(0, o.RI)(f) + "px",
              threshold: (0, o.T9)(0, (0, o.jk)(1, a)) || 1
            };
            let g = !0;

            function h(t) {
              const e = t[0].intersectionRatio;
              if (e !== a) {
                if (!g) return c();
                e ? c(!1, e) : n = setTimeout((() => {
                  c(!1, 1e-7)
                }), 100)
              }
              g = !1
            }
            try {
              i = new IntersectionObserver(h, {
                ...m,
                root: r.ownerDocument
              })
            } catch (t) {
              i = new IntersectionObserver(h, m)
            }
            i.observe(t)
          }(!0), l
        }(u, n) : null;
        let m, g = -1,
          h = null;
        s && (h = new ResizeObserver((t => {
          let [o] = t;
          o && o.target === u && h && (h.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame((() => {
            h && h.observe(e)
          }))), n()
        })), u && !f && h.observe(u), h.observe(e));
        let y = f ? A(t) : null;
        return f && function e() {
          const o = A(t);
          !y || o.x === y.x && o.y === y.y && o.width === y.width && o.height === y.height || n(), y = o, m = requestAnimationFrame(e)
        }(), n(), () => {
          d.forEach((t => {
            r && t.removeEventListener("scroll", n), l && t.removeEventListener("resize", n)
          })), p && p(), h && h.disconnect(), h = null, f && cancelAnimationFrame(m)
        }
      }
      const V = (t, e, n) => {
        const o = new Map,
          r = {
            platform: P,
            ...n
          },
          l = {
            ...r.platform,
            _c: o
          };
        return (0, i.rD)(t, e, {
          ...r,
          platform: l
        })
      }
    },
    84891: (t, e, n) => {
      "use strict";
      n.d(e, {
        B1: () => L,
        C0: () => p,
        Dz: () => x,
        Jx: () => s,
        LI: () => l,
        PG: () => g,
        RI: () => c,
        Sg: () => m,
        T9: () => r,
        TV: () => y,
        WJ: () => v,
        _3: () => d,
        bV: () => R,
        jk: () => i,
        lP: () => T,
        nI: () => E,
        qE: () => u,
        r_: () => o,
        sq: () => h,
        w7: () => w
      });
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        r = Math.max,
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
        return r(t, i(e, n))
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

      function g(t) {
        return "x" === t ? "y" : "x"
      }

      function h(t) {
        return "y" === t ? "height" : "width"
      }

      function y(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function x(t) {
        return g(y(t))
      }

      function w(t, e, n) {
        void 0 === n && (n = !1);
        const o = m(t),
          i = x(t),
          r = h(i);
        let l = "x" === i ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
        return e.reference[r] > e.floating[r] && (l = R(l)), [l, R(l)]
      }

      function v(t) {
        const e = R(t);
        return [b(t), e, b(e)]
      }

      function b(t) {
        return t.replace(/start|end/g, (t => f[t]))
      }

      function T(t, e, n, o) {
        const i = m(t);
        let r = function(t, e, n) {
          const o = ["left", "right"],
            i = ["right", "left"],
            r = ["top", "bottom"],
            l = ["bottom", "top"];
          switch (t) {
            case "top":
            case "bottom":
              return n ? e ? i : o : e ? o : i;
            case "left":
            case "right":
              return e ? r : l;
            default:
              return []
          }
        }(p(t), "start" === n, o);
        return i && (r = r.map((t => t + "-" + i)), e && (r = r.concat(r.map(b)))), r
      }

      function R(t) {
        return t.replace(/left|right|bottom|top/g, (t => a[t]))
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

      function L(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height
        }
      }
    }
  }
]);