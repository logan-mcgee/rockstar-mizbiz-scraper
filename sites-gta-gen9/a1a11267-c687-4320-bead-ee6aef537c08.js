! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a1a11267-c687-4320-bead-ee6aef537c08", t._sentryDebugIdIdentifier = "sentry-dbid-a1a11267-c687-4320-bead-ee6aef537c08")
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
  [2935], {
    62607: (t, e, n) => {
      var o = n(95463),
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

      function a(t) {
        return o.isMemo(t) ? l : c[t.$$typeof] || r
      }
      c[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[o.Memo] = l;
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
          for (var c = a(e), y = a(n), g = 0; g < l.length; ++g) {
            var h = l[g];
            if (!(i[h] || o && o[h] || y && y[h] || c && c[h])) {
              var w = d(n, h);
              try {
                s(e, h, w)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    85075: (t, e) => {
      var n = "function" == typeof Symbol && Symbol.for,
        o = n ? Symbol.for("react.element") : 60103,
        r = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        c = n ? Symbol.for("react.profiler") : 60114,
        a = n ? Symbol.for("react.provider") : 60109,
        s = n ? Symbol.for("react.context") : 60110,
        f = n ? Symbol.for("react.async_mode") : 60111,
        u = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        h = n ? Symbol.for("react.block") : 60121,
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
                    case s:
                    case d:
                    case g:
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

      function E(t) {
        return v(t) === u
      }
      e.AsyncMode = f, e.ConcurrentMode = u, e.ContextConsumer = s, e.ContextProvider = a, e.Element = o, e.ForwardRef = d, e.Fragment = i, e.Lazy = g, e.Memo = y, e.Portal = r, e.Profiler = c, e.StrictMode = l, e.Suspense = p, e.isAsyncMode = function(t) {
        return E(t) || v(t) === f
      }, e.isConcurrentMode = E, e.isContextConsumer = function(t) {
        return v(t) === s
      }, e.isContextProvider = function(t) {
        return v(t) === a
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
      }, e.isForwardRef = function(t) {
        return v(t) === d
      }, e.isFragment = function(t) {
        return v(t) === i
      }, e.isLazy = function(t) {
        return v(t) === g
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
        return "string" == typeof t || "function" == typeof t || t === i || t === u || t === c || t === l || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === g || t.$$typeof === y || t.$$typeof === a || t.$$typeof === s || t.$$typeof === d || t.$$typeof === w || t.$$typeof === b || t.$$typeof === x || t.$$typeof === h)
      }, e.typeOf = v
    },
    95463: (t, e, n) => {
      t.exports = n(85075)
    },
    96433: (t, e, n) => {
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
    2788: (t, e, n) => {
      n.d(e, {
        C: () => l,
        f: () => c
      });
      var o = n(91299);

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
              l = function() {
                return Promise.resolve().then(i)
              };
            l(), n = {
              push: function(t) {
                e.push(t), l()
              },
              filter: function(t) {
                return e = e.filter(t), n
              }
            }
          }
        }
      }

      function l(t, e) {
        return void 0 === e && (e = r), i(t, e)
      }

      function c(t) {
        void 0 === t && (t = {});
        var e = i(null);
        return e.options = (0, o.__assign)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    18001: (t, e, n) => {
      n.d(e, {
        BN: () => p,
        ER: () => m,
        Ej: () => y,
        UE: () => c,
        UU: () => a,
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
          c = (0, o.Dz)(e),
          a = (0, o.sq)(c),
          s = (0, o.C0)(e),
          f = "y" === l,
          u = r.x + r.width / 2 - i.width / 2,
          d = r.y + r.height / 2 - i.height / 2,
          p = r[a] / 2 - i[a] / 2;
        let m;
        switch (s) {
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
            m[c] -= p * (n && f ? -1 : 1);
            break;
          case "end":
            m[c] += p * (n && f ? -1 : 1)
        }
        return m
      }
      const i = async (t, e, n) => {
        const {
          placement: o = "bottom",
          strategy: i = "absolute",
          middleware: l = [],
          platform: c
        } = n, a = l.filter(Boolean), s = await (null == c.isRTL ? void 0 : c.isRTL(e));
        let f = await c.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }),
          {
            x: u,
            y: d
          } = r(f, o, s),
          p = o,
          m = {},
          y = 0;
        for (let n = 0; n < a.length; n++) {
          const {
            name: l,
            fn: g
          } = a[n], {
            x: h,
            y: w,
            data: b,
            reset: x
          } = await g({
            x: u,
            y: d,
            initialPlacement: o,
            placement: p,
            strategy: i,
            middlewareData: m,
            rects: f,
            platform: c,
            elements: {
              reference: t,
              floating: e
            }
          });
          u = null != h ? h : u, d = null != w ? w : d, m = {
            ...m,
            [l]: {
              ...m[l],
              ...b
            }
          }, x && y <= 50 && (y++, "object" == typeof x && (x.placement && (p = x.placement), x.rects && (f = !0 === x.rects ? await c.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }) : x.rects), ({
            x: u,
            y: d
          } = r(f, p, s))), n = -1)
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
          rects: c,
          elements: a,
          strategy: s
        } = t, {
          boundary: f = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = (0, o._3)(e, t), y = (0, o.nI)(m), g = a[p ? "floating" === d ? "reference" : "floating" : d], h = (0, o.B1)(await l.getClippingRect({
          element: null == (n = await (null == l.isElement ? void 0 : l.isElement(g))) || n ? g : g.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating)),
          boundary: f,
          rootBoundary: u,
          strategy: s
        })), w = "floating" === d ? {
          ...c.floating,
          x: r,
          y: i
        } : c.reference, b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)), x = await (null == l.isElement ? void 0 : l.isElement(b)) && await (null == l.getScale ? void 0 : l.getScale(b)) || {
          x: 1,
          y: 1
        }, v = (0, o.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: w,
          offsetParent: b,
          strategy: s
        }) : w);
        return {
          top: (h.top - v.top + y.top) / x.y,
          bottom: (v.bottom - h.bottom + y.bottom) / x.y,
          left: (h.left - v.left + y.left) / x.x,
          right: (v.right - h.right + y.right) / x.x
        }
      }
      const c = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: r,
              placement: i,
              rects: l,
              platform: c,
              elements: a,
              middlewareData: s
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
              g = await c.getDimensions(f),
              h = "y" === m,
              w = h ? "top" : "left",
              b = h ? "bottom" : "right",
              x = h ? "clientHeight" : "clientWidth",
              v = l.reference[y] + l.reference[m] - p[m] - l.floating[y],
              E = p[m] - l.reference[m],
              T = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(f));
            let S = T ? T[x] : 0;
            S && await (null == c.isElement ? void 0 : c.isElement(T)) || (S = a.floating[x] || l.floating[y]);
            const R = v / 2 - E / 2,
              _ = S / 2 - g[y] / 2 - 1,
              C = (0, o.jk)(d[w], _),
              A = (0, o.jk)(d[b], _),
              L = C,
              P = S - g[y] - A,
              D = S / 2 - g[y] / 2 + R,
              O = (0, o.qE)(L, D, P),
              k = !s.arrow && null != (0, o.Sg)(i) && D != O && l.reference[y] / 2 - (D < L ? C : A) - g[y] / 2 < 0,
              $ = k ? D < L ? D - L : D - P : 0;
            return {
              [m]: p[m] + $,
              data: {
                [m]: O,
                centerOffset: D - O - $,
                ...k && {
                  alignmentOffset: $
                }
              },
              reset: k
            }
          }
        }),
        a = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, r;
              const {
                placement: i,
                middlewareData: c,
                rects: a,
                initialPlacement: s,
                platform: f,
                elements: u
              } = e, {
                mainAxis: d = !0,
                crossAxis: p = !0,
                fallbackPlacements: m,
                fallbackStrategy: y = "bestFit",
                fallbackAxisSideDirection: g = "none",
                flipAlignment: h = !0,
                ...w
              } = (0, o._3)(t, e);
              if (null != (n = c.arrow) && n.alignmentOffset) return {};
              const b = (0, o.C0)(i),
                x = (0, o.C0)(s) === s,
                v = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)),
                E = m || (x || !h ? [(0, o.bV)(s)] : (0, o.WJ)(s));
              m || "none" === g || E.push(...(0, o.lP)(s, h, g, v));
              const T = [s, ...E],
                S = await l(e, w),
                R = [];
              let _ = (null == (r = c.flip) ? void 0 : r.overflows) || [];
              if (d && R.push(S[b]), p) {
                const t = (0, o.w7)(i, a, v);
                R.push(S[t[0]], S[t[1]])
              }
              if (_ = [..._, {
                  placement: i,
                  overflows: R
                }], !R.every((t => t <= 0))) {
                var C, A;
                const t = ((null == (C = c.flip) ? void 0 : C.index) || 0) + 1,
                  e = T[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: _
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (A = _.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : A.placement;
                if (!n) switch (y) {
                  case "bestFit": {
                    var L;
                    const t = null == (L = _.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : L[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = s
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

      function s(t, e) {
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
                  const t = s(await l(e, {
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
                  const t = s(await l(e, {
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
                } = t, l = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), c = (0, o.C0)(n), a = (0, o.Sg)(n), s = "y" === (0, o.TV)(n), f = ["left", "top"].includes(c) ? -1 : 1, u = l && s ? -1 : 1, d = (0, o._3)(e, t);
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
                return a && "number" == typeof y && (m = "end" === a ? -1 * y : y), s ? {
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
                mainAxis: c = !0,
                crossAxis: a = !1,
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
                ...f
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = await l(e, f), p = (0, o.TV)((0, o.C0)(i)), m = (0, o.PG)(p);
              let y = u[m],
                g = u[p];
              if (c) {
                const t = "y" === m ? "bottom" : "right",
                  e = y + d["y" === m ? "top" : "left"],
                  n = y - d[t];
                y = (0, o.qE)(e, y, n)
              }
              if (a) {
                const t = "y" === p ? "bottom" : "right",
                  e = g + d["y" === p ? "top" : "left"],
                  n = g - d[t];
                g = (0, o.qE)(e, g, n)
              }
              const h = s.fn({
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
                rects: l,
                middlewareData: c
              } = e, {
                offset: a = 0,
                mainAxis: s = !0,
                crossAxis: f = !0
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = (0, o.TV)(i), p = (0, o.PG)(d);
              let m = u[p],
                y = u[d];
              const g = (0, o._3)(a, e),
                h = "number" == typeof g ? {
                  mainAxis: g,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...g
                };
              if (s) {
                const t = "y" === p ? "height" : "width",
                  e = l.reference[p] - l.floating[t] + h.mainAxis,
                  n = l.reference[p] + l.reference[t] - h.mainAxis;
                m < e ? m = e : m > n && (m = n)
              }
              if (f) {
                var w, b;
                const t = "y" === p ? "width" : "height",
                  e = ["top", "left"].includes((0, o.C0)(i)),
                  n = l.reference[d] - l.floating[t] + (e && (null == (w = c.offset) ? void 0 : w[d]) || 0) + (e ? 0 : h.crossAxis),
                  r = l.reference[d] + l.reference[t] + (e ? 0 : (null == (b = c.offset) ? void 0 : b[d]) || 0) - (e ? h.crossAxis : 0);
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
                elements: c
              } = e, {
                apply: a = (() => {}),
                ...s
              } = (0, o._3)(t, e), f = await l(e, s), u = (0, o.C0)(n), d = (0, o.Sg)(n), p = "y" === (0, o.TV)(n), {
                width: m,
                height: y
              } = r.floating;
              let g, h;
              "top" === u || "bottom" === u ? (g = u, h = d === (await (null == i.isRTL ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (h = u, g = "end" === d ? "top" : "bottom");
              const w = y - f[g],
                b = m - f[h],
                x = !e.middlewareData.shift;
              let v = w,
                E = b;
              if (p) {
                const t = m - f.left - f.right;
                E = d || x ? (0, o.jk)(b, t) : t
              } else {
                const t = y - f.top - f.bottom;
                v = d || x ? (0, o.jk)(w, t) : t
              }
              if (x && !d) {
                const t = (0, o.T9)(f.left, 0),
                  e = (0, o.T9)(f.right, 0),
                  n = (0, o.T9)(f.top, 0),
                  r = (0, o.T9)(f.bottom, 0);
                p ? E = m - 2 * (0 !== t || 0 !== e ? t + e : (0, o.T9)(f.left, f.right)) : v = y - 2 * (0 !== n || 0 !== r ? n + r : (0, o.T9)(f.top, f.bottom))
              }
              await a({
                ...e,
                availableWidth: E,
                availableHeight: v
              });
              const T = await i.getDimensions(c.floating);
              return m !== T.width || y !== T.height ? {
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
        ll: () => M,
        rD: () => j
      });
      var o = n(90969),
        r = n(18001);

      function i(t) {
        return a(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function l(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function c(t) {
        var e;
        return null == (e = (a(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function a(t) {
        return t instanceof Node || t instanceof l(t).Node
      }

      function s(t) {
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
        return l(t).getComputedStyle(t)
      }

      function w(t) {
        return s(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function b(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || u(t) && t.host || c(t);
        return u(e) ? e.host : e
      }

      function x(t) {
        const e = b(t);
        return g(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : f(e) && d(e) ? e : x(e)
      }

      function v(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = x(t),
          i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          c = l(r);
        return i ? e.concat(c, c.visualViewport || [], d(r) ? r : [], c.frameElement && n ? v(c.frameElement) : []) : e.concat(r, v(r, [], n))
      }

      function E(t) {
        const e = h(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const i = f(t),
          l = i ? t.offsetWidth : n,
          c = i ? t.offsetHeight : r,
          a = (0, o.LI)(n) !== l || (0, o.LI)(r) !== c;
        return a && (n = l, r = c), {
          width: n,
          height: r,
          $: a
        }
      }

      function T(t) {
        return s(t) ? t : t.contextElement
      }

      function S(t) {
        const e = T(t);
        if (!f(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: l
          } = E(e);
        let c = (l ? (0, o.LI)(n.width) : n.width) / r,
          a = (l ? (0, o.LI)(n.height) : n.height) / i;
        return c && Number.isFinite(c) || (c = 1), a && Number.isFinite(a) || (a = 1), {
          x: c,
          y: a
        }
      }
      const R = (0, o.Jx)(0);

      function _(t) {
        const e = l(t);
        return y() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : R
      }

      function C(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          c = T(t);
        let a = (0, o.Jx)(1);
        e && (r ? s(r) && (a = S(r)) : a = S(t));
        const f = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== l(t)) && e
        }(c, n, r) ? _(c) : (0, o.Jx)(0);
        let u = (i.left + f.x) / a.x,
          d = (i.top + f.y) / a.y,
          p = i.width / a.x,
          m = i.height / a.y;
        if (c) {
          const t = l(c),
            e = r && s(r) ? l(r) : r;
          let n = t.frameElement;
          for (; n && r && e !== t;) {
            const t = S(n),
              e = n.getBoundingClientRect(),
              o = h(n),
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

      function A(t) {
        return C(c(t)).left + w(t).scrollLeft
      }

      function L(t, e, n) {
        let r;
        if ("viewport" === e) r = function(t, e) {
          const n = l(t),
            o = c(t),
            r = n.visualViewport;
          let i = o.clientWidth,
            a = o.clientHeight,
            s = 0,
            f = 0;
          if (r) {
            i = r.width, a = r.height;
            const t = y();
            (!t || t && "fixed" === e) && (s = r.offsetLeft, f = r.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: s,
            y: f
          }
        }(t, n);
        else if ("document" === e) r = function(t) {
          const e = c(t),
            n = w(t),
            r = t.ownerDocument.body,
            i = (0, o.T9)(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
            l = (0, o.T9)(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + A(t);
          const s = -n.scrollTop;
          return "rtl" === h(r).direction && (a += (0, o.T9)(e.clientWidth, r.clientWidth) - i), {
            width: i,
            height: l,
            x: a,
            y: s
          }
        }(c(t));
        else if (s(e)) r = function(t, e) {
          const n = C(t, !0, "fixed" === e),
            r = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            l = f(t) ? S(t) : (0, o.Jx)(1);
          return {
            width: t.clientWidth * l.x,
            height: t.clientHeight * l.y,
            x: i * l.x,
            y: r * l.y
          }
        }(e, n);
        else {
          const n = _(t);
          r = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
          }
        }
        return (0, o.B1)(r)
      }

      function P(t, e) {
        const n = b(t);
        return !(n === e || !s(n) || g(n)) && ("fixed" === h(n).position || P(n, e))
      }

      function D(t, e, n) {
        const r = f(e),
          l = c(e),
          a = "fixed" === n,
          s = C(t, !0, a, e);
        let u = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const p = (0, o.Jx)(0);
        if (r || !r && !a)
          if (("body" !== i(e) || d(l)) && (u = w(e)), r) {
            const t = C(e, !0, a, e);
            p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
          } else l && (p.x = A(l));
        return {
          x: s.left + u.scrollLeft - p.x,
          y: s.top + u.scrollTop - p.y,
          width: s.width,
          height: s.height
        }
      }

      function O(t, e) {
        return f(t) && "fixed" !== h(t).position ? e ? e(t) : t.offsetParent : null
      }

      function k(t, e) {
        const n = l(t);
        if (!f(t)) return n;
        let o = O(t, e);
        for (; o && p(o) && "static" === h(o).position;) o = O(o, e);
        return o && ("html" === i(o) || "body" === i(o) && "static" === h(o).position && !m(o)) ? n : o || function(t) {
          let e = b(t);
          for (; f(e) && !g(e);) {
            if (m(e)) return e;
            e = b(e)
          }
          return null
        }(t) || n
      }
      const $ = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            rect: e,
            offsetParent: n,
            strategy: r
          } = t;
          const l = f(n),
            a = c(n);
          if (n === a) return e;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = (0, o.Jx)(1);
          const p = (0, o.Jx)(0);
          if ((l || !l && "fixed" !== r) && (("body" !== i(n) || d(a)) && (s = w(n)), f(n))) {
            const t = C(n);
            u = S(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
          }
          return {
            width: e.width * u.x,
            height: e.height * u.y,
            x: e.x * u.x - s.scrollLeft * u.x + p.x,
            y: e.y * u.y - s.scrollTop * u.y + p.y
          }
        },
        getDocumentElement: c,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: l
          } = t;
          const c = [..."clippingAncestors" === n ? function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = v(t, [], !1).filter((t => s(t) && "body" !== i(t))),
                r = null;
              const l = "fixed" === h(t).position;
              let c = l ? b(t) : t;
              for (; s(c) && !g(c);) {
                const e = h(c),
                  n = m(c);
                n || "fixed" !== e.position || (r = null), (l ? !n && !r : !n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position) || d(c) && !n && P(t, c)) ? o = o.filter((t => t !== c)) : r = e, c = b(c)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), r],
            a = c[0],
            f = c.reduce(((t, n) => {
              const r = L(e, n, l);
              return t.top = (0, o.T9)(r.top, t.top), t.right = (0, o.jk)(r.right, t.right), t.bottom = (0, o.jk)(r.bottom, t.bottom), t.left = (0, o.T9)(r.left, t.left), t
            }), L(e, a, l));
          return {
            width: f.right - f.left,
            height: f.bottom - f.top,
            x: f.left,
            y: f.top
          }
        },
        getOffsetParent: k,
        getElementRects: async function(t) {
          let {
            reference: e,
            floating: n,
            strategy: o
          } = t;
          const r = this.getOffsetParent || k,
            i = this.getDimensions;
          return {
            reference: D(e, await r(n), o),
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
        getScale: S,
        isElement: s,
        isRTL: function(t) {
          return "rtl" === h(t).direction
        }
      };

      function M(t, e, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: l = !0,
          elementResize: a = "function" == typeof ResizeObserver,
          layoutShift: s = "function" == typeof IntersectionObserver,
          animationFrame: f = !1
        } = r, u = T(t), d = i || l ? [...u ? v(u) : [], ...v(e)] : [];
        d.forEach((t => {
          i && t.addEventListener("scroll", n, {
            passive: !0
          }), l && t.addEventListener("resize", n)
        }));
        const p = u && s ? function(t, e) {
          let n, r = null;
          const i = c(t);

          function l() {
            clearTimeout(n), r && r.disconnect(), r = null
          }
          return function c(a, s) {
            void 0 === a && (a = !1), void 0 === s && (s = 1), l();
            const {
              left: f,
              top: u,
              width: d,
              height: p
            } = t.getBoundingClientRect();
            if (a || e(), !d || !p) return;
            const m = {
              rootMargin: -(0, o.RI)(u) + "px " + -(0, o.RI)(i.clientWidth - (f + d)) + "px " + -(0, o.RI)(i.clientHeight - (u + p)) + "px " + -(0, o.RI)(f) + "px",
              threshold: (0, o.T9)(0, (0, o.jk)(1, s)) || 1
            };
            let y = !0;

            function g(t) {
              const e = t[0].intersectionRatio;
              if (e !== s) {
                if (!y) return c();
                e ? c(!1, e) : n = setTimeout((() => {
                  c(!1, 1e-7)
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
          }(!0), l
        }(u, n) : null;
        let m, y = -1,
          g = null;
        a && (g = new ResizeObserver((t => {
          let [o] = t;
          o && o.target === u && g && (g.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame((() => {
            g && g.observe(e)
          }))), n()
        })), u && !f && g.observe(u), g.observe(e));
        let h = f ? C(t) : null;
        return f && function e() {
          const o = C(t);
          !h || o.x === h.x && o.y === h.y && o.width === h.width && o.height === h.height || n(), h = o, m = requestAnimationFrame(e)
        }(), n(), () => {
          d.forEach((t => {
            i && t.removeEventListener("scroll", n), l && t.removeEventListener("resize", n)
          })), p && p(), g && g.disconnect(), g = null, f && cancelAnimationFrame(m)
        }
      }
      const j = (t, e, n) => {
        const o = new Map,
          i = {
            platform: $,
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
    90969: (t, e, n) => {
      n.d(e, {
        B1: () => R,
        C0: () => p,
        Dz: () => w,
        Jx: () => a,
        LI: () => l,
        PG: () => y,
        RI: () => c,
        Sg: () => m,
        T9: () => i,
        TV: () => h,
        WJ: () => x,
        _3: () => d,
        bV: () => T,
        jk: () => r,
        lP: () => E,
        nI: () => S,
        qE: () => u,
        r_: () => o,
        sq: () => g,
        w7: () => b
      });
      const o = ["top", "right", "bottom", "left"],
        r = Math.min,
        i = Math.max,
        l = Math.round,
        c = Math.floor,
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

      function g(t) {
        return "y" === t ? "height" : "width"
      }

      function h(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function w(t) {
        return y(h(t))
      }

      function b(t, e, n) {
        void 0 === n && (n = !1);
        const o = m(t),
          r = w(t),
          i = g(r);
        let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
        return e.reference[i] > e.floating[i] && (l = T(l)), [l, T(l)]
      }

      function x(t) {
        const e = T(t);
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

      function T(t) {
        return t.replace(/left|right|bottom|top/g, (t => s[t]))
      }

      function S(t) {
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
    5465: (t, e, n) => {
      n.d(e, {
        DX: () => l,
        xV: () => a
      });
      var o = n(3709),
        r = n(62229);

      function i(...t) {
        return e => t.forEach((t => function(t, e) {
          "function" == typeof t ? t(e) : null != t && (t.current = e)
        }(t, e)))
      }
      const l = (0, r.forwardRef)(((t, e) => {
        const {
          children: n,
          ...i
        } = t, l = r.Children.toArray(n), a = l.find(s);
        if (a) {
          const t = a.props.children,
            n = l.map((e => e === a ? r.Children.count(t) > 1 ? r.Children.only(null) : (0, r.isValidElement)(t) ? t.props.children : null : e));
          return (0, r.createElement)(c, (0, o.A)({}, i, {
            ref: e
          }), (0, r.isValidElement)(t) ? (0, r.cloneElement)(t, void 0, n) : null)
        }
        return (0, r.createElement)(c, (0, o.A)({}, i, {
          ref: e
        }), n)
      }));
      l.displayName = "Slot";
      const c = (0, r.forwardRef)(((t, e) => {
        const {
          children: n,
          ...o
        } = t;
        return (0, r.isValidElement)(n) ? (0, r.cloneElement)(n, {
          ...f(o, n.props),
          ref: e ? i(e, n.ref) : n.ref
        }) : r.Children.count(n) > 1 ? r.Children.only(null) : null
      }));
      c.displayName = "SlotClone";
      const a = ({
        children: t
      }) => (0, r.createElement)(r.Fragment, null, t);

      function s(t) {
        return (0, r.isValidElement)(t) && t.type === a
      }

      function f(t, e) {
        const n = {
          ...e
        };
        for (const o in e) {
          const r = t[o],
            i = e[o];
          /^on[A-Z]/.test(o) ? r && i ? n[o] = (...t) => {
            i(...t), r(...t)
          } : r && (n[o] = r) : "style" === o ? n[o] = {
            ...r,
            ...i
          } : "className" === o && (n[o] = [r, i].filter(Boolean).join(" "))
        }
        return {
          ...t,
          ...n
        }
      }
      n(73855)
    },
    3709: (t, e, n) => {
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