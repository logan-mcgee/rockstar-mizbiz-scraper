! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6e1a65af-9e38-4510-b8df-9744fc2f2aba", e._sentryDebugIdIdentifier = "sentry-dbid-6e1a65af-9e38-4510-b8df-9744fc2f2aba")
  } catch (e) {}
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
  [395, 322, 776], {
    3776: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => z
      });
      var r = t(8322),
        o = t(2229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function f(e) {
        return e
      }
      var d = function(e) {
          void 0 === e && (e = {});
          var n = function(e, n) {
            void 0 === n && (n = f);
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
                    t = t.filter((function(e) {
                      return e !== o
                    }))
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
        s = function() {},
        p = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            c = a[0],
            f = a[1],
            p = e.forwardProps,
            h = e.children,
            v = e.className,
            m = e.removeScrollBar,
            g = e.enabled,
            y = e.shards,
            b = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            C = e.allowPinchZoom,
            S = e.as,
            k = void 0 === S ? "div" : S,
            _ = e.gapMode,
            M = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            x = b,
            R = function(e, n) {
              var t, r, a, c = (t = n || null, r = function(n) {
                return e.forEach((function(e) {
                  return i(e, n)
                }))
              }, (a = (0, o.useState)((function() {
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
              }))[0]).callback = r, a.facade);
              return u((function() {
                var n = l.get(c);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = c.current;
                  t.forEach((function(e) {
                    r.has(e) || i(e, null)
                  })), r.forEach((function(e) {
                    t.has(e) || i(e, o)
                  }))
                }
                l.set(c, e)
              }), [e]), c
            }([t, n]),
            T = (0, r.Cl)((0, r.Cl)({}, M), c);
          return o.createElement(o.Fragment, null, g && o.createElement(x, {
            sideCar: d,
            removeScrollBar: m,
            shards: y,
            noIsolation: w,
            inert: E,
            setCallbacks: f,
            allowPinchZoom: !!C,
            lockRef: t,
            gapMode: _
          }), p ? o.cloneElement(o.Children.only(h), (0, r.Cl)((0, r.Cl)({}, T), {
            ref: R
          })) : o.createElement(k, (0, r.Cl)({}, T, {
            className: v,
            ref: R
          }), h))
        }));
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var h = function(e) {
        var n = e.sideCar,
          t = (0, r.Tt)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.Cl)({}, t))
      };
      h.isSideCarExport = !0;
      var v, m, g, y, b = function() {
          return t.nc
        },
        w = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        E = function(e) {
          return parseInt(e || "", 10) || 0
        },
        C = (g = 0, y = null, v = {
          add: function(e) {
            var n, t;
            0 == g && (y = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var n = b();
              return n && e.setAttribute("nonce", n), e
            }()) && (t = e, (n = y).styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(y)), g++
          },
          remove: function() {
            !--g && y && (y.parentNode && y.parentNode.removeChild(y), y = null)
          }
        }, m = function(e, n) {
          o.useEffect((function() {
            return v.add(e),
              function() {
                v.remove()
              }
          }), [e && n])
        }, function(e) {
          var n = e.styles,
            t = e.dynamic;
          return m(n, t), null
        }),
        S = "data-scroll-locked",
        k = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(S, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(S, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        _ = function() {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0
        },
        M = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(S, (_() + 1).toString()),
              function() {
                var e = _() - 1;
                e <= 0 ? document.body.removeAttribute(S) : document.body.setAttribute(S, e.toString())
              }
          }), []);
          var c = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return w;
              var n = function(e) {
                  var n = window.getComputedStyle(document.body),
                    t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = n["padding" === e ? "paddingTop" : "marginTop"],
                    o = n["padding" === e ? "paddingRight" : "marginRight"];
                  return [E(t), E(r), E(o)]
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
          }), [a]);
          return o.createElement(C, {
            styles: k(c, !n, a, t ? "" : "!important")
          })
        },
        x = function() {
          var e = function() {
            var e = function() {
              var e = 0,
                n = null;
              return {
                add: function(t) {
                  var r, o;
                  0 == e && (n = function() {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var n = b();
                    return n && e.setAttribute("nonce", n), e
                  }()) && (o = t, (r = n).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                  }(n)), e++
                },
                remove: function() {
                  !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
                }
              }
            }();
            return function(n, t) {
              o.useEffect((function() {
                return e.add(n),
                  function() {
                    e.remove()
                  }
              }), [n && t])
            }
          }();
          return function(n) {
            var t = n.styles,
              r = n.dynamic;
            return e(t, r), null
          }
        },
        R = !1;
      if ("undefined" != typeof window) try {
        var T = Object.defineProperty({}, "passive", {
          get: function() {
            return R = !0, !0
          }
        });
        window.addEventListener("test", T, T), window.removeEventListener("test", T, T)
      } catch (e) {
        R = !1
      }
      var N = !!R && {
          passive: !1
        },
        O = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        P = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), L(e, r)) {
              var o = j(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        L = function(e, n) {
          return "v" === e ? function(e) {
            return O(e, "overflowY")
          }(n) : function(e) {
            return O(e, "overflowX")
          }(n)
        },
        j = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        I = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        A = function(e) {
          return [e.deltaX, e.deltaY]
        },
        B = function(e) {
          return e && "current" in e ? e.current : e
        },
        X = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        Y = 0,
        W = [];

      function D(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const H = (Z = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(Y++)[0],
          i = o.useState(x)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.fX)([e.lockRef.current], (e.shards || []).map(B), !0).filter(Boolean);
            return n.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), n.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback((function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = I(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              f = e.target,
              d = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === f.type) return !1;
            var s = P(d, f);
            if (!s) return !0;
            if (s ? r = d : (r = "v" === d ? "h" : "v", s = P(d, f)), !s) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, n, t, r, o) {
              var a = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                c = a * r,
                i = t.target,
                u = n.contains(i),
                l = !1,
                f = c > 0,
                d = 0,
                s = 0;
              do {
                var p = j(e, i),
                  h = p[0],
                  v = p[1] - p[2] - a * h;
                (h || v) && L(e, i) && (d += v, s += h), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (f && (Math.abs(d) < 1 || !1) || !f && (Math.abs(s) < 1 || !1)) && (l = !0), l
            }(p, n, e, "h" === p ? i : l)
          }), []),
          f = o.useCallback((function(e) {
            var t = e;
            if (W.length && W[W.length - 1] === i) {
              var r = "deltaY" in t ? A(t) : I(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(B).filter(Boolean).filter((function(e) {
                  return e.contains(t.target)
                }));
                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          d = o.useCallback((function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: D(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          s = o.useCallback((function(e) {
            t.current = I(e), a.current = void 0
          }), []),
          p = o.useCallback((function(n) {
            d(n.type, A(n), n.target, l(n, e.lockRef.current))
          }), []),
          h = o.useCallback((function(n) {
            d(n.type, I(n), n.target, l(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return W.push(i), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", f, N), document.addEventListener("touchmove", f, N), document.addEventListener("touchstart", s, N),
            function() {
              W = W.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", f, N), document.removeEventListener("touchmove", f, N), document.removeEventListener("touchstart", s, N)
            }
        }), []);
        var v = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: X(c)
        }) : null, v ? o.createElement(M, {
          gapMode: e.gapMode
        }) : null)
      }, d.useMedium(Z), h);
      var Z, F = o.forwardRef((function(e, n) {
        return o.createElement(p, (0, r.Cl)({}, e, {
          ref: n,
          sideCar: H
        }))
      }));
      F.classNames = p.classNames;
      const z = F
    },
    8322: (e, n, t) => {
      t.d(n, {
        C6: () => o,
        Cl: () => a,
        Tt: () => c,
        YH: () => u,
        fX: () => l,
        sH: () => i
      });
      var r = function(e, n) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }, r(e, n)
      };

      function o(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          return e
        }, a.apply(this, arguments)
      };

      function c(e, n) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
        }
        return t
      }

      function i(e, n, t, r) {
        return new(t || (t = Promise))((function(o, a) {
          function c(e) {
            try {
              u(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function u(e) {
            var n;
            e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
              e(n)
            }))).then(c, i)
          }
          u((r = r.apply(e, n || [])).next())
        }))
      }

      function u(e, n) {
        var t, r, o, a, c = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function i(i) {
          return function(u) {
            return function(i) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, i[0] && (c = 0)), c;) try {
                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return c.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    c.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      c.label = i[1];
                      break
                    }
                    if (6 === i[0] && c.label < o[1]) {
                      c.label = o[1], o = i;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(i);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                i = n.call(e, c)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                t = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, u])
          }
        }
      }

      function l(e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, a = n.length; o < a; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);