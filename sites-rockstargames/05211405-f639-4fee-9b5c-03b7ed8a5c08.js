! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "05211405-f639-4fee-9b5c-03b7ed8a5c08", t._sentryDebugIdIdentifier = "sentry-dbid-05211405-f639-4fee-9b5c-03b7ed8a5c08")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5595, 6632, 5933], {
    31190: (t, e, r) => {
      "use strict";
      var n = r(79493);
      e.H = n.createRoot, n.hydrateRoot
    },
    72006: (t, e, r) => {
      "use strict";
      var n = p(r(21425)),
        i = p(r(61511)),
        a = p(r(53842)),
        s = p(r(19780)),
        o = p(r(25915)),
        l = p(r(40914)),
        u = p(r(71403)),
        h = p(r(39516)),
        c = p(r(67505));

      function p(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var f = function(t) {
        function e() {
          var t, r, n, s;
          (0, a.default)(this, e);
          for (var l = arguments.length, u = Array(l), h = 0; h < l; h++) u[h] = arguments[h];
          return r = n = (0, o.default)(this, (t = e.__proto__ || (0, i.default)(e)).call.apply(t, [this].concat(u))), n.handleClickToPause = function() {
            n.anim.isPaused ? n.anim.play() : n.anim.pause()
          }, s = r, (0, o.default)(n, s)
        }
        return (0, l.default)(e, t), (0, s.default)(e, [{
          key: "componentDidMount",
          value: function() {
            var t = this.props,
              e = t.options,
              r = t.eventListeners,
              i = e.loop,
              a = e.autoplay,
              s = e.animationData,
              o = e.rendererSettings,
              l = e.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== i,
              autoplay: !1 !== a,
              segments: !1 !== l,
              animationData: s,
              rendererSettings: o
            }, this.options = (0, n.default)({}, this.options, e), this.anim = c.default.loadAnimation(this.options), this.registerEvents(r)
          }
        }, {
          key: "componentWillUpdate",
          value: function(t) {
            this.options.animationData !== t.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, n.default)({}, this.options, t.options), this.anim = c.default.loadAnimation(this.options), this.registerEvents(t.eventListeners))
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(), this.pause(), this.setSpeed(), this.setDirection()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options.animationData = null, this.anim = null
          }
        }, {
          key: "setSpeed",
          value: function() {
            this.anim.setSpeed(this.props.speed)
          }
        }, {
          key: "setDirection",
          value: function() {
            this.anim.setDirection(this.props.direction)
          }
        }, {
          key: "play",
          value: function() {
            this.anim.play()
          }
        }, {
          key: "playSegments",
          value: function() {
            this.anim.playSegments(this.props.segments)
          }
        }, {
          key: "stop",
          value: function() {
            this.anim.stop()
          }
        }, {
          key: "pause",
          value: function() {
            (this.props.isPaused && !this.anim.isPaused || !this.props.isPaused && this.anim.isPaused) && this.anim.pause()
          }
        }, {
          key: "destroy",
          value: function() {
            this.anim.destroy()
          }
        }, {
          key: "registerEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.addEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.removeEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              r = e.width,
              i = e.height,
              a = e.ariaRole,
              s = e.ariaLabel,
              o = e.isClickToPauseDisabled,
              l = e.title,
              h = function(t) {
                return "number" == typeof t ? t + "px" : t || "100%"
              },
              c = (0, n.default)({
                width: h(r),
                height: h(i),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              p = o ? function() {
                return null
              } : this.handleClickToPause;
            return u.default.createElement("div", {
              ref: function(e) {
                t.el = e
              },
              style: c,
              onClick: p,
              title: l,
              role: a,
              "aria-label": s,
              tabIndex: "0"
            })
          }
        }]), e
      }(u.default.Component);
      e.A = f, f.propTypes = {
        eventListeners: h.default.arrayOf(h.default.object),
        options: h.default.object.isRequired,
        height: h.default.oneOfType([h.default.string, h.default.number]),
        width: h.default.oneOfType([h.default.string, h.default.number]),
        isStopped: h.default.bool,
        isPaused: h.default.bool,
        speed: h.default.number,
        segments: h.default.arrayOf(h.default.number),
        direction: h.default.number,
        ariaRole: h.default.string,
        ariaLabel: h.default.string,
        isClickToPauseDisabled: h.default.bool,
        title: h.default.string,
        style: h.default.string
      }, f.defaultProps = {
        eventListeners: [],
        isStopped: !1,
        isPaused: !1,
        speed: 1,
        ariaRole: "button",
        ariaLabel: "animation",
        isClickToPauseDisabled: !1,
        title: ""
      }
    },
    90250: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () => R
      });
      var n = r(80226),
        i = r(71403),
        a = "right-scroll-bar-position",
        s = "width-before-scroll-bar",
        o = r(26208),
        l = (0, r(23496).f)(),
        u = function() {},
        h = i.forwardRef((function(t, e) {
          var r = i.useRef(null),
            a = i.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u
            }),
            s = a[0],
            h = a[1],
            c = t.forwardProps,
            p = t.children,
            f = t.className,
            d = t.removeScrollBar,
            m = t.enabled,
            v = t.shards,
            g = t.sideCar,
            y = t.noIsolation,
            b = t.inert,
            S = t.allowPinchZoom,
            x = t.as,
            E = void 0 === x ? "div" : x,
            _ = t.gapMode,
            w = (0, n.Tt)(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            P = g,
            T = (0, o.S)([r, e]),
            C = (0, n.Cl)((0, n.Cl)({}, w), s);
          return i.createElement(i.Fragment, null, m && i.createElement(P, {
            sideCar: l,
            removeScrollBar: d,
            shards: v,
            noIsolation: y,
            inert: b,
            setCallbacks: h,
            allowPinchZoom: !!S,
            lockRef: r,
            gapMode: _
          }), c ? i.cloneElement(i.Children.only(p), (0, n.Cl)((0, n.Cl)({}, C), {
            ref: T
          })) : i.createElement(E, (0, n.Cl)({}, C, {
            className: f,
            ref: T
          }), p))
        }));
      h.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, h.classNames = {
        fullWidth: s,
        zeroRight: a
      };
      var c = function(t) {
        var e = t.sideCar,
          r = (0, n.Tt)(t, ["sideCar"]);
        if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = e.read();
        if (!a) throw new Error("Sidecar medium not found");
        return i.createElement(a, (0, n.Cl)({}, r))
      };
      c.isSideCarExport = !0;
      var p = function() {
          var t = 0,
            e = null;
          return {
            add: function(n) {
              var i, a;
              0 == t && (e = function() {
                if (!document) return null;
                var t = document.createElement("style");
                t.type = "text/css";
                var e = r.nc;
                return e && t.setAttribute("nonce", e), t
              }()) && (a = n, (i = e).styleSheet ? i.styleSheet.cssText = a : i.appendChild(document.createTextNode(a)), function(t) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
              }(e)), t++
            },
            remove: function() {
              !--t && e && (e.parentNode && e.parentNode.removeChild(e), e = null)
            }
          }
        },
        f = function() {
          var t, e = (t = p(), function(e, r) {
            i.useEffect((function() {
              return t.add(e),
                function() {
                  t.remove()
                }
            }), [e && r])
          });
          return function(t) {
            var r = t.styles,
              n = t.dynamic;
            return e(r, n), null
          }
        },
        d = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(t) {
          return parseInt(t || "", 10) || 0
        },
        v = f(),
        g = function(t, e, r, n) {
          var i = t.left,
            o = t.top,
            l = t.right,
            u = t.gap;
          return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(u, "px ").concat(n, ";\n  }\n  body {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(u, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(u, "px ").concat(n, ";\n  }\n  \n  .").concat(s, " {\n    margin-right: ").concat(u, "px ").concat(n, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        },
        y = function(t) {
          var e = t.noRelative,
            r = t.noImportant,
            n = t.gapMode,
            a = void 0 === n ? "margin" : n,
            s = i.useMemo((function() {
              return function(t) {
                if (void 0 === t && (t = "margin"), "undefined" == typeof window) return d;
                var e = function(t) {
                    var e = window.getComputedStyle(document.body),
                      r = e["padding" === t ? "paddingLeft" : "marginLeft"],
                      n = e["padding" === t ? "paddingTop" : "marginTop"],
                      i = e["padding" === t ? "paddingRight" : "marginRight"];
                    return [m(r), m(n), m(i)]
                  }(t),
                  r = document.documentElement.clientWidth,
                  n = window.innerWidth;
                return {
                  left: e[0],
                  top: e[1],
                  right: e[2],
                  gap: Math.max(0, n - r + e[2] - e[0])
                }
              }(a)
            }), [a]);
          return i.createElement(v, {
            styles: g(s, !e, a, r ? "" : "!important")
          })
        },
        b = !1;
      if ("undefined" != typeof window) try {
        var S = Object.defineProperty({}, "passive", {
          get: function() {
            return b = !0, !0
          }
        });
        window.addEventListener("test", S, S), window.removeEventListener("test", S, S)
      } catch (t) {
        b = !1
      }
      var x = !!b && {
          passive: !1
        },
        E = function(t, e) {
          var r = window.getComputedStyle(t);
          return "hidden" !== r[e] && !(r.overflowY === r.overflowX && ! function(t) {
            return "TEXTAREA" === t.tagName
          }(t) && "visible" === r[e])
        },
        _ = function(t, e) {
          var r = e.ownerDocument,
            n = e;
          do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), w(t, n)) {
              var i = P(t, n);
              if (i[1] > i[2]) return !0
            }
            n = n.parentNode
          } while (n && n !== r.body);
          return !1
        },
        w = function(t, e) {
          return "v" === t ? function(t) {
            return E(t, "overflowY")
          }(e) : function(t) {
            return E(t, "overflowX")
          }(e)
        },
        P = function(t, e) {
          return "v" === t ? [(r = e).scrollTop, r.scrollHeight, r.clientHeight] : function(t) {
            return [t.scrollLeft, t.scrollWidth, t.clientWidth]
          }(e);
          var r
        },
        T = function(t) {
          return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
        },
        C = function(t) {
          return [t.deltaX, t.deltaY]
        },
        A = function(t) {
          return t && "current" in t ? t.current : t
        },
        M = function(t) {
          return "\n  .block-interactivity-".concat(t, " {pointer-events: none;}\n  .allow-interactivity-").concat(t, " {pointer-events: all;}\n")
        },
        k = 0,
        I = [];

      function D(t) {
        for (var e = null; null !== t;) t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
        return e
      }
      const F = (l.useMedium((function(t) {
        var e = i.useRef([]),
          r = i.useRef([0, 0]),
          a = i.useRef(),
          s = i.useState(k++)[0],
          o = i.useState(f)[0],
          l = i.useRef(t);
        i.useEffect((function() {
          l.current = t
        }), [t]), i.useEffect((function() {
          if (t.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var e = (0, n.fX)([t.lockRef.current], (t.shards || []).map(A), !0).filter(Boolean);
            return e.forEach((function(t) {
                return t.classList.add("allow-interactivity-".concat(s))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(s)), e.forEach((function(t) {
                  return t.classList.remove("allow-interactivity-".concat(s))
                }))
              }
          }
        }), [t.inert, t.lockRef.current, t.shards]);
        var u = i.useCallback((function(t, e) {
            if ("touches" in t && 2 === t.touches.length) return !l.current.allowPinchZoom;
            var n, i = T(t),
              s = r.current,
              o = "deltaX" in t ? t.deltaX : s[0] - i[0],
              u = "deltaY" in t ? t.deltaY : s[1] - i[1],
              h = t.target,
              c = Math.abs(o) > Math.abs(u) ? "h" : "v";
            if ("touches" in t && "h" === c && "range" === h.type) return !1;
            var p = _(c, h);
            if (!p) return !0;
            if (p ? n = c : (n = "v" === c ? "h" : "v", p = _(c, h)), !p) return !1;
            if (!a.current && "changedTouches" in t && (o || u) && (a.current = n), !n) return !0;
            var f = a.current || n;
            return function(t, e, r, n, i) {
              var a = function(t, e) {
                  return "h" === t && "rtl" === e ? -1 : 1
                }(t, window.getComputedStyle(e).direction),
                s = a * n,
                o = r.target,
                l = e.contains(o),
                u = !1,
                h = s > 0,
                c = 0,
                p = 0;
              do {
                var f = P(t, o),
                  d = f[0],
                  m = f[1] - f[2] - a * d;
                (d || m) && w(t, o) && (c += m, p += d), o = o instanceof ShadowRoot ? o.host : o.parentNode
              } while (!l && o !== document.body || l && (e.contains(o) || e === o));
              return (h && (i && Math.abs(c) < 1 || !i && s > c) || !h && (i && Math.abs(p) < 1 || !i && -s > p)) && (u = !0), u
            }(f, e, t, "h" === f ? o : u, !0)
          }), []),
          h = i.useCallback((function(t) {
            var r = t;
            if (I.length && I[I.length - 1] === o) {
              var n = "deltaY" in r ? C(r) : T(r),
                i = e.current.filter((function(t) {
                  return t.name === r.type && (t.target === r.target || r.target === t.shadowParent) && (e = t.delta, i = n, e[0] === i[0] && e[1] === i[1]);
                  var e, i
                }))[0];
              if (i && i.should) r.cancelable && r.preventDefault();
              else if (!i) {
                var a = (l.current.shards || []).map(A).filter(Boolean).filter((function(t) {
                  return t.contains(r.target)
                }));
                (a.length > 0 ? u(r, a[0]) : !l.current.noIsolation) && r.cancelable && r.preventDefault()
              }
            }
          }), []),
          c = i.useCallback((function(t, r, n, i) {
            var a = {
              name: t,
              delta: r,
              target: n,
              should: i,
              shadowParent: D(n)
            };
            e.current.push(a), setTimeout((function() {
              e.current = e.current.filter((function(t) {
                return t !== a
              }))
            }), 1)
          }), []),
          p = i.useCallback((function(t) {
            r.current = T(t), a.current = void 0
          }), []),
          d = i.useCallback((function(e) {
            c(e.type, C(e), e.target, u(e, t.lockRef.current))
          }), []),
          m = i.useCallback((function(e) {
            c(e.type, T(e), e.target, u(e, t.lockRef.current))
          }), []);
        i.useEffect((function() {
          return I.push(o), t.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", h, x), document.addEventListener("touchmove", h, x), document.addEventListener("touchstart", p, x),
            function() {
              I = I.filter((function(t) {
                return t !== o
              })), document.removeEventListener("wheel", h, x), document.removeEventListener("touchmove", h, x), document.removeEventListener("touchstart", p, x)
            }
        }), []);
        var v = t.removeScrollBar,
          g = t.inert;
        return i.createElement(i.Fragment, null, g ? i.createElement(o, {
          styles: M(s)
        }) : null, v ? i.createElement(y, {
          gapMode: t.gapMode
        }) : null)
      })), c);
      var O = i.forwardRef((function(t, e) {
        return i.createElement(h, (0, n.Cl)({}, t, {
          ref: e,
          sideCar: F
        }))
      }));
      O.classNames = h.classNames;
      const R = O
    },
    43233: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, r, n) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var i = r.y0,
          a = r.y1,
          s = r.x1,
          o = r.x0,
          l = "%" === a.unit && "%" === i.unit,
          u = i.value,
          h = a.value;
        if (l) {
          var c = e.height / 100;
          u = i.value * c, h = a.value * c
        }
        var p = "%" === s.unit && "%" === o.unit,
          f = o.value,
          d = s.value;
        if (p) {
          var m = e.width / 100;
          f = o.value * m, d = s.value * m
        }
        var v = Math.abs(u) + Math.abs(h);
        this.totalDistY = n.height + e.height + v;
        var g = n.height + e.height + (h > u ? -1 * v : v),
          y = Math.abs(f) + Math.abs(d);
        this.totalDistX = n.width + e.width + y;
        var b = n.width + e.width + (d > f ? -1 * y : y),
          S = e.originTotalDistY / g,
          x = e.originTotalDistX / b;
        this.top = e.top, this.bottom = e.bottom, u < 0 && (this.top = this.top + u * S), h > 0 && (this.bottom = this.bottom + h * S), this.left = e.left, this.right = e.right, f < 0 && (this.left = this.left + f * x), d > 0 && (this.right = this.right + d * x)
      }
    },
    48350: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Element = void 0;
      var n = r(71775),
        i = r(67727),
        a = r(65972),
        s = l(r(43233)),
        o = l(r(84542));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? u(Object(r), !0).forEach((function(e) {
            c(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function c(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      var f = function() {
        function t(e) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.elInner = e.elInner, this.elOuter = e.elOuter, this.props = e.props, this.scrollAxis = e.scrollAxis, this.id = (0, n.createId)(), this.offsets = (0, i.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = e.scrollAxis === a.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var e, r;
        return e = t, (r = [{
          key: "updateProps",
          value: function(t) {
            return this.props = h(h({}, this.props), t), this.offsets = (0, i.getOffsets)(t), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(t, e) {
            return this.rect = new o.default(this.elOuter, t, e), this.bounds = new s.default(this.rect, this.offsets, t), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(t, e) {
            return this.isInView = (0, i.isElementInView)(this.bounds.left, this.bounds.right, t.width, e.x), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.left, this.rect.originTotalDistX, t.width, e.x), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(t, e) {
            return this.isInView = (0, i.isElementInView)(this.bounds.top, this.bounds.bottom, t.height, e.y), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.top, this.rect.originTotalDistY, t.height, e.y), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && p(e.prototype, r), t
      }();
      e.Element = f
    },
    7707: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = r(71775),
        i = r(67727),
        a = r(23745),
        s = r(44093),
        o = r(48350),
        l = r(65972);

      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? h(Object(r), !0).forEach((function(e) {
            p(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function p(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function f(t) {
        var e = t.scrollAxis,
          r = void 0 === e ? l.VERTICAL : e,
          h = t.scrollContainer,
          p = [],
          f = !!h,
          d = h || window,
          m = f ? d.scrollLeft : window.pageXOffset,
          v = f ? d.scrollTop : window.pageYOffset,
          g = new s.Scroll(m, v),
          y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: h
          }),
          b = !1,
          S = (0, n.testForPassiveScroll)();

        function x(t) {
          t.addEventListener("scroll", _, !!S && {
            passive: !0
          }), window.addEventListener("resize", w, !1)
        }

        function E(t) {
          t.removeEventListener("scroll", _, !!S && {
            passive: !0
          }), window.removeEventListener("resize", w, !1)
        }

        function _() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          g.setScroll(t, e), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(P))
        }

        function w() {
          C(), P({
            updateCache: !0
          })
        }

        function P() {
          var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(e) {
            T(e), t && e.setCachedAttributes(y, g)
          })), b = !1
        }

        function T(t) {
          t.props.disabled || t.updatePosition(y, g)
        }

        function C() {
          if (f) {
            var t = d.offsetWidth,
              e = d.offsetHeight;
            return y.setSize(t, e)
          }
          var r = document.documentElement,
            n = window.innerWidth || r.clientWidth,
            i = window.innerHeight || r.clientHeight;
          return y.setSize(n, i)
        }
        x(d), C(), this.getElements = function() {
          return p
        }, this.createElement = function(t) {
          var e, n = new o.Element(c(c({}, t), {}, {
            scrollAxis: r
          }));
          return n.setCachedAttributes(y, g), p = p ? [].concat(function(t) {
            if (Array.isArray(t)) return u(t)
          }(e = p) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return u(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [n]) : [n], T(n), n
        }, this.removeElementById = function(t) {
          p && (p = p.filter((function(e) {
            return e.id !== t
          })))
        }, this.updateElementPropsById = function(t, e) {
          p && (p = p.map((function(r) {
            return r.id === t ? r.updateProps(e) : r
          }))), this.update()
        }, this.resetElementStyles = function(t) {
          (0, i.resetStyles)(t)
        }, this.update = function() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          g.setScroll(t, e), C(), P({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(t) {
          E(d), d = t, f = !!t, y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: t
          }), C(), x(d), P({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(d), p && p.forEach((function(t) {
            return (0, i.resetStyles)(t)
          })), p = void 0
        }
      }
      f.init = function(t) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new f(t)
      };
      var d = f;
      e.default = d
    },
    84542: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, r, n) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var i = e.getBoundingClientRect();
        if (r.scrollContainer) {
          var a = r.scrollContainer.getBoundingClientRect();
          i = {
            top: i.top - a.top,
            right: i.right - a.left,
            bottom: i.bottom - a.top,
            left: i.left - a.left
          }
        }
        this.height = e.offsetHeight, this.width = e.offsetWidth, this.left = i.left + n.x, this.right = i.right + n.x, this.top = i.top + n.y, this.bottom = i.bottom + n.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    44093: (t, e) => {
      "use strict";

      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Scroll = void 0;
      var n = function() {
        function t() {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.setScroll.apply(this, arguments)
        }
        var e, n;
        return e = t, (n = [{
          key: "setScroll",
          value: function(t, e) {
            return this.x = t, this.y = e, this
          }
        }]) && r(e.prototype, n), t
      }();
      e.Scroll = n
    },
    23745: (t, e) => {
      "use strict";

      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.View = void 0;
      var n = function() {
        function t(e) {
          var r = e.width,
            n = e.height,
            i = e.scrollContainer;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.scrollContainer = i, this.setSize(r, n)
        }
        var e, n;
        return e = t, (n = [{
          key: "setSize",
          value: function(t, e) {
            return this.width = t, this.height = e, this
          }
        }]) && r(e.prototype, n), t
      }();
      e.View = n
    },
    91007: (t, e, r) => {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== n(t) && "function" != typeof t) return {
            default: t
          };
          var e = u();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(71403)),
        a = l(r(39516)),
        s = l(r(7707)),
        o = l(r(57320));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function u() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return u = function() {
          return t
        }, t
      }

      function h(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function f(t) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
      }

      function d(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var m = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && c(t, e)
        }(u, t);
        var e, r, a, o, l = (a = u, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = f(a);
          if (o) {
            var r = f(this).constructor;
            t = Reflect.construct(e, arguments, r)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? p(t) : e
          }(this, t)
        });

        function u() {
          var t;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, u);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          return d(p(t = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(e) {
            t._outer = e
          })), d(p(t), "mapRefInner", (function(e) {
            t._inner = e
          })), t
        }
        return e = u, (r = [{
          key: "componentDidMount",
          value: function() {
            var t = this.controller instanceof s.default;
            if (!this.controller && !t) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.props.disabled === t.disabled && this.props.x[0] === t.x[0] && this.props.x[1] === t.x[1] && this.props.y[0] === t.y[0] && this.props.y[1] === t.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== t.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller.removeElementById(this.element.id)
          }
        }, {
          key: "_getElementOptions",
          value: function() {
            return {
              elInner: this._inner,
              elOuter: this._outer,
              props: {
                disabled: this.props.disabled,
                x0: this.props.x[0],
                x1: this.props.x[1],
                y0: this.props.y[0],
                y1: this.props.y[1]
              }
            }
          }
        }, {
          key: "controller",
          get: function() {
            return this.props.parallaxController
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props,
              e = t.children,
              r = t.className,
              n = t.tagOuter,
              a = t.tagInner,
              s = t.styleOuter,
              o = t.styleInner,
              l = "parallax-outer" + (r ? " ".concat(r) : "");
            return i.default.createElement(n, {
              className: l,
              ref: this.mapRefOuter,
              style: s
            }, i.default.createElement(a, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, e))
          }
        }]) && h(e.prototype, r), u
      }(i.Component);
      d(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), d(m, "propTypes", {
        children: a.default.node,
        className: a.default.string,
        disabled: a.default.bool.isRequired,
        parallaxController: a.default.object,
        styleInner: a.default.object,
        styleOuter: a.default.object,
        tagInner: a.default.string.isRequired,
        tagOuter: a.default.string.isRequired,
        x: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number])),
        y: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number]))
      });
      var v = (0, o.default)(m);
      e.default = v
    },
    33569: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = s(r(71403)),
        i = s(r(39516)),
        a = s(r(91007));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function o() {
        return o = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, o.apply(this, arguments)
      }

      function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(r), !0).forEach((function(e) {
            h(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function h(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var c = {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "50vh"
        },
        p = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        f = function(t) {
          var e = t.children,
            r = t.className,
            i = t.layers,
            s = t.style,
            l = t.disabled;
          return n.default.createElement("div", {
            style: u(u({}, c), s),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, i.map((function(t, e) {
            var r = t.amount,
              i = t.children,
              s = t.expanded,
              h = void 0 === s || s,
              c = t.image,
              f = t.props,
              d = void 0 === f ? {} : f,
              m = d.style || {},
              v = d.className || "";
            delete d.style, delete d.className;
            var g = "parallax-banner-layer-".concat(e).concat(v ? " ".concat(v) : ""),
              y = h ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              b = c ? {
                backgroundImage: "url(".concat(c, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return n.default.createElement(a.default, {
              key: "layer-".concat(e),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: p,
              styleOuter: p,
              disabled: l
            }, n.default.createElement("div", o({
              className: g,
              style: u(u(u(u({}, b), p), y), m)
            }, d), i))
          })), e)
        };
      f.defaultProps = {
        disabled: !1
      }, f.propTypes = {
        children: i.default.node,
        className: i.default.string,
        disabled: i.default.bool.isRequired,
        layers: i.default.arrayOf(i.default.shape({
          amount: i.default.number.isRequired,
          children: i.default.oneOfType([i.default.node, i.default.func]),
          expanded: i.default.bool,
          image: i.default.string,
          props: i.default.object
        })),
        style: i.default.object
      };
      var d = f;
      e.default = d
    },
    34686: (t, e, r) => {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== n(t) && "function" != typeof t) return {
            default: t
          };
          var e = c();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(71403)),
        a = h(r(39516)),
        s = h(r(52949)),
        o = h(r(7707)),
        l = r(65972),
        u = h(r(67094));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function c() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return c = function() {
          return t
        }, t
      }

      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function f(t, e) {
        return f = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, f(t, e)
      }

      function d(t) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, d(t)
      }

      function m(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var v = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && f(t, e)
        }(h, t);
        var e, r, a, l, u = (a = h, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = d(a);
          if (l) {
            var r = d(this).constructor;
            t = Reflect.construct(e, arguments, r)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t) : e
          }(this, t)
        });

        function h(t) {
          var e, r;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, h), (e = u.call(this, t)).controller = (r = {
            scrollAxis: t.scrollAxis,
            scrollContainer: t.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), e
        }
        return e = h, (r = [{
          key: "componentDidUpdate",
          value: function(t) {
            t.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props.children;
            return i.default.createElement(s.default.Provider, {
              value: this.controller
            }, t)
          }
        }]) && p(e.prototype, r), h
      }(i.Component);
      e.default = v, m(v, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(v, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: u.default
      })
    },
    91297: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n, i = r(71403),
        a = (n = r(52949)) && n.__esModule ? n : {
          default: n
        };
      e.default = function() {
        var t = (0, i.useContext)(a.default);
        if ("undefined" == typeof window) return null;
        if (!t) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: t
        }
      }
    },
    57320: (t, e, r) => {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== n(t) && "function" != typeof t) return {
            default: t
          };
          var e = l();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(71403)),
        a = o(r(39516)),
        s = o(r(52949));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return l = function() {
          return t
        }, t
      }

      function u() {
        return u = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, u.apply(this, arguments)
      }

      function h(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, p(t)
      }
      e.default = function(t) {
        var e, r, o, l = function(e) {
          ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && c(t, e)
          }(d, e);
          var r, a, o, l, f = (o = d, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }(), function() {
            var t, e = p(o);
            if (l) {
              var r = p(this).constructor;
              t = Reflect.construct(e, arguments, r)
            } else t = e.apply(this, arguments);
            return function(t, e) {
              return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
              }(t) : e
            }(this, t)
          });

          function d() {
            return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, d), f.apply(this, arguments)
          }
          return r = d, (a = [{
            key: "render",
            value: function() {
              var e = this;
              return i.default.createElement(s.default.Consumer, null, (function(r) {
                return i.default.createElement(t, u({
                  parallaxController: r
                }, e.props))
              }))
            }
          }]) && h(r.prototype, a), d
        }(i.Component);
        return e = l, r = "propTypes", o = {
          parallaxController: a.default.object
        }, r in e ? Object.defineProperty(e, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = o, l
      }
    },
    65972: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.HORIZONTAL = e.VERTICAL = void 0, e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal"
    },
    52949: (t, e, r) => {
      "use strict";
      var n;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = ((n = r(71403)) && n.__esModule ? n : {
        default: n
      }).default.createContext(null);
      e.default = i
    },
    92505: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.setParallaxStyles = function(t, e, r) {
        var i = (0, n.getParallaxOffsets)(e, r),
          a = i.x,
          s = a.value,
          o = a.unit,
          l = i.y,
          u = l.value,
          h = l.unit;
        t.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(u).concat(h, ", 0)")
      }, e.resetStyles = function(t) {
        t.elInner.style.transform = ""
      };
      var n = r(51006)
    },
    60943: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = t.y0,
          r = t.y1,
          i = t.x1,
          a = t.x0,
          s = (0, n.parseValueAndUnit)(e),
          o = (0, n.parseValueAndUnit)(r),
          l = (0, n.parseValueAndUnit)(a),
          u = (0, n.parseValueAndUnit)(i);
        if (l.unit !== u.unit || s.unit !== o.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: l.unit || "%",
          yUnit: s.unit || "%",
          y0: s,
          y1: o,
          x0: l,
          x1: u
        }
      };
      var n = r(71775)
    },
    51006: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.getParallaxOffsets = function(t, e) {
        var r = t.y0,
          i = t.y1,
          a = t.x0,
          s = t.x1,
          o = i.unit,
          l = s.unit;
        return {
          x: {
            value: (0, n.scaleBetween)(e, a.value, s.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, n.scaleBetween)(e, r.value, i.value, 0, 100),
            unit: o
          }
        }
      };
      var n = r(71775)
    },
    67727: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "percentMoved", {
        enumerable: !0,
        get: function() {
          return i.percentMoved
        }
      }), Object.defineProperty(e, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return a.setParallaxStyles
        }
      }), Object.defineProperty(e, "resetStyles", {
        enumerable: !0,
        get: function() {
          return a.resetStyles
        }
      }), Object.defineProperty(e, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return s.getParallaxOffsets
        }
      }), Object.defineProperty(e, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(e, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var n = u(r(52949)),
        i = r(32079),
        a = r(92505),
        s = r(51006),
        o = r(40649),
        l = u(r(60943));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    40649: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.isElementInView = function(t, e, r, n) {
        var i = t - n,
          a = e - n;
        return i >= 0 && i <= r || a >= 0 && a <= r || i <= 0 && a >= r
      }
    },
    32079: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.percentMoved = function(t, e, r, n) {
        return (-1 * (t - n) + r) / e * 100
      }
    },
    31805: (t, e, r) => {
      "use strict";
      n(r(91297)), n(r(57320)), n(r(91007)), n(r(34686)), n(r(33569)), n(r(52949));

      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    75070: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.createId = function() {
        return ++r
      };
      var r = 0
    },
    71775: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(e, "createId", {
        enumerable: !0,
        get: function() {
          return s.createId
        }
      });
      var n = o(r(25088)),
        i = o(r(8793)),
        a = o(r(53722)),
        s = r(75070);

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    25088: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (t = String(t), e.value = parseFloat(t, 10), e.unit = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(t) {
            return t === e.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return e
      }
    },
    8793: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e, r, n, i) {
        return (r - e) * (t - n) / (i - n) + e
      }
    },
    53722: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0
            }
          });
          window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {}
        return t
      }
    },
    67094: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !t[e] || t[e] instanceof window.Element ? null : new Error('Prop name "'.concat(e, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    67366: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        },
        i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        }(),
        a = f(r(71403)),
        s = f(r(39516)),
        o = f(r(52696)),
        l = f(r(51901)),
        u = f(r(66785)),
        h = f(r(28512)),
        c = f(r(54518)),
        p = r(75923);

      function f(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function d(t, e) {
        return t.scrollWidth - 1 <= e
      }

      function m(t, e) {
        return t.scrollHeight - 1 <= e
      }
      var v = function(t) {
        function e(t) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in t && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, h.default)(r.handleWindowResize, t.throttle), r
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), i(e, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.state.ready && ((0, o.default)(this.props, t) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, c.default)()
          }
        }, {
          key: "process",
          value: function() {
            var t = this,
              e = this.props,
              r = e.min,
              n = e.max,
              i = e.mode,
              a = e.forceSingleModeWidth,
              s = e.onReady,
              o = this._parent,
              h = this._child,
              f = (0, p.innerWidth)(o),
              v = (0, p.innerHeight)(o);
            if (v <= 0 || isNaN(v)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var g = (0, c.default)();
              this.pid = g;
              var y = function() {
                  return g !== t.pid
                },
                b = "multi" === i ? function() {
                  return m(h, v)
                } : function() {
                  return d(h, f)
                },
                S = "multi" === i ? function() {
                  return d(h, f)
                } : function() {
                  return m(h, v)
                },
                x = void 0,
                E = r,
                _ = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(e) {
                return (0, u.default)((function() {
                  return E <= _
                }), (function(e) {
                  if (y()) return e(!0);
                  x = parseInt((E + _) / 2, 10), t.setState({
                    fontSize: x
                  }, (function() {
                    return y() ? e(!0) : (b() ? E = x + 1 : _ = x - 1, e())
                  }))
                }), e)
              }, function(e) {
                return "single" === i && a || S() ? e() : (E = r, _ = x, (0, u.default)((function() {
                  return E < _
                }), (function(e) {
                  if (y()) return e(!0);
                  x = parseInt((E + _) / 2, 10), t.setState({
                    fontSize: x
                  }, (function() {
                    return g !== t.pid ? e(!0) : (S() ? E = x + 1 : _ = x - 1, e())
                  }))
                }), e))
              }, function(e) {
                if (x = Math.min(E, _), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), y()) return e(!0);
                t.setState({
                  fontSize: x
                }, e)
              }], (function(e) {
                e || y() || t.setState({
                  ready: !0
                }, (function() {
                  return s(x)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              r = e.children,
              i = e.text,
              s = e.style,
              o = (e.min, e.max, e.mode),
              l = (e.forceWidth, e.forceSingleModeWidth, e.throttle, e.autoResize, e.onReady, function(t, e) {
                var r = {};
                for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
                return r
              }(e, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              u = this.state,
              h = u.fontSize,
              c = u.ready,
              p = n({}, s, {
                fontSize: h
              }),
              f = {
                display: c ? "block" : "inline-block"
              };
            return "single" === o && (f.whiteSpace = "nowrap"), a.default.createElement("div", n({
              ref: function(e) {
                return t._parent = e
              },
              style: p
            }, l), a.default.createElement("div", {
              ref: function(e) {
                return t._child = e
              },
              style: f
            }, i && "function" == typeof r ? c ? r(i) : i : r))
          }
        }]), e
      }(a.default.Component);
      v.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
      }, v.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, e.default = v
    },
    64544: (t, e, r) => {
      "use strict";
      var n, i = (n = r(67366)) && n.__esModule ? n : {
        default: n
      };
      i.default, i.default
    },
    75923: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.innerHeight = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientHeight - parseInt(e.getPropertyValue("padding-top"), 10) - parseInt(e.getPropertyValue("padding-bottom"), 10) : t.clientHeight
      }, e.innerWidth = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientWidth - parseInt(e.getPropertyValue("padding-left"), 10) - parseInt(e.getPropertyValue("padding-right"), 10) : t.clientWidth
      }
    },
    51901: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = [],
          n = 0,
          a = !0;

        function s(t) {
          function n() {
            e && e(t, r)
          }
          a ? i.default.nextTick(n) : n()
        }
        t.length > 0 ? t[0]((function e(i, a) {
          r.push(a), ++n >= t.length || i ? s(i) : t[n](e)
        })) : s(null), a = !1
      };
      var n, i = (n = r(90098)) && n.__esModule ? n : {
        default: n
      }
    },
    52696: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        if (t === e) return !0;
        var r = Object.keys(t),
          n = Object.keys(e);
        if (r.length !== n.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, a = 0; a < r.length; a++)
          if (!i.call(e, r[a]) || t[r[a]] !== e[r[a]]) return !1;
        return !0
      }
    },
    28512: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = void 0,
          n = void 0,
          i = void 0,
          a = void 0,
          s = 0;

        function o() {
          a = 0, s = +new Date, i = t.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var t = new Date - s;
          return a || (t >= e ? o() : a = setTimeout(o, e - t)), i
        }
      }
    },
    54518: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        return r++
      };
      var r = 0
    },
    66785: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        t() ? e((function r(i) {
          for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
          i ? n(i) : t.apply(this, s) ? e(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    26208: (t, e, r) => {
      "use strict";
      r.d(e, {
        S: () => i
      });
      var n = r(71403);

      function i(t, e) {
        return r = e || null, i = function(e) {
          return t.forEach((function(t) {
            return function(t, e) {
              return "function" == typeof t ? t(e) : t && (t.current = e), t
            }(t, e)
          }))
        }, (a = (0, n.useState)((function() {
          return {
            value: r,
            callback: i,
            facade: {
              get current() {
                return a.value
              },
              set current(t) {
                var e = a.value;
                e !== t && (a.value = t, a.callback(t, e))
              }
            }
          }
        }))[0]).callback = i, a.facade;
        var r, i, a
      }
    },
    23496: (t, e, r) => {
      "use strict";
      r.d(e, {
        C: () => s,
        f: () => o
      });
      var n = r(80226);

      function i(t) {
        return t
      }

      function a(t, e) {
        void 0 === e && (e = i);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : t
          },
          useMedium: function(t) {
            var i = e(t, n);
            return r.push(i),
              function() {
                r = r.filter((function(t) {
                  return t !== i
                }))
              }
          },
          assignSyncMedium: function(t) {
            for (n = !0; r.length;) {
              var e = r;
              r = [], e.forEach(t)
            }
            r = {
              push: function(e) {
                return t(e)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(t) {
            n = !0;
            var e = [];
            if (r.length) {
              var i = r;
              r = [], i.forEach(t), e = r
            }
            var a = function() {
                var r = e;
                e = [], r.forEach(t)
              },
              s = function() {
                return Promise.resolve().then(a)
              };
            s(), r = {
              push: function(t) {
                e.push(t), s()
              },
              filter: function(t) {
                return e = e.filter(t), r
              }
            }
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = i), a(t, e)
      }

      function o(t) {
        void 0 === t && (t = {});
        var e = a(null);
        return e.options = (0, n.Cl)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    83277: (t, e, r) => {
      "use strict";
      r.d(e, {
        L: () => h
      });
      var n = r(71403),
        i = r(53149);
      let a = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        s = t => t && !Array.isArray(t) && "object" == typeof t,
        o = [],
        l = {},
        u = i.Ay;
      const h = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          r = l;
        s(t) ? (r = t, t = null, e = "dependencies" in r ? r.dependencies : o) : s(e) && (r = e, e = "dependencies" in r ? r.dependencies : o);
        let {
          scope: i,
          revertOnUpdate: h
        } = r, [c, p] = (0, n.useState)(!1);
        t && "function" != typeof t && console.warn("First parameter must be a function or config object");
        const f = u.context((() => {}), i),
          d = () => f.revert(),
          m = e && e.length && !h;
        return a((() => {
          if (t && f.add(t, i), !m || !c) return d
        }), e), m && a((() => (p(!0), d)), o), {
          context: f,
          contextSafe: t => f.add(null, t)
        }
      };
      h.register = t => {
        u = t
      }, h.headless = !0
    },
    86975: (t, e, r) => {
      "use strict";
      r.d(e, {
        FF: () => f
      });
      const n = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        i = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        a = function(t, e) {
          return function(r, a, s) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = t[e];
            if (!i(r)) return;
            if (!n(a)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const u = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[r]) {
              const t = l[r].handlers;
              let e;
              for (e = t.length; e > 0 && !(o >= t[e - 1].priority); e--);
              e === t.length ? t[e] = u : t.splice(e, 0, u), l.__current.forEach((t => {
                t.name === r && t.currentIndex >= e && t.currentIndex++
              }))
            } else l[r] = {
              handlers: [u],
              runs: 0
            };
            "hookAdded" !== r && t.doAction("hookAdded", r, a, s, o)
          }
        },
        s = function(t, e) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(a, s) {
            const o = t[e];
            if (!i(a)) return;
            if (!r && !n(s)) return;
            if (!o[a]) return 0;
            let l = 0;
            if (r) l = o[a].handlers.length, o[a] = {
              runs: o[a].runs,
              handlers: []
            };
            else {
              const t = o[a].handlers;
              for (let e = t.length - 1; e >= 0; e--) t[e].namespace === s && (t.splice(e, 1), l++, o.__current.forEach((t => {
                t.name === a && t.currentIndex >= e && t.currentIndex--
              })))
            }
            return "hookRemoved" !== a && t.doAction("hookRemoved", a, s), l
          }
        },
        o = function(t, e) {
          return function(r, n) {
            const i = t[e];
            return void 0 !== n ? r in i && i[r].handlers.some((t => t.namespace === n)) : r in i
          }
        },
        l = function(t, e) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(n) {
            const i = t[e];
            i[n] || (i[n] = {
              handlers: [],
              runs: 0
            }), i[n].runs++;
            const a = i[n].handlers;
            for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
            if (!a || !a.length) return r ? o[0] : void 0;
            const u = {
              name: n,
              currentIndex: 0
            };
            for (i.__current.push(u); u.currentIndex < a.length;) {
              const t = a[u.currentIndex].callback.apply(null, o);
              r && (o[0] = t), u.currentIndex++
            }
            return i.__current.pop(), r ? o[0] : void 0
          }
        },
        u = function(t, e) {
          return function() {
            var r;
            const n = t[e];
            return null !== (r = n.__current[n.__current.length - 1]?.name) && void 0 !== r ? r : null
          }
        },
        h = function(t, e) {
          return function(r) {
            const n = t[e];
            return void 0 === r ? void 0 !== n.__current[0] : !!n.__current[0] && r === n.__current[0].name
          }
        },
        c = function(t, e) {
          return function(r) {
            const n = t[e];
            if (i(r)) return n[r] && n[r].runs ? n[r].runs : 0
          }
        };
      class p {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = u(this, "actions"), this.currentFilter = u(this, "filters"), this.doingAction = h(this, "actions"), this.doingFilter = h(this, "filters"), this.didAction = c(this, "actions"), this.didFilter = c(this, "filters")
        }
      }
      const f = function() {
          return new p
        },
        d = f(),
        {
          addAction: m,
          addFilter: v,
          removeAction: g,
          removeFilter: y,
          hasAction: b,
          hasFilter: S,
          removeAllActions: x,
          removeAllFilters: E,
          doAction: _,
          applyFilters: w,
          currentAction: P,
          currentFilter: T,
          doingAction: C,
          doingFilter: A,
          didAction: M,
          didFilter: k,
          actions: I,
          filters: D
        } = d
    },
    39817: (t, e, r) => {
      t.exports = {
        default: r(37266),
        __esModule: !0
      }
    },
    13476: (t, e, r) => {
      t.exports = {
        default: r(30155),
        __esModule: !0
      }
    },
    60981: (t, e, r) => {
      t.exports = {
        default: r(26940),
        __esModule: !0
      }
    },
    61511: (t, e, r) => {
      t.exports = {
        default: r(28692),
        __esModule: !0
      }
    },
    11843: (t, e, r) => {
      t.exports = {
        default: r(5352),
        __esModule: !0
      }
    },
    12402: (t, e, r) => {
      t.exports = {
        default: r(26036),
        __esModule: !0
      }
    },
    73703: (t, e, r) => {
      t.exports = {
        default: r(70176),
        __esModule: !0
      }
    },
    53842: (t, e) => {
      "use strict";
      e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
    },
    19780: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(60981)) && n.__esModule ? n : {
        default: n
      };
      e.default = function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(t, n.key, n)
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e
        }
      }()
    },
    21425: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(39817)) && n.__esModule ? n : {
        default: n
      };
      e.default = i.default || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      }
    },
    40914: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n = s(r(11843)),
        i = s(r(13476)),
        a = s(r(23671));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, a.default)(e)));
        t.prototype = (0, i.default)(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (n.default ? (0, n.default)(t, e) : t.__proto__ = e)
      }
    },
    25915: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(23671)) && n.__esModule ? n : {
        default: n
      };
      e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) && "function" != typeof e ? t : e
      }
    },
    23671: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n = s(r(73703)),
        i = s(r(12402)),
        a = "function" == typeof i.default && "symbol" == typeof n.default ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : typeof t
        };

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = "function" == typeof i.default && "symbol" === a(n.default) ? function(t) {
        return void 0 === t ? "undefined" : a(t)
      } : function(t) {
        return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
      }
    },
    59028: (t, e, r) => {
      var n;
      ! function(i, a, s, o) {
        "use strict";
        var l, u = ["", "webkit", "Moz", "MS", "ms", "o"],
          h = a.createElement("div"),
          c = "function",
          p = Math.round,
          f = Math.abs,
          d = Date.now;

        function m(t, e, r) {
          return setTimeout(E(t, r), e)
        }

        function v(t, e, r) {
          return !!Array.isArray(t) && (g(t, r[e], r), !0)
        }

        function g(t, e, r) {
          var n;
          if (t)
            if (t.forEach) t.forEach(e, r);
            else if (t.length !== o)
            for (n = 0; n < t.length;) e.call(r, t[n], n, t), n++;
          else
            for (n in t) t.hasOwnProperty(n) && e.call(r, t[n], n, t)
        }

        function y(t, e, r) {
          var n = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              a = i.console && (i.console.warn || i.console.log);
            return a && a.call(i.console, n, r), t.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(t) {
          if (t === o || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (n !== o && null !== n)
              for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
          }
          return e
        } : Object.assign;
        var b = y((function(t, e, r) {
            for (var n = Object.keys(e), i = 0; i < n.length;)(!r || r && t[n[i]] === o) && (t[n[i]] = e[n[i]]), i++;
            return t
          }), "extend", "Use `assign`."),
          S = y((function(t, e) {
            return b(t, e, !0)
          }), "merge", "Use `assign`.");

        function x(t, e, r) {
          var n, i = e.prototype;
          (n = t.prototype = Object.create(i)).constructor = t, n._super = i, r && l(n, r)
        }

        function E(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function _(t, e) {
          return typeof t == c ? t.apply(e && e[0] || o, e) : t
        }

        function w(t, e) {
          return t === o ? e : t
        }

        function P(t, e, r) {
          g(M(e), (function(e) {
            t.addEventListener(e, r, !1)
          }))
        }

        function T(t, e, r) {
          g(M(e), (function(e) {
            t.removeEventListener(e, r, !1)
          }))
        }

        function C(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function A(t, e) {
          return t.indexOf(e) > -1
        }

        function M(t) {
          return t.trim().split(/\s+/g)
        }

        function k(t, e, r) {
          if (t.indexOf && !r) return t.indexOf(e);
          for (var n = 0; n < t.length;) {
            if (r && t[n][r] == e || !r && t[n] === e) return n;
            n++
          }
          return -1
        }

        function I(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function D(t, e, r) {
          for (var n = [], i = [], a = 0; a < t.length;) {
            var s = e ? t[a][e] : t[a];
            k(i, s) < 0 && n.push(t[a]), i[a] = s, a++
          }
          return r && (n = e ? n.sort((function(t, r) {
            return t[e] > r[e]
          })) : n.sort()), n
        }

        function F(t, e) {
          for (var r, n, i = e[0].toUpperCase() + e.slice(1), a = 0; a < u.length;) {
            if ((n = (r = u[a]) ? r + i : e) in t) return n;
            a++
          }
          return o
        }
        var O = 1;

        function R(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || i
        }
        var L = "ontouchstart" in i,
          B = F(i, "PointerEvent") !== o,
          V = L && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          z = "touch",
          N = "mouse",
          j = 25,
          G = 1,
          H = 4,
          W = 8,
          q = 1,
          $ = 2,
          U = 4,
          Y = 8,
          X = 16,
          K = $ | U,
          Z = Y | X,
          J = K | Z,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var r = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            _(t.options.enable, [t]) && r.handler(e)
          }, this.init()
        }

        function rt(t, e, r) {
          var n = r.pointers.length,
            i = r.changedPointers.length,
            a = e & G && n - i == 0,
            s = e & (H | W) && n - i == 0;
          r.isFirst = !!a, r.isFinal = !!s, a && (t.session = {}), r.eventType = e,
            function(t, e) {
              var r = t.session,
                n = e.pointers,
                i = n.length;
              r.firstInput || (r.firstInput = nt(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = nt(e) : 1 === i && (r.firstMultiple = !1);
              var a = r.firstInput,
                s = r.firstMultiple,
                l = s ? s.center : a.center,
                u = e.center = it(n);
              e.timeStamp = d(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = lt(l, u), e.distance = ot(l, u),
                function(t, e) {
                  var r = e.center,
                    n = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    a = t.prevInput || {};
                  e.eventType !== G && a.eventType !== H || (i = t.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, n = t.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y)
                }(r, e), e.offsetDirection = st(e.deltaX, e.deltaY);
              var h, c, p = at(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, e.scale = s ? (h = s.pointers, ot((c = n)[0], c[1], tt) / ot(h[0], h[1], tt)) : 1, e.rotation = s ? function(t, e) {
                  return lt(e[1], e[0], tt) + lt(t[1], t[0], tt)
                }(s.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var r, n, i, a, s = t.lastInterval || e,
                    l = e.timeStamp - s.timeStamp;
                  if (e.eventType != W && (l > j || s.velocity === o)) {
                    var u = e.deltaX - s.deltaX,
                      h = e.deltaY - s.deltaY,
                      c = at(l, u, h);
                    n = c.x, i = c.y, r = f(c.x) > f(c.y) ? c.x : c.y, a = st(u, h), t.lastInterval = e
                  } else r = s.velocity, n = s.velocityX, i = s.velocityY, a = s.direction;
                  e.velocity = r, e.velocityX = n, e.velocityY = i, e.direction = a
                }(r, e);
              var m = t.element;
              C(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
            }(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r
        }

        function nt(t) {
          for (var e = [], r = 0; r < t.pointers.length;) e[r] = {
            clientX: p(t.pointers[r].clientX),
            clientY: p(t.pointers[r].clientY)
          }, r++;
          return {
            timeStamp: d(),
            pointers: e,
            center: it(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function it(t) {
          var e = t.length;
          if (1 === e) return {
            x: p(t[0].clientX),
            y: p(t[0].clientY)
          };
          for (var r = 0, n = 0, i = 0; i < e;) r += t[i].clientX, n += t[i].clientY, i++;
          return {
            x: p(r / e),
            y: p(n / e)
          }
        }

        function at(t, e, r) {
          return {
            x: e / t || 0,
            y: r / t || 0
          }
        }

        function st(t, e) {
          return t === e ? q : f(t) >= f(e) ? t < 0 ? $ : U : e < 0 ? Y : X
        }

        function ot(t, e, r) {
          r || (r = Q);
          var n = e[r[0]] - t[r[0]],
            i = e[r[1]] - t[r[1]];
          return Math.sqrt(n * n + i * i)
        }

        function lt(t, e, r) {
          r || (r = Q);
          var n = e[r[0]] - t[r[0]],
            i = e[r[1]] - t[r[1]];
          return 180 * Math.atan2(i, n) / Math.PI
        }
        et.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && P(this.element, this.evEl, this.domHandler), this.evTarget && P(this.target, this.evTarget, this.domHandler), this.evWin && P(R(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(R(this.element), this.evWin, this.domHandler)
          }
        };
        var ut = {
            mousedown: G,
            mousemove: 2,
            mouseup: H
          },
          ht = "mousedown",
          ct = "mousemove mouseup";

        function pt() {
          this.evEl = ht, this.evWin = ct, this.pressed = !1, et.apply(this, arguments)
        }
        x(pt, et, {
          handler: function(t) {
            var e = ut[t.type];
            e & G && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: N,
              srcEvent: t
            }))
          }
        });
        var ft = {
            pointerdown: G,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          dt = {
            2: z,
            3: "pen",
            4: N,
            5: "kinect"
          },
          mt = "pointerdown",
          vt = "pointermove pointerup pointercancel";

        function gt() {
          this.evEl = mt, this.evWin = vt, et.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        i.MSPointerEvent && !i.PointerEvent && (mt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), x(gt, et, {
          handler: function(t) {
            var e = this.store,
              r = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              i = ft[n],
              a = dt[t.pointerType] || t.pointerType,
              s = a == z,
              o = k(e, t.pointerId, "pointerId");
            i & G && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : i & (H | W) && (r = !0), o < 0 || (e[o] = t, this.callback(this.manager, i, {
              pointers: e,
              changedPointers: [t],
              pointerType: a,
              srcEvent: t
            }), r && e.splice(o, 1))
          }
        });
        var yt = {
          touchstart: G,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function bt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, et.apply(this, arguments)
        }

        function St(t, e) {
          var r = I(t.touches),
            n = I(t.changedTouches);
          return e & (H | W) && (r = D(r.concat(n), "identifier", !0)), [r, n]
        }
        x(bt, et, {
          handler: function(t) {
            var e = yt[t.type];
            if (e === G && (this.started = !0), this.started) {
              var r = St.call(this, t, e);
              e & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: z,
                srcEvent: t
              })
            }
          }
        });
        var xt = {
            touchstart: G,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Et = "touchstart touchmove touchend touchcancel";

        function _t() {
          this.evTarget = Et, this.targetIds = {}, et.apply(this, arguments)
        }

        function wt(t, e) {
          var r = I(t.touches),
            n = this.targetIds;
          if (e & (2 | G) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
          var i, a, s = I(t.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(t) {
              return C(t.target, l)
            })), e === G)
            for (i = 0; i < a.length;) n[a[i].identifier] = !0, i++;
          for (i = 0; i < s.length;) n[s[i].identifier] && o.push(s[i]), e & (H | W) && delete n[s[i].identifier], i++;
          return o.length ? [D(a.concat(o), "identifier", !0), o] : void 0
        }
        x(_t, et, {
          handler: function(t) {
            var e = xt[t.type],
              r = wt.call(this, t, e);
            r && this.callback(this.manager, e, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: z,
              srcEvent: t
            })
          }
        });
        var Pt = 2500;

        function Tt() {
          et.apply(this, arguments);
          var t = E(this.handler, this);
          this.touch = new _t(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Ct(t, e) {
          t & G ? (this.primaryTouch = e.changedPointers[0].identifier, At.call(this, e)) : t & (H | W) && At.call(this, e)
        }

        function At(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var r = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(r);
            var n = this.lastTouches;
            setTimeout((function() {
              var t = n.indexOf(r);
              t > -1 && n.splice(t, 1)
            }), Pt)
          }
        }

        function Mt(t) {
          for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var i = this.lastTouches[n],
              a = Math.abs(e - i.x),
              s = Math.abs(r - i.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        x(Tt, et, {
          handler: function(t, e, r) {
            var n = r.pointerType == z,
              i = r.pointerType == N;
            if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (n) Ct.call(this, e, r);
              else if (i && Mt.call(this, r)) return;
              this.callback(t, e, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var kt = F(h.style, "touchAction"),
          It = kt !== o,
          Dt = "compute",
          Ft = "auto",
          Ot = "manipulation",
          Rt = "none",
          Lt = "pan-x",
          Bt = "pan-y",
          Vt = function() {
            if (!It) return !1;
            var t = {},
              e = i.CSS && i.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              t[r] = !e || i.CSS.supports("touch-action", r)
            })), t
          }();

        function zt(t, e) {
          this.manager = t, this.set(e)
        }
        zt.prototype = {
          set: function(t) {
            t == Dt && (t = this.compute()), It && this.manager.element.style && Vt[t] && (this.manager.element.style[kt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return g(this.manager.recognizers, (function(e) {
                _(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (A(t, Rt)) return Rt;
                var e = A(t, Lt),
                  r = A(t, Bt);
                return e && r ? Rt : e || r ? e ? Lt : Bt : A(t, Ot) ? Ot : Ft
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              r = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                i = A(n, Rt) && !Vt[Rt],
                a = A(n, Bt) && !Vt[Bt],
                s = A(n, Lt) && !Vt[Lt];
              if (i) {
                var o = 1 === t.pointers.length,
                  l = t.distance < 2,
                  u = t.deltaTime < 250;
                if (o && l && u) return
              }
              if (!s || !a) return i || a && r & K || s && r & Z ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var Nt = 1,
          jt = 32;

        function Gt(t) {
          this.options = l({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = Nt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Wt(t) {
          return t == X ? "down" : t == Y ? "up" : t == $ ? "left" : t == U ? "right" : ""
        }

        function qt(t, e) {
          var r = e.manager;
          return r ? r.get(t) : t
        }

        function $t() {
          Gt.apply(this, arguments)
        }

        function Ut() {
          $t.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Yt() {
          $t.apply(this, arguments)
        }

        function Xt() {
          Gt.apply(this, arguments), this._timer = null, this._input = null
        }

        function Kt() {
          $t.apply(this, arguments)
        }

        function Zt() {
          $t.apply(this, arguments)
        }

        function Jt() {
          Gt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = w(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = l({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (B ? gt : V ? _t : L ? Tt : pt))(this, rt), this.touchAction = new zt(this, this.options.touchAction), ee(this, !0), g(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ee(t, e) {
          var r, n = t.element;
          n.style && (g(t.options.cssProps, (function(i, a) {
            r = F(n.style, a), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || ""
          })), e || (t.oldCssProps = {}))
        }
        Gt.prototype = {
          defaults: {},
          set: function(t) {
            return l(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (v(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = qt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return v(t, "dropRecognizeWith", this) || (t = qt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (v(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === k(e, t = qt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (v(t, "dropRequireFailure", this)) return this;
            t = qt(t, this);
            var e = k(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
          },
          emit: function(t) {
            var e = this,
              r = this.state;

            function n(r) {
              e.manager.emit(r, t)
            }
            r < 8 && n(e.options.event + Ht(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= 8 && n(e.options.event + Ht(r))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = jt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (jt | Nt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = l({}, t);
            if (!_(this.options.enable, [this, e])) return this.reset(), void(this.state = jt);
            56 & this.state && (this.state = Nt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, x($t, Gt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              r = t.eventType,
              n = 6 & e,
              i = this.attrTest(t);
            return n && (r & W || !i) ? 16 | e : n || i ? r & H ? 8 | e : 2 & e ? 4 | e : 2 : jt
          }
        }), x(Ut, $t, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & K && e.push(Bt), t & Z && e.push(Lt), e
          },
          directionTest: function(t) {
            var e = this.options,
              r = !0,
              n = t.distance,
              i = t.direction,
              a = t.deltaX,
              s = t.deltaY;
            return i & e.direction || (e.direction & K ? (i = 0 === a ? q : a < 0 ? $ : U, r = a != this.pX, n = Math.abs(t.deltaX)) : (i = 0 === s ? q : s < 0 ? Y : X, r = s != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction
          },
          attrTest: function(t) {
            return $t.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Wt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), x(Yt, $t, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Rt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), x(Xt, Gt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Ft]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              i = t.deltaTime > e.time;
            if (this._input = t, !n || !r || t.eventType & (H | W) && !i) this.reset();
            else if (t.eventType & G) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return 8;
            return jt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), x(Kt, $t, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Rt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          }
        }), x(Zt, $t, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: K | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return Ut.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, r = this.options.direction;
            return r & (K | Z) ? e = t.overallVelocity : r & K ? e = t.overallVelocityX : r & Z && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Wt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), x(Jt, Gt, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [Ot]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              i = t.deltaTime < e.time;
            if (this.reset(), t.eventType & G && 0 === this.count) return this.failTimeout();
            if (n && i && r) {
              if (t.eventType != H) return this.failTimeout();
              var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                s = !this.pCenter || ot(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return jt
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = jt
            }), this.options.interval, this), jt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qt.VERSION = "2.0.7", Qt.defaults = {
          domEvents: !1,
          touchAction: Dt,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Kt, {
              enable: !1
            }],
            [Yt, {
                enable: !1
              },
              ["rotate"]
            ],
            [Zt, {
              direction: K
            }],
            [Ut, {
                direction: K
              },
              ["swipe"]
            ],
            [Jt],
            [Jt, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Xt]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, te.prototype = {
          set: function(t) {
            return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var r;
              this.touchAction.preventDefaults(t);
              var n = this.recognizers,
                i = e.curRecognizer;
              (!i || i && 8 & i.state) && (i = e.curRecognizer = null);
              for (var a = 0; a < n.length;) r = n[a], 2 === e.stopped || i && r != i && !r.canRecognizeWith(i) ? r.reset() : r.recognize(t), !i && 14 & r.state && (i = e.curRecognizer = r), a++
            }
          },
          get: function(t) {
            if (t instanceof Gt) return t;
            for (var e = this.recognizers, r = 0; r < e.length; r++)
              if (e[r].options.event == t) return e[r];
            return null
          },
          add: function(t) {
            if (v(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (v(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                r = k(e, t); - 1 !== r && (e.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== o && e !== o) {
              var r = this.handlers;
              return g(M(t), (function(t) {
                r[t] = r[t] || [], r[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== o) {
              var r = this.handlers;
              return g(M(t), (function(t) {
                e ? r[t] && r[t].splice(k(r[t], e), 1) : delete r[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var r = a.createEvent("Event");
              r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r)
            }(t, e);
            var r = this.handlers[t] && this.handlers[t].slice();
            if (r && r.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var n = 0; n < r.length;) r[n](e), n++
            }
          },
          destroy: function() {
            this.element && ee(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(Qt, {
          INPUT_START: G,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: Nt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: jt,
          DIRECTION_NONE: q,
          DIRECTION_LEFT: $,
          DIRECTION_RIGHT: U,
          DIRECTION_UP: Y,
          DIRECTION_DOWN: X,
          DIRECTION_HORIZONTAL: K,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: te,
          Input: et,
          TouchAction: zt,
          TouchInput: _t,
          MouseInput: pt,
          PointerEventInput: gt,
          TouchMouseInput: Tt,
          SingleTouchInput: bt,
          Recognizer: Gt,
          AttrRecognizer: $t,
          Tap: Jt,
          Pan: Ut,
          Swipe: Zt,
          Pinch: Yt,
          Rotate: Kt,
          Press: Xt,
          on: P,
          off: T,
          each: g,
          merge: S,
          extend: b,
          assign: l,
          inherit: x,
          bindFn: E,
          prefixed: F
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = Qt, (n = function() {
          return Qt
        }.call(e, r, e, t)) === o || (t.exports = n)
      }(window, document)
    },
    19435: (t, e, r) => {
      var n = r(78007).Symbol;
      t.exports = n
    },
    7158: (t, e, r) => {
      var n = r(19435),
        i = r(16061),
        a = r(84968),
        s = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? i(t) : a(t)
      }
    },
    48530: (t, e, r) => {
      var n = r(18478),
        i = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, n(t) + 1).replace(i, "") : t
      }
    },
    94626: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n
    },
    16061: (t, e, r) => {
      var n = r(19435),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.toString,
        o = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        var e = a.call(t, o),
          r = t[o];
        try {
          t[o] = void 0;
          var n = !0
        } catch (t) {}
        var i = s.call(t);
        return n && (e ? t[o] = r : delete t[o]), i
      }
    },
    84968: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    78007: (t, e, r) => {
      var n = r(94626),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
      t.exports = a
    },
    18478: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)););
        return r
      }
    },
    14963: (t, e, r) => {
      var n = r(27335),
        i = r(92346),
        a = r(58972),
        s = Math.max,
        o = Math.min;
      t.exports = function(t, e, r) {
        var l, u, h, c, p, f, d = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var r = l,
            n = u;
          return l = u = void 0, d = e, c = t.apply(n, r)
        }

        function b(t) {
          var r = t - f;
          return void 0 === f || r >= e || r < 0 || v && t - d >= h
        }

        function S() {
          var t = i();
          if (b(t)) return x(t);
          p = setTimeout(S, function(t) {
            var r = e - (t - f);
            return v ? o(r, h - (t - d)) : r
          }(t))
        }

        function x(t) {
          return p = void 0, g && l ? y(t) : (l = u = void 0, c)
        }

        function E() {
          var t = i(),
            r = b(t);
          if (l = arguments, u = this, f = t, r) {
            if (void 0 === p) return function(t) {
              return d = t, p = setTimeout(S, e), m ? y(t) : c
            }(f);
            if (v) return clearTimeout(p), p = setTimeout(S, e), y(f)
          }
          return void 0 === p && (p = setTimeout(S, e)), c
        }
        return e = a(e) || 0, n(r) && (m = !!r.leading, h = (v = "maxWait" in r) ? s(a(r.maxWait) || 0, e) : h, g = "trailing" in r ? !!r.trailing : g), E.cancel = function() {
          void 0 !== p && clearTimeout(p), d = 0, l = f = u = p = void 0
        }, E.flush = function() {
          return void 0 === p ? c : x(i())
        }, E
      }
    },
    27335: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    95360: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    87416: (t, e, r) => {
      var n = r(7158),
        i = r(95360);
      t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == n(t)
      }
    },
    79429: function(t, e, r) {
      var n;
      t = r.nmd(t),
        function() {
          var i, a = "Expected a function",
            s = "__lodash_hash_undefined__",
            o = "__lodash_placeholder__",
            l = 32,
            u = 128,
            h = 1 / 0,
            c = 9007199254740991,
            p = NaN,
            f = 4294967295,
            d = [
              ["ary", u],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", l],
              ["partialRight", 64],
              ["rearg", 256]
            ],
            m = "[object Arguments]",
            v = "[object Array]",
            g = "[object Boolean]",
            y = "[object Date]",
            b = "[object Error]",
            S = "[object Function]",
            x = "[object GeneratorFunction]",
            E = "[object Map]",
            _ = "[object Number]",
            w = "[object Object]",
            P = "[object Promise]",
            T = "[object RegExp]",
            C = "[object Set]",
            A = "[object String]",
            M = "[object Symbol]",
            k = "[object WeakMap]",
            I = "[object ArrayBuffer]",
            D = "[object DataView]",
            F = "[object Float32Array]",
            O = "[object Float64Array]",
            R = "[object Int8Array]",
            L = "[object Int16Array]",
            B = "[object Int32Array]",
            V = "[object Uint8Array]",
            z = "[object Uint8ClampedArray]",
            N = "[object Uint16Array]",
            j = "[object Uint32Array]",
            G = /\b__p \+= '';/g,
            H = /\b(__p \+=) '' \+/g,
            W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            q = /&(?:amp|lt|gt|quot|#39);/g,
            $ = /[&<>"']/g,
            U = RegExp(q.source),
            Y = RegExp($.source),
            X = /<%-([\s\S]+?)%>/g,
            K = /<%([\s\S]+?)%>/g,
            Z = /<%=([\s\S]+?)%>/g,
            J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Q = /^\w*$/,
            tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            et = /[\\^$.*+?()[\]{}|]/g,
            rt = RegExp(et.source),
            nt = /^\s+/,
            it = /\s/,
            at = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            st = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ot = /,? & /,
            lt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ut = /[()=,{}\[\]\/\s]/,
            ht = /\\(\\)?/g,
            ct = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            pt = /\w*$/,
            ft = /^[-+]0x[0-9a-f]+$/i,
            dt = /^0b[01]+$/i,
            mt = /^\[object .+?Constructor\]$/,
            vt = /^0o[0-7]+$/i,
            gt = /^(?:0|[1-9]\d*)$/,
            yt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            bt = /($^)/,
            St = /['\n\r\u2028\u2029\\]/g,
            xt = "\\ud800-\\udfff",
            Et = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            _t = "\\u2700-\\u27bf",
            wt = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Pt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Tt = "\\ufe0e\\ufe0f",
            Ct = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            At = "[" + xt + "]",
            Mt = "[" + Ct + "]",
            kt = "[" + Et + "]",
            It = "\\d+",
            Dt = "[" + _t + "]",
            Ft = "[" + wt + "]",
            Ot = "[^" + xt + Ct + It + _t + wt + Pt + "]",
            Rt = "\\ud83c[\\udffb-\\udfff]",
            Lt = "[^" + xt + "]",
            Bt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Vt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            zt = "[" + Pt + "]",
            Nt = "\\u200d",
            jt = "(?:" + Ft + "|" + Ot + ")",
            Gt = "(?:" + zt + "|" + Ot + ")",
            Ht = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Wt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            qt = "(?:" + kt + "|" + Rt + ")?",
            $t = "[" + Tt + "]?",
            Ut = $t + qt + "(?:" + Nt + "(?:" + [Lt, Bt, Vt].join("|") + ")" + $t + qt + ")*",
            Yt = "(?:" + [Dt, Bt, Vt].join("|") + ")" + Ut,
            Xt = "(?:" + [Lt + kt + "?", kt, Bt, Vt, At].join("|") + ")",
            Kt = RegExp("['’]", "g"),
            Zt = RegExp(kt, "g"),
            Jt = RegExp(Rt + "(?=" + Rt + ")|" + Xt + Ut, "g"),
            Qt = RegExp([zt + "?" + Ft + "+" + Ht + "(?=" + [Mt, zt, "$"].join("|") + ")", Gt + "+" + Wt + "(?=" + [Mt, zt + jt, "$"].join("|") + ")", zt + "?" + jt + "+" + Ht, zt + "+" + Wt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", It, Yt].join("|"), "g"),
            te = RegExp("[" + Nt + xt + Et + Tt + "]"),
            ee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            re = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            ne = -1,
            ie = {};
          ie[F] = ie[O] = ie[R] = ie[L] = ie[B] = ie[V] = ie[z] = ie[N] = ie[j] = !0, ie[m] = ie[v] = ie[I] = ie[g] = ie[D] = ie[y] = ie[b] = ie[S] = ie[E] = ie[_] = ie[w] = ie[T] = ie[C] = ie[A] = ie[k] = !1;
          var ae = {};
          ae[m] = ae[v] = ae[I] = ae[D] = ae[g] = ae[y] = ae[F] = ae[O] = ae[R] = ae[L] = ae[B] = ae[E] = ae[_] = ae[w] = ae[T] = ae[C] = ae[A] = ae[M] = ae[V] = ae[z] = ae[N] = ae[j] = !0, ae[b] = ae[S] = ae[k] = !1;
          var se = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029"
            },
            oe = parseFloat,
            le = parseInt,
            ue = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
            he = "object" == typeof self && self && self.Object === Object && self,
            ce = ue || he || Function("return this")(),
            pe = e && !e.nodeType && e,
            fe = pe && t && !t.nodeType && t,
            de = fe && fe.exports === pe,
            me = de && ue.process,
            ve = function() {
              try {
                return fe && fe.require && fe.require("util").types || me && me.binding && me.binding("util")
              } catch (t) {}
            }(),
            ge = ve && ve.isArrayBuffer,
            ye = ve && ve.isDate,
            be = ve && ve.isMap,
            Se = ve && ve.isRegExp,
            xe = ve && ve.isSet,
            Ee = ve && ve.isTypedArray;

          function _e(t, e, r) {
            switch (r.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, r[0]);
              case 2:
                return t.call(e, r[0], r[1]);
              case 3:
                return t.call(e, r[0], r[1], r[2])
            }
            return t.apply(e, r)
          }

          function we(t, e, r, n) {
            for (var i = -1, a = null == t ? 0 : t.length; ++i < a;) {
              var s = t[i];
              e(n, s, r(s), t)
            }
            return n
          }

          function Pe(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
            return t
          }

          function Te(t, e) {
            for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
            return t
          }

          function Ce(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
              if (!e(t[r], r, t)) return !1;
            return !0
          }

          function Ae(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n;) {
              var s = t[r];
              e(s, r, t) && (a[i++] = s)
            }
            return a
          }

          function Me(t, e) {
            return !(null == t || !t.length) && ze(t, e, 0) > -1
          }

          function ke(t, e, r) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
              if (r(e, t[n])) return !0;
            return !1
          }

          function Ie(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
            return i
          }

          function De(t, e) {
            for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
            return t
          }

          function Fe(t, e, r, n) {
            var i = -1,
              a = null == t ? 0 : t.length;
            for (n && a && (r = t[++i]); ++i < a;) r = e(r, t[i], i, t);
            return r
          }

          function Oe(t, e, r, n) {
            var i = null == t ? 0 : t.length;
            for (n && i && (r = t[--i]); i--;) r = e(r, t[i], i, t);
            return r
          }

          function Re(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
              if (e(t[r], r, t)) return !0;
            return !1
          }
          var Le = He("length");

          function Be(t, e, r) {
            var n;
            return r(t, (function(t, r, i) {
              if (e(t, r, i)) return n = r, !1
            })), n
          }

          function Ve(t, e, r, n) {
            for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
              if (e(t[a], a, t)) return a;
            return -1
          }

          function ze(t, e, r) {
            return e == e ? function(t, e, r) {
              for (var n = r - 1, i = t.length; ++n < i;)
                if (t[n] === e) return n;
              return -1
            }(t, e, r) : Ve(t, je, r)
          }

          function Ne(t, e, r, n) {
            for (var i = r - 1, a = t.length; ++i < a;)
              if (n(t[i], e)) return i;
            return -1
          }

          function je(t) {
            return t != t
          }

          function Ge(t, e) {
            var r = null == t ? 0 : t.length;
            return r ? $e(t, e) / r : p
          }

          function He(t) {
            return function(e) {
              return null == e ? i : e[t]
            }
          }

          function We(t) {
            return function(e) {
              return null == t ? i : t[e]
            }
          }

          function qe(t, e, r, n, i) {
            return i(t, (function(t, i, a) {
              r = n ? (n = !1, t) : e(r, t, i, a)
            })), r
          }

          function $e(t, e) {
            for (var r, n = -1, a = t.length; ++n < a;) {
              var s = e(t[n]);
              s !== i && (r = r === i ? s : r + s)
            }
            return r
          }

          function Ue(t, e) {
            for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
            return n
          }

          function Ye(t) {
            return t ? t.slice(0, cr(t) + 1).replace(nt, "") : t
          }

          function Xe(t) {
            return function(e) {
              return t(e)
            }
          }

          function Ke(t, e) {
            return Ie(e, (function(e) {
              return t[e]
            }))
          }

          function Ze(t, e) {
            return t.has(e)
          }

          function Je(t, e) {
            for (var r = -1, n = t.length; ++r < n && ze(e, t[r], 0) > -1;);
            return r
          }

          function Qe(t, e) {
            for (var r = t.length; r-- && ze(e, t[r], 0) > -1;);
            return r
          }
          var tr = We({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s"
            }),
            er = We({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;"
            });

          function rr(t) {
            return "\\" + se[t]
          }

          function nr(t) {
            return te.test(t)
          }

          function ir(t) {
            var e = -1,
              r = Array(t.size);
            return t.forEach((function(t, n) {
              r[++e] = [n, t]
            })), r
          }

          function ar(t, e) {
            return function(r) {
              return t(e(r))
            }
          }

          function sr(t, e) {
            for (var r = -1, n = t.length, i = 0, a = []; ++r < n;) {
              var s = t[r];
              s !== e && s !== o || (t[r] = o, a[i++] = r)
            }
            return a
          }

          function or(t) {
            var e = -1,
              r = Array(t.size);
            return t.forEach((function(t) {
              r[++e] = t
            })), r
          }

          function lr(t) {
            var e = -1,
              r = Array(t.size);
            return t.forEach((function(t) {
              r[++e] = [t, t]
            })), r
          }

          function ur(t) {
            return nr(t) ? function(t) {
              for (var e = Jt.lastIndex = 0; Jt.test(t);) ++e;
              return e
            }(t) : Le(t)
          }

          function hr(t) {
            return nr(t) ? function(t) {
              return t.match(Jt) || []
            }(t) : function(t) {
              return t.split("")
            }(t)
          }

          function cr(t) {
            for (var e = t.length; e-- && it.test(t.charAt(e)););
            return e
          }
          var pr = We({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'"
            }),
            fr = function t(e) {
              var r, n = (e = null == e ? ce : fr.defaults(ce.Object(), e, fr.pick(ce, re))).Array,
                it = e.Date,
                xt = e.Error,
                Et = e.Function,
                _t = e.Math,
                wt = e.Object,
                Pt = e.RegExp,
                Tt = e.String,
                Ct = e.TypeError,
                At = n.prototype,
                Mt = Et.prototype,
                kt = wt.prototype,
                It = e["__core-js_shared__"],
                Dt = Mt.toString,
                Ft = kt.hasOwnProperty,
                Ot = 0,
                Rt = (r = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                Lt = kt.toString,
                Bt = Dt.call(wt),
                Vt = ce._,
                zt = Pt("^" + Dt.call(Ft).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Nt = de ? e.Buffer : i,
                jt = e.Symbol,
                Gt = e.Uint8Array,
                Ht = Nt ? Nt.allocUnsafe : i,
                Wt = ar(wt.getPrototypeOf, wt),
                qt = wt.create,
                $t = kt.propertyIsEnumerable,
                Ut = At.splice,
                Yt = jt ? jt.isConcatSpreadable : i,
                Xt = jt ? jt.iterator : i,
                Jt = jt ? jt.toStringTag : i,
                te = function() {
                  try {
                    var t = la(wt, "defineProperty");
                    return t({}, "", {}), t
                  } catch (t) {}
                }(),
                se = e.clearTimeout !== ce.clearTimeout && e.clearTimeout,
                ue = it && it.now !== ce.Date.now && it.now,
                he = e.setTimeout !== ce.setTimeout && e.setTimeout,
                pe = _t.ceil,
                fe = _t.floor,
                me = wt.getOwnPropertySymbols,
                ve = Nt ? Nt.isBuffer : i,
                Le = e.isFinite,
                We = At.join,
                dr = ar(wt.keys, wt),
                mr = _t.max,
                vr = _t.min,
                gr = it.now,
                yr = e.parseInt,
                br = _t.random,
                Sr = At.reverse,
                xr = la(e, "DataView"),
                Er = la(e, "Map"),
                _r = la(e, "Promise"),
                wr = la(e, "Set"),
                Pr = la(e, "WeakMap"),
                Tr = la(wt, "create"),
                Cr = Pr && new Pr,
                Ar = {},
                Mr = La(xr),
                kr = La(Er),
                Ir = La(_r),
                Dr = La(wr),
                Fr = La(Pr),
                Or = jt ? jt.prototype : i,
                Rr = Or ? Or.valueOf : i,
                Lr = Or ? Or.toString : i;

              function Br(t) {
                if (Qs(t) && !Gs(t) && !(t instanceof jr)) {
                  if (t instanceof Nr) return t;
                  if (Ft.call(t, "__wrapped__")) return Ba(t)
                }
                return new Nr(t)
              }
              var Vr = function() {
                function t() {}
                return function(e) {
                  if (!Js(e)) return {};
                  if (qt) return qt(e);
                  t.prototype = e;
                  var r = new t;
                  return t.prototype = i, r
                }
              }();

              function zr() {}

              function Nr(t, e) {
                this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = i
              }

              function jr(t) {
                this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = f, this.__views__ = []
              }

              function Gr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                  var n = t[e];
                  this.set(n[0], n[1])
                }
              }

              function Hr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                  var n = t[e];
                  this.set(n[0], n[1])
                }
              }

              function Wr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                  var n = t[e];
                  this.set(n[0], n[1])
                }
              }

              function qr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.__data__ = new Wr; ++e < r;) this.add(t[e])
              }

              function $r(t) {
                var e = this.__data__ = new Hr(t);
                this.size = e.size
              }

              function Ur(t, e) {
                var r = Gs(t),
                  n = !r && js(t),
                  i = !r && !n && $s(t),
                  a = !r && !n && !i && oo(t),
                  s = r || n || i || a,
                  o = s ? Ue(t.length, Tt) : [],
                  l = o.length;
                for (var u in t) !e && !Ft.call(t, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || a && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ma(u, l)) || o.push(u);
                return o
              }

              function Yr(t) {
                var e = t.length;
                return e ? t[qn(0, e - 1)] : i
              }

              function Xr(t, e) {
                return Ia(Ti(t), an(e, 0, t.length))
              }

              function Kr(t) {
                return Ia(Ti(t))
              }

              function Zr(t, e, r) {
                (r !== i && !Vs(t[e], r) || r === i && !(e in t)) && rn(t, e, r)
              }

              function Jr(t, e, r) {
                var n = t[e];
                Ft.call(t, e) && Vs(n, r) && (r !== i || e in t) || rn(t, e, r)
              }

              function Qr(t, e) {
                for (var r = t.length; r--;)
                  if (Vs(t[r][0], e)) return r;
                return -1
              }

              function tn(t, e, r, n) {
                return hn(t, (function(t, i, a) {
                  e(n, t, r(t), a)
                })), n
              }

              function en(t, e) {
                return t && Ci(e, ko(e), t)
              }

              function rn(t, e, r) {
                "__proto__" == e && te ? te(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: r,
                  writable: !0
                }) : t[e] = r
              }

              function nn(t, e) {
                for (var r = -1, a = e.length, s = n(a), o = null == t; ++r < a;) s[r] = o ? i : Po(t, e[r]);
                return s
              }

              function an(t, e, r) {
                return t == t && (r !== i && (t = t <= r ? t : r), e !== i && (t = t >= e ? t : e)), t
              }

              function sn(t, e, r, n, a, s) {
                var o, l = 1 & e,
                  u = 2 & e,
                  h = 4 & e;
                if (r && (o = a ? r(t, n, a, s) : r(t)), o !== i) return o;
                if (!Js(t)) return t;
                var c = Gs(t);
                if (c) {
                  if (o = function(t) {
                      var e = t.length,
                        r = new t.constructor(e);
                      return e && "string" == typeof t[0] && Ft.call(t, "index") && (r.index = t.index, r.input = t.input), r
                    }(t), !l) return Ti(t, o)
                } else {
                  var p = ca(t),
                    f = p == S || p == x;
                  if ($s(t)) return Si(t, l);
                  if (p == w || p == m || f && !a) {
                    if (o = u || f ? {} : fa(t), !l) return u ? function(t, e) {
                      return Ci(t, ha(t), e)
                    }(t, function(t, e) {
                      return t && Ci(e, Io(e), t)
                    }(o, t)) : function(t, e) {
                      return Ci(t, ua(t), e)
                    }(t, en(o, t))
                  } else {
                    if (!ae[p]) return a ? t : {};
                    o = function(t, e, r) {
                      var n, i = t.constructor;
                      switch (e) {
                        case I:
                          return xi(t);
                        case g:
                        case y:
                          return new i(+t);
                        case D:
                          return function(t, e) {
                            var r = e ? xi(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.byteLength)
                          }(t, r);
                        case F:
                        case O:
                        case R:
                        case L:
                        case B:
                        case V:
                        case z:
                        case N:
                        case j:
                          return Ei(t, r);
                        case E:
                          return new i;
                        case _:
                        case A:
                          return new i(t);
                        case T:
                          return function(t) {
                            var e = new t.constructor(t.source, pt.exec(t));
                            return e.lastIndex = t.lastIndex, e
                          }(t);
                        case C:
                          return new i;
                        case M:
                          return n = t, Rr ? wt(Rr.call(n)) : {}
                      }
                    }(t, p, l)
                  }
                }
                s || (s = new $r);
                var d = s.get(t);
                if (d) return d;
                s.set(t, o), io(t) ? t.forEach((function(n) {
                  o.add(sn(n, e, r, n, t, s))
                })) : to(t) && t.forEach((function(n, i) {
                  o.set(i, sn(n, e, r, i, t, s))
                }));
                var v = c ? i : (h ? u ? ea : ta : u ? Io : ko)(t);
                return Pe(v || t, (function(n, i) {
                  v && (n = t[i = n]), Jr(o, i, sn(n, e, r, i, t, s))
                })), o
              }

              function on(t, e, r) {
                var n = r.length;
                if (null == t) return !n;
                for (t = wt(t); n--;) {
                  var a = r[n],
                    s = e[a],
                    o = t[a];
                  if (o === i && !(a in t) || !s(o)) return !1
                }
                return !0
              }

              function ln(t, e, r) {
                if ("function" != typeof t) throw new Ct(a);
                return Ca((function() {
                  t.apply(i, r)
                }), e)
              }

              function un(t, e, r, n) {
                var i = -1,
                  a = Me,
                  s = !0,
                  o = t.length,
                  l = [],
                  u = e.length;
                if (!o) return l;
                r && (e = Ie(e, Xe(r))), n ? (a = ke, s = !1) : e.length >= 200 && (a = Ze, s = !1, e = new qr(e));
                t: for (; ++i < o;) {
                  var h = t[i],
                    c = null == r ? h : r(h);
                  if (h = n || 0 !== h ? h : 0, s && c == c) {
                    for (var p = u; p--;)
                      if (e[p] === c) continue t;
                    l.push(h)
                  } else a(e, c, n) || l.push(h)
                }
                return l
              }
              Br.templateSettings = {
                escape: X,
                evaluate: K,
                interpolate: Z,
                variable: "",
                imports: {
                  _: Br
                }
              }, Br.prototype = zr.prototype, Br.prototype.constructor = Br, Nr.prototype = Vr(zr.prototype), Nr.prototype.constructor = Nr, jr.prototype = Vr(zr.prototype), jr.prototype.constructor = jr, Gr.prototype.clear = function() {
                this.__data__ = Tr ? Tr(null) : {}, this.size = 0
              }, Gr.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
              }, Gr.prototype.get = function(t) {
                var e = this.__data__;
                if (Tr) {
                  var r = e[t];
                  return r === s ? i : r
                }
                return Ft.call(e, t) ? e[t] : i
              }, Gr.prototype.has = function(t) {
                var e = this.__data__;
                return Tr ? e[t] !== i : Ft.call(e, t)
              }, Gr.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = Tr && e === i ? s : e, this
              }, Hr.prototype.clear = function() {
                this.__data__ = [], this.size = 0
              }, Hr.prototype.delete = function(t) {
                var e = this.__data__,
                  r = Qr(e, t);
                return !(r < 0 || (r == e.length - 1 ? e.pop() : Ut.call(e, r, 1), --this.size, 0))
              }, Hr.prototype.get = function(t) {
                var e = this.__data__,
                  r = Qr(e, t);
                return r < 0 ? i : e[r][1]
              }, Hr.prototype.has = function(t) {
                return Qr(this.__data__, t) > -1
              }, Hr.prototype.set = function(t, e) {
                var r = this.__data__,
                  n = Qr(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
              }, Wr.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                  hash: new Gr,
                  map: new(Er || Hr),
                  string: new Gr
                }
              }, Wr.prototype.delete = function(t) {
                var e = sa(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
              }, Wr.prototype.get = function(t) {
                return sa(this, t).get(t)
              }, Wr.prototype.has = function(t) {
                return sa(this, t).has(t)
              }, Wr.prototype.set = function(t, e) {
                var r = sa(this, t),
                  n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
              }, qr.prototype.add = qr.prototype.push = function(t) {
                return this.__data__.set(t, s), this
              }, qr.prototype.has = function(t) {
                return this.__data__.has(t)
              }, $r.prototype.clear = function() {
                this.__data__ = new Hr, this.size = 0
              }, $r.prototype.delete = function(t) {
                var e = this.__data__,
                  r = e.delete(t);
                return this.size = e.size, r
              }, $r.prototype.get = function(t) {
                return this.__data__.get(t)
              }, $r.prototype.has = function(t) {
                return this.__data__.has(t)
              }, $r.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof Hr) {
                  var n = r.__data__;
                  if (!Er || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                  r = this.__data__ = new Wr(n)
                }
                return r.set(t, e), this.size = r.size, this
              };
              var hn = ki(yn),
                cn = ki(bn, !0);

              function pn(t, e) {
                var r = !0;
                return hn(t, (function(t, n, i) {
                  return r = !!e(t, n, i)
                })), r
              }

              function fn(t, e, r) {
                for (var n = -1, a = t.length; ++n < a;) {
                  var s = t[n],
                    o = e(s);
                  if (null != o && (l === i ? o == o && !so(o) : r(o, l))) var l = o,
                    u = s
                }
                return u
              }

              function dn(t, e) {
                var r = [];
                return hn(t, (function(t, n, i) {
                  e(t, n, i) && r.push(t)
                })), r
              }

              function mn(t, e, r, n, i) {
                var a = -1,
                  s = t.length;
                for (r || (r = da), i || (i = []); ++a < s;) {
                  var o = t[a];
                  e > 0 && r(o) ? e > 1 ? mn(o, e - 1, r, n, i) : De(i, o) : n || (i[i.length] = o)
                }
                return i
              }
              var vn = Ii(),
                gn = Ii(!0);

              function yn(t, e) {
                return t && vn(t, e, ko)
              }

              function bn(t, e) {
                return t && gn(t, e, ko)
              }

              function Sn(t, e) {
                return Ae(e, (function(e) {
                  return Xs(t[e])
                }))
              }

              function xn(t, e) {
                for (var r = 0, n = (e = vi(e, t)).length; null != t && r < n;) t = t[Ra(e[r++])];
                return r && r == n ? t : i
              }

              function En(t, e, r) {
                var n = e(t);
                return Gs(t) ? n : De(n, r(t))
              }

              function _n(t) {
                return null == t ? t === i ? "[object Undefined]" : "[object Null]" : Jt && Jt in wt(t) ? function(t) {
                  var e = Ft.call(t, Jt),
                    r = t[Jt];
                  try {
                    t[Jt] = i;
                    var n = !0
                  } catch (t) {}
                  var a = Lt.call(t);
                  return n && (e ? t[Jt] = r : delete t[Jt]), a
                }(t) : function(t) {
                  return Lt.call(t)
                }(t)
              }

              function wn(t, e) {
                return t > e
              }

              function Pn(t, e) {
                return null != t && Ft.call(t, e)
              }

              function Tn(t, e) {
                return null != t && e in wt(t)
              }

              function Cn(t, e, r) {
                for (var a = r ? ke : Me, s = t[0].length, o = t.length, l = o, u = n(o), h = 1 / 0, c = []; l--;) {
                  var p = t[l];
                  l && e && (p = Ie(p, Xe(e))), h = vr(p.length, h), u[l] = !r && (e || s >= 120 && p.length >= 120) ? new qr(l && p) : i
                }
                p = t[0];
                var f = -1,
                  d = u[0];
                t: for (; ++f < s && c.length < h;) {
                  var m = p[f],
                    v = e ? e(m) : m;
                  if (m = r || 0 !== m ? m : 0, !(d ? Ze(d, v) : a(c, v, r))) {
                    for (l = o; --l;) {
                      var g = u[l];
                      if (!(g ? Ze(g, v) : a(t[l], v, r))) continue t
                    }
                    d && d.push(v), c.push(m)
                  }
                }
                return c
              }

              function An(t, e, r) {
                var n = null == (t = wa(t, e = vi(e, t))) ? t : t[Ra(Ya(e))];
                return null == n ? i : _e(n, t, r)
              }

              function Mn(t) {
                return Qs(t) && _n(t) == m
              }

              function kn(t, e, r, n, a) {
                return t === e || (null == t || null == e || !Qs(t) && !Qs(e) ? t != t && e != e : function(t, e, r, n, a, s) {
                  var o = Gs(t),
                    l = Gs(e),
                    u = o ? v : ca(t),
                    h = l ? v : ca(e),
                    c = (u = u == m ? w : u) == w,
                    p = (h = h == m ? w : h) == w,
                    f = u == h;
                  if (f && $s(t)) {
                    if (!$s(e)) return !1;
                    o = !0, c = !1
                  }
                  if (f && !c) return s || (s = new $r), o || oo(t) ? Ji(t, e, r, n, a, s) : function(t, e, r, n, i, a, s) {
                    switch (r) {
                      case D:
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                      case I:
                        return !(t.byteLength != e.byteLength || !a(new Gt(t), new Gt(e)));
                      case g:
                      case y:
                      case _:
                        return Vs(+t, +e);
                      case b:
                        return t.name == e.name && t.message == e.message;
                      case T:
                      case A:
                        return t == e + "";
                      case E:
                        var o = ir;
                      case C:
                        var l = 1 & n;
                        if (o || (o = or), t.size != e.size && !l) return !1;
                        var u = s.get(t);
                        if (u) return u == e;
                        n |= 2, s.set(t, e);
                        var h = Ji(o(t), o(e), n, i, a, s);
                        return s.delete(t), h;
                      case M:
                        if (Rr) return Rr.call(t) == Rr.call(e)
                    }
                    return !1
                  }(t, e, u, r, n, a, s);
                  if (!(1 & r)) {
                    var d = c && Ft.call(t, "__wrapped__"),
                      S = p && Ft.call(e, "__wrapped__");
                    if (d || S) {
                      var x = d ? t.value() : t,
                        P = S ? e.value() : e;
                      return s || (s = new $r), a(x, P, r, n, s)
                    }
                  }
                  return !!f && (s || (s = new $r), function(t, e, r, n, a, s) {
                    var o = 1 & r,
                      l = ta(t),
                      u = l.length;
                    if (u != ta(e).length && !o) return !1;
                    for (var h = u; h--;) {
                      var c = l[h];
                      if (!(o ? c in e : Ft.call(e, c))) return !1
                    }
                    var p = s.get(t),
                      f = s.get(e);
                    if (p && f) return p == e && f == t;
                    var d = !0;
                    s.set(t, e), s.set(e, t);
                    for (var m = o; ++h < u;) {
                      var v = t[c = l[h]],
                        g = e[c];
                      if (n) var y = o ? n(g, v, c, e, t, s) : n(v, g, c, t, e, s);
                      if (!(y === i ? v === g || a(v, g, r, n, s) : y)) {
                        d = !1;
                        break
                      }
                      m || (m = "constructor" == c)
                    }
                    if (d && !m) {
                      var b = t.constructor,
                        S = e.constructor;
                      b == S || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b && "function" == typeof S && S instanceof S || (d = !1)
                    }
                    return s.delete(t), s.delete(e), d
                  }(t, e, r, n, a, s))
                }(t, e, r, n, kn, a))
              }

              function In(t, e, r, n) {
                var a = r.length,
                  s = a,
                  o = !n;
                if (null == t) return !s;
                for (t = wt(t); a--;) {
                  var l = r[a];
                  if (o && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
                }
                for (; ++a < s;) {
                  var u = (l = r[a])[0],
                    h = t[u],
                    c = l[1];
                  if (o && l[2]) {
                    if (h === i && !(u in t)) return !1
                  } else {
                    var p = new $r;
                    if (n) var f = n(h, c, u, t, e, p);
                    if (!(f === i ? kn(c, h, 3, n, p) : f)) return !1
                  }
                }
                return !0
              }

              function Dn(t) {
                return !(!Js(t) || (e = t, Rt && Rt in e)) && (Xs(t) ? zt : mt).test(La(t));
                var e
              }

              function Fn(t) {
                return "function" == typeof t ? t : null == t ? rl : "object" == typeof t ? Gs(t) ? Vn(t[0], t[1]) : Bn(t) : cl(t)
              }

              function On(t) {
                if (!Sa(t)) return dr(t);
                var e = [];
                for (var r in wt(t)) Ft.call(t, r) && "constructor" != r && e.push(r);
                return e
              }

              function Rn(t, e) {
                return t < e
              }

              function Ln(t, e) {
                var r = -1,
                  i = Ws(t) ? n(t.length) : [];
                return hn(t, (function(t, n, a) {
                  i[++r] = e(t, n, a)
                })), i
              }

              function Bn(t) {
                var e = oa(t);
                return 1 == e.length && e[0][2] ? Ea(e[0][0], e[0][1]) : function(r) {
                  return r === t || In(r, t, e)
                }
              }

              function Vn(t, e) {
                return ga(t) && xa(e) ? Ea(Ra(t), e) : function(r) {
                  var n = Po(r, t);
                  return n === i && n === e ? To(r, t) : kn(e, n, 3)
                }
              }

              function zn(t, e, r, n, a) {
                t !== e && vn(e, (function(s, o) {
                  if (a || (a = new $r), Js(s)) ! function(t, e, r, n, a, s, o) {
                    var l = Pa(t, r),
                      u = Pa(e, r),
                      h = o.get(u);
                    if (h) Zr(t, r, h);
                    else {
                      var c = s ? s(l, u, r + "", t, e, o) : i,
                        p = c === i;
                      if (p) {
                        var f = Gs(u),
                          d = !f && $s(u),
                          m = !f && !d && oo(u);
                        c = u, f || d || m ? Gs(l) ? c = l : qs(l) ? c = Ti(l) : d ? (p = !1, c = Si(u, !0)) : m ? (p = !1, c = Ei(u, !0)) : c = [] : ro(u) || js(u) ? (c = l, js(l) ? c = vo(l) : Js(l) && !Xs(l) || (c = fa(u))) : p = !1
                      }
                      p && (o.set(u, c), a(c, u, n, s, o), o.delete(u)), Zr(t, r, c)
                    }
                  }(t, e, o, r, zn, n, a);
                  else {
                    var l = n ? n(Pa(t, o), s, o + "", t, e, a) : i;
                    l === i && (l = s), Zr(t, o, l)
                  }
                }), Io)
              }

              function Nn(t, e) {
                var r = t.length;
                if (r) return ma(e += e < 0 ? r : 0, r) ? t[e] : i
              }

              function jn(t, e, r) {
                e = e.length ? Ie(e, (function(t) {
                  return Gs(t) ? function(e) {
                    return xn(e, 1 === t.length ? t[0] : t)
                  } : t
                })) : [rl];
                var n = -1;
                e = Ie(e, Xe(aa()));
                var i = Ln(t, (function(t, r, i) {
                  var a = Ie(e, (function(e) {
                    return e(t)
                  }));
                  return {
                    criteria: a,
                    index: ++n,
                    value: t
                  }
                }));
                return function(t, e) {
                  var n = t.length;
                  for (t.sort((function(t, e) {
                      return function(t, e, r) {
                        for (var n = -1, i = t.criteria, a = e.criteria, s = i.length, o = r.length; ++n < s;) {
                          var l = _i(i[n], a[n]);
                          if (l) return n >= o ? l : l * ("desc" == r[n] ? -1 : 1)
                        }
                        return t.index - e.index
                      }(t, e, r)
                    })); n--;) t[n] = t[n].value;
                  return t
                }(i)
              }

              function Gn(t, e, r) {
                for (var n = -1, i = e.length, a = {}; ++n < i;) {
                  var s = e[n],
                    o = xn(t, s);
                  r(o, s) && Kn(a, vi(s, t), o)
                }
                return a
              }

              function Hn(t, e, r, n) {
                var i = n ? Ne : ze,
                  a = -1,
                  s = e.length,
                  o = t;
                for (t === e && (e = Ti(e)), r && (o = Ie(t, Xe(r))); ++a < s;)
                  for (var l = 0, u = e[a], h = r ? r(u) : u;
                    (l = i(o, h, l, n)) > -1;) o !== t && Ut.call(o, l, 1), Ut.call(t, l, 1);
                return t
              }

              function Wn(t, e) {
                for (var r = t ? e.length : 0, n = r - 1; r--;) {
                  var i = e[r];
                  if (r == n || i !== a) {
                    var a = i;
                    ma(i) ? Ut.call(t, i, 1) : li(t, i)
                  }
                }
                return t
              }

              function qn(t, e) {
                return t + fe(br() * (e - t + 1))
              }

              function $n(t, e) {
                var r = "";
                if (!t || e < 1 || e > c) return r;
                do {
                  e % 2 && (r += t), (e = fe(e / 2)) && (t += t)
                } while (e);
                return r
              }

              function Un(t, e) {
                return Aa(_a(t, e, rl), t + "")
              }

              function Yn(t) {
                return Yr(zo(t))
              }

              function Xn(t, e) {
                var r = zo(t);
                return Ia(r, an(e, 0, r.length))
              }

              function Kn(t, e, r, n) {
                if (!Js(t)) return t;
                for (var a = -1, s = (e = vi(e, t)).length, o = s - 1, l = t; null != l && ++a < s;) {
                  var u = Ra(e[a]),
                    h = r;
                  if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
                  if (a != o) {
                    var c = l[u];
                    (h = n ? n(c, u, l) : i) === i && (h = Js(c) ? c : ma(e[a + 1]) ? [] : {})
                  }
                  Jr(l, u, h), l = l[u]
                }
                return t
              }
              var Zn = Cr ? function(t, e) {
                  return Cr.set(t, e), t
                } : rl,
                Jn = te ? function(t, e) {
                  return te(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Qo(e),
                    writable: !0
                  })
                } : rl;

              function Qn(t) {
                return Ia(zo(t))
              }

              function ti(t, e, r) {
                var i = -1,
                  a = t.length;
                e < 0 && (e = -e > a ? 0 : a + e), (r = r > a ? a : r) < 0 && (r += a), a = e > r ? 0 : r - e >>> 0, e >>>= 0;
                for (var s = n(a); ++i < a;) s[i] = t[i + e];
                return s
              }

              function ei(t, e) {
                var r;
                return hn(t, (function(t, n, i) {
                  return !(r = e(t, n, i))
                })), !!r
              }

              function ri(t, e, r) {
                var n = 0,
                  i = null == t ? n : t.length;
                if ("number" == typeof e && e == e && i <= 2147483647) {
                  for (; n < i;) {
                    var a = n + i >>> 1,
                      s = t[a];
                    null !== s && !so(s) && (r ? s <= e : s < e) ? n = a + 1 : i = a
                  }
                  return i
                }
                return ni(t, e, rl, r)
              }

              function ni(t, e, r, n) {
                var a = 0,
                  s = null == t ? 0 : t.length;
                if (0 === s) return 0;
                for (var o = (e = r(e)) != e, l = null === e, u = so(e), h = e === i; a < s;) {
                  var c = fe((a + s) / 2),
                    p = r(t[c]),
                    f = p !== i,
                    d = null === p,
                    m = p == p,
                    v = so(p);
                  if (o) var g = n || m;
                  else g = h ? m && (n || f) : l ? m && f && (n || !d) : u ? m && f && !d && (n || !v) : !d && !v && (n ? p <= e : p < e);
                  g ? a = c + 1 : s = c
                }
                return vr(s, 4294967294)
              }

              function ii(t, e) {
                for (var r = -1, n = t.length, i = 0, a = []; ++r < n;) {
                  var s = t[r],
                    o = e ? e(s) : s;
                  if (!r || !Vs(o, l)) {
                    var l = o;
                    a[i++] = 0 === s ? 0 : s
                  }
                }
                return a
              }

              function ai(t) {
                return "number" == typeof t ? t : so(t) ? p : +t
              }

              function si(t) {
                if ("string" == typeof t) return t;
                if (Gs(t)) return Ie(t, si) + "";
                if (so(t)) return Lr ? Lr.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
              }

              function oi(t, e, r) {
                var n = -1,
                  i = Me,
                  a = t.length,
                  s = !0,
                  o = [],
                  l = o;
                if (r) s = !1, i = ke;
                else if (a >= 200) {
                  var u = e ? null : $i(t);
                  if (u) return or(u);
                  s = !1, i = Ze, l = new qr
                } else l = e ? [] : o;
                t: for (; ++n < a;) {
                  var h = t[n],
                    c = e ? e(h) : h;
                  if (h = r || 0 !== h ? h : 0, s && c == c) {
                    for (var p = l.length; p--;)
                      if (l[p] === c) continue t;
                    e && l.push(c), o.push(h)
                  } else i(l, c, r) || (l !== o && l.push(c), o.push(h))
                }
                return o
              }

              function li(t, e) {
                return null == (t = wa(t, e = vi(e, t))) || delete t[Ra(Ya(e))]
              }

              function ui(t, e, r, n) {
                return Kn(t, e, r(xn(t, e)), n)
              }

              function hi(t, e, r, n) {
                for (var i = t.length, a = n ? i : -1;
                  (n ? a-- : ++a < i) && e(t[a], a, t););
                return r ? ti(t, n ? 0 : a, n ? a + 1 : i) : ti(t, n ? a + 1 : 0, n ? i : a)
              }

              function ci(t, e) {
                var r = t;
                return r instanceof jr && (r = r.value()), Fe(e, (function(t, e) {
                  return e.func.apply(e.thisArg, De([t], e.args))
                }), r)
              }

              function pi(t, e, r) {
                var i = t.length;
                if (i < 2) return i ? oi(t[0]) : [];
                for (var a = -1, s = n(i); ++a < i;)
                  for (var o = t[a], l = -1; ++l < i;) l != a && (s[a] = un(s[a] || o, t[l], e, r));
                return oi(mn(s, 1), e, r)
              }

              function fi(t, e, r) {
                for (var n = -1, a = t.length, s = e.length, o = {}; ++n < a;) {
                  var l = n < s ? e[n] : i;
                  r(o, t[n], l)
                }
                return o
              }

              function di(t) {
                return qs(t) ? t : []
              }

              function mi(t) {
                return "function" == typeof t ? t : rl
              }

              function vi(t, e) {
                return Gs(t) ? t : ga(t, e) ? [t] : Oa(go(t))
              }
              var gi = Un;

              function yi(t, e, r) {
                var n = t.length;
                return r = r === i ? n : r, !e && r >= n ? t : ti(t, e, r)
              }
              var bi = se || function(t) {
                return ce.clearTimeout(t)
              };

              function Si(t, e) {
                if (e) return t.slice();
                var r = t.length,
                  n = Ht ? Ht(r) : new t.constructor(r);
                return t.copy(n), n
              }

              function xi(t) {
                var e = new t.constructor(t.byteLength);
                return new Gt(e).set(new Gt(t)), e
              }

              function Ei(t, e) {
                var r = e ? xi(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.length)
              }

              function _i(t, e) {
                if (t !== e) {
                  var r = t !== i,
                    n = null === t,
                    a = t == t,
                    s = so(t),
                    o = e !== i,
                    l = null === e,
                    u = e == e,
                    h = so(e);
                  if (!l && !h && !s && t > e || s && o && u && !l && !h || n && o && u || !r && u || !a) return 1;
                  if (!n && !s && !h && t < e || h && r && a && !n && !s || l && r && a || !o && a || !u) return -1
                }
                return 0
              }

              function wi(t, e, r, i) {
                for (var a = -1, s = t.length, o = r.length, l = -1, u = e.length, h = mr(s - o, 0), c = n(u + h), p = !i; ++l < u;) c[l] = e[l];
                for (; ++a < o;)(p || a < s) && (c[r[a]] = t[a]);
                for (; h--;) c[l++] = t[a++];
                return c
              }

              function Pi(t, e, r, i) {
                for (var a = -1, s = t.length, o = -1, l = r.length, u = -1, h = e.length, c = mr(s - l, 0), p = n(c + h), f = !i; ++a < c;) p[a] = t[a];
                for (var d = a; ++u < h;) p[d + u] = e[u];
                for (; ++o < l;)(f || a < s) && (p[d + r[o]] = t[a++]);
                return p
              }

              function Ti(t, e) {
                var r = -1,
                  i = t.length;
                for (e || (e = n(i)); ++r < i;) e[r] = t[r];
                return e
              }

              function Ci(t, e, r, n) {
                var a = !r;
                r || (r = {});
                for (var s = -1, o = e.length; ++s < o;) {
                  var l = e[s],
                    u = n ? n(r[l], t[l], l, r, t) : i;
                  u === i && (u = t[l]), a ? rn(r, l, u) : Jr(r, l, u)
                }
                return r
              }

              function Ai(t, e) {
                return function(r, n) {
                  var i = Gs(r) ? we : tn,
                    a = e ? e() : {};
                  return i(r, t, aa(n, 2), a)
                }
              }

              function Mi(t) {
                return Un((function(e, r) {
                  var n = -1,
                    a = r.length,
                    s = a > 1 ? r[a - 1] : i,
                    o = a > 2 ? r[2] : i;
                  for (s = t.length > 3 && "function" == typeof s ? (a--, s) : i, o && va(r[0], r[1], o) && (s = a < 3 ? i : s, a = 1), e = wt(e); ++n < a;) {
                    var l = r[n];
                    l && t(e, l, n, s)
                  }
                  return e
                }))
              }

              function ki(t, e) {
                return function(r, n) {
                  if (null == r) return r;
                  if (!Ws(r)) return t(r, n);
                  for (var i = r.length, a = e ? i : -1, s = wt(r);
                    (e ? a-- : ++a < i) && !1 !== n(s[a], a, s););
                  return r
                }
              }

              function Ii(t) {
                return function(e, r, n) {
                  for (var i = -1, a = wt(e), s = n(e), o = s.length; o--;) {
                    var l = s[t ? o : ++i];
                    if (!1 === r(a[l], l, a)) break
                  }
                  return e
                }
              }

              function Di(t) {
                return function(e) {
                  var r = nr(e = go(e)) ? hr(e) : i,
                    n = r ? r[0] : e.charAt(0),
                    a = r ? yi(r, 1).join("") : e.slice(1);
                  return n[t]() + a
                }
              }

              function Fi(t) {
                return function(e) {
                  return Fe(Ko(Go(e).replace(Kt, "")), t, "")
                }
              }

              function Oi(t) {
                return function() {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return new t;
                    case 1:
                      return new t(e[0]);
                    case 2:
                      return new t(e[0], e[1]);
                    case 3:
                      return new t(e[0], e[1], e[2]);
                    case 4:
                      return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                      return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                  }
                  var r = Vr(t.prototype),
                    n = t.apply(r, e);
                  return Js(n) ? n : r
                }
              }

              function Ri(t) {
                return function(e, r, n) {
                  var a = wt(e);
                  if (!Ws(e)) {
                    var s = aa(r, 3);
                    e = ko(e), r = function(t) {
                      return s(a[t], t, a)
                    }
                  }
                  var o = t(e, r, n);
                  return o > -1 ? a[s ? e[o] : o] : i
                }
              }

              function Li(t) {
                return Qi((function(e) {
                  var r = e.length,
                    n = r,
                    s = Nr.prototype.thru;
                  for (t && e.reverse(); n--;) {
                    var o = e[n];
                    if ("function" != typeof o) throw new Ct(a);
                    if (s && !l && "wrapper" == na(o)) var l = new Nr([], !0)
                  }
                  for (n = l ? n : r; ++n < r;) {
                    var u = na(o = e[n]),
                      h = "wrapper" == u ? ra(o) : i;
                    l = h && ya(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? l[na(h[0])].apply(l, h[3]) : 1 == o.length && ya(o) ? l[u]() : l.thru(o)
                  }
                  return function() {
                    var t = arguments,
                      n = t[0];
                    if (l && 1 == t.length && Gs(n)) return l.plant(n).value();
                    for (var i = 0, a = r ? e[i].apply(this, t) : n; ++i < r;) a = e[i].call(this, a);
                    return a
                  }
                }))
              }

              function Bi(t, e, r, a, s, o, l, h, c, p) {
                var f = e & u,
                  d = 1 & e,
                  m = 2 & e,
                  v = 24 & e,
                  g = 512 & e,
                  y = m ? i : Oi(t);
                return function u() {
                  for (var b = arguments.length, S = n(b), x = b; x--;) S[x] = arguments[x];
                  if (v) var E = ia(u),
                    _ = function(t, e) {
                      for (var r = t.length, n = 0; r--;) t[r] === e && ++n;
                      return n
                    }(S, E);
                  if (a && (S = wi(S, a, s, v)), o && (S = Pi(S, o, l, v)), b -= _, v && b < p) {
                    var w = sr(S, E);
                    return Wi(t, e, Bi, u.placeholder, r, S, w, h, c, p - b)
                  }
                  var P = d ? r : this,
                    T = m ? P[t] : t;
                  return b = S.length, h ? S = function(t, e) {
                    for (var r = t.length, n = vr(e.length, r), a = Ti(t); n--;) {
                      var s = e[n];
                      t[n] = ma(s, r) ? a[s] : i
                    }
                    return t
                  }(S, h) : g && b > 1 && S.reverse(), f && c < b && (S.length = c), this && this !== ce && this instanceof u && (T = y || Oi(T)), T.apply(P, S)
                }
              }

              function Vi(t, e) {
                return function(r, n) {
                  return function(t, e, r, n) {
                    return yn(t, (function(t, i, a) {
                      e(n, r(t), i, a)
                    })), n
                  }(r, t, e(n), {})
                }
              }

              function zi(t, e) {
                return function(r, n) {
                  var a;
                  if (r === i && n === i) return e;
                  if (r !== i && (a = r), n !== i) {
                    if (a === i) return n;
                    "string" == typeof r || "string" == typeof n ? (r = si(r), n = si(n)) : (r = ai(r), n = ai(n)), a = t(r, n)
                  }
                  return a
                }
              }

              function Ni(t) {
                return Qi((function(e) {
                  return e = Ie(e, Xe(aa())), Un((function(r) {
                    var n = this;
                    return t(e, (function(t) {
                      return _e(t, n, r)
                    }))
                  }))
                }))
              }

              function ji(t, e) {
                var r = (e = e === i ? " " : si(e)).length;
                if (r < 2) return r ? $n(e, t) : e;
                var n = $n(e, pe(t / ur(e)));
                return nr(e) ? yi(hr(n), 0, t).join("") : n.slice(0, t)
              }

              function Gi(t) {
                return function(e, r, a) {
                  return a && "number" != typeof a && va(e, r, a) && (r = a = i), e = co(e), r === i ? (r = e, e = 0) : r = co(r),
                    function(t, e, r, i) {
                      for (var a = -1, s = mr(pe((e - t) / (r || 1)), 0), o = n(s); s--;) o[i ? s : ++a] = t, t += r;
                      return o
                    }(e, r, a = a === i ? e < r ? 1 : -1 : co(a), t)
                }
              }

              function Hi(t) {
                return function(e, r) {
                  return "string" == typeof e && "string" == typeof r || (e = mo(e), r = mo(r)), t(e, r)
                }
              }

              function Wi(t, e, r, n, a, s, o, u, h, c) {
                var p = 8 & e;
                e |= p ? l : 64, 4 & (e &= ~(p ? 64 : l)) || (e &= -4);
                var f = [t, e, a, p ? s : i, p ? o : i, p ? i : s, p ? i : o, u, h, c],
                  d = r.apply(i, f);
                return ya(t) && Ta(d, f), d.placeholder = n, Ma(d, t, e)
              }

              function qi(t) {
                var e = _t[t];
                return function(t, r) {
                  if (t = mo(t), (r = null == r ? 0 : vr(po(r), 292)) && Le(t)) {
                    var n = (go(t) + "e").split("e");
                    return +((n = (go(e(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                  }
                  return e(t)
                }
              }
              var $i = wr && 1 / or(new wr([, -0]))[1] == h ? function(t) {
                return new wr(t)
              } : ol;

              function Ui(t) {
                return function(e) {
                  var r = ca(e);
                  return r == E ? ir(e) : r == C ? lr(e) : function(t, e) {
                    return Ie(e, (function(e) {
                      return [e, t[e]]
                    }))
                  }(e, t(e))
                }
              }

              function Yi(t, e, r, s, h, c, p, f) {
                var d = 2 & e;
                if (!d && "function" != typeof t) throw new Ct(a);
                var m = s ? s.length : 0;
                if (m || (e &= -97, s = h = i), p = p === i ? p : mr(po(p), 0), f = f === i ? f : po(f), m -= h ? h.length : 0, 64 & e) {
                  var v = s,
                    g = h;
                  s = h = i
                }
                var y = d ? i : ra(t),
                  b = [t, e, r, s, h, v, g, c, p, f];
                if (y && function(t, e) {
                    var r = t[1],
                      n = e[1],
                      i = r | n,
                      a = i < 131,
                      s = n == u && 8 == r || n == u && 256 == r && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == r;
                    if (!a && !s) return t;
                    1 & n && (t[2] = e[2], i |= 1 & r ? 0 : 4);
                    var l = e[3];
                    if (l) {
                      var h = t[3];
                      t[3] = h ? wi(h, l, e[4]) : l, t[4] = h ? sr(t[3], o) : e[4]
                    }(l = e[5]) && (h = t[5], t[5] = h ? Pi(h, l, e[6]) : l, t[6] = h ? sr(t[5], o) : e[6]), (l = e[7]) && (t[7] = l), n & u && (t[8] = null == t[8] ? e[8] : vr(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i
                  }(b, y), t = b[0], e = b[1], r = b[2], s = b[3], h = b[4], !(f = b[9] = b[9] === i ? d ? 0 : t.length : mr(b[9] - m, 0)) && 24 & e && (e &= -25), e && 1 != e) S = 8 == e || 16 == e ? function(t, e, r) {
                  var a = Oi(t);
                  return function s() {
                    for (var o = arguments.length, l = n(o), u = o, h = ia(s); u--;) l[u] = arguments[u];
                    var c = o < 3 && l[0] !== h && l[o - 1] !== h ? [] : sr(l, h);
                    return (o -= c.length) < r ? Wi(t, e, Bi, s.placeholder, i, l, c, i, i, r - o) : _e(this && this !== ce && this instanceof s ? a : t, this, l)
                  }
                }(t, e, f) : e != l && 33 != e || h.length ? Bi.apply(i, b) : function(t, e, r, i) {
                  var a = 1 & e,
                    s = Oi(t);
                  return function e() {
                    for (var o = -1, l = arguments.length, u = -1, h = i.length, c = n(h + l), p = this && this !== ce && this instanceof e ? s : t; ++u < h;) c[u] = i[u];
                    for (; l--;) c[u++] = arguments[++o];
                    return _e(p, a ? r : this, c)
                  }
                }(t, e, r, s);
                else var S = function(t, e, r) {
                  var n = 1 & e,
                    i = Oi(t);
                  return function e() {
                    return (this && this !== ce && this instanceof e ? i : t).apply(n ? r : this, arguments)
                  }
                }(t, e, r);
                return Ma((y ? Zn : Ta)(S, b), t, e)
              }

              function Xi(t, e, r, n) {
                return t === i || Vs(t, kt[r]) && !Ft.call(n, r) ? e : t
              }

              function Ki(t, e, r, n, a, s) {
                return Js(t) && Js(e) && (s.set(e, t), zn(t, e, i, Ki, s), s.delete(e)), t
              }

              function Zi(t) {
                return ro(t) ? i : t
              }

              function Ji(t, e, r, n, a, s) {
                var o = 1 & r,
                  l = t.length,
                  u = e.length;
                if (l != u && !(o && u > l)) return !1;
                var h = s.get(t),
                  c = s.get(e);
                if (h && c) return h == e && c == t;
                var p = -1,
                  f = !0,
                  d = 2 & r ? new qr : i;
                for (s.set(t, e), s.set(e, t); ++p < l;) {
                  var m = t[p],
                    v = e[p];
                  if (n) var g = o ? n(v, m, p, e, t, s) : n(m, v, p, t, e, s);
                  if (g !== i) {
                    if (g) continue;
                    f = !1;
                    break
                  }
                  if (d) {
                    if (!Re(e, (function(t, e) {
                        if (!Ze(d, e) && (m === t || a(m, t, r, n, s))) return d.push(e)
                      }))) {
                      f = !1;
                      break
                    }
                  } else if (m !== v && !a(m, v, r, n, s)) {
                    f = !1;
                    break
                  }
                }
                return s.delete(t), s.delete(e), f
              }

              function Qi(t) {
                return Aa(_a(t, i, Ha), t + "")
              }

              function ta(t) {
                return En(t, ko, ua)
              }

              function ea(t) {
                return En(t, Io, ha)
              }
              var ra = Cr ? function(t) {
                return Cr.get(t)
              } : ol;

              function na(t) {
                for (var e = t.name + "", r = Ar[e], n = Ft.call(Ar, e) ? r.length : 0; n--;) {
                  var i = r[n],
                    a = i.func;
                  if (null == a || a == t) return i.name
                }
                return e
              }

              function ia(t) {
                return (Ft.call(Br, "placeholder") ? Br : t).placeholder
              }

              function aa() {
                var t = Br.iteratee || nl;
                return t = t === nl ? Fn : t, arguments.length ? t(arguments[0], arguments[1]) : t
              }

              function sa(t, e) {
                var r, n, i = t.__data__;
                return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
              }

              function oa(t) {
                for (var e = ko(t), r = e.length; r--;) {
                  var n = e[r],
                    i = t[n];
                  e[r] = [n, i, xa(i)]
                }
                return e
              }

              function la(t, e) {
                var r = function(t, e) {
                  return null == t ? i : t[e]
                }(t, e);
                return Dn(r) ? r : i
              }
              var ua = me ? function(t) {
                  return null == t ? [] : (t = wt(t), Ae(me(t), (function(e) {
                    return $t.call(t, e)
                  })))
                } : dl,
                ha = me ? function(t) {
                  for (var e = []; t;) De(e, ua(t)), t = Wt(t);
                  return e
                } : dl,
                ca = _n;

              function pa(t, e, r) {
                for (var n = -1, i = (e = vi(e, t)).length, a = !1; ++n < i;) {
                  var s = Ra(e[n]);
                  if (!(a = null != t && r(t, s))) break;
                  t = t[s]
                }
                return a || ++n != i ? a : !!(i = null == t ? 0 : t.length) && Zs(i) && ma(s, i) && (Gs(t) || js(t))
              }

              function fa(t) {
                return "function" != typeof t.constructor || Sa(t) ? {} : Vr(Wt(t))
              }

              function da(t) {
                return Gs(t) || js(t) || !!(Yt && t && t[Yt])
              }

              function ma(t, e) {
                var r = typeof t;
                return !!(e = null == e ? c : e) && ("number" == r || "symbol" != r && gt.test(t)) && t > -1 && t % 1 == 0 && t < e
              }

              function va(t, e, r) {
                if (!Js(r)) return !1;
                var n = typeof e;
                return !!("number" == n ? Ws(r) && ma(e, r.length) : "string" == n && e in r) && Vs(r[e], t)
              }

              function ga(t, e) {
                if (Gs(t)) return !1;
                var r = typeof t;
                return !("number" != r && "symbol" != r && "boolean" != r && null != t && !so(t)) || Q.test(t) || !J.test(t) || null != e && t in wt(e)
              }

              function ya(t) {
                var e = na(t),
                  r = Br[e];
                if ("function" != typeof r || !(e in jr.prototype)) return !1;
                if (t === r) return !0;
                var n = ra(r);
                return !!n && t === n[0]
              }(xr && ca(new xr(new ArrayBuffer(1))) != D || Er && ca(new Er) != E || _r && ca(_r.resolve()) != P || wr && ca(new wr) != C || Pr && ca(new Pr) != k) && (ca = function(t) {
                var e = _n(t),
                  r = e == w ? t.constructor : i,
                  n = r ? La(r) : "";
                if (n) switch (n) {
                  case Mr:
                    return D;
                  case kr:
                    return E;
                  case Ir:
                    return P;
                  case Dr:
                    return C;
                  case Fr:
                    return k
                }
                return e
              });
              var ba = It ? Xs : ml;

              function Sa(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || kt)
              }

              function xa(t) {
                return t == t && !Js(t)
              }

              function Ea(t, e) {
                return function(r) {
                  return null != r && r[t] === e && (e !== i || t in wt(r))
                }
              }

              function _a(t, e, r) {
                return e = mr(e === i ? t.length - 1 : e, 0),
                  function() {
                    for (var i = arguments, a = -1, s = mr(i.length - e, 0), o = n(s); ++a < s;) o[a] = i[e + a];
                    a = -1;
                    for (var l = n(e + 1); ++a < e;) l[a] = i[a];
                    return l[e] = r(o), _e(t, this, l)
                  }
              }

              function wa(t, e) {
                return e.length < 2 ? t : xn(t, ti(e, 0, -1))
              }

              function Pa(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
              }
              var Ta = ka(Zn),
                Ca = he || function(t, e) {
                  return ce.setTimeout(t, e)
                },
                Aa = ka(Jn);

              function Ma(t, e, r) {
                var n = e + "";
                return Aa(t, function(t, e) {
                  var r = e.length;
                  if (!r) return t;
                  var n = r - 1;
                  return e[n] = (r > 1 ? "& " : "") + e[n], e = e.join(r > 2 ? ", " : " "), t.replace(at, "{\n/* [wrapped with " + e + "] */\n")
                }(n, function(t, e) {
                  return Pe(d, (function(r) {
                    var n = "_." + r[0];
                    e & r[1] && !Me(t, n) && t.push(n)
                  })), t.sort()
                }(function(t) {
                  var e = t.match(st);
                  return e ? e[1].split(ot) : []
                }(n), r)))
              }

              function ka(t) {
                var e = 0,
                  r = 0;
                return function() {
                  var n = gr(),
                    a = 16 - (n - r);
                  if (r = n, a > 0) {
                    if (++e >= 800) return arguments[0]
                  } else e = 0;
                  return t.apply(i, arguments)
                }
              }

              function Ia(t, e) {
                var r = -1,
                  n = t.length,
                  a = n - 1;
                for (e = e === i ? n : e; ++r < e;) {
                  var s = qn(r, a),
                    o = t[s];
                  t[s] = t[r], t[r] = o
                }
                return t.length = e, t
              }
              var Da, Fa, Oa = (Da = Ds((function(t) {
                var e = [];
                return 46 === t.charCodeAt(0) && e.push(""), t.replace(tt, (function(t, r, n, i) {
                  e.push(n ? i.replace(ht, "$1") : r || t)
                })), e
              }), (function(t) {
                return 500 === Fa.size && Fa.clear(), t
              })), Fa = Da.cache, Da);

              function Ra(t) {
                if ("string" == typeof t || so(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
              }

              function La(t) {
                if (null != t) {
                  try {
                    return Dt.call(t)
                  } catch (t) {}
                  try {
                    return t + ""
                  } catch (t) {}
                }
                return ""
              }

              function Ba(t) {
                if (t instanceof jr) return t.clone();
                var e = new Nr(t.__wrapped__, t.__chain__);
                return e.__actions__ = Ti(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
              }
              var Va = Un((function(t, e) {
                  return qs(t) ? un(t, mn(e, 1, qs, !0)) : []
                })),
                za = Un((function(t, e) {
                  var r = Ya(e);
                  return qs(r) && (r = i), qs(t) ? un(t, mn(e, 1, qs, !0), aa(r, 2)) : []
                })),
                Na = Un((function(t, e) {
                  var r = Ya(e);
                  return qs(r) && (r = i), qs(t) ? un(t, mn(e, 1, qs, !0), i, r) : []
                }));

              function ja(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : po(r);
                return i < 0 && (i = mr(n + i, 0)), Ve(t, aa(e, 3), i)
              }

              function Ga(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var a = n - 1;
                return r !== i && (a = po(r), a = r < 0 ? mr(n + a, 0) : vr(a, n - 1)), Ve(t, aa(e, 3), a, !0)
              }

              function Ha(t) {
                return null != t && t.length ? mn(t, 1) : []
              }

              function Wa(t) {
                return t && t.length ? t[0] : i
              }
              var qa = Un((function(t) {
                  var e = Ie(t, di);
                  return e.length && e[0] === t[0] ? Cn(e) : []
                })),
                $a = Un((function(t) {
                  var e = Ya(t),
                    r = Ie(t, di);
                  return e === Ya(r) ? e = i : r.pop(), r.length && r[0] === t[0] ? Cn(r, aa(e, 2)) : []
                })),
                Ua = Un((function(t) {
                  var e = Ya(t),
                    r = Ie(t, di);
                  return (e = "function" == typeof e ? e : i) && r.pop(), r.length && r[0] === t[0] ? Cn(r, i, e) : []
                }));

              function Ya(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : i
              }
              var Xa = Un(Ka);

              function Ka(t, e) {
                return t && t.length && e && e.length ? Hn(t, e) : t
              }
              var Za = Qi((function(t, e) {
                var r = null == t ? 0 : t.length,
                  n = nn(t, e);
                return Wn(t, Ie(e, (function(t) {
                  return ma(t, r) ? +t : t
                })).sort(_i)), n
              }));

              function Ja(t) {
                return null == t ? t : Sr.call(t)
              }
              var Qa = Un((function(t) {
                  return oi(mn(t, 1, qs, !0))
                })),
                ts = Un((function(t) {
                  var e = Ya(t);
                  return qs(e) && (e = i), oi(mn(t, 1, qs, !0), aa(e, 2))
                })),
                es = Un((function(t) {
                  var e = Ya(t);
                  return e = "function" == typeof e ? e : i, oi(mn(t, 1, qs, !0), i, e)
                }));

              function rs(t) {
                if (!t || !t.length) return [];
                var e = 0;
                return t = Ae(t, (function(t) {
                  if (qs(t)) return e = mr(t.length, e), !0
                })), Ue(e, (function(e) {
                  return Ie(t, He(e))
                }))
              }

              function ns(t, e) {
                if (!t || !t.length) return [];
                var r = rs(t);
                return null == e ? r : Ie(r, (function(t) {
                  return _e(e, i, t)
                }))
              }
              var is = Un((function(t, e) {
                  return qs(t) ? un(t, e) : []
                })),
                as = Un((function(t) {
                  return pi(Ae(t, qs))
                })),
                ss = Un((function(t) {
                  var e = Ya(t);
                  return qs(e) && (e = i), pi(Ae(t, qs), aa(e, 2))
                })),
                os = Un((function(t) {
                  var e = Ya(t);
                  return e = "function" == typeof e ? e : i, pi(Ae(t, qs), i, e)
                })),
                ls = Un(rs),
                us = Un((function(t) {
                  var e = t.length,
                    r = e > 1 ? t[e - 1] : i;
                  return r = "function" == typeof r ? (t.pop(), r) : i, ns(t, r)
                }));

              function hs(t) {
                var e = Br(t);
                return e.__chain__ = !0, e
              }

              function cs(t, e) {
                return e(t)
              }
              var ps = Qi((function(t) {
                  var e = t.length,
                    r = e ? t[0] : 0,
                    n = this.__wrapped__,
                    a = function(e) {
                      return nn(e, t)
                    };
                  return !(e > 1 || this.__actions__.length) && n instanceof jr && ma(r) ? ((n = n.slice(r, +r + (e ? 1 : 0))).__actions__.push({
                    func: cs,
                    args: [a],
                    thisArg: i
                  }), new Nr(n, this.__chain__).thru((function(t) {
                    return e && !t.length && t.push(i), t
                  }))) : this.thru(a)
                })),
                fs = Ai((function(t, e, r) {
                  Ft.call(t, r) ? ++t[r] : rn(t, r, 1)
                })),
                ds = Ri(ja),
                ms = Ri(Ga);

              function vs(t, e) {
                return (Gs(t) ? Pe : hn)(t, aa(e, 3))
              }

              function gs(t, e) {
                return (Gs(t) ? Te : cn)(t, aa(e, 3))
              }
              var ys = Ai((function(t, e, r) {
                  Ft.call(t, r) ? t[r].push(e) : rn(t, r, [e])
                })),
                bs = Un((function(t, e, r) {
                  var i = -1,
                    a = "function" == typeof e,
                    s = Ws(t) ? n(t.length) : [];
                  return hn(t, (function(t) {
                    s[++i] = a ? _e(e, t, r) : An(t, e, r)
                  })), s
                })),
                Ss = Ai((function(t, e, r) {
                  rn(t, r, e)
                }));

              function xs(t, e) {
                return (Gs(t) ? Ie : Ln)(t, aa(e, 3))
              }
              var Es = Ai((function(t, e, r) {
                  t[r ? 0 : 1].push(e)
                }), (function() {
                  return [
                    [],
                    []
                  ]
                })),
                _s = Un((function(t, e) {
                  if (null == t) return [];
                  var r = e.length;
                  return r > 1 && va(t, e[0], e[1]) ? e = [] : r > 2 && va(e[0], e[1], e[2]) && (e = [e[0]]), jn(t, mn(e, 1), [])
                })),
                ws = ue || function() {
                  return ce.Date.now()
                };

              function Ps(t, e, r) {
                return e = r ? i : e, e = t && null == e ? t.length : e, Yi(t, u, i, i, i, i, e)
              }

              function Ts(t, e) {
                var r;
                if ("function" != typeof e) throw new Ct(a);
                return t = po(t),
                  function() {
                    return --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = i), r
                  }
              }
              var Cs = Un((function(t, e, r) {
                  var n = 1;
                  if (r.length) {
                    var i = sr(r, ia(Cs));
                    n |= l
                  }
                  return Yi(t, n, e, r, i)
                })),
                As = Un((function(t, e, r) {
                  var n = 3;
                  if (r.length) {
                    var i = sr(r, ia(As));
                    n |= l
                  }
                  return Yi(e, n, t, r, i)
                }));

              function Ms(t, e, r) {
                var n, s, o, l, u, h, c = 0,
                  p = !1,
                  f = !1,
                  d = !0;
                if ("function" != typeof t) throw new Ct(a);

                function m(e) {
                  var r = n,
                    a = s;
                  return n = s = i, c = e, l = t.apply(a, r)
                }

                function v(t) {
                  var r = t - h;
                  return h === i || r >= e || r < 0 || f && t - c >= o
                }

                function g() {
                  var t = ws();
                  if (v(t)) return y(t);
                  u = Ca(g, function(t) {
                    var r = e - (t - h);
                    return f ? vr(r, o - (t - c)) : r
                  }(t))
                }

                function y(t) {
                  return u = i, d && n ? m(t) : (n = s = i, l)
                }

                function b() {
                  var t = ws(),
                    r = v(t);
                  if (n = arguments, s = this, h = t, r) {
                    if (u === i) return function(t) {
                      return c = t, u = Ca(g, e), p ? m(t) : l
                    }(h);
                    if (f) return bi(u), u = Ca(g, e), m(h)
                  }
                  return u === i && (u = Ca(g, e)), l
                }
                return e = mo(e) || 0, Js(r) && (p = !!r.leading, o = (f = "maxWait" in r) ? mr(mo(r.maxWait) || 0, e) : o, d = "trailing" in r ? !!r.trailing : d), b.cancel = function() {
                  u !== i && bi(u), c = 0, n = h = s = u = i
                }, b.flush = function() {
                  return u === i ? l : y(ws())
                }, b
              }
              var ks = Un((function(t, e) {
                  return ln(t, 1, e)
                })),
                Is = Un((function(t, e, r) {
                  return ln(t, mo(e) || 0, r)
                }));

              function Ds(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new Ct(a);
                var r = function() {
                  var n = arguments,
                    i = e ? e.apply(this, n) : n[0],
                    a = r.cache;
                  if (a.has(i)) return a.get(i);
                  var s = t.apply(this, n);
                  return r.cache = a.set(i, s) || a, s
                };
                return r.cache = new(Ds.Cache || Wr), r
              }

              function Fs(t) {
                if ("function" != typeof t) throw new Ct(a);
                return function() {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return !t.call(this);
                    case 1:
                      return !t.call(this, e[0]);
                    case 2:
                      return !t.call(this, e[0], e[1]);
                    case 3:
                      return !t.call(this, e[0], e[1], e[2])
                  }
                  return !t.apply(this, e)
                }
              }
              Ds.Cache = Wr;
              var Os = gi((function(t, e) {
                  var r = (e = 1 == e.length && Gs(e[0]) ? Ie(e[0], Xe(aa())) : Ie(mn(e, 1), Xe(aa()))).length;
                  return Un((function(n) {
                    for (var i = -1, a = vr(n.length, r); ++i < a;) n[i] = e[i].call(this, n[i]);
                    return _e(t, this, n)
                  }))
                })),
                Rs = Un((function(t, e) {
                  var r = sr(e, ia(Rs));
                  return Yi(t, l, i, e, r)
                })),
                Ls = Un((function(t, e) {
                  var r = sr(e, ia(Ls));
                  return Yi(t, 64, i, e, r)
                })),
                Bs = Qi((function(t, e) {
                  return Yi(t, 256, i, i, i, e)
                }));

              function Vs(t, e) {
                return t === e || t != t && e != e
              }
              var zs = Hi(wn),
                Ns = Hi((function(t, e) {
                  return t >= e
                })),
                js = Mn(function() {
                  return arguments
                }()) ? Mn : function(t) {
                  return Qs(t) && Ft.call(t, "callee") && !$t.call(t, "callee")
                },
                Gs = n.isArray,
                Hs = ge ? Xe(ge) : function(t) {
                  return Qs(t) && _n(t) == I
                };

              function Ws(t) {
                return null != t && Zs(t.length) && !Xs(t)
              }

              function qs(t) {
                return Qs(t) && Ws(t)
              }
              var $s = ve || ml,
                Us = ye ? Xe(ye) : function(t) {
                  return Qs(t) && _n(t) == y
                };

              function Ys(t) {
                if (!Qs(t)) return !1;
                var e = _n(t);
                return e == b || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !ro(t)
              }

              function Xs(t) {
                if (!Js(t)) return !1;
                var e = _n(t);
                return e == S || e == x || "[object AsyncFunction]" == e || "[object Proxy]" == e
              }

              function Ks(t) {
                return "number" == typeof t && t == po(t)
              }

              function Zs(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= c
              }

              function Js(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
              }

              function Qs(t) {
                return null != t && "object" == typeof t
              }
              var to = be ? Xe(be) : function(t) {
                return Qs(t) && ca(t) == E
              };

              function eo(t) {
                return "number" == typeof t || Qs(t) && _n(t) == _
              }

              function ro(t) {
                if (!Qs(t) || _n(t) != w) return !1;
                var e = Wt(t);
                if (null === e) return !0;
                var r = Ft.call(e, "constructor") && e.constructor;
                return "function" == typeof r && r instanceof r && Dt.call(r) == Bt
              }
              var no = Se ? Xe(Se) : function(t) {
                  return Qs(t) && _n(t) == T
                },
                io = xe ? Xe(xe) : function(t) {
                  return Qs(t) && ca(t) == C
                };

              function ao(t) {
                return "string" == typeof t || !Gs(t) && Qs(t) && _n(t) == A
              }

              function so(t) {
                return "symbol" == typeof t || Qs(t) && _n(t) == M
              }
              var oo = Ee ? Xe(Ee) : function(t) {
                  return Qs(t) && Zs(t.length) && !!ie[_n(t)]
                },
                lo = Hi(Rn),
                uo = Hi((function(t, e) {
                  return t <= e
                }));

              function ho(t) {
                if (!t) return [];
                if (Ws(t)) return ao(t) ? hr(t) : Ti(t);
                if (Xt && t[Xt]) return function(t) {
                  for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                  return r
                }(t[Xt]());
                var e = ca(t);
                return (e == E ? ir : e == C ? or : zo)(t)
              }

              function co(t) {
                return t ? (t = mo(t)) === h || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
              }

              function po(t) {
                var e = co(t),
                  r = e % 1;
                return e == e ? r ? e - r : e : 0
              }

              function fo(t) {
                return t ? an(po(t), 0, f) : 0
              }

              function mo(t) {
                if ("number" == typeof t) return t;
                if (so(t)) return p;
                if (Js(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = Js(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = Ye(t);
                var r = dt.test(t);
                return r || vt.test(t) ? le(t.slice(2), r ? 2 : 8) : ft.test(t) ? p : +t
              }

              function vo(t) {
                return Ci(t, Io(t))
              }

              function go(t) {
                return null == t ? "" : si(t)
              }
              var yo = Mi((function(t, e) {
                  if (Sa(e) || Ws(e)) Ci(e, ko(e), t);
                  else
                    for (var r in e) Ft.call(e, r) && Jr(t, r, e[r])
                })),
                bo = Mi((function(t, e) {
                  Ci(e, Io(e), t)
                })),
                So = Mi((function(t, e, r, n) {
                  Ci(e, Io(e), t, n)
                })),
                xo = Mi((function(t, e, r, n) {
                  Ci(e, ko(e), t, n)
                })),
                Eo = Qi(nn),
                _o = Un((function(t, e) {
                  t = wt(t);
                  var r = -1,
                    n = e.length,
                    a = n > 2 ? e[2] : i;
                  for (a && va(e[0], e[1], a) && (n = 1); ++r < n;)
                    for (var s = e[r], o = Io(s), l = -1, u = o.length; ++l < u;) {
                      var h = o[l],
                        c = t[h];
                      (c === i || Vs(c, kt[h]) && !Ft.call(t, h)) && (t[h] = s[h])
                    }
                  return t
                })),
                wo = Un((function(t) {
                  return t.push(i, Ki), _e(Fo, i, t)
                }));

              function Po(t, e, r) {
                var n = null == t ? i : xn(t, e);
                return n === i ? r : n
              }

              function To(t, e) {
                return null != t && pa(t, e, Tn)
              }
              var Co = Vi((function(t, e, r) {
                  null != e && "function" != typeof e.toString && (e = Lt.call(e)), t[e] = r
                }), Qo(rl)),
                Ao = Vi((function(t, e, r) {
                  null != e && "function" != typeof e.toString && (e = Lt.call(e)), Ft.call(t, e) ? t[e].push(r) : t[e] = [r]
                }), aa),
                Mo = Un(An);

              function ko(t) {
                return Ws(t) ? Ur(t) : On(t)
              }

              function Io(t) {
                return Ws(t) ? Ur(t, !0) : function(t) {
                  if (!Js(t)) return function(t) {
                    var e = [];
                    if (null != t)
                      for (var r in wt(t)) e.push(r);
                    return e
                  }(t);
                  var e = Sa(t),
                    r = [];
                  for (var n in t)("constructor" != n || !e && Ft.call(t, n)) && r.push(n);
                  return r
                }(t)
              }
              var Do = Mi((function(t, e, r) {
                  zn(t, e, r)
                })),
                Fo = Mi((function(t, e, r, n) {
                  zn(t, e, r, n)
                })),
                Oo = Qi((function(t, e) {
                  var r = {};
                  if (null == t) return r;
                  var n = !1;
                  e = Ie(e, (function(e) {
                    return e = vi(e, t), n || (n = e.length > 1), e
                  })), Ci(t, ea(t), r), n && (r = sn(r, 7, Zi));
                  for (var i = e.length; i--;) li(r, e[i]);
                  return r
                })),
                Ro = Qi((function(t, e) {
                  return null == t ? {} : function(t, e) {
                    return Gn(t, e, (function(e, r) {
                      return To(t, r)
                    }))
                  }(t, e)
                }));

              function Lo(t, e) {
                if (null == t) return {};
                var r = Ie(ea(t), (function(t) {
                  return [t]
                }));
                return e = aa(e), Gn(t, r, (function(t, r) {
                  return e(t, r[0])
                }))
              }
              var Bo = Ui(ko),
                Vo = Ui(Io);

              function zo(t) {
                return null == t ? [] : Ke(t, ko(t))
              }
              var No = Fi((function(t, e, r) {
                return e = e.toLowerCase(), t + (r ? jo(e) : e)
              }));

              function jo(t) {
                return Xo(go(t).toLowerCase())
              }

              function Go(t) {
                return (t = go(t)) && t.replace(yt, tr).replace(Zt, "")
              }
              var Ho = Fi((function(t, e, r) {
                  return t + (r ? "-" : "") + e.toLowerCase()
                })),
                Wo = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + e.toLowerCase()
                })),
                qo = Di("toLowerCase"),
                $o = Fi((function(t, e, r) {
                  return t + (r ? "_" : "") + e.toLowerCase()
                })),
                Uo = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + Xo(e)
                })),
                Yo = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + e.toUpperCase()
                })),
                Xo = Di("toUpperCase");

              function Ko(t, e, r) {
                return t = go(t), (e = r ? i : e) === i ? function(t) {
                  return ee.test(t)
                }(t) ? function(t) {
                  return t.match(Qt) || []
                }(t) : function(t) {
                  return t.match(lt) || []
                }(t) : t.match(e) || []
              }
              var Zo = Un((function(t, e) {
                  try {
                    return _e(t, i, e)
                  } catch (t) {
                    return Ys(t) ? t : new xt(t)
                  }
                })),
                Jo = Qi((function(t, e) {
                  return Pe(e, (function(e) {
                    e = Ra(e), rn(t, e, Cs(t[e], t))
                  })), t
                }));

              function Qo(t) {
                return function() {
                  return t
                }
              }
              var tl = Li(),
                el = Li(!0);

              function rl(t) {
                return t
              }

              function nl(t) {
                return Fn("function" == typeof t ? t : sn(t, 1))
              }
              var il = Un((function(t, e) {
                  return function(r) {
                    return An(r, t, e)
                  }
                })),
                al = Un((function(t, e) {
                  return function(r) {
                    return An(t, r, e)
                  }
                }));

              function sl(t, e, r) {
                var n = ko(e),
                  i = Sn(e, n);
                null != r || Js(e) && (i.length || !n.length) || (r = e, e = t, t = this, i = Sn(e, ko(e)));
                var a = !(Js(r) && "chain" in r && !r.chain),
                  s = Xs(t);
                return Pe(i, (function(r) {
                  var n = e[r];
                  t[r] = n, s && (t.prototype[r] = function() {
                    var e = this.__chain__;
                    if (a || e) {
                      var r = t(this.__wrapped__);
                      return (r.__actions__ = Ti(this.__actions__)).push({
                        func: n,
                        args: arguments,
                        thisArg: t
                      }), r.__chain__ = e, r
                    }
                    return n.apply(t, De([this.value()], arguments))
                  })
                })), t
              }

              function ol() {}
              var ll = Ni(Ie),
                ul = Ni(Ce),
                hl = Ni(Re);

              function cl(t) {
                return ga(t) ? He(Ra(t)) : function(t) {
                  return function(e) {
                    return xn(e, t)
                  }
                }(t)
              }
              var pl = Gi(),
                fl = Gi(!0);

              function dl() {
                return []
              }

              function ml() {
                return !1
              }
              var vl, gl = zi((function(t, e) {
                  return t + e
                }), 0),
                yl = qi("ceil"),
                bl = zi((function(t, e) {
                  return t / e
                }), 1),
                Sl = qi("floor"),
                xl = zi((function(t, e) {
                  return t * e
                }), 1),
                El = qi("round"),
                _l = zi((function(t, e) {
                  return t - e
                }), 0);
              return Br.after = function(t, e) {
                if ("function" != typeof e) throw new Ct(a);
                return t = po(t),
                  function() {
                    if (--t < 1) return e.apply(this, arguments)
                  }
              }, Br.ary = Ps, Br.assign = yo, Br.assignIn = bo, Br.assignInWith = So, Br.assignWith = xo, Br.at = Eo, Br.before = Ts, Br.bind = Cs, Br.bindAll = Jo, Br.bindKey = As, Br.castArray = function() {
                if (!arguments.length) return [];
                var t = arguments[0];
                return Gs(t) ? t : [t]
              }, Br.chain = hs, Br.chunk = function(t, e, r) {
                e = (r ? va(t, e, r) : e === i) ? 1 : mr(po(e), 0);
                var a = null == t ? 0 : t.length;
                if (!a || e < 1) return [];
                for (var s = 0, o = 0, l = n(pe(a / e)); s < a;) l[o++] = ti(t, s, s += e);
                return l
              }, Br.compact = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = 0, i = []; ++e < r;) {
                  var a = t[e];
                  a && (i[n++] = a)
                }
                return i
              }, Br.concat = function() {
                var t = arguments.length;
                if (!t) return [];
                for (var e = n(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                return De(Gs(r) ? Ti(r) : [r], mn(e, 1))
              }, Br.cond = function(t) {
                var e = null == t ? 0 : t.length,
                  r = aa();
                return t = e ? Ie(t, (function(t) {
                  if ("function" != typeof t[1]) throw new Ct(a);
                  return [r(t[0]), t[1]]
                })) : [], Un((function(r) {
                  for (var n = -1; ++n < e;) {
                    var i = t[n];
                    if (_e(i[0], this, r)) return _e(i[1], this, r)
                  }
                }))
              }, Br.conforms = function(t) {
                return function(t) {
                  var e = ko(t);
                  return function(r) {
                    return on(r, t, e)
                  }
                }(sn(t, 1))
              }, Br.constant = Qo, Br.countBy = fs, Br.create = function(t, e) {
                var r = Vr(t);
                return null == e ? r : en(r, e)
              }, Br.curry = function t(e, r, n) {
                var a = Yi(e, 8, i, i, i, i, i, r = n ? i : r);
                return a.placeholder = t.placeholder, a
              }, Br.curryRight = function t(e, r, n) {
                var a = Yi(e, 16, i, i, i, i, i, r = n ? i : r);
                return a.placeholder = t.placeholder, a
              }, Br.debounce = Ms, Br.defaults = _o, Br.defaultsDeep = wo, Br.defer = ks, Br.delay = Is, Br.difference = Va, Br.differenceBy = za, Br.differenceWith = Na, Br.drop = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, (e = r || e === i ? 1 : po(e)) < 0 ? 0 : e, n) : []
              }, Br.dropRight = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, 0, (e = n - (e = r || e === i ? 1 : po(e))) < 0 ? 0 : e) : []
              }, Br.dropRightWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3), !0, !0) : []
              }, Br.dropWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3), !0) : []
              }, Br.fill = function(t, e, r, n) {
                var a = null == t ? 0 : t.length;
                return a ? (r && "number" != typeof r && va(t, e, r) && (r = 0, n = a), function(t, e, r, n) {
                  var a = t.length;
                  for ((r = po(r)) < 0 && (r = -r > a ? 0 : a + r), (n = n === i || n > a ? a : po(n)) < 0 && (n += a), n = r > n ? 0 : fo(n); r < n;) t[r++] = e;
                  return t
                }(t, e, r, n)) : []
              }, Br.filter = function(t, e) {
                return (Gs(t) ? Ae : dn)(t, aa(e, 3))
              }, Br.flatMap = function(t, e) {
                return mn(xs(t, e), 1)
              }, Br.flatMapDeep = function(t, e) {
                return mn(xs(t, e), h)
              }, Br.flatMapDepth = function(t, e, r) {
                return r = r === i ? 1 : po(r), mn(xs(t, e), r)
              }, Br.flatten = Ha, Br.flattenDeep = function(t) {
                return null != t && t.length ? mn(t, h) : []
              }, Br.flattenDepth = function(t, e) {
                return null != t && t.length ? mn(t, e = e === i ? 1 : po(e)) : []
              }, Br.flip = function(t) {
                return Yi(t, 512)
              }, Br.flow = tl, Br.flowRight = el, Br.fromPairs = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = {}; ++e < r;) {
                  var i = t[e];
                  n[i[0]] = i[1]
                }
                return n
              }, Br.functions = function(t) {
                return null == t ? [] : Sn(t, ko(t))
              }, Br.functionsIn = function(t) {
                return null == t ? [] : Sn(t, Io(t))
              }, Br.groupBy = ys, Br.initial = function(t) {
                return null != t && t.length ? ti(t, 0, -1) : []
              }, Br.intersection = qa, Br.intersectionBy = $a, Br.intersectionWith = Ua, Br.invert = Co, Br.invertBy = Ao, Br.invokeMap = bs, Br.iteratee = nl, Br.keyBy = Ss, Br.keys = ko, Br.keysIn = Io, Br.map = xs, Br.mapKeys = function(t, e) {
                var r = {};
                return e = aa(e, 3), yn(t, (function(t, n, i) {
                  rn(r, e(t, n, i), t)
                })), r
              }, Br.mapValues = function(t, e) {
                var r = {};
                return e = aa(e, 3), yn(t, (function(t, n, i) {
                  rn(r, n, e(t, n, i))
                })), r
              }, Br.matches = function(t) {
                return Bn(sn(t, 1))
              }, Br.matchesProperty = function(t, e) {
                return Vn(t, sn(e, 1))
              }, Br.memoize = Ds, Br.merge = Do, Br.mergeWith = Fo, Br.method = il, Br.methodOf = al, Br.mixin = sl, Br.negate = Fs, Br.nthArg = function(t) {
                return t = po(t), Un((function(e) {
                  return Nn(e, t)
                }))
              }, Br.omit = Oo, Br.omitBy = function(t, e) {
                return Lo(t, Fs(aa(e)))
              }, Br.once = function(t) {
                return Ts(2, t)
              }, Br.orderBy = function(t, e, r, n) {
                return null == t ? [] : (Gs(e) || (e = null == e ? [] : [e]), Gs(r = n ? i : r) || (r = null == r ? [] : [r]), jn(t, e, r))
              }, Br.over = ll, Br.overArgs = Os, Br.overEvery = ul, Br.overSome = hl, Br.partial = Rs, Br.partialRight = Ls, Br.partition = Es, Br.pick = Ro, Br.pickBy = Lo, Br.property = cl, Br.propertyOf = function(t) {
                return function(e) {
                  return null == t ? i : xn(t, e)
                }
              }, Br.pull = Xa, Br.pullAll = Ka, Br.pullAllBy = function(t, e, r) {
                return t && t.length && e && e.length ? Hn(t, e, aa(r, 2)) : t
              }, Br.pullAllWith = function(t, e, r) {
                return t && t.length && e && e.length ? Hn(t, e, i, r) : t
              }, Br.pullAt = Za, Br.range = pl, Br.rangeRight = fl, Br.rearg = Bs, Br.reject = function(t, e) {
                return (Gs(t) ? Ae : dn)(t, Fs(aa(e, 3)))
              }, Br.remove = function(t, e) {
                var r = [];
                if (!t || !t.length) return r;
                var n = -1,
                  i = [],
                  a = t.length;
                for (e = aa(e, 3); ++n < a;) {
                  var s = t[n];
                  e(s, n, t) && (r.push(s), i.push(n))
                }
                return Wn(t, i), r
              }, Br.rest = function(t, e) {
                if ("function" != typeof t) throw new Ct(a);
                return Un(t, e = e === i ? e : po(e))
              }, Br.reverse = Ja, Br.sampleSize = function(t, e, r) {
                return e = (r ? va(t, e, r) : e === i) ? 1 : po(e), (Gs(t) ? Xr : Xn)(t, e)
              }, Br.set = function(t, e, r) {
                return null == t ? t : Kn(t, e, r)
              }, Br.setWith = function(t, e, r, n) {
                return n = "function" == typeof n ? n : i, null == t ? t : Kn(t, e, r, n)
              }, Br.shuffle = function(t) {
                return (Gs(t) ? Kr : Qn)(t)
              }, Br.slice = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? (r && "number" != typeof r && va(t, e, r) ? (e = 0, r = n) : (e = null == e ? 0 : po(e), r = r === i ? n : po(r)), ti(t, e, r)) : []
              }, Br.sortBy = _s, Br.sortedUniq = function(t) {
                return t && t.length ? ii(t) : []
              }, Br.sortedUniqBy = function(t, e) {
                return t && t.length ? ii(t, aa(e, 2)) : []
              }, Br.split = function(t, e, r) {
                return r && "number" != typeof r && va(t, e, r) && (e = r = i), (r = r === i ? f : r >>> 0) ? (t = go(t)) && ("string" == typeof e || null != e && !no(e)) && !(e = si(e)) && nr(t) ? yi(hr(t), 0, r) : t.split(e, r) : []
              }, Br.spread = function(t, e) {
                if ("function" != typeof t) throw new Ct(a);
                return e = null == e ? 0 : mr(po(e), 0), Un((function(r) {
                  var n = r[e],
                    i = yi(r, 0, e);
                  return n && De(i, n), _e(t, this, i)
                }))
              }, Br.tail = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? ti(t, 1, e) : []
              }, Br.take = function(t, e, r) {
                return t && t.length ? ti(t, 0, (e = r || e === i ? 1 : po(e)) < 0 ? 0 : e) : []
              }, Br.takeRight = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, (e = n - (e = r || e === i ? 1 : po(e))) < 0 ? 0 : e, n) : []
              }, Br.takeRightWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3), !1, !0) : []
              }, Br.takeWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3)) : []
              }, Br.tap = function(t, e) {
                return e(t), t
              }, Br.throttle = function(t, e, r) {
                var n = !0,
                  i = !0;
                if ("function" != typeof t) throw new Ct(a);
                return Js(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ms(t, e, {
                  leading: n,
                  maxWait: e,
                  trailing: i
                })
              }, Br.thru = cs, Br.toArray = ho, Br.toPairs = Bo, Br.toPairsIn = Vo, Br.toPath = function(t) {
                return Gs(t) ? Ie(t, Ra) : so(t) ? [t] : Ti(Oa(go(t)))
              }, Br.toPlainObject = vo, Br.transform = function(t, e, r) {
                var n = Gs(t),
                  i = n || $s(t) || oo(t);
                if (e = aa(e, 4), null == r) {
                  var a = t && t.constructor;
                  r = i ? n ? new a : [] : Js(t) && Xs(a) ? Vr(Wt(t)) : {}
                }
                return (i ? Pe : yn)(t, (function(t, n, i) {
                  return e(r, t, n, i)
                })), r
              }, Br.unary = function(t) {
                return Ps(t, 1)
              }, Br.union = Qa, Br.unionBy = ts, Br.unionWith = es, Br.uniq = function(t) {
                return t && t.length ? oi(t) : []
              }, Br.uniqBy = function(t, e) {
                return t && t.length ? oi(t, aa(e, 2)) : []
              }, Br.uniqWith = function(t, e) {
                return e = "function" == typeof e ? e : i, t && t.length ? oi(t, i, e) : []
              }, Br.unset = function(t, e) {
                return null == t || li(t, e)
              }, Br.unzip = rs, Br.unzipWith = ns, Br.update = function(t, e, r) {
                return null == t ? t : ui(t, e, mi(r))
              }, Br.updateWith = function(t, e, r, n) {
                return n = "function" == typeof n ? n : i, null == t ? t : ui(t, e, mi(r), n)
              }, Br.values = zo, Br.valuesIn = function(t) {
                return null == t ? [] : Ke(t, Io(t))
              }, Br.without = is, Br.words = Ko, Br.wrap = function(t, e) {
                return Rs(mi(e), t)
              }, Br.xor = as, Br.xorBy = ss, Br.xorWith = os, Br.zip = ls, Br.zipObject = function(t, e) {
                return fi(t || [], e || [], Jr)
              }, Br.zipObjectDeep = function(t, e) {
                return fi(t || [], e || [], Kn)
              }, Br.zipWith = us, Br.entries = Bo, Br.entriesIn = Vo, Br.extend = bo, Br.extendWith = So, sl(Br, Br), Br.add = gl, Br.attempt = Zo, Br.camelCase = No, Br.capitalize = jo, Br.ceil = yl, Br.clamp = function(t, e, r) {
                return r === i && (r = e, e = i), r !== i && (r = (r = mo(r)) == r ? r : 0), e !== i && (e = (e = mo(e)) == e ? e : 0), an(mo(t), e, r)
              }, Br.clone = function(t) {
                return sn(t, 4)
              }, Br.cloneDeep = function(t) {
                return sn(t, 5)
              }, Br.cloneDeepWith = function(t, e) {
                return sn(t, 5, e = "function" == typeof e ? e : i)
              }, Br.cloneWith = function(t, e) {
                return sn(t, 4, e = "function" == typeof e ? e : i)
              }, Br.conformsTo = function(t, e) {
                return null == e || on(t, e, ko(e))
              }, Br.deburr = Go, Br.defaultTo = function(t, e) {
                return null == t || t != t ? e : t
              }, Br.divide = bl, Br.endsWith = function(t, e, r) {
                t = go(t), e = si(e);
                var n = t.length,
                  a = r = r === i ? n : an(po(r), 0, n);
                return (r -= e.length) >= 0 && t.slice(r, a) == e
              }, Br.eq = Vs, Br.escape = function(t) {
                return (t = go(t)) && Y.test(t) ? t.replace($, er) : t
              }, Br.escapeRegExp = function(t) {
                return (t = go(t)) && rt.test(t) ? t.replace(et, "\\$&") : t
              }, Br.every = function(t, e, r) {
                var n = Gs(t) ? Ce : pn;
                return r && va(t, e, r) && (e = i), n(t, aa(e, 3))
              }, Br.find = ds, Br.findIndex = ja, Br.findKey = function(t, e) {
                return Be(t, aa(e, 3), yn)
              }, Br.findLast = ms, Br.findLastIndex = Ga, Br.findLastKey = function(t, e) {
                return Be(t, aa(e, 3), bn)
              }, Br.floor = Sl, Br.forEach = vs, Br.forEachRight = gs, Br.forIn = function(t, e) {
                return null == t ? t : vn(t, aa(e, 3), Io)
              }, Br.forInRight = function(t, e) {
                return null == t ? t : gn(t, aa(e, 3), Io)
              }, Br.forOwn = function(t, e) {
                return t && yn(t, aa(e, 3))
              }, Br.forOwnRight = function(t, e) {
                return t && bn(t, aa(e, 3))
              }, Br.get = Po, Br.gt = zs, Br.gte = Ns, Br.has = function(t, e) {
                return null != t && pa(t, e, Pn)
              }, Br.hasIn = To, Br.head = Wa, Br.identity = rl, Br.includes = function(t, e, r, n) {
                t = Ws(t) ? t : zo(t), r = r && !n ? po(r) : 0;
                var i = t.length;
                return r < 0 && (r = mr(i + r, 0)), ao(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && ze(t, e, r) > -1
              }, Br.indexOf = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : po(r);
                return i < 0 && (i = mr(n + i, 0)), ze(t, e, i)
              }, Br.inRange = function(t, e, r) {
                return e = co(e), r === i ? (r = e, e = 0) : r = co(r),
                  function(t, e, r) {
                    return t >= vr(e, r) && t < mr(e, r)
                  }(t = mo(t), e, r)
              }, Br.invoke = Mo, Br.isArguments = js, Br.isArray = Gs, Br.isArrayBuffer = Hs, Br.isArrayLike = Ws, Br.isArrayLikeObject = qs, Br.isBoolean = function(t) {
                return !0 === t || !1 === t || Qs(t) && _n(t) == g
              }, Br.isBuffer = $s, Br.isDate = Us, Br.isElement = function(t) {
                return Qs(t) && 1 === t.nodeType && !ro(t)
              }, Br.isEmpty = function(t) {
                if (null == t) return !0;
                if (Ws(t) && (Gs(t) || "string" == typeof t || "function" == typeof t.splice || $s(t) || oo(t) || js(t))) return !t.length;
                var e = ca(t);
                if (e == E || e == C) return !t.size;
                if (Sa(t)) return !On(t).length;
                for (var r in t)
                  if (Ft.call(t, r)) return !1;
                return !0
              }, Br.isEqual = function(t, e) {
                return kn(t, e)
              }, Br.isEqualWith = function(t, e, r) {
                var n = (r = "function" == typeof r ? r : i) ? r(t, e) : i;
                return n === i ? kn(t, e, i, r) : !!n
              }, Br.isError = Ys, Br.isFinite = function(t) {
                return "number" == typeof t && Le(t)
              }, Br.isFunction = Xs, Br.isInteger = Ks, Br.isLength = Zs, Br.isMap = to, Br.isMatch = function(t, e) {
                return t === e || In(t, e, oa(e))
              }, Br.isMatchWith = function(t, e, r) {
                return r = "function" == typeof r ? r : i, In(t, e, oa(e), r)
              }, Br.isNaN = function(t) {
                return eo(t) && t != +t
              }, Br.isNative = function(t) {
                if (ba(t)) throw new xt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                return Dn(t)
              }, Br.isNil = function(t) {
                return null == t
              }, Br.isNull = function(t) {
                return null === t
              }, Br.isNumber = eo, Br.isObject = Js, Br.isObjectLike = Qs, Br.isPlainObject = ro, Br.isRegExp = no, Br.isSafeInteger = function(t) {
                return Ks(t) && t >= -9007199254740991 && t <= c
              }, Br.isSet = io, Br.isString = ao, Br.isSymbol = so, Br.isTypedArray = oo, Br.isUndefined = function(t) {
                return t === i
              }, Br.isWeakMap = function(t) {
                return Qs(t) && ca(t) == k
              }, Br.isWeakSet = function(t) {
                return Qs(t) && "[object WeakSet]" == _n(t)
              }, Br.join = function(t, e) {
                return null == t ? "" : We.call(t, e)
              }, Br.kebabCase = Ho, Br.last = Ya, Br.lastIndexOf = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var a = n;
                return r !== i && (a = (a = po(r)) < 0 ? mr(n + a, 0) : vr(a, n - 1)), e == e ? function(t, e, r) {
                  for (var n = r + 1; n--;)
                    if (t[n] === e) return n;
                  return n
                }(t, e, a) : Ve(t, je, a, !0)
              }, Br.lowerCase = Wo, Br.lowerFirst = qo, Br.lt = lo, Br.lte = uo, Br.max = function(t) {
                return t && t.length ? fn(t, rl, wn) : i
              }, Br.maxBy = function(t, e) {
                return t && t.length ? fn(t, aa(e, 2), wn) : i
              }, Br.mean = function(t) {
                return Ge(t, rl)
              }, Br.meanBy = function(t, e) {
                return Ge(t, aa(e, 2))
              }, Br.min = function(t) {
                return t && t.length ? fn(t, rl, Rn) : i
              }, Br.minBy = function(t, e) {
                return t && t.length ? fn(t, aa(e, 2), Rn) : i
              }, Br.stubArray = dl, Br.stubFalse = ml, Br.stubObject = function() {
                return {}
              }, Br.stubString = function() {
                return ""
              }, Br.stubTrue = function() {
                return !0
              }, Br.multiply = xl, Br.nth = function(t, e) {
                return t && t.length ? Nn(t, po(e)) : i
              }, Br.noConflict = function() {
                return ce._ === this && (ce._ = Vt), this
              }, Br.noop = ol, Br.now = ws, Br.pad = function(t, e, r) {
                t = go(t);
                var n = (e = po(e)) ? ur(t) : 0;
                if (!e || n >= e) return t;
                var i = (e - n) / 2;
                return ji(fe(i), r) + t + ji(pe(i), r)
              }, Br.padEnd = function(t, e, r) {
                t = go(t);
                var n = (e = po(e)) ? ur(t) : 0;
                return e && n < e ? t + ji(e - n, r) : t
              }, Br.padStart = function(t, e, r) {
                t = go(t);
                var n = (e = po(e)) ? ur(t) : 0;
                return e && n < e ? ji(e - n, r) + t : t
              }, Br.parseInt = function(t, e, r) {
                return r || null == e ? e = 0 : e && (e = +e), yr(go(t).replace(nt, ""), e || 0)
              }, Br.random = function(t, e, r) {
                if (r && "boolean" != typeof r && va(t, e, r) && (e = r = i), r === i && ("boolean" == typeof e ? (r = e, e = i) : "boolean" == typeof t && (r = t, t = i)), t === i && e === i ? (t = 0, e = 1) : (t = co(t), e === i ? (e = t, t = 0) : e = co(e)), t > e) {
                  var n = t;
                  t = e, e = n
                }
                if (r || t % 1 || e % 1) {
                  var a = br();
                  return vr(t + a * (e - t + oe("1e-" + ((a + "").length - 1))), e)
                }
                return qn(t, e)
              }, Br.reduce = function(t, e, r) {
                var n = Gs(t) ? Fe : qe,
                  i = arguments.length < 3;
                return n(t, aa(e, 4), r, i, hn)
              }, Br.reduceRight = function(t, e, r) {
                var n = Gs(t) ? Oe : qe,
                  i = arguments.length < 3;
                return n(t, aa(e, 4), r, i, cn)
              }, Br.repeat = function(t, e, r) {
                return e = (r ? va(t, e, r) : e === i) ? 1 : po(e), $n(go(t), e)
              }, Br.replace = function() {
                var t = arguments,
                  e = go(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2])
              }, Br.result = function(t, e, r) {
                var n = -1,
                  a = (e = vi(e, t)).length;
                for (a || (a = 1, t = i); ++n < a;) {
                  var s = null == t ? i : t[Ra(e[n])];
                  s === i && (n = a, s = r), t = Xs(s) ? s.call(t) : s
                }
                return t
              }, Br.round = El, Br.runInContext = t, Br.sample = function(t) {
                return (Gs(t) ? Yr : Yn)(t)
              }, Br.size = function(t) {
                if (null == t) return 0;
                if (Ws(t)) return ao(t) ? ur(t) : t.length;
                var e = ca(t);
                return e == E || e == C ? t.size : On(t).length
              }, Br.snakeCase = $o, Br.some = function(t, e, r) {
                var n = Gs(t) ? Re : ei;
                return r && va(t, e, r) && (e = i), n(t, aa(e, 3))
              }, Br.sortedIndex = function(t, e) {
                return ri(t, e)
              }, Br.sortedIndexBy = function(t, e, r) {
                return ni(t, e, aa(r, 2))
              }, Br.sortedIndexOf = function(t, e) {
                var r = null == t ? 0 : t.length;
                if (r) {
                  var n = ri(t, e);
                  if (n < r && Vs(t[n], e)) return n
                }
                return -1
              }, Br.sortedLastIndex = function(t, e) {
                return ri(t, e, !0)
              }, Br.sortedLastIndexBy = function(t, e, r) {
                return ni(t, e, aa(r, 2), !0)
              }, Br.sortedLastIndexOf = function(t, e) {
                if (null != t && t.length) {
                  var r = ri(t, e, !0) - 1;
                  if (Vs(t[r], e)) return r
                }
                return -1
              }, Br.startCase = Uo, Br.startsWith = function(t, e, r) {
                return t = go(t), r = null == r ? 0 : an(po(r), 0, t.length), e = si(e), t.slice(r, r + e.length) == e
              }, Br.subtract = _l, Br.sum = function(t) {
                return t && t.length ? $e(t, rl) : 0
              }, Br.sumBy = function(t, e) {
                return t && t.length ? $e(t, aa(e, 2)) : 0
              }, Br.template = function(t, e, r) {
                var n = Br.templateSettings;
                r && va(t, e, r) && (e = i), t = go(t), e = So({}, e, n, Xi);
                var a, s, o = So({}, e.imports, n.imports, Xi),
                  l = ko(o),
                  u = Ke(o, l),
                  h = 0,
                  c = e.interpolate || bt,
                  p = "__p += '",
                  f = Pt((e.escape || bt).source + "|" + c.source + "|" + (c === Z ? ct : bt).source + "|" + (e.evaluate || bt).source + "|$", "g"),
                  d = "//# sourceURL=" + (Ft.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ne + "]") + "\n";
                t.replace(f, (function(e, r, n, i, o, l) {
                  return n || (n = i), p += t.slice(h, l).replace(St, rr), r && (a = !0, p += "' +\n__e(" + r + ") +\n'"), o && (s = !0, p += "';\n" + o + ";\n__p += '"), n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = l + e.length, e
                })), p += "';\n";
                var m = Ft.call(e, "variable") && e.variable;
                if (m) {
                  if (ut.test(m)) throw new xt("Invalid `variable` option passed into `_.template`")
                } else p = "with (obj) {\n" + p + "\n}\n";
                p = (s ? p.replace(G, "") : p).replace(H, "$1").replace(W, "$1;"), p = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                var v = Zo((function() {
                  return Et(l, d + "return " + p).apply(i, u)
                }));
                if (v.source = p, Ys(v)) throw v;
                return v
              }, Br.times = function(t, e) {
                if ((t = po(t)) < 1 || t > c) return [];
                var r = f,
                  n = vr(t, f);
                e = aa(e), t -= f;
                for (var i = Ue(n, e); ++r < t;) e(r);
                return i
              }, Br.toFinite = co, Br.toInteger = po, Br.toLength = fo, Br.toLower = function(t) {
                return go(t).toLowerCase()
              }, Br.toNumber = mo, Br.toSafeInteger = function(t) {
                return t ? an(po(t), -9007199254740991, c) : 0 === t ? t : 0
              }, Br.toString = go, Br.toUpper = function(t) {
                return go(t).toUpperCase()
              }, Br.trim = function(t, e, r) {
                if ((t = go(t)) && (r || e === i)) return Ye(t);
                if (!t || !(e = si(e))) return t;
                var n = hr(t),
                  a = hr(e);
                return yi(n, Je(n, a), Qe(n, a) + 1).join("")
              }, Br.trimEnd = function(t, e, r) {
                if ((t = go(t)) && (r || e === i)) return t.slice(0, cr(t) + 1);
                if (!t || !(e = si(e))) return t;
                var n = hr(t);
                return yi(n, 0, Qe(n, hr(e)) + 1).join("")
              }, Br.trimStart = function(t, e, r) {
                if ((t = go(t)) && (r || e === i)) return t.replace(nt, "");
                if (!t || !(e = si(e))) return t;
                var n = hr(t);
                return yi(n, Je(n, hr(e))).join("")
              }, Br.truncate = function(t, e) {
                var r = 30,
                  n = "...";
                if (Js(e)) {
                  var a = "separator" in e ? e.separator : a;
                  r = "length" in e ? po(e.length) : r, n = "omission" in e ? si(e.omission) : n
                }
                var s = (t = go(t)).length;
                if (nr(t)) {
                  var o = hr(t);
                  s = o.length
                }
                if (r >= s) return t;
                var l = r - ur(n);
                if (l < 1) return n;
                var u = o ? yi(o, 0, l).join("") : t.slice(0, l);
                if (a === i) return u + n;
                if (o && (l += u.length - l), no(a)) {
                  if (t.slice(l).search(a)) {
                    var h, c = u;
                    for (a.global || (a = Pt(a.source, go(pt.exec(a)) + "g")), a.lastIndex = 0; h = a.exec(c);) var p = h.index;
                    u = u.slice(0, p === i ? l : p)
                  }
                } else if (t.indexOf(si(a), l) != l) {
                  var f = u.lastIndexOf(a);
                  f > -1 && (u = u.slice(0, f))
                }
                return u + n
              }, Br.unescape = function(t) {
                return (t = go(t)) && U.test(t) ? t.replace(q, pr) : t
              }, Br.uniqueId = function(t) {
                var e = ++Ot;
                return go(t) + e
              }, Br.upperCase = Yo, Br.upperFirst = Xo, Br.each = vs, Br.eachRight = gs, Br.first = Wa, sl(Br, (vl = {}, yn(Br, (function(t, e) {
                Ft.call(Br.prototype, e) || (vl[e] = t)
              })), vl), {
                chain: !1
              }), Br.VERSION = "4.17.21", Pe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                Br[t].placeholder = Br
              })), Pe(["drop", "take"], (function(t, e) {
                jr.prototype[t] = function(r) {
                  r = r === i ? 1 : mr(po(r), 0);
                  var n = this.__filtered__ && !e ? new jr(this) : this.clone();
                  return n.__filtered__ ? n.__takeCount__ = vr(r, n.__takeCount__) : n.__views__.push({
                    size: vr(r, f),
                    type: t + (n.__dir__ < 0 ? "Right" : "")
                  }), n
                }, jr.prototype[t + "Right"] = function(e) {
                  return this.reverse()[t](e).reverse()
                }
              })), Pe(["filter", "map", "takeWhile"], (function(t, e) {
                var r = e + 1,
                  n = 1 == r || 3 == r;
                jr.prototype[t] = function(t) {
                  var e = this.clone();
                  return e.__iteratees__.push({
                    iteratee: aa(t, 3),
                    type: r
                  }), e.__filtered__ = e.__filtered__ || n, e
                }
              })), Pe(["head", "last"], (function(t, e) {
                var r = "take" + (e ? "Right" : "");
                jr.prototype[t] = function() {
                  return this[r](1).value()[0]
                }
              })), Pe(["initial", "tail"], (function(t, e) {
                var r = "drop" + (e ? "" : "Right");
                jr.prototype[t] = function() {
                  return this.__filtered__ ? new jr(this) : this[r](1)
                }
              })), jr.prototype.compact = function() {
                return this.filter(rl)
              }, jr.prototype.find = function(t) {
                return this.filter(t).head()
              }, jr.prototype.findLast = function(t) {
                return this.reverse().find(t)
              }, jr.prototype.invokeMap = Un((function(t, e) {
                return "function" == typeof t ? new jr(this) : this.map((function(r) {
                  return An(r, t, e)
                }))
              })), jr.prototype.reject = function(t) {
                return this.filter(Fs(aa(t)))
              }, jr.prototype.slice = function(t, e) {
                t = po(t);
                var r = this;
                return r.__filtered__ && (t > 0 || e < 0) ? new jr(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)), e !== i && (r = (e = po(e)) < 0 ? r.dropRight(-e) : r.take(e - t)), r)
              }, jr.prototype.takeRightWhile = function(t) {
                return this.reverse().takeWhile(t).reverse()
              }, jr.prototype.toArray = function() {
                return this.take(f)
              }, yn(jr.prototype, (function(t, e) {
                var r = /^(?:filter|find|map|reject)|While$/.test(e),
                  n = /^(?:head|last)$/.test(e),
                  a = Br[n ? "take" + ("last" == e ? "Right" : "") : e],
                  s = n || /^find/.test(e);
                a && (Br.prototype[e] = function() {
                  var e = this.__wrapped__,
                    o = n ? [1] : arguments,
                    l = e instanceof jr,
                    u = o[0],
                    h = l || Gs(e),
                    c = function(t) {
                      var e = a.apply(Br, De([t], o));
                      return n && p ? e[0] : e
                    };
                  h && r && "function" == typeof u && 1 != u.length && (l = h = !1);
                  var p = this.__chain__,
                    f = !!this.__actions__.length,
                    d = s && !p,
                    m = l && !f;
                  if (!s && h) {
                    e = m ? e : new jr(this);
                    var v = t.apply(e, o);
                    return v.__actions__.push({
                      func: cs,
                      args: [c],
                      thisArg: i
                    }), new Nr(v, p)
                  }
                  return d && m ? t.apply(this, o) : (v = this.thru(c), d ? n ? v.value()[0] : v.value() : v)
                })
              })), Pe(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                var e = At[t],
                  r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                  n = /^(?:pop|shift)$/.test(t);
                Br.prototype[t] = function() {
                  var t = arguments;
                  if (n && !this.__chain__) {
                    var i = this.value();
                    return e.apply(Gs(i) ? i : [], t)
                  }
                  return this[r]((function(r) {
                    return e.apply(Gs(r) ? r : [], t)
                  }))
                }
              })), yn(jr.prototype, (function(t, e) {
                var r = Br[e];
                if (r) {
                  var n = r.name + "";
                  Ft.call(Ar, n) || (Ar[n] = []), Ar[n].push({
                    name: e,
                    func: r
                  })
                }
              })), Ar[Bi(i, 2).name] = [{
                name: "wrapper",
                func: i
              }], jr.prototype.clone = function() {
                var t = new jr(this.__wrapped__);
                return t.__actions__ = Ti(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ti(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ti(this.__views__), t
              }, jr.prototype.reverse = function() {
                if (this.__filtered__) {
                  var t = new jr(this);
                  t.__dir__ = -1, t.__filtered__ = !0
                } else(t = this.clone()).__dir__ *= -1;
                return t
              }, jr.prototype.value = function() {
                var t = this.__wrapped__.value(),
                  e = this.__dir__,
                  r = Gs(t),
                  n = e < 0,
                  i = r ? t.length : 0,
                  a = function(t, e, r) {
                    for (var n = -1, i = r.length; ++n < i;) {
                      var a = r[n],
                        s = a.size;
                      switch (a.type) {
                        case "drop":
                          t += s;
                          break;
                        case "dropRight":
                          e -= s;
                          break;
                        case "take":
                          e = vr(e, t + s);
                          break;
                        case "takeRight":
                          t = mr(t, e - s)
                      }
                    }
                    return {
                      start: t,
                      end: e
                    }
                  }(0, i, this.__views__),
                  s = a.start,
                  o = a.end,
                  l = o - s,
                  u = n ? o : s - 1,
                  h = this.__iteratees__,
                  c = h.length,
                  p = 0,
                  f = vr(l, this.__takeCount__);
                if (!r || !n && i == l && f == l) return ci(t, this.__actions__);
                var d = [];
                t: for (; l-- && p < f;) {
                  for (var m = -1, v = t[u += e]; ++m < c;) {
                    var g = h[m],
                      y = g.iteratee,
                      b = g.type,
                      S = y(v);
                    if (2 == b) v = S;
                    else if (!S) {
                      if (1 == b) continue t;
                      break t
                    }
                  }
                  d[p++] = v
                }
                return d
              }, Br.prototype.at = ps, Br.prototype.chain = function() {
                return hs(this)
              }, Br.prototype.commit = function() {
                return new Nr(this.value(), this.__chain__)
              }, Br.prototype.next = function() {
                this.__values__ === i && (this.__values__ = ho(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return {
                  done: t,
                  value: t ? i : this.__values__[this.__index__++]
                }
              }, Br.prototype.plant = function(t) {
                for (var e, r = this; r instanceof zr;) {
                  var n = Ba(r);
                  n.__index__ = 0, n.__values__ = i, e ? a.__wrapped__ = n : e = n;
                  var a = n;
                  r = r.__wrapped__
                }
                return a.__wrapped__ = t, e
              }, Br.prototype.reverse = function() {
                var t = this.__wrapped__;
                if (t instanceof jr) {
                  var e = t;
                  return this.__actions__.length && (e = new jr(this)), (e = e.reverse()).__actions__.push({
                    func: cs,
                    args: [Ja],
                    thisArg: i
                  }), new Nr(e, this.__chain__)
                }
                return this.thru(Ja)
              }, Br.prototype.toJSON = Br.prototype.valueOf = Br.prototype.value = function() {
                return ci(this.__wrapped__, this.__actions__)
              }, Br.prototype.first = Br.prototype.head, Xt && (Br.prototype[Xt] = function() {
                return this
              }), Br
            }();
          ce._ = fr, (n = function() {
            return fr
          }.call(e, r, e, t)) === i || (t.exports = n)
        }.call(this)
    },
    92346: (t, e, r) => {
      var n = r(78007);
      t.exports = function() {
        return n.Date.now()
      }
    },
    58972: (t, e, r) => {
      var n = r(48530),
        i = r(27335),
        a = r(87416),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (a(t)) return NaN;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = o.test(t);
        return r || l.test(t) ? u(t.slice(2), r ? 2 : 8) : s.test(t) ? NaN : +t
      }
    },
    67505: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(t) {
            _useWebWorker = !!t
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(t) {
            locationHref = t
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(t) {
          return document.createElement(t)
        }

        function extendPrototype(t, e) {
          var r, n, i = t.length;
          for (r = 0; r < i; r += 1)
            for (var a in n = t[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (e.prototype[a] = n[a])
        }

        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
          function e() {}
          return e.prototype = t, e
        }
        var audioControllerFactory = function() {
            function t(t) {
              this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                  this.audios.push(t)
                },
                pause: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause()
                },
                resume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume()
                },
                setRate: function(t) {
                  var e, r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                  return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                    src: [t]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(t) {
                  this.audioFactory = t
                },
                setVolume: function(t) {
                  this._volume = t, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new t
              }
          }(),
          createTypedArray = function() {
            function t(t, e) {
              var r, n = 0,
                i = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (n = 0; n < e; n += 1) i.push(r);
              return i
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
              return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
            } : t
          }();

        function createSizedArray(t) {
          return Array.apply(null, {
            length: t
          })
        }

        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$6(t)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, r = createSizedArray(t.length),
              n = t.length;
            for (e = 0; e < n; e += 1) r[e] = Math.abs(t[e]);
            return r
          }
          return Math.abs(t)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(t) {
          _shouldRoundValues = !!t
        }

        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, n) {
          this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, n) {
          this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
          this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(t, e, r) {
          var n, i, a, s, o, l, u, h;
          switch (l = r * (1 - e), u = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), h = r * (1 - (1 - o) * e), s % 6) {
            case 0:
              n = r, i = h, a = l;
              break;
            case 1:
              n = u, i = r, a = l;
              break;
            case 2:
              n = l, i = r, a = h;
              break;
            case 3:
              n = l, i = u, a = r;
              break;
            case 4:
              n = h, i = l, a = r;
              break;
            case 5:
              n = r, i = l, a = u
          }
          return [n, i, a]
        }

        function RGBtoHSV(t, e, r) {
          var n, i = Math.max(t, e, r),
            a = Math.min(t, e, r),
            s = i - a,
            o = 0 === i ? 0 : s / i,
            l = i / 255;
          switch (i) {
            case a:
              n = 0;
              break;
            case t:
              n = e - r + s * (e < r ? 6 : 0), n /= 6 * s;
              break;
            case e:
              n = r - t + 2 * s, n /= 6 * s;
              break;
            case r:
              n = t - e + 4 * s, n /= 6 * s
          }
          return [n, o, l]
        }

        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var t, e, r = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, n) {
              return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + r[t] + r[e] + r[n]
            }
          }(),
          setSubframeEnabled = function(t) {
            subframeEnabled = !!t
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(t) {
            expressionsPlugin = t
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(t) {
            expressionsInterfaces = t
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(t) {
            defaultCurveSegments = t
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(t) {
            idPrefix$1 = t
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$5(t)
        }
        var dataManager = function() {
            var t, e, r = 1,
              n = [],
              i = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              a = {
                postMessage: function(t) {
                  i.onmessage({
                    data: t
                  })
                }
              };

            function s() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    n = URL.createObjectURL(r);
                  return new Worker(n)
                }
                return t = e, i
              }((function(t) {
                if (a.dataManager || (a.dataManager = function() {
                    function t(i, a) {
                      var s, o, l, u, h, c, p, f = i.length;
                      for (o = 0; o < f; o += 1)
                        if ("ks" in (s = i[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var d = s.masksProperties;
                            for (u = d.length, l = 0; l < u; l += 1)
                              if (d[l].pt.k.i) n(d[l].pt.k);
                              else
                                for (c = d[l].pt.k.length, h = 0; h < c; h += 1) d[l].pt.k[h].s && n(d[l].pt.k[h].s[0]), d[l].pt.k[h].e && n(d[l].pt.k[h].e[0])
                          }
                          0 === s.ty ? (s.layers = e(s.refId, a), t(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && (0 === (p = s).t.a.length && p.t.p)
                        }
                    }

                    function e(t, e) {
                      var r = function(t, e) {
                        for (var r = 0, n = e.length; r < n;) {
                          if (e[r].id === t) return e[r];
                          r += 1
                        }
                        return null
                      }(t, e);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(t) {
                      var e, i, a;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) n(t[e].ks.k);
                          else
                            for (a = t[e].ks.k.length, i = 0; i < a; i += 1) t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
                      else "gr" === t[e].ty && r(t[e].it)
                    }

                    function n(t) {
                      var e, r = t.i.length;
                      for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function i(t, e) {
                      var r = e ? e.split(".") : [100, 100, 100];
                      return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                    }
                    var a, s = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, r, n, i = t.length;
                          for (e = 0; e < i; e += 1) 5 === t[e].ty && (void 0, n = (r = t[e]).t.d, r.t.d = {
                            k: [{
                              s: n,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (i(t, r.v) && (e(r.layers), r.assets)) {
                            var n, a = r.assets.length;
                            for (n = 0; n < a; n += 1) r.assets[n].layers && e(r.assets[n].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(t) {
                        if (t.chars && !i(a, t.v)) {
                          var e, n = t.chars.length;
                          for (e = 0; e < n; e += 1) {
                            var s = t.chars[e];
                            s.data && s.data.shapes && (r(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, t.chars[e].t || (s.data.shapes.push({
                              ty: "no"
                            }), s.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      l = function() {
                        var t = [5, 7, 15];

                        function e(t) {
                          var e, r, n = t.length;
                          for (e = 0; e < n; e += 1) 5 === t[e].ty && (r = void 0, "number" == typeof(r = t[e].t.p).a && (r.a = {
                            a: 0,
                            k: r.a
                          }), "number" == typeof r.p && (r.p = {
                            a: 0,
                            k: r.p
                          }), "number" == typeof r.r && (r.r = {
                            a: 0,
                            k: r.r
                          }))
                        }
                        return function(r) {
                          if (i(t, r.v) && (e(r.layers), r.assets)) {
                            var n, a = r.assets.length;
                            for (n = 0; n < a; n += 1) r.assets[n].layers && e(r.assets[n].layers)
                          }
                        }
                      }(),
                      u = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var r, n, i, a = t.length;
                          for (r = 0; r < a; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                              for (i = t[r].c.k.length, n = 0; n < i; n += 1) t[r].c.k[n].s && (t[r].c.k[n].s[0] /= 255, t[r].c.k[n].s[1] /= 255, t[r].c.k[n].s[2] /= 255, t[r].c.k[n].s[3] /= 255), t[r].c.k[n].e && (t[r].c.k[n].e[0] /= 255, t[r].c.k[n].e[1] /= 255, t[r].c.k[n].e[2] /= 255, t[r].c.k[n].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                        }

                        function r(t) {
                          var r, n = t.length;
                          for (r = 0; r < n; r += 1) 4 === t[r].ty && e(t[r].shapes)
                        }
                        return function(e) {
                          if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, a = e.assets.length;
                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var r, n, i;
                          for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" === t[r].ty)
                              if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                              else
                                for (i = t[r].ks.k.length, n = 0; n < i; n += 1) t[r].ks.k[n].s && (t[r].ks.k[n].s[0].c = t[r].closed), t[r].ks.k[n].e && (t[r].ks.k[n].e[0].c = t[r].closed);
                          else "gr" === t[r].ty && e(t[r].it)
                        }

                        function r(t) {
                          var r, n, i, a, s, o, l = t.length;
                          for (n = 0; n < l; n += 1) {
                            if ((r = t[n]).hasMask) {
                              var u = r.masksProperties;
                              for (a = u.length, i = 0; i < a; i += 1)
                                if (u[i].pt.k.i) u[i].pt.k.c = u[i].cl;
                                else
                                  for (o = u[i].pt.k.length, s = 0; s < o; s += 1) u[i].pt.k[s].s && (u[i].pt.k[s].s[0].c = u[i].cl), u[i].pt.k[s].e && (u[i].pt.k[s].e[0].c = u[i].cl)
                            }
                            4 === r.ty && e(r.shapes)
                          }
                        }
                        return function(e) {
                          if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, a = e.assets.length;
                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(r) {
                        r.__complete || (u(r), s(r), o(r), l(r), h(r), t(r.layers, r.assets), function(r, n) {
                          if (r) {
                            var i = 0,
                              a = r.length;
                            for (i = 0; i < a; i += 1) 1 === r[i].t && (r[i].data.layers = e(r[i].data.refId, n), t(r[i].data.layers, n))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return c.checkColors = u, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = h, c.completeLayers = t, c
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, r, n, i) {
                        var a, s = new XMLHttpRequest;
                        try {
                          s.responseType = "json"
                        } catch (t) {}
                        s.onreadystatechange = function() {
                          if (4 === s.readyState)
                            if (200 === s.status) a = t(s), n(a);
                            else try {
                              a = t(s), n(a)
                            } catch (t) {
                              i && i(t)
                            }
                        };
                        try {
                          s.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          s.open(["G", "E", "T"].join(""), r + "/" + e, !0)
                        }
                        s.send()
                      }
                    }
                  }()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  r = e.id,
                  i = n[r];
                n[r] = null, "success" === e.status ? i.onComplete(e.payload) : i.onError && i.onError()
              })
            }

            function o(t, e) {
              var i = "processId_" + (r += 1);
              return n[i] = {
                onComplete: t,
                onError: e
              }, i
            }
            return {
              loadAnimation: function(t, r, n) {
                s();
                var i = o(r, n);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              loadData: function(t, r, n) {
                s();
                var i = o(r, n);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              completeAnimation: function(t, r, n) {
                s();
                var i = o(r, n);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: i
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var t = function() {
              var t = createTag("canvas");
              t.width = 1, t.height = 1;
              var e = t.getContext("2d");
              return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function n(t, e, r) {
              var n = "";
              if (t.e) n = t.p;
              else if (e) {
                var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = e + i
              } else n = r, n += t.u ? t.u : "", n += t.p;
              return n
            }

            function i(t) {
              var e = 0,
                r = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                }.bind(this), 50)
            }

            function a(t) {
              var e = {
                  assetData: t
                },
                r = n(t, this.assetsPath, this.path);
              return dataManager.loadData(r, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function s() {
              this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return s.prototype = {
              loadAssets: function(t, e) {
                var r;
                this.imagesLoadedCb = e;
                var n = t.length;
                for (r = 0; r < n; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
              },
              setAssetsPath: function(t) {
                this.assetsPath = t || ""
              },
              setPath: function(t) {
                this.path = t || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(t) {
                for (var e = 0, r = this.images.length; e < r;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var r = n(e, this.assetsPath, this.path),
                  i = createTag("img");
                i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), i.src = r;
                var a = {
                  img: i,
                  assetData: e
                };
                return a
              },
              createImageData: function(e) {
                var r = n(e, this.assetsPath, this.path),
                  i = createNS("image");
                isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                var a = {
                  img: i,
                  assetData: e
                };
                return a
              },
              imageLoaded: e,
              footageLoaded: r,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, s
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], n = 0; n < r.length; n += 1) r[n](e)
          },
          addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
              function() {
                this.removeEventListener(t, e)
              }.bind(this)
          },
          removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, n = this._cbs[t].length; r < n;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, n -= 1), r += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, r = t.split("\r\n"), n = {}, i = 0, a = 0; a < r.length; a += 1) 2 === (e = r[a].split(":")).length && (n[e[0]] = e[1].trim(), i += 1);
              if (0 === i) throw new Error;
              return n
            }
            return function(e) {
              for (var r = [], n = 0; n < e.length; n += 1) {
                var i = e[n],
                  a = {
                    time: i.tm,
                    duration: i.dr
                  };
                try {
                  a.payload = JSON.parse(e[n].cm)
                } catch (r) {
                  try {
                    a.payload = t(e[n].cm)
                  } catch (t) {
                    a.payload = {
                      name: e[n].cm
                    }
                  }
                }
                r.push(a)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r;) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                  e += 1
                }
                return null
              }
              return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
          }(),
          renderers = {},
          registerRenderer = function(t, e) {
            renderers[t] = e
          };

        function getRenderer(t) {
          return renderers[t]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var t in renderers)
            if (renderers[t]) return t;
          return ""
        }

        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$4(t)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var r = getRenderer(e);
          this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var r = {
              wrapper: t,
              animationData: e
            },
            n = t.attributes;
          r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
          "false" === i ? r.loop = !1 : "true" === i ? r.loop = !0 : "" !== i && (r.loop = parseInt(i, 10));
          var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, r, n = this.animationData.layers,
            i = n.length,
            a = t.layers,
            s = a.length;
          for (r = 0; r < s; r += 1)
            for (e = 0; e < i;) {
              if (n[e].id === a[r].id) {
                n[e] = a[r];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer) try {
            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (t) {
            this.triggerConfigError(t)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var r = "number" == typeof t ? t : void 0,
            n = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(r, n)
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (t) {
            this.triggerRenderFrameError(t)
          }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, r = 0; r < this.markers.length; r += 1)
            if ((e = this.markers[r]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
          if (!r || this.name === r) {
            var n = Number(t);
            if (isNaN(n)) {
              var i = this.getMarkerData(t);
              i && this.goToAndStop(i.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
          if (!r || this.name === r) {
            var n = Number(t);
            if (isNaN(n)) {
              var i = this.getMarkerData(t);
              i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
            } else this.goToAndStop(n, e, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              r = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) this.segments.push(t[r])
          } else this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, r = this.assets.length; e < r;) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, r)
          } catch (t) {}
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t)
          }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
            var t = {},
              e = [],
              r = 0,
              n = 0,
              i = 0,
              a = !0,
              s = !1;

            function o(t) {
              for (var r = 0, i = t.target; r < n;) e[r].animation === i && (e.splice(r, 1), r -= 1, n -= 1, i.isPaused || h()), r += 1
            }

            function l(t, r) {
              if (!t) return null;
              for (var i = 0; i < n;) {
                if (e[i].elem === t && null !== e[i].elem) return e[i].animation;
                i += 1
              }
              var a = new AnimationItem;
              return c(a, t), a.setData(t, r), a
            }

            function u() {
              i += 1, d()
            }

            function h() {
              i -= 1
            }

            function c(t, r) {
              t.addEventListener("destroy", o), t.addEventListener("_active", u), t.addEventListener("_idle", h), e.push({
                elem: r,
                animation: t
              }), n += 1
            }

            function p(t) {
              var o, l = t - r;
              for (o = 0; o < n; o += 1) e[o].animation.advanceTime(l);
              r = t, i && !s ? window.requestAnimationFrame(p) : a = !0
            }

            function f(t) {
              r = t, window.requestAnimationFrame(p)
            }

            function d() {
              !s && i && a && (window.requestAnimationFrame(f), a = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return c(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, r) {
              var i;
              for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r)
            }, t.setDirection = function(t, r) {
              var i;
              for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r)
            }, t.play = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.play(t)
            }, t.pause = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.pause(t)
            }, t.stop = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.stop(t)
            }, t.togglePause = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, r) {
              var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = i.length;
              for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], t);
              if (e && 0 === a) {
                r || (r = "svg");
                var s = document.getElementsByTagName("body")[0];
                s.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < n; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, r, i) {
              var a;
              for (a = 0; a < n; a += 1) e[a].animation.goToAndStop(t, r, i)
            }, t.destroy = function(t) {
              var r;
              for (r = n - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
            }, t.freeze = function() {
              s = !0
            }, t.unfreeze = function() {
              s = !1, d()
            }, t.setVolume = function(t, r) {
              var i;
              for (i = 0; i < n; i += 1) e[i].animation.setVolume(t, r)
            }, t.mute = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.mute(t)
            }, t.unmute = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, r = e.length,
                n = [];
              for (t = 0; t < r; t += 1) n.push(e[t].animation);
              return n
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, r, n, i, a) {
                  var s = a || ("bez_" + t + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
                  if (e[s]) return e[s];
                  var o = new h([t, r, n, i]);
                  return e[s] = o, o
                }
              },
              e = {},
              r = 11,
              n = 1 / (r - 1),
              i = "function" == typeof Float32Array;

            function a(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function s(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function l(t, e, r) {
              return ((a(e, r) * t + s(e, r)) * t + o(e)) * t
            }

            function u(t, e, r) {
              return 3 * a(e, r) * t * t + 2 * s(e, r) * t + o(e)
            }

            function h(t) {
              this._p = t, this._mSampleValues = i ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return h.prototype = {
              get: function(t) {
                var e = this._p[0],
                  r = this._p[1],
                  n = this._p[2],
                  i = this._p[3];
                return this._precomputed || this._precompute(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), r, i)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  n = this._p[3];
                this._precomputed = !0, t === e && r === n || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], i = 0; i < r; ++i) this._mSampleValues[i] = l(i * n, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, s = 0, o = 1, h = r - 1; o !== h && a[o] <= t; ++o) s += n;
                var c = s + (t - a[--o]) / (a[o + 1] - a[o]) * n,
                  p = u(c, e, i);
                return p >= .001 ? function(t, e, r, n) {
                  for (var i = 0; i < 4; ++i) {
                    var a = u(e, r, n);
                    if (0 === a) return e;
                    e -= (l(e, r, n) - t) / a
                  }
                  return e
                }(t, c, e, i) : 0 === p ? c : function(t, e, r, n, i) {
                  var a, s, o = 0;
                  do {
                    (a = l(s = e + (r - e) / 2, n, i) - t) > 0 ? r = s : e = s
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return s
                }(t, s, s + n, e, i)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, r) {
            var n = 0,
              i = t,
              a = createSizedArray(i);
            return {
              newElement: function() {
                return n ? a[n -= 1] : e()
              },
              release: function(t) {
                n === i && (a = pooling.double(a), i *= 2), r && r(t), a[n] = t, n += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(t) {
            var e, r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, r, n, i, a) {
            var s = t * n + e * i + r * a - i * n - a * t - r * e;
            return s > -.001 && s < .001
          }
          var r = function(t, e, r, n) {
            var i, a, s, o, l, u, h = getDefaultCurveSegments(),
              c = 0,
              p = [],
              f = [],
              d = bezierLengthPool.newElement();
            for (s = r.length, i = 0; i < h; i += 1) {
              for (l = i / (h - 1), u = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * n[a] + bmPow(l, 3) * e[a], p[a] = o, null !== f[a] && (u += bmPow(p[a] - f[a], 2)), f[a] = p[a];
              u && (c += u = bmSqrt(u)), d.percents[i] = l, d.lengths[i] = c
            }
            return d.addedLength = c, d
          };

          function n(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function i(t, e) {
            this.partialLength = t, this.point = e
          }
          var a, s = (a = {}, function(t, r, s, o) {
            var l = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[l]) {
              var u, h, c, p, f, d, m, v = getDefaultCurveSegments(),
                g = 0,
                y = null;
              2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (v = 2);
              var b = new n(v);
              for (c = s.length, u = 0; u < v; u += 1) {
                for (m = createSizedArray(c), f = u / (v - 1), d = 0, h = 0; h < c; h += 1) p = bmPow(1 - f, 3) * t[h] + 3 * bmPow(1 - f, 2) * f * (t[h] + s[h]) + 3 * (1 - f) * bmPow(f, 2) * (r[h] + o[h]) + bmPow(f, 3) * r[h], m[h] = p, null !== y && (d += bmPow(m[h] - y[h], 2));
                g += d = bmSqrt(d), b.points[u] = new i(d, m), y = m
              }
              b.segmentLength = g, a[l] = b
            }
            return a[l]
          });

          function o(t, e) {
            var r = e.percents,
              n = e.lengths,
              i = r.length,
              a = bmFloor((i - 1) * t),
              s = t * e.addedLength,
              o = 0;
            if (a === i - 1 || 0 === a || s === n[a]) return r[a];
            for (var l = n[a] > s ? -1 : 1, u = !0; u;)
              if (n[a] <= s && n[a + 1] > s ? (o = (s - n[a]) / (n[a + 1] - n[a]), u = !1) : a += l, a < 0 || a >= i - 1) {
                if (a === i - 1) return r[a];
                u = !1
              } return r[a] + (r[a + 1] - r[a]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, n = segmentsLengthPool.newElement(),
                i = t.c,
                a = t.v,
                s = t.o,
                o = t.i,
                l = t._length,
                u = n.lengths,
                h = 0;
              for (e = 0; e < l - 1; e += 1) u[e] = r(a[e], a[e + 1], s[e], o[e + 1]), h += u[e].addedLength;
              return i && l && (u[e] = r(a[e], a[0], s[e], o[0]), h += u[e].addedLength), n.totalLength = h, n
            },
            getNewSegment: function(e, r, n, i, a, s, u) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var h, c = o(a, u),
                p = o(s = s > 1 ? 1 : s, u),
                f = e.length,
                d = 1 - c,
                m = 1 - p,
                v = d * d * d,
                g = c * d * d * 3,
                y = c * c * d * 3,
                b = c * c * c,
                S = d * d * m,
                x = c * d * m + d * c * m + d * d * p,
                E = c * c * m + d * c * p + c * d * p,
                _ = c * c * p,
                w = d * m * m,
                P = c * m * m + d * p * m + d * m * p,
                T = c * p * m + d * p * p + c * m * p,
                C = c * p * p,
                A = m * m * m,
                M = p * m * m + m * p * m + m * m * p,
                k = p * p * m + m * p * p + p * m * p,
                I = p * p * p;
              for (h = 0; h < f; h += 1) l[4 * h] = t.round(1e3 * (v * e[h] + g * n[h] + y * i[h] + b * r[h])) / 1e3, l[4 * h + 1] = t.round(1e3 * (S * e[h] + x * n[h] + E * i[h] + _ * r[h])) / 1e3, l[4 * h + 2] = t.round(1e3 * (w * e[h] + P * n[h] + T * i[h] + C * r[h])) / 1e3, l[4 * h + 3] = t.round(1e3 * (A * e[h] + M * n[h] + k * i[h] + I * r[h])) / 1e3;
              return l
            },
            getPointInSegment: function(e, r, n, i, a, s) {
              var l = o(a, s),
                u = 1 - l;
              return [t.round(1e3 * (u * u * u * e[0] + (l * u * u + u * l * u + u * u * l) * n[0] + (l * l * u + u * l * l + l * u * l) * i[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (u * u * u * e[1] + (l * u * u + u * l * u + u * u * l) * n[1] + (l * l * u + u * l * l + l * u * l) * i[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function(r, n, i, a, s, o, l, u, h) {
              if (0 === i && 0 === o && 0 === h) return e(r, n, a, s, l, u);
              var c, p = t.sqrt(t.pow(a - r, 2) + t.pow(s - n, 2) + t.pow(o - i, 2)),
                f = t.sqrt(t.pow(l - r, 2) + t.pow(u - n, 2) + t.pow(h - i, 2)),
                d = t.sqrt(t.pow(l - a, 2) + t.pow(u - s, 2) + t.pow(h - o, 2));
              return (c = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var r, n = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var i, a, s, o, l, u, h, c, p, f = e.lastIndex, d = f, m = this.keyframes.length - 1, v = !0; v;) {
            if (i = this.keyframes[d], a = this.keyframes[d + 1], d === m - 1 && t >= a.t - n) {
              i.h && (i = a), f = 0;
              break
            }
            if (a.t - n > t) {
              f = d;
              break
            }
            d < m - 1 ? d += 1 : (f = 0, v = !1)
          }
          s = this.keyframesMetadata[d] || {};
          var g, y = a.t - n,
            b = i.t - n;
          if (i.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
            var S = s.bezierData;
            if (t >= y || t < b) {
              var x = t >= y ? S.points.length - 1 : 0;
              for (l = S.points[x].point.length, o = 0; o < l; o += 1) r[o] = S.points[x].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = p), u = p((t - b) / (y - b));
              var E, _ = S.segmentLength * u,
                w = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, h = S.points.length; v;) {
                if (w += S.points[c].partialLength, 0 === _ || 0 === u || c === S.points.length - 1) {
                  for (l = S.points[c].point.length, o = 0; o < l; o += 1) r[o] = S.points[c].point[o];
                  break
                }
                if (_ >= w && _ < w + S.points[c + 1].partialLength) {
                  for (E = (_ - w) / S.points[c + 1].partialLength, l = S.points[c].point.length, o = 0; o < l; o += 1) r[o] = S.points[c].point[o] + (S.points[c + 1].point[o] - S.points[c].point[o]) * E;
                  break
                }
                c < h - 1 ? c += 1 : v = !1
              }
              e._lastPoint = c, e._lastAddedLength = w - S.points[c].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var P, T, C, A, M;
            if (m = i.s.length, g = a.s || i.e, this.sh && 1 !== i.h) t >= y ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : t <= b ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(g), (t - b) / (y - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== i.h && (t >= y ? u = 1 : t < b ? u = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? p = s.__fnct[d] : (P = void 0 === i.o.x[d] ? i.o.x[0] : i.o.x[d], T = void 0 === i.o.y[d] ? i.o.y[0] : i.o.y[d], C = void 0 === i.i.x[d] ? i.i.x[0] : i.i.x[d], A = void 0 === i.i.y[d] ? i.i.y[0] : i.i.y[d], p = BezierFactory.getBezierEasing(P, T, C, A).get, s.__fnct[d] = p)) : s.__fnct ? p = s.__fnct : (P = i.o.x, T = i.o.y, C = i.i.x, A = i.i.y, p = BezierFactory.getBezierEasing(P, T, C, A).get, i.keyframeMetadata = p), u = p((t - b) / (y - b)))), g = a.s || i.e, M = 1 === i.h ? i.s[d] : i.s[d] + (g[d] - i.s[d]) * u, "multidimensional" === this.propType ? r[d] = M : r = M
          }
          return e.lastIndex = f, r
        }

        function slerp(t, e, r) {
          var n, i, a, s, o, l = [],
            u = t[0],
            h = t[1],
            c = t[2],
            p = t[3],
            f = e[0],
            d = e[1],
            m = e[2],
            v = e[3];
          return (i = u * f + h * d + c * m + p * v) < 0 && (i = -i, f = -f, d = -d, m = -m, v = -v), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * u + o * f, l[1] = s * h + o * d, l[2] = s * c + o * m, l[3] = s * p + o * v, l
        }

        function quaternionToEuler(t, e) {
          var r = e[0],
            n = e[1],
            i = e[2],
            a = e[3],
            s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
            o = Math.asin(2 * r * n + 2 * i * a),
            l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
          t[0] = s / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            r = t[1] * degToRads,
            n = t[2] * degToRads,
            i = Math.cos(e / 2),
            a = Math.cos(r / 2),
            s = Math.cos(n / 2),
            o = Math.sin(e / 2),
            l = Math.sin(r / 2),
            u = Math.sin(n / 2);
          return [o * l * s + i * a * u, o * a * s + i * l * u, i * l * s - o * a * u, i * a * s - o * l * u]
        }

        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var n = this.interpolateValue(t, this._caching);
            this.pv = n
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
          else
            for (var r = 0, n = this.v.length; r < n;) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, r, n) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, r, n) {
          var i;
          this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = e.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = e.k[i] * this.mult, this.pv[i] = e.k[i];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, r, n) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = n, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, r, n) {
          var i;
          this.propType = "multidimensional";
          var a, s, o, l, u = e.k.length;
          for (i = 0; i < u - 1; i += 1) e.k[i].to && e.k[i].s && e.k[i + 1] && e.k[i + 1].s && (a = e.k[i].s, s = e.k[i + 1].s, o = e.k[i].to, l = e.k[i].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (e.k[i].to = null, e.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (e.k[i].to = null, e.k[i].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = n, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var h = e.k[0].s.length;
          for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), i = 0; i < h; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", h)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, r, n, i) {
            var a;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) a = new MultiDimensionalProperty(t, e, n, i);
              else switch (r) {
                case 0:
                  a = new KeyframedValueProperty(t, e, n, i);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(t, e, n, i)
              } else a = new ValueProperty(t, e, n, i);
            return a.effectsSequence.length && i.addDynamicProperty(a), a
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, n, i) {
          var a;
          switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = []
          }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = t, a[n][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, n, i, a, s, o) {
          this.setXYAt(t, e, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            n = this.i,
            i = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
          var a, s = this._length - 1,
            o = this._length;
          for (a = i; a < o; a += 1) t.setTripleAt(e[s][0], e[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, r = factory.newElement(),
              n = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(n), r.c = t.c, e = 0; e < n; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(t) {
              var e, r = t._length;
              for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, r) {
              var n, i, a, s, o, l, u, h, c, p = r.lastIndex,
                f = this.keyframes;
              if (t < f[0].t - this.offsetTime) n = f[0].s[0], a = !0, p = 0;
              else if (t >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
              else {
                for (var d, m, v, g = p, y = f.length - 1, b = !0; b && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : b = !1;
                if (v = this.keyframesMetadata[g] || {}, p = g, !(a = 1 === d.h)) {
                  if (t >= m.t - this.offsetTime) h = 1;
                  else if (t < d.t - this.offsetTime) h = 0;
                  else {
                    var S;
                    v.__fnct ? S = v.__fnct : (S = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, v.__fnct = S), h = S((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  i = m.s ? m.s[0] : d.e[0]
                }
                n = d.s[0]
              }
              for (l = e._length, u = n.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1)
                for (o = 0; o < u; o += 1) c = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * h, e.i[s][o] = c, c = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * h, e.o[s][o] = c, c = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * h, e.v[s][o] = c
            }

            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                i = this._caching.lastFrame;
              return i !== t && (i < r && e < r || i > n && e > n) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function n() {
              this.paths = this.localShapeCollection
            }

            function i(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r, n = t._length;
                for (r = 0; r < n; r += 1)
                  if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function s(t, e, r) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var i = 3 === r ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(e, i, a) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var s = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = n, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            s.prototype.interpolateShape = e, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = i, l.prototype.addEffect = o;
            var u = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: n,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      r = this.p.v[1],
                      n = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      s = this.v;
                    s.v[0][0] = e, s.v[0][1] = r - i, s.v[1][0] = a ? e + n : e - n, s.v[1][1] = r, s.v[2][0] = e, s.v[2][1] = r + i, s.v[3][0] = a ? e - n : e + n, s.v[3][1] = r, s.i[0][0] = a ? e - n * t : e + n * t, s.i[0][1] = r - i, s.i[1][0] = a ? e + n : e - n, s.i[1][1] = r - i * t, s.i[2][0] = a ? e + n * t : e - n * t, s.i[2][1] = r + i, s.i[3][0] = a ? e - n : e + n, s.i[3][1] = r + i * t, s.o[0][0] = a ? e + n * t : e - n * t, s.o[0][1] = r - i, s.o[1][0] = a ? e + n : e - n, s.o[1][1] = r + i * t, s.o[2][0] = a ? e - n * t : e + n * t, s.o[2][1] = r + i, s.o[3][0] = a ? e - n : e + n, s.o[3][1] = r - i * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              h = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: n,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, r, n, i = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / i,
                      s = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      u = this.os.v,
                      h = this.is.v,
                      c = 2 * Math.PI * o / (2 * i),
                      p = 2 * Math.PI * l / (2 * i),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < i; t += 1) {
                      r = s ? u : h, n = s ? c : p;
                      var m = (e = s ? o : l) * Math.cos(f),
                        v = e * Math.sin(f),
                        g = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                        y = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                      m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - g * n * r * d, v - y * n * r * d, m + g * n * r * d, v + y * n * r * d, t, !0), s = !s, f += a * d
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      r = 2 * Math.PI / e,
                      n = this.or.v,
                      i = this.os.v,
                      a = 2 * Math.PI * n / (4 * e),
                      s = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var l = n * Math.cos(s),
                        u = n * Math.sin(s),
                        h = 0 === l && 0 === u ? 0 : u / Math.sqrt(l * l + u * u),
                        c = 0 === l && 0 === u ? 0 : -l / Math.sqrt(l * l + u * u);
                      l += +this.p.v[0], u += +this.p.v[1], this.v.setTripleAt(l, u, l - h * a * i * o, u - c * a * i * o, l + h * a * i * o, u + c * a * i * o, t, !0), s += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              c = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return t.prototype = {
                  convertRectToPath: function() {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      r = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      i = bmMin(r, n, this.r.v),
                      a = i * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + i, t + r, e - n + a, 0, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - a, t + r, e + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e + n, t + r - i, e + n, t + r - a, e + n, 2, !0), this.v.setTripleAt(t - r + i, e + n, t - r + a, e + n, t - r + i, e + n, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - i, t - r, e + n - a, 4, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + a, t - r, e - n + i, 5, !0), this.v.setTripleAt(t - r + i, e - n, t - r + i, e - n, t - r + a, e - n, 6, !0), this.v.setTripleAt(t + r - i, e - n, t + r - a, e - n, t + r - i, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + a, e + n, t - r, e + n, 2), this.v.setTripleAt(t - r, e - n, t - r, e - n + a, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + a, t + r, e - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e - n, t + r - i, e - n, t + r - a, e - n, 1, !0), this.v.setTripleAt(t - r + i, e - n, t - r + a, e - n, t - r + i, e - n, 2, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + i, t - r, e - n + a, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - a, t - r, e + n - i, 4, !0), this.v.setTripleAt(t - r + i, e + n, t - r + i, e + n, t - r + a, e + n, 5, !0), this.v.setTripleAt(t + r - i, e + n, t + r - a, e + n, t + r - i, e + n, 6, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - i, t + r, e + n - a, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + a, e - n, t - r, e - n, 1, !0), this.v.setTripleAt(t - r, e + n, t - r, e + n - a, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - a, e + n, t + r, e + n, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: n
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, r) {
                var n;
                return 3 === r || 4 === r ? n = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new s(t, e, r) : 5 === r ? n = new c(t, e) : 6 === r ? n = new u(t, e) : 7 === r && (n = new h(t, e)), n.k && t.addDynamicProperty(n), n
              },
              getConstructorFunction: function() {
                return s
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              n = Math.round;

            function i() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function u(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function h(t, e) {
              return this.shear(r(t), r(e))
            }

            function c(n, i) {
              var a = t(i),
                s = e(i);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function p(t, e, r) {
              return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function f(t, e, r, n, i, a, s, o, l, u, h, c, p, f, d, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = u, this.props[10] = h, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
            }

            function d(t, e, r) {
              return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function m(t, e, r, n, i, a, s, o, l, u, h, c, p, f, d, m) {
              var v = this.props;
              if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === u && 1 === h && 0 === c) return v[12] = v[12] * t + v[15] * p, v[13] = v[13] * a + v[15] * f, v[14] = v[14] * h + v[15] * d, v[15] *= m, this._identityCalculated = !1, this;
              var g = v[0],
                y = v[1],
                b = v[2],
                S = v[3],
                x = v[4],
                E = v[5],
                _ = v[6],
                w = v[7],
                P = v[8],
                T = v[9],
                C = v[10],
                A = v[11],
                M = v[12],
                k = v[13],
                I = v[14],
                D = v[15];
              return v[0] = g * t + y * i + b * l + S * p, v[1] = g * e + y * a + b * u + S * f, v[2] = g * r + y * s + b * h + S * d, v[3] = g * n + y * o + b * c + S * m, v[4] = x * t + E * i + _ * l + w * p, v[5] = x * e + E * a + _ * u + w * f, v[6] = x * r + E * s + _ * h + w * d, v[7] = x * n + E * o + _ * c + w * m, v[8] = P * t + T * i + C * l + A * p, v[9] = P * e + T * a + C * u + A * f, v[10] = P * r + T * s + C * h + A * d, v[11] = P * n + T * o + C * c + A * m, v[12] = M * t + k * i + I * l + D * p, v[13] = M * e + k * a + I * u + D * f, v[14] = M * r + k * s + I * h + D * d, v[15] = M * n + k * o + I * c + D * m, this._identityCalculated = !1, this
            }

            function v(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function y(t) {
              for (var e = 0; e < 16;) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1
              }
              return !0
            }

            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t
            }

            function S(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function x(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function E(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function _(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function w(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function P() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                n = -this.props[4] / t,
                i = this.props[0] / t,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = r, o.props[4] = n, o.props[5] = i, o.props[12] = a, o.props[13] = s, o
            }

            function T(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function C(t) {
              var e, r = t.length,
                n = [];
              for (e = 0; e < r; e += 1) n[e] = T(t[e]);
              return n
            }

            function A(t, e, r) {
              var n = createTypedArray("float32", 6);
              if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
              else {
                var i = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  u = this.props[13];
                n[0] = t[0] * i + t[1] * s + l, n[1] = t[0] * a + t[1] * o + u, n[2] = e[0] * i + e[1] * s + l, n[3] = e[0] * a + e[1] * o + u, n[4] = r[0] * i + r[1] * s + l, n[5] = r[0] * a + r[1] * o + u
              }
              return n
            }

            function M(t, e, r) {
              return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function I() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += n(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
              return r
            }

            function D(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? n(1e4 * t) / 1e4 : t
            }

            function F() {
              var t = this.props;
              return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
            }
            return function() {
              this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = h, this.skewFromAxis = c, this.shear = u, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.multiply = v, this.applyToPoint = x, this.applyToX = E, this.applyToY = _, this.applyToZ = w, this.applyToPointArray = M, this.applyToTriplePoints = A, this.applyToPointStringified = k, this.toCSS = I, this.to2dCSS = F, this.clone = b, this.cloneFromProps = S, this.equals = y, this.inversePoints = C, this.inversePoint = T, this.getInverseMatrix = P, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$3(t)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(t) {
          setLocationHref(t)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
          setSubframeEnabled(t)
        }

        function setPrefix(t) {
          setIdPrefix(t)
        }

        function loadAnimation(t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
          if ("string" == typeof t) switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var n = e[r].split("=");
            if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (t) {}
        var ShapeModifiers = function() {
          var t = {},
            e = {};
          return t.registerModifier = function(t, r) {
            e[t] || (e[t] = r)
          }, t.getModifier = function(t, r, n) {
            return new e[t](r, n)
          }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, n, i) {
          var a = [];
          e <= 1 ? a.push({
            s: t,
            e
          }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
          }) : (a.push({
            s: t,
            e: 1
          }), a.push({
            s: 0,
            e: e - 1
          }));
          var s, o, l = [],
            u = a.length;
          for (s = 0; s < u; s += 1) {
            var h, c;
            (o = a[s]).e * i < n || o.s * i > n + r || (h = o.s * i <= n ? 0 : (o.s * i - n) / r, c = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([h, c]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, r, n, i;
          if (this._mdf || t) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var s = e;
              e = r, r = s
            }
            e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
          } else e = this.sValue, r = this.eValue;
          var o, l, u, h, c, p = this.shapes.length,
            f = 0;
          if (r === e)
            for (i = 0; i < p; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
          else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
              for (i = 0; i < p; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
          } else {
            var d, m, v = [];
            for (i = 0; i < p; i += 1)
              if ((d = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (l = (n = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                else {
                  for (u = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) h = bez.getSegmentsLength(n.shapes[o]), u.push(h), c += h.totalLength;
                  d.totalShapeLength = c, d.pathsData = u
                }
                f += c, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var g, y = e,
              b = r,
              S = 0;
            for (i = p - 1; i >= 0; i -= 1)
              if ((d = this.shapes[i]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, S, f), S += d.totalShapeLength) : g = [
                    [y, b]
                  ], l = g.length, o = 0; o < l; o += 1) {
                  y = g[o][0], b = g[o][1], v.length = 0, b <= 1 ? v.push({
                    s: d.totalShapeLength * y,
                    e: d.totalShapeLength * b
                  }) : y >= 1 ? v.push({
                    s: d.totalShapeLength * (y - 1),
                    e: d.totalShapeLength * (b - 1)
                  }) : (v.push({
                    s: d.totalShapeLength * y,
                    e: d.totalShapeLength
                  }), v.push({
                    s: 0,
                    e: d.totalShapeLength * (b - 1)
                  }));
                  var x = this.addShapes(d, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var E = x.pop();
                        this.addPaths(x, m), x = this.addShapes(d, v[1], E)
                      } else this.addPaths(x, m), x = this.addShapes(d, v[1]);
                    this.addPaths(x, m)
                  }
                }
                d.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, n, i, a, s) {
          i.setXYAt(e[0], e[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(t[0], t[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, n) {
          e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
          var n, i, a, s, o, l, u, h, c = t.pathsData,
            p = t.shape.paths.shapes,
            f = t.shape.paths._length,
            d = 0,
            m = [],
            v = !0;
          for (r ? (o = r._length, h = r._length) : (r = shapePool.newElement(), o = 0, h = 0), m.push(r), n = 0; n < f; n += 1) {
            for (l = c[n].lengths, r.c = p[n].c, a = p[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
              if (d + (s = l[i - 1]).addedLength < e.s) d += s.addedLength, r.c = !1;
              else {
                if (d > e.e) {
                  r.c = !1;
                  break
                }
                e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[i], p[n].v[i], r, o, v), v = !1) : (u = bez.getNewSegment(p[n].v[i - 1], p[n].v[i], p[n].o[i - 1], p[n].i[i], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(u, r, o, v), v = !1, r.c = !1), d += s.addedLength, o += 1
              } if (p[n].c && l.length) {
              if (s = l[i - 1], d <= e.e) {
                var g = l[i - 1].addedLength;
                e.s <= d && e.e >= d + g ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[0], p[n].v[0], r, o, v), v = !1) : (u = bez.getNewSegment(p[n].v[i - 1], p[n].v[0], p[n].o[i - 1], p[n].i[0], (e.s - d) / g, (e.e - d) / g, l[i - 1]), this.addSegmentFromArray(u, r, o, v), v = !1, r.c = !1)
              } else r.c = !1;
              d += s.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[h][0], r.v[h][1], "i", h), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
            n < f - 1 && (r = shapePool.newElement(), v = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var r = e / 100,
            n = [0, 0],
            i = t._length,
            a = 0;
          for (a = 0; a < i; a += 1) n[0] += t.v[a][0], n[1] += t.v[a][1];
          n[0] /= i, n[1] /= i;
          var s, o, l, u, h, c, p = shapePool.newElement();
          for (p.c = t.c, a = 0; a < i; a += 1) s = t.v[a][0] + (n[0] - t.v[a][0]) * r, o = t.v[a][1] + (n[1] - t.v[a][1]) * r, l = t.o[a][0] + (n[0] - t.o[a][0]) * -r, u = t.o[a][1] + (n[1] - t.o[a][1]) * -r, h = t.i[a][0] + (n[0] - t.i[a][0]) * -r, c = t.i[a][1] + (n[1] - t.i[a][1]) * -r, p.setTripleAt(s, o, l, u, h, c, a);
          return p
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, r, n, i, a, s, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, r) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var n, i = e.or.k.length;
                for (n = 0; n < i; n += 1) e.or.k[n].to = null, e.or.k[n].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return e.prototype = {
            applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var n, i;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      n = [], i = [];
                      var a = this.px,
                        s = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (n[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (n[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (n = [a.pv, s.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), i[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                    } else n = i = t;
                    this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(t, r, n) {
              return new e(t, r, n)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
          return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
          return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
          if (0 === t) return [];
          var n = e * e - 4 * t * r;
          if (n < 0) return [];
          var i = -e / (2 * t);
          if (0 === n) return [i];
          var a = Math.sqrt(n) / (2 * t);
          return [i - a, i + a]
        }

        function polynomialCoefficients(t, e, r, n) {
          return [3 * e - t - 3 * r + n, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, n, i) {
          i && pointEqual(t, e) && (e = lerpPoint(t, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(t, n, 2 / 3));
          var a = polynomialCoefficients(t[0], e[0], r[0], n[0]),
            s = polynomialCoefficients(t[1], e[1], r[1], n[1]);
          this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [t, e, r, n]
        }

        function extrema(t, e) {
          var r = t.points[0][e],
            n = t.points[t.points.length - 1][e];
          if (r > n) {
            var i = n;
            n = r, r = i
          }
          for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), s = 0; s < a.length; s += 1)
            if (a[s] > 0 && a[s] < 1) {
              var o = t.point(a[s])[e];
              o < r ? r = o : o > n && (n = o)
            } return {
            min: r,
            max: n
          }
        }

        function intersectData(t, e, r) {
          var n = t.boundingBox();
          return {
            cx: n.cx,
            cy: n.cy,
            width: n.width,
            height: n.height,
            bez: t,
            t: (e + r) / 2,
            t1: e,
            t2: r
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, r, n, i, a) {
          if (boxIntersect(t, e))
            if (r >= a || t.width <= n && t.height <= n && e.width <= n && e.height <= n) i.push([t.t, e.t]);
            else {
              var s = splitData(t),
                o = splitData(e);
              intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, n) {
          var i = [t[0], t[1], 1],
            a = [e[0], e[1], 1],
            s = [r[0], r[1], 1],
            o = [n[0], n[1], 1],
            l = crossProduct(crossProduct(i, a), crossProduct(s, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, r) {
          return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, r, n, i, a, s) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            u = e[0] + Math.cos(r) * n * i,
            h = e[1] - Math.sin(r) * n * i;
          t.setTripleAt(u, h, u + Math.cos(o) * a, h - Math.sin(o) * a, u + Math.cos(l) * s, h - Math.sin(l) * s, t.length())
        }

        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            n = .5 * -Math.PI;
          return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
        }

        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            n = (e + 1) % t.length(),
            i = getPerpendicularVector(t.v[r], t.v[n]);
          return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
        }

        function zigZagCorner(t, e, r, n, i, a, s) {
          var o = getProjectingAngle(e, r),
            l = e.v[r % e._length],
            u = e.v[0 === r ? e._length - 1 : r - 1],
            h = e.v[(r + 1) % e._length],
            c = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0,
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0;
          setPoint(t, e.v[r % e._length], o, s, n, p / (2 * (i + 1)), c / (2 * (i + 1)), a)
        }

        function zigZagSegment(t, e, r, n, i, a) {
          for (var s = 0; s < n; s += 1) {
            var o = (s + 1) / (n + 1),
              l = 2 === i ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              u = e.normalAngle(o);
            setPoint(t, e.point(o), u, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
          }
          return a
        }

        function linearOffset(t, e, r) {
          var n = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, n, r), polarOffset(e, n, r)]
        }

        function offsetSegment(t, e) {
          var r, n, i, a, s, o, l;
          r = (l = linearOffset(t.points[0], t.points[1], e))[0], n = l[1], i = (l = linearOffset(t.points[1], t.points[2], e))[0], a = l[1], s = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
          var u = lineIntersection(r, n, i, a);
          null === u && (u = n);
          var h = lineIntersection(s, o, i, a);
          return null === h && (h = s), new PolynomialBezier(r, u, h, o)
        }

        function joinLines(t, e, r, n, i) {
          var a = e.points[3],
            s = r.points[0];
          if (3 === n) return a;
          if (pointEqual(a, s)) return a;
          if (2 === n) {
            var o = -e.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              u = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              h = u ? pointDistance(u, a) : pointDistance(a, s) / 2,
              c = polarOffset(a, o, 2 * h * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(s, l, 2 * h * roundCorner), t.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], t.length()), s
          }
          var p = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
          return p && pointDistance(p, a) < i ? (t.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], t.length()), p) : a
        }

        function getIntersection(t, e) {
          var r = t.intersections(e);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            n = e.slice(),
            i = getIntersection(t[t.length - 1], e[0]);
          return i && (r[t.length - 1] = t[t.length - 1].split(i[0])[0], n[0] = e[0].split(i[1])[1]), t.length > 1 && e.length > 1 && (i = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(i[0])[0]],
            [e[e.length - 1].split(i[1])[1]]
          ] : [r, n]
        }

        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var r, n, i, a, s = t.inflectionPoints();
          if (0 === s.length) return [offsetSegment(t, e)];
          if (1 === s.length || floatEqual(s[1], 1)) return r = (i = t.split(s[0]))[0], n = i[1], [offsetSegment(r, e), offsetSegment(n, e)];
          r = (i = t.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, e), offsetSegment(a, e), offsetSegment(n, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", n = "normal", i = e.length, a = 0; a < i; a += 1) switch (e[a].toLowerCase()) {
            case "italic":
              n = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200"
          }
          return {
            style: n,
            weight: t.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, n, i, a) {
          var s = a ? -1 : 1,
            o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
            l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
          t.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * s * i), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, n) {
          for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, r, n, i, a, s = !1;
          if (this._mdf || t) {
            var o, l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l;) {
                var u = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                u.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, u), this._groups.splice(0, 0, u), this._currentCopies += 1
              }
              this.elem.reloadShapes(), s = !0
            }
            for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
              if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                var h = this.elemsData[n].it,
                  c = h[h.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = l;
            var p = this.o.v,
              f = p % 1,
              d = p > 0 ? Math.floor(p) : Math.ceil(p),
              m = this.pMatrix.props,
              v = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var y, b, S = 0;
            if (p > 0) {
              for (; S < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), S += f)
            } else if (p < 0) {
              for (; S > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), S -= f)
            }
            for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== S) {
                for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              S += 1, a -= 1, n += i
            }
          } else
            for (a = this._currentCopies, n = 0, i = 1; a;) r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, n += i;
          return s
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var r, n = shapePool.newElement();
          n.c = t.c;
          var i, a, s, o, l, u, h, c, p, f, d, m, v = t._length,
            g = 0;
          for (r = 0; r < v; r += 1) i = t.v[r], s = t.o[r], a = t.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== v - 1 || t.c ? (o = 0 === r ? t.v[v - 1] : t.v[r - 1], u = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, h = d = i[0] + (o[0] - i[0]) * u, c = m = i[1] - (i[1] - o[1]) * u, p = h - (h - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, n.setTripleAt(h, c, p, f, d, m, g), g += 1, o = r === v - 1 ? t.v[0] : t.v[r + 1], u = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, h = p = i[0] + (o[0] - i[0]) * u, c = f = i[1] + (o[1] - i[1]) * u, d = h - (h - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, n.setTripleAt(h, c, p, f, d, m, g), g += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], g), g += 1) : (n.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
          return n
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, r, n, i, a, s, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
            r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (r < 0) return [];
          var n = Math.sqrt(r);
          return floatZero(n) ? n > 0 && n < 1 ? [e] : [] : [e - n, e + n].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            r = lerpPoint(this.points[1], this.points[2], t),
            n = lerpPoint(this.points[2], this.points[3], t),
            i = lerpPoint(e, r, t),
            a = lerpPoint(r, n, t),
            s = lerpPoint(i, a, t);
          return [new PolynomialBezier(this.points[0], e, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(t, e, r) {
          void 0 === e && (e = 2), void 0 === r && (r = 7);
          var n = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, n, r), n
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, r, n) {
          var i = t._length,
            a = shapePool.newElement();
          if (a.c = t.c, t.c || (i -= 1), 0 === i) return a;
          var s = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(a, t, 0, e, r, n, s);
          for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, e, r, n, -s), o = l !== i - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % i) : null, zigZagCorner(a, t, l + 1, e, r, n, s);
          return a
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, r, n, i, a, s, o = this.shapes.length,
            l = this.amplitude.v,
            u = Math.max(0, Math.round(this.frequency.v)),
            h = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l, u, h));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, n) {
          var i = shapePool.newElement();
          i.c = t.c;
          var a, s, o, l = t.length();
          t.c || (l -= 1);
          var u = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(t, a), u.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), u.push(offsetSegmentSplit(o, e));
          u = pruneIntersections(u);
          var h = null,
            c = null;
          for (a = 0; a < u.length; a += 1) {
            var p = u[a];
            for (c && (h = joinLines(i, c, p[0], r, n)), c = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], h && pointEqual(o.points[0], h) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), h = o.points[3]
          }
          return u.length && joinLines(i, c, u[0][0], r, n), i
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, r, n, i, a, s, o = this.shapes.length,
            l = this.amount.v,
            u = this.miterLimit.v,
            h = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l, h, u));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var t = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = 127988,
            n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function i(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
            var n = createTag("span");
            n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
            var i = n.offsetWidth;
            return n.style.fontFamily = function(t) {
              var e, r = t.split(","),
                n = r.length,
                i = [];
              for (e = 0; e < n; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && i.push(r[e]);
              return i.join(",")
            }(t) + ", " + e, {
              node: n,
              w: i,
              parent: r
            }
          }

          function a(t, e) {
            var r, n = document.body && e ? "svg" : "canvas",
              i = getFontProperties(t);
            if ("svg" === n) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", t.fFamily), a.setAttribute("font-style", i.style), a.setAttribute("font-weight", i.weight), a.textContent = "1", t.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily, e.appendChild(a), r = a
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              s.font = i.style + " " + i.weight + " 100px " + t.fFamily, r = s
            }
            return {
              measureText: function(t) {
                return "svg" === n ? (r.textContent = t, r.getComputedTextLength()) : r.measureText(t).width
              }
            }
          }

          function s(t) {
            var e = 0,
              r = t.charCodeAt(0);
            if (r >= 55296 && r <= 56319) {
              var n = t.charCodeAt(1);
              n >= 56320 && n <= 57343 && (e = 1024 * (r - 55296) + n - 56320 + 65536)
            }
            return e
          }

          function o(t) {
            var e = s(t);
            return e >= 127462 && e <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(t, e) {
            var r = t.toString(16) + e.toString(16);
            return -1 !== n.indexOf(r)
          }, l.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, l.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, l.isRegionalFlag = function(t, e) {
            var n = s(t.substr(e, 2));
            if (n !== r) return !1;
            var i = 0;
            for (e += 2; i < 5;) {
              if ((n = s(t.substr(e, 2))) < 917601 || n > 917626) return !1;
              i += 1, e += 2
            }
            return 917631 === s(t.substr(e, 2))
          }, l.isVariationSelector = function(t) {
            return 65039 === t
          }, l.BLACK_FLAG_CODE_POINT = r;
          var u = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r, n, i = t.length,
                  a = this.chars.length;
                for (e = 0; e < i; e += 1) {
                  for (r = 0, n = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (n = !0), r += 1;
                  n || (this.chars.push(t[e]), a += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = a(t), t.cache = {}
                })), void(this.fonts = t.list);
                var r, n = t.list,
                  s = n.length,
                  o = s;
                for (r = 0; r < s; r += 1) {
                  var l, u, h = !0;
                  if (n[r].loaded = !1, n[r].monoCase = i(n[r].fFamily, "monospace"), n[r].sansCase = i(n[r].fFamily, "sans-serif"), n[r].fPath) {
                    if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length > 0 && (h = !1), h) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.setAttribute("f-family", n[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), u = 0; u < l.length; u += 1) - 1 !== l[u].href.indexOf(n[r].fPath) && (h = !1);
                      if (h) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.type = "text/css", p.rel = "stylesheet", p.href = n[r].fPath, document.body.appendChild(p)
                      }
                    } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), u = 0; u < l.length; u += 1) n[r].fPath === l[u].src && (h = !1);
                      if (h) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", n[r].fPath), e.appendChild(f)
                      }
                    }
                  } else n[r].loaded = !0, o -= 1;
                  n[r].helper = a(n[r], e), n[r].cache = {}, this.fonts.push(n[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, r, n) {
              for (var i = 0, a = this.chars.length; i < a;) {
                if (this.chars[i].ch === e && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                i += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, n)), t
            },
            getFontByName: function(t) {
              for (var e = 0, r = this.fonts.length; e < r;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, r) {
              var n = this.getFontByName(e),
                i = t;
              if (!n.cache[i]) {
                var a = n.helper;
                if (" " === t) {
                  var s = a.measureText("|" + t + "|"),
                    o = a.measureText("||");
                  n.cache[i] = (s - o) / 100
                } else n.cache[i] = a.measureText(t) / 100
              }
              return n.cache[i] * r
            },
            checkLoadedFonts: function() {
              var t, e, r, n = this.fonts.length,
                i = n;
              for (t = 0; t < n; t += 1) this.fonts[t].loaded ? i -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (i -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (i -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = u, l
        }();

        function SlotManager(t) {
          this.animationData = t
        }

        function slotFactory(t) {
          return new SlotManager(t)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(t) {
            return blendModeEnums[t] || ""
          }),
          blendModeEnums;

        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var r, n = t.ef || [];
          this.effectElements = [];
          var i, a = n.length;
          for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], e), this.effectElements.push(i)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }

        function AudioElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
          var n = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var r;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var n, i = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < i; r += 1) {
            switch (n = null, a[r].ty) {
              case 0:
                n = new SliderEffect(a[r], e, this);
                break;
              case 1:
                n = new AngleEffect(a[r], e, this);
                break;
              case 2:
                n = new ColorEffect(a[r], e, this);
                break;
              case 3:
                n = new PointEffect(a[r], e, this);
                break;
              case 4:
              case 7:
                n = new CheckboxEffect(a[r], e, this);
                break;
              case 10:
                n = new LayerIndexEffect(a[r], e, this);
                break;
              case 11:
                n = new MaskIndexEffect(a[r], e, this);
                break;
              case 5:
                n = new EffectsManager(a[r], e, this);
                break;
              default:
                n = new NoValueEffect(a[r], e, this)
            }
            n && this.effectElements.push(n)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
              if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
              t += 1
            }
            return !1
          },
          initExpressions: function() {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                r = t("effects"),
                n = t("shape"),
                i = t("text"),
                a = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var s = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, r) {
            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(t, e) {
            var r, n = this.dynamicProperties.length;
            for (r = 0; r < n; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
          var e, r, n = this.layers.length;
          for (this.completeLayers = !0, e = n - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = !1;
          var r, n = t.length,
            i = this.layers.length;
          for (e = 0; e < n; e += 1)
            for (r = 0; r < i;) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
          for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == e && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(t, i[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var n = this.createComp(t[e]);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, r = this.elements.length;
          for (e = 0; e < r; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, r = t.shift();
          if ("number" == typeof r) e = this.elements[r];
          else {
            var n, i = this.elements.length;
            for (n = 0; n < i; n += 1)
              if (this.elements[n].data.nm === r) {
                e = this.elements[n];
                break
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(t, e, r) {
          this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var n, i, a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(s), this.solidPath = "";
          var o, l, u, h, c, p, f = this.masksProperties,
            d = 0,
            m = [],
            v = createElementID(),
            g = "clipPath",
            y = "clip-path";
          for (n = 0; n < s; n += 1)
            if (("a" !== f[n].mode && "n" !== f[n].mode || f[n].inv || 100 !== f[n].o.k || f[n].o.x) && (g = "mask", y = "mask"), "s" !== f[n].mode && "i" !== f[n].mode || 0 !== d ? u = null : ((u = createNS("rect")).setAttribute("fill", "#ffffff"), u.setAttribute("width", this.element.comp.data.w || 0), u.setAttribute("height", this.element.comp.data.h || 0), m.push(u)), i = createNS("path"), "n" === f[n].mode) this.viewData[n] = {
              op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
              elem: i,
              lastPath: ""
            }, a.appendChild(i);
            else {
              var b;
              if (d += 1, i.setAttribute("fill", "s" === f[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== f[n].x.k ? (g = "mask", y = "mask", p = PropertyFactory.getProp(this.element, f[n].x, 0, null, this.element), b = createElementID(), (h = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), h.appendChild(c), a.appendChild(h), i.setAttribute("stroke", "s" === f[n].mode ? "#000000" : "#ffffff")) : (c = null, p = null), this.storedData[n] = {
                  elem: i,
                  x: p,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === f[n].mode) {
                l = m.length;
                var S = createNS("g");
                for (o = 0; o < l; o += 1) S.appendChild(m[o]);
                var x = createNS("mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", v + "_" + d), x.appendChild(i), a.appendChild(x), S.setAttribute("mask", "url(" + getLocationHref() + "#" + v + "_" + d + ")"), m.length = 0, m.push(S)
              } else m.push(i);
              f[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                elem: i,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                invRect: u
              }, this.viewData[n].prop.k || this.drawPath(f[n], this.viewData[n].prop.v, this.viewData[n])
            } for (this.maskElement = createNS(g), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
          d > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var t = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: t,
              localMat: t,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat,
                r = 0,
                n = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < n;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < n; r += 1) e.multiply(this.hierarchy[r].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var t = 0,
                e = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
              if (this.finalTransform._localMatMdf) {
                var r = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(r), t = 1; t < e; t += 1) {
                  var n = this.localTransforms[t].matrix;
                  r.multiply(n)
                }
                r.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var i = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) i *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = i
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (t.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var e = 0,
                  r = t.length;
                for (e = 0; e < r; e += 1) this.localTransforms.push(t[e])
              }
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
            var a, s = e.length;
            for (r = 0; r < s; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, r = this.element.finalTransform.mat,
            n = this.masksProperties.length;
          for (e = 0; e < n; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var i = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, r) {
          var n, i, a = " M" + e.v[0][0] + "," + e.v[0][1];
          for (i = e._length, n = 1; n < i; n += 1) a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
          if (e.c && i > 1 && (a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
            var s = "";
            r.elem && (e.c && (s = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var r = createNS("filter");
              return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var t = createNS("feColorMatrix");
              return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
          },
          featureSupport = function() {
            var t = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(t) {
          var e, r, n = "SourceGraphic",
            i = t.data.ef ? t.data.ef.length : 0,
            a = createElementID(),
            s = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], e = 0; e < i; e += 1) {
            r = null;
            var l = t.data.ef[e].ty;
            registeredEffects$1[l] && (r = new(0, registeredEffects$1[l].effect)(s, t.effectsManager.effectElements[e], t, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, r) {
          registeredEffects$1[t] = {
            effect: e,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, r = this.filters.length,
            n = [];
          for (e = 0; e < r; e += 1) this.filters[e].type === t && n.push(this.filters[e]);
          return n
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                n = createNS("path");
              n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var i = createElementID();
              if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
          },
          getMatte: function(t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              var e, r, n, i, a = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var s = createNS("mask");
                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== t || (s.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), e = createElementID(), r = filtersFactory.createFilter(e);
                var u = createNS("feComponentTransfer");
                u.setAttribute("in", "SourceGraphic"), r.appendChild(u);
                var h = createNS("feFuncA");
                h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), u.appendChild(h), this.globalData.defs.appendChild(r);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(c), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(c), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = a
            }
            return this.matteMasks[t]
          },
          setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(t) {
            this.hierarchy = t
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
            }
          },
          searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, n = e.length; r < n;) {
              if (e[r].elem === t) return e[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var r = this.processedElements, n = r.length; n;)
              if (r[n -= 1].elem === t) return void(r[n].pos = e);
            r.push(new ProcessedElement(t, e))
          },
          prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(t, e, r) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
          for (var n = 0, i = t.length; n < i;) {
            if (t[n].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            n += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, r, n) {
          var i;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
          var a, s = e.length || 0;
          for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(t, e[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
            n: e[i].n,
            p: a
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(t, e, r) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
          this.transform = {
            mProps: t,
            op: e,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var r = 0, n = this.o.length / 2; r < n;) {
            if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
              t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, r, n, i = 4 * this.data.p;
            for (e = 0; e < i; e += 1) r = e % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[e] * r), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
            if (this.o.length)
              for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) r = e % 2 == 0 ? 100 : 1, n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== n && (this.o[e - 4 * this.data.p] = n, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var r = createElementID(),
            n = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
          var i, a, s, o = [];
          for (s = 4 * e.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, n, i, a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var u = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            u.setAttribute("id", o), u.setAttribute("spreadMethod", "pad"), u.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var h = this.stops;
            for (n = 4 * t.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), u.appendChild(r), h.push(r);
            s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), this.of = u, this.ms = a, this.ost = h, this.maskId = l, e.msElem = s
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, r, n) {
            if (0 === e) return "";
            var i, a = t.o,
              s = t.i,
              o = t.v,
              l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
            for (i = 1; i < e; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
            return r && e && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function r(t, e, r) {
              (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function n() {}

            function i(r, n, i) {
              var a, s, o, l, u, h, c, p, f, d, m = n.styles.length,
                v = n.lvl;
              for (h = 0; h < m; h += 1) {
                if (l = n.sh._mdf || i, n.styles[h].lvl < v) {
                  for (p = e.reset(), f = v - n.styles[h].lvl, d = n.transformers.length - 1; !l && f > 0;) l = n.transformers[d].mProps._mdf || l, f -= 1, d -= 1;
                  if (l)
                    for (f = v - n.styles[h].lvl, d = n.transformers.length - 1; f > 0;) p.multiply(n.transformers[d].mProps.v), f -= 1, d -= 1
                } else p = t;
                if (s = (c = n.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(u = c.shapes[a]) && u._length && (o += buildShapeString(u, u._length, u.c, p));
                  n.caches[h] = o
                } else o = n.caches[h];
                n.styles[h].d += !0 === r.hd ? "" : o, n.styles[h]._mdf = l || n.styles[h]._mdf
              }
            }

            function a(t, e, r) {
              var n = e.style;
              (e.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function s(t, e, r) {
              o(t, e, r), l(0, e, r)
            }

            function o(t, e, r) {
              var n, i, a, s, o, l = e.gf,
                u = e.g._hasOpacity,
                h = e.s.v,
                c = e.e.v;
              if (e.o._mdf || r) {
                var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(p, e.o.v)
              }
              if (e.s._mdf || r) {
                var f = 1 === t.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                l.setAttribute(f, h[0]), l.setAttribute(d, h[1]), u && !e.g._collapsable && (e.of.setAttribute(f, h[0]), e.of.setAttribute(d, h[1]))
              }
              if (e.g._cmdf || r) {
                n = e.cst;
                var m = e.g.c;
                for (a = n.length, i = 0; i < a; i += 1)(s = n[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
              }
              if (u && (e.g._omdf || r)) {
                var v = e.g.o;
                for (a = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1) s = n[i], e.g._collapsable || s.setAttribute("offset", v[2 * i] + "%"), s.setAttribute("stop-opacity", v[2 * i + 1])
              }
              if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), u && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2)), l.setAttribute("r", o), u && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2)));
                var g = Math.atan2(c[1] - h[1], c[0] - h[0]),
                  y = e.h.v;
                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                var b = o * y,
                  S = Math.cos(g + e.a.v) * b + h[0],
                  x = Math.sin(g + e.a.v) * b + h[1];
                l.setAttribute("fx", S), l.setAttribute("fy", x), u && !e.g._collapsable && (e.of.setAttribute("fx", S), e.of.setAttribute("fy", x))
              }
            }

            function l(t, e, r) {
              var n = e.style,
                i = e.d;
              i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), e.c && (e.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return s;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return i;
                  case "tr":
                    return r;
                  case "no":
                    return n;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        function LetterProps(t, e, r, n, i, a) {
          this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!r,
            fc: !!n,
            m: !0,
            p: !0
          }
        }

        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, r, n, i = this.shapes.length,
            a = this.stylesList.length,
            s = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (n = this.stylesList[r], o = !1, s.length = 0, t = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (s.push(e), o = e._isAnimated || o);
            s.length > 1 && o && this.setShapesAsAnimated(s)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var r, n = new SVGStyleData(t, e),
            i = n.pElem;
          return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, n) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, n) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, n)), "st" !== t.ty && "gs" !== t.ty || (i.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === t.lj && i.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && i.setAttribute("fill-rule", "evenodd"), t.ln && i.setAttribute("id", t.ln), t.cl && i.setAttribute("class", t.cl), t.bm && (i.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(n), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            n = new SVGTransformData(r, r.o, e);
          return this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
          var n = 4;
          "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7);
          var i = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this));
          return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var r = 0, n = this.animatedContents.length; r < n;) {
            if (this.animatedContents[r].element === e) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, r = t.styles,
            n = this.stylesList.length;
          for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, n, i, a, s) {
          var o, l, u, h, c, p, f = [].concat(a),
            d = t.length - 1,
            m = [],
            v = [];
          for (o = d; o >= 0; o -= 1) {
            if ((p = this.searchProcessedElement(t[o])) ? e[o] = r[p - 1] : t[o]._render = s, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], i), t[o]._render && e[o].style.pElem.parentNode !== n && n.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (p)
                for (u = e[o].it.length, l = 0; l < u; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, i + 1, f, s), t[o]._render && e[o].gr.parentNode !== n && n.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], n)), h = e[o].transform, f.push(h)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], f, i)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (p ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), v.push(c)) : "rp" === t[o].ty && (p ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), s = !1), v.push(c));
            this.addProcessedElement(t[o], o + 1)
          }
          for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
          for (d = v.length, o = 0; o < d; o += 1) v[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, r = this.animatedContents.length;
          for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, r, n, i, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var s = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var n;
              this.lock = !0, this._mdf = !1;
              var i = this.effectsSequence.length,
                a = t || this.data.d.k[this.keysIndex].s;
              for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
              e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length; r <= n - 1 && !(r === n - 1 || t[r + 1].t > e);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, r, n = [], i = 0, a = t.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, e = t.charCodeAt(i), l = t.charAt(i), FontManager.isCombinedCharacter(e) ? s = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, i) ? l = t.substr(i, 14) : (r = t.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(e, r) ? (l = t.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(t.substr(i, 4)) ? t.substr(i, 4) : t.substr(i, 2)) : e > 56319 ? (r = t.charCodeAt(i + 1), FontManager.isVariationSelector(e) && (s = !0)) : FontManager.isZeroWidthJoiner(e) && (s = !0, o = !0), s ? (n[n.length - 1] += l, s = !1) : n.push(l), i += l.length;
          return n
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
            u = this.data,
            h = [],
            c = 0,
            p = u.m.g,
            f = 0,
            d = 0,
            m = 0,
            v = [],
            g = 0,
            y = 0,
            b = l.getFontByName(t.f),
            S = 0,
            x = getFontProperties(b);
          t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var E, _ = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var w, P, T = !0, C = t.sz[0], A = t.sz[1]; T;) {
              w = 0, g = 0, r = (P = this.buildFinalText(t.t)).length, _ = t.tr / 1e3 * t.finalSize;
              var M = -1;
              for (e = 0; e < r; e += 1) E = P[e].charCodeAt(0), n = !1, " " === P[e] ? M = e : 13 !== E && 3 !== E || (g = 0, n = !0, w += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(P[e], b.fStyle, b.fFamily), S = n ? 0 : o.w * t.finalSize / 100) : S = l.measureText(P[e], t.f, t.finalSize), g + S > C && " " !== P[e] ? (-1 === M ? r += 1 : e = M, w += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, M === e ? 1 : 0, "\r"), M = -1, g = 0) : (g += S, g += _);
              w += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < w ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, r = t.finalText.length, T = !1)
            }
          g = -_, S = 0;
          var k, I = 0;
          for (e = 0; e < r; e += 1)
            if (n = !1, 13 === (E = (k = t.finalText[e]).charCodeAt(0)) || 3 === E ? (I = 0, v.push(g), y = g > y ? g : y, g = -2 * _, i = "", n = !0, m += 1) : i = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(t.f).fFamily), S = n ? 0 : o.w * t.finalSize / 100) : S = l.measureText(i, t.f, t.finalSize), " " === k ? I += S + _ : (g += S + _ + I, I = 0), h.push({
                l: S,
                an: S,
                add: f,
                n,
                anIndexes: [],
                val: i,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == p) {
              if (f += S, "" === i || " " === i || e === r - 1) {
                for ("" !== i && " " !== i || (f -= S); d <= e;) h[d].an = f, h[d].ind = c, h[d].extra = S, d += 1;
                c += 1, f = 0
              }
            } else if (3 == p) {
            if (f += S, "" === i || e === r - 1) {
              for ("" === i && (f -= S); d <= e;) h[d].an = f, h[d].ind = c, h[d].extra = S, d += 1;
              f = 0, c += 1
            }
          } else h[c].ind = c, h[c].extra = 0, c += 1;
          if (t.l = h, y = g > y ? g : y, v.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = y, t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0
          }
          t.lineWidths = v;
          var D, F, O, R, L = u.a;
          s = L.length;
          var B = [];
          for (a = 0; a < s; a += 1) {
            for ((D = L[a]).a.sc && (t.strokeColorAnim = !0), D.a.sw && (t.strokeWidthAnim = !0), (D.a.fc || D.a.fh || D.a.fs || D.a.fb) && (t.fillColorAnim = !0), R = 0, O = D.s.b, e = 0; e < r; e += 1)(F = h[e]).anIndexes[a] = R, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || e == r - 1) || 4 == O && (F.n || e == r - 1)) && (1 === D.s.rn && B.push(R), R += 1);
            u.a[a].s.totalChars = R;
            var V, z = -1;
            if (1 === D.s.rn)
              for (e = 0; e < r; e += 1) z != (F = h[e]).anIndexes[a] && (z = F.anIndexes[a], V = B.splice(Math.floor(Math.random() * B.length), 1)[0]), F.anIndexes[a] = V
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var r = this.copyData({}, this.data.d.k[e].s);
          r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;

          function n(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return n.prototype = {
            getMult: function(n) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var i = 0,
                a = 0,
                s = 1,
                o = 1;
              this.ne.v > 0 ? i = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(i, a, s, o).get,
                u = 0,
                h = this.finalS,
                c = this.finalE,
                p = this.data.sh;
              if (2 === p) u = l(u = c === h ? n >= c ? 1 : 0 : t(0, e(.5 / (c - h) + (n - h) / (c - h), 1)));
              else if (3 === p) u = l(u = c === h ? n >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - h) + (n - h) / (c - h), 1)));
              else if (4 === p) c === h ? u = 0 : (u = t(0, e(.5 / (c - h) + (n - h) / (c - h), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = l(u);
              else if (5 === p) {
                if (c === h) u = 0;
                else {
                  var f = c - h,
                    d = -f / 2 + (n = e(t(0, n + .5 - h), c - h)),
                    m = f / 2;
                  u = Math.sqrt(1 - d * d / (m * m))
                }
                u = l(u)
              } else 6 === p ? (c === h ? u = 0 : (n = e(t(0, n + .5 - h), c - h), u = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (c - h))) / 2), u = l(u)) : (n >= r(h) && (u = t(0, e(n - h < 0 ? e(c, 1) - (h - n) : c - n, 1))), u = l(u));
              if (100 !== this.sm.v) {
                var v = .01 * this.sm.v;
                0 === v && (v = 1e-8);
                var g = .5 - .5 * v;
                u < g ? u = 0 : (u = (u - g) / v) > 1 && (u = 1)
              }
              return u * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / e,
                n = this.s.v / e + r,
                i = this.e.v / e + r;
              if (n > i) {
                var a = n;
                n = i, i = a
              }
              this.finalS = n, this.finalE = i
            }
          }, extendPrototype([DynamicPropertyContainer], n), {
            getTextSelectorProp: function(t, e, r) {
              return new n(t, e, r)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, r) {
          var n = {
              propType: !1
            },
            i = PropertyFactory.getProp,
            a = e.a;
          this.a = {
            r: a.r ? i(t, a.r, 0, degToRads, r) : n,
            rx: a.rx ? i(t, a.rx, 0, degToRads, r) : n,
            ry: a.ry ? i(t, a.ry, 0, degToRads, r) : n,
            sk: a.sk ? i(t, a.sk, 0, degToRads, r) : n,
            sa: a.sa ? i(t, a.sa, 0, degToRads, r) : n,
            s: a.s ? i(t, a.s, 1, .01, r) : n,
            a: a.a ? i(t, a.a, 1, 0, r) : n,
            o: a.o ? i(t, a.o, 0, .01, r) : n,
            p: a.p ? i(t, a.p, 1, 0, r) : n,
            sw: a.sw ? i(t, a.sw, 0, 0, r) : n,
            sc: a.sc ? i(t, a.sc, 1, 0, r) : n,
            fc: a.fc ? i(t, a.fc, 1, 0, r) : n,
            fh: a.fh ? i(t, a.fh, 0, 0, r) : n,
            fs: a.fs ? i(t, a.fs, 0, .01, r) : n,
            fb: a.fb ? i(t, a.fb, 0, .01, r) : n,
            t: a.t ? i(t, a.t, 0, 0, r) : n
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, r = this._textData.a.length,
            n = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: n(this._elem, this._textData.p.a, 0, 0, this),
            f: n(this._elem, this._textData.p.f, 0, 0, this),
            l: n(this._elem, this._textData.p.l, 0, 0, this),
            r: n(this._elem, this._textData.p.r, 0, 0, this),
            p: n(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, n, i, a, s, o, l, u, h, c, p, f, d, m, v, g, y, b, S, x = this._moreOptions.alignment.v,
              E = this._animatorsData,
              _ = this._textData,
              w = this.mHelper,
              P = this._renderType,
              T = this.renderedLetters.length,
              C = t.l;
            if (this._hasMaskedPath) {
              if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var A, M = S.v;
                for (this._pathData.r.v && (M = M.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = M._length - 1, g = 0, i = 0; i < a; i += 1) A = bez.buildBezierData(M.v[i], M.v[i + 1], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[i + 1][0] - M.v[i + 1][0], M.i[i + 1][1] - M.v[i + 1][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength;
                i = a, S.v.c && (A = bez.buildBezierData(M.v[i], M.v[0], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, u = 0, h = !0, m = s.segments, o < 0 && S.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
              f = (d = m[p].points)[c - 1], v = (l = d[c]).partialLength
            }
            a = C.length, r = 0, n = 0;
            var k, I, D, F, O, R = 1.2 * t.finalSize * .714,
              L = !0;
            D = E.length;
            var B, V, z, N, j, G, H, W, q, $, U, Y, X = -1,
              K = o,
              Z = p,
              J = c,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var rt = 0,
                nt = 0,
                it = 2 === t.j ? -.5 : -1,
                at = 0,
                st = !0;
              for (i = 0; i < a; i += 1)
                if (C[i].n) {
                  for (rt && (rt += nt); at < i;) C[at].animatorJustifyOffset = rt, at += 1;
                  rt = 0, st = !0
                } else {
                  for (I = 0; I < D; I += 1)(k = E[I].a).t.propType && (st && 2 === t.j && (nt += k.t.v * it), (O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars)).length ? rt += k.t.v * O[0] * it : rt += k.t.v * O * it);
                  st = !1
                } for (rt && (rt += nt); at < i;) C[at].animatorJustifyOffset = rt, at += 1
            }
            for (i = 0; i < a; i += 1) {
              if (w.reset(), N = 1, C[i].n) r = 0, n += t.yOffset, n += L ? 1 : 0, o = K, L = !1, this._hasMaskedPath && (c = J, f = (d = m[p = Z].points)[c - 1], v = (l = d[c]).partialLength, u = 0), tt = "", U = "", q = "", Y = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== C[i].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[C[i].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[C[i].line]) / 2
                    }
                    Q = C[i].line
                  }
                  X !== C[i].ind && (C[X] && (o += C[X].extra), o += C[i].an / 2, X = C[i].ind), o += x[0] * C[i].an * .005;
                  var ot = 0;
                  for (I = 0; I < D; I += 1)(k = E[I].a).p.propType && ((O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars)).length ? ot += k.p.v[0] * O[0] : ot += k.p.v[0] * O), k.a.propType && ((O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars)).length ? ot += k.a.v[0] * O[0] : ot += k.a.v[0] * O);
                  for (h = !0, this._pathData.a.v && (o = .5 * C[0].an + (g - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * X / (a - 1), o += this._pathData.f.v); h;) u + v >= o + ot || !d ? (y = (o + ot - u) / l.partialLength, V = f.point[0] + (l.point[0] - f.point[0]) * y, z = f.point[1] + (l.point[1] - f.point[1]) * y, w.translate(-x[0] * C[i].an * .005, -x[1] * R * .01), h = !1) : d && (u += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : S.v.c ? (c = 0, d = m[p = 0].points) : (u -= l.partialLength, d = null)), d && (f = l, v = (l = d[c]).partialLength));
                  B = C[i].an / 2 - C[i].add, w.translate(-B, 0, 0)
                } else B = C[i].an / 2 - C[i].add, w.translate(-B, 0, 0), w.translate(-x[0] * C[i].an * .005, -x[1] * R * .01, 0);
                for (I = 0; I < D; I += 1)(k = E[I].a).t.propType && (O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? r += k.t.v * O[0] : r += k.t.v * O));
                for (t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; I < D; I += 1)(k = E[I].a).a.propType && ((O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars)).length ? w.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : w.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                for (I = 0; I < D; I += 1)(k = E[I].a).s.propType && ((O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars)).length ? w.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : w.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                for (I = 0; I < D; I += 1) {
                  if (k = E[I].a, O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars), k.sk.propType && (O.length ? w.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : w.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? w.rotateZ(-k.r.v * O[2]) : w.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? w.rotateY(k.ry.v * O[1]) : w.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? w.rotateX(k.rx.v * O[0]) : w.rotateX(k.rx.v * O)), k.o.propType && (O.length ? N += (k.o.v * O[0] - N) * O[0] : N += (k.o.v * O - N) * O), t.strokeWidthAnim && k.sw.propType && (O.length ? G += k.sw.v * O[0] : G += k.sw.v * O), t.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) O.length ? j[W] += (k.sc.v[W] - j[W]) * O[0] : j[W] += (k.sc.v[W] - j[W]) * O;
                  if (t.fillColorAnim && t.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) O.length ? H[W] += (k.fc.v[W] - H[W]) * O[0] : H[W] += (k.fc.v[W] - H[W]) * O;
                    k.fh.propType && (H = O.length ? addHueToRGB(H, k.fh.v * O[0]) : addHueToRGB(H, k.fh.v * O)), k.fs.propType && (H = O.length ? addSaturationToRGB(H, k.fs.v * O[0]) : addSaturationToRGB(H, k.fs.v * O)), k.fb.propType && (H = O.length ? addBrightnessToRGB(H, k.fb.v * O[0]) : addBrightnessToRGB(H, k.fb.v * O))
                  }
                }
                for (I = 0; I < D; I += 1)(k = E[I].a).p.propType && (O = E[I].s.getMult(C[i].anIndexes[I], _.a[I].s.totalChars), this._hasMaskedPath ? O.length ? w.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : w.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? w.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : w.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                if (t.strokeWidthAnim && (q = G < 0 ? 0 : G), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (w.translate(0, -t.ls), w.translate(0, x[1] * R * .01 + n, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180), w.rotate(-lt * Math.PI / 180)
                  }
                  w.translate(V, z, 0), o -= x[0] * C[i].an * .005, C[i + 1] && X !== C[i + 1].ind && (o += C[i].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (w.translate(r, n, 0), t.ps && w.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      w.translate(C[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[i].line]), 0, 0);
                      break;
                    case 2:
                      w.translate(C[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[i].line]) / 2, 0, 0)
                  }
                  w.translate(0, -t.ls), w.translate(B, 0, 0), w.translate(x[0] * C[i].an * .005, x[1] * R * .01, 0), r += C[i].l + .001 * t.tr * t.finalSize
                }
                "html" === P ? tt = w.toCSS() : "svg" === P ? tt = w.to2dCSS() : et = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], Y = N
              }
              T <= i ? (F = new LetterProps(Y, q, $, U, tt, et), this.renderedLetters.push(F), T += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[i], this.lettersChangedFlag = F.update(Y, q, $, U, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var r, n, i = e.length,
            a = "";
          for (r = 0; r < i; r += 1) "sh" === e[r].ty && (n = e[r].ks.k, a += buildShapeString(n, n.i.length, !0, t));
          return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, n, i) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
          }
          e.translate(n, i, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        function ISolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function NullElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (e && e.title) {
            var n = createNS("title"),
              i = createElementID();
            n.setAttribute("id", i), n.textContent = e.title, this.svgElement.appendChild(n), r += i
          }
          if (e && e.description) {
            var a = createNS("desc"),
              s = createElementID();
            a.setAttribute("id", s), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + s
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "100%",
              height: e && e.filterSize && e.filterSize.height || "100%",
              x: e && e.filterSize && e.filterSize.x || "0%",
              y: e && e.filterSize && e.filterSize.y || "0%"
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, r = t.length, n = [], i = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (n.push(i), i = "") : i += t[e], e += 1;
          return n.push(i), n
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var r = t.shapes[0];
            if (r.it) {
              var n = r.it[r.it.length - 1];
              n.s && (n.s.k[0] = e, n.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var n = this.globalData.fontManager.getFontByName(r.f);
          if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
          else {
            this.layerElement.setAttribute("font-family", n.fFamily);
            var i = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var s, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var u = this.mHelper,
            h = this.data.singleShape,
            c = 0,
            p = 0,
            f = !0,
            d = .001 * r.tr * r.finalSize;
          if (!h || l || r.sz) {
            var m, v = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !h || 0 === t) {
                if (s = v > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), v <= t) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = s, l) {
                    var g = createNS("g");
                    s.appendChild(g), this.textSpans[t].childSpan = g
                  }
                  this.textSpans[t].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (u.reset(), h && (o[t].n && (c = -d, p += r.yOffset, p += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(r, u, o[t].line, c, p), c += o[t].l || 0, c += d), l) {
                var y;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var S = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(S.layerElement), S.destroy()
                }
                this.textSpans[t].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[t].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else h && s.setAttribute("transform", "translate(" + u.props[12] + "," + u.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            h && s && s.setAttribute("d", "")
          } else {
            var x = this.textContainer,
              E = "start";
            switch (r.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", d);
            var _ = this.buildTextContents(r.finalText);
            for (e = _.length, p = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t].span || createNS("tspan")).textContent = _[t], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", x.appendChild(s), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = s, p += r.finalLineHeight;
            this.layerElement.appendChild(x)
          }
          for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var r, n, i, a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            for (e = s.length, t = 0; t < e; t += 1) s[t].n || (r = a[t], n = this.textSpans[t].span, (i = this.textSpans[t].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var r = createNS("clipPath"),
            n = createNS("rect");
          n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
          var i = createElementID();
          r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            r = this.layers.length;
          for (e = 0; e < r; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
              var n = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === n) return;
              if (this.elements[n] && !0 !== this.elements[n]) {
                var i = e[n].getMatte(this.layers[t].tt);
                r.setMatte(i)
              } else this.buildItem(n), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, r = this.elements.length; e < r;) {
                if (this.elements[e] === t) {
                  var n = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    i = this.elements[n].getMatte(this.layers[e].tt);
                  t.setMatte(i);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            for (var n, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
            n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var r, n = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(t) {
            var e, r = t.length,
              n = "_";
            for (e = 0; e < r; e += 1) n += t[e].transform.key + "_";
            var i = this.sequences[n];
            return i || (i = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[n] = i, this.sequenceList.push(i)), i
          },
          processSequence: function(t, e) {
            for (var r = 0, n = t.transforms.length, i = e; r < n && !e;) {
              if (t.transforms[r].transform.mProps._mdf) {
                i = !0;
                break
              }
              r += 1
            }
            if (i)
              for (t.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) t.finalTransform.multiply(t.transforms[r].transform.mProps.v);
            t._mdf = i
          },
          processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            r = null,
            n = null;

          function i() {
            var i, a, s;
            e || (i = createNS("svg"), a = createNS("filter"), s = createNS("feColorMatrix"), a.setAttribute("id", t), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(s), i.appendChild(a), i.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (i.style.display = "none"), n = i, document.body.appendChild(n), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: i,
            get: function(n) {
              return e || i(), e.width = n.width, e.height = n.height, r.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var r = createTag("canvas");
          return r.width = t, r.height = e, r
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(t) {
          var e, r, n = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < n; e += 1) {
            r = null;
            var i = t.data.ef[e].ty;
            registeredEffects[i] && (r = new(0, registeredEffects[i].effect)(t.effectsManager.effectElements[e], t)), r && this.filters.push(r)
          }
          this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
          registeredEffects[t] = {
            effect: e
          }
        }

        function CVMaskElement(t, e) {
          var r;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var n = this.masksProperties.length,
            i = !1;
          for (r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = i, i && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function(t) {
          var e, r = this.filters.length,
            n = [];
          for (e = 0; e < r; e += 1) this.filters[e].type === t && n.push(this.filters[e]);
          return n
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, r, n, i = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              s = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < s; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[t].v, e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(e[0], e[1]);
                var l = n._length;
                for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
              } this.element.globalData.renderer.save(!0), a.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(t, e, r, n) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var i, a = 4;
          "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
          var s, o = r.length;
          for (i = 0; i < o; i += 1) r[i].closed || (s = {
            transforms: n.addTransformSequence(r[i].transforms),
            trNodes: []
          }, this.styledShapes.push(s), r[i].elements.push(s))
        }

        function CVShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        function CVTextElement(t, e, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, r)
        }

        function CVImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }

        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var t;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
            var e = new CanvasContext;
            this.stack[t] = e
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(t, e, r) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || "",
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function HShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var n = PropertyFactory.getProp;
          if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var i, a = t.ks.or.k.length;
            for (i = 0; i < a; i += 1) t.ks.or.k[i].to = null, t.ks.or.k[i].ti = null
          }
          this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var t = this.globalData.canvasContext,
                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(e);
              var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[0].getContext("2d");
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[1],
                e = t.getContext("2d");
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(t) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var e = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
          var r = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            n = {};
          if ("fl" === t.ty || "st" === t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), n.w.k || (r.wi = n.w.v), t.d) {
              var i = new DashProperty(this, t.d, "canvas", this);
              n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
            }
          } else r.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), n.style = r, n
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
          var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
          var e, r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, n, i) {
          var a, s, o, l, u, h, c = t.length - 1,
            p = [],
            f = [],
            d = [].concat(i);
          for (a = c; a >= 0; a -= 1) {
            if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = n, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), p.push(e[a].style);
            else if ("gr" === t[a].ty) {
              if (l)
                for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
              else e[a] = this.createGroupElement(t[a]);
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, n, d)
            } else "tr" === t[a].ty ? (l || (h = this.createTransformElement(t[a]), e[a] = h), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (l ? (u = e[a]).closed = !1 : ((u = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = u, this.shapeModifiers.push(u)), f.push(u)) : "rp" === t[a].ty && (l ? (u = e[a]).closed = !0 : (u = ShapeModifiers.getModifier(t[a].ty), e[a] = u, u.init(this, t, a, e), this.shapeModifiers.push(u), n = !1), f.push(u));
            this.addProcessedElement(t[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(p), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, r, n, i, a, s, o, l, u = this.stylesList.length,
            h = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < u; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (h.save(), a = l.elements, "st" === o || "gs" === o ? (h.ctxStrokeStyle("st" === o ? l.co : l.grd), h.ctxLineWidth(l.wi), h.ctxLineCap(l.lc), h.ctxLineJoin(l.lj), h.ctxMiterLimit(l.ml || 0)) : h.ctxFillStyle("fl" === o ? l.co : l.grd), h.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), h.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[e].trNodes).length, n = 0; n < i; n += 1) "m" === s[n].t ? c.moveTo(s[n].p[0], s[n].p[1]) : "c" === s[n].t ? c.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (h.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), h.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, n) {
          var i, a;
          for (a = t, i = e.length - 1; i >= 0; i -= 1) "tr" === e[i].ty ? (a = r[i].transform, this.renderShapeTransform(t, a)) : "sh" === e[i].ty || "el" === e[i].ty || "rc" === e[i].ty || "sr" === e[i].ty ? this.renderPath(e[i], r[i]) : "fl" === e[i].ty ? this.renderFill(e[i], r[i], a) : "st" === e[i].ty ? this.renderStroke(e[i], r[i], a) : "gf" === e[i].ty || "gs" === e[i].ty ? this.renderGradientFill(e[i], r[i], a) : "gr" === e[i].ty ? this.renderShape(a, e[i].it, r[i].it) : e[i].ty;
          n && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, n, i, a = t.trNodes,
              s = e.paths,
              o = s._length;
            a.length = 0;
            var l = t.transforms.finalTransform;
            for (i = 0; i < o; i += 1) {
              var u = s.shapes[i];
              if (u && u.v) {
                for (n = u._length, r = 1; r < n; r += 1) 1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(u.o[r - 1], u.i[r], u.v[r])
                });
                1 === n && a.push({
                  t: "m",
                  p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                }), u.c && n && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(u.o[r - 1], u.i[0], u.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var r, n = e.styledShapes.length;
            for (r = 0; r < n; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
          var n = e.style;
          (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
          var n, i = e.style;
          if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var a, s = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var u = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                h = Math.atan2(l[1] - o[1], l[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var p = u * c,
                f = Math.cos(h + e.a.v) * p + o[0],
                d = Math.sin(h + e.a.v) * p + o[1];
              n = s.createRadialGradient(f, d, 0, o[0], o[1], u)
            }
            var m = t.g.p,
              v = e.g.c,
              g = 1;
            for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), n.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + g + ")");
            i.grd = n
          }
          i.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
          var n = e.style,
            i = e.d;
          i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var r = !1;
          t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var n, i, a, s, o, l, u, h, c, p, f, d, m = this.globalData.fontManager.getFontByName(t.f),
            v = t.l,
            g = this.mHelper;
          this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length;
          var y = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            S = 0,
            x = 0,
            E = !0,
            _ = 0;
          for (n = 0; n < i; n += 1) {
            s = (a = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), y && v[n].n && (S = -b, x += t.yOffset, x += E ? 1 : 0, E = !1), c = (u = s.shapes ? s.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, g, v[n].line, S, x), f = createSizedArray(c - 1);
            var w = 0;
            for (h = 0; h < c; h += 1)
              if ("sh" === u[h].ty) {
                for (l = u[h].ks.k.i.length, p = u[h].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[o][0], p.i[o][1], 0), g.applyToY(p.i[o][0], p.i[o][1], 0), g.applyToX(p.v[o][0], p.v[o][1], 0), g.applyToY(p.v[o][0], p.v[o][1], 0));
                d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), f[w] = d, w += 1
              } y && (S += v[n].l, S += b), this.textSpans[_] ? this.textSpans[_].elem = f : this.textSpans[_] = {
              elem: f
            }, _ += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, r, n, i, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          e = l.length;
          var u, h, c = null,
            p = null,
            f = null,
            d = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!l[t].n) {
              if ((s = o[t]) && (d.save(), d.ctxTransform(s.p), d.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? c !== s.fc && (d.ctxFillStyle(s.fc), c = s.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), n = (u = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (a = (h = u[r]).length, this.globalData.canvasContext.moveTo(h[0], h[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(h[i], h[i + 1], h[i + 2], h[i + 3], h[i + 4], h[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? f !== s.sw && (f = s.sw, d.ctxLineWidth(s.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), s && s.sc ? p !== s.sc && (p = s.sc, d.ctxStrokeStyle(s.sc)) : p !== this.values.stroke && (p = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), n = (u = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (a = (h = u[r]).length, this.globalData.canvasContext.moveTo(h[0], h[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(h[i], h[i + 1], h[i + 2], h[i + 3], h[i + 4], h[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxStroke()
              }
              s && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, r, n = t.getContext("2d"),
              i = this.img.width,
              a = this.img.height,
              s = i / a,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (r = a) * o : r = (e = i) / o, n.drawImage(this.img, (i - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
          1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
          this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
          this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
          this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
          this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
          this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
          this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function(t) {
          this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, n) {
          this.canvasContext.fillRect(t, e, r, n)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
          this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            e.width = "100%", e.height = "100%";
            var r = "0px 0px 0px";
            e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
          var r, n, i, a;
          if (this.reset(), t ? (r = t, n = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              u = l.substr(0, 4),
              h = l.substr(4);
            i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || a < i && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === u && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === u && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var r;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var n = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            e[t] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var t = 2 * this._length,
            e = 0;
          for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
          this._length = t
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(t) {
          this.cArrPos -= 1;
          var e, r = this.stack[this.cArrPos],
            n = r.transform,
            i = this.cTr.props;
          for (e = 0; e < 16; e += 1) i[e] = n[e];
          if (t) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (t || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, n = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) n.transform[r] = e[r];
          this.cArrPos += 1;
          var i = this.stack[this.cArrPos];
          i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
        }, CVContextData.prototype.setOpacity = function(t) {
          this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function(t) {
          this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function(t) {
          this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function(t) {
          this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function(t) {
          this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function(t) {
          this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function(t) {
          this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function(t) {
          this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function(t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
          var r = e.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function(t) {
          var e = this.stack[this.cArrPos].opacity;
          e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function(t) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function(t, e, r, n) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, n)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var t, e = this.canvasContext;
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var t;
          this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var t;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var r, n, i, a, s, o = t.sh.v,
            l = t.transformers,
            u = o._length;
          if (!(u <= 1)) {
            for (r = 0; r < u - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, e);
            o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, n, i) {
          this.getBoundsOfCurve(t, e, r, n);
          var a = this.shapeBoundingBox;
          i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, n) {
          for (var i, a, s, o, l, u, h, c = [
              [t[0], n[0]],
              [t[1], n[1]]
            ], p = 0; p < 2; ++p) a = 6 * t[p] - 12 * e[p] + 6 * r[p], i = -3 * t[p] + 9 * e[p] - 9 * r[p] + 3 * n[p], s = 3 * e[p] - 3 * t[p], a |= 0, s |= 0, 0 == (i |= 0) && 0 === a || (0 === i ? (o = -s / a) > 0 && o < 1 && c[p].push(this.calculateF(o, t, e, r, n, p)) : (l = a * a - 4 * s * i) >= 0 && ((u = (-a + bmSqrt(l)) / (2 * i)) > 0 && u < 1 && c[p].push(this.calculateF(u, t, e, r, n, p)), (h = (-a - bmSqrt(l)) / (2 * i)) > 0 && h < 1 && c[p].push(this.calculateF(h, t, e, r, n, p))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, n, i, a) {
          return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * n[a] + bmPow(t, 3) * i[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var r = 0;
          if (t.keyframes) {
            for (var n = 0; n < t.keyframes.length; n += 1) {
              var i = t.keyframes[n].s;
              i > r && (r = i)
            }
            r *= t.mult
          } else r = t.v * t.mult;
          e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var r = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var n = this.shapeCont.style,
                i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              n.transform = i, n.webkitTransform = i
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var n, i, a = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              e.fontFamily = a.fFamily;
              var s = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = s
            } var l, u, h, c = t.l;
          i = c.length;
          var p, f = this.mHelper,
            d = "",
            m = 0;
          for (n = 0; n < i; n += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? h = (u = this.textSpans[m]).children[0] : ((u = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(l), styleDiv(u)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (u = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(u = createTag("span")), styleDiv(l = createTag("span")), u.appendChild(l)), this.globalData.fontManager.chars) {
              var v, g = this.globalData.fontManager.getCharData(t.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (v = g ? g.data : null, f.reset(), v && v.shapes && v.shapes.length && (p = v.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, p), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(u), v && v.shapes) {
                  document.body.appendChild(h);
                  var y = h.getBBox();
                  h.setAttribute("width", y.width + 2), h.setAttribute("height", y.height + 2), h.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                  var b = h.style,
                    S = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = S, b.webkitTransform = S, c[n].yOffset = y.y - 1
                } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                u.appendChild(h)
              }
            } else if (l.textContent = c[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(u);
              var x = l.style,
                E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              x.transform = E, x.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = u, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var t;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
              var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, n, i, a, s, o = 0,
              l = this.textAnimator.renderedLetters,
              u = this.textProperty.currentData.l;
            for (n = u.length, r = 0; r < n; r += 1) u[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var h = this.innerElem.getBBox();
              if (this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height)), this.currentBBox.w !== h.width + 2 || this.currentBBox.h !== h.height + 2 || this.currentBBox.x !== h.x - 1 || this.currentBBox.y !== h.y - 1) {
                this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                t.transform = c, t.webkitTransform = c
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var t, e, r, n, i = this.comp.threeDElements.length;
          for (t = 0; t < i; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              r = e.perspectiveElem.style, n = e.container.style;
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, r = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var n = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var i;
              i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                s = [i[0] / a, i[1] / a, i[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                u = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(u).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var h = !this._prevMat.equals(this.mat);
            if ((h || this.pe._mdf) && this.comp.threeDElements) {
              var c, p, f;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (h) {
                    var d = this.mat.toCSS();
                    (f = c.container.style).transform = d, f.webkitTransform = d
                  }
                  this.pe._mdf && ((p = c.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            var n = this.layers[e];
            if (n.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
              for (var i, a, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
              i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
          for (var e = 0, r = this.threeDElements.length; e < r;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var r, n, i = createTag("div");
          styleDiv(i);
          var a = createTag("div");
          if (styleDiv(a), "3d" === e) {
            (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var s = "50% 50%";
            r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (n = a.style).transform = o, n.webkitTransform = o
          }
          i.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: i,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, r = this.layers.length,
            n = "";
          for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== n && (n = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== n && (n = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var r = 0, n = this.threeDElements.length; r < n;) {
            if (e <= this.threeDElements[r].endPos) {
              for (var i, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
              i ? this.threeDElements[r].container.insertBefore(t, i) : this.threeDElements[r].container.appendChild(t);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            r = this.animationItem.wrapper,
            n = e.style;
          n.width = t.w + "px", n.height = t.h + "px", this.resizerElem = e, styleDiv(e), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), n.overflow = "hidden";
          var i = createNS("svg");
          i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
          var a = createNS("defs");
          i.appendChild(a), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, r, n, i = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            s = i / a;
          this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              n = this.threeDElements.length;
            for (t = 0; t < n; t += 1) {
              var i = this.threeDElements[t].perspectiveElem.style;
              i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length,
            n = createTag("div");
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var i = this.createComp(t[e], n, this.globalData.comp, null);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var r, n = 0; n < e;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
          r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
          function e(e) {
            for (var r = 0, n = t.layers.length; r < n;) {
              if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
              r += 1
            }
            return null
          }
          return Object.defineProperty(e, "_name", {
            value: t.data.nm
          }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        };

        function _typeof$2(t) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$2(t)
        }

        function seedRandom(t, e) {
          var r, n = this,
            i = 256,
            a = "random",
            s = e.pow(i, 6),
            o = e.pow(2, 52),
            l = 2 * o,
            u = 255;

          function h(t) {
            var e, r = t.length,
              n = this,
              a = 0,
              s = n.i = n.j = 0,
              o = n.S = [];
            for (r || (t = [r++]); a < i;) o[a] = a++;
            for (a = 0; a < i; a++) o[a] = o[s = u & s + t[a % r] + (e = o[a])], o[s] = e;
            n.g = function(t) {
              for (var e, r = 0, a = n.i, s = n.j, o = n.S; t--;) e = o[a = u & a + 1], r = r * i + o[u & (o[a] = o[s = u & s + e]) + (o[s] = e)];
              return n.i = a, n.j = s, r
            }
          }

          function c(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function p(t, e) {
            var r, n = [],
              i = _typeof$2(t);
            if (e && "object" == i)
              for (r in t) try {
                n.push(p(t[r], e - 1))
              } catch (t) {}
            return n.length ? n : "string" == i ? t : t + "\0"
          }

          function f(t, e) {
            for (var r, n = t + "", i = 0; i < n.length;) e[u & i] = u & (r ^= 19 * e[u & i]) + n.charCodeAt(i++);
            return d(e)
          }

          function d(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + a] = function(u, m, v) {
            var g = [],
              y = f(p((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [u, d(t)] : null === u ? function() {
                try {
                  r;
                  var e = new Uint8Array(i);
                  return (n.crypto || n.msCrypto).getRandomValues(e), d(e)
                } catch (e) {
                  var a = n.navigator,
                    s = a && a.plugins;
                  return [+new Date, n, s, n.screen, d(t)]
                }
              }() : u, 3), g),
              b = new h(g),
              S = function() {
                for (var t = b.g(6), e = s, r = 0; t < o;) t = (t + r) * i, e *= i, r = b.g(1);
                for (; t >= l;) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e
              };
            return S.int32 = function() {
              return 0 | b.g(4)
            }, S.quick = function() {
              return b.g(4) / 4294967296
            }, S.double = S, f(d(b.S), t), (m.pass || v || function(t, r, n, i) {
              return i && (i.S && c(i, b), t.state = function() {
                return c(b, {})
              }), n ? (e[a] = t, r) : t
            })(S, y, "global" in m ? m.global : this == e, m.state)
          }, f(e.random(), t)
        }

        function initialize$2(t) {
          seedRandom([], t)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(t) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$1(t)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};

            function resetFrame() {
              _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
              return "number" === t || e instanceof Number || "boolean" === t || "string" === t
            }

            function $bm_neg(t) {
              var e = _typeof$1(t);
              if ("number" === e || t instanceof Number || "boolean" === e) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r, n = t.length,
                  i = [];
                for (r = 0; r < n; r += 1) i[r] = -t[r];
                return i
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var r = _typeof$1(t),
                n = _typeof$1(e);
              if (isNumerable(r, t) && isNumerable(n, e) || "string" === r || "string" === n) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] + e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var r = _typeof$1(t),
                n = _typeof$1(e);
              if (isNumerable(r, t) && isNumerable(n, e)) return "string" === r && (t = parseInt(t, 10)), "string" === n && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] - e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var r, n, i, a = _typeof$1(t),
                s = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] * e;
                return r
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t * e[n];
                return r
              }
              return 0
            }

            function div(t, e) {
              var r, n, i, a = _typeof$1(t),
                s = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] / e;
                return r
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t / e[n];
                return r
              }
              return 0
            }

            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(t, e, r) {
              if (e > r) {
                var n = r;
                r = e, e = n
              }
              return Math.min(Math.max(t, e), r)
            }

            function radiansToDegrees(t) {
              return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
              return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
              if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var n = Math.min(t.length, e.length),
                i = 0;
              for (r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(i)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, r, n = t[0],
                i = t[1],
                a = t[2],
                s = Math.max(n, i, a),
                o = Math.min(n, i, a),
                l = (s + o) / 2;
              if (s === o) e = 0, r = 0;
              else {
                var u = s - o;
                switch (r = l > .5 ? u / (2 - s - o) : u / (s + o), s) {
                  case n:
                    e = (i - a) / u + (i < a ? 6 : 0);
                    break;
                  case i:
                    e = (a - n) / u + 2;
                    break;
                  case a:
                    e = (n - i) / u + 4
                }
                e /= 6
              }
              return [e, r, l, t[3]]
            }

            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
              var e, r, n, i = t[0],
                a = t[1],
                s = t[2];
              if (0 === a) e = s, n = s, r = s;
              else {
                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                e = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
              }
              return [e, r, n, t[3]]
            }

            function linear(t, e, r, n, i) {
              if (void 0 !== n && void 0 !== i || (n = e, i = r, e = 0, r = 1), r < e) {
                var a = r;
                r = e, e = a
              }
              if (t <= e) return n;
              if (t >= r) return i;
              var s, o = r === e ? 0 : (t - e) / (r - e);
              if (!n.length) return n + (i - n) * o;
              var l = n.length,
                u = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) u[s] = n[s] + (i[s] - n[s]) * o;
              return u
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, n = e.length;
                t || (t = createTypedArray("float32", n));
                var i = createTypedArray("float32", n),
                  a = BMMath.random();
                for (r = 0; r < n; r += 1) i[r] = t[r] + a * (e[r] - t[r]);
                return i
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, r, n) {
              var i, a = t.length,
                s = shapePool.newElement();
              s.setPathData(!!n, a);
              var o, l, u = [0, 0];
              for (i = 0; i < a; i += 1) o = e && e[i] ? e[i] : u, l = r && r[i] ? r[i] : u, s.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], o[0] + t[i][0], o[1] + t[i][1], i, !0);
              return s
            }

            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(t, e) {
                  var r, n, i = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", i),
                    s = Math.floor(5 * time);
                  for (r = 0, n = 0; r < s;) {
                    for (n = 0; n < i; n += 1) a[n] += -e + 2 * e * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    u = createTypedArray("float32", i);
                  if (i > 1) {
                    for (n = 0; n < i; n += 1) u[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * l;
                    return u
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(t, e) {
                return loopIn(t, e, !0)
              }

              function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
              }

              function easeOut(t, e, r, n, i) {
                return applyEase(easeOutBez, t, e, r, n, i)
              }

              function easeIn(t, e, r, n, i) {
                return applyEase(easeInBez, t, e, r, n, i)
              }

              function ease(t, e, r, n, i) {
                return applyEase(easeInOutBez, t, e, r, n, i)
              }

              function applyEase(t, e, r, n, i, a) {
                void 0 === i ? (i = r, a = n) : e = (e - r) / (n - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                var s = t(e);
                if ($bm_isInstanceOfArray(i)) {
                  var o, l = i.length,
                    u = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) u[o] = (a[o] - i[o]) * s + i[o];
                  return u
                }
                return (a - i) * s + i
              }

              function nearestKey(t) {
                var e, r, n, i = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                  else {
                    for (e = 0; e < i - 1; e += 1) {
                      if (t === data.k[e].t) {
                        r = e + 1, n = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, n = data.k[e + 1].t) : (r = e + 1, n = data.k[e].t);
                        break
                      }
                    } - 1 === r && (r = e + 1, n = data.k[e].t)
                  }
                else r = 0, n = 0;
                var a = {};
                return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
              }

              function key(t) {
                var e, r, n;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (n = i.length, r = 0; r < n; r += 1) e[r] = i[r], e.value[r] = i[r];
                return e
              }

              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e
              }

              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
              }

              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
              }

              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
              }

              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(t) {
                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var t = {
              initExpressions: function(t) {
                var e = 0,
                  r = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                  e += 1
                }, t.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t, e = r.length;
                    for (t = 0; t < e; t += 1) r[t].release();
                    r.length = 0
                  }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                  -1 === r.indexOf(t) && r.push(t)
                }
              }
            };
            return t.resetFrame = ExpressionManager.resetFrame, t
          }(),
          MaskManagerInterface = function() {
            function t(t, e) {
              this._mask = t, this._data = e
            }
            return Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(e) {
                var r, n = createSizedArray(e.viewData.length),
                  i = e.viewData.length;
                for (r = 0; r < i; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                  for (r = 0; r < i;) {
                    if (e.masksProperties[r].nm === t) return n[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
              },
              e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(t, e, r) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(n) {
                if (!t.numKeys) return 0;
                var i;
                i = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s;
                var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
                return a.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? i[0] : i, a
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function n() {
              return t
            }
            return function(i) {
              return i ? "unidimensional" === i.propType ? function(e) {
                e && "pv" in e || (e = t);
                var n = 1 / e.mult,
                  i = e.pv * n,
                  a = new Number(i);
                return a.value = i, r(a, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), i = e.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, e, "unidimensional")), a
                  }
              }(i) : function(t) {
                t && "pv" in t || (t = e);
                var n = 1 / t.mult,
                  i = t.data && t.data.l || t.pv.length,
                  a = createTypedArray("float32", i),
                  s = createTypedArray("float32", i);
                return a.value = s, r(a, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < i; e += 1) s[e] = t.v[e] * n, a[e] = s[e];
                    return a
                  }
              }(i) : n
            }
          }(),
          TransformExpressionInterface = function(t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null
              }
            }
            var r, n, i, a;
            return Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz)
            }), Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r)
            }), Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx)
            }), Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry)
            }), Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s)
            }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), n = ExpressionPropertyInterface(t.py), t.pz && (i = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? a() : [r(), n(), i ? i() : 0]
              }
            }), Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or)
            }), e
          },
          LayerExpressionInterface = function() {
            function t(t) {
              var e = new Matrix;
              return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
            }

            function e(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
            }

            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t)
            }

            function n(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
            }

            function i(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t)
            }

            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
              }
              return e.inversePoint(t)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(u) {
              var h;

              function c(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return h;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null
                }
              }
              c.getMatrix = t, c.invertPoint = s, c.applyPoint = a, c.toWorld = r, c.toWorldVec = e, c.fromWorld = i, c.fromWorldVec = n, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = u.sourceRectAtTime.bind(u), c._elem = u;
              var p = getDescriptor(h = TransformExpressionInterface(u.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
                hasParent: {
                  get: function() {
                    return u.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return u.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(h, "rotation"),
                scale: getDescriptor(h, "scale"),
                position: getDescriptor(h, "position"),
                opacity: getDescriptor(h, "opacity"),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function() {
                    return h
                  }
                },
                active: {
                  get: function() {
                    return u.isInRange
                  }
                }
              }), c.startTime = u.data.st, c.index = u.data.ind, c.source = u.data.refId, c.height = 0 === u.data.ty ? u.data.h : 100, c.width = 0 === u.data.ty ? u.data.w : 100, c.inPoint = u.data.ip / u.comp.globalData.frameRate, c.outPoint = u.data.op / u.comp.globalData.frameRate, c._name = u.data.nm, c.registerMaskInterface = function(t) {
                c.mask = new MaskManagerInterface(t, u)
              }, c.registerEffectsInterface = function(t) {
                c.effect = t
              }, c
            }
          }(),
          propertyGroupFactory = function(t, e) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var r = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(r, n, i, a) {
              function s(t) {
                for (var e = r.ef, n = 0, i = e.length; n < i;) {
                  if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? u[n] : u[n]();
                  n += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, i),
                u = [],
                h = r.ef.length;
              for (o = 0; o < h; o += 1) 5 === r.ef[o].ty ? u.push(t(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : u.push(e(n.effectElements[o], r.ef[o].ty, a, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                get: function() {
                  return u[0]()
                }
              }), Object.defineProperties(s, {
                numProperties: {
                  get: function() {
                    return r.np
                  }
                },
                _name: {
                  value: r.nm
                },
                propertyGroup: {
                  value: l
                }
              }), s.enabled = 0 !== r.en, s.active = s.enabled, s
            }

            function e(t, e, r, n) {
              var i = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", n)),
                function() {
                  return 10 === e ? r.comp.compInterface(t.p.v) : i()
                }
            }
            return {
              createEffectsInterface: function(e, r) {
                if (e.effectsManager) {
                  var n, i = [],
                    a = e.data.ef,
                    s = e.effectsManager.effectElements.length;
                  for (n = 0; n < s; n += 1) i.push(t(a[n], e.effectsManager.effectElements[n], r, e));
                  var o = e.data.ef || [],
                    l = function(t) {
                      for (n = 0, s = o.length; n < s;) {
                        if (t === o[n].nm || t === o[n].mn || t === o[n].ix) return i[n];
                        n += 1
                      }
                      return null
                    };
                  return Object.defineProperty(l, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), l
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, r) {
            var n = e.sh;

            function i(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? i.path : null
            }
            var a = propertyGroupFactory(i, r);
            return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
              path: {
                get: function() {
                  return n.k && n.getValue(), n
                }
              },
              shape: {
                get: function() {
                  return n.k && n.getValue(), n
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: r
              }
            }), i
          },
          ShapeExpressionInterface = function() {
            function t(t, s, p) {
              var f, d = [],
                m = t ? t.length : 0;
              for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], s[f], p)) : "fl" === t[f].ty ? d.push(r(t[f], s[f], p)) : "st" === t[f].ty ? d.push(i(t[f], s[f], p)) : "tm" === t[f].ty ? d.push(a(t[f], s[f], p)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], s[f], p)) : "sr" === t[f].ty ? d.push(l(t[f], s[f], p)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], s[f], p)) : "rc" === t[f].ty ? d.push(u(t[f], s[f], p)) : "rd" === t[f].ty ? d.push(h(t[f], s[f], p)) : "rp" === t[f].ty ? d.push(c(t[f], s[f], p)) : "gf" === t[f].ty ? d.push(n(t[f], s[f], p)) : d.push((t[f], s[f], function() {
                return null
              })));
              return d
            }

            function e(e, r, n) {
              var i = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return i.content;
                  default:
                    return i.transform
                }
              };
              i.propertyGroup = propertyGroupFactory(i, n);
              var a = function(e, r, n) {
                  var i, a = function(t) {
                    for (var e = 0, r = i.length; e < r;) {
                      if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                      e += 1
                    }
                    return "number" == typeof t ? i[t - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, n), i = t(e.it, r.it, a.propertyGroup), a.numProperties = i.length;
                  var o = s(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
                }(e, r, i.propertyGroup),
                o = s(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
              return i.content = a, i.transform = o, Object.defineProperty(i, "_name", {
                get: function() {
                  return e.nm
                }
              }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i
            }

            function r(t, e, r) {
              function n(t) {
                return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : null
              }
              return Object.defineProperties(n, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n
            }

            function n(t, e, r) {
              function n(t) {
                return "Start Point" === t || "start point" === t ? n.startPoint : "End Point" === t || "end point" === t ? n.endPoint : "Opacity" === t || "opacity" === t ? n.opacity : null
              }
              return Object.defineProperties(n, {
                startPoint: {
                  get: ExpressionPropertyInterface(e.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(e.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n
            }

            function i(t, e, r) {
              var n, i = propertyGroupFactory(u, r),
                a = propertyGroupFactory(l, i);

              function s(r) {
                Object.defineProperty(l, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (n = 0; n < o; n += 1) s(n), e.d.dataProps[n].p.setGroupProperty(a);

              function u(t) {
                return "Color" === t || "color" === t ? u.color : "Opacity" === t || "opacity" === t ? u.opacity : "Stroke Width" === t || "stroke width" === t ? u.strokeWidth : null
              }
              return Object.defineProperties(u, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), e.w.setGroupProperty(PropertyInterface("Stroke Width", i)), u
            }

            function a(t, e, r) {
              function n(e) {
                return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : null
              }
              var i = propertyGroupFactory(n, r);
              return n.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", i)), e.e.setGroupProperty(PropertyInterface("End", i)), e.o.setGroupProperty(PropertyInterface("Offset", i)), n.propertyIndex = t.ix, n.propertyGroup = r, Object.defineProperties(n, {
                start: {
                  get: ExpressionPropertyInterface(e.s)
                },
                end: {
                  get: ExpressionPropertyInterface(e.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function s(t, e, r) {
              function n(e) {
                return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : null
              }
              var i = propertyGroupFactory(n, r);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(n, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = r, n
            }

            function o(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.s.ix === e ? n.size : null
              }
              var i = propertyGroupFactory(n, r);
              n.propertyIndex = t.ix;
              var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(n, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function l(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.r.ix === e ? n.rotation : t.pt.ix === e ? n.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? n.outerRadius : t.os.ix === e ? n.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? n.innerRoundness : null : n.innerRadius
              }
              var i = propertyGroupFactory(n, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return n.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(n, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(a.r)
                },
                points: {
                  get: ExpressionPropertyInterface(a.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(a.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(a.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(a.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(a.is)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function u(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.r.ix === e ? n.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? n.size : null
              }
              var i = propertyGroupFactory(n, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return n.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(n, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(a.r)
                },
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function h(t, e, r) {
              function n(e) {
                return t.r.ix === e || "Round Corners 1" === e ? n.radius : null
              }
              var i = propertyGroupFactory(n, r),
                a = e;
              return n.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(n, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function c(t, e, r) {
              function n(e) {
                return t.c.ix === e || "Copies" === e ? n.copies : t.o.ix === e || "Offset" === e ? n.offset : null
              }
              var i = propertyGroupFactory(n, r),
                a = e;
              return n.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(n, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }
            return function(e, r, n) {
              var i;

              function a(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? n : i[t - 1];
                for (var e = 0, r = i.length; e < r;) {
                  if (i[e]._name === t) return i[e];
                  e += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return n
              })), i = t(e, r, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a
            }
          }(),
          TextExpressionInterface = function(t) {
            var e;

            function r(t) {
              return "ADBE Text Document" === t ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var r = t.textProperty.currentData.t;
                return e && r === e.value || ((e = new String(r)).value = r || new String(r), Object.defineProperty(e, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), e
              }
            }), r
          };

        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof(t)
        }
        var FootageInterface = (dataInterfaceFactory = function(t) {
            function e(t) {
              return "Outline" === t ? e.outlineInterface() : null
            }
            return e._name = "Outline", e.outlineInterface = function(t) {
              var e = "",
                r = t.getFootageData();

              function n(t) {
                if (r[t]) return e = t, "object" === _typeof(r = r[t]) ? n : r;
                var i = t.indexOf(e);
                if (-1 !== i) {
                  var a = parseInt(t.substr(i + e.length), 10);
                  return "object" === _typeof(r = r[a]) ? n : r
                }
                return ""
              }
              return function() {
                return e = "", r = t.getFootageData(), n
              }
            }(t), e
          }, function(t) {
            function e(t) {
              return "Data" === t ? e.dataInterface : null
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(t) {
          return interfaces[t] || null
        }
        var expressionHelpers = {
          searchExpressions: function(t, e, r) {
            e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
          },
          getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t),
              r = this.getValueAtTime(t + -.01),
              n = 0;
            if (e.length) {
              var i;
              for (i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
              n = 100 * Math.sqrt(n)
            } else n = 0;
            return n
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, r, n = -.001,
              i = this.getValueAtTime(t),
              a = this.getValueAtTime(t + n);
            if (i.length)
              for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (a[r] - i[r]) / n;
            else e = (a - i) / n;
            return e
          },
          getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(t) {
            this.propertyGroup = t
          }
        };

        function addPropertyDecorator() {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var n, i, a, s, o, l = this.comp.renderedFrame,
              u = this.keyframes,
              h = u[u.length - 1].t;
            if (l <= h) return this.pv;
            if (r ? i = h - (n = e ? Math.abs(h - this.elem.comp.globalData.frameRate * e) : Math.max(0, h - this.elem.data.ip)) : ((!e || e > u.length - 1) && (e = u.length - 1), n = h - (i = u[u.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - i) / n);
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - c[a]) * d + f[a];
                  return o
                }
                return (p - c) * d + f
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((h - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * ((l - h) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - h) / .001 * (m - v)
              }
            }
            return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var n, i, a, s, o, l = this.comp.renderedFrame,
              u = this.keyframes,
              h = u[0].t;
            if (l >= h) return this.pv;
            if (r ? i = h + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - h)) : ((!e || e > u.length - 1) && (e = u.length - 1), n = (i = u[e].t) - h), "pingpong" === t) {
              if (Math.floor((h - l) / n) % 2 == 0) return this.getValueAtTime(((h - l) % n + h) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime((n - (h - l) % n + h) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((h - l) / n) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (p[a] - c[a]) * d;
                  return o
                }
                return f - (p - c) * d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((h + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * (h - l) / .001;
                  return o
                }
                return m + (m - v) * (h - l) / .001
              }
            }
            return this.getValueAtTime((n - ((h - l) % n + h)) / this.comp.globalData.frameRate, 0)
          }

          function r(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = i - t,
              s = e > 1 ? (i + t - a) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (n = this.getValueAtTime(a + o * s), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
              else r += n;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
            else r /= e;
            return r
          }

          function n(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(t);
              e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var n = this.s.getValueAtTime(t);
              e.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var i = this.sk.getValueAtTime(t),
                a = this.sa.getValueAtTime(t);
              e.skewFromAxis(-i * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(t);
              e.rotate(-s * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                l = this.ry.getValueAtTime(t),
                u = this.rx.getValueAtTime(t),
                h = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(u * this.rx.mult).rotateZ(-h[2] * this.or.mult).rotateY(h[1] * this.or.mult).rotateX(h[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                p = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var f = this.pz.getValueAtTime(t);
                e.translate(c * this.px.mult, p * this.py.mult, -f * this.pz.mult)
              } else e.translate(c * this.px.mult, p * this.py.mult, 0)
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
            }
            return e
          }

          function i() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var s = a(t, e, r);
            return s.dynamicProperties.length ? s.getValueAtTime = n.bind(s) : s.getValueAtTime = i.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function(n, i, a, o, l) {
            var u = s(n, i, a, o, l);
            u.kf ? u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u) : u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u.loopOut = t, u.loopIn = e, u.smooth = r, u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u), u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u), u.numKeys = 1 === i.a ? i.k.length : 0, u.propertyIndex = i.ix;
            var h = 0;
            return 0 !== a && (h = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), u._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: h
            }, expressionHelpers.searchExpressions(n, i, u), u.k && l.addDynamicProperty(u), u
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function u() {}
          u.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var r, n = this.v;
              void 0 !== e && (n = this.getValueAtTime(e, 0));
              var i = n._length,
                a = n[t],
                s = n.v,
                o = createSizedArray(i);
              for (r = 0; r < i; r += 1) o[r] = "i" === t || "o" === t ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
              return o
            },
            points: function(t) {
              return this.vertices("v", t)
            },
            inTangents: function(t) {
              return this.vertices("i", t)
            },
            outTangents: function(t) {
              return this.vertices("o", t)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var n, i = this._segmentsLength, a = i.lengths, s = i.totalLength * t, o = 0, l = a.length, u = 0; o < l;) {
                if (u + a[o].addedLength > s) {
                  var h = o,
                    c = r.c && o === l - 1 ? 0 : o + 1,
                    p = (s - u) / a[o].addedLength;
                  n = bez.getPointInSegment(r.v[h], r.v[c], r.o[h], r.i[c], p, a[o]);
                  break
                }
                u += a[o].addedLength, o += 1
              }
              return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
            },
            vectorOnPath: function(t, e, r) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var n = this.pointOnPath(t, e),
                i = this.pointOnPath(t + .001, e),
                a = i[0] - n[0],
                s = i[1] - n[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([u], o), extendPrototype([u], l), l.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var h = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, r, n, i) {
            var a = h(t, e, r, n, i);
            return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
              var n = {};
              return this.copyData(n, t), n.t = r.toString(), n.__complete = !1, n
            }
            return t
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(t, e) {
            var r, n, i = createNS("feMerge");
            for (i.setAttribute("result", t), n = 0; n < e.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", e[n]), i.appendChild(r), i.appendChild(r);
            return i
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, n, i) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
          var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
          t.appendChild(s)
        }

        function SVGFillFilter(t, e, r, n) {
          this.filterManager = e;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), t.appendChild(i), this.matrixFilter = i
        }

        function SVGStrokeEffect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(t, e, r, n) {
          this.filterManager = e;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(i);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, t.appendChild(a)
        }

        function SVGProLevelsFilter(t, e, r, n) {
          this.filterManager = e;
          var i = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(t, e, r, n, i) {
          var a = e.container.globalData.renderConfig.filterSize,
            s = e.data.fs || a;
          t.setAttribute("x", s.x || a.x), t.setAttribute("y", s.y || a.y), t.setAttribute("width", s.width || a.width), t.setAttribute("height", s.height || a.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
          var u = createNS("feFlood");
          u.setAttribute("flood-color", "#00ff00"), u.setAttribute("flood-opacity", "1"), u.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = u, t.appendChild(u);
          var h = createNS("feComposite");
          h.setAttribute("in", n + "_drop_shadow_3"), h.setAttribute("in2", n + "_drop_shadow_2"), h.setAttribute("operator", "in"), h.setAttribute("result", n + "_drop_shadow_4"), t.appendChild(h);
          var c = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
          t.appendChild(c)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < n; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              s = createElementID();
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var r, n, i = this.paths.length;
          for (e = 0; e < i; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], n = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = n.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var u, h = l * (o - s),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  p = Math.floor(h / c);
                for (u = 0; u < p; u += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * l + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              n.setAttribute("stroke-dasharray", a)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var f = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = this.filterManager.effectElements[2].p.v,
              i = n[0] + " " + r[0] + " " + e[0],
              a = n[1] + " " + r[1] + " " + e[1],
              s = n[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var r = createNS(t);
          return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, n, i) {
          for (var a, s, o = 0, l = Math.min(t, e), u = Math.max(t, e), h = Array.call(null, {
              length: 256
            }), c = 0, p = i - n, f = e - t; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : n : a >= u ? f < 0 ? n : i : n + p * Math.pow((a - t) / f, 1 / r), h[c] = s, c += 1, o += 256 / 255;
          return h.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                i = r * Math.cos(n),
                a = r * Math.sin(n);
              this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(t, e, r, n) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var i = createNS("feGaussianBlur");
          i.setAttribute("result", n), t.appendChild(i), this.feGaussianBlur = i
        }

        function TransformEffect() {}

        function SVGTransformEffect(t, e) {
          this.init(e)
        }

        function CVTransformEffect(t) {
          this.init(t)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var r = t.layerElement.parentNode;
          if (r) {
            for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== t.layerElement;) a += 1;
            a <= s - 2 && (n = i[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), n ? r.insertBefore(o, n) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              n = createNS("mask");
            n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var i = t.globalData.defs;
            i.appendChild(n);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), i.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + r), n.appendChild(s), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, n = e.length; r < n;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = 3 == r ? 0 : e,
              i = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              r = e[0].p.v,
              n = e[1].p.v,
              i = 1 === e[2].p.v,
              a = e[3].p.v,
              s = i ? a : e[4].p.v,
              o = e[5].p.v,
              l = e[6].p.v,
              u = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-u * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    26516: (t, e, r) => {
      "use strict";
      var n = r(71403),
        i = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(t, e, r) {
        var n, a = {},
          u = null,
          h = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (h = e.ref), e) s.call(e, n) && !l.hasOwnProperty(n) && (a[n] = e[n]);
        if (t && t.defaultProps)
          for (n in e = t.defaultProps) void 0 === a[n] && (a[n] = e[n]);
        return {
          $$typeof: i,
          type: t,
          key: u,
          ref: h,
          props: a,
          _owner: o.current
        }
      }
      e.Fragment = a, e.jsx = u, e.jsxs = u
    },
    46632: (t, e, r) => {
      "use strict";
      t.exports = r(26516)
    },
    86634: function(t, e, r) {
      class n {
        constructor() {
          this.data = r(82777), this.labelMap = {}, this.valueMap = {}, this.data.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          }))
        }
        getValue(t) {
          return this.labelMap[t.toLowerCase()]
        }
        getLabel(t) {
          return this.valueMap[t.toLowerCase()]
        }
        getLabels() {
          return this.data.map((t => t.label))
        }
        getValues() {
          return this.data.map((t => t.value))
        }
        getLabelList() {
          return this.labelMap
        }
        getValueList() {
          return this.valueMap
        }
        getData() {
          return this.data
        }
        setLabel(t, e) {
          return this.data.forEach((r => {
            r.value === t && (r.label = e, this.valueMap[r.value.toLowerCase()] = r.label)
          })), this
        }
        setEmpty(t) {
          return this.data.unshift({
            value: "",
            label: t
          }), this.valueMap[""] = t, this.labelMap[t] = "", this
        }
        native() {
          return this.nativeData = r(26283), this.nativeData.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          })), this
        }
      }
      t.exports = () => {
        if (!(this instanceof n)) return new n
      }
    },
    37266: (t, e, r) => {
      r(49074), t.exports = r(64602).Object.assign
    },
    30155: (t, e, r) => {
      r(41963);
      var n = r(64602).Object;
      t.exports = function(t, e) {
        return n.create(t, e)
      }
    },
    26940: (t, e, r) => {
      r(15644);
      var n = r(64602).Object;
      t.exports = function(t, e, r) {
        return n.defineProperty(t, e, r)
      }
    },
    28692: (t, e, r) => {
      r(51860), t.exports = r(64602).Object.getPrototypeOf
    },
    5352: (t, e, r) => {
      r(28520), t.exports = r(64602).Object.setPrototypeOf
    },
    26036: (t, e, r) => {
      r(99742), r(37710), r(16432), r(42552), t.exports = r(64602).Symbol
    },
    70176: (t, e, r) => {
      r(88491), r(61926), t.exports = r(2540).f("iterator")
    },
    19311: t => {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
      }
    },
    24604: t => {
      t.exports = function() {}
    },
    9312: (t, e, r) => {
      var n = r(39741);
      t.exports = function(t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
      }
    },
    24180: (t, e, r) => {
      var n = r(38305),
        i = r(30849),
        a = r(90225);
      t.exports = function(t) {
        return function(e, r, s) {
          var o, l = n(e),
            u = i(l.length),
            h = a(s, u);
          if (t && r != r) {
            for (; u > h;)
              if ((o = l[h++]) != o) return !0
          } else
            for (; u > h; h++)
              if ((t || h in l) && l[h] === r) return t || h || 0;
          return !t && -1
        }
      }
    },
    49333: t => {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1)
      }
    },
    64602: t => {
      var e = t.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = e)
    },
    77688: (t, e, r) => {
      var n = r(19311);
      t.exports = function(t, e, r) {
        if (n(t), void 0 === e) return t;
        switch (r) {
          case 1:
            return function(r) {
              return t.call(e, r)
            };
          case 2:
            return function(r, n) {
              return t.call(e, r, n)
            };
          case 3:
            return function(r, n, i) {
              return t.call(e, r, n, i)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    36372: t => {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
      }
    },
    47111: (t, e, r) => {
      t.exports = !r(33948)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    25494: (t, e, r) => {
      var n = r(39741),
        i = r(71650).document,
        a = n(i) && n(i.createElement);
      t.exports = function(t) {
        return a ? i.createElement(t) : {}
      }
    },
    47176: t => {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    80165: (t, e, r) => {
      var n = r(4587),
        i = r(41544),
        a = r(43861);
      t.exports = function(t) {
        var e = n(t),
          r = i.f;
        if (r)
          for (var s, o = r(t), l = a.f, u = 0; o.length > u;) l.call(t, s = o[u++]) && e.push(s);
        return e
      }
    },
    97155: (t, e, r) => {
      var n = r(71650),
        i = r(64602),
        a = r(77688),
        s = r(1577),
        o = r(40241),
        l = "prototype",
        u = function(t, e, r) {
          var h, c, p, f = t & u.F,
            d = t & u.G,
            m = t & u.S,
            v = t & u.P,
            g = t & u.B,
            y = t & u.W,
            b = d ? i : i[e] || (i[e] = {}),
            S = b[l],
            x = d ? n : m ? n[e] : (n[e] || {})[l];
          for (h in d && (r = e), r)(c = !f && x && void 0 !== x[h]) && o(b, h) || (p = c ? x[h] : r[h], b[h] = d && "function" != typeof x[h] ? r[h] : g && c ? a(p, n) : y && x[h] == p ? function(t) {
            var e = function(e, r, n) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new t;
                  case 1:
                    return new t(e);
                  case 2:
                    return new t(e, r)
                }
                return new t(e, r, n)
              }
              return t.apply(this, arguments)
            };
            return e[l] = t[l], e
          }(p) : v && "function" == typeof p ? a(Function.call, p) : p, v && ((b.virtual || (b.virtual = {}))[h] = p, t & u.R && S && !S[h] && s(S, h, p)))
        };
      u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
    },
    33948: t => {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    71650: t => {
      var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = e)
    },
    40241: t => {
      var e = {}.hasOwnProperty;
      t.exports = function(t, r) {
        return e.call(t, r)
      }
    },
    1577: (t, e, r) => {
      var n = r(63851),
        i = r(85248);
      t.exports = r(47111) ? function(t, e, r) {
        return n.f(t, e, i(1, r))
      } : function(t, e, r) {
        return t[e] = r, t
      }
    },
    46720: (t, e, r) => {
      var n = r(71650).document;
      t.exports = n && n.documentElement
    },
    99328: (t, e, r) => {
      t.exports = !r(47111) && !r(33948)((function() {
        return 7 != Object.defineProperty(r(25494)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    3437: (t, e, r) => {
      var n = r(49333);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == n(t) ? t.split("") : Object(t)
      }
    },
    89697: (t, e, r) => {
      var n = r(49333);
      t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
      }
    },
    39741: t => {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    28676: (t, e, r) => {
      "use strict";
      var n = r(10283),
        i = r(85248),
        a = r(44872),
        s = {};
      r(1577)(s, r(92226)("iterator"), (function() {
        return this
      })), t.exports = function(t, e, r) {
        t.prototype = n(s, {
          next: i(1, r)
        }), a(t, e + " Iterator")
      }
    },
    24947: (t, e, r) => {
      "use strict";
      var n = r(52442),
        i = r(97155),
        a = r(36759),
        s = r(1577),
        o = r(92318),
        l = r(28676),
        u = r(44872),
        h = r(71807),
        c = r(92226)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = "keys",
        d = "values",
        m = function() {
          return this
        };
      t.exports = function(t, e, r, v, g, y, b) {
        l(r, e, v);
        var S, x, E, _ = function(t) {
            if (!p && t in C) return C[t];
            switch (t) {
              case f:
              case d:
                return function() {
                  return new r(this, t)
                }
            }
            return function() {
              return new r(this, t)
            }
          },
          w = e + " Iterator",
          P = g == d,
          T = !1,
          C = t.prototype,
          A = C[c] || C["@@iterator"] || g && C[g],
          M = A || _(g),
          k = g ? P ? _("entries") : M : void 0,
          I = "Array" == e && C.entries || A;
        if (I && (E = h(I.call(new t))) !== Object.prototype && E.next && (u(E, w, !0), n || "function" == typeof E[c] || s(E, c, m)), P && A && A.name !== d && (T = !0, M = function() {
            return A.call(this)
          }), n && !b || !p && !T && C[c] || s(C, c, M), o[e] = M, o[w] = m, g)
          if (S = {
              values: P ? M : _(d),
              keys: y ? M : _(f),
              entries: k
            }, b)
            for (x in S) x in C || a(C, x, S[x]);
          else i(i.P + i.F * (p || T), e, S);
        return S
      }
    },
    11606: t => {
      t.exports = function(t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    },
    92318: t => {
      t.exports = {}
    },
    52442: t => {
      t.exports = !0
    },
    34096: (t, e, r) => {
      var n = r(50899)("meta"),
        i = r(39741),
        a = r(40241),
        s = r(63851).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        u = !r(33948)((function() {
          return l(Object.preventExtensions({}))
        })),
        h = function(t) {
          s(t, n, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        c = t.exports = {
          KEY: n,
          NEED: !1,
          fastKey: function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, n)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              h(t)
            }
            return t[n].i
          },
          getWeak: function(t, e) {
            if (!a(t, n)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              h(t)
            }
            return t[n].w
          },
          onFreeze: function(t) {
            return u && c.NEED && l(t) && !a(t, n) && h(t), t
          }
        }
    },
    33746: (t, e, r) => {
      "use strict";
      var n = r(47111),
        i = r(4587),
        a = r(41544),
        s = r(43861),
        o = r(37554),
        l = r(3437),
        u = Object.assign;
      t.exports = !u || r(33948)((function() {
        var t = {},
          e = {},
          r = Symbol(),
          n = "abcdefghijklmnopqrst";
        return t[r] = 7, n.split("").forEach((function(t) {
          e[t] = t
        })), 7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n
      })) ? function(t, e) {
        for (var r = o(t), u = arguments.length, h = 1, c = a.f, p = s.f; u > h;)
          for (var f, d = l(arguments[h++]), m = c ? i(d).concat(c(d)) : i(d), v = m.length, g = 0; v > g;) f = m[g++], n && !p.call(d, f) || (r[f] = d[f]);
        return r
      } : u
    },
    10283: (t, e, r) => {
      var n = r(9312),
        i = r(18750),
        a = r(47176),
        s = r(26298)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        u = function() {
          var t, e = r(25494)("iframe"),
            n = a.length;
          for (e.style.display = "none", r(46720).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u[l][a[n]];
          return u()
        };
      t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (o[l] = n(t), r = new o, o[l] = null, r[s] = t) : r = u(), void 0 === e ? r : i(r, e)
      }
    },
    63851: (t, e, r) => {
      var n = r(9312),
        i = r(99328),
        a = r(540),
        s = Object.defineProperty;
      e.f = r(47111) ? Object.defineProperty : function(t, e, r) {
        if (n(t), e = a(e, !0), n(r), i) try {
          return s(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value), t
      }
    },
    18750: (t, e, r) => {
      var n = r(63851),
        i = r(9312),
        a = r(4587);
      t.exports = r(47111) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var r, s = a(e), o = s.length, l = 0; o > l;) n.f(t, r = s[l++], e[r]);
        return t
      }
    },
    68333: (t, e, r) => {
      var n = r(43861),
        i = r(85248),
        a = r(38305),
        s = r(540),
        o = r(40241),
        l = r(99328),
        u = Object.getOwnPropertyDescriptor;
      e.f = r(47111) ? u : function(t, e) {
        if (t = a(t), e = s(e, !0), l) try {
          return u(t, e)
        } catch (t) {}
        if (o(t, e)) return i(!n.f.call(t, e), t[e])
      }
    },
    20337: (t, e, r) => {
      var n = r(38305),
        i = r(32291).f,
        a = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function(t) {
        return s && "[object Window]" == a.call(t) ? function(t) {
          try {
            return i(t)
          } catch (t) {
            return s.slice()
          }
        }(t) : i(n(t))
      }
    },
    32291: (t, e, r) => {
      var n = r(93429),
        i = r(47176).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, i)
      }
    },
    41544: (t, e) => {
      e.f = Object.getOwnPropertySymbols
    },
    71807: (t, e, r) => {
      var n = r(40241),
        i = r(37554),
        a = r(26298)("IE_PROTO"),
        s = Object.prototype;
      t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
      }
    },
    93429: (t, e, r) => {
      var n = r(40241),
        i = r(38305),
        a = r(24180)(!1),
        s = r(26298)("IE_PROTO");
      t.exports = function(t, e) {
        var r, o = i(t),
          l = 0,
          u = [];
        for (r in o) r != s && n(o, r) && u.push(r);
        for (; e.length > l;) n(o, r = e[l++]) && (~a(u, r) || u.push(r));
        return u
      }
    },
    4587: (t, e, r) => {
      var n = r(93429),
        i = r(47176);
      t.exports = Object.keys || function(t) {
        return n(t, i)
      }
    },
    43861: (t, e) => {
      e.f = {}.propertyIsEnumerable
    },
    87191: (t, e, r) => {
      var n = r(97155),
        i = r(64602),
        a = r(33948);
      t.exports = function(t, e) {
        var r = (i.Object || {})[t] || Object[t],
          s = {};
        s[t] = e(r), n(n.S + n.F * a((function() {
          r(1)
        })), "Object", s)
      }
    },
    85248: t => {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    36759: (t, e, r) => {
      t.exports = r(1577)
    },
    27382: (t, e, r) => {
      var n = r(39741),
        i = r(9312),
        a = function(t, e) {
          if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) {
          try {
            (n = r(77688)(Function.call, r(68333).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
          } catch (t) {
            e = !0
          }
          return function(t, r) {
            return a(t, r), e ? t.__proto__ = r : n(t, r), t
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    44872: (t, e, r) => {
      var n = r(63851).f,
        i = r(40241),
        a = r(92226)("toStringTag");
      t.exports = function(t, e, r) {
        t && !i(t = r ? t : t.prototype, a) && n(t, a, {
          configurable: !0,
          value: e
        })
      }
    },
    26298: (t, e, r) => {
      var n = r(19368)("keys"),
        i = r(50899);
      t.exports = function(t) {
        return n[t] || (n[t] = i(t))
      }
    },
    19368: (t, e, r) => {
      var n = r(64602),
        i = r(71650),
        a = "__core-js_shared__",
        s = i[a] || (i[a] = {});
      (t.exports = function(t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: n.version,
        mode: r(52442) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    20168: (t, e, r) => {
      var n = r(85675),
        i = r(36372);
      t.exports = function(t) {
        return function(e, r) {
          var a, s, o = String(i(e)),
            l = n(r),
            u = o.length;
          return l < 0 || l >= u ? t ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? o.charAt(l) : a : t ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    90225: (t, e, r) => {
      var n = r(85675),
        i = Math.max,
        a = Math.min;
      t.exports = function(t, e) {
        return (t = n(t)) < 0 ? i(t + e, 0) : a(t, e)
      }
    },
    85675: t => {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
      }
    },
    38305: (t, e, r) => {
      var n = r(3437),
        i = r(36372);
      t.exports = function(t) {
        return n(i(t))
      }
    },
    30849: (t, e, r) => {
      var n = r(85675),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
      }
    },
    37554: (t, e, r) => {
      var n = r(36372);
      t.exports = function(t) {
        return Object(n(t))
      }
    },
    540: (t, e, r) => {
      var n = r(39741);
      t.exports = function(t, e) {
        if (!n(t)) return t;
        var r, i;
        if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t))) return i;
        if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    50899: t => {
      var e = 0,
        r = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
      }
    },
    48580: (t, e, r) => {
      var n = r(71650),
        i = r(64602),
        a = r(52442),
        s = r(2540),
        o = r(63851).f;
      t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = a ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || o(e, t, {
          value: s.f(t)
        })
      }
    },
    2540: (t, e, r) => {
      e.f = r(92226)
    },
    92226: (t, e, r) => {
      var n = r(19368)("wks"),
        i = r(50899),
        a = r(71650).Symbol,
        s = "function" == typeof a;
      (t.exports = function(t) {
        return n[t] || (n[t] = s && a[t] || (s ? a : i)("Symbol." + t))
      }).store = n
    },
    8217: (t, e, r) => {
      "use strict";
      var n = r(24604),
        i = r(11606),
        a = r(92318),
        s = r(38305);
      t.exports = r(24947)(Array, "Array", (function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
      }), (function() {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
      }), "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
    },
    49074: (t, e, r) => {
      var n = r(97155);
      n(n.S + n.F, "Object", {
        assign: r(33746)
      })
    },
    41963: (t, e, r) => {
      var n = r(97155);
      n(n.S, "Object", {
        create: r(10283)
      })
    },
    15644: (t, e, r) => {
      var n = r(97155);
      n(n.S + n.F * !r(47111), "Object", {
        defineProperty: r(63851).f
      })
    },
    51860: (t, e, r) => {
      var n = r(37554),
        i = r(71807);
      r(87191)("getPrototypeOf", (function() {
        return function(t) {
          return i(n(t))
        }
      }))
    },
    28520: (t, e, r) => {
      var n = r(97155);
      n(n.S, "Object", {
        setPrototypeOf: r(27382).set
      })
    },
    37710: () => {},
    88491: (t, e, r) => {
      "use strict";
      var n = r(20168)(!0);
      r(24947)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
      }), (function() {
        var t, e = this._t,
          r = this._i;
        return r >= e.length ? {
          value: void 0,
          done: !0
        } : (t = n(e, r), this._i += t.length, {
          value: t,
          done: !1
        })
      }))
    },
    99742: (t, e, r) => {
      "use strict";
      var n = r(71650),
        i = r(40241),
        a = r(47111),
        s = r(97155),
        o = r(36759),
        l = r(34096).KEY,
        u = r(33948),
        h = r(19368),
        c = r(44872),
        p = r(50899),
        f = r(92226),
        d = r(2540),
        m = r(48580),
        v = r(80165),
        g = r(89697),
        y = r(9312),
        b = r(39741),
        S = r(37554),
        x = r(38305),
        E = r(540),
        _ = r(85248),
        w = r(10283),
        P = r(20337),
        T = r(68333),
        C = r(41544),
        A = r(63851),
        M = r(4587),
        k = T.f,
        I = A.f,
        D = P.f,
        F = n.Symbol,
        O = n.JSON,
        R = O && O.stringify,
        L = "prototype",
        B = f("_hidden"),
        V = f("toPrimitive"),
        z = {}.propertyIsEnumerable,
        N = h("symbol-registry"),
        j = h("symbols"),
        G = h("op-symbols"),
        H = Object[L],
        W = "function" == typeof F && !!C.f,
        q = n.QObject,
        $ = !q || !q[L] || !q[L].findChild,
        U = a && u((function() {
          return 7 != w(I({}, "a", {
            get: function() {
              return I(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(t, e, r) {
          var n = k(H, e);
          n && delete H[e], I(t, e, r), n && t !== H && I(H, e, n)
        } : I,
        Y = function(t) {
          var e = j[t] = w(F[L]);
          return e._k = t, e
        },
        X = W && "symbol" == typeof F.iterator ? function(t) {
          return "symbol" == typeof t
        } : function(t) {
          return t instanceof F
        },
        K = function(t, e, r) {
          return t === H && K(G, e, r), y(t), e = E(e, !0), y(r), i(j, e) ? (r.enumerable ? (i(t, B) && t[B][e] && (t[B][e] = !1), r = w(r, {
            enumerable: _(0, !1)
          })) : (i(t, B) || I(t, B, _(1, {})), t[B][e] = !0), U(t, e, r)) : I(t, e, r)
        },
        Z = function(t, e) {
          y(t);
          for (var r, n = v(e = x(e)), i = 0, a = n.length; a > i;) K(t, r = n[i++], e[r]);
          return t
        },
        J = function(t) {
          var e = z.call(this, t = E(t, !0));
          return !(this === H && i(j, t) && !i(G, t)) && (!(e || !i(this, t) || !i(j, t) || i(this, B) && this[B][t]) || e)
        },
        Q = function(t, e) {
          if (t = x(t), e = E(e, !0), t !== H || !i(j, e) || i(G, e)) {
            var r = k(t, e);
            return !r || !i(j, e) || i(t, B) && t[B][e] || (r.enumerable = !0), r
          }
        },
        tt = function(t) {
          for (var e, r = D(x(t)), n = [], a = 0; r.length > a;) i(j, e = r[a++]) || e == B || e == l || n.push(e);
          return n
        },
        et = function(t) {
          for (var e, r = t === H, n = D(r ? G : x(t)), a = [], s = 0; n.length > s;) !i(j, e = n[s++]) || r && !i(H, e) || a.push(j[e]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
          e = function(r) {
            this === H && e.call(G, r), i(this, B) && i(this[B], t) && (this[B][t] = !1), U(this, t, _(1, r))
          };
        return a && $ && U(H, t, {
          configurable: !0,
          set: e
        }), Y(t)
      })[L], "toString", (function() {
        return this._k
      })), T.f = Q, A.f = K, r(32291).f = P.f = tt, r(43861).f = J, C.f = et, a && !r(52442) && o(H, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return Y(f(t))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var rt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; rt.length > nt;) f(rt[nt++]);
      for (var it = M(f.store), at = 0; it.length > at;) m(it[at++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(t) {
          return i(N, t += "") ? N[t] : N[t] = F(t)
        },
        keyFor: function(t) {
          if (!X(t)) throw TypeError(t + " is not a symbol!");
          for (var e in N)
            if (N[e] === t) return e
        },
        useSetter: function() {
          $ = !0
        },
        useSimple: function() {
          $ = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(t, e) {
          return void 0 === e ? w(t) : Z(w(t), e)
        },
        defineProperty: K,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
      });
      var st = u((function() {
        C.f(1)
      }));
      s(s.S + s.F * st, "Object", {
        getOwnPropertySymbols: function(t) {
          return C.f(S(t))
        }
      }), O && s(s.S + s.F * (!W || u((function() {
        var t = F();
        return "[null]" != R([t]) || "{}" != R({
          a: t
        }) || "{}" != R(Object(t))
      }))), "JSON", {
        stringify: function(t) {
          for (var e, r, n = [t], i = 1; arguments.length > i;) n.push(arguments[i++]);
          if (r = e = n[1], (b(e) || void 0 !== t) && !X(t)) return g(e) || (e = function(t, e) {
            if ("function" == typeof r && (e = r.call(this, t, e)), !X(e)) return e
          }), n[1] = e, R.apply(O, n)
        }
      }), F[L][V] || r(1577)(F[L], V, F[L].valueOf), c(F, "Symbol"), c(Math, "Math", !0), c(n.JSON, "JSON", !0)
    },
    16432: (t, e, r) => {
      r(48580)("asyncIterator")
    },
    42552: (t, e, r) => {
      r(48580)("observable")
    },
    61926: (t, e, r) => {
      r(8217);
      for (var n = r(71650), i = r(1577), a = r(92318), s = r(92226)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var u = o[l],
          h = n[u],
          c = h && h.prototype;
        c && !c[s] && i(c, s, u), a[u] = a.Array
      }
    },
    72862: (t, e) => {
      var r;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function i() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var r = arguments[e];
            r && (t = s(t, a(r)))
          }
          return t
        }

        function a(t) {
          if ("string" == typeof t || "number" == typeof t) return t;
          if ("object" != typeof t) return "";
          if (Array.isArray(t)) return i.apply(null, t);
          if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
          var e = "";
          for (var r in t) n.call(t, r) && t[r] && (e = s(e, r));
          return e
        }

        function s(t, e) {
          return e ? t ? t + " " + e : t + e : t
        }
        t.exports ? (i.default = i, t.exports = i) : void 0 === (r = function() {
          return i
        }.apply(e, [])) || (t.exports = r)
      }()
    },
    86342: (t, e, r) => {
      "use strict";
      var n = r(50249),
        i = r(83635),
        a = TypeError;
      t.exports = function(t) {
        if (n(t)) return t;
        throw new a(i(t) + " is not a function")
      }
    },
    78694: (t, e, r) => {
      "use strict";
      var n = r(50249),
        i = String,
        a = TypeError;
      t.exports = function(t) {
        if ("object" == typeof t || n(t)) return t;
        throw new a("Can't set " + i(t) + " as a prototype")
      }
    },
    55665: (t, e, r) => {
      "use strict";
      var n = r(67671),
        i = r(53260),
        a = r(34173).f,
        s = n("unscopables"),
        o = Array.prototype;
      void 0 === o[s] && a(o, s, {
        configurable: !0,
        value: i(null)
      }), t.exports = function(t) {
        o[s][t] = !0
      }
    },
    68851: (t, e, r) => {
      "use strict";
      var n = r(24821),
        i = TypeError;
      t.exports = function(t, e) {
        if (n(e, t)) return t;
        throw new i("Incorrect invocation")
      }
    },
    12155: (t, e, r) => {
      "use strict";
      var n = r(9582),
        i = String,
        a = TypeError;
      t.exports = function(t) {
        if (n(t)) return t;
        throw new a(i(t) + " is not an object")
      }
    },
    82711: t => {
      "use strict";
      t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    },
    92342: (t, e, r) => {
      "use strict";
      var n = r(13646),
        i = r(58420),
        a = TypeError;
      t.exports = n(ArrayBuffer.prototype, "byteLength", "get") || function(t) {
        if ("ArrayBuffer" !== i(t)) throw new a("ArrayBuffer expected");
        return t.byteLength
      }
    },
    16010: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(92342),
        a = n(ArrayBuffer.prototype.slice);
      t.exports = function(t) {
        if (0 !== i(t)) return !1;
        try {
          return a(t, 0, 0), !1
        } catch (t) {
          return !0
        }
      }
    },
    36720: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(43436),
        a = r(13646),
        s = r(31364),
        o = r(16010),
        l = r(92342),
        u = r(2655),
        h = r(18632),
        c = n.structuredClone,
        p = n.ArrayBuffer,
        f = n.DataView,
        d = n.TypeError,
        m = Math.min,
        v = p.prototype,
        g = f.prototype,
        y = i(v.slice),
        b = a(v, "resizable", "get"),
        S = a(v, "maxByteLength", "get"),
        x = i(g.getInt8),
        E = i(g.setInt8);
      t.exports = (h || u) && function(t, e, r) {
        var n, i = l(t),
          a = void 0 === e ? i : s(e),
          v = !b || !b(t);
        if (o(t)) throw new d("ArrayBuffer is detached");
        if (h && (t = c(t, {
            transfer: [t]
          }), i === a && (r || v))) return t;
        if (i >= a && (!r || v)) n = y(t, 0, a);
        else {
          var g = r && !v && S ? {
            maxByteLength: S(t)
          } : void 0;
          n = new p(a, g);
          for (var _ = new f(t), w = new f(n), P = m(a, i), T = 0; T < P; T++) E(w, T, x(_, T))
        }
        return h || u(t), n
      }
    },
    73400: (t, e, r) => {
      "use strict";
      var n, i, a, s = r(82711),
        o = r(23736),
        l = r(71135),
        u = r(50249),
        h = r(9582),
        c = r(9381),
        p = r(21823),
        f = r(83635),
        d = r(15111),
        m = r(99244),
        v = r(40398),
        g = r(24821),
        y = r(72495),
        b = r(33675),
        S = r(67671),
        x = r(88092),
        E = r(58217),
        _ = E.enforce,
        w = E.get,
        P = l.Int8Array,
        T = P && P.prototype,
        C = l.Uint8ClampedArray,
        A = C && C.prototype,
        M = P && y(P),
        k = T && y(T),
        I = Object.prototype,
        D = l.TypeError,
        F = S("toStringTag"),
        O = x("TYPED_ARRAY_TAG"),
        R = "TypedArrayConstructor",
        L = s && !!b && "Opera" !== p(l.opera),
        B = !1,
        V = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
        },
        z = {
          BigInt64Array: 8,
          BigUint64Array: 8
        },
        N = function(t) {
          var e = y(t);
          if (h(e)) {
            var r = w(e);
            return r && c(r, R) ? r[R] : N(e)
          }
        },
        j = function(t) {
          if (!h(t)) return !1;
          var e = p(t);
          return c(V, e) || c(z, e)
        };
      for (n in V)(a = (i = l[n]) && i.prototype) ? _(a)[R] = i : L = !1;
      for (n in z)(a = (i = l[n]) && i.prototype) && (_(a)[R] = i);
      if ((!L || !u(M) || M === Function.prototype) && (M = function() {
          throw new D("Incorrect invocation")
        }, L))
        for (n in V) l[n] && b(l[n], M);
      if ((!L || !k || k === I) && (k = M.prototype, L))
        for (n in V) l[n] && b(l[n].prototype, k);
      if (L && y(A) !== k && b(A, k), o && !c(k, F))
        for (n in B = !0, v(k, F, {
            configurable: !0,
            get: function() {
              return h(this) ? this[O] : void 0
            }
          }), V) l[n] && d(l[n], O, n);
      t.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: L,
        TYPED_ARRAY_TAG: B && O,
        aTypedArray: function(t) {
          if (j(t)) return t;
          throw new D("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
          if (u(t) && (!b || g(M, t))) return t;
          throw new D(f(t) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(t, e, r, n) {
          if (o) {
            if (r)
              for (var i in V) {
                var a = l[i];
                if (a && c(a.prototype, t)) try {
                  delete a.prototype[t]
                } catch (r) {
                  try {
                    a.prototype[t] = e
                  } catch (t) {}
                }
              }
            k[t] && !r || m(k, t, r ? e : L && T[t] || e, n)
          }
        },
        exportTypedArrayStaticMethod: function(t, e, r) {
          var n, i;
          if (o) {
            if (b) {
              if (r)
                for (n in V)
                  if ((i = l[n]) && c(i, t)) try {
                    delete i[t]
                  } catch (t) {}
              if (M[t] && !r) return;
              try {
                return m(M, t, r ? e : L && M[t] || e)
              } catch (t) {}
            }
            for (n in V) !(i = l[n]) || i[t] && !r || m(i, t, e)
          }
        },
        getTypedArrayConstructor: N,
        isView: function(t) {
          if (!h(t)) return !1;
          var e = p(t);
          return "DataView" === e || c(V, e) || c(z, e)
        },
        isTypedArray: j,
        TypedArray: M,
        TypedArrayPrototype: k
      }
    },
    32510: (t, e, r) => {
      "use strict";
      var n = r(27066);
      t.exports = function(t, e) {
        for (var r = 0, i = n(e), a = new t(i); i > r;) a[r] = e[r++];
        return a
      }
    },
    89893: (t, e, r) => {
      "use strict";
      var n = r(10497),
        i = r(69686),
        a = r(27066),
        s = function(t) {
          return function(e, r, s) {
            var o, l = n(e),
              u = a(l),
              h = i(s, u);
            if (t && r != r) {
              for (; u > h;)
                if ((o = l[h++]) != o) return !0
            } else
              for (; u > h; h++)
                if ((t || h in l) && l[h] === r) return t || h || 0;
            return !t && -1
          }
        };
      t.exports = {
        includes: s(!0),
        indexOf: s(!1)
      }
    },
    71227: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(20404),
        a = TypeError,
        s = Object.getOwnPropertyDescriptor,
        o = n && ! function() {
          if (void 0 !== this) return !0;
          try {
            Object.defineProperty([], "length", {
              writable: !1
            }).length = 1
          } catch (t) {
            return t instanceof TypeError
          }
        }();
      t.exports = o ? function(t, e) {
        if (i(t) && !s(t, "length").writable) throw new a("Cannot set read only .length");
        return t.length = e
      } : function(t, e) {
        return t.length = e
      }
    },
    58996: (t, e, r) => {
      "use strict";
      var n = r(43436);
      t.exports = n([].slice)
    },
    25600: (t, e, r) => {
      "use strict";
      var n = r(27066);
      t.exports = function(t, e) {
        for (var r = n(t), i = new e(r), a = 0; a < r; a++) i[a] = t[r - a - 1];
        return i
      }
    },
    40772: (t, e, r) => {
      "use strict";
      var n = r(27066),
        i = r(58199),
        a = RangeError;
      t.exports = function(t, e, r, s) {
        var o = n(t),
          l = i(r),
          u = l < 0 ? o + l : l;
        if (u >= o || u < 0) throw new a("Incorrect index");
        for (var h = new e(o), c = 0; c < o; c++) h[c] = c === u ? s : t[c];
        return h
      }
    },
    58420: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = n({}.toString),
        a = n("".slice);
      t.exports = function(t) {
        return a(i(t), 8, -1)
      }
    },
    21823: (t, e, r) => {
      "use strict";
      var n = r(51504),
        i = r(50249),
        a = r(58420),
        s = r(67671)("toStringTag"),
        o = Object,
        l = "Arguments" === a(function() {
          return arguments
        }());
      t.exports = n ? a : function(t) {
        var e, r, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
          try {
            return t[e]
          } catch (t) {}
        }(e = o(t), s)) ? r : l ? a(e) : "Object" === (n = a(e)) && i(e.callee) ? "Arguments" : n
      }
    },
    31952: (t, e, r) => {
      "use strict";
      var n = r(9381),
        i = r(26627),
        a = r(51575),
        s = r(34173);
      t.exports = function(t, e, r) {
        for (var o = i(e), l = s.f, u = a.f, h = 0; h < o.length; h++) {
          var c = o[h];
          n(t, c) || r && n(r, c) || l(t, c, u(e, c))
        }
      }
    },
    70143: (t, e, r) => {
      "use strict";
      var n = r(16139);
      t.exports = !n((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
      }))
    },
    15111: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(34173),
        a = r(12120);
      t.exports = n ? function(t, e, r) {
        return i.f(t, e, a(1, r))
      } : function(t, e, r) {
        return t[e] = r, t
      }
    },
    12120: t => {
      "use strict";
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    97476: (t, e, r) => {
      "use strict";
      var n = r(13893),
        i = r(34173),
        a = r(12120);
      t.exports = function(t, e, r) {
        var s = n(e);
        s in t ? i.f(t, s, a(0, r)) : t[s] = r
      }
    },
    40398: (t, e, r) => {
      "use strict";
      var n = r(60295),
        i = r(34173);
      t.exports = function(t, e, r) {
        return r.get && n(r.get, e, {
          getter: !0
        }), r.set && n(r.set, e, {
          setter: !0
        }), i.f(t, e, r)
      }
    },
    99244: (t, e, r) => {
      "use strict";
      var n = r(50249),
        i = r(34173),
        a = r(60295),
        s = r(18701);
      t.exports = function(t, e, r, o) {
        o || (o = {});
        var l = o.enumerable,
          u = void 0 !== o.name ? o.name : e;
        if (n(r) && a(r, u, o), o.global) l ? t[e] = r : s(e, r);
        else {
          try {
            o.unsafe ? t[e] && (l = !0) : delete t[e]
          } catch (t) {}
          l ? t[e] = r : i.f(t, e, {
            value: r,
            enumerable: !1,
            configurable: !o.nonConfigurable,
            writable: !o.nonWritable
          })
        }
        return t
      }
    },
    18701: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = Object.defineProperty;
      t.exports = function(t, e) {
        try {
          i(n, t, {
            value: e,
            configurable: !0,
            writable: !0
          })
        } catch (r) {
          n[t] = e
        }
        return e
      }
    },
    29634: (t, e, r) => {
      "use strict";
      var n = r(83635),
        i = TypeError;
      t.exports = function(t, e) {
        if (!delete t[e]) throw new i("Cannot delete property " + n(e) + " of " + n(t))
      }
    },
    23736: (t, e, r) => {
      "use strict";
      var n = r(16139);
      t.exports = !n((function() {
        return 7 !== Object.defineProperty({}, 1, {
          get: function() {
            return 7
          }
        })[1]
      }))
    },
    2655: (t, e, r) => {
      "use strict";
      var n, i, a, s, o = r(71135),
        l = r(6582),
        u = r(18632),
        h = o.structuredClone,
        c = o.ArrayBuffer,
        p = o.MessageChannel,
        f = !1;
      if (u) f = function(t) {
        h(t, {
          transfer: [t]
        })
      };
      else if (c) try {
        p || (n = l("worker_threads")) && (p = n.MessageChannel), p && (i = new p, a = new c(2), s = function(t) {
          i.port1.postMessage(null, [t])
        }, 2 === a.byteLength && (s(a), 0 === a.byteLength && (f = s)))
      } catch (t) {}
      t.exports = f
    },
    90703: t => {
      "use strict";
      var e = "object" == typeof document && document.all,
        r = void 0 === e && void 0 !== e;
      t.exports = {
        all: e,
        IS_HTMLDDA: r
      }
    },
    15227: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(9582),
        a = n.document,
        s = i(a) && i(a.createElement);
      t.exports = function(t) {
        return s ? a.createElement(t) : {}
      }
    },
    23886: t => {
      "use strict";
      var e = TypeError;
      t.exports = function(t) {
        if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
        return t
      }
    },
    18766: t => {
      "use strict";
      t.exports = {
        IndexSizeError: {
          s: "INDEX_SIZE_ERR",
          c: 1,
          m: 1
        },
        DOMStringSizeError: {
          s: "DOMSTRING_SIZE_ERR",
          c: 2,
          m: 0
        },
        HierarchyRequestError: {
          s: "HIERARCHY_REQUEST_ERR",
          c: 3,
          m: 1
        },
        WrongDocumentError: {
          s: "WRONG_DOCUMENT_ERR",
          c: 4,
          m: 1
        },
        InvalidCharacterError: {
          s: "INVALID_CHARACTER_ERR",
          c: 5,
          m: 1
        },
        NoDataAllowedError: {
          s: "NO_DATA_ALLOWED_ERR",
          c: 6,
          m: 0
        },
        NoModificationAllowedError: {
          s: "NO_MODIFICATION_ALLOWED_ERR",
          c: 7,
          m: 1
        },
        NotFoundError: {
          s: "NOT_FOUND_ERR",
          c: 8,
          m: 1
        },
        NotSupportedError: {
          s: "NOT_SUPPORTED_ERR",
          c: 9,
          m: 1
        },
        InUseAttributeError: {
          s: "INUSE_ATTRIBUTE_ERR",
          c: 10,
          m: 1
        },
        InvalidStateError: {
          s: "INVALID_STATE_ERR",
          c: 11,
          m: 1
        },
        SyntaxError: {
          s: "SYNTAX_ERR",
          c: 12,
          m: 1
        },
        InvalidModificationError: {
          s: "INVALID_MODIFICATION_ERR",
          c: 13,
          m: 1
        },
        NamespaceError: {
          s: "NAMESPACE_ERR",
          c: 14,
          m: 1
        },
        InvalidAccessError: {
          s: "INVALID_ACCESS_ERR",
          c: 15,
          m: 1
        },
        ValidationError: {
          s: "VALIDATION_ERR",
          c: 16,
          m: 0
        },
        TypeMismatchError: {
          s: "TYPE_MISMATCH_ERR",
          c: 17,
          m: 1
        },
        SecurityError: {
          s: "SECURITY_ERR",
          c: 18,
          m: 1
        },
        NetworkError: {
          s: "NETWORK_ERR",
          c: 19,
          m: 1
        },
        AbortError: {
          s: "ABORT_ERR",
          c: 20,
          m: 1
        },
        URLMismatchError: {
          s: "URL_MISMATCH_ERR",
          c: 21,
          m: 1
        },
        QuotaExceededError: {
          s: "QUOTA_EXCEEDED_ERR",
          c: 22,
          m: 1
        },
        TimeoutError: {
          s: "TIMEOUT_ERR",
          c: 23,
          m: 1
        },
        InvalidNodeTypeError: {
          s: "INVALID_NODE_TYPE_ERR",
          c: 24,
          m: 1
        },
        DataCloneError: {
          s: "DATA_CLONE_ERR",
          c: 25,
          m: 1
        }
      }
    },
    74902: (t, e, r) => {
      "use strict";
      var n = r(54672),
        i = r(22556);
      t.exports = !n && !i && "object" == typeof window && "object" == typeof document
    },
    43311: t => {
      "use strict";
      t.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
    },
    54672: t => {
      "use strict";
      t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
    },
    43587: (t, e, r) => {
      "use strict";
      var n = r(25140);
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
    },
    22556: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(58420);
      t.exports = "process" === i(n.process)
    },
    25140: t => {
      "use strict";
      t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    },
    41016: (t, e, r) => {
      "use strict";
      var n, i, a = r(71135),
        s = r(25140),
        o = a.process,
        l = a.Deno,
        u = o && o.versions || l && l.version,
        h = u && u.v8;
      h && (i = (n = h.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (i = +n[1]), t.exports = i
    },
    69979: t => {
      "use strict";
      t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    28261: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = Error,
        a = n("".replace),
        s = String(new i("zxcasd").stack),
        o = /\n\s*at [^:]*:[^\n]*/,
        l = o.test(s);
      t.exports = function(t, e) {
        if (l && "string" == typeof t && !i.prepareStackTrace)
          for (; e--;) t = a(t, o, "");
        return t
      }
    },
    50583: (t, e, r) => {
      "use strict";
      var n = r(16139),
        i = r(12120);
      t.exports = !n((function() {
        var t = new Error("a");
        return !("stack" in t) || (Object.defineProperty(t, "stack", i(1, 7)), 7 !== t.stack)
      }))
    },
    97682: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(51575).f,
        a = r(15111),
        s = r(99244),
        o = r(18701),
        l = r(31952),
        u = r(97296);
      t.exports = function(t, e) {
        var r, h, c, p, f, d = t.target,
          m = t.global,
          v = t.stat;
        if (r = m ? n : v ? n[d] || o(d, {}) : (n[d] || {}).prototype)
          for (h in e) {
            if (p = e[h], c = t.dontCallGetSet ? (f = i(r, h)) && f.value : r[h], !u(m ? h : d + (v ? "." : "#") + h, t.forced) && void 0 !== c) {
              if (typeof p == typeof c) continue;
              l(p, c)
            }(t.sham || c && c.sham) && a(p, "sham", !0), s(r, h, p, t)
          }
      }
    },
    16139: t => {
      "use strict";
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    97293: (t, e, r) => {
      "use strict";
      var n = r(4924),
        i = Function.prototype,
        a = i.apply,
        s = i.call;
      t.exports = "object" == typeof Reflect && Reflect.apply || (n ? s.bind(a) : function() {
        return s.apply(a, arguments)
      })
    },
    46516: (t, e, r) => {
      "use strict";
      var n = r(69928),
        i = r(86342),
        a = r(4924),
        s = n(n.bind);
      t.exports = function(t, e) {
        return i(t), void 0 === e ? t : a ? s(t, e) : function() {
          return t.apply(e, arguments)
        }
      }
    },
    4924: (t, e, r) => {
      "use strict";
      var n = r(16139);
      t.exports = !n((function() {
        var t = function() {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
      }))
    },
    82689: (t, e, r) => {
      "use strict";
      var n = r(4924),
        i = Function.prototype.call;
      t.exports = n ? i.bind(i) : function() {
        return i.apply(i, arguments)
      }
    },
    84602: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(9381),
        a = Function.prototype,
        s = n && Object.getOwnPropertyDescriptor,
        o = i(a, "name"),
        l = o && "something" === function() {}.name,
        u = o && (!n || n && s(a, "name").configurable);
      t.exports = {
        EXISTS: o,
        PROPER: l,
        CONFIGURABLE: u
      }
    },
    13646: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(86342);
      t.exports = function(t, e, r) {
        try {
          return n(i(Object.getOwnPropertyDescriptor(t, e)[r]))
        } catch (t) {}
      }
    },
    69928: (t, e, r) => {
      "use strict";
      var n = r(58420),
        i = r(43436);
      t.exports = function(t) {
        if ("Function" === n(t)) return i(t)
      }
    },
    43436: (t, e, r) => {
      "use strict";
      var n = r(4924),
        i = Function.prototype,
        a = i.call,
        s = n && i.bind.bind(a, a);
      t.exports = n ? s : function(t) {
        return function() {
          return a.apply(t, arguments)
        }
      }
    },
    38592: (t, e, r) => {
      "use strict";
      var n = r(71135);
      t.exports = function(t, e) {
        return n[t].prototype[e]
      }
    },
    15155: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(50249);
      t.exports = function(t, e) {
        return arguments.length < 2 ? (r = n[t], i(r) ? r : void 0) : n[t] && n[t][e];
        var r
      }
    },
    4047: (t, e, r) => {
      "use strict";
      var n = r(21823),
        i = r(83322),
        a = r(35913),
        s = r(88569),
        o = r(67671)("iterator");
      t.exports = function(t) {
        if (!a(t)) return i(t, o) || i(t, "@@iterator") || s[n(t)]
      }
    },
    80693: (t, e, r) => {
      "use strict";
      var n = r(82689),
        i = r(86342),
        a = r(12155),
        s = r(83635),
        o = r(4047),
        l = TypeError;
      t.exports = function(t, e) {
        var r = arguments.length < 2 ? o(t) : e;
        if (i(r)) return a(n(r, t));
        throw new l(s(t) + " is not iterable")
      }
    },
    83322: (t, e, r) => {
      "use strict";
      var n = r(86342),
        i = r(35913);
      t.exports = function(t, e) {
        var r = t[e];
        return i(r) ? void 0 : n(r)
      }
    },
    71135: function(t, e, r) {
      "use strict";
      var n = function(t) {
        return t && t.Math === Math && t
      };
      t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
        return this
      }() || this || Function("return this")()
    },
    9381: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(3265),
        a = n({}.hasOwnProperty);
      t.exports = Object.hasOwn || function(t, e) {
        return a(i(t), e)
      }
    },
    24321: t => {
      "use strict";
      t.exports = {}
    },
    68217: (t, e, r) => {
      "use strict";
      var n = r(15155);
      t.exports = n("document", "documentElement")
    },
    91593: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(16139),
        a = r(15227);
      t.exports = !n && !i((function() {
        return 7 !== Object.defineProperty(a("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    62043: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(16139),
        a = r(58420),
        s = Object,
        o = n("".split);
      t.exports = i((function() {
        return !s("z").propertyIsEnumerable(0)
      })) ? function(t) {
        return "String" === a(t) ? o(t, "") : s(t)
      } : s
    },
    77387: (t, e, r) => {
      "use strict";
      var n = r(50249),
        i = r(9582),
        a = r(33675);
      t.exports = function(t, e, r) {
        var s, o;
        return a && n(s = e.constructor) && s !== r && i(o = s.prototype) && o !== r.prototype && a(t, o), t
      }
    },
    41990: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(50249),
        a = r(78673),
        s = n(Function.toString);
      i(a.inspectSource) || (a.inspectSource = function(t) {
        return s(t)
      }), t.exports = a.inspectSource
    },
    58217: (t, e, r) => {
      "use strict";
      var n, i, a, s = r(45482),
        o = r(71135),
        l = r(9582),
        u = r(15111),
        h = r(9381),
        c = r(78673),
        p = r(26811),
        f = r(24321),
        d = "Object already initialized",
        m = o.TypeError,
        v = o.WeakMap;
      if (s || c.state) {
        var g = c.state || (c.state = new v);
        g.get = g.get, g.has = g.has, g.set = g.set, n = function(t, e) {
          if (g.has(t)) throw new m(d);
          return e.facade = t, g.set(t, e), e
        }, i = function(t) {
          return g.get(t) || {}
        }, a = function(t) {
          return g.has(t)
        }
      } else {
        var y = p("state");
        f[y] = !0, n = function(t, e) {
          if (h(t, y)) throw new m(d);
          return e.facade = t, u(t, y, e), e
        }, i = function(t) {
          return h(t, y) ? t[y] : {}
        }, a = function(t) {
          return h(t, y)
        }
      }
      t.exports = {
        set: n,
        get: i,
        has: a,
        enforce: function(t) {
          return a(t) ? i(t) : n(t, {})
        },
        getterFor: function(t) {
          return function(e) {
            var r;
            if (!l(e) || (r = i(e)).type !== t) throw new m("Incompatible receiver, " + t + " required");
            return r
          }
        }
      }
    },
    22453: (t, e, r) => {
      "use strict";
      var n = r(67671),
        i = r(88569),
        a = n("iterator"),
        s = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (i.Array === t || s[a] === t)
      }
    },
    20404: (t, e, r) => {
      "use strict";
      var n = r(58420);
      t.exports = Array.isArray || function(t) {
        return "Array" === n(t)
      }
    },
    49835: (t, e, r) => {
      "use strict";
      var n = r(21823);
      t.exports = function(t) {
        var e = n(t);
        return "BigInt64Array" === e || "BigUint64Array" === e
      }
    },
    50249: (t, e, r) => {
      "use strict";
      var n = r(90703),
        i = n.all;
      t.exports = n.IS_HTMLDDA ? function(t) {
        return "function" == typeof t || t === i
      } : function(t) {
        return "function" == typeof t
      }
    },
    5513: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(16139),
        a = r(50249),
        s = r(21823),
        o = r(15155),
        l = r(41990),
        u = function() {},
        h = [],
        c = o("Reflect", "construct"),
        p = /^\s*(?:class|function)\b/,
        f = n(p.exec),
        d = !p.test(u),
        m = function(t) {
          if (!a(t)) return !1;
          try {
            return c(u, h, t), !0
          } catch (t) {
            return !1
          }
        },
        v = function(t) {
          if (!a(t)) return !1;
          switch (s(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1
          }
          try {
            return d || !!f(p, l(t))
          } catch (t) {
            return !0
          }
        };
      v.sham = !0, t.exports = !c || i((function() {
        var t;
        return m(m.call) || !m(Object) || !m((function() {
          t = !0
        })) || t
      })) ? v : m
    },
    97296: (t, e, r) => {
      "use strict";
      var n = r(16139),
        i = r(50249),
        a = /#|\.prototype\./,
        s = function(t, e) {
          var r = l[o(t)];
          return r === h || r !== u && (i(e) ? n(e) : !!e)
        },
        o = s.normalize = function(t) {
          return String(t).replace(a, ".").toLowerCase()
        },
        l = s.data = {},
        u = s.NATIVE = "N",
        h = s.POLYFILL = "P";
      t.exports = s
    },
    35913: t => {
      "use strict";
      t.exports = function(t) {
        return null == t
      }
    },
    9582: (t, e, r) => {
      "use strict";
      var n = r(50249),
        i = r(90703),
        a = i.all;
      t.exports = i.IS_HTMLDDA ? function(t) {
        return "object" == typeof t ? null !== t : n(t) || t === a
      } : function(t) {
        return "object" == typeof t ? null !== t : n(t)
      }
    },
    69759: t => {
      "use strict";
      t.exports = !1
    },
    1425: (t, e, r) => {
      "use strict";
      var n = r(15155),
        i = r(50249),
        a = r(24821),
        s = r(62060),
        o = Object;
      t.exports = s ? function(t) {
        return "symbol" == typeof t
      } : function(t) {
        var e = n("Symbol");
        return i(e) && a(e.prototype, o(t))
      }
    },
    69192: (t, e, r) => {
      "use strict";
      var n = r(46516),
        i = r(82689),
        a = r(12155),
        s = r(83635),
        o = r(22453),
        l = r(27066),
        u = r(24821),
        h = r(80693),
        c = r(4047),
        p = r(6919),
        f = TypeError,
        d = function(t, e) {
          this.stopped = t, this.result = e
        },
        m = d.prototype;
      t.exports = function(t, e, r) {
        var v, g, y, b, S, x, E, _ = r && r.that,
          w = !(!r || !r.AS_ENTRIES),
          P = !(!r || !r.IS_RECORD),
          T = !(!r || !r.IS_ITERATOR),
          C = !(!r || !r.INTERRUPTED),
          A = n(e, _),
          M = function(t) {
            return v && p(v, "normal", t), new d(!0, t)
          },
          k = function(t) {
            return w ? (a(t), C ? A(t[0], t[1], M) : A(t[0], t[1])) : C ? A(t, M) : A(t)
          };
        if (P) v = t.iterator;
        else if (T) v = t;
        else {
          if (!(g = c(t))) throw new f(s(t) + " is not iterable");
          if (o(g)) {
            for (y = 0, b = l(t); b > y; y++)
              if ((S = k(t[y])) && u(m, S)) return S;
            return new d(!1)
          }
          v = h(t, g)
        }
        for (x = P ? t.next : v.next; !(E = i(x, v)).done;) {
          try {
            S = k(E.value)
          } catch (t) {
            p(v, "throw", t)
          }
          if ("object" == typeof S && S && u(m, S)) return S
        }
        return new d(!1)
      }
    },
    6919: (t, e, r) => {
      "use strict";
      var n = r(82689),
        i = r(12155),
        a = r(83322);
      t.exports = function(t, e, r) {
        var s, o;
        i(t);
        try {
          if (!(s = a(t, "return"))) {
            if ("throw" === e) throw r;
            return r
          }
          s = n(s, t)
        } catch (t) {
          o = !0, s = t
        }
        if ("throw" === e) throw r;
        if (o) throw s;
        return i(s), r
      }
    },
    88569: t => {
      "use strict";
      t.exports = {}
    },
    27066: (t, e, r) => {
      "use strict";
      var n = r(66762);
      t.exports = function(t) {
        return n(t.length)
      }
    },
    60295: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(16139),
        a = r(50249),
        s = r(9381),
        o = r(23736),
        l = r(84602).CONFIGURABLE,
        u = r(41990),
        h = r(58217),
        c = h.enforce,
        p = h.get,
        f = String,
        d = Object.defineProperty,
        m = n("".slice),
        v = n("".replace),
        g = n([].join),
        y = o && !i((function() {
          return 8 !== d((function() {}), "length", {
            value: 8
          }).length
        })),
        b = String(String).split("String"),
        S = t.exports = function(t, e, r) {
          "Symbol(" === m(f(e), 0, 7) && (e = "[" + v(f(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!s(t, "name") || l && t.name !== e) && (o ? d(t, "name", {
            value: e,
            configurable: !0
          }) : t.name = e), y && r && s(r, "arity") && t.length !== r.arity && d(t, "length", {
            value: r.arity
          });
          try {
            r && s(r, "constructor") && r.constructor ? o && d(t, "prototype", {
              writable: !1
            }) : t.prototype && (t.prototype = void 0)
          } catch (t) {}
          var n = c(t);
          return s(n, "source") || (n.source = g(b, "string" == typeof e ? e : "")), t
        };
      Function.prototype.toString = S((function() {
        return a(this) && p(this).source || u(this)
      }), "toString")
    },
    96860: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = Map.prototype;
      t.exports = {
        Map,
        set: n(i.set),
        get: n(i.get),
        has: n(i.has),
        remove: n(i.delete),
        proto: i
      }
    },
    40857: t => {
      "use strict";
      var e = Math.ceil,
        r = Math.floor;
      t.exports = Math.trunc || function(t) {
        var n = +t;
        return (n > 0 ? r : e)(n)
      }
    },
    16135: (t, e, r) => {
      "use strict";
      var n = r(1611);
      t.exports = function(t, e) {
        return void 0 === t ? arguments.length < 2 ? "" : e : n(t)
      }
    },
    53260: (t, e, r) => {
      "use strict";
      var n, i = r(12155),
        a = r(95941),
        s = r(69979),
        o = r(24321),
        l = r(68217),
        u = r(15227),
        h = r(26811),
        c = "prototype",
        p = "script",
        f = h("IE_PROTO"),
        d = function() {},
        m = function(t) {
          return "<" + p + ">" + t + "</" + p + ">"
        },
        v = function(t) {
          t.write(m("")), t.close();
          var e = t.parentWindow.Object;
          return t = null, e
        },
        g = function() {
          try {
            n = new ActiveXObject("htmlfile")
          } catch (t) {}
          var t, e, r;
          g = "undefined" != typeof document ? document.domain && n ? v(n) : (e = u("iframe"), r = "java" + p + ":", e.style.display = "none", l.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write(m("document.F=Object")), t.close(), t.F) : v(n);
          for (var i = s.length; i--;) delete g[c][s[i]];
          return g()
        };
      o[f] = !0, t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (d[c] = i(t), r = new d, d[c] = null, r[f] = t) : r = g(), void 0 === e ? r : a.f(r, e)
      }
    },
    95941: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(41562),
        a = r(34173),
        s = r(12155),
        o = r(10497),
        l = r(93732);
      e.f = n && !i ? Object.defineProperties : function(t, e) {
        s(t);
        for (var r, n = o(e), i = l(e), u = i.length, h = 0; u > h;) a.f(t, r = i[h++], n[r]);
        return t
      }
    },
    34173: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(91593),
        a = r(41562),
        s = r(12155),
        o = r(13893),
        l = TypeError,
        u = Object.defineProperty,
        h = Object.getOwnPropertyDescriptor,
        c = "enumerable",
        p = "configurable",
        f = "writable";
      e.f = n ? a ? function(t, e, r) {
        if (s(t), e = o(e), s(r), "function" == typeof t && "prototype" === e && "value" in r && f in r && !r[f]) {
          var n = h(t, e);
          n && n[f] && (t[e] = r.value, r = {
            configurable: p in r ? r[p] : n[p],
            enumerable: c in r ? r[c] : n[c],
            writable: !1
          })
        }
        return u(t, e, r)
      } : u : function(t, e, r) {
        if (s(t), e = o(e), s(r), i) try {
          return u(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw new l("Accessors not supported");
        return "value" in r && (t[e] = r.value), t
      }
    },
    51575: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(82689),
        a = r(4161),
        s = r(12120),
        o = r(10497),
        l = r(13893),
        u = r(9381),
        h = r(91593),
        c = Object.getOwnPropertyDescriptor;
      e.f = n ? c : function(t, e) {
        if (t = o(t), e = l(e), h) try {
          return c(t, e)
        } catch (t) {}
        if (u(t, e)) return s(!i(a.f, t, e), t[e])
      }
    },
    39860: (t, e, r) => {
      "use strict";
      var n = r(14272),
        i = r(69979).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, i)
      }
    },
    55241: (t, e) => {
      "use strict";
      e.f = Object.getOwnPropertySymbols
    },
    72495: (t, e, r) => {
      "use strict";
      var n = r(9381),
        i = r(50249),
        a = r(3265),
        s = r(26811),
        o = r(70143),
        l = s("IE_PROTO"),
        u = Object,
        h = u.prototype;
      t.exports = o ? u.getPrototypeOf : function(t) {
        var e = a(t);
        if (n(e, l)) return e[l];
        var r = e.constructor;
        return i(r) && e instanceof r ? r.prototype : e instanceof u ? h : null
      }
    },
    24821: (t, e, r) => {
      "use strict";
      var n = r(43436);
      t.exports = n({}.isPrototypeOf)
    },
    14272: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = r(9381),
        a = r(10497),
        s = r(89893).indexOf,
        o = r(24321),
        l = n([].push);
      t.exports = function(t, e) {
        var r, n = a(t),
          u = 0,
          h = [];
        for (r in n) !i(o, r) && i(n, r) && l(h, r);
        for (; e.length > u;) i(n, r = e[u++]) && (~s(h, r) || l(h, r));
        return h
      }
    },
    93732: (t, e, r) => {
      "use strict";
      var n = r(14272),
        i = r(69979);
      t.exports = Object.keys || function(t) {
        return n(t, i)
      }
    },
    4161: (t, e) => {
      "use strict";
      var r = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        i = n && !r.call({
          1: 2
        }, 1);
      e.f = i ? function(t) {
        var e = n(this, t);
        return !!e && e.enumerable
      } : r
    },
    33675: (t, e, r) => {
      "use strict";
      var n = r(13646),
        i = r(12155),
        a = r(78694);
      t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
          r = {};
        try {
          (t = n(Object.prototype, "__proto__", "set"))(r, []), e = r instanceof Array
        } catch (t) {}
        return function(r, n) {
          return i(r), a(n), e ? t(r, n) : r.__proto__ = n, r
        }
      }() : void 0)
    },
    434: (t, e, r) => {
      "use strict";
      var n = r(82689),
        i = r(50249),
        a = r(9582),
        s = TypeError;
      t.exports = function(t, e) {
        var r, o;
        if ("string" === e && i(r = t.toString) && !a(o = n(r, t))) return o;
        if (i(r = t.valueOf) && !a(o = n(r, t))) return o;
        if ("string" !== e && i(r = t.toString) && !a(o = n(r, t))) return o;
        throw new s("Can't convert object to primitive value")
      }
    },
    26627: (t, e, r) => {
      "use strict";
      var n = r(15155),
        i = r(43436),
        a = r(39860),
        s = r(55241),
        o = r(12155),
        l = i([].concat);
      t.exports = n("Reflect", "ownKeys") || function(t) {
        var e = a.f(o(t)),
          r = s.f;
        return r ? l(e, r(t)) : e
      }
    },
    26247: (t, e, r) => {
      "use strict";
      var n = r(12155);
      t.exports = function() {
        var t = n(this),
          e = "";
        return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
      }
    },
    26406: (t, e, r) => {
      "use strict";
      var n = r(82689),
        i = r(9381),
        a = r(24821),
        s = r(26247),
        o = RegExp.prototype;
      t.exports = function(t) {
        var e = t.flags;
        return void 0 !== e || "flags" in o || i(t, "flags") || !a(o, t) ? e : n(s, t)
      }
    },
    85674: (t, e, r) => {
      "use strict";
      var n = r(35913),
        i = TypeError;
      t.exports = function(t) {
        if (n(t)) throw new i("Can't call method on " + t);
        return t
      }
    },
    80860: (t, e, r) => {
      "use strict";
      var n, i = r(71135),
        a = r(97293),
        s = r(50249),
        o = r(43311),
        l = r(25140),
        u = r(58996),
        h = r(61704),
        c = i.Function,
        p = /MSIE .\./.test(l) || o && ((n = i.Bun.version.split(".")).length < 3 || "0" === n[0] && (n[1] < 3 || "3" === n[1] && "0" === n[2]));
      t.exports = function(t, e) {
        var r = e ? 2 : 1;
        return p ? function(n, i) {
          var o = h(arguments.length, 1) > r,
            l = s(n) ? n : c(n),
            p = o ? u(arguments, r) : [],
            f = o ? function() {
              a(l, this, p)
            } : l;
          return e ? t(f, i) : t(f)
        } : t
      }
    },
    32414: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = Set.prototype;
      t.exports = {
        Set,
        add: n(i.add),
        has: n(i.has),
        remove: n(i.delete),
        proto: i
      }
    },
    26811: (t, e, r) => {
      "use strict";
      var n = r(69301),
        i = r(88092),
        a = n("keys");
      t.exports = function(t) {
        return a[t] || (a[t] = i(t))
      }
    },
    78673: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(18701),
        a = "__core-js_shared__",
        s = n[a] || i(a, {});
      t.exports = s
    },
    69301: (t, e, r) => {
      "use strict";
      var n = r(69759),
        i = r(78673);
      (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: "3.33.1",
        mode: n ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
      })
    },
    18632: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(16139),
        a = r(41016),
        s = r(74902),
        o = r(54672),
        l = r(22556),
        u = n.structuredClone;
      t.exports = !!u && !i((function() {
        if (o && a > 92 || l && a > 94 || s && a > 97) return !1;
        var t = new ArrayBuffer(8),
          e = u(t, {
            transfer: [t]
          });
        return 0 !== t.byteLength || 8 !== e.byteLength
      }))
    },
    41811: (t, e, r) => {
      "use strict";
      var n = r(41016),
        i = r(16139),
        a = r(71135).String;
      t.exports = !!Object.getOwnPropertySymbols && !i((function() {
        var t = Symbol("symbol detection");
        return !a(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41
      }))
    },
    3477: (t, e, r) => {
      "use strict";
      var n, i, a, s, o = r(71135),
        l = r(97293),
        u = r(46516),
        h = r(50249),
        c = r(9381),
        p = r(16139),
        f = r(68217),
        d = r(58996),
        m = r(15227),
        v = r(61704),
        g = r(43587),
        y = r(22556),
        b = o.setImmediate,
        S = o.clearImmediate,
        x = o.process,
        E = o.Dispatch,
        _ = o.Function,
        w = o.MessageChannel,
        P = o.String,
        T = 0,
        C = {},
        A = "onreadystatechange";
      p((function() {
        n = o.location
      }));
      var M = function(t) {
          if (c(C, t)) {
            var e = C[t];
            delete C[t], e()
          }
        },
        k = function(t) {
          return function() {
            M(t)
          }
        },
        I = function(t) {
          M(t.data)
        },
        D = function(t) {
          o.postMessage(P(t), n.protocol + "//" + n.host)
        };
      b && S || (b = function(t) {
        v(arguments.length, 1);
        var e = h(t) ? t : _(t),
          r = d(arguments, 1);
        return C[++T] = function() {
          l(e, void 0, r)
        }, i(T), T
      }, S = function(t) {
        delete C[t]
      }, y ? i = function(t) {
        x.nextTick(k(t))
      } : E && E.now ? i = function(t) {
        E.now(k(t))
      } : w && !g ? (s = (a = new w).port2, a.port1.onmessage = I, i = u(s.postMessage, s)) : o.addEventListener && h(o.postMessage) && !o.importScripts && n && "file:" !== n.protocol && !p(D) ? (i = D, o.addEventListener("message", I, !1)) : i = A in m("script") ? function(t) {
        f.appendChild(m("script"))[A] = function() {
          f.removeChild(this), M(t)
        }
      } : function(t) {
        setTimeout(k(t), 0)
      }), t.exports = {
        set: b,
        clear: S
      }
    },
    69686: (t, e, r) => {
      "use strict";
      var n = r(58199),
        i = Math.max,
        a = Math.min;
      t.exports = function(t, e) {
        var r = n(t);
        return r < 0 ? i(r + e, 0) : a(r, e)
      }
    },
    42874: (t, e, r) => {
      "use strict";
      var n = r(32373),
        i = TypeError;
      t.exports = function(t) {
        var e = n(t, "number");
        if ("number" == typeof e) throw new i("Can't convert number to bigint");
        return BigInt(e)
      }
    },
    31364: (t, e, r) => {
      "use strict";
      var n = r(58199),
        i = r(66762),
        a = RangeError;
      t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = n(t),
          r = i(e);
        if (e !== r) throw new a("Wrong length or index");
        return r
      }
    },
    10497: (t, e, r) => {
      "use strict";
      var n = r(62043),
        i = r(85674);
      t.exports = function(t) {
        return n(i(t))
      }
    },
    58199: (t, e, r) => {
      "use strict";
      var n = r(40857);
      t.exports = function(t) {
        var e = +t;
        return e != e || 0 === e ? 0 : n(e)
      }
    },
    66762: (t, e, r) => {
      "use strict";
      var n = r(58199),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
      }
    },
    3265: (t, e, r) => {
      "use strict";
      var n = r(85674),
        i = Object;
      t.exports = function(t) {
        return i(n(t))
      }
    },
    32373: (t, e, r) => {
      "use strict";
      var n = r(82689),
        i = r(9582),
        a = r(1425),
        s = r(83322),
        o = r(434),
        l = r(67671),
        u = TypeError,
        h = l("toPrimitive");
      t.exports = function(t, e) {
        if (!i(t) || a(t)) return t;
        var r, l = s(t, h);
        if (l) {
          if (void 0 === e && (e = "default"), r = n(l, t, e), !i(r) || a(r)) return r;
          throw new u("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), o(t, e)
      }
    },
    13893: (t, e, r) => {
      "use strict";
      var n = r(32373),
        i = r(1425);
      t.exports = function(t) {
        var e = n(t, "string");
        return i(e) ? e : e + ""
      }
    },
    51504: (t, e, r) => {
      "use strict";
      var n = {};
      n[r(67671)("toStringTag")] = "z", t.exports = "[object z]" === String(n)
    },
    1611: (t, e, r) => {
      "use strict";
      var n = r(21823),
        i = String;
      t.exports = function(t) {
        if ("Symbol" === n(t)) throw new TypeError("Cannot convert a Symbol value to a string");
        return i(t)
      }
    },
    6582: (t, e, r) => {
      "use strict";
      var n = r(22556);
      t.exports = function(t) {
        try {
          if (n) return Function('return require("' + t + '")')()
        } catch (t) {}
      }
    },
    83635: t => {
      "use strict";
      var e = String;
      t.exports = function(t) {
        try {
          return e(t)
        } catch (t) {
          return "Object"
        }
      }
    },
    88092: (t, e, r) => {
      "use strict";
      var n = r(43436),
        i = 0,
        a = Math.random(),
        s = n(1..toString);
      t.exports = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++i + a, 36)
      }
    },
    72652: (t, e, r) => {
      "use strict";
      var n = r(16139),
        i = r(67671),
        a = r(23736),
        s = r(69759),
        o = i("iterator");
      t.exports = !n((function() {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
          e = t.searchParams,
          r = new URLSearchParams("a=1&a=2&b=3"),
          n = "";
        return t.pathname = "c%20d", e.forEach((function(t, r) {
          e.delete("b"), n += r + t
        })), r.delete("a", 2), r.delete("b", void 0), s && (!t.toJSON || !r.has("a", 1) || r.has("a", 2) || !r.has("a", void 0) || r.has("b")) || !e.size && (s || !a) || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
      }))
    },
    62060: (t, e, r) => {
      "use strict";
      var n = r(41811);
      t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    41562: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(16139);
      t.exports = n && i((function() {
        return 42 !== Object.defineProperty((function() {}), "prototype", {
          value: 42,
          writable: !1
        }).prototype
      }))
    },
    61704: t => {
      "use strict";
      var e = TypeError;
      t.exports = function(t, r) {
        if (t < r) throw new e("Not enough arguments");
        return t
      }
    },
    45482: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(50249),
        a = n.WeakMap;
      t.exports = i(a) && /native code/.test(String(a))
    },
    67671: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(69301),
        a = r(9381),
        s = r(88092),
        o = r(41811),
        l = r(62060),
        u = n.Symbol,
        h = i("wks"),
        c = l ? u.for || u : u && u.withoutSetter || s;
      t.exports = function(t) {
        return a(h, t) || (h[t] = o && a(u, t) ? u[t] : c("Symbol." + t)), h[t]
      }
    },
    83142: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(3265),
        a = r(27066),
        s = r(71227),
        o = r(23886);
      n({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: r(16139)((function() {
          return 4294967297 !== [].push.call({
            length: 4294967296
          }, 1)
        })) || ! function() {
          try {
            Object.defineProperty([], "length", {
              writable: !1
            }).push()
          } catch (t) {
            return t instanceof TypeError
          }
        }()
      }, {
        push: function(t) {
          var e = i(this),
            r = a(e),
            n = arguments.length;
          o(r + n);
          for (var l = 0; l < n; l++) e[r] = arguments[l], r++;
          return s(e, r), r
        }
      })
    },
    80594: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(25600),
        a = r(10497),
        s = r(55665),
        o = Array;
      n({
        target: "Array",
        proto: !0
      }, {
        toReversed: function() {
          return i(a(this), o)
        }
      }), s("toReversed")
    },
    91045: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(43436),
        a = r(86342),
        s = r(10497),
        o = r(32510),
        l = r(38592),
        u = r(55665),
        h = Array,
        c = i(l("Array", "sort"));
      n({
        target: "Array",
        proto: !0
      }, {
        toSorted: function(t) {
          void 0 !== t && a(t);
          var e = s(this),
            r = o(h, e);
          return c(r, t)
        }
      }), u("toSorted")
    },
    18118: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(55665),
        a = r(23886),
        s = r(27066),
        o = r(69686),
        l = r(10497),
        u = r(58199),
        h = Array,
        c = Math.max,
        p = Math.min;
      n({
        target: "Array",
        proto: !0
      }, {
        toSpliced: function(t, e) {
          var r, n, i, f, d = l(this),
            m = s(d),
            v = o(t, m),
            g = arguments.length,
            y = 0;
          for (0 === g ? r = n = 0 : 1 === g ? (r = 0, n = m - v) : (r = g - 2, n = p(c(u(e), 0), m - v)), i = a(m + r - n), f = h(i); y < v; y++) f[y] = d[y];
          for (; y < v + r; y++) f[y] = arguments[y - v + 2];
          for (; y < i; y++) f[y] = d[y + n - r];
          return f
        }
      }), i("toSpliced")
    },
    813: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(3265),
        a = r(27066),
        s = r(71227),
        o = r(29634),
        l = r(23886);
      n({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: 1 !== [].unshift(0) || ! function() {
          try {
            Object.defineProperty([], "length", {
              writable: !1
            }).unshift()
          } catch (t) {
            return t instanceof TypeError
          }
        }()
      }, {
        unshift: function(t) {
          var e = i(this),
            r = a(e),
            n = arguments.length;
          if (n) {
            l(r + n);
            for (var u = r; u--;) {
              var h = u + n;
              u in e ? e[h] = e[u] : o(e, h)
            }
            for (var c = 0; c < n; c++) e[c] = arguments[c]
          }
          return s(e, r + n)
        }
      })
    },
    92306: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(40772),
        a = r(10497),
        s = Array;
      n({
        target: "Array",
        proto: !0
      }, {
        with: function(t, e) {
          return i(a(this), s, t, e)
        }
      })
    },
    74035: (t, e, r) => {
      "use strict";
      var n = r(71135),
        i = r(23736),
        a = r(40398),
        s = r(26247),
        o = r(16139),
        l = n.RegExp,
        u = l.prototype;
      i && o((function() {
        var t = !0;
        try {
          l(".", "d")
        } catch (e) {
          t = !1
        }
        var e = {},
          r = "",
          n = t ? "dgimsy" : "gimsy",
          i = function(t, n) {
            Object.defineProperty(e, t, {
              get: function() {
                return r += n, !0
              }
            })
          },
          a = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
          };
        for (var s in t && (a.hasIndices = "d"), a) i(s, a[s]);
        return Object.getOwnPropertyDescriptor(u, "flags").get.call(e) !== n || r !== n
      })) && a(u, "flags", {
        configurable: !0,
        get: s
      })
    },
    21535: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(43436),
        a = r(85674),
        s = r(1611),
        o = i("".charCodeAt);
      n({
        target: "String",
        proto: !0
      }, {
        isWellFormed: function() {
          for (var t = s(a(this)), e = t.length, r = 0; r < e; r++) {
            var n = o(t, r);
            if (55296 == (63488 & n) && (n >= 56320 || ++r >= e || 56320 != (64512 & o(t, r)))) return !1
          }
          return !0
        }
      })
    },
    43474: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(82689),
        a = r(43436),
        s = r(85674),
        o = r(1611),
        l = r(16139),
        u = Array,
        h = a("".charAt),
        c = a("".charCodeAt),
        p = a([].join),
        f = "".toWellFormed,
        d = f && l((function() {
          return "1" !== i(f, 1)
        }));
      n({
        target: "String",
        proto: !0,
        forced: d
      }, {
        toWellFormed: function() {
          var t = o(s(this));
          if (d) return i(f, t);
          for (var e = t.length, r = u(e), n = 0; n < e; n++) {
            var a = c(t, n);
            55296 != (63488 & a) ? r[n] = h(t, n) : a >= 56320 || n + 1 >= e || 56320 != (64512 & c(t, n + 1)) ? r[n] = "�" : (r[n] = h(t, n), r[++n] = h(t, n))
          }
          return p(r, "")
        }
      })
    },
    88863: (t, e, r) => {
      "use strict";
      var n = r(25600),
        i = r(73400),
        a = i.aTypedArray,
        s = i.exportTypedArrayMethod,
        o = i.getTypedArrayConstructor;
      s("toReversed", (function() {
        return n(a(this), o(this))
      }))
    },
    17240: (t, e, r) => {
      "use strict";
      var n = r(73400),
        i = r(43436),
        a = r(86342),
        s = r(32510),
        o = n.aTypedArray,
        l = n.getTypedArrayConstructor,
        u = n.exportTypedArrayMethod,
        h = i(n.TypedArrayPrototype.sort);
      u("toSorted", (function(t) {
        void 0 !== t && a(t);
        var e = o(this),
          r = s(l(e), e);
        return h(r, t)
      }))
    },
    76277: (t, e, r) => {
      "use strict";
      var n = r(40772),
        i = r(73400),
        a = r(49835),
        s = r(58199),
        o = r(42874),
        l = i.aTypedArray,
        u = i.getTypedArrayConstructor,
        h = i.exportTypedArrayMethod,
        c = !! function() {
          try {
            new Int8Array(1).with(2, {
              valueOf: function() {
                throw 8
              }
            })
          } catch (t) {
            return 8 === t
          }
        }();
      h("with", {
        with: function(t, e) {
          var r = l(this),
            i = s(t),
            h = a(r) ? o(e) : +e;
          return n(r, u(r), i, h)
        }
      }.with, !c)
    },
    92452: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(71135),
        a = r(3477).clear;
      n({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: i.clearImmediate !== a
      }, {
        clearImmediate: a
      })
    },
    95911: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(71135),
        a = r(15155),
        s = r(12120),
        o = r(34173).f,
        l = r(9381),
        u = r(68851),
        h = r(77387),
        c = r(16135),
        p = r(18766),
        f = r(28261),
        d = r(23736),
        m = r(69759),
        v = "DOMException",
        g = a("Error"),
        y = a(v),
        b = function() {
          u(this, S);
          var t = arguments.length,
            e = c(t < 1 ? void 0 : arguments[0]),
            r = c(t < 2 ? void 0 : arguments[1], "Error"),
            n = new y(e, r),
            i = new g(e);
          return i.name = v, o(n, "stack", s(1, f(i.stack, 1))), h(n, this, b), n
        },
        S = b.prototype = y.prototype,
        x = "stack" in new g(v),
        E = "stack" in new y(1, 2),
        _ = y && d && Object.getOwnPropertyDescriptor(i, v),
        w = !(!_ || _.writable && _.configurable),
        P = x && !w && !E;
      n({
        global: !0,
        constructor: !0,
        forced: m || P
      }, {
        DOMException: P ? b : y
      });
      var T = a(v),
        C = T.prototype;
      if (C.constructor !== T)
        for (var A in m || o(C, "constructor", s(1, T)), p)
          if (l(p, A)) {
            var M = p[A],
              k = M.s;
            l(T, k) || o(T, k, s(6, M.c))
          }
    },
    88372: (t, e, r) => {
      "use strict";
      r(92452), r(26817)
    },
    26817: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(71135),
        a = r(3477).set,
        s = r(80860),
        o = i.setImmediate ? s(a, !1) : a;
      n({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: i.setImmediate !== o
      }, {
        setImmediate: o
      })
    },
    20442: (t, e, r) => {
      "use strict";
      var n, i = r(69759),
        a = r(97682),
        s = r(71135),
        o = r(15155),
        l = r(43436),
        u = r(16139),
        h = r(88092),
        c = r(50249),
        p = r(5513),
        f = r(35913),
        d = r(9582),
        m = r(1425),
        v = r(69192),
        g = r(12155),
        y = r(21823),
        b = r(9381),
        S = r(97476),
        x = r(15111),
        E = r(27066),
        _ = r(61704),
        w = r(26406),
        P = r(96860),
        T = r(32414),
        C = r(36720),
        A = r(50583),
        M = r(18632),
        k = s.Object,
        I = s.Array,
        D = s.Date,
        F = s.Error,
        O = s.EvalError,
        R = s.RangeError,
        L = s.ReferenceError,
        B = s.SyntaxError,
        V = s.TypeError,
        z = s.URIError,
        N = s.PerformanceMark,
        j = s.WebAssembly,
        G = j && j.CompileError || F,
        H = j && j.LinkError || F,
        W = j && j.RuntimeError || F,
        q = o("DOMException"),
        $ = P.Map,
        U = P.has,
        Y = P.get,
        X = P.set,
        K = T.Set,
        Z = T.add,
        J = o("Object", "keys"),
        Q = l([].push),
        tt = l((!0).valueOf),
        et = l(1..valueOf),
        rt = l("".valueOf),
        nt = l(D.prototype.getTime),
        it = h("structuredClone"),
        at = "DataCloneError",
        st = "Transferring",
        ot = function(t) {
          return !u((function() {
            var e = new s.Set([7]),
              r = t(e),
              n = t(k(7));
            return r === e || !r.has(7) || "object" != typeof n || 7 != +n
          })) && t
        },
        lt = function(t, e) {
          return !u((function() {
            var r = new e,
              n = t({
                a: r,
                b: r
              });
            return !(n && n.a === n.b && n.a instanceof e && n.a.stack === r.stack)
          }))
        },
        ut = s.structuredClone,
        ht = i || !lt(ut, F) || !lt(ut, q) || (n = ut, !!u((function() {
          var t = n(new s.AggregateError([1], it, {
            cause: 3
          }));
          return "AggregateError" !== t.name || 1 !== t.errors[0] || t.message !== it || 3 !== t.cause
        }))),
        ct = !ut && ot((function(t) {
          return new N(it, {
            detail: t
          }).detail
        })),
        pt = ot(ut) || ct,
        ft = function(t) {
          throw new q("Uncloneable type: " + t, at)
        },
        dt = function(t, e) {
          throw new q((e || "Cloning") + " of " + t + " cannot be properly polyfilled in this engine", at)
        },
        mt = function(t, e) {
          return pt || dt(e), pt(t)
        },
        vt = function(t, e, r) {
          if (U(e, t)) return Y(e, t);
          var n, i, a, o, l, u;
          if ("SharedArrayBuffer" === (r || y(t))) n = pt ? pt(t) : t;
          else {
            var h = s.DataView;
            h || "function" == typeof t.slice || dt("ArrayBuffer");
            try {
              if ("function" != typeof t.slice || t.resizable) {
                i = t.byteLength, a = "maxByteLength" in t ? {
                  maxByteLength: t.maxByteLength
                } : void 0, n = new ArrayBuffer(i, a), o = new h(t), l = new h(n);
                for (u = 0; u < i; u++) l.setUint8(u, o.getUint8(u))
              } else n = t.slice(0)
            } catch (t) {
              throw new q("ArrayBuffer is detached", at)
            }
          }
          return X(e, t, n), n
        },
        gt = function(t, e, r, n, i) {
          var a = s[e];
          return d(a) || dt(e), new a(vt(t.buffer, i), r, n)
        },
        yt = function(t, e, r) {
          this.object = t, this.type = e, this.metadata = r
        },
        bt = function(t, e, r) {
          if (m(t) && ft("Symbol"), !d(t)) return t;
          if (e) {
            if (U(e, t)) return Y(e, t)
          } else e = new $;
          var n, i, a, l, u, h, p, f, v = y(t);
          switch (v) {
            case "Array":
              a = I(E(t));
              break;
            case "Object":
              a = {};
              break;
            case "Map":
              a = new $;
              break;
            case "Set":
              a = new K;
              break;
            case "RegExp":
              a = new RegExp(t.source, w(t));
              break;
            case "Error":
              switch (i = t.name) {
                case "AggregateError":
                  a = new(o("AggregateError"))([]);
                  break;
                case "EvalError":
                  a = new O;
                  break;
                case "RangeError":
                  a = new R;
                  break;
                case "ReferenceError":
                  a = new L;
                  break;
                case "SyntaxError":
                  a = new B;
                  break;
                case "TypeError":
                  a = new V;
                  break;
                case "URIError":
                  a = new z;
                  break;
                case "CompileError":
                  a = new G;
                  break;
                case "LinkError":
                  a = new H;
                  break;
                case "RuntimeError":
                  a = new W;
                  break;
                default:
                  a = new F
              }
              break;
            case "DOMException":
              a = new q(t.message, t.name);
              break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
              a = r ? new yt(t, v) : vt(t, e, v);
              break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
              h = "DataView" === v ? t.byteLength : t.length, a = r ? new yt(t, v, {
                offset: t.byteOffset,
                length: h
              }) : gt(t, v, t.byteOffset, h, e);
              break;
            case "DOMQuad":
              try {
                a = new DOMQuad(bt(t.p1, e, r), bt(t.p2, e, r), bt(t.p3, e, r), bt(t.p4, e, r))
              } catch (e) {
                a = mt(t, v)
              }
              break;
            case "File":
              if (pt) try {
                a = pt(t), y(a) !== v && (a = void 0)
              } catch (t) {}
              if (!a) try {
                a = new File([t], t.name, t)
              } catch (t) {}
              a || dt(v);
              break;
            case "FileList":
              if (l = function() {
                  var t;
                  try {
                    t = new s.DataTransfer
                  } catch (e) {
                    try {
                      t = new s.ClipboardEvent("").clipboardData
                    } catch (t) {}
                  }
                  return t && t.items && t.files ? t : null
                }()) {
                for (u = 0, h = E(t); u < h; u++) l.items.add(bt(t[u], e, r));
                a = l.files
              } else a = mt(t, v);
              break;
            case "ImageData":
              try {
                a = new ImageData(bt(t.data, e, r), t.width, t.height, {
                  colorSpace: t.colorSpace
                })
              } catch (e) {
                a = mt(t, v)
              }
              break;
            default:
              if (pt) a = pt(t);
              else switch (v) {
                case "BigInt":
                  a = k(t.valueOf());
                  break;
                case "Boolean":
                  a = k(tt(t));
                  break;
                case "Number":
                  a = k(et(t));
                  break;
                case "String":
                  a = k(rt(t));
                  break;
                case "Date":
                  a = new D(nt(t));
                  break;
                case "Blob":
                  try {
                    a = t.slice(0, t.size, t.type)
                  } catch (t) {
                    dt(v)
                  }
                  break;
                case "DOMPoint":
                case "DOMPointReadOnly":
                  n = s[v];
                  try {
                    a = n.fromPoint ? n.fromPoint(t) : new n(t.x, t.y, t.z, t.w)
                  } catch (t) {
                    dt(v)
                  }
                  break;
                case "DOMRect":
                case "DOMRectReadOnly":
                  n = s[v];
                  try {
                    a = n.fromRect ? n.fromRect(t) : new n(t.x, t.y, t.width, t.height)
                  } catch (t) {
                    dt(v)
                  }
                  break;
                case "DOMMatrix":
                case "DOMMatrixReadOnly":
                  n = s[v];
                  try {
                    a = n.fromMatrix ? n.fromMatrix(t) : new n(t)
                  } catch (t) {
                    dt(v)
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  c(t.clone) || dt(v);
                  try {
                    a = t.clone()
                  } catch (t) {
                    ft(v)
                  }
                  break;
                case "CropTarget":
                case "CryptoKey":
                case "FileSystemDirectoryHandle":
                case "FileSystemFileHandle":
                case "FileSystemHandle":
                case "GPUCompilationInfo":
                case "GPUCompilationMessage":
                case "ImageBitmap":
                case "RTCCertificate":
                case "WebAssembly.Module":
                  dt(v);
                default:
                  ft(v)
              }
          }
          switch (X(e, t, a), v) {
            case "Array":
            case "Object":
              for (p = J(t), u = 0, h = E(p); u < h; u++) f = p[u], S(a, f, bt(t[f], e, r));
              break;
            case "Map":
              t.forEach((function(t, n) {
                X(a, bt(n, e, r), bt(t, e, r))
              }));
              break;
            case "Set":
              t.forEach((function(t) {
                Z(a, bt(t, e, r))
              }));
              break;
            case "Error":
              x(a, "message", bt(t.message, e, r)), b(t, "cause") && x(a, "cause", bt(t.cause, e, r)), "AggregateError" === i && (a.errors = bt(t.errors, e, r));
            case "DOMException":
              A && x(a, "stack", bt(t.stack, e, r))
          }
          return a
        },
        St = function(t, e) {
          if (!d(t)) return t;
          if (U(e, t)) return Y(e, t);
          var r, n, i, a, s, o, l, u;
          if (t instanceof yt) switch (r = t.type, n = t.object, r) {
            case "ArrayBuffer":
            case "SharedArrayBuffer":
              u = vt(n, e, r);
              break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
              i = t.metadata, u = gt(n, r, i.offset, i.length, e)
          } else switch (y(t)) {
            case "Array":
            case "Object":
              for (o = J(t), a = 0, s = E(o); a < s; a++) t[l = o[a]] = St(t[l], e);
              break;
            case "Map":
              u = new $, t.forEach((function(t, r) {
                X(u, St(r, e), St(t, e))
              }));
              break;
            case "Set":
              u = new K, t.forEach((function(t) {
                Z(u, St(t, e))
              }));
              break;
            case "Error":
              t.message = St(t.message, e), b(t, "cause") && (t.cause = St(t.cause, e)), "AggregateError" === t.name && (t.errors = St(t.errors, e));
            case "DOMException":
              A && (t.stack = St(t.stack, e))
          }
          return X(e, t, u || t), u || t
        };
      a({
        global: !0,
        enumerable: !0,
        sham: !M,
        forced: ht
      }, {
        structuredClone: function(t) {
          var e, r, n = _(arguments.length, 1) > 1 && !f(arguments[1]) ? g(arguments[1]) : void 0,
            i = n ? n.transfer : void 0,
            a = !1;
          void 0 !== i && (r = function(t, e) {
            if (!d(t)) throw new V("Transfer option cannot be converted to a sequence");
            var r = [];
            v(t, (function(t) {
              Q(r, g(t))
            }));
            for (var n, i, a, o, l, u = 0, h = E(r), f = []; u < h;)
              if (n = r[u++], "ArrayBuffer" !== (i = y(n))) {
                if (U(e, n)) throw new q("Duplicate transferable", at);
                if (M) o = ut(n, {
                  transfer: [n]
                });
                else switch (i) {
                  case "ImageBitmap":
                    a = s.OffscreenCanvas, p(a) || dt(i, st);
                    try {
                      (l = new a(n.width, n.height)).getContext("bitmaprenderer").transferFromImageBitmap(n), o = l.transferToImageBitmap()
                    } catch (t) {}
                    break;
                  case "AudioData":
                  case "VideoFrame":
                    c(n.clone) && c(n.close) || dt(i, st);
                    try {
                      o = n.clone(), n.close()
                    } catch (t) {}
                    break;
                  case "MediaSourceHandle":
                  case "MessagePort":
                  case "OffscreenCanvas":
                  case "ReadableStream":
                  case "TransformStream":
                  case "WritableStream":
                    dt(i, st)
                }
                if (void 0 === o) throw new q("This object cannot be transferred: " + i, at);
                X(e, n, o)
              } else Q(f, n);
            return f
          }(i, e = new $), a = !!E(r));
          var o = bt(t, e, a);
          return a && (function(t, e) {
            for (var r, n, i = 0, a = E(t); i < a;) {
              if (r = t[i++], U(e, r)) throw new q("Duplicate transferable", at);
              C ? n = C(r, void 0, !0) : (c(r.transfer) || dt("ArrayBuffer", st), n = r.transfer()), X(e, r, n)
            }
          }(i, e = new $), o = St(o, e)), o
        }
      })
    },
    33719: (t, e, r) => {
      "use strict";
      var n = r(99244),
        i = r(43436),
        a = r(1611),
        s = r(61704),
        o = URLSearchParams,
        l = o.prototype,
        u = i(l.append),
        h = i(l.delete),
        c = i(l.forEach),
        p = i([].push),
        f = new o("a=1&a=2&b=3");
      f.delete("a", 1), f.delete("b", void 0), f + "" != "a=2" && n(l, "delete", (function(t) {
        var e = arguments.length,
          r = e < 2 ? void 0 : arguments[1];
        if (e && void 0 === r) return h(this, t);
        var n = [];
        c(this, (function(t, e) {
          p(n, {
            key: e,
            value: t
          })
        })), s(e, 1);
        for (var i, o = a(t), l = a(r), f = 0, d = 0, m = !1, v = n.length; f < v;) i = n[f++], m || i.key === o ? (m = !0, h(this, i.key)) : d++;
        for (; d < v;)(i = n[d++]).key === o && i.value === l || u(this, i.key, i.value)
      }), {
        enumerable: !0,
        unsafe: !0
      })
    },
    95938: (t, e, r) => {
      "use strict";
      var n = r(99244),
        i = r(43436),
        a = r(1611),
        s = r(61704),
        o = URLSearchParams,
        l = o.prototype,
        u = i(l.getAll),
        h = i(l.has),
        c = new o("a=1");
      !c.has("a", 2) && c.has("a", void 0) || n(l, "has", (function(t) {
        var e = arguments.length,
          r = e < 2 ? void 0 : arguments[1];
        if (e && void 0 === r) return h(this, t);
        var n = u(this, t);
        s(e, 1);
        for (var i = a(r), o = 0; o < n.length;)
          if (n[o++] === i) return !0;
        return !1
      }), {
        enumerable: !0,
        unsafe: !0
      })
    },
    45669: (t, e, r) => {
      "use strict";
      var n = r(23736),
        i = r(43436),
        a = r(40398),
        s = URLSearchParams.prototype,
        o = i(s.forEach);
      n && !("size" in s) && a(s, "size", {
        get: function() {
          var t = 0;
          return o(this, (function() {
            t++
          })), t
        },
        configurable: !0,
        enumerable: !0
      })
    },
    26266: (t, e, r) => {
      "use strict";
      var n = r(97682),
        i = r(15155),
        a = r(16139),
        s = r(61704),
        o = r(1611),
        l = r(72652),
        u = i("URL");
      n({
        target: "URL",
        stat: !0,
        forced: !(l && a((function() {
          u.canParse()
        })))
      }, {
        canParse: function(t) {
          var e = s(arguments.length, 1),
            r = o(t),
            n = e < 2 || void 0 === arguments[1] ? void 0 : o(arguments[1]);
          try {
            return !!new u(r, n)
          } catch (t) {
            return !1
          }
        }
      })
    },
    14099: (t, e, r) => {
      "use strict";
      var n = r(59785);
      r.o(n, "ThemeProvider") && r.d(e, {
        ThemeProvider: function() {
          return n.ThemeProvider
        }
      })
    },
    300: (t, e, r) => {
      "use strict";
      r.d(e, {
        Wx: () => u
      });
      var n = r(71403),
        i = (Object.defineProperty, new Map),
        a = new WeakMap,
        s = 0,
        o = void 0;

      function l(t, e, r = {}, n = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const i = t.getBoundingClientRect();
          return e(n, {
            isIntersecting: n,
            target: t,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: l,
          observer: u,
          elements: h
        } = function(t) {
          const e = function(t) {
            return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
              return `${e}_${"root"===e?(r=t.root,r?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0"):t[e]}`;
              var r
            })).toString()
          }(t);
          let r = i.get(e);
          if (!r) {
            const n = new Map;
            let a;
            const s = new IntersectionObserver((e => {
              e.forEach((e => {
                var r;
                const i = e.isIntersecting && a.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = i), null == (r = n.get(e.target)) || r.forEach((t => {
                  t(i, e)
                }))
              }))
            }), t);
            a = s.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
              id: e,
              observer: s,
              elements: n
            }, i.set(e, r)
          }
          return r
        }(r), c = h.get(t) || [];
        return h.has(t) || h.set(t, c), c.push(e), u.observe(t),
          function() {
            c.splice(c.indexOf(e), 1), 0 === c.length && (h.delete(t), u.unobserve(t)), 0 === h.size && (u.disconnect(), i.delete(l))
          }
      }

      function u({
        threshold: t,
        delay: e,
        trackVisibility: r,
        rootMargin: i,
        root: a,
        triggerOnce: s,
        skip: o,
        initialInView: u,
        fallbackInView: h,
        onChange: c
      } = {}) {
        var p;
        const [f, d] = n.useState(null), m = n.useRef(), [v, g] = n.useState({
          inView: !!u,
          entry: void 0
        });
        m.current = c, n.useEffect((() => {
          if (o || !f) return;
          let n;
          return n = l(f, ((t, e) => {
            g({
              inView: t,
              entry: e
            }), m.current && m.current(t, e), e.isIntersecting && s && n && (n(), n = void 0)
          }), {
            root: a,
            rootMargin: i,
            threshold: t,
            trackVisibility: r,
            delay: e
          }, h), () => {
            n && n()
          }
        }), [Array.isArray(t) ? t.toString() : t, f, a, i, s, o, r, h, e]);
        const y = null == (p = v.entry) ? void 0 : p.target,
          b = n.useRef();
        f || !y || s || o || b.current === y || (b.current = y, g({
          inView: !!u,
          entry: void 0
        }));
        const S = [d, v.inView, v.entry];
        return S.ref = S[0], S.inView = S[1], S.entry = S[2], S
      }
      n.Component
    },
    66573: (t, e, r) => {
      "use strict";
      r.d(e, {
        Vx: () => i
      }), r(93004);
      var n = r(40825);

      function i(t) {
        let {
          swiper: e,
          extendParams: r,
          on: i,
          emit: a
        } = t;

        function s(t) {
          let r;
          return t && "string" == typeof t && e.isElement && (r = e.el.querySelector(t), r) ? r : (t && ("string" == typeof t && (r = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && r.length > 1 && 1 === e.el.querySelectorAll(t).length && (r = e.el.querySelector(t))), t && !r ? t : r)
        }

        function o(t, r) {
          const i = e.params.navigation;
          (t = (0, n.m)(t)).forEach((t => {
            t && (t.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = r), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass))
          }))
        }

        function l() {
          const {
            nextEl: t,
            prevEl: r
          } = e.navigation;
          if (e.params.loop) return o(r, !1), void o(t, !1);
          o(r, e.isBeginning && !e.params.rewind), o(t, e.isEnd && !e.params.rewind)
        }

        function u(t) {
          t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), a("navigationPrev"))
        }

        function h(t) {
          t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), a("navigationNext"))
        }

        function c() {
          const t = e.params.navigation;
          if (e.params.navigation = function(t, e, r, i) {
              return t.params.createElements && Object.keys(i).forEach((a => {
                if (!r[a] && !0 === r.auto) {
                  let s = (0, n.e)(t.el, `.${i[a]}`)[0];
                  s || (s = (0, n.c)("div", i[a]), s.className = i[a], t.el.append(s)), r[a] = s, e[a] = s
                }
              })), r
            }(e, e.originalParams.navigation, e.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
          let r = s(t.nextEl),
            i = s(t.prevEl);
          Object.assign(e.navigation, {
            nextEl: r,
            prevEl: i
          }), r = (0, n.m)(r), i = (0, n.m)(i);
          const a = (r, n) => {
            r && r.addEventListener("click", "next" === n ? h : u), !e.enabled && r && r.classList.add(...t.lockClass.split(" "))
          };
          r.forEach((t => a(t, "next"))), i.forEach((t => a(t, "prev")))
        }

        function p() {
          let {
            nextEl: t,
            prevEl: r
          } = e.navigation;
          t = (0, n.m)(t), r = (0, n.m)(r);
          const i = (t, r) => {
            t.removeEventListener("click", "next" === r ? h : u), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
          };
          t.forEach((t => i(t, "next"))), r.forEach((t => i(t, "prev")))
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), e.navigation = {
          nextEl: null,
          prevEl: null
        }, i("init", (() => {
          !1 === e.params.navigation.enabled ? f() : (c(), l())
        })), i("toEdge fromEdge lock unlock", (() => {
          l()
        })), i("destroy", (() => {
          p()
        })), i("enable disable", (() => {
          let {
            nextEl: t,
            prevEl: r
          } = e.navigation;
          t = (0, n.m)(t), r = (0, n.m)(r), e.enabled ? l() : [...t, ...r].filter((t => !!t)).forEach((t => t.classList.add(e.params.navigation.lockClass)))
        })), i("click", ((t, r) => {
          let {
            nextEl: i,
            prevEl: s
          } = e.navigation;
          i = (0, n.m)(i), s = (0, n.m)(s);
          const o = r.target;
          if (e.params.navigation.hideOnClick && !s.includes(o) && !i.includes(o)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
            let t;
            i.length ? t = i[0].classList.contains(e.params.navigation.hiddenClass) : s.length && (t = s[0].classList.contains(e.params.navigation.hiddenClass)), a(!0 === t ? "navigationShow" : "navigationHide"), [...i, ...s].filter((t => !!t)).forEach((t => t.classList.toggle(e.params.navigation.hiddenClass)))
          }
        }));
        const f = () => {
          e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), l()
          },
          disable: f,
          update: l,
          init: c,
          destroy: p
        })
      }
    },
    93004: (t, e, r) => {
      "use strict";

      function n(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
      }

      function i(t, e) {
        void 0 === t && (t = {}), void 0 === e && (e = {}), Object.keys(e).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : n(e[r]) && n(t[r]) && Object.keys(e[r]).length > 0 && i(t[r], e[r])
        }))
      }
      r.d(e, {
        a: () => l,
        g: () => s
      });
      const a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function s() {
        const t = "undefined" != typeof document ? document : {};
        return i(t, a), t
      }
      const o = {
        document: a,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
          "undefined" != typeof setTimeout && clearTimeout(t)
        }
      };

      function l() {
        const t = "undefined" != typeof window ? window : {};
        return i(t, o), t
      }
    },
    40825: (t, e, r) => {
      "use strict";
      r.d(e, {
        a: () => b,
        c: () => d,
        d: () => s,
        e: () => p,
        f: () => S,
        g: () => y,
        i: () => o,
        m: () => x,
        n: () => a,
        o: () => g,
        p: () => v,
        q: () => m,
        r: () => c,
        s: () => h,
        t: () => f,
        u: () => u,
        v: () => i
      });
      var n = r(93004);

      function i(t) {
        const e = t;
        Object.keys(e).forEach((t => {
          try {
            e[t] = null
          } catch (t) {}
          try {
            delete e[t]
          } catch (t) {}
        }))
      }

      function a(t, e) {
        return void 0 === e && (e = 0), setTimeout(t, e)
      }

      function s() {
        return Date.now()
      }

      function o(t, e) {
        void 0 === e && (e = "x");
        const r = (0, n.a)();
        let i, a, s;
        const o = function(t) {
          const e = (0, n.a)();
          let r;
          return e.getComputedStyle && (r = e.getComputedStyle(t, null)), !r && t.currentStyle && (r = t.currentStyle), r || (r = t.style), r
        }(t);
        return r.WebKitCSSMatrix ? (a = o.transform || o.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((t => t.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === a ? "" : a)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === e && (a = r.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (a = r.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), a || 0
      }

      function l(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
      }

      function u() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          e = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((t => e.indexOf(t) < 0));
            for (let e = 0, n = r.length; e < n; e += 1) {
              const n = r[e],
                a = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== a && a.enumerable && (l(t[n]) && l(i[n]) ? i[n].__swiper__ ? t[n] = i[n] : u(t[n], i[n]) : !l(t[n]) && l(i[n]) ? (t[n] = {}, i[n].__swiper__ ? t[n] = i[n] : u(t[n], i[n])) : t[n] = i[n])
            }
          }
        }
        var r;
        return t
      }

      function h(t, e, r) {
        t.style.setProperty(e, r)
      }

      function c(t) {
        let {
          swiper: e,
          targetPosition: r,
          side: i
        } = t;
        const a = (0, n.a)(),
          s = -e.translate;
        let o, l = null;
        const u = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
        const h = r > s ? "next" : "prev",
          c = (t, e) => "next" === h && t >= e || "prev" === h && t <= e,
          p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const t = Math.max(Math.min((o - l) / u, 1), 0),
              n = .5 - Math.cos(t * Math.PI) / 2;
            let h = s + n * (r - s);
            if (c(h, r) && (h = r), e.wrapperEl.scrollTo({
                [i]: h
              }), c(h, r)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                [i]: h
              })
            })), void a.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = a.requestAnimationFrame(p)
          };
        p()
      }

      function p(t, e) {
        return void 0 === e && (e = ""), [...t.children].filter((t => t.matches(e)))
      }

      function f(t) {
        try {
          return void console.warn(t)
        } catch (t) {}
      }

      function d(t, e) {
        void 0 === e && (e = []);
        const r = document.createElement(t);
        return r.classList.add(...Array.isArray(e) ? e : function(t) {
          return void 0 === t && (t = ""), t.trim().split(" ").filter((t => !!t.trim()))
        }(e)), r
      }

      function m(t, e) {
        const r = [];
        for (; t.previousElementSibling;) {
          const n = t.previousElementSibling;
          e ? n.matches(e) && r.push(n) : r.push(n), t = n
        }
        return r
      }

      function v(t, e) {
        const r = [];
        for (; t.nextElementSibling;) {
          const n = t.nextElementSibling;
          e ? n.matches(e) && r.push(n) : r.push(n), t = n
        }
        return r
      }

      function g(t, e) {
        return (0, n.a)().getComputedStyle(t, null).getPropertyValue(e)
      }

      function y(t) {
        let e, r = t;
        if (r) {
          for (e = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (e += 1);
          return e
        }
      }

      function b(t, e) {
        const r = [];
        let n = t.parentElement;
        for (; n;) e ? n.matches(e) && r.push(n) : r.push(n), n = n.parentElement;
        return r
      }

      function S(t, e, r) {
        const i = (0, n.a)();
        return r ? t["width" === e ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-left" : "margin-bottom")) : t.offsetWidth
      }

      function x(t) {
        return (Array.isArray(t) ? t : [t]).filter((t => !!t))
      }
    },
    81902: (t, e, r) => {
      "use strict";
      r.d(e, {
        RC: () => K,
        qr: () => Z
      });
      var n = r(71403),
        i = r(93004),
        a = r(40825);
      let s, o, l;

      function u() {
        return s || (s = function() {
          const t = (0, i.a)(),
            e = (0, i.g)();
          return {
            smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
            touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
          }
        }()), s
      }

      function h(t) {
        return void 0 === t && (t = {}), o || (o = function(t) {
          let {
            userAgent: e
          } = void 0 === t ? {} : t;
          const r = u(),
            n = (0, i.a)(),
            a = n.navigator.platform,
            s = e || n.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = n.screen.width,
            h = n.screen.height,
            c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = s.match(/(iPad).*OS\s([\d_]+)/);
          const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            d = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === a;
          let v = "MacIntel" === a;
          return !p && v && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${h}`) >= 0 && (p = s.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), v = !1), c && !m && (o.os = "android", o.android = !0), (p || d || f) && (o.os = "ios", o.ios = !0), o
        }(t)), o
      }
      var c = {
        on(t, e, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof e) return n;
          const i = r ? "unshift" : "push";
          return t.split(" ").forEach((t => {
            n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][i](e)
          })), n
        },
        once(t, e, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof e) return n;

          function i() {
            n.off(t, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            e.apply(n, a)
          }
          return i.__emitterProxy = e, n.on(t, i, r)
        },
        onAny(t, e) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const n = e ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(t) < 0 && r.eventsAnyListeners[n](t), r
        },
        offAny(t) {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsAnyListeners) return e;
          const r = e.eventsAnyListeners.indexOf(t);
          return r >= 0 && e.eventsAnyListeners.splice(r, 1), e
        },
        off(t, e) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (t.split(" ").forEach((t => {
            void 0 === e ? r.eventsListeners[t] = [] : r.eventsListeners[t] && r.eventsListeners[t].forEach(((n, i) => {
              (n === e || n.__emitterProxy && n.__emitterProxy === e) && r.eventsListeners[t].splice(i, 1)
            }))
          })), r) : r
        },
        emit() {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let e, r, n;
          for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
          return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], r = a.slice(1, a.length), n = t) : (e = a[0].events, r = a[0].data, n = a[0].context || t), r.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
              t.apply(n, [e, ...r])
            })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((t => {
              t.apply(n, r)
            }))
          })), t
        }
      };
      const p = (t, e) => {
          if (!t || t.destroyed || !t.params) return;
          const r = e.closest(t.isElement ? "swiper-slide" : `.${t.params.slideClass}`);
          if (r) {
            let e = r.querySelector(`.${t.params.lazyPreloaderClass}`);
            !e && t.isElement && (r.shadowRoot ? e = r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (e = r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), e && e.remove())
            }))), e && e.remove()
          }
        },
        f = (t, e) => {
          if (!t.slides[e]) return;
          const r = t.slides[e].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        d = t => {
          if (!t || t.destroyed || !t.params) return;
          let e = t.params.lazyPreloadPrevNext;
          const r = t.slides.length;
          if (!r || !e || e < 0) return;
          e = Math.min(e, r);
          const n = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
            i = t.activeIndex;
          if (t.params.grid && t.params.grid.rows > 1) {
            const r = i,
              a = [r - e];
            return a.push(...Array.from({
              length: e
            }).map(((t, e) => r + n + e))), void t.slides.forEach(((e, r) => {
              a.includes(e.column) && f(t, r)
            }))
          }
          const a = i + n - 1;
          if (t.params.rewind || t.params.loop)
            for (let n = i - e; n <= a + e; n += 1) {
              const e = (n % r + r) % r;
              (e < i || e > a) && f(t, e)
            } else
              for (let n = Math.max(i - e, 0); n <= Math.min(a + e, r - 1); n += 1) n !== i && (n > a || n < i) && f(t, n)
        };
      var m = {
        updateSize: function() {
          const t = this;
          let e, r;
          const n = t.el;
          e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : n.clientWidth, r = void 0 !== t.params.height && null !== t.params.height ? t.params.height : n.clientHeight, 0 === e && t.isHorizontal() || 0 === r && t.isVertical() || (e = e - parseInt((0, a.o)(n, "padding-left") || 0, 10) - parseInt((0, a.o)(n, "padding-right") || 0, 10), r = r - parseInt((0, a.o)(n, "padding-top") || 0, 10) - parseInt((0, a.o)(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(r) && (r = 0), Object.assign(t, {
            width: e,
            height: r,
            size: t.isHorizontal() ? e : r
          }))
        },
        updateSlides: function() {
          const t = this;

          function e(e, r) {
            return parseFloat(e.getPropertyValue(t.getDirectionLabel(r)) || 0)
          }
          const r = t.params,
            {
              wrapperEl: n,
              slidesEl: i,
              size: s,
              rtlTranslate: o,
              wrongRTL: l
            } = t,
            u = t.virtual && r.virtual.enabled,
            h = u ? t.virtual.slides.length : t.slides.length,
            c = (0, a.e)(i, `.${t.params.slideClass}, swiper-slide`),
            p = u ? t.virtual.slides.length : c.length;
          let f = [];
          const d = [],
            m = [];
          let v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(t));
          let g = r.slidesOffsetAfter;
          "function" == typeof g && (g = r.slidesOffsetAfter.call(t));
          const y = t.snapGrid.length,
            b = t.slidesGrid.length;
          let S = r.spaceBetween,
            x = -v,
            E = 0,
            _ = 0;
          if (void 0 === s) return;
          "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * s : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, c.forEach((t => {
            o ? t.style.marginLeft = "" : t.style.marginRight = "", t.style.marginBottom = "", t.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, a.s)(n, "--swiper-centered-offset-before", ""), (0, a.s)(n, "--swiper-centered-offset-after", ""));
          const w = r.grid && r.grid.rows > 1 && t.grid;
          let P;
          w ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
          const T = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((t => void 0 !== r.breakpoints[t].slidesPerView)).length > 0;
          for (let n = 0; n < p; n += 1) {
            let i;
            if (P = 0, c[n] && (i = c[n]), w && t.grid.updateSlide(n, i, c), !c[n] || "none" !== (0, a.o)(i, "display")) {
              if ("auto" === r.slidesPerView) {
                T && (c[n].style[t.getDirectionLabel("width")] = "");
                const s = getComputedStyle(i),
                  o = i.style.transform,
                  l = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), r.roundLengths) P = t.isHorizontal() ? (0, a.f)(i, "width", !0) : (0, a.f)(i, "height", !0);
                else {
                  const t = e(s, "width"),
                    r = e(s, "padding-left"),
                    n = e(s, "padding-right"),
                    a = e(s, "margin-left"),
                    o = e(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) P = t + a + o;
                  else {
                    const {
                      clientWidth: e,
                      offsetWidth: s
                    } = i;
                    P = t + r + n + a + o + (s - e)
                  }
                }
                o && (i.style.transform = o), l && (i.style.webkitTransform = l), r.roundLengths && (P = Math.floor(P))
              } else P = (s - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (P = Math.floor(P)), c[n] && (c[n].style[t.getDirectionLabel("width")] = `${P}px`);
              c[n] && (c[n].swiperSlideSize = P), m.push(P), r.centeredSlides ? (x = x + P / 2 + E / 2 + S, 0 === E && 0 !== n && (x = x - s / 2 - S), 0 === n && (x = x - s / 2 - S), Math.abs(x) < .001 && (x = 0), r.roundLengths && (x = Math.floor(x)), _ % r.slidesPerGroup == 0 && f.push(x), d.push(x)) : (r.roundLengths && (x = Math.floor(x)), (_ - Math.min(t.params.slidesPerGroupSkip, _)) % t.params.slidesPerGroup == 0 && f.push(x), d.push(x), x = x + P + S), t.virtualSize += P + S, E = P, _ += 1
            }
          }
          if (t.virtualSize = Math.max(t.virtualSize, s) + g, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${t.virtualSize+S}px`), r.setWrapperSize && (n.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), w && t.grid.updateWrapperSize(P, f), !r.centeredSlides) {
            const e = [];
            for (let n = 0; n < f.length; n += 1) {
              let i = f[n];
              r.roundLengths && (i = Math.floor(i)), f[n] <= t.virtualSize - s && e.push(i)
            }
            f = e, Math.floor(t.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - s)
          }
          if (u && r.loop) {
            const e = m[0] + S;
            if (r.slidesPerGroup > 1) {
              const n = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                i = e * r.slidesPerGroup;
              for (let t = 0; t < n; t += 1) f.push(f[f.length - 1] + i)
            }
            for (let n = 0; n < t.virtual.slidesBefore + t.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + e), d.push(d[d.length - 1] + e), t.virtualSize += e
          }
          if (0 === f.length && (f = [0]), 0 !== S) {
            const e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
            c.filter(((t, e) => !(r.cssMode && !r.loop) || e !== c.length - 1)).forEach((t => {
              t.style[e] = `${S}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let t = 0;
            m.forEach((e => {
              t += e + (S || 0)
            })), t -= S;
            const e = t - s;
            f = f.map((t => t <= 0 ? -v : t > e ? e + g : t))
          }
          if (r.centerInsufficientSlides) {
            let t = 0;
            if (m.forEach((e => {
                t += e + (S || 0)
              })), t -= S, t < s) {
              const e = (s - t) / 2;
              f.forEach(((t, r) => {
                f[r] = t - e
              })), d.forEach(((t, r) => {
                d[r] = t + e
              }))
            }
          }
          if (Object.assign(t, {
              slides: c,
              snapGrid: f,
              slidesGrid: d,
              slidesSizesGrid: m
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, a.s)(n, "--swiper-centered-offset-before", -f[0] + "px"), (0, a.s)(n, "--swiper-centered-offset-after", t.size / 2 - m[m.length - 1] / 2 + "px");
            const e = -t.snapGrid[0],
              r = -t.slidesGrid[0];
            t.snapGrid = t.snapGrid.map((t => t + e)), t.slidesGrid = t.slidesGrid.map((t => t + r))
          }
          if (p !== h && t.emit("slidesLengthChange"), f.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), d.length !== b && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !(u || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const e = `${r.containerModifierClass}backface-hidden`,
              n = t.el.classList.contains(e);
            p <= r.maxBackfaceHiddenSlides ? n || t.el.classList.add(e) : n && t.el.classList.remove(e)
          }
        },
        updateAutoHeight: function(t) {
          const e = this,
            r = [],
            n = e.virtual && e.params.virtual.enabled;
          let i, a = 0;
          "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
          const s = t => n ? e.slides[e.getSlideIndexByData(t)] : e.slides[t];
          if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)(e.visibleSlides || []).forEach((t => {
              r.push(t)
            }));
            else
              for (i = 0; i < Math.ceil(e.params.slidesPerView); i += 1) {
                const t = e.activeIndex + i;
                if (t > e.slides.length && !n) break;
                r.push(s(t))
              } else r.push(s(e.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const t = r[i].offsetHeight;
              a = t > a ? t : a
            }(a || 0 === a) && (e.wrapperEl.style.height = `${a}px`)
        },
        updateSlidesOffset: function() {
          const t = this,
            e = t.slides,
            r = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
          for (let n = 0; n < e.length; n += 1) e[n].swiperSlideOffset = (t.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - r - t.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(t) {
          void 0 === t && (t = this && this.translate || 0);
          const e = this,
            r = e.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: a
            } = e;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
          let s = -t;
          i && (s = t), n.forEach((t => {
            t.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), e.visibleSlidesIndexes = [], e.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : "string" == typeof o && (o = parseFloat(o));
          for (let t = 0; t < n.length; t += 1) {
            const l = n[t];
            let u = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (u -= n[0].swiperSlideOffset);
            const h = (s + (r.centeredSlides ? e.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
              c = (s - a[0] + (r.centeredSlides ? e.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
              p = -(s - u),
              f = p + e.slidesSizesGrid[t],
              d = p >= 0 && p <= e.size - e.slidesSizesGrid[t];
            (p >= 0 && p < e.size - 1 || f > 1 && f <= e.size || p <= 0 && f >= e.size) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(t), n[t].classList.add(r.slideVisibleClass)), d && n[t].classList.add(r.slideFullyVisibleClass), l.progress = i ? -h : h, l.originalProgress = i ? -c : c
          }
        },
        updateProgress: function(t) {
          const e = this;
          if (void 0 === t) {
            const r = e.rtlTranslate ? -1 : 1;
            t = e && e.translate && e.translate * r || 0
          }
          const r = e.params,
            n = e.maxTranslate() - e.minTranslate();
          let {
            progress: i,
            isBeginning: a,
            isEnd: s,
            progressLoop: o
          } = e;
          const l = a,
            u = s;
          if (0 === n) i = 0, a = !0, s = !0;
          else {
            i = (t - e.minTranslate()) / n;
            const r = Math.abs(t - e.minTranslate()) < 1,
              o = Math.abs(t - e.maxTranslate()) < 1;
            a = r || i <= 0, s = o || i >= 1, r && (i = 0), o && (i = 1)
          }
          if (r.loop) {
            const r = e.getSlideIndexByData(0),
              n = e.getSlideIndexByData(e.slides.length - 1),
              i = e.slidesGrid[r],
              a = e.slidesGrid[n],
              s = e.slidesGrid[e.slidesGrid.length - 1],
              l = Math.abs(t);
            o = l >= i ? (l - i) / s : (l + s - a) / s, o > 1 && (o -= 1)
          }
          Object.assign(e, {
            progress: i,
            progressLoop: o,
            isBeginning: a,
            isEnd: s
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && e.updateSlidesProgress(t), a && !l && e.emit("reachBeginning toEdge"), s && !u && e.emit("reachEnd toEdge"), (l && !a || u && !s) && e.emit("fromEdge"), e.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const t = this,
            {
              slides: e,
              params: r,
              slidesEl: n,
              activeIndex: i
            } = t,
            s = t.virtual && r.virtual.enabled,
            o = t.grid && r.grid && r.grid.rows > 1,
            l = t => (0, a.e)(n, `.${r.slideClass}${t}, swiper-slide${t}`)[0];
          let u, h, c;
          if (e.forEach((t => {
              t.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), s)
            if (r.loop) {
              let e = i - t.virtual.slidesBefore;
              e < 0 && (e = t.virtual.slides.length + e), e >= t.virtual.slides.length && (e -= t.virtual.slides.length), u = l(`[data-swiper-slide-index="${e}"]`)
            } else u = l(`[data-swiper-slide-index="${i}"]`);
          else o ? (u = e.filter((t => t.column === i))[0], c = e.filter((t => t.column === i + 1))[0], h = e.filter((t => t.column === i - 1))[0]) : u = e[i];
          u && (u.classList.add(r.slideActiveClass), o ? (c && c.classList.add(r.slideNextClass), h && h.classList.add(r.slidePrevClass)) : (c = (0, a.p)(u, `.${r.slideClass}, swiper-slide`)[0], r.loop && !c && (c = e[0]), c && c.classList.add(r.slideNextClass), h = (0, a.q)(u, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !h && (h = e[e.length - 1]), h && h.classList.add(r.slidePrevClass))), t.emitSlidesClasses()
        },
        updateActiveIndex: function(t) {
          const e = this,
            r = e.rtlTranslate ? e.translate : -e.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: a,
              realIndex: s,
              snapIndex: o
            } = e;
          let l, u = t;
          const h = t => {
            let r = t - e.virtual.slidesBefore;
            return r < 0 && (r = e.virtual.slides.length + r), r >= e.virtual.slides.length && (r -= e.virtual.slides.length), r
          };
          if (void 0 === u && (u = function(t) {
              const {
                slidesGrid: e,
                params: r
              } = t, n = t.rtlTranslate ? t.translate : -t.translate;
              let i;
              for (let t = 0; t < e.length; t += 1) void 0 !== e[t + 1] ? n >= e[t] && n < e[t + 1] - (e[t + 1] - e[t]) / 2 ? i = t : n >= e[t] && n < e[t + 1] && (i = t + 1) : n >= e[t] && (i = t);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(e)), n.indexOf(r) >= 0) l = n.indexOf(r);
          else {
            const t = Math.min(i.slidesPerGroupSkip, u);
            l = t + Math.floor((u - t) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), u === a && !e.params.loop) return void(l !== o && (e.snapIndex = l, e.emit("snapIndexChange")));
          if (u === a && e.params.loop && e.virtual && e.params.virtual.enabled) return void(e.realIndex = h(u));
          const c = e.grid && i.grid && i.grid.rows > 1;
          let p;
          if (e.virtual && i.virtual.enabled && i.loop) p = h(u);
          else if (c) {
            const t = e.slides.filter((t => t.column === u))[0];
            let r = parseInt(t.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(e.slides.indexOf(t), 0)), p = Math.floor(r / i.grid.rows)
          } else if (e.slides[u]) {
            const t = e.slides[u].getAttribute("data-swiper-slide-index");
            p = t ? parseInt(t, 10) : u
          } else p = u;
          Object.assign(e, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: s,
            realIndex: p,
            previousIndex: a,
            activeIndex: u
          }), e.initialized && d(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (s !== p && e.emit("realIndexChange"), e.emit("slideChange"))
        },
        updateClickedSlide: function(t, e) {
          const r = this,
            n = r.params;
          let i = t.closest(`.${n.slideClass}, swiper-slide`);
          !i && r.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((t => {
            !i && t.matches && t.matches(`.${n.slideClass}, swiper-slide`) && (i = t)
          }));
          let a, s = !1;
          if (i)
            for (let t = 0; t < r.slides.length; t += 1)
              if (r.slides[t] === i) {
                s = !0, a = t;
                break
              } if (!i || !s) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function v(t) {
        let {
          swiper: e,
          runCallbacks: r,
          direction: n,
          step: i
        } = t;
        const {
          activeIndex: a,
          previousIndex: s
        } = e;
        let o = n;
        if (o || (o = a > s ? "next" : a < s ? "prev" : "reset"), e.emit(`transition${i}`), r && a !== s) {
          if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
          e.emit(`slideChangeTransition${i}`), "next" === o ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
        }
      }
      var g = {
          slideTo: function(t, e, r, n, i) {
            void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === r && (r = !0), "string" == typeof t && (t = parseInt(t, 10));
            const s = this;
            let o = t;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: u,
              slidesGrid: h,
              previousIndex: c,
              activeIndex: p,
              rtlTranslate: f,
              wrapperEl: d,
              enabled: m
            } = s;
            if (s.animating && l.preventInteractionOnTransition || !m && !n && !i || s.destroyed) return !1;
            const v = Math.min(s.params.slidesPerGroupSkip, o);
            let g = v + Math.floor((o - v) / s.params.slidesPerGroup);
            g >= u.length && (g = u.length - 1);
            const y = -u[g];
            if (l.normalizeSlideIndex)
              for (let t = 0; t < h.length; t += 1) {
                const e = -Math.floor(100 * y),
                  r = Math.floor(100 * h[t]),
                  n = Math.floor(100 * h[t + 1]);
                void 0 !== h[t + 1] ? e >= r && e < n - (n - r) / 2 ? o = t : e >= r && e < n && (o = t + 1) : e >= r && (o = t)
              }
            if (s.initialized && o !== p) {
              if (!s.allowSlideNext && (f ? y > s.translate && y > s.minTranslate() : y < s.translate && y < s.minTranslate())) return !1;
              if (!s.allowSlidePrev && y > s.translate && y > s.maxTranslate() && (p || 0) !== o) return !1
            }
            let b;
            if (o !== (c || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(y), b = o > p ? "next" : o < p ? "prev" : "reset", f && -y === s.translate || !f && y === s.translate) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(y), "reset" !== b && (s.transitionStart(r, b), s.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const t = s.isHorizontal(),
                r = f ? y : -y;
              if (0 === e) {
                const e = s.virtual && s.params.virtual.enabled;
                e && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), e && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  d[t ? "scrollLeft" : "scrollTop"] = r
                }))) : d[t ? "scrollLeft" : "scrollTop"] = r, e && requestAnimationFrame((() => {
                  s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                }))
              } else {
                if (!s.support.smoothScroll) return (0, a.r)({
                  swiper: s,
                  targetPosition: r,
                  side: t ? "left" : "top"
                }), !0;
                d.scrollTo({
                  [t ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return s.setTransition(e), s.setTranslate(y), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(r, b), 0 === e ? s.transitionEnd(r, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(t) {
              s && !s.destroyed && t.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, b))
            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(t, e, r, n) {
            void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === r && (r = !0), "string" == typeof t && (t = parseInt(t, 10));
            const i = this;
            if (i.destroyed) return;
            const a = i.grid && i.params.grid && i.params.grid.rows > 1;
            let s = t;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) s += i.virtual.slidesBefore;
              else {
                let t;
                if (a) {
                  const e = s * i.params.grid.rows;
                  t = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else t = i.getSlideIndexByData(s);
                const e = a ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let n = i.params.slidesPerView;
                "auto" === n ? n = i.slidesPerViewDynamic() : (n = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && n % 2 == 0 && (n += 1));
                let o = e - t < n;
                if (r && (o = o || t < Math.ceil(n / 2)), o) {
                  const n = r ? t < i.activeIndex ? "prev" : "next" : t - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: n,
                    slideTo: !0,
                    activeSlideIndex: "next" === n ? t + 1 : t - e + 1,
                    slideRealIndex: "next" === n ? i.realIndex : void 0
                  })
                }
                if (a) {
                  const t = s * i.params.grid.rows;
                  s = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else s = i.getSlideIndexByData(s)
              } return requestAnimationFrame((() => {
              i.slideTo(s, e, r, n)
            })), i
          },
          slideNext: function(t, e, r) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const n = this,
              {
                enabled: i,
                params: a,
                animating: s
              } = n;
            if (!i || n.destroyed) return n;
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o,
              u = n.virtual && a.virtual.enabled;
            if (a.loop) {
              if (s && !u && a.loopPreventsSliding) return !1;
              if (n.loopFix({
                  direction: "next"
                }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                n.slideTo(n.activeIndex + l, t, e, r)
              })), !0
            }
            return a.rewind && n.isEnd ? n.slideTo(0, t, e, r) : n.slideTo(n.activeIndex + l, t, e, r)
          },
          slidePrev: function(t, e, r) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const n = this,
              {
                params: i,
                snapGrid: a,
                slidesGrid: s,
                rtlTranslate: o,
                enabled: l,
                animating: u
              } = n;
            if (!l || n.destroyed) return n;
            const h = n.virtual && i.virtual.enabled;
            if (i.loop) {
              if (u && !h && i.loopPreventsSliding) return !1;
              n.loopFix({
                direction: "prev"
              }), n._clientLeft = n.wrapperEl.clientLeft
            }

            function c(t) {
              return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
            }
            const p = c(o ? n.translate : -n.translate),
              f = a.map((t => c(t)));
            let d = a[f.indexOf(p) - 1];
            if (void 0 === d && i.cssMode) {
              let t;
              a.forEach(((e, r) => {
                p >= e && (t = r)
              })), void 0 !== t && (d = a[t > 0 ? t - 1 : t])
            }
            let m = 0;
            if (void 0 !== d && (m = s.indexOf(d), m < 0 && (m = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - n.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && n.isBeginning) {
              const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
              return n.slideTo(i, t, e, r)
            }
            return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              n.slideTo(m, t, e, r)
            })), !0) : n.slideTo(m, t, e, r)
          },
          slideReset: function(t, e, r) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const n = this;
            if (!n.destroyed) return n.slideTo(n.activeIndex, t, e, r)
          },
          slideToClosest: function(t, e, r, n) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === n && (n = .5);
            const i = this;
            if (i.destroyed) return;
            let a = i.activeIndex;
            const s = Math.min(i.params.slidesPerGroupSkip, a),
              o = s + Math.floor((a - s) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const t = i.snapGrid[o];
              l - t > (i.snapGrid[o + 1] - t) * n && (a += i.params.slidesPerGroup)
            } else {
              const t = i.snapGrid[o - 1];
              l - t <= (i.snapGrid[o] - t) * n && (a -= i.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, i.slidesGrid.length - 1), i.slideTo(a, t, e, r)
          },
          slideToClickedSlide: function() {
            const t = this;
            if (t.destroyed) return;
            const {
              params: e,
              slidesEl: r
            } = t, n = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
            let i, s = t.clickedIndex;
            const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
            if (e.loop) {
              if (t.animating) return;
              i = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), s = t.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, a.n)((() => {
                t.slideTo(s)
              }))) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(), s = t.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, a.n)((() => {
                t.slideTo(s)
              }))) : t.slideTo(s)
            } else t.slideTo(s)
          }
        },
        y = {
          loopCreate: function(t) {
            const e = this,
              {
                params: r,
                slidesEl: n
              } = e;
            if (!r.loop || e.virtual && e.params.virtual.enabled) return;
            const i = () => {
                (0, a.e)(n, `.${r.slideClass}, swiper-slide`).forEach(((t, e) => {
                  t.setAttribute("data-swiper-slide-index", e)
                }))
              },
              s = e.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (s ? r.grid.rows : 1),
              l = e.slides.length % o != 0,
              u = s && e.slides.length % r.grid.rows != 0,
              h = t => {
                for (let n = 0; n < t; n += 1) {
                  const t = e.isElement ? (0, a.c)("swiper-slide", [r.slideBlankClass]) : (0, a.c)("div", [r.slideClass, r.slideBlankClass]);
                  e.slidesEl.append(t)
                }
              };
            l ? (r.loopAddBlankSlides ? (h(o - e.slides.length % o), e.recalcSlides(), e.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : u ? (r.loopAddBlankSlides ? (h(r.grid.rows - e.slides.length % r.grid.rows), e.recalcSlides(), e.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), e.loopFix({
              slideRealIndex: t,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(t) {
            let {
              slideRealIndex: e,
              slideTo: r = !0,
              direction: n,
              setTranslate: i,
              activeSlideIndex: s,
              byController: o,
              byMousewheel: l
            } = void 0 === t ? {} : t;
            const u = this;
            if (!u.params.loop) return;
            u.emit("beforeLoopFix");
            const {
              slides: h,
              allowSlidePrev: c,
              allowSlideNext: p,
              slidesEl: f,
              params: d
            } = u, {
              centeredSlides: m
            } = d;
            if (u.allowSlidePrev = !0, u.allowSlideNext = !0, u.virtual && d.virtual.enabled) return r && (d.centeredSlides || 0 !== u.snapIndex ? d.centeredSlides && u.snapIndex < d.slidesPerView ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0) : u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, !1, !0) : u.slideTo(u.virtual.slides.length, 0, !1, !0)), u.allowSlidePrev = c, u.allowSlideNext = p, void u.emit("loopFix");
            let v = d.slidesPerView;
            "auto" === v ? v = u.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(d.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
            const g = d.slidesPerGroupAuto ? v : d.slidesPerGroup;
            let y = g;
            y % g != 0 && (y += g - y % g), y += d.loopAdditionalSlides, u.loopedSlides = y;
            const b = u.grid && d.grid && d.grid.rows > 1;
            h.length < v + y ? (0, a.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === d.grid.fill && (0, a.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              x = [];
            let E = u.activeIndex;
            void 0 === s ? s = u.getSlideIndex(h.filter((t => t.classList.contains(d.slideActiveClass)))[0]) : E = s;
            const _ = "next" === n || !n,
              w = "prev" === n || !n;
            let P = 0,
              T = 0;
            const C = b ? Math.ceil(h.length / d.grid.rows) : h.length,
              A = (b ? h[s].column : s) + (m && void 0 === i ? -v / 2 + .5 : 0);
            if (A < y) {
              P = Math.max(y - A, g);
              for (let t = 0; t < y - A; t += 1) {
                const e = t - Math.floor(t / C) * C;
                if (b) {
                  const t = C - e - 1;
                  for (let e = h.length - 1; e >= 0; e -= 1) h[e].column === t && S.push(e)
                } else S.push(C - e - 1)
              }
            } else if (A + v > C - y) {
              T = Math.max(A - (C - 2 * y), g);
              for (let t = 0; t < T; t += 1) {
                const e = t - Math.floor(t / C) * C;
                b ? h.forEach(((t, r) => {
                  t.column === e && x.push(r)
                })) : x.push(e)
              }
            }
            if (u.__preventObserver__ = !0, requestAnimationFrame((() => {
                u.__preventObserver__ = !1
              })), w && S.forEach((t => {
                h[t].swiperLoopMoveDOM = !0, f.prepend(h[t]), h[t].swiperLoopMoveDOM = !1
              })), _ && x.forEach((t => {
                h[t].swiperLoopMoveDOM = !0, f.append(h[t]), h[t].swiperLoopMoveDOM = !1
              })), u.recalcSlides(), "auto" === d.slidesPerView ? u.updateSlides() : b && (S.length > 0 && w || x.length > 0 && _) && u.slides.forEach(((t, e) => {
                u.grid.updateSlide(e, t, u.slides)
              })), d.watchSlidesProgress && u.updateSlidesOffset(), r)
              if (S.length > 0 && w) {
                if (void 0 === e) {
                  const t = u.slidesGrid[E],
                    e = u.slidesGrid[E + P] - t;
                  l ? u.setTranslate(u.translate - e) : (u.slideTo(E + P, 0, !1, !0), i && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - e, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - e))
                } else if (i) {
                  const t = b ? S.length / d.grid.rows : S.length;
                  u.slideTo(u.activeIndex + t, 0, !1, !0), u.touchEventsData.currentTranslate = u.translate
                }
              } else if (x.length > 0 && _)
              if (void 0 === e) {
                const t = u.slidesGrid[E],
                  e = u.slidesGrid[E - T] - t;
                l ? u.setTranslate(u.translate - e) : (u.slideTo(E - T, 0, !1, !0), i && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - e, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - e))
              } else {
                const t = b ? x.length / d.grid.rows : x.length;
                u.slideTo(u.activeIndex - t, 0, !1, !0)
              } if (u.allowSlidePrev = c, u.allowSlideNext = p, u.controller && u.controller.control && !o) {
              const t = {
                slideRealIndex: e,
                direction: n,
                setTranslate: i,
                activeSlideIndex: s,
                byController: !0
              };
              Array.isArray(u.controller.control) ? u.controller.control.forEach((e => {
                !e.destroyed && e.params.loop && e.loopFix({
                  ...t,
                  slideTo: e.params.slidesPerView === d.slidesPerView && r
                })
              })) : u.controller.control instanceof u.constructor && u.controller.control.params.loop && u.controller.control.loopFix({
                ...t,
                slideTo: u.controller.control.params.slidesPerView === d.slidesPerView && r
              })
            }
            u.emit("loopFix")
          },
          loopDestroy: function() {
            const t = this,
              {
                params: e,
                slidesEl: r
              } = t;
            if (!e.loop || t.virtual && t.params.virtual.enabled) return;
            t.recalcSlides();
            const n = [];
            t.slides.forEach((t => {
              const e = void 0 === t.swiperSlideIndex ? 1 * t.getAttribute("data-swiper-slide-index") : t.swiperSlideIndex;
              n[e] = t
            })), t.slides.forEach((t => {
              t.removeAttribute("data-swiper-slide-index")
            })), n.forEach((t => {
              r.append(t)
            })), t.recalcSlides(), t.slideTo(t.realIndex, 0)
          }
        };

      function b(t, e, r) {
        const n = (0, i.a)(),
          {
            params: a
          } = t,
          s = a.edgeSwipeDetection,
          o = a.edgeSwipeThreshold;
        return !s || !(r <= o || r >= n.innerWidth - o) || "prevent" === s && (e.preventDefault(), !0)
      }

      function S(t) {
        const e = this,
          r = (0, i.g)();
        let n = t;
        n.originalEvent && (n = n.originalEvent);
        const s = e.touchEventsData;
        if ("pointerdown" === n.type) {
          if (null !== s.pointerId && s.pointerId !== n.pointerId) return;
          s.pointerId = n.pointerId
        } else "touchstart" === n.type && 1 === n.targetTouches.length && (s.touchId = n.targetTouches[0].identifier);
        if ("touchstart" === n.type) return void b(e, n, n.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: u
        } = e;
        if (!u) return;
        if (!o.simulateTouch && "mouse" === n.pointerType) return;
        if (e.animating && o.preventInteractionOnTransition) return;
        !e.animating && o.cssMode && o.loop && e.loopFix();
        let h = n.target;
        if ("wrapper" === o.touchEventsTarget && !e.wrapperEl.contains(h)) return;
        if ("which" in n && 3 === n.which) return;
        if ("button" in n && n.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const c = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = n.composedPath ? n.composedPath() : n.path;
        c && n.target && n.target.shadowRoot && p && (h = p[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          d = !(!n.target || !n.target.shadowRoot);
        if (o.noSwiping && (d ? function(t, e) {
            return void 0 === e && (e = this),
              function e(r) {
                if (!r || r === (0, i.g)() || r === (0, i.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const n = r.closest(t);
                return n || r.getRootNode ? n || e(r.getRootNode().host) : null
              }(e)
          }(f, h) : h.closest(f))) return void(e.allowClick = !0);
        if (o.swipeHandler && !h.closest(o.swipeHandler)) return;
        l.currentX = n.pageX, l.currentY = n.pageY;
        const m = l.currentX,
          v = l.currentY;
        if (!b(e, n, m)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = m, l.startY = v, s.touchStartTime = (0, a.d)(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1);
        let g = !0;
        h.matches(s.focusableElements) && (g = !1, "SELECT" === h.nodeName && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== h && r.activeElement.blur();
        const y = g && e.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !y || h.isContentEditable || n.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", n)
      }

      function x(t) {
        const e = (0, i.g)(),
          r = this,
          n = r.touchEventsData,
          {
            params: s,
            touches: o,
            rtlTranslate: l,
            enabled: u
          } = r;
        if (!u) return;
        if (!s.simulateTouch && "mouse" === t.pointerType) return;
        let h, c = t;
        if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
          if (null !== n.touchId) return;
          if (c.pointerId !== n.pointerId) return
        }
        if ("touchmove" === c.type) {
          if (h = [...c.changedTouches].filter((t => t.identifier === n.touchId))[0], !h || h.identifier !== n.touchId) return
        } else h = c;
        if (!n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c));
        const p = h.pageX,
          f = h.pageY;
        if (c.preventedByNestedSwiper) return o.startX = p, void(o.startY = f);
        if (!r.allowTouchMove) return c.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f
        }), n.touchStartTime = (0, a.d)()));
        if (s.touchReleaseOnEdges && !s.loop)
          if (r.isVertical()) {
            if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else if (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate()) return;
        if (e.activeElement && c.target === e.activeElement && c.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        n.allowTouchCallbacks && r.emit("touchMove", c), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = f;
        const d = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(d ** 2 + m ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let t;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : d * d + m * m >= 25 && (t = 180 * Math.atan2(Math.abs(m), Math.abs(d)) / Math.PI, n.isScrolling = r.isHorizontal() ? t > s.touchAngle : 90 - t > s.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", c), void 0 === n.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation();
        let v = r.isHorizontal() ? d : m,
          g = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        s.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), o.diff = v, v *= s.touchRatio, l && (v = -v, g = -g);
        const y = r.touchesDirection;
        r.swipeDirection = v > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const b = r.params.loop && !s.cssMode,
          S = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!n.isMoved) {
          if (b && S && r.loopFix({
              direction: r.swipeDirection
            }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const t = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(t)
          }
          n.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", c)
        }
        if ((new Date).getTime(), n.isMoved && n.allowThresholdMove && y !== r.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f,
          startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
        r.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = v + n.startTranslate;
        let x = !0,
          E = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (E = 0), v > 0 ? (b && S && n.allowThresholdMove && n.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > r.minTranslate() && (x = !1, s.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + v) ** E))) : v < 0 && (b && S && n.allowThresholdMove && n.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
          }), n.currentTranslate < r.maxTranslate() && (x = !1, s.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - v) ** E))), x && (c.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), s.threshold > 0) {
          if (!(Math.abs(v) > s.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function E(t) {
        const e = this,
          r = e.touchEventsData;
        let n, i = t;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (n = [...i.changedTouches].filter((t => t.identifier === r.touchId))[0], !n || n.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          n = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !e.browser.isSafari && !e.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: s,
          touches: o,
          rtlTranslate: l,
          slidesGrid: u,
          enabled: h
        } = e;
        if (!h) return;
        if (!s.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && e.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && e.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const c = (0, a.d)(),
          p = c - r.touchStartTime;
        if (e.allowClick) {
          const t = i.path || i.composedPath && i.composedPath();
          e.updateClickedSlide(t && t[0] || i.target, t), e.emit("tap click", i), p < 300 && c - r.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = (0, a.d)(), (0, a.n)((() => {
            e.destroyed || (e.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !e.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let f;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = s.followFinger ? l ? e.translate : -e.translate : -r.currentTranslate, s.cssMode) return;
        if (s.freeMode && s.freeMode.enabled) return void e.freeMode.onTouchEnd({
          currentPos: f
        });
        const d = f >= -e.maxTranslate() && !e.params.loop;
        let m = 0,
          v = e.slidesSizesGrid[0];
        for (let t = 0; t < u.length; t += t < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const e = t < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== u[t + e] ? (d || f >= u[t] && f < u[t + e]) && (m = t, v = u[t + e] - u[t]) : (d || f >= u[t]) && (m = t, v = u[u.length - 1] - u[u.length - 2])
        }
        let g = null,
          y = null;
        s.rewind && (e.isBeginning ? y = s.virtual && s.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
        const b = (f - u[m]) / v,
          S = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (p > s.longSwipesMs) {
          if (!s.longSwipes) return void e.slideTo(e.activeIndex);
          "next" === e.swipeDirection && (b >= s.longSwipesRatio ? e.slideTo(s.rewind && e.isEnd ? g : m + S) : e.slideTo(m)), "prev" === e.swipeDirection && (b > 1 - s.longSwipesRatio ? e.slideTo(m + S) : null !== y && b < 0 && Math.abs(b) > s.longSwipesRatio ? e.slideTo(y) : e.slideTo(m))
        } else {
          if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
          !e.navigation || i.target !== e.navigation.nextEl && i.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(null !== g ? g : m + S), "prev" === e.swipeDirection && e.slideTo(null !== y ? y : m)) : i.target === e.navigation.nextEl ? e.slideTo(m + S) : e.slideTo(m)
        }
      }

      function _() {
        const t = this,
          {
            params: e,
            el: r
          } = t;
        if (r && 0 === r.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: a
        } = t, s = t.virtual && t.params.virtual.enabled;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
        const o = s && e.loop;
        !("auto" === e.slidesPerView || e.slidesPerView > 1) || !t.isEnd || t.isBeginning || t.params.centeredSlides || o ? t.params.loop && !s ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0) : t.slideTo(t.slides.length - 1, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout((() => {
          t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
        }), 500)), t.allowSlidePrev = i, t.allowSlideNext = n, t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow()
      }

      function w(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
      }

      function P() {
        const t = this,
          {
            wrapperEl: e,
            rtlTranslate: r,
            enabled: n
          } = t;
        if (!n) return;
        let i;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const a = t.maxTranslate() - t.minTranslate();
        i = 0 === a ? 0 : (t.translate - t.minTranslate()) / a, i !== t.progress && t.updateProgress(r ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
      }

      function T(t) {
        const e = this;
        p(e, t.target), e.params.cssMode || "auto" !== e.params.slidesPerView && !e.params.autoHeight || e.update()
      }

      function C() {
        const t = this;
        t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
      }
      const A = (t, e) => {
          const r = (0, i.g)(),
            {
              params: n,
              el: a,
              wrapperEl: s,
              device: o
            } = t,
            l = !!n.nested,
            u = "on" === e ? "addEventListener" : "removeEventListener",
            h = e;
          r[u]("touchstart", t.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), a[u]("touchstart", t.onTouchStart, {
            passive: !1
          }), a[u]("pointerdown", t.onTouchStart, {
            passive: !1
          }), r[u]("touchmove", t.onTouchMove, {
            passive: !1,
            capture: l
          }), r[u]("pointermove", t.onTouchMove, {
            passive: !1,
            capture: l
          }), r[u]("touchend", t.onTouchEnd, {
            passive: !0
          }), r[u]("pointerup", t.onTouchEnd, {
            passive: !0
          }), r[u]("pointercancel", t.onTouchEnd, {
            passive: !0
          }), r[u]("touchcancel", t.onTouchEnd, {
            passive: !0
          }), r[u]("pointerout", t.onTouchEnd, {
            passive: !0
          }), r[u]("pointerleave", t.onTouchEnd, {
            passive: !0
          }), r[u]("contextmenu", t.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && a[u]("click", t.onClick, !0), n.cssMode && s[u]("scroll", t.onScroll), n.updateOnWindowResize ? t[h](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _, !0) : t[h]("observerUpdate", _, !0), a[u]("load", t.onLoad, {
            capture: !0
          })
        },
        M = (t, e) => t.grid && e.grid && e.grid.rows > 1;
      var k = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function I(t, e) {
        return function(r) {
          void 0 === r && (r = {});
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (!0 === t[n] && (t[n] = {
            enabled: !0
          }), "navigation" === n && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), n in t && "enabled" in i ? ("object" != typeof t[n] || "enabled" in t[n] || (t[n].enabled = !0), t[n] || (t[n] = {
            enabled: !1
          }), (0, a.u)(e, r)) : (0, a.u)(e, r)) : (0, a.u)(e, r)
        }
      }
      const D = {
          eventsEmitter: c,
          update: m,
          translate: {
            getTranslate: function(t) {
              void 0 === t && (t = this.isHorizontal() ? "x" : "y");
              const {
                params: e,
                rtlTranslate: r,
                translate: n,
                wrapperEl: i
              } = this;
              if (e.virtualTranslate) return r ? -n : n;
              if (e.cssMode) return n;
              let s = (0, a.i)(i, t);
              return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            },
            setTranslate: function(t, e) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: a,
                  progress: s
                } = r;
              let o, l = 0,
                u = 0;
              r.isHorizontal() ? l = n ? -t : t : u = t, i.roundLengths && (l = Math.floor(l), u = Math.floor(u)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : u, i.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -u : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : u -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${u}px, 0px)`);
              const h = r.maxTranslate() - r.minTranslate();
              o = 0 === h ? 0 : (t - r.minTranslate()) / h, o !== s && r.updateProgress(t), r.emit("setTranslate", r.translate, e)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(t, e, r, n, i) {
              void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
              const s = this,
                {
                  params: o,
                  wrapperEl: l
                } = s;
              if (s.animating && o.preventInteractionOnTransition) return !1;
              const u = s.minTranslate(),
                h = s.maxTranslate();
              let c;
              if (c = n && t > u ? u : n && t < h ? h : t, s.updateProgress(c), o.cssMode) {
                const t = s.isHorizontal();
                if (0 === e) l[t ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!s.support.smoothScroll) return (0, a.r)({
                    swiper: s,
                    targetPosition: -c,
                    side: t ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [t ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === e ? (s.setTransition(0), s.setTranslate(c), r && (s.emit("beforeTransitionStart", e, i), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(c), r && (s.emit("beforeTransitionStart", e, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(t) {
                s && !s.destroyed && t.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r && s.emit("transitionEnd"))
              }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(t, e) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${t}ms`, r.wrapperEl.style.transitionDelay = 0 === t ? "0ms" : ""), r.emit("setTransition", t, e)
            },
            transitionStart: function(t, e) {
              void 0 === t && (t = !0);
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), v({
                swiper: r,
                runCallbacks: t,
                direction: e,
                step: "Start"
              }))
            },
            transitionEnd: function(t, e) {
              void 0 === t && (t = !0);
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), v({
                swiper: r,
                runCallbacks: t,
                direction: e,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: y,
          grabCursor: {
            setGrabCursor: function(t) {
              const e = this;
              if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
              const r = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
              e.isElement && (e.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const t = this;
              t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const t = this,
                {
                  params: e
                } = t;
              t.onTouchStart = S.bind(t), t.onTouchMove = x.bind(t), t.onTouchEnd = E.bind(t), t.onDocumentTouchStart = C.bind(t), e.cssMode && (t.onScroll = P.bind(t)), t.onClick = w.bind(t), t.onLoad = T.bind(t), A(t, "on")
            },
            detachEvents: function() {
              A(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const t = this,
                {
                  realIndex: e,
                  initialized: r,
                  params: n,
                  el: i
                } = t,
                s = n.breakpoints;
              if (!s || s && 0 === Object.keys(s).length) return;
              const o = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
              if (!o || t.currentBreakpoint === o) return;
              const l = (o in s ? s[o] : void 0) || t.originalParams,
                u = M(t, n),
                h = M(t, l),
                c = n.enabled;
              u && !h ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), t.emitContainerClasses()) : !u && h && (i.classList.add(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((e => {
                if (void 0 === l[e]) return;
                const r = n[e] && n[e].enabled,
                  i = l[e] && l[e].enabled;
                r && !i && t[e].disable(), !r && i && t[e].enable()
              }));
              const p = l.direction && l.direction !== n.direction,
                f = n.loop && (l.slidesPerView !== n.slidesPerView || p),
                d = n.loop;
              p && r && t.changeDirection(), (0, a.u)(t.params, l);
              const m = t.params.enabled,
                v = t.params.loop;
              Object.assign(t, {
                allowTouchMove: t.params.allowTouchMove,
                allowSlideNext: t.params.allowSlideNext,
                allowSlidePrev: t.params.allowSlidePrev
              }), c && !m ? t.disable() : !c && m && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", l), r && (f ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !d && v ? (t.loopCreate(e), t.updateSlides()) : d && !v && t.loopDestroy()), t.emit("breakpoint", l)
            },
            getBreakpoint: function(t, e, r) {
              if (void 0 === e && (e = "window"), !t || "container" === e && !r) return;
              let n = !1;
              const a = (0, i.a)(),
                s = "window" === e ? a.innerHeight : r.clientHeight,
                o = Object.keys(t).map((t => {
                  if ("string" == typeof t && 0 === t.indexOf("@")) {
                    const e = parseFloat(t.substr(1));
                    return {
                      value: s * e,
                      point: t
                    }
                  }
                  return {
                    value: t,
                    point: t
                  }
                }));
              o.sort(((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10)));
              for (let t = 0; t < o.length; t += 1) {
                const {
                  point: i,
                  value: s
                } = o[t];
                "window" === e ? a.matchMedia(`(min-width: ${s}px)`).matches && (n = i) : s <= r.clientWidth && (n = i)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const t = this,
                {
                  isLocked: e,
                  params: r
                } = t,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const e = t.slides.length - 1,
                  r = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n;
                t.isLocked = t.size > r
              } else t.isLocked = 1 === t.snapGrid.length;
              !0 === r.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === r.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const t = this,
                {
                  classNames: e,
                  params: r,
                  rtl: n,
                  el: i,
                  device: a
                } = t,
                s = function(t, e) {
                  const r = [];
                  return t.forEach((t => {
                    "object" == typeof t ? Object.keys(t).forEach((n => {
                      t[n] && r.push(e + n)
                    })) : "string" == typeof t && r.push(e + t)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": t.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: n
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: a.android
                }, {
                  ios: a.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              e.push(...s), i.classList.add(...e), t.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: t,
                classNames: e
              } = this;
              t.classList.remove(...e), this.emitContainerClasses()
            }
          }
        },
        F = {};
      class O {
        constructor() {
          let t, e;
          for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? e = n[0] : [t, e] = n, e || (e = {}), e = (0, a.u)({}, e), t && !e.el && (e.el = t);
          const o = (0, i.g)();
          if (e.el && "string" == typeof e.el && o.querySelectorAll(e.el).length > 1) {
            const t = [];
            return o.querySelectorAll(e.el).forEach((r => {
              const n = (0, a.u)({}, e, {
                el: r
              });
              t.push(new O(n))
            })), t
          }
          const c = this;
          c.__swiper__ = !0, c.support = u(), c.device = h({
            userAgent: e.userAgent
          }), c.browser = (l || (l = function() {
            const t = (0, i.a)(),
              e = h();
            let r = !1;

            function n() {
              const e = t.navigator.userAgent.toLowerCase();
              return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }
            if (n()) {
              const e = String(t.navigator.userAgent);
              if (e.includes("Version/")) {
                const [t, n] = e.split("Version/")[1].split(" ")[0].split(".").map((t => Number(t)));
                r = t < 16 || 16 === t && n < 2
              }
            }
            const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
              s = n();
            return {
              isSafari: r || s,
              needPerspectiveFix: r,
              need3dFix: s || a && e.ios,
              isWebView: a
            }
          }()), l), c.eventsListeners = {}, c.eventsAnyListeners = [], c.modules = [...c.__modules__], e.modules && Array.isArray(e.modules) && c.modules.push(...e.modules);
          const p = {};
          c.modules.forEach((t => {
            t({
              params: e,
              swiper: c,
              extendParams: I(e, p),
              on: c.on.bind(c),
              once: c.once.bind(c),
              off: c.off.bind(c),
              emit: c.emit.bind(c)
            })
          }));
          const f = (0, a.u)({}, k, p);
          return c.params = (0, a.u)({}, f, F, e), c.originalParams = (0, a.u)({}, c.params), c.passedParams = (0, a.u)({}, e), c.params && c.params.on && Object.keys(c.params.on).forEach((t => {
            c.on(t, c.params.on[t])
          })), c.params && c.params.onAny && c.onAny(c.params.onAny), Object.assign(c, {
            enabled: c.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === c.params.direction,
            isVertical: () => "vertical" === c.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: c.params.allowSlideNext,
            allowSlidePrev: c.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: c.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: c.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), c.emit("_swiper"), c.params.init && c.init(), c
        }
        getDirectionLabel(t) {
          return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [t]
        }
        getSlideIndex(t) {
          const {
            slidesEl: e,
            params: r
          } = this, n = (0, a.e)(e, `.${r.slideClass}, swiper-slide`), i = (0, a.g)(n[0]);
          return (0, a.g)(t) - i
        }
        getSlideIndexByData(t) {
          return this.getSlideIndex(this.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0])
        }
        recalcSlides() {
          const {
            slidesEl: t,
            params: e
          } = this;
          this.slides = (0, a.e)(t, `.${e.slideClass}, swiper-slide`)
        }
        enable() {
          const t = this;
          t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }
        disable() {
          const t = this;
          t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }
        setProgress(t, e) {
          const r = this;
          t = Math.min(Math.max(t, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * t + n;
          r.translateTo(i, void 0 === e ? 0 : e), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = t.el.className.split(" ").filter((e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)));
          t.emit("_containerClasses", e.join(" "))
        }
        getSlideClasses(t) {
          const e = this;
          return e.destroyed ? "" : t.className.split(" ").filter((t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = [];
          t.slides.forEach((r => {
            const n = t.getSlideClasses(r);
            e.push({
              slideEl: r,
              classNames: n
            }), t.emit("_slideClass", r, n)
          })), t.emit("_slideClasses", e)
        }
        slidesPerViewDynamic(t, e) {
          void 0 === t && (t = "current"), void 0 === e && (e = !1);
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: a,
            size: s,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let t, e = n[o] ? Math.ceil(n[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < n.length; r += 1) n[r] && !t && (e += Math.ceil(n[r].swiperSlideSize), l += 1, e > s && (t = !0));
            for (let r = o - 1; r >= 0; r -= 1) n[r] && !t && (e += n[r].swiperSlideSize, l += 1, e > s && (t = !0))
          } else if ("current" === t)
            for (let t = o + 1; t < n.length; t += 1)(e ? i[t] + a[t] - i[o] < s : i[t] - i[o] < s) && (l += 1);
          else
            for (let t = o - 1; t >= 0; t -= 1) i[o] - i[t] < s && (l += 1);
          return l
        }
        update() {
          const t = this;
          if (!t || t.destroyed) return;
          const {
            snapGrid: e,
            params: r
          } = t;

          function n() {
            const e = t.rtlTranslate ? -1 * t.translate : t.translate,
              r = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
              e.complete && p(t, e)
            })), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && t.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
              const e = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              i = t.slideTo(e.length - 1, 0, !1, !0)
            } else i = t.slideTo(t.activeIndex, 0, !1, !0);
            i || n()
          }
          r.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }
        changeDirection(t, e) {
          void 0 === e && (e = !0);
          const r = this,
            n = r.params.direction;
          return t || (t = "horizontal" === n ? "vertical" : "horizontal"), t === n || "horizontal" !== t && "vertical" !== t || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${t}`), r.emitContainerClasses(), r.params.direction = t, r.slides.forEach((e => {
            "vertical" === t ? e.style.width = "" : e.style.height = ""
          })), r.emit("changeDirection"), e && r.update()), r
        }
        changeLanguageDirection(t) {
          const e = this;
          e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.el.classList.add(`${e.params.containerModifierClass}rtl`), e.el.dir = "rtl") : (e.el.classList.remove(`${e.params.containerModifierClass}rtl`), e.el.dir = "ltr"), e.update())
        }
        mount(t) {
          const e = this;
          if (e.mounted) return !0;
          let r = t || e.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = e, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === e.params.swiperElementNodeName.toUpperCase() && (e.isElement = !0);
          const n = () => `.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : (0, a.e)(r, n())[0];
          return !i && e.params.createElements && (i = (0, a.c)("div", e.params.wrapperClass), r.append(i), (0, a.e)(r, `.${e.params.slideClass}`).forEach((t => {
            i.append(t)
          }))), Object.assign(e, {
            el: r,
            wrapperEl: i,
            slidesEl: e.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: e.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction"),
            rtlTranslate: "horizontal" === e.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, a.o)(i, "display")
          }), !0
        }
        init(t) {
          const e = this;
          if (e.initialized) return e;
          if (!1 === e.mount(t)) return e;
          e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.loop && e.virtual && e.params.virtual.enabled ? e.slideTo(e.params.initialSlide + e.virtual.slidesBefore, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.params.loop && e.loopCreate(), e.attachEvents();
          const r = [...e.el.querySelectorAll('[loading="lazy"]')];
          return e.isElement && r.push(...e.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((t => {
            t.complete ? p(e, t) : t.addEventListener("load", (t => {
              p(e, t.target)
            }))
          })), d(e), e.initialized = !0, d(e), e.emit("init"), e.emit("afterInit"), e
        }
        destroy(t, e) {
          void 0 === t && (t = !0), void 0 === e && (e = !0);
          const r = this,
            {
              params: n,
              el: i,
              wrapperEl: s,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), e && (r.removeClasses(), i.removeAttribute("style"), s.removeAttribute("style"), o && o.length && o.forEach((t => {
            t.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), t.removeAttribute("style"), t.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((t => {
            r.off(t)
          })), !1 !== t && (r.el.swiper = null, (0, a.v)(r)), r.destroyed = !0), null
        }
        static extendDefaults(t) {
          (0, a.u)(F, t)
        }
        static get extendedDefaults() {
          return F
        }
        static get defaults() {
          return k
        }
        static installModule(t) {
          O.prototype.__modules__ || (O.prototype.__modules__ = []);
          const e = O.prototype.__modules__;
          "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }
        static use(t) {
          return Array.isArray(t) ? (t.forEach((t => O.installModule(t))), O) : (O.installModule(t), O)
        }
      }
      Object.keys(D).forEach((t => {
        Object.keys(D[t]).forEach((e => {
          O.prototype[e] = D[t][e]
        }))
      })), O.use([function(t) {
        let {
          swiper: e,
          on: r,
          emit: n
        } = t;
        const a = (0, i.a)();
        let s = null,
          o = null;
        const l = () => {
            e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
          },
          u = () => {
            e && !e.destroyed && e.initialized && n("orientationchange")
          };
        r("init", (() => {
          e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (s = new ResizeObserver((t => {
            o = a.requestAnimationFrame((() => {
              const {
                width: r,
                height: n
              } = e;
              let i = r,
                a = n;
              t.forEach((t => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: s
                } = t;
                s && s !== e.el || (i = n ? n.width : (r[0] || r).inlineSize, a = n ? n.height : (r[0] || r).blockSize)
              })), i === r && a === n || l()
            }))
          })), s.observe(e.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", u))
        })), r("destroy", (() => {
          o && a.cancelAnimationFrame(o), s && s.unobserve && e.el && (s.unobserve(e.el), s = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", u)
        }))
      }, function(t) {
        let {
          swiper: e,
          extendParams: r,
          on: n,
          emit: s
        } = t;
        const o = [],
          l = (0, i.a)(),
          u = function(t, r) {
            void 0 === r && (r = {});
            const n = new(l.MutationObserver || l.WebkitMutationObserver)((t => {
              if (e.__preventObserver__) return;
              if (1 === t.length) return void s("observerUpdate", t[0]);
              const r = function() {
                s("observerUpdate", t[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            n.observe(t, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(n)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (e.params.observer) {
            if (e.params.observeParents) {
              const t = (0, a.a)(e.hostEl);
              for (let e = 0; e < t.length; e += 1) u(t[e])
            }
            u(e.hostEl, {
              childList: e.params.observeSlideChildren
            }), u(e.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          o.forEach((t => {
            t.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const R = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function L(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1) && !t.__swiper__
      }

      function B(t, e) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(e).filter((t => r.indexOf(t) < 0)).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : L(e[r]) && L(t[r]) && Object.keys(e[r]).length > 0 ? e[r].__swiper__ ? t[r] = e[r] : B(t[r], e[r]) : t[r] = e[r]
        }))
      }

      function V(t) {
        return void 0 === t && (t = {}), t.navigation && void 0 === t.navigation.nextEl && void 0 === t.navigation.prevEl
      }

      function z(t) {
        return void 0 === t && (t = {}), t.pagination && void 0 === t.pagination.el
      }

      function N(t) {
        return void 0 === t && (t = {}), t.scrollbar && void 0 === t.scrollbar.el
      }

      function j(t) {
        void 0 === t && (t = "");
        const e = t.split(" ").map((t => t.trim())).filter((t => !!t)),
          r = [];
        return e.forEach((t => {
          r.indexOf(t) < 0 && r.push(t)
        })), r.join(" ")
      }

      function G(t) {
        return void 0 === t && (t = ""), t ? t.includes("swiper-wrapper") ? t : `swiper-wrapper ${t}` : "swiper-wrapper"
      }

      function H() {
        return H = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, H.apply(this, arguments)
      }

      function W(t) {
        return t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide")
      }

      function q(t) {
        const e = [];
        return n.Children.toArray(t).forEach((t => {
          W(t) ? e.push(t) : t.props && t.props.children && q(t.props.children).forEach((t => e.push(t)))
        })), e
      }

      function $(t) {
        const e = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(t).forEach((t => {
          if (W(t)) e.push(t);
          else if (t.props && t.props.slot && r[t.props.slot]) r[t.props.slot].push(t);
          else if (t.props && t.props.children) {
            const n = q(t.props.children);
            n.length > 0 ? n.forEach((t => e.push(t))) : r["container-end"].push(t)
          } else r["container-end"].push(t)
        })), {
          slides: e,
          slots: r
        }
      }

      function U(t, e) {
        return "undefined" == typeof window ? (0, n.useEffect)(t, e) : (0, n.useLayoutEffect)(t, e)
      }
      const Y = (0, n.createContext)(null),
        X = (0, n.createContext)(null),
        K = (0, n.forwardRef)((function(t, e) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: a = "div",
            children: s,
            onSwiper: o,
            ...l
          } = void 0 === t ? {} : t, u = !1;
          const [h, c] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [d, m] = (0, n.useState)(!1), v = (0, n.useRef)(!1), g = (0, n.useRef)(null), y = (0, n.useRef)(null), b = (0, n.useRef)(null), S = (0, n.useRef)(null), x = (0, n.useRef)(null), E = (0, n.useRef)(null), _ = (0, n.useRef)(null), w = (0, n.useRef)(null), {
            params: P,
            passedParams: T,
            rest: C,
            events: A
          } = function(t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = !0);
            const r = {
                on: {}
              },
              n = {},
              i = {};
            B(r, k), r._emitClasses = !0, r.init = !1;
            const a = {},
              s = R.map((t => t.replace(/_/, ""))),
              o = Object.assign({}, t);
            return Object.keys(o).forEach((o => {
              void 0 !== t[o] && (s.indexOf(o) >= 0 ? L(t[o]) ? (r[o] = {}, i[o] = {}, B(r[o], t[o]), B(i[o], t[o])) : (r[o] = t[o], i[o] = t[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof t[o] ? e ? n[`${o[2].toLowerCase()}${o.substr(3)}`] = t[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = t[o] : a[o] = t[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((t => {
              !0 === r[t] && (r[t] = {}), !1 === r[t] && delete r[t]
            })), {
              params: r,
              passedParams: i,
              rest: a,
              events: n
            }
          }(l), {
            slides: M,
            slots: I
          } = $(s), D = () => {
            m(!d)
          };
          Object.assign(P.on, {
            _containerClasses(t, e) {
              c(e)
            }
          });
          const F = () => {
            Object.assign(P.on, A), u = !0;
            const t = {
              ...P
            };
            if (delete t.wrapperClass, y.current = new O(t), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = M;
              const t = {
                cache: !1,
                slides: M,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              B(y.current.params.virtual, t), B(y.current.originalParams.virtual, t)
            }
          };
          return g.current || F(), y.current && y.current.on("_beforeBreakpoint", D), (0, n.useEffect)((() => () => {
            y.current && y.current.off("_beforeBreakpoint", D)
          })), (0, n.useEffect)((() => {
            !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
          })), U((() => {
            if (e && (e.current = g.current), g.current) return y.current.destroyed && F(),
              function(t, e) {
                let {
                  el: r,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: a,
                  scrollbarEl: s,
                  swiper: o
                } = t;
                V(e) && n && i && (o.params.navigation.nextEl = n, o.originalParams.navigation.nextEl = n, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), z(e) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), N(e) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(r)
              }({
                el: g.current,
                nextEl: x.current,
                prevEl: E.current,
                paginationEl: _.current,
                scrollbarEl: w.current,
                swiper: y.current
              }, P), o && !y.current.destroyed && o(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }), []), U((() => {
            !u && A && y.current && Object.keys(A).forEach((t => {
              y.current.on(t, A[t])
            }));
            const t = function(t, e, r, n, i) {
              const a = [];
              if (!e) return a;
              const s = t => {
                a.indexOf(t) < 0 && a.push(t)
              };
              if (r && n) {
                const t = n.map(i),
                  e = r.map(i);
                t.join("") !== e.join("") && s("children"), n.length !== r.length && s("children")
              }
              return R.filter((t => "_" === t[0])).map((t => t.replace(/_/, ""))).forEach((r => {
                if (r in t && r in e)
                  if (L(t[r]) && L(e[r])) {
                    const n = Object.keys(t[r]),
                      i = Object.keys(e[r]);
                    n.length !== i.length ? s(r) : (n.forEach((n => {
                      t[r][n] !== e[r][n] && s(r)
                    })), i.forEach((n => {
                      t[r][n] !== e[r][n] && s(r)
                    })))
                  } else t[r] !== e[r] && s(r)
              })), a
            }(T, b.current, M, S.current, (t => t.key));
            return b.current = T, S.current = M, t.length && y.current && !y.current.destroyed && function(t) {
              let {
                swiper: e,
                slides: r,
                passedParams: n,
                changedParams: i,
                nextEl: a,
                prevEl: s,
                scrollbarEl: o,
                paginationEl: l
              } = t;
              const u = i.filter((t => "children" !== t && "direction" !== t && "wrapperClass" !== t)),
                {
                  params: h,
                  pagination: c,
                  navigation: p,
                  scrollbar: f,
                  virtual: d,
                  thumbs: m
                } = e;
              let v, g, y, b, S, x, E, _;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && h.thumbs && !h.thumbs.swiper && (v = !0), i.includes("controller") && n.controller && n.controller.control && h.controller && !h.controller.control && (g = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (h.pagination || !1 === h.pagination) && c && !c.el && (y = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || o) && (h.scrollbar || !1 === h.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || s) && (n.navigation.nextEl || a) && (h.navigation || !1 === h.navigation) && p && !p.prevEl && !p.nextEl && (S = !0);
              const w = t => {
                e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), h[t].prevEl = void 0, h[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), h[t].el = void 0, e[t].el = void 0))
              };
              i.includes("loop") && e.isElement && (h.loop && !n.loop ? x = !0 : !h.loop && n.loop ? E = !0 : _ = !0), u.forEach((t => {
                if (L(h[t]) && L(n[t])) Object.assign(h[t], n[t]), "navigation" !== t && "pagination" !== t && "scrollbar" !== t || !("enabled" in n[t]) || n[t].enabled || w(t);
                else {
                  const e = n[t];
                  !0 !== e && !1 !== e || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? h[t] = n[t] : !1 === e && w(t)
                }
              })), u.includes("controller") && !g && e.controller && e.controller.control && h.controller && h.controller.control && (e.controller.control = h.controller.control), i.includes("children") && r && d && h.virtual.enabled ? (d.slides = r, d.update(!0)) : i.includes("virtual") && d && h.virtual.enabled && (r && (d.slides = r), d.update(!0)), i.includes("children") && r && h.loop && (_ = !0), v && m.init() && m.update(!0), g && (e.controller.control = h.controller.control), y && (!e.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), e.el.appendChild(l)), l && (h.pagination.el = l), c.init(), c.render(), c.update()), b && (!e.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), e.el.appendChild(o)), o && (h.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), S && (e.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = e.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), e.el.appendChild(a)), s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-prev"), s.innerHTML = e.hostEl.constructor.prevButtonSvg, s.part.add("button-prev"), e.el.appendChild(s))), a && (h.navigation.nextEl = a), s && (h.navigation.prevEl = s), p.init(), p.update()), i.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && e.changeDirection(n.direction, !1), (x || _) && e.loopDestroy(), (E || _) && e.loopCreate(), e.update()
            }({
              swiper: y.current,
              slides: M,
              passedParams: T,
              changedParams: t,
              nextEl: x.current,
              prevEl: E.current,
              scrollbarEl: w.current,
              paginationEl: _.current
            }), () => {
              A && y.current && Object.keys(A).forEach((t => {
                y.current.off(t, A[t])
              }))
            }
          })), U((() => {
            var t;
            !(t = y.current) || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate())
          }), [p]), n.createElement(i, H({
            ref: g,
            className: j(`${h}${r?` ${r}`:""}`)
          }, C), n.createElement(X.Provider, {
            value: y.current
          }, I["container-start"], n.createElement(a, {
            className: G(P.wrapperClass)
          }, I["wrapper-start"], P.virtual ? function(t, e, r) {
            if (!r) return null;
            const i = t => {
                let r = t;
                return t < 0 ? r = e.length + t : r >= e.length && (r -= e.length), r
              },
              a = t.isHorizontal() ? {
                [t.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: s,
                to: o
              } = r,
              l = t.params.loop ? -e.length : 0,
              u = t.params.loop ? 2 * e.length : e.length,
              h = [];
            for (let t = l; t < u; t += 1) t >= s && t <= o && h.push(e[i(t)]);
            return h.map(((e, r) => n.cloneElement(e, {
              swiper: t,
              style: a,
              key: `slide-${r}`
            })))
          }(y.current, M, p) : M.map(((t, e) => n.cloneElement(t, {
            swiper: y.current,
            swiperSlideIndex: e
          }))), I["wrapper-end"]), V(P) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: E,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: x,
            className: "swiper-button-next"
          })), N(P) && n.createElement("div", {
            ref: w,
            className: "swiper-scrollbar"
          }), z(P) && n.createElement("div", {
            ref: _,
            className: "swiper-pagination"
          }), I["container-end"]))
        }));
      K.displayName = "Swiper";
      const Z = (0, n.forwardRef)((function(t, e) {
        let {
          tag: r = "div",
          children: i,
          className: a = "",
          swiper: s,
          zoom: o,
          lazy: l,
          virtualIndex: u,
          swiperSlideIndex: h,
          ...c
        } = void 0 === t ? {} : t;
        const p = (0, n.useRef)(null),
          [f, d] = (0, n.useState)("swiper-slide"),
          [m, v] = (0, n.useState)(!1);

        function g(t, e, r) {
          e === p.current && d(r)
        }
        U((() => {
          if (void 0 !== h && (p.current.swiperSlideIndex = h), e && (e.current = p.current), p.current && s) {
            if (!s.destroyed) return s.on("_slideClass", g), () => {
              s && s.off("_slideClass", g)
            };
            "swiper-slide" !== f && d("swiper-slide")
          }
        })), U((() => {
          s && p.current && !s.destroyed && d(s.getSlideClasses(p.current))
        }), [s]);
        const y = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(y) : i;
        return n.createElement(r, H({
          ref: p,
          className: j(`${f}${a?` ${a}`:""}`),
          "data-swiper-slide-index": u,
          onLoad: () => {
            v(!0)
          }
        }, c), o && n.createElement(Y.Provider, {
          value: y
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && n.createElement(Y.Provider, {
          value: y
        }, b(), l && !m && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Z.displayName = "SwiperSlide"
    },
    26283: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    82777: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);