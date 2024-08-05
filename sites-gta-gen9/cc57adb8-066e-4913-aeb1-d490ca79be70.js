! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cc57adb8-066e-4913-aeb1-d490ca79be70", e._sentryDebugIdIdentifier = "sentry-dbid-cc57adb8-066e-4913-aeb1-d490ca79be70")
  } catch (e) {}
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
  [3953], {
    90250: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => W
      });
      var a = n(80226),
        r = n(71403),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        o = n(26208),
        i = (0, n(23496).f)(),
        l = function() {},
        d = r.forwardRef((function(e, t) {
          var n = r.useRef(null),
            s = r.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l
            }),
            c = s[0],
            d = s[1],
            u = e.forwardProps,
            g = e.children,
            f = e.className,
            m = e.removeScrollBar,
            b = e.enabled,
            h = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            x = e.inert,
            k = e.allowPinchZoom,
            y = e.as,
            w = void 0 === y ? "div" : y,
            S = e.gapMode,
            C = (0, a.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            j = p,
            T = (0, o.S)([n, t]),
            N = (0, a.Cl)((0, a.Cl)({}, C), c);
          return r.createElement(r.Fragment, null, b && r.createElement(j, {
            sideCar: i,
            removeScrollBar: m,
            shards: h,
            noIsolation: v,
            inert: x,
            setCallbacks: d,
            allowPinchZoom: !!k,
            lockRef: n,
            gapMode: S
          }), u ? r.cloneElement(r.Children.only(g), (0, a.Cl)((0, a.Cl)({}, N), {
            ref: T
          })) : r.createElement(w, (0, a.Cl)({}, N, {
            className: f,
            ref: T
          }), g))
        }));
      d.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, d.classNames = {
        fullWidth: c,
        zeroRight: s
      };
      var u = function(e) {
        var t = e.sideCar,
          n = (0, a.Tt)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var s = t.read();
        if (!s) throw new Error("Sidecar medium not found");
        return r.createElement(s, (0, a.Cl)({}, n))
      };
      u.isSideCarExport = !0;
      var g = function() {
          var e = 0,
            t = null;
          return {
            add: function(a) {
              var r, s;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (s = a, (r = t).styleSheet ? r.styleSheet.cssText = s : r.appendChild(document.createTextNode(s)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        f = function() {
          var e, t = (e = g(), function(t, n) {
            r.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              a = e.dynamic;
            return t(n, a), null
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
        h = f(),
        p = function(e, t, n, a) {
          var r = e.left,
            o = e.top,
            i = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(a, ";\n   padding-right: ").concat(l, "px ").concat(a, ";\n  }\n  body {\n    overflow: hidden ").concat(a, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(a, ";"), "margin" === n && "\n    padding-left: ".concat(r, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(a, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(a, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(s, " {\n    right: ").concat(l, "px ").concat(a, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(a, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    right: 0 ").concat(a, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(a, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        v = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            a = e.gapMode,
            s = void 0 === a ? "margin" : a,
            c = r.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      a = t["padding" === e ? "paddingTop" : "marginTop"],
                      r = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [b(n), b(a), b(r)]
                  }(e),
                  n = document.documentElement.clientWidth,
                  a = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, a - n + t[2] - t[0])
                }
              }(s)
            }), [s]);
          return r.createElement(h, {
            styles: p(c, !t, s, n ? "" : "!important")
          })
        },
        x = !1;
      if ("undefined" != typeof window) try {
        var k = Object.defineProperty({}, "passive", {
          get: function() {
            return x = !0, !0
          }
        });
        window.addEventListener("test", k, k), window.removeEventListener("test", k, k)
      } catch (e) {
        x = !1
      }
      var y = !!x && {
          passive: !1
        },
        w = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        S = function(e, t) {
          var n = t.ownerDocument,
            a = t;
          do {
            if ("undefined" != typeof ShadowRoot && a instanceof ShadowRoot && (a = a.host), C(e, a)) {
              var r = j(e, a);
              if (r[1] > r[2]) return !0
            }
            a = a.parentNode
          } while (a && a !== n.body);
          return !1
        },
        C = function(e, t) {
          return "v" === e ? function(e) {
            return w(e, "overflowY")
          }(t) : function(e) {
            return w(e, "overflowX")
          }(t)
        },
        j = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        T = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        N = function(e) {
          return [e.deltaX, e.deltaY]
        },
        _ = function(e) {
          return e && "current" in e ? e.current : e
        },
        E = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        I = 0,
        R = [];

      function M(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const L = (i.useMedium((function(e) {
        var t = r.useRef([]),
          n = r.useRef([0, 0]),
          s = r.useRef(),
          c = r.useState(I++)[0],
          o = r.useState(f)[0],
          i = r.useRef(e);
        r.useEffect((function() {
          i.current = e
        }), [e]), r.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, a.fX)([e.lockRef.current], (e.shards || []).map(_), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = r.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
            var a, r = T(e),
              c = n.current,
              o = "deltaX" in e ? e.deltaX : c[0] - r[0],
              l = "deltaY" in e ? e.deltaY : c[1] - r[1],
              d = e.target,
              u = Math.abs(o) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === u && "range" === d.type) return !1;
            var g = S(u, d);
            if (!g) return !0;
            if (g ? a = u : (a = "v" === u ? "h" : "v", g = S(u, d)), !g) return !1;
            if (!s.current && "changedTouches" in e && (o || l) && (s.current = a), !a) return !0;
            var f = s.current || a;
            return function(e, t, n, a, r) {
              var s = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                c = s * a,
                o = n.target,
                i = t.contains(o),
                l = !1,
                d = c > 0,
                u = 0,
                g = 0;
              do {
                var f = j(e, o),
                  m = f[0],
                  b = f[1] - f[2] - s * m;
                (m || b) && C(e, o) && (u += b, g += m), o = o instanceof ShadowRoot ? o.host : o.parentNode
              } while (!i && o !== document.body || i && (t.contains(o) || t === o));
              return (d && (r && Math.abs(u) < 1 || !r && c > u) || !d && (r && Math.abs(g) < 1 || !r && -c > g)) && (l = !0), l
            }(f, t, e, "h" === f ? o : l, !0)
          }), []),
          d = r.useCallback((function(e) {
            var n = e;
            if (R.length && R[R.length - 1] === o) {
              var a = "deltaY" in n ? N(n) : T(n),
                r = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, r = a, t[0] === r[0] && t[1] === r[1]);
                  var t, r
                }))[0];
              if (r && r.should) n.cancelable && n.preventDefault();
              else if (!r) {
                var s = (i.current.shards || []).map(_).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (s.length > 0 ? l(n, s[0]) : !i.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          u = r.useCallback((function(e, n, a, r) {
            var s = {
              name: e,
              delta: n,
              target: a,
              should: r,
              shadowParent: M(a)
            };
            t.current.push(s), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== s
              }))
            }), 1)
          }), []),
          g = r.useCallback((function(e) {
            n.current = T(e), s.current = void 0
          }), []),
          m = r.useCallback((function(t) {
            u(t.type, N(t), t.target, l(t, e.lockRef.current))
          }), []),
          b = r.useCallback((function(t) {
            u(t.type, T(t), t.target, l(t, e.lockRef.current))
          }), []);
        r.useEffect((function() {
          return R.push(o), e.setCallbacks({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: b
            }), document.addEventListener("wheel", d, y), document.addEventListener("touchmove", d, y), document.addEventListener("touchstart", g, y),
            function() {
              R = R.filter((function(e) {
                return e !== o
              })), document.removeEventListener("wheel", d, y), document.removeEventListener("touchmove", d, y), document.removeEventListener("touchstart", g, y)
            }
        }), []);
        var h = e.removeScrollBar,
          p = e.inert;
        return r.createElement(r.Fragment, null, p ? r.createElement(o, {
          styles: E(c)
        }) : null, h ? r.createElement(v, {
          gapMode: e.gapMode
        }) : null)
      })), u);
      var B = r.forwardRef((function(e, t) {
        return r.createElement(d, (0, a.Cl)({}, e, {
          ref: t,
          sideCar: L
        }))
      }));
      B.classNames = d.classNames;
      const W = B
    },
    19435: (e, t, n) => {
      var a = n(78007).Symbol;
      e.exports = a
    },
    7158: (e, t, n) => {
      var a = n(19435),
        r = n(16061),
        s = n(84968),
        c = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? r(e) : s(e)
      }
    },
    48530: (e, t, n) => {
      var a = n(18478),
        r = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(r, "") : e
      }
    },
    94626: (e, t, n) => {
      var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = a
    },
    16061: (e, t, n) => {
      var a = n(19435),
        r = Object.prototype,
        s = r.hasOwnProperty,
        c = r.toString,
        o = a ? a.toStringTag : void 0;
      e.exports = function(e) {
        var t = s.call(e, o),
          n = e[o];
        try {
          e[o] = void 0;
          var a = !0
        } catch (e) {}
        var r = c.call(e);
        return a && (t ? e[o] = n : delete e[o]), r
      }
    },
    84968: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    78007: (e, t, n) => {
      var a = n(94626),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = a || r || Function("return this")();
      e.exports = s
    },
    18478: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    14963: (e, t, n) => {
      var a = n(27335),
        r = n(92346),
        s = n(58972),
        c = Math.max,
        o = Math.min;
      e.exports = function(e, t, n) {
        var i, l, d, u, g, f, m = 0,
          b = !1,
          h = !1,
          p = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function v(t) {
          var n = i,
            a = l;
          return i = l = void 0, m = t, u = e.apply(a, n)
        }

        function x(e) {
          var n = e - f;
          return void 0 === f || n >= t || n < 0 || h && e - m >= d
        }

        function k() {
          var e = r();
          if (x(e)) return y(e);
          g = setTimeout(k, function(e) {
            var n = t - (e - f);
            return h ? o(n, d - (e - m)) : n
          }(e))
        }

        function y(e) {
          return g = void 0, p && i ? v(e) : (i = l = void 0, u)
        }

        function w() {
          var e = r(),
            n = x(e);
          if (i = arguments, l = this, f = e, n) {
            if (void 0 === g) return function(e) {
              return m = e, g = setTimeout(k, t), b ? v(e) : u
            }(f);
            if (h) return clearTimeout(g), g = setTimeout(k, t), v(f)
          }
          return void 0 === g && (g = setTimeout(k, t)), u
        }
        return t = s(t) || 0, a(n) && (b = !!n.leading, d = (h = "maxWait" in n) ? c(s(n.maxWait) || 0, t) : d, p = "trailing" in n ? !!n.trailing : p), w.cancel = function() {
          void 0 !== g && clearTimeout(g), m = 0, i = f = l = g = void 0
        }, w.flush = function() {
          return void 0 === g ? u : y(r())
        }, w
      }
    },
    27335: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    95360: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    87416: (e, t, n) => {
      var a = n(7158),
        r = n(95360);
      e.exports = function(e) {
        return "symbol" == typeof e || r(e) && "[object Symbol]" == a(e)
      }
    },
    92346: (e, t, n) => {
      var a = n(78007);
      e.exports = function() {
        return a.Date.now()
      }
    },
    58972: (e, t, n) => {
      var a = n(48530),
        r = n(27335),
        s = n(87416),
        c = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        i = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (s(e)) return NaN;
        if (r(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var n = o.test(e);
        return n || i.test(e) ? l(e.slice(2), n ? 2 : 8) : c.test(e) ? NaN : +e
      }
    },
    62811: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => i
      });
      var a = n(89779);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9b59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-sites-gta-gen9f5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-sites-gta-gen9cffaf489342637258d28f9b3b718836a",
        small: "rockstargames-sites-gta-gen9b8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-sites-gta-gen9e6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-sites-gta-gen9cef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-sites-gta-gen9b257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-sites-gta-gen9cb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-sites-gta-gen9d0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-sites-gta-gen9ac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-sites-gta-gen9c5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-sites-gta-gen9a7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-sites-gta-gen9a693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-sites-gta-gen9a029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-sites-gta-gen9e25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-sites-gta-gen9e03d92653f19a7ae3c4b3d5137bc9909"
      };
      var s = n(46632);
      const c = e => {
          let {
            children: t,
            className: n,
            onClick: a,
            style: r,
            ariaLabel: c
          } = e;
          return (0, s.jsx)("button", {
            className: n,
            onClick: a,
            style: r,
            type: "button",
            "aria-label": c,
            children: t
          })
        },
        o = e => {
          let {
            children: t,
            className: n,
            onClick: r,
            style: c,
            to: o,
            ariaLabel: i
          } = e;
          return (0, s.jsx)(a.NavLink, {
            className: n,
            onClick: r,
            style: c,
            to: o,
            "aria-label": i,
            children: t
          })
        },
        i = e => {
          let {
            btnColor: t = "#fff",
            className: n = "",
            consoleBtn: a,
            icon: i = "",
            img: l,
            labelColor: d = "#000",
            onClick: u,
            secondText: g,
            size: f,
            text: m,
            to: b,
            type: h = "",
            ariaLabel: p
          } = e;
          const v = [r.plusButton, r[h] ?? "", r[f] ?? "", r[a] ?? "", n].join(" "),
            x = {
              "--hvr-color": t ?? d,
              "--hvr-bg-color": d ?? t,
              "--hvr-border-color": t ?? d
            },
            k = (0, s.jsxs)(s.Fragment, {
              children: [l ? (0, s.jsx)("img", {
                src: l,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: r.btnText,
                icon: i,
                children: [m, g ? (0, s.jsx)("span", {
                  children: g
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: u,
                onKeyDown: u,
                className: v,
                role: "button",
                "aria-label": p,
                tabIndex: 0,
                children: (0, s.jsx)("a", {
                  href: b,
                  target: e,
                  children: k
                })
              })
            }
            return (0, s.jsx)(o, {
              className: v,
              onClick: u,
              style: {
                ...x
              },
              to: b,
              ariaLabel: p,
              children: k
            })
          }
          return (0, s.jsx)(c, {
            className: v,
            onClick: u,
            style: {
              ...x
            },
            ariaLabel: p,
            children: k
          })
        }
    },
    10294: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        default: () => M
      });
      var a = n(71403),
        r = n(57172),
        s = n(81902),
        c = n(89269),
        o = n(77356),
        i = n(59217),
        l = n(42756),
        d = n(58407),
        u = n(40207),
        g = n(86503),
        f = n(60285),
        m = n(39695),
        b = n(62811),
        h = n(26177),
        p = n(96717),
        v = n(94566),
        x = n(74401);
      const k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        y = {
          pillBtn: "rockstargames-sites-gta-gen9e9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-sites-gta-gen9b6cfe7731b5b7ab166fcb167bd54aeec",
          devBtns: "rockstargames-sites-gta-gen9a6c889f3ecad96c4975bc7ed81540491",
          devBtn: "rockstargames-sites-gta-gen9ad51ee33c3002d7f25e3cc0f78b0d873",
          secondary: "rockstargames-sites-gta-gen9a256144bc2091efea308d9a8a377a737",
          interestTrackerWrapper: "rockstargames-sites-gta-gen9eecfe5137cf2e3c4b0478b43be1e74b1",
          interestTracker: "rockstargames-sites-gta-gen9f67885e5391b6550f170fd56628c9906",
          loader: "rockstargames-sites-gta-gen9ca488091d243787a9cd796d97a5f122b",
          moduleImage: "rockstargames-sites-gta-gen9d3f21bc571d3a3f577d26e8b45859648",
          mobileImgContainer: "rockstargames-sites-gta-gen9d2125680dd25c2bcb65f9a0b96f21bb4",
          moduleImageMobile: "rockstargames-sites-gta-gen9e434acbd5507065824fc3af14eb8cc5c",
          slideContainer: "rockstargames-sites-gta-gen9d2fab85526434c79bbc12b6a6c8ffd70",
          contentContainer: "rockstargames-sites-gta-gen9f6613d575229be91073e6d484b77ea5e",
          landingSlide: "rockstargames-sites-gta-gen9d05cfa3ac7384704b98ad107655af47d",
          textContent: "rockstargames-sites-gta-gen9fc8660737bbdc8f86f8a4ea06659a33b",
          successSlide: "rockstargames-sites-gta-gen9d9450f3541952682d19fee00772d0f1c",
          unlinkedSlide: "rockstargames-sites-gta-gen9e562047f95446daace762342785ef53a",
          platformButtonContainer: "rockstargames-sites-gta-gen9e29a7fc3592430425d91c6819a1f7e0d",
          errorSlide: "rockstargames-sites-gta-gen9c041c8746fa1e4df112acc81cf6ab418",
          btnContainer: "rockstargames-sites-gta-gen9fa7395c3112347a96a25294116ae8fb0",
          topContent: "rockstargames-sites-gta-gen9fe62cddec5a5071937238008a67b4a23",
          bottomContent: "rockstargames-sites-gta-gen9c1530db66301c04293eabc59c455f37d",
          legal: "rockstargames-sites-gta-gen9b026b94c1160c03be6bb45b35bd171fd",
          faq: "rockstargames-sites-gta-gen9db46c4596b0b0dabb86776e069d7c6c2",
          faqLink: "rockstargames-sites-gta-gen9be9b8de47c9faf09181849be8ce32a7e",
          badge: "rockstargames-sites-gta-gen9b371557778af375ed631f8db217d4b95",
          hidden: "rockstargames-sites-gta-gen9c25fb97a6b90040828d50ba2bc626d2f",
          visible: "rockstargames-sites-gta-gen9c769fa70a9d7c7218a928525e1fc8aee",
          onScreen: "rockstargames-sites-gta-gen9ac869fcee40b7fecf48190c22b0c28c4",
          offScreen: "rockstargames-sites-gta-gen9bc58c9a458acdf7cedb71748dd2b97cd",
          alert: "rockstargames-sites-gta-gen9fa4b2575f1b0bf395ee8aeac6f921b9f",
          alertText: "rockstargames-sites-gta-gen9e5388eb6491a1a8a455f5da886d315a6",
          errorAlert: "rockstargames-sites-gta-gen9f2485866287b1e7bec17cd9956cc27c4",
          successAlert: "rockstargames-sites-gta-gen9f3e46d7eea7a5fdaa3c792ebefd21612",
          linkMore: "rockstargames-sites-gta-gen9f86c9d4e98312229416ab74287beb871",
          withIcon: "rockstargames-sites-gta-gen9c0502853211d6f38c2201df3324d2f4d",
          btnText: "rockstargames-sites-gta-gen9ea48f4033bbcce9a5f46c7ec3bf592cf",
          swiperWrap: "rockstargames-sites-gta-gen9b64badc5e0122206ecb30b961bf41ce0",
          swiperContainer: "rockstargames-sites-gta-gen9f019ed0ffdb9171e9e607aa2fc5fb907",
          swiperButton: "rockstargames-sites-gta-gen9a2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-sites-gta-gen9f89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-sites-gta-gen9e3115ab3e897ab6bf9a95fc3e60aa034"
        };
      var w = n(46632);
      const {
        host: S,
        login: C,
        authHost: j,
        clientId: T
      } = (0, l.getScConfigForOrigin)(), N = "error", _ = "landing", E = "success", I = "unlinked", R = e => {
        let {
          legalText: t
        } = e;
        return (0, w.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })
      }, M = e => {
        let {
          giftId: t,
          location: n = "gtaplus_site",
          introScreen: M,
          errorScreen: L,
          unlinkedScreen: B,
          successScreen: W,
          jumpLinkId: O,
          legalText: P
        } = e;
        const A = (0, l.useLocale)(),
          $ = {
            errorScreen: {
              btnText: L?.errorButton || "",
              headline: L?.errorHeadline || ""
            },
            introScreen: {
              body: M?.introContent || "",
              btnText: {
                loggedIn: M?.btnTextLoggedIn || "",
                loggedOut: M?.btnTextLoggedOut || ""
              },
              headline: M?.introHeadline || "",
              image: {
                alt: M?.image?.alt || M?.introHeadline || "",
                sources: {
                  desktop: (0, x.useGetCdnSource)(M?.image?.sources?.en_us?.desktop) || null,
                  mobile: (0, x.useGetCdnSource)(M?.image?.sources?.en_us?.mobile) || null
                }
              },
              tag: M?.tag || ""
            },
            legalText: P,
            successScreen: {
              body: W?.successContent || "",
              headline: W?.successHeadline || ""
            },
            unlinkedScreen: {
              body: B?.unlinkedContent || "",
              btnText: B?.unlinkedButtonText || "",
              headline: B?.unlinkedHeadline || ""
            }
          },
          {
            CharacterCard: H
          } = g,
          [F] = (0, r.useSearchParams)(),
          {
            data: D,
            loggedIn: U
          } = (0, u.useRockstarUser)(),
          X = (0, d.useRockstarTokenPing)(),
          Y = `https://${S}.rockstargames.com/settings/linkedaccounts`,
          q = (0, l.toScLocaleString)(A),
          z = (0, p.useIntl)(),
          {
            track: V
          } = (0, u.useGtmTrack)(),
          {
            ref: G,
            inView: Z
          } = (0, i.useInView)({
            threshold: .6
          }),
          K = 1280,
          Q = (0, a.createRef)(),
          J = (0, a.createRef)(),
          ee = (0, a.createRef)(),
          te = (0, a.createRef)(),
          ne = (0, a.createRef)(),
          ae = (0, a.createRef)(),
          [re, se] = (0, a.useState)(),
          [ce, oe] = (0, a.useState)([]),
          [ie, le] = (0, a.useState)(!1),
          [de, ue] = (0, a.useState)(),
          [ge, fe] = (0, a.useState)("hidden"),
          [me, be] = (0, a.useState)("hidden"),
          [he, pe] = (0, a.useState)("hidden"),
          [ve, xe] = (0, a.useState)("hidden"),
          [ke, ye] = (0, a.useState)(!1),
          we = (0, d.useRockstarToken)(),
          [Se, Ce] = (0, a.useState)(_),
          [je, Te] = (0, a.useState)(0),
          [Ne, _e] = (0, a.useState)(0),
          [Ee, Ie] = (0, a.useState)(0),
          [Re, Me] = (0, a.useState)(0),
          [Le, Be] = (0, a.useState)(0),
          [We, Oe] = (0, a.useState)(!1),
          [Pe, Ae] = (0, a.useState)(!1),
          $e = (0, a.useRef)(null),
          He = (0, a.useRef)(null),
          [Fe, De] = (0, a.useState)({}),
          [Ue, Xe] = (0, a.useState)(),
          [Ye, qe] = (0, a.useState)(!1),
          [ze, Ve] = (0, a.useState)(!0),
          [Ge, Ze] = (0, a.useState)($.introScreen.image.sources.mobile || k),
          Ke = `${document.location.pathname}${document.location.search}#${O}`,
          Qe = (0, l.usePrevious)(de),
          Je = (0, l.usePrevious)(U),
          et = () => {
            Q.current && _e(Q?.current?.scrollHeight), J.current && Ie(J?.current?.scrollHeight), ee.current && Me(ee?.current?.scrollHeight), te.current && Be(te?.current?.scrollHeight)
          },
          tt = (e, t) => {
            e === _ && (Ce(_), t && Te(Ne), be("onScreen"), fe("hidden"), xe("hidden"), pe("hidden")), e === E && (Ce(E), t && Te(Ee), be("offScreen"), fe("visible"), setTimeout((() => {
              be("hidden")
            }), 300), setTimeout((() => {
              fe("onScreen")
            }), 100)), e === N && (Ce(N), t && Te(Re), be("offScreen"), xe("visible"), setTimeout((() => {
              be("hidden")
            }), 300), setTimeout((() => {
              xe("onScreen")
            }), 100)), e === I && (Ce(I), t && Te(Le), be("offScreen"), pe("visible"), setTimeout((() => {
              be("hidden")
            }), 300), setTimeout((() => {
              pe("onScreen")
            }), 100))
          },
          nt = e => `https://${j}.rockstargames.com/tpa/${e}/link/?cid=${T}&lang=${q}&returnUrl=${encodeURIComponent(Ke)}&accessToken=${we}`;
        return (0, a.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== n ? Ze($.introScreen.image.sources.mobile || k) : Ze($.introScreen.image.sources.desktop || k)
            },
            t = () => {
              et(), window.innerWidth <= K && !ie && (le(!0), tt(Se, !0)), window.innerWidth > K && ie && le(!1), e()
            };
          return le(window.innerWidth <= K), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [Se, ie, Q, te, ee, J]), (0, a.useEffect)((() => {
          Se === E && je !== Ee ? Te(Ee) : Se === N && je !== Re ? Te(Re) : Se === _ && je !== Ne ? Te(Ne) : Se === I && je !== Le && Te(Le)
        }), [Re, Ee, je, Le, Ne]), (0, a.useEffect)((() => {
          et(), We && Se === E && Te(J?.current?.scrollHeight)
        }), [Q, te, ee, J]), (0, a.useEffect)((() => {
          const e = D?.characters?.gtao;
          oe(e || [])
        }), [D]), (0, a.useEffect)((() => {
          "boolean" != typeof Qe && "boolean" != typeof Je || de && U && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: X,
              query: {
                giftUId: t
              }
            });
            se(e), ue(!1)
          })()
        }), [de, U]), (0, a.useEffect)((() => {
          "boolean" == typeof U ? U ? ue(!0) : (ue(!1), be("onScreen")) : ue(!0)
        }), [U]), (0, a.useEffect)((() => {
          re ? (Oe(!0), tt(E, !0)) : "boolean" != typeof re || re || tt(_, !0)
        }), [re]), (0, a.useEffect)((() => {
          Z && !ke && (V({
            element_placement: "WOC",
            event: "page_section_impression"
          }), ye(!0))
        }), [Z]), (0, a.useEffect)((() => {
          "onScreen" === ge && V({
            element_placement: "WOC",
            event: "alert_update",
            o_id: t,
            text: "Almost there!"
          })
        }), [ge]), (0, a.useEffect)((() => {
          "onScreen" === he && V({
            element_placement: "WOC",
            event: "alert_error",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [he]), (0, a.useEffect)((() => {
          "onScreen" === ve && V({
            element_placement: "event_label",
            event: "alert_error",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [ve]), (0, a.useEffect)((() => {
          ae?.current && Ae(ae.current.scrollWidth >= ae.current.offsetWidth)
        }), [ae]), (0, a.useEffect)((() => {
          Xe({
            nextEl: $e.current,
            prevEl: He.current
          })
        }), [He, $e]), (0, w.jsx)(w.Fragment, {
          children: (0, w.jsx)("div", {
            className: y.interestTrackerWrapper,
            children: (0, w.jsxs)(o.motion.div, {
              className: [y.interestTracker, de && y.loader].join(" "),
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                margin: "-20%",
                once: !0
              },
              transition: {
                duration: .4,
                ease: "easeIn"
              },
              "data-context": "interestTracker",
              ref: G,
              id: O || "",
              children: [(0, w.jsx)("div", {
                className: y.moduleImage,
                style: {
                  "--engagement-image": `url(${Ge})`
                }
              }), (0, w.jsx)("div", {
                className: [y.slideContainer, de ? y.loader : ""].join(" "),
                ref: ne,
                "data-dev-mode": "disabled",
                style: {
                  "--engagement-height": 0 === je ? "200%" : `${je}px`,
                  height: 0 !== je && ie ? `${je}px` : "auto"
                },
                children: de ? (0, w.jsx)(h.A, {
                  type: "SPINNING"
                }) : (0, w.jsxs)(w.Fragment, {
                  children: [(0, w.jsxs)("div", {
                    className: [y.contentContainer, y[me], y.landingSlide].join(" "),
                    ref: Q,
                    children: [(0, w.jsx)("img", {
                      src: $.introScreen.image.sources.mobile || k,
                      className: y.moduleImageMobile,
                      alt: $.introScreen.image.alt
                    }), (0, w.jsxs)("div", {
                      className: y.topContent,
                      children: [(0, w.jsx)("div", {
                        className: y.textContent,
                        children: (0, w.jsxs)("div", {
                          className: y.alert,
                          children: [(0, w.jsx)("div", {
                            className: y.badge,
                            children: $.introScreen.tag
                          }), (0, w.jsxs)("div", {
                            className: y.alertText,
                            children: [(0, w.jsx)("h2", {
                              children: $.introScreen.headline
                            }), (0, w.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: $.introScreen.body
                              }
                            })]
                          })]
                        })
                      }), (0, w.jsx)("div", {
                        className: y.btnContainer,
                        children: (0, w.jsx)(b.A, {
                          text: U ? $.introScreen.btnText.loggedIn : $.introScreen.btnText.loggedOut,
                          onClick: U ? async () => {
                            V({
                              element_placement: "WOC",
                              event: "cta_claim",
                              o_id: t,
                              text: "claim now"
                            });
                            const e = {
                              giftUId: t,
                              location: n,
                              utmCampaign: F.get("utm_campaign"),
                              utmContent: F.get("utm_content"),
                              utmMedium: F.get("utm_medium"),
                              utmSource: F.get("utm_source")
                            };
                            if (ce.length > 0) {
                              const {
                                status: t
                              } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                                fetchOptions: {
                                  method: "POST"
                                },
                                pingBearer: X,
                                query: e
                              }) ?? [];
                              tt(t ? E : N, !1)
                            } else tt(I, !1)
                          } : () => {
                            const e = `${C}?returnUrl=${encodeURIComponent(Ke)}&lang=${q}`;
                            V({
                              element_placement: "WOC",
                              event: "cta_login",
                              link_url: e,
                              text: "claim now"
                            }), window.location.href = e
                          }
                        })
                      })]
                    }), (0, w.jsx)("div", {
                      className: y.bottomContent,
                      children: (0, w.jsx)("div", {
                        className: y.legal,
                        children: (0, w.jsx)(R, {
                          legalText: $.legalText
                        })
                      })
                    })]
                  }), (0, w.jsxs)("div", {
                    className: [y.contentContainer, y[ge], y.successSlide].join(" "),
                    "data-type": "long",
                    ref: J,
                    children: [(0, w.jsxs)("div", {
                      className: y.topContent,
                      children: [(0, w.jsxs)("div", {
                        className: y.alert,
                        children: [(0, w.jsx)("div", {
                          className: y.successAlert
                        }), (0, w.jsxs)("div", {
                          className: y.alertText,
                          children: [(0, w.jsx)("h3", {
                            children: $.successScreen.headline
                          }), (0, w.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: $.successScreen.body
                            }
                          })]
                        })]
                      }), (0, w.jsxs)("div", {
                        className: y.swiperWrap,
                        children: [(0, w.jsx)("div", {
                          className: y.swiperContainer,
                          ref: ae,
                          "data-hasoverflow": Pe,
                          children: (0, w.jsxs)(s.RC, {
                            loop: !1,
                            grabCursor: Pe,
                            slidesPerView: "auto",
                            speed: 700,
                            navigation: Ue,
                            modules: [c.Vx],
                            onInit: e => {
                              De(e)
                            },
                            children: [ce.map((e => (0, w.jsx)(s.qr, {
                              children: (0, a.createElement)(H, {
                                characterData: e,
                                key: e.mugshotUrl
                              })
                            }, e.mugshotUrl))), (0, w.jsx)(s.qr, {
                              children: (0, w.jsx)(f.A, {
                                className: [y.linkMore, ce.length > 0 ? y.withIcon : ""].join(" "),
                                to: Y,
                                onClick: () => {
                                  V({
                                    element_placement: "WOC",
                                    event: "cta_link_account",
                                    link_url: Y,
                                    text: v.engagement.engagement_link_account.defaultMessage
                                  })
                                },
                                children: (0, w.jsx)("div", {
                                  className: y.btnText,
                                  children: (0, w.jsx)(p.FormattedMessage, {
                                    ...v.engagement.engagement_link_account
                                  })
                                })
                              })
                            }, "linkMore")]
                          })
                        }), (0, w.jsx)("button", {
                          className: y.swiperBtnPrev,
                          "aria-label": "Previous Character",
                          type: "button",
                          ref: He,
                          onClick: () => {
                            Fe?.slidePrev(), qe(Fe?.isEnd), Ve(Fe?.isBeginning)
                          },
                          disabled: ze,
                          "data-hidden": !Pe
                        }), (0, w.jsx)("button", {
                          className: y.swiperBtnNext,
                          "aria-label": "Next Character",
                          type: "button",
                          ref: $e,
                          onClick: () => {
                            Fe?.slideNext(), qe(Fe?.isEnd), Ve(Fe?.isBeginning)
                          },
                          disabled: Ye,
                          "data-hidden": !Pe
                        })]
                      })]
                    }), (0, w.jsx)("div", {
                      className: y.legal,
                      children: (0, w.jsx)(R, {
                        legalText: $.legalText
                      })
                    })]
                  }), (0, w.jsxs)("div", {
                    className: [y.contentContainer, y[he], y.unlinkedSlide, y.textContent].join(" "),
                    ref: te,
                    children: [(0, w.jsx)("div", {
                      className: y.textContent,
                      children: (0, w.jsxs)("div", {
                        className: y.platformButtonContainer,
                        children: [(0, w.jsx)("div", {
                          className: y.errorAlert
                        }), (0, w.jsx)("h3", {
                          children: $.unlinkedScreen.headline
                        }), (0, w.jsx)(m.A, {
                          buttonText: z.formatMessage(v.engagement.engagement_link_console_account),
                          platformsAndLinks: [{
                            href: nt("np"),
                            key: "ps",
                            platform: "ps",
                            translated: !0
                          }, {
                            href: nt("xbox"),
                            key: "xbox",
                            platform: "xbox",
                            translated: !0
                          }],
                          trackingType: "link_account",
                          trackingParent: "WOC",
                          target: "_self",
                          trackingOId: t,
                          children: (0, w.jsx)("div", {
                            className: y.alert,
                            children: (0, w.jsx)("div", {
                              className: y.alertText,
                              children: (0, w.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: $.unlinkedScreen.body
                                }
                              })
                            })
                          })
                        })]
                      })
                    }), (0, w.jsx)("div", {
                      className: y.legal,
                      children: (0, w.jsx)(R, {
                        legalText: $.legalText
                      })
                    })]
                  }), (0, w.jsxs)("div", {
                    className: [y.contentContainer, y[ve], y.errorSlide, y.textContent].join(" "),
                    ref: ee,
                    children: [(0, w.jsxs)("div", {
                      className: y.textContent,
                      children: [(0, w.jsxs)("div", {
                        className: y.alert,
                        children: [(0, w.jsx)("div", {
                          className: y.errorAlert
                        }), (0, w.jsx)("div", {
                          className: y.alertText,
                          children: (0, w.jsx)("h3", {
                            children: $.errorScreen.headline
                          })
                        })]
                      }), (0, w.jsx)(b.A, {
                        text: $.errorScreen.btnText,
                        onClick: () => window.location.reload()
                      })]
                    }), (0, w.jsx)("div", {
                      className: y.legal,
                      children: (0, w.jsx)(R, {
                        legalText: $.legalText
                      })
                    })]
                  })]
                })
              })]
            })
          })
        })
      }
    }
  }
]);