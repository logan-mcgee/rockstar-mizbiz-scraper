! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4fcfaecf-bebf-4d1f-9541-3817e985a194", e._sentryDebugIdIdentifier = "sentry-dbid-4fcfaecf-bebf-4d1f-9541-3817e985a194")
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
  [620, 239], {
    91620: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => I
      });
      var r = t(87672),
        o = t(51664),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        i = t(92634),
        u = (0, t(35045).Y)(),
        l = function() {},
        f = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l
            }),
            c = a[0],
            f = a[1],
            d = e.forwardProps,
            s = e.children,
            p = e.className,
            h = e.removeScrollBar,
            v = e.enabled,
            g = e.shards,
            m = e.sideCar,
            y = e.noIsolation,
            b = e.inert,
            w = e.allowPinchZoom,
            E = e.as,
            C = void 0 === E ? "div" : E,
            S = e.gapMode,
            k = (0, r.sX)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            _ = m,
            M = (0, i.m)([t, n]),
            R = (0, r.C3)((0, r.C3)({}, k), c);
          return o.createElement(o.Fragment, null, v && o.createElement(_, {
            sideCar: u,
            removeScrollBar: h,
            shards: g,
            noIsolation: y,
            inert: b,
            setCallbacks: f,
            allowPinchZoom: !!w,
            lockRef: t,
            gapMode: S
          }), d ? o.cloneElement(o.Children.only(s), (0, r.C3)((0, r.C3)({}, R), {
            ref: M
          })) : o.createElement(C, (0, r.C3)({}, R, {
            className: p,
            ref: M
          }), s))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var d = function(e) {
        var n = e.sideCar,
          t = (0, r.sX)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.C3)({}, t))
      };
      d.isSideCarExport = !0;
      var s = function() {
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
        p = function() {
          var e, n = (e = s(), function(n, t) {
            o.useEffect((function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }), [n && t])
          });
          return function(e) {
            var t = e.styles,
              r = e.dynamic;
            return n(t, r), null
          }
        },
        h = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        v = function(e) {
          return parseInt(e || "", 10) || 0
        },
        g = p(),
        m = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        y = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r,
            c = o.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return h;
                var n = function(e) {
                    var n = window.getComputedStyle(document.body),
                      t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = n["padding" === e ? "paddingTop" : "marginTop"],
                      o = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [v(t), v(r), v(o)]
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
          return o.createElement(g, {
            styles: m(c, !n, a, t ? "" : "!important")
          })
        },
        b = !1;
      if ("undefined" != typeof window) try {
        var w = Object.defineProperty({}, "passive", {
          get: function() {
            return b = !0, !0
          }
        });
        window.addEventListener("test", w, w), window.removeEventListener("test", w, w)
      } catch (e) {
        b = !1
      }
      var E = !!b && {
          passive: !1
        },
        C = function(e, n) {
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        S = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), k(e, r)) {
              var o = _(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        k = function(e, n) {
          return "v" === e ? function(e) {
            return C(e, "overflowY")
          }(n) : function(e) {
            return C(e, "overflowX")
          }(n)
        },
        _ = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        M = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        R = function(e) {
          return [e.deltaX, e.deltaY]
        },
        x = function(e) {
          return e && "current" in e ? e.current : e
        },
        O = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        P = 0,
        T = [];

      function L(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const N = (u.useMedium((function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(P++)[0],
          i = o.useState(p)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.Mt)([e.lockRef.current], (e.shards || []).map(x), !0).filter(Boolean);
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
            if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
            var r, o = M(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              f = e.target,
              d = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === f.type) return !1;
            var s = S(d, f);
            if (!s) return !0;
            if (s ? r = d : (r = "v" === d ? "h" : "v", s = S(d, f)), !s) return !1;
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
                var p = _(e, i),
                  h = p[0],
                  v = p[1] - p[2] - a * h;
                (h || v) && k(e, i) && (d += v, s += h), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (f && (o && Math.abs(d) < 1 || !o && c > d) || !f && (o && Math.abs(s) < 1 || !o && -c > s)) && (l = !0), l
            }(p, n, e, "h" === p ? i : l, !0)
          }), []),
          f = o.useCallback((function(e) {
            var t = e;
            if (T.length && T[T.length - 1] === i) {
              var r = "deltaY" in t ? R(t) : M(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(x).filter(Boolean).filter((function(e) {
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
              shadowParent: L(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          s = o.useCallback((function(e) {
            t.current = M(e), a.current = void 0
          }), []),
          h = o.useCallback((function(n) {
            d(n.type, R(n), n.target, l(n, e.lockRef.current))
          }), []),
          v = o.useCallback((function(n) {
            d(n.type, M(n), n.target, l(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return T.push(i), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", f, E), document.addEventListener("touchmove", f, E), document.addEventListener("touchstart", s, E),
            function() {
              T = T.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", f, E), document.removeEventListener("touchmove", f, E), document.removeEventListener("touchstart", s, E)
            }
        }), []);
        var g = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: O(c)
        }) : null, g ? o.createElement(y, {
          gapMode: e.gapMode
        }) : null)
      })), d);
      var j = o.forwardRef((function(e, n) {
        return o.createElement(f, (0, r.C3)({}, e, {
          ref: n,
          sideCar: N
        }))
      }));
      j.classNames = f.classNames;
      const I = j
    },
    92634: (e, n, t) => {
      t.d(n, {
        m: () => o
      });
      var r = t(51664);

      function o(e, n) {
        return t = n || null, o = function(n) {
          return e.forEach((function(e) {
            return function(e, n) {
              return "function" == typeof e ? e(n) : e && (e.current = n), e
            }(e, n)
          }))
        }, (a = (0, r.useState)((function() {
          return {
            value: t,
            callback: o,
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
        }))[0]).callback = o, a.facade;
        var t, o, a
      }
    },
    35045: (e, n, t) => {
      t.d(n, {
        W: () => c,
        Y: () => i
      });
      var r = t(87672);

      function o(e) {
        return e
      }

      function a(e, n) {
        void 0 === n && (n = o);
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
      }

      function c(e, n) {
        return void 0 === n && (n = o), a(e, n)
      }

      function i(e) {
        void 0 === e && (e = {});
        var n = a(null);
        return n.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    87672: (e, n, t) => {
      t.d(n, {
        C3: () => a,
        KE: () => u,
        Mt: () => l,
        ct: () => o,
        kH: () => i,
        sX: () => c
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