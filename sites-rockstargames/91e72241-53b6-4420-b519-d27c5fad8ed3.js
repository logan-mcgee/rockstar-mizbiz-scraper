try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "91e72241-53b6-4420-b519-d27c5fad8ed3", e._sentryDebugIdIdentifier = "sentry-dbid-91e72241-53b6-4420-b519-d27c5fad8ed3")
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
  [7023], {
    16630(e, t, n) {
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
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(Object(n), !0).forEach(function(t) {
            var r, i, s;
            r = e, i = t, s = n[t], (i = o(i)) in r ? Object.defineProperty(r, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[i] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function s(e, t) {
        var n = {};
        for (var o in e) n[o] = t(e[o], o);
        return n
      }
      n.d(t, {
        c: () => u
      });
      var a = (e, t, n) => {
          for (var o of Object.keys(e)) {
            var r;
            if (e[o] !== (null !== (r = t[o]) && void 0 !== r ? r : n[o])) return !1
          }
          return !0
        },
        u = e => {
          var t = t => {
            var n = e.defaultClassName,
              o = i(i({}, e.defaultVariants), t);
            for (var r in o) {
              var s, u = null !== (s = o[r]) && void 0 !== s ? s : e.defaultVariants[r];
              if (null != u) {
                var c = u;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var l = e.variantClassNames[r][c];
                l && (n += " " + l)
              }
            }
            for (var [f, d] of e.compoundVariants) a(f, o, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return s(e.variantClassNames, e => s(e, e => e.split(" ")[0]))
            }
          }, t
        }
    },
    64010(e, t, n) {
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
        return e.map(function(e, n) {
          return e + t[n]
        })
      }

      function i(e) {
        return Math.max.apply(Math, e.map(Math.abs))
      }

      function s(e) {
        return Object.freeze(e), Object.values(e).forEach(function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || s(e)
        }), e
      }
      n.d(t, {
        J: () => d
      });
      var a = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        u = [-1, -1, -1],
        c = s({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const l = function(e) {
        void 0 === e && (e = {});
        var t, n, l, f = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
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
                t in e && e[t].forEach(function(e) {
                  return e(n)
                })
              }
            })
          }(),
          d = f.on,
          m = f.off,
          v = f.dispatch,
          p = c,
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
          h = !1,
          b = function(e) {
            Array.isArray(e) ? e.forEach(function(e) {
              return M(e)
            }) : M(e)
          },
          y = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? p : p = s(o({}, c, p, e))
          },
          w = function(e) {
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
                return r(i.axisMovement, i.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            v("wheel", o({}, i, {
              previous: n
            })), n = i
          },
          M = function(e) {
            var n, s, c, l, f, d = (f = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? u : t.map(function(e) {
                  return e ? -1 : 1
                });
                return o({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((s = (n = e).deltaX * a[n.deltaMode], c = n.deltaY * a[n.deltaMode], l = (n.deltaZ || 0) * a[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [s, c, l]
              }), p.reverseSign), o({}, f, {
                axisDelta: f.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              m = d.axisDelta,
              v = d.timeStamp,
              b = i(m);
            e.preventDefault && function(e, t) {
              var n = p.preventWheelAction,
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
            }(b, m) && e.preventDefault(), g.isStarted ? g.isMomentum && b > Math.max(2, 2 * g.lastAbsDelta) && (P(!0), T()) : T(), 0 === b && Object.is && Object.is(e.deltaX, -0) ? h = !0 : (t = e, g.axisMovement = r(g.axisMovement, m), g.lastAbsDelta = b, g.scrollPointsToMerge.push({
              axisDelta: m,
              timeStamp: v
            }), E(), w({
              axisDelta: m,
              isStart: !g.isStartPublished
            }), g.isStartPublished = !0, k())
          },
          E = function() {
            var e;
            2 === g.scrollPointsToMerge.length ? (g.scrollPoints.unshift({
              axisDeltaSum: g.scrollPointsToMerge.map(function(e) {
                return e.axisDelta
              }).reduce(r),
              timeStamp: (e = g.scrollPointsToMerge.map(function(e) {
                return e.timeStamp
              }), e.reduce(function(e, t) {
                return e + t
              }) / e.length)
            }), A(), g.scrollPointsToMerge.length = 0, g.scrollPoints.length = 1, g.isMomentum || D()) : g.isStartPublished || S()
          },
          S = function() {
            var e;
            g.axisVelocity = (e = g.scrollPointsToMerge, e[e.length - 1]).axisDelta.map(function(e) {
              return e / g.willEndTimeout
            })
          },
          A = function() {
            var e = g.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var o = t.timeStamp - n.timeStamp;
              if (!(o <= 0)) {
                var r = t.axisDeltaSum.map(function(e) {
                    return e / o
                  }),
                  i = r.map(function(e, t) {
                    return e / (g.axisVelocity[t] || 1)
                  });
                g.axisVelocity = r, g.accelerationFactors.push(i), O(o)
              }
            }
          },
          O = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            g.isMomentum || (t = Math.max(100, 2 * t)), g.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          x = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          D = function() {
            if (g.accelerationFactors.length >= 5) {
              if (h && (h = !1, i(g.axisVelocity) >= .2)) return void j();
              var e = g.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(x).length === e.length;
                return t || n
              }) && j(), g.accelerationFactors = e
            }
          },
          j = function() {
            g.isMomentum = !0
          },
          T = function() {
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
            }).isStarted = !0, g.startTime = Date.now(), n = void 0, h = !1
          },
          k = function() {
            clearTimeout(l), l = setTimeout(P, g.willEndTimeout)
          },
          P = function(e) {
            void 0 === e && (e = !1), g.isStarted && (g.isMomentum && e ? w({
              isEnding: !0,
              isMomentumCancel: !0
            }) : w({
              isEnding: !0
            }), g.isMomentum = !1, g.isStarted = !1)
          },
          _ = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
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
          z = _.observe,
          F = _.unobserve,
          I = _.disconnect;
        return y(e), s({
          on: d,
          off: m,
          observe: z,
          unobserve: F,
          disconnect: I,
          feedWheel: b,
          updateOptions: y
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
          init: function(o, r) {
            var i, s, a = r.mergeOptions,
              u = r.optionsAtMedia,
              c = a(f, d.globalOptions),
              m = a(c, e);
            t = u(m);
            var v = o.internalEngine(),
              p = null != (i = t.target) ? i : o.containerNode().parentNode,
              g = null != (s = t.forceWheelAxis) ? s : v.options.axis,
              h = l({
                preventWheelAction: g,
                reverseSign: [!0, !0, !1]
              });

            function b() {
              A = ("x" === g ? v.containerRect.width : v.containerRect.height) / 2
            }
            var y, w = h.observe(p),
              M = h.on("wheel", function(e) {
                var o = e.axisDelta,
                  r = o[0],
                  i = o[1],
                  s = "x" === g ? r : i,
                  a = "x" === g ? i : r,
                  u = e.isMomentum && e.previous && !e.previous.isMomentum,
                  c = e.isEnding && !e.isMomentum || u;
                Math.abs(s) > Math.abs(a) && !E && !e.isMomentum && !O && function(e) {
                  try {
                    k(y = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return n()
                  }
                  E = !0, S = 0, document.documentElement.addEventListener("mousemove", j, !0), document.documentElement.addEventListener("mouseup", j, !0), document.documentElement.addEventListener("mousedown", j, !0), t.wheelDraggingClass && p.classList.add(t.wheelDraggingClass)
                }(e), O && e.isEnding && (O = !1), E && (function(e) {
                  var t = P(e),
                    n = t.isAtBoundary,
                    o = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((S += Math.abs(o)) > A) return O = !0, x(e), !0
                  } else S = 0;
                  return !1
                }(e) || (c ? x(e) : k(T("mousemove", e))))
              }),
              E = !1,
              S = 0,
              A = 0,
              O = !1;

            function x(e) {
              E = !1, k(T("mouseup", e)), D(), t.wheelDraggingClass && p.classList.remove(t.wheelDraggingClass)
            }

            function D() {
              document.documentElement.removeEventListener("mousemove", j, !0), document.documentElement.removeEventListener("mouseup", j, !0), document.documentElement.removeEventListener("mousedown", j, !0)
            }

            function j(e) {
              E && e.isTrusted && e.stopImmediatePropagation()
            }

            function T(e, t) {
              var n, o;
              if (g === v.options.axis) {
                var r = t.axisMovement;
                n = r[0], o = r[1]
              } else {
                var i = t.axisMovement;
                o = i[0], n = i[1]
              }
              if (P(t).isAtBoundary) {
                var s = Math.min(S / A, 1),
                  a = S * (n > 0 ? -1 : 1) * (.25 + .5 * s);
                n += a, o += a
              }
              if (!v.options.skipSnaps && !v.options.dragFree) {
                var u = v.containerRect.width,
                  c = v.containerRect.height;
                n = n < 0 ? Math.max(n, -u) : Math.min(n, u), o = o < 0 ? Math.max(o, -c) : Math.min(o, c)
              }
              return new MouseEvent(e, {
                clientX: y.clientX + n,
                clientY: y.clientY + o,
                screenX: y.screenX + n,
                screenY: y.screenY + o,
                movementX: n,
                movementY: o,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function k(e) {
              o.containerNode().dispatchEvent(e)
            }

            function P(e) {
              var t = e.axisDelta,
                n = t[0],
                r = t[1],
                i = o.scrollProgress(),
                s = "x" === g ? n : r;
              return {
                isAtBoundary: s < 0 && !(i < 1) || s > 0 && !(i > 0),
                primaryAxisDelta: s
              }
            }
            b(), o.on("resize", b), n = function() {
              w(), M(), o.off("resize", b), D()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
      d.globalOptions = void 0
    },
    85624(e, t, n) {
      n.d(t, {
        m: () => o.m
      });
      var o = n(18552)
    },
    13335(e, t, n) {
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
        let t, n, i, s, a, u = 0,
          c = !1,
          l = !1;

        function f() {
          if (i) return;
          if (c) return;
          n.emit("autoScroll:play");
          const e = n.internalEngine(),
            {
              ownerWindow: o
            } = e;
          u = o.setTimeout(() => {
            e.scrollBody = function(e) {
              const {
                location: o,
                previousLocation: r,
                offsetLocation: i,
                target: s,
                scrollTarget: a,
                index: u,
                indexPrevious: c,
                limit: {
                  reachedMin: l,
                  reachedMax: f,
                  constrain: m
                },
                options: {
                  loop: v
                }
              } = e, p = "forward" === t.direction ? -1 : 1, g = () => E;
              let h = 0,
                b = 0,
                y = o.get(),
                w = 0,
                M = !1;
              const E = {
                direction: () => b,
                duration: () => -1,
                velocity: () => h,
                settled: () => M,
                seek: function() {
                  let e = 0;
                  r.set(o), h = p * t.speed, y += h, o.add(h), s.set(o), e = y - w, b = Math.sign(e), w = y;
                  const g = a.byDistance(0, !1).index;
                  u.get() !== g && (c.set(u.get()), u.set(g), n.emit("select"));
                  const S = "forward" === t.direction ? l(i.get()) : f(i.get());
                  if (!v && S) {
                    M = !0;
                    const e = m(o.get());
                    o.set(e), s.set(o), d()
                  }
                  return E
                },
                useBaseFriction: g,
                useBaseDuration: g,
                useFriction: g,
                useDuration: g
              };
              return E
            }(e), e.animation.start()
          }, s), c = !0
        }

        function d() {
          if (i) return;
          if (!c) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = a, t.clearTimeout(u), u = 0, c = !1
        }

        function m() {
          l || d()
        }

        function v() {
          l || b()
        }

        function p() {
          l = !0, d()
        }

        function g() {
          l = !1, f()
        }

        function h() {
          n.off("settle", h), f()
        }

        function b() {
          n.on("settle", h)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(u, c) {
            n = u;
            const {
              mergeOptions: l,
              optionsAtMedia: h
            } = c, b = l(o, r.globalOptions), y = l(b, e);
            if (t = h(y), n.scrollSnapList().length <= 1) return;
            s = t.startDelay, i = !1, a = n.internalEngine().scrollBody;
            const {
              eventStore: w
            } = n.internalEngine(), M = !!n.internalEngine().options.watchDrag, E = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            M && n.on("pointerDown", m), M && !t.stopOnInteraction && n.on("pointerUp", v), t.stopOnMouseEnter && w.add(E, "mouseenter", p), t.stopOnMouseEnter && !t.stopOnInteraction && w.add(E, "mouseleave", g), t.stopOnFocusIn && n.on("slideFocusStart", d), t.stopOnFocusIn && !t.stopOnInteraction && w.add(n.containerNode(), "focusout", f), t.playOnInit && f()
          },
          destroy: function() {
            n.off("pointerDown", m).off("pointerUp", v).off("slideFocusStart", d).off("settle", h), d(), i = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (s = e), f()
          },
          stop: function() {
            c && d()
          },
          reset: function() {
            c && (d(), b())
          },
          isPlaying: function() {
            return c
          }
        }
      }
      r.globalOptions = void 0
    },
    49673(e, t, n) {
      n.d(t, {
        fp: () => p
      });
      var o = n(93082),
        r = n(28401),
        i = n(48894);
      const s = (0, o.createContext)(void 0);

      function a(e) {
        const t = (0, o.useContext)(s);
        return (null == e ? void 0 : e.store) || t || (0, r.zp)()
      }
      const u = e => "function" == typeof(null == e ? void 0 : e.then),
        c = e => {
          e.status || (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
          }, t => {
            e.status = "rejected", e.reason = t
          }))
        },
        l = o.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (c(e), e)
        }),
        f = new WeakMap,
        d = (e, t, n) => {
          const o = (0, i.oJ)(e)[26];
          let r = f.get(t);
          return r || (r = new Promise((i, s) => {
            let a = t;
            const c = e => t => {
                a === e && i(t)
              },
              l = e => t => {
                a === e && s(t)
              },
              d = () => {
                try {
                  const t = n();
                  u(t) ? (f.set(t, r), a = t, t.then(c(t), l(t)), o(e, t, d)) : i(t)
                } catch (e) {
                  s(e)
                }
              };
            t.then(c(t), l(t)), o(e, t, d)
          }), f.set(t, r)), r
        };

      function m(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: r = !o.use
        } = t || {}, i = a(t), [
          [s, f, m], v
        ] = (0, o.useReducer)(t => {
          const n = i.get(e);
          return Object.is(t[0], n) && t[1] === i && t[2] === e ? t : [n, i, e]
        }, void 0, () => [i.get(e), i, e]);
        let p = s;
        if (f === i && m === e || (v(), p = i.get(e)), (0, o.useEffect)(() => {
            const t = i.sub(e, () => {
              if (r) try {
                const t = i.get(e);
                u(t) && c(d(i, t, () => i.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(v, n);
              v()
            });
            return v(), t
          }, [i, e, n, r]), (0, o.useDebugValue)(p), u(p)) {
          const t = d(i, p, () => i.get(e));
          return r && c(t), l(t)
        }
        return p
      }

      function v(e, t) {
        const n = a(t);
        return (0, o.useCallback)((...t) => {
          if (!("write" in e)) throw new Error("not writable atom");
          return n.set(e, ...t)
        }, [n, e])
      }

      function p(e, t) {
        return [m(e, t), v(e, t)]
      }
    },
    28401(e, t, n) {
      n.d(t, {
        eU: () => s,
        zp: () => c
      });
      var o = n(48894);
      let r, i = 0;

      function s(e, t) {
        const n = "atom" + ++i,
          o = {
            toString() {
              return this.debugLabel ? n + ":" + this.debugLabel : n
            }
          };
        return "function" == typeof e ? o.read = e : (o.init = e, o.read = a, o.write = u), t && (o.write = t), o
      }

      function a(e) {
        return e(this)
      }

      function u(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function c() {
        return r || (r = (0, o.ff)(), globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = r), globalThis.__JOTAI_DEFAULT_STORE__ !== r && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")), r
      }
    },
    48894(e, t, n) {
      function o(e) {
        return "init" in e
      }

      function r(e) {
        return !!e.write
      }

      function i(e) {
        return "v" in e || "e" in e
      }

      function s(e) {
        if ("e" in e) throw e.e;
        if (!("v" in e)) throw new Error("[Bug] atom state is not initialized");
        return e.v
      }

      function a(e) {
        return "function" == typeof(null == e ? void 0 : e.then)
      }

      function u(e, t, n) {
        if (!n.p.has(e)) {
          n.p.add(e);
          const o = () => n.p.delete(e);
          t.then(o, o)
        }
      }

      function c(e, t, n) {
        const o = n.get(e),
          r = null == o ? void 0 : o.t,
          i = t.p;
        if (!(null == r ? void 0 : r.size)) return i;
        if (!i.size) return r;
        const s = new Set(r);
        for (const e of i) s.add(e);
        return s
      }
      n.d(t, {
        ff: () => z,
        oJ: () => _
      });
      const l = (e, t, ...n) => t.read(...n),
        f = (e, t, ...n) => t.write(...n),
        d = (e, t) => {
          var n;
          return null == (n = t.INTERNAL_onInit) ? void 0 : n.call(t, e)
        },
        m = (e, t, n) => {
          var o;
          return null == (o = t.onMount) ? void 0 : o.call(t, n)
        },
        v = (e, t) => {
          var n;
          const o = P(e),
            r = o[0],
            i = o[6],
            s = o[9];
          if (!t) throw new Error("Atom is undefined or null");
          let a = r.get(t);
          return a || (a = {
            d: new Map,
            p: new Set,
            n: 0
          }, r.set(t, a), null == (n = i.i) || n.call(i, t), null == s || s(e, t)), a
        },
        p = e => {
          var t;
          const n = P(e),
            o = n[1],
            r = n[3],
            i = n[4],
            s = n[5],
            a = n[6],
            u = n[13];
          if (!(a.f || r.size || i.size || s.size)) return;
          const c = [],
            l = e => {
              try {
                e()
              } catch (e) {
                c.push(e)
              }
            };
          do {
            a.f && l(a.f);
            const n = new Set;
            for (const e of r) {
              const r = null == (t = o.get(e)) ? void 0 : t.l;
              if (r)
                for (const e of r) n.add(e)
            }
            r.clear();
            for (const e of s) n.add(e);
            s.clear();
            for (const e of i) n.add(e);
            i.clear();
            for (const e of n) l(e);
            r.size && u(e)
          } while (r.size || s.size || i.size);
          if (c.length) throw new AggregateError(c)
        },
        g = e => {
          const t = P(e),
            n = t[1],
            o = t[2],
            r = t[3],
            i = t[11],
            s = t[14],
            a = t[17];
          if (!r.size) return;
          const u = [],
            l = [],
            f = new WeakSet,
            d = new WeakSet,
            m = [],
            v = [];
          for (const t of r) m.push(t), v.push(i(e, t));
          for (; m.length;) {
            const t = m.length - 1,
              r = m[t],
              s = v[t];
            if (d.has(r)) m.pop(), v.pop();
            else if (f.has(r)) {
              if (o.get(r) === s.n) u.push(r), l.push(s);
              else if (o.has(r)) throw new Error("[Bug] invalidated atom exists");
              d.add(r), m.pop(), v.pop()
            } else {
              f.add(r);
              for (const t of c(r, s, n)) f.has(t) || (m.push(t), v.push(i(e, t)))
            }
          }
          for (let t = u.length - 1; t >= 0; --t) {
            const n = u[t],
              i = l[t];
            let c = !1;
            for (const e of i.d.keys())
              if (e !== n && r.has(e)) {
                c = !0;
                break
              } c && (o.set(n, i.n), s(e, n), a(e, n)), o.delete(n)
          }
        },
        h = new WeakSet,
        b = (e, t) => {
          var n, c;
          const l = P(e),
            f = l[1],
            d = l[2],
            m = l[3],
            v = l[6],
            p = l[7],
            g = l[11],
            b = l[12],
            y = l[13],
            w = l[14],
            M = l[16],
            E = l[17],
            S = l[20],
            A = l[26],
            O = l[28],
            x = g(e, t),
            D = O[0];
          if (i(x)) {
            if (f.has(t) && d.get(t) !== x.n || x.m === D) return x.m = D, x;
            let n = !1;
            for (const [t, o] of x.d)
              if (w(e, t).n !== o) {
                n = !0;
                break
              } if (!n) return x.m = D, x
          }
          let j = !0;
          const T = new Set(x.d.keys()),
            k = () => {
              for (const e of T) x.d.delete(e)
            },
            _ = () => {
              if (f.has(t)) {
                const n = !m.size;
                E(e, t), n && (y(e), b(e))
              }
            },
            z = n => {
              var r;
              if (n === t) {
                const t = g(e, n);
                if (!i(t)) {
                  if (!o(n)) throw new Error("no atom init");
                  S(e, n, n.init)
                }
                return s(t)
              }
              const c = w(e, n);
              try {
                return s(c)
              } finally {
                T.delete(n), x.d.set(n, c.n), a(x.v) && u(t, x.v, c), f.has(t) && (null == (r = f.get(n)) || r.t.add(t)), j || _()
              }
            };
          let F, I;
          const N = {
              get signal() {
                return F || (F = new AbortController), F.signal
              },
              get setSelf() {
                return console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), r(t) || console.warn("setSelf function cannot be used with read-only atom"), !I && r(t) && (I = (...n) => {
                  if (j && console.warn("setSelf function cannot be called in sync"), !j) try {
                    return M(e, t, ...n)
                  } finally {
                    y(e), b(e)
                  }
                }), I
              }
            },
            C = x.n,
            L = d.get(t) === C;
          try {
            h.delete(e);
            const o = p(e, t, z, N);
            if (h.has(e) && console.warn("Detected store mutation during atom read. This is not supported."), S(e, t, o), a(o)) {
              A(e, o, () => null == F ? void 0 : F.abort());
              const t = () => {
                k(), _()
              };
              o.then(t, t)
            } else k();
            return null == (n = v.r) || n.call(v, t), x.m = D, x
          } catch (e) {
            return delete x.v, x.e = e, ++x.n, x.m = D, x
          } finally {
            j = !1, x.n !== C && L && (d.set(t, x.n), m.add(t), null == (c = v.c) || c.call(v, t))
          }
        },
        y = (e, t) => {
          const n = P(e),
            o = n[1],
            r = n[2],
            i = n[11],
            s = [t];
          for (; s.length;) {
            const t = s.pop(),
              n = i(e, t);
            for (const a of c(t, n, o)) {
              const t = i(e, a);
              r.get(a) !== t.n && (r.set(a, t.n), s.push(a))
            }
          }
        },
        w = (e, t, ...n) => {
          const r = P(e),
            i = r[3],
            a = r[6],
            u = r[8],
            c = r[11],
            l = r[12],
            f = r[13],
            d = r[14],
            m = r[15],
            v = r[16],
            p = r[17],
            g = r[20],
            b = r[28];
          let y = !0;
          const w = t => s(d(e, t)),
            M = (n, ...r) => {
              var s;
              const u = c(e, n);
              try {
                if (n === t) {
                  if (!o(n)) throw new Error("atom not writable");
                  h.add(e);
                  const t = u.n,
                    c = r[0];
                  return g(e, n, c), p(e, n), void(t !== u.n && (++b[0], i.add(n), m(e, n), null == (s = a.c) || s.call(a, n)))
                }
                return v(e, n, ...r)
              } finally {
                y || (f(e), l(e))
              }
            };
          try {
            return u(e, t, w, M, ...n)
          } finally {
            y = !1
          }
        },
        M = (e, t) => {
          var n;
          const o = P(e),
            r = o[1],
            i = o[3],
            s = o[6],
            a = o[11],
            u = o[15],
            c = o[18],
            l = o[19],
            f = a(e, t),
            d = r.get(t);
          if (d && f.d.size > 0) {
            for (const [o, r] of f.d)
              if (!d.d.has(o)) {
                const l = a(e, o);
                c(e, o).t.add(t), d.d.add(o), r !== l.n && (i.add(o), u(e, o), null == (n = s.c) || n.call(s, o))
              } for (const n of d.d)
              if (!f.d.has(n)) {
                d.d.delete(n);
                const o = l(e, n);
                null == o || o.t.delete(t)
              }
          }
        },
        E = (e, t) => {
          var n;
          const o = P(e),
            i = o[1],
            s = o[4],
            a = o[6],
            u = o[10],
            c = o[11],
            l = o[12],
            f = o[13],
            d = o[14],
            m = o[16],
            v = o[18],
            p = c(e, t);
          let g = i.get(t);
          if (!g) {
            d(e, t);
            for (const n of p.d.keys()) v(e, n).t.add(t);
            if (g = {
                l: new Set,
                d: new Set(p.d.keys()),
                t: new Set
              }, i.set(t, g), r(t) && function(e) {
                return !!e.onMount
              }(t)) {
              const n = () => {
                let n = !0;
                const o = (...o) => {
                  try {
                    return m(e, t, ...o)
                  } finally {
                    n || (f(e), l(e))
                  }
                };
                try {
                  const r = u(e, t, o);
                  r && (g.u = () => {
                    n = !0;
                    try {
                      r()
                    } finally {
                      n = !1
                    }
                  })
                } finally {
                  n = !1
                }
              };
              s.add(n)
            }
            null == (n = a.m) || n.call(a, t)
          }
          return g
        },
        S = (e, t) => {
          var n, o;
          const r = P(e),
            i = r[1],
            s = r[5],
            a = r[6],
            u = r[11],
            c = r[19],
            l = u(e, t);
          let f = i.get(t);
          if (!f || f.l.size) return f;
          let d = !1;
          for (const e of f.t)
            if (null == (n = i.get(e)) ? void 0 : n.d.has(t)) {
              d = !0;
              break
            } if (d) return f;
          f.u && s.add(f.u), f = void 0, i.delete(t);
          for (const n of l.d.keys()) {
            const o = c(e, n);
            null == o || o.t.delete(t)
          }
          null == (o = a.u) || o.call(a, t)
        },
        A = (e, t, n) => {
          const o = P(e),
            r = o[11],
            i = o[27],
            s = r(e, t),
            c = "v" in s,
            l = s.v;
          if (a(n))
            for (const o of s.d.keys()) u(t, n, r(e, o));
          s.v = n, delete s.e, c && Object.is(l, s.v) || (++s.n, a(l) && i(e, l))
        },
        O = (e, t) => s((0, P(e)[14])(e, t)),
        x = (e, t, ...n) => {
          const o = P(e),
            r = o[3],
            i = o[12],
            s = o[13],
            a = o[16],
            u = r.size;
          try {
            return a(e, t, ...n)
          } finally {
            r.size !== u && (s(e), i(e))
          }
        },
        D = (e, t, n) => {
          const o = P(e),
            r = o[12],
            i = o[18],
            s = o[19],
            a = i(e, t).l;
          return a.add(n), r(e), () => {
            a.delete(n), s(e, t), r(e)
          }
        },
        j = (e, t, n) => {
          const o = P(e)[25];
          let r = o.get(t);
          if (!r) {
            r = new Set, o.set(t, r);
            const e = () => o.delete(t);
            t.then(e, e)
          }
          r.add(n)
        },
        T = (e, t) => {
          const n = P(e)[25].get(t);
          null == n || n.forEach(e => e())
        },
        k = new WeakMap,
        P = e => {
          const t = k.get(e);
          if (!t) throw new Error("Store must be created by buildStore to read its building blocks");
          return t
        };

      function _(e) {
        const t = P(e),
          n = t[24];
        return n ? n(t) : t
      }

      function z(...e) {
        const t = {
            get: e => (0, P(t)[21])(t, e),
            set: (e, ...n) => (0, P(t)[22])(t, e, ...n),
            sub: (e, n) => (0, P(t)[23])(t, e, n)
          },
          n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, l, f, d, m, v, p, g, b, y, w, M, E, S, A, O, x, D, void 0, new WeakMap, j, T, [0]].map((t, n) => e[n] || t);
        return k.set(t, Object.freeze(n)), t
      }
    },
    94508(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const o = n(34336).A.Symbol
    },
    86204(e, t, n) {
      n.d(t, {
        A: () => l
      });
      var o = n(94508),
        r = Object.prototype,
        i = r.hasOwnProperty,
        s = r.toString,
        a = o.A ? o.A.toStringTag : void 0;
      var u = Object.prototype.toString;
      var c = o.A ? o.A.toStringTag : void 0;
      const l = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? function(e) {
          var t = i.call(e, a),
            n = e[a];
          try {
            e[a] = void 0;
            var o = !0
          } catch (e) {}
          var r = s.call(e);
          return o && (t ? e[a] = n : delete e[a]), r
        }(e) : function(e) {
          return u.call(e)
        }(e)
      }
    },
    79481(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const o = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
    },
    17266(e, t, n) {
      n.d(t, {
        A: () => r
      });
      var o = /^(?:0|[1-9]\d*)$/;
      const r = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && o.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
    },
    33465(e, t, n) {
      n.d(t, {
        A: () => a
      });
      var o = n(47507),
        r = n(99651),
        i = n(17266),
        s = n(45862);
      const a = function(e, t, n) {
        if (!(0, s.A)(n)) return !1;
        var a = typeof t;
        return !!("number" == a ? (0, r.A)(n) && (0, i.A)(t, n.length) : "string" == a && t in n) && (0, o.A)(n[t], e)
      }
    },
    34336(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var o = n(79481),
        r = "object" == typeof self && self && self.Object === Object && self;
      const i = o.A || r || Function("return this")()
    },
    47507(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const o = function(e, t) {
        return e === t || e != e && t != t
      }
    },
    99651(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var o = n(78709),
        r = n(8933);
      const i = function(e) {
        return null != e && (0, r.A)(e.length) && !(0, o.A)(e)
      }
    },
    78709(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var o = n(86204),
        r = n(45862);
      const i = function(e) {
        if (!(0, r.A)(e)) return !1;
        var t = (0, o.A)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
    },
    8933(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const o = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    45862(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const o = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    96097(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const o = function(e) {
        return null != e && "object" == typeof e
      }
    },
    80617(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var o = n(86204),
        r = n(96097);
      const i = function(e) {
        return "symbol" == typeof e || (0, r.A)(e) && "[object Symbol]" == (0, o.A)(e)
      }
    },
    80135(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var o = Math.ceil,
        r = Math.max;
      var i = n(33465),
        s = n(82486),
        a = 1 / 0;
      const u = function(e) {
          return e ? (e = (0, s.A)(e)) === a || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        c = function(e, t, n) {
          return n && "number" != typeof n && (0, i.A)(e, t, n) && (t = n = void 0), e = u(e), void 0 === t ? (t = e, e = 0) : t = u(t),
            function(e, t, n, i) {
              for (var s = -1, a = r(o((t - e) / (n || 1)), 0), u = Array(a); a--;) u[i ? a : ++s] = e, e += n;
              return u
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : u(n), void 0)
        }
    },
    82486(e, t, n) {
      n.d(t, {
        A: () => d
      });
      var o = /\s/;
      var r = /^\s+/;
      const i = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && o.test(e.charAt(t)););
          return t
        }(e) + 1).replace(r, "") : e
      };
      var s = n(45862),
        a = n(80617),
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        f = parseInt;
      const d = function(e) {
        if ("number" == typeof e) return e;
        if ((0, a.A)(e)) return NaN;
        if ((0, s.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, s.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var n = c.test(e);
        return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? NaN : +e
      }
    }
  }
]);