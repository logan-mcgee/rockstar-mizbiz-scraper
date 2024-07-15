! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "26108f52-6b61-4a83-828f-fd90ea856427", t._sentryDebugIdIdentifier = "sentry-dbid-26108f52-6b61-4a83-828f-fd90ea856427")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [624], {
    45164: (t, e, r) => {
      "use strict";
      var n = p(r(67032)),
        i = p(r(4616)),
        a = p(r(65908)),
        s = p(r(272)),
        o = p(r(66516)),
        l = p(r(92392)),
        u = p(r(51664)),
        h = p(r(71424)),
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
      e.c = f, f.propTypes = {
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
            x = t.allowPinchZoom,
            S = t.as,
            _ = void 0 === S ? "div" : S,
            P = t.gapMode,
            E = (0, n.sX)(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = g,
            w = (0, o.m)([r, e]),
            M = (0, n.C3)((0, n.C3)({}, E), s);
          return i.createElement(i.Fragment, null, m && i.createElement(C, {
            sideCar: l,
            removeScrollBar: d,
            shards: v,
            noIsolation: y,
            inert: b,
            setCallbacks: h,
            allowPinchZoom: !!x,
            lockRef: r,
            gapMode: P
          }), c ? i.cloneElement(i.Children.only(p), (0, n.C3)((0, n.C3)({}, M), {
            ref: w
          })) : i.createElement(_, (0, n.C3)({}, M, {
            className: f,
            ref: w
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
        var x = Object.defineProperty({}, "passive", {
          get: function() {
            return b = !0, !0
          }
        });
        window.addEventListener("test", x, x), window.removeEventListener("test", x, x)
      } catch (t) {
        b = !1
      }
      var S = !!b && {
          passive: !1
        },
        _ = function(t, e) {
          var r = window.getComputedStyle(t);
          return "hidden" !== r[e] && !(r.overflowY === r.overflowX && ! function(t) {
            return "TEXTAREA" === t.tagName
          }(t) && "visible" === r[e])
        },
        P = function(t, e) {
          var r = e.ownerDocument,
            n = e;
          do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), E(t, n)) {
              var i = C(t, n);
              if (i[1] > i[2]) return !0
            }
            n = n.parentNode
          } while (n && n !== r.body);
          return !1
        },
        E = function(t, e) {
          return "v" === t ? function(t) {
            return _(t, "overflowY")
          }(e) : function(t) {
            return _(t, "overflowX")
          }(e)
        },
        C = function(t, e) {
          return "v" === t ? [(r = e).scrollTop, r.scrollHeight, r.clientHeight] : function(t) {
            return [t.scrollLeft, t.scrollWidth, t.clientWidth]
          }(e);
          var r
        },
        w = function(t) {
          return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
        },
        M = function(t) {
          return [t.deltaX, t.deltaY]
        },
        T = function(t) {
          return t && "current" in t ? t.current : t
        },
        A = function(t) {
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
            var e = (0, n.Mt)([t.lockRef.current], (t.shards || []).map(T), !0).filter(Boolean);
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
            var n, i = w(t),
              s = r.current,
              o = "deltaX" in t ? t.deltaX : s[0] - i[0],
              u = "deltaY" in t ? t.deltaY : s[1] - i[1],
              h = t.target,
              c = Math.abs(o) > Math.abs(u) ? "h" : "v";
            if ("touches" in t && "h" === c && "range" === h.type) return !1;
            var p = P(c, h);
            if (!p) return !0;
            if (p ? n = c : (n = "v" === c ? "h" : "v", p = P(c, h)), !p) return !1;
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
                var f = C(t, o),
                  d = f[0],
                  m = f[1] - f[2] - a * d;
                (d || m) && E(t, o) && (c += m, p += d), o = o instanceof ShadowRoot ? o.host : o.parentNode
              } while (!l && o !== document.body || l && (e.contains(o) || e === o));
              return (h && (i && Math.abs(c) < 1 || !i && s > c) || !h && (i && Math.abs(p) < 1 || !i && -s > p)) && (u = !0), u
            }(f, e, t, "h" === f ? o : u, !0)
          }), []),
          h = i.useCallback((function(t) {
            var r = t;
            if (I.length && I[I.length - 1] === o) {
              var n = "deltaY" in r ? M(r) : w(r),
                i = e.current.filter((function(t) {
                  return t.name === r.type && (t.target === r.target || r.target === t.shadowParent) && (e = t.delta, i = n, e[0] === i[0] && e[1] === i[1]);
                  var e, i
                }))[0];
              if (i && i.should) r.cancelable && r.preventDefault();
              else if (!i) {
                var a = (l.current.shards || []).map(T).filter(Boolean).filter((function(t) {
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
            r.current = w(t), a.current = void 0
          }), []),
          d = i.useCallback((function(e) {
            c(e.type, M(e), e.target, u(e, t.lockRef.current))
          }), []),
          m = i.useCallback((function(e) {
            c(e.type, w(e), e.target, u(e, t.lockRef.current))
          }), []);
        i.useEffect((function() {
          return I.push(o), t.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", h, S), document.addEventListener("touchmove", h, S), document.addEventListener("touchstart", p, S),
            function() {
              I = I.filter((function(t) {
                return t !== o
              })), document.removeEventListener("wheel", h, S), document.removeEventListener("touchmove", h, S), document.removeEventListener("touchstart", p, S)
            }
        }), []);
        var v = t.removeScrollBar,
          g = t.inert;
        return i.createElement(i.Fragment, null, g ? i.createElement(o, {
          styles: A(s)
        }) : null, v ? i.createElement(y, {
          gapMode: t.gapMode
        }) : null)
      })), c);
      var O = i.forwardRef((function(t, e) {
        return i.createElement(h, (0, n.C3)({}, t, {
          ref: e,
          sideCar: F
        }))
      }));
      O.classNames = h.classNames;
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
          x = e.originTotalDistY / g,
          S = e.originTotalDistX / b;
        this.top = e.top, this.bottom = e.bottom, u < 0 && (this.top = this.top + u * x), h > 0 && (this.bottom = this.bottom + h * x), this.left = e.left, this.right = e.right, f < 0 && (this.left = this.left + f * S), d > 0 && (this.right = this.right + d * S)
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
          x = (0, n.testForPassiveScroll)();

        function S(t) {
          t.addEventListener("scroll", P, !!x && {
            passive: !0
          }), window.addEventListener("resize", E, !1)
        }

        function _(t) {
          t.removeEventListener("scroll", P, !!x && {
            passive: !0
          }), window.removeEventListener("resize", E, !1)
        }

        function P() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          g.setScroll(t, e), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(C))
        }

        function E() {
          M(), C({
            updateCache: !0
          })
        }

        function C() {
          var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(e) {
            w(e), t && e.setCachedAttributes(y, g)
          })), b = !1
        }

        function w(t) {
          t.props.disabled || t.updatePosition(y, g)
        }

        function M() {
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
        S(d), M(), this.getElements = function() {
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
          g.setScroll(t, e), M(), C({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(t) {
          _(d), d = t, f = !!t, y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: t
          }), M(), S(d), C({
            updateCache: !0
          })
        }, this.destroy = function() {
          _(d), p && p.forEach((function(t) {
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
          var e = u();
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
        a = h(r(71424)),
        s = h(r(92752)),
        o = h(r(48708)),
        l = r(57892),
        u = h(r(86569));

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
          u = l.value,
          h = l.unit;
        t.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(u).concat(h, ", 0)")
      }, e.resetStyles = function(t) {
        t.elInner.style.transform = ""
      };
      var n = r(7484)
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
      var n = r(89932)
    },
    7484: (t, e, r) => {
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
      var n = u(r(92752)),
        i = r(31288),
        a = r(29837),
        s = r(7484),
        o = r(59352),
        l = u(r(26516));

      function u(t) {
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
        cp: () => un
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
              u = !1;
            try {
              if (a = (r = r.call(t)).next, 0 === e) {
                if (Object(r) !== r) return;
                l = !1
              } else
                for (; !(l = (n = a.call(r)).done) && (o.push(n.value), o.length !== e); l = !0);
            } catch (t) {
              u = !0, i = t
            } finally {
              try {
                if (!l && null != r.return && (s = r.return(), Object(s) !== s)) return
              } finally {
                if (u) throw i
              }
            }
            return o
          }
        }(t, e) || o(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var u = r(31632);

      function h(t, e) {
        if (null == t) return {};
        var r, n, i = (0, u.c)(t, e);
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

      function g(t) {
        return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, g(t)
      }
      var y = r(28792);

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
          var r, n = g(t);
          if (e) {
            var i = g(this).constructor;
            r = Reflect.construct(n, arguments, i)
          } else r = n.apply(this, arguments);
          return function(t, e) {
            if (e && ("object" === (0, y.c)(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t)
          }(this, r)
        }
      }

      function x(t) {
        return function(t) {
          if (Array.isArray(t)) return s(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || o(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var S = function() {
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
        _ = Math.abs,
        P = String.fromCharCode,
        E = Object.assign;

      function C(t) {
        return t.trim()
      }

      function w(t, e, r) {
        return t.replace(e, r)
      }

      function M(t, e) {
        return t.indexOf(e)
      }

      function T(t, e) {
        return 0 | t.charCodeAt(e)
      }

      function A(t, e, r) {
        return t.slice(e, r)
      }

      function k(t) {
        return t.length
      }

      function I(t) {
        return t.length
      }

      function D(t, e) {
        return e.push(t), t
      }
      var F = 1,
        O = 1,
        R = 0,
        V = 0,
        L = 0,
        B = "";

      function z(t, e, r, n, i, a, s) {
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

      function N(t, e) {
        return E(z("", null, null, "", null, null, 0), t, {
          length: -t.length
        }, e)
      }

      function j() {
        return L = V > 0 ? T(B, --V) : 0, O--, 10 === L && (O = 1, F--), L
      }

      function G() {
        return L = V < R ? T(B, V++) : 0, O++, 10 === L && (O = 1, F++), L
      }

      function H() {
        return T(B, V)
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

      function $(t) {
        return F = O = 1, R = k(B = t), V = 0, []
      }

      function Y(t) {
        return B = "", t
      }

      function K(t) {
        return C(q(V - 1, J(91 === t ? t + 2 : 40 === t ? t + 1 : t)))
      }

      function X(t) {
        for (;
          (L = H()) && L < 33;) G();
        return U(t) > 2 || U(L) > 3 ? "" : " "
      }

      function Z(t, e) {
        for (; --e && G() && !(L < 48 || L > 102 || L > 57 && L < 65 || L > 70 && L < 97););
        return q(t, W() + (e < 6 && 32 == H() && 32 == G()))
      }

      function J(t) {
        for (; G();) switch (L) {
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
            G()
        }
        return V
      }

      function Q(t, e) {
        for (; G() && t + L !== 57 && (t + L !== 84 || 47 !== H()););
        return "/*" + q(e, V - 1) + "*" + P(47 === t ? t : G())
      }

      function tt(t) {
        for (; !U(H());) G();
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
        for (var r = "", n = I(t), i = 0; i < n; i++) r += e(t[i], i, t, e) || "";
        return r
      }

      function ut(t, e, r, n) {
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

      function ht(t) {
        return Y(ct("", null, null, null, [""], t = $(t), 0, [0], t))
      }

      function ct(t, e, r, n, i, a, s, o, l) {
        for (var u = 0, h = 0, c = s, p = 0, f = 0, d = 0, m = 1, v = 1, g = 1, y = 0, b = "", x = i, S = a, _ = n, E = b; v;) switch (d = y, y = G()) {
          case 40:
            if (108 != d && 58 == T(E, c - 1)) {
              -1 != M(E += w(K(y), "&", "&\f"), "&\f") && (g = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            E += K(y);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            E += X(d);
            break;
          case 92:
            E += Z(W() - 1, 7);
            continue;
          case 47:
            switch (H()) {
              case 42:
              case 47:
                D(ft(Q(G(), W()), e, r), l);
                break;
              default:
                E += "/"
            }
            break;
          case 123 * m:
            o[u++] = k(E) * g;
          case 125 * m:
          case 59:
          case 0:
            switch (y) {
              case 0:
              case 125:
                v = 0;
              case 59 + h:
                -1 == g && (E = w(E, /\f/g, "")), f > 0 && k(E) - c && D(f > 32 ? dt(E + ";", n, r, c - 1) : dt(w(E, " ", "") + ";", n, r, c - 2), l);
                break;
              case 59:
                E += ";";
              default:
                if (D(_ = pt(E, e, r, u, h, i, o, b, x = [], S = [], c), a), 123 === y)
                  if (0 === h) ct(E, e, _, _, x, a, c, o, S);
                  else switch (99 === p && 110 === T(E, 3) ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ct(t, _, _, n && D(pt(t, _, _, 0, 0, i, o, b, i, x = [], c), S), i, S, c, o, n ? x : S);
                      break;
                    default:
                      ct(E, _, _, _, [""], S, 0, o, S)
                  }
            }
            u = h = f = 0, m = g = 1, b = E = "", c = s;
            break;
          case 58:
            c = 1 + k(E), f = d;
          default:
            if (m < 1)
              if (123 == y) --m;
              else if (125 == y && 0 == m++ && 125 == j()) continue;
            switch (E += P(y), y * m) {
              case 38:
                g = h > 0 ? 1 : (E += "\f", -1);
                break;
              case 44:
                o[u++] = (k(E) - 1) * g, g = 1;
                break;
              case 64:
                45 === H() && (E += K(G())), p = H(), h = c = k(b = E += tt(W())), y++;
                break;
              case 45:
                45 === d && 2 == k(E) && (m = 0)
            }
        }
        return a
      }

      function pt(t, e, r, n, i, a, s, o, l, u, h) {
        for (var c = i - 1, p = 0 === i ? a : [""], f = I(p), d = 0, m = 0, v = 0; d < n; ++d)
          for (var g = 0, y = A(t, c + 1, c = _(m = s[d])), b = t; g < f; ++g)(b = C(m > 0 ? p[g] + " " + y : w(y, /&\f/g, p[g]))) && (l[v++] = b);
        return z(t, e, r, 0 === i ? at : o, l, u, h)
      }

      function ft(t, e, r) {
        return z(t, e, r, it, P(L), A(t, 2, -2), 0)
      }

      function dt(t, e, r, n) {
        return z(t, e, r, st, A(t, 0, n), A(t, n + 1, -1), n)
      }
      var mt = function(t, e, r) {
          for (var n = 0, i = 0; n = i, i = H(), 38 === n && 12 === i && (e[r] = 1), !U(i);) G();
          return q(t, V)
        },
        vt = new WeakMap,
        gt = function(t) {
          if ("rule" === t.type && t.parent && !(t.length < 1)) {
            for (var e = t.value, r = t.parent, n = t.column === r.column && t.line === r.line;
              "rule" !== r.type;)
              if (!(r = r.parent)) return;
            if ((1 !== t.props.length || 58 === e.charCodeAt(0) || vt.get(r)) && !n) {
              vt.set(t, !0);
              for (var i = [], a = function(t, e) {
                  return Y(function(t, e) {
                    var r = -1,
                      n = 44;
                    do {
                      switch (U(n)) {
                        case 0:
                          38 === n && 12 === H() && (e[r] = 1), t[r] += mt(V - 1, e, r);
                          break;
                        case 2:
                          t[r] += K(n);
                          break;
                        case 4:
                          if (44 === n) {
                            t[++r] = 58 === H() ? "&\f" : "", e[r] = t[r].length;
                            break
                          }
                        default:
                          t[r] += P(n)
                      }
                    } while (n = G());
                    return t
                  }($(t), e))
                }(e, i), s = r.props, o = 0, l = 0; o < a.length; o++)
                for (var u = 0; u < s.length; u++, l++) t.props[l] = i[o] ? a[o].replace(/&\f/g, s[u]) : s[u] + " " + a[o]
            }
          }
        },
        yt = function(t) {
          if ("decl" === t.type) {
            var e = t.value;
            108 === e.charCodeAt(0) && 98 === e.charCodeAt(2) && (t.return = "", t.value = "")
          }
        };

      function bt(t, e) {
        switch (function(t, e) {
            return 45 ^ T(t, 0) ? (((e << 2 ^ T(t, 0)) << 2 ^ T(t, 1)) << 2 ^ T(t, 2)) << 2 ^ T(t, 3) : 0
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
            if (k(t) - 1 - e > 6) switch (T(t, e + 1)) {
              case 109:
                if (45 !== T(t, e + 4)) break;
              case 102:
                return w(t, /(.+:)(.+)-([^]+)/, "$1" + nt + "$2-$3$1" + rt + (108 == T(t, e + 3) ? "$3" : "$2-$3")) + t;
              case 115:
                return ~M(t, "stretch") ? bt(w(t, "stretch", "fill-available"), e) + t : t
            }
            break;
          case 4949:
            if (115 !== T(t, e + 1)) break;
          case 6444:
            switch (T(t, k(t) - 3 - (~M(t, "!important") && 10))) {
              case 107:
                return w(t, ":", ":" + nt) + t;
              case 101:
                return w(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + nt + (45 === T(t, 14) ? "inline-" : "") + "box$3$1" + nt + "$2$3$1" + et + "$2box$3") + t
            }
            break;
          case 5936:
            switch (T(t, e + 11)) {
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
      var xt = [function(t, e, r, n) {
          if (t.length > -1 && !t.return) switch (t.type) {
            case st:
              t.return = bt(t.value, t.length);
              break;
            case ot:
              return lt([N(t, {
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
                    return lt([N(t, {
                      props: [w(e, /:(read-\w+)/, ":-moz-$1")]
                    })], n);
                  case "::placeholder":
                    return lt([N(t, {
                      props: [w(e, /:(plac\w+)/, ":" + nt + "input-$1")]
                    }), N(t, {
                      props: [w(e, /:(plac\w+)/, ":-moz-$1")]
                    }), N(t, {
                      props: [w(e, /:(plac\w+)/, et + "input-$1")]
                    })], n)
                }
                return ""
              }))
          }
        }],
        St = function(t) {
          var e = t.key;
          if ("css" === e) {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, (function(t) {
              -1 !== t.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(t), t.setAttribute("data-s", ""))
            }))
          }
          var n, i, a = t.stylisPlugins || xt,
            s = {},
            o = [];
          n = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + e + ' "]'), (function(t) {
            for (var e = t.getAttribute("data-emotion").split(" "), r = 1; r < e.length; r++) s[e[r]] = !0;
            o.push(t)
          }));
          var l, u, h, c, p = [ut, (c = function(t) {
              l.insert(t)
            }, function(t) {
              t.root || (t = t.return) && c(t)
            })],
            f = (u = [gt, yt].concat(a, p), h = I(u), function(t, e, r, n) {
              for (var i = "", a = 0; a < h; a++) i += u[a](t, e, r, n) || "";
              return i
            });
          i = function(t, e, r, n) {
            l = r, lt(ht(t ? t + "{" + e.styles + "}" : e.styles), f), n && (d.inserted[e.name] = !0)
          };
          var d = {
            key: e,
            sheet: new S({
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
        _t = function(t, e, r) {
          var n = t.key + "-" + e.name;
          !1 === r && void 0 === t.registered[n] && (t.registered[n] = e.styles)
        },
        Pt = {
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

      function Et(t) {
        var e = Object.create(null);
        return function(r) {
          return void 0 === e[r] && (e[r] = t(r)), e[r]
        }
      }
      var Ct = /[A-Z]|^ms/g,
        wt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Mt = function(t) {
          return 45 === t.charCodeAt(1)
        },
        Tt = function(t) {
          return null != t && "boolean" != typeof t
        },
        At = Et((function(t) {
          return Mt(t) ? t : t.replace(Ct, "-$&").toLowerCase()
        })),
        kt = function(t, e) {
          switch (t) {
            case "animation":
            case "animationName":
              if ("string" == typeof e) return e.replace(wt, (function(t, e, r) {
                return Dt = {
                  name: e,
                  styles: r,
                  next: Dt
                }, e
              }))
          }
          return 1 === Pt[t] || Mt(t) || "number" != typeof e || 0 === e ? e : e + "px"
        };

      function It(t, e, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim) return Dt = {
              name: r.name,
              styles: r.styles,
              next: Dt
            }, r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n;) Dt = {
                  name: n.name,
                  styles: n.styles,
                  next: Dt
                }, n = n.next;
              return r.styles + ";"
            }
            return function(t, e, r) {
              var n = "";
              if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) n += It(t, e, r[i]) + ";";
              else
                for (var a in r) {
                  var s = r[a];
                  if ("object" != typeof s) null != e && void 0 !== e[s] ? n += a + "{" + e[s] + "}" : Tt(s) && (n += At(a) + ":" + kt(a, s) + ";");
                  else if (!Array.isArray(s) || "string" != typeof s[0] || null != e && void 0 !== e[s[0]]) {
                    var o = It(t, e, s);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        n += At(a) + ":" + o + ";";
                        break;
                      default:
                        n += a + "{" + o + "}"
                    }
                  } else
                    for (var l = 0; l < s.length; l++) Tt(s[l]) && (n += At(a) + ":" + kt(a, s[l]) + ";")
                }
              return n
            }(t, e, r);
          case "function":
            if (void 0 !== t) {
              var i = Dt,
                a = r(t);
              return Dt = i, It(t, e, a)
            }
        }
        if (null == e) return r;
        var s = e[r];
        return void 0 !== s ? s : r
      }
      var Dt, Ft = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Ot = function(t, e, r) {
          if (1 === t.length && "object" == typeof t[0] && null !== t[0] && void 0 !== t[0].styles) return t[0];
          var n = !0,
            i = "";
          Dt = void 0;
          var a = t[0];
          null == a || void 0 === a.raw ? (n = !1, i += It(r, e, a)) : i += a[0];
          for (var s = 1; s < t.length; s++) i += It(r, e, t[s]), n && (i += a[s]);
          Ft.lastIndex = 0;
          for (var o, l = ""; null !== (o = Ft.exec(i));) l += "-" + o[1];
          var u = function(t) {
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
            name: u,
            styles: i,
            next: Dt
          }
        },
        Rt = !!c.useInsertionEffect && c.useInsertionEffect,
        Vt = Rt || function(t) {
          return t()
        },
        Lt = (Rt || c.useLayoutEffect, {}.hasOwnProperty),
        Bt = c.createContext("undefined" != typeof HTMLElement ? St({
          key: "css"
        }) : null);
      Bt.Provider;
      var zt = function(t) {
          return (0, c.forwardRef)((function(e, r) {
            var n = (0, c.useContext)(Bt);
            return t(e, n, r)
          }))
        },
        Nt = c.createContext({}),
        jt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        Gt = function(t) {
          var e = t.cache,
            r = t.serialized,
            n = t.isStringTag;
          return _t(e, r, n), Vt((function() {
            return function(t, e, r) {
              _t(t, e, r);
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
        Ht = zt((function(t, e, r) {
          var n = t.css;
          "string" == typeof n && void 0 !== e.registered[n] && (n = e.registered[n]);
          var i = t[jt],
            a = [n],
            s = "";
          "string" == typeof t.className ? s = function(t, e, r) {
            var n = "";
            return r.split(" ").forEach((function(r) {
              void 0 !== t[r] ? e.push(t[r] + ";") : n += r + " "
            })), n
          }(e.registered, a, t.className) : null != t.className && (s = t.className + " ");
          var o = Ot(a, void 0, c.useContext(Nt));
          s += e.key + "-" + o.name;
          var l = {};
          for (var u in t) Lt.call(t, u) && "css" !== u && u !== jt && (l[u] = t[u]);
          return l.ref = r, l.className = s, c.createElement(c.Fragment, null, c.createElement(Gt, {
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
            return r[jt] = t, r
          }(t, e);
          for (var a = 2; a < n; a++) i[a] = r[a];
          return c.createElement.apply(null, i)
        });

      function Ut() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return Ot(e)
      }
      var $t = r(77364);
      const Yt = Math.min,
        Kt = Math.max,
        Xt = Math.round,
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

      function ue(t, e, r) {
        var n;
        void 0 === e && (e = []), void 0 === r && (r = !0);
        const i = le(t),
          a = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          s = te(i);
        return a ? e.concat(s, s.visualViewport || [], se(i) ? i : [], s.frameElement && r ? ue(s.frameElement) : []) : e.concat(i, ue(i, [], r))
      }

      function he(t) {
        return ne(t) ? t : t.contextElement
      }

      function ce(t) {
        const e = he(t);
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
              o = Xt(r) !== a || Xt(n) !== s;
            return o && (r = a, n = s), {
              width: r,
              height: n,
              $: o
            }
          }(e);
        let s = (a ? Xt(r.width) : r.width) / n,
          o = (a ? Xt(r.height) : r.height) / i;
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
          a = he(t);
        let s = Jt(1);
        e && (n ? ne(n) && (s = ce(n)) : s = ce(t));
        const o = function(t, e, r) {
          return void 0 === e && (e = !1), !(!r || e && r !== te(t)) && e
        }(a, r, n) ? fe(a) : Jt(0);
        let l = (i.left + o.x) / s.x,
          u = (i.top + o.y) / s.y,
          h = i.width / s.x,
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
            l *= t.x, u *= t.y, h *= t.x, c *= t.y, l += i, u += a, r = te(r).frameElement
          }
        }
        return p = {
          width: h,
          height: c,
          x: l,
          y: u
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
        ge = function() {};

      function ye(t, e) {
        return e ? "-" === e[0] ? t + e : t + "__" + e : t
      }

      function be(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        var a = [].concat(n);
        if (e && t)
          for (var s in e) e.hasOwnProperty(s) && e[s] && a.push("".concat(ye(t, s)));
        return a.filter((function(t) {
          return t
        })).map((function(t) {
          return String(t).trim()
        })).join(" ")
      }
      var xe = function(t) {
          return e = t, Array.isArray(e) ? t.filter(Boolean) : "object" === (0, y.c)(t) && null !== t ? [t] : [];
          var e
        },
        Se = function(t) {
          return t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme, a({}, h(t, ve))
        },
        _e = function(t, e, r) {
          var n = t.cx,
            i = t.getStyles,
            a = t.getClassNames,
            s = t.className;
          return {
            css: i(e, t),
            className: n(null != r ? r : {}, a(e, t), s)
          }
        };

      function Pe(t) {
        return [document.documentElement, document.body, window].indexOf(t) > -1
      }

      function Ee(t) {
        return Pe(t) ? window.pageYOffset : t.scrollTop
      }

      function Ce(t, e) {
        Pe(t) ? window.scrollTo(0, e) : t.scrollTop = e
      }

      function we(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ge,
          i = Ee(t),
          a = e - i,
          s = 0;
        ! function e() {
          var o, l = a * ((o = (o = s += 10) / r - 1) * o * o + 1) + i;
          Ce(t, l), s < r ? window.requestAnimationFrame(e) : n(t)
        }()
      }

      function Me(t, e) {
        var r = t.getBoundingClientRect(),
          n = e.getBoundingClientRect(),
          i = e.offsetHeight / 3;
        n.bottom + i > r.bottom ? Ce(t, Math.min(e.offsetTop + e.clientHeight - t.offsetHeight + i, t.scrollHeight)) : n.top - i < r.top && Ce(t, Math.max(e.offsetTop - i, 0))
      }

      function Te() {
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
        Ie = "undefined" != typeof window ? window : {};
      Ie.addEventListener && Ie.removeEventListener && (Ie.addEventListener("p", ge, ke), Ie.removeEventListener("p", ge, !1));
      var De = Ae;

      function Fe(t) {
        return null != t
      }

      function Oe(t, e, r) {
        return t ? e : r
      }
      var Re = ["children", "innerProps"],
        Ve = ["children", "innerProps"];
      var Le, Be, ze, Ne = function(t) {
          return "auto" === t ? "bottom" : t
        },
        je = (0, c.createContext)(null),
        Ge = function(t) {
          var e = t.children,
            r = t.minMenuHeight,
            n = t.maxMenuHeight,
            i = t.menuPlacement,
            s = t.menuPosition,
            o = t.menuShouldScrollIntoView,
            u = t.theme,
            h = ((0, c.useContext)(je) || {}).setPortalPlacement,
            p = (0, c.useRef)(null),
            f = l((0, c.useState)(n), 2),
            d = f[0],
            m = f[1],
            v = l((0, c.useState)(null), 2),
            g = v[0],
            y = v[1],
            b = u.spacing.controlHeight;
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
                    u = {
                      placement: "bottom",
                      maxHeight: e
                    };
                  if (!r || !r.offsetParent) return u;
                  var h, c = l.getBoundingClientRect().height,
                    p = r.getBoundingClientRect(),
                    f = p.bottom,
                    d = p.height,
                    m = p.top,
                    v = r.offsetParent.getBoundingClientRect().top,
                    g = s || Pe(h = l) ? window.innerHeight : h.clientHeight,
                    y = Ee(l),
                    b = parseInt(getComputedStyle(r).marginBottom, 10),
                    x = parseInt(getComputedStyle(r).marginTop, 10),
                    S = v - x,
                    _ = g - m,
                    P = S + y,
                    E = c - y - m,
                    C = f - g + y + b,
                    w = y + m - x,
                    M = 160;
                  switch (i) {
                    case "auto":
                    case "bottom":
                      if (_ >= d) return {
                        placement: "bottom",
                        maxHeight: e
                      };
                      if (E >= d && !s) return a && we(l, C, M), {
                        placement: "bottom",
                        maxHeight: e
                      };
                      if (!s && E >= n || s && _ >= n) return a && we(l, C, M), {
                        placement: "bottom",
                        maxHeight: s ? _ - b : E - b
                      };
                      if ("auto" === i || s) {
                        var T = e,
                          A = s ? S : P;
                        return A >= n && (T = Math.min(A - b - o, e)), {
                          placement: "top",
                          maxHeight: T
                        }
                      }
                      if ("bottom" === i) return a && Ce(l, C), {
                        placement: "bottom",
                        maxHeight: e
                      };
                      break;
                    case "top":
                      if (S >= d) return {
                        placement: "top",
                        maxHeight: e
                      };
                      if (P >= d && !s) return a && we(l, w, M), {
                        placement: "top",
                        maxHeight: e
                      };
                      if (!s && P >= n || s && S >= n) {
                        var k = e;
                        return (!s && P >= n || s && S >= n) && (k = s ? S - x : P - x), a && we(l, w, M), {
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
                  return u
                }({
                  maxHeight: n,
                  menuEl: t,
                  minHeight: r,
                  placement: i,
                  shouldScroll: o && !e,
                  isFixedPosition: e,
                  controlHeight: b
                });
              m(a.maxHeight), y(a.placement), null == h || h(a.placement)
            }
          }), [n, i, s, o, r, h, b]), e({
            ref: p,
            placerProps: a(a({}, t), {}, {
              placement: g || Ne(i),
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
        $e = ["innerProps", "isRtl", "size"],
        Ye = {
          name: "8mmkcg",
          styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
        },
        Ke = function(t) {
          var e = t.size,
            r = h(t, Ue);
          return qt("svg", (0, f.c)({
            height: e,
            width: e,
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            focusable: "false",
            css: Ye
          }, r))
        },
        Xe = function(t) {
          return qt(Ke, (0, f.c)({
            size: 20
          }, t), qt("path", {
            d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
          }))
        },
        Ze = function(t) {
          return qt(Ke, (0, f.c)({
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
        }(Le || (Be = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], ze || (ze = Be.slice(0)), Le = Object.freeze(Object.defineProperties(Be, {
          raw: {
            value: Object.freeze(ze)
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
        ur = {
          ClearIndicator: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({}, _e(t, "clearIndicator", {
              indicator: !0,
              "clear-indicator": !0
            }), r), e || qt(Xe, null))
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
            }, _e(t, "control", {
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
            return qt("div", (0, f.c)({}, _e(t, "dropdownIndicator", {
              indicator: !0,
              "dropdown-indicator": !0
            }), r), e || qt(Ze, null))
          },
          DownChevron: Ze,
          CrossIcon: Xe,
          Group: function(t) {
            var e = t.children,
              r = t.cx,
              n = t.getStyles,
              i = t.getClassNames,
              a = t.Heading,
              s = t.headingProps,
              o = t.innerProps,
              l = t.label,
              u = t.theme,
              h = t.selectProps;
            return qt("div", (0, f.c)({}, _e(t, "group", {
              group: !0
            }), o), qt(a, (0, f.c)({}, s, {
              selectProps: h,
              theme: u,
              getStyles: n,
              getClassNames: i,
              cx: r
            }), l), qt("div", null, e))
          },
          GroupHeading: function(t) {
            var e = Se(t);
            e.data;
            var r = h(e, nr);
            return qt("div", (0, f.c)({}, _e(t, "groupHeading", {
              "group-heading": !0
            }), r))
          },
          IndicatorsContainer: function(t) {
            var e = t.children,
              r = t.innerProps;
            return qt("div", (0, f.c)({}, _e(t, "indicatorsContainer", {
              indicators: !0
            }), r), e)
          },
          IndicatorSeparator: function(t) {
            var e = t.innerProps;
            return qt("span", (0, f.c)({}, e, _e(t, "indicatorSeparator", {
              "indicator-separator": !0
            })))
          },
          Input: function(t) {
            var e = t.cx,
              r = t.value,
              n = Se(t),
              i = n.innerRef,
              a = n.isDisabled,
              s = n.isHidden,
              o = n.inputClassName,
              l = h(n, ir);
            return qt("div", (0, f.c)({}, _e(t, "input", {
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
              s = h(t, $e);
            return qt("div", (0, f.c)({}, _e(a(a({}, s), {}, {
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
            return qt("div", (0, f.c)({}, _e(t, "menu", {
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
            return qt("div", (0, f.c)({}, _e(t, "menuList", {
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
              u = (0, c.useRef)(null),
              h = (0, c.useRef)(null),
              p = l((0, c.useState)(Ne(s)), 2),
              d = p[0],
              m = p[1],
              v = (0, c.useMemo)((function() {
                return {
                  setPortalPlacement: m
                }
              }), []),
              g = l((0, c.useState)(null), 2),
              y = g[0],
              b = g[1],
              x = (0, c.useCallback)((function() {
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
                  r === (null == y ? void 0 : y.offset) && t.left === (null == y ? void 0 : y.rect.left) && t.width === (null == y ? void 0 : y.rect.width) || b({
                    offset: r,
                    rect: t
                  })
                }
              }), [n, o, d, null == y ? void 0 : y.offset, null == y ? void 0 : y.rect.left, null == y ? void 0 : y.rect.width]);
            me((function() {
              x()
            }), [x]);
            var S = (0, c.useCallback)((function() {
              "function" == typeof h.current && (h.current(), h.current = null), n && u.current && (h.current = function(t, e, r, n) {
                void 0 === n && (n = {});
                const {
                  ancestorScroll: i = !0,
                  ancestorResize: a = !0,
                  elementResize: s = "function" == typeof ResizeObserver,
                  layoutShift: o = "function" == typeof IntersectionObserver,
                  animationFrame: l = !1
                } = n, u = he(t), h = i || a ? [...u ? ue(u) : [], ...ue(e)] : [];
                h.forEach((t => {
                  i && t.addEventListener("scroll", r, {
                    passive: !0
                  }), a && t.addEventListener("resize", r)
                }));
                const c = u && o ? function(t, e) {
                  let r, n = null;
                  const i = ee(t);

                  function a() {
                    clearTimeout(r), n && n.disconnect(), n = null
                  }
                  return function s(o, l) {
                    void 0 === o && (o = !1), void 0 === l && (l = 1), a();
                    const {
                      left: u,
                      top: h,
                      width: c,
                      height: p
                    } = t.getBoundingClientRect();
                    if (o || e(), !c || !p) return;
                    const f = {
                      rootMargin: -Zt(h) + "px " + -Zt(i.clientWidth - (u + c)) + "px " + -Zt(i.clientHeight - (h + p)) + "px " + -Zt(u) + "px",
                      threshold: Kt(0, Yt(1, l)) || 1
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
                }(u, r) : null;
                let p, f = -1,
                  d = null;
                s && (d = new ResizeObserver((t => {
                  let [n] = t;
                  n && n.target === u && d && (d.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                    d && d.observe(e)
                  }))), r()
                })), u && !l && d.observe(u), d.observe(e));
                let m = l ? de(t) : null;
                return l && function e() {
                  const n = de(t);
                  !m || n.x === m.x && n.y === m.y && n.width === m.width && n.height === m.height || r(), m = n, p = requestAnimationFrame(e)
                }(), r(), () => {
                  h.forEach((t => {
                    i && t.removeEventListener("scroll", r), a && t.removeEventListener("resize", r)
                  })), c && c(), d && d.disconnect(), d = null, l && cancelAnimationFrame(p)
                }
              }(n, u.current, x, {
                elementResize: "ResizeObserver" in window
              }))
            }), [n, x]);
            me((function() {
              S()
            }), [S]);
            var _ = (0, c.useCallback)((function(t) {
              u.current = t, S()
            }), [S]);
            if (!e && "fixed" !== o || !y) return null;
            var P = qt("div", (0, f.c)({
              ref: _
            }, _e(a(a({}, t), {}, {
              offset: y.offset,
              position: o,
              rect: y.rect
            }), "menuPortal", {
              "menu-portal": !0
            }), i), r);
            return qt(je.Provider, {
              value: v
            }, e ? (0, $t.createPortal)(P, e) : P)
          },
          LoadingMessage: function(t) {
            var e = t.children,
              r = void 0 === e ? "Loading..." : e,
              n = t.innerProps,
              i = h(t, Ve);
            return qt("div", (0, f.c)({}, _e(a(a({}, i), {}, {
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
              i = h(t, Re);
            return qt("div", (0, f.c)({}, _e(a(a({}, i), {}, {
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
              u = r.Container,
              h = r.Label,
              c = r.Remove;
            return qt(u, {
              data: n,
              innerProps: a(a({}, _e(t, "multiValue", {
                "multi-value": !0,
                "multi-value--is-disabled": s
              })), i),
              selectProps: l
            }, qt(h, {
              data: n,
              innerProps: a({}, _e(t, "multiValueLabel", {
                "multi-value__label": !0
              })),
              selectProps: l
            }, e), qt(c, {
              data: n,
              innerProps: a(a({}, _e(t, "multiValueRemove", {
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
            }, r), e || qt(Xe, {
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
            return qt("div", (0, f.c)({}, _e(t, "option", {
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
            return qt("div", (0, f.c)({}, _e(t, "placeholder", {
              placeholder: !0
            }), r), e)
          },
          SelectContainer: function(t) {
            var e = t.children,
              r = t.innerProps,
              n = t.isDisabled,
              i = t.isRtl;
            return qt("div", (0, f.c)({}, _e(t, "container", {
              "--is-disabled": n,
              "--is-rtl": i
            }), r), e)
          },
          SingleValue: function(t) {
            var e = t.children,
              r = t.isDisabled,
              n = t.innerProps;
            return qt("div", (0, f.c)({}, _e(t, "singleValue", {
              "single-value": !0,
              "single-value--is-disabled": r
            }), n), e)
          },
          ValueContainer: function(t) {
            var e = t.children,
              r = t.innerProps,
              n = t.isMulti,
              i = t.hasValue;
            return qt("div", (0, f.c)({}, _e(t, "valueContainer", {
              "value-container": !0,
              "value-container--is-multi": n,
              "value-container--has-value": i
            }), r), e)
          }
        },
        hr = Number.isNaN || function(t) {
          return "number" == typeof t && t != t
        };

      function cr(t, e) {
        if (t.length !== e.length) return !1;
        for (var r = 0; r < t.length; r++)
          if (!((n = t[r]) === (i = e[r]) || hr(n) && hr(i))) return !1;
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
              u = t.isAppleDevice,
              h = function(t, e) {
                return t && t.length ? "".concat(t.indexOf(e) + 1, " of ").concat(t.length) : ""
              };
            if ("value" === e && s) return "value ".concat(a, " focused, ").concat(h(s, r), ".");
            if ("menu" === e && u) {
              var c = o ? " disabled" : "",
                p = "".concat(l ? " selected" : "").concat(c);
              return "".concat(a).concat(p, ", ").concat(h(n, r), ".")
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
            u = t.id,
            h = t.isAppleDevice,
            p = l.ariaLiveMessages,
            f = l.getOptionLabel,
            d = l.inputValue,
            m = l.isMulti,
            v = l.isOptionDisabled,
            g = l.isSearchable,
            y = l.menuIsOpen,
            b = l.options,
            x = l.screenReaderStatus,
            S = l.tabSelectsValue,
            _ = l.isLoading,
            P = l["aria-label"],
            E = l["aria-live"],
            C = (0, c.useMemo)((function() {
              return a(a({}, dr), p || {})
            }), [p]),
            w = (0, c.useMemo)((function() {
              var t, r = "";
              if (e && C.onChange) {
                var n = e.option,
                  i = e.options,
                  s = e.removedValue,
                  l = e.removedValues,
                  u = e.value,
                  h = s || n || (t = u, Array.isArray(t) ? null : t),
                  c = h ? f(h) : "",
                  p = i || l || void 0,
                  d = p ? p.map(f) : [],
                  m = a({
                    isDisabled: h && v(h, o),
                    label: c,
                    labels: d
                  }, e);
                r = C.onChange(m)
              }
              return r
            }), [e, C, v, o, f]),
            M = (0, c.useMemo)((function() {
              var t = "",
                e = r || n,
                a = !!(r && o && o.includes(r));
              if (e && C.onFocus) {
                var s = {
                  focused: e,
                  label: f(e),
                  isDisabled: v(e, o),
                  isSelected: a,
                  options: i,
                  context: e === r ? "menu" : "value",
                  selectValue: o,
                  isAppleDevice: h
                };
                t = C.onFocus(s)
              }
              return t
            }), [r, n, f, v, C, i, o, h]),
            T = (0, c.useMemo)((function() {
              var t = "";
              if (y && b.length && !_ && C.onFilter) {
                var e = x({
                  count: i.length
                });
                t = C.onFilter({
                  inputValue: d,
                  resultsMessage: e
                })
              }
              return t
            }), [i, d, y, C, b, x, _]),
            A = "initial-input-focus" === (null == e ? void 0 : e.action),
            k = (0, c.useMemo)((function() {
              var t = "";
              if (C.guidance) {
                var e = n ? "value" : y ? "menu" : "input";
                t = C.guidance({
                  "aria-label": P,
                  context: e,
                  isDisabled: r && v(r, o),
                  isMulti: m,
                  isSearchable: g,
                  tabSelectsValue: S,
                  isInitialFocus: A
                })
              }
              return t
            }), [P, r, n, m, v, g, y, C, o, S, A]),
            I = qt(c.Fragment, null, qt("span", {
              id: "aria-selection"
            }, w), qt("span", {
              id: "aria-focused"
            }, M), qt("span", {
              id: "aria-results"
            }, T), qt("span", {
              id: "aria-guidance"
            }, k));
          return qt(c.Fragment, null, qt(fr, {
            id: u
          }, A && I), qt(fr, {
            "aria-live": E,
            "aria-atomic": "false",
            "aria-relevant": "additions text",
            role: "log"
          }, s && !A && I))
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
        }], gr = new RegExp("[" + vr.map((function(t) {
          return t.letters
        })).join("") + "]", "g"), yr = {}, br = 0; br < vr.length; br++)
        for (var xr = vr[br], Sr = 0; Sr < xr.letters.length; Sr++) yr[xr.letters[Sr]] = xr.base;
      var _r = function(t) {
          return t.replace(gr, (function(t) {
            return yr[t]
          }))
        },
        Pr = function(t, e) {
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
        }(_r),
        Er = function(t) {
          return t.replace(/^\s+|\s+$/g, "")
        },
        Cr = function(t) {
          return "".concat(t.label, " ").concat(t.value)
        },
        wr = ["innerRef"];

      function Mr(t) {
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
          }(h(t, wr), "onExited", "in", "enter", "exit", "appear");
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
      var Tr = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        Ar = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%"
        };

      function kr(t) {
        t.preventDefault()
      }

      function Ir(t) {
        t.stopPropagation()
      }

      function Dr() {
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

      function zr(t) {
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
              u = (0, c.useRef)(null),
              h = (0, c.useCallback)((function(t, e) {
                if (null !== u.current) {
                  var l = u.current,
                    h = l.scrollTop,
                    c = l.scrollHeight,
                    p = l.clientHeight,
                    f = u.current,
                    d = e > 0,
                    m = c - p - h,
                    v = !1;
                  m > e && s.current && (n && n(t), s.current = !1), d && o.current && (a && a(t), o.current = !1), d && e > m ? (r && !s.current && r(t), f.scrollTop = c, v = !0, s.current = !0) : !d && -e > h && (i && !o.current && i(t), f.scrollTop = 0, v = !0, o.current = !0), v && function(t) {
                    t.cancelable && t.preventDefault(), t.stopPropagation()
                  }(t)
                }
              }), [r, n, i, a]),
              p = (0, c.useCallback)((function(t) {
                h(t, t.deltaY)
              }), [h]),
              f = (0, c.useCallback)((function(t) {
                l.current = t.changedTouches[0].clientY
              }), []),
              d = (0, c.useCallback)((function(t) {
                var e = l.current - t.changedTouches[0].clientY;
                h(t, e)
              }), [h]),
              m = (0, c.useCallback)((function(t) {
                if (t) {
                  var e = !!De && {
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
                  var t = u.current;
                  return m(t),
                    function() {
                      v(t)
                    }
                }
              }), [e, m, v]),
              function(t) {
                u.current = t
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
                  if (n && Tr.forEach((function(t) {
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
                  e && Fr() && (e.addEventListener("touchmove", kr, Vr), t && (t.addEventListener("touchstart", Dr, Vr), t.addEventListener("touchmove", Ir, Vr))), Rr += 1
                }
              }), [n]),
              o = (0, c.useCallback)((function(t) {
                if (Or) {
                  var e = document.body,
                    r = e && e.style;
                  Rr = Math.max(Rr - 1, 0), n && Rr < 1 && Tr.forEach((function(t) {
                    var e = i.current[t];
                    r && (r[t] = e)
                  })), e && Fr() && (e.removeEventListener("touchmove", kr, Vr), t && (t.removeEventListener("touchstart", Dr, Vr), t.removeEventListener("touchmove", Ir, Vr)))
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
      var Nr = {
          name: "1a0ro4n-requiredInput",
          styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
        },
        jr = function(t) {
          var e = t.name,
            r = t.onFocus;
          return qt("input", {
            required: !0,
            name: e,
            tabIndex: -1,
            "aria-hidden": "true",
            onFocus: r,
            css: Nr,
            value: "",
            onChange: function() {}
          })
        };

      function Gr(t) {
        var e;
        return "undefined" != typeof window && null != window.navigator && t.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform)
      }

      function Hr() {
        return Gr(/^Mac/i)
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
              u = s.colors;
            return a((r = {
              label: "menu"
            }, (0, n.c)(r, function(t) {
              return t ? {
                bottom: "top",
                top: "bottom"
              } [t] : "bottom"
            }(i), "100%"), (0, n.c)(r, "position", "absolute"), (0, n.c)(r, "width", "100%"), (0, n.c)(r, "zIndex", 1), r), e ? {} : {
              backgroundColor: u.neutral0,
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
          blurInputOnSelect: Te(),
          captureMenuScroll: !Te(),
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
                stringify: Cr,
                trim: !0,
                matchFrom: "any"
              }, undefined),
              n = r.ignoreCase,
              i = r.ignoreAccents,
              s = r.stringify,
              o = r.trim,
              l = r.matchFrom,
              u = o ? Er(e) : e,
              h = o ? Er(s(t)) : s(t);
            return n && (u = u.toLowerCase(), h = h.toLowerCase()), i && (u = Pr(u), h = _r(h)), "start" === l ? h.substr(0, u.length) === u : h.indexOf(u) > -1
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

      function $r(t, e, r, n) {
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

      function Yr(t, e) {
        return t.options.map((function(r, n) {
          if ("options" in r) {
            var i = r.options.map((function(r, n) {
              return $r(t, r, e, n)
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
          var a = $r(t, r, e, n);
          return Zr(t, a) ? a : void 0
        })).filter(Fe)
      }

      function Kr(t) {
        return t.reduce((function(t, e) {
          return "group" === e.type ? t.push.apply(t, x(e.options.map((function(t) {
            return t.data
          })))) : t.push(e.data), t
        }), [])
      }

      function Xr(t, e) {
        return t.reduce((function(t, r) {
          return "group" === r.type ? t.push.apply(t, x(r.options.map((function(t) {
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
              }, e.blockOptionHover = !1, e.isComposing = !1, e.commonProps = void 0, e.initialTouchX = 0, e.initialTouchY = 0, e.openAfterFocus = !1, e.scrollToFocusedOptionOnUpdate = !1, e.userIsDragging = void 0, e.isAppleDevice = Hr() || Gr(/^iPhone/i) || Gr(/^iPad/i) || Hr() && navigator.maxTouchPoints > 1, e.controlRef = null, e.getControlRef = function(t) {
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
                  var u = e.getOptionValue(t);
                  e.setValue(s.filter((function(t) {
                    return e.getOptionValue(t) !== u
                  })), "deselect-option", t)
                } else {
                  if (l) return void e.ariaOnChange(t, {
                    action: "select-option",
                    option: t,
                    name: a
                  });
                  i ? e.setValue([].concat(x(s), [t]), "select-option", t) : e.setValue(t, "select-option")
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
                return Xr(Yr(e.props, e.state.selectValue), e.getElementId("option"))
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
                return t = e.props, a(a({}, ur), t.components);
                var t
              }, e.buildCategorizedOptions = function() {
                return Yr(e.props, e.state.selectValue)
              }, e.getCategorizedOptions = function() {
                return e.props.menuIsOpen ? e.buildCategorizedOptions() : []
              }, e.buildFocusableOptions = function() {
                return Kr(e.buildCategorizedOptions())
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
                "boolean" == typeof e.props.closeMenuOnScroll ? t.target instanceof HTMLElement && Pe(t.target) && e.props.onMenuClose() : "function" == typeof e.props.closeMenuOnScroll && e.props.closeMenuOnScroll(t) && e.props.onMenuClose()
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
                  u = r.menuIsOpen,
                  h = r.onKeyDown,
                  c = r.tabSelectsValue,
                  p = r.openMenuOnFocus,
                  f = e.state,
                  d = f.focusedOption,
                  m = f.focusedValue,
                  v = f.selectValue;
                if (!(l || "function" == typeof h && (h(t), t.defaultPrevented))) {
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
                      if (t.shiftKey || !u || !c || !d || p && e.isOptionSelected(d, v)) return;
                      e.selectOption(d);
                      break;
                    case "Enter":
                      if (229 === t.keyCode) break;
                      if (u) {
                        if (!d) return;
                        if (e.isComposing) return;
                        e.selectOption(d);
                        break
                      }
                      return;
                    case "Escape":
                      u ? (e.setState({
                        inputIsHiddenAfterUpdate: !1
                      }), e.onInputChange("", {
                        action: "menu-close",
                        prevInputValue: s
                      }), e.onMenuClose()) : o && a && e.clearValue();
                      break;
                    case " ":
                      if (s) return;
                      if (!u) {
                        e.openMenu("first");
                        break
                      }
                      if (!d) return;
                      e.selectOption(d);
                      break;
                    case "ArrowUp":
                      u ? e.focusOption("up") : e.openMenu("last");
                      break;
                    case "ArrowDown":
                      u ? e.focusOption("down") : e.openMenu("first");
                      break;
                    case "PageUp":
                      if (!u) return;
                      e.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!u) return;
                      e.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!u) return;
                      e.focusOption("first");
                      break;
                    case "End":
                      if (!u) return;
                      e.focusOption("last");
                      break;
                    default:
                      return
                  }
                  t.preventDefault()
                }
              }, e.state.instancePrefix = "react-select-" + (e.props.instanceId || ++sn), e.state.selectValue = xe(t.value), t.menuIsOpen && e.state.selectValue.length) {
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
              this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Me(this.menuListRef, this.focusedOptionRef)
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
              }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Me(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
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
                u = o.isRtl,
                h = o.options;
              return {
                clearValue: t,
                cx: e,
                getStyles: r,
                getClassNames: n,
                getValue: i,
                hasValue: this.hasValue(),
                isMulti: l,
                isRtl: u,
                options: h,
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
                u = t.required,
                h = this.getComponents().Input,
                p = this.state,
                d = p.inputIsHidden,
                m = p.ariaSelection,
                v = this.commonProps,
                g = n || this.getElementId("input"),
                y = a(a(a({
                  "aria-autocomplete": "list",
                  "aria-expanded": l,
                  "aria-haspopup": !0,
                  "aria-errormessage": this.props["aria-errormessage"],
                  "aria-invalid": this.props["aria-invalid"],
                  "aria-label": this.props["aria-label"],
                  "aria-labelledby": this.props["aria-labelledby"],
                  "aria-required": u,
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
              return r ? c.createElement(h, (0, f.c)({}, v, {
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                id: g,
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
              }, y)) : c.createElement(Mr, (0, f.c)({
                id: g,
                innerRef: this.getInputRef,
                onBlur: this.onInputBlur,
                onChange: ge,
                onFocus: this.onInputFocus,
                disabled: e,
                tabIndex: s,
                inputMode: "none",
                form: o,
                value: ""
              }, y))
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
                u = this.props,
                h = u.controlShouldRenderValue,
                p = u.isDisabled,
                d = u.isMulti,
                m = u.inputValue,
                v = u.placeholder,
                g = this.state,
                y = g.selectValue,
                b = g.focusedValue,
                x = g.isFocused;
              if (!this.hasValue() || !h) return m ? null : c.createElement(o, (0, f.c)({}, l, {
                key: "placeholder",
                isDisabled: p,
                isFocused: x,
                innerProps: {
                  id: this.getElementId("placeholder")
                }
              }), v);
              if (d) return y.map((function(e, s) {
                var o = e === b,
                  u = "".concat(t.getOptionLabel(e), "-").concat(t.getOptionValue(e));
                return c.createElement(r, (0, f.c)({}, l, {
                  components: {
                    Container: n,
                    Label: i,
                    Remove: a
                  },
                  isFocused: o,
                  isDisabled: p,
                  key: u,
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
              var S = y[0];
              return c.createElement(s, (0, f.c)({}, l, {
                data: S,
                isDisabled: p
              }), this.formatOptionLabel(S, "value"))
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
                u = e.Option,
                h = this.commonProps,
                p = this.state.focusedOption,
                d = this.props,
                m = d.captureMenuScroll,
                v = d.inputValue,
                g = d.isLoading,
                y = d.loadingMessage,
                b = d.minMenuHeight,
                x = d.maxMenuHeight,
                S = d.menuIsOpen,
                _ = d.menuPlacement,
                P = d.menuPosition,
                E = d.menuPortalTarget,
                C = d.menuShouldBlockScroll,
                w = d.menuShouldScrollIntoView,
                M = d.noOptionsMessage,
                T = d.onMenuScrollToTop,
                A = d.onMenuScrollToBottom;
              if (!S) return null;
              var k, I = function(e, r) {
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
                  g = "".concat(t.getElementId("option"), "-").concat(r),
                  y = {
                    id: g,
                    onClick: v,
                    onMouseMove: m,
                    onMouseOver: m,
                    tabIndex: -1,
                    role: "option",
                    "aria-selected": t.isAppleDevice ? void 0 : s
                  };
                return c.createElement(u, (0, f.c)({}, h, {
                  innerProps: y,
                  data: i,
                  isDisabled: a,
                  isSelected: s,
                  key: g,
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
                  return c.createElement(r, (0, f.c)({}, h, {
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
                    return I(t, "".concat(s, "-").concat(t.index))
                  })))
                }
                if ("option" === e.type) return I(e, "".concat(e.index))
              }));
              else if (g) {
                var D = y({
                  inputValue: v
                });
                if (null === D) return null;
                k = c.createElement(o, h, D)
              } else {
                var F = M({
                  inputValue: v
                });
                if (null === F) return null;
                k = c.createElement(l, h, F)
              }
              var O = {
                  minMenuHeight: b,
                  maxMenuHeight: x,
                  menuPlacement: _,
                  menuPosition: P,
                  menuShouldScrollIntoView: w
                },
                R = c.createElement(Ge, (0, f.c)({}, h, O), (function(e) {
                  var r = e.ref,
                    n = e.placerProps,
                    s = n.placement,
                    o = n.maxHeight;
                  return c.createElement(i, (0, f.c)({}, h, O, {
                    innerRef: r,
                    innerProps: {
                      onMouseDown: t.onMenuMouseDown,
                      onMouseMove: t.onMenuMouseMove
                    },
                    isLoading: g,
                    placement: s
                  }), c.createElement(zr, {
                    captureEnabled: m,
                    onTopArrive: T,
                    onBottomArrive: A,
                    lockEnabled: C
                  }, (function(e) {
                    return c.createElement(a, (0, f.c)({}, h, {
                      innerRef: function(r) {
                        t.getMenuListRef(r), e(r)
                      },
                      innerProps: {
                        role: "listbox",
                        "aria-multiselectable": h.isMulti,
                        id: t.getElementId("listbox")
                      },
                      isLoading: g,
                      maxHeight: o,
                      focusedOption: p
                    }), k)
                  })))
                }));
              return E || "fixed" === P ? c.createElement(s, (0, f.c)({}, h, {
                appendTo: E,
                controlElement: this.controlRef,
                menuPlacement: _,
                menuPosition: P
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
              if (s && !this.hasValue() && !n) return c.createElement(jr, {
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
                  var u = o.length > 0 ? o.map((function(e, r) {
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
                  return c.createElement("div", null, u)
                }
                var h = o[0] ? this.getOptionValue(o[0]) : "";
                return c.createElement("input", {
                  name: a,
                  type: "hidden",
                  value: h
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
                u = a.menuIsOpen,
                h = this.state.isFocused,
                p = this.commonProps = this.getCommonProps();
              return c.createElement(n, (0, f.c)({}, p, {
                className: s,
                innerProps: {
                  id: o,
                  onKeyDown: this.onKeyDown
                },
                isDisabled: l,
                isFocused: h
              }), this.renderLiveRegion(), c.createElement(e, (0, f.c)({}, p, {
                innerRef: this.getControlRef,
                innerProps: {
                  onMouseDown: this.onControlMouseDown,
                  onTouchEnd: this.onControlTouchEnd
                },
                isDisabled: l,
                isFocused: h,
                menuIsOpen: u
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
                u = e.instancePrefix,
                h = t.options,
                c = t.value,
                p = t.menuIsOpen,
                f = t.inputValue,
                d = t.isMulti,
                m = xe(c),
                v = {};
              if (r && (c !== r.value || h !== r.options || p !== r.menuIsOpen || f !== r.inputValue)) {
                var g = p ? function(t, e) {
                    return Kr(Yr(t, e))
                  }(t, m) : [],
                  y = p ? Xr(Yr(t, m), "".concat(u, "-option")) : [],
                  b = n ? function(t, e) {
                    var r = t.focusedValue,
                      n = t.selectValue.indexOf(r);
                    if (n > -1) {
                      if (e.indexOf(r) > -1) return r;
                      if (n < e.length) return e[n]
                    }
                    return null
                  }(e, m) : null,
                  x = function(t, e) {
                    var r = t.focusedOption;
                    return r && e.indexOf(r) > -1 ? r : e[0]
                  }(e, g);
                v = {
                  selectValue: m,
                  focusedOption: x,
                  focusedOptionId: Jr(y, x),
                  focusableOptionsWithIds: y,
                  focusedValue: b,
                  clearFocusValueOnUpdate: !1
                }
              }
              var S = null != i && t !== r ? {
                  inputIsHidden: i,
                  inputIsHiddenAfterUpdate: void 0
                } : {},
                _ = s,
                P = o && l;
              return o && !P && (_ = {
                value: Oe(d, m, m[0] || null),
                options: m,
                action: "initial-input-focus"
              }, P = !l), "initial-input-focus" === (null == s ? void 0 : s.action) && (_ = null), a(a(a({}, v), S), {}, {
                prevProps: t,
                ariaSelection: _,
                prevWasFocused: P
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
              u = t.inputValue,
              f = t.menuIsOpen,
              d = t.onChange,
              m = t.onInputChange,
              v = t.onMenuClose,
              g = t.onMenuOpen,
              y = t.value,
              b = h(t, p),
              x = l((0, c.useState)(void 0 !== u ? u : r), 2),
              S = x[0],
              _ = x[1],
              P = l((0, c.useState)(void 0 !== f ? f : i), 2),
              E = P[0],
              C = P[1],
              w = l((0, c.useState)(void 0 !== y ? y : o), 2),
              M = w[0],
              T = w[1],
              A = (0, c.useCallback)((function(t, e) {
                "function" == typeof d && d(t, e), T(t)
              }), [d]),
              k = (0, c.useCallback)((function(t, e) {
                var r;
                "function" == typeof m && (r = m(t, e)), _(void 0 !== r ? r : t)
              }), [m]),
              I = (0, c.useCallback)((function() {
                "function" == typeof g && g(), C(!0)
              }), [g]),
              D = (0, c.useCallback)((function() {
                "function" == typeof v && v(), C(!1)
              }), [v]),
              F = void 0 !== u ? u : S,
              O = void 0 !== f ? f : E,
              R = void 0 !== y ? y : M;
            return a(a({}, b), {}, {
              inputValue: F,
              menuIsOpen: O,
              onChange: A,
              onInputChange: k,
              onMenuClose: D,
              onMenuOpen: I,
              value: R
            })
          }(t);
          return c.createElement(on, (0, f.c)({
            ref: e
          }, r))
        })),
        un = ln
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
        l = f(r(11951)),
        u = f(r(17368)),
        h = f(r(31792)),
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
                x = "multi" === i ? function() {
                  return d(h, f)
                } : function() {
                  return m(h, v)
                },
                S = void 0,
                _ = r,
                P = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(e) {
                return (0, u.default)((function() {
                  return _ <= P
                }), (function(e) {
                  if (y()) return e(!0);
                  S = parseInt((_ + P) / 2, 10), t.setState({
                    fontSize: S
                  }, (function() {
                    return y() ? e(!0) : (b() ? _ = S + 1 : P = S - 1, e())
                  }))
                }), e)
              }, function(e) {
                return "single" === i && a || x() ? e() : (_ = r, P = S, (0, u.default)((function() {
                  return _ < P
                }), (function(e) {
                  if (y()) return e(!0);
                  S = parseInt((_ + P) / 2, 10), t.setState({
                    fontSize: S
                  }, (function() {
                    return g !== t.pid ? e(!0) : (x() ? _ = S + 1 : P = S - 1, e())
                  }))
                }), e))
              }, function(e) {
                if (S = Math.min(_, P), S = Math.max(S, r), S = Math.min(S, n), S = Math.max(S, 0), y()) return e(!0);
                t.setState({
                  fontSize: S
                }, e)
              }], (function(e) {
                e || y() || t.setState({
                  ready: !0
                }, (function() {
                  return s(S)
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
    11951: (t, e, r) => {
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
    84296: (t, e, r) => {
      "use strict";
      r.d(e, {
        Q: () => h
      });
      var n = r(51664),
        i = r(77100);
      let a = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        s = t => t && !Array.isArray(t) && "object" == typeof t,
        o = [],
        l = {},
        u = i.cp;
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
          hasFilter: x,
          removeAllActions: S,
          removeAllFilters: _,
          doAction: P,
          applyFilters: E,
          currentAction: C,
          currentFilter: w,
          doingAction: M,
          doingFilter: T,
          didAction: A,
          didFilter: k,
          actions: I,
          filters: D
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
        var l, u = ["", "webkit", "Moz", "MS", "ms", "o"],
          h = a.createElement("div"),
          c = "function",
          p = Math.round,
          f = Math.abs,
          d = Date.now;

        function m(t, e, r) {
          return setTimeout(_(t, r), e)
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
          x = y((function(t, e) {
            return b(t, e, !0)
          }), "merge", "Use `assign`.");

        function S(t, e, r) {
          var n, i = e.prototype;
          (n = t.prototype = Object.create(i)).constructor = t, n._super = i, r && l(n, r)
        }

        function _(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function P(t, e) {
          return typeof t == c ? t.apply(e && e[0] || o, e) : t
        }

        function E(t, e) {
          return t === o ? e : t
        }

        function C(t, e, r) {
          g(A(e), (function(e) {
            t.addEventListener(e, r, !1)
          }))
        }

        function w(t, e, r) {
          g(A(e), (function(e) {
            t.removeEventListener(e, r, !1)
          }))
        }

        function M(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function T(t, e) {
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
        var V = "ontouchstart" in i,
          L = F(i, "PointerEvent") !== o,
          B = V && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          z = "touch",
          N = "mouse",
          j = 25,
          G = 1,
          H = 4,
          W = 8,
          q = 1,
          U = 2,
          $ = 4,
          Y = 8,
          K = 16,
          X = U | $,
          Z = Y | K,
          J = X | Z,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var r = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            P(t.options.enable, [t]) && r.handler(e)
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
              M(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
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
          return t === e ? q : f(t) >= f(e) ? t < 0 ? U : $ : e < 0 ? Y : K
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
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(R(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(R(this.element), this.evWin, this.domHandler)
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
        S(pt, et, {
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
        i.MSPointerEvent && !i.PointerEvent && (mt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), S(gt, et, {
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

        function xt(t, e) {
          var r = I(t.touches),
            n = I(t.changedTouches);
          return e & (H | W) && (r = D(r.concat(n), "identifier", !0)), [r, n]
        }
        S(bt, et, {
          handler: function(t) {
            var e = yt[t.type];
            if (e === G && (this.started = !0), this.started) {
              var r = xt.call(this, t, e);
              e & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: z,
                srcEvent: t
              })
            }
          }
        });
        var St = {
            touchstart: G,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          _t = "touchstart touchmove touchend touchcancel";

        function Pt() {
          this.evTarget = _t, this.targetIds = {}, et.apply(this, arguments)
        }

        function Et(t, e) {
          var r = I(t.touches),
            n = this.targetIds;
          if (e & (2 | G) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
          var i, a, s = I(t.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(t) {
              return M(t.target, l)
            })), e === G)
            for (i = 0; i < a.length;) n[a[i].identifier] = !0, i++;
          for (i = 0; i < s.length;) n[s[i].identifier] && o.push(s[i]), e & (H | W) && delete n[s[i].identifier], i++;
          return o.length ? [D(a.concat(o), "identifier", !0), o] : void 0
        }
        S(Pt, et, {
          handler: function(t) {
            var e = St[t.type],
              r = Et.call(this, t, e);
            r && this.callback(this.manager, e, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: z,
              srcEvent: t
            })
          }
        });
        var Ct = 2500;

        function wt() {
          et.apply(this, arguments);
          var t = _(this.handler, this);
          this.touch = new Pt(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Mt(t, e) {
          t & G ? (this.primaryTouch = e.changedPointers[0].identifier, Tt.call(this, e)) : t & (H | W) && Tt.call(this, e)
        }

        function Tt(t) {
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
            }), Ct)
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
        S(wt, et, {
          handler: function(t, e, r) {
            var n = r.pointerType == z,
              i = r.pointerType == N;
            if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (n) Mt.call(this, e, r);
              else if (i && At.call(this, r)) return;
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
          Vt = "pan-x",
          Lt = "pan-y",
          Bt = function() {
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
            t == Dt && (t = this.compute()), It && this.manager.element.style && Bt[t] && (this.manager.element.style[kt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return g(this.manager.recognizers, (function(e) {
                P(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (T(t, Rt)) return Rt;
                var e = T(t, Vt),
                  r = T(t, Lt);
                return e && r ? Rt : e || r ? e ? Vt : Lt : T(t, Ot) ? Ot : Ft
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              r = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                i = T(n, Rt) && !Bt[Rt],
                a = T(n, Lt) && !Bt[Lt],
                s = T(n, Vt) && !Bt[Vt];
              if (i) {
                var o = 1 === t.pointers.length,
                  l = t.distance < 2,
                  u = t.deltaTime < 250;
                if (o && l && u) return
              }
              if (!s || !a) return i || a && r & X || s && r & Z ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var Nt = 1,
          jt = 32;

        function Gt(t) {
          this.options = l({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = E(this.options.enable, !0), this.state = Nt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Wt(t) {
          return t == K ? "down" : t == Y ? "up" : t == U ? "left" : t == $ ? "right" : ""
        }

        function qt(t, e) {
          var r = e.manager;
          return r ? r.get(t) : t
        }

        function Ut() {
          Gt.apply(this, arguments)
        }

        function $t() {
          Ut.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Yt() {
          Ut.apply(this, arguments)
        }

        function Kt() {
          Gt.apply(this, arguments), this._timer = null, this._input = null
        }

        function Xt() {
          Ut.apply(this, arguments)
        }

        function Zt() {
          Ut.apply(this, arguments)
        }

        function Jt() {
          Gt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = E(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = l({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (L ? gt : B ? Pt : V ? wt : pt))(this, rt), this.touchAction = new zt(this, this.options.touchAction), ee(this, !0), g(this.options.recognizers, (function(t) {
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
            if (!P(this.options.enable, [this, e])) return this.reset(), void(this.state = jt);
            56 & this.state && (this.state = Nt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, S(Ut, Gt, {
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
        }), S($t, Ut, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & X && e.push(Lt), t & Z && e.push(Vt), e
          },
          directionTest: function(t) {
            var e = this.options,
              r = !0,
              n = t.distance,
              i = t.direction,
              a = t.deltaX,
              s = t.deltaY;
            return i & e.direction || (e.direction & X ? (i = 0 === a ? q : a < 0 ? U : $, r = a != this.pX, n = Math.abs(t.deltaX)) : (i = 0 === s ? q : s < 0 ? Y : K, r = s != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction
          },
          attrTest: function(t) {
            return Ut.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Wt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), S(Yt, Ut, {
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
        }), S(Kt, Gt, {
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
        }), S(Xt, Ut, {
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
        }), S(Zt, Ut, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: X | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return $t.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, r = this.options.direction;
            return r & (X | Z) ? e = t.overallVelocity : r & X ? e = t.overallVelocityX : r & Z && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Wt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), S(Jt, Gt, {
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
            [Xt, {
              enable: !1
            }],
            [Yt, {
                enable: !1
              },
              ["rotate"]
            ],
            [Zt, {
              direction: X
            }],
            [$t, {
                direction: X
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
            [Kt]
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
              return g(A(t), (function(t) {
                r[t] = r[t] || [], r[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== o) {
              var r = this.handlers;
              return g(A(t), (function(t) {
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
          DIRECTION_LEFT: U,
          DIRECTION_RIGHT: $,
          DIRECTION_UP: Y,
          DIRECTION_DOWN: K,
          DIRECTION_HORIZONTAL: X,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: te,
          Input: et,
          TouchAction: zt,
          TouchInput: Pt,
          MouseInput: pt,
          PointerEventInput: gt,
          TouchMouseInput: wt,
          SingleTouchInput: bt,
          Recognizer: Gt,
          AttrRecognizer: Ut,
          Tap: Jt,
          Pan: $t,
          Swipe: Zt,
          Pinch: Yt,
          Rotate: Xt,
          Press: Kt,
          on: C,
          off: w,
          each: g,
          merge: x,
          extend: b,
          assign: l,
          inherit: S,
          bindFn: _,
          prefixed: F
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = Qt, (n = function() {
          return Qt
        }.call(e, r, e, t)) === o || (t.exports = n)
      }(window, document)
    },
    39216: (t, e, r) => {
      "use strict";
      var n = r(12400),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        o = {};

      function l(t) {
        return n.isMemo(t) ? s : o[t.$$typeof] || i
      }
      o[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, o[n.Memo] = s;
      var u = Object.defineProperty,
        h = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        d = Object.prototype;
      t.exports = function t(e, r, n) {
        if ("string" != typeof r) {
          if (d) {
            var i = f(r);
            i && i !== d && t(e, i, n)
          }
          var s = h(r);
          c && (s = s.concat(c(r)));
          for (var o = l(e), m = l(r), v = 0; v < s.length; ++v) {
            var g = s[v];
            if (!(a[g] || n && n[g] || m && m[g] || o && o[g])) {
              var y = p(r, g);
              try {
                u(e, g, y)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    31580: (t, e, r) => {
      var n = r(36056).Symbol;
      t.exports = n
    },
    95992: (t, e, r) => {
      var n = r(31580),
        i = r(33824),
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
    33824: (t, e, r) => {
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

        function x() {
          var t = i();
          if (b(t)) return S(t);
          p = setTimeout(x, function(t) {
            var r = e - (t - f);
            return v ? o(r, h - (t - d)) : r
          }(t))
        }

        function S(t) {
          return p = void 0, g && l ? y(t) : (l = u = void 0, c)
        }

        function _() {
          var t = i(),
            r = b(t);
          if (l = arguments, u = this, f = t, r) {
            if (void 0 === p) return function(t) {
              return d = t, p = setTimeout(x, e), m ? y(t) : c
            }(f);
            if (v) return clearTimeout(p), p = setTimeout(x, e), y(f)
          }
          return void 0 === p && (p = setTimeout(x, e)), c
        }
        return e = a(e) || 0, n(r) && (m = !!r.leading, h = (v = "maxWait" in r) ? s(a(r.maxWait) || 0, e) : h, g = "trailing" in r ? !!r.trailing : g), _.cancel = function() {
          void 0 !== p && clearTimeout(p), d = 0, l = f = u = p = void 0
        }, _.flush = function() {
          return void 0 === p ? c : S(i())
        }, _
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
    79784: function(t, e, r) {
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
            x = "[object Function]",
            S = "[object GeneratorFunction]",
            _ = "[object Map]",
            P = "[object Number]",
            E = "[object Object]",
            C = "[object Promise]",
            w = "[object RegExp]",
            M = "[object Set]",
            T = "[object String]",
            A = "[object Symbol]",
            k = "[object WeakMap]",
            I = "[object ArrayBuffer]",
            D = "[object DataView]",
            F = "[object Float32Array]",
            O = "[object Float64Array]",
            R = "[object Int8Array]",
            V = "[object Int16Array]",
            L = "[object Int32Array]",
            B = "[object Uint8Array]",
            z = "[object Uint8ClampedArray]",
            N = "[object Uint16Array]",
            j = "[object Uint32Array]",
            G = /\b__p \+= '';/g,
            H = /\b(__p \+=) '' \+/g,
            W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            q = /&(?:amp|lt|gt|quot|#39);/g,
            U = /[&<>"']/g,
            $ = RegExp(q.source),
            Y = RegExp(U.source),
            K = /<%-([\s\S]+?)%>/g,
            X = /<%([\s\S]+?)%>/g,
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
            xt = /['\n\r\u2028\u2029\\]/g,
            St = "\\ud800-\\udfff",
            _t = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Pt = "\\u2700-\\u27bf",
            Et = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Ct = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            wt = "\\ufe0e\\ufe0f",
            Mt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Tt = "[" + St + "]",
            At = "[" + Mt + "]",
            kt = "[" + _t + "]",
            It = "\\d+",
            Dt = "[" + Pt + "]",
            Ft = "[" + Et + "]",
            Ot = "[^" + St + Mt + It + Pt + Et + Ct + "]",
            Rt = "\\ud83c[\\udffb-\\udfff]",
            Vt = "[^" + St + "]",
            Lt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Bt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            zt = "[" + Ct + "]",
            Nt = "\\u200d",
            jt = "(?:" + Ft + "|" + Ot + ")",
            Gt = "(?:" + zt + "|" + Ot + ")",
            Ht = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Wt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            qt = "(?:" + kt + "|" + Rt + ")?",
            Ut = "[" + wt + "]?",
            $t = Ut + qt + "(?:" + Nt + "(?:" + [Vt, Lt, Bt].join("|") + ")" + Ut + qt + ")*",
            Yt = "(?:" + [Dt, Lt, Bt].join("|") + ")" + $t,
            Kt = "(?:" + [Vt + kt + "?", kt, Lt, Bt, Tt].join("|") + ")",
            Xt = RegExp("['’]", "g"),
            Zt = RegExp(kt, "g"),
            Jt = RegExp(Rt + "(?=" + Rt + ")|" + Kt + $t, "g"),
            Qt = RegExp([zt + "?" + Ft + "+" + Ht + "(?=" + [At, zt, "$"].join("|") + ")", Gt + "+" + Wt + "(?=" + [At, zt + jt, "$"].join("|") + ")", zt + "?" + jt + "+" + Ht, zt + "+" + Wt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", It, Yt].join("|"), "g"),
            te = RegExp("[" + Nt + St + _t + wt + "]"),
            ee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            re = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            ne = -1,
            ie = {};
          ie[F] = ie[O] = ie[R] = ie[V] = ie[L] = ie[B] = ie[z] = ie[N] = ie[j] = !0, ie[m] = ie[v] = ie[I] = ie[g] = ie[D] = ie[y] = ie[b] = ie[x] = ie[_] = ie[P] = ie[E] = ie[w] = ie[M] = ie[T] = ie[k] = !1;
          var ae = {};
          ae[m] = ae[v] = ae[I] = ae[D] = ae[g] = ae[y] = ae[F] = ae[O] = ae[R] = ae[V] = ae[L] = ae[_] = ae[P] = ae[E] = ae[w] = ae[M] = ae[T] = ae[A] = ae[B] = ae[z] = ae[N] = ae[j] = !0, ae[b] = ae[x] = ae[k] = !1;
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
            xe = ve && ve.isRegExp,
            Se = ve && ve.isSet,
            _e = ve && ve.isTypedArray;

          function Pe(t, e, r) {
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

          function Ee(t, e, r, n) {
            for (var i = -1, a = null == t ? 0 : t.length; ++i < a;) {
              var s = t[i];
              e(n, s, r(s), t)
            }
            return n
          }

          function Ce(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
            return t
          }

          function we(t, e) {
            for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
            return t
          }

          function Me(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
              if (!e(t[r], r, t)) return !1;
            return !0
          }

          function Te(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n;) {
              var s = t[r];
              e(s, r, t) && (a[i++] = s)
            }
            return a
          }

          function Ae(t, e) {
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
          var Ve = He("length");

          function Le(t, e, r) {
            var n;
            return r(t, (function(t, r, i) {
              if (e(t, r, i)) return n = r, !1
            })), n
          }

          function Be(t, e, r, n) {
            for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
              if (e(t[a], a, t)) return a;
            return -1
          }

          function ze(t, e, r) {
            return e == e ? function(t, e, r) {
              for (var n = r - 1, i = t.length; ++n < i;)
                if (t[n] === e) return n;
              return -1
            }(t, e, r) : Be(t, je, r)
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
            return r ? Ue(t, e) / r : p
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

          function Ue(t, e) {
            for (var r, n = -1, a = t.length; ++n < a;) {
              var s = e(t[n]);
              s !== i && (r = r === i ? s : r + s)
            }
            return r
          }

          function $e(t, e) {
            for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
            return n
          }

          function Ye(t) {
            return t ? t.slice(0, cr(t) + 1).replace(nt, "") : t
          }

          function Ke(t) {
            return function(e) {
              return t(e)
            }
          }

          function Xe(t, e) {
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
            }(t) : Ve(t)
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
                St = e.Error,
                _t = e.Function,
                Pt = e.Math,
                Et = e.Object,
                Ct = e.RegExp,
                wt = e.String,
                Mt = e.TypeError,
                Tt = n.prototype,
                At = _t.prototype,
                kt = Et.prototype,
                It = e["__core-js_shared__"],
                Dt = At.toString,
                Ft = kt.hasOwnProperty,
                Ot = 0,
                Rt = (r = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                Vt = kt.toString,
                Lt = Dt.call(Et),
                Bt = ce._,
                zt = Ct("^" + Dt.call(Ft).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Nt = de ? e.Buffer : i,
                jt = e.Symbol,
                Gt = e.Uint8Array,
                Ht = Nt ? Nt.allocUnsafe : i,
                Wt = ar(Et.getPrototypeOf, Et),
                qt = Et.create,
                Ut = kt.propertyIsEnumerable,
                $t = Tt.splice,
                Yt = jt ? jt.isConcatSpreadable : i,
                Kt = jt ? jt.iterator : i,
                Jt = jt ? jt.toStringTag : i,
                te = function() {
                  try {
                    var t = la(Et, "defineProperty");
                    return t({}, "", {}), t
                  } catch (t) {}
                }(),
                se = e.clearTimeout !== ce.clearTimeout && e.clearTimeout,
                ue = it && it.now !== ce.Date.now && it.now,
                he = e.setTimeout !== ce.setTimeout && e.setTimeout,
                pe = Pt.ceil,
                fe = Pt.floor,
                me = Et.getOwnPropertySymbols,
                ve = Nt ? Nt.isBuffer : i,
                Ve = e.isFinite,
                We = Tt.join,
                dr = ar(Et.keys, Et),
                mr = Pt.max,
                vr = Pt.min,
                gr = it.now,
                yr = e.parseInt,
                br = Pt.random,
                xr = Tt.reverse,
                Sr = la(e, "DataView"),
                _r = la(e, "Map"),
                Pr = la(e, "Promise"),
                Er = la(e, "Set"),
                Cr = la(e, "WeakMap"),
                wr = la(Et, "create"),
                Mr = Cr && new Cr,
                Tr = {},
                Ar = Va(Sr),
                kr = Va(_r),
                Ir = Va(Pr),
                Dr = Va(Er),
                Fr = Va(Cr),
                Or = jt ? jt.prototype : i,
                Rr = Or ? Or.valueOf : i,
                Vr = Or ? Or.toString : i;

              function Lr(t) {
                if (Qs(t) && !Gs(t) && !(t instanceof jr)) {
                  if (t instanceof Nr) return t;
                  if (Ft.call(t, "__wrapped__")) return La(t)
                }
                return new Nr(t)
              }
              var Br = function() {
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

              function Ur(t) {
                var e = this.__data__ = new Hr(t);
                this.size = e.size
              }

              function $r(t, e) {
                var r = Gs(t),
                  n = !r && js(t),
                  i = !r && !n && Us(t),
                  a = !r && !n && !i && oo(t),
                  s = r || n || i || a,
                  o = s ? $e(t.length, wt) : [],
                  l = o.length;
                for (var u in t) !e && !Ft.call(t, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || a && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ma(u, l)) || o.push(u);
                return o
              }

              function Yr(t) {
                var e = t.length;
                return e ? t[qn(0, e - 1)] : i
              }

              function Kr(t, e) {
                return Ia(wi(t), an(e, 0, t.length))
              }

              function Xr(t) {
                return Ia(wi(t))
              }

              function Zr(t, e, r) {
                (r !== i && !Bs(t[e], r) || r === i && !(e in t)) && rn(t, e, r)
              }

              function Jr(t, e, r) {
                var n = t[e];
                Ft.call(t, e) && Bs(n, r) && (r !== i || e in t) || rn(t, e, r)
              }

              function Qr(t, e) {
                for (var r = t.length; r--;)
                  if (Bs(t[r][0], e)) return r;
                return -1
              }

              function tn(t, e, r, n) {
                return hn(t, (function(t, i, a) {
                  e(n, t, r(t), a)
                })), n
              }

              function en(t, e) {
                return t && Mi(e, ko(e), t)
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
                for (var r = -1, a = e.length, s = n(a), o = null == t; ++r < a;) s[r] = o ? i : Co(t, e[r]);
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
                    }(t), !l) return wi(t, o)
                } else {
                  var p = ca(t),
                    f = p == x || p == S;
                  if (Us(t)) return xi(t, l);
                  if (p == E || p == m || f && !a) {
                    if (o = u || f ? {} : fa(t), !l) return u ? function(t, e) {
                      return Mi(t, ha(t), e)
                    }(t, function(t, e) {
                      return t && Mi(e, Io(e), t)
                    }(o, t)) : function(t, e) {
                      return Mi(t, ua(t), e)
                    }(t, en(o, t))
                  } else {
                    if (!ae[p]) return a ? t : {};
                    o = function(t, e, r) {
                      var n, i = t.constructor;
                      switch (e) {
                        case I:
                          return Si(t);
                        case g:
                        case y:
                          return new i(+t);
                        case D:
                          return function(t, e) {
                            var r = e ? Si(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.byteLength)
                          }(t, r);
                        case F:
                        case O:
                        case R:
                        case V:
                        case L:
                        case B:
                        case z:
                        case N:
                        case j:
                          return _i(t, r);
                        case _:
                          return new i;
                        case P:
                        case T:
                          return new i(t);
                        case w:
                          return function(t) {
                            var e = new t.constructor(t.source, pt.exec(t));
                            return e.lastIndex = t.lastIndex, e
                          }(t);
                        case M:
                          return new i;
                        case A:
                          return n = t, Rr ? Et(Rr.call(n)) : {}
                      }
                    }(t, p, l)
                  }
                }
                s || (s = new Ur);
                var d = s.get(t);
                if (d) return d;
                s.set(t, o), io(t) ? t.forEach((function(n) {
                  o.add(sn(n, e, r, n, t, s))
                })) : to(t) && t.forEach((function(n, i) {
                  o.set(i, sn(n, e, r, i, t, s))
                }));
                var v = c ? i : (h ? u ? ea : ta : u ? Io : ko)(t);
                return Ce(v || t, (function(n, i) {
                  v && (n = t[i = n]), Jr(o, i, sn(n, e, r, i, t, s))
                })), o
              }

              function on(t, e, r) {
                var n = r.length;
                if (null == t) return !n;
                for (t = Et(t); n--;) {
                  var a = r[n],
                    s = e[a],
                    o = t[a];
                  if (o === i && !(a in t) || !s(o)) return !1
                }
                return !0
              }

              function ln(t, e, r) {
                if ("function" != typeof t) throw new Mt(a);
                return Ma((function() {
                  t.apply(i, r)
                }), e)
              }

              function un(t, e, r, n) {
                var i = -1,
                  a = Ae,
                  s = !0,
                  o = t.length,
                  l = [],
                  u = e.length;
                if (!o) return l;
                r && (e = Ie(e, Ke(r))), n ? (a = ke, s = !1) : e.length >= 200 && (a = Ze, s = !1, e = new qr(e));
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
              Lr.templateSettings = {
                escape: K,
                evaluate: X,
                interpolate: Z,
                variable: "",
                imports: {
                  _: Lr
                }
              }, Lr.prototype = zr.prototype, Lr.prototype.constructor = Lr, Nr.prototype = Br(zr.prototype), Nr.prototype.constructor = Nr, jr.prototype = Br(zr.prototype), jr.prototype.constructor = jr, Gr.prototype.clear = function() {
                this.__data__ = wr ? wr(null) : {}, this.size = 0
              }, Gr.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
              }, Gr.prototype.get = function(t) {
                var e = this.__data__;
                if (wr) {
                  var r = e[t];
                  return r === s ? i : r
                }
                return Ft.call(e, t) ? e[t] : i
              }, Gr.prototype.has = function(t) {
                var e = this.__data__;
                return wr ? e[t] !== i : Ft.call(e, t)
              }, Gr.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = wr && e === i ? s : e, this
              }, Hr.prototype.clear = function() {
                this.__data__ = [], this.size = 0
              }, Hr.prototype.delete = function(t) {
                var e = this.__data__,
                  r = Qr(e, t);
                return !(r < 0 || (r == e.length - 1 ? e.pop() : $t.call(e, r, 1), --this.size, 0))
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
                  map: new(_r || Hr),
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
              }, Ur.prototype.clear = function() {
                this.__data__ = new Hr, this.size = 0
              }, Ur.prototype.delete = function(t) {
                var e = this.__data__,
                  r = e.delete(t);
                return this.size = e.size, r
              }, Ur.prototype.get = function(t) {
                return this.__data__.get(t)
              }, Ur.prototype.has = function(t) {
                return this.__data__.has(t)
              }, Ur.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof Hr) {
                  var n = r.__data__;
                  if (!_r || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
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

              function xn(t, e) {
                return Te(e, (function(e) {
                  return Ks(t[e])
                }))
              }

              function Sn(t, e) {
                for (var r = 0, n = (e = vi(e, t)).length; null != t && r < n;) t = t[Ra(e[r++])];
                return r && r == n ? t : i
              }

              function _n(t, e, r) {
                var n = e(t);
                return Gs(t) ? n : De(n, r(t))
              }

              function Pn(t) {
                return null == t ? t === i ? "[object Undefined]" : "[object Null]" : Jt && Jt in Et(t) ? function(t) {
                  var e = Ft.call(t, Jt),
                    r = t[Jt];
                  try {
                    t[Jt] = i;
                    var n = !0
                  } catch (t) {}
                  var a = Vt.call(t);
                  return n && (e ? t[Jt] = r : delete t[Jt]), a
                }(t) : function(t) {
                  return Vt.call(t)
                }(t)
              }

              function En(t, e) {
                return t > e
              }

              function Cn(t, e) {
                return null != t && Ft.call(t, e)
              }

              function wn(t, e) {
                return null != t && e in Et(t)
              }

              function Mn(t, e, r) {
                for (var a = r ? ke : Ae, s = t[0].length, o = t.length, l = o, u = n(o), h = 1 / 0, c = []; l--;) {
                  var p = t[l];
                  l && e && (p = Ie(p, Ke(e))), h = vr(p.length, h), u[l] = !r && (e || s >= 120 && p.length >= 120) ? new qr(l && p) : i
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

              function Tn(t, e, r) {
                var n = null == (t = Ea(t, e = vi(e, t))) ? t : t[Ra(Ya(e))];
                return null == n ? i : Pe(n, t, r)
              }

              function An(t) {
                return Qs(t) && Pn(t) == m
              }

              function kn(t, e, r, n, a) {
                return t === e || (null == t || null == e || !Qs(t) && !Qs(e) ? t != t && e != e : function(t, e, r, n, a, s) {
                  var o = Gs(t),
                    l = Gs(e),
                    u = o ? v : ca(t),
                    h = l ? v : ca(e),
                    c = (u = u == m ? E : u) == E,
                    p = (h = h == m ? E : h) == E,
                    f = u == h;
                  if (f && Us(t)) {
                    if (!Us(e)) return !1;
                    o = !0, c = !1
                  }
                  if (f && !c) return s || (s = new Ur), o || oo(t) ? Ji(t, e, r, n, a, s) : function(t, e, r, n, i, a, s) {
                    switch (r) {
                      case D:
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                      case I:
                        return !(t.byteLength != e.byteLength || !a(new Gt(t), new Gt(e)));
                      case g:
                      case y:
                      case P:
                        return Bs(+t, +e);
                      case b:
                        return t.name == e.name && t.message == e.message;
                      case w:
                      case T:
                        return t == e + "";
                      case _:
                        var o = ir;
                      case M:
                        var l = 1 & n;
                        if (o || (o = or), t.size != e.size && !l) return !1;
                        var u = s.get(t);
                        if (u) return u == e;
                        n |= 2, s.set(t, e);
                        var h = Ji(o(t), o(e), n, i, a, s);
                        return s.delete(t), h;
                      case A:
                        if (Rr) return Rr.call(t) == Rr.call(e)
                    }
                    return !1
                  }(t, e, u, r, n, a, s);
                  if (!(1 & r)) {
                    var d = c && Ft.call(t, "__wrapped__"),
                      x = p && Ft.call(e, "__wrapped__");
                    if (d || x) {
                      var S = d ? t.value() : t,
                        C = x ? e.value() : e;
                      return s || (s = new Ur), a(S, C, r, n, s)
                    }
                  }
                  return !!f && (s || (s = new Ur), function(t, e, r, n, a, s) {
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
                        x = e.constructor;
                      b == x || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b && "function" == typeof x && x instanceof x || (d = !1)
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
                for (t = Et(t); a--;) {
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
                    var p = new Ur;
                    if (n) var f = n(h, c, u, t, e, p);
                    if (!(f === i ? kn(c, h, 3, n, p) : f)) return !1
                  }
                }
                return !0
              }

              function Dn(t) {
                return !(!Js(t) || (e = t, Rt && Rt in e)) && (Ks(t) ? zt : mt).test(Va(t));
                var e
              }

              function Fn(t) {
                return "function" == typeof t ? t : null == t ? rl : "object" == typeof t ? Gs(t) ? Bn(t[0], t[1]) : Ln(t) : cl(t)
              }

              function On(t) {
                if (!xa(t)) return dr(t);
                var e = [];
                for (var r in Et(t)) Ft.call(t, r) && "constructor" != r && e.push(r);
                return e
              }

              function Rn(t, e) {
                return t < e
              }

              function Vn(t, e) {
                var r = -1,
                  i = Ws(t) ? n(t.length) : [];
                return hn(t, (function(t, n, a) {
                  i[++r] = e(t, n, a)
                })), i
              }

              function Ln(t) {
                var e = oa(t);
                return 1 == e.length && e[0][2] ? _a(e[0][0], e[0][1]) : function(r) {
                  return r === t || In(r, t, e)
                }
              }

              function Bn(t, e) {
                return ga(t) && Sa(e) ? _a(Ra(t), e) : function(r) {
                  var n = Co(r, t);
                  return n === i && n === e ? wo(r, t) : kn(e, n, 3)
                }
              }

              function zn(t, e, r, n, a) {
                t !== e && vn(e, (function(s, o) {
                  if (a || (a = new Ur), Js(s)) ! function(t, e, r, n, a, s, o) {
                    var l = Ca(t, r),
                      u = Ca(e, r),
                      h = o.get(u);
                    if (h) Zr(t, r, h);
                    else {
                      var c = s ? s(l, u, r + "", t, e, o) : i,
                        p = c === i;
                      if (p) {
                        var f = Gs(u),
                          d = !f && Us(u),
                          m = !f && !d && oo(u);
                        c = u, f || d || m ? Gs(l) ? c = l : qs(l) ? c = wi(l) : d ? (p = !1, c = xi(u, !0)) : m ? (p = !1, c = _i(u, !0)) : c = [] : ro(u) || js(u) ? (c = l, js(l) ? c = vo(l) : Js(l) && !Ks(l) || (c = fa(u))) : p = !1
                      }
                      p && (o.set(u, c), a(c, u, n, s, o), o.delete(u)), Zr(t, r, c)
                    }
                  }(t, e, o, r, zn, n, a);
                  else {
                    var l = n ? n(Ca(t, o), s, o + "", t, e, a) : i;
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
                    return Sn(e, 1 === t.length ? t[0] : t)
                  } : t
                })) : [rl];
                var n = -1;
                e = Ie(e, Ke(aa()));
                var i = Vn(t, (function(t, r, i) {
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
                          var l = Pi(i[n], a[n]);
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
                    o = Sn(t, s);
                  r(o, s) && Xn(a, vi(s, t), o)
                }
                return a
              }

              function Hn(t, e, r, n) {
                var i = n ? Ne : ze,
                  a = -1,
                  s = e.length,
                  o = t;
                for (t === e && (e = wi(e)), r && (o = Ie(t, Ke(r))); ++a < s;)
                  for (var l = 0, u = e[a], h = r ? r(u) : u;
                    (l = i(o, h, l, n)) > -1;) o !== t && $t.call(o, l, 1), $t.call(t, l, 1);
                return t
              }

              function Wn(t, e) {
                for (var r = t ? e.length : 0, n = r - 1; r--;) {
                  var i = e[r];
                  if (r == n || i !== a) {
                    var a = i;
                    ma(i) ? $t.call(t, i, 1) : li(t, i)
                  }
                }
                return t
              }

              function qn(t, e) {
                return t + fe(br() * (e - t + 1))
              }

              function Un(t, e) {
                var r = "";
                if (!t || e < 1 || e > c) return r;
                do {
                  e % 2 && (r += t), (e = fe(e / 2)) && (t += t)
                } while (e);
                return r
              }

              function $n(t, e) {
                return Ta(Pa(t, e, rl), t + "")
              }

              function Yn(t) {
                return Yr(zo(t))
              }

              function Kn(t, e) {
                var r = zo(t);
                return Ia(r, an(e, 0, r.length))
              }

              function Xn(t, e, r, n) {
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
              var Zn = Mr ? function(t, e) {
                  return Mr.set(t, e), t
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
                  if (!r || !Bs(o, l)) {
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
                if (so(t)) return Vr ? Vr.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
              }

              function oi(t, e, r) {
                var n = -1,
                  i = Ae,
                  a = t.length,
                  s = !0,
                  o = [],
                  l = o;
                if (r) s = !1, i = ke;
                else if (a >= 200) {
                  var u = e ? null : Ui(t);
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
                return null == (t = Ea(t, e = vi(e, t))) || delete t[Ra(Ya(e))]
              }

              function ui(t, e, r, n) {
                return Xn(t, e, r(Sn(t, e)), n)
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
              var gi = $n;

              function yi(t, e, r) {
                var n = t.length;
                return r = r === i ? n : r, !e && r >= n ? t : ti(t, e, r)
              }
              var bi = se || function(t) {
                return ce.clearTimeout(t)
              };

              function xi(t, e) {
                if (e) return t.slice();
                var r = t.length,
                  n = Ht ? Ht(r) : new t.constructor(r);
                return t.copy(n), n
              }

              function Si(t) {
                var e = new t.constructor(t.byteLength);
                return new Gt(e).set(new Gt(t)), e
              }

              function _i(t, e) {
                var r = e ? Si(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.length)
              }

              function Pi(t, e) {
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

              function Ei(t, e, r, i) {
                for (var a = -1, s = t.length, o = r.length, l = -1, u = e.length, h = mr(s - o, 0), c = n(u + h), p = !i; ++l < u;) c[l] = e[l];
                for (; ++a < o;)(p || a < s) && (c[r[a]] = t[a]);
                for (; h--;) c[l++] = t[a++];
                return c
              }

              function Ci(t, e, r, i) {
                for (var a = -1, s = t.length, o = -1, l = r.length, u = -1, h = e.length, c = mr(s - l, 0), p = n(c + h), f = !i; ++a < c;) p[a] = t[a];
                for (var d = a; ++u < h;) p[d + u] = e[u];
                for (; ++o < l;)(f || a < s) && (p[d + r[o]] = t[a++]);
                return p
              }

              function wi(t, e) {
                var r = -1,
                  i = t.length;
                for (e || (e = n(i)); ++r < i;) e[r] = t[r];
                return e
              }

              function Mi(t, e, r, n) {
                var a = !r;
                r || (r = {});
                for (var s = -1, o = e.length; ++s < o;) {
                  var l = e[s],
                    u = n ? n(r[l], t[l], l, r, t) : i;
                  u === i && (u = t[l]), a ? rn(r, l, u) : Jr(r, l, u)
                }
                return r
              }

              function Ti(t, e) {
                return function(r, n) {
                  var i = Gs(r) ? Ee : tn,
                    a = e ? e() : {};
                  return i(r, t, aa(n, 2), a)
                }
              }

              function Ai(t) {
                return $n((function(e, r) {
                  var n = -1,
                    a = r.length,
                    s = a > 1 ? r[a - 1] : i,
                    o = a > 2 ? r[2] : i;
                  for (s = t.length > 3 && "function" == typeof s ? (a--, s) : i, o && va(r[0], r[1], o) && (s = a < 3 ? i : s, a = 1), e = Et(e); ++n < a;) {
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
                  for (var i = r.length, a = e ? i : -1, s = Et(r);
                    (e ? a-- : ++a < i) && !1 !== n(s[a], a, s););
                  return r
                }
              }

              function Ii(t) {
                return function(e, r, n) {
                  for (var i = -1, a = Et(e), s = n(e), o = s.length; o--;) {
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
                  return Fe(Xo(Go(e).replace(Xt, "")), t, "")
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
                  var r = Br(t.prototype),
                    n = t.apply(r, e);
                  return Js(n) ? n : r
                }
              }

              function Ri(t) {
                return function(e, r, n) {
                  var a = Et(e);
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

              function Vi(t) {
                return Qi((function(e) {
                  var r = e.length,
                    n = r,
                    s = Nr.prototype.thru;
                  for (t && e.reverse(); n--;) {
                    var o = e[n];
                    if ("function" != typeof o) throw new Mt(a);
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

              function Li(t, e, r, a, s, o, l, h, c, p) {
                var f = e & u,
                  d = 1 & e,
                  m = 2 & e,
                  v = 24 & e,
                  g = 512 & e,
                  y = m ? i : Oi(t);
                return function u() {
                  for (var b = arguments.length, x = n(b), S = b; S--;) x[S] = arguments[S];
                  if (v) var _ = ia(u),
                    P = function(t, e) {
                      for (var r = t.length, n = 0; r--;) t[r] === e && ++n;
                      return n
                    }(x, _);
                  if (a && (x = Ei(x, a, s, v)), o && (x = Ci(x, o, l, v)), b -= P, v && b < p) {
                    var E = sr(x, _);
                    return Wi(t, e, Li, u.placeholder, r, x, E, h, c, p - b)
                  }
                  var C = d ? r : this,
                    w = m ? C[t] : t;
                  return b = x.length, h ? x = function(t, e) {
                    for (var r = t.length, n = vr(e.length, r), a = wi(t); n--;) {
                      var s = e[n];
                      t[n] = ma(s, r) ? a[s] : i
                    }
                    return t
                  }(x, h) : g && b > 1 && x.reverse(), f && c < b && (x.length = c), this && this !== ce && this instanceof u && (w = y || Oi(w)), w.apply(C, x)
                }
              }

              function Bi(t, e) {
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
                  return e = Ie(e, Ke(aa())), $n((function(r) {
                    var n = this;
                    return t(e, (function(t) {
                      return Pe(t, n, r)
                    }))
                  }))
                }))
              }

              function ji(t, e) {
                var r = (e = e === i ? " " : si(e)).length;
                if (r < 2) return r ? Un(e, t) : e;
                var n = Un(e, pe(t / ur(e)));
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
                return ya(t) && wa(d, f), d.placeholder = n, Aa(d, t, e)
              }

              function qi(t) {
                var e = Pt[t];
                return function(t, r) {
                  if (t = mo(t), (r = null == r ? 0 : vr(po(r), 292)) && Ve(t)) {
                    var n = (go(t) + "e").split("e");
                    return +((n = (go(e(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                  }
                  return e(t)
                }
              }
              var Ui = Er && 1 / or(new Er([, -0]))[1] == h ? function(t) {
                return new Er(t)
              } : ol;

              function $i(t) {
                return function(e) {
                  var r = ca(e);
                  return r == _ ? ir(e) : r == M ? lr(e) : function(t, e) {
                    return Ie(e, (function(e) {
                      return [e, t[e]]
                    }))
                  }(e, t(e))
                }
              }

              function Yi(t, e, r, s, h, c, p, f) {
                var d = 2 & e;
                if (!d && "function" != typeof t) throw new Mt(a);
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
                      t[3] = h ? Ei(h, l, e[4]) : l, t[4] = h ? sr(t[3], o) : e[4]
                    }(l = e[5]) && (h = t[5], t[5] = h ? Ci(h, l, e[6]) : l, t[6] = h ? sr(t[5], o) : e[6]), (l = e[7]) && (t[7] = l), n & u && (t[8] = null == t[8] ? e[8] : vr(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i
                  }(b, y), t = b[0], e = b[1], r = b[2], s = b[3], h = b[4], !(f = b[9] = b[9] === i ? d ? 0 : t.length : mr(b[9] - m, 0)) && 24 & e && (e &= -25), e && 1 != e) x = 8 == e || 16 == e ? function(t, e, r) {
                  var a = Oi(t);
                  return function s() {
                    for (var o = arguments.length, l = n(o), u = o, h = ia(s); u--;) l[u] = arguments[u];
                    var c = o < 3 && l[0] !== h && l[o - 1] !== h ? [] : sr(l, h);
                    return (o -= c.length) < r ? Wi(t, e, Li, s.placeholder, i, l, c, i, i, r - o) : Pe(this && this !== ce && this instanceof s ? a : t, this, l)
                  }
                }(t, e, f) : e != l && 33 != e || h.length ? Li.apply(i, b) : function(t, e, r, i) {
                  var a = 1 & e,
                    s = Oi(t);
                  return function e() {
                    for (var o = -1, l = arguments.length, u = -1, h = i.length, c = n(h + l), p = this && this !== ce && this instanceof e ? s : t; ++u < h;) c[u] = i[u];
                    for (; l--;) c[u++] = arguments[++o];
                    return Pe(p, a ? r : this, c)
                  }
                }(t, e, r, s);
                else var x = function(t, e, r) {
                  var n = 1 & e,
                    i = Oi(t);
                  return function e() {
                    return (this && this !== ce && this instanceof e ? i : t).apply(n ? r : this, arguments)
                  }
                }(t, e, r);
                return Aa((y ? Zn : wa)(x, b), t, e)
              }

              function Ki(t, e, r, n) {
                return t === i || Bs(t, kt[r]) && !Ft.call(n, r) ? e : t
              }

              function Xi(t, e, r, n, a, s) {
                return Js(t) && Js(e) && (s.set(e, t), zn(t, e, i, Xi, s), s.delete(e)), t
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
                return Ta(Pa(t, i, Ha), t + "")
              }

              function ta(t) {
                return _n(t, ko, ua)
              }

              function ea(t) {
                return _n(t, Io, ha)
              }
              var ra = Mr ? function(t) {
                return Mr.get(t)
              } : ol;

              function na(t) {
                for (var e = t.name + "", r = Tr[e], n = Ft.call(Tr, e) ? r.length : 0; n--;) {
                  var i = r[n],
                    a = i.func;
                  if (null == a || a == t) return i.name
                }
                return e
              }

              function ia(t) {
                return (Ft.call(Lr, "placeholder") ? Lr : t).placeholder
              }

              function aa() {
                var t = Lr.iteratee || nl;
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
                  e[r] = [n, i, Sa(i)]
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
                  return null == t ? [] : (t = Et(t), Te(me(t), (function(e) {
                    return Ut.call(t, e)
                  })))
                } : dl,
                ha = me ? function(t) {
                  for (var e = []; t;) De(e, ua(t)), t = Wt(t);
                  return e
                } : dl,
                ca = Pn;

              function pa(t, e, r) {
                for (var n = -1, i = (e = vi(e, t)).length, a = !1; ++n < i;) {
                  var s = Ra(e[n]);
                  if (!(a = null != t && r(t, s))) break;
                  t = t[s]
                }
                return a || ++n != i ? a : !!(i = null == t ? 0 : t.length) && Zs(i) && ma(s, i) && (Gs(t) || js(t))
              }

              function fa(t) {
                return "function" != typeof t.constructor || xa(t) ? {} : Br(Wt(t))
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
                return !!("number" == n ? Ws(r) && ma(e, r.length) : "string" == n && e in r) && Bs(r[e], t)
              }

              function ga(t, e) {
                if (Gs(t)) return !1;
                var r = typeof t;
                return !("number" != r && "symbol" != r && "boolean" != r && null != t && !so(t)) || Q.test(t) || !J.test(t) || null != e && t in Et(e)
              }

              function ya(t) {
                var e = na(t),
                  r = Lr[e];
                if ("function" != typeof r || !(e in jr.prototype)) return !1;
                if (t === r) return !0;
                var n = ra(r);
                return !!n && t === n[0]
              }(Sr && ca(new Sr(new ArrayBuffer(1))) != D || _r && ca(new _r) != _ || Pr && ca(Pr.resolve()) != C || Er && ca(new Er) != M || Cr && ca(new Cr) != k) && (ca = function(t) {
                var e = Pn(t),
                  r = e == E ? t.constructor : i,
                  n = r ? Va(r) : "";
                if (n) switch (n) {
                  case Ar:
                    return D;
                  case kr:
                    return _;
                  case Ir:
                    return C;
                  case Dr:
                    return M;
                  case Fr:
                    return k
                }
                return e
              });
              var ba = It ? Ks : ml;

              function xa(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || kt)
              }

              function Sa(t) {
                return t == t && !Js(t)
              }

              function _a(t, e) {
                return function(r) {
                  return null != r && r[t] === e && (e !== i || t in Et(r))
                }
              }

              function Pa(t, e, r) {
                return e = mr(e === i ? t.length - 1 : e, 0),
                  function() {
                    for (var i = arguments, a = -1, s = mr(i.length - e, 0), o = n(s); ++a < s;) o[a] = i[e + a];
                    a = -1;
                    for (var l = n(e + 1); ++a < e;) l[a] = i[a];
                    return l[e] = r(o), Pe(t, this, l)
                  }
              }

              function Ea(t, e) {
                return e.length < 2 ? t : Sn(t, ti(e, 0, -1))
              }

              function Ca(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
              }
              var wa = ka(Zn),
                Ma = he || function(t, e) {
                  return ce.setTimeout(t, e)
                },
                Ta = ka(Jn);

              function Aa(t, e, r) {
                var n = e + "";
                return Ta(t, function(t, e) {
                  var r = e.length;
                  if (!r) return t;
                  var n = r - 1;
                  return e[n] = (r > 1 ? "& " : "") + e[n], e = e.join(r > 2 ? ", " : " "), t.replace(at, "{\n/* [wrapped with " + e + "] */\n")
                }(n, function(t, e) {
                  return Ce(d, (function(r) {
                    var n = "_." + r[0];
                    e & r[1] && !Ae(t, n) && t.push(n)
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

              function Va(t) {
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

              function La(t) {
                if (t instanceof jr) return t.clone();
                var e = new Nr(t.__wrapped__, t.__chain__);
                return e.__actions__ = wi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
              }
              var Ba = $n((function(t, e) {
                  return qs(t) ? un(t, mn(e, 1, qs, !0)) : []
                })),
                za = $n((function(t, e) {
                  var r = Ya(e);
                  return qs(r) && (r = i), qs(t) ? un(t, mn(e, 1, qs, !0), aa(r, 2)) : []
                })),
                Na = $n((function(t, e) {
                  var r = Ya(e);
                  return qs(r) && (r = i), qs(t) ? un(t, mn(e, 1, qs, !0), i, r) : []
                }));

              function ja(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : po(r);
                return i < 0 && (i = mr(n + i, 0)), Be(t, aa(e, 3), i)
              }

              function Ga(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var a = n - 1;
                return r !== i && (a = po(r), a = r < 0 ? mr(n + a, 0) : vr(a, n - 1)), Be(t, aa(e, 3), a, !0)
              }

              function Ha(t) {
                return null != t && t.length ? mn(t, 1) : []
              }

              function Wa(t) {
                return t && t.length ? t[0] : i
              }
              var qa = $n((function(t) {
                  var e = Ie(t, di);
                  return e.length && e[0] === t[0] ? Mn(e) : []
                })),
                Ua = $n((function(t) {
                  var e = Ya(t),
                    r = Ie(t, di);
                  return e === Ya(r) ? e = i : r.pop(), r.length && r[0] === t[0] ? Mn(r, aa(e, 2)) : []
                })),
                $a = $n((function(t) {
                  var e = Ya(t),
                    r = Ie(t, di);
                  return (e = "function" == typeof e ? e : i) && r.pop(), r.length && r[0] === t[0] ? Mn(r, i, e) : []
                }));

              function Ya(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : i
              }
              var Ka = $n(Xa);

              function Xa(t, e) {
                return t && t.length && e && e.length ? Hn(t, e) : t
              }
              var Za = Qi((function(t, e) {
                var r = null == t ? 0 : t.length,
                  n = nn(t, e);
                return Wn(t, Ie(e, (function(t) {
                  return ma(t, r) ? +t : t
                })).sort(Pi)), n
              }));

              function Ja(t) {
                return null == t ? t : xr.call(t)
              }
              var Qa = $n((function(t) {
                  return oi(mn(t, 1, qs, !0))
                })),
                ts = $n((function(t) {
                  var e = Ya(t);
                  return qs(e) && (e = i), oi(mn(t, 1, qs, !0), aa(e, 2))
                })),
                es = $n((function(t) {
                  var e = Ya(t);
                  return e = "function" == typeof e ? e : i, oi(mn(t, 1, qs, !0), i, e)
                }));

              function rs(t) {
                if (!t || !t.length) return [];
                var e = 0;
                return t = Te(t, (function(t) {
                  if (qs(t)) return e = mr(t.length, e), !0
                })), $e(e, (function(e) {
                  return Ie(t, He(e))
                }))
              }

              function ns(t, e) {
                if (!t || !t.length) return [];
                var r = rs(t);
                return null == e ? r : Ie(r, (function(t) {
                  return Pe(e, i, t)
                }))
              }
              var is = $n((function(t, e) {
                  return qs(t) ? un(t, e) : []
                })),
                as = $n((function(t) {
                  return pi(Te(t, qs))
                })),
                ss = $n((function(t) {
                  var e = Ya(t);
                  return qs(e) && (e = i), pi(Te(t, qs), aa(e, 2))
                })),
                os = $n((function(t) {
                  var e = Ya(t);
                  return e = "function" == typeof e ? e : i, pi(Te(t, qs), i, e)
                })),
                ls = $n(rs),
                us = $n((function(t) {
                  var e = t.length,
                    r = e > 1 ? t[e - 1] : i;
                  return r = "function" == typeof r ? (t.pop(), r) : i, ns(t, r)
                }));

              function hs(t) {
                var e = Lr(t);
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
                fs = Ti((function(t, e, r) {
                  Ft.call(t, r) ? ++t[r] : rn(t, r, 1)
                })),
                ds = Ri(ja),
                ms = Ri(Ga);

              function vs(t, e) {
                return (Gs(t) ? Ce : hn)(t, aa(e, 3))
              }

              function gs(t, e) {
                return (Gs(t) ? we : cn)(t, aa(e, 3))
              }
              var ys = Ti((function(t, e, r) {
                  Ft.call(t, r) ? t[r].push(e) : rn(t, r, [e])
                })),
                bs = $n((function(t, e, r) {
                  var i = -1,
                    a = "function" == typeof e,
                    s = Ws(t) ? n(t.length) : [];
                  return hn(t, (function(t) {
                    s[++i] = a ? Pe(e, t, r) : Tn(t, e, r)
                  })), s
                })),
                xs = Ti((function(t, e, r) {
                  rn(t, r, e)
                }));

              function Ss(t, e) {
                return (Gs(t) ? Ie : Vn)(t, aa(e, 3))
              }
              var _s = Ti((function(t, e, r) {
                  t[r ? 0 : 1].push(e)
                }), (function() {
                  return [
                    [],
                    []
                  ]
                })),
                Ps = $n((function(t, e) {
                  if (null == t) return [];
                  var r = e.length;
                  return r > 1 && va(t, e[0], e[1]) ? e = [] : r > 2 && va(e[0], e[1], e[2]) && (e = [e[0]]), jn(t, mn(e, 1), [])
                })),
                Es = ue || function() {
                  return ce.Date.now()
                };

              function Cs(t, e, r) {
                return e = r ? i : e, e = t && null == e ? t.length : e, Yi(t, u, i, i, i, i, e)
              }

              function ws(t, e) {
                var r;
                if ("function" != typeof e) throw new Mt(a);
                return t = po(t),
                  function() {
                    return --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = i), r
                  }
              }
              var Ms = $n((function(t, e, r) {
                  var n = 1;
                  if (r.length) {
                    var i = sr(r, ia(Ms));
                    n |= l
                  }
                  return Yi(t, n, e, r, i)
                })),
                Ts = $n((function(t, e, r) {
                  var n = 3;
                  if (r.length) {
                    var i = sr(r, ia(Ts));
                    n |= l
                  }
                  return Yi(e, n, t, r, i)
                }));

              function As(t, e, r) {
                var n, s, o, l, u, h, c = 0,
                  p = !1,
                  f = !1,
                  d = !0;
                if ("function" != typeof t) throw new Mt(a);

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
                  var t = Es();
                  if (v(t)) return y(t);
                  u = Ma(g, function(t) {
                    var r = e - (t - h);
                    return f ? vr(r, o - (t - c)) : r
                  }(t))
                }

                function y(t) {
                  return u = i, d && n ? m(t) : (n = s = i, l)
                }

                function b() {
                  var t = Es(),
                    r = v(t);
                  if (n = arguments, s = this, h = t, r) {
                    if (u === i) return function(t) {
                      return c = t, u = Ma(g, e), p ? m(t) : l
                    }(h);
                    if (f) return bi(u), u = Ma(g, e), m(h)
                  }
                  return u === i && (u = Ma(g, e)), l
                }
                return e = mo(e) || 0, Js(r) && (p = !!r.leading, o = (f = "maxWait" in r) ? mr(mo(r.maxWait) || 0, e) : o, d = "trailing" in r ? !!r.trailing : d), b.cancel = function() {
                  u !== i && bi(u), c = 0, n = h = s = u = i
                }, b.flush = function() {
                  return u === i ? l : y(Es())
                }, b
              }
              var ks = $n((function(t, e) {
                  return ln(t, 1, e)
                })),
                Is = $n((function(t, e, r) {
                  return ln(t, mo(e) || 0, r)
                }));

              function Ds(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new Mt(a);
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
                if ("function" != typeof t) throw new Mt(a);
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
                  var r = (e = 1 == e.length && Gs(e[0]) ? Ie(e[0], Ke(aa())) : Ie(mn(e, 1), Ke(aa()))).length;
                  return $n((function(n) {
                    for (var i = -1, a = vr(n.length, r); ++i < a;) n[i] = e[i].call(this, n[i]);
                    return Pe(t, this, n)
                  }))
                })),
                Rs = $n((function(t, e) {
                  var r = sr(e, ia(Rs));
                  return Yi(t, l, i, e, r)
                })),
                Vs = $n((function(t, e) {
                  var r = sr(e, ia(Vs));
                  return Yi(t, 64, i, e, r)
                })),
                Ls = Qi((function(t, e) {
                  return Yi(t, 256, i, i, i, e)
                }));

              function Bs(t, e) {
                return t === e || t != t && e != e
              }
              var zs = Hi(En),
                Ns = Hi((function(t, e) {
                  return t >= e
                })),
                js = An(function() {
                  return arguments
                }()) ? An : function(t) {
                  return Qs(t) && Ft.call(t, "callee") && !Ut.call(t, "callee")
                },
                Gs = n.isArray,
                Hs = ge ? Ke(ge) : function(t) {
                  return Qs(t) && Pn(t) == I
                };

              function Ws(t) {
                return null != t && Zs(t.length) && !Ks(t)
              }

              function qs(t) {
                return Qs(t) && Ws(t)
              }
              var Us = ve || ml,
                $s = ye ? Ke(ye) : function(t) {
                  return Qs(t) && Pn(t) == y
                };

              function Ys(t) {
                if (!Qs(t)) return !1;
                var e = Pn(t);
                return e == b || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !ro(t)
              }

              function Ks(t) {
                if (!Js(t)) return !1;
                var e = Pn(t);
                return e == x || e == S || "[object AsyncFunction]" == e || "[object Proxy]" == e
              }

              function Xs(t) {
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
              var to = be ? Ke(be) : function(t) {
                return Qs(t) && ca(t) == _
              };

              function eo(t) {
                return "number" == typeof t || Qs(t) && Pn(t) == P
              }

              function ro(t) {
                if (!Qs(t) || Pn(t) != E) return !1;
                var e = Wt(t);
                if (null === e) return !0;
                var r = Ft.call(e, "constructor") && e.constructor;
                return "function" == typeof r && r instanceof r && Dt.call(r) == Lt
              }
              var no = xe ? Ke(xe) : function(t) {
                  return Qs(t) && Pn(t) == w
                },
                io = Se ? Ke(Se) : function(t) {
                  return Qs(t) && ca(t) == M
                };

              function ao(t) {
                return "string" == typeof t || !Gs(t) && Qs(t) && Pn(t) == T
              }

              function so(t) {
                return "symbol" == typeof t || Qs(t) && Pn(t) == A
              }
              var oo = _e ? Ke(_e) : function(t) {
                  return Qs(t) && Zs(t.length) && !!ie[Pn(t)]
                },
                lo = Hi(Rn),
                uo = Hi((function(t, e) {
                  return t <= e
                }));

              function ho(t) {
                if (!t) return [];
                if (Ws(t)) return ao(t) ? hr(t) : wi(t);
                if (Kt && t[Kt]) return function(t) {
                  for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                  return r
                }(t[Kt]());
                var e = ca(t);
                return (e == _ ? ir : e == M ? or : zo)(t)
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
                return Mi(t, Io(t))
              }

              function go(t) {
                return null == t ? "" : si(t)
              }
              var yo = Ai((function(t, e) {
                  if (xa(e) || Ws(e)) Mi(e, ko(e), t);
                  else
                    for (var r in e) Ft.call(e, r) && Jr(t, r, e[r])
                })),
                bo = Ai((function(t, e) {
                  Mi(e, Io(e), t)
                })),
                xo = Ai((function(t, e, r, n) {
                  Mi(e, Io(e), t, n)
                })),
                So = Ai((function(t, e, r, n) {
                  Mi(e, ko(e), t, n)
                })),
                _o = Qi(nn),
                Po = $n((function(t, e) {
                  t = Et(t);
                  var r = -1,
                    n = e.length,
                    a = n > 2 ? e[2] : i;
                  for (a && va(e[0], e[1], a) && (n = 1); ++r < n;)
                    for (var s = e[r], o = Io(s), l = -1, u = o.length; ++l < u;) {
                      var h = o[l],
                        c = t[h];
                      (c === i || Bs(c, kt[h]) && !Ft.call(t, h)) && (t[h] = s[h])
                    }
                  return t
                })),
                Eo = $n((function(t) {
                  return t.push(i, Xi), Pe(Fo, i, t)
                }));

              function Co(t, e, r) {
                var n = null == t ? i : Sn(t, e);
                return n === i ? r : n
              }

              function wo(t, e) {
                return null != t && pa(t, e, wn)
              }
              var Mo = Bi((function(t, e, r) {
                  null != e && "function" != typeof e.toString && (e = Vt.call(e)), t[e] = r
                }), Qo(rl)),
                To = Bi((function(t, e, r) {
                  null != e && "function" != typeof e.toString && (e = Vt.call(e)), Ft.call(t, e) ? t[e].push(r) : t[e] = [r]
                }), aa),
                Ao = $n(Tn);

              function ko(t) {
                return Ws(t) ? $r(t) : On(t)
              }

              function Io(t) {
                return Ws(t) ? $r(t, !0) : function(t) {
                  if (!Js(t)) return function(t) {
                    var e = [];
                    if (null != t)
                      for (var r in Et(t)) e.push(r);
                    return e
                  }(t);
                  var e = xa(t),
                    r = [];
                  for (var n in t)("constructor" != n || !e && Ft.call(t, n)) && r.push(n);
                  return r
                }(t)
              }
              var Do = Ai((function(t, e, r) {
                  zn(t, e, r)
                })),
                Fo = Ai((function(t, e, r, n) {
                  zn(t, e, r, n)
                })),
                Oo = Qi((function(t, e) {
                  var r = {};
                  if (null == t) return r;
                  var n = !1;
                  e = Ie(e, (function(e) {
                    return e = vi(e, t), n || (n = e.length > 1), e
                  })), Mi(t, ea(t), r), n && (r = sn(r, 7, Zi));
                  for (var i = e.length; i--;) li(r, e[i]);
                  return r
                })),
                Ro = Qi((function(t, e) {
                  return null == t ? {} : function(t, e) {
                    return Gn(t, e, (function(e, r) {
                      return wo(t, r)
                    }))
                  }(t, e)
                }));

              function Vo(t, e) {
                if (null == t) return {};
                var r = Ie(ea(t), (function(t) {
                  return [t]
                }));
                return e = aa(e), Gn(t, r, (function(t, r) {
                  return e(t, r[0])
                }))
              }
              var Lo = $i(ko),
                Bo = $i(Io);

              function zo(t) {
                return null == t ? [] : Xe(t, ko(t))
              }
              var No = Fi((function(t, e, r) {
                return e = e.toLowerCase(), t + (r ? jo(e) : e)
              }));

              function jo(t) {
                return Ko(go(t).toLowerCase())
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
                Uo = Fi((function(t, e, r) {
                  return t + (r ? "_" : "") + e.toLowerCase()
                })),
                $o = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + Ko(e)
                })),
                Yo = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + e.toUpperCase()
                })),
                Ko = Di("toUpperCase");

              function Xo(t, e, r) {
                return t = go(t), (e = r ? i : e) === i ? function(t) {
                  return ee.test(t)
                }(t) ? function(t) {
                  return t.match(Qt) || []
                }(t) : function(t) {
                  return t.match(lt) || []
                }(t) : t.match(e) || []
              }
              var Zo = $n((function(t, e) {
                  try {
                    return Pe(t, i, e)
                  } catch (t) {
                    return Ys(t) ? t : new St(t)
                  }
                })),
                Jo = Qi((function(t, e) {
                  return Ce(e, (function(e) {
                    e = Ra(e), rn(t, e, Ms(t[e], t))
                  })), t
                }));

              function Qo(t) {
                return function() {
                  return t
                }
              }
              var tl = Vi(),
                el = Vi(!0);

              function rl(t) {
                return t
              }

              function nl(t) {
                return Fn("function" == typeof t ? t : sn(t, 1))
              }
              var il = $n((function(t, e) {
                  return function(r) {
                    return Tn(r, t, e)
                  }
                })),
                al = $n((function(t, e) {
                  return function(r) {
                    return Tn(t, r, e)
                  }
                }));

              function sl(t, e, r) {
                var n = ko(e),
                  i = xn(e, n);
                null != r || Js(e) && (i.length || !n.length) || (r = e, e = t, t = this, i = xn(e, ko(e)));
                var a = !(Js(r) && "chain" in r && !r.chain),
                  s = Ks(t);
                return Ce(i, (function(r) {
                  var n = e[r];
                  t[r] = n, s && (t.prototype[r] = function() {
                    var e = this.__chain__;
                    if (a || e) {
                      var r = t(this.__wrapped__);
                      return (r.__actions__ = wi(this.__actions__)).push({
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
                ul = Ni(Me),
                hl = Ni(Re);

              function cl(t) {
                return ga(t) ? He(Ra(t)) : function(t) {
                  return function(e) {
                    return Sn(e, t)
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
                xl = qi("floor"),
                Sl = zi((function(t, e) {
                  return t * e
                }), 1),
                _l = qi("round"),
                Pl = zi((function(t, e) {
                  return t - e
                }), 0);
              return Lr.after = function(t, e) {
                if ("function" != typeof e) throw new Mt(a);
                return t = po(t),
                  function() {
                    if (--t < 1) return e.apply(this, arguments)
                  }
              }, Lr.ary = Cs, Lr.assign = yo, Lr.assignIn = bo, Lr.assignInWith = xo, Lr.assignWith = So, Lr.at = _o, Lr.before = ws, Lr.bind = Ms, Lr.bindAll = Jo, Lr.bindKey = Ts, Lr.castArray = function() {
                if (!arguments.length) return [];
                var t = arguments[0];
                return Gs(t) ? t : [t]
              }, Lr.chain = hs, Lr.chunk = function(t, e, r) {
                e = (r ? va(t, e, r) : e === i) ? 1 : mr(po(e), 0);
                var a = null == t ? 0 : t.length;
                if (!a || e < 1) return [];
                for (var s = 0, o = 0, l = n(pe(a / e)); s < a;) l[o++] = ti(t, s, s += e);
                return l
              }, Lr.compact = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = 0, i = []; ++e < r;) {
                  var a = t[e];
                  a && (i[n++] = a)
                }
                return i
              }, Lr.concat = function() {
                var t = arguments.length;
                if (!t) return [];
                for (var e = n(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                return De(Gs(r) ? wi(r) : [r], mn(e, 1))
              }, Lr.cond = function(t) {
                var e = null == t ? 0 : t.length,
                  r = aa();
                return t = e ? Ie(t, (function(t) {
                  if ("function" != typeof t[1]) throw new Mt(a);
                  return [r(t[0]), t[1]]
                })) : [], $n((function(r) {
                  for (var n = -1; ++n < e;) {
                    var i = t[n];
                    if (Pe(i[0], this, r)) return Pe(i[1], this, r)
                  }
                }))
              }, Lr.conforms = function(t) {
                return function(t) {
                  var e = ko(t);
                  return function(r) {
                    return on(r, t, e)
                  }
                }(sn(t, 1))
              }, Lr.constant = Qo, Lr.countBy = fs, Lr.create = function(t, e) {
                var r = Br(t);
                return null == e ? r : en(r, e)
              }, Lr.curry = function t(e, r, n) {
                var a = Yi(e, 8, i, i, i, i, i, r = n ? i : r);
                return a.placeholder = t.placeholder, a
              }, Lr.curryRight = function t(e, r, n) {
                var a = Yi(e, 16, i, i, i, i, i, r = n ? i : r);
                return a.placeholder = t.placeholder, a
              }, Lr.debounce = As, Lr.defaults = Po, Lr.defaultsDeep = Eo, Lr.defer = ks, Lr.delay = Is, Lr.difference = Ba, Lr.differenceBy = za, Lr.differenceWith = Na, Lr.drop = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, (e = r || e === i ? 1 : po(e)) < 0 ? 0 : e, n) : []
              }, Lr.dropRight = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, 0, (e = n - (e = r || e === i ? 1 : po(e))) < 0 ? 0 : e) : []
              }, Lr.dropRightWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3), !0, !0) : []
              }, Lr.dropWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3), !0) : []
              }, Lr.fill = function(t, e, r, n) {
                var a = null == t ? 0 : t.length;
                return a ? (r && "number" != typeof r && va(t, e, r) && (r = 0, n = a), function(t, e, r, n) {
                  var a = t.length;
                  for ((r = po(r)) < 0 && (r = -r > a ? 0 : a + r), (n = n === i || n > a ? a : po(n)) < 0 && (n += a), n = r > n ? 0 : fo(n); r < n;) t[r++] = e;
                  return t
                }(t, e, r, n)) : []
              }, Lr.filter = function(t, e) {
                return (Gs(t) ? Te : dn)(t, aa(e, 3))
              }, Lr.flatMap = function(t, e) {
                return mn(Ss(t, e), 1)
              }, Lr.flatMapDeep = function(t, e) {
                return mn(Ss(t, e), h)
              }, Lr.flatMapDepth = function(t, e, r) {
                return r = r === i ? 1 : po(r), mn(Ss(t, e), r)
              }, Lr.flatten = Ha, Lr.flattenDeep = function(t) {
                return null != t && t.length ? mn(t, h) : []
              }, Lr.flattenDepth = function(t, e) {
                return null != t && t.length ? mn(t, e = e === i ? 1 : po(e)) : []
              }, Lr.flip = function(t) {
                return Yi(t, 512)
              }, Lr.flow = tl, Lr.flowRight = el, Lr.fromPairs = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = {}; ++e < r;) {
                  var i = t[e];
                  n[i[0]] = i[1]
                }
                return n
              }, Lr.functions = function(t) {
                return null == t ? [] : xn(t, ko(t))
              }, Lr.functionsIn = function(t) {
                return null == t ? [] : xn(t, Io(t))
              }, Lr.groupBy = ys, Lr.initial = function(t) {
                return null != t && t.length ? ti(t, 0, -1) : []
              }, Lr.intersection = qa, Lr.intersectionBy = Ua, Lr.intersectionWith = $a, Lr.invert = Mo, Lr.invertBy = To, Lr.invokeMap = bs, Lr.iteratee = nl, Lr.keyBy = xs, Lr.keys = ko, Lr.keysIn = Io, Lr.map = Ss, Lr.mapKeys = function(t, e) {
                var r = {};
                return e = aa(e, 3), yn(t, (function(t, n, i) {
                  rn(r, e(t, n, i), t)
                })), r
              }, Lr.mapValues = function(t, e) {
                var r = {};
                return e = aa(e, 3), yn(t, (function(t, n, i) {
                  rn(r, n, e(t, n, i))
                })), r
              }, Lr.matches = function(t) {
                return Ln(sn(t, 1))
              }, Lr.matchesProperty = function(t, e) {
                return Bn(t, sn(e, 1))
              }, Lr.memoize = Ds, Lr.merge = Do, Lr.mergeWith = Fo, Lr.method = il, Lr.methodOf = al, Lr.mixin = sl, Lr.negate = Fs, Lr.nthArg = function(t) {
                return t = po(t), $n((function(e) {
                  return Nn(e, t)
                }))
              }, Lr.omit = Oo, Lr.omitBy = function(t, e) {
                return Vo(t, Fs(aa(e)))
              }, Lr.once = function(t) {
                return ws(2, t)
              }, Lr.orderBy = function(t, e, r, n) {
                return null == t ? [] : (Gs(e) || (e = null == e ? [] : [e]), Gs(r = n ? i : r) || (r = null == r ? [] : [r]), jn(t, e, r))
              }, Lr.over = ll, Lr.overArgs = Os, Lr.overEvery = ul, Lr.overSome = hl, Lr.partial = Rs, Lr.partialRight = Vs, Lr.partition = _s, Lr.pick = Ro, Lr.pickBy = Vo, Lr.property = cl, Lr.propertyOf = function(t) {
                return function(e) {
                  return null == t ? i : Sn(t, e)
                }
              }, Lr.pull = Ka, Lr.pullAll = Xa, Lr.pullAllBy = function(t, e, r) {
                return t && t.length && e && e.length ? Hn(t, e, aa(r, 2)) : t
              }, Lr.pullAllWith = function(t, e, r) {
                return t && t.length && e && e.length ? Hn(t, e, i, r) : t
              }, Lr.pullAt = Za, Lr.range = pl, Lr.rangeRight = fl, Lr.rearg = Ls, Lr.reject = function(t, e) {
                return (Gs(t) ? Te : dn)(t, Fs(aa(e, 3)))
              }, Lr.remove = function(t, e) {
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
              }, Lr.rest = function(t, e) {
                if ("function" != typeof t) throw new Mt(a);
                return $n(t, e = e === i ? e : po(e))
              }, Lr.reverse = Ja, Lr.sampleSize = function(t, e, r) {
                return e = (r ? va(t, e, r) : e === i) ? 1 : po(e), (Gs(t) ? Kr : Kn)(t, e)
              }, Lr.set = function(t, e, r) {
                return null == t ? t : Xn(t, e, r)
              }, Lr.setWith = function(t, e, r, n) {
                return n = "function" == typeof n ? n : i, null == t ? t : Xn(t, e, r, n)
              }, Lr.shuffle = function(t) {
                return (Gs(t) ? Xr : Qn)(t)
              }, Lr.slice = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? (r && "number" != typeof r && va(t, e, r) ? (e = 0, r = n) : (e = null == e ? 0 : po(e), r = r === i ? n : po(r)), ti(t, e, r)) : []
              }, Lr.sortBy = Ps, Lr.sortedUniq = function(t) {
                return t && t.length ? ii(t) : []
              }, Lr.sortedUniqBy = function(t, e) {
                return t && t.length ? ii(t, aa(e, 2)) : []
              }, Lr.split = function(t, e, r) {
                return r && "number" != typeof r && va(t, e, r) && (e = r = i), (r = r === i ? f : r >>> 0) ? (t = go(t)) && ("string" == typeof e || null != e && !no(e)) && !(e = si(e)) && nr(t) ? yi(hr(t), 0, r) : t.split(e, r) : []
              }, Lr.spread = function(t, e) {
                if ("function" != typeof t) throw new Mt(a);
                return e = null == e ? 0 : mr(po(e), 0), $n((function(r) {
                  var n = r[e],
                    i = yi(r, 0, e);
                  return n && De(i, n), Pe(t, this, i)
                }))
              }, Lr.tail = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? ti(t, 1, e) : []
              }, Lr.take = function(t, e, r) {
                return t && t.length ? ti(t, 0, (e = r || e === i ? 1 : po(e)) < 0 ? 0 : e) : []
              }, Lr.takeRight = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, (e = n - (e = r || e === i ? 1 : po(e))) < 0 ? 0 : e, n) : []
              }, Lr.takeRightWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3), !1, !0) : []
              }, Lr.takeWhile = function(t, e) {
                return t && t.length ? hi(t, aa(e, 3)) : []
              }, Lr.tap = function(t, e) {
                return e(t), t
              }, Lr.throttle = function(t, e, r) {
                var n = !0,
                  i = !0;
                if ("function" != typeof t) throw new Mt(a);
                return Js(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), As(t, e, {
                  leading: n,
                  maxWait: e,
                  trailing: i
                })
              }, Lr.thru = cs, Lr.toArray = ho, Lr.toPairs = Lo, Lr.toPairsIn = Bo, Lr.toPath = function(t) {
                return Gs(t) ? Ie(t, Ra) : so(t) ? [t] : wi(Oa(go(t)))
              }, Lr.toPlainObject = vo, Lr.transform = function(t, e, r) {
                var n = Gs(t),
                  i = n || Us(t) || oo(t);
                if (e = aa(e, 4), null == r) {
                  var a = t && t.constructor;
                  r = i ? n ? new a : [] : Js(t) && Ks(a) ? Br(Wt(t)) : {}
                }
                return (i ? Ce : yn)(t, (function(t, n, i) {
                  return e(r, t, n, i)
                })), r
              }, Lr.unary = function(t) {
                return Cs(t, 1)
              }, Lr.union = Qa, Lr.unionBy = ts, Lr.unionWith = es, Lr.uniq = function(t) {
                return t && t.length ? oi(t) : []
              }, Lr.uniqBy = function(t, e) {
                return t && t.length ? oi(t, aa(e, 2)) : []
              }, Lr.uniqWith = function(t, e) {
                return e = "function" == typeof e ? e : i, t && t.length ? oi(t, i, e) : []
              }, Lr.unset = function(t, e) {
                return null == t || li(t, e)
              }, Lr.unzip = rs, Lr.unzipWith = ns, Lr.update = function(t, e, r) {
                return null == t ? t : ui(t, e, mi(r))
              }, Lr.updateWith = function(t, e, r, n) {
                return n = "function" == typeof n ? n : i, null == t ? t : ui(t, e, mi(r), n)
              }, Lr.values = zo, Lr.valuesIn = function(t) {
                return null == t ? [] : Xe(t, Io(t))
              }, Lr.without = is, Lr.words = Xo, Lr.wrap = function(t, e) {
                return Rs(mi(e), t)
              }, Lr.xor = as, Lr.xorBy = ss, Lr.xorWith = os, Lr.zip = ls, Lr.zipObject = function(t, e) {
                return fi(t || [], e || [], Jr)
              }, Lr.zipObjectDeep = function(t, e) {
                return fi(t || [], e || [], Xn)
              }, Lr.zipWith = us, Lr.entries = Lo, Lr.entriesIn = Bo, Lr.extend = bo, Lr.extendWith = xo, sl(Lr, Lr), Lr.add = gl, Lr.attempt = Zo, Lr.camelCase = No, Lr.capitalize = jo, Lr.ceil = yl, Lr.clamp = function(t, e, r) {
                return r === i && (r = e, e = i), r !== i && (r = (r = mo(r)) == r ? r : 0), e !== i && (e = (e = mo(e)) == e ? e : 0), an(mo(t), e, r)
              }, Lr.clone = function(t) {
                return sn(t, 4)
              }, Lr.cloneDeep = function(t) {
                return sn(t, 5)
              }, Lr.cloneDeepWith = function(t, e) {
                return sn(t, 5, e = "function" == typeof e ? e : i)
              }, Lr.cloneWith = function(t, e) {
                return sn(t, 4, e = "function" == typeof e ? e : i)
              }, Lr.conformsTo = function(t, e) {
                return null == e || on(t, e, ko(e))
              }, Lr.deburr = Go, Lr.defaultTo = function(t, e) {
                return null == t || t != t ? e : t
              }, Lr.divide = bl, Lr.endsWith = function(t, e, r) {
                t = go(t), e = si(e);
                var n = t.length,
                  a = r = r === i ? n : an(po(r), 0, n);
                return (r -= e.length) >= 0 && t.slice(r, a) == e
              }, Lr.eq = Bs, Lr.escape = function(t) {
                return (t = go(t)) && Y.test(t) ? t.replace(U, er) : t
              }, Lr.escapeRegExp = function(t) {
                return (t = go(t)) && rt.test(t) ? t.replace(et, "\\$&") : t
              }, Lr.every = function(t, e, r) {
                var n = Gs(t) ? Me : pn;
                return r && va(t, e, r) && (e = i), n(t, aa(e, 3))
              }, Lr.find = ds, Lr.findIndex = ja, Lr.findKey = function(t, e) {
                return Le(t, aa(e, 3), yn)
              }, Lr.findLast = ms, Lr.findLastIndex = Ga, Lr.findLastKey = function(t, e) {
                return Le(t, aa(e, 3), bn)
              }, Lr.floor = xl, Lr.forEach = vs, Lr.forEachRight = gs, Lr.forIn = function(t, e) {
                return null == t ? t : vn(t, aa(e, 3), Io)
              }, Lr.forInRight = function(t, e) {
                return null == t ? t : gn(t, aa(e, 3), Io)
              }, Lr.forOwn = function(t, e) {
                return t && yn(t, aa(e, 3))
              }, Lr.forOwnRight = function(t, e) {
                return t && bn(t, aa(e, 3))
              }, Lr.get = Co, Lr.gt = zs, Lr.gte = Ns, Lr.has = function(t, e) {
                return null != t && pa(t, e, Cn)
              }, Lr.hasIn = wo, Lr.head = Wa, Lr.identity = rl, Lr.includes = function(t, e, r, n) {
                t = Ws(t) ? t : zo(t), r = r && !n ? po(r) : 0;
                var i = t.length;
                return r < 0 && (r = mr(i + r, 0)), ao(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && ze(t, e, r) > -1
              }, Lr.indexOf = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : po(r);
                return i < 0 && (i = mr(n + i, 0)), ze(t, e, i)
              }, Lr.inRange = function(t, e, r) {
                return e = co(e), r === i ? (r = e, e = 0) : r = co(r),
                  function(t, e, r) {
                    return t >= vr(e, r) && t < mr(e, r)
                  }(t = mo(t), e, r)
              }, Lr.invoke = Ao, Lr.isArguments = js, Lr.isArray = Gs, Lr.isArrayBuffer = Hs, Lr.isArrayLike = Ws, Lr.isArrayLikeObject = qs, Lr.isBoolean = function(t) {
                return !0 === t || !1 === t || Qs(t) && Pn(t) == g
              }, Lr.isBuffer = Us, Lr.isDate = $s, Lr.isElement = function(t) {
                return Qs(t) && 1 === t.nodeType && !ro(t)
              }, Lr.isEmpty = function(t) {
                if (null == t) return !0;
                if (Ws(t) && (Gs(t) || "string" == typeof t || "function" == typeof t.splice || Us(t) || oo(t) || js(t))) return !t.length;
                var e = ca(t);
                if (e == _ || e == M) return !t.size;
                if (xa(t)) return !On(t).length;
                for (var r in t)
                  if (Ft.call(t, r)) return !1;
                return !0
              }, Lr.isEqual = function(t, e) {
                return kn(t, e)
              }, Lr.isEqualWith = function(t, e, r) {
                var n = (r = "function" == typeof r ? r : i) ? r(t, e) : i;
                return n === i ? kn(t, e, i, r) : !!n
              }, Lr.isError = Ys, Lr.isFinite = function(t) {
                return "number" == typeof t && Ve(t)
              }, Lr.isFunction = Ks, Lr.isInteger = Xs, Lr.isLength = Zs, Lr.isMap = to, Lr.isMatch = function(t, e) {
                return t === e || In(t, e, oa(e))
              }, Lr.isMatchWith = function(t, e, r) {
                return r = "function" == typeof r ? r : i, In(t, e, oa(e), r)
              }, Lr.isNaN = function(t) {
                return eo(t) && t != +t
              }, Lr.isNative = function(t) {
                if (ba(t)) throw new St("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                return Dn(t)
              }, Lr.isNil = function(t) {
                return null == t
              }, Lr.isNull = function(t) {
                return null === t
              }, Lr.isNumber = eo, Lr.isObject = Js, Lr.isObjectLike = Qs, Lr.isPlainObject = ro, Lr.isRegExp = no, Lr.isSafeInteger = function(t) {
                return Xs(t) && t >= -9007199254740991 && t <= c
              }, Lr.isSet = io, Lr.isString = ao, Lr.isSymbol = so, Lr.isTypedArray = oo, Lr.isUndefined = function(t) {
                return t === i
              }, Lr.isWeakMap = function(t) {
                return Qs(t) && ca(t) == k
              }, Lr.isWeakSet = function(t) {
                return Qs(t) && "[object WeakSet]" == Pn(t)
              }, Lr.join = function(t, e) {
                return null == t ? "" : We.call(t, e)
              }, Lr.kebabCase = Ho, Lr.last = Ya, Lr.lastIndexOf = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var a = n;
                return r !== i && (a = (a = po(r)) < 0 ? mr(n + a, 0) : vr(a, n - 1)), e == e ? function(t, e, r) {
                  for (var n = r + 1; n--;)
                    if (t[n] === e) return n;
                  return n
                }(t, e, a) : Be(t, je, a, !0)
              }, Lr.lowerCase = Wo, Lr.lowerFirst = qo, Lr.lt = lo, Lr.lte = uo, Lr.max = function(t) {
                return t && t.length ? fn(t, rl, En) : i
              }, Lr.maxBy = function(t, e) {
                return t && t.length ? fn(t, aa(e, 2), En) : i
              }, Lr.mean = function(t) {
                return Ge(t, rl)
              }, Lr.meanBy = function(t, e) {
                return Ge(t, aa(e, 2))
              }, Lr.min = function(t) {
                return t && t.length ? fn(t, rl, Rn) : i
              }, Lr.minBy = function(t, e) {
                return t && t.length ? fn(t, aa(e, 2), Rn) : i
              }, Lr.stubArray = dl, Lr.stubFalse = ml, Lr.stubObject = function() {
                return {}
              }, Lr.stubString = function() {
                return ""
              }, Lr.stubTrue = function() {
                return !0
              }, Lr.multiply = Sl, Lr.nth = function(t, e) {
                return t && t.length ? Nn(t, po(e)) : i
              }, Lr.noConflict = function() {
                return ce._ === this && (ce._ = Bt), this
              }, Lr.noop = ol, Lr.now = Es, Lr.pad = function(t, e, r) {
                t = go(t);
                var n = (e = po(e)) ? ur(t) : 0;
                if (!e || n >= e) return t;
                var i = (e - n) / 2;
                return ji(fe(i), r) + t + ji(pe(i), r)
              }, Lr.padEnd = function(t, e, r) {
                t = go(t);
                var n = (e = po(e)) ? ur(t) : 0;
                return e && n < e ? t + ji(e - n, r) : t
              }, Lr.padStart = function(t, e, r) {
                t = go(t);
                var n = (e = po(e)) ? ur(t) : 0;
                return e && n < e ? ji(e - n, r) + t : t
              }, Lr.parseInt = function(t, e, r) {
                return r || null == e ? e = 0 : e && (e = +e), yr(go(t).replace(nt, ""), e || 0)
              }, Lr.random = function(t, e, r) {
                if (r && "boolean" != typeof r && va(t, e, r) && (e = r = i), r === i && ("boolean" == typeof e ? (r = e, e = i) : "boolean" == typeof t && (r = t, t = i)), t === i && e === i ? (t = 0, e = 1) : (t = co(t), e === i ? (e = t, t = 0) : e = co(e)), t > e) {
                  var n = t;
                  t = e, e = n
                }
                if (r || t % 1 || e % 1) {
                  var a = br();
                  return vr(t + a * (e - t + oe("1e-" + ((a + "").length - 1))), e)
                }
                return qn(t, e)
              }, Lr.reduce = function(t, e, r) {
                var n = Gs(t) ? Fe : qe,
                  i = arguments.length < 3;
                return n(t, aa(e, 4), r, i, hn)
              }, Lr.reduceRight = function(t, e, r) {
                var n = Gs(t) ? Oe : qe,
                  i = arguments.length < 3;
                return n(t, aa(e, 4), r, i, cn)
              }, Lr.repeat = function(t, e, r) {
                return e = (r ? va(t, e, r) : e === i) ? 1 : po(e), Un(go(t), e)
              }, Lr.replace = function() {
                var t = arguments,
                  e = go(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2])
              }, Lr.result = function(t, e, r) {
                var n = -1,
                  a = (e = vi(e, t)).length;
                for (a || (a = 1, t = i); ++n < a;) {
                  var s = null == t ? i : t[Ra(e[n])];
                  s === i && (n = a, s = r), t = Ks(s) ? s.call(t) : s
                }
                return t
              }, Lr.round = _l, Lr.runInContext = t, Lr.sample = function(t) {
                return (Gs(t) ? Yr : Yn)(t)
              }, Lr.size = function(t) {
                if (null == t) return 0;
                if (Ws(t)) return ao(t) ? ur(t) : t.length;
                var e = ca(t);
                return e == _ || e == M ? t.size : On(t).length
              }, Lr.snakeCase = Uo, Lr.some = function(t, e, r) {
                var n = Gs(t) ? Re : ei;
                return r && va(t, e, r) && (e = i), n(t, aa(e, 3))
              }, Lr.sortedIndex = function(t, e) {
                return ri(t, e)
              }, Lr.sortedIndexBy = function(t, e, r) {
                return ni(t, e, aa(r, 2))
              }, Lr.sortedIndexOf = function(t, e) {
                var r = null == t ? 0 : t.length;
                if (r) {
                  var n = ri(t, e);
                  if (n < r && Bs(t[n], e)) return n
                }
                return -1
              }, Lr.sortedLastIndex = function(t, e) {
                return ri(t, e, !0)
              }, Lr.sortedLastIndexBy = function(t, e, r) {
                return ni(t, e, aa(r, 2), !0)
              }, Lr.sortedLastIndexOf = function(t, e) {
                if (null != t && t.length) {
                  var r = ri(t, e, !0) - 1;
                  if (Bs(t[r], e)) return r
                }
                return -1
              }, Lr.startCase = $o, Lr.startsWith = function(t, e, r) {
                return t = go(t), r = null == r ? 0 : an(po(r), 0, t.length), e = si(e), t.slice(r, r + e.length) == e
              }, Lr.subtract = Pl, Lr.sum = function(t) {
                return t && t.length ? Ue(t, rl) : 0
              }, Lr.sumBy = function(t, e) {
                return t && t.length ? Ue(t, aa(e, 2)) : 0
              }, Lr.template = function(t, e, r) {
                var n = Lr.templateSettings;
                r && va(t, e, r) && (e = i), t = go(t), e = xo({}, e, n, Ki);
                var a, s, o = xo({}, e.imports, n.imports, Ki),
                  l = ko(o),
                  u = Xe(o, l),
                  h = 0,
                  c = e.interpolate || bt,
                  p = "__p += '",
                  f = Ct((e.escape || bt).source + "|" + c.source + "|" + (c === Z ? ct : bt).source + "|" + (e.evaluate || bt).source + "|$", "g"),
                  d = "//# sourceURL=" + (Ft.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ne + "]") + "\n";
                t.replace(f, (function(e, r, n, i, o, l) {
                  return n || (n = i), p += t.slice(h, l).replace(xt, rr), r && (a = !0, p += "' +\n__e(" + r + ") +\n'"), o && (s = !0, p += "';\n" + o + ";\n__p += '"), n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = l + e.length, e
                })), p += "';\n";
                var m = Ft.call(e, "variable") && e.variable;
                if (m) {
                  if (ut.test(m)) throw new St("Invalid `variable` option passed into `_.template`")
                } else p = "with (obj) {\n" + p + "\n}\n";
                p = (s ? p.replace(G, "") : p).replace(H, "$1").replace(W, "$1;"), p = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                var v = Zo((function() {
                  return _t(l, d + "return " + p).apply(i, u)
                }));
                if (v.source = p, Ys(v)) throw v;
                return v
              }, Lr.times = function(t, e) {
                if ((t = po(t)) < 1 || t > c) return [];
                var r = f,
                  n = vr(t, f);
                e = aa(e), t -= f;
                for (var i = $e(n, e); ++r < t;) e(r);
                return i
              }, Lr.toFinite = co, Lr.toInteger = po, Lr.toLength = fo, Lr.toLower = function(t) {
                return go(t).toLowerCase()
              }, Lr.toNumber = mo, Lr.toSafeInteger = function(t) {
                return t ? an(po(t), -9007199254740991, c) : 0 === t ? t : 0
              }, Lr.toString = go, Lr.toUpper = function(t) {
                return go(t).toUpperCase()
              }, Lr.trim = function(t, e, r) {
                if ((t = go(t)) && (r || e === i)) return Ye(t);
                if (!t || !(e = si(e))) return t;
                var n = hr(t),
                  a = hr(e);
                return yi(n, Je(n, a), Qe(n, a) + 1).join("")
              }, Lr.trimEnd = function(t, e, r) {
                if ((t = go(t)) && (r || e === i)) return t.slice(0, cr(t) + 1);
                if (!t || !(e = si(e))) return t;
                var n = hr(t);
                return yi(n, 0, Qe(n, hr(e)) + 1).join("")
              }, Lr.trimStart = function(t, e, r) {
                if ((t = go(t)) && (r || e === i)) return t.replace(nt, "");
                if (!t || !(e = si(e))) return t;
                var n = hr(t);
                return yi(n, Je(n, hr(e))).join("")
              }, Lr.truncate = function(t, e) {
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
                    for (a.global || (a = Ct(a.source, go(pt.exec(a)) + "g")), a.lastIndex = 0; h = a.exec(c);) var p = h.index;
                    u = u.slice(0, p === i ? l : p)
                  }
                } else if (t.indexOf(si(a), l) != l) {
                  var f = u.lastIndexOf(a);
                  f > -1 && (u = u.slice(0, f))
                }
                return u + n
              }, Lr.unescape = function(t) {
                return (t = go(t)) && $.test(t) ? t.replace(q, pr) : t
              }, Lr.uniqueId = function(t) {
                var e = ++Ot;
                return go(t) + e
              }, Lr.upperCase = Yo, Lr.upperFirst = Ko, Lr.each = vs, Lr.eachRight = gs, Lr.first = Wa, sl(Lr, (vl = {}, yn(Lr, (function(t, e) {
                Ft.call(Lr.prototype, e) || (vl[e] = t)
              })), vl), {
                chain: !1
              }), Lr.VERSION = "4.17.21", Ce(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                Lr[t].placeholder = Lr
              })), Ce(["drop", "take"], (function(t, e) {
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
              })), Ce(["filter", "map", "takeWhile"], (function(t, e) {
                var r = e + 1,
                  n = 1 == r || 3 == r;
                jr.prototype[t] = function(t) {
                  var e = this.clone();
                  return e.__iteratees__.push({
                    iteratee: aa(t, 3),
                    type: r
                  }), e.__filtered__ = e.__filtered__ || n, e
                }
              })), Ce(["head", "last"], (function(t, e) {
                var r = "take" + (e ? "Right" : "");
                jr.prototype[t] = function() {
                  return this[r](1).value()[0]
                }
              })), Ce(["initial", "tail"], (function(t, e) {
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
              }, jr.prototype.invokeMap = $n((function(t, e) {
                return "function" == typeof t ? new jr(this) : this.map((function(r) {
                  return Tn(r, t, e)
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
                  a = Lr[n ? "take" + ("last" == e ? "Right" : "") : e],
                  s = n || /^find/.test(e);
                a && (Lr.prototype[e] = function() {
                  var e = this.__wrapped__,
                    o = n ? [1] : arguments,
                    l = e instanceof jr,
                    u = o[0],
                    h = l || Gs(e),
                    c = function(t) {
                      var e = a.apply(Lr, De([t], o));
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
              })), Ce(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                var e = Tt[t],
                  r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                  n = /^(?:pop|shift)$/.test(t);
                Lr.prototype[t] = function() {
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
                var r = Lr[e];
                if (r) {
                  var n = r.name + "";
                  Ft.call(Tr, n) || (Tr[n] = []), Tr[n].push({
                    name: e,
                    func: r
                  })
                }
              })), Tr[Li(i, 2).name] = [{
                name: "wrapper",
                func: i
              }], jr.prototype.clone = function() {
                var t = new jr(this.__wrapped__);
                return t.__actions__ = wi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = wi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = wi(this.__views__), t
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
                      x = y(v);
                    if (2 == b) v = x;
                    else if (!x) {
                      if (1 == b) continue t;
                      break t
                    }
                  }
                  d[p++] = v
                }
                return d
              }, Lr.prototype.at = ps, Lr.prototype.chain = function() {
                return hs(this)
              }, Lr.prototype.commit = function() {
                return new Nr(this.value(), this.__chain__)
              }, Lr.prototype.next = function() {
                this.__values__ === i && (this.__values__ = ho(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return {
                  done: t,
                  value: t ? i : this.__values__[this.__index__++]
                }
              }, Lr.prototype.plant = function(t) {
                for (var e, r = this; r instanceof zr;) {
                  var n = La(r);
                  n.__index__ = 0, n.__values__ = i, e ? a.__wrapped__ = n : e = n;
                  var a = n;
                  r = r.__wrapped__
                }
                return a.__wrapped__ = t, e
              }, Lr.prototype.reverse = function() {
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
              }, Lr.prototype.toJSON = Lr.prototype.valueOf = Lr.prototype.value = function() {
                return ci(this.__wrapped__, this.__actions__)
              }, Lr.prototype.first = Lr.prototype.head, Kt && (Lr.prototype[Kt] = function() {
                return this
              }), Lr
            }();
          ce._ = fr, (n = function() {
            return fr
          }.call(e, r, e, t)) === i || (t.exports = n)
        }.call(this)
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
                x = d * d * m,
                S = c * d * m + d * c * m + d * d * p,
                _ = c * c * m + d * c * p + c * d * p,
                P = c * c * p,
                E = d * m * m,
                C = c * m * m + d * p * m + d * m * p,
                w = c * p * m + d * p * p + c * m * p,
                M = c * p * p,
                T = m * m * m,
                A = p * m * m + m * p * m + m * m * p,
                k = p * p * m + m * p * p + p * m * p,
                I = p * p * p;
              for (h = 0; h < f; h += 1) l[4 * h] = t.round(1e3 * (v * e[h] + g * n[h] + y * i[h] + b * r[h])) / 1e3, l[4 * h + 1] = t.round(1e3 * (x * e[h] + S * n[h] + _ * i[h] + P * r[h])) / 1e3, l[4 * h + 2] = t.round(1e3 * (E * e[h] + C * n[h] + w * i[h] + M * r[h])) / 1e3, l[4 * h + 3] = t.round(1e3 * (T * e[h] + A * n[h] + k * i[h] + I * r[h])) / 1e3;
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
            var x = s.bezierData;
            if (t >= y || t < b) {
              var S = t >= y ? x.points.length - 1 : 0;
              for (l = x.points[S].point.length, o = 0; o < l; o += 1) r[o] = x.points[S].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = p), u = p((t - b) / (y - b));
              var _, P = x.segmentLength * u,
                E = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, h = x.points.length; v;) {
                if (E += x.points[c].partialLength, 0 === P || 0 === u || c === x.points.length - 1) {
                  for (l = x.points[c].point.length, o = 0; o < l; o += 1) r[o] = x.points[c].point[o];
                  break
                }
                if (P >= E && P < E + x.points[c + 1].partialLength) {
                  for (_ = (P - E) / x.points[c + 1].partialLength, l = x.points[c].point.length, o = 0; o < l; o += 1) r[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * _;
                  break
                }
                c < h - 1 ? c += 1 : v = !1
              }
              e._lastPoint = c, e._lastAddedLength = E - x.points[c].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var C, w, M, T, A;
            if (m = i.s.length, g = a.s || i.e, this.sh && 1 !== i.h) t >= y ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : t <= b ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(g), (t - b) / (y - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== i.h && (t >= y ? u = 1 : t < b ? u = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? p = s.__fnct[d] : (C = void 0 === i.o.x[d] ? i.o.x[0] : i.o.x[d], w = void 0 === i.o.y[d] ? i.o.y[0] : i.o.y[d], M = void 0 === i.i.x[d] ? i.i.x[0] : i.i.x[d], T = void 0 === i.i.y[d] ? i.i.y[0] : i.i.y[d], p = BezierFactory.getBezierEasing(C, w, M, T).get, s.__fnct[d] = p)) : s.__fnct ? p = s.__fnct : (C = i.o.x, w = i.o.y, M = i.i.x, T = i.i.y, p = BezierFactory.getBezierEasing(C, w, M, T).get, i.keyframeMetadata = p), u = p((t - b) / (y - b)))), g = a.s || i.e, A = 1 === i.h ? i.s[d] : i.s[d] + (g[d] - i.s[d]) * u, "multidimensional" === this.propType ? r[d] = A : r = A
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
                    var x;
                    v.__fnct ? x = v.__fnct : (x = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, v.__fnct = x), h = x((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
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
                x = v[3],
                S = v[4],
                _ = v[5],
                P = v[6],
                E = v[7],
                C = v[8],
                w = v[9],
                M = v[10],
                T = v[11],
                A = v[12],
                k = v[13],
                I = v[14],
                D = v[15];
              return v[0] = g * t + y * i + b * l + x * p, v[1] = g * e + y * a + b * u + x * f, v[2] = g * r + y * s + b * h + x * d, v[3] = g * n + y * o + b * c + x * m, v[4] = S * t + _ * i + P * l + E * p, v[5] = S * e + _ * a + P * u + E * f, v[6] = S * r + _ * s + P * h + E * d, v[7] = S * n + _ * o + P * c + E * m, v[8] = C * t + w * i + M * l + T * p, v[9] = C * e + w * a + M * u + T * f, v[10] = C * r + w * s + M * h + T * d, v[11] = C * n + w * o + M * c + T * m, v[12] = A * t + k * i + I * l + D * p, v[13] = A * e + k * a + I * u + D * f, v[14] = A * r + k * s + I * h + D * d, v[15] = A * n + k * o + I * c + D * m, this._identityCalculated = !1, this
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

            function x(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function S(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function _(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function P(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function E(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function C() {
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

            function M(t) {
              var e, r = t.length,
                n = [];
              for (e = 0; e < r; e += 1) n[e] = w(t[e]);
              return n
            }

            function T(t, e, r) {
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

            function A(t, e, r) {
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
              this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = h, this.skewFromAxis = c, this.shear = u, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.multiply = v, this.applyToPoint = S, this.applyToX = _, this.applyToY = P, this.applyToZ = E, this.applyToPointArray = A, this.applyToTriplePoints = T, this.applyToPointStringified = k, this.toCSS = I, this.to2dCSS = F, this.clone = b, this.cloneFromProps = x, this.equals = y, this.inversePoints = M, this.inversePoint = w, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
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
              x = 0;
            for (i = p - 1; i >= 0; i -= 1)
              if ((d = this.shapes[i]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, x, f), x += d.totalShapeLength) : g = [
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
                  var S = this.addShapes(d, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var _ = S.pop();
                        this.addPaths(S, m), S = this.addShapes(d, v[1], _)
                      } else this.addPaths(S, m), S = this.addShapes(d, v[1]);
                    this.addPaths(S, m)
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
            var y, b, x = 0;
            if (p > 0) {
              for (; x < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), x += f)
            } else if (p < 0) {
              for (; x > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), x -= f)
            }
            for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              x += 1, a -= 1, n += i
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
                var x = createNS("g");
                for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                var S = createNS("mask");
                S.setAttribute("mask-type", "alpha"), S.setAttribute("id", v + "_" + d), S.appendChild(i), a.appendChild(S), x.setAttribute("mask", "url(" + getLocationHref() + "#" + v + "_" + d + ")"), m.length = 0, m.push(x)
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
                  x = Math.cos(g + e.a.v) * b + h[0],
                  S = Math.sin(g + e.a.v) * b + h[1];
                l.setAttribute("fx", x), l.setAttribute("fy", S), u && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", S))
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
            x = 0,
            S = getFontProperties(b);
          t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var _, P = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var E, C, w = !0, M = t.sz[0], T = t.sz[1]; w;) {
              E = 0, g = 0, r = (C = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
              var A = -1;
              for (e = 0; e < r; e += 1) _ = C[e].charCodeAt(0), n = !1, " " === C[e] ? A = e : 13 !== _ && 3 !== _ || (g = 0, n = !0, E += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(C[e], b.fStyle, b.fFamily), x = n ? 0 : o.w * t.finalSize / 100) : x = l.measureText(C[e], t.f, t.finalSize), g + x > M && " " !== C[e] ? (-1 === A ? r += 1 : e = A, E += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, A === e ? 1 : 0, "\r"), A = -1, g = 0) : (g += x, g += P);
              E += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < E ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, r = t.finalText.length, w = !1)
            }
          g = -P, x = 0;
          var k, I = 0;
          for (e = 0; e < r; e += 1)
            if (n = !1, 13 === (_ = (k = t.finalText[e]).charCodeAt(0)) || 3 === _ ? (I = 0, v.push(g), y = g > y ? g : y, g = -2 * P, i = "", n = !0, m += 1) : i = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(t.f).fFamily), x = n ? 0 : o.w * t.finalSize / 100) : x = l.measureText(i, t.f, t.finalSize), " " === k ? I += x + P : (g += x + P + I, I = 0), h.push({
                l: x,
                an: x,
                add: f,
                n,
                anIndexes: [],
                val: i,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == p) {
              if (f += x, "" === i || " " === i || e === r - 1) {
                for ("" !== i && " " !== i || (f -= x); d <= e;) h[d].an = f, h[d].ind = c, h[d].extra = x, d += 1;
                c += 1, f = 0
              }
            } else if (3 == p) {
            if (f += x, "" === i || e === r - 1) {
              for ("" === i && (f -= x); d <= e;) h[d].an = f, h[d].ind = c, h[d].extra = x, d += 1;
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
          var D, F, O, R, V = u.a;
          s = V.length;
          var L = [];
          for (a = 0; a < s; a += 1) {
            for ((D = V[a]).a.sc && (t.strokeColorAnim = !0), D.a.sw && (t.strokeWidthAnim = !0), (D.a.fc || D.a.fh || D.a.fs || D.a.fb) && (t.fillColorAnim = !0), R = 0, O = D.s.b, e = 0; e < r; e += 1)(F = h[e]).anIndexes[a] = R, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || e == r - 1) || 4 == O && (F.n || e == r - 1)) && (1 === D.s.rn && L.push(R), R += 1);
            u.a[a].s.totalChars = R;
            var B, z = -1;
            if (1 === D.s.rn)
              for (e = 0; e < r; e += 1) z != (F = h[e]).anIndexes[a] && (z = F.anIndexes[a], B = L.splice(Math.floor(Math.random() * L.length), 1)[0]), F.anIndexes[a] = B
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
            var r, n, i, a, s, o, l, u, h, c, p, f, d, m, v, g, y, b, x, S = this._moreOptions.alignment.v,
              _ = this._animatorsData,
              P = this._textData,
              E = this.mHelper,
              C = this._renderType,
              w = this.renderedLetters.length,
              M = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var T, A = x.v;
                for (this._pathData.r.v && (A = A.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = A._length - 1, g = 0, i = 0; i < a; i += 1) T = bez.buildBezierData(A.v[i], A.v[i + 1], [A.o[i][0] - A.v[i][0], A.o[i][1] - A.v[i][1]], [A.i[i + 1][0] - A.v[i + 1][0], A.i[i + 1][1] - A.v[i + 1][1]]), s.tLength += T.segmentLength, s.segments.push(T), g += T.segmentLength;
                i = a, x.v.c && (T = bez.buildBezierData(A.v[i], A.v[0], [A.o[i][0] - A.v[i][0], A.o[i][1] - A.v[i][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), s.tLength += T.segmentLength, s.segments.push(T), g += T.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, u = 0, h = !0, m = s.segments, o < 0 && x.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
              f = (d = m[p].points)[c - 1], v = (l = d[c]).partialLength
            }
            a = M.length, r = 0, n = 0;
            var k, I, D, F, O, R = 1.2 * t.finalSize * .714,
              V = !0;
            D = _.length;
            var L, B, z, N, j, G, H, W, q, U, $, Y, K = -1,
              X = o,
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
                if (M[i].n) {
                  for (rt && (rt += nt); at < i;) M[at].animatorJustifyOffset = rt, at += 1;
                  rt = 0, st = !0
                } else {
                  for (I = 0; I < D; I += 1)(k = _[I].a).t.propType && (st && 2 === t.j && (nt += k.t.v * it), (O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars)).length ? rt += k.t.v * O[0] * it : rt += k.t.v * O * it);
                  st = !1
                } for (rt && (rt += nt); at < i;) M[at].animatorJustifyOffset = rt, at += 1
            }
            for (i = 0; i < a; i += 1) {
              if (E.reset(), N = 1, M[i].n) r = 0, n += t.yOffset, n += V ? 1 : 0, o = X, V = !1, this._hasMaskedPath && (c = J, f = (d = m[p = Z].points)[c - 1], v = (l = d[c]).partialLength, u = 0), tt = "", $ = "", q = "", Y = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== M[i].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[M[i].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[M[i].line]) / 2
                    }
                    Q = M[i].line
                  }
                  K !== M[i].ind && (M[K] && (o += M[K].extra), o += M[i].an / 2, K = M[i].ind), o += S[0] * M[i].an * .005;
                  var ot = 0;
                  for (I = 0; I < D; I += 1)(k = _[I].a).p.propType && ((O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars)).length ? ot += k.p.v[0] * O[0] : ot += k.p.v[0] * O), k.a.propType && ((O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars)).length ? ot += k.a.v[0] * O[0] : ot += k.a.v[0] * O);
                  for (h = !0, this._pathData.a.v && (o = .5 * M[0].an + (g - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * K / (a - 1), o += this._pathData.f.v); h;) u + v >= o + ot || !d ? (y = (o + ot - u) / l.partialLength, B = f.point[0] + (l.point[0] - f.point[0]) * y, z = f.point[1] + (l.point[1] - f.point[1]) * y, E.translate(-S[0] * M[i].an * .005, -S[1] * R * .01), h = !1) : d && (u += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : x.v.c ? (c = 0, d = m[p = 0].points) : (u -= l.partialLength, d = null)), d && (f = l, v = (l = d[c]).partialLength));
                  L = M[i].an / 2 - M[i].add, E.translate(-L, 0, 0)
                } else L = M[i].an / 2 - M[i].add, E.translate(-L, 0, 0), E.translate(-S[0] * M[i].an * .005, -S[1] * R * .01, 0);
                for (I = 0; I < D; I += 1)(k = _[I].a).t.propType && (O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? r += k.t.v * O[0] : r += k.t.v * O));
                for (t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; I < D; I += 1)(k = _[I].a).a.propType && ((O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars)).length ? E.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : E.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                for (I = 0; I < D; I += 1)(k = _[I].a).s.propType && ((O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars)).length ? E.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : E.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                for (I = 0; I < D; I += 1) {
                  if (k = _[I].a, O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars), k.sk.propType && (O.length ? E.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : E.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? E.rotateZ(-k.r.v * O[2]) : E.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? E.rotateY(k.ry.v * O[1]) : E.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? E.rotateX(k.rx.v * O[0]) : E.rotateX(k.rx.v * O)), k.o.propType && (O.length ? N += (k.o.v * O[0] - N) * O[0] : N += (k.o.v * O - N) * O), t.strokeWidthAnim && k.sw.propType && (O.length ? G += k.sw.v * O[0] : G += k.sw.v * O), t.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) O.length ? j[W] += (k.sc.v[W] - j[W]) * O[0] : j[W] += (k.sc.v[W] - j[W]) * O;
                  if (t.fillColorAnim && t.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) O.length ? H[W] += (k.fc.v[W] - H[W]) * O[0] : H[W] += (k.fc.v[W] - H[W]) * O;
                    k.fh.propType && (H = O.length ? addHueToRGB(H, k.fh.v * O[0]) : addHueToRGB(H, k.fh.v * O)), k.fs.propType && (H = O.length ? addSaturationToRGB(H, k.fs.v * O[0]) : addSaturationToRGB(H, k.fs.v * O)), k.fb.propType && (H = O.length ? addBrightnessToRGB(H, k.fb.v * O[0]) : addBrightnessToRGB(H, k.fb.v * O))
                  }
                }
                for (I = 0; I < D; I += 1)(k = _[I].a).p.propType && (O = _[I].s.getMult(M[i].anIndexes[I], P.a[I].s.totalChars), this._hasMaskedPath ? O.length ? E.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : E.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? E.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : E.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                if (t.strokeWidthAnim && (q = G < 0 ? 0 : G), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && ($ = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (E.translate(0, -t.ls), E.translate(0, S[1] * R * .01 + n, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180), E.rotate(-lt * Math.PI / 180)
                  }
                  E.translate(B, z, 0), o -= S[0] * M[i].an * .005, M[i + 1] && K !== M[i + 1].ind && (o += M[i].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (E.translate(r, n, 0), t.ps && E.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      E.translate(M[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[i].line]), 0, 0);
                      break;
                    case 2:
                      E.translate(M[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[i].line]) / 2, 0, 0)
                  }
                  E.translate(0, -t.ls), E.translate(L, 0, 0), E.translate(S[0] * M[i].an * .005, S[1] * R * .01, 0), r += M[i].l + .001 * t.tr * t.finalSize
                }
                "html" === C ? tt = E.toCSS() : "svg" === C ? tt = E.to2dCSS() : et = [E.props[0], E.props[1], E.props[2], E.props[3], E.props[4], E.props[5], E.props[6], E.props[7], E.props[8], E.props[9], E.props[10], E.props[11], E.props[12], E.props[13], E.props[14], E.props[15]], Y = N
              }
              w <= i ? (F = new LetterProps(Y, q, U, $, tt, et), this.renderedLetters.push(F), w += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[i], this.lettersChangedFlag = F.update(Y, q, U, $, tt, et) || this.lettersChangedFlag)
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
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[t].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else h && s.setAttribute("transform", "translate(" + u.props[12] + "," + u.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            h && s && s.setAttribute("d", "")
          } else {
            var S = this.textContainer,
              _ = "start";
            switch (r.j) {
              case 1:
                _ = "end";
                break;
              case 2:
                _ = "middle";
                break;
              default:
                _ = "start"
            }
            S.setAttribute("text-anchor", _), S.setAttribute("letter-spacing", d);
            var P = this.buildTextContents(r.finalText);
            for (e = P.length, p = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t].span || createNS("tspan")).textContent = P[t], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", S.appendChild(s), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = s, p += r.finalLineHeight;
            this.layerElement.appendChild(S)
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
            x = 0,
            S = 0,
            _ = !0,
            P = 0;
          for (n = 0; n < i; n += 1) {
            s = (a = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), y && v[n].n && (x = -b, S += t.yOffset, S += _ ? 1 : 0, _ = !1), c = (u = s.shapes ? s.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, g, v[n].line, x, S), f = createSizedArray(c - 1);
            var E = 0;
            for (h = 0; h < c; h += 1)
              if ("sh" === u[h].ty) {
                for (l = u[h].ks.k.i.length, p = u[h].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[o][0], p.i[o][1], 0), g.applyToY(p.i[o][0], p.i[o][1], 0), g.applyToX(p.v[o][0], p.v[o][1], 0), g.applyToY(p.v[o][0], p.v[o][1], 0));
                d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), f[E] = d, E += 1
              } y && (x += v[n].l, x += b), this.textSpans[P] ? this.textSpans[P].elem = f : this.textSpans[P] = {
              elem: f
            }, P += 1
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
                    x = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, c[n].yOffset = y.y - 1
                } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                u.appendChild(h)
              }
            } else if (l.textContent = c[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(u);
              var S = l.style,
                _ = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              S.transform = _, S.webkitTransform = _
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
              x = function() {
                for (var t = b.g(6), e = s, r = 0; t < o;) t = (t + r) * i, e *= i, r = b.g(1);
                for (; t >= l;) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e
              };
            return x.int32 = function() {
              return 0 | b.g(4)
            }, x.quick = function() {
              return b.g(4) / 4294967296
            }, x.double = x, f(d(b.S), t), (m.pass || v || function(t, r, n, i) {
              return i && (i.S && c(i, b), t.state = function() {
                return c(b, {})
              }), n ? (e[a] = t, r) : t
            })(x, y, "global" in m ? m.global : this == e, m.state)
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
        u = !1,
        h = -1;

      function c() {
        u && o && (u = !1, o.length ? l = o.concat(l) : h = -1, l.length && p())
      }

      function p() {
        if (!u) {
          var t = s(c);
          u = !0;
          for (var e = l.length; e;) {
            for (o = l, l = []; ++h < e;) o && o[h].run();
            h = -1, e = l.length
          }
          o = null, u = !1,
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
        l.push(new f(t, e)), 1 !== l.length || u || s(p)
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
    41120: (t, e) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        o = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        h = r ? Symbol.for("react.async_mode") : 60111,
        c = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;

      function S(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch (t = t.type) {
                case h:
                case c:
                case a:
                case o:
                case s:
                case f:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case u:
                    case p:
                    case v:
                    case m:
                    case l:
                      return t;
                    default:
                      return e
                  }
              }
            case i:
              return e
          }
        }
      }

      function _(t) {
        return S(t) === c
      }
      e.AsyncMode = h, e.ConcurrentMode = c, e.ContextConsumer = u, e.ContextProvider = l, e.Element = n, e.ForwardRef = p, e.Fragment = a, e.Lazy = v, e.Memo = m, e.Portal = i, e.Profiler = o, e.StrictMode = s, e.Suspense = f, e.isAsyncMode = function(t) {
        return _(t) || S(t) === h
      }, e.isConcurrentMode = _, e.isContextConsumer = function(t) {
        return S(t) === u
      }, e.isContextProvider = function(t) {
        return S(t) === l
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === n
      }, e.isForwardRef = function(t) {
        return S(t) === p
      }, e.isFragment = function(t) {
        return S(t) === a
      }, e.isLazy = function(t) {
        return S(t) === v
      }, e.isMemo = function(t) {
        return S(t) === m
      }, e.isPortal = function(t) {
        return S(t) === i
      }, e.isProfiler = function(t) {
        return S(t) === o
      }, e.isStrictMode = function(t) {
        return S(t) === s
      }, e.isSuspense = function(t) {
        return S(t) === f
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === a || t === c || t === o || t === s || t === f || t === d || "object" == typeof t && null !== t && (t.$$typeof === v || t.$$typeof === m || t.$$typeof === l || t.$$typeof === u || t.$$typeof === p || t.$$typeof === y || t.$$typeof === b || t.$$typeof === x || t.$$typeof === g)
      }, e.typeOf = S
    },
    12400: (t, e, r) => {
      "use strict";
      t.exports = r(41120)
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
          for (var s, o = r(t), l = a.f, u = 0; o.length > u;) l.call(t, s = o[u++]) && e.push(s);
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
        u = function(t, e, r) {
          var h, c, p, f = t & u.F,
            d = t & u.G,
            m = t & u.S,
            v = t & u.P,
            g = t & u.B,
            y = t & u.W,
            b = d ? i : i[e] || (i[e] = {}),
            x = b[l],
            S = d ? n : m ? n[e] : (n[e] || {})[l];
          for (h in d && (r = e), r)(c = !f && S && void 0 !== S[h]) && o(b, h) || (p = c ? S[h] : r[h], b[h] = d && "function" != typeof S[h] ? r[h] : g && c ? a(p, n) : y && S[h] == p ? function(t) {
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
          }(p) : v && "function" == typeof p ? a(Function.call, p) : p, v && ((b.virtual || (b.virtual = {}))[h] = p, t & u.R && x && !x[h] && s(x, h, p)))
        };
      u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
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
        o = r(48768),
        l = r(27e3),
        u = r(76572),
        h = r(88872),
        c = r(42516)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = "keys",
        d = "values",
        m = function() {
          return this
        };
      t.exports = function(t, e, r, v, g, y, b) {
        l(r, e, v);
        var x, S, _, P = function(t) {
            if (!p && t in M) return M[t];
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
          E = e + " Iterator",
          C = g == d,
          w = !1,
          M = t.prototype,
          T = M[c] || M["@@iterator"] || g && M[g],
          A = T || P(g),
          k = g ? C ? P("entries") : A : void 0,
          I = "Array" == e && M.entries || T;
        if (I && (_ = h(I.call(new t))) !== Object.prototype && _.next && (u(_, E, !0), n || "function" == typeof _[c] || s(_, c, m)), C && T && T.name !== d && (w = !0, A = function() {
            return T.call(this)
          }), n && !b || !p && !w && M[c] || s(M, c, A), o[e] = A, o[E] = m, g)
          if (x = {
              values: C ? A : P(d),
              keys: y ? A : P(f),
              entries: k
            }, b)
            for (S in x) S in M || a(M, S, x[S]);
          else i(i.P + i.F * (p || w), e, x);
        return x
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
    48768: t => {
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
        u = !r(65032)((function() {
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
    43492: (t, e, r) => {
      "use strict";
      var n = r(65168),
        i = r(37108),
        a = r(70716),
        s = r(9520),
        o = r(47380),
        l = r(45760),
        u = Object.assign;
      t.exports = !u || r(65032)((function() {
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
    75069: (t, e, r) => {
      var n = r(83060),
        i = r(23876),
        a = r(21608),
        s = r(7448)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        u = function() {
          var t, e = r(76440)("iframe"),
            n = a.length;
          for (e.style.display = "none", r(82176).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u[l][a[n]];
          return u()
        };
      t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (o[l] = n(t), r = new o, o[l] = null, r[s] = t) : r = u(), void 0 === e ? r : i(r, e)
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
        u = Object.getOwnPropertyDescriptor;
      e.f = r(65168) ? u : function(t, e) {
        if (t = a(t), e = s(e, !0), l) try {
          return u(t, e)
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
          u = [];
        for (r in o) r != s && n(o, r) && u.push(r);
        for (; e.length > l;) n(o, r = e[l++]) && (~a(u, r) || u.push(r));
        return u
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
            u = o.length;
          return l < 0 || l >= u ? t ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? o.charAt(l) : a : t ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
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
        a = r(48768),
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
        u = r(65032),
        h = r(13332),
        c = r(76572),
        p = r(63540),
        f = r(42516),
        d = r(33728),
        m = r(66152),
        v = r(9684),
        g = r(44244),
        y = r(83060),
        b = r(93536),
        x = r(47380),
        S = r(28828),
        _ = r(94800),
        P = r(15196),
        E = r(75069),
        C = r(49920),
        w = r(34096),
        M = r(70716),
        T = r(56008),
        A = r(37108),
        k = w.f,
        I = T.f,
        D = C.f,
        F = n.Symbol,
        O = n.JSON,
        R = O && O.stringify,
        V = "prototype",
        L = f("_hidden"),
        B = f("toPrimitive"),
        z = {}.propertyIsEnumerable,
        N = h("symbol-registry"),
        j = h("symbols"),
        G = h("op-symbols"),
        H = Object[V],
        W = "function" == typeof F && !!M.f,
        q = n.QObject,
        U = !q || !q[V] || !q[V].findChild,
        $ = a && u((function() {
          return 7 != E(I({}, "a", {
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
          var e = j[t] = E(F[V]);
          return e._k = t, e
        },
        K = W && "symbol" == typeof F.iterator ? function(t) {
          return "symbol" == typeof t
        } : function(t) {
          return t instanceof F
        },
        X = function(t, e, r) {
          return t === H && X(G, e, r), y(t), e = _(e, !0), y(r), i(j, e) ? (r.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), r = E(r, {
            enumerable: P(0, !1)
          })) : (i(t, L) || I(t, L, P(1, {})), t[L][e] = !0), $(t, e, r)) : I(t, e, r)
        },
        Z = function(t, e) {
          y(t);
          for (var r, n = v(e = S(e)), i = 0, a = n.length; a > i;) X(t, r = n[i++], e[r]);
          return t
        },
        J = function(t) {
          var e = z.call(this, t = _(t, !0));
          return !(this === H && i(j, t) && !i(G, t)) && (!(e || !i(this, t) || !i(j, t) || i(this, L) && this[L][t]) || e)
        },
        Q = function(t, e) {
          if (t = S(t), e = _(e, !0), t !== H || !i(j, e) || i(G, e)) {
            var r = k(t, e);
            return !r || !i(j, e) || i(t, L) && t[L][e] || (r.enumerable = !0), r
          }
        },
        tt = function(t) {
          for (var e, r = D(S(t)), n = [], a = 0; r.length > a;) i(j, e = r[a++]) || e == L || e == l || n.push(e);
          return n
        },
        et = function(t) {
          for (var e, r = t === H, n = D(r ? G : S(t)), a = [], s = 0; n.length > s;) !i(j, e = n[s++]) || r && !i(H, e) || a.push(j[e]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
          e = function(r) {
            this === H && e.call(G, r), i(this, L) && i(this[L], t) && (this[L][t] = !1), $(this, t, P(1, r))
          };
        return a && U && $(H, t, {
          configurable: !0,
          set: e
        }), Y(t)
      })[V], "toString", (function() {
        return this._k
      })), w.f = Q, T.f = X, r(79584).f = C.f = tt, r(9520).f = J, M.f = et, a && !r(41380) && o(H, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return Y(f(t))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var rt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; rt.length > nt;) f(rt[nt++]);
      for (var it = A(f.store), at = 0; it.length > at;) m(it[at++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(t) {
          return i(N, t += "") ? N[t] : N[t] = F(t)
        },
        keyFor: function(t) {
          if (!K(t)) throw TypeError(t + " is not a symbol!");
          for (var e in N)
            if (N[e] === t) return e
        },
        useSetter: function() {
          U = !0
        },
        useSimple: function() {
          U = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(t, e) {
          return void 0 === e ? E(t) : Z(E(t), e)
        },
        defineProperty: X,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
      });
      var st = u((function() {
        M.f(1)
      }));
      s(s.S + s.F * st, "Object", {
        getOwnPropertySymbols: function(t) {
          return M.f(x(t))
        }
      }), O && s(s.S + s.F * (!W || u((function() {
        var t = F();
        return "[null]" != R([t]) || "{}" != R({
          a: t
        }) || "{}" != R(Object(t))
      }))), "JSON", {
        stringify: function(t) {
          for (var e, r, n = [t], i = 1; arguments.length > i;) n.push(arguments[i++]);
          if (r = e = n[1], (b(e) || void 0 !== t) && !K(t)) return g(e) || (e = function(t, e) {
            if ("function" == typeof r && (e = r.call(this, t, e)), !K(e)) return e
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
      for (var n = r(56384), i = r(11480), a = r(48768), s = r(42516)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var u = o[l],
          h = n[u],
          c = h && h.prototype;
        c && !c[s] && i(c, s, u), a[u] = a.Array
      }
    },
    89772: (t, e) => {
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