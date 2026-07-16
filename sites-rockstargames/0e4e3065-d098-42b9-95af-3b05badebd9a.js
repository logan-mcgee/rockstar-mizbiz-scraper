try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0e4e3065-d098-42b9-95af-3b05badebd9a", e._sentryDebugIdIdentifier = "sentry-dbid-0e4e3065-d098-42b9-95af-3b05badebd9a")
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
  [4383], {
    71554(e, t, n) {
      function i(e) {
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
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, i)
        }
        return n
      }

      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
            var o, r, a;
            o = e, r = t, a = n[t], (r = i(r)) in o ? Object.defineProperty(o, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[r] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function a(e, t) {
        var n = {};
        for (var i in e) n[i] = t(e[i], i);
        return n
      }
      n.d(t, {
        c: () => l
      });
      var s = (e, t, n) => {
          for (var i of Object.keys(e)) {
            var o;
            if (e[i] !== (null !== (o = t[i]) && void 0 !== o ? o : n[i])) return !1
          }
          return !0
        },
        l = e => {
          var t = t => {
            var n = e.defaultClassName,
              i = r(r({}, e.defaultVariants), t);
            for (var o in i) {
              var a, l = null !== (a = i[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var c = l;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var u = e.variantClassNames[o][c];
                u && (n += " " + u)
              }
            }
            for (var [d, f] of e.compoundVariants) s(d, i, e.defaultVariants) && (n += " " + f);
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

      function r(e) {
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
        l = [-1, -1, -1],
        c = a({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const u = function(e) {
        void 0 === e && (e = {});
        var t, n, u, d = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
            }
            return a({
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
          f = d.on,
          p = d.off,
          m = d.dispatch,
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
              return E(e)
            }) : E(e)
          },
          w = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? g : g = a(i({}, c, g, e))
          },
          y = function(e) {
            var r = i({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: v.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: v.axisVelocity,
              axisMovement: v.axisMovement,
              get axisMovementProjection() {
                return o(r.axisMovement, r.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            m("wheel", i({}, r, {
              previous: n
            })), n = r
          },
          E = function(e) {
            var n, a, c, u, d, f = (d = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? l : t.map(function(e) {
                  return e ? -1 : 1
                });
                return i({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((a = (n = e).deltaX * s[n.deltaMode], c = n.deltaY * s[n.deltaMode], u = (n.deltaZ || 0) * s[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [a, c, u]
              }), g.reverseSign), i({}, d, {
                axisDelta: d.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              p = f.axisDelta,
              m = f.timeStamp,
              b = r(p);
            e.preventDefault && function(e, t) {
              var n = g.preventWheelAction,
                i = t[0],
                o = t[1],
                r = t[2];
              if ("boolean" == typeof n) return n;
              switch (n) {
                case "x":
                  return Math.abs(i) >= e;
                case "y":
                  return Math.abs(o) >= e;
                case "z":
                  return Math.abs(r) >= e;
                default:
                  return !1
              }
            }(b, p) && e.preventDefault(), v.isStarted ? v.isMomentum && b > Math.max(2, 2 * v.lastAbsDelta) && (P(!0), T()) : T(), 0 === b && Object.is && Object.is(e.deltaX, -0) ? h = !0 : (t = e, v.axisMovement = o(v.axisMovement, p), v.lastAbsDelta = b, v.scrollPointsToMerge.push({
              axisDelta: p,
              timeStamp: m
            }), M(), y({
              axisDelta: p,
              isStart: !v.isStartPublished
            }), v.isStartPublished = !0, L())
          },
          M = function() {
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
            }), S(), v.scrollPointsToMerge.length = 0, v.scrollPoints.length = 1, v.isMomentum || O()) : v.isStartPublished || x()
          },
          x = function() {
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
                  r = o.map(function(e, t) {
                    return e / (v.axisVelocity[t] || 1)
                  });
                v.axisVelocity = o, v.accelerationFactors.push(r), D(i)
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
          O = function() {
            if (v.accelerationFactors.length >= 5) {
              if (h && (h = !1, r(v.axisVelocity) >= .2)) return void k();
              var e = v.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(A).length === e.length;
                return t || n
              }) && k(), v.accelerationFactors = e
            }
          },
          k = function() {
            v.isMomentum = !0
          },
          T = function() {
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
          L = function() {
            clearTimeout(u), u = setTimeout(P, v.willEndTimeout)
          },
          P = function(e) {
            void 0 === e && (e = !1), v.isStarted && (v.isMomentum && e ? y({
              isEnding: !0,
              isMomentumCancel: !0
            }) : y({
              isEnding: !0
            }), v.isMomentum = !1, v.isStarted = !1)
          },
          _ = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
              };
            return a({
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
          j = _.observe,
          C = _.unobserve,
          I = _.disconnect;
        return w(e), a({
          on: f,
          off: p,
          observe: j,
          unobserve: C,
          disconnect: I,
          feedWheel: b,
          updateOptions: w
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
          init: function(i, o) {
            var r, a, s = o.mergeOptions,
              l = o.optionsAtMedia,
              c = s(d, f.globalOptions),
              p = s(c, e);
            t = l(p);
            var m = i.internalEngine(),
              g = null != (r = t.target) ? r : i.containerNode().parentNode,
              v = null != (a = t.forceWheelAxis) ? a : m.options.axis,
              h = u({
                preventWheelAction: v,
                reverseSign: [!0, !0, !1]
              });

            function b() {
              S = ("x" === v ? m.containerRect.width : m.containerRect.height) / 2
            }
            var w, y = h.observe(g),
              E = h.on("wheel", function(e) {
                var i = e.axisDelta,
                  o = i[0],
                  r = i[1],
                  a = "x" === v ? o : r,
                  s = "x" === v ? r : o,
                  l = e.isMomentum && e.previous && !e.previous.isMomentum,
                  c = e.isEnding && !e.isMomentum || l;
                Math.abs(a) > Math.abs(s) && !M && !e.isMomentum && !D && function(e) {
                  try {
                    L(w = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return n()
                  }
                  M = !0, x = 0, document.documentElement.addEventListener("mousemove", k, !0), document.documentElement.addEventListener("mouseup", k, !0), document.documentElement.addEventListener("mousedown", k, !0), t.wheelDraggingClass && g.classList.add(t.wheelDraggingClass)
                }(e), D && e.isEnding && (D = !1), M && (function(e) {
                  var t = P(e),
                    n = t.isAtBoundary,
                    i = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((x += Math.abs(i)) > S) return D = !0, A(e), !0
                  } else x = 0;
                  return !1
                }(e) || (c ? A(e) : L(T("mousemove", e))))
              }),
              M = !1,
              x = 0,
              S = 0,
              D = !1;

            function A(e) {
              M = !1, L(T("mouseup", e)), O(), t.wheelDraggingClass && g.classList.remove(t.wheelDraggingClass)
            }

            function O() {
              document.documentElement.removeEventListener("mousemove", k, !0), document.documentElement.removeEventListener("mouseup", k, !0), document.documentElement.removeEventListener("mousedown", k, !0)
            }

            function k(e) {
              M && e.isTrusted && e.stopImmediatePropagation()
            }

            function T(e, t) {
              var n, i;
              if (v === m.options.axis) {
                var o = t.axisMovement;
                n = o[0], i = o[1]
              } else {
                var r = t.axisMovement;
                i = r[0], n = r[1]
              }
              if (P(t).isAtBoundary) {
                var a = Math.min(x / S, 1),
                  s = x * (n > 0 ? -1 : 1) * (.25 + .5 * a);
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

            function L(e) {
              i.containerNode().dispatchEvent(e)
            }

            function P(e) {
              var t = e.axisDelta,
                n = t[0],
                o = t[1],
                r = i.scrollProgress(),
                a = "x" === v ? n : o;
              return {
                isAtBoundary: a < 0 && !(r < 1) || a > 0 && !(r > 0),
                primaryAxisDelta: a
              }
            }
            b(), i.on("resize", b), n = function() {
              y(), E(), i.off("resize", b), O()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
      f.globalOptions = void 0
    },
    36745(e, t, n) {
      n.d(t, {
        NP: () => i.NP
      });
      var i = n(43870)
    },
    17194(e, t, n) {
      n.d(t, {
        m: () => i.m
      });
      var i = n(56550)
    },
    31602(e, t, n) {
      const i = "undefined" == typeof window;
      n.d(t, ["X", 0, i])
    },
    7912(e, t, n) {
      n.d(t, {
        X3: () => i.X,
        fi: () => r,
        IO: () => l,
        VW: () => f,
        v6: () => a.v,
        cJ: () => d
      });
      var i = n(31602);
      const o = e => e - .02,
        r = {
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
      var a = n(47460);
      const s = "__FOUNDRY_ACCENT__",
        l = (e, t) => i.X ? t() : (window[s] || (window[s] = new Map), window[s].has(e) || window[s].set(e, t()), window[s].get(e));
      n(68309);
      var c, u = n(15963);

      function d(e, ...t) {
        return u(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag;
      const f = (...e) => e.filter(e => e).join(" ")
    },
    69088(e, t, n) {
      n.d(t, {
        DX: () => i.DX,
        xV: () => i.xV,
        s6: () => s
      });
      var i = n(17172),
        o = n(39793),
        r = n(93082),
        a = n(84045);
      const s = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? a.s6 : r.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
      }
    },
    47460(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var i = n(81270);
      const o = new Map;

      function r(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const i = o.get(t);
        return i ? (i.forEach(t => t(e)), e) : t
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
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = r(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, i.clsx)(n, s)
          }
        }
        return t
      }
    },
    13165(e, t, n) {
      n.d(t, {
        hO: () => l,
        sG: () => s
      });
      var i = n(93082),
        o = n(84017),
        r = n(17172),
        a = n(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, r.TL)(`Primitive.${t}`),
            o = i.forwardRef((e, i) => {
              const {
                asChild: o,
                ...r
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...r,
                ref: i
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function l(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    84045(e, t, n) {
      n.d(t, {
        Qg: () => a,
        bL: () => l,
        s6: () => s
      });
      var i = n(93082),
        o = n(13165),
        r = n(39793),
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
        s = i.forwardRef((e, t) => (0, r.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
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
        let t, n, r, a, s, l = 0,
          c = !1,
          u = !1;

        function d() {
          if (r) return;
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
                offsetLocation: r,
                target: a,
                scrollTarget: s,
                index: l,
                indexPrevious: c,
                limit: {
                  reachedMin: u,
                  reachedMax: d,
                  constrain: p
                },
                options: {
                  loop: m
                }
              } = e, g = "forward" === t.direction ? -1 : 1, v = () => M;
              let h = 0,
                b = 0,
                w = i.get(),
                y = 0,
                E = !1;
              const M = {
                direction: () => b,
                duration: () => -1,
                velocity: () => h,
                settled: () => E,
                seek: function() {
                  let e = 0;
                  o.set(i), h = g * t.speed, w += h, i.add(h), a.set(i), e = w - y, b = Math.sign(e), y = w;
                  const v = s.byDistance(0, !1).index;
                  l.get() !== v && (c.set(l.get()), l.set(v), n.emit("select"));
                  const x = "forward" === t.direction ? u(r.get()) : d(r.get());
                  if (!m && x) {
                    E = !0;
                    const e = p(i.get());
                    i.set(e), a.set(i), f()
                  }
                  return M
                },
                useBaseFriction: v,
                useBaseDuration: v,
                useFriction: v,
                useDuration: v
              };
              return M
            }(e), e.animation.start()
          }, a), c = !0
        }

        function f() {
          if (r) return;
          if (!c) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = s, t.clearTimeout(l), l = 0, c = !1
        }

        function p() {
          u || f()
        }

        function m() {
          u || b()
        }

        function g() {
          u = !0, f()
        }

        function v() {
          u = !1, d()
        }

        function h() {
          n.off("settle", h), d()
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
              mergeOptions: u,
              optionsAtMedia: h
            } = c, b = u(i, o.globalOptions), w = u(b, e);
            if (t = h(w), n.scrollSnapList().length <= 1) return;
            a = t.startDelay, r = !1, s = n.internalEngine().scrollBody;
            const {
              eventStore: y
            } = n.internalEngine(), E = !!n.internalEngine().options.watchDrag, M = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            E && n.on("pointerDown", p), E && !t.stopOnInteraction && n.on("pointerUp", m), t.stopOnMouseEnter && y.add(M, "mouseenter", g), t.stopOnMouseEnter && !t.stopOnInteraction && y.add(M, "mouseleave", v), t.stopOnFocusIn && n.on("slideFocusStart", f), t.stopOnFocusIn && !t.stopOnInteraction && y.add(n.containerNode(), "focusout", d), t.playOnInit && d()
          },
          destroy: function() {
            n.off("pointerDown", p).off("pointerUp", m).off("slideFocusStart", f).off("settle", h), f(), r = !0, c = !1
          },
          play: function(e) {
            void 0 !== e && (a = e), d()
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
    45272(e, t, n) {
      n.d(t, {
        fp: () => g
      });
      var i = n(93082),
        o = n(37484),
        r = n(71999);
      const a = (0, i.createContext)(void 0);

      function s(e) {
        const t = (0, i.useContext)(a);
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
        u = i.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (c(e), e)
        }),
        d = new WeakMap,
        f = (e, t, n) => {
          const i = (0, r.h7)(e),
            o = i[26];
          let a = d.get(t);
          return a || (a = new Promise((r, s) => {
            let c = t;
            const u = e => t => {
                c === e && r(t)
              },
              f = e => t => {
                c === e && s(t)
              },
              p = () => {
                try {
                  const t = n();
                  l(t) ? (d.set(t, a), c = t, t.then(u(t), f(t)), o(i, e, t, p)) : r(t)
                } catch (e) {
                  s(e)
                }
              };
            t.then(u(t), f(t)), o(i, e, t, p)
          }), d.set(t, a)), a
        };

      function p(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: o = !i.use
        } = t || {}, r = s(t), [
          [a, d, p], m
        ] = (0, i.useReducer)(t => {
          const n = r.get(e);
          return Object.is(t[0], n) && t[1] === r && t[2] === e ? t : [n, r, e]
        }, void 0, () => [r.get(e), r, e]);
        let g = a;
        if (d === r && p === e || (m(), g = r.get(e)), (0, i.useEffect)(() => {
            const t = r.sub(e, () => {
              if (o) try {
                const t = r.get(e);
                l(t) && c(f(r, t, () => r.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(m, n);
              m()
            });
            return m(), t
          }, [r, e, n, o]), (0, i.useDebugValue)(g), l(g)) {
          const t = f(r, g, () => r.get(e));
          return o && c(t), u(t)
        }
        return g
      }

      function m(e, t) {
        const n = s(t);
        return (0, i.useCallback)((...t) => {
          if (!("write" in e)) throw new Error("not writable atom");
          return n.set(e, ...t)
        }, [n, e])
      }

      function g(e, t) {
        return [p(e, t), m(e, t)]
      }
    },
    37484(e, t, n) {
      n.d(t, {
        eU: () => a,
        zp: () => c
      });
      var i = n(71999);
      let o, r = 0;

      function a(e, t) {
        const n = "atom" + ++r,
          i = {
            toString() {
              return this.debugLabel ? n + ":" + this.debugLabel : n
            }
          };
        return "function" == typeof e ? i.read = e : (i.init = e, i.read = s, i.write = l), t && (i.write = t), i
      }

      function s(e) {
        return e(this)
      }

      function l(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function c() {
        return o || (o = (0, i._b)(), globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = o), globalThis.__JOTAI_DEFAULT_STORE__ !== o && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")), o
      }
    },
    71999(e, t, n) {
      function i(e) {
        return "init" in e
      }

      function o(e) {
        return "function" == typeof e.write
      }

      function r(e) {
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
          const i = () => n.p.delete(e);
          t.then(i, i)
        }
      }

      function c(e, t, n) {
        const i = n.get(e),
          o = null == i ? void 0 : i.t,
          r = t.p;
        if (!(null == o ? void 0 : o.size)) return r;
        if (!r.size) return o;
        const a = new Set(o);
        for (const e of r) a.add(e);
        return a
      }
      n.d(t, {
        _b: () => _,
        h7: () => P
      });
      const u = (e, t, n, ...i) => n.read(...i),
        d = (e, t, n, ...i) => n.write(...i),
        f = (e, t, n) => n.INTERNAL_onInit(t),
        p = (e, t, n, i) => {
          var o;
          return null == (o = n.onMount) ? void 0 : o.call(n, i)
        },
        m = (e, t, n) => {
          var i;
          const o = e[0];
          let r = o.get(n);
          if (!r) {
            const a = e[6],
              s = e[9];
            r = {
                d: new Map,
                p: new Set,
                n: 0
              }, o.set(n, r), null == (i = a.i) || i.call(a, n),
              function(e) {
                return !!e.INTERNAL_onInit
              }(n) && s(e, t, n)
          }
          return r
        },
        g = (e, t) => {
          var n;
          const i = e[1],
            o = e[3],
            r = e[4],
            a = e[5],
            s = e[6],
            l = e[13];
          if (!(s.f || o.size || r.size || a.size)) return;
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
            const c = new Set;
            for (const e of o) {
              const t = null == (n = i.get(e)) ? void 0 : n.l;
              if (t)
                for (const e of t) c.add(e)
            }
            o.clear();
            for (const e of a) c.add(e);
            a.clear();
            for (const e of r) c.add(e);
            r.clear();
            for (const e of c) u(e);
            o.size && l(e, t)
          } while (o.size || a.size || r.size);
          if (c.length) throw new AggregateError(c)
        },
        v = (e, t) => {
          const n = e[1],
            i = e[2],
            o = e[3],
            r = e[11],
            a = e[14],
            s = e[17];
          if (!o.size) return;
          const l = [],
            u = [],
            d = new WeakSet,
            f = new WeakSet,
            p = [],
            m = [];
          for (const n of o) p.push(n), m.push(r(e, t, n));
          for (; p.length;) {
            const o = p.length - 1,
              a = p[o],
              s = m[o];
            if (f.has(a)) p.pop(), m.pop();
            else if (d.has(a)) {
              if (i.get(a) === s.n) l.push(a), u.push(s);
              else if (i.has(a)) throw new Error("[Bug] invalidated atom exists");
              f.add(a), p.pop(), m.pop()
            } else {
              d.add(a);
              for (const i of c(a, s, n)) d.has(i) || (p.push(i), m.push(r(e, t, i)))
            }
          }
          for (let n = l.length - 1; n >= 0; --n) {
            const r = l[n],
              c = u[n];
            let d = !1;
            for (const e of c.d.keys())
              if (e !== r && o.has(e)) {
                d = !0;
                break
              } d && (i.set(r, c.n), a(e, t, r), s(e, t, r)), i.delete(r)
          }
        },
        h = new WeakSet,
        b = (e, t, n) => {
          var c, u;
          const d = e[1],
            f = e[2],
            p = e[3],
            m = e[6],
            g = e[7],
            v = e[11],
            b = e[12],
            w = e[13],
            y = e[14],
            E = e[16],
            M = e[17],
            x = e[20],
            S = e[26],
            D = e[28],
            A = v(e, t, n),
            O = D[0];
          if (r(A)) {
            if (d.has(n) && f.get(n) !== A.n || A.m === O) return A.m = O, A;
            let i = !1;
            for (const [n, o] of A.d)
              if (y(e, t, n).n !== o) {
                i = !0;
                break
              } if (!i) return A.m = O, A
          }
          let k = !0;
          const T = new Set(A.d.keys()),
            L = () => {
              for (const e of T) A.d.delete(e)
            },
            P = () => {
              if (d.has(n)) {
                const i = !p.size;
                M(e, t, n), i && (w(e, t), b(e, t))
              }
            },
            _ = o => {
              var c;
              if (o === n) {
                const n = v(e, t, o);
                if (!r(n)) {
                  if (!i(o)) throw new Error("no atom init");
                  x(e, t, o, o.init)
                }
                return a(n)
              }
              const u = y(e, t, o);
              try {
                return a(u)
              } finally {
                T.delete(o), A.d.set(o, u.n), s(A.v) && l(n, A.v, u), d.has(n) && (null == (c = d.get(o)) || c.t.add(n)), k || P()
              }
            };
          let j, C;
          const I = {
              get signal() {
                return j || (j = new AbortController), j.signal
              },
              get setSelf() {
                return console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), o(n) || console.warn("setSelf function cannot be used with read-only atom"), !C && o(n) && (C = (...i) => {
                  if (k && console.warn("setSelf function cannot be called in sync"), !k) try {
                    return E(e, t, n, i)
                  } finally {
                    w(e, t), b(e, t)
                  }
                }), C
              }
            },
            N = A.n,
            R = f.get(n) === N;
          try {
            h.delete(t);
            const i = g(e, t, n, _, I);
            if (h.has(t) && console.warn("Detected store mutation during atom read. This is not supported."), x(e, t, n, i), s(i)) {
              S(e, t, i, () => null == j ? void 0 : j.abort());
              const n = () => {
                L(), P()
              };
              i.then(n, n)
            } else L();
            return null == (c = m.r) || c.call(m, n), A.m = O, A
          } catch (e) {
            if (function(e) {
                if (!(e instanceof Error)) return !1;
                const t = e.name,
                  n = e.message.toLowerCase();
                return ("RangeError" === t || "InternalError" === t) && (n.includes("call stack") || n.includes("too much recursion") || n.includes("stack overflow"))
              }(e)) throw e;
            return delete A.v, A.e = e, ++A.n, A.m = O, A
          } finally {
            k = !1, A.n !== N && R && (f.set(n, A.n), p.add(n), null == (u = m.c) || u.call(m, n))
          }
        },
        w = (e, t, n) => {
          const i = e[1],
            o = e[2],
            r = e[11],
            a = [n];
          for (; a.length;) {
            const n = a.pop(),
              s = r(e, t, n);
            for (const l of c(n, s, i)) {
              const n = r(e, t, l);
              o.get(l) !== n.n && (o.set(l, n.n), a.push(l))
            }
          }
        },
        y = (e, t, n, o) => {
          const r = e[3],
            s = e[6],
            l = e[8],
            c = e[11],
            u = e[12],
            d = e[13],
            f = e[14],
            p = e[15],
            m = e[16],
            g = e[17],
            v = e[20],
            b = e[28];
          let w = !0;
          const y = n => a(f(e, t, n)),
            E = (o, ...a) => {
              var l;
              const f = c(e, t, o);
              try {
                if (o === n) {
                  if (!i(o)) throw new Error("atom not writable");
                  h.add(t);
                  const n = f.n,
                    c = a[0];
                  return v(e, t, o, c), g(e, t, o), void(n !== f.n && (++b[0], r.add(o), p(e, t, o), null == (l = s.c) || l.call(s, o)))
                }
                return m(e, t, o, a)
              } finally {
                w || (d(e, t), u(e, t))
              }
            };
          try {
            return l(e, t, n, y, E, ...o)
          } finally {
            w = !1
          }
        },
        E = (e, t, n) => {
          var i;
          const o = e[1],
            r = e[3],
            a = e[6],
            s = e[11],
            l = e[15],
            c = e[18],
            u = e[19],
            d = s(e, t, n),
            f = o.get(n);
          if (f && d.d.size > 0) {
            for (const [o, u] of d.d)
              if (!f.d.has(o)) {
                const d = s(e, t, o);
                c(e, t, o).t.add(n), f.d.add(o), u !== d.n && (r.add(o), l(e, t, o), null == (i = a.c) || i.call(a, o))
              } for (const i of f.d)
              if (!d.d.has(i)) {
                f.d.delete(i);
                const o = u(e, t, i);
                null == o || o.t.delete(n)
              }
          }
        },
        M = (e, t, n) => {
          var i;
          const r = e[1],
            a = e[4],
            s = e[6],
            l = e[10],
            c = e[11],
            u = e[12],
            d = e[13],
            f = e[14],
            p = e[16],
            m = e[18],
            g = c(e, t, n);
          let v = r.get(n);
          if (!v) {
            f(e, t, n);
            for (const i of g.d.keys()) m(e, t, i).t.add(n);
            if (v = {
                l: new Set,
                d: new Set(g.d.keys()),
                t: new Set
              }, r.set(n, v), o(n) && function(e) {
                return !!e.onMount
              }(n)) {
              const i = () => {
                let i = !0;
                const o = (...o) => {
                  try {
                    return p(e, t, n, o)
                  } finally {
                    i || (d(e, t), u(e, t))
                  }
                };
                try {
                  const r = l(e, t, n, o);
                  r && (v.u = () => {
                    i = !0;
                    try {
                      r()
                    } finally {
                      i = !1
                    }
                  })
                } finally {
                  i = !1
                }
              };
              a.add(i)
            }
            null == (i = s.m) || i.call(s, n)
          }
          return v
        },
        x = (e, t, n) => {
          var i, o;
          const r = e[1],
            a = e[5],
            s = e[6],
            l = e[11],
            c = e[19],
            u = l(e, t, n);
          let d = r.get(n);
          if (!d || d.l.size) return d;
          let f = !1;
          for (const e of d.t)
            if (null == (i = r.get(e)) ? void 0 : i.d.has(n)) {
              f = !0;
              break
            } if (f) return d;
          d.u && a.add(d.u), d = void 0, r.delete(n);
          for (const i of u.d.keys()) {
            const o = c(e, t, i);
            null == o || o.t.delete(n)
          }
          null == (o = s.u) || o.call(s, n)
        },
        S = (e, t, n, i) => {
          const o = e[11],
            r = e[27],
            a = o(e, t, n),
            c = "v" in a,
            u = a.v;
          if (s(i))
            for (const r of a.d.keys()) l(n, i, o(e, t, r));
          a.v = i, delete a.e, c && Object.is(u, a.v) || (++a.n, s(u) && r(e, t, u))
        },
        D = (e, t, n) => a((0, e[14])(e, t, n)),
        A = (e, t, n, ...i) => {
          const o = e[3],
            r = e[12],
            a = e[13],
            s = e[16],
            l = o.size;
          try {
            return s(e, t, n, i)
          } finally {
            o.size !== l && (a(e, t), r(e, t))
          }
        },
        O = (e, t, n, i) => {
          const o = e[12],
            r = e[18],
            a = e[19],
            s = r(e, t, n).l;
          return s.add(i), o(e, t), () => {
            s.delete(i), a(e, t, n), o(e, t)
          }
        },
        k = (e, t, n, i) => {
          const o = e[25];
          let r = o.get(n);
          if (!r) {
            r = new Set, o.set(n, r);
            const e = () => o.delete(n);
            n.then(e, e)
          }
          r.add(i)
        },
        T = (e, t, n) => {
          const i = e[25].get(n);
          null == i || i.forEach(e => e())
        },
        L = new WeakMap;

      function P(e) {
        const t = L.get(e);
        if (!t) throw new Error("Store must be created by buildStore to read its building blocks");
        const n = t[24];
        return n ? n(t, e) : t
      }

      function _(...e) {
        const t = {
            get: e => i(n, t, e),
            set: (e, ...i) => o(n, t, e, ...i),
            sub: (e, i) => r(n, t, e, i)
          },
          n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, u, d, f, p, m, g, v, b, w, y, E, M, x, S, D, A, O, void 0, new WeakMap, k, T, [0]].map((t, n) => e[n] || t);
        L.set(t, Object.freeze(n));
        const i = n[21],
          o = n[22],
          r = n[23];
        return t
      }
    },
    80135(e, t, n) {
      n.d(t, {
        A: () => c
      });
      var i = Math.ceil,
        o = Math.max;
      var r = n(33465),
        a = n(82486),
        s = 1 / 0;
      const l = function(e) {
          return e ? (e = (0, a.A)(e)) === s || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        c = function(e, t, n) {
          return n && "number" != typeof n && (0, r.A)(e, t, n) && (t = n = void 0), e = l(e), void 0 === t ? (t = e, e = 0) : t = l(t),
            function(e, t, n, r) {
              for (var a = -1, s = o(i((t - e) / (n || 1)), 0), l = Array(s); s--;) l[r ? s : ++a] = e, e += n;
              return l
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : l(n), void 0)
        }
    },
    15437(e, t, n) {
      n.d(t, {
        A: () => a
      });
      var i = n(37015);

      function o(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      var r = n(20212);

      function a(e) {
        let {
          swiper: t,
          extendParams: n,
          on: a
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
          u = (new Date).getTime();

        function d(e) {
          const t = c;
          0 !== t.length && (0, r.s)(t, e)
        }

        function f(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function p(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function m(e, t) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("role", t)
          })
        }

        function g(e, t) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", t)
          })
        }

        function v(e, t) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-label", t)
          })
        }

        function h(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function b(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function w(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const n = t.params.a11y,
            i = e.target;
          if (!t.pagination || !t.pagination.el || i !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(o(t.params.pagination.bulletClass))) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = (0, r.m)(t.navigation.prevEl);
              (0, r.m)(t.navigation.nextEl).includes(i) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(n.lastSlideMessage) : d(n.nextSlideMessage)), e.includes(i) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(n.firstSlideMessage) : d(n.prevSlideMessage))
            }
            t.pagination && i.matches(o(t.params.pagination.bulletClass)) && i.click()
          }
        }

        function y() {
          return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function E() {
          return y() && t.params.pagination.clickable
        }
        const M = (e, t, n) => {
            f(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", w)), v(e, n),
              function(e, t) {
                (e = (0, r.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", t)
                })
              }(e, t)
          },
          x = e => {
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
            u = (new Date).getTime()
          },
          A = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - u < 100) return;
            const n = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!n || !t.slides.includes(n)) return;
            l = n;
            const i = t.slides.indexOf(n) === t.activeIndex,
              o = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
            i || o || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
              s || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(n.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(n)), 0), s = !1)
            }))
          },
          O = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && g(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
            const n = t.slides.length;
            e.slideLabelMessage && t.slides.forEach((i, o) => {
              const r = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : o;
              v(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, n))
            })
          };
        a("beforeInit", () => {
          c = (0, r.c)("span", t.params.a11y.notificationClass), c.setAttribute("aria-live", "assertive"), c.setAttribute("aria-atomic", "true")
        }), a("afterInit", () => {
          t.params.a11y.enabled && (() => {
            const e = t.params.a11y;
            t.el.append(c);
            const n = t.el;
            e.containerRoleDescriptionMessage && g(n, e.containerRoleDescriptionMessage), e.containerMessage && v(n, e.containerMessage), e.containerRole && m(n, e.containerRole);
            const o = t.wrapperEl,
              a = e.id || o.getAttribute("id") || `swiper-wrapper-${s=16,void 0===s&&(s=16),"x".repeat(s).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var s;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var u, d;
            u = o, d = a, (u = (0, r.m)(u)).forEach(e => {
                e.setAttribute("id", d)
              }),
              function(e, t) {
                (e = (0, r.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", t)
                })
              }(o, l), O();
            let {
              nextEl: f,
              prevEl: p
            } = t.navigation ? t.navigation : {};
            f = (0, r.m)(f), p = (0, r.m)(p), f && f.forEach(t => M(t, a, e.nextSlideMessage)), p && p.forEach(t => M(t, a, e.prevSlideMessage)), E() && (0, r.m)(t.pagination.el).forEach(e => {
              e.addEventListener("keydown", w)
            }), (0, i.g)().addEventListener("visibilitychange", D), t.el.addEventListener("focus", A, !0), t.el.addEventListener("focus", A, !0), t.el.addEventListener("pointerdown", x, !0), t.el.addEventListener("pointerup", S, !0)
          })()
        }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && O()
        }), a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled && function() {
            if (t.params.loop || t.params.rewind || !t.navigation) return;
            const {
              nextEl: e,
              prevEl: n
            } = t.navigation;
            n && (t.isBeginning ? (h(n), p(n)) : (b(n), f(n))), e && (t.isEnd ? (h(e), p(e)) : (b(e), f(e)))
          }()
        }), a("paginationUpdate", () => {
          t.params.a11y.enabled && function() {
            const e = t.params.a11y;
            y() && t.pagination.bullets.forEach(n => {
              t.params.pagination.clickable && (f(n), t.params.pagination.renderBullet || (m(n, "button"), v(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, r.i)(n) + 1)))), n.matches(o(t.params.pagination.bulletActiveClass)) ? n.setAttribute("aria-current", "true") : n.removeAttribute("aria-current")
            })
          }()
        }), a("destroy", () => {
          t.params.a11y.enabled && function() {
            c && c.remove();
            let {
              nextEl: e,
              prevEl: n
            } = t.navigation ? t.navigation : {};
            e = (0, r.m)(e), n = (0, r.m)(n), e && e.forEach(e => e.removeEventListener("keydown", w)), n && n.forEach(e => e.removeEventListener("keydown", w)), E() && (0, r.m)(t.pagination.el).forEach(e => {
              e.removeEventListener("keydown", w)
            }), (0, i.g)().removeEventListener("visibilitychange", D), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", A, !0), t.el.removeEventListener("pointerdown", x, !0), t.el.removeEventListener("pointerup", S, !0))
          }()
        })
      }
    }
  }
]);