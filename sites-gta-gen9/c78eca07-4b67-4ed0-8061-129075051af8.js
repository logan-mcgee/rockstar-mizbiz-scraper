! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c78eca07-4b67-4ed0-8061-129075051af8", t._sentryDebugIdIdentifier = "sentry-dbid-c78eca07-4b67-4ed0-8061-129075051af8")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3532], {
    45164: (t, e, r) => {
      "use strict";
      var n = p(r(67032)),
        i = p(r(4616)),
        a = p(r(65908)),
        s = p(r(272)),
        o = p(r(66516)),
        l = p(r(92392)),
        h = p(r(51664)),
        u = p(r(71424)),
        c = p(r(86352));

      function p(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var f = function(t) {
        function e() {
          var t, r, n, s;
          (0, a.default)(this, e);
          for (var l = arguments.length, h = Array(l), u = 0; u < l; u++) h[u] = arguments[u];
          return r = n = (0, o.default)(this, (t = e.__proto__ || (0, i.default)(e)).call.apply(t, [this].concat(h))), n.handleClickToPause = function() {
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
              u = function(t) {
                return "number" == typeof t ? t + "px" : t || "100%"
              },
              c = (0, n.default)({
                width: u(r),
                height: u(i),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              p = o ? function() {
                return null
              } : this.handleClickToPause;
            return h.default.createElement("div", {
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
      }(h.default.Component);
      e.c = f, f.propTypes = {
        eventListeners: u.default.arrayOf(u.default.object),
        options: u.default.object.isRequired,
        height: u.default.oneOfType([u.default.string, u.default.number]),
        width: u.default.oneOfType([u.default.string, u.default.number]),
        isStopped: u.default.bool,
        isPaused: u.default.bool,
        speed: u.default.number,
        segments: u.default.arrayOf(u.default.number),
        direction: u.default.number,
        ariaRole: u.default.string,
        ariaLabel: u.default.string,
        isClickToPauseDisabled: u.default.bool,
        title: u.default.string,
        style: u.default.string
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
    92104: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => R
      });
      var n = r(87672),
        i = r(51664),
        a = "right-scroll-bar-position",
        s = "width-before-scroll-bar",
        o = r(92634),
        l = (0, r(35045).Y)(),
        h = function() {},
        u = i.forwardRef((function(t, e) {
          var r = i.useRef(null),
            a = i.useState({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: h
            }),
            s = a[0],
            u = a[1],
            c = t.forwardProps,
            p = t.children,
            f = t.className,
            d = t.removeScrollBar,
            m = t.enabled,
            v = t.shards,
            y = t.sideCar,
            g = t.noIsolation,
            b = t.inert,
            S = t.allowPinchZoom,
            x = t.as,
            P = void 0 === x ? "div" : x,
            E = t.gapMode,
            C = (0, n.sX)(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            M = y,
            w = (0, o.m)([r, e]),
            T = (0, n.C3)((0, n.C3)({}, C), s);
          return i.createElement(i.Fragment, null, m && i.createElement(M, {
            sideCar: l,
            removeScrollBar: d,
            shards: v,
            noIsolation: g,
            inert: b,
            setCallbacks: u,
            allowPinchZoom: !!S,
            lockRef: r,
            gapMode: E
          }), c ? i.cloneElement(i.Children.only(p), (0, n.C3)((0, n.C3)({}, T), {
            ref: w
          })) : i.createElement(P, (0, n.C3)({}, T, {
            className: f,
            ref: w
          }), p))
        }));
      u.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, u.classNames = {
        fullWidth: s,
        zeroRight: a
      };
      var c = function(t) {
        var e = t.sideCar,
          r = (0, n.sX)(t, ["sideCar"]);
        if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = e.read();
        if (!a) throw new Error("Sidecar medium not found");
        return i.createElement(a, (0, n.C3)({}, r))
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
        y = function(t, e, r, n) {
          var i = t.left,
            o = t.top,
            l = t.right,
            h = t.gap;
          return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(h, "px ").concat(n, ";\n  }\n  body {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(h, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(h, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(h, "px ").concat(n, ";\n  }\n  \n  .").concat(s, " {\n    margin-right: ").concat(h, "px ").concat(n, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(h, "px;\n  }\n")
        },
        g = function(t) {
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
            styles: y(s, !e, a, r ? "" : "!important")
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
        P = function(t, e) {
          var r = window.getComputedStyle(t);
          return "hidden" !== r[e] && !(r.overflowY === r.overflowX && ! function(t) {
            return "TEXTAREA" === t.tagName
          }(t) && "visible" === r[e])
        },
        E = function(t, e) {
          var r = e.ownerDocument,
            n = e;
          do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), C(t, n)) {
              var i = M(t, n);
              if (i[1] > i[2]) return !0
            }
            n = n.parentNode
          } while (n && n !== r.body);
          return !1
        },
        C = function(t, e) {
          return "v" === t ? function(t) {
            return P(t, "overflowY")
          }(e) : function(t) {
            return P(t, "overflowX")
          }(e)
        },
        M = function(t, e) {
          return "v" === t ? [(r = e).scrollTop, r.scrollHeight, r.clientHeight] : function(t) {
            return [t.scrollLeft, t.scrollWidth, t.clientWidth]
          }(e);
          var r
        },
        w = function(t) {
          return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
        },
        T = function(t) {
          return [t.deltaX, t.deltaY]
        },
        _ = function(t) {
          return t && "current" in t ? t.current : t
        },
        A = function(t) {
          return "\n  .block-interactivity-".concat(t, " {pointer-events: none;}\n  .allow-interactivity-").concat(t, " {pointer-events: all;}\n")
        },
        k = 0,
        D = [];

      function I(t) {
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
            var e = (0, n.Mt)([t.lockRef.current], (t.shards || []).map(_), !0).filter(Boolean);
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
        var h = i.useCallback((function(t, e) {
            if ("touches" in t && 2 === t.touches.length) return !l.current.allowPinchZoom;
            var n, i = w(t),
              s = r.current,
              o = "deltaX" in t ? t.deltaX : s[0] - i[0],
              h = "deltaY" in t ? t.deltaY : s[1] - i[1],
              u = t.target,
              c = Math.abs(o) > Math.abs(h) ? "h" : "v";
            if ("touches" in t && "h" === c && "range" === u.type) return !1;
            var p = E(c, u);
            if (!p) return !0;
            if (p ? n = c : (n = "v" === c ? "h" : "v", p = E(c, u)), !p) return !1;
            if (!a.current && "changedTouches" in t && (o || h) && (a.current = n), !n) return !0;
            var f = a.current || n;
            return function(t, e, r, n, i) {
              var a = function(t, e) {
                  return "h" === t && "rtl" === e ? -1 : 1
                }(t, window.getComputedStyle(e).direction),
                s = a * n,
                o = r.target,
                l = e.contains(o),
                h = !1,
                u = s > 0,
                c = 0,
                p = 0;
              do {
                var f = M(t, o),
                  d = f[0],
                  m = f[1] - f[2] - a * d;
                (d || m) && C(t, o) && (c += m, p += d), o = o instanceof ShadowRoot ? o.host : o.parentNode
              } while (!l && o !== document.body || l && (e.contains(o) || e === o));
              return (u && (i && Math.abs(c) < 1 || !i && s > c) || !u && (i && Math.abs(p) < 1 || !i && -s > p)) && (h = !0), h
            }(f, e, t, "h" === f ? o : h, !0)
          }), []),
          u = i.useCallback((function(t) {
            var r = t;
            if (D.length && D[D.length - 1] === o) {
              var n = "deltaY" in r ? T(r) : w(r),
                i = e.current.filter((function(t) {
                  return t.name === r.type && (t.target === r.target || r.target === t.shadowParent) && (e = t.delta, i = n, e[0] === i[0] && e[1] === i[1]);
                  var e, i
                }))[0];
              if (i && i.should) r.cancelable && r.preventDefault();
              else if (!i) {
                var a = (l.current.shards || []).map(_).filter(Boolean).filter((function(t) {
                  return t.contains(r.target)
                }));
                (a.length > 0 ? h(r, a[0]) : !l.current.noIsolation) && r.cancelable && r.preventDefault()
              }
            }
          }), []),
          c = i.useCallback((function(t, r, n, i) {
            var a = {
              name: t,
              delta: r,
              target: n,
              should: i,
              shadowParent: I(n)
            };
            e.current.push(a), setTimeout((function() {
              e.current = e.current.filter((function(t) {
                return t !== a
              }))
            }), 1)
          }), []),
          p = i.useCallback((function(t) {
            r.current = w(t), a.current = void 0
          }), []),
          d = i.useCallback((function(e) {
            c(e.type, T(e), e.target, h(e, t.lockRef.current))
          }), []),
          m = i.useCallback((function(e) {
            c(e.type, w(e), e.target, h(e, t.lockRef.current))
          }), []);
        i.useEffect((function() {
          return D.push(o), t.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", u, x), document.addEventListener("touchmove", u, x), document.addEventListener("touchstart", p, x),
            function() {
              D = D.filter((function(t) {
                return t !== o
              })), document.removeEventListener("wheel", u, x), document.removeEventListener("touchmove", u, x), document.removeEventListener("touchstart", p, x)
            }
        }), []);
        var v = t.removeScrollBar,
          y = t.inert;
        return i.createElement(i.Fragment, null, y ? i.createElement(o, {
          styles: A(s)
        }) : null, v ? i.createElement(g, {
          gapMode: t.gapMode
        }) : null)
      })), c);
      var O = i.forwardRef((function(t, e) {
        return i.createElement(u, (0, n.C3)({}, t, {
          ref: e,
          sideCar: F
        }))
      }));
      O.classNames = u.classNames;
      const R = O
    },
    95364: (t, e) => {
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
          h = i.value,
          u = a.value;
        if (l) {
          var c = e.height / 100;
          h = i.value * c, u = a.value * c
        }
        var p = "%" === s.unit && "%" === o.unit,
          f = o.value,
          d = s.value;
        if (p) {
          var m = e.width / 100;
          f = o.value * m, d = s.value * m
        }
        var v = Math.abs(h) + Math.abs(u);
        this.totalDistY = n.height + e.height + v;
        var y = n.height + e.height + (u > h ? -1 * v : v),
          g = Math.abs(f) + Math.abs(d);
        this.totalDistX = n.width + e.width + g;
        var b = n.width + e.width + (d > f ? -1 * g : g),
          S = e.originTotalDistY / y,
          x = e.originTotalDistX / b;
        this.top = e.top, this.bottom = e.bottom, h < 0 && (this.top = this.top + h * S), u > 0 && (this.bottom = this.bottom + u * S), this.left = e.left, this.right = e.right, f < 0 && (this.left = this.left + f * x), d > 0 && (this.right = this.right + d * x)
      }
    },
    9560: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Element = void 0;
      var n = r(89932),
        i = r(44964),
        a = r(57892),
        s = l(r(95364)),
        o = l(r(73100));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
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

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? h(Object(r), !0).forEach((function(e) {
            c(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) {
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
            return this.props = u(u({}, this.props), t), this.offsets = (0, i.getOffsets)(t), this
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
    48708: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = r(89932),
        i = r(44964),
        a = r(39820),
        s = r(34779),
        o = r(9560),
        l = r(57892);

      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
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

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? u(Object(r), !0).forEach((function(e) {
            p(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
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
          u = t.scrollContainer,
          p = [],
          f = !!u,
          d = u || window,
          m = f ? d.scrollLeft : window.pageXOffset,
          v = f ? d.scrollTop : window.pageYOffset,
          y = new s.Scroll(m, v),
          g = new a.View({
            width: 0,
            height: 0,
            scrollContainer: u
          }),
          b = !1,
          S = (0, n.testForPassiveScroll)();

        function x(t) {
          t.addEventListener("scroll", E, !!S && {
            passive: !0
          }), window.addEventListener("resize", C, !1)
        }

        function P(t) {
          t.removeEventListener("scroll", E, !!S && {
            passive: !0
          }), window.removeEventListener("resize", C, !1)
        }

        function E() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          y.setScroll(t, e), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(M))
        }

        function C() {
          T(), M({
            updateCache: !0
          })
        }

        function M() {
          var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(e) {
            w(e), t && e.setCachedAttributes(g, y)
          })), b = !1
        }

        function w(t) {
          t.props.disabled || t.updatePosition(g, y)
        }

        function T() {
          if (f) {
            var t = d.offsetWidth,
              e = d.offsetHeight;
            return g.setSize(t, e)
          }
          var r = document.documentElement,
            n = window.innerWidth || r.clientWidth,
            i = window.innerHeight || r.clientHeight;
          return g.setSize(n, i)
        }
        x(d), T(), this.getElements = function() {
          return p
        }, this.createElement = function(t) {
          var e, n = new o.Element(c(c({}, t), {}, {
            scrollAxis: r
          }));
          return n.setCachedAttributes(g, y), p = p ? [].concat(function(t) {
            if (Array.isArray(t)) return h(t)
          }(e = p) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [n]) : [n], w(n), n
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
          y.setScroll(t, e), T(), M({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(t) {
          P(d), d = t, f = !!t, g = new a.View({
            width: 0,
            height: 0,
            scrollContainer: t
          }), T(), x(d), M({
            updateCache: !0
          })
        }, this.destroy = function() {
          P(d), p && p.forEach((function(t) {
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
    73100: (t, e) => {
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
    34779: (t, e) => {
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
    39820: (t, e) => {
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
    91520: (t, e, r) => {
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
          var e = h();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(51664)),
        a = l(r(71424)),
        s = l(r(48708)),
        o = l(r(92320));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function h() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return h = function() {
          return t
        }, t
      }

      function u(t, e) {
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
        }(h, t);
        var e, r, a, o, l = (a = h, o = function() {
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

        function h() {
          var t;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, h);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          return d(p(t = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(e) {
            t._outer = e
          })), d(p(t), "mapRefInner", (function(e) {
            t._inner = e
          })), t
        }
        return e = h, (r = [{
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
        }]) && u(e.prototype, r), h
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
    13708: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = s(r(51664)),
        i = s(r(71424)),
        a = s(r(91520));

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

      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(r), !0).forEach((function(e) {
            u(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function u(t, e, r) {
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
            style: h(h({}, c), s),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, i.map((function(t, e) {
            var r = t.amount,
              i = t.children,
              s = t.expanded,
              u = void 0 === s || s,
              c = t.image,
              f = t.props,
              d = void 0 === f ? {} : f,
              m = d.style || {},
              v = d.className || "";
            delete d.style, delete d.className;
            var y = "parallax-banner-layer-".concat(e).concat(v ? " ".concat(v) : ""),
              g = u ? {
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
              className: y,
              style: h(h(h(h({}, b), p), g), m)
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
    40648: (t, e, r) => {
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
        }(r(51664)),
        a = u(r(71424)),
        s = u(r(92752)),
        o = u(r(48708)),
        l = r(57892),
        h = u(r(86569));

      function u(t) {
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
        }(u, t);
        var e, r, a, l, h = (a = u, l = function() {
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

        function u(t) {
          var e, r;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, u), (e = h.call(this, t)).controller = (r = {
            scrollAxis: t.scrollAxis,
            scrollContainer: t.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), e
        }
        return e = u, (r = [{
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
        }]) && p(e.prototype, r), u
      }(i.Component);
      e.default = v, m(v, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(v, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: h.default
      })
    },
    98784: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n, i = r(51664),
        a = (n = r(92752)) && n.__esModule ? n : {
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
    92320: (t, e, r) => {
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
        }(r(51664)),
        a = o(r(71424)),
        s = o(r(92752));

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

      function h() {
        return h = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, h.apply(this, arguments)
      }

      function u(t, e) {
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
                return i.default.createElement(t, h({
                  parallaxController: r
                }, e.props))
              }))
            }
          }]) && u(r.prototype, a), d
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
    57892: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.HORIZONTAL = e.VERTICAL = void 0, e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal"
    },
    92752: (t, e, r) => {
      "use strict";
      var n;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = ((n = r(51664)) && n.__esModule ? n : {
        default: n
      }).default.createContext(null);
      e.default = i
    },
    29837: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.setParallaxStyles = function(t, e, r) {
        var i = (0, n.getParallaxOffsets)(e, r),
          a = i.x,
          s = a.value,
          o = a.unit,
          l = i.y,
          h = l.value,
          u = l.unit;
        t.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(h).concat(u, ", 0)")
      }, e.resetStyles = function(t) {
        t.elInner.style.transform = ""
      };
      var n = r(29864)
    },
    26516: (t, e, r) => {
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
          h = (0, n.parseValueAndUnit)(i);
        if (l.unit !== h.unit || s.unit !== o.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: l.unit || "%",
          yUnit: s.unit || "%",
          y0: s,
          y1: o,
          x0: l,
          x1: h
        }
      };
      var n = r(89932)
    },
    29864: (t, e, r) => {
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
      var n = r(89932)
    },
    44964: (t, e, r) => {
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
      var n = h(r(92752)),
        i = r(31288),
        a = r(29837),
        s = r(29864),
        o = r(59352),
        l = h(r(26516));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    59352: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.isElementInView = function(t, e, r, n) {
        var i = t - n,
          a = e - n;
        return i >= 0 && i <= r || a >= 0 && a <= r || i <= 0 && a >= r
      }
    },
    31288: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.percentMoved = function(t, e, r, n) {
        return (-1 * (t - n) + r) / e * 100
      }
    },
    77616: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "oZ", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "mw", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "qK", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(e, "Sr", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      });
      var n = o(r(98784)),
        i = (o(r(92320)), o(r(91520))),
        a = o(r(40648)),
        s = o(r(13708));
      o(r(92752));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    98357: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.createId = function() {
        return ++r
      };
      var r = 0
    },
    89932: (t, e, r) => {
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
      var n = o(r(25536)),
        i = o(r(16512)),
        a = o(r(45560)),
        s = r(98357);

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    25536: (t, e) => {
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
    16512: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e, r, n, i) {
        return (r - e) * (t - n) / (i - n) + e
      }
    },
    45560: (t, e) => {
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
    86569: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !t[e] || t[e] instanceof window.Element ? null : new Error('Prop name "'.concat(e, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    30300: (t, e, r) => {
      "use strict";
      r.d(e, {
        cp: () => hn
      });
      var n = r(62504);

      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? i(Object(r), !0).forEach((function(e) {
            (0, n.c)(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function o(t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(t, e) : void 0
        }
      }

      function l(t, e) {
        return function(t) {
          if (Array.isArray(t)) return t
        }(t) || function(t, e) {
          var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null != r) {
            var n, i, a, s, o = [],
              l = !0,
              h = !1;
            try {
              if (a = (r = r.call(t)).next, 0 === e) {
                if (Object(r) !== r) return;
                l = !1
              } else
                for (; !(l = (n = a.call(r)).done) && (o.push(n.value), o.length !== e); l = !0);
            } catch (t) {
              h = !0, i = t
            } finally {
              try {
                if (!l && null != r.return && (s = r.return(), Object(s) !== s)) return
              } finally {
                if (h) throw i
              }
            }
            return o
          }
        }(t, e) || o(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var h = r(31632);

      function u(t, e) {
        if (null == t) return {};
        var r, n, i = (0, h.c)(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
      }
      var c = r(51664),
        p = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"],
        f = r(82795),
        d = r(53952);

      function m(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (0, d.c)(n.key), n)
        }
      }
      var v = r(74848);

      function y(t) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, y(t)
      }
      var g = r(28792);

      function b(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var r, n = y(t);
          if (e) {
            var i = y(this).constructor;
            r = Reflect.construct(n, arguments, i)
          } else r = n.apply(this, arguments);
          return function(t, e) {
            if (e && ("object" === (0, g.c)(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t)
          }(this, r)
        }
      }

      function S(t) {
        return function(t) {
          if (Array.isArray(t)) return s(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || o(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var x = function() {
          function t(t) {
            var e = this;
            this._insertTag = function(t) {
              var r;
              r = 0 === e.tags.length ? e.insertionPoint ? e.insertionPoint.nextSibling : e.prepend ? e.container.firstChild : e.before : e.tags[e.tags.length - 1].nextSibling, e.container.insertBefore(t, r), e.tags.push(t)
            }, this.isSpeedy = void 0 === t.speedy || t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null
          }
          var e = t.prototype;
          return e.hydrate = function(t) {
            t.forEach(this._insertTag)
          }, e.insert = function(t) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(t) {
              var e = document.createElement("style");
              return e.setAttribute("data-emotion", t.key), void 0 !== t.nonce && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e
            }(this));
            var e = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var r = function(t) {
                if (t.sheet) return t.sheet;
                for (var e = 0; e < document.styleSheets.length; e++)
                  if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e]
              }(e);
              try {
                r.insertRule(t, r.cssRules.length)
              } catch (t) {}
            } else e.appendChild(document.createTextNode(t));
            this.ctr++
          }, e.flush = function() {
            this.tags.forEach((function(t) {
              return t.parentNode && t.parentNode.removeChild(t)
            })), this.tags = [], this.ctr = 0
          }, t
        }(),
        P = Math.abs,
        E = String.fromCharCode,
        C = Object.assign;

      function M(t) {
        return t.trim()
      }

      function w(t, e, r) {
        return t.replace(e, r)
      }

      function T(t, e) {
        return t.indexOf(e)
      }

      function _(t, e) {
        return 0 | t.charCodeAt(e)
      }

      function A(t, e, r) {
        return t.slice(e, r)
      }

      function k(t) {
        return t.length
      }

      function D(t) {
        return t.length
      }

      function I(t, e) {
        return e.push(t), t
      }
      var F = 1,
        O = 1,
        R = 0,
        V = 0,
        L = 0,
        B = "";

      function N(t, e, r, n, i, a, s) {
        return {
          value: t,
          root: e,
          parent: r,
          type: n,
          props: i,
          children: a,
          line: F,
          column: O,
          length: s,
          return: ""
        }
      }

      function z(t, e) {
        return C(N("", null, null, "", null, null, 0), t, {
          length: -t.length
        }, e)
      }

      function G() {
        return L = V > 0 ? _(B, --V) : 0, O--, 10 === L && (O = 1, F--), L
      }

      function j() {
        return L = V < R ? _(B, V++) : 0, O++, 10 === L && (O = 1, F++), L
      }

      function H() {
        return _(B, V)
      }

      function W() {
        return V
      }

      function q(t, e) {
        return A(B, t, e)
      }

      function U(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1
        }
        return 0
      }

      function Y(t) {
        return F = O = 1, R = k(B = t), V = 0, []
      }

      function $(t) {
        return B = "", t
      }

      function X(t) {
        return M(q(V - 1, J(91 === t ? t + 2 : 40 === t ? t + 1 : t)))
      }

      function K(t) {
        for (;
          (L = H()) && L < 33;) j();
        return U(t) > 2 || U(L) > 3 ? "" : " "
      }

      function Z(t, e) {
        for (; --e && j() && !(L < 48 || L > 102 || L > 57 && L < 65 || L > 70 && L < 97););
        return q(t, W() + (e < 6 && 32 == H() && 32 == j()))
      }

      function J(t) {
        for (; j();) switch (L) {
          case t:
            return V;
          case 34:
          case 39:
            34 !== t && 39 !== t && J(L);
            break;
          case 40:
            41 === t && J(t);
            break;
          case 92:
            j()
        }
        return V
      }

      function Q(t, e) {
        for (; j() && t + L !== 57 && (t + L !== 84 || 47 !== H()););
        return "/*" + q(e, V - 1) + "*" + E(47 === t ? t : j())
      }

      function tt(t) {
        for (; !U(H());) j();
        return q(t, V)
      }
      var et = "-ms-",
        rt = "-moz-",
        nt = "-webkit-",
        it = "comm",
        at = "rule",
        st = "decl",
        ot = "@keyframes";

      function lt(t, e) {
        for (var r = "", n = D(t), i = 0; i < n; i++) r += e(t[i], i, t, e) || "";
        return r
      }

      function ht(t, e, r, n) {
        switch (t.type) {
          case "@layer":
            if (t.children.length) break;
          case "@import":
          case st:
            return t.return = t.return || t.value;
          case it:
            return "";
          case ot:
            return t.return = t.value + "{" + lt(t.children, n) + "}";
          case at:
            t.value = t.props.join(",")
        }
        return k(r = lt(t.children, n)) ? t.return = t.value + "{" + r + "}" : ""
      }

      function ut(t) {
        return $(ct("", null, null, null, [""], t = Y(t), 0, [0], t))
      }

      function ct(t, e, r, n, i, a, s, o, l) {
        for (var h = 0, u = 0, c = s, p = 0, f = 0, d = 0, m = 1, v = 1, y = 1, g = 0, b = "", S = i, x = a, P = n, C = b; v;) switch (d = g, g = j()) {
          case 40:
            if (108 != d && 58 == _(C, c - 1)) {
              -1 != T(C += w(X(g), "&", "&\f"), "&\f") && (y = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            C += X(g);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            C += K(d);
            break;
          case 92:
            C += Z(W() - 1, 7);
            continue;
          case 47:
            switch (H()) {
              case 42:
              case 47:
                I(ft(Q(j(), W()), e, r), l);
                break;
              default:
                C += "/"
            }
            break;
          case 123 * m:
            o[h++] = k(C) * y;
          case 125 * m:
          case 59:
          case 0:
            switch (g) {
              case 0:
              case 125:
                v = 0;
              case 59 + u:
                -1 == y && (C = w(C, /\f/g, "")), f > 0 && k(C) - c && I(f > 32 ? dt(C + ";", n, r, c - 1) : dt(w(C, " ", "") + ";", n, r, c - 2), l);
                break;
              case 59:
                C += ";";
              default:
                if (I(P = pt(C, e, r, h, u, i, o, b, S = [], x = [], c), a), 123 === g)
                  if (0 === u) ct(C, e, P, P, S, a, c, o, x);
                  else switch (99 === p && 110 === _(C, 3) ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ct(t, P, P, n && I(pt(t, P, P, 0, 0, i, o, b, i, S = [], c), x), i, x, c, o, n ? S : x);
                      break;
                    default:
                      ct(C, P, P, P, [""], x, 0, o, x)
                  }
            }
            h = u = f = 0, m = y = 1, b = C = "", c = s;
            break;
          case 58:
            c = 1 + k(C), f = d;
          default:
            if (m < 1)
              if (123 == g) --m;
              else if (125 == g && 0 == m++ && 125 == G()) continue;
            switch (C += E(g), g * m) {
              case 38:
                y = u > 0 ? 1 : (C += "\f", -1);
                break;
              case 44:
                o[h++] = (k(C) - 1) * y, y = 1;
                break;
              case 64:
                45 === H() && (C += X(j())), p = H(), u = c = k(b = C += tt(W())), g++;
                break;
              case 45:
                45 === d && 2 == k(C) && (m = 0)
            }
        }
        return a
      }

      function pt(t, e, r, n, i, a, s, o, l, h, u) {
        for (var c = i - 1, p = 0 === i ? a : [""], f = D(p), d = 0, m = 0, v = 0; d < n; ++d)
          for (var y = 0, g = A(t, c + 1, c = P(m = s[d])), b = t; y < f; ++y)(b = M(m > 0 ? p[y] + " " + g : w(g, /&\f/g, p[y]))) && (l[v++] = b);
        return N(t, e, r, 0 === i ? at : o, l, h, u)
      }

      function ft(t, e, r) {
        return N(t, e, r, it, E(L), A(t, 2, -2), 0)
      }

      function dt(t, e, r, n) {
        return N(t, e, r, st, A(t, 0, n), A(t, n + 1, -1), n)
      }
      var mt = function(t, e, r) {
          for (var n = 0, i = 0; n = i, i = H(), 38 === n && 12 === i && (e[r] = 1), !U(i);) j();
          return q(t, V)
        },
        vt = new WeakMap,
        yt = function(t) {
          if ("rule" === t.type && t.parent && !(t.length < 1)) {
            for (var e = t.value, r = t.parent, n = t.column === r.column && t.line === r.line;
              "rule" !== r.type;)
              if (!(r = r.parent)) return;
            if ((1 !== t.props.length || 58 === e.charCodeAt(0) || vt.get(r)) && !n) {
              vt.set(t, !0);
              for (var i = [], a = function(t, e) {
                  return $(function(t, e) {
                    var r = -1,
                      n = 44;
                    do {
                      switch (U(n)) {
                        case 0:
                          38 === n && 12 === H() && (e[r] = 1), t[r] += mt(V - 1, e, r);
                          break;
                        case 2:
                          t[r] += X(n);
                          break;
                        case 4:
                          if (44 === n) {
                            t[++r] = 58 === H() ? "&\f" : "", e[r] = t[r].length;
                            break
                          }
                        default:
                          t[r] += E(n)
                      }
                    } while (n = j());
                    return t
                  }(Y(t), e))
                }(e, i), s = r.props, o = 0, l = 0; o < a.length; o++)
                for (var h = 0; h < s.length; h++, l++) t.props[l] = i[o] ? a[o].replace(/&\f/g, s[h]) : s[h] + " " + a[o]
            }
          }
        },
        gt = function(t) {
          if ("decl" === t.type) {
            var e = t.value;
            108 === e.charCodeAt(0) && 98 === e.charCodeAt(2) && (t.return = "", t.value = "")
          }
        };

      function bt(t, e) {
        switch (function(t, e) {
            return 45 ^ _(t, 0) ? (((e << 2 ^ _(t, 0)) << 2 ^ _(t, 1)) << 2 ^ _(t, 2)) << 2 ^ _(t, 3) : 0
          }(t, e)) {
          case 5103:
            return nt + "print-" + t + t;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return nt + t + t;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return nt + t + rt + t + et + t + t;
          case 6828:
          case 4268:
            return nt + t + et + t + t;
          case 6165:
            return nt + t + et + "flex-" + t + t;
          case 5187:
            return nt + t + w(t, /(\w+).+(:[^]+)/, nt + "box-$1$2" + et + "flex-$1$2") + t;
          case 5443:
            return nt + t + et + "flex-item-" + w(t, /flex-|-self/, "") + t;
          case 4675:
            return nt + t + et + "flex-line-pack" + w(t, /align-content|flex-|-self/, "") + t;
          case 5548:
            return nt + t + et + w(t, "shrink", "negative") + t;
          case 5292:
            return nt + t + et + w(t, "basis", "preferred-size") + t;
          case 6060:
            return nt + "box-" + w(t, "-grow", "") + nt + t + et + w(t, "grow", "positive") + t;
          case 4554:
            return nt + w(t, /([^-])(transform)/g, "$1" + nt + "$2") + t;
          case 6187:
            return w(w(w(t, /(zoom-|grab)/, nt + "$1"), /(image-set)/, nt + "$1"), t, "") + t;
          case 5495:
          case 3959:
            return w(t, /(image-set\([^]*)/, nt + "$1$`$1");
          case 4968:
            return w(w(t, /(.+:)(flex-)?(.*)/, nt + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + nt + t + t;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return w(t, /(.+)-inline(.+)/, nt + "$1$2") + t;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (k(t) - 1 - e > 6) switch (_(t, e + 1)) {
              case 109:
                if (45 !== _(t, e + 4)) break;
              case 102:
                return w(t, /(.+:)(.+)-([^]+)/, "$1" + nt + "$2-$3$1" + rt + (108 == _(t, e + 3) ? "$3" : "$2-$3")) + t;
              case 115:
                return ~T(t, "stretch") ? bt(w(t, "stretch", "fill-available"), e) + t : t
            }
            break;
          case 4949:
            if (115 !== _(t, e + 1)) break;
          case 6444:
            switch (_(t, k(t) - 3 - (~T(t, "!important") && 10))) {
              case 107:
                return w(t, ":", ":" + nt) + t;
              case 101:
                return w(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + nt + (45 === _(t, 14) ? "inline-" : "") + "box$3$1" + nt + "$2$3$1" + et + "$2box$3") + t
            }
            break;
          case 5936:
            switch (_(t, e + 11)) {
              case 114:
                return nt + t + et + w(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
              case 108:
                return nt + t + et + w(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
              case 45:
                return nt + t + et + w(t, /[svh]\w+-[tblr]{2}/, "lr") + t
            }
            return nt + t + et + t + t
        }
        return t
      }
      var St = [function(t, e, r, n) {
          if (t.length > -1 && !t.return) switch (t.type) {
            case st:
              t.return = bt(t.value, t.length);
              break;
            case ot:
              return lt([z(t, {
                value: w(t.value, "@", "@" + nt)
              })], n);
            case at:
              if (t.length) return function(t, e) {
                return t.map(e).join("")
              }(t.props, (function(e) {
                switch (function(t, e) {
                    return (t = /(::plac\w+|:read-\w+)/.exec(t)) ? t[0] : t
                  }(e)) {
                  case ":read-only":
                  case ":read-write":
                    return lt([z(t, {
                      props: [w(e, /:(read-\w+)/, ":-moz-$1")]
                    })], n);
                  case "::placeholder":
                    return lt([z(t, {
                      props: [w(e, /:(plac\w+)/, ":" + nt + "input-$1")]
                    }), z(t, {
                      props: [w(e, /:(plac\w+)/, ":-moz-$1")]
                    }), z(t, {
                      props: [w(e, /:(plac\w+)/, et + "input-$1")]
                    })], n)
                }
                return ""
              }))
          }
        }],
        xt = function(t) {
          var e = t.key;
          if ("css" === e) {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, (function(t) {
              -1 !== t.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(t), t.setAttribute("data-s", ""))
            }))
          }
          var n, i, a = t.stylisPlugins || St,
            s = {},
            o = [];
          n = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + e + ' "]'), (function(t) {
            for (var e = t.getAttribute("data-emotion").split(" "), r = 1; r < e.length; r++) s[e[r]] = !0;
            o.push(t)
          }));
          var l, h, u, c, p = [ht, (c = function(t) {
              l.insert(t)
            }, function(t) {
              t.root || (t = t.return) && c(t)
            })],
            f = (h = [yt, gt].concat(a, p), u = D(h), function(t, e, r, n) {
              for (var i = "", a = 0; a < u; a++) i += h[a](t, e, r, n) || "";
              return i
            });
          i = function(t, e, r, n) {
            l = r, lt(ut(t ? t + "{" + e.styles + "}" : e.styles), f), n && (d.inserted[e.name] = !0)
          };
          var d = {
            key: e,
            sheet: new x({
              key: e,
              container: n,
              nonce: t.nonce,
              speedy: t.speedy,
              prepend: t.prepend,
              insertionPoint: t.insertionPoint
            }),
            nonce: t.nonce,
            inserted: s,
            registered: {},
            insert: i
          };
          return d.sheet.hydrate(o), d
        },
        Pt = function(t, e, r) {
          var n = t.key + "-" + e.name;
          !1 === r && void 0 === t.registered[n] && (t.registered[n] = e.styles)
        },
        Et = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };

      function Ct(t) {
        var e = Object.create(null);
        return function(r) {
          return void 0 === e[r] && (e[r] = t(r)), e[r]
        }
      }
      var Mt = /[A-Z]|^ms/g,
        wt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Tt = function(t) {
          return 45 === t.charCodeAt(1)
        },
        _t = function(t) {
          return null != t && "boolean" != typeof t
        },
        At = Ct((function(t) {
          return Tt(t) ? t : t.replace(Mt, "-$&").toLowerCase()
        })),
        kt = function(t, e) {
          switch (t) {
            case "animation":
            case "animationName":
              if ("string" == typeof e) return e.replace(wt, (function(t, e, r) {
                return It = {
                  name: e,
                  styles: r,
                  next: It
                }, e
              }))
          }
          return 1 === Et[t] || Tt(t) || "number" != typeof e || 0 === e ? e : e + "px"
        };

      function Dt(t, e, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim) return It = {
              name: r.name,
              styles: r.styles,
              next: It
            }, r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n;) It = {
                  name: n.name,
                  styles: n.styles,
                  next: It
                }, n = n.next;
              return r.styles + ";"
            }
            return function(t, e, r) {
              var n = "";
              if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) n += Dt(t, e, r[i]) + ";";
              else
                for (var a in r) {
                  var s = r[a];
                  if ("object" != typeof s) null != e && void 0 !== e[s] ? n += a + "{" + e[s] + "}" : _t(s) && (n += At(a) + ":" + kt(a, s) + ";");
                  else if (!Array.isArray(s) || "string" != typeof s[0] || null != e && void 0 !== e[s[0]]) {
                    var o = Dt(t, e, s);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        n += At(a) + ":" + o + ";";
                        break;
                      default:
                        n += a + "{" + o + "}"
                    }
                  } else
                    for (var l = 0; l < s.length; l++) _t(s[l]) && (n += At(a) + ":" + kt(a, s[l]) + ";")
                }
              return n
            }(t, e, r);
          case "function":
            if (void 0 !== t) {
              var i = It,
                a = r(t);
              return It = i, Dt(t, e, a)
            }
        }
        if (null == e) return r;
        var s = e[r];
        return void 0 !== s ? s : r
      }
      var It, Ft = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Ot = function(t, e, r) {
          if (1 === t.length && "object" == typeof t[0] && null !== t[0] && void 0 !== t[0].styles) return t[0];
          var n = !0,
            i = "";
          It = void 0;
          var a = t[0];
          null == a || void 0 === a.raw ? (n = !1, i += Dt(r, e, a)) : i += a[0];
          for (var s = 1; s < t.length; s++) i += Dt(r, e, t[s]), n && (i += a[s]);
          Ft.lastIndex = 0;
          for (var o, l = ""; null !== (o = Ft.exec(i));) l += "-" + o[1];
          var h = function(t) {
            for (var e, r = 0, n = 0, i = t.length; i >= 4; ++n, i -= 4) e = 1540483477 * (65535 & (e = 255 & t.charCodeAt(n) | (255 & t.charCodeAt(++n)) << 8 | (255 & t.charCodeAt(++n)) << 16 | (255 & t.charCodeAt(++n)) << 24)) + (59797 * (e >>> 16) << 16), r = 1540483477 * (65535 & (e ^= e >>> 24)) + (59797 * (e >>> 16) << 16) ^ 1540483477 * (65535 & r) + (59797 * (r >>> 16) << 16);
            switch (i) {
              case 3:
                r ^= (255 & t.charCodeAt(n + 2)) << 16;
              case 2:
                r ^= (255 & t.charCodeAt(n + 1)) << 8;
              case 1:
                r = 1540483477 * (65535 & (r ^= 255 & t.charCodeAt(n))) + (59797 * (r >>> 16) << 16)
            }
            return (((r = 1540483477 * (65535 & (r ^= r >>> 13)) + (59797 * (r >>> 16) << 16)) ^ r >>> 15) >>> 0).toString(36)
          }(i) + l;
          return {
            name: h,
            styles: i,
            next: It
          }
        },
        Rt = !!c.useInsertionEffect && c.useInsertionEffect,
        Vt = Rt || function(t) {
          return t()
        },
        Lt = (Rt || c.useLayoutEffect, {}.hasOwnProperty),
        Bt = c.createContext("undefined" != typeof HTMLElement ? xt({
          key: "css"
        }) : null);
      Bt.Provider;
      var Nt = function(t) {
          return (0, c.forwardRef)((function(e, r) {
            var n = (0, c.useContext)(Bt);
            return t(e, n, r)
          }))
        },
        zt = c.createContext({}),
        Gt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        jt = function(t) {
          var e = t.cache,
            r = t.serialized,
            n = t.isStringTag;
          return Pt(e, r, n), Vt((function() {
            return function(t, e, r) {
              Pt(t, e, r);
              var n = t.key + "-" + e.name;
              if (void 0 === t.inserted[e.name]) {
                var i = e;
                do {
                  t.insert(e === i ? "." + n : "", i, t.sheet, !0), i = i.next
                } while (void 0 !== i)
              }
            }(e, r, n)
          })), null
        },
        Ht = Nt((function(t, e, r) {
          var n = t.css;
          "string" == typeof n && void 0 !== e.registered[n] && (n = e.registered[n]);
          var i = t[Gt],
            a = [n],
            s = "";
          "string" == typeof t.className ? s = function(t, e, r) {
            var n = "";
            return r.split(" ").forEach((function(r) {
              void 0 !== t[r] ? e.push(t[r] + ";") : n += r + " "
            })), n
          }(e.registered, a, t.className) : null != t.className && (s = t.className + " ");
          var o = Ot(a, void 0, c.useContext(zt));
          s += e.key + "-" + o.name;
          var l = {};
          for (var h in t) Lt.call(t, h) && "css" !== h && h !== Gt && (l[h] = t[h]);
          return l.ref = r, l.className = s, c.createElement(c.Fragment, null, c.createElement(jt, {
            cache: e,
            serialized: o,
            isStringTag: "string" == typeof i
          }), c.createElement(i, l))
        })),
        Wt = Ht,
        qt = (r(39216), function(t, e) {
          var r = arguments;
          if (null == e || !Lt.call(e, "css")) return c.createElement.apply(void 0, r);
          var n = r.length,
            i = new Array(n);
          i[0] = Wt, i[1] = function(t, e) {
            var r = {};
            for (var n in e) Lt.call(e, n) && (r[n] = e[n]);
            return r[Gt] = t, r
          }(t, e);
          for (var a = 2; a < n; a++) i[a] = r[a];
          return c.createElement.apply(null, i)
        });

      function Ut() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return Ot(e)
      }
      var Yt = r(77364);
      const $t = Math.min,
        Xt = Math.max,
        Kt = Math.round,
        Zt = Math.floor,
        Jt = t => ({
          x: t,
          y: t
        });

      function Qt(t) {
        return re(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function te(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function ee(t) {
        var e;
        return null == (e = (re(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function re(t) {
        return t instanceof Node || t instanceof te(t).Node
      }

      function ne(t) {
        return t instanceof Element || t instanceof te(t).Element
      }

      function ie(t) {
        return t instanceof HTMLElement || t instanceof te(t).HTMLElement
      }

      function ae(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof te(t).ShadowRoot)
      }

      function se(t) {
        const {
          overflow: e,
          overflowX: r,
          overflowY: n,
          display: i
        } = oe(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(i)
      }

      function oe(t) {
        return te(t).getComputedStyle(t)
      }

      function le(t) {
        const e = function(t) {
          if ("html" === Qt(t)) return t;
          const e = t.assignedSlot || t.parentNode || ae(t) && t.host || ee(t);
          return ae(e) ? e.host : e
        }(t);
        return function(t) {
          return ["html", "body", "#document"].includes(Qt(t))
        }(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ie(e) && se(e) ? e : le(e)
      }

      function he(t, e, r) {
        var n;
        void 0 === e && (e = []), void 0 === r && (r = !0);
        const i = le(t),
          a = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          s = te(i);
        return a ? e.concat(s, s.visualViewport || [], se(i) ? i : [], s.frameElement && r ? he(s.frameElement) : []) : e.concat(i, he(i, [], r))
      }

      function ue(t) {
        return ne(t) ? t : t.contextElement
      }

      function ce(t) {
        const e = ue(t);
        if (!ie(e)) return Jt(1);
        const r = e.getBoundingClientRect(),
          {
            width: n,
            height: i,
            $: a
          } = function(t) {
            const e = oe(t);
            let r = parseFloat(e.width) || 0,
              n = parseFloat(e.height) || 0;
            const i = ie(t),
              a = i ? t.offsetWidth : r,
              s = i ? t.offsetHeight : n,
              o = Kt(r) !== a || Kt(n) !== s;
            return o && (r = a, n = s), {
              width: r,
              height: n,
              $: o
            }
          }(e);
        let s = (a ? Kt(r.width) : r.width) / n,
          o = (a ? Kt(r.height) : r.height) / i;
        return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), {
          x: s,
          y: o
        }
      }
      const pe = Jt(0);

      function fe(t) {
        const e = te(t);
        return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : pe
      }

      function de(t, e, r, n) {
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        const i = t.getBoundingClientRect(),
          a = ue(t);
        let s = Jt(1);
        e && (n ? ne(n) && (s = ce(n)) : s = ce(t));
        const o = function(t, e, r) {
          return void 0 === e && (e = !1), !(!r || e && r !== te(t)) && e
        }(a, r, n) ? fe(a) : Jt(0);
        let l = (i.left + o.x) / s.x,
          h = (i.top + o.y) / s.y,
          u = i.width / s.x,
          c = i.height / s.y;
        if (a) {
          const t = te(a),
            e = n && ne(n) ? te(n) : n;
          let r = t.frameElement;
          for (; r && n && e !== t;) {
            const t = ce(r),
              e = r.getBoundingClientRect(),
              n = oe(r),
              i = e.left + (r.clientLeft + parseFloat(n.paddingLeft)) * t.x,
              a = e.top + (r.clientTop + parseFloat(n.paddingTop)) * t.y;
            l *= t.x, h *= t.y, u *= t.x, c *= t.y, l += i, h += a, r = te(r).frameElement
          }
        }
        return p = {
          width: u,
          height: c,
          x: l,
          y: h
        }, {
          ...p,
          top: p.y,
          left: p.x,
          right: p.x + p.width,
          bottom: p.y + p.height
        };
        var p
      }
      const me = c.useLayoutEffect;
      var ve = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
        ye = function() {};

      function ge(t, e) {
        return e ? "-" === e[0] ? t + e : t + "__" + e : t
      }

      function be(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        var a = [].concat(n);
        if (e && t)
          for (var s in e) e.hasOwnProperty(s) && e[s] && a.push("".concat(ge(t, s)));
        return a.filter((function(t) {
          return t
        })).map((function(t) {
          return String(t).trim()
        })).join(" ")
      }
      var Se = function(t) {
          return e = t, Array.isArray(e) ? t.filter(Boolean) : "object" === (0, g.c)(t) && null !== t ? [t] : [];
          var e
        },
        xe = function(t) {
          return t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme, a({}, u(t, ve))
        },
        Pe = function(t, e, r) {
          var n = t.cx,
            i = t.getStyles,
            a = t.getClassNames,
            s = t.className;
          return {
            css: i(e, t),
            className: n(null != r ? r : {}, a(e, t), s)
          }
        };

      function Ee(t) {
        return [document.documentElement, document.body, window].indexOf(t) > -1
      }

      function Ce(t) {
        return Ee(t) ? window.pageYOffset : t.scrollTop
      }

      function Me(t, e) {
        Ee(t) ? window.scrollTo(0, e) : t.scrollTop = e
      }

      function we(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ye,
          i = Ce(t),
          a = e - i,
          s = 0;
        ! function e() {
          var o, l = a * ((o = (o = s += 10) / r - 1) * o * o + 1) + i;
          Me(t, l), s < r ? window.requestAnimationFrame(e) : n(t)
        }()
      }

      function Te(t, e) {
        var r = t.getBoundingClientRect(),
          n = e.getBoundingClientRect(),
          i = e.offsetHeight / 3;
        n.bottom + i > r.bottom ? Me(t, Math.min(e.offsetTop + e.clientHeight - t.offsetHeight + i, t.scrollHeight)) : n.top - i < r.top && Me(t, Math.max(e.offsetTop - i, 0))
      }

      function _e() {
        try {
          return document.createEvent("TouchEvent"), !0
        } catch (t) {
          return !1
        }
      }
      var Ae = !1,
        ke = {
          get passive() {
            return Ae = !0
          }
        },
        De = "undefined" != typeof window ? window : {};
      De.addEventListener && De.removeEventListener && (De.addEventListener("p", ye, ke), De.removeEventListener("p", ye, !1));
      var Ie = Ae;

      function Fe(t) {
        return null != t
      }

      function Oe(t, e, r) {
        return t ? e : r
      }
      var Re = ["children", "innerProps"],
        Ve = ["children", "innerProps"];
      var Le, Be, Ne, ze = function(t) {
          return "auto" === t ? "bottom" : t
        },
        Ge = (0, c.createContext)(null),
        je = function(t) {
          var e = t.children,
            r = t.minMenuHeight,
            n = t.maxMenuHeight,
            i = t.menuPlacement,
            s = t.menuPosition,
            o = t.menuShouldScrollIntoView,
            h = t.theme,
            u = ((0, c.useContext)(Ge) || {}).setPortalPlacement,
            p = (0, c.useRef)(null),
            f = l((0, c.useState)(n), 2),
            d = f[0],
            m = f[1],
            v = l((0, c.useState)(null), 2),
            y = v[0],
            g = v[1],
            b = h.spacing.controlHeight;
          return me((function() {
            var t = p.current;
            if (t) {
              var e = "fixed" === s,
                a = function(t) {
                  var e = t.maxHeight,
                    r = t.menuEl,
                    n = t.minHeight,
                    i = t.placement,
                    a = t.shouldScroll,
                    s = t.isFixedPosition,
                    o = t.controlHeight,
                    l = function(t) {
                      var e = getComputedStyle(t),
                        r = "absolute" === e.position,
                        n = /(auto|scroll)/;
                      if ("fixed" === e.position) return document.documentElement;
                      for (var i = t; i = i.parentElement;)
                        if (e = getComputedStyle(i), (!r || "static" !== e.position) && n.test(e.overflow + e.overflowY + e.overflowX)) return i;
                      return document.documentElement
                    }(r),
                    h = {
                      placement: "bottom",
                      maxHeight: e
                    };
                  if (!r || !r.offsetParent) return h;
                  var u, c = l.getBoundingClientRect().height,
                    p = r.getBoundingClientRect(),
                    f = p.bottom,
                    d = p.height,
                    m = p.top,
                    v = r.offsetParent.getBoundingClientRect().top,
                    y = s || Ee(u = l) ? window.innerHeight : u.clientHeight,
                    g = Ce(l),
                    b = parseInt(getComputedStyle(r).marginBottom, 10),
                    S = parseInt(getComputedStyle(r).marginTop, 10),
                    x = v - S,
                    P = y - m,
                    E = x + g,
                    C = c - g - m,
                    M = f - y + g + b,
                    w = g + m - S,
                    T = 160;
                  switch (i) {
                    case "auto":
                    case "bottom":
                      if (P >= d) return {
                        placement: "bottom",
                        maxHeight: e
                      };
                      if (C >= d && !s) return a && we(l, M, T), {
                        placement: "bottom",
                        maxHeight: e
                      };
                      if (!s && C >= n || s && P >= n) return a && we(l, M, T), {
                        placement: "bottom",
                        maxHeight: s ? P - b : C - b
                      };
                      if ("auto" === i || s) {
                        var _ = e,
                          A = s ? x : E;
                        return A >= n && (_ = Math.min(A - b - o, e)), {
                          placement: "top",
                          maxHeight: _
                        }
                      }
                      if ("bottom" === i) return a && Me(l, M), {
                        placement: "bottom",
                        maxHeight: e
                      };
                      break;
                    case "top":
                      if (x >= d) return {
                        placement: "top",
                        maxHeight: e
                      };
                      if (E >= d && !s) return a && we(l, w, T), {
                        placement: "top",
                        maxHeight: e
                      };
                      if (!s && E >= n || s && x >= n) {
                        var k = e;
                        return (!s && E >= n || s && x >= n) && (k = s ? x - S : E - S), a && we(l, w, T), {
                          placement: "top",
                          maxHeight: k
                        }
                      }
                      return {
                        placement: "bottom", maxHeight: e
                      };
                    default:
                      throw new Error('Invalid placement provided "'.concat(i, '".'))
                  }
                  return h
                }({
                  maxHeight: n,
                  menuEl: t,
                  minHeight: r,
                  placement: i,
                  shouldScroll: o && !e,
                  isFixedPosition: e,
                  controlHeight: b
                });
              m(a.maxHeight), g(a.placement), null == u || u(a.placement)
            }
          }), [n, i, s, o, r, u, b]), e({
            ref: p,
            placerProps: a(a({}, t), {}, {
              placement: y || ze(i),
              maxHeight: d
            })
          })
        },
        He = function(t, e) {
          var r = t.theme,
            n = r.spacing.baseUnit,
            i = r.colors;
          return a({
            textAlign: "center"
          }, e ? {} : {
            color: i.neutral40,
            padding: "".concat(2 * n, "px ").concat(3 * n, "px")
          })
        },
        We = He,
        qe = He,
        Ue = ["size"],
        Ye = ["innerProps", "isRtl", "size"],
        $e = {
          name: "8mmkcg",
          styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
        },
        Xe = function(t) {
          var e = t.size,
            r = u(t, Ue);
          return qt("svg", (0, f.c)({
            height: e,
            width: e,
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            focusable: "false",
            css: $e
          }, r))
        },
        Ke = function(t) {
          return qt(Xe, (0, f.c)({
            size: 20
          }, t), qt("path", {
            d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
          }))
        },
        Ze = function(t) {
          return qt(Xe, (0, f.c)({
            size: 20
          }, t), qt("path", {
            d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
          }))
        },
        Je = function(t, e) {
          var r = t.isFocused,
            n = t.theme,
            i = n.spacing.baseUnit,
            s = n.colors;
          return a({
            label: "indicatorContainer",
            display: "flex",
            transition: "color 150ms"
          }, e ? {} : {
            color: r ? s.neutral60 : s.neutral20,
            padding: 2 * i,
            ":hover": {
              color: r ? s.neutral80 : s.neutral40
            }
          })
        },
        Qe = Je,
        tr = Je,
        er = function() {
          var t = Ut.apply(void 0, arguments),
            e = "animation-" + t.name;
          return {
            name: e,
            styles: "@keyframes " + e + "{" + t.styles + "}",
            anim: 1,
            toString: function() {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
          }
        }(Le || (Be = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Ne || (Ne = Be.slice(0)), Le = Object.freeze(Object.defineProperties(Be, {
          raw: {
            value: Object.freeze(Ne)
          }
        })))),
        rr = function(t) {
          var e = t.delay,
            r = t.offset;
          return qt("span", {
            css: Ut({
              animation: "".concat(er, " 1s ease-in-out ").concat(e, "ms infinite;"),
              backgroundColor: "currentColor",
              borderRadius: "1em",
              display: "inline-block",
              marginLeft: r ? "1em" : void 0,
              height: "1em",
              verticalAlign: "top",
              width: "1em"
            }, "", "")
          })
        },
        nr = ["data"],
        ir = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
        ar = {
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0
        },
        sr = {
          flex: "1 1 auto",
          display: "inline-grid",
          gridArea: "1 / 1 / 2 / 3",
          gridTemplateColumns: "0 min-content",
          "&:after": a({
            content: 'attr(data-value) " "',
            visibility: "hidden",
            whiteSpace: "pre"
          }, ar)
        },
        or = function(t) {
          return a({
            label: "input",
            color: "inherit",
            background: 0,
            opacity: t ? 0 : 1,
            width: "100%"
          }, ar)
        },
        lr = function(t) {
          var e = t.children,
            r = t.innerProps;
          return qt("div", r, e)
        },
        hr = {
          ClearIndicator: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "clearIndicator", {
              indicator: !0,
              "clear-indicator": !0
            }), r), e || qt(Ke, null))
          },
          Control: function(t) {
            var e = t.children,
              r = t.isDisabled,
              n = t.isFocused,
              i = t.innerRef,
              a = t.innerProps,
              s = t.menuIsOpen;
            return qt("div", (0, f.c)({
              ref: i
            }, Pe(t, "control", {
              control: !0,
              "control--is-disabled": r,
              "control--is-focused": n,
              "control--menu-is-open": s
            }), a, {
              "aria-disabled": r || void 0
            }), e)
          },
          DropdownIndicator: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "dropdownIndicator", {
              indicator: !0,
              "dropdown-indicator": !0
            }), r), e || qt(Ze, null))
          },
          DownChevron: Ze,
          CrossIcon: Ke,
          Group: function(t) {
            var e = t.children,
              r = t.cx,
              n = t.getStyles,
              i = t.getClassNames,
              a = t.Heading,
              s = t.headingProps,
              o = t.innerProps,
              l = t.label,
              h = t.theme,
              u = t.selectProps;
            return qt("div", (0, f.c)({}, Pe(t, "group", {
              group: !0
            }), o), qt(a, (0, f.c)({}, s, {
              selectProps: u,
              theme: h,
              getStyles: n,
              getClassNames: i,
              cx: r
            }), l), qt("div", null, e))
          },
          GroupHeading: function(t) {
            var e = xe(t);
            e.data;
            var r = u(e, nr);
            return qt("div", (0, f.c)({}, Pe(t, "groupHeading", {
              "group-heading": !0
            }), r))
          },
          IndicatorsContainer: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "indicatorsContainer", {
              indicators: !0
            }), r), e)
          },
          IndicatorSeparator: function(t) {
            var e = t.innerProps;
            return qt("span", (0, f.c)({}, e, Pe(t, "indicatorSeparator", {
              "indicator-separator": !0
            })))
          },
          Input: function(t) {
            var e = t.cx,
              r = t.value,
              n = xe(t),
              i = n.innerRef,
              a = n.isDisabled,
              s = n.isHidden,
              o = n.inputClassName,
              l = u(n, ir);
            return qt("div", (0, f.c)({}, Pe(t, "input", {
              "input-container": !0
            }), {
              "data-value": r || ""
            }), qt("input", (0, f.c)({
              className: e({
                input: !0
              }, o),
              ref: i,
              style: or(s),
              disabled: a
            }, l)))
          },
          LoadingIndicator: function(t) {
            var e = t.innerProps,
              r = t.isRtl,
              n = t.size,
              i = void 0 === n ? 4 : n,
              s = u(t, Ye);
            return qt("div", (0, f.c)({}, Pe(a(a({}, s), {}, {
              innerProps: e,
              isRtl: r,
              size: i
            }), "loadingIndicator", {
              indicator: !0,
              "loading-indicator": !0
            }), e), qt(rr, {
              delay: 0,
              offset: r
            }), qt(rr, {
              delay: 160,
              offset: !0
            }), qt(rr, {
              delay: 320,
              offset: !r
            }))
          },
          Menu: function(t) {
            var e = t.children,
              r = t.innerRef,
              n = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "menu", {
              menu: !0
            }), {
              ref: r
            }, n), e)
          },
          MenuList: function(t) {
            var e = t.children,
              r = t.innerProps,
              n = t.innerRef,
              i = t.isMulti;
            return qt("div", (0, f.c)({}, Pe(t, "menuList", {
              "menu-list": !0,
              "menu-list--is-multi": i
            }), {
              ref: n
            }, r), e)
          },
          MenuPortal: function(t) {
            var e = t.appendTo,
              r = t.children,
              n = t.controlElement,
              i = t.innerProps,
              s = t.menuPlacement,
              o = t.menuPosition,
              h = (0, c.useRef)(null),
              u = (0, c.useRef)(null),
              p = l((0, c.useState)(ze(s)), 2),
              d = p[0],
              m = p[1],
              v = (0, c.useMemo)((function() {
                return {
                  setPortalPlacement: m
                }
              }), []),
              y = l((0, c.useState)(null), 2),
              g = y[0],
              b = y[1],
              S = (0, c.useCallback)((function() {
                if (n) {
                  var t = function(t) {
                      var e = t.getBoundingClientRect();
                      return {
                        bottom: e.bottom,
                        height: e.height,
                        left: e.left,
                        right: e.right,
                        top: e.top,
                        width: e.width
                      }
                    }(n),
                    e = "fixed" === o ? 0 : window.pageYOffset,
                    r = t[d] + e;
                  r === (null == g ? void 0 : g.offset) && t.left === (null == g ? void 0 : g.rect.left) && t.width === (null == g ? void 0 : g.rect.width) || b({
                    offset: r,
                    rect: t
                  })
                }
              }), [n, o, d, null == g ? void 0 : g.offset, null == g ? void 0 : g.rect.left, null == g ? void 0 : g.rect.width]);
            me((function() {
              S()
            }), [S]);
            var x = (0, c.useCallback)((function() {
              "function" == typeof u.current && (u.current(), u.current = null), n && h.current && (u.current = function(t, e, r, n) {
                void 0 === n && (n = {});
                const {
                  ancestorScroll: i = !0,
                  ancestorResize: a = !0,
                  elementResize: s = "function" == typeof ResizeObserver,
                  layoutShift: o = "function" == typeof IntersectionObserver,
                  animationFrame: l = !1
                } = n, h = ue(t), u = i || a ? [...h ? he(h) : [], ...he(e)] : [];
                u.forEach((t => {
                  i && t.addEventListener("scroll", r, {
                    passive: !0
                  }), a && t.addEventListener("resize", r)
                }));
                const c = h && o ? function(t, e) {
                  let r, n = null;
                  const i = ee(t);

                  function a() {
                    clearTimeout(r), n && n.disconnect(), n = null
                  }
                  return function s(o, l) {
                    void 0 === o && (o = !1), void 0 === l && (l = 1), a();
                    const {
                      left: h,
                      top: u,
                      width: c,
                      height: p
                    } = t.getBoundingClientRect();
                    if (o || e(), !c || !p) return;
                    const f = {
                      rootMargin: -Zt(u) + "px " + -Zt(i.clientWidth - (h + c)) + "px " + -Zt(i.clientHeight - (u + p)) + "px " + -Zt(h) + "px",
                      threshold: Xt(0, $t(1, l)) || 1
                    };
                    let d = !0;

                    function m(t) {
                      const e = t[0].intersectionRatio;
                      if (e !== l) {
                        if (!d) return s();
                        e ? s(!1, e) : r = setTimeout((() => {
                          s(!1, 1e-7)
                        }), 100)
                      }
                      d = !1
                    }
                    try {
                      n = new IntersectionObserver(m, {
                        ...f,
                        root: i.ownerDocument
                      })
                    } catch (t) {
                      n = new IntersectionObserver(m, f)
                    }
                    n.observe(t)
                  }(!0), a
                }(h, r) : null;
                let p, f = -1,
                  d = null;
                s && (d = new ResizeObserver((t => {
                  let [n] = t;
                  n && n.target === h && d && (d.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                    d && d.observe(e)
                  }))), r()
                })), h && !l && d.observe(h), d.observe(e));
                let m = l ? de(t) : null;
                return l && function e() {
                  const n = de(t);
                  !m || n.x === m.x && n.y === m.y && n.width === m.width && n.height === m.height || r(), m = n, p = requestAnimationFrame(e)
                }(), r(), () => {
                  u.forEach((t => {
                    i && t.removeEventListener("scroll", r), a && t.removeEventListener("resize", r)
                  })), c && c(), d && d.disconnect(), d = null, l && cancelAnimationFrame(p)
                }
              }(n, h.current, S, {
                elementResize: "ResizeObserver" in window
              }))
            }), [n, S]);
            me((function() {
              x()
            }), [x]);
            var P = (0, c.useCallback)((function(t) {
              h.current = t, x()
            }), [x]);
            if (!e && "fixed" !== o || !g) return null;
            var E = qt("div", (0, f.c)({
              ref: P
            }, Pe(a(a({}, t), {}, {
              offset: g.offset,
              position: o,
              rect: g.rect
            }), "menuPortal", {
              "menu-portal": !0
            }), i), r);
            return qt(Ge.Provider, {
              value: v
            }, e ? (0, Yt.createPortal)(E, e) : E)
          },
          LoadingMessage: function(t) {
            var e = t.children,
              r = void 0 === e ? "Loading..." : e,
              n = t.innerProps,
              i = u(t, Ve);
            return qt("div", (0, f.c)({}, Pe(a(a({}, i), {}, {
              children: r,
              innerProps: n
            }), "loadingMessage", {
              "menu-notice": !0,
              "menu-notice--loading": !0
            }), n), r)
          },
          NoOptionsMessage: function(t) {
            var e = t.children,
              r = void 0 === e ? "No options" : e,
              n = t.innerProps,
              i = u(t, Re);
            return qt("div", (0, f.c)({}, Pe(a(a({}, i), {}, {
              children: r,
              innerProps: n
            }), "noOptionsMessage", {
              "menu-notice": !0,
              "menu-notice--no-options": !0
            }), n), r)
          },
          MultiValue: function(t) {
            var e = t.children,
              r = t.components,
              n = t.data,
              i = t.innerProps,
              s = t.isDisabled,
              o = t.removeProps,
              l = t.selectProps,
              h = r.Container,
              u = r.Label,
              c = r.Remove;
            return qt(h, {
              data: n,
              innerProps: a(a({}, Pe(t, "multiValue", {
                "multi-value": !0,
                "multi-value--is-disabled": s
              })), i),
              selectProps: l
            }, qt(u, {
              data: n,
              innerProps: a({}, Pe(t, "multiValueLabel", {
                "multi-value__label": !0
              })),
              selectProps: l
            }, e), qt(c, {
              data: n,
              innerProps: a(a({}, Pe(t, "multiValueRemove", {
                "multi-value__remove": !0
              })), {}, {
                "aria-label": "Remove ".concat(e || "option")
              }, o),
              selectProps: l
            }))
          },
          MultiValueContainer: lr,
          MultiValueLabel: lr,
          MultiValueRemove: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({
              role: "button"
            }, r), e || qt(Ke, {
              size: 14
            }))
          },
          Option: function(t) {
            var e = t.children,
              r = t.isDisabled,
              n = t.isFocused,
              i = t.isSelected,
              a = t.innerRef,
              s = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "option", {
              option: !0,
              "option--is-disabled": r,
              "option--is-focused": n,
              "option--is-selected": i
            }), {
              ref: a,
              "aria-disabled": r
            }, s), e)
          },
          Placeholder: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "placeholder", {
              placeholder: !0
            }), r), e)
          },
          SelectContainer: function(t) {
            var e = t.children,
              r = t.innerProps,
              n = t.isDisabled,
              i = t.isRtl;
            return qt("div", (0, f.c)({}, Pe(t, "container", {
              "--is-disabled": n,
              "--is-rtl": i
            }), r), e)
          },
          SingleValue: function(t) {
            var e = t.children,
              r = t.isDisabled,
              n = t.innerProps;
            return qt("div", (0, f.c)({}, Pe(t, "singleValue", {
              "single-value": !0,
              "single-value--is-disabled": r
            }), n), e)
          },
          ValueContainer: function(t) {
            var e = t.children,
              r = t.innerProps,
              n = t.isMulti,
              i = t.hasValue;
            return qt("div", (0, f.c)({}, Pe(t, "valueContainer", {
              "value-container": !0,
              "value-container--is-multi": n,
              "value-container--has-value": i
            }), r), e)
          }
        },
        ur = Number.isNaN || function(t) {
          return "number" == typeof t && t != t
        };

      function cr(t, e) {
        if (t.length !== e.length) return !1;
        for (var r = 0; r < t.length; r++)
          if (!((n = t[r]) === (i = e[r]) || ur(n) && ur(i))) return !1;
        var n, i;
        return !0
      }
      for (var pr = {
          name: "7pg0cj-a11yText",
          styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
        }, fr = function(t) {
          return qt("span", (0, f.c)({
            css: pr
          }, t))
        }, dr = {
          guidance: function(t) {
            var e = t.isSearchable,
              r = t.isMulti,
              n = t.tabSelectsValue,
              i = t.context,
              a = t.isInitialFocus;
            switch (i) {
              case "menu":
                return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
              case "input":
                return a ? "".concat(t["aria-label"] || "Select", " is focused ").concat(e ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
              case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
              default:
                return ""
            }
          },
          onChange: function(t) {
            var e = t.action,
              r = t.label,
              n = void 0 === r ? "" : r,
              i = t.labels,
              a = t.isDisabled;
            switch (e) {
              case "deselect-option":
              case "pop-value":
              case "remove-value":
                return "option ".concat(n, ", deselected.");
              case "clear":
                return "All selected options have been cleared.";
              case "initial-input-focus":
                return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
              case "select-option":
                return "option ".concat(n, a ? " is disabled. Select another option." : ", selected.");
              default:
                return ""
            }
          },
          onFocus: function(t) {
            var e = t.context,
              r = t.focused,
              n = t.options,
              i = t.label,
              a = void 0 === i ? "" : i,
              s = t.selectValue,
              o = t.isDisabled,
              l = t.isSelected,
              h = t.isAppleDevice,
              u = function(t, e) {
                return t && t.length ? "".concat(t.indexOf(e) + 1, " of ").concat(t.length) : ""
              };
            if ("value" === e && s) return "value ".concat(a, " focused, ").concat(u(s, r), ".");
            if ("menu" === e && h) {
              var c = o ? " disabled" : "",
                p = "".concat(l ? " selected" : "").concat(c);
              return "".concat(a).concat(p, ", ").concat(u(n, r), ".")
            }
            return ""
          },
          onFilter: function(t) {
            var e = t.inputValue,
              r = t.resultsMessage;
            return "".concat(r).concat(e ? " for search term " + e : "", ".")
          }
        }, mr = function(t) {
          var e = t.ariaSelection,
            r = t.focusedOption,
            n = t.focusedValue,
            i = t.focusableOptions,
            s = t.isFocused,
            o = t.selectValue,
            l = t.selectProps,
            h = t.id,
            u = t.isAppleDevice,
            p = l.ariaLiveMessages,
            f = l.getOptionLabel,
            d = l.inputValue,
            m = l.isMulti,
            v = l.isOptionDisabled,
            y = l.isSearchable,
            g = l.menuIsOpen,
            b = l.options,
            S = l.screenReaderStatus,
            x = l.tabSelectsValue,
            P = l.isLoading,
            E = l["aria-label"],
            C = l["aria-live"],
            M = (0, c.useMemo)((function() {
              return a(a({}, dr), p || {})
            }), [p]),
            w = (0, c.useMemo)((function() {
              var t, r = "";
              if (e && M.onChange) {
                var n = e.option,
                  i = e.options,
                  s = e.removedValue,
                  l = e.removedValues,
                  h = e.value,
                  u = s || n || (t = h, Array.isArray(t) ? null : t),
                  c = u ? f(u) : "",
                  p = i || l || void 0,
                  d = p ? p.map(f) : [],
                  m = a({
                    isDisabled: u && v(u, o),
                    label: c,
                    labels: d
                  }, e);
                r = M.onChange(m)
              }
              return r
            }), [e, M, v, o, f]),
            T = (0, c.useMemo)((function() {
              var t = "",
                e = r || n,
                a = !!(r && o && o.includes(r));
              if (e && M.onFocus) {
                var s = {
                  focused: e,
                  label: f(e),
                  isDisabled: v(e, o),
                  isSelected: a,
                  options: i,
                  context: e === r ? "menu" : "value",
                  selectValue: o,
                  isAppleDevice: u
                };
                t = M.onFocus(s)
              }
              return t
            }), [r, n, f, v, M, i, o, u]),
            _ = (0, c.useMemo)((function() {
              var t = "";
              if (g && b.length && !P && M.onFilter) {
                var e = S({
                  count: i.length
                });
                t = M.onFilter({
                  inputValue: d,
                  resultsMessage: e
                })
              }
              return t
            }), [i, d, g, M, b, S, P]),
            A = "initial-input-focus" === (null == e ? void 0 : e.action),
            k = (0, c.useMemo)((function() {
              var t = "";
              if (M.guidance) {
                var e = n ? "value" : g ? "menu" : "input";
                t = M.guidance({
                  "aria-label": E,
                  context: e,
                  isDisabled: r && v(r, o),
                  isMulti: m,
                  isSearchable: y,
                  tabSelectsValue: x,
                  isInitialFocus: A
                })
              }
              return t
            }), [E, r, n, m, v, y, g, M, o, x, A]),
            D = qt(c.Fragment, null, qt("span", {
              id: "aria-selection"
            }, w), qt("span", {
              id: "aria-focused"
            }, T), qt("span", {
              id: "aria-results"
            }, _), qt("span", {
              id: "aria-guidance"
            }, k));
          return qt(c.Fragment, null, qt(fr, {
            id: h
          }, A && D), qt(fr, {
            "aria-live": C,
            "aria-atomic": "false",
            "aria-relevant": "additions text",
            role: "log"
          }, s && !A && D))
        }, vr = [{
          base: "A",
          letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
        }, {
          base: "AA",
          letters: "Ꜳ"
        }, {
          base: "AE",
          letters: "ÆǼǢ"
        }, {
          base: "AO",
          letters: "Ꜵ"
        }, {
          base: "AU",
          letters: "Ꜷ"
        }, {
          base: "AV",
          letters: "ꜸꜺ"
        }, {
          base: "AY",
          letters: "Ꜽ"
        }, {
          base: "B",
          letters: "BⒷＢḂḄḆɃƂƁ"
        }, {
          base: "C",
          letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
        }, {
          base: "D",
          letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
        }, {
          base: "DZ",
          letters: "ǱǄ"
        }, {
          base: "Dz",
          letters: "ǲǅ"
        }, {
          base: "E",
          letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
        }, {
          base: "F",
          letters: "FⒻＦḞƑꝻ"
        }, {
          base: "G",
          letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
        }, {
          base: "H",
          letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
        }, {
          base: "I",
          letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
        }, {
          base: "J",
          letters: "JⒿＪĴɈ"
        }, {
          base: "K",
          letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
        }, {
          base: "L",
          letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
        }, {
          base: "LJ",
          letters: "Ǉ"
        }, {
          base: "Lj",
          letters: "ǈ"
        }, {
          base: "M",
          letters: "MⓂＭḾṀṂⱮƜ"
        }, {
          base: "N",
          letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
        }, {
          base: "NJ",
          letters: "Ǌ"
        }, {
          base: "Nj",
          letters: "ǋ"
        }, {
          base: "O",
          letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
        }, {
          base: "OI",
          letters: "Ƣ"
        }, {
          base: "OO",
          letters: "Ꝏ"
        }, {
          base: "OU",
          letters: "Ȣ"
        }, {
          base: "P",
          letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
        }, {
          base: "Q",
          letters: "QⓆＱꝖꝘɊ"
        }, {
          base: "R",
          letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
        }, {
          base: "S",
          letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
        }, {
          base: "T",
          letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
        }, {
          base: "TZ",
          letters: "Ꜩ"
        }, {
          base: "U",
          letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
        }, {
          base: "V",
          letters: "VⓋＶṼṾƲꝞɅ"
        }, {
          base: "VY",
          letters: "Ꝡ"
        }, {
          base: "W",
          letters: "WⓌＷẀẂŴẆẄẈⱲ"
        }, {
          base: "X",
          letters: "XⓍＸẊẌ"
        }, {
          base: "Y",
          letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
        }, {
          base: "Z",
          letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
        }, {
          base: "a",
          letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
        }, {
          base: "aa",
          letters: "ꜳ"
        }, {
          base: "ae",
          letters: "æǽǣ"
        }, {
          base: "ao",
          letters: "ꜵ"
        }, {
          base: "au",
          letters: "ꜷ"
        }, {
          base: "av",
          letters: "ꜹꜻ"
        }, {
          base: "ay",
          letters: "ꜽ"
        }, {
          base: "b",
          letters: "bⓑｂḃḅḇƀƃɓ"
        }, {
          base: "c",
          letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
        }, {
          base: "d",
          letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
        }, {
          base: "dz",
          letters: "ǳǆ"
        }, {
          base: "e",
          letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
        }, {
          base: "f",
          letters: "fⓕｆḟƒꝼ"
        }, {
          base: "g",
          letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
        }, {
          base: "h",
          letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
        }, {
          base: "hv",
          letters: "ƕ"
        }, {
          base: "i",
          letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
        }, {
          base: "j",
          letters: "jⓙｊĵǰɉ"
        }, {
          base: "k",
          letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
        }, {
          base: "l",
          letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
        }, {
          base: "lj",
          letters: "ǉ"
        }, {
          base: "m",
          letters: "mⓜｍḿṁṃɱɯ"
        }, {
          base: "n",
          letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
        }, {
          base: "nj",
          letters: "ǌ"
        }, {
          base: "o",
          letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
        }, {
          base: "oi",
          letters: "ƣ"
        }, {
          base: "ou",
          letters: "ȣ"
        }, {
          base: "oo",
          letters: "ꝏ"
        }, {
          base: "p",
          letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
        }, {
          base: "q",
          letters: "qⓠｑɋꝗꝙ"
        }, {
          base: "r",
          letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
        }, {
          base: "s",
          letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
        }, {
          base: "t",
          letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
        }, {
          base: "tz",
          letters: "ꜩ"
        }, {
          base: "u",
          letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
        }, {
          base: "v",
          letters: "vⓥｖṽṿʋꝟʌ"
        }, {
          base: "vy",
          letters: "ꝡ"
        }, {
          base: "w",
          letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
        }, {
          base: "x",
          letters: "xⓧｘẋẍ"
        }, {
          base: "y",
          letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
        }, {
          base: "z",
          letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
        }], yr = new RegExp("[" + vr.map((function(t) {
          return t.letters
        })).join("") + "]", "g"), gr = {}, br = 0; br < vr.length; br++)
        for (var Sr = vr[br], xr = 0; xr < Sr.letters.length; xr++) gr[Sr.letters[xr]] = Sr.base;
      var Pr = function(t) {
          return t.replace(yr, (function(t) {
            return gr[t]
          }))
        },
        Er = function(t, e) {
          void 0 === e && (e = cr);
          var r = null;

          function n() {
            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            if (r && r.lastThis === this && e(n, r.lastArgs)) return r.lastResult;
            var a = t.apply(this, n);
            return r = {
              lastResult: a,
              lastArgs: n,
              lastThis: this
            }, a
          }
          return n.clear = function() {
            r = null
          }, n
        }(Pr),
        Cr = function(t) {
          return t.replace(/^\s+|\s+$/g, "")
        },
        Mr = function(t) {
          return "".concat(t.label, " ").concat(t.value)
        },
        wr = ["innerRef"];

      function Tr(t) {
        var e = t.innerRef,
          r = function(t) {
            for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
            var i = Object.entries(t).filter((function(t) {
              var e = l(t, 1)[0];
              return !r.includes(e)
            }));
            return i.reduce((function(t, e) {
              var r = l(e, 2),
                n = r[0],
                i = r[1];
              return t[n] = i, t
            }), {})
          }(u(t, wr), "onExited", "in", "enter", "exit", "appear");
        return qt("input", (0, f.c)({
          ref: e
        }, r, {
          css: Ut({
            label: "dummyInput",
            background: 0,
            border: 0,
            caretColor: "transparent",
            fontSize: "inherit",
            gridArea: "1 / 1 / 2 / 3",
            outline: 0,
            padding: 0,
            width: 1,
            color: "transparent",
            left: -100,
            opacity: 0,
            position: "relative",
            transform: "scale(.01)"
          }, "", "")
        }))
      }
      var _r = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        Ar = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%"
        };

      function kr(t) {
        t.preventDefault()
      }

      function Dr(t) {
        t.stopPropagation()
      }

      function Ir() {
        var t = this.scrollTop,
          e = this.scrollHeight,
          r = t + this.offsetHeight;
        0 === t ? this.scrollTop = 1 : r === e && (this.scrollTop = t - 1)
      }

      function Fr() {
        return "ontouchstart" in window || navigator.maxTouchPoints
      }
      var Or = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Rr = 0,
        Vr = {
          capture: !1,
          passive: !1
        },
        Lr = function(t) {
          var e = t.target;
          return e.ownerDocument.activeElement && e.ownerDocument.activeElement.blur()
        },
        Br = {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0"
        };

      function Nr(t) {
        var e = t.children,
          r = t.lockEnabled,
          n = t.captureEnabled,
          i = function(t) {
            var e = t.isEnabled,
              r = t.onBottomArrive,
              n = t.onBottomLeave,
              i = t.onTopArrive,
              a = t.onTopLeave,
              s = (0, c.useRef)(!1),
              o = (0, c.useRef)(!1),
              l = (0, c.useRef)(0),
              h = (0, c.useRef)(null),
              u = (0, c.useCallback)((function(t, e) {
                if (null !== h.current) {
                  var l = h.current,
                    u = l.scrollTop,
                    c = l.scrollHeight,
                    p = l.clientHeight,
                    f = h.current,
                    d = e > 0,
                    m = c - p - u,
                    v = !1;
                  m > e && s.current && (n && n(t), s.current = !1), d && o.current && (a && a(t), o.current = !1), d && e > m ? (r && !s.current && r(t), f.scrollTop = c, v = !0, s.current = !0) : !d && -e > u && (i && !o.current && i(t), f.scrollTop = 0, v = !0, o.current = !0), v && function(t) {
                    t.cancelable && t.preventDefault(), t.stopPropagation()
                  }(t)
                }
              }), [r, n, i, a]),
              p = (0, c.useCallback)((function(t) {
                u(t, t.deltaY)
              }), [u]),
              f = (0, c.useCallback)((function(t) {
                l.current = t.changedTouches[0].clientY
              }), []),
              d = (0, c.useCallback)((function(t) {
                var e = l.current - t.changedTouches[0].clientY;
                u(t, e)
              }), [u]),
              m = (0, c.useCallback)((function(t) {
                if (t) {
                  var e = !!Ie && {
                    passive: !1
                  };
                  t.addEventListener("wheel", p, e), t.addEventListener("touchstart", f, e), t.addEventListener("touchmove", d, e)
                }
              }), [d, f, p]),
              v = (0, c.useCallback)((function(t) {
                t && (t.removeEventListener("wheel", p, !1), t.removeEventListener("touchstart", f, !1), t.removeEventListener("touchmove", d, !1))
              }), [d, f, p]);
            return (0, c.useEffect)((function() {
                if (e) {
                  var t = h.current;
                  return m(t),
                    function() {
                      v(t)
                    }
                }
              }), [e, m, v]),
              function(t) {
                h.current = t
              }
          }({
            isEnabled: void 0 === n || n,
            onBottomArrive: t.onBottomArrive,
            onBottomLeave: t.onBottomLeave,
            onTopArrive: t.onTopArrive,
            onTopLeave: t.onTopLeave
          }),
          a = function(t) {
            var e = t.isEnabled,
              r = t.accountForScrollbars,
              n = void 0 === r || r,
              i = (0, c.useRef)({}),
              a = (0, c.useRef)(null),
              s = (0, c.useCallback)((function(t) {
                if (Or) {
                  var e = document.body,
                    r = e && e.style;
                  if (n && _r.forEach((function(t) {
                      var e = r && r[t];
                      i.current[t] = e
                    })), n && Rr < 1) {
                    var a = parseInt(i.current.paddingRight, 10) || 0,
                      s = document.body ? document.body.clientWidth : 0,
                      o = window.innerWidth - s + a || 0;
                    Object.keys(Ar).forEach((function(t) {
                      var e = Ar[t];
                      r && (r[t] = e)
                    })), r && (r.paddingRight = "".concat(o, "px"))
                  }
                  e && Fr() && (e.addEventListener("touchmove", kr, Vr), t && (t.addEventListener("touchstart", Ir, Vr), t.addEventListener("touchmove", Dr, Vr))), Rr += 1
                }
              }), [n]),
              o = (0, c.useCallback)((function(t) {
                if (Or) {
                  var e = document.body,
                    r = e && e.style;
                  Rr = Math.max(Rr - 1, 0), n && Rr < 1 && _r.forEach((function(t) {
                    var e = i.current[t];
                    r && (r[t] = e)
                  })), e && Fr() && (e.removeEventListener("touchmove", kr, Vr), t && (t.removeEventListener("touchstart", Ir, Vr), t.removeEventListener("touchmove", Dr, Vr)))
                }
              }), [n]);
            return (0, c.useEffect)((function() {
                if (e) {
                  var t = a.current;
                  return s(t),
                    function() {
                      o(t)
                    }
                }
              }), [e, s, o]),
              function(t) {
                a.current = t
              }
          }({
            isEnabled: r
          });
        return qt(c.Fragment, null, r && qt("div", {
          onClick: Lr,
          css: Br
        }), e((function(t) {
          i(t), a(t)
        })))
      }
      var zr = {
          name: "1a0ro4n-requiredInput",
          styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
        },
        Gr = function(t) {
          var e = t.name,
            r = t.onFocus;
          return qt("input", {
            required: !0,
            name: e,
            tabIndex: -1,
            "aria-hidden": "true",
            onFocus: r,
            css: zr,
            value: "",
            onChange: function() {}
          })
        };

      function jr(t) {
        var e;
        return "undefined" != typeof window && null != window.navigator && t.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform)
      }

      function Hr() {
        return jr(/^Mac/i)
      }
      var Wr = {
          clearIndicator: tr,
          container: function(t) {
            var e = t.isDisabled;
            return {
              label: "container",
              direction: t.isRtl ? "rtl" : void 0,
              pointerEvents: e ? "none" : void 0,
              position: "relative"
            }
          },
          control: function(t, e) {
            var r = t.isDisabled,
              n = t.isFocused,
              i = t.theme,
              s = i.colors,
              o = i.borderRadius;
            return a({
              label: "control",
              alignItems: "center",
              cursor: "default",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              minHeight: i.spacing.controlHeight,
              outline: "0 !important",
              position: "relative",
              transition: "all 100ms"
            }, e ? {} : {
              backgroundColor: r ? s.neutral5 : s.neutral0,
              borderColor: r ? s.neutral10 : n ? s.primary : s.neutral20,
              borderRadius: o,
              borderStyle: "solid",
              borderWidth: 1,
              boxShadow: n ? "0 0 0 1px ".concat(s.primary) : void 0,
              "&:hover": {
                borderColor: n ? s.primary : s.neutral30
              }
            })
          },
          dropdownIndicator: Qe,
          group: function(t, e) {
            var r = t.theme.spacing;
            return e ? {} : {
              paddingBottom: 2 * r.baseUnit,
              paddingTop: 2 * r.baseUnit
            }
          },
          groupHeading: function(t, e) {
            var r = t.theme,
              n = r.colors,
              i = r.spacing;
            return a({
              label: "group",
              cursor: "default",
              display: "block"
            }, e ? {} : {
              color: n.neutral40,
              fontSize: "75%",
              fontWeight: 500,
              marginBottom: "0.25em",
              paddingLeft: 3 * i.baseUnit,
              paddingRight: 3 * i.baseUnit,
              textTransform: "uppercase"
            })
          },
          indicatorsContainer: function() {
            return {
              alignItems: "center",
              alignSelf: "stretch",
              display: "flex",
              flexShrink: 0
            }
          },
          indicatorSeparator: function(t, e) {
            var r = t.isDisabled,
              n = t.theme,
              i = n.spacing.baseUnit,
              s = n.colors;
            return a({
              label: "indicatorSeparator",
              alignSelf: "stretch",
              width: 1
            }, e ? {} : {
              backgroundColor: r ? s.neutral10 : s.neutral20,
              marginBottom: 2 * i,
              marginTop: 2 * i
            })
          },
          input: function(t, e) {
            var r = t.isDisabled,
              n = t.value,
              i = t.theme,
              s = i.spacing,
              o = i.colors;
            return a(a({
              visibility: r ? "hidden" : "visible",
              transform: n ? "translateZ(0)" : ""
            }, sr), e ? {} : {
              margin: s.baseUnit / 2,
              paddingBottom: s.baseUnit / 2,
              paddingTop: s.baseUnit / 2,
              color: o.neutral80
            })
          },
          loadingIndicator: function(t, e) {
            var r = t.isFocused,
              n = t.size,
              i = t.theme,
              s = i.colors,
              o = i.spacing.baseUnit;
            return a({
              label: "loadingIndicator",
              display: "flex",
              transition: "color 150ms",
              alignSelf: "center",
              fontSize: n,
              lineHeight: 1,
              marginRight: n,
              textAlign: "center",
              verticalAlign: "middle"
            }, e ? {} : {
              color: r ? s.neutral60 : s.neutral20,
              padding: 2 * o
            })
          },
          loadingMessage: qe,
          menu: function(t, e) {
            var r, i = t.placement,
              s = t.theme,
              o = s.borderRadius,
              l = s.spacing,
              h = s.colors;
            return a((r = {
              label: "menu"
            }, (0, n.c)(r, function(t) {
              return t ? {
                bottom: "top",
                top: "bottom"
              } [t] : "bottom"
            }(i), "100%"), (0, n.c)(r, "position", "absolute"), (0, n.c)(r, "width", "100%"), (0, n.c)(r, "zIndex", 1), r), e ? {} : {
              backgroundColor: h.neutral0,
              borderRadius: o,
              boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
              marginBottom: l.menuGutter,
              marginTop: l.menuGutter
            })
          },
          menuList: function(t, e) {
            var r = t.maxHeight,
              n = t.theme.spacing.baseUnit;
            return a({
              maxHeight: r,
              overflowY: "auto",
              position: "relative",
              WebkitOverflowScrolling: "touch"
            }, e ? {} : {
              paddingBottom: n,
              paddingTop: n
            })
          },
          menuPortal: function(t) {
            var e = t.rect,
              r = t.offset,
              n = t.position;
            return {
              left: e.left,
              position: n,
              top: r,
              width: e.width,
              zIndex: 1
            }
          },
          multiValue: function(t, e) {
            var r = t.theme,
              n = r.spacing,
              i = r.borderRadius,
              s = r.colors;
            return a({
              label: "multiValue",
              display: "flex",
              minWidth: 0
            }, e ? {} : {
              backgroundColor: s.neutral10,
              borderRadius: i / 2,
              margin: n.baseUnit / 2
            })
          },
          multiValueLabel: function(t, e) {
            var r = t.theme,
              n = r.borderRadius,
              i = r.colors,
              s = t.cropWithEllipsis;
            return a({
              overflow: "hidden",
              textOverflow: s || void 0 === s ? "ellipsis" : void 0,
              whiteSpace: "nowrap"
            }, e ? {} : {
              borderRadius: n / 2,
              color: i.neutral80,
              fontSize: "85%",
              padding: 3,
              paddingLeft: 6
            })
          },
          multiValueRemove: function(t, e) {
            var r = t.theme,
              n = r.spacing,
              i = r.borderRadius,
              s = r.colors,
              o = t.isFocused;
            return a({
              alignItems: "center",
              display: "flex"
            }, e ? {} : {
              borderRadius: i / 2,
              backgroundColor: o ? s.dangerLight : void 0,
              paddingLeft: n.baseUnit,
              paddingRight: n.baseUnit,
              ":hover": {
                backgroundColor: s.dangerLight,
                color: s.danger
              }
            })
          },
          noOptionsMessage: We,
          option: function(t, e) {
            var r = t.isDisabled,
              n = t.isFocused,
              i = t.isSelected,
              s = t.theme,
              o = s.spacing,
              l = s.colors;
            return a({
              label: "option",
              cursor: "default",
              display: "block",
              fontSize: "inherit",
              width: "100%",
              userSelect: "none",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
            }, e ? {} : {
              backgroundColor: i ? l.primary : n ? l.primary25 : "transparent",
              color: r ? l.neutral20 : i ? l.neutral0 : "inherit",
              padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
              ":active": {
                backgroundColor: r ? void 0 : i ? l.primary : l.primary50
              }
            })
          },
          placeholder: function(t, e) {
            var r = t.theme,
              n = r.spacing,
              i = r.colors;
            return a({
              label: "placeholder",
              gridArea: "1 / 1 / 2 / 3"
            }, e ? {} : {
              color: i.neutral50,
              marginLeft: n.baseUnit / 2,
              marginRight: n.baseUnit / 2
            })
          },
          singleValue: function(t, e) {
            var r = t.isDisabled,
              n = t.theme,
              i = n.spacing,
              s = n.colors;
            return a({
              label: "singleValue",
              gridArea: "1 / 1 / 2 / 3",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, e ? {} : {
              color: r ? s.neutral40 : s.neutral80,
              marginLeft: i.baseUnit / 2,
              marginRight: i.baseUnit / 2
            })
          },
          valueContainer: function(t, e) {
            var r = t.theme.spacing,
              n = t.isMulti,
              i = t.hasValue,
              s = t.selectProps.controlShouldRenderValue;
            return a({
              alignItems: "center",
              display: n && i && s ? "flex" : "grid",
              flex: 1,
              flexWrap: "wrap",
              WebkitOverflowScrolling: "touch",
              position: "relative",
              overflow: "hidden"
            }, e ? {} : {
              padding: "".concat(r.baseUnit / 2, "px ").concat(2 * r.baseUnit, "px")
            })
          }
        },
        qr = {
          borderRadius: 4,
          colors: {
            primary: "#2684FF",
            primary75: "#4C9AFF",
            primary50: "#B2D4FF",
            primary25: "#DEEBFF",
            danger: "#DE350B",
            dangerLight: "#FFBDAD",
            neutral0: "hsl(0, 0%, 100%)",
            neutral5: "hsl(0, 0%, 95%)",
            neutral10: "hsl(0, 0%, 90%)",
            neutral20: "hsl(0, 0%, 80%)",
            neutral30: "hsl(0, 0%, 70%)",
            neutral40: "hsl(0, 0%, 60%)",
            neutral50: "hsl(0, 0%, 50%)",
            neutral60: "hsl(0, 0%, 40%)",
            neutral70: "hsl(0, 0%, 30%)",
            neutral80: "hsl(0, 0%, 20%)",
            neutral90: "hsl(0, 0%, 10%)"
          },
          spacing: {
            baseUnit: 4,
            controlHeight: 38,
            menuGutter: 8
          }
        },
        Ur = {
          "aria-live": "polite",
          backspaceRemovesValue: !0,
          blurInputOnSelect: _e(),
          captureMenuScroll: !_e(),
          classNames: {},
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function(t, e) {
            if (t.data.__isNew__) return !0;
            var r = a({
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: Mr,
                trim: !0,
                matchFrom: "any"
              }, undefined),
              n = r.ignoreCase,
              i = r.ignoreAccents,
              s = r.stringify,
              o = r.trim,
              l = r.matchFrom,
              h = o ? Cr(e) : e,
              u = o ? Cr(s(t)) : s(t);
            return n && (h = h.toLowerCase(), u = u.toLowerCase()), i && (h = Er(h), u = Pr(u)), "start" === l ? u.substr(0, h.length) === h : u.indexOf(h) > -1
          },
          formatGroupLabel: function(t) {
            return t.label
          },
          getOptionLabel: function(t) {
            return t.label
          },
          getOptionValue: function(t) {
            return t.value
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: function(t) {
            return !!t.isDisabled
          },
          loadingMessage: function() {
            return "Loading..."
          },
          maxMenuHeight: 300,
          minMenuHeight: 140,
          menuIsOpen: !1,
          menuPlacement: "bottom",
          menuPosition: "absolute",
          menuShouldBlockScroll: !1,
          menuShouldScrollIntoView: ! function() {
            try {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            } catch (t) {
              return !1
            }
          }(),
          noOptionsMessage: function() {
            return "No options"
          },
          openMenuOnFocus: !1,
          openMenuOnClick: !0,
          options: [],
          pageSize: 5,
          placeholder: "Select...",
          screenReaderStatus: function(t) {
            var e = t.count;
            return "".concat(e, " result").concat(1 !== e ? "s" : "", " available")
          },
          styles: {},
          tabIndex: 0,
          tabSelectsValue: !0,
          unstyled: !1
        };

      function Yr(t, e, r, n) {
        return {
          type: "option",
          data: e,
          isDisabled: en(t, e, r),
          isSelected: rn(t, e, r),
          label: Qr(t, e),
          value: tn(t, e),
          index: n
        }
      }

      function $r(t, e) {
        return t.options.map((function(r, n) {
          if ("options" in r) {
            var i = r.options.map((function(r, n) {
              return Yr(t, r, e, n)
            })).filter((function(e) {
              return Zr(t, e)
            }));
            return i.length > 0 ? {
              type: "group",
              data: r,
              options: i,
              index: n
            } : void 0
          }
          var a = Yr(t, r, e, n);
          return Zr(t, a) ? a : void 0
        })).filter(Fe)
      }

      function Xr(t) {
        return t.reduce((function(t, e) {
          return "group" === e.type ? t.push.apply(t, S(e.options.map((function(t) {
            return t.data
          })))) : t.push(e.data), t
        }), [])
      }

      function Kr(t, e) {
        return t.reduce((function(t, r) {
          return "group" === r.type ? t.push.apply(t, S(r.options.map((function(t) {
            return {
              data: t.data,
              id: "".concat(e, "-").concat(r.index, "-").concat(t.index)
            }
          })))) : t.push({
            data: r.data,
            id: "".concat(e, "-").concat(r.index)
          }), t
        }), [])
      }

      function Zr(t, e) {
        var r = t.inputValue,
          n = void 0 === r ? "" : r,
          i = e.data,
          a = e.isSelected,
          s = e.label,
          o = e.value;
        return (!an(t) || !a) && nn(t, {
          label: s,
          value: o,
          data: i
        }, n)
      }
      var Jr = function(t, e) {
          var r;
          return (null === (r = t.find((function(t) {
            return t.data === e
          }))) || void 0 === r ? void 0 : r.id) || null
        },
        Qr = function(t, e) {
          return t.getOptionLabel(e)
        },
        tn = function(t, e) {
          return t.getOptionValue(e)
        };

      function en(t, e, r) {
        return "function" == typeof t.isOptionDisabled && t.isOptionDisabled(e, r)
      }

      function rn(t, e, r) {
        if (r.indexOf(e) > -1) return !0;
        if ("function" == typeof t.isOptionSelected) return t.isOptionSelected(e, r);
        var n = tn(t, e);
        return r.some((function(e) {
          return tn(t, e) === n
        }))
      }

      function nn(t, e, r) {
        return !t.filterOption || t.filterOption(e, r)
      }
      var an = function(t) {
          var e = t.hideSelectedOptions,
            r = t.isMulti;
          return void 0 === e ? r : e
        },
        sn = 1,
        on = function(t) {
          ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && (0, v.c)(t, e)
          }(s, t);
          var e, r, n, i = b(s);

          function s(t) {
            var e;
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, s), (e = i.call(this, t)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedOptionId: null,
                focusableOptionsWithIds: [],
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0,
                instancePrefix: ""
              }, e.blockOptionHover = !1, e.isComposing = !1, e.commonProps = void 0, e.initialTouchX = 0, e.initialTouchY = 0, e.openAfterFocus = !1, e.scrollToFocusedOptionOnUpdate = !1, e.userIsDragging = void 0, e.isAppleDevice = Hr() || jr(/^iPhone/i) || jr(/^iPad/i) || Hr() && navigator.maxTouchPoints > 1, e.controlRef = null, e.getControlRef = function(t) {
                e.controlRef = t
              }, e.focusedOptionRef = null, e.getFocusedOptionRef = function(t) {
                e.focusedOptionRef = t
              }, e.menuListRef = null, e.getMenuListRef = function(t) {
                e.menuListRef = t
              }, e.inputRef = null, e.getInputRef = function(t) {
                e.inputRef = t
              }, e.focus = e.focusInput, e.blur = e.blurInput, e.onChange = function(t, r) {
                var n = e.props,
                  i = n.onChange,
                  a = n.name;
                r.name = a, e.ariaOnChange(t, r), i(t, r)
              }, e.setValue = function(t, r, n) {
                var i = e.props,
                  a = i.closeMenuOnSelect,
                  s = i.isMulti,
                  o = i.inputValue;
                e.onInputChange("", {
                  action: "set-value",
                  prevInputValue: o
                }), a && (e.setState({
                  inputIsHiddenAfterUpdate: !s
                }), e.onMenuClose()), e.setState({
                  clearFocusValueOnUpdate: !0
                }), e.onChange(t, {
                  action: r,
                  option: n
                })
              }, e.selectOption = function(t) {
                var r = e.props,
                  n = r.blurInputOnSelect,
                  i = r.isMulti,
                  a = r.name,
                  s = e.state.selectValue,
                  o = i && e.isOptionSelected(t, s),
                  l = e.isOptionDisabled(t, s);
                if (o) {
                  var h = e.getOptionValue(t);
                  e.setValue(s.filter((function(t) {
                    return e.getOptionValue(t) !== h
                  })), "deselect-option", t)
                } else {
                  if (l) return void e.ariaOnChange(t, {
                    action: "select-option",
                    option: t,
                    name: a
                  });
                  i ? e.setValue([].concat(S(s), [t]), "select-option", t) : e.setValue(t, "select-option")
                }
                n && e.blurInput()
              }, e.removeValue = function(t) {
                var r = e.props.isMulti,
                  n = e.state.selectValue,
                  i = e.getOptionValue(t),
                  a = n.filter((function(t) {
                    return e.getOptionValue(t) !== i
                  })),
                  s = Oe(r, a, a[0] || null);
                e.onChange(s, {
                  action: "remove-value",
                  removedValue: t
                }), e.focusInput()
              }, e.clearValue = function() {
                var t = e.state.selectValue;
                e.onChange(Oe(e.props.isMulti, [], null), {
                  action: "clear",
                  removedValues: t
                })
              }, e.popValue = function() {
                var t = e.props.isMulti,
                  r = e.state.selectValue,
                  n = r[r.length - 1],
                  i = r.slice(0, r.length - 1),
                  a = Oe(t, i, i[0] || null);
                e.onChange(a, {
                  action: "pop-value",
                  removedValue: n
                })
              }, e.getFocusedOptionId = function(t) {
                return Jr(e.state.focusableOptionsWithIds, t)
              }, e.getFocusableOptionsWithIds = function() {
                return Kr($r(e.props, e.state.selectValue), e.getElementId("option"))
              }, e.getValue = function() {
                return e.state.selectValue
              }, e.cx = function() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return be.apply(void 0, [e.props.classNamePrefix].concat(r))
              }, e.getOptionLabel = function(t) {
                return Qr(e.props, t)
              }, e.getOptionValue = function(t) {
                return tn(e.props, t)
              }, e.getStyles = function(t, r) {
                var n = e.props.unstyled,
                  i = Wr[t](r, n);
                i.boxSizing = "border-box";
                var a = e.props.styles[t];
                return a ? a(i, r) : i
              }, e.getClassNames = function(t, r) {
                var n, i;
                return null === (n = (i = e.props.classNames)[t]) || void 0 === n ? void 0 : n.call(i, r)
              }, e.getElementId = function(t) {
                return "".concat(e.state.instancePrefix, "-").concat(t)
              }, e.getComponents = function() {
                return t = e.props, a(a({}, hr), t.components);
                var t
              }, e.buildCategorizedOptions = function() {
                return $r(e.props, e.state.selectValue)
              }, e.getCategorizedOptions = function() {
                return e.props.menuIsOpen ? e.buildCategorizedOptions() : []
              }, e.buildFocusableOptions = function() {
                return Xr(e.buildCategorizedOptions())
              }, e.getFocusableOptions = function() {
                return e.props.menuIsOpen ? e.buildFocusableOptions() : []
              }, e.ariaOnChange = function(t, r) {
                e.setState({
                  ariaSelection: a({
                    value: t
                  }, r)
                })
              }, e.onMenuMouseDown = function(t) {
                0 === t.button && (t.stopPropagation(), t.preventDefault(), e.focusInput())
              }, e.onMenuMouseMove = function(t) {
                e.blockOptionHover = !1
              }, e.onControlMouseDown = function(t) {
                if (!t.defaultPrevented) {
                  var r = e.props.openMenuOnClick;
                  e.state.isFocused ? e.props.menuIsOpen ? "INPUT" !== t.target.tagName && "TEXTAREA" !== t.target.tagName && e.onMenuClose() : r && e.openMenu("first") : (r && (e.openAfterFocus = !0), e.focusInput()), "INPUT" !== t.target.tagName && "TEXTAREA" !== t.target.tagName && t.preventDefault()
                }
              }, e.onDropdownIndicatorMouseDown = function(t) {
                if (!(t && "mousedown" === t.type && 0 !== t.button || e.props.isDisabled)) {
                  var r = e.props,
                    n = r.isMulti,
                    i = r.menuIsOpen;
                  e.focusInput(), i ? (e.setState({
                    inputIsHiddenAfterUpdate: !n
                  }), e.onMenuClose()) : e.openMenu("first"), t.preventDefault()
                }
              }, e.onClearIndicatorMouseDown = function(t) {
                t && "mousedown" === t.type && 0 !== t.button || (e.clearValue(), t.preventDefault(), e.openAfterFocus = !1, "touchend" === t.type ? e.focusInput() : setTimeout((function() {
                  return e.focusInput()
                })))
              }, e.onScroll = function(t) {
                "boolean" == typeof e.props.closeMenuOnScroll ? t.target instanceof HTMLElement && Ee(t.target) && e.props.onMenuClose() : "function" == typeof e.props.closeMenuOnScroll && e.props.closeMenuOnScroll(t) && e.props.onMenuClose()
              }, e.onCompositionStart = function() {
                e.isComposing = !0
              }, e.onCompositionEnd = function() {
                e.isComposing = !1
              }, e.onTouchStart = function(t) {
                var r = t.touches,
                  n = r && r.item(0);
                n && (e.initialTouchX = n.clientX, e.initialTouchY = n.clientY, e.userIsDragging = !1)
              }, e.onTouchMove = function(t) {
                var r = t.touches,
                  n = r && r.item(0);
                if (n) {
                  var i = Math.abs(n.clientX - e.initialTouchX),
                    a = Math.abs(n.clientY - e.initialTouchY);
                  e.userIsDragging = i > 5 || a > 5
                }
              }, e.onTouchEnd = function(t) {
                e.userIsDragging || (e.controlRef && !e.controlRef.contains(t.target) && e.menuListRef && !e.menuListRef.contains(t.target) && e.blurInput(), e.initialTouchX = 0, e.initialTouchY = 0)
              }, e.onControlTouchEnd = function(t) {
                e.userIsDragging || e.onControlMouseDown(t)
              }, e.onClearIndicatorTouchEnd = function(t) {
                e.userIsDragging || e.onClearIndicatorMouseDown(t)
              }, e.onDropdownIndicatorTouchEnd = function(t) {
                e.userIsDragging || e.onDropdownIndicatorMouseDown(t)
              }, e.handleInputChange = function(t) {
                var r = e.props.inputValue,
                  n = t.currentTarget.value;
                e.setState({
                  inputIsHiddenAfterUpdate: !1
                }), e.onInputChange(n, {
                  action: "input-change",
                  prevInputValue: r
                }), e.props.menuIsOpen || e.onMenuOpen()
              }, e.onInputFocus = function(t) {
                e.props.onFocus && e.props.onFocus(t), e.setState({
                  inputIsHiddenAfterUpdate: !1,
                  isFocused: !0
                }), (e.openAfterFocus || e.props.openMenuOnFocus) && e.openMenu("first"), e.openAfterFocus = !1
              }, e.onInputBlur = function(t) {
                var r = e.props.inputValue;
                e.menuListRef && e.menuListRef.contains(document.activeElement) ? e.inputRef.focus() : (e.props.onBlur && e.props.onBlur(t), e.onInputChange("", {
                  action: "input-blur",
                  prevInputValue: r
                }), e.onMenuClose(), e.setState({
                  focusedValue: null,
                  isFocused: !1
                }))
              }, e.onOptionHover = function(t) {
                if (!e.blockOptionHover && e.state.focusedOption !== t) {
                  var r = e.getFocusableOptions().indexOf(t);
                  e.setState({
                    focusedOption: t,
                    focusedOptionId: r > -1 ? e.getFocusedOptionId(t) : null
                  })
                }
              }, e.shouldHideSelectedOptions = function() {
                return an(e.props)
              }, e.onValueInputFocus = function(t) {
                t.preventDefault(), t.stopPropagation(), e.focus()
              }, e.onKeyDown = function(t) {
                var r = e.props,
                  n = r.isMulti,
                  i = r.backspaceRemovesValue,
                  a = r.escapeClearsValue,
                  s = r.inputValue,
                  o = r.isClearable,
                  l = r.isDisabled,
                  h = r.menuIsOpen,
                  u = r.onKeyDown,
                  c = r.tabSelectsValue,
                  p = r.openMenuOnFocus,
                  f = e.state,
                  d = f.focusedOption,
                  m = f.focusedValue,
                  v = f.selectValue;
                if (!(l || "function" == typeof u && (u(t), t.defaultPrevented))) {
                  switch (e.blockOptionHover = !0, t.key) {
                    case "ArrowLeft":
                      if (!n || s) return;
                      e.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!n || s) return;
                      e.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (s) return;
                      if (m) e.removeValue(m);
                      else {
                        if (!i) return;
                        n ? e.popValue() : o && e.clearValue()
                      }
                      break;
                    case "Tab":
                      if (e.isComposing) return;
                      if (t.shiftKey || !h || !c || !d || p && e.isOptionSelected(d, v)) return;
                      e.selectOption(d);
                      break;
                    case "Enter":
                      if (229 === t.keyCode) break;
                      if (h) {
                        if (!d) return;
                        if (e.isComposing) return;
                        e.selectOption(d);
                        break
                      }
                      return;
                    case "Escape":
                      h ? (e.setState({
                        inputIsHiddenAfterUpdate: !1
                      }), e.onInputChange("", {
                        action: "menu-close",
                        prevInputValue: s
                      }), e.onMenuClose()) : o && a && e.clearValue();
                      break;
                    case " ":
                      if (s) return;
                      if (!h) {
                        e.openMenu("first");
                        break
                      }
                      if (!d) return;
                      e.selectOption(d);
                      break;
                    case "ArrowUp":
                      h ? e.focusOption("up") : e.openMenu("last");
                      break;
                    case "ArrowDown":
                      h ? e.focusOption("down") : e.openMenu("first");
                      break;
                    case "PageUp":
                      if (!h) return;
                      e.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!h) return;
                      e.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!h) return;
                      e.focusOption("first");
                      break;
                    case "End":
                      if (!h) return;
                      e.focusOption("last");
                      break;
                    default:
                      return
                  }
                  t.preventDefault()
                }
              }, e.state.instancePrefix = "react-select-" + (e.props.instanceId || ++sn), e.state.selectValue = Se(t.value), t.menuIsOpen && e.state.selectValue.length) {
              var r = e.getFocusableOptionsWithIds(),
                n = e.buildFocusableOptions(),
                o = n.indexOf(e.state.selectValue[0]);
              e.state.focusableOptionsWithIds = r, e.state.focusedOption = n[o], e.state.focusedOptionId = Jr(r, n[o])
            }
            return e
          }
          return e = s, r = [{
            key: "componentDidMount",
            value: function() {
              this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Te(this.menuListRef, this.focusedOptionRef)
            }
          }, {
            key: "componentDidUpdate",
            value: function(t) {
              var e = this.props,
                r = e.isDisabled,
                n = e.menuIsOpen,
                i = this.state.isFocused;
              (i && !r && t.isDisabled || i && n && !t.menuIsOpen) && this.focusInput(), i && r && !t.isDisabled ? this.setState({
                isFocused: !1
              }, this.onMenuClose) : i || r || !t.isDisabled || this.inputRef !== document.activeElement || this.setState({
                isFocused: !0
              }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Te(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
            }
          }, {
            key: "onMenuOpen",
            value: function() {
              this.props.onMenuOpen()
            }
          }, {
            key: "onMenuClose",
            value: function() {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue
              }), this.props.onMenuClose()
            }
          }, {
            key: "onInputChange",
            value: function(t, e) {
              this.props.onInputChange(t, e)
            }
          }, {
            key: "focusInput",
            value: function() {
              this.inputRef && this.inputRef.focus()
            }
          }, {
            key: "blurInput",
            value: function() {
              this.inputRef && this.inputRef.blur()
            }
          }, {
            key: "openMenu",
            value: function(t) {
              var e = this,
                r = this.state,
                n = r.selectValue,
                i = r.isFocused,
                a = this.buildFocusableOptions(),
                s = "first" === t ? 0 : a.length - 1;
              if (!this.props.isMulti) {
                var o = a.indexOf(n[0]);
                o > -1 && (s = o)
              }
              this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
                inputIsHiddenAfterUpdate: !1,
                focusedValue: null,
                focusedOption: a[s],
                focusedOptionId: this.getFocusedOptionId(a[s])
              }, (function() {
                return e.onMenuOpen()
              }))
            }
          }, {
            key: "focusValue",
            value: function(t) {
              var e = this.state,
                r = e.selectValue,
                n = e.focusedValue;
              if (this.props.isMulti) {
                this.setState({
                  focusedOption: null
                });
                var i = r.indexOf(n);
                n || (i = -1);
                var a = r.length - 1,
                  s = -1;
                if (r.length) {
                  switch (t) {
                    case "previous":
                      s = 0 === i ? 0 : -1 === i ? a : i - 1;
                      break;
                    case "next":
                      i > -1 && i < a && (s = i + 1)
                  }
                  this.setState({
                    inputIsHidden: -1 !== s,
                    focusedValue: r[s]
                  })
                }
              }
            }
          }, {
            key: "focusOption",
            value: function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                e = this.props.pageSize,
                r = this.state.focusedOption,
                n = this.getFocusableOptions();
              if (n.length) {
                var i = 0,
                  a = n.indexOf(r);
                r || (a = -1), "up" === t ? i = a > 0 ? a - 1 : n.length - 1 : "down" === t ? i = (a + 1) % n.length : "pageup" === t ? (i = a - e) < 0 && (i = 0) : "pagedown" === t ? (i = a + e) > n.length - 1 && (i = n.length - 1) : "last" === t && (i = n.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                  focusedOption: n[i],
                  focusedValue: null,
                  focusedOptionId: this.getFocusedOptionId(n[i])
                })
              }
            }
          }, {
            key: "getTheme",
            value: function() {
              return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(qr) : a(a({}, qr), this.props.theme) : qr
            }
          }, {
            key: "getCommonProps",
            value: function() {
              var t = this.clearValue,
                e = this.cx,
                r = this.getStyles,
                n = this.getClassNames,
                i = this.getValue,
                a = this.selectOption,
                s = this.setValue,
                o = this.props,
                l = o.isMulti,
                h = o.isRtl,
                u = o.options;
              return {
                clearValue: t,
                cx: e,
                getStyles: r,
                getClassNames: n,
                getValue: i,
                hasValue: this.hasValue(),
                isMulti: l,
                isRtl: h,
                options: u,
                selectOption: a,
                selectProps: o,
                setValue: s,
                theme: this.getTheme()
              }
            }
          }, {
            key: "hasValue",
            value: function() {
              return this.state.selectValue.length > 0
            }
          }, {
            key: "hasOptions",
            value: function() {
              return !!this.getFocusableOptions().length
            }
          }, {
            key: "isClearable",
            value: function() {
              var t = this.props,
                e = t.isClearable,
                r = t.isMulti;
              return void 0 === e ? r : e
            }
          }, {
            key: "isOptionDisabled",
            value: function(t, e) {
              return en(this.props, t, e)
            }
          }, {
            key: "isOptionSelected",
            value: function(t, e) {
              return rn(this.props, t, e)
            }
          }, {
            key: "filterOption",
            value: function(t, e) {
              return nn(this.props, t, e)
            }
          }, {
            key: "formatOptionLabel",
            value: function(t, e) {
              if ("function" == typeof this.props.formatOptionLabel) {
                var r = this.props.inputValue,
                  n = this.state.selectValue;
                return this.props.formatOptionLabel(t, {
                  context: e,
                  inputValue: r,
                  selectValue: n
                })
              }
              return this.getOptionLabel(t)
            }
          }, {
            key: "formatGroupLabel",
            value: function(t) {
              return this.props.formatGroupLabel(t)
            }
          }, {
            key: "startListeningComposition",
            value: function() {
              document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
            }
          }, {
            key: "stopListeningComposition",
            value: function() {
              document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
            }
          }, {
            key: "startListeningToTouch",
            value: function() {
              document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
            }
          }, {
            key: "stopListeningToTouch",
            value: function() {
              document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
            }
          }, {
            key: "renderInput",
            value: function() {
              var t = this.props,
                e = t.isDisabled,
                r = t.isSearchable,
                n = t.inputId,
                i = t.inputValue,
                s = t.tabIndex,
                o = t.form,
                l = t.menuIsOpen,
                h = t.required,
                u = this.getComponents().Input,
                p = this.state,
                d = p.inputIsHidden,
                m = p.ariaSelection,
                v = this.commonProps,
                y = n || this.getElementId("input"),
                g = a(a(a({
                  "aria-autocomplete": "list",
                  "aria-expanded": l,
                  "aria-haspopup": !0,
                  "aria-errormessage": this.props["aria-errormessage"],
                  "aria-invalid": this.props["aria-invalid"],
                  "aria-label": this.props["aria-label"],
                  "aria-labelledby": this.props["aria-labelledby"],
                  "aria-required": h,
                  role: "combobox",
                  "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
                }, l && {
                  "aria-controls": this.getElementId("listbox")
                }), !r && {
                  "aria-readonly": !0
                }), this.hasValue() ? "initial-input-focus" === (null == m ? void 0 : m.action) && {
                  "aria-describedby": this.getElementId("live-region")
                } : {
                  "aria-describedby": this.getElementId("placeholder")
                });
              return r ? c.createElement(u, (0, f.c)({}, v, {
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                id: y,
                innerRef: this.getInputRef,
                isDisabled: e,
                isHidden: d,
                onBlur: this.onInputBlur,
                onChange: this.handleInputChange,
                onFocus: this.onInputFocus,
                spellCheck: "false",
                tabIndex: s,
                form: o,
                type: "text",
                value: i
              }, g)) : c.createElement(Tr, (0, f.c)({
                id: y,
                innerRef: this.getInputRef,
                onBlur: this.onInputBlur,
                onChange: ye,
                onFocus: this.onInputFocus,
                disabled: e,
                tabIndex: s,
                inputMode: "none",
                form: o,
                value: ""
              }, g))
            }
          }, {
            key: "renderPlaceholderOrValue",
            value: function() {
              var t = this,
                e = this.getComponents(),
                r = e.MultiValue,
                n = e.MultiValueContainer,
                i = e.MultiValueLabel,
                a = e.MultiValueRemove,
                s = e.SingleValue,
                o = e.Placeholder,
                l = this.commonProps,
                h = this.props,
                u = h.controlShouldRenderValue,
                p = h.isDisabled,
                d = h.isMulti,
                m = h.inputValue,
                v = h.placeholder,
                y = this.state,
                g = y.selectValue,
                b = y.focusedValue,
                S = y.isFocused;
              if (!this.hasValue() || !u) return m ? null : c.createElement(o, (0, f.c)({}, l, {
                key: "placeholder",
                isDisabled: p,
                isFocused: S,
                innerProps: {
                  id: this.getElementId("placeholder")
                }
              }), v);
              if (d) return g.map((function(e, s) {
                var o = e === b,
                  h = "".concat(t.getOptionLabel(e), "-").concat(t.getOptionValue(e));
                return c.createElement(r, (0, f.c)({}, l, {
                  components: {
                    Container: n,
                    Label: i,
                    Remove: a
                  },
                  isFocused: o,
                  isDisabled: p,
                  key: h,
                  index: s,
                  removeProps: {
                    onClick: function() {
                      return t.removeValue(e)
                    },
                    onTouchEnd: function() {
                      return t.removeValue(e)
                    },
                    onMouseDown: function(t) {
                      t.preventDefault()
                    }
                  },
                  data: e
                }), t.formatOptionLabel(e, "value"))
              }));
              if (m) return null;
              var x = g[0];
              return c.createElement(s, (0, f.c)({}, l, {
                data: x,
                isDisabled: p
              }), this.formatOptionLabel(x, "value"))
            }
          }, {
            key: "renderClearIndicator",
            value: function() {
              var t = this.getComponents().ClearIndicator,
                e = this.commonProps,
                r = this.props,
                n = r.isDisabled,
                i = r.isLoading,
                a = this.state.isFocused;
              if (!this.isClearable() || !t || n || !this.hasValue() || i) return null;
              var s = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true"
              };
              return c.createElement(t, (0, f.c)({}, e, {
                innerProps: s,
                isFocused: a
              }))
            }
          }, {
            key: "renderLoadingIndicator",
            value: function() {
              var t = this.getComponents().LoadingIndicator,
                e = this.commonProps,
                r = this.props,
                n = r.isDisabled,
                i = r.isLoading,
                a = this.state.isFocused;
              return t && i ? c.createElement(t, (0, f.c)({}, e, {
                innerProps: {
                  "aria-hidden": "true"
                },
                isDisabled: n,
                isFocused: a
              })) : null
            }
          }, {
            key: "renderIndicatorSeparator",
            value: function() {
              var t = this.getComponents(),
                e = t.DropdownIndicator,
                r = t.IndicatorSeparator;
              if (!e || !r) return null;
              var n = this.commonProps,
                i = this.props.isDisabled,
                a = this.state.isFocused;
              return c.createElement(r, (0, f.c)({}, n, {
                isDisabled: i,
                isFocused: a
              }))
            }
          }, {
            key: "renderDropdownIndicator",
            value: function() {
              var t = this.getComponents().DropdownIndicator;
              if (!t) return null;
              var e = this.commonProps,
                r = this.props.isDisabled,
                n = this.state.isFocused,
                i = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true"
                };
              return c.createElement(t, (0, f.c)({}, e, {
                innerProps: i,
                isDisabled: r,
                isFocused: n
              }))
            }
          }, {
            key: "renderMenu",
            value: function() {
              var t = this,
                e = this.getComponents(),
                r = e.Group,
                n = e.GroupHeading,
                i = e.Menu,
                a = e.MenuList,
                s = e.MenuPortal,
                o = e.LoadingMessage,
                l = e.NoOptionsMessage,
                h = e.Option,
                u = this.commonProps,
                p = this.state.focusedOption,
                d = this.props,
                m = d.captureMenuScroll,
                v = d.inputValue,
                y = d.isLoading,
                g = d.loadingMessage,
                b = d.minMenuHeight,
                S = d.maxMenuHeight,
                x = d.menuIsOpen,
                P = d.menuPlacement,
                E = d.menuPosition,
                C = d.menuPortalTarget,
                M = d.menuShouldBlockScroll,
                w = d.menuShouldScrollIntoView,
                T = d.noOptionsMessage,
                _ = d.onMenuScrollToTop,
                A = d.onMenuScrollToBottom;
              if (!x) return null;
              var k, D = function(e, r) {
                var n = e.type,
                  i = e.data,
                  a = e.isDisabled,
                  s = e.isSelected,
                  o = e.label,
                  l = e.value,
                  d = p === i,
                  m = a ? void 0 : function() {
                    return t.onOptionHover(i)
                  },
                  v = a ? void 0 : function() {
                    return t.selectOption(i)
                  },
                  y = "".concat(t.getElementId("option"), "-").concat(r),
                  g = {
                    id: y,
                    onClick: v,
                    onMouseMove: m,
                    onMouseOver: m,
                    tabIndex: -1,
                    role: "option",
                    "aria-selected": t.isAppleDevice ? void 0 : s
                  };
                return c.createElement(h, (0, f.c)({}, u, {
                  innerProps: g,
                  data: i,
                  isDisabled: a,
                  isSelected: s,
                  key: y,
                  label: o,
                  type: n,
                  value: l,
                  isFocused: d,
                  innerRef: d ? t.getFocusedOptionRef : void 0
                }), t.formatOptionLabel(e.data, "menu"))
              };
              if (this.hasOptions()) k = this.getCategorizedOptions().map((function(e) {
                if ("group" === e.type) {
                  var i = e.data,
                    a = e.options,
                    s = e.index,
                    o = "".concat(t.getElementId("group"), "-").concat(s),
                    l = "".concat(o, "-heading");
                  return c.createElement(r, (0, f.c)({}, u, {
                    key: o,
                    data: i,
                    options: a,
                    Heading: n,
                    headingProps: {
                      id: l,
                      data: e.data
                    },
                    label: t.formatGroupLabel(e.data)
                  }), e.options.map((function(t) {
                    return D(t, "".concat(s, "-").concat(t.index))
                  })))
                }
                if ("option" === e.type) return D(e, "".concat(e.index))
              }));
              else if (y) {
                var I = g({
                  inputValue: v
                });
                if (null === I) return null;
                k = c.createElement(o, u, I)
              } else {
                var F = T({
                  inputValue: v
                });
                if (null === F) return null;
                k = c.createElement(l, u, F)
              }
              var O = {
                  minMenuHeight: b,
                  maxMenuHeight: S,
                  menuPlacement: P,
                  menuPosition: E,
                  menuShouldScrollIntoView: w
                },
                R = c.createElement(je, (0, f.c)({}, u, O), (function(e) {
                  var r = e.ref,
                    n = e.placerProps,
                    s = n.placement,
                    o = n.maxHeight;
                  return c.createElement(i, (0, f.c)({}, u, O, {
                    innerRef: r,
                    innerProps: {
                      onMouseDown: t.onMenuMouseDown,
                      onMouseMove: t.onMenuMouseMove
                    },
                    isLoading: y,
                    placement: s
                  }), c.createElement(Nr, {
                    captureEnabled: m,
                    onTopArrive: _,
                    onBottomArrive: A,
                    lockEnabled: M
                  }, (function(e) {
                    return c.createElement(a, (0, f.c)({}, u, {
                      innerRef: function(r) {
                        t.getMenuListRef(r), e(r)
                      },
                      innerProps: {
                        role: "listbox",
                        "aria-multiselectable": u.isMulti,
                        id: t.getElementId("listbox")
                      },
                      isLoading: y,
                      maxHeight: o,
                      focusedOption: p
                    }), k)
                  })))
                }));
              return C || "fixed" === E ? c.createElement(s, (0, f.c)({}, u, {
                appendTo: C,
                controlElement: this.controlRef,
                menuPlacement: P,
                menuPosition: E
              }), R) : R
            }
          }, {
            key: "renderFormField",
            value: function() {
              var t = this,
                e = this.props,
                r = e.delimiter,
                n = e.isDisabled,
                i = e.isMulti,
                a = e.name,
                s = e.required,
                o = this.state.selectValue;
              if (s && !this.hasValue() && !n) return c.createElement(Gr, {
                name: a,
                onFocus: this.onValueInputFocus
              });
              if (a && !n) {
                if (i) {
                  if (r) {
                    var l = o.map((function(e) {
                      return t.getOptionValue(e)
                    })).join(r);
                    return c.createElement("input", {
                      name: a,
                      type: "hidden",
                      value: l
                    })
                  }
                  var h = o.length > 0 ? o.map((function(e, r) {
                    return c.createElement("input", {
                      key: "i-".concat(r),
                      name: a,
                      type: "hidden",
                      value: t.getOptionValue(e)
                    })
                  })) : c.createElement("input", {
                    name: a,
                    type: "hidden",
                    value: ""
                  });
                  return c.createElement("div", null, h)
                }
                var u = o[0] ? this.getOptionValue(o[0]) : "";
                return c.createElement("input", {
                  name: a,
                  type: "hidden",
                  value: u
                })
              }
            }
          }, {
            key: "renderLiveRegion",
            value: function() {
              var t = this.commonProps,
                e = this.state,
                r = e.ariaSelection,
                n = e.focusedOption,
                i = e.focusedValue,
                a = e.isFocused,
                s = e.selectValue,
                o = this.getFocusableOptions();
              return c.createElement(mr, (0, f.c)({}, t, {
                id: this.getElementId("live-region"),
                ariaSelection: r,
                focusedOption: n,
                focusedValue: i,
                isFocused: a,
                selectValue: s,
                focusableOptions: o,
                isAppleDevice: this.isAppleDevice
              }))
            }
          }, {
            key: "render",
            value: function() {
              var t = this.getComponents(),
                e = t.Control,
                r = t.IndicatorsContainer,
                n = t.SelectContainer,
                i = t.ValueContainer,
                a = this.props,
                s = a.className,
                o = a.id,
                l = a.isDisabled,
                h = a.menuIsOpen,
                u = this.state.isFocused,
                p = this.commonProps = this.getCommonProps();
              return c.createElement(n, (0, f.c)({}, p, {
                className: s,
                innerProps: {
                  id: o,
                  onKeyDown: this.onKeyDown
                },
                isDisabled: l,
                isFocused: u
              }), this.renderLiveRegion(), c.createElement(e, (0, f.c)({}, p, {
                innerRef: this.getControlRef,
                innerProps: {
                  onMouseDown: this.onControlMouseDown,
                  onTouchEnd: this.onControlTouchEnd
                },
                isDisabled: l,
                isFocused: u,
                menuIsOpen: h
              }), c.createElement(i, (0, f.c)({}, p, {
                isDisabled: l
              }), this.renderPlaceholderOrValue(), this.renderInput()), c.createElement(r, (0, f.c)({}, p, {
                isDisabled: l
              }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
            }
          }], n = [{
            key: "getDerivedStateFromProps",
            value: function(t, e) {
              var r = e.prevProps,
                n = e.clearFocusValueOnUpdate,
                i = e.inputIsHiddenAfterUpdate,
                s = e.ariaSelection,
                o = e.isFocused,
                l = e.prevWasFocused,
                h = e.instancePrefix,
                u = t.options,
                c = t.value,
                p = t.menuIsOpen,
                f = t.inputValue,
                d = t.isMulti,
                m = Se(c),
                v = {};
              if (r && (c !== r.value || u !== r.options || p !== r.menuIsOpen || f !== r.inputValue)) {
                var y = p ? function(t, e) {
                    return Xr($r(t, e))
                  }(t, m) : [],
                  g = p ? Kr($r(t, m), "".concat(h, "-option")) : [],
                  b = n ? function(t, e) {
                    var r = t.focusedValue,
                      n = t.selectValue.indexOf(r);
                    if (n > -1) {
                      if (e.indexOf(r) > -1) return r;
                      if (n < e.length) return e[n]
                    }
                    return null
                  }(e, m) : null,
                  S = function(t, e) {
                    var r = t.focusedOption;
                    return r && e.indexOf(r) > -1 ? r : e[0]
                  }(e, y);
                v = {
                  selectValue: m,
                  focusedOption: S,
                  focusedOptionId: Jr(g, S),
                  focusableOptionsWithIds: g,
                  focusedValue: b,
                  clearFocusValueOnUpdate: !1
                }
              }
              var x = null != i && t !== r ? {
                  inputIsHidden: i,
                  inputIsHiddenAfterUpdate: void 0
                } : {},
                P = s,
                E = o && l;
              return o && !E && (P = {
                value: Oe(d, m, m[0] || null),
                options: m,
                action: "initial-input-focus"
              }, E = !l), "initial-input-focus" === (null == s ? void 0 : s.action) && (P = null), a(a(a({}, v), x), {}, {
                prevProps: t,
                ariaSelection: P,
                prevWasFocused: E
              })
            }
          }], r && m(e.prototype, r), n && m(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
          }), s
        }(c.Component);
      on.defaultProps = Ur;
      var ln = (0, c.forwardRef)((function(t, e) {
          var r = function(t) {
            var e = t.defaultInputValue,
              r = void 0 === e ? "" : e,
              n = t.defaultMenuIsOpen,
              i = void 0 !== n && n,
              s = t.defaultValue,
              o = void 0 === s ? null : s,
              h = t.inputValue,
              f = t.menuIsOpen,
              d = t.onChange,
              m = t.onInputChange,
              v = t.onMenuClose,
              y = t.onMenuOpen,
              g = t.value,
              b = u(t, p),
              S = l((0, c.useState)(void 0 !== h ? h : r), 2),
              x = S[0],
              P = S[1],
              E = l((0, c.useState)(void 0 !== f ? f : i), 2),
              C = E[0],
              M = E[1],
              w = l((0, c.useState)(void 0 !== g ? g : o), 2),
              T = w[0],
              _ = w[1],
              A = (0, c.useCallback)((function(t, e) {
                "function" == typeof d && d(t, e), _(t)
              }), [d]),
              k = (0, c.useCallback)((function(t, e) {
                var r;
                "function" == typeof m && (r = m(t, e)), P(void 0 !== r ? r : t)
              }), [m]),
              D = (0, c.useCallback)((function() {
                "function" == typeof y && y(), M(!0)
              }), [y]),
              I = (0, c.useCallback)((function() {
                "function" == typeof v && v(), M(!1)
              }), [v]),
              F = void 0 !== h ? h : x,
              O = void 0 !== f ? f : C,
              R = void 0 !== g ? g : T;
            return a(a({}, b), {}, {
              inputValue: F,
              menuIsOpen: O,
              onChange: A,
              onInputChange: k,
              onMenuClose: I,
              onMenuOpen: D,
              value: R
            })
          }(t);
          return c.createElement(on, (0, f.c)({
            ref: e
          }, r))
        })),
        hn = ln
    },
    16728: (t, e, r) => {
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
        a = f(r(51664)),
        s = f(r(71424)),
        o = f(r(35459)),
        l = f(r(34332)),
        h = f(r(17368)),
        u = f(r(31792)),
        c = f(r(54080)),
        p = r(57884);

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
          }, "perfectFit" in t && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, u.default)(r.handleWindowResize, t.throttle), r
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
              u = this._child,
              f = (0, p.innerWidth)(o),
              v = (0, p.innerHeight)(o);
            if (v <= 0 || isNaN(v)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var y = (0, c.default)();
              this.pid = y;
              var g = function() {
                  return y !== t.pid
                },
                b = "multi" === i ? function() {
                  return m(u, v)
                } : function() {
                  return d(u, f)
                },
                S = "multi" === i ? function() {
                  return d(u, f)
                } : function() {
                  return m(u, v)
                },
                x = void 0,
                P = r,
                E = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(e) {
                return (0, h.default)((function() {
                  return P <= E
                }), (function(e) {
                  if (g()) return e(!0);
                  x = parseInt((P + E) / 2, 10), t.setState({
                    fontSize: x
                  }, (function() {
                    return g() ? e(!0) : (b() ? P = x + 1 : E = x - 1, e())
                  }))
                }), e)
              }, function(e) {
                return "single" === i && a || S() ? e() : (P = r, E = x, (0, h.default)((function() {
                  return P < E
                }), (function(e) {
                  if (g()) return e(!0);
                  x = parseInt((P + E) / 2, 10), t.setState({
                    fontSize: x
                  }, (function() {
                    return y !== t.pid ? e(!0) : (S() ? P = x + 1 : E = x - 1, e())
                  }))
                }), e))
              }, function(e) {
                if (x = Math.min(P, E), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), g()) return e(!0);
                t.setState({
                  fontSize: x
                }, e)
              }], (function(e) {
                e || g() || t.setState({
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
              h = this.state,
              u = h.fontSize,
              c = h.ready,
              p = n({}, s, {
                fontSize: u
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
    58936: (t, e, r) => {
      "use strict";
      e.cR = void 0;
      var n, i = (n = r(16728)) && n.__esModule ? n : {
        default: n
      };
      e.cR = i.default, i.default
    },
    57884: (t, e) => {
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
    34332: (t, e, r) => {
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
      var n, i = (n = r(44392)) && n.__esModule ? n : {
        default: n
      }
    },
    35459: (t, e) => {
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
    31792: (t, e) => {
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
    54080: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        return r++
      };
      var r = 0
    },
    17368: (t, e) => {
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
    62748: (t, e, r) => {
      "use strict";
      r.d(e, {
        U1: () => f
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
            const h = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[r]) {
              const t = l[r].handlers;
              let e;
              for (e = t.length; e > 0 && !(o >= t[e - 1].priority); e--);
              e === t.length ? t[e] = h : t.splice(e, 0, h), l.__current.forEach((t => {
                t.name === r && t.currentIndex >= e && t.currentIndex++
              }))
            } else l[r] = {
              handlers: [h],
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
            const h = {
              name: n,
              currentIndex: 0
            };
            for (i.__current.push(h); h.currentIndex < a.length;) {
              const t = a[h.currentIndex].callback.apply(null, o);
              r && (o[0] = t), h.currentIndex++
            }
            return i.__current.pop(), r ? o[0] : void 0
          }
        },
        h = function(t, e) {
          return function() {
            var r;
            const n = t[e];
            return null !== (r = n.__current[n.__current.length - 1]?.name) && void 0 !== r ? r : null
          }
        },
        u = function(t, e) {
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
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = h(this, "actions"), this.currentFilter = h(this, "filters"), this.doingAction = u(this, "actions"), this.doingFilter = u(this, "filters"), this.didAction = c(this, "actions"), this.didFilter = c(this, "filters")
        }
      }
      const f = function() {
          return new p
        },
        d = f(),
        {
          addAction: m,
          addFilter: v,
          removeAction: y,
          removeFilter: g,
          hasAction: b,
          hasFilter: S,
          removeAllActions: x,
          removeAllFilters: P,
          doAction: E,
          applyFilters: C,
          currentAction: M,
          currentFilter: w,
          doingAction: T,
          doingFilter: _,
          didAction: A,
          didFilter: k,
          actions: D,
          filters: I
        } = d
    },
    86016: (t, e, r) => {
      t.exports = {
        default: r(40684),
        __esModule: !0
      }
    },
    18276: (t, e, r) => {
      t.exports = {
        default: r(41248),
        __esModule: !0
      }
    },
    2016: (t, e, r) => {
      t.exports = {
        default: r(47952),
        __esModule: !0
      }
    },
    4616: (t, e, r) => {
      t.exports = {
        default: r(37488),
        __esModule: !0
      }
    },
    48844: (t, e, r) => {
      t.exports = {
        default: r(46760),
        __esModule: !0
      }
    },
    48011: (t, e, r) => {
      t.exports = {
        default: r(90020),
        __esModule: !0
      }
    },
    70224: (t, e, r) => {
      t.exports = {
        default: r(32784),
        __esModule: !0
      }
    },
    65908: (t, e) => {
      "use strict";
      e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
    },
    272: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(2016)) && n.__esModule ? n : {
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
    67032: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(86016)) && n.__esModule ? n : {
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
    92392: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n = s(r(48844)),
        i = s(r(18276)),
        a = s(r(83528));

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
    66516: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(83528)) && n.__esModule ? n : {
        default: n
      };
      e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) && "function" != typeof e ? t : e
      }
    },
    83528: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n = s(r(70224)),
        i = s(r(48011)),
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
    65772: (t, e, r) => {
      var n;
      ! function(i, a, s, o) {
        "use strict";
        var l, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          u = a.createElement("div"),
          c = "function",
          p = Math.round,
          f = Math.abs,
          d = Date.now;

        function m(t, e, r) {
          return setTimeout(P(t, r), e)
        }

        function v(t, e, r) {
          return !!Array.isArray(t) && (y(t, r[e], r), !0)
        }

        function y(t, e, r) {
          var n;
          if (t)
            if (t.forEach) t.forEach(e, r);
            else if (t.length !== o)
            for (n = 0; n < t.length;) e.call(r, t[n], n, t), n++;
          else
            for (n in t) t.hasOwnProperty(n) && e.call(r, t[n], n, t)
        }

        function g(t, e, r) {
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
        var b = g((function(t, e, r) {
            for (var n = Object.keys(e), i = 0; i < n.length;)(!r || r && t[n[i]] === o) && (t[n[i]] = e[n[i]]), i++;
            return t
          }), "extend", "Use `assign`."),
          S = g((function(t, e) {
            return b(t, e, !0)
          }), "merge", "Use `assign`.");

        function x(t, e, r) {
          var n, i = e.prototype;
          (n = t.prototype = Object.create(i)).constructor = t, n._super = i, r && l(n, r)
        }

        function P(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function E(t, e) {
          return typeof t == c ? t.apply(e && e[0] || o, e) : t
        }

        function C(t, e) {
          return t === o ? e : t
        }

        function M(t, e, r) {
          y(A(e), (function(e) {
            t.addEventListener(e, r, !1)
          }))
        }

        function w(t, e, r) {
          y(A(e), (function(e) {
            t.removeEventListener(e, r, !1)
          }))
        }

        function T(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function _(t, e) {
          return t.indexOf(e) > -1
        }

        function A(t) {
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

        function D(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function I(t, e, r) {
          for (var n = [], i = [], a = 0; a < t.length;) {
            var s = e ? t[a][e] : t[a];
            k(i, s) < 0 && n.push(t[a]), i[a] = s, a++
          }
          return r && (n = e ? n.sort((function(t, r) {
            return t[e] > r[e]
          })) : n.sort()), n
        }

        function F(t, e) {
          for (var r, n, i = e[0].toUpperCase() + e.slice(1), a = 0; a < h.length;) {
            if ((n = (r = h[a]) ? r + i : e) in t) return n;
            a++
          }
          return o
        }
        var O = 1;

        function R(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || i
        }
        var V = "ontouchstart" in i,
          L = F(i, "PointerEvent") !== o,
          B = V && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          N = "touch",
          z = "mouse",
          G = 25,
          j = 1,
          H = 4,
          W = 8,
          q = 1,
          U = 2,
          Y = 4,
          $ = 8,
          X = 16,
          K = U | Y,
          Z = $ | X,
          J = K | Z,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var r = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            E(t.options.enable, [t]) && r.handler(e)
          }, this.init()
        }

        function rt(t, e, r) {
          var n = r.pointers.length,
            i = r.changedPointers.length,
            a = e & j && n - i == 0,
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
                h = e.center = it(n);
              e.timeStamp = d(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = lt(l, h), e.distance = ot(l, h),
                function(t, e) {
                  var r = e.center,
                    n = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    a = t.prevInput || {};
                  e.eventType !== j && a.eventType !== H || (i = t.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, n = t.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y)
                }(r, e), e.offsetDirection = st(e.deltaX, e.deltaY);
              var u, c, p = at(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, e.scale = s ? (u = s.pointers, ot((c = n)[0], c[1], tt) / ot(u[0], u[1], tt)) : 1, e.rotation = s ? function(t, e) {
                  return lt(e[1], e[0], tt) + lt(t[1], t[0], tt)
                }(s.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var r, n, i, a, s = t.lastInterval || e,
                    l = e.timeStamp - s.timeStamp;
                  if (e.eventType != W && (l > G || s.velocity === o)) {
                    var h = e.deltaX - s.deltaX,
                      u = e.deltaY - s.deltaY,
                      c = at(l, h, u);
                    n = c.x, i = c.y, r = f(c.x) > f(c.y) ? c.x : c.y, a = st(h, u), t.lastInterval = e
                  } else r = s.velocity, n = s.velocityX, i = s.velocityY, a = s.direction;
                  e.velocity = r, e.velocityX = n, e.velocityY = i, e.direction = a
                }(r, e);
              var m = t.element;
              T(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
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
          return t === e ? q : f(t) >= f(e) ? t < 0 ? U : Y : e < 0 ? $ : X
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
            this.evEl && M(this.element, this.evEl, this.domHandler), this.evTarget && M(this.target, this.evTarget, this.domHandler), this.evWin && M(R(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(R(this.element), this.evWin, this.domHandler)
          }
        };
        var ht = {
            mousedown: j,
            mousemove: 2,
            mouseup: H
          },
          ut = "mousedown",
          ct = "mousemove mouseup";

        function pt() {
          this.evEl = ut, this.evWin = ct, this.pressed = !1, et.apply(this, arguments)
        }
        x(pt, et, {
          handler: function(t) {
            var e = ht[t.type];
            e & j && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: z,
              srcEvent: t
            }))
          }
        });
        var ft = {
            pointerdown: j,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          dt = {
            2: N,
            3: "pen",
            4: z,
            5: "kinect"
          },
          mt = "pointerdown",
          vt = "pointermove pointerup pointercancel";

        function yt() {
          this.evEl = mt, this.evWin = vt, et.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        i.MSPointerEvent && !i.PointerEvent && (mt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), x(yt, et, {
          handler: function(t) {
            var e = this.store,
              r = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              i = ft[n],
              a = dt[t.pointerType] || t.pointerType,
              s = a == N,
              o = k(e, t.pointerId, "pointerId");
            i & j && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : i & (H | W) && (r = !0), o < 0 || (e[o] = t, this.callback(this.manager, i, {
              pointers: e,
              changedPointers: [t],
              pointerType: a,
              srcEvent: t
            }), r && e.splice(o, 1))
          }
        });
        var gt = {
          touchstart: j,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function bt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, et.apply(this, arguments)
        }

        function St(t, e) {
          var r = D(t.touches),
            n = D(t.changedTouches);
          return e & (H | W) && (r = I(r.concat(n), "identifier", !0)), [r, n]
        }
        x(bt, et, {
          handler: function(t) {
            var e = gt[t.type];
            if (e === j && (this.started = !0), this.started) {
              var r = St.call(this, t, e);
              e & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: N,
                srcEvent: t
              })
            }
          }
        });
        var xt = {
            touchstart: j,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Pt = "touchstart touchmove touchend touchcancel";

        function Et() {
          this.evTarget = Pt, this.targetIds = {}, et.apply(this, arguments)
        }

        function Ct(t, e) {
          var r = D(t.touches),
            n = this.targetIds;
          if (e & (2 | j) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
          var i, a, s = D(t.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(t) {
              return T(t.target, l)
            })), e === j)
            for (i = 0; i < a.length;) n[a[i].identifier] = !0, i++;
          for (i = 0; i < s.length;) n[s[i].identifier] && o.push(s[i]), e & (H | W) && delete n[s[i].identifier], i++;
          return o.length ? [I(a.concat(o), "identifier", !0), o] : void 0
        }
        x(Et, et, {
          handler: function(t) {
            var e = xt[t.type],
              r = Ct.call(this, t, e);
            r && this.callback(this.manager, e, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: N,
              srcEvent: t
            })
          }
        });
        var Mt = 2500;

        function wt() {
          et.apply(this, arguments);
          var t = P(this.handler, this);
          this.touch = new Et(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Tt(t, e) {
          t & j ? (this.primaryTouch = e.changedPointers[0].identifier, _t.call(this, e)) : t & (H | W) && _t.call(this, e)
        }

        function _t(t) {
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
            }), Mt)
          }
        }

        function At(t) {
          for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var i = this.lastTouches[n],
              a = Math.abs(e - i.x),
              s = Math.abs(r - i.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        x(wt, et, {
          handler: function(t, e, r) {
            var n = r.pointerType == N,
              i = r.pointerType == z;
            if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (n) Tt.call(this, e, r);
              else if (i && At.call(this, r)) return;
              this.callback(t, e, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var kt = F(u.style, "touchAction"),
          Dt = kt !== o,
          It = "compute",
          Ft = "auto",
          Ot = "manipulation",
          Rt = "none",
          Vt = "pan-x",
          Lt = "pan-y",
          Bt = function() {
            if (!Dt) return !1;
            var t = {},
              e = i.CSS && i.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              t[r] = !e || i.CSS.supports("touch-action", r)
            })), t
          }();

        function Nt(t, e) {
          this.manager = t, this.set(e)
        }
        Nt.prototype = {
          set: function(t) {
            t == It && (t = this.compute()), Dt && this.manager.element.style && Bt[t] && (this.manager.element.style[kt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return y(this.manager.recognizers, (function(e) {
                E(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (_(t, Rt)) return Rt;
                var e = _(t, Vt),
                  r = _(t, Lt);
                return e && r ? Rt : e || r ? e ? Vt : Lt : _(t, Ot) ? Ot : Ft
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              r = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                i = _(n, Rt) && !Bt[Rt],
                a = _(n, Lt) && !Bt[Lt],
                s = _(n, Vt) && !Bt[Vt];
              if (i) {
                var o = 1 === t.pointers.length,
                  l = t.distance < 2,
                  h = t.deltaTime < 250;
                if (o && l && h) return
              }
              if (!s || !a) return i || a && r & K || s && r & Z ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var zt = 1,
          Gt = 32;

        function jt(t) {
          this.options = l({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = C(this.options.enable, !0), this.state = zt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Wt(t) {
          return t == X ? "down" : t == $ ? "up" : t == U ? "left" : t == Y ? "right" : ""
        }

        function qt(t, e) {
          var r = e.manager;
          return r ? r.get(t) : t
        }

        function Ut() {
          jt.apply(this, arguments)
        }

        function Yt() {
          Ut.apply(this, arguments), this.pX = null, this.pY = null
        }

        function $t() {
          Ut.apply(this, arguments)
        }

        function Xt() {
          jt.apply(this, arguments), this._timer = null, this._input = null
        }

        function Kt() {
          Ut.apply(this, arguments)
        }

        function Zt() {
          Ut.apply(this, arguments)
        }

        function Jt() {
          jt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = C(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = l({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (L ? yt : B ? Et : V ? wt : pt))(this, rt), this.touchAction = new Nt(this, this.options.touchAction), ee(this, !0), y(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ee(t, e) {
          var r, n = t.element;
          n.style && (y(t.options.cssProps, (function(i, a) {
            r = F(n.style, a), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || ""
          })), e || (t.oldCssProps = {}))
        }
        jt.prototype = {
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
            this.state = Gt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (Gt | zt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = l({}, t);
            if (!E(this.options.enable, [this, e])) return this.reset(), void(this.state = Gt);
            56 & this.state && (this.state = zt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, x(Ut, jt, {
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
            return n && (r & W || !i) ? 16 | e : n || i ? r & H ? 8 | e : 2 & e ? 4 | e : 2 : Gt
          }
        }), x(Yt, Ut, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & K && e.push(Lt), t & Z && e.push(Vt), e
          },
          directionTest: function(t) {
            var e = this.options,
              r = !0,
              n = t.distance,
              i = t.direction,
              a = t.deltaX,
              s = t.deltaY;
            return i & e.direction || (e.direction & K ? (i = 0 === a ? q : a < 0 ? U : Y, r = a != this.pX, n = Math.abs(t.deltaX)) : (i = 0 === s ? q : s < 0 ? $ : X, r = s != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction
          },
          attrTest: function(t) {
            return Ut.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Wt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), x($t, Ut, {
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
        }), x(Xt, jt, {
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
            else if (t.eventType & j) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return 8;
            return Gt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), x(Kt, Ut, {
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
        }), x(Zt, Ut, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: K | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return Yt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, r = this.options.direction;
            return r & (K | Z) ? e = t.overallVelocity : r & K ? e = t.overallVelocityX : r & Z && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Wt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), x(Jt, jt, {
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
            if (this.reset(), t.eventType & j && 0 === this.count) return this.failTimeout();
            if (n && i && r) {
              if (t.eventType != H) return this.failTimeout();
              var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                s = !this.pCenter || ot(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return Gt
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = Gt
            }), this.options.interval, this), Gt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qt.VERSION = "2.0.7", Qt.defaults = {
          domEvents: !1,
          touchAction: It,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Kt, {
              enable: !1
            }],
            [$t, {
                enable: !1
              },
              ["rotate"]
            ],
            [Zt, {
              direction: K
            }],
            [Yt, {
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
            if (t instanceof jt) return t;
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
              return y(A(t), (function(t) {
                r[t] = r[t] || [], r[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== o) {
              var r = this.handlers;
              return y(A(t), (function(t) {
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
          INPUT_START: j,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: zt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: Gt,
          DIRECTION_NONE: q,
          DIRECTION_LEFT: U,
          DIRECTION_RIGHT: Y,
          DIRECTION_UP: $,
          DIRECTION_DOWN: X,
          DIRECTION_HORIZONTAL: K,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: te,
          Input: et,
          TouchAction: Nt,
          TouchInput: Et,
          MouseInput: pt,
          PointerEventInput: yt,
          TouchMouseInput: wt,
          SingleTouchInput: bt,
          Recognizer: jt,
          AttrRecognizer: Ut,
          Tap: Jt,
          Pan: Yt,
          Swipe: Zt,
          Pinch: $t,
          Rotate: Kt,
          Press: Xt,
          on: M,
          off: w,
          each: y,
          merge: S,
          extend: b,
          assign: l,
          inherit: x,
          bindFn: P,
          prefixed: F
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = Qt, (n = function() {
          return Qt
        }.call(e, r, e, t)) === o || (t.exports = n)
      }(window, document)
    },
    31580: (t, e, r) => {
      var n = r(36056).Symbol;
      t.exports = n
    },
    95992: (t, e, r) => {
      var n = r(31580),
        i = r(78584),
        a = r(49176),
        s = n ? n.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? i(t) : a(t)
      }
    },
    96096: (t, e, r) => {
      var n = r(57520),
        i = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, n(t) + 1).replace(i, "") : t
      }
    },
    81044: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n
    },
    78584: (t, e, r) => {
      var n = r(31580),
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
    49176: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    36056: (t, e, r) => {
      var n = r(81044),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
      t.exports = a
    },
    57520: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)););
        return r
      }
    },
    69760: (t, e, r) => {
      var n = r(89048),
        i = r(12721),
        a = r(80088),
        s = Math.max,
        o = Math.min;
      t.exports = function(t, e, r) {
        var l, h, u, c, p, f, d = 0,
          m = !1,
          v = !1,
          y = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function g(e) {
          var r = l,
            n = h;
          return l = h = void 0, d = e, c = t.apply(n, r)
        }

        function b(t) {
          var r = t - f;
          return void 0 === f || r >= e || r < 0 || v && t - d >= u
        }

        function S() {
          var t = i();
          if (b(t)) return x(t);
          p = setTimeout(S, function(t) {
            var r = e - (t - f);
            return v ? o(r, u - (t - d)) : r
          }(t))
        }

        function x(t) {
          return p = void 0, y && l ? g(t) : (l = h = void 0, c)
        }

        function P() {
          var t = i(),
            r = b(t);
          if (l = arguments, h = this, f = t, r) {
            if (void 0 === p) return function(t) {
              return d = t, p = setTimeout(S, e), m ? g(t) : c
            }(f);
            if (v) return clearTimeout(p), p = setTimeout(S, e), g(f)
          }
          return void 0 === p && (p = setTimeout(S, e)), c
        }
        return e = a(e) || 0, n(r) && (m = !!r.leading, u = (v = "maxWait" in r) ? s(a(r.maxWait) || 0, e) : u, y = "trailing" in r ? !!r.trailing : y), P.cancel = function() {
          void 0 !== p && clearTimeout(p), d = 0, l = f = h = p = void 0
        }, P.flush = function() {
          return void 0 === p ? c : x(i())
        }, P
      }
    },
    89048: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    72316: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    99464: (t, e, r) => {
      var n = r(95992),
        i = r(72316);
      t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == n(t)
      }
    },
    12721: (t, e, r) => {
      var n = r(36056);
      t.exports = function() {
        return n.Date.now()
      }
    },
    80088: (t, e, r) => {
      var n = r(96096),
        i = r(89048),
        a = r(99464),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        h = parseInt;
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
        return r || l.test(t) ? h(t.slice(2), r ? 2 : 8) : s.test(t) ? NaN : +t
      }
    },
    86352: function(module, exports, __webpack_require__) {
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
          var n, i, a, s, o, l, h, u;
          switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), u = r * (1 - (1 - o) * e), s % 6) {
            case 0:
              n = r, i = u, a = l;
              break;
            case 1:
              n = h, i = r, a = l;
              break;
            case 2:
              n = l, i = r, a = u;
              break;
            case 3:
              n = l, i = h, a = r;
              break;
            case 4:
              n = u, i = l, a = r;
              break;
            case 5:
              n = r, i = l, a = h
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
                      var s, o, l, h, u, c, p, f = i.length;
                      for (o = 0; o < f; o += 1)
                        if ("ks" in (s = i[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var d = s.masksProperties;
                            for (h = d.length, l = 0; l < h; l += 1)
                              if (d[l].pt.k.i) n(d[l].pt.k);
                              else
                                for (c = d[l].pt.k.length, u = 0; u < c; u += 1) d[l].pt.k[u].s && n(d[l].pt.k[u].s[0]), d[l].pt.k[u].e && n(d[l].pt.k[u].e[0])
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
                      h = function() {
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
                      u = function() {
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
                              var h = r.masksProperties;
                              for (a = h.length, i = 0; i < a; i += 1)
                                if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                else
                                  for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl)
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
                        r.__complete || (h(r), s(r), o(r), l(r), u(r), t(r.layers, r.assets), function(r, n) {
                          if (r) {
                            var i = 0,
                              a = r.length;
                            for (i = 0; i < a; i += 1) 1 === r[i].t && (r[i].data.layers = e(r[i].data.refId, n), t(r[i].data.layers, n))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return c.checkColors = h, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = u, c.completeLayers = t, c
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
              for (var r = 0, i = t.target; r < n;) e[r].animation === i && (e.splice(r, 1), r -= 1, n -= 1, i.isPaused || u()), r += 1
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

            function h() {
              i += 1, d()
            }

            function u() {
              i -= 1
            }

            function c(t, r) {
              t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", u), e.push({
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
                  var o = new u([t, r, n, i]);
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

            function h(t, e, r) {
              return 3 * a(e, r) * t * t + 2 * s(e, r) * t + o(e)
            }

            function u(t) {
              this._p = t, this._mSampleValues = i ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return u.prototype = {
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
                for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, s = 0, o = 1, u = r - 1; o !== u && a[o] <= t; ++o) s += n;
                var c = s + (t - a[--o]) / (a[o + 1] - a[o]) * n,
                  p = h(c, e, i);
                return p >= .001 ? function(t, e, r, n) {
                  for (var i = 0; i < 4; ++i) {
                    var a = h(e, r, n);
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
            var i, a, s, o, l, h, u = getDefaultCurveSegments(),
              c = 0,
              p = [],
              f = [],
              d = bezierLengthPool.newElement();
            for (s = r.length, i = 0; i < u; i += 1) {
              for (l = i / (u - 1), h = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * n[a] + bmPow(l, 3) * e[a], p[a] = o, null !== f[a] && (h += bmPow(p[a] - f[a], 2)), f[a] = p[a];
              h && (c += h = bmSqrt(h)), d.percents[i] = l, d.lengths[i] = c
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
              var h, u, c, p, f, d, m, v = getDefaultCurveSegments(),
                y = 0,
                g = null;
              2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (v = 2);
              var b = new n(v);
              for (c = s.length, h = 0; h < v; h += 1) {
                for (m = createSizedArray(c), f = h / (v - 1), d = 0, u = 0; u < c; u += 1) p = bmPow(1 - f, 3) * t[u] + 3 * bmPow(1 - f, 2) * f * (t[u] + s[u]) + 3 * (1 - f) * bmPow(f, 2) * (r[u] + o[u]) + bmPow(f, 3) * r[u], m[u] = p, null !== g && (d += bmPow(m[u] - g[u], 2));
                y += d = bmSqrt(d), b.points[h] = new i(d, m), g = m
              }
              b.segmentLength = y, a[l] = b
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
            for (var l = n[a] > s ? -1 : 1, h = !0; h;)
              if (n[a] <= s && n[a + 1] > s ? (o = (s - n[a]) / (n[a + 1] - n[a]), h = !1) : a += l, a < 0 || a >= i - 1) {
                if (a === i - 1) return r[a];
                h = !1
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
                h = n.lengths,
                u = 0;
              for (e = 0; e < l - 1; e += 1) h[e] = r(a[e], a[e + 1], s[e], o[e + 1]), u += h[e].addedLength;
              return i && l && (h[e] = r(a[e], a[0], s[e], o[0]), u += h[e].addedLength), n.totalLength = u, n
            },
            getNewSegment: function(e, r, n, i, a, s, h) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var u, c = o(a, h),
                p = o(s = s > 1 ? 1 : s, h),
                f = e.length,
                d = 1 - c,
                m = 1 - p,
                v = d * d * d,
                y = c * d * d * 3,
                g = c * c * d * 3,
                b = c * c * c,
                S = d * d * m,
                x = c * d * m + d * c * m + d * d * p,
                P = c * c * m + d * c * p + c * d * p,
                E = c * c * p,
                C = d * m * m,
                M = c * m * m + d * p * m + d * m * p,
                w = c * p * m + d * p * p + c * m * p,
                T = c * p * p,
                _ = m * m * m,
                A = p * m * m + m * p * m + m * m * p,
                k = p * p * m + m * p * p + p * m * p,
                D = p * p * p;
              for (u = 0; u < f; u += 1) l[4 * u] = t.round(1e3 * (v * e[u] + y * n[u] + g * i[u] + b * r[u])) / 1e3, l[4 * u + 1] = t.round(1e3 * (S * e[u] + x * n[u] + P * i[u] + E * r[u])) / 1e3, l[4 * u + 2] = t.round(1e3 * (C * e[u] + M * n[u] + w * i[u] + T * r[u])) / 1e3, l[4 * u + 3] = t.round(1e3 * (_ * e[u] + A * n[u] + k * i[u] + D * r[u])) / 1e3;
              return l
            },
            getPointInSegment: function(e, r, n, i, a, s) {
              var l = o(a, s),
                h = 1 - l;
              return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * n[0] + (l * l * h + h * l * l + l * h * l) * i[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * n[1] + (l * l * h + h * l * l + l * h * l) * i[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function(r, n, i, a, s, o, l, h, u) {
              if (0 === i && 0 === o && 0 === u) return e(r, n, a, s, l, h);
              var c, p = t.sqrt(t.pow(a - r, 2) + t.pow(s - n, 2) + t.pow(o - i, 2)),
                f = t.sqrt(t.pow(l - r, 2) + t.pow(h - n, 2) + t.pow(u - i, 2)),
                d = t.sqrt(t.pow(l - a, 2) + t.pow(h - s, 2) + t.pow(u - o, 2));
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
          for (var i, a, s, o, l, h, u, c, p, f = e.lastIndex, d = f, m = this.keyframes.length - 1, v = !0; v;) {
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
          var y, g = a.t - n,
            b = i.t - n;
          if (i.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
            var S = s.bezierData;
            if (t >= g || t < b) {
              var x = t >= g ? S.points.length - 1 : 0;
              for (l = S.points[x].point.length, o = 0; o < l; o += 1) r[o] = S.points[x].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = p), h = p((t - b) / (g - b));
              var P, E = S.segmentLength * h,
                C = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, u = S.points.length; v;) {
                if (C += S.points[c].partialLength, 0 === E || 0 === h || c === S.points.length - 1) {
                  for (l = S.points[c].point.length, o = 0; o < l; o += 1) r[o] = S.points[c].point[o];
                  break
                }
                if (E >= C && E < C + S.points[c + 1].partialLength) {
                  for (P = (E - C) / S.points[c + 1].partialLength, l = S.points[c].point.length, o = 0; o < l; o += 1) r[o] = S.points[c].point[o] + (S.points[c + 1].point[o] - S.points[c].point[o]) * P;
                  break
                }
                c < u - 1 ? c += 1 : v = !1
              }
              e._lastPoint = c, e._lastAddedLength = C - S.points[c].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var M, w, T, _, A;
            if (m = i.s.length, y = a.s || i.e, this.sh && 1 !== i.h) t >= g ? (r[0] = y[0], r[1] = y[1], r[2] = y[2]) : t <= b ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(y), (t - b) / (g - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== i.h && (t >= g ? h = 1 : t < b ? h = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? p = s.__fnct[d] : (M = void 0 === i.o.x[d] ? i.o.x[0] : i.o.x[d], w = void 0 === i.o.y[d] ? i.o.y[0] : i.o.y[d], T = void 0 === i.i.x[d] ? i.i.x[0] : i.i.x[d], _ = void 0 === i.i.y[d] ? i.i.y[0] : i.i.y[d], p = BezierFactory.getBezierEasing(M, w, T, _).get, s.__fnct[d] = p)) : s.__fnct ? p = s.__fnct : (M = i.o.x, w = i.o.y, T = i.i.x, _ = i.i.y, p = BezierFactory.getBezierEasing(M, w, T, _).get, i.keyframeMetadata = p), h = p((t - b) / (g - b)))), y = a.s || i.e, A = 1 === i.h ? i.s[d] : i.s[d] + (y[d] - i.s[d]) * h, "multidimensional" === this.propType ? r[d] = A : r = A
          }
          return e.lastIndex = f, r
        }

        function slerp(t, e, r) {
          var n, i, a, s, o, l = [],
            h = t[0],
            u = t[1],
            c = t[2],
            p = t[3],
            f = e[0],
            d = e[1],
            m = e[2],
            v = e[3];
          return (i = h * f + u * d + c * m + p * v) < 0 && (i = -i, f = -f, d = -d, m = -m, v = -v), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * h + o * f, l[1] = s * u + o * d, l[2] = s * c + o * m, l[3] = s * p + o * v, l
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
            h = Math.sin(n / 2);
          return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h]
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
          var a, s, o, l, h = e.k.length;
          for (i = 0; i < h - 1; i += 1) e.k[i].to && e.k[i].s && e.k[i + 1] && e.k[i + 1].s && (a = e.k[i].s, s = e.k[i + 1].s, o = e.k[i].to, l = e.k[i].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (e.k[i].to = null, e.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (e.k[i].to = null, e.k[i].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = n, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var u = e.k[0].s.length;
          for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0; i < u; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", u)
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
              var n, i, a, s, o, l, h, u, c, p = r.lastIndex,
                f = this.keyframes;
              if (t < f[0].t - this.offsetTime) n = f[0].s[0], a = !0, p = 0;
              else if (t >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
              else {
                for (var d, m, v, y = p, g = f.length - 1, b = !0; b && (d = f[y], !((m = f[y + 1]).t - this.offsetTime > t));) y < g - 1 ? y += 1 : b = !1;
                if (v = this.keyframesMetadata[y] || {}, p = y, !(a = 1 === d.h)) {
                  if (t >= m.t - this.offsetTime) u = 1;
                  else if (t < d.t - this.offsetTime) u = 0;
                  else {
                    var S;
                    v.__fnct ? S = v.__fnct : (S = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, v.__fnct = S), u = S((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  i = m.s ? m.s[0] : d.e[0]
                }
                n = d.s[0]
              }
              for (l = e._length, h = n.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1)
                for (o = 0; o < h; o += 1) c = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * u, e.i[s][o] = c, c = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * u, e.o[s][o] = c, c = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * u, e.v[s][o] = c
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
            var h = function() {
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
              u = function() {
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
                      h = this.os.v,
                      u = this.is.v,
                      c = 2 * Math.PI * o / (2 * i),
                      p = 2 * Math.PI * l / (2 * i),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < i; t += 1) {
                      r = s ? h : u, n = s ? c : p;
                      var m = (e = s ? o : l) * Math.cos(f),
                        v = e * Math.sin(f),
                        y = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                        g = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                      m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - y * n * r * d, v - g * n * r * d, m + y * n * r * d, v + g * n * r * d, t, !0), s = !s, f += a * d
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
                        h = n * Math.sin(s),
                        u = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - u * a * i * o, h - c * a * i * o, l + u * a * i * o, h + c * a * i * o, t, !0), s += r * o
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
                return 3 === r || 4 === r ? n = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new s(t, e, r) : 5 === r ? n = new c(t, e) : 6 === r ? n = new h(t, e) : 7 === r && (n = new u(t, e)), n.k && t.addDynamicProperty(n), n
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

            function h(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function u(t, e) {
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

            function f(t, e, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = u, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
            }

            function d(t, e, r) {
              return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function m(t, e, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
              var v = this.props;
              if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === u && 0 === c) return v[12] = v[12] * t + v[15] * p, v[13] = v[13] * a + v[15] * f, v[14] = v[14] * u + v[15] * d, v[15] *= m, this._identityCalculated = !1, this;
              var y = v[0],
                g = v[1],
                b = v[2],
                S = v[3],
                x = v[4],
                P = v[5],
                E = v[6],
                C = v[7],
                M = v[8],
                w = v[9],
                T = v[10],
                _ = v[11],
                A = v[12],
                k = v[13],
                D = v[14],
                I = v[15];
              return v[0] = y * t + g * i + b * l + S * p, v[1] = y * e + g * a + b * h + S * f, v[2] = y * r + g * s + b * u + S * d, v[3] = y * n + g * o + b * c + S * m, v[4] = x * t + P * i + E * l + C * p, v[5] = x * e + P * a + E * h + C * f, v[6] = x * r + P * s + E * u + C * d, v[7] = x * n + P * o + E * c + C * m, v[8] = M * t + w * i + T * l + _ * p, v[9] = M * e + w * a + T * h + _ * f, v[10] = M * r + w * s + T * u + _ * d, v[11] = M * n + w * o + T * c + _ * m, v[12] = A * t + k * i + D * l + I * p, v[13] = A * e + k * a + D * h + I * f, v[14] = A * r + k * s + D * u + I * d, v[15] = A * n + k * o + D * c + I * m, this._identityCalculated = !1, this
            }

            function v(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function y() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function g(t) {
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

            function P(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function E(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function C(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function M() {
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

            function w(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function T(t) {
              var e, r = t.length,
                n = [];
              for (e = 0; e < r; e += 1) n[e] = w(t[e]);
              return n
            }

            function _(t, e, r) {
              var n = createTypedArray("float32", 6);
              if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
              else {
                var i = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                n[0] = t[0] * i + t[1] * s + l, n[1] = t[0] * a + t[1] * o + h, n[2] = e[0] * i + e[1] * s + l, n[3] = e[0] * a + e[1] * o + h, n[4] = r[0] * i + r[1] * s + l, n[5] = r[0] * a + r[1] * o + h
              }
              return n
            }

            function A(t, e, r) {
              return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function D() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += n(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
              return r
            }

            function I(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? n(1e4 * t) / 1e4 : t
            }

            function F() {
              var t = this.props;
              return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
            }
            return function() {
              this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = c, this.shear = h, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.multiply = v, this.applyToPoint = x, this.applyToX = P, this.applyToY = E, this.applyToZ = C, this.applyToPointArray = A, this.applyToTriplePoints = _, this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = F, this.clone = b, this.cloneFromProps = S, this.equals = g, this.inversePoints = T, this.inversePoint = w, this.getInverseMatrix = M, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
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
            h = a.length;
          for (s = 0; s < h; s += 1) {
            var u, c;
            (o = a[s]).e * i < n || o.s * i > n + r || (u = o.s * i <= n ? 0 : (o.s * i - n) / r, c = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, c]))
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
          var o, l, h, u, c, p = this.shapes.length,
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
                  for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), h.push(u), c += u.totalLength;
                  d.totalShapeLength = c, d.pathsData = h
                }
                f += c, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var y, g = e,
              b = r,
              S = 0;
            for (i = p - 1; i >= 0; i -= 1)
              if ((d = this.shapes[i]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (y = this.calculateShapeEdges(e, r, d.totalShapeLength, S, f), S += d.totalShapeLength) : y = [
                    [g, b]
                  ], l = y.length, o = 0; o < l; o += 1) {
                  g = y[o][0], b = y[o][1], v.length = 0, b <= 1 ? v.push({
                    s: d.totalShapeLength * g,
                    e: d.totalShapeLength * b
                  }) : g >= 1 ? v.push({
                    s: d.totalShapeLength * (g - 1),
                    e: d.totalShapeLength * (b - 1)
                  }) : (v.push({
                    s: d.totalShapeLength * g,
                    e: d.totalShapeLength
                  }), v.push({
                    s: 0,
                    e: d.totalShapeLength * (b - 1)
                  }));
                  var x = this.addShapes(d, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var P = x.pop();
                        this.addPaths(x, m), x = this.addShapes(d, v[1], P)
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
          var n, i, a, s, o, l, h, u, c = t.pathsData,
            p = t.shape.paths.shapes,
            f = t.shape.paths._length,
            d = 0,
            m = [],
            v = !0;
          for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), m.push(r), n = 0; n < f; n += 1) {
            for (l = c[n].lengths, r.c = p[n].c, a = p[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
              if (d + (s = l[i - 1]).addedLength < e.s) d += s.addedLength, r.c = !1;
              else {
                if (d > e.e) {
                  r.c = !1;
                  break
                }
                e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[i], p[n].v[i], r, o, v), v = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[i], p[n].o[i - 1], p[n].i[i], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, o, v), v = !1, r.c = !1), d += s.addedLength, o += 1
              } if (p[n].c && l.length) {
              if (s = l[i - 1], d <= e.e) {
                var y = l[i - 1].addedLength;
                e.s <= d && e.e >= d + y ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[0], p[n].v[0], r, o, v), v = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[0], p[n].o[i - 1], p[n].i[0], (e.s - d) / y, (e.e - d) / y, l[i - 1]), this.addSegmentFromArray(h, r, o, v), v = !1, r.c = !1)
              } else r.c = !1;
              d += s.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
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
          var s, o, l, h, u, c, p = shapePool.newElement();
          for (p.c = t.c, a = 0; a < i; a += 1) s = t.v[a][0] + (n[0] - t.v[a][0]) * r, o = t.v[a][1] + (n[1] - t.v[a][1]) * r, l = t.o[a][0] + (n[0] - t.o[a][0]) * -r, h = t.o[a][1] + (n[1] - t.o[a][1]) * -r, u = t.i[a][0] + (n[0] - t.i[a][0]) * -r, c = t.i[a][1] + (n[1] - t.i[a][1]) * -r, p.setTripleAt(s, o, l, h, u, c, a);
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
            h = e[0] + Math.cos(r) * n * i,
            u = e[1] - Math.sin(r) * n * i;
          t.setTripleAt(h, u, h + Math.cos(o) * a, u - Math.sin(o) * a, h + Math.cos(l) * s, u - Math.sin(l) * s, t.length())
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
            h = e.v[0 === r ? e._length - 1 : r - 1],
            u = e.v[(r + 1) % e._length],
            c = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
          setPoint(t, e.v[r % e._length], o, s, n, p / (2 * (i + 1)), c / (2 * (i + 1)), a)
        }

        function zigZagSegment(t, e, r, n, i, a) {
          for (var s = 0; s < n; s += 1) {
            var o = (s + 1) / (n + 1),
              l = 2 === i ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              h = e.normalAngle(o);
            setPoint(t, e.point(o), h, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
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
          var h = lineIntersection(r, n, i, a);
          null === h && (h = n);
          var u = lineIntersection(s, o, i, a);
          return null === u && (u = s), new PolynomialBezier(r, h, u, o)
        }

        function joinLines(t, e, r, n, i) {
          var a = e.points[3],
            s = r.points[0];
          if (3 === n) return a;
          if (pointEqual(a, s)) return a;
          if (2 === n) {
            var o = -e.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              h = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              u = h ? pointDistance(h, a) : pointDistance(a, s) / 2,
              c = polarOffset(a, o, 2 * u * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(s, l, 2 * u * roundCorner), t.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], t.length()), s
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
                var h = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                h.it.push({
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
                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
              }
              this.elem.reloadShapes(), s = !0
            }
            for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
              if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                var u = this.elemsData[n].it,
                  c = u[u.length - 1];
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
              y = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var g, b, S = 0;
            if (p > 0) {
              for (; S < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), S += f)
            } else if (p < 0) {
              for (; S > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), S -= f)
            }
            for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== S) {
                for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), g = 0; g < b; g += 1) r[g] = this.matrix.props[g];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), g = 0; g < b; g += 1) r[g] = this.matrix.props[g];
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
          var i, a, s, o, l, h, u, c, p, f, d, m, v = t._length,
            y = 0;
          for (r = 0; r < v; r += 1) i = t.v[r], s = t.o[r], a = t.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== v - 1 || t.c ? (o = 0 === r ? t.v[v - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = d = i[0] + (o[0] - i[0]) * h, c = m = i[1] - (i[1] - o[1]) * h, p = u - (u - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, p, f, d, m, y), y += 1, o = r === v - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = p = i[0] + (o[0] - i[0]) * h, c = f = i[1] + (o[1] - i[1]) * h, d = u - (u - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, p, f, d, m, y), y += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], y), y += 1) : (n.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1);
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
            h = Math.max(0, Math.round(this.frequency.v)),
            u = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l, h, u));
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
          var h = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(t, a), h.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), h.push(offsetSegmentSplit(o, e));
          h = pruneIntersections(h);
          var u = null,
            c = null;
          for (a = 0; a < h.length; a += 1) {
            var p = h[a];
            for (c && (u = joinLines(i, c, p[0], r, n)), c = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], u && pointEqual(o.points[0], u) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), u = o.points[3]
          }
          return h.length && joinLines(i, c, h[0][0], r, n), i
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, r, n, i, a, s, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            u = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l, u, h));
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
          var h = {
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
                  var l, h, u = !0;
                  if (n[r].loaded = !1, n[r].monoCase = i(n[r].fFamily, "monospace"), n[r].sansCase = i(n[r].fFamily, "sans-serif"), n[r].fPath) {
                    if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length > 0 && (u = !1), u) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.setAttribute("f-family", n[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(n[r].fPath) && (u = !1);
                      if (u) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.type = "text/css", p.rel = "stylesheet", p.href = n[r].fPath, document.body.appendChild(p)
                      }
                    } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) n[r].fPath === l[h].src && (u = !1);
                      if (u) {
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
          return l.prototype = h, l
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
          var o, l, h, u, c, p, f = this.masksProperties,
            d = 0,
            m = [],
            v = createElementID(),
            y = "clipPath",
            g = "clip-path";
          for (n = 0; n < s; n += 1)
            if (("a" !== f[n].mode && "n" !== f[n].mode || f[n].inv || 100 !== f[n].o.k || f[n].o.x) && (y = "mask", g = "mask"), "s" !== f[n].mode && "i" !== f[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), i = createNS("path"), "n" === f[n].mode) this.viewData[n] = {
              op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
              elem: i,
              lastPath: ""
            }, a.appendChild(i);
            else {
              var b;
              if (d += 1, i.setAttribute("fill", "s" === f[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== f[n].x.k ? (y = "mask", g = "mask", p = PropertyFactory.getProp(this.element, f[n].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), u.appendChild(c), a.appendChild(u), i.setAttribute("stroke", "s" === f[n].mode ? "#000000" : "#ffffff")) : (c = null, p = null), this.storedData[n] = {
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
                invRect: h
              }, this.viewData[n].prop.k || this.drawPath(f[n], this.viewData[n].prop.v, this.viewData[n])
            } for (this.maskElement = createNS(y), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
          d > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(g, "url(" + getLocationHref() + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
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
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                var u = createNS("feFuncA");
                u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), h.appendChild(u), this.globalData.defs.appendChild(r);
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
            var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var u = this.stops;
            for (n = 4 * t.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), u.push(r);
            s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = a, this.ost = u, this.maskId = l, e.msElem = s
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
              var a, s, o, l, h, u, c, p, f, d, m = n.styles.length,
                v = n.lvl;
              for (u = 0; u < m; u += 1) {
                if (l = n.sh._mdf || i, n.styles[u].lvl < v) {
                  for (p = e.reset(), f = v - n.styles[u].lvl, d = n.transformers.length - 1; !l && f > 0;) l = n.transformers[d].mProps._mdf || l, f -= 1, d -= 1;
                  if (l)
                    for (f = v - n.styles[u].lvl, d = n.transformers.length - 1; f > 0;) p.multiply(n.transformers[d].mProps.v), f -= 1, d -= 1
                } else p = t;
                if (s = (c = n.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, p));
                  n.caches[u] = o
                } else o = n.caches[u];
                n.styles[u].d += !0 === r.hd ? "" : o, n.styles[u]._mdf = l || n.styles[u]._mdf
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
                h = e.g._hasOpacity,
                u = e.s.v,
                c = e.e.v;
              if (e.o._mdf || r) {
                var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(p, e.o.v)
              }
              if (e.s._mdf || r) {
                var f = 1 === t.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                l.setAttribute(f, u[0]), l.setAttribute(d, u[1]), h && !e.g._collapsable && (e.of.setAttribute(f, u[0]), e.of.setAttribute(d, u[1]))
              }
              if (e.g._cmdf || r) {
                n = e.cst;
                var m = e.g.c;
                for (a = n.length, i = 0; i < a; i += 1)(s = n[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
              }
              if (h && (e.g._omdf || r)) {
                var v = e.g.o;
                for (a = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1) s = n[i], e.g._collapsable || s.setAttribute("offset", v[2 * i] + "%"), s.setAttribute("stop-opacity", v[2 * i + 1])
              }
              if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)));
                var y = Math.atan2(c[1] - u[1], c[0] - u[0]),
                  g = e.h.v;
                g >= 1 ? g = .99 : g <= -1 && (g = -.99);
                var b = o * g,
                  S = Math.cos(y + e.a.v) * b + u[0],
                  x = Math.sin(y + e.a.v) * b + u[1];
                l.setAttribute("fx", S), l.setAttribute("fy", x), h && !e.g._collapsable && (e.of.setAttribute("fx", S), e.of.setAttribute("fy", x))
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
          var o, l, h, u, c, p, f = [].concat(a),
            d = t.length - 1,
            m = [],
            v = [];
          for (o = d; o >= 0; o -= 1) {
            if ((p = this.searchProcessedElement(t[o])) ? e[o] = r[p - 1] : t[o]._render = s, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], i), t[o]._render && e[o].style.pElem.parentNode !== n && n.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (p)
                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, i + 1, f, s), t[o]._render && e[o].gr.parentNode !== n && n.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], n)), u = e[o].transform, f.push(u)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], f, i)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (p ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), v.push(c)) : "rp" === t[o].ty && (p ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), s = !1), v.push(c));
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
            h = this.data,
            u = [],
            c = 0,
            p = h.m.g,
            f = 0,
            d = 0,
            m = 0,
            v = [],
            y = 0,
            g = 0,
            b = l.getFontByName(t.f),
            S = 0,
            x = getFontProperties(b);
          t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var P, E = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var C, M, w = !0, T = t.sz[0], _ = t.sz[1]; w;) {
              C = 0, y = 0, r = (M = this.buildFinalText(t.t)).length, E = t.tr / 1e3 * t.finalSize;
              var A = -1;
              for (e = 0; e < r; e += 1) P = M[e].charCodeAt(0), n = !1, " " === M[e] ? A = e : 13 !== P && 3 !== P || (y = 0, n = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(M[e], b.fStyle, b.fFamily), S = n ? 0 : o.w * t.finalSize / 100) : S = l.measureText(M[e], t.f, t.finalSize), y + S > T && " " !== M[e] ? (-1 === A ? r += 1 : e = A, C += t.finalLineHeight || 1.2 * t.finalSize, M.splice(e, A === e ? 1 : 0, "\r"), A = -1, y = 0) : (y += S, y += E);
              C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && _ < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = M, r = t.finalText.length, w = !1)
            }
          y = -E, S = 0;
          var k, D = 0;
          for (e = 0; e < r; e += 1)
            if (n = !1, 13 === (P = (k = t.finalText[e]).charCodeAt(0)) || 3 === P ? (D = 0, v.push(y), g = y > g ? y : g, y = -2 * E, i = "", n = !0, m += 1) : i = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(t.f).fFamily), S = n ? 0 : o.w * t.finalSize / 100) : S = l.measureText(i, t.f, t.finalSize), " " === k ? D += S + E : (y += S + E + D, D = 0), u.push({
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
                for ("" !== i && " " !== i || (f -= S); d <= e;) u[d].an = f, u[d].ind = c, u[d].extra = S, d += 1;
                c += 1, f = 0
              }
            } else if (3 == p) {
            if (f += S, "" === i || e === r - 1) {
              for ("" === i && (f -= S); d <= e;) u[d].an = f, u[d].ind = c, u[d].extra = S, d += 1;
              f = 0, c += 1
            }
          } else u[c].ind = c, u[c].extra = 0, c += 1;
          if (t.l = u, g = y > g ? y : g, v.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = g, t.j) {
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
          var I, F, O, R, V = h.a;
          s = V.length;
          var L = [];
          for (a = 0; a < s; a += 1) {
            for ((I = V[a]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), R = 0, O = I.s.b, e = 0; e < r; e += 1)(F = u[e]).anIndexes[a] = R, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || e == r - 1) || 4 == O && (F.n || e == r - 1)) && (1 === I.s.rn && L.push(R), R += 1);
            h.a[a].s.totalChars = R;
            var B, N = -1;
            if (1 === I.s.rn)
              for (e = 0; e < r; e += 1) N != (F = u[e]).anIndexes[a] && (N = F.anIndexes[a], B = L.splice(Math.floor(Math.random() * L.length), 1)[0]), F.anIndexes[a] = B
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
                h = 0,
                u = this.finalS,
                c = this.finalE,
                p = this.data.sh;
              if (2 === p) h = l(h = c === u ? n >= c ? 1 : 0 : t(0, e(.5 / (c - u) + (n - u) / (c - u), 1)));
              else if (3 === p) h = l(h = c === u ? n >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - u) + (n - u) / (c - u), 1)));
              else if (4 === p) c === u ? h = 0 : (h = t(0, e(.5 / (c - u) + (n - u) / (c - u), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === p) {
                if (c === u) h = 0;
                else {
                  var f = c - u,
                    d = -f / 2 + (n = e(t(0, n + .5 - u), c - u)),
                    m = f / 2;
                  h = Math.sqrt(1 - d * d / (m * m))
                }
                h = l(h)
              } else 6 === p ? (c === u ? h = 0 : (n = e(t(0, n + .5 - u), c - u), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (c - u))) / 2), h = l(h)) : (n >= r(u) && (h = t(0, e(n - u < 0 ? e(c, 1) - (u - n) : c - n, 1))), h = l(h));
              if (100 !== this.sm.v) {
                var v = .01 * this.sm.v;
                0 === v && (v = 1e-8);
                var y = .5 - .5 * v;
                h < y ? h = 0 : (h = (h - y) / v) > 1 && (h = 1)
              }
              return h * this.a.v
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
            var r, n, i, a, s, o, l, h, u, c, p, f, d, m, v, y, g, b, S, x = this._moreOptions.alignment.v,
              P = this._animatorsData,
              E = this._textData,
              C = this.mHelper,
              M = this._renderType,
              w = this.renderedLetters.length,
              T = t.l;
            if (this._hasMaskedPath) {
              if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var _, A = S.v;
                for (this._pathData.r.v && (A = A.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = A._length - 1, y = 0, i = 0; i < a; i += 1) _ = bez.buildBezierData(A.v[i], A.v[i + 1], [A.o[i][0] - A.v[i][0], A.o[i][1] - A.v[i][1]], [A.i[i + 1][0] - A.v[i + 1][0], A.i[i + 1][1] - A.v[i + 1][1]]), s.tLength += _.segmentLength, s.segments.push(_), y += _.segmentLength;
                i = a, S.v.c && (_ = bez.buildBezierData(A.v[i], A.v[0], [A.o[i][0] - A.v[i][0], A.o[i][1] - A.v[i][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), s.tLength += _.segmentLength, s.segments.push(_), y += _.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, h = 0, u = !0, m = s.segments, o < 0 && S.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
              f = (d = m[p].points)[c - 1], v = (l = d[c]).partialLength
            }
            a = T.length, r = 0, n = 0;
            var k, D, I, F, O, R = 1.2 * t.finalSize * .714,
              V = !0;
            I = P.length;
            var L, B, N, z, G, j, H, W, q, U, Y, $, X = -1,
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
                if (T[i].n) {
                  for (rt && (rt += nt); at < i;) T[at].animatorJustifyOffset = rt, at += 1;
                  rt = 0, st = !0
                } else {
                  for (D = 0; D < I; D += 1)(k = P[D].a).t.propType && (st && 2 === t.j && (nt += k.t.v * it), (O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars)).length ? rt += k.t.v * O[0] * it : rt += k.t.v * O * it);
                  st = !1
                } for (rt && (rt += nt); at < i;) T[at].animatorJustifyOffset = rt, at += 1
            }
            for (i = 0; i < a; i += 1) {
              if (C.reset(), z = 1, T[i].n) r = 0, n += t.yOffset, n += V ? 1 : 0, o = K, V = !1, this._hasMaskedPath && (c = J, f = (d = m[p = Z].points)[c - 1], v = (l = d[c]).partialLength, h = 0), tt = "", Y = "", q = "", $ = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== T[i].line) {
                    switch (t.j) {
                      case 1:
                        o += y - t.lineWidths[T[i].line];
                        break;
                      case 2:
                        o += (y - t.lineWidths[T[i].line]) / 2
                    }
                    Q = T[i].line
                  }
                  X !== T[i].ind && (T[X] && (o += T[X].extra), o += T[i].an / 2, X = T[i].ind), o += x[0] * T[i].an * .005;
                  var ot = 0;
                  for (D = 0; D < I; D += 1)(k = P[D].a).p.propType && ((O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars)).length ? ot += k.p.v[0] * O[0] : ot += k.p.v[0] * O), k.a.propType && ((O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars)).length ? ot += k.a.v[0] * O[0] : ot += k.a.v[0] * O);
                  for (u = !0, this._pathData.a.v && (o = .5 * T[0].an + (y - this._pathData.f.v - .5 * T[0].an - .5 * T[T.length - 1].an) * X / (a - 1), o += this._pathData.f.v); u;) h + v >= o + ot || !d ? (g = (o + ot - h) / l.partialLength, B = f.point[0] + (l.point[0] - f.point[0]) * g, N = f.point[1] + (l.point[1] - f.point[1]) * g, C.translate(-x[0] * T[i].an * .005, -x[1] * R * .01), u = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : S.v.c ? (c = 0, d = m[p = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, v = (l = d[c]).partialLength));
                  L = T[i].an / 2 - T[i].add, C.translate(-L, 0, 0)
                } else L = T[i].an / 2 - T[i].add, C.translate(-L, 0, 0), C.translate(-x[0] * T[i].an * .005, -x[1] * R * .01, 0);
                for (D = 0; D < I; D += 1)(k = P[D].a).t.propType && (O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? r += k.t.v * O[0] : r += k.t.v * O));
                for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < I; D += 1)(k = P[D].a).a.propType && ((O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars)).length ? C.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : C.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                for (D = 0; D < I; D += 1)(k = P[D].a).s.propType && ((O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars)).length ? C.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : C.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                for (D = 0; D < I; D += 1) {
                  if (k = P[D].a, O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars), k.sk.propType && (O.length ? C.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : C.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? C.rotateZ(-k.r.v * O[2]) : C.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? C.rotateY(k.ry.v * O[1]) : C.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? C.rotateX(k.rx.v * O[0]) : C.rotateX(k.rx.v * O)), k.o.propType && (O.length ? z += (k.o.v * O[0] - z) * O[0] : z += (k.o.v * O - z) * O), t.strokeWidthAnim && k.sw.propType && (O.length ? j += k.sw.v * O[0] : j += k.sw.v * O), t.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) O.length ? G[W] += (k.sc.v[W] - G[W]) * O[0] : G[W] += (k.sc.v[W] - G[W]) * O;
                  if (t.fillColorAnim && t.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) O.length ? H[W] += (k.fc.v[W] - H[W]) * O[0] : H[W] += (k.fc.v[W] - H[W]) * O;
                    k.fh.propType && (H = O.length ? addHueToRGB(H, k.fh.v * O[0]) : addHueToRGB(H, k.fh.v * O)), k.fs.propType && (H = O.length ? addSaturationToRGB(H, k.fs.v * O[0]) : addSaturationToRGB(H, k.fs.v * O)), k.fb.propType && (H = O.length ? addBrightnessToRGB(H, k.fb.v * O[0]) : addBrightnessToRGB(H, k.fb.v * O))
                  }
                }
                for (D = 0; D < I; D += 1)(k = P[D].a).p.propType && (O = P[D].s.getMult(T[i].anIndexes[D], E.a[D].s.totalChars), this._hasMaskedPath ? O.length ? C.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : C.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? C.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : C.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                if (t.strokeWidthAnim && (q = j < 0 ? 0 : j), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (C.translate(0, -t.ls), C.translate(0, x[1] * R * .01 + n, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180), C.rotate(-lt * Math.PI / 180)
                  }
                  C.translate(B, N, 0), o -= x[0] * T[i].an * .005, T[i + 1] && X !== T[i + 1].ind && (o += T[i].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (C.translate(r, n, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      C.translate(T[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[i].line]), 0, 0);
                      break;
                    case 2:
                      C.translate(T[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[i].line]) / 2, 0, 0)
                  }
                  C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(x[0] * T[i].an * .005, x[1] * R * .01, 0), r += T[i].l + .001 * t.tr * t.finalSize
                }
                "html" === M ? tt = C.toCSS() : "svg" === M ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], $ = z
              }
              w <= i ? (F = new LetterProps($, q, U, Y, tt, et), this.renderedLetters.push(F), w += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[i], this.lettersChangedFlag = F.update($, q, U, Y, tt, et) || this.lettersChangedFlag)
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
          var h = this.mHelper,
            u = this.data.singleShape,
            c = 0,
            p = 0,
            f = !0,
            d = .001 * r.tr * r.finalSize;
          if (!u || l || r.sz) {
            var m, v = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !u || 0 === t) {
                if (s = v > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), v <= t) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = s, l) {
                    var y = createNS("g");
                    s.appendChild(y), this.textSpans[t].childSpan = y
                  }
                  this.textSpans[t].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (h.reset(), u && (o[t].n && (c = -d, p += r.yOffset, p += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(r, h, o[t].line, c, p), c += o[t].l || 0, c += d), l) {
                var g;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) g = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), g = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var S = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(S.layerElement), S.destroy()
                }
                this.textSpans[t].glyph = g, g._debug = !0, g.prepareFrame(0), g.renderFrame(), this.textSpans[t].childSpan.appendChild(g.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else u && s.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            u && s && s.setAttribute("d", "")
          } else {
            var x = this.textContainer,
              P = "start";
            switch (r.j) {
              case 1:
                P = "end";
                break;
              case 2:
                P = "middle";
                break;
              default:
                P = "start"
            }
            x.setAttribute("text-anchor", P), x.setAttribute("letter-spacing", d);
            var E = this.buildTextContents(r.finalText);
            for (e = E.length, p = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t].span || createNS("tspan")).textContent = E[t], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", x.appendChild(s), this.textSpans[t] || (this.textSpans[t] = {
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
          var a, s, o, l, h, u, c = t.length - 1,
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
            } else "tr" === t[a].ty ? (l || (u = this.createTransformElement(t[a]), e[a] = u), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (l ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" === t[a].ty && (l ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty), e[a] = h, h.init(this, t, a, e), this.shapeModifiers.push(h), n = !1), f.push(h));
            this.addProcessedElement(t[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(p), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, r, n, i, a, s, o, l, h = this.stylesList.length,
            u = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < h; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (u.save(), a = l.elements, "st" === o || "gs" === o ? (u.ctxStrokeStyle("st" === o ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle("fl" === o ? l.co : l.grd), u.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[e].trNodes).length, n = 0; n < i; n += 1) "m" === s[n].t ? c.moveTo(s[n].p[0], s[n].p[1]) : "c" === s[n].t ? c.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (u.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), u.restore()
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
              var h = s.shapes[i];
              if (h && h.v) {
                for (n = h._length, r = 1; r < n; r += 1) 1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                });
                1 === n && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && n && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
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
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                u = Math.atan2(l[1] - o[1], l[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var p = h * c,
                f = Math.cos(u + e.a.v) * p + o[0],
                d = Math.sin(u + e.a.v) * p + o[1];
              n = s.createRadialGradient(f, d, 0, o[0], o[1], h)
            }
            var m = t.g.p,
              v = e.g.c,
              y = 1;
            for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * a + 1]), n.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + y + ")");
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
          var n, i, a, s, o, l, h, u, c, p, f, d, m = this.globalData.fontManager.getFontByName(t.f),
            v = t.l,
            y = this.mHelper;
          this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length;
          var g = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            S = 0,
            x = 0,
            P = !0,
            E = 0;
          for (n = 0; n < i; n += 1) {
            s = (a = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, y.reset(), g && v[n].n && (S = -b, x += t.yOffset, x += P ? 1 : 0, P = !1), c = (h = s.shapes ? s.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), g && this.applyTextPropertiesToMatrix(t, y, v[n].line, S, x), f = createSizedArray(c - 1);
            var C = 0;
            for (u = 0; u < c; u += 1)
              if ("sh" === h[u].ty) {
                for (l = h[u].ks.k.i.length, p = h[u].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(y.applyToX(p.v[0][0], p.v[0][1], 0), y.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(y.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToX(p.i[o][0], p.i[o][1], 0), y.applyToY(p.i[o][0], p.i[o][1], 0), y.applyToX(p.v[o][0], p.v[o][1], 0), y.applyToY(p.v[o][0], p.v[o][1], 0));
                d.push(y.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToX(p.i[0][0], p.i[0][1], 0), y.applyToY(p.i[0][0], p.i[0][1], 0), y.applyToX(p.v[0][0], p.v[0][1], 0), y.applyToY(p.v[0][0], p.v[0][1], 0)), f[C] = d, C += 1
              } g && (S += v[n].l, S += b), this.textSpans[E] ? this.textSpans[E].elem = f : this.textSpans[E] = {
              elem: f
            }, E += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, r, n, i, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          e = l.length;
          var h, u, c = null,
            p = null,
            f = null,
            d = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!l[t].n) {
              if ((s = o[t]) && (d.save(), d.ctxTransform(s.p), d.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? c !== s.fc && (d.ctxFillStyle(s.fc), c = s.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), n = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (a = (u = h[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? f !== s.sw && (f = s.sw, d.ctxLineWidth(s.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), s && s.sc ? p !== s.sc && (p = s.sc, d.ctxStrokeStyle(s.sc)) : p !== this.values.stroke && (p = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), n = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (a = (u = h[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
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
              h = l.substr(0, 4),
              u = l.substr(4);
            i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || a < i && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === u && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === u && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
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
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, e);
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
          for (var i, a, s, o, l, h, u, c = [
              [t[0], n[0]],
              [t[1], n[1]]
            ], p = 0; p < 2; ++p) a = 6 * t[p] - 12 * e[p] + 6 * r[p], i = -3 * t[p] + 9 * e[p] - 9 * r[p] + 3 * n[p], s = 3 * e[p] - 3 * t[p], a |= 0, s |= 0, 0 == (i |= 0) && 0 === a || (0 === i ? (o = -s / a) > 0 && o < 1 && c[p].push(this.calculateF(o, t, e, r, n, p)) : (l = a * a - 4 * s * i) >= 0 && ((h = (-a + bmSqrt(l)) / (2 * i)) > 0 && h < 1 && c[p].push(this.calculateF(h, t, e, r, n, p)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && c[p].push(this.calculateF(u, t, e, r, n, p))));
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
            } var l, h, u, c = t.l;
          i = c.length;
          var p, f = this.mHelper,
            d = "",
            m = 0;
          for (n = 0; n < i; n += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var v, y = this.globalData.fontManager.getCharData(t.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (v = y ? y.data : null, f.reset(), v && v.shapes && v.shapes.length && (p = v.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, p), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), v && v.shapes) {
                  document.body.appendChild(u);
                  var g = u.getBBox();
                  u.setAttribute("width", g.width + 2), u.setAttribute("height", g.height + 2), u.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2));
                  var b = u.style,
                    S = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)";
                  b.transform = S, b.webkitTransform = S, c[n].yOffset = g.y - 1
                } else u.setAttribute("width", 1), u.setAttribute("height", 1);
                h.appendChild(u)
              }
            } else if (l.textContent = c[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var x = l.style,
                P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              x.transform = P, x.webkitTransform = P
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
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
              h = this.textProperty.currentData.l;
            for (n = h.length, r = 0; r < n; r += 1) h[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var u = this.innerElem.getBBox();
              if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
                this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
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
                h = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var u = !this._prevMat.equals(this.mat);
            if ((u || this.pe._mdf) && this.comp.threeDElements) {
              var c, p, f;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (u) {
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
            h = 255;

          function u(t) {
            var e, r = t.length,
              n = this,
              a = 0,
              s = n.i = n.j = 0,
              o = n.S = [];
            for (r || (t = [r++]); a < i;) o[a] = a++;
            for (a = 0; a < i; a++) o[a] = o[s = h & s + t[a % r] + (e = o[a])], o[s] = e;
            n.g = function(t) {
              for (var e, r = 0, a = n.i, s = n.j, o = n.S; t--;) e = o[a = h & a + 1], r = r * i + o[h & (o[a] = o[s = h & s + e]) + (o[s] = e)];
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
            for (var r, n = t + "", i = 0; i < n.length;) e[h & i] = h & (r ^= 19 * e[h & i]) + n.charCodeAt(i++);
            return d(e)
          }

          function d(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + a] = function(h, m, v) {
            var y = [],
              g = f(p((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, d(t)] : null === h ? function() {
                try {
                  r;
                  var e = new Uint8Array(i);
                  return (n.crypto || n.msCrypto).getRandomValues(e), d(e)
                } catch (e) {
                  var a = n.navigator,
                    s = a && a.plugins;
                  return [+new Date, n, s, n.screen, d(t)]
                }
              }() : h, 3), y),
              b = new u(y),
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
            })(S, g, "global" in m ? m.global : this == e, m.state)
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
                var h = s - o;
                switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                  case n:
                    e = (i - a) / h + (i < a ? 6 : 0);
                    break;
                  case i:
                    e = (a - n) / h + 2;
                    break;
                  case a:
                    e = (n - i) / h + 4
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
                h = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) h[s] = n[s] + (i[s] - n[s]) * o;
              return h
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
              var o, l, h = [0, 0];
              for (i = 0; i < a; i += 1) o = e && e[i] ? e[i] : h, l = r && r[i] ? r[i] : h, s.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], o[0] + t[i][0], o[1] + t[i][1], i, !0);
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
                    h = createTypedArray("float32", i);
                  if (i > 1) {
                    for (n = 0; n < i; n += 1) h[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * l;
                    return h
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
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
                  return h
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
            return function(h) {
              var u;

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
                    return u;
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
              c.getMatrix = t, c.invertPoint = s, c.applyPoint = a, c.toWorld = r, c.toWorldVec = e, c.fromWorld = i, c.fromWorldVec = n, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
              var p = getDescriptor(u = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
                hasParent: {
                  get: function() {
                    return h.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return h.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(u, "rotation"),
                scale: getDescriptor(u, "scale"),
                position: getDescriptor(u, "position"),
                opacity: getDescriptor(u, "opacity"),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function() {
                    return u
                  }
                },
                active: {
                  get: function() {
                    return h.isInRange
                  }
                }
              }), c.startTime = h.data.st, c.index = h.data.ind, c.source = h.data.refId, c.height = 0 === h.data.ty ? h.data.h : 100, c.width = 0 === h.data.ty ? h.data.w : 100, c.inPoint = h.data.ip / h.comp.globalData.frameRate, c.outPoint = h.data.op / h.comp.globalData.frameRate, c._name = h.data.nm, c.registerMaskInterface = function(t) {
                c.mask = new MaskManagerInterface(t, h)
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
                  if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? h[n] : h[n]();
                  n += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, i),
                h = [],
                u = r.ef.length;
              for (o = 0; o < u; o += 1) 5 === r.ef[o].ty ? h.push(t(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : h.push(e(n.effectElements[o], r.ef[o].ty, a, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                get: function() {
                  return h[0]()
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
              for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], s[f], p)) : "fl" === t[f].ty ? d.push(r(t[f], s[f], p)) : "st" === t[f].ty ? d.push(i(t[f], s[f], p)) : "tm" === t[f].ty ? d.push(a(t[f], s[f], p)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], s[f], p)) : "sr" === t[f].ty ? d.push(l(t[f], s[f], p)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], s[f], p)) : "rc" === t[f].ty ? d.push(h(t[f], s[f], p)) : "rd" === t[f].ty ? d.push(u(t[f], s[f], p)) : "rp" === t[f].ty ? d.push(c(t[f], s[f], p)) : "gf" === t[f].ty ? d.push(n(t[f], s[f], p)) : d.push((t[f], s[f], function() {
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
              var n, i = propertyGroupFactory(h, r),
                a = propertyGroupFactory(l, i);

              function s(r) {
                Object.defineProperty(l, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (n = 0; n < o; n += 1) s(n), e.d.dataProps[n].p.setGroupProperty(a);

              function h(t) {
                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
              }
              return Object.defineProperties(h, {
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
              }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), e.w.setGroupProperty(PropertyInterface("Stroke Width", i)), h
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

            function h(t, e, r) {
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

            function u(t, e, r) {
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
              h = this.keyframes,
              u = h[h.length - 1].t;
            if (l <= u) return this.pv;
            if (r ? i = u - (n = e ? Math.abs(u - this.elem.comp.globalData.frameRate * e) : Math.max(0, u - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = u - (i = h[h.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - i) / n);
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - c[a]) * d + f[a];
                  return o
                }
                return (p - c) * d + f
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - u) / .001 * (m - v)
              }
            }
            return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var n, i, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              u = h[0].t;
            if (l >= u) return this.pv;
            if (r ? i = u + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - u)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = (i = h[e].t) - u), "pingpong" === t) {
              if (Math.floor((u - l) / n) % 2 == 0) return this.getValueAtTime(((u - l) % n + u) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime((n - (u - l) % n + u) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((u - l) / n) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (p[a] - c[a]) * d;
                  return o
                }
                return f - (p - c) * d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * (u - l) / .001;
                  return o
                }
                return m + (m - v) * (u - l) / .001
              }
            }
            return this.getValueAtTime((n - ((u - l) % n + u)) / this.comp.globalData.frameRate, 0)
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
                h = this.rx.getValueAtTime(t),
                u = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-u[2] * this.or.mult).rotateY(u[1] * this.or.mult).rotateX(u[0] * this.or.mult)
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
            var h = s(n, i, a, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === i.a ? i.k.length : 0, h.propertyIndex = i.ix;
            var u = 0;
            return 0 !== a && (u = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: u
            }, expressionHelpers.searchExpressions(n, i, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
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
              for (var n, i = this._segmentsLength, a = i.lengths, s = i.totalLength * t, o = 0, l = a.length, h = 0; o < l;) {
                if (h + a[o].addedLength > s) {
                  var u = o,
                    c = r.c && o === l - 1 ? 0 : o + 1,
                    p = (s - h) / a[o].addedLength;
                  n = bez.getPointInSegment(r.v[u], r.v[c], r.o[u], r.i[c], p, a[o]);
                  break
                }
                h += a[o].addedLength, o += 1
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
          }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var u = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, r, n, i) {
            var a = u(t, e, r, n, i);
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
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
          var u = createNS("feComposite");
          u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), t.appendChild(u);
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
                var h, u = l * (o - s),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  p = Math.floor(u / c);
                for (h = 0; h < p; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
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
          for (var a, s, o = 0, l = Math.min(t, e), h = Math.max(t, e), u = Array.call(null, {
              length: 256
            }), c = 0, p = i - n, f = e - t; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : n : a >= h ? f < 0 ? n : i : n + p * Math.pow((a - t) / f, 1 / r), u[c] = s, c += 1, o += 256 / 255;
          return u.join(" ")
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
              h = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    44392: t => {
      var e, r, n = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (r) {
          try {
            return e.call(null, t, 0)
          } catch (r) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
          e = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
          r = a
        }
      }();
      var o, l = [],
        h = !1,
        u = -1;

      function c() {
        h && o && (h = !1, o.length ? l = o.concat(l) : u = -1, l.length && p())
      }

      function p() {
        if (!h) {
          var t = s(c);
          h = !0;
          for (var e = l.length; e;) {
            for (o = l, l = []; ++u < e;) o && o[u].run();
            u = -1, e = l.length
          }
          o = null, h = !1,
            function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
              try {
                return r(t)
              } catch (e) {
                try {
                  return r.call(null, t)
                } catch (e) {
                  return r.call(this, t)
                }
              }
            }(t)
        }
      }

      function f(t, e) {
        this.fun = t, this.array = e
      }

      function d() {}
      n.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        l.push(new f(t, e)), 1 !== l.length || h || s(p)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(t) {
        return []
      }, n.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    54280: (t, e, r) => {
      "use strict";
      var n = r(75004);

      function i() {}

      function a() {}
      a.resetWarningCache = i, t.exports = function() {
        function t(t, e, r, i, a, s) {
          if (s !== n) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function e() {
          return t
        }
        t.isRequired = t;
        var r = {
          array: t,
          bigint: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: a,
          resetWarningCache: i
        };
        return r.PropTypes = r, r
      }
    },
    71424: (t, e, r) => {
      t.exports = r(54280)()
    },
    75004: t => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    44236: function(t, e, r) {
      class n {
        constructor() {
          this.data = r(82396), this.labelMap = {}, this.valueMap = {}, this.data.forEach((t => {
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
          return this.nativeData = r(78048), this.nativeData.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          })), this
        }
      }
      t.exports = () => {
        if (!(this instanceof n)) return new n
      }
    },
    12231: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => l
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const a = new Uint8Array(16);

      function s() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(a)
      }
      const o = [];
      for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
      const l = function(t, e, r) {
        if (n.randomUUID && !e && !t) return n.randomUUID();
        const i = (t = t || {}).random || (t.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = i[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]
        }(i)
      }
    },
    40684: (t, e, r) => {
      r(19808), t.exports = r(37208).Object.assign
    },
    41248: (t, e, r) => {
      r(47779);
      var n = r(37208).Object;
      t.exports = function(t, e) {
        return n.create(t, e)
      }
    },
    47952: (t, e, r) => {
      r(19652);
      var n = r(37208).Object;
      t.exports = function(t, e, r) {
        return n.defineProperty(t, e, r)
      }
    },
    37488: (t, e, r) => {
      r(24048), t.exports = r(37208).Object.getPrototypeOf
    },
    46760: (t, e, r) => {
      r(16200), t.exports = r(37208).Object.setPrototypeOf
    },
    90020: (t, e, r) => {
      r(37104), r(14788), r(71284), r(93696), t.exports = r(37208).Symbol
    },
    32784: (t, e, r) => {
      r(41852), r(63624), t.exports = r(33728).f("iterator")
    },
    18416: t => {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
      }
    },
    62016: t => {
      t.exports = function() {}
    },
    83060: (t, e, r) => {
      var n = r(93536);
      t.exports = function(t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
      }
    },
    43572: (t, e, r) => {
      var n = r(28828),
        i = r(49344),
        a = r(82752);
      t.exports = function(t) {
        return function(e, r, s) {
          var o, l = n(e),
            h = i(l.length),
            u = a(s, h);
          if (t && r != r) {
            for (; h > u;)
              if ((o = l[u++]) != o) return !0
          } else
            for (; h > u; u++)
              if ((t || u in l) && l[u] === r) return t || u || 0;
          return !t && -1
        }
      }
    },
    79683: t => {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1)
      }
    },
    37208: t => {
      var e = t.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = e)
    },
    76040: (t, e, r) => {
      var n = r(18416);
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
    69396: t => {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
      }
    },
    65168: (t, e, r) => {
      t.exports = !r(65032)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    76440: (t, e, r) => {
      var n = r(93536),
        i = r(56384).document,
        a = n(i) && n(i.createElement);
      t.exports = function(t) {
        return a ? i.createElement(t) : {}
      }
    },
    21608: t => {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    9684: (t, e, r) => {
      var n = r(37108),
        i = r(70716),
        a = r(9520);
      t.exports = function(t) {
        var e = n(t),
          r = i.f;
        if (r)
          for (var s, o = r(t), l = a.f, h = 0; o.length > h;) l.call(t, s = o[h++]) && e.push(s);
        return e
      }
    },
    96604: (t, e, r) => {
      var n = r(56384),
        i = r(37208),
        a = r(76040),
        s = r(11480),
        o = r(58868),
        l = "prototype",
        h = function(t, e, r) {
          var u, c, p, f = t & h.F,
            d = t & h.G,
            m = t & h.S,
            v = t & h.P,
            y = t & h.B,
            g = t & h.W,
            b = d ? i : i[e] || (i[e] = {}),
            S = b[l],
            x = d ? n : m ? n[e] : (n[e] || {})[l];
          for (u in d && (r = e), r)(c = !f && x && void 0 !== x[u]) && o(b, u) || (p = c ? x[u] : r[u], b[u] = d && "function" != typeof x[u] ? r[u] : y && c ? a(p, n) : g && x[u] == p ? function(t) {
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
          }(p) : v && "function" == typeof p ? a(Function.call, p) : p, v && ((b.virtual || (b.virtual = {}))[u] = p, t & h.R && S && !S[u] && s(S, u, p)))
        };
      h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, h.U = 64, h.R = 128, t.exports = h
    },
    65032: t => {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    56384: t => {
      var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = e)
    },
    58868: t => {
      var e = {}.hasOwnProperty;
      t.exports = function(t, r) {
        return e.call(t, r)
      }
    },
    11480: (t, e, r) => {
      var n = r(56008),
        i = r(15196);
      t.exports = r(65168) ? function(t, e, r) {
        return n.f(t, e, i(1, r))
      } : function(t, e, r) {
        return t[e] = r, t
      }
    },
    82176: (t, e, r) => {
      var n = r(56384).document;
      t.exports = n && n.documentElement
    },
    50160: (t, e, r) => {
      t.exports = !r(65168) && !r(65032)((function() {
        return 7 != Object.defineProperty(r(76440)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    45760: (t, e, r) => {
      var n = r(79683);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == n(t) ? t.split("") : Object(t)
      }
    },
    44244: (t, e, r) => {
      var n = r(79683);
      t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
      }
    },
    93536: t => {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    27e3: (t, e, r) => {
      "use strict";
      var n = r(75069),
        i = r(15196),
        a = r(76572),
        s = {};
      r(11480)(s, r(42516)("iterator"), (function() {
        return this
      })), t.exports = function(t, e, r) {
        t.prototype = n(s, {
          next: i(1, r)
        }), a(t, e + " Iterator")
      }
    },
    65708: (t, e, r) => {
      "use strict";
      var n = r(41380),
        i = r(96604),
        a = r(50496),
        s = r(11480),
        o = r(71148),
        l = r(27e3),
        h = r(76572),
        u = r(88872),
        c = r(42516)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = "keys",
        d = "values",
        m = function() {
          return this
        };
      t.exports = function(t, e, r, v, y, g, b) {
        l(r, e, v);
        var S, x, P, E = function(t) {
            if (!p && t in T) return T[t];
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
          C = e + " Iterator",
          M = y == d,
          w = !1,
          T = t.prototype,
          _ = T[c] || T["@@iterator"] || y && T[y],
          A = _ || E(y),
          k = y ? M ? E("entries") : A : void 0,
          D = "Array" == e && T.entries || _;
        if (D && (P = u(D.call(new t))) !== Object.prototype && P.next && (h(P, C, !0), n || "function" == typeof P[c] || s(P, c, m)), M && _ && _.name !== d && (w = !0, A = function() {
            return _.call(this)
          }), n && !b || !p && !w && T[c] || s(T, c, A), o[e] = A, o[C] = m, y)
          if (S = {
              values: M ? A : E(d),
              keys: g ? A : E(f),
              entries: k
            }, b)
            for (x in S) x in T || a(T, x, S[x]);
          else i(i.P + i.F * (p || w), e, S);
        return S
      }
    },
    9980: t => {
      t.exports = function(t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    },
    71148: t => {
      t.exports = {}
    },
    41380: t => {
      t.exports = !0
    },
    60528: (t, e, r) => {
      var n = r(63540)("meta"),
        i = r(93536),
        a = r(58868),
        s = r(56008).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        h = !r(65032)((function() {
          return l(Object.preventExtensions({}))
        })),
        u = function(t) {
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
              u(t)
            }
            return t[n].i
          },
          getWeak: function(t, e) {
            if (!a(t, n)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              u(t)
            }
            return t[n].w
          },
          onFreeze: function(t) {
            return h && c.NEED && l(t) && !a(t, n) && u(t), t
          }
        }
    },
    43492: (t, e, r) => {
      "use strict";
      var n = r(65168),
        i = r(37108),
        a = r(70716),
        s = r(9520),
        o = r(47380),
        l = r(45760),
        h = Object.assign;
      t.exports = !h || r(65032)((function() {
        var t = {},
          e = {},
          r = Symbol(),
          n = "abcdefghijklmnopqrst";
        return t[r] = 7, n.split("").forEach((function(t) {
          e[t] = t
        })), 7 != h({}, t)[r] || Object.keys(h({}, e)).join("") != n
      })) ? function(t, e) {
        for (var r = o(t), h = arguments.length, u = 1, c = a.f, p = s.f; h > u;)
          for (var f, d = l(arguments[u++]), m = c ? i(d).concat(c(d)) : i(d), v = m.length, y = 0; v > y;) f = m[y++], n && !p.call(d, f) || (r[f] = d[f]);
        return r
      } : h
    },
    75069: (t, e, r) => {
      var n = r(83060),
        i = r(23876),
        a = r(21608),
        s = r(7448)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        h = function() {
          var t, e = r(76440)("iframe"),
            n = a.length;
          for (e.style.display = "none", r(82176).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), h = t.F; n--;) delete h[l][a[n]];
          return h()
        };
      t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (o[l] = n(t), r = new o, o[l] = null, r[s] = t) : r = h(), void 0 === e ? r : i(r, e)
      }
    },
    56008: (t, e, r) => {
      var n = r(83060),
        i = r(50160),
        a = r(94800),
        s = Object.defineProperty;
      e.f = r(65168) ? Object.defineProperty : function(t, e, r) {
        if (n(t), e = a(e, !0), n(r), i) try {
          return s(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value), t
      }
    },
    23876: (t, e, r) => {
      var n = r(56008),
        i = r(83060),
        a = r(37108);
      t.exports = r(65168) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var r, s = a(e), o = s.length, l = 0; o > l;) n.f(t, r = s[l++], e[r]);
        return t
      }
    },
    34096: (t, e, r) => {
      var n = r(9520),
        i = r(15196),
        a = r(28828),
        s = r(94800),
        o = r(58868),
        l = r(50160),
        h = Object.getOwnPropertyDescriptor;
      e.f = r(65168) ? h : function(t, e) {
        if (t = a(t), e = s(e, !0), l) try {
          return h(t, e)
        } catch (t) {}
        if (o(t, e)) return i(!n.f.call(t, e), t[e])
      }
    },
    49920: (t, e, r) => {
      var n = r(28828),
        i = r(79584).f,
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
    79584: (t, e, r) => {
      var n = r(67988),
        i = r(21608).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, i)
      }
    },
    70716: (t, e) => {
      e.f = Object.getOwnPropertySymbols
    },
    88872: (t, e, r) => {
      var n = r(58868),
        i = r(47380),
        a = r(7448)("IE_PROTO"),
        s = Object.prototype;
      t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
      }
    },
    67988: (t, e, r) => {
      var n = r(58868),
        i = r(28828),
        a = r(43572)(!1),
        s = r(7448)("IE_PROTO");
      t.exports = function(t, e) {
        var r, o = i(t),
          l = 0,
          h = [];
        for (r in o) r != s && n(o, r) && h.push(r);
        for (; e.length > l;) n(o, r = e[l++]) && (~a(h, r) || h.push(r));
        return h
      }
    },
    37108: (t, e, r) => {
      var n = r(67988),
        i = r(21608);
      t.exports = Object.keys || function(t) {
        return n(t, i)
      }
    },
    9520: (t, e) => {
      e.f = {}.propertyIsEnumerable
    },
    91040: (t, e, r) => {
      var n = r(96604),
        i = r(37208),
        a = r(65032);
      t.exports = function(t, e) {
        var r = (i.Object || {})[t] || Object[t],
          s = {};
        s[t] = e(r), n(n.S + n.F * a((function() {
          r(1)
        })), "Object", s)
      }
    },
    15196: t => {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    50496: (t, e, r) => {
      t.exports = r(11480)
    },
    46935: (t, e, r) => {
      var n = r(93536),
        i = r(83060),
        a = function(t, e) {
          if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) {
          try {
            (n = r(76040)(Function.call, r(34096).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
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
    76572: (t, e, r) => {
      var n = r(56008).f,
        i = r(58868),
        a = r(42516)("toStringTag");
      t.exports = function(t, e, r) {
        t && !i(t = r ? t : t.prototype, a) && n(t, a, {
          configurable: !0,
          value: e
        })
      }
    },
    7448: (t, e, r) => {
      var n = r(13332)("keys"),
        i = r(63540);
      t.exports = function(t) {
        return n[t] || (n[t] = i(t))
      }
    },
    13332: (t, e, r) => {
      var n = r(37208),
        i = r(56384),
        a = "__core-js_shared__",
        s = i[a] || (i[a] = {});
      (t.exports = function(t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: n.version,
        mode: r(41380) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    66268: (t, e, r) => {
      var n = r(9592),
        i = r(69396);
      t.exports = function(t) {
        return function(e, r) {
          var a, s, o = String(i(e)),
            l = n(r),
            h = o.length;
          return l < 0 || l >= h ? t ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === h || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? o.charAt(l) : a : t ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    82752: (t, e, r) => {
      var n = r(9592),
        i = Math.max,
        a = Math.min;
      t.exports = function(t, e) {
        return (t = n(t)) < 0 ? i(t + e, 0) : a(t, e)
      }
    },
    9592: t => {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
      }
    },
    28828: (t, e, r) => {
      var n = r(45760),
        i = r(69396);
      t.exports = function(t) {
        return n(i(t))
      }
    },
    49344: (t, e, r) => {
      var n = r(9592),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
      }
    },
    47380: (t, e, r) => {
      var n = r(69396);
      t.exports = function(t) {
        return Object(n(t))
      }
    },
    94800: (t, e, r) => {
      var n = r(93536);
      t.exports = function(t, e) {
        if (!n(t)) return t;
        var r, i;
        if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t))) return i;
        if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    63540: t => {
      var e = 0,
        r = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
      }
    },
    66152: (t, e, r) => {
      var n = r(56384),
        i = r(37208),
        a = r(41380),
        s = r(33728),
        o = r(56008).f;
      t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = a ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || o(e, t, {
          value: s.f(t)
        })
      }
    },
    33728: (t, e, r) => {
      e.f = r(42516)
    },
    42516: (t, e, r) => {
      var n = r(13332)("wks"),
        i = r(63540),
        a = r(56384).Symbol,
        s = "function" == typeof a;
      (t.exports = function(t) {
        return n[t] || (n[t] = s && a[t] || (s ? a : i)("Symbol." + t))
      }).store = n
    },
    2084: (t, e, r) => {
      "use strict";
      var n = r(62016),
        i = r(9980),
        a = r(71148),
        s = r(28828);
      t.exports = r(65708)(Array, "Array", (function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
      }), (function() {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
      }), "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
    },
    19808: (t, e, r) => {
      var n = r(96604);
      n(n.S + n.F, "Object", {
        assign: r(43492)
      })
    },
    47779: (t, e, r) => {
      var n = r(96604);
      n(n.S, "Object", {
        create: r(75069)
      })
    },
    19652: (t, e, r) => {
      var n = r(96604);
      n(n.S + n.F * !r(65168), "Object", {
        defineProperty: r(56008).f
      })
    },
    24048: (t, e, r) => {
      var n = r(47380),
        i = r(88872);
      r(91040)("getPrototypeOf", (function() {
        return function(t) {
          return i(n(t))
        }
      }))
    },
    16200: (t, e, r) => {
      var n = r(96604);
      n(n.S, "Object", {
        setPrototypeOf: r(46935).set
      })
    },
    14788: () => {},
    41852: (t, e, r) => {
      "use strict";
      var n = r(66268)(!0);
      r(65708)(String, "String", (function(t) {
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
    37104: (t, e, r) => {
      "use strict";
      var n = r(56384),
        i = r(58868),
        a = r(65168),
        s = r(96604),
        o = r(50496),
        l = r(60528).KEY,
        h = r(65032),
        u = r(13332),
        c = r(76572),
        p = r(63540),
        f = r(42516),
        d = r(33728),
        m = r(66152),
        v = r(9684),
        y = r(44244),
        g = r(83060),
        b = r(93536),
        S = r(47380),
        x = r(28828),
        P = r(94800),
        E = r(15196),
        C = r(75069),
        M = r(49920),
        w = r(34096),
        T = r(70716),
        _ = r(56008),
        A = r(37108),
        k = w.f,
        D = _.f,
        I = M.f,
        F = n.Symbol,
        O = n.JSON,
        R = O && O.stringify,
        V = "prototype",
        L = f("_hidden"),
        B = f("toPrimitive"),
        N = {}.propertyIsEnumerable,
        z = u("symbol-registry"),
        G = u("symbols"),
        j = u("op-symbols"),
        H = Object[V],
        W = "function" == typeof F && !!T.f,
        q = n.QObject,
        U = !q || !q[V] || !q[V].findChild,
        Y = a && h((function() {
          return 7 != C(D({}, "a", {
            get: function() {
              return D(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(t, e, r) {
          var n = k(H, e);
          n && delete H[e], D(t, e, r), n && t !== H && D(H, e, n)
        } : D,
        $ = function(t) {
          var e = G[t] = C(F[V]);
          return e._k = t, e
        },
        X = W && "symbol" == typeof F.iterator ? function(t) {
          return "symbol" == typeof t
        } : function(t) {
          return t instanceof F
        },
        K = function(t, e, r) {
          return t === H && K(j, e, r), g(t), e = P(e, !0), g(r), i(G, e) ? (r.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), r = C(r, {
            enumerable: E(0, !1)
          })) : (i(t, L) || D(t, L, E(1, {})), t[L][e] = !0), Y(t, e, r)) : D(t, e, r)
        },
        Z = function(t, e) {
          g(t);
          for (var r, n = v(e = x(e)), i = 0, a = n.length; a > i;) K(t, r = n[i++], e[r]);
          return t
        },
        J = function(t) {
          var e = N.call(this, t = P(t, !0));
          return !(this === H && i(G, t) && !i(j, t)) && (!(e || !i(this, t) || !i(G, t) || i(this, L) && this[L][t]) || e)
        },
        Q = function(t, e) {
          if (t = x(t), e = P(e, !0), t !== H || !i(G, e) || i(j, e)) {
            var r = k(t, e);
            return !r || !i(G, e) || i(t, L) && t[L][e] || (r.enumerable = !0), r
          }
        },
        tt = function(t) {
          for (var e, r = I(x(t)), n = [], a = 0; r.length > a;) i(G, e = r[a++]) || e == L || e == l || n.push(e);
          return n
        },
        et = function(t) {
          for (var e, r = t === H, n = I(r ? j : x(t)), a = [], s = 0; n.length > s;) !i(G, e = n[s++]) || r && !i(H, e) || a.push(G[e]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
          e = function(r) {
            this === H && e.call(j, r), i(this, L) && i(this[L], t) && (this[L][t] = !1), Y(this, t, E(1, r))
          };
        return a && U && Y(H, t, {
          configurable: !0,
          set: e
        }), $(t)
      })[V], "toString", (function() {
        return this._k
      })), w.f = Q, _.f = K, r(79584).f = M.f = tt, r(9520).f = J, T.f = et, a && !r(41380) && o(H, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return $(f(t))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var rt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; rt.length > nt;) f(rt[nt++]);
      for (var it = A(f.store), at = 0; it.length > at;) m(it[at++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(t) {
          return i(z, t += "") ? z[t] : z[t] = F(t)
        },
        keyFor: function(t) {
          if (!X(t)) throw TypeError(t + " is not a symbol!");
          for (var e in z)
            if (z[e] === t) return e
        },
        useSetter: function() {
          U = !0
        },
        useSimple: function() {
          U = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(t, e) {
          return void 0 === e ? C(t) : Z(C(t), e)
        },
        defineProperty: K,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
      });
      var st = h((function() {
        T.f(1)
      }));
      s(s.S + s.F * st, "Object", {
        getOwnPropertySymbols: function(t) {
          return T.f(S(t))
        }
      }), O && s(s.S + s.F * (!W || h((function() {
        var t = F();
        return "[null]" != R([t]) || "{}" != R({
          a: t
        }) || "{}" != R(Object(t))
      }))), "JSON", {
        stringify: function(t) {
          for (var e, r, n = [t], i = 1; arguments.length > i;) n.push(arguments[i++]);
          if (r = e = n[1], (b(e) || void 0 !== t) && !X(t)) return y(e) || (e = function(t, e) {
            if ("function" == typeof r && (e = r.call(this, t, e)), !X(e)) return e
          }), n[1] = e, R.apply(O, n)
        }
      }), F[V][B] || r(11480)(F[V], B, F[V].valueOf), c(F, "Symbol"), c(Math, "Math", !0), c(n.JSON, "JSON", !0)
    },
    71284: (t, e, r) => {
      r(66152)("asyncIterator")
    },
    93696: (t, e, r) => {
      r(66152)("observable")
    },
    63624: (t, e, r) => {
      r(2084);
      for (var n = r(56384), i = r(11480), a = r(71148), s = r(42516)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var h = o[l],
          u = n[h],
          c = u && u.prototype;
        c && !c[s] && i(c, s, h), a[h] = a.Array
      }
    },
    78048: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    82396: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);