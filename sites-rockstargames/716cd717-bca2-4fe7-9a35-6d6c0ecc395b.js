try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "716cd717-bca2-4fe7-9a35-6d6c0ecc395b", e._sentryDebugIdIdentifier = "sentry-dbid-716cd717-bca2-4fe7-9a35-6d6c0ecc395b")
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
  [2012], {
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
            var r, i, a;
            r = e, i = t, a = n[t], (i = o(i)) in r ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[i] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function a(e, t) {
        var n = {};
        for (var o in e) n[o] = t(e[o], o);
        return n
      }
      n.d(t, {
        c: () => u
      });
      var s = (e, t, n) => {
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
              var a, u = null !== (a = o[r]) && void 0 !== a ? a : e.defaultVariants[r];
              if (null != u) {
                var l = u;
                "boolean" == typeof l && (l = !0 === l ? "true" : "false");
                var c = e.variantClassNames[r][l];
                c && (n += " " + c)
              }
            }
            for (var [d, f] of e.compoundVariants) s(d, o, e.defaultVariants) && (n += " " + f);
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

      function a(e) {
        return Object.freeze(e), Object.values(e).forEach(function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || a(e)
        }), e
      }
      n.d(t, {
        J: () => f
      });
      var s = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        u = [-1, -1, -1],
        l = a({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const c = function(e) {
        void 0 === e && (e = {});
        var t, n, c, d = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
            }
            return a({
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
          f = d.on,
          m = d.off,
          p = d.dispatch,
          v = l,
          h = {
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
          g = !1,
          w = function(e) {
            Array.isArray(e) ? e.forEach(function(e) {
              return M(e)
            }) : M(e)
          },
          b = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? v : v = a(o({}, l, v, e))
          },
          y = function(e) {
            var i = o({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: h.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: h.axisVelocity,
              axisMovement: h.axisMovement,
              get axisMovementProjection() {
                return r(i.axisMovement, i.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            p("wheel", o({}, i, {
              previous: n
            })), n = i
          },
          M = function(e) {
            var n, a, l, c, d, f = (d = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? u : t.map(function(e) {
                  return e ? -1 : 1
                });
                return o({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((a = (n = e).deltaX * s[n.deltaMode], l = n.deltaY * s[n.deltaMode], c = (n.deltaZ || 0) * s[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [a, l, c]
              }), v.reverseSign), o({}, d, {
                axisDelta: d.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              m = f.axisDelta,
              p = f.timeStamp,
              w = i(m);
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
            }(w, m) && e.preventDefault(), h.isStarted ? h.isMomentum && w > Math.max(2, 2 * h.lastAbsDelta) && (_(!0), A()) : A(), 0 === w && Object.is && Object.is(e.deltaX, -0) ? g = !0 : (t = e, h.axisMovement = r(h.axisMovement, m), h.lastAbsDelta = w, h.scrollPointsToMerge.push({
              axisDelta: m,
              timeStamp: p
            }), x(), y({
              axisDelta: m,
              isStart: !h.isStartPublished
            }), h.isStartPublished = !0, P())
          },
          x = function() {
            var e;
            2 === h.scrollPointsToMerge.length ? (h.scrollPoints.unshift({
              axisDeltaSum: h.scrollPointsToMerge.map(function(e) {
                return e.axisDelta
              }).reduce(r),
              timeStamp: (e = h.scrollPointsToMerge.map(function(e) {
                return e.timeStamp
              }), e.reduce(function(e, t) {
                return e + t
              }) / e.length)
            }), S(), h.scrollPointsToMerge.length = 0, h.scrollPoints.length = 1, h.isMomentum || T()) : h.isStartPublished || E()
          },
          E = function() {
            var e;
            h.axisVelocity = (e = h.scrollPointsToMerge, e[e.length - 1]).axisDelta.map(function(e) {
              return e / h.willEndTimeout
            })
          },
          S = function() {
            var e = h.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var o = t.timeStamp - n.timeStamp;
              if (!(o <= 0)) {
                var r = t.axisDeltaSum.map(function(e) {
                    return e / o
                  }),
                  i = r.map(function(e, t) {
                    return e / (h.axisVelocity[t] || 1)
                  });
                h.axisVelocity = r, h.accelerationFactors.push(i), O(o)
              }
            }
          },
          O = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            h.isMomentum || (t = Math.max(100, 2 * t)), h.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          D = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          T = function() {
            if (h.accelerationFactors.length >= 5) {
              if (g && (g = !1, i(h.axisVelocity) >= .2)) return void k();
              var e = h.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(D).length === e.length;
                return t || n
              }) && k(), h.accelerationFactors = e
            }
          },
          k = function() {
            h.isMomentum = !0
          },
          A = function() {
            (h = {
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
            }).isStarted = !0, h.startTime = Date.now(), n = void 0, g = !1
          },
          P = function() {
            clearTimeout(c), c = setTimeout(_, h.willEndTimeout)
          },
          _ = function(e) {
            void 0 === e && (e = !1), h.isStarted && (h.isMomentum && e ? y({
              isEnding: !0,
              isMomentumCancel: !0
            }) : y({
              isEnding: !0
            }), h.isMomentum = !1, h.isStarted = !1)
          },
          j = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
              };
            return a({
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
          }(w),
          L = j.observe,
          C = j.unobserve,
          z = j.disconnect;
        return b(e), a({
          on: f,
          off: m,
          observe: L,
          unobserve: C,
          disconnect: z,
          feedWheel: w,
          updateOptions: b
        })
      };
      var d = {
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
          init: function(o, r) {
            var i, a, s = r.mergeOptions,
              u = r.optionsAtMedia,
              l = s(d, f.globalOptions),
              m = s(l, e);
            t = u(m);
            var p = o.internalEngine(),
              v = null != (i = t.target) ? i : o.containerNode().parentNode,
              h = null != (a = t.forceWheelAxis) ? a : p.options.axis,
              g = c({
                preventWheelAction: h,
                reverseSign: [!0, !0, !1]
              });

            function w() {
              S = ("x" === h ? p.containerRect.width : p.containerRect.height) / 2
            }
            var b, y = g.observe(v),
              M = g.on("wheel", function(e) {
                var o = e.axisDelta,
                  r = o[0],
                  i = o[1],
                  a = "x" === h ? r : i,
                  s = "x" === h ? i : r,
                  u = e.isMomentum && e.previous && !e.previous.isMomentum,
                  l = e.isEnding && !e.isMomentum || u;
                Math.abs(a) > Math.abs(s) && !x && !e.isMomentum && !O && function(e) {
                  try {
                    P(b = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return n()
                  }
                  x = !0, E = 0, document.documentElement.addEventListener("mousemove", k, !0), document.documentElement.addEventListener("mouseup", k, !0), document.documentElement.addEventListener("mousedown", k, !0), t.wheelDraggingClass && v.classList.add(t.wheelDraggingClass)
                }(e), O && e.isEnding && (O = !1), x && (function(e) {
                  var t = _(e),
                    n = t.isAtBoundary,
                    o = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((E += Math.abs(o)) > S) return O = !0, D(e), !0
                  } else E = 0;
                  return !1
                }(e) || (l ? D(e) : P(A("mousemove", e))))
              }),
              x = !1,
              E = 0,
              S = 0,
              O = !1;

            function D(e) {
              x = !1, P(A("mouseup", e)), T(), t.wheelDraggingClass && v.classList.remove(t.wheelDraggingClass)
            }

            function T() {
              document.documentElement.removeEventListener("mousemove", k, !0), document.documentElement.removeEventListener("mouseup", k, !0), document.documentElement.removeEventListener("mousedown", k, !0)
            }

            function k(e) {
              x && e.isTrusted && e.stopImmediatePropagation()
            }

            function A(e, t) {
              var n, o;
              if (h === p.options.axis) {
                var r = t.axisMovement;
                n = r[0], o = r[1]
              } else {
                var i = t.axisMovement;
                o = i[0], n = i[1]
              }
              if (_(t).isAtBoundary) {
                var a = Math.min(E / S, 1),
                  s = E * (n > 0 ? -1 : 1) * (.25 + .5 * a);
                n += s, o += s
              }
              if (!p.options.skipSnaps && !p.options.dragFree) {
                var u = p.containerRect.width,
                  l = p.containerRect.height;
                n = n < 0 ? Math.max(n, -u) : Math.min(n, u), o = o < 0 ? Math.max(o, -l) : Math.min(o, l)
              }
              return new MouseEvent(e, {
                clientX: b.clientX + n,
                clientY: b.clientY + o,
                screenX: b.screenX + n,
                screenY: b.screenY + o,
                movementX: n,
                movementY: o,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function P(e) {
              o.containerNode().dispatchEvent(e)
            }

            function _(e) {
              var t = e.axisDelta,
                n = t[0],
                r = t[1],
                i = o.scrollProgress(),
                a = "x" === h ? n : r;
              return {
                isAtBoundary: a < 0 && !(i < 1) || a > 0 && !(i > 0),
                primaryAxisDelta: a
              }
            }
            w(), o.on("resize", w), n = function() {
              y(), M(), o.off("resize", w), T()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
      f.globalOptions = void 0
    },
    10254(e, t, n) {
      n.d(t, {
        m: () => o.m
      });
      var o = n(67594)
    },
    87213(e, t, n) {
      n.d(t, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    23293(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => i,
        IO: () => u,
        VW: () => f,
        v6: () => a.v,
        cJ: () => d
      });
      var o = n(87213);
      const r = e => e - .02,
        i = {
          mobile: `(min-width: 0px) and (max-width: ${r(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${r(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${r(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${r(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = n(71107);
      const s = "__FOUNDRY_ACCENT__",
        u = (e, t) => o.X ? t() : (window[s] || (window[s] = new Map), window[s].has(e) || window[s].set(e, t()), window[s].get(e));
      n(68309);
      var l, c = n(15963);

      function d(e, ...t) {
        return c(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag;
      const f = (...e) => e.filter(e => e).join(" ")
    },
    30377(e, t, n) {
      n.d(t, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => s
      });
      var o = n(38957),
        r = n(39793),
        i = n(93082),
        a = n(34376);
      const s = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? a.s6 : i.Fragment;
        return (0, r.jsx)(n, {
          ...t
        })
      }
    },
    71107(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var o = n(81270);
      const r = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = r.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = r.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              s = r[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, o.clsx)(n, s)
          }
        }
        return t
      }
    },
    4031(e, t, n) {
      n.d(t, {
        sG: () => a
      });
      var o = n(93082),
        r = (n(84017), n(38957)),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, r.TL)(`Primitive.${t}`),
            a = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...a
              } = e, s = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: o
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {})
    },
    34376(e, t, n) {
      n.d(t, {
        bL: () => u,
        s6: () => s
      });
      var o = n(93082),
        r = n(4031),
        i = n(39793),
        a = Object.freeze({
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
        s = o.forwardRef((e, t) => (0, i.jsx)(r.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var u = s
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
        let t, n, i, a, s, u = 0,
          l = !1,
          c = !1;

        function d() {
          if (i) return;
          if (l) return;
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
                target: a,
                scrollTarget: s,
                index: u,
                indexPrevious: l,
                limit: {
                  reachedMin: c,
                  reachedMax: d,
                  constrain: m
                },
                options: {
                  loop: p
                }
              } = e, v = "forward" === t.direction ? -1 : 1, h = () => x;
              let g = 0,
                w = 0,
                b = o.get(),
                y = 0,
                M = !1;
              const x = {
                direction: () => w,
                duration: () => -1,
                velocity: () => g,
                settled: () => M,
                seek: function() {
                  let e = 0;
                  r.set(o), g = v * t.speed, b += g, o.add(g), a.set(o), e = b - y, w = Math.sign(e), y = b;
                  const h = s.byDistance(0, !1).index;
                  u.get() !== h && (l.set(u.get()), u.set(h), n.emit("select"));
                  const E = "forward" === t.direction ? c(i.get()) : d(i.get());
                  if (!p && E) {
                    M = !0;
                    const e = m(o.get());
                    o.set(e), a.set(o), f()
                  }
                  return x
                },
                useBaseFriction: h,
                useBaseDuration: h,
                useFriction: h,
                useDuration: h
              };
              return x
            }(e), e.animation.start()
          }, a), l = !0
        }

        function f() {
          if (i) return;
          if (!l) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = s, t.clearTimeout(u), u = 0, l = !1
        }

        function m() {
          c || f()
        }

        function p() {
          c || w()
        }

        function v() {
          c = !0, f()
        }

        function h() {
          c = !1, d()
        }

        function g() {
          n.off("settle", g), d()
        }

        function w() {
          n.on("settle", g)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(u, l) {
            n = u;
            const {
              mergeOptions: c,
              optionsAtMedia: g
            } = l, w = c(o, r.globalOptions), b = c(w, e);
            if (t = g(b), n.scrollSnapList().length <= 1) return;
            a = t.startDelay, i = !1, s = n.internalEngine().scrollBody;
            const {
              eventStore: y
            } = n.internalEngine(), M = !!n.internalEngine().options.watchDrag, x = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            M && n.on("pointerDown", m), M && !t.stopOnInteraction && n.on("pointerUp", p), t.stopOnMouseEnter && y.add(x, "mouseenter", v), t.stopOnMouseEnter && !t.stopOnInteraction && y.add(x, "mouseleave", h), t.stopOnFocusIn && n.on("slideFocusStart", f), t.stopOnFocusIn && !t.stopOnInteraction && y.add(n.containerNode(), "focusout", d), t.playOnInit && d()
          },
          destroy: function() {
            n.off("pointerDown", m).off("pointerUp", p).off("slideFocusStart", f).off("settle", g), f(), i = !0, l = !1
          },
          play: function(e) {
            void 0 !== e && (a = e), d()
          },
          stop: function() {
            l && f()
          },
          reset: function() {
            l && (f(), w())
          },
          isPlaying: function() {
            return l
          }
        }
      }
      r.globalOptions = void 0
    },
    49673(e, t, n) {
      n.d(t, {
        fp: () => v
      });
      var o = n(93082),
        r = n(28401),
        i = n(48894);
      const a = (0, o.createContext)(void 0);

      function s(e) {
        const t = (0, o.useContext)(a);
        return (null == e ? void 0 : e.store) || t || (0, r.zp)()
      }
      const u = e => "function" == typeof(null == e ? void 0 : e.then),
        l = e => {
          e.status || (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
          }, t => {
            e.status = "rejected", e.reason = t
          }))
        },
        c = o.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (l(e), e)
        }),
        d = new WeakMap,
        f = (e, t, n) => {
          const o = (0, i.oJ)(e)[26];
          let r = d.get(t);
          return r || (r = new Promise((i, a) => {
            let s = t;
            const l = e => t => {
                s === e && i(t)
              },
              c = e => t => {
                s === e && a(t)
              },
              f = () => {
                try {
                  const t = n();
                  u(t) ? (d.set(t, r), s = t, t.then(l(t), c(t)), o(e, t, f)) : i(t)
                } catch (e) {
                  a(e)
                }
              };
            t.then(l(t), c(t)), o(e, t, f)
          }), d.set(t, r)), r
        };

      function m(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: r = !o.use
        } = t || {}, i = s(t), [
          [a, d, m], p
        ] = (0, o.useReducer)(t => {
          const n = i.get(e);
          return Object.is(t[0], n) && t[1] === i && t[2] === e ? t : [n, i, e]
        }, void 0, () => [i.get(e), i, e]);
        let v = a;
        if (d === i && m === e || (p(), v = i.get(e)), (0, o.useEffect)(() => {
            const t = i.sub(e, () => {
              if (r) try {
                const t = i.get(e);
                u(t) && l(f(i, t, () => i.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(p, n);
              p()
            });
            return p(), t
          }, [i, e, n, r]), (0, o.useDebugValue)(v), u(v)) {
          const t = f(i, v, () => i.get(e));
          return r && l(t), c(t)
        }
        return v
      }

      function p(e, t) {
        const n = s(t);
        return (0, o.useCallback)((...t) => {
          if (!("write" in e)) throw new Error("not writable atom");
          return n.set(e, ...t)
        }, [n, e])
      }

      function v(e, t) {
        return [m(e, t), p(e, t)]
      }
    },
    28401(e, t, n) {
      n.d(t, {
        eU: () => a,
        zp: () => l
      });
      var o = n(48894);
      let r, i = 0;

      function a(e, t) {
        const n = "atom" + ++i,
          o = {
            toString() {
              return this.debugLabel ? n + ":" + this.debugLabel : n
            }
          };
        return "function" == typeof e ? o.read = e : (o.init = e, o.read = s, o.write = u), t && (o.write = t), o
      }

      function s(e) {
        return e(this)
      }

      function u(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function l() {
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

      function a(e) {
        if ("e" in e) throw e.e;
        if (!("v" in e)) throw new Error("[Bug] atom state is not initialized");
        return e.v
      }

      function s(e) {
        return "function" == typeof(null == e ? void 0 : e.then)
      }

      function u(e, t, n) {
        if (!n.p.has(e)) {
          n.p.add(e);
          const o = () => n.p.delete(e);
          t.then(o, o)
        }
      }

      function l(e, t, n) {
        const o = n.get(e),
          r = null == o ? void 0 : o.t,
          i = t.p;
        if (!(null == r ? void 0 : r.size)) return i;
        if (!i.size) return r;
        const a = new Set(r);
        for (const e of i) a.add(e);
        return a
      }
      n.d(t, {
        ff: () => L,
        oJ: () => j
      });
      const c = (e, t, ...n) => t.read(...n),
        d = (e, t, ...n) => t.write(...n),
        f = (e, t) => {
          var n;
          return null == (n = t.INTERNAL_onInit) ? void 0 : n.call(t, e)
        },
        m = (e, t, n) => {
          var o;
          return null == (o = t.onMount) ? void 0 : o.call(t, n)
        },
        p = (e, t) => {
          var n;
          const o = _(e),
            r = o[0],
            i = o[6],
            a = o[9];
          if (!t) throw new Error("Atom is undefined or null");
          let s = r.get(t);
          return s || (s = {
            d: new Map,
            p: new Set,
            n: 0
          }, r.set(t, s), null == (n = i.i) || n.call(i, t), null == a || a(e, t)), s
        },
        v = e => {
          var t;
          const n = _(e),
            o = n[1],
            r = n[3],
            i = n[4],
            a = n[5],
            s = n[6],
            u = n[13];
          if (!(s.f || r.size || i.size || a.size)) return;
          const l = [],
            c = e => {
              try {
                e()
              } catch (e) {
                l.push(e)
              }
            };
          do {
            s.f && c(s.f);
            const n = new Set;
            for (const e of r) {
              const r = null == (t = o.get(e)) ? void 0 : t.l;
              if (r)
                for (const e of r) n.add(e)
            }
            r.clear();
            for (const e of a) n.add(e);
            a.clear();
            for (const e of i) n.add(e);
            i.clear();
            for (const e of n) c(e);
            r.size && u(e)
          } while (r.size || a.size || i.size);
          if (l.length) throw new AggregateError(l)
        },
        h = e => {
          const t = _(e),
            n = t[1],
            o = t[2],
            r = t[3],
            i = t[11],
            a = t[14],
            s = t[17];
          if (!r.size) return;
          const u = [],
            c = [],
            d = new WeakSet,
            f = new WeakSet,
            m = [],
            p = [];
          for (const t of r) m.push(t), p.push(i(e, t));
          for (; m.length;) {
            const t = m.length - 1,
              r = m[t],
              a = p[t];
            if (f.has(r)) m.pop(), p.pop();
            else if (d.has(r)) {
              if (o.get(r) === a.n) u.push(r), c.push(a);
              else if (o.has(r)) throw new Error("[Bug] invalidated atom exists");
              f.add(r), m.pop(), p.pop()
            } else {
              d.add(r);
              for (const t of l(r, a, n)) d.has(t) || (m.push(t), p.push(i(e, t)))
            }
          }
          for (let t = u.length - 1; t >= 0; --t) {
            const n = u[t],
              i = c[t];
            let l = !1;
            for (const e of i.d.keys())
              if (e !== n && r.has(e)) {
                l = !0;
                break
              } l && (o.set(n, i.n), a(e, n), s(e, n)), o.delete(n)
          }
        },
        g = new WeakSet,
        w = (e, t) => {
          var n, l;
          const c = _(e),
            d = c[1],
            f = c[2],
            m = c[3],
            p = c[6],
            v = c[7],
            h = c[11],
            w = c[12],
            b = c[13],
            y = c[14],
            M = c[16],
            x = c[17],
            E = c[20],
            S = c[26],
            O = c[28],
            D = h(e, t),
            T = O[0];
          if (i(D)) {
            if (d.has(t) && f.get(t) !== D.n || D.m === T) return D.m = T, D;
            let n = !1;
            for (const [t, o] of D.d)
              if (y(e, t).n !== o) {
                n = !0;
                break
              } if (!n) return D.m = T, D
          }
          let k = !0;
          const A = new Set(D.d.keys()),
            P = () => {
              for (const e of A) D.d.delete(e)
            },
            j = () => {
              if (d.has(t)) {
                const n = !m.size;
                x(e, t), n && (b(e), w(e))
              }
            },
            L = n => {
              var r;
              if (n === t) {
                const t = h(e, n);
                if (!i(t)) {
                  if (!o(n)) throw new Error("no atom init");
                  E(e, n, n.init)
                }
                return a(t)
              }
              const l = y(e, n);
              try {
                return a(l)
              } finally {
                A.delete(n), D.d.set(n, l.n), s(D.v) && u(t, D.v, l), d.has(t) && (null == (r = d.get(n)) || r.t.add(t)), k || j()
              }
            };
          let C, z;
          const N = {
              get signal() {
                return C || (C = new AbortController), C.signal
              },
              get setSelf() {
                return console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), r(t) || console.warn("setSelf function cannot be used with read-only atom"), !z && r(t) && (z = (...n) => {
                  if (k && console.warn("setSelf function cannot be called in sync"), !k) try {
                    return M(e, t, ...n)
                  } finally {
                    b(e), w(e)
                  }
                }), z
              }
            },
            V = D.n,
            F = f.get(t) === V;
          try {
            g.delete(e);
            const o = v(e, t, L, N);
            if (g.has(e) && console.warn("Detected store mutation during atom read. This is not supported."), E(e, t, o), s(o)) {
              S(e, o, () => null == C ? void 0 : C.abort());
              const t = () => {
                P(), j()
              };
              o.then(t, t)
            } else P();
            return null == (n = p.r) || n.call(p, t), D.m = T, D
          } catch (e) {
            return delete D.v, D.e = e, ++D.n, D.m = T, D
          } finally {
            k = !1, D.n !== V && F && (f.set(t, D.n), m.add(t), null == (l = p.c) || l.call(p, t))
          }
        },
        b = (e, t) => {
          const n = _(e),
            o = n[1],
            r = n[2],
            i = n[11],
            a = [t];
          for (; a.length;) {
            const t = a.pop(),
              n = i(e, t);
            for (const s of l(t, n, o)) {
              const t = i(e, s);
              r.get(s) !== t.n && (r.set(s, t.n), a.push(s))
            }
          }
        },
        y = (e, t, ...n) => {
          const r = _(e),
            i = r[3],
            s = r[6],
            u = r[8],
            l = r[11],
            c = r[12],
            d = r[13],
            f = r[14],
            m = r[15],
            p = r[16],
            v = r[17],
            h = r[20],
            w = r[28];
          let b = !0;
          const y = t => a(f(e, t)),
            M = (n, ...r) => {
              var a;
              const u = l(e, n);
              try {
                if (n === t) {
                  if (!o(n)) throw new Error("atom not writable");
                  g.add(e);
                  const t = u.n,
                    l = r[0];
                  return h(e, n, l), v(e, n), void(t !== u.n && (++w[0], i.add(n), m(e, n), null == (a = s.c) || a.call(s, n)))
                }
                return p(e, n, ...r)
              } finally {
                b || (d(e), c(e))
              }
            };
          try {
            return u(e, t, y, M, ...n)
          } finally {
            b = !1
          }
        },
        M = (e, t) => {
          var n;
          const o = _(e),
            r = o[1],
            i = o[3],
            a = o[6],
            s = o[11],
            u = o[15],
            l = o[18],
            c = o[19],
            d = s(e, t),
            f = r.get(t);
          if (f && d.d.size > 0) {
            for (const [o, r] of d.d)
              if (!f.d.has(o)) {
                const c = s(e, o);
                l(e, o).t.add(t), f.d.add(o), r !== c.n && (i.add(o), u(e, o), null == (n = a.c) || n.call(a, o))
              } for (const n of f.d)
              if (!d.d.has(n)) {
                f.d.delete(n);
                const o = c(e, n);
                null == o || o.t.delete(t)
              }
          }
        },
        x = (e, t) => {
          var n;
          const o = _(e),
            i = o[1],
            a = o[4],
            s = o[6],
            u = o[10],
            l = o[11],
            c = o[12],
            d = o[13],
            f = o[14],
            m = o[16],
            p = o[18],
            v = l(e, t);
          let h = i.get(t);
          if (!h) {
            f(e, t);
            for (const n of v.d.keys()) p(e, n).t.add(t);
            if (h = {
                l: new Set,
                d: new Set(v.d.keys()),
                t: new Set
              }, i.set(t, h), r(t) && function(e) {
                return !!e.onMount
              }(t)) {
              const n = () => {
                let n = !0;
                const o = (...o) => {
                  try {
                    return m(e, t, ...o)
                  } finally {
                    n || (d(e), c(e))
                  }
                };
                try {
                  const r = u(e, t, o);
                  r && (h.u = () => {
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
              a.add(n)
            }
            null == (n = s.m) || n.call(s, t)
          }
          return h
        },
        E = (e, t) => {
          var n, o;
          const r = _(e),
            i = r[1],
            a = r[5],
            s = r[6],
            u = r[11],
            l = r[19],
            c = u(e, t);
          let d = i.get(t);
          if (!d || d.l.size) return d;
          let f = !1;
          for (const e of d.t)
            if (null == (n = i.get(e)) ? void 0 : n.d.has(t)) {
              f = !0;
              break
            } if (f) return d;
          d.u && a.add(d.u), d = void 0, i.delete(t);
          for (const n of c.d.keys()) {
            const o = l(e, n);
            null == o || o.t.delete(t)
          }
          null == (o = s.u) || o.call(s, t)
        },
        S = (e, t, n) => {
          const o = _(e),
            r = o[11],
            i = o[27],
            a = r(e, t),
            l = "v" in a,
            c = a.v;
          if (s(n))
            for (const o of a.d.keys()) u(t, n, r(e, o));
          a.v = n, delete a.e, l && Object.is(c, a.v) || (++a.n, s(c) && i(e, c))
        },
        O = (e, t) => a((0, _(e)[14])(e, t)),
        D = (e, t, ...n) => {
          const o = _(e),
            r = o[3],
            i = o[12],
            a = o[13],
            s = o[16],
            u = r.size;
          try {
            return s(e, t, ...n)
          } finally {
            r.size !== u && (a(e), i(e))
          }
        },
        T = (e, t, n) => {
          const o = _(e),
            r = o[12],
            i = o[18],
            a = o[19],
            s = i(e, t).l;
          return s.add(n), r(e), () => {
            s.delete(n), a(e, t), r(e)
          }
        },
        k = (e, t, n) => {
          const o = _(e)[25];
          let r = o.get(t);
          if (!r) {
            r = new Set, o.set(t, r);
            const e = () => o.delete(t);
            t.then(e, e)
          }
          r.add(n)
        },
        A = (e, t) => {
          const n = _(e)[25].get(t);
          null == n || n.forEach(e => e())
        },
        P = new WeakMap,
        _ = e => {
          const t = P.get(e);
          if (!t) throw new Error("Store must be created by buildStore to read its building blocks");
          return t
        };

      function j(e) {
        const t = _(e),
          n = t[24];
        return n ? n(t) : t
      }

      function L(...e) {
        const t = {
            get: e => (0, _(t)[21])(t, e),
            set: (e, ...n) => (0, _(t)[22])(t, e, ...n),
            sub: (e, n) => (0, _(t)[23])(t, e, n)
          },
          n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, c, d, f, m, p, v, h, w, b, y, M, x, E, S, O, D, T, void 0, new WeakMap, k, A, [0]].map((t, n) => e[n] || t);
        return P.set(t, Object.freeze(n)), t
      }
    },
    80135(e, t, n) {
      n.d(t, {
        A: () => l
      });
      var o = Math.ceil,
        r = Math.max;
      var i = n(33465),
        a = n(82486),
        s = 1 / 0;
      const u = function(e) {
          return e ? (e = (0, a.A)(e)) === s || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        l = function(e, t, n) {
          return n && "number" != typeof n && (0, i.A)(e, t, n) && (t = n = void 0), e = u(e), void 0 === t ? (t = e, e = 0) : t = u(t),
            function(e, t, n, i) {
              for (var a = -1, s = r(o((t - e) / (n || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = e, e += n;
              return u
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : u(n), void 0)
        }
    }
  }
]);