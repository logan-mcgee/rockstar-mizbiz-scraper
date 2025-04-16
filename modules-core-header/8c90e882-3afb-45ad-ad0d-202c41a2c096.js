! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "8c90e882-3afb-45ad-ad0d-202c41a2c096", t._sentryDebugIdIdentifier = "sentry-dbid-8c90e882-3afb-45ad-ad0d-202c41a2c096")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1134], {
    91270: (t, e, n) => {
      n.d(e, {
        Eq: () => s
      });
      var o = new WeakMap,
        r = new WeakMap,
        i = {},
        l = 0,
        a = function(t) {
          return t && (t.host || a(t.parentNode))
        },
        s = function(t, e, n) {
          void 0 === n && (n = "data-aria-hidden");
          var s = Array.from(Array.isArray(t) ? t : [t]),
            c = e || function(t) {
              return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body
            }(t);
          return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live]"))), function(t, e, n, s) {
            var c = function(t, e) {
              return e.map((function(e) {
                if (t.contains(e)) return e;
                var n = a(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
              })).filter((function(t) {
                return Boolean(t)
              }))
            }(e, Array.isArray(t) ? t : [t]);
            i[n] || (i[n] = new WeakMap);
            var f = i[n],
              u = [],
              d = new Set,
              p = new Set(c),
              m = function(t) {
                t && !d.has(t) && (d.add(t), m(t.parentNode))
              };
            c.forEach(m);
            var g = function(t) {
              t && !p.has(t) && Array.prototype.forEach.call(t.children, (function(t) {
                if (d.has(t)) g(t);
                else {
                  var e = t.getAttribute(s),
                    i = null !== e && "false" !== e,
                    l = (o.get(t) || 0) + 1,
                    a = (f.get(t) || 0) + 1;
                  o.set(t, l), f.set(t, a), u.push(t), 1 === l && i && r.set(t, !0), 1 === a && t.setAttribute(n, "true"), i || t.setAttribute(s, "true")
                }
              }))
            };
            return g(e), d.clear(), l++,
              function() {
                u.forEach((function(t) {
                  var e = o.get(t) - 1,
                    i = f.get(t) - 1;
                  o.set(t, e), f.set(t, i), e || (r.has(t) || t.removeAttribute(s), r.delete(t)), i || t.removeAttribute(n)
                })), --l || (o = new WeakMap, o = new WeakMap, r = new WeakMap, i = {})
              }
          }(s, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    18001: (t, e, n) => {
      n.d(e, {
        BN: () => p,
        ER: () => m,
        Ej: () => g,
        UE: () => a,
        UU: () => s,
        cY: () => d,
        jD: () => u,
        rD: () => i
      });
      var o = n(90969);

      function r(t, e, n) {
        let {
          reference: r,
          floating: i
        } = t;
        const l = (0, o.TV)(e),
          a = (0, o.Dz)(e),
          s = (0, o.sq)(a),
          c = (0, o.C0)(e),
          f = "y" === l,
          u = r.x + r.width / 2 - i.width / 2,
          d = r.y + r.height / 2 - i.height / 2,
          p = r[s] / 2 - i[s] / 2;
        let m;
        switch (c) {
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
          middleware: l = [],
          platform: a
        } = n, s = l.filter(Boolean), c = await (null == a.isRTL ? void 0 : a.isRTL(e));
        let f = await a.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }),
          {
            x: u,
            y: d
          } = r(f, o, c),
          p = o,
          m = {},
          g = 0;
        for (let n = 0; n < s.length; n++) {
          const {
            name: l,
            fn: h
          } = s[n], {
            x: y,
            y: w,
            data: x,
            reset: b
          } = await h({
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
          u = null != y ? y : u, d = null != w ? w : d, m = {
            ...m,
            [l]: {
              ...m[l],
              ...x
            }
          }, b && g <= 50 && (g++, "object" == typeof b && (b.placement && (p = b.placement), b.rects && (f = !0 === b.rects ? await a.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }) : b.rects), ({
            x: u,
            y: d
          } = r(f, p, c))), n = -1)
        }
        return {
          x: u,
          y: d,
          placement: p,
          strategy: i,
          middlewareData: m
        }
      };
      async function l(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: r,
          y: i,
          platform: l,
          rects: a,
          elements: s,
          strategy: c
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
          strategy: c
        })), w = "floating" === d ? {
          ...a.floating,
          x: r,
          y: i
        } : a.reference, x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(s.floating)), b = await (null == l.isElement ? void 0 : l.isElement(x)) && await (null == l.getScale ? void 0 : l.getScale(x)) || {
          x: 1,
          y: 1
        }, v = (0, o.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: w,
          offsetParent: x,
          strategy: c
        }) : w);
        return {
          top: (y.top - v.top + g.top) / b.y,
          bottom: (v.bottom - y.bottom + g.bottom) / b.y,
          left: (y.left - v.left + g.left) / b.x,
          right: (v.right - y.right + g.right) / b.x
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
              rects: l,
              platform: a,
              elements: s,
              middlewareData: c
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
              g = (0, o.sq)(m),
              h = await a.getDimensions(f),
              y = "y" === m,
              w = y ? "top" : "left",
              x = y ? "bottom" : "right",
              b = y ? "clientHeight" : "clientWidth",
              v = l.reference[g] + l.reference[m] - p[m] - l.floating[g],
              E = p[m] - l.reference[m],
              R = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(f));
            let T = R ? R[b] : 0;
            T && await (null == a.isElement ? void 0 : a.isElement(R)) || (T = s.floating[b] || l.floating[g]);
            const A = v / 2 - E / 2,
              k = T / 2 - h[g] / 2 - 1,
              L = (0, o.jk)(d[w], k),
              S = (0, o.jk)(d[x], k),
              D = L,
              _ = T - h[g] - S,
              C = T / 2 - h[g] / 2 + A,
              P = (0, o.qE)(D, C, _),
              M = !c.arrow && null != (0, o.Sg)(i) && C != P && l.reference[g] / 2 - (C < D ? L : S) - h[g] / 2 < 0,
              O = M ? C < D ? C - D : C - _ : 0;
            return {
              [m]: p[m] + O,
              data: {
                [m]: P,
                centerOffset: C - P - O,
                ...M && {
                  alignmentOffset: O
                }
              },
              reset: M
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
                initialPlacement: c,
                platform: f,
                elements: u
              } = e, {
                mainAxis: d = !0,
                crossAxis: p = !0,
                fallbackPlacements: m,
                fallbackStrategy: g = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: y = !0,
                ...w
              } = (0, o._3)(t, e);
              if (null != (n = a.arrow) && n.alignmentOffset) return {};
              const x = (0, o.C0)(i),
                b = (0, o.C0)(c) === c,
                v = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)),
                E = m || (b || !y ? [(0, o.bV)(c)] : (0, o.WJ)(c));
              m || "none" === h || E.push(...(0, o.lP)(c, y, h, v));
              const R = [c, ...E],
                T = await l(e, w),
                A = [];
              let k = (null == (r = a.flip) ? void 0 : r.overflows) || [];
              if (d && A.push(T[x]), p) {
                const t = (0, o.w7)(i, s, v);
                A.push(T[t[0]], T[t[1]])
              }
              if (k = [...k, {
                  placement: i,
                  overflows: A
                }], !A.every((t => t <= 0))) {
                var L, S;
                const t = ((null == (L = a.flip) ? void 0 : L.index) || 0) + 1,
                  e = R[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: k
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (S = k.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : S.placement;
                if (!n) switch (g) {
                  case "bestFit": {
                    var D;
                    const t = null == (D = k.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : D[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = c
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

      function c(t, e) {
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
                  const t = c(await l(e, {
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
                  const t = c(await l(e, {
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
                } = t, l = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), a = (0, o.C0)(n), s = (0, o.Sg)(n), c = "y" === (0, o.TV)(n), f = ["left", "top"].includes(a) ? -1 : 1, u = l && c ? -1 : 1, d = (0, o._3)(e, t);
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
                return s && "number" == typeof g && (m = "end" === s ? -1 * g : g), c ? {
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
                ...f
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = await l(e, f), p = (0, o.TV)((0, o.C0)(i)), m = (0, o.PG)(p);
              let g = u[m],
                h = u[p];
              if (a) {
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
              const y = c.fn({
                ...e,
                [m]: g,
                [p]: h
              });
              return {
                ...y,
                data: {
                  x: y.x - n,
                  y: y.y - r
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
                rects: l,
                middlewareData: a
              } = e, {
                offset: s = 0,
                mainAxis: c = !0,
                crossAxis: f = !0
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = (0, o.TV)(i), p = (0, o.PG)(d);
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
              if (c) {
                const t = "y" === p ? "height" : "width",
                  e = l.reference[p] - l.floating[t] + y.mainAxis,
                  n = l.reference[p] + l.reference[t] - y.mainAxis;
                m < e ? m = e : m > n && (m = n)
              }
              if (f) {
                var w, x;
                const t = "y" === p ? "width" : "height",
                  e = ["top", "left"].includes((0, o.C0)(i)),
                  n = l.reference[d] - l.floating[t] + (e && (null == (w = a.offset) ? void 0 : w[d]) || 0) + (e ? 0 : y.crossAxis),
                  r = l.reference[d] + l.reference[t] + (e ? 0 : (null == (x = a.offset) ? void 0 : x[d]) || 0) - (e ? y.crossAxis : 0);
                g < n ? g = n : g > r && (g = r)
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
                rects: r,
                platform: i,
                elements: a
              } = e, {
                apply: s = (() => {}),
                ...c
              } = (0, o._3)(t, e), f = await l(e, c), u = (0, o.C0)(n), d = (0, o.Sg)(n), p = "y" === (0, o.TV)(n), {
                width: m,
                height: g
              } = r.floating;
              let h, y;
              "top" === u || "bottom" === u ? (h = u, y = d === (await (null == i.isRTL ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = u, h = "end" === d ? "top" : "bottom");
              const w = g - f[h],
                x = m - f[y],
                b = !e.middlewareData.shift;
              let v = w,
                E = x;
              if (p) {
                const t = m - f.left - f.right;
                E = d || b ? (0, o.jk)(x, t) : t
              } else {
                const t = g - f.top - f.bottom;
                v = d || b ? (0, o.jk)(w, t) : t
              }
              if (b && !d) {
                const t = (0, o.T9)(f.left, 0),
                  e = (0, o.T9)(f.right, 0),
                  n = (0, o.T9)(f.top, 0),
                  r = (0, o.T9)(f.bottom, 0);
                p ? E = m - 2 * (0 !== t || 0 !== e ? t + e : (0, o.T9)(f.left, f.right)) : v = g - 2 * (0 !== n || 0 !== r ? n + r : (0, o.T9)(f.top, f.bottom))
              }
              await s({
                ...e,
                availableWidth: E,
                availableHeight: v
              });
              const R = await i.getDimensions(a.floating);
              return m !== R.width || g !== R.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    77102: (t, e, n) => {
      n.d(e, {
        ll: () => W,
        rD: () => I
      });
      var o = n(90969),
        r = n(18001);

      function i(t) {
        return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function l(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function a(t) {
        var e;
        return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function s(t) {
        return t instanceof Node || t instanceof l(t).Node
      }

      function c(t) {
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
          display: r
        } = y(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r)
      }

      function p(t) {
        return ["table", "td", "th"].includes(i(t))
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
        return ["html", "body", "#document"].includes(i(t))
      }

      function y(t) {
        return l(t).getComputedStyle(t)
      }

      function w(t) {
        return c(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function x(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || u(t) && t.host || a(t);
        return u(e) ? e.host : e
      }

      function b(t) {
        const e = x(t);
        return h(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : f(e) && d(e) ? e : b(e)
      }

      function v(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = b(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          a = l(r);
        return i ? e.concat(a, a.visualViewport || [], d(r) ? r : [], a.frameElement && n ? v(a.frameElement) : []) : e.concat(r, v(r, [], n))
      }

      function E(t) {
        const e = y(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const i = f(t),
          l = i ? t.offsetWidth : n,
          a = i ? t.offsetHeight : r,
          s = (0, o.LI)(n) !== l || (0, o.LI)(r) !== a;
        return s && (n = l, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function R(t) {
        return c(t) ? t : t.contextElement
      }

      function T(t) {
        const e = R(t);
        if (!f(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: l
          } = E(e);
        let a = (l ? (0, o.LI)(n.width) : n.width) / r,
          s = (l ? (0, o.LI)(n.height) : n.height) / i;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const A = (0, o.Jx)(0);

      function k(t) {
        const e = l(t);
        return g() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : A
      }

      function L(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          a = R(t);
        let s = (0, o.Jx)(1);
        e && (r ? c(r) && (s = T(r)) : s = T(t));
        const f = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== l(t)) && e
        }(a, n, r) ? k(a) : (0, o.Jx)(0);
        let u = (i.left + f.x) / s.x,
          d = (i.top + f.y) / s.y,
          p = i.width / s.x,
          m = i.height / s.y;
        if (a) {
          const t = l(a),
            e = r && c(r) ? l(r) : r;
          let n = t.frameElement;
          for (; n && r && e !== t;) {
            const t = T(n),
              e = n.getBoundingClientRect(),
              o = y(n),
              r = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              i = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            u *= t.x, d *= t.y, p *= t.x, m *= t.y, u += r, d += i, n = l(n).frameElement
          }
        }
        return (0, o.B1)({
          width: p,
          height: m,
          x: u,
          y: d
        })
      }

      function S(t) {
        return L(a(t)).left + w(t).scrollLeft
      }

      function D(t, e, n) {
        let r;
        if ("viewport" === e) r = function(t, e) {
          const n = l(t),
            o = a(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            s = o.clientHeight,
            c = 0,
            f = 0;
          if (r) {
            i = r.width, s = r.height;
            const t = g();
            (!t || t && "fixed" === e) && (c = r.offsetLeft, f = r.offsetTop)
          }
          return {
            width: i,
            height: s,
            x: c,
            y: f
          }
        }(t, n);
        else if ("document" === e) r = function(t) {
          const e = a(t),
            n = w(t),
            r = t.ownerDocument.body,
            i = (0, o.T9)(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
            l = (0, o.T9)(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + S(t);
          const c = -n.scrollTop;
          return "rtl" === y(r).direction && (s += (0, o.T9)(e.clientWidth, r.clientWidth) - i), {
            width: i,
            height: l,
            x: s,
            y: c
          }
        }(a(t));
        else if (c(e)) r = function(t, e) {
          const n = L(t, !0, "fixed" === e),
            r = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            l = f(t) ? T(t) : (0, o.Jx)(1);
          return {
            width: t.clientWidth * l.x,
            height: t.clientHeight * l.y,
            x: i * l.x,
            y: r * l.y
          }
        }(e, n);
        else {
          const n = k(t);
          r = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
          }
        }
        return (0, o.B1)(r)
      }

      function _(t, e) {
        const n = x(t);
        return !(n === e || !c(n) || h(n)) && ("fixed" === y(n).position || _(n, e))
      }

      function C(t, e, n) {
        const r = f(e),
          l = a(e),
          s = "fixed" === n,
          c = L(t, !0, s, e);
        let u = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const p = (0, o.Jx)(0);
        if (r || !r && !s)
          if (("body" !== i(e) || d(l)) && (u = w(e)), r) {
            const t = L(e, !0, s, e);
            p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
          } else l && (p.x = S(l));
        return {
          x: c.left + u.scrollLeft - p.x,
          y: c.top + u.scrollTop - p.y,
          width: c.width,
          height: c.height
        }
      }

      function P(t, e) {
        return f(t) && "fixed" !== y(t).position ? e ? e(t) : t.offsetParent : null
      }

      function M(t, e) {
        const n = l(t);
        if (!f(t)) return n;
        let o = P(t, e);
        for (; o && p(o) && "static" === y(o).position;) o = P(o, e);
        return o && ("html" === i(o) || "body" === i(o) && "static" === y(o).position && !m(o)) ? n : o || function(t) {
          let e = x(t);
          for (; f(e) && !h(e);) {
            if (m(e)) return e;
            e = x(e)
          }
          return null
        }(t) || n
      }
      const O = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            rect: e,
            offsetParent: n,
            strategy: r
          } = t;
          const l = f(n),
            s = a(n);
          if (n === s) return e;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = (0, o.Jx)(1);
          const p = (0, o.Jx)(0);
          if ((l || !l && "fixed" !== r) && (("body" !== i(n) || d(s)) && (c = w(n)), f(n))) {
            const t = L(n);
            u = T(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
          }
          return {
            width: e.width * u.x,
            height: e.height * u.y,
            x: e.x * u.x - c.scrollLeft * u.x + p.x,
            y: e.y * u.y - c.scrollTop * u.y + p.y
          }
        },
        getDocumentElement: a,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: l
          } = t;
          const a = [..."clippingAncestors" === n ? function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = v(t, [], !1).filter((t => c(t) && "body" !== i(t))),
                r = null;
              const l = "fixed" === y(t).position;
              let a = l ? x(t) : t;
              for (; c(a) && !h(a);) {
                const e = y(a),
                  n = m(a);
                n || "fixed" !== e.position || (r = null), (l ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || d(a) && !n && _(t, a)) ? o = o.filter((t => t !== a)) : r = e, a = x(a)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), r],
            s = a[0],
            f = a.reduce(((t, n) => {
              const r = D(e, n, l);
              return t.top = (0, o.T9)(r.top, t.top), t.right = (0, o.jk)(r.right, t.right), t.bottom = (0, o.jk)(r.bottom, t.bottom), t.left = (0, o.T9)(r.left, t.left), t
            }), D(e, s, l));
          return {
            width: f.right - f.left,
            height: f.bottom - f.top,
            x: f.left,
            y: f.top
          }
        },
        getOffsetParent: M,
        getElementRects: async function(t) {
          let {
            reference: e,
            floating: n,
            strategy: o
          } = t;
          const r = this.getOffsetParent || M,
            i = this.getDimensions;
          return {
            reference: C(e, await r(n), o),
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
          return E(t)
        },
        getScale: T,
        isElement: c,
        isRTL: function(t) {
          return "rtl" === y(t).direction
        }
      };

      function W(t, e, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: l = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: c = "function" == typeof IntersectionObserver,
          animationFrame: f = !1
        } = r, u = R(t), d = i || l ? [...u ? v(u) : [], ...v(e)] : [];
        d.forEach((t => {
          i && t.addEventListener("scroll", n, {
            passive: !0
          }), l && t.addEventListener("resize", n)
        }));
        const p = u && c ? function(t, e) {
          let n, r = null;
          const i = a(t);

          function l() {
            clearTimeout(n), r && r.disconnect(), r = null
          }
          return function a(s, c) {
            void 0 === s && (s = !1), void 0 === c && (c = 1), l();
            const {
              left: f,
              top: u,
              width: d,
              height: p
            } = t.getBoundingClientRect();
            if (s || e(), !d || !p) return;
            const m = {
              rootMargin: -(0, o.RI)(u) + "px " + -(0, o.RI)(i.clientWidth - (f + d)) + "px " + -(0, o.RI)(i.clientHeight - (u + p)) + "px " + -(0, o.RI)(f) + "px",
              threshold: (0, o.T9)(0, (0, o.jk)(1, c)) || 1
            };
            let g = !0;

            function h(t) {
              const e = t[0].intersectionRatio;
              if (e !== c) {
                if (!g) return a();
                e ? a(!1, e) : n = setTimeout((() => {
                  a(!1, 1e-7)
                }), 100)
              }
              g = !1
            }
            try {
              r = new IntersectionObserver(h, {
                ...m,
                root: i.ownerDocument
              })
            } catch (t) {
              r = new IntersectionObserver(h, m)
            }
            r.observe(t)
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
        let y = f ? L(t) : null;
        return f && function e() {
          const o = L(t);
          !y || o.x === y.x && o.y === y.y && o.width === y.width && o.height === y.height || n(), y = o, m = requestAnimationFrame(e)
        }(), n(), () => {
          d.forEach((t => {
            i && t.removeEventListener("scroll", n), l && t.removeEventListener("resize", n)
          })), p && p(), h && h.disconnect(), h = null, f && cancelAnimationFrame(m)
        }
      }
      const I = (t, e, n) => {
        const o = new Map,
          i = {
            platform: O,
            ...n
          },
          l = {
            ...i.platform,
            _c: o
          };
        return (0, r.rD)(t, e, {
          ...i,
          platform: l
        })
      }
    },
    4519: (t, e, n) => {
      n.d(e, {
        UE: () => a,
        we: () => p
      });
      var o = n(18001),
        r = n(77102),
        i = n(62229),
        l = n(44853);
      const a = t => ({
        name: "arrow",
        options: t,
        fn(e) {
          const {
            element: n,
            padding: r
          } = "function" == typeof t ? t(e) : t;
          return n && (i = n, {}.hasOwnProperty.call(i, "current")) ? null != n.current ? (0, o.UE)({
            element: n.current,
            padding: r
          }).fn(e) : {} : n ? (0, o.UE)({
            element: n,
            padding: r
          }).fn(e) : {};
          var i
        }
      });
      var s = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

      function c(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        let n, o, r;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if (n = t.length, n != e.length) return !1;
            for (o = n; 0 != o--;)
              if (!c(t[o], e[o])) return !1;
            return !0
          }
          if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length) return !1;
          for (o = n; 0 != o--;)
            if (!{}.hasOwnProperty.call(e, r[o])) return !1;
          for (o = n; 0 != o--;) {
            const n = r[o];
            if (!("_owner" === n && t.$$typeof || c(t[n], e[n]))) return !1
          }
          return !0
        }
        return t != t && e != e
      }

      function f(t) {
        return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function u(t, e) {
        const n = f(t);
        return Math.round(e * n) / n
      }

      function d(t) {
        const e = i.useRef(t);
        return s((() => {
          e.current = t
        })), e
      }

      function p(t) {
        void 0 === t && (t = {});
        const {
          placement: e = "bottom",
          strategy: n = "absolute",
          middleware: o = [],
          platform: a,
          elements: {
            reference: p,
            floating: m
          } = {},
          transform: g = !0,
          whileElementsMounted: h,
          open: y
        } = t, [w, x] = i.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: e,
          middlewareData: {},
          isPositioned: !1
        }), [b, v] = i.useState(o);
        c(b, o) || v(o);
        const [E, R] = i.useState(null), [T, A] = i.useState(null), k = i.useCallback((t => {
          t != _.current && (_.current = t, R(t))
        }), [R]), L = i.useCallback((t => {
          t !== C.current && (C.current = t, A(t))
        }), [A]), S = p || E, D = m || T, _ = i.useRef(null), C = i.useRef(null), P = i.useRef(w), M = d(h), O = d(a), W = i.useCallback((() => {
          if (!_.current || !C.current) return;
          const t = {
            placement: e,
            strategy: n,
            middleware: b
          };
          O.current && (t.platform = O.current), (0, r.rD)(_.current, C.current, t).then((t => {
            const e = {
              ...t,
              isPositioned: !0
            };
            I.current && !c(P.current, e) && (P.current = e, l.flushSync((() => {
              x(e)
            })))
          }))
        }), [b, e, n, O]);
        s((() => {
          !1 === y && P.current.isPositioned && (P.current.isPositioned = !1, x((t => ({
            ...t,
            isPositioned: !1
          }))))
        }), [y]);
        const I = i.useRef(!1);
        s((() => (I.current = !0, () => {
          I.current = !1
        })), []), s((() => {
          if (S && (_.current = S), D && (C.current = D), S && D) {
            if (M.current) return M.current(S, D, W);
            W()
          }
        }), [S, D, W, M]);
        const B = i.useMemo((() => ({
            reference: _,
            floating: C,
            setReference: k,
            setFloating: L
          })), [k, L]),
          H = i.useMemo((() => ({
            reference: S,
            floating: D
          })), [S, D]),
          V = i.useMemo((() => {
            const t = {
              position: n,
              left: 0,
              top: 0
            };
            if (!H.floating) return t;
            const e = u(H.floating, w.x),
              o = u(H.floating, w.y);
            return g ? {
              ...t,
              transform: "translate(" + e + "px, " + o + "px)",
              ...f(H.floating) >= 1.5 && {
                willChange: "transform"
              }
            } : {
              position: n,
              left: e,
              top: o
            }
          }), [n, g, H.floating, w.x, w.y]);
        return i.useMemo((() => ({
          ...w,
          update: W,
          refs: B,
          elements: H,
          floatingStyles: V
        })), [w, W, B, H, V])
      }
    },
    90969: (t, e, n) => {
      n.d(e, {
        B1: () => A,
        C0: () => p,
        Dz: () => w,
        Jx: () => s,
        LI: () => l,
        PG: () => g,
        RI: () => a,
        Sg: () => m,
        T9: () => i,
        TV: () => y,
        WJ: () => b,
        _3: () => d,
        bV: () => R,
        jk: () => r,
        lP: () => E,
        nI: () => T,
        qE: () => u,
        r_: () => o,
        sq: () => h,
        w7: () => x
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        l = Math.round,
        a = Math.floor,
        s = t => ({
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

      function g(t) {
        return "x" === t ? "y" : "x"
      }

      function h(t) {
        return "y" === t ? "height" : "width"
      }

      function y(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function w(t) {
        return g(y(t))
      }

      function x(t, e, n) {
        void 0 === n && (n = !1);
        const o = m(t),
          r = w(t),
          i = h(r);
        let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
        return e.reference[i] > e.floating[i] && (l = R(l)), [l, R(l)]
      }

      function b(t) {
        const e = R(t);
        return [v(t), e, v(e)]
      }

      function v(t) {
        return t.replace(/start|end/g, (t => f[t]))
      }

      function E(t, e, n, o) {
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
        return r && (i = i.map((t => t + "-" + r)), e && (i = i.concat(i.map(v)))), i
      }

      function R(t) {
        return t.replace(/left|right|bottom|top/g, (t => c[t]))
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

      function A(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height
        }
      }
    },
    26727: (t, e, n) => {
      n.d(e, {
        c: () => r
      });
      var o = n(62229);

      function r(t) {
        const e = o.useRef(t);
        return o.useEffect((() => {
          e.current = t
        })), o.useMemo((() => (...t) => e.current?.(...t)), [])
      }
    },
    48087: (t, e, n) => {
      n.d(e, {
        i: () => i
      });
      var o = n(62229),
        r = n(26727);

      function i({
        prop: t,
        defaultProp: e,
        onChange: n = (() => {})
      }) {
        const [i, l] = function({
          defaultProp: t,
          onChange: e
        }) {
          const n = o.useState(t),
            [i] = n,
            l = o.useRef(i),
            a = (0, r.c)(e);
          return o.useEffect((() => {
            l.current !== i && (a(i), l.current = i)
          }), [i, l, a]), n
        }({
          defaultProp: e,
          onChange: n
        }), a = void 0 !== t, s = a ? t : i, c = (0, r.c)(n);
        return [s, o.useCallback((e => {
          if (a) {
            const n = "function" == typeof e ? e(t) : e;
            n !== t && c(n)
          } else l(e)
        }), [a, t, l, c])]
      }
    },
    62865: (t, e, n) => {
      n.d(e, {
        U: () => i
      });
      var o = n(62229),
        r = n(26727);

      function i(t, e = globalThis?.document) {
        const n = (0, r.c)(t);
        o.useEffect((() => {
          const t = t => {
            "Escape" === t.key && n(t)
          };
          return e.addEventListener("keydown", t, {
            capture: !0
          }), () => e.removeEventListener("keydown", t, {
            capture: !0
          })
        }), [n, e])
      }
    },
    92600: (t, e, n) => {
      n.d(e, {
        N: () => r
      });
      var o = n(62229),
        r = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    },
    27977: (t, e, n) => {
      n.d(e, {
        X: () => i
      });
      var o = n(62229),
        r = n(92600);

      function i(t) {
        const [e, n] = o.useState(void 0);
        return (0, r.N)((() => {
          if (t) {
            n({
              width: t.offsetWidth,
              height: t.offsetHeight
            });
            const e = new ResizeObserver((e => {
              if (!Array.isArray(e)) return;
              if (!e.length) return;
              const o = e[0];
              let r, i;
              if ("borderBoxSize" in o) {
                const t = o.borderBoxSize,
                  e = Array.isArray(t) ? t[0] : t;
                r = e.inlineSize, i = e.blockSize
              } else r = t.offsetWidth, i = t.offsetHeight;
              n({
                width: r,
                height: i
              })
            }));
            return e.observe(t, {
              box: "border-box"
            }), () => e.unobserve(t)
          }
          n(void 0)
        }), [t]), e
      }
    }
  }
]);