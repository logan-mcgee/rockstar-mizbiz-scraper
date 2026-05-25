try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c53c2e97-608e-4b62-b3b4-f1392f1c0cc0", e._sentryDebugIdIdentifier = "sentry-dbid-c53c2e97-608e-4b62-b3b4-f1392f1c0cc0")
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
  [1586], {
    87704(e, t, n) {
      function r(e) {
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

      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
            var o, i, a;
            o = e, i = t, a = n[t], (i = r(i)) in o ? Object.defineProperty(o, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[i] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function a(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n.d(t, {
        c: () => l
      });
      var s = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        l = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = i(i({}, e.defaultVariants), t);
            for (var o in r) {
              var a, l = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var c = l;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var u = e.variantClassNames[o][c];
                u && (n += " " + u)
              }
            }
            for (var [f, d] of e.compoundVariants) s(f, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return a(e.variantClassNames, e => a(e, e => e.split(" ")[0]))
            }
          }, t
        }
    },
    64010(e, t, n) {
      function r() {
        return r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(this, arguments)
      }

      function o(e, t) {
        if (e.length !== t.length) throw new Error("vectors must be same length");
        return e.map(function(e, n) {
          return e + t[n]
        })
      }

      function i(e) {
        return Math.max.apply(Math, e.map(Math.abs))
      }

      function a(e) {
        return Object.freeze(e), Object.values(e).forEach(function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || a(e)
        }), e
      }
      n.d(t, {
        J: () => d
      });
      var s = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        l = [-1, -1, -1],
        c = a({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const u = function(e) {
        void 0 === e && (e = {});
        var t, n, u, f = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
            }
            return a({
              on: function(n, r) {
                return e[n] = (e[n] || []).concat(r),
                  function() {
                    return t(n, r)
                  }
              },
              off: t,
              dispatch: function(t, n) {
                t in e && e[t].forEach(function(e) {
                  return e(n)
                })
              }
            })
          }(),
          d = f.on,
          p = f.off,
          h = f.dispatch,
          v = c,
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
          m = !1,
          y = function(e) {
            Array.isArray(e) ? e.forEach(function(e) {
              return x(e)
            }) : x(e)
          },
          b = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? v : v = a(r({}, c, v, e))
          },
          w = function(e) {
            var i = r({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: g.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: g.axisVelocity,
              axisMovement: g.axisMovement,
              get axisMovementProjection() {
                return o(i.axisMovement, i.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            h("wheel", r({}, i, {
              previous: n
            })), n = i
          },
          x = function(e) {
            var n, a, c, u, f, d = (f = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? l : t.map(function(e) {
                  return e ? -1 : 1
                });
                return r({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((a = (n = e).deltaX * s[n.deltaMode], c = n.deltaY * s[n.deltaMode], u = (n.deltaZ || 0) * s[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [a, c, u]
              }), v.reverseSign), r({}, f, {
                axisDelta: f.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              p = d.axisDelta,
              h = d.timeStamp,
              y = i(p);
            e.preventDefault && function(e, t) {
              var n = v.preventWheelAction,
                r = t[0],
                o = t[1],
                i = t[2];
              if ("boolean" == typeof n) return n;
              switch (n) {
                case "x":
                  return Math.abs(r) >= e;
                case "y":
                  return Math.abs(o) >= e;
                case "z":
                  return Math.abs(i) >= e;
                default:
                  return !1
              }
            }(y, p) && e.preventDefault(), g.isStarted ? g.isMomentum && y > Math.max(2, 2 * g.lastAbsDelta) && (D(!0), A()) : A(), 0 === y && Object.is && Object.is(e.deltaX, -0) ? m = !0 : (t = e, g.axisMovement = o(g.axisMovement, p), g.lastAbsDelta = y, g.scrollPointsToMerge.push({
              axisDelta: p,
              timeStamp: h
            }), S(), w({
              axisDelta: p,
              isStart: !g.isStartPublished
            }), g.isStartPublished = !0, P())
          },
          S = function() {
            var e;
            2 === g.scrollPointsToMerge.length ? (g.scrollPoints.unshift({
              axisDeltaSum: g.scrollPointsToMerge.map(function(e) {
                return e.axisDelta
              }).reduce(o),
              timeStamp: (e = g.scrollPointsToMerge.map(function(e) {
                return e.timeStamp
              }), e.reduce(function(e, t) {
                return e + t
              }) / e.length)
            }), M(), g.scrollPointsToMerge.length = 0, g.scrollPoints.length = 1, g.isMomentum || T()) : g.isStartPublished || E()
          },
          E = function() {
            var e;
            g.axisVelocity = (e = g.scrollPointsToMerge, e[e.length - 1]).axisDelta.map(function(e) {
              return e / g.willEndTimeout
            })
          },
          M = function() {
            var e = g.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var r = t.timeStamp - n.timeStamp;
              if (!(r <= 0)) {
                var o = t.axisDeltaSum.map(function(e) {
                    return e / r
                  }),
                  i = o.map(function(e, t) {
                    return e / (g.axisVelocity[t] || 1)
                  });
                g.axisVelocity = o, g.accelerationFactors.push(i), _(r)
              }
            }
          },
          _ = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            g.isMomentum || (t = Math.max(100, 2 * t)), g.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          O = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          T = function() {
            if (g.accelerationFactors.length >= 5) {
              if (m && (m = !1, i(g.axisVelocity) >= .2)) return void k();
              var e = g.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(O).length === e.length;
                return t || n
              }) && k(), g.accelerationFactors = e
            }
          },
          k = function() {
            g.isMomentum = !0
          },
          A = function() {
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
            }).isStarted = !0, g.startTime = Date.now(), n = void 0, m = !1
          },
          P = function() {
            clearTimeout(u), u = setTimeout(D, g.willEndTimeout)
          },
          D = function(e) {
            void 0 === e && (e = !1), g.isStarted && (g.isMomentum && e ? w({
              isEnding: !0,
              isMomentumCancel: !0
            }) : w({
              isEnding: !0
            }), g.isMomentum = !1, g.isStarted = !1)
          },
          C = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
              };
            return a({
              observe: function(r) {
                return r.addEventListener("wheel", e, {
                    passive: !1
                  }), t.push(r),
                  function() {
                    return n(r)
                  }
              },
              unobserve: n,
              disconnect: function() {
                t.forEach(n)
              }
            })
          }(y),
          I = C.observe,
          j = C.unobserve,
          N = C.disconnect;
        return b(e), a({
          on: d,
          off: p,
          observe: I,
          unobserve: j,
          disconnect: N,
          feedWheel: y,
          updateOptions: b
        })
      };
      var f = {
        active: !0,
        breakpoints: {},
        wheelDraggingClass: "is-wheel-dragging",
        forceWheelAxis: void 0,
        target: void 0
      };

      function d(e) {
        var t;
        void 0 === e && (e = {});
        var n = function() {};
        return {
          name: "wheelGestures",
          options: e,
          init: function(r, o) {
            var i, a, s = o.mergeOptions,
              l = o.optionsAtMedia,
              c = s(f, d.globalOptions),
              p = s(c, e);
            t = l(p);
            var h = r.internalEngine(),
              v = null != (i = t.target) ? i : r.containerNode().parentNode,
              g = null != (a = t.forceWheelAxis) ? a : h.options.axis,
              m = u({
                preventWheelAction: g,
                reverseSign: [!0, !0, !1]
              });

            function y() {
              M = ("x" === g ? h.containerRect.width : h.containerRect.height) / 2
            }
            var b, w = m.observe(v),
              x = m.on("wheel", function(e) {
                var r = e.axisDelta,
                  o = r[0],
                  i = r[1],
                  a = "x" === g ? o : i,
                  s = "x" === g ? i : o,
                  l = e.isMomentum && e.previous && !e.previous.isMomentum,
                  c = e.isEnding && !e.isMomentum || l;
                Math.abs(a) > Math.abs(s) && !S && !e.isMomentum && !_ && function(e) {
                  try {
                    P(b = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return n()
                  }
                  S = !0, E = 0, document.documentElement.addEventListener("mousemove", k, !0), document.documentElement.addEventListener("mouseup", k, !0), document.documentElement.addEventListener("mousedown", k, !0), t.wheelDraggingClass && v.classList.add(t.wheelDraggingClass)
                }(e), _ && e.isEnding && (_ = !1), S && (function(e) {
                  var t = D(e),
                    n = t.isAtBoundary,
                    r = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((E += Math.abs(r)) > M) return _ = !0, O(e), !0
                  } else E = 0;
                  return !1
                }(e) || (c ? O(e) : P(A("mousemove", e))))
              }),
              S = !1,
              E = 0,
              M = 0,
              _ = !1;

            function O(e) {
              S = !1, P(A("mouseup", e)), T(), t.wheelDraggingClass && v.classList.remove(t.wheelDraggingClass)
            }

            function T() {
              document.documentElement.removeEventListener("mousemove", k, !0), document.documentElement.removeEventListener("mouseup", k, !0), document.documentElement.removeEventListener("mousedown", k, !0)
            }

            function k(e) {
              S && e.isTrusted && e.stopImmediatePropagation()
            }

            function A(e, t) {
              var n, r;
              if (g === h.options.axis) {
                var o = t.axisMovement;
                n = o[0], r = o[1]
              } else {
                var i = t.axisMovement;
                r = i[0], n = i[1]
              }
              if (D(t).isAtBoundary) {
                var a = Math.min(E / M, 1),
                  s = E * (n > 0 ? -1 : 1) * (.25 + .5 * a);
                n += s, r += s
              }
              if (!h.options.skipSnaps && !h.options.dragFree) {
                var l = h.containerRect.width,
                  c = h.containerRect.height;
                n = n < 0 ? Math.max(n, -l) : Math.min(n, l), r = r < 0 ? Math.max(r, -c) : Math.min(r, c)
              }
              return new MouseEvent(e, {
                clientX: b.clientX + n,
                clientY: b.clientY + r,
                screenX: b.screenX + n,
                screenY: b.screenY + r,
                movementX: n,
                movementY: r,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function P(e) {
              r.containerNode().dispatchEvent(e)
            }

            function D(e) {
              var t = e.axisDelta,
                n = t[0],
                o = t[1],
                i = r.scrollProgress(),
                a = "x" === g ? n : o;
              return {
                isAtBoundary: a < 0 && !(i < 1) || a > 0 && !(i > 0),
                primaryAxisDelta: a
              }
            }
            y(), r.on("resize", y), n = function() {
              w(), x(), r.off("resize", y), T()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
      d.globalOptions = void 0
    },
    57978(e, t, n) {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      n.d(t, {
        u: () => cn
      });
      var o, i, a, s, l, c, u, f, d, p, h, v, g, m = function() {
          return o || "undefined" != typeof window && (o = window.gsap) && o.registerPlugin && o
        },
        y = 1,
        b = [],
        w = [],
        x = [],
        S = Date.now,
        E = function(e, t) {
          return t
        },
        M = function(e, t) {
          return ~x.indexOf(e) && x[x.indexOf(e) + 1][t]
        },
        _ = function(e) {
          return !!~p.indexOf(e)
        },
        O = function(e, t, n, r, o) {
          return e.addEventListener(t, n, {
            passive: !1 !== r,
            capture: !!o
          })
        },
        T = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        k = "scrollLeft",
        A = "scrollTop",
        P = function() {
          return h && h.isPressed || w.cache++
        },
        D = function(e, t) {
          var n = function n(r) {
            if (r || 0 === r) {
              y && (a.history.scrollRestoration = "manual");
              var o = h && h.isPressed;
              r = n.v = Math.round(r) || (h && h.iOS ? 1 : 0), e(r), n.cacheID = w.cache, o && E("ss", r)
            } else(t || w.cache !== n.cacheID || E("ref")) && (n.cacheID = w.cache, n.v = e());
            return n.v + n.offset
          };
          return n.offset = 0, e && n
        },
        C = {
          s: k,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: D(function(e) {
            return arguments.length ? a.scrollTo(e, I.sc()) : a.pageXOffset || s[k] || l[k] || c[k] || 0
          })
        },
        I = {
          s: A,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: C,
          sc: D(function(e) {
            return arguments.length ? a.scrollTo(C.sc(), e) : a.pageYOffset || s[A] || l[A] || c[A] || 0
          })
        },
        j = function(e, t) {
          return (t && t._ctx && t._ctx.selector || o.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== o.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        N = function(e, t) {
          var n = t.s,
            r = t.sc;
          _(e) && (e = s.scrollingElement || l);
          var i = w.indexOf(e),
            a = r === I.sc ? 1 : 2;
          !~i && (i = w.push(e) - 1), w[i + a] || O(e, "scroll", P);
          var c = w[i + a],
            u = c || (w[i + a] = D(M(e, n), !0) || (_(e) ? r : D(function(t) {
              return arguments.length ? e[n] = t : e[n]
            })));
          return u.target = e, c || (u.smooth = "smooth" === o.getProperty(e, "scrollBehavior")), u
        },
        R = function(e, t, n) {
          var r = e,
            o = e,
            i = S(),
            a = i,
            s = t || 50,
            l = Math.max(500, 3 * s),
            c = function(e, t) {
              var l = S();
              t || l - i > s ? (o = r, r = e, a = i, i = l) : n ? r += e : r = o + (e - o) / (l - a) * (i - a)
            };
          return {
            update: c,
            reset: function() {
              o = r = n ? 0 : r, a = i = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = o,
                u = S();
              return (e || 0 === e) && e !== r && c(e), i === a || u - a > l ? 0 : (r + (n ? s : -s)) / ((n ? u : i) - t) * 1e3
            }
          }
        },
        z = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        F = function(e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n
        },
        L = function() {
          var e, t, n, r;
          (d = o.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies, n.push.apply(n, w), r.push.apply(r, x), w = n, x = r, E = function(e, n) {
            return t[e](n)
          })
        },
        Y = function(e) {
          return o = e || m(), !i && o && "undefined" != typeof document && document.body && (a = window, s = document, l = s.documentElement, c = s.body, p = [a, s, l, c], o.utils.clamp, g = o.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", u = W.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, v = W.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return y = 0
          }, 500), L(), i = 1), i
        };
      C.op = I, w.cache = 0;
      var W = function() {
        function e(e) {
          this.init(e)
        }
        var t, n;
        return e.prototype.init = function(e) {
          i || Y(o) || console.warn("Please gsap.registerPlugin(Observer)"), d || L();
          var t = e.tolerance,
            n = e.dragMinimum,
            r = e.type,
            p = e.target,
            m = e.lineHeight,
            y = e.debounce,
            w = e.preventDefault,
            x = e.onStop,
            E = e.onStopDelay,
            M = e.ignore,
            k = e.wheelSpeed,
            A = e.event,
            D = e.onDragStart,
            W = e.onDragEnd,
            B = e.onDrag,
            X = e.onPress,
            V = e.onRelease,
            H = e.onRight,
            U = e.onLeft,
            q = e.onUp,
            G = e.onDown,
            J = e.onChangeX,
            $ = e.onChangeY,
            K = e.onChange,
            Z = e.onToggleX,
            Q = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            ne = e.onMove,
            re = e.ignoreCheck,
            oe = e.isNormalizer,
            ie = e.onGestureStart,
            ae = e.onGestureEnd,
            se = e.onWheel,
            le = e.onEnable,
            ce = e.onDisable,
            ue = e.onClick,
            fe = e.scrollSpeed,
            de = e.capture,
            pe = e.allowClicks,
            he = e.lockAxis,
            ve = e.onLockAxis;
          this.target = p = j(p) || l, this.vars = e, M && (M = o.utils.toArray(M)), t = t || 1e-9, n = n || 0, k = k || 1, fe = fe || 1, r = r || "wheel,touch,pointer", y = !1 !== y, m || (m = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
          var ge, me, ye, be, we, xe, Se, Ee = this,
            Me = 0,
            _e = 0,
            Oe = e.passive || !w,
            Te = N(p, C),
            ke = N(p, I),
            Ae = Te(),
            Pe = ke(),
            De = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === v[0],
            Ce = _(p),
            Ie = p.ownerDocument || s,
            je = [0, 0, 0],
            Ne = [0, 0, 0],
            Re = 0,
            ze = function() {
              return Re = S()
            },
            Fe = function(e, t) {
              return (Ee.event = e) && M && ~M.indexOf(e.target) || t && De && "touch" !== e.pointerType || re && re(e, t)
            },
            Le = function() {
              var e = Ee.deltaX = F(je),
                n = Ee.deltaY = F(Ne),
                r = Math.abs(e) >= t,
                o = Math.abs(n) >= t;
              K && (r || o) && K(Ee, e, n, je, Ne), r && (H && Ee.deltaX > 0 && H(Ee), U && Ee.deltaX < 0 && U(Ee), J && J(Ee), Z && Ee.deltaX < 0 != Me < 0 && Z(Ee), Me = Ee.deltaX, je[0] = je[1] = je[2] = 0), o && (G && Ee.deltaY > 0 && G(Ee), q && Ee.deltaY < 0 && q(Ee), $ && $(Ee), Q && Ee.deltaY < 0 != _e < 0 && Q(Ee), _e = Ee.deltaY, Ne[0] = Ne[1] = Ne[2] = 0), (be || ye) && (ne && ne(Ee), ye && (B(Ee), ye = !1), be = !1), xe && !(xe = !1) && ve && ve(Ee), we && (se(Ee), we = !1), ge = 0
            },
            Ye = function(e, t, n) {
              je[n] += e, Ne[n] += t, Ee._vx.update(e), Ee._vy.update(t), y ? ge || (ge = requestAnimationFrame(Le)) : Le()
            },
            We = function(e, t) {
              he && !Se && (Ee.axis = Se = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), "y" !== Se && (je[2] += e, Ee._vx.update(e, !0)), "x" !== Se && (Ne[2] += t, Ee._vy.update(t, !0)), y ? ge || (ge = requestAnimationFrame(Le)) : Le()
            },
            Be = function(e) {
              if (!Fe(e, 1)) {
                var t = (e = z(e, w)).clientX,
                  r = e.clientY,
                  o = t - Ee.x,
                  i = r - Ee.y,
                  a = Ee.isDragging;
                Ee.x = t, Ee.y = r, (a || Math.abs(Ee.startX - t) >= n || Math.abs(Ee.startY - r) >= n) && (B && (ye = !0), a || (Ee.isDragging = !0), We(o, i), a || D && D(Ee))
              }
            },
            Xe = Ee.onPress = function(e) {
              Fe(e, 1) || e && e.button || (Ee.axis = Se = null, me.pause(), Ee.isPressed = !0, e = z(e), Me = _e = 0, Ee.startX = Ee.x = e.clientX, Ee.startY = Ee.y = e.clientY, Ee._vx.reset(), Ee._vy.reset(), O(oe ? p : Ie, v[1], Be, Oe, !0), Ee.deltaX = Ee.deltaY = 0, X && X(Ee))
            },
            Ve = Ee.onRelease = function(e) {
              if (!Fe(e, 1)) {
                T(oe ? p : Ie, v[1], Be, !0);
                var t = !isNaN(Ee.y - Ee.startY),
                  n = Ee.isDragging,
                  r = n && (Math.abs(Ee.x - Ee.startX) > 3 || Math.abs(Ee.y - Ee.startY) > 3),
                  i = z(e);
                !r && t && (Ee._vx.reset(), Ee._vy.reset(), w && pe && o.delayedCall(.08, function() {
                  if (S() - Re > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Ie.createEvent) {
                    var t = Ie.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), Ee.isDragging = Ee.isGesturing = Ee.isPressed = !1, x && n && !oe && me.restart(!0), W && n && W(Ee), V && V(Ee, r)
              }
            },
            He = function(e) {
              return e.touches && e.touches.length > 1 && (Ee.isGesturing = !0) && ie(e, Ee.isDragging)
            },
            Ue = function() {
              return (Ee.isGesturing = !1) || ae(Ee)
            },
            qe = function(e) {
              if (!Fe(e)) {
                var t = Te(),
                  n = ke();
                Ye((t - Ae) * fe, (n - Pe) * fe, 1), Ae = t, Pe = n, x && me.restart(!0)
              }
            },
            Ge = function(e) {
              if (!Fe(e)) {
                e = z(e, w), se && (we = !0);
                var t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? a.innerHeight : 1) * k;
                Ye(e.deltaX * t, e.deltaY * t, 0), x && !oe && me.restart(!0)
              }
            },
            Je = function(e) {
              if (!Fe(e)) {
                var t = e.clientX,
                  n = e.clientY,
                  r = t - Ee.x,
                  o = n - Ee.y;
                Ee.x = t, Ee.y = n, be = !0, x && me.restart(!0), (r || o) && We(r, o)
              }
            },
            $e = function(e) {
              Ee.event = e, ee(Ee)
            },
            Ke = function(e) {
              Ee.event = e, te(Ee)
            },
            Ze = function(e) {
              return Fe(e) || z(e, w) && ue(Ee)
            };
          me = Ee._dc = o.delayedCall(E || .25, function() {
            Ee._vx.reset(), Ee._vy.reset(), me.pause(), x && x(Ee)
          }).pause(), Ee.deltaX = Ee.deltaY = 0, Ee._vx = R(0, 50, !0), Ee._vy = R(0, 50, !0), Ee.scrollX = Te, Ee.scrollY = ke, Ee.isDragging = Ee.isGesturing = Ee.isPressed = !1, g(this), Ee.enable = function(e) {
            return Ee.isEnabled || (O(Ce ? Ie : p, "scroll", P), r.indexOf("scroll") >= 0 && O(Ce ? Ie : p, "scroll", qe, Oe, de), r.indexOf("wheel") >= 0 && O(p, "wheel", Ge, Oe, de), (r.indexOf("touch") >= 0 && u || r.indexOf("pointer") >= 0) && (O(p, v[0], Xe, Oe, de), O(Ie, v[2], Ve), O(Ie, v[3], Ve), pe && O(p, "click", ze, !0, !0), ue && O(p, "click", Ze), ie && O(Ie, "gesturestart", He), ae && O(Ie, "gestureend", Ue), ee && O(p, f + "enter", $e), te && O(p, f + "leave", Ke), ne && O(p, f + "move", Je)), Ee.isEnabled = !0, e && e.type && Xe(e), le && le(Ee)), Ee
          }, Ee.disable = function() {
            Ee.isEnabled && (b.filter(function(e) {
              return e !== Ee && _(e.target)
            }).length || T(Ce ? Ie : p, "scroll", P), Ee.isPressed && (Ee._vx.reset(), Ee._vy.reset(), T(oe ? p : Ie, v[1], Be, !0)), T(Ce ? Ie : p, "scroll", qe, de), T(p, "wheel", Ge, de), T(p, v[0], Xe, de), T(Ie, v[2], Ve), T(Ie, v[3], Ve), T(p, "click", ze, !0), T(p, "click", Ze), T(Ie, "gesturestart", He), T(Ie, "gestureend", Ue), T(p, f + "enter", $e), T(p, f + "leave", Ke), T(p, f + "move", Je), Ee.isEnabled = Ee.isPressed = Ee.isDragging = !1, ce && ce(Ee))
          }, Ee.kill = Ee.revert = function() {
            Ee.disable();
            var e = b.indexOf(Ee);
            e >= 0 && b.splice(e, 1), h === Ee && (h = 0)
          }, b.push(Ee), oe && _(p) && (h = Ee), Ee.enable(A)
        }, t = e, (n = [{
          key: "velocityX",
          get: function() {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function() {
            return this._vy.getVelocity()
          }
        }]) && r(t.prototype, n), e
      }();
      W.version = "3.12.5", W.create = function(e) {
        return new W(e)
      }, W.register = Y, W.getAll = function() {
        return b.slice()
      }, W.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, m() && o.registerPlugin(W);
      var B, X, V, H, U, q, G, J, $, K, Z, Q, ee, te, ne, re, oe, ie, ae, se, le, ce, ue, fe, de, pe, he, ve, ge, me, ye, be, we, xe, Se, Ee, Me, _e, Oe = 1,
        Te = Date.now,
        ke = Te(),
        Ae = 0,
        Pe = 0,
        De = function(e, t, n) {
          var r = He(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Ce = function(e, t) {
          return !t || He(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Ie = function e() {
          return Pe && requestAnimationFrame(e)
        },
        je = function() {
          return te = 1
        },
        Ne = function() {
          return te = 0
        },
        Re = function(e) {
          return e
        },
        ze = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Fe = function() {
          return "undefined" != typeof window
        },
        Le = function() {
          return B || Fe() && (B = window.gsap) && B.registerPlugin && B
        },
        Ye = function(e) {
          return !!~G.indexOf(e)
        },
        We = function(e) {
          return ("Height" === e ? ye : V["inner" + e]) || U["client" + e] || q["client" + e]
        },
        Be = function(e) {
          return M(e, "getBoundingClientRect") || (Ye(e) ? function() {
            return tn.width = V.innerWidth, tn.height = ye, tn
          } : function() {
            return ht(e)
          })
        },
        Xe = function(e, t) {
          var n = t.s,
            r = t.d2,
            o = t.d,
            i = t.a;
          return Math.max(0, (n = "scroll" + r) && (i = M(e, n)) ? i() - Be(e)()[o] : Ye(e) ? (U[n] || q[n]) - We(r) : e[n] - e["offset" + r])
        },
        Ve = function(e, t) {
          for (var n = 0; n < ae.length; n += 3)(!t || ~t.indexOf(ae[n + 1])) && e(ae[n], ae[n + 1], ae[n + 2])
        },
        He = function(e) {
          return "string" == typeof e
        },
        Ue = function(e) {
          return "function" == typeof e
        },
        qe = function(e) {
          return "number" == typeof e
        },
        Ge = function(e) {
          return "object" == typeof e
        },
        Je = function(e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause()
        },
        $e = function(e, t) {
          if (e.enabled) {
            var n = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            n && n.totalTime && (e.callbackAnimation = n)
          }
        },
        Ke = Math.abs,
        Ze = "left",
        Qe = "right",
        et = "bottom",
        tt = "width",
        nt = "height",
        rt = "Right",
        ot = "Left",
        it = "Top",
        at = "Bottom",
        st = "padding",
        lt = "margin",
        ct = "Width",
        ut = "Height",
        ft = "px",
        dt = function(e) {
          return V.getComputedStyle(e)
        },
        pt = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        ht = function(e, t) {
          var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== dt(e)[ne] && B.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            r = e.getBoundingClientRect();
          return n && n.progress(0).kill(), r
        },
        vt = function(e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0
        },
        gt = function(e) {
          var t, n = [],
            r = e.labels,
            o = e.duration();
          for (t in r) n.push(r[t] / o);
          return n
        },
        mt = function(e) {
          var t = B.utils.snap(e),
            n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
              return e - t
            });
          return n ? function(e, r, o) {
            var i;
            if (void 0 === o && (o = .001), !r) return t(e);
            if (r > 0) {
              for (e -= o, i = 0; i < n.length; i++)
                if (n[i] >= e) return n[i];
              return n[i - 1]
            }
            for (i = n.length, e += o; i--;)
              if (n[i] <= e) return n[i];
            return n[0]
          } : function(n, r, o) {
            void 0 === o && (o = .001);
            var i = t(n);
            return !r || Math.abs(i - n) < o || i - n < 0 == r < 0 ? i : t(r < 0 ? n - e : n + e)
          }
        },
        yt = function(e, t, n, r) {
          return n.split(",").forEach(function(n) {
            return e(t, n, r)
          })
        },
        bt = function(e, t, n, r, o) {
          return e.addEventListener(t, n, {
            passive: !r,
            capture: !!o
          })
        },
        wt = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        xt = function(e, t, n) {
          (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n))
        },
        St = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Et = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Mt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        _t = function(e, t) {
          if (He(e)) {
            var n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Mt ? Mt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Ot = function(e, t, n, r, o, i, a, s) {
          var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            d = o.fontWeight,
            p = H.createElement("div"),
            h = Ye(n) || "fixed" === M(n, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            g = h ? q : n,
            m = -1 !== e.indexOf("start"),
            y = m ? l : c,
            b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || s) && h ? "fixed;" : "absolute;"), (v || s || !h) && (b += (r === I ? Qe : et) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Tt(p, 0, r, m), p
        },
        Tt = function(e, t, n, r) {
          var o = {
              display: "block"
            },
            i = n[r ? "os2" : "p2"],
            a = n[r ? "p2" : "os2"];
          e._isFlipped = r, o[n.a + "Percent"] = r ? -100 : 0, o[n.a] = r ? "1px" : 0, o["border" + i + ct] = 1, o["border" + a + ct] = 0, o[n.p] = t + "px", B.set(e, o)
        },
        kt = [],
        At = {},
        Pt = function() {
          return Te() - Ae > 34 && (Se || (Se = requestAnimationFrame(Gt)))
        },
        Dt = function() {
          (!ue || !ue.isPressed || ue.startX > q.clientWidth) && (w.cache++, ue ? Se || (Se = requestAnimationFrame(Gt)) : Gt(), Ae || zt("scrollStart"), Ae = Te())
        },
        Ct = function() {
          pe = V.innerWidth, de = V.innerHeight
        },
        It = function() {
          w.cache++, !ee && !ce && !H.fullscreenElement && !H.webkitFullscreenElement && (!fe || pe !== V.innerWidth || Math.abs(V.innerHeight - de) > .25 * V.innerHeight) && J.restart(!0)
        },
        jt = {},
        Nt = [],
        Rt = function e() {
          return wt(cn, "scrollEnd", e) || Ht(!0)
        },
        zt = function(e) {
          return jt[e] && jt[e].map(function(e) {
            return e()
          }) || Nt
        },
        Ft = [],
        Lt = function(e) {
          for (var t = 0; t < Ft.length; t += 5)(!e || Ft[t + 4] && Ft[t + 4].query === e) && (Ft[t].style.cssText = Ft[t + 1], Ft[t].getBBox && Ft[t].setAttribute("transform", Ft[t + 2] || ""), Ft[t + 3].uncache = 1)
        },
        Yt = function(e, t) {
          var n;
          for (re = 0; re < kt.length; re++) !(n = kt[re]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
          be = !0, t && Lt(t), t || zt("revert")
        },
        Wt = function(e, t) {
          w.cache++, (t || !Ee) && w.forEach(function(e) {
            return Ue(e) && e.cacheID++ && (e.rec = 0)
          }), He(e) && (V.history.scrollRestoration = ge = e)
        },
        Bt = 0,
        Xt = function() {
          q.appendChild(me), ye = !ue && me.offsetHeight || V.innerHeight, q.removeChild(me)
        },
        Vt = function(e) {
          return $(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Ht = function(e, t) {
          if (!Ae || e || be) {
            Xt(), Ee = cn.isRefreshing = !0, w.forEach(function(e) {
              return Ue(e) && ++e.cacheID && (e.rec = e())
            });
            var n = zt("refreshInit");
            se && cn.sort(), t || Yt(), w.forEach(function(e) {
              Ue(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), kt.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, kt.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  n = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh()
              }
            }), we = 1, Vt(!0), kt.forEach(function(e) {
              var t = Xe(e.scroller, e._dir),
                n = "max" === e.vars.end || e._endClamp && e.end > t,
                r = e._startClamp && e.start >= t;
              (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
            }), Vt(!1), we = 0, n.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), w.forEach(function(e) {
              Ue(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Wt(ge, 1), J.pause(), Bt++, Ee = 2, Gt(2), kt.forEach(function(e) {
              return Ue(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), Ee = cn.isRefreshing = !1, zt("refresh")
          } else bt(cn, "scrollEnd", Rt)
        },
        Ut = 0,
        qt = 1,
        Gt = function(e) {
          if (2 === e || !Ee && !be) {
            cn.isUpdating = !0, _e && _e.update(0);
            var t = kt.length,
              n = Te(),
              r = n - ke >= 50,
              o = t && kt[0].scroll();
            if (qt = Ut > o ? -1 : 1, Ee || (Ut = o), r && (Ae && !te && n - Ae > 200 && (Ae = 0, zt("scrollEnd")), Z = ke, ke = n), qt < 0) {
              for (re = t; re-- > 0;) kt[re] && kt[re].update(0, r);
              qt = 1
            } else
              for (re = 0; re < t; re++) kt[re] && kt[re].update(0, r);
            cn.isUpdating = !1
          }
          Se = 0
        },
        Jt = [Ze, "top", et, Qe, lt + at, lt + rt, lt + it, lt + ot, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        $t = Jt.concat([tt, nt, "boxSizing", "max" + ct, "max" + ut, "position", lt, st, st + it, st + rt, st + at, st + ot]),
        Kt = function(e, t, n, r) {
          if (!e._gsap.swappedIn) {
            for (var o, i = Jt.length, a = t.style, s = e.style; i--;) a[o = Jt[i]] = n[o];
            a.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (a.display = "inline-block"), s[et] = s[Qe] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = vt(e, C) + ft, a[nt] = vt(e, I) + ft, a[st] = s[lt] = s.top = s[Ze] = "0", Qt(r), s[tt] = s["max" + ct] = n[tt], s[nt] = s["max" + ut] = n[nt], s[st] = n[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Zt = /([A-Z])/g,
        Qt = function(e) {
          if (e) {
            var t, n, r = e.t.style,
              o = e.length,
              i = 0;
            for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; i < o; i += 2) n = e[i + 1], t = e[i], n ? r[t] = n : r[t] && r.removeProperty(t.replace(Zt, "-$1").toLowerCase())
          }
        },
        en = function(e) {
          for (var t = $t.length, n = e.style, r = [], o = 0; o < t; o++) r.push($t[o], n[$t[o]]);
          return r.t = e, r
        },
        tn = {
          left: 0,
          top: 0
        },
        nn = function(e, t, n, r, o, i, a, s, l, c, u, f, d, p) {
          Ue(e) && (e = e(s)), He(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? _t("0" + e.substr(3), n) : 0));
          var h, v, g, m = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), qe(e)) d && (e = B.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && Tt(a, n, r, !0);
          else {
            Ue(t) && (t = t(s));
            var y, b, w, x, S = (e || "0").split(" ");
            g = j(t, s) || q, (y = ht(g) || {}) && (y.left || y.top) || "none" !== dt(g).display || (x = g.style.display, g.style.display = "block", y = ht(g), x ? g.style.display = x : g.style.removeProperty("display")), b = _t(S[0], y[r.d]), w = _t(S[1] || "0", n), e = y[r.p] - l[r.p] - c + b + o - w, a && Tt(a, w, r, n - w < 20 || a._isStart && w > 20), n -= n - w
          }
          if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
            var E = e + n,
              M = i._isStart;
            h = "scroll" + r.d2, Tt(i, E, r, M && E > 20 || !M && (u ? Math.max(q[h], U[h]) : i.parentNode[h]) <= E + 1), u && (l = ht(a), u && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + ft))
          }
          return d && g && (h = ht(g), d.seek(f), v = ht(g), d._caScrollDist = h[r.p] - v[r.p], e = e / d._caScrollDist * f), d && d.seek(m), d ? e : Math.round(e)
        },
        rn = /(webkit|moz|length|cssText|inset)/i,
        on = function(e, t, n, r) {
          if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === q) {
              for (o in e._stOrig = a.cssText, i = dt(e)) + o || rn.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
              a.top = n, a.left = r
            } else a.cssText = e._stOrig;
            B.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        an = function(e, t, n) {
          var r = t,
            o = r;
          return function(t) {
            var i = Math.round(e());
            return i !== r && i !== o && Math.abs(i - r) > 3 && Math.abs(i - o) > 3 && (t = i, n && n()), o = r, r = t, t
          }
        },
        sn = function(e, t, n) {
          var r = {};
          r[t.p] = "+=" + n, B.set(e, r)
        },
        ln = function(e, t) {
          var n = N(e, t),
            r = "_scroll" + t.p2,
            o = function t(o, i, a, s, l) {
              var c = t.tween,
                u = i.onComplete,
                f = {};
              a = a || n();
              var d = an(n, a, function() {
                c.kill(), t.tween = 0
              });
              return l = s && l || 0, s = s || o - a, c && c.kill(), i[r] = o, i.inherit = !1, i.modifiers = f, f[r] = function() {
                return d(a + s * c.ratio + l * c.ratio * c.ratio)
              }, i.onUpdate = function() {
                w.cache++, t.tween && Gt()
              }, i.onComplete = function() {
                t.tween = 0, u && u.call(c)
              }, c = t.tween = B.to(e, i)
            };
          return e[r] = n, n.wheelHandler = function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
          }, bt(e, "wheel", n.wheelHandler), cn.isTouch && bt(e, "touchmove", n.wheelHandler), o
        },
        cn = function() {
          function e(t, n) {
            X || e.register(B) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ve(this), this.init(t, n)
          }
          return e.prototype.init = function(t, n) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Pe) {
              var r, o, i, a, s, l, c, u, f, d, p, h, v, g, m, y, b, S, E, _, O, T, k, A, P, D, R, z, F, L, Y, W, X, G, J, Q, ne, oe, ie, ae, ce, ue, fe = t = pt(He(t) || qe(t) || t.nodeType ? {
                  trigger: t
                } : t, Et),
                de = fe.onUpdate,
                pe = fe.toggleClass,
                he = fe.id,
                ve = fe.onToggle,
                ge = fe.onRefresh,
                me = fe.scrub,
                ye = fe.trigger,
                be = fe.pin,
                Se = fe.pinSpacing,
                ke = fe.invalidateOnRefresh,
                Ie = fe.anticipatePin,
                je = fe.onScrubComplete,
                Ne = fe.onSnapComplete,
                Fe = fe.once,
                Le = fe.snap,
                Ve = fe.pinReparent,
                Ze = fe.pinSpacer,
                Qe = fe.containerAnimation,
                et = fe.fastScrollEnd,
                yt = fe.preventOverlaps,
                xt = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? C : I,
                Mt = !me && 0 !== me,
                Tt = j(t.scroller || V),
                Pt = B.core.getCache(Tt),
                Ct = Ye(Tt),
                jt = "fixed" === ("pinType" in t ? t.pinType : M(Tt, "pinType") || Ct && "fixed"),
                Nt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                zt = Mt && t.toggleActions.split(" "),
                Ft = "markers" in t ? t.markers : Et.markers,
                Lt = Ct ? 0 : parseFloat(dt(Tt)["border" + xt.p2 + ct]) || 0,
                Yt = this,
                Wt = t.onRefreshInit && function() {
                  return t.onRefreshInit(Yt)
                },
                Xt = function(e, t, n) {
                  var r = n.d,
                    o = n.d2,
                    i = n.a;
                  return (i = M(e, "getBoundingClientRect")) ? function() {
                    return i()[r]
                  } : function() {
                    return (t ? We(o) : e["client" + o]) || 0
                  }
                }(Tt, Ct, xt),
                Vt = function(e, t) {
                  return !t || ~x.indexOf(e) ? Be(e) : function() {
                    return tn
                  }
                }(Tt, Ct),
                Ut = 0,
                Gt = 0,
                Jt = 0,
                $t = N(Tt, xt);
              if (Yt._startClamp = Yt._endClamp = !1, Yt._dir = xt, Ie *= 45, Yt.scroller = Tt, Yt.scroll = Qe ? Qe.time.bind(Qe) : $t, a = $t(), Yt.vars = t, n = n || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (_e = Yt)), Pt.tweenScroll = Pt.tweenScroll || {
                  top: ln(Tt, I),
                  left: ln(Tt, C)
                }, Yt.tweenTo = r = Pt.tweenScroll[xt.p], Yt.scrubDuration = function(e) {
                  (X = qe(e) && e) ? W ? W.duration(e) : W = B.to(n, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: X,
                    paused: !0,
                    onComplete: function() {
                      return je && je(Yt)
                    }
                  }): (W && W.progress(1).kill(), W = 0)
                }, n && (n.vars.lazy = !1, n._initted && !Yt.isReverted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.duration() && n.render(0, !0, !0), Yt.animation = n.pause(), n.scrollTrigger = Yt, Yt.scrubDuration(me), L = 0, he || (he = n.vars.id)), Le && (Ge(Le) && !Le.push || (Le = {
                  snapTo: Le
                }), "scrollBehavior" in q.style && B.set(Ct ? [q, U] : Tt, {
                  scrollBehavior: "auto"
                }), w.forEach(function(e) {
                  return Ue(e) && e.target === (Ct ? H.scrollingElement || U : Tt) && (e.smooth = !1)
                }), i = Ue(Le.snapTo) ? Le.snapTo : "labels" === Le.snapTo ? function(e) {
                  return function(t) {
                    return B.utils.snap(gt(e), t)
                  }
                }(n) : "labelsDirectional" === Le.snapTo ? (ae = n, function(e, t) {
                  return mt(gt(ae))(e, t.direction)
                }) : !1 !== Le.directional ? function(e, t) {
                  return mt(Le.snapTo)(e, Te() - Gt < 500 ? 0 : t.direction)
                } : B.utils.snap(Le.snapTo), G = Le.duration || {
                  min: .1,
                  max: 2
                }, G = Ge(G) ? K(G.min, G.max) : K(G, G), J = B.delayedCall(Le.delay || X / 2 || .1, function() {
                  var e = $t(),
                    t = Te() - Gt < 500,
                    o = r.tween;
                  if (!(t || Math.abs(Yt.getVelocity()) < 10) || o || te || Ut === e) Yt.isActive && Ut !== e && J.restart(!0);
                  else {
                    var a, s, u = (e - l) / g,
                      f = n && !Mt ? n.totalProgress() : u,
                      d = t ? 0 : (f - Y) / (Te() - Z) * 1e3 || 0,
                      p = B.utils.clamp(-u, 1 - u, Ke(d / 2) * d / .185),
                      h = u + (!1 === Le.inertia ? 0 : p),
                      v = Le,
                      m = v.onStart,
                      y = v.onInterrupt,
                      b = v.onComplete;
                    if (a = i(h, Yt), qe(a) || (a = h), s = Math.round(l + a * g), e <= c && e >= l && s !== e) {
                      if (o && !o._initted && o.data <= Ke(s - e)) return;
                      !1 === Le.inertia && (p = a - u), r(s, {
                        duration: G(Ke(.185 * Math.max(Ke(h - f), Ke(a - f)) / d / .05 || 0)),
                        ease: Le.ease || "power3",
                        data: Ke(s - e),
                        onInterrupt: function() {
                          return J.restart(!0) && y && y(Yt)
                        },
                        onComplete: function() {
                          Yt.update(), Ut = $t(), n && (W ? W.resetTo("totalProgress", a, n._tTime / n._tDur) : n.progress(a)), L = Y = n && !Mt ? n.totalProgress() : Yt.progress, Ne && Ne(Yt), b && b(Yt)
                        }
                      }, e, p * g, s - e - p * g), m && m(Yt, r.tween)
                    }
                  }
                }).pause()), he && (At[he] = Yt), (ie = (ye = Yt.trigger = j(ye || !0 !== be && be)) && ye._gsap && ye._gsap.stRevert) && (ie = ie(Yt)), be = !0 === be ? ye : j(be), He(pe) && (pe = {
                  targets: ye,
                  className: pe
                }), be && (!1 === Se || Se === lt || (Se = !(!Se && be.parentNode && be.parentNode.style && "flex" === dt(be.parentNode).display) && st), Yt.pin = be, (o = B.core.getCache(be)).spacer ? m = o.pinState : (Ze && ((Ze = j(Ze)) && !Ze.nodeType && (Ze = Ze.current || Ze.nativeElement), o.spacerIsNative = !!Ze, Ze && (o.spacerState = en(Ze))), o.spacer = S = Ze || H.createElement("div"), S.classList.add("pin-spacer"), he && S.classList.add("pin-spacer-" + he), o.pinState = m = en(be)), !1 !== t.force3D && B.set(be, {
                  force3D: !0
                }), Yt.spacer = S = o.spacer, F = dt(be), A = F[Se + xt.os2], _ = B.getProperty(be), O = B.quickSetter(be, xt.a, ft), Kt(be, S, F), b = en(be)), Ft) {
                h = Ge(Ft) ? pt(Ft, St) : St, d = Ot("scroller-start", he, Tt, xt, h, 0), p = Ot("scroller-end", he, Tt, xt, h, 0, d), E = d["offset" + xt.op.d2];
                var Zt = j(M(Tt, "content") || Tt);
                u = this.markerStart = Ot("start", he, Zt, xt, h, E, 0, Qe), f = this.markerEnd = Ot("end", he, Zt, xt, h, E, 0, Qe), Qe && (oe = B.quickSetter([u, f], xt.a, ft)), jt || x.length && !0 === M(Tt, "fixedMarkers") || (ue = dt(ce = Ct ? q : Tt).position, ce.style.position = "absolute" === ue || "fixed" === ue ? ue : "relative", B.set([d, p], {
                  force3D: !0
                }), D = B.quickSetter(d, xt.a, ft), z = B.quickSetter(p, xt.a, ft))
              }
              if (Qe) {
                var rn = Qe.vars.onUpdate,
                  an = Qe.vars.onUpdateParams;
                Qe.eventCallback("onUpdate", function() {
                  Yt.update(0, 0, 1), rn && rn.apply(Qe, an || [])
                })
              }
              if (Yt.previous = function() {
                  return kt[kt.indexOf(Yt) - 1]
                }, Yt.next = function() {
                  return kt[kt.indexOf(Yt) + 1]
                }, Yt.revert = function(e, t) {
                  if (!t) return Yt.kill(!0);
                  var r = !1 !== e || !Yt.enabled,
                    o = ee;
                  r !== Yt.isReverted && (r && (Q = Math.max($t(), Yt.scroll.rec || 0), Jt = Yt.progress, ne = n && n.progress()), u && [u, f, d, p].forEach(function(e) {
                    return e.style.display = r ? "none" : "block"
                  }), r && (ee = Yt, Yt.update(r)), !be || Ve && Yt.isActive || (r ? function(e, t, n) {
                    Qt(n);
                    var r = e._gsap;
                    if (r.spacerIsNative) Qt(r.spacerState);
                    else if (e._gsap.swappedIn) {
                      var o = t.parentNode;
                      o && (o.insertBefore(e, t), o.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, S, m) : Kt(be, S, dt(be), P)), r || Yt.update(r), ee = o, Yt.isReverted = r)
                }, Yt.refresh = function(o, i, h, w) {
                  if (!ee && Yt.enabled || i)
                    if (be && o && Ae) bt(e, "scrollEnd", Rt);
                    else {
                      !Ee && Wt && Wt(Yt), ee = Yt, r.tween && !h && (r.tween.kill(), r.tween = 0), W && W.pause(), ke && n && n.revert({
                        kill: !1
                      }).invalidate(), Yt.isReverted || Yt.revert(!0, !0), Yt._subPinOffset = !1;
                      var x, E, M, O, A, D, z, F, L, Y, X, V, G, $ = Xt(),
                        K = Vt(),
                        Z = Qe ? Qe.duration() : Xe(Tt, xt),
                        te = g <= .01,
                        re = 0,
                        oe = w || 0,
                        ie = Ge(h) ? h.end : t.end,
                        ae = t.endTrigger || ye,
                        se = Ge(h) ? h.start : t.start || (0 !== t.start && ye ? be ? "0 0" : "0 100%" : 0),
                        ce = Yt.pinnedContainer = t.pinnedContainer && j(t.pinnedContainer, Yt),
                        ue = ye && Math.max(0, kt.indexOf(Yt)) || 0,
                        fe = ue;
                      for (Ft && Ge(h) && (V = B.getProperty(d, xt.p), G = B.getProperty(p, xt.p)); fe--;)(D = kt[fe]).end || D.refresh(0, 1) || (ee = Yt), !(z = D.pin) || z !== ye && z !== be && z !== ce || D.isReverted || (Y || (Y = []), Y.unshift(D), D.revert(!0, !0)), D !== kt[fe] && (ue--, fe--);
                      for (Ue(se) && (se = se(Yt)), se = De(se, "start", Yt), l = nn(se, ye, $, xt, $t(), u, d, Yt, K, Lt, jt, Z, Qe, Yt._startClamp && "_startClamp") || (be ? -.001 : 0), Ue(ie) && (ie = ie(Yt)), He(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (He(se) ? se.split(" ")[0] : "") + ie : (re = _t(ie.substr(2), $), ie = He(se) ? se : (Qe ? B.utils.mapRange(0, Qe.duration(), Qe.scrollTrigger.start, Qe.scrollTrigger.end, l) : l) + re, ae = ye)), ie = De(ie, "end", Yt), c = Math.max(l, nn(ie || (ae ? "100% 0" : Z), ae, $, xt, $t() + re, f, p, Yt, K, Lt, jt, Z, Qe, Yt._endClamp && "_endClamp")) || -.001, re = 0, fe = ue; fe--;)(z = (D = kt[fe]).pin) && D.start - D._pinPush <= l && !Qe && D.end > 0 && (x = D.end - (Yt._startClamp ? Math.max(0, D.start) : D.start), (z === ye && D.start - D._pinPush < l || z === ce) && isNaN(se) && (re += x * (1 - D.progress)), z === be && (oe += x));
                      if (l += re, c += re, Yt._startClamp && (Yt._startClamp += re), Yt._endClamp && !Ee && (Yt._endClamp = c || -.001, c = Math.min(c, Xe(Tt, xt))), g = c - l || (l -= .01) && .001, te && (Jt = B.utils.clamp(0, 1, B.utils.normalize(l, c, Q))), Yt._pinPush = oe, u && re && ((x = {})[xt.a] = "+=" + re, ce && (x[xt.p] = "-=" + $t()), B.set([u, f], x)), !be || we && Yt.end >= Xe(Tt, xt)) {
                        if (ye && $t() && !Qe)
                          for (E = ye.parentNode; E && E !== q;) E._pinOffset && (l -= E._pinOffset, c -= E._pinOffset), E = E.parentNode
                      } else x = dt(be), O = xt === I, M = $t(), T = parseFloat(_(xt.a)) + oe, !Z && c > 1 && (X = {
                        style: X = (Ct ? H.scrollingElement || U : Tt).style,
                        value: X["overflow" + xt.a.toUpperCase()]
                      }, Ct && "scroll" !== dt(q)["overflow" + xt.a.toUpperCase()] && (X.style["overflow" + xt.a.toUpperCase()] = "scroll")), Kt(be, S, x), b = en(be), E = ht(be, !0), F = jt && N(Tt, O ? C : I)(), Se ? ((P = [Se + xt.os2, g + oe + ft]).t = S, (fe = Se === st ? vt(be, xt) + g + oe : 0) && (P.push(xt.d, fe + ft), "auto" !== S.style.flexBasis && (S.style.flexBasis = fe + ft)), Qt(P), ce && kt.forEach(function(e) {
                        e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), jt && $t(Q)) : (fe = vt(be, xt)) && "auto" !== S.style.flexBasis && (S.style.flexBasis = fe + ft), jt && ((A = {
                        top: E.top + (O ? M - l : F) + ft,
                        left: E.left + (O ? F : M - l) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = A["max" + ct] = Math.ceil(E.width) + ft, A[nt] = A["max" + ut] = Math.ceil(E.height) + ft, A[lt] = A[lt + it] = A[lt + rt] = A[lt + at] = A[lt + ot] = "0", A[st] = x[st], A[st + it] = x[st + it], A[st + rt] = x[st + rt], A[st + at] = x[st + at], A[st + ot] = x[st + ot], y = function(e, t, n) {
                        for (var r, o = [], i = e.length, a = n ? 8 : 0; a < i; a += 2) r = e[a], o.push(r, r in t ? t[r] : e[a + 1]);
                        return o.t = e.t, o
                      }(m, A, Ve), Ee && $t(0)), n ? (L = n._initted, le(1), n.render(n.duration(), !0, !0), k = _(xt.a) - T + g + oe, R = Math.abs(g - k) > 1, jt && R && y.splice(y.length - 2, 2), n.render(0, !0, !0), L || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), le(0)) : k = g, X && (X.value ? X.style["overflow" + xt.a.toUpperCase()] = X.value : X.style.removeProperty("overflow-" + xt.a));
                      Y && Y.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), Yt.start = l, Yt.end = c, a = s = Ee ? Q : $t(), Qe || Ee || (a < Q && $t(Q), Yt.scroll.rec = 0), Yt.revert(!1, !0), Gt = Te(), J && (Ut = -1, J.restart(!0)), ee = 0, n && Mt && (n._initted || ne) && n.progress() !== ne && n.progress(ne || 0, !0).render(n.time(), !0, !0), (te || Jt !== Yt.progress || Qe || ke) && (n && !Mt && n.totalProgress(Qe && l < -.001 && !Jt ? B.utils.normalize(l, c, 0) : Jt, !0), Yt.progress = te || (a - l) / g === Jt ? 0 : Jt), be && Se && (S._pinOffset = Math.round(Yt.progress * k)), W && W.invalidate(), isNaN(V) || (V -= B.getProperty(d, xt.p), G -= B.getProperty(p, xt.p), sn(d, xt, V), sn(u, xt, V - (w || 0)), sn(p, xt, G), sn(f, xt, G - (w || 0))), te && !Ee && Yt.update(), !ge || Ee || v || (v = !0, ge(Yt), v = !1)
                    }
                }, Yt.getVelocity = function() {
                  return ($t() - s) / (Te() - Z) * 1e3 || 0
                }, Yt.endAnimation = function() {
                  Je(Yt.callbackAnimation), n && (W ? W.progress(1) : n.paused() ? Mt || Je(n, Yt.direction < 0, 1) : Je(n, n.reversed()))
                }, Yt.labelToScroll = function(e) {
                  return n && n.labels && (l || Yt.refresh() || l) + n.labels[e] / n.duration() * g || 0
                }, Yt.getTrailing = function(e) {
                  var t = kt.indexOf(Yt),
                    n = Yt.direction > 0 ? kt.slice(0, t).reverse() : kt.slice(t + 1);
                  return (He(e) ? n.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : n).filter(function(e) {
                    return Yt.direction > 0 ? e.end <= l : e.start >= c
                  })
                }, Yt.update = function(e, t, o) {
                  if (!Qe || o || e) {
                    var i, u, f, p, h, v, m, w = !0 === Ee ? Q : Yt.scroll(),
                      x = e ? 0 : (w - l) / g,
                      E = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      M = Yt.progress;
                    if (t && (s = a, a = Qe ? $t() : w, Le && (Y = L, L = n && !Mt ? n.totalProgress() : E)), Ie && be && !ee && !Oe && Ae && (!E && l < w + (w - s) / (Te() - Z) * Ie ? E = 1e-4 : 1 === E && c > w + (w - s) / (Te() - Z) * Ie && (E = .9999)), E !== M && Yt.enabled) {
                      if (p = (h = (i = Yt.isActive = !!E && E < 1) != (!!M && M < 1)) || !!E != !!M, Yt.direction = E > M ? 1 : -1, Yt.progress = E, p && !ee && (u = E && !M ? 0 : 1 === E ? 1 : 1 === M ? 2 : 3, Mt && (f = !h && "none" !== zt[u + 1] && zt[u + 1] || zt[u], m = n && ("complete" === f || "reset" === f || f in n))), yt && (h || m) && (m || me || !n) && (Ue(yt) ? yt(Yt) : Yt.getTrailing(yt).forEach(function(e) {
                          return e.endAnimation()
                        })), Mt || (!W || ee || Oe ? n && n.totalProgress(E, !(!ee || !Gt && !e)) : (W._dp._time - W._start !== W._time && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", E, n._tTime / n._tDur) : (W.vars.totalProgress = E, W.invalidate().restart()))), be)
                        if (e && Se && (S.style[Se + xt.os2] = A), jt) {
                          if (p) {
                            if (v = !e && E > M && c + 1 > w && w + 1 >= Xe(Tt, xt), Ve)
                              if (e || !i && !v) on(be, S);
                              else {
                                var _ = ht(be, !0),
                                  P = w - l;
                                on(be, q, _.top + (xt === I ? P : 0) + ft, _.left + (xt === I ? 0 : P) + ft)
                              } Qt(i || v ? y : b), R && E < 1 && i || O(T + (1 !== E || v ? 0 : k))
                          }
                        } else O(ze(T + k * E));
                      Le && !r.tween && !ee && !Oe && J.restart(!0), pe && (h || Fe && E && (E < 1 || !xe)) && $(pe.targets).forEach(function(e) {
                        return e.classList[i || Fe ? "add" : "remove"](pe.className)
                      }), de && !Mt && !e && de(Yt), p && !ee ? (Mt && (m && ("complete" === f ? n.pause().totalProgress(1) : "reset" === f ? n.restart(!0).pause() : "restart" === f ? n.restart(!0) : n[f]()), de && de(Yt)), !h && xe || (ve && h && $e(Yt, ve), Nt[u] && $e(Yt, Nt[u]), Fe && (1 === E ? Yt.kill(!1, 1) : Nt[u] = 0), h || Nt[u = 1 === E ? 1 : 3] && $e(Yt, Nt[u])), et && !i && Math.abs(Yt.getVelocity()) > (qe(et) ? et : 2500) && (Je(Yt.callbackAnimation), W ? W.progress(1) : Je(n, "reverse" === f ? 1 : !E, 1))) : Mt && de && !ee && de(Yt)
                    }
                    if (z) {
                      var C = Qe ? w / Qe.duration() * (Qe._caScrollDist || 0) : w;
                      D(C + (d._isFlipped ? 1 : 0)), z(C)
                    }
                    oe && oe(-w / Qe.duration() * (Qe._caScrollDist || 0))
                  }
                }, Yt.enable = function(t, n) {
                  Yt.enabled || (Yt.enabled = !0, bt(Tt, "resize", It), Ct || bt(Tt, "scroll", Dt), Wt && bt(e, "refreshInit", Wt), !1 !== t && (Yt.progress = Jt = 0, a = s = Ut = $t()), !1 !== n && Yt.refresh())
                }, Yt.getTween = function(e) {
                  return e && r ? r.tween : W
                }, Yt.setPositions = function(e, t, n, r) {
                  if (Qe) {
                    var o = Qe.scrollTrigger,
                      i = Qe.duration(),
                      a = o.end - o.start;
                    e = o.start + a * e / i, t = o.start + a * t / i
                  }
                  Yt.refresh(!1, !1, {
                    start: Ce(e, n && !!Yt._startClamp),
                    end: Ce(t, n && !!Yt._endClamp)
                  }, r), Yt.update()
                }, Yt.adjustPinSpacing = function(e) {
                  if (P && e) {
                    var t = P.indexOf(xt.d) + 1;
                    P[t] = parseFloat(P[t]) + e + ft, P[1] = parseFloat(P[1]) + e + ft, Qt(P)
                  }
                }, Yt.disable = function(t, n) {
                  if (Yt.enabled && (!1 !== t && Yt.revert(!0, !0), Yt.enabled = Yt.isActive = !1, n || W && W.pause(), Q = 0, o && (o.uncache = 1), Wt && wt(e, "refreshInit", Wt), J && (J.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !Ct)) {
                    for (var i = kt.length; i--;)
                      if (kt[i].scroller === Tt && kt[i] !== Yt) return;
                    wt(Tt, "resize", It), Ct || wt(Tt, "scroll", Dt)
                  }
                }, Yt.kill = function(e, r) {
                  Yt.disable(e, r), W && !r && W.kill(), he && delete At[he];
                  var i = kt.indexOf(Yt);
                  i >= 0 && kt.splice(i, 1), i === re && qt > 0 && re--, i = 0, kt.forEach(function(e) {
                    return e.scroller === Yt.scroller && (i = 1)
                  }), i || Ee || (Yt.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({
                    kill: !1
                  }), r || n.kill()), u && [u, f, d, p].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), _e === Yt && (_e = 0), be && (o && (o.uncache = 1), i = 0, kt.forEach(function(e) {
                    return e.pin === be && i++
                  }), i || (o.spacer = 0)), t.onKill && t.onKill(Yt)
                }, kt.push(Yt), Yt.enable(!1, !1), ie && ie(Yt), n && n.add && !g) {
                var cn = Yt.update;
                Yt.update = function() {
                  Yt.update = cn, l || c || Yt.refresh()
                }, B.delayedCall(.01, Yt.update), g = .01, l = c = 0
              } else Yt.refresh();
              be && function() {
                if (Me !== Bt) {
                  var e = Me = Bt;
                  requestAnimationFrame(function() {
                    return e === Bt && Ht(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Re
          }, e.register = function(t) {
            return X || (B = t || Le(), Fe() && window.document && e.enable(), X = Pe), X
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) Et[t] = e[t];
            return Et
          }, e.disable = function(e, t) {
            Pe = 0, kt.forEach(function(n) {
              return n[t ? "kill" : "disable"](e)
            }), wt(V, "wheel", Dt), wt(H, "scroll", Dt), clearInterval(Q), wt(H, "touchcancel", Re), wt(q, "touchstart", Re), yt(wt, H, "pointerdown,touchstart,mousedown", je), yt(wt, H, "pointerup,touchend,mouseup", Ne), J.kill(), Ve(wt);
            for (var n = 0; n < w.length; n += 3) xt(wt, w[n], w[n + 1]), xt(wt, w[n], w[n + 2])
          }, e.enable = function() {
            if (V = window, H = document, U = H.documentElement, q = H.body, B && ($ = B.utils.toArray, K = B.utils.clamp, ve = B.core.context || Re, le = B.core.suppressOverwrites || Re, ge = V.history.scrollRestoration || "auto", Ut = V.pageYOffset, B.core.globals("ScrollTrigger", e), q)) {
              Pe = 1, (me = document.createElement("div")).style.height = "100vh", me.style.position = "absolute", Xt(), Ie(), W.register(B), e.isTouch = W.isTouch, he = W.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === W.isTouch, bt(V, "wheel", Dt), G = [V, H, U, q], B.matchMedia ? (e.matchMedia = function(e) {
                var t, n = B.matchMedia();
                for (t in e) n.add(t, e[t]);
                return n
              }, B.addEventListener("matchMediaInit", function() {
                return Yt()
              }), B.addEventListener("matchMediaRevert", function() {
                return Lt()
              }), B.addEventListener("matchMedia", function() {
                Ht(0, 1), zt("matchMedia")
              }), B.matchMedia("(orientation: portrait)", function() {
                return Ct(), Ct
              })) : console.warn("Requires GSAP 3.11.0 or later"), Ct(), bt(H, "scroll", Dt);
              var t, n, r = q.style,
                o = r.borderTopStyle,
                i = B.core.Animation.prototype;
              for (i.revert || Object.defineProperty(i, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), r.borderTopStyle = "solid", t = ht(q), I.m = Math.round(t.top + I.sc()) || 0, C.m = Math.round(t.left + C.sc()) || 0, o ? r.borderTopStyle = o : r.removeProperty("border-top-style"), Q = setInterval(Pt, 250), B.delayedCall(.5, function() {
                  return Oe = 0
                }), bt(H, "touchcancel", Re), bt(q, "touchstart", Re), yt(bt, H, "pointerdown,touchstart,mousedown", je), yt(bt, H, "pointerup,touchend,mouseup", Ne), ne = B.utils.checkPrefix("transform"), $t.push(ne), X = Te(), J = B.delayedCall(.2, Ht).pause(), ae = [H, "visibilitychange", function() {
                  var e = V.innerWidth,
                    t = V.innerHeight;
                  H.hidden ? (oe = e, ie = t) : oe === e && ie === t || It()
                }, H, "DOMContentLoaded", Ht, V, "load", Ht, V, "resize", It], Ve(bt), kt.forEach(function(e) {
                  return e.enable(0, 1)
                }), n = 0; n < w.length; n += 3) xt(wt, w[n], w[n + 1]), xt(wt, w[n], w[n + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (xe = !!t.limitCallbacks);
            var n = t.syncInterval;
            n && clearInterval(Q) || (Q = n) && setInterval(Pt, n), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ve(wt) || Ve(bt, t.autoRefreshEvents || "none"), ce = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var n = j(e),
              r = w.indexOf(n),
              o = Ye(n);
            ~r && w.splice(r, o ? 6 : 2), t && (o ? x.unshift(V, t, q, t, U, t) : x.unshift(n, t))
          }, e.clearMatchMedia = function(e) {
            kt.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, n) {
            var r = (He(e) ? j(e) : e).getBoundingClientRect(),
              o = r[n ? tt : nt] * t || 0;
            return n ? r.right - o > 0 && r.left + o < V.innerWidth : r.bottom - o > 0 && r.top + o < V.innerHeight
          }, e.positionInViewport = function(e, t, n) {
            He(e) && (e = j(e));
            var r = e.getBoundingClientRect(),
              o = r[n ? tt : nt],
              i = null == t ? o / 2 : t in Mt ? Mt[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return n ? (r.left + i) / V.innerWidth : (r.top + i) / V.innerHeight
          }, e.killAll = function(e) {
            if (kt.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              }), !0 !== e) {
              var t = jt.killAll || [];
              jt = {}, t.forEach(function(e) {
                return e()
              })
            }
          }, e
        }();
      cn.version = "3.12.5", cn.saveStyles = function(e) {
        return e ? $(e).forEach(function(e) {
          if (e && e.style) {
            var t = Ft.indexOf(e);
            t >= 0 && Ft.splice(t, 5), Ft.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), B.core.getCache(e), ve())
          }
        }) : Ft
      }, cn.revert = function(e, t) {
        return Yt(!e, t)
      }, cn.create = function(e, t) {
        return new cn(e, t)
      }, cn.refresh = function(e) {
        return e ? It() : (X || cn.register()) && Ht(!0)
      }, cn.update = function(e) {
        return ++w.cache && Gt(!0 === e ? 2 : 0)
      }, cn.clearScrollMemory = Wt, cn.maxScroll = function(e, t) {
        return Xe(e, t ? C : I)
      }, cn.getScrollFunc = function(e, t) {
        return N(j(e), t ? C : I)
      }, cn.getById = function(e) {
        return At[e]
      }, cn.getAll = function() {
        return kt.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, cn.isScrolling = function() {
        return !!Ae
      }, cn.snapDirectional = mt, cn.addEventListener = function(e, t) {
        var n = jt[e] || (jt[e] = []);
        ~n.indexOf(t) || n.push(t)
      }, cn.removeEventListener = function(e, t) {
        var n = jt[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
      }, cn.batch = function(e, t) {
        var n, r = [],
          o = {},
          i = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var n = [],
              r = [],
              o = B.delayedCall(i, function() {
                t(n, r), n = [], r = []
              }).pause();
            return function(e) {
              n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1)
            }
          };
        for (n in t) o[n] = "on" === n.substr(0, 2) && Ue(t[n]) && "onRefreshInit" !== n ? s(0, t[n]) : t[n];
        return Ue(a) && (a = a(), bt(cn, "refresh", function() {
          return a = t.batchMax()
        })), $(e).forEach(function(e) {
          var t = {};
          for (n in o) t[n] = o[n];
          t.trigger = e, r.push(cn.create(t))
        }), r
      };
      var un, fn = function(e, t, n, r) {
          return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        },
        dn = function e(t, n) {
          !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (W.isTouch ? " pinch-zoom" : "") : "none", t === U && e(q, n)
        },
        pn = {
          auto: 1,
          scroll: 1
        },
        hn = function(e) {
          var t, n = e.event,
            r = e.target,
            o = e.axis,
            i = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = i._gsap || B.core.getCache(i),
            s = Te();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; i && i !== q && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !pn[(t = dt(i)).overflowY] && !pn[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== r && !Ye(i) && (pn[(t = dt(i)).overflowY] || pn[t.overflowX]), a._isScrollT = s, !i.hasAttribute("role") || "dialog" !== i.getAttribute("role") || i.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === o) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        vn = function(e, t, n, r) {
          return W.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: r = r && hn,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
              return n && bt(H, W.eventTypes[0], mn, !1, !0)
            },
            onDisable: function() {
              return wt(H, W.eventTypes[0], mn, !0)
            }
          })
        },
        gn = /(input|label|select|textarea)/i,
        mn = function(e) {
          var t = gn.test(e.target.tagName);
          (t || un) && (e._gsapAllow = !0, un = t)
        };
      cn.sort = function(e) {
        return kt.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, cn.observe = function(e) {
        return new W(e)
      }, cn.normalizeScroll = function(e) {
        if (void 0 === e) return ue;
        if (!0 === e && ue) return ue.enable();
        if (!1 === e) return ue && ue.kill(), void(ue = e);
        var t = e instanceof W ? e : function(e) {
          Ge(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, n, r, o, i, a, s, l, c = e,
            u = c.normalizeScrollX,
            f = c.momentum,
            d = c.allowNestedScroll,
            p = c.onRelease,
            h = j(e.target) || U,
            v = B.core.globals().ScrollSmoother,
            g = v && v.get(),
            m = he && (e.content && j(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
            y = N(h, I),
            b = N(h, C),
            x = 1,
            S = (W.isTouch && V.visualViewport ? V.visualViewport.scale * V.visualViewport.width : V.outerWidth) / V.innerWidth,
            E = 0,
            M = Ue(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            _ = vn(h, e.type, !0, d),
            O = function() {
              return o = !1
            },
            T = Re,
            k = Re,
            A = function() {
              n = Xe(h, I), k = K(he ? 1 : 0, n), u && (T = K(0, Xe(h, C))), r = Bt
            },
            P = function() {
              m._gsap.y = ze(parseFloat(m._gsap.y) + y.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            D = function() {
              A(), i.isActive() && i.vars.scrollY > n && (y() > n ? i.progress(1) && y(n) : i.resetTo("scrollY", n))
            };
          return m && B.set(m, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return he && "touchmove" === e.type && function() {
              if (o) {
                requestAnimationFrame(O);
                var e = ze(t.deltaY / 2),
                  n = k(y.v - e);
                if (m && n !== y.v + y.offset) {
                  y.offset = n - y.v;
                  var r = ze((parseFloat(m && m._gsap.y) || 0) - y.offset);
                  m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", m._gsap.y = r + "px", y.cacheID = w.cache, Gt()
                }
                return !0
              }
              y.offset && P(), o = !0
            }() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            o = !1;
            var e = x;
            x = ze((V.visualViewport && V.visualViewport.scale || 1) / S), i.pause(), e !== x && dn(h, x > 1.01 || !u && "x"), a = b(), s = y(), A(), r = Bt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (y.offset && P(), t) {
              w.cache++;
              var r, o, a = M();
              u && (o = (r = b()) + .05 * a * -e.velocityX / .227, a *= fn(b, r, o, Xe(h, C)), i.vars.scrollX = T(o)), o = (r = y()) + .05 * a * -e.velocityY / .227, a *= fn(y, r, o, Xe(h, I)), i.vars.scrollY = k(o), i.invalidate().duration(a).play(.01), (he && i.vars.scrollY >= n || r >= n - 1) && B.to({}, {
                onUpdate: D,
                duration: a
              })
            } else l.restart(!0);
            p && p(e)
          }, e.onWheel = function() {
            i._ts && i.pause(), Te() - E > 1e3 && (r = 0, E = Te())
          }, e.onChange = function(e, t, n, o, i) {
            if (Bt !== r && A(), t && u && b(T(o[2] === t ? a + (e.startX - e.x) : b() + t - o[1])), n) {
              y.offset && P();
              var l = i[2] === n,
                c = l ? s + e.startY - e.y : y() + n - i[1],
                f = k(c);
              l && c !== f && (s += f - c), y(f)
            }(n || t) && Gt()
          }, e.onEnable = function() {
            dn(h, !u && "x"), cn.addEventListener("refresh", D), bt(V, "resize", D), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), _.enable()
          }, e.onDisable = function() {
            dn(h, !0), wt(V, "resize", D), cn.removeEventListener("refresh", D), _.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new W(e)).iOS = he, he && !y() && y(1), he && B.ticker.add(Re), l = t._dc, i = B.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: an(y, y(), function() {
                return i.pause()
              })
            },
            onUpdate: Gt,
            onComplete: l.vars.onComplete
          }), t
        }(e);
        return ue && ue.target === t.target && ue.kill(), Ye(t.target) && (ue = t), t
      }, cn.core = {
        _getVelocityProp: R,
        _inputObserver: vn,
        _scrollers: w,
        _proxies: x,
        bridge: {
          ss: function() {
            Ae || zt("scrollStart"), Ae = Te()
          },
          ref: function() {
            return ee
          }
        }
      }, Le() && B.registerPlugin(cn)
    },
    20766(e, t, n) {
      n.d(t, {
        m: () => r.m
      });
      var r = n(74144)
    },
    13335(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const r = {
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

      function o(e = {}) {
        let t, n, i, a, s, l = 0,
          c = !1,
          u = !1;

        function f() {
          if (i) return;
          if (c) return;
          n.emit("autoScroll:play");
          const e = n.internalEngine(),
            {
              ownerWindow: r
            } = e;
          l = r.setTimeout(() => {
            e.scrollBody = function(e) {
              const {
                location: r,
                previousLocation: o,
                offsetLocation: i,
                target: a,
                scrollTarget: s,
                index: l,
                indexPrevious: c,
                limit: {
                  reachedMin: u,
                  reachedMax: f,
                  constrain: p
                },
                options: {
                  loop: h
                }
              } = e, v = "forward" === t.direction ? -1 : 1, g = () => S;
              let m = 0,
                y = 0,
                b = r.get(),
                w = 0,
                x = !1;
              const S = {
                direction: () => y,
                duration: () => -1,
                velocity: () => m,
                settled: () => x,
                seek: function() {
                  let e = 0;
                  o.set(r), m = v * t.speed, b += m, r.add(m), a.set(r), e = b - w, y = Math.sign(e), w = b;
                  const g = s.byDistance(0, !1).index;
                  l.get() !== g && (c.set(l.get()), l.set(g), n.emit("select"));
                  const E = "forward" === t.direction ? u(i.get()) : f(i.get());
                  if (!h && E) {
                    x = !0;
                    const e = p(r.get());
                    r.set(e), a.set(r), d()
                  }
                  return S
                },
                useBaseFriction: g,
                useBaseDuration: g,
                useFriction: g,
                useDuration: g
              };
              return S
            }(e), e.animation.start()
          }, a), c = !0
        }

        function d() {
          if (i) return;
          if (!c) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = s, t.clearTimeout(l), l = 0, c = !1
        }

        function p() {
          u || d()
        }

        function h() {
          u || y()
        }

        function v() {
          u = !0, d()
        }

        function g() {
          u = !1, f()
        }

        function m() {
          n.off("settle", m), f()
        }

        function y() {
          n.on("settle", m)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(l, c) {
            n = l;
            const {
              mergeOptions: u,
              optionsAtMedia: m
            } = c, y = u(r, o.globalOptions), b = u(y, e);
            if (t = m(b), n.scrollSnapList().length <= 1) return;
            a = t.startDelay, i = !1, s = n.internalEngine().scrollBody;
            const {
              eventStore: w
            } = n.internalEngine(), x = !!n.internalEngine().options.watchDrag, S = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            x && n.on("pointerDown", p), x && !t.stopOnInteraction && n.on("pointerUp", h), t.stopOnMouseEnter && w.add(S, "mouseenter", v), t.stopOnMouseEnter && !t.stopOnInteraction && w.add(S, "mouseleave", g), t.stopOnFocusIn && n.on("slideFocusStart", d), t.stopOnFocusIn && !t.stopOnInteraction && w.add(n.containerNode(), "focusout", f), t.playOnInit && f()
          },
          destroy: function() {
            n.off("pointerDown", p).off("pointerUp", h).off("slideFocusStart", d).off("settle", m), d(), i = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (a = e), f()
          },
          stop: function() {
            c && d()
          },
          reset: function() {
            c && (d(), y())
          },
          isPlaying: function() {
            return c
          }
        }
      }
      o.globalOptions = void 0
    },
    68507(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const r = {
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

      function o(e = {}) {
        let t, n, i, a, s = null,
          l = 0,
          c = !1,
          u = !1,
          f = !1,
          d = !1;

        function p() {
          i || (g() ? f = !0 : (c || n.emit("autoplay:play"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(l), l = e.setTimeout(x, a[n.selectedScrollSnap()]), s = (new Date).getTime(), n.emit("autoplay:timerset")
          }(), c = !0))
        }

        function h() {
          i || (c && n.emit("autoplay:stop"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(l), l = 0, s = null, n.emit("autoplay:timerstopped")
          }(), c = !1)
        }

        function v() {
          if (g()) return f = c, h();
          f && p()
        }

        function g() {
          const {
            ownerDocument: e
          } = n.internalEngine();
          return "hidden" === e.visibilityState
        }

        function m() {
          u || h()
        }

        function y() {
          u || p()
        }

        function b() {
          u = !0, h()
        }

        function w() {
          u = !1, p()
        }

        function x() {
          const {
            index: e
          } = n.internalEngine(), r = e.clone().add(1).get(), o = n.scrollSnapList().length - 1, i = t.stopOnLastSnap && r === o;
          if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), i) return h();
          p()
        }
        return {
          name: "autoplay",
          options: e,
          init: function(s, l) {
            n = s;
            const {
              mergeOptions: c,
              optionsAtMedia: u
            } = l, f = c(r, o.globalOptions), g = c(f, e);
            if (t = u(g), n.scrollSnapList().length <= 1) return;
            d = t.jump, i = !1, a = function(e, t) {
              const n = e.scrollSnapList();
              return "number" == typeof t ? n.map(() => t) : t(n, e)
            }(n, t.delay);
            const {
              eventStore: x,
              ownerDocument: S
            } = n.internalEngine(), E = !!n.internalEngine().options.watchDrag, M = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            x.add(S, "visibilitychange", v), E && n.on("pointerDown", m), E && !t.stopOnInteraction && n.on("pointerUp", y), t.stopOnMouseEnter && x.add(M, "mouseenter", b), t.stopOnMouseEnter && !t.stopOnInteraction && x.add(M, "mouseleave", w), t.stopOnFocusIn && n.on("slideFocusStart", h), t.stopOnFocusIn && !t.stopOnInteraction && x.add(n.containerNode(), "focusout", p), t.playOnInit && p()
          },
          destroy: function() {
            n.off("pointerDown", m).off("pointerUp", y).off("slideFocusStart", h), h(), i = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (d = e), p()
          },
          stop: function() {
            c && h()
          },
          reset: function() {
            c && p()
          },
          isPlaying: function() {
            return c
          },
          timeUntilNext: function() {
            return s ? a[n.selectedScrollSnap()] - ((new Date).getTime() - s) : null
          }
        }
      }
      o.globalOptions = void 0
    },
    49673(e, t, n) {
      n.d(t, {
        fp: () => v
      });
      var r = n(93082),
        o = n(28401),
        i = n(48894);
      const a = (0, r.createContext)(void 0);

      function s(e) {
        const t = (0, r.useContext)(a);
        return (null == e ? void 0 : e.store) || t || (0, o.zp)()
      }
      const l = e => "function" == typeof(null == e ? void 0 : e.then),
        c = e => {
          e.status || (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
          }, t => {
            e.status = "rejected", e.reason = t
          }))
        },
        u = r.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (c(e), e)
        }),
        f = new WeakMap,
        d = (e, t, n) => {
          const r = (0, i.oJ)(e)[26];
          let o = f.get(t);
          return o || (o = new Promise((i, a) => {
            let s = t;
            const c = e => t => {
                s === e && i(t)
              },
              u = e => t => {
                s === e && a(t)
              },
              d = () => {
                try {
                  const t = n();
                  l(t) ? (f.set(t, o), s = t, t.then(c(t), u(t)), r(e, t, d)) : i(t)
                } catch (e) {
                  a(e)
                }
              };
            t.then(c(t), u(t)), r(e, t, d)
          }), f.set(t, o)), o
        };

      function p(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: o = !r.use
        } = t || {}, i = s(t), [
          [a, f, p], h
        ] = (0, r.useReducer)(t => {
          const n = i.get(e);
          return Object.is(t[0], n) && t[1] === i && t[2] === e ? t : [n, i, e]
        }, void 0, () => [i.get(e), i, e]);
        let v = a;
        if (f === i && p === e || (h(), v = i.get(e)), (0, r.useEffect)(() => {
            const t = i.sub(e, () => {
              if (o) try {
                const t = i.get(e);
                l(t) && c(d(i, t, () => i.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(h, n);
              h()
            });
            return h(), t
          }, [i, e, n, o]), (0, r.useDebugValue)(v), l(v)) {
          const t = d(i, v, () => i.get(e));
          return o && c(t), u(t)
        }
        return v
      }

      function h(e, t) {
        const n = s(t);
        return (0, r.useCallback)((...t) => {
          if (!("write" in e)) throw new Error("not writable atom");
          return n.set(e, ...t)
        }, [n, e])
      }

      function v(e, t) {
        return [p(e, t), h(e, t)]
      }
    },
    28401(e, t, n) {
      n.d(t, {
        eU: () => a,
        zp: () => c
      });
      var r = n(48894);
      let o, i = 0;

      function a(e, t) {
        const n = "atom" + ++i,
          r = {
            toString() {
              return this.debugLabel ? n + ":" + this.debugLabel : n
            }
          };
        return "function" == typeof e ? r.read = e : (r.init = e, r.read = s, r.write = l), t && (r.write = t), r
      }

      function s(e) {
        return e(this)
      }

      function l(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function c() {
        return o || (o = (0, r.ff)(), globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = o), globalThis.__JOTAI_DEFAULT_STORE__ !== o && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")), o
      }
    },
    48894(e, t, n) {
      function r(e) {
        return "init" in e
      }

      function o(e) {
        return !!e.write
      }

      function i(e) {
        return "v" in e || "e" in e
      }

      function a(e) {
        if ("e" in e) throw e.e;
        if (!("v" in e)) throw new Error("[Bug] atom state is not initialized");
        return e.v
      }

      function s(e) {
        return "function" == typeof(null == e ? void 0 : e.then)
      }

      function l(e, t, n) {
        if (!n.p.has(e)) {
          n.p.add(e);
          const r = () => n.p.delete(e);
          t.then(r, r)
        }
      }

      function c(e, t, n) {
        const r = n.get(e),
          o = null == r ? void 0 : r.t,
          i = t.p;
        if (!(null == o ? void 0 : o.size)) return i;
        if (!i.size) return o;
        const a = new Set(o);
        for (const e of i) a.add(e);
        return a
      }
      n.d(t, {
        ff: () => I,
        oJ: () => C
      });
      const u = (e, t, ...n) => t.read(...n),
        f = (e, t, ...n) => t.write(...n),
        d = (e, t) => {
          var n;
          return null == (n = t.INTERNAL_onInit) ? void 0 : n.call(t, e)
        },
        p = (e, t, n) => {
          var r;
          return null == (r = t.onMount) ? void 0 : r.call(t, n)
        },
        h = (e, t) => {
          var n;
          const r = D(e),
            o = r[0],
            i = r[6],
            a = r[9];
          if (!t) throw new Error("Atom is undefined or null");
          let s = o.get(t);
          return s || (s = {
            d: new Map,
            p: new Set,
            n: 0
          }, o.set(t, s), null == (n = i.i) || n.call(i, t), null == a || a(e, t)), s
        },
        v = e => {
          var t;
          const n = D(e),
            r = n[1],
            o = n[3],
            i = n[4],
            a = n[5],
            s = n[6],
            l = n[13];
          if (!(s.f || o.size || i.size || a.size)) return;
          const c = [],
            u = e => {
              try {
                e()
              } catch (e) {
                c.push(e)
              }
            };
          do {
            s.f && u(s.f);
            const n = new Set;
            for (const e of o) {
              const o = null == (t = r.get(e)) ? void 0 : t.l;
              if (o)
                for (const e of o) n.add(e)
            }
            o.clear();
            for (const e of a) n.add(e);
            a.clear();
            for (const e of i) n.add(e);
            i.clear();
            for (const e of n) u(e);
            o.size && l(e)
          } while (o.size || a.size || i.size);
          if (c.length) throw new AggregateError(c)
        },
        g = e => {
          const t = D(e),
            n = t[1],
            r = t[2],
            o = t[3],
            i = t[11],
            a = t[14],
            s = t[17];
          if (!o.size) return;
          const l = [],
            u = [],
            f = new WeakSet,
            d = new WeakSet,
            p = [],
            h = [];
          for (const t of o) p.push(t), h.push(i(e, t));
          for (; p.length;) {
            const t = p.length - 1,
              o = p[t],
              a = h[t];
            if (d.has(o)) p.pop(), h.pop();
            else if (f.has(o)) {
              if (r.get(o) === a.n) l.push(o), u.push(a);
              else if (r.has(o)) throw new Error("[Bug] invalidated atom exists");
              d.add(o), p.pop(), h.pop()
            } else {
              f.add(o);
              for (const t of c(o, a, n)) f.has(t) || (p.push(t), h.push(i(e, t)))
            }
          }
          for (let t = l.length - 1; t >= 0; --t) {
            const n = l[t],
              i = u[t];
            let c = !1;
            for (const e of i.d.keys())
              if (e !== n && o.has(e)) {
                c = !0;
                break
              } c && (r.set(n, i.n), a(e, n), s(e, n)), r.delete(n)
          }
        },
        m = new WeakSet,
        y = (e, t) => {
          var n, c;
          const u = D(e),
            f = u[1],
            d = u[2],
            p = u[3],
            h = u[6],
            v = u[7],
            g = u[11],
            y = u[12],
            b = u[13],
            w = u[14],
            x = u[16],
            S = u[17],
            E = u[20],
            M = u[26],
            _ = u[28],
            O = g(e, t),
            T = _[0];
          if (i(O)) {
            if (f.has(t) && d.get(t) !== O.n || O.m === T) return O.m = T, O;
            let n = !1;
            for (const [t, r] of O.d)
              if (w(e, t).n !== r) {
                n = !0;
                break
              } if (!n) return O.m = T, O
          }
          let k = !0;
          const A = new Set(O.d.keys()),
            P = () => {
              for (const e of A) O.d.delete(e)
            },
            C = () => {
              if (f.has(t)) {
                const n = !p.size;
                S(e, t), n && (b(e), y(e))
              }
            },
            I = n => {
              var o;
              if (n === t) {
                const t = g(e, n);
                if (!i(t)) {
                  if (!r(n)) throw new Error("no atom init");
                  E(e, n, n.init)
                }
                return a(t)
              }
              const c = w(e, n);
              try {
                return a(c)
              } finally {
                A.delete(n), O.d.set(n, c.n), s(O.v) && l(t, O.v, c), f.has(t) && (null == (o = f.get(n)) || o.t.add(t)), k || C()
              }
            };
          let j, N;
          const R = {
              get signal() {
                return j || (j = new AbortController), j.signal
              },
              get setSelf() {
                return console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), o(t) || console.warn("setSelf function cannot be used with read-only atom"), !N && o(t) && (N = (...n) => {
                  if (k && console.warn("setSelf function cannot be called in sync"), !k) try {
                    return x(e, t, ...n)
                  } finally {
                    b(e), y(e)
                  }
                }), N
              }
            },
            z = O.n,
            F = d.get(t) === z;
          try {
            m.delete(e);
            const r = v(e, t, I, R);
            if (m.has(e) && console.warn("Detected store mutation during atom read. This is not supported."), E(e, t, r), s(r)) {
              M(e, r, () => null == j ? void 0 : j.abort());
              const t = () => {
                P(), C()
              };
              r.then(t, t)
            } else P();
            return null == (n = h.r) || n.call(h, t), O.m = T, O
          } catch (e) {
            return delete O.v, O.e = e, ++O.n, O.m = T, O
          } finally {
            k = !1, O.n !== z && F && (d.set(t, O.n), p.add(t), null == (c = h.c) || c.call(h, t))
          }
        },
        b = (e, t) => {
          const n = D(e),
            r = n[1],
            o = n[2],
            i = n[11],
            a = [t];
          for (; a.length;) {
            const t = a.pop(),
              n = i(e, t);
            for (const s of c(t, n, r)) {
              const t = i(e, s);
              o.get(s) !== t.n && (o.set(s, t.n), a.push(s))
            }
          }
        },
        w = (e, t, ...n) => {
          const o = D(e),
            i = o[3],
            s = o[6],
            l = o[8],
            c = o[11],
            u = o[12],
            f = o[13],
            d = o[14],
            p = o[15],
            h = o[16],
            v = o[17],
            g = o[20],
            y = o[28];
          let b = !0;
          const w = t => a(d(e, t)),
            x = (n, ...o) => {
              var a;
              const l = c(e, n);
              try {
                if (n === t) {
                  if (!r(n)) throw new Error("atom not writable");
                  m.add(e);
                  const t = l.n,
                    c = o[0];
                  return g(e, n, c), v(e, n), void(t !== l.n && (++y[0], i.add(n), p(e, n), null == (a = s.c) || a.call(s, n)))
                }
                return h(e, n, ...o)
              } finally {
                b || (f(e), u(e))
              }
            };
          try {
            return l(e, t, w, x, ...n)
          } finally {
            b = !1
          }
        },
        x = (e, t) => {
          var n;
          const r = D(e),
            o = r[1],
            i = r[3],
            a = r[6],
            s = r[11],
            l = r[15],
            c = r[18],
            u = r[19],
            f = s(e, t),
            d = o.get(t);
          if (d && f.d.size > 0) {
            for (const [r, o] of f.d)
              if (!d.d.has(r)) {
                const u = s(e, r);
                c(e, r).t.add(t), d.d.add(r), o !== u.n && (i.add(r), l(e, r), null == (n = a.c) || n.call(a, r))
              } for (const n of d.d)
              if (!f.d.has(n)) {
                d.d.delete(n);
                const r = u(e, n);
                null == r || r.t.delete(t)
              }
          }
        },
        S = (e, t) => {
          var n;
          const r = D(e),
            i = r[1],
            a = r[4],
            s = r[6],
            l = r[10],
            c = r[11],
            u = r[12],
            f = r[13],
            d = r[14],
            p = r[16],
            h = r[18],
            v = c(e, t);
          let g = i.get(t);
          if (!g) {
            d(e, t);
            for (const n of v.d.keys()) h(e, n).t.add(t);
            if (g = {
                l: new Set,
                d: new Set(v.d.keys()),
                t: new Set
              }, i.set(t, g), o(t) && function(e) {
                return !!e.onMount
              }(t)) {
              const n = () => {
                let n = !0;
                const r = (...r) => {
                  try {
                    return p(e, t, ...r)
                  } finally {
                    n || (f(e), u(e))
                  }
                };
                try {
                  const o = l(e, t, r);
                  o && (g.u = () => {
                    n = !0;
                    try {
                      o()
                    } finally {
                      n = !1
                    }
                  })
                } finally {
                  n = !1
                }
              };
              a.add(n)
            }
            null == (n = s.m) || n.call(s, t)
          }
          return g
        },
        E = (e, t) => {
          var n, r;
          const o = D(e),
            i = o[1],
            a = o[5],
            s = o[6],
            l = o[11],
            c = o[19],
            u = l(e, t);
          let f = i.get(t);
          if (!f || f.l.size) return f;
          let d = !1;
          for (const e of f.t)
            if (null == (n = i.get(e)) ? void 0 : n.d.has(t)) {
              d = !0;
              break
            } if (d) return f;
          f.u && a.add(f.u), f = void 0, i.delete(t);
          for (const n of u.d.keys()) {
            const r = c(e, n);
            null == r || r.t.delete(t)
          }
          null == (r = s.u) || r.call(s, t)
        },
        M = (e, t, n) => {
          const r = D(e),
            o = r[11],
            i = r[27],
            a = o(e, t),
            c = "v" in a,
            u = a.v;
          if (s(n))
            for (const r of a.d.keys()) l(t, n, o(e, r));
          a.v = n, delete a.e, c && Object.is(u, a.v) || (++a.n, s(u) && i(e, u))
        },
        _ = (e, t) => a((0, D(e)[14])(e, t)),
        O = (e, t, ...n) => {
          const r = D(e),
            o = r[3],
            i = r[12],
            a = r[13],
            s = r[16],
            l = o.size;
          try {
            return s(e, t, ...n)
          } finally {
            o.size !== l && (a(e), i(e))
          }
        },
        T = (e, t, n) => {
          const r = D(e),
            o = r[12],
            i = r[18],
            a = r[19],
            s = i(e, t).l;
          return s.add(n), o(e), () => {
            s.delete(n), a(e, t), o(e)
          }
        },
        k = (e, t, n) => {
          const r = D(e)[25];
          let o = r.get(t);
          if (!o) {
            o = new Set, r.set(t, o);
            const e = () => r.delete(t);
            t.then(e, e)
          }
          o.add(n)
        },
        A = (e, t) => {
          const n = D(e)[25].get(t);
          null == n || n.forEach(e => e())
        },
        P = new WeakMap,
        D = e => {
          const t = P.get(e);
          if (!t) throw new Error("Store must be created by buildStore to read its building blocks");
          return t
        };

      function C(e) {
        const t = D(e),
          n = t[24];
        return n ? n(t) : t
      }

      function I(...e) {
        const t = {
            get: e => (0, D(t)[21])(t, e),
            set: (e, ...n) => (0, D(t)[22])(t, e, ...n),
            sub: (e, n) => (0, D(t)[23])(t, e, n)
          },
          n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, u, f, d, p, h, v, g, y, b, w, x, S, E, M, _, O, T, void 0, new WeakMap, k, A, [0]].map((t, n) => e[n] || t);
        return P.set(t, Object.freeze(n)), t
      }
    },
    94508(e, t, n) {
      n.d(t, {
        A: () => r
      });
      const r = n(34336).A.Symbol
    },
    86204(e, t, n) {
      n.d(t, {
        A: () => u
      });
      var r = n(94508),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = r.A ? r.A.toStringTag : void 0;
      var l = Object.prototype.toString;
      var c = r.A ? r.A.toStringTag : void 0;
      const u = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? function(e) {
          var t = i.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var r = !0
          } catch (e) {}
          var o = a.call(e);
          return r && (t ? e[s] = n : delete e[s]), o
        }(e) : function(e) {
          return l.call(e)
        }(e)
      }
    },
    79481(e, t, n) {
      n.d(t, {
        A: () => r
      });
      const r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
    },
    17266(e, t, n) {
      n.d(t, {
        A: () => o
      });
      var r = /^(?:0|[1-9]\d*)$/;
      const o = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
    },
    33465(e, t, n) {
      n.d(t, {
        A: () => s
      });
      var r = n(47507),
        o = n(99651),
        i = n(17266),
        a = n(45862);
      const s = function(e, t, n) {
        if (!(0, a.A)(n)) return !1;
        var s = typeof t;
        return !!("number" == s ? (0, o.A)(n) && (0, i.A)(t, n.length) : "string" == s && t in n) && (0, r.A)(n[t], e)
      }
    },
    34336(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var r = n(79481),
        o = "object" == typeof self && self && self.Object === Object && self;
      const i = r.A || o || Function("return this")()
    },
    47507(e, t, n) {
      n.d(t, {
        A: () => r
      });
      const r = function(e, t) {
        return e === t || e != e && t != t
      }
    },
    99651(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var r = n(78709),
        o = n(8933);
      const i = function(e) {
        return null != e && (0, o.A)(e.length) && !(0, r.A)(e)
      }
    },
    78709(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var r = n(86204),
        o = n(45862);
      const i = function(e) {
        if (!(0, o.A)(e)) return !1;
        var t = (0, r.A)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
    },
    8933(e, t, n) {
      n.d(t, {
        A: () => r
      });
      const r = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    45862(e, t, n) {
      n.d(t, {
        A: () => r
      });
      const r = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    96097(e, t, n) {
      n.d(t, {
        A: () => r
      });
      const r = function(e) {
        return null != e && "object" == typeof e
      }
    },
    80617(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var r = n(86204),
        o = n(96097);
      const i = function(e) {
        return "symbol" == typeof e || (0, o.A)(e) && "[object Symbol]" == (0, r.A)(e)
      }
    },
    80135(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var r = Math.ceil,
        o = Math.max;
      var i = n(33465),
        a = n(82486),
        s = 1 / 0;
      const l = function(e) {
          return e ? (e = (0, a.A)(e)) === s || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        c = function(e, t, n) {
          return n && "number" != typeof n && (0, i.A)(e, t, n) && (t = n = void 0), e = l(e), void 0 === t ? (t = e, e = 0) : t = l(t),
            function(e, t, n, i) {
              for (var a = -1, s = o(r((t - e) / (n || 1)), 0), l = Array(s); s--;) l[i ? s : ++a] = e, e += n;
              return l
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : l(n), void 0)
        }
    },
    82486(e, t, n) {
      n.d(t, {
        A: () => d
      });
      var r = /\s/;
      var o = /^\s+/;
      const i = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && r.test(e.charAt(t)););
          return t
        }(e) + 1).replace(o, "") : e
      };
      var a = n(45862),
        s = n(80617),
        l = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        f = parseInt;
      const d = function(e) {
        if ("number" == typeof e) return e;
        if ((0, s.A)(e)) return NaN;
        if ((0, a.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, a.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var n = c.test(e);
        return n || u.test(e) ? f(e.slice(2), n ? 2 : 8) : l.test(e) ? NaN : +e
      }
    }
  }
]);