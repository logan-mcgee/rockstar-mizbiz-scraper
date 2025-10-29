try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0760c8d3-1df5-40a3-9e3e-fdfd7d39190b", e._sentryDebugIdIdentifier = "sentry-dbid-0760c8d3-1df5-40a3-9e3e-fdfd7d39190b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9813], {
    19813: (e, t, n) => {
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
        clippingParents: () => p,
        computeStyles: () => ne,
        createPopper: () => Te,
        createPopperBase: () => Le,
        createPopperLite: () => We,
        detectOverflow: () => ge,
        end: () => d,
        eventListeners: () => oe,
        flip: () => ye,
        hide: () => xe,
        left: () => a,
        main: () => x,
        modifierPhases: () => k,
        offset: () => Oe,
        placements: () => v,
        popper: () => u,
        popperGenerator: () => Pe,
        popperOffsets: () => Ee,
        preventOverflow: () => je,
        read: () => y,
        reference: () => h,
        right: () => i,
        start: () => c,
        top: () => r,
        variationPlacements: () => m,
        viewport: () => l,
        write: () => j
      });
      var r = "top",
        o = "bottom",
        i = "right",
        a = "left",
        s = "auto",
        f = [r, o, i, a],
        c = "start",
        d = "end",
        p = "clippingParents",
        l = "viewport",
        u = "popper",
        h = "reference",
        m = f.reduce((function(e, t) {
          return e.concat([t + "-" + c, t + "-" + d])
        }), []),
        v = [].concat(f, [s]).reduce((function(e, t) {
          return e.concat([t, t + "-" + c, t + "-" + d])
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

      function M(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
      }

      function A(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return t && t.defaultView || window
        }
        return e
      }

      function P(e) {
        return e instanceof A(e).Element || e instanceof Element
      }

      function L(e) {
        return e instanceof A(e).HTMLElement || e instanceof HTMLElement
      }

      function T(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof A(e).ShadowRoot || e instanceof ShadowRoot)
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
            L(o) && M(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
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
                L(r) && M(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                  r.removeAttribute(e)
                })))
              }))
            }
        },
        requires: ["computeStyles"]
      };

      function _(e) {
        return e.split("-")[0]
      }
      var R = Math.max,
        B = Math.min,
        H = Math.round;

      function S() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
          return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
      }

      function C() {
        return !/^((?!chrome|android).)*safari/i.test(S())
      }

      function V(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t && L(e) && (o = e.offsetWidth > 0 && H(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && H(r.height) / e.offsetHeight || 1);
        var a = (P(e) ? A(e) : window).visualViewport,
          s = !C() && n,
          f = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          d = r.width / o,
          p = r.height / i;
        return {
          width: d,
          height: p,
          top: c,
          right: f + d,
          bottom: c + p,
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
        if (n && T(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
          } while (r)
        }
        return !1
      }

      function N(e) {
        return A(e).getComputedStyle(e)
      }

      function F(e) {
        return ["table", "td", "th"].indexOf(M(e)) >= 0
      }

      function U(e) {
        return ((P(e) ? e.ownerDocument : e.document) || window.document).documentElement
      }

      function z(e) {
        return "html" === M(e) ? e : e.assignedSlot || e.parentNode || (T(e) ? e.host : null) || U(e)
      }

      function Y(e) {
        return L(e) && "fixed" !== N(e).position ? e.offsetParent : null
      }

      function X(e) {
        for (var t = A(e), n = Y(e); n && F(n) && "static" === N(n).position;) n = Y(n);
        return n && ("html" === M(n) || "body" === M(n) && "static" === N(n).position) ? t : n || function(e) {
          var t = /firefox/i.test(S());
          if (/Trident/i.test(S()) && L(e) && "fixed" === N(e).position) return null;
          var n = z(e);
          for (T(n) && (n = n.host); L(n) && ["html", "body"].indexOf(M(n)) < 0;) {
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
        return R(e, B(t, n))
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
            d = n.elements.arrow,
            p = n.modifiersData.popperOffsets,
            l = _(n.placement),
            u = G(l),
            h = [a, i].indexOf(l) >= 0 ? "height" : "width";
          if (d && p) {
            var m = function(e, t) {
                return K("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : e) ? e : Q(e, f))
              }(c.padding, n),
              v = q(d),
              g = "y" === u ? r : a,
              y = "y" === u ? o : i,
              b = n.rects.reference[h] + n.rects.reference[u] - p[u] - n.rects.popper[h],
              w = p[u] - n.rects.reference[u],
              x = X(d),
              O = x ? "y" === u ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
              E = b / 2 - w / 2,
              j = m[g],
              D = O - v[h] - m[y],
              k = O / 2 - v[h] / 2 + E,
              M = J(j, k, D),
              A = u;
            n.modifiersData[s] = ((t = {})[A] = M, t.centerOffset = M - k, t)
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
          p = e.offsets,
          l = e.position,
          u = e.gpuAcceleration,
          h = e.adaptive,
          m = e.roundOffsets,
          v = e.isFixed,
          g = p.x,
          y = void 0 === g ? 0 : g,
          b = p.y,
          w = void 0 === b ? 0 : b,
          x = "function" == typeof m ? m({
            x: y,
            y: w
          }) : {
            x: y,
            y: w
          };
        y = x.x, w = x.y;
        var O = p.hasOwnProperty("x"),
          E = p.hasOwnProperty("y"),
          j = a,
          D = r,
          k = window;
        if (h) {
          var M = X(n),
            P = "clientHeight",
            L = "clientWidth";
          M === A(n) && "static" !== N(M = U(n)).position && "absolute" === l && (P = "scrollHeight", L = "scrollWidth"), (f === r || (f === a || f === i) && c === d) && (D = o, w -= (v && M === k && k.visualViewport ? k.visualViewport.height : M[P]) - s.height, w *= u ? 1 : -1), f !== a && (f !== r && f !== o || c !== d) || (j = i, y -= (v && M === k && k.visualViewport ? k.visualViewport.width : M[L]) - s.width, y *= u ? 1 : -1)
        }
        var T, W = Object.assign({
            position: l
          }, h && ee),
          _ = !0 === m ? function(e, t) {
            var n = e.x,
              r = e.y,
              o = t.devicePixelRatio || 1;
            return {
              x: H(n * o) / o || 0,
              y: H(r * o) / o || 0
            }
          }({
            x: y,
            y: w
          }, A(n)) : {
            x: y,
            y: w
          };
        return y = _.x, w = _.y, u ? Object.assign({}, W, ((T = {})[D] = E ? "0" : "", T[j] = O ? "0" : "", T.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + w + "px)" : "translate3d(" + y + "px, " + w + "px, 0)", T)) : Object.assign({}, W, ((t = {})[D] = E ? w + "px" : "", t[j] = O ? y + "px" : "", t.transform = "", t))
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
              placement: _(t.placement),
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
            f = A(t.elements.popper),
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
        var t = A(e);
        return {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function de(e) {
        return V(U(e)).left + ce(e).scrollLeft
      }

      function pe(e) {
        var t = N(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r)
      }

      function le(e) {
        return ["html", "body", "#document"].indexOf(M(e)) >= 0 ? e.ownerDocument.body : L(e) && pe(e) ? e : le(z(e))
      }

      function ue(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = le(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = A(r),
          a = o ? [i].concat(i.visualViewport || [], pe(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(ue(z(a)))
      }

      function he(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height
        })
      }

      function me(e, t, n) {
        return t === l ? he(function(e, t) {
          var n = A(e),
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
            x: s + de(e),
            y: f
          }
        }(e, n)) : P(t) ? function(e, t) {
          var n = V(e, !1, "fixed" === t);
          return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(t, n) : he(function(e) {
          var t, n = U(e),
            r = ce(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = R(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            a = R(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            s = -r.scrollLeft + de(e),
            f = -r.scrollTop;
          return "rtl" === N(o || n).direction && (s += R(n.clientWidth, o ? o.clientWidth : 0) - i), {
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
          p = f ? _(f) : null,
          l = f ? $(f) : null,
          u = n.x + n.width / 2 - s.width / 2,
          h = n.y + n.height / 2 - s.height / 2;
        switch (p) {
          case r:
            t = {
              x: u,
              y: n.y - s.height
            };
            break;
          case o:
            t = {
              x: u,
              y: n.y + n.height
            };
            break;
          case i:
            t = {
              x: n.x + n.width,
              y: h
            };
            break;
          case a:
            t = {
              x: n.x - s.width,
              y: h
            };
            break;
          default:
            t = {
              x: n.x,
              y: n.y
            }
        }
        var m = p ? G(p) : null;
        if (null != m) {
          var v = "y" === m ? "height" : "width";
          switch (l) {
            case c:
              t[m] = t[m] - (n[v] / 2 - s[v] / 2);
              break;
            case d:
              t[m] = t[m] + (n[v] / 2 - s[v] / 2)
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
          d = void 0 === c ? e.strategy : c,
          m = n.boundary,
          v = void 0 === m ? p : m,
          g = n.rootBoundary,
          y = void 0 === g ? l : g,
          b = n.elementContext,
          w = void 0 === b ? u : b,
          x = n.altBoundary,
          O = void 0 !== x && x,
          E = n.padding,
          j = void 0 === E ? 0 : E,
          D = K("number" != typeof j ? j : Q(j, f)),
          k = w === u ? h : u,
          A = e.rects.popper,
          T = e.elements[O ? k : w],
          W = function(e, t, n, r) {
            var o = "clippingParents" === t ? function(e) {
                var t = ue(z(e)),
                  n = ["absolute", "fixed"].indexOf(N(e).position) >= 0 && L(e) ? X(e) : e;
                return P(n) ? t.filter((function(e) {
                  return P(e) && I(e, n) && "body" !== M(e)
                })) : []
              }(e) : [].concat(t),
              i = [].concat(o, [n]),
              a = i[0],
              s = i.reduce((function(t, n) {
                var o = me(e, n, r);
                return t.top = R(o.top, t.top), t.right = B(o.right, t.right), t.bottom = B(o.bottom, t.bottom), t.left = R(o.left, t.left), t
              }), me(e, a, r));
            return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
          }(P(T) ? T : T.contextElement || U(e.elements.popper), v, y, d),
          _ = V(e.elements.reference),
          H = ve({
            reference: _,
            element: A,
            strategy: "absolute",
            placement: s
          }),
          S = he(Object.assign({}, A, H)),
          C = w === u ? S : _,
          q = {
            top: W.top - C.top + D.top,
            bottom: C.bottom - W.bottom + D.bottom,
            left: W.left - C.left + D.left,
            right: C.right - W.right + D.right
          },
          F = e.modifiersData.offset;
        if (w === u && F) {
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
            d = e.name;
          if (!t.modifiersData[d]._skip) {
            for (var p = n.mainAxis, l = void 0 === p || p, u = n.altAxis, h = void 0 === u || u, g = n.fallbackPlacements, y = n.padding, b = n.boundary, w = n.rootBoundary, x = n.altBoundary, O = n.flipVariations, E = void 0 === O || O, j = n.allowedAutoPlacements, D = t.options.placement, k = _(D), M = g || (k !== D && E ? function(e) {
                if (_(e) === s) return [];
                var t = ae(e);
                return [fe(e), t, fe(t)]
              }(D) : [ae(D)]), A = [D].concat(M).reduce((function(e, n) {
                return e.concat(_(n) === s ? function(e, t) {
                  void 0 === t && (t = {});
                  var n = t,
                    r = n.placement,
                    o = n.boundary,
                    i = n.rootBoundary,
                    a = n.padding,
                    s = n.flipVariations,
                    c = n.allowedAutoPlacements,
                    d = void 0 === c ? v : c,
                    p = $(r),
                    l = p ? s ? m : m.filter((function(e) {
                      return $(e) === p
                    })) : f,
                    u = l.filter((function(e) {
                      return d.indexOf(e) >= 0
                    }));
                  0 === u.length && (u = l);
                  var h = u.reduce((function(t, n) {
                    return t[n] = ge(e, {
                      placement: n,
                      boundary: o,
                      rootBoundary: i,
                      padding: a
                    })[_(n)], t
                  }), {});
                  return Object.keys(h).sort((function(e, t) {
                    return h[e] - h[t]
                  }))
                }(t, {
                  placement: n,
                  boundary: b,
                  rootBoundary: w,
                  padding: y,
                  flipVariations: E,
                  allowedAutoPlacements: j
                }) : n)
              }), []), P = t.rects.reference, L = t.rects.popper, T = new Map, W = !0, R = A[0], B = 0; B < A.length; B++) {
              var H = A[B],
                S = _(H),
                C = $(H) === c,
                V = [r, o].indexOf(S) >= 0,
                q = V ? "width" : "height",
                I = ge(t, {
                  placement: H,
                  boundary: b,
                  rootBoundary: w,
                  altBoundary: x,
                  padding: y
                }),
                N = V ? C ? i : a : C ? o : r;
              P[q] > L[q] && (N = ae(N));
              var F = ae(N),
                U = [];
              if (l && U.push(I[S] <= 0), h && U.push(I[N] <= 0, I[F] <= 0), U.every((function(e) {
                  return e
                }))) {
                R = H, W = !1;
                break
              }
              T.set(H, U)
            }
            if (W)
              for (var z = function(e) {
                  var t = A.find((function(t) {
                    var n = T.get(t);
                    if (n) return n.slice(0, e).every((function(e) {
                      return e
                    }))
                  }));
                  if (t) return R = t, "break"
                }, Y = E ? 3 : 1; Y > 0 && "break" !== z(Y); Y--);
            t.placement !== R && (t.modifiersData[d]._skip = !0, t.placement = R, t.reset = !0)
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
              d = we(f),
              p = we(c);
            t.modifiersData[n] = {
              referenceClippingOffsets: f,
              popperEscapeOffsets: c,
              isReferenceHidden: d,
              hasPopperEscaped: p
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": d,
              "data-popper-escaped": p
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
                  var o = _(e),
                    s = [a, r].indexOf(o) >= 0 ? -1 : 1,
                    f = "function" == typeof n ? n(Object.assign({}, t, {
                      placement: e
                    })) : n,
                    c = f[0],
                    d = f[1];
                  return c = c || 0, d = (d || 0) * s, [a, i].indexOf(o) >= 0 ? {
                    x: d,
                    y: c
                  } : {
                    x: c,
                    y: d
                  }
                }(n, t.rects, f), e
              }), {}),
              d = c[t.placement],
              p = d.x,
              l = d.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += l), t.modifiersData[o] = c
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
              d = void 0 === f || f,
              p = n.altAxis,
              l = void 0 !== p && p,
              u = n.boundary,
              h = n.rootBoundary,
              m = n.altBoundary,
              v = n.padding,
              g = n.tether,
              y = void 0 === g || g,
              b = n.tetherOffset,
              w = void 0 === b ? 0 : b,
              x = ge(t, {
                boundary: u,
                rootBoundary: h,
                padding: v,
                altBoundary: m
              }),
              O = _(t.placement),
              E = $(t.placement),
              j = !E,
              D = G(O),
              k = "x" === D ? "y" : "x",
              M = t.modifiersData.popperOffsets,
              A = t.rects.reference,
              P = t.rects.popper,
              L = "function" == typeof w ? w(Object.assign({}, t.rects, {
                placement: t.placement
              })) : w,
              T = "number" == typeof L ? {
                mainAxis: L,
                altAxis: L
              } : Object.assign({
                mainAxis: 0,
                altAxis: 0
              }, L),
              W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
              H = {
                x: 0,
                y: 0
              };
            if (M) {
              if (d) {
                var S, C = "y" === D ? r : a,
                  V = "y" === D ? o : i,
                  I = "y" === D ? "height" : "width",
                  N = M[D],
                  F = N + x[C],
                  U = N - x[V],
                  z = y ? -P[I] / 2 : 0,
                  Y = E === c ? A[I] : P[I],
                  K = E === c ? -P[I] : -A[I],
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
                  re = J(0, A[I], Z[I]),
                  oe = j ? A[I] / 2 - z - re - te - T.mainAxis : Y - re - te - T.mainAxis,
                  ie = j ? -A[I] / 2 + z + re + ne + T.mainAxis : K + re + ne + T.mainAxis,
                  ae = t.elements.arrow && X(t.elements.arrow),
                  se = ae ? "y" === D ? ae.clientTop || 0 : ae.clientLeft || 0 : 0,
                  fe = null != (S = null == W ? void 0 : W[D]) ? S : 0,
                  ce = N + ie - fe,
                  de = J(y ? B(F, N + oe - fe - se) : F, N, y ? R(U, ce) : U);
                M[D] = de, H[D] = de - N
              }
              if (l) {
                var pe, le = "x" === D ? r : a,
                  ue = "x" === D ? o : i,
                  he = M[k],
                  me = "y" === k ? "height" : "width",
                  ve = he + x[le],
                  ye = he - x[ue],
                  be = -1 !== [r, a].indexOf(O),
                  we = null != (pe = null == W ? void 0 : W[k]) ? pe : 0,
                  xe = be ? ve : he - A[me] - P[me] - we + T.altAxis,
                  Oe = be ? he + A[me] + P[me] - we - T.altAxis : ye,
                  Ee = y && be ? function(e, t, n) {
                    var r = J(e, t, n);
                    return r > n ? n : r
                  }(xe, he, Oe) : J(y ? xe : ve, he, y ? Oe : ye);
                M[k] = Ee, H[k] = Ee - he
              }
              t.modifiersData[s] = H
            }
          },
          requiresIfExists: ["offset"]
        };

      function De(e, t, n) {
        void 0 === n && (n = !1);
        var r, o, i = L(t),
          a = L(t) && function(e) {
            var t = e.getBoundingClientRect(),
              n = H(t.width) / e.offsetWidth || 1,
              r = H(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          }(t),
          s = U(t),
          f = V(e, a, n),
          c = {
            scrollLeft: 0,
            scrollTop: 0
          },
          d = {
            x: 0,
            y: 0
          };
        return (i || !i && !n) && (("body" !== M(t) || pe(s)) && (c = (r = t) !== A(r) && L(r) ? {
          scrollLeft: (o = r).scrollLeft,
          scrollTop: o.scrollTop
        } : ce(r)), L(t) ? ((d = V(t, !0)).x += t.clientLeft, d.y += t.clientTop) : s && (d.x = de(s))), {
          x: f.left + c.scrollLeft - d.x,
          y: f.top + c.scrollTop - d.y,
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
      var Me = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };

      function Ae() {
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
          i = void 0 === o ? Me : o;
        return function(e, t, n) {
          void 0 === n && (n = i);
          var o, a, s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Me, i),
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
            d = {
              state: s,
              setOptions: function(n) {
                var o = "function" == typeof n ? n(s.options) : n;
                p(), s.options = Object.assign({}, i, s.options, o), s.scrollParents = {
                  reference: P(e) ? ue(e) : e.contextElement ? ue(e.contextElement) : [],
                  popper: ue(t)
                };
                var a, c, l = function(e) {
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
                return s.orderedModifiers = l.filter((function(e) {
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
                      instance: d,
                      options: r
                    });
                    f.push(i || function() {})
                  }
                })), d.update()
              },
              forceUpdate: function() {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Ae(t, n)) {
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
                          p = o.name;
                        "function" == typeof i && (s = i({
                          state: s,
                          options: f,
                          name: p,
                          instance: d
                        }) || s)
                      } else s.reset = !1, r = -1
                  }
                }
              },
              update: (o = function() {
                return new Promise((function(e) {
                  d.forceUpdate(), e(s)
                }))
              }, function() {
                return a || (a = new Promise((function(e) {
                  Promise.resolve().then((function() {
                    a = void 0, e(o())
                  }))
                }))), a
              }),
              destroy: function() {
                p(), c = !0
              }
            };
          if (!Ae(e, t)) return d;

          function p() {
            f.forEach((function(e) {
              return e()
            })), f = []
          }
          return d.setOptions(n).then((function(e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e)
          })), d
        }
      }
      var Le = Pe(),
        Te = Pe({
          defaultModifiers: [oe, Ee, ne, W, Oe, ye, je, Z, xe]
        }),
        We = Pe({
          defaultModifiers: [oe, Ee, ne, W]
        })
    }
  }
]);