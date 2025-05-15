! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0724d7ac-8834-4896-a063-af06600e17bb", e._sentryDebugIdIdentifier = "sentry-dbid-0724d7ac-8834-4896-a063-af06600e17bb")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8376], {
    78376: (e, t, n) => {
      n.r(t), n.d(t, {
        afterMain: () => O,
        afterRead: () => g,
        afterWrite: () => j,
        applyStyles: () => T,
        arrow: () => Z,
        auto: () => s,
        basePlacements: () => f,
        beforeMain: () => w,
        beforeRead: () => y,
        beforeWrite: () => M,
        bottom: () => o,
        clippingParents: () => d,
        computeStyles: () => ne,
        createPopper: () => Le,
        createPopperBase: () => Pe,
        createPopperLite: () => Te,
        detectOverflow: () => ye,
        end: () => l,
        eventListeners: () => oe,
        flip: () => be,
        hide: () => xe,
        left: () => a,
        main: () => x,
        modifierPhases: () => D,
        offset: () => Oe,
        placements: () => v,
        popper: () => u,
        popperGenerator: () => _e,
        popperOffsets: () => Me,
        preventOverflow: () => Ee,
        read: () => b,
        reference: () => h,
        right: () => i,
        start: () => c,
        top: () => r,
        variationPlacements: () => m,
        viewport: () => p,
        write: () => E
      });
      var r = "top",
        o = "bottom",
        i = "right",
        a = "left",
        s = "auto",
        f = [r, o, i, a],
        c = "start",
        l = "end",
        d = "clippingParents",
        p = "viewport",
        u = "popper",
        h = "reference",
        m = f.reduce((function(e, t) {
          return e.concat([t + "-" + c, t + "-" + l])
        }), []),
        v = [].concat(f, [s]).reduce((function(e, t) {
          return e.concat([t, t + "-" + c, t + "-" + l])
        }), []),
        y = "beforeRead",
        b = "read",
        g = "afterRead",
        w = "beforeMain",
        x = "main",
        O = "afterMain",
        M = "beforeWrite",
        E = "write",
        j = "afterWrite",
        D = [y, b, g, w, x, O, M, E, j];

      function k(e) {
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

      function _(e) {
        return e instanceof A(e).Element || e instanceof Element
      }

      function P(e) {
        return e instanceof A(e).HTMLElement || e instanceof HTMLElement
      }

      function L(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof A(e).ShadowRoot || e instanceof ShadowRoot)
      }
      const T = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
          var t = e.state;
          Object.keys(t.elements).forEach((function(e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            P(o) && k(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
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
                P(r) && k(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                  r.removeAttribute(e)
                })))
              }))
            }
        },
        requires: ["computeStyles"]
      };

      function W(e) {
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
        t && P(e) && (o = e.offsetWidth > 0 && H(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && H(r.height) / e.offsetHeight || 1);
        var a = (_(e) ? A(e) : window).visualViewport,
          s = !C() && n,
          f = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          l = r.width / o,
          d = r.height / i;
        return {
          width: l,
          height: d,
          top: c,
          right: f + l,
          bottom: c + d,
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
        return A(e).getComputedStyle(e)
      }

      function G(e) {
        return ["table", "td", "th"].indexOf(k(e)) >= 0
      }

      function F(e) {
        return ((_(e) ? e.ownerDocument : e.document) || window.document).documentElement
      }

      function U(e) {
        return "html" === k(e) ? e : e.assignedSlot || e.parentNode || (L(e) ? e.host : null) || F(e)
      }

      function z(e) {
        return P(e) && "fixed" !== N(e).position ? e.offsetParent : null
      }

      function Y(e) {
        for (var t = A(e), n = z(e); n && G(n) && "static" === N(n).position;) n = z(n);
        return n && ("html" === k(n) || "body" === k(n) && "static" === N(n).position) ? t : n || function(e) {
          var t = /firefox/i.test(S());
          if (/Trident/i.test(S()) && P(e) && "fixed" === N(e).position) return null;
          var n = U(e);
          for (L(n) && (n = n.host); P(n) && ["html", "body"].indexOf(k(n)) < 0;) {
            var r = N(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode
          }
          return null
        }(e) || t
      }

      function X(e) {
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
            l = n.elements.arrow,
            d = n.modifiersData.popperOffsets,
            p = W(n.placement),
            u = X(p),
            h = [a, i].indexOf(p) >= 0 ? "height" : "width";
          if (l && d) {
            var m = function(e, t) {
                return K("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : e) ? e : Q(e, f))
              }(c.padding, n),
              v = q(l),
              y = "y" === u ? r : a,
              b = "y" === u ? o : i,
              g = n.rects.reference[h] + n.rects.reference[u] - d[u] - n.rects.popper[h],
              w = d[u] - n.rects.reference[u],
              x = Y(l),
              O = x ? "y" === u ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
              M = g / 2 - w / 2,
              E = m[y],
              j = O - v[h] - m[b],
              D = O / 2 - v[h] / 2 + M,
              k = J(E, D, j),
              A = u;
            n.modifiersData[s] = ((t = {})[A] = k, t.centerOffset = k - D, t)
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
          d = e.offsets,
          p = e.position,
          u = e.gpuAcceleration,
          h = e.adaptive,
          m = e.roundOffsets,
          v = e.isFixed,
          y = d.x,
          b = void 0 === y ? 0 : y,
          g = d.y,
          w = void 0 === g ? 0 : g,
          x = "function" == typeof m ? m({
            x: b,
            y: w
          }) : {
            x: b,
            y: w
          };
        b = x.x, w = x.y;
        var O = d.hasOwnProperty("x"),
          M = d.hasOwnProperty("y"),
          E = a,
          j = r,
          D = window;
        if (h) {
          var k = Y(n),
            _ = "clientHeight",
            P = "clientWidth";
          k === A(n) && "static" !== N(k = F(n)).position && "absolute" === p && (_ = "scrollHeight", P = "scrollWidth"), (f === r || (f === a || f === i) && c === l) && (j = o, w -= (v && k === D && D.visualViewport ? D.visualViewport.height : k[_]) - s.height, w *= u ? 1 : -1), f !== a && (f !== r && f !== o || c !== l) || (E = i, b -= (v && k === D && D.visualViewport ? D.visualViewport.width : k[P]) - s.width, b *= u ? 1 : -1)
        }
        var L, T = Object.assign({
            position: p
          }, h && ee),
          W = !0 === m ? function(e, t) {
            var n = e.x,
              r = e.y,
              o = t.devicePixelRatio || 1;
            return {
              x: H(n * o) / o || 0,
              y: H(r * o) / o || 0
            }
          }({
            x: b,
            y: w
          }, A(n)) : {
            x: b,
            y: w
          };
        return b = W.x, w = W.y, u ? Object.assign({}, T, ((L = {})[j] = M ? "0" : "", L[E] = O ? "0" : "", L.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + w + "px)" : "translate3d(" + b + "px, " + w + "px, 0)", L)) : Object.assign({}, T, ((t = {})[j] = M ? w + "px" : "", t[E] = O ? b + "px" : "", t.transform = "", t))
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
              placement: W(t.placement),
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

      function le(e) {
        return V(F(e)).left + ce(e).scrollLeft
      }

      function de(e) {
        var t = N(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r)
      }

      function pe(e) {
        return ["html", "body", "#document"].indexOf(k(e)) >= 0 ? e.ownerDocument.body : P(e) && de(e) ? e : pe(U(e))
      }

      function ue(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = pe(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = A(r),
          a = o ? [i].concat(i.visualViewport || [], de(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(ue(U(a)))
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
        return t === p ? he(function(e, t) {
          var n = A(e),
            r = F(e),
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
            x: s + le(e),
            y: f
          }
        }(e, n)) : _(t) ? function(e, t) {
          var n = V(e, !1, "fixed" === t);
          return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
        }(t, n) : he(function(e) {
          var t, n = F(e),
            r = ce(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            i = R(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            a = R(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            s = -r.scrollLeft + le(e),
            f = -r.scrollTop;
          return "rtl" === N(o || n).direction && (s += R(n.clientWidth, o ? o.clientWidth : 0) - i), {
            width: i,
            height: a,
            x: s,
            y: f
          }
        }(F(e)))
      }

      function ve(e) {
        var t, n = e.reference,
          s = e.element,
          f = e.placement,
          d = f ? W(f) : null,
          p = f ? $(f) : null,
          u = n.x + n.width / 2 - s.width / 2,
          h = n.y + n.height / 2 - s.height / 2;
        switch (d) {
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
        var m = d ? X(d) : null;
        if (null != m) {
          var v = "y" === m ? "height" : "width";
          switch (p) {
            case c:
              t[m] = t[m] - (n[v] / 2 - s[v] / 2);
              break;
            case l:
              t[m] = t[m] + (n[v] / 2 - s[v] / 2)
          }
        }
        return t
      }

      function ye(e, t) {
        void 0 === t && (t = {});
        var n = t,
          a = n.placement,
          s = void 0 === a ? e.placement : a,
          c = n.strategy,
          l = void 0 === c ? e.strategy : c,
          m = n.boundary,
          v = void 0 === m ? d : m,
          y = n.rootBoundary,
          b = void 0 === y ? p : y,
          g = n.elementContext,
          w = void 0 === g ? u : g,
          x = n.altBoundary,
          O = void 0 !== x && x,
          M = n.padding,
          E = void 0 === M ? 0 : M,
          j = K("number" != typeof E ? E : Q(E, f)),
          D = w === u ? h : u,
          A = e.rects.popper,
          L = e.elements[O ? D : w],
          T = function(e, t, n, r) {
            var o = "clippingParents" === t ? function(e) {
                var t = ue(U(e)),
                  n = ["absolute", "fixed"].indexOf(N(e).position) >= 0 && P(e) ? Y(e) : e;
                return _(n) ? t.filter((function(e) {
                  return _(e) && I(e, n) && "body" !== k(e)
                })) : []
              }(e) : [].concat(t),
              i = [].concat(o, [n]),
              a = i[0],
              s = i.reduce((function(t, n) {
                var o = me(e, n, r);
                return t.top = R(o.top, t.top), t.right = B(o.right, t.right), t.bottom = B(o.bottom, t.bottom), t.left = R(o.left, t.left), t
              }), me(e, a, r));
            return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
          }(_(L) ? L : L.contextElement || F(e.elements.popper), v, b, l),
          W = V(e.elements.reference),
          H = ve({
            reference: W,
            element: A,
            strategy: "absolute",
            placement: s
          }),
          S = he(Object.assign({}, A, H)),
          C = w === u ? S : W,
          q = {
            top: T.top - C.top + j.top,
            bottom: C.bottom - T.bottom + j.bottom,
            left: T.left - C.left + j.left,
            right: C.right - T.right + j.right
          },
          G = e.modifiersData.offset;
        if (w === u && G) {
          var z = G[s];
          Object.keys(q).forEach((function(e) {
            var t = [i, o].indexOf(e) >= 0 ? 1 : -1,
              n = [r, o].indexOf(e) >= 0 ? "y" : "x";
            q[e] += z[n] * t
          }))
        }
        return q
      }
      const be = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
          var t = e.state,
            n = e.options,
            l = e.name;
          if (!t.modifiersData[l]._skip) {
            for (var d = n.mainAxis, p = void 0 === d || d, u = n.altAxis, h = void 0 === u || u, y = n.fallbackPlacements, b = n.padding, g = n.boundary, w = n.rootBoundary, x = n.altBoundary, O = n.flipVariations, M = void 0 === O || O, E = n.allowedAutoPlacements, j = t.options.placement, D = W(j), k = y || (D !== j && M ? function(e) {
                if (W(e) === s) return [];
                var t = ae(e);
                return [fe(e), t, fe(t)]
              }(j) : [ae(j)]), A = [j].concat(k).reduce((function(e, n) {
                return e.concat(W(n) === s ? function(e, t) {
                  void 0 === t && (t = {});
                  var n = t,
                    r = n.placement,
                    o = n.boundary,
                    i = n.rootBoundary,
                    a = n.padding,
                    s = n.flipVariations,
                    c = n.allowedAutoPlacements,
                    l = void 0 === c ? v : c,
                    d = $(r),
                    p = d ? s ? m : m.filter((function(e) {
                      return $(e) === d
                    })) : f,
                    u = p.filter((function(e) {
                      return l.indexOf(e) >= 0
                    }));
                  0 === u.length && (u = p);
                  var h = u.reduce((function(t, n) {
                    return t[n] = ye(e, {
                      placement: n,
                      boundary: o,
                      rootBoundary: i,
                      padding: a
                    })[W(n)], t
                  }), {});
                  return Object.keys(h).sort((function(e, t) {
                    return h[e] - h[t]
                  }))
                }(t, {
                  placement: n,
                  boundary: g,
                  rootBoundary: w,
                  padding: b,
                  flipVariations: M,
                  allowedAutoPlacements: E
                }) : n)
              }), []), _ = t.rects.reference, P = t.rects.popper, L = new Map, T = !0, R = A[0], B = 0; B < A.length; B++) {
              var H = A[B],
                S = W(H),
                C = $(H) === c,
                V = [r, o].indexOf(S) >= 0,
                q = V ? "width" : "height",
                I = ye(t, {
                  placement: H,
                  boundary: g,
                  rootBoundary: w,
                  altBoundary: x,
                  padding: b
                }),
                N = V ? C ? i : a : C ? o : r;
              _[q] > P[q] && (N = ae(N));
              var G = ae(N),
                F = [];
              if (p && F.push(I[S] <= 0), h && F.push(I[N] <= 0, I[G] <= 0), F.every((function(e) {
                  return e
                }))) {
                R = H, T = !1;
                break
              }
              L.set(H, F)
            }
            if (T)
              for (var U = function(e) {
                  var t = A.find((function(t) {
                    var n = L.get(t);
                    if (n) return n.slice(0, e).every((function(e) {
                      return e
                    }))
                  }));
                  if (t) return R = t, "break"
                }, z = M ? 3 : 1; z > 0 && "break" !== U(z); z--);
            t.placement !== R && (t.modifiersData[l]._skip = !0, t.placement = R, t.reset = !0)
          }
        },
        requiresIfExists: ["offset"],
        data: {
          _skip: !1
        }
      };

      function ge(e, t, n) {
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
              a = ye(t, {
                elementContext: "reference"
              }),
              s = ye(t, {
                altBoundary: !0
              }),
              f = ge(a, r),
              c = ge(s, o, i),
              l = we(f),
              d = we(c);
            t.modifiersData[n] = {
              referenceClippingOffsets: f,
              popperEscapeOffsets: c,
              isReferenceHidden: l,
              hasPopperEscaped: d
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": l,
              "data-popper-escaped": d
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
                  var o = W(e),
                    s = [a, r].indexOf(o) >= 0 ? -1 : 1,
                    f = "function" == typeof n ? n(Object.assign({}, t, {
                      placement: e
                    })) : n,
                    c = f[0],
                    l = f[1];
                  return c = c || 0, l = (l || 0) * s, [a, i].indexOf(o) >= 0 ? {
                    x: l,
                    y: c
                  } : {
                    x: c,
                    y: l
                  }
                }(n, t.rects, f), e
              }), {}),
              l = c[t.placement],
              d = l.x,
              p = l.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = c
          }
        },
        Me = {
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
        Ee = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function(e) {
            var t = e.state,
              n = e.options,
              s = e.name,
              f = n.mainAxis,
              l = void 0 === f || f,
              d = n.altAxis,
              p = void 0 !== d && d,
              u = n.boundary,
              h = n.rootBoundary,
              m = n.altBoundary,
              v = n.padding,
              y = n.tether,
              b = void 0 === y || y,
              g = n.tetherOffset,
              w = void 0 === g ? 0 : g,
              x = ye(t, {
                boundary: u,
                rootBoundary: h,
                padding: v,
                altBoundary: m
              }),
              O = W(t.placement),
              M = $(t.placement),
              E = !M,
              j = X(O),
              D = "x" === j ? "y" : "x",
              k = t.modifiersData.popperOffsets,
              A = t.rects.reference,
              _ = t.rects.popper,
              P = "function" == typeof w ? w(Object.assign({}, t.rects, {
                placement: t.placement
              })) : w,
              L = "number" == typeof P ? {
                mainAxis: P,
                altAxis: P
              } : Object.assign({
                mainAxis: 0,
                altAxis: 0
              }, P),
              T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
              H = {
                x: 0,
                y: 0
              };
            if (k) {
              if (l) {
                var S, C = "y" === j ? r : a,
                  V = "y" === j ? o : i,
                  I = "y" === j ? "height" : "width",
                  N = k[j],
                  G = N + x[C],
                  F = N - x[V],
                  U = b ? -_[I] / 2 : 0,
                  z = M === c ? A[I] : _[I],
                  K = M === c ? -_[I] : -A[I],
                  Q = t.elements.arrow,
                  Z = b && Q ? q(Q) : {
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
                  oe = E ? A[I] / 2 - U - re - te - L.mainAxis : z - re - te - L.mainAxis,
                  ie = E ? -A[I] / 2 + U + re + ne + L.mainAxis : K + re + ne + L.mainAxis,
                  ae = t.elements.arrow && Y(t.elements.arrow),
                  se = ae ? "y" === j ? ae.clientTop || 0 : ae.clientLeft || 0 : 0,
                  fe = null != (S = null == T ? void 0 : T[j]) ? S : 0,
                  ce = N + ie - fe,
                  le = J(b ? B(G, N + oe - fe - se) : G, N, b ? R(F, ce) : F);
                k[j] = le, H[j] = le - N
              }
              if (p) {
                var de, pe = "x" === j ? r : a,
                  ue = "x" === j ? o : i,
                  he = k[D],
                  me = "y" === D ? "height" : "width",
                  ve = he + x[pe],
                  be = he - x[ue],
                  ge = -1 !== [r, a].indexOf(O),
                  we = null != (de = null == T ? void 0 : T[D]) ? de : 0,
                  xe = ge ? ve : he - A[me] - _[me] - we + L.altAxis,
                  Oe = ge ? he + A[me] + _[me] - we - L.altAxis : be,
                  Me = b && ge ? function(e, t, n) {
                    var r = J(e, t, n);
                    return r > n ? n : r
                  }(xe, he, Oe) : J(b ? xe : ve, he, b ? Oe : be);
                k[D] = Me, H[D] = Me - he
              }
              t.modifiersData[s] = H
            }
          },
          requiresIfExists: ["offset"]
        };

      function je(e, t, n) {
        void 0 === n && (n = !1);
        var r, o, i = P(t),
          a = P(t) && function(e) {
            var t = e.getBoundingClientRect(),
              n = H(t.width) / e.offsetWidth || 1,
              r = H(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
          }(t),
          s = F(t),
          f = V(e, a, n),
          c = {
            scrollLeft: 0,
            scrollTop: 0
          },
          l = {
            x: 0,
            y: 0
          };
        return (i || !i && !n) && (("body" !== k(t) || de(s)) && (c = (r = t) !== A(r) && P(r) ? {
          scrollLeft: (o = r).scrollLeft,
          scrollTop: o.scrollTop
        } : ce(r)), P(t) ? ((l = V(t, !0)).x += t.clientLeft, l.y += t.clientTop) : s && (l.x = le(s))), {
          x: f.left + c.scrollLeft - l.x,
          y: f.top + c.scrollTop - l.y,
          width: f.width,
          height: f.height
        }
      }

      function De(e) {
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
      var ke = {
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

      function _e(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? ke : o;
        return function(e, t, n) {
          void 0 === n && (n = i);
          var o, a, s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, ke, i),
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
            l = {
              state: s,
              setOptions: function(n) {
                var o = "function" == typeof n ? n(s.options) : n;
                d(), s.options = Object.assign({}, i, s.options, o), s.scrollParents = {
                  reference: _(e) ? ue(e) : e.contextElement ? ue(e.contextElement) : [],
                  popper: ue(t)
                };
                var a, c, p = function(e) {
                  var t = De(e);
                  return D.reduce((function(e, n) {
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
                return s.orderedModifiers = p.filter((function(e) {
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
                      instance: l,
                      options: r
                    });
                    f.push(i || function() {})
                  }
                })), l.update()
              },
              forceUpdate: function() {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Ae(t, n)) {
                    s.rects = {
                      reference: je(t, Y(n), "fixed" === s.options.strategy),
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
                          d = o.name;
                        "function" == typeof i && (s = i({
                          state: s,
                          options: f,
                          name: d,
                          instance: l
                        }) || s)
                      } else s.reset = !1, r = -1
                  }
                }
              },
              update: (o = function() {
                return new Promise((function(e) {
                  l.forceUpdate(), e(s)
                }))
              }, function() {
                return a || (a = new Promise((function(e) {
                  Promise.resolve().then((function() {
                    a = void 0, e(o())
                  }))
                }))), a
              }),
              destroy: function() {
                d(), c = !0
              }
            };
          if (!Ae(e, t)) return l;

          function d() {
            f.forEach((function(e) {
              return e()
            })), f = []
          }
          return l.setOptions(n).then((function(e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e)
          })), l
        }
      }
      var Pe = _e(),
        Le = _e({
          defaultModifiers: [oe, Me, ne, T, Oe, be, Ee, Z, xe]
        }),
        Te = _e({
          defaultModifiers: [oe, Me, ne, T]
        })
    }
  }
]);