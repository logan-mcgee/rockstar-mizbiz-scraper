try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2a8cf8ae-f83b-4f2c-8014-6fcf21de83eb", e._sentryDebugIdIdentifier = "sentry-dbid-2a8cf8ae-f83b-4f2c-8014-6fcf21de83eb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5328], {
    35328(e, n, t) {
      t.d(n, {
        A: () => O
      });
      var r = t(51177),
        o = t(93082),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function d(e) {
        return e
      }
      var s = function(e) {
          void 0 === e && (e = {});
          var n = function(e, n) {
            void 0 === n && (n = d);
            var t = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return t.length ? t[t.length - 1] : e
              },
              useMedium: function(e) {
                var o = n(e, r);
                return t.push(o),
                  function() {
                    t = t.filter(function(e) {
                      return e !== o
                    })
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; t.length;) {
                  var n = t;
                  t = [], n.forEach(e)
                }
                t = {
                  push: function(n) {
                    return e(n)
                  },
                  filter: function() {
                    return t
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var n = [];
                if (t.length) {
                  var o = t;
                  t = [], o.forEach(e), n = t
                }
                var a = function() {
                    var t = n;
                    n = [], t.forEach(e)
                  },
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), t = {
                  push: function(e) {
                    n.push(e), c()
                  },
                  filter: function(e) {
                    return n = n.filter(e), t
                  }
                }
              }
            }
          }(null);
          return n.options = (0, r.Cl)({
            async: !0,
            ssr: !1
          }, e), n
        }(),
        f = function() {},
        h = o.forwardRef(function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            c = a[0],
            d = a[1],
            h = e.forwardProps,
            v = e.children,
            p = e.className,
            g = e.removeScrollBar,
            m = e.enabled,
            b = e.shards,
            w = e.sideCar,
            y = e.noRelative,
            E = e.noIsolation,
            C = e.inert,
            k = e.allowPinchZoom,
            S = e.as,
            M = void 0 === S ? "div" : S,
            R = e.gapMode,
            T = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            N = w,
            L = function(e, n) {
              var t, r, a, c = (t = n || null, r = function(n) {
                return e.forEach(function(e) {
                  return i(e, n)
                })
              }, (a = (0, o.useState)(function() {
                return {
                  value: t,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var n = a.value;
                      n !== e && (a.value = e, a.callback(e, n))
                    }
                  }
                }
              })[0]).callback = r, a.facade);
              return u(function() {
                var n = l.get(c);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = c.current;
                  t.forEach(function(e) {
                    r.has(e) || i(e, null)
                  }), r.forEach(function(e) {
                    t.has(e) || i(e, o)
                  })
                }
                l.set(c, e)
              }, [e]), c
            }([t, n]),
            _ = (0, r.Cl)((0, r.Cl)({}, T), c);
          return o.createElement(o.Fragment, null, m && o.createElement(N, {
            sideCar: s,
            removeScrollBar: g,
            shards: b,
            noRelative: y,
            noIsolation: E,
            inert: C,
            setCallbacks: d,
            allowPinchZoom: !!k,
            lockRef: t,
            gapMode: R
          }), h ? o.cloneElement(o.Children.only(v), (0, r.Cl)((0, r.Cl)({}, _), {
            ref: L
          })) : o.createElement(M, (0, r.Cl)({}, _, {
            className: p,
            ref: L
          }), v))
        });
      h.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, h.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var v = function(e) {
        var n = e.sideCar,
          t = (0, r.Tt)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.Cl)({}, t))
      };
      v.isSideCarExport = !0;
      var p = function() {
          var e = 0,
            n = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = t.nc;
                return n && e.setAttribute("nonce", n), e
              }()) && (a = r, (o = n).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(n)), e++
            },
            remove: function() {
              !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
          }
        },
        g = function() {
          var e, n = (e = p(), function(n, t) {
            o.useEffect(function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }, [n && t])
          });
          return function(e) {
            var t = e.styles,
              r = e.dynamic;
            return n(t, r), null
          }
        },
        m = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        b = function(e) {
          return parseInt(e || "", 10) || 0
        },
        w = g(),
        y = "data-scroll-locked",
        E = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(y, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(y, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(y) || "0", 10);
          return isFinite(e) ? e : 0
        },
        k = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect(function() {
            return document.body.setAttribute(y, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(y) : document.body.setAttribute(y, e.toString())
              }
          }, []);
          var c = o.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
              var n = function(e) {
                  var n = window.getComputedStyle(document.body),
                    t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = n["padding" === e ? "paddingTop" : "marginTop"],
                    o = n["padding" === e ? "paddingRight" : "marginRight"];
                  return [b(t), b(r), b(o)]
                }(e),
                t = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: n[0],
                top: n[1],
                right: n[2],
                gap: Math.max(0, r - t + n[2] - n[0])
              }
            }(a)
          }, [a]);
          return o.createElement(w, {
            styles: E(c, !n, a, t ? "" : "!important")
          })
        },
        S = !1;
      if ("undefined" != typeof window) try {
        var M = Object.defineProperty({}, "passive", {
          get: function() {
            return S = !0, !0
          }
        });
        window.addEventListener("test", M, M), window.removeEventListener("test", M, M)
      } catch (e) {
        S = !1
      }
      var R = !!S && {
          passive: !1
        },
        T = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        N = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), L(e, r)) {
              var o = _(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        L = function(e, n) {
          return "v" === e ? function(e) {
            return T(e, "overflowY")
          }(n) : function(e) {
            return T(e, "overflowX")
          }(n)
        },
        _ = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        x = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        I = function(e) {
          return [e.deltaX, e.deltaY]
        },
        P = function(e) {
          return e && "current" in e ? e.current : e
        },
        A = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        B = 0,
        D = [];

      function W(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const X = (Y = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(B++)[0],
          i = o.useState(g)[0],
          u = o.useRef(e);
        o.useEffect(function() {
          u.current = e
        }, [e]), o.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.fX)([e.lockRef.current], (e.shards || []).map(P), !0).filter(Boolean);
            return n.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), n.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback(function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = x(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              s = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === d.type) return !1;
            var f = window.getSelection(),
              h = f && f.anchorNode;
            if (h && (h === d || h.contains(d))) return !1;
            var v = N(s, d);
            if (!v) return !0;
            if (v ? r = s : (r = "v" === s ? "h" : "v", v = N(s, d)), !v) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, n, t, r) {
              var o = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                a = o * r,
                c = t.target,
                i = n.contains(c),
                u = !1,
                l = a > 0,
                d = 0,
                s = 0;
              do {
                if (!c) break;
                var f = _(e, c),
                  h = f[0],
                  v = f[1] - f[2] - o * h;
                (h || v) && L(e, c) && (d += v, s += h);
                var p = c.parentNode;
                c = p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? p.host : p
              } while (!i && c !== document.body || i && (n.contains(c) || n === c));
              return (l && (Math.abs(d) < 1 || !1) || !l && (Math.abs(s) < 1 || !1)) && (u = !0), u
            }(p, n, e, "h" === p ? i : l)
          }, []),
          d = o.useCallback(function(e) {
            var t = e;
            if (D.length && D[D.length - 1] === i) {
              var r = "deltaY" in t ? I(t) : x(t),
                o = n.current.filter(function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                })[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(P).filter(Boolean).filter(function(e) {
                  return e.contains(t.target)
                });
                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }, []),
          s = o.useCallback(function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: W(r)
            };
            n.current.push(a), setTimeout(function() {
              n.current = n.current.filter(function(e) {
                return e !== a
              })
            }, 1)
          }, []),
          f = o.useCallback(function(e) {
            t.current = x(e), a.current = void 0
          }, []),
          h = o.useCallback(function(n) {
            s(n.type, I(n), n.target, l(n, e.lockRef.current))
          }, []),
          v = o.useCallback(function(n) {
            s(n.type, x(n), n.target, l(n, e.lockRef.current))
          }, []);
        o.useEffect(function() {
          return D.push(i), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", d, R), document.addEventListener("touchmove", d, R), document.addEventListener("touchstart", f, R),
            function() {
              D = D.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", d, R), document.removeEventListener("touchmove", d, R), document.removeEventListener("touchstart", f, R)
            }
        }, []);
        var p = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: A(c)
        }) : null, p ? o.createElement(k, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, s.useMedium(Y), v);
      var Y, F = o.forwardRef(function(e, n) {
        return o.createElement(h, (0, r.Cl)({}, e, {
          ref: n,
          sideCar: X
        }))
      });
      F.classNames = h.classNames;
      const O = F
    }
  }
]);