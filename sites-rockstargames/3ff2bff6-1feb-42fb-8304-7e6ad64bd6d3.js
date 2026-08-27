try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3ff2bff6-1feb-42fb-8304-7e6ad64bd6d3", e._sentryDebugIdIdentifier = "sentry-dbid-3ff2bff6-1feb-42fb-8304-7e6ad64bd6d3")
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
  [8885], {
    64010(e, t, n) {
      function i() {
        return i = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }, i.apply(this, arguments)
      }

      function o(e, t) {
        if (e.length !== t.length) throw new Error("vectors must be same length");
        return e.map(function(e, n) {
          return e + t[n]
        })
      }

      function a(e) {
        return Math.max.apply(Math, e.map(Math.abs))
      }

      function r(e) {
        return Object.freeze(e), Object.values(e).forEach(function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || r(e)
        }), e
      }
      n.d(t, {
        J: () => f
      });
      var s = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        l = [-1, -1, -1],
        c = r({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const d = function(e) {
        void 0 === e && (e = {});
        var t, n, d, u = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
            }
            return r({
              on: function(n, i) {
                return e[n] = (e[n] || []).concat(i),
                  function() {
                    return t(n, i)
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
          f = u.on,
          p = u.off,
          m = u.dispatch,
          g = c,
          v = {
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
          w = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? g : g = r(i({}, c, g, e))
          },
          y = function(e) {
            var a = i({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: v.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: v.axisVelocity,
              axisMovement: v.axisMovement,
              get axisMovementProjection() {
                return o(a.axisMovement, a.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            m("wheel", i({}, a, {
              previous: n
            })), n = a
          },
          M = function(e) {
            var n, r, c, d, u, f = (u = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? l : t.map(function(e) {
                  return e ? -1 : 1
                });
                return i({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((r = (n = e).deltaX * s[n.deltaMode], c = n.deltaY * s[n.deltaMode], d = (n.deltaZ || 0) * s[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [r, c, d]
              }), g.reverseSign), i({}, u, {
                axisDelta: u.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              p = f.axisDelta,
              m = f.timeStamp,
              b = a(p);
            e.preventDefault && function(e, t) {
              var n = g.preventWheelAction,
                i = t[0],
                o = t[1],
                a = t[2];
              if ("boolean" == typeof n) return n;
              switch (n) {
                case "x":
                  return Math.abs(i) >= e;
                case "y":
                  return Math.abs(o) >= e;
                case "z":
                  return Math.abs(a) >= e;
                default:
                  return !1
              }
            }(b, p) && e.preventDefault(), v.isStarted ? v.isMomentum && b > Math.max(2, 2 * v.lastAbsDelta) && (P(!0), O()) : O(), 0 === b && Object.is && Object.is(e.deltaX, -0) ? h = !0 : (t = e, v.axisMovement = o(v.axisMovement, p), v.lastAbsDelta = b, v.scrollPointsToMerge.push({
              axisDelta: p,
              timeStamp: m
            }), x(), y({
              axisDelta: p,
              isStart: !v.isStartPublished
            }), v.isStartPublished = !0, k())
          },
          x = function() {
            var e;
            2 === v.scrollPointsToMerge.length ? (v.scrollPoints.unshift({
              axisDeltaSum: v.scrollPointsToMerge.map(function(e) {
                return e.axisDelta
              }).reduce(o),
              timeStamp: (e = v.scrollPointsToMerge.map(function(e) {
                return e.timeStamp
              }), e.reduce(function(e, t) {
                return e + t
              }) / e.length)
            }), S(), v.scrollPointsToMerge.length = 0, v.scrollPoints.length = 1, v.isMomentum || L()) : v.isStartPublished || E()
          },
          E = function() {
            var e;
            v.axisVelocity = (e = v.scrollPointsToMerge, e[e.length - 1]).axisDelta.map(function(e) {
              return e / v.willEndTimeout
            })
          },
          S = function() {
            var e = v.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var i = t.timeStamp - n.timeStamp;
              if (!(i <= 0)) {
                var o = t.axisDeltaSum.map(function(e) {
                    return e / i
                  }),
                  a = o.map(function(e, t) {
                    return e / (v.axisVelocity[t] || 1)
                  });
                v.axisVelocity = o, v.accelerationFactors.push(a), D(i)
              }
            }
          },
          D = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            v.isMomentum || (t = Math.max(100, 2 * t)), v.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          A = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          L = function() {
            if (v.accelerationFactors.length >= 5) {
              if (h && (h = !1, a(v.axisVelocity) >= .2)) return void T();
              var e = v.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(A).length === e.length;
                return t || n
              }) && T(), v.accelerationFactors = e
            }
          },
          T = function() {
            v.isMomentum = !0
          },
          O = function() {
            (v = {
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
            }).isStarted = !0, v.startTime = Date.now(), n = void 0, h = !1
          },
          k = function() {
            clearTimeout(d), d = setTimeout(P, v.willEndTimeout)
          },
          P = function(e) {
            void 0 === e && (e = !1), v.isStarted && (v.isMomentum && e ? y({
              isEnding: !0,
              isMomentumCancel: !0
            }) : y({
              isEnding: !0
            }), v.isMomentum = !1, v.isStarted = !1)
          },
          C = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
              };
            return r({
              observe: function(i) {
                return i.addEventListener("wheel", e, {
                    passive: !1
                  }), t.push(i),
                  function() {
                    return n(i)
                  }
              },
              unobserve: n,
              disconnect: function() {
                t.forEach(n)
              }
            })
          }(b),
          I = C.observe,
          F = C.unobserve,
          R = C.disconnect;
        return w(e), r({
          on: f,
          off: p,
          observe: I,
          unobserve: F,
          disconnect: R,
          feedWheel: b,
          updateOptions: w
        })
      };
      var u = {
        active: !0,
        breakpoints: {},
        wheelDraggingClass: "is-wheel-dragging",
        forceWheelAxis: void 0,
        target: void 0
      };

      function f(e) {
        var t;
        void 0 === e && (e = {});
        var n = function() {};
        return {
          name: "wheelGestures",
          options: e,
          init: function(i, o) {
            var a, r, s = o.mergeOptions,
              l = o.optionsAtMedia,
              c = s(u, f.globalOptions),
              p = s(c, e);
            t = l(p);
            var m = i.internalEngine(),
              g = null != (a = t.target) ? a : i.containerNode().parentNode,
              v = null != (r = t.forceWheelAxis) ? r : m.options.axis,
              h = d({
                preventWheelAction: v,
                reverseSign: [!0, !0, !1]
              });

            function b() {
              S = ("x" === v ? m.containerRect.width : m.containerRect.height) / 2
            }
            var w, y = h.observe(g),
              M = h.on("wheel", function(e) {
                var i = e.axisDelta,
                  o = i[0],
                  a = i[1],
                  r = "x" === v ? o : a,
                  s = "x" === v ? a : o,
                  l = e.isMomentum && e.previous && !e.previous.isMomentum,
                  c = e.isEnding && !e.isMomentum || l;
                Math.abs(r) > Math.abs(s) && !x && !e.isMomentum && !D && function(e) {
                  try {
                    k(w = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return n()
                  }
                  x = !0, E = 0, document.documentElement.addEventListener("mousemove", T, !0), document.documentElement.addEventListener("mouseup", T, !0), document.documentElement.addEventListener("mousedown", T, !0), t.wheelDraggingClass && g.classList.add(t.wheelDraggingClass)
                }(e), D && e.isEnding && (D = !1), x && (function(e) {
                  var t = P(e),
                    n = t.isAtBoundary,
                    i = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((E += Math.abs(i)) > S) return D = !0, A(e), !0
                  } else E = 0;
                  return !1
                }(e) || (c ? A(e) : k(O("mousemove", e))))
              }),
              x = !1,
              E = 0,
              S = 0,
              D = !1;

            function A(e) {
              x = !1, k(O("mouseup", e)), L(), t.wheelDraggingClass && g.classList.remove(t.wheelDraggingClass)
            }

            function L() {
              document.documentElement.removeEventListener("mousemove", T, !0), document.documentElement.removeEventListener("mouseup", T, !0), document.documentElement.removeEventListener("mousedown", T, !0)
            }

            function T(e) {
              x && e.isTrusted && e.stopImmediatePropagation()
            }

            function O(e, t) {
              var n, i;
              if (v === m.options.axis) {
                var o = t.axisMovement;
                n = o[0], i = o[1]
              } else {
                var a = t.axisMovement;
                i = a[0], n = a[1]
              }
              if (P(t).isAtBoundary) {
                var r = Math.min(E / S, 1),
                  s = E * (n > 0 ? -1 : 1) * (.25 + .5 * r);
                n += s, i += s
              }
              if (!m.options.skipSnaps && !m.options.dragFree) {
                var l = m.containerRect.width,
                  c = m.containerRect.height;
                n = n < 0 ? Math.max(n, -l) : Math.min(n, l), i = i < 0 ? Math.max(i, -c) : Math.min(i, c)
              }
              return new MouseEvent(e, {
                clientX: w.clientX + n,
                clientY: w.clientY + i,
                screenX: w.screenX + n,
                screenY: w.screenY + i,
                movementX: n,
                movementY: i,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function k(e) {
              i.containerNode().dispatchEvent(e)
            }

            function P(e) {
              var t = e.axisDelta,
                n = t[0],
                o = t[1],
                a = i.scrollProgress(),
                r = "x" === v ? n : o;
              return {
                isAtBoundary: r < 0 && !(a < 1) || r > 0 && !(a > 0),
                primaryAxisDelta: r
              }
            }
            b(), i.on("resize", b), n = function() {
              y(), M(), i.off("resize", b), L()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
      f.globalOptions = void 0
    },
    820(e, t, n) {
      n.d(t, {
        NP: () => i.NP
      });
      var i = n(37494)
    },
    84390(e, t, n) {
      n.d(t, {
        m: () => i.m
      });
      var i = n(14414)
    },
    32101(e, t, n) {
      const i = "undefined" == typeof window;
      n.d(t, ["X", 0, i])
    },
    36421(e, t, n) {
      n.d(t, {
        X3: () => i.X,
        fi: () => a,
        IO: () => l,
        VW: () => f,
        v6: () => r.v,
        cJ: () => u
      });
      var i = n(32101);
      const o = e => e - .02,
        a = {
          mobile: `(min-width: 0px) and (max-width: ${o(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${o(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${o(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${o(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var r = n(64043);
      const s = "__FOUNDRY_ACCENT__",
        l = (e, t) => i.X ? t() : (window[s] || (window[s] = new Map), window[s].has(e) || window[s].set(e, t()), window[s].get(e));
      n(68309);
      var c, d = n(15963);

      function u(e, ...t) {
        return d(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag;
      const f = (...e) => e.filter(e => e).join(" ")
    },
    21297(e, t, n) {
      n.d(t, {
        DX: () => i.DX,
        xV: () => i.xV,
        s6: () => s
      });
      var i = n(93237),
        o = n(39793),
        a = n(93082),
        r = n(10333);
      const s = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? r.s6 : a.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
      }
    },
    64043(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var i = n(81270);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const i = o.get(t);
        return i ? (i.forEach(t => t(e)), e) : t
      }

      function r(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = r(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, i.clsx)(n, s)
          }
        }
        return t
      }
    },
    658(e, t, n) {
      n.d(t, {
        hO: () => c,
        sG: () => l
      });
      var i = n(93082),
        o = n(84017),
        a = n(93237),
        r = n(39793),
        s = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, a.TL)(`Primitive.${t}`),
            o = i.forwardRef((e, i) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(s, {
                ...a,
                ref: i
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function c(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
      s(c, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    10333(e, t, n) {
      n.d(t, {
        Qg: () => l,
        bL: () => d,
        s6: () => c
      });
      var i = n(93082),
        o = n(658),
        a = n(39793),
        r = Object.defineProperty,
        s = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        }),
        l = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        c = i.forwardRef(s(function(e, t) {
          return (0, a.jsx)(o.sG.span, {
            ...e,
            ref: t,
            style: {
              ...l,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        d = c
    },
    13335(e, t, n) {
      n.d(t, {
        A: () => o
      });
      const i = {
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
        let t, n, a, r, s, l = 0,
          c = !1,
          d = !1;

        function u() {
          if (a) return;
          if (c) return;
          n.emit("autoScroll:play");
          const e = n.internalEngine(),
            {
              ownerWindow: i
            } = e;
          l = i.setTimeout(() => {
            e.scrollBody = function(e) {
              const {
                location: i,
                previousLocation: o,
                offsetLocation: a,
                target: r,
                scrollTarget: s,
                index: l,
                indexPrevious: c,
                limit: {
                  reachedMin: d,
                  reachedMax: u,
                  constrain: p
                },
                options: {
                  loop: m
                }
              } = e, g = "forward" === t.direction ? -1 : 1, v = () => x;
              let h = 0,
                b = 0,
                w = i.get(),
                y = 0,
                M = !1;
              const x = {
                direction: () => b,
                duration: () => -1,
                velocity: () => h,
                settled: () => M,
                seek: function() {
                  let e = 0;
                  o.set(i), h = g * t.speed, w += h, i.add(h), r.set(i), e = w - y, b = Math.sign(e), y = w;
                  const v = s.byDistance(0, !1).index;
                  l.get() !== v && (c.set(l.get()), l.set(v), n.emit("select"));
                  const E = "forward" === t.direction ? d(a.get()) : u(a.get());
                  if (!m && E) {
                    M = !0;
                    const e = p(i.get());
                    i.set(e), r.set(i), f()
                  }
                  return x
                },
                useBaseFriction: v,
                useBaseDuration: v,
                useFriction: v,
                useDuration: v
              };
              return x
            }(e), e.animation.start()
          }, r), c = !0
        }

        function f() {
          if (a) return;
          if (!c) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = s, t.clearTimeout(l), l = 0, c = !1
        }

        function p() {
          d || f()
        }

        function m() {
          d || b()
        }

        function g() {
          d = !0, f()
        }

        function v() {
          d = !1, u()
        }

        function h() {
          n.off("settle", h), u()
        }

        function b() {
          n.on("settle", h)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(l, c) {
            n = l;
            const {
              mergeOptions: d,
              optionsAtMedia: h
            } = c, b = d(i, o.globalOptions), w = d(b, e);
            if (t = h(w), n.scrollSnapList().length <= 1) return;
            r = t.startDelay, a = !1, s = n.internalEngine().scrollBody;
            const {
              eventStore: y
            } = n.internalEngine(), M = !!n.internalEngine().options.watchDrag, x = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            M && n.on("pointerDown", p), M && !t.stopOnInteraction && n.on("pointerUp", m), t.stopOnMouseEnter && y.add(x, "mouseenter", g), t.stopOnMouseEnter && !t.stopOnInteraction && y.add(x, "mouseleave", v), t.stopOnFocusIn && n.on("slideFocusStart", f), t.stopOnFocusIn && !t.stopOnInteraction && y.add(n.containerNode(), "focusout", u), t.playOnInit && u()
          },
          destroy: function() {
            n.off("pointerDown", p).off("pointerUp", m).off("slideFocusStart", f).off("settle", h), f(), a = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (r = e), u()
          },
          stop: function() {
            c && f()
          },
          reset: function() {
            c && (f(), b())
          },
          isPlaying: function() {
            return c
          }
        }
      }
      o.globalOptions = void 0
    },
    80135(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var i = Math.ceil,
        o = Math.max;
      var a = n(33465),
        r = n(82486),
        s = 1 / 0;
      const l = function(e) {
          return e ? (e = (0, r.A)(e)) === s || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        c = function(e, t, n) {
          return n && "number" != typeof n && (0, a.A)(e, t, n) && (t = n = void 0), e = l(e), void 0 === t ? (t = e, e = 0) : t = l(t),
            function(e, t, n, a) {
              for (var r = -1, s = o(i((t - e) / (n || 1)), 0), l = Array(s); s--;) l[a ? s : ++r] = e, e += n;
              return l
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : l(n), void 0)
        }
    },
    15437(e, t, n) {
      n.d(t, {
        A: () => r
      });
      var i = n(37015);

      function o(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      var a = n(20212);

      function r(e) {
        let {
          swiper: t,
          extendParams: n,
          on: r
        } = e;
        n({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
          }
        }), t.a11y = {
          clicked: !1
        };
        let s, l, c = null,
          d = (new Date).getTime();

        function u(e) {
          const t = c;
          0 !== t.length && (0, a.s)(t, e)
        }

        function f(e) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function p(e) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function m(e, t) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function g(e, t) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function v(e, t) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
          })
        }

        function h(e) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function b(e) {
          (e = (0, a.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function w(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const n = t.params.a11y,
            i = e.target;
          if (!t.pagination || !t.pagination.el || i !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(o(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, a.m)(t.navigation.prevEl);
              (0, a.m)(t.navigation.nextEl).includes(i) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? u(n.lastSlideMessage) : u(n.nextSlideMessage)), e.includes(i) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? u(n.firstSlideMessage) : u(n.prevSlideMessage))
            }
            t.pagination && i.matches(o(t.params.pagination.bulletClass)) && i.click()
          }
        }

        function y() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function M() {
          return y() && t.params.pagination.clickable
        }
        const x = (e, t, n) => {
            f(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", w)), v(e, n),
              function(e, t) {
                (e = (0, a.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          E = e => {
            l && l !== e.target && !l.contains(e.target) && (s = !0), t.a11y.clicked = !0
          },
          S = () => {
            s = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1)
              })
            })
          },
          D = e => {
            d = (new Date).getTime()
          },
          A = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - d < 100) return;
            const n = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!n || !t.slides.includes(n)) return;
            l = n;
            const i = t.slides.indexOf(n) === t.activeIndex,
              o = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
            i || o || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              s || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(n.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(n)), 0), s = !1)
            }))
          },
          L = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && g(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
            const n = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((i, o) => {
              const a = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : o;
              v(i, e.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, n))
            })
          };
        r("beforeInit", () => {
          c = (0, a.c)("span", t.params.a11y.notificationClass), c.setAttribute("aria-live", "assertive"), c.setAttribute("aria-atomic", "true")
        }), r("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(c);
            const n = t.el;
            e.containerRoleDescriptionMessage && g(n, e.containerRoleDescriptionMessage), e.containerMessage && v(n, e.containerMessage), e.containerRole && m(n, e.containerRole);
            const o = t.wrapperEl,
              r = e.id || o.getAttribute("id") || `swiper-wrapper-${s=16,void 0===s&&(s=16),"x".repeat(s).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var s;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var d, u;
            d = o, u = r, (d = (0, a.m)(d)).forEach(e => {
                e.setAttribute("id", u)
              }),
              function(e, t) {
                (e = (0, a.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(o, l), L();
            let {
              nextEl: f,
              prevEl: p
            } = t.navigation ? t.navigation : {};
            f = (0, a.m)(f), p = (0, a.m)(p), f && f.forEach(t => x(t, r, e.nextSlideMessage)), p && p.forEach(t => x(t, r, e.prevSlideMessage)), M() && (0, a.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", w)
            }), (0, i.g)().addEventListener("visibilitychange", D), t.el.addEventListener("focus", A, !0), t.el.addEventListener("focus", A, !0), t.el.addEventListener("pointerdown", E, !0), t.el.addEventListener("pointerup", S, !0)
          })()
        }), r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && L()
        }), r("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: n
            } = t.navigation;
            n && (t.isBeginning ? (h(n), p(n)) : (b(n), f(n))), e && (t.isEnd ? (h(e), p(e)) : (b(e), f(e)))
          }()
        }), r("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            y() && t.pagination.bullets.forEach(n => {
              t.params.pagination.clickable && (f(n), t.params.pagination.renderBullet || (m(n, "button"), v(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, a.i)(n) + 1)))), n.matches(o(t.params.pagination.bulletActiveClass)) ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current")
            })
          }()
        }), r("destroy", () => {
          t.params.a11y.enabled && function() {
            c && c.remove();
            let {
              nextEl: e,
              prevEl: n
            } = t.navigation ? t.navigation : {};
            e = (0, a.m)(e), n = (0, a.m)(n), e && e.forEach(e => e.removeEventListener("keydown", w)), n && n.forEach(e => e.removeEventListener("keydown", w)), M() && (0, a.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", w)
            }), (0, i.g)().removeEventListener("visibilitychange", D), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", A, !0), t.el.removeEventListener("pointerdown", E, !0), t.el.removeEventListener("pointerup", S, !0))
          }()
        })
      }
    }
  }
]);