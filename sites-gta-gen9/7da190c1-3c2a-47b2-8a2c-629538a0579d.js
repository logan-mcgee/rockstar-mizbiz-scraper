try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7da190c1-3c2a-47b2-8a2c-629538a0579d", e._sentryDebugIdIdentifier = "sentry-dbid-7da190c1-3c2a-47b2-8a2c-629538a0579d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9047], {
    45098: e => {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

      function i(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var s, f, c, u;
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1;
            for (f = s; 0 != f--;)
              if (!i(e[f], a[f])) return !1;
            return !0
          }
          if (n && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (u = e.entries(); !(f = u.next()).done;)
              if (!a.has(f.value[0])) return !1;
            for (u = e.entries(); !(f = u.next()).done;)
              if (!i(f.value[1], a.get(f.value[0]))) return !1;
            return !0
          }
          if (r && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (u = e.entries(); !(f = u.next()).done;)
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
          if ((s = (c = Object.keys(e)).length) !== Object.keys(a).length) return !1;
          for (f = s; 0 != f--;)
            if (!Object.prototype.hasOwnProperty.call(a, c[f])) return !1;
          if (t && e instanceof Element) return !1;
          for (f = s; 0 != f--;)
            if (("_owner" !== c[f] && "__v" !== c[f] && "__o" !== c[f] || !e.$$typeof) && !i(e[c[f]], a[c[f]])) return !1;
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
    },
    99047: (e, t, n) => {
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
      var c = Math.max,
        u = Math.min,
        p = Math.round;

      function l() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
          return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
      }

      function d() {
        return !/^((?!chrome|android).)*safari/i.test(l())
      }

      function m(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          f = 1;
        t && s(e) && (o = e.offsetWidth > 0 && p(r.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && p(r.height) / e.offsetHeight || 1);
        var c = (a(e) ? i(e) : window).visualViewport,
          u = !d() && n,
          l = (r.left + (u && c ? c.offsetLeft : 0)) / o,
          m = (r.top + (u && c ? c.offsetTop : 0)) / f,
          h = r.width / o,
          y = r.height / f;
        return {
          width: h,
          height: y,
          top: m,
          right: l + h,
          bottom: m + y,
          left: l,
          x: l,
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
              n = p(t.width) / e.offsetWidth || 1,
              r = p(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          }(t),
          c = g(t),
          u = m(e, f, n),
          l = {
            scrollLeft: 0,
            scrollTop: 0
          },
          d = {
            x: 0,
            y: 0
          };
        return (a || !a && !n) && (("body" !== y(t) || w(c)) && (l = (r = t) !== i(r) && s(r) ? {
          scrollLeft: (o = r).scrollLeft,
          scrollTop: o.scrollTop
        } : h(r)), s(t) ? ((d = m(t, !0)).x += t.clientLeft, d.y += t.clientTop) : c && (d.x = v(c))), {
          x: u.left + l.scrollLeft - d.x,
          y: u.top + l.scrollTop - d.y,
          width: u.width,
          height: u.height
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

      function j(e) {
        return ["html", "body", "#document"].indexOf(y(e)) >= 0 ? e.ownerDocument.body : s(e) && w(e) ? e : j(E(e))
      }

      function k(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = j(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = i(r),
          s = o ? [a].concat(a.visualViewport || [], w(r) ? r : []) : r,
          f = t.concat(s);
        return o ? f : f.concat(k(E(s)))
      }

      function A(e) {
        return ["table", "td", "th"].indexOf(y(e)) >= 0
      }

      function D(e) {
        return s(e) && "fixed" !== b(e).position ? e.offsetParent : null
      }

      function M(e) {
        for (var t = i(e), n = D(e); n && A(n) && "static" === b(n).position;) n = D(n);
        return n && ("html" === y(n) || "body" === y(n) && "static" === b(n).position) ? t : n || function(e) {
          var t = /firefox/i.test(l());
          if (/Trident/i.test(l()) && s(e) && "fixed" === b(e).position) return null;
          var n = E(e);
          for (f(n) && (n = n.host); s(n) && ["html", "body"].indexOf(y(n)) < 0;) {
            var r = b(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode
          }
          return null
        }(e) || t
      }
      var S = "top",
        _ = "bottom",
        L = "right",
        P = "left",
        T = "auto",
        B = [S, _, L, P],
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
            c = [],
            u = !1,
            p = {
              state: f,
              setOptions: function(n) {
                var o = "function" == typeof n ? n(f.options) : n;
                l(), f.options = Object.assign({}, i, f.options, o), f.scrollParents = {
                  reference: a(e) ? k(e) : e.contextElement ? k(e.contextElement) : [],
                  popper: k(t)
                };
                var s, u, d = function(e) {
                  var t = I(e);
                  return U.reduce((function(e, n) {
                    return e.concat(t.filter((function(e) {
                      return e.phase === n
                    })))
                  }), [])
                }((s = [].concat(r, f.options.modifiers), u = s.reduce((function(e, t) {
                  var n = e[t.name];
                  return e[t.name] = n ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                  }) : t, e
                }), {}), Object.keys(u).map((function(e) {
                  return u[e]
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
                      instance: p,
                      options: r
                    });
                    c.push(i || function() {})
                  }
                })), p.update()
              },
              forceUpdate: function() {
                if (!u) {
                  var e = f.elements,
                    t = e.reference,
                    n = e.popper;
                  if (N(t, n)) {
                    f.rects = {
                      reference: x(t, M(n), "fixed" === f.options.strategy),
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
                          c = o.name;
                        "function" == typeof i && (f = i({
                          state: f,
                          options: s,
                          name: c,
                          instance: p
                        }) || f)
                      } else f.reset = !1, r = -1
                  }
                }
              },
              update: (o = function() {
                return new Promise((function(e) {
                  p.forceUpdate(), e(f)
                }))
              }, function() {
                return s || (s = new Promise((function(e) {
                  Promise.resolve().then((function() {
                    s = void 0, e(o())
                  }))
                }))), s
              }),
              destroy: function() {
                l(), u = !0
              }
            };
          if (!N(e, t)) return p;

          function l() {
            c.forEach((function(e) {
              return e()
            })), c = []
          }
          return p.setOptions(n).then((function(e) {
            !u && n.onFirstUpdate && n.onFirstUpdate(e)
          })), p
        }
      }
      var Y = {
        passive: !0
      };

      function X(e) {
        return e.split("-")[0]
      }

      function $(e) {
        return e.split("-")[1]
      }

      function G(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
      }

      function J(e) {
        var t, n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? X(o) : null,
          a = o ? $(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          f = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case S:
            t = {
              x: s,
              y: n.y - r.height
            };
            break;
          case _:
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
        var c = i ? G(i) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (a) {
            case R:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case W:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2)
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
          c = e.gpuAcceleration,
          u = e.adaptive,
          l = e.roundOffsets,
          d = e.isFixed,
          m = s.x,
          h = void 0 === m ? 0 : m,
          y = s.y,
          v = void 0 === y ? 0 : y,
          w = "function" == typeof l ? l({
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
          j = S,
          k = window;
        if (u) {
          var A = M(n),
            D = "clientHeight",
            T = "clientWidth";
          A === i(n) && "static" !== b(A = g(n)).position && "absolute" === f && (D = "scrollHeight", T = "scrollWidth"), (o === S || (o === P || o === L) && a === W) && (j = _, v -= (d && A === k && k.visualViewport ? k.visualViewport.height : A[D]) - r.height, v *= c ? 1 : -1), o !== P && (o !== S && o !== _ || a !== W) || (E = L, h -= (d && A === k && k.visualViewport ? k.visualViewport.width : A[T]) - r.width, h *= c ? 1 : -1)
        }
        var B, R = Object.assign({
            position: f
          }, u && K),
          H = !0 === l ? function(e, t) {
            var n = e.x,
              r = e.y,
              o = t.devicePixelRatio || 1;
            return {
              x: p(n * o) / o || 0,
              y: p(r * o) / o || 0
            }
          }({
            x: h,
            y: v
          }, i(n)) : {
            x: h,
            y: v
          };
        return h = H.x, v = H.y, c ? Object.assign({}, R, ((B = {})[j] = O ? "0" : "", B[E] = x ? "0" : "", B.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", B)) : Object.assign({}, R, ((t = {})[j] = O ? v + "px" : "", t[E] = x ? h + "px" : "", t.transform = "", t))
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
            c = 0;
          if (o) {
            a = o.width, s = o.height;
            var u = d();
            (u || !u && "fixed" === t) && (f = o.offsetLeft, c = o.offsetTop)
          }
          return {
            width: a,
            height: s,
            x: f + v(e),
            y: c
          }
        }(e, n)) : a(t) ? function(e, t) {
          var n = m(e, !1, "fixed" === t);
          return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(t, n) : oe(function(e) {
          var t, n = g(e),
            r = h(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = c(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            a = c(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            s = -r.scrollLeft + v(e),
            f = -r.scrollTop;
          return "rtl" === b(o || n).direction && (s += c(n.clientWidth, o ? o.clientWidth : 0) - i), {
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
          p = n.boundary,
          l = void 0 === p ? "clippingParents" : p,
          d = n.rootBoundary,
          h = void 0 === d ? H : d,
          v = n.elementContext,
          w = void 0 === v ? V : v,
          x = n.altBoundary,
          O = void 0 !== x && x,
          j = n.padding,
          A = void 0 === j ? 0 : j,
          D = ae("number" != typeof A ? A : se(A, B)),
          P = w === V ? "reference" : V,
          T = e.rects.popper,
          R = e.elements[O ? P : w],
          W = function(e, t, n, r) {
            var o = "clippingParents" === t ? function(e) {
                var t = k(E(e)),
                  n = ["absolute", "fixed"].indexOf(b(e).position) >= 0 && s(e) ? M(e) : e;
                return a(n) ? t.filter((function(e) {
                  return a(e) && re(e, n) && "body" !== y(e)
                })) : []
              }(e) : [].concat(t),
              i = [].concat(o, [n]),
              f = i[0],
              p = i.reduce((function(t, n) {
                var o = ie(e, n, r);
                return t.top = c(o.top, t.top), t.right = u(o.right, t.right), t.bottom = u(o.bottom, t.bottom), t.left = c(o.left, t.left), t
              }), ie(e, f, r));
            return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p
          }(a(R) ? R : R.contextElement || g(e.elements.popper), l, h, f),
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
            top: W.top - I.top + D.top,
            bottom: I.bottom - W.bottom + D.bottom,
            left: W.left - I.left + D.left,
            right: I.right - W.right + D.right
          },
          N = e.modifiersData.offset;
        if (w === V && N) {
          var z = N[o];
          Object.keys(F).forEach((function(e) {
            var t = [L, _].indexOf(e) >= 0 ? 1 : -1,
              n = [S, _].indexOf(e) >= 0 ? "y" : "x";
            F[e] += z[n] * t
          }))
        }
        return F
      }

      function ce(e, t, n) {
        return c(e, u(t, n))
      }

      function ue(e, t, n) {
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

      function pe(e) {
        return [S, L, _, P].some((function(t) {
          return e[t] >= 0
        }))
      }
      var le = z({
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
                c = i(t.elements.popper),
                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
              return a && u.forEach((function(e) {
                  e.addEventListener("scroll", n.update, Y)
                })), f && c.addEventListener("resize", n.update, Y),
                function() {
                  a && u.forEach((function(e) {
                    e.removeEventListener("scroll", n.update, Y)
                  })), f && c.removeEventListener("resize", n.update, Y)
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
                c = {
                  placement: X(t.placement),
                  variation: $(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: o,
                  isFixed: "fixed" === t.options.strategy
                };
              null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Q(Object.assign({}, c, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: f
              })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Q(Object.assign({}, c, {
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
                    var r = X(e),
                      o = [P, S].indexOf(r) >= 0 ? -1 : 1,
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
                c = s.y;
              null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
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
                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, h = n.allowedAutoPlacements, y = t.options.placement, g = X(y), v = f || (g !== y && m ? function(e) {
                    if (X(e) === T) return [];
                    var t = ee(e);
                    return [ne(e), t, ne(t)]
                  }(y) : [ee(y)]), b = [y].concat(v).reduce((function(e, n) {
                    return e.concat(X(n) === T ? function(e, t) {
                      void 0 === t && (t = {});
                      var n = t,
                        r = n.placement,
                        o = n.boundary,
                        i = n.rootBoundary,
                        a = n.padding,
                        s = n.flipVariations,
                        f = n.allowedAutoPlacements,
                        c = void 0 === f ? q : f,
                        u = $(r),
                        p = u ? s ? C : C.filter((function(e) {
                          return $(e) === u
                        })) : B,
                        l = p.filter((function(e) {
                          return c.indexOf(e) >= 0
                        }));
                      0 === l.length && (l = p);
                      var d = l.reduce((function(t, n) {
                        return t[n] = fe(e, {
                          placement: n,
                          boundary: o,
                          rootBoundary: i,
                          padding: a
                        })[X(n)], t
                      }), {});
                      return Object.keys(d).sort((function(e, t) {
                        return d[e] - d[t]
                      }))
                    }(t, {
                      placement: n,
                      boundary: u,
                      rootBoundary: p,
                      padding: c,
                      flipVariations: m,
                      allowedAutoPlacements: h
                    }) : n)
                  }), []), w = t.rects.reference, x = t.rects.popper, O = new Map, E = !0, j = b[0], k = 0; k < b.length; k++) {
                  var A = b[k],
                    D = X(A),
                    M = $(A) === R,
                    W = [S, _].indexOf(D) >= 0,
                    H = W ? "width" : "height",
                    V = fe(t, {
                      placement: A,
                      boundary: u,
                      rootBoundary: p,
                      altBoundary: l,
                      padding: c
                    }),
                    U = W ? M ? L : P : M ? _ : S;
                  w[H] > x[H] && (U = ee(U));
                  var I = ee(U),
                    F = [];
                  if (i && F.push(V[D] <= 0), s && F.push(V[U] <= 0, V[I] <= 0), F.every((function(e) {
                      return e
                    }))) {
                    j = A, E = !1;
                    break
                  }
                  O.set(A, F)
                }
                if (E)
                  for (var N = function(e) {
                      var t = b.find((function(t) {
                        var n = O.get(t);
                        if (n) return n.slice(0, e).every((function(e) {
                          return e
                        }))
                      }));
                      if (t) return j = t, "break"
                    }, z = m ? 3 : 1; z > 0 && "break" !== N(z); z--);
                t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0)
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
                p = n.rootBoundary,
                l = n.altBoundary,
                d = n.padding,
                m = n.tether,
                h = void 0 === m || m,
                y = n.tetherOffset,
                g = void 0 === y ? 0 : y,
                v = fe(t, {
                  boundary: f,
                  rootBoundary: p,
                  padding: d,
                  altBoundary: l
                }),
                b = X(t.placement),
                w = $(t.placement),
                x = !w,
                E = G(b),
                j = "x" === E ? "y" : "x",
                k = t.modifiersData.popperOffsets,
                A = t.rects.reference,
                D = t.rects.popper,
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
              if (k) {
                if (i) {
                  var V, C = "y" === E ? S : P,
                    q = "y" === E ? _ : L,
                    U = "y" === E ? "height" : "width",
                    I = k[E],
                    F = I + v[C],
                    N = I - v[q],
                    z = h ? -D[U] / 2 : 0,
                    Y = w === R ? A[U] : D[U],
                    J = w === R ? -D[U] : -A[U],
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
                    ne = ce(0, A[U], Q[U]),
                    re = x ? A[U] / 2 - z - ne - ee - B.mainAxis : Y - ne - ee - B.mainAxis,
                    oe = x ? -A[U] / 2 + z + ne + te + B.mainAxis : J + ne + te + B.mainAxis,
                    ie = t.elements.arrow && M(t.elements.arrow),
                    ae = ie ? "y" === E ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
                    se = null != (V = null == W ? void 0 : W[E]) ? V : 0,
                    ue = I + oe - se,
                    pe = ce(h ? u(F, I + re - se - ae) : F, I, h ? c(N, ue) : N);
                  k[E] = pe, H[E] = pe - I
                }
                if (s) {
                  var le, de = "x" === E ? S : P,
                    me = "x" === E ? _ : L,
                    he = k[j],
                    ye = "y" === j ? "height" : "width",
                    ge = he + v[de],
                    ve = he - v[me],
                    be = -1 !== [S, P].indexOf(b),
                    we = null != (le = null == W ? void 0 : W[j]) ? le : 0,
                    xe = be ? ge : he - A[ye] - D[ye] - we + B.altAxis,
                    Oe = be ? he + A[ye] + D[ye] - we - B.altAxis : ve,
                    Ee = h && be ? function(e, t, n) {
                      var r = ce(e, t, n);
                      return r > n ? n : r
                    }(xe, he, Oe) : ce(h ? xe : ge, he, h ? Oe : ve);
                  k[j] = Ee, H[j] = Ee - he
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
                s = X(n.placement),
                f = G(s),
                c = [P, L].indexOf(s) >= 0 ? "height" : "width";
              if (i && a) {
                var u = function(e, t) {
                    return ae("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                      placement: t.placement
                    })) : e) ? e : se(e, B))
                  }(o.padding, n),
                  p = O(i),
                  l = "y" === f ? S : P,
                  d = "y" === f ? _ : L,
                  m = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
                  h = a[f] - n.rects.reference[f],
                  y = M(i),
                  g = y ? "y" === f ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                  v = m / 2 - h / 2,
                  b = u[l],
                  w = g - p[c] - u[d],
                  x = g / 2 - p[c] / 2 + v,
                  E = ce(b, x, w),
                  j = f;
                n.modifiersData[r] = ((t = {})[j] = E, t.centerOffset = E - x, t)
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
                f = ue(a, r),
                c = ue(s, o, i),
                u = pe(f),
                p = pe(c);
              t.modifiersData[n] = {
                referenceClippingOffsets: f,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: p
              }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": p
              })
            }
          }]
        }),
        de = n(45098),
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
            c = s[1],
            u = r.useMemo((function() {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                  var t = e.state,
                    n = Object.keys(t.elements);
                  o.flushSync((function() {
                    c({
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
            p = r.useMemo((function() {
              var e = {
                onFirstUpdate: a.onFirstUpdate,
                placement: a.placement,
                strategy: a.strategy,
                modifiers: [].concat(a.modifiers, [u, {
                  name: "applyStyles",
                  enabled: !1
                }])
              };
              return me()(i.current, e) ? i.current || e : (i.current = e, e)
            }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u]),
            l = r.useRef();
          return ye((function() {
            l.current && l.current.setOptions(p)
          }), [p]), ye((function() {
            if (null != e && null != t) {
              var r = (n.createPopper || le)(e, t, p);
              return l.current = r,
                function() {
                  r.destroy(), l.current = null
                }
            }
          }), [e, t, n.createPopper]), {
            state: l.current ? l.current.state : null,
            styles: f.styles,
            attributes: f.attributes,
            update: l.current ? l.current.update : null,
            forceUpdate: l.current ? l.current.forceUpdate : null
          }
        }
    }
  }
]);