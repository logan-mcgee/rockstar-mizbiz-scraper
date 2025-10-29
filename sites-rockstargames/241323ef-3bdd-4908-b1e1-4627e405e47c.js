try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "241323ef-3bdd-4908-b1e1-4627e405e47c", e._sentryDebugIdIdentifier = "sentry-dbid-241323ef-3bdd-4908-b1e1-4627e405e47c")
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
  [4574], {
    444: (e, t, n) => {
      n.d(t, {
        A: () => C
      });
      var o = Math.ceil,
        r = Math.max;
      const i = "object" == typeof global && global && global.Object === Object && global;
      var s = "object" == typeof self && self && self.Object === Object && self;
      const a = (i || s || Function("return this")()).Symbol;
      var c = Object.prototype,
        u = c.hasOwnProperty,
        l = c.toString,
        d = a ? a.toStringTag : void 0;
      var f = Object.prototype.toString;
      var p = a ? a.toStringTag : void 0;
      const m = function(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? function(e) {
            var t = u.call(e, d),
              n = e[d];
            try {
              e[d] = void 0;
              var o = !0
            } catch (e) {}
            var r = l.call(e);
            return o && (t ? e[d] = n : delete e[d]), r
          }(e) : function(e) {
            return f.call(e)
          }(e)
        },
        v = function(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
        },
        g = function(e) {
          return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
          }(e.length) && ! function(e) {
            if (!v(e)) return !1;
            var t = m(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
          }(e)
        };
      var y = /^(?:0|[1-9]\d*)$/;
      const b = function(e, t, n) {
        if (!v(n)) return !1;
        var o = typeof t;
        return !!("number" == o ? g(n) && function(e, t) {
          var n = typeof e;
          return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && y.test(e)) && e > -1 && e % 1 == 0 && e < t
        }(t, n.length) : "string" == o && t in n) && function(e, t) {
          return e === t || e != e && t != t
        }(n[t], e)
      };
      var h = /\s/;
      var E = /^\s+/;
      const w = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && h.test(e.charAt(t)););
          return t
        }(e) + 1).replace(E, "") : e
      };
      var O = /^[-+]0x[0-9a-f]+$/i,
        D = /^0b[01]+$/i,
        x = /^0o[0-7]+$/i,
        M = parseInt;
      const S = function(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
              return null != e && "object" == typeof e
            }(e) && "[object Symbol]" == m(e)
          }(e)) return NaN;
        if (v(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = v(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = w(e);
        var n = D.test(e);
        return n || x.test(e) ? M(e.slice(2), n ? 2 : 8) : O.test(e) ? NaN : +e
      };
      var j = 1 / 0;
      const P = function(e) {
          return e ? (e = S(e)) === j || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        C = function(e, t, n) {
          return n && "number" != typeof n && b(e, t, n) && (t = n = void 0), e = P(e), void 0 === t ? (t = e, e = 0) : t = P(t),
            function(e, t, n, i) {
              for (var s = -1, a = r(o((t - e) / (n || 1)), 0), c = Array(a); a--;) c[i ? a : ++s] = e, e += n;
              return c
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : P(n), void 0)
        }
    },
    12919: (e, t, n) => {
      n.d(t, {
        UP: () => s,
        Ub: () => i
      });
      var o = n(60211),
        r = n(62229);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const i = e => o.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, a] = (0, r.useState)((() => n ? i(e) : t));

        function c() {
          a(i(e))
        }
        return (0, r.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return c(), t?.addListener ? t?.addListener(c) : t?.addEventListener("change", c), () => {
            t?.removeListener ? t?.removeListener(c) : t?.removeEventListener("change", c)
          }
        }), [e]), s
      }

      function s(...e) {
        const t = (0, r.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      n(51105)
    },
    17328: (e, t, n) => {
      n.d(t, {
        X3: () => r.X,
        v6: () => i.v
      });
      var o, r = n(60211),
        i = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    17982: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null
      };

      function r(e = {}) {
        let t, n, i, s, a = null,
          c = 0,
          u = !1,
          l = !1,
          d = !1,
          f = !1;

        function p() {
          i || (g() ? d = !0 : (u || n.emit("autoplay:play"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(c), c = e.setTimeout(w, s[n.selectedScrollSnap()]), a = (new Date).getTime(), n.emit("autoplay:timerset")
          }(), u = !0))
        }

        function m() {
          i || (u && n.emit("autoplay:stop"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(c), c = 0, a = null, n.emit("autoplay:timerstopped")
          }(), u = !1)
        }

        function v() {
          if (g()) return d = u, m();
          d && p()
        }

        function g() {
          const {
            ownerDocument: e
          } = n.internalEngine();
          return "hidden" === e.visibilityState
        }

        function y() {
          l || m()
        }

        function b() {
          l || p()
        }

        function h() {
          l = !0, m()
        }

        function E() {
          l = !1, p()
        }

        function w() {
          const {
            index: e
          } = n.internalEngine(), o = e.clone().add(1).get(), r = n.scrollSnapList().length - 1, i = t.stopOnLastSnap && o === r;
          if (n.canScrollNext() ? n.scrollNext(f) : n.scrollTo(0, f), n.emit("autoplay:select"), i) return m();
          p()
        }
        return {
          name: "autoplay",
          options: e,
          init: function(a, c) {
            n = a;
            const {
              mergeOptions: u,
              optionsAtMedia: l
            } = c, d = u(o, r.globalOptions), g = u(d, e);
            if (t = l(g), n.scrollSnapList().length <= 1) return;
            f = t.jump, i = !1, s = function(e, t) {
              const n = e.scrollSnapList();
              return "number" == typeof t ? n.map((() => t)) : t(n, e)
            }(n, t.delay);
            const {
              eventStore: w,
              ownerDocument: O
            } = n.internalEngine(), D = !!n.internalEngine().options.watchDrag, x = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            w.add(O, "visibilitychange", v), D && n.on("pointerDown", y), D && !t.stopOnInteraction && n.on("pointerUp", b), t.stopOnMouseEnter && w.add(x, "mouseenter", h), t.stopOnMouseEnter && !t.stopOnInteraction && w.add(x, "mouseleave", E), t.stopOnFocusIn && n.on("slideFocusStart", m), t.stopOnFocusIn && !t.stopOnInteraction && w.add(n.containerNode(), "focusout", p), t.playOnInit && p()
          },
          destroy: function() {
            n.off("pointerDown", y).off("pointerUp", b).off("slideFocusStart", m), m(), i = !0, u = !1
          },
          play: function(e) {
            void 0 !== e && (f = e), p()
          },
          stop: function() {
            u && m()
          },
          reset: function() {
            u && p()
          },
          isPlaying: function() {
            return u
          },
          timeUntilNext: function() {
            return a ? s[n.selectedScrollSnap()] - ((new Date).getTime() - a) : null
          }
        }
      }
      r.globalOptions = void 0
    },
    30257: (e, t, n) => {
      function o() {
        return o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }, o.apply(this, arguments)
      }

      function r(e, t) {
        if (e.length !== t.length) throw new Error("vectors must be same length");
        return e.map((function(e, n) {
          return e + t[n]
        }))
      }

      function i(e) {
        return Math.max.apply(Math, e.map(Math.abs))
      }

      function s(e) {
        return Object.freeze(e), Object.values(e).forEach((function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || s(e)
        })), e
      }
      n.d(t, {
        J: () => p
      });
      var a = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        c = [-1, -1, -1],
        u = s({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const l = function(e) {
        void 0 === e && (e = {});
        var t, n, l, d = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter((function(e) {
                return e !== n
              }))
            }
            return s({
              on: function(n, o) {
                return e[n] = (e[n] || []).concat(o),
                  function() {
                    return t(n, o)
                  }
              },
              off: t,
              dispatch: function(t, n) {
                t in e && e[t].forEach((function(e) {
                  return e(n)
                }))
              }
            })
          }(),
          f = d.on,
          p = d.off,
          m = d.dispatch,
          v = u,
          g = {
            isStarted: !1,
            isStartPublished: !1,
            isMomentum: !1,
            startTime: 0,
            lastAbsDelta: 1 / 0,
            axisMovement: [0, 0, 0],
            axisVelocity: [0, 0, 0],
            accelerationFactors: [],
            scrollPoints: [],
            scrollPointsToMerge: [],
            willEndTimeout: 400
          },
          y = !1,
          b = function(e) {
            Array.isArray(e) ? e.forEach((function(e) {
              return w(e)
            })) : w(e)
          },
          h = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some((function(e) {
              return null == e
            })) ? v : v = s(o({}, u, v, e))
          },
          E = function(e) {
            var i = o({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: g.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: g.axisVelocity,
              axisMovement: g.axisMovement,
              get axisMovementProjection() {
                return r(i.axisMovement, i.axisVelocity.map((function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                })))
              }
            }, e);
            m("wheel", o({}, i, {
              previous: n
            })), n = i
          },
          w = function(e) {
            var n, s, u, l, d, f = (d = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? c : t.map((function(e) {
                  return e ? -1 : 1
                }));
                return o({}, e, {
                  axisDelta: e.axisDelta.map((function(e, t) {
                    return e * n[t]
                  }))
                })
              }((s = (n = e).deltaX * a[n.deltaMode], u = n.deltaY * a[n.deltaMode], l = (n.deltaZ || 0) * a[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [s, u, l]
              }), v.reverseSign), o({}, d, {
                axisDelta: d.axisDelta.map((function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                }))
              })),
              p = f.axisDelta,
              m = f.timeStamp,
              b = i(p);
            e.preventDefault && function(e, t) {
              var n = v.preventWheelAction,
                o = t[0],
                r = t[1],
                i = t[2];
              if ("boolean" == typeof n) return n;
              switch (n) {
                case "x":
                  return Math.abs(o) >= e;
                case "y":
                  return Math.abs(r) >= e;
                case "z":
                  return Math.abs(i) >= e;
                default:
                  return !1
              }
            }(b, p) && e.preventDefault(), g.isStarted ? g.isMomentum && b > Math.max(2, 2 * g.lastAbsDelta) && (T(!0), C()) : C(), 0 === b && Object.is && Object.is(e.deltaX, -0) ? y = !0 : (t = e, g.axisMovement = r(g.axisMovement, p), g.lastAbsDelta = b, g.scrollPointsToMerge.push({
              axisDelta: p,
              timeStamp: m
            }), O(), E({
              axisDelta: p,
              isStart: !g.isStartPublished
            }), g.isStartPublished = !0, N())
          },
          O = function() {
            var e;
            2 === g.scrollPointsToMerge.length ? (g.scrollPoints.unshift({
              axisDeltaSum: g.scrollPointsToMerge.map((function(e) {
                return e.axisDelta
              })).reduce(r),
              timeStamp: (e = g.scrollPointsToMerge.map((function(e) {
                return e.timeStamp
              })), e.reduce((function(e, t) {
                return e + t
              })) / e.length)
            }), x(), g.scrollPointsToMerge.length = 0, g.scrollPoints.length = 1, g.isMomentum || j()) : g.isStartPublished || D()
          },
          D = function() {
            var e;
            g.axisVelocity = (e = g.scrollPointsToMerge, e[e.length - 1]).axisDelta.map((function(e) {
              return e / g.willEndTimeout
            }))
          },
          x = function() {
            var e = g.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var o = t.timeStamp - n.timeStamp;
              if (!(o <= 0)) {
                var r = t.axisDeltaSum.map((function(e) {
                    return e / o
                  })),
                  i = r.map((function(e, t) {
                    return e / (g.axisVelocity[t] || 1)
                  }));
                g.axisVelocity = r, g.accelerationFactors.push(i), M(o)
              }
            }
          },
          M = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            g.isMomentum || (t = Math.max(100, 2 * t)), g.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          S = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          j = function() {
            if (g.accelerationFactors.length >= 5) {
              if (y && (y = !1, i(g.axisVelocity) >= .2)) return void P();
              var e = g.accelerationFactors.slice(-5);
              e.every((function(e) {
                var t = !!e.reduce((function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  })),
                  n = e.filter(S).length === e.length;
                return t || n
              })) && P(), g.accelerationFactors = e
            }
          },
          P = function() {
            g.isMomentum = !0
          },
          C = function() {
            (g = {
              isStarted: !1,
              isStartPublished: !1,
              isMomentum: !1,
              startTime: 0,
              lastAbsDelta: 1 / 0,
              axisMovement: [0, 0, 0],
              axisVelocity: [0, 0, 0],
              accelerationFactors: [],
              scrollPoints: [],
              scrollPointsToMerge: [],
              willEndTimeout: 400
            }).isStarted = !0, g.startTime = Date.now(), n = void 0, y = !1
          },
          N = function() {
            clearTimeout(l), l = setTimeout(T, g.willEndTimeout)
          },
          T = function(e) {
            void 0 === e && (e = !1), g.isStarted && (g.isMomentum && e ? E({
              isEnding: !0,
              isMomentumCancel: !0
            }) : E({
              isEnding: !0
            }), g.isMomentum = !1, g.isStarted = !1)
          },
          F = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter((function(e) {
                  return e !== n
                }))
              };
            return s({
              observe: function(o) {
                return o.addEventListener("wheel", e, {
                    passive: !1
                  }), t.push(o),
                  function() {
                    return n(o)
                  }
              },
              unobserve: n,
              disconnect: function() {
                t.forEach(n)
              }
            })
          }(b),
          L = F.observe,
          I = F.unobserve,
          R = F.disconnect;
        return h(e), s({
          on: f,
          off: p,
          observe: L,
          unobserve: I,
          disconnect: R,
          feedWheel: b,
          updateOptions: h
        })
      };
      var d = {
        active: !0,
        breakpoints: {},
        wheelDraggingClass: "is-wheel-dragging",
        forceWheelAxis: void 0,
        target: void 0
      };
      p.globalOptions = void 0;
      var f = !1;

      function p(e) {
        var t;
        void 0 === e && (e = {});
        var n = function() {};
        return {
          name: "wheelGestures",
          options: e,
          init: function(o, r) {
            var i, s, a = r.mergeOptions,
              c = r.optionsAtMedia,
              u = a(d, p.globalOptions),
              m = a(u, e);
            t = c(m);
            var v = o.internalEngine(),
              g = null != (i = t.target) ? i : o.containerNode().parentNode,
              y = null != (s = t.forceWheelAxis) ? s : v.options.axis,
              b = l({
                preventWheelAction: y,
                reverseSign: [!0, !0, !1]
              });

            function h() {
              M = ("x" === y ? v.containerRect.width : v.containerRect.height) / 2
            }
            var E, w = b.observe(g),
              O = b.on("wheel", (function(e) {
                var o = e.axisDelta,
                  r = o[0],
                  i = o[1],
                  s = "x" === y ? r : i,
                  a = "x" === y ? i : r,
                  c = e.isMomentum && e.previous && !e.previous.isMomentum,
                  u = e.isEnding && !e.isMomentum || c;
                Math.abs(s) > Math.abs(a) && !D && !e.isMomentum && !S && function(e) {
                  try {
                    T(E = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return f && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n()
                  }
                  D = !0, x = 0, document.documentElement.addEventListener("mousemove", C, !0), document.documentElement.addEventListener("mouseup", C, !0), document.documentElement.addEventListener("mousedown", C, !0), t.wheelDraggingClass && g.classList.add(t.wheelDraggingClass)
                }(e), S && e.isEnding && (S = !1), D && (function(e) {
                  var t = F(e),
                    n = t.isAtBoundary,
                    o = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((x += Math.abs(o)) > M) return S = !0, j(e), !0
                  } else x = 0;
                  return !1
                }(e) || (u ? j(e) : T(N("mousemove", e))))
              })),
              D = !1,
              x = 0,
              M = 0,
              S = !1;

            function j(e) {
              D = !1, T(N("mouseup", e)), P(), t.wheelDraggingClass && g.classList.remove(t.wheelDraggingClass)
            }

            function P() {
              document.documentElement.removeEventListener("mousemove", C, !0), document.documentElement.removeEventListener("mouseup", C, !0), document.documentElement.removeEventListener("mousedown", C, !0)
            }

            function C(e) {
              D && e.isTrusted && e.stopImmediatePropagation()
            }

            function N(e, t) {
              var n, o;
              if (y === v.options.axis) {
                var r = t.axisMovement;
                n = r[0], o = r[1]
              } else {
                var i = t.axisMovement;
                o = i[0], n = i[1]
              }
              if (F(t).isAtBoundary) {
                var s = Math.min(x / M, 1),
                  a = x * (n > 0 ? -1 : 1) * (.25 + .5 * s);
                n += a, o += a
              }
              if (!v.options.skipSnaps && !v.options.dragFree) {
                var c = v.containerRect.width,
                  u = v.containerRect.height;
                n = n < 0 ? Math.max(n, -c) : Math.min(n, c), o = o < 0 ? Math.max(o, -u) : Math.min(o, u)
              }
              return new MouseEvent(e, {
                clientX: E.clientX + n,
                clientY: E.clientY + o,
                screenX: E.screenX + n,
                screenY: E.screenY + o,
                movementX: n,
                movementY: o,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function T(e) {
              o.containerNode().dispatchEvent(e)
            }

            function F(e) {
              var t = e.axisDelta,
                n = t[0],
                r = t[1],
                i = o.scrollProgress(),
                s = "x" === y ? n : r;
              return {
                isAtBoundary: s < 0 && !(i < 1) || s > 0 && !(i > 0),
                primaryAxisDelta: s
              }
            }
            h(), o.on("resize", h), n = function() {
              w(), O(), o.off("resize", h), P()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
    },
    32067: (e, t, n) => {
      n.d(t, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => a
      });
      var o = n(39447),
        r = n(42295),
        i = n(62229),
        s = n(69055);
      const a = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? s.s6 : i.Fragment;
        return (0, r.jsx)(n, {
          ...t
        })
      }
    },
    44154: (e, t, n) => {
      n.d(t, {
        L: () => l
      });
      var o = n(62229),
        r = n(54271);
      let i = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        a = [],
        c = {},
        u = r.Ay;
      const l = (e, t = a) => {
        let n = c;
        s(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : a) : s(t) && (n = t, t = "dependencies" in n ? n.dependencies : a), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: l
        } = n, d = (0, o.useRef)(!1), f = (0, o.useRef)(u.context((() => {}), r)), p = (0, o.useRef)((e => f.current.add(null, e))), m = t && t.length && !l;
        return m && i((() => (d.current = !0, () => f.current.revert())), a), i((() => {
          if (e && f.current.add(e, r), !m || !d.current) return () => f.current.revert()
        }), t), {
          context: f.current,
          contextSafe: p.current
        }
      };
      l.register = e => {
        u = e
      }, l.headless = !0
    },
    49292: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const o = {
        direction: "forward",
        speed: 2,
        startDelay: 1e3,
        active: !0,
        breakpoints: {},
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        rootNode: null
      };

      function r(e = {}) {
        let t, n, i, s, a, c = 0,
          u = !1,
          l = !1;

        function d() {
          if (i) return;
          if (u) return;
          n.emit("autoScroll:play");
          const e = n.internalEngine(),
            {
              ownerWindow: o
            } = e;
          c = o.setTimeout((() => {
            e.scrollBody = function(e) {
              const {
                location: o,
                previousLocation: r,
                offsetLocation: i,
                target: s,
                scrollTarget: a,
                index: c,
                indexPrevious: u,
                limit: {
                  reachedMin: l,
                  reachedMax: d,
                  constrain: p
                },
                options: {
                  loop: m
                }
              } = e, v = "forward" === t.direction ? -1 : 1, g = () => O;
              let y = 0,
                b = 0,
                h = o.get(),
                E = 0,
                w = !1;
              const O = {
                direction: () => b,
                duration: () => -1,
                velocity: () => y,
                settled: () => w,
                seek: function() {
                  let e = 0;
                  r.set(o), y = v * t.speed, h += y, o.add(y), s.set(o), e = h - E, b = Math.sign(e), E = h;
                  const g = a.byDistance(0, !1).index;
                  c.get() !== g && (u.set(c.get()), c.set(g), n.emit("select"));
                  const D = "forward" === t.direction ? l(i.get()) : d(i.get());
                  if (!m && D) {
                    w = !0;
                    const e = p(o.get());
                    o.set(e), s.set(o), f()
                  }
                  return O
                },
                useBaseFriction: g,
                useBaseDuration: g,
                useFriction: g,
                useDuration: g
              };
              return O
            }(e), e.animation.start()
          }), s), u = !0
        }

        function f() {
          if (i) return;
          if (!u) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = a, t.clearTimeout(c), c = 0, u = !1
        }

        function p() {
          l || f()
        }

        function m() {
          l || b()
        }

        function v() {
          l = !0, f()
        }

        function g() {
          l = !1, d()
        }

        function y() {
          n.off("settle", y), d()
        }

        function b() {
          n.on("settle", y)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(c, u) {
            n = c;
            const {
              mergeOptions: l,
              optionsAtMedia: y
            } = u, b = l(o, r.globalOptions), h = l(b, e);
            if (t = y(h), n.scrollSnapList().length <= 1) return;
            s = t.startDelay, i = !1, a = n.internalEngine().scrollBody;
            const {
              eventStore: E
            } = n.internalEngine(), w = !!n.internalEngine().options.watchDrag, O = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            w && n.on("pointerDown", p), w && !t.stopOnInteraction && n.on("pointerUp", m), t.stopOnMouseEnter && E.add(O, "mouseenter", v), t.stopOnMouseEnter && !t.stopOnInteraction && E.add(O, "mouseleave", g), t.stopOnFocusIn && n.on("slideFocusStart", f), t.stopOnFocusIn && !t.stopOnInteraction && E.add(n.containerNode(), "focusout", d), t.playOnInit && d()
          },
          destroy: function() {
            n.off("pointerDown", p).off("pointerUp", m).off("slideFocusStart", f).off("settle", y), f(), i = !0, u = !1
          },
          play: function(e) {
            void 0 !== e && (s = e), d()
          },
          stop: function() {
            u && f()
          },
          reset: function() {
            u && (f(), b())
          },
          isPlaying: function() {
            return u
          }
        }
      }
      r.globalOptions = void 0
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var o = n(4572);
      const r = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = r.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const o = r.get(t);
        return o ? (o.forEach((t => t(e))), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              a = r[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, o.clsx)(n, a)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      n.d(t, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    61303: (e, t, n) => {
      n.d(t, {
        bm: () => xe,
        UC: () => we,
        VY: () => De,
        hJ: () => Ee,
        ZL: () => he,
        bL: () => be,
        hE: () => Oe
      });
      var o = n(62229),
        r = n(94118),
        i = n(95362),
        s = n(85426),
        a = n(86126),
        c = n(53054),
        u = n(6523),
        l = n(42295);

      function d(e) {
        const t = f(e),
          n = o.forwardRef(((e, n) => {
            const {
              children: r,
              ...i
            } = e, s = o.Children.toArray(r), a = s.find(m);
            if (a) {
              const e = a.props.children,
                r = s.map((t => t === a ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t));
              return (0, l.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, l.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          }));
        return n.displayName = `${e}.Slot`, n
      }

      function f(e) {
        const t = o.forwardRef(((e, t) => {
          const {
            children: n,
            ...r
          } = e, s = o.isValidElement(n) ? function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(n) : void 0, a = (0, i.s)(s, t);
          if (o.isValidElement(n)) {
            const e = function(e, t) {
              const n = {
                ...t
              };
              for (const o in t) {
                const r = e[o],
                  i = t[o];
                /^on[A-Z]/.test(o) ? r && i ? n[o] = (...e) => {
                  const t = i(...e);
                  return r(...e), t
                } : r && (n[o] = r) : "style" === o ? n[o] = {
                  ...r,
                  ...i
                } : "className" === o && (n[o] = [r, i].filter(Boolean).join(" "))
              }
              return {
                ...e,
                ...n
              }
            }(r, n.props);
            return n.type !== o.Fragment && (e.ref = a), o.cloneElement(n, e)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function m(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      var v, g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = d(`Primitive.${t}`),
            r = o.forwardRef(((e, o) => {
              const {
                asChild: r,
                ...i
              } = e, s = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(s, {
                ...i,
                ref: o
              })
            }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        y = n(76286),
        b = n(94040),
        h = "dismissableLayer.update",
        E = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        w = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: c,
            onInteractOutside: u,
            onDismiss: d,
            ...f
          } = e, p = o.useContext(E), [m, w] = o.useState(null), x = m?.ownerDocument ?? globalThis?.document, [, M] = o.useState({}), S = (0, i.s)(t, (e => w(e))), j = Array.from(p.layers), [P] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), C = j.indexOf(P), N = m ? j.indexOf(m) : -1, T = p.layersWithOutsidePointerEventsDisabled.size > 0, F = N >= C, L = function(e, t = globalThis?.document) {
            const n = (0, y.c)(e),
              r = o.useRef(!1),
              i = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let o = function() {
                      D("dismissableLayer.pointerDownOutside", n, r, {
                        discrete: !0
                      })
                    };
                    const r = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = o, t.addEventListener("click", i.current, {
                      once: !0
                    })) : o()
                  } else t.removeEventListener("click", i.current);
                  r.current = !1
                },
                o = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...p.branches].some((e => e.contains(t)));
            F && !n && (a?.(e), u?.(e), e.defaultPrevented || d?.())
          }), x), I = function(e, t = globalThis?.document) {
            const n = (0, y.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && D("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...p.branches].some((e => e.contains(t))) || (c?.(e), u?.(e), e.defaultPrevented || d?.())
          }), x);
          return (0, b.U)((e => {
            N === p.layers.size - 1 && (s?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }), x), o.useEffect((() => {
            if (m) return n && (0 === p.layersWithOutsidePointerEventsDisabled.size && (v = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), O(), () => {
              n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = v)
            }
          }), [m, x, n, p]), o.useEffect((() => () => {
            m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), O())
          }), [m, p]), o.useEffect((() => {
            const e = () => M({});
            return document.addEventListener(h, e), () => document.removeEventListener(h, e)
          }), []), (0, l.jsx)(g.div, {
            ...f,
            ref: S,
            style: {
              pointerEvents: T ? F ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, r.m)(e.onFocusCapture, I.onFocusCapture),
            onBlurCapture: (0, r.m)(e.onBlurCapture, I.onBlurCapture),
            onPointerDownCapture: (0, r.m)(e.onPointerDownCapture, L.onPointerDownCapture)
          })
        }));

      function O() {
        const e = new CustomEvent(h);
        document.dispatchEvent(e)
      }

      function D(e, t, n, {
        discrete: o
      }) {
        const r = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && r.addEventListener(e, t, {
          once: !0
        }), o ? function(e, t) {
          e && u.flushSync((() => e.dispatchEvent(t)))
        }(r, i) : r.dispatchEvent(i)
      }
      w.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(E),
          r = o.useRef(null),
          s = (0, i.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, l.jsx)(g.div, {
          ...e,
          ref: s
        })
      })).displayName = "DismissableLayerBranch";
      var x = "focusScope.autoFocusOnMount",
        M = "focusScope.autoFocusOnUnmount",
        S = {
          bubbles: !1,
          cancelable: !0
        },
        j = o.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: a,
            ...c
          } = e, [u, d] = o.useState(null), f = (0, y.c)(s), p = (0, y.c)(a), m = o.useRef(null), v = (0, i.s)(t, (e => d(e))), b = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (b.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? m.current = t : T(m.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (b.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || T(m.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && T(u)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return u && o.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }), [r, u, b.paused]), o.useEffect((() => {
            if (u) {
              F.add(b);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(x, S);
                u.addEventListener(x, f), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (T(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(P(u).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && T(u))
              }
              return () => {
                u.removeEventListener(x, f), setTimeout((() => {
                  const t = new CustomEvent(M, S);
                  u.addEventListener(M, p), u.dispatchEvent(t), t.defaultPrevented || T(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(M, p), F.remove(b)
                }), 0)
              }
            }
          }), [u, f, p, b]);
          const h = o.useCallback((e => {
            if (!n && !r) return;
            if (b.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = P(e);
                  return [C(t, e), C(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && T(i, {
                select: !0
              })) : (e.preventDefault(), n && T(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, b.paused]);
          return (0, l.jsx)(g.div, {
            tabIndex: -1,
            ...c,
            ref: v,
            onKeyDown: h
          })
        }));

      function P(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function C(e, t) {
        for (const n of e)
          if (!N(n, {
              upTo: t
            })) return n
      }

      function N(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function T(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      j.displayName = "FocusScope";
      var F = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = L(e, t), e.unshift(t)
          },
          remove(t) {
            e = L(e, t), e[0]?.resume()
          }
        }
      }();

      function L(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
      var I = n(63155),
        R = o.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [i, s] = o.useState(!1);
          (0, I.N)((() => s(!0)), []);
          const a = n || i && globalThis?.document?.body;
          return a ? u.createPortal((0, l.jsx)(g.div, {
            ...r,
            ref: t
          }), a) : null
        }));
      R.displayName = "Portal";
      var _ = n(53146),
        A = n(15234),
        k = n(97359),
        W = n(94926),
        V = "Dialog",
        [B, U] = (0, s.A)(V),
        [X, $] = B(V),
        z = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: s,
            modal: u = !0
          } = e, d = o.useRef(null), f = o.useRef(null), [p, m] = (0, c.i)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: s,
            caller: V
          });
          return (0, l.jsx)(X, {
            scope: t,
            triggerRef: d,
            contentRef: f,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: p,
            onOpenChange: m,
            onOpenToggle: o.useCallback((() => m((e => !e))), [m]),
            modal: u,
            children: n
          })
        };
      z.displayName = V;
      var K = "DialogTrigger";
      o.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...o
        } = e, s = $(K, n), a = (0, i.s)(t, s.triggerRef);
        return (0, l.jsx)(g.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": s.open,
          "aria-controls": s.contentId,
          "data-state": fe(s.open),
          ...o,
          ref: a,
          onClick: (0, r.m)(e.onClick, s.onOpenToggle)
        })
      })).displayName = K;
      var Y = "DialogPortal",
        [q, H] = B(Y, {
          forceMount: void 0
        }),
        Z = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: i
          } = e, s = $(Y, t);
          return (0, l.jsx)(q, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e => (0, l.jsx)(_.C, {
              present: n || s.open,
              children: (0, l.jsx)(R, {
                asChild: !0,
                container: i,
                children: e
              })
            })))
          })
        };
      Z.displayName = Y;
      var G = "DialogOverlay",
        J = o.forwardRef(((e, t) => {
          const n = H(G, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            i = $(G, e.__scopeDialog);
          return i.modal ? (0, l.jsx)(_.C, {
            present: o || i.open,
            children: (0, l.jsx)(ee, {
              ...r,
              ref: t
            })
          }) : null
        }));
      J.displayName = G;
      var Q = d("DialogOverlay.RemoveScroll"),
        ee = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = $(G, n);
          return (0, l.jsx)(k.A, {
            as: Q,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, l.jsx)(g.div, {
              "data-state": fe(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        })),
        te = "DialogContent",
        ne = o.forwardRef(((e, t) => {
          const n = H(te, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            i = $(te, e.__scopeDialog);
          return (0, l.jsx)(_.C, {
            present: o || i.open,
            children: i.modal ? (0, l.jsx)(oe, {
              ...r,
              ref: t
            }) : (0, l.jsx)(re, {
              ...r,
              ref: t
            })
          })
        }));
      ne.displayName = te;
      var oe = o.forwardRef(((e, t) => {
          const n = $(te, e.__scopeDialog),
            s = o.useRef(null),
            a = (0, i.s)(t, n.contentRef, s);
          return o.useEffect((() => {
            const e = s.current;
            if (e) return (0, W.Eq)(e)
          }), []), (0, l.jsx)(ie, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, r.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, r.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: (0, r.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        re = o.forwardRef(((e, t) => {
          const n = $(te, e.__scopeDialog),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, l.jsx)(ie, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const o = t.target,
                s = n.triggerRef.current?.contains(o);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        })),
        ie = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...c
          } = e, u = $(te, n), d = o.useRef(null), f = (0, i.s)(t, d);
          return (0, A.Oh)(), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(j, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, l.jsx)(w, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": fe(u.open),
                ...c,
                ref: f,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(ge, {
                titleId: u.titleId
              }), (0, l.jsx)(ye, {
                contentRef: d,
                descriptionId: u.descriptionId
              })]
            })]
          })
        })),
        se = "DialogTitle",
        ae = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = $(se, n);
          return (0, l.jsx)(g.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }));
      ae.displayName = se;
      var ce = "DialogDescription",
        ue = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = $(ce, n);
          return (0, l.jsx)(g.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }));
      ue.displayName = ce;
      var le = "DialogClose",
        de = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = $(le, n);
          return (0, l.jsx)(g.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.m)(e.onClick, (() => i.onOpenChange(!1)))
          })
        }));

      function fe(e) {
        return e ? "open" : "closed"
      }
      de.displayName = le;
      var pe = "DialogTitleWarning",
        [me, ve] = (0, s.q)(pe, {
          contentName: te,
          titleName: se,
          docsSlug: "dialog"
        }),
        ge = ({
          titleId: e
        }) => {
          const t = ve(pe),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        ye = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ve("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect((() => {
            const o = e.current?.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        be = z,
        he = Z,
        Ee = J,
        we = ne,
        Oe = ae,
        De = ue,
        xe = de
    },
    77053: (e, t, n) => {
      n.d(t, {
        DI: () => o.DI
      });
      var o = n(8141);
      n(57461)
    },
    91633: (e, t, n) => {
      n.d(t, {
        m: () => o.m
      });
      var o = n(25778)
    },
    96369: (e, t, n) => {
      function o(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(Object(n), !0).forEach((function(t) {
            var r, i, s;
            r = e, i = t, s = n[t], (i = o(i)) in r ? Object.defineProperty(r, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[i] = s
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function s(e, t) {
        var n = {};
        for (var o in e) n[o] = t(e[o], o);
        return n
      }
      n.d(t, {
        c: () => c
      });
      var a = (e, t, n) => {
          for (var o of Object.keys(e)) {
            var r;
            if (e[o] !== (null !== (r = t[o]) && void 0 !== r ? r : n[o])) return !1
          }
          return !0
        },
        c = e => {
          var t = t => {
            var n = e.defaultClassName,
              o = i(i({}, e.defaultVariants), t);
            for (var r in o) {
              var s, c = null !== (s = o[r]) && void 0 !== s ? s : e.defaultVariants[r];
              if (null != c) {
                var u = c;
                "boolean" == typeof u && (u = !0 === u ? "true" : "false");
                var l = e.variantClassNames[r][u];
                l && (n += " " + l)
              }
            }
            for (var [d, f] of e.compoundVariants) a(d, o, e.defaultVariants) && (n += " " + f);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return s(e.variantClassNames, (e => s(e, (e => e.split(" ")[0]))))
            }
          }, t
        }
    }
  }
]);