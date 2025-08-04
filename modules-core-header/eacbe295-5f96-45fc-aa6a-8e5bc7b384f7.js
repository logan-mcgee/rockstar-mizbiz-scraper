try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eacbe295-5f96-45fc-aa6a-8e5bc7b384f7", e._sentryDebugIdIdentifier = "sentry-dbid-eacbe295-5f96-45fc-aa6a-8e5bc7b384f7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3724], {
    33724: (e, t, n) => {
      n.r(t), n.d(t, {
        RemoveScroll: () => Y
      });
      var r = n(91299),
        o = n(71127),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        s = new WeakMap;

      function l(e) {
        return e
      }
      var f = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = l);
            var n = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
              },
              useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                  function() {
                    n = n.filter((function(e) {
                      return e !== o
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                  var t = n;
                  n = [], t.forEach(e)
                }
                n = {
                  push: function(t) {
                    return e(t)
                  },
                  filter: function() {
                    return n
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  n = [], o.forEach(e), t = n
                }
                var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                  },
                  i = function() {
                    return Promise.resolve().then(a)
                  };
                i(), n = {
                  push: function(e) {
                    t.push(e), i()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        d = function() {},
        p = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            i = a[0],
            l = a[1],
            p = e.forwardProps,
            h = e.children,
            y = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            _ = e.shards,
            b = e.sideCar,
            g = e.noIsolation,
            w = e.inert,
            E = e.allowPinchZoom,
            S = e.as,
            j = void 0 === S ? "div" : S,
            O = e.gapMode,
            P = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            k = b,
            T = function(e, t) {
              var n, r, a, i = (n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return c(e, t)
                }))
              }, (a = (0, o.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var t = a.value;
                      t !== e && (a.value = e, a.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, a.facade);
              return u((function() {
                var t = s.get(i);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = i.current;
                  n.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || c(e, o)
                  }))
                }
                s.set(i, e)
              }), [e]), i
            }([n, t]),
            x = (0, r.__assign)((0, r.__assign)({}, P), i);
          return o.createElement(o.Fragment, null, m && o.createElement(k, {
            sideCar: f,
            removeScrollBar: v,
            shards: _,
            noIsolation: g,
            inert: w,
            setCallbacks: l,
            allowPinchZoom: !!E,
            lockRef: n,
            gapMode: O
          }), p ? o.cloneElement(o.Children.only(h), (0, r.__assign)((0, r.__assign)({}, x), {
            ref: T
          })) : o.createElement(j, (0, r.__assign)({}, x, {
            className: y,
            ref: T
          }), h))
        }));
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var h = function(e) {
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, n))
      };
      h.isSideCarExport = !0;
      var y = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (a = r, (o = t).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        v = function() {
          var e, t = (e = y(), function(t, n) {
            o.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        m = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        _ = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = v(),
        g = "data-scroll-locked",
        w = function(e, t, n, r) {
          var o = e.left,
            c = e.top,
            u = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(g, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(g, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        E = function() {
          var e = parseInt(document.body.getAttribute(g) || "0", 10);
          return isFinite(e) ? e : 0
        },
        S = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(g, (E() + 1).toString()),
              function() {
                var e = E() - 1;
                e <= 0 ? document.body.removeAttribute(g) : document.body.setAttribute(g, e.toString())
              }
          }), []);
          var i = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [_(n), _(r), _(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(a)
          }), [a]);
          return o.createElement(b, {
            styles: w(i, !t, a, n ? "" : "!important")
          })
        },
        j = !1;
      if ("undefined" != typeof window) try {
        var O = Object.defineProperty({}, "passive", {
          get: function() {
            return j = !0, !0
          }
        });
        window.addEventListener("test", O, O), window.removeEventListener("test", O, O)
      } catch (e) {
        j = !1
      }
      var P = !!j && {
          passive: !1
        },
        k = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        T = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), x(e, r)) {
              var o = C(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        x = function(e, t) {
          return "v" === e ? function(e) {
            return k(e, "overflowY")
          }(t) : function(e) {
            return k(e, "overflowX")
          }(t)
        },
        C = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        R = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        I = function(e) {
          return [e.deltaX, e.deltaY]
        },
        M = function(e) {
          return e && "current" in e ? e.current : e
        },
        D = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        A = 0,
        N = [];

      function L(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const F = (B = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(A++)[0],
          c = o.useState(v)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(M), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var s = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = R(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              s = "deltaY" in e ? e.deltaY : i[1] - o[1],
              l = e.target,
              f = Math.abs(c) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === l.type) return !1;
            var d = T(f, l);
            if (!d) return !0;
            if (d ? r = f : (r = "v" === f ? "h" : "v", d = T(f, l)), !d) return !1;
            if (!a.current && "changedTouches" in e && (c || s) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = o * r,
                i = n.target,
                c = t.contains(i),
                u = !1,
                s = a > 0,
                l = 0,
                f = 0;
              do {
                var d = C(e, i),
                  p = d[0],
                  h = d[1] - d[2] - o * p;
                (p || h) && x(e, i) && (l += h, f += p), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!c && i !== document.body || c && (t.contains(i) || t === i));
              return (s && (Math.abs(l) < 1 || !1) || !s && (Math.abs(f) < 1 || !1)) && (u = !0), u
            }(p, t, e, "h" === p ? c : s)
          }), []),
          l = o.useCallback((function(e) {
            var n = e;
            if (N.length && N[N.length - 1] === c) {
              var r = "deltaY" in n ? I(n) : R(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(M).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? s(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          f = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: L(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          d = o.useCallback((function(e) {
            n.current = R(e), a.current = void 0
          }), []),
          p = o.useCallback((function(t) {
            f(t.type, I(t), t.target, s(t, e.lockRef.current))
          }), []),
          h = o.useCallback((function(t) {
            f(t.type, R(t), t.target, s(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return N.push(c), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", l, P), document.addEventListener("touchmove", l, P), document.addEventListener("touchstart", d, P),
            function() {
              N = N.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", l, P), document.removeEventListener("touchmove", l, P), document.removeEventListener("touchstart", d, P)
            }
        }), []);
        var y = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(c, {
          styles: D(i)
        }) : null, y ? o.createElement(S, {
          gapMode: e.gapMode
        }) : null)
      }, f.useMedium(B), h);
      var B, W = o.forwardRef((function(e, t) {
        return o.createElement(p, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: F
        }))
      }));
      W.classNames = p.classNames;
      const Y = W
    },
    91299: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => A,
        __assign: () => a,
        __asyncDelegator: () => O,
        __asyncGenerator: () => j,
        __asyncValues: () => P,
        __await: () => S,
        __awaiter: () => h,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldIn: () => D,
        __classPrivateFieldSet: () => M,
        __createBinding: () => v,
        __decorate: () => c,
        __disposeResources: () => L,
        __esDecorate: () => s,
        __exportStar: () => m,
        __extends: () => o,
        __generator: () => y,
        __importDefault: () => R,
        __importStar: () => C,
        __makeTemplateObject: () => k,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => f,
        __read: () => b,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => F,
        __runInitializers: () => l,
        __setFunctionName: () => d,
        __spread: () => g,
        __spreadArray: () => E,
        __spreadArrays: () => w,
        __values: () => _,
        default: () => B
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function c(e, t, n, r) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      }

      function u(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function s(e, t, n, r, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, u = r.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), d = !1, p = n.length - 1; p >= 0; p--) {
          var h = {};
          for (var y in r) h[y] = "access" === y ? {} : r[y];
          for (var y in r.access) h.access[y] = r.access[y];
          h.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var v = (0, n[p])("accessor" === u ? {
            get: f.get,
            set: f.set
          } : f[s], h);
          if ("accessor" === u) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v) throw new TypeError("Object expected");
            (c = i(v.get)) && (f.get = c), (c = i(v.set)) && (f.set = c), (c = i(v.init)) && o.unshift(c)
          } else(c = i(v)) && ("field" === u ? o.unshift(c) : f[s] = c)
        }
        l && Object.defineProperty(l, r.name, f), d = !0
      }

      function l(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function h(e, t, n, r) {
        return new(n || (n = Promise))((function(o, a) {
          function i(e) {
            try {
              u(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function u(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(i, c)
          }
          u((r = r.apply(e, t || [])).next())
        }))
      }

      function y(e, t) {
        var n, r, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function c(c) {
          return function(u) {
            return function(c) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      a.label = o[1], o = c;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(c);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, u])
          }
        }
      }
      var v = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[n]
          }
        }), Object.defineProperty(e, r, o)
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
      };

      function m(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || v(t, e, n)
      }

      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function b(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
        return r
      }

      function E(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e)
      }

      function j(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []),
          a = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, s)
          }
        })), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function i(e, t) {
          o[e] && (r[e] = function(t) {
            return new Promise((function(n, r) {
              a.push([e, t, n, r]) > 1 || c(e, t)
            }))
          }, t && (r[e] = t(r[e])))
        }

        function c(e, t) {
          try {
            (n = o[e](t)).value instanceof S ? Promise.resolve(n.value.v).then(u, s) : l(a[0][2], n)
          } catch (e) {
            l(a[0][3], e)
          }
          var n
        }

        function u(e) {
          c("next", e)
        }

        function s(e) {
          c("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function O(e) {
        var t, n;
        return t = {}, r("next"), r("throw", (function(e) {
          throw e
        })), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, o) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? {
              value: S(e[r](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = _(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise((function(r, o) {
              ! function(e, t, n, r) {
                Promise.resolve(r).then((function(t) {
                  e({
                    value: t,
                    done: n
                  })
                }), t)
              }(r, o, (t = e[n](t)).done, t.value)
            }))
          }
        }
      }

      function k(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var T = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        x = function(e) {
          return x = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t
          }, x(e)
        };

      function C(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = x(e), r = 0; r < n.length; r++) "default" !== n[r] && v(t, e, n[r]);
        return T(t, e), t
      }

      function R(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function I(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function M(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
      }

      function D(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function A(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r, o;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (o = r)
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          o && (r = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: r,
            async: n
          })
        } else n && e.stack.push({
          async: !0
        });
        return t
      }
      var N = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function L(e) {
        function t(t) {
          e.error = e.hasError ? new N(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var n, r = 0;
        return function o() {
          for (; n = e.stack.pop();) try {
            if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
            if (n.dispose) {
              var a = n.dispose.call(n.value);
              if (n.async) return r |= 2, Promise.resolve(a).then(o, (function(e) {
                return t(e), o()
              }))
            } else r |= 1
          } catch (e) {
            t(e)
          }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, n, r, o, a) {
          return n ? t ? ".jsx" : ".js" : !r || o && a ? r + o + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const B = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: u,
        __esDecorate: s,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: h,
        __generator: y,
        __createBinding: v,
        __exportStar: m,
        __values: _,
        __read: b,
        __spread: g,
        __spreadArrays: w,
        __spreadArray: E,
        __await: S,
        __asyncGenerator: j,
        __asyncDelegator: O,
        __asyncValues: P,
        __makeTemplateObject: k,
        __importStar: C,
        __importDefault: R,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: D,
        __addDisposableResource: A,
        __disposeResources: L,
        __rewriteRelativeImportExtension: F
      }
    }
  }
]);