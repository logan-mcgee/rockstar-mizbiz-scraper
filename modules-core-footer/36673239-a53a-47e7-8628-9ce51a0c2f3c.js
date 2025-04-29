! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "36673239-a53a-47e7-8628-9ce51a0c2f3c", n._sentryDebugIdIdentifier = "sentry-dbid-36673239-a53a-47e7-8628-9ce51a0c2f3c")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8961], {
    89412: (n, e, t) => {
      t.d(e, {
        m: () => r
      });
      var r = function() {
        return t.nc
      }
    },
    85191: (n, e, t) => {
      t.d(e, {
        E9: () => i,
        Mi: () => r,
        pN: () => o,
        xi: () => a
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        a = "--removed-body-scroll-bar-size"
    },
    14028: (n, e, t) => {
      t.d(e, {
        jp: () => h
      });
      var r, o, i, a, c = t(62229),
        d = t(89412),
        l = t(85191),
        u = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        s = function(n) {
          return parseInt(n || "", 10) || 0
        },
        f = (i = 0, a = null, r = {
          add: function(n) {
            var e, t;
            0 == i && (a = function() {
              if (!document) return null;
              var n = document.createElement("style");
              n.type = "text/css";
              var e = (0, d.m)();
              return e && n.setAttribute("nonce", e), n
            }()) && (t = n, (e = a).styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), function(n) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(n)
            }(a)), i++
          },
          remove: function() {
            !--i && a && (a.parentNode && a.parentNode.removeChild(a), a = null)
          }
        }, o = function(n, e) {
          c.useEffect((function() {
            return r.add(n),
              function() {
                r.remove()
              }
          }), [n && e])
        }, function(n) {
          var e = n.styles,
            t = n.dynamic;
          return o(e, t), null
        }),
        p = "data-scroll-locked",
        g = function(n, e, t, r) {
          var o = n.left,
            i = n.top,
            a = n.right,
            c = n.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat(l.E9, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body[").concat(p, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l.Mi, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(l.pN, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(l.Mi, " .").concat(l.Mi, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(l.pN, " .").concat(l.pN, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(p, "] {\n    ").concat(l.xi, ": ").concat(c, "px;\n  }\n")
        },
        m = function() {
          var n = parseInt(document.body.getAttribute(p) || "0", 10);
          return isFinite(n) ? n : 0
        },
        h = function(n) {
          var e = n.noRelative,
            t = n.noImportant,
            r = n.gapMode,
            o = void 0 === r ? "margin" : r;
          c.useEffect((function() {
            return document.body.setAttribute(p, (m() + 1).toString()),
              function() {
                var n = m() - 1;
                n <= 0 ? document.body.removeAttribute(p) : document.body.setAttribute(p, n.toString())
              }
          }), []);
          var i = c.useMemo((function() {
            return function(n) {
              if (void 0 === n && (n = "margin"), "undefined" == typeof window) return u;
              var e = function(n) {
                  var e = window.getComputedStyle(document.body),
                    t = e["padding" === n ? "paddingLeft" : "marginLeft"],
                    r = e["padding" === n ? "paddingTop" : "marginTop"],
                    o = e["padding" === n ? "paddingRight" : "marginRight"];
                  return [s(t), s(r), s(o)]
                }(n),
                t = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: e[0],
                top: e[1],
                right: e[2],
                gap: Math.max(0, r - t + e[2] - e[0])
              }
            }(o)
          }), [o]);
          return c.createElement(f, {
            styles: g(i, !e, o, t ? "" : "!important")
          })
        }
    },
    33758: (n, e, t) => {
      t.d(e, {
        T0: () => i
      });
      var r = t(62229),
        o = t(89412),
        i = function() {
          var n, e, t, i = (e = 0, t = null, n = {
            add: function(n) {
              var r, i;
              0 == e && (t = function() {
                if (!document) return null;
                var n = document.createElement("style");
                n.type = "text/css";
                var e = (0, o.m)();
                return e && n.setAttribute("nonce", e), n
              }()) && (i = n, (r = t).styleSheet ? r.styleSheet.cssText = i : r.appendChild(document.createTextNode(i)), function(n) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(n)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }, function(e, t) {
            r.useEffect((function() {
              return n.add(e),
                function() {
                  n.remove()
                }
            }), [e && t])
          });
          return function(n) {
            var e = n.styles,
              t = n.dynamic;
            return i(e, t), null
          }
        }
    },
    91116: (n, e, t) => {
      t.d(e, {
        m: () => a
      });
      var r = t(91299),
        o = t(62229),
        i = function(n) {
          var e = n.sideCar,
            t = (0, r.__rest)(n, ["sideCar"]);
          if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var i = e.read();
          if (!i) throw new Error("Sidecar medium not found");
          return o.createElement(i, (0, r.__assign)({}, t))
        };

      function a(n, e) {
        return n.useMedium(e), i
      }
      i.isSideCarExport = !0
    },
    2788: (n, e, t) => {
      t.d(e, {
        f: () => i
      });
      var r = t(91299);

      function o(n) {
        return n
      }

      function i(n) {
        void 0 === n && (n = {});
        var e = function(n, e) {
          void 0 === e && (e = o);
          var t = [],
            r = !1;
          return {
            read: function() {
              if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
              return t.length ? t[t.length - 1] : n
            },
            useMedium: function(n) {
              var o = e(n, r);
              return t.push(o),
                function() {
                  t = t.filter((function(n) {
                    return n !== o
                  }))
                }
            },
            assignSyncMedium: function(n) {
              for (r = !0; t.length;) {
                var e = t;
                t = [], e.forEach(n)
              }
              t = {
                push: function(e) {
                  return n(e)
                },
                filter: function() {
                  return t
                }
              }
            },
            assignMedium: function(n) {
              r = !0;
              var e = [];
              if (t.length) {
                var o = t;
                t = [], o.forEach(n), e = t
              }
              var i = function() {
                  var t = e;
                  e = [], t.forEach(n)
                },
                a = function() {
                  return Promise.resolve().then(i)
                };
              a(), t = {
                push: function(n) {
                  e.push(n), a()
                },
                filter: function(n) {
                  return e = e.filter(n), t
                }
              }
            }
          }
        }(null);
        return e.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, n), e
      }
    },
    51838: (n, e, t) => {},
    81542: (n, e, t) => {
      t.d(e, {
        bZ: () => u,
        v6: () => c
      }), t(51838);
      var r = t(5060);
      const o = new Map;

      function i(n, e) {
        if (n === e) return n;
        const t = o.get(n);
        if (t) return t.forEach((n => n(e))), e;
        const r = o.get(e);
        return r ? (r.forEach((e => e(n))), n) : e
      }

      function a(...n) {
        return (...e) => {
          for (const t of n) "function" == typeof t && t(...e)
        }
      }

      function c(...n) {
        const e = {
          ...n[0]
        };
        for (let t = 1; t < n.length; t++) {
          const o = n[t];
          for (const n in o) {
            const t = e[n],
              c = o[n];
            "function" == typeof t && "function" == typeof c && "o" === n[0] && "n" === n[1] && n.charCodeAt(2) >= 65 && n.charCodeAt(2) <= 90 ? e[n] = a(t, c) : "className" !== n && "UNSAFE_className" !== n || "string" != typeof t || "string" != typeof c ? "id" === n && t && c ? e.id = i(t, c) : e[n] = void 0 !== c ? c : t : e[n] = (0, r.A)(t, c)
          }
        }
        return e
      }
      const d = /^(on.*)$/,
        l = /^(onPress.*)$/;

      function u(n, {
        onPress: e
      } = {
        onPress: !0
      }) {
        const t = {},
          r = {};
        for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && (l.test(o) ? e ? t[o] = n[o] : r[o] = n[o] : d.test(o) ? t[o] = n[o] : r[o] = n[o]);
        return {
          events: t,
          others: r
        }
      }
      var s;
      t(55136), t(29276), t(22241), t(90614), t(8237), t(80098),
        function(n) {
          n.Pending = "pending", n.Fulfilled = "fulfilled", n.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag
    },
    66168: (n, e, t) => {
      t.d(e, {
        b: () => u
      });
      var r = t(62229),
        o = (t(44853), t(11735)),
        i = t(73855),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((n, e) => {
          const t = r.forwardRef(((n, t) => {
            const {
              asChild: r,
              ...a
            } = n, c = r ? o.DX : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(c, {
              ...a,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${e}`, {
            ...n,
            [e]: t
          }
        }), {}),
        c = r.forwardRef(((n, e) => (0, i.jsx)(a.span, {
          ...n,
          ref: e,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...n.style
          }
        })));
      c.displayName = "VisuallyHidden";
      var d = c,
        l = ({
          children: n,
          label: e
        }) => {
          const t = r.Children.only(n);
          return (0, i.jsxs)(i.Fragment, {
            children: [r.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, i.jsx)(d, {
              children: e
            })]
          })
        };
      l.displayName = "AccessibleIcon";
      var u = l
    },
    11735: (n, e, t) => {
      t.d(e, {
        DX: () => a,
        xV: () => d
      });
      var r = t(62229);

      function o(...n) {
        return e => n.forEach((n => function(n, e) {
          "function" == typeof n ? n(e) : null != n && (n.current = e)
        }(n, e)))
      }
      var i = t(73855),
        a = r.forwardRef(((n, e) => {
          const {
            children: t,
            ...o
          } = n, a = r.Children.toArray(t), d = a.find(l);
          if (d) {
            const n = d.props.children,
              t = a.map((e => e === d ? r.Children.count(n) > 1 ? r.Children.only(null) : r.isValidElement(n) ? n.props.children : null : e));
            return (0, i.jsx)(c, {
              ...o,
              ref: e,
              children: r.isValidElement(n) ? r.cloneElement(n, void 0, t) : null
            })
          }
          return (0, i.jsx)(c, {
            ...o,
            ref: e,
            children: t
          })
        }));
      a.displayName = "Slot";
      var c = r.forwardRef(((n, e) => {
        const {
          children: t,
          ...i
        } = n;
        if (r.isValidElement(t)) {
          const n = function(n) {
            let e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
              t = e && "isReactWarning" in e && e.isReactWarning;
            return t ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref)
          }(t);
          return r.cloneElement(t, {
            ...u(i, t.props),
            ref: e ? o(e, n) : n
          })
        }
        return r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      c.displayName = "SlotClone";
      var d = ({
        children: n
      }) => (0, i.jsx)(i.Fragment, {
        children: n
      });

      function l(n) {
        return r.isValidElement(n) && n.type === d
      }

      function u(n, e) {
        const t = {
          ...e
        };
        for (const r in e) {
          const o = n[r],
            i = e[r];
          /^on[A-Z]/.test(r) ? o && i ? t[r] = (...n) => {
            i(...n), o(...n)
          } : o && (t[r] = o) : "style" === r ? t[r] = {
            ...o,
            ...i
          } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
        }
        return {
          ...n,
          ...t
        }
      }
    }
  }
]);