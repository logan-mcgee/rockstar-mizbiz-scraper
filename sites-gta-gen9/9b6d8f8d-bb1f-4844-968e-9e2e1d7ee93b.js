! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9b6d8f8d-bb1f-4844-968e-9e2e1d7ee93b", e._sentryDebugIdIdentifier = "sentry-dbid-9b6d8f8d-bb1f-4844-968e-9e2e1d7ee93b")
  } catch (e) {}
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
  [1852], {
    11852: (e, t, n) => {
      "use strict";
      n.d(t, {
        E: () => ve
      });
      var r = n(62229),
        o = n(44853);

      function i(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return t && t.defaultView || window
        }
        return e
      }

      function a(e) {
        return e instanceof i(e).Element || e instanceof Element
      }

      function s(e) {
        return e instanceof i(e).HTMLElement || e instanceof HTMLElement
      }

      function f(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
      }
      var u = Math.max,
        c = Math.min,
        l = Math.round;

      function p() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
          return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
      }

      function d() {
        return !/^((?!chrome|android).)*safari/i.test(p())
      }

      function m(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          f = 1;
        t && s(e) && (o = e.offsetWidth > 0 && l(r.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && l(r.height) / e.offsetHeight || 1);
        var u = (a(e) ? i(e) : window).visualViewport,
          c = !d() && n,
          p = (r.left + (c && u ? u.offsetLeft : 0)) / o,
          m = (r.top + (c && u ? u.offsetTop : 0)) / f,
          h = r.width / o,
          y = r.height / f;
        return {
          width: h,
          height: y,
          top: m,
          right: p + h,
          bottom: m + y,
          left: p,
          x: p,
          y: m
        }
      }

      function h(e) {
        var t = i(e);
        return {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function y(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
      }

      function g(e) {
        return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement
      }

      function v(e) {
        return m(g(e)).left + h(e).scrollLeft
      }

      function b(e) {
        return i(e).getComputedStyle(e)
      }

      function w(e) {
        var t = b(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r)
      }

      function x(e, t, n) {
        void 0 === n && (n = !1);
        var r, o, a = s(t),
          f = s(t) && function(e) {
            var t = e.getBoundingClientRect(),
              n = l(t.width) / e.offsetWidth || 1,
              r = l(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          }(t),
          u = g(t),
          c = m(e, f, n),
          p = {
            scrollLeft: 0,
            scrollTop: 0
          },
          d = {
            x: 0,
            y: 0
          };
        return (a || !a && !n) && (("body" !== y(t) || w(u)) && (p = (r = t) !== i(r) && s(r) ? {
          scrollLeft: (o = r).scrollLeft,
          scrollTop: o.scrollTop
        } : h(r)), s(t) ? ((d = m(t, !0)).x += t.clientLeft, d.y += t.clientTop) : u && (d.x = v(u))), {
          x: c.left + p.scrollLeft - d.x,
          y: c.top + p.scrollTop - d.y,
          width: c.width,
          height: c.height
        }
      }

      function O(e) {
        var t = m(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: n,
          height: r
        }
      }

      function E(e) {
        return "html" === y(e) ? e : e.assignedSlot || e.parentNode || (f(e) ? e.host : null) || g(e)
      }

      function M(e) {
        return ["html", "body", "#document"].indexOf(y(e)) >= 0 ? e.ownerDocument.body : s(e) && w(e) ? e : M(E(e))
      }

      function j(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = M(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = i(r),
          s = o ? [a].concat(a.visualViewport || [], w(r) ? r : []) : r,
          f = t.concat(s);
        return o ? f : f.concat(j(E(s)))
      }

      function k(e) {
        return ["table", "td", "th"].indexOf(y(e)) >= 0
      }

      function A(e) {
        return s(e) && "fixed" !== b(e).position ? e.offsetParent : null
      }

      function D(e) {
        for (var t = i(e), n = A(e); n && k(n) && "static" === b(n).position;) n = A(n);
        return n && ("html" === y(n) || "body" === y(n) && "static" === b(n).position) ? t : n || function(e) {
          var t = /firefox/i.test(p());
          if (/Trident/i.test(p()) && s(e) && "fixed" === b(e).position) return null;
          var n = E(e);
          for (f(n) && (n = n.host); s(n) && ["html", "body"].indexOf(y(n)) < 0;) {
            var r = b(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode
          }
          return null
        }(e) || t
      }
      var _ = "top",
        S = "bottom",
        L = "right",
        P = "left",
        T = "auto",
        B = [_, S, L, P],
        R = "start",
        W = "end",
        H = "viewport",
        V = "popper",
        C = B.reduce((function(e, t) {
          return e.concat([t + "-" + R, t + "-" + W])
        }), []),
        q = [].concat(B, [T]).reduce((function(e, t) {
          return e.concat([t, t + "-" + R, t + "-" + W])
        }), []),
        U = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

      function I(e) {
        var t = new Map,
          n = new Set,
          r = [];

        function o(e) {
          n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
            if (!n.has(e)) {
              var r = t.get(e);
              r && o(r)
            }
          })), r.push(e)
        }
        return e.forEach((function(e) {
          t.set(e.name, e)
        })), e.forEach((function(e) {
          n.has(e.name) || o(e)
        })), r
      }
      var F = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };

      function N() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function(e) {
          return !(e && "function" == typeof e.getBoundingClientRect)
        }))
      }

      function z(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? F : o;
        return function(e, t, n) {
          void 0 === n && (n = i);
          var o, s, f = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, F, i),
              modifiersData: {},
              elements: {
                reference: e,
                popper: t
              },
              attributes: {},
              styles: {}
            },
            u = [],
            c = !1,
            l = {
              state: f,
              setOptions: function(n) {
                var o = "function" == typeof n ? n(f.options) : n;
                p(), f.options = Object.assign({}, i, f.options, o), f.scrollParents = {
                  reference: a(e) ? j(e) : e.contextElement ? j(e.contextElement) : [],
                  popper: j(t)
                };
                var s, c, d = function(e) {
                  var t = I(e);
                  return U.reduce((function(e, n) {
                    return e.concat(t.filter((function(e) {
                      return e.phase === n
                    })))
                  }), [])
                }((s = [].concat(r, f.options.modifiers), c = s.reduce((function(e, t) {
                  var n = e[t.name];
                  return e[t.name] = n ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                  }) : t, e
                }), {}), Object.keys(c).map((function(e) {
                  return c[e]
                }))));
                return f.orderedModifiers = d.filter((function(e) {
                  return e.enabled
                })), f.orderedModifiers.forEach((function(e) {
                  var t = e.name,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    o = e.effect;
                  if ("function" == typeof o) {
                    var i = o({
                      state: f,
                      name: t,
                      instance: l,
                      options: r
                    });
                    u.push(i || function() {})
                  }
                })), l.update()
              },
              forceUpdate: function() {
                if (!c) {
                  var e = f.elements,
                    t = e.reference,
                    n = e.popper;
                  if (N(t, n)) {
                    f.rects = {
                      reference: x(t, D(n), "fixed" === f.options.strategy),
                      popper: O(n)
                    }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach((function(e) {
                      return f.modifiersData[e.name] = Object.assign({}, e.data)
                    }));
                    for (var r = 0; r < f.orderedModifiers.length; r++)
                      if (!0 !== f.reset) {
                        var o = f.orderedModifiers[r],
                          i = o.fn,
                          a = o.options,
                          s = void 0 === a ? {} : a,
                          u = o.name;
                        "function" == typeof i && (f = i({
                          state: f,
                          options: s,
                          name: u,
                          instance: l
                        }) || f)
                      } else f.reset = !1, r = -1
                  }
                }
              },
              update: (o = function() {
                return new Promise((function(e) {
                  l.forceUpdate(), e(f)
                }))
              }, function() {
                return s || (s = new Promise((function(e) {
                  Promise.resolve().then((function() {
                    s = void 0, e(o())
                  }))
                }))), s
              }),
              destroy: function() {
                p(), c = !0
              }
            };
          if (!N(e, t)) return l;

          function p() {
            u.forEach((function(e) {
              return e()
            })), u = []
          }
          return l.setOptions(n).then((function(e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e)
          })), l
        }
      }
      var G = {
        passive: !0
      };

      function Y(e) {
        return e.split("-")[0]
      }

      function X(e) {
        return e.split("-")[1]
      }

      function $(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
      }

      function J(e) {
        var t, n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? Y(o) : null,
          a = o ? X(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          f = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case _:
            t = {
              x: s,
              y: n.y - r.height
            };
            break;
          case S:
            t = {
              x: s,
              y: n.y + n.height
            };
            break;
          case L:
            t = {
              x: n.x + n.width,
              y: f
            };
            break;
          case P:
            t = {
              x: n.x - r.width,
              y: f
            };
            break;
          default:
            t = {
              x: n.x,
              y: n.y
            }
        }
        var u = i ? $(i) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (a) {
            case R:
              t[u] = t[u] - (n[c] / 2 - r[c] / 2);
              break;
            case W:
              t[u] = t[u] + (n[c] / 2 - r[c] / 2)
          }
        }
        return t
      }
      var K = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };

      function Q(e) {
        var t, n = e.popper,
          r = e.popperRect,
          o = e.placement,
          a = e.variation,
          s = e.offsets,
          f = e.position,
          u = e.gpuAcceleration,
          c = e.adaptive,
          p = e.roundOffsets,
          d = e.isFixed,
          m = s.x,
          h = void 0 === m ? 0 : m,
          y = s.y,
          v = void 0 === y ? 0 : y,
          w = "function" == typeof p ? p({
            x: h,
            y: v
          }) : {
            x: h,
            y: v
          };
        h = w.x, v = w.y;
        var x = s.hasOwnProperty("x"),
          O = s.hasOwnProperty("y"),
          E = P,
          M = _,
          j = window;
        if (c) {
          var k = D(n),
            A = "clientHeight",
            T = "clientWidth";
          k === i(n) && "static" !== b(k = g(n)).position && "absolute" === f && (A = "scrollHeight", T = "scrollWidth"), (o === _ || (o === P || o === L) && a === W) && (M = S, v -= (d && k === j && j.visualViewport ? j.visualViewport.height : k[A]) - r.height, v *= u ? 1 : -1), o !== P && (o !== _ && o !== S || a !== W) || (E = L, h -= (d && k === j && j.visualViewport ? j.visualViewport.width : k[T]) - r.width, h *= u ? 1 : -1)
        }
        var B, R = Object.assign({
            position: f
          }, c && K),
          H = !0 === p ? function(e, t) {
            var n = e.x,
              r = e.y,
              o = t.devicePixelRatio || 1;
            return {
              x: l(n * o) / o || 0,
              y: l(r * o) / o || 0
            }
          }({
            x: h,
            y: v
          }, i(n)) : {
            x: h,
            y: v
          };
        return h = H.x, v = H.y, u ? Object.assign({}, R, ((B = {})[M] = O ? "0" : "", B[E] = x ? "0" : "", B.transform = (j.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", B)) : Object.assign({}, R, ((t = {})[M] = O ? v + "px" : "", t[E] = x ? h + "px" : "", t.transform = "", t))
      }
      var Z = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };

      function ee(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
          return Z[e]
        }))
      }
      var te = {
        start: "end",
        end: "start"
      };

      function ne(e) {
        return e.replace(/start|end/g, (function(e) {
          return te[e]
        }))
      }

      function re(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && f(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
          } while (r)
        }
        return !1
      }

      function oe(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height
        })
      }

      function ie(e, t, n) {
        return t === H ? oe(function(e, t) {
          var n = i(e),
            r = g(e),
            o = n.visualViewport,
            a = r.clientWidth,
            s = r.clientHeight,
            f = 0,
            u = 0;
          if (o) {
            a = o.width, s = o.height;
            var c = d();
            (c || !c && "fixed" === t) && (f = o.offsetLeft, u = o.offsetTop)
          }
          return {
            width: a,
            height: s,
            x: f + v(e),
            y: u
          }
        }(e, n)) : a(t) ? function(e, t) {
          var n = m(e, !1, "fixed" === t);
          return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(t, n) : oe(function(e) {
          var t, n = g(e),
            r = h(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = u(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            a = u(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            s = -r.scrollLeft + v(e),
            f = -r.scrollTop;
          return "rtl" === b(o || n).direction && (s += u(n.clientWidth, o ? o.clientWidth : 0) - i), {
            width: i,
            height: a,
            x: s,
            y: f
          }
        }(g(e)))
      }

      function ae(e) {
        return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, e)
      }

      function se(e, t) {
        return t.reduce((function(t, n) {
          return t[n] = e, t
        }), {})
      }

      function fe(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          f = void 0 === i ? e.strategy : i,
          l = n.boundary,
          p = void 0 === l ? "clippingParents" : l,
          d = n.rootBoundary,
          h = void 0 === d ? H : d,
          v = n.elementContext,
          w = void 0 === v ? V : v,
          x = n.altBoundary,
          O = void 0 !== x && x,
          M = n.padding,
          k = void 0 === M ? 0 : M,
          A = ae("number" != typeof k ? k : se(k, B)),
          P = w === V ? "reference" : V,
          T = e.rects.popper,
          R = e.elements[O ? P : w],
          W = function(e, t, n, r) {
            var o = "clippingParents" === t ? function(e) {
                var t = j(E(e)),
                  n = ["absolute", "fixed"].indexOf(b(e).position) >= 0 && s(e) ? D(e) : e;
                return a(n) ? t.filter((function(e) {
                  return a(e) && re(e, n) && "body" !== y(e)
                })) : []
              }(e) : [].concat(t),
              i = [].concat(o, [n]),
              f = i[0],
              l = i.reduce((function(t, n) {
                var o = ie(e, n, r);
                return t.top = u(o.top, t.top), t.right = c(o.right, t.right), t.bottom = c(o.bottom, t.bottom), t.left = u(o.left, t.left), t
              }), ie(e, f, r));
            return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
          }(a(R) ? R : R.contextElement || g(e.elements.popper), p, h, f),
          C = m(e.elements.reference),
          q = J({
            reference: C,
            element: T,
            strategy: "absolute",
            placement: o
          }),
          U = oe(Object.assign({}, T, q)),
          I = w === V ? U : C,
          F = {
            top: W.top - I.top + A.top,
            bottom: I.bottom - W.bottom + A.bottom,
            left: W.left - I.left + A.left,
            right: I.right - W.right + A.right
          },
          N = e.modifiersData.offset;
        if (w === V && N) {
          var z = N[o];
          Object.keys(F).forEach((function(e) {
            var t = [L, S].indexOf(e) >= 0 ? 1 : -1,
              n = [_, S].indexOf(e) >= 0 ? "y" : "x";
            F[e] += z[n] * t
          }))
        }
        return F
      }

      function ue(e, t, n) {
        return u(e, c(t, n))
      }

      function ce(e, t, n) {
        return void 0 === n && (n = {
          x: 0,
          y: 0
        }), {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x
        }
      }

      function le(e) {
        return [_, L, S, P].some((function(t) {
          return e[t] >= 0
        }))
      }
      var pe = z({
          defaultModifiers: [{
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
              var t = e.state,
                n = e.instance,
                r = e.options,
                o = r.scroll,
                a = void 0 === o || o,
                s = r.resize,
                f = void 0 === s || s,
                u = i(t.elements.popper),
                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
              return a && c.forEach((function(e) {
                  e.addEventListener("scroll", n.update, G)
                })), f && u.addEventListener("resize", n.update, G),
                function() {
                  a && c.forEach((function(e) {
                    e.removeEventListener("scroll", n.update, G)
                  })), f && u.removeEventListener("resize", n.update, G)
                }
            },
            data: {}
          }, {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = J({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
              })
            },
            data: {}
          }, {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                i = n.adaptive,
                a = void 0 === i || i,
                s = n.roundOffsets,
                f = void 0 === s || s,
                u = {
                  placement: Y(t.placement),
                  variation: X(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: o,
                  isFixed: "fixed" === t.options.strategy
                };
              null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Q(Object.assign({}, u, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: f
              })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Q(Object.assign({}, u, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: f
              })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
              })
            },
            data: {}
          }, {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
              var t = e.state;
              Object.keys(t.elements).forEach((function(e) {
                var n = t.styles[e] || {},
                  r = t.attributes[e] || {},
                  o = t.elements[e];
                s(o) && y(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                  var t = r[e];
                  !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                })))
              }))
            },
            effect: function(e) {
              var t = e.state,
                n = {
                  popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                  },
                  arrow: {
                    position: "absolute"
                  },
                  reference: {}
                };
              return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function() {
                  Object.keys(t.elements).forEach((function(e) {
                    var r = t.elements[e],
                      o = t.attributes[e] || {},
                      i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                        return e[t] = "", e
                      }), {});
                    s(r) && y(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                      r.removeAttribute(e)
                    })))
                  }))
                }
            },
            requires: ["computeStyles"]
          }, {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                o = n.offset,
                i = void 0 === o ? [0, 0] : o,
                a = q.reduce((function(e, n) {
                  return e[n] = function(e, t, n) {
                    var r = Y(e),
                      o = [P, _].indexOf(r) >= 0 ? -1 : 1,
                      i = "function" == typeof n ? n(Object.assign({}, t, {
                        placement: e
                      })) : n,
                      a = i[0],
                      s = i[1];
                    return a = a || 0, s = (s || 0) * o, [P, L].indexOf(r) >= 0 ? {
                      x: s,
                      y: a
                    } : {
                      x: a,
                      y: s
                    }
                  }(n, t.rects, i), e
                }), {}),
                s = a[t.placement],
                f = s.x,
                u = s.y;
              null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a
            }
          }, {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = e.name;
              if (!t.modifiersData[r]._skip) {
                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, u = n.padding, c = n.boundary, l = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, h = n.allowedAutoPlacements, y = t.options.placement, g = Y(y), v = f || (g !== y && m ? function(e) {
                    if (Y(e) === T) return [];
                    var t = ee(e);
                    return [ne(e), t, ne(t)]
                  }(y) : [ee(y)]), b = [y].concat(v).reduce((function(e, n) {
                    return e.concat(Y(n) === T ? function(e, t) {
                      void 0 === t && (t = {});
                      var n = t,
                        r = n.placement,
                        o = n.boundary,
                        i = n.rootBoundary,
                        a = n.padding,
                        s = n.flipVariations,
                        f = n.allowedAutoPlacements,
                        u = void 0 === f ? q : f,
                        c = X(r),
                        l = c ? s ? C : C.filter((function(e) {
                          return X(e) === c
                        })) : B,
                        p = l.filter((function(e) {
                          return u.indexOf(e) >= 0
                        }));
                      0 === p.length && (p = l);
                      var d = p.reduce((function(t, n) {
                        return t[n] = fe(e, {
                          placement: n,
                          boundary: o,
                          rootBoundary: i,
                          padding: a
                        })[Y(n)], t
                      }), {});
                      return Object.keys(d).sort((function(e, t) {
                        return d[e] - d[t]
                      }))
                    }(t, {
                      placement: n,
                      boundary: c,
                      rootBoundary: l,
                      padding: u,
                      flipVariations: m,
                      allowedAutoPlacements: h
                    }) : n)
                  }), []), w = t.rects.reference, x = t.rects.popper, O = new Map, E = !0, M = b[0], j = 0; j < b.length; j++) {
                  var k = b[j],
                    A = Y(k),
                    D = X(k) === R,
                    W = [_, S].indexOf(A) >= 0,
                    H = W ? "width" : "height",
                    V = fe(t, {
                      placement: k,
                      boundary: c,
                      rootBoundary: l,
                      altBoundary: p,
                      padding: u
                    }),
                    U = W ? D ? L : P : D ? S : _;
                  w[H] > x[H] && (U = ee(U));
                  var I = ee(U),
                    F = [];
                  if (i && F.push(V[A] <= 0), s && F.push(V[U] <= 0, V[I] <= 0), F.every((function(e) {
                      return e
                    }))) {
                    M = k, E = !1;
                    break
                  }
                  O.set(k, F)
                }
                if (E)
                  for (var N = function(e) {
                      var t = b.find((function(t) {
                        var n = O.get(t);
                        if (n) return n.slice(0, e).every((function(e) {
                          return e
                        }))
                      }));
                      if (t) return M = t, "break"
                    }, z = m ? 3 : 1; z > 0 && "break" !== N(z); z--);
                t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0)
              }
            },
            requiresIfExists: ["offset"],
            data: {
              _skip: !1
            }
          }, {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 !== a && a,
                f = n.boundary,
                l = n.rootBoundary,
                p = n.altBoundary,
                d = n.padding,
                m = n.tether,
                h = void 0 === m || m,
                y = n.tetherOffset,
                g = void 0 === y ? 0 : y,
                v = fe(t, {
                  boundary: f,
                  rootBoundary: l,
                  padding: d,
                  altBoundary: p
                }),
                b = Y(t.placement),
                w = X(t.placement),
                x = !w,
                E = $(b),
                M = "x" === E ? "y" : "x",
                j = t.modifiersData.popperOffsets,
                k = t.rects.reference,
                A = t.rects.popper,
                T = "function" == typeof g ? g(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : g,
                B = "number" == typeof T ? {
                  mainAxis: T,
                  altAxis: T
                } : Object.assign({
                  mainAxis: 0,
                  altAxis: 0
                }, T),
                W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                H = {
                  x: 0,
                  y: 0
                };
              if (j) {
                if (i) {
                  var V, C = "y" === E ? _ : P,
                    q = "y" === E ? S : L,
                    U = "y" === E ? "height" : "width",
                    I = j[E],
                    F = I + v[C],
                    N = I - v[q],
                    z = h ? -A[U] / 2 : 0,
                    G = w === R ? k[U] : A[U],
                    J = w === R ? -A[U] : -k[U],
                    K = t.elements.arrow,
                    Q = h && K ? O(K) : {
                      width: 0,
                      height: 0
                    },
                    Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    },
                    ee = Z[C],
                    te = Z[q],
                    ne = ue(0, k[U], Q[U]),
                    re = x ? k[U] / 2 - z - ne - ee - B.mainAxis : G - ne - ee - B.mainAxis,
                    oe = x ? -k[U] / 2 + z + ne + te + B.mainAxis : J + ne + te + B.mainAxis,
                    ie = t.elements.arrow && D(t.elements.arrow),
                    ae = ie ? "y" === E ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
                    se = null != (V = null == W ? void 0 : W[E]) ? V : 0,
                    ce = I + oe - se,
                    le = ue(h ? c(F, I + re - se - ae) : F, I, h ? u(N, ce) : N);
                  j[E] = le, H[E] = le - I
                }
                if (s) {
                  var pe, de = "x" === E ? _ : P,
                    me = "x" === E ? S : L,
                    he = j[M],
                    ye = "y" === M ? "height" : "width",
                    ge = he + v[de],
                    ve = he - v[me],
                    be = -1 !== [_, P].indexOf(b),
                    we = null != (pe = null == W ? void 0 : W[M]) ? pe : 0,
                    xe = be ? ge : he - k[ye] - A[ye] - we + B.altAxis,
                    Oe = be ? he + k[ye] + A[ye] - we - B.altAxis : ve,
                    Ee = h && be ? function(e, t, n) {
                      var r = ue(e, t, n);
                      return r > n ? n : r
                    }(xe, he, Oe) : ue(h ? xe : ge, he, h ? Oe : ve);
                  j[M] = Ee, H[M] = Ee - he
                }
                t.modifiersData[r] = H
              }
            },
            requiresIfExists: ["offset"]
          }, {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
              var t, n = e.state,
                r = e.name,
                o = e.options,
                i = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = Y(n.placement),
                f = $(s),
                u = [P, L].indexOf(s) >= 0 ? "height" : "width";
              if (i && a) {
                var c = function(e, t) {
                    return ae("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                      placement: t.placement
                    })) : e) ? e : se(e, B))
                  }(o.padding, n),
                  l = O(i),
                  p = "y" === f ? _ : P,
                  d = "y" === f ? S : L,
                  m = n.rects.reference[u] + n.rects.reference[f] - a[f] - n.rects.popper[u],
                  h = a[f] - n.rects.reference[f],
                  y = D(i),
                  g = y ? "y" === f ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                  v = m / 2 - h / 2,
                  b = c[p],
                  w = g - l[u] - c[d],
                  x = g / 2 - l[u] / 2 + v,
                  E = ue(b, x, w),
                  M = f;
                n.modifiersData[r] = ((t = {})[M] = E, t.centerOffset = E - x, t)
              }
            },
            effect: function(e) {
              var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
              null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && re(t.elements.popper, r) && (t.elements.arrow = r)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
          }, {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
              var t = e.state,
                n = e.name,
                r = t.rects.reference,
                o = t.rects.popper,
                i = t.modifiersData.preventOverflow,
                a = fe(t, {
                  elementContext: "reference"
                }),
                s = fe(t, {
                  altBoundary: !0
                }),
                f = ce(a, r),
                u = ce(s, o, i),
                c = le(f),
                l = le(u);
              t.modifiersData[n] = {
                referenceClippingOffsets: f,
                popperEscapeOffsets: u,
                isReferenceHidden: c,
                hasPopperEscaped: l
              }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": c,
                "data-popper-escaped": l
              })
            }
          }]
        }),
        de = n(28901),
        me = n.n(de),
        he = function(e) {
          return e.reduce((function(e, t) {
            var n = t[0],
              r = t[1];
            return e[n] = r, e
          }), {})
        },
        ye = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
        ge = [],
        ve = function(e, t, n) {
          void 0 === n && (n = {});
          var i = r.useRef(null),
            a = {
              onFirstUpdate: n.onFirstUpdate,
              placement: n.placement || "bottom",
              strategy: n.strategy || "absolute",
              modifiers: n.modifiers || ge
            },
            s = r.useState({
              styles: {
                popper: {
                  position: a.strategy,
                  left: "0",
                  top: "0"
                },
                arrow: {
                  position: "absolute"
                }
              },
              attributes: {}
            }),
            f = s[0],
            u = s[1],
            c = r.useMemo((function() {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                  var t = e.state,
                    n = Object.keys(t.elements);
                  o.flushSync((function() {
                    u({
                      styles: he(n.map((function(e) {
                        return [e, t.styles[e] || {}]
                      }))),
                      attributes: he(n.map((function(e) {
                        return [e, t.attributes[e]]
                      })))
                    })
                  }))
                },
                requires: ["computeStyles"]
              }
            }), []),
            l = r.useMemo((function() {
              var e = {
                onFirstUpdate: a.onFirstUpdate,
                placement: a.placement,
                strategy: a.strategy,
                modifiers: [].concat(a.modifiers, [c, {
                  name: "applyStyles",
                  enabled: !1
                }])
              };
              return me()(i.current, e) ? i.current || e : (i.current = e, e)
            }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]),
            p = r.useRef();
          return ye((function() {
            p.current && p.current.setOptions(l)
          }), [l]), ye((function() {
            if (null != e && null != t) {
              var r = (n.createPopper || pe)(e, t, l);
              return p.current = r,
                function() {
                  r.destroy(), p.current = null
                }
            }
          }), [e, t, n.createPopper]), {
            state: p.current ? p.current.state : null,
            styles: f.styles,
            attributes: f.attributes,
            update: p.current ? p.current.update : null,
            forceUpdate: p.current ? p.current.forceUpdate : null
          }
        }
    },
    28901: e => {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function i(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var s, f, u, c;
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1;
            for (f = s; 0 != f--;)
              if (!i(e[f], a[f])) return !1;
            return !0
          }
          if (n && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(f = c.next()).done;)
              if (!a.has(f.value[0])) return !1;
            for (c = e.entries(); !(f = c.next()).done;)
              if (!i(f.value[1], a.get(f.value[0]))) return !1;
            return !0
          }
          if (r && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(f = c.next()).done;)
              if (!a.has(f.value[0])) return !1;
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((s = e.length) != a.length) return !1;
            for (f = s; 0 != f--;)
              if (e[f] !== a[f]) return !1;
            return !0
          }
          if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
          if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf) return e.valueOf() === a.valueOf();
          if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString) return e.toString() === a.toString();
          if ((s = (u = Object.keys(e)).length) !== Object.keys(a).length) return !1;
          for (f = s; 0 != f--;)
            if (!Object.prototype.hasOwnProperty.call(a, u[f])) return !1;
          if (t && e instanceof Element) return !1;
          for (f = s; 0 != f--;)
            if (("_owner" !== u[f] && "__v" !== u[f] && "__o" !== u[f] || !e.$$typeof) && !i(e[u[f]], a[u[f]])) return !1;
          return !0
        }
        return e != e && a != a
      }
      e.exports = function(e, t) {
        try {
          return i(e, t)
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw e
        }
      }
    }
  }
]);