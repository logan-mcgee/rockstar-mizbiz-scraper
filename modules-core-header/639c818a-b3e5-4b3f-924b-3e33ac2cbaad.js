try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "639c818a-b3e5-4b3f-924b-3e33ac2cbaad", e._sentryDebugIdIdentifier = "sentry-dbid-639c818a-b3e5-4b3f-924b-3e33ac2cbaad")
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
  [3296], {
    33296(e, t, n) {
      n.r(t), n.d(t, {
        RemoveScroll: () => W
      });
      var r = n(51177),
        o = n(4637),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function f(e) {
        return e
      }
      var d = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = f);
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
                    n = n.filter(function(e) {
                      return e !== o
                    })
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
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), n = {
                  push: function(e) {
                    t.push(e), c()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.Cl)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        s = function() {},
        p = o.forwardRef(function(e, t) {
          var n = o.useRef(null),
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
            g = e.removeScrollBar,
            m = e.enabled,
            b = e.shards,
            y = e.sideCar,
            w = e.noRelative,
            E = e.noIsolation,
            C = e.inert,
            k = e.allowPinchZoom,
            S = e.as,
            M = void 0 === S ? "div" : S,
            T = e.gapMode,
            R = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            _ = y,
            O = function(e, t) {
              var n, r, a, c = (n = t || null, r = function(t) {
                return e.forEach(function(e) {
                  return i(e, t)
                })
              }, (a = (0, o.useState)(function() {
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
              })[0]).callback = r, a.facade);
              return u(function() {
                var t = l.get(c);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = c.current;
                  n.forEach(function(e) {
                    r.has(e) || i(e, null)
                  }), r.forEach(function(e) {
                    n.has(e) || i(e, o)
                  })
                }
                l.set(c, e)
              }, [e]), c
            }([n, t]),
            x = (0, r.Cl)((0, r.Cl)({}, R), c);
          return o.createElement(o.Fragment, null, m && o.createElement(_, {
            sideCar: d,
            removeScrollBar: g,
            shards: b,
            noRelative: w,
            noIsolation: E,
            inert: C,
            setCallbacks: f,
            allowPinchZoom: !!k,
            lockRef: n,
            gapMode: T
          }), p ? o.cloneElement(o.Children.only(h), (0, r.Cl)((0, r.Cl)({}, x), {
            ref: O
          })) : o.createElement(M, (0, r.Cl)({}, x, {
            className: v,
            ref: O
          }), h))
        });
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var h = function(e) {
        var t = e.sideCar,
          n = (0, r.Tt)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.Cl)({}, n))
      };
      h.isSideCarExport = !0;
      var v = function() {
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
        g = function() {
          var e, t = (e = v(), function(t, n) {
            o.useEffect(function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }, [t && n])
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
        b = function(e) {
          return parseInt(e || "", 10) || 0
        },
        y = g(),
        w = "data-scroll-locked",
        E = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(w, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(w, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(w) || "0", 10);
          return isFinite(e) ? e : 0
        },
        k = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect(function() {
            return document.body.setAttribute(w, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(w) : document.body.setAttribute(w, e.toString())
              }
          }, []);
          var c = o.useMemo(function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [b(n), b(r), b(o)]
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
          }, [a]);
          return o.createElement(y, {
            styles: E(c, !t, a, n ? "" : "!important")
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
      var T = !!S && {
          passive: !1
        },
        R = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        _ = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), O(e, r)) {
              var o = x(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        O = function(e, t) {
          return "v" === e ? function(e) {
            return R(e, "overflowY")
          }(t) : function(e) {
            return R(e, "overflowX")
          }(t)
        },
        x = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        N = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        P = function(e) {
          return [e.deltaX, e.deltaY]
        },
        L = function(e) {
          return e && "current" in e ? e.current : e
        },
        j = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        I = 0,
        A = [];

      function B(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const D = (X = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(I++)[0],
          i = o.useState(g)[0],
          u = o.useRef(e);
        o.useEffect(function() {
          u.current = e
        }, [e]), o.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.fX)([e.lockRef.current], (e.shards || []).map(L), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), t.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = N(e),
              c = n.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              f = e.target,
              d = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === f.type) return !1;
            var s = window.getSelection(),
              p = s && s.anchorNode;
            if (p && (p === f || p.contains(f))) return !1;
            var h = _(d, f);
            if (!h) return !0;
            if (h ? r = d : (r = "v" === d ? "h" : "v", h = _(d, f)), !h) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var v = a.current || r;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = o * r,
                c = n.target,
                i = t.contains(c),
                u = !1,
                l = a > 0,
                f = 0,
                d = 0;
              do {
                if (!c) break;
                var s = x(e, c),
                  p = s[0],
                  h = s[1] - s[2] - o * p;
                (p || h) && O(e, c) && (f += h, d += p);
                var v = c.parentNode;
                c = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v
              } while (!i && c !== document.body || i && (t.contains(c) || t === c));
              return (l && (Math.abs(f) < 1 || !1) || !l && (Math.abs(d) < 1 || !1)) && (u = !0), u
            }(v, t, e, "h" === v ? i : l)
          }, []),
          f = o.useCallback(function(e) {
            var n = e;
            if (A.length && A[A.length - 1] === i) {
              var r = "deltaY" in n ? P(n) : N(n),
                o = t.current.filter(function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                })[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(L).filter(Boolean).filter(function(e) {
                  return e.contains(n.target)
                });
                (a.length > 0 ? l(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }, []),
          d = o.useCallback(function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: B(r)
            };
            t.current.push(a), setTimeout(function() {
              t.current = t.current.filter(function(e) {
                return e !== a
              })
            }, 1)
          }, []),
          s = o.useCallback(function(e) {
            n.current = N(e), a.current = void 0
          }, []),
          p = o.useCallback(function(t) {
            d(t.type, P(t), t.target, l(t, e.lockRef.current))
          }, []),
          h = o.useCallback(function(t) {
            d(t.type, N(t), t.target, l(t, e.lockRef.current))
          }, []);
        o.useEffect(function() {
          return A.push(i), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", f, T), document.addEventListener("touchmove", f, T), document.addEventListener("touchstart", s, T),
            function() {
              A = A.filter(function(e) {
                return e !== i
              }), document.removeEventListener("wheel", f, T), document.removeEventListener("touchmove", f, T), document.removeEventListener("touchstart", s, T)
            }
        }, []);
        var v = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: j(c)
        }) : null, v ? o.createElement(k, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, d.useMedium(X), h);
      var X, Y = o.forwardRef(function(e, t) {
        return o.createElement(p, (0, r.Cl)({}, e, {
          ref: t,
          sideCar: D
        }))
      });
      Y.classNames = p.classNames;
      const W = Y
    },
    51177(e, t, n) {
      n.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => c,
        YH: () => u,
        fX: () => l,
        sH: () => i
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

      function c(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function i(e, t, n, r) {
        return new(n || (n = Promise))(function(o, a) {
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
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(c, i)
          }
          u((r = r.apply(e, t || [])).next())
        })
      }

      function u(e, t) {
        var n, r, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return c.next = i(0), c.throw = i(1), c.return = i(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
          return this
        }), c;

        function i(i) {
          return function(u) {
            return function(i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, i[0] && (a = 0)), a;) try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                n = o = 0
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

      function l(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create
    }
  }
]);