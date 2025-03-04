! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "18be0fdd-89e3-4f46-8800-0535de9abc71", e._sentryDebugIdIdentifier = "sentry-dbid-18be0fdd-89e3-4f46-8800-0535de9abc71")
  } catch (e) {}
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
  [1897], {
    26324: e => {
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, a) {
          "single" != (a = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var o in r) n[o] = t.call(e, o) ? e[o] : r[o];
            return n
          }(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var l = "double" == a.quotes ? '"' : "'", s = a.isIdentifier, c = i.charAt(0), u = "", f = 0, d = i.length; f < d;) {
            var p = i.charAt(f++),
              h = p.charCodeAt(),
              m = void 0;
            if (h < 32 || h > 126) {
              if (h >= 55296 && h <= 56319 && f < d) {
                var v = i.charCodeAt(f++);
                56320 == (64512 & v) ? h = ((1023 & h) << 10) + (1023 & v) + 65536 : f--
              }
              m = "\\" + h.toString(16).toUpperCase() + " "
            } else m = a.escapeEverything ? r.test(p) ? "\\" + p : "\\" + h.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(p) ? "\\" + h.toString(16).toUpperCase() + " " : "\\" == p || !s && ('"' == p && l == p || "'" == p && l == p) || s && n.test(p) ? "\\" + p : p;
            u += m
          }
          return s && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(o, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !s && a.wrap ? l + u + l : u
        };
      i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, i.version = "3.0.0", e.exports = i
    },
    63305: (e, t, r) => {
      var n = r(59337),
        o = {
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

      function s(e) {
        return n.isMemo(e) ? a : l[e.$$typeof] || o
      }
      l[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, l[n.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var o = p(r);
            o && o !== h && e(t, o, n)
          }
          var a = u(r);
          f && (a = a.concat(f(r)));
          for (var l = s(t), m = s(r), v = 0; v < a.length; ++v) {
            var y = a[v];
            if (!(i[y] || n && n[y] || m && m[y] || l && l[y])) {
              var g = d(r, y);
              try {
                c(t, y, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    37685: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        l = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        h = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        b = r ? Symbol.for("react.scope") : 60119;

      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case f:
                case i:
                case l:
                case a:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case d:
                    case v:
                    case m:
                    case s:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function C(e) {
        return k(e) === f
      }
      t.AsyncMode = u, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = s, t.Element = n, t.ForwardRef = d, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
        return C(e) || k(e) === u
      }, t.isConcurrentMode = C, t.isContextConsumer = function(e) {
        return k(e) === c
      }, t.isContextProvider = function(e) {
        return k(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return k(e) === d
      }, t.isFragment = function(e) {
        return k(e) === i
      }, t.isLazy = function(e) {
        return k(e) === v
      }, t.isMemo = function(e) {
        return k(e) === m
      }, t.isPortal = function(e) {
        return k(e) === o
      }, t.isProfiler = function(e) {
        return k(e) === l
      }, t.isStrictMode = function(e) {
        return k(e) === a
      }, t.isSuspense = function(e) {
        return k(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === f || e === l || e === a || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === g || e.$$typeof === w || e.$$typeof === b || e.$$typeof === y)
      }, t.typeOf = k
    },
    59337: (e, t, r) => {
      e.exports = r(37685)
    },
    37964: (e, t, r) => {
      r.d(t, {
        S: () => o
      });
      var n = r(62229);

      function o(e, t) {
        return r = t || null, o = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (i = (0, n.useState)((function() {
          return {
            value: r,
            callback: o,
            facade: {
              get current() {
                return i.value
              },
              set current(e) {
                var t = i.value;
                t !== e && (i.value = e, i.callback(e, t))
              }
            }
          }
        }))[0]).callback = o, i.facade;
        var r, o, i
      }
    },
    81402: (e, t, r) => {
      r.d(t, {
        C: () => a,
        f: () => l
      });
      var n = r(63461);

      function o(e) {
        return e
      }

      function i(e, t) {
        void 0 === t && (t = o);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, n);
            return r.push(o),
              function() {
                r = r.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (n = !0; r.length;) {
              var t = r;
              r = [], t.forEach(e)
            }
            r = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            n = !0;
            var t = [];
            if (r.length) {
              var o = r;
              r = [], o.forEach(e), t = r
            }
            var i = function() {
                var r = t;
                t = [], r.forEach(e)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), r = {
              push: function(e) {
                t.push(e), a()
              },
              filter: function(e) {
                return t = t.filter(e), r
              }
            }
          }
        }
      }

      function a(e, t) {
        return void 0 === t && (t = o), i(e, t)
      }

      function l(e) {
        void 0 === e && (e = {});
        var t = i(null);
        return t.options = (0, n.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    15191: (e, t, r) => {
      r.d(t, {
        BN: () => p,
        ER: () => h,
        Ej: () => m,
        UE: () => l,
        UU: () => s,
        cY: () => d,
        jD: () => f,
        rD: () => i
      });
      var n = r(4511);

      function o(e, t, r) {
        let {
          reference: o,
          floating: i
        } = e;
        const a = (0, n.TV)(t),
          l = (0, n.Dz)(t),
          s = (0, n.sq)(l),
          c = (0, n.C0)(t),
          u = "y" === a,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[s] / 2 - i[s] / 2;
        let h;
        switch (c) {
          case "top":
            h = {
              x: f,
              y: o.y - i.height
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
              y: d
            };
            break;
          case "left":
            h = {
              x: o.x - i.width,
              y: d
            };
            break;
          default:
            h = {
              x: o.x,
              y: o.y
            }
        }
        switch ((0, n.Sg)(t)) {
          case "start":
            h[l] -= p * (r && u ? -1 : 1);
            break;
          case "end":
            h[l] += p * (r && u ? -1 : 1)
        }
        return h
      }
      const i = async (e, t, r) => {
        const {
          placement: n = "bottom",
          strategy: i = "absolute",
          middleware: a = [],
          platform: l
        } = r, s = a.filter(Boolean), c = await (null == l.isRTL ? void 0 : l.isRTL(t));
        let u = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i
          }),
          {
            x: f,
            y: d
          } = o(u, n, c),
          p = n,
          h = {},
          m = 0;
        for (let r = 0; r < s.length; r++) {
          const {
            name: a,
            fn: v
          } = s[r], {
            x: y,
            y: g,
            data: w,
            reset: b
          } = await v({
            x: f,
            y: d,
            initialPlacement: n,
            placement: p,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: l,
            elements: {
              reference: e,
              floating: t
            }
          });
          f = null != y ? y : f, d = null != g ? g : d, h = {
            ...h,
            [a]: {
              ...h[a],
              ...w
            }
          }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (p = b.placement), b.rects && (u = !0 === b.rects ? await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i
          }) : b.rects), ({
            x: f,
            y: d
          } = o(u, p, c))), r = -1)
        }
        return {
          x: f,
          y: d,
          placement: p,
          strategy: i,
          middlewareData: h
        }
      };
      async function a(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: o,
          y: i,
          platform: a,
          rects: l,
          elements: s,
          strategy: c
        } = e, {
          boundary: u = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: h = 0
        } = (0, n._3)(t, e), m = (0, n.nI)(h), v = s[p ? "floating" === d ? "reference" : "floating" : d], y = (0, n.B1)(await a.getClippingRect({
          element: null == (r = await (null == a.isElement ? void 0 : a.isElement(v))) || r ? v : v.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating)),
          boundary: u,
          rootBoundary: f,
          strategy: c
        })), g = "floating" === d ? {
          ...l.floating,
          x: o,
          y: i
        } : l.reference, w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)), b = await (null == a.isElement ? void 0 : a.isElement(w)) && await (null == a.getScale ? void 0 : a.getScale(w)) || {
          x: 1,
          y: 1
        }, k = (0, n.B1)(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: g,
          offsetParent: w,
          strategy: c
        }) : g);
        return {
          top: (y.top - k.top + m.top) / b.y,
          bottom: (k.bottom - y.bottom + m.bottom) / b.y,
          left: (y.left - k.left + m.left) / b.x,
          right: (k.right - y.right + m.right) / b.x
        }
      }
      const l = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: o,
              placement: i,
              rects: a,
              platform: l,
              elements: s,
              middlewareData: c
            } = t, {
              element: u,
              padding: f = 0
            } = (0, n._3)(e, t) || {};
            if (null == u) return {};
            const d = (0, n.nI)(f),
              p = {
                x: r,
                y: o
              },
              h = (0, n.Dz)(i),
              m = (0, n.sq)(h),
              v = await l.getDimensions(u),
              y = "y" === h,
              g = y ? "top" : "left",
              w = y ? "bottom" : "right",
              b = y ? "clientHeight" : "clientWidth",
              k = a.reference[m] + a.reference[h] - p[h] - a.floating[m],
              C = p[h] - a.reference[h],
              x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u));
            let S = x ? x[b] : 0;
            S && await (null == l.isElement ? void 0 : l.isElement(x)) || (S = s.floating[b] || a.floating[m]);
            const E = k / 2 - C / 2,
              A = S / 2 - v[m] / 2 - 1,
              O = (0, n.jk)(d[g], A),
              P = (0, n.jk)(d[w], A),
              L = O,
              R = S - v[m] - P,
              T = S / 2 - v[m] / 2 + E,
              j = (0, n.qE)(L, T, R),
              M = !c.arrow && null != (0, n.Sg)(i) && T != j && a.reference[m] / 2 - (T < L ? O : P) - v[m] / 2 < 0,
              I = M ? T < L ? T - L : T - R : 0;
            return {
              [h]: p[h] + I,
              data: {
                [h]: j,
                centerOffset: T - j - I,
                ...M && {
                  alignmentOffset: I
                }
              },
              reset: M
            }
          }
        }),
        s = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, o;
              const {
                placement: i,
                middlewareData: l,
                rects: s,
                initialPlacement: c,
                platform: u,
                elements: f
              } = t, {
                mainAxis: d = !0,
                crossAxis: p = !0,
                fallbackPlacements: h,
                fallbackStrategy: m = "bestFit",
                fallbackAxisSideDirection: v = "none",
                flipAlignment: y = !0,
                ...g
              } = (0, n._3)(e, t);
              if (null != (r = l.arrow) && r.alignmentOffset) return {};
              const w = (0, n.C0)(i),
                b = (0, n.C0)(c) === c,
                k = await (null == u.isRTL ? void 0 : u.isRTL(f.floating)),
                C = h || (b || !y ? [(0, n.bV)(c)] : (0, n.WJ)(c));
              h || "none" === v || C.push(...(0, n.lP)(c, y, v, k));
              const x = [c, ...C],
                S = await a(t, g),
                E = [];
              let A = (null == (o = l.flip) ? void 0 : o.overflows) || [];
              if (d && E.push(S[w]), p) {
                const e = (0, n.w7)(i, s, k);
                E.push(S[e[0]], S[e[1]])
              }
              if (A = [...A, {
                  placement: i,
                  overflows: E
                }], !E.every((e => e <= 0))) {
                var O, P;
                const e = ((null == (O = l.flip) ? void 0 : O.index) || 0) + 1,
                  t = x[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: A
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (P = A.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : P.placement;
                if (!r) switch (m) {
                  case "bestFit": {
                    var L;
                    const e = null == (L = A.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : L[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = c
                }
                if (i !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        };

      function c(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function u(e) {
        return n.r_.some((t => e[t] >= 0))
      }
      const f = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: o = "referenceHidden",
                ...i
              } = (0, n._3)(e, t);
              switch (o) {
                case "referenceHidden": {
                  const e = c(await a(t, {
                    ...i,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: u(e)
                    }
                  }
                }
                case "escaped": {
                  const e = c(await a(t, {
                    ...i,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: u(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        d = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: o
              } = t, i = await async function(e, t) {
                const {
                  placement: r,
                  platform: o,
                  elements: i
                } = e, a = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), l = (0, n.C0)(r), s = (0, n.Sg)(r), c = "y" === (0, n.TV)(r), u = ["left", "top"].includes(l) ? -1 : 1, f = a && c ? -1 : 1, d = (0, n._3)(t, e);
                let {
                  mainAxis: p,
                  crossAxis: h,
                  alignmentAxis: m
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
                return s && "number" == typeof m && (h = "end" === s ? -1 * m : m), c ? {
                  x: h * f,
                  y: p * u
                } : {
                  x: p * u,
                  y: h * f
                }
              }(t, e);
              return {
                x: r + i.x,
                y: o + i.y,
                data: i
              }
            }
          }
        },
        p = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: o,
                placement: i
              } = t, {
                mainAxis: l = !0,
                crossAxis: s = !1,
                limiter: c = {
                  fn: e => {
                    let {
                      x: t,
                      y: r
                    } = e;
                    return {
                      x: t,
                      y: r
                    }
                  }
                },
                ...u
              } = (0, n._3)(e, t), f = {
                x: r,
                y: o
              }, d = await a(t, u), p = (0, n.TV)((0, n.C0)(i)), h = (0, n.PG)(p);
              let m = f[h],
                v = f[p];
              if (l) {
                const e = "y" === h ? "bottom" : "right",
                  t = m + d["y" === h ? "top" : "left"],
                  r = m - d[e];
                m = (0, n.qE)(t, m, r)
              }
              if (s) {
                const e = "y" === p ? "bottom" : "right",
                  t = v + d["y" === p ? "top" : "left"],
                  r = v - d[e];
                v = (0, n.qE)(t, v, r)
              }
              const y = c.fn({
                ...t,
                [h]: m,
                [p]: v
              });
              return {
                ...y,
                data: {
                  x: y.x - r,
                  y: y.y - o
                }
              }
            }
          }
        },
        h = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: o,
                placement: i,
                rects: a,
                middlewareData: l
              } = t, {
                offset: s = 0,
                mainAxis: c = !0,
                crossAxis: u = !0
              } = (0, n._3)(e, t), f = {
                x: r,
                y: o
              }, d = (0, n.TV)(i), p = (0, n.PG)(d);
              let h = f[p],
                m = f[d];
              const v = (0, n._3)(s, t),
                y = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...v
                };
              if (c) {
                const e = "y" === p ? "height" : "width",
                  t = a.reference[p] - a.floating[e] + y.mainAxis,
                  r = a.reference[p] + a.reference[e] - y.mainAxis;
                h < t ? h = t : h > r && (h = r)
              }
              if (u) {
                var g, w;
                const e = "y" === p ? "width" : "height",
                  t = ["top", "left"].includes((0, n.C0)(i)),
                  r = a.reference[d] - a.floating[e] + (t && (null == (g = l.offset) ? void 0 : g[d]) || 0) + (t ? 0 : y.crossAxis),
                  o = a.reference[d] + a.reference[e] + (t ? 0 : (null == (w = l.offset) ? void 0 : w[d]) || 0) - (t ? y.crossAxis : 0);
                m < r ? m = r : m > o && (m = o)
              }
              return {
                [p]: h,
                [d]: m
              }
            }
          }
        },
        m = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              const {
                placement: r,
                rects: o,
                platform: i,
                elements: l
              } = t, {
                apply: s = (() => {}),
                ...c
              } = (0, n._3)(e, t), u = await a(t, c), f = (0, n.C0)(r), d = (0, n.Sg)(r), p = "y" === (0, n.TV)(r), {
                width: h,
                height: m
              } = o.floating;
              let v, y;
              "top" === f || "bottom" === f ? (v = f, y = d === (await (null == i.isRTL ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = f, v = "end" === d ? "top" : "bottom");
              const g = m - u[v],
                w = h - u[y],
                b = !t.middlewareData.shift;
              let k = g,
                C = w;
              if (p) {
                const e = h - u.left - u.right;
                C = d || b ? (0, n.jk)(w, e) : e
              } else {
                const e = m - u.top - u.bottom;
                k = d || b ? (0, n.jk)(g, e) : e
              }
              if (b && !d) {
                const e = (0, n.T9)(u.left, 0),
                  t = (0, n.T9)(u.right, 0),
                  r = (0, n.T9)(u.top, 0),
                  o = (0, n.T9)(u.bottom, 0);
                p ? C = h - 2 * (0 !== e || 0 !== t ? e + t : (0, n.T9)(u.left, u.right)) : k = m - 2 * (0 !== r || 0 !== o ? r + o : (0, n.T9)(u.top, u.bottom))
              }
              await s({
                ...t,
                availableWidth: C,
                availableHeight: k
              });
              const x = await i.getDimensions(l.floating);
              return h !== x.width || m !== x.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    50123: (e, t, r) => {
      r.d(t, {
        ll: () => D,
        rD: () => _
      });
      var n = r(4511),
        o = r(15191);

      function i(e) {
        return s(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function a(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function l(e) {
        var t;
        return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function s(e) {
        return e instanceof Node || e instanceof a(e).Node
      }

      function c(e) {
        return e instanceof Element || e instanceof a(e).Element
      }

      function u(e) {
        return e instanceof HTMLElement || e instanceof a(e).HTMLElement
      }

      function f(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
      }

      function d(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = y(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
      }

      function p(e) {
        return ["table", "td", "th"].includes(i(e))
      }

      function h(e) {
        const t = m(),
          r = y(e);
        return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some((e => (r.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (r.contain || "").includes(e)))
      }

      function m() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function v(e) {
        return ["html", "body", "#document"].includes(i(e))
      }

      function y(e) {
        return a(e).getComputedStyle(e)
      }

      function g(e) {
        return c(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function w(e) {
        if ("html" === i(e)) return e;
        const t = e.assignedSlot || e.parentNode || f(e) && e.host || l(e);
        return f(t) ? t.host : t
      }

      function b(e) {
        const t = w(e);
        return v(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : u(t) && d(t) ? t : b(t)
      }

      function k(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = b(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          l = a(o);
        return i ? t.concat(l, l.visualViewport || [], d(o) ? o : [], l.frameElement && r ? k(l.frameElement) : []) : t.concat(o, k(o, [], r))
      }

      function C(e) {
        const t = y(e);
        let r = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const i = u(e),
          a = i ? e.offsetWidth : r,
          l = i ? e.offsetHeight : o,
          s = (0, n.LI)(r) !== a || (0, n.LI)(o) !== l;
        return s && (r = a, o = l), {
          width: r,
          height: o,
          $: s
        }
      }

      function x(e) {
        return c(e) ? e : e.contextElement
      }

      function S(e) {
        const t = x(e);
        if (!u(t)) return (0, n.Jx)(1);
        const r = t.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: a
          } = C(t);
        let l = (a ? (0, n.LI)(r.width) : r.width) / o,
          s = (a ? (0, n.LI)(r.height) : r.height) / i;
        return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
          x: l,
          y: s
        }
      }
      const E = (0, n.Jx)(0);

      function A(e) {
        const t = a(e);
        return m() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : E
      }

      function O(e, t, r, o) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const i = e.getBoundingClientRect(),
          l = x(e);
        let s = (0, n.Jx)(1);
        t && (o ? c(o) && (s = S(o)) : s = S(e));
        const u = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== a(e)) && t
        }(l, r, o) ? A(l) : (0, n.Jx)(0);
        let f = (i.left + u.x) / s.x,
          d = (i.top + u.y) / s.y,
          p = i.width / s.x,
          h = i.height / s.y;
        if (l) {
          const e = a(l),
            t = o && c(o) ? a(o) : o;
          let r = e.frameElement;
          for (; r && o && t !== e;) {
            const e = S(r),
              t = r.getBoundingClientRect(),
              n = y(r),
              o = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              i = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            f *= e.x, d *= e.y, p *= e.x, h *= e.y, f += o, d += i, r = a(r).frameElement
          }
        }
        return (0, n.B1)({
          width: p,
          height: h,
          x: f,
          y: d
        })
      }

      function P(e) {
        return O(l(e)).left + g(e).scrollLeft
      }

      function L(e, t, r) {
        let o;
        if ("viewport" === t) o = function(e, t) {
          const r = a(e),
            n = l(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            c = 0,
            u = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = m();
            (!e || e && "fixed" === t) && (c = o.offsetLeft, u = o.offsetTop)
          }
          return {
            width: i,
            height: s,
            x: c,
            y: u
          }
        }(e, r);
        else if ("document" === t) o = function(e) {
          const t = l(e),
            r = g(e),
            o = e.ownerDocument.body,
            i = (0, n.T9)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
            a = (0, n.T9)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
          let s = -r.scrollLeft + P(e);
          const c = -r.scrollTop;
          return "rtl" === y(o).direction && (s += (0, n.T9)(t.clientWidth, o.clientWidth) - i), {
            width: i,
            height: a,
            x: s,
            y: c
          }
        }(l(e));
        else if (c(t)) o = function(e, t) {
          const r = O(e, !0, "fixed" === t),
            o = r.top + e.clientTop,
            i = r.left + e.clientLeft,
            a = u(e) ? S(e) : (0, n.Jx)(1);
          return {
            width: e.clientWidth * a.x,
            height: e.clientHeight * a.y,
            x: i * a.x,
            y: o * a.y
          }
        }(t, r);
        else {
          const r = A(e);
          o = {
            ...t,
            x: t.x - r.x,
            y: t.y - r.y
          }
        }
        return (0, n.B1)(o)
      }

      function R(e, t) {
        const r = w(e);
        return !(r === t || !c(r) || v(r)) && ("fixed" === y(r).position || R(r, t))
      }

      function T(e, t, r) {
        const o = u(t),
          a = l(t),
          s = "fixed" === r,
          c = O(e, !0, s, t);
        let f = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const p = (0, n.Jx)(0);
        if (o || !o && !s)
          if (("body" !== i(t) || d(a)) && (f = g(t)), o) {
            const e = O(t, !0, s, t);
            p.x = e.x + t.clientLeft, p.y = e.y + t.clientTop
          } else a && (p.x = P(a));
        return {
          x: c.left + f.scrollLeft - p.x,
          y: c.top + f.scrollTop - p.y,
          width: c.width,
          height: c.height
        }
      }

      function j(e, t) {
        return u(e) && "fixed" !== y(e).position ? t ? t(e) : e.offsetParent : null
      }

      function M(e, t) {
        const r = a(e);
        if (!u(e)) return r;
        let n = j(e, t);
        for (; n && p(n) && "static" === y(n).position;) n = j(n, t);
        return n && ("html" === i(n) || "body" === i(n) && "static" === y(n).position && !h(n)) ? r : n || function(e) {
          let t = w(e);
          for (; u(t) && !v(t);) {
            if (h(t)) return t;
            t = w(t)
          }
          return null
        }(e) || r
      }
      const I = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: t,
            offsetParent: r,
            strategy: o
          } = e;
          const a = u(r),
            s = l(r);
          if (r === s) return t;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = (0, n.Jx)(1);
          const p = (0, n.Jx)(0);
          if ((a || !a && "fixed" !== o) && (("body" !== i(r) || d(s)) && (c = g(r)), u(r))) {
            const e = O(r);
            f = S(r), p.x = e.x + r.clientLeft, p.y = e.y + r.clientTop
          }
          return {
            width: t.width * f.x,
            height: t.height * f.y,
            x: t.x * f.x - c.scrollLeft * f.x + p.x,
            y: t.y * f.y - c.scrollTop * f.y + p.y
          }
        },
        getDocumentElement: l,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: o,
            strategy: a
          } = e;
          const l = [..."clippingAncestors" === r ? function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = k(e, [], !1).filter((e => c(e) && "body" !== i(e))),
                o = null;
              const a = "fixed" === y(e).position;
              let l = a ? w(e) : e;
              for (; c(l) && !v(l);) {
                const t = y(l),
                  r = h(l);
                r || "fixed" !== t.position || (o = null), (a ? !r && !o : !r && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || d(l) && !r && R(e, l)) ? n = n.filter((e => e !== l)) : o = t, l = w(l)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), o],
            s = l[0],
            u = l.reduce(((e, r) => {
              const o = L(t, r, a);
              return e.top = (0, n.T9)(o.top, e.top), e.right = (0, n.jk)(o.right, e.right), e.bottom = (0, n.jk)(o.bottom, e.bottom), e.left = (0, n.T9)(o.left, e.left), e
            }), L(t, s, a));
          return {
            width: u.right - u.left,
            height: u.bottom - u.top,
            x: u.left,
            y: u.top
          }
        },
        getOffsetParent: M,
        getElementRects: async function(e) {
          let {
            reference: t,
            floating: r,
            strategy: n
          } = e;
          const o = this.getOffsetParent || M,
            i = this.getDimensions;
          return {
            reference: T(t, await o(r), n),
            floating: {
              x: 0,
              y: 0,
              ...await i(r)
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          return C(e)
        },
        getScale: S,
        isElement: c,
        isRTL: function(e) {
          return "rtl" === y(e).direction
        }
      };

      function D(e, t, r, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: a = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: c = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, f = x(e), d = i || a ? [...f ? k(f) : [], ...k(t)] : [];
        d.forEach((e => {
          i && e.addEventListener("scroll", r, {
            passive: !0
          }), a && e.addEventListener("resize", r)
        }));
        const p = f && c ? function(e, t) {
          let r, o = null;
          const i = l(e);

          function a() {
            clearTimeout(r), o && o.disconnect(), o = null
          }
          return function l(s, c) {
            void 0 === s && (s = !1), void 0 === c && (c = 1), a();
            const {
              left: u,
              top: f,
              width: d,
              height: p
            } = e.getBoundingClientRect();
            if (s || t(), !d || !p) return;
            const h = {
              rootMargin: -(0, n.RI)(f) + "px " + -(0, n.RI)(i.clientWidth - (u + d)) + "px " + -(0, n.RI)(i.clientHeight - (f + p)) + "px " + -(0, n.RI)(u) + "px",
              threshold: (0, n.T9)(0, (0, n.jk)(1, c)) || 1
            };
            let m = !0;

            function v(e) {
              const t = e[0].intersectionRatio;
              if (t !== c) {
                if (!m) return l();
                t ? l(!1, t) : r = setTimeout((() => {
                  l(!1, 1e-7)
                }), 100)
              }
              m = !1
            }
            try {
              o = new IntersectionObserver(v, {
                ...h,
                root: i.ownerDocument
              })
            } catch (e) {
              o = new IntersectionObserver(v, h)
            }
            o.observe(e)
          }(!0), a
        }(f, r) : null;
        let h, m = -1,
          v = null;
        s && (v = new ResizeObserver((e => {
          let [n] = e;
          n && n.target === f && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame((() => {
            v && v.observe(t)
          }))), r()
        })), f && !u && v.observe(f), v.observe(t));
        let y = u ? O(e) : null;
        return u && function t() {
          const n = O(e);
          !y || n.x === y.x && n.y === y.y && n.width === y.width && n.height === y.height || r(), y = n, h = requestAnimationFrame(t)
        }(), r(), () => {
          d.forEach((e => {
            i && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
          })), p && p(), v && v.disconnect(), v = null, u && cancelAnimationFrame(h)
        }
      }
      const _ = (e, t, r) => {
        const n = new Map,
          i = {
            platform: I,
            ...r
          },
          a = {
            ...i.platform,
            _c: n
          };
        return (0, o.rD)(e, t, {
          ...i,
          platform: a
        })
      }
    },
    4511: (e, t, r) => {
      r.d(t, {
        B1: () => E,
        C0: () => p,
        Dz: () => g,
        Jx: () => s,
        LI: () => a,
        PG: () => m,
        RI: () => l,
        Sg: () => h,
        T9: () => i,
        TV: () => y,
        WJ: () => b,
        _3: () => d,
        bV: () => x,
        jk: () => o,
        lP: () => C,
        nI: () => S,
        qE: () => f,
        r_: () => n,
        sq: () => v,
        w7: () => w
      });
      const n = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        a = Math.round,
        l = Math.floor,
        s = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        u = {
          start: "end",
          end: "start"
        };

      function f(e, t, r) {
        return i(e, o(t, r))
      }

      function d(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function p(e) {
        return e.split("-")[0]
      }

      function h(e) {
        return e.split("-")[1]
      }

      function m(e) {
        return "x" === e ? "y" : "x"
      }

      function v(e) {
        return "y" === e ? "height" : "width"
      }

      function y(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x"
      }

      function g(e) {
        return m(y(e))
      }

      function w(e, t, r) {
        void 0 === r && (r = !1);
        const n = h(e),
          o = g(e),
          i = v(o);
        let a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (a = x(a)), [a, x(a)]
      }

      function b(e) {
        const t = x(e);
        return [k(e), t, k(t)]
      }

      function k(e) {
        return e.replace(/start|end/g, (e => u[e]))
      }

      function C(e, t, r, n) {
        const o = h(e);
        let i = function(e, t, r) {
          const n = ["left", "right"],
            o = ["right", "left"],
            i = ["top", "bottom"],
            a = ["bottom", "top"];
          switch (e) {
            case "top":
            case "bottom":
              return r ? t ? o : n : t ? n : o;
            case "left":
            case "right":
              return t ? i : a;
            default:
              return []
          }
        }(p(e), "start" === r, n);
        return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(k)))), i
      }

      function x(e) {
        return e.replace(/left|right|bottom|top/g, (e => c[e]))
      }

      function S(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function E(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }
    },
    82536: (e, t, r) => {
      r.d(t, {
        Cb: () => n,
        US: () => o,
        xW: () => i,
        HZ: () => a,
        X6: () => l
      });
      var n = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        i = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        a = "--foundry_nu8bkp0",
        l = "foundry_nu8bkp1"
    },
    87882: (e, t, r) => {
      r.d(t, {
        UP: () => l,
        ic: () => f,
        qn: () => g,
        Pt: () => w,
        Rv: () => y,
        iQ: () => h,
        Mk: () => p,
        UQ: () => u,
        gr: () => m,
        Ub: () => i,
        jt: () => s,
        ZC: () => a,
        rl: () => v
      });
      var n = r(83540),
        o = r(62229);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const i = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, l] = (0, o.useState)((() => r ? i(e) : t));

        function s() {
          l(i(e))
        }
        return (0, o.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }), [e]), a
      }

      function a(e) {
        const t = (0, o.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function l(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const s = () => i("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)((() => {
          t.current = e
        })), (0, o.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const u = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, o.useRef)(),
          [i, a] = (0, o.useState)(!1),
          l = (0, o.useCallback)((() => {
            a(!0)
          }), []),
          s = (0, o.useCallback)(((t, r) => {
            let o = 0;
            return (...t) => {
              const r = Date.now();
              r - o >= 500 && (o = r, (() => {
                a(!1), window.clearTimeout(n.current), n.current = window.setTimeout(l, e)
              })(...t))
            }
          })(), []),
          c = (0, o.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(l, t)
          }), []),
          u = (0, o.useCallback)((() => {
            document.hidden || s()
          }), []);
        return (0, o.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", u), window.clearTimeout(n.current), a(!1)
          };
          return r ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", u), s()) : e(), () => e()
        }), [r]), {
          isIdle: i
        }
      };

      function f({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, o.useState)(e),
            [n] = r,
            i = (0, o.useRef)(n),
            a = c(t);
          return (0, o.useEffect)((() => {
            i.current !== n && (a(n), i.current = n)
          }), [n, i, a]), r
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, l = a ? e : n, s = c(r), u = (0, o.useCallback)((t => {
          if (a) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && s(r)
          } else i(t)
        }), [a, e, i, s]);
        return [l, u]
      }

      function d(e, t, r, n) {
        const i = (0, o.useRef)(t);
        (0, o.useEffect)((() => {
          i.current = t
        }), [t]), (0, o.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            i.current(e)
          };
          return t.addEventListener(e, o, n), () => {
            t.removeEventListener(e, o, n)
          }
        }), [e, r?.current, n])
      }
      const p = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), d("mouseenter", (() => {
            n(!0)
          }), t), d("mouseleave", (() => {
            n(!1)
          }), t), {
            isHovered: !!e && r
          }
        },
        h = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), d("focusin", (() => {
            n(!0)
          }), t), d("focusout", (() => {
            n(!1)
          }), t), {
            isFocused: !!e && r
          }
        },
        m = ({
          enabled: e = !0
        }) => {
          const [t, r] = (0, o.useState)(!1), [n, i] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            e || (r(!1), i(!1))
          }), [e]), {
            eventHandlers: {
              onLoad: () => {
                e && (i(!0), r(!1))
              },
              onAbort: () => {
                e && (i(!0), r(!1))
              },
              onError: () => {
                e && (i(!0), r(!1))
              }
            },
            error: t,
            loaded: n
          }
        };

      function v(e = !0) {
        return !!e && i("screen and (pointer: coarse) and (hover: none)")
      }
      const y = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: r = (() => null),
          onSingleClick: n = (() => null)
        }) => {
          const i = (0, o.useRef)(0),
            a = (0, o.useRef)();
          return {
            handleClick: o => {
              e && (i.current += 1, a.current = setTimeout((() => {
                1 === i.current ? n(o) : 2 === i.current && r(o), i.current = 0
              }), t))
            }
          }
        },
        g = (e, t = []) => {
          const r = (0, o.useRef)(!1);
          (0, o.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, o.useEffect)((() => {
            r.current && e()
          }), [...t])
        };

      function w() {
        return {
          countWrappedElements: e => {
            if (!e.current) return;
            const {
              children: t
            } = e.current;
            let r = 0,
              n = 0;
            return Array.from(t).map(((e, t) => {
              const o = e.getBoundingClientRect().top,
                i = e.getBoundingClientRect().height;
              return 0 === t && (r = o, n = i), o
            })).filter((e => e >= r + n)).length
          }
        }
      }
    },
    20147: (e, t, r) => {
      r.d(t, {
        NP: () => De,
        Ym: () => Re,
        DP: () => Le
      });
      var n = r(91029),
        o = {},
        i = r(26324),
        a = r.n(i);
      class l {
        constructor(e) {
          const {
            failure: t,
            gotoFn: r,
            output: n
          } = this._buildTables(e);
          this.gotoFn = r, this.output = n, this.failure = t
        }
        _buildTables(e) {
          const t = {
              0: {}
            },
            r = {};
          let n = 0;
          for (const o of e) {
            let e = 0;
            for (const i of o) t[e] && i in t[e] ? e = t[e][i] : (n++, t[e][i] = n, t[n] = {}, e = n, r[n] = []);
            r[e].push(o)
          }
          const o = {},
            i = [];
          for (const e in t[0]) {
            const r = t[0][e];
            o[r] = 0, i.push(r)
          }
          for (; i.length > 0;) {
            const e = i.shift();
            if (void 0 !== e)
              for (const n in t[e]) {
                const a = t[e][n];
                i.push(a);
                let l = o[e];
                for (; l > 0 && !(n in t[l]);) l = o[l];
                if (n in t[l]) {
                  const e = t[l][n];
                  o[a] = e, r[a] = [...r[a], ...r[e]]
                } else o[a] = 0
              }
          }
          return {
            gotoFn: t,
            output: r,
            failure: o
          }
        }
        search(e) {
          let t = 0;
          const r = [];
          for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
            if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
              const e = this.output[t];
              r.push([n, e])
            }
          }
          return r
        }
      }
      var s, c, u = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        f = !1;

      function d(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(s || (s = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(c || (c = {}));
      const p = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        h = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        m = new Map([
          [126, c.Element],
          [94, c.Start],
          [36, c.End],
          [42, c.Any],
          [33, c.Not],
          [124, c.Hyphen]
        ]),
        v = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        y = new Set(["contains", "icontains"]);

      function g(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function w(e) {
        return e.replace(h, g)
      }

      function b(e) {
        return 39 === e || 34 === e
      }

      function k(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function C(e) {
        const t = [],
          r = x(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function x(e, t, r) {
        let n = [];

        function o(e) {
          const n = t.slice(r + e).match(p);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [o] = n;
          return r += e + o.length, w(o)
        }

        function i(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function a() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || l(r) ? 41 !== t.charCodeAt(r) || l(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return w(t.slice(e, r - 1))
        }

        function l(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return 1 == (1 & r)
        }

        function u() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case s.Adjacent:
                case s.Child:
                case s.Descendant:
                case s.Parent:
                case s.Sibling:
                case s.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function f(e) {
          n.length > 0 && n[n.length - 1].type === s.Descendant ? n[n.length - 1].type = e : (u(), n.push({
            type: e
          }))
        }

        function d(e, t) {
          n.push({
            type: s.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function h() {
          if (n.length && n[n.length - 1].type === s.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
          e.push(n)
        }
        if (i(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== n.length && n[0].type === s.Descendant || (u(), n.push({
                type: s.Descendant
              })), i(1);
              break;
            case 62:
              f(s.Child), i(1);
              break;
            case 60:
              f(s.Parent), i(1);
              break;
            case 126:
              f(s.Sibling), i(1);
              break;
            case 43:
              f(s.Adjacent), i(1);
              break;
            case 46:
              d("class", c.Element);
              break;
            case 35:
              d("id", c.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(r) ? e = o(1) : t.startsWith("*|", r) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (a = e, e = o(1))), i(0);
              let u = c.Exists;
              const f = m.get(t.charCodeAt(r));
              if (f) {
                if (u = f, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(r) && (u = c.Equals, i(1));
              let d = "",
                p = null;
              if ("exists" !== u) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || l(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  d = w(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || l(r));) r += 1;
                  d = w(t.slice(e, r))
                }
                i(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (p = !1, i(1)) : 105 === e && (p = !0, i(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const h = {
                type: s.Attribute,
                name: e,
                action: u,
                value: d,
                namespace: a,
                ignoreCase: p
              };
              n.push(h);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: s.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(r))
                if (v.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = x(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = a(), y.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && b(e) && (i = i.slice(1, -1))
                  }
                  i = w(i)
                } n.push({
                type: s.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              h(), n = [], i(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && i(0);
                break
              }
              let a, l = null;
              if (42 === e) r += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(r + 1)) {
                  f(s.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!p.test(t.slice(r))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = a, 42 === t.charCodeAt(r + 1) ? (a = "*", r += 2) : a = o(1)), n.push("*" === a ? {
                type: s.Universal,
                namespace: l
              } : {
                type: s.Tag,
                name: a,
                namespace: l
              })
            }
          }
        }
        return h(), r
      }

      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(r), !0).forEach((function(t) {
            A(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function A(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const O = function e(t) {
        return r.withOptions = r => e(E(E({}, t), r)), r;

        function r(e, ...r) {
          const n = "string" == typeof e ? [e] : e.raw,
            {
              escapeSpecialCharacters: o = Array.isArray(e)
            } = t;
          let i = "";
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), i += t, e < r.length && (i += r[e])
          }
          const a = i.split("\n");
          let l = null;
          for (const e of a) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              l = l ? Math.min(l, e) : e
            }
          }
          if (null !== l) {
            const e = l;
            i = a.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
          }
          return i = i.trim(), o && (i = i.replace(/\\n/g, "\n")), i
        }
      }({});
      var P = function() {
        return P = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, P.apply(this, arguments)
      };

      function L(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function R(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      var T, j = /(\u000D|\u000C|\u000D\u000A)/g,
        M = /[\u0000\uD800-\uDFFF]/g,
        I = /(\/\*)[\s\S]*?(\*\/)/g,
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === r) return [o, String.fromCharCode.apply(null, n)];
            if (92 === i) {
              var a = B(e, o);
              if (null === a) return null;
              var l = R(a, 2),
                s = l[0],
                c = l[1];
              n.push(c), o = s
            } else {
              if (10 === i) return null;
              n.push(i)
            }
          }
          return null
        },
        _ = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        B = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], o = Math.min(t + 7, e.length), i = t + 2; i < o; i += 1) {
              var a = e.charCodeAt(i);
              if (!(a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102)) break;
              n.push(a)
            }
            if (i < e.length) {
              var l = e.charCodeAt(i);
              9 !== l && 32 !== l && 10 !== l || (i += 1)
            }
            return [i - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        F = function(e, t) {
          var r = $(e, t);
          if (null === r) return null;
          var n = R(r, 3),
            o = n[0],
            i = n[1],
            a = n[2],
            l = z(e, o + 1);
          if (null !== l) {
            var s = R(l, 2);
            return [s[0],
              ["<dimension-token>", i, s[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        $ = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (n.push(i, a), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var l = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var s = a >= 48 && a <= 57;
              if (s || (43 === a || 45 === a) && l >= 48 && l <= 57)
                for (r = "number", s ? (n.push(69, a), t += 2) : 45 === a ? (n.push(69, 45, l), t += 3) : (n.push(69, l), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, n),
            f = "number" === r ? parseFloat(u) : parseInt(u);
          return -0 === f && (f = 0), Number.isNaN(f) ? null : [t - 1, f, r]
        },
        N = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = B(e, t);
              if (null === o) break;
              var i = R(o, 2),
                a = i[0],
                l = i[1];
              r.push(l), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        z = function(e, t) {
          if (e.length <= t || !_(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = B(e, t);
              if (null === o) break;
              var i = R(o, 2),
                a = i[0],
                l = i[1];
              r.push(l), t = a
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        q = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], o = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) o || 0 === n.length || (o = !0);
            else if (92 === r) {
              var i = B(e, t);
              if (null === i || o) return null;
              var a = R(i, 2),
                l = a[0],
                s = a[1];
              n.push(s), t = l
            } else {
              if (o) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        W = function(e, t) {
          var r = z(e, t);
          if (null === r) return null;
          var n = R(r, 2),
            o = n[0],
            i = n[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var l = e.charCodeAt(o + a);
                if (34 === l || 39 === l) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== l && 32 !== l && 10 !== l) {
                  var s = q(e, o + a);
                  if (null === s) return null;
                  var c = R(s, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        H = function(e) {
          if (null === e.mediaCondition) return e;
          var t = U(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        U = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var o = e(n);
              if (null === o.operator && 1 === o.children.length) t.children[r] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var i = [r, 1], a = 0; a < o.children.length; a++) i.push(o.children[a]);
                t.children.splice.apply(t.children, i)
              }
            }
          }
          return t
        },
        V = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        J = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(j, "\n").replace(M, "�")).replace(I, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (E = D(e, t))) return null;
                var i = R(E, 2),
                  a = i[0],
                  l = i[1];
                r.push({
                  type: "<string-token>",
                  value: l
                }), t = a
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (h = e.charCodeAt(t + 1)) || h >= 65 && h <= 90 || h >= 97 && h <= 122 || h >= 128 || h >= 48 && h <= 57 || 92 === h && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var s = _(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (E = N(e, t + 1))) {
                    var c = R(E, 2);
                    a = c[0], l = c[1], r.push({
                      type: "<hash-token>",
                      value: l.toLowerCase(),
                      flag: s
                    }), t = a;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (E = D(e, t))) return null;
                var u = R(E, 2);
                a = u[0], l = u[1], r.push({
                  type: "<string-token>",
                  value: l
                }), t = a
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var f = F(e, t);
                if (null === f) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var d = R(f, 2);
                  a = d[0], "<dimension-token>" === (x = d[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = a
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (g = F(e, t))) {
                  var p = R(g, 2);
                  a = p[0], "<dimension-token>" === (x = p[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                if (t + 2 < e.length) {
                  var h = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === h && 62 === m) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (E = W(e, t))) {
                  var v = R(E, 3),
                    y = (a = v[0], l = v[1], v[2]);
                  r.push({
                    type: y,
                    value: l
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var g;
                if (null !== (g = F(e, t))) {
                  var w = R(g, 2);
                  a = w[0], "<dimension-token>" === (x = w[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
                if (t + 3 < e.length) {
                  h = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var b = e.charCodeAt(t + 3);
                  if (33 === h && 45 === m && 45 === b) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (64 === n) {
                if (null !== (E = z(e, t + 1))) {
                  var k = R(E, 2);
                  a = k[0], l = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: l.toLowerCase()
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (E = B(e, t))) return null;
                var C = R(E, 2);
                a = C[0], l = C[1], e = e.slice(0, t) + l + e.slice(a + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var x, S = R(E = F(e, t), 2);
                a = S[0], "<dimension-token>" === (x = S[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: x[1],
                  unit: x[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === x[0] ? r.push({
                  type: x[0],
                  value: x[1],
                  flag: x[2]
                }) : r.push({
                  type: x[0],
                  value: x[1],
                  flag: "number"
                }), t = a
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var E;
                if (null === (E = W(e, t))) return null;
                var A = R(E, 3);
                a = A[0], l = A[1], y = A[2], r.push({
                  type: y,
                  value: l
                }), t = a
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw V("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw V("Expected whitespace after media");
            r = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                n = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw V("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), Z(t)
        },
        X = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(P(P({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Z = function(e) {
          for (var t, r, n = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? n.push([]) : n[n.length - 1].push(i)
          }
          var a = n.map(X);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var l = a.map((function(e) {
              return 0 === e.length ? null : G(e)
            })),
            s = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(l), u = c.next(); !u.done; u = c.next()) {
              var f = u.value;
              null !== f && s.push(f)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === s.length) throw V("No valid media queries");
          return s
        },
        G = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Y(e, !0)
            }
          } catch (e) {
            throw V("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw V("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (r = o);
            var i = null === r ? 0 : 1;
            if (e.length <= i) throw V("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var l = a.value;
              if ("all" === l) n = "all";
              else if ("print" === l || "screen" === l) n = l;
              else {
                if ("tty" !== l && "tv" !== l && "projection" !== l && "handheld" !== l && "braille" !== l && "embossed" !== l && "aural" !== l && "speech" !== l) throw V("Unknown ident '".concat(l, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== a.type) throw V("Invalid media query");
              var s = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              s.push.apply(s, e), s.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Y(s, !0)
                }
              } catch (e) {
                throw V("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw V("Expected media condition after media prefix");
            var c = e[i + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw V("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Y(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw V("Expected media condition after 'and'", e)
            }
          }
        },
        Y = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, l = 0, s = 0; s < t.length; s++) {
            var c = t[s];
            if ("<(-token>" === c.type ? (l += 1, a = Math.max(a, l)) : "<)-token>" === c.type && (l -= 1), 0 === l) {
              i = s;
              break
            }
          }
          if (0 !== l) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, i + 1);
          if (o = 1 === a ? Q(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), i === t.length - 1) return {
            operator: n,
            children: [o]
          };
          var f = t[i + 1];
          if ("<ident-token>" !== f.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== f.value) throw new Error("'".concat(f.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === f.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== f.value && "or" !== f.value) throw new Error("Invalid operator: '".concat(f.value, "'\nInvalid media condition"));
          var d = e(t.slice(i + 2), r, f.value);
          return {
            operator: f.value,
            children: [o].concat(d.children)
          }
        },
        Q = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                o = e[r + 1],
                i = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === i.type && i.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: i.value,
                  wsBefore: n.wsBefore,
                  wsAfter: i.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var a = t[1];
          if ("<ident-token>" === a.type && 3 === t.length) return {
            context: "boolean",
            feature: a.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var l = t[3];
            if ("<number-token>" === l.type || "<dimension-token>" === l.type || "<ratio-token>" === l.type || "<ident-token>" === l.type) {
              var s = t[1].value,
                c = null,
                u = s.slice(0, 4);
              return "min-" === u ? (c = "min", s = s.slice(4)) : "max-" === u && (c = "max", s = s.slice(4)), l.wsBefore, l.wsAfter, {
                context: "value",
                prefix: c,
                feature: s,
                value: L(l, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var f = K(t);
            return {
              context: "range",
              feature: f.featureName,
              range: f
            }
          } catch (e) {
            throw V("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        K = function(e) {
          var t, r, n, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var i = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            a = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = "<" : i[a ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = ">" : i[a ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              i[a ? "leftOp" : "rightOp"] = "="
            }
            if (a) i.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              i.featureName = e[1].value
            }
            var l = 2 + (null !== (r = null === (t = i[a ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              s = e[l];
            if (a) {
              if ("<ident-token>" !== s.type) throw new Error("Invalid range");
              if (i.featureName = s.value, e.length >= 7) {
                var c = e[l + 1],
                  u = e[l + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var f = c.value;
                if (60 === f) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== f) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
                }
                var d = e[l + 1 + (null !== (o = null === (n = i.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0)];
                i.rightToken = d
              } else if (l + 2 !== e.length) throw new Error("Invalid range")
            } else i.rightToken = s;
            var p = null,
              h = i.leftToken,
              m = i.leftOp,
              v = i.featureName,
              y = i.rightOp,
              g = i.rightToken,
              w = null;
            if (null !== h)
              if ("<ident-token>" === h.type) {
                var b = h.type;
                "infinite" === (C = h.value) && (w = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== h.type && "<dimension-token>" !== h.type && "<ratio-token>" !== h.type || (h.wsBefore, h.wsAfter, w = L(h, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== g)
              if ("<ident-token>" === g.type) {
                var C;
                b = g.type, "infinite" === (C = g.value) && (k = {
                  type: b,
                  value: C
                })
              } else "<number-token>" !== g.type && "<dimension-token>" !== g.type && "<ratio-token>" !== g.type || (g.wsBefore, g.wsAfter, k = L(g, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== y && "<=" !== y) {
                if (">" !== m && ">=" !== m || ">" !== y && ">=" !== y) throw new Error("Invalid range");
                p = {
                  leftToken: w,
                  leftOp: m,
                  featureName: v,
                  rightOp: y,
                  rightToken: k
                }
              } else p = {
                leftToken: w,
                leftOp: m,
                featureName: v,
                rightOp: y,
                rightToken: k
              };
            else(null === w && null === m && null !== y && null !== k || null !== w && null !== m && null === y && null === k) && (p = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: y,
              rightToken: k
            });
            return p
          }
          throw new Error("Invalid range")
        };

      function ee(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? te(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ee(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ne(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }

      function oe(e, t) {
        for (var r in e) t(e[r], r)
      }

      function ie(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class ae {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new ae
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var o, i = t[n],
              a = null !== (o = r.precedenceLookup.get(i)) && void 0 !== o ? o : new Set;
            for (var l of t.slice(n + 1)) a.add(l);
            r.precedenceLookup.set(i, a)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var o;
              if (null !== (o = e.precedenceLookup.get(n)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: i,
              children: a
            }
            of e.ruleset.values()) {
            var l = this.ruleset.get(i);
            if (l && !l.children.isCompatible(a)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...r), o.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [i, a] of e.precedenceLookup.entries()) {
            var l, s = null !== (l = this.precedenceLookup.get(i)) && void 0 !== l ? l : new Set;
            this.precedenceLookup.set(i, new Set([...s, ...a]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var o = e.ruleset.get(n);
              if (!o) throw new Error("Can't find condition for ".concat(n));
              var i = t.findIndex((e => r.has(e.query)));
              i > -1 ? t.splice(i, 0, o) : t.push(o)
            };
          for (var [n, o] of this.precedenceLookup.entries()) r(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var i of r) o[i.selector] = i.rule;
            Object.assign(o, ...n.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var le, se = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        ce = Object.keys(se),
        ue = se,
        fe = (e, t) => new Error(O(le || (le = d(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        de = e => {
          if ("@media " === e) throw fe(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = H(e[t])
            })(J(e))
          } catch (t) {
            throw fe(e, t.message)
          }
        },
        pe = ["vars"],
        he = ["content"],
        me = "__DECLARATION",
        ve = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function ye(e, t, r, n) {
        var o = e.slice(0, t),
          i = e.slice(r);
        return "".concat(o).concat(n).concat(i)
      }
      var ge = [...ce, "@layer", "@media", "@supports", "@container", "selectors"];
      class we {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new ae], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new l(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type) {
            if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
              var [t, r] = e;
              return [t, this.transformProperties(r)]
            }))), void this.keyframesRules.push(e);
            if (this.currConditionalRuleset = new ae, "layer" === e.type) {
              var t = "@layer ".concat(e.name);
              this.addLayer([t])
            } else {
              var r = ie(e.rule, ge);
              this.addRule({
                selector: e.selector,
                rule: r
              }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
            }
            this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
          } else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, o, i)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return oe(e, ((t, r) => {
            "number" != typeof t || 0 === t || ve[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ne(e, pe);
          return t ? re(re({}, function(e, t) {
            var r, n, o, i = {};
            for (var a in e) i[(e[a], r = a, n = void 0, o = void 0, (o = (n = r).match(/^var\((.*)\)$/)) ? o[1] : n)] = e[a];
            return i
          }(t)), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = ne(e, he);
          return void 0 === t ? r : re({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(a()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (u.length < 1) throw new Error("No adapter configured");
                  return u[u.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: n,
              regex: o
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var i = this.localClassNamesSearch.search(t), a = t.length, l = i.length - 1; l >= 0; l--) {
            var [s, [c]] = i[l], f = s - c.length + 1;
            f >= a || (a = f, "." !== t[f - 1] && (t = ye(t, f, s + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          oe(t.selectors, ((t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(a()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = C(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(n()))
              }
              r.forEach((e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var o = e[r];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(O(T || (T = d(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: ie(t, ge)
            };
            r ? this.addConditionalRule(i, r) : this.addRule(i);
            var l = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(l, t["@layer"], r), this.transformSupports(l, t["@supports"], r), this.transformMedia(l, t["@media"], r)
          }))
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, i] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var a = "@media ".concat(o);
              de(a);
              var l = [...n, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: ie(i, ge)
              }, l), "local" === e.type && (this.transformSimplePseudos(e, i, l), this.transformSelectors(e, i, l)), this.transformLayer(e, i["@layer"], l), this.transformSupports(e, i["@supports"], l), this.transformContainer(e, i["@container"], l)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@container ".concat(e)))), oe(t, ((t, r) => {
            var o = "@container ".concat(r),
              i = [...n, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, ge)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@layer ".concat(e)))), oe(t, ((t, r) => {
            var o = [...n, "@layer ".concat(r)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, ge)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@supports ".concat(e)))), oe(t, ((t, r) => {
            var o = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: ie(t, ge)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (ue[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(be({
            "@font-face": t
          }));
          for (var r of this.keyframesRules) e.push(be({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var n of this.layers.values()) {
            var [o, ...i] = n.reverse(), a = {
              [o]: me
            };
            for (var l of i) a = {
              [l]: a
            };
            e.push(be(a))
          }
          for (var s of this.rules) e.push(be({
            [s.selector]: s.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var u of c.renderToArray()) e.push(be(u));
          return e.filter(Boolean)
        }
      }

      function be(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var o, i = e[n];
            i && Array.isArray(i) ? r.push(...i.map((e => be({
              [n]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || r.push("".concat(t).concat(n, " {\n").concat(be(i, t + "  "), "\n").concat(t, "}")) : i === me ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (o = n, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) n(o);
        return r.join("\n")
      }
      r(94751);
      var ke = new Set,
        Ce = [],
        xe = [];
      f || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        f = !0, u.push(e)
      })({
        appendCss: e => {
          xe.push(e)
        },
        registerClassName: e => {
          ke.add(e)
        },
        registerComposition: e => {
          Ce.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, o = new we(t, n);
            for (var i of r) o.processCssObj(i);
            return o.toCss()
          }({
            localClassNames: Array.from(ke),
            composedClassLists: Ce,
            cssObjs: xe
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = o[n];
            if (!i) {
              var a = document.createElement("style");
              t.packageName && a.setAttribute("data-package", t.packageName), a.setAttribute("data-file", t.filePath), a.setAttribute("type", "text/css"), i = o[n] = a, document.head.appendChild(a)
            }
            i.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), xe = []
        },
        getIdentOption: () => "short"
      });
      var Se = r(83919),
        Ee = r(82536),
        Ae = r(62229);
      const Oe = (0, Ae.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Ee.US,
          platformScaleBreakpoints: Ee.Cb,
          locale: "en-US"
        }),
        Pe = () => (0, Ae.useContext)(Oe),
        Le = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: i,
            platformScaleRatios: a,
            platformScaleBreakpoints: l,
            locale: s
          } = Pe();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: i,
            platformScaleRatios: a,
            platformScaleBreakpoints: l,
            locale: s
          }
        },
        Re = () => {
          const {
            locale: e
          } = Pe();
          return e
        };
      var Te = r(87882);
      const je = (e, t) => {
        const r = "more" === t ? Ee.xW.lightHc : Ee.xW.light,
          n = "more" === t ? Ee.xW.darkHc : Ee.xW.dark;
        return "dark" === e ? n : r
      };
      var Me = r(57120);
      const Ie = () => Me.X3 ? null : document.body,
        De = (0, Ae.forwardRef)((({
          children: e,
          className: t,
          container: r = Ie(),
          asChild: o,
          colorScheme: i,
          defaultColorScheme: a,
          contrastMode: l,
          defaultContrastMode: s,
          platformScaleBreakpoints: c,
          platformScaleRatios: u,
          defaultPlatformScale: f,
          platformScale: d,
          locale: p = "en-US"
        }, h) => {
          const m = (0, Ae.useRef)(null),
            v = (0, Te.UP)(m, h),
            y = (0, Ae.useRef)(r),
            {
              ratio: g,
              scale: w
            } = function(e) {
              const t = (0, Ae.useMemo)((() => ({
                  ...Ee.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, Ae.useMemo)((() => ({
                  ...Ee.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [n, o] = (0, Ae.useState)(e.platformScale || e.defaultPlatformScale),
                i = (0, Ae.useRef)([]),
                a = () => {
                  if (!Me.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of i.current) t.removeEventListener("change", e);
                    i.current = []
                  }
                };
              return (0, Ae.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
                if (!Me.X3) {
                  a();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      n = t => {
                        t.matches && o(e)
                      };
                    t.addEventListener("change", n), t.matches && o(e), i.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), a)), [r, e.platformScale]), {
                scale: n,
                ratio: t[n]
              }
            }({
              platformScaleBreakpoints: c,
              platformScaleRatios: u,
              defaultPlatformScale: f,
              platformScale: d
            }),
            {
              appearanceClass: b,
              otherAppearanceClasses: k,
              providerColor: C,
              providerContrast: x
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const o = (0, Te.Ub)("(prefers-color-scheme: light)"),
                i = (0, Te.Ub)("(prefers-color-scheme: dark)"),
                a = (0, Te.Ub)("(prefers-contrast: more)"),
                l = "system" !== e && e || o && "light" || i && "dark" || t,
                s = r || a && "more" || n,
                c = (0, Ae.useMemo)((() => je(l, s)), [l, s]),
                u = (0, Ae.useMemo)((() => ((e, t) => {
                  const r = je(e, t);
                  return [Ee.xW.light, Ee.xW.dark, Ee.xW.lightHc, Ee.xW.darkHc].filter((e => e !== r))
                })(l, s)), [l, s]);
              return {
                appearanceClass: c,
                otherAppearanceClasses: u,
                providerColor: l,
                providerContrast: s
              }
            }({
              colorScheme: i,
              defaultColorScheme: a,
              contrastMode: l,
              defaultContrastMode: s
            });
          return ((e, t, r, n, o) => {
            const i = (0, Te.ZC)(o),
              a = (0, Te.ZC)(e.current);
            (0, Ae.useEffect)((() => {
              e.current?.classList.contains(Ee.X6) || e.current?.classList.add(Ee.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
            }), [r, o]), (0, Ae.useEffect)((() => {
              e.current?.style.setProperty(Ee.HZ, t.toString())
            }), [t]), (0, Ae.useEffect)((() => {
              a?.classList.remove(Ee.X6), a?.classList.remove(r), a?.style.removeProperty(Ee.HZ), o && a?.classList.remove(o)
            }), [a])
          })(o ? m : y, g, b, k, t), (0, n.jsx)(Oe.Provider, {
            value: {
              locale: p,
              defaultColorScheme: a,
              colorScheme: C,
              defaultContrastMode: s,
              contrastMode: x,
              defaultPlatformScale: f,
              platformScale: w,
              platformScaleRatios: u,
              platformScaleBreakpoints: c
            },
            children: o ? (0, n.jsx)(Se.DX, {
              ref: v,
              children: e
            }) : e
          })
        }))
    }
  }
]);