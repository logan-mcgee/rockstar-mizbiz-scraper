! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "80cf67cc-ab36-4c77-a4c9-5a70ab618264", e._sentryDebugIdIdentifier = "sentry-dbid-80cf67cc-ab36-4c77-a4c9-5a70ab618264")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [748], {
    5748: (e, t, n) => {
      n.r(t), n.d(t, {
        afterMain: () => O,
        afterRead: () => b,
        afterWrite: () => D,
        applyStyles: () => W,
        arrow: () => Z,
        auto: () => s,
        basePlacements: () => f,
        beforeMain: () => w,
        beforeRead: () => g,
        beforeWrite: () => E,
        bottom: () => o,
        clippingParents: () => l,
        computeStyles: () => ne,
        createPopper: () => Le,
        createPopperBase: () => _e,
        createPopperLite: () => We,
        detectOverflow: () => ge,
        end: () => p,
        eventListeners: () => oe,
        flip: () => ye,
        hide: () => xe,
        left: () => a,
        main: () => x,
        modifierPhases: () => k,
        offset: () => Oe,
        placements: () => v,
        popper: () => d,
        popperGenerator: () => Pe,
        popperOffsets: () => Ee,
        preventOverflow: () => je,
        read: () => y,
        reference: () => m,
        right: () => i,
        start: () => c,
        top: () => r,
        variationPlacements: () => h,
        viewport: () => u,
        write: () => j
      });
      var r = "top",
        o = "bottom",
        i = "right",
        a = "left",
        s = "auto",
        f = [r, o, i, a],
        c = "start",
        p = "end",
        l = "clippingParents",
        u = "viewport",
        d = "popper",
        m = "reference",
        h = f.reduce((function(e, t) {
          return e.concat([t + "-" + c, t + "-" + p])
        }), []),
        v = [].concat(f, [s]).reduce((function(e, t) {
          return e.concat([t, t + "-" + c, t + "-" + p])
        }), []),
        g = "beforeRead",
        y = "read",
        b = "afterRead",
        w = "beforeMain",
        x = "main",
        O = "afterMain",
        E = "beforeWrite",
        j = "write",
        D = "afterWrite",
        k = [g, y, b, w, x, O, E, j, D];

      function A(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
      }

      function M(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return t && t.defaultView || window
        }
        return e
      }

      function P(e) {
        return e instanceof M(e).Element || e instanceof Element
      }

      function _(e) {
        return e instanceof M(e).HTMLElement || e instanceof HTMLElement
      }

      function L(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof M(e).ShadowRoot || e instanceof ShadowRoot)
      }
      const W = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
          var t = e.state;
          Object.keys(t.elements).forEach((function(e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            _(o) && A(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
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
                _(r) && A(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                  r.removeAttribute(e)
                })))
              }))
            }
        },
        requires: ["computeStyles"]
      };

      function R(e) {
        return e.split("-")[0]
      }
      var B = Math.max,
        H = Math.min,
        S = Math.round;

      function T() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
          return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
      }

      function C() {
        return !/^((?!chrome|android).)*safari/i.test(T())
      }

      function V(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t && _(e) && (o = e.offsetWidth > 0 && S(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && S(r.height) / e.offsetHeight || 1);
        var a = (P(e) ? M(e) : window).visualViewport,
          s = !C() && n,
          f = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          p = r.width / o,
          l = r.height / i;
        return {
          width: p,
          height: l,
          top: c,
          right: f + p,
          bottom: c + l,
          left: f,
          x: f,
          y: c
        }
      }

      function q(e) {
        var t = V(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: n,
          height: r
        }
      }

      function I(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && L(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
          } while (r)
        }
        return !1
      }

      function N(e) {
        return M(e).getComputedStyle(e)
      }

      function F(e) {
        return ["table", "td", "th"].indexOf(A(e)) >= 0
      }

      function U(e) {
        return ((P(e) ? e.ownerDocument : e.document) || window.document).documentElement
      }

      function z(e) {
        return "html" === A(e) ? e : e.assignedSlot || e.parentNode || (L(e) ? e.host : null) || U(e)
      }

      function Y(e) {
        return _(e) && "fixed" !== N(e).position ? e.offsetParent : null
      }

      function X(e) {
        for (var t = M(e), n = Y(e); n && F(n) && "static" === N(n).position;) n = Y(n);
        return n && ("html" === A(n) || "body" === A(n) && "static" === N(n).position) ? t : n || function(e) {
          var t = /firefox/i.test(T());
          if (/Trident/i.test(T()) && _(e) && "fixed" === N(e).position) return null;
          var n = z(e);
          for (L(n) && (n = n.host); _(n) && ["html", "body"].indexOf(A(n)) < 0;) {
            var r = N(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode
          }
          return null
        }(e) || t
      }

      function G(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
      }

      function J(e, t, n) {
        return B(e, H(t, n))
      }

      function K(e) {
        return Object.assign({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, e)
      }

      function Q(e, t) {
        return t.reduce((function(t, n) {
          return t[n] = e, t
        }), {})
      }
      const Z = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
          var t, n = e.state,
            s = e.name,
            c = e.options,
            p = n.elements.arrow,
            l = n.modifiersData.popperOffsets,
            u = R(n.placement),
            d = G(u),
            m = [a, i].indexOf(u) >= 0 ? "height" : "width";
          if (p && l) {
            var h = function(e, t) {
                return K("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : e) ? e : Q(e, f))
              }(c.padding, n),
              v = q(p),
              g = "y" === d ? r : a,
              y = "y" === d ? o : i,
              b = n.rects.reference[m] + n.rects.reference[d] - l[d] - n.rects.popper[m],
              w = l[d] - n.rects.reference[d],
              x = X(p),
              O = x ? "y" === d ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
              E = b / 2 - w / 2,
              j = h[g],
              D = O - v[m] - h[y],
              k = O / 2 - v[m] / 2 + E,
              A = J(j, k, D),
              M = d;
            n.modifiersData[s] = ((t = {})[M] = A, t.centerOffset = A - k, t)
          }
        },
        effect: function(e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && I(t.elements.popper, r) && (t.elements.arrow = r)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };

      function $(e) {
        return e.split("-")[1]
      }
      var ee = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };

      function te(e) {
        var t, n = e.popper,
          s = e.popperRect,
          f = e.placement,
          c = e.variation,
          l = e.offsets,
          u = e.position,
          d = e.gpuAcceleration,
          m = e.adaptive,
          h = e.roundOffsets,
          v = e.isFixed,
          g = l.x,
          y = void 0 === g ? 0 : g,
          b = l.y,
          w = void 0 === b ? 0 : b,
          x = "function" == typeof h ? h({
            x: y,
            y: w
          }) : {
            x: y,
            y: w
          };
        y = x.x, w = x.y;
        var O = l.hasOwnProperty("x"),
          E = l.hasOwnProperty("y"),
          j = a,
          D = r,
          k = window;
        if (m) {
          var A = X(n),
            P = "clientHeight",
            _ = "clientWidth";
          A === M(n) && "static" !== N(A = U(n)).position && "absolute" === u && (P = "scrollHeight", _ = "scrollWidth"), (f === r || (f === a || f === i) && c === p) && (D = o, w -= (v && A === k && k.visualViewport ? k.visualViewport.height : A[P]) - s.height, w *= d ? 1 : -1), f !== a && (f !== r && f !== o || c !== p) || (j = i, y -= (v && A === k && k.visualViewport ? k.visualViewport.width : A[_]) - s.width, y *= d ? 1 : -1)
        }
        var L, W = Object.assign({
            position: u
          }, m && ee),
          R = !0 === h ? function(e, t) {
            var n = e.x,
              r = e.y,
              o = t.devicePixelRatio || 1;
            return {
              x: S(n * o) / o || 0,
              y: S(r * o) / o || 0
            }
          }({
            x: y,
            y: w
          }, M(n)) : {
            x: y,
            y: w
          };
        return y = R.x, w = R.y, d ? Object.assign({}, W, ((L = {})[D] = E ? "0" : "", L[j] = O ? "0" : "", L.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + w + "px)" : "translate3d(" + y + "px, " + w + "px, 0)", L)) : Object.assign({}, W, ((t = {})[D] = E ? w + "px" : "", t[j] = O ? y + "px" : "", t.transform = "", t))
      }
      const ne = {
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
              placement: R(t.placement),
              variation: $(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy
            };
          null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, te(Object.assign({}, c, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a,
            roundOffsets: f
          })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, te(Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: f
          })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement
          })
        },
        data: {}
      };
      var re = {
        passive: !0
      };
      const oe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o || o,
            a = r.resize,
            s = void 0 === a || a,
            f = M(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return i && c.forEach((function(e) {
              e.addEventListener("scroll", n.update, re)
            })), s && f.addEventListener("resize", n.update, re),
            function() {
              i && c.forEach((function(e) {
                e.removeEventListener("scroll", n.update, re)
              })), s && f.removeEventListener("resize", n.update, re)
            }
        },
        data: {}
      };
      var ie = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };

      function ae(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
          return ie[e]
        }))
      }
      var se = {
        start: "end",
        end: "start"
      };

      function fe(e) {
        return e.replace(/start|end/g, (function(e) {
          return se[e]
        }))
      }

      function ce(e) {
        var t = M(e);
        return {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function pe(e) {
        return V(U(e)).left + ce(e).scrollLeft
      }

      function le(e) {
        var t = N(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r)
      }

      function ue(e) {
        return ["html", "body", "#document"].indexOf(A(e)) >= 0 ? e.ownerDocument.body : _(e) && le(e) ? e : ue(z(e))
      }

      function de(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = ue(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = M(r),
          a = o ? [i].concat(i.visualViewport || [], le(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(de(z(a)))
      }

      function me(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height
        })
      }

      function he(e, t, n) {
        return t === u ? me(function(e, t) {
          var n = M(e),
            r = U(e),
            o = n.visualViewport,
            i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            f = 0;
          if (o) {
            i = o.width, a = o.height;
            var c = C();
            (c || !c && "fixed" === t) && (s = o.offsetLeft, f = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: s + pe(e),
            y: f
          }
        }(e, n)) : P(t) ? function(e, t) {
          var n = V(e, !1, "fixed" === t);
          return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(t, n) : me(function(e) {
          var t, n = U(e),
            r = ce(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = B(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            a = B(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            s = -r.scrollLeft + pe(e),
            f = -r.scrollTop;
          return "rtl" === N(o || n).direction && (s += B(n.clientWidth, o ? o.clientWidth : 0) - i), {
            width: i,
            height: a,
            x: s,
            y: f
          }
        }(U(e)))
      }

      function ve(e) {
        var t, n = e.reference,
          s = e.element,
          f = e.placement,
          l = f ? R(f) : null,
          u = f ? $(f) : null,
          d = n.x + n.width / 2 - s.width / 2,
          m = n.y + n.height / 2 - s.height / 2;
        switch (l) {
          case r:
            t = {
              x: d,
              y: n.y - s.height
            };
            break;
          case o:
            t = {
              x: d,
              y: n.y + n.height
            };
            break;
          case i:
            t = {
              x: n.x + n.width,
              y: m
            };
            break;
          case a:
            t = {
              x: n.x - s.width,
              y: m
            };
            break;
          default:
            t = {
              x: n.x,
              y: n.y
            }
        }
        var h = l ? G(l) : null;
        if (null != h) {
          var v = "y" === h ? "height" : "width";
          switch (u) {
            case c:
              t[h] = t[h] - (n[v] / 2 - s[v] / 2);
              break;
            case p:
              t[h] = t[h] + (n[v] / 2 - s[v] / 2)
          }
        }
        return t
      }

      function ge(e, t) {
        void 0 === t && (t = {});
        var n = t,
          a = n.placement,
          s = void 0 === a ? e.placement : a,
          c = n.strategy,
          p = void 0 === c ? e.strategy : c,
          h = n.boundary,
          v = void 0 === h ? l : h,
          g = n.rootBoundary,
          y = void 0 === g ? u : g,
          b = n.elementContext,
          w = void 0 === b ? d : b,
          x = n.altBoundary,
          O = void 0 !== x && x,
          E = n.padding,
          j = void 0 === E ? 0 : E,
          D = K("number" != typeof j ? j : Q(j, f)),
          k = w === d ? m : d,
          M = e.rects.popper,
          L = e.elements[O ? k : w],
          W = function(e, t, n, r) {
            var o = "clippingParents" === t ? function(e) {
                var t = de(z(e)),
                  n = ["absolute", "fixed"].indexOf(N(e).position) >= 0 && _(e) ? X(e) : e;
                return P(n) ? t.filter((function(e) {
                  return P(e) && I(e, n) && "body" !== A(e)
                })) : []
              }(e) : [].concat(t),
              i = [].concat(o, [n]),
              a = i[0],
              s = i.reduce((function(t, n) {
                var o = he(e, n, r);
                return t.top = B(o.top, t.top), t.right = H(o.right, t.right), t.bottom = H(o.bottom, t.bottom), t.left = B(o.left, t.left), t
              }), he(e, a, r));
            return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
          }(P(L) ? L : L.contextElement || U(e.elements.popper), v, y, p),
          R = V(e.elements.reference),
          S = ve({
            reference: R,
            element: M,
            strategy: "absolute",
            placement: s
          }),
          T = me(Object.assign({}, M, S)),
          C = w === d ? T : R,
          q = {
            top: W.top - C.top + D.top,
            bottom: C.bottom - W.bottom + D.bottom,
            left: W.left - C.left + D.left,
            right: C.right - W.right + D.right
          },
          F = e.modifiersData.offset;
        if (w === d && F) {
          var Y = F[s];
          Object.keys(q).forEach((function(e) {
            var t = [i, o].indexOf(e) >= 0 ? 1 : -1,
              n = [r, o].indexOf(e) >= 0 ? "y" : "x";
            q[e] += Y[n] * t
          }))
        }
        return q
      }
      const ye = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
          var t = e.state,
            n = e.options,
            p = e.name;
          if (!t.modifiersData[p]._skip) {
            for (var l = n.mainAxis, u = void 0 === l || l, d = n.altAxis, m = void 0 === d || d, g = n.fallbackPlacements, y = n.padding, b = n.boundary, w = n.rootBoundary, x = n.altBoundary, O = n.flipVariations, E = void 0 === O || O, j = n.allowedAutoPlacements, D = t.options.placement, k = R(D), A = g || (k !== D && E ? function(e) {
                if (R(e) === s) return [];
                var t = ae(e);
                return [fe(e), t, fe(t)]
              }(D) : [ae(D)]), M = [D].concat(A).reduce((function(e, n) {
                return e.concat(R(n) === s ? function(e, t) {
                  void 0 === t && (t = {});
                  var n = t,
                    r = n.placement,
                    o = n.boundary,
                    i = n.rootBoundary,
                    a = n.padding,
                    s = n.flipVariations,
                    c = n.allowedAutoPlacements,
                    p = void 0 === c ? v : c,
                    l = $(r),
                    u = l ? s ? h : h.filter((function(e) {
                      return $(e) === l
                    })) : f,
                    d = u.filter((function(e) {
                      return p.indexOf(e) >= 0
                    }));
                  0 === d.length && (d = u);
                  var m = d.reduce((function(t, n) {
                    return t[n] = ge(e, {
                      placement: n,
                      boundary: o,
                      rootBoundary: i,
                      padding: a
                    })[R(n)], t
                  }), {});
                  return Object.keys(m).sort((function(e, t) {
                    return m[e] - m[t]
                  }))
                }(t, {
                  placement: n,
                  boundary: b,
                  rootBoundary: w,
                  padding: y,
                  flipVariations: E,
                  allowedAutoPlacements: j
                }) : n)
              }), []), P = t.rects.reference, _ = t.rects.popper, L = new Map, W = !0, B = M[0], H = 0; H < M.length; H++) {
              var S = M[H],
                T = R(S),
                C = $(S) === c,
                V = [r, o].indexOf(T) >= 0,
                q = V ? "width" : "height",
                I = ge(t, {
                  placement: S,
                  boundary: b,
                  rootBoundary: w,
                  altBoundary: x,
                  padding: y
                }),
                N = V ? C ? i : a : C ? o : r;
              P[q] > _[q] && (N = ae(N));
              var F = ae(N),
                U = [];
              if (u && U.push(I[T] <= 0), m && U.push(I[N] <= 0, I[F] <= 0), U.every((function(e) {
                  return e
                }))) {
                B = S, W = !1;
                break
              }
              L.set(S, U)
            }
            if (W)
              for (var z = function(e) {
                  var t = M.find((function(t) {
                    var n = L.get(t);
                    if (n) return n.slice(0, e).every((function(e) {
                      return e
                    }))
                  }));
                  if (t) return B = t, "break"
                }, Y = E ? 3 : 1; Y > 0 && "break" !== z(Y); Y--);
            t.placement !== B && (t.modifiersData[p]._skip = !0, t.placement = B, t.reset = !0)
          }
        },
        requiresIfExists: ["offset"],
        data: {
          _skip: !1
        }
      };

      function be(e, t, n) {
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

      function we(e) {
        return [r, i, o, a].some((function(t) {
          return e[t] >= 0
        }))
      }
      const xe = {
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
              a = ge(t, {
                elementContext: "reference"
              }),
              s = ge(t, {
                altBoundary: !0
              }),
              f = be(a, r),
              c = be(s, o, i),
              p = we(f),
              l = we(c);
            t.modifiersData[n] = {
              referenceClippingOffsets: f,
              popperEscapeOffsets: c,
              isReferenceHidden: p,
              hasPopperEscaped: l
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": p,
              "data-popper-escaped": l
            })
          }
        },
        Oe = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function(e) {
            var t = e.state,
              n = e.options,
              o = e.name,
              s = n.offset,
              f = void 0 === s ? [0, 0] : s,
              c = v.reduce((function(e, n) {
                return e[n] = function(e, t, n) {
                  var o = R(e),
                    s = [a, r].indexOf(o) >= 0 ? -1 : 1,
                    f = "function" == typeof n ? n(Object.assign({}, t, {
                      placement: e
                    })) : n,
                    c = f[0],
                    p = f[1];
                  return c = c || 0, p = (p || 0) * s, [a, i].indexOf(o) >= 0 ? {
                    x: p,
                    y: c
                  } : {
                    x: c,
                    y: p
                  }
                }(n, t.rects, f), e
              }), {}),
              p = c[t.placement],
              l = p.x,
              u = p.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = c
          }
        },
        Ee = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function(e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = ve({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement
            })
          },
          data: {}
        },
        je = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function(e) {
            var t = e.state,
              n = e.options,
              s = e.name,
              f = n.mainAxis,
              p = void 0 === f || f,
              l = n.altAxis,
              u = void 0 !== l && l,
              d = n.boundary,
              m = n.rootBoundary,
              h = n.altBoundary,
              v = n.padding,
              g = n.tether,
              y = void 0 === g || g,
              b = n.tetherOffset,
              w = void 0 === b ? 0 : b,
              x = ge(t, {
                boundary: d,
                rootBoundary: m,
                padding: v,
                altBoundary: h
              }),
              O = R(t.placement),
              E = $(t.placement),
              j = !E,
              D = G(O),
              k = "x" === D ? "y" : "x",
              A = t.modifiersData.popperOffsets,
              M = t.rects.reference,
              P = t.rects.popper,
              _ = "function" == typeof w ? w(Object.assign({}, t.rects, {
                placement: t.placement
              })) : w,
              L = "number" == typeof _ ? {
                mainAxis: _,
                altAxis: _
              } : Object.assign({
                mainAxis: 0,
                altAxis: 0
              }, _),
              W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
              S = {
                x: 0,
                y: 0
              };
            if (A) {
              if (p) {
                var T, C = "y" === D ? r : a,
                  V = "y" === D ? o : i,
                  I = "y" === D ? "height" : "width",
                  N = A[D],
                  F = N + x[C],
                  U = N - x[V],
                  z = y ? -P[I] / 2 : 0,
                  Y = E === c ? M[I] : P[I],
                  K = E === c ? -P[I] : -M[I],
                  Q = t.elements.arrow,
                  Z = y && Q ? q(Q) : {
                    width: 0,
                    height: 0
                  },
                  ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                  },
                  te = ee[C],
                  ne = ee[V],
                  re = J(0, M[I], Z[I]),
                  oe = j ? M[I] / 2 - z - re - te - L.mainAxis : Y - re - te - L.mainAxis,
                  ie = j ? -M[I] / 2 + z + re + ne + L.mainAxis : K + re + ne + L.mainAxis,
                  ae = t.elements.arrow && X(t.elements.arrow),
                  se = ae ? "y" === D ? ae.clientTop || 0 : ae.clientLeft || 0 : 0,
                  fe = null != (T = null == W ? void 0 : W[D]) ? T : 0,
                  ce = N + ie - fe,
                  pe = J(y ? H(F, N + oe - fe - se) : F, N, y ? B(U, ce) : U);
                A[D] = pe, S[D] = pe - N
              }
              if (u) {
                var le, ue = "x" === D ? r : a,
                  de = "x" === D ? o : i,
                  me = A[k],
                  he = "y" === k ? "height" : "width",
                  ve = me + x[ue],
                  ye = me - x[de],
                  be = -1 !== [r, a].indexOf(O),
                  we = null != (le = null == W ? void 0 : W[k]) ? le : 0,
                  xe = be ? ve : me - M[he] - P[he] - we + L.altAxis,
                  Oe = be ? me + M[he] + P[he] - we - L.altAxis : ye,
                  Ee = y && be ? function(e, t, n) {
                    var r = J(e, t, n);
                    return r > n ? n : r
                  }(xe, me, Oe) : J(y ? xe : ve, me, y ? Oe : ye);
                A[k] = Ee, S[k] = Ee - me
              }
              t.modifiersData[s] = S
            }
          },
          requiresIfExists: ["offset"]
        };

      function De(e, t, n) {
        void 0 === n && (n = !1);
        var r, o, i = _(t),
          a = _(t) && function(e) {
            var t = e.getBoundingClientRect(),
              n = S(t.width) / e.offsetWidth || 1,
              r = S(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          }(t),
          s = U(t),
          f = V(e, a, n),
          c = {
            scrollLeft: 0,
            scrollTop: 0
          },
          p = {
            x: 0,
            y: 0
          };
        return (i || !i && !n) && (("body" !== A(t) || le(s)) && (c = (r = t) !== M(r) && _(r) ? {
          scrollLeft: (o = r).scrollLeft,
          scrollTop: o.scrollTop
        } : ce(r)), _(t) ? ((p = V(t, !0)).x += t.clientLeft, p.y += t.clientTop) : s && (p.x = pe(s))), {
          x: f.left + c.scrollLeft - p.x,
          y: f.top + c.scrollTop - p.y,
          width: f.width,
          height: f.height
        }
      }

      function ke(e) {
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
      var Ae = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };

      function Me() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function(e) {
          return !(e && "function" == typeof e.getBoundingClientRect)
        }))
      }

      function Pe(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? Ae : o;
        return function(e, t, n) {
          void 0 === n && (n = i);
          var o, a, s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Ae, i),
              modifiersData: {},
              elements: {
                reference: e,
                popper: t
              },
              attributes: {},
              styles: {}
            },
            f = [],
            c = !1,
            p = {
              state: s,
              setOptions: function(n) {
                var o = "function" == typeof n ? n(s.options) : n;
                l(), s.options = Object.assign({}, i, s.options, o), s.scrollParents = {
                  reference: P(e) ? de(e) : e.contextElement ? de(e.contextElement) : [],
                  popper: de(t)
                };
                var a, c, u = function(e) {
                  var t = ke(e);
                  return k.reduce((function(e, n) {
                    return e.concat(t.filter((function(e) {
                      return e.phase === n
                    })))
                  }), [])
                }((a = [].concat(r, s.options.modifiers), c = a.reduce((function(e, t) {
                  var n = e[t.name];
                  return e[t.name] = n ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                  }) : t, e
                }), {}), Object.keys(c).map((function(e) {
                  return c[e]
                }))));
                return s.orderedModifiers = u.filter((function(e) {
                  return e.enabled
                })), s.orderedModifiers.forEach((function(e) {
                  var t = e.name,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    o = e.effect;
                  if ("function" == typeof o) {
                    var i = o({
                      state: s,
                      name: t,
                      instance: p,
                      options: r
                    });
                    f.push(i || function() {})
                  }
                })), p.update()
              },
              forceUpdate: function() {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Me(t, n)) {
                    s.rects = {
                      reference: De(t, X(n), "fixed" === s.options.strategy),
                      popper: q(n)
                    }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                      return s.modifiersData[e.name] = Object.assign({}, e.data)
                    }));
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var o = s.orderedModifiers[r],
                          i = o.fn,
                          a = o.options,
                          f = void 0 === a ? {} : a,
                          l = o.name;
                        "function" == typeof i && (s = i({
                          state: s,
                          options: f,
                          name: l,
                          instance: p
                        }) || s)
                      } else s.reset = !1, r = -1
                  }
                }
              },
              update: (o = function() {
                return new Promise((function(e) {
                  p.forceUpdate(), e(s)
                }))
              }, function() {
                return a || (a = new Promise((function(e) {
                  Promise.resolve().then((function() {
                    a = void 0, e(o())
                  }))
                }))), a
              }),
              destroy: function() {
                l(), c = !0
              }
            };
          if (!Me(e, t)) return p;

          function l() {
            f.forEach((function(e) {
              return e()
            })), f = []
          }
          return p.setOptions(n).then((function(e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e)
          })), p
        }
      }
      var _e = Pe(),
        Le = Pe({
          defaultModifiers: [oe, Ee, ne, W, Oe, ye, je, Z, xe]
        }),
        We = Pe({
          defaultModifiers: [oe, Ee, ne, W]
        })
    }
  }
]);